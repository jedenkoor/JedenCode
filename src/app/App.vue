<template>
  <div class="app-wrapper">
    <SiteHeader />

    <main class="app-content">
      <h1 class="visually-hidden">Личный сайт веб-разработчика JedenCode</h1>
      <NuxtPage />
    </main>

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { useHead } from '#imports'
import { NuxtPage } from '#components'
import { SiteHeader } from '@/widgets/header'
import { SiteFooter } from '@/widgets/footer'
import { buildSiteJsonLd } from './config/seo'

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(buildSiteJsonLd())
    }
  ]
})
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
