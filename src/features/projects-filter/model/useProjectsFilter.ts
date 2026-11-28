import { computed, ref, toValue, watch, type MaybeRefOrGetter } from 'vue'
import { useRoute, useRouter } from '#imports'
import type { Project } from '@/entities/project'
import type { AppLocale } from '@/shared/constants'
import { buildQuery, readQueryState, selectProjects } from './query'
import type { SortValue } from './sort'

/**
 * Фильтрация и сортировка проектов.
 *
 * Начальное состояние читается из query (`?stack=Vue,Webpack&sort=year-asc`),
 * изменения пишутся обратно через `router.replace`, поэтому SSR сразу отдаёт
 * отфильтрованный список, а ссылкой можно поделиться.
 */
export function useProjectsFilter(
    projects: MaybeRefOrGetter<readonly Project[]>,
    locale: MaybeRefOrGetter<AppLocale>
) {
    const route = useRoute()
    const router = useRouter()

    // Набор проектов зависит от локали, поэтому читаем его лениво
    const projectList = computed<readonly Project[]>(() => toValue(projects))
    const collator = computed<Intl.Collator>(() => new Intl.Collator(toValue(locale), { sensitivity: 'base' }))

    const stacks = computed<string[]>(() => [...new Set(projectList.value.flatMap(project => project.stack))].sort())

    const initialState = readQueryState(route.query, stacks.value)
    const filters = ref<string[]>(initialState.filters)
    const sort = ref<SortValue>(initialState.sort)

    const filteredProjects = computed<Project[]>(() =>
        selectProjects(projectList.value, filters.value, sort.value, collator.value)
    )

    const applyQuery = (): void => {
        const query = buildQuery(route.query, filters.value, sort.value)

        void router.replace({ query, hash: route.hash })
    }

    watch([filters, sort], applyQuery)

    // Навигация назад/вперёд меняет query без изменения локального состояния
    watch(
        () => route.query,
        query => {
            const nextState = readQueryState(query, stacks.value)
            if (nextState.filters.join('|') !== filters.value.join('|')) {
                filters.value = nextState.filters
            }
            if (nextState.sort !== sort.value) {
                sort.value = nextState.sort
            }
        }
    )

    return { filters, sort, stacks, filteredProjects }
}
