<template>
  <header class="the-header">
    <div class="container the-header__container">
      <AppLogo :to="{ name: 'main' }" />
      <ThemeToggle />
    </div>
  </header>
</template>

<script setup lang="ts">
import { ThemeToggle } from '@/features/theme-toggle'
import { AppLogo } from '@/shared/ui/logo'
</script>

<style scoped>
.the-header {
  padding: 40px 0;
}

.the-header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media screen and (max-width: 767px) {
  .the-header {
    padding: 20px 0;
  }
}
</style>
