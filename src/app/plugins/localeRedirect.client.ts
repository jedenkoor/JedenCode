import { defineNuxtPlugin, navigateTo, useCookie, useRoute } from '#imports'
import { checkIsAppLocale, DEFAULT_LOCALE, LOCALE_COOKIE_KEY } from '@/shared/constants'

/**
 * Редирект с корня только по ранее выбранному языку из cookie.
 * Язык браузера намеренно не используется: это рекомендация Google
 * и предсказуемое поведение для пользователя.
 */
export default defineNuxtPlugin(nuxtApp => {
    // Навигация доступна только после монтирования приложения
    nuxtApp.hook('app:mounted', () => {
        nuxtApp.runWithContext(() => {
            const route = useRoute()
            const localeCookie = useCookie<string | null>(LOCALE_COOKIE_KEY)

            if (route.path !== '/' || !checkIsAppLocale(localeCookie.value)) return
            if (localeCookie.value === DEFAULT_LOCALE) return

            void navigateTo(
                {
                    path: `/${localeCookie.value}`,
                    query: route.query,
                    hash: route.hash
                },
                { redirectCode: 302 }
            )
        })
    })
})
