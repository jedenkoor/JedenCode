<template>
    <header class="site-header">
        <div class="container site-header__container">
            <SiteLogo :to="{ name: 'main' }" />

            <nav class="site-header__nav" aria-label="Основная навигация">
                <ul class="site-header__list">
                    <li class="site-header__item">
                        <NuxtLink class="site-header__link" :to="{ name: 'projects' }">Проекты</NuxtLink>
                    </li>
                </ul>
            </nav>

            <ThemeToggle class="site-header__toggle" />
        </div>
    </header>
</template>

<script setup lang="ts">
import { NuxtLink } from '#components'
import { ThemeToggle } from '@/features/theme-toggle'
import { SiteLogo } from '@/shared/ui/logo'
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

.site-header__toggle {
    margin-left: auto;
}

@media screen and (max-width: 767px) {
    .site-header {
        padding: 20px 0;
    }

    .site-header__nav {
        margin-left: 24px;
    }
}
</style>
