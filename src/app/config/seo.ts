import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from './site'

/**
 * Структурированные данные страницы: Person + WebSite.
 * Возвращает объект, который остаётся только сериализовать в <script type="application/ld+json">.
 */
export const buildSiteJsonLd = () => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: SITE_NAME,
      url: SITE_URL,
      jobTitle: 'Фронтенд-разработчик',
      knowsAbout: ['Vue.js', 'Nuxt', 'TypeScript', 'JavaScript', 'CSS']
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: 'ru-RU',
      publisher: { '@id': `${SITE_URL}/#person` }
    }
  ]
})
