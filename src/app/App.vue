<template>
  <div class="app-wrapper">
    <TheHeader />

    <main class="app-content">
      <h1 class="visually-hidden">Личный сайт веб-разработчика JedenCode</h1>
      <NuxtPage />
    </main>

    <TheFooter :copyright-year="SITE_COPYRIGHT_YEAR" />
  </div>
</template>

<script setup lang="ts">
import { useHead } from '#imports'
import { NuxtPage } from '#components'
import { TheHeader } from '@/widgets/header'
import { TheFooter } from '@/widgets/footer'
import { SITE_COPYRIGHT_YEAR } from './config/site'
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
