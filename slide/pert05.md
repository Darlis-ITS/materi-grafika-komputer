# Grafika Komputer — Pertemuan 5
## Lighting, Shading & Texture pada WebGL

---

# Slide 00 — Cover

EF234504 — Grafika Komputer

## Pertemuan 5

# Lighting, Shading & Texture pada WebGL

**Laboratorium GIGA**

**Departemen Teknik Informatika - ITS** 

---

# Slide 01 — Topik Pembahasan

- Surface Data
- Normal
- Face Normal
- Vertex Normal
- Flat vs Smooth Shading
- Normalization
- Normal Transformation
- Ambient Lighting
- Diffuse Lighting
- Dot Product
- Specular Lighting
- View Direction
- Reflection
- Shininess
- Phong Reflection Model sederhana
- Texture
- UV Coordinate
- Texture Sampling
- Filtering
- Wrapping
- Lighting + Texture
- Praktikum: Textured and Lit Object

---

# Slide 02 — Capaian Pembelajaran

Mahasiswa mampu:

1. menjelaskan fungsi normal pada shading,
2. membedakan face normal dan vertex normal,
3. membedakan flat dan smooth shading,
4. menjelaskan transformasi normal,
5. menjelaskan ambient, diffuse, dan specular,
6. menggunakan dot product pada diffuse lighting,
7. menjelaskan UV coordinate,
8. menjelaskan texture sampling, filtering, dan wrapping,
9. menggabungkan lighting dengan texture,
10. membuat textured and lit object dengan WebGL.

---

# Slide 03 — Posisi Materi

Pertemuan sebelumnya sudah membangun:

```text
Geometry
 ↓ Model
World
 ↓ View
Camera
 ↓ Projection
Screen
```

Sekarang kita fokus pada:

```text
Bagaimana permukaan object terlihat?
```

Dengan:

```text
Normal + Lighting + Texture
```

---

# Slide 04 — Shader Tidak Dijelaskan Ulang

Pada P2 mahasiswa sudah mempelajari:

- GLSL,
- Vertex Shader,
- Fragment Shader,
- attribute,
- uniform,
- `in` / `out`,
- interpolation.

Pada P5 kita langsung menggunakan semuanya untuk:

```text
Surface Appearance
```

---

# Slide 05 — Data Permukaan

Object 3D untuk shading/texture membutuhkan data:

```text
Per Vertex:
Position
Normal
UV
```

Selain itu shader menerima uniform seperti:

```text
Model Matrix
View Matrix
Projection Matrix
Light Position
Camera Position
Texture
```

---

# Slide 06 — Position, Normal, UV

Tiga data penting:

```text
Position
→ di mana permukaan berada

Normal
→ ke arah mana permukaan menghadap

UV
→ bagian texture mana yang digunakan
```

Ketiganya memiliki fungsi berbeda.

---

# Slide 07 — Apa Itu Normal?

**Normal** adalah vector yang tegak lurus terhadap permukaan.

```text
        N
        ↑
────────────── Surface
```

Normal sangat penting untuk menentukan respons permukaan terhadap cahaya.

---

# Slide 08 — Face Normal

Satu face dapat memiliki satu arah normal.

```text
       N
       ↑
       |
   ┌───────┐
   │ Face  │
   └───────┘
```

Face normal memberi tampilan permukaan yang tegas.

---

# Slide 09 — Vertex Normal

Mesh dapat menyimpan normal pada setiap vertex.

Normal antar-vertex kemudian:

```text
diinterpolasi
```

untuk fragment di antaranya.

Hasilnya dapat menghasilkan permukaan yang terlihat halus.

---

# Slide 10 — Flat Shading

Flat shading:

```text
satu normal per face
```

Karakter:

- sisi terlihat jelas,
- cocok untuk low-poly style,
- perubahan lighting antar-face tegas.

---

# Slide 11 — Smooth Shading

Smooth shading:

```text
vertex normal
   ↓
interpolation
   ↓
normal per fragment
```

Karakter:

- transisi pencahayaan lebih halus,
- object polygonal dapat terlihat lebih smooth.

---

# Slide 12 — Flat vs Smooth

| Flat Shading | Smooth Shading |
|---|---|
| normal per face | normal per vertex |
| transisi tegas | transisi halus |
| bentuk polygon terlihat | bentuk terlihat lebih smooth |
| cocok low-poly | cocok permukaan halus |

Geometry dapat sama; normal yang berbeda menghasilkan tampilan berbeda.

---

# Slide 13 — Normal Harus Dinormalisasi

Lighting umumnya membutuhkan unit vector.

Gunakan:

```glsl
vec3 N =
  normalize(v_normal);
```

Panjang normal ideal:

```text
|N| = 1
```

Jika tidak, hasil dot product dapat salah.

---

# Slide 14 — Normal Ikut Transformasi

Ketika object:

- rotate,
- scale,

arah normal juga harus berubah.

Normal tidak selalu dapat ditransformasikan sama seperti position.

Ini terutama penting pada:

```text
non-uniform scaling
```

---

# Slide 15 — Normal Matrix

Untuk kasus umum, normal menggunakan transformasi yang berkaitan dengan:

```text
inverse transpose
```

dari bagian linear Model Matrix.

Secara konsep:

```text
Local Normal
   ↓
Normal Matrix
   ↓
World/View Normal
```

---

# Slide 16 — Mengapa Lighting Dibutuhkan?

Tanpa lighting, object sering terlihat:

```text
flat
```

Lighting membantu memberikan petunjuk:

- bentuk,
- arah permukaan,
- kedalaman,
- posisi sumber cahaya,
- karakter material sederhana.

---

# Slide 17 — Model Lighting Sederhana

Untuk pengantar:

```text
Ambient
+
Diffuse
+
Specular
```

Ketiga komponen memberi efek berbeda.

Ini dikenal sebagai model refleksi klasik sederhana.

---

# Slide 18 — Arah Cahaya

Untuk point light:

```text
L =
normalize(
  LightPosition -
  SurfacePosition
)
```

`L` adalah arah dari surface menuju sumber cahaya.

---

# Slide 19 — Ambient Lighting

Ambient adalah cahaya dasar sederhana.

```text
Ambient =
AmbientStrength
× BaseColor
```

Karakter:

- tidak bergantung normal,
- tidak bergantung arah cahaya,
- menjaga sisi gelap tetap terlihat.

---

# Slide 20 — Keterbatasan Ambient

Ambient pada model ini:

- bukan simulasi global illumination,
- tidak memperhitungkan pantulan dunia nyata,
- hanya pendekatan sederhana.

Tujuan pembelajaran:

> memahami komponen dasar sebelum model material yang lebih kompleks.

---

# Slide 21 — Diffuse Lighting

Diffuse bergantung pada sudut antara:

```text
Surface Normal
dan
Light Direction
```

Semakin menghadap cahaya:

```text
surface semakin terang
```

---

# Slide 22 — Dot Product

Diffuse memakai:

```text
dot(N, L)
```

Interpretasi:

```text
N dan L searah   → ≈ 1
tegak lurus      → ≈ 0
berlawanan arah  → < 0
```

---

# Slide 23 — Rumus Diffuse

```text
diff =
max(
  dot(N, L),
  0
)
```

Kemudian:

```text
Diffuse =
diff
× LightColor
× BaseColor
```

`max(...,0)` mencegah cahaya negatif.

---

# Slide 24 — Visual Diffuse

```text
Light
  ↘

    N
    ↑
  ┌──────┐
  │ Face │
  └──────┘
```

Jika N lebih sejajar dengan L:

```text
dot(N,L) meningkat
```

dan diffuse semakin kuat.

---

# Slide 25 — Specular Lighting

Specular menghasilkan:

```text
highlight
```

Dipengaruhi oleh:

- normal,
- arah cahaya,
- arah camera,
- shininess.

Specular membantu menunjukkan karakter permukaan mengkilap.

---

# Slide 26 — View Direction

Arah dari surface menuju camera:

```text
V =
normalize(
  CameraPosition -
  SurfacePosition
)
```

`V` diperlukan untuk menentukan seberapa dekat pantulan cahaya menuju pengamat.

---

# Slide 27 — Reflection Direction

Salah satu pendekatan:

```glsl
reflect()
```

Konsep:

```text
Incoming Light
     ↓
Surface
     ↓
Reflection Direction
```

Kemudian dibandingkan dengan View Direction.

---

# Slide 28 — Specular Strength

Secara sederhana:

```text
spec =
pow(
  max(dot(R,V), 0),
  shininess
)
```

Semakin dekat reflection direction dengan view direction:

```text
highlight semakin kuat
```

---

# Slide 29 — Shininess

Nilai kecil:

```text
highlight lebar
```

Nilai besar:

```text
highlight sempit dan tajam
```

Shininess bukan roughness fisik, tetapi parameter model klasik.

---

# Slide 30 — Lighting Gabungan

```text
Final Lighting
=
Ambient
+
Diffuse
+
Specular
```

Kemudian dikombinasikan dengan warna permukaan.

---

# Slide 31 — Phong Reflection Model Sederhana

Model konseptual:

```text
Ambient
+
Diffuse
+
Specular
```

Tujuannya:

> memahami hubungan normal, light, camera, dan surface color.

Ini bukan PBR.

---

# Slide 32 — Per-Vertex vs Per-Fragment Lighting

Lighting dapat dihitung:

### Per Vertex
- lebih sedikit perhitungan,
- hasil dapat lebih kasar.

### Per Fragment
- hasil lebih halus,
- komputasi lebih banyak.

Pada praktikum, fokus dapat menggunakan per-fragment lighting.

---

# Slide 33 — Data Lighting yang Dikirim ke Fragment Shader

Contoh alur:

```text
Vertex Shader
├── transformed normal
├── surface position
└── UV
        ↓
Interpolation
        ↓
Fragment Shader
├── Lighting
└── Texture
```

Shader digunakan sebagai alat implementasi konsep yang sudah dipahami.

---

# Slide 34 — Apa Itu Texture?

Texture adalah image yang dipetakan ke permukaan object.

```text
Image
 ↓
Texture
 ↓
3D Surface
```

Texture memberi detail visual tanpa menambah banyak geometry.

---

# Slide 35 — Texture Coordinate

Texture Coordinate disebut juga:

# UV Coordinate

Menggunakan:

```text
U
V
```

Rentang umum:

```text
0 → 1
```

---

# Slide 36 — UV Space

```text
V
↑
1 ┌────────────┐
  │  Texture   │
0 └────────────┘ → U
  0            1
```

Setiap vertex dapat memiliki UV tertentu.

---

# Slide 37 — UV pada Triangle

Contoh:

```text
Vertex A → UV (0,0)
Vertex B → UV (1,0)
Vertex C → UV (0,1)
```

Nilai UV di antara vertex:

```text
diinterpolasi
```

untuk setiap fragment.

---

# Slide 38 — UV sebagai Vertex Attribute

Pada Vertex Shader:

```glsl
in vec2 a_texCoord;
out vec2 v_texCoord;
```

Lalu:

```glsl
v_texCoord = a_texCoord;
```

Fragment Shader menerima hasil interpolation.

---

# Slide 39 — Texture Sampler

Fragment Shader menggunakan:

```glsl
uniform sampler2D u_texture;
```

Sampler merepresentasikan texture yang sedang digunakan shader.

Texture unit dan binding diatur dari JavaScript/WebGL.

---

# Slide 40 — Texture Sampling

Fragment Shader mengambil warna texture:

```glsl
vec4 texColor =
  texture(
    u_texture,
    v_texCoord
  );
```

Proses ini disebut:

# Texture Sampling

---

# Slide 41 — Texel

**Texel** adalah elemen data pada texture image.

Konsep:

```text
Pixel  → elemen image/framebuffer
Texel  → elemen texture
```

Satu fragment mengambil atau menginterpolasi nilai dari texel.

---

# Slide 42 — Texture Filtering

Ketika texture diperbesar atau diperkecil, GPU menentukan bagaimana texel digunakan.

Contoh:

```text
NEAREST
LINEAR
```

Filtering mempengaruhi tampilan texture.

---

# Slide 43 — NEAREST vs LINEAR

### NEAREST

- memilih texel terdekat,
- tajam,
- dapat terlihat pixelated.

### LINEAR

- melakukan interpolation,
- transisi lebih halus.

Keduanya berguna pada gaya visual berbeda.

---

# Slide 44 — Texture Wrapping

Jika UV berada di luar:

```text
0 → 1
```

mode wrapping dapat digunakan:

```text
REPEAT
CLAMP_TO_EDGE
MIRRORED_REPEAT
```

Wrapping menentukan perilaku di luar batas texture.

---

# Slide 45 — Lighting + Texture

Texture memberikan:

```text
Base Color
```

Lighting memberikan:

```text
Light Contribution
```

Gabungan sederhana:

```text
Textured Base Color
×
Lighting
```

---

# Slide 46 — Praktikum: Textured and Lit Object

Mahasiswa mengembangkan cube dari P4 dengan:

- normal,
- UV,
- texture,
- ambient,
- diffuse,
- specular,
- light position,
- camera-aware specular,
- animated rotation.

Objek P4 digunakan kembali agar progres antar-pertemuan jelas.

---

# Slide 47 — Rencana Praktikum

Tahapan ringkas:

```text
1. Tambahkan Normal Data
2. Tambahkan UV Data
3. Buat Buffer Normal dan UV
4. Load & Bind Texture
5. Texture Sampling
6. Hitung Ambient
7. Hitung Diffuse
8. Hitung Specular
9. Gabungkan Lighting + Texture
10. Tambahkan Light Control
```

Detail teknis ada di modul praktikum.

---

# Slide 48 — Ringkasan Pertemuan

Benang merah:

```text
Geometry
 ↓
Position + Normal + UV
 ↓
Vertex Shader
 ↓
Interpolation
 ↓
Fragment Shader
├── Texture Sampling
├── Ambient
├── Diffuse
└── Specular
 ↓
Final Surface Color
```

---

# Slide 49 — TERIMA KASIH

# TERIMA KASIH

### Materi Selanjutnya

## Introduction to Three.js
