<template>
  <button class="header__toggle theme-toggle" @click.prevent="changeTheme">
    <span class="moon"></span>
    <span class="sun"></span>
    <small class="sun__ray"></small>
    <small class="sun__ray"></small>
    <small class="sun__ray"></small>
    <small class="sun__ray"></small>
    <small class="sun__ray"></small>
    <small class="sun__ray"></small>
  </button>
</template>

<script>
export default {
  methods: {
    changeTheme() {
      const htmlClassList = document.querySelector('html').classList
      htmlClassList.toggle('light-theme')
      if (htmlClassList.contains('light-theme')) {
        localStorage.setItem('theme', 'light')
      } else {
        localStorage.removeItem('theme')
      }
    }
  },
  created() {
    if (localStorage.getItem('theme') === 'light') {
      document.querySelector('html').classList.add('light-theme')
    }
  }
}
</script>
