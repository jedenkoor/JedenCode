import { computed, ref } from 'vue'
import type { Project } from '@/entities/project'
import { findSortOption, type SortValue } from './sort'

// Filtering state lives here and the result is a computed, so it is ready
// during server-side rendering (no watcher writing into a parent's v-model).
export function useProjectsFilter(projects: readonly Project[]) {
  const filters = ref<string[]>([])
  const sort = ref<SortValue>('dateDesc')

  const tags = computed(() => [...new Set(projects.flatMap(project => project.tags))].sort())

  const filteredProjects = computed(() => {
    const list = filters.value.length
      ? projects.filter(project => filters.value.some(tag => project.tags.includes(tag)))
      : [...projects]
    return list.sort(findSortOption(sort.value).compare)
  })

  return { filters, sort, tags, filteredProjects }
}
