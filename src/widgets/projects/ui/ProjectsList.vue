<template>
  <div class="container">
    <ul class="projects-list">
      <ProjectCard v-for="project in filteredProjects" :key="project.link" :project="project" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ProjectCard, type Project } from '@/entities/project'

defineProps<{
  filteredProjects: Project[]
}>()
</script>

<style scoped>
.projects-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px 24px;
  padding-left: 0;
  list-style: none;
}

@media screen and (max-width: 1200px) {
  .projects-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 767px) {
  .projects-list {
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
  }
}
</style>
