<template>
    <button
        type="button"
        class="projects-filter-reset"
        :aria-label="t('projects.filter.reset')"
        @click="emit('reset')"
    >
        <svg
            class="projects-filter-reset__icon"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            aria-hidden="true"
        >
            <path d="M2 2L13 13M2 13L13 2" />
        </svg>
        {{ t('projects.filter.reset') }}
    </button>
</template>

<script setup lang="ts">
import { useI18n } from '#imports'

const { t } = useI18n()

const emit = defineEmits<{
    reset: []
}>()
</script>

<style scoped>
.projects-filter-reset {
    position: absolute;
    top: calc(100% + 23px);
    right: 24px;
    display: flex;
    align-items: center;
    padding: 0;
    background: none;
    border: none;
    color: var(--main-text, #fff);
    font-weight: 600;
    cursor: pointer;
    transition: color 0.2s;

    &:hover,
    &:focus {
        color: var(--accent-text, #7aedf5);
    }
}

.projects-filter-reset__icon {
    margin-right: 8px;
    stroke: currentColor;
}

@media screen and (max-width: 1200px) {
    .projects-filter-reset {
        top: calc(100% + 28px);
        right: 16px;
    }
}

@media screen and (max-width: 767px) {
    .projects-filter-reset {
        font-weight: 500;
    }

    .projects-filter-reset__icon {
        margin-right: 4px;
    }
}

@media screen and (max-width: 349px) {
    .projects-filter-reset {
        font-size: 12px;
    }
}
</style>
