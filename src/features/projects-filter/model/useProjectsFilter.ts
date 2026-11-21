import { computed, ref, toValue, watch, type MaybeRefOrGetter } from 'vue'
import { onNuxtReady, useRoute, useRouter } from '#imports'
import type { Project } from '@/entities/project'
import { findSortOption, sortOptions, type SortValue } from './sort'

/** Сортировка по умолчанию: в URL её не пишем */
const DEFAULT_SORT: SortValue = 'year-desc'

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
 * Начальное состояние читается из query (`?stack=Vue,Webpack&sort=year-asc`),
 * изменения пишутся обратно через `router.replace`, поэтому SSR сразу отдаёт
 * отфильтрованный список, а ссылкой можно поделиться.
 */
export function useProjectsFilter(projects: MaybeRefOrGetter<readonly Project[]>) {
    const route = useRoute()
    const router = useRouter()

    // Набор проектов зависит от локали, поэтому читаем его лениво
    const projectList = computed<readonly Project[]>(() => toValue(projects))

    const stacks = computed<string[]>(() => [...new Set(projectList.value.flatMap(project => project.stack))].sort())

    const filters = ref<string[]>(readStackQuery(route.query.stack).filter(stack => stacks.value.includes(stack)))
    const initialSort = route.query.sort
    const sort = ref<SortValue>(checkIsSortValue(initialSort) ? initialSort : DEFAULT_SORT)

    const filteredProjects = computed<Project[]>(() => {
        const list = filters.value.length
            ? projectList.value.filter(project => filters.value.some(stack => project.stack.includes(stack)))
            : [...projectList.value]

        return list.sort(findSortOption(sort.value).compare)
    })

    const applyQuery = (): void => {
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

        void router.replace({ query, hash: route.hash })
    }

    watch([filters, sort], applyQuery)

    // Во время hydration query может кратковременно прийти пустым:
    // начинаем реагировать на навигацию только после готовности Nuxt
    let isRouteSyncReady = false
    onNuxtReady(() => {
        isRouteSyncReady = true

        // На статике router при гидратации может потерять query из адреса:
        // читаем его напрямую и возвращаем в URL состояние фильтров
        const urlQuery = new URLSearchParams(window.location.search)
        const nextFilters = readStackQuery(urlQuery.getAll('stack')).filter(stack => stacks.value.includes(stack))
        if (nextFilters.join('|') !== filters.value.join('|')) {
            filters.value = nextFilters
        }

        const nextSortQuery = urlQuery.get('sort')
        const nextSort = checkIsSortValue(nextSortQuery) ? nextSortQuery : DEFAULT_SORT
        if (nextSort !== sort.value) {
            sort.value = nextSort
        }

        applyQuery()
    })

    // Навигация назад/вперёд меняет query без изменения локального состояния
    watch(
        () => route.query,
        query => {
            if (!isRouteSyncReady) return

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
