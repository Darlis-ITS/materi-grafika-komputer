# Modul Praktikum Grafika Komputer --- Pertemuan 13

## Unity Lighting, Material & Post Processing --- Unity 6+ / URP

**Mata Kuliah:** EF234504 --- Grafika Komputer\
**Pertemuan:** 13\
**Topik:** Unity Lighting, Material & Post Processing\
**Platform:** Unity 6+ --- Universal Render Pipeline (URP)\
**Dosen:** Dr. Darlis Herumurti\
**Departemen:** Teknik Informatika

------------------------------------------------------------------------

# 1. Deskripsi Praktikum

Pertemuan 13 melanjutkan scene **Unity 6+ URP** dari Pertemuan 12.

Pada P12 mahasiswa telah melakukan:

``` text
Blender Asset
↓
FBX Import
↓
GameObject + Component
↓
Transform + Hierarchy
↓
URP Material
↓
Prefab
↓
Camera
↓
Basic Lighting
```

Pada P13 scene tersebut dikembangkan menjadi scene real-time yang
mempunyai **lighting hierarchy, shadow, environment, material response,
dan post-processing** yang terarah.

Praktikum utama:

# Bright/Day vs Dark/Night Scene

Mahasiswa membuat dua look dari geometry dan camera yang sama:

``` text
P13_Day
P13_Night
```

Perbedaan utama berasal dari:

``` text
Lighting
+
Environment
+
Material Tuning
+
Post Processing
```

------------------------------------------------------------------------

# 2. Kompatibilitas Unity 6+

Modul ini menggunakan workflow yang didukung pada **Unity 6+ dengan
Universal Render Pipeline**:

-   Directional Light;
-   Point Light;
-   Spot Light;
-   Realtime, Baked, dan Mixed Light;
-   Lighting Settings;
-   lightmapping;
-   Mesh Renderer shadow settings;
-   URP/Lit;
-   Global Volume;
-   URP integrated post-processing;
-   Bloom;
-   Color Adjustments;
-   Tonemapping;
-   Depth of Field;
-   Screen Space Ambient Occlusion (SSAO).

## Catatan penting Unity 6

Post-processing URP sudah terintegrasi dengan **Volume framework**.
Modul ini **tidak menggunakan Post Processing Stack v2**.

Untuk efek seperti:

``` text
Bloom
Color Adjustments
Tonemapping
Depth of Field
```

gunakan **Volume Override**.

Untuk **Ambient Occlusion pada URP**, workflow yang digunakan adalah
**Screen Space Ambient Occlusion (SSAO) Renderer Feature**, bukan
sekadar menambahkan "Ambient Occlusion" ke Global Volume.

Nama submenu dapat sedikit berbeda pada minor release Unity 6, tetapi
konsep dan komponen yang digunakan tetap sama.

------------------------------------------------------------------------

# 3. Capaian Praktikum

Setelah praktikum mahasiswa mampu:

1.  menjelaskan fungsi lighting dalam real-time rendering;
2.  menggunakan Directional Light;
3.  menggunakan Point Light;
4.  menggunakan Spot Light;
5.  membandingkan karakter tiga light tersebut;
6.  mengatur intensity, color, range, dan spot angle;
7.  membangun lighting hierarchy;
8.  membedakan Realtime, Baked, dan Mixed Lighting;
9.  menyiapkan object statis untuk baked lighting;
10. menjelaskan fungsi lightmap;
11. memahami kebutuhan UV lightmap;
12. melakukan bake lighting sederhana;
13. mengatur cast dan receive shadow;
14. memahami shadow distance dan resolution secara konseptual;
15. mengevaluasi respons URP/Lit material;
16. menggunakan emission secara terarah;
17. mengatur environment lighting;
18. membuat Global Volume;
19. mengaktifkan post-processing pada Camera;
20. menggunakan Bloom;
21. menggunakan Color Adjustments;
22. menggunakan Tonemapping;
23. menggunakan Depth of Field;
24. menambahkan SSAO pada URP Renderer;
25. membuat Day Look;
26. membuat Night Look;
27. membandingkan kualitas visual dan biaya fitur;
28. melakukan iterasi lighting sebelum post-processing;
29. mendokumentasikan keputusan visual secara teknis.

------------------------------------------------------------------------

# 4. Target Akhir

Mahasiswa menghasilkan dua scene/look:

``` text
P13_Day
P13_Night
```

dengan:

-   geometry sama;
-   material dasar konsisten;
-   camera sebanding;
-   lighting berbeda;
-   environment berbeda;
-   post-processing berbeda;
-   screenshot perbandingan;
-   penjelasan teknis.

Minimum:

``` text
Directional Light
Point Light
Spot Light
Shadow
Realtime/Baked/Mixed Study
URP Material Review
Environment Lighting
Global Volume
Bloom
Color Adjustments
Tonemapping
Depth of Field
SSAO
Day Look
Night Look
```

------------------------------------------------------------------------

# 5. Prinsip Utama Praktikum

Jangan membangun look dengan urutan:

``` text
Scene jelek
↓
Bloom besar
↓
Color Filter kuat
↓
Exposure ekstrem
```

Gunakan:

``` text
Material
↓
Main Light
↓
Environment
↓
Local Light
↓
Shadow
↓
Exposure
↓
Post Processing
↓
Fine Tuning
```

Prinsip:

> **Post-processing memperkuat lighting yang sudah benar, bukan
> menggantikan lighting.**

------------------------------------------------------------------------

# 6. Persiapan Project

Gunakan project P12.

Sebelum mengubahnya, buat backup.

Contoh:

``` text
P12_NRP_Nama
↓
copy / duplicate project
↓
P13_NRP_Nama
```

Pastikan:

``` text
[ ] Unity 6+
[ ] URP
[ ] asset P12 tersedia
[ ] material tidak pink
[ ] texture tersedia
[ ] Main Camera bekerja
[ ] scene dapat Play
[ ] Console tidak memiliki error utama
```

------------------------------------------------------------------------

# 7. Menyiapkan Scene Day dan Night

Buka scene P12.

Simpan sebagai:

``` text
Assets/Scenes/P13_Day.unity
```

Kemudian duplicate scene:

``` text
P13_Day
↓
P13_Night
```

Dengan cara ini geometry awal kedua scene sama.

------------------------------------------------------------------------

# 8. Mengapa Dua Scene?

Tujuan praktikum adalah membandingkan:

``` text
same geometry
+
similar camera
+
different lighting decisions
```

Jika geometry juga diubah drastis, sulit mengetahui apakah perubahan
visual berasal dari lighting atau dari scene.

------------------------------------------------------------------------

# 9. Struktur Hierarchy

Gunakan hierarchy yang jelas:

``` text
P13 Scene
├── Environment
│   ├── Ground
│   ├── StaticGeometry
│   └── Props
├── Hero
├── Lighting
│   ├── Main_Directional
│   ├── Local_Point
│   └── Accent_Spot
├── PostProcessing
│   └── Global Volume
└── Main Camera
```

Tidak wajib identik, tetapi grouping harus mudah dipahami.

------------------------------------------------------------------------

# 10. Bagian A --- Review Material

Sebelum lighting, periksa material.

Pilih Hero Asset.

Pastikan shader:

``` text
Universal Render Pipeline/Lit
```

Periksa:

``` text
Base Map
Metallic
Smoothness
Normal Map
Emission jika digunakan
```

------------------------------------------------------------------------

# 11. Mengapa Material Diperiksa Lebih Dulu?

Lighting bekerja terhadap properti surface.

Jika material salah:

``` text
lighting benar
+
material salah
=
hasil tetap salah
```

Contoh:

-   metallic terlalu tinggi;
-   smoothness terbalik;
-   normal map tidak dikonfigurasi;
-   emission terlalu kuat.

------------------------------------------------------------------------

# 12. Roughness vs Smoothness

Ingat dari P12:

``` text
Smoothness ≈ 1 - Roughness
```

Jika roughness digunakan langsung sebagai smoothness:

``` text
surface kasar
→ dapat terlihat halus

surface halus
→ dapat terlihat kasar
```

Pastikan material response masuk akal sebelum mengatur light.

------------------------------------------------------------------------

# 13. Eksperimen Material Response

Gunakan satu Directional Light sementara.

Bandingkan pada object:

``` text
Smoothness rendah
vs
Smoothness tinggi
```

Amati:

-   highlight;
-   reflection;
-   bentuk highlight.

Kembalikan nilai final setelah eksperimen.

------------------------------------------------------------------------

# 14. Bagian B --- Directional Light

Pada scene Day, pilih Directional Light dari P12 atau buat:

``` text
GameObject
→ Light
→ Directional Light
```

Rename:

``` text
Main_Directional
```

------------------------------------------------------------------------

# 15. Karakter Directional Light

Directional Light mensimulasikan sumber sangat jauh.

Konsep:

``` text
Direction penting
Position tidak dominan
```

Cocok sebagai:

``` text
Sun / Moon-like main light
```

------------------------------------------------------------------------

# 16. Directional Light --- Day

Untuk Day Look:

1.  rotate Directional Light;
2.  buat arah cahaya yang memperlihatkan bentuk;
3.  gunakan warna relatif netral atau sedikit hangat;
4.  atur intensity secukupnya.

Jangan mengejar angka tertentu. Nilai bergantung scene, exposure,
material, dan environment.

------------------------------------------------------------------------

# 17. Eksperimen Sudut Matahari

Buat dua screenshot:

``` text
A. Sun High
B. Sun Low
```

Amati:

``` text
Sun High
→ shadow cenderung lebih pendek

Sun Low
→ shadow lebih panjang
→ bentuk dapat lebih dramatis
```

Pilih salah satu untuk Day final.

------------------------------------------------------------------------

# 18. Eksperimen Color

Bandingkan:

``` text
Neutral
Warm
Cool
```

Gunakan perubahan warna kecil.

Tujuan:

> memahami pengaruh color temperature secara visual tanpa membuat scene
> penuh warna ekstrem.

------------------------------------------------------------------------

# 19. Bagian C --- Point Light

Tambahkan:

``` text
GameObject
→ Light
→ Point Light
```

Rename:

``` text
Local_Point
```

Tempatkan dekat lampu/prop yang secara visual masuk akal.

------------------------------------------------------------------------

# 20. Point Light

Point Light memancarkan cahaya dari satu posisi ke berbagai arah.

Parameter penting:

``` text
Position
Range
Intensity
Color
Shadows
```

Point Light cocok untuk sumber lokal.

------------------------------------------------------------------------

# 21. Eksperimen Range

Set range kecil.

Amati object yang terkena.

Naikkan range.

Amati area pengaruh.

Prinsip:

``` text
Range bukan sekadar brightness
```

Range menentukan wilayah kontribusi light.

------------------------------------------------------------------------

# 22. Eksperimen Intensity

Gunakan range tetap.

Bandingkan intensity rendah dan lebih tinggi.

Amati:

-   readability;
-   highlight;
-   material;
-   kemungkinan overbright.

Jangan membuat lampu lokal menerangi seluruh scene tanpa alasan.

------------------------------------------------------------------------

# 23. Bagian D --- Spot Light

Tambahkan:

``` text
GameObject
→ Light
→ Spot Light
```

Rename:

``` text
Accent_Spot
```

Arahkan ke Hero Asset atau focal area.

------------------------------------------------------------------------

# 24. Spot Light

Spot Light dipengaruhi oleh:

``` text
Position
Rotation
Range
Spot Angle
Intensity
Color
```

Berbeda dengan Point:

> Rotation sangat penting.

------------------------------------------------------------------------

# 25. Eksperimen Spot Angle

Bandingkan:

``` text
cone sempit
vs
cone lebar
```

Amati:

-   focal area;
-   falloff;
-   mood.

Pilih angle yang mendukung fungsi light.

------------------------------------------------------------------------

# 26. Eksperimen Spot Direction

Rotate Spot Light.

Amati bagaimana focal area berpindah.

Gunakan Spot sebagai:

``` text
accent
```

bukan lampu tambahan tanpa tujuan.

------------------------------------------------------------------------

# 27. Perbandingan Tiga Light

Isi tabel:

  Light         Direction    Position        Range    Kegunaan pada Scene
  ------------- ------------ --------------- -------- ---------------------
  Directional   penting      tidak dominan   global   
  Point         semua arah   penting         lokal    
  Spot          cone         penting         lokal    

Tuliskan contoh penggunaan masing-masing.

------------------------------------------------------------------------

# 28. Lighting Hierarchy

Susun:

``` text
Primary Light
↓
Secondary / Local
↓
Environment Fill
↓
Accent
```

Contoh Day:

``` text
Directional
→ Primary

Environment
→ Fill

Point/Spot
→ hanya jika diperlukan
```

Contoh Night:

``` text
Moon-like Directional
→ weak primary

Point
→ local source

Spot
→ focal accent
```

------------------------------------------------------------------------

# 29. Bagian E --- Shadow

Pada setiap Light yang relevan, periksa opsi Shadows.

Gunakan shadow bila dibutuhkan.

Periksa Hero dan Ground.

Tujuan:

``` text
Object
↓
Contact Shadow / Cast Shadow
↓
Ground
```

------------------------------------------------------------------------

# 30. Cast Shadow

Pada Mesh Renderer, periksa pengaturan shadow.

Object yang menghasilkan bayangan:

``` text
Cast Shadows
```

harus sesuai kebutuhan.

Tidak semua object kecil harus selalu menghasilkan shadow pada project
nyata, tetapi P13 menggunakannya untuk memahami grounding.

------------------------------------------------------------------------

# 31. Receive Shadow

Surface ground/material yang menerima lighting harus dapat
memperlihatkan shadow.

Periksa bahwa Ground menggunakan shader/material yang mendukung
lighting.

------------------------------------------------------------------------

# 32. Visual Grounding

Bandingkan:

``` text
Shadow OFF
vs
Shadow ON
```

pada Hero Asset.

Amati apakah object terasa:

``` text
melayang
vs
menyatu dengan ground
```

Dokumentasikan.

------------------------------------------------------------------------

# 33. Shadow Distance

Shadow Distance adalah bagian dari konfigurasi URP/quality yang
menentukan seberapa jauh real-time shadow dipertahankan dari camera.

Untuk praktikum:

1.  identifikasi setting Shadow Distance pada URP/Quality settings yang
    digunakan project;
2.  jangan ubah ekstrem;
3.  lakukan eksperimen bila scene cukup luas.

Konsep:

``` text
distance terlalu jauh
→ cost dapat meningkat

distance terlalu dekat
→ shadow hilang terlalu cepat
```

------------------------------------------------------------------------

# 34. Shadow Resolution

Resolusi shadow memengaruhi detail shadow.

Konsep:

``` text
resolution ↑
→ detail potensial ↑
→ resource cost ↑
```

Untuk P13, cukup lakukan observasi pada setting URP yang digunakan.
Optimisasi mendalam dibahas P15.

------------------------------------------------------------------------

# 35. Bagian F --- Realtime Lighting

Pilih satu Light.

Pada Light Inspector, gunakan mode/bake type:

``` text
Realtime
```

Realtime cocok jika:

-   light berubah;
-   object bergerak;
-   lighting harus responsif saat runtime.

------------------------------------------------------------------------

# 36. Eksperimen Realtime

Play scene.

Ubah Rotation Directional Light atau posisi/intensity Point Light ketika
runtime.

Amati perubahan lighting langsung.

Catatan:

> perubahan Editor ketika Play Mode dapat kembali setelah Stop.

------------------------------------------------------------------------

# 37. Bagian G --- Baked Lighting

Baked lighting menyimpan hasil lighting tertentu sebelum runtime.

Cocok untuk:

``` text
static environment
```

Pipeline:

``` text
Static Geometry
+
Baked Light
↓
Bake
↓
Lightmap / Precomputed Data
↓
Runtime
```

------------------------------------------------------------------------

# 38. Menyiapkan Object untuk Bake

Pilih environment statis:

``` text
Ground
Walls
Static Props
```

Gunakan static flags/Contribute Global Illumination sesuai workflow
Unity 6 yang tersedia pada Inspector.

Jangan menandai object yang memang akan bergerak sebagai static hanya
untuk memaksa baking.

------------------------------------------------------------------------

# 39. Lightmap UV

Imported mesh membutuhkan UV yang sesuai untuk lightmapping.

Jika asset belum mempunyai UV lightmap yang baik, Unity Model Importer
dapat menyediakan opsi untuk menghasilkan lightmap UV pada model yang
sesuai.

Pilih FBX pada Project window.

Periksa opsi mesh/model import yang terkait:

``` text
Generate Lightmap UVs
```

jika diperlukan.

Apply perubahan.

------------------------------------------------------------------------

# 40. Texture UV vs Lightmap UV

Bedakan:

``` text
UV Texture
→ memetakan Base Color / Normal / material texture

UV Lightmap
→ memetakan baked lighting
```

Lightmap UV harus menghindari overlap yang tidak diinginkan.

------------------------------------------------------------------------

# 41. Membuka Lighting Settings

Buka window lighting Unity 6 melalui menu:

``` text
Window
→ Rendering
→ Lighting
```

atau menu Lighting yang tersedia pada minor release yang digunakan.

Gunakan tab/settings untuk scene lighting.

------------------------------------------------------------------------

# 42. Lighting Settings Asset

Pastikan scene mempunyai Lighting Settings yang sesuai.

Di sini mahasiswa mengenali konfigurasi seperti:

-   baked GI;
-   lightmapper;
-   lightmap resolution;
-   lighting mode untuk Mixed lights.

Tidak perlu mengejar setting kualitas tinggi.

------------------------------------------------------------------------

# 43. Mengatur Light menjadi Baked

Pilih light untuk eksperimen.

Set:

``` text
Mode / Bake Type
→ Baked
```

Pastikan geometry target merupakan geometry statis yang berkontribusi
pada baking.

------------------------------------------------------------------------

# 44. Generate / Bake Lighting

Jalankan proses baking melalui Lighting window.

Nama tombol dapat tampil sebagai:

``` text
Generate Lighting
```

atau workflow bake yang tersedia pada Unity 6 minor release.

Tunggu proses selesai.

------------------------------------------------------------------------

# 45. Verifikasi Baked Lighting

Setelah bake:

-   periksa lightmap;
-   periksa shadow/illumination pada geometry statis;
-   bandingkan dengan realtime;
-   perhatikan bahwa baked light tidak ditujukan untuk berubah bebas
    seperti realtime light.

Ambil screenshot.

------------------------------------------------------------------------

# 46. Lightmap Resolution

Lightmap Resolution menentukan kepadatan texel lightmap per unit dunia.

Konsep:

``` text
resolution rendah
→ lebih ringan / bake cepat
→ detail lebih rendah

resolution tinggi
→ detail meningkat
→ memory + bake time meningkat
```

Gunakan setting moderat untuk praktikum.

------------------------------------------------------------------------

# 47. Bagian H --- Mixed Lighting

Mixed menggabungkan:

``` text
Baked
+
Realtime
```

Pilih light.

Set:

``` text
Mixed
```

Perilaku detail bergantung pada Lighting Mode yang digunakan.

------------------------------------------------------------------------

# 48. Mixed Lighting Mode

Unity 6 menyediakan mode Mixed seperti:

``` text
Baked Indirect
Shadowmask
Subtractive
```

Dukungan/hasil dapat dipengaruhi render pipeline dan project settings.

Untuk praktikum, gunakan mode yang tersedia dan sesuai pada project URP.

------------------------------------------------------------------------

# 49. Baked Indirect --- Konsep

Secara konsep:

``` text
direct light
→ realtime

indirect contribution
→ baked
```

Ini memberi fleksibilitas direct lighting sambil memanfaatkan
precomputed indirect lighting.

------------------------------------------------------------------------

# 50. Shadowmask --- Konsep

Shadowmask menggunakan data baked untuk membantu representasi shadow
tertentu sambil tetap menggabungkannya dengan real-time shadow.

P13 cukup memahami:

> Mixed Lighting dapat membagi pekerjaan antara data baked dan evaluasi
> runtime.

------------------------------------------------------------------------

# 51. Perbandingan Realtime/Baked/Mixed

Isi:

  -----------------------------------------------------------------------
  Aspek             Realtime          Baked             Mixed
  ----------------- ----------------- ----------------- -----------------
  Light dapat       tinggi            rendah            sebagian
  berubah                                               

  Runtime cost      relatif lebih     lebih rendah      kompromi
                    tinggi            untuk data baked  

  Precomputation    sedikit/tidak     tinggi            ada

  Static            bisa              sangat cocok      cocok
  environment                                           

  Dynamic need      cocok             terbatas          cocok
  -----------------------------------------------------------------------

Jangan menganggap satu mode selalu terbaik.

------------------------------------------------------------------------

# 52. Bagian I --- Environment Lighting

Lighting bukan hanya direct light.

Environment memberi:

``` text
ambient/fill contribution
+
warna suasana
+
integrasi area shadow
```

Buka Lighting/Environment settings yang digunakan project.

------------------------------------------------------------------------

# 53. Day Environment

Untuk Day:

-   environment relatif terang;
-   warna tidak terlalu ekstrem;
-   Directional Light dominan;
-   shadow tetap terbaca.

Target:

``` text
bright
clear
readable
```

bukan:

``` text
overexposed
flat
```

------------------------------------------------------------------------

# 54. Night Environment

Duplicate/beralih ke:

``` text
P13_Night
```

Turunkan kontribusi environment secara terarah.

Jangan sekadar mengubah semua brightness menjadi hampir nol.

Night tetap membutuhkan:

``` text
readable silhouette
+
focal highlights
+
local light
```

------------------------------------------------------------------------

# 55. Moon-Like Directional

Pada Night:

1.  gunakan Directional Light lebih lemah;
2.  gunakan warna sedikit lebih dingin jika sesuai;
3.  pilih angle yang memberi silhouette/shadow menarik.

Ini adalah keputusan artistik sederhana, bukan simulasi astronomi.

------------------------------------------------------------------------

# 56. Local Night Lights

Aktifkan Point/Spot Light.

Contoh:

``` text
Point
→ lamp / bulb

Spot
→ security light / focal accent
```

Gunakan warna dengan alasan visual.

------------------------------------------------------------------------

# 57. Night Bukan Day × 0.1

Bandingkan:

``` text
Day
→ global readability

Night
→ lighting hierarchy lebih selektif
```

Pada Night, local light sering menjadi focal point.

------------------------------------------------------------------------

# 58. Bagian J --- Emission

Pilih material URP/Lit yang mewakili lampu/panel.

Aktifkan:

``` text
Emission
```

pilih warna HDR bila tersedia pada color picker.

Emission membuat surface terlihat memancarkan brightness visual.

------------------------------------------------------------------------

# 59. Emission Bukan Otomatis Point Light

Penting:

``` text
Emissive-looking material
≠
otomatis menerangi semua object seperti Point Light realtime
```

Untuk sumber lampu real-time sederhana:

``` text
Emission
+
Point/Spot Light
```

sering digunakan bersama.

------------------------------------------------------------------------

# 60. Emission dan Bloom

Emission menjadi lebih terasa jika:

``` text
HDR brightness
+
Bloom
```

digunakan dengan benar.

Namun jangan menaikkan emission berlebihan hanya untuk mendapatkan glow.

------------------------------------------------------------------------

# 61. Bagian K --- Menyiapkan Post Processing

URP menggunakan Volume framework.

Pilih:

``` text
Main Camera
```

Pada Inspector, pastikan opsi:

``` text
Post Processing
```

aktif pada Camera yang digunakan.

------------------------------------------------------------------------

# 62. Membuat Global Volume

Gunakan:

``` text
GameObject
→ Volume
→ Global Volume
```

Rename:

``` text
Global Volume
```

Pada Volume component:

``` text
Mode / Is Global
→ Global
```

Jika object dibuat dari menu Global Volume, konfigurasi global biasanya
sudah disiapkan.

------------------------------------------------------------------------

# 63. Membuat Volume Profile

Pada Global Volume:

``` text
Profile
→ New
```

Simpan profile dengan nama jelas:

``` text
VP_Day
```

Untuk Night:

``` text
VP_Night
```

Gunakan profile terpisah agar look mudah dibandingkan.

------------------------------------------------------------------------

# 64. Mengapa Profile Dipisah?

Dengan profile terpisah:

``` text
Day
→ VP_Day

Night
→ VP_Night
```

mahasiswa dapat membandingkan parameter tanpa mengingat semua nilai
secara manual.

------------------------------------------------------------------------

# 65. Add Override

Pada Volume Profile:

``` text
Add Override
```

Tambahkan efek yang dibutuhkan.

Mulai dari:

``` text
Tonemapping
Color Adjustments
Bloom
```

DOF ditambahkan setelah lighting dan exposure stabil.

------------------------------------------------------------------------

# 66. Bagian L --- Tonemapping

Tambahkan:

``` text
Add Override
→ Post-processing
→ Tonemapping
```

atau kategori ekuivalen pada UI Unity 6.

Tonemapping memetakan rentang HDR ke output display.

------------------------------------------------------------------------

# 67. Tonemapping Day

Bandingkan mode tonemapping yang tersedia pada URP project.

Gunakan mode yang memberi:

-   highlight lebih terkendali;
-   contrast masuk akal;
-   warna tidak rusak.

Catat mode yang dipilih.

------------------------------------------------------------------------

# 68. Tonemapping Night

Pada Night, perhatikan sumber terang:

``` text
lamp
emission
highlight
```

Tonemapping membantu mengelola perbedaan area sangat terang dan area
gelap.

Jangan menggunakannya untuk menyembunyikan lighting yang tidak terbaca.

------------------------------------------------------------------------

# 69. Bagian M --- Color Adjustments

Tambahkan:

``` text
Color Adjustments
```

Parameter penting:

``` text
Post Exposure
Contrast
Color Filter
Hue Shift
Saturation
```

------------------------------------------------------------------------

# 70. Post Exposure

Gunakan Post Exposure untuk fine tuning exposure final.

Workflow:

``` text
lighting dahulu
↓
environment
↓
baru exposure
```

Jika scene sangat gelap karena light salah, jangan menyelesaikannya
hanya dengan exposure.

------------------------------------------------------------------------

# 71. Contrast

Naikkan/turunkan secara kecil.

Amati:

-   separation;
-   shadow;
-   highlight;
-   material detail.

Contrast terlalu tinggi dapat menghilangkan informasi shadow/highlight.

------------------------------------------------------------------------

# 72. Color Filter

Day dapat memakai filter hampir netral.

Night dapat memakai sedikit tint dingin bila sesuai.

Gunakan subtle.

Hindari:

``` text
seluruh scene menjadi biru pekat
```

hanya untuk menunjukkan "malam".

------------------------------------------------------------------------

# 73. Saturation

Bandingkan saturation:

``` text
normal
sedikit turun
sedikit naik
```

Pilih berdasarkan mood dan keterbacaan material.

------------------------------------------------------------------------

# 74. Bagian N --- Bloom

Tambahkan:

``` text
Bloom
```

Bloom menambahkan glow pada area sangat terang.

Parameter yang tersedia dapat mencakup:

``` text
Threshold
Intensity
Scatter
```

tergantung versi URP.

------------------------------------------------------------------------

# 75. Bloom Test

Gunakan object emissive.

Set Bloom rendah terlebih dahulu.

Naikkan bertahap.

Amati kapan glow mulai membantu.

Tujuan:

``` text
source terasa terang
```

bukan:

``` text
seluruh frame berkabut glow
```

------------------------------------------------------------------------

# 76. Bloom Day

Pada Day, Bloom biasanya lebih subtle.

Gunakan hanya jika terdapat highlight/emissive source yang memang
memerlukan glow.

------------------------------------------------------------------------

# 77. Bloom Night

Pada Night, Bloom dapat lebih terlihat karena kontras sumber terang
dengan background gelap.

Tetap batasi intensity.

Pastikan bentuk lampu masih terlihat.

------------------------------------------------------------------------

# 78. Eksperimen Bloom

Buat:

``` text
Bloom OFF
Bloom ON moderate
Bloom ON excessive
```

Ambil screenshot.

Jelaskan mengapa versi excessive menurunkan kualitas visual.

------------------------------------------------------------------------

# 79. Bagian O --- Depth of Field

Tambahkan:

``` text
Depth of Field
```

DOF membantu focal emphasis.

Gunakan terutama jika camera composition memang membutuhkan depth cue.

------------------------------------------------------------------------

# 80. DOF dan Camera

DOF bergantung pada konfigurasi yang tersedia pada override, seperti
focus distance dan aperture/focal parameters sesuai mode yang dipilih.

Atur focal area pada Hero Asset.

Gunakan blur moderat.

------------------------------------------------------------------------

# 81. DOF Day

Untuk scene environment yang perlu dibaca luas:

``` text
DOF dapat sangat ringan
atau
tidak digunakan
```

Jangan memblur environment jika informasi ruang penting.

------------------------------------------------------------------------

# 82. DOF Night

Night cinematic shot dapat menggunakan DOF sedikit lebih kuat untuk:

``` text
focal light
+
hero object
```

tetapi focal object harus tetap tajam.

------------------------------------------------------------------------

# 83. Eksperimen DOF

Bandingkan:

``` text
DOF OFF
vs
DOF ON
```

dengan camera yang sama.

Jelaskan:

-   focal point;
-   readability;
-   depth.

------------------------------------------------------------------------

# 84. Bagian P --- Ambient Occlusion pada URP

Pada Unity 6 URP, SSAO ditambahkan sebagai **Renderer Feature**.

Ini berbeda dengan Bloom/Color Adjustments yang ditambahkan ke Global
Volume.

Konsep:

``` text
URP Renderer
+
Screen Space Ambient Occlusion Feature
```

------------------------------------------------------------------------

# 85. Menemukan URP Renderer Asset

Project URP memiliki asset renderer/pipeline pada folder Settings atau
lokasi konfigurasi project.

Cari asset Renderer yang digunakan oleh URP.

Contoh nama dapat berbeda:

``` text
UniversalRenderer
ForwardRenderer
PC_Renderer
```

Jangan membuat renderer baru jika project sudah memiliki renderer yang
aktif tanpa memahami assignment-nya.

------------------------------------------------------------------------

# 86. Menambahkan SSAO Renderer Feature

Pilih URP Renderer asset.

Pada Inspector cari:

``` text
Renderer Features
```

pilih:

``` text
Add Renderer Feature
→ Screen Space Ambient Occlusion
```

Nama dapat tampil sebagai SSAO/Screen Space Ambient Occlusion pada Unity
6.

------------------------------------------------------------------------

# 87. Mengatur SSAO

Mulai dengan setting moderat.

Parameter dapat mencakup:

``` text
Intensity
Radius
Falloff / Direct Lighting Strength
Sample / quality-related options
```

tergantung versi URP.

Amati area:

-   pertemuan object-ground;
-   sudut;
-   celah;
-   kontak antar-object.

------------------------------------------------------------------------

# 88. SSAO OFF vs ON

Disable Renderer Feature sementara.

Screenshot.

Enable.

Screenshot.

Amati:

``` text
contact
depth
crease
```

SSAO yang terlalu kuat membuat scene tampak kotor.

------------------------------------------------------------------------

# 89. SSAO dan Shadow

SSAO bukan pengganti shadow.

``` text
Shadow
→ hubungan light dan occluder

SSAO
→ aproksimasi occlusion lokal screen-space
```

Keduanya dapat saling melengkapi.

------------------------------------------------------------------------

# 90. Bagian Q --- Final Day Look

Kembali ke:

``` text
P13_Day
```

Gunakan urutan:

``` text
1 Material
2 Directional Light
3 Environment
4 Shadow
5 Local Light jika perlu
6 Tonemapping
7 Color Adjustments
8 Bloom bila perlu
9 DOF bila perlu
10 SSAO
```

------------------------------------------------------------------------

# 91. Target Day

Day harus terasa:

``` text
bright
readable
open
natural
```

Checklist:

``` text
[ ] Hero terbaca
[ ] shadow tidak terlalu hitam
[ ] highlight tidak clipping berlebihan
[ ] material terlihat
[ ] environment cukup terang
[ ] post FX subtle
```

------------------------------------------------------------------------

# 92. Final Day Screenshot

Gunakan Game View.

Pastikan camera composition final.

Ambil:

``` text
P13_Day_Final.png
```

Catat parameter penting.

------------------------------------------------------------------------

# 93. Bagian R --- Final Night Look

Buka:

``` text
P13_Night
```

Gunakan:

``` text
weak/cool Directional
+
dark environment
+
Point/Spot local lights
+
emission
+
controlled Bloom
+
Tonemapping
+
Color Adjustments
+
optional DOF
+
SSAO
```

------------------------------------------------------------------------

# 94. Target Night

Night harus:

``` text
gelap tetapi terbaca
```

Checklist:

``` text
[ ] silhouette terbaca
[ ] focal point jelas
[ ] local lights mempunyai fungsi
[ ] area hitam tidak kehilangan semua informasi
[ ] Bloom tidak berlebihan
[ ] material tetap dapat dikenali
```

------------------------------------------------------------------------

# 95. Final Night Screenshot

Ambil:

``` text
P13_Night_Final.png
```

Gunakan camera yang sama/sebanding dengan Day agar perbandingan valid.

------------------------------------------------------------------------

# 96. Bagian S --- Day vs Night Comparison

Tempatkan screenshot berdampingan pada dokumentasi.

Bandingkan:

  Aspek          Day   Night
  -------------- ----- -------
  Main Light           
  Environment          
  Local Lights         
  Shadow               
  Exposure             
  Bloom                
  Tonemapping          
  Color                
  DOF                  
  SSAO                 
  Focal Point          

------------------------------------------------------------------------

# 97. Trade-Off Kualitas dan Performa

Setiap fitur mempunyai biaya.

Contoh:

``` text
additional realtime lights
shadows
shadow resolution
SSAO
DOF
post-processing
```

P13 belum melakukan profiling mendalam.

Namun mahasiswa harus mulai bertanya:

> Apakah fitur visual ini benar-benar memberi manfaat yang sebanding?

------------------------------------------------------------------------

# 98. Prinsip Real-Time

Jangan mengejar:

``` text
semua efek ON
+
semua kualitas MAX
```

Real-time rendering mencari:

``` text
visual target
+
frame budget
```

Optimization detail dibahas pada P15.

------------------------------------------------------------------------

# 99. Milestone 1 --- P12 Scene Ready

``` text
[ ] project Unity 6+ URP
[ ] scene berjalan
[ ] material benar
[ ] camera benar
[ ] no critical error
```

------------------------------------------------------------------------

# 100. Milestone 2 --- Light Study

``` text
[ ] Directional
[ ] Point
[ ] Spot
[ ] range study
[ ] angle study
[ ] color/intensity study
```

------------------------------------------------------------------------

# 101. Milestone 3 --- Shadow

``` text
[ ] cast shadow
[ ] receive shadow
[ ] grounding diamati
[ ] shadow setting dikenali
```

------------------------------------------------------------------------

# 102. Milestone 4 --- Lighting Mode

Mahasiswa telah melakukan observasi:

``` text
Realtime
Baked
Mixed
```

dan dapat menjelaskan perbedaannya.

------------------------------------------------------------------------

# 103. Milestone 5 --- Lightmap

``` text
[ ] static geometry
[ ] lightmap UV diperiksa
[ ] bake dilakukan
[ ] hasil diperiksa
```

------------------------------------------------------------------------

# 104. Milestone 6 --- Material Response

``` text
[ ] URP/Lit
[ ] smoothness
[ ] metallic
[ ] normal
[ ] emission
```

diperiksa terhadap lighting.

------------------------------------------------------------------------

# 105. Milestone 7 --- Environment

Day dan Night memiliki environment contribution yang berbeda dan
terkontrol.

------------------------------------------------------------------------

# 106. Milestone 8 --- Global Volume

``` text
[ ] Camera Post Processing ON
[ ] Global Volume
[ ] VP_Day
[ ] VP_Night
```

------------------------------------------------------------------------

# 107. Milestone 9 --- Core Post FX

``` text
[ ] Tonemapping
[ ] Color Adjustments
[ ] Bloom
```

------------------------------------------------------------------------

# 108. Milestone 10 --- DOF

DOF diuji dan hanya dipertahankan jika mendukung composition.

------------------------------------------------------------------------

# 109. Milestone 11 --- SSAO

``` text
[ ] SSAO Renderer Feature
[ ] OFF vs ON
[ ] intensity moderat
```

------------------------------------------------------------------------

# 110. Milestone 12 --- Day/Night Final

``` text
[ ] P13_Day_Final
[ ] P13_Night_Final
[ ] comparison
[ ] technical explanation
```

------------------------------------------------------------------------

# 111. Eksperimen Wajib 1 --- Directional Angle

Bandingkan:

``` text
sun high
vs
sun low
```

Jelaskan pengaruh shadow dan mood.

------------------------------------------------------------------------

# 112. Eksperimen Wajib 2 --- Point Range

Gunakan intensity tetap.

Bandingkan dua Range.

Jelaskan area pengaruh.

------------------------------------------------------------------------

# 113. Eksperimen Wajib 3 --- Spot Angle

Bandingkan cone sempit dan lebar.

Jelaskan focal control.

------------------------------------------------------------------------

# 114. Eksperimen Wajib 4 --- Shadow

Bandingkan:

``` text
Shadow OFF
vs
Shadow ON
```

pada focal object.

Jelaskan visual grounding.

------------------------------------------------------------------------

# 115. Eksperimen Wajib 5 --- Realtime vs Baked

Gunakan bagian scene statis.

Bandingkan hasil dan perilaku light.

Catat bahwa baked membutuhkan precomputation.

------------------------------------------------------------------------

# 116. Eksperimen Wajib 6 --- Mixed

Gunakan satu Mixed Light pada setup sederhana.

Jelaskan apa yang masih real-time dan apa yang memanfaatkan data baked
sesuai Lighting Mode yang dipilih.

------------------------------------------------------------------------

# 117. Eksperimen Wajib 7 --- Smoothness

Bandingkan dua nilai smoothness.

Amati respons highlight terhadap light.

------------------------------------------------------------------------

# 118. Eksperimen Wajib 8 --- Emission

Bandingkan:

``` text
Emission OFF
vs
Emission ON
```

sebelum Bloom.

Jelaskan bahwa emission visual tidak sama dengan Point Light.

------------------------------------------------------------------------

# 119. Eksperimen Wajib 9 --- Bloom

Bandingkan:

``` text
OFF
moderate
excessive
```

Pilih yang paling terkontrol.

------------------------------------------------------------------------

# 120. Eksperimen Wajib 10 --- Color Adjustments

Bandingkan sebelum/sesudah Color Adjustments.

Gunakan perubahan subtle.

Catat parameter.

------------------------------------------------------------------------

# 121. Eksperimen Wajib 11 --- Tonemapping

Bandingkan dua mode/konfigurasi Tonemapping yang tersedia.

Amati highlight dan contrast.

------------------------------------------------------------------------

# 122. Eksperimen Wajib 12 --- DOF

Bandingkan:

``` text
OFF
ON
```

Jelaskan pengaruh pada focal point.

------------------------------------------------------------------------

# 123. Eksperimen Wajib 13 --- SSAO

Bandingkan:

``` text
SSAO OFF
SSAO ON
```

Amati contact dan corner.

------------------------------------------------------------------------

# 124. Eksperimen Wajib 14 --- Day vs Night

Gunakan geometry/camera sebanding.

Bandingkan keputusan:

``` text
light
environment
exposure
post FX
```

------------------------------------------------------------------------

# 125. Tugas Utama

Buat:

# Bright/Day vs Dark/Night Scene

Requirement:

-   [ ] Unity 6+;
-   [ ] URP;
-   [ ] menggunakan scene P12;
-   [ ] Directional Light;
-   [ ] Point Light;
-   [ ] Spot Light;
-   [ ] shadow;
-   [ ] Realtime study;
-   [ ] Baked study;
-   [ ] Mixed study;
-   [ ] lightmap UV diperiksa;
-   [ ] baking dilakukan;
-   [ ] URP/Lit material diperiksa;
-   [ ] environment lighting;
-   [ ] emission;
-   [ ] Camera Post Processing;
-   [ ] Global Volume;
-   [ ] Tonemapping;
-   [ ] Color Adjustments;
-   [ ] Bloom;
-   [ ] DOF;
-   [ ] SSAO;
-   [ ] P13_Day;
-   [ ] P13_Night;
-   [ ] comparison;
-   [ ] minimal dua challenge;
-   [ ] README;
-   [ ] screenshot lengkap.

------------------------------------------------------------------------

# 126. Challenge A --- Warm Sunset

Buat varian Day:

``` text
low Directional angle
+
warm main light
+
controlled environment
```

Target:

``` text
late afternoon / sunset feel
```

tanpa color filter ekstrem.

------------------------------------------------------------------------

# 127. Challenge B --- Security Light

Pada Night, gunakan Spot Light sebagai security light.

Buat focal area yang jelas.

Jangan menerangi seluruh scene.

------------------------------------------------------------------------

# 128. Challenge C --- Lamp Cluster

Gunakan beberapa Point Light lokal dengan range terbatas.

Bandingkan dengan satu Point Light ber-range sangat besar.

Jelaskan mana yang lebih mudah dikontrol secara visual.

------------------------------------------------------------------------

# 129. Challenge D --- Emissive Sign

Buat sign/panel emissive.

Gunakan:

``` text
URP/Lit Emission
+
Bloom
```

Jika perlu tambahkan Point/Spot untuk benar-benar menerangi object
sekitar.

------------------------------------------------------------------------

# 130. Challenge E --- Static Baked Corner

Buat satu area environment yang seluruh geometry-nya statis.

Gunakan baked lighting.

Dokumentasikan lightmap dan hasil bake.

------------------------------------------------------------------------

# 131. Challenge F --- Mixed Dynamic Object

Gunakan environment statis dengan satu object yang diperlakukan sebagai
dynamic/movable.

Eksplorasi Mixed Lighting agar mahasiswa melihat alasan penggunaan
pendekatan hybrid.

------------------------------------------------------------------------

# 132. Challenge G --- Cinematic Night Camera

Gunakan DOF secara moderat pada Night.

Pastikan focal object tetap tajam.

Bandingkan dengan DOF OFF.

------------------------------------------------------------------------

# 133. Challenge H --- Performance-Aware Look

Buat versi Night kedua dengan mengurangi satu fitur mahal/berlebih,
misalnya:

-   jumlah realtime shadow light;
-   SSAO quality/intensity;
-   DOF;
-   local light yang tidak perlu.

Jelaskan apakah perubahan visual signifikan.

------------------------------------------------------------------------

# 134. Debugging --- Scene Terlalu Gelap

Periksa berurutan:

``` text
Main Light
Environment
Material
Camera/Post Exposure
Tonemapping
```

Jangan langsung menaikkan Post Exposure ekstrem.

------------------------------------------------------------------------

# 135. Debugging --- Scene Flat

Kemungkinan:

-   environment terlalu terang;
-   local light terlalu banyak;
-   semua light hampir sama kuat;
-   Directional terlalu frontal;
-   shadow tidak efektif.

Perbaiki lighting hierarchy.

------------------------------------------------------------------------

# 136. Debugging --- Point Light Tidak Terlihat

Periksa:

``` text
Active?
Intensity?
Range?
Object di dalam Range?
Layer/rendering configuration?
Material Lit?
```

------------------------------------------------------------------------

# 137. Debugging --- Spot Light Tidak Mengenai Object

Periksa:

``` text
Position
Rotation
Range
Spot Angle
```

Gunakan gizmo cone pada Scene View.

------------------------------------------------------------------------

# 138. Debugging --- Shadow Tidak Muncul

Periksa:

-   Light Shadows;
-   Mesh Renderer Cast Shadows;
-   receiving surface/material;
-   URP shadow settings;
-   Shadow Distance;
-   posisi light/object.

------------------------------------------------------------------------

# 139. Debugging --- Baked Lighting Tidak Berubah

Baked lighting memang tidak ditujukan untuk berubah seperti Realtime.

Jika source/lighting diubah:

``` text
rebake
```

untuk memperbarui data.

------------------------------------------------------------------------

# 140. Debugging --- Bake Tidak Memberi Hasil

Periksa:

-   object berkontribusi ke GI/static;
-   light mode Baked/Mixed;
-   lightmap UV;
-   Lighting Settings;
-   bake benar-benar selesai.

------------------------------------------------------------------------

# 141. Debugging --- Lightmap Artefact

Kemungkinan:

``` text
UV overlap
padding kurang
resolution tidak memadai
geometry bermasalah
```

Periksa UV lightmap/import settings.

------------------------------------------------------------------------

# 142. Debugging --- Material Pink

Periksa:

``` text
URP project
URP/Lit shader
material valid
```

Jangan menggunakan material Built-in `Standard` sebagai target utama
modul.

------------------------------------------------------------------------

# 143. Debugging --- Normal Map Terlihat Aneh

Pastikan texture diimport sebagai:

``` text
Normal Map
```

dan material menggunakan Normal Map slot.

------------------------------------------------------------------------

# 144. Debugging --- Bloom Tidak Terlihat

Periksa:

``` text
Camera Post Processing ON
Global Volume aktif
Bloom override aktif
Volume layer sesuai
source cukup terang/HDR
threshold/intensity
```

------------------------------------------------------------------------

# 145. Debugging --- Bloom Berlebihan

Turunkan:

``` text
Emission brightness
Bloom Intensity
Scatter
```

atau evaluasi Threshold.

Bloom seharusnya menekankan bright source, bukan menghapus detail.

------------------------------------------------------------------------

# 146. Debugging --- Global Volume Tidak Berpengaruh

Periksa:

-   Volume aktif;
-   Is Global/Mode Global;
-   Profile terpasang;
-   override checkbox aktif;
-   Camera Post Processing aktif;
-   layer mask Volume pada Camera bila telah dikustomisasi.

------------------------------------------------------------------------

# 147. Debugging --- DOF Tidak Sesuai

Periksa:

-   mode DOF;
-   focus distance;
-   camera distance;
-   aperture/focal settings;
-   focal object.

Jangan memaksakan DOF jika scene lebih baik tanpa blur.

------------------------------------------------------------------------

# 148. Debugging --- Tidak Menemukan Ambient Occlusion di Volume

Ini bukan error.

Pada Unity 6 URP, praktikum ini menggunakan:

``` text
Screen Space Ambient Occlusion
→ URP Renderer Feature
```

Bukan Volume Override seperti Bloom.

------------------------------------------------------------------------

# 149. Debugging --- SSAO Tidak Terlihat

Periksa:

``` text
Renderer Feature aktif?
Renderer asset benar-benar digunakan?
Intensity/Radius?
normal/depth source settings?
camera melihat area contact?
```

Gunakan area sudut/contact yang jelas untuk pengujian.

------------------------------------------------------------------------

# 150. Debugging --- Night Menjadi Hitam

Jangan hanya menurunkan semua light.

Tambahkan hierarchy:

``` text
weak primary
+
environment fill
+
local focal light
```

Night tetap harus terbaca.

------------------------------------------------------------------------

# 151. Test Case

    No. Pengujian           Hasil yang Diharapkan
  ----- ------------------- ----------------------------------
      1 Unity version       Unity 6+
      2 Pipeline            URP
      3 P12 scene           Dapat dibuka
      4 URP/Lit             Material valid
      5 Directional         Arah memengaruhi lighting
      6 Point               Range lokal terlihat
      7 Spot                Cone terarah
      8 Shadow              Object grounded
      9 Realtime            Perubahan light terlihat runtime
     10 Baked               Data lighting dapat dibake
     11 Lightmap UV         Tersedia/valid
     12 Mixed               Mode dapat digunakan
     13 Environment         Fill dapat dikontrol
     14 Emission            Surface terlihat emissive
     15 Camera Post FX      Aktif
     16 Global Volume       Mempengaruhi camera
     17 Tonemapping         Highlight berubah terkontrol
     18 Color Adjustments   Tone dapat diatur
     19 Bloom               Bright source glow
     20 DOF                 Focus/blur bekerja
     21 SSAO                Contact depth meningkat
     22 Day                 Bright dan readable
     23 Night               Dark tetapi readable
     24 Console             Tidak ada critical error

------------------------------------------------------------------------

# 152. Pertanyaan Pemahaman

1.  Mengapa lighting penting?
2.  Mengapa scene terang belum tentu mempunyai lighting yang baik?
3.  Apa fungsi Directional Light?
4.  Mengapa posisi Directional Light tidak dominan?
5.  Apa pengaruh rotation Directional Light?
6.  Apa pengaruh intensity?
7.  Apa pengaruh color?
8.  Apa fungsi Point Light?
9.  Apa itu Range?
10. Apa fungsi Spot Light?
11. Mengapa rotation Spot penting?
12. Apa fungsi Spot Angle?
13. Apa itu lighting hierarchy?
14. Apa itu Realtime Lighting?
15. Kapan Realtime cocok?
16. Apa itu Baked Lighting?
17. Kapan Baked cocok?
18. Apa itu Mixed Lighting?
19. Mengapa Mixed disebut kompromi?
20. Apa itu lightmap?
21. Apa itu lightmap UV?
22. Apa perbedaan texture UV dan lightmap UV?
23. Mengapa UV lightmap sebaiknya tidak overlap?
24. Apa itu cast shadow?
25. Apa itu receive shadow?
26. Mengapa shadow membantu grounding?
27. Apa itu Shadow Distance?
28. Apa trade-off Shadow Resolution?
29. Mengapa material harus diperiksa sebelum lighting?
30. Apa fungsi Smoothness?
31. Apa hubungan Roughness dan Smoothness?
32. Apa fungsi Normal Map?
33. Apa fungsi Emission?
34. Mengapa emission tidak sama dengan Point Light?
35. Apa itu environment lighting?
36. Mengapa Night bukan sekadar Day yang digelapkan?
37. Apa itu post-processing?
38. Apa itu Volume?
39. Apa itu Volume Profile?
40. Apa fungsi Bloom?
41. Apa fungsi Color Adjustments?
42. Apa fungsi Post Exposure?
43. Apa fungsi Tonemapping?
44. Apa fungsi Depth of Field?
45. Apa itu SSAO?
46. Mengapa SSAO bukan pengganti shadow?
47. Mengapa SSAO pada modul ini merupakan Renderer Feature?
48. Mengapa post FX dilakukan setelah lighting?
49. Apa trade-off visual vs performa?
50. Jelaskan workflow Day/Night P13.

------------------------------------------------------------------------

# 153. Pertanyaan Analisis

## A --- Lighting Hierarchy

Sebuah scene mempunyai enam lampu dengan intensity hampir sama.

Mengapa scene dapat terlihat flat walaupun sangat terang?

## B --- Night

Mengapa mengalikan seluruh intensity Day dengan 0.1 bukan strategi Night
Look yang baik?

## C --- Baked

Mengapa environment statis merupakan kandidat yang baik untuk baked
lighting?

## D --- Mixed

Sebuah scene mempunyai gedung statis dan karakter bergerak.

Mengapa Mixed Lighting dapat relevan?

## E --- Shadow

Mengapa object tanpa contact shadow dapat terlihat melayang?

## F --- Material

Mengapa material metal sangat dipengaruhi environment dan lighting?

## G --- Bloom

Mengapa Bloom yang sangat tinggi dapat justru mengurangi kesan
brightness?

## H --- Tonemapping

Mengapa highlight HDR perlu dipetakan ke display range?

## I --- SSAO

Mengapa SSAO sebaiknya tidak terlalu kuat?

## J --- Real-Time

Mengapa setiap efek visual perlu dinilai terhadap frame budget?

------------------------------------------------------------------------

# 154. Dokumentasi Wajib

Ambil screenshot:

``` text
01 Scene P12 Baseline
02 Directional High Angle
03 Directional Low Angle
04 Point Range Study
05 Spot Angle Study
06 Shadow OFF
07 Shadow ON
08 Realtime Lighting
09 Baked Lighting
10 Lightmap / Bake Result
11 Mixed Lighting
12 Material Response
13 Day Environment
14 Night Environment
15 Emission
16 Global Volume
17 Tonemapping
18 Color Adjustments
19 Bloom OFF
20 Bloom ON
21 DOF
22 SSAO OFF
23 SSAO ON
24 P13_Day_Final
25 P13_Night_Final
```

------------------------------------------------------------------------

# 155. Struktur Pengumpulan

``` text
P13_NRP_Nama/
├── UnityProject/
│   └── Assets/
│       ├── Models/
│       ├── Materials/
│       ├── Textures/
│       ├── Prefabs/
│       ├── Scenes/
│       │   ├── P13_Day.unity
│       │   └── P13_Night.unity
│       ├── Settings/
│       └── ...
├── Screenshots/
│   ├── ...
│   ├── P13_Day_Final.png
│   └── P13_Night_Final.png
└── README.md
```

Ikuti aturan LMS mengenai folder cache Unity. Jika tidak diminta, folder
besar seperti `Library` umumnya tidak perlu dikumpulkan.

------------------------------------------------------------------------

# 156. Isi README

Tuliskan:

``` text
Nama
NRP
Versi Unity
Versi/jenis URP project

BASE SCENE
- asset yang digunakan
- camera
- material utama

LIGHT STUDY
- Directional
- Point
- Spot
- parameter penting

LIGHTING MODE
- Realtime
- Baked
- Mixed
- hasil pengamatan

LIGHTMAP
- object statis
- UV
- bake
- kendala

SHADOW
- cast/receive
- grounding

DAY LOOK
- main light
- environment
- post FX

NIGHT LOOK
- main/local light
- environment
- emission
- post FX

POST PROCESSING
- Tonemapping
- Color Adjustments
- Bloom
- DOF

SSAO
- setting
- hasil

CHALLENGE
- minimal 2

REFLEKSI
- masalah
- solusi
- trade-off visual/performa
```

------------------------------------------------------------------------

# 157. Checklist Pengumpulan

-   [ ] Unity 6+;
-   [ ] URP;
-   [ ] project dapat dibuka;
-   [ ] P13_Day;
-   [ ] P13_Night;
-   [ ] Directional Light;
-   [ ] Point Light;
-   [ ] Spot Light;
-   [ ] light study selesai;
-   [ ] shadow diuji;
-   [ ] Realtime diuji;
-   [ ] Baked diuji;
-   [ ] Mixed diuji;
-   [ ] lightmap UV diperiksa;
-   [ ] bake berhasil;
-   [ ] material URP/Lit;
-   [ ] Smoothness diperiksa;
-   [ ] Normal Map benar;
-   [ ] Emission digunakan;
-   [ ] environment Day;
-   [ ] environment Night;
-   [ ] Camera Post Processing aktif;
-   [ ] Global Volume;
-   [ ] VP_Day;
-   [ ] VP_Night;
-   [ ] Tonemapping;
-   [ ] Color Adjustments;
-   [ ] Bloom;
-   [ ] DOF;
-   [ ] SSAO Renderer Feature;
-   [ ] Day final;
-   [ ] Night final;
-   [ ] 14 eksperimen wajib;
-   [ ] minimal 2 challenge;
-   [ ] README;
-   [ ] screenshot lengkap;
-   [ ] tidak ada critical error.

------------------------------------------------------------------------

# 158. Refleksi Praktikum

Tuliskan 8--12 kalimat mengenai:

1.  light yang paling dominan pada Day;
2.  light yang paling penting pada Night;
3.  perbedaan Point dan Spot;
4.  manfaat shadow;
5.  perbedaan Realtime/Baked/Mixed;
6.  kendala lightmapping;
7.  respons material;
8.  fungsi environment;
9.  efek post-processing paling bermanfaat;
10. apakah DOF membantu;
11. apakah SSAO membantu;
12. fitur mana yang mungkin perlu dioptimasi.

------------------------------------------------------------------------

# 159. Hubungan dengan Pertemuan 14

P13 menghasilkan scene yang sudah memiliki:

``` text
Lighting
+
Material Response
+
Environment
+
Post Processing
```

Pertemuan berikutnya:

# Unity Shader Graph

Pada P14 mahasiswa mulai mengontrol perilaku visual surface melalui
shader berbasis node.

Scene P13 dapat digunakan sebagai lingkungan pengujian shader.

------------------------------------------------------------------------

# 160. Ringkasan Praktikum

Workflow:

``` text
P12 Scene
↓
Material Review
↓
Directional Study
↓
Point Study
↓
Spot Study
↓
Lighting Hierarchy
↓
Shadow
↓
Realtime / Baked / Mixed
↓
Lightmap
↓
Environment
↓
Emission
↓
Global Volume
↓
Tonemapping
↓
Color Adjustments
↓
Bloom
↓
Depth of Field
↓
SSAO Renderer Feature
↓
Day Look
↓
Night Look
↓
Compare
```

Benang merah:

``` text
Geometry
+
Material
+
Light
+
Environment
+
Shadow
+
Camera
+
Post Processing
=
Final Real-Time Look
```

Target akhir:

# Bright/Day vs Dark/Night Scene

yang memperlihatkan bahwa scene 3D yang sama dapat mempunyai mood, focal
point, depth, dan kualitas visual yang sangat berbeda melalui keputusan
lighting dan post-processing yang terarah.
