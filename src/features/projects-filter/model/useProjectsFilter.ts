import { computed, ref, toValue, watch, type MaybeRefOrGetter } from 'vue'
import { useRoute, useRouter } from '#imports'
import type { LocationQuery } from 'vue-router'
import type { Project } from '@/entities/project'
import type { AppLocale } from '@/shared/constants'
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

type QueryState = {
    filters: string[]
    sort: SortValue
}

const readQueryState = (query: LocationQuery, stacks: readonly string[]): QueryState => ({
    filters: readStackQuery(query.stack).filter(stack => stacks.includes(stack)),
    sort: checkIsSortValue(query.sort) ? query.sort : DEFAULT_SORT
})

/**
 * Фильтрация и сортировка проектов.
 *
 * Начальное состояние читается из query (`?stack=Vue,Webpack&sort=year-asc`),
 * изменения пишутся обратно через `router.replace`, поэтому SSR сразу отдаёт
 * отфильтрованный список, а ссылкой можно поделиться.
 */
export function useProjectsFilter(
    projects: MaybeRefOrGetter<readonly Project[]>,
    locale: MaybeRefOrGetter<AppLocale>
) {
    const route = useRoute()
    const router = useRouter()

    // Набор проектов зависит от локали, поэтому читаем его лениво
    const projectList = computed<readonly Project[]>(() => toValue(projects))
    const collator = computed<Intl.Collator>(() => new Intl.Collator(toValue(locale), { sensitivity: 'base' }))

    const stacks = computed<string[]>(() => [...new Set(projectList.value.flatMap(project => project.stack))].sort())

    const initialState = readQueryState(route.query, stacks.value)
    const filters = ref<string[]>(initialState.filters)
    const sort = ref<SortValue>(initialState.sort)

    const filteredProjects = computed<Project[]>(() => {
        const list = filters.value.length
            ? projectList.value.filter(project => filters.value.some(stack => project.stack.includes(stack)))
            : [...projectList.value]

        return list.sort((a, b) => findSortOption(sort.value).compare(a, b, collator.value))
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

    // Навигация назад/вперёд меняет query без изменения локального состояния
    watch(
        () => route.query,
        query => {
            const nextState = readQueryState(query, stacks.value)
            if (nextState.filters.join('|') !== filters.value.join('|')) {
                filters.value = nextState.filters
            }
            if (nextState.sort !== sort.value) {
                sort.value = nextState.sort
            }
        }
    )

    return { filters, sort, stacks, filteredProjects }
}
