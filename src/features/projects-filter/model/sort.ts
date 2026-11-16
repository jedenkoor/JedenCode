import type { Project } from '@/entities/project'

export type SortDirection = 'asc' | 'desc'
export type SortValue = 'date-asc' | 'date-desc' | 'alphabet-asc' | 'alphabet-desc'

export type SortOption = {
    value: SortValue
    label: string
    direction: SortDirection
    compare: (a: Project, b: Project) => number
}

const byTitle = (a: Project, b: Project): number => a.title.toLowerCase().localeCompare(b.title.toLowerCase())

export const sortOptions: SortOption[] = [
    {
        value: 'date-asc',
        label: 'По дате создания',
        direction: 'asc',
        compare: (a, b) => Date.parse(a.date) - Date.parse(b.date)
    },
    {
        value: 'date-desc',
        label: 'По дате создания',
        direction: 'desc',
        compare: (a, b) => Date.parse(b.date) - Date.parse(a.date)
    },
    { value: 'alphabet-asc', label: 'По алфавиту A-Z', direction: 'asc', compare: byTitle },
    { value: 'alphabet-desc', label: 'По алфавиту Z-A', direction: 'desc', compare: (a, b) => byTitle(b, a) }
]

export const findSortOption = (value: SortValue): SortOption =>
    sortOptions.find(option => option.value === value) ?? sortOptions[0]!
