<template>
  <div class="container">
    <ul class="projects__list">
      <ProjectsItem
        v-for="(project, index) in filteredProjects"
        :key="index"
        :project="project"
      />
    </ul>
  </div>
</template>

<script>
import ProjectsItem from '@/components/Projects/ProjectsItem'

export default {
  props: ['filteredProjects'],
  components: {
    ProjectsItem
  }
}
</script>
