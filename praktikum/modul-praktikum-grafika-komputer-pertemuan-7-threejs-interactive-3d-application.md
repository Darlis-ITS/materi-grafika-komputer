# Modul Praktikum Grafika Komputer — Pertemuan 7

## Three.js Interactive 3D Application — Prototype Persiapan UTS

**Mata Kuliah:** EF234504 — Grafika Komputer  
**Pertemuan:** 7  
**Topik:** Three.js Interactive 3D Application  
**Dosen:** Dr. Darlis Herumurti  
**Departemen:** Teknik Informatika  

---

# 1. Deskripsi Praktikum

Pada Pertemuan 6, mahasiswa telah membuat mini scene Three.js dengan komponen dasar:

```text
Scene
+
Camera
+
Renderer
+
Geometry
+
Material
+
Mesh
+
Light
+
Shadow
+
Animation Loop
```

Pada Pertemuan 7, scene tersebut dikembangkan menjadi **aplikasi 3D interaktif**.

Komponen baru yang dipelajari:

```text
Scene Graph
+
Parent-Child Hierarchy
+
Group
+
PBR Material
+
GLTF / GLB
+
AnimationMixer
+
Raycasting
+
Hover
+
Click
+
Selection State
+
Environment Map
```

Target praktikum adalah membuat:

# Interactive 3D Prototype

yang sekaligus menjadi **prototype persiapan UTS — Interactive Web 3D Project**.

---

# 2. Capaian Praktikum

Setelah menyelesaikan praktikum, mahasiswa mampu:

1. menjelaskan Scene Graph;
2. membuat hierarchy parent-child;
3. membedakan local transform dan world transform;
4. menggunakan `THREE.Group`;
5. menjelaskan transform composition pada hierarchy;
6. menggunakan `MeshStandardMaterial`;
7. menjelaskan roughness;
8. menjelaskan metalness;
9. memuat model GLTF/GLB menggunakan `GLTFLoader`;
10. memahami loading asynchronous;
11. memeriksa hierarchy model hasil import;
12. menggunakan `traverse()` pada imported model;
13. mengaktifkan shadow pada imported mesh;
14. membaca animation clip dari GLTF;
15. menggunakan `AnimationMixer`;
16. menjalankan animation clip;
17. meng-update animation menggunakan delta time;
18. menjelaskan konsep raycasting;
19. mengubah pointer screen coordinate menjadi NDC;
20. melakukan intersection test;
21. membuat hover interaction;
22. membuat click interaction;
23. menyimpan selection state;
24. memberi visual feedback;
25. menggunakan environment map;
26. membedakan `scene.background` dan `scene.environment`;
27. mengintegrasikan semua komponen menjadi aplikasi 3D interaktif.

---

# 3. Hasil Akhir

Prototype minimum:

```text
Scene
├── Environment
├── Light
├── Ground
├── Hierarchy Demo
│   ├── Parent
│   └── Child
├── Interactive Objects
└── Imported GLB Model
    └── Animation
        ↓
Raycaster
├── Hover
└── Click
        ↓
Selection State
        ↓
Visual + UI Feedback
```

Requirement utama:

- hierarchy parent-child;
- `THREE.Group`;
- PBR material;
- minimal satu model GLB;
- shadow;
- minimal satu animation clip jika asset menyediakannya;
- raycasting;
- hover;
- click;
- selection state;
- visual feedback;
- environment map.

---

# 4. Hubungan dengan Pertemuan 6

Pertemuan 6:

```text
Object tampil
```

Pertemuan 7:

```text
Object terorganisasi
+
Object saling terhubung
+
Asset eksternal
+
Material PBR
+
Animation
+
User Input
+
Feedback
+
Environment
```

Dengan demikian aplikasi bergerak dari:

```text
3D Scene
```

menuju:

```text
Interactive 3D Application
```

---

# 5. Struktur Project

Lanjutkan pola Vite dari Pertemuan 6.

```text
praktikum-threejs-07/
├── index.html
├── package.json
├── public/
│   ├── models/
│   │   └── model.glb
│   └── environment/
│       └── environment.jpg
├── src/
│   ├── main.js
│   └── style.css
└── README.md
```

Untuk modul ini, file GLB dan environment image merupakan **asset yang disiapkan mahasiswa/dosen**.

Asset GLB idealnya:

- memiliki hierarchy;
- memiliki material;
- mempunyai minimal satu animation clip untuk bagian animasi.

Jika asset tidak memiliki animation clip, bagian `AnimationMixer` tetap dipelajari menggunakan asset lain yang memang memiliki clip.

---

# 6. Membuat Project

```bash
npm create vite@latest praktikum-threejs-07 -- --template vanilla
```

Masuk ke project:

```bash
cd praktikum-threejs-07
```

Install dependency:

```bash
npm install
```

Install Three.js:

```bash
npm install three
```

Jalankan:

```bash
npm run dev
```

---

# 7. `index.html`

```html
<!doctype html>
<html lang="id">

<head>
  <meta charset="UTF-8" />

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />

  <title>
    Three.js Interactive 3D Application
  </title>
</head>

<body>

  <div id="app">

    <aside id="hud">

      <h1>
        Interactive 3D Prototype
      </h1>

      <div>
        Hover:
        <span id="hoverInfo">
          -
        </span>
      </div>

      <div>
        Selected:
        <span id="selectedInfo">
          -
        </span>
      </div>

      <div>
        Animation:
        <span id="animationInfo">
          -
        </span>
      </div>

      <div>
        Loading:
        <span id="loadingInfo">
          ready
        </span>
      </div>

    </aside>

  </div>

  <script
    type="module"
    src="/src/main.js">
  </script>

</body>

</html>
```

---

# 8. `style.css`

```css
* {
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;

  margin: 0;
  overflow: hidden;

  font-family:
    Arial,
    sans-serif;

  background: #050816;
}

#app {
  position: relative;

  width: 100%;
  height: 100%;
}

canvas {
  display: block;

  width: 100%;
  height: 100%;
}

#hud {
  position: absolute;
  z-index: 10;

  top: 16px;
  left: 16px;

  min-width: 240px;

  padding: 14px;

  color: #e5eefb;

  background:
    rgba(
      7,
      17,
      31,
      0.82
    );

  border:
    1px solid
    rgba(
      56,
      189,
      248,
      0.35
    );

  border-radius: 8px;

  pointer-events: none;
}

#hud h1 {
  margin:
    0 0 10px;

  font-size: 16px;
}

#hud div {
  margin-top: 5px;
}
```

---

# 9. Import Three.js dan Add-ons

Pada `main.js`:

```javascript
import * as THREE
  from "three";

import {
  GLTFLoader
}
from
  "three/addons/loaders/GLTFLoader.js";

import "./style.css";
```

`GLTFLoader` bukan bagian dari namespace utama `THREE`, sehingga di-import dari add-ons.

---

# 10. Scene Dasar

```javascript
const app =
  document.getElementById(
    "app"
  );

const scene =
  new THREE.Scene();

scene.background =
  new THREE.Color(
    0x0b1020
  );
```

---

# 11. HUD Reference

```javascript
const hoverInfo =
  document.getElementById(
    "hoverInfo"
  );

const selectedInfo =
  document.getElementById(
    "selectedInfo"
  );

const animationInfo =
  document.getElementById(
    "animationInfo"
  );

const loadingInfo =
  document.getElementById(
    "loadingInfo"
  );
```

---

# 12. Camera

```javascript
const sizes = {
  width:
    window.innerWidth,

  height:
    window.innerHeight
};

const camera =
  new THREE.PerspectiveCamera(
    60,
    sizes.width /
      sizes.height,
    0.1,
    100
  );

camera.position.set(
  5,
  3.5,
  7
);

camera.lookAt(
  0,
  1,
  0
);

scene.add(
  camera
);
```

---

# 13. Renderer

```javascript
const renderer =
  new THREE.WebGLRenderer({
    antialias: true
  });

renderer.setSize(
  sizes.width,
  sizes.height
);

renderer.setPixelRatio(
  Math.min(
    window.devicePixelRatio,
    2
  )
);

renderer.shadowMap.enabled =
  true;

app.appendChild(
  renderer.domElement
);
```

---

# 14. Lighting

PBR material membutuhkan lighting yang baik.

Tambahkan pencahayaan dasar:

```javascript
const ambientLight =
  new THREE.AmbientLight(
    0xffffff,
    0.45
  );

scene.add(
  ambientLight
);

const directionalLight =
  new THREE.DirectionalLight(
    0xffffff,
    2.5
  );

directionalLight
  .position
  .set(
    4,
    7,
    4
  );

directionalLight.castShadow =
  true;

scene.add(
  directionalLight
);
```

---

# 15. Ground

```javascript
const groundGeometry =
  new THREE.PlaneGeometry(
    20,
    20
  );

groundGeometry.rotateX(
  -Math.PI / 2
);

const groundMaterial =
  new THREE.MeshStandardMaterial({
    color: 0x263449,
    roughness: 0.85,
    metalness: 0.0
  });

const ground =
  new THREE.Mesh(
    groundGeometry,
    groundMaterial
  );

ground.receiveShadow =
  true;

scene.add(
  ground
);
```

---

# 16. Scene Graph

Scene Graph merupakan hierarchy object:

```text
Scene
├── Ground
├── Light
├── Group
│   ├── Child A
│   └── Child B
└── Imported Model
```

Setiap `Object3D` dapat mempunyai:

```text
parent
children
```

Contoh:

```javascript
parent.add(
  child
);
```

Setelah itu:

```javascript
child.parent
```

mengarah ke parent tersebut.

---

# 17. Local dan World Transform

Jika:

```text
Parent position = (3,0,0)
Child local position = (1,0,0)
```

maka child tidak berarti berada pada world position `(1,0,0)`.

Transform world child merupakan hasil komposisi:

```text
Parent World Transform
×
Child Local Transform
```

Secara konseptual:

```text
matrixWorld(child)
=
matrixWorld(parent)
×
matrix(child)
```

---

# 18. Membuat Hierarchy Demo

Buat parent:

```javascript
const hierarchyGroup =
  new THREE.Group();

hierarchyGroup.name =
  "Hierarchy Demo";

scene.add(
  hierarchyGroup
);
```

Tambahkan body:

```javascript
const body =
  new THREE.Mesh(
    new THREE.BoxGeometry(
      1.6,
      0.6,
      1.0
    ),

    new THREE.MeshStandardMaterial({
      color: 0x0ea5e9,
      roughness: 0.45,
      metalness: 0.15
    })
  );

body.position.y =
  0.8;

body.castShadow =
  true;

hierarchyGroup.add(
  body
);
```

---

# 19. Child Object

Tambahkan child ke body:

```javascript
const child =
  new THREE.Mesh(
    new THREE.BoxGeometry(
      0.45,
      0.45,
      0.45
    ),

    new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      roughness: 0.3,
      metalness: 0.1
    })
  );

child.name =
  "Child Object";

child.position.set(
  1.0,
  0,
  0
);

child.castShadow =
  true;

body.add(
  child
);
```

Hierarchy:

```text
Scene
└── hierarchyGroup
    └── body
        └── child
```

---

# 20. Menguji Parent-Child Transform

Gerakkan parent:

```javascript
hierarchyGroup.position.x =
  -2.5;
```

Rotate:

```javascript
hierarchyGroup.rotation.y =
  Math.PI / 6;
```

Child ikut menerima transform parent.

Namun child tetap dapat memiliki transform lokal:

```javascript
child.rotation.z =
  Math.PI / 4;
```

---

# 21. Membaca World Position

Buat vector:

```javascript
const worldPosition =
  new THREE.Vector3();
```

Kemudian:

```javascript
child.getWorldPosition(
  worldPosition
);

console.log(
  "Child local:",
  child.position
);

console.log(
  "Child world:",
  worldPosition
);
```

Tujuan eksperimen:

> melihat langsung bahwa local position dan world position dapat berbeda.

---

# 22. `THREE.Group`

`Group` tidak mempunyai geometry.

Fungsinya:

```text
mengelompokkan Object3D
+
memberi transform bersama
```

Contoh konseptual:

```text
Robot Group
├── Body
├── Head
├── Left Arm
└── Right Arm
```

Jika `Robot Group` bergerak, semua bagian ikut bergerak.

---

# 23. PBR dengan MeshStandardMaterial

Buat object interaktif:

```javascript
const pbrGeometry =
  new THREE.SphereGeometry(
    0.7,
    48,
    24
  );

const pbrMaterial =
  new THREE.MeshStandardMaterial({
    color: 0x22c55e,
    roughness: 0.25,
    metalness: 0.1
  });

const pbrSphere =
  new THREE.Mesh(
    pbrGeometry,
    pbrMaterial
  );

pbrSphere.name =
  "PBR Sphere";

pbrSphere.position.set(
  0,
  0.8,
  0
);

pbrSphere.castShadow =
  true;

scene.add(
  pbrSphere
);
```

---

# 24. Roughness

Roughness:

```text
0
→ sangat halus

1
→ sangat kasar
```

Coba:

```javascript
pbrMaterial.roughness =
  0.05;
```

kemudian:

```javascript
pbrMaterial.roughness =
  0.9;
```

Amati karakter highlight/reflection.

---

# 25. Metalness

Metalness:

```text
0
→ non-metal

1
→ metal
```

Eksperimen:

```javascript
pbrMaterial.metalness =
  0.0;
```

dan:

```javascript
pbrMaterial.metalness =
  1.0;
```

Material metal sangat dipengaruhi lingkungan/reflection.

---

# 26. Roughness × Metalness

Lakukan perbandingan:

| Mode | Roughness | Metalness |
|---|---:|---:|
| A | 0.1 | 0.0 |
| B | 0.8 | 0.0 |
| C | 0.1 | 1.0 |
| D | 0.8 | 1.0 |

Tujuan:

> memahami bahwa PBR material ditentukan oleh kombinasi parameter, bukan hanya warna.

---

# 27. GLTF dan GLB

GLTF dapat membawa:

```text
Mesh
Material
Texture
Hierarchy
Animation
```

GLTF dapat terdiri dari beberapa file.

GLB mengemas asset ke satu file binary:

```text
model.glb
```

Pada praktikum ini gunakan GLB agar distribusi asset sederhana.

---

# 28. Menyiapkan GLB

Letakkan file:

```text
public/
└── models/
    └── model.glb
```

Dengan Vite, file di dalam `public` dapat diakses dari root URL:

```text
/models/model.glb
```

---

# 29. Membuat GLTFLoader

```javascript
const loader =
  new GLTFLoader();
```

Siapkan state:

```javascript
let importedModel =
  null;

let mixer =
  null;

let activeAction =
  null;
```

---

# 30. Loading Bersifat Asynchronous

Pemanggilan:

```javascript
loader.load(...)
```

tidak berarti model langsung tersedia pada baris berikutnya.

Alur:

```text
Request
↓
Download
↓
Parse
↓
Create Three.js Objects
↓
Callback
```

Karena itu logic yang membutuhkan model sebaiknya dijalankan setelah model tersedia.

---

# 31. Memuat GLB

```javascript
loadingInfo.textContent =
  "loading model...";

loader.load(
  "/models/model.glb",

  gltf => {
    importedModel =
      gltf.scene;

    importedModel.name =
      "Imported GLB";

    importedModel.position.set(
      2.4,
      0,
      0
    );

    importedModel.scale.setScalar(
      1.2
    );

    scene.add(
      importedModel
    );

    loadingInfo.textContent =
      "model loaded";
  },

  progress => {
    if (
      progress.total > 0
    ) {
      const percent =
        progress.loaded /
        progress.total *
        100;

      loadingInfo.textContent =
        `${percent.toFixed(0)}%`;
    }
  },

  error => {
    console.error(
      "GLTF loading error:",
      error
    );

    loadingInfo.textContent =
      "load failed";
  }
);
```

---

# 32. Transform Imported Model

Model hasil import tetap `Object3D`.

Contoh:

```javascript
importedModel.position.set(
  2,
  0,
  0
);

importedModel.rotation.y =
  Math.PI;

importedModel.scale.setScalar(
  1.5
);
```

Nilai yang tepat bergantung pada ukuran dan orientasi asset.

---

# 33. Memeriksa Hierarchy Model

Setelah loading:

```javascript
console.log(
  importedModel
);
```

atau:

```javascript
importedModel.traverse(
  object => {
    console.log(
      object.name,
      object.type
    );
  }
);
```

Imported GLB dapat berisi hierarchy yang lebih kompleks daripada satu Mesh.

---

# 34. Mengaktifkan Shadow pada GLB

```javascript
importedModel.traverse(
  child => {
    if (
      child.isMesh
    ) {
      child.castShadow =
        true;

      child.receiveShadow =
        true;
    }
  }
);
```

Mengapa `traverse()`?

Karena:

```text
gltf.scene
```

dapat memiliki banyak descendant Mesh.

---

# 35. Animation Clip

Setelah GLB dimuat:

```javascript
console.log(
  gltf.animations
);
```

Clip dapat memiliki nama seperti:

```text
Idle
Walk
Run
Open
Rotate
```

Nama tergantung asset.

---

# 36. Membuat AnimationMixer

Jika clip tersedia:

```javascript
if (
  gltf.animations.length > 0
) {
  mixer =
    new THREE.AnimationMixer(
      importedModel
    );

  activeAction =
    mixer.clipAction(
      gltf.animations[0]
    );

  activeAction.play();

  animationInfo.textContent =
    gltf.animations[0].name
    || "Clip 0";
}
```

---

# 37. Mengapa AnimationMixer?

`AnimationMixer` mengelola playback animation pada root object.

Secara sederhana:

```text
Animation Clip
      ↓
AnimationMixer
      ↓
Object Properties / Bones
      ↓
Animated Model
```

---

# 38. Update Mixer

Dalam animation loop:

```javascript
if (mixer) {
  mixer.update(
    delta
  );
}
```

Tanpa update:

```text
clip sudah play
```

tetapi waktu animasi tidak maju dengan benar.

---

# 39. Clock dan Delta Time

```javascript
const clock =
  new THREE.Clock();
```

Pada setiap frame:

```javascript
const delta =
  Math.min(
    clock.getDelta(),
    0.05
  );
```

Gunakan delta untuk:

- `mixer.update(delta)`;
- rotation;
- movement;
- animasi procedural.

---

# 40. Raycasting — Konsep

Pointer berasal dari layar 2D:

```text
mouse x
mouse y
```

Object berada di dunia 3D.

Raycasting menghubungkan keduanya:

```text
Pointer
↓
NDC
↓
Camera
↓
Ray
↓
Scene Object
↓
Intersection
```

---

# 41. Membuat Raycaster

```javascript
const raycaster =
  new THREE.Raycaster();

const pointer =
  new THREE.Vector2();
```

---

# 42. Mengapa Pointer Harus ke NDC?

Raycaster menggunakan pointer dalam **Normalized Device Coordinates**:

```text
X: -1 ... +1
Y: -1 ... +1
```

Sementara browser memberikan:

```text
event.clientX
event.clientY
```

dalam pixel.

---

# 43. Pointer ke NDC — Versi Canvas-Aware

Untuk aplikasi full-window, rumus sederhana dari slide dapat menggunakan ukuran window.

Agar lebih robust jika Canvas tidak memenuhi seluruh window, gunakan bounding rectangle:

```javascript
function updatePointer(
  event
) {
  const rect =
    renderer
      .domElement
      .getBoundingClientRect();

  pointer.x =
    (
      (
        event.clientX -
        rect.left
      )
      /
      rect.width
    ) * 2 - 1;

  pointer.y =
    -(
      (
        event.clientY -
        rect.top
      )
      /
      rect.height
    ) * 2 + 1;
}
```

Konsepnya tetap sama:

```text
screen coordinate
→ NDC
```

---

# 44. Membentuk Ray

```javascript
raycaster.setFromCamera(
  pointer,
  camera
);
```

Three.js membentuk ray dari camera melalui posisi pointer.

---

# 45. Object yang Interaktif

Jangan raycast semua object jika tidak diperlukan.

Buat daftar:

```javascript
const interactiveObjects =
  [];
```

Tambahkan:

```javascript
interactiveObjects.push(
  pbrSphere
);
```

Imported model dapat ditambahkan setelah loading.

---

# 46. Intersection Test

```javascript
const hits =
  raycaster.intersectObjects(
    interactiveObjects,
    true
  );
```

Parameter:

```text
true
```

berarti pencarian recursive ke descendant.

Ini penting untuk GLB yang memiliki hierarchy.

---

# 47. Masalah Penting: Hit Child Mesh

Jika raycast dilakukan terhadap imported model secara recursive:

```javascript
hits[0].object
```

sering kali merupakan **child Mesh**, bukan root `gltf.scene`.

Karena itu aplikasi perlu menentukan object mana yang dianggap sebagai satu selectable entity.

---

# 48. Menandai Selectable Root

Saat model selesai dimuat:

```javascript
importedModel.userData.selectable =
  true;

importedModel.userData.label =
  "Imported Model";
```

Untuk primitive:

```javascript
pbrSphere.userData.selectable =
  true;

pbrSphere.userData.label =
  "PBR Sphere";
```

---

# 49. Mencari Selectable Parent

```javascript
function findSelectableRoot(
  object
) {
  let current =
    object;

  while (
    current
  ) {
    if (
      current.userData
        .selectable
    ) {
      return current;
    }

    current =
      current.parent;
  }

  return null;
}
```

Dengan ini child mesh dari GLB dapat dipetakan kembali ke selectable root.

---

# 50. Hover State

```javascript
let hoveredObject =
  null;
```

Hover berarti:

```text
pointer sedang berada di atas object
```

Hover bukan selection permanen.

---

# 51. Selection State

```javascript
let selectedObject =
  null;
```

Click akan mengubah selection.

Perbedaan:

```text
Hover
→ sementara mengikuti pointer

Selected
→ bertahan setelah click
```

---

# 52. Visual Feedback yang Aman

Untuk primitive dengan material sendiri, kita dapat mengubah emissive jika material mendukungnya.

Namun imported GLB dapat memiliki banyak mesh/material.

Agar tidak merusak material asset, pada baseline kita menggunakan **scale feedback** untuk selectable root.

Simpan scale asli:

```javascript
function registerSelectable(
  object,
  label
) {
  object.userData.selectable =
    true;

  object.userData.label =
    label;

  object.userData.baseScale =
    object.scale.clone();

  interactiveObjects.push(
    object
  );
}
```

---

# 53. Menerapkan Scale Feedback

```javascript
function applyVisualState(
  object
) {
  if (!object) {
    return;
  }

  const base =
    object.userData
      .baseScale;

  if (!base) {
    return;
  }

  let factor =
    1.0;

  if (
    object ===
    selectedObject
  ) {
    factor =
      1.12;
  }
  else if (
    object ===
    hoveredObject
  ) {
    factor =
      1.06;
  }

  object.scale.set(
    base.x * factor,
    base.y * factor,
    base.z * factor
  );
}
```

---

# 54. Reset Visual State

Saat hover/selection berubah, reset object lama:

```javascript
function restoreScale(
  object
) {
  if (
    !object ||
    !object.userData.baseScale
  ) {
    return;
  }

  object.scale.copy(
    object.userData
      .baseScale
  );
}
```

---

# 55. Hover Interaction

```javascript
renderer
  .domElement
  .addEventListener(
    "pointermove",
    event => {
      updatePointer(
        event
      );

      raycaster.setFromCamera(
        pointer,
        camera
      );

      const hits =
        raycaster.intersectObjects(
          interactiveObjects,
          true
        );

      const nextHover =
        hits.length > 0
          ? findSelectableRoot(
              hits[0].object
            )
          : null;

      if (
        nextHover !==
        hoveredObject
      ) {
        restoreScale(
          hoveredObject
        );

        hoveredObject =
          nextHover;

        applyVisualState(
          hoveredObject
        );
      }

      hoverInfo.textContent =
        hoveredObject
          ? hoveredObject
              .userData
              .label
          : "-";
    }
  );
```

---

# 56. Click Interaction

```javascript
renderer
  .domElement
  .addEventListener(
    "click",
    event => {
      updatePointer(
        event
      );

      raycaster.setFromCamera(
        pointer,
        camera
      );

      const hits =
        raycaster.intersectObjects(
          interactiveObjects,
          true
        );

      restoreScale(
        selectedObject
      );

      selectedObject =
        hits.length > 0
          ? findSelectableRoot(
              hits[0].object
            )
          : null;

      applyVisualState(
        hoveredObject
      );

      applyVisualState(
        selectedObject
      );

      selectedInfo.textContent =
        selectedObject
          ? selectedObject
              .userData
              .label
          : "-";
    }
  );
```

---

# 57. Mengapa Interaction Membutuhkan State?

Tanpa state, aplikasi hanya mengetahui event sesaat.

Dengan:

```javascript
let hoveredObject;
let selectedObject;
```

aplikasi dapat mengingat:

```text
object yang sedang ditunjuk
object yang sedang dipilih
```

State kemudian digunakan untuk menentukan:

- visual feedback;
- UI;
- animasi;
- aksi lanjutan.

---

# 58. Register Primitive sebagai Selectable

Setelah membuat `pbrSphere`:

```javascript
registerSelectable(
  pbrSphere,
  "PBR Sphere"
);
```

Untuk hierarchy demo, misalnya:

```javascript
registerSelectable(
  hierarchyGroup,
  "Hierarchy Group"
);
```

---

# 59. Register Imported Model

Di dalam callback GLTF:

```javascript
registerSelectable(
  importedModel,
  "Imported GLB"
);
```

Karena raycast menggunakan:

```javascript
recursive = true
```

child Mesh tetap dapat terkena ray.

`findSelectableRoot()` mengembalikannya ke root yang kita tandai.

---

# 60. Environment Map — Konsep

Environment map dapat digunakan untuk:

```text
Background
Reflection
Image-Based Lighting
```

Pada PBR material, environment sangat penting terutama ketika metalness tinggi.

---

# 61. Background vs Environment

```javascript
scene.background =
  texture;
```

berarti texture terlihat sebagai latar.

Sedangkan:

```javascript
scene.environment =
  texture;
```

berarti texture digunakan material sebagai environment untuk reflection/lighting.

Keduanya dapat menggunakan sumber yang sama.

---

# 62. Baseline Environment Tanpa File Eksternal

Agar project tetap dapat berjalan walaupun HDR/environment asset belum tersedia, buat environment procedural sederhana menggunakan `RoomEnvironment`.

Tambahkan import:

```javascript
import {
  RoomEnvironment
}
from
  "three/addons/environments/RoomEnvironment.js";
```

Kemudian:

```javascript
const pmremGenerator =
  new THREE.PMREMGenerator(
    renderer
  );

const environment =
  pmremGenerator
    .fromScene(
      new RoomEnvironment(),
      0.04
    )
    .texture;

scene.environment =
  environment;
```

Ini menyediakan environment lighting untuk PBR.

---

# 63. Background Tetap Dapat Berbeda

Kita dapat mempertahankan:

```javascript
scene.background =
  new THREE.Color(
    0x0b1020
  );
```

sementara:

```javascript
scene.environment =
  environment;
```

menggunakan environment map.

Ini menunjukkan dengan jelas perbedaan:

```text
background
vs
environment
```

---

# 64. Optional: Environment Image

Jika ingin menggunakan image/environment asset yang disediakan:

```javascript
const textureLoader =
  new THREE.TextureLoader();

textureLoader.load(
  "/environment/environment.jpg",
  texture => {
    texture.mapping =
      THREE.EquirectangularReflectionMapping;

    scene.background =
      texture;

    scene.environment =
      texture;
  }
);
```

Gunakan asset yang memang sesuai sebagai environment panorama/equirectangular.

Baseline `RoomEnvironment` lebih aman untuk memastikan praktikum dapat berjalan tanpa file environment tambahan.

---

# 65. PBR dan Environment

Setelah environment aktif, bandingkan:

```javascript
pbrMaterial.metalness =
  0.0;
```

dan:

```javascript
pbrMaterial.metalness =
  1.0;
```

Kemudian matikan sementara:

```javascript
scene.environment =
  null;
```

Amati terutama material metal.

---

# 66. Animation Loop Terintegrasi

```javascript
const clock =
  new THREE.Clock();

function animate() {
  requestAnimationFrame(
    animate
  );

  const delta =
    Math.min(
      clock.getDelta(),
      0.05
    );

  if (mixer) {
    mixer.update(
      delta
    );
  }

  hierarchyGroup.rotation.y +=
    0.25 * delta;

  child.rotation.x +=
    1.2 * delta;

  renderer.render(
    scene,
    camera
  );
}

animate();
```

---

# 67. Responsive Rendering

```javascript
window.addEventListener(
  "resize",
  () => {
    sizes.width =
      window.innerWidth;

    sizes.height =
      window.innerHeight;

    camera.aspect =
      sizes.width /
      sizes.height;

    camera
      .updateProjectionMatrix();

    renderer.setSize(
      sizes.width,
      sizes.height
    );

    renderer.setPixelRatio(
      Math.min(
        window.devicePixelRatio,
        2
      )
    );
  }
);
```

Konsep ini merupakan kelanjutan langsung Pertemuan 6.

---

# 68. Urutan Implementasi yang Disarankan

Jangan langsung membuat seluruh fitur sekaligus.

Gunakan urutan:

```text
Scene Dasar
↓
Hierarchy
↓
PBR
↓
GLB Loading
↓
Shadow
↓
AnimationMixer
↓
Raycaster
↓
Hover
↓
Click
↓
Selection State
↓
Environment
↓
Integration
```

Setiap tahap harus diuji sebelum masuk tahap berikutnya.

---

# 69. Milestone 1 — Scene Dasar

Buat:

- Scene;
- Camera;
- Renderer;
- Light;
- Ground;
- responsive resize.

Target:

> fondasi Pertemuan 6 berjalan tanpa error.

---

# 70. Milestone 2 — Scene Graph

Buat hierarchy:

```text
Group
└── Parent Mesh
    └── Child Mesh
```

Target:

> child mengikuti transform parent.

---

# 71. Milestone 3 — Local vs World

Tampilkan pada Console:

```text
child.position
child.getWorldPosition(...)
```

Target:

> mahasiswa dapat menunjukkan perbedaan local dan world transform.

---

# 72. Milestone 4 — PBR Material

Buat minimal satu:

```javascript
THREE.MeshStandardMaterial
```

Eksperimen roughness dan metalness.

Target:

> perbedaan karakter permukaan terlihat.

---

# 73. Milestone 5 — GLB

Load:

```text
/models/model.glb
```

Target:

- model tampil;
- dapat di-transform;
- hierarchy dapat di-traverse;
- mesh dapat cast/receive shadow.

---

# 74. Milestone 6 — Animation

Jika GLB mempunyai clip:

```text
AnimationMixer
+
clipAction()
+
play()
+
mixer.update(delta)
```

Target:

> minimal satu clip berjalan.

---

# 75. Milestone 7 — Raycasting

Buat:

```text
Raycaster
+
Pointer NDC
+
setFromCamera()
+
intersectObjects()
```

Target:

> Console dapat menunjukkan object yang terkena pointer.

---

# 76. Milestone 8 — Hover

Tambahkan:

```text
pointermove
→ raycast
→ hoveredObject
→ visual feedback
```

Target:

> object memberi respons ketika pointer berada di atasnya.

---

# 77. Milestone 9 — Click Selection

Tambahkan:

```text
click
→ raycast
→ selectedObject
→ persistent feedback
→ HUD
```

Target:

> selection tetap tersimpan setelah pointer bergerak.

---

# 78. Milestone 10 — Environment

Aktifkan:

```text
scene.environment
```

Target:

> PBR material mendapat environment response.

Jika asset environment tersedia, dapat pula digunakan sebagai background.

---

# 79. Eksperimen Wajib 1 — Parent-Child

Set:

```javascript
hierarchyGroup.position.x =
  -2;

child.position.x =
  1;
```

Kemudian rotate parent.

Jawab:

1. apakah local position child berubah?
2. apakah world position child berubah?
3. mengapa?

---

# 80. Eksperimen Wajib 2 — Transform Composition

Berikan parent:

```text
translation
+
rotation
+
scale
```

dan child:

```text
local rotation
```

Amati hasil akhir.

Hubungkan dengan:

```text
Child World Matrix
=
Parent World Matrix
×
Child Local Matrix
```

---

# 81. Eksperimen Wajib 3 — Group

Buat minimal tiga Mesh di dalam satu `THREE.Group`.

Gerakkan Group.

Kemudian gerakkan salah satu child.

Jelaskan:

> kapan lebih tepat mentransform Group dan kapan mentransform child?

---

# 82. Eksperimen Wajib 4 — Roughness

Bandingkan:

```text
0.05
0.3
0.7
1.0
```

dengan metalness tetap.

Amati perubahan highlight/reflection.

---

# 83. Eksperimen Wajib 5 — Metalness

Bandingkan:

```text
0
0.5
1
```

dengan roughness tetap.

Amati bagaimana environment mempengaruhi hasil.

---

# 84. Eksperimen Wajib 6 — Environment

Bandingkan:

```javascript
scene.environment =
  environment;
```

dengan:

```javascript
scene.environment =
  null;
```

Gunakan object dengan:

```text
metalness tinggi
```

Jawab:

> mengapa environment penting bagi PBR, terutama material metal?

---

# 85. Eksperimen Wajib 7 — GLB Hierarchy

Gunakan:

```javascript
importedModel.traverse(...)
```

Catat:

- nama root;
- jumlah object secara sederhana;
- beberapa Mesh yang ditemukan;
- apakah model mempunyai hierarchy bertingkat.

---

# 86. Eksperimen Wajib 8 — Animation Clip

Tampilkan:

```javascript
console.log(
  gltf.animations
);
```

Catat:

- jumlah clip;
- nama clip;
- clip yang dijalankan.

Jika model mempunyai beberapa clip, coba mengganti clip aktif.

---

# 87. Eksperimen Wajib 9 — Recursive Raycast

Bandingkan:

```javascript
raycaster.intersectObjects(
  interactiveObjects,
  false
);
```

dan:

```javascript
raycaster.intersectObjects(
  interactiveObjects,
  true
);
```

Gunakan imported GLB yang memiliki child Mesh.

Jelaskan mengapa `true` sering diperlukan.

---

# 88. Eksperimen Wajib 10 — Hover vs Click

Implementasikan:

```text
Hover
→ feedback sementara

Click
→ selection persistent
```

Jawab:

> mengapa keduanya sebaiknya memiliki state berbeda?

---

# 89. Eksperimen Wajib 11 — Pointer Coordinate

Tampilkan sementara:

```javascript
console.log(
  pointer.x,
  pointer.y
);
```

Gerakkan pointer ke:

- kiri atas;
- tengah;
- kanan bawah.

Pastikan nilai mendekati rentang:

```text
-1 ... +1
```

---

# 90. Eksperimen Wajib 12 — Feedback Visual

Gunakan minimal dua feedback:

```text
Hover
→ scale 1.06

Selected
→ scale 1.12 + HUD
```

Boleh dikembangkan menjadi:

- emissive;
- color;
- outline-like helper;
- UI panel.

---

# 91. Tugas Utama Praktikum

Bangun:

# Interactive Web 3D Prototype

Requirement minimum:

- [ ] Node.js + Vite + Three.js;
- [ ] Scene;
- [ ] PerspectiveCamera;
- [ ] WebGLRenderer;
- [ ] responsive rendering;
- [ ] ground;
- [ ] lighting;
- [ ] shadow;
- [ ] minimal satu `THREE.Group`;
- [ ] hierarchy parent-child;
- [ ] local transform;
- [ ] world transform dapat didemonstrasikan;
- [ ] minimal satu `MeshStandardMaterial`;
- [ ] roughness digunakan;
- [ ] metalness digunakan;
- [ ] minimal satu model GLB;
- [ ] `GLTFLoader`;
- [ ] asynchronous loading ditangani;
- [ ] imported hierarchy di-traverse;
- [ ] imported mesh menggunakan shadow;
- [ ] minimal satu animation clip **jika asset menyediakan clip**;
- [ ] `AnimationMixer` untuk asset animasi;
- [ ] `mixer.update(delta)`;
- [ ] `THREE.Raycaster`;
- [ ] pointer NDC;
- [ ] recursive intersection;
- [ ] hover interaction;
- [ ] click interaction;
- [ ] selection state;
- [ ] visual feedback;
- [ ] HUD selection;
- [ ] environment map/environment lighting;
- [ ] animation loop;
- [ ] delta time;
- [ ] tidak ada error Console pada penggunaan normal;
- [ ] minimal dua challenge.

---

# 92. Challenge A — Multiple Animation Clips

Jika model mempunyai beberapa clip, buat tombol keyboard:

```text
1 → Idle
2 → Walk
3 → Run
```

Saat berpindah, hentikan/fade action lama dan jalankan action baru.

Tujuan:

> memahami bahwa satu `AnimationMixer` dapat mengelola beberapa `AnimationAction`.

---

# 93. Challenge B — Click Menjalankan Animasi

Saat imported model diklik:

```text
Click
↓
Select
↓
Play animation
```

Contoh aplikasi:

- open door;
- rotate;
- action animation;
- character gesture.

---

# 94. Challenge C — Information Panel

Saat object dipilih, tampilkan:

```text
Name
Position
Rotation
Scale
Material Type
```

Jika object merupakan imported model, tampilkan label root yang sudah dibuat.

---

# 95. Challenge D — Hierarchical Solar System

Buat:

```text
Sun
└── Earth Orbit
    └── Earth
        └── Moon Orbit
            └── Moon
```

Gunakan hierarchy, bukan menghitung semua world position secara manual.

---

# 96. Challenge E — PBR Material Gallery

Buat grid sphere:

```text
Roughness →
Metalness ↓
```

Misalnya:

```text
roughness:
0.1, 0.5, 0.9

metalness:
0, 0.5, 1
```

Tujuan:

> melihat hubungan parameter PBR secara visual.

---

# 97. Challenge F — Hover Emissive

Untuk material yang mendukung `emissive`, simpan warna asli lalu ubah saat hover.

Pastikan material imported tidak dimodifikasi secara destruktif jika material dipakai bersama oleh beberapa mesh.

---

# 98. Challenge G — Selection Rotation

Saat object selected:

```text
selectedObject
→ rotate perlahan
```

Gunakan delta time.

Saat deselect:

```text
rotation tambahan berhenti
```

---

# 99. Challenge H — Environment Toggle

Tambahkan:

```text
E
→ Environment ON/OFF
```

HUD menampilkan:

```text
Environment: ON
```

atau:

```text
Environment: OFF
```

Gunakan untuk membandingkan respons PBR.

---

# 100. Debugging — GLB Tidak Muncul

Periksa:

1. file ada di `public/models/`;
2. URL `/models/model.glb` benar;
3. callback success terpanggil;
4. Console memiliki error?;
5. scale model terlalu kecil/besar?;
6. model berada jauh dari camera?;
7. orientasi model?;
8. material membutuhkan environment/light?;
9. camera menghadap model?

---

# 101. Debugging — 404 Model

Jika:

```text
404 /models/model.glb
```

pastikan struktur:

```text
public/
└── models/
    └── model.glb
```

dan load dengan:

```javascript
loader.load(
  "/models/model.glb",
  ...
);
```

---

# 102. Debugging — Animasi Tidak Bergerak

Periksa:

```text
gltf.animations.length > 0?
mixer dibuat?
clipAction dibuat?
action.play()?
mixer.update(delta)?
```

Jika asset tidak memiliki animation clip, `AnimationMixer` tidak dapat menciptakan clip yang tidak ada.

---

# 103. Debugging — Shadow GLB Tidak Ada

Pastikan:

```javascript
importedModel.traverse(
  child => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  }
);
```

Juga periksa:

```text
renderer.shadowMap.enabled
directionalLight.castShadow
```

---

# 104. Debugging — Raycast Tidak Mengenai GLB

Periksa:

1. model sudah selesai loading?
2. model sudah masuk `interactiveObjects`?
3. pointer NDC benar?
4. camera yang digunakan benar?
5. recursive raycast `true`?
6. Canvas coordinate dihitung dengan benar?

---

# 105. Debugging — Object Child Terpilih, Bukan Model

Ini normal pada GLB kompleks.

Raycaster mengembalikan Mesh yang benar-benar terkena ray.

Gunakan:

```javascript
findSelectableRoot(
  hits[0].object
);
```

untuk mencari root entity yang ingin dipilih.

---

# 106. Debugging — Hover dan Selection Bertabrakan

Gunakan dua state:

```javascript
hoveredObject
selectedObject
```

Tetapkan prioritas visual:

```text
Selected
>
Hovered
>
Normal
```

Jangan menyimpan hanya satu variabel untuk dua konsep yang berbeda.

---

# 107. Debugging — PBR Metal Terlalu Gelap

Periksa:

- light;
- environment;
- exposure/scene brightness;
- roughness;
- metalness.

Materi menekankan bahwa material metal tanpa environment yang sesuai dapat terlihat terlalu gelap.

---

# 108. Debugging — Environment Tidak Terlihat sebagai Background

Ingat:

```javascript
scene.environment =
  environment;
```

tidak otomatis berarti environment harus terlihat sebagai background.

Konsepnya berbeda:

```text
scene.background
→ visible backdrop

scene.environment
→ material environment
```

---

# 109. Debugging — Local dan World Position Sama

Jika parent belum memiliki transform, local dan world dapat kebetulan sama.

Ubah parent:

```javascript
parent.position.x =
  3;

parent.rotation.y =
  Math.PI / 4;
```

kemudian bandingkan lagi.

---

# 110. Test Case

| No. | Pengujian | Hasil yang Diharapkan |
|---:|---|---|
| 1 | Project load | Scene tampil |
| 2 | Hierarchy | Child mengikuti parent |
| 3 | Local transform | Child dapat bergerak relatif terhadap parent |
| 4 | World position | Berbeda ketika parent ditransform |
| 5 | Group transform | Semua child ikut |
| 6 | PBR | Roughness/metalness berpengaruh |
| 7 | GLB load | Model tampil |
| 8 | GLB hierarchy | `traverse()` menemukan descendant |
| 9 | GLB shadow | Mesh menghasilkan/menerima shadow |
| 10 | Animation | Clip berjalan jika tersedia |
| 11 | Mixer update | Animasi maju setiap frame |
| 12 | Pointer NDC | Nilai -1 sampai +1 |
| 13 | Raycast | Object dapat dideteksi |
| 14 | Hover | Feedback sementara muncul |
| 15 | Click | Object menjadi selected |
| 16 | Selection state | Tetap setelah pointer berpindah |
| 17 | HUD | Nama object tampil |
| 18 | Environment | PBR mendapat environment response |
| 19 | Resize | Scene tidak terdistorsi |
| 20 | Console | Tidak ada error normal |

---

# 111. Pertanyaan Pemahaman

Jawab dengan kalimat sendiri.

1. Apa itu Scene Graph?
2. Mengapa Scene Graph menggunakan hierarchy?
3. Apa arti parent pada Object3D?
4. Apa arti children?
5. Apa yang terjadi ketika parent bergerak?
6. Apa itu local transform?
7. Apa itu world transform?
8. Mengapa local position child tidak selalu sama dengan world position?
9. Bagaimana hubungan parent matrix dan child matrix?
10. Apa fungsi `THREE.Group`?
11. Apakah Group harus mempunyai geometry?
12. Apa itu PBR?
13. Apa fungsi `MeshStandardMaterial`?
14. Apa arti roughness = 0?
15. Apa arti roughness = 1?
16. Apa arti metalness = 0?
17. Apa arti metalness = 1?
18. Mengapa PBR membutuhkan lighting/environment yang baik?
19. Apa itu GLTF?
20. Apa itu GLB?
21. Apa perbedaan praktis GLTF dan GLB?
22. Data apa saja yang dapat dibawa GLTF?
23. Apa fungsi `GLTFLoader`?
24. Mengapa loading GLB asynchronous?
25. Apa yang biasanya terdapat pada `gltf.scene`?
26. Apa fungsi `traverse()`?
27. Apa yang terdapat pada `gltf.animations`?
28. Apa fungsi `AnimationMixer`?
29. Apa fungsi `clipAction()`?
30. Mengapa `mixer.update(delta)` diperlukan?
31. Apa itu raycasting?
32. Mengapa raycasting diperlukan untuk interaction 3D?
33. Apa itu NDC?
34. Berapa rentang coordinate NDC?
35. Apa fungsi `raycaster.setFromCamera()`?
36. Apa fungsi `intersectObjects()`?
37. Mengapa recursive intersection berguna pada GLB?
38. Apa perbedaan hover dan click?
39. Mengapa selection membutuhkan state?
40. Apa fungsi visual feedback?
41. Apa itu environment map?
42. Apa fungsi `scene.background`?
43. Apa fungsi `scene.environment`?
44. Mengapa material metal sangat terbantu oleh environment?
45. Bagaimana semua komponen tersebut membentuk interactive 3D application?

---

# 112. Pertanyaan Analisis

## A — Hierarchy

Sebuah wheel adalah child dari car.

Jika car bergerak 10 unit, apakah local position wheel harus diubah?

Jelaskan.

## B — Scene Graph

Mengapa object kompleks seperti robot atau kendaraan lebih mudah dikelola menggunakan hierarchy daripada semua part langsung menjadi child Scene?

## C — PBR

Dua sphere mempunyai color sama, tetapi roughness dan metalness berbeda.

Mengapa keduanya dapat terlihat sangat berbeda?

## D — Asset

Mengapa imported GLB sebaiknya diperlakukan sebagai hierarchy dan bukan diasumsikan hanya satu Mesh?

## E — Animation

Mengapa `action.play()` saja belum cukup tanpa `mixer.update(delta)` di animation loop?

## F — Raycasting

Mengapa coordinate mouse pixel tidak dapat langsung digunakan sebagai coordinate raycaster?

## G — Interaction State

Mengapa `hoveredObject` dan `selectedObject` sebaiknya disimpan pada variabel berbeda?

## H — Environment

Mengapa `scene.background` dan `scene.environment` dipisahkan walaupun keduanya dapat memakai texture yang sama?

---

# 113. README

`README.md` minimal berisi:

```text
Nama
NRP
Judul Prototype
Deskripsi Aplikasi
Struktur Scene Graph
Hierarchy Parent-Child
Model GLB yang Digunakan
Sumber Asset
Animation Clip yang Digunakan
PBR Material
Roughness
Metalness
Jenis Interaction
Hover Feedback
Click Feedback
Environment
Challenge yang Dikerjakan
Cara Menjalankan
Catatan Debugging
```

Cara menjalankan:

```bash
npm install
npm run dev
```

---

# 114. Output Pengumpulan

```text
praktikum-threejs-07/
├── index.html
├── package.json
├── package-lock.json
├── public/
│   ├── models/
│   │   └── model.glb
│   └── environment/
├── src/
│   ├── main.js
│   └── style.css
├── README.md
└── screenshot.png
```

Jangan mengumpulkan:

```text
node_modules/
```

Jika diminta:

```text
demo.mp4
```

---

# 115. Checklist Sebelum Pengumpulan

- [ ] project dapat di-install ulang dengan `npm install`;
- [ ] `npm run dev` berjalan;
- [ ] Scene tampil;
- [ ] hierarchy parent-child bekerja;
- [ ] Group digunakan;
- [ ] local/world transform dipahami;
- [ ] PBR material digunakan;
- [ ] roughness digunakan;
- [ ] metalness digunakan;
- [ ] GLB berhasil dimuat;
- [ ] hierarchy GLB dapat diperiksa;
- [ ] shadow imported mesh bekerja;
- [ ] animation clip berjalan jika asset memilikinya;
- [ ] Raycaster bekerja;
- [ ] pointer NDC benar;
- [ ] hover bekerja;
- [ ] click selection bekerja;
- [ ] selection state disimpan;
- [ ] visual feedback jelas;
- [ ] environment aktif;
- [ ] responsive rendering bekerja;
- [ ] tidak ada error Console;
- [ ] minimal dua challenge;
- [ ] README lengkap;
- [ ] screenshot tersedia.

---

# 116. Refleksi Praktikum

Tuliskan 5–8 kalimat mengenai:

1. manfaat Scene Graph;
2. perbedaan local dan world transform;
3. pengaruh roughness dan metalness;
4. pengalaman memuat GLB;
5. fungsi AnimationMixer;
6. proses screen coordinate → NDC → raycasting;
7. perbedaan hover dan click state;
8. peran environment pada PBR.

---

# 117. Hubungan dengan UTS

Praktikum Pertemuan 7 merupakan prototype awal untuk:

# UTS — Interactive Web 3D Project

Fondasi yang sudah tersedia:

```text
Scene Graph
+
Hierarchy
+
PBR
+
3D Asset
+
Animation
+
Raycasting
+
Interaction
+
Environment
```

Prototype ini dapat dikembangkan menjadi aplikasi dengan:

```text
tujuan
+
mekanisme interaksi
+
visual feedback
+
asset yang lebih lengkap
+
scene yang lebih terstruktur
```

sesuai ketentuan UTS.

---

# 118. Ringkasan Praktikum

Pipeline aplikasi:

```text
Scene
↓
Scene Graph
↓
Parent-Child Hierarchy
↓
PBR Material
↓
GLTF / GLB Asset
↓
AnimationMixer
↓
Raycasting
↓
Hover + Click
↓
Selection State
↓
Visual Feedback
↓
Environment
↓
Interactive 3D Application
```

Benang merah:

```text
Hierarchy
→ mengorganisasi object

PBR
→ menentukan karakter material

GLB
→ membawa asset kompleks

AnimationMixer
→ menjalankan animation clip

Raycaster
→ menghubungkan pointer 2D dengan object 3D

State
→ mengingat kondisi interaction

Environment
→ memberi konteks reflection/lighting
```

Aplikasi akhir:

# Interactive 3D Prototype

menjadi persiapan langsung menuju:

# UTS — Interactive Web 3D Project
