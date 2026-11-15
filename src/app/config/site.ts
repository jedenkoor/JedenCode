/** Канонический адрес сайта: используется в метаданных, sitemap и JSON-LD. */
export const SITE_URL = 'https://jedenkoor.ru'

export const SITE_NAME = 'JedenCode'
export const SITE_LANG = 'ru'

export const SITE_TITLE = 'JedenCode — фронтенд-разработчик: портфолио проектов'

export const SITE_DESCRIPTION =
  'Портфолио фронтенд-разработчика: интернет-магазины, корпоративные сайты и лендинги на Vue, Nuxt и TypeScript.'

export const SITE_OG_IMAGE_URL = `${SITE_URL}/og-share-img.jpg`

/** Год в футере всегда актуальный: статическая генерация фиксирует его на момент сборки. */
export const SITE_COPYRIGHT_YEAR = new Date().getFullYear()
