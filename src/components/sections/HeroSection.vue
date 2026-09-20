<script setup lang="ts">
import { personalInfo } from '../../data/cv-data'

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
const photoUrl = import.meta.env.BASE_URL + 'foto-rio.png'
</script>

<template>
  <section id="beranda" class="section hero-section">
    <div class="container hero-container">
      <!-- Left Column: Typography & Action -->
      <div class="hero-content">
        <span class="hero-eyebrow delay-100" v-reveal>Portfolio & CV</span>
        
        <h1 class="hero-title delay-200" v-reveal>
          <span class="text-muted">I build & scale digital systems as</span>
          <br />
          Software <span class="text-primary">&</span> Data Engineer
        </h1>
        
        <p class="hero-subtitle delay-300" v-reveal>
          {{ personalInfo.name }} • Building functional, scalable, and data-driven systems.
        </p>
        
        <div class="hero-actions delay-400" v-reveal>
          <button class="btn btn-primary" @click="scrollTo('kontak')">Hire Me</button>
          <a :href="personalInfo.portfolio" target="_blank" rel="noopener noreferrer" class="btn btn-outline">View Work</a>
        </div>
        
        <div class="hero-socials delay-400" v-reveal>
          <a :href="personalInfo.linkedin" target="_blank" rel="noopener noreferrer" class="social-link">LinkedIn</a>
          <span class="separator">/</span>
          <a :href="personalInfo.github" target="_blank" rel="noopener noreferrer" class="social-link">GitHub</a>
          <span class="separator">/</span>
          <a :href="personalInfo.portfolio" target="_blank" rel="noopener noreferrer" class="social-link">Portfolio</a>
        </div>
      </div>

      <!-- Right Column: Editorial Portrait Stage -->
      <div class="hero-visual delay-300" v-reveal>
        <div class="portrait-stage">
          <!-- Ambient Radial Glow -->
          <div class="ambient-glow"></div>
          
          <!-- Decorative Geometric Halo -->
          <div class="stage-halo"></div>

          <!-- Cutout Photo with Seamless Bottom Fade -->
          <div class="photo-wrapper">
            <img 
              :src="photoUrl" 
              alt="Rio Darma Fredika" 
              class="hero-photo" 
            />
          </div>

          <!-- Floating Micro-Card: Status (Positioned completely clear of face/neck) -->
          <div class="floating-chip chip-top">
            <span class="status-dot"></span>
            <div class="chip-text">
              <span class="chip-title">Active at PT. MGE</span>
              <span class="chip-desc">Software & Data Engineer</span>
            </div>
          </div>

          <!-- Floating Micro-Card: Experience (Positioned completely clear of body/arms) -->
          <div class="floating-chip chip-bottom">
            <div class="chip-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="m13 2-2 10h6L7 22l2-10H3L13 2z"/>
              </svg>
            </div>
            <div class="chip-text">
              <span class="chip-title">7+ Years Exp</span>
              <span class="chip-desc">Software • Data • Systems</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  min-height: 95vh;
  display: flex;
  align-items: center;
  padding-top: 110px;
  padding-bottom: 5rem;
  overflow: hidden;
  position: relative;
}

.hero-container {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 3.5rem;
  align-items: center;
  width: 100%;
}

.hero-content {
  max-width: 680px;
}

.hero-eyebrow {
  display: inline-block;
  font-family: 'Geist Mono', monospace;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--primary-color);
  background-color: var(--primary-light);
  border: 1px solid var(--primary-border);
  margin-bottom: 1.75rem;
  padding: 0.4rem 1rem;
  border-radius: 9999px;
}

.hero-title {
  font-size: clamp(2.5rem, 4.8vw, 4.4rem);
  line-height: 1.1;
  letter-spacing: -0.035em;
  color: var(--text-main);
  margin-bottom: 1.5rem;
}

.text-muted {
  color: var(--text-muted);
  font-weight: 500;
}

.text-primary {
  color: var(--primary-color);
}

.hero-subtitle {
  font-size: 1.15rem;
  color: var(--text-muted);
  max-width: 580px;
  margin-bottom: 2.75rem;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 1.25rem;
  margin-bottom: 3rem;
  align-items: center;
}

.hero-socials {
  display: flex;
  gap: 1.25rem;
  align-items: center;
}

.social-link {
  font-family: 'Geist Mono', monospace;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  transition: color var(--transition-fast);
}

.social-link:hover {
  color: var(--primary-color);
}

.separator {
  color: var(--border-color);
}

/* ==============================================
   Editorial Portrait Stage
   ============================================== */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.portrait-stage {
  position: relative;
  width: 100%;
  max-width: 480px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

/* Ambient Radial Glow */
.ambient-glow {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 380px;
  height: 380px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--primary-light) 0%, rgba(245, 158, 11, 0.04) 55%, transparent 75%);
  filter: blur(40px);
  z-index: 1;
  pointer-events: none;
}

/* Stage Halo / Subtle Pedestal */
.stage-halo {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 320px;
  height: 320px;
  border-radius: 50%;
  border: 1px solid var(--primary-border);
  background: radial-gradient(circle, var(--primary-light) 0%, transparent 70%);
  opacity: 0.55;
  z-index: 1;
  pointer-events: none;
}

/* Photo Wrapper & Seamless Fade */
.photo-wrapper {
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.hero-photo {
  width: 100%;
  max-width: 340px;
  height: auto;
  object-fit: contain;
  display: block;
  -webkit-mask-image: linear-gradient(to bottom, black 82%, transparent 100%);
  mask-image: linear-gradient(to bottom, black 82%, transparent 100%);
  filter: drop-shadow(0 15px 25px var(--shadow-color));
  transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.portrait-stage:hover .hero-photo {
  transform: translateY(-6px) scale(1.02);
}

/* Floating Glassmorphism Micro-Cards (Clear of Face & Body) */
.floating-chip {
  position: absolute;
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.55rem 0.9rem;
  border-radius: 12px;
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  box-shadow: 0 10px 25px -4px var(--shadow-color);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  transition: all var(--transition-normal);
  user-select: none;
  white-space: nowrap;
}

.floating-chip:hover {
  border-color: var(--primary-color);
  transform: translateY(-3px);
  box-shadow: 0 14px 30px var(--shadow-color);
}

/* Chip Top: Positioned clear of face, neck and collar */
.chip-top {
  top: 14%;
  left: -10px;
  animation: floatSlow 6s ease-in-out infinite;
}

/* Chip Bottom: Positioned clear of body and arm */
.chip-bottom {
  bottom: 10%;
  right: -25px;
  animation: floatSlow 6s ease-in-out infinite 3s;
}

.status-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: #10b981;
  box-shadow: 0 0 10px #10b981;
  display: inline-block;
}

.chip-icon {
  width: 26px;
  height: 26px;
  border-radius: 7px;
  background-color: var(--primary-light);
  color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
}

.chip-text {
  display: flex;
  flex-direction: column;
}

.chip-title {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--text-main);
  letter-spacing: -0.01em;
}

.chip-desc {
  font-size: 0.7rem;
  color: var(--text-muted);
}

@keyframes floatSlow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-7px);
  }
}

/* ==============================================
   Responsive Layout
   ============================================== */
@media (max-width: 1200px) {
  .chip-top {
    left: -40px;
  }
  .chip-bottom {
    right: -40px;
  }
}

@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 3.5rem;
    text-align: center;
  }

  .hero-content {
    max-width: 100%;
    margin: 0 auto;
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-socials {
    justify-content: center;
  }

  .hero-visual {
    order: -1;
    margin-top: 1rem;
  }

  .portrait-stage {
    max-width: 360px;
  }

  .hero-photo {
    max-width: 290px;
  }

  .chip-top {
    left: -20px;
    top: 5%;
  }

  .chip-bottom {
    right: -20px;
    bottom: 5%;
  }
}

@media (max-width: 640px) {
  .hero-title {
    font-size: 2.3rem;
  }

  .hero-actions {
    flex-direction: column;
    width: 100%;
  }

  .hero-actions .btn {
    width: 100%;
  }

  .chip-top {
    left: -10px;
    top: 2%;
  }

  .chip-bottom {
    right: -10px;
    bottom: 2%;
  }
}
</style>
