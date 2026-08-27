# Modul Praktikum Grafika Komputer --- Pertemuan 10

## Blender Materials, UV & Texturing

**Mata Kuliah:** EF234504 --- Grafika Komputer\
**Pertemuan:** 10\
**Topik:** Blender Materials, UV & Texturing\
**Dosen:** Dr. Darlis Herumurti\
**Departemen:** Teknik Informatika

------------------------------------------------------------------------

# 1. Deskripsi Praktikum

Pada Pertemuan 9 mahasiswa telah membuat geometry asset 3D. Pertemuan 10
melanjutkan asset tersebut dari sisi **surface appearance**.

Alur praktikum:

``` text
3D Model
↓
Model Preparation
↓
Mark Seam
↓
UV Unwrap
↓
UV Island
↓
Checker Test
↓
Distortion & Texel Density Review
↓
Pack UV
↓
Principled BSDF
↓
Base Color
↓
Roughness
↓
Metallic
↓
Normal Map
↓
Emission
↓
Final PBR Material
```

Target akhir adalah satu asset yang mempunyai UV layout yang layak dan
material PBR yang siap digunakan pada tahap **Lighting, Camera &
Rendering**.

------------------------------------------------------------------------

# 2. Capaian Praktikum

Setelah menyelesaikan praktikum, mahasiswa mampu:

1.  menjelaskan hubungan geometry, material, dan texture;
2.  menggunakan Material Properties dan Shader Editor;
3.  menggunakan Principled BSDF;
4.  menjelaskan fungsi UV Mapping;
5.  menentukan seam berdasarkan struktur object;
6.  melakukan Mark Seam;
7.  melakukan Unwrap;
8.  membaca UV layout pada UV Editor;
9.  menjelaskan UV Island;
10. mengidentifikasi UV distortion;
11. menggunakan checker texture untuk evaluasi UV;
12. memperbaiki scale dan orientasi UV Island;
13. mempertimbangkan texel density;
14. melakukan packing UV dengan margin yang layak;
15. menjelaskan overlapping UV;
16. membedakan manual unwrap dan Smart UV Project;
17. menggunakan Image Texture;
18. menghubungkan Base Color Map;
19. menghubungkan Roughness Map;
20. menghubungkan Metallic Map;
21. menghubungkan Normal Map melalui Normal Map node;
22. menggunakan color space yang tepat untuk texture warna dan texture
    data;
23. membuat area Emission;
24. menjelaskan fungsi Emission Map;
25. mengintegrasikan beberapa texture map ke satu material PBR;
26. melakukan final material review.

------------------------------------------------------------------------

# 3. Asset yang Digunakan

Gunakan asset hasil Pertemuan 9.

Contoh:

-   sci-fi crate;
-   toolbox;
-   control panel;
-   robot head;
-   lamp;
-   mechanical prop.

Disarankan menggunakan asset yang memiliki:

-   beberapa bidang dengan orientasi berbeda;
-   detail panel;
-   bevel;
-   beberapa bagian yang memerlukan seam;
-   area metal/non-metal;
-   area yang memungkinkan emission.

Jika asset Pertemuan 9 belum layak, lakukan perbaikan geometry
secukupnya sebelum UV.

------------------------------------------------------------------------

# 4. Konsep: Geometry vs Surface Appearance

Geometry menentukan:

``` text
Shape
Silhouette
Volume
```

Material dan texture menentukan:

``` text
Color
Surface Roughness
Metal Character
Small Surface Detail
Emission
```

Secara konseptual:

``` text
Geometry
+
Material
+
Texture
=
Visible Surface
```

Normal Map dapat membuat detail shading, tetapi tidak menggantikan
geometry yang diperlukan untuk silhouette.

------------------------------------------------------------------------

# 5. Persiapan File

Buka file `.blend` Pertemuan 9.

Simpan sebagai file baru agar versi modeling tetap tersedia:

``` text
P10_NRP_Nama.blend
```

Jangan langsung menimpa file Pertemuan 9.

------------------------------------------------------------------------

# 6. Backup Sebelum UV

Sebelum memulai:

``` text
File
→ Save As
```

Prinsip workflow:

``` text
P09_Modeling.blend
↓
P10_UV_Material.blend
```

Ini memudahkan rollback jika terjadi kesalahan besar.

------------------------------------------------------------------------

# 7. Pemeriksaan Model

Sebelum UV, periksa:

-   object naming;
-   duplicate geometry;
-   normal;
-   modifier;
-   scale;
-   topology;
-   bagian yang memang perlu dipisah menjadi object berbeda.

UV yang baik sulit dicapai jika geometry masih bermasalah.

------------------------------------------------------------------------

# 8. Apply Scale

Pilih object utama.

Periksa transform.

Jika scale bukan:

``` text
1, 1, 1
```

dan bentuk final sudah ditentukan, gunakan:

``` text
Ctrl + A
→ Scale
```

Mengapa?

Karena scale object yang tidak konsisten dapat memengaruhi beberapa
operasi dan menyulitkan evaluasi ukuran surface.

------------------------------------------------------------------------

# 9. Periksa Normal

Masuk Edit Mode:

``` text
Tab
A
Shift + N
```

Tujuan:

> memastikan orientasi normal face konsisten.

Normal geometry berbeda dari **Normal Map**. Geometry normal menentukan
arah permukaan asli; Normal Map memodifikasi arah shading secara visual.

------------------------------------------------------------------------

# 10. Workspace untuk UV

Blender menyediakan workspace:

``` text
UV Editing
```

Umumnya workspace ini menampilkan:

``` text
UV Editor
+
3D Viewport
```

Hubungannya:

``` text
Face pada 3D Viewport
↔
UV Face pada UV Editor
```

Selection pada mesh dapat terlihat pada UV layout.

------------------------------------------------------------------------

# 11. Apa Itu UV Mapping?

Texture image adalah 2D:

``` text
U
V
```

sedangkan model berada di 3D:

``` text
X
Y
Z
```

UV Mapping menentukan bagian image 2D mana yang digunakan oleh setiap
face pada surface.

------------------------------------------------------------------------

# 12. UV Space

UV space utama umumnya:

``` text
U = 0 ... 1
V = 0 ... 1
```

Area ini dapat dibayangkan sebagai satu lembar texture.

``` text
(0,1) ┌──────────┐ (1,1)
      │          │
      │ UV Space │
      │          │
(0,0) └──────────┘ (1,0)
```

------------------------------------------------------------------------

# 13. Seam

Seam adalah edge yang ditandai sebagai lokasi potong saat mesh dibuka ke
2D.

Analogi:

``` text
3D cardboard box
↓
cut selected edges
↓
open / flatten
↓
2D layout
```

Seam bukan geometry baru. Seam adalah informasi yang membantu proses
unwrap.

------------------------------------------------------------------------

# 14. Strategi Seam

Seam yang baik biasanya:

-   berada pada area kurang terlihat;
-   mengikuti perubahan bentuk;
-   memisahkan bagian yang secara logis berbeda;
-   mengurangi stretching;
-   menghasilkan island yang mudah dipahami.

Tujuan bukan membuat seam sesedikit mungkin.

Tujuan:

``` text
reasonable number of seams
+
low distortion
+
manageable islands
```

------------------------------------------------------------------------

# 15. Latihan Seam pada Cube

Buat cube latihan atau duplicate body asset.

Masuk Edit Mode:

``` text
Tab
2
```

Pilih beberapa edge yang akan menjadi garis potong.

Gunakan:

``` text
Ctrl + E
→ Mark Seam
```

Edge seam akan ditandai pada viewport sesuai tampilan Blender.

------------------------------------------------------------------------

# 16. Clear Seam

Jika seam salah:

``` text
Select Edge
Ctrl + E
→ Clear Seam
```

Jangan takut mengubah seam. UV unwrap adalah proses iteratif:

``` text
Mark
↓
Unwrap
↓
Inspect
↓
Revise Seam
↓
Unwrap Again
```

------------------------------------------------------------------------

# 17. Contoh Seam pada Cylinder

Strategi dasar:

``` text
1 seam vertikal pada side
+
seam pemisah top
+
seam pemisah bottom
```

Hasil ideal secara konseptual:

``` text
Side → strip island
Top → circular island
Bottom → circular island
```

Latihan ini membantu memahami bahwa seam menentukan cara surface dibuka.

------------------------------------------------------------------------

# 18. Menentukan Seam Asset Utama

Pada hard-surface asset, identifikasi:

``` text
Front
Back
Top
Bottom
Left
Right
Panel / detail
```

Tentukan seam pada:

-   sisi belakang;
-   sudut yang secara visual sudah menjadi batas;
-   bagian bawah;
-   pertemuan panel;
-   area yang sulit diratakan jika tetap terhubung.

------------------------------------------------------------------------

# 19. Unwrap

Setelah seam dibuat:

``` text
Edit Mode
A
U
→ Unwrap
```

Blender membuat UV Island berdasarkan geometry dan seam.

Buka UV Editor dan periksa hasil.

------------------------------------------------------------------------

# 20. Apa Itu UV Island?

UV Island adalah kelompok face yang masih terhubung di UV space.

Satu object dapat menghasilkan:

``` text
1 island
atau
banyak islands
```

Banyak island bukan otomatis buruk. Yang penting adalah alasan pemisahan
dan kualitas layout.

------------------------------------------------------------------------

# 21. Memilih UV Island

Di UV Editor, selection dapat dipindah, diputar, dan di-scale.

Transform dasar tetap mengikuti pola Blender:

``` text
G
→ Move

R
→ Rotate

S
→ Scale
```

Gunakan transform UV untuk mengatur layout, bukan untuk mengubah
geometry 3D.

------------------------------------------------------------------------

# 22. Hubungan Scale UV dan Detail Texture

Secara umum:

``` text
UV Island lebih besar
→ mendapat lebih banyak area texture
→ potensi detail lebih tinggi

UV Island lebih kecil
→ area texture lebih sedikit
→ detail lebih rendah
```

Inilah dasar pembahasan **texel density**.

------------------------------------------------------------------------

# 23. Checker Texture

Sebelum menggunakan texture final, evaluasi UV dengan pola checker.

Tujuan checker:

-   melihat stretching;
-   melihat compression;
-   membandingkan scale detail;
-   memeriksa orientation.

UV yang sehat cenderung menampilkan checker dengan bentuk dan ukuran
relatif konsisten.

------------------------------------------------------------------------

# 24. Membuat Material Checker

Buat material sementara:

``` text
Material Properties
→ New
```

Buka:

``` text
Shader Editor
```

Principled BSDF dan Material Output akan tersedia.

Untuk checker procedural, tambahkan:

``` text
Shift + A
→ Texture
→ Checker Texture
```

Hubungkan:

``` text
Checker Texture — Color
↓
Principled BSDF — Base Color
```

------------------------------------------------------------------------

# 25. Menggunakan UV untuk Checker

Tambahkan bila diperlukan:

``` text
Texture Coordinate
```

Gunakan output:

``` text
UV
```

ke input Vector Checker Texture.

Alur:

``` text
Texture Coordinate — UV
↓
Checker Texture
↓
Principled BSDF — Base Color
↓
Material Output
```

Checker procedural ini digunakan untuk evaluasi UV. Texture map final
nantinya dapat menggunakan Image Texture.

------------------------------------------------------------------------

# 26. Mendeteksi Distortion

Perhatikan checker.

Masalah:

``` text
Square → Rectangle
```

menunjukkan stretching/compression.

Contoh:

``` text
checker memanjang horizontal
→ UV/surface relation tidak proporsional

checker sangat kecil pada satu area
→ island mendapat texel density lebih tinggi
```

------------------------------------------------------------------------

# 27. Memperbaiki Distortion

Jika distortion besar:

1.  periksa seam;
2.  tambah atau pindahkan seam;
3.  lakukan Unwrap ulang;
4.  periksa bentuk island;
5.  scale/rotate island jika diperlukan;
6.  cek checker lagi.

Jangan hanya memaksa island menjadi bentuk tertentu jika masalah
sebenarnya berasal dari seam.

------------------------------------------------------------------------

# 28. Texel Density

Texel density secara konseptual menunjukkan:

``` text
jumlah pixel texture
per luas surface
```

Dalam praktikum ini tidak perlu menghitung secara matematis.

Evaluasi visual menggunakan checker:

``` text
checker relatif sama ukuran
≈ texel density relatif konsisten
```

------------------------------------------------------------------------

# 29. Kapan Texel Density Boleh Berbeda?

Tidak selalu semua surface harus identik.

Area penting dapat diberi lebih banyak area UV, misalnya:

-   front panel;
-   logo area;
-   control panel;
-   face karakter;
-   detail hero asset.

Namun perbedaan harus disengaja, bukan karena layout tidak terkontrol.

------------------------------------------------------------------------

# 30. Pack UV Islands

Setelah island cukup baik:

``` text
UV
→ Pack Islands
```

Tujuan:

-   memanfaatkan UV space;
-   menjaga margin;
-   mengurangi ruang kosong yang tidak perlu.

Setelah packing, inspeksi kembali ukuran island.

------------------------------------------------------------------------

# 31. Margin antar-Island

Jangan membuat island saling menempel.

Margin diperlukan untuk mengurangi risiko:

``` text
texture bleeding
```

terutama saat texture mengalami filtering atau digunakan pada resolusi
berbeda.

Prinsip:

``` text
efficient packing
≠
zero margin
```

------------------------------------------------------------------------

# 32. Overlapping UV

Overlap berarti dua atau lebih surface menggunakan area UV yang sama.

Ini dapat berguna untuk:

-   bagian identik;
-   detail simetris;
-   texture yang memang ingin dibagi.

Namun jika menggunakan **unique texture**, overlap yang tidak disengaja
harus dihindari.

------------------------------------------------------------------------

# 33. Manual Unwrap vs Smart UV Project

Manual:

``` text
Mark Seam
↓
Unwrap
```

Kelebihan:

-   kontrol tinggi;
-   island lebih terencana.

Smart UV:

``` text
U
→ Smart UV Project
```

Kelebihan:

-   cepat.

Kekurangan:

-   island dapat sangat banyak;
-   layout kurang terkontrol.

Untuk asset utama, utamakan manual unwrap pada bagian penting. Smart UV
boleh digunakan sebagai eksperimen/perbandingan.

------------------------------------------------------------------------

# 34. Eksperimen Smart UV

Duplicate object atau simpan backup.

Metode A:

``` text
Manual Seam + Unwrap
```

Metode B:

``` text
Smart UV Project
```

Bandingkan:

-   jumlah island;
-   bentuk island;
-   distortion;
-   kemudahan memahami layout;
-   packing.

------------------------------------------------------------------------

# 35. Material di Blender

Material menentukan bagaimana surface merespons cahaya.

Pertemuan ini fokus pada:

``` text
Principled BSDF
```

Parameter:

``` text
Base Color
Roughness
Metallic
Normal
Emission
```

------------------------------------------------------------------------

# 36. Principled BSDF

Node utama:

``` text
Principled BSDF
↓
Material Output
```

Principled BSDF menggabungkan parameter material dalam workflow PBR yang
praktis.

Sebelum memasang texture map, ubah parameter secara manual untuk
memahami efeknya.

------------------------------------------------------------------------

# 37. Eksperimen Base Color

Pada Principled BSDF:

``` text
Base Color
```

ubah ke beberapa warna.

Amati:

> Base Color mengubah warna dasar surface, tetapi belum memberikan
> variasi detail spasial seperti image texture.

------------------------------------------------------------------------

# 38. Eksperimen Roughness

Coba:

``` text
Roughness = 0.1
Roughness = 0.5
Roughness = 0.9
```

Secara konsep:

``` text
rendah
→ lebih halus / highlight lebih tajam

tinggi
→ lebih kasar / highlight lebih menyebar
```

Hasil visual juga bergantung pada lighting/environment.

------------------------------------------------------------------------

# 39. Eksperimen Metallic

Coba:

``` text
Metallic = 0
Metallic = 1
```

Contoh:

``` text
Plastic / Wood / Stone
→ non-metal

Steel / Aluminum / Copper
→ metal
```

Material metal memerlukan lingkungan/lighting yang memadai agar karakter
refleksinya terlihat.

------------------------------------------------------------------------

# 40. Image Texture Node

Untuk menggunakan image:

``` text
Shader Editor
Shift + A
→ Texture
→ Image Texture
```

Klik:

``` text
Open
```

kemudian pilih file texture.

------------------------------------------------------------------------

# 41. Struktur Folder Texture

Gunakan struktur yang rapi:

``` text
P10_NRP_Nama/
├── P10_NRP_Nama.blend
└── textures/
    ├── asset_basecolor.png
    ├── asset_roughness.png
    ├── asset_metallic.png
    ├── asset_normal.png
    └── asset_emission.png
```

Nama file dapat berbeda, tetapi harus mudah dipahami.

------------------------------------------------------------------------

# 42. Base Color Map

Tambahkan Image Texture:

``` text
asset_basecolor.png
```

Hubungkan:

``` text
Image Texture — Color
↓
Principled BSDF — Base Color
```

Color Space:

``` text
sRGB
```

karena Base Color merupakan data warna visual.

------------------------------------------------------------------------

# 43. Base Color dan UV

Image Texture membaca koordinat surface melalui UV.

Secara konseptual:

``` text
3D Face
↓
UV Coordinate
↓
Image Pixel
↓
Base Color
```

Jika texture tampak salah posisi, masalah dapat berasal dari UV, bukan
dari image.

------------------------------------------------------------------------

# 44. Roughness Map

Tambahkan:

``` text
asset_roughness.png
```

Hubungkan:

``` text
Image Texture — Color
↓
Principled BSDF — Roughness
```

Set:

``` text
Color Space = Non-Color
```

Karena Roughness Map adalah data, bukan warna untuk dilihat sebagai
gambar artistik.

------------------------------------------------------------------------

# 45. Membaca Roughness Map

Secara umum pada workflow yang digunakan dalam materi:

``` text
gelap
→ lebih halus

terang
→ lebih kasar
```

Periksa material dengan lighting yang cukup agar perbedaannya terlihat.

------------------------------------------------------------------------

# 46. Metallic Map

Tambahkan:

``` text
asset_metallic.png
```

Hubungkan:

``` text
Image Texture — Color
↓
Principled BSDF — Metallic
```

Set:

``` text
Color Space = Non-Color
```

------------------------------------------------------------------------

# 47. Membaca Metallic Map

Secara umum:

``` text
hitam
→ non-metal

putih
→ metal
```

Metallic Map berguna jika satu material mempunyai area metal dan
non-metal.

Contoh:

``` text
painted body
+
exposed metal
```

------------------------------------------------------------------------

# 48. Normal Map

Normal Map memberi ilusi detail permukaan tanpa menambah silhouette
geometry.

Contoh detail:

-   scratch;
-   small panel;
-   emboss;
-   surface bumps.

Normal Map memengaruhi shading, bukan bentuk luar object.

------------------------------------------------------------------------

# 49. Normal Map Node

Jangan menghubungkan Normal Map image langsung ke input Normal
Principled BSDF.

Workflow:

``` text
Image Texture
↓
Normal Map
↓
Principled BSDF — Normal
```

Tambahkan:

``` text
Shift + A
→ Vector
→ Normal Map
```

------------------------------------------------------------------------

# 50. Color Space Normal Map

Pada Image Texture untuk normal:

``` text
Color Space = Non-Color
```

Kemudian:

``` text
Image Texture — Color
↓
Normal Map — Color
↓
Normal Map — Normal
↓
Principled BSDF — Normal
```

------------------------------------------------------------------------

# 51. Normal Strength

Node Normal Map memiliki:

``` text
Strength
```

Coba:

``` text
0
0.5
1.0
2.0
```

Amati perubahan.

Nilai terlalu tinggi dapat membuat shading terlihat berlebihan/tidak
natural.

------------------------------------------------------------------------

# 52. Emission

Emission membuat surface tampak memancarkan cahaya sendiri.

Contoh:

-   LED;
-   screen;
-   robot eye;
-   neon strip;
-   sci-fi indicator.

Pada asset hard-surface, pilih area kecil agar emission menjadi aksen.

------------------------------------------------------------------------

# 53. Emission pada Principled BSDF

Gunakan input emission pada Principled BSDF yang tersedia pada versi
Blender yang digunakan.

Atur:

``` text
Emission Color
Emission Strength
```

Nama/penempatan field dapat sedikit berbeda antarversi Blender, tetapi
konsepnya sama:

``` text
color
+
strength
```

------------------------------------------------------------------------

# 54. Emission Map

Jika memiliki:

``` text
asset_emission.png
```

gunakan untuk menentukan bagian yang emissive.

Secara konseptual:

``` text
Emission Map
↓
Emission Input
```

Area gelap dapat digunakan sebagai area non-emissive, sedangkan area
yang berisi informasi emission mengaktifkan bagian tertentu sesuai
texture yang dibuat.

------------------------------------------------------------------------

# 55. PBR Node Flow Lengkap

Struktur material:

``` text
Base Color Image
(sRGB)
      ↓
Base Color

Roughness Image
(Non-Color)
      ↓
Roughness

Metallic Image
(Non-Color)
      ↓
Metallic

Normal Image
(Non-Color)
      ↓
Normal Map Node
      ↓
Normal

Emission Image
      ↓
Emission

        ↓
Principled BSDF
        ↓
Material Output
```

------------------------------------------------------------------------

# 56. Color Space --- Konsep Penting

Gunakan:

``` text
Base Color
→ sRGB

Roughness
→ Non-Color

Metallic
→ Non-Color

Normal
→ Non-Color
```

Mengapa?

Base Color merepresentasikan warna visual.

Roughness, Metallic, dan Normal menyimpan **nilai data** yang digunakan
untuk perhitungan shading.

------------------------------------------------------------------------

# 57. Jika Texture Map Tidak Tersedia

Untuk praktikum, texture map dapat berasal dari:

-   asset texture yang disediakan dosen;
-   texture PBR legal/free yang sudah disiapkan;
-   texture sederhana yang dibuat mahasiswa;
-   grayscale map sederhana untuk roughness/metallic/emission.

Jika map tertentu tidak tersedia, mahasiswa tetap wajib memahami koneksi
node dan dapat membuat map sederhana sendiri untuk menunjukkan konsep.

------------------------------------------------------------------------

# 58. Membuat Roughness Map Sederhana

Mahasiswa dapat membuat image grayscale sederhana di aplikasi image
editor.

Contoh:

``` text
Left half  = dark gray
Right half = light gray
```

Setelah dipasang ke Roughness, surface menunjukkan dua karakter
kekasaran berbeda.

Tujuan:

> membuktikan bahwa map mengontrol parameter per area.

------------------------------------------------------------------------

# 59. Membuat Metallic Map Sederhana

Buat image:

``` text
area hitam
+
area putih
```

Hubungkan ke Metallic.

Target:

``` text
satu bagian non-metal
+
satu bagian metal
```

------------------------------------------------------------------------

# 60. Membuat Emission Map Sederhana

Buat mask sederhana untuk:

-   LED;
-   strip;
-   panel;
-   icon.

Gunakan area kecil pada UV agar emission memiliki lokasi yang jelas.

------------------------------------------------------------------------

# 61. Texture Painting Bukan Fokus Utama

Pertemuan ini berfokus pada:

``` text
UV
+
Texture Maps
+
PBR Material
```

Bukan pada workflow texture painting kompleks.

Mahasiswa boleh membuat texture sendiri, tetapi tujuan utamanya adalah
memahami bagaimana map dihubungkan ke material.

------------------------------------------------------------------------

# 62. Milestone 1 --- Model Preparation

Selesaikan:

-   file P10 dibuat;
-   scale diperiksa;
-   Apply Scale bila diperlukan;
-   normal diperiksa;
-   topology layak;
-   object naming rapi.

------------------------------------------------------------------------

# 63. Milestone 2 --- Mark Seam

Asset utama harus mempunyai seam yang:

-   dapat dijelaskan alasannya;
-   mengikuti struktur object;
-   menghindari area visual utama bila memungkinkan.

Ambil screenshot seam.

------------------------------------------------------------------------

# 64. Milestone 3 --- Unwrap

Lakukan:

``` text
A
U
→ Unwrap
```

Pastikan UV Island muncul di UV Editor.

Ambil screenshot awal UV layout.

------------------------------------------------------------------------

# 65. Milestone 4 --- Checker Test

Pasang checker.

Periksa seluruh asset.

Target:

``` text
checker tidak stretched secara ekstrem
+
ukuran relatif konsisten
```

Jika bermasalah, kembali ke seam.

------------------------------------------------------------------------

# 66. Milestone 5 --- UV Island Adjustment

Atur:

``` text
Move
Rotate
Scale
Pack
Margin
```

Target:

-   UV space digunakan dengan baik;
-   island tidak overlap tanpa alasan;
-   margin tersedia;
-   texel density relatif konsisten.

------------------------------------------------------------------------

# 67. Milestone 6 --- Base Color

Pasang:

``` text
Base Color Map
→ Base Color
```

Pastikan:

``` text
sRGB
```

Periksa orientasi texture pada asset.

------------------------------------------------------------------------

# 68. Milestone 7 --- Roughness + Metallic

Pasang kedua map.

Pastikan:

``` text
Non-Color
```

Bandingkan hasil sebelum dan sesudah map.

------------------------------------------------------------------------

# 69. Milestone 8 --- Normal Map

Pasang:

``` text
Image Texture
↓
Normal Map Node
↓
Principled BSDF Normal
```

Pastikan texture:

``` text
Non-Color
```

Periksa Strength.

------------------------------------------------------------------------

# 70. Milestone 9 --- Emission

Tambahkan satu area emission yang relevan.

Contoh:

-   LED;
-   screen;
-   indicator;
-   glowing strip.

Gunakan warna dan strength secukupnya.

------------------------------------------------------------------------

# 71. Milestone 10 --- Final Material Review

Periksa:

``` text
UV
Base Color
Roughness
Metallic
Normal
Emission
```

Pastikan semua koneksi node dapat dijelaskan.

------------------------------------------------------------------------

# 72. Eksperimen Wajib 1 --- Seam Strategy

Pada object latihan atau backup, buat dua strategi seam berbeda.

Lakukan Unwrap pada keduanya.

Bandingkan:

-   jumlah island;
-   distortion;
-   keterbacaan layout.

Jawab:

> strategi mana yang lebih baik dan mengapa?

------------------------------------------------------------------------

# 73. Eksperimen Wajib 2 --- Manual vs Smart UV

Bandingkan:

``` text
Manual Unwrap
```

dengan:

``` text
Smart UV Project
```

Catat:

-   jumlah island;
-   kontrol;
-   distortion;
-   waktu pengerjaan;
-   kemudahan packing.

------------------------------------------------------------------------

# 74. Eksperimen Wajib 3 --- Checker Distortion

Temukan satu UV island.

Scale hanya pada satu axis di UV Editor hingga checker terlihat
stretched.

Kemudian kembalikan ke kondisi baik.

Tujuan:

> memahami hubungan bentuk UV dengan texture pada surface.

------------------------------------------------------------------------

# 75. Eksperimen Wajib 4 --- Texel Density

Buat dua island dengan ukuran sangat berbeda di UV space.

Amati ukuran checker.

Kemudian atur kembali agar detail relatif konsisten.

Jelaskan hasilnya.

------------------------------------------------------------------------

# 76. Eksperimen Wajib 5 --- UV Margin

Pack island dengan margin yang layak.

Bandingkan secara konseptual dengan layout yang island-nya terlalu
rapat.

Jelaskan risiko texture bleeding.

------------------------------------------------------------------------

# 77. Eksperimen Wajib 6 --- Base Color Solid vs Map

Bandingkan:

``` text
solid Base Color
```

dengan:

``` text
Base Color Map
```

Jelaskan kelebihan texture map untuk variasi surface.

------------------------------------------------------------------------

# 78. Eksperimen Wajib 7 --- Roughness

Bandingkan:

``` text
Roughness = 0.1
Roughness = 0.9
```

kemudian pasang Roughness Map.

Jelaskan perbedaan:

``` text
single value
vs
per-pixel/per-area control
```

------------------------------------------------------------------------

# 79. Eksperimen Wajib 8 --- Metallic

Bandingkan:

``` text
Metallic = 0
Metallic = 1
```

kemudian gunakan Metallic Map dengan area hitam dan putih.

Amati bagaimana satu material dapat memiliki karakter berbeda per area.

------------------------------------------------------------------------

# 80. Eksperimen Wajib 9 --- Color Space

Pada Roughness Map, bandingkan sementara:

``` text
sRGB
```

dengan:

``` text
Non-Color
```

Kemudian kembalikan ke:

``` text
Non-Color
```

Jelaskan mengapa map data seharusnya tidak diperlakukan sebagai warna
visual.

------------------------------------------------------------------------

# 81. Eksperimen Wajib 10 --- Normal Map

Bandingkan:

``` text
Normal Map OFF
```

dan:

``` text
Normal Map ON
```

Amati detail shading.

Periksa silhouette:

> apakah silhouette berubah?

Jawaban konseptual harus menghubungkan Normal Map dengan shading, bukan
geometry nyata.

------------------------------------------------------------------------

# 82. Eksperimen Wajib 11 --- Normal Strength

Bandingkan beberapa nilai Strength.

Pilih nilai yang terlihat masuk akal untuk asset.

Jelaskan mengapa nilai paling tinggi tidak selalu paling baik.

------------------------------------------------------------------------

# 83. Eksperimen Wajib 12 --- Emission

Bandingkan:

``` text
Emission Strength rendah
```

dan:

``` text
Emission Strength lebih tinggi
```

Periksa apakah emission masih menjadi aksen atau justru mendominasi
material.

------------------------------------------------------------------------

# 84. Tugas Utama

Gunakan asset Pertemuan 9 dan buat:

# UV-Mapped PBR Asset

Requirement:

-   [ ] asset hasil modeling P9;
-   [ ] model preparation;
-   [ ] Apply Scale bila diperlukan;
-   [ ] normal diperiksa;
-   [ ] seam manual;
-   [ ] unwrap;
-   [ ] UV Island yang dapat dijelaskan;
-   [ ] checker test;
-   [ ] distortion diperiksa;
-   [ ] texel density diperiksa;
-   [ ] UV packing;
-   [ ] margin antar-island;
-   [ ] tidak ada accidental overlap;
-   [ ] material menggunakan Principled BSDF;
-   [ ] Base Color;
-   [ ] Roughness;
-   [ ] Metallic;
-   [ ] Normal Map;
-   [ ] Emission;
-   [ ] Base Color menggunakan sRGB;
-   [ ] Roughness menggunakan Non-Color;
-   [ ] Metallic menggunakan Non-Color;
-   [ ] Normal menggunakan Non-Color;
-   [ ] minimal dua challenge;
-   [ ] node graph rapi;
-   [ ] final asset dapat diperiksa pada Material Preview/Rendered View;
-   [ ] file siap digunakan pada Pertemuan 11.

------------------------------------------------------------------------

# 85. Challenge A --- Multi-Material Surface

Gunakan dua material pada satu asset.

Contoh:

``` text
Body
→ painted metal

Handle
→ rubber/plastic
```

Tujuan:

> memahami bahwa satu asset dapat memiliki beberapa karakter surface.

------------------------------------------------------------------------

# 86. Challenge B --- Intentional UV Overlap

Gunakan overlap hanya pada dua bagian identik yang memang ingin
menggunakan area texture sama.

Dokumentasikan:

-   bagian yang overlap;
-   alasan;
-   keuntungan;
-   keterbatasan.

------------------------------------------------------------------------

# 87. Challenge C --- Hero Texel Density

Pilih satu area penting:

``` text
front panel / display / logo area
```

berikan UV area lebih besar secara sengaja.

Jelaskan mengapa area tersebut membutuhkan detail lebih tinggi.

------------------------------------------------------------------------

# 88. Challenge D --- Custom Emission Mask

Buat emission mask sendiri untuk:

-   LED;
-   display;
-   warning strip;
-   robot eye.

Pastikan hanya area yang direncanakan yang emissive.

------------------------------------------------------------------------

# 89. Challenge E --- Custom Roughness Variation

Buat Roughness Map sederhana yang memberikan:

``` text
clean painted area
+
rough/worn area
```

Tanpa mengubah geometry.

------------------------------------------------------------------------

# 90. Challenge F --- Metal + Painted Surface

Buat satu material yang mempunyai:

``` text
painted non-metal area
+
exposed metallic area
```

Gunakan Metallic Map untuk membedakannya.

------------------------------------------------------------------------

# 91. Challenge G --- UV Optimization

Rapikan UV layout dengan target:

-   ruang kosong minimum yang wajar;
-   margin tetap aman;
-   orientasi island mudah dibaca;
-   texel density konsisten.

Dokumentasikan before/after.

------------------------------------------------------------------------

# 92. Challenge H --- Normal Detail

Gunakan Normal Map untuk menambahkan detail kecil yang tidak perlu
dibuat sebagai geometry.

Contoh:

-   fine scratches;
-   small grooves;
-   embossed detail.

Jelaskan mengapa detail tersebut lebih efisien sebagai Normal Map
daripada geometry.

------------------------------------------------------------------------

# 93. Debugging --- Texture Tidak Muncul

Periksa:

1.  material sudah assigned?;
2.  Image Texture sudah dibuka?;
3.  node sudah terhubung?;
4.  object mempunyai UV?;
5.  viewport berada pada Material Preview/Rendered?;
6.  file texture masih tersedia?;
7.  UV berada pada area yang benar?

------------------------------------------------------------------------

# 94. Debugging --- Texture Stretched

Periksa:

-   seam;
-   unwrap;
-   bentuk UV Island;
-   checker;
-   scale island;
-   geometry.

Solusi utama bukan mengganti texture, tetapi memperbaiki UV.

------------------------------------------------------------------------

# 95. Debugging --- Checker Berbeda Ukuran

Ini menunjukkan texel density berbeda.

Periksa scale UV Island.

Jika tidak disengaja, sesuaikan scale island agar checker relatif
konsisten.

------------------------------------------------------------------------

# 96. Debugging --- Terlalu Banyak UV Island

Penyebab:

-   seam terlalu banyak;
-   Smart UV menghasilkan banyak potongan;
-   topology kompleks.

Evaluasi apakah beberapa island seharusnya tetap terhubung.

------------------------------------------------------------------------

# 97. Debugging --- UV Island Overlap

Jika overlap tidak disengaja:

-   pilih island;
-   pindahkan;
-   scale;
-   Pack Islands ulang.

Jika overlap disengaja, dokumentasikan alasannya.

------------------------------------------------------------------------

# 98. Debugging --- Roughness Terlihat Salah

Periksa:

``` text
Color Space = Non-Color
```

dan koneksi:

``` text
Image Texture
→ Roughness
```

Pastikan image memang Roughness Map, bukan map dengan konvensi berbeda
yang belum disesuaikan.

------------------------------------------------------------------------

# 99. Debugging --- Metallic Tidak Terlihat Jelas

Periksa:

-   Metallic Map;
-   Non-Color;
-   lighting/environment;
-   Roughness;
-   apakah area map memang putih/metal.

Material metal sangat bergantung pada apa yang direfleksikan.

------------------------------------------------------------------------

# 100. Debugging --- Normal Map Tampak Salah

Periksa:

``` text
Image Texture = Non-Color
```

dan harus melalui:

``` text
Normal Map Node
```

bukan langsung ke input Normal.

Periksa juga Strength.

------------------------------------------------------------------------

# 101. Debugging --- Emission Tidak Terlihat

Periksa:

-   input emission;
-   warna;
-   strength;
-   emission map/mask;
-   area UV;
-   mode viewport/render.

Emission membuat surface emissive; tampilan efek cahaya di sekitarnya
juga bergantung pada konfigurasi render/scene yang akan diperdalam pada
pertemuan berikutnya.

------------------------------------------------------------------------

# 102. Debugging --- Texture Hilang Saat File Dipindah

Texture image adalah file eksternal kecuali dipack ke `.blend`.

Untuk pengumpulan, simpan texture dalam folder project yang jelas.

Jangan hanya mengandalkan lokasi acak pada komputer.

------------------------------------------------------------------------

# 103. Pack Resources --- Opsional tetapi Disarankan

Untuk mengurangi risiko missing texture, Blender menyediakan mekanisme
untuk memasukkan resource eksternal ke file `.blend`.

Jika digunakan, tetap simpan folder texture asli sebagai dokumentasi.

Tujuan utama:

> file dapat dibuka kembali tanpa kehilangan asset penting.

------------------------------------------------------------------------

# 104. Test Case

    No. Pengujian           Hasil yang Diharapkan
  ----- ------------------- ---------------------------------
      1 Model preparation   Geometry siap UV
      2 Apply Scale         Scale layak/konsisten
      3 Seam                Edge potong terencana
      4 Unwrap              UV Islands terbentuk
      5 Checker             Distortion dapat dievaluasi
      6 Texel density       Detail relatif konsisten
      7 UV packing          Area UV digunakan efisien
      8 Margin              Islands tidak terlalu rapat
      9 Overlap             Tidak ada overlap tak disengaja
     10 Principled BSDF     Material aktif
     11 Base Color          Warna/map tampil
     12 Roughness           Kekasaran berubah
     13 Metallic            Area metal/non-metal bekerja
     14 Normal              Detail shading terlihat
     15 Emission            Area emissive bekerja
     16 Color space         Map warna/data tepat
     17 Node graph          Koneksi dapat dibaca
     18 Texture path        File tidak missing
     19 Final review        Asset tampak konsisten
     20 Reopen file         Material tetap berfungsi

------------------------------------------------------------------------

# 105. Pertanyaan Pemahaman

1.  Apa fungsi material?
2.  Apa fungsi Principled BSDF?
3.  Apa itu texture?
4.  Mengapa texture bukan hanya Base Color?
5.  Apa itu UV Mapping?
6.  Mengapa menggunakan U dan V?
7.  Apa itu UV space?
8.  Apa hubungan face 3D dengan UV face?
9.  Apa itu seam?
10. Mengapa seam diperlukan?
11. Di mana seam sebaiknya ditempatkan?
12. Apa itu unwrap?
13. Apa itu UV Island?
14. Apa yang menentukan jumlah UV Island?
15. Apa itu UV distortion?
16. Bagaimana checker membantu mendeteksi distortion?
17. Apa itu texel density?
18. Mengapa texel density perlu konsisten?
19. Kapan texel density boleh lebih tinggi?
20. Apa fungsi Pack Islands?
21. Mengapa UV Island memerlukan margin?
22. Apa risiko margin terlalu kecil?
23. Apa itu overlapping UV?
24. Kapan UV overlap boleh digunakan?
25. Apa perbedaan Manual Unwrap dan Smart UV Project?
26. Apa fungsi Image Texture node?
27. Apa fungsi Base Color?
28. Apa fungsi Base Color Map?
29. Apa fungsi Roughness?
30. Apa arti Roughness mendekati 0?
31. Apa arti Roughness mendekati 1?
32. Apa fungsi Roughness Map?
33. Apa fungsi Metallic?
34. Apa arti Metallic 0?
35. Apa arti Metallic 1?
36. Apa fungsi Metallic Map?
37. Apa itu PBR?
38. Apa fungsi Normal pada shading?
39. Apa fungsi Normal Map?
40. Mengapa Normal Map tidak mengubah silhouette?
41. Mengapa Normal Map harus melalui Normal Map node?
42. Apa fungsi Strength pada Normal Map node?
43. Apa itu color space?
44. Mengapa Base Color menggunakan sRGB?
45. Mengapa Roughness menggunakan Non-Color?
46. Mengapa Metallic menggunakan Non-Color?
47. Mengapa Normal Map menggunakan Non-Color?
48. Apa fungsi Emission?
49. Apa fungsi Emission Map?
50. Bagaimana UV, texture map, dan Principled BSDF membentuk PBR
    surface?

------------------------------------------------------------------------

# 106. Pertanyaan Analisis

## A --- Seam

Sebuah cylinder hanya di-unwrap tanpa seam vertikal yang sesuai.

Masalah apa yang mungkin muncul dan mengapa?

## B --- Checker

Checker pada bagian depan terlihat kotak, tetapi pada bagian samping
terlihat memanjang.

Apa yang dapat disimpulkan?

## C --- Texel Density

Front panel mendapat UV area dua kali lebih besar daripada bagian
belakang.

Kapan keputusan ini masuk akal?

## D --- Roughness

Mengapa satu nilai Roughness tidak cukup jika object mempunyai area cat
halus dan area kotor/kasar?

## E --- Metallic

Mengapa kayu seharusnya tidak diperlakukan seperti metal hanya agar
terlihat lebih reflektif?

## F --- Normal Map

Mengapa scratch kecil sering lebih tepat dibuat dengan Normal Map
daripada menambah geometry?

## G --- Color Space

Apa masalah konseptual jika Roughness Map diperlakukan sebagai warna
visual?

## H --- Pipeline

Mengapa asset dengan UV dan PBR material yang baik masih memerlukan
lighting yang baik pada Pertemuan 11?

------------------------------------------------------------------------

# 107. Dokumentasi Wajib

Ambil screenshot:

``` text
1. Asset sebelum UV
2. Marked Seam
3. Initial UV Unwrap
4. Checker Test
5. Final UV Layout
6. Principled BSDF Node Graph
7. Base Color + Roughness + Metallic
8. Normal Map
9. Emission
10. Final Material
```

Screenshot harus cukup jelas untuk menunjukkan proses, bukan hanya hasil
akhir.

------------------------------------------------------------------------

# 108. Struktur Pengumpulan

``` text
P10_NRP_Nama/
├── P10_NRP_Nama.blend
├── textures/
│   ├── ...
├── screenshots/
│   ├── 01_model.png
│   ├── 02_seam.png
│   ├── 03_uv.png
│   ├── 04_checker.png
│   ├── 05_nodes.png
│   └── 06_final.png
└── README.md
```

------------------------------------------------------------------------

# 109. Isi README

Tuliskan:

``` text
Nama
NRP
Nama Asset
Deskripsi Asset
Strategi Seam
Jumlah/jenis UV Island utama
Masalah UV yang ditemukan
Cara memperbaiki distortion
Strategi Texel Density
Texture Maps yang Digunakan
Color Space Setiap Map
Bagian Metal
Bagian Non-Metal
Bagian Emission
Normal Detail
Challenge yang Dikerjakan
Kendala
Solusi
```

------------------------------------------------------------------------

# 110. Checklist Pengumpulan

-   [ ] file `.blend` tersedia;
-   [ ] texture tidak missing;
-   [ ] model berasal dari P9 atau setara;
-   [ ] scale diperiksa;
-   [ ] normal diperiksa;
-   [ ] seam manual tersedia;
-   [ ] unwrap dilakukan;
-   [ ] UV Island dapat dijelaskan;
-   [ ] checker test dilakukan;
-   [ ] distortion diperiksa;
-   [ ] texel density diperiksa;
-   [ ] UV packing rapi;
-   [ ] margin tersedia;
-   [ ] overlap hanya jika disengaja;
-   [ ] Principled BSDF digunakan;
-   [ ] Base Color digunakan;
-   [ ] Roughness digunakan;
-   [ ] Metallic digunakan;
-   [ ] Normal Map digunakan;
-   [ ] Emission digunakan;
-   [ ] color space tepat;
-   [ ] node graph rapi;
-   [ ] minimal dua challenge;
-   [ ] screenshot proses lengkap;
-   [ ] README lengkap;
-   [ ] final asset siap Pertemuan 11.

------------------------------------------------------------------------

# 111. Refleksi Praktikum

Tuliskan 5--8 kalimat mengenai:

1.  bagian tersulit saat menentukan seam;
2.  manfaat checker texture;
3.  masalah distortion yang ditemukan;
4.  bagaimana texel density diperbaiki;
5.  perbedaan Base Color dan Roughness Map;
6.  pengaruh Metallic;
7.  fungsi Normal Map;
8.  penggunaan Emission.

------------------------------------------------------------------------

# 112. Hubungan dengan Pertemuan 11

Hasil praktikum:

``` text
Modeled Asset
+
UV
+
PBR Material
+
Texture Maps
```

akan menjadi input:

``` text
Lighting
+
Camera
+
Rendering
```

Material tidak dapat dinilai secara terpisah dari cahaya.

Pada Pertemuan 11 mahasiswa akan mempelajari bagaimana pencahayaan dan
kamera menampilkan karakter PBR surface secara lebih lengkap.

------------------------------------------------------------------------

# 113. Ringkasan Praktikum

Pipeline:

``` text
3D Model
↓
Apply Scale
↓
Mark Seam
↓
Unwrap
↓
UV Islands
↓
Checker
↓
Distortion Review
↓
Texel Density
↓
Pack + Margin
↓
Principled BSDF
↓
Base Color
+
Roughness
+
Metallic
+
Normal
+
Emission
↓
PBR Surface
```

Konsep penting:

``` text
Seam
→ menentukan cara mesh dibuka

UV Island
→ representasi kelompok face di 2D

Checker
→ alat evaluasi UV

Texel Density
→ konsistensi detail texture

Base Color
→ warna utama

Roughness
→ karakter kasar/halus

Metallic
→ metal/non-metal

Normal Map
→ detail shading tanpa menambah silhouette

Emission
→ surface emissive
```

Target akhir:

# UV-Mapped PBR Asset

yang siap masuk ke tahap:

# Blender Lighting, Camera & Rendering
