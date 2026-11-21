<template>
    <header class="site-header">
        <div class="container site-header__container">
            <SiteLogo :to="localePath('/')" :label="t('common.logoHome')" />

            <nav class="site-header__nav" :aria-label="t('nav.main')">
                <ul class="site-header__list">
                    <li class="site-header__item">
                        <NuxtLink class="site-header__link" :to="localePath('/projects')">
                            {{ t('nav.projects') }}
                        </NuxtLink>
                    </li>
                </ul>
            </nav>

            <div class="site-header__actions">
                <LocaleSwitch />
                <ThemeToggle />
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { useI18n, useLocalePath } from '#imports'
import { NuxtLink } from '#components'
import { LocaleSwitch } from '@/features/locale-switch'
import { ThemeToggle } from '@/features/theme-toggle'
import { SiteLogo } from '@/shared/ui/logo'

const { t } = useI18n()
const localePath = useLocalePath()
</script>

<style scoped>
.site-header {
    padding: 40px 0;
}

.site-header__container {
    display: flex;
    align-items: center;
}

.site-header__nav {
    margin-left: 60px;
}

.site-header__list {
    display: flex;
    gap: 24px;
    margin: 0;
    padding-left: 0;
    list-style: none;
}

.site-header__link {
    transition: color 0.2s;

    &:hover,
    &:focus,
    &.router-link-active {
        color: var(--accent, #7aedf5);
    }
}

.site-header__actions {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-left: auto;
}

@media screen and (max-width: 767px) {
    .site-header {
        padding: 20px 0;
    }

    .site-header__nav {
        margin-left: 24px;
    }

    .site-header__actions {
        gap: 12px;
    }
}
</style>
