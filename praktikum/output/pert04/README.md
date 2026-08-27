# Output Praktikum 4 — Rotating 3D Cube Camera Playground

Output ini mengerjakan tugas utama dan seluruh Challenge A–F dari modul Praktikum 4.

## File

- `index.html` — canvas, HUD, dan parameter control;
- `main.js` — WebGL2, cube geometry, Mat4, camera, projection, depth, input, dan render loop;
- `style.css` — layout playground;
- `README.md` — penjelasan teknis.

## Fitur implementasi

- cube 3D dengan 36 vertex dan warna per face;
- matrix 4×4, model, view, dan projection matrix;
- camera `position`, `target`, dan `up`;
- look-at View Matrix;
- perspective dan orthographic projection;
- aspect ratio sesuai viewport;
- depth buffer dan depth test toggle;
- automatic cube rotation;
- state-based camera movement;
- HUD camera, projection, FOV, near/far, dan depth;
- tiga cube pada depth berbeda;
- orbit camera;
- camera height control;
- target control;
- split-screen perspective vs orthographic;
- near/far preset;
- FOV preset.

## Parameter control

| Kontrol | Fungsi |
|---|---|
| Arrow Left/Right | Camera X |
| Arrow Up/Down | Camera Y |
| W/S | Camera Z maju/mundur |
| Q/E | Target X |
| A/D | Target Y |
| O | Toggle perspective/orthographic |
| B | Toggle orbit camera |
| X | Toggle split comparison |
| D | Toggle depth test |
| N | Siklus near/far preset |
| R | Reset scene |
| FOV slider | Mengatur field of view perspektif |
| Height slider | Mengatur tinggi camera |
| Target X/Y slider | Mengatur target look-at |
| Near/Far button | Memilih clip plane preset |
| FOV preset button | Memilih FOV 45°, 60°, 90° |

## Penjelasan teknis

### Coordinate pipeline

Vertex cube bergerak melalui pipeline:

```text
Local Coordinate → Model Coordinate → World Coordinate
                 → View Coordinate → Clip Coordinate
                 → NDC → Screen Coordinate
```

Vertex menggunakan `(x, y, z, 1)`. Model Matrix mengatur posisi dan rotasi cube, View Matrix mengubah scene berdasarkan camera, dan Projection Matrix mengubah view space menjadi clip space.

### Look-at camera

Camera menggunakan `position`, `target`, dan `up`. Basis camera dihitung dari forward, right, dan corrected up. View Matrix adalah inverse transform camera sehingga camera terlihat tetap berada di origin view space dan scene bergerak relatif terhadapnya.

### Perspective dan orthographic

Perspective memakai FOV, aspect ratio, near, dan far. Object yang lebih jauh terlihat lebih kecil. Orthographic menjaga ukuran relatif terhadap depth. Split mode merender scene dua kali menggunakan camera dan model yang sama, tetapi projection berbeda di viewport kiri dan kanan.

### Depth test

`gl.enable(gl.DEPTH_TEST)` membuat fragment dengan depth terdekat menutupi fragment di belakangnya. Depth buffer dibersihkan setiap frame dengan `gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)`. Toggle depth membantu membandingkan hasil dengan dan tanpa depth test.

### Camera control dan orbit

Camera movement memakai state-based keyboard dan delta time. Orbit camera menghitung posisi camera dengan sin/cos terhadap target. Camera height dan target dapat diubah melalui slider untuk mengamati perubahan view direction.

### Multiple cube

Tiga cube diletakkan pada depth berbeda. Dengan depth test aktif, urutan draw tidak menentukan visibility akhir. Dengan depth test nonaktif, cube yang digambar terakhir dapat menutupi cube lain.

## Checklist

- [x] Cube 3D, 36 vertex, color per face
- [x] Model/View/Projection matrix 4×4
- [x] Camera position, target, up, look-at
- [x] Perspective, orthographic, FOV, aspect ratio
- [x] Near/far clipping preset
- [x] Depth buffer dan depth test
- [x] Automatic rotation dan state-based camera
- [x] HUD lengkap
- [x] Challenge A–F
