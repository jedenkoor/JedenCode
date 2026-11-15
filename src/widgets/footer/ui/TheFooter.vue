<template>
  <footer class="the-footer">
    <div class="container the-footer__container">
      <AppLogo :to="{ name: 'main' }" />
      <span class="the-footer__copyright">JedenCode © 2021</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { AppLogo } from '@/shared/ui/logo'
</script>

<style scoped>
.the-footer {
  padding: 40px 0;
}

.the-footer__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media screen and (max-width: 767px) {
  .the-footer {
    padding: 20px 0;
  }

  .the-footer__container {
    flex-direction: column;
    align-items: center;
  }

  .the-footer__copyright {
    margin-top: 20px;
  }
}
</style>
