<template>
    <ul class="projects-filter-tags" :aria-label="t('projects.filter.stackLabel')">
        <li class="projects-filter-tags__item" v-for="item in stacks" :key="item">
            <label class="projects-filter-tags__label">
                <input
                    class="visually-hidden projects-filter-tags__input"
                    type="checkbox"
                    v-model="modelValue"
                    :value="item"
                />
                <span class="projects-filter-tags__text">{{ item }}</span>
            </label>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { useI18n } from '#imports'

const { t } = useI18n()

defineProps<{
    stacks: string[]
}>()

const modelValue = defineModel<string[]>({ required: true })
</script>

<style scoped>
.projects-filter-tags {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding-left: 0;
    list-style: none;
}

.projects-filter-tags__label {
    position: relative;
    display: flex;
    margin-bottom: 10px;
    padding: 20px 38px;
    cursor: pointer;

    &:hover,
    &:focus {
        color: var(--accent-text, #7aedf5);
    }

    &::before {
        content: '';
        position: absolute;
        top: 100%;
        left: -100vw;
        width: 200vw;
        height: 10px;
        background-color: var(--main-bg, #222222);
    }
}

.projects-filter-tags__text {
    font-weight: 600;
    white-space: nowrap;
    transition: color 0.2s;
}

.projects-filter-tags__input:checked + .projects-filter-tags__text {
    color: var(--accent-text, #7aedf5);
    text-decoration: underline;
    text-underline-offset: 4px;
}

.projects-filter-tags__input:focus-visible + .projects-filter-tags__text {
    outline: 2px solid var(--accent-text, #7aedf5);
    outline-offset: 4px;
    border-radius: 2px;
}

@media screen and (max-width: 1200px) {
    .projects-filter-tags {
        flex-wrap: nowrap;
        width: 100vw;
        overflow-x: scroll;
        transform: translateX(-24px);
    }

    .projects-filter-tags__label {
        margin-bottom: 0;
        padding: 20px 24px;

        &::before {
            display: none;
        }
    }
}

@media screen and (max-width: 767px) {
    .projects-filter-tags {
        width: calc(100vw + 8px);
    }

    .projects-filter-tags__label {
        padding: 16px 24px;
    }
}
</style>
