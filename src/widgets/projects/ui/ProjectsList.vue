<template>
    <div class="container">
        <ul class="projects-list">
            <ProjectCard
                v-for="(project, index) in filteredProjects"
                :key="project.demo"
                :project="project"
                :is-priority="index < EAGER_PROJECTS_COUNT"
            />
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ProjectCard, type Project } from '@/entities/project'

/** Сколько первых карточек грузить сразу: они попадают в первый экран */
const EAGER_PROJECTS_COUNT = 3

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
