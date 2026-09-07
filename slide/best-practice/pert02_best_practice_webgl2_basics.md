# Tutorial WebGL2 Best Practice untuk Pemula

## Pipeline Graphics, GLSL, Qualifiers, Primitive Assembly, dan Multiple Draw Calls

Tutorial ini membahas dasar WebGL2 untuk pemula dengan fokus pada:

- graphics pipeline;
- GLSL ES 3.00;
- konsep `attribute`, `uniform`, dan `varying`;
- padanan WebGL2: `in`, `out`, dan `uniform`;
- konvensi penamaan shader;
- relasi nama antara JavaScript dan GLSL;
- shader source menggunakan tag `<script>`;
- shader, program, buffer, VAO, attribute, uniform, dan draw call;
- primitive assembly;
- contoh beberapa segitiga, titik, dan garis;
- animasi dan interaksi sederhana tanpa MVP, lighting, atau texturing.

> Catatan: Tutorial ini sengaja belum membahas MVP, kamera, lighting, dan texturing agar mahasiswa memahami dulu bagaimana data mengalir dari JavaScript menuju GPU.

---

## 1. Gambaran Besar WebGL2

WebGL2 adalah API grafika berbasis OpenGL ES 3.0 yang berjalan di browser melalui elemen `<canvas>`. WebGL2 menggunakan shader yang ditulis dengan GLSL ES 3.00.

Shader WebGL2 umumnya diawali dengan:

```glsl
#version 300 es
```

Baris tersebut menandakan bahwa shader menggunakan GLSL ES 3.00.

Secara sederhana, WebGL2 bekerja dengan alur berikut:

```text
JavaScript / CPU
      │
      │ mengirim data vertex, uniform, dan buffer
      ▼
Vertex Shader
      │
      │ menghasilkan posisi vertex dan data antar-shader
      ▼
Primitive Assembly
      │
      │ menyusun vertex menjadi point, line, atau triangle
      ▼
Rasterization
      │
      │ mengubah primitive menjadi fragment
      ▼
Fragment Shader
      │
      │ menentukan warna fragment
      ▼
Framebuffer / Canvas
```

Tujuan awal belajar WebGL2 bukan menghafal semua API, tetapi memahami bahwa:

> Data berasal dari JavaScript, dikirim ke GPU, diproses oleh shader, disusun menjadi primitive, lalu akhirnya menjadi piksel pada canvas.

---

## 2. Graphics Pipeline WebGL2

Graphics pipeline adalah rangkaian tahap yang mengubah data geometri menjadi gambar.

Untuk tahap awal, pipeline dapat dipahami sebagai berikut:

```text
Vertex Data
   ↓
Vertex Shader
   ↓
Primitive Assembly
   ↓
Rasterization
   ↓
Fragment Shader
   ↓
Canvas
```

### 2.1 Vertex Data

Vertex data adalah data titik yang dikirim dari JavaScript ke GPU.

Contoh data posisi 2D:

```javascript
const positions = new Float32Array([
  -0.6, -0.5,
   0.6, -0.5,
   0.0,  0.6,
]);
```

Data tersebut mewakili tiga vertex:

```text
Vertex 0 = (-0.6, -0.5)
Vertex 1 = ( 0.6, -0.5)
Vertex 2 = ( 0.0,  0.6)
```

Jika digambar dengan:

```javascript
gl.drawArrays(gl.TRIANGLES, 0, 3);
```

maka tiga vertex tersebut akan disusun menjadi satu segitiga.

---

### 2.2 Vertex Shader

Vertex shader berjalan sekali untuk setiap vertex.

Tugas utamanya:

1. menerima data vertex;
2. menentukan posisi akhir vertex;
3. mengirim data tambahan ke fragment shader bila diperlukan.

Contoh vertex shader WebGL2:

```glsl
#version 300 es

in vec2 a_position;
in vec3 a_color;

out vec3 v_color;

void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_color = a_color;
}
```

Penjelasan:

```glsl
in vec2 a_position;
```

berarti vertex shader menerima data posisi dari JavaScript.

```glsl
in vec3 a_color;
```

berarti vertex shader menerima data warna per vertex dari JavaScript.

```glsl
out vec3 v_color;
```

berarti vertex shader mengirim warna ke fragment shader.

```glsl
gl_Position = vec4(a_position, 0.0, 1.0);
```

berarti shader menentukan posisi vertex dalam clip space.

Pada tutorial ini, koordinat langsung menggunakan clip space dengan rentang sederhana:

```text
x: -1 sampai 1
y: -1 sampai 1
```

---

### 2.3 Primitive Assembly

Primitive assembly adalah tahap ketika WebGL menyusun vertex menjadi bentuk dasar.

Primitive menjawab pertanyaan:

> Vertex-vertex ini ingin disusun menjadi apa?

Contoh primitive:

```text
POINTS
LINES
LINE_STRIP
LINE_LOOP
TRIANGLES
TRIANGLE_STRIP
TRIANGLE_FAN
```

Contoh:

```javascript
gl.drawArrays(gl.POINTS, 0, 3);
```

berarti tiga vertex digambar sebagai tiga titik.

```javascript
gl.drawArrays(gl.LINES, 0, 4);
```

berarti setiap dua vertex membentuk satu garis.

```javascript
gl.drawArrays(gl.TRIANGLES, 0, 6);
```

berarti setiap tiga vertex membentuk satu segitiga.

---

### 2.4 Rasterization

Rasterization adalah proses mengubah primitive menjadi fragment.

Jika primitive-nya segitiga, WebGL menentukan piksel-piksel mana di canvas yang berada di dalam area segitiga.

```text
Triangle
   ↓ rasterization
Banyak fragment
   ↓ fragment shader
Banyak warna piksel
```

Vertex shader tidak langsung menggambar piksel. Vertex shader hanya memproses vertex. Setelah primitive dibentuk dan dirasterisasi, barulah fragment shader bekerja.

---

### 2.5 Fragment Shader

Fragment shader berjalan untuk setiap fragment hasil rasterization.

Tugas utamanya adalah menentukan warna akhir.

Contoh fragment shader WebGL2:

```glsl
#version 300 es

precision mediump float;

in vec3 v_color;

out vec4 outColor;

void main() {
  outColor = vec4(v_color, 1.0);
}
```

Penjelasan:

```glsl
in vec3 v_color;
```

berarti fragment shader menerima data dari vertex shader.

```glsl
out vec4 outColor;
```

berarti fragment shader menghasilkan warna akhir.

Pada WebGL2, kita tidak lagi menggunakan:

```glsl
gl_FragColor
```

seperti pada WebGL1. Output fragment shader dideklarasikan sendiri, misalnya:

```glsl
out vec4 outColor;
```

---

## 3. Qualifier: Attribute, Uniform, dan Varying

Pada WebGL, data shader sering dijelaskan dengan tiga konsep:

```text
attribute
uniform
varying
```

Namun pada WebGL2, istilah dalam kode GLSL berubah.

| Konsep | WebGL1 / GLSL ES 1.00 | WebGL2 / GLSL ES 3.00 | Fungsi |
|---|---|---|---|
| Attribute | `attribute` | `in` di vertex shader | Data per vertex dari JavaScript |
| Uniform | `uniform` | `uniform` | Data konstan untuk satu draw call |
| Varying | `varying` | `out` dari vertex shader, `in` di fragment shader | Data antar-shader yang diinterpolasi |

Cara menjelaskannya kepada mahasiswa:

> Secara konsep, attribute, uniform, dan varying masih penting. Tetapi pada WebGL2, `attribute` ditulis sebagai `in`, sedangkan `varying` ditulis sebagai pasangan `out` dan `in`.

---

## 4. Attribute dalam WebGL2

### 4.1 Fungsi Attribute

Attribute adalah data yang berubah untuk setiap vertex.

Contoh attribute:

```text
posisi vertex
warna vertex
normal vertex
koordinat tekstur
```

Dalam tutorial ini kita hanya memakai:

```text
posisi vertex
warna vertex
```

Di WebGL2, attribute ditulis menggunakan qualifier `in` pada vertex shader.

```glsl
in vec2 a_position;
in vec3 a_color;
```

Artinya:

```text
a_position → data posisi per vertex
a_color    → data warna per vertex
```

---

### 4.2 Attribute di JavaScript dan GLSL

Data di JavaScript:

```javascript
const positions = new Float32Array([
  -0.6, -0.5,
   0.6, -0.5,
   0.0,  0.6,
]);
```

Shader GLSL:

```glsl
in vec2 a_position;
```

Koneksi JavaScript ke GLSL:

```javascript
const positionLocation = gl.getAttribLocation(program, "a_position");
```

Nama string:

```javascript
"a_position"
```

harus sama persis dengan nama di GLSL:

```glsl
in vec2 a_position;
```

Benar:

```javascript
gl.getAttribLocation(program, "a_position");
```

Salah:

```javascript
gl.getAttribLocation(program, "position");
```

Salah juga:

```javascript
gl.getAttribLocation(program, "aPosition");
```

JavaScript tidak tahu bahwa `aPosition` maksudnya sama dengan `a_position`. Nama harus cocok persis.

---

## 5. Uniform dalam WebGL2

### 5.1 Fungsi Uniform

Uniform adalah data yang nilainya sama untuk semua vertex dan fragment dalam satu draw call.

Contoh uniform:

```text
warna global
waktu animasi
ukuran titik
faktor transparansi
faktor brightness
parameter interaksi mouse
```

Dalam tutorial ini digunakan beberapa uniform sederhana:

```glsl
uniform float u_pointSize;
uniform float u_brightness;
uniform float u_time;
uniform vec2 u_offset;
```

Uniform dapat digunakan di vertex shader atau fragment shader.

Contoh di vertex shader:

```glsl
uniform float u_pointSize;
uniform vec2 u_offset;

void main() {
  vec2 position = a_position + u_offset;
  gl_Position = vec4(position, 0.0, 1.0);
  gl_PointSize = u_pointSize;
}
```

Contoh di fragment shader:

```glsl
uniform float u_brightness;

void main() {
  outColor = vec4(v_color * u_brightness, 1.0);
}
```

---

### 5.2 Uniform di JavaScript dan GLSL

GLSL:

```glsl
uniform float u_brightness;
```

JavaScript:

```javascript
const brightnessLocation = gl.getUniformLocation(program, "u_brightness");
gl.uniform1f(brightnessLocation, 1.0);
```

Nama string:

```javascript
"u_brightness"
```

harus sama persis dengan:

```glsl
uniform float u_brightness;
```

Benar:

```javascript
gl.getUniformLocation(program, "u_brightness");
```

Salah:

```javascript
gl.getUniformLocation(program, "brightness");
```

---

## 6. Varying dalam WebGL2

### 6.1 Fungsi Varying

Varying adalah data yang dikirim dari vertex shader ke fragment shader.

Pada WebGL2, varying ditulis sebagai:

```text
out di vertex shader
in  di fragment shader
```

Contoh vertex shader:

```glsl
out vec3 v_color;
```

Contoh fragment shader:

```glsl
in vec3 v_color;
```

Data ini diinterpolasi oleh WebGL.

Misalnya segitiga memiliki tiga warna berbeda:

```text
Vertex atas  = merah
Vertex kanan = hijau
Vertex kiri  = biru
```

Bagian dalam segitiga akan menjadi gradasi hasil interpolasi.

Inilah fungsi penting varying:

> membawa data per vertex menuju fragment shader, lalu WebGL menginterpolasinya untuk setiap fragment.

---

### 6.2 Nama Varying Harus Sama antar Shader

Vertex shader:

```glsl
out vec3 v_color;
```

Fragment shader:

```glsl
in vec3 v_color;
```

Nama dan tipe harus cocok.

Benar:

```glsl
// Vertex shader
out vec3 v_color;
```

```glsl
// Fragment shader
in vec3 v_color;
```

Salah:

```glsl
// Vertex shader
out vec3 v_color;
```

```glsl
// Fragment shader
in vec3 color;
```

Salah juga:

```glsl
// Vertex shader
out vec3 v_color;
```

```glsl
// Fragment shader
in vec4 v_color;
```

Yang harus diperhatikan:

```text
Nama harus sama.
Tipe harus kompatibel.
Arah harus benar: vertex shader out, fragment shader in.
```

---

## 7. Konvensi Penamaan yang Disarankan

Agar mahasiswa tidak bingung, gunakan prefix yang konsisten.

Konvensi yang disarankan:

```text
a_ → attribute / vertex input
u_ → uniform
v_ → varying / data antar-shader
```

Contoh vertex shader:

```glsl
in vec2 a_position;
in vec3 a_color;

uniform float u_pointSize;
uniform float u_brightness;

out vec3 v_color;
```

Contoh fragment shader:

```glsl
in vec3 v_color;

uniform float u_brightness;

out vec4 outColor;
```

Makna penamaan:

```text
a_position
↑
data attribute dari JavaScript ke vertex shader

u_brightness
↑
data uniform dari JavaScript ke shader

v_color
↑
data varying dari vertex shader ke fragment shader
```

---

## 8. Aturan Penamaan yang Harus Diperhatikan

### 8.1 Attribute: Nama GLSL dan String JavaScript Harus Sama

GLSL:

```glsl
in vec2 a_position;
```

JavaScript:

```javascript
gl.getAttribLocation(program, "a_position");
```

Harus sama persis.

---

### 8.2 Uniform: Nama GLSL dan String JavaScript Harus Sama

GLSL:

```glsl
uniform float u_brightness;
```

JavaScript:

```javascript
gl.getUniformLocation(program, "u_brightness");
```

Harus sama persis.

---

### 8.3 Varying: Nama Vertex Shader dan Fragment Shader Harus Sama

Vertex shader:

```glsl
out vec3 v_color;
```

Fragment shader:

```glsl
in vec3 v_color;
```

Harus sama nama dan tipe.

---

### 8.4 Nama Variabel JavaScript Boleh Berbeda

Nama variabel JavaScript tidak harus sama dengan nama GLSL.

Contoh:

```javascript
const posLoc = gl.getAttribLocation(program, "a_position");
```

Ini benar, karena yang harus sama adalah string:

```javascript
"a_position"
```

bukan nama variabel JavaScript-nya.

Contoh lain:

```javascript
const lokasiWarna = gl.getAttribLocation(program, "a_color");
```

Tetap benar, karena string `"a_color"` cocok dengan nama GLSL.

---

## 9. Shader Source Menggunakan `<script>`

Untuk pemula, shader source lebih rapi jika ditulis di HTML menggunakan tag `<script>`.

Disarankan:

```html
<script id="vertex-shader" type="x-shader/x-vertex">
#version 300 es
...
</script>

<script id="fragment-shader" type="x-shader/x-fragment">
#version 300 es
...
</script>
```

Jangan dulu menulis shader sebagai string panjang seperti:

```javascript
const vertexShaderSource = `
#version 300 es
...
`;
```

Keuntungan menggunakan `<script>`:

1. kode GLSL terlihat seperti shader, bukan string JavaScript;
2. mahasiswa lebih mudah membedakan JavaScript dan GLSL;
3. struktur program lebih bersih;
4. shader lebih mudah dibaca dan diperbaiki.

---

## 10. Shader, Program, dan Boilerplate WebGL2

Sebelum menggambar objek, WebGL2 membutuhkan beberapa tahap persiapan. Tahap ini sering disebut boilerplate, yaitu kode dasar yang hampir selalu muncul dalam program WebGL.

Urutan umumnya:

```text
1. Ambil canvas
2. Ambil WebGL2 context
3. Ambil shader source dari <script>
4. Compile vertex shader
5. Compile fragment shader
6. Link shader menjadi program
7. Buat buffer / VAO
8. Kirim data vertex ke GPU
9. Hubungkan attribute GLSL dengan data buffer
10. Ambil lokasi uniform
11. Gunakan program
12. Set nilai uniform
13. Jalankan draw call
```

---

### 10.1 Apa Itu Shader?

Shader adalah program kecil yang berjalan di GPU.

Minimal WebGL membutuhkan dua shader:

```text
Vertex Shader
Fragment Shader
```

Vertex shader memproses setiap vertex.

Fragment shader menentukan warna fragment atau piksel.

---

### 10.2 Vertex Shader Lengkap untuk Tutorial Ini

```html
<script id="vertex-shader" type="x-shader/x-vertex">
#version 300 es

in vec2 a_position;
in vec3 a_color;

uniform float u_pointSize;
uniform float u_time;
uniform vec2 u_offset;
uniform float u_waveAmount;

out vec3 v_color;

void main() {
  float wave = sin(u_time + a_position.x * 8.0) * u_waveAmount;
  vec2 animatedPosition = a_position + u_offset + vec2(0.0, wave);

  gl_Position = vec4(animatedPosition, 0.0, 1.0);
  gl_PointSize = u_pointSize;

  v_color = a_color;
}
</script>
```

Penjelasan singkat:

```glsl
in vec2 a_position;
```

menerima posisi vertex dari JavaScript.

```glsl
in vec3 a_color;
```

menerima warna vertex dari JavaScript.

```glsl
uniform float u_pointSize;
```

mengatur ukuran titik saat primitive yang digunakan adalah `POINTS`.

```glsl
uniform float u_time;
```

memberikan waktu animasi dari JavaScript.

```glsl
uniform vec2 u_offset;
```

memberikan pergeseran posisi sederhana tanpa MVP.

```glsl
uniform float u_waveAmount;
```

mengatur besar efek gelombang sederhana.

```glsl
out vec3 v_color;
```

mengirim warna dari vertex shader ke fragment shader.

---

### 10.3 Fragment Shader Lengkap untuk Tutorial Ini

```html
<script id="fragment-shader" type="x-shader/x-fragment">
#version 300 es

precision mediump float;

in vec3 v_color;

uniform float u_brightness;

out vec4 outColor;

void main() {
  vec3 finalColor = v_color * u_brightness;
  outColor = vec4(finalColor, 1.0);
}
</script>
```

Penjelasan:

```glsl
in vec3 v_color;
```

menerima warna dari vertex shader.

```glsl
uniform float u_brightness;
```

mengatur tingkat kecerahan objek.

```glsl
out vec4 outColor;
```

menghasilkan warna akhir fragment.

---

### 10.4 Apa Itu Program?

Vertex shader dan fragment shader harus digabung menjadi satu WebGL program.

```text
Vertex Shader
      +
Fragment Shader
      ↓
WebGL Program
```

Program digunakan saat menggambar:

```javascript
gl.useProgram(program);
```

---

### 10.5 Fungsi Mengambil Shader Source dari `<script>`

```javascript
function getShaderSource(id) {
  const shaderScript = document.getElementById(id);

  if (!shaderScript) {
    throw new Error("Shader dengan id '" + id + "' tidak ditemukan.");
  }

  return shaderScript.textContent.trim();
}
```

Contoh penggunaan:

```javascript
const vertexShaderSource = getShaderSource("vertex-shader");
const fragmentShaderSource = getShaderSource("fragment-shader");
```

---

### 10.6 Fungsi Compile Shader

```javascript
function createShader(gl, type, source) {
  const shader = gl.createShader(type);

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

  if (!success) {
    const info = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error("Shader gagal dikompilasi:\n" + info);
  }

  return shader;
}
```

Contoh penggunaan:

```javascript
const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
```

Best practice:

> Selalu cek error kompilasi shader.

---

### 10.7 Fungsi Link Program

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
    throw new Error("Program gagal di-link:\n" + info);
  }

  return program;
}
```

Contoh penggunaan:

```javascript
const program = createProgram(gl, vertexShader, fragmentShader);
```

Best practice:

> Selalu cek error linking program, karena error dapat muncul jika interface antara vertex shader dan fragment shader tidak cocok.

---

### 10.8 VAO dan Buffer

Di WebGL2, gunakan Vertex Array Object atau VAO untuk menyimpan konfigurasi attribute.

```javascript
const vao = gl.createVertexArray();
gl.bindVertexArray(vao);
```

Lalu buat buffer:

```javascript
const vertexBuffer = gl.createBuffer();

gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
```

Buffer berisi data vertex yang dikirim ke GPU.

---

### 10.9 Menghubungkan Attribute GLSL dengan Buffer

Misalnya data vertex disusun seperti ini:

```javascript
const vertices = new Float32Array([
  // x,     y,     r,    g,    b
  -0.8,  -0.6,   1.0,  0.0,  0.0,
  -0.4,  -0.6,   0.0,  1.0,  0.0,
  -0.6,  -0.2,   0.0,  0.3,  1.0,
]);
```

Setiap vertex memiliki:

```text
x, y, r, g, b
```

Maka:

```javascript
const stride = 5 * Float32Array.BYTES_PER_ELEMENT;
const positionOffset = 0;
const colorOffset = 2 * Float32Array.BYTES_PER_ELEMENT;
```

Ambil lokasi attribute:

```javascript
const aPositionLocation = gl.getAttribLocation(program, "a_position");
const aColorLocation = gl.getAttribLocation(program, "a_color");
```

Hubungkan `a_position`:

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

Hubungkan `a_color`:

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

---

### 10.10 Mengambil Lokasi Uniform

Uniform location sebaiknya diambil sekali setelah program dibuat.

```javascript
const uPointSizeLocation = gl.getUniformLocation(program, "u_pointSize");
const uBrightnessLocation = gl.getUniformLocation(program, "u_brightness");
const uTimeLocation = gl.getUniformLocation(program, "u_time");
const uOffsetLocation = gl.getUniformLocation(program, "u_offset");
const uWaveAmountLocation = gl.getUniformLocation(program, "u_waveAmount");
```

Nilainya dapat diubah sebelum draw call:

```javascript
gl.uniform1f(uPointSizeLocation, 12.0);
gl.uniform1f(uBrightnessLocation, 1.0);
gl.uniform1f(uTimeLocation, timeInSeconds);
gl.uniform2f(uOffsetLocation, 0.0, 0.0);
gl.uniform1f(uWaveAmountLocation, 0.0);
```

Karena uniform berlaku untuk draw call yang sedang berjalan, kita bisa menggambar beberapa objek dengan program yang sama tetapi nilai uniform berbeda.

Contoh:

```javascript
gl.uniform1f(uBrightnessLocation, 0.5);
gl.drawArrays(gl.TRIANGLES, 0, 3);

gl.uniform1f(uBrightnessLocation, 1.0);
gl.drawArrays(gl.TRIANGLES, 3, 3);

gl.uniform1f(uBrightnessLocation, 1.5);
gl.drawArrays(gl.TRIANGLES, 6, 3);
```

Artinya:

```text
Segitiga pertama → brightness 0.5
Segitiga kedua   → brightness 1.0
Segitiga ketiga  → brightness 1.5
```

---

## 11. Best Practice Urutan Proses WebGL2

Untuk pemula, gunakan urutan standar berikut:

```javascript
function main() {
  // 1. Ambil canvas dan context
  const canvas = document.getElementById("glCanvas");
  const gl = canvas.getContext("webgl2");

  if (!gl) {
    alert("Browser tidak mendukung WebGL2.");
    return;
  }

  // 2. Ambil shader source
  const vertexShaderSource = getShaderSource("vertex-shader");
  const fragmentShaderSource = getShaderSource("fragment-shader");

  // 3. Compile shader
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

  // 4. Link program
  const program = createProgram(gl, vertexShader, fragmentShader);

  // 5. Siapkan data vertex
  const vertices = new Float32Array([
    // data vertex di sini
  ]);

  // 6. Buat VAO dan buffer
  const vao = gl.createVertexArray();
  gl.bindVertexArray(vao);

  const vertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

  // 7. Hubungkan attribute dengan layout buffer
  const aPositionLocation = gl.getAttribLocation(program, "a_position");
  const aColorLocation = gl.getAttribLocation(program, "a_color");

  // 8. Ambil lokasi uniform
  const uPointSizeLocation = gl.getUniformLocation(program, "u_pointSize");
  const uBrightnessLocation = gl.getUniformLocation(program, "u_brightness");

  // 9. Atur viewport dan bersihkan canvas
  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.clearColor(0.07, 0.09, 0.15, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  // 10. Gunakan program
  gl.useProgram(program);
  gl.bindVertexArray(vao);

  // 11. Set uniform
  gl.uniform1f(uPointSizeLocation, 12.0);
  gl.uniform1f(uBrightnessLocation, 1.0);

  // 12. Draw call
  gl.drawArrays(gl.TRIANGLES, 0, 3);
}
```

Poin penting:

```text
Shader dibuat sekali.
Program dibuat sekali.
Buffer dibuat sekali.
Attribute dikonfigurasi sekali.
Uniform dapat diubah berkali-kali.
Draw call dapat dilakukan berkali-kali.
```

---

## 12. Contoh Beberapa Segitiga dengan Brightness Berbeda

Contoh berikut menggambar tiga segitiga. Semua segitiga menggunakan shader dan buffer yang sama, tetapi setiap segitiga digambar dengan nilai `u_brightness` berbeda.

### 12.1 Data Vertex

```javascript
const vertices = new Float32Array([
  // Segitiga 1 - kiri
  // x,     y,     r,    g,    b
  -0.9,  -0.6,   1.0,  0.2,  0.2,
  -0.5,  -0.6,   1.0,  0.2,  0.2,
  -0.7,  -0.1,   1.0,  0.2,  0.2,

  // Segitiga 2 - tengah
  -0.2,  -0.6,   0.2,  1.0,  0.2,
   0.2,  -0.6,   0.2,  1.0,  0.2,
   0.0,  -0.1,   0.2,  1.0,  0.2,

  // Segitiga 3 - kanan
   0.5,  -0.6,   0.2,  0.4,  1.0,
   0.9,  -0.6,   0.2,  0.4,  1.0,
   0.7,  -0.1,   0.2,  0.4,  1.0,
]);
```

Data ini berisi sembilan vertex:

```text
vertex 0, 1, 2 → segitiga kiri
vertex 3, 4, 5 → segitiga tengah
vertex 6, 7, 8 → segitiga kanan
```

### 12.2 Draw Call dengan Brightness Berbeda

```javascript
gl.useProgram(program);
gl.bindVertexArray(vao);

// Segitiga kiri: lebih gelap
gl.uniform1f(uBrightnessLocation, 0.5);
gl.uniform1f(uPointSizeLocation, 8.0);
gl.drawArrays(gl.TRIANGLES, 0, 3);

// Segitiga tengah: normal
gl.uniform1f(uBrightnessLocation, 1.0);
gl.uniform1f(uPointSizeLocation, 14.0);
gl.drawArrays(gl.TRIANGLES, 3, 3);

// Segitiga kanan: lebih terang
gl.uniform1f(uBrightnessLocation, 1.5);
gl.uniform1f(uPointSizeLocation, 22.0);
gl.drawArrays(gl.TRIANGLES, 6, 3);
```

Penjelasan:

```text
drawArrays(gl.TRIANGLES, 0, 3)
→ ambil vertex 0, 1, 2

drawArrays(gl.TRIANGLES, 3, 3)
→ ambil vertex 3, 4, 5

drawArrays(gl.TRIANGLES, 6, 3)
→ ambil vertex 6, 7, 8
```

Nilai `u_brightness` berubah sebelum setiap draw call.

Namun, pada mode `TRIANGLES`, nilai `u_pointSize` tidak terlihat efeknya karena `gl_PointSize` hanya relevan ketika menggambar dengan mode `POINTS`.

---

## 13. Contoh Point dengan Point Size Berbeda

Agar `u_pointSize` terlihat, gunakan primitive `gl.POINTS`.

### 13.1 Data Vertex Point

```javascript
const pointVertices = new Float32Array([
  // x,     y,     r,    g,    b
  -0.6,   0.45,  1.0,  0.2,  0.2,
   0.0,   0.45,  0.2,  1.0,  0.2,
   0.6,   0.45,  0.2,  0.4,  1.0,
]);
```

### 13.2 Draw Call Point Size Berbeda

```javascript
// Titik kiri: kecil
gl.uniform1f(uBrightnessLocation, 1.0);
gl.uniform1f(uPointSizeLocation, 8.0);
gl.drawArrays(gl.POINTS, 0, 1);

// Titik tengah: sedang
gl.uniform1f(uBrightnessLocation, 1.0);
gl.uniform1f(uPointSizeLocation, 20.0);
gl.drawArrays(gl.POINTS, 1, 1);

// Titik kanan: besar
gl.uniform1f(uBrightnessLocation, 1.0);
gl.uniform1f(uPointSizeLocation, 36.0);
gl.drawArrays(gl.POINTS, 2, 1);
```

Pada mode `POINTS`, vertex shader perlu menulis:

```glsl
gl_PointSize = u_pointSize;
```

---

## 14. Contoh Beberapa Draw Primitive

### 14.1 Menggambar Satu Segitiga

```javascript
gl.drawArrays(gl.TRIANGLES, 0, 3);
```

Artinya:

```text
vertex 0, 1, 2 → satu segitiga
```

---

### 14.2 Menggambar Dua Segitiga

```javascript
gl.drawArrays(gl.TRIANGLES, 0, 6);
```

Artinya:

```text
vertex 0, 1, 2 → segitiga pertama
vertex 3, 4, 5 → segitiga kedua
```

---

### 14.3 Menggambar Titik

```javascript
gl.uniform1f(uPointSizeLocation, 24.0);
gl.drawArrays(gl.POINTS, 0, 3);
```

Artinya:

```text
vertex 0 → titik
vertex 1 → titik
vertex 2 → titik
```

---

### 14.4 Menggambar Garis Terpisah

```javascript
gl.drawArrays(gl.LINES, 0, 4);
```

Artinya:

```text
vertex 0 dan 1 → garis pertama
vertex 2 dan 3 → garis kedua
```

---

### 14.5 Menggambar Garis Bersambung

```javascript
gl.drawArrays(gl.LINE_STRIP, 0, 4);
```

Artinya:

```text
vertex 0 — vertex 1 — vertex 2 — vertex 3
```

---

### 14.6 Menggambar Garis Tertutup

```javascript
gl.drawArrays(gl.LINE_LOOP, 0, 4);
```

Artinya:

```text
vertex 0 — vertex 1 — vertex 2 — vertex 3 — vertex 0
```

---

### 14.7 Menggambar Triangle Strip

```javascript
gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
```

Artinya:

```text
vertex 0, 1, 2 → segitiga pertama
vertex 1, 2, 3 → segitiga kedua
```

---

### 14.8 Menggambar Triangle Fan

```javascript
gl.drawArrays(gl.TRIANGLE_FAN, 0, 5);
```

Artinya:

```text
vertex 0, 1, 2 → segitiga pertama
vertex 0, 2, 3 → segitiga kedua
vertex 0, 3, 4 → segitiga ketiga
```

---

## 15. Contoh Lengkap: Segitiga, Point, Line, Animasi, dan Interaksi

File contoh lengkap tersedia terpisah dalam format `.html`. File tersebut bersifat mandiri, sehingga dapat langsung dibuka di browser modern yang mendukung WebGL2.

Fitur contoh:

- shader source ditulis dalam tag `<script>`;
- satu shader program;
- satu VAO;
- satu buffer vertex;
- beberapa draw call;
- beberapa primitive: `TRIANGLES`, `POINTS`, `LINES`, `LINE_STRIP`, `LINE_LOOP`, `TRIANGLE_STRIP`, `TRIANGLE_FAN`;
- perubahan `u_brightness` per draw call;
- perubahan `u_pointSize` per draw call;
- animasi gelombang sederhana melalui `u_time`;
- pergerakan objek sederhana melalui `u_offset`;
- interaksi keyboard dan slider;
- tanpa MVP, kamera, lighting, dan texturing.

---

## 16. Penjelasan Multiple Draw Calls

Dalam contoh interaktif, satu array vertex dibagi menjadi beberapa kelompok:

| Kelompok | Primitive | Tujuan |
|---|---|---|
| Segitiga kiri | `TRIANGLES` | brightness rendah |
| Segitiga tengah | `TRIANGLES` | brightness normal |
| Segitiga kanan | `TRIANGLES` | brightness tinggi |
| Tiga titik | `POINTS` | point size berbeda |
| Garis terpisah | `LINES` | pasangan garis |
| Garis bersambung | `LINE_STRIP` | polyline |
| Garis tertutup | `LINE_LOOP` | outline tertutup |
| Triangle strip | `TRIANGLE_STRIP` | dua segitiga hemat vertex |
| Triangle fan | `TRIANGLE_FAN` | segitiga berbentuk kipas |

Satu program dapat dipakai untuk banyak draw call:

```javascript
gl.useProgram(program);
gl.bindVertexArray(vao);

gl.uniform1f(uBrightnessLocation, 0.5);
gl.drawArrays(gl.TRIANGLES, 0, 3);

gl.uniform1f(uBrightnessLocation, 1.0);
gl.drawArrays(gl.TRIANGLES, 3, 3);

gl.uniform1f(uBrightnessLocation, 1.5);
gl.drawArrays(gl.TRIANGLES, 6, 3);
```

Artinya:

```text
Objek berbeda dapat digambar dengan shader yang sama.
Perbedaan tampilan dapat dibuat dengan mengubah uniform sebelum draw call.
```

---

## 17. Animasi Sederhana tanpa MVP

Animasi dapat dibuat tanpa MVP dengan cara mengubah posisi clip space secara langsung di vertex shader.

Contoh:

```glsl
uniform float u_time;
uniform vec2 u_offset;
uniform float u_waveAmount;

void main() {
  float wave = sin(u_time + a_position.x * 8.0) * u_waveAmount;
  vec2 animatedPosition = a_position + u_offset + vec2(0.0, wave);

  gl_Position = vec4(animatedPosition, 0.0, 1.0);
}
```

Maknanya:

- `u_time` berubah setiap frame;
- `u_offset` menggeser objek secara sederhana;
- `u_waveAmount` mengatur besar gerak naik-turun;
- posisi masih langsung dalam clip space;
- tidak ada matrix transform, tidak ada MVP.

Di JavaScript, animasi dipanggil dengan:

```javascript
requestAnimationFrame(render);
```

Setiap frame, nilai waktu dikirim ke shader:

```javascript
gl.uniform1f(uTimeLocation, timeInSeconds);
```

---

## 18. Interaksi Sederhana tanpa MVP

Interaksi dapat dibuat dengan mengubah uniform dari JavaScript.

Contoh keyboard:

```javascript
window.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    offsetX -= 0.03;
  }

  if (event.key === "ArrowRight") {
    offsetX += 0.03;
  }
});
```

Lalu dikirim ke shader:

```javascript
gl.uniform2f(uOffsetLocation, offsetX, offsetY);
```

Dengan cara ini, objek dapat bergerak tanpa menggunakan matrix transform.

---

## 19. Kesalahan Umum Pemula

### 19.1 Lupa `#version 300 es`

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

### 19.2 Masih Menggunakan `attribute` di WebGL2

WebGL1:

```glsl
attribute vec2 a_position;
```

WebGL2:

```glsl
in vec2 a_position;
```

---

### 19.3 Masih Menggunakan `varying` di WebGL2

WebGL1:

```glsl
varying vec3 v_color;
```

WebGL2 vertex shader:

```glsl
out vec3 v_color;
```

WebGL2 fragment shader:

```glsl
in vec3 v_color;
```

---

### 19.4 Masih Menggunakan `gl_FragColor`

WebGL1:

```glsl
gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
```

WebGL2:

```glsl
out vec4 outColor;

void main() {
  outColor = vec4(1.0, 0.0, 0.0, 1.0);
}
```

---

### 19.5 Nama Attribute Tidak Sama

GLSL:

```glsl
in vec2 a_position;
```

JavaScript salah:

```javascript
gl.getAttribLocation(program, "position");
```

---

### 19.6 Nama Uniform Tidak Sama

GLSL:

```glsl
uniform float u_brightness;
```

JavaScript salah:

```javascript
gl.getUniformLocation(program, "brightness");
```

---

### 19.7 Varying Tidak Cocok

Vertex shader:

```glsl
out vec3 v_color;
```

Fragment shader salah:

```glsl
in vec4 v_color;
```

Tipe tidak cocok.

Fragment shader salah juga:

```glsl
in vec3 color;
```

Nama tidak cocok.

---

### 19.8 Tidak Mengecek Error Kompilasi Shader

Jangan hanya menulis:

```javascript
gl.compileShader(shader);
```

Selalu cek:

```javascript
const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

if (!success) {
  console.log(gl.getShaderInfoLog(shader));
}
```

---

## 20. Best Practice untuk Pemula

### 20.1 Pisahkan Setup dan Render

Struktur yang disarankan:

```text
Setup shader
Setup program
Setup buffer
Setup attribute
Setup uniform location
Render / draw
```

---

### 20.2 Ambil Lokasi Attribute dan Uniform Sekali

Sebaiknya lakukan saat setup:

```javascript
const aPositionLocation = gl.getAttribLocation(program, "a_position");
const aColorLocation = gl.getAttribLocation(program, "a_color");

const uPointSizeLocation = gl.getUniformLocation(program, "u_pointSize");
const uBrightnessLocation = gl.getUniformLocation(program, "u_brightness");
```

Jangan mengambil lokasi attribute dan uniform berulang-ulang di setiap frame jika tidak perlu.

---

### 20.3 Gunakan Nama Konsisten

Shader:

```glsl
in vec2 a_position;
in vec3 a_color;

uniform float u_pointSize;
uniform float u_brightness;

out vec3 v_color;
```

JavaScript:

```javascript
gl.getAttribLocation(program, "a_position");
gl.getAttribLocation(program, "a_color");

gl.getUniformLocation(program, "u_pointSize");
gl.getUniformLocation(program, "u_brightness");
```

---

### 20.4 Gunakan VAO di WebGL2

```javascript
const vao = gl.createVertexArray();
gl.bindVertexArray(vao);
```

VAO membuat konfigurasi attribute lebih mudah dikelola.

---

### 20.5 Pisahkan Fungsi Utilitas

Minimal gunakan fungsi:

```text
getShaderSource()
createShader()
createProgram()
main()
render()
```

Struktur ini membuat kode lebih mudah dibaca dan debugging lebih mudah.

---

### 20.6 Simpan Shader di `<script>`

Disarankan:

```html
<script id="vertex-shader" type="x-shader/x-vertex">
#version 300 es
...
</script>
```

Tidak disarankan untuk tutorial awal:

```javascript
const vertexShaderSource = `
#version 300 es
...
`;
```

Alasannya pedagogis: mahasiswa lebih mudah melihat batas antara HTML, JavaScript, dan GLSL.

---

## 21. Ringkasan Konsep

| Konsep | WebGL2 Syntax | Sumber Data | Digunakan di | Fungsi |
|---|---|---|---|---|
| Attribute | `in` | JavaScript buffer | Vertex shader | Data per vertex |
| Uniform | `uniform` | JavaScript | Vertex/fragment shader | Data konstan per draw call |
| Varying | `out` lalu `in` | Vertex shader | Fragment shader | Data antar-shader, diinterpolasi |
| Fragment output | `out vec4` | Fragment shader | Framebuffer | Warna akhir fragment |
| Primitive | `gl.TRIANGLES`, dll. | Draw call | Primitive assembly | Menentukan bentuk dasar |

---

## 22. Ringkasan Penamaan

Gunakan konvensi:

```text
a_ untuk attribute
u_ untuk uniform
v_ untuk varying
outColor untuk output fragment
```

Contoh vertex shader:

```glsl
in vec2 a_position;
in vec3 a_color;

uniform float u_pointSize;
uniform float u_time;
uniform vec2 u_offset;
uniform float u_waveAmount;

out vec3 v_color;
```

Contoh fragment shader:

```glsl
in vec3 v_color;

uniform float u_brightness;

out vec4 outColor;
```

Aturan penting:

```text
Nama attribute di GLSL harus sama dengan string getAttribLocation().
Nama uniform di GLSL harus sama dengan string getUniformLocation().
Nama varying out di vertex shader harus sama dengan nama varying in di fragment shader.
Nama variabel JavaScript boleh berbeda.
```

---

## 23. Urutan Materi yang Disarankan

Untuk pembelajaran bertahap:

```text
1. Canvas dan WebGL2 context
2. Shader source dari script tag
3. Compile shader dan link program
4. Attribute posisi
5. drawArrays dengan POINTS
6. drawArrays dengan LINES
7. drawArrays dengan TRIANGLES
8. Attribute warna
9. Varying warna
10. Uniform sederhana
11. Multiple draw calls
12. Primitive assembly
13. Animasi sederhana dengan u_time
14. Interaksi sederhana dengan u_offset
15. Struktur kode reusable
```

Baru setelah itu masuk ke:

```text
transformasi
MVP
kamera
lighting
texture
model 3D
```

Dengan urutan ini, mahasiswa memahami dulu bagaimana data bergerak dari JavaScript ke GPU sebelum masuk ke konsep grafika yang lebih kompleks.
