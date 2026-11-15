<template>
  <div class="projects-filter">
    <div class="container projects-filter__container" @keydown.esc="handleSortEscape">
      <ul class="projects-filter__list" aria-label="Фильтр проектов по тегам">
        <li class="projects-filter__item" v-for="item in tags" :key="item">
          <label class="projects-filter__label">
            <input class="visually-hidden projects-filter__input" type="checkbox" v-model="filters" :value="item" />
            <span class="projects-filter__text">{{ item }}</span>
          </label>
        </li>
      </ul>

      <div class="projects-filter__sort projects-filter-sort" v-click-outside="hideSort">
        <button
          ref="sortButtonEl"
          type="button"
          class="projects-filter-sort__btn"
          :aria-label="`Сортировка: ${activeSortOption.label}`"
          aria-controls="projects-filter-sort-list"
          :aria-expanded="sortOpen"
          :class="{ 'm-active': sortOpen }"
          @click="toggleSort"
        >
          <svg class="projects-filter-sort__icon" width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
            <path :d="icons[activeSortOption.direction]" />
          </svg>
          {{ activeSortOption.label }}
        </button>
        <ul id="projects-filter-sort-list" class="projects-filter-sort__list" :class="{ 'm-active': sortOpen }">
          <li class="projects-filter-sort__item" v-for="option in sortOptions" :key="option.value">
            <button
              type="button"
              class="projects-filter-sort__itembtn"
              :class="{ 'm-active': option.value === sort }"
              @click="changeSort(option.value)"
            >
              <svg class="projects-filter-sort__icon" width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                <path :d="icons[option.direction]" />
              </svg>
              {{ option.label }}
            </button>
          </li>
        </ul>
      </div>

      <button
        v-if="filters.length"
        type="button"
        class="projects-filter__clear"
        aria-label="Сбросить фильтр"
        @click="resetFilter"
      >
        <svg class="projects-filter__clear-icon" width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
          <path d="M2 2L13 13M2 13L13 2" />
        </svg>
        Сбросить фильтр
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, useTemplateRef } from 'vue'
import { vClickOutside } from '@/shared/utils/directives'
import { findSortOption, sortOptions, type SortDirection, type SortOption, type SortValue } from '../../model/sort'

defineProps<{
  tags: string[]
}>()

const filters = defineModel<string[]>('filters', { required: true })
const sort = defineModel<SortValue>('sort', { required: true })

const icons: Record<SortDirection, string> = {
  asc: 'M3.5 0.5L3.85355 0.146447C3.65829 -0.0488155 3.34171 -0.0488155 3.14645 0.146447L3.5 0.5ZM3.14645 0.146447L0.146447 3.14645L0.853553 3.85355L3.85355 0.853553L3.14645 0.146447ZM3.14645 0.853553L6.14645 3.85355L6.85355 3.14645L3.85355 0.146447L3.14645 0.853553ZM3 0.5V15H4V0.5H3ZM9 4H15V3H9V4ZM9 8H13V7H9V8ZM9 12H11V11H9V12Z',
  desc: 'M3.5 14.5L3.14645 14.8536C3.34171 15.0488 3.65829 15.0488 3.85355 14.8536L3.5 14.5ZM3.85355 14.8536L6.85355 11.8536L6.14645 11.1464L3.14645 14.1464L3.85355 14.8536ZM3.85355 14.1464L0.853553 11.1464L0.146447 11.8536L3.14645 14.8536L3.85355 14.1464ZM3 0V14.5H4V0H3ZM9 4H15V3H9V4ZM9 8H13V7H9V8ZM9 12H11V11H9V12Z'
}

const sortOpen = ref<boolean>(false)
const sortButtonEl = useTemplateRef<HTMLButtonElement>('sortButtonEl')

const activeSortOption = computed<SortOption>(() => findSortOption(sort.value))

function resetFilter() {
  filters.value = []
}

function toggleSort() {
  sortOpen.value = !sortOpen.value
}

function hideSort() {
  sortOpen.value = false
}

/** Escape закрывает меню и возвращает фокус на кнопку сортировки */
function handleSortEscape() {
  if (!sortOpen.value) return
  hideSort()
  sortButtonEl.value?.focus()
}

function changeSort(value: SortValue) {
  sort.value = value
  hideSort()
}
</script>

<style scoped src="./projects-filter.css"></style>
