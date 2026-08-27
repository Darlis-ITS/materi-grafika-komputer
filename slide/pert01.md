# Slide 00 — Cover

EF234504 — Grafika Komputer

**Pertemuan 1**

## Pengenalan Grafika Komputer

**Laboratorium GIGA**

**Departemen Teknik Informatika - ITS**  

---

# Slide 01 — Topik Pembahasan

Pada pertemuan ini kita akan membahas:

- pengertian dan ruang lingkup grafika komputer,
- aplikasi grafika komputer,
- raster, vector, dan 3D graphics,
- pixel, resolusi, frame, dan real-time graphics,
- koordinat 2D dan 3D,
- vertex, edge, face, triangle, dan mesh,
- object dan scene,
- camera, light, material, dan texture,
- CPU dan GPU,
- graphics API,
- graphics pipeline,
- pengantar praktikum **Graphics Playground** dengan HTML Canvas.

---

# Slide 02 — Capaian Pembelajaran

Setelah mengikuti pertemuan ini, mahasiswa diharapkan mampu:

1. menjelaskan pengertian grafika komputer,
2. menyebutkan berbagai aplikasi grafika komputer,
3. membedakan raster, vector, dan 3D graphics,
4. menjelaskan representasi objek 3D menggunakan vertex, edge, face, triangle, dan mesh,
5. menjelaskan komponen dasar sebuah scene,
6. menjelaskan peran CPU dan GPU dalam rendering,
7. menjelaskan tahapan dasar graphics pipeline,
8. membuat program grafika sederhana menggunakan HTML Canvas.

---

# Slide 03 — Apa Itu Grafika Komputer?

**Computer Graphics** adalah bidang ilmu yang mempelajari bagaimana komputer:

- merepresentasikan objek visual,
- membentuk gambar,
- memanipulasi objek dan gambar,
- melakukan rendering,
- menghasilkan animasi,
- menyediakan interaksi visual.

Secara sederhana:

> **Data → Proses Grafika → Gambar**

Grafika komputer mempelajari bagaimana data numerik diubah menjadi sesuatu yang dapat dilihat manusia.

---

# Slide 04 — Dari Data Menjadi Gambar

Komputer tidak memahami objek seperti “mobil”, “pohon”, atau “karakter” secara langsung.

Komputer memahami data seperti:

- posisi,
- koordinat,
- ukuran,
- bentuk,
- warna,
- texture,
- material,
- arah cahaya.

Alur sederhana:

```text
DATA
 ↓
GEOMETRY & ATTRIBUTES
 ↓
RENDERING
 ↓
IMAGE
```

---

# Slide 05 — Computer Graphics, Image Processing, dan Computer Vision

Tiga bidang ini saling berhubungan, tetapi mempunyai tujuan berbeda.

### Computer Graphics

```text
Data / Model → Image
```

Membuat gambar dari data.

### Image Processing

```text
Image → Modified Image
```

Memodifikasi gambar, misalnya blur, sharpening, atau noise reduction.

### Computer Vision

```text
Image → Information
```

Memahami informasi dari gambar, misalnya object detection atau face recognition.

---

# Slide 06 — Mengapa Grafika Komputer Penting?

Grafika komputer digunakan untuk:

- komunikasi visual,
- simulasi,
- hiburan,
- desain,
- visualisasi data,
- pendidikan,
- penelitian,
- human-computer interaction.

Banyak sistem modern membutuhkan kemampuan untuk mengubah data menjadi bentuk visual yang mudah dipahami.

---

# Slide 07 — Aplikasi Grafika Komputer

Contoh penggunaan grafika komputer:

- video game,
- film dan animasi,
- Computer-Aided Design,
- arsitektur,
- scientific visualization,
- medical visualization,
- Augmented Reality,
- Virtual Reality,
- Digital Twin,
- Geographic Information System,
- web graphics,
- UI/UX.

---

# Slide 08 — Game, Film, dan Visual Effects

### Video Game

Grafika komputer digunakan untuk:

- character,
- environment,
- lighting,
- shadow,
- particle,
- animation,
- user interface.

### Film

Digunakan untuk:

- CGI,
- 3D animation,
- creature,
- digital environment,
- simulation,
- compositing,
- visual effects.

Keduanya sama-sama menggunakan konsep **geometry, material, lighting, camera, dan rendering**.

---

# Slide 09 — CAD dan Scientific Visualization

### Computer-Aided Design

Digunakan untuk:

- desain produk,
- teknik mesin,
- arsitektur,
- otomotif,
- konstruksi.

### Scientific Visualization

Mengubah data kompleks menjadi visual yang lebih mudah dianalisis.

Contoh:

- simulasi cuaca,
- computational fluid dynamics,
- molekul,
- astronomi,
- data geospasial.

---

# Slide 10 — Medical Visualization, AR, dan VR

### Medical Visualization

Contoh:

- CT Scan,
- MRI,
- ultrasound,
- 3D anatomy,
- surgical simulation.

### Augmented Reality

```text
Real World + Virtual Object
```

### Virtual Reality

Membuat lingkungan digital yang imersif.

Semua membutuhkan teknik grafika komputer untuk menghasilkan representasi visual.

---

# Slide 11 — Real-Time Graphics, Frame, dan FPS

**Real-time graphics** menghasilkan gambar cukup cepat sehingga pengguna dapat berinteraksi secara langsung.

Contoh:

- game,
- simulator,
- VR,
- aplikasi 3D interaktif.

Satu gambar lengkap disebut **frame**.

Banyak frame yang ditampilkan berurutan menghasilkan ilusi gerakan.

```text
30 FPS
60 FPS
90 FPS
120 FPS
```

FPS = **Frames Per Second**.

---

# Slide 12 — Frame Time

Selain FPS, performa grafika juga dapat diukur menggunakan **frame time**.

Rumus:

```text
Frame Time = 1000 / FPS
```

Contoh:

```text
60 FPS → 16.67 ms/frame
30 FPS → 33.33 ms/frame
```

Semakin kecil frame time, semakin cepat satu frame selesai diproses.

Pada real-time graphics, setiap tahap harus selesai dalam waktu yang sangat terbatas.

---

# Slide 13 — Tiga Bentuk Representasi Grafika

Secara umum:

```text
Graphics
├── Raster Graphics
├── Vector Graphics
└── 3D Graphics
```

Perbedaannya terletak pada cara objek direpresentasikan dan digambar.

- Raster → pixel
- Vector → bentuk matematis
- 3D → geometry dalam ruang tiga dimensi

---

# Slide 14 — Raster Graphics dan Pixel

Raster graphics terdiri dari kumpulan **pixel**.

Pixel adalah elemen terkecil pada raster image.

Sebuah pixel biasanya menyimpan:

```text
R, G, B
```

atau:

```text
R, G, B, A
```

`A` = alpha / transparansi.

Raster cocok untuk:

- foto,
- screenshot,
- texture,
- digital painting.

---

# Slide 15 — Resolusi dan Pixelation

Resolusi menunjukkan jumlah pixel.

Contoh:

```text
1920 × 1080
```

berarti:

```text
1920 pixel horizontal
1080 pixel vertical
```

Jumlah pixel:

```text
1920 × 1080 = 2,073,600 pixel
```

Karena raster memiliki resolusi tetap, pembesaran berlebihan dapat menimbulkan **pixelation**.

---

# Slide 16 — Vector Graphics

Vector graphics menggunakan bentuk matematis seperti:

- point,
- line,
- curve,
- circle,
- polygon.

Karena tidak bergantung pada susunan pixel tetap, vector bersifat:

> **Resolution Independent**

Cocok untuk:

- logo,
- icon,
- diagram,
- ilustrasi.

Format umum:

- SVG,
- AI,
- EPS,
- PDF.

---

# Slide 17 — Raster vs Vector

| Raster | Vector |
|---|---|
| berbasis pixel | berbasis bentuk matematis |
| resolusi tetap | resolution independent |
| cocok untuk foto | cocok untuk logo dan diagram |
| detail warna tinggi | bentuk lebih terstruktur |
| dapat mengalami pixelation | tetap tajam saat diperbesar |

Tidak ada representasi yang selalu lebih baik.

Pilihan bergantung pada kebutuhan.

---

# Slide 18 — Apa Itu 3D Graphics?

3D graphics merepresentasikan objek dalam tiga dimensi.

```text
X → Width
Y → Height
Z → Depth
```

Koordinat 2D:

```text
P = (x, y)
```

Koordinat 3D:

```text
P = (x, y, z)
```

Sistem koordinat digunakan untuk menentukan posisi dan orientasi objek di ruang virtual.

---

# Slide 19 — Cartesian Coordinate System

Dalam ruang 3D:

```text
        Y
        ↑
        |
        O────→ X
       /
      /
     Z
```

Sumbu digunakan untuk mendeskripsikan:

- posisi,
- arah,
- rotasi,
- transformasi.

Orientasi sumbu dapat berbeda antara software dan graphics API.

---

# Slide 20 — Dari Vertex Menjadi Mesh

Objek 3D dibangun dari struktur geometry.

```text
Vertex
 ↓
Edge
 ↓
Face
 ↓
Triangle
 ↓
Mesh
```

Konsep ini menjadi dasar dalam:

- WebGL,
- Three.js,
- Blender,
- Unity.

---

# Slide 21 — Vertex, Edge, dan Face

### Vertex

Titik dalam ruang.

```text
V0 = (0, 0, 0)
V1 = (1, 0, 0)
V2 = (0, 1, 0)
```

Vertex juga dapat memiliki:

- color,
- normal,
- texture coordinate.

### Edge

Garis penghubung dua vertex.

### Face

Permukaan yang dibentuk beberapa vertex.

---

# Slide 22 — Mengapa Triangle Sangat Penting?

Triangle merupakan primitive utama dalam grafika 3D karena:

- selalu planar,
- sederhana,
- mudah dihitung,
- efisien untuk GPU,
- dapat menyusun bentuk kompleks.

Satu triangle:

```text
       V2
       ●
      / \
     /   \
    ●─────●
   V0     V1
```

Sebagian besar objek 3D pada akhirnya direpresentasikan sebagai kumpulan triangle.

---

# Slide 23 — Mesh dan Polygon Count

**Mesh** adalah kumpulan:

- vertex,
- edge,
- face.

Mesh menggambarkan bentuk geometris objek.

Contoh:

```text
Cube       → sedikit triangle
Simple Prop→ ratusan/ribuan triangle
Character  → puluhan ribu triangle
```

Semakin tinggi triangle count, biasanya semakin besar biaya pemrosesan geometry.

---

# Slide 24 — Object dan Transform

Sebuah **Object** lebih dari sekadar mesh.

```text
Object
├── Mesh
├── Transform
├── Material
├── Texture
└── Other Properties
```

Transform menentukan:

- Position
- Rotation
- Scale

```text
Transform
├── Position (x, y, z)
├── Rotation (x, y, z)
└── Scale    (x, y, z)
```

---

# Slide 25 — Scene

**Scene** adalah kumpulan komponen yang membentuk dunia virtual.

Contoh:

```text
Scene
├── Camera
├── Light
├── Character
├── Ground
├── Building
├── Tree
└── Other Objects
```

Scene adalah dunia yang akan diproses dan dirender menjadi gambar.

---

# Slide 26 — Camera dan Light

### Camera

Menentukan bagian scene yang terlihat.

Parameter penting:

- position,
- orientation,
- field of view,
- projection.

### Light

Membantu menentukan bagaimana objek terlihat.

Parameter umum:

- position,
- direction,
- intensity,
- color.

Jenis light antara lain:

- directional,
- point,
- spot.

---

# Slide 27 — Material dan Texture

### Material

Menentukan bagaimana permukaan berinteraksi dengan cahaya.

Contoh properti:

- color,
- roughness,
- metallic,
- transparency,
- emission.

### Texture

Gambar yang dipetakan ke permukaan objek.

```text
Image Texture
     ↓
Mapped to Surface
     ↓
Detailed Object
```

Texture dapat menambah detail visual tanpa menambah banyak geometry.

---

# Slide 28 — Apa Itu Rendering?

**Rendering** adalah proses menghasilkan gambar dari data scene.

Input:

- geometry,
- transform,
- camera,
- material,
- texture,
- lighting.

Output:

```text
FINAL IMAGE
```

Dua kategori umum:

### Offline Rendering
- kualitas sangat tinggi,
- rendering dapat berlangsung lama,
- umum pada film.

### Real-Time Rendering
- harus selesai dalam milidetik,
- umum pada game dan simulator.

---

# Slide 29 — CPU dan GPU

### CPU — Central Processing Unit

Cocok untuk:

- general-purpose computing,
- logic,
- branching,
- sequential processing,
- application logic.

### GPU — Graphics Processing Unit

Cocok untuk:

- vertex processing,
- pixel/fragment processing,
- matrix operations,
- image processing,
- rendering.

Konsep sederhana:

```text
CPU → Few Powerful Workers
GPU → Many Parallel Workers
```

---

# Slide 30 — Mengapa Rendering Cocok untuk GPU?

Layar 1920 × 1080 memiliki lebih dari 2 juta pixel.

Banyak perhitungan untuk pixel dan vertex dapat dilakukan secara independen.

Karena itu:

> Rendering sangat cocok untuk **massively parallel processing**.

GPU mampu menjalankan banyak operasi serupa secara bersamaan.

---

# Slide 31 — Kerja Sama CPU, GPU, dan VRAM

CPU dan GPU bekerja sama.

```text
CPU
 ↓
Prepare Scene
 ↓
Send Commands
 ↓
GPU
 ↓
Render
 ↓
Framebuffer
 ↓
Display
```

GPU menggunakan **VRAM** untuk menyimpan data seperti:

- vertex buffer,
- index buffer,
- texture,
- framebuffer,
- shader data.

---

# Slide 32 — Graphics API dan WebGL

Aplikasi tidak biasanya berkomunikasi langsung dengan GPU.

Digunakan **Graphics API**, misalnya:

- OpenGL,
- WebGL,
- Direct3D,
- Vulkan,
- Metal.

WebGL memungkinkan JavaScript menggunakan kemampuan GPU melalui browser.

```text
JavaScript
   ↓
WebGL API
   ↓
Browser
   ↓
GPU
   ↓
Canvas
```

WebGL mulai dipelajari pada Pertemuan 2.

---

# Slide 33 — Graphics Pipeline

**Graphics pipeline** adalah rangkaian proses yang mengubah data geometry menjadi image di layar.

```text
3D Object
   ↓
Vertex Data
   ↓
Vertex Processing
   ↓
Primitive Assembly
   ↓
Rasterization
   ↓
Fragment Processing
   ↓
Framebuffer
   ↓
Screen
```

Pipeline adalah konsep inti grafika komputer modern.

---

# Slide 34 — Memahami Tahap Geometry pada Pipeline

### Vertex Data

Geometry direpresentasikan sebagai vertex.

### Vertex Processing

Setiap vertex dapat mengalami:

- transformation,
- position calculation,
- normal transformation.

### Primitive Assembly

Vertex digabung menjadi primitive:

- point,
- line,
- triangle.

```text
Vertices → Triangle
```

---

# Slide 35 — Rasterization, Fragment, dan Framebuffer

### Rasterization

Mengubah primitive menjadi kandidat pixel atau **fragment**.

```text
Triangle
   ↓
Rasterization
   ↓
Fragments
```

### Fragment Processing

Menentukan warna akhir menggunakan:

- color,
- texture,
- lighting,
- shadow,
- transparency.

### Framebuffer

Menyimpan hasil rendering sebelum ditampilkan ke layar.

---

# Slide 36 — Benang Merah Graphics Pipeline

```text
MODEL DATA
   ↓
VERTEX
   ↓
VERTEX PROCESSING
   ↓
TRIANGLE
   ↓
RASTERIZATION
   ↓
FRAGMENT
   ↓
FRAGMENT PROCESSING
   ↓
FRAMEBUFFER
   ↓
SCREEN
```

Konsep yang sama akan muncul kembali saat menggunakan:

```text
WebGL → Three.js → Blender → Unity
```

Tools berubah, tetapi konsep dasarnya tetap.

---

# Slide 37 — Review Praktikum 1: Graphics Playground

## Tujuan

Memahami bahwa gambar di layar dibentuk dari:

- coordinate,
- primitive,
- color,
- frame,
- interaction.

Teknologi:

```text
HTML
+
JavaScript
+
HTML Canvas 2D
```

Target:

> Mini aplikasi grafika interaktif yang menampilkan beberapa primitive 2D.

Canvas dipakai sebagai pengantar sebelum masuk ke WebGL.

---

# Slide 38 — Review Aktivitas dan Output Praktikum

Mahasiswa membuat **Graphics Playground** berisi:

- rectangle,
- line,
- circle,
- triangle,
- warna berbeda,
- animasi sederhana,
- interaksi mouse atau keyboard.

Alur:

```text
Create Canvas
     ↓
Draw Primitive
     ↓
Set Color & Position
     ↓
Animate
     ↓
Add Interaction
```

Output minimum:

- minimal 3 jenis primitive,
- penggunaan warna,
- satu objek bergerak,
- satu bentuk interaksi pengguna.

---

# Slide 39 — Review Challenge, Ringkasan, dan Pertemuan Berikutnya

### Challenge Praktikum

Pilih minimal satu:

- objek memantul di batas canvas,
- objek mengikuti mouse,
- warna berubah ketika diklik,
- objek digerakkan dengan keyboard,
- menampilkan koordinat mouse.

### Konsep yang Harus Diingat

```text
DATA
 ↓
GEOMETRY
 ↓
VERTEX / TRIANGLE
 ↓
RASTERIZATION
 ↓
FRAGMENT / PIXEL
 ↓
IMAGE
```

---

# Slide 40 — Penutup

# TERIMA KASIH

### Materi Pertemuan 3

### WebGL Fundamental


