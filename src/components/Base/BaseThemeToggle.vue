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

<script setup lang="ts">
const htmlClassList = document.documentElement.classList

if (localStorage.getItem('theme') === 'light') {
  htmlClassList.add('light-theme')
}

function changeTheme() {
  htmlClassList.toggle('light-theme')
  if (htmlClassList.contains('light-theme')) {
    localStorage.setItem('theme', 'light')
  } else {
    localStorage.removeItem('theme')
  }
}
</script>
