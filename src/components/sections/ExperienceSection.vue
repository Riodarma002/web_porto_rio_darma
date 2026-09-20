<script setup lang="ts">
import { ref } from 'vue'
import { experiences } from '../../data/cv-data'

// Object to keep track of which card is expanded (open/hide)
const expandedStates = ref<Record<string, boolean>>({})

// Initialize all cards to be closed initially
experiences.forEach((exp) => {
  expandedStates.value[exp.id] = false
})

const toggleExpand = (id: string) => {
  expandedStates.value[id] = !expandedStates.value[id]
}
</script>

<template>
  <section id="experience" class="section experience-section">
    <div class="experience-container">
      <div class="section-header text-center" v-reveal>
        <span class="badge">Riwayat Karir</span>
        <h2 class="section-title">My Experience</h2>
        <p class="section-subtitle mx-auto">Perjalanan karir profesional saya di berbagai perusahaan</p>
      </div>
      
      <div class="experience-grid">
        <div 
          v-for="exp in experiences" 
          :key="exp.id" 
          class="experience-card card" 
          :class="{ 'is-expanded': expandedStates[exp.id] }"
          v-reveal
        >
          <!-- Clickable Header to Open/Hide -->
          <div class="card-header" @click="toggleExpand(exp.id)">
            <div class="header-info">
              <h3 class="role">{{ exp.role }}</h3>
              <div class="period-wrapper">
                <span class="period">{{ exp.period }}</span>
                <span v-if="exp.isActive" class="active-badge">
                  <span class="active-pulse"></span>
                  Current
                </span>
              </div>
              <h4 class="company">{{ exp.company }}</h4>
            </div>
            
            <button class="toggle-btn" aria-label="Toggle details">
              <svg v-if="expandedStates[exp.id]" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
              <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
          
          <!-- Hidden/Expanded Details -->
          <div class="card-body-wrapper" :class="{ 'is-open': expandedStates[exp.id] }">
            <div class="card-body-inner">
              <div class="card-body-content">
                <div class="divider"></div>
                <ul class="responsibilities">
                  <li v-for="(task, tIndex) in exp.responsibilities" :key="tIndex">{{ task }}</li>
                </ul>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience-section {
  background-color: var(--bg-secondary);
  padding: 6rem 0;
  scroll-margin-top: 90px;
}

.experience-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-header {
  margin-bottom: 3.5rem;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
}

.section-subtitle {
  color: var(--text-muted);
  max-width: 600px;
  font-size: 1.05rem;
}

.text-center {
  text-align: center;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.experience-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  align-items: start;
}

.experience-card {
  padding: 0;
  overflow: hidden;
  transition: all var(--transition-normal);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.75rem 2rem;
  cursor: pointer;
  user-select: none;
}

.header-info {
  flex: 1;
  padding-right: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.role {
  font-size: 1.15rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--text-main);
  margin: 0;
  line-height: 1.35;
}

.period-wrapper {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin: 0.15rem 0;
  flex-wrap: wrap;
}

.period {
  font-family: 'Geist Mono', monospace;
  background-color: var(--primary-light);
  border: 1px solid var(--primary-border);
  color: var(--primary-color);
  padding: 0.28rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
}

.active-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-family: 'Geist Mono', monospace;
  font-size: 0.68rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #10b981;
  background-color: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.25);
  padding: 0.22rem 0.6rem;
  border-radius: 9999px;
}

.active-pulse {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #10b981;
  box-shadow: 0 0 8px #10b981;
}

.company {
  font-size: 0.92rem;
  color: var(--text-muted);
  margin: 0;
  font-weight: 500;
  letter-spacing: 0.02em;
}

.toggle-btn {
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  color: var(--text-muted);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  transition: all var(--transition-fast);
}

.card-header:hover .toggle-btn {
  color: var(--primary-color);
  border-color: var(--primary-color);
  background-color: var(--primary-light);
}

.card-body-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.card-body-wrapper.is-open {
  grid-template-rows: 1fr;
}

.card-body-inner {
  overflow: hidden;
}

.card-body-content {
  padding: 0 2rem 2rem 2rem;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.card-body-wrapper.is-open .card-body-content {
  opacity: 1;
}

.divider {
  height: 1px;
  background-color: var(--border-color);
  margin-bottom: 1.25rem;
}

.responsibilities {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.responsibilities li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;
  color: var(--text-muted);
  font-size: 0.92rem;
  line-height: 1.6;
}

.responsibilities li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.6em;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--primary-color);
}

@media (max-width: 992px) {
  .experience-grid {
    grid-template-columns: 1fr;
  }
}
</style>
