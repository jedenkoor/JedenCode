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
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>
