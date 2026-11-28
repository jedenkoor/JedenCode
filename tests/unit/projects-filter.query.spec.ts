import { describe, expect, it } from 'vitest'
import type { LocationQuery } from 'vue-router'
import { DEFAULT_SORT } from '@/features/projects-filter/model/sort'
import {
    buildQuery,
    checkIsSortValue,
    readQueryState,
    readStackQuery
} from '@/features/projects-filter/model/query'

const STACKS = ['Nuxt 3', 'TypeScript', 'Vue'] as const

describe('readStackQuery', () => {
    it('читает один стек', () => {
        expect(readStackQuery('Vue')).toEqual(['Vue'])
    })

    it('разбивает список через запятую', () => {
        expect(readStackQuery('Vue,Nuxt 3')).toEqual(['Vue', 'Nuxt 3'])
    })

    it('поддерживает повторяющийся параметр', () => {
        expect(readStackQuery(['Vue', 'Nuxt 3'])).toEqual(['Vue', 'Nuxt 3'])
    })

    it('смешивает список и повторяющийся параметр', () => {
        expect(readStackQuery(['Vue,Nuxt 3', 'TypeScript'])).toEqual(['Vue', 'Nuxt 3', 'TypeScript'])
    })

    it('убирает дубли и пробелы', () => {
        expect(readStackQuery(' Vue , Vue , Nuxt 3 ')).toEqual(['Vue', 'Nuxt 3'])
    })

    it('отбрасывает пустые значения', () => {
        expect(readStackQuery('Vue,, ,')).toEqual(['Vue'])
    })

    it('возвращает пустой массив для undefined и не-строк', () => {
        expect(readStackQuery(undefined)).toEqual([])
        expect(readStackQuery([null, 42, {}])).toEqual([])
    })
})

describe('checkIsSortValue', () => {
    it('принимает известные значения', () => {
        expect(checkIsSortValue('year-asc')).toBe(true)
        expect(checkIsSortValue('alphabet-desc')).toBe(true)
    })

    it('отклоняет мусор', () => {
        expect(checkIsSortValue('year')).toBe(false)
        expect(checkIsSortValue('')).toBe(false)
        expect(checkIsSortValue(null)).toBe(false)
        expect(checkIsSortValue(['year-asc'])).toBe(false)
    })
})

describe('readQueryState', () => {
    it('читает фильтры и сортировку', () => {
        expect(readQueryState({ stack: 'Vue,TypeScript', sort: 'year-asc' }, STACKS)).toEqual({
            filters: ['Vue', 'TypeScript'],
            sort: 'year-asc'
        })
    })

    it('отбрасывает стеки, которых нет в проектах', () => {
        expect(readQueryState({ stack: 'Vue,Unknown' }, STACKS)).toEqual({
            filters: ['Vue'],
            sort: DEFAULT_SORT
        })
    })

    it('возвращает сортировку по умолчанию для пустого или неверного query', () => {
        expect(readQueryState({}, STACKS)).toEqual({ filters: [], sort: DEFAULT_SORT })
        expect(readQueryState({ sort: 'random' }, STACKS).sort).toBe(DEFAULT_SORT)
    })
})

describe('buildQuery', () => {
    it('сохраняет посторонние параметры', () => {
        const query: LocationQuery = { utm_source: 'telegram', page: '2' }

        expect(buildQuery(query, ['Vue'], 'year-asc')).toEqual({
            utm_source: 'telegram',
            page: '2',
            stack: 'Vue',
            sort: 'year-asc'
        })
    })

    it('не дублирует stack и пишет список через запятую', () => {
        expect(buildQuery({ stack: ['Vue', 'Nuxt 3'] }, ['Vue', 'Nuxt 3'], DEFAULT_SORT)).toEqual({
            stack: 'Vue,Nuxt 3'
        })
    })

    it('удаляет stack при пустом фильтре', () => {
        expect(buildQuery({ stack: 'Vue' }, [], DEFAULT_SORT)).toEqual({})
    })

    it('не пишет сортировку по умолчанию', () => {
        expect(buildQuery({ sort: 'year-asc' }, [], DEFAULT_SORT).sort).toBeUndefined()
    })

    it('не меняет исходный объект query', () => {
        const query: LocationQuery = { stack: 'Vue' }
        buildQuery(query, [], 'year-asc')

        expect(query).toEqual({ stack: 'Vue' })
    })
})
