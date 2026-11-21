<template>
    <div class="profile-skills">
        <h2 class="profile-skills__title">{{ t('profile.sections.skills') }}</h2>

        <div class="profile-skills__groups">
            <div v-for="group in groups" :key="group.title" class="profile-skills__group">
                <p class="profile-skills__group-title">{{ group.title }}</p>
                <ul class="profile-skills__list">
                    <li v-for="item in group.items" :key="item" class="profile-skills__item">{{ item }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from '#imports'
import type { ProfileSkillGroup } from '@/entities/profile'

const { t } = useI18n()

defineProps<{
    groups: ProfileSkillGroup[]
}>()
</script>

<style scoped>
.profile-skills {
    margin-top: 40px;
}

.profile-skills__title {
    margin: 0 0 20px;
    font-weight: 600;
    font-size: 24px;
}

.profile-skills__groups {
    display: grid;
    gap: 16px;
}

.profile-skills__group-title {
    margin-bottom: 8px;
    font-weight: 600;
}

.profile-skills__list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding-left: 0;
    list-style: none;
}

.profile-skills__item {
    padding: 2px 10px;
    background-color: var(--secondary-bg, #2c2c33);
    border-radius: 5px;
    font-size: 14px;
}

@media screen and (max-width: 767px) {
    .profile-skills {
        margin-top: 32px;
    }

    .profile-skills__title {
        font-size: 20px;
    }
}
</style>
