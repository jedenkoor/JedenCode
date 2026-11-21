import { computed, type ComputedRef } from 'vue'
import { useI18n } from '#imports'
import { checkIsAppLocale, DEFAULT_LOCALE, type AppLocale } from '@/shared/constants'

/**
 * Текущая локаль сайта с сужением до поддерживаемых значений.
 * `useI18n().locale` типизирован как строка, поэтому нужен fallback.
 */
export const useAppLocale = (): ComputedRef<AppLocale> => {
    const { locale } = useI18n()

    return computed<AppLocale>(() => (checkIsAppLocale(locale.value) ? locale.value : DEFAULT_LOCALE))
}
