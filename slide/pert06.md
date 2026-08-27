# Grafika Komputer — Pertemuan 6
## Introduction to Three.js

---

# Slide 00 — Cover

EF234504 — Grafika Komputer

## Pertemuan 6

# Introduction to Three.js

**Laboratorium GIGA**

**Departemen Teknik Informatika - ITS**

---

# Slide 01 — Topik Pembahasan

- Posisi Three.js di atas WebGL
- Struktur dasar aplikasi Three.js
- Scene
- Camera
- WebGLRenderer
- Geometry
- Material
- Mesh
- Transform object
- Light
- Shadow
- Animation Loop
- Responsive rendering
- Praktikum: Mini 3D Scene dengan Three.js

---

# Slide 02 — Capaian Pembelajaran

Setelah mengikuti pertemuan ini, mahasiswa diharapkan mampu:

1. menjelaskan hubungan Three.js dan WebGL,
2. membuat project Three.js sederhana,
3. membuat Scene, Camera, dan Renderer,
4. menggunakan built-in Geometry,
5. memilih Material dasar,
6. membentuk Mesh,
7. mengubah position, rotation, dan scale object,
8. menambahkan Light,
9. mengaktifkan Shadow,
10. membuat Animation Loop,
11. membuat renderer yang responsif,
12. membangun mini 3D scene sederhana.

---

# Slide 03 — Dari WebGL ke Three.js

Pada Pertemuan 2–5 kita bekerja langsung dengan konsep:

```text
Buffer
Shader
Matrix
Camera
Texture
Lighting
Draw Call
```

Three.js menyediakan abstraksi yang lebih tinggi.

```text
WebGL
  ↓
Three.js
  ↓
3D Application
```

---

# Slide 04 — Mengapa Three.js?

WebGL memberi kontrol sangat detail, tetapi membutuhkan banyak kode.

Three.js menyederhanakan:
- geometry,
- material,
- camera,
- transform,
- light,
- rendering,
- animation.

Tujuannya: membangun aplikasi 3D lebih cepat tanpa kehilangan fondasi grafika yang sudah dipelajari.

---

# Slide 05 — Apa Itu Three.js?

Three.js adalah JavaScript library untuk membangun grafika 3D di browser.

```text
JavaScript Application
       ↓
     Three.js
       ↓
      WebGL
       ↓
       GPU
```

Three.js menyederhanakan implementasi graphics pipeline pada aplikasi web 3D.

---

# Slide 06 — WebGL vs Three.js

| WebGL | Three.js |
|---|---|
| low-level API | high-level library |
| buffer manual | Geometry abstraction |
| shader manual | Material abstraction |
| matrix manual | Object transform |
| camera manual | Camera class |
| draw call manual | Renderer |
| lighting manual | Light object |

---

# Slide 07 — Fondasi WebGL Tetap Digunakan

Saat kita menulis:

```javascript
new THREE.Mesh(
  geometry,
  material
);
```

di baliknya tetap ada:
- vertex data,
- buffer,
- shader,
- matrix,
- draw call.

Three.js menyederhanakan implementasi, bukan menghapus konsep.

---

# Slide 08 — Arsitektur Minimum Three.js

```text
Scene
├── Camera
├── Mesh
│   ├── Geometry
│   └── Material
└── Light

       ↓
WebGLRenderer
       ↓
Canvas
```

---

# Slide 09 — Komponen Minimum

Agar satu object dapat terlihat:

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
```

Jika material merespons cahaya:

```text
+ Light
```

---

# Slide 10 — Setup Project

Untuk project modern disarankan:

```text
Node.js
+
Vite
+
Three.js
```

Keuntungan:
- module import lebih rapi,
- development server,
- hot reload,
- struktur project mudah dikelola.

---

# Slide 11 — Instalasi Three.js

```bash
npm install three
```

Kemudian:

```javascript
import * as THREE
  from "three";
```

Three.js siap digunakan dalam project.

---

# Slide 12 — Struktur File Sederhana

```text
project/
├── index.html
├── src/
│   └── main.js
├── package.json
└── node_modules/
```

Pada tahap awal, fokus pada satu `main.js` agar alur program mudah dipahami.

---

# Slide 13 — Scene

Scene adalah container utama untuk object 3D.

```javascript
const scene =
  new THREE.Scene();
```

Scene dapat berisi Mesh, Light, Camera helper, Group, dan Object3D lain.

---

# Slide 14 — Scene sebagai Dunia Virtual

```text
Scene
├── Ground
├── Cube
├── Sphere
├── Light
└── Camera
```

Scene menyimpan object yang akan diproses oleh renderer.

---

# Slide 15 — Background Scene

```javascript
scene.background =
  new THREE.Color(
    0x0b1020
  );
```

Background memberikan warna dasar pada scene tanpa mengatur clear color WebGL secara langsung.

---

# Slide 16 — Camera

Camera menentukan bagaimana Scene dilihat.

Jenis utama:
- `PerspectiveCamera`
- `OrthographicCamera`

Konsepnya sama dengan projection yang sudah dipelajari pada Pertemuan 4.

---

# Slide 17 — PerspectiveCamera

```javascript
const camera =
  new THREE.PerspectiveCamera(
    60,
    width / height,
    0.1,
    100
  );
```

Parameter:
```text
FOV
Aspect Ratio
Near
Far
```

---

# Slide 18 — Camera Position

```javascript
camera.position.set(
  0,
  2,
  5
);
```

Camera berada di World Space. Three.js mengelola View Matrix di belakang layar.

---

# Slide 19 — Camera LookAt

```javascript
camera.lookAt(
  0,
  0,
  0
);
```

Camera diarahkan ke target tertentu.

Konsepnya memanfaatkan position, target, dan arah up yang sudah dipelajari sebelumnya.

---

# Slide 20 — OrthographicCamera

```javascript
const camera =
  new THREE.OrthographicCamera(
    left, right,
    top, bottom,
    near, far
  );
```

Cocok untuk CAD-like view, technical view, isometric view, dan map.

---

# Slide 21 — WebGLRenderer

Renderer menggambar Scene dari Camera ke Canvas.

```javascript
const renderer =
  new THREE.WebGLRenderer({
    antialias: true
  });
```

---

# Slide 22 — Renderer Size dan Canvas

```javascript
renderer.setSize(
  window.innerWidth,
  window.innerHeight
);

document.body.appendChild(
  renderer.domElement
);
```

`renderer.domElement` adalah Canvas yang digunakan Three.js.

---

# Slide 23 — Render Scene

```javascript
renderer.render(
  scene,
  camera
);
```

Renderer menangani banyak detail seperti buffer, shader, state, dan draw call.

---

# Slide 24 — Geometry

Geometry mendefinisikan bentuk object.

Built-in Geometry:
- BoxGeometry
- SphereGeometry
- PlaneGeometry
- CylinderGeometry
- ConeGeometry
- TorusGeometry

---

# Slide 25 — BoxGeometry

```javascript
const geometry =
  new THREE.BoxGeometry(
    1, 1, 1
  );
```

Parameter:
```text
width
height
depth
```

---

# Slide 26 — SphereGeometry

```javascript
const geometry =
  new THREE.SphereGeometry(
    0.7,
    32,
    16
  );
```

Semakin banyak segment:
```text
permukaan lebih halus
+
polygon lebih banyak
```

---

# Slide 27 — PlaneGeometry

```javascript
const groundGeometry =
  new THREE.PlaneGeometry(
    10,
    10
  );
```

Plane sering digunakan untuk ground, floor, wall, atau surface.

---

# Slide 28 — Geometry dan Data Vertex

Walaupun menggunakan abstraction `Geometry`, di dalamnya tetap terdapat:
- position,
- normal,
- UV,
- index.

Konsep ini berasal langsung dari materi WebGL.

---

# Slide 29 — BufferGeometry

Three.js modern menggunakan:

```text
BufferGeometry
```

Attribute utama:
```text
position
normal
uv
```

BufferGeometry dekat dengan konsep GPU buffer pada WebGL.

---

# Slide 30 — Material

Material menentukan bagaimana permukaan dirender.

Material dapat mengontrol:
- color,
- transparency,
- lighting response,
- texture,
- parameter visual lain.

Pertemuan ini fokus pada material dasar.

---

# Slide 31 — MeshBasicMaterial

```javascript
const material =
  new THREE.MeshBasicMaterial({
    color: 0x00aaff
  });
```

Karakter:
```text
tidak dipengaruhi light
```

---

# Slide 32 — MeshNormalMaterial

```javascript
const material =
  new THREE.MeshNormalMaterial();
```

Warna berasal dari arah normal.

Berguna untuk melihat bentuk geometry dan debugging normal sederhana.

---

# Slide 33 — MeshLambertMaterial

```javascript
const material =
  new THREE.MeshLambertMaterial({
    color: 0x44aa88
  });
```

Material ini merespons diffuse lighting dan cocok untuk scene sederhana.

---

# Slide 34 — MeshPhongMaterial

```javascript
const material =
  new THREE.MeshPhongMaterial({
    color: 0x4488ff,
    shininess: 60
  });
```

Mendukung diffuse dan specular-like highlight.

---

# Slide 35 — Material Lanjutan

Three.js juga memiliki:

```text
MeshStandardMaterial
```

untuk pendekatan PBR.

Pada Pertemuan 6 cukup dikenali sebagai material fisik yang lebih realistis. Parameter PBR dibahas pada Pertemuan 7.

---

# Slide 36 — Geometry + Material = Mesh

```text
Geometry
+
Material
=
Mesh
```

```javascript
const mesh =
  new THREE.Mesh(
    geometry,
    material
  );
```

---

# Slide 37 — Menambahkan Mesh ke Scene

```javascript
scene.add(
  mesh
);
```

Setelah ditambahkan, mesh menjadi bagian dari scene yang dapat dirender.

---

# Slide 38 — Transform Object

Mesh memiliki transform:

```text
position
rotation
scale
```

Contoh:

```javascript
mesh.position.set(
  1, 0, 0
);
```

---

# Slide 39 — Rotation dan Scale

```javascript
mesh.rotation.y =
  Math.PI / 4;

mesh.scale.set(
  1.5,
  1.0,
  0.5
);
```

Three.js mengelola Model Matrix secara otomatis.

---

# Slide 40 — Object3D

Mesh, Camera, dan Light berbagi konsep dasar:

```text
Object3D
```

Object3D menyediakan position, rotation, dan scale.

Hierarchy parent-child akan dibahas pada Pertemuan 7.

---

# Slide 41 — Light

Material tertentu membutuhkan Light.

Jenis umum:
- AmbientLight
- DirectionalLight
- PointLight
- SpotLight
- HemisphereLight

Pertemuan ini fokus pada konfigurasi dasar light.

---

# Slide 42 — AmbientLight

```javascript
const ambient =
  new THREE.AmbientLight(
    0xffffff,
    0.3
  );
```

Karakter:
- global,
- tidak memiliki arah,
- memberi pencahayaan dasar.

---

# Slide 43 — DirectionalLight

```javascript
const light =
  new THREE.DirectionalLight(
    0xffffff,
    1.5
  );

light.position.set(
  3, 5, 2
);
```

Cocok untuk mensimulasikan sumber cahaya jauh.

---

# Slide 44 — Material dan Light

```text
MeshBasicMaterial
→ tidak membutuhkan light

MeshLambertMaterial
→ membutuhkan light

MeshPhongMaterial
→ membutuhkan light
```

Jika object gelap, periksa kombinasi material dan light.

---

# Slide 45 — Shadow Dasar

Shadow membantu menunjukkan depth, posisi object, dan hubungan object dengan ground.

```javascript
renderer.shadowMap.enabled =
  true;
```

---

# Slide 46 — Cast dan Receive Shadow

```javascript
light.castShadow = true;

cube.castShadow = true;

ground.receiveShadow = true;
```

Ketiganya harus dikonfigurasi dengan benar.

---

# Slide 47 — Animation Loop

```javascript
function animate() {
  requestAnimationFrame(animate);

  mesh.rotation.y += 0.01;

  renderer.render(
    scene,
    camera
  );
}

animate();
```

---

# Slide 48 — Praktikum: Mini 3D Scene

Mahasiswa membuat scene dengan:
- ground,
- cube,
- sphere,
- PerspectiveCamera,
- WebGLRenderer,
- minimal dua material,
- AmbientLight,
- DirectionalLight,
- shadow,
- animation loop.

Target: membangun mini scene 3D pertama dengan Three.js.

---

# Slide 49 — Ringkasan Pertemuan

```text
Scene
├── Camera
├── Mesh
│   ├── Geometry
│   └── Material
└── Light
       ↓
Animation Loop
       ↓
WebGLRenderer
       ↓
Canvas
```

Konsep utama: Scene, Camera, Renderer, Geometry, Material, Mesh, Transform, Light, Shadow, Animation Loop.

---

# Slide 50 — TERIMA KASIH

# TERIMA KASIH

### Materi Selanjutnya

## Three.js Interactive 3D Application
