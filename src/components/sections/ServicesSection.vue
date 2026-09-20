<script setup lang="ts">
const services = [
  { 
    id: 1, 
    title: 'Software Development', 
    badge: 'Desktop & Web App',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" width="28" height="28"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" /></svg>', 
    desc: 'Pengembangan aplikasi desktop operasional (FMS, monitoring armada, reporting unit) dan aplikasi web interaktif menggunakan Python, Vue.js, dan JavaScript.' 
  },
  { 
    id: 2, 
    title: 'Data Engineering & ETL', 
    badge: 'Database & Pipeline',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" width="28" height="28"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>', 
    desc: 'Perancangan arsitektur basis data (PostgreSQL, MySQL), data modeling, integrasi API, dan pipeline ETL untuk otomatisasi aliran data mentah ke data terstruktur.' 
  },
  { 
    id: 3, 
    title: 'Business Intelligence & Analytics', 
    badge: 'Dashboard & KPI',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" width="28" height="28"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /></svg>', 
    desc: 'Pembuatan dashboard visualisasi analitik interaktif dengan Power BI & Python untuk memantau KPI operasional, efisiensi unit alat berat, dan tren performa bisnis.' 
  },
  { 
    id: 4, 
    title: 'GIS & Spatial Data Engineering', 
    badge: 'Mapping & Geofence',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" width="28" height="28"><path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" /></svg>', 
    desc: 'Pengolahan data koordinat survei lapangan, pemetaan jaringan infrastruktur (PLN & site energi) menggunakan ArcGIS, serta integrasi sistem geofencing.' 
  },
  { 
    id: 5, 
    title: 'AI Engineering & Automation', 
    badge: 'Agentic LLM',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" width="28" height="28"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" /></svg>', 
    desc: 'Penerapan teknologi Agentic AI (Claude Code, Ollama, Antigravity) untuk orkestrasi otomatisasi alur kerja sistem, pemrosesan dokumen otomatis, dan pipeline cerdas.' 
  },
  { 
    id: 6, 
    title: 'System Architecture & UX', 
    badge: 'Enterprise Flow',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" width="28" height="28"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" /></svg>', 
    desc: 'Perancangan struktur alur kerja perangkat lunak dan antarmuka sistem (UI/UX) khusus kebutuhan teknis operasional agar bebas galat (*error-free*) dan mudah digunakan tim.' 
  }
]
</script>

<template>
  <section id="services" class="section services-section">
    <div class="container">
      <div class="section-header delay-100" v-reveal>
        <span class="badge">Layanan Utama</span>
        <h2>Services & Solusi</h2>
        <p class="subtitle">Layanan rekayasa perangkat lunak dan pengelolaan data terpadu untuk efisiensi operasional industri dan bisnis.</p>
      </div>
      
      <div class="services-grid mt-4">
        <div 
          v-for="(service, index) in services" 
          :key="service.id" 
          :class="['card', 'service-card', 'delay-' + (((index % 3) + 1) * 100)]" 
          v-reveal
        >
          <div class="card-header-row">
            <div class="service-icon" v-html="service.icon"></div>
            <span class="service-badge">{{ service.badge }}</span>
          </div>
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-desc">{{ service.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section {
  padding: 6rem 0;
  scroll-margin-top: 90px;
}

.section-header {
  max-width: 680px;
  margin-bottom: 3.5rem;
}

.section-header .badge {
  margin-bottom: 0.75rem;
  display: inline-block;
}

.subtitle {
  color: var(--text-muted);
  font-size: 1.05rem;
  line-height: 1.6;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.75rem;
}

.mt-4 {
  margin-top: 2.5rem;
}

.service-card {
  text-align: left;
  padding: 2.25rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: all var(--transition-normal);
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  box-shadow: var(--card-shadow);
}

.service-card:hover {
  transform: translateY(-5px);
  border-color: var(--primary-color);
  box-shadow: 0 16px 32px var(--shadow-color);
}

.card-header-row {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.service-icon {
  color: var(--primary-color);
  width: 52px;
  height: 52px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-light);
  border: 1px solid var(--primary-border);
  transition: all var(--transition-fast);
}

.service-card:hover .service-icon {
  background-color: var(--primary-color);
  color: var(--btn-primary-text);
  transform: scale(1.05);
}

.service-badge {
  font-family: 'Geist Mono', monospace;
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.25rem 0.65rem;
  border-radius: 9999px;
  background-color: var(--primary-light);
  color: var(--primary-color);
  border: 1px solid var(--primary-border);
}

.service-title {
  color: var(--text-main);
  font-size: 1.25rem;
  margin-bottom: 0.85rem;
  font-weight: 600;
  letter-spacing: -0.02em;
}

.service-desc {
  font-size: 0.92rem;
  color: var(--text-muted);
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .services-section {
    padding: 3.5rem 0;
  }

  .section-header {
    margin-bottom: 2rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  .service-card {
    padding: 1.5rem 1.25rem;
  }
}
</style>
