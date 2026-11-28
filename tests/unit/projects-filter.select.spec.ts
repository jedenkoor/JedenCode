import { describe, expect, it } from 'vitest'
import { selectProjects } from '@/features/projects-filter/model/query'
import { makeProject } from './fixtures/projects'

const collator = new Intl.Collator('en', { sensitivity: 'base' })

const projects = [
    makeProject({ title: 'Beta', stack: ['Vue', 'TypeScript'], year: 2020 }),
    makeProject({ title: 'Alpha', stack: ['Nuxt 3'], year: 2024 }),
    makeProject({ title: 'Gamma', stack: ['React'], year: 2022 })
]

describe('selectProjects', () => {
    it('без фильтров возвращает все проекты', () => {
        expect(selectProjects(projects, [], 'year-asc', collator).map(project => project.title)).toEqual([
            'Beta',
            'Gamma',
            'Alpha'
        ])
    })

    it('фильтрует по любому совпавшему стеку', () => {
        expect(selectProjects(projects, ['TypeScript', 'React'], 'year-asc', collator).map(project => project.title)).toEqual([
            'Beta',
            'Gamma'
        ])
    })

    it('сортирует отфильтрованный список', () => {
        expect(selectProjects(projects, ['Vue', 'Nuxt 3'], 'alphabet-desc', collator).map(project => project.title)).toEqual([
            'Beta',
            'Alpha'
        ])
    })

    it('возвращает пустой список, если ничего не совпало', () => {
        expect(selectProjects(projects, ['Svelte'], 'year-desc', collator)).toEqual([])
    })

    it('не меняет порядок исходного массива', () => {
        const original = [...projects]
        selectProjects(projects, [], 'year-asc', collator)

        expect(projects).toEqual(original)
    })
})
