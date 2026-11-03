<template>
  <button class="theme-toggle" @click.prevent="changeTheme">
    <span class="theme-toggle__moon"></span>
    <span class="theme-toggle__sun"></span>
    <!-- Ray N is rotated by N * 30deg; numbering starts at 3 as in the original nth-child layout -->
    <small v-for="ray in 6" :key="ray" class="theme-toggle__ray" :style="{ '--ray': ray + 2 }"></small>
  </button>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

// document/localStorage exist only in the browser, not during server rendering
onMounted(() => {
  if (localStorage.getItem('theme') === 'light') {
    document.documentElement.classList.add('light-theme')
  }
})

function changeTheme() {
  const htmlClassList = document.documentElement.classList
  htmlClassList.toggle('light-theme')
  if (htmlClassList.contains('light-theme')) {
    localStorage.setItem('theme', 'light')
  } else {
    localStorage.removeItem('theme')
  }
}
</script>

<style scoped>
.theme-toggle {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 37px;
  height: 37px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;

  &:hover .theme-toggle__ray,
  &:focus .theme-toggle__ray {
    transform: rotate(calc(var(--ray) * 30deg - 20deg));
  }
}

.theme-toggle__sun {
  width: 34px;
  height: 34px;
  background: var(--toggle-color-secondary);
  border: 4px solid var(--main-bg);
  border-radius: 50%;
}

.theme-toggle__ray {
  position: absolute;
  z-index: -1;
  display: block;
  width: 2px;
  height: 121%;
  background: var(--toggle-color-secondary);
  transform: rotate(calc(var(--ray) * 30deg));
  transition: 0.4s all, height 0.3s ease-in-out;
}

.theme-toggle__moon {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 9;
  width: 28px;
  height: 28px;
  background: var(--main-bg);
  border-radius: 50%;
  transform: scale(0) translate(25%, -25%);
  transform-origin: right;
  transition: 0.4s transform;
}

/* Light theme: .light-theme is set on <html> */

.light-theme .theme-toggle {
  background-color: var(--main-bg);
}

.light-theme .theme-toggle__moon {
  transform: scale(1) translate(11%, -11%);
}

.light-theme .theme-toggle:hover .theme-toggle__moon,
.light-theme .theme-toggle:focus .theme-toggle__moon {
  transform: scale(1) translate(-3%, -18%);
}

.light-theme .theme-toggle .theme-toggle__ray {
  height: 0;
  transform: rotate(calc(var(--ray) * 30deg - 45deg));
  transition: 0.4s, transform 0.4s, height 0.2s 0.1s;
}
</style>
