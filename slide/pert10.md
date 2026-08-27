# Grafika Komputer — Pertemuan 10
## Blender Materials, UV & Texturing

---

# Slide 00 — Cover

EF234504 — Grafika Komputer

## Pertemuan 10

# Blender Materials, UV & Texturing

**Laboratorium GIGA**

**Departemen Teknik Informatika - ITS**

---

# Slide 01 — Topik Pembahasan

- Material di Blender
- Principled BSDF
- Texture
- UV Mapping
- Seam
- Unwrap
- UV Island
- UV Distortion
- Checker Texture
- Texel Density
- Base Color
- Roughness
- Metallic
- Normal Map
- Emission
- PBR Workflow
- Praktikum: UV & PBR Material

---

# Slide 02 — Capaian Pembelajaran

Mahasiswa mampu:

1. menjelaskan fungsi material pada asset 3D,
2. menggunakan Principled BSDF,
3. menjelaskan konsep texture dan texture map,
4. melakukan UV Mapping,
5. menentukan seam,
6. melakukan unwrap,
7. mengatur UV island,
8. mengevaluasi distortion dan texel density,
9. menggunakan Base Color, Roughness, Metallic, Normal, dan Emission,
10. mengintegrasikan texture map ke material PBR.

---

# Slide 03 — Posisi Materi

Pertemuan 9:

```text
3D Modeling
```

Pertemuan 10:

```text
UV Mapping
+
Material
+
Texture
+
PBR
```

Pertemuan 11:

```text
Lighting
+
Camera
+
Rendering
```

Model dari P9 digunakan sebagai input pada P10.

---

# Slide 04 — Dari Geometry ke Surface Appearance

Model 3D mendefinisikan:

```text
Shape
```

Agar object memiliki karakter visual:

```text
Geometry
+
Material
+
Texture
```

Pertemuan ini fokus pada:

# Surface Appearance

---

# Slide 05 — Apa Itu Material?

Material adalah kumpulan parameter yang menentukan bagaimana permukaan object bereaksi terhadap cahaya.

Material dapat mengontrol:

- warna,
- kekasaran,
- sifat metalik,
- normal,
- emission,
- transparency,
- texture.

---

# Slide 06 — Material di Blender

Blender menggunakan sistem material berbasis node.

Node utama:

```text
Principled BSDF
```

Node ini menyediakan workflow PBR yang praktis dan terintegrasi.

---

# Slide 07 — Principled BSDF

Parameter yang sering digunakan:

- Base Color
- Metallic
- Roughness
- IOR
- Alpha
- Normal
- Emission

Fokus P10:

```text
Base Color
Roughness
Metallic
Normal
Emission
```

---

# Slide 08 — Apa Itu Texture?

Texture adalah data image atau pola yang digunakan untuk memengaruhi surface.

Texture dapat mengontrol:

- warna,
- roughness,
- metallic,
- normal,
- emission,
- mask.

---

# Slide 09 — Texture Bukan Hanya Warna

Satu material PBR dapat menggunakan beberapa texture map:

```text
Base Color Map
Roughness Map
Metallic Map
Normal Map
Emission Map
```

Masing-masing menyimpan informasi berbeda.

---

# Slide 10 — Masalah 2D ke 3D

Image texture bersifat:

```text
2D
```

Model bersifat:

```text
3D
```

Kita membutuhkan cara untuk memetakan texture 2D ke surface 3D.

Solusinya:

# UV Mapping

---

# Slide 11 — Apa Itu UV Mapping?

UV Mapping adalah proses memetakan surface model 3D ke bidang 2D.

Koordinat texture disebut:

```text
U
V
```

bukan X dan Y agar tidak tertukar dengan koordinat ruang 3D.

---

# Slide 12 — Konsep UV

```text
3D Model
   ↓
Unwrap
   ↓
2D UV Layout
   ↓
Image Texture
```

Setiap bagian surface memiliki posisi pada UV space.

---

# Slide 13 — UV Editor

UV Editor digunakan untuk melihat dan mengatur:

- UV vertex,
- UV edge,
- UV face,
- UV island.

Area ini menjadi workspace utama saat melakukan unwrap.

---

# Slide 14 — UV Space

UV umumnya berada dalam rentang:

```text
U: 0 → 1
V: 0 → 1
```

Area ini merepresentasikan keseluruhan texture image.

---

# Slide 15 — Hubungan Face dan UV

Setiap face pada mesh memiliki representasi pada UV space.

```text
Face 3D
   ↓
UV Face
   ↓
Bagian Texture
```

Posisi UV menentukan bagian image yang muncul pada surface.

---

# Slide 16 — Apa Itu Seam?

Seam adalah edge yang ditandai sebagai garis potong untuk membuka surface mesh.

Analogi:

> memotong kulit object agar dapat dibentangkan menjadi bentuk 2D.

---

# Slide 17 — Mengapa Seam Penting?

Tanpa seam yang baik:

- UV dapat terdistorsi,
- island sulit dikontrol,
- texture stretched,
- layout menjadi tidak efisien.

Seam menentukan bagaimana model dibuka.

---

# Slide 18 — Strategi Menempatkan Seam

Seam yang baik biasanya:

- ditempatkan pada area kurang terlihat,
- mengikuti struktur object,
- meminimalkan distortion,
- menghasilkan island yang mudah diatur.

Tujuan:

> membuat unwrap mudah dibaca dan efisien.

---

# Slide 19 — Contoh Seam pada Cylinder

Untuk cylinder:

```text
1 seam vertikal
+
seam pada top/bottom
```

Hasil:

- side menjadi strip,
- top menjadi island,
- bottom menjadi island.

---

# Slide 20 — Apa Itu Unwrap?

Unwrap adalah proses membuka surface mesh ke UV space.

Perintah umum:

```text
U
→ Unwrap
```

Blender menggunakan seam sebagai panduan proses unwrap.

---

# Slide 21 — Hasil Unwrap

Unwrap menghasilkan:

```text
UV Islands
```

UV Island adalah kelompok face yang tetap terhubung di UV space.

---

# Slide 22 — Apa Itu UV Island?

Satu object dapat memiliki:

```text
1 island
atau
banyak island
```

Jumlah dan bentuk island dipengaruhi oleh seam dan struktur mesh.

---

# Slide 23 — UV Island dan Texture

Setiap UV island mengambil area tertentu dari image.

```text
UV Island
   ↓
Area pada Texture
```

Posisi, rotation, dan scale island menentukan detail yang terlihat.

---

# Slide 24 — UV Distortion

Distortion terjadi saat bentuk UV terlalu berbeda dari bentuk surface.

Gejala:

- checker memanjang,
- checker gepeng,
- texture tampak stretched,
- detail tidak konsisten.

---

# Slide 25 — Checker Texture

Checker texture digunakan untuk mengevaluasi UV.

UV yang baik menghasilkan:

```text
checker relatif seragam
```

Jika checker stretched:

> seam atau layout UV perlu diperbaiki.

---

# Slide 26 — Texel Density

Texel density menunjukkan konsistensi jumlah pixel texture per area surface.

```text
Island kecil
→ detail rendah

Island besar
→ detail tinggi
```

Skala island harus dipertimbangkan secara konsisten.

---

# Slide 27 — Konsistensi Texel Density

Dalam satu asset, bagian-bagian sebaiknya memiliki detail texture yang relatif konsisten.

Pengecualian:

> area penting secara visual dapat diberi texel density lebih tinggi.

---

# Slide 28 — Pack UV Islands

Setelah unwrap:

```text
UV Islands
↓
Scale
↓
Rotate
↓
Pack
```

Tujuan:

> menggunakan area texture secara efisien.

---

# Slide 29 — Margin antar-Island

UV island membutuhkan margin.

Tujuan:

- mencegah texture bleeding,
- memberi ruang saat filtering,
- menjaga hasil tetap bersih.

Margin terlalu kecil dapat menyebabkan warna dari island lain masuk ke edge.

---

# Slide 30 — Overlapping UV

UV overlap dapat digunakan jika beberapa bagian memakai texture yang sama.

Namun untuk unique texture:

```text
hindari overlap
```

Gunakan overlap hanya jika memang disengaja.

---

# Slide 31 — Smart UV Project

Blender menyediakan:

```text
Smart UV Project
```

Kelebihan:
- cepat.

Kekurangan:
- island lebih banyak,
- kontrol lebih rendah,
- tidak selalu efisien.

---

# Slide 32 — Manual Unwrap vs Smart UV

| Manual Unwrap | Smart UV |
|---|---|
| kontrol tinggi | cepat |
| layout lebih terencana | island banyak |
| cocok asset final | cocok prototype |
| butuh waktu | hasil otomatis |

---

# Slide 33 — Image Texture Node

Untuk menggunakan image:

```text
Image Texture
→ Principled BSDF
```

Node Image Texture menjadi sumber data texture pada material.

---

# Slide 34 — Base Color

Base Color menentukan warna dasar surface.

Bisa berasal dari:

```text
warna solid
atau
image texture
```

Contoh:

- kayu,
- batu,
- cat,
- kain,
- kulit.

---

# Slide 35 — Base Color Map

Base Color Map menyimpan informasi warna utama.

Biasanya:

```text
Image Texture
→ Base Color
```

Base Color adalah texture visual utama pada banyak material.

---

# Slide 36 — Roughness

Roughness menentukan seberapa kasar permukaan.

```text
Roughness 0
→ halus / reflektif

Roughness 1
→ kasar / diffuse
```

Roughness memengaruhi bentuk highlight.

---

# Slide 37 — Roughness Map

Roughness Map biasanya grayscale.

Secara umum:

```text
gelap
→ lebih halus

terang
→ lebih kasar
```

Texture ini dibaca sebagai data, bukan warna visual.

---

# Slide 38 — Metallic

Metallic menentukan sifat metalik surface.

```text
0 → non-metal
1 → metal
```

Contoh non-metal:
- plastic,
- wood,
- stone.

Contoh metal:
- steel,
- aluminum,
- copper.

---

# Slide 39 — Metallic Map

Metallic Map biasanya grayscale.

```text
hitam
→ non-metal

putih
→ metal
```

Berguna saat satu material memiliki area metal dan non-metal.

---

# Slide 40 — PBR Workflow

PBR:

# Physically Based Rendering

Workflow sederhana:

```text
Base Color
+
Roughness
+
Metallic
+
Normal
+
Lighting
=
PBR Surface
```

PBR membantu material digunakan secara konsisten pada Blender, Three.js, Unity, dan renderer lain.

---

# Slide 41 — Normal pada Surface

Normal menunjukkan arah permukaan.

Normal memengaruhi:

- diffuse response,
- highlight,
- detail shading.

Normal Map dapat memodifikasi arah shading tanpa menambah geometry nyata.

---

# Slide 42 — Normal Map

Normal Map memberi ilusi detail permukaan.

Contoh:

- goresan,
- panel,
- batu kasar,
- emboss.

Normal Map:

```text
mengubah shading
bukan silhouette geometry
```

---

# Slide 43 — Normal Map Node

Workflow umum:

```text
Image Texture
↓
Normal Map Node
↓
Principled BSDF — Normal
```

Normal Map harus diproses melalui node yang sesuai.

---

# Slide 44 — Color Space Texture

Secara umum:

```text
Base Color → sRGB
Roughness  → Non-Color
Metallic   → Non-Color
Normal     → Non-Color
```

Texture data tidak boleh diperlakukan seperti warna visual.

---

# Slide 45 — Emission

Emission membuat surface terlihat memancarkan cahaya sendiri.

Contoh:

- screen,
- neon,
- LED,
- robot eye,
- sci-fi panel.

Parameter utama:

```text
Emission Color
Emission Strength
```

---

# Slide 46 — Emission Map

Emission Map menentukan bagian surface yang menyala.

Contoh:

```text
robot body
→ dark metal

robot eyes
→ emissive
```

Map ini memungkinkan kontrol lokal terhadap area emission.

---

# Slide 47 — Praktikum: UV & PBR Material

Mahasiswa menggunakan asset hasil Pertemuan 9 lalu:

- menandai seam,
- melakukan unwrap,
- mengatur UV island,
- menggunakan checker,
- membuat material PBR,
- menggunakan texture map.

Target:

> asset siap digunakan pada tahap lighting dan rendering.

---

# Slide 48 — Rencana Praktikum

```text
1. Persiapan model
2. Apply Scale
3. Mark Seam
4. Unwrap
5. Checker Test
6. UV Island Adjustment
7. Base Color
8. Roughness
9. Metallic
10. Normal Map
11. Emission
12. Final Material Review
```

Detail teknis ada pada modul praktikum.

---

# Slide 49 — Ringkasan Pertemuan

Konsep utama:

- Material
- Principled BSDF
- Texture
- UV Mapping
- Seam
- Unwrap
- UV Island
- Texel Density
- Base Color
- Roughness
- Metallic
- Normal Map
- Emission
- PBR

Benang merah:

```text
3D Model
↓
UV Mapping
↓
Texture Maps
↓
PBR Material
↓
Surface Appearance
```

---

# Slide 50 — TERIMA KASIH

# TERIMA KASIH

### Materi Selanjutnya

## Blender Lighting, Camera & Rendering
