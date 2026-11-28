// @vitest-environment nuxt
import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { ProjectCard } from '@/entities/project'
import { makeProject } from '../unit/fixtures/projects'

const project = makeProject({
    title: 'Clevergrad',
    description: 'Corporate site for a construction company',
    year: 2024,
    stack: ['Vue', 'Nuxt 3'],
    demo: 'https://clevergrad.ru/',
    repo: 'https://github.com/jedenkoor/clevergrad',
    type: 'corporate'
})

describe('ProjectCard', () => {
    it('показывает название, описание, год и теги стека', async () => {
        const wrapper = await mountSuspended(ProjectCard, { props: { project } })

        expect(wrapper.get('.project-card__title-link').text()).toContain('Clevergrad')
        expect(wrapper.get('.project-card__descr').text()).toBe('Corporate site for a construction company')
        expect(wrapper.get('.project-card__year').text()).toBe('2024')
        expect(wrapper.findAll('.project-card__tag').map(tag => tag.text())).toEqual(['#Vue', '#Nuxt 3'])
    })

    it('ведёт заголовок на демо в новой вкладке', async () => {
        const wrapper = await mountSuspended(ProjectCard, { props: { project } })
        const link = wrapper.get('.project-card__title-link')

        expect(link.attributes('href')).toBe('https://clevergrad.ru/')
        expect(link.attributes('target')).toBe('_blank')
        expect(link.attributes('rel')).toBe('noopener noreferrer')
    })

    it('показывает ссылку на репозиторий, только если он есть', async () => {
        const withRepo = await mountSuspended(ProjectCard, { props: { project } })
        const withoutRepo = await mountSuspended(ProjectCard, {
            props: { project: { ...project, repo: undefined } }
        })

        expect(withRepo.get('.project-card__repo').attributes('href')).toBe('https://github.com/jedenkoor/clevergrad')
        expect(withoutRepo.find('.project-card__repo').exists()).toBe(false)
    })

    it('грузит картинку лениво, а приоритетные — сразу', async () => {
        const lazy = await mountSuspended(ProjectCard, { props: { project } })
        const priority = await mountSuspended(ProjectCard, { props: { project, isPriority: true } })

        expect(lazy.get('.project-card__img').attributes('loading')).toBe('lazy')
        expect(priority.get('.project-card__img').attributes('loading')).toBe('eager')
        expect(priority.get('.project-card__img').attributes('fetchpriority')).toBe('high')
    })

    it('подписывает тип проекта и не оставляет пустой строки', async () => {
        const wrapper = await mountSuspended(ProjectCard, { props: { project } })

        expect(wrapper.get('.project-card__type').text().trim()).not.toBe('')
    })
})
