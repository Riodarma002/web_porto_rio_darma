import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollSpy(sectionIds: string[], offset = 80) {
  const activeSection = ref(sectionIds[0] || '')
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    // Use a scroll-based approach for more reliable section detection
    const handleScroll = () => {
      const scrollY = window.scrollY + offset + 10

      // Find which section is currently in view
      let currentSection = sectionIds[0]

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          const top = rect.top + window.scrollY

          if (scrollY >= top) {
            currentSection = id
          }
        }
      }

      activeSection.value = currentSection
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check

    // Store cleanup ref
    observer = {
      disconnect: () => window.removeEventListener('scroll', handleScroll),
    } as any
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return {
    activeSection,
    scrollTo,
  }
}
