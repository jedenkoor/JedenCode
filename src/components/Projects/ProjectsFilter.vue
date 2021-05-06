<template>
  <div class="projects-filter__wrap">
    <div class="container projects-filter__container">
      <ul class="projects__filter projects-filter">
        <li
          class="projects-filter__item"
          v-for="(item, index) in filtersList"
          :key="index"
        >
          <label>
            <input
              class="visually-hidden"
              type="checkbox"
              v-model="filters"
              :value="item"
            />
            <span>{{ item }}</span>
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
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path
              d="M3.5 14.5L3.14645 14.8536C3.34171 15.0488 3.65829 15.0488 3.85355 14.8536L3.5 14.5ZM3.85355 14.8536L6.85355 11.8536L6.14645 11.1464L3.14645 14.1464L3.85355 14.8536ZM3.85355 14.1464L0.853553 11.1464L0.146447 11.8536L3.14645 14.8536L3.85355 14.1464ZM3 0V14.5H4V0H3ZM9 4H15V3H9V4ZM9 8H13V7H9V8ZM9 12H11V11H9V12Z"
            />
          </svg>
          По дате создания
        </button>
        <ul class="projects-filter-sort__list" :class="{ active: sortOpen }">
          <li class="projects-filter-sort__item">
            <button
              class="projects-filter-sort__itembtn"
              data-value="dateAsc"
              @click.prevent="changeSort"
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path
                  d="M3.5 0.5L3.85355 0.146447C3.65829 -0.0488155 3.34171 -0.0488155 3.14645 0.146447L3.5 0.5ZM3.14645 0.146447L0.146447 3.14645L0.853553 3.85355L3.85355 0.853553L3.14645 0.146447ZM3.14645 0.853553L6.14645 3.85355L6.85355 3.14645L3.85355 0.146447L3.14645 0.853553ZM3 0.5V15H4V0.5H3ZM9 4H15V3H9V4ZM9 8H13V7H9V8ZM9 12H11V11H9V12Z"
                />
              </svg>
              По дате создания
            </button>
          </li>
          <li class="projects-filter-sort__item">
            <button
              class="projects-filter-sort__itembtn active"
              data-value="dateDesc"
              @click.prevent="changeSort"
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path
                  d="M3.5 14.5L3.14645 14.8536C3.34171 15.0488 3.65829 15.0488 3.85355 14.8536L3.5 14.5ZM3.85355 14.8536L6.85355 11.8536L6.14645 11.1464L3.14645 14.1464L3.85355 14.8536ZM3.85355 14.1464L0.853553 11.1464L0.146447 11.8536L3.14645 14.8536L3.85355 14.1464ZM3 0V14.5H4V0H3ZM9 4H15V3H9V4ZM9 8H13V7H9V8ZM9 12H11V11H9V12Z"
                />
              </svg>
              По дате создания
            </button>
          </li>
          <li class="projects-filter-sort__item">
            <button
              class="projects-filter-sort__itembtn"
              data-value="alphabetAsc"
              @click.prevent="changeSort"
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path
                  d="M3.5 0.5L3.85355 0.146447C3.65829 -0.0488155 3.34171 -0.0488155 3.14645 0.146447L3.5 0.5ZM3.14645 0.146447L0.146447 3.14645L0.853553 3.85355L3.85355 0.853553L3.14645 0.146447ZM3.14645 0.853553L6.14645 3.85355L6.85355 3.14645L3.85355 0.146447L3.14645 0.853553ZM3 0.5V15H4V0.5H3ZM9 4H15V3H9V4ZM9 8H13V7H9V8ZM9 12H11V11H9V12Z"
                />
              </svg>
              По алфавиту A-Z
            </button>
          </li>
          <li class="projects-filter-sort__item">
            <button
              class="projects-filter-sort__itembtn"
              data-value="alphabetDesc"
              @click.prevent="changeSort"
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path
                  d="M3.5 14.5L3.14645 14.8536C3.34171 15.0488 3.65829 15.0488 3.85355 14.8536L3.5 14.5ZM3.85355 14.8536L6.85355 11.8536L6.14645 11.1464L3.14645 14.1464L3.85355 14.8536ZM3.85355 14.1464L0.853553 11.1464L0.146447 11.8536L3.14645 14.8536L3.85355 14.1464ZM3 0V14.5H4V0H3ZM9 4H15V3H9V4ZM9 8H13V7H9V8ZM9 12H11V11H9V12Z"
                />
              </svg>
              По алфавиту Z-A
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
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
          <path d="M2 2L13 13M2 13L13 2" />
        </svg>
        Сбросить фильтр
      </button>
    </div>
  </div>
</template>

<script>
import projects from '@/data/projects'

import ClickOutside from 'vue-click-outside'

export default {
  props: ['filteredProjects'],
  data() {
    return {
      currentSort: 'dateDesc',
      sortOpen: false,
      projects,
      filters: []
    }
  },
  computed: {
    filtersList() {
      const filteredFilters = []
      this.projects.forEach(project => {
        filteredFilters.push(...project.tags)
      })
      return filteredFilters
        .filter((value, index, self) => self.indexOf(value) === index)
        .sort()
    }
  },
  methods: {
    updateprojects(currentSort) {
      let projectsList = this.projects
      if (this.filters.length) {
        projectsList = this.projects.filter(project =>
          this.filters.some(tag => project.tags.includes(tag))
        )
      }
      this.$emit(
        'update:filteredProjects',
        this.$options.filters.sort(projectsList, currentSort)
      )
    },
    resetFilter() {
      this.filters = []
    },
    toggleSort() {
      this.sortOpen = !this.sortOpen
    },
    hideSort() {
      this.sortOpen = false
    },
    changeSort(e) {
      this.currentSort = e.target.dataset.value
      document.querySelector('.projects-filter-sort__btn').innerHTML = e.target.innerHTML
      document.querySelectorAll('.projects-filter-sort__itembtn').forEach(item => {
        item.classList.remove('active')
      })
      e.target.classList.add('active')
      this.toggleSort()
    }
  },
  created() {
    this.updateprojects(this.currentSort)
  },
  watch: {
    filters() {
      this.updateprojects(this.currentSort)
    },
    currentSort() {
      this.updateprojects(this.currentSort)
    }
  },
  filters: {
    sort(projects, currentSort) {
      switch (currentSort) {
        case 'dateAsc':
          projects = projects.sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
          break
        case 'dateDesc':
          projects = projects.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
          break
        case 'alphabetAsc':
          projects = projects.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) return -1
          })
          break
        case 'alphabetDesc':
          projects = projects.sort((a, b) => {
            if (a.title.toLowerCase() > b.title.toLowerCase()) return -1
          })
          break
      }
      return projects
    }
  },
  directives: {
    ClickOutside
  }
}
</script>
