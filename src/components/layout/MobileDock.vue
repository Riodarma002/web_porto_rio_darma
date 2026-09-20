<script setup lang="ts">
import { useScrollSpy } from '../../composables/useScrollSpy'

const dockItems = [
  { id: 'beranda', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'tentang', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'keahlian', label: 'Skills' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'kontak', label: 'Contact' },
]

const sectionIds = dockItems.map(item => item.id)
const { activeSection, scrollTo } = useScrollSpy(sectionIds, 70)

const iconMap: Record<string, string> = {
  beranda: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  services: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>`,
  tentang: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/></svg>`,
  experience: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
  keahlian: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`,
  portfolio: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,
  kontak: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`
}

function getIcon(id: string) {
  return iconMap[id] || iconMap['beranda']
}
</script>

<template>
  <nav class="mobile-dock" role="navigation" aria-label="Mobile navigation">
    <div class="mobile-dock__container">
      <button
        v-for="item in dockItems"
        :key="item.id"
        :class="['mobile-dock__item', { 'active': activeSection === item.id }]"
        @click="scrollTo(item.id)"
        :aria-current="activeSection === item.id ? 'page' : undefined"
      >
        <div class="mobile-dock__icon" v-html="getIcon(item.id)"></div>
        <span class="mobile-dock__label">{{ item.label }}</span>
        <span v-if="activeSection === item.id" class="mobile-dock__indicator"></span>
      </button>
    </div>
  </nav>
</template>

<style scoped>
.mobile-dock {
  display: none;
  position: fixed;
  bottom: max(16px, env(safe-area-inset-bottom, 16px));
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  width: calc(100% - 24px);
  max-width: 480px;
  pointer-events: auto;
}

@media (max-width: 768px) {
  .mobile-dock {
    display: block;
    animation: dockSlideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
}

@keyframes dockSlideUp {
  from {
    opacity: 0;
    transform: translate(-50%, 24px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0) scale(1);
  }
}

.mobile-dock__container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 6px 6px;
  gap: 2px;
  
  /* SwiftUI Frosted Glass System */
  background: var(--dock-bg, rgba(18, 18, 22, 0.85));
  backdrop-filter: blur(28px) saturate(190%);
  -webkit-backdrop-filter: blur(28px) saturate(190%);
  
  border: 1px solid var(--dock-border, rgba(245, 158, 11, 0.25));
  border-radius: 28px;
  box-shadow: var(--dock-shadow, 0 12px 36px -4px rgba(0, 0, 0, 0.65));
  
  overflow-x: auto;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
}

.mobile-dock__container::-webkit-scrollbar {
  display: none;
}

.mobile-dock__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  min-width: 44px;
  padding: 6px 4px 5px;
  border-radius: 20px;
  background: transparent;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.2, 0, 0, 1);
  -webkit-tap-highlight-color: transparent;
  flex-shrink: 0;
}

.mobile-dock__item:active {
  transform: scale(0.88);
}

.mobile-dock__icon {
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.mobile-dock__icon :deep(svg) {
  width: 19px;
  height: 19px;
  transition: all 0.25s ease;
}

.mobile-dock__label {
  font-size: 10px;
  font-weight: 500;
  margin-top: 3px;
  letter-spacing: -0.01em;
  opacity: 0.85;
  transition: all 0.25s ease;
  white-space: nowrap;
}

.mobile-dock__indicator {
  position: absolute;
  bottom: 2px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: var(--primary-color);
  box-shadow: 0 0 8px var(--primary-color);
}

/* Active State */
.mobile-dock__item.active {
  color: var(--primary-color);
}

.mobile-dock__item.active .mobile-dock__icon {
  transform: translateY(-1px) scale(1.1);
}

.mobile-dock__item.active .mobile-dock__icon :deep(svg) {
  stroke-width: 2.5;
  filter: drop-shadow(0 0 6px rgba(245, 158, 11, 0.45));
}

.mobile-dock__item.active .mobile-dock__label {
  font-weight: 700;
  opacity: 1;
}
</style>
