<template>
    <div class="profile-education">
        <h2 class="profile-education__title">{{ t('profile.sections.education') }}</h2>

        <ul class="profile-education__list">
            <li v-for="item in education" :key="item.institution" class="profile-education__item">
                {{ item.degree }}, {{ item.institution }}, {{ item.period }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from '#imports'
import type { ProfileEducation } from '@/entities/profile'

const { t } = useI18n()

defineProps<{
    education: ProfileEducation[]
}>()
</script>

<style scoped>
.profile-education {
    margin-top: 40px;
}

.profile-education__title {
    margin: 0 0 20px;
    font-weight: 600;
    font-size: 24px;
}

.profile-education__list {
    display: grid;
    gap: 8px;
    padding-left: 0;
    list-style: none;
}

@media screen and (max-width: 767px) {
    .profile-education {
        margin-top: 32px;
    }

    .profile-education__title {
        font-size: 20px;
    }
}
</style>
