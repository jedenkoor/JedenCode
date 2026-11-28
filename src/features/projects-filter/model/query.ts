import type { LocationQuery } from 'vue-router'
import type { Project } from '@/entities/project'
import { DEFAULT_SORT, findSortOption, sortOptions, type SortValue } from './sort'

export const checkIsSortValue = (value: unknown): value is SortValue =>
    typeof value === 'string' && sortOptions.some(option => option.value === value)

/**
 * `?stack=Vue,Webpack` → `['Vue', 'Webpack']`.
 * Поддерживаем и старый вариант с несколькими `stack=...` в URL.
 */
export const readStackQuery = (value: unknown): string[] => {
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

export type QueryState = {
    filters: string[]
    sort: SortValue
}

/** Читает состояние фильтра из query, отбрасывая неизвестные значения. */
export const readQueryState = (query: LocationQuery, stacks: readonly string[]): QueryState => ({
    filters: readStackQuery(query.stack).filter(stack => stacks.includes(stack)),
    sort: checkIsSortValue(query.sort) ? query.sort : DEFAULT_SORT
})

/** Собирает query для `router.replace`: чужие параметры (`utm_*` и т. п.) сохраняются. */
export const buildQuery = (
    query: LocationQuery,
    filters: readonly string[],
    sort: SortValue
): LocationQuery => {
    const next: LocationQuery = { ...query }

    if (filters.length) {
        // Один параметр: ?stack=Vue,Webpack — ключ не дублируется
        next.stack = filters.join(',')
    } else {
        delete next.stack
    }

    if (sort === DEFAULT_SORT) {
        delete next.sort
    } else {
        next.sort = sort
    }

    return next
}

/** Фильтрует и сортирует проекты; исходный массив не меняется. */
export const selectProjects = (
    projects: readonly Project[],
    filters: readonly string[],
    sort: SortValue,
    collator: Intl.Collator
): Project[] => {
    const list = filters.length
        ? projects.filter(project => filters.some(stack => project.stack.includes(stack)))
        : [...projects]

    return list.sort((a, b) => findSortOption(sort).compare(a, b, collator))
}
