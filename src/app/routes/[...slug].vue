<template>
    <NotFoundPage />
</template>

<script setup lang="ts">
import { definePageMeta, setResponseStatus, useRequestEvent } from '#imports'
import { NotFoundPage } from '@/pages/not-found'

definePageMeta({ name: 'notFound' })

const event = useRequestEvent()
if (event) {
    setResponseStatus(event, 404)
}
</script>
