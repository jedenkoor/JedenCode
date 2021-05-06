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

<script>
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>
