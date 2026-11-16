<template>
    <section class="projects-block">
        <div class="container">
            <h1 class="projects-block__title">Проекты</h1>
        </div>

        <ProjectsFilter v-model:filters="filters" v-model:sort="sort" :stacks="stacks" />

        <ProjectsList :filteredProjects="filteredProjects" />
    </section>
</template>

<script setup lang="ts">
import { ProjectsFilter, useProjectsFilter } from '@/features/projects-filter'
import { projects } from '@/entities/project'
import ProjectsList from './ProjectsList.vue'

const { filters, sort, stacks, filteredProjects } = useProjectsFilter(projects)
</script>

<style scoped>
.projects-block {
    margin-bottom: 120px;
    padding-top: 30px;
    overflow: hidden;
}

.projects-block__title {
    margin-top: 0;
    margin-bottom: 30px;
    font-weight: 600;
    font-size: 30px;
    transition: color 0.2s;
}

@media screen and (max-width: 1200px) {
    .projects-block {
        margin-bottom: 100px;
    }
}

@media screen and (max-width: 1023px) {
    .projects-block {
        margin-bottom: 80px;
    }
}
</style>
