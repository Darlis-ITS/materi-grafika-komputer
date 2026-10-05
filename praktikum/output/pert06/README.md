# Output Praktikum 6 — Three.js Mini 3D Scene

Output ini mengerjakan Tugas Utama serta Challenge A–H dari modul Praktikum 6.

## File

- `index.html` — struktur halaman, canvas host, dan panel kontrol;
- `main.js` — import Three.js, scene, geometry, material, light, shadow, camera, input, dan animation loop;
- `style.css` — layout responsif;
- `README.md` — dokumentasi teknis dan parameter.

## Cara menjalankan

Buka `index.html` melalui server HTTP lokal, misalnya **Live Server** di VS Code.
Hindari membuka file langsung melalui `file://` karena halaman memakai ES module.

`index.html` menyediakan import map yang memetakan `"three"` dan `"three/addons/"` ke Three.js versi
`0.185.1` di jsDelivr. Koneksi internet diperlukan untuk memuat dependency ini.
Browser tidak dapat menyelesaikan `import * as THREE from "three"` pada server
statis tanpa import map atau bundler seperti Vite.

## Fitur implementasi

- `Scene`, background, `PerspectiveCamera`, `OrthographicCamera`, dan `WebGLRenderer`;
- responsive renderer dan camera aspect saat resize;
- cube, sphere, ground, cone, torus knot, dan material gallery;
- `MeshBasicMaterial`, `MeshLambertMaterial`, `MeshPhongMaterial`, `MeshStandardMaterial`, dan `MeshNormalMaterial`;
- AmbientLight, DirectionalLight, PointLight;
- shadow map dengan caster dan receiver;
- animation loop berbasis `THREE.Clock` dan delta time;
- toggle perspective/orthographic camera;
- OrbitControls untuk orbit, zoom, pan, damping, dan reset kamera;
- light intensity dan light orbit;
- shadow quality control;
- state-based continuous object control;
- event-based pause/reset/toggle animation;
- scene information dan `renderer.info` HUD.

## Parameter control

| Parameter OrbitControls | Fungsi / nilai awal |
| --- | --- |
| Aktifkan kontrol kamera | Mengaktifkan input orbit, zoom, dan pan; awal aktif |
| Izinkan pan | Mengizinkan drag kanan menggeser kamera dan target; awal aktif |
| Damping | Memperhalus gerakan setelah input berhenti; awal aktif |
| Damping factor | 0.01–0.25; awal 0.05. Nilai lebih besar membuat gerakan berhenti lebih cepat |
| Camera rotate speed | 0.1–3; awal 1.00. Mengatur sensitivitas drag orbit kamera |
| Camera zoom speed | 0.1–3; awal 1.00. Mengatur sensitivitas scroll zoom |

Pengaturan langsung diterapkan dan dipertahankan ketika berganti kamera.
Damping factor hanya dapat diubah saat Damping aktif. Reset (R) mengembalikan
semua parameter OrbitControls ke nilai awal.

| Kontrol | Fungsi |
|---|---|
| Drag tombol kiri | Orbit kamera mengelilingi target |
| Scroll mouse | Zoom mendekat atau menjauh |
| Drag tombol kanan | Pan kamera beserta target |
| Camera mode | Perspective atau Orthographic Camera |
| FOV | Field of view PerspectiveCamera |
| Light intensity | Intensitas DirectionalLight |
| Light orbit | Menggerakkan light mengelilingi scene |
| Light helpers | Menampilkan/menyembunyikan garis dan panah arah DirectionalLight serta penanda PointLight |
| Shadow quality | Mengatur ukuran shadow map |
| Material gallery | Menampilkan objek dengan material berbeda |
| Segment level | Mengubah detail Sphere/TorusKnot geometry |
| Animation | Pause/resume rotasi object |
| Arrow / WASD | Menggerakkan cube utama secara state-based |
| Q / E | Rotasi cube utama |
| R | Reset transform dan camera |
| G | Pause/resume animation |
| C | Toggle camera |
| L | Toggle light orbit |
| H | Toggle material gallery |

## OrbitControls — navigasi kamera

OrbitControls membantu mengamati geometry, material, lighting, dan shadow dari
berbagai sudut. Drag kiri menggerakkan kamera mengelilingi target; scroll mengatur
zoom; drag kanan menggeser kamera beserta target. Transform objek tetap dikontrol
melalui Arrow/WASD dan Q/E.

Addon diimpor dari `three/addons/controls/OrbitControls.js` dan dihubungkan ke
kamera aktif serta `renderer.domElement`. Target awal adalah `(0, 0.8, 0)`.
`enableDamping = true` memperhalus gerakan, dengan `controls.update()` dipanggil
setiap frame, termasuk ketika animasi objek dijeda menggunakan G.

Pergantian Perspective/Orthographic melalui C atau dropdown mempertahankan posisi
kamera dan target pandang. Kontrol lama di-`dispose()`, lalu dibuat kembali untuk
kamera aktif. Reset (R) mengembalikan PerspectiveCamera ke posisi
`(4.8, 3.6, 6.5)`, target awal, FOV 50, dan zoom 1, sekaligus membuang sisa damping.

**Coba:** orbit mengelilingi sphere, zoom untuk mengamati material, lakukan pan,
jeda animasi dengan G, lalu coba navigasi kamera lagi. Tekan R untuk kembali ke
tampilan awal. Tombol Light orbit (L) menggerakkan lampu; navigasi kamera memakai mouse.

## Penjelasan teknis

### Hubungan Three.js dan WebGL

Three.js menyederhanakan pekerjaan low-level WebGL melalui object abstraction:

```text
Scene + Camera + Renderer + Geometry + Material = Mesh
```

Di belakang abstraction tersebut tetap terdapat buffer, shader, attribute, uniform, matrix, lighting, dan draw call WebGL.

### Scene graph dan transform

Setiap Mesh memiliki `position`, `rotation`, dan `scale`. Three.js menggabungkannya menjadi Model Matrix. `scene.add(mesh)` memasukkan object ke scene graph. Parent-child dapat dibuat melalui `Object3D.add(child)`.

### Material dan lighting

**Light helpers** aktif secara default dan dapat dimatikan melalui panel kontrol.
Garis serta panah kuning menunjukkan arah DirectionalLight dari posisi lampu
menuju target `(0, 0, 0)`; kotak kuning menandai lampu tersebut. Penanda cyan
menunjukkan posisi PointLight, yang memancarkan cahaya ke segala arah.
AmbientLight tidak memiliki arah sehingga tidak diberi panah.

Aktifkan Light orbit (L) untuk mengamati perubahan arah cahaya dan bayangan.
Helper diperbarui sebelum render, termasuk ketika animasi dijeda atau scene
di-reset. Reset (R) juga mengaktifkan kembali helper.

`MeshBasicMaterial` tidak memerlukan light. `MeshLambertMaterial`, `MeshPhongMaterial`, dan `MeshStandardMaterial` merespons lighting. `MeshNormalMaterial` memvisualisasikan arah normal sebagai warna dan berguna untuk debugging.

### Shadow map

Shadow membutuhkan konfigurasi berantai: renderer mengaktifkan `shadowMap.enabled`, light menggunakan `castShadow`, object menggunakan `castShadow`, dan ground menggunakan `receiveShadow`. Shadow camera serta shadow map size mengontrol area dan kualitas bayangan.

### Camera dan responsive rendering

PerspectiveCamera menggunakan FOV dan aspect ratio. OrthographicCamera menjaga ukuran relatif object. Pada resize, renderer size, pixel ratio, dan camera aspect/projection matrix diperbarui agar scene tidak terdistorsi.

### Animation dan input

`THREE.Clock.getDelta()` menghasilkan delta time sehingga animasi frame-rate independent. `keydown`/`keyup` menyimpan state tombol, kemudian transform cube diperbarui setiap frame. Pause, reset, dan toggle menggunakan event-based action.

## Checklist

- [x] Dependency Three.js dan renderer
- [x] Scene, background, camera, geometry, material
- [x] Minimal dua material dan material gallery
- [x] Light dan shadow
- [x] Animation loop delta time
- [x] Responsive renderer/camera
- [x] HUD scene information
- [x] Challenge A–H
