<script setup lang="ts">
import { skills } from '../../data/cv-data'

// Flatten all skills
const allSkills = skills.flatMap(group => group.items)

// Take top 8 for the grid (4 top, 4 bottom)
const coreSkills = allSkills.slice(0, 8)
// Take the rest for badges below
const otherSkills = allSkills.slice(8)
</script>

<template>
  <section id="keahlian" class="section skills-section">
    <div class="container">
      <div class="section-header text-center" v-reveal>
        <span class="badge">Teknologi & Alat</span>
        <h2>My Skills</h2>
        <p class="subtitle mx-auto">Keahlian utama dan teknologi pendukung yang saya kuasai</p>
      </div>

      <!-- Modern Grid Cards -->
      <div class="skills-grid mt-4">
        <div 
          v-for="(skill, index) in coreSkills" 
          :key="index" 
          :class="['card', 'tech-card', 'delay-' + (((index % 4) + 1) * 100)]" 
          v-reveal
        >
          <div class="tech-header">
            <div class="tech-icon" v-html="skill.icon"></div>
            <span class="tech-pct">{{ skill.percentage }}%</span>
          </div>
          <h3 class="tech-name">{{ skill.name }}</h3>
          
          <div class="tech-progress-bg">
            <div class="tech-progress-bar" :style="{ width: skill.percentage + '%' }"></div>
          </div>
        </div>
      </div>

      <!-- Other Skills as Badges -->
      <div class="other-skills delay-300" v-reveal>
        <h3 class="other-title">Teknologi Lainnya</h3>
        <div class="badges-container">
          <div v-for="(skill, index) in otherSkills" :key="'other-'+index" class="skill-badge">
            <span v-if="skill.icon" class="badge-icon" v-html="skill.icon"></span>
            <span class="badge-name">{{ skill.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  padding: 6rem 0;
  scroll-margin-top: 90px;
}

.section-header {
  margin-bottom: 3.5rem;
}

.section-header .badge {
  margin-bottom: 0.75rem;
  display: inline-block;
}

.subtitle {
  color: var(--text-muted);
  font-size: 1.05rem;
  max-width: 600px;
  line-height: 1.6;
}

.text-center {
  text-align: center;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}

.mt-4 {
  margin-top: 2.5rem;
}

.tech-card {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  border: 1px solid var(--border-color);
  background-color: var(--bg-card);
  transition: all var(--transition-normal);
}

.tech-card:hover {
  transform: translateY(-4px);
  border-color: var(--primary-color);
  box-shadow: 0 12px 28px var(--shadow-color);
}

.tech-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.tech-icon {
  color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background-color: var(--primary-light);
  border: 1px solid var(--primary-border);
  transition: all var(--transition-fast);
}

.tech-card:hover .tech-icon {
  background-color: var(--primary-color);
  color: var(--btn-primary-text);
  transform: scale(1.05);
}

.tech-icon :deep(svg) {
  width: 26px;
  height: 26px;
}

.tech-pct {
  font-family: 'Geist Mono', monospace;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--primary-color);
  background: var(--primary-light);
  padding: 0.3rem 0.65rem;
  border-radius: 999px;
  border: 1px solid var(--primary-border);
}

.tech-name {
  font-size: 1.15rem;
  color: var(--text-main);
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.tech-progress-bg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: rgba(0, 0, 0, 0.05);
}

.tech-progress-bar {
  height: 100%;
  background-color: var(--primary-color);
  transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.tech-card:hover .tech-progress-bar {
  box-shadow: 0 0 10px var(--primary-color);
}

/* Other Skills Badges */
.other-skills {
  margin-top: 4.5rem;
  text-align: center;
}

.other-title {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-bottom: 1.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.badges-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.85rem;
  max-width: 900px;
  margin: 0 auto;
}

.skill-badge {
  background-color: var(--bg-card);
  color: var(--text-muted);
  padding: 0.55rem 1.1rem;
  border-radius: 9999px;
  border: 1px solid var(--border-color);
  font-size: 0.9rem;
  transition: all var(--transition-normal);
  display: flex;
  align-items: center;
  gap: 0.55rem;
  cursor: default;
  box-shadow: 0 2px 6px var(--shadow-color);
}

.skill-badge:hover {
  border-color: var(--primary-color);
  color: var(--text-main);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px var(--shadow-color);
}

.badge-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
}

.badge-icon :deep(svg) {
  width: 16px;
  height: 16px;
}

.badge-name {
  font-weight: 500;
}

@media (max-width: 640px) {
  .skills-section {
    padding: 3.5rem 0;
  }
  .section-header {
    margin-bottom: 2rem;
  }
}
</style>
