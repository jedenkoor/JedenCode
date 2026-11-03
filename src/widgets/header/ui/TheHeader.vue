<template>
  <header class="header">
    <div class="container header__container">
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
.header {
  padding: 40px 0;
}

.header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media screen and (max-width: 767px) {
  .header {
    padding: 20px 0;
  }
}
</style>
