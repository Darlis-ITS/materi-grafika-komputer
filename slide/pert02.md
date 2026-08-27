# Grafika Komputer — Pertemuan 2
## WebGL Fundamental & GLSL Basics

---

# Slide 00 — Cover

EF234504 — Grafika Komputer

## Pertemuan 2

# WebGL Fundamental & GLSL Basics

**Laboratorium GIGA**

**Departemen Teknik Informatika - ITS**  

---

# Slide 01 — Topik Pembahasan

- Posisi WebGL dalam aplikasi grafika
- Canvas dan WebGL2 Context
- Normalized Device Coordinate
- Vertex dan Primitive
- Typed Array dan GPU Buffer
- Attribute
- GLSL dasar
- Vertex Shader
- Fragment Shader
- Uniform
- Data `in` / `out`
- Shader Program
- Draw Call
- Rendering Loop
- Praktikum: WebGL Primitive Playground

---

# Slide 02 — Capaian Pembelajaran

Setelah pertemuan ini mahasiswa mampu:

1. menjelaskan peran WebGL sebagai graphics API berbasis browser,
2. membuat WebGL2 Context,
3. menggunakan NDC untuk menentukan posisi,
4. menjelaskan vertex, primitive, buffer, dan attribute,
5. membaca struktur dasar GLSL,
6. menjelaskan fungsi Vertex Shader dan Fragment Shader,
7. membedakan attribute, uniform, dan interpolated data,
8. melakukan compile dan link shader,
9. melakukan draw call,
10. membuat program WebGL sederhana dan interaktif.

---

# Slide 03 — Dari Canvas 2D ke WebGL

Pada Pertemuan 1:

```text
HTML Canvas 2D
```

digunakan untuk memahami:

- coordinate,
- primitive,
- color,
- animation,
- interaction.

Sekarang:

```text
JavaScript
   ↓
WebGL
   ↓
GPU
   ↓
Canvas
```

Kita mulai melihat bagaimana data grafika diproses GPU.

---

# Slide 04 — Apa Itu WebGL?

**WebGL — Web Graphics Library**

WebGL adalah API grafika pada browser yang memungkinkan JavaScript menggunakan GPU.

Digunakan untuk:

- grafika 2D/3D,
- game web,
- simulasi,
- scientific visualization,
- aplikasi interaktif.

WebGL bersifat relatif low-level.

---

# Slide 05 — WebGL Bukan Scene Framework

WebGL tidak otomatis menyediakan:

- Scene,
- Camera,
- Mesh,
- Light,
- Material.

WebGL menyediakan mekanisme dasar:

```text
Prepare Data
   ↓
Upload to GPU
   ↓
Run Shader
   ↓
Draw
```

Framework seperti Three.js akan membungkus proses ini.

---

# Slide 06 — Posisi WebGL dalam Stack

```text
Application
    ↓
JavaScript
    ↓
WebGL API
    ↓
Graphics Driver
    ↓
GPU
    ↓
Framebuffer
    ↓
Canvas
```

WebGL menjadi jembatan antara aplikasi JavaScript dan GPU.

---

# Slide 07 — Struktur Program WebGL

```text
Create Canvas
     ↓
Get WebGL2 Context
     ↓
Prepare Vertex Data
     ↓
Create Buffer
     ↓
Create & Compile Shader
     ↓
Link Shader Program
     ↓
Connect Attribute
     ↓
Draw
```

Ini adalah workflow dasar yang akan digunakan berulang kali.

---

# Slide 08 — HTML Canvas

```html
<canvas
  id="glCanvas"
  width="800"
  height="600">
</canvas>
```

Canvas adalah area tampilan.

Canvas belum menjalankan WebGL sampai JavaScript meminta WebGL Context.

---

# Slide 09 — WebGL2 Context

```javascript
const canvas =
  document.getElementById("glCanvas");

const gl =
  canvas.getContext("webgl2");
```

`gl` adalah interface utama untuk memanggil operasi WebGL.

---

# Slide 10 — Memeriksa Context

```javascript
if (!gl) {
  alert("WebGL2 tidak tersedia");
}
```

Context dapat gagal jika:

- browser tidak mendukung,
- hardware acceleration tidak aktif,
- GPU/driver bermasalah.

---

# Slide 11 — Membersihkan Canvas

```javascript
gl.clearColor(
  0.05, 0.08, 0.15, 1.0
);

gl.clear(
  gl.COLOR_BUFFER_BIT
);
```

`clearColor()` menentukan warna background framebuffer.

---

# Slide 12 — Warna pada WebGL

WebGL umumnya memakai nilai warna:

```text
0.0 – 1.0
```

Contoh:

```text
Red   = (1, 0, 0)
Green = (0, 1, 0)
Blue  = (0, 0, 1)
White = (1, 1, 1)
```

Format lengkap biasanya:

```text
RGBA
```

---

# Slide 13 — Canvas Coordinate vs NDC

Canvas 2D menggunakan koordinat pixel.

WebGL menggunakan:

# Normalized Device Coordinate — NDC

Rentang umum:

```text
X : -1 → +1
Y : -1 → +1
```

Pusat layar:

```text
(0, 0)
```

---

# Slide 14 — Sistem Koordinat NDC

```text
              Y +1
               ↑
               |
X -1 ───────── O ───────── X +1
               |
               ↓
              Y -1
```

Posisi penting:

```text
Kiri bawah  = (-1,-1)
Kanan atas  = ( 1, 1)
Tengah      = ( 0, 0)
```

---

# Slide 15 — Mengapa NDC?

NDC membuat posisi tidak bergantung langsung pada ukuran pixel Canvas.

```text
NDC
 ↓
Viewport Transform
 ↓
Pixel Position
```

Konsep viewport dan koordinat layar akan muncul kembali pada materi transformasi dan camera.

---

# Slide 16 — Vertex

**Vertex** adalah unit data yang diproses graphics pipeline.

Contoh triangle:

```text
V0 = (-0.5, -0.5)
V1 = ( 0.5, -0.5)
V2 = ( 0.0,  0.5)
```

Setiap vertex dapat membawa data tambahan.

---

# Slide 17 — Data pada Vertex

```text
Vertex
├── Position
├── Color
├── Normal
├── Texture Coordinate
└── Other Attributes
```

Pada pertemuan ini fokus:

```text
Position + Color
```

Normal dan texture coordinate akan digunakan pada Pertemuan 5.

---

# Slide 18 — Typed Array

Contoh vertex data:

```javascript
const vertices = new Float32Array([
  -0.5, -0.5,
   0.5, -0.5,
   0.0,  0.5
]);
```

Mengapa `Float32Array`?

- format data numerik terstruktur,
- ukuran elemen konsisten,
- cocok untuk data GPU.

---

# Slide 19 — Primitive

Vertex dapat dirakit menjadi primitive.

Primitive utama:

- Point
- Line
- Triangle

Triangle adalah primitive terpenting untuk grafika 3D modern.

---

# Slide 20 — Draw Mode Primitive

Contoh mode WebGL:

```javascript
gl.POINTS
gl.LINES
gl.LINE_STRIP
gl.LINE_LOOP
gl.TRIANGLES
```

Draw mode menentukan bagaimana urutan vertex ditafsirkan.

---

# Slide 21 — Primitive Assembly

```text
Vertex Stream
      ↓
Primitive Assembly
      ↓
Point / Line / Triangle
```

Untuk `gl.TRIANGLES`, setiap tiga vertex membentuk satu triangle.

---

# Slide 22 — Mengapa Data Harus Masuk Buffer?

Data vertex awalnya berada di memori JavaScript.

Agar dapat dibaca GPU:

```text
JavaScript Data
     ↓
Typed Array
     ↓
GPU Buffer
```

Buffer adalah area memori GPU untuk data rendering.

---

# Slide 23 — Membuat dan Mengisi Buffer

```javascript
const positionBuffer =
  gl.createBuffer();

gl.bindBuffer(
  gl.ARRAY_BUFFER,
  positionBuffer
);

gl.bufferData(
  gl.ARRAY_BUFFER,
  vertices,
  gl.STATIC_DRAW
);
```

---

# Slide 24 — STATIC_DRAW

```javascript
gl.STATIC_DRAW
```

merupakan usage hint.

Artinya secara umum:

- data relatif jarang diubah,
- digunakan berkali-kali saat rendering.

---

# Slide 25 — Attribute

**Attribute** adalah data yang berbeda untuk setiap vertex.

Contoh:

```glsl
in vec2 a_position;
```

Attribute lain:

- color,
- normal,
- texture coordinate.

Data attribute berasal dari GPU buffer.

---

# Slide 26 — Menghubungkan Buffer ke Attribute

```javascript
const positionLocation =
  gl.getAttribLocation(
    program,
    "a_position"
  );

gl.enableVertexAttribArray(
  positionLocation
);
```

Kemudian layout ditentukan dengan `vertexAttribPointer()`.

---

# Slide 27 — Vertex Attribute Pointer

```javascript
gl.vertexAttribPointer(
  positionLocation,
  2,
  gl.FLOAT,
  false,
  0,
  0
);
```

`2` berarti:

```text
2 komponen per vertex
→ X dan Y
```

---

# Slide 28 — Alur Buffer ke Shader

```text
Float32Array
     ↓
GPU Buffer
     ↓
vertexAttribPointer()
     ↓
a_position
     ↓
Vertex Shader
```

Ini adalah hubungan data yang sangat penting dalam WebGL.

---

# Slide 29 — Apa Itu GLSL?

**GLSL — OpenGL Shading Language**

GLSL digunakan untuk menulis program yang berjalan pada GPU.

WebGL2 menggunakan:

```glsl
#version 300 es
```

GLSL dirancang untuk operasi grafika dan vector/matrix.

---

# Slide 30 — Struktur Dasar GLSL

Contoh pola dasar:

```glsl
#version 300 es

void main() {
  // shader code
}
```

Fragment Shader biasanya juga membutuhkan precision declaration:

```glsl
precision highp float;
```

---

# Slide 31 — Tipe Data Dasar GLSL

Scalar:

```text
float
int
bool
```

Vector:

```text
vec2
vec3
vec4
```

Matrix:

```text
mat2
mat3
mat4
```

Sampler:

```text
sampler2D
```

---

# Slide 32 — Vector dan Matrix pada GLSL

Contoh vector:

```glsl
vec2 position2D;
vec3 position3D;
vec4 color;
```

Contoh matrix:

```glsl
mat4 transform;
```

Vector digunakan untuk posisi, arah, warna, dan UV.

Matrix banyak digunakan untuk transformation.

---

# Slide 33 — Vertex Shader

Vertex Shader berjalan:

> satu kali untuk setiap vertex.

Tugas dasar:

- menerima attribute,
- memproses posisi,
- menghasilkan `gl_Position`,
- mengirim data ke tahap berikutnya.

---

# Slide 34 — Vertex Shader Sederhana

```glsl
#version 300 es

in vec2 a_position;

void main() {
  gl_Position =
    vec4(
      a_position,
      0.0,
      1.0
    );
}
```

`gl_Position` adalah output posisi vertex.

---

# Slide 35 — Fragment Shader

Fragment Shader berjalan untuk fragment yang dihasilkan rasterization.

Tugas dasar:

- menentukan warna,
- menerima interpolated data,
- nantinya dapat memakai texture dan lighting.

---

# Slide 36 — Fragment Shader Sederhana

```glsl
#version 300 es
precision highp float;

out vec4 outColor;

void main() {
  outColor =
    vec4(0.0, 0.7, 1.0, 1.0);
}
```

---

# Slide 37 — Vertex Shader vs Fragment Shader

| Vertex Shader | Fragment Shader |
|---|---|
| per vertex | per fragment |
| mengolah posisi | mengolah warna |
| menerima vertex input | menerima interpolated input |
| menghasilkan `gl_Position` | menghasilkan final fragment color |

Konsep ini tidak akan dijelaskan ulang pada P3–P5; hanya digunakan.

---

# Slide 38 — `in`, `out`, dan Interpolasi

Vertex Shader:

```glsl
out vec3 v_color;
```

Fragment Shader:

```glsl
in vec3 v_color;
```

Nilai di antara vertex:

```text
diinterpolasi otomatis
```

oleh rasterizer.

---

# Slide 39 — Uniform

**Uniform** adalah data yang sama untuk satu draw call.

Contoh:

```glsl
uniform float u_time;
uniform vec4 u_color;
uniform mat4 u_matrix;
```

Perbedaan penting:

```text
Attribute → per vertex
Uniform   → per draw call
out/in    → antar-stage shader
```

---

# Slide 40 — Rasterization

Setelah vertex membentuk primitive:

```text
Triangle
   ↓
Rasterization
   ↓
Fragments
   ↓
Fragment Shader
```

Satu triangle dapat menghasilkan banyak fragment.

---

# Slide 41 — Compile dan Link Shader

```text
GLSL Source
   ↓
Compile Vertex Shader
   ↓
Compile Fragment Shader
   ↓
Link
   ↓
Shader Program
```

Kesalahan syntax dapat diperiksa melalui shader/program info log.

---

# Slide 42 — Shader Program

Vertex Shader dan Fragment Shader harus dihubungkan menjadi satu program.

```text
Vertex Shader ───┐
                  ├→ Link → Program
Fragment Shader ─┘
```

Digunakan dengan:

```javascript
gl.useProgram(program);
```

---

# Slide 43 — Draw Call

Contoh:

```javascript
gl.drawArrays(
  gl.TRIANGLES,
  0,
  3
);
```

Makna:

```text
mode  = TRIANGLES
first = 0
count = 3
```

Draw call memicu pipeline.

---

# Slide 44 — Pipeline WebGL Fundamental

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
Primitive
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

# Slide 45 — Rendering Loop

Untuk animasi:

```javascript
function render() {
  update();
  draw();

  requestAnimationFrame(render);
}

render();
```

Pola:

```text
Update → Draw → Next Frame
```

---

# Slide 46 — Praktikum: WebGL Primitive Playground

Mahasiswa membuat aplikasi yang menampilkan:

- triangle,
- beberapa primitive,
- vertex color,
- minimal dua draw mode,
- animasi sederhana,
- interaksi mouse atau keyboard.

Tujuan:

> menghubungkan buffer, GLSL shader, attribute, shader program, dan draw call.

---

# Slide 47 — Rencana dan Output Praktikum

Tahapan ringkas:

```text
1. Create WebGL2 Context
2. Prepare Vertex Data
3. Create Buffer
4. Write GLSL Shader
5. Compile & Link
6. Connect Attribute
7. Draw Primitive
8. Add Color
9. Add Animation
10. Add Interaction
```

Output minimum:

- ≥ 3 primitive,
- ≥ 2 draw mode,
- vertex color,
- 1 objek bergerak,
- 1 interaksi.

---

# Slide 48 — Ringkasan Pertemuan

Hari ini kita mempelajari:

- WebGL2 Context,
- NDC,
- vertex dan primitive,
- Typed Array dan buffer,
- attribute,
- GLSL dasar,
- Vertex Shader,
- Fragment Shader,
- uniform,
- `in` / `out`,
- compile & link,
- draw call,
- rendering loop.

Benang merah:

```text
DATA → GPU → SHADER → PRIMITIVE → FRAGMENT → IMAGE
```

---

# Slide 49 — TERIMA KASIH

# TERIMA KASIH

### Pertemuan Berikutnya

## Transformation & Coordinate System


