<template>
    <ProjectsBlock />
</template>

<script setup lang="ts">
import { useI18n, useSeoMeta } from '#imports'
import { ProjectsBlock } from '@/widgets/projects'

const { t } = useI18n()

useSeoMeta({
    title: () => t('seo.projectsTitle'),
    description: () => t('seo.projectsDescription'),
    ogTitle: () => t('seo.projectsTitle'),
    ogDescription: () => t('seo.projectsDescription')
})
</script>
