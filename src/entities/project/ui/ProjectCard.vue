<template>
    <li class="project-card">
        <div class="project-card__media">
            <!-- Логотип декоративный: название проекта озвучено заголовком ниже -->
            <img
                :src="project.image"
                alt=""
                width="300"
                height="200"
                decoding="async"
                :loading="isPriority ? 'eager' : 'lazy'"
                :fetchpriority="isPriority ? 'high' : 'auto'"
                class="project-card__img"
            />
        </div>

        <div class="project-card__top">
            <h2 class="project-card__title">
                <a class="project-card__title-link" :href="project.demo" target="_blank" rel="noopener noreferrer">
                    {{ project.title }}
                    <span class="visually-hidden">— открыть демо в новой вкладке</span>
                </a>
            </h2>
            <div class="project-card__date">{{ formatDate(project.date) }}</div>
        </div>

        <p class="project-card__descr">{{ project.description }}</p>
        <p class="project-card__type">{{ project.type }}</p>

        <ul class="project-card__tags">
            <li class="project-card__tag" v-for="technology in project.stack" :key="technology">#{{ technology }}</li>
        </ul>

        <a
            v-if="project.repo"
            class="project-card__repo"
            :href="project.repo"
            target="_blank"
            rel="noopener noreferrer"
        >
            Код на GitHub
            <span class="visually-hidden">Откроется в новой вкладке</span>
        </a>
    </li>
</template>

<script setup lang="ts">
import type { Project } from '../model/types'
import { formatDate } from '../utils/formatDate'

withDefaults(
    defineProps<{
        project: Project
        /** Первые карточки грузятся сразу, остальные — лениво */
        isPriority?: boolean
    }>(),
    { isPriority: false }
)
</script>

<style scoped>
.project-card {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 20px;
    background-color: var(--secondary-bg, #2c2c33);
    border-radius: 5px;
    box-shadow: inset 0 0 0 1px transparent;
    transition: box-shadow 0.2s;

    &:hover,
    &:focus-within {
        box-shadow: inset 0 0 0 1px var(--accent, #7aedf5);
    }
}

.project-card__media {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    padding: 20px;
    background-color: var(--projects-bg, #ebeaec);
    border-radius: 5px;
}

.project-card__img {
    width: 100%;
    max-width: 300px;
    height: 100%;
    object-fit: contain;
}

.project-card__top {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    margin-top: 15px;
    margin-bottom: 20px;
}

.project-card__title {
    margin: 0;
    font-weight: 600;
    font-size: 22px;
}

/* Ссылка-растяжка: демо открывается кликом по любой точке карточки */
.project-card__title-link {
    &::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 5px;
    }
}

.project-card__date {
    white-space: nowrap;
}

.project-card__descr {
    margin-bottom: 8px;
}

.project-card__type {
    margin-bottom: 12px;
    font-size: 14px;
}

.project-card__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding-left: 0;
    list-style: none;
}

.project-card__tag {
    font-size: 14px;
}

/* Лежит поверх ссылки-растяжки, поэтому остаётся кликабельной */
.project-card__repo {
    position: relative;
    z-index: 1;
    align-self: flex-start;
    margin-top: auto;
    padding-top: 16px;
    font-size: 14px;
    text-decoration: underline;
    text-underline-offset: 4px;
    transition: color 0.2s;

    &:hover,
    &:focus {
        color: var(--accent, #7aedf5);
    }
}

@media screen and (max-width: 767px) {
    .project-card {
        padding: 16px;
    }

    .project-card__title {
        font-size: 20px;
    }
}
</style>
