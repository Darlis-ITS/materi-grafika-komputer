# Grafika Komputer — Pertemuan 14
## Unity Shader Graph

---

# Slide 00 — Cover

EF234504 — Grafika Komputer

## Pertemuan 14

# Unity Shader Graph

**Laboratorium GIGA**

**Departemen Teknik Informatika - ITS**

---

# Slide 01 — Topik Pembahasan

Pada pertemuan ini kita membahas:

1. **Konsep Shader pada Real-Time Graphics**
2. **Shader Graph dan Node-Based Shader**
3. **Vertex dan Fragment Processing**
4. **UV, Normal, Texture, Color, dan Time**
5. **Math Node pada Shader Graph**
6. **Emission Shader**
7. **Dissolve Shader**
8. **Animated Surface Shader**
9. **Integrasi Shader ke Scene URP**
10. **Praktikum: Membuat Minimal Tiga Custom Shader**

---

# Slide 02 — Capaian Pembelajaran Pertemuan

Setelah mengikuti pertemuan ini, mahasiswa diharapkan mampu:

- menjelaskan fungsi shader dalam real-time rendering,
- memahami perbedaan pemrosesan vertex dan fragment,
- memahami konsep node-based shader,
- menggunakan UV, normal, texture, color, dan time,
- menggunakan node matematika dasar,
- membuat shader emission,
- membuat shader dissolve,
- membuat shader animated surface,
- mengintegrasikan shader ke material URP,
- mengevaluasi dampak shader terhadap visual dan performa.

---

# Slide 03 — Posisi Pertemuan 14

```text
P9
Blender Modeling
   ↓
P10
UV + Texturing
   ↓
P11
Lighting + Rendering
   ↓
P12
Unity + URP
   ↓
P13
Lighting + Material + Post FX
   ↓
P14
SHADER GRAPH
   ↓
P15
VFX + Optimization
   ↓
P16
UAS
```

Pertemuan 14 menambahkan:

> **custom visual behavior pada surface.**

---

# Slide 04 — Dari Shader ke Shader Graph

Konsep shader telah dipelajari pada WebGL.

Pada Unity Shader Graph:

```text
Shader Logic
↓
Visual Nodes
↓
Connections
↓
Compiled Shader
```

P14 tidak mengulang GLSL; fokus pada node-based shader authoring.

---

# Slide 05 — Mengapa Shader Graph?

Shader Graph membantu membuat shader tanpa harus menulis seluruh kode shader secara manual.

Keuntungan:

- visual,
- interaktif,
- preview langsung,
- mudah bereksperimen,
- cocok untuk pembelajaran,
- terintegrasi dengan URP.

---

# Slide 06 — Node-Based Programming

Shader Graph menggunakan node sebagai unit operasi.

Contoh:

```text
Texture
   ↓
Multiply
   ↓
Color
   ↓
Base Color
```

Setiap edge membawa data dari satu node ke node lain.

---

# Slide 07 — Tipe Data pada Shader Graph

Data umum:

- Float
- Vector2
- Vector3
- Vector4
- Color
- Texture2D
- Boolean-like control
- Matrix pada kebutuhan tertentu

Pemilihan tipe data penting agar koneksi node valid.

---

# Slide 08 — Blackboard

Blackboard digunakan untuk mendefinisikan property shader.

Contoh property:

```text
BaseColor
Texture
Speed
DissolveAmount
EmissionStrength
Tiling
```

Property dapat diekspos ke Material Inspector.

---

# Slide 09 — Exposed Property

Property yang di-expose memungkinkan nilainya diubah dari material.

Contoh:

```text
Shader Graph
Speed Property
    ↓
Material Inspector
    ↓
Speed = 0.5 / 1 / 2
```

Keuntungan:

> satu shader dapat digunakan dengan banyak variasi material.

---

# Slide 10 — Master Stack / Output

Output Shader Graph menentukan hasil akhir shader.

Contoh input penting:

- Base Color,
- Normal,
- Metallic,
- Smoothness,
- Emission,
- Alpha,
- Alpha Clip Threshold.

Output menentukan:

> bagaimana surface akhirnya dirender.

---

# Slide 11 — Surface Shader pada URP

Dalam URP, surface dapat memiliki sifat seperti:

- Lit,
- Unlit,
- Opaque,
- Transparent.

Pemilihan mode harus sesuai kebutuhan efek.

---

# Slide 12 — Lit vs Unlit

## Lit

Bereaksi terhadap lighting.

Cocok untuk:

- material umum,
- environment,
- props.

## Unlit

Tidak bergantung pada lighting utama.

Cocok untuk:

- UI-like surface,
- stylized glow,
- special visual.

---

# Slide 13 — Opaque vs Transparent

## Opaque

Permukaan solid.

## Transparent

Memungkinkan background terlihat.

Transparency biasanya:

- lebih kompleks,
- lebih mahal,
- memerlukan perhatian terhadap sorting.

Gunakan hanya bila diperlukan.

---

# Slide 14 — Vertex Stage

Vertex stage memproses data setiap vertex.

Contoh:

- position,
- normal,
- tangent,
- UV.

Vertex shader dapat digunakan untuk:

- displacement,
- waving,
- deformation,
- animation ringan.

---

# Slide 15 — Fragment Stage

Fragment stage menentukan hasil warna untuk setiap fragment/pixel.

Contoh tugas:

- sampling texture,
- color adjustment,
- emission,
- alpha,
- dissolve mask.

---

# Slide 16 — UV Coordinate

UV adalah koordinat 2D pada surface mesh.

```text
U
→ horizontal

V
→ vertical
```

UV digunakan untuk:

- texture sampling,
- procedural pattern,
- scrolling texture,
- dissolve mask.

---

# Slide 17 — Tiling

Tiling mengatur berapa kali texture diulang.

Contoh:

```text
UV × 1
→ normal

UV × 2
→ 2x repetition

UV × 4
→ lebih rapat
```

---

# Slide 18 — Time Node

Time Node menyediakan nilai waktu yang berubah saat aplikasi berjalan.

Contoh:

```text
Time
   ↓
Multiply Speed
   ↓
Add to UV
   ↓
Animated Texture
```

---

# Slide 19 — Animated UV

Formula konsep:

```text
UV'
=
UV
+
Time × Speed
```

Hasil:

> texture tampak bergerak di atas surface.

---

# Slide 20 — Sine Wave

Node `Sine` menghasilkan gelombang periodik.

Konsep:

```text
Time
  ↓
Sine
  ↓
-1 ... +1
```

Cocok untuk:

- pulsing,
- blinking,
- wave,
- oscillation.

---

# Slide 21 — Remap Nilai

Kadang hasil Sine:

```text
-1 sampai +1
```

perlu diubah menjadi:

```text
0 sampai 1
```

Contoh konsep:

```text
sin(x) × 0.5 + 0.5
```

Ini penting untuk kontrol brightness atau mask.

---

# Slide 22 — Multiply

Multiply adalah salah satu node paling penting.

Contoh penggunaan:

```text
Texture × Color

Emission × Strength

Noise × Mask

Time × Speed
```

---

# Slide 23 — Lerp

Lerp melakukan interpolasi antara dua nilai.

```text
A
B
T
```

Jika:

```text
T = 0
→ A

T = 1
→ B
```

---

# Slide 24 — Step

Step menghasilkan transisi keras berdasarkan threshold.

Konsep:

```text
Value < Threshold
→ 0

Value >= Threshold
→ 1
```

Cocok untuk:

- binary mask,
- hard dissolve edge.

---

# Slide 25 — Smoothstep

Smoothstep menghasilkan transisi yang lebih halus.

Cocok untuk:

- soft mask,
- smooth border,
- gradient transition.

---

# Slide 26 — Clamp / Saturate

Clamp membatasi nilai.

Contoh:

```text
0 ≤ value ≤ 1
```

Sangat berguna untuk:

- mask,
- color,
- alpha,
- normalized control.

---

# Slide 27 — Texture Sampling

Texture2D dibaca melalui:

> **Sample Texture 2D**

Input utama:

- Texture,
- UV.

Output dapat berupa:

- RGBA,
- channel individual.

---

# Slide 28 — Object Space dan World Space

Shader sering bekerja dengan koordinat berbeda:

- Object Space,
- World Space,
- View Space,
- Tangent Space.

Kesalahan ruang koordinat dapat menyebabkan:

> hasil arah atau gerakan yang salah.

---

# Slide 29 — Emission Shader

Emission membuat surface terlihat memancarkan cahaya secara visual.

Konsep:

```text
Color
×
Emission Strength
→
Emission
```

Cocok untuk:

- lampu,
- monitor,
- neon,
- hologram,
- sci-fi panel.

---

# Slide 30 — Dissolve Shader

Dissolve membuat bagian surface menghilang berdasarkan mask.

Konsep utama:

```text
Noise
  ↓
Compare with Threshold
  ↓
Alpha Clip
```

---

# Slide 31 — Noise sebagai Mask

Noise menghasilkan pola tidak beraturan.

Nilai:

```text
0 ... 1
```

Noise cocok untuk:

- dissolve,
- smoke-like mask,
- procedural variation.

---

# Slide 32 — Dissolve Threshold

Property:

```text
DissolveAmount
0 → terlihat penuh
1 → hilang
```

Secara konsep:

```text
Noise
vs
Threshold
```

menentukan bagian yang terlihat.

---

# Slide 33 — Alpha Clipping

Alpha Clipping membuang fragment berdasarkan threshold.

Konsep:

```text
Alpha < Clip Threshold
→ discard

Alpha >= Clip Threshold
→ render
```

Cocok untuk:

- dissolve,
- foliage,
- cutout.

---

# Slide 34 — Dissolve Edge

Dissolve yang menarik biasanya memiliki edge.

Konsep:

```text
Noise
Threshold
Edge Width
   ↓
Edge Mask
   ↓
Emission Color
```

Edge dapat dibuat bercahaya.

---

# Slide 35 — Animated Surface Shader

Animated surface membuat pattern atau texture bergerak.

Contoh:

- flowing energy,
- conveyor texture,
- hologram lines,
- water-like motion,
- scanning effect.

---

# Slide 36 — Scrolling Texture

Konsep:

```text
UV
+
Time × Speed
=
Animated UV
```

Kemudian:

```text
Animated UV
→ Sample Texture
```

---

# Slide 37 — Animated Surface + Emission

Gabungkan:

```text
Scrolling Texture
      ↓
Multiply Color
      ↓
Multiply Strength
      ↓
Emission
```

Hasil cocok untuk:

- energy panel,
- magic surface,
- animated display.

---

# Slide 38 — Vertex Animation

Shader juga dapat memindahkan vertex.

Contoh:

```text
Position
+
Normal × Offset
```

atau:

```text
Position Y
+
Sine(Time + Position X)
```

---

# Slide 39 — Wave Effect

Konsep wave:

```text
Position
+
Sine(Time + Position)
×
Amplitude
```

Cocok untuk:

- flag,
- water plane sederhana,
- grass,
- energy surface.

---

# Slide 40 — Amplitude dan Frequency

Dua parameter penting:

## Amplitude

Seberapa besar displacement.

## Frequency

Seberapa rapat gelombang.

Tambahkan:

## Speed

Seberapa cepat animasi.

---

# Slide 41 — Vertex Density

Vertex animation bergantung pada jumlah vertex.

Plane dengan sedikit vertex:

> wave terlihat kaku.

Plane dengan cukup subdivision:

> deformasi lebih halus.

Shader tidak dapat membuat vertex baru secara otomatis pada workflow dasar.

---

# Slide 42 — Shader Property Design

Shader yang baik memiliki property yang jelas.

Contoh:

```text
BaseColor
MainTexture
Speed
Strength
DissolveAmount
EdgeColor
EdgeWidth
```

Hindari property dengan nama:

```text
Value1
Value2
Temp
Test
```

---

# Slide 43 — Reusability

Satu shader sebaiknya dapat digunakan pada banyak material.

Contoh:

```text
Shader: SG_EmissionPulse

Material A
Blue Neon

Material B
Red Alarm

Material C
Green Terminal
```

---

# Slide 44 — Debugging Shader Graph

Jika hasil salah:

1. periksa Preview,
2. periksa property,
3. periksa tipe data,
4. periksa UV,
5. periksa nilai terlalu besar/kecil,
6. periksa Surface Type,
7. periksa Alpha Clipping,
8. periksa material.

---

# Slide 45 — Preview Node

Preview membantu mengisolasi masalah.

Contoh:

```text
Noise
→ preview

Mask
→ preview

Final Color
→ preview
```

Jangan hanya melihat output akhir.

---

# Slide 46 — Shader dan Performance

Shader visual menarik dapat menambah cost.

Faktor:

- banyak texture sample,
- banyak operasi math,
- transparency,
- overdraw,
- complex fragment processing.

Shader sederhana tetap dapat terlihat baik jika desain visualnya tepat.

---

# Slide 47 — Praktikum: Custom Shader

Mahasiswa membuat minimal:

```text
1. Emission Pulse Shader
2. Dissolve Shader
3. Animated Surface Shader
```

Ketiga shader harus diterapkan pada scene hasil Pertemuan 13.

Fokus:

> pemahaman node dan aliran data, bukan hanya menyalin graph.

---

# Slide 48 — Rencana Praktikum

```text
1. Create Shader Graph
2. Define Blackboard Properties
3. Build Emission Pulse
4. Build Dissolve
5. Add Dissolve Edge
6. Build Animated Surface
7. Optional Vertex Wave
8. Create Material Instances
9. Apply to P13 Scene
10. Test Parameters
```

Detail teknis tersedia pada modul praktikum.

---

# Slide 49 — Ringkasan Pertemuan

Benang merah:

```text
Input Data
↓
Node Operations
↓
Vertex / Fragment Stage
↓
Custom Surface Behavior
↓
Reusable Material
```

Fokus P14: Blackboard, Master Stack, UV, Time, math node, emission, dissolve, animated surface, dan vertex animation.

---

# Slide 50 — TERIMA KASIH

# TERIMA KASIH

### Materi Selanjutnya

## VFX, Particle & Graphics Optimization
