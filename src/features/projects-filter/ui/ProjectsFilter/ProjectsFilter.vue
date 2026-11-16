<template>
    <div class="projects-filter">
        <div class="container projects-filter__container">
            <ProjectsFilterTags v-model="filters" :stacks="stacks" />
            <ProjectsFilterSort v-model="sort" />
            <ProjectsFilterReset v-if="filters.length" @reset="resetFilters" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { SortValue } from '../../model/sort'
import ProjectsFilterReset from './ProjectsFilterReset.vue'
import ProjectsFilterSort from './ProjectsFilterSort.vue'
import ProjectsFilterTags from './ProjectsFilterTags.vue'

defineProps<{
    stacks: string[]
}>()

const filters = defineModel<string[]>('filters', { required: true })
const sort = defineModel<SortValue>('sort', { required: true })

function resetFilters() {
    filters.value = []
}
</script>

<style scoped>
.projects-filter {
    position: relative;
    z-index: 1;
    margin-bottom: 75px;
    background-color: var(--secondary-bg, #2c2c33);
}

.projects-filter__container {
    position: relative;
}

@media screen and (max-width: 767px) {
    .projects-filter {
        margin-bottom: 70px;
    }
}
</style>
