# Grafika Komputer — Pertemuan 4
## Camera, Projection & 3D

---

# Slide 00 — Cover

EF234504 — Grafika Komputer

## Pertemuan 4

# Camera, Projection & 3D

**Laboratorium GIGA**

**Departemen Teknik Informatika - ITS**

---

# Slide 01 — Topik Pembahasan

- Camera Virtual
- Camera Position
- Target
- Up Vector
- Forward, Right, Up Basis
- View Transformation
- View Matrix
- Orthographic Projection
- Perspective Projection
- Field of View
- Aspect Ratio
- Near Plane
- Far Plane
- Projection Matrix
- MVP
- Depth Buffer
- Depth Test
- Z-Fighting
- Praktikum: Rotating 3D Cube

---

# Slide 02 — Capaian Pembelajaran

Mahasiswa mampu:

1. menjelaskan konsep camera virtual,
2. menggunakan position, target, dan up vector,
3. menjelaskan View Matrix,
4. membedakan orthographic dan perspective projection,
5. menjelaskan FOV dan aspect ratio,
6. menjelaskan fungsi near dan far plane,
7. menjelaskan Model–View–Projection,
8. menggunakan depth buffer dan depth test,
9. membuat camera dan projection pada WebGL,
10. membuat rotating 3D cube.

---

# Slide 03 — Posisi Materi

Pertemuan 3:

```text
Local
 ↓ Model Matrix
World
```

Pertemuan 4 melanjutkan:

```text
World
 ↓ View Matrix
View
 ↓ Projection Matrix
Clip
 ↓ Perspective Divide
NDC
 ↓ Viewport
Screen
```

---

# Slide 04 — Mengapa Camera Dibutuhkan?

Scene 3D dapat berisi banyak object.

Pengguna hanya melihat:

> bagian scene dari suatu sudut pandang tertentu.

Camera menentukan:

- posisi pengamat,
- arah pandang,
- orientasi,
- projection,
- area scene yang terlihat.

---

# Slide 05 — Camera Virtual

Camera pada grafika komputer adalah representasi matematis.

Tujuannya:

```text
World
 ↓
Dilihat dari suatu posisi dan arah
 ↓
Image
```

Proses utamanya:

# View Transformation

---

# Slide 06 — Parameter Dasar Camera

Camera sederhana dapat didefinisikan dengan:

```text
Camera Position
Target
Up Vector
```

Ketiganya menentukan:

- lokasi camera,
- arah camera melihat,
- orientasi "atas".

---

# Slide 07 — Camera Position

Contoh:

```text
Camera Position = (0, 2, 5)
```

Artinya:

```text
X = 0
Y = 2
Z = 5
```

Camera berada di World Space.

---

# Slide 08 — Target

Target adalah titik yang dilihat camera.

```text
Camera = (0,2,5)
Target = (0,0,0)
```

Arah pandang berasal dari:

```text
Target - Camera Position
```

---

# Slide 09 — Forward Vector

Secara konsep:

```text
Forward =
normalize(
  Target - Position
)
```

Forward menunjukkan arah camera melihat.

Contoh:

```text
Position = (0,0,5)
Target   = (0,0,0)

Forward ≈ (0,0,-1)
```

---

# Slide 10 — Up Vector

Contoh umum:

```text
Up = (0,1,0)
```

Artinya:

```text
+Y dianggap sebagai arah atas
```

Up Vector diperlukan agar orientasi camera tidak ambigu.

---

# Slide 11 — Right Vector

Basis camera menggunakan:

```text
Forward
Right
Up
```

Right dapat dihitung dengan cross product.

Secara konseptual:

```text
Right =
normalize(
  Forward × Up
)
```

Urutan cross product harus mengikuti convention yang digunakan.

---

# Slide 12 — Corrected Up

Setelah Right diperoleh:

```text
Corrected Up =
Right × Forward
```

Ketiga vector membentuk basis camera yang saling tegak lurus.

---

# Slide 13 — Basis Camera

```text
          Up
          ↑
          |
          ● Camera
         / \
        /   \
     Right  Forward
```

Basis ini menjadi dasar pembentukan View Matrix.

---

# Slide 14 — View Transformation

View Transformation mengubah:

```text
World Coordinate
       ↓
View / Camera Coordinate
```

Tujuannya:

> menyatakan seluruh scene relatif terhadap camera.

---

# Slide 15 — View Space

Dalam View Space:

```text
Camera
```

secara konseptual dianggap berada di:

```text
origin
```

dengan orientasi standar.

World ditransformasikan relatif terhadap camera.

---

# Slide 16 — Analogi View Transformation

Jika camera bergerak ke kanan:

```text
Camera → kanan
```

secara matematis setara dengan:

```text
World → kiri
```

Karena yang dibutuhkan adalah posisi world relatif terhadap camera.

---

# Slide 17 — View Matrix

View Matrix melakukan:

```text
World Space
   ↓
View Space
```

Secara konsep:

```text
viewPosition =
ViewMatrix × worldPosition
```

---

# Slide 18 — View Matrix dan Camera Transform

Camera mempunyai transformasi pada World Space.

View Matrix berkaitan dengan:

```text
inverse
```

dari transformasi camera.

Secara sederhana:

```text
View Matrix
≈ Inverse(Camera Transform)
```

---

# Slide 19 — Look-At Concept

Camera sering dibentuk dengan konsep:

```text
lookAt(
  position,
  target,
  up
)
```

Tujuan:

> membentuk orientasi camera berdasarkan titik yang dilihat.

---

# Slide 20 — Pipeline Sampai View Space

```text
Local Vertex
     ↓
Model Matrix
     ↓
World Coordinate
     ↓
View Matrix
     ↓
View Coordinate
```

Setelah ini vertex siap diproyeksikan.

---

# Slide 21 — Masalah 3D ke Layar 2D

World mempunyai:

```text
X
Y
Z
```

Layar mempunyai:

```text
X
Y
```

Kita memerlukan proses:

# Projection

---

# Slide 22 — Apa Itu Projection?

Projection mengubah posisi 3D menjadi bentuk yang dapat dipetakan ke layar 2D.

Dua jenis utama:

```text
Orthographic Projection
Perspective Projection
```

---

# Slide 23 — Orthographic Projection

Ciri utama:

> ukuran object tidak berubah karena jarak terhadap camera.

Cocok untuk:

- CAD,
- engineering drawing,
- map,
- visualisasi teknis,
- editor 3D tertentu.

---

# Slide 24 — Orthographic Volume

Orthographic menggunakan volume berbentuk box.

Parameter:

```text
left
right
bottom
top
near
far
```

Geometry di dalam volume dapat diproyeksikan.

---

# Slide 25 — Perspective Projection

Perspective meniru cara pandang manusia/kamera nyata.

```text
Object dekat
→ tampak lebih besar

Object jauh
→ tampak lebih kecil
```

Umum pada game, simulator, dan VR.

---

# Slide 26 — View Frustum

Perspective camera menggunakan volume berbentuk frustum.

```text
        Far Plane
      ┌──────────┐
       \        /
        \      /
       Near Plane
          Camera
```

Geometry di luar frustum dapat di-clip.

---

# Slide 27 — Field of View

**FOV — Field of View**

Menentukan luas sudut pandang camera.

Contoh:

```text
45°
60°
90°
```

FOV kecil → lebih sempit / terasa zoom.

FOV besar → lebih luas.

---

# Slide 28 — FOV Kecil vs Besar

### FOV kecil

- area sempit,
- object tampak besar,
- kesan zoom,
- distortion tepi lebih kecil.

### FOV besar

- area luas,
- lebih dinamis,
- distortion tepi lebih terlihat.

---

# Slide 29 — Aspect Ratio

```text
aspect = width / height
```

Contoh:

```text
1920 / 1080
≈ 1.7778
= 16 : 9
```

Aspect ratio menjaga proporsi horizontal dan vertikal.

---

# Slide 30 — Aspect Ratio yang Salah

Jika aspect projection berbeda dengan viewport:

```text
Circle
   ↓
Ellipse
```

Karena skala horizontal/vertical tidak sesuai.

Pada WebGL:

```javascript
const aspect =
  canvas.width / canvas.height;
```

---

# Slide 31 — Near Plane

Near Plane adalah batas terdekat camera yang dirender.

Object lebih dekat dari near plane:

```text
di-clip
```

Near plane tidak sebaiknya terlalu dekat ke nol tanpa alasan.

---

# Slide 32 — Far Plane

Far Plane adalah batas terjauh yang dirender.

Object lebih jauh dari far plane:

```text
tidak terlihat
```

Visible scene berada antara near dan far.

---

# Slide 33 — Near/Far dan Depth Precision

Rentang ekstrem:

```text
near = 0.001
far  = 1,000,000
```

dapat menurunkan presisi depth.

Prinsip praktis:

- near jangan terlalu kecil,
- far jangan terlalu jauh bila tidak perlu.

---

# Slide 34 — Projection Matrix

Projection Matrix mengubah:

```text
View Coordinate
       ↓
Clip Coordinate
```

Jenis:

```text
Orthographic Matrix
Perspective Matrix
```

---

# Slide 35 — Clip Space dan Perspective Divide

Setelah Projection Matrix:

```text
Clip Position (x,y,z,w)
        ↓
Perspective Divide
        ↓
(x/w, y/w, z/w)
        ↓
NDC
```

NDC telah diperkenalkan pada Pertemuan 2.

---

# Slide 36 — Viewport Transform

Setelah NDC:

```text
NDC
 ↓
Viewport Transform
 ↓
Screen Coordinate
```

Screen coordinate menggunakan pixel sesuai ukuran Canvas.

---

# Slide 37 — Model View Projection

Tiga matrix utama:

```text
M = Model Matrix
V = View Matrix
P = Projection Matrix
```

Pipeline:

```text
Local
 ↓ M
World
 ↓ V
View
 ↓ P
Clip
```

---

# Slide 38 — MVP Matrix

Secara konseptual:

```text
clipPosition =
P × V × M × localPosition
```

Urutan mengikuti convention matrix yang digunakan.

Ini menggabungkan hasil P3 dan P4.

---

# Slide 39 — MVP pada Vertex Shader

Vertex Shader sudah dipelajari pada P2.

Sekarang kita hanya menggunakan:

```glsl
gl_Position =
  u_projection *
  u_view *
  u_model *
  vec4(a_position, 1.0);
```

Fokus slide ini:

> hubungan Model, View, dan Projection.

---

# Slide 40 — Dari 2D ke 3D

Pada P2:

```glsl
in vec2 a_position;
```

Untuk 3D:

```glsl
in vec3 a_position;
```

Setiap vertex memiliki:

```text
X, Y, Z
```

---

# Slide 41 — Cube sebagai Object 3D

Cube mempunyai:

- 8 posisi sudut secara geometris,
- 6 faces,
- 12 triangles.

Untuk rendering per-face attribute, vertex dapat diduplikasi.

Cube ideal sebagai objek latihan:

- transform,
- camera,
- projection,
- depth.

---

# Slide 42 — Mengapa Depth Dibutuhkan?

Pada scene 3D, beberapa fragment dapat berada pada pixel layar yang sama.

Kita perlu menentukan:

> fragment mana yang paling dekat camera?

Solusi:

# Depth Buffer

---

# Slide 43 — Depth Buffer

Depth Buffer menyimpan informasi kedalaman.

Untuk setiap fragment:

```text
New Depth
   ↓
Compare
   ↓
Keep / Reject
```

Depth buffer bekerja bersama color buffer.

---

# Slide 44 — Depth Test

Aktifkan:

```javascript
gl.enable(gl.DEPTH_TEST);
```

Sebelum render frame:

```javascript
gl.clear(
  gl.COLOR_BUFFER_BIT |
  gl.DEPTH_BUFFER_BIT
);
```

Tanpa depth test, urutan draw dapat menghasilkan visual 3D yang salah.

---

# Slide 45 — Z-Fighting

Z-fighting terjadi ketika dua surface memiliki depth yang hampir sama.

Gejala:

- flickering,
- pola saling menimpa.

Faktor:

- surface hampir coplanar,
- near terlalu dekat,
- far terlalu jauh,
- depth precision terbatas.

---

# Slide 46 — Praktikum: Rotating 3D Cube

Mahasiswa mengembangkan object menjadi:

- cube 3D,
- Model Matrix,
- camera position,
- target,
- up vector,
- View Matrix,
- Perspective Projection,
- Orthographic Projection,
- depth test,
- rotation animation.

---

# Slide 47 — Rencana Praktikum

Tahapan:

```text
1. Buat Cube Geometry
2. Gunakan vec3 Position
3. Gunakan Model Matrix P3
4. Buat View Matrix
5. Buat Perspective Matrix
6. Buat Orthographic Matrix
7. Gabungkan MVP
8. Aktifkan Depth Test
9. Tambahkan Rotation
10. Tambahkan Camera Control
```

Detail teknis ada di modul praktikum.

---

# Slide 48 — Ringkasan Pertemuan

Benang merah:

```text
LOCAL
 ↓ Model
WORLD
 ↓ View
VIEW
 ↓ Projection
CLIP
 ↓ Perspective Divide
NDC
 ↓ Viewport
SCREEN
```

Konsep utama:

- camera basis,
- View Matrix,
- projection,
- FOV,
- near/far,
- MVP,
- depth test.

---

# Slide 49 — TERIMA KASIH

# TERIMA KASIH

### Pertemuan Berikutnya

## Lighting, Shading & Texture pada WebGL


