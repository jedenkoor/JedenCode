// @vitest-environment nuxt
import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import type { ProfileContact } from '@/entities/profile'
import ProfileContacts from '@/widgets/profile/ui/ProfileContacts.vue'

const contacts: ProfileContact[] = [
    {
        kind: 'email',
        label: 'dev@example.com',
        href: 'mailto:dev@example.com',
        isExternal: false
    },
    {
        kind: 'phone',
        label: '+7 900 000-00-00',
        href: 'tel:+79000000000',
        isExternal: false
    },
    {
        kind: 'github',
        label: 'GitHub',
        href: 'https://github.com/example',
        isExternal: true
    }
]

describe('ProfileContacts', () => {
    it('ставит ссылку на CV первой и помечает её на скачивание', async () => {
        const wrapper = await mountSuspended(ProfileContacts, {
            props: { cvUrl: '/cv/daniil-kuzmin-frontend-developer-en.pdf', contacts }
        })
        const cvLink = wrapper.findAll('a')[0]!

        expect(cvLink.attributes('href')).toBe('/cv/daniil-kuzmin-frontend-developer-en.pdf')
        expect(cvLink.attributes('download')).toBeDefined()
        expect(cvLink.text().trim()).not.toBe('')
    })

    it('выводит все контакты с правильными ссылками', async () => {
        const wrapper = await mountSuspended(ProfileContacts, {
            props: { cvUrl: '/cv/cv.pdf', contacts }
        })
        const links = wrapper.findAll('a').slice(1)

        expect(links.map(link => link.attributes('href'))).toEqual([
            'mailto:dev@example.com',
            'tel:+79000000000',
            'https://github.com/example'
        ])
    })

    it('открывает внешние ссылки в новой вкладке, внутренние — нет', async () => {
        const wrapper = await mountSuspended(ProfileContacts, {
            props: { cvUrl: '/cv/cv.pdf', contacts }
        })
        const links = wrapper.findAll('a').slice(1)

        expect(links[0]!.attributes('target')).toBeUndefined()
        expect(links[1]!.attributes('target')).toBeUndefined()
        expect(links[2]!.attributes('target')).toBe('_blank')
        expect(links[2]!.attributes('rel')).toBe('noopener noreferrer')
    })
})
