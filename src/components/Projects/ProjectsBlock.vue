<template>
  <section class="projects margin-section">
    <div class="container">
      <h2 class="h2title">Проекты</h2>
    </div>

    <ProjectsFilter v-model:filteredProjects="filteredProjects" />

    <ProjectsList :filteredProjects="filteredProjects" />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ProjectsFilter from '@/components/Projects/ProjectsFilter.vue'
import ProjectsList from '@/components/Projects/ProjectsList.vue'
import type { Project } from '@/types/project'

const filteredProjects = ref<Project[]>([])
</script>
