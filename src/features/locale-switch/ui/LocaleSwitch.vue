<template>
    <nav class="locale-switch" :aria-label="t('nav.language')">
        <ul class="locale-switch__list">
            <li v-for="code in APP_LOCALES" :key="code" class="locale-switch__item">
                <NuxtLink
                    class="locale-switch__link"
                    :class="{ 'm-active': code === appLocale }"
                    :to="switchLocalePath(code)"
                    :hreflang="LOCALE_LANGUAGES[code]"
                    :aria-current="code === appLocale ? 'true' : undefined"
                    :aria-label="LOCALE_NAMES[code]"
                    @click="handleSelect(code)"
                >
                    {{ code.toUpperCase() }}
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { useCookie, useI18n, useSwitchLocalePath } from '#imports'
import { NuxtLink } from '#components'
import {
    APP_LOCALES,
    LOCALE_COOKIE_KEY,
    LOCALE_COOKIE_MAX_AGE_SECONDS,
    LOCALE_LANGUAGES,
    LOCALE_NAMES,
    type AppLocale
} from '@/shared/constants'
import { useAppLocale } from '@/shared/composables'

const { t } = useI18n()
const appLocale = useAppLocale()
const switchLocalePath = useSwitchLocalePath()

const localeCookie = useCookie<string | null>(LOCALE_COOKIE_KEY, {
    path: '/',
    sameSite: 'lax',
    maxAge: LOCALE_COOKIE_MAX_AGE_SECONDS
})

/**
 * Выбор языка запоминается в cookie: при следующем визите на `/`
 * @nuxtjs/i18n использует её раньше языка браузера.
 */
function handleSelect(code: AppLocale): void {
    localeCookie.value = code
}
</script>

<style scoped>
.locale-switch__list {
    display: flex;
    gap: 8px;
    margin: 0;
    padding-left: 0;
    list-style: none;
}

.locale-switch__link {
    color: var(--main-text, #fff);
    font-weight: 600;
    font-size: 14px;
    text-decoration: none;
    opacity: 0.55;
    transition:
        color 0.2s,
        opacity 0.2s;

    &:hover,
    &:focus,
    &.m-active {
        color: var(--accent, #7aedf5);
        opacity: 1;
    }
}
</style>
