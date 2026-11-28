import { describe, expect, it } from 'vitest'
import { findSortOption, sortOptions, type SortValue } from '@/features/projects-filter/model/sort'
import { makeProject } from './fixtures/projects'

const collator = new Intl.Collator('en', { sensitivity: 'base' })

const compare = (value: SortValue, a = makeProject(), b = makeProject()) =>
    findSortOption(value).compare(a, b, collator)

describe('sortOptions', () => {
    it('описывает четыре варианта сортировки', () => {
        expect(sortOptions.map(option => option.value)).toEqual([
            'year-asc',
            'year-desc',
            'alphabet-asc',
            'alphabet-desc'
        ])
    })

    it('сортирует по году по возрастанию', () => {
        expect(compare('year-asc', makeProject({ year: 2020 }), makeProject({ year: 2024 }))).toBeLessThan(0)
        expect(compare('year-asc', makeProject({ year: 2024 }), makeProject({ year: 2020 }))).toBeGreaterThan(0)
        expect(compare('year-asc', makeProject({ year: 2024 }), makeProject({ year: 2024 }))).toBe(0)
    })

    it('сортирует по году по убыванию', () => {
        expect(compare('year-desc', makeProject({ year: 2024 }), makeProject({ year: 2020 }))).toBeLessThan(0)
    })

    it('сортирует по алфавиту в обе стороны', () => {
        const alpha = makeProject({ title: 'Alpha' })
        const beta = makeProject({ title: 'Beta' })

        expect(compare('alphabet-asc', alpha, beta)).toBeLessThan(0)
        expect(compare('alphabet-desc', alpha, beta)).toBeGreaterThan(0)
    })

    it('сравнивает алфавит с учётом локали', () => {
        const russian = new Intl.Collator('ru', { sensitivity: 'base' })

        expect(findSortOption('alphabet-asc').compare(makeProject({ title: 'Альфа' }), makeProject({ title: 'Бета' }), russian))
            .toBeLessThan(0)
    })
})

describe('findSortOption', () => {
    it('находит вариант по значению', () => {
        expect(findSortOption('alphabet-desc').value).toBe('alphabet-desc')
    })

    it('возвращает вариант по умолчанию для неизвестного значения', () => {
        expect(findSortOption('unknown' as SortValue).value).toBe('year-desc')
    })
})
