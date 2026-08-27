# Modul Praktikum Grafika Komputer --- Pertemuan 14

## Unity Shader Graph --- Custom Surface Behavior

**Mata Kuliah:** EF234504 --- Grafika Komputer\
**Pertemuan:** 14\
**Topik:** Unity Shader Graph\
**Platform:** Unity 6+ --- Universal Render Pipeline (URP)\
**Dosen:** Dr. Darlis Herumurti\
**Departemen:** Teknik Informatika

------------------------------------------------------------------------

# 1. Deskripsi Praktikum

Pertemuan 14 melanjutkan scene Unity URP dari Pertemuan 13.

Pada pertemuan sebelumnya mahasiswa telah membangun:

``` text
3D Scene
+
URP Material
+
Lighting
+
Environment
+
Post Processing
```

Pada praktikum ini mahasiswa menambahkan:

> **custom visual behavior pada surface menggunakan Unity Shader
> Graph.**

Tiga shader utama yang wajib dibuat:

1.  **Emission Pulse Shader**
2.  **Dissolve Shader + Emissive Edge**
3.  **Animated Surface Shader**

Sebagai pengembangan, mahasiswa juga mempelajari **vertex wave** agar
memahami bahwa Shader Graph dapat memproses data pada **Vertex Stage**
maupun **Fragment Stage**.

------------------------------------------------------------------------

# 2. Target Akhir

Pada akhir praktikum tersedia minimal:

``` text
SG_EmissionPulse
SG_Dissolve
SG_AnimatedSurface
```

beserta material:

``` text
MAT_EmissionPulse
MAT_Dissolve
MAT_AnimatedSurface
```

yang diterapkan pada scene P13.

Target konseptual:

``` text
Input Data
↓
Shader Properties
↓
Node Operations
↓
Vertex / Fragment Processing
↓
Custom Surface Behavior
↓
Reusable Material
```

------------------------------------------------------------------------

# 3. Kompatibilitas Unity 6+

Modul menggunakan workflow **Unity 6+ dengan Universal Render Pipeline
(URP)**.

Fitur yang digunakan:

-   Shader Graph;
-   URP Lit Shader Graph;
-   URP Unlit Shader Graph sebagai bahan perbandingan;
-   Blackboard properties;
-   Vertex dan Fragment Context pada Master Stack;
-   Base Color;
-   Normal;
-   Metallic;
-   Smoothness;
-   Emission;
-   Alpha;
-   Alpha Clip Threshold;
-   UV;
-   Time;
-   Sample Texture 2D;
-   Tiling And Offset;
-   Simple Noise;
-   Sine;
-   Add;
-   Subtract;
-   Multiply;
-   Lerp;
-   Step;
-   Smoothstep;
-   Saturate/Clamp;
-   Split/Combine;
-   Position;
-   Normal Vector.

Nama menu dapat sedikit berubah antar-minor-release Unity 6, tetapi
fitur inti tersebut merupakan bagian workflow Shader Graph/URP.

> **Catatan:** gunakan project URP. Jangan membuat praktikum ini pada
> Built-in Render Pipeline lalu mencoba mengikuti menu URP.

------------------------------------------------------------------------

# 4. Capaian Praktikum

Setelah praktikum mahasiswa mampu:

1.  menjelaskan fungsi shader dalam real-time rendering;
2.  menjelaskan Shader Graph sebagai node-based shader authoring;
3.  membedakan Vertex Stage dan Fragment Stage;
4.  memahami Blackboard;
5.  membuat exposed property;
6.  memahami tipe Float, Vector, Color, dan Texture2D;
7.  menggunakan UV;
8.  melakukan texture sampling;
9.  mengatur tiling dan offset;
10. menggunakan Time;
11. menggunakan operasi matematika dasar;
12. menggunakan Sine untuk animasi periodik;
13. melakukan remap nilai;
14. menggunakan Lerp;
15. menggunakan Step dan Smoothstep;
16. membuat Emission Pulse;
17. membuat Dissolve;
18. menggunakan Alpha Clipping;
19. membuat Dissolve Edge;
20. membuat Animated Surface;
21. mengatur scrolling UV;
22. menggunakan texture/pattern sebagai mask;
23. memahami Object Space dan World Space secara praktis;
24. membuat vertex displacement sederhana;
25. memahami pengaruh vertex density;
26. membuat shader reusable;
27. membuat beberapa material dari satu shader;
28. melakukan debugging graph melalui node preview;
29. mengintegrasikan custom shader ke scene P13;
30. mengevaluasi kompleksitas shader secara awal.

------------------------------------------------------------------------

# 5. Prasyarat

Mahasiswa telah mempunyai:

-   project P13 Unity 6+ URP;
-   scene Day/Night;
-   asset 3D;
-   material URP;
-   lighting;
-   Global Volume/post-processing;
-   pemahaman dasar UV dan texture.

Pastikan project dapat dijalankan tanpa critical error.

------------------------------------------------------------------------

# 6. Persiapan Project

Buat backup project P13:

``` text
P13_NRP_Nama
↓
P14_NRP_Nama
```

Buat folder:

``` text
Assets/
├── Materials/
│   └── P14/
├── Shaders/
│   └── P14/
├── Textures/
│   └── P14/
├── Scenes/
│   └── P14/
└── Screenshots/
```

Duplicate scene yang akan digunakan:

``` text
P13_Night
↓
P14_ShaderLab
```

Night scene cocok untuk mengamati emission, tetapi Day scene juga boleh
digunakan untuk pengujian material Lit.

------------------------------------------------------------------------

# 7. Pemeriksaan Shader Graph

Pada project URP Unity 6, Shader Graph tersedia sebagai bagian workflow
render pipeline.

Coba klik kanan di Project window:

``` text
Create
→ Shader Graph
→ URP
```

Pastikan tersedia pilihan Shader Graph URP, termasuk Lit/Unlit yang
sesuai versi package.

Jika menu tidak tersedia:

1.  pastikan project memang URP;
2.  buka Package Manager;
3.  periksa package/render-pipeline project;
4.  jangan mengganti pipeline sembarangan pada project yang sudah
    berjalan.

------------------------------------------------------------------------

# 8. Konsep Shader Graph

Shader Graph bukan sekadar editor material.

Shader Graph mendefinisikan:

``` text
input
→ operation
→ output
```

yang kemudian dikompilasi menjadi shader.

Contoh:

``` text
Color
   ↓
Multiply
   ↑
Strength
   ↓
Emission
```

------------------------------------------------------------------------

# 9. Node dan Edge

**Node** mewakili data atau operasi.

Contoh:

``` text
Time
Multiply
Sine
Texture Sample
Color
```

**Edge** adalah koneksi antar-port.

Koneksi menunjukkan aliran data.

------------------------------------------------------------------------

# 10. Blackboard

Blackboard menyimpan property yang menjadi input shader.

Contoh:

``` text
BaseColor
EmissionColor
EmissionStrength
PulseSpeed
DissolveAmount
EdgeWidth
ScrollSpeed
```

Property yang diekspos dapat diubah dari Material Inspector.

------------------------------------------------------------------------

# 11. Mengapa Exposed Property Penting?

Tanpa property yang baik, shader menjadi sulit digunakan kembali.

Target:

``` text
SG_EmissionPulse
      ↓
MAT_BlueNeon
MAT_RedAlarm
MAT_GreenTerminal
```

Graph sama, parameter material berbeda.

------------------------------------------------------------------------

# 12. Aturan Penamaan

Gunakan nama jelas:

``` text
SG_EmissionPulse
SG_Dissolve
SG_AnimatedSurface

MAT_Emission_Blue
MAT_Dissolve_Orange
MAT_Energy_Cyan
```

Property:

``` text
_BaseColor
_EmissionColor
_EmissionStrength
_PulseSpeed
_DissolveAmount
_EdgeWidth
_ScrollSpeed
_Tiling
```

Hindari:

``` text
Value1
Test
Temp
X
ABC
```

------------------------------------------------------------------------

# 13. Lit vs Unlit

## Lit

Bereaksi terhadap lighting.

Gunakan jika surface perlu mempertahankan respons:

-   light;
-   shadow;
-   metallic;
-   smoothness;
-   normal.

## Unlit

Tidak menggunakan model lighting utama seperti material Lit.

Cocok untuk efek yang ingin tampak konsisten terhadap pencahayaan.

Untuk tiga shader utama modul ini, **Lit Shader Graph** digunakan agar
mahasiswa dapat mengintegrasikan efek dengan scene P13.

------------------------------------------------------------------------

# 14. Opaque vs Transparent

Gunakan **Opaque** bila efek tidak membutuhkan blending transparan.

Dissolve pada modul ini menggunakan:

``` text
Opaque
+
Alpha Clipping
```

bukan Transparent.

Alasannya:

-   lebih sederhana;
-   sesuai konsep cutout/discard;
-   menghindari kompleksitas sorting transparency;
-   lebih sesuai untuk memahami dissolve mask.

------------------------------------------------------------------------

# 15. Vertex dan Fragment Context

Shader Graph Lit mempunyai bagian:

``` text
Vertex
Fragment
```

Secara konseptual:

``` text
Vertex Stage
→ posisi/normal/tangent per vertex

Fragment Stage
→ warna/material/alpha per fragment
```

Emission, dissolve mask, dan scrolling texture utama pada modul ini
berfokus pada Fragment Stage.

Vertex Wave menggunakan Vertex Stage.

------------------------------------------------------------------------

# 16. Bagian A --- Shader Pertama: Emission Pulse

Target:

``` text
Color
×
Strength
×
Pulse
→
Emission
```

Pulse berubah terhadap waktu.

------------------------------------------------------------------------

# 17. Membuat Lit Shader Graph

Di Project window, masuk:

``` text
Assets/Shaders/P14
```

Klik kanan:

``` text
Create
→ Shader Graph
→ URP
→ Lit Shader Graph
```

Nama:

``` text
SG_EmissionPulse
```

Double-click untuk membuka Shader Graph.

------------------------------------------------------------------------

# 18. Mengenali Interface

Identifikasi:

-   Blackboard;
-   Graph Inspector;
-   node canvas;
-   Master Stack;
-   Vertex Context;
-   Fragment Context;
-   node preview;
-   Save Asset.

Jangan langsung membuat graph sebelum mengetahui lokasi komponen utama.

------------------------------------------------------------------------

# 19. Property Base Color

Tambahkan Blackboard property:

``` text
Type : Color
Name : Base Color
Reference : _BaseColor
Exposed : Yes
```

Pilih warna default netral.

Drag property ke graph.

Hubungkan ke:

``` text
Fragment
→ Base Color
```

------------------------------------------------------------------------

# 20. Property Emission Color

Tambahkan:

``` text
Type : Color
Name : Emission Color
Reference : _EmissionColor
Exposed : Yes
```

Gunakan color yang dapat mempunyai nilai HDR/intensity jika konfigurasi
property/color picker menyediakan HDR.

------------------------------------------------------------------------

# 21. Property Emission Strength

Tambahkan:

``` text
Type : Float
Name : Emission Strength
Reference : _EmissionStrength
Default : 2
Exposed : Yes
```

Nilai default hanyalah titik awal.

------------------------------------------------------------------------

# 22. Property Pulse Speed

Tambahkan:

``` text
Type : Float
Name : Pulse Speed
Reference : _PulseSpeed
Default : 2
Exposed : Yes
```

Property ini menentukan kecepatan animasi pulse.

------------------------------------------------------------------------

# 23. Time Node

Create Node:

``` text
Time
```

Gunakan output Time yang sesuai untuk animasi kontinu.

Konsep:

``` text
t = waktu berjalan
```

------------------------------------------------------------------------

# 24. Mengatur Speed

Tambahkan:

``` text
Multiply
```

Hubungkan:

``` text
Time
×
Pulse Speed
```

Konsep:

``` text
phase = Time × Speed
```

Jika Speed naik, perubahan phase lebih cepat.

------------------------------------------------------------------------

# 25. Membuat Gelombang

Tambahkan:

``` text
Sine
```

Hubungkan:

``` text
Time × Speed
↓
Sine
```

Output Sine:

``` text
-1 ... +1
```

Nilai negatif tidak ideal jika langsung digunakan sebagai faktor
brightness.

------------------------------------------------------------------------

# 26. Remap Sine ke 0--1

Gunakan:

``` text
Sine
× 0.5
+ 0.5
```

Graph:

``` text
Time
 ↓
Multiply Speed
 ↓
Sine
 ↓
Multiply 0.5
 ↓
Add 0.5
 ↓
Pulse01
```

Secara matematis:

``` text
Pulse01 = sin(Time × Speed) × 0.5 + 0.5
```

Output:

``` text
0 ... 1
```

------------------------------------------------------------------------

# 27. Membuat Emission

Gunakan Multiply:

``` text
Emission Color
×
Emission Strength
```

kemudian:

``` text
hasil
×
Pulse01
```

Hubungkan ke:

``` text
Fragment
→ Emission
```

------------------------------------------------------------------------

# 28. Menjaga Base Color

Hubungkan:

``` text
Base Color
→ Base Color
```

Jika material ingin bereaksi terhadap lighting, pertahankan Lit output
yang relevan.

Save Asset.

------------------------------------------------------------------------

# 29. Membuat Material Emission

Klik kanan graph:

``` text
Create
→ Material
```

atau buat Material lalu pilih shader `SG_EmissionPulse`.

Nama:

``` text
MAT_EmissionPulse
```

Terapkan pada:

-   panel;
-   lamp cover;
-   terminal;
-   prop kecil.

------------------------------------------------------------------------

# 30. Menguji Emission Pulse

Play scene.

Uji:

``` text
Pulse Speed = 0.5
Pulse Speed = 2
Pulse Speed = 5
```

Uji pula Emission Strength.

Amati hubungan:

``` text
Speed
→ frekuensi perubahan

Strength
→ brightness emission
```

------------------------------------------------------------------------

# 31. Emission dan Bloom

Jika scene P13 mempunyai Bloom, emission yang cukup terang dapat
menghasilkan glow.

Namun:

``` text
Emission Shader
≠
Bloom
```

Emission berasal dari shader/material.

Bloom adalah post-processing.

------------------------------------------------------------------------

# 32. Eksperimen 1 --- Pulse

Ambil screenshot/rekam pengamatan untuk:

``` text
A. Static Emission
B. Slow Pulse
C. Fast Pulse
```

Jelaskan mana yang sesuai untuk:

-   neon;
-   alarm;
-   terminal.

------------------------------------------------------------------------

# 33. Bagian B --- Dissolve Shader

Target:

``` text
Noise
vs
Dissolve Amount
↓
Alpha Clip
```

Ditambah:

``` text
Dissolve Edge
→ Emission
```

------------------------------------------------------------------------

# 34. Membuat Graph Dissolve

Buat:

``` text
Create
→ Shader Graph
→ URP
→ Lit Shader Graph
```

Nama:

``` text
SG_Dissolve
```

Buka graph.

------------------------------------------------------------------------

# 35. Aktifkan Alpha Clipping

Pada Graph Inspector/Graph Settings, aktifkan:

``` text
Alpha Clipping
```

Set Surface Type:

``` text
Opaque
```

Setelah Alpha Clipping aktif, Fragment Context menyediakan input yang
relevan seperti:

``` text
Alpha
Alpha Clip Threshold
```

------------------------------------------------------------------------

# 36. Property Dissolve

Tambahkan:

``` text
Base Color       : Color
Dissolve Amount  : Float
Edge Width       : Float
Edge Color       : Color
Noise Scale      : Float
```

Range yang disarankan:

``` text
Dissolve Amount : 0 ... 1
Edge Width       : 0.001 ... 0.2
Noise Scale      : > 0
```

Nilai final ditentukan lewat eksperimen.

------------------------------------------------------------------------

# 37. Membuat UV untuk Noise

Gunakan:

``` text
UV
```

atau node UV/Texture Coordinates yang tersedia.

Untuk mengatur skala pattern:

``` text
UV
×
Noise Scale
```

------------------------------------------------------------------------

# 38. Simple Noise

Tambahkan:

``` text
Simple Noise
```

Hubungkan UV yang telah diskalakan ke input UV noise.

Noise menghasilkan nilai variasi yang secara praktis digunakan sebagai
mask.

Preview node.

Pastikan pola terlihat.

------------------------------------------------------------------------

# 39. Dissolve Mask dengan Alpha Clip

Cara paling mudah:

``` text
Noise
→ Alpha
```

dan:

``` text
Dissolve Amount
→ Alpha Clip Threshold
```

Secara konseptual:

``` text
Noise < DissolveAmount
→ fragment dibuang
```

Periksa arah kontrol pada versi graph Anda.

Jika slider terasa terbalik dari target:

``` text
One Minus
```

dapat digunakan pada nilai kontrol.

------------------------------------------------------------------------

# 40. Uji Dissolve Amount

Create material:

``` text
MAT_Dissolve
```

Terapkan pada object.

Uji:

``` text
0.0
0.25
0.50
0.75
1.0
```

Target:

``` text
satu ujung slider
→ object hampir/full visible

ujung lain
→ object hampir/full dissolved
```

Jika terbalik, gunakan One Minus pada control.

------------------------------------------------------------------------

# 41. Mengapa Alpha Clip?

Alpha clipping:

``` text
Alpha < Threshold
→ discard
```

Fragment tidak dibuat semi-transparan; fragment diputuskan terlihat atau
dibuang.

Ini berbeda dari alpha blending.

------------------------------------------------------------------------

# 42. Membuat Dissolve Edge

Kita membutuhkan area sempit di sekitar threshold.

Konsep:

``` text
Noise
DissolveAmount
EdgeWidth
↓
band/mask
```

Salah satu pendekatan node:

``` text
Smoothstep(T, T + W, Noise)
```

dibandingkan dengan mask threshold utama untuk membentuk pita edge.

------------------------------------------------------------------------

# 43. Edge Mask --- Langkah

Buat:

``` text
T = Dissolve Amount
W = Edge Width
T2 = T + W
```

Gunakan dua threshold/mask, misalnya melalui `Step` atau `Smoothstep`.

Konsep band:

``` text
MaskOuter - MaskInner
```

Kemudian:

``` text
Saturate
```

agar hasil tetap 0--1.

------------------------------------------------------------------------

# 44. Alternatif Edge Mask dengan Smoothstep

Buat dua Smoothstep dengan batas berdekatan.

Subtract hasilnya.

Preview output.

Target:

``` text
black
black
thin white band
black
```

White band adalah dissolve edge.

Yang penting bukan menghafal susunan node, tetapi memahami bahwa edge
adalah **selisih dua mask di sekitar threshold**.

------------------------------------------------------------------------

# 45. Edge Emission

Hubungkan:

``` text
Edge Mask
×
Edge Color
×
Edge Strength
```

Tambahkan property:

``` text
Edge Strength : Float
```

Hubungkan ke:

``` text
Emission
```

------------------------------------------------------------------------

# 46. Base Color Dissolve

Hubungkan:

``` text
Base Color
→ Base Color
```

Jika menggunakan texture:

``` text
Sample Texture 2D
×
Base Color
→
Base Color
```

Save Asset.

------------------------------------------------------------------------

# 47. Eksperimen Edge Width

Bandingkan:

``` text
Edge Width kecil
Edge Width sedang
Edge Width besar
```

Amati:

-   ketebalan garis dissolve;
-   readability;
-   kesan energi.

Jangan membuat edge memenuhi sebagian besar object.

------------------------------------------------------------------------

# 48. Eksperimen Noise Scale

Bandingkan:

``` text
Noise Scale rendah
Noise Scale tinggi
```

Amati ukuran pola dissolve.

Hubungkan pengamatan dengan UV tiling/frequency.

------------------------------------------------------------------------

# 49. Menganimasikan Dissolve Secara Manual

Untuk P14, `Dissolve Amount` wajib exposed.

Saat Play Mode atau melalui Inspector:

``` text
0 → 1
```

ubah secara manual untuk melihat progression.

Animasi otomatis dengan script/Animator boleh menjadi challenge, bukan
syarat konsep Shader Graph.

------------------------------------------------------------------------

# 50. Dissolve dan Bloom

Edge emission dapat diperkuat oleh Bloom P13.

Gunakan secara terkontrol.

Target:

``` text
visible edge
+
controlled glow
```

bukan seluruh object menjadi putih.

------------------------------------------------------------------------

# 51. Eksperimen 2 --- Dissolve

Dokumentasikan:

``` text
Dissolve = 0.0
Dissolve = 0.25
Dissolve = 0.5
Dissolve = 0.75
Dissolve = 1.0
```

dan satu perbandingan:

``` text
Edge OFF
vs
Edge ON
```

------------------------------------------------------------------------

# 52. Bagian C --- Animated Surface

Target:

``` text
UV
+
Time × Speed
↓
Sample Texture / Pattern
↓
Color
↓
Emission/Base Color
```

------------------------------------------------------------------------

# 53. Membuat Graph

Buat:

``` text
SG_AnimatedSurface
```

Gunakan:

``` text
URP Lit Shader Graph
```

agar surface dapat tetap bereaksi terhadap lighting.

------------------------------------------------------------------------

# 54. Property Animated Surface

Tambahkan:

``` text
Main Texture    : Texture2D
Base Color      : Color
Tiling          : Vector2
Scroll Speed    : Vector2
Emission Color  : Color
Emission Strength : Float
```

Contoh default:

``` text
Tiling = (1,1)
Scroll Speed = (0.2,0)
```

------------------------------------------------------------------------

# 55. UV Coordinate

Tambahkan UV node.

Konsep:

``` text
UV = (u,v)
```

`u` horizontal.

`v` vertical.

------------------------------------------------------------------------

# 56. Tiling

Gunakan:

``` text
UV × Tiling
```

atau node `Tiling And Offset`.

Konsep:

``` text
UV × (2,2)
```

membuat pattern berulang lebih rapat.

------------------------------------------------------------------------

# 57. Time × Scroll Speed

Ambil Time.

Multiply:

``` text
Time
×
Scroll Speed
```

Karena Scroll Speed adalah Vector2, hasil menjadi offset UV dua arah.

------------------------------------------------------------------------

# 58. Animated UV

Gunakan Add:

``` text
Tiled UV
+
Time × Scroll Speed
=
Animated UV
```

Ini merupakan implementasi konsep slide:

``` text
UV' = UV + Time × Speed
```

------------------------------------------------------------------------

# 59. Sample Texture 2D

Tambahkan:

``` text
Sample Texture 2D
```

Hubungkan:

``` text
Main Texture
→ Texture

Animated UV
→ UV
```

Gunakan output RGBA atau channel yang dibutuhkan.

------------------------------------------------------------------------

# 60. Membuat Base Color

Gunakan:

``` text
Sample Texture RGB
×
Base Color
```

hubungkan ke:

``` text
Base Color
```

------------------------------------------------------------------------

# 61. Membuat Animated Emission

Gunakan channel/pattern texture:

``` text
Sample
×
Emission Color
×
Emission Strength
→
Emission
```

Hasil:

> pattern bergerak dan sekaligus dapat terlihat emissive.

------------------------------------------------------------------------

# 62. Membuat Material Animated Surface

Buat:

``` text
MAT_AnimatedSurface
```

Terapkan pada:

-   energy panel;
-   floor strip;
-   monitor;
-   magic surface;
-   conveyor-like surface.

------------------------------------------------------------------------

# 63. Uji Arah Scroll

Uji:

``` text
( 0.2, 0.0)
(-0.2, 0.0)
( 0.0, 0.2)
( 0.2, 0.2)
```

Jelaskan pengaruh tanda positif/negatif dan komponen X/Y.

------------------------------------------------------------------------

# 64. Uji Tiling

Bandingkan:

``` text
(1,1)
(2,2)
(4,4)
```

Amati frekuensi pattern.

------------------------------------------------------------------------

# 65. Animated Surface Tanpa Texture Khusus

Jika tidak memiliki texture pattern, mahasiswa boleh memakai procedural
node seperti Simple Noise sebagai sumber mask/pattern.

Namun tetap wajib memahami `Sample Texture 2D` melalui eksperimen kecil
agar sesuai materi.

------------------------------------------------------------------------

# 66. Eksperimen 3 --- Animated Surface

Dokumentasikan:

``` text
Static UV
Scrolling U
Scrolling V
Diagonal Scroll
```

Pilih satu sebagai final.

------------------------------------------------------------------------

# 67. Bagian D --- Sample Texture 2D

Buat graph/test kecil atau gunakan SG_AnimatedSurface.

Pahami:

``` text
Texture2D
+
UV
→
Sample Texture 2D
→
RGBA
```

Output dapat dipisah:

``` text
R
G
B
A
```

untuk mask atau operasi lain.

------------------------------------------------------------------------

# 68. Texture Channel sebagai Mask

Gunakan satu channel, misalnya R.

Hubungkan ke preview.

Amati bahwa grayscale value:

``` text
0
→ hitam

1
→ putih
```

dapat digunakan sebagai faktor Multiply/Lerp.

------------------------------------------------------------------------

# 69. Bagian E --- Lerp

Tambahkan dua Color:

``` text
Color A
Color B
```

Gunakan mask/noise sebagai:

``` text
T
```

Hubungkan:

``` text
Lerp(A, B, T)
```

Amati:

``` text
T=0 → A
T=1 → B
```

------------------------------------------------------------------------

# 70. Lerp untuk Shader Variasi

Contoh:

``` text
Noise
↓
Lerp
↙   ↘
Blue Purple
```

Hasil surface mempunyai variasi warna berdasarkan mask.

Ini dapat ditambahkan ke Animated Surface sebagai pengembangan.

------------------------------------------------------------------------

# 71. Bagian F --- Step

Gunakan:

``` text
Noise
→ Step
```

dengan threshold.

Preview.

Amati perubahan continuous grayscale menjadi hard binary mask.

------------------------------------------------------------------------

# 72. Bagian G --- Smoothstep

Ganti/compare dengan:

``` text
Smoothstep
```

Amati transisi yang lebih halus.

Kesimpulan:

``` text
Step
→ hard transition

Smoothstep
→ smooth transition
```

------------------------------------------------------------------------

# 73. Bagian H --- Clamp / Saturate

Buat operasi yang dapat menghasilkan nilai di luar 0--1.

Gunakan:

``` text
Saturate
```

atau Clamp 0--1.

Konsep:

``` text
value < 0 → 0
value > 1 → 1
```

Cocok untuk mask.

------------------------------------------------------------------------

# 74. Bagian I --- Coordinate Space

Tambahkan:

``` text
Position
Normal Vector
```

Perhatikan opsi Space:

``` text
Object
World
View
Tangent
```

Tidak semua node menyediakan semua space.

------------------------------------------------------------------------

# 75. Object Space

Object Space mengikuti koordinat lokal object.

Jika object berpindah/berotasi, data lokal tetap terkait dengan object.

Cocok untuk deformation yang ingin mengikuti object.

------------------------------------------------------------------------

# 76. World Space

World Space terkait koordinat scene.

Berguna jika efek perlu konsisten terhadap dunia.

Contoh konsep:

``` text
world height mask
world-position gradient
```

P14 cukup melakukan observasi sederhana.

------------------------------------------------------------------------

# 77. Eksperimen Coordinate Space

Gunakan Position node sebagai sumber gradient/mask sederhana.

Bandingkan:

``` text
Object Space
vs
World Space
```

Gerakkan object.

Amati apakah pola mengikuti object atau world.

------------------------------------------------------------------------

# 78. Bagian J --- Vertex Wave

Vertex Wave adalah bagian pengembangan yang sangat dianjurkan karena
materi P14 mencakup Vertex Stage.

Gunakan plane yang mempunyai cukup subdivision.

Jangan menggunakan quad dengan hanya empat vertex untuk mengharapkan
gelombang halus.

------------------------------------------------------------------------

# 79. Membuat Plane Uji

Buat plane/mesh grid dengan subdivision memadai.

Dapat berasal dari Blender atau mesh yang sesuai.

Nama:

``` text
WavePlane
```

Buat graph:

``` text
SG_VertexWave
```

atau tambahkan wave pada Animated Surface jika graph tetap mudah dibaca.

------------------------------------------------------------------------

# 80. Konsep Vertex Wave

Formula:

``` text
offset =
sin(position.x × frequency + time × speed)
× amplitude
```

Kemudian:

``` text
newPosition =
position
+
normal × offset
```

------------------------------------------------------------------------

# 81. Blackboard Vertex Wave

Tambahkan:

``` text
Amplitude : Float
Frequency : Float
Wave Speed : Float
```

Contoh titik awal:

``` text
Amplitude = 0.1
Frequency = 2
Wave Speed = 1
```

Sesuaikan skala mesh.

------------------------------------------------------------------------

# 82. Position Node

Tambahkan:

``` text
Position
```

Gunakan:

``` text
Object Space
```

Split komponen.

Ambil:

``` text
X
```

sebagai phase berdasarkan posisi.

------------------------------------------------------------------------

# 83. Frequency

Gunakan:

``` text
Position X
×
Frequency
```

Ini menentukan seberapa rapat wave sepanjang mesh.

------------------------------------------------------------------------

# 84. Time Phase

Gunakan:

``` text
Time
×
Wave Speed
```

Kemudian:

``` text
PositionX × Frequency
+
Time × Speed
```

------------------------------------------------------------------------

# 85. Sine Wave

Masukkan phase ke:

``` text
Sine
```

Kemudian:

``` text
Sine
×
Amplitude
```

Hasil adalah displacement scalar.

------------------------------------------------------------------------

# 86. Displacement Sepanjang Normal

Gunakan:

``` text
Normal Vector (Object)
×
Offset
```

Kemudian:

``` text
Position (Object)
+
Normal × Offset
```

Hubungkan ke:

``` text
Vertex
→ Position
```

------------------------------------------------------------------------

# 87. Mengapa Object Space?

Vertex Position pada Lit Shader Graph URP menggunakan posisi
object-space pada Vertex Context.

Dengan bekerja konsisten di Object Space, kita menghindari pencampuran
coordinate space yang tidak perlu.

------------------------------------------------------------------------

# 88. Uji Vertex Density

Bandingkan:

``` text
Plane sedikit vertex
vs
Plane banyak subdivision
```

Gunakan shader wave yang sama.

Amati:

``` text
sedikit vertex
→ deformasi kaku

lebih banyak vertex
→ wave lebih halus
```

------------------------------------------------------------------------

# 89. Shader Tidak Menambah Vertex

Shader vertex dasar:

``` text
memindahkan vertex yang sudah ada
```

bukan:

``` text
membuat subdivision baru
```

Karena itu topology mesh memengaruhi kualitas deformasi.

------------------------------------------------------------------------

# 90. Eksperimen 4 --- Vertex Wave

Uji:

``` text
Amplitude rendah/tinggi
Frequency rendah/tinggi
Speed rendah/tinggi
```

Dokumentasikan minimal tiga variasi.

------------------------------------------------------------------------

# 91. Bagian K --- Reusability

Duplicate material, bukan graph.

Contoh:

``` text
SG_EmissionPulse
├── MAT_NeonBlue
├── MAT_AlarmRed
└── MAT_TerminalGreen
```

Ubah hanya exposed properties.

------------------------------------------------------------------------

# 92. Eksperimen Reusability

Buat tiga material dari satu shader.

Terapkan ke tiga object.

Buktikan bahwa:

``` text
logic shader sama
+
parameter berbeda
=
visual berbeda
```

------------------------------------------------------------------------

# 93. Bagian L --- Integrasi ke Scene P13

Gunakan scene:

``` text
P14_ShaderLab
```

Terapkan:

``` text
Emission Pulse
→ lamp / terminal

Dissolve
→ hero prop / holographic object

Animated Surface
→ panel / floor / energy surface
```

Jangan menerapkan semua shader pada semua object.

------------------------------------------------------------------------

# 94. Lighting dan Shader

Pastikan Lit shader masih terbaca oleh lighting P13.

Bandingkan:

``` text
Emission Strength = 0
vs
Emission Strength > 0
```

Amati kontribusi:

``` text
Lit response
+
Emission
```

------------------------------------------------------------------------

# 95. Post Processing dan Shader

Bloom dari P13 dapat memperkuat emission.

Uji:

``` text
Bloom OFF
vs
Bloom ON
```

Jelaskan bahwa Shader Graph dan post-processing bekerja pada tahap
berbeda.

------------------------------------------------------------------------

# 96. Scene Composition

Atur camera agar ketiga shader dapat diamati.

Target bukan memasukkan sebanyak mungkin efek, melainkan:

``` text
jelas
terkontrol
mudah dibandingkan
```

------------------------------------------------------------------------

# 97. Bagian M --- Debugging dengan Preview

Jika shader salah, jangan langsung mengubah output akhir.

Preview secara bertahap:

``` text
UV
↓
Noise
↓
Threshold
↓
Edge Mask
↓
Emission
```

Cari node pertama yang outputnya tidak sesuai.

------------------------------------------------------------------------

# 98. Debugging Data Type

Jika port tidak dapat dihubungkan:

periksa tipe:

``` text
Float
Vector2
Vector3
Vector4
Color
Texture2D
```

Shader Graph kadang dapat melakukan conversion otomatis, tetapi jangan
mengandalkannya tanpa memahami hasil.

------------------------------------------------------------------------

# 99. Debugging UV

Jika texture/pattern tidak bergerak:

periksa:

``` text
UV
Tiling
Time
Speed
Add/Offset
Sample Texture 2D UV input
```

Pastikan Animated UV benar-benar masuk ke port UV sample.

------------------------------------------------------------------------

# 100. Debugging Time

Jika animasi diam:

-   Play Mode?
-   Time node benar?
-   Speed = 0?
-   Multiply terhubung?
-   output Time dipakai?

Node preview/editor dapat menunjukkan animasi, tetapi verifikasi tetap
dilakukan pada material di scene.

------------------------------------------------------------------------

# 101. Debugging Emission

Jika emission tidak terlihat:

-   Emission output terhubung?
-   Strength \> 0?
-   Color terlalu gelap?
-   material memakai graph yang benar?
-   Bloom hanya diperlukan untuk glow, bukan agar emission ada.

------------------------------------------------------------------------

# 102. Debugging Dissolve Tidak Menghilang

Periksa:

``` text
Alpha Clipping ON
Noise → Alpha
Dissolve Amount → Alpha Clip Threshold
```

atau equivalent mask setup.

Periksa range mask 0--1.

------------------------------------------------------------------------

# 103. Debugging Dissolve Terbalik

Jika:

``` text
0 = hilang
1 = muncul
```

padahal target ingin sebaliknya, gunakan:

``` text
One Minus
```

pada control atau ubah arah comparison.

Yang penting slider mempunyai perilaku konsisten dan terdokumentasi.

------------------------------------------------------------------------

# 104. Debugging Edge Hilang

Preview:

``` text
Mask Inner
Mask Outer
Subtract
Saturate
```

Jika edge mask seluruhnya hitam:

-   Edge Width terlalu kecil;
-   urutan subtraction terbalik;
-   threshold di luar range;
-   Noise tidak 0--1 seperti diasumsikan.

------------------------------------------------------------------------

# 105. Debugging Texture Pink/Magenta

Periksa:

-   graph berhasil compile;
-   shader URP;
-   material menggunakan graph yang benar;
-   tidak ada error Shader Graph;
-   pipeline project benar.

------------------------------------------------------------------------

# 106. Debugging Vertex Wave Tidak Terlihat

Periksa:

``` text
Amplitude > 0
Time × Speed
Position component
Vertex Position connected
mesh vertex density
```

------------------------------------------------------------------------

# 107. Debugging Vertex Wave Rusak

Kemungkinan:

-   coordinate space tercampur;
-   amplitude terlalu besar;
-   normal/position space tidak sama;
-   mesh scale ekstrem.

Mulai dengan amplitude kecil.

------------------------------------------------------------------------

# 108. Debugging Material Tidak Menampilkan Property

Periksa:

``` text
property ada di Blackboard
Exposed aktif
graph sudah Save Asset
material menggunakan shader yang benar
```

------------------------------------------------------------------------

# 109. Shader dan Performance

P14 fokus pada konsep, tetapi mahasiswa harus mulai mengenali cost.

Faktor:

-   texture samples;
-   banyak operasi per fragment;
-   procedural noise;
-   transparency;
-   overdraw;
-   banyak shader variants/features;
-   kompleksitas graph.

------------------------------------------------------------------------

# 110. Vertex vs Fragment Cost --- Konsep

Secara sederhana:

``` text
Vertex operation
→ dijalankan per vertex

Fragment operation
→ dijalankan per fragment
```

Object layar besar dapat menghasilkan sangat banyak fragment.

Jangan menyimpulkan otomatis bahwa satu stage selalu lebih mahal; cost
nyata bergantung shader, mesh, resolusi, overdraw, hardware, dan
pipeline.

------------------------------------------------------------------------

# 111. Transparency dan Overdraw

Transparent shader dapat menyebabkan:

-   sorting complexity;
-   overdraw;
-   lebih banyak fragment processing.

Karena itu Dissolve wajib menggunakan:

``` text
Opaque + Alpha Clipping
```

kecuali mahasiswa secara khusus melakukan challenge transparency.

------------------------------------------------------------------------

# 112. Milestone 1 --- Project Ready

``` text
[ ] Unity 6+
[ ] URP
[ ] P13 scene tersedia
[ ] Shader Graph dapat dibuat
[ ] no critical error
```

------------------------------------------------------------------------

# 113. Milestone 2 --- Shader Graph Fundamentals

``` text
[ ] Blackboard
[ ] Exposed property
[ ] Master Stack
[ ] Vertex Context
[ ] Fragment Context
[ ] Preview
```

------------------------------------------------------------------------

# 114. Milestone 3 --- Emission Pulse

``` text
[ ] Base Color
[ ] Emission Color
[ ] Strength
[ ] Time
[ ] Speed
[ ] Sine
[ ] remap 0–1
[ ] Material
```

------------------------------------------------------------------------

# 115. Milestone 4 --- Dissolve

``` text
[ ] Simple Noise
[ ] Dissolve Amount
[ ] Alpha Clipping
[ ] full progression
```

------------------------------------------------------------------------

# 116. Milestone 5 --- Dissolve Edge

``` text
[ ] Edge Width
[ ] Edge Mask
[ ] Edge Color
[ ] Edge Strength
[ ] Emission
```

------------------------------------------------------------------------

# 117. Milestone 6 --- Animated Surface

``` text
[ ] UV
[ ] Tiling
[ ] Time
[ ] Vector2 Scroll Speed
[ ] Sample Texture 2D
[ ] Base Color
[ ] Emission
```

------------------------------------------------------------------------

# 118. Milestone 7 --- Math Nodes

Mahasiswa telah menggunakan/menguji:

``` text
Add
Subtract
Multiply
Sine
Lerp
Step
Smoothstep
Saturate/Clamp
```

------------------------------------------------------------------------

# 119. Milestone 8 --- Coordinate Space

``` text
[ ] Position
[ ] Object Space
[ ] World Space
[ ] perbedaan diamati
```

------------------------------------------------------------------------

# 120. Milestone 9 --- Vertex Wave

``` text
[ ] Position
[ ] Normal
[ ] Time
[ ] Sine
[ ] Amplitude
[ ] Frequency
[ ] Speed
[ ] Vertex Position
```

------------------------------------------------------------------------

# 121. Milestone 10 --- Reusable Material

Minimal satu shader mempunyai tiga material variant.

------------------------------------------------------------------------

# 122. Milestone 11 --- Scene Integration

Ketiga shader utama diterapkan secara terarah pada scene P13.

------------------------------------------------------------------------

# 123. Milestone 12 --- Final Validation

``` text
[ ] visual benar
[ ] parameter exposed
[ ] shader reusable
[ ] no shader compile error
[ ] screenshot lengkap
[ ] README
```

------------------------------------------------------------------------

# 124. Eksperimen Wajib

Mahasiswa melakukan minimal:

1.  **Pulse Speed** --- slow vs fast.
2.  **Emission Strength** --- low vs high.
3.  **Sine Remap** --- raw `-1..1` vs remapped `0..1`.
4.  **Dissolve Amount** --- lima tahap.
5.  **Edge Width** --- thin vs thick.
6.  **Noise Scale** --- low vs high.
7.  **Alpha Clipping** --- off/on.
8.  **Tiling** --- 1, 2, 4.
9.  **Scroll Direction** --- U, V, diagonal.
10. **Scroll Speed** --- slow vs fast.
11. **Step vs Smoothstep**.
12. **Lerp** dengan mask.
13. **Object vs World Space**.
14. **Vertex Density** pada wave.
15. **Amplitude/Frequency/Speed**.
16. **Bloom OFF vs ON** pada emission.
17. **Reusable Material** --- tiga variasi.
18. **Final integration** ketiga shader.

------------------------------------------------------------------------

# 125. Tugas Utama

Buat scene P14 dengan minimal:

``` text
1 Emission Pulse Shader
1 Dissolve Shader + Edge
1 Animated Surface Shader
```

Ketiganya harus:

-   dibuat dengan Shader Graph;
-   memiliki property yang jelas;
-   property penting exposed;
-   memiliki Material;
-   diterapkan ke scene P13;
-   dapat diatur tanpa mengedit graph;
-   didokumentasikan.

------------------------------------------------------------------------

# 126. Requirement Emission Pulse

``` text
[ ] Lit Shader Graph
[ ] Base Color
[ ] Emission Color
[ ] Emission Strength
[ ] Pulse Speed
[ ] Time
[ ] Multiply
[ ] Sine
[ ] remap
[ ] Emission output
```

------------------------------------------------------------------------

# 127. Requirement Dissolve

``` text
[ ] Lit Shader Graph
[ ] Opaque
[ ] Alpha Clipping
[ ] procedural/noise mask
[ ] Dissolve Amount
[ ] Edge Width
[ ] Edge Color
[ ] Edge Strength
[ ] emissive edge
```

------------------------------------------------------------------------

# 128. Requirement Animated Surface

``` text
[ ] Lit Shader Graph
[ ] Texture2D/pattern
[ ] UV
[ ] Tiling
[ ] Time
[ ] Vector2 Scroll Speed
[ ] animated UV
[ ] Base Color
[ ] Emission
```

------------------------------------------------------------------------

# 129. Requirement Konsep

README harus menjelaskan:

-   vertex vs fragment;
-   UV;
-   Time;
-   Sine;
-   Multiply;
-   Lerp;
-   Step;
-   Smoothstep;
-   Alpha Clipping;
-   coordinate space;
-   shader reusability;
-   performance consideration.

------------------------------------------------------------------------

# 130. Challenge A --- Alarm Material

Buat varian:

``` text
SG_EmissionPulse
↓
MAT_AlarmRed
```

dengan pulse cepat.

Bandingkan dengan neon ambient yang pulse-nya lambat.

------------------------------------------------------------------------

# 131. Challenge B --- Two-Color Energy

Pada Animated Surface:

``` text
Pattern/Noise
→ Lerp(Color A, Color B)
```

gabungkan dengan scrolling UV.

------------------------------------------------------------------------

# 132. Challenge C --- Animated Dissolve

Animasikan `Dissolve Amount` menggunakan Animator atau script sederhana.

Shader tetap bertanggung jawab pada visual mask; Animator/script hanya
mengubah property.

------------------------------------------------------------------------

# 133. Challenge D --- Scrolling Dissolve Noise

Tambahkan:

``` text
UV + Time × Speed
```

sebelum Noise.

Dissolve pattern ikut bergerak.

------------------------------------------------------------------------

# 134. Challenge E --- Vertex Wave

Terapkan wave pada subdivided plane.

Tambahkan:

``` text
Amplitude
Frequency
Speed
```

sebagai exposed property.

------------------------------------------------------------------------

# 135. Challenge F --- Hologram-Like Surface

Gabungkan konsep:

``` text
scrolling pattern
+
emission
+
pulse
```

Transparency boleh dieksplorasi hanya sebagai challenge.

Jelaskan tambahan kompleksitasnya.

------------------------------------------------------------------------

# 136. Challenge G --- World Height Gradient

Gunakan World Position Y sebagai mask.

Gunakan Remap/Smoothstep untuk menghasilkan gradient berdasarkan
ketinggian dunia.

------------------------------------------------------------------------

# 137. Challenge H --- Shader Variants

Gunakan satu graph untuk minimal empat material berbeda.

Buktikan bahwa graph dirancang reusable.

------------------------------------------------------------------------

# 138. Challenge I --- Parameter Presets

Buat tiga karakter visual:

``` text
Calm
Alert
Overload
```

dari satu shader dengan perubahan parameter saja.

------------------------------------------------------------------------

# 139. Challenge J --- Performance Simplification

Buat:

``` text
Shader A
→ versi lengkap

Shader B
→ versi disederhanakan
```

Kurangi satu noise/sample/operasi visual.

Bandingkan apakah perbedaan visual cukup berarti.

Profiling detail dilakukan pada P15.

------------------------------------------------------------------------

# 140. Test Case

    No. Pengujian          Hasil yang Diharapkan
  ----- ------------------ ----------------------------------
      1 Unity              6+
      2 Pipeline           URP
      3 Shader Graph       dapat dibuat/dibuka
      4 Lit graph          bereaksi terhadap lighting
      5 Blackboard         property tersedia
      6 Exposed            property muncul pada material
      7 Time               nilai berubah
      8 Sine               pulse periodik
      9 Remap              pulse 0--1
     10 Emission           surface emissive
     11 Dissolve noise     mask terlihat
     12 Dissolve Amount    progression bekerja
     13 Alpha Clip         fragment terpotong
     14 Edge               band terlihat
     15 Edge emission      edge bercahaya
     16 UV                 texture terpetakan
     17 Tiling             repetition berubah
     18 Scroll             pattern bergerak
     19 Lerp               interpolasi warna bekerja
     20 Step               hard mask
     21 Smoothstep         smooth transition
     22 Object/World       perbedaan dapat diamati
     23 Vertex wave        mesh berubah
     24 Vertex density     wave lebih halus pada mesh padat
     25 Reusability        beberapa material satu graph
     26 P13 integration    ketiga shader tampil
     27 Bloom comparison   glow dapat diamati
     28 Console            tidak ada critical shader error

------------------------------------------------------------------------

# 141. Pertanyaan Pemahaman

1.  Apa fungsi shader?
2.  Apa itu Shader Graph?
3.  Mengapa Shader Graph disebut node-based?
4.  Apa fungsi Blackboard?
5.  Apa itu exposed property?
6.  Mengapa exposed property mendukung reusability?
7.  Apa itu Master Stack?
8.  Apa perbedaan Vertex dan Fragment Context?
9.  Apa yang diproses Vertex Stage?
10. Apa yang diproses Fragment Stage?
11. Apa itu Float?
12. Apa itu Vector2?
13. Apa itu Color?
14. Apa itu Texture2D?
15. Apa itu UV?
16. Apa fungsi Sample Texture 2D?
17. Apa arti RGBA?
18. Apa itu tiling?
19. Apa itu offset?
20. Apa fungsi Time?
21. Bagaimana Time dapat menggerakkan texture?
22. Apa fungsi Multiply?
23. Apa fungsi Add?
24. Apa fungsi Subtract?
25. Apa output Sine?
26. Mengapa Sine sering diremap ke 0--1?
27. Bagaimana rumus remap Sine?
28. Apa fungsi Lerp?
29. Apa arti parameter T pada Lerp?
30. Apa fungsi Step?
31. Apa fungsi Smoothstep?
32. Apa perbedaan Step dan Smoothstep?
33. Apa fungsi Saturate/Clamp?
34. Apa itu emission?
35. Apa perbedaan emission dan Bloom?
36. Apa itu dissolve mask?
37. Mengapa noise cocok untuk dissolve?
38. Apa itu Dissolve Amount?
39. Apa itu Alpha Clipping?
40. Apa perbedaan alpha clipping dan transparency?
41. Bagaimana dissolve edge dibuat secara konseptual?
42. Mengapa edge dapat dihubungkan ke Emission?
43. Apa itu scrolling UV?
44. Apa arti Scroll Speed Vector2?
45. Apa itu Object Space?
46. Apa itu World Space?
47. Mengapa coordinate space tidak boleh dicampur sembarangan?
48. Apa itu vertex displacement?
49. Mengapa vertex density memengaruhi wave?
50. Mengapa shader tidak otomatis menambah vertex?
51. Apa fungsi amplitude?
52. Apa fungsi frequency?
53. Apa fungsi speed?
54. Mengapa property harus diberi nama jelas?
55. Mengapa satu shader sebaiknya reusable?
56. Bagaimana Preview membantu debugging?
57. Apa akibat banyak texture sampling?
58. Mengapa transparency dapat mahal?
59. Apa itu overdraw?
60. Mengapa shader perlu dipertimbangkan terhadap performa?

------------------------------------------------------------------------

# 142. Pertanyaan Analisis

## A --- Pulse

Mengapa `Sine(Time)` tidak ideal jika langsung dipakai sebagai faktor
brightness tanpa remap?

## B --- Dissolve

Mengapa Opaque + Alpha Clipping lebih sesuai untuk dissolve dasar
daripada Transparent?

## C --- Edge

Mengapa dissolve edge dapat dibuat dari selisih dua threshold/mask?

## D --- UV

Mengapa perubahan UV dapat membuat texture tampak bergerak walaupun mesh
tidak berpindah?

## E --- Vertex Density

Mengapa plane dengan empat vertex tidak dapat menghasilkan wave halus?

## F --- Space

Apa yang terjadi jika Position menggunakan World Space tetapi offset
diasumsikan sebagai Object Space?

## G --- Reusability

Mengapa membuat tiga Material lebih baik daripada menduplikasi tiga
Shader Graph yang logikanya sama?

## H --- Bloom

Mengapa Bloom bukan bagian yang sama dengan Emission Shader?

## I --- Fragment Cost

Mengapa shader pada object yang memenuhi layar dapat mempunyai cost
berbeda dari object kecil walaupun graph sama?

## J --- Performance

Mengapa visual yang lebih kompleks belum tentu lebih baik untuk
real-time application?

------------------------------------------------------------------------

# 143. Dokumentasi Wajib

Ambil screenshot:

``` text
01 Shader Graph Interface
02 Emission Graph
03 Emission Slow Pulse
04 Emission Fast Pulse
05 Dissolve Graph
06 Dissolve 0
07 Dissolve 25
08 Dissolve 50
09 Dissolve 75
10 Dissolve 100
11 Dissolve Edge
12 Animated Surface Graph
13 Static UV
14 Scroll U
15 Scroll V
16 Tiling Comparison
17 Step
18 Smoothstep
19 Lerp
20 Object Space
21 World Space
22 Vertex Wave Graph
23 Low Vertex Density
24 Higher Vertex Density
25 Reusable Materials
26 Bloom OFF
27 Bloom ON
28 Final P14 Scene
```

Graph screenshot harus cukup jelas sehingga node utama dapat dibaca.

------------------------------------------------------------------------

# 144. Struktur Pengumpulan

``` text
P14_NRP_Nama/
├── UnityProject/
│   └── Assets/
│       ├── Materials/
│       │   └── P14/
│       ├── Shaders/
│       │   └── P14/
│       ├── Textures/
│       │   └── P14/
│       ├── Scenes/
│       │   └── P14_ShaderLab.unity
│       └── ...
├── Screenshots/
│   ├── ...
│   └── P14_Final.png
└── README.md
```

Folder cache Unity seperti `Library` umumnya tidak perlu dikumpulkan
kecuali LMS/instruktur meminta lain.

------------------------------------------------------------------------

# 145. Isi README

``` text
Nama:
NRP:
Unity Version:
Render Pipeline:

SCENE
- scene P13 yang digunakan
- object target shader

SHADER 1 — EMISSION PULSE
- tujuan
- property
- node utama
- rumus pulse
- variasi parameter

SHADER 2 — DISSOLVE
- tujuan
- property
- noise
- alpha clipping
- edge mask
- emission edge

SHADER 3 — ANIMATED SURFACE
- tujuan
- texture/pattern
- UV
- tiling
- scroll speed
- emission

VERTEX WAVE
- jika dibuat
- amplitude
- frequency
- speed
- vertex density

NODE STUDY
- Lerp
- Step
- Smoothstep
- Clamp/Saturate

COORDINATE SPACE
- Object
- World
- hasil observasi

REUSABILITY
- daftar material variant

PERFORMANCE
- texture sample
- math
- transparency/overdraw
- simplifikasi yang mungkin

CHALLENGE
- minimal 2

REFLEKSI
- masalah
- debugging
- konsep terpenting
```

------------------------------------------------------------------------

# 146. Checklist Pengumpulan

``` text
[ ] Unity 6+
[ ] URP
[ ] scene P13 digunakan
[ ] SG_EmissionPulse
[ ] MAT_EmissionPulse
[ ] pulse berjalan
[ ] Sine diremap
[ ] SG_Dissolve
[ ] Alpha Clipping
[ ] Dissolve Amount
[ ] Noise
[ ] Dissolve Edge
[ ] Edge Emission
[ ] SG_AnimatedSurface
[ ] Texture/pattern
[ ] UV
[ ] Tiling
[ ] Time
[ ] Scroll Speed Vector2
[ ] scrolling berjalan
[ ] Lerp diuji
[ ] Step diuji
[ ] Smoothstep diuji
[ ] Saturate/Clamp dipahami
[ ] Object vs World Space diuji
[ ] Vertex Wave dibuat/diuji
[ ] vertex density dibandingkan
[ ] reusable materials
[ ] ketiga shader diterapkan
[ ] Bloom comparison
[ ] minimal 18 eksperimen
[ ] minimal 2 challenge
[ ] screenshot lengkap
[ ] README
[ ] no critical shader error
```

------------------------------------------------------------------------

# 147. Refleksi Praktikum

Tuliskan 10--15 kalimat mengenai:

1.  perbedaan shader biasa dengan Shader Graph sebagai workflow
    authoring;
2.  fungsi Blackboard;
3.  fungsi exposed property;
4.  perbedaan Vertex dan Fragment Stage;
5.  penggunaan UV;
6.  penggunaan Time;
7.  alasan Sine diremap;
8.  cara kerja dissolve;
9.  fungsi Alpha Clipping;
10. cara kerja dissolve edge;
11. cara kerja scrolling surface;
12. pengaruh coordinate space;
13. pengaruh vertex density;
14. manfaat reusable shader;
15. kemungkinan cost shader terhadap real-time rendering.

------------------------------------------------------------------------

# 148. Hubungan dengan Pertemuan 15

P14 menghasilkan:

``` text
Custom Shader
+
Animated Surface
+
Emission
+
Dissolve
+
Vertex Animation
```

Pada Pertemuan 15:

# VFX, Particle & Graphics Optimization

efek shader akan menjadi bagian dari scene VFX yang lebih lengkap.

Mahasiswa mulai mengevaluasi:

``` text
visual quality
vs
rendering cost
```

------------------------------------------------------------------------

# 149. Ringkasan Praktikum

Tiga workflow utama:

## Emission Pulse

``` text
Time
↓
Multiply Speed
↓
Sine
↓
Remap 0–1
↓
Multiply Emission
↓
Emission
```

## Dissolve

``` text
UV
↓
Noise
↓
Threshold / Dissolve Amount
↓
Alpha Clipping
+
Edge Mask
↓
Emission Edge
```

## Animated Surface

``` text
UV
+
Time × Scroll Speed
↓
Sample Texture
↓
Color
+
Emission
```

Pengembangan Vertex:

``` text
Position
+
Normal ×
sin(Position × Frequency + Time × Speed)
× Amplitude
↓
Vertex Position
```

Benang merah P14:

``` text
Shader Property
↓
Node-Based Data Flow
↓
Math / Texture / Time
↓
Vertex + Fragment Processing
↓
Custom Surface Behavior
↓
Reusable Material
↓
Real-Time Scene
```

Target akhirnya bukan sekadar mempunyai graph yang terlihat kompleks,
tetapi:

> **memahami mengapa setiap node ada, data apa yang mengalir melalui
> node tersebut, dan bagaimana graph menghasilkan perilaku visual pada
> surface.**
