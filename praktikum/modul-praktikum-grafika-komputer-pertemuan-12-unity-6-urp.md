# Modul Praktikum Grafika Komputer --- Pertemuan 12

## Unity 3D & Real-Time Rendering Pipeline --- Unity 6+ / URP

**Mata Kuliah:** EF234504 --- Grafika Komputer\
**Pertemuan:** 12\
**Topik:** Unity 3D & Real-Time Rendering Pipeline\
**Platform Praktikum:** Unity 6+ dengan Universal Render Pipeline (URP)\
**Dosen:** Dr. Darlis Herumurti\
**Departemen:** Teknik Informatika

------------------------------------------------------------------------

# 1. Deskripsi Praktikum

Pertemuan 12 merupakan perpindahan dari workflow **3D Content Creation
di Blender** menuju **Real-Time 3D Graphics di Unity**.

Asset yang telah dibuat pada:

``` text
P9  → Modeling
P10 → UV + Material + Texture
P11 → Lighting + Camera + Rendering
```

akan dibawa ke Unity dan digunakan untuk membangun mini scene real-time.

Pipeline praktikum:

``` text
Blender Asset
↓
Asset Preparation
↓
FBX Export
↓
Unity 6+ URP Project
↓
Asset Import
↓
Import Verification
↓
GameObject + Component
↓
Transform + Hierarchy
↓
URP Material
↓
Prefab
↓
Scene Assembly
↓
Camera + Basic Lighting
↓
Game View
↓
Play Mode
↓
Real-Time Frame
```

Praktikum ini **tidak berfokus pada lighting lanjutan, post-processing,
atau custom shader**, karena materi tersebut dibahas pada Pertemuan 13
dan 14.

------------------------------------------------------------------------

# 2. Kompatibilitas Unity

Seluruh langkah utama modul ini dirancang untuk:

``` text
Unity 6+
Universal Render Pipeline (URP)
```

Gunakan rilis Unity 6 yang tersedia di laboratorium/perangkat mahasiswa.

Nama beberapa menu kecil dapat berubah pada minor release, tetapi
workflow yang digunakan dalam modul ini adalah workflow Unity 6:

-   Unity Hub;
-   URP project/template;
-   Scene View;
-   Game View;
-   Hierarchy;
-   Inspector;
-   Project window;
-   Console;
-   GameObject + Component;
-   Transform;
-   FBX Model Importer;
-   URP/Lit;
-   Prefab;
-   Camera;
-   Directional Light;
-   Play Mode.

> **Catatan:** Jangan menggunakan tutorial lama yang secara khusus
> mengandalkan Built-in Render Pipeline atau shader `Standard`.
> Praktikum ini menggunakan **URP** dan material **Universal Render
> Pipeline/Lit**.

------------------------------------------------------------------------

# 3. Capaian Praktikum

Setelah praktikum mahasiswa mampu:

1.  membuat project Unity 6+ berbasis URP;
2.  mengenali panel utama Unity Editor;
3.  menggunakan Scene View dan Game View;
4.  menggunakan Hierarchy, Inspector, Project, dan Console;
5.  melakukan navigasi Scene View;
6.  menggunakan Move, Rotate, dan Scale;
7.  menjelaskan GameObject dan Component;
8.  mengidentifikasi Transform;
9.  membedakan local dan world transform;
10. membuat parent-child hierarchy;
11. menjelaskan Mesh Filter dan Mesh Renderer;
12. menyiapkan asset Blender untuk Unity;
13. mengekspor asset menggunakan FBX;
14. mengimpor FBX ke Unity;
15. memeriksa Scale Factor, normals, hierarchy, dan material;
16. membuat material URP/Lit;
17. memasang Base Map, Metallic/Smoothness, dan Normal Map;
18. memahami perbedaan Roughness dan Smoothness;
19. membuat Prefab;
20. membuat beberapa Prefab instance;
21. membangun mini environment;
22. mengatur Camera;
23. menggunakan basic Directional Light;
24. menguji scene pada Game View dan Play Mode;
25. menjelaskan hubungan Scene → Camera → URP → GPU → Framebuffer →
    Display;
26. memahami pengantar culling, draw call, dan frame budget.

------------------------------------------------------------------------

# 4. Hasil Akhir

Mahasiswa menghasilkan:

# Blender Asset → Unity URP Mini Scene

Minimum scene:

``` text
Main Camera
Directional Light
Environment
├── Ground
├── HeroAsset
└── Props
```

Scene harus:

-   menggunakan Unity 6+;
-   menggunakan URP;
-   memiliki minimal satu asset utama dari Blender;
-   memiliki minimal dua jenis object/prop atau beberapa instance;
-   memiliki hierarchy yang rapi;
-   menggunakan URP/Lit material;
-   memiliki Camera;
-   memiliki basic lighting;
-   dapat dijalankan pada Play Mode;
-   tampil benar pada Game View.

------------------------------------------------------------------------

# 5. Software dan File

## Software

``` text
Blender
Unity Hub
Unity 6+
```

## File

Gunakan asset P9--P10.

Minimal:

``` text
model
UV
Base Color
Normal Map
Metallic Map jika tersedia
Roughness Map jika tersedia
```

Jika asset sebelumnya belum lengkap, mahasiswa boleh menggunakan asset
sederhana yang dibuat sendiri, tetapi tetap harus melalui workflow
Blender → FBX → Unity.

------------------------------------------------------------------------

# 6. Konsep: Blender dan Unity

Blender digunakan terutama untuk:

``` text
Modeling
UV
Texture
Material Authoring
Asset Preparation
```

Unity digunakan untuk:

``` text
Real-Time Rendering
Interaction
Physics
Scripting
Camera
Lighting
Shader
VFX
Deployment
```

Jadi:

``` text
Blender
→ membuat content

Unity
→ menjalankan content secara real-time
```

------------------------------------------------------------------------

# 7. Offline vs Real-Time Rendering

Pada offline rendering, satu frame dapat dihitung cukup lama.

Pada real-time rendering, frame harus dihasilkan terus-menerus.

Contoh:

``` text
30 FPS  ≈ 33.3 ms/frame
60 FPS  ≈ 16.7 ms/frame
120 FPS ≈ 8.3 ms/frame
```

Karena itu real-time graphics selalu mempunyai batas waktu.

Konsep penting:

``` text
Visual Quality
vs
Frame Time
```

Optimisasi mendalam akan dibahas pada Pertemuan 15.

------------------------------------------------------------------------

# 8. Bagian A --- Menyiapkan Asset di Blender

Sebelum membuka Unity, asset harus diperiksa.

Checklist:

``` text
[ ] object yang tidak diperlukan dihapus
[ ] nama object jelas
[ ] scale diperiksa
[ ] origin/pivot diperiksa
[ ] normal benar
[ ] UV tersedia
[ ] material slot masuk akal
[ ] texture tersedia sebagai file
```

------------------------------------------------------------------------

# 9. Naming Asset

Gunakan nama yang deskriptif.

Kurang baik:

``` text
Cube
Cube.001
Cube.002
Plane.004
```

Lebih baik:

``` text
Crate_Body
Crate_Handle
Crate_LED
GroundPanel
```

Naming yang baik akan terbawa ke workflow Unity dan mempermudah
Hierarchy.

------------------------------------------------------------------------

# 10. Periksa Scale Blender

Pilih object.

Periksa:

``` text
N → Item → Transform
```

Untuk object yang sudah final, target umum:

``` text
Scale
X = 1
Y = 1
Z = 1
```

Jika diperlukan:

``` text
Ctrl + A
→ Scale
```

Jangan Apply Scale secara sembarangan pada asset yang masih bergantung
pada setup tertentu. Pada prop statis praktikum ini, Apply Scale umumnya
aman setelah bentuk final.

------------------------------------------------------------------------

# 11. Mengapa Scale Penting?

Scale yang tidak terkontrol dapat menyebabkan:

-   ukuran import membingungkan;
-   child transform sulit dipahami;
-   collider nantinya tidak intuitif;
-   workflow placement tidak konsisten.

Gunakan ukuran dunia yang masuk akal.

Pedoman praktis Unity:

``` text
1 Unity unit ≈ 1 meter
```

------------------------------------------------------------------------

# 12. Periksa Origin / Pivot

Pivot menentukan titik transform object.

Contoh:

``` text
Door
→ pivot dekat engsel

Wheel
→ pivot di pusat roda

Crate
→ pivot dapat diletakkan pada pusat/bagian bawah sesuai kebutuhan placement
```

Di Blender:

``` text
Object
→ Set Origin
```

pilih metode yang sesuai.

------------------------------------------------------------------------

# 13. Periksa Normal

Masuk Edit Mode:

``` text
Tab
A
Shift + N
```

Periksa orientasi normal.

Normal yang salah dapat menyebabkan surface terlihat aneh atau tidak
sesuai saat dirender.

------------------------------------------------------------------------

# 14. Periksa UV

Buka:

``` text
UV Editing
```

Pastikan asset mempunyai UV yang digunakan texture.

Jangan mengandalkan material Blender procedural kompleks untuk otomatis
terbawa ke Unity.

Untuk pipeline dasar, siapkan texture image secara eksplisit.

------------------------------------------------------------------------

# 15. Texture yang Disiapkan

Contoh:

``` text
Crate_BaseColor.png
Crate_Normal.png
Crate_Metallic.png
Crate_Roughness.png
```

Simpan texture secara terpisah.

Struktur sementara:

``` text
Export/
├── Crate.fbx
└── Textures/
    ├── Crate_BaseColor.png
    ├── Crate_Normal.png
    ├── Crate_Metallic.png
    └── Crate_Roughness.png
```

------------------------------------------------------------------------

# 16. Catatan Penting: Material Blender ≠ Material Unity

Material Blender tidak selalu dapat diterjemahkan satu-ke-satu ke
material Unity.

Workflow yang lebih aman untuk praktikum:

``` text
Blender
→ geometry + UV + texture files

Unity
→ buat/atur material URP
```

Jadi jangan panik jika material setelah FBX import tidak identik dengan
Blender.

------------------------------------------------------------------------

# 17. Export FBX

Pilih hanya object yang diperlukan.

Gunakan:

``` text
File
→ Export
→ FBX (.fbx)
```

Pada export, gunakan opsi yang sesuai untuk asset statis.

Prinsip utama:

-   export object yang diperlukan;
-   pertahankan naming;
-   jangan sertakan Camera/Light Blender jika tidak dibutuhkan;
-   gunakan transform yang konsisten;
-   texture disimpan terpisah.

Nama:

``` text
Crate.fbx
```

------------------------------------------------------------------------

# 18. Verifikasi File Export

Sebelum Unity:

``` text
Export/
├── Crate.fbx
└── Textures/
```

Pastikan:

-   FBX benar-benar tersimpan;
-   texture tidak hilang;
-   nama file tidak membingungkan;
-   tidak ada duplikasi versi yang tidak jelas.

------------------------------------------------------------------------

# 19. Bagian B --- Membuat Project Unity 6+ URP

Buka:

``` text
Unity Hub
```

Pilih instalasi:

``` text
Unity 6+
```

Buat project baru menggunakan template 3D yang berbasis **Universal
Render Pipeline** yang tersedia pada instalasi Unity 6.

Pada instalasi tertentu nama template dapat tampil sebagai variasi
template Universal/URP 3D.

Yang harus dipastikan:

> project menggunakan Universal Render Pipeline, bukan Built-in Render
> Pipeline.

Nama project:

``` text
P12_NRP_Nama
```

------------------------------------------------------------------------

# 20. Verifikasi Project URP

Setelah project terbuka, pastikan material baru menyediakan shader:

``` text
Universal Render Pipeline/Lit
```

Jika shader URP tersedia dan project dibuat dari template URP,
lanjutkan.

Tujuan praktikum bukan mengonversi project Built-in menjadi URP. Jika
salah membuat project, lebih sederhana membuat ulang project URP.

------------------------------------------------------------------------

# 21. Mengenal Unity Editor

Identifikasi:

``` text
Scene
Game
Hierarchy
Inspector
Project
Console
Toolbar
```

Mahasiswa harus dapat menunjuk fungsi setiap panel sebelum melanjutkan.

------------------------------------------------------------------------

# 22. Scene View vs Game View

## Scene View

Digunakan untuk:

``` text
editing
placement
navigation
scene assembly
```

## Game View

Menampilkan:

``` text
output Camera
```

Kesalahan umum:

> menganggap tampilan Scene View adalah hasil akhir aplikasi.

Hasil yang dilihat user berasal dari Camera dan terlihat pada Game View.

------------------------------------------------------------------------

# 23. Navigasi Scene View

Gunakan:

``` text
Alt + Left Mouse Drag
→ Orbit

Middle Mouse Drag
→ Pan

Mouse Wheel
→ Zoom

Alt + Right Mouse Drag
→ Dolly / Zoom
```

Pilih object dan tekan:

``` text
F
```

untuk Frame Selected.

------------------------------------------------------------------------

# 24. Transform Tools

Shortcut:

``` text
W → Move
E → Rotate
R → Scale
```

Gunakan gizmo:

``` text
X
Y
Z
```

untuk transform terkontrol.

------------------------------------------------------------------------

# 25. Object Editing

Shortcut umum:

``` text
Ctrl + D → Duplicate
Delete   → Delete
F2       → Rename
Ctrl + Z → Undo
Ctrl + Y → Redo
Ctrl + S → Save
```

Biasakan save scene secara berkala.

------------------------------------------------------------------------

# 26. Play Mode

Gunakan tombol Play pada Toolbar.

Shortcut yang digunakan pada materi:

``` text
Ctrl + P
```

untuk Play/Stop bila key binding/editor setup menggunakan shortcut
default tersebut.

> Perubahan nilai yang dilakukan ketika Play Mode aktif dapat kembali ke
> nilai sebelum Play Mode setelah Stop. Karena itu perhatikan
> warna/status Play Mode sebelum melakukan editing permanen.

------------------------------------------------------------------------

# 27. Bagian C --- Struktur Folder Project

Pada Project window, buat:

``` text
Assets/
├── Models/
├── Materials/
├── Textures/
├── Prefabs/
├── Scenes/
└── Scripts/
```

Walaupun P12 belum memerlukan banyak script, folder `Scripts` disiapkan
agar project terstruktur.

------------------------------------------------------------------------

# 28. Mengapa Folder Harus Rapi?

Project kecil masih dapat bekerja dengan semua file dalam satu folder.

Namun project besar akan sulit dikelola.

Struktur yang rapi memudahkan:

-   mencari asset;
-   menghindari file duplikat;
-   memindahkan resource;
-   membuat Prefab;
-   bekerja dalam tim.

------------------------------------------------------------------------

# 29. Simpan Scene

Gunakan:

``` text
File
→ Save As
```

simpan ke:

``` text
Assets/Scenes/P12_Main.unity
```

Save kembali:

``` text
Ctrl + S
```

------------------------------------------------------------------------

# 30. Bagian D --- GameObject dan Component

Buat Cube:

``` text
GameObject
→ 3D Object
→ Cube
```

Pilih Cube.

Perhatikan Inspector.

Komponen yang biasanya terlihat antara lain:

``` text
Transform
Mesh Filter
Mesh Renderer
Collider
```

------------------------------------------------------------------------

# 31. GameObject sebagai Container

GameObject adalah container.

Kemampuan berasal dari Component.

Konsep:

``` text
GameObject
+
Component A
+
Component B
+
Component C
=
Object dengan fungsi tertentu
```

Ini adalah konsep fundamental Unity.

------------------------------------------------------------------------

# 32. Transform Component

Setiap GameObject memiliki Transform:

``` text
Position
Rotation
Scale
```

Transform menghubungkan konsep grafika komputer:

``` text
Model Space
↓
Transform
↓
World Space
```

------------------------------------------------------------------------

# 33. Mesh Filter

Pada Cube, perhatikan:

``` text
Mesh Filter
```

Mesh Filter menjawab:

> mesh geometry apa yang digunakan?

Secara konseptual:

``` text
GameObject
↓
Mesh Filter
↓
Mesh
```

------------------------------------------------------------------------

# 34. Mesh Renderer

Perhatikan:

``` text
Mesh Renderer
```

Renderer membuat mesh dapat ikut dalam proses rendering.

Secara sederhana:

``` text
Mesh
+
Material
+
Renderer
→
Visible Object
```

------------------------------------------------------------------------

# 35. Eksperimen Component

Disable sementara:

``` text
Mesh Renderer
```

Amati Scene/Game View.

Object tidak terlihat, tetapi GameObject masih ada.

Enable kembali.

Kesimpulan:

> GameObject dan kemampuan render adalah hal berbeda.

------------------------------------------------------------------------

# 36. Bagian E --- Parent dan Child

Buat Empty GameObject:

``` text
GameObject
→ Create Empty
```

Rename:

``` text
Environment
```

Buat Cube sebagai child dengan drag pada Hierarchy.

Struktur:

``` text
Environment
└── Cube
```

------------------------------------------------------------------------

# 37. Local vs World Transform

Pilih child.

Perhatikan Transform.

Child mempunyai transform relatif terhadap parent.

Konsep:

``` text
Parent World Transform
×
Child Local Transform
=
Child World Transform
```

Ini adalah bentuk scene graph/hierarchical transformation.

------------------------------------------------------------------------

# 38. Eksperimen Hierarchy

Pindahkan:

``` text
Environment
```

Amati child ikut berpindah.

Rotate parent.

Amati child ikut berubah terhadap parent.

Kemudian pindahkan child secara lokal.

Tujuan:

> memahami local transform dan hierarchical transformation secara
> visual.

------------------------------------------------------------------------

# 39. Bagian F --- Import FBX

Copy/drag:

``` text
Crate.fbx
```

ke:

``` text
Assets/Models/
```

Copy texture ke:

``` text
Assets/Textures/
```

Unity akan mengimpor asset secara otomatis.

------------------------------------------------------------------------

# 40. Memeriksa Model Importer

Klik file FBX di Project window.

Inspector menampilkan Model Import Settings.

Fokus praktikum pada:

-   Model;
-   geometry/mesh;
-   Scale Factor;
-   normals/tangents;
-   Materials.

Rig dan Animation tidak menjadi fokus untuk prop statis.

------------------------------------------------------------------------

# 41. Verifikasi Scale

Periksa preview model.

Drag model ke Scene.

Bandingkan dengan Cube Unity.

Gunakan Cube sebagai referensi ukuran.

Jika asset prop yang seharusnya kecil menjadi sebesar gedung, pipeline
scale perlu diperiksa.

Jangan langsung "menyembuhkan" semua masalah dengan Scale Transform di
Scene.

------------------------------------------------------------------------

# 42. Prinsip Memperbaiki Scale

Prioritas:

``` text
1. periksa ukuran Blender
2. periksa Apply Scale
3. periksa FBX export
4. periksa Model Import Scale Factor
5. baru evaluasi instance Transform
```

Tujuan:

> asset mempunyai ukuran sumber/import yang konsisten.

------------------------------------------------------------------------

# 43. Verifikasi Orientation

Periksa apakah asset:

-   berdiri pada arah yang benar;
-   tidak rebah;
-   front direction masuk akal.

Jika salah:

-   evaluasi export axis;
-   evaluasi transform Blender;
-   jangan membuat hierarchy penuh sebelum masalah orientasi selesai.

------------------------------------------------------------------------

# 44. Verifikasi Pivot

Pilih imported instance.

Aktifkan Rotate:

``` text
E
```

Putar object.

Apakah object berputar dari titik yang masuk akal?

Jika pivot salah, kembali ke asset source jika perlu.

------------------------------------------------------------------------

# 45. Verifikasi Normal

Putar Scene View.

Periksa apakah:

-   face terlihat benar;
-   shading tidak terbalik;
-   surface tidak menghilang secara tidak wajar.

Jika normal salah, perbaiki pada Blender lalu export ulang.

Workflow profesional:

``` text
fix at source
→ re-export
→ re-import
```

lebih baik daripada menumpuk workaround.

------------------------------------------------------------------------

# 46. Reimport Workflow

Jika FBX diperbaiki di Blender:

1.  export kembali dengan nama/path yang sama;
2.  replace FBX;
3.  kembali ke Unity;
4.  Unity mendeteksi perubahan;
5.  periksa hasil.

Ini menunjukkan fungsi Unity sebagai **asset pipeline**.

------------------------------------------------------------------------

# 47. Bagian G --- Material URP

Buat material:

``` text
Assets/Materials/
Right Click
→ Create
→ Material
```

Rename:

``` text
MAT_Crate
```

Pada Inspector pilih/pastikan shader:

``` text
Universal Render Pipeline/Lit
```

------------------------------------------------------------------------

# 48. URP/Lit

URP/Lit adalah shader PBR umum untuk surface yang menerima lighting.

Untuk P12 fokus pada:

``` text
Base Map
Metallic
Smoothness
Normal Map
```

Detail material lanjutan dibahas pada P13.

------------------------------------------------------------------------

# 49. Base Map

Drag:

``` text
Crate_BaseColor.png
```

ke:

``` text
Base Map
```

Base Map memberikan warna/albedo utama surface.

Jika warna tampak sangat berbeda, periksa texture import dan material
assignment.

------------------------------------------------------------------------

# 50. Normal Map

Pilih texture normal di Project.

Pada Texture Inspector, pastikan texture dikenali/dikonfigurasi sebagai:

``` text
Normal Map
```

Apply jika Unity meminta perubahan.

Kemudian assign ke:

``` text
MAT_Crate
→ Normal Map
```

------------------------------------------------------------------------

# 51. Metallic dan Smoothness

URP/Lit menggunakan konsep:

``` text
Metallic
+
Smoothness
```

Sedangkan workflow Blender/P10 dapat menggunakan:

``` text
Metallic
+
Roughness
```

Hubungan penting:

``` text
Smoothness ≈ 1 - Roughness
```

Jadi **Roughness Map tidak boleh langsung dianggap sama dengan
Smoothness Map**.

------------------------------------------------------------------------

# 52. Catatan Texture Packing URP

Pada workflow Metallic URP/Lit, texture metallic dapat menggunakan
channel:

``` text
R → Metallic
A → Smoothness
```

Artinya jika asset P10 mempunyai:

``` text
Metallic Map terpisah
Roughness Map terpisah
```

mahasiswa mungkin perlu membuat texture yang sesuai dengan kebutuhan
URP:

``` text
R = Metallic
A = 1 - Roughness
```

Untuk P12, dosen dapat menyediakan map yang sudah siap URP agar fokus
tetap pada asset pipeline.

------------------------------------------------------------------------

# 53. Mengapa Roughness Harus Dibalik?

Secara konsep:

``` text
Roughness tinggi
→ surface kasar
→ Smoothness rendah

Roughness rendah
→ surface halus
→ Smoothness tinggi
```

Sehingga:

``` text
Smoothness = 1 - Roughness
```

Ini adalah contoh bahwa texture convention dapat berbeda
antar-software/pipeline.

------------------------------------------------------------------------

# 54. Assign Material

Pilih imported object instance.

Pada Mesh Renderer:

``` text
Materials
```

assign:

``` text
MAT_Crate
```

Jika model memiliki beberapa material slot, assign material sesuai slot.

------------------------------------------------------------------------

# 55. Verifikasi Material

Periksa:

-   Base Map benar;
-   normal detail terlihat;
-   metallic masuk akal;
-   smoothness tidak terbalik;
-   UV sesuai;
-   tidak ada texture missing.

P12 hanya melakukan setup dasar. Fine tuning lighting/material dilakukan
P13.

------------------------------------------------------------------------

# 56. Eksperimen Material vs Renderer

Disable Mesh Renderer.

Material tetap ada sebagai asset, tetapi object tidak dirender.

Enable kembali.

Konsep:

``` text
Material
≠
Renderer

Renderer menggunakan Material
```

------------------------------------------------------------------------

# 57. Bagian H --- Membuat Prefab

Pastikan imported asset instance sudah mempunyai:

-   transform yang layak;
-   material;
-   hierarchy tambahan bila diperlukan.

Drag GameObject dari Hierarchy ke:

``` text
Assets/Prefabs/
```

Hasilnya menjadi Prefab asset.

Rename:

``` text
PF_Crate
```

------------------------------------------------------------------------

# 58. Apa Itu Prefab?

Prefab adalah template reusable.

``` text
PF_Crate
↓
Instance A
Instance B
Instance C
```

Keuntungan:

-   konsisten;
-   mudah diperbanyak;
-   cocok untuk environment props;
-   perubahan dapat dikelola dari source Prefab.

------------------------------------------------------------------------

# 59. Eksperimen Prefab Instance

Drag Prefab tiga kali ke Scene.

Atur:

``` text
Position
Rotation
```

berbeda.

Jangan membuat tiga copy FBX terpisah.

Konsep:

> satu asset dapat digunakan oleh banyak instance.

------------------------------------------------------------------------

# 60. Bagian I --- Menyusun Hierarchy

Buat struktur:

``` text
P12_Main
├── Environment
│   ├── Ground
│   └── Props
│       ├── PF_Crate (1)
│       ├── PF_Crate (2)
│       └── PF_Crate (3)
├── Hero
│   └── HeroAsset
├── Main Camera
└── Directional Light
```

Boleh disesuaikan dengan asset mahasiswa.

------------------------------------------------------------------------

# 61. Ground

Buat:

``` text
GameObject
→ 3D Object
→ Plane
```

Rename:

``` text
Ground
```

Scale agar cukup besar.

Buat material sederhana:

``` text
MAT_Ground
```

gunakan URP/Lit.

------------------------------------------------------------------------

# 62. Mini Environment

Susun asset agar scene mempunyai:

-   focal object;
-   ground;
-   beberapa props;
-   ruang yang mudah dibaca camera.

P12 tidak menilai artistik scene secara kompleks.

Tujuan utama:

> memahami object structure dan real-time scene assembly.

------------------------------------------------------------------------

# 63. Bagian J --- Camera

Pilih:

``` text
Main Camera
```

Game View menampilkan output Camera.

Atur Scene View ke sudut yang diinginkan.

Gunakan workflow alignment camera yang tersedia pada Unity 6/editor
untuk menyamakan Camera dengan view bila diperlukan, atau atur Transform
Camera secara manual.

Pastikan Game View menunjukkan scene dengan jelas.

------------------------------------------------------------------------

# 64. Camera Inspector

Perhatikan parameter penting:

``` text
Projection
Field of View
Clipping Planes
```

Untuk P12 gunakan:

``` text
Perspective
```

dan FOV yang wajar.

Pembahasan camera lanjutan bukan fokus utama karena composition sudah
dipelajari di Blender P11.

------------------------------------------------------------------------

# 65. Near dan Far Clipping Plane

Camera hanya merender object dalam rentang clipping.

Secara konseptual:

``` text
Near
< visible geometry <
Far
```

Jika object tiba-tiba tidak terlihat pada jarak tertentu, clipping plane
adalah salah satu hal yang perlu diperiksa.

------------------------------------------------------------------------

# 66. Bagian K --- Basic Lighting

Gunakan:

``` text
Directional Light
```

yang tersedia pada scene/template atau buat baru.

Atur:

``` text
Rotation
Intensity
Color
```

secukupnya agar asset terlihat.

P12 hanya menggunakan basic lighting.

------------------------------------------------------------------------

# 67. Mengapa Directional Light?

Directional Light cocok sebagai pencahayaan dasar karena:

-   mudah dikontrol;
-   menyerupai sumber jauh;
-   cukup untuk menguji material;
-   membantu memahami real-time scene.

Three-point lighting Unity dan lighting lebih lanjut dibahas pada P13.

------------------------------------------------------------------------

# 68. Bagian L --- Game View

Buka:

``` text
Game
```

Periksa:

-   object terlihat;
-   framing Camera;
-   material;
-   lighting;
-   background;
-   aspect ratio.

Ingat:

``` text
Scene View
≠
Game View
```

------------------------------------------------------------------------

# 69. Play Mode

Tekan Play.

Amati:

``` text
Editor
→ Runtime
```

Walaupun scene belum interaktif, Unity sekarang menjalankan scene
sebagai real-time application.

Stop kembali.

------------------------------------------------------------------------

# 70. Eksperimen Perubahan saat Play Mode

Sebelum eksperimen, save scene.

Play.

Pilih object dan ubah Position.

Stop.

Amati apakah nilai kembali.

Tujuan:

> memahami perbedaan editing state dan runtime state.

------------------------------------------------------------------------

# 71. Console

Buka:

``` text
Window
→ General
→ Console
```

atau akses Console tab yang tersedia.

Kenali:

``` text
Log
Warning
Error
```

Target praktikum:

``` text
tidak ada error merah yang tidak dipahami
```

------------------------------------------------------------------------

# 72. Bagian M --- Real-Time Rendering Pipeline

Scene yang terlihat pada Game View secara konseptual melalui:

``` text
Scene Data
↓
Visibility / Culling
↓
Geometry Processing
↓
Material + Shader
↓
Rasterization
↓
Lighting
↓
Post Processing
↓
Framebuffer
↓
Display
```

P12 tidak mengimplementasikan pipeline dari nol.

Unity/URP mengelola pipeline tersebut.

------------------------------------------------------------------------

# 73. Scene Data

Scene Data meliputi:

-   Transform;
-   Mesh;
-   Material;
-   Light;
-   Camera;
-   object state.

Hierarchy yang dibangun mahasiswa merupakan bagian dari data yang
digunakan runtime.

------------------------------------------------------------------------

# 74. Visibility dan Culling

Tidak semua object harus digambar.

Secara konsep:

``` text
Camera
↓
visible?
↓
render / skip
```

Culling membantu mengurangi pekerjaan rendering.

Optimisasi detail dibahas P15.

------------------------------------------------------------------------

# 75. Geometry Processing

Mesh mempunyai:

``` text
vertex
triangle
normal
UV
```

Data geometry diproses untuk menentukan posisi pada layar.

Konsep transformasi yang dipelajari pada P3--P4 kembali digunakan dalam
pipeline real-time.

------------------------------------------------------------------------

# 76. Material + Shader

Renderer menggunakan Material.

Material menggunakan Shader.

Shader menentukan bagaimana data geometry/surface diproses untuk
menghasilkan tampilan.

P12 cukup memahami hubungan:

``` text
Mesh
+
Material
+
Shader
+
Texture
+
Lighting
→
Pixels
```

Custom Shader Graph dibahas P14.

------------------------------------------------------------------------

# 77. Rasterization

Triangle yang telah diproyeksikan ke layar diubah menjadi kandidat
fragment/pixel.

Konsep:

``` text
Triangle
↓
Rasterization
↓
Fragments
```

Ini menghubungkan Unity dengan materi graphics pipeline sebelumnya.

------------------------------------------------------------------------

# 78. URP

URP mengatur bagaimana rendering scene dijalankan.

Secara konseptual:

``` text
Scene
↓
Camera
↓
URP
↓
Renderer
↓
Shader + Material
↓
GPU
↓
Framebuffer
↓
Game View
```

------------------------------------------------------------------------

# 79. Draw Call --- Pengantar

Draw call dapat dipahami sebagai perintah rendering dari CPU menuju
proses GPU untuk menggambar geometry dengan state/material tertentu.

Semakin kompleks scene, semakin penting memahami jumlah pekerjaan
rendering.

P12 hanya mengenalkan konsep.

Analisis mendalam dilakukan P15.

------------------------------------------------------------------------

# 80. Frame Budget

Jika target:

``` text
60 FPS
```

maka waktu satu frame kira-kira:

``` text
16.7 ms
```

Dalam waktu tersebut engine harus melakukan berbagai pekerjaan:

``` text
game logic
physics
animation
rendering
UI
dan lain-lain
```

Real-time graphics selalu bekerja di bawah batas waktu.

------------------------------------------------------------------------

# 81. Milestone 1 --- Unity 6 URP Project

Checklist:

``` text
[ ] Unity 6+
[ ] project URP
[ ] scene tersimpan
[ ] folder project rapi
```

------------------------------------------------------------------------

# 82. Milestone 2 --- Blender Asset Preparation

``` text
[ ] naming
[ ] scale
[ ] pivot
[ ] normal
[ ] UV
[ ] texture files
[ ] FBX
```

------------------------------------------------------------------------

# 83. Milestone 3 --- Import Verification

``` text
[ ] ukuran
[ ] orientation
[ ] pivot
[ ] normal
[ ] hierarchy
[ ] material slots
```

------------------------------------------------------------------------

# 84. Milestone 4 --- URP Material

``` text
[ ] URP/Lit
[ ] Base Map
[ ] Normal Map
[ ] Metallic/Smoothness bila tersedia
[ ] material assigned
```

------------------------------------------------------------------------

# 85. Milestone 5 --- GameObject + Component

Mahasiswa dapat menunjukkan pada object:

``` text
Transform
Mesh Filter
Mesh Renderer
Material
```

dan menjelaskan fungsi dasarnya.

------------------------------------------------------------------------

# 86. Milestone 6 --- Hierarchy

Scene mempunyai:

``` text
parent
+
child
```

yang terorganisasi.

Mahasiswa telah menguji pengaruh parent transform terhadap child.

------------------------------------------------------------------------

# 87. Milestone 7 --- Prefab

Minimal satu Prefab dibuat dan digunakan pada beberapa instance.

------------------------------------------------------------------------

# 88. Milestone 8 --- Scene Assembly

Scene mempunyai:

-   Ground;
-   Hero Asset;
-   Props;
-   hierarchy rapi.

------------------------------------------------------------------------

# 89. Milestone 9 --- Camera

Game View menampilkan scene secara jelas.

------------------------------------------------------------------------

# 90. Milestone 10 --- Basic Lighting

Directional Light membuat geometry dan material dapat dibaca.

------------------------------------------------------------------------

# 91. Milestone 11 --- Runtime Test

Scene dapat masuk Play Mode tanpa error utama.

------------------------------------------------------------------------

# 92. Milestone 12 --- Pipeline Explanation

Mahasiswa dapat menjelaskan:

``` text
Blender Asset
→ Unity Import
→ GameObject
→ Mesh Renderer
→ URP
→ GPU
→ Frame
```

------------------------------------------------------------------------

# 93. Eksperimen Wajib 1 --- Scene vs Game View

Ubah posisi Scene View tanpa mengubah Camera.

Amati Game View.

Jawab:

> Mengapa Game View tidak ikut berubah?

------------------------------------------------------------------------

# 94. Eksperimen Wajib 2 --- Component

Disable Mesh Renderer.

Amati object.

Enable kembali.

Jelaskan:

``` text
GameObject tetap ada
tetapi tidak dirender
```

------------------------------------------------------------------------

# 95. Eksperimen Wajib 3 --- Parent Transform

Buat parent dengan dua child.

Move parent.

Rotate parent.

Amati child.

Kemudian move salah satu child.

Jelaskan local vs world transform.

------------------------------------------------------------------------

# 96. Eksperimen Wajib 4 --- Scale Verification

Bandingkan imported asset dengan Unity Cube.

Dokumentasikan apakah ukurannya masuk akal.

Jika tidak, telusuri pipeline scale.

------------------------------------------------------------------------

# 97. Eksperimen Wajib 5 --- Pivot

Rotate asset.

Amati titik rotasi.

Jelaskan apakah pivot sudah sesuai fungsi object.

------------------------------------------------------------------------

# 98. Eksperimen Wajib 6 --- Material

Bandingkan:

``` text
object tanpa material final
```

dengan:

``` text
URP/Lit material
```

Jelaskan peran material dan renderer.

------------------------------------------------------------------------

# 99. Eksperimen Wajib 7 --- Roughness vs Smoothness

Jika mempunyai Roughness Map:

1.  pahami bahwa Roughness bukan Smoothness;
2.  buat/siapkan nilai smoothness yang benar;
3.  bandingkan surface kasar dan halus.

Tuliskan:

``` text
Smoothness ≈ 1 - Roughness
```

------------------------------------------------------------------------

# 100. Eksperimen Wajib 8 --- Prefab

Buat minimal tiga instance Prefab.

Ubah Position/Rotation masing-masing.

Jelaskan perbedaan:

``` text
Prefab Asset
vs
Prefab Instance
```

------------------------------------------------------------------------

# 101. Eksperimen Wajib 9 --- Camera FOV

Bandingkan dua nilai FOV yang berbeda.

Jangan fokus pada composition artistik.

Amati perubahan field of view pada Game View.

------------------------------------------------------------------------

# 102. Eksperimen Wajib 10 --- Directional Light Rotation

Rotate Directional Light.

Amati:

-   arah illumination;
-   shadow bila aktif;
-   pembacaan bentuk.

------------------------------------------------------------------------

# 103. Eksperimen Wajib 11 --- Play Mode State

Ubah Transform saat Play Mode.

Stop.

Catat hasil.

Jelaskan mengapa workflow runtime harus dibedakan dari editing.

------------------------------------------------------------------------

# 104. Eksperimen Wajib 12 --- Culling Konseptual

Pindahkan object jauh ke luar pandangan Camera.

Object masih ada di Hierarchy tetapi tidak terlihat pada Game View.

Hubungkan pengamatan dengan konsep:

``` text
visibility
```

------------------------------------------------------------------------

# 105. Tugas Utama

Buat:

# Blender Asset → Unity 6 URP Mini Scene

Requirement:

-   [ ] Unity 6+;
-   [ ] URP;
-   [ ] asset Blender;
-   [ ] FBX workflow;
-   [ ] scale diperiksa;
-   [ ] orientation diperiksa;
-   [ ] pivot diperiksa;
-   [ ] normal diperiksa;
-   [ ] UV tersedia;
-   [ ] folder project terstruktur;
-   [ ] hierarchy rapi;
-   [ ] GameObject + Component dipahami;
-   [ ] parent-child hierarchy;
-   [ ] URP/Lit material;
-   [ ] Base Map;
-   [ ] Normal Map;
-   [ ] Metallic/Smoothness bila tersedia;
-   [ ] Prefab;
-   [ ] minimal tiga Prefab instances;
-   [ ] Ground;
-   [ ] Camera;
-   [ ] Directional Light;
-   [ ] Game View;
-   [ ] Play Mode;
-   [ ] Console tanpa error utama;
-   [ ] minimal dua challenge;
-   [ ] dokumentasi lengkap.

------------------------------------------------------------------------

# 106. Challenge A --- Modular Environment

Buat minimal tiga module dari Blender, misalnya:

``` text
Floor
Wall
Crate
```

Import dan susun menjadi mini environment.

Fokus:

``` text
reusable assets
+
consistent scale
```

------------------------------------------------------------------------

# 107. Challenge B --- Nested Hierarchy

Buat hierarchy:

``` text
Machine
├── Body
├── Door
└── Indicator
```

Pastikan parent dapat dipindahkan tanpa merusak susunan child.

------------------------------------------------------------------------

# 108. Challenge C --- Pivot-Aware Object

Gunakan object yang membutuhkan pivot tertentu:

``` text
Door
Wheel
Lever
```

Tunjukkan bahwa pivot source memengaruhi manipulasi di Unity.

------------------------------------------------------------------------

# 109. Challenge D --- Material Variants

Gunakan mesh yang sama dengan dua material URP berbeda.

Contoh:

``` text
Crate_Red
Crate_Blue
```

Jelaskan:

> geometry dapat sama tetapi material dapat berbeda.

------------------------------------------------------------------------

# 110. Challenge E --- Prefab Variant / Controlled Variation

Buat variasi terkontrol dari asset reusable menggunakan workflow Prefab
yang tersedia pada Unity 6.

Contoh:

``` text
Crate
→ base

Crate_Warning
→ visual variation
```

Tujuan:

> memahami reuse tanpa menduplikasi source model.

------------------------------------------------------------------------

# 111. Challenge F --- Camera Presentation

Buat dua Camera position/angle alternatif untuk scene.

Pilih satu sebagai final Main Camera.

Jelaskan alasan pemilihan berdasarkan keterbacaan scene.

------------------------------------------------------------------------

# 112. Challenge G --- Material Pipeline Review

Dokumentasikan konversi:

``` text
Blender Base Color
→ Unity Base Map

Blender Normal
→ Unity Normal Map

Blender Metallic
→ Unity Metallic

Blender Roughness
→ inverse
→ Unity Smoothness
```

------------------------------------------------------------------------

# 113. Challenge H --- Scene Graph Demonstration

Buat object:

``` text
Vehicle
├── Body
├── Wheel_L
└── Wheel_R
```

Move/rotate Vehicle.

Tunjukkan bahwa child mengikuti parent.

------------------------------------------------------------------------

# 114. Debugging --- Model Terlalu Besar/Kecil

Periksa berurutan:

``` text
Blender dimensions
↓
Blender Scale
↓
Apply Scale
↓
FBX export
↓
Unity Model Importer Scale Factor
↓
instance Transform
```

Hindari memperbaiki pipeline yang salah hanya dengan scale instance
ekstrem.

------------------------------------------------------------------------

# 115. Debugging --- Model Rebah / Orientasi Salah

Periksa:

-   orientation di Blender;
-   transform;
-   FBX export;
-   import preview.

Perbaiki source/export jika masalah terjadi pada semua instance.

------------------------------------------------------------------------

# 116. Debugging --- Pivot Salah

Jika object berputar dari titik yang tidak sesuai:

1.  periksa origin Blender;
2.  perbaiki origin;
3.  export ulang;
4.  reimport.

Untuk prop tertentu, parent GameObject tambahan dapat digunakan sebagai
solusi scene-level, tetapi mahasiswa tetap harus memahami penyebab
source pivot.

------------------------------------------------------------------------

# 117. Debugging --- Face Gelap/Hilang

Periksa:

-   normal Blender;
-   duplicate face;
-   geometry;
-   material.

Perbaiki normal pada source asset.

------------------------------------------------------------------------

# 118. Debugging --- Texture Tidak Muncul

Periksa:

``` text
texture sudah ada di Assets/Textures?
material URP/Lit?
Base Map assigned?
material assigned ke Mesh Renderer?
UV tersedia?
```

------------------------------------------------------------------------

# 119. Debugging --- Normal Map Terlihat Salah

Periksa texture import.

Pastikan texture digunakan sebagai:

``` text
Normal Map
```

dan assign ke Normal Map pada URP/Lit.

Jangan memperlakukannya sebagai Base Map.

------------------------------------------------------------------------

# 120. Debugging --- Surface Terbalik Kasar/Halus

Kemungkinan:

``` text
Roughness dipakai seolah-olah Smoothness
```

Ingat:

``` text
Smoothness ≈ 1 - Roughness
```

------------------------------------------------------------------------

# 121. Debugging --- Material Pink/Magenta

Pink/magenta biasanya menunjukkan shader/material tidak dapat dirender
sesuai pipeline.

Periksa:

-   project benar-benar URP;
-   material menggunakan shader URP;
-   shader tersedia/valid.

Untuk praktikum, buat material baru:

``` text
Universal Render Pipeline/Lit
```

dan assign ulang.

------------------------------------------------------------------------

# 122. Debugging --- Object Ada di Scene tetapi Tidak di Game View

Periksa:

-   posisi Camera;
-   arah Camera;
-   clipping planes;
-   object aktif?;
-   Mesh Renderer aktif?;
-   layer/culling configuration bila diubah.

Mulai dari penyebab paling sederhana.

------------------------------------------------------------------------

# 123. Debugging --- Prefab Tidak Sesuai

Periksa apakah yang diubah:

``` text
Prefab Asset
```

atau:

``` text
Prefab Instance
```

Kenali status override pada Inspector.

Jangan Apply/Revert perubahan tanpa memahami efeknya.

------------------------------------------------------------------------

# 124. Debugging --- Perubahan Hilang Setelah Play

Kemungkinan perubahan dilakukan saat:

``` text
Play Mode
```

Perubahan runtime tertentu tidak menjadi edit permanen.

Stop, kemudian lakukan perubahan pada editing mode.

------------------------------------------------------------------------

# 125. Debugging --- Console Error

Klik error merah.

Baca:

-   pesan;
-   object/script terkait;
-   lokasi masalah.

Walaupun P12 belum fokus scripting, Console harus dibiasakan sejak awal.

------------------------------------------------------------------------

# 126. Test Case

    No. Pengujian             Hasil yang Diharapkan
  ----- --------------------- -----------------------------------------
      1 Unity version         Unity 6+
      2 Render pipeline       URP
      3 Scene save            Scene berada di `Assets/Scenes`
      4 Folder structure      Project terorganisasi
      5 FBX import            Model berhasil diimport
      6 Scale                 Ukuran masuk akal
      7 Orientation           Model berdiri benar
      8 Pivot                 Rotasi masuk akal
      9 Normal                Surface tampil benar
     10 UV                    Texture terpetakan
     11 GameObject            Object tersedia
     12 Component             Transform/Renderer dapat diidentifikasi
     13 Parent-child          Child mengikuti parent
     14 URP/Lit               Shader benar
     15 Base Map              Texture warna tampil
     16 Normal Map            Detail normal bekerja
     17 Metallic/Smoothness   Surface sesuai
     18 Prefab                Prefab dibuat
     19 Instances             Minimal 3 instance
     20 Camera                Game View jelas
     21 Directional Light     Asset terlihat
     22 Play Mode             Scene berjalan
     23 Console               Tidak ada error utama
     24 Pipeline              Mahasiswa dapat menjelaskan alur frame

------------------------------------------------------------------------

# 127. Pertanyaan Pemahaman

1.  Apa perbedaan peran Blender dan Unity?
2.  Apa perbedaan offline dan real-time rendering?
3.  Berapa frame budget kira-kira untuk 60 FPS?
4.  Apa itu Unity sebagai game/real-time engine?
5.  Apa perbedaan Editor dan Runtime?
6.  Apa fungsi Scene View?
7.  Apa fungsi Game View?
8.  Apa fungsi Hierarchy?
9.  Apa fungsi Inspector?
10. Apa fungsi Project window?
11. Apa fungsi Console?
12. Apa itu GameObject?
13. Apa itu Component?
14. Mengapa Transform selalu penting?
15. Apa itu local transform?
16. Apa itu world transform?
17. Apa hubungan parent dan child?
18. Apa itu scene graph?
19. Apa itu Mesh?
20. Apa fungsi Mesh Filter?
21. Apa fungsi Mesh Renderer?
22. Apa fungsi Material?
23. Apa hubungan Material dan Shader?
24. Mengapa asset perlu dipersiapkan sebelum export?
25. Mengapa scale harus konsisten?
26. Apa fungsi origin/pivot?
27. Apa akibat normal salah?
28. Mengapa UV diperlukan?
29. Mengapa FBX digunakan dalam praktikum?
30. Apa fungsi Model Importer?
31. Mengapa import harus diverifikasi?
32. Apa itu URP?
33. Mengapa P12 menggunakan URP?
34. Apa itu URP/Lit?
35. Apa fungsi Base Map?
36. Apa fungsi Normal Map?
37. Apa perbedaan Roughness dan Smoothness?
38. Bagaimana hubungan Roughness dan Smoothness?
39. Apa itu Prefab?
40. Apa perbedaan Prefab Asset dan instance?
41. Apa fungsi Camera?
42. Apa fungsi Directional Light?
43. Apa itu real-time rendering pipeline?
44. Apa itu visibility/culling secara umum?
45. Apa itu rasterization?
46. Apa itu draw call secara umum?
47. Apa itu frame budget?
48. Mengapa perubahan Play Mode perlu diperhatikan?
49. Mengapa Console penting?
50. Jelaskan pipeline Blender → Unity → Game View.

------------------------------------------------------------------------

# 128. Pertanyaan Analisis

## A --- Scale

Asset meja masuk Unity dengan ukuran 100 kali lebih besar daripada
karakter.

Mengapa solusi terbaik bukan langsung memberi Transform Scale `0.01`
pada semua instance?

## B --- Pivot

Sebuah pintu berputar dari tengah.

Di mana pivot yang lebih tepat dan mengapa?

## C --- Hierarchy

Mengapa roda sebaiknya menjadi child dari object mobil?

## D --- Component

Apa yang terjadi secara konseptual ketika Mesh Renderer dinonaktifkan
tetapi GameObject tetap aktif?

## E --- Material

Mengapa material Blender tidak selalu terlihat identik setelah FBX masuk
ke Unity?

## F --- Roughness

Mengapa Roughness Map Blender tidak selalu dapat langsung dipasang
sebagai Smoothness?

## G --- Prefab

Mengapa 30 peti sebaiknya menggunakan Prefab/instances daripada 30
source asset berbeda?

## H --- Camera

Mengapa object dapat terlihat pada Scene View tetapi tidak pada Game
View?

## I --- Real-Time

Mengapa kualitas visual maksimum bukan satu-satunya tujuan real-time
rendering?

## J --- Pipeline

Jelaskan hubungan:

``` text
Mesh
→ Renderer
→ Material
→ Shader
→ URP
→ GPU
→ Framebuffer
```

------------------------------------------------------------------------

# 129. Dokumentasi Wajib

Ambil screenshot:

``` text
01 Blender Asset Preparation
02 Blender Scale + Origin
03 FBX Export
04 Unity 6 URP Project
05 Project Folder Structure
06 Imported FBX Inspector
07 Scale / Orientation Verification
08 GameObject Components
09 Parent-Child Hierarchy
10 URP Material
11 Prefab
12 Prefab Instances
13 Final Hierarchy
14 Main Camera / Game View
15 Basic Lighting
16 Play Mode
17 Final Mini Scene
```

------------------------------------------------------------------------

# 130. Struktur Pengumpulan

``` text
P12_NRP_Nama/
├── UnityProject/
│   ├── Assets/
│   │   ├── Models/
│   │   ├── Materials/
│   │   ├── Textures/
│   │   ├── Prefabs/
│   │   ├── Scenes/
│   │   └── Scripts/
│   └── ...
├── SourceAsset/
│   ├── Asset.blend
│   ├── Asset.fbx
│   └── Textures/
├── Screenshots/
│   └── ...
└── README.md
```

> Untuk pengumpulan, ikuti aturan ukuran file dari dosen/LMS. Folder
> cache besar seperti `Library` biasanya tidak perlu disertakan jika
> project dikumpulkan sebagai source project, kecuali dosen menentukan
> lain.

------------------------------------------------------------------------

# 131. Isi README

Tuliskan:

``` text
Nama
NRP
Versi Unity
Render Pipeline

ASSET
- nama asset
- ukuran perkiraan
- scale Blender
- pivot
- normal
- UV

EXPORT / IMPORT
- format
- masalah import
- solusi

UNITY STRUCTURE
- hierarchy
- GameObject utama
- Component utama
- parent-child

MATERIAL
- shader
- Base Map
- Normal
- Metallic
- Smoothness
- konversi Roughness bila digunakan

PREFAB
- Prefab yang dibuat
- jumlah instance

SCENE
- Camera
- Directional Light
- environment

CHALLENGE
- challenge yang dikerjakan

REFLEKSI
- kendala
- solusi
```

------------------------------------------------------------------------

# 132. Checklist Pengumpulan

-   [ ] menggunakan Unity 6+;
-   [ ] menggunakan URP;
-   [ ] project dapat dibuka;
-   [ ] scene tersimpan;
-   [ ] folder terstruktur;
-   [ ] source `.blend` tersedia;
-   [ ] FBX tersedia;
-   [ ] texture tersedia;
-   [ ] scale source diperiksa;
-   [ ] pivot diperiksa;
-   [ ] normal diperiksa;
-   [ ] UV diperiksa;
-   [ ] model berhasil diimport;
-   [ ] orientation benar;
-   [ ] material URP/Lit;
-   [ ] Base Map;
-   [ ] Normal Map;
-   [ ] Metallic/Smoothness bila tersedia;
-   [ ] hierarchy rapi;
-   [ ] parent-child diuji;
-   [ ] Prefab dibuat;
-   [ ] minimal 3 Prefab instances;
-   [ ] Ground;
-   [ ] Hero Asset;
-   [ ] Props;
-   [ ] Main Camera;
-   [ ] Directional Light;
-   [ ] Game View benar;
-   [ ] Play Mode berhasil;
-   [ ] tidak ada error utama;
-   [ ] 12 eksperimen wajib;
-   [ ] minimal 2 challenge;
-   [ ] screenshot lengkap;
-   [ ] README lengkap.

------------------------------------------------------------------------

# 133. Refleksi Praktikum

Tuliskan 6--10 kalimat mengenai:

1.  perbedaan workflow Blender dan Unity;
2.  masalah scale/orientation yang ditemukan;
3.  pentingnya pivot;
4.  fungsi GameObject dan Component;
5.  manfaat hierarchy;
6.  perbedaan Roughness dan Smoothness;
7.  manfaat Prefab;
8.  perbedaan Scene View dan Game View;
9.  makna Play Mode;
10. hubungan asset dengan real-time rendering pipeline.

------------------------------------------------------------------------

# 134. Hubungan dengan Pertemuan 13

P12 menghasilkan:

``` text
Imported Asset
+
URP Material
+
Hierarchy
+
Prefab
+
Camera
+
Basic Lighting
```

Pertemuan 13 melanjutkan scene tersebut dengan:

# Unity Lighting, Material & Post Processing

Jadi simpan project P12 dengan baik.

Project ini dapat menjadi base project untuk praktikum berikutnya.

------------------------------------------------------------------------

# 135. Ringkasan Praktikum

Workflow akhir:

``` text
BLENDER
Model
↓
Scale
↓
Pivot
↓
Normal
↓
UV
↓
FBX
      │
      ▼
UNITY 6+ / URP
Import
↓
Verify
↓
GameObject
↓
Component
↓
Transform
↓
Hierarchy
↓
URP/Lit Material
↓
Prefab
↓
Scene Assembly
↓
Camera
↓
Basic Light
↓
Game View
↓
Play Mode
↓
Real-Time Frame
```

Konsep inti:

``` text
GameObject
→ container

Component
→ kemampuan object

Transform
→ position + rotation + scale

Hierarchy
→ scene graph

Mesh Filter
→ geometry reference

Mesh Renderer
→ membuat mesh ikut dirender

Material + Shader
→ menentukan surface rendering

Prefab
→ reusable object template

URP
→ mengatur real-time rendering

Camera
→ menentukan output Game View

Frame Budget
→ batas waktu real-time
```

Target akhir:

# Blender Asset → Unity 6 URP Mini Scene

yang siap dikembangkan pada Pertemuan 13 menjadi scene dengan
**Lighting, Material, dan Post Processing** yang lebih lengkap.
