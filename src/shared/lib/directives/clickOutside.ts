import type { Directive } from 'vue'

// Замена пакета vue-click-outside (он поддерживает только Vue 2)
type ClickOutsideHandler = (event: MouseEvent) => void

const handlers = new WeakMap<HTMLElement, ClickOutsideHandler>()

const clickOutside: Directive<HTMLElement, ClickOutsideHandler> = {
  mounted(el, binding) {
    const handler: ClickOutsideHandler = event => {
      if (!el.contains(event.target as Node)) binding.value(event)
    }
    handlers.set(el, handler)
    document.addEventListener('click', handler)
  },
  unmounted(el) {
    const handler = handlers.get(el)
    if (handler) document.removeEventListener('click', handler)
    handlers.delete(el)
  }
}

export default clickOutside
