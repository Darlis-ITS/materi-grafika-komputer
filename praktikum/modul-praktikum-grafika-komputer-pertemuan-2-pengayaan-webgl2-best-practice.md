# Modul Praktikum Grafika Komputer — Pertemuan 2 (Tambahan)
## WebGL2 Fundamental & GLSL Basics (best practice)

**Mata Kuliah:** EF234504 — Grafika Komputer  
**Pertemuan:** 2 — Tambahan  
**Topik:** WebGL2 Fundamental, GLSL Basics, Shader Interface, dan Primitive Assembly  
**Dosen:** Dr. Darlis Herumurti  
**Departemen:** Teknik Informatika  

---

# 1. Deskripsi Praktikum Tambahan

Modul tambahan ini melengkapi Praktikum Pertemuan 2 tentang **WebGL Fundamental**. Fokus modul ini bukan hanya membuat bentuk muncul di layar, tetapi membiasakan mahasiswa menulis program WebGL2 dengan struktur yang lebih rapi dan mudah di-debug.

Praktikum ini menekankan:

1. penggunaan **WebGL2** dan **GLSL ES 3.00**;
2. pemahaman **graphics pipeline**;
3. pemisahan antara **shader**, **program**, **buffer**, **attribute**, **uniform**, dan **draw call**;
4. penggunaan shader source melalui tag `<script>`, bukan string JavaScript panjang;
5. penggunaan qualifier/interface shader: `in`, `out`, dan `uniform`;
6. pemahaman istilah konseptual `attribute`, `uniform`, dan `varying`;
7. penggunaan beberapa `drawArrays()` untuk menggambar beberapa primitive;
8. animasi dan interaksi sederhana tanpa transformation matrix atau MVP.

Pada modul ini, **MVP matrix, camera, lighting, dan texturing belum digunakan**. Pergerakan objek dilakukan secara sederhana menggunakan uniform `u_offset` atau perubahan nilai yang dihitung di JavaScript.

---

# 2. Tujuan Praktikum

Setelah menyelesaikan praktikum tambahan ini, mahasiswa diharapkan mampu:

1. Menjelaskan urutan graphics pipeline sederhana pada WebGL2.
2. Menjelaskan peran vertex shader dan fragment shader.
3. Menjelaskan perbedaan konsep `attribute`, `uniform`, dan `varying`.
4. Menulis shader WebGL2 menggunakan `#version 300 es`.
5. Menggunakan `in` sebagai vertex input pada vertex shader.
6. Menggunakan `out` dan `in` sebagai penghubung vertex shader dan fragment shader.
7. Menggunakan `uniform` untuk data yang berubah per draw call.
8. Menghubungkan nama attribute dan uniform antara GLSL dan JavaScript.
9. Menggunakan konvensi penamaan `a_`, `u_`, dan `v_` secara konsisten.
10. Menyusun boilerplate WebGL2 dengan urutan yang benar.
11. Menggunakan VAO dan buffer untuk data vertex interleaved.
12. Menggambar beberapa segitiga dengan brightness berbeda.
13. Menggambar beberapa point dengan point size berbeda.
14. Menggunakan beberapa mode primitive: `TRIANGLES`, `POINTS`, `LINES`, `LINE_STRIP`, `LINE_LOOP`, `TRIANGLE_STRIP`, dan `TRIANGLE_FAN`.
15. Menambahkan animasi sederhana dengan `requestAnimationFrame()`.
16. Menambahkan interaksi keyboard dan slider tanpa menggunakan MVP matrix.
17. Melakukan debugging shader, program, attribute, uniform, dan draw call.

---

# 3. Konsep Utama

Praktikum ini menggunakan alur berikut:

```text
JavaScript / CPU
    ↓
Vertex Data
    ↓
GPU Buffer
    ↓
Attribute / Vertex Input
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

Penjelasan singkat:

| Tahap | Fungsi |
|---|---|
| JavaScript | Menyiapkan data, shader, buffer, uniform, dan draw call |
| Vertex Data | Data posisi dan warna setiap vertex |
| Buffer | Tempat penyimpanan data vertex di GPU |
| Attribute / Vertex Input | Jalur masuk data per vertex ke vertex shader |
| Vertex Shader | Menghitung posisi vertex dan mengirim data ke tahap berikutnya |
| Primitive Assembly | Menyusun vertex menjadi titik, garis, atau segitiga |
| Rasterization | Mengubah primitive menjadi fragment |
| Fragment Shader | Menentukan warna fragment |
| Framebuffer | Tempat hasil rendering sebelum tampil di canvas |
| Canvas | Area gambar pada halaman web |

---

# 4. Catatan Penting WebGL2 dan GLSL ES 3.00

Pada WebGL1, shader sering menggunakan istilah berikut:

```glsl
attribute vec2 a_position;
varying vec3 v_color;
```

Pada WebGL2 dengan GLSL ES 3.00, penulisannya berubah menjadi:

```glsl
in vec2 a_position;
out vec3 v_color;
```

Tabel perbandingan:

| Konsep | WebGL1 / GLSL ES 1.00 | WebGL2 / GLSL ES 3.00 | Fungsi |
|---|---|---|---|
| Attribute | `attribute` | `in` di vertex shader | Data per vertex dari JavaScript |
| Uniform | `uniform` | `uniform` | Data konstan untuk satu draw call |
| Varying | `varying` | `out` di vertex shader dan `in` di fragment shader | Data antar-shader yang diinterpolasi |
| Fragment output | `gl_FragColor` | `out vec4 outColor` | Warna akhir fragment |

Dalam modul ini, istilah **attribute**, **uniform**, dan **varying** tetap digunakan secara konseptual, tetapi kode shader menggunakan sintaks WebGL2.

---

# 5. Konvensi Penamaan

Gunakan prefix berikut agar kode lebih mudah dibaca:

```text
a_ → attribute / vertex input
u_ → uniform
v_ → varying / data antar-shader
```

Contoh:

```glsl
in vec2 a_position;
in vec3 a_color;

uniform float u_time;
uniform vec2 u_offset;
uniform float u_brightness;
uniform float u_pointSize;

out vec3 v_color;
```

Makna:

| Nama | Arti |
|---|---|
| `a_position` | data posisi dari buffer JavaScript ke vertex shader |
| `a_color` | data warna dari buffer JavaScript ke vertex shader |
| `u_time` | waktu animasi dari JavaScript ke shader |
| `u_offset` | perpindahan sederhana dari JavaScript ke shader |
| `u_brightness` | tingkat kecerahan per draw call |
| `u_pointSize` | ukuran titik saat menggambar `POINTS` |
| `v_color` | warna yang dikirim dari vertex shader ke fragment shader |

---

# 6. Aturan Nama yang Harus Sama

## 6.1 Attribute: Nama GLSL dan String JavaScript Harus Sama

GLSL:

```glsl
in vec2 a_position;
```

JavaScript:

```javascript
const aPositionLocation = gl.getAttribLocation(program, "a_position");
```

Yang harus sama adalah string:

```javascript
"a_position"
```

Nama variabel JavaScript boleh berbeda.

Contoh ini tetap benar:

```javascript
const lokasiPosisi = gl.getAttribLocation(program, "a_position");
```

Karena yang dicocokkan WebGL adalah string `"a_position"`, bukan nama variabel `lokasiPosisi`.

---

## 6.2 Uniform: Nama GLSL dan String JavaScript Harus Sama

GLSL:

```glsl
uniform float u_brightness;
```

JavaScript:

```javascript
const uBrightnessLocation = gl.getUniformLocation(program, "u_brightness");
```

Jika GLSL memakai:

```glsl
uniform float u_brightness;
```

maka JavaScript tidak boleh mencari:

```javascript
gl.getUniformLocation(program, "brightness");
```

Nama harus sama persis.

---

## 6.3 Varying: Nama dan Tipe Vertex Shader serta Fragment Shader Harus Cocok

Vertex shader:

```glsl
out vec3 v_color;
```

Fragment shader:

```glsl
in vec3 v_color;
```

Benar karena nama dan tipe sama.

Contoh salah:

```glsl
// Vertex shader
out vec3 v_color;
```

```glsl
// Fragment shader
in vec4 v_color;
```

Salah karena tipenya berbeda.

Contoh salah lainnya:

```glsl
// Vertex shader
out vec3 v_color;
```

```glsl
// Fragment shader
in vec3 color;
```

Salah karena namanya berbeda.

---

# 7. Persiapan Project

Gunakan struktur project berikut:

```text
praktikum-webgl2-best-practice/
├── index.html
├── main.js
├── style.css
└── README.md
```

Software yang digunakan:

- Visual Studio Code;
- Google Chrome, Chromium, Firefox, atau browser modern lain;
- Browser Developer Tools;
- Node.js;
- Vite atau local development server.

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

Alternatif sederhana:

```bash
npx serve
```

atau gunakan ekstensi **Live Server** pada Visual Studio Code.

---

# 8. File `index.html`

Pada praktikum ini, shader source ditulis menggunakan tag `<script>`. Tujuannya agar kode GLSL terlihat sebagai shader, bukan sebagai string JavaScript panjang.

Buat file `index.html`:

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>WebGL2 Fundamental & GLSL Basics</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <main class="page">
    <section class="panel">
      <div>
        <p class="eyebrow">EF234504 — Grafika Komputer</p>
        <h1>WebGL2 Fundamental & GLSL Basics</h1>
        <p class="subtitle">
          Attribute, uniform, varying, primitive assembly, multiple draw calls,
          animasi sederhana, dan interaksi tanpa MVP matrix.
        </p>
      </div>

      <div class="controls">
        <label>
          Brightness Global
          <input id="brightnessSlider" type="range" min="0.2" max="1.8" step="0.01" value="1.0" />
        </label>

        <label>
          Speed
          <input id="speedSlider" type="range" min="0.0" max="2.5" step="0.01" value="1.0" />
        </label>

        <button id="resetButton" type="button">Reset Offset</button>
        <button id="pauseButton" type="button">Pause</button>
      </div>

      <p class="hint">
        Keyboard: Arrow Keys untuk menggeser objek, R untuk reset, Space untuk pause/resume.
      </p>
    </section>

    <section class="canvas-wrap">
      <canvas id="glCanvas" width="900" height="560"></canvas>
      <div id="hud" class="hud">HUD</div>
    </section>
  </main>

  <!-- Vertex Shader -->
  <script id="vertex-shader" type="x-shader/x-vertex">
#version 300 es

in vec2 a_position;
in vec3 a_color;

uniform float u_time;
uniform vec2 u_offset;
uniform float u_pointSize;
uniform float u_waveAmount;

out vec3 v_color;

void main() {
  float wave = sin(u_time + a_position.x * 8.0) * u_waveAmount;

  vec2 animatedPosition = a_position;
  animatedPosition.y += wave;
  animatedPosition += u_offset;

  gl_Position = vec4(animatedPosition, 0.0, 1.0);
  gl_PointSize = u_pointSize;

  v_color = a_color;
}
  </script>

  <!-- Fragment Shader -->
  <script id="fragment-shader" type="x-shader/x-fragment">
#version 300 es

precision mediump float;

in vec3 v_color;

uniform float u_brightness;
uniform float u_globalBrightness;

out vec4 outColor;

void main() {
  vec3 finalColor = v_color * u_brightness * u_globalBrightness;
  outColor = vec4(finalColor, 1.0);
}
  </script>

  <script type="module" src="./main.js"></script>
</body>
</html>
```

Catatan penting:

1. Shader source berada di dalam HTML.
2. Vertex shader memiliki `in`, `uniform`, dan `out`.
3. Fragment shader memiliki `in`, `uniform`, dan `out`.
4. JavaScript berada di file terpisah `main.js`.
5. CSS berada di file terpisah `style.css`.

---

# 9. File `style.css`

Buat file `style.css`:

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
  background:
    radial-gradient(circle at top left, rgba(35, 117, 255, 0.18), transparent 32%),
    linear-gradient(135deg, #08111f, #111827 55%, #0b1020);
  color: #e5edf8;
}

.page {
  width: min(1100px, calc(100vw - 32px));
  margin: 28px auto;
}

.panel {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 20px;
  align-items: start;
  padding: 22px;
  border: 1px solid rgba(125, 183, 255, 0.25);
  border-radius: 18px;
  background: rgba(8, 17, 31, 0.74);
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.28);
}

.eyebrow {
  margin: 0 0 8px;
  color: #7dd3fc;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

h1 {
  margin: 0;
  font-size: clamp(26px, 4vw, 42px);
  line-height: 1.1;
}

.subtitle {
  margin: 12px 0 0;
  max-width: 680px;
  color: #b8c7dc;
  line-height: 1.6;
}

.controls {
  display: grid;
  gap: 12px;
}

label {
  display: grid;
  gap: 6px;
  color: #d7e7ff;
  font-size: 14px;
}

input[type="range"] {
  width: 100%;
}

button {
  padding: 10px 14px;
  border: 1px solid rgba(125, 211, 252, 0.55);
  border-radius: 10px;
  background: rgba(14, 165, 233, 0.14);
  color: #e0f2fe;
  font-weight: 700;
  cursor: pointer;
}

button:hover {
  background: rgba(14, 165, 233, 0.26);
}

.hint {
  grid-column: 1 / -1;
  margin: 4px 0 0;
  color: #9fb3ca;
  font-size: 14px;
}

.canvas-wrap {
  position: relative;
  margin-top: 18px;
  border: 1px solid rgba(125, 183, 255, 0.25);
  border-radius: 18px;
  overflow: hidden;
  background: #050914;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.34);
}

canvas {
  display: block;
  width: 100%;
  height: auto;
}

.hud {
  position: absolute;
  left: 14px;
  bottom: 14px;
  padding: 10px 12px;
  border: 1px solid rgba(226, 232, 240, 0.18);
  border-radius: 12px;
  background: rgba(2, 6, 23, 0.62);
  color: #dbeafe;
  font-family: Consolas, Monaco, monospace;
  font-size: 13px;
  line-height: 1.45;
}

@media (max-width: 760px) {
  .panel {
    grid-template-columns: 1fr;
  }
}
```

---

# 10. File `main.js`

Buat file `main.js`. Kode ini sudah lengkap dan dapat langsung dijalankan.

```javascript
const canvas = document.getElementById("glCanvas");
const hud = document.getElementById("hud");

const brightnessSlider = document.getElementById("brightnessSlider");
const speedSlider = document.getElementById("speedSlider");
const resetButton = document.getElementById("resetButton");
const pauseButton = document.getElementById("pauseButton");

const gl = canvas.getContext("webgl2");

if (!gl) {
  throw new Error("WebGL2 tidak tersedia pada browser ini.");
}

function getShaderSource(id) {
  const shaderScript = document.getElementById(id);

  if (!shaderScript) {
    throw new Error(`Shader dengan id '${id}' tidak ditemukan.`);
  }

  return shaderScript.textContent.trim();
}

function createShader(gl, type, source) {
  const shader = gl.createShader(type);

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

  if (!success) {
    const info = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error(`Shader gagal dikompilasi:\n${info}`);
  }

  return shader;
}

function createProgram(gl, vertexShader, fragmentShader) {
  const program = gl.createProgram();

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  const success = gl.getProgramParameter(program, gl.LINK_STATUS);

  if (!success) {
    const info = gl.getProgramInfoLog(program);
    gl.deleteProgram(program);
    throw new Error(`Program gagal di-link:\n${info}`);
  }

  return program;
}

const vertexShaderSource = getShaderSource("vertex-shader");
const fragmentShaderSource = getShaderSource("fragment-shader");

const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
const program = createProgram(gl, vertexShader, fragmentShader);

// Format setiap vertex:
// x, y, r, g, b
const vertices = new Float32Array([
  // =====================================================
  // Segitiga 1: vertex 0, 1, 2
  // =====================================================
  -0.92, -0.65,  1.00, 0.20, 0.20,
  -0.55, -0.65,  1.00, 0.20, 0.20,
  -0.74, -0.20,  1.00, 0.20, 0.20,

  // =====================================================
  // Segitiga 2: vertex 3, 4, 5
  // =====================================================
  -0.22, -0.65,  0.20, 1.00, 0.35,
   0.22, -0.65,  0.20, 1.00, 0.35,
   0.00, -0.20,  0.20, 1.00, 0.35,

  // =====================================================
  // Segitiga 3: vertex 6, 7, 8
  // =====================================================
   0.55, -0.65,  0.25, 0.48, 1.00,
   0.92, -0.65,  0.25, 0.48, 1.00,
   0.74, -0.20,  0.25, 0.48, 1.00,

  // =====================================================
  // Point: vertex 9, 10, 11
  // =====================================================
  -0.62,  0.18,  1.00, 0.72, 0.25,
   0.00,  0.18,  0.35, 1.00, 1.00,
   0.62,  0.18,  1.00, 0.30, 1.00,

  // =====================================================
  // LINES: vertex 12, 13, 14, 15
  // =====================================================
  -0.86,  0.50,  1.00, 1.00, 0.25,
  -0.28,  0.50,  1.00, 1.00, 0.25,

   0.28,  0.50,  0.25, 1.00, 1.00,
   0.86,  0.50,  0.25, 1.00, 1.00,

  // =====================================================
  // LINE_STRIP: vertex 16, 17, 18, 19
  // =====================================================
  -0.86,  0.72,  0.75, 0.85, 1.00,
  -0.58,  0.86,  0.75, 0.85, 1.00,
  -0.30,  0.72,  0.75, 0.85, 1.00,
  -0.02,  0.86,  0.75, 0.85, 1.00,

  // =====================================================
  // LINE_LOOP: vertex 20, 21, 22, 23
  // =====================================================
   0.18,  0.68,  0.95, 0.70, 1.00,
   0.42,  0.68,  0.95, 0.70, 1.00,
   0.42,  0.88,  0.95, 0.70, 1.00,
   0.18,  0.88,  0.95, 0.70, 1.00,

  // =====================================================
  // TRIANGLE_STRIP: vertex 24, 25, 26, 27
  // =====================================================
  -0.92, -0.02,  0.20, 0.90, 0.80,
  -0.62, -0.02,  0.20, 0.90, 0.80,
  -0.92,  0.12,  0.20, 0.90, 0.80,
  -0.62,  0.12,  0.20, 0.90, 0.80,

  // =====================================================
  // TRIANGLE_FAN: vertex 28, 29, 30, 31, 32
  // =====================================================
   0.70,  0.04,  1.00, 0.82, 0.28,
   0.56, -0.10,  1.00, 0.52, 0.22,
   0.84, -0.10,  1.00, 0.52, 0.22,
   0.90,  0.14,  1.00, 0.52, 0.22,
   0.50,  0.14,  1.00, 0.52, 0.22,
]);

const vao = gl.createVertexArray();
gl.bindVertexArray(vao);

const vertexBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

const aPositionLocation = gl.getAttribLocation(program, "a_position");
const aColorLocation = gl.getAttribLocation(program, "a_color");

const stride = 5 * Float32Array.BYTES_PER_ELEMENT;
const positionOffset = 0;
const colorOffset = 2 * Float32Array.BYTES_PER_ELEMENT;

gl.enableVertexAttribArray(aPositionLocation);
gl.vertexAttribPointer(
  aPositionLocation,
  2,
  gl.FLOAT,
  false,
  stride,
  positionOffset
);

gl.enableVertexAttribArray(aColorLocation);
gl.vertexAttribPointer(
  aColorLocation,
  3,
  gl.FLOAT,
  false,
  stride,
  colorOffset
);

const uTimeLocation = gl.getUniformLocation(program, "u_time");
const uOffsetLocation = gl.getUniformLocation(program, "u_offset");
const uPointSizeLocation = gl.getUniformLocation(program, "u_pointSize");
const uWaveAmountLocation = gl.getUniformLocation(program, "u_waveAmount");
const uBrightnessLocation = gl.getUniformLocation(program, "u_brightness");
const uGlobalBrightnessLocation = gl.getUniformLocation(program, "u_globalBrightness");

const keys = {};
let offsetX = 0.0;
let offsetY = 0.0;
let paused = false;
let startTime = performance.now();
let pauseTime = 0;

window.addEventListener("keydown", (event) => {
  const controlledKeys = [
    "ArrowLeft",
    "ArrowRight",
    "ArrowUp",
    "ArrowDown",
    " ",
  ];

  if (controlledKeys.includes(event.key)) {
    event.preventDefault();
  }

  keys[event.key] = true;

  if (event.key.toLowerCase() === "r" && !event.repeat) {
    resetOffset();
  }

  if (event.key === " " && !event.repeat) {
    togglePause();
  }
});

window.addEventListener("keyup", (event) => {
  keys[event.key] = false;
});

resetButton.addEventListener("click", resetOffset);
pauseButton.addEventListener("click", togglePause);

function resetOffset() {
  offsetX = 0.0;
  offsetY = 0.0;
}

function togglePause() {
  paused = !paused;
  pauseButton.textContent = paused ? "Resume" : "Pause";

  if (paused) {
    pauseTime = performance.now();
  } else {
    const pausedDuration = performance.now() - pauseTime;
    startTime += pausedDuration;
  }
}

function updateKeyboard() {
  const speedValue = Number(speedSlider.value);
  const moveSpeed = 0.012 * speedValue;

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

  offsetX = Math.max(-0.25, Math.min(0.25, offsetX));
  offsetY = Math.max(-0.18, Math.min(0.18, offsetY));
}

function setCommonUniforms(time, brightness, pointSize, waveAmount) {
  gl.uniform1f(uTimeLocation, time);
  gl.uniform2f(uOffsetLocation, offsetX, offsetY);
  gl.uniform1f(uPointSizeLocation, pointSize);
  gl.uniform1f(uWaveAmountLocation, waveAmount);
  gl.uniform1f(uBrightnessLocation, brightness);
  gl.uniform1f(uGlobalBrightnessLocation, Number(brightnessSlider.value));
}

function drawScene(time) {
  gl.useProgram(program);
  gl.bindVertexArray(vao);

  // =====================================================
  // Draw primitive 1: TRIANGLES
  // Tiga segitiga menggunakan brightness berbeda.
  // =====================================================

  setCommonUniforms(time, 0.45, 1.0, 0.00);
  gl.drawArrays(gl.TRIANGLES, 0, 3);

  setCommonUniforms(time, 1.00, 1.0, 0.00);
  gl.drawArrays(gl.TRIANGLES, 3, 3);

  setCommonUniforms(time, 1.45, 1.0, 0.00);
  gl.drawArrays(gl.TRIANGLES, 6, 3);

  // =====================================================
  // Draw primitive 2: POINTS
  // Point size berbeda. gl_PointSize hanya terlihat
  // saat draw mode yang digunakan adalah POINTS.
  // =====================================================

  setCommonUniforms(time, 1.00, 10.0, 0.00);
  gl.drawArrays(gl.POINTS, 9, 1);

  setCommonUniforms(time, 1.00, 24.0, 0.00);
  gl.drawArrays(gl.POINTS, 10, 1);

  setCommonUniforms(time, 1.00, 40.0, 0.00);
  gl.drawArrays(gl.POINTS, 11, 1);

  // =====================================================
  // Draw primitive 3: LINES
  // Setiap dua vertex menjadi satu garis.
  // =====================================================

  setCommonUniforms(time, 0.75, 1.0, 0.00);
  gl.drawArrays(gl.LINES, 12, 2);

  setCommonUniforms(time, 1.35, 1.0, 0.00);
  gl.drawArrays(gl.LINES, 14, 2);

  // =====================================================
  // Draw primitive 4: LINE_STRIP
  // Vertex dihubungkan secara berurutan.
  // =====================================================

  setCommonUniforms(time, 1.20, 1.0, 0.02);
  gl.drawArrays(gl.LINE_STRIP, 16, 4);

  // =====================================================
  // Draw primitive 5: LINE_LOOP
  // Vertex terakhir dihubungkan kembali ke vertex pertama.
  // =====================================================

  setCommonUniforms(time, 1.10, 1.0, 0.01);
  gl.drawArrays(gl.LINE_LOOP, 20, 4);

  // =====================================================
  // Draw primitive 6: TRIANGLE_STRIP
  // Empat vertex membentuk dua segitiga yang berbagi sisi.
  // =====================================================

  setCommonUniforms(time, 1.00, 1.0, 0.015);
  gl.drawArrays(gl.TRIANGLE_STRIP, 24, 4);

  // =====================================================
  // Draw primitive 7: TRIANGLE_FAN
  // Vertex pertama menjadi pusat fan.
  // =====================================================

  setCommonUniforms(time, 1.00, 1.0, 0.015);
  gl.drawArrays(gl.TRIANGLE_FAN, 28, 5);
}

function render(now) {
  if (!paused) {
    updateKeyboard();
  }

  const speedValue = Number(speedSlider.value);
  const time = paused
    ? (pauseTime - startTime) * 0.001 * speedValue
    : (now - startTime) * 0.001 * speedValue;

  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.clearColor(0.03, 0.05, 0.10, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  drawScene(time);

  hud.innerHTML = [
    `Primitive: TRIANGLES, POINTS, LINES, LINE_STRIP, LINE_LOOP, TRIANGLE_STRIP, TRIANGLE_FAN`,
    `offsetX: ${offsetX.toFixed(3)} | offsetY: ${offsetY.toFixed(3)}`,
    `brightness: ${Number(brightnessSlider.value).toFixed(2)}`,
    `speed: ${speedValue.toFixed(2)}`,
    `paused: ${paused}`,
  ].join("<br>");

  requestAnimationFrame(render);
}

requestAnimationFrame(render);
```

---

# 11. Urutan Boilerplate WebGL2

Program WebGL2 sebaiknya ditulis dengan urutan yang jelas.

```text
1. Ambil canvas
2. Ambil WebGL2 context
3. Ambil shader source dari <script>
4. Compile vertex shader
5. Compile fragment shader
6. Link shader menjadi program
7. Buat VAO
8. Buat buffer
9. Upload vertex data ke buffer
10. Ambil attribute location
11. Atur vertexAttribPointer()
12. Ambil uniform location
13. Buat state interaksi
14. Buat fungsi update
15. Buat fungsi drawScene
16. Buat render loop
```

Prinsip penting:

```text
Shader dibuat sekali.
Program dibuat sekali.
Buffer dibuat sekali.
Attribute dikonfigurasi sekali.
Uniform dapat diubah berkali-kali.
Draw call dapat dijalankan berkali-kali.
```

---

# 12. Penjelasan Shader

## 12.1 Vertex Shader

```glsl
#version 300 es

in vec2 a_position;
in vec3 a_color;

uniform float u_time;
uniform vec2 u_offset;
uniform float u_pointSize;
uniform float u_waveAmount;

out vec3 v_color;

void main() {
  float wave = sin(u_time + a_position.x * 8.0) * u_waveAmount;

  vec2 animatedPosition = a_position;
  animatedPosition.y += wave;
  animatedPosition += u_offset;

  gl_Position = vec4(animatedPosition, 0.0, 1.0);
  gl_PointSize = u_pointSize;

  v_color = a_color;
}
```

Penjelasan:

| Baris | Fungsi |
|---|---|
| `in vec2 a_position` | menerima posisi vertex dari buffer |
| `in vec3 a_color` | menerima warna vertex dari buffer |
| `uniform float u_time` | menerima waktu animasi dari JavaScript |
| `uniform vec2 u_offset` | menerima offset pergerakan dari JavaScript |
| `uniform float u_pointSize` | menentukan ukuran titik untuk mode `POINTS` |
| `uniform float u_waveAmount` | menentukan besar animasi gelombang sederhana |
| `out vec3 v_color` | mengirim warna ke fragment shader |
| `gl_Position` | posisi akhir vertex |
| `gl_PointSize` | ukuran titik ketika primitive adalah `POINTS` |

Animasi sederhana dilakukan dengan:

```glsl
float wave = sin(u_time + a_position.x * 8.0) * u_waveAmount;
```

Pergerakan keyboard dilakukan dengan:

```glsl
animatedPosition += u_offset;
```

Jadi, objek dapat bergerak tanpa menggunakan matrix.

---

## 12.2 Fragment Shader

```glsl
#version 300 es

precision mediump float;

in vec3 v_color;

uniform float u_brightness;
uniform float u_globalBrightness;

out vec4 outColor;

void main() {
  vec3 finalColor = v_color * u_brightness * u_globalBrightness;
  outColor = vec4(finalColor, 1.0);
}
```

Penjelasan:

| Baris | Fungsi |
|---|---|
| `in vec3 v_color` | menerima warna dari vertex shader |
| `uniform float u_brightness` | brightness per draw call |
| `uniform float u_globalBrightness` | brightness global dari slider HTML |
| `out vec4 outColor` | warna akhir fragment |

Warna akhir dihitung dari:

```glsl
vec3 finalColor = v_color * u_brightness * u_globalBrightness;
```

Artinya, warna dapat berubah karena:

1. warna vertex (`a_color`);
2. brightness per draw call (`u_brightness`);
3. brightness global dari slider (`u_globalBrightness`).

---

# 13. Penjelasan Shader Program

Shader tidak digunakan secara terpisah. Vertex shader dan fragment shader harus digabung menjadi program.

```text
Vertex Shader
      +
Fragment Shader
      ↓
WebGLProgram
```

Kode compile shader:

```javascript
function createShader(gl, type, source) {
  const shader = gl.createShader(type);

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

  if (!success) {
    const info = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error(`Shader gagal dikompilasi:\n${info}`);
  }

  return shader;
}
```

Kode link program:

```javascript
function createProgram(gl, vertexShader, fragmentShader) {
  const program = gl.createProgram();

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  const success = gl.getProgramParameter(program, gl.LINK_STATUS);

  if (!success) {
    const info = gl.getProgramInfoLog(program);
    gl.deleteProgram(program);
    throw new Error(`Program gagal di-link:\n${info}`);
  }

  return program;
}
```

Best practice:

1. Selalu cek `COMPILE_STATUS`.
2. Selalu cek `LINK_STATUS`.
3. Tampilkan `getShaderInfoLog()` jika shader gagal.
4. Tampilkan `getProgramInfoLog()` jika program gagal.
5. Jangan menebak error shader tanpa membaca console.

---

# 14. Penjelasan Vertex Data Interleaved

Pada praktikum ini, data posisi dan warna digabung dalam satu array.

```javascript
const vertices = new Float32Array([
  // x, y, r, g, b
  -0.92, -0.65,  1.00, 0.20, 0.20,
  -0.55, -0.65,  1.00, 0.20, 0.20,
  -0.74, -0.20,  1.00, 0.20, 0.20,
]);
```

Setiap vertex memiliki lima komponen:

```text
x, y, r, g, b
```

Maka stride-nya:

```javascript
const stride = 5 * Float32Array.BYTES_PER_ELEMENT;
```

Attribute posisi mulai dari komponen pertama:

```javascript
const positionOffset = 0;
```

Attribute warna mulai setelah dua komponen posisi:

```javascript
const colorOffset = 2 * Float32Array.BYTES_PER_ELEMENT;
```

---

# 15. Penjelasan Attribute Pointer

## 15.1 Attribute `a_position`

GLSL:

```glsl
in vec2 a_position;
```

JavaScript:

```javascript
const aPositionLocation = gl.getAttribLocation(program, "a_position");
```

Konfigurasi:

```javascript
gl.enableVertexAttribArray(aPositionLocation);
gl.vertexAttribPointer(
  aPositionLocation,
  2,
  gl.FLOAT,
  false,
  stride,
  positionOffset
);
```

Makna:

| Parameter | Nilai | Arti |
|---|---:|---|
| location | `aPositionLocation` | attribute tujuan |
| size | `2` | ambil dua komponen: x dan y |
| type | `gl.FLOAT` | data bertipe float |
| normalized | `false` | tidak dinormalisasi |
| stride | `5 * Float32Array.BYTES_PER_ELEMENT` | jarak antarvertex |
| offset | `0` | posisi dimulai dari komponen pertama |

---

## 15.2 Attribute `a_color`

GLSL:

```glsl
in vec3 a_color;
```

JavaScript:

```javascript
const aColorLocation = gl.getAttribLocation(program, "a_color");
```

Konfigurasi:

```javascript
gl.enableVertexAttribArray(aColorLocation);
gl.vertexAttribPointer(
  aColorLocation,
  3,
  gl.FLOAT,
  false,
  stride,
  colorOffset
);
```

Makna:

| Parameter | Nilai | Arti |
|---|---:|---|
| location | `aColorLocation` | attribute tujuan |
| size | `3` | ambil tiga komponen: r, g, b |
| type | `gl.FLOAT` | data bertipe float |
| normalized | `false` | tidak dinormalisasi |
| stride | `5 * Float32Array.BYTES_PER_ELEMENT` | jarak antarvertex |
| offset | `2 * Float32Array.BYTES_PER_ELEMENT` | mulai setelah x dan y |

---

# 16. Penjelasan Uniform

Uniform location diambil sekali:

```javascript
const uTimeLocation = gl.getUniformLocation(program, "u_time");
const uOffsetLocation = gl.getUniformLocation(program, "u_offset");
const uPointSizeLocation = gl.getUniformLocation(program, "u_pointSize");
const uWaveAmountLocation = gl.getUniformLocation(program, "u_waveAmount");
const uBrightnessLocation = gl.getUniformLocation(program, "u_brightness");
const uGlobalBrightnessLocation = gl.getUniformLocation(program, "u_globalBrightness");
```

Nilai uniform dikirim sebelum draw call:

```javascript
gl.uniform1f(uTimeLocation, time);
gl.uniform2f(uOffsetLocation, offsetX, offsetY);
gl.uniform1f(uPointSizeLocation, pointSize);
gl.uniform1f(uWaveAmountLocation, waveAmount);
gl.uniform1f(uBrightnessLocation, brightness);
gl.uniform1f(uGlobalBrightnessLocation, Number(brightnessSlider.value));
```

Perhatikan bahwa uniform dapat berubah sebelum setiap draw call.

Contoh:

```javascript
setCommonUniforms(time, 0.45, 1.0, 0.00);
gl.drawArrays(gl.TRIANGLES, 0, 3);

setCommonUniforms(time, 1.00, 1.0, 0.00);
gl.drawArrays(gl.TRIANGLES, 3, 3);

setCommonUniforms(time, 1.45, 1.0, 0.00);
gl.drawArrays(gl.TRIANGLES, 6, 3);
```

Artinya:

```text
Segitiga 1 → brightness 0.45
Segitiga 2 → brightness 1.00
Segitiga 3 → brightness 1.45
```

---

# 17. Primitive Assembly

Primitive assembly adalah tahap saat WebGL menyusun vertex menjadi bentuk dasar.

Mode primitive ditentukan pada draw call:

```javascript
gl.drawArrays(mode, first, count);
```

Parameter:

| Parameter | Fungsi |
|---|---|
| `mode` | jenis primitive |
| `first` | index vertex pertama yang digunakan |
| `count` | jumlah vertex yang digunakan |

---

## 17.1 `gl.TRIANGLES`

```javascript
gl.drawArrays(gl.TRIANGLES, 0, 3);
```

Artinya:

```text
vertex 0, 1, 2 → satu segitiga
```

Jika:

```javascript
gl.drawArrays(gl.TRIANGLES, 0, 6);
```

maka:

```text
vertex 0, 1, 2 → segitiga pertama
vertex 3, 4, 5 → segitiga kedua
```

---

## 17.2 `gl.POINTS`

```javascript
gl.drawArrays(gl.POINTS, 9, 1);
```

Artinya:

```text
vertex 9 → satu titik
```

Ukuran titik diatur di vertex shader:

```glsl
gl_PointSize = u_pointSize;
```

Jika primitive bukan `POINTS`, `gl_PointSize` tidak berpengaruh pada ukuran segitiga atau garis.

---

## 17.3 `gl.LINES`

```javascript
gl.drawArrays(gl.LINES, 12, 2);
```

Artinya:

```text
vertex 12 dan 13 → satu garis
```

Jika menggunakan empat vertex:

```javascript
gl.drawArrays(gl.LINES, 12, 4);
```

maka:

```text
vertex 12 dan 13 → garis pertama
vertex 14 dan 15 → garis kedua
```

---

## 17.4 `gl.LINE_STRIP`

```javascript
gl.drawArrays(gl.LINE_STRIP, 16, 4);
```

Artinya:

```text
vertex 16 — vertex 17 — vertex 18 — vertex 19
```

Setiap vertex terhubung secara berurutan.

---

## 17.5 `gl.LINE_LOOP`

```javascript
gl.drawArrays(gl.LINE_LOOP, 20, 4);
```

Artinya:

```text
vertex 20 — vertex 21 — vertex 22 — vertex 23 — vertex 20
```

Vertex terakhir dihubungkan kembali ke vertex pertama.

---

## 17.6 `gl.TRIANGLE_STRIP`

```javascript
gl.drawArrays(gl.TRIANGLE_STRIP, 24, 4);
```

Artinya:

```text
vertex 24, 25, 26 → segitiga pertama
vertex 25, 26, 27 → segitiga kedua
```

Mode ini lebih hemat vertex, tetapi untuk pemula `TRIANGLES` biasanya lebih mudah dipahami.

---

## 17.7 `gl.TRIANGLE_FAN`

```javascript
gl.drawArrays(gl.TRIANGLE_FAN, 28, 5);
```

Artinya:

```text
vertex 28, 29, 30 → segitiga pertama
vertex 28, 30, 31 → segitiga kedua
vertex 28, 31, 32 → segitiga ketiga
```

Vertex pertama menjadi pusat fan.

---

# 18. Multiple Draw Calls

Pada praktikum ini, satu program dan satu buffer digunakan untuk banyak draw call.

```javascript
setCommonUniforms(time, 0.45, 1.0, 0.00);
gl.drawArrays(gl.TRIANGLES, 0, 3);

setCommonUniforms(time, 1.00, 1.0, 0.00);
gl.drawArrays(gl.TRIANGLES, 3, 3);

setCommonUniforms(time, 1.45, 1.0, 0.00);
gl.drawArrays(gl.TRIANGLES, 6, 3);
```

Pola ini penting:

```text
set uniform
    ↓
draw primitive
    ↓
set uniform berbeda
    ↓
draw primitive berikutnya
```

Dengan cara ini, objek dapat memiliki tampilan berbeda walaupun menggunakan shader yang sama.

---

# 19. Animasi Sederhana Tanpa MVP

Pada praktikum ini, animasi dilakukan menggunakan uniform `u_time`.

Di JavaScript:

```javascript
const time = (now - startTime) * 0.001 * speedValue;
gl.uniform1f(uTimeLocation, time);
```

Di vertex shader:

```glsl
float wave = sin(u_time + a_position.x * 8.0) * u_waveAmount;
animatedPosition.y += wave;
```

Artinya:

1. JavaScript menghitung waktu.
2. Waktu dikirim ke shader sebagai uniform.
3. Shader menggunakan fungsi `sin()` untuk membuat gerak naik-turun sederhana.
4. Besarnya animasi dikontrol oleh `u_waveAmount`.

Perlu ditekankan:

> Ini bukan transformasi matrix. Ini hanya manipulasi posisi sederhana di vertex shader sebagai pengantar animasi.

---

# 20. Interaksi Keyboard Tanpa MVP

Keyboard digunakan untuk mengubah nilai offset.

```javascript
const keys = {};
let offsetX = 0.0;
let offsetY = 0.0;
```

Event `keydown` dan `keyup` menyimpan status tombol:

```javascript
window.addEventListener("keydown", (event) => {
  keys[event.key] = true;
});

window.addEventListener("keyup", (event) => {
  keys[event.key] = false;
});
```

Fungsi update:

```javascript
function updateKeyboard() {
  const speedValue = Number(speedSlider.value);
  const moveSpeed = 0.012 * speedValue;

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

Nilai `offsetX` dan `offsetY` dikirim ke shader:

```javascript
gl.uniform2f(uOffsetLocation, offsetX, offsetY);
```

Di shader:

```glsl
animatedPosition += u_offset;
```

Dengan demikian objek bergeser tanpa matrix.

---

# 21. Interaksi Slider

Slider HTML digunakan untuk mengubah brightness global.

HTML:

```html
<input id="brightnessSlider" type="range" min="0.2" max="1.8" step="0.01" value="1.0" />
```

JavaScript:

```javascript
gl.uniform1f(uGlobalBrightnessLocation, Number(brightnessSlider.value));
```

Fragment shader:

```glsl
vec3 finalColor = v_color * u_brightness * u_globalBrightness;
```

Artinya brightness dapat dikontrol secara interaktif dari halaman HTML.

---

# 22. Tugas Inti 1 — Menjalankan Program

Jalankan project dan pastikan canvas menampilkan:

1. tiga segitiga di bagian bawah;
2. tiga titik dengan ukuran berbeda;
3. dua garis terpisah;
4. satu line strip;
5. satu line loop;
6. satu triangle strip;
7. satu triangle fan;
8. HUD di atas canvas;
9. slider brightness dan speed;
10. tombol reset dan pause.

Dokumentasikan hasilnya dengan screenshot.

---

# 23. Tugas Inti 2 — Analisis Attribute, Uniform, dan Varying

Jawab pertanyaan berikut pada `README.md`:

1. Apa fungsi `a_position`?
2. Apa fungsi `a_color`?
3. Mengapa `a_position` menggunakan `vec2`?
4. Mengapa `a_color` menggunakan `vec3`?
5. Apa fungsi `u_brightness`?
6. Apa fungsi `u_globalBrightness`?
7. Apa fungsi `u_pointSize`?
8. Apa fungsi `u_time`?
9. Apa fungsi `u_offset`?
10. Apa fungsi `v_color`?
11. Mengapa `v_color` dideklarasikan sebagai `out` di vertex shader?
12. Mengapa `v_color` dideklarasikan sebagai `in` di fragment shader?

---

# 24. Tugas Inti 3 — Modifikasi Brightness per Segitiga

Cari bagian berikut:

```javascript
setCommonUniforms(time, 0.45, 1.0, 0.00);
gl.drawArrays(gl.TRIANGLES, 0, 3);

setCommonUniforms(time, 1.00, 1.0, 0.00);
gl.drawArrays(gl.TRIANGLES, 3, 3);

setCommonUniforms(time, 1.45, 1.0, 0.00);
gl.drawArrays(gl.TRIANGLES, 6, 3);
```

Ubah nilai brightness menjadi kombinasi lain, misalnya:

```text
0.25
0.90
1.70
```

Amati perubahan pada canvas.

Tuliskan analisis:

1. Segitiga mana yang paling gelap?
2. Segitiga mana yang paling terang?
3. Apakah warna vertex berubah atau hanya intensitasnya?
4. Mengapa satu shader bisa menghasilkan brightness berbeda?

---

# 25. Tugas Inti 4 — Modifikasi Point Size

Cari bagian berikut:

```javascript
setCommonUniforms(time, 1.00, 10.0, 0.00);
gl.drawArrays(gl.POINTS, 9, 1);

setCommonUniforms(time, 1.00, 24.0, 0.00);
gl.drawArrays(gl.POINTS, 10, 1);

setCommonUniforms(time, 1.00, 40.0, 0.00);
gl.drawArrays(gl.POINTS, 11, 1);
```

Ubah ukuran point menjadi:

```text
6.0
30.0
60.0
```

Amati perubahan.

Jawab:

1. Mengapa ukuran point berubah?
2. Apakah `u_pointSize` memengaruhi segitiga?
3. Apakah `u_pointSize` memengaruhi garis?
4. Pada mode primitive apa `gl_PointSize` terlihat efeknya?

---

# 26. Tugas Inti 5 — Eksperimen Primitive Assembly

Ubah beberapa draw call dan amati hasilnya.

Contoh 1:

```javascript
gl.drawArrays(gl.TRIANGLES, 0, 3);
```

ubah menjadi:

```javascript
gl.drawArrays(gl.POINTS, 0, 3);
```

Contoh 2:

```javascript
gl.drawArrays(gl.LINE_LOOP, 20, 4);
```

ubah menjadi:

```javascript
gl.drawArrays(gl.LINE_STRIP, 20, 4);
```

Contoh 3:

```javascript
gl.drawArrays(gl.TRIANGLE_STRIP, 24, 4);
```

ubah menjadi:

```javascript
gl.drawArrays(gl.LINE_LOOP, 24, 4);
```

Jawab:

1. Apa yang berubah ketika mode primitive diganti?
2. Apakah data vertex berubah?
3. Apakah shader berubah?
4. Bagian mana yang menentukan cara vertex disusun menjadi bentuk?

---

# 27. Tugas Inti 6 — Menambahkan Primitive Baru

Tambahkan satu primitive baru ke dalam array `vertices`.

Pilihan:

1. satu triangle baru;
2. satu line baru;
3. satu line loop berbentuk persegi;
4. satu point baru;
5. satu triangle strip baru.

Syarat:

1. primitive baru tidak menutupi objek utama;
2. primitive memiliki warna berbeda;
3. primitive digambar dengan draw call baru;
4. primitive menggunakan `setCommonUniforms()` sebelum draw call.

Contoh menambahkan point baru:

```javascript
// Tambahkan di akhir vertices
0.00, 0.95, 1.00, 1.00, 1.00,
```

Jika vertex baru berada pada index 33, draw call-nya:

```javascript
setCommonUniforms(time, 1.0, 28.0, 0.0);
gl.drawArrays(gl.POINTS, 33, 1);
```

---

# 28. Tugas Inti 7 — Interaksi Keyboard

Gunakan keyboard untuk menggeser objek.

Tombol:

```text
ArrowLeft  → geser kiri
ArrowRight → geser kanan
ArrowUp    → geser atas
ArrowDown  → geser bawah
R          → reset
Space      → pause/resume
```

Analisis:

1. Variabel apa yang berubah ketika tombol panah ditekan?
2. Uniform apa yang dikirim ke shader?
3. Bagaimana shader menggunakan uniform tersebut?
4. Mengapa posisi dapat berubah tanpa MVP matrix?

---

# 29. Tugas Inti 8 — Modifikasi Animasi

Cari bagian ini di shader:

```glsl
float wave = sin(u_time + a_position.x * 8.0) * u_waveAmount;
```

Coba ubah angka `8.0` menjadi:

```text
2.0
5.0
12.0
20.0
```

Kemudian ubah `u_waveAmount` pada draw call tertentu:

```javascript
setCommonUniforms(time, 1.20, 1.0, 0.02);
```

menjadi:

```javascript
setCommonUniforms(time, 1.20, 1.0, 0.06);
```

Jawab:

1. Apa pengaruh angka `8.0`?
2. Apa pengaruh `u_waveAmount`?
3. Primitive mana yang terlihat bergerak paling jelas?
4. Mengapa animasi terjadi di vertex shader, bukan fragment shader?

---

# 30. Challenge A — Primitive Toggle

Tambahkan tombol HTML untuk menyalakan atau mematikan kelompok primitive tertentu.

Contoh:

```text
Show Triangles
Show Points
Show Lines
```

Gunakan variabel boolean di JavaScript:

```javascript
let showTriangles = true;
let showPoints = true;
let showLines = true;
```

Kemudian pada `drawScene()`:

```javascript
if (showTriangles) {
  setCommonUniforms(time, 1.0, 1.0, 0.0);
  gl.drawArrays(gl.TRIANGLES, 0, 3);
}
```

---

# 31. Challenge B — Mouse Interaction

Tambahkan interaksi mouse.

Saat canvas diklik, ubah `offsetX` dan `offsetY` berdasarkan posisi mouse dalam NDC.

Konversi pixel ke NDC:

```javascript
function pixelToNdc(event) {
  const rect = canvas.getBoundingClientRect();

  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  const ndcX = (x / rect.width) * 2 - 1;
  const ndcY = 1 - (y / rect.height) * 2;

  return { x: ndcX, y: ndcY };
}
```

Contoh penggunaan:

```javascript
canvas.addEventListener("click", (event) => {
  const mouse = pixelToNdc(event);

  offsetX = mouse.x * 0.2;
  offsetY = mouse.y * 0.2;
});
```

---

# 32. Challenge C — Procedural Primitive

Buat vertex data secara procedural menggunakan loop.

Contoh membuat beberapa point pada satu garis:

```javascript
const generated = [];

for (let i = 0; i < 10; i++) {
  const x = -0.9 + i * 0.2;
  const y = 0.0;

  generated.push(x, y, 1.0, 1.0, 1.0);
}

const generatedVertices = new Float32Array(generated);
```

Challenge ini melatih mahasiswa memahami bahwa vertex data dapat dibuat dari perhitungan, bukan selalu ditulis manual.

---

# 33. Challenge D — Object Berbeda, Uniform Berbeda

Tambahkan minimal tiga objek baru yang digambar menggunakan shader sama, tetapi dengan uniform berbeda:

```text
Objek A → brightness rendah, wave kecil
Objek B → brightness sedang, wave sedang
Objek C → brightness tinggi, wave besar
```

Tujuan challenge:

> Memahami bahwa satu shader program dapat dipakai untuk banyak objek dengan parameter berbeda.

---

# 34. Debugging Checklist

Jika canvas kosong, cek:

1. Apakah browser console menampilkan error?
2. Apakah `canvas.getContext("webgl2")` berhasil?
3. Apakah shader source berhasil diambil dari `<script>`?
4. Apakah vertex shader berhasil dikompilasi?
5. Apakah fragment shader berhasil dikompilasi?
6. Apakah program berhasil di-link?
7. Apakah `a_position` ditemukan?
8. Apakah `a_color` ditemukan?
9. Apakah `vertexAttribPointer()` menggunakan stride dan offset yang benar?
10. Apakah `gl.useProgram(program)` sudah dipanggil?
11. Apakah `gl.bindVertexArray(vao)` sudah dipanggil?
12. Apakah `gl.drawArrays()` menggunakan mode, first, dan count yang benar?
13. Apakah koordinat berada pada rentang NDC `-1` sampai `1`?
14. Apakah `gl.clearColor()` dan `gl.clear()` dipanggil?
15. Apakah ada typo pada nama uniform?

---

# 35. Kesalahan Umum

## 35.1 Lupa `#version 300 es`

Salah:

```glsl
precision mediump float;
#version 300 es
```

Benar:

```glsl
#version 300 es

precision mediump float;
```

`#version 300 es` harus berada di awal shader.

---

## 35.2 Menggunakan `attribute` pada WebGL2

Salah untuk WebGL2:

```glsl
attribute vec2 a_position;
```

Benar:

```glsl
in vec2 a_position;
```

---

## 35.3 Menggunakan `varying` pada WebGL2

Salah untuk WebGL2:

```glsl
varying vec3 v_color;
```

Benar pada vertex shader:

```glsl
out vec3 v_color;
```

Benar pada fragment shader:

```glsl
in vec3 v_color;
```

---

## 35.4 Menggunakan `gl_FragColor` pada WebGL2

Salah untuk WebGL2:

```glsl
gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
```

Benar:

```glsl
out vec4 outColor;

void main() {
  outColor = vec4(1.0, 0.0, 0.0, 1.0);
}
```

---

## 35.5 Salah Nama Attribute

GLSL:

```glsl
in vec2 a_position;
```

JavaScript salah:

```javascript
gl.getAttribLocation(program, "position");
```

JavaScript benar:

```javascript
gl.getAttribLocation(program, "a_position");
```

---

## 35.6 Salah Stride atau Offset

Jika data vertex:

```text
x, y, r, g, b
```

maka stride:

```javascript
const stride = 5 * Float32Array.BYTES_PER_ELEMENT;
```

Offset posisi:

```javascript
const positionOffset = 0;
```

Offset warna:

```javascript
const colorOffset = 2 * Float32Array.BYTES_PER_ELEMENT;
```

Jika offset salah, warna dapat terbaca sebagai posisi atau posisi terbaca sebagai warna.

---

# 36. Pertanyaan Analisis

Jawab pada `README.md`:

1. Apa fungsi vertex shader?
2. Apa fungsi fragment shader?
3. Apa perbedaan attribute dan uniform?
4. Apa fungsi varying?
5. Mengapa WebGL2 memakai `in` dan `out`, bukan `attribute` dan `varying`?
6. Apa fungsi `gl_Position`?
7. Apa fungsi `gl_PointSize`?
8. Mengapa `gl_PointSize` hanya terlihat pada mode `POINTS`?
9. Apa fungsi `drawArrays()`?
10. Apa arti parameter `first` pada `drawArrays()`?
11. Apa arti parameter `count` pada `drawArrays()`?
12. Apa perbedaan `TRIANGLES` dan `TRIANGLE_STRIP`?
13. Apa perbedaan `LINES`, `LINE_STRIP`, dan `LINE_LOOP`?
14. Mengapa uniform dapat diubah sebelum setiap draw call?
15. Mengapa satu shader program dapat digunakan untuk banyak primitive?
16. Apa fungsi VAO?
17. Apa fungsi buffer?
18. Apa fungsi `vertexAttribPointer()`?
19. Mengapa shader source lebih rapi ditulis dalam tag `<script>` untuk pemula?
20. Mengapa modul ini belum menggunakan MVP matrix?

---

# 37. Tugas Utama — WebGL2 Best Practice Playground

Buat aplikasi WebGL2 dengan ketentuan berikut:

1. Menggunakan WebGL2 context.
2. Menggunakan shader source di dalam tag `<script>`.
3. Menggunakan vertex shader dan fragment shader GLSL ES 3.00.
4. Menggunakan minimal dua attribute.
5. Menggunakan minimal empat uniform.
6. Menggunakan minimal satu varying.
7. Menggunakan VAO.
8. Menggunakan vertex data interleaved.
9. Menggunakan minimal empat draw call.
10. Menggunakan minimal tiga jenis primitive.
11. Memiliki minimal tiga warna.
12. Memiliki minimal satu animasi sederhana.
13. Memiliki minimal satu interaksi keyboard atau mouse.
14. Tidak menggunakan MVP matrix.
15. Tidak menggunakan lighting.
16. Tidak menggunakan texture.
17. Kode memiliki struktur fungsi yang jelas.
18. README menjelaskan pipeline dan keputusan implementasi.

---

# 38. Struktur Program yang Disarankan

Gunakan struktur seperti berikut:

```text
getShaderSource()
createShader()
createProgram()
setupGeometry()
setupAttributes()
setupUniformLocations()
setupInput()
updateKeyboard()
setCommonUniforms()
drawScene()
render()
```

Tujuan struktur ini adalah memisahkan:

```text
Initialization
    ↓
Input / Update
    ↓
Rendering
```

---

# 39. Output Pengumpulan

Kumpulkan project dengan struktur:

```text
praktikum-webgl2-best-practice/
├── index.html
├── main.js
├── style.css
├── README.md
├── screenshot.png
└── demo.mp4 atau demo.gif opsional
```

`README.md` minimal memuat:

1. nama mahasiswa;
2. NRP;
3. deskripsi aplikasi;
4. daftar primitive yang digunakan;
5. daftar draw mode;
6. daftar attribute;
7. daftar uniform;
8. penjelasan varying;
9. fitur animasi;
10. fitur interaksi;
11. penjelasan cara menjalankan;
12. jawaban pertanyaan analisis.

---

# 40. Kriteria Penilaian

## 40.1 Technical Correctness — 35%

Dinilai dari:

1. WebGL2 context berhasil dibuat;
2. shader berhasil dikompilasi;
3. program berhasil di-link;
4. attribute terhubung dengan benar;
5. uniform bekerja;
6. primitive tampil sesuai draw call;
7. animasi berjalan;
8. interaksi berjalan.

---

## 40.2 Pemahaman Konsep — 30%

Dinilai dari kemampuan menjelaskan:

1. graphics pipeline;
2. shader;
3. program;
4. buffer;
5. attribute;
6. uniform;
7. varying;
8. primitive assembly;
9. multiple draw calls;
10. alasan belum menggunakan MVP.

---

## 40.3 Kualitas Implementasi — 20%

Dinilai dari:

1. struktur fungsi rapi;
2. penamaan konsisten;
3. shader source ditulis di `<script>`;
4. penggunaan komentar secukupnya;
5. tidak terlalu banyak duplikasi;
6. mudah dibaca dan di-debug.

---

## 40.4 Visual dan Interaksi — 15%

Dinilai dari:

1. tampilan canvas rapi;
2. warna terlihat jelas;
3. objek tidak saling menutupi secara berlebihan;
4. animasi tidak mengganggu pemahaman;
5. interaksi mudah dicoba;
6. HUD atau informasi tambahan membantu pengguna.

---

# 41. Refleksi Mahasiswa

Tuliskan 5–8 kalimat mengenai:

1. bagian yang paling sulit dipahami;
2. perbedaan paling penting antara attribute dan uniform;
3. cara kerja varying dari vertex shader ke fragment shader;
4. primitive mode yang paling mudah dipahami;
5. primitive mode yang paling membingungkan;
6. error yang ditemukan saat praktikum;
7. cara menyelesaikan error tersebut;
8. hal yang ingin dicoba pada pertemuan berikutnya.

---

# 42. Ringkasan Praktikum Tambahan

Konsep utama modul ini:

```text
WebGL2
+
GLSL ES 3.00
+
Shader Source via <script>
+
Vertex Shader
+
Fragment Shader
+
Program
+
VAO
+
Buffer
+
Attribute
+
Uniform
+
Varying
+
Primitive Assembly
+
Multiple Draw Calls
+
Animation
+
Interaction
```

Hal terpenting yang harus dipahami mahasiswa:

> WebGL bukan hanya tentang membuat bentuk muncul di canvas. WebGL adalah proses mengirim data dari JavaScript ke GPU, menghubungkannya dengan shader, menyusun vertex menjadi primitive, lalu menghasilkan warna fragment melalui pipeline grafika.

Praktikum tambahan ini menjadi jembatan sebelum masuk ke pertemuan berikutnya tentang transformasi, sistem koordinat, matrix, dan MVP.

