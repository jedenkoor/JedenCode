<template>
  <div class="wrapper">
    <TheHeader />

    <main class="content">
      <h1 class="visually-hidden">Личный сайт веб-разработчика JedenCode</h1>
      <router-view />
    </main>

    <TheFooter />
  </div>
</template>

<script setup lang="ts">
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
