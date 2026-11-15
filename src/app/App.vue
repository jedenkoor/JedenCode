<template>
  <div class="app-wrapper">
    <TheHeader />

    <main class="app-content">
      <h1 class="visually-hidden">Личный сайт веб-разработчика JedenCode</h1>
      <NuxtPage />
    </main>

    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import { NuxtPage } from '#components'
import { TheHeader } from '@/widgets/header'
import { TheFooter } from '@/widgets/footer'
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
