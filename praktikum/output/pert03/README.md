# Output Praktikum 3 — Interactive Transformation Playground

Output ini mengimplementasikan tugas utama Praktikum 3 dan seluruh Challenge A–F dalam satu demo WebGL2.

## Fitur

- WebGL2 context, shader pipeline, GPU geometry buffer, dan uniform `u_matrix`;
- triangle dalam local coordinate dengan homogeneous coordinate `(x, y, 1)`;
- translation, rotation, uniform scaling, non-uniform scaling, matrix multiplication, dan Model Matrix;
- dua object menggunakan satu geometry buffer;
- state-based keyboard input dan delta time;
- automatic rotation serta animated scaling Object B;
- perbandingan transform order `T × R × S` dan `T × R`;
- world axes, origin, pivot marker, parent-child, dan simple orbit;
- HUD position, rotation, scale, matrix, order, dan delta time;
- mouse translation dari pixel ke NDC;
- reset, preset transform, pause, dan kontrol parameter.

## Parameter kontrol

| Kontrol | Fungsi |
|---|---|
| Arrow keys | Translation X/Y Object A secara kontinu |
| Q / E | Rotation |
| + / - | Uniform scaling |
| Z / X | Scaling X turun/naik |
| C / V | Scaling Y turun/naik |
| R | Challenge A: reset transform |
| 1 / 2 / 3 | Challenge B: transform preset |
| T | Challenge C: toggle transform order |
| Klik canvas | Challenge D: mouse translation ke NDC |
| P | Pause/resume |
| O | Toggle orbit helper |
| Speed, Rotation, Scale slider | Mengatur parameter transform per detik |
| Auto B, Axes, Pivot, Parent-child | Mengatur elemen visual demo |

## Penjelasan teknis

Geometry triangle selalu berada di local space dan dikirim sekali ke GPU. State transform mengubah position, rotation, dan scale. Model Matrix mengubah local coordinate menjadi world coordinate. Vertex shader melakukan `u_matrix * a_position`, dengan vertex homogeneous `(x, y, 1)`.

Demo menggunakan column-major matrix 3×3. Mode TRS menghitung `P' = T × R × S × P`, sedangkan mode TR hanya menggunakan `T × R`. Karena matrix multiplication tidak komutatif, perubahan order mengubah hasil visual.

`keydown` dan `keyup` hanya menyimpan state tombol. Fungsi update membaca state pada setiap frame. Delta time membatasi perubahan posisi berdasarkan waktu, bukan jumlah frame. Object B menggunakan rotation otomatis dan scale sinusoidal.

Parent-child memakai `ChildWorld = ParentWorld × ChildLocal`. Mouse pixel dikonversi menjadi NDC dengan `x = pixelX / width × 2 − 1` dan `y = 1 − pixelY / height × 2`. Orbit dibangun dari composition matrix, bukan simulasi physics.

## Checklist tugas

- [x] WebGL2, shader, GPU buffer, local geometry, homogeneous coordinate
- [x] Translation, rotation, uniform/non-uniform scaling
- [x] Matrix multiplication, Model Matrix, uniform matrix
- [x] Dua object berbagi geometry
- [x] State-based input, delta time, automatic animation
- [x] Transform order, HUD, axes, pivot
- [x] Challenge A–F
