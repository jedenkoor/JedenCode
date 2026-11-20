export const APP_LOCALES = ['en', 'ru'] as const

export type AppLocale = (typeof APP_LOCALES)[number]

export const DEFAULT_LOCALE: AppLocale = 'en'

export const LOCALE_NAMES: Record<AppLocale, string> = {
    en: 'English',
    ru: 'Русский'
}

export const checkIsAppLocale = (value: unknown): value is AppLocale =>
    typeof value === 'string' && APP_LOCALES.some(locale => locale === value)
