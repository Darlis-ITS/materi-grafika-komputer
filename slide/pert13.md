# Grafika Komputer — Pertemuan 13
## Unity Lighting, Material & Post Processing

---

# Slide 00 — Cover

EF234504 — Grafika Komputer

## Pertemuan 13

# Unity Lighting, Material & Post Processing

**Laboratorium GIGA**

**Departemen Teknik Informatika - ITS**

---

# Slide 01 — Topik Pembahasan

Pada pertemuan ini kita membahas:

1. **Lighting pada real-time rendering**
2. **Directional Light, Point Light, dan Spot Light**
3. **Real-Time, Baked, dan Mixed Lighting**
4. **Shadow dan Lightmap**
5. **Material pada Unity URP**
6. **Environment Lighting**
7. **Post Processing pada URP**
8. **Bloom, Color Adjustments, Tonemapping, Depth of Field, dan Ambient Occlusion**
9. **Praktikum Bright/Day vs Dark/Night Scene**

---

# Slide 02 — Capaian Pembelajaran Pertemuan

Setelah mengikuti pertemuan ini, mahasiswa diharapkan mampu:

- menjelaskan peran lighting dalam real-time rendering,
- membedakan Directional, Point, dan Spot Light,
- membedakan real-time, baked, dan mixed lighting,
- menjelaskan fungsi shadow dan lightmap,
- menyesuaikan material URP agar bereaksi terhadap lighting dengan benar,
- menggunakan post-processing secara terarah,
- membangun dua suasana visual berbeda dari scene yang sama,
- mengevaluasi trade-off antara kualitas visual dan performa.

---

# Slide 03 — Posisi Pertemuan 13

```text
P9
Blender Modeling
   ↓
P10
UV + Texturing
   ↓
P11
Blender Lighting + Rendering
   ↓
P12
Unity + URP + Asset Import
   ↓
P13
LIGHTING + MATERIAL + POST FX
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

Pertemuan 13 mengubah scene hasil Pertemuan 12 menjadi:

> **scene real-time yang memiliki suasana visual dan pencahayaan yang terarah.**

---

# Slide 04 — Mengapa Lighting Penting?

Tanpa lighting yang baik, bentuk 3D sulit dibaca.

Lighting membantu menunjukkan:

- volume,
- kedalaman,
- arah permukaan,
- material,
- posisi object,
- mood,
- fokus visual.

Secara sederhana:

```text
Geometry
+
Material
+
Light
+
Camera
=
Rendered Appearance
```

---

# Slide 05 — Lighting Bukan Sekadar Membuat Scene Terang

Lighting memiliki fungsi visual:

```text
Visibility
+
Shape
+
Depth
+
Focus
+
Mood
+
Story
```

Scene yang terlalu terang belum tentu baik.

Scene yang gelap juga belum tentu dramatis.

Tujuan lighting:

> **membuat informasi visual mudah dibaca dan mendukung suasana scene.**

---

# Slide 06 — Lighting dalam Real-Time Pipeline

```text
Scene Geometry
      ↓
Material Properties
      ↓
Light Information
      ↓
Shadow
      ↓
Shading
      ↓
Post Processing
      ↓
Final Frame
```

Lighting tidak berdiri sendiri.

Hasil akhirnya selalu dipengaruhi oleh:

- geometry,
- normal,
- material,
- camera,
- environment,
- render pipeline.

---

# Slide 07 — Tiga Light Utama yang Dipelajari

Pertemuan ini fokus pada:

```text
Directional Light
Point Light
Spot Light
```

Ketiganya memiliki karakter berbeda:

- arah,
- jangkauan,
- bentuk pengaruh,
- penggunaan,
- biaya rendering.

---

# Slide 08 — Directional Light

Directional Light mensimulasikan sumber cahaya yang sangat jauh.

Contoh konsep:

> matahari.

Karakteristik:

- memiliki arah,
- posisi relatif tidak menjadi faktor utama,
- menerangi area scene secara luas,
- cocok sebagai main outdoor light.

---

# Slide 09 — Sudut Matahari

Sudut Directional Light memengaruhi suasana.

## Matahari tinggi

- shadow lebih pendek,
- kesan siang,
- lighting relatif merata.

## Matahari rendah

- shadow lebih panjang,
- bentuk lebih dramatis,
- cocok untuk pagi/sore.

---

# Slide 10 — Intensitas dan Warna Directional Light

Dua parameter visual penting:

- **Intensity**
- **Color**

Contoh:

```text
Day
→ warna relatif netral

Late Afternoon
→ lebih hangat

Night / Moon-like
→ lebih dingin dan lemah
```

Gunakan warna dengan terkendali.

---

# Slide 11 — Point Light

Point Light memancarkan cahaya dari satu titik ke berbagai arah.

Konsep:

```text
       ↑
    ↖  |  ↗
← --- LIGHT --- →
    ↙  |  ↘
       ↓
```

Cocok untuk:

- lampu,
- bulb,
- lampu meja,
- sumber cahaya lokal.

---

# Slide 12 — Range pada Point Light

Point Light memiliki area pengaruh.

```text
Light Position
      ↓
   Range
      ↓
Affected Objects
```

Object di luar range:

> tidak mendapat kontribusi cahaya lokal tersebut.

Range terlalu besar dapat membuat scene sulit dikontrol.

---

# Slide 13 — Intensity pada Point Light

Intensity menentukan kuat cahaya.

Jika terlalu rendah:

- object tidak terbaca.

Jika terlalu tinggi:

- permukaan overbright,
- material kehilangan detail,
- bloom dapat berlebihan.

Gunakan intensity bersama:

- range,
- material,
- environment lighting.

---

# Slide 14 — Spot Light

Spot Light memancarkan cahaya ke arah tertentu dalam bentuk cone.

```text
Light
  \
   \
    \   cone
     \________
```

Cocok untuk:

- flashlight,
- lampu panggung,
- headlamp,
- security light,
- spotlight dekoratif.

---

# Slide 15 — Spot Angle

Spot Light memiliki sudut cone.

Sudut kecil:

- cahaya lebih fokus.

Sudut besar:

- area lebih luas.

Gunakan angle sesuai fungsi sumber cahaya.

---

# Slide 16 — Range dan Direction Spot Light

Spot Light dipengaruhi oleh:

- position,
- rotation,
- range,
- angle,
- intensity,
- color.

Tidak seperti Point Light:

> arah rotasi Spot Light sangat penting.

---

# Slide 17 — Perbandingan Light

| Light | Arah | Posisi Penting | Range Lokal | Contoh |
|---|---|---:|---:|---|
| Directional | Ya | Tidak dominan | Tidak | Matahari |
| Point | Semua arah | Ya | Ya | Bulb |
| Spot | Cone | Ya | Ya | Flashlight |

Pilih light berdasarkan:

> **bentuk sumber cahaya yang ingin disimulasikan.**

---

# Slide 18 — Jangan Menambah Light Tanpa Tujuan

Masalah umum pemula:

```text
Scene gelap
→ tambah lampu
→ masih aneh
→ tambah lampu lagi
→ scene menjadi datar
```

Pendekatan lebih baik:

1. tentukan key/main light,
2. tentukan area yang perlu dibaca,
3. tambahkan local light bila diperlukan,
4. evaluasi shadow,
5. evaluasi material.

---

# Slide 19 — Real-Time Lighting

Real-time lighting dihitung saat aplikasi berjalan.

Keuntungan:

- cocok untuk object bergerak,
- lighting dapat berubah,
- mendukung scene dinamis.

Konsekuensi:

- membutuhkan perhitungan saat runtime,
- harus memperhatikan performa.

---

# Slide 20 — Kapan Real-Time Lighting Cocok?

Gunakan ketika:

- light bergerak,
- light dapat menyala/mati,
- object utama bergerak,
- scene membutuhkan perubahan waktu,
- gameplay mengubah lighting.

Contoh:

```text
flashlight
moving lamp
day/night transition
alarm light
```

---

# Slide 21 — Baked Lighting

Baked lighting menghitung sebagian informasi lighting sebelumnya.

Hasilnya disimpan sehingga tidak seluruh perhitungan dilakukan setiap frame.

Cocok terutama untuk:

> **geometry statis**.

---

# Slide 22 — Ide Dasar Baking

```text
Static Geometry
+
Lights
+
Bake Process
      ↓
Precomputed Lighting Data
      ↓
Runtime
```

Keuntungan utama:

> sebagian informasi lighting sudah tersedia sebelum frame dirender.

---

# Slide 23 — Lightmap

Lightmap adalah texture yang menyimpan informasi lighting untuk permukaan tertentu.

Konsep:

```text
Surface
  ↓
Lightmap UV
  ↓
Precomputed Lighting
  ↓
Texture Data
```

Lightmap menjadi bagian penting dalam baked lighting.

---

# Slide 24 — Lightmap UV

Agar lightmap bekerja dengan baik, object membutuhkan UV yang sesuai.

Lightmap UV idealnya:

- tidak overlap secara tidak diinginkan,
- memiliki island yang cukup,
- memberi ruang antar-island.

UV texture dan UV lightmap memiliki tujuan berbeda.

---

# Slide 25 — Mixed Lighting

Mixed Lighting menggabungkan pendekatan:

```text
Baked
+
Real-Time
```

Tujuannya:

> memanfaatkan precomputed lighting untuk bagian tertentu, sambil tetap mendukung kebutuhan dynamic lighting.

---

# Slide 26 — Kapan Mixed Lighting Berguna?

Contoh scene:

- environment sebagian besar statis,
- player bergerak,
- beberapa object bergerak,
- sebagian lighting tetap,
- shadow tertentu masih diperlukan secara dinamis.

Mixed Lighting adalah:

> kompromi antara fleksibilitas dan efisiensi.

---

# Slide 27 — Real-Time vs Baked vs Mixed

| Mode | Dinamis | Precomputed | Cocok untuk |
|---|---:|---:|---|
| Real-Time | Tinggi | Rendah | Scene dinamis |
| Baked | Rendah | Tinggi | Environment statis |
| Mixed | Sedang | Sedang/Tinggi | Kombinasi |

Tidak ada satu pilihan yang selalu terbaik.

---

# Slide 28 — Shadow

Shadow membantu menunjukkan:

- posisi,
- jarak,
- kontak dengan ground,
- arah cahaya,
- bentuk.

Tanpa shadow yang tepat, object dapat terlihat:

> **melayang atau tidak menyatu dengan environment.**

---

# Slide 29 — Cast dan Receive Shadow

Dua konsep sederhana:

## Cast Shadow

Object menghasilkan bayangan.

## Receive Shadow

Permukaan menerima bayangan.

Contoh:

```text
Character
→ Cast

Ground
→ Receive
```

---

# Slide 30 — Shadow Distance

Tidak semua shadow harus dirender tanpa batas.

Shadow Distance menentukan seberapa jauh shadow dipertahankan dari camera.

Tujuannya:

> menjaga kualitas visual tanpa membayar cost yang tidak diperlukan terlalu jauh.

---

# Slide 31 — Shadow Resolution

Resolusi shadow memengaruhi ketajaman.

Resolusi rendah:

- lebih ringan,
- tepi lebih kasar.

Resolusi tinggi:

- lebih detail,
- membutuhkan resource lebih banyak.

Gunakan sesuai target visual.

---

# Slide 32 — Contact dan Grounding

Tujuan shadow bukan hanya dekorasi.

Shadow yang baik memberi:

```text
Object
   ↓
Contact
   ↓
Ground
```

Ini disebut visual grounding:

> object terasa benar-benar berada dalam scene.

---

# Slide 33 — Material Response pada P13

Material PBR sudah dipelajari pada Pertemuan 10.

Pada P13 fokusnya bukan menjelaskan ulang PBR, tetapi mengevaluasi bagaimana material Unity URP merespons:

- Directional / Point / Spot Light,
- environment,
- shadow,
- emission,
- post-processing.

---

# Slide 34 — URP Lit Material

Untuk material yang bereaksi terhadap lighting, gunakan material/shader yang sesuai dengan URP.

Konsep dasarnya:

```text
Surface Properties
+
Light
+
View Direction
=
Shaded Result
```

---

# Slide 35 — Environment Lighting

Object tidak hanya dipengaruhi direct light.

Scene juga membutuhkan ambient/environment contribution agar area yang tidak terkena cahaya langsung tidak selalu menjadi hitam.

Environment membantu:

- fill lighting,
- warna suasana,
- integrasi scene.

---

# Slide 36 — Day Environment

Day scene umumnya memiliki:

- Directional Light dominan,
- environment relatif terang,
- shadow jelas,
- warna natural,
- kontras terkontrol.

Tujuan:

> scene mudah dibaca dengan kesan terang dan terbuka.

---

# Slide 37 — Night Environment

Night scene bukan sekadar:

```text
Day Scene
×
Brightness 0.1
```

Night scene membutuhkan keputusan visual:

- key light lebih lemah,
- local lights lebih penting,
- area gelap tetap perlu terbaca,
- highlight menjadi focal point,
- warna dapat lebih dingin.

---

# Slide 38 — Lighting Hierarchy

Pikirkan lighting sebagai hierarchy:

```text
Primary Light
     ↓
Secondary / Local Lights
     ↓
Environment Fill
     ↓
Accent
```

Tidak semua lampu harus sama kuat.

Hierarchy membantu menjaga:

> fokus visual.

---

# Slide 39 — Post Processing

Post Processing adalah proses setelah scene utama dirender.

Konsep:

```text
Rendered Scene
     ↓
Post Processing
     ↓
Final Image
```

Post-processing dapat mengubah:

- tone,
- warna,
- highlight,
- depth cue,
- mood.

---

# Slide 40 — Volume pada URP

Efek post-processing biasanya dikonfigurasi menggunakan sistem Volume.

Konsep:

```text
Volume
  ↓
Profile
  ↓
Overrides
  ↓
Bloom
Color Adjustments
Tonemapping
Depth of Field
...
```

---

# Slide 41 — Bloom

Bloom menghasilkan glow pada area yang sangat terang.

Cocok untuk:

- lampu,
- neon,
- emissive material,
- highlight tertentu.

Bloom membantu menekankan:

> **brightness energy**.

---

# Slide 42 — Color Adjustments

Color Adjustments digunakan untuk mengatur karakter warna keseluruhan.

Parameter dapat digunakan untuk mengubah aspek seperti:

- exposure,
- contrast,
- color filter,
- hue/saturation.

Gunakan untuk:

> final balancing, bukan memperbaiki lighting yang salah total.

---

# Slide 43 — Tonemapping

Tonemapping mengubah rentang nilai terang menjadi output yang dapat ditampilkan.

Secara konseptual:

```text
High Dynamic Range
       ↓
Tonemapping
       ↓
Display Range
```

Tujuannya:

> menjaga highlight dan contrast agar tampil lebih terkontrol.

---

# Slide 44 — Depth of Field

Depth of Field membuat bagian tertentu fokus sementara area lain blur.

Komponen visual:

```text
Near
Focus
Far
```

Cocok untuk:

- cinematic shot,
- product-like composition,
- focal emphasis.

---

# Slide 45 — Ambient Occlusion

Ambient Occlusion menambah kesan gelap pada area pertemuan/cekungan tertentu.

Contoh:

- sudut dinding,
- object menyentuh lantai,
- celah sempit,
- area antar-prop.

Efek ini membantu:

> memperkuat depth dan contact.

---

# Slide 46 — Urutan Membangun Look

Workflow yang lebih aman:

```text
1. Pastikan Material Benar
2. Atur Main Light
3. Atur Environment
4. Atur Local Lights
5. Periksa Shadow
6. Periksa Exposure
7. Tambahkan Post FX
8. Fine Tuning
```

Jangan mulai dari Bloom dan Color Filter.

---

# Slide 47 — Praktikum: Day/Night Scene

Gunakan **scene hasil Pertemuan 12**.

Buat dua versi:

```text
P13_Day
P13_Night
```

Keduanya harus menggunakan:

- geometry yang sama,
- material dasar yang konsisten,
- camera composition yang sebanding.

Perbedaan utama berasal dari:

> **lighting, material tuning, environment, dan post-processing.**

---

# Slide 48 — Rencana Praktikum

```text
1. Gunakan scene P12
2. Buat Day Look
3. Buat Night Look
4. Atur shadow
5. Periksa material response
6. Buat Global Volume
7. Tambahkan Bloom
8. Color Adjustments + Tonemapping
9. Gunakan DOF/AO seperlunya
10. Bandingkan hasil
```

Detail teknis tersedia pada modul praktikum.

---

# Slide 49 — Ringkasan Pertemuan

Benang merah:

```text
Scene P12
↓
Lighting Mode
↓
Shadow + Environment
↓
Material Response
↓
Post Processing
↓
Day / Night Look
```

Fokus P13: real-time/baked/mixed lighting, lightmap, shadow, environment, Volume, Bloom, color adjustment, tonemapping, DOF, dan AO.

---

# Slide 50 — TERIMA KASIH

# TERIMA KASIH

### Materi Selanjutnya

## Unity Shader Graph
