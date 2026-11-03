<template>
  <section class="projects">
    <div class="container">
      <h2 class="projects__title">Проекты</h2>
    </div>

    <ProjectsFilter v-model:filters="filters" v-model:sort="sort" :tags="tags" />

    <ProjectsList :filteredProjects="filteredProjects" />
  </section>
</template>

<script setup lang="ts">
import { ProjectsFilter, useProjectsFilter } from '@/features/projects-filter'
import { projects } from '@/entities/project'
import ProjectsList from './ProjectsList.vue'

const { filters, sort, tags, filteredProjects } = useProjectsFilter(projects)
</script>

<style scoped>
.projects {
  margin-bottom: 120px;
  padding-top: 30px;
  overflow: hidden;
}

.projects__title {
  margin-top: 0;
  margin-bottom: 30px;
  font-weight: 600;
  font-size: 30px;
  transition: color 0.2s;
}

@media screen and (max-width: 1200px) {
  .projects {
    margin-bottom: 100px;
  }
}

@media screen and (max-width: 1023px) {
  .projects {
    margin-bottom: 80px;
  }
}
</style>
