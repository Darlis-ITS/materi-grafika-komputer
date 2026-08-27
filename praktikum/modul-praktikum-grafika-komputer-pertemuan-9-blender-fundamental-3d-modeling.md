# Modul Praktikum Grafika Komputer --- Pertemuan 9

## Blender Fundamental & 3D Modeling --- Hard-Surface Asset

**Mata Kuliah:** EF234504 --- Grafika Komputer\
**Pertemuan:** 9\
**Topik:** Blender Fundamental & 3D Modeling\
**Dosen:** Dr. Darlis Herumurti\
**Departemen:** Teknik Informatika

------------------------------------------------------------------------

# 1. Deskripsi Praktikum

Pertemuan 9 merupakan awal workflow pembuatan asset 3D menggunakan
Blender. Pada bagian semester sebelumnya, mahasiswa bekerja dengan WebGL
dan Three.js untuk menampilkan serta mengendalikan object 3D. Mulai
pertemuan ini, fokus berpindah ke **bagaimana geometry 3D dibuat**.

Pipeline yang akan dibangun pada beberapa pertemuan berikutnya:

``` text
Modeling
↓
UV Mapping
↓
Material & Texture
↓
Lighting
↓
Rendering / Export
```

Praktikum ini fokus pada tahap:

# Modeling

Mahasiswa akan membuat satu **hard-surface asset sederhana--menengah**
dengan workflow:

``` text
Reference / Ide
↓
Primitive
↓
Blockout
↓
Transform
↓
Edit Mode
↓
Extrude + Inset
↓
Loop Cut + Bevel
↓
Modifier
↓
Topology Cleanup
↓
Final Inspection
↓
3D Asset
```

Contoh asset:

-   sci-fi crate;
-   toolbox;
-   control panel;
-   robot head;
-   lamp;
-   mechanical prop.

Untuk contoh utama modul, gunakan **Sci-Fi / Mechanical Crate**, karena
bentuk ini cocok untuk melatih primitive, transform, Extrude, Inset,
Loop Cut, Bevel, duplicate, snapping, serta modifier.

------------------------------------------------------------------------

# 2. Capaian Praktikum

Setelah menyelesaikan praktikum, mahasiswa mampu:

1.  mengenali bagian utama interface Blender;
2.  menavigasi 3D Viewport;
3.  menggunakan shortcut keyboard dan mouse penting;
4.  menggunakan view preset;
5.  melakukan selection dengan efisien;
6.  melakukan transform dengan `G`, `R`, dan `S`;
7.  menggunakan axis constraint;
8.  menggunakan input numerik untuk transform presisi;
9.  membedakan Object Mode dan Edit Mode;
10. menjelaskan vertex, edge, face, mesh, dan topology;
11. menggunakan Vertex/Edge/Face Selection Mode;
12. menambahkan primitive;
13. melakukan duplicate;
14. menggunakan snapping;
15. menggunakan Proportional Editing;
16. menggunakan Extrude;
17. menggunakan Inset;
18. menggunakan Loop Cut;
19. menggunakan Bevel;
20. menggunakan Merge;
21. menggunakan Fill;
22. menggunakan Knife;
23. melakukan Recalculate Normal;
24. memahami fungsi Apply Scale;
25. menggunakan minimal dua Modifier;
26. memahami workflow non-destructive;
27. memahami pengaruh urutan Modifier Stack;
28. melakukan cleanup topology;
29. membuat hard-surface asset yang rapi;
30. menyiapkan geometry untuk tahap UV dan material pada pertemuan
    berikutnya.

------------------------------------------------------------------------

# 3. Target Hasil Akhir

Mahasiswa membuat satu asset 3D dengan karakteristik minimum:

-   bentuk utama terbaca dengan jelas;
-   berasal dari satu atau beberapa primitive;
-   menggunakan transform Object Mode;
-   menggunakan Edit Mode;
-   memiliki detail hasil Extrude;
-   memiliki detail hasil Inset;
-   menggunakan Loop Cut;
-   memiliki edge Bevel;
-   menggunakan minimal dua Modifier;
-   topology tidak memiliki duplicate vertex yang tidak diperlukan;
-   normal diperiksa;
-   penamaan object rapi;
-   transform diperiksa;
-   siap dilanjutkan ke UV dan material.

Contoh struktur:

``` text
SciFi_Crate
├── Crate_Body
├── Side_Panel_L
├── Side_Panel_R
├── Handle
└── Detail
```

Tidak wajib mengikuti struktur ini persis. Yang penting adalah asset
mempunyai hierarchy/organisasi object yang jelas.

------------------------------------------------------------------------

# 4. Prinsip Praktikum

Praktikum ini bukan sekadar menghasilkan bentuk akhir.

Yang dinilai secara teknis adalah **workflow modeling**.

Mahasiswa harus dapat menjelaskan:

``` text
Mengapa memilih primitive tertentu?
Mengapa menggunakan Object Mode?
Mengapa masuk Edit Mode?
Mengapa menambah Loop Cut?
Mengapa menggunakan Bevel?
Mengapa menggunakan Modifier?
Mengapa Apply Scale diperlukan?
```

Tujuannya agar mahasiswa memahami proses, bukan hanya mengikuti klik.

------------------------------------------------------------------------

# 5. Persiapan Blender

Buka Blender dan gunakan workspace:

``` text
Layout
```

Scene default biasanya berisi:

``` text
Scene Collection
├── Camera
├── Cube
└── Light
```

Untuk praktikum modeling, Camera dan Light boleh dipertahankan atau
disembunyikan. Cube dapat digunakan sebagai starting primitive.

------------------------------------------------------------------------

# 6. Mengenali Interface Blender

Bagian utama yang perlu dikenali:

  Bagian              Fungsi
  ------------------- -----------------------------------------------
  3D Viewport         melihat dan mengedit object
  Outliner            melihat struktur object
  Properties Editor   mengatur object, modifier, scene, dan lainnya
  Timeline            timeline animasi
  Toolbar             tool aktif
  Header              mode, menu, dan opsi viewport
  Status Bar          informasi status/shortcut

Pertemuan ini terutama menggunakan:

``` text
3D Viewport
+
Outliner
+
Object Properties
+
Modifier Properties
```

------------------------------------------------------------------------

# 7. Navigasi Viewport

Latih terlebih dahulu:

``` text
MMB
→ Orbit

Shift + MMB
→ Pan

Mouse Wheel
→ Zoom
```

Lakukan selama beberapa menit sampai navigasi terasa natural.

Kesalahan umum pemula adalah terlalu sering menggunakan icon navigasi
sehingga workflow menjadi lambat. Shortcut mouse sebaiknya menjadi
kebiasaan utama.

------------------------------------------------------------------------

# 8. View Preset

Gunakan:

``` text
Numpad 1
→ Front

Numpad 3
→ Right

Numpad 7
→ Top

Numpad 5
→ Perspective / Orthographic
```

Orthographic View sangat berguna ketika membutuhkan alignment dan
proporsi yang presisi.

------------------------------------------------------------------------

# 9. Focus View

Gunakan:

``` text
Numpad .
→ Frame Selected

Home
→ Frame All
```

Jika object "hilang" dari viewport, `Home` atau `Numpad .` sering
menjadi solusi tercepat.

------------------------------------------------------------------------

# 10. Selection Dasar

Latih:

``` text
Left Click
→ Select

A
→ Select All

Alt + A
→ Deselect

B
→ Box Select

C
→ Circle Select
```

Untuk keluar dari Circle Select:

``` text
Esc
```

atau klik kanan.

------------------------------------------------------------------------

# 11. Transform Utama

Tiga shortcut terpenting:

``` text
G
→ Grab / Move

R
→ Rotate

S
→ Scale
```

Contoh:

``` text
G X 2
```

berarti:

``` text
Move
↓
Constraint X
↓
2 unit
```

------------------------------------------------------------------------

# 12. Transform Numerik

Latihan:

``` text
G X 2
R Z 45
S 1.5
```

Gunakan `Enter` untuk konfirmasi.

Contoh lain:

``` text
G Z 1
```

memindahkan object satu unit pada Z.

Input numerik penting pada hard-surface modeling karena bentuk mekanis
sering membutuhkan ukuran dan alignment yang konsisten.

------------------------------------------------------------------------

# 13. Membatalkan Transform

Saat transform masih aktif:

``` text
Esc
```

atau klik kanan untuk membatalkan.

Ini sangat berguna jika salah menekan axis atau nilai.

------------------------------------------------------------------------

# 14. Object Mode vs Edit Mode

Pindah mode dengan:

``` text
Tab
```

**Object Mode**:

``` text
mengubah object secara keseluruhan
```

**Edit Mode**:

``` text
mengubah geometry internal object
```

Contoh:

``` text
Object Mode
S 2
```

mengubah scale object.

Sedangkan:

``` text
Edit Mode
Select Face
S 2
```

mengubah posisi vertex/face yang membentuk geometry.

------------------------------------------------------------------------

# 15. Mesh dan Topology

Mesh dibentuk oleh:

``` text
Vertex
↓
Edge
↓
Face
```

Cube dasar:

``` text
8 Vertex
12 Edge
6 Face
```

**Topology** adalah hubungan antar vertex, edge, dan face.

Topology mempengaruhi:

-   kemudahan editing;
-   edge flow;
-   shading;
-   deformation;
-   UV pada tahap berikutnya.

------------------------------------------------------------------------

# 16. Selection Mode di Edit Mode

Masuk Edit Mode:

``` text
Tab
```

Kemudian:

``` text
1
→ Vertex Select

2
→ Edge Select

3
→ Face Select
```

Catatan: shortcut `1/2/3` ini berlaku untuk selection mode ketika fokus
berada pada 3D Viewport dan menggunakan key angka utama, bukan Numpad
view preset.

------------------------------------------------------------------------

# 17. Latihan Vertex

Masuk:

``` text
Tab
1
```

Pilih satu vertex.

Kemudian:

``` text
G Z 0.5
```

Amati bagaimana edge dan face yang terhubung ikut berubah karena vertex
merupakan bagian dari topology mesh.

Undo:

``` text
Ctrl + Z
```

------------------------------------------------------------------------

# 18. Latihan Edge

Gunakan:

``` text
2
```

Pilih edge.

Coba:

``` text
G X 0.3
```

atau:

``` text
S 1.2
```

Amati perubahan face di sekitar edge.

Undo setelah eksperimen.

------------------------------------------------------------------------

# 19. Latihan Face

Gunakan:

``` text
3
```

Pilih satu face.

Coba:

``` text
G
S
R
```

Perhatikan bahwa yang berubah adalah component mesh, bukan transform
object secara keseluruhan.

------------------------------------------------------------------------

# 20. Menambah Primitive

Kembali ke Object Mode:

``` text
Tab
```

Gunakan:

``` text
Shift + A
→ Mesh
```

Coba tambahkan:

-   Cube;
-   Cylinder;
-   Plane.

Hapus object latihan setelah memahami proses.

------------------------------------------------------------------------

# 21. Duplicate Object

Pilih object:

``` text
Shift + D
```

Setelah duplicate, langsung beri axis constraint:

``` text
Shift + D
X
2
```

Teknik ini berguna untuk:

-   detail berulang;
-   pillar;
-   wheel;
-   panel;
-   mechanical component.

------------------------------------------------------------------------

# 22. Rename Object

Gunakan Outliner atau:

``` text
F2
```

Contoh:

``` text
Crate_Body
Side_Panel
Handle
```

Hindari nama akhir seperti:

``` text
Cube
Cube.001
Cube.002
Cube.003
```

karena sulit dikelola ketika scene mulai kompleks.

------------------------------------------------------------------------

# 23. Apply Scale

Buat cube dan ubah:

``` text
S X 2
S Z 0.75
```

Scale object sekarang bukan lagi `(1,1,1)`.

Apply:

``` text
Ctrl + A
→ Scale
```

Setelah Apply Scale, bentuk visual tetap sama tetapi scale object
kembali menjadi:

``` text
1, 1, 1
```

------------------------------------------------------------------------

# 24. Mengapa Apply Scale Penting?

Beberapa operasi, terutama Bevel dan Modifier, dapat dipengaruhi object
scale.

Workflow yang aman untuk hard-surface:

``` text
Object Mode
↓
Set ukuran dasar
↓
Ctrl + A
↓
Apply Scale
↓
Detail modeling / Bevel
```

Jangan Apply transform secara mekanis tanpa memahami kebutuhan. Pada
praktikum ini, Apply Scale digunakan sebelum tahap bevel/detail agar
hasil lebih konsisten.

------------------------------------------------------------------------

# 25. Snapping

Toggle:

``` text
Shift + Tab
```

Snap dapat diarahkan ke:

-   Increment/Grid;
-   Vertex;
-   Edge;
-   Face.

Gunakan snapping ketika membutuhkan alignment presisi antar component.

------------------------------------------------------------------------

# 26. Proportional Editing

Dalam Edit Mode:

``` text
O
```

Pilih satu vertex, kemudian:

``` text
G Z
```

Gunakan Mouse Wheel untuk mengubah radius pengaruh.

Proportional Editing cocok untuk adjustment bentuk halus. Untuk crate
hard-surface utama, gunakan secukupnya karena bentuk mekanis biasanya
membutuhkan kontrol yang lebih tegas.

------------------------------------------------------------------------

# 27. Memulai Asset Utama

Untuk contoh utama, buat:

# Sci-Fi / Mechanical Crate

Gunakan Cube default sebagai body.

Rename:

``` text
Crate_Body
```

Atur proporsi:

``` text
S X 2
S Y 1.5
S Z 1.2
```

Kemudian:

``` text
Ctrl + A
→ Scale
```

Nilai proporsi boleh disesuaikan selama asset tetap rapi.

------------------------------------------------------------------------

# 28. Tahap Blockout

Blockout adalah tahap menentukan:

-   ukuran;
-   proporsi;
-   silhouette;
-   komposisi component utama.

Pada tahap ini jangan membuat detail kecil.

Target:

``` text
Main Body
+
Side Components
+
Top/Front Form
```

Prinsip:

> bentuk besar harus terbaca sebelum detail kecil dibuat.

------------------------------------------------------------------------

# 29. Membuat Panel dengan Inset

Masuk Edit Mode:

``` text
Tab
3
```

Pilih face depan.

Tekan:

``` text
I
```

gerakkan mouse untuk menentukan inset.

Klik untuk konfirmasi.

Inset menghasilkan face baru di bagian dalam face terpilih.

------------------------------------------------------------------------

# 30. Inset Presisi

Setelah menekan `I`, nilai dapat diketik.

Contoh:

``` text
I
0.15
Enter
```

Nilai yang sesuai bergantung ukuran asset.

Gunakan nilai konsisten untuk panel yang ingin terlihat teknis.

------------------------------------------------------------------------

# 31. Extrude Panel ke Dalam

Setelah Inset, face bagian tengah masih selected.

Gunakan:

``` text
E
```

gerakkan sedikit ke dalam.

Jika orientasi face sesuai axis tertentu, dapat menggunakan axis
constraint.

Tujuan:

``` text
Inset
+
Extrude Inward
=
Recessed Panel
```

------------------------------------------------------------------------

# 32. Extrude ke Luar

Pilih face lain.

Gunakan:

``` text
E
```

ke arah luar untuk membuat:

-   frame;
-   bumper;
-   connector;
-   mechanical protrusion.

Extrude menambahkan geometry baru, bukan sekadar memindahkan face lama.

------------------------------------------------------------------------

# 33. Perbedaan Move dan Extrude

`G`:

``` text
memindahkan geometry terpilih
```

`E`:

``` text
membuat geometry baru
+
memindahkan hasil extrusion
```

Ini perbedaan konsep yang penting.

Jika tujuan adalah memperpanjang bentuk dengan topology baru, gunakan
Extrude.

------------------------------------------------------------------------

# 34. Loop Cut

Gunakan:

``` text
Ctrl + R
```

Arahkan cursor ke area mesh.

Klik untuk membuat cut.

Klik kanan setelah klik pertama dapat menempatkan loop pada posisi
tengah.

Loop Cut bekerja paling nyaman pada aliran quad yang mendukung edge
loop.

------------------------------------------------------------------------

# 35. Multiple Loop Cut

Saat preview Loop Cut muncul:

``` text
Mouse Wheel
```

untuk menambah jumlah cut.

Gunakan secukupnya.

Jangan menambah geometry tanpa fungsi karena akan membuat topology lebih
sulit dikelola.

------------------------------------------------------------------------

# 36. Menggunakan Loop Cut untuk Detail

Tambahkan loop untuk:

-   membatasi panel;
-   membuat area bevel/detail;
-   membagi permukaan;
-   menyediakan geometry tambahan untuk transform lokal.

Contoh:

``` text
Large Face
↓
Loop Cut
↓
Smaller Controlled Regions
↓
Inset / Extrude
```

------------------------------------------------------------------------

# 37. Bevel Edge

Pilih Edge Mode:

``` text
2
```

Pilih beberapa edge.

Gunakan:

``` text
Ctrl + B
```

Gerakkan mouse.

Mouse Wheel menambah segment.

------------------------------------------------------------------------

# 38. Mengapa Bevel Penting?

Object nyata jarang memiliki edge matematis yang benar-benar
infinitesimal tajam.

Bevel:

``` text
Sharp Edge
↓
Additional Faces
↓
Rounded / Chamfered Edge
```

Dalam visual 3D, bevel juga membantu edge menangkap highlight sehingga
bentuk lebih mudah terbaca.

------------------------------------------------------------------------

# 39. Jangan Bevel Berlebihan

Kesalahan umum:

``` text
terlalu lebar
+
terlalu banyak segment
```

Akibatnya:

-   silhouette berubah terlalu banyak;
-   geometry bertambah;
-   hard-surface kehilangan karakter;
-   editing menjadi lebih rumit.

Gunakan bevel sesuai skala object.

------------------------------------------------------------------------

# 40. Bevel Modifier

Alternatif non-destructive:

``` text
Modifier Properties
→ Add Modifier
→ Bevel
```

Atur parameter seperti:

-   Amount;
-   Segments.

Keuntungan:

``` text
parameter masih dapat diubah
```

selama modifier belum di-Apply.

------------------------------------------------------------------------

# 41. Destructive vs Non-Destructive

Bevel Edit Mode:

``` text
Ctrl + B
→ geometry langsung berubah
```

Bevel Modifier:

``` text
Base Mesh
↓
Modifier
↓
Evaluated Result
```

Base geometry dapat tetap dipertahankan.

Tidak ada satu metode yang selalu paling benar. Pilih sesuai kebutuhan
workflow.

------------------------------------------------------------------------

# 42. Mirror Modifier

Untuk asset simetris, gunakan Mirror.

Workflow:

``` text
Model Half
↓
Mirror Modifier
↓
Symmetric Result
```

Contoh cocok:

-   robot head;
-   vehicle;
-   symmetrical mechanical prop.

Untuk crate, Mirror dapat digunakan pada detail sisi jika desain dibuat
simetris.

------------------------------------------------------------------------

# 43. Array Modifier

Array menggandakan object secara berulang.

Cocok untuk:

-   vent;
-   ribs;
-   fence;
-   repeated mechanical details.

Contoh:

``` text
Single Detail
↓
Array
↓
Repeated Details
```

------------------------------------------------------------------------

# 44. Solidify Modifier

Solidify menambahkan ketebalan pada surface.

Cocok untuk:

-   panel tipis;
-   shell;
-   wall;
-   plate.

Jika menggunakan Plane untuk sebuah panel, Solidify dapat mengubahnya
menjadi bentuk yang memiliki thickness.

------------------------------------------------------------------------

# 45. Subdivision Surface

Subdivision Surface menghasilkan bentuk lebih halus dengan menambah
geometry secara evaluatif.

Cocok untuk:

-   curved object;
-   organic form;
-   smooth hard-surface tertentu.

Untuk crate utama, Subdivision bukan kewajiban. Gunakan hanya jika
desain memang membutuhkan permukaan yang lebih halus.

------------------------------------------------------------------------

# 46. Modifier Stack

Modifier dievaluasi berurutan:

``` text
Base Mesh
↓
Modifier 1
↓
Modifier 2
↓
Final Result
```

Urutan dapat mengubah hasil.

Contoh:

``` text
Mirror
↓
Bevel
```

dapat memberikan hasil berbeda dibanding:

``` text
Bevel
↓
Mirror
```

Mahasiswa wajib mencoba perubahan urutan pada salah satu eksperimen.

------------------------------------------------------------------------

# 47. Membuat Side Panel Terpisah

Untuk latihan object management, buat panel terpisah.

Tambahkan:

``` text
Shift + A
→ Mesh
→ Cube
```

Scale menjadi tipis.

Rename:

``` text
Side_Panel_L
```

Posisikan di sisi crate menggunakan:

``` text
G
S
```

dan axis constraint.

------------------------------------------------------------------------

# 48. Duplicate Side Panel

Duplicate:

``` text
Shift + D
```

pindahkan ke sisi berlawanan.

Rename:

``` text
Side_Panel_R
```

Gunakan snapping atau transform numerik agar posisi konsisten.

Alternatif yang lebih non-destructive adalah menggunakan Mirror
Modifier. Pilih salah satu untuk asset final, tetapi lakukan keduanya
sebagai latihan.

------------------------------------------------------------------------

# 49. Membuat Handle

Tambahkan primitive yang sesuai, misalnya Cube.

Bentuk menjadi batang sederhana.

Gunakan:

``` text
S
G
```

untuk proporsi dan posisi.

Handle boleh terdiri dari beberapa object atau satu mesh hasil Extrude.

Tujuan bagian ini adalah melatih pemecahan bentuk kompleks menjadi
primitive sederhana.

------------------------------------------------------------------------

# 50. Prinsip Primitive Decomposition

Saat melihat sebuah asset, jangan langsung bertanya:

> bagaimana membuat seluruh bentuk ini?

Pecah menjadi:

``` text
Main Box
+
Panel
+
Handle
+
Support
+
Repeated Detail
```

Kemudian tentukan primitive awal untuk setiap bagian.

Ini merupakan workflow penting dalam 3D modeling.

------------------------------------------------------------------------

# 51. Merge

Dalam Edit Mode:

``` text
M
```

Pilihan umum:

-   At Center;
-   At Cursor;
-   By Distance.

Untuk cleanup, gunakan:

``` text
M
→ By Distance
```

pada vertex yang memang seharusnya menyatu.

Jangan menggunakan Merge by Distance sebagai "obat" untuk semua topology
tanpa memeriksa hasilnya.

------------------------------------------------------------------------

# 52. Fill

Jika terdapat boundary yang perlu ditutup:

``` text
Select vertex/edge boundary
↓
F
```

Blender membuat face baru.

Perhatikan bentuk face yang dihasilkan. `F` dapat menghasilkan n-gon
tergantung selection.

------------------------------------------------------------------------

# 53. Knife Tool

Gunakan:

``` text
K
```

untuk membuat potongan manual.

Knife berguna ketika Loop Cut tidak dapat mencapai topology yang
diinginkan.

Gunakan seperlunya karena potongan manual dapat membuat topology lebih
kompleks.

------------------------------------------------------------------------

# 54. Recalculate Normal

Dalam Edit Mode:

``` text
A
Shift + N
```

Ini menghitung ulang orientasi normal face.

Normal di sini adalah **geometry normal**, bukan Normal Map.

Normal penting karena arah face mempengaruhi bagaimana surface
diperlakukan saat shading/rendering.

------------------------------------------------------------------------

# 55. Pemeriksaan Normal

Jika tersedia, gunakan viewport overlay:

``` text
Face Orientation
```

untuk membantu melihat orientasi face.

Tujuan praktikum bukan mendalami seluruh normal workflow, tetapi
memastikan mahasiswa memahami bahwa face mempunyai orientasi.

------------------------------------------------------------------------

# 56. Topology Cleanup

Sebelum menyatakan asset selesai:

1.  periksa duplicate vertex;
2.  periksa face yang tidak diperlukan;
3.  periksa edge yang tidak memiliki fungsi;
4.  periksa normal;
5.  periksa bentuk panel;
6.  periksa bevel;
7.  periksa modifier;
8.  periksa object naming;
9.  periksa transform.

------------------------------------------------------------------------

# 57. Jangan Mengejar Polygon Serendah Mungkin

Tujuan topology rapi bukan:

``` text
polygon sesedikit mungkin
```

melainkan:

``` text
geometry cukup
+
fungsi jelas
+
mudah diedit
+
shading baik
+
siap tahap berikutnya
```

Untuk praktikum fundamental, utamakan struktur yang mudah dipahami.

------------------------------------------------------------------------

# 58. Quad, Triangle, dan N-gon

Materi mengenalkan:

``` text
Triangle
Quad
N-gon
```

Quad sering nyaman untuk:

-   Loop Cut;
-   edge flow;
-   editing terstruktur.

Triangle dan n-gon bukan otomatis salah, tetapi mahasiswa harus memahami
bahwa topology tertentu dapat mempengaruhi operasi editing berikutnya.

------------------------------------------------------------------------

# 59. Final Hard-Surface Pass

Pada tahap akhir:

-   cek silhouette dari Front/Right/Top;
-   cek panel depth;
-   cek edge bevel;
-   cek repeated detail;
-   cek simetri;
-   cek spacing;
-   cek object yang menembus secara tidak sengaja;
-   cek topology;
-   cek normal.

Gunakan:

``` text
Numpad 1
Numpad 3
Numpad 7
```

untuk inspeksi.

------------------------------------------------------------------------

# 60. Milestone 1 --- Interface dan Navigasi

Target:

-   mengenali Viewport;
-   mengenali Outliner;
-   mengenali Properties;
-   Orbit;
-   Pan;
-   Zoom;
-   Front/Right/Top;
-   Perspective/Orthographic;
-   Frame Selected.

Jangan lanjut sebelum navigasi dasar nyaman.

------------------------------------------------------------------------

# 61. Milestone 2 --- Selection dan Transform

Target:

-   select/deselect;
-   Box Select;
-   `G/R/S`;
-   axis constraint;
-   input numerik;
-   duplicate;
-   rename.

------------------------------------------------------------------------

# 62. Milestone 3 --- Object vs Edit Mode

Target:

-   dapat menjelaskan perbedaannya;
-   transform object di Object Mode;
-   transform vertex/edge/face di Edit Mode;
-   menggunakan `1/2/3` selection mode.

------------------------------------------------------------------------

# 63. Milestone 4 --- Blockout Asset

Target:

``` text
silhouette utama terbaca
```

Belum perlu detail kecil.

Minimal:

-   body;
-   satu secondary component;
-   proporsi akhir kasar.

------------------------------------------------------------------------

# 64. Milestone 5 --- Extrude dan Inset

Asset harus mempunyai:

-   minimal satu Inset yang jelas;
-   minimal satu Extrude inward/outward;
-   detail yang mempunyai fungsi visual.

------------------------------------------------------------------------

# 65. Milestone 6 --- Loop Cut dan Bevel

Gunakan:

-   Loop Cut untuk pembagian topology;
-   Bevel untuk edge penting.

Pastikan tidak menambah segment berlebihan.

------------------------------------------------------------------------

# 66. Milestone 7 --- Modifier

Gunakan minimal dua modifier dari:

``` text
Bevel
Mirror
Array
Solidify
Subdivision Surface
```

Modifier harus mempunyai alasan penggunaan yang dapat dijelaskan.

------------------------------------------------------------------------

# 67. Milestone 8 --- Cleanup

Lakukan:

``` text
Merge by Distance bila diperlukan
+
Recalculate Normal
+
Topology Inspection
+
Object Naming
+
Transform Inspection
```

------------------------------------------------------------------------

# 68. Milestone 9 --- Final Inspection

Lihat asset dari:

``` text
Perspective
Front
Right
Top
```

Periksa:

-   silhouette;
-   simetri;
-   proporsi;
-   detail;
-   bevel;
-   topology.

------------------------------------------------------------------------

# 69. Eksperimen Wajib 1 --- Object vs Edit Transform

Buat dua cube identik.

Cube A:

``` text
Object Mode
S X 2
```

Cube B:

``` text
Edit Mode
A
S X 2
```

Bandingkan:

-   bentuk visual;
-   Object Scale;
-   pengaruh terhadap workflow berikutnya.

Jelaskan perbedaannya.

------------------------------------------------------------------------

# 70. Eksperimen Wajib 2 --- Apply Scale dan Bevel

Buat cube.

Lakukan non-uniform scale:

``` text
S X 3
S Z 0.5
```

Coba Bevel sebelum Apply Scale.

Kemudian Undo dan lakukan:

``` text
Ctrl + A
→ Scale
```

baru Bevel.

Bandingkan hasilnya.

------------------------------------------------------------------------

# 71. Eksperimen Wajib 3 --- Extrude vs Move

Pada dua face yang serupa:

-   satu gunakan `G`;
-   satu gunakan `E`.

Periksa topology.

Jawab:

> mengapa Extrude menghasilkan struktur yang berbeda dari Move?

------------------------------------------------------------------------

# 72. Eksperimen Wajib 4 --- Inset + Extrude

Buat:

``` text
Face
↓
Inset
↓
Extrude Inward
```

Gunakan untuk membuat panel recessed.

Jelaskan fungsi masing-masing operasi.

------------------------------------------------------------------------

# 73. Eksperimen Wajib 5 --- Loop Cut

Gunakan:

``` text
Ctrl + R
```

pada area quad.

Tambahkan:

-   satu loop;
-   tiga loop.

Bandingkan fleksibilitas editing dan jumlah geometry.

------------------------------------------------------------------------

# 74. Eksperimen Wajib 6 --- Bevel Segment

Bandingkan:

``` text
1 segment
3 segments
6 segments
```

Amati:

-   bentuk;
-   kehalusan;
-   tambahan geometry.

Pilih jumlah segment yang masuk akal untuk asset final.

------------------------------------------------------------------------

# 75. Eksperimen Wajib 7 --- Modifier Stack

Gunakan dua modifier, misalnya:

``` text
Mirror
+
Bevel
```

Bandingkan:

``` text
Mirror → Bevel
```

dengan:

``` text
Bevel → Mirror
```

Catat apakah hasil berubah.

------------------------------------------------------------------------

# 76. Eksperimen Wajib 8 --- Duplicate vs Array

Buat satu detail kecil.

Metode A:

``` text
Shift + D
```

beberapa kali.

Metode B:

``` text
Array Modifier
```

Bandingkan:

-   kemudahan perubahan;
-   konsistensi;
-   workflow non-destructive.

------------------------------------------------------------------------

# 77. Eksperimen Wajib 9 --- Snapping

Buat dua object.

Aktifkan snapping dan sejajarkan salah satu component ke target.

Bandingkan dengan alignment hanya menggunakan mata.

Jelaskan kapan snapping bermanfaat.

------------------------------------------------------------------------

# 78. Eksperimen Wajib 10 --- Proportional Editing

Pada mesh latihan, pilih satu vertex.

Aktifkan:

``` text
O
```

Move vertex dan ubah radius dengan Mouse Wheel.

Bandingkan dengan Proportional Editing OFF.

Jangan merusak asset utama; eksperimen boleh dilakukan pada object
terpisah.

------------------------------------------------------------------------

# 79. Eksperimen Wajib 11 --- Merge by Distance

Pada object latihan, buat kondisi duplicate vertex yang menempati lokasi
sama.

Gunakan:

``` text
M
→ By Distance
```

Amati perubahan.

Jelaskan mengapa operasi ini termasuk cleanup.

------------------------------------------------------------------------

# 80. Eksperimen Wajib 12 --- Recalculate Normal

Pada object latihan, buat/temukan kondisi orientasi face yang bermasalah
bila memungkinkan.

Gunakan:

``` text
A
Shift + N
```

Amati hasil dengan Face Orientation.

------------------------------------------------------------------------

# 81. Tugas Utama

Buat satu:

# Hard-Surface 3D Asset

Pilihan contoh:

-   sci-fi crate;
-   toolbox;
-   control panel;
-   robot head;
-   lamp;
-   mechanical prop.

Requirement:

-   [ ] menggunakan Blender;
-   [ ] object diberi nama jelas;
-   [ ] blockout dari primitive;
-   [ ] menggunakan Object Mode;
-   [ ] menggunakan Edit Mode;
-   [ ] menggunakan Vertex/Edge/Face selection;
-   [ ] transform `G/R/S`;
-   [ ] axis constraint;
-   [ ] minimal satu transform numerik;
-   [ ] Apply Scale pada bagian yang membutuhkan;
-   [ ] minimal satu Extrude;
-   [ ] minimal satu Inset;
-   [ ] minimal satu Loop Cut;
-   [ ] minimal satu Bevel;
-   [ ] minimal satu Duplicate atau repeated component;
-   [ ] minimal dua Modifier;
-   [ ] salah satu cleanup operation;
-   [ ] normal diperiksa;
-   [ ] topology diperiksa;
-   [ ] silhouette rapi;
-   [ ] siap untuk UV/material;
-   [ ] minimal dua challenge.

------------------------------------------------------------------------

# 82. Challenge A --- Symmetric Prop

Gunakan Mirror Modifier sebagai bagian penting desain.

Contoh:

-   robot head;
-   symmetric crate;
-   mechanical housing.

Model hanya setengah bagian dasar, kemudian manfaatkan Mirror.

------------------------------------------------------------------------

# 83. Challenge B --- Repeated Mechanical Detail

Gunakan Array Modifier untuk membuat:

-   vent;
-   grille;
-   rib;
-   repeated bolt-like detail;
-   panel repetition.

Tujuan:

> menghindari duplicate manual untuk pola yang teratur.

------------------------------------------------------------------------

# 84. Challenge C --- Thin Panel + Solidify

Buat satu detail dari Plane.

Bentuk silhouette di Edit Mode.

Tambahkan:

``` text
Solidify Modifier
```

untuk thickness.

------------------------------------------------------------------------

# 85. Challenge D --- Advanced Paneling

Buat minimal tiga recessed/raised panel dengan kombinasi:

``` text
Loop Cut
+
Inset
+
Extrude
```

Pastikan detail tidak sekadar acak tetapi mendukung desain asset.

------------------------------------------------------------------------

# 86. Challenge E --- Knife Detail

Gunakan Knife Tool pada satu bagian yang memang tidak dapat dibuat
nyaman dengan Loop Cut.

Setelah itu, periksa topology hasil potongan.

------------------------------------------------------------------------

# 87. Challenge F --- Controlled Curved Form

Tambahkan satu component yang menggunakan:

``` text
Subdivision Surface
```

atau geometry melengkung lain.

Pastikan tetap konsisten dengan hard-surface asset.

------------------------------------------------------------------------

# 88. Challenge G --- Modular Asset

Pisahkan asset menjadi beberapa object yang logis:

``` text
Body
Panel
Handle
Support
Detail
```

Rename semuanya dengan rapi di Outliner.

------------------------------------------------------------------------

# 89. Challenge H --- Precision Modeling

Gunakan kombinasi:

``` text
Orthographic View
+
Numeric Transform
+
Snapping
```

untuk membuat minimal satu bagian dengan alignment presisi.

------------------------------------------------------------------------

# 90. Shortcut Inti Praktikum

  Operasi                    Shortcut
  -------------------------- ------------------
  Orbit                      MMB
  Pan                        Shift + MMB
  Zoom                       Mouse Wheel
  Front                      Numpad 1
  Right                      Numpad 3
  Top                        Numpad 7
  Perspective/Orthographic   Numpad 5
  Frame Selected             Numpad .
  Frame All                  Home
  Select All                 A
  Deselect                   Alt + A
  Box Select                 B
  Circle Select              C
  Move                       G
  Rotate                     R
  Scale                      S
  Object/Edit Mode           Tab
  Vertex Select              1
  Edge Select                2
  Face Select                3
  Add                        Shift + A
  Duplicate                  Shift + D
  Delete                     X
  Undo                       Ctrl + Z
  Redo                       Shift + Ctrl + Z
  Apply                      Ctrl + A
  Toggle Snapping            Shift + Tab
  Proportional Editing       O
  Extrude                    E
  Inset                      I
  Loop Cut                   Ctrl + R
  Bevel                      Ctrl + B
  Merge                      M
  Fill                       F
  Knife                      K
  Recalculate Normal         Shift + N
  Rename                     F2

------------------------------------------------------------------------

# 91. Debugging --- Bevel Tidak Konsisten

Gejala:

``` text
bevel tampak berbeda pada axis tertentu
```

Periksa Object Scale.

Jika non-uniform:

``` text
Ctrl + A
→ Scale
```

kemudian evaluasi kembali bevel.

------------------------------------------------------------------------

# 92. Debugging --- Loop Cut Tidak Berjalan Sesuai Harapan

Loop Cut paling efektif pada topology yang mempunyai edge loop yang
dapat diteruskan.

Jika topology kompleks atau banyak n-gon, loop dapat berhenti/tidak
mengikuti jalur yang diharapkan.

Solusi bukan selalu menambah cut secara paksa.

Periksa topology terlebih dahulu.

------------------------------------------------------------------------

# 93. Debugging --- Extrude Ganda Tidak Sengaja

Kesalahan umum:

``` text
E
kemudian klik kanan
```

dapat meninggalkan extrusion baru di posisi yang sama tergantung urutan
tindakan.

Jika dicurigai ada duplicate geometry:

-   Undo segera;
-   atau inspeksi vertex;
-   gunakan Merge by Distance jika memang tepat.

Lebih baik mencegah daripada membersihkan secara membabi buta.

------------------------------------------------------------------------

# 94. Debugging --- Face Tampak Aneh

Periksa:

-   normal;
-   duplicate face;
-   overlapping geometry;
-   topology;
-   modifier.

Gunakan:

``` text
Edit Mode
A
Shift + N
```

untuk recalculation normal bila masalah memang berasal dari orientasi
normal.

------------------------------------------------------------------------

# 95. Debugging --- Object Hilang dari View

Gunakan:

``` text
Home
```

untuk Frame All.

Atau pilih dari Outliner lalu:

``` text
Numpad .
```

untuk Frame Selected.

------------------------------------------------------------------------

# 96. Debugging --- Transform Terasa Tidak Presisi

Gunakan:

-   axis constraint;
-   numeric input;
-   orthographic view;
-   snapping.

Contoh:

``` text
G X 1.5
```

lebih presisi daripada drag bebas jika target memang numerik.

------------------------------------------------------------------------

# 97. Debugging --- Terlalu Banyak Geometry

Periksa apakah setiap Loop Cut dan Bevel Segment mempunyai fungsi.

Hapus detail topology yang tidak diperlukan jika aman.

Prinsip:

``` text
cukup untuk bentuk
+
cukup untuk shading
+
mudah diedit
```

------------------------------------------------------------------------

# 98. Debugging --- Modifier Memberi Hasil Aneh

Periksa:

1.  object scale;
2.  urutan Modifier Stack;
3.  base geometry;
4.  axis/origin yang relevan;
5.  parameter modifier.

Jangan langsung Apply modifier hanya untuk "menghilangkan masalah".

------------------------------------------------------------------------

# 99. Test Case

    No. Pengujian           Hasil yang Diharapkan
  ----- ------------------- -------------------------------------
      1 Orbit/Pan/Zoom      Viewport dapat dinavigasi
      2 View preset         Front/Right/Top benar
      3 Object Mode         Transform seluruh object
      4 Edit Mode           Component dapat diedit
      5 Vertex/Edge/Face    Selection mode bekerja
      6 Numeric transform   Nilai presisi diterapkan
      7 Extrude             Geometry baru terbentuk
      8 Inset               Inner face terbentuk
      9 Loop Cut            Edge loop bertambah
     10 Bevel               Edge mempunyai chamfer/rounding
     11 Duplicate           Component terduplikasi
     12 Snapping            Alignment presisi
     13 Modifier 1          Berfungsi sesuai tujuan
     14 Modifier 2          Berfungsi sesuai tujuan
     15 Modifier order      Dapat dievaluasi
     16 Merge               Cleanup bekerja bila diperlukan
     17 Normal              Orientasi diperiksa
     18 Outliner            Nama object rapi
     19 Silhouette          Asset terbaca dari berbagai view
     20 Final file          Tidak ada geometry rusak yang jelas

------------------------------------------------------------------------

# 100. Pertanyaan Pemahaman

1.  Apa fungsi Blender dalam graphics pipeline?
2.  Apa fungsi 3D Viewport?
3.  Apa fungsi Outliner?
4.  Apa fungsi Properties Editor pada praktikum ini?
5.  Apa fungsi MMB?
6.  Apa fungsi `Shift + MMB`?
7.  Apa fungsi Numpad 1, 3, dan 7?
8.  Apa fungsi Numpad 5?
9.  Apa fungsi Numpad `.`?
10. Apa perbedaan Object Mode dan Edit Mode?
11. Apa itu vertex?
12. Apa itu edge?
13. Apa itu face?
14. Apa itu mesh?
15. Apa itu topology?
16. Mengapa quad nyaman untuk loop-based editing?
17. Apa fungsi `G`, `R`, dan `S`?
18. Apa keuntungan axis constraint?
19. Mengapa transform numerik berguna?
20. Apa fungsi `Shift + A`?
21. Apa fungsi `Shift + D`?
22. Apa fungsi Apply Scale?
23. Mengapa Apply Scale dapat penting sebelum Bevel?
24. Apa fungsi snapping?
25. Apa fungsi Proportional Editing?
26. Apa fungsi Extrude?
27. Apa perbedaan Extrude dan Move?
28. Apa fungsi Inset?
29. Apa manfaat kombinasi Inset + Extrude?
30. Apa fungsi Loop Cut?
31. Mengapa Loop Cut cocok pada quad topology?
32. Apa fungsi Bevel?
33. Mengapa bevel membantu visual hard-surface?
34. Apa fungsi Merge?
35. Apa fungsi Merge by Distance?
36. Apa fungsi Fill?
37. Apa fungsi Knife?
38. Apa fungsi Recalculate Normal?
39. Apa itu Modifier?
40. Mengapa Modifier disebut non-destructive?
41. Apa fungsi Bevel Modifier?
42. Apa fungsi Mirror Modifier?
43. Apa fungsi Array Modifier?
44. Apa fungsi Solidify Modifier?
45. Apa fungsi Subdivision Surface?
46. Mengapa urutan Modifier Stack penting?
47. Apa yang dimaksud blockout?
48. Mengapa detail kecil sebaiknya tidak dibuat terlalu awal?
49. Apa yang dimaksud topology cleanup?
50. Mengapa asset perlu diperiksa sebelum masuk tahap UV?

------------------------------------------------------------------------

# 101. Pertanyaan Analisis

## A --- Object Mode vs Edit Mode

Dua cube terlihat sama. Cube A diperpanjang melalui Object Mode Scale,
sedangkan Cube B diperpanjang melalui Edit Mode.

Apa perbedaan state transform kedua object?

## B --- Extrude

Mengapa memindahkan face dengan `G` tidak sama dengan melakukan `E` lalu
memindahkan hasil extrusion?

## C --- Bevel

Mengapa hard-surface asset sering terlihat lebih baik ketika edge
penting diberi bevel kecil?

## D --- Modifier

Apa keuntungan mempertahankan Mirror/Array/Bevel sebagai modifier selama
tahap desain dibanding langsung Apply?

## E --- Topology

Mengapa menambahkan banyak Loop Cut tanpa tujuan bukan workflow yang
baik?

## F --- Primitive Decomposition

Jika harus membuat robot head, bagaimana Anda memecah bentuk tersebut
menjadi primitive dan component yang lebih sederhana?

## G --- Apply Scale

Mengapa non-uniform Object Scale dapat mempengaruhi hasil operasi
tertentu?

## H --- Pipeline

Mengapa geometry yang rapi pada Pertemuan 9 akan membantu pekerjaan UV
dan material pada Pertemuan 10?

------------------------------------------------------------------------

# 102. Dokumentasi Proses

Ambil screenshot minimal pada tahap:

``` text
1. Primitive / Blockout
2. Extrude + Inset
3. Loop Cut / Bevel
4. Modifier
5. Final Asset
```

Tujuan screenshot proses adalah menunjukkan perkembangan workflow, bukan
hanya hasil akhir.

------------------------------------------------------------------------

# 103. README / Catatan Praktikum

Jika pengumpulan disertai dokumentasi, tuliskan:

``` text
Nama
NRP
Nama Asset
Konsep Asset
Primitive Awal
Operasi Modeling yang Digunakan
Modifier yang Digunakan
Bagian yang Menggunakan Extrude
Bagian yang Menggunakan Inset
Bagian yang Menggunakan Loop Cut
Bagian yang Menggunakan Bevel
Cleanup yang Dilakukan
Challenge yang Dikerjakan
Kendala
Solusi
```

------------------------------------------------------------------------

# 104. Output Pengumpulan

Minimum:

``` text
P09_NRP_Nama/
├── P09_NRP_Nama.blend
├── screenshot_blockout.png
├── screenshot_modeling.png
├── screenshot_final.png
└── README.md
```

Jika dosen menentukan format arsip:

``` text
P09_NRP_Nama.zip
```

Pastikan file `.blend` dapat dibuka.

------------------------------------------------------------------------

# 105. Checklist Pengumpulan

-   [ ] file `.blend` tersedia;
-   [ ] nama object rapi;
-   [ ] asset mempunyai silhouette yang jelas;
-   [ ] primitive/blockout terlihat dari dokumentasi;
-   [ ] Object Mode digunakan dengan benar;
-   [ ] Edit Mode digunakan;
-   [ ] Extrude digunakan;
-   [ ] Inset digunakan;
-   [ ] Loop Cut digunakan;
-   [ ] Bevel digunakan;
-   [ ] minimal dua Modifier;
-   [ ] Apply Scale dipahami/digunakan bila diperlukan;
-   [ ] topology diperiksa;
-   [ ] normal diperiksa;
-   [ ] tidak ada duplicate geometry yang jelas tidak diperlukan;
-   [ ] detail tidak berlebihan;
-   [ ] minimal dua challenge;
-   [ ] screenshot proses tersedia;
-   [ ] screenshot final tersedia;
-   [ ] file siap dilanjutkan ke UV/material.

------------------------------------------------------------------------

# 106. Refleksi Praktikum

Tuliskan 5--8 kalimat tentang:

1.  shortcut yang paling membantu;
2.  perbedaan Object Mode dan Edit Mode;
3.  operasi modeling yang paling mudah;
4.  operasi modeling yang paling sulit;
5.  manfaat Modifier;
6.  masalah topology yang ditemukan;
7.  manfaat Apply Scale;
8.  hal yang akan diperbaiki jika asset dibuat ulang.

------------------------------------------------------------------------

# 107. Hubungan dengan Pertemuan 10

Hasil Pertemuan 9:

``` text
Clean 3D Geometry
```

akan menjadi input untuk:

# Blender Materials, UV & Texturing

Alur:

``` text
Modeling
↓
Clean Mesh
↓
UV
↓
Material
↓
Texture
```

Karena itu jangan hanya mengejar bentuk visual. Geometry harus cukup
rapi agar tahap berikutnya dapat dilakukan dengan baik.

------------------------------------------------------------------------

# 108. Ringkasan Praktikum

Workflow utama:

``` text
Setup
↓
Navigation
↓
Primitive
↓
Blockout
↓
Object Transform
↓
Edit Mode
↓
Vertex / Edge / Face
↓
Extrude
↓
Inset
↓
Loop Cut
↓
Bevel
↓
Modifier
↓
Cleanup
↓
Final Inspection
↓
3D Asset
```

Shortcut inti:

``` text
G / R / S
Tab
1 / 2 / 3
Shift + A
Shift + D
E
I
Ctrl + R
Ctrl + B
M
F
K
Shift + N
Ctrl + A
```

Benang merah konsep:

``` text
Primitive
+
Topology
+
Modeling Operations
+
Non-Destructive Modifier
+
Cleanup
=
3D Asset yang siap dikembangkan
```

Target akhir praktikum adalah **hard-surface asset sederhana--menengah
yang rapi, terstruktur, dan siap masuk ke tahap UV, material, dan
texturing pada Pertemuan 10**.
