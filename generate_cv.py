import os
import sys
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Image as RLImage, Table, TableStyle, HRFlowable, KeepTogether, PageBreak
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.pdfgen import canvas

class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super(NumberedCanvas, self).__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_footer(num_pages)
            super(NumberedCanvas, self).showPage()
        super(NumberedCanvas, self).save()

    def draw_footer(self, page_count):
        self.saveState()
        self.setFont("Helvetica", 7.5)
        self.setFillColor(colors.HexColor("#64748B"))
        
        # Left footer
        self.drawString(36, 18, "Rio Darma Fredika, S.Kom. | CV ATS")
        
        # Center link
        self.drawCentredString(A4[0] / 2.0, 18, "Portofolio: riodarma002.github.io/web_porto_rio_darma/")
        
        # Right page number
        self.drawRightString(A4[0] - 36, 18, f"Hal. {self._pageNumber} dari {page_count}")
        
        # Subtle top rule for footer
        self.setStrokeColor(colors.HexColor("#CBD5E1"))
        self.setLineWidth(0.5)
        self.line(36, 28, A4[0] - 36, 28)
        self.restoreState()

def build_cv(output_pdf_path, photo_path):
    doc = SimpleDocTemplate(
        output_pdf_path,
        pagesize=A4,
        leftMargin=36,
        rightMargin=36,
        topMargin=30,
        bottomMargin=36
    )
    
    styles = getSampleStyleSheet()
    
    # Custom Palette - ATS Professional
    c_primary = colors.HexColor("#0F172A")    # Deep slate / Charcoal
    c_accent = colors.HexColor("#0284C7")     # Engineering Tech Blue
    c_body = colors.HexColor("#1E293B")       # Dark charcoal
    c_muted = colors.HexColor("#475569")      # Medium slate
    
    name_style = ParagraphStyle(
        'CVName',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=22,
        textColor=c_primary,
        spaceAfter=2
    )
    
    role_style = ParagraphStyle(
        'CVRole',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=13,
        textColor=c_accent,
        spaceAfter=5
    )
    
    contact_style = ParagraphStyle(
        'CVContact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.2,
        leading=11.5,
        textColor=c_muted
    )
    
    section_style = ParagraphStyle(
        'CVSectionHeader',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=13,
        textColor=c_primary,
        spaceBefore=7,
        spaceAfter=2,
        keepWithNext=True
    )
    
    body_style = ParagraphStyle(
        'CVBody',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.2,
        leading=11.5,
        textColor=c_body,
        alignment=4 # Justified
    )
    
    job_title_style = ParagraphStyle(
        'CVJobTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=12,
        textColor=c_primary,
        keepWithNext=True
    )
    
    date_style = ParagraphStyle(
        'CVDate',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=8.2,
        leading=12,
        textColor=c_muted,
        alignment=2 # Right
    )
    
    bullet_style = ParagraphStyle(
        'CVBullet',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.2,
        leading=11.2,
        textColor=c_body,
        leftIndent=11,
        firstLineIndent=-9,
        spaceAfter=2
    )
    
    skill_cat_style = ParagraphStyle(
        'CVSkillCategory',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.2,
        leading=11.5,
        textColor=c_primary
    )
    
    skill_val_style = ParagraphStyle(
        'CVSkillValue',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.2,
        leading=11.5,
        textColor=c_body
    )

    story = []
    
    # ----------------------------------------------------
    # HEADER: Name, Contact, Links & Photo
    # ----------------------------------------------------
    contact_text = """
    <b>Lokasi:</b> Garut, Jawa Barat, Indonesia &nbsp;|&nbsp; <b>Email:</b> <a href="mailto:riodarma789@gmail.com"><font color="#0284C7"><u>riodarma789@gmail.com</u></font></a><br/>
    <b>Telepon / WhatsApp:</b> +62 812-1423-6050 &nbsp;/&nbsp; +62 821-1669-8032<br/>
    <b>Website Portofolio:</b> <a href="https://riodarma002.github.io/web_porto_rio_darma/"><font color="#0284C7"><u>https://riodarma002.github.io/web_porto_rio_darma/</u></font></a><br/>
    <b>LinkedIn:</b> <a href="https://www.linkedin.com/in/rio-darma-fredika-296b4277"><font color="#0284C7"><u>linkedin.com/in/rio-darma-fredika-296b4277</u></font></a><br/>
    <b>GitHub:</b> <a href="https://github.com/Riodarma002"><font color="#0284C7"><u>github.com/Riodarma002</u></font></a> &nbsp;|&nbsp; <b>Google Drive:</b> <a href="https://drive.google.com/drive/folders/1k4P6b37Kgh7yJ0cuBZB62rQASZ9kA5oE?usp=sharing"><font color="#0284C7"><u>Berkas Portofolio Drive</u></font></a>
    """
    
    header_left = [
        Paragraph("RIO DARMA FREDIKA, S.Kom.", name_style),
        Paragraph("SOFTWARE &amp; DATA ENGINEER &nbsp;|&nbsp; PENGAWAS OPERASIONAL PERTAMA (POP BNSP)", role_style),
        Paragraph(contact_text, contact_style)
    ]
    
    # Photo sizing
    photo_w = 70
    photo_h = 93.8
    if os.path.exists(photo_path):
        photo_img = RLImage(photo_path, width=photo_w, height=photo_h)
    else:
        photo_img = Paragraph("", contact_style)
        
    header_table = Table(
        [[header_left, photo_img]],
        colWidths=[443, 80]
    )
    header_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('ALIGN', (1,0), (1,0), 'RIGHT'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
    ]))
    
    story.append(header_table)
    story.append(HRFlowable(width="100%", thickness=1.2, color=c_primary, spaceBefore=4, spaceAfter=5))
    
    # ----------------------------------------------------
    # RINGKASAN PROFESIONAL
    # ----------------------------------------------------
    story.append(Paragraph("RINGKASAN PROFESIONAL", section_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=c_accent, spaceBefore=1, spaceAfter=4))
    
    summary_text = (
        "<b>Software &amp; Data Engineer</b> dengan pengalaman profesional lebih dari <b>7 tahun</b> dalam "
        "merancang aplikasi desktop dan platform web operasional, arsitektur data terpadu, otomatisasi pipeline ETL, "
        "serta sistem informasi geospasial (GIS). Berpengalaman memimpin inisiatif digitalisasi operasional armada di "
        "<b>PT. Mega Global Energy</b> melalui perancangan Fleet Management System (FMS), pelacakan GPS armada terintegrasi, "
        "modul geofencing, serta visualisasi data analitik berbasis Python, Vue.js, dan Power BI. "
        "Memiliki rekam jejak enterprise dalam pemodelan data geospasial kelistrikan ArcGIS untuk sinkronisasi aset ke "
        "<b>IBM MAXIMO PT PLN (Persero)</b> bersama PT. Quadran Inovasi Karya Bersama, riset antarmuka pengguna (UX Research) di "
        "PT. Telkom Indonesia, serta mengantongi sertifikasi kompetensi resmi <b>Pengawas Operasional Pertama (POP)</b> dari BNSP. "
        "Terbukti andal dalam menghubungkan kebutuhan operasional lapangan dengan arsitektur teknologi yang efisien, terukur, dan akurat."
    )
    story.append(Paragraph(summary_text, body_style))
    story.append(Spacer(1, 4))
    
    # ----------------------------------------------------
    # KOMPETENSI INTI & KEAHLIAN TEKNIS
    # ----------------------------------------------------
    story.append(Paragraph("KOMPETENSI INTI &amp; KEAHLIAN TEKNIS", section_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=c_accent, spaceBefore=1, spaceAfter=4))
    
    skills_data = [
        [
            Paragraph("<b>Software &amp; Web Engineering:</b>", skill_cat_style),
            Paragraph("Python, JavaScript, Vue.js (Vue 3, Vite, Pinia), HTML5, CSS3, RESTful APIs, Desktop App Development (Tkinter, PyQt), Git &amp; GitHub Actions CI/CD.", skill_val_style)
        ],
        [
            Paragraph("<b>Data Engineering &amp; GIS:</b>", skill_cat_style),
            Paragraph("ArcGIS (Spatial Network, Digitasi Jaringan Listrik &amp; Kontur), MySQL, PostgreSQL, ETL Automation Pipeline, Data Modeling, IBM MAXIMO Enterprise Integration, Microsoft Power BI.", skill_val_style)
        ],
        [
            Paragraph("<b>AI Tooling &amp; Otomasi:</b>", skill_cat_style),
            Paragraph("Antigravity Agentic Workflows, Codex, Ollama (Local LLM), Claude Code, Hermes Agent, 9 Router, Prompt &amp; Pipeline Engineering.", skill_val_style)
        ],
        [
            Paragraph("<b>UI/UX &amp; Desain Produk:</b>", skill_cat_style),
            Paragraph("Figma UI/UX Design, Heuristic Evaluation, User Flow &amp; Information Architecture, Usability Testing, Adobe Photoshop, Adobe Illustrator.", skill_val_style)
        ],
        [
            Paragraph("<b>Operasional &amp; Manajemen:</b>", skill_cat_style),
            Paragraph("Sertifikasi BNSP POP (Pengawas Operasional Pertama), ERP Odoo, Advanced Microsoft Excel (Macro &amp; Formulas), Google Sheets, Fleet Management Systems (FMS), Tata Kelola Kontrak Proyek &amp; LPJ.", skill_val_style)
        ],
    ]
    
    skills_table = Table(skills_data, colWidths=[145, 378])
    skills_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 1.2),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1.2),
    ]))
    story.append(skills_table)
    story.append(Spacer(1, 4))
    
    # ----------------------------------------------------
    # PENGALAMAN KERJA (PAGE 1: Mega Global Energy & Quadran)
    # ----------------------------------------------------
    story.append(Paragraph("PENGALAMAN KERJA", section_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=c_accent, spaceBefore=1, spaceAfter=5))
    
    def job_header(title, company, period, loc=""):
        comp_str = f"<b>{company}</b>" + (f" &nbsp;|&nbsp; <i>{loc}</i>" if loc else "")
        return Table(
            [[
                Paragraph(f"<b>{title}</b><br/>{comp_str}", job_title_style),
                Paragraph(f"<b>{period}</b>", date_style)
            ]],
            colWidths=[383, 140],
            style=[
                ('VALIGN', (0,0), (-1,-1), 'TOP'),
                ('LEFTPADDING', (0,0), (-1,-1), 0),
                ('RIGHTPADDING', (0,0), (-1,-1), 0),
                ('TOPPADDING', (0,0), (-1,-1), 1.5),
                ('BOTTOMPADDING', (0,0), (-1,-1), 1.5),
            ]
        )

    # 1. PT MEGA GLOBAL ENERGY
    story.append(job_header(
        "Software &amp; Data Engineer (Foreman Planning)",
        "PT. MEGA GLOBAL ENERGY",
        "Desember 2023 – Sekarang",
        "PT. GAM &amp; PT. INDEXIM / Site Operation"
    ))
    exp1_bullets = [
        "Merancang, membangun, dan memelihara aplikasi desktop serta platform web operasional internal (Fleet Management System/FMS, Monitoring Bus, Monitoring Dump Truck, dan Monitoring Fueltruck) untuk pemantauan unit secara real-time.",
        "Mengembangkan arsitektur pelacakan GPS armada terintegrasi dan modul geofencing virtual guna membatasi serta melacak mobilitas unit operasional tambang dengan presisi tinggi.",
        "Membangun dashboard Business Intelligence interaktif menggunakan Power BI, Python, dan Vue.js untuk analisis capaian target produksi harian, status armada, serta efisiensi jam kerja operasional.",
        "Mengembangkan platform web Daily MS Rental (<font color='#0284C7'>planning.mge.co.id</font>) dan aplikasi dispatch untuk mengawasi kondisi unit running per-shift, kendala delay, dan breakdown armada.",
        "Melakukan pemrosesan dan analisis data harian konsumsi bahan bakar (fuel consumption) dan produktivitas fleet untuk mendukung pengambilan keputusan strategis manajemen operasional."
    ]
    for b in exp1_bullets:
        story.append(Paragraph(f"• &nbsp; {b}", bullet_style))
    story.append(Spacer(1, 4))

    # 2. PT QUADRAN INOVASI KARYA BERSAMA
    story.append(job_header(
        "Data Engineer &amp; Drafter GIS Jaringan Listrik",
        "PT. QUADRAN INOVASI KARYA BERSAMA",
        "September 2021 – Oktober 2023",
        "Bandung, Jawa Barat (Mitra PT PLN)"
    ))
    exp2_bullets = [
        "Mengolah, memverifikasi, dan memodelkan data survei koordinat lapangan ke dalam sistem informasi geografis ArcGIS untuk pemetaan jaringan distribusi kelistrikan berskala enterprise.",
        "Memetakan dan mendigitasi komponen jaringan kelistrikan tegangan menengah dan rendah (Gardu Induk, SUTM, JTR, Gardu Distribusi CBTG U, Switch) bermitra langsung dengan PT PLN (Persero).",
        "Mengembangkan skrip otomasi pipeline konversi data spasial (AR text format) menjadi data tabular terstruktur (Excel/CSV) untuk sinkronisasi aset ke sistem enterprise IBM MAXIMO PLN.",
        "Melakukan validasi dan verifikasi teknis kesesuaian gambar as-built dengan konstruksi fisik aktual di lapangan guna menjamin integritas database aset kelistrikan."
    ]
    for b in exp2_bullets:
        story.append(Paragraph(f"• &nbsp; {b}", bullet_style))
    story.append(Spacer(1, 4))

    # ----------------------------------------------------
    # PAGE BREAK - Clean transition to Page 2
    # ----------------------------------------------------
    story.append(PageBreak())

    # Header on Page 2
    story.append(Paragraph("PENGALAMAN KERJA (LANJUTAN)", section_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=c_accent, spaceBefore=1, spaceAfter=5))

    # 3. PT KA PROPERTI MANAJEMEN
    story.append(job_header(
        "Administrasi Umum &amp; Pengelola LPJ",
        "PT. KA PROPERTI MANAJEMEN",
        "September 2019 – Mei 2021",
        "Proyek Reaktivasi Cibatu – Garut"
    ))
    exp3_bullets = [
        "Mengelola tertib administrasi berkas legal konstruksi proyek reaktivasi jalur kereta api, meliputi SPK, BAP, BAST basborong, dan surat perjanjian kontrak pegawai.",
        "Menyusun Laporan Pertanggungjawaban (LPJ) keuangan dan verifikasi progres fisik pekerjaan borongan sesuai jadwal dan standar audit PT KA Properti Manajemen.",
        "Memastikan kelancaran alur verifikasi berkas dan kepatuhan administratif antara vendor kontraktor pelaksana, konsultan, dan manajemen pusat."
    ]
    for b in exp3_bullets:
        story.append(Paragraph(f"• &nbsp; {b}", bullet_style))
    story.append(Spacer(1, 4))

    # 4. PT SUMBER DAYA ARGA (SDA)
    story.append(job_header(
        "Admin &amp; Pengawas Alat Berat",
        "PT. SUMBER DAYA ARGA (SDA)",
        "Juni 2019 – Desember 2019",
        "Area Proyek Lapangan"
    ))
    exp4_bullets = [
        "Bertanggung jawab atas pengawasan operasional harian, keselamatan kerja, dan progres pergerakan unit alat berat di area proyek konstruksi.",
        "Mengelola time sheet kerja operator, log konsumsi bahan bakar solar, serta rekapitulasi penggajian berbasis jam kerja operasional unit.",
        "Menyusun laporan harian kondisi mesin dan jadwal pemeliharaan berkala guna meminimalkan downtime alat di lapangan."
    ]
    for b in exp4_bullets:
        story.append(Paragraph(f"• &nbsp; {b}", bullet_style))
    story.append(Spacer(1, 4))

    # 5. PT MACO GROUP
    story.append(job_header(
        "Staff Research &amp; Development (R&amp;D)",
        "PT. MACO GROUP",
        "Januari 2019 – Agustus 2019",
        "Bandung, Jawa Barat"
    ))
    exp5_bullets = [
        "Merancang prototipe antarmuka UI/UX website e-commerce Catenzo dan kanal digital produk Maco Group berdasarkan prinsip user experience dan kemudahan navigasi.",
        "Membuat konsep visual desain produk kreatif, materi promosi digital, dan visual publikasi media sosial."
    ]
    for b in exp5_bullets:
        story.append(Paragraph(f"• &nbsp; {b}", bullet_style))
    story.append(Spacer(1, 4))

    # 6. PT TELKOM INDONESIA / PT INFOMEDIA SOLUSI HUMANIKA
    story.append(job_header(
        "UX Researcher &amp; Graphic Designer / CRM Service Desk",
        "PT. TELKOM INDONESIA / PT. INFOMEDIA SOLUSI HUMANIKA",
        "April 2017 – Desember 2018",
        "Bandung, Jawa Barat"
    ))
    exp6_bullets = [
        "Menganalisis antarmuka produk digital (web &amp; mobile) internal Telkom dengan metode heuristic evaluation dan usability testing.",
        "Menyusun alur pengguna (user flow), arsitektur informasi (IA), dan wireframe prototipe untuk kolaborasi bersama tim developer.",
        "Mengolah hasil masukan pengujian pengguna (user feedback) menjadi dokumen rekomendasi perbaikan desain antarmuka.",
        "Menangani tiket eskalasi dan layanan CRM pada unit HCC DDS ISH Bandung dengan standar penyelesaian tepat waktu."
    ]
    for b in exp6_bullets:
        story.append(Paragraph(f"• &nbsp; {b}", bullet_style))
    story.append(Spacer(1, 5))

    # ----------------------------------------------------
    # PENDIDIKAN FORMAL
    # ----------------------------------------------------
    story.append(Paragraph("PENDIDIKAN FORMAL", section_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=c_accent, spaceBefore=1, spaceAfter=4))
    
    edu_table_data = [
        [
            Paragraph("<b>STMIK \"AMIKBANDUNG\"</b> — Sarjana Komputer (S.Kom.), Teknik Informatika<br/>"
                      "<font color='#475569'>Status: Terakreditasi B (BAN-PT) &nbsp;|&nbsp; IPK: 2.79 / 4.00 (145 SKS)<br/>"
                      "<i>Judul Skripsi: Perancangan dan Implementasi Aplikasi Guitar Guide Sebagai Media Pembelajaran Untuk Grade Pertama Kursus Gitar Berbasis Mobile</i></font>", body_style),
            Paragraph("<b>2011 – 2015</b><br/><font color='#64748B'>Bandung, Jawa Barat</font>", date_style)
        ],
        [
            Paragraph("<b>SMA NEGERI 3 GARUT</b> — Jurusan Ilmu Pengetahuan Alam (IPA)", body_style),
            Paragraph("<b>2007 – 2010</b><br/><font color='#64748B'>Garut, Jawa Barat</font>", date_style)
        ]
    ]
    edu_table = Table(edu_table_data, colWidths=[393, 130])
    edu_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 1.5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
    ]))
    story.append(edu_table)
    story.append(Spacer(1, 5))

    # ----------------------------------------------------
    # SERTIFIKASI & PELATIHAN RESMI
    # ----------------------------------------------------
    story.append(Paragraph("SERTIFIKASI RESMI &amp; PELATIHAN PROFESIONAL", section_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=c_accent, spaceBefore=1, spaceAfter=4))
    
    cert_bullets = [
        "<b>Sertifikasi Kompetensi BNSP — Pengawas Operasional Pertama (POP)</b><br/>"
        "LSP Energi Mandiri &nbsp;|&nbsp; No. Sertifikat: <b>05100 3121 4 0035925 2025</b> &nbsp;|&nbsp; Masa Berlaku: <b>Mei 2025 – 26 Mei 2030</b>",
        
        "<b>Pelatihan Profesional UI/UX &amp; Usability Research</b> — Komunitas UX.ID Bandung (03 Mei 2018)",
        "<b>Pelatihan Character Building &amp; Kepemimpinan</b> — STMIK AMIKBANDUNG (21 Maret 2015)"
    ]
    for c in cert_bullets:
        story.append(Paragraph(f"• &nbsp; {c}", bullet_style))
    story.append(Spacer(1, 5))

    # ----------------------------------------------------
    # PORTOFOLIO PROYEK & TAUTAN KARYA
    # ----------------------------------------------------
    story.append(Paragraph("PORTOFOLIO TERPILIH &amp; VERIFIKASI KARYA", section_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=c_accent, spaceBefore=1, spaceAfter=4))
    
    porto_intro = (
        "Portofolio lengkap, dokumentasi sistem, dan visualisasi aplikasi dapat diakses secara interaktif pada website portofolio: "
        "<b><a href='https://riodarma002.github.io/web_porto_rio_darma/'><font color='#0284C7'><u>https://riodarma002.github.io/web_porto_rio_darma/</u></font></a></b>"
    )
    story.append(Paragraph(porto_intro, body_style))
    story.append(Spacer(1, 2))
    
    porto_items = [
        "<b>Fleet Management System (FMS) &amp; Geofencing:</b> Solusi desktop dan virtual geofence untuk pelacakan koordinat dan efisiensi mobilitas armada secara real-time.",
        "<b>Dashboard Web Optrack &amp; Produksi:</b> Sistem visualisasi performa armada dan evaluasi target produksi tambang (<font color='#0284C7'>planning.mge.co.id</font>).",
        "<b>Digitalisasi Spasial ArcGIS &amp; MAXIMO PLN:</b> Pemodelan jaringan distribusi Gardu CBTG U, SUTM, JTR, dan konversi data tabular ke enterprise MAXIMO.",
        "<b>Dashboard Business Intelligence Power BI:</b> Pemantauan unit commissioning, distribusi logistik bahan bakar Fueltruck, dan efisiensi operasional."
    ]
    for p in porto_items:
        story.append(Paragraph(f"• &nbsp; {p}", bullet_style))
    story.append(Spacer(1, 5))

    # ----------------------------------------------------
    # REFERENSI PROFESIONAL
    # ----------------------------------------------------
    story.append(Paragraph("REFERENSI PROFESIONAL", section_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=c_accent, spaceBefore=1, spaceAfter=4))
    
    ref_text = (
        "<b>Gilan Khusnul</b> — Drafter GIS, PT. Quadran Inovasi Karya Bersama &nbsp;|&nbsp; "
        "Telepon: +62 859-4670-6123 &nbsp;|&nbsp; Email: <a href='mailto:gilankhusnul022@gmail.com'><font color='#0284C7'><u>gilankhusnul022@gmail.com</u></font></a>"
    )
    story.append(Paragraph(ref_text, body_style))

    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"Successfully generated: {output_pdf_path}")

if __name__ == '__main__':
    photo = 'dokumenrio/foto_rio_formal.jpg'
    out_pdf = 'dokumenrio/CV_ATS_Rio_Darma_Fredika.pdf'
    build_cv(out_pdf, photo)
