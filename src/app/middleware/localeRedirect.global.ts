import { defineNuxtRouteMiddleware, navigateTo, useCookie } from '#imports'
import { checkIsAppLocale, DEFAULT_LOCALE, LOCALE_COOKIE_KEY } from '@/shared/constants'

/**
 * Редирект с корня только по ранее выбранному языку из cookie.
 * Работает и на сервере, и на клиенте; язык браузера не используется.
 */
export default defineNuxtRouteMiddleware(to => {
    if (to.path !== '/') return

    const localeCookie = useCookie<string | null>(LOCALE_COOKIE_KEY)
    if (!checkIsAppLocale(localeCookie.value) || localeCookie.value === DEFAULT_LOCALE) return

    return navigateTo(
        {
            path: `/${localeCookie.value}`,
            query: to.query,
            hash: to.hash
        },
        { redirectCode: 302 }
    )
})
