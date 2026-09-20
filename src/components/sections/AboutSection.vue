<script setup lang="ts">
import { personalInfo, stats } from '../../data/cv-data'
</script>

<template>
  <section id="tentang" class="section about-section">
    <div class="container about-container">
      <div class="about-grid">
        <!-- Editorial Quote Area -->
        <div class="about-editorial delay-100" v-reveal>
          <h2 class="editorial-quote">
            "Membangun arsitektur perangkat lunak dan pipeline data terpadu yang mentransformasi kompleksitas operasional menjadi efisiensi terukur."
          </h2>
          <div class="editorial-author">
            <span class="badge">About Me</span>
            <span class="author-name">{{ personalInfo.name }}</span>
          </div>
        </div>

        <!-- Description & Stats Bento -->
        <div class="about-details delay-200" v-reveal>
          <div class="card about-card">
            <p class="about-text">{{ personalInfo.about }}</p>
            
            <div class="stats-grid">
              <div v-for="(stat, index) in stats" :key="index" class="stat-bento">
                <h3 class="stat-value">{{ stat.value }}</h3>
                <p class="stat-label">{{ stat.label }}</p>
              </div>
            </div>

            <a href="/cv-rio-darma.pdf" download="CV-Rio-Darma-2026.pdf" target="_blank" class="btn btn-outline mt-4">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: var(--section-padding);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;
}

.editorial-quote {
  font-size: clamp(1.8rem, 3.5vw, 3rem);
  line-height: 1.1;
  color: var(--text-main);
  margin-bottom: 2rem;
  letter-spacing: -0.03em;
  text-align: left;
}

.editorial-author {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.author-name {
  font-family: 'Geist Mono', monospace;
  color: var(--text-muted);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.about-card {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.about-text {
  font-size: 0.975rem;
  line-height: 1.75;
  color: var(--text-muted);
  white-space: pre-line;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-color);
}

.stat-value {
  font-size: 2rem;
  color: var(--text-main);
  margin-bottom: 0.5rem;
  font-family: 'Geist Mono', monospace;
  letter-spacing: -0.05em;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0;
}

.mt-4 {
  margin-top: 1rem;
  align-self: flex-start;
}

@media (max-width: 1024px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
}
</style>