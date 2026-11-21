<template>
    <div class="profile-contacts">
        <a class="profile-contacts__action" :href="cvUrl" download>{{ t('profile.cv') }}</a>
        <a
            v-for="contact in contacts"
            :key="contact.kind"
            class="profile-contacts__action"
            :href="contact.href"
            :target="contact.isExternal ? '_blank' : undefined"
            :rel="contact.isExternal ? 'noopener noreferrer' : undefined"
        >
            {{ contact.label }}
            <span v-if="contact.isExternal" class="visually-hidden">{{ t('common.opensInNewTab') }}</span>
        </a>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from '#imports'
import type { ProfileContact } from '@/entities/profile'

const { t } = useI18n()

defineProps<{
    cvUrl: string
    contacts: ProfileContact[]
}>()
</script>

<style scoped>
.profile-contacts {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 24px;
}

.profile-contacts__action {
    padding: 6px 14px;
    border: 1px solid var(--main-text, #fff);
    border-radius: 5px;
    font-size: 14px;
    transition:
        color 0.2s,
        border-color 0.2s;
    overflow-wrap: anywhere;

    &:hover,
    &:focus {
        color: var(--accent, #7aedf5);
        border-color: var(--accent, #7aedf5);
    }
}
</style>
