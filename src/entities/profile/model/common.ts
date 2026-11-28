import type { ProfileContact } from './types'

/** Контакты одинаковы для обеих локалей. */
export const PROFILE_CONTACTS: ProfileContact[] = [
    {
        kind: 'email',
        label: 'kuzmin.daniil.alexandrovich@gmail.com',
        href: 'mailto:kuzmin.daniil.alexandrovich@gmail.com',
        isExternal: false
    },
    {
        kind: 'phone',
        label: '+7 904 554-96-05',
        href: 'tel:+79045549605',
        isExternal: false
    },
    {
        kind: 'telegram',
        label: 'Telegram',
        href: 'https://t.me/Jedenkoor',
        isExternal: true
    },
    {
        kind: 'github',
        label: 'GitHub',
        href: 'https://github.com/jedenkoor',
        isExternal: true
    },
    {
        kind: 'linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/daniil-kuzmin-7476b1231',
        isExternal: true
    }
]
