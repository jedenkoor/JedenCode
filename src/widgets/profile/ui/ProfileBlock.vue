<template>
    <section class="profile-block" aria-labelledby="profile-block-title">
        <div class="container">
            <ProfileOverview
                :full-name="profile.fullName"
                :title="profile.title"
                :headline="profile.headline"
                :summary="profile.summary"
                :experience-years="profile.experienceYears"
                :location="profile.location"
                :languages="profile.languages"
            />

            <ProfileContacts :cv-url="profile.cvUrl" :contacts="profile.contacts" />

            <ProfileExperienceList :experience="profile.experience" />
            <ProfileSkills :groups="profile.skills" />
            <ProfileEducationList :education="profile.education" />
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { getProfile } from '@/entities/profile'
import { useAppLocale } from '@/shared/composables'
import ProfileOverview from './ProfileOverview.vue'
import ProfileContacts from './ProfileContacts.vue'
import ProfileExperienceList from './ProfileExperienceList.vue'
import ProfileSkills from './ProfileSkills.vue'
import ProfileEducationList from './ProfileEducationList.vue'

const locale = useAppLocale()
const profile = computed(() => getProfile(locale.value))
</script>

<style scoped>
.profile-block {
    padding-top: 30px;
    margin-bottom: 100px;
}

@media screen and (max-width: 767px) {
    .profile-block {
        margin-bottom: 60px;
    }
}
</style>
