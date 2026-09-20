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
    period: 'Desember 2023 â€“ Sekarang',
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
    period: 'September 2021 â€“ 2023',
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
    period: 'September 2019 â€“ Mei 2021',
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
    period: 'Juni 2019 â€“ Desember 2019',
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
    period: 'Januari 2019 â€“ Agustus 2019',
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
    period: 'April 2017 â€“ Desember 2018',
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
    period: '2012 â€“ 2015',
  },
  {
    id: 'sman',
    institution: 'SMA Negeri 3 Garut',
    degree: 'Ilmu Pengetahuan',
    period: '2007 â€“ 2010',
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
        { name: 'Adobe Illustrator', percentage: 85, icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M4 2v20h16V2H4zm6.84 15.68H9.36l-1-2.92H5l-.92 2.92H2.6l3.52-9.68h1.64l3.08 9.68zm5.28 0h-1.52v-7.2h1.52v7.2zm-6.28-4.2l-1.04-2.88-1.04 2.88h2.08zm4.84-4.8a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/></svg>' },
        { name: 'Photoshop', percentage: 80, icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M4 2v20h16V2H4zm5.12 15.68H7.6V8.68h3.36c1.68 0 2.8.96 2.8 2.4 0 1.56-1.16 2.52-2.96 2.52H7.6v4.08zm8 0h-1.44v-4.16c0-1.16-.76-1.8-1.88-1.8-1.16 0-1.92.72-1.92 1.96v4h-1.44v-7.2h1.44v.92c.4-.64 1.12-1 1.92-1 1.76 0 2.88 1.16 2.88 3v4.28zM7.6 12.36h1.72c.84 0 1.4-.48 1.4-1.28 0-.8-.52-1.2-1.32-1.2H7.6v2.48z"/></svg>' },
      ],
    },
    {
      category: 'tools',
      label: 'Engineering & Data',
      items: [
        { name: 'Python', percentage: 85, icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2c-5.5 0-5.5 2.4-5.5 2.4V7h5.5v1.2H4.8s-2.8 0-2.8 3.8 2.8 3.8 2.8 3.8h1.2V14c0 3.3 5.5 3.3 5.5 3.3s5.5 0 5.5-2.4V13h-5.5v-1.2h7.2s2.8 0 2.8-3.8-2.8-3.8-2.8-3.8h-1.2V6c0-3.3-5.5-3.3-5.5-3.3zM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 13a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/></svg>' },
        { name: 'Javascript (Vue)', percentage: 85, icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M14.73 4L12 8.73 9.27 4H3l9 15.6L21 4z"/><path d="M14.73 4L12 8.73 9.27 4H7.36L12 12.04 16.64 4z"/></svg>' },
        { name: 'Mysql & Postgresql', percentage: 80, icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>' },
        { name: 'Arcgis', percentage: 90, icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/><path d="M2 12h20"/><path d="M12 2a15 15 0 0 1 0 20"/><path d="M12 2a15 15 0 0 0 0 20"/></svg>' },
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

  // --- Portfolio Projects ---
export const portfolioProjects: Project[] = [
  { id: 'fms', title: 'FMS', category: 'App Desktop', image: '/porto/app desktop FMS.png', description: 'Aplikasi desktop Fleet Management System untuk pemantauan dan pengelolaan armada kendaraan operasional secara real-time.' },
  { id: 'mon_bus', title: 'Monitoring Bus', category: 'App Desktop', image: '/porto/app desktop monitoring_bus.png', description: 'Sistem pemantauan rute dan operasional armada bus untuk memastikan efisiensi jadwal.' },
  { id: 'mon_dt', title: 'Monitoring DT', category: 'App Desktop', image: '/porto/app desktop monitoring_DT.png', description: 'Aplikasi pemantauan Dump Truck (DT) di area pertambangan untuk menganalisa produktivitas dan status unit.' },
  { id: 'mon_fueltruck', title: 'Monitoring Fueltruck', category: 'App Desktop', image: '/porto/app desktop monitoring_fueltruck.png', description: 'Dashboard interaktif untuk memonitor distribusi bahan bakar dan pergerakan fuel truck di lapangan.' },
  { id: 'app_optrack', title: 'Optrack', category: 'App Desktop', image: '/porto/app desktop optrack.png', description: 'Aplikasi pelacakan operasional harian untuk menganalisis aktivitas unit secara komprehensif.' },
  { id: 'geofence', title: 'Geofence', category: 'Geofence', image: '/porto/geofence.png', description: 'Implementasi pemetaan batas wilayah virtual (geofencing) untuk membatasi dan melacak pergerakan unit.' },
  { id: 'gis_cbtg', title: 'GD CBTG U', category: 'GIS', image: '/porto/GIS GD CBTG U.jpg', description: 'Pemetaan jaringan distribusi listrik menggunakan ArcGIS untuk validasi dan manajemen aset secara spasial.' },
  { id: 'pbi_comm', title: 'Monitoring Commissioning', category: 'PBI', image: '/porto/PBI monitoring commissioning.png', description: 'Dashboard analitik interaktif menggunakan Power BI untuk memantau status penyelesaian fase commissioning.' },
  { id: 'web_optrack', title: 'Dashboard Optrack', category: 'Web', image: '/porto/web Dashboard Optrack.png', link: 'https://planning.mge.co.id/optrack/#overview', description: 'Platform berbasis web untuk visualisasi data pelacakan unit dan laporan performa real-time.' },
  { id: 'web_produksi', title: 'Produksi', category: 'Web', image: '/porto/web produksi.png', link: 'https://planning.mge.co.id/produksi/', description: 'Sistem manajemen data web-based untuk mengawasi target, realisasi, dan evaluasi hasil produksi harian.' },
  { id: 'web_weather', title: 'Weather', category: 'Web', image: '/porto/web weather.png', link: 'https://weather.mge.co.id/', description: 'Aplikasi pemantauan cuaca terintegrasi untuk membantu perencanaan operasional lapangan berdasarkan kondisi cuaca terkini.' },
    { id: 'web_ms_rental', title: 'Daily MS Rental', category: 'Web', image: '/porto/web ms_rental.png', link: 'https://planning.mge.co.id/ms-kontrak/unit-board', description: 'Sistem pengaturan unit running per-shift secara real-time untuk memantau kondisi unit operasional yang delay serta breakdown.' },
      { id: 'app_input_ms', title: 'Input Daily MS', category: 'App Desktop', image: '/porto/app desktop input_ms.png', description: 'Sistem inputan aplikasi desktop dari dispatch untuk pendataan aktivitas Daily MS sebelum masuk ke dashboard utama.' },
  ]

// --- Navigation Items ---
export const navItems = [
  { id: 'beranda', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'tentang', label: 'About me' },
  { id: 'experience', label: 'Experience' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'kontak', label: 'Contact me' },
] as const
