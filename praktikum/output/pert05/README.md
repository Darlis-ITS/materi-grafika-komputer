# Output Praktikum 5 — Textured and Lit Cube Playground

Output ini mengerjakan tugas utama serta Challenge A–G dari modul Praktikum 5.

## File

- `index.html` — canvas dan parameter control;
- `main.js` — WebGL2, geometry, normal, lighting, texture, camera, input, dan render loop;
- `style.css` — layout playground;
- `texture.svg` — image texture untuk Challenge A;
- `README.md` — dokumentasi teknis.

## Fitur

- cube 3D dengan position, normal, UV, dan color per face;
- face normal untuk flat shading dan smooth normal alternatif;
- normalisasi normal pada fragment shader;
- normal matrix inverse-transpose;
- ambient, diffuse, dan specular lighting;
- point light dengan kontrol posisi;
- checkerboard procedural texture dan image texture SVG;
- texture filtering `NEAREST`, `LINEAR`, `LINEAR_MIPMAP`, dan wrapping `REPEAT`/`CLAMP`;
- animated cube rotation;
- state-based light dan camera control;
- non-uniform scale untuk mengamati normal matrix;
- orbit light;
- toggle komponen ambient, diffuse, dan specular;
- HUD shading, light, texture, filtering, wrapping, dan normal mode.

## Parameter control

| Kontrol | Fungsi |
|---|---|
| Ambient | Mengatur kontribusi cahaya ambient |
| Shininess | Mengatur ukuran dan ketajaman specular highlight |
| Light X/Y/Z | Mengatur posisi point light |
| Light orbit | Membuat light mengorbit cube |
| Camera orbit | Menggerakkan camera mengorbit target |
| Flat / Smooth | Mengganti face normal dengan smooth vertex normal |
| Texture source | Checkerboard procedural atau image texture SVG |
| Filtering | NEAREST, LINEAR, atau LINEAR + mipmap |
| Wrapping | REPEAT atau CLAMP_TO_EDGE |
| Scale X/Y/Z | Non-uniform scale untuk eksperimen normal matrix |
| Ambient/Diffuse/Specular | Mengaktifkan atau menonaktifkan komponen lighting |
| Arrow keys | Light X/Y secara kontinu |
| W/S | Light Z |
| Q/E | Camera X |
| R | Reset scene |
| F | Toggle flat/smooth |
| T | Toggle texture |
| L | Toggle light orbit |

## Penjelasan teknis

### Normal

Normal menunjukkan arah tegak lurus permukaan. Face normal yang sama untuk seluruh face menghasilkan flat shading. Smooth mode menggunakan normal dari arah vertex terhadap center sehingga interpolasi normal membuat lighting terlihat lebih halus. Normal dinormalisasi kembali di fragment shader karena interpolasi dapat mengubah panjang vector.

### Normal matrix

Normal tidak cukup ditransformasi dengan Model Matrix biasa saat terdapat non-uniform scale. Demo menghitung inverse-transpose dari bagian 3×3 Model Matrix agar normal tetap tegak lurus terhadap surface.

### Lighting

Fragment shader menghitung:

```text
ambient  = ambientStrength × lightColor
diffuse  = max(dot(normal, lightDirection), 0) × lightColor
specular = pow(max(dot(normal, halfVector), 0), shininess) × lightColor
final    = textureColor × (ambient + diffuse) + specular
```

Ambient memberi penerangan dasar, diffuse bergantung pada arah surface terhadap light, dan specular menghasilkan highlight berdasarkan arah camera.

### Texture

UV menentukan lokasi sampling texture. Demo menyediakan checkerboard yang dibuat dengan Canvas API dan image texture SVG. Filtering dapat dibandingkan melalui NEAREST, LINEAR, dan mipmap. Wrapping menentukan perilaku ketika UV berada di luar rentang 0–1.

### Camera dan animation

Camera menggunakan look-at View Matrix dan perspective Projection Matrix. Camera serta light dapat dikontrol dengan state-based input. Cube berputar otomatis menggunakan delta time agar kecepatan tidak bergantung pada frame rate.

## Checklist

- [x] Cube, normal, normal matrix
- [x] Flat/smooth shading
- [x] Ambient, diffuse, specular, shininess
- [x] Texture sampler, UV, filtering, wrapping
- [x] Lighting + texture
- [x] Animated cube
- [x] State-based light/camera control
- [x] Challenge A–G
