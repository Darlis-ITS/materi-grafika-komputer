# Modul Praktikum Grafika Komputer — Pertemuan 2
## WebGL Fundamental Playground

**Mata Kuliah:** EF234504 — Grafika Komputer  
**Pertemuan:** 2  
**Topik:** WebGL Fundamental  
**Dosen:** Dr. Darlis Herumurti  
**Departemen:** Teknik Informatika

---

# 1. Tujuan Praktikum

Setelah menyelesaikan praktikum ini, mahasiswa diharapkan mampu:

1. Membuat Canvas dan mendapatkan WebGL2 Context.
2. Menyiapkan vertex data menggunakan `Float32Array`.
3. Membuat dan mengisi buffer pada GPU.
4. Menulis vertex shader sederhana.
5. Menulis fragment shader sederhana.
6. Melakukan compile dan link shader.
7. Menghubungkan buffer dengan shader attribute.
8. Menggambar triangle menggunakan draw call.
9. Menggambar lebih dari satu primitive.
10. Membuat variasi warna dan posisi.
11. Membuat rendering loop sederhana.
12. Menambahkan interaksi mouse atau keyboard.
13. Melakukan debugging program WebGL dasar.

---

# 2. Konsep yang Digunakan

Praktikum mengimplementasikan pipeline:

```text
JavaScript
    ↓
Vertex Data
    ↓
Buffer
    ↓
Attribute
    ↓
Vertex Shader
    ↓
Primitive Assembly
    ↓
Rasterization
    ↓
Fragment Shader
    ↓
Framebuffer
    ↓
Canvas
```

---

# 3. Persiapan

Software:

- Visual Studio Code
- Google Chrome / Chromium / Firefox
- Browser Developer Tools
- Node.js
- Vite atau local development server

Struktur project:

```text
praktikum-webgl-02/
├── index.html
├── main.js
├── style.css
└── README.md
```

---

# 4. Membuat Project

Jika menggunakan Vite:

```bash
npm create vite@latest
```

Pilih:

```text
Vanilla
JavaScript
```

Kemudian:

```bash
npm install
npm run dev
```

Alternatif: gunakan folder HTML/JavaScript biasa dengan local server.

---

# 5. Membuat `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />
  <title>WebGL Fundamental</title>
  <link rel="stylesheet" href="style.css" />
</head>

<body>

  <canvas
    id="glCanvas"
    width="800"
    height="600">
  </canvas>

  <script
    type="module"
    src="/main.js">
  </script>

</body>
</html>
```

---

# 6. Styling Canvas

`style.css`:

```css
body {
  margin: 0;
  display: grid;
  place-items: center;
  min-height: 100vh;
  background: #0b1020;
}

canvas {
  width: 800px;
  height: 600px;
  border: 1px solid #2aa8ff;
}
```

---

# 7. Mendapatkan WebGL2 Context

`main.js`:

```javascript
const canvas =
  document.getElementById("glCanvas");

const gl =
  canvas.getContext("webgl2");

if (!gl) {
  throw new Error(
    "WebGL2 tidak tersedia"
  );
}
```

---

# 8. Menentukan Viewport

```javascript
gl.viewport(
  0,
  0,
  canvas.width,
  canvas.height
);
```

Viewport menentukan area framebuffer yang dipetakan ke Canvas.

---

# 9. Membersihkan Canvas

```javascript
gl.clearColor(
  0.03,
  0.05,
  0.10,
  1.0
);

gl.clear(
  gl.COLOR_BUFFER_BIT
);
```

Eksperimen awal:

- ubah warna background,
- gunakan beberapa kombinasi RGB,
- amati bahwa nilai warna berada pada rentang 0–1.

---

# 10. Membuat Vertex Data

Buat triangle:

```javascript
const vertices =
  new Float32Array([
    -0.6, -0.5,
     0.6, -0.5,
     0.0,  0.6
  ]);
```

Interpretasi:

```text
V0 = (-0.6, -0.5)
V1 = ( 0.6, -0.5)
V2 = ( 0.0,  0.6)
```

---

# 11. Visualisasi NDC

```text
              (0, 1)
                 ↑
                 |
(-1,0) ←──────── O ───────→ (1,0)
                 |
                 ↓
              (0,-1)
```

Vertex pada latihan awal langsung ditulis dalam coordinate space NDC.

---

# 12. Membuat Buffer

```javascript
const positionBuffer =
  gl.createBuffer();

gl.bindBuffer(
  gl.ARRAY_BUFFER,
  positionBuffer
);
```

---

# 13. Upload Vertex Data

```javascript
gl.bufferData(
  gl.ARRAY_BUFFER,
  vertices,
  gl.STATIC_DRAW
);
```

Alur:

```text
Float32Array
     ↓
WebGL Buffer
     ↓
GPU Memory
```

---

# 14. Membuat Vertex Shader

```javascript
const vertexShaderSource = `#version 300 es

in vec2 a_position;

void main() {
  gl_Position =
    vec4(
      a_position,
      0.0,
      1.0
    );
}
`;
```

---

# 15. Membuat Fragment Shader

```javascript
const fragmentShaderSource = `#version 300 es

precision highp float;

out vec4 outColor;

void main() {
  outColor =
    vec4(
      0.0,
      0.65,
      1.0,
      1.0
    );
}
`;
```

---

# 16. Helper Compile Shader

```javascript
function createShader(
  gl,
  type,
  source
) {

  const shader =
    gl.createShader(type);

  gl.shaderSource(
    shader,
    source
  );

  gl.compileShader(
    shader
  );

  const success =
    gl.getShaderParameter(
      shader,
      gl.COMPILE_STATUS
    );

  if (!success) {

    console.error(
      gl.getShaderInfoLog(shader)
    );

    gl.deleteShader(shader);
    return null;
  }

  return shader;
}
```

---

# 17. Compile Kedua Shader

```javascript
const vertexShader =
  createShader(
    gl,
    gl.VERTEX_SHADER,
    vertexShaderSource
  );

const fragmentShader =
  createShader(
    gl,
    gl.FRAGMENT_SHADER,
    fragmentShaderSource
  );
```

---

# 18. Helper Link Program

```javascript
function createProgram(
  gl,
  vertexShader,
  fragmentShader
) {

  const program =
    gl.createProgram();

  gl.attachShader(
    program,
    vertexShader
  );

  gl.attachShader(
    program,
    fragmentShader
  );

  gl.linkProgram(
    program
  );

  const success =
    gl.getProgramParameter(
      program,
      gl.LINK_STATUS
    );

  if (!success) {

    console.error(
      gl.getProgramInfoLog(program)
    );

    gl.deleteProgram(program);
    return null;
  }

  return program;
}
```

---

# 19. Membuat Shader Program

```javascript
const program =
  createProgram(
    gl,
    vertexShader,
    fragmentShader
  );

gl.useProgram(
  program
);
```

---

# 20. Mendapatkan Attribute Location

```javascript
const positionLocation =
  gl.getAttribLocation(
    program,
    "a_position"
  );
```

---

# 21. Menghubungkan Buffer ke Attribute

```javascript
gl.bindBuffer(
  gl.ARRAY_BUFFER,
  positionBuffer
);

gl.enableVertexAttribArray(
  positionLocation
);

gl.vertexAttribPointer(
  positionLocation,
  2,
  gl.FLOAT,
  false,
  0,
  0
);
```

Parameter `2` berarti X dan Y.

---

# 22. Draw Triangle

```javascript
gl.drawArrays(
  gl.TRIANGLES,
  0,
  3
);
```

Jika semua tahap benar, triangle akan tampil pada Canvas.

---

# 23. Checklist Program Minimum

```text
Canvas
↓
WebGL2 Context
↓
Viewport
↓
Vertex Data
↓
Buffer
↓
Shader Source
↓
Compile
↓
Link Program
↓
Attribute
↓
Draw
```

Gunakan urutan ini saat debugging.

---

# 24. Eksperimen 1 — Mengubah Geometry

Ubah vertex:

```javascript
const vertices =
  new Float32Array([
    -0.8, -0.7,
     0.2, -0.7,
     0.7,  0.5
  ]);
```

Amati:

- perubahan bentuk,
- perubahan posisi,
- hubungan setiap pasangan nilai dengan vertex.

---

# 25. Eksperimen 2 — Mengubah Warna

Ubah fragment shader:

```glsl
outColor =
  vec4(
    1.0,
    0.3,
    0.1,
    1.0
  );
```

Coba:

- merah,
- hijau,
- biru,
- kuning,
- cyan,
- magenta.

---

# 26. Eksperimen 3 — Draw Mode

Ganti:

```javascript
gl.TRIANGLES
```

dengan:

```javascript
gl.POINTS
```

atau:

```javascript
gl.LINE_LOOP
```

Bandingkan hasilnya.

---

# 27. Membuat Rectangle dari Dua Triangle

```javascript
const rectangleVertices =
  new Float32Array([

    -0.7, -0.5,
     0.1, -0.5,
    -0.7,  0.3,

    -0.7,  0.3,
     0.1, -0.5,
     0.1,  0.3

  ]);
```

Draw:

```javascript
gl.drawArrays(
  gl.TRIANGLES,
  0,
  6
);
```

---

# 28. Mengapa Rectangle Terdiri dari Dua Triangle?

```text
┌─────────┐
│       / │
│     /   │
│   /     │
│ /       │
└─────────┘
```

GPU sangat efisien memproses triangle.

Karena itu rectangle dapat direpresentasikan sebagai:

```text
Triangle 1
+
Triangle 2
```

---

# 29. Tugas Inti 1 — Multiple Primitive

Buat satu Canvas dengan minimal:

- 1 triangle,
- 1 rectangle,
- 1 line-based shape.

Syarat:

- posisi tidak saling menutupi,
- ukuran berbeda,
- menggunakan minimal dua draw mode.

---

# 30. Menambahkan Vertex Color

Buat color data:

```javascript
const colors =
  new Float32Array([
    1.0, 0.0, 0.0,
    0.0, 1.0, 0.0,
    0.0, 0.0, 1.0
  ]);
```

Artinya:

```text
V0 → Red
V1 → Green
V2 → Blue
```

---

# 31. Vertex Shader dengan Color

```glsl
#version 300 es

in vec2 a_position;
in vec3 a_color;

out vec3 v_color;

void main() {

  gl_Position =
    vec4(
      a_position,
      0.0,
      1.0
    );

  v_color = a_color;
}
```

---

# 32. Fragment Shader dengan Color

```glsl
#version 300 es

precision highp float;

in vec3 v_color;

out vec4 outColor;

void main() {

  outColor =
    vec4(
      v_color,
      1.0
    );
}
```

---

# 33. Interpolasi Warna

Jika tiap vertex memiliki warna berbeda:

```text
Red
Green
Blue
```

warna bagian dalam triangle diinterpolasi otomatis.

Ini memperlihatkan bagaimana data dapat diteruskan dari:

```text
Vertex Shader
↓
Rasterizer
↓
Fragment Shader
```

---

# 34. Membuat Color Buffer

```javascript
const colorBuffer =
  gl.createBuffer();

gl.bindBuffer(
  gl.ARRAY_BUFFER,
  colorBuffer
);

gl.bufferData(
  gl.ARRAY_BUFFER,
  colors,
  gl.STATIC_DRAW
);
```

---

# 35. Menghubungkan Color Attribute

```javascript
const colorLocation =
  gl.getAttribLocation(
    program,
    "a_color"
  );

gl.enableVertexAttribArray(
  colorLocation
);

gl.vertexAttribPointer(
  colorLocation,
  3,
  gl.FLOAT,
  false,
  0,
  0
);
```

---

# 36. Tugas Inti 2 — Colored Primitive

Buat minimal dua primitive yang memiliki:

- posisi berbeda,
- vertex color,
- interpolasi warna.

Minimal satu primitive harus memakai tiga warna vertex berbeda.

---

# 37. Rendering Loop

```javascript
function render() {

  gl.clear(
    gl.COLOR_BUFFER_BIT
  );

  drawScene();

  requestAnimationFrame(
    render
  );
}

render();
```

---

# 38. Animasi Dasar

Pada pertemuan ini kita belum menggunakan transformation matrix.

Sebagai latihan, posisi dapat diubah melalui offset sederhana:

```javascript
offsetX += speed;
```

Kemudian nilai offset dipakai saat memperbarui vertex data.

---

# 39. Update Buffer Dinamis

```javascript
gl.bindBuffer(
  gl.ARRAY_BUFFER,
  positionBuffer
);

gl.bufferData(
  gl.ARRAY_BUFFER,
  updatedVertices,
  gl.DYNAMIC_DRAW
);
```

Pendekatan ini digunakan sebagai pengantar.

Pada Pertemuan 3 transformasi akan dilakukan dengan matrix.

---

# 40. Tugas Inti 3 — Animasi

Buat satu primitive yang:

- bergerak horizontal atau vertikal,
- memiliki kecepatan yang jelas,
- memantul saat mencapai batas NDC,
- terus dianimasikan dengan `requestAnimationFrame()`.

---

# 41. Keyboard Interaction

Pada Praktikum Pertemuan 1 telah dibahas secara lebih rinci dua pola input keyboard, yaitu **event-based** dan **state-based**. Pada praktikum ini cukup gunakan prinsip berikut:

- **Event-based** digunakan untuk aksi diskrit atau sekali tekan, misalnya reset posisi, mengganti mode, pause/resume, atau mengganti warna.
- **State-based** digunakan untuk aksi kontinu selama tombol ditahan, misalnya menggerakkan primitive ke kiri, kanan, atas, atau bawah.

Untuk **Tugas Praktikum 2**, jika keyboard digunakan untuk menggerakkan primitive secara kontinu, gunakan **state-based input**.

## 41.1 Contoh State-Based untuk Menggerakkan Primitive

Karena pada Pertemuan 2 belum menggunakan transformation matrix, translasi masih dilakukan dengan mengubah koordinat vertex kemudian meng-upload kembali data posisi ke buffer GPU.

Misalkan sebuah triangle memiliki vertex awal:

```javascript
const baseVertices =
  new Float32Array([
    -0.15, -0.15,
     0.15, -0.15,
     0.00,  0.15
  ]);
```

Buat state keyboard dan offset posisi:

```javascript
const keys = {};

let offsetX = 0.0;
let offsetY = 0.0;

const moveSpeed = 0.02;
```

Event keyboard hanya mencatat apakah tombol sedang ditekan atau dilepas:

```javascript
window.addEventListener(
  "keydown",
  (event) => {

    const controlledKeys = [
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown"
    ];

    if (controlledKeys.includes(event.key)) {
      event.preventDefault();
    }

    keys[event.key] = true;
  }
);

window.addEventListener(
  "keyup",
  (event) => {
    keys[event.key] = false;
  }
);
```

Perubahan posisi dilakukan pada fungsi `updateKeyboard()` yang dipanggil setiap frame:

```javascript
function updateKeyboard() {

  if (keys["ArrowLeft"]) {
    offsetX -= moveSpeed;
  }

  if (keys["ArrowRight"]) {
    offsetX += moveSpeed;
  }

  if (keys["ArrowUp"]) {
    offsetY += moveSpeed;
  }

  if (keys["ArrowDown"]) {
    offsetY -= moveSpeed;
  }
}
```

Perhatikan bahwa pada NDC:

```text
+X → kanan
-X → kiri
+Y → atas
-Y → bawah
```

Ini berbeda dengan koordinat Canvas 2D pada Pertemuan 1, yang memiliki sumbu Y positif ke bawah.

## 41.2 Memperbarui Vertex Buffer

Buat fungsi untuk menghasilkan posisi vertex terbaru:

```javascript
function updatePositionBuffer() {

  const updatedVertices =
    new Float32Array(
      baseVertices.length
    );

  for (
    let i = 0;
    i < baseVertices.length;
    i += 2
  ) {
    updatedVertices[i] =
      baseVertices[i] + offsetX;

    updatedVertices[i + 1] =
      baseVertices[i + 1] + offsetY;
  }

  gl.bindBuffer(
    gl.ARRAY_BUFFER,
    positionBuffer
  );

  gl.bufferData(
    gl.ARRAY_BUFFER,
    updatedVertices,
    gl.DYNAMIC_DRAW
  );
}
```

Alurnya:

```text
Keyboard State
      ↓
Update offsetX / offsetY
      ↓
Update Vertex Coordinate
      ↓
Upload Position Buffer
      ↓
Draw Primitive
```

Kemudian panggil pada rendering loop:

```javascript
function render() {

  updateKeyboard();
  updatePositionBuffer();

  gl.clear(
    gl.COLOR_BUFFER_BIT
  );

  drawScene();

  requestAnimationFrame(
    render
  );
}

render();
```

Dengan pola ini, selama tombol panah masih ditekan, posisi primitive diperbarui pada setiap frame.

## 41.3 Contoh Event-Based untuk Aksi Sekali Tekan

Untuk aksi yang tidak perlu berlangsung terus-menerus, gunakan event-based.

Contoh: tekan `R` untuk mengembalikan primitive ke posisi awal.

Tambahkan pada event `keydown`:

```javascript
window.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key.toLowerCase() === "r" &&
      !event.repeat
    ) {
      offsetX = 0.0;
      offsetY = 0.0;
    }

  }
);
```

Dalam aplikasi final, kedua pola dapat digunakan bersama:

```text
Arrow Keys
→ state-based
→ movement kontinu

R
→ event-based
→ reset posisi
```

> Pada Pertemuan 3, translasi tidak lagi dilakukan dengan mengubah seluruh vertex satu per satu. Posisi object akan diubah menggunakan **transformation matrix** di vertex shader.

---

# 42. Mouse Position

```javascript
canvas.addEventListener(
  "mousemove",
  (event) => {

    const rect =
      canvas.getBoundingClientRect();

    const x =
      event.clientX - rect.left;

    const y =
      event.clientY - rect.top;

    console.log(x, y);
  }
);
```

---

# 43. Konversi Pixel ke NDC

```javascript
const ndcX =
  (x / canvas.width) * 2 - 1;

const ndcY =
  1 - (y / canvas.height) * 2;
```

Hasil berada pada rentang kurang lebih:

```text
-1 sampai +1
```

---

# 44. Tugas Inti 4 — Interaksi

Tambahkan minimal satu bentuk interaksi berikut:

- primitive mengikuti mouse,
- primitive digerakkan keyboard,
- warna berubah ketika diklik,
- primitive baru muncul pada posisi klik.

Jika memilih **keyboard movement**, gunakan pola:

```text
keydown / keyup
      ↓
keyboard state
      ↓
update setiap frame
      ↓
ubah vertex position
      ↓
update buffer
      ↓
render
```

Contoh implementasi yang dapat digunakan adalah kode **state-based keyboard movement** pada Bagian 41.

Untuk aksi tambahan yang bersifat sekali tekan, misalnya:

```text
R → reset posisi
C → ganti warna
P → pause / resume
```

boleh menggunakan **event-based input**.

---

# 45. Tugas Utama — WebGL Primitive Playground

Aplikasi final harus memiliki:

1. Minimal 3 primitive.
2. Minimal 2 draw mode.
3. Vertex color pada minimal satu primitive.
4. Minimal 3 warna.
5. Minimal satu object bergerak.
6. Minimal satu interaksi mouse/keyboard.
7. Rendering loop.
8. Background non-default.
9. Layout visual yang rapi.
10. Source code terstruktur.

Jika interaksi yang dipilih berupa **pergerakan keyboard kontinu**, implementasikan dengan **state-based input**. Event-based tetap boleh digunakan untuk aksi diskrit seperti reset, toggle, atau perubahan mode.

---

# 46. Struktur Program yang Disarankan

```text
initializeWebGL()
createShaders()
createProgram()
createBuffers()
setupAttributes()
update()
draw()
render()
```

Tujuan:

> memisahkan initialization, update, dan rendering.

---

# 47. Challenge A — Primitive Selector

Tambahkan kontrol sederhana:

```text
Triangle
Lines
Points
```

Pilihan pengguna mengubah draw mode.

---

# 48. Challenge B — Color Control

Tambahkan kontrol untuk mengganti warna:

- merah,
- hijau,
- biru,
- cyan,
- random.

Boleh menggunakan button HTML.

---

# 49. Challenge C — Spawn Primitive

Saat Canvas diklik:

```text
Mouse Pixel
    ↓
Convert to NDC
    ↓
Create Primitive
    ↓
Render
```

Primitive baru muncul di lokasi click.

---

# 50. Challenge D — Multiple Moving Objects

Buat minimal tiga object dengan:

- posisi awal berbeda,
- kecepatan berbeda,
- arah berbeda.

Object memantul pada batas Canvas.

---

# 51. Challenge E — Procedural Pattern

Buat pola dengan perulangan JavaScript.

Contoh:

- grid,
- repeated triangle,
- star-like line,
- geometric pattern.

Tujuan:

> membangun vertex data secara procedural.

---

# 52. Challenge F — Simple HUD

Tambahkan teks HTML di luar Canvas:

- FPS,
- jumlah primitive,
- draw mode aktif,
- mouse NDC.

Tidak perlu melakukan text rendering langsung dengan WebGL.

---

# 53. Beban Tugas

## Wajib

- Tugas Inti 1
- Tugas Inti 2
- Tugas Inti 3
- Tugas Inti 4
- Tugas Utama

## Challenge

Pilih minimal **dua** dari Challenge A–F.

Desain ini dibuat agar praktikum cukup kaya tanpa menjadi terlalu berat.

---

# 54. Debugging Checklist

Jika Canvas kosong:

- cek browser console,
- cek WebGL2 Context,
- cek shader compile,
- cek shader program link,
- cek buffer binding,
- cek attribute location,
- cek `vertexAttribPointer()`,
- cek draw count,
- cek draw mode,
- cek NDC,
- cek viewport.

---

# 55. Debug Shader

Gunakan:

```javascript
console.log(
  gl.getShaderInfoLog(shader)
);
```

dan:

```javascript
console.log(
  gl.getProgramInfoLog(program)
);
```

Biasakan membaca pesan error daripada menebak masalah.

---

# 56. Pertanyaan Analisis

Jawab singkat:

1. Mengapa WebGL menggunakan NDC?
2. Apa fungsi `Float32Array`?
3. Mengapa vertex data perlu masuk buffer?
4. Apa fungsi `gl.bindBuffer()`?
5. Apa fungsi `gl.bufferData()`?
6. Apa perbedaan vertex shader dan fragment shader?
7. Mengapa fragment dapat lebih banyak daripada vertex?
8. Apa fungsi `vertexAttribPointer()`?
9. Apa arti `gl.TRIANGLES`?
10. Mengapa rectangle direpresentasikan oleh triangle?
11. Apa manfaat rendering loop?
12. Mengapa mouse pixel perlu dikonversi ke NDC?
13. Apa hubungan buffer dan attribute?
14. Apa yang terjadi ketika draw call dijalankan?

---

# 57. Refleksi

Tuliskan 3–5 kalimat mengenai:

- bagian tersulit,
- konsep baru yang dipahami,
- hubungan buffer, shader, attribute, dan draw call,
- kesalahan yang ditemukan saat debugging,
- hal yang ingin dicoba lebih lanjut.

---

# 58. Output Pengumpulan

```text
praktikum-webgl-02/
├── index.html
├── main.js
├── style.css
├── README.md
└── screenshot.png
```

Jika diperlukan, tambahkan video demo singkat.

---

# 59. Isi README

README minimal memuat:

- nama mahasiswa,
- NRP,
- deskripsi aplikasi,
- primitive yang digunakan,
- draw mode,
- fitur animasi,
- fitur interaksi,
- challenge yang dikerjakan,
- cara menjalankan project.

---

# 60. Kriteria Penilaian

## Technical Correctness — 30%

- context,
- buffer,
- shader,
- attribute,
- draw call bekerja benar.

## Visual Result — 25%

- primitive terbaca,
- warna jelas,
- animasi stabil,
- layout tidak berantakan.

## Understanding — 25%

- mahasiswa dapat menjelaskan pipeline dan implementasinya.

## Implementation Quality — 20%

- kode terstruktur,
- penamaan jelas,
- duplikasi minim.

---

# 61. Target Akhir Praktikum

Mahasiswa harus mampu menjelaskan:

```text
Vertex Data
   ↓
Buffer
   ↓
Attribute
   ↓
Vertex Shader
   ↓
Primitive
   ↓
Rasterization
   ↓
Fragment Shader
   ↓
Draw Call
   ↓
Image
```

Tidak cukup hanya membuat triangle tampil.

Mahasiswa perlu memahami **mengapa triangle tersebut dapat muncul di layar**.

---

# 62. Hubungan dengan Pertemuan 3

Pada praktikum ini, pergerakan object masih dapat dibuat dengan mengubah data vertex.

Pada Pertemuan 3 kita akan menggunakan:

- translation,
- rotation,
- scaling,
- matrix,
- homogeneous coordinate.

```text
Vertex
  ↓
Transformation Matrix
  ↓
Vertex Shader
  ↓
Rendered Object
```

---

# 63. Ringkasan Praktikum

Konsep utama:

```text
JavaScript
+
WebGL
+
GPU Buffer
+
Shader
+
Attribute
+
Primitive
+
Draw Call
+
Rendering Loop
```

Praktikum ini menjadi fondasi untuk transformasi, kamera, texture, lighting, dan 3D rendering pada pertemuan-pertemuan berikutnya.
