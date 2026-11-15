<template>
  <header class="site-header">
    <div class="container site-header__container">
      <SiteLogo :to="{ name: 'main' }" />
      <ThemeToggle />
    </div>
  </header>
</template>

<script setup lang="ts">
import { ThemeToggle } from '@/features/theme-toggle'
import { SiteLogo } from '@/shared/ui/logo'
</script>

<style scoped>
.site-header {
  padding: 40px 0;
}

.site-header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media screen and (max-width: 767px) {
  .site-header {
    padding: 20px 0;
  }
}
</style>
