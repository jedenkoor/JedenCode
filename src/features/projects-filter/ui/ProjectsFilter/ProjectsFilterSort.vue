<template>
    <div class="projects-filter-sort" v-click-outside="hideSort" @keydown.esc="handleSortEscape">
        <button
            ref="sortButtonEl"
            type="button"
            class="projects-filter-sort__btn"
            :aria-label="t('projects.filter.sortLabel', { option: activeSortLabel })"
            aria-controls="projects-filter-sort-list"
            :aria-expanded="sortOpen"
            :class="{ 'm-active': sortOpen }"
            @click="toggleSort"
        >
            <svg
                class="projects-filter-sort__icon"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                aria-hidden="true"
            >
                <path :d="icons[activeSortOption.direction]" />
            </svg>
            {{ activeSortLabel }}
        </button>

        <ul id="projects-filter-sort-list" class="projects-filter-sort__list" :class="{ 'm-active': sortOpen }">
            <li class="projects-filter-sort__item" v-for="option in sortOptions" :key="option.value">
                <button
                    type="button"
                    class="projects-filter-sort__itembtn"
                    :class="{ 'm-active': option.value === sort }"
                    @click="changeSort(option.value)"
                >
                    <svg
                        class="projects-filter-sort__icon"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        aria-hidden="true"
                    >
                        <path :d="icons[option.direction]" />
                    </svg>
                    {{ getSortLabel(option) }}
                </button>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, useTemplateRef } from 'vue'
import { useI18n } from '#imports'
import { vClickOutside } from '@/shared/utils/directives'
import { findSortOption, sortOptions, type SortDirection, type SortOption, type SortValue } from '../../model/sort'

const icons: Record<SortDirection, string> = {
    asc: 'M3.5 0.5L3.85355 0.146447C3.65829 -0.0488155 3.34171 -0.0488155 3.14645 0.146447L3.5 0.5ZM3.14645 0.146447L0.146447 3.14645L0.853553 3.85355L3.85355 0.853553L3.14645 0.146447ZM3.14645 0.853553L6.14645 3.85355L6.85355 3.14645L3.85355 0.146447L3.14645 0.853553ZM3 0.5V15H4V0.5H3ZM9 4H15V3H9V4ZM9 8H13V7H9V8ZM9 12H11V11H9V12Z',
    desc: 'M3.5 14.5L3.14645 14.8536C3.34171 15.0488 3.65829 15.0488 3.85355 14.8536L3.5 14.5ZM3.85355 14.8536L6.85355 11.8536L6.14645 11.1464L3.14645 14.1464L3.85355 14.8536ZM3.85355 14.1464L0.853553 11.1464L0.146447 11.8536L3.14645 14.8536L3.85355 14.1464ZM3 0V14.5H4V0H3ZM9 4H15V3H9V4ZM9 8H13V7H9V8ZM9 12H11V11H9V12Z'
}

const { t } = useI18n()

const sort = defineModel<SortValue>({ required: true })

const sortOpen = ref<boolean>(false)
const sortButtonEl = useTemplateRef<HTMLButtonElement>('sortButtonEl')

const activeSortOption = computed<SortOption>(() => findSortOption(sort.value))
const getSortLabel = (option: SortOption): string => t(`projects.filter.sort.${option.labelKey}`)
const activeSortLabel = computed<string>(() => getSortLabel(activeSortOption.value))

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

<style scoped>
.projects-filter-sort {
    position: absolute;
    top: calc(100% + 23px);
}

.projects-filter-sort__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    padding: 0;
    background: none;
    border: none;
    border-radius: 2px;
    color: var(--main-text, #fff);
    font-weight: 600;
    cursor: pointer;
    transition: color 0.2s;

    &:hover,
    &:focus,
    &.m-active {
        color: var(--accent-text, #7aedf5);
    }
}

.projects-filter-sort__icon {
    margin-right: 8px;
    fill: currentColor;
}

.projects-filter-sort__list {
    position: absolute;
    top: calc(100% + 15px);
    left: -20px;
    padding: 5px 0;
    background-color: var(--secondary-bg, #2c2c33);
    border-radius: 2px;
    list-style: none;
    box-shadow: 1px 5px 14px rgba(20, 25, 31, 0.5);
    opacity: 0;
    visibility: hidden;

    &.m-active {
        opacity: 1;
        visibility: visible;
        transition:
            visibility 0s linear,
            opacity 0.1s linear;
    }
}

.projects-filter-sort__itembtn {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px 20px;
    background: none;
    border: none;
    color: var(--main-text, #fff);
    font-weight: 600;
    white-space: nowrap;
    cursor: pointer;
    transition: color 0.2s;

    &:hover,
    &:focus,
    &.m-active {
        color: var(--accent-text, #7aedf5);
    }
}

@media screen and (max-width: 1200px) {
    .projects-filter-sort {
        top: calc(100% + 28px);
    }
}

@media screen and (max-width: 767px) {
    .projects-filter-sort__btn {
        font-weight: 500;
    }

    .projects-filter-sort__icon {
        margin-right: 4px;
    }

    .projects-filter-sort__list {
        top: calc(100% + 10px);
        left: -16px;
    }

    .projects-filter-sort__itembtn {
        padding: 10px 16px;
        font-weight: 500;
    }
}

@media screen and (max-width: 349px) {
    .projects-filter-sort__btn,
    .projects-filter-sort__itembtn {
        font-size: 12px;
    }
}
</style>
