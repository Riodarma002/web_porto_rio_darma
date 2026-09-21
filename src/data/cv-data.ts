// ============================================
// CV Data â€” Single Source of Truth for Rio Darma
// ============================================

export interface PersonalInfo {
  name: string
  role: string
  tagline: string
  about: string
  phone: string
  whatsapp: string
  email: string
  address: string
  linkedin: string
  github: string
  portfolio: string
}

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  isActive: boolean
  responsibilities: string[]
}

export interface Education {
  id: string
  institution: string
  degree: string
  period: string
}

export interface SkillGroup {
  category: 'soft' | 'tools'
  label: string
  items: { name: string; percentage: number; icon?: string }[]
}

export interface StatItem {
  value: string
  label: string
}

export interface Project {
  id: string
  title: string
  category: string
  image: string
  description?: string
  link?: string
}

// --- Personal Info ---
export const personalInfo: PersonalInfo = {
  name: 'Rio Darma Fredika',
  role: 'Software & Data Engineer',
  tagline: 'Membangun ekosistem digital yang efisien dari pemetaan proses (UX) hingga perancangan arsitektur data (Data Engineering).',
  about: `Perkenalkan, saya Rio Darma Fredika, seorang Software & Data Engineer berdedikasi dengan rekam jejak lebih dari 7 tahun dalam merancang dan mengembangkan sistem perangkat lunak, arsitektur data terpadu, serta solusi geospasial.

Saat ini, saya aktif berkarya di PT. Mega Global Energy sebagai Software & Data Engineer. Fokus tanggung jawab saya mencakup perancangan aplikasi desktop dan web operasional, pengembangan sistem GPS tracking armada terintegrasi, otomatisasi pipeline data, serta penyusunan dashboard visualisasi analitik interaktif berbasis Python, Vue.js, dan Power BI.

Sebelumnya, saya dipercaya di PT. Quadran Inovasi Karya Bersama dalam pengelolaan serta validasi data geospasial jaringan distribusi kelistrikan berskala enterprise yang bermitra langsung dengan PT PLN (Persero). Rekam jejak saya juga diperkaya oleh keahlian riset interaksi pengguna (UX) dan tata kelola administrasi operasional proyek.

Dengan dedikasi penuh, integritas tinggi, dan orientasi pada solusi, saya senantiasa berkomitmen untuk menghadirkan inovasi teknologi yang andal, efisien, dan bernilai strategis bagi kemajuan jangka panjang perusahaan.`,
  phone: '082116698032',
  whatsapp: '081214236050',
  email: 'riodarma789@gmail.com',
  address: 'KP. Pasir Junti, RT.03/RW 09, Desa. Cibatu, Kec. Cibatu, Garut',
  linkedin: 'https://www.linkedin.com/in/rio-darma-fredika-296b4277',
  github: 'https://github.com/Riodarma002',
  portfolio: 'https://drive.google.com/drive/folders/1k4P6b37Kgh7yJ0cuBZB62rQASZ9kA5oE?usp=sharing',
}

// --- Stats ---
export const stats: StatItem[] = [
  { value: '7+', label: 'Tahun Pengalaman' },
  { value: '5+', label: 'Perusahaan' },
]

// --- Pengalaman Kerja ---
export const experiences: Experience[] = [
  {
    id: 'mega-global',
    company: 'PT. MEGA GLOBAL ENERGY',
    role: 'Software & Data Engineer (Foreman Planning)',
    period: 'Desember 2023 - Sekarang',
    isActive: true,
    responsibilities: [
      'Merancang dan membangun aplikasi desktop serta web untuk input data dan monitoring performa unit operasional.',
      'Mengembangkan sistem pelacakan GPS kustom terintegrasi dengan kebutuhan operasional perusahaan.',
      'Membangun dashboard business intelligence interaktif menggunakan Power BI, Python, dan Vue.js.',
      'Melakukan analisis data harian produksi dan efisiensi operasional guna mendukung pengambilan keputusan manajemen.'
    ],
  },
  {
    id: 'quadran',
    company: 'PT. QUADRAN INOVASI KARYA BERSAMA',
    role: 'Data Engineer & Drafter GIS Jaringan Listrik',
    period: 'September 2021 - 2023',
    isActive: false,
    responsibilities: [
      'Mengolah data survei koordinat lapangan untuk dimodelkan ke dalam sistem informasi spasial ArcGIS.',
      'Melakukan validasi dan verifikasi kesesuaian gambar serta data teknis jaringan kelistrikan dengan kondisi konstruksi fisik.',
      'Memetakan dan mendigitasi komponen jaringan listrik tegangan menengah dan rendah (Gardu Induk, SUTM, JTR, Switch).',
      'Mengembangkan otomasi konversi data teknis spasial (AR text) menjadi data tabular terstruktur untuk sinkronisasi aset ke sistem enterprise MAXIMO PLN.'
    ],
  },
  {
    id: 'kai',
    company: 'PT. KAI PROPERTI',
    role: 'Admin Umum dan LPJ',
    period: 'Desember 2019 - Mei 2021',
    isActive: false,
    responsibilities: [
      'Mengumpulkan dokumen penting seperti SPK, BAP, BAST basborong',
      'Membuat laporan pertanggung jawaban sesuai dengan jenis pekerjaan basborong',
      'Membuat surat kontrak pegawai proyek'
    ],
  },
  {
    id: 'sda',
    company: 'PT. SDA',
    role: 'Admin & Pengawas Alat Berat',
    period: 'September 2019 - Desember 2019',
    isActive: false,
    responsibilities: [
      'Bertanggung jawab operasional dan progres kerja alat berat',
      'Mengatur time sheet operator alat berat',
      'Membuat laporan progres pekerjaan & gaji operator alat berat',
      'Mengawasi kinerja operator alat berat di area proyek'
    ],
  },
  {
    id: 'maco',
    company: 'PT. MACO GROUP',
    role: 'Staff R&D',
    period: 'Januari 2019 - Agustus 2019',
    isActive: false,
    responsibilities: [
      'Membuat konten design produk untuk di upload di sosial media',
      'Membuat rancangan website e-commerce khusus produk maco sesuai dengan kaidah UX',
      'Membuat UI design website e-commerce catenzo (salah satu brand dari PT. MACO GROUP)',
      'Membuat konsep design t-shirt'
    ],
  },
  {
    id: 'telkom',
    company: 'PT. TELKOM INDONESIA',
    role: 'UX Researcher & Graphic Designer',
    period: 'April 2017 - Desember 2018',
    isActive: false,
    responsibilities: [
      'Menganalisa UI website atau aplikasi mobile & desktop dengan metode heuristic evaluation',
      'Membuat rancangan aplikasi sesuai kaidah UX seperti user flow dan IA',
      'Memberikan bahan rancangan aplikasi kepada UI designer',
      'Membuat bahan user testing dan mewawancarai user setelah menggunakan aplikasi tersebut',
      'Membuat rangkuman analisa perbaikan desain aplikasi (hasil masukan dari peserta user test)',
      'Membuat UI desain sesuai kaidah UX',
      'Membuat konten-konten desain seperti desain persentasi power point, diagram, gallery unit, poster'
    ],
  }
]

// --- Pendidikan ---
export const educations: Education[] = [
  {
    id: 'stmik',
    institution: 'STMIK-AMIK Bandung',
    degree: 'Digital Multimedia',
    period: '2012 - 2015',
  },
  {
    id: 'sman',
    institution: 'SMA Negeri 3 Garut',
    degree: 'Ilmu Pengetahuan',
    period: '2007 - 2010',
  }
]

// --- Pelatihan ---
export const trainings = [
  'Pelatihan UX bersama komunitas UX.ID bandung (03 Mei 2018)',
  'Pelatihan character building bandung (21 Maret 2015)',
  'POP (Juni 2025)'
]

// --- Keahlian (Dengan persentase untuk indikator melingkar) ---
export const skills: SkillGroup[] = [
    {
      category: 'tools',
      label: 'Desain & UI/UX',
      items: [
        { name: 'Figma UI design', percentage: 95, icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M8 2.001c-1.656 0-3 1.343-3 3 0 1.655 1.344 3 3 3h4v-6H8zm8 0c-1.656 0-3 1.343-3 3 0 1.655 1.344 3 3 3s3-1.345 3-3c0-1.657-1.344-3-3-3zm-8 6c-1.656 0-3 1.343-3 3s1.344 3 3 3h4v-6H8zm8 0c-1.656 0-3 1.343-3 3s1.344 3 3 3c1.656 0 3-1.343 3-3s-1.344-3-3-3zm-8 6c-1.656 0-3 1.344-3 3 0 1.657 1.344 3 3 3s3-1.343 3-3v-3H8z"/></svg>' },
        { name: 'UX research', percentage: 90, icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="14" cy="18" r="3"></circle><path d="M16.1 19.9 22 24"></path><path d="M11 12H7a5 5 0 0 0-5 5v2h6"></path><circle cx="9" cy="7" r="4"></circle></svg>' },
        { name: 'Adobe Illustrator', percentage: 85, icon: '<svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>Adobe Illustrator</title><path d="M10.53 10.73c-.1-.31-.19-.61-.29-.92-.1-.31-.19-.6-.27-.89-.08-.28-.15-.54-.22-.78h-.02c-.09.43-.2.86-.34 1.29-.15.48-.3.98-.46 1.48-.14.51-.29.98-.44 1.4h2.54c-.06-.211-.14-.46-.23-.721-.09-.269-.18-.559-.27-.859zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zM14.7 16.83h-2.091c-.069.01-.139-.04-.159-.11l-.82-2.38H7.91l-.76 2.35c-.02.09-.1.15-.19.141H5.08c-.11 0-.14-.061-.11-.18L8.19 7.38c.03-.1.06-.21.1-.33.04-.21.06-.43.06-.65-.01-.05.03-.1.08-.11h2.59c.08 0 .12.03.13.08l3.65 10.3c.03.109 0 .16-.1.16zm3.4-.15c0 .11-.039.16-.129.16H16.01c-.1 0-.15-.061-.15-.16v-7.7c0-.1.041-.14.131-.14h1.98c.09 0 .129.05.129.14v7.7zm-.209-9.03c-.231.24-.571.37-.911.35-.33.01-.65-.12-.891-.35-.23-.25-.35-.58-.34-.92-.01-.34.12-.66.359-.89.242-.23.562-.35.892-.35.391 0 .689.12.91.35.22.24.34.56.33.89.01.34-.11.67-.349.92z"/></svg>' },
        { name: 'Photoshop', percentage: 80, icon: '<svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>Adobe Photoshop</title><path d="M9.85 8.42c-.37-.15-.77-.21-1.18-.2-.26 0-.49 0-.68.01-.2-.01-.34 0-.41.01v3.36c.14.01.27.02.39.02h.53c.39 0 .78-.06 1.15-.18.32-.09.6-.28.82-.53.21-.25.31-.59.31-1.03.01-.31-.07-.62-.23-.89-.17-.26-.41-.46-.7-.57zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.899c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-7.391 11.65c-.399.56-.959.98-1.609 1.22-.68.25-1.43.34-2.25.34-.24 0-.4 0-.5-.01s-.24-.01-.43-.01v3.209c.01.07-.04.131-.11.141H5.52c-.08 0-.12-.041-.12-.131V6.42c0-.07.03-.11.1-.11.17 0 .33 0 .56-.01.24-.01.49-.01.76-.02s.56-.01.87-.02c.31-.01.61-.01.91-.01.82 0 1.5.1 2.06.31.5.17.96.45 1.34.82.32.32.57.71.73 1.14.149.42.229.85.229 1.3.001.86-.199 1.57-.6 2.13zm7.091 3.89c-.28.4-.671.709-1.12.891-.49.209-1.09.318-1.811.318-.459 0-.91-.039-1.359-.129-.35-.061-.7-.17-1.02-.32-.07-.039-.121-.109-.111-.189v-1.74c0-.029.011-.07.041-.09.029-.02.06-.01.09.01.39.23.8.391 1.24.49.379.1.779.15 1.18.15.38 0 .65-.051.83-.141.16-.07.27-.24.27-.42 0-.141-.08-.27-.24-.4-.16-.129-.489-.279-.979-.471-.51-.18-.979-.42-1.42-.719-.31-.221-.569-.51-.761-.85-.159-.32-.239-.67-.229-1.021 0-.43.12-.84.341-1.21.25-.4.619-.72 1.049-.92.469-.239 1.059-.349 1.769-.349.41 0 .83.03 1.24.09.3.04.59.12.86.23.039.01.08.05.1.09.01.04.02.08.02.12v1.63c0 .04-.02.08-.05.1-.09.02-.14.02-.18 0-.3-.16-.62-.27-.96-.34-.37-.08-.74-.13-1.12-.13-.2-.01-.41.02-.601.07-.129.03-.24.1-.31.2-.05.08-.08.18-.08.27s.04.18.101.26c.09.11.209.2.34.27.229.12.47.23.709.33.541.18 1.061.43 1.541.73.33.209.6.49.789.83.16.318.24.67.23 1.029.011.471-.129.94-.389 1.331z"/></svg>' },
      ],
    },
    {
      category: 'tools',
      label: 'Engineering & Data',
      items: [
        { name: 'Python', percentage: 85, icon: '<svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>Python</title><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/></svg>' },
        { name: 'Javascript (Vue)', percentage: 85, icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M14.73 4L12 8.73 9.27 4H3l9 15.6L21 4z"/><path d="M14.73 4L12 8.73 9.27 4H7.36L12 12.04 16.64 4z"/></svg>' },
        { name: 'Mysql & Postgresql', percentage: 80, icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>' },
        { name: 'Arcgis', percentage: 90, icon: '<svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>ArcGIS</title><path d="M12 0a.84923.84923 0 0 0-.33766.07031l-8.5183 3.69444C2.1458 4.19776 1.4997 5.1816 1.4997 6.2697v13.2521l10.16264 4.40783c.21517.09333.46015.09407.67532.00073l8.5183-3.6959c.99824-.43301 1.64434-1.41685 1.64434-2.50495V4.47814L12.33766.06958C12.23007.02291 12.11516-.00005 12 0Zm0 4.83705c4.16294 0 7.53757 3.3746 7.53757 7.53757S16.163 19.91218 12 19.91218c-4.163 0-7.53757-3.37462-7.53757-7.53756S7.837 4.83705 12 4.83705zm-.3501 1.38871c-.89685-.02267-2.32742.2409-3.74645 1.6143.34958.55454.64544.97782.49 1.41801-.23127.65503-.5139.51378-1.07083.99466-.39567.34169.2067 1.01292-.31275 1.30595-.51945.29306-1.21315.6636-.94925 1.17557.2639.51196 1.4691.83013 1.95929 1.07522.49018.2451.92812.70605.6072 1.2371-.31403.51948-.53713 1.13083-.60134 1.60917 1.0549.94423 2.44706 1.51909 3.97423 1.51909 3.2928 0 5.81772-2.71048 5.96208-6.00017.04062-.92531-.93924-.93972-1.53447-.93972 0 0 .34061.92356.01831 1.43632-.3223.51278-.84968.76166-.83498 1.37699.01464.61533-.93743 1.5967-1.2598 1.9483-.32223.35163-.9228.74718-1.12796-.0586-.2051-.80579-.12596-1.47799.1084-2.04938.23442-.57136-.2174-.74707-.92068-.76174-.7032-.01463-1.0798-.10795-1.18656-1.19315-.08787-.89369 1.2429-1.84356 1.81426-1.84356.33406 0 1.45485.21963 1.50737-.34058.08056-.8593-.8204-1.04164-1.03934-1.60185C13.2877 7.58747 14.98596 6.60707 12 6.24993c-.10475-.01253-.22199-.02093-.3501-.02417z"/></svg>' },
      ],
    },
    {
      category: 'soft',
      label: 'Manajemen & Administrasi',
      items: [
        { name: 'Microsoft Excel & Word', percentage: 95, icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>' },
        { name: 'Google Sheets', percentage: 95, icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>' },
        { name: 'Leadership & Team Management', percentage: 85, icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>' },
        { name: 'ERP Odoo', percentage: 85, icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>' },
      ],
    },
    {
      category: 'tools',
      label: 'AI Engineering',
      items: [
        { name: 'Antigravity', percentage: 90, icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>' },
        { name: 'Codex', percentage: 85, icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>' },
        { name: '9 Router', percentage: 85, icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="15" width="18" height="5" rx="1" ry="1"></rect><path d="M7 15V8a5 5 0 0 1 10 0v7"></path><path d="M12 15V8"></path><line x1="8" y1="18" x2="8.01" y2="18"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="16" y1="18" x2="16.01" y2="18"></line></svg>' },
        { name: 'Hermes Agent', percentage: 80, icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="16" y1="16" x2="16.01" y2="16"></line></svg>' },
        { name: 'Ollama', percentage: 85, icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>' },
        { name: 'Claude Code', percentage: 90, icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path></svg>' },
      ],
    }
  ]

const base = import.meta.env.BASE_URL

// --- Portfolio Projects ---
export const portfolioProjects: Project[] = [
  { id: 'fms', title: 'FMS', category: 'App Desktop', image: `${base}porto/app desktop FMS.png`, description: 'Aplikasi desktop Fleet Management System untuk pemantauan dan pengelolaan armada kendaraan operasional secara real-time.' },
  { id: 'mon_bus', title: 'Monitoring Bus', category: 'App Desktop', image: `${base}porto/app desktop monitoring_bus.png`, description: 'Sistem pemantauan rute dan operasional armada bus untuk memastikan efisiensi jadwal.' },
  { id: 'mon_dt', title: 'Monitoring DT', category: 'App Desktop', image: `${base}porto/app desktop monitoring_DT.png`, description: 'Aplikasi pemantauan Dump Truck (DT) di area pertambangan untuk menganalisa produktivitas dan status unit.' },
  { id: 'mon_fueltruck', title: 'Monitoring Fueltruck', category: 'App Desktop', image: `${base}porto/app desktop monitoring_fueltruck.png`, description: 'Dashboard interaktif untuk memonitor distribusi bahan bakar dan pergerakan fuel truck di lapangan.' },
  { id: 'app_optrack', title: 'Optrack', category: 'App Desktop', image: `${base}porto/app desktop optrack.png`, description: 'Aplikasi pelacakan operasional harian untuk menganalisis aktivitas unit secara komprehensif.' },
  { id: 'geofence', title: 'Geofence', category: 'Geofence', image: `${base}porto/geofence.png`, description: 'Implementasi pemetaan batas wilayah virtual (geofencing) untuk membatasi dan melacak pergerakan unit.' },
  { id: 'gis_cbtg', title: 'GD CBTG U', category: 'GIS', image: `${base}porto/GIS GD CBTG U.jpg`, description: 'Pemetaan jaringan distribusi listrik menggunakan ArcGIS untuk validasi dan manajemen aset secara spasial.' },
  { id: 'pbi_comm', title: 'Monitoring Commissioning', category: 'PBI', image: `${base}porto/PBI monitoring commissioning.png`, description: 'Dashboard analitik interaktif menggunakan Power BI untuk memantau status penyelesaian fase commissioning.' },
  { id: 'web_optrack', title: 'Dashboard Optrack', category: 'Web', image: `${base}porto/web Dashboard Optrack.png`, link: 'https://planning.mge.co.id/optrack/#overview', description: 'Platform berbasis web untuk visualisasi data pelacakan unit dan laporan performa real-time.' },
  { id: 'web_produksi', title: 'Produksi', category: 'Web', image: `${base}porto/web produksi.png`, link: 'https://planning.mge.co.id/produksi/', description: 'Sistem manajemen data web-based untuk mengawasi target, realisasi, dan evaluasi hasil produksi harian.' },
  { id: 'web_weather', title: 'Weather', category: 'Web', image: `${base}porto/web weather.png`, link: 'https://weather.mge.co.id/', description: 'Aplikasi pemantauan cuaca terintegrasi untuk membantu perencanaan operasional lapangan berdasarkan kondisi cuaca terkini.' },
  { id: 'web_ms_rental', title: 'Daily MS Rental', category: 'Web', image: `${base}porto/web ms_rental.png`, link: 'https://planning.mge.co.id/ms-kontrak/unit-board', description: 'Sistem pengaturan unit running per-shift secara real-time untuk memantau kondisi unit operasional yang delay serta breakdown.' },
  { id: 'app_input_ms', title: 'Input Daily MS', category: 'App Desktop', image: `${base}porto/app desktop input_ms.png`, description: 'Sistem inputan aplikasi desktop dari dispatch untuk pendataan aktivitas Daily MS sebelum masuk ke dashboard utama.' },
  ]

// --- Navigation Items ---
export const navItems = [
  { id: 'beranda', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'tentang', label: 'About me' },
  { id: 'experience', label: 'Experience' },
  { id: 'keahlian', label: 'Skills' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'kontak', label: 'Contact me' },
] as const
