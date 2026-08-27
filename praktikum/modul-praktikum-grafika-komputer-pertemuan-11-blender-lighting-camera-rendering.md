# Modul Praktikum Grafika Komputer --- Pertemuan 11

## Blender Lighting, Camera & Rendering

**Mata Kuliah:** EF234504 --- Grafika Komputer\
**Pertemuan:** 11\
**Topik:** Blender Lighting, Camera & Rendering\
**Dosen:** Dr. Darlis Herumurti\
**Departemen:** Teknik Informatika

------------------------------------------------------------------------

# 1. Deskripsi Praktikum

Pertemuan 11 melanjutkan asset yang telah dibuat pada Pertemuan 9 dan
diberi UV, material, serta texture pada Pertemuan 10.

Fokus praktikum kali ini bukan membuat ulang model atau material, tetapi
**mempresentasikan asset menjadi final image yang baik** melalui
lighting, camera, environment, dan render engine.

Pipeline:

``` text
3D Asset
+
PBR Material
↓
Lighting
↓
Camera
↓
HDRI / Environment
↓
Render Engine
↓
Test Render
↓
Iteration
↓
Final Hero Render
```

Praktikum utama menggunakan pendekatan:

# Product-Style Lighting & Rendering

Mahasiswa akan melakukan studi empat jenis light, membuat three-point
lighting, mengatur composition dan focal length, menggunakan Depth of
Field dan HDRI, kemudian membandingkan EEVEE dengan Cycles.

------------------------------------------------------------------------

# 2. Capaian Praktikum

Setelah praktikum, mahasiswa mampu:

1.  menyiapkan asset P9--P10 untuk rendering;
2.  menjelaskan peran lighting dalam visualisasi bentuk;
3.  menggunakan Point Light;
4.  menggunakan Sun Light;
5.  menggunakan Spot Light;
6.  menggunakan Area Light;
7.  membandingkan karakter empat jenis light;
8.  mengatur intensity/power, color, direction, dan softness;
9.  membuat three-point lighting;
10. menjelaskan Key, Fill, dan Rim Light;
11. mengatur camera;
12. membuat framing yang jelas;
13. menggunakan center composition dan rule of thirds;
14. membandingkan beberapa camera angle;
15. menjelaskan pengaruh focal length;
16. membandingkan 24 mm, 50 mm, dan 85 mm;
17. menggunakan Depth of Field;
18. menentukan focus object/distance;
19. menjelaskan pengaruh F-Stop;
20. menggunakan HDRI sebagai environment lighting;
21. mengatur orientasi HDRI;
22. menggabungkan HDRI dan lampu tambahan;
23. menggunakan EEVEE untuk iterasi cepat;
24. menggunakan Cycles;
25. menjelaskan sampling, noise, dan render time;
26. menggunakan denoising;
27. melakukan test render dan iterasi;
28. membandingkan hasil EEVEE dan Cycles;
29. menghasilkan final hero render.

------------------------------------------------------------------------

# 3. Target Hasil Akhir

Mahasiswa menghasilkan satu **product-style hero render** dari asset
P9--P10.

Minimum:

-   asset PBR dari P10;
-   ground/background;
-   three-point lighting;
-   camera composition yang jelas;
-   eksperimen camera angle;
-   eksperimen focal length;
-   Depth of Field;
-   HDRI;
-   render EEVEE;
-   render Cycles;
-   perbandingan EEVEE vs Cycles;
-   final hero render;
-   dokumentasi proses.

------------------------------------------------------------------------

# 4. Prinsip Utama

Rendering bukan hanya menekan:

``` text
F12
```

Rendering yang baik merupakan hasil keputusan:

``` text
Lighting
+
Composition
+
Perspective
+
Focus
+
Environment
+
Render Settings
```

Karena itu workflow harus iteratif:

``` text
Setup
↓
Test
↓
Observe
↓
Adjust
↓
Test Again
```

------------------------------------------------------------------------

# 5. Persiapan File

Buka asset hasil Pertemuan 10.

Simpan sebagai:

``` text
P11_NRP_Nama.blend
```

Jangan menimpa file P10.

Struktur:

``` text
P09 → Modeling
P10 → UV + Material + Texture
P11 → Lighting + Camera + Rendering
```

------------------------------------------------------------------------

# 6. Pemeriksaan Asset

Sebelum lighting:

-   pastikan model tidak rusak;
-   texture tidak missing;
-   material aktif;
-   normal tidak bermasalah;
-   object naming cukup jelas;
-   scale dan posisi masuk akal.

Pertemuan ini tidak membahas ulang material. Perbaikan kecil
diperbolehkan hanya jika diperlukan agar asset dapat dirender.

------------------------------------------------------------------------

# 7. Membuat Ground

Tambahkan Plane:

``` text
Shift + A
→ Mesh
→ Plane
```

Scale:

``` text
S
```

hingga cukup besar menjadi lantai.

Rename:

``` text
Ground
```

Ground berguna untuk:

-   menerima shadow;
-   memberikan referensi ruang;
-   membantu membaca posisi object.

------------------------------------------------------------------------

# 8. Menempatkan Asset

Posisikan asset di atas ground.

Gunakan:

``` text
G
R
S
```

jika diperlukan.

Pastikan object tidak menembus ground.

Untuk product render, origin/posisi asset sebaiknya mudah dikendalikan
dan berada dekat pusat scene.

------------------------------------------------------------------------

# 9. Lighting dan Persepsi Bentuk

Lighting membantu memperlihatkan:

``` text
Silhouette
Volume
Depth
Surface
Material Response
```

Material PBR hanya dapat dibaca dengan baik jika ada cahaya/environment
yang memberikan highlight dan shadow.

------------------------------------------------------------------------

# 10. Parameter Lighting

Saat mengevaluasi light, perhatikan lima aspek:

``` text
Direction
Intensity
Color
Softness
Contrast
```

Jangan menilai hanya berdasarkan "terang atau gelap".

------------------------------------------------------------------------

# 11. Studi Point Light

Tambahkan:

``` text
Shift + A
→ Light
→ Point
```

Rename:

``` text
TEST_Point
```

Letakkan di samping/depan object.

Amati:

``` text
cahaya menyebar ke segala arah
```

Point cocok untuk sumber lokal seperti bohlam/lampu kecil.

------------------------------------------------------------------------

# 12. Parameter Point Light

Eksperimen dengan:

-   Position;
-   Power;
-   Color;
-   Radius.

Bandingkan:

``` text
Radius kecil
→ shadow relatif lebih tajam

Radius besar
→ shadow lebih lembut
```

Ambil screenshot hasil eksperimen.

------------------------------------------------------------------------

# 13. Studi Sun Light

Disable/hide Point Light.

Tambahkan:

``` text
Shift + A
→ Light
→ Sun
```

Rename:

``` text
TEST_Sun
```

Pada Sun, lokasi tidak menentukan arah utama cahaya seperti Point. Yang
penting adalah:

``` text
Rotation
```

Putar Sun dan amati perubahan arah shadow.

------------------------------------------------------------------------

# 14. Parameter Sun

Eksperimen:

-   rotation;
-   strength;
-   color;
-   angle.

Secara konsep:

``` text
Angle kecil
→ shadow lebih tajam

Angle besar
→ shadow lebih lembut
```

Sun lebih sesuai untuk simulasi cahaya jauh seperti matahari.

------------------------------------------------------------------------

# 15. Studi Spot Light

Hide Sun.

Tambahkan:

``` text
Shift + A
→ Light
→ Spot
```

Rename:

``` text
TEST_Spot
```

Arahkan cone ke asset.

Spot cocok untuk:

-   dramatic focus;
-   stage-like lighting;
-   lampu sorot;
-   localized directional illumination.

------------------------------------------------------------------------

# 16. Spot Size dan Blend

Eksperimen:

``` text
Spot Size
```

untuk lebar cone.

Kemudian:

``` text
Spot Blend
```

untuk softness pada batas cone.

Bandingkan blend rendah dan tinggi.

------------------------------------------------------------------------

# 17. Studi Area Light

Hide Spot.

Tambahkan:

``` text
Shift + A
→ Light
→ Area
```

Rename:

``` text
TEST_Area
```

Posisikan seperti softbox studio.

Area Light sangat penting untuk praktikum ini karena cocok untuk product
render.

------------------------------------------------------------------------

# 18. Area Light Size

Eksperimen:

``` text
Size kecil
```

dibanding:

``` text
Size besar
```

Amati:

-   highlight;
-   softness;
-   shadow;
-   transition.

Secara umum sumber yang lebih luas menghasilkan pencahayaan lebih
lembut.

------------------------------------------------------------------------

# 19. Perbandingan Empat Light

Catat hasil:

  Light   Karakter Utama         Cocok untuk
  ------- ---------------------- ----------------
  Point   lokal, segala arah     lampu kecil
  Sun     parallel/directional   outdoor
  Spot    cone terarah           dramatic focus
  Area    luas dan lembut        studio/product

Jangan mencari "light terbaik". Pilihan tergantung tujuan visual.

------------------------------------------------------------------------

# 20. Cleanup Studi Light

Setelah studi selesai, hide/delete light eksperimen yang tidak
digunakan.

Pertahankan asset dan ground.

Sekarang masuk ke setup utama:

# Three-Point Lighting

------------------------------------------------------------------------

# 21. Konsep Three-Point Lighting

Three-point lighting:

``` text
Key Light
+
Fill Light
+
Rim / Back Light
```

Fungsi:

``` text
Key
→ membentuk subject

Fill
→ mengontrol contrast

Rim
→ memisahkan silhouette
```

------------------------------------------------------------------------

# 22. Membuat Key Light

Tambahkan:

``` text
Area Light
```

Rename:

``` text
Key_Light
```

Letakkan di depan-samping object dan sedikit di atas.

Arahkan ke asset.

Key adalah sumber utama sehingga harus menentukan karakter pencahayaan.

------------------------------------------------------------------------

# 23. Mengarahkan Area Light

Gunakan:

``` text
R
```

untuk mengarahkan Area Light.

Cara praktis:

1.  pilih light;
2.  pindahkan dengan `G`;
3.  rotate dengan `R`;
4.  lihat hasil pada viewport;
5.  lakukan test render.

Tujuan bukan mencari angka yang sama untuk semua asset, tetapi arah
cahaya yang menunjukkan bentuk dengan baik.

------------------------------------------------------------------------

# 24. Mengatur Key

Atur:

-   Power;
-   Size;
-   Color.

Mulai dengan warna netral.

Perhatikan:

-   highlight utama;
-   shadow;
-   detail material;
-   silhouette.

Jika object tampak terlalu flat, ubah arah light sebelum sekadar
menaikkan power.

------------------------------------------------------------------------

# 25. Membuat Fill Light

Duplicate atau buat Area Light kedua.

Rename:

``` text
Fill_Light
```

Letakkan di sisi berlawanan dari Key.

Prinsip:

``` text
Fill < Key
```

Fill tidak dimaksudkan menghilangkan seluruh shadow.

------------------------------------------------------------------------

# 26. Mengatur Fill

Kurangi power Fill dibanding Key.

Tujuan:

``` text
shadow tetap ada
+
detail shadow masih terbaca
```

Jika Fill terlalu kuat:

``` text
contrast ↓
depth ↓
scene terasa flat
```

------------------------------------------------------------------------

# 27. Membuat Rim Light

Tambahkan Area Light.

Rename:

``` text
Rim_Light
```

Tempatkan di belakang/samping belakang object.

Arahkan ke subject.

Target:

``` text
edge highlight
+
silhouette separation
```

------------------------------------------------------------------------

# 28. Mengatur Rim

Atur:

-   Power;
-   Size;
-   Position;
-   Angle;
-   Color.

Rim tidak harus menerangi seluruh object.

Pada product render, rim kecil yang terkontrol sering lebih efektif
daripada glow besar.

------------------------------------------------------------------------

# 29. Evaluasi Three-Point Lighting

Periksa:

``` text
Key jelas?
Fill terlalu kuat?
Rim terlihat?
Shadow masih memberi depth?
Material dapat dibaca?
Background mengganggu?
```

Ambil screenshot viewport atau test render.

------------------------------------------------------------------------

# 30. Eksperimen Lighting Ratio

Buat tiga kondisi:

``` text
A. Fill hampir sama dengan Key
B. Fill sekitar setengah/lebih rendah dari Key
C. Fill sangat rendah
```

Tidak perlu menggunakan rasio matematis tertentu.

Bandingkan karakter visual:

-   flat;
-   balanced;
-   dramatic.

------------------------------------------------------------------------

# 31. Eksperimen Warna Light

Coba setup:

``` text
Key → netral/hangat ringan
Fill → netral/dingin ringan
Rim → aksen
```

Gunakan secara halus.

Tujuan eksperimen adalah memahami bahwa warna cahaya memengaruhi mood
dan pembacaan material.

Setelah eksperimen, pilih setup yang paling sesuai.

------------------------------------------------------------------------

# 32. Menambahkan Camera

Jika Camera default masih tersedia, gunakan.

Jika tidak:

``` text
Shift + A
→ Camera
```

Rename:

``` text
Hero_Camera
```

------------------------------------------------------------------------

# 33. Masuk Camera View

Gunakan:

``` text
Numpad 0
```

untuk melihat melalui camera.

Keluar/masuk kembali dengan shortcut yang sama.

------------------------------------------------------------------------

# 34. Align Camera to Current View

Atur viewport ke sudut yang diinginkan.

Kemudian:

``` text
Ctrl + Alt + Numpad 0
```

Camera akan mengikuti view saat ini.

Ini merupakan cara cepat menentukan initial composition.

------------------------------------------------------------------------

# 35. Camera sebagai Alat Komunikasi

Camera menentukan:

``` text
apa yang terlihat
+
dari mana dilihat
+
berapa banyak ruang
+
seberapa kuat perspektif
```

Karena itu camera bukan hanya "tempat mengambil screenshot".

------------------------------------------------------------------------

# 36. Center Composition

Untuk asset simetris/product render, coba:

``` text
subject di tengah frame
```

Karakter:

-   stabil;
-   formal;
-   technical;
-   jelas.

Buat satu test render.

------------------------------------------------------------------------

# 37. Rule of Thirds

Buat composition kedua.

Bayangkan frame:

``` text
┌───┬───┬───┐
│   │   │   │
├───┼───┼───┤
│   │   │   │
├───┼───┼───┤
│   │   │   │
└───┴───┴───┘
```

Tempatkan focal area dekat salah satu garis/titik perpotongan.

Sisakan negative space dengan sengaja.

------------------------------------------------------------------------

# 38. Negative Space

Negative space adalah ruang di sekitar subject.

Terlalu sempit:

``` text
frame terasa sesak
```

Terlalu luas tanpa tujuan:

``` text
subject kehilangan dominasi
```

Gunakan ruang kosong sebagai bagian dari composition.

------------------------------------------------------------------------

# 39. Camera Angle --- Eye Level

Buat camera angle pertama:

``` text
Eye Level
```

Gunakan sebagai baseline.

Amati:

-   proporsi;
-   silhouette;
-   bagian asset yang terlihat.

------------------------------------------------------------------------

# 40. Camera Angle --- Low Angle

Turunkan camera.

Arahkan sedikit ke atas.

Low angle dapat memberi kesan:

``` text
besar
kuat
dominan
```

Pada product render, gunakan secukupnya agar bentuk tidak terdistorsi
berlebihan.

------------------------------------------------------------------------

# 41. Camera Angle --- High Angle

Naikkan camera.

Arahkan ke bawah.

High angle dapat:

-   memperlihatkan top surface;
-   memberikan informasi bentuk;
-   mengubah dominasi subject.

------------------------------------------------------------------------

# 42. Camera Angle --- Top View

Buat eksperimen top/near-top view bila asset cocok.

Top view dapat berguna untuk:

-   layout;
-   technical presentation;
-   bentuk planar.

Tidak semua asset cocok dengan angle ini.

------------------------------------------------------------------------

# 43. Focal Length

Pilih Camera.

Pada Camera Properties, periksa:

``` text
Focal Length
```

Focal length memengaruhi:

``` text
Field of View
+
Perspective Character
+
Compression
```

------------------------------------------------------------------------

# 44. Eksperimen 24 mm

Set:

``` text
24 mm
```

Atur posisi camera agar asset mengisi frame dengan ukuran yang kurang
lebih setara dengan eksperimen berikutnya.

Jangan hanya mengganti focal length tanpa memindahkan camera.

Amati:

-   perspective kuat;
-   bagian dekat terlihat lebih besar;
-   ruang terasa lebih luas.

------------------------------------------------------------------------

# 45. Eksperimen 50 mm

Set:

``` text
50 mm
```

Pindahkan camera agar framing subject kurang lebih sama.

Amati:

-   perspektif lebih natural;
-   distorsi lebih moderat.

------------------------------------------------------------------------

# 46. Eksperimen 85 mm

Set:

``` text
85 mm
```

Camera perlu digeser lebih jauh agar framing sama.

Amati:

``` text
FOV lebih sempit
+
perspective compression lebih kuat
```

Rentang ini sering efektif untuk product-style image.

------------------------------------------------------------------------

# 47. Mengapa Camera Harus Dipindah?

Jika:

``` text
24 → 50 → 85 mm
```

tanpa mengubah posisi camera, ukuran subject dalam frame berubah besar.

Untuk membandingkan karakter perspektif secara adil:

``` text
ubah focal length
+
ubah camera position
+
pertahankan framing mendekati sama
```

------------------------------------------------------------------------

# 48. Tabel Studi Focal Length

Isi berdasarkan pengamatan:

  --------------------------------------------------------------------------
  Focal Length   FOV            Distorsi       Kesan          Cocok untuk
                                Perspektif                    Asset?
  -------------- -------------- -------------- -------------- --------------
  24 mm                                                       

  50 mm                                                       

  85 mm                                                       
  --------------------------------------------------------------------------

Pilih satu focal length untuk hero render.

------------------------------------------------------------------------

# 49. Depth of Field

Depth of Field (DOF) mengontrol area fokus.

Secara visual:

``` text
Focus Area
→ tajam

depan/belakang
→ blur
```

DOF membantu mengarahkan perhatian.

------------------------------------------------------------------------

# 50. Mengaktifkan DOF

Pilih Camera.

Pada Camera Properties aktifkan pengaturan Depth of Field sesuai versi
Blender.

Gunakan salah satu:

``` text
Focus Object
```

atau:

``` text
Focus Distance
```

------------------------------------------------------------------------

# 51. Membuat Focus Object

Cara mudah:

``` text
Shift + A
→ Empty
```

Rename:

``` text
DOF_Focus
```

Tempatkan pada bagian asset yang harus tajam.

Pada Camera DOF, pilih:

``` text
Focus Object = DOF_Focus
```

Keuntungan:

> titik fokus mudah dipindahkan secara visual.

------------------------------------------------------------------------

# 52. F-Stop

Eksperimen beberapa nilai.

Konsep:

``` text
F-stop kecil
→ DOF lebih dangkal
→ blur lebih kuat

F-stop besar
→ area fokus lebih luas
```

Jangan mengejar blur maksimum.

------------------------------------------------------------------------

# 53. DOF yang Baik

Pastikan bagian penting tetap tajam.

Kesalahan umum:

``` text
blur sangat kuat
```

sehingga:

-   detail texture hilang;
-   asset sulit dibaca;
-   efek terlihat sebagai gimmick.

DOF harus mendukung focal point.

------------------------------------------------------------------------

# 54. Eksperimen DOF

Buat:

``` text
DOF OFF
```

dan:

``` text
DOF ON
```

dengan composition yang sama.

Bandingkan:

-   focal point;
-   keterbacaan;
-   depth;
-   distraction background.

------------------------------------------------------------------------

# 55. HDRI

HDRI:

``` text
High Dynamic Range Image
```

dapat digunakan untuk:

``` text
Environment
+
Reflection
+
Lighting
```

Ini disebut:

# Image-Based Lighting

------------------------------------------------------------------------

# 56. Persiapan HDRI

Gunakan file HDRI yang telah disediakan untuk praktikum atau resource
legal yang telah diunduh sebelumnya.

Simpan dalam project:

``` text
environment/
└── studio.hdr
```

Jangan mengandalkan path acak di komputer.

------------------------------------------------------------------------

# 57. Memasang HDRI

Buka:

``` text
Shader Editor
```

ubah context dari:

``` text
Object
```

ke:

``` text
World
```

Tambahkan:

``` text
Environment Texture
```

Open file HDRI.

Hubungkan:

``` text
Environment Texture — Color
↓
Background — Color
↓
World Output
```

------------------------------------------------------------------------

# 58. HDRI Strength

Atur:

``` text
Background Strength
```

Perhatikan:

-   brightness;
-   reflection;
-   contrast;
-   material response.

HDRI terlalu kuat dapat mengurangi kontrol lampu studio.

------------------------------------------------------------------------

# 59. Rotasi HDRI

Untuk mengontrol arah environment:

``` text
Texture Coordinate
↓
Mapping
↓
Environment Texture
```

Gunakan rotation pada Mapping, terutama sumbu yang memutar environment
secara horizontal sesuai setup.

Putar hingga highlight jatuh pada area asset yang menarik.

------------------------------------------------------------------------

# 60. Mengapa Rotasi HDRI Penting?

File HDRI yang sama dapat menghasilkan karakter berbeda hanya dengan
mengubah orientasi.

Yang berubah:

``` text
arah sumber terang
+
reflection pattern
+
highlight
```

Jadi HDRI bukan background pasif.

------------------------------------------------------------------------

# 61. HDRI + Three-Point Lighting

Gunakan:

``` text
HDRI
+
Key
+
Fill
+
Rim
```

tetapi evaluasi ulang intensitas.

HDRI sudah memberi environment lighting sehingga lampu tambahan mungkin
perlu diturunkan.

Tujuan:

``` text
environment realism
+
artistic control
```

------------------------------------------------------------------------

# 62. EEVEE

Pilih render engine EEVEE yang tersedia pada versi Blender.

EEVEE cocok untuk:

-   viewport responsif;
-   test render;
-   iterasi lighting;
-   camera setup;
-   preview cepat.

Gunakan EEVEE terlebih dahulu untuk memperbaiki composition dan
lighting.

------------------------------------------------------------------------

# 63. Test Render EEVEE

Atur output resolution praktikum, misalnya:

``` text
1280 × 720
```

atau resolusi lain yang ditentukan dosen.

Render:

``` text
F12
```

Simpan hasil:

``` text
render_eevee.png
```

------------------------------------------------------------------------

# 64. Evaluasi EEVEE

Periksa:

-   framing;
-   highlight;
-   shadow;
-   material;
-   emission;
-   DOF;
-   background;
-   clipping;
-   contrast.

Jangan pindah ke Cycles sebelum masalah besar composition/lighting
selesai.

------------------------------------------------------------------------

# 65. Cycles

Ganti Render Engine:

``` text
Cycles
```

Cycles menggunakan pendekatan path tracing dan dapat memberikan:

-   indirect lighting;
-   reflection yang lebih fisikal;
-   realism lebih tinggi.

Konsekuensinya adalah biaya render lebih besar.

------------------------------------------------------------------------

# 66. Device untuk Cycles

Jika perangkat mendukung GPU rendering dan konfigurasi Blender telah
tersedia, mahasiswa dapat menggunakan GPU.

Jika tidak:

``` text
CPU
```

tetap dapat digunakan.

Tujuan praktikum bukan benchmarking hardware, tetapi memahami hubungan
kualitas dan biaya rendering.

------------------------------------------------------------------------

# 67. Sampling

Pada Cycles:

``` text
Samples ↑
→ noise cenderung ↓
→ render time ↑
```

Tidak selalu sample maksimum adalah pilihan terbaik.

Cari kualitas yang memadai untuk target render.

------------------------------------------------------------------------

# 68. Eksperimen Sampling

Gunakan scene/camera yang sama.

Render crop/resolusi uji atau full frame sesuai kemampuan komputer pada:

``` text
Low Samples
Medium Samples
Higher Samples
```

Contoh nilai boleh disesuaikan dengan versi Blender dan kemampuan
perangkat.

Catat:

-   noise;
-   waktu;
-   kualitas.

------------------------------------------------------------------------

# 69. Noise

Noise sering lebih terlihat pada:

-   scene gelap;
-   indirect lighting;
-   glossy reflection;
-   sample rendah;
-   area sulit mendapat cahaya.

Jika noise tinggi, jangan otomatis menaikkan samples tanpa batas.

Periksa juga lighting scene.

------------------------------------------------------------------------

# 70. Denoising

Aktifkan denoising pada pengaturan render/view layer yang tersedia pada
versi Blender.

Bandingkan:

``` text
Low Samples tanpa Denoise
```

dengan:

``` text
Low/Medium Samples + Denoise
```

Perhatikan apakah detail tetap terjaga.

------------------------------------------------------------------------

# 71. Denoising Bukan Pengganti Semua Sample

Denoising membantu membersihkan noise, tetapi input yang sangat buruk
tetap dapat menghasilkan:

-   detail hilang;
-   artefak;
-   surface terlalu halus.

Gunakan:

``` text
reasonable samples
+
denoising
```

bukan sekadar sample sangat rendah.

------------------------------------------------------------------------

# 72. Render Cycles

Setelah lighting dan sampling layak:

``` text
F12
```

Simpan:

``` text
render_cycles.png
```

Gunakan camera dan composition yang sama dengan EEVEE untuk
perbandingan.

------------------------------------------------------------------------

# 73. EEVEE vs Cycles --- Perbandingan Adil

Agar perbandingan masuk akal, pertahankan:

-   asset;
-   material;
-   camera;
-   focal length;
-   composition;
-   light setup;
-   HDRI;
-   resolution.

Yang terutama berubah:

``` text
Render Engine
+
engine-specific settings
```

------------------------------------------------------------------------

# 74. Tabel Perbandingan

Isi:

  Aspek                 EEVEE   Cycles
  --------------------- ------- --------
  Render time                   
  Noise                         
  Shadow                        
  Reflection                    
  Indirect lighting             
  Material appearance           
  Responsiveness                
  Kualitas akhir                

Kesimpulan harus berdasarkan hasil scene mahasiswa sendiri.

------------------------------------------------------------------------

# 75. Test Render dan Iterasi

Gunakan siklus:

``` text
Render
↓
Inspect
↓
Find Biggest Problem
↓
Adjust One/Few Variables
↓
Render Again
```

Contoh:

``` text
Rim terlalu kuat
→ turunkan Rim
→ test

Composition terlalu sempit
→ ubah camera
→ test
```

------------------------------------------------------------------------

# 76. Jangan Mengubah Semua Sekaligus

Jika sekaligus mengubah:

-   Key;
-   Fill;
-   Rim;
-   HDRI;
-   camera;
-   DOF;

mahasiswa sulit mengetahui penyebab perubahan hasil.

Gunakan pendekatan terkontrol:

``` text
one major change
→ observe
→ continue
```

------------------------------------------------------------------------

# 77. Final Hero Render

Pilih:

-   camera angle terbaik;
-   focal length terbaik;
-   lighting terbaik;
-   HDRI orientation terbaik;
-   DOF yang wajar;
-   render engine final.

Hasil harus:

``` text
subject jelas
+
material terbaca
+
silhouette kuat
+
composition rapi
+
lighting terkontrol
```

------------------------------------------------------------------------

# 78. Milestone 1 --- Scene Preparation

-   asset P10 loaded;
-   texture tidak missing;
-   ground tersedia;
-   object berada pada posisi layak;
-   file P11 tersimpan.

------------------------------------------------------------------------

# 79. Milestone 2 --- Four-Light Study

Mahasiswa telah menguji:

``` text
Point
Sun
Spot
Area
```

dan dapat menjelaskan karakter masing-masing.

------------------------------------------------------------------------

# 80. Milestone 3 --- Three-Point Lighting

Scene mempunyai:

``` text
Key_Light
Fill_Light
Rim_Light
```

dengan peran visual berbeda.

------------------------------------------------------------------------

# 81. Milestone 4 --- Camera Composition

Minimal membuat:

``` text
Center Composition
+
Rule of Thirds / alternative composition
```

Pilih satu untuk final.

------------------------------------------------------------------------

# 82. Milestone 5 --- Camera Angle

Bandingkan minimal tiga:

``` text
Eye Level
Low Angle
High Angle
```

Top View opsional sesuai asset.

------------------------------------------------------------------------

# 83. Milestone 6 --- Focal Length

Bandingkan:

``` text
24 mm
50 mm
85 mm
```

dengan framing yang dibuat relatif setara melalui perubahan posisi
camera.

------------------------------------------------------------------------

# 84. Milestone 7 --- Depth of Field

DOF diterapkan.

Pastikan focal point jelas dan detail penting tidak blur berlebihan.

------------------------------------------------------------------------

# 85. Milestone 8 --- HDRI

HDRI:

-   terpasang;
-   strength diperiksa;
-   rotation diuji;
-   dikombinasikan dengan light tambahan.

------------------------------------------------------------------------

# 86. Milestone 9 --- EEVEE

Satu render EEVEE disimpan dan dievaluasi.

------------------------------------------------------------------------

# 87. Milestone 10 --- Cycles

Satu render Cycles disimpan.

Sampling dan denoising dipahami/dicatat.

------------------------------------------------------------------------

# 88. Milestone 11 --- Comparison

EEVEE dan Cycles dibandingkan dengan kondisi scene yang cukup konsisten.

------------------------------------------------------------------------

# 89. Milestone 12 --- Hero Render

Satu final hero render dipilih dan disimpan pada resolusi yang
ditentukan.

------------------------------------------------------------------------

# 90. Eksperimen Wajib 1 --- Point Radius

Bandingkan Point Light dengan:

``` text
Radius kecil
vs
Radius besar
```

Jelaskan pengaruh pada softness.

------------------------------------------------------------------------

# 91. Eksperimen Wajib 2 --- Sun Angle

Bandingkan:

``` text
Sun Angle kecil
vs
Sun Angle besar
```

Amati shadow.

------------------------------------------------------------------------

# 92. Eksperimen Wajib 3 --- Spot Blend

Bandingkan Spot dengan:

``` text
Blend rendah
vs
Blend tinggi
```

Amati transisi batas cone.

------------------------------------------------------------------------

# 93. Eksperimen Wajib 4 --- Area Size

Bandingkan:

``` text
Area kecil
vs
Area besar
```

Amati shadow dan highlight.

------------------------------------------------------------------------

# 94. Eksperimen Wajib 5 --- Key/Fill Ratio

Bandingkan Fill:

``` text
kuat
sedang
lemah
```

Pilih contrast terbaik.

------------------------------------------------------------------------

# 95. Eksperimen Wajib 6 --- Rim Light

Bandingkan:

``` text
Rim OFF
vs
Rim ON
```

Jelaskan pengaruh terhadap silhouette/background separation.

------------------------------------------------------------------------

# 96. Eksperimen Wajib 7 --- Camera Angle

Render preview:

``` text
Eye Level
Low Angle
High Angle
```

Pilih angle yang paling efektif untuk asset.

------------------------------------------------------------------------

# 97. Eksperimen Wajib 8 --- Focal Length

Bandingkan:

``` text
24
50
85 mm
```

Pertahankan ukuran subject di frame semirip mungkin.

------------------------------------------------------------------------

# 98. Eksperimen Wajib 9 --- DOF

Bandingkan:

``` text
DOF OFF
vs
DOF ON
```

Jelaskan apakah DOF memperkuat focal point.

------------------------------------------------------------------------

# 99. Eksperimen Wajib 10 --- HDRI Rotation

Render dua orientasi HDRI.

Amati perubahan:

-   highlight;
-   reflection;
-   lighting direction.

------------------------------------------------------------------------

# 100. Eksperimen Wajib 11 --- EEVEE vs Cycles

Gunakan scene dan camera sama.

Bandingkan kualitas visual dan render time.

------------------------------------------------------------------------

# 101. Eksperimen Wajib 12 --- Cycles Samples

Bandingkan minimal tiga tingkat sampling.

Catat:

``` text
samples
render time
noise
```

------------------------------------------------------------------------

# 102. Eksperimen Wajib 13 --- Denoising

Bandingkan:

``` text
Denoise OFF
vs
Denoise ON
```

pada sampling yang sama.

------------------------------------------------------------------------

# 103. Tugas Utama

Buat satu:

# Product-Style Hero Render

Requirement:

-   [ ] menggunakan asset P9--P10;
-   [ ] ground/background;
-   [ ] studi Point;
-   [ ] studi Sun;
-   [ ] studi Spot;
-   [ ] studi Area;
-   [ ] three-point lighting;
-   [ ] Key Light;
-   [ ] Fill Light;
-   [ ] Rim Light;
-   [ ] composition;
-   [ ] minimal tiga camera angle;
-   [ ] focal length 24/50/85 mm;
-   [ ] DOF;
-   [ ] HDRI;
-   [ ] HDRI rotation;
-   [ ] EEVEE render;
-   [ ] Cycles render;
-   [ ] sampling study;
-   [ ] denoising study;
-   [ ] comparison;
-   [ ] final hero render;
-   [ ] minimal dua challenge.

------------------------------------------------------------------------

# 104. Challenge A --- Dramatic Lighting

Buat versi kedua dengan contrast lebih tinggi.

Gunakan:

``` text
strong Key
+
weak Fill
+
controlled Rim
```

Pastikan asset tetap terbaca.

------------------------------------------------------------------------

# 105. Challenge B --- Soft Studio Lighting

Buat setup:

``` text
large Area Key
+
large Area Fill
+
soft Rim
```

Target:

-   shadow lembut;
-   material jelas;
-   product catalog feel.

------------------------------------------------------------------------

# 106. Challenge C --- Outdoor Sun + HDRI

Gunakan:

``` text
Sun
+
HDRI
```

untuk membuat setup outdoor/daylight.

Bandingkan dengan studio three-point lighting.

------------------------------------------------------------------------

# 107. Challenge D --- Colored Rim

Gunakan Rim Light dengan warna aksen halus.

Jelaskan:

-   tujuan;
-   pengaruh pada silhouette;
-   apakah material tetap terlihat natural.

------------------------------------------------------------------------

# 108. Challenge E --- Two-Camera Story

Buat dua camera:

``` text
Hero_Camera
Detail_Camera
```

Hero menunjukkan keseluruhan asset.

Detail Camera fokus pada bagian penting dengan DOF.

------------------------------------------------------------------------

# 109. Challenge F --- Focal Length Story

Buat tiga render final mini:

``` text
24 mm
50 mm
85 mm
```

dengan framing subject mendekati sama.

Tuliskan analisis singkat perubahan perspektif.

------------------------------------------------------------------------

# 110. Challenge G --- HDRI + Artistic Light

Gunakan HDRI sebagai environment, tetapi buat satu Key/Rim tambahan
untuk mengontrol focal point.

Target:

``` text
natural environment response
+
intentional visual hierarchy
```

------------------------------------------------------------------------

# 111. Challenge H --- Cycles Optimization

Cari setting Cycles yang memberikan kompromi baik antara:

``` text
quality
vs
render time
```

Gunakan:

-   sampling;
-   denoising;
-   lighting yang cukup.

Dokumentasikan before/after.

------------------------------------------------------------------------

# 112. Debugging --- Scene Terlalu Gelap

Periksa:

-   light power;
-   arah light;
-   HDRI strength;
-   apakah light menghadap subject;
-   exposure/view transform jika diubah.

Jangan hanya menaikkan semua lampu sekaligus.

------------------------------------------------------------------------

# 113. Debugging --- Scene Terlihat Flat

Kemungkinan:

``` text
Fill terlalu kuat
+
Key terlalu frontal
+
contrast terlalu rendah
```

Coba:

-   pindahkan Key ke samping;
-   turunkan Fill;
-   tambahkan separation melalui Rim.

------------------------------------------------------------------------

# 114. Debugging --- Shadow Terlalu Tajam

Periksa ukuran sumber cahaya.

Untuk Area:

``` text
Size ↑
→ softness ↑
```

Untuk Point:

``` text
Radius ↑
→ softness ↑
```

Untuk Sun:

``` text
Angle ↑
→ softness ↑
```

------------------------------------------------------------------------

# 115. Debugging --- Rim Tidak Terlihat

Periksa:

-   posisi di belakang;
-   arah light;
-   power;
-   background;
-   apakah Key terlalu kuat.

Rim harus mengenai edge subject yang terlihat oleh camera.

------------------------------------------------------------------------

# 116. Debugging --- Object Terpotong Camera

Periksa framing melalui:

``` text
Numpad 0
```

Atur camera position/focal length.

Jangan memperbaiki semua crop dengan focal length saja; composition
harus dievaluasi.

------------------------------------------------------------------------

# 117. Debugging --- Perspective Terlalu Distorted

Jika menggunakan focal length sangat wide dan camera sangat dekat:

``` text
perspective distortion ↑
```

Coba:

``` text
focal length lebih panjang
+
camera lebih jauh
```

sambil mempertahankan framing.

------------------------------------------------------------------------

# 118. Debugging --- DOF Blur Berlebihan

Periksa:

-   Focus Object/Distance;
-   F-Stop;
-   jarak camera;
-   focal length.

Naikkan F-Stop atau ubah fokus.

------------------------------------------------------------------------

# 119. Debugging --- HDRI Tidak Muncul

Periksa World Shader:

``` text
Environment Texture
→ Background
→ World Output
```

Periksa juga file path dan viewport/render mode.

------------------------------------------------------------------------

# 120. Debugging --- HDRI Mengalahkan Lampu Studio

Turunkan:

``` text
Background Strength
```

atau naikkan lampu studio secara terkontrol.

Tujuan bukan membuat semua sumber sama kuat.

------------------------------------------------------------------------

# 121. Debugging --- Cycles Sangat Noise

Periksa:

-   samples;
-   denoising;
-   scene terlalu gelap;
-   area shadow;
-   reflection;
-   lighting.

Tambah samples secara bertahap, bukan langsung ekstrem.

------------------------------------------------------------------------

# 122. Debugging --- Render Terlalu Lama

Untuk iterasi:

``` text
gunakan EEVEE
atau
Cycles samples lebih rendah
atau
resolution lebih rendah
```

Final quality dinaikkan setelah composition dan lighting stabil.

------------------------------------------------------------------------

# 123. Debugging --- EEVEE dan Cycles Sangat Berbeda

Sebagian perbedaan memang dapat terjadi karena pendekatan engine
berbeda.

Periksa:

-   lighting;
-   material;
-   environment;
-   engine-specific behavior/settings.

Dokumentasikan perbedaan, jangan memaksa hasil harus identik.

------------------------------------------------------------------------

# 124. Test Case

    No. Pengujian       Hasil yang Diharapkan
  ----- --------------- ---------------------------------
      1 Asset P10       Material/texture tampil
      2 Ground          Shadow/reference ruang tersedia
      3 Point           Lighting lokal bekerja
      4 Sun             Arah mengikuti rotation
      5 Spot            Cone dapat dikontrol
      6 Area            Soft lighting terlihat
      7 Key             Cahaya utama jelas
      8 Fill            Shadow tidak hilang total
      9 Rim             Silhouette lebih terpisah
     10 Camera          Framing terkontrol
     11 Angle           Persepsi berubah
     12 24 mm           Wide perspective terlihat
     13 50 mm           Perspective moderat
     14 85 mm           Compression meningkat
     15 DOF             Focal point jelas
     16 HDRI            Environment lighting bekerja
     17 HDRI rotation   Highlight berubah
     18 EEVEE           Preview/render berhasil
     19 Cycles          Path-traced render berhasil
     20 Sampling        Noise berubah
     21 Denoising       Noise berkurang
     22 Comparison      Kondisi cukup konsisten
     23 Hero Render     Subject menjadi focal point
     24 Reopen file     Scene/resource tetap bekerja

------------------------------------------------------------------------

# 125. Pertanyaan Pemahaman

1.  Apa fungsi lighting?
2.  Mengapa model bagus dapat terlihat datar?
3.  Apa fungsi camera?
4.  Apa karakter Point Light?
5.  Apa parameter utama Point Light?
6.  Apa pengaruh Radius Point?
7.  Apa karakter Sun Light?
8.  Mengapa Rotation penting pada Sun?
9.  Apa pengaruh Sun Angle?
10. Apa karakter Spot Light?
11. Apa fungsi Spot Size?
12. Apa fungsi Spot Blend?
13. Apa karakter Area Light?
14. Mengapa Area Light cocok untuk product render?
15. Apa pengaruh Area Size?
16. Apa lima aspek kualitas lighting?
17. Apa itu three-point lighting?
18. Apa fungsi Key Light?
19. Apa fungsi Fill Light?
20. Mengapa Fill biasanya lebih lemah dari Key?
21. Apa fungsi Rim Light?
22. Apa itu camera composition?
23. Apa fungsi negative space?
24. Apa itu rule of thirds?
25. Kapan center composition cocok?
26. Bagaimana low angle memengaruhi persepsi?
27. Bagaimana high angle memengaruhi persepsi?
28. Apa itu focal length?
29. Apa karakter focal length wide?
30. Apa karakter 35--50 mm?
31. Apa karakter 85 mm atau lebih?
32. Mengapa posisi camera harus disesuaikan saat membandingkan focal
    length?
33. Apa itu Depth of Field?
34. Apa fungsi Focus Distance/Focus Object?
35. Apa pengaruh F-Stop kecil?
36. Apa pengaruh F-Stop besar?
37. Apa itu HDRI?
38. Apa itu Image-Based Lighting?
39. Mengapa HDRI dapat memengaruhi reflection?
40. Mengapa HDRI perlu diputar?
41. Mengapa HDRI dapat digabungkan dengan additional light?
42. Apa karakter EEVEE?
43. Apa karakter Cycles?
44. Apa itu path tracing secara umum dalam konteks materi ini?
45. Apa itu sampling?
46. Apa hubungan samples dengan noise?
47. Apa hubungan samples dengan render time?
48. Apa fungsi denoising?
49. Mengapa rendering bersifat iteratif?
50. Kapan sebaiknya memilih EEVEE dan kapan Cycles?

------------------------------------------------------------------------

# 126. Pertanyaan Analisis

## A --- Lighting

Sebuah asset mempunyai material bagus tetapi terlihat datar. Key dan
Fill berada hampir frontal dengan intensitas hampir sama.

Apa kemungkinan masalahnya?

## B --- Area Size

Mengapa memperbesar Area Light dapat membuat product render terlihat
lebih lembut?

## C --- Fill

Apa yang terjadi jika Fill lebih kuat daripada Key?

## D --- Rim

Mengapa Rim Light lebih terasa manfaatnya jika warna subject dan
background memiliki tonal value yang berdekatan?

## E --- Focal Length

Mengapa perbandingan 24 mm dan 85 mm tidak adil jika camera tidak
dipindahkan?

## F --- DOF

Mengapa DOF yang sangat dangkal tidak selalu menghasilkan render yang
lebih profesional?

## G --- HDRI

Mengapa memutar HDRI dapat mengubah material metal secara drastis?

## H --- Render Engine

Mengapa EEVEE sangat berguna meskipun final render akan dibuat
menggunakan Cycles?

## I --- Sampling

Mengapa menaikkan samples bukan satu-satunya cara memperbaiki render
yang noise?

## J --- Pipeline

Mengapa final image merupakan hasil gabungan asset, material, lighting,
camera, dan render engine?

------------------------------------------------------------------------

# 127. Dokumentasi Wajib

Ambil screenshot/render minimal:

``` text
01 Point Light Study
02 Sun Light Study
03 Spot Light Study
04 Area Light Study
05 Three-Point Lighting
06 Center Composition
07 Alternative Composition
08 Camera Angles
09 Focal Length 24 mm
10 Focal Length 50 mm
11 Focal Length 85 mm
12 DOF
13 HDRI
14 EEVEE
15 Cycles
16 Sampling / Denoising Study
17 Final Hero Render
```

------------------------------------------------------------------------

# 128. Struktur Pengumpulan

``` text
P11_NRP_Nama/
├── P11_NRP_Nama.blend
├── environment/
│   └── ...
├── textures/
│   └── ...
├── renders/
│   ├── light_point.png
│   ├── light_sun.png
│   ├── light_spot.png
│   ├── light_area.png
│   ├── focal_24.png
│   ├── focal_50.png
│   ├── focal_85.png
│   ├── render_eevee.png
│   ├── render_cycles.png
│   └── hero_final.png
└── README.md
```

------------------------------------------------------------------------

# 129. Isi README

Tuliskan:

``` text
Nama
NRP
Nama Asset

LIGHTING
- karakter Point
- karakter Sun
- karakter Spot
- karakter Area
- setup Key
- setup Fill
- setup Rim
- alasan lighting final

CAMERA
- composition
- angle final
- focal length final
- hasil perbandingan 24/50/85 mm
- pengaturan DOF

HDRI
- HDRI yang digunakan
- alasan orientation
- penggunaan additional light

RENDER
- EEVEE result
- Cycles result
- sampling study
- denoising
- render time
- engine final

CHALLENGE
- challenge yang dikerjakan

REFLEKSI
- kendala
- solusi
```

------------------------------------------------------------------------

# 130. Checklist Pengumpulan

-   [ ] file `.blend` tersedia;
-   [ ] asset P9--P10 digunakan;
-   [ ] texture tidak missing;
-   [ ] ground/background tersedia;
-   [ ] Point diuji;
-   [ ] Sun diuji;
-   [ ] Spot diuji;
-   [ ] Area diuji;
-   [ ] Key tersedia;
-   [ ] Fill tersedia;
-   [ ] Rim tersedia;
-   [ ] lighting ratio diperiksa;
-   [ ] composition dibuat;
-   [ ] camera angle dibandingkan;
-   [ ] 24 mm diuji;
-   [ ] 50 mm diuji;
-   [ ] 85 mm diuji;
-   [ ] DOF digunakan;
-   [ ] HDRI digunakan;
-   [ ] HDRI rotation diuji;
-   [ ] EEVEE render tersedia;
-   [ ] Cycles render tersedia;
-   [ ] sampling study dilakukan;
-   [ ] denoising diuji;
-   [ ] EEVEE vs Cycles dibandingkan;
-   [ ] minimal dua challenge;
-   [ ] final hero render tersedia;
-   [ ] README tersedia.

------------------------------------------------------------------------

# 131. Refleksi Praktikum

Tuliskan 6--10 kalimat:

1.  light yang paling cocok untuk asset;
2.  fungsi Key/Fill/Rim;
3.  camera angle terbaik;
4.  focal length terbaik;
5.  pengaruh DOF;
6.  pengaruh HDRI;
7.  perbedaan EEVEE dan Cycles yang terlihat;
8.  pengaruh sampling;
9.  manfaat denoising;
10. perubahan paling penting yang meningkatkan final render.

------------------------------------------------------------------------

# 132. Hubungan dengan Pertemuan 12

Pertemuan 9--11 membentuk pipeline asset:

``` text
Modeling
↓
UV + Material + Texture
↓
Lighting + Camera + Rendering
↓
Final 3D Asset / Image
```

Pertemuan berikutnya berpindah ke:

# Unity 3D & Real-Time Rendering Pipeline

Konsep yang telah dipelajari tetap relevan:

``` text
Geometry
Material
Texture
Lighting
Camera
Rendering
```

tetapi diterapkan dalam lingkungan real-time.

------------------------------------------------------------------------

# 133. Ringkasan Praktikum

Workflow:

``` text
Load P10 Asset
↓
Ground
↓
Four-Light Study
↓
Three-Point Lighting
↓
Camera Composition
↓
Camera Angle
↓
24 / 50 / 85 mm
↓
Depth of Field
↓
HDRI
↓
EEVEE Test Render
↓
Cycles
↓
Sampling
↓
Denoising
↓
EEVEE vs Cycles
↓
Iteration
↓
Final Hero Render
```

Benang merah:

``` text
Lighting
→ menunjukkan bentuk dan material

Camera
→ menentukan cara subject dikomunikasikan

Focal Length
→ mengubah field of view dan perspektif

DOF
→ mengarahkan fokus

HDRI
→ environment + reflection + lighting

EEVEE
→ iterasi cepat

Cycles
→ path-traced realism

Sampling + Denoising
→ kualitas vs biaya render
```

Target akhir:

# Product-Style Hero Render

yang memperlihatkan asset P9--P10 secara jelas, terkontrol, dan siap
menjadi dasar pemahaman sebelum masuk ke **Unity 3D & Real-Time
Rendering Pipeline**.
