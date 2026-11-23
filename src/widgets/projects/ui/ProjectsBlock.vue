<template>
    <section class="projects-block">
        <div class="container">
            <h1 class="projects-block__title">{{ t('projects.title') }}</h1>
        </div>

        <ProjectsFilter v-model:filters="filters" v-model:sort="sort" :stacks="stacks" />

        <ProjectsList :filteredProjects="filteredProjects" />
    </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '#imports'
import { ProjectsFilter, useProjectsFilter } from '@/features/projects-filter'
import { getProjects } from '@/entities/project'
import { useAppLocale } from '@/shared/composables'
import ProjectsList from './ProjectsList.vue'

const { t } = useI18n()
const locale = useAppLocale()
const projects = computed(() => getProjects(locale.value))

const { filters, sort, stacks, filteredProjects } = useProjectsFilter(projects, locale)
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
