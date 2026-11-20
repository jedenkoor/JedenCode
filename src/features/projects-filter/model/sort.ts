import type { Project } from '@/entities/project'

export type SortDirection = 'asc' | 'desc'
export type SortValue = 'year-asc' | 'year-desc' | 'alphabet-asc' | 'alphabet-desc'

export type SortOption = {
    value: SortValue
    label: string
    direction: SortDirection
    compare: (a: Project, b: Project) => number
}

const byTitle = (a: Project, b: Project): number => a.title.toLowerCase().localeCompare(b.title.toLowerCase())

export const sortOptions: SortOption[] = [
    {
        value: 'year-asc',
        label: 'По году создания',
        direction: 'asc',
        compare: (a, b) => a.year - b.year
    },
    {
        value: 'year-desc',
        label: 'По году создания',
        direction: 'desc',
        compare: (a, b) => b.year - a.year
    },
    { value: 'alphabet-asc', label: 'По алфавиту A-Z', direction: 'asc', compare: byTitle },
    { value: 'alphabet-desc', label: 'По алфавиту Z-A', direction: 'desc', compare: (a, b) => byTitle(b, a) }
]

export const findSortOption = (value: SortValue): SortOption =>
    sortOptions.find(option => option.value === value) ?? sortOptions[0]!
