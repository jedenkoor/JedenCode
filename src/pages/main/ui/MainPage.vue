<template>
    <h1 class="visually-hidden">{{ t('main.title') }}</h1>
    <ProfileBlock />
</template>

<script setup lang="ts">
import { useI18n, useSeoMeta } from '#imports'
import { ProfileBlock } from '@/widgets/profile'

const { t } = useI18n()

useSeoMeta({
    title: () => t('seo.mainTitle'),
    description: () => t('seo.mainDescription'),
    ogTitle: () => t('seo.mainTitle'),
    ogDescription: () => t('seo.mainDescription')
})
</script>
