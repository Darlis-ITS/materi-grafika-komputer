# Grafika Komputer — Pertemuan 12
## Unity 3D & Real-Time Rendering Pipeline

---

# Slide 00 — Cover

EF234504 — Grafika Komputer

## Pertemuan 12

# Unity 3D & Real-Time Rendering Pipeline

**Laboratorium GIGA**

**Departemen Teknik Informatika - ITS**

---

# Slide 01 — Topik Pembahasan

Pada pertemuan ini kita membahas:

1. **Unity 3D dan konsep Game Engine**
2. **Unity Interface dan struktur project**
3. **GameObject, Component, dan Transform**
4. **Scene, Camera, Mesh, Material, dan Shader**
5. **Pipeline Blender → Unity**
6. **Real-Time Rendering Pipeline**
7. **Universal Render Pipeline (URP)**
8. **Praktikum: Import Asset Blender dan Membangun Scene URP**

---

# Slide 02 — Capaian Pembelajaran Pertemuan

Setelah mengikuti pertemuan ini, mahasiswa diharapkan mampu:

- menjelaskan fungsi Unity sebagai real-time 3D engine,
- memahami struktur dasar object pada Unity,
- menggunakan GameObject dan Component,
- mengatur Transform dan hierarchy,
- mengimpor asset dari Blender dengan benar,
- menjelaskan tahapan real-time rendering pada Unity,
- memahami posisi URP dalam arsitektur rendering Unity,
- membangun scene 3D sederhana menggunakan Unity URP.

---

# Slide 03 — Posisi Pertemuan 12 dalam Semester

```text
P9
Blender Modeling
   ↓
P10
UV + Texturing
   ↓
P11
Lighting + Camera + Rendering
   ↓
P12
UNITY 3D + URP
   ↓
P13
Lighting + Material + Post Processing
   ↓
P14
Shader Graph
   ↓
P15
VFX + Optimization
   ↓
P16
UAS
```

Pertemuan 12 adalah titik perpindahan dari:

> **3D Content Creation** menuju **Real-Time 3D Graphics**.

---

# Slide 04 — Dari Blender ke Unity

Blender dan Unity memiliki peran berbeda.

## Blender

Digunakan untuk:

- modeling,
- UV mapping,
- texturing,
- material authoring,
- animation,
- offline rendering.

## Unity

Digunakan untuk:

- real-time rendering,
- interaction,
- camera control,
- physics,
- scripting,
- lighting real-time,
- shader,
- VFX,
- aplikasi interaktif.

---

# Slide 05 — Offline Rendering vs Real-Time Rendering

## Offline Rendering

Satu frame dapat dihitung selama:

```text
detik
menit
bahkan jam
```

Tujuan utama:

> kualitas visual maksimum.

## Real-Time Rendering

Frame harus dihasilkan terus-menerus.

Contoh target:

```text
30 FPS → ~33.3 ms/frame
60 FPS → ~16.7 ms/frame
120 FPS → ~8.3 ms/frame
```

Tujuan:

> kualitas visual yang baik **dengan waktu render sangat terbatas**.

---

# Slide 06 — Apa Itu Unity?

Unity adalah **real-time 3D engine** yang menyediakan sistem terintegrasi untuk:

- scene management,
- rendering,
- material dan shader,
- animation,
- physics,
- input,
- audio,
- UI,
- scripting,
- deployment ke berbagai platform.

Unity menyatukan berbagai subsistem sehingga developer dapat membangun aplikasi interaktif tanpa membuat graphics engine dari nol.

---

# Slide 07 — Unity Bukan Sekadar Editor

Unity dapat dipandang sebagai kombinasi:

```text
EDITOR
+
RUNTIME ENGINE
+
RENDERING SYSTEM
+
PHYSICS
+
SCRIPTING
+
ASSET PIPELINE
+
BUILD SYSTEM
```

Editor digunakan untuk menyusun project.

Runtime menjalankan scene dan logic saat aplikasi dijalankan.

---

# Slide 08 — Unity Interface

Panel utama Unity:

- **Scene View**
- **Game View**
- **Hierarchy**
- **Inspector**
- **Project**
- **Console**
- **Toolbar**

Setiap panel memiliki fungsi berbeda dalam workflow pengembangan.

---

# Slide 09 — Scene View

**Scene View** digunakan untuk:

- menyusun object,
- memindahkan object,
- memutar object,
- mengubah scale,
- menempatkan camera,
- mengatur environment.

Scene View adalah ruang kerja editor.

Scene View **bukan** hasil akhir yang dilihat player.

---

# Slide 10 — Game View

**Game View** menunjukkan output dari camera aktif.

Yang tampil pada Game View bergantung pada:

- Camera,
- aspect ratio,
- field of view,
- culling,
- lighting,
- material,
- render pipeline.

Game View lebih dekat dengan:

> apa yang akan dilihat pengguna saat aplikasi dijalankan.

---

# Slide 11 — Hierarchy

Hierarchy menunjukkan semua GameObject dalam Scene.

Contoh:

```text
Scene
├── Main Camera
├── Directional Light
├── Environment
│   ├── Ground
│   ├── Building
│   └── Props
└── PlayerPreview
```

Hierarchy juga merepresentasikan hubungan:

> **parent → child**.

---

# Slide 12 — Inspector

Inspector menampilkan:

- property GameObject,
- semua Component,
- nilai Transform,
- material,
- renderer,
- collider,
- script,
- dan setting lain.

Inspector adalah tempat utama untuk:

> melihat dan mengubah konfigurasi sebuah object.

---

# Slide 13 — Project Window

Project Window berisi asset project.

Contoh:

```text
Assets/
├── Models/
├── Materials/
├── Textures/
├── Prefabs/
├── Scenes/
├── Scripts/
└── Settings/
```

Struktur folder yang rapi penting untuk project jangka panjang.

---

# Slide 14 — Console

Console menampilkan:

- log,
- warning,
- error.

Contoh:

```text
Log
→ informasi normal

Warning
→ ada potensi masalah

Error
→ ada masalah yang harus diperbaiki
```

Biasakan memeriksa Console saat hasil scene tidak sesuai harapan.

---

# Slide 15 — Shortcut Navigasi Scene View

Shortcut mouse yang sering digunakan di Unity Scene View:

```text
Alt + Left Mouse Drag
→ Orbit

Middle Mouse Drag
→ Pan

Mouse Wheel
→ Zoom

Alt + Right Mouse Drag
→ Dolly / Zoom
```

Navigasi cepat sangat penting saat menyusun scene 3D.

---

# Slide 16 — Shortcut Focus dan View

Shortcut penting:

```text
F
→ Frame / Focus Selected

Q
→ Hand / View Tool
```

Pilih GameObject lalu tekan `F` untuk memusatkan Scene View pada object tersebut.

---

# Slide 17 — Shortcut Transform

Shortcut transform utama:

```text
W → Move
E → Rotate
R → Scale
T → Rect Tool
Y → Transform Tool
```

Gunakan handle X, Y, dan Z untuk membatasi transform pada axis tertentu.

---

# Slide 18 — Shortcut Object Editing

Shortcut yang sering dipakai:

```text
Ctrl + D → Duplicate
Delete   → Delete
F2       → Rename
Ctrl + Z → Undo
Ctrl + Y → Redo
Ctrl + S → Save
```

Shortcut ini mempercepat penyusunan environment dan props.

---

# Slide 19 — Shortcut Play Mode

Shortcut:

```text
Ctrl + P
→ Play / Stop
```

Gunakan Play Mode untuk menguji runtime.

Perhatikan bahwa perubahan tertentu selama Play Mode dapat kembali ke nilai sebelumnya setelah Stop.

---

# Slide 20 — GameObject

GameObject adalah **container dasar** object di Unity.

Contoh GameObject:

- Camera,
- Light,
- Cube,
- imported 3D model,
- empty object,
- character,
- environment prop.

GameObject sendiri belum menjelaskan perilaku visualnya.

Kemampuan GameObject datang dari:

> **Component**.

---

# Slide 21 — Component

Component menambahkan fungsi pada GameObject.

Contoh:

```text
GameObject
   │
   ├── Transform
   ├── Mesh Filter
   ├── Mesh Renderer
   ├── Collider
   ├── Light
   ├── Camera
   └── Script
```

Konsep penting Unity:

> **Composition over monolithic object**.

---

# Slide 22 — Transform

Setiap GameObject mempunyai **Transform**.

Transform menyimpan:

- Position,
- Rotation,
- Scale.

Secara konseptual:

```text
Model Space
    ↓
Transform
    ↓
World Space
```

Transform adalah implementasi praktis dari transformasi geometrik yang telah dipelajari.

---

# Slide 23 — Parent dan Child Transform

Transform child dipengaruhi parent.

```text
Car
├── Body
├── Wheel_FL
├── Wheel_FR
├── Wheel_RL
└── Wheel_RR
```

Jika `Car` berpindah:

> semua child ikut berpindah.

Konsep ini sama dengan:

> **hierarchical transformation / scene graph**.

---

# Slide 24 — Local vs World Transform

## Local Transform

Transform relatif terhadap parent.

## World Transform

Transform akhir dalam world space.

```text
Parent Transform
      ×
Child Local Transform
      ↓
Child World Transform
```

Ini penting saat bekerja dengan asset Blender yang memiliki hierarchy.

---

# Slide 25 — Prefab

Prefab adalah template reusable GameObject.

Contoh:

```text
LampPost Prefab
      ↓
Instance 1
Instance 2
Instance 3
Instance 4
```

Keuntungan:

- konsisten,
- mudah diperbanyak,
- perubahan dapat dikelola,
- cocok untuk props environment.

---

# Slide 26 — Mesh

Mesh adalah representasi geometri object.

Mesh tersusun dari:

- vertex,
- edge,
- triangle,
- normal,
- UV coordinate.

Dalam Unity, mesh biasanya dipakai oleh:

```text
Mesh Filter
+
Mesh Renderer
```

---

# Slide 27 — Mesh Filter

**Mesh Filter** menyimpan referensi ke mesh geometry.

Contoh:

```text
GameObject
   ↓
Mesh Filter
   ↓
Chair_Mesh
```

Mesh Filter menjawab:

> geometry apa yang digunakan object ini?

---

# Slide 28 — Mesh Renderer

**Mesh Renderer** bertugas mengirim mesh untuk dirender.

Renderer bekerja bersama:

- Material,
- Shader,
- lighting,
- Camera,
- Render Pipeline.

Secara sederhana:

```text
Mesh
+
Material
+
Renderer
=
Object dapat terlihat
```

---

# Slide 29 — Material, Shader, dan Texture dalam P12

Pada Pertemuan 12 cukup pahami hubungan komponen:

```text
Mesh
+
Material
+
Shader
+
Texture
+
Renderer
→
Visible Object
```

Detail lighting/material dibahas pada P13 dan custom shader dibahas pada P14.

---

# Slide 30 — Pipeline Asset Blender → Unity

Workflow umum:

```text
Modeling di Blender
       ↓
Apply Transform
       ↓
Periksa Scale
       ↓
Periksa Origin
       ↓
Periksa Normal
       ↓
UV Mapping
       ↓
Material / Texture
       ↓
Export
       ↓
Import ke Unity
       ↓
Material Setup
       ↓
Scene Assembly
```

---

# Slide 31 — Persiapan Asset di Blender

Sebelum export:

- hapus object yang tidak diperlukan,
- gunakan nama object yang jelas,
- cek geometry,
- cek normal,
- cek UV,
- cek material slot,
- cek ukuran object,
- cek pivot/origin.

Tujuannya:

> mengurangi masalah setelah asset masuk ke Unity.

---

# Slide 32 — Scale dan Unit

Masalah umum pipeline 3D:

> object terlalu besar atau terlalu kecil setelah import.

Gunakan ukuran yang konsisten sejak Blender.

Dalam Unity, aturan praktis yang umum:

```text
1 Unity unit
≈
1 meter
```

Untuk asset environment, konsistensi ukuran sangat penting.

---

# Slide 33 — Apply Transform di Blender

Sebelum export, periksa:

- Location,
- Rotation,
- Scale.

Scale object yang tidak diterapkan dapat menimbulkan masalah:

- ukuran aneh,
- collider tidak sesuai,
- hierarchy membingungkan,
- transform sulit dikelola.

Target umum sebelum export:

```text
Scale ≈ (1,1,1)
```

---

# Slide 34 — Origin dan Pivot

Origin di Blender berpengaruh pada titik manipulasi object setelah import.

Pivot yang buruk dapat menyebabkan:

- rotasi tidak natural,
- placement sulit,
- object berputar dari titik yang salah.

Contoh:

```text
Door
→ pivot di sisi engsel

Wheel
→ pivot di pusat roda
```

---

# Slide 35 — Normal

Normal menentukan arah permukaan.

Masalah normal dapat menyebabkan:

- permukaan terlihat gelap,
- lighting tidak benar,
- beberapa face tampak hilang.

Sebelum export:

> periksa apakah normal menghadap arah yang benar.

---

# Slide 36 — Pilihan Format Asset

Format yang umum:

- `.fbx`
- `.obj`
- `.blend` melalui workflow tertentu
- `.gltf / .glb` pada pipeline tertentu

Untuk praktikum dasar ini, gunakan workflow yang paling stabil dan mudah dikontrol:

> **FBX + texture files**.

---

# Slide 37 — Export FBX dari Blender

Hal yang perlu diperhatikan:

- hanya export object yang diperlukan,
- pastikan transform benar,
- pertahankan naming,
- perhatikan axis orientation,
- sertakan geometry yang dibutuhkan,
- simpan texture secara terpisah jika diperlukan.

Setelah export:

> jangan langsung menganggap asset pasti benar—selalu lakukan verifikasi di Unity.

---

# Slide 38 — Import Asset ke Unity

Asset dapat dimasukkan ke folder:

```text
Assets/Models/
```

Unity akan melakukan proses import.

Setelah import:

- pilih model,
- lihat Inspector,
- periksa preview,
- periksa scale,
- periksa material,
- drag model ke Scene.

---

# Slide 39 — Model Import Settings

Model importer menyediakan pengaturan seperti:

- Scale Factor,
- mesh options,
- normals,
- tangents,
- materials,
- rig,
- animation.

Untuk asset prop statis:

> fokus pada geometry, scale, normals, dan material.

---

# Slide 40 — Verifikasi Setelah Import

Checklist sederhana:

```text
[ ] Ukuran benar
[ ] Orientasi benar
[ ] Pivot benar
[ ] Normal benar
[ ] Texture benar
[ ] Material benar
[ ] Tidak ada object tidak perlu
[ ] Hierarchy mudah dipahami
```

Jangan lanjut membangun scene sebelum masalah utama asset selesai.

---

# Slide 41 — Real-Time Rendering Pipeline

Real-time rendering adalah proses menghasilkan frame dari scene secara berulang.

Secara konseptual:

```text
Scene Data
   ↓
Visibility
   ↓
Geometry Processing
   ↓
Material + Shader
   ↓
Rasterization
   ↓
Lighting
   ↓
Post Processing
   ↓
Framebuffer
   ↓
Display
```

---

# Slide 42 — Apa Itu Render Pipeline?

Render Pipeline adalah rangkaian proses yang mengatur:

> bagaimana Scene diubah menjadi gambar akhir.

Pipeline menentukan berbagai keputusan seperti:

- object mana yang dirender,
- shader apa yang digunakan,
- bagaimana lighting diproses,
- bagaimana shadow dihitung,
- kapan transparansi dirender,
- bagaimana hasil dikirim ke layar.

---

# Slide 43 — Mengapa Menggunakan URP?

URP cocok untuk pembelajaran karena:

- mendukung banyak platform,
- workflow modern,
- terintegrasi dengan Shader Graph,
- mendukung lighting real-time,
- mendukung post-processing,
- cocok untuk project 3D interaktif,
- menyediakan keseimbangan kualitas dan performa.

---

# Slide 44 — URP dalam Arsitektur Unity

```text
Scene
  ↓
Camera
  ↓
URP Pipeline
  ↓
Renderer
  ↓
Shader + Material
  ↓
GPU
  ↓
Framebuffer
  ↓
Game View
```

URP menjadi sistem yang mengatur bagaimana rendering dijalankan.

---

# Slide 45 — Draw Call, Culling, dan Frame Budget

Sebagai pengantar performa real-time:

```text
Culling
→ mengurangi object yang perlu dirender

Draw Call
→ perintah render CPU ke GPU

Frame Budget
→ waktu maksimum satu frame
```

Analisis dan optimization mendalam dilakukan pada Pertemuan 15.

---

# Slide 46 — Workflow Membangun Scene Unity

```text
Create URP Project
      ↓
Organize Folder
      ↓
Import Blender Asset
      ↓
Verify Scale + Pivot
      ↓
Create Material
      ↓
Assign Texture
      ↓
Assemble Environment
      ↓
Place Camera
      ↓
Basic Lighting
      ↓
Run Game View
      ↓
Inspect Performance
```

---

# Slide 47 — Praktikum: Import Asset & Build Scene URP

## Blender Asset → Unity URP Scene

Mahasiswa akan:

- menyiapkan minimal beberapa asset Blender,
- mengekspor asset,
- mengimpor asset ke Unity,
- memperbaiki scale/orientation bila diperlukan,
- membuat material URP,
- menyusun mini environment,
- mengatur Camera,
- menambahkan basic lighting,
- memeriksa hasil melalui Game View.

Detail langkah tersedia pada:

> **Modul Praktikum Pertemuan 12**.

---

# Slide 48 — Rencana Praktikum

```text
1. Create Unity 6 URP Project
2. Organize Project Folder
3. Import Blender Asset
4. Verify Scale / Orientation
5. Check Normal / UV
6. Build Hierarchy
7. Create Prefab
8. Arrange Scene
9. Setup Camera
10. Test Game View
```

Detail teknis berada pada modul praktikum terpisah.

---

# Slide 49 — Ringkasan Pertemuan

Benang merah:

```text
Blender Asset
↓
Unity Import
↓
GameObject + Component
↓
Transform + Hierarchy
↓
Mesh + Renderer
↓
URP
↓
Real-Time Frame
```

Fokus P12: Unity Editor, shortcut, object structure, asset import, URP, dan real-time pipeline.

---

# Slide 50 — TERIMA KASIH

# TERIMA KASIH

### Materi Selanjutnya

## Unity Lighting, Material & Post Processing
