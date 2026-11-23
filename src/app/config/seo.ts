import { LOCALE_LANGUAGES, type AppLocale } from '@/shared/constants'
import { SITE_NAME, SITE_PERSON_NAME, SITE_URL } from './site'

type SiteJsonLdParams = {
    locale: AppLocale
    description: string
    jobTitle: string
}

/**
 * Структурированные данные страницы: Person + WebSite.
 * Возвращает объект, который остаётся только сериализовать в <script type="application/ld+json">.
 */
export const buildSiteJsonLd = ({ locale, description, jobTitle }: SiteJsonLdParams) => ({
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Person',
            '@id': `${SITE_URL}/#person`,
            name: SITE_PERSON_NAME,
            url: SITE_URL,
            jobTitle,
            knowsAbout: ['Vue.js', 'Nuxt', 'TypeScript', 'JavaScript', 'CSS']
        },
        {
            '@type': 'WebSite',
            '@id': `${SITE_URL}/#website`,
            url: SITE_URL,
            name: SITE_NAME,
            description,
            inLanguage: LOCALE_LANGUAGES[locale],
            publisher: { '@id': `${SITE_URL}/#person` }
        }
    ]
})
