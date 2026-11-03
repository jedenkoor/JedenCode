<template>
  <div class="wrapper">
    <TheHeader />

    <main class="content">
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
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
}

.content {
  flex: 1;
}
</style>
