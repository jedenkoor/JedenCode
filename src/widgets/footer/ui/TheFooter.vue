<template>
  <footer class="footer">
    <div class="container footer__container">
      <AppLogo :to="{ name: 'main' }" />
      <span class="footer__copyright">JedenCode © 2021</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { AppLogo } from '@/shared/ui/logo'
</script>

<style scoped>
.footer {
  padding: 40px 0;
}

.footer__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media screen and (max-width: 767px) {
  .footer {
    padding: 20px 0;
  }

  .footer__container {
    flex-direction: column;
    align-items: center;
  }

  .footer__copyright {
    margin-top: 20px;
  }
}
</style>
