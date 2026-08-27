# Grafika Komputer — Pertemuan 7
## Three.js Interactive 3D Application

---

# Slide 00 — Cover

EF234504 — Grafika Komputer

## Pertemuan 7

# Three.js Interactive 3D Application

**Laboratorium GIGA**

**Departemen Teknik Informatika - ITS**

---

# Slide 01 — Topik Pembahasan

- Scene Graph
- Object3D Hierarchy
- Parent-Child Transform
- Group
- PBR Material
- Roughness dan Metalness
- GLTF / GLB
- GLTFLoader
- Animation Clip
- AnimationMixer
- Raycasting
- Hover dan Click Interaction
- Environment Map
- Integrasi aplikasi 3D interaktif
- Praktikum: Prototype Persiapan UTS

---

# Slide 02 — Capaian Pembelajaran

Setelah mengikuti pertemuan ini, mahasiswa diharapkan mampu:

1. membangun Scene Graph,
2. membuat hierarchy parent-child,
3. menjelaskan local dan world transform pada hierarchy,
4. menggunakan Group,
5. menggunakan PBR material,
6. memuat model GLTF/GLB,
7. menjalankan animation clip,
8. menggunakan Raycaster,
9. membuat hover dan click interaction,
10. memberi feedback visual,
11. menggunakan environment map,
12. mengintegrasikan komponen menjadi aplikasi 3D interaktif.

---

# Slide 03 — Dari Mini Scene ke Interactive Application

Pertemuan 6 menghasilkan:

```text
Scene
+
Camera
+
Renderer
+
Mesh
+
Light
+
Animation Loop
```

Pertemuan 7 menambahkan:

```text
Hierarchy
+
Asset
+
PBR
+
Animation
+
Interaction
+
Environment
```

---

# Slide 04 — Target Pertemuan 7

Mini scene:

```text
Object tampil
```

Interactive application:

```text
Object saling terhubung
+
Asset 3D
+
User Input
+
Feedback
+
Animation
+
Environment
```

Target akhir: scene 3D yang dapat merespons pengguna.

---

# Slide 05 — Apa Itu Scene Graph?

Scene Graph adalah struktur hierarkis untuk mengorganisasi object.

```text
Scene
├── Environment
├── Character
├── Vehicle
└── Lights
```

Scene Graph membantu grouping, transform, traversal, dan organization.

---

# Slide 06 — Scene sebagai Root

```javascript
const scene =
  new THREE.Scene();
```

Scene menjadi root dari hierarchy object yang dirender.

```text
Scene
└── Children
    └── Descendants
```

---

# Slide 07 — Object3D Hierarchy

Object3D dapat memiliki:

```text
parent
children
```

Contoh:

```text
Scene
└── Car
    ├── Body
    ├── Wheel FL
    ├── Wheel FR
    ├── Wheel RL
    └── Wheel RR
```

---

# Slide 08 — Parent dan Child

Menambahkan child:

```javascript
parent.add(
  child
);
```

Setelah itu:

```text
child.parent
=
parent
```

Transform child menjadi relatif terhadap parent.

---

# Slide 09 — Mengapa Hierarchy Penting?

Jika parent bergerak:

```text
Car Translation
```

semua wheel ikut bergerak.

Namun wheel tetap dapat memiliki local rotation sendiri.

Ini penting untuk object kompleks.

---

# Slide 10 — Local Transform

Child memiliki transform relatif terhadap parent.

```text
Car position
= (5,0,0)

Wheel local position
= (1,-0.5,1)
```

Nilai local tidak sama dengan world position.

---

# Slide 11 — World Transform

World transform child merupakan gabungan:

```text
Parent World Transform
×
Child Local Transform
```

Secara konsep:

```text
Child World Matrix
=
Parent Matrix
×
Child Local Matrix
```

---

# Slide 12 — Parent-Child Transform

Jika parent mengalami:

```text
Translation
Rotation
Scale
```

child ikut menerima transform tersebut.

Child kemudian dapat memiliki transform tambahan sendiri.

---

# Slide 13 — Contoh Hierarchy

```text
Sun
└── Earth Orbit
    └── Earth
        └── Moon Orbit
            └── Moon
```

Hierarchy memungkinkan Earth mengorbit Sun dan Moon tetap mengikuti Earth.

---

# Slide 14 — THREE.Group

```javascript
const group =
  new THREE.Group();
```

Group tidak mempunyai geometry sendiri.

Fungsinya: mengelompokkan beberapa Object3D agar dapat ditransformasikan bersama.

---

# Slide 15 — Contoh Group

```javascript
const robot =
  new THREE.Group();

robot.add(body);
robot.add(head);
robot.add(leftArm);
robot.add(rightArm);

scene.add(robot);
```

Seluruh robot dapat dikendalikan sebagai satu unit.

---

# Slide 16 — Transform Group

```javascript
robot.position.x = 2;

robot.rotation.y =
  Math.PI / 4;
```

Semua child menerima transform parent tersebut.

---

# Slide 17 — Scene Graph dan Matrix

Three.js mengelola:

```text
matrix
matrixWorld
```

Secara konseptual:

```text
Local Matrix
   ↓
Parent Matrix
   ↓
World Matrix
```

Ini adalah penerapan transform composition.

---

# Slide 18 — Dari Material Dasar ke PBR

Pertemuan 6 menggunakan material dasar.

Sekarang fokus pada:

# PBR — Physically Based Rendering

Tujuan: menghasilkan respons material terhadap cahaya yang lebih konsisten secara visual.

---

# Slide 19 — MeshStandardMaterial

```javascript
const material =
  new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.4,
    metalness: 0.2
  });
```

Parameter utama:
- color,
- roughness,
- metalness.

---

# Slide 20 — Roughness

```text
roughness = 0
→ permukaan sangat halus

roughness = 1
→ permukaan sangat kasar
```

Roughness mempengaruhi ketajaman highlight dan karakter reflection.

---

# Slide 21 — Metalness

```text
metalness = 0
→ non-metal

metalness = 1
→ metal
```

Material metal berperilaku berbeda terhadap reflection dibanding non-metal.

---

# Slide 22 — Roughness vs Reflection

```text
Low Roughness
→ reflection lebih jelas
→ highlight tajam

High Roughness
→ reflection lebih blur
→ highlight lebih lebar
```

---

# Slide 23 — PBR Membutuhkan Lighting yang Baik

MeshStandardMaterial membutuhkan:
- light,
- environment,
- exposure yang sesuai.

Material metal tanpa environment yang sesuai dapat terlihat terlalu gelap.

---

# Slide 24 — GLTF / GLB

Three.js dapat memuat asset 3D dari file:

```text
GLTF
GLB
```

Format ini umum digunakan pada real-time 3D.

---

# Slide 25 — GLTF vs GLB

GLTF:

```text
.gltf
.bin
texture images
```

GLB:

```text
.glb
```

GLB mengemas asset dalam satu file binary.

---

# Slide 26 — Mengapa GLTF Cocok untuk Web 3D?

GLTF dapat membawa:
- mesh,
- material,
- texture,
- hierarchy,
- animation.

Format ini dirancang untuk distribusi asset 3D yang efisien.

---

# Slide 27 — GLTFLoader

```javascript
import {
  GLTFLoader
}
from
"three/addons/loaders/GLTFLoader.js";

const loader =
  new GLTFLoader();
```

Loader menangani pembacaan GLTF/GLB.

---

# Slide 28 — Memuat Model

```javascript
loader.load(
  "/models/model.glb",
  gltf => {
    scene.add(
      gltf.scene
    );
  }
);
```

Model utama biasanya tersedia melalui `gltf.scene`.

---

# Slide 29 — Loading Bersifat Asynchronous

```text
Request File
   ↓
Loading
   ↓
Decode / Parse
   ↓
Create Three.js Objects
   ↓
Add to Scene
```

Aplikasi perlu menunggu asset selesai dimuat.

---

# Slide 30 — Model Hierarchy

Imported model dapat memiliki hierarchy.

```text
Robot
├── Body
├── Head
├── Arm
└── Legs
```

Hierarchy model dapat diperiksa melalui `gltf.scene`.

---

# Slide 31 — Transform Imported Model

```javascript
model.position.set(
  0, 0, 0
);

model.scale.setScalar(
  1.5
);

model.rotation.y =
  Math.PI;
```

Imported model tetap merupakan bagian dari Object3D hierarchy.

---

# Slide 32 — Shadow pada Imported Model

```javascript
model.traverse(
  child => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  }
);
```

Traversal berguna karena GLTF dapat berisi banyak Mesh.

---

# Slide 33 — Animation dalam GLTF

GLTF dapat menyimpan Animation Clip.

Contoh:
- Idle,
- Walk,
- Run,
- Rotate,
- Open Door.

Clip tersedia pada:

```text
gltf.animations
```

---

# Slide 34 — AnimationMixer

```javascript
const mixer =
  new THREE.AnimationMixer(
    model
  );
```

AnimationMixer mengelola playback animation clip.

---

# Slide 35 — Menjalankan Animation Clip

```javascript
const action =
  mixer.clipAction(
    gltf.animations[0]
  );

action.play();
```

Satu model dapat memiliki beberapa clip.

---

# Slide 36 — Update Animation

```javascript
const delta =
  clock.getDelta();

mixer.update(
  delta
);
```

AnimationMixer harus di-update setiap frame.

---

# Slide 37 — Dari Input 2D ke Object 3D

Mouse menghasilkan screen coordinate, sedangkan object berada di 3D world.

Diperlukan mekanisme untuk menghubungkan keduanya.

Solusi:

# Raycasting

---

# Slide 38 — Raycasting

Raycasting mengirim ray dari camera melalui pointer ke scene.

```text
Camera
            \ Ray
             Object
```

Tujuannya menentukan object yang terkena pointer.

---

# Slide 39 — THREE.Raycaster

```javascript
const raycaster =
  new THREE.Raycaster();

const pointer =
  new THREE.Vector2();
```

Pointer akan disimpan dalam NDC.

---

# Slide 40 — Mouse ke NDC

```javascript
pointer.x =
  (event.clientX /
   window.innerWidth)
  * 2 - 1;

pointer.y =
  -(event.clientY /
    window.innerHeight)
  * 2 + 1;
```

Rentang: `-1 → +1`.

---

# Slide 41 — Membentuk Ray

```javascript
raycaster.setFromCamera(
  pointer,
  camera
);
```

Three.js membentuk ray berdasarkan pointer NDC dan camera.

---

# Slide 42 — Intersection Test

```javascript
const hits =
  raycaster.intersectObjects(
    objects,
    true
  );
```

Jika `hits.length > 0`, ray mengenai object.

---

# Slide 43 — Hover Interaction

```text
Pointer bergerak
    ↓
Raycast
    ↓
Object hit
    ↓
Highlight
```

Feedback dapat berupa color, emissive, scale, atau outline-like effect.

---

# Slide 44 — Click Interaction

```text
Click
  ↓
Raycast
  ↓
Select Object
  ↓
Change State
  ↓
Visual / UI Feedback
```

Contoh: pilih object, ubah warna, tampilkan informasi, atau jalankan animasi.

---

# Slide 45 — Selection State

```javascript
let selectedObject =
  null;
```

Saat object dipilih:
- simpan object,
- tampilkan highlight,
- tampilkan nama,
- update UI.

Interaction membutuhkan state.

---

# Slide 46 — Environment Map

Environment Map merepresentasikan lingkungan sekitar scene.

Digunakan untuk:
- background,
- reflection,
- image-based lighting.

Sangat berguna pada PBR material.

---

# Slide 47 — Background vs Environment

```text
scene.background
→ yang terlihat di belakang scene

scene.environment
→ digunakan material untuk
  reflection / lighting
```

Keduanya dapat menggunakan environment texture yang sama.

---

# Slide 48 — Praktikum: Prototype Persiapan UTS

Mahasiswa membuat interactive 3D scene yang memiliki:
- hierarchy parent-child,
- minimal satu model GLB,
- PBR material,
- shadow,
- minimal satu animation clip,
- raycasting,
- hover interaction,
- click interaction,
- environment map.

Target: prototype awal Interactive Web 3D Project.

---

# Slide 49 — Ringkasan Pertemuan

```text
Scene Graph
    ↓
Hierarchy
    ↓
GLTF / GLB Asset
    ↓
PBR Material
    ↓
AnimationMixer
    ↓
Raycasting
    ↓
Interaction
    ↓
Environment
    ↓
Interactive 3D Application
```

Konsep utama: Scene Graph, parent-child transform, PBR, GLTF/GLB, animation, raycasting, interaction, environment map.

---

# Slide 50 — TERIMA KASIH

# TERIMA KASIH

### Materi Selanjutnya

## UTS — Interactive Web 3D Project
