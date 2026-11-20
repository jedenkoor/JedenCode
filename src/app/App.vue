<template>
    <div class="app-wrapper">
        <SiteHeader />

        <main class="app-content">
            <NuxtPage />
        </main>

        <SiteFooter />
    </div>
</template>

<script setup lang="ts">
import { useHead, useI18n, useLocaleHead, useRoute, useSeoMeta } from '#imports'
import { NuxtPage } from '#components'
import { SiteHeader } from '@/widgets/header'
import { SiteFooter } from '@/widgets/footer'
import { SITE_URL } from './config/site'
import { buildSiteJsonLd } from './config/seo'

const { t } = useI18n()
const route = useRoute()
const localeHead = useLocaleHead({ seo: true })

useSeoMeta({
    title: () => t('seo.siteTitle'),
    description: () => t('seo.siteDescription'),
    ogTitle: () => t('seo.siteTitle'),
    ogDescription: () => t('seo.siteDescription'),
    ogImageAlt: () => t('seo.ogImageAlt'),
    ogUrl: () => `${SITE_URL}${route.fullPath}`
})

useHead(() => ({
    htmlAttrs: localeHead.value.htmlAttrs,
    link: localeHead.value.link,
    meta: localeHead.value.meta,
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify(buildSiteJsonLd())
        }
    ]
}))
</script>

<style scoped>
.app-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 100vh;
}

.app-content {
    flex: 1;
}
</style>
