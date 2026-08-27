# MODUL PRAKTIKUM GRAFIKA KOMPUTER — PERTEMUAN 1

## Graphics Playground dengan HTML Canvas 2D

**Mata Kuliah:** EF234504 — Grafika Komputer  
**Pertemuan:** 1  
**Topik:** Introduction to Computer Graphics  
**Dosen:** Dr. Darlis Herumurti  
**Departemen Teknik Informatika**  
**Institut Teknologi Sepuluh Nopember (ITS)**

---

## 1. Deskripsi Praktikum

Praktikum pertama memperkenalkan proses paling dasar dalam grafika komputer melalui sebuah mini aplikasi **Graphics Playground** menggunakan **HTML, JavaScript, dan HTML Canvas 2D**.

Fokus praktikum bukan membuat aplikasi yang kompleks. Fokus utamanya adalah memahami bahwa gambar pada layar dibentuk dari **data**, seperti koordinat, ukuran, warna, dan bentuk, kemudian diproses menjadi elemen visual.

Mahasiswa akan membuat beberapa primitive 2D, memberi warna, membuat satu objek bergerak, dan menambahkan interaksi pengguna. Praktikum ini menjadi jembatan konseptual sebelum mempelajari **WebGL Fundamental** pada Pertemuan 2.

Alur utama:

```text
Create Canvas
     ↓
Draw Primitive
     ↓
Set Color & Position
     ↓
Animate
     ↓
Add Interaction
```

---

## 2. Capaian Praktikum

Setelah menyelesaikan praktikum, mahasiswa diharapkan mampu:

1. menjelaskan fungsi HTML Canvas sebagai area gambar;
2. memahami koordinat 2D pada canvas;
3. menggunakan data posisi, ukuran, dan warna untuk membentuk gambar;
4. menggambar rectangle, line, circle, dan triangle;
5. memahami hubungan primitive dengan representasi geometry;
6. membuat animasi berbasis frame;
7. menggunakan `requestAnimationFrame()` untuk memperbarui tampilan;
8. menangani input mouse dan keyboard;
9. membuat mini aplikasi grafika interaktif;
10. menghubungkan hasil praktikum dengan konsep dasar graphics pipeline.

---

## 3. Keterkaitan dengan Materi Pertemuan 1

Materi Pertemuan 1 memperkenalkan beberapa konsep yang langsung digunakan pada praktikum.

### 3.1 Data Menjadi Gambar

Konsep utama:

```text
DATA
 ↓
GEOMETRY & ATTRIBUTES
 ↓
RENDERING
 ↓
IMAGE
```

Dalam praktikum, data dapat berupa:

```javascript
let x = 100;
let y = 120;
let width = 80;
let height = 50;
let color = "orange";
```

Variabel tersebut belum merupakan gambar. Setelah diberikan kepada perintah Canvas, data tersebut menghasilkan bentuk visual.

### 3.2 Koordinat 2D

Pada materi, titik 2D dinyatakan sebagai:

```text
P = (x, y)
```

Canvas juga menggunakan koordinat 2D. Secara default:

- titik `(0, 0)` berada di kiri atas;
- nilai `x` bertambah ke kanan;
- nilai `y` bertambah ke bawah.

```text
(0,0) ───────────────→ +X
  |
  |
  |
  ↓
 +Y
```

### 3.3 Primitive

Pada praktikum digunakan:

- rectangle,
- line,
- circle,
- triangle.

Primitive adalah bentuk dasar yang dapat dikombinasikan untuk menghasilkan visual yang lebih kompleks.

### 3.4 Frame dan Animasi

Materi menjelaskan bahwa satu gambar lengkap disebut **frame**. Animasi terjadi ketika banyak frame ditampilkan berurutan.

Pada praktikum:

```text
Update Data
    ↓
Clear Canvas
    ↓
Draw New Frame
    ↓
Display
    ↓
Repeat
```

### 3.5 Interaksi

Input mouse atau keyboard mengubah data aplikasi. Perubahan data kemudian memengaruhi frame berikutnya.

```text
USER INPUT
    ↓
CHANGE DATA
    ↓
DRAW FRAME
    ↓
NEW IMAGE
```

---

## 4. Perangkat yang Dibutuhkan

### Software

Mahasiswa membutuhkan:

- web browser modern, misalnya Chrome, Edge, atau Firefox;
- text editor atau IDE, disarankan Visual Studio Code;
- tidak diperlukan web server khusus untuk praktikum dasar ini.

### Kemampuan Awal

Mahasiswa cukup memahami:

- struktur dasar HTML;
- variabel JavaScript;
- fungsi;
- `if`;
- event sederhana.

Tidak diperlukan pengetahuan WebGL pada praktikum ini.

---

## 5. Struktur Project

Buat folder:

```text
praktikum-grafika-p1/
│
├── index.html
└── app.js
```

Tujuannya adalah memisahkan:

- `index.html` → struktur halaman dan canvas;
- `app.js` → logika grafika, animasi, dan interaksi.

---

# BAGIAN A — MEMBUAT GRAPHICS PLAYGROUND

## 6. Langkah 1 — Membuat HTML dan Canvas

Buat `index.html`:

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Graphics Playground</title>

    <style>
        body {
            margin: 0;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #1b1f2a;
            font-family: Arial, sans-serif;
        }

        canvas {
            background: white;
            border: 2px solid #444;
        }
    </style>
</head>
<body>

    <canvas id="graphicsCanvas"
            width="800"
            height="500">
    </canvas>

    <script src="app.js"></script>
</body>
</html>
```

### Penjelasan

Elemen:

```html
<canvas id="graphicsCanvas" width="800" height="500"></canvas>
```

membuat area gambar berukuran:

```text
800 × 500 pixel
```

`id="graphicsCanvas"` digunakan agar JavaScript dapat mengambil elemen tersebut.

> Perhatikan bahwa `width` dan `height` pada elemen canvas menentukan ukuran drawing buffer. Untuk praktikum awal, tentukan langsung melalui atribut HTML agar sistem koordinat mudah dipahami.

---

## 7. Langkah 2 — Mengambil Canvas dan Context 2D

Buat `app.js`:

```javascript
const canvas = document.getElementById("graphicsCanvas");
const ctx = canvas.getContext("2d");

console.log(canvas.width, canvas.height);
```

Buka `index.html` pada browser, lalu buka Developer Tools → Console.

Seharusnya tampil:

```text
800 500
```

### Apa Itu Context?

Canvas adalah area tempat gambar ditampilkan.

Context menyediakan operasi untuk menggambar.

```javascript
const ctx = canvas.getContext("2d");
```

berarti aplikasi meminta **2D rendering context**.

Secara konseptual:

```text
JavaScript Data
      ↓
Canvas 2D Commands
      ↓
Canvas
      ↓
Pixels on Screen
```

Pada pertemuan berikutnya, mahasiswa akan menggunakan WebGL sebagai graphics API untuk mengakses pipeline GPU melalui browser. Praktikum ini sengaja menggunakan Canvas 2D terlebih dahulu agar fokus pada konsep coordinate, primitive, frame, dan interaction.

---

# BAGIAN B — MEMAHAMI KOORDINAT

## 8. Langkah 3 — Menggambar Titik Referensi Koordinat

Tambahkan:

```javascript
ctx.fillStyle = "red";
ctx.fillRect(0, 0, 10, 10);

ctx.fillStyle = "blue";
ctx.fillRect(100, 100, 10, 10);

ctx.fillStyle = "green";
ctx.fillRect(400, 250, 10, 10);
```

Amati posisi ketiga kotak.

### Analisis

Kotak merah:

```text
x = 0
y = 0
```

berada di kiri atas.

Kotak biru:

```text
x = 100
y = 100
```

bergeser ke kanan dan ke bawah.

Kotak hijau:

```text
x = 400
y = 250
```

berada mendekati tengah canvas 800 × 500.

### Eksperimen

Ubah nilai koordinat dan amati hasilnya:

```javascript
ctx.fillRect(700, 400, 10, 10);
```

Pertanyaan:

1. Apa yang terjadi jika `x` semakin besar?
2. Apa yang terjadi jika `y` semakin besar?
3. Apa yang terjadi jika koordinat melebihi ukuran canvas?
4. Di manakah perkiraan koordinat pusat canvas?

Untuk canvas 800 × 500:

```text
centerX = 800 / 2 = 400
centerY = 500 / 2 = 250
```

---

# BAGIAN C — MENGGAMBAR PRIMITIVE

## 9. Langkah 4 — Membersihkan Eksperimen Awal

Hapus atau komentari kode percobaan sebelumnya, kemudian buat fungsi:

```javascript
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
```

`clearRect()` membersihkan area tertentu.

Untuk seluruh canvas:

```javascript
ctx.clearRect(0, 0, canvas.width, canvas.height);
```

---

## 10. Langkah 5 — Rectangle

Tambahkan fungsi:

```javascript
function drawRectangle() {
    ctx.fillStyle = "#3498db";
    ctx.fillRect(80, 80, 160, 100);
}
```

Panggil:

```javascript
clearCanvas();
drawRectangle();
```

### Parameter `fillRect`

```javascript
ctx.fillRect(x, y, width, height);
```

Contoh:

```javascript
ctx.fillRect(80, 80, 160, 100);
```

berarti:

- posisi kiri atas `(80, 80)`;
- lebar `160`;
- tinggi `100`.

### Warna

```javascript
ctx.fillStyle = "#3498db";
```

menentukan warna isi primitive berikutnya.

Dengan demikian, gambar rectangle berasal dari data:

```text
Position = (80, 80)
Size     = (160, 100)
Color    = #3498db
```

---

## 11. Langkah 6 — Line

Tambahkan:

```javascript
function drawLine() {
    ctx.beginPath();

    ctx.moveTo(300, 80);
    ctx.lineTo(500, 180);

    ctx.strokeStyle = "#e74c3c";
    ctx.lineWidth = 5;

    ctx.stroke();
}
```

Tambahkan pemanggilan:

```javascript
drawLine();
```

### Penjelasan Path

Line dibuat menggunakan path:

```text
beginPath()
    ↓
moveTo()
    ↓
lineTo()
    ↓
stroke()
```

`moveTo(x, y)` menentukan titik awal.

`lineTo(x, y)` menambahkan garis menuju titik berikutnya.

`stroke()` menggambar outline/path tersebut.

---

## 12. Langkah 7 — Circle

Tambahkan:

```javascript
function drawCircle() {
    ctx.beginPath();

    ctx.arc(
        650,
        120,
        60,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = "#2ecc71";
    ctx.fill();
}
```

Panggil:

```javascript
drawCircle();
```

### Parameter `arc`

Bentuk umum:

```javascript
ctx.arc(
    centerX,
    centerY,
    radius,
    startAngle,
    endAngle
);
```

Untuk lingkaran penuh:

```javascript
0 → Math.PI * 2
```

Karena satu putaran penuh adalah:

```text
2π radian
```

Data lingkaran:

```text
Center = (650, 120)
Radius = 60
Color  = green
```

---

## 13. Langkah 8 — Triangle

Tambahkan:

```javascript
function drawTriangle() {
    ctx.beginPath();

    ctx.moveTo(150, 300);
    ctx.lineTo(80, 430);
    ctx.lineTo(220, 430);

    ctx.closePath();

    ctx.fillStyle = "#f39c12";
    ctx.fill();

    ctx.strokeStyle = "#8a5705";
    ctx.lineWidth = 3;
    ctx.stroke();
}
```

Panggil:

```javascript
drawTriangle();
```

### Triangle dan Vertex

Triangle memiliki tiga titik.

```text
V0 = (150, 300)
V1 = (80, 430)
V2 = (220, 430)
```

Secara konseptual:

```text
       V0
       ●
      / \
     /   \
   ●───────●
  V1       V2
```

Kode:

```javascript
ctx.moveTo(150, 300);
ctx.lineTo(80, 430);
ctx.lineTo(220, 430);
ctx.closePath();
```

membentuk path dari tiga titik tersebut.

Ini penting karena materi Pertemuan 1 menjelaskan triangle sebagai primitive utama dalam grafika 3D. Canvas 2D tidak menggunakan pipeline WebGL yang akan dipelajari berikutnya, tetapi latihan ini membantu melihat hubungan antara **koordinat vertex** dan **bentuk visual**.

---

## 14. Langkah 9 — Menggabungkan Primitive

Susun fungsi:

```javascript
function drawStaticScene() {
    clearCanvas();

    drawRectangle();
    drawLine();
    drawCircle();
    drawTriangle();
}

drawStaticScene();
```

Sekarang Graphics Playground memiliki empat jenis primitive.

Target minimum materi sebenarnya adalah minimal tiga jenis primitive; pada modul ini mahasiswa membuat empat agar konsep lebih jelas.

---

# BAGIAN D — DATA DAN OBJECT

## 15. Langkah 10 — Memisahkan Data dari Fungsi Gambar

Sebelumnya nilai posisi ditulis langsung di dalam fungsi.

Sekarang buat data:

```javascript
const rectangle = {
    x: 80,
    y: 80,
    width: 160,
    height: 100,
    color: "#3498db"
};
```

Ubah fungsi:

```javascript
function drawRectangle() {
    ctx.fillStyle = rectangle.color;

    ctx.fillRect(
        rectangle.x,
        rectangle.y,
        rectangle.width,
        rectangle.height
    );
}
```

### Mengapa Ini Penting?

Sekarang terdapat pemisahan sederhana:

```text
DATA
 ↓
DRAW FUNCTION
 ↓
IMAGE
```

Jika:

```javascript
rectangle.x = 300;
```

kemudian frame digambar ulang, posisi rectangle akan berubah.

Konsep ini merupakan bentuk sederhana dari gagasan bahwa komputer menyimpan **representasi/data**, sedangkan proses grafika mengubah data tersebut menjadi gambar.

---

# BAGIAN E — ANIMASI BERBASIS FRAME

## 16. Langkah 11 — Membuat Objek Bergerak

Buat objek baru:

```javascript
const movingBall = {
    x: 350,
    y: 300,
    radius: 25,
    speedX: 2,
    color: "#9b59b6"
};
```

Buat fungsi:

```javascript
function drawMovingBall() {
    ctx.beginPath();

    ctx.arc(
        movingBall.x,
        movingBall.y,
        movingBall.radius,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = movingBall.color;
    ctx.fill();
}
```

---

## 17. Langkah 12 — Update Posisi

Buat:

```javascript
function update() {
    movingBall.x += movingBall.speedX;
}
```

Setiap kali `update()` dipanggil:

```text
x baru = x lama + speedX
```

Jika:

```javascript
speedX = 2;
```

maka posisi bergerak dua unit koordinat setiap update.

---

## 18. Langkah 13 — Membuat Animation Loop

Buat fungsi utama:

```javascript
function animate() {
    clearCanvas();

    update();

    drawRectangle();
    drawLine();
    drawCircle();
    drawTriangle();
    drawMovingBall();

    requestAnimationFrame(animate);
}

animate();
```

Hapus pemanggilan:

```javascript
drawStaticScene();
```

jika masih ada.

### Bagaimana Animation Loop Bekerja?

```text
animate()
   ↓
Clear Previous Frame
   ↓
Update Data
   ↓
Draw Objects
   ↓
requestAnimationFrame()
   ↓
Next Frame
```

`requestAnimationFrame(animate)` meminta browser memanggil fungsi `animate` kembali saat browser siap menggambar frame berikutnya.

### Mengapa Canvas Harus Dibersihkan?

Coba sementara komentari:

```javascript
clearCanvas();
```

Objek bergerak akan meninggalkan jejak.

Hal tersebut terjadi karena pixel hasil frame sebelumnya masih ada.

Animasi normal biasanya menggambar ulang frame:

```text
FRAME 1 → clear → FRAME 2 → clear → FRAME 3 → ...
```

---

# BAGIAN F — CHALLENGE 1: BOUNCING OBJECT

## 19. Langkah 14 — Deteksi Batas Canvas

Saat ini bola terus bergerak ke kanan dan akhirnya keluar dari canvas.

Tambahkan pada `update()`:

```javascript
function update() {
    movingBall.x += movingBall.speedX;

    if (
        movingBall.x + movingBall.radius >= canvas.width ||
        movingBall.x - movingBall.radius <= 0
    ) {
        movingBall.speedX *= -1;
    }
}
```

### Penjelasan

Batas kanan bola:

```text
x + radius
```

Batas kiri:

```text
x - radius
```

Jika menyentuh sisi canvas:

```javascript
movingBall.speedX *= -1;
```

arah gerak dibalik.

Contoh:

```text
2 → -2
```

atau:

```text
-2 → 2
```

Hasilnya adalah objek yang memantul secara horizontal.

---

## 20. Pengembangan — Gerakan Dua Dimensi

Tambahkan:

```javascript
movingBall.speedY = 2;
```

Ubah `update()`:

```javascript
function update() {
    movingBall.x += movingBall.speedX;
    movingBall.y += movingBall.speedY;

    if (
        movingBall.x + movingBall.radius >= canvas.width ||
        movingBall.x - movingBall.radius <= 0
    ) {
        movingBall.speedX *= -1;
    }

    if (
        movingBall.y + movingBall.radius >= canvas.height ||
        movingBall.y - movingBall.radius <= 0
    ) {
        movingBall.speedY *= -1;
    }
}
```

Sekarang perubahan posisi adalah:

```text
(x, y)
   ↓
(x + vx, y + vy)
```

Ini merupakan contoh sederhana perubahan data posisi dalam ruang 2D.

---

# BAGIAN G — INTERAKSI MOUSE

## 21. Langkah 15 — Membaca Posisi Mouse

Buat data:

```javascript
const mouse = {
    x: 0,
    y: 0
};
```

Tambahkan event:

```javascript
canvas.addEventListener("mousemove", function(event) {
    const rect = canvas.getBoundingClientRect();

    mouse.x =
        (event.clientX - rect.left) *
        (canvas.width / rect.width);

    mouse.y =
        (event.clientY - rect.top) *
        (canvas.height / rect.height);
});
```

### Mengapa Perlu Konversi?

`event.clientX` dan `event.clientY` adalah koordinat pointer relatif terhadap viewport browser.

Kita membutuhkan koordinat relatif terhadap canvas.

Secara sederhana:

```text
Browser Coordinate
       ↓
Subtract Canvas Position
       ↓
Scale to Canvas Drawing Coordinate
       ↓
Canvas Coordinate
```

Faktor:

```javascript
canvas.width / rect.width
canvas.height / rect.height
```

membantu menjaga koordinat tetap benar jika ukuran tampilan CSS berbeda dari ukuran drawing buffer.

---

## 22. Langkah 16 — Menampilkan Koordinat Mouse

Tambahkan:

```javascript
function drawMouseCoordinate() {
    ctx.fillStyle = "#222";
    ctx.font = "16px Arial";

    ctx.fillText(
        `Mouse: (${Math.round(mouse.x)}, ${Math.round(mouse.y)})`,
        20,
        30
    );
}
```

Tambahkan pada `animate()`:

```javascript
drawMouseCoordinate();
```

Sekarang pengguna dapat melihat hubungan langsung antara posisi pointer dan koordinat canvas.

---

# BAGIAN H — INTERAKSI KLIK

## 23. Langkah 17 — Mengubah Warna Ketika Diklik

Tambahkan:

```javascript
const colors = [
    "#9b59b6",
    "#e74c3c",
    "#2ecc71",
    "#f1c40f",
    "#3498db"
];

let colorIndex = 0;
```

Tambahkan event:

```javascript
canvas.addEventListener("click", function() {
    colorIndex = (colorIndex + 1) % colors.length;
    movingBall.color = colors[colorIndex];
});
```

### Alur Interaksi

```text
Mouse Click
    ↓
Change colorIndex
    ↓
Change movingBall.color
    ↓
Next Frame
    ↓
Ball Appears with New Color
```

Perhatikan bahwa event tidak harus menggambar bola secara langsung. Event cukup mengubah **data**, lalu animation loop menggambar keadaan terbaru.

---

# BAGIAN I — INTERAKSI KEYBOARD

## 24. Memahami Dua Pola Input Keyboard

Interaksi keyboard pada aplikasi grafika interaktif umumnya dapat ditangani dengan dua pola:

```text
1. Event-Based Input
2. State-Based Input
```

Keduanya menggunakan event keyboard browser seperti:

```javascript
keydown
keyup
```

Perbedaannya terletak pada **kapan aksi aplikasi dijalankan**.

---

## 25. Event-Based Keyboard Input

Pada pendekatan **event-based**, aksi langsung dilakukan ketika event terjadi.

Contoh:

```javascript
window.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        player.x += 10;
    }
});
```

Alurnya:

```text
Keydown Event
     ↓
Event Handler
     ↓
Ubah Posisi
     ↓
Selesai
```

Jika tombol ditekan sekali:

```text
ArrowRight
→ x bertambah 10
```

### Karakteristik Event-Based

Event-based cocok untuk aksi yang bersifat:

```text
sekali tekan
→ satu aksi
```

Contoh:

- mengganti warna;
- pause / resume;
- menampilkan atau menyembunyikan UI;
- mengganti mode;
- memilih tool;
- menembakkan aksi satu kali;
- toggle grid;
- reset posisi.

Contoh mengganti warna:

```javascript
window.addEventListener("keydown", function(event) {
    if (event.key === "c") {
        colorIndex =
            (colorIndex + 1) %
            colors.length;

        player.color =
            colors[colorIndex];
    }
});
```

Setiap penekanan tombol `C` menghasilkan satu perubahan warna.

---

## 26. Keterbatasan Event-Based untuk Translasi Kontinu

Secara teknis object dapat digerakkan langsung dari `keydown`.

Contoh:

```javascript
window.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        player.x -= 5;
    }

    if (event.key === "ArrowRight") {
        player.x += 5;
    }
});
```

Namun pendekatan ini kurang ideal untuk gerakan kontinu.

Mengapa?

Browser dapat menghasilkan pengulangan `keydown` ketika tombol ditahan:

```text
keydown
   ↓
delay
   ↓
keydown
keydown
keydown
keydown
...
```

Kecepatan dan pola repeat tersebut ditentukan oleh:

- browser;
- sistem operasi;
- keyboard repeat delay;
- keyboard repeat rate.

Akibatnya, translasi menjadi bergantung pada **event repeat**, bukan pada animation loop aplikasi.

Secara konseptual:

```text
Keyboard Repeat Timing
        ↓
Movement Timing
```

Padahal untuk aplikasi grafika interaktif, kita biasanya menginginkan:

```text
Animation Loop Timing
        ↓
Movement Timing
```

---

## 27. State-Based Keyboard Input

Pada pendekatan **state-based**, event keyboard tidak langsung memindahkan object.

Event hanya mencatat keadaan tombol:

```text
pressed
atau
released
```

Contoh data state:

```javascript
const keys = {
    ArrowLeft: false,
    ArrowRight: false,
    ArrowUp: false,
    ArrowDown: false
};
```

Ketika tombol ditekan:

```javascript
window.addEventListener("keydown", function(event) {
    keys[event.key] = true;
});
```

Ketika tombol dilepas:

```javascript
window.addEventListener("keyup", function(event) {
    keys[event.key] = false;
});
```

Dengan demikian:

```text
keydown
→ key state = true

keyup
→ key state = false
```

Event hanya **mengubah state**.

---

## 28. Translasi State-Based

Buat object player:

```javascript
const player = {
    x: 600,
    y: 350,
    width: 50,
    height: 50,
    speed: 5,
    color: "#e67e22"
};
```

Buat state tombol:

```javascript
const keys = {};
```

Event:

```javascript
window.addEventListener("keydown", function(event) {
    const controlledKeys = [
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "ArrowDown"
    ];

    if (controlledKeys.includes(event.key)) {
        event.preventDefault();
    }

    // State-based:
    // simpan status tombol untuk translasi kontinu.
    keys[event.key] = true;

    // Event-based:
    // contoh aksi diskrit sekali tekan.
    if (
        event.key.toLowerCase() === "r" &&
        !event.repeat
    ) {
        player.x = 600;
        player.y = 350;
    }
});

window.addEventListener("keyup", function(event) {
    keys[event.key] = false;
});
```

Kemudian translasi dilakukan pada fungsi update:

```javascript
function updatePlayer() {
    if (keys["ArrowLeft"]) {
        player.x -= player.speed;
    }

    if (keys["ArrowRight"]) {
        player.x += player.speed;
    }

    if (keys["ArrowUp"]) {
        player.y -= player.speed;
    }

    if (keys["ArrowDown"]) {
        player.y += player.speed;
    }
}
```

Fungsi ini dipanggil dari animation loop:

```javascript
function animate() {
    clearCanvas();

    updateMovingBall();
    updatePlayer();

    drawScene();

    requestAnimationFrame(animate);
}
```

---

## 29. Alur State-Based Input

Alurnya:

```text
keydown
   ↓
keys["ArrowRight"] = true
   ↓
Animation Loop
   ↓
updatePlayer()
   ↓
Tombol masih ditekan?
   ↓
YA
   ↓
player.x += speed
   ↓
Draw Frame
   ↓
Frame berikutnya
   ↓
Cek state lagi
```

Ketika tombol dilepas:

```text
keyup
   ↓
keys["ArrowRight"] = false
   ↓
updatePlayer()
   ↓
Tidak ada translasi lagi
```

Dengan demikian, gerakan object dikendalikan oleh:

```text
state tombol
+
animation loop
```

bukan oleh keyboard repeat.

---

## 30. Mengapa State-Based Lebih Cocok untuk Translasi?

Translasi merupakan aksi kontinu.

Saat user menahan:

```text
ArrowRight
```

yang diinginkan adalah:

```text
selama tombol ditekan
→ object terus bergerak
```

State-based memberikan model yang lebih natural:

```text
INPUT STATE
     ↓
UPDATE
     ↓
POSITION
     ↓
DRAW
     ↓
NEXT FRAME
```

Ini juga konsisten dengan struktur aplikasi grafika:

```text
Input
Update
Render
```

---

## 31. Multi-Key Input pada State-Based

Keuntungan penting lain adalah beberapa tombol dapat aktif bersamaan.

Contoh:

```text
ArrowRight + ArrowUp
```

Pada `updatePlayer()`:

```javascript
if (keys["ArrowRight"]) {
    player.x += player.speed;
}

if (keys["ArrowUp"]) {
    player.y -= player.speed;
}
```

Keduanya dapat berjalan pada frame yang sama.

Hasilnya:

```text
gerak diagonal kanan-atas
```

State aplikasi:

```text
ArrowRight = true
ArrowUp    = true
```

---

## 32. Mencegah Default Browser pada Arrow Key

Arrow key dapat digunakan browser untuk scrolling halaman.

Untuk aplikasi canvas, kita dapat mencegah default behavior:

```javascript
window.addEventListener("keydown", function(event) {
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
});
```

Untuk modul ini canvas berada pada layout sederhana, tetapi kebiasaan ini berguna saat aplikasi menjadi lebih kompleks.

---

## 33. Menggambar Player

Tambahkan:

```javascript
function drawPlayer() {
    ctx.fillStyle = player.color;

    ctx.fillRect(
        player.x,
        player.y,
        player.width,
        player.height
    );
}
```

Tambahkan ke `animate()`:

```javascript
updatePlayer();
drawPlayer();
```

---

## 34. Membatasi Player di Dalam Canvas

Tambahkan pada akhir `updatePlayer()`:

```javascript
player.x = Math.max(
    0,
    Math.min(
        canvas.width - player.width,
        player.x
    )
);

player.y = Math.max(
    0,
    Math.min(
        canvas.height - player.height,
        player.y
    )
);
```

Sekarang player tidak dapat keluar dari canvas.

---

## 35. Event-Based vs State-Based

Perbandingan:

| Aspek | Event-Based | State-Based |
|---|---|---|
| Pemicu | Event seperti `keydown` | State dibaca pada animation loop |
| Aksi dilakukan | Langsung di event handler | Di fungsi `update()` |
| Cocok untuk | Aksi diskrit / sekali tekan | Aksi kontinu |
| Translasi terus-menerus | Kurang ideal | **Sangat cocok** |
| Mengandalkan keyboard repeat | Dapat iya | Tidak |
| Multi-key movement | Kurang natural | **Mudah** |
| Pause / toggle | **Sangat cocok** | Tidak perlu |
| Struktur Input → Update → Draw | Kurang terpisah | **Jelas** |
| Kontrol selama tombol ditahan | Bergantung repeat event | **Berdasarkan state** |

---

## 36. Kapan Menggunakan Event-Based?

Gunakan **event-based** ketika satu event harus menghasilkan satu aksi.

Contoh:

```text
C
→ ganti warna

Space
→ pause / resume

R
→ reset posisi

G
→ tampilkan / sembunyikan grid

Enter
→ konfirmasi
```

Contoh:

```javascript
window.addEventListener("keydown", function(event) {
    if (event.key === "r") {
        player.x = 600;
        player.y = 350;
    }
});
```

Satu kali `R` ditekan:

```text
satu kali reset
```

---

## 37. Kapan Menggunakan State-Based?

Gunakan **state-based** ketika aksi berlangsung selama input masih aktif.

Contoh:

```text
W / A / S / D
→ bergerak

Arrow Keys
→ translasi

Q / E
→ rotasi kontinu

Shift
→ sprint selama ditahan

Mouse button held
→ drag / continuous action
```

Untuk translasi:

```text
KEY HELD
    ↓
STATE = TRUE
    ↓
UPDATE EVERY FRAME
    ↓
TRANSLATION
```

---

## 38. Menggabungkan Event-Based dan State-Based

Aplikasi nyata biasanya menggunakan **keduanya**.

Contoh:

```text
Arrow Keys
→ State-Based
→ movement

C
→ Event-Based
→ change color

R
→ Event-Based
→ reset

Space
→ Event-Based
→ pause
```

Ini bukan dua pendekatan yang saling menggantikan.

Prinsip yang lebih tepat:

> pilih mekanisme berdasarkan **karakter aksi**.

---

## 39. Contoh Kombinasi

```javascript
const keys = {};

window.addEventListener("keydown", function(event) {
    keys[event.key] = true;

    // Event-based: satu aksi
    if (event.key === "r") {
        player.x = 600;
        player.y = 350;
    }

    if (event.key === "c") {
        colorIndex =
            (colorIndex + 1) %
            colors.length;

        player.color =
            colors[colorIndex];
    }
});

window.addEventListener("keyup", function(event) {
    keys[event.key] = false;
});

function updatePlayer() {
    // State-based: aksi kontinu
    if (keys["ArrowLeft"]) {
        player.x -= player.speed;
    }

    if (keys["ArrowRight"]) {
        player.x += player.speed;
    }

    if (keys["ArrowUp"]) {
        player.y -= player.speed;
    }

    if (keys["ArrowDown"]) {
        player.y += player.speed;
    }
}
```

Dalam contoh ini:

```text
R / C
→ event-based

Arrow Keys
→ state-based
```

---

## 40. Catatan tentang `event.repeat`

Jika action harus benar-benar terjadi sekali saat tombol mulai ditekan, browser menyediakan:

```javascript
event.repeat
```

Contoh:

```javascript
window.addEventListener("keydown", function(event) {
    if (
        event.key === "c" &&
        !event.repeat
    ) {
        colorIndex =
            (colorIndex + 1) %
            colors.length;
    }
});
```

Dengan demikian menahan tombol `C` tidak terus-menerus mengganti warna karena keyboard repeat.

Ini berguna untuk event-based action seperti:

- toggle;
- mode switch;
- pause;
- reset;
- change color.

---

## 41. Ringkasan Input Keyboard

Gunakan pola berikut:

```text
AKSI DISKRIT
→ Event-Based

AKSI KONTINU
→ State-Based
```

Contoh:

```text
Change Color
→ Event-Based

Reset
→ Event-Based

Pause
→ Event-Based

Translation
→ State-Based

Continuous Rotation
→ State-Based
```

Untuk praktikum ini:

> **translasi player wajib menggunakan state-based keyboard input.**

---

# BAGIAN J — MENYUSUN PROGRAM FINAL

## 26. Struktur Program

Program akhir sebaiknya memiliki struktur:

```text
INITIALIZATION
│
├── Canvas
├── Context
├── Object Data
├── Mouse Data
└── Keyboard State

FUNCTIONS
│
├── clearCanvas()
├── update()
├── updatePlayer()
├── drawRectangle()
├── drawLine()
├── drawCircle()
├── drawTriangle()
├── drawMovingBall()
├── drawPlayer()
└── drawMouseCoordinate()

INPUT EVENTS
│
├── mousemove
├── click
├── keydown
└── keyup
      ↓
KEYBOARD STATE
      ↓
UPDATE FUNCTIONS
      ↓
ANIMATION LOOP
└── animate()
```

Struktur ini memisahkan:

```text
Data
Update
Draw
Input
```

Pemisahan tersebut membantu memahami aliran sebuah aplikasi grafika interaktif.

---

## 27. Contoh `app.js` Final

Berikut satu implementasi lengkap yang dapat digunakan sebagai baseline.

```javascript
const canvas = document.getElementById("graphicsCanvas");
const ctx = canvas.getContext("2d");

// --------------------------------------------------
// DATA
// --------------------------------------------------

const rectangle = {
    x: 80,
    y: 80,
    width: 160,
    height: 100,
    color: "#3498db"
};

const movingBall = {
    x: 350,
    y: 300,
    radius: 25,
    speedX: 2,
    speedY: 2,
    color: "#9b59b6"
};

const player = {
    x: 600,
    y: 350,
    width: 50,
    height: 50,
    speed: 5,
    color: "#e67e22"
};

const mouse = {
    x: 0,
    y: 0
};

const keys = {};

const colors = [
    "#9b59b6",
    "#e74c3c",
    "#2ecc71",
    "#f1c40f",
    "#3498db"
];

let colorIndex = 0;

// --------------------------------------------------
// CANVAS
// --------------------------------------------------

function clearCanvas() {
    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );
}

// --------------------------------------------------
// DRAW
// --------------------------------------------------

function drawRectangle() {
    ctx.fillStyle = rectangle.color;

    ctx.fillRect(
        rectangle.x,
        rectangle.y,
        rectangle.width,
        rectangle.height
    );
}

function drawLine() {
    ctx.beginPath();

    ctx.moveTo(300, 80);
    ctx.lineTo(500, 180);

    ctx.strokeStyle = "#e74c3c";
    ctx.lineWidth = 5;

    ctx.stroke();
}

function drawCircle() {
    ctx.beginPath();

    ctx.arc(
        650,
        120,
        60,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = "#2ecc71";
    ctx.fill();
}

function drawTriangle() {
    ctx.beginPath();

    ctx.moveTo(150, 300);
    ctx.lineTo(80, 430);
    ctx.lineTo(220, 430);

    ctx.closePath();

    ctx.fillStyle = "#f39c12";
    ctx.fill();

    ctx.strokeStyle = "#8a5705";
    ctx.lineWidth = 3;
    ctx.stroke();
}

function drawMovingBall() {
    ctx.beginPath();

    ctx.arc(
        movingBall.x,
        movingBall.y,
        movingBall.radius,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = movingBall.color;
    ctx.fill();
}

function drawPlayer() {
    ctx.fillStyle = player.color;

    ctx.fillRect(
        player.x,
        player.y,
        player.width,
        player.height
    );
}

function drawMouseCoordinate() {
    ctx.fillStyle = "#222";
    ctx.font = "16px Arial";

    ctx.fillText(
        `Mouse: (${Math.round(mouse.x)}, ${Math.round(mouse.y)})`,
        20,
        30
    );
}

// --------------------------------------------------
// UPDATE
// --------------------------------------------------

function updateMovingBall() {
    movingBall.x += movingBall.speedX;
    movingBall.y += movingBall.speedY;

    if (
        movingBall.x + movingBall.radius >= canvas.width ||
        movingBall.x - movingBall.radius <= 0
    ) {
        movingBall.speedX *= -1;
    }

    if (
        movingBall.y + movingBall.radius >= canvas.height ||
        movingBall.y - movingBall.radius <= 0
    ) {
        movingBall.speedY *= -1;
    }
}

function updatePlayer() {
    if (keys["ArrowLeft"]) {
        player.x -= player.speed;
    }

    if (keys["ArrowRight"]) {
        player.x += player.speed;
    }

    if (keys["ArrowUp"]) {
        player.y -= player.speed;
    }

    if (keys["ArrowDown"]) {
        player.y += player.speed;
    }

    player.x = Math.max(
        0,
        Math.min(canvas.width - player.width, player.x)
    );

    player.y = Math.max(
        0,
        Math.min(canvas.height - player.height, player.y)
    );
}

// --------------------------------------------------
// INPUT
// --------------------------------------------------

canvas.addEventListener("mousemove", function(event) {
    const rect = canvas.getBoundingClientRect();

    mouse.x =
        (event.clientX - rect.left) *
        (canvas.width / rect.width);

    mouse.y =
        (event.clientY - rect.top) *
        (canvas.height / rect.height);
});

canvas.addEventListener("click", function() {
    colorIndex = (colorIndex + 1) % colors.length;
    movingBall.color = colors[colorIndex];
});

window.addEventListener("keydown", function(event) {
    const controlledKeys = [
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "ArrowDown"
    ];

    if (controlledKeys.includes(event.key)) {
        event.preventDefault();
    }

    // State-based:
    // simpan status tombol untuk translasi kontinu.
    keys[event.key] = true;

    // Event-based:
    // contoh aksi diskrit sekali tekan.
    if (
        event.key.toLowerCase() === "r" &&
        !event.repeat
    ) {
        player.x = 600;
        player.y = 350;
    }
});

window.addEventListener("keyup", function(event) {
    keys[event.key] = false;
});

// --------------------------------------------------
// ANIMATION LOOP
// --------------------------------------------------

function animate() {
    clearCanvas();

    updateMovingBall();
    updatePlayer();

    drawRectangle();
    drawLine();
    drawCircle();
    drawTriangle();
    drawMovingBall();
    drawPlayer();
    drawMouseCoordinate();

    requestAnimationFrame(animate);
}

animate();
```

---

# BAGIAN K — EKSPERIMEN TERARAH

## 28. Eksperimen 1 — Koordinat

Ubah:

```javascript
rectangle.x
rectangle.y
```

Catat bagaimana perubahan nilai memengaruhi posisi.

Coba:

```text
(0, 0)
(100, 100)
(400, 250)
(700, 400)
```

### Pertanyaan Analisis

1. Di mana origin canvas?
2. Ke arah mana sumbu X positif?
3. Ke arah mana sumbu Y positif?
4. Apakah sistem koordinat ini sama dengan diagram Cartesian yang biasa digunakan di matematika?

---

## 29. Eksperimen 2 — Primitive dan Vertex

Ubah vertex triangle:

```javascript
ctx.moveTo(...);
ctx.lineTo(...);
ctx.lineTo(...);
```

Buat:

- triangle tinggi;
- triangle lebar;
- triangle miring.

### Pertanyaan

1. Berapa titik minimum yang digunakan triangle?
2. Apa yang terjadi jika satu vertex dipindahkan?
3. Apakah perubahan data koordinat mengubah geometry?

---

## 30. Eksperimen 3 — Warna

Ubah:

```javascript
ctx.fillStyle
ctx.strokeStyle
```

Gunakan minimal tiga warna berbeda.

Contoh:

```javascript
ctx.fillStyle = "red";
```

atau:

```javascript
ctx.fillStyle = "#ff6600";
```

atau:

```javascript
ctx.fillStyle = "rgb(50, 180, 220)";
```

Hubungkan dengan konsep materi bahwa pixel dapat menyimpan komponen warna seperti:

```text
R, G, B
```

---

## 31. Eksperimen 4 — Kecepatan

Ubah:

```javascript
movingBall.speedX
movingBall.speedY
```

Coba:

```text
1
2
5
10
```

Amati perbedaan gerak.

### Diskusi

Pada implementasi dasar ini, perpindahan dinyatakan per update/frame. Karena materi Pertemuan 1 baru memperkenalkan frame dan FPS, modul tidak memerlukan sistem time-based animation yang lebih lanjut.

Hal utama yang harus dipahami:

```text
Frame N     → position A
Frame N + 1 → position B
Frame N + 2 → position C
```

Perubahan posisi antar-frame menghasilkan persepsi gerakan.

---

## 32. Eksperimen 5 — Event-Based vs State-Based Keyboard

Buat dua versi translasi sederhana.

### Versi A — Event-Based

```javascript
window.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        player.x += 5;
    }
});
```

Tahan ArrowRight selama beberapa detik.

Amati:

- apakah gerakan langsung kontinu sejak awal?
- apakah terasa ada delay sebelum keyboard repeat?
- apakah pola geraknya mengikuti repeat keyboard?

### Versi B — State-Based

```javascript
window.addEventListener("keydown", function(event) {
    keys[event.key] = true;
});

window.addEventListener("keyup", function(event) {
    keys[event.key] = false;
});

function updatePlayer() {
    if (keys["ArrowRight"]) {
        player.x += player.speed;
    }
}
```

Panggil `updatePlayer()` dari animation loop.

Amati:

- translasi mulai selama state aktif;
- gerakan mengikuti frame aplikasi;
- multi-key input lebih mudah.

### Pertanyaan Analisis

1. Pendekatan mana yang lebih cocok untuk translasi?
2. Mengapa keyboard repeat tidak ideal untuk movement?
3. Aksi apa yang lebih tepat menggunakan event-based?
4. Mengapa `keydown/keyup` masih digunakan pada state-based?
5. Apa perbedaan antara **event** dan **state** pada contoh ini?

---

# BAGIAN L — TUGAS PRAKTIKUM

## 33. Tugas Utama — Interactive Graphics Playground

Kembangkan program menjadi sebuah **Interactive Graphics Playground**.

### Syarat Wajib

Aplikasi harus memiliki:

1. canvas minimal `800 × 500`;
2. minimal **3 jenis primitive** berbeda;
3. minimal **4 warna** yang terlihat;
4. minimal **1 triangle** yang dibentuk dari tiga koordinat vertex;
5. minimal **1 objek bergerak**;
6. minimal **1 translasi keyboard menggunakan state-based input**;
7. tampilan koordinat mouse;
8. source code yang dipisahkan minimal menjadi `index.html` dan `app.js`;
9. kode diberi komentar pada bagian penting;
10. aplikasi dapat dijalankan langsung pada browser.

### Interaksi Pengguna

Pilih minimal satu:

- objek mengikuti mouse;
- warna berubah ketika diklik;
- objek digerakkan keyboard;
- interaksi lain yang masih sesuai tujuan praktikum.

Implementasi baseline pada modul sudah menyediakan click dan keyboard. Mahasiswa tetap diminta mengembangkan tampilan atau perilakunya, bukan hanya menyerahkan kode contoh tanpa modifikasi.

---

# BAGIAN M — CHALLENGE

## 34. Challenge Praktikum

Materi Pertemuan 1 meminta mahasiswa memilih minimal satu challenge. Pada modul, mahasiswa diminta mengimplementasikan **minimal satu** dari daftar berikut.

### Challenge A — Bouncing Object

Objek memantul ketika mencapai batas canvas.

Konsep:

```text
Position
+
Velocity
+
Boundary Check
```

### Challenge B — Follow Mouse

Buat sebuah circle mengikuti koordinat mouse:

```javascript
circle.x = mouse.x;
circle.y = mouse.y;
```

### Challenge C — Click to Change Color

Klik canvas untuk mengubah warna salah satu objek.

### Challenge D — Keyboard Movement

Gerakkan objek menggunakan arrow keys atau `W`, `A`, `S`, `D`.

### Challenge E — Mouse Coordinate

Tampilkan koordinat mouse secara real-time.

---

## 35. Challenge Tambahan Opsional

Untuk mahasiswa yang ingin mengeksplorasi lebih lanjut, pilih satu atau lebih:

### 34.1 Click to Create Circle

Setiap klik menambahkan circle baru pada posisi mouse.

Contoh struktur data:

```javascript
const circles = [];
```

Ketika klik:

```javascript
circles.push({
    x: mouse.x,
    y: mouse.y,
    radius: 15
});
```

Kemudian gambar semua circle:

```javascript
for (const circle of circles) {
    ctx.beginPath();
    ctx.arc(
        circle.x,
        circle.y,
        circle.radius,
        0,
        Math.PI * 2
    );
    ctx.fill();
}
```

### 34.2 Trail Mode

Tambahkan pilihan untuk tidak membersihkan canvas sehingga objek bergerak meninggalkan jejak.

Bandingkan:

```text
Clear setiap frame
vs.
Tidak clear setiap frame
```

### 34.3 Multiple Moving Objects

Buat beberapa objek dengan:

- posisi berbeda;
- warna berbeda;
- kecepatan berbeda.

Tujuannya adalah melihat bahwa setiap objek dapat direpresentasikan oleh data yang berbeda.

---

# BAGIAN N — PENGUJIAN

## 36. Checklist Pengujian

Sebelum dikumpulkan, pastikan:

- [ ] halaman dapat dibuka tanpa error;
- [ ] canvas terlihat;
- [ ] minimal tiga jenis primitive terlihat;
- [ ] triangle terlihat dengan benar;
- [ ] warna berbeda terlihat;
- [ ] objek bergerak;
- [ ] interaksi bekerja;
- [ ] koordinat mouse tampil;
- [ ] challenge yang dipilih bekerja;
- [ ] tidak ada error merah pada Console;
- [ ] objek utama tidak hilang permanen dari canvas;
- [ ] kode mudah dibaca dan memiliki komentar seperlunya.

---

## 37. Debugging Dasar

### Masalah: Canvas Kosong

Periksa:

```javascript
const canvas = document.getElementById("graphicsCanvas");
```

Pastikan `id` sama dengan HTML.

Periksa:

```javascript
const ctx = canvas.getContext("2d");
```

Buka Console untuk melihat error.

### Masalah: JavaScript Tidak Berjalan

Pastikan:

```html
<script src="app.js"></script>
```

mengarah ke file yang benar.

### Masalah: Shape Tidak Terlihat

Periksa:

- koordinat;
- ukuran;
- warna;
- apakah objek berada di luar canvas;
- apakah `clearCanvas()` dipanggil setelah objek digambar.

Urutan salah:

```javascript
drawCircle();
clearCanvas();
```

Circle langsung terhapus.

Urutan benar:

```javascript
clearCanvas();
drawCircle();
```

### Masalah: Path Menyambung dengan Shape Sebelumnya

Gunakan:

```javascript
ctx.beginPath();
```

sebelum membuat path baru.

### Masalah: Keyboard Tidak Merespons

Pastikan listener dipasang:

```javascript
window.addEventListener("keydown", ...);
window.addEventListener("keyup", ...);
```

dan nama tombol sesuai, misalnya:

```javascript
"ArrowLeft"
"ArrowRight"
"ArrowUp"
"ArrowDown"
```

---

# BAGIAN O — PERTANYAAN PEMAHAMAN

## 38. Pertanyaan Konsep

Jawab secara singkat berdasarkan implementasi yang dibuat.

1. Apa fungsi `<canvas>`?
2. Apa fungsi `getContext("2d")`?
3. Di mana titik `(0, 0)` pada canvas?
4. Apa yang direpresentasikan oleh `x` dan `y`?
5. Bagaimana tiga koordinat dapat membentuk triangle?
6. Apa perbedaan `fill()` dan `stroke()` dalam konteks program ini?
7. Mengapa canvas perlu dibersihkan pada setiap frame animasi?
8. Apa fungsi `requestAnimationFrame()`?
9. Bagaimana input keyboard dapat menyebabkan objek bergerak?
10. Apa perbedaan event-based dan state-based keyboard input?
11. Mengapa translasi kontinu lebih tepat menggunakan state-based?
12. Sebutkan dua contoh aksi yang lebih tepat menggunakan event-based.
13. Mengapa `keydown` dan `keyup` tetap diperlukan pada state-based input?
14. Dalam aplikasi ini, mana yang termasuk **data** dan mana yang termasuk proses **drawing**?
15. Apa hubungan animasi yang dibuat dengan konsep frame?
16. Apa hubungan praktikum ini dengan alur sederhana `Data → Proses Grafika → Gambar`?

---

# BAGIAN P — ANALISIS HASIL

## 39. Yang Harus Dipahami Setelah Praktikum

Mahasiswa tidak cukup hanya mendapatkan gambar yang bergerak. Konsep pentingnya adalah:

### 38.1 Gambar Berasal dari Data

Rectangle:

```text
Position
Size
Color
```

Circle:

```text
Center
Radius
Color
```

Triangle:

```text
Vertex 0
Vertex 1
Vertex 2
Color
```

Data tersebut diproses menjadi gambar.

### 38.2 Geometry Dibangun dari Koordinat

Triangle menunjukkan hubungan:

```text
Coordinate
 ↓
Vertex
 ↓
Primitive
```

### 38.3 Animasi Adalah Perubahan Antar-Frame

```text
Update Position
      ↓
Draw
      ↓
Frame
      ↓
Repeat
```

### 38.4 Interaksi Mengubah Data

```text
Mouse / Keyboard
       ↓
Application Data
       ↓
New Frame
```

---

# BAGIAN Q — HUBUNGAN DENGAN GRAPHICS PIPELINE

## 40. Dari Graphics Playground ke Konsep Pipeline

Materi Pertemuan 1 memperkenalkan alur:

```text
MODEL DATA
   ↓
VERTEX
   ↓
VERTEX PROCESSING
   ↓
TRIANGLE
   ↓
RASTERIZATION
   ↓
FRAGMENT
   ↓
FRAGMENT PROCESSING
   ↓
FRAMEBUFFER
   ↓
SCREEN
```

Canvas 2D menyembunyikan banyak detail proses tersebut. Mahasiswa cukup memberikan perintah tingkat tinggi seperti:

```javascript
ctx.fillRect(...);
ctx.arc(...);
ctx.fill();
```

Browser menangani proses rendering yang diperlukan untuk menghasilkan pixel pada canvas.

Praktikum ini **bukan implementasi graphics pipeline WebGL secara manual**. Tujuannya adalah membangun intuisi awal:

```text
Data
 ↓
Coordinate & Primitive
 ↓
Drawing / Rendering
 ↓
Pixels
 ↓
Image
```

Pada Pertemuan 2, abstraksi akan diturunkan lebih jauh melalui **WebGL Context, Normalized Device Coordinate, Vertex Buffer, Vertex Shader, Fragment Shader, Shader Program, Draw Call, dan Hello Triangle**.

---

# BAGIAN R — FORMAT PENGUMPULAN

## 41. Berkas yang Dikumpulkan

Kumpulkan satu folder project:

```text
NRP_Nama_P1_GraphicsPlayground/
│
├── index.html
├── app.js
└── screenshot.png
```

Jika menambahkan file lain, simpan di dalam folder yang sama.

### Screenshot

`screenshot.png` harus menunjukkan:

- canvas;
- primitive;
- objek bergerak pada salah satu posisi;
- tampilan koordinat mouse;
- hasil pengembangan/challenge.

---

## 42. Informasi pada Source Code

Tambahkan komentar pada bagian atas `app.js`:

```javascript
/*
Praktikum Grafika Komputer - Pertemuan 1
Graphics Playground

Nama :
NRP  :
Kelas:

Challenge:
- ...
*/
```

---

# BAGIAN S — KRITERIA KEBERHASILAN

## 43. Indikator Praktikum Selesai

Praktikum dinyatakan berhasil secara teknis apabila:

```text
Canvas tampil
   ↓
Primitive tampil
   ↓
Warna diterapkan
   ↓
Objek bergerak
   ↓
Input pengguna terbaca
   ↓
Tampilan berubah secara interaktif
```

Mahasiswa juga harus mampu menjelaskan:

- data posisi objek;
- sistem koordinat canvas;
- bagaimana triangle dibentuk;
- bagaimana frame diperbarui;
- bagaimana input mengubah data;
- bagaimana data akhirnya menjadi gambar.

---

# BAGIAN T — RINGKASAN

## 44. Ringkasan Praktikum

Pada praktikum ini mahasiswa telah membuat **Graphics Playground** dengan:

- HTML Canvas 2D;
- koordinat `(x, y)`;
- rectangle;
- line;
- circle;
- triangle;
- color;
- animation loop;
- `requestAnimationFrame()`;
- mouse interaction;
- event-based keyboard input untuk aksi diskrit;
- state-based keyboard input untuk translasi kontinu;
- multi-key movement;
- boundary checking.

Benang merah:

```text
DATA
 ↓
COORDINATE
 ↓
PRIMITIVE
 ↓
DRAWING
 ↓
FRAME
 ↓
PIXEL / IMAGE
```

dan untuk aplikasi interaktif:

```text
USER INPUT
    ↓
UPDATE DATA
    ↓
DRAW FRAME
    ↓
DISPLAY
    ↓
REPEAT
```

Pemilihan pola keyboard:

```text
Event-Based
→ aksi sekali tekan
→ reset, toggle, change color

State-Based
→ aksi selama tombol ditahan
→ translation, continuous rotation
```

Pada praktikum ini translasi object menggunakan:

```text
keydown / keyup
      ↓
keyboard state
      ↓
updatePlayer()
      ↓
translation setiap frame
```

Konsep ini menjadi fondasi awal sebelum masuk ke **Pertemuan 2 — WebGL Fundamental**.
