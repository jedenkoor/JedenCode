<template>
  <li class="projects__item projects-item">
    <a :href="project.link" class="projects-item__link" target="_blank">
      <div class="projects-item__logo">
        <img :src="project.image" :alt="project.title" class="projects-item__img" />
      </div>
      <h3 class="projects-item__title">{{ project.title }}</h3>
      <p class="projects-item__descr">{{ project.description }}</p>
    </a>
  </li>
</template>

<script>
export default {
  props: ['project']
}
</script>
