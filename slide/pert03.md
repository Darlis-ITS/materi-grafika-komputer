# Grafika Komputer — Pertemuan 3
## Transformation & Coordinate System

---

# Slide 00 — Cover

EF234504 — Grafika Komputer

## Pertemuan 3

# Transformation & Coordinate System

  
**Laboratorium GIGA**

**Departemen Teknik Informatika - ITS**  

---

# Slide 01 — Topik Pembahasan

- Coordinate System
- Local Coordinate
- World Coordinate
- View, Clip, NDC, Screen sebagai pipeline overview
- Translation
- Scaling
- Rotation
- Degree dan Radian
- Matrix
- Homogeneous Coordinate
- Translation Matrix
- Rotation Matrix
- Scaling Matrix
- Matrix Multiplication
- Transform Composition
- Transform Order
- Model Matrix
- Uniform Matrix pada WebGL
- Praktikum: Interactive Transformation

---

# Slide 02 — Capaian Pembelajaran

Mahasiswa mampu:

1. menjelaskan coordinate space pada graphics pipeline,
2. membedakan local dan world coordinate,
3. menerapkan translation, rotation, dan scaling,
4. menjelaskan transformasi menggunakan matrix,
5. menjelaskan homogeneous coordinate,
6. membentuk Model Matrix,
7. menggabungkan transformasi melalui matrix multiplication,
8. menjelaskan pengaruh urutan transformasi,
9. mengirim transform matrix ke shader melalui uniform,
10. membuat objek WebGL yang dapat ditransformasikan secara interaktif.

---

# Slide 03 — Posisi Materi

Pertemuan 2:

```text
Vertex Data
   ↓
Vertex Shader
   ↓
Primitive
   ↓
Fragment Shader
```

Pertemuan 3 menambahkan:

```text
Vertex
   ↓
Transformation Matrix
   ↓
Transformed Vertex
```

Kita tidak mengubah geometry asli di buffer.

---

# Slide 04 — Mengapa Transformation Dibutuhkan?

Object grafika perlu:

- dipindahkan,
- diputar,
- diperbesar,
- diperkecil,
- ditempatkan dalam scene.

Contoh:

```text
Character berjalan → Translation
Mobil berbelok    → Rotation
Object membesar   → Scaling
```

---

# Slide 05 — Coordinate System

Coordinate system adalah sistem referensi untuk menyatakan posisi.

2D:

```text
P = (x, y)
```

3D:

```text
P = (x, y, z)
```

Nilai koordinat sebuah titik bergantung pada coordinate space.

---

# Slide 06 — Satu Vertex, Banyak Coordinate Space

Secara keseluruhan vertex dapat melewati:

```text
Local
 ↓
World
 ↓
View
 ↓
Clip
 ↓
NDC
 ↓
Screen
```

Pertemuan 3 fokus pada:

```text
Local → World
```

Pertemuan 4 fokus pada View dan Projection.

---

# Slide 07 — Local Coordinate

Local coordinate adalah posisi relatif terhadap origin object.

```text
       (0, 0.5)
          ●
         / \
        /   \
       ●─────●
(-0.5,-0.5) (0.5,-0.5)
```

Geometry dasar didefinisikan di local space.

---

# Slide 08 — Object Origin / Pivot

Object biasanya memiliki origin atau pivot.

```text
        Y
        ↑
        |
        O ─────→ X
      Origin
```

Pivot penting karena:

- rotation terhadap pivot,
- scaling terhadap pivot,
- posisi object mengacu pada transform-nya.

---

# Slide 09 — World Coordinate

World coordinate adalah coordinate system global sebuah scene.

```text
World
├── Car      ( 4, 1)
├── Tree     (-3, 2)
├── Building ( 0, 5)
└── Camera
```

Semua object berbagi world space.

---

# Slide 10 — Local ke World

Transformasi:

```text
Local Coordinate
      ↓
Model Transformation
      ↓
World Coordinate
```

Model Transformation dibentuk dari:

```text
Translation + Rotation + Scaling
```

---

# Slide 11 — Transformasi Dasar

| Transformasi | Mengubah |
|---|---|
| Translation | posisi |
| Rotation | orientasi |
| Scaling | ukuran |

Ketiganya diterapkan pada vertex object.

---

# Slide 12 — Translation

Dalam 2D:

```text
x' = x + tx
y' = y + ty
```

Contoh:

```text
P = (1, 2)
T = (3,-1)

P' = (4,1)
```

Bentuk object tidak berubah.

---

# Slide 13 — Translation pada Object

Jika object memiliki vertex:

```text
V0, V1, V2
```

maka:

```text
V0' = V0 + T
V1' = V1 + T
V2' = V2 + T
```

Semua vertex berpindah dengan offset yang sama.

---

# Slide 14 — Scaling

Dalam 2D:

```text
x' = sx × x
y' = sy × y
```

Dengan:

```text
sx = scale X
sy = scale Y
```

Scaling terjadi relatif terhadap origin/pivot.

---

# Slide 15 — Uniform vs Non-Uniform Scaling

Uniform:

```text
sx = sy
```

Object berubah ukuran secara proporsional.

Non-uniform:

```text
sx ≠ sy
```

Proporsi object berubah.

Contoh:

```text
sx = 2.0
sy = 0.5
```

---

# Slide 16 — Rotation

Rotation mengubah orientasi object terhadap pivot.

Diperlukan:

```text
angle θ
```

Dalam 2D biasanya rotasi terjadi pada bidang XY.

---

# Slide 17 — Degree dan Radian

Sudut dapat dinyatakan dalam:

```text
degree
radian
```

Konversi:

```text
radian =
degree × π / 180
```

Fungsi trigonometri pada pemrograman umumnya menggunakan radian.

---

# Slide 18 — Rumus Rotation 2D

```text
x' = x cosθ - y sinθ
y' = x sinθ + y cosθ
```

Contoh:

```text
P = (1,0)
Rotation = 90°
P' ≈ (0,1)
```

---

# Slide 19 — Masalah Jika Tanpa Matrix

Translation, scaling, rotation dapat dihitung satu per satu.

Namun ketika transformasi banyak:

- rumus menjadi sulit dikelola,
- urutan sulit dilacak,
- sulit dikirim secara efisien ke GPU.

Solusi:

# Matrix

---

# Slide 20 — Apa Itu Matrix?

Matrix adalah susunan angka dalam baris dan kolom.

Contoh:

```text
[a b]
[c d]
```

Dalam grafika:

```text
P' = M × P
```

Matrix digunakan untuk mentransformasi vector.

---

# Slide 21 — Vector dan Matrix

Titik 2D dapat ditulis:

```text
P =
[x]
[y]
```

Transformasi linear:

```text
P' = M × P
```

Scaling dan rotation dapat direpresentasikan langsung dengan matrix 2×2.

---

# Slide 22 — Scaling Matrix 2×2

```text
S =
[sx  0 ]
[ 0 sy ]
```

Maka:

```text
P' = S × P
```

Matrix membuat transformasi lebih konsisten.

---

# Slide 23 — Rotation Matrix 2×2

```text
R =
[ cosθ  -sinθ ]
[ sinθ   cosθ ]
```

Maka:

```text
P' = R × P
```

---

# Slide 24 — Mengapa Translation Berbeda?

Translation menggunakan penjumlahan:

```text
x' = x + tx
y' = y + ty
```

Tidak dapat direpresentasikan langsung dengan matrix linear 2×2.

Solusi:

# Homogeneous Coordinate

---

# Slide 25 — Homogeneous Coordinate

Titik 2D:

```text
(x, y)
```

diubah menjadi:

```text
(x, y, 1)
```

Sehingga dapat memakai matrix 3×3.

Untuk 3D:

```text
(x, y, z)
→
(x, y, z, 1)
```

menggunakan matrix 4×4.

---

# Slide 26 — Translation Matrix 2D

```text
T =
[1 0 tx]
[0 1 ty]
[0 0  1]
```

Dengan homogeneous coordinate:

```text
P' = T × P
```

Translation kini dapat digabung dengan transformasi lain.

---

# Slide 27 — Scaling Matrix 3×3

```text
S =
[sx  0  0]
[ 0 sy  0]
[ 0  0  1]
```

Format 3×3 membuat scaling kompatibel dengan translation 2D.

---

# Slide 28 — Rotation Matrix 3×3

```text
R =
[ cosθ -sinθ 0]
[ sinθ  cosθ 0]
[  0     0   1]
```

Sekarang semua transformasi dasar memiliki bentuk matrix yang seragam.

---

# Slide 29 — Matrix Multiplication

Transformasi dapat digabung:

```text
M = A × B × C
```

Kemudian satu matrix digunakan untuk seluruh vertex:

```text
P' = M × P
```

Ini lebih efisien daripada menghitung setiap transformasi secara terpisah.

---

# Slide 30 — Urutan Transformasi Penting

Matrix multiplication:

> tidak komutatif.

Secara umum:

```text
A × B ≠ B × A
```

Artinya:

```text
Scale → Rotate
```

dapat memberi hasil berbeda dari:

```text
Rotate → Scale
```

---

# Slide 31 — Contoh Transform Order

Kasus A:

```text
Scale
 ↓
Rotate
 ↓
Translate
```

Kasus B:

```text
Translate
 ↓
Rotate
 ↓
Scale
```

Hasil posisi dan orientasi object dapat sangat berbeda.

---

# Slide 32 — Transform Composition

Sebuah Model Matrix biasanya membentuk kombinasi:

```text
Model Matrix
=
Translation
× Rotation
× Scaling
```

Urutan penulisan dan penerapan bergantung pada convention matrix/library yang digunakan.

Yang penting:

> gunakan convention secara konsisten.

---

# Slide 33 — Model Matrix

Model Matrix mengubah:

```text
Local Space
    ↓
World Space
```

Secara konseptual:

```text
worldPosition =
ModelMatrix × localPosition
```

---

# Slide 34 — Transformasi 3D Menggunakan Matrix 4×4

Dalam 3D digunakan matrix 4×4.

Representasi umum:

```text
[x]
[y]
[z]
[w]
```

Model Matrix 4×4 dapat memuat:

- translation,
- rotation,
- scaling.

---

# Slide 35 — Translation Matrix 3D

Secara konseptual:

```text
T =
[1 0 0 tx]
[0 1 0 ty]
[0 0 1 tz]
[0 0 0  1]
```

`tx`, `ty`, `tz` menentukan perpindahan object di world space.

---

# Slide 36 — Scaling Matrix 3D

```text
S =
[sx  0  0  0]
[ 0 sy  0  0]
[ 0  0 sz  0]
[ 0  0  0  1]
```

Scaling dapat berbeda untuk sumbu X, Y, Z.

---

# Slide 37 — Rotation dalam 3D

Rotation 3D dapat terjadi terhadap:

```text
X-axis
Y-axis
Z-axis
```

Setiap axis memiliki rotation matrix sendiri.

Pada praktikum fokus dapat dimulai dari:

```text
Rotation Z untuk 2D
Rotation Y untuk object 3D sederhana
```

---

# Slide 38 — Uniform Matrix pada WebGL

Dari Pertemuan 2 kita sudah mengenal `uniform`.

Sekarang digunakan untuk mengirim matrix:

```glsl
uniform mat4 u_model;
```

Uniform:

```text
sama untuk semua vertex
dalam satu draw call
```

---

# Slide 39 — Transformation di Vertex Shader

Vertex Shader tidak dijelaskan ulang; kita langsung memakainya:

```glsl
in vec3 a_position;
uniform mat4 u_model;

void main() {
  gl_Position =
    u_model *
    vec4(a_position, 1.0);
}
```

Untuk tahap ini, matrix lain dapat dibuat identity.

---

# Slide 40 — Geometry Tetap, Transform Berubah

```text
Vertex Buffer
   ↓
Geometry Tetap

Model Matrix
   ↓
Berubah per frame

Vertex Shader
   ↓
Transformed Vertex
```

Keuntungan:

> tidak perlu menulis ulang seluruh vertex buffer hanya untuk memindahkan object.

---

# Slide 41 — Animasi dengan Transform Matrix

Setiap frame:

```text
Time
 ↓
Update Angle
 ↓
Build Rotation Matrix
 ↓
Send Uniform
 ↓
Draw
```

Ini adalah dasar animasi transformasi real-time.

---

# Slide 42 — Interaksi User

Input dapat mengubah:

- translation,
- rotation,
- scaling.

Contoh:

```text
Arrow Key → Translate
A / D     → Rotate
+ / -     → Scale
```

Transformasi diproses melalui matrix.

---

# Slide 43 — Pipeline Pertemuan 3

```text
Local Vertex
    ↓
Model Matrix
    ↓
World Position
    ↓
Vertex Shader Output
    ↓
Rasterization
    ↓
Fragment Shader
```

Fokus P3:

# Local → World

---

# Slide 44 — Preview Pertemuan 4

Setelah object berada di World Space:

```text
World
 ↓
View Matrix
 ↓
View Space
 ↓
Projection Matrix
 ↓
Clip Space
```

Bagian ini akan menjadi fokus Pertemuan 4.

---

# Slide 45 — Praktikum: Interactive Transformation

Mahasiswa mengembangkan program WebGL menjadi object yang dapat:

- translation,
- rotation,
- scaling,
- menggabungkan beberapa transformasi,
- berubah melalui input pengguna,
- dianimasikan dengan `requestAnimationFrame()`.

Fokus:

> matrix-based transformation.

---

# Slide 46 — Rencana Praktikum

Tahapan ringkas:

```text
1. Gunakan geometry P2
2. Tambahkan matrix utility
3. Buat Translation Matrix
4. Buat Rotation Matrix
5. Buat Scaling Matrix
6. Gabungkan menjadi Model Matrix
7. Kirim melalui uniform
8. Tambahkan animation
9. Tambahkan keyboard/mouse control
```

Detail teknis disediakan pada modul praktikum.

---

# Slide 47 — Output Praktikum

Aplikasi minimal:

- satu object dengan Model Matrix,
- translation interaktif,
- rotation interaktif,
- scaling interaktif,
- kombinasi transform,
- satu animasi otomatis,
- tampilan parameter transform,
- demonstrasi bahwa transform order menghasilkan hasil berbeda.

---

# Slide 48 — Ringkasan Pertemuan

Konsep utama:

```text
Local Geometry
     ↓
Translation
Rotation
Scaling
     ↓
Matrix
     ↓
Model Matrix
     ↓
World Space
```

Yang harus diingat:

- matrix memudahkan transform composition,
- homogeneous coordinate memungkinkan translation,
- urutan matrix mempengaruhi hasil.

---

# Slide 49 — TERIMA KASIH

# TERIMA KASIH

### Pertemuan Berikutnya

## Camera, Projection & 3D

