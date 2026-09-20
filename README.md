# CV Interaktif — Melisa Isolina Songli

Personal website CV interaktif satu halaman (single-page, scroll-based) dengan desain premium "iOS-grade".

## 🛠 Tech Stack

- **Vue 3** (Composition API + `<script setup>`) + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** + CSS Custom Properties
- **@vueuse/motion** (spring/scroll-reveal animations)
- **Lenis** (smooth scroll momentum)
- **Inter** + **IBM Plex Mono** (self-hosted fonts)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── assets/images/       # Foto profil & assets
├── components/
│   ├── layout/          # NavPill, FooterSection
│   ├── sections/        # Hero, About, Experience, dll.
│   └── ui/              # TimelineCard, MagneticButton, dll.
├── composables/         # useScrollSpy, useReducedMotion
├── data/cv-data.ts      # Single source of truth (semua isi CV)
├── App.vue
└── main.ts
```

## 🌐 Deploy ke GitHub Pages

1. Buat repository baru di GitHub
2. Push code ke branch `main`:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: CV Melisa Isolina Songli"
   git branch -M main
   git remote add origin https://github.com/USERNAME/REPO.git
   git push -u origin main
   ```
3. Di GitHub → Settings → Pages → Source → pilih **GitHub Actions**
4. Website akan otomatis di-deploy setiap push ke `main`

## 📝 Mengedit Konten CV

Semua data CV tersimpan di `src/data/cv-data.ts`. Edit file tersebut untuk mengubah:
- Informasi personal
- Pengalaman kerja
- Organisasi
- Pendidikan
- Keahlian

## 📸 Menambahkan Foto Profil

Letakkan file `melisafoto.png` di folder `src/assets/images/`.

## 📄 Menambahkan File CV PDF

Letakkan file PDF di folder `public/` dengan nama `CV_Melisa_Isolina_S.pdf`.

## 📋 License

© 2026 Melisa Isolina Songli. All rights reserved.
