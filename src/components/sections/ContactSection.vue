<script setup lang="ts">
import { ref } from 'vue'

const copiedIndex = ref<string | null>(null)

const copyToClipboard = (text: string, id: string) => {
  navigator.clipboard.writeText(text).then(() => {
    copiedIndex.value = id
    setTimeout(() => {
      if (copiedIndex.value === id) {
        copiedIndex.value = null
      }
    }, 2000)
  })
}

const directContacts = [
  {
    id: 'wa',
    type: 'whatsapp',
    title: 'WhatsApp',
    subtitle: 'Chat langsung untuk respon cepat',
    value: '0812-1423-6050',
    raw: '081214236050',
    link: 'https://wa.me/6281214236050',
    btnText: 'Buka WhatsApp',
    badge: 'Fast Response',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.07-.1-.23-.16-.48-.28z"/></svg>`
  },
  {
    id: 'phone',
    type: 'phone',
    title: 'Telepon Seluler',
    subtitle: 'Panggilan langsung via seluler',
    value: '0821-1669-8032',
    raw: '082116698032',
    link: 'tel:082116698032',
    btnText: 'Panggil Seluler',
    badge: 'Direct Call',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`
  },
  {
    id: 'email',
    type: 'email',
    title: 'Email',
    subtitle: 'Kirim surat penawaran atau kolaborasi',
    value: 'riodarma789@gmail.com',
    raw: 'riodarma789@gmail.com',
    link: 'mailto:riodarma789@gmail.com',
    btnText: 'Kirim Email',
    badge: 'Official',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`
  }
]

const profileContacts = [
  {
    id: 'github',
    type: 'github',
    title: 'GitHub',
    subtitle: 'Koleksi repository proyek, source code & implementasi sistem',
    value: 'github.com/Riodarma002',
    raw: 'https://github.com/Riodarma002',
    link: 'https://github.com/Riodarma002',
    btnText: 'Buka Profil GitHub',
    badge: 'Code & Repositories',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>`
  },
  {
    id: 'linkedin',
    type: 'linkedin',
    title: 'LinkedIn',
    subtitle: 'Profil profesional, riwayat karir & jaringan koneksi kerja',
    value: 'linkedin.com/in/rio-darma-fredika-296b4277',
    raw: 'https://www.linkedin.com/in/rio-darma-fredika-296b4277',
    link: 'https://www.linkedin.com/in/rio-darma-fredika-296b4277',
    btnText: 'Buka Profil LinkedIn',
    badge: 'Professional Network',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>`
  }
]
</script>

<template>
  <section id="kontak" class="section contact-section">
    <div class="container">
      <div class="section-header text-center" v-reveal>
        <span class="badge">Hubungi Saya</span>
        <h2>Contact Me</h2>
        <p class="subtitle mx-auto">
          Terhubung langsung melalui kontak resmi di bawah ini untuk kolaborasi kerja, rekrutmen, maupun diskusi proyek.
        </p>
      </div>

      <!-- Baris 1: Direct Contacts (WhatsApp, Telepon Seluler, Email) -->
      <div class="contact-grid-row direct-row">
        <div
          v-for="item in directContacts"
          :key="item.id"
          :class="['contact-card', 'card', 'contact-' + item.type]"
          v-reveal
        >
          <div class="card-top">
            <div class="icon-wrapper" v-html="item.icon"></div>
            <span v-if="item.badge" class="badge-tag">{{ item.badge }}</span>
          </div>

          <div class="card-body">
            <h3 class="contact-title">{{ item.title }}</h3>
            <p class="contact-desc">{{ item.subtitle }}</p>
            <div class="contact-value-wrapper">
              <span class="contact-value">{{ item.value }}</span>
            </div>
          </div>

          <div class="card-actions">
            <a
              :href="item.link"
              :target="item.link.startsWith('http') ? '_blank' : '_self'"
              rel="noopener noreferrer"
              class="btn-action"
            >
              <span>{{ item.btnText }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M7 17l9.2-9.2M17 17V8H8"/>
              </svg>
            </a>

            <button
              type="button"
              class="btn-copy"
              :class="{ 'is-copied': copiedIndex === item.id }"
              @click="copyToClipboard(item.raw, item.id)"
              :title="'Salin ' + item.title"
            >
              <svg v-if="copiedIndex !== item.id" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              <span>{{ copiedIndex === item.id ? 'Tersalin' : 'Salin' }}</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Baris 2: Social / Professional (GitHub & LinkedIn) - Centered -->
      <div class="contact-grid-row profile-row">
        <div
          v-for="item in profileContacts"
          :key="item.id"
          :class="['contact-card', 'card', 'contact-' + item.type]"
          v-reveal
        >
          <div class="card-top">
            <div class="icon-wrapper" v-html="item.icon"></div>
            <span v-if="item.badge" class="badge-tag">{{ item.badge }}</span>
          </div>

          <div class="card-body">
            <h3 class="contact-title">{{ item.title }}</h3>
            <p class="contact-desc">{{ item.subtitle }}</p>
            <div class="contact-value-wrapper">
              <span class="contact-value">{{ item.value }}</span>
            </div>
          </div>

          <div class="card-actions">
            <a
              :href="item.link"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-action"
            >
              <span>{{ item.btnText }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M7 17l9.2-9.2M17 17V8H8"/>
              </svg>
            </a>

            <button
              type="button"
              class="btn-copy"
              :class="{ 'is-copied': copiedIndex === item.id }"
              @click="copyToClipboard(item.raw, item.id)"
              :title="'Salin ' + item.title"
            >
              <svg v-if="copiedIndex !== item.id" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              <span>{{ copiedIndex === item.id ? 'Tersalin' : 'Salin' }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  background-color: var(--bg-secondary);
  position: relative;
  overflow: hidden;
  scroll-margin-top: 90px;
  padding-top: 6rem;
  padding-bottom: 6rem;
}

.section-header {
  margin-bottom: 3.5rem;
}

.section-header .badge {
  margin-bottom: 0.75rem;
  display: inline-block;
}

.text-center {
  text-align: center;
}

.subtitle {
  color: var(--text-muted);
  font-size: 1.05rem;
  max-width: 620px;
  line-height: 1.6;
  margin-top: 0.5rem;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

/* Contact Grid Rows */
.contact-grid-row {
  max-width: 1100px;
  margin: 0 auto;
}

.direct-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.profile-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  max-width: 740px;
}

/* Contact Card */
.contact-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.85rem;
  border-radius: var(--border-radius);
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  box-shadow: var(--card-shadow);
  transition: all var(--transition-normal);
  position: relative;
}

.contact-card:hover {
  transform: translateY(-4px);
  border-color: var(--primary-color);
  box-shadow: 0 14px 32px var(--shadow-color);
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
}

.icon-wrapper {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-light);
  color: var(--primary-color);
  border: 1px solid var(--primary-border);
  transition: all var(--transition-normal);
}

.contact-card:hover .icon-wrapper {
  background-color: var(--primary-color);
  color: var(--btn-primary-text);
  transform: scale(1.05);
}

.badge-tag {
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

.card-body {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.contact-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-main);
  margin-bottom: 0.35rem;
}

.contact-desc {
  font-size: 0.88rem;
  color: var(--text-muted);
  margin-bottom: 1.25rem;
  line-height: 1.45;
  min-height: 2.5em;
}

.contact-value-wrapper {
  margin-top: auto;
  margin-bottom: 1.5rem;
  padding: 0.65rem 0.85rem;
  background-color: var(--bg-primary);
  border-radius: 8px;
  border: 1px solid var(--border-color);
}

.contact-value {
  font-family: 'Geist Mono', monospace;
  font-size: 0.88rem;
  color: var(--text-main);
  font-weight: 500;
  word-break: break-all;
}

/* Card Actions */
.card-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
}

.btn-action {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  background-color: var(--primary-color);
  color: var(--btn-primary-text);
  font-weight: 600;
  font-size: 0.85rem;
  padding: 0.65rem 0.9rem;
  border-radius: 8px;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(217, 119, 6, 0.2);
  transition: all var(--transition-fast);
}

.btn-action:hover {
  background-color: var(--primary-hover);
  color: var(--btn-primary-text);
  transform: translateY(-1px);
  box-shadow: 0 4px 14px rgba(217, 119, 6, 0.3);
}

.btn-copy {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  background-color: var(--bg-card);
  color: var(--text-muted);
  border: 1px solid var(--border-color);
  font-size: 0.8rem;
  padding: 0.65rem 0.85rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.btn-copy:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
}

.btn-copy.is-copied {
  background-color: rgba(5, 150, 105, 0.12);
  border-color: var(--success);
  color: var(--success);
}

@media (max-width: 992px) {
  .direct-row {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
  .profile-row {
    max-width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
}

@media (max-width: 640px) {
  .direct-row,
  .profile-row {
    grid-template-columns: 1fr;
  }
}
</style>
