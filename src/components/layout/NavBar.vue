<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { navItems } from '../../data/cv-data'

const isScrolled = ref(false)
const activeSection = ref('beranda')
const isDark = ref(true)

const toggleTheme = () => {
  isDark.value = !isDark.value
  const theme = isDark.value ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
  
  let currentActive = activeSection.value
  
  for (let i = navItems.length - 1; i >= 0; i--) {
    const section = document.getElementById(navItems[i].id)
    if (section) {
      const rect = section.getBoundingClientRect()
      if (rect.top <= 200) {
        currentActive = section.id
        break
      }
    }
  }
  
  activeSection.value = currentActive
}

onMounted(() => {
  // Check local storage for theme
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
    document.documentElement.setAttribute('data-theme', savedTheme)
  }

  window.addEventListener('scroll', handleScroll)
  setTimeout(handleScroll, 100) 
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const smoothScrollTo = (targetId: string) => {
  const targetEl = document.getElementById(targetId)
  if (!targetEl) return

  const targetPosition = targetEl.getBoundingClientRect().top + window.scrollY - 80
  const startPosition = window.scrollY
  const distance = targetPosition - startPosition
  const duration = 800
  let start: number | null = null

  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp
    const progress = timestamp - start
    const percent = Math.min(progress / duration, 1)
    
    const time = percent < 0.5 ? 4 * percent * percent * percent : 1 - Math.pow(-2 * percent + 2, 3) / 2
    
    window.scrollTo(0, startPosition + distance * time)
    if (progress < duration) {
      window.requestAnimationFrame(step)
    } else {
      activeSection.value = targetId
    }
  })
}

const scrollTo = (id: string) => {
  smoothScrollTo(id)
}
const logoUrl = import.meta.env.BASE_URL + 'rio logo.png'
</script>

<template>
  <header :class="['navbar', { 'scrolled': isScrolled }]">
    <div class="container nav-container">
      <div class="logo"><img :src="logoUrl" alt="Rio Darma" class="logo-img" /></div>
      
      <nav class="nav-links">
        <a 
          v-for="item in navItems" 
          :key="item.id" 
          href="javascript:void(0)"
          @click="scrollTo(item.id)"
          :class="['nav-item', { 'active': activeSection === item.id }]"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="nav-actions">
        <button class="theme-switch" @click="toggleTheme" :aria-label="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'" :class="{ 'is-dark': isDark }">
          <div class="switch-track">
            <div class="switch-thumb">
              <svg v-if="!isDark" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="sun-icon"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="moon-icon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </div>
          </div>
        </button>
        <button class="btn btn-primary" @click="scrollTo('kontak')">Hire Me</button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: 1.25rem 0;
  transition: all var(--transition-normal);
}

.navbar.scrolled {
  background-color: var(--nav-bg);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  padding: 0.9rem 0;
  border-bottom: 1px solid var(--border-color);
  box-shadow: 0 4px 20px -2px var(--shadow-color);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
}

.logo-img {
  height: 35px;
  width: auto;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-item {
  color: var(--text-muted);
  font-weight: 500;
  font-size: 0.95rem;
  transition: color var(--transition-fast);
  position: relative;
}

.nav-item:hover, .nav-item.active {
  color: var(--primary-color);
}

.nav-item.active {
  font-weight: 600;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.theme-switch {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
}

.switch-track {
  width: 52px;
  height: 28px;
  background-color: #E2E8F0;
  border: 1px solid #CBD5E1;
  border-radius: 30px;
  position: relative;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  display: flex;
  align-items: center;
  padding: 0 3px;
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.06);
}

.theme-switch:hover .switch-track {
  border-color: var(--primary-color);
}

.switch-thumb {
  width: 20px;
  height: 20px;
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #D97706;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.3s ease, color 0.3s ease;
  transform: translateX(0);
  box-shadow: 0 2px 5px rgba(0,0,0,0.15);
}

.theme-switch.is-dark .switch-track {
  background-color: var(--bg-card);
  border-color: var(--border-color);
}

.theme-switch.is-dark .switch-thumb {
  transform: translateX(24px);
  background-color: var(--primary-color);
  color: #09090b;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
}
</style>
