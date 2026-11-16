import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from '#imports'
import type { Project } from '@/entities/project'
import { findSortOption, sortOptions, type SortValue } from './sort'

/** Сортировка по умолчанию: в URL её не пишем */
const DEFAULT_SORT: SortValue = 'date-desc'

const checkIsSortValue = (value: unknown): value is SortValue =>
    typeof value === 'string' && sortOptions.some(option => option.value === value)

/**
 * `?stack=Vue,Webpack` → `['Vue', 'Webpack']`.
 * Поддерживаем и старый вариант с несколькими `stack=...` в URL.
 */
const readStackQuery = (value: unknown): string[] => {
    const raw = Array.isArray(value) ? value : [value]

    return [
        ...new Set(
            raw
                .filter((item): item is string => typeof item === 'string')
                .flatMap(item => item.split(','))
                .map(item => item.trim())
                .filter(Boolean)
        )
    ]
}

/**
 * Фильтрация и сортировка проектов.
 *
 * Начальное состояние читается из query (`?stack=Vue,Webpack&sort=date-asc`),
 * изменения пишутся обратно через `router.replace`, поэтому SSR сразу отдаёт
 * отфильтрованный список, а ссылкой можно поделиться.
 */
export function useProjectsFilter(projects: readonly Project[]) {
    const route = useRoute()
    const router = useRouter()

    const stacks = computed<string[]>(() => [...new Set(projects.flatMap(project => project.stack))].sort())

    const filters = ref<string[]>(readStackQuery(route.query.stack).filter(stack => stacks.value.includes(stack)))
    const initialSort = route.query.sort
    const sort = ref<SortValue>(checkIsSortValue(initialSort) ? initialSort : DEFAULT_SORT)

    const filteredProjects = computed<Project[]>(() => {
        const list = filters.value.length
            ? projects.filter(project => filters.value.some(stack => project.stack.includes(stack)))
            : [...projects]

        return list.sort(findSortOption(sort.value).compare)
    })

    watch([filters, sort], () => {
        const query = { ...route.query }

        if (filters.value.length) {
            // Один параметр: ?stack=Vue,Webpack — ключ не дублируется
            query.stack = filters.value.join(',')
        } else {
            delete query.stack
        }

        if (sort.value === DEFAULT_SORT) {
            delete query.sort
        } else {
            query.sort = sort.value
        }

        void router.replace({ query })
    })

    // Навигация назад/вперёд меняет query без изменения локального состояния
    watch(
        () => route.query,
        query => {
            const nextFilters = readStackQuery(query.stack).filter(stack => stacks.value.includes(stack))
            if (nextFilters.join('|') !== filters.value.join('|')) {
                filters.value = nextFilters
            }

            const nextSort = checkIsSortValue(query.sort) ? query.sort : DEFAULT_SORT
            if (nextSort !== sort.value) {
                sort.value = nextSort
            }
        }
    )

    return { filters, sort, stacks, filteredProjects }
}
