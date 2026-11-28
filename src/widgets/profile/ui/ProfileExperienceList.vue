<template>
    <div class="profile-experience">
        <h2 class="profile-experience__title">{{ t('profile.sections.experience') }}</h2>

        <ol class="profile-experience__list">
            <li v-for="job in experience" :key="`${job.company}-${job.period}`" class="profile-experience__job">
                <div class="profile-experience__job-head">
                    <p class="profile-experience__job-role">{{ job.role }}</p>
                    <p class="profile-experience__job-period">{{ job.period }}</p>
                </div>
                <p class="profile-experience__job-company">
                    {{ job.company }}
                    <span v-if="job.descriptor" class="profile-experience__job-descriptor">{{ job.descriptor }}</span>
                </p>

                <ul class="profile-experience__achievements">
                    <li
                        v-for="achievement in job.achievements"
                        :key="achievement"
                        class="profile-experience__achievement"
                    >
                        {{ achievement }}
                    </li>
                </ul>

                <div v-if="job.projects.length" class="profile-experience__job-projects">
                    <p class="profile-experience__projects-title">{{ t('profile.sections.projects') }}</p>
                    <ul class="profile-experience__projects">
                        <li v-for="project in job.projects" :key="project.href" class="profile-experience__project">
                            <a
                                class="profile-experience__project-link"
                                :href="project.href"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {{ project.label }}
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
        </ol>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from '#imports'
import type { ProfileExperience } from '@/entities/profile'

const { t } = useI18n()

defineProps<{
    experience: ProfileExperience[]
}>()
</script>

<style scoped>
.profile-experience {
    margin-top: 40px;
}

.profile-experience__title {
    margin: 0 0 20px;
    font-weight: 600;
    font-size: 24px;
}

.profile-experience__list {
    display: grid;
    gap: 28px;
    padding-left: 0;
    list-style: none;
}

.profile-experience__job-head {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 8px;
}

.profile-experience__job-role {
    margin: 0;
    font-weight: 600;
    font-size: 18px;
}

.profile-experience__job-period {
    margin: 0;
}

.profile-experience__job-company {
    margin: 4px 0 12px;
    color: var(--accent-text, #7aedf5);
}

.profile-experience__job-descriptor {
    margin-left: 6px;
    color: var(--main-text, #fff);
    font-weight: 400;
    font-size: 14px;
    opacity: 0.65;
}

.profile-experience__achievements {
    display: grid;
    gap: 6px;
    padding-left: 18px;
}

.profile-experience__job-projects {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 4px 16px;
    margin-top: 12px;
    font-size: 14px;
}

.profile-experience__projects-title {
    margin: 0;
}

.profile-experience__projects {
    display: flex;
    flex-wrap: wrap;
    gap: 4px 16px;
    margin: 0;
    padding-left: 0;
    list-style: none;
}

.profile-experience__project {
    position: relative;
    padding-left: 10px;

    &::before {
        content: '';
        position: absolute;
        top: 8px;
        left: 0;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: currentColor;
    }
}

.profile-experience__project-link {
    text-decoration: underline;

    &:hover,
    &:focus {
        color: var(--accent-text, #7aedf5);
    }
}

@media screen and (max-width: 767px) {
    .profile-experience {
        margin-top: 32px;
    }

    .profile-experience__title {
        font-size: 20px;
    }

    .profile-experience__job-head {
        flex-direction: column;
        gap: 4px;
    }
}
</style>
