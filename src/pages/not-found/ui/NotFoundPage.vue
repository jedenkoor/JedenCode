<template>
    <div class="container not-found-page">
        <h1 class="not-found-page__title">{{ t('notFound.title') }}</h1>
        <p class="not-found-page__text">{{ t('notFound.text') }}</p>
        <NuxtLink class="not-found-page__link" :to="localePath('/')">{{ t('notFound.back') }}</NuxtLink>
    </div>
</template>

<script setup lang="ts">
import { useHead, useI18n, useLocalePath, useSeoMeta } from '#imports'
import { NuxtLink } from '#components'

const { t } = useI18n()
const localePath = useLocalePath()

useSeoMeta({
    title: () => t('notFound.pageTitle'),
    description: () => t('notFound.description')
})

useHead({
    meta: [{ name: 'robots', content: 'noindex' }]
})
</script>

<style scoped>
.not-found-page {
    padding-top: 60px;
    padding-bottom: 120px;
}

.not-found-page__title {
    margin-top: 0;
    margin-bottom: 16px;
    font-weight: 600;
    font-size: 30px;
}

.not-found-page__text {
    margin-bottom: 24px;
}

.not-found-page__link {
    color: var(--accent, #7aedf5);
    font-weight: 600;
}
</style>
