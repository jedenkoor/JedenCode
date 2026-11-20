<template>
    <footer class="site-footer">
        <div class="container site-footer__container">
            <SiteLogo :to="localePath('/')" />
            <span class="site-footer__copyright">JedenCode © {{ copyrightYear }}</span>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { useLocalePath } from '#imports'
import { SiteLogo } from '@/shared/ui/logo'

const localePath = useLocalePath()
const copyrightYear = new Date().getFullYear()
</script>

<style scoped>
.site-footer {
    padding: 40px 0;
}

.site-footer__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

@media screen and (max-width: 767px) {
    .site-footer {
        padding: 20px 0;
    }

    .site-footer__container {
        flex-direction: column;
        align-items: center;
    }

    .site-footer__copyright {
        margin-top: 20px;
    }
}
</style>
