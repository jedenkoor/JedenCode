export const APP_LOCALES = ['en', 'ru'] as const

export type AppLocale = (typeof APP_LOCALES)[number]

export const DEFAULT_LOCALE: AppLocale = 'en'

export const LOCALE_NAMES: Record<AppLocale, string> = {
    en: 'English',
    ru: 'Русский'
}

/** BCP47-код языка для `hreflang`, `og:locale` и JSON-LD. */
export const LOCALE_LANGUAGES: Record<AppLocale, string> = {
    en: 'en-US',
    ru: 'ru-RU'
}

/** Cookie, в которой запоминается выбранный язык. */
export const LOCALE_COOKIE_KEY = 'i18n_locale'

/** Срок жизни cookie с выбранным языком — один год. */
export const LOCALE_COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365

export const checkIsAppLocale = (value: unknown): value is AppLocale =>
    typeof value === 'string' && APP_LOCALES.some(locale => locale === value)
