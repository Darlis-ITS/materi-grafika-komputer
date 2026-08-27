# Output Praktikum 6 — Three.js Mini 3D Scene

Output ini mengerjakan Tugas Utama serta Challenge A–H dari modul Praktikum 6.

## File

- `index.html` — struktur halaman, canvas host, dan panel kontrol;
- `main.js` — import Three.js, scene, geometry, material, light, shadow, camera, input, dan animation loop;
- `style.css` — layout responsif;
- `README.md` — dokumentasi teknis dan parameter.

## Fitur implementasi

- `Scene`, background, `PerspectiveCamera`, `OrthographicCamera`, dan `WebGLRenderer`;
- responsive renderer dan camera aspect saat resize;
- cube, sphere, ground, cone, torus knot, dan material gallery;
- `MeshBasicMaterial`, `MeshLambertMaterial`, `MeshPhongMaterial`, `MeshStandardMaterial`, dan `MeshNormalMaterial`;
- AmbientLight, DirectionalLight, PointLight;
- shadow map dengan caster dan receiver;
- animation loop berbasis `THREE.Clock` dan delta time;
- toggle perspective/orthographic camera;
- light intensity dan light orbit;
- shadow quality control;
- state-based continuous object control;
- event-based pause/reset/toggle animation;
- scene information dan `renderer.info` HUD.

## Parameter control

| Kontrol | Fungsi |
|---|---|
| Camera mode | Perspective atau Orthographic Camera |
| FOV | Field of view PerspectiveCamera |
| Light intensity | Intensitas DirectionalLight |
| Light orbit | Menggerakkan light mengelilingi scene |
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
