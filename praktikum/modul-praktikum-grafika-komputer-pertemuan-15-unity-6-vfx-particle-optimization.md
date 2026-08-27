# Modul Praktikum Grafika Komputer — Pertemuan 15

## VFX, Particle & Graphics Optimization — Unity 6+ / URP

**Mata Kuliah:** EF234504 — Grafika Komputer  
**Pertemuan:** 15  
**Topik:** VFX, Particle & Graphics Optimization  
**Platform:** Unity 6+ — Universal Render Pipeline (URP)  
**Dosen:** Dr. Darlis Herumurti  
**Departemen:** Teknik Informatika  

---

# 1. Deskripsi Praktikum

Pertemuan 15 merupakan kelanjutan dari rangkaian Unity pada Pertemuan 12–14.

Pada pertemuan sebelumnya mahasiswa telah memiliki:

```text
P12
Unity + URP
↓
P13
Lighting + Material + Post Processing
↓
P14
Shader Graph
```

Pertemuan 15 mempunyai dua tujuan utama:

```text
Enhance Visual
+
Control Performance
```

Mahasiswa akan membuat Visual Effect menggunakan Particle System, mengintegrasikan shader dari Pertemuan 14, kemudian melakukan profiling dan optimasi secara terukur.

Pipeline praktikum:

```text
P13/P14 Scene
↓
Particle System
↓
Burst VFX
↓
Ambient VFX
↓
Shader Graph Integration
↓
Baseline Profiling
↓
Identify Bottleneck
↓
Optimize One Variable
↓
Measure Again
↓
Compare
↓
Final Optimized Scene
```

---

# 2. Kompatibilitas Unity 6+

Modul ini dirancang untuk:

```text
Unity 6+
Universal Render Pipeline (URP)
```

Fitur utama yang digunakan:

- Particle System;
- Main Module;
- Emission;
- Shape;
- Velocity over Lifetime;
- Size over Lifetime;
- Color over Lifetime;
- Noise;
- Collision;
- Trails;
- Renderer;
- Profiler;
- Rendering statistics;
- GPU Instancing;
- LOD Group;
- Occlusion Culling;
- Texture Import Settings;
- Mipmaps;
- URP lighting/shadow settings;
- shader/material dari Shader Graph P14.

> **Catatan:** VFX Graph hanya diperkenalkan secara konseptual pada P15. Tugas utama menggunakan **Particle System**, sesuai materi pertemuan.

---

# 3. Capaian Praktikum

Setelah praktikum mahasiswa mampu:

1. menjelaskan fungsi VFX pada real-time graphics;
2. membuat Particle System;
3. menjelaskan siklus hidup particle;
4. mengatur emitter;
5. mengatur emission rate;
6. membuat burst;
7. mengatur lifetime;
8. mengatur start speed/velocity;
9. menggunakan Shape Module;
10. menggunakan Size over Lifetime;
11. menggunakan Color over Lifetime;
12. menggunakan Noise;
13. menggunakan Collision;
14. menggunakan Trails;
15. membedakan additive dan alpha-blended effect secara konsep;
16. menjelaskan overdraw;
17. membuat Impact/Burst VFX;
18. membuat Ambient/Continuous VFX;
19. mengintegrasikan Shader Graph P14;
20. menjelaskan VFX Graph secara konseptual;
21. memahami frame time;
22. menghitung frame budget;
23. membedakan bottleneck CPU dan GPU secara umum;
24. menggunakan Unity Profiler;
25. membaca Rendering statistics dasar;
26. mengevaluasi triangle count;
27. mengevaluasi draw call/batches;
28. memahami batching;
29. menggunakan GPU Instancing bila sesuai;
30. menggunakan LOD Group;
31. memahami Occlusion Culling;
32. mengevaluasi texture resolution;
33. menggunakan mipmaps secara tepat;
34. mengevaluasi shader complexity;
35. mengevaluasi shadow cost;
36. membuat baseline;
37. melakukan optimasi satu variabel;
38. mengukur ulang;
39. membandingkan before/after;
40. mempertahankan kualitas visual sambil mengurangi pekerjaan yang tidak perlu.

---

# 4. Target Akhir Praktikum

Mahasiswa menghasilkan scene dengan minimal:

```text
1. Impact / Burst VFX
2. Ambient / Continuous VFX
3. Integrasi satu shader P14
4. Baseline performance record
5. Particle/overdraw study
6. Draw call/batch study
7. LOD study
8. Texture/shader/shadow study
9. Minimal empat optimization actions
10. Before/After comparison
```

---

# 5. Prinsip Praktikum

Jangan melakukan:

```text
semua setting → LOW
semua particle → sedikit
semua shadow → OFF
```

lalu menyebutnya optimasi.

Optimization yang benar:

```text
Measure
↓
Identify
↓
Change
↓
Measure Again
↓
Compare
```

Prinsip:

> **Optimasi adalah pengurangan pekerjaan yang tidak perlu sambil mempertahankan tujuan visual.**

---

# 6. Persiapan Project

Gunakan project P14.

Buat copy:

```text
P14_NRP_Nama
↓
P15_NRP_Nama
```

Pastikan:

```text
[ ] Unity 6+
[ ] URP
[ ] P13 lighting/post FX tersedia
[ ] P14 shader tersedia
[ ] scene dapat Play
[ ] Console tidak memiliki critical error
```

---

# 7. Folder Project

Tambahkan struktur:

```text
Assets/
├── VFX/
│   ├── Materials/
│   ├── Textures/
│   └── Prefabs/
├── Scenes/
│   └── P15/
├── Optimization/
│   └── TestAssets/
└── Screenshots/
```

---

# 8. Scene Praktikum

Duplicate scene P14:

```text
P14_ShaderLab
↓
P15_VFX_Optimization
```

Gunakan Camera dan environment yang representatif.

Optimization harus diukur pada scene yang cukup realistis terhadap penggunaan akhir.

---

# 9. Bagian A — Konsep Particle System

Particle System bekerja dengan siklus:

```text
Emitter
↓
Spawn
↓
Initialize
↓
Update
↓
Render
↓
Lifetime End
```

Setiap particle dapat mempunyai:

```text
Position
Velocity
Lifetime
Size
Color
Rotation
```

---

# 10. Membuat Particle System

Gunakan menu Unity:

```text
GameObject
→ Effects
→ Particle System
```

Rename:

```text
VFX_Impact
```

Posisikan pada area mudah dilihat Camera.

---

# 11. Main Module

Main Module mengontrol properti dasar seperti:

```text
Duration
Looping
Start Lifetime
Start Speed
Start Size
Start Color
Gravity Modifier
Simulation Space
Max Particles
```

Untuk Impact VFX, matikan:

```text
Looping
```

---

# 12. Lifetime

Set nilai awal sederhana, misalnya:

```text
Start Lifetime ≈ 0.5 – 1.5 detik
```

Nilai final ditentukan berdasarkan effect.

Konsep:

```text
particle aktif
≈
emission rate × lifetime
```

Semakin panjang lifetime, semakin banyak particle dapat hidup bersamaan.

---

# 13. Start Speed

Atur Start Speed.

Eksperimen:

```text
rendah
sedang
tinggi
```

Amati jarak penyebaran effect.

Start Speed menentukan kecepatan awal particle, sedangkan module lain dapat mengubah velocity selama lifetime.

---

# 14. Start Size

Atur Start Size agar sesuai skala dunia.

Kesalahan umum:

```text
particle terlalu besar
```

sehingga satu particle memenuhi layar dan meningkatkan overdraw.

Mulai dari kecil.

---

# 15. Max Particles

Main Module memiliki:

```text
Max Particles
```

Ini menjadi batas jumlah particle yang dapat aktif.

Jangan menaikkan menjadi sangat besar tanpa kebutuhan.

---

# 16. Bagian B — Emission

Buka:

```text
Emission
```

Untuk effect kontinu tersedia:

```text
Rate over Time
```

Untuk impact gunakan:

```text
Bursts
```

---

# 17. Rate over Time

Eksperimen:

```text
10
50
100 particles/sec
```

Amati kepadatan effect.

Catat:

> semakin tinggi rate, jumlah particle dan potensi overdraw meningkat.

---

# 18. Burst

Pada Emission:

```text
Bursts
→ Add
```

Atur burst pada time awal.

Contoh:

```text
Time = 0
Count = 20–40
```

Gunakan sebagai titik awal.

Impact effect biasanya lebih cocok dengan burst daripada continuous emission.

---

# 19. Burst Timing

Eksperimen:

```text
20 particle
40 particle
80 particle
```

Bandingkan:

- readability;
- impact;
- density;
- clutter.

Pilih jumlah paling kecil yang masih menghasilkan impact visual yang jelas.

---

# 20. Bagian C — Shape Module

Aktifkan:

```text
Shape
```

Untuk impact, uji:

```text
Sphere
Cone
Circle
```

Pilih berdasarkan sumber effect.

---

# 21. Shape Sphere

Sphere cocok untuk:

```text
explosion
energy burst
impact radial
```

Particle keluar dari area/direction radial.

---

# 22. Shape Cone

Cone cocok untuk:

```text
muzzle flash
jet
spark direction
smoke source
```

Direction lebih terkontrol.

---

# 23. Shape Box

Box cocok untuk:

```text
rain region
dust area
ambient effect
volume spawn sederhana
```

---

# 24. Eksperimen Shape

Gunakan jumlah particle sama.

Bandingkan:

```text
Sphere
Cone
Box
```

Jelaskan bagaimana emitter shape mengubah pembacaan effect.

---

# 25. Bagian D — Velocity over Lifetime

Aktifkan:

```text
Velocity over Lifetime
```

Gunakan untuk memberi kecepatan tambahan selama particle hidup.

Contoh:

```text
Y positif
→ particle terus naik
```

---

# 26. Velocity dan dt

Secara konseptual:

```text
Position(t+dt)
=
Position(t)
+
Velocity × dt
```

Unity mengelola simulasi particle, tetapi konsep fisik dasarnya sama.

---

# 27. Bagian E — Size over Lifetime

Aktifkan:

```text
Size over Lifetime
```

Untuk burst:

```text
small
→ grow
→ shrink
```

Buat curve:

```text
0 → 1 → 0
```

atau variasi yang sesuai.

---

# 28. Size Curve

Untuk spark, ukuran dapat:

```text
besar di awal
↓
mengecil
```

Untuk smoke:

```text
kecil
↓
membesar
↓
fade
```

Size harus mengikuti fungsi visual effect.

---

# 29. Bagian F — Color over Lifetime

Aktifkan:

```text
Color over Lifetime
```

Buat gradient.

Contoh energy:

```text
bright cyan
↓
blue
↓
transparent
```

Contoh spark:

```text
yellow
↓
orange
↓
red
↓
transparent
```

---

# 30. Alpha Fade

Pastikan alpha di akhir mendekati:

```text
0
```

agar particle menghilang secara halus bila material menggunakan blending yang sesuai.

---

# 31. Timing Visual

Gabungkan:

```text
Size
+
Color
+
Alpha
```

untuk membangun:

```text
Anticipation
↓
Peak
↓
Decay
```

Impact effect harus cepat dibaca.

---

# 32. Bagian G — Noise

Aktifkan:

```text
Noise
```

Gunakan strength rendah terlebih dahulu.

Noise menambahkan variasi/turbulence pada trajectory.

Cocok untuk:

- smoke;
- energy;
- dust;
- magical particles.

---

# 33. Noise Strength

Bandingkan:

```text
0
small
large
```

Noise terlalu besar dapat membuat gerak tidak terkontrol.

Gunakan hanya jika effect memerlukan ketidakteraturan.

---

# 34. Bagian H — Collision

Aktifkan:

```text
Collision
```

Pada Particle System Unity, Collision dapat dikonfigurasi terhadap world/planes sesuai kebutuhan.

Untuk latihan sederhana gunakan ground collider.

---

# 35. Menyiapkan Ground Collider

Pastikan Ground memiliki Collider.

Contoh:

```text
Box Collider
```

atau collider sesuai geometry.

Kemudian uji particle jatuh/bergerak menuju Ground.

---

# 36. Collision Cost

Collision menambah pekerjaan simulasi.

Bandingkan:

```text
Collision OFF
vs
Collision ON
```

Gunakan collision hanya pada effect yang benar-benar membutuhkan interaksi.

---

# 37. Bagian I — Trails

Aktifkan:

```text
Trails
```

Trail cocok untuk particle bergerak cepat.

Pastikan Particle System Renderer/material mendukung tampilan trail.

---

# 38. Trail Lifetime

Atur trail lifetime moderat.

Eksperimen:

```text
pendek
sedang
panjang
```

Trail panjang:

- lebih terlihat;
- dapat menambah clutter;
- dapat meningkatkan overdraw.

---

# 39. Bagian J — Particle Renderer

Pada bagian Renderer periksa:

```text
Render Mode
Material
Sort Mode
Alignment
```

Untuk P15 fokus pada:

```text
Billboard
+
Material
```

---

# 40. Additive vs Alpha Blend

## Additive

Cocok untuk:

```text
spark
energy
glow
bright fire-like core
```

## Alpha Blend

Cocok untuk:

```text
smoke
dust
fog
```

Perbedaan blending sangat berpengaruh pada tampilan dan overdraw.

---

# 41. Membuat Material Particle

Gunakan shader/material URP yang sesuai untuk particle pada project Unity 6.

Jika menggunakan material dari Shader Graph P14, pastikan shader mendukung penggunaan pada particle renderer.

Untuk baseline sederhana, gunakan material particle URP yang tersedia pada project.

---

# 42. Bagian K — Impact/Burst VFX

Buat prefab final:

```text
VFX_Impact
```

Layer yang disarankan:

```text
ImpactRoot
├── CoreFlash
├── Sparks
└── OptionalSmoke
```

Tidak wajib menggunakan tiga layer. Dua layer yang jelas lebih baik daripada lima layer tanpa fungsi.

---

# 43. CoreFlash

Particle System:

```text
Looping = Off
Burst = rendah
Lifetime = pendek
Size = cepat membesar lalu hilang
Color = terang → transparent
```

Fungsi:

```text
menandai saat impact
```

---

# 44. Sparks

Particle:

```text
Burst
Lifetime lebih panjang dari flash
Speed lebih tinggi
Size kecil
Color panas/energy
Gravity atau velocity sesuai efek
```

Trail boleh digunakan bila bermanfaat.

---

# 45. Optional Smoke

Gunakan:

```text
Alpha Blend
Longer Lifetime
Low Speed
Size Grow
Color Fade
Noise
```

Smoke bukan syarat jika effect menjadi terlalu kompleks.

---

# 46. Layering

Prinsip layering:

```text
Primary
→ impact flash

Secondary
→ sparks

Ambient/decay
→ smoke
```

Setiap layer harus mempunyai peran.

---

# 47. Membuat Prefab Impact

Drag root:

```text
ImpactRoot
```

ke:

```text
Assets/VFX/Prefabs/
```

Nama:

```text
PF_VFX_Impact
```

---

# 48. Bagian L — Ambient/Continuous VFX

Buat:

```text
VFX_Ambient
```

Contoh pilihan:

- floating dust;
- magic particles;
- ambient sparks;
- steam;
- energy motes.

---

# 49. Continuous Emission

Untuk Ambient:

```text
Looping = On
Rate over Time = moderat
Lifetime = relatif panjang
```

Target:

```text
tidak terlalu padat
```

Ambient effect tidak boleh mengalahkan Hero/primary effect.

---

# 50. Ambient Shape

Gunakan:

```text
Box
```

untuk area spawn atau:

```text
Sphere
```

untuk volume lokal.

Sesuaikan dengan environment.

---

# 51. Ambient Motion

Gunakan kombinasi ringan:

```text
Start Speed
+
Velocity over Lifetime
+
Noise
```

Tujuan:

```text
gerak lembut
```

bukan gerakan chaotic.

---

# 52. Ambient Color

Gunakan Color over Lifetime dengan alpha rendah.

Ambient particle biasanya lebih subtle daripada impact.

---

# 53. Prefab Ambient

Simpan:

```text
PF_VFX_Ambient
```

---

# 54. Bagian M — Integrasi Shader Graph P14

Pilih salah satu shader P14:

```text
SG_EmissionPulse
SG_Dissolve
SG_AnimatedSurface
```

Gunakan dalam scene P15.

Contoh:

```text
particle effect
+
emissive panel
+
animated surface
```

---

# 55. Integrasi Emission

Gunakan Emission Pulse pada source object effect.

Contoh:

```text
Energy Core
→ SG_EmissionPulse

Burst
→ Particle System
```

Ini menunjukkan kombinasi:

```text
Shader Graph
+
Particle System
```

---

# 56. Integrasi Animated Surface

Gunakan Animated Surface pada:

- portal;
- energy plane;
- floor panel;
- effect source.

Pastikan shader tidak digunakan hanya untuk membuat graph terlihat kompleks.

---

# 57. Integrasi Dissolve

Gunakan dissolve pada satu prop/target VFX jika sesuai.

Contoh:

```text
object disappears
+
particle burst
```

Animation trigger boleh manual untuk P15.

---

# 58. Bagian N — VFX Graph sebagai Pengantar

VFX Graph memiliki konsep:

```text
Spawn
↓
Initialize
↓
Update
↓
Output
```

VFX Graph cocok untuk efek GPU-oriented dan particle count besar.

Pada P15:

```text
VFX Graph = pengantar
Particle System = implementasi utama
```

---

# 59. Mengapa Tidak Wajib VFX Graph?

Tujuan P15 adalah memahami:

- emitter;
- lifetime;
- velocity;
- color;
- noise;
- collision;
- trail;
- profiling;
- optimization.

Particle System cukup untuk membangun konsep tersebut secara jelas.

---

# 60. Bagian O — Overdraw

Particle sering menggunakan transparency.

Jika banyak transparent particle tumpang tindih:

```text
Particle A
+
Particle B
+
Particle C
+
Particle D
↓
pixel yang sama diproses berkali-kali
```

Ini disebut overdraw.

---

# 61. Gejala Overdraw

Gejala umum:

- smoke tebal memenuhi layar;
- banyak billboard besar;
- trail panjang;
- particle transparan bertumpuk;
- performance turun ketika Camera dekat effect.

---

# 62. Eksperimen Overdraw

Buat dua versi Ambient VFX:

```text
A
20 particle aktif

B
200 particle aktif
```

Dekatkan Camera.

Bandingkan:

- visual density;
- frame time/profiler;
- readability.

Jangan menyimpulkan hanya dari FPS sesaat; gunakan profiling.

---

# 63. Mengurangi Overdraw

Cara umum:

```text
fewer particles
smaller screen size
shorter lifetime
smaller alpha layers
shorter trails
avoid unnecessary full-screen transparent layers
```

Target:

> mengurangi overlap yang tidak memberikan nilai visual.

---

# 64. Bagian P — Frame Time

Formula:

```text
Frame Time = 1000 / FPS
```

Contoh:

```text
30 FPS
≈ 33.3 ms

60 FPS
≈ 16.7 ms

120 FPS
≈ 8.3 ms
```

---

# 65. Frame Budget 60 FPS

Target:

```text
≈ 16.7 ms/frame
```

Semua subsistem berbagi waktu:

```text
Scripts
Physics
Animation
Rendering
UI
Audio
VFX
```

---

# 66. FPS vs Frame Time

Untuk optimization, frame time lebih informatif daripada hanya FPS.

Contoh:

```text
60 FPS → 16.7 ms
50 FPS → 20 ms
30 FPS → 33.3 ms
```

Perubahan beberapa millisecond dapat signifikan.

---

# 67. CPU vs GPU — Konsep

CPU bottleneck dapat berasal dari:

```text
scripts
physics
too many objects
draw submission
```

GPU bottleneck dapat berasal dari:

```text
high resolution
complex fragment shader
overdraw
shadows
post-processing
```

P15 tidak membutuhkan diagnosis hardware tingkat lanjut, tetapi mahasiswa harus mampu membedakan sumber masalah secara umum.

---

# 68. Bagian Q — Unity Profiler

Buka:

```text
Window
→ Analysis
→ Profiler
```

Pada Unity 6, Profiler digunakan untuk melihat subsistem seperti:

```text
CPU Usage
Rendering
Memory
Physics
```

---

# 69. Profiling Workflow

Gunakan urutan:

```text
1. Play representative scene
2. Warm up
3. Capture baseline
4. Record metrics
5. Change one variable
6. Capture again
7. Compare
```

---

# 70. Jangan Profiling di Scene Kosong

Baseline harus mencerminkan kondisi scene yang benar-benar akan diuji.

Pastikan:

- Camera menghadap VFX;
- particle aktif;
- scene P13/P14 aktif;
- post processing relevan;
- Hero visible.

---

# 71. Warm-Up

Sebelum mencatat:

```text
jalankan scene beberapa saat
```

agar:

- particle mencapai kondisi steady;
- shader/resource sudah digunakan;
- hasil lebih representatif.

---

# 72. Metric Dasar

Catat minimal:

```text
CPU frame time / CPU Usage observation
Rendering/Batches
SetPass atau state-change metric jika tersedia
Triangles
Vertices
FPS/frame time observation
```

Nama statistik dapat berbeda tergantung view/tool Unity yang digunakan.

---

# 73. Rendering Statistics

Unity menyediakan statistik rendering seperti:

```text
Batches
Triangles
Vertices
SetPass Calls / related state changes
```

Statistik ini membantu memahami workload rendering.

---

# 74. Baseline Table

Isi:

| Metric | Baseline |
|---|---:|
| Frame Time | |
| Batches | |
| Triangles | |
| Vertices | |
| Particle Count / estimate | |
| Realtime Shadow Lights | |
| Texture Memory observation | |
| Notes | |

---

# 75. Screenshot Baseline

Ambil:

```text
Profiler baseline
Game View baseline
Rendering stats baseline
```

Nama:

```text
baseline_profiler.png
baseline_scene.png
```

---

# 76. Bagian R — Triangle Count

Triangle count mempengaruhi geometry workload.

Eksperimen dengan asset:

```text
High Detail
vs
Low Detail
```

atau gunakan LOD pada bagian berikut.

---

# 77. Triangle Count Bukan Satu-Satunya Faktor

Scene dengan sedikit triangle masih bisa lambat jika:

```text
shader berat
overdraw tinggi
banyak shadow light
post-processing berat
```

Optimization harus berdasarkan pengukuran.

---

# 78. Bagian S — Draw Calls dan Batches

Banyak object/material dapat meningkatkan jumlah draw submission.

Contoh:

```text
100 object
+
100 material berbeda
```

umumnya lebih sulit diproses efisien dibanding banyak object yang dapat berbagi state/material.

---

# 79. Eksperimen Material Count

Buat dua kondisi dengan mesh berulang:

```text
A
semua instance memakai material sama

B
setiap beberapa instance memakai material berbeda
```

Bandingkan batches/draw-related statistics.

---

# 80. Batching

Batching mencoba membuat submission lebih efisien.

Unity mempunyai mekanisme yang dapat berbeda berdasarkan pipeline, object, shader, dan project settings.

P15 fokus pada konsep:

```text
similar rendering state
→ peluang submission lebih efisien
```

---

# 81. GPU Instancing

GPU Instancing cocok untuk:

```text
many objects
same mesh
same material
```

Contoh:

- rocks;
- crates;
- grass-like props;
- repeated modules.

---

# 82. Mengaktifkan GPU Instancing

Pilih material yang digunakan object berulang.

Jika shader/material yang digunakan mendukung instancing, aktifkan:

```text
Enable GPU Instancing
```

pada material/setting yang tersedia.

Pada Shader Graph/material custom, dukungan bergantung shader/pipeline configuration.

---

# 83. Eksperimen Instancing

Gunakan minimal:

```text
30–100 repeated objects
```

sesuai kemampuan perangkat.

Bandingkan:

```text
Instancing OFF
vs
Instancing ON
```

Catat rendering statistics.

---

# 84. Jangan Memaksa Instancing

GPU Instancing tidak selalu memberi keuntungan besar untuk:

- object sedikit;
- mesh/material berbeda;
- object dengan kebutuhan rendering berbeda.

Gunakan pada kasus yang tepat.

---

# 85. Bagian T — LOD

LOD:

```text
Level of Detail
```

Object jauh tidak memerlukan detail geometry yang sama dengan object dekat.

---

# 86. Menyiapkan LOD Mesh

Siapkan:

```text
LOD0
→ high detail

LOD1
→ medium detail

LOD2
→ low detail
```

Boleh menggunakan asset sederhana yang telah disediakan untuk praktikum.

Jangan menghabiskan waktu membuat LOD artistik kompleks di P15.

---

# 87. Membuat LOD Group

Buat parent:

```text
LOD_Test
```

Tambahkan component:

```text
LOD Group
```

Masukkan renderer:

```text
LOD0
LOD1
LOD2
```

ke level masing-masing.

---

# 88. Mengatur Transition

LOD Group menggunakan screen-relative transition.

Atur sehingga:

```text
Camera dekat
→ LOD0

sedang
→ LOD1

jauh
→ LOD2
```

Gunakan preview LOD pada Scene View.

---

# 89. Eksperimen LOD

Gerakkan Camera.

Catat:

- kapan LOD berubah;
- apakah popping terlalu terlihat;
- pengaruh triangle count.

---

# 90. LOD Optimization

Target:

```text
kurangi geometry pada object jauh
```

tanpa merusak silhouette secara mencolok.

---

# 91. Bagian U — Occlusion Culling

Occlusion Culling menghindari rendering object yang tertutup object lain.

Contoh:

```text
Camera
↓
Wall
↓
Hidden Props
```

---

# 92. Static Occlusion Workflow

Unity menyediakan workflow occlusion untuk scene/environment sesuai konfigurasi project.

Untuk praktikum, gunakan area sederhana:

```text
Room A
Wall
Room B
```

di mana object Room B tertutup oleh wall dari camera tertentu.

---

# 93. Menyiapkan Scene Occlusion

Gunakan object environment yang cocok sebagai:

- occluder;
- occludee.

Tandai/setup object sesuai workflow Occlusion Culling Unity 6 yang tersedia.

---

# 94. Bake Occlusion Data

Buka window:

```text
Window
→ Rendering
→ Occlusion Culling
```

atau menu ekuivalen pada Unity 6.

Lakukan bake dengan scene uji.

---

# 95. Visualisasi Occlusion

Gunakan visualization mode/window untuk melihat object yang dianggap visible/culled.

Gerakkan Camera.

Amati object di balik wall.

---

# 96. Catatan GPU Occlusion Unity 6

Unity 6 URP juga mempunyai workflow GPU occlusion pada konfigurasi tertentu.

Namun untuk praktikum fundamental P15:

```text
tujuan utama = memahami prinsip occlusion
```

Gunakan workflow yang tersedia/stabil pada project laboratorium.

Jangan mengubah seluruh renderer architecture hanya demi satu eksperimen.

---

# 97. Bagian V — Texture Resolution

Texture resolution memengaruhi:

```text
memory
bandwidth
loading
visual detail
```

Tidak semua prop membutuhkan 4K texture.

---

# 98. Eksperimen Texture Max Size

Pilih texture prop sekunder.

Pada Texture Importer, bandingkan:

```text
Max Size tinggi
vs
Max Size lebih rendah
```

Contoh:

```text
2048
vs
1024
```

atau ukuran lain yang sesuai source texture.

---

# 99. Jangan Menurunkan Semua Texture

Prioritaskan:

```text
Hero
→ detail tinggi

Secondary
→ moderate

Distant/Small
→ lebih rendah
```

Optimization harus sesuai screen importance.

---

# 100. Bagian W — Mipmaps

Mipmaps adalah versi texture beresolusi lebih kecil untuk sampling pada jarak.

Pada Texture Import Settings, periksa:

```text
Generate Mip Maps
```

untuk texture 3D surface yang sesuai.

---

# 101. Eksperimen Mipmaps

Pada texture environment:

```text
Mipmaps ON
vs
Mipmaps OFF
```

amati object jauh.

Catat:

- aliasing;
- filtering;
- kestabilan visual.

---

# 102. Kapan Mipmaps Tidak Selalu Diperlukan?

Contoh texture tertentu:

- UI;
- texture yang selalu tampil 1:1;
- beberapa special-purpose texture.

P15 fokus pada texture surface 3D.

---

# 103. Bagian X — Shader Complexity

Gunakan shader P14.

Buat:

```text
Version A
→ full visual

Version B
→ simplified
```

Misalnya kurangi:

- satu Simple Noise;
- satu Sample Texture 2D;
- unnecessary scrolling layer;
- unnecessary transparency.

---

# 104. Eksperimen Shader

Terapkan shader pada object layar cukup besar.

Bandingkan:

```text
Full
vs
Simplified
```

Gunakan Profiler/statistik bila perbedaannya dapat diamati.

Jangan mengharapkan setiap graph kecil menghasilkan perbedaan besar.

---

# 105. Fragment Cost

Shader fragment pada object besar dapat lebih terasa karena:

```text
lebih banyak pixel/fragment
```

dibanding object kecil.

Uji dengan object memenuhi layar dan object jauh.

---

# 106. Bagian Y — Shadow Cost

Shadow cost dapat meningkat dengan:

```text
more shadow-casting lights
higher resolution
larger shadow distance
more casters
additional cascades/settings
```

---

# 107. Eksperimen Shadow

Bandingkan:

```text
A
semua local lights cast shadow

B
hanya main/focal lights cast shadow
```

Amati:

- visual;
- frame/statistics;
- readability.

---

# 108. Shadow Priority

Pertahankan shadow pada:

```text
main light
important local light
hero interaction
```

Matikan pada light yang tidak membutuhkan shadow jika tidak memberi kontribusi visual berarti.

---

# 109. Bagian Z — Optimization Plan

Sebelum mengubah scene, tulis minimal empat action.

Contoh:

```text
1. Particle count reduction
2. Reduce trail lifetime
3. GPU instancing repeated props
4. LOD on repeated asset
5. Texture 2048 → 1024 on secondary props
6. Disable unnecessary local-light shadows
7. Simplify Shader Graph
8. Occlusion culling
```

---

# 110. Aturan Optimization Action

Setiap action harus mempunyai:

```text
Problem
↓
Hypothesis
↓
Change
↓
Measurement
↓
Visual Evaluation
```

---

# 111. Optimization Action 1 — Particle

Contoh:

```text
Problem:
Ambient particle terlalu padat

Change:
Rate 100 → 35
Lifetime 6 → 4

Expected:
active particle / overdraw turun
```

Measure kembali.

---

# 112. Optimization Action 2 — Trail

Contoh:

```text
Trail Lifetime
1.5 → 0.4
```

Evaluasi apakah readability tetap baik.

---

# 113. Optimization Action 3 — Instancing

Gunakan repeated prop.

Aktifkan instancing bila sesuai.

Catat perubahan batches/statistics.

---

# 114. Optimization Action 4 — LOD

Pasang LOD pada asset berulang.

Bandingkan triangle count saat Camera dekat dan jauh.

---

# 115. Optimization Action 5 — Texture

Turunkan texture secondary prop.

Bandingkan:

```text
visual at gameplay distance
vs
memory/import size implication
```

---

# 116. Optimization Action 6 — Shader

Gunakan simplified Shader Graph.

Bandingkan:

- visual;
- complexity;
- profiler jika terukur.

---

# 117. Optimization Action 7 — Shadow

Matikan shadow pada light sekunder yang tidak penting.

Bandingkan hasil.

---

# 118. Optimization Action 8 — Occlusion

Gunakan occlusion pada environment yang mempunyai banyak object tertutup.

Amati visibility/culling.

---

# 119. Re-Measure

Setelah empat atau lebih optimization actions:

```text
Play representative scene
↓
warm up
↓
capture metrics
```

Gunakan kondisi Camera sedekat mungkin dengan baseline.

---

# 120. After Table

| Metric | Baseline | Optimized | Difference |
|---|---:|---:|---:|
| Frame Time | | | |
| Batches | | | |
| Triangles | | | |
| Vertices | | | |
| Particle Density/Count | | | |
| Shadow Lights | | | |
| Notes | | | |

---

# 121. Visual Comparison

Ambil:

```text
before.png
after.png
```

Gunakan Camera yang sama.

Tujuan:

> menunjukkan bahwa scene tetap mempertahankan tujuan visual.

---

# 122. Optimization Success

Optimasi dianggap baik jika:

```text
performance/workload membaik
+
visual goal tetap tercapai
```

Bukan jika:

```text
scene kosong
+
performance cepat
```

---

# 123. Milestone 1 — Project Ready

```text
[ ] Unity 6+
[ ] URP
[ ] P14 scene
[ ] shader P14
[ ] profiler available
```

---

# 124. Milestone 2 — Particle Fundamentals

```text
[ ] Main
[ ] Emission
[ ] Shape
[ ] Lifetime
[ ] Speed
[ ] Size
[ ] Color
```

---

# 125. Milestone 3 — Impact VFX

```text
[ ] burst
[ ] timing
[ ] primary layer
[ ] secondary layer
[ ] prefab
```

---

# 126. Milestone 4 — Ambient VFX

```text
[ ] looping
[ ] controlled rate
[ ] subtle movement
[ ] noise
[ ] prefab
```

---

# 127. Milestone 5 — Advanced Particle Modules

Mahasiswa telah menguji:

```text
Noise
Collision
Trail
```

Tidak semuanya wajib dipertahankan pada final effect.

---

# 128. Milestone 6 — Shader Integration

Minimal satu shader P14 terintegrasi.

---

# 129. Milestone 7 — Baseline

```text
[ ] representative camera
[ ] warm-up
[ ] profiler screenshot
[ ] rendering stats
[ ] baseline table
```

---

# 130. Milestone 8 — Geometry/Draw Study

```text
[ ] triangle count
[ ] material/batch study
[ ] instancing study
```

---

# 131. Milestone 9 — LOD/Occlusion

```text
[ ] LOD Group
[ ] LOD transition
[ ] occlusion concept/test
```

---

# 132. Milestone 10 — Texture/Shader/Shadow Study

```text
[ ] texture resolution
[ ] mipmaps
[ ] shader complexity
[ ] shadow cost
```

---

# 133. Milestone 11 — Optimization Actions

Minimal empat perubahan terukur dilakukan.

---

# 134. Milestone 12 — Before/After

```text
[ ] baseline
[ ] optimized
[ ] visual comparison
[ ] metric comparison
[ ] technical conclusion
```

---

# 135. Eksperimen Wajib 1 — Emission Rate

Bandingkan:

```text
10
50
100 particles/sec
```

Catat density dan cost secara observasional.

---

# 136. Eksperimen Wajib 2 — Lifetime

Gunakan emission rate tetap.

Bandingkan lifetime pendek vs panjang.

Jelaskan pengaruh terhadap active particle count.

---

# 137. Eksperimen Wajib 3 — Burst Count

Bandingkan minimal tiga burst count.

Pilih jumlah minimum yang masih memberi impact visual.

---

# 138. Eksperimen Wajib 4 — Size over Lifetime

Bandingkan:

```text
constant
vs
grow/shrink
```

Jelaskan readability.

---

# 139. Eksperimen Wajib 5 — Color over Lifetime

Buat gradient + alpha fade.

Bandingkan dengan warna constant.

---

# 140. Eksperimen Wajib 6 — Noise

Bandingkan OFF/ON.

Gunakan strength moderat.

---

# 141. Eksperimen Wajib 7 — Collision

Bandingkan OFF/ON.

Jelaskan fungsi dan tambahan simulation work.

---

# 142. Eksperimen Wajib 8 — Trail

Bandingkan trail pendek dan panjang.

Jelaskan clutter dan overdraw.

---

# 143. Eksperimen Wajib 9 — Particle Overdraw

Bandingkan particle density rendah/tinggi dengan Camera dekat.

---

# 144. Eksperimen Wajib 10 — Baseline Profiling

Catat metric sebelum optimization.

---

# 145. Eksperimen Wajib 11 — Material/Batch

Repeated mesh dengan material sama vs lebih banyak material.

---

# 146. Eksperimen Wajib 12 — GPU Instancing

Bandingkan instancing OFF/ON pada repeated compatible objects.

---

# 147. Eksperimen Wajib 13 — LOD

Bandingkan triangle count/visual dekat vs jauh.

---

# 148. Eksperimen Wajib 14 — Occlusion

Amati object visible vs hidden di balik occluder.

---

# 149. Eksperimen Wajib 15 — Texture Resolution

Bandingkan Max Size tinggi vs lebih rendah pada secondary prop.

---

# 150. Eksperimen Wajib 16 — Mipmap

Bandingkan ON/OFF pada object jauh.

---

# 151. Eksperimen Wajib 17 — Shader Complexity

Bandingkan full vs simplified Shader Graph.

---

# 152. Eksperimen Wajib 18 — Shadow Cost

Bandingkan banyak shadow lights vs selected shadow lights.

---

# 153. Eksperimen Wajib 19 — After Profiling

Capture metric sesudah optimization.

---

# 154. Eksperimen Wajib 20 — Before/After Visual

Gunakan Camera identik.

Pastikan visual final masih memenuhi tujuan effect.

---

# 155. Tugas Utama

Buat:

# VFX + Graphics Optimization Scene

Requirement:

- [ ] Unity 6+;
- [ ] URP;
- [ ] scene P14;
- [ ] Impact/Burst VFX;
- [ ] Ambient/Continuous VFX;
- [ ] Particle System Main;
- [ ] Emission;
- [ ] Burst;
- [ ] Shape;
- [ ] Lifetime;
- [ ] Speed/Velocity;
- [ ] Size over Lifetime;
- [ ] Color over Lifetime;
- [ ] Noise diuji;
- [ ] Collision diuji;
- [ ] Trail diuji;
- [ ] shader P14 terintegrasi;
- [ ] baseline Profiler;
- [ ] rendering stats;
- [ ] triangle study;
- [ ] draw/batch study;
- [ ] GPU Instancing study;
- [ ] LOD;
- [ ] Occlusion study;
- [ ] texture resolution study;
- [ ] mipmap study;
- [ ] shader complexity study;
- [ ] shadow study;
- [ ] minimal 4 optimization actions;
- [ ] profiling after optimization;
- [ ] before/after table;
- [ ] visual comparison;
- [ ] minimal 2 challenge;
- [ ] README;
- [ ] screenshot lengkap.

---

# 156. Challenge A — Multi-Layer Explosion

Buat:

```text
Flash
+
Core Burst
+
Spark
+
Smoke
```

Setiap layer harus mempunyai fungsi jelas.

Lakukan optimization setelah effect jadi.

---

# 157. Challenge B — Projectile Trail

Buat particle/trail untuk projectile atau moving energy.

Atur trail agar tidak terlalu panjang.

---

# 158. Challenge C — Rain + Collision

Buat rain dengan:

```text
Box Shape
+
downward velocity
+
Collision
```

Bandingkan collision ON/OFF.

---

# 159. Challenge D — Magic Field

Gunakan:

```text
Ambient Particle
+
Noise
+
SG_AnimatedSurface
```

untuk membuat area magical/energy.

---

# 160. Challenge E — Dissolve + Burst

Saat object dissolve, tampilkan particle burst.

Trigger boleh manual, Animator, atau script sederhana.

---

# 161. Challenge F — Advanced LOD Study

Gunakan tiga LOD mesh nyata dengan perbedaan triangle yang jelas.

Dokumentasikan popping dan transition.

---

# 162. Challenge G — Occlusion Test Room

Buat koridor/ruangan sehingga banyak object benar-benar tertutup wall.

Tunjukkan efek occlusion secara visual.

---

# 163. Challenge H — Optimization Scorecard

Buat tabel untuk setiap action:

```text
Action
Visual Impact
Performance Impact
Keep / Revert
```

Pilih hanya optimasi yang masuk akal.

---

# 164. Challenge I — Texture Budget

Kelompokkan texture:

```text
Hero
Secondary
Background
```

Tentukan Max Size yang berbeda berdasarkan importance.

---

# 165. Challenge J — Shader Simplification

Ambil shader P14 paling kompleks.

Buat versi:

```text
Full
Medium
Simple
```

Bandingkan visual dan profiler/statistics.

---

# 166. Debugging — Particle Tidak Muncul

Periksa:

```text
GameObject active?
Particle System playing?
Emission enabled?
Start Lifetime > 0?
Start Size > 0?
Material valid?
Camera melihat emitter?
Max Particles > 0?
```

---

# 167. Debugging — Burst Tidak Terlihat

Periksa:

```text
Looping?
Burst Time?
Count?
Duration?
Start Lifetime?
Start Speed?
```

Gunakan Scene View particle preview untuk diagnosis.

---

# 168. Debugging — Particle Terlalu Padat

Kurangi:

```text
Rate
Burst Count
Lifetime
Size
```

Evaluasi satu variabel sekaligus.

---

# 169. Debugging — Color Fade Tidak Bekerja

Periksa:

```text
Color over Lifetime enabled?
gradient alpha?
material blending mendukung alpha?
```

---

# 170. Debugging — Noise Terlalu Chaotic

Turunkan:

```text
Strength
Frequency
```

atau sesuaikan scroll/quality parameter yang tersedia.

---

# 171. Debugging — Collision Tidak Bekerja

Periksa:

```text
Collision module enabled?
Type/layer config?
ground collider?
particle benar-benar mencapai collider?
```

---

# 172. Debugging — Trail Tidak Terlihat

Periksa:

```text
Trails enabled?
Renderer trail material?
Trail Lifetime?
particle bergerak?
```

---

# 173. Debugging — Profiler Sangat Fluktuatif

Pastikan:

```text
same camera
same scene
same effect state
warm-up
capture several frames
```

Jangan membandingkan satu frame acak.

---

# 174. Debugging — Batches Tidak Berubah

Instancing/batching hanya efektif jika kondisi kompatibel.

Periksa:

- mesh sama;
- material sama;
- shader mendukung;
- instance count cukup;
- renderer/pipeline settings.

---

# 175. Debugging — LOD Tidak Berpindah

Periksa:

```text
LOD Group component
Renderer assignment
threshold
Camera distance/screen size
```

Gunakan Scene View LOD preview.

---

# 176. Debugging — Occlusion Tidak Berfungsi

Periksa:

- data sudah dibake jika workflow bake digunakan;
- Camera sesuai;
- occluder cukup besar;
- object termasuk setup occlusion;
- visualization mode.

---

# 177. Debugging — Texture Terlihat Buram

Jika Max Size diturunkan terlalu jauh:

```text
visual detail hilang
```

Naikkan satu tingkat.

Optimization bukan selalu memilih resolusi terendah.

---

# 178. Debugging — Mipmap Membuat Detail Berubah

Mipmaps memang memilih level lebih kecil saat texture jauh.

Periksa filtering dan jarak.

Untuk surface 3D, ini sering merupakan perilaku yang diinginkan.

---

# 179. Debugging — Shader Magenta

Periksa:

```text
shader compile error
URP compatibility
material shader
Shader Graph error
```

Buka Console.

---

# 180. Debugging — Shadow Optimization Merusak Visual

Jika mematikan shadow membuat object penting melayang:

```text
re-enable shadow untuk light/object penting
```

Cari target lain untuk optimization.

---

# 181. Test Case

| No. | Pengujian | Hasil yang Diharapkan |
|---:|---|---|
| 1 | Unity | 6+ |
| 2 | URP | aktif |
| 3 | Impact VFX | burst terlihat |
| 4 | Ambient VFX | continuous tetapi subtle |
| 5 | Lifetime | particle berakhir |
| 6 | Shape | spawn sesuai bentuk |
| 7 | Velocity | arah/kecepatan berubah |
| 8 | Size over Lifetime | curve terlihat |
| 9 | Color over Lifetime | gradient/fade terlihat |
| 10 | Noise | trajectory bervariasi |
| 11 | Collision | interaction terlihat |
| 12 | Trail | jejak terlihat |
| 13 | Shader P14 | terintegrasi |
| 14 | Profiler | data terekam |
| 15 | Rendering stats | batches/tris/verts terbaca |
| 16 | Material study | batches dapat dibandingkan |
| 17 | Instancing | diuji |
| 18 | LOD | berpindah sesuai jarak |
| 19 | Occlusion | hidden objects dapat dikaji |
| 20 | Texture size | kualitas dapat dibandingkan |
| 21 | Mipmap | distant filtering dapat dikaji |
| 22 | Shader simplification | full/simple dibandingkan |
| 23 | Shadow study | quality/cost dibandingkan |
| 24 | Optimization actions | minimal 4 |
| 25 | After profile | tersedia |
| 26 | Before/After | kondisi terbandingkan |
| 27 | Visual quality | tujuan utama masih terjaga |
| 28 | Console | tidak ada critical error |

---

# 182. Pertanyaan Pemahaman

1. Apa fungsi VFX?
2. Mengapa VFX bukan hanya dekorasi?
3. Apa itu Particle System?
4. Apa itu emitter?
5. Apa itu emission rate?
6. Apa itu burst?
7. Kapan burst lebih tepat daripada rate over time?
8. Apa itu lifetime?
9. Apa hubungan lifetime dengan jumlah particle aktif?
10. Apa itu velocity?
11. Apa fungsi Shape Module?
12. Apa perbedaan Sphere dan Cone emitter?
13. Apa fungsi Size over Lifetime?
14. Apa fungsi Color over Lifetime?
15. Mengapa alpha fade penting?
16. Apa fungsi Noise?
17. Apa fungsi Collision?
18. Apa biaya tambahan Collision secara umum?
19. Apa fungsi Trail?
20. Mengapa trail panjang dapat meningkatkan clutter?
21. Apa perbedaan Additive dan Alpha Blend?
22. Apa itu overdraw?
23. Mengapa particle transparan rawan overdraw?
24. Apa itu VFX Graph?
25. Apa perbedaan umum Particle System dan VFX Graph?
26. Mengapa P15 menggunakan Particle System sebagai tugas utama?
27. Apa hubungan Shader Graph dan VFX?
28. Apa itu frame time?
29. Berapa frame budget untuk 60 FPS?
30. Mengapa frame time lebih berguna daripada hanya FPS?
31. Apa perbedaan bottleneck CPU dan GPU secara umum?
32. Apa fungsi Unity Profiler?
33. Apa itu baseline?
34. Mengapa scene harus representative saat profiling?
35. Mengapa perlu warm-up?
36. Apa itu triangle count?
37. Mengapa triangle count bukan satu-satunya faktor?
38. Apa itu draw call?
39. Apa itu batch?
40. Apa tujuan batching?
41. Apa itu GPU Instancing?
42. Kapan GPU Instancing cocok?
43. Apa itu LOD?
44. Mengapa object jauh dapat memakai mesh lebih sederhana?
45. Apa itu Occlusion Culling?
46. Apa perbedaan frustum visibility dan occlusion secara konsep?
47. Mengapa texture resolution memengaruhi resource?
48. Apa fungsi mipmaps?
49. Apa itu shader complexity?
50. Mengapa fragment shader pada area layar besar dapat mahal?
51. Apa faktor shadow cost?
52. Mengapa tidak semua light perlu shadow?
53. Apa arti optimize one variable?
54. Mengapa harus re-measure?
55. Apa arti preserve visual quality?
56. Mengapa optimization tidak berarti menurunkan semua setting?
57. Apa fungsi before/after comparison?
58. Apa itu performance budget?
59. Apa hubungan VFX dengan overdraw?
60. Jelaskan workflow P15 dari VFX sampai optimization.

---

# 183. Pertanyaan Analisis

## A — Particle

Dua effect menggunakan 50 particle/sec. Effect A lifetime 1 detik, effect B lifetime 10 detik.

Effect mana yang cenderung mempunyai lebih banyak particle aktif? Mengapa?

## B — Overdraw

Mengapa 20 particle billboard sangat besar dapat lebih berat daripada 100 particle kecil pada kondisi tertentu?

## C — Burst

Mengapa jumlah burst terbesar belum tentu menghasilkan impact terbaik?

## D — Collision

Kapan Collision layak digunakan meskipun menambah cost?

## E — Draw Call

Mengapa banyak material berbeda pada repeated object dapat meningkatkan rendering overhead?

## F — Instancing

Mengapa GPU Instancing cocok untuk ratusan crate yang menggunakan mesh/material sama?

## G — LOD

Mengapa menggunakan LOD0 untuk object sangat jauh merupakan pekerjaan yang tidak perlu?

## H — Texture

Mengapa 4K texture pada prop kecil di background dapat dianggap pemborosan?

## I — Shader

Mengapa shader yang sama dapat lebih mahal ketika object memenuhi layar?

## J — Optimization

Sebuah optimasi meningkatkan frame time tetapi membuat effect utama hampir tidak terlihat. Apakah optimasi tersebut berhasil? Jelaskan.

---

# 184. Dokumentasi Wajib

Ambil screenshot:

```text
01 P14 Baseline Scene
02 Particle Main Module
03 Emission / Burst
04 Shape Study
05 Size over Lifetime
06 Color over Lifetime
07 Noise
08 Collision
09 Trail
10 Impact VFX
11 Ambient VFX
12 Shader P14 Integration
13 Overdraw Low Density
14 Overdraw High Density
15 Profiler Baseline
16 Rendering Stats Baseline
17 Material/Batch Study
18 Instancing OFF
19 Instancing ON
20 LOD0
21 LOD1
22 LOD2
23 Occlusion Test
24 Texture High Resolution
25 Texture Optimized Resolution
26 Mipmap Study
27 Shader Full
28 Shader Simplified
29 Shadow Before
30 Shadow Optimized
31 Profiler After
32 Final Before
33 Final After
```

---

# 185. Struktur Pengumpulan

```text
P15_NRP_Nama/
├── UnityProject/
│   └── Assets/
│       ├── VFX/
│       ├── Shaders/
│       ├── Materials/
│       ├── Models/
│       ├── Textures/
│       ├── Prefabs/
│       └── Scenes/
│           └── P15_VFX_Optimization.unity
├── Screenshots/
│   ├── ...
│   ├── baseline.png
│   └── optimized.png
├── Metrics/
│   └── performance_table.md
└── README.md
```

---

# 186. Isi README

Tuliskan:

```text
Nama
NRP
Unity Version
URP Version / Project Type

VFX 1 — IMPACT
- tujuan
- burst
- lifetime
- size
- color
- shape
- trail/collision/noise jika ada

VFX 2 — AMBIENT
- tujuan
- emission rate
- lifetime
- movement
- color
- noise

SHADER P14
- shader yang digunakan
- fungsi pada VFX scene

BASELINE
- camera
- kondisi scene
- frame time
- batches
- triangles
- vertices
- notes

OPTIMIZATION ACTION 1
- problem
- change
- result

OPTIMIZATION ACTION 2
...

LOD
- mesh levels
- result

OCCLUSION
- setup
- result

TEXTURE
- before
- after

SHADER
- full
- simplified

SHADOW
- before
- after

FINAL COMPARISON
- baseline
- optimized
- visual difference
- performance difference

CHALLENGE
- minimal 2

REFLEKSI
- bottleneck utama
- optimasi paling efektif
- optimasi yang dibatalkan
```

---

# 187. Checklist Pengumpulan

```text
[ ] Unity 6+
[ ] URP
[ ] P14 scene digunakan
[ ] Impact VFX
[ ] Ambient VFX
[ ] Burst
[ ] Lifetime
[ ] Velocity
[ ] Shape
[ ] Size over Lifetime
[ ] Color over Lifetime
[ ] Noise diuji
[ ] Collision diuji
[ ] Trail diuji
[ ] Shader P14 terintegrasi
[ ] baseline Profiler
[ ] baseline rendering stats
[ ] triangle study
[ ] material/batch study
[ ] GPU Instancing study
[ ] LOD
[ ] Occlusion study
[ ] texture resolution study
[ ] mipmaps
[ ] shader complexity
[ ] shadow study
[ ] minimal 4 optimization actions
[ ] Profiler after
[ ] before/after table
[ ] visual comparison
[ ] minimal 20 eksperimen wajib
[ ] minimal 2 challenge
[ ] screenshot lengkap
[ ] README
[ ] no critical error
```

---

# 188. Refleksi Praktikum

Tuliskan 10–15 kalimat mengenai:

1. VFX yang dibuat;
2. fungsi Burst;
3. pengaruh lifetime;
4. manfaat Size/Color over Lifetime;
5. penggunaan Noise;
6. manfaat/biaya Collision;
7. pengaruh Trail;
8. masalah overdraw yang ditemukan;
9. baseline performance;
10. bottleneck utama yang diamati;
11. pengaruh instancing;
12. pengaruh LOD;
13. pengaruh texture/shader/shadow optimization;
14. optimasi paling efektif;
15. alasan kualitas visual tetap dipertahankan.

---

# 189. Hubungan dengan UAS

Pertemuan 15 merupakan akhir materi teknis sebelum UAS.

Mahasiswa telah mempunyai:

```text
Modeling
UV
Material
Lighting
Camera
Unity
URP
Post Processing
Shader Graph
VFX
Particle
Profiling
Optimization
```

Semua konsep tersebut menjadi fondasi:

# UAS — Real-Time Interactive 3D Experience

---

# 190. Ringkasan Praktikum

## VFX Workflow

```text
Emitter
↓
Emission
↓
Shape
↓
Lifetime
↓
Velocity
↓
Size / Color
↓
Noise / Collision / Trail
↓
Renderer
↓
Visual Effect
```

## Profiling Workflow

```text
Representative Scene
↓
Baseline
↓
Profiler
↓
Rendering Statistics
↓
Identify Bottleneck
```

## Optimization Workflow

```text
Problem
↓
Hypothesis
↓
One Change
↓
Measure Again
↓
Visual Check
↓
Keep / Revert
```

Fokus utama P15:

```text
Particle
+
VFX
+
Frame Budget
+
Profiler
+
Triangle
+
Draw Call
+
Batching
+
GPU Instancing
+
LOD
+
Occlusion
+
Texture
+
Shader
+
Shadow
+
Before/After Measurement
```

Target akhir:

# VFX + Graphics Optimization Scene

yang tidak hanya terlihat lebih menarik, tetapi juga menunjukkan bahwa mahasiswa memahami prinsip:

> **buat effect yang mempunyai fungsi visual, ukur cost-nya, optimasi berdasarkan data, lalu ukur kembali tanpa merusak tujuan visual.**
