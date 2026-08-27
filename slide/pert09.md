# Grafika Komputer — Pertemuan 9
## Blender Fundamental & 3D Modeling

---

# Slide 00 — Cover

EF234504 — Grafika Komputer

## Pertemuan 9

# Blender Fundamental & 3D Modeling

**Laboratorium GIGA**

**Departemen Teknik Informatika - ITS**

---

# Slide 01 — Topik Pembahasan

- Peran Blender dalam graphics pipeline
- Blender Interface
- Navigasi Viewport
- Shortcut keyboard dan mouse
- Object Mode dan Edit Mode
- Vertex, Edge, Face, dan Mesh
- Selection dan Transform
- Extrude, Inset, Loop Cut, Bevel
- Operasi modeling penting
- Modifier
- Workflow hard-surface modeling
- Praktikum: Modeling Asset 3D

---

# Slide 02 — Capaian Pembelajaran

Mahasiswa mampu:

1. mengenali interface Blender,
2. menavigasi 3D Viewport,
3. menggunakan shortcut keyboard dan mouse yang sering dipakai,
4. membedakan Object Mode dan Edit Mode,
5. memahami vertex, edge, face, mesh, dan topology,
6. melakukan transformasi cepat dan presisi,
7. menggunakan Extrude, Inset, Loop Cut, dan Bevel,
8. menggunakan operasi editing penting,
9. memahami Modifier dan workflow non-destructive,
10. membuat asset 3D sederhana dengan workflow yang rapi.

---

# Slide 03 — Posisi Materi dalam Semester

Sebelum UTS:

```text
WebGL → Three.js → Interactive Web 3D
```

Setelah UTS:

```text
Blender Modeling
↓
Materials & UV
↓
Lighting & Rendering
↓
Unity
```

Pertemuan 9 adalah pintu masuk workflow pembuatan asset 3D.

---

# Slide 04 — Mengapa Blender?

Blender digunakan untuk:

- 3D modeling,
- asset creation,
- texturing,
- animation,
- lighting,
- rendering,
- export ke engine.

Fokus pertemuan ini:

> membuat geometry 3D yang rapi dan siap masuk tahap berikutnya.

---

# Slide 05 — Blender dalam Graphics Pipeline

```text
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

Pertemuan 9 fokus pada:

# Modeling

UV dan material dibahas pada Pertemuan 10.

---

# Slide 06 — Blender Interface

Bagian utama:

- 3D Viewport
- Outliner
- Properties Editor
- Timeline
- Toolbar
- Header
- Status Bar

Tujuan awal: mengenali lokasi kerja, object, dan pengaturan penting.

---

# Slide 07 — 3D Viewport

3D Viewport digunakan untuk:

- melihat object,
- memilih object,
- transform,
- modeling,
- navigasi scene.

Sebagian besar workflow modeling berlangsung di sini.

---

# Slide 08 — Outliner

Outliner menampilkan struktur object.

```text
Scene Collection
├── Camera
├── Cube
└── Light
```

Digunakan untuk memilih, rename, hide/show, dan mengelola collection.

---

# Slide 09 — Properties Editor

Properties Editor berisi pengaturan:

- Object
- Modifier
- Scene
- Render
- Output
- Material
- Physics

Pertemuan 9 fokus pada:

```text
Object + Modifier
```

---

# Slide 10 — Navigasi Viewport dengan Mouse

Shortcut mouse paling sering digunakan:

```text
MMB         → Orbit
Shift + MMB → Pan
Mouse Wheel → Zoom
```

Navigasi harus dikuasai karena dipakai terus-menerus saat modeling.

---

# Slide 11 — View Preset dengan Keyboard

```text
Numpad 1 → Front
Numpad 3 → Right
Numpad 7 → Top
Numpad 5 → Perspective / Orthographic
```

View preset mempercepat modeling presisi.

---

# Slide 12 — Frame dan Focus View

```text
Numpad . → Frame Selected
Home     → Frame All
```

`Frame Selected` sangat berguna ketika bekerja pada detail object tertentu.

---

# Slide 13 — Selection Dasar

```text
Left Click → Select
A          → Select All
Alt + A    → Deselect
B          → Box Select
C          → Circle Select
```

Selection yang cepat membuat modeling lebih efisien.

---

# Slide 14 — Transform Utama

Tiga shortcut terpenting:

```text
G → Grab / Move
R → Rotate
S → Scale
```

Batasi ke axis dengan:

```text
X / Y / Z
```

---

# Slide 15 — Transform dengan Nilai Numerik

Contoh:

```text
G X 2  → move 2 unit pada X
R Z 90 → rotate 90° pada Z
S 2    → scale 2×
```

Workflow numerik penting untuk asset teknis dan hard-surface.

---

# Slide 16 — Object Mode

Object Mode digunakan untuk object secara keseluruhan:

- move,
- rotate,
- scale,
- duplicate,
- modifier,
- hierarchy.

Geometry internal belum diedit.

---

# Slide 17 — Edit Mode

Edit Mode digunakan untuk mengubah geometry internal:

- vertex,
- edge,
- face,
- Extrude,
- Inset,
- Loop Cut,
- Bevel.

Shortcut:

```text
Tab
```

---

# Slide 18 — Object Mode vs Edit Mode

| Object Mode | Edit Mode |
|---|---|
| object keseluruhan | geometry internal |
| transform object | transform component |
| duplicate object | extrude/inset/bevel |
| modifier | topology editing |

---

# Slide 19 — Mesh

Mesh tersusun dari:

```text
Vertex
Edge
Face
```

Contoh cube:

```text
8 vertex
12 edge
6 face
```

Hubungannya membentuk topology.

---

# Slide 20 — Vertex

Vertex adalah titik pada ruang 3D.

```text
P = (X, Y, Z)
```

Vertex adalah elemen paling dasar dari mesh.

---

# Slide 21 — Edge

Edge menghubungkan dua vertex.

Edge membantu membentuk:

- contour,
- boundary,
- silhouette,
- topology,
- edge flow.

---

# Slide 22 — Face

Face adalah permukaan yang dibentuk oleh edge.

Bentuk umum:

- triangle,
- quad,
- n-gon.

Quad sering nyaman untuk modeling dan loop-based editing.

---

# Slide 23 — Topology

Topology adalah struktur hubungan:

```text
Vertex ↔ Edge ↔ Face
```

Topology yang baik membantu:

- editing,
- shading,
- deformation,
- tahap UV berikutnya.

---

# Slide 24 — Selection Mode di Edit Mode

```text
1 → Vertex
2 → Edge
3 → Face
```

Gunakan mode sesuai operasi yang dilakukan.

---

# Slide 25 — Menambah Primitive

```text
Shift + A
→ Mesh
```

Primitive umum:

- Cube
- Sphere
- Cylinder
- Plane
- Cone
- Torus

Primitive menjadi starting point banyak model.

---

# Slide 26 — Duplicate Object

```text
Shift + D
```

Digunakan untuk:

- wheel,
- pillar,
- repeated props,
- detail berulang.

Setelah duplicate, gunakan axis constraint bila perlu.

---

# Slide 27 — Delete, Undo, Redo

```text
X / Delete        → Delete
Ctrl + Z          → Undo
Shift + Ctrl + Z  → Redo
```

Undo/Redo penting untuk eksplorasi modeling.

---

# Slide 28 — Apply Transform

```text
Ctrl + A
→ Scale
```

Apply Scale penting sebelum beberapa operasi seperti Bevel dan Modifier agar hasil lebih konsisten.

---

# Slide 29 — Snapping

```text
Shift + Tab
→ Toggle Snapping
```

Snap target dapat berupa:

- Vertex
- Edge
- Face
- Grid

Snapping membantu alignment presisi.

---

# Slide 30 — Proportional Editing

```text
O
→ Proportional Editing
```

Mouse Wheel mengatur radius pengaruh.

Cocok untuk adjustment bentuk yang lebih halus.

---

# Slide 31 — Extrude

Extrude menambahkan geometry dari selection.

```text
E
```

Alur:

```text
Select Face → E → Move
```

Extrude adalah operasi modeling paling fundamental.

---

# Slide 32 — Extrude dengan Axis

Contoh:

```text
E Z
```

Artinya extrude mengikuti sumbu Z.

Axis constraint menjaga bentuk tetap presisi.

---

# Slide 33 — Inset

Inset membuat face baru di dalam face terpilih.

```text
I
```

Digunakan untuk:

- panel,
- border,
- window,
- indentation,
- detail permukaan.

---

# Slide 34 — Inset + Extrude

Kombinasi umum:

```text
Select Face
↓
I
↓
Inset
↓
E
↓
Extrude Inward / Outward
```

Sangat berguna untuk hard-surface detail.

---

# Slide 35 — Loop Cut

```text
Ctrl + R
```

Loop Cut menambahkan edge loop.

Mouse Wheel dapat menambah jumlah cut.

Paling efektif pada quad topology.

---

# Slide 36 — Bevel

```text
Ctrl + B
```

Bevel mengubah edge tajam menjadi permukaan tambahan.

Mouse Wheel:

```text
menambah segments
```

Bevel membantu edge menangkap highlight.

---

# Slide 37 — Merge

```text
M
```

Merge menggabungkan vertex.

Pilihan umum:

- At Center
- At Cursor
- By Distance

`Merge by Distance` berguna untuk cleanup.

---

# Slide 38 — Fill

```text
F
```

Digunakan untuk membuat face dari vertex/edge terpilih.

```text
Boundary → F → New Face
```

---

# Slide 39 — Knife Tool

```text
K
```

Knife membuat potongan topology secara manual.

Cocok saat Loop Cut tidak dapat menghasilkan edge yang diinginkan.

---

# Slide 40 — Recalculate Normal

```text
Shift + N
```

Menghitung ulang orientasi normal face.

Ini adalah **geometry normal**, bukan Normal Map pada Pertemuan 10.

---

# Slide 41 — Modifier

Modifier adalah operasi non-destructive.

Contoh:

- Bevel
- Mirror
- Array
- Solidify
- Subdivision Surface

Base geometry masih dapat dipertahankan selama modifier belum di-Apply.

---

# Slide 42 — Bevel Modifier

Bevel Modifier memberikan bevel secara non-destructive.

Kelebihan:

- parameter mudah diubah,
- konsisten,
- cocok hard-surface,
- mudah dikombinasikan dengan modifier lain.

---

# Slide 43 — Mirror Modifier

```text
Half Model
↓
Mirror
↓
Complete Symmetric Model
```

Cocok untuk robot, vehicle, character, dan symmetric props.

---

# Slide 44 — Array dan Solidify Modifier

**Array**

menggandakan object berulang.

**Solidify**

menambahkan ketebalan pada surface.

Contoh penggunaan:

- fence,
- stairs,
- panel,
- wall,
- shell.

---

# Slide 45 — Subdivision Surface

Subdivision Surface menambah geometry secara otomatis untuk menghasilkan permukaan lebih halus.

Cocok untuk:

- curved object,
- organic shape,
- smooth form.

---

# Slide 46 — Modifier Stack dan Urutan

```text
Base Mesh
↓
Modifier A
↓
Modifier B
↓
Modifier C
```

Urutan modifier dapat mengubah hasil.

Jangan Apply terlalu cepat jika masih perlu revisi.

---

# Slide 47 — Shortcut Workflow Modeling

```text
Shift+A → Primitive
G/R/S   → Transform
Tab     → Edit Mode
1/2/3   → Vertex/Edge/Face
E       → Extrude
I       → Inset
Ctrl+R  → Loop Cut
Ctrl+B  → Bevel
```

Gunakan shortcut sebagai workflow utama, bukan sekadar hafalan.

---

# Slide 48 — Praktikum: Modeling Asset 3D

Mahasiswa membuat satu asset sederhana–menengah.

Contoh:

- sci-fi crate,
- toolbox,
- control panel,
- robot head,
- lamp,
- mechanical prop.

Wajib menggunakan shortcut utama selama modeling.

---

# Slide 49 — Rencana Praktikum & Ringkasan

Tahapan:

```text
1. Setup dan navigasi
2. Blockout primitive
3. Transform
4. Edit Mode
5. Extrude + Inset
6. Loop Cut + Bevel
7. Minimal 2 Modifier
8. Cleanup
9. Final inspection
```

Benang merah:

```text
Primitive → Modeling Operations → Modifier → 3D Asset
```

---

# Slide 50 — TERIMA KASIH

# TERIMA KASIH

### Materi Selanjutnya

## Blender Materials, UV & Texturing
