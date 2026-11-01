<template>
  <div class="container">
    <ul class="projects__list">
      <ProjectsItem v-for="project in filteredProjects" :key="project.link" :project="project" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import ProjectsItem from '@/components/Projects/ProjectsItem.vue'
import type { Project } from '@/types/project'

defineProps<{
  filteredProjects: Project[]
}>()
</script>
