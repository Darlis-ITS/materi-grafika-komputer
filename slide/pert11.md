# Grafika Komputer — Pertemuan 11
## Blender Lighting, Camera & Rendering

---

# Slide 00 — Cover

EF234504 — Grafika Komputer

## Pertemuan 11

# Blender Lighting, Camera & Rendering

**Laboratorium GIGA**

**Departemen Teknik Informatika - ITS**

---

# Slide 01 — Topik Pembahasan

- Point, Sun, Spot, dan Area Light
- Three-Point Lighting
- Camera Composition
- Camera Angle
- Focal Length
- Depth of Field
- HDRI
- EEVEE
- Cycles
- Sampling dan Denoising
- Praktikum: Product-Style Lighting & Rendering

---

# Slide 02 — Capaian Pembelajaran

Mahasiswa mampu:

1. membedakan karakter empat jenis Light utama,
2. mengatur intensitas, arah, warna, dan softness,
3. menyusun three-point lighting,
4. membuat camera composition yang baik,
5. memilih camera angle dan focal length,
6. menggunakan depth of field,
7. menggunakan HDRI,
8. membandingkan EEVEE dan Cycles,
9. memahami sampling, noise, dan denoising,
10. menghasilkan final render yang baik.

---

# Slide 03 — Posisi Materi

Pertemuan 9:

```text
3D Modeling
```

Pertemuan 10:

```text
UV + Material + Texture
```

Pertemuan 11:

```text
Lighting + Camera + Rendering
```

Material dari P10 digunakan sebagai input, tidak dijelaskan ulang.

---

# Slide 04 — Dari Asset ke Final Image

```text
3D Asset
+
Material
+
Lighting
+
Camera
+
Render Engine
=
Final Image
```

Fokus P11 adalah bagaimana asset yang sudah jadi dipresentasikan secara visual.

---

# Slide 05 — Peran Lighting

Lighting membantu menunjukkan:

- bentuk,
- depth,
- silhouette,
- surface response,
- focal point,
- mood.

Model yang baik dapat terlihat datar jika lighting tidak dirancang dengan baik.

---

# Slide 06 — Peran Camera

Camera menentukan:

- sudut pandang,
- framing,
- perspektif,
- focal length,
- depth of field,
- visual hierarchy.

Camera adalah alat komunikasi visual.

---

# Slide 07 — Jenis Light di Blender

Empat light utama:

```text
Point
Sun
Spot
Area
```

Setiap jenis memiliki karakter distribusi cahaya dan shadow yang berbeda.

---

# Slide 08 — Point Light

Point Light memancarkan cahaya:

```text
ke segala arah
```

dari satu posisi.

Analogi:

- lampu bohlam,
- lampu meja,
- lampu kecil.

---

# Slide 09 — Parameter Point Light

Parameter utama:

- Position
- Power
- Color
- Radius

```text
Radius kecil → shadow lebih tajam
Radius besar → shadow lebih lembut
```

Cocok untuk pencahayaan lokal.

---

# Slide 10 — Sun Light

Sun merepresentasikan sumber cahaya sangat jauh.

Karakter:

```text
parallel rays
```

Yang paling penting adalah:

```text
rotation
```

karena menentukan arah cahaya.

---

# Slide 11 — Sun Angle dan Penggunaan

```text
Angle kecil → shadow tajam
Angle besar → shadow lembut
```

Sun cocok untuk:

- outdoor,
- daylight,
- landscape,
- architectural visualization.

---

# Slide 12 — Spot Light

Spot Light memancarkan cahaya berbentuk cone.

Cocok untuk:

- spotlight,
- lampu sorot,
- senter,
- stage lighting,
- dramatic focus.

---

# Slide 13 — Spot Size dan Spot Blend

```text
Spot Size
→ lebar cone

Spot Blend
→ softness edge cone
```

Blend tinggi menghasilkan transisi cahaya yang lebih lembut.

---

# Slide 14 — Area Light

Area Light memancarkan cahaya dari suatu permukaan.

Bentuk umum:

- Square
- Rectangle
- Disk
- Ellipse

Karakter utama:

```text
soft lighting + soft shadow
```

---

# Slide 15 — Area Light Size

```text
Area kecil
→ highlight/shadow lebih tajam

Area besar
→ lighting lebih lembut
```

Area Light sangat cocok untuk studio dan product render.

---

# Slide 16 — Perbandingan Empat Light

| Light | Karakter |
|---|---|
| Point | menyebar dari satu titik |
| Sun | sinar sejajar |
| Spot | cone terarah |
| Area | sumber luas dan lembut |

Pilih berdasarkan tujuan visual.

---

# Slide 17 — Kualitas Lighting

Lighting yang baik mempertimbangkan:

```text
Direction
+
Intensity
+
Color
+
Softness
+
Contrast
```

Bukan sekadar membuat scene menjadi terang.

---

# Slide 18 — Three-Point Lighting

Three-point lighting menggunakan:

```text
Key Light
Fill Light
Rim / Back Light
```

Tujuan:

- membentuk subject,
- mengontrol contrast,
- memisahkan subject dari background.

---

# Slide 19 — Key Light

Key Light adalah cahaya utama.

Fungsi:

- menentukan arah lighting,
- membentuk highlight utama,
- menghasilkan shadow utama,
- menentukan mood dasar.

---

# Slide 20 — Fill Light

Fill Light mengurangi shadow terlalu gelap.

Umumnya:

```text
Fill < Key
```

Tujuannya mempertahankan detail tanpa menghilangkan depth.

---

# Slide 21 — Rim / Back Light

Rim Light ditempatkan dari belakang atau samping belakang.

Fungsi:

- memperjelas silhouette,
- memisahkan subject dari background,
- menambah edge highlight.

---

# Slide 22 — Setup Three-Point Lighting

```text
              Rim
               ↓

Fill  →      Object      ←  Key

              ↑
            Camera
```

Untuk product render, Area Light sering efektif sebagai Key dan Fill.

---

# Slide 23 — Camera Composition

Composition adalah cara menempatkan subject di dalam frame.

Tujuan:

- menarik perhatian,
- menjaga keseimbangan,
- mengatur negative space,
- membentuk visual hierarchy.

---

# Slide 24 — Framing

Perhatikan:

- object placement,
- negative space,
- foreground/background,
- crop,
- ruang pandang.

Object utama harus tetap menjadi fokus yang jelas.

---

# Slide 25 — Rule of Thirds

Frame dibagi menjadi:

```text
3 × 3
```

Subject dapat ditempatkan dekat garis atau titik perpotongan.

Ini adalah panduan, bukan aturan mutlak.

---

# Slide 26 — Center Composition

Cocok untuk:

- product render,
- object simetris,
- technical visualization.

Karakter:

```text
stabil
formal
jelas
```

---

# Slide 27 — Camera Angle

Sudut camera memengaruhi persepsi.

```text
Eye Level
Low Angle
High Angle
Top View
```

Low angle dapat terasa dominan; high angle lebih informatif terhadap bentuk atas.

---

# Slide 28 — Focal Length

Focal length memengaruhi:

- field of view,
- perspective distortion,
- compression.

Di Blender umumnya dinyatakan dalam:

```text
millimeter
```

---

# Slide 29 — Wide Focal Length

Contoh:

```text
18–24 mm
```

Karakter:

- FOV luas,
- perspektif kuat,
- foreground lebih besar,
- cocok untuk environment.

---

# Slide 30 — Focal Length Menengah dan Panjang

```text
35–50 mm
→ perspektif relatif natural

85 mm atau lebih
→ FOV sempit
→ perspective compression
```

Rentang menengah–panjang sering cocok untuk product-style render.

---

# Slide 31 — Focal Length dan Camera Position

Jika focal length diubah:

```text
camera position
```

biasanya juga perlu disesuaikan.

Tujuannya membandingkan karakter perspektif, bukan hanya ukuran object dalam frame.

---

# Slide 32 — Depth of Field

Depth of Field menentukan seberapa luas area yang terlihat fokus.

```text
Focus Plane
↓
Area tajam

Di depan / belakang
↓
Blur
```

DOF membantu mengarahkan perhatian.

---

# Slide 33 — Focus Distance dan F-Stop

Focus dapat ditentukan dengan jarak atau focus object.

```text
F-stop kecil
→ DOF dangkal
→ blur kuat

F-stop besar
→ area fokus lebih luas
```

Jangan membuat detail penting terlalu blur.

---

# Slide 34 — HDRI

HDRI adalah:

```text
High Dynamic Range Image
```

Dapat digunakan sebagai:

- environment,
- background,
- sumber pencahayaan.

---

# Slide 35 — Image-Based Lighting

HDRI dapat memberikan:

```text
Environment
+
Reflection
+
Lighting
```

Penggunaan environment image sebagai sumber pencahayaan disebut:

# Image-Based Lighting

---

# Slide 36 — Rotasi HDRI

HDRI dapat diputar untuk mengubah:

```text
arah datangnya lighting
```

tanpa mengganti file HDRI.

Berguna untuk mencari posisi highlight terbaik.

---

# Slide 37 — HDRI + Additional Light

Workflow umum:

```text
HDRI
+
Key Light
+
Rim Light
```

HDRI memberi environment; lampu tambahan memberi kontrol artistik.

---

# Slide 38 — Render Engine

Pada materi ini fokus pada:

```text
EEVEE
dan
Cycles
```

Keduanya menghasilkan image, tetapi menggunakan pendekatan rendering berbeda.

---

# Slide 39 — EEVEE

EEVEE adalah render engine real-time/rasterization-oriented.

Kelebihan:

- cepat,
- viewport responsif,
- cocok preview,
- iterasi cepat,
- workflow interaktif.

---

# Slide 40 — Cycles

Cycles adalah path-tracing renderer.

Kelebihan:

- lighting lebih fisikal,
- reflection lebih akurat,
- indirect lighting,
- realism lebih tinggi.

Konsekuensi: render lebih berat.

---

# Slide 41 — Sampling

Pada Cycles:

```text
Samples ↑
→ Noise ↓
→ Render Time ↑
```

Jumlah sample perlu disesuaikan dengan target kualitas dan waktu render.

---

# Slide 42 — Noise dan Denoising

Noise biasanya lebih terlihat ketika:

- sample rendah,
- scene gelap,
- lighting sulit.

Denoising membantu mengurangi noise dan mempercepat workflow final render.

---

# Slide 43 — EEVEE vs Cycles

| EEVEE | Cycles |
|---|---|
| cepat | lebih berat |
| real-time oriented | path tracing |
| cocok preview | cocok realism |
| banyak approximation | lighting lebih fisikal |

---

# Slide 44 — Memilih Render Engine

Gunakan **EEVEE** ketika:

- iterasi cepat,
- preview,
- waktu terbatas.

Gunakan **Cycles** ketika:

- realism penting,
- reflection penting,
- indirect lighting penting,
- waktu render tersedia.

---

# Slide 45 — Rendering Workflow

```text
Asset
↓
Lighting
↓
Camera
↓
HDRI
↓
Render Engine
↓
Test Render
↓
Adjust
↓
Final Render
```

Rendering adalah proses iteratif.

---

# Slide 46 — Test Render dan Iterasi

Jangan langsung mengejar final render.

Gunakan test render untuk mengevaluasi:

- arah light,
- contrast,
- framing,
- focal length,
- DOF,
- noise,
- waktu render.

Lakukan adjustment bertahap.

---

# Slide 47 — Praktikum: Product-Style Lighting & Rendering

Gunakan asset hasil P9–P10.

Buat:

- three-point lighting,
- camera composition,
- eksperimen focal length,
- depth of field,
- HDRI,
- EEVEE render,
- Cycles render.

Tidak perlu membuat ulang model atau material.

---

# Slide 48 — Rencana Praktikum

```text
1. Load asset P9–P10
2. Ground / background
3. Three-point lighting
4. Camera composition
5. Focal length experiment
6. Depth of field
7. HDRI
8. EEVEE render
9. Cycles render
10. Comparison
11. Final hero render
```

Detail teknis disediakan pada modul praktikum.

---

# Slide 49 — Ringkasan Pertemuan

Konsep utama:

- Point, Sun, Spot, Area
- Three-Point Lighting
- Camera Composition
- Focal Length
- Depth of Field
- HDRI
- EEVEE
- Cycles
- Sampling
- Denoising

Benang merah:

```text
Asset → Lighting → Camera → HDRI → Render Engine → Final Image
```

---

# Slide 50 — TERIMA KASIH

# TERIMA KASIH

### Materi Selanjutnya

## Unity 3D & Real-Time Rendering Pipeline
