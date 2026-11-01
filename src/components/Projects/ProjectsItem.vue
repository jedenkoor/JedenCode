<template>
  <li class="projects__item projects-item">
    <a :href="project.link" class="projects-item__link" target="_blank">
      <div class="projects-item__logo">
        <img :src="project.image" :alt="project.title" class="projects-item__img" />
      </div>
      <div class="projects-item__top">
        <h3 class="projects-item__title">{{ project.title }}</h3>
        <div class="projects-item__date">{{ formatDate(project.date) }}</div>
      </div>
      <p class="projects-item__descr">{{ project.description }}</p>
      <ul class="projects-item__tags">
        <li class="projects-item__tag" v-for="(tag, index) in project.tags" :key="index">
          #{{ tag }}
        </li>
      </ul>
    </a>
  </li>
</template>

<script setup lang="ts">
import type { Project } from '@/types/project'

defineProps<{
  project: Project
}>()

// 2019.03.25 -> 25.03.2019
const formatDate = (date: string): string => date.split('.').reverse().join('.')
</script>
