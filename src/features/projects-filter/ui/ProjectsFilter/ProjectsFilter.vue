<template>
  <div class="projects-filter">
    <div class="container projects-filter__container">
      <ul class="projects-filter__list">
        <li class="projects-filter__item" v-for="item in filtersList" :key="item">
          <label class="projects-filter__label">
            <input class="visually-hidden projects-filter__input" type="checkbox" v-model="filters" :value="item" />
            <span class="projects-filter__text">{{ item }}</span>
          </label>
        </li>
      </ul>

      <div class="projects-filter__sort projects-filter-sort" v-click-outside="hideSort">
        <button
          class="projects-filter-sort__btn"
          aria-label="Сортировка"
          :class="{ active: sortOpen }"
          @click.prevent="toggleSort"
        >
          <svg class="projects-filter-sort__icon" width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path :d="icons[activeSortOption.direction]" />
          </svg>
          {{ activeSortOption.label }}
        </button>
        <ul class="projects-filter-sort__list" :class="{ active: sortOpen }">
          <li class="projects-filter-sort__item" v-for="option in sortOptions" :key="option.value">
            <button
              class="projects-filter-sort__itembtn"
              :class="{ active: option.value === currentSort }"
              @click.prevent="changeSort(option.value)"
            >
              <svg class="projects-filter-sort__icon" width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path :d="icons[option.direction]" />
              </svg>
              {{ option.label }}
            </button>
          </li>
        </ul>
      </div>

      <button
        class="projects-filter__clear"
        aria-label="Сбросить фильтр"
        v-if="filters.length"
        @click.prevent="resetFilter"
      >
        <svg class="projects-filter__clear-icon" width="15" height="15" viewBox="0 0 15 15" fill="none">
          <path d="M2 2L13 13M2 13L13 2" />
        </svg>
        Сбросить фильтр
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import { projects, type Project } from '@/entities/project'
import { vClickOutside } from '@/shared/lib/directives'

type SortDirection = 'asc' | 'desc'
type SortValue = 'dateAsc' | 'dateDesc' | 'alphabetAsc' | 'alphabetDesc'

interface SortOption {
  value: SortValue
  label: string
  direction: SortDirection
  compare: (a: Project, b: Project) => number
}

const filteredProjects = defineModel<Project[]>('filteredProjects', { default: () => [] })

const icons: Record<SortDirection, string> = {
  asc: 'M3.5 0.5L3.85355 0.146447C3.65829 -0.0488155 3.34171 -0.0488155 3.14645 0.146447L3.5 0.5ZM3.14645 0.146447L0.146447 3.14645L0.853553 3.85355L3.85355 0.853553L3.14645 0.146447ZM3.14645 0.853553L6.14645 3.85355L6.85355 3.14645L3.85355 0.146447L3.14645 0.853553ZM3 0.5V15H4V0.5H3ZM9 4H15V3H9V4ZM9 8H13V7H9V8ZM9 12H11V11H9V12Z',
  desc: 'M3.5 14.5L3.14645 14.8536C3.34171 15.0488 3.65829 15.0488 3.85355 14.8536L3.5 14.5ZM3.85355 14.8536L6.85355 11.8536L6.14645 11.1464L3.14645 14.1464L3.85355 14.8536ZM3.85355 14.1464L0.853553 11.1464L0.146447 11.8536L3.14645 14.8536L3.85355 14.1464ZM3 0V14.5H4V0H3ZM9 4H15V3H9V4ZM9 8H13V7H9V8ZM9 12H11V11H9V12Z'
}

const byTitle = (a: Project, b: Project): number => a.title.toLowerCase().localeCompare(b.title.toLowerCase())

const sortOptions: SortOption[] = [
  {
    value: 'dateAsc',
    label: 'По дате создания',
    direction: 'asc',
    compare: (a, b) => Date.parse(a.date) - Date.parse(b.date)
  },
  {
    value: 'dateDesc',
    label: 'По дате создания',
    direction: 'desc',
    compare: (a, b) => Date.parse(b.date) - Date.parse(a.date)
  },
  { value: 'alphabetAsc', label: 'По алфавиту A-Z', direction: 'asc', compare: byTitle },
  { value: 'alphabetDesc', label: 'По алфавиту Z-A', direction: 'desc', compare: (a, b) => byTitle(b, a) }
]

const currentSort = ref<SortValue>('dateDesc')
const sortOpen = ref(false)
const filters = ref<string[]>([])

const activeSortOption = computed(() => sortOptions.find(option => option.value === currentSort.value) ?? sortOptions[0]!)

const filtersList = computed(() => [...new Set(projects.flatMap(project => project.tags))].sort())

watchEffect(() => {
  const projectsList = filters.value.length
    ? projects.filter(project => filters.value.some(tag => project.tags.includes(tag)))
    : [...projects]
  filteredProjects.value = projectsList.sort(activeSortOption.value.compare)
})

function resetFilter() {
  filters.value = []
}

function toggleSort() {
  sortOpen.value = !sortOpen.value
}

function hideSort() {
  sortOpen.value = false
}

function changeSort(value: SortValue) {
  currentSort.value = value
  hideSort()
}
</script>

<style scoped src="./ProjectsFilter.css"></style>
