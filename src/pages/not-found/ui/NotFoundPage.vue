<template>
  <div class="container not-found-page">
    <h2 class="not-found-page__title">Страница не найдена</h2>
    <p class="not-found-page__text">Возможно, ссылка устарела или в адресе опечатка.</p>
    <NuxtLink class="not-found-page__link" :to="{ name: 'main' }">Вернуться на главную</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '#imports'
import { NuxtLink } from '#components'

useHead({
  title: 'Страница не найдена — JedenCode',
  meta: [{ name: 'robots', content: 'noindex' }]
})
</script>

<style scoped>
.not-found-page {
  padding-top: 60px;
  padding-bottom: 120px;
}

.not-found-page__title {
  margin-top: 0;
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 30px;
}

.not-found-page__text {
  margin-bottom: 24px;
}

.not-found-page__link {
  color: var(--accent, #7aedf5);
  font-weight: 600;
}
</style>
