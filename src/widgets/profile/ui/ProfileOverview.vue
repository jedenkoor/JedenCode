<template>
    <div class="profile-overview">
        <p id="profile-block-title" class="profile-overview__name">{{ fullName }}</p>
        <p class="profile-overview__role">{{ title }} — {{ headline }}</p>
        <p class="profile-overview__summary">{{ summary }}</p>

        <dl class="profile-overview__facts">
            <div class="profile-overview__fact">
                <dt class="profile-overview__fact-term">{{ t('profile.facts.experience') }}</dt>
                <dd class="profile-overview__fact-value">
                    {{ t('profile.experienceYears', { years: experienceYears }) }}
                </dd>
            </div>
            <div class="profile-overview__fact">
                <dt class="profile-overview__fact-term">{{ t('profile.facts.location') }}</dt>
                <dd class="profile-overview__fact-value">{{ location }}</dd>
            </div>
            <div class="profile-overview__fact">
                <dt class="profile-overview__fact-term">{{ t('profile.facts.languages') }}</dt>
                <dd class="profile-overview__fact-value">
                    <span v-for="(language, index) in languages" :key="language.language">
                        {{ language.language }} — {{ language.level }}{{ index < languages.length - 1 ? ', ' : '' }}
                    </span>
                </dd>
            </div>
        </dl>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from '#imports'
import type { ProfileLanguage } from '@/entities/profile'

const { t } = useI18n()

defineProps<{
    fullName: string
    title: string
    headline: string
    summary: string
    experienceYears: number
    location: string
    languages: ProfileLanguage[]
}>()
</script>

<style scoped>
.profile-overview__name {
    margin: 0;
    font-weight: 600;
    font-size: 40px;
    line-height: 1.15;
}

.profile-overview__role {
    margin: 8px 0 20px;
    color: var(--accent, #7aedf5);
    font-size: 18px;
}

.profile-overview__summary {
    max-width: 760px;
}

.profile-overview__facts {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 40px;
    margin: 24px 0 0;
}

.profile-overview__fact {
    display: flex;
    gap: 8px;
}

.profile-overview__fact-term {
    font-weight: 600;
}

.profile-overview__fact-value {
    margin: 0;
}

@media screen and (max-width: 767px) {
    .profile-overview__name {
        font-size: 28px;
    }

    .profile-overview__role {
        font-size: 16px;
    }
}
</style>
