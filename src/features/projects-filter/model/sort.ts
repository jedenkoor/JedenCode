import type { Project } from '@/entities/project'

export type SortDirection = 'asc' | 'desc'
export type SortValue = 'year-asc' | 'year-desc' | 'alphabet-asc' | 'alphabet-desc'
export type SortLabelKey = 'yearAsc' | 'yearDesc' | 'alphabetAsc' | 'alphabetDesc'

/** Сортировка по умолчанию: в URL её не пишем */
export const DEFAULT_SORT: SortValue = 'year-desc'

export type SortOption = {
    value: SortValue
    /** Ключ перевода: `projects.filter.sort.<labelKey>` */
    labelKey: SortLabelKey
    direction: SortDirection
    compare: (a: Project, b: Project, collator: Intl.Collator) => number
}

const byTitle = (a: Project, b: Project, collator: Intl.Collator): number => collator.compare(a.title, b.title)

export const sortOptions: SortOption[] = [
    {
        value: 'year-asc',
        labelKey: 'yearAsc',
        direction: 'asc',
        compare: (a, b) => a.year - b.year
    },
    {
        value: 'year-desc',
        labelKey: 'yearDesc',
        direction: 'desc',
        compare: (a, b) => b.year - a.year
    },
    { value: 'alphabet-asc', labelKey: 'alphabetAsc', direction: 'asc', compare: byTitle },
    { value: 'alphabet-desc', labelKey: 'alphabetDesc', direction: 'desc', compare: (a, b, collator) => byTitle(b, a, collator) }
]

export const findSortOption = (value: SortValue): SortOption =>
    sortOptions.find(option => option.value === value) ?? sortOptions.find(option => option.value === DEFAULT_SORT)!
