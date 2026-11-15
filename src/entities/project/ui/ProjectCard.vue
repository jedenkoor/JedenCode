<template>
  <li class="project-card">
    <a :href="project.link" class="project-card__link" target="_blank" rel="noopener noreferrer">
      <div class="project-card__logo">
        <!-- Логотип декоративный: название проекта уже озвучено заголовком ниже -->
        <img
          :src="project.image"
          alt=""
          width="300"
          height="200"
          decoding="async"
          :loading="isPriority ? 'eager' : 'lazy'"
          :fetchpriority="isPriority ? 'high' : 'auto'"
          class="project-card__img"
        />
      </div>
      <div class="project-card__top">
        <h3 class="project-card__title">{{ project.title }}</h3>
        <div class="project-card__date">{{ formatDate(project.date) }}</div>
      </div>
      <span class="visually-hidden">Откроется в новой вкладке</span>
      <p class="project-card__descr">{{ project.description }}</p>
      <ul class="project-card__tags">
        <li class="project-card__tag" v-for="tag in project.tags" :key="tag">
          #{{ tag }}
        </li>
      </ul>
    </a>
  </li>
</template>

<script setup lang="ts">
import type { Project } from '../model/types'
import { formatDate } from '../utils/formatDate'

withDefaults(
  defineProps<{
    project: Project
    /** Первые карточки грузятся сразу, остальные — лениво */
    isPriority?: boolean
  }>(),
  { isPriority: false }
)
</script>

<style scoped>
.project-card__link {
  display: block;
  height: 100%;
  padding: 20px;
  background-color: var(--secondary-bg, #2c2c33);
  border-radius: 5px;
  transition: color 0.2s;

  &:hover,
  &:focus {
    color: var(--accent, #7aedf5);
  }
}

.project-card__logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  padding: 20px;
  background-color: var(--projects-bg, #ebeaec);
  border-radius: 5px;
}

.project-card__img {
  width: 100%;
  max-width: 300px;
  height: 100%;
  object-fit: contain;
}

.project-card__top {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  margin-bottom: 20px;
}

.project-card__title {
  margin: 0;
  font-weight: 600;
  font-size: 22px;
}

.project-card__descr {
  margin-bottom: 18px;
}

.project-card__tags {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  list-style: none;
}

.project-card__tag {
  font-size: 14px;
}

.project-card__tag:not(:last-child) {
  margin-right: 10px;
}

@media screen and (max-width: 767px) {
  .project-card__link {
    padding: 16px;
  }

  .project-card__title {
    font-size: 20px;
  }
}
</style>
