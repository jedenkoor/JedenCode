// @vitest-environment nuxt
import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ProjectsFilterTags from '@/features/projects-filter/ui/ProjectsFilter/ProjectsFilterTags.vue'

const stacks = ['Nuxt 3', 'TypeScript', 'Vue']

describe('ProjectsFilterTags', () => {
    it('рисует чекбокс на каждый стек', async () => {
        const wrapper = await mountSuspended(ProjectsFilterTags, {
            props: { stacks, modelValue: ['Vue'] }
        })
        const inputs = wrapper.findAll('input[type="checkbox"]')

        expect(inputs).toHaveLength(stacks.length)
        expect(inputs.map(input => input.attributes('value'))).toEqual(stacks)
    })

    it('отмечает выбранные стеки', async () => {
        const wrapper = await mountSuspended(ProjectsFilterTags, {
            props: { stacks, modelValue: ['Vue', 'TypeScript'] }
        })
        const checked = wrapper
            .findAll('input[type="checkbox"]')
            .filter(input => (input.element as HTMLInputElement).checked)
            .map(input => input.attributes('value'))

        expect(checked).toEqual(['TypeScript', 'Vue'])
    })

    it('добавляет стек в модель при выборе', async () => {
        const wrapper = await mountSuspended(ProjectsFilterTags, {
            props: { stacks, modelValue: ['Vue'] }
        })

        await wrapper.findAll('input[type="checkbox"]')[0]!.setValue(true)

        expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual([['Vue', 'Nuxt 3']])
    })

    it('убирает стек из модели при снятии', async () => {
        const wrapper = await mountSuspended(ProjectsFilterTags, {
            props: { stacks, modelValue: ['Vue', 'TypeScript'] }
        })

        await wrapper.findAll('input[type="checkbox"]')[2]!.setValue(false)

        expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual([['TypeScript']])
    })
})
