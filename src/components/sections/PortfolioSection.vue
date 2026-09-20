<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { portfolioProjects, type Project } from '../../data/cv-data'

// Get unique categories from the projects
const uniqueCategories = Array.from(new Set(portfolioProjects.map(p => p.category)))
const tabs = ['All', ...uniqueCategories]

const activeTab = ref('All')

const filteredProjects = computed(() => {
  if (activeTab.value === 'All') return portfolioProjects
  return portfolioProjects.filter(p => p.category === activeTab.value)
})

// Lightbox Modal state
const activePreview = ref<Project | null>(null)

const openPreview = (project: Project) => {
  activePreview.value = project
  document.body.style.overflow = 'hidden'
}

const closePreview = () => {
  activePreview.value = null
  document.body.style.overflow = ''
}

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && activePreview.value) {
    closePreview()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
  document.body.style.overflow = ''
})
</script>

<template>
  <section id="portfolio" class="section portfolio-section">
    <div class="container">
      <div class="section-header text-center" v-reveal>
        <span class="badge">Portofolio Pilihan</span>
        <h2 class="section-title">My Portfolio</h2>
        <p class="section-subtitle mx-auto">Beberapa hasil karya terbaik yang pernah saya kerjakan</p>
      </div>
      
      <div class="portfolio-tabs delay-200" v-reveal>
        <button 
          v-for="tab in tabs" 
          :key="tab"
          :class="['tab-btn', { active: activeTab === tab }]"
          @click="activeTab = tab"
        >
          {{ tab }}
        </button>
      </div>
      
      <transition-group name="portfolio" tag="div" class="grid-3 mt-4">
        <div 
          v-for="(project, index) in filteredProjects" 
          :key="project.id" 
          :class="['portfolio-card', 'delay-' + (((index % 3) + 1) * 100)]" 
          v-reveal
        >
          <!-- Image Wrapper: Clickable preview on both desktop & mobile -->
          <div class="portfolio-image-wrapper" @click="openPreview(project)" role="button" tabindex="0" :aria-label="'Preview ' + project.title">
            <img :src="project.image" :alt="project.title" class="portfolio-image" loading="lazy" />
            <div class="portfolio-overlay">
              <span class="view-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  <line x1="11" y1="8" x2="11" y2="14"></line>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
                Lihat Preview
              </span>
            </div>
          </div>

          <div class="portfolio-info">
            <span class="portfolio-category">{{ project.category }}</span>
            <h3 class="portfolio-title">{{ project.title }}</h3>
            <p class="portfolio-desc">{{ project.description }}</p>

            <!-- Action buttons: Always visible & directly touchable on mobile & desktop -->
            <div class="portfolio-actions">
              <a 
                v-if="project.link" 
                :href="project.link" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="action-btn action-btn--primary"
                @click.stop
              >
                <span>Buka Website</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>

              <button 
                type="button" 
                class="action-btn action-btn--secondary"
                @click.stop="openPreview(project)"
              >
                <span>Lihat Gambar</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                  <circle cx="9" cy="9" r="2"/>
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </transition-group>
    </div>

    <!-- Lightbox Modal for High-Res Image Preview & Details -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="activePreview" class="lightbox-backdrop" @click.self="closePreview">
          <div class="lightbox-modal">
            <button class="lightbox-close" @click="closePreview" aria-label="Tutup preview">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div class="lightbox-media">
              <img :src="activePreview.image" :alt="activePreview.title" class="lightbox-img" />
            </div>

            <div class="lightbox-content">
              <div class="lightbox-header">
                <span class="portfolio-category">{{ activePreview.category }}</span>
                <h3 class="lightbox-title">{{ activePreview.title }}</h3>
              </div>
              <p v-if="activePreview.description" class="lightbox-desc">{{ activePreview.description }}</p>
              
              <div class="lightbox-footer">
                <a
                  v-if="activePreview.link"
                  :href="activePreview.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-primary btn-sm"
                >
                  <span>Kunjungi Website Langsung</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
                <a
                  :href="activePreview.image"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-outline btn-sm"
                >
                  <span>Buka Tab Gambar</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<style scoped>
.portfolio-section {
  background-color: var(--bg-primary);
  padding: 6rem 0;
  scroll-margin-top: 90px;
}

.section-header {
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
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

.portfolio-tabs {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 3rem;
}

.tab-btn {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  color: var(--text-muted);
  padding: 0.45rem 1.25rem;
  border-radius: 9999px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all var(--transition-fast);
  box-shadow: 0 2px 6px var(--shadow-color);
}

.tab-btn:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
}

.tab-btn.active {
  background: var(--primary-color);
  color: var(--btn-primary-text);
  border-color: var(--primary-color);
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(217, 119, 6, 0.25);
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
}

.portfolio-card {
  background: var(--bg-card);
  border-radius: var(--border-radius);
  overflow: hidden;
  border: 1px solid var(--border-color);
  transition: transform var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal);
  display: flex;
  flex-direction: column;
  box-shadow: var(--card-shadow);
}

.portfolio-card:hover {
  transform: translateY(-6px);
  border-color: var(--primary-color);
  box-shadow: 0 16px 32px var(--shadow-color);
}

.portfolio-image-wrapper {
  position: relative;
  height: 220px;
  overflow: hidden;
  background: var(--bg-secondary);
  cursor: pointer;
}

.portfolio-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.portfolio-card:hover .portfolio-image {
  transform: scale(1.05);
}

.portfolio-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 23, 42, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  backdrop-filter: blur(4px);
  transition: opacity 0.3s ease;
}

.portfolio-card:hover .portfolio-overlay {
  opacity: 1;
}

.view-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--btn-primary-text);
  font-weight: 600;
  border: none;
  background-color: var(--primary-color);
  padding: 0.6rem 1.3rem;
  border-radius: 9999px;
  font-size: 0.88rem;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
  transition: all var(--transition-fast);
}

.view-btn:hover {
  background-color: var(--primary-hover);
  transform: scale(1.05);
}

.portfolio-info {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.portfolio-category {
  font-family: 'Geist Mono', monospace;
  font-size: 0.75rem;
  color: var(--primary-color);
  margin-bottom: 0.4rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.portfolio-title {
  font-size: 1.2rem;
  color: var(--text-main);
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.portfolio-desc {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 0;
  flex: 1;
}

/* Card Action Buttons (Directly touchable / visible) */
.portfolio-actions {
  display: flex;
  gap: 0.65rem;
  margin-top: 1.25rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
}

.action-btn {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  padding: 0.55rem 0.85rem;
  border-radius: 8px;
  font-size: 0.82rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all var(--transition-fast);
  border: 1px solid transparent;
  user-select: none;
}

.action-btn--primary {
  background-color: var(--primary-color);
  color: var(--btn-primary-text);
  box-shadow: 0 2px 8px rgba(217, 119, 6, 0.2);
}

.action-btn--primary:hover {
  background-color: var(--primary-hover);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(217, 119, 6, 0.3);
}

.action-btn--secondary {
  background-color: var(--bg-primary);
  color: var(--text-main);
  border-color: var(--border-color);
}

.action-btn--secondary:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
  background-color: var(--primary-light);
}

.mt-4 {
  margin-top: 2rem;
}

/* Lightbox Modal */
.lightbox-backdrop {
  position: fixed;
  inset: 0;
  z-index: 10000;
  background: rgba(9, 9, 11, 0.88);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
}

.lightbox-modal {
  position: relative;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  max-width: 820px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.65);
  display: flex;
  flex-direction: column;
}

.lightbox-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.lightbox-close:hover {
  background: var(--primary-color);
  color: var(--btn-primary-text);
  transform: scale(1.08);
}

.lightbox-media {
  width: 100%;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  overflow: hidden;
}

.lightbox-img {
  width: 100%;
  max-height: 58vh;
  object-fit: contain;
  display: block;
}

.lightbox-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.lightbox-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-main);
  margin: 0.25rem 0 0;
}

.lightbox-desc {
  color: var(--text-muted);
  font-size: 0.92rem;
  line-height: 1.6;
  margin: 0;
}

.lightbox-footer {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--border-color);
  margin-top: 0.5rem;
}

.btn-sm {
  padding: 0.55rem 1.15rem;
  font-size: 0.85rem;
  gap: 0.4rem;
}

/* Transitions */
.portfolio-move,
.portfolio-enter-active,
.portfolio-leave-active {
  transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.portfolio-enter-from,
.portfolio-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.96);
}
.portfolio-leave-active {
  position: absolute;
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .lightbox-modal,
.modal-leave-to .lightbox-modal {
  transform: scale(0.95) translateY(12px);
}

@media (max-width: 640px) {
  .portfolio-section {
    padding: 3.5rem 0;
  }
  .section-header {
    margin-bottom: 2rem;
  }
  .grid-3 {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .portfolio-actions {
    flex-direction: column;
    gap: 0.5rem;
  }
  .action-btn {
    width: 100%;
    padding: 0.7rem 1rem;
    font-size: 0.86rem;
  }
  .lightbox-footer {
    flex-direction: column;
  }
  .lightbox-footer .btn {
    width: 100%;
  }
}
</style>
