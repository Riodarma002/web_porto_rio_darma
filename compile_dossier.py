import os
from PIL import Image
import pymupdf

def create_full_dossier():
    output_path = 'dokumenrio/BERKAS_LAMARAN_LENGKAP_RIO_DARMA_FREDIKA.pdf'
    
    # Target doc
    doc_out = pymupdf.open()
    
    # 1. Add CV ATS (Pages 1 & 2)
    cv_doc = pymupdf.open('dokumenrio/CV_ATS_Rio_Darma_Fredika.pdf')
    for page in cv_doc:
        doc_out.insert_pdf(cv_doc, from_page=page.number, to_page=page.number)
    print(f"Added CV ATS: {len(cv_doc)} pages")
    
    # A4 dimensions in points: 595.28 x 841.89
    A4_W = 595.28
    A4_H = 841.89
    
    def add_image_page(img_path, rotate_270=False, is_landscape=False):
        im = Image.open(img_path)
        if rotate_270:
            im = im.transpose(Image.Transpose.ROTATE_270)
            
        temp_path = 'dokumenrio/_temp_page.jpg'
        im.save(temp_path, 'JPEG', quality=95)
        
        # New page
        if is_landscape:
            page = doc_out.new_page(width=A4_H, height=A4_W)
            # Rect
            rect = pymupdf.Rect(20, 20, A4_H - 20, A4_W - 20)
        else:
            page = doc_out.new_page(width=A4_W, height=A4_H)
            rect = pymupdf.Rect(20, 20, A4_W - 20, A4_H - 20)
            
        page.insert_image(rect, filename=temp_path, keep_proportion=True)
        if os.path.exists(temp_path):
            os.remove(temp_path)

    def add_pdf_page(pdf_path):
        sub_doc = pymupdf.open(pdf_path)
        for sub_page in sub_doc:
            # Create standard A4 page
            page = doc_out.new_page(width=A4_W, height=A4_H)
            # show pdf page inside rect
            rect = pymupdf.Rect(20, 20, A4_W - 20, A4_H - 20)
            page.show_pdf_page(rect, sub_doc, sub_page.number)

    # 2. Lampiran 1: Ijazah S1 (Page_02 rotated to landscape)
    add_image_page('dokumenrio/1 CV RESUME PORTOFOLIO RIO TANPA SURAT LAMARAN FINAL__Page_02.jpg', rotate_270=True, is_landscape=True)
    print("Added Lampiran 1: Ijazah S1 STMIK AMIKBANDUNG")

    # 3. Lampiran 2: Transkrip Nilai (Page_03 portrait)
    add_image_page('dokumenrio/1 CV RESUME PORTOFOLIO RIO TANPA SURAT LAMARAN FINAL__Page_03.jpg', rotate_270=False, is_landscape=False)
    print("Added Lampiran 2: Transkrip Nilai Akademik")

    # 4. Lampiran 3: Sertifikat BNSP POP
    add_pdf_page('dokumenrio/bnsp.pdf')
    print("Added Lampiran 3: Sertifikat BNSP POP")

    # 5. Lampiran 4: Paklaring PT Quadran Inovasi
    add_pdf_page('dokumenrio/paklaring rio qdrnt.pdf')
    print("Added Lampiran 4: Paklaring PT Quadran Inovasi")

    # 6. Lampiran 5: Surat Pengalaman Kerja PT KA Properti (Page_05)
    add_image_page('dokumenrio/1 CV RESUME PORTOFOLIO RIO TANPA SURAT LAMARAN FINAL__Page_05.jpg', rotate_270=False, is_landscape=False)
    print("Added Lampiran 5: Surat Pengalaman Kerja PT KA Properti")

    # 7. Lampiran 6: Surat Referensi Kerja PT Infomedia Solusi Humanika / Telkom (Page_04)
    add_image_page('dokumenrio/1 CV RESUME PORTOFOLIO RIO TANPA SURAT LAMARAN FINAL__Page_04.jpg', rotate_270=False, is_landscape=False)
    print("Added Lampiran 6: Surat Referensi Kerja PT Infomedia / Telkom")

    doc_out.save(output_path)
    print(f"Successfully created full dossier: {output_path} with {len(doc_out)} pages!")

if __name__ == '__main__':
    create_full_dossier()
