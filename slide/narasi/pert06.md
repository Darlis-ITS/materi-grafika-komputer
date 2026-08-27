# Narasi Grafika Komputer - Pertemuan 06

## Introduction to Three.js

Sumber: markdown/pert06-ringkas.md

---

## Slide 000 - Cover

### Narasi

Selamat datang pada pertemuan keenam mata kuliah **Grafika Komputer** dengan kode `EF234504`. Pada pertemuan ini, kita akan memasuki topik **Introduction to Three.js**, yaitu pengenalan terhadap pustaka JavaScript yang banyak digunakan untuk membangun adegan 3D di lingkungan web.

Three.js penting karena ia menyediakan lapisan abstraksi yang memudahkan proses membangun **scene**, **camera**, **geometry**, **material**, **mesh**, **light**, dan **renderer** tanpa harus menulis seluruh detail WebGL secara manual. Dengan kata lain, Three.js membantu kita memahami alur kerja rendering 3D secara lebih terstruktur, sambil tetap terhubung dengan konsep dasar grafika komputer seperti transformasi, kamera, pencahayaan, dan pipeline rendering.

Materi ini disampaikan oleh **Dr. Darlis Herumurti** dari **Departemen Teknik Informatika**. Pada pertemuan ini, kita akan bergerak dari konsep dasar menuju praktikum sederhana, yaitu membangun **Mini 3D Scene** menggunakan Three.js.

### Inti yang Harus Ditekankan

- Pertemuan ini adalah **Pertemuan 6** pada mata kuliah **Grafika Komputer** (`EF234504`).
- Topik utama adalah **Introduction to Three.js**, yaitu pengenalan pustaka Three.js untuk membangun adegan 3D di web.
- Three.js berperan sebagai lapisan di atas **WebGL** yang memudahkan pembuatan **scene**, **camera**, **mesh**, **material**, **light**, dan **renderer**.
- Mahasiswa perlu memahami bahwa Three.js bukan pengganti konsep grafika komputer, melainkan alat untuk menerapkan konsep tersebut secara praktis.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat daftar topik yang akan dibahas pada pertemuan ini, mulai dari posisi Three.js di atas WebGL hingga praktikum pembuatan mini 3D scene.

---

## Slide 001 - Topik Pembahasan

### Narasi

Pertemuan ini membawa kita dari konsep rendering ke implementasi praktis dengan **Three.js**. Three.js adalah library yang membantu kita membangun scene 3D di browser dengan lebih ringkas dibanding menulis **WebGL** langsung. Posisi Three.js penting karena ia berada di atas WebGL: WebGL menyediakan akses ke GPU dan pipeline rendering, sedangkan Three.js memberikan abstraksi seperti objek, material, kamera, dan renderer agar kita bisa fokus pada komposisi scene.

Secara struktur, aplikasi Three.js yang paling dasar biasanya dibangun dari tiga komponen inti:

- **Scene**: wadah untuk semua objek 3D yang akan ditampilkan.
- **Camera**: menentukan sudut pandang, posisi, dan cara scene diproyeksikan ke layar.
- **WebGLRenderer**: komponen yang menggambar scene dari perspektif kamera ke canvas.

Ketiga komponen ini bisa kita bayangkan sebagai alur rendering: scene menyediakan data objek, kamera menentukan transformasi pandangan, lalu renderer melakukan proses rasterisasi dan menampilkan hasil akhir.

Setelah scene, kamera, dan renderer tersedia, kita mulai membangun objek visual. **Geometry** mendefinisikan bentuk atau struktur titik-titik objek, **Material** mendefinisikan penampilannya, dan **Mesh** menggabungkan keduanya menjadi objek yang bisa dirender. Setelah objek terbentuk, kita bisa mengubahnya melalui **Transform object**, yaitu `position`, `rotation`, dan `scale`, sehingga objek dapat diposisikan, diputar, atau diubah ukurannya dalam ruang 3D.

Agar scene terasa lebih realistis dan hidup, kita akan menambahkan **Light** dan **Shadow**. Light memengaruhi material dan memberi kesan pencahayaan, sedangkan shadow membantu menunjukkan hubungan antarobjek dan kedalaman. Selanjutnya, **Animation Loop** digunakan untuk memperbarui transformasi dan merender ulang scene setiap frame, sehingga objek dapat bergerak atau berputar. **Responsive rendering** memastikan tampilan tetap benar ketika ukuran jendela atau canvas berubah.

Pada bagian praktikum, kita akan menggabungkan semua elemen tersebut menjadi **Mini 3D Scene dengan Three.js**. Tujuannya bukan hanya membuat objek muncul di layar, tetapi memahami bagaimana setiap komponen bekerja bersama dalam satu pipeline rendering sederhana.

### Inti yang Harus Ditekankan

- **Three.js** adalah lapisan abstraksi di atas **WebGL**, sehingga memudahkan pembuatan scene 3D tanpa meninggalkan konsep rendering GPU.
- **Scene**, **Camera**, dan **WebGLRenderer** adalah tiga komponen minimal yang harus dipahami sebelum membangun aplikasi Three.js.
- **Mesh** dibentuk dari **Geometry** dan **Material**, lalu dikendalikan melalui transformasi, pencahayaan, shadow, animation loop, dan responsive rendering.
- Praktikum **Mini 3D Scene dengan Three.js** adalah integrasi dari seluruh komponen dasar tersebut.

### Transisi ke Slide Berikutnya

Dengan peta topik ini, kita lanjut ke capaian pembelajaran untuk melihat kemampuan spesifik yang diharapkan setelah pertemuan ini.

---

## Slide 002 - Capaian Pembelajaran

### Narasi

Setelah pertemuan ini, mahasiswa diharapkan tidak hanya tahu nama API, tetapi juga bisa melihat alur kerja **Three.js** sebagai lapisan abstraksi di atas **WebGL**. Capaian pertama adalah menjelaskan hubungan keduanya: **WebGL** memberi akses ke GPU dan rendering pipeline, sedangkan **Three.js** menyederhanakan pembuatan objek, kamera, material, dan proses rendering melalui objek-objek yang lebih mudah digunakan.

Secara praktis, capaian pembelajaran ini bisa dikelompokkan menjadi beberapa kemampuan inti:

- membangun project **Three.js** sederhana dan menyiapkan komponen dasar: `Scene`, `Camera`, dan `WebGLRenderer`;
- membuat objek 3D dari `Geometry` bawaan, memilih `Material` dasar, lalu menggabungkannya menjadi `Mesh`;
- mengontrol transformasi objek melalui `position`, `rotation`, dan `scale` agar objek berada pada posisi, orientasi, dan ukuran yang diinginkan;
- menambahkan `Light`, mengaktifkan `Shadow`, serta membuat `Animation Loop` sehingga adegan tidak statis;
- membuat renderer yang responsif terhadap perubahan ukuran layar, lalu merangkai semuanya menjadi mini 3D scene sederhana.

Yang perlu dipahami sebelum lanjut adalah bahwa `Scene`, `Camera`, dan `WebGLRenderer` merupakan tiga komponen minimum yang saling terhubung: `Scene` berisi objek, `Camera` menentukan sudut pandang, dan `WebGLRenderer` mengubah adegan menjadi gambar di layar. `Mesh` sendiri adalah hasil penggabungan `Geometry` dan `Material`, sedangkan transformasi, pencahayaan, animasi, dan responsivitas adalah lapisan yang membuat scene terasa hidup dan siap ditampilkan di browser.

### Inti yang Harus Ditekankan

- **Three.js** adalah abstraksi di atas **WebGL**, sehingga mahasiswa perlu memahami bahwa di baliknya tetap ada proses rendering GPU.
- `Scene`, `Camera`, dan `WebGLRenderer` adalah komponen dasar minimum untuk menampilkan adegan 3D.
- `Mesh` terbentuk dari `Geometry` dan `Material`, sedangkan `position`, `rotation`, dan `scale` digunakan untuk mengatur transformasi objek.
- `Light`, `Shadow`, `Animation Loop`, dan responsive rendering membuat scene menjadi dinamis dan siap digunakan di browser.
- Mini 3D scene sederhana adalah hasil integrasi dari semua komponen tersebut.

### Transisi ke Slide Berikutnya

Dengan capaian ini sebagai acuan, kita lanjut ke slide berikutnya untuk melihat bagaimana **Three.js** berdiri di atas **WebGL** dan mengapa abstraksi itu memudahkan pembuatan 3D application.

---

## Slide 003 - Dari WebGL ke Three.js

### Narasi

Pada Pertemuan 2 sampai 5, kita sudah bekerja langsung dengan konsep-konsep yang menjadi fondasi rendering: `Buffer`, `Shader`, `Matrix`, `Camera`, `Texture`, `Lighting`, dan `Draw Call`. Artinya, kita sudah melihat bagaimana data geometri, transformasi, tampilan material, cahaya, dan perintah gambar sampai ke layar.

Nah, `WebGL` adalah API yang memberi akses ke lapisan tersebut. Ia sangat kuat karena memberi kontrol detail, tetapi juga menuntut kita untuk menyusun banyak bagian secara manual. Di sinilah `Three.js` masuk sebagai abstraksi yang lebih tinggi.

Kita bisa membacanya sebagai tiga tingkat:

```text
WebGL
  ↓
Three.js
  ↓
3D Application
```

Alurnya dari atas ke bawah. `WebGL` berada di lapisan paling bawah karena berinteraksi langsung dengan kemampuan rendering GPU. `Three.js` berada di atasnya sebagai lapisan abstraksi yang memudahkan kita membangun objek 3D, mengatur kamera, material, cahaya, dan animasi. Sementara `3D Application` adalah hasil akhir yang kita bangun menggunakan `Three.js`.

Penting untuk tidak memposisikan `Three.js` sebagai pengganti pemahaman grafika komputer. Justru sebaliknya: konsep seperti `Matrix`, `Camera`, `Lighting`, dan `Draw Call` tetap menjadi dasar. `Three.js` membantu kita membangun aplikasi 3D lebih cepat, tetapi fondasi tersebut tetap menentukan bagaimana scene dirender.

Sebelum lanjut, kita perlu memahami satu hal: abstraksi bukan berarti kita tidak perlu mengerti apa yang terjadi di bawahnya. Kita hanya berpindah dari menulis banyak detail rendering secara langsung, ke menggunakan API yang lebih ramah untuk membangun scene.

### Inti yang Harus Ditekankan

- `WebGL` adalah lapisan rendah yang memberi kontrol detail terhadap rendering.
- `Three.js` adalah abstraksi lebih tinggi di atas `WebGL` untuk membangun aplikasi 3D.
- Konsep dari Pertemuan 2–5 seperti `Buffer`, `Shader`, `Matrix`, `Camera`, `Texture`, `Lighting`, dan `Draw Call` tetap menjadi fondasi.
- Diagram menunjukkan hierarki: `WebGL` → `Three.js` → `3D Application`.
- `Three.js` menyederhanakan proses, tetapi tidak menghapus kebutuhan memahami grafika komputer.

### Transisi ke Slide Berikutnya

Setelah memahami posisi `Three.js` di atas `WebGL`, kita akan melihat mengapa abstraksi ini penting dan bagaimana ia membantu kita membangun aplikasi 3D dengan lebih cepat.

---

## Slide 004 - Mengapa Three.js?

### Narasi

Setelah kita melihat bahwa **WebGL** memberi kontrol sangat detail terhadap proses rendering, ada satu konsekuensi penting: semakin dekat kita dengan GPU, semakin banyak kode yang harus ditulis. Mahasiswa perlu memahami bahwa kontrol detail itu bukan kelemahan, tetapi membutuhkan pemahaman `buffer`, `shader`, `matrix`, `camera`, `texture`, `lighting`, dan `draw call`.

Three.js hadir untuk menyederhanakan beban implementasi tersebut. Alih-alih menulis seluruh pipeline secara manual, kita dapat menggunakan abstraksi yang lebih tinggi. Dalam praktik, hal ini berarti objek 3D, material, kamera, transformasi, pencahayaan, rendering, dan animasi dapat dibangun dengan struktur yang lebih rapi dan lebih cepat.

Secara konseptual, Three.js tidak menghapus fondasi grafika komputer. Ia hanya memindahkan sebagian detail teknis ke lapisan library. Jadi ketika kita membuat scene, mesh, material, atau light, di balik layar masih terjadi proses yang sama: transformasi koordinat, rasterisasi, shading, dan kompositing menuju frame buffer.

Penting untuk menekankan bahwa Three.js berguna karena ia membantu mahasiswa fokus pada **aplikasi 3D**, bukan hanya pada cara memanggil API rendering. Dengan abstraksi ini, kita bisa lebih cepat membangun prototipe, memahami hubungan antar komponen, dan kemudian kembali ke detail WebGL bila diperlukan.

Karena itu, alasan utama memilih Three.js bukan sekadar kemudahan, tetapi keseimbangan: cukup tinggi untuk mempercepat pengembangan, tetapi tetap terhubung dengan konsep grafika yang sudah kita pelajari.

### Inti yang Harus Ditekankan

- **WebGL** memberi kontrol detail, tetapi membutuhkan banyak kode dan pemahaman pipeline.
- **Three.js** menyederhanakan `geometry`, `material`, `camera`, `transform`, `light`, `rendering`, dan `animation`.
- Three.js tidak menggantikan konsep grafika komputer, melainkan membungkusnya dalam abstraksi yang lebih praktis.
- Tujuan utamanya adalah membangun aplikasi 3D lebih cepat tanpa kehilangan fondasi yang sudah dipelajari.

### Transisi ke Slide Berikutnya

Setelah memahami alasan mengapa Three.js berguna, langkah berikutnya adalah mendefinisikan secara lebih jelas apa itu Three.js dan bagaimana posisinya di antara aplikasi JavaScript, WebGL, dan GPU.

---

## Slide 005 - Apa Itu Three.js?

### Narasi

**`Three.js`** adalah library JavaScript yang digunakan untuk membangun grafika 3D di browser. Artinya, kita tidak perlu menulis seluruh perintah rendering dari bawah secara manual, tetapi tetap memanfaatkan kemampuan GPU melalui **`WebGL`**.

Posisi **`Three.js`** dapat dilihat dari diagram berikut:

```text
JavaScript Application
       ↓
     Three.js
       ↓
      WebGL
       ↓
       GPU
```

Alur ini penting karena menunjukkan bahwa **`Three.js`** berada di antara aplikasi dan **`WebGL`**. Secara sederhana:

1. **JavaScript Application** adalah kode aplikasi yang kita buat.
2. **`Three.js`** menyediakan abstraksi untuk objek 3D, kamera, material, transformasi, dan rendering.
3. **`WebGL`** menerjemahkan perintah tersebut menjadi instruksi yang dapat dipahami GPU.
4. **`GPU`** melakukan proses rendering grafis secara nyata.

Dengan kata lain, **`Three.js`** menyederhanakan implementasi **graphics pipeline** pada aplikasi web 3D. Kita tetap bekerja dengan konsep-konsep grafika komputer seperti geometri, kamera, material, transformasi, dan lighting, tetapi tidak perlu mengurus seluruh detail low-level secara langsung.

Hal yang perlu dipahami sebelum lanjut adalah: **`Three.js`** memang membuat pengembangan lebih cepat, tetapi ia tidak menghilangkan kebutuhan untuk memahami konsep grafika di baliknya.

### Inti yang Harus Ditekankan

- **`Three.js`** adalah library JavaScript high-level untuk grafika 3D di browser.
- **`Three.js`** berada di atas **`WebGL`**, sehingga menyederhanakan komunikasi dengan **`GPU`**.
- Diagram menunjukkan alur abstraksi: aplikasi → **`Three.js`** → **`WebGL`** → **`GPU`**.
- Meskipun lebih mudah digunakan, konsep dasar grafika komputer tetap menjadi fondasi penting.

### Transisi ke Slide Berikutnya

Setelah memahami posisi **`Three.js`** dalam alur rendering, selanjutnya kita akan membandingkan langsung **`WebGL`** dan **`Three.js`** untuk melihat perbedaan tingkat abstraksi yang mereka tawarkan.

---

## Slide 006 - WebGL vs Three.js

### Narasi

Perbandingan pada tabel ini membantu kita melihat posisi **WebGL** dan **Three.js** dalam membangun aplikasi grafika 3D di browser. **WebGL** adalah API low-level yang dekat dengan GPU, sehingga developer memiliki kontrol besar terhadap proses rendering. **Three.js** adalah library high-level yang membungkus API tersebut dengan objek dan kelas yang lebih mudah digunakan.

Di sisi **WebGL**, banyak hal harus dikelola secara eksplisit: `buffer` untuk data vertex, `shader` untuk perhitungan warna dan transformasi, `matrix` untuk transformasi objek dan kamera, `camera` untuk parameter pandangan, `draw call` untuk meminta GPU menggambar geometri, serta `lighting` untuk simulasi cahaya. Di sisi **Three.js**, tanggung jawab tersebut dibungkus menjadi abstraksi seperti `Geometry`, `Material`, `Object transform`, `Camera class`, `Renderer`, dan `Light object`.

Cara membaca tabelnya adalah sebagai pemetaan tanggung jawab, bukan sebagai daftar fitur yang harus dihafal satu per satu. Baris kiri menunjukkan apa yang harus kita atur secara manual ketika bekerja langsung dengan **WebGL**. Baris kanan menunjukkan bagaimana **Three.js** menyembunyikan sebagian detail tersebut di balik antarmuka yang lebih tinggi level.

Poin penting yang perlu dipahami adalah **Three.js tidak menghapus WebGL**. Ia tetap menggunakan WebGL di baliknya. Artinya, konsep seperti vertex data, buffer, shader, matrix, draw call, dan lighting tetap ada; hanya saja pengelolaannya disederhanakan oleh library.

Dari sisi rendering pipeline, abstraksi **Three.js** membantu kita membangun aplikasi lebih cepat: geometri menjadi sumber data vertex, material menjadi representasi shader dan parameter visual, transformasi objek menjadi matriks, kamera menjadi parameter view dan projection, renderer menjadi pengatur draw call, dan light object menjadi sumber cahaya. Namun, ketika kita ingin mengoptimasi performa atau memahami perilaku GPU, pengetahuan tentang lapisan **WebGL** tetap sangat berguna.

Sebelum lanjut, mahasiswa perlu menangkap bahwa memilih **WebGL** atau **Three.js** bergantung pada kebutuhan: kontrol rendah dan fleksibilitas tinggi versus produktivitas dan kemudahan pengembangan. Untuk kebanyakan aplikasi web 3D, **Three.js** adalah titik awal yang praktis, tetapi pemahaman dasarnya tetap harus kembali ke konsep grafika komputer.

### Inti yang Harus Ditekankan

- **WebGL** adalah API low-level yang memberi kontrol langsung terhadap buffer, shader, matrix, camera, draw call, dan lighting.
- **Three.js** adalah library high-level yang menyederhanakan hal tersebut melalui abstraksi seperti `Geometry`, `Material`, `Object transform`, `Camera class`, `Renderer`, dan `Light object`.
- **Three.js** tidak menggantikan WebGL; ia tetap menggunakan WebGL di baliknya, sehingga konsep rendering pipeline tetap relevan.
- Tabel ini sebaiknya dibaca sebagai pemetaan tanggung jawab: manual di WebGL versus abstraksi di Three.js.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan melihat bahwa meskipun **Three.js** menyederhanakan penulisan kode, di balik objek seperti mesh dan material tetap ada elemen WebGL seperti vertex data, buffer, shader, matrix, dan draw call.

---

## Slide 007 - Fondasi WebGL Tetap Digunakan

### Narasi

Ketika kita menulis:

```javascript
new THREE.Mesh(
  geometry,
  material
);
```

yang terlihat di permukaan hanyalah satu objek `THREE.Mesh`. Namun, di balik objek tersebut, proses rendering tidak berhenti pada pembuatan objek JavaScript. Three.js tetap harus menyiapkan data yang bisa dipahami oleh GPU melalui WebGL.

Secara konseptual, `geometry` menyimpan informasi bentuk objek, misalnya posisi vertex, normal, atau koordinat texture. Data ini kemudian dikirim ke GPU dalam bentuk **buffer**, sehingga GPU dapat memprosesnya dengan cepat. Tanpa buffer, vertex tidak bisa dibaca oleh pipeline rendering.

Selanjutnya, `material` menentukan bagaimana objek tersebut tampak. Dalam level rendah, material berkaitan dengan **shader**, yaitu program yang dijalankan GPU untuk menghitung posisi vertex dan warna akhir tiap pixel. Meskipun Three.js menyediakan material siap pakai, pada dasarnya ia tetap menerjemahkan properti material menjadi shader atau parameter shader.

Selain data dan shader, objek 3D juga memerlukan **matrix** transformasi. Matrix digunakan untuk memindahkan, memutar, dan menskalakan objek, serta menghubungkan koordinat objek dengan koordinat kamera dan layar. Tanpa transformasi yang benar, objek mungkin tidak berada di posisi yang diharapkan atau tidak terlihat oleh kamera.

Terakhir, ketika objek benar-benar digambar, terjadi **draw call**, yaitu perintah untuk GPU agar memproses geometri dan material tersebut. Draw call adalah bagian penting dari pipeline rendering karena menentukan berapa kali GPU diminta menggambar sesuatu. Semakin banyak draw call, semakin besar potensi beban rendering.

Poin pentingnya adalah Three.js tidak menghapus konsep WebGL. Ia hanya menyederhanakan cara kita menulis kode. Mahasiswa tetap perlu memahami vertex data, buffer, shader, matrix, dan draw call agar bisa membaca perilaku Three.js, memperbaiki masalah rendering, dan mengembangkan aplikasi grafika yang lebih efisien.

### Inti yang Harus Ditekankan

- `new THREE.Mesh(geometry, material)` adalah abstraksi tinggi, bukan pengganti seluruh proses rendering.
- Di balik `geometry` tetap ada **vertex data** dan **buffer** yang dikirim ke GPU.
- Di balik `material` tetap ada **shader** yang menentukan tampilan objek.
- **Matrix** transformasi menghubungkan objek, kamera, dan layar.
- **Draw call** adalah perintah rendering yang tetap terjadi meskipun kode terlihat sederhana.

### Transisi ke Slide Berikutnya

Setelah kita memahami bahwa fondasi WebGL tetap bekerja di balik Three.js, langkah berikutnya adalah melihat bagaimana komponen-komponen tersebut tersusun dalam arsitektur minimum Three.js.

---

## Slide 008 - Arsitektur Minimum Three.js

### Narasi

Dalam Three.js, arsitektur minimum dapat dibaca sebagai dua bagian besar: **struktur adegan** yang menjelaskan apa yang ada di dunia virtual, dan **alur rendering** yang mengubah struktur tersebut menjadi gambar di layar.

Bagian atas diagram menunjukkan **`Scene`** sebagai wadah utama. Di dalamnya terdapat **`Camera`**, **`Mesh`**, dan **`Light`**. `Scene` bukan sekadar daftar objek; ia adalah ruang tempat posisi, transformasi, dan hubungan antarobjek didefinisikan. `Camera` menentukan dari mana adegan dilihat, sehingga tanpa kamera, renderer tidak tahu sudut pandang apa yang harus digunakan. `Mesh` adalah objek visual yang biasanya tersusun dari **`Geometry`** dan **`Material`**. `Geometry` menyediakan bentuk atau data titik, sedangkan `Material` menentukan bagaimana permukaan objek tampak, misalnya warna, tekstur, atau respons terhadap cahaya. `Light` berperan ketika material membutuhkan pencahayaan agar terlihat lebih realistis atau memiliki shading.

```text
Scene
├── Camera
├── Mesh
│   ├── Geometry
│   └── Material
└── Light

       ↓
WebGLRenderer
       ↓
Canvas
```

Bagian bawah diagram menjelaskan alur keluaran. `Scene` beserta `Camera` diberikan kepada **`WebGLRenderer`**. Renderer inilah yang menerjemahkan struktur adegan menjadi perintah rendering, misalnya menyiapkan buffer, matriks, shader, dan draw call yang dibutuhkan oleh GPU. Hasil akhirnya adalah gambar yang ditampilkan pada **`Canvas`**. Dengan kata lain, `Scene` berisi "apa yang ada", `Camera` menentukan "dari mana dilihat", `Renderer` melakukan "proses menggambar", dan `Canvas` adalah "tempat gambar muncul".

Secara pipeline, alur ini dapat dipahami sebagai:

1. `Scene` menyimpan objek-objek 3D.
2. `Camera` menyediakan posisi dan orientasi pengamat.
3. `Mesh` menggabungkan `Geometry` dan `Material` menjadi objek yang dapat dirender.
4. `Light` memengaruhi tampilan material yang responsif terhadap cahaya.
5. `WebGLRenderer` memproses adegan dari sudut kamera.
6. `Canvas` menampilkan hasil akhir.

Poin penting yang perlu dipahami mahasiswa adalah bahwa Three.js tidak menghapus kebutuhan memahami grafika komputer. Ia hanya menyediakan struktur yang rapi agar kita tidak harus menulis seluruh interaksi WebGL secara manual. Konsep seperti koordinat, transformasi, rasterisasi, shader, dan draw call tetap ada di balik `WebGLRenderer`.

### Inti yang Harus Ditekankan

- **`Scene`** adalah wadah utama objek 3D dalam Three.js.
- **`Camera`** menentukan sudut pandang rendering.
- **`Mesh`** terdiri dari **`Geometry`** untuk bentuk dan **`Material`** untuk tampilan permukaan.
- **`Light`** diperlukan ketika material harus bereaksi terhadap cahaya.
- **`WebGLRenderer`** mengubah struktur adegan menjadi gambar di **`Canvas`**.

### Transisi ke Slide Berikutnya

Setelah memahami arsitektur minimum ini, langkah berikutnya adalah mengidentifikasi komponen mana saja yang benar-benar dibutuhkan agar satu objek dapat tampil, serta kapan `Light` menjadi tambahan yang diperlukan.

---

## Slide 009 - Komponen Minimum

### Narasi

Setelah melihat arsitektur minimum, kita perlu memahami syarat paling dasar agar sebuah objek benar-benar muncul di layar. Dalam Three.js, sebuah objek tidak cukup hanya dibuat sebagai **`Mesh`**; ia harus berada dalam konteks yang bisa dilihat dan digambar.

Syarat minimumnya dapat dibaca sebagai himpunan komponen berikut:

```text
Scene
+
Camera
+
Renderer
+
Geometry
+
Material
+
Mesh
```

Masing-masing komponen punya peran berbeda. **`Scene`** adalah ruang tempat objek, kamera, dan cahaya diletakkan. **`Camera`** menentukan dari mana dan bagaimana dunia dilihat, termasuk posisi, arah, dan bidang pandang. **`Renderer`** bertugas menggambar scene ke layar, biasanya melalui **`WebGLRenderer`** yang terhubung ke elemen `canvas`.

**`Geometry`** menyediakan bentuk dasar objek, misalnya titik, garis, atau permukaan. **`Material`** menentukan tampilan permukaan, seperti warna, tekstur, atau cara objek berinteraksi dengan cahaya. **`Mesh`** adalah gabungan **`Geometry`** dan **`Material`** yang menjadi objek visual yang bisa dimasukkan ke **`Scene`**.

Dengan kata lain, **`Mesh`** adalah objeknya, tetapi **`Scene`**, **`Camera`**, dan **`Renderer`** adalah lingkungan yang membuatnya dapat dirender. Jika salah satu dari komponen ini tidak ada, objek mungkin ada secara data tetapi tidak akan tampil.

Jika material yang kita gunakan merespons cahaya, maka kita perlu menambahkan satu komponen lagi:

```text
+ Light
```

**`Light`** bukan syarat mutlak untuk setiap objek, tetapi penting ketika kita ingin permukaan terlihat lebih realistis, memiliki terang dan gelap, atau membantu menunjukkan bentuk objek.

Sebelum lanjut, hal yang perlu dipahami adalah bahwa komponen minimum ini bukan sekadar daftar API, melainkan bagian dari alur rendering: objek didefinisikan, diletakkan dalam scene, dilihat oleh kamera, lalu digambar oleh renderer menjadi piksel di layar.

### Inti yang Harus Ditekankan

- Objek terlihat hanya jika **`Scene`**, **`Camera`**, **`Renderer`**, **`Geometry`**, **`Material`**, dan **`Mesh`** tersedia.
- **`Mesh`** menggabungkan **`Geometry`** dan **`Material`**, tetapi tetap butuh **`Scene`**, **`Camera`**, dan **`Renderer`** agar bisa dirender.
- **`Light`** hanya diperlukan jika material merespons cahaya.
- Komponen minimum ini menjadi dasar sebelum masuk ke setup project dan praktik Three.js.

### Transisi ke Slide Berikutnya

Setelah kita tahu komponen minimum yang dibutuhkan, langkah berikutnya adalah menyiapkan lingkungan kerja yang rapi. Pada slide berikutnya, kita akan melihat setup project modern dengan **`Node.js`**, **`Vite`**, dan **`Three.js`**.

---

## Slide 010 - Setup Project

### Narasi

Sebelum kita masuk ke kode rendering, ada satu hal yang sering menentukan kenyamanan kerja: bagaimana project grafika komputer kita disusun. Untuk project modern, kombinasi yang disarankan adalah:

```text
Node.js
+
Vite
+
Three.js
```

`Node.js` berperan sebagai lingkungan JavaScript di luar browser, sehingga kita bisa menjalankan tooling, instalasi dependensi, dan proses build. `Vite` adalah development server yang membantu project berjalan cepat, terutama saat kita mengubah kode secara berulang. `Three.js` adalah library yang menyediakan abstraksi untuk membangun scene, kamera, objek, material, dan rendering.

Penting untuk melihat setup ini bukan sebagai pengganti pemahaman grafika komputer, melainkan sebagai wadah agar eksperimen visual bisa dilakukan lebih rapi. Dalam grafika komputer, kita sering mengubah parameter kamera, transformasi, material, atau shader secara cepat. Jika project masih berupa satu file HTML dengan banyak script tag, perubahan kecil bisa membuat alur kerja menjadi tidak efisien.

Keuntungan utama dari kombinasi ini adalah:

- **module import lebih rapi**, karena kode dapat dipecah menjadi file terpisah dan diimpor secara eksplisit;
- **development server** yang memudahkan preview hasil rendering di browser;
- **hot reload**, sehingga perubahan pada kode dapat langsung terlihat tanpa reload manual yang berulang;
- **struktur project mudah dikelola**, terutama ketika nanti kita menambah scene, asset, material, atau utilitas transformasi.

Dari sisi pembelajaran, setup ini membantu mahasiswa fokus pada konsep visual dan pipeline rendering, bukan pada masalah teknis pengelolaan file. Kita tetap harus memahami bahwa `Three.js` hanya menyederhanakan akses ke GPU dan WebGL; di baliknya, proses seperti transformasi, rasterisasi, dan shading tetap berjalan sesuai prinsip grafika komputer.

Sebelum lanjut, yang perlu dipahami adalah bahwa setup project adalah tahap persiapan. Kita belum membahas cara menginstal dependensi atau cara mengimpor modul `Three.js` secara detail; itu akan menjadi langkah berikutnya.

### Inti yang Harus Ditekankan

- Project modern disarankan menggunakan **Node.js**, **Vite**, dan **Three.js**.
- Setup ini membuat pengembangan lebih rapi, cepat, dan mudah diuji.
- `Three.js` tetap berada di atas konsep grafika komputer seperti scene, kamera, mesh, material, dan rendering.

### Transisi ke Slide Berikutnya

Setelah struktur project dipahami, langkah berikutnya adalah menginstal `Three.js` dan menyiapkan modulnya agar bisa digunakan dalam kode.

---

## Slide 011 - Instalasi Three.js

### Narasi

Setelah project dibuat dengan `Node.js` dan `Vite`, langkah berikutnya adalah membuat **Three.js** benar-benar tersedia di dalam project. Tanpa instalasi, sistem tidak akan menemukan modul `three` saat kita menulis `import`.

Perintah yang kita gunakan adalah:

```bash
npm install three
```

Perintah ini meminta `npm` untuk mengunduh paket `three`, menyimpannya ke folder `node_modules`, dan mencatat dependensi tersebut di `package.json`. Dengan begitu, project kita tahu bahwa Three.js adalah bagian dari aplikasi yang sedang dibangun.

Setelah instalasi selesai, kita dapat memuat Three.js ke dalam kode JavaScript menggunakan:

```javascript
import * as THREE
  from "three";
```

Baris ini menggunakan **ES module import**. `import * as THREE` berarti seluruh isi modul `three` dimuat ke dalam satu namespace bernama `THREE`. Selanjutnya, kelas dan fungsi Three.js dapat diakses melalui prefix `THREE`.

Penting untuk dipahami bahwa instalasi dan import ini adalah **prasyarat teknis**, bukan bagian dari rendering pipeline secara langsung. Namun, tanpa langkah ini, kita belum bisa membangun objek 3D, kamera, material, lighting, atau renderer yang nanti akan diproses oleh GPU.

Dengan kata lain, `npm install three` menyiapkan **library** di sisi project, sedangkan `import * as THREE from "three"` menyiapkan **ruang kerja kode** agar kita bisa memanggil API Three.js. Setelah dua langkah ini selesai, Three.js siap digunakan untuk membangun scene sederhana.

### Inti yang Harus Ditekankan

- `npm install three` memasang paket Three.js ke project dan menyimpan dependensi di `package.json`.
- `import * as THREE from "three";` memuat modul Three.js ke dalam namespace `THREE`.
- Setelah instalasi dan import, API Three.js dapat digunakan dalam kode JavaScript.
- Langkah ini adalah fondasi sebelum membangun scene, kamera, objek 3D, material, lighting, dan renderer.

### Transisi ke Slide Berikutnya

Setelah Three.js terpasang dan dapat diimpor, langkah berikutnya adalah melihat bagaimana file project disusun agar alur program tetap rapi dan mudah diikuti.

---

## Slide 012 - Struktur File Sederhana

### Narasi

Sebelum kita mulai menulis kode Three.js, penting untuk melihat bagaimana file project tersusun. Struktur sederhana ini membantu kita memisahkan peran masing-masing file: **`index.html`** menjadi halaman yang dibuka di browser, **`src/main.js`** menjadi tempat logika utama, **`package.json`** merekam dependensi dan konfigurasi project, sedangkan **`node_modules/`** menyimpan paket yang sudah diinstal, termasuk **`three`**.

```text
project/
├── index.html
├── src/
│   └── main.js
├── package.json
└── node_modules/
```

Pada tahap awal, kita sengaja memusatkan kode di satu file **`main.js`**. Keputusan ini bukan berarti project Three.js selalu harus sederhana, tetapi untuk pembelajaran, satu file utama membuat alur program lebih mudah diikuti. Mahasiswa dapat melihat urutan kerja secara jelas: import modul, menyiapkan objek, lalu menjalankan proses rendering.

Dengan struktur ini, **`index.html`** cukup memanggil **`main.js`** sebagai **entry point**. File **`package.json`** penting karena mencatat dependensi seperti **`three`** yang tadi diinstal melalui **`npm install three`**. Sementara **`node_modules/`** tidak perlu kita ubah secara manual; folder ini berisi hasil instalasi paket yang dibutuhkan project.

Dari sisi grafika komputer, struktur file ini adalah fondasi sebelum kita membangun **pipeline rendering**. Di dalam **`main.js`**, nanti akan muncul komponen utama seperti **scene**, **kamera**, **renderer**, dan **loop animasi**. Namun pada tahap ini, yang perlu dipahami adalah bahwa organisasi file yang rapi membuat kita bisa fokus pada konsep visual, bukan tersesat oleh banyak file.

### Inti yang Harus Ditekankan

- **`index.html`** adalah halaman awal yang dimuat browser.
- **`src/main.js`** adalah file utama untuk logika Three.js pada tahap awal.
- **`package.json`** dan **`node_modules/`** membantu mengelola dependensi project, termasuk **`three`**.
- Struktur sederhana membantu mahasiswa memahami alur program sebelum masuk ke komponen rendering.

### Transisi ke Slide Berikutnya

Setelah struktur file siap, langkah berikutnya adalah membuat objek pertama dalam dunia 3D, yaitu **`Scene`**, yang akan menjadi container utama untuk objek-objek visual.

---

## Slide 013 - Scene

### Narasi

Dalam Three.js, **Scene** adalah tempat utama di mana objek-objek 3D disimpan. Kita dapat membayangkannya sebagai ruang kerja virtual: sebelum sebuah objek bisa ditampilkan, objek itu harus berada di dalam scene.

```javascript
const scene =
  new THREE.Scene();
```

Baris kode ini membuat instance scene kosong. Variabel `scene` akan menjadi referensi ke container tersebut. Pada tahap ini, scene belum berisi apa pun, tetapi struktur dasarnya sudah siap untuk menerima objek.

Scene dapat berisi berbagai jenis objek, antara lain:

- **Mesh**, yaitu objek geometri yang bisa dirender, misalnya kubus atau bola.
- **Light**, yang memengaruhi pencahayaan objek di dalam scene.
- **Camera helper**, yaitu bantuan visual untuk melihat posisi atau arah kamera.
- **Group**, yang digunakan untuk mengelompokkan beberapa objek agar lebih mudah dikelola.
- **Object3D** lain yang menjadi dasar transformasi dan hierarki objek.

Penting untuk memahami bahwa scene bukan sekadar daftar objek, tetapi struktur yang menghubungkan objek-objek tersebut ke proses rendering. Dalam alur rendering, renderer akan membaca scene, kemudian menggunakan kamera untuk menentukan objek mana yang terlihat, lalu memproses objek-objek tersebut menjadi gambar di layar.

Dengan kata lain, scene adalah titik awal dari dunia 3D yang kita bangun. Jika objek tidak ditambahkan ke scene, objek tersebut tidak akan menjadi bagian dari dunia yang dirender.

### Inti yang Harus Ditekankan

- **Scene** adalah container utama untuk objek 3D dalam Three.js.
- Objek seperti `Mesh`, `Light`, `Group`, dan `Object3D` harus berada di dalam scene agar dapat diproses.
- Scene menjadi penghubung antara objek 3D, kamera, dan renderer.
- Kode `new THREE.Scene()` membuat scene kosong yang siap diisi objek.

### Transisi ke Slide Berikutnya

Setelah scene dibuat, langkah berikutnya adalah mengisi scene tersebut dengan objek-objek yang membentuk dunia virtual. Pada slide berikutnya, kita akan melihat bagaimana scene dapat menyimpan `Ground`, `Cube`, `Sphere`, `Light`, dan `Camera` sebagai bagian dari dunia yang akan diproses oleh renderer.

---

## Slide 014 - Scene sebagai Dunia Virtual

### Narasi

Kita bisa membayangkan `Scene` bukan hanya sebuah variabel, tetapi seperti **dunia virtual** tempat semua elemen visual berada. Pada diagram, `Scene` berada di puncak hierarki, lalu memiliki anak seperti `Ground`, `Cube`, `Sphere`, `Light`, dan `Camera`. Struktur ini penting karena Three.js menggunakan **scene graph**: setiap objek 3D terhubung ke scene, sehingga sistem tahu objek mana yang menjadi bagian dari dunia yang akan ditampilkan.

```text
Scene
├── Ground
├── Cube
├── Sphere
├── Light
└── Camera
```

Diagram ini dibaca dari atas ke bawah. `Scene` adalah **root** atau induk utama, sedangkan `Ground`, `Cube`, `Sphere`, `Light`, dan `Camera` adalah objek yang menjadi bagian dari scene. `Ground`, `Cube`, dan `Sphere` biasanya merupakan objek geometri atau mesh. `Light` berperan memberi penerangan pada objek, sedangkan `Camera` menentukan sudut pandang pengamat. Meskipun kamera bukan objek yang dirender sebagai bentuk, ia sering dimasukkan ke dalam scene untuk keperluan transformasi atau helper.

Kalimat **“Scene menyimpan object yang akan diproses oleh renderer”** adalah inti dari slide ini. Artinya, renderer tidak otomatis tahu apa yang harus digambar kecuali objek tersebut berada di dalam `Scene`. Dalam alur rendering, renderer akan menelusuri scene graph, mengambil objek yang relevan, lalu memprosesnya melalui transformasi, rasterisasi, dan akhirnya menampilkan hasil ke layar.

Hal yang perlu dipahami mahasiswa sebelum lanjut adalah: **objek yang dibuat tetapi tidak ditambahkan ke scene tidak akan muncul**. Sebaliknya, jika objek sudah menjadi bagian dari scene, kita bisa mengatur posisinya, memberinya material, menambah cahaya, dan mengatur kamera untuk membentuk adegan yang lebih utuh. Dengan kata lain, scene adalah tempat berkumpulnya konten visual, sedangkan renderer adalah mesin yang memproses konten tersebut.

Slide ini masih berada pada level pengantar. Kita belum masuk ke detail warna latar, material, atau pencahayaan. Yang penting untuk diingat sekarang adalah mental modelnya: `Scene` sebagai dunia virtual, `renderer` sebagai pemroses dunia itu, dan objek-objek di dalamnya sebagai konten yang akan ditampilkan.

### Inti yang Harus Ditekankan

- `Scene` adalah **root scene graph** atau container utama dari dunia virtual.
- Objek seperti `Ground`, `Cube`, `Sphere`, `Light`, dan `Camera` menjadi bagian dari scene agar dapat diproses oleh renderer.
- Renderer hanya menampilkan objek yang terhubung ke `Scene`; objek di luar scene tidak akan muncul.
- Diagram hierarki dibaca dari `Scene` sebagai induk ke objek-objek anak sebagai bagian dari dunia virtual.

### Transisi ke Slide Berikutnya

Setelah memahami `Scene` sebagai dunia virtual, langkah berikutnya adalah memberi tampilan dasar pada dunia itu, misalnya melalui **background scene**.

---

## Slide 015 - Background Scene

### Narasi

Setelah scene berisi objek seperti ground, cube, sphere, light, dan camera, kita perlu memberi tampilan dasar pada dunia virtual tersebut. Tanpa background, tampilan scene bisa terasa kosong atau tidak memiliki konteks visual. Di sinilah properti `scene.background` berperan.

```javascript
scene.background =
  new THREE.Color(
    0x0b1020
  );
```

Pada kode di atas, `scene.background` diisi dengan objek `new THREE.Color(0x0b1020)`. Artinya, kita membuat sebuah warna baru menggunakan nilai hex `0x0b1020`, yaitu warna biru gelap yang mendekati hitam. Warna ini kemudian dijadikan latar belakang scene.

Penting untuk dipahami bahwa `scene.background` bukan objek 3D seperti cube atau sphere. Ia tidak memiliki posisi, ukuran, atau material yang bisa diterangi. Ia hanya menentukan warna dasar yang akan terlihat di area scene yang tidak tertutup oleh objek lain.

Dalam konteks rendering pipeline, background berkaitan dengan tahap persiapan tampilan sebelum objek digambar. Saat renderer menyiapkan frame, buffer warna perlu dibersihkan atau diisi dengan warna dasar. Three.js membantu proses ini dengan menerjemahkan `scene.background` ke mekanisme clear atau render background, sehingga kita tidak perlu mengatur clear color WebGL secara langsung.

Secara praktis, properti ini berguna untuk memberi nuansa visual, meningkatkan kontras objek, dan membuat scene lebih mudah dibaca. Misalnya, warna gelap seperti `0x0b1020` dapat membuat objek yang lebih terang atau memiliki lighting terlihat lebih jelas.

Sebelum lanjut, mahasiswa perlu mengingat bahwa `scene.background` adalah properti level scene, bukan properti kamera atau renderer. Ia menentukan apa yang terlihat di belakang objek, tetapi tidak mengubah posisi objek, pencahayaan, atau cara kamera melihat scene.

### Inti yang Harus Ditekankan

- `scene.background` memberi warna dasar pada scene.
- `new THREE.Color(0x0b1020)` membuat warna hex biru gelap sebagai latar belakang.
- Background bukan objek 3D, melainkan properti visual pada scene.
- Three.js menerjemahkan `scene.background` ke proses clear/render buffer warna, sehingga clear color WebGL tidak perlu diatur manual.

### Transisi ke Slide Berikutnya

Setelah scene memiliki objek dan warna dasar, pertanyaan berikutnya adalah bagaimana scene itu dilihat. Selanjutnya kita akan masuk ke konsep camera, yaitu komponen yang menentukan sudut pandang dan cara scene diproyeksikan ke layar.

---

## Slide 016 - Camera

### Narasi

Setelah `Scene` dan background sudah disiapkan, langkah berikutnya adalah menentukan **dari mana scene itu dilihat**. Dalam Three.js, komponen yang memegang peran ini adalah `Camera`. Tanpa kamera, objek-objek dalam scene belum tentu bisa ditampilkan ke layar dengan cara yang kita inginkan.

Kamera menentukan bagaimana ruang 3D dalam scene dipetakan ke tampilan 2D. Konsep ini sejalan dengan **projection** yang sudah kita pelajari pada Pertemuan 4: bagaimana objek 3D diubah menjadi gambar yang bisa dirender ke layar.

Three.js menyediakan dua jenis utama kamera:

- `PerspectiveCamera`
- `OrthographicCamera`

Secara intuitif, `PerspectiveCamera` meniru pandangan manusia. Objek yang lebih dekat tampak lebih besar, sedangkan objek yang lebih jauh tampak lebih kecil. Jenis kamera ini cocok untuk visualisasi 3D yang ingin terasa natural.

`OrthographicCamera`, di sisi lain, menampilkan objek tanpa efek perspektif yang kuat. Ukuran relatif objek tetap lebih konsisten, sehingga jenis kamera ini sering digunakan untuk tampilan teknis atau representasi yang lebih datar.

Yang perlu kita pahami pada slide ini adalah: kamera bukan sekadar posisi titik. Kamera menentukan **apa yang terlihat**, **seberapa besar objek terlihat**, dan **bagaimana scene diproyeksikan ke layar**. Dalam alur rendering, kamera berperan sebelum objek diubah menjadi piksel di layar.

Untuk tahap ini, kita cukup memahami bahwa `Camera` adalah komponen penting setelah `Scene` dan sebelum proses rendering. Detail parameter kamera akan kita bahas lebih lanjut.

### Inti yang Harus Ditekankan

- `Camera` menentukan bagaimana `Scene` dilihat dan diproyeksikan ke layar.
- Dua jenis utama kamera dalam Three.js adalah `PerspectiveCamera` dan `OrthographicCamera`.
- Konsep kamera berkaitan langsung dengan **projection** yang sudah dipelajari sebelumnya.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat contoh `PerspectiveCamera` dan parameter utamanya: `FOV`, `Aspect Ratio`, `Near`, dan `Far`.

---

## Slide 017 - PerspectiveCamera

### Narasi

Pada tahap ini kita fokus pada `PerspectiveCamera`, yaitu kamera yang paling sering digunakan dalam Three.js untuk membuat tampilan 3D yang terasa natural. Kamera ini bekerja seperti kamera optik atau mata manusia: objek yang lebih dekat tampak lebih besar, sedangkan objek yang lebih jauh tampak lebih kecil. Efek ini berasal dari **perspective projection**, yang mengubah koordinat 3D menjadi tampilan 2D pada layar dengan mempertahankan kesan kedalaman.

```javascript
const camera =
  new THREE.PerspectiveCamera(
    60,
    width / height,
    0.1,
    100
  );
```

Kode di atas membuat objek kamera baru. Nilai `60` adalah **FOV** atau *field of view*, yaitu sudut pandang vertikal kamera dalam derajat. Semakin besar FOV, semakin luas area yang terlihat, tetapi distorsi di tepi tampilan bisa lebih terasa. Nilai `width / height` adalah **Aspect Ratio**, yaitu perbandingan lebar dan tinggi area rendering. Parameter ini penting agar objek tidak terlihat teregang atau terpotong ketika ukuran canvas berubah.

Dua parameter terakhir adalah `0.1` dan `100`, yaitu **Near** dan **Far**. `Near` menentukan jarak terdekat dari kamera yang masih dirender, sedangkan `Far` menentukan jarak terjauh yang masih dirender. Objek di depan `Near` atau di belakang `Far` tidak akan tampil. Rentang ini juga memengaruhi akurasi *depth buffer*, sehingga pemilihan nilai yang terlalu ekstrem dapat menyebabkan masalah kedalaman pada objek yang saling berdekatan.

Secara pipeline, `PerspectiveCamera` berperan pada tahap **projection**. Setelah objek berada dalam koordinat dunia, kamera membantu mengubahnya ke ruang kamera dan kemudian ke ruang proyeksi. Dari sinilah Three.js dapat menentukan bagian mana yang masuk ke layar dan bagaimana kedalaman objek dihitung sebelum rasterisasi.

Hasil yang diharapkan dari kode tersebut adalah sebuah kamera perspektif yang siap digunakan untuk melihat scene. Dengan parameter ini, scene akan ditampilkan dengan sudut pandang tertentu, proporsi layar yang sesuai, serta batas kedalaman yang valid.

Sebelum lanjut, hal penting yang perlu dipahami adalah bahwa `PerspectiveCamera` bukan sekadar “posisi kamera”, tetapi juga menentukan **sudut pandang**, **rasio layar**, dan **rentang kedalaman** yang valid. Dengan memahami keempat parameter ini, kita bisa mengatur tampilan scene secara lebih terkontrol.

### Inti yang Harus Ditekankan

- `PerspectiveCamera` menghasilkan tampilan 3D dengan efek perspektif: objek dekat tampak lebih besar, objek jauh tampak lebih kecil.
- Parameter `60` adalah **FOV**, yaitu sudut pandang vertikal kamera.
- `width / height` adalah **Aspect Ratio**, yang menjaga proporsi tampilan sesuai ukuran layar.
- `0.1` adalah **Near**, jarak terdekat yang masih dirender.
- `100` adalah **Far**, jarak terjauh yang masih dirender.
- Kamera berperan pada tahap **projection** dalam rendering pipeline.

### Transisi ke Slide Berikutnya

Setelah kamera dibuat, langkah berikutnya adalah menentukan di mana kamera berada di dalam scene. Pada slide berikutnya, kita akan melihat `camera.position.set(...)` dan bagaimana posisi kamera dalam **World Space** memengaruhi tampilan objek.

---

## Slide 018 - Camera Position

### Narasi

Setelah kamera dibuat, langkah berikutnya adalah menentukan **di mana kamera berada** dalam scene. Pada slide ini kita melihat baris berikut:

```javascript
camera.position.set(
  0,
  2,
  5
);
```

Baris ini mengisi komponen `x`, `y`, dan `z` dari `camera.position`. Dalam Three.js, `position` adalah vektor tiga dimensi yang menyatakan lokasi kamera pada **World Space**, yaitu ruang koordinat global dari scene.

Secara visual, koordinat `(0, 2, 5)` berarti kamera berada tepat di tengah sumbu `x`, sedikit di atas sumbu `y`, dan berada pada sisi positif sumbu `z`. Jika objek utama berada di titik `(0, 0, 0)`, maka kamera akan melihat objek tersebut dari depan dan sedikit dari atas. Nilai `x = 0` menjaga kamera tidak bergeser ke kiri atau kanan, nilai `y = 2` memberi elevasi, dan nilai `z = 5` menentukan jarak kamera dari titik pusat scene.

Dalam rendering pipeline, posisi kamera berperan saat koordinat objek dari **World Space** diubah ke **View Space**. Proses ini menggunakan posisi dan orientasi kamera untuk membentuk tampilan yang akan diproyeksikan ke layar. Three.js mengelola `View Matrix` di belakang layar, sehingga untuk kasus dasar kita cukup mengatur posisi kamera tanpa perlu menghitung matriks transformasi secara manual.

Hal penting yang perlu dipahami adalah `camera.position` hanya menentukan **lokasi** kamera. Arah pandangan kamera masih bergantung pada orientasi kamera. Dengan kata lain, posisi dan orientasi adalah dua hal yang saling melengkapi: posisi menentukan dari mana kamera berada, sedangkan orientasi menentukan ke mana kamera menghadap.

### Inti yang Harus Ditekankan

- `camera.position.set(0, 2, 5)` menempatkan kamera pada koordinat **World Space** dengan `x = 0`, `y = 2`, dan `z = 5`.
- Posisi kamera menentukan sudut pandang awal, tetapi arah pandangan juga bergantung pada orientasi kamera.
- Three.js menghitung `View Matrix` secara internal, sehingga mahasiswa cukup mengatur posisi dan target kamera untuk kasus dasar.

### Transisi ke Slide Berikutnya

Setelah posisi kamera ditentukan, langkah berikutnya adalah mengarahkan kamera ke titik tertentu. Pada slide berikutnya kita akan melihat `camera.lookAt(0, 0, 0);` untuk menentukan target pandangan kamera.

---

## Slide 019 - Camera LookAt

### Narasi

Setelah posisi kamera diletakkan di **World Space**, ada satu hal yang belum cukup: kamera harus tahu ke mana ia menghadap. Dalam Three.js, arah pandang ini biasanya diatur dengan `camera.lookAt()`.

```javascript
camera.lookAt(
  0,
  0,
  0
);
```

Panggilan ini memberi tahu kamera bahwa titik yang ingin dilihat adalah koordinat `(0, 0, 0)`. Artinya, kamera tidak dipindahkan; yang berubah adalah orientasinya. Jika posisi kamera sebelumnya berada di `(0, 2, 5)`, maka kamera akan “menengok” ke titik asal, sehingga objek di sekitar origin menjadi fokus pandangan.

Secara konsep, `lookAt()` bekerja dari tiga informasi: **posisi kamera**, **target**, dan **arah up**. Posisi menentukan di mana kamera berada, target menentukan ke mana kamera diarahkan, dan up membantu Three.js menentukan orientasi vertikal yang wajar. Dengan ketiganya, Three.js dapat menghitung rotasi kamera dan memperbarui **View Matrix** di belakang layar.

Hal ini penting dalam rendering pipeline karena kamera bukan sekadar “mata” yang hanya punya koordinat. Kamera juga menentukan bagaimana **World Space** dipetakan ke ruang pandang kamera. Jika posisi kamera benar tetapi arah pandangnya salah, objek bisa berada di luar layar, terlihat miring, atau tidak berada di komposisi yang diinginkan.

Cara membaca kode di atas cukup sederhana: `camera` adalah objek kamera, `lookAt` adalah metode untuk mengarahkan kamera, dan `(0, 0, 0)` adalah target dalam World Space. Mahasiswa perlu membedakan `camera.position.set()` yang mengubah **lokasi** kamera dengan `camera.lookAt()` yang mengubah **arah pandang** kamera.

Sebelum lanjut ke jenis kamera lain, pastikan mahasiswa memahami bahwa dalam Three.js, posisi dan orientasi kamera adalah dua hal yang saling melengkapi. Posisi menentukan “di mana”, sedangkan `lookAt()` menentukan “ke mana”.

### Inti yang Harus Ditekankan

- `camera.lookAt(0, 0, 0)` mengarahkan kamera ke target, bukan memindahkan kamera.
- Arah pandang kamera ditentukan oleh **posisi**, **target**, dan **arah up**.
- `lookAt()` memengaruhi **View Matrix** dan komposisi scene yang akan dirender.
- Mahasiswa harus membedakan `camera.position.set()` untuk lokasi kamera dan `camera.lookAt()` untuk orientasi kamera.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana kamera diarahkan ke target, langkah berikutnya adalah melihat jenis kamera lain, yaitu `OrthographicCamera`, yang cocok untuk tampilan teknis seperti CAD-like view, technical view, isometric view, dan map.

---

## Slide 020 - OrthographicCamera

### Narasi

Setelah kita memahami cara mengarahkan kamera dengan `camera.lookAt`, sekarang kita berkenalan dengan jenis kamera lain di Three.js, yaitu `THREE.OrthographicCamera`. Kamera ini menggunakan **proyeksi ortografik**, yaitu proyeksi di mana garis pandang kamera bersifat paralel. Artinya, objek yang lebih jauh tidak otomatis terlihat lebih kecil seperti pada kamera perspektif. Ukuran relatif objek tetap lebih stabil, sehingga tampilan yang dihasilkan lebih cocok untuk kebutuhan teknis.

```javascript
const camera =
  new THREE.OrthographicCamera(
    left, right,
    top, bottom,
    near, far
  );
```

Konstruktor `THREE.OrthographicCamera` menerima enam parameter utama: `left`, `right`, `top`, `bottom`, `near`, dan `far`. Empat parameter pertama menentukan batas bidang pandang atau *view frustum* pada sumbu horizontal dan vertikal. `near` dan `far` menentukan jarak dekat dan jauh yang masih diproses oleh pipeline rendering, terutama untuk *depth clipping* dan *depth buffer*.

Secara visual, kita bisa membayangkannya seperti kamera yang memotret objek dengan sinar-sinar paralel, bukan seperti mata manusia yang memiliki titik hilang. Karena tidak ada *foreshortening* akibat perspektif, bentuk dan ukuran objek lebih mudah dibaca secara teknis. Inilah alasan kamera ortografik sering dipakai untuk tampilan teknis dan visualisasi data spasial.

Beberapa penggunaan yang paling relevan adalah:

- **CAD-like view**: menampilkan model teknik dengan ukuran yang konsisten.
- **Technical view**: membaca bentuk objek tanpa distorsi perspektif.
- **Isometric view**: menampilkan objek dari sudut tetap dengan proporsi yang stabil.
- **Map**: menampilkan peta dari atas atau sudut tertentu tanpa efek kedalaman yang berlebihan.

Perlu diingat, `OrthographicCamera` tetap bagian dari rendering pipeline: ia membantu membentuk *view matrix* dan *projection matrix*. Posisi kamera menentukan dari mana scene dilihat, sedangkan parameter frustum menentukan bagian scene mana yang masuk ke layar. Setelah kamera dibuat, kita tetap bisa mengatur `position` dan `lookAt` untuk menentukan orientasi, misalnya melihat dari atas untuk peta atau dari sudut isometrik.

Sebelum lanjut, hal penting yang harus dipahami adalah perbedaan mendasar antara kamera perspektif dan ortografik: perspektif memberi kesan kedalaman realistis, sedangkan ortografik memberi tampilan ukuran yang lebih konsisten dan bebas distorsi perspektif. Untuk materi ini, cukup pahami bahwa `OrthographicCamera` adalah pilihan kamera ketika kita membutuhkan tampilan teknis, bukan tampilan realistis.

### Inti yang Harus Ditekankan

- `THREE.OrthographicCamera` menggunakan proyeksi paralel sehingga objek tidak mengecil karena jarak.
- Parameter `left`, `right`, `top`, `bottom`, `near`, dan `far` menentukan batas bidang pandang dan rentang kedalaman.
- Kamera ini cocok untuk CAD-like view, technical view, isometric view, dan map karena ukuran relatif objek lebih konsisten.

### Transisi ke Slide Berikutnya

Setelah kamera siap, scene belum otomatis tampil. Langkah berikutnya adalah menggunakan `WebGLRenderer` untuk menggambar scene dari kamera ke canvas.

---

## Slide 021 - WebGLRenderer

### Narasi

Pada tahap ini, kita masuk ke komponen yang benar-benar mengubah data scene menjadi gambar yang terlihat. Dalam Three.js, **Scene** menyimpan objek-objek yang ingin ditampilkan, **Camera** menentukan sudut pandang, dan **WebGLRenderer** bertugas menggambar hasil tersebut ke **Canvas**. Dengan kata lain, renderer adalah tahap output dari pipeline rendering: ia menerima informasi dari scene dan kamera, lalu menghasilkan piksel yang dapat dilihat pengguna.

```javascript
const renderer =
  new THREE.WebGLRenderer({
    antialias: true
  });
```

Kode ini membuat objek renderer baru. Parameter `antialias: true` mengaktifkan antialiasing pada konteks WebGL, sehingga tepi objek yang miring atau kurva tampak lebih halus dan tidak terlalu bergerigi. Pilihan ini penting untuk kualitas visual, terutama ketika objek 3D memiliki garis tepi yang tajam terhadap latar belakang.

Perlu dipahami bahwa renderer bukan pengganti scene atau kamera. Scene menentukan apa yang ada, kamera menentukan bagaimana objek dilihat, dan renderer menentukan bagaimana hasil akhir digambar ke layar. Tanpa renderer, scene dan kamera hanya berupa data yang belum ditampilkan.

Dalam konteks grafika komputer, komponen ini menghubungkan model matematis dan geometri dengan perangkat visual. `THREE.WebGLRenderer` memanfaatkan WebGL untuk melakukan rendering, sehingga proses gambar dapat melibatkan GPU dan menghasilkan tampilan real-time. Namun pada slide ini, kita cukup memahami bahwa renderer adalah komponen yang menghasilkan gambar dari scene melalui kamera ke canvas.

Sebelum lanjut, hal penting yang harus tertanam adalah urutan peran: scene, kamera, lalu renderer. Setelah renderer dibuat, langkah berikutnya adalah mengatur ukuran canvas dan menempatkannya ke halaman agar gambar benar-benar muncul di browser.

### Inti yang Harus Ditekankan

- **WebGLRenderer** adalah komponen yang menggambar **Scene** dari **Camera** ke **Canvas**.
- `new THREE.WebGLRenderer({ antialias: true })` membuat renderer dengan antialiasing aktif untuk tepi yang lebih halus.
- Renderer adalah tahap output: scene menyediakan objek, camera menyediakan sudut pandang, dan renderer menghasilkan gambar.
- Setelah renderer dibuat, langkah berikutnya adalah mengatur ukuran canvas dan menempatkannya ke halaman.

### Transisi ke Slide Berikutnya

Setelah renderer dibuat, kita masih perlu menentukan seberapa besar area gambar yang akan ditampilkan dan bagaimana canvas tersebut dimasukkan ke halaman. Pada slide berikutnya, kita akan melihat `renderer.setSize(...)` dan penggunaan `renderer.domElement` untuk menampilkan hasil rendering di browser.

---

## Slide 022 - Renderer Size dan Canvas

### Narasi

Setelah objek `WebGLRenderer` dibuat, langkah berikutnya adalah menyiapkan area gambar yang akan ditampilkan di browser. Pada slide ini kita melihat dua baris penting:

```javascript
renderer.setSize(
  window.innerWidth,
  window.innerHeight
);

document.body.appendChild(
  renderer.domElement
);
```

`renderer.setSize(window.innerWidth, window.innerHeight)` menentukan ukuran **Canvas** yang dikelola Three.js. Nilai `window.innerWidth` dan `window.innerHeight` biasanya dipakai agar area gambar mengikuti lebar dan tinggi jendela browser. Dengan ukuran ini, renderer tahu seberapa besar area yang harus disiapkan untuk menampilkan hasil rendering.

`renderer.domElement` adalah elemen **Canvas** yang digunakan Three.js. Elemen ini belum otomatis muncul di halaman; ia masih perlu dimasukkan ke dalam struktur HTML. Karena itu, `document.body.appendChild(renderer.domElement)` menempelkan canvas tersebut ke dalam `body`, sehingga browser dapat menampilkannya.

Urutan prosesnya cukup sederhana:

1. Renderer sudah dibuat pada langkah sebelumnya.
2. Ukuran canvas diatur dengan `renderer.setSize`.
3. Canvas dimasukkan ke halaman dengan `document.body.appendChild`.

Setelah dua langkah ini selesai, canvas sudah siap secara visual: ukurannya sesuai jendela dan elemennya sudah ada di DOM. Namun, pada tahap ini scene belum benar-benar digambar. Yang sudah kita lakukan adalah menyiapkan “kanvas” tempat hasil rendering nanti akan ditampilkan.

### Inti yang Harus Ditekankan

- `renderer.setSize` mengatur ukuran area gambar yang akan dipakai renderer.
- `renderer.domElement` adalah **Canvas** milik Three.js yang harus dimasukkan ke HTML agar terlihat.
- `document.body.appendChild` membuat canvas tersebut tampil di halaman browser.
- Slide ini masih tahap persiapan canvas, bukan tahap menggambar scene.

### Transisi ke Slide Berikutnya

Setelah canvas sudah berukuran dan terpasang di halaman, langkah berikutnya adalah meminta renderer menggambar `scene` dari `camera`.

---

## Slide 023 - Render Scene

### Narasi

Setelah canvas dibuat dan dimasukkan ke halaman, langkah berikutnya adalah meminta renderer untuk menggambar. Dalam Three.js, langkah ini dilakukan dengan satu pemanggilan:

```javascript
renderer.render(
  scene,
  camera
);
```

Perhatikan dua argumen utama pada `renderer.render`. Argumen pertama, `scene`, berisi seluruh objek visual yang ingin ditampilkan, misalnya mesh, material, dan light. Argumen kedua, `camera`, menentukan dari mana adegan dilihat, termasuk posisi, arah, dan cara proyeksi. Tanpa `camera`, renderer tidak tahu sudut pandang yang harus digunakan.

Penting untuk dipahami bahwa `renderer.render` bukan sekadar perintah menggambar bentuk di layar. Renderer bertugas menerjemahkan informasi dari `scene` dan `camera` menjadi instruksi yang dapat diproses oleh GPU. Di balik pemanggilan ini, Three.js menangani banyak detail teknis, seperti **buffer**, **shader**, **state**, dan **draw call**.

Secara sederhana, kita dapat membacanya sebagai berikut:

- **Buffer** menyimpan data yang dibutuhkan proses rendering, misalnya data geometri atau hasil perantara.
- **Shader** adalah program kecil yang membantu menentukan bagaimana titik, permukaan, atau warna diproses.
- **State** adalah kondisi GPU atau renderer saat ini, seperti mode gambar, material aktif, atau parameter yang sedang digunakan.
- **Draw call** adalah instruksi untuk menggambar objek tertentu ke layar.

Dengan abstraksi ini, mahasiswa tidak perlu menulis detail GPU secara manual pada tahap awal. Kita cukup menyiapkan `scene` dan `camera`, lalu memanggil `renderer.render`. Renderer akan menyusun urutan kerja yang diperlukan untuk menghasilkan satu frame gambar pada canvas.

Dari sisi pipeline, alurnya dapat dibayangkan sebagai berikut: `scene` menyediakan objek, `camera` menentukan pandangan, lalu `renderer` menerjemahkan semuanya menjadi gambar yang ditampilkan pada `renderer.domElement`. Jadi, pemanggilan `renderer.render` adalah titik di mana data adegan benar-benar menjadi visual.

Sebelum lanjut, hal yang perlu diingat adalah bahwa `renderer.render` harus dipanggil setelah `scene`, `camera`, dan `renderer` sudah disiapkan. Jika salah satu belum ada, proses rendering tidak dapat menghasilkan gambar yang benar. Pada tahap pengantar ini, satu pemanggilan `renderer.render` sudah cukup untuk menampilkan frame pertama.

### Inti yang Harus Ditekankan

- `renderer.render(scene, camera)` adalah perintah utama untuk menampilkan adegan pada canvas.
- `scene` berisi objek visual, sedangkan `camera` menentukan sudut pandang dan proyeksi.
- Renderer menyembunyikan detail teknis seperti buffer, shader, state, dan draw call.
- Tanpa pemanggilan render, `scene` dan `camera` hanya berupa data yang belum ditampilkan.

### Transisi ke Slide Berikutnya

Sekarang kita sudah tahu bagaimana Three.js menampilkan adegan. Langkah berikutnya adalah menyiapkan apa yang akan ditampilkan, yaitu bentuk objek. Pada slide berikutnya, kita akan membahas **Geometry**, yaitu komponen yang mendefinisikan bentuk dari objek dalam scene.

---

## Slide 024 - Geometry

### Narasi

Setelah `scene` dan `camera` disiapkan, renderer masih membutuhkan objek yang bisa digambar. Di sinilah **geometry** berperan. Geometry mendefinisikan **bentuk object** dalam scene, yaitu data yang menjelaskan bagaimana suatu objek tampak secara spasial.

Dalam grafika komputer, geometry biasanya menjadi sumber bentuk dasar sebelum objek diproses lebih lanjut oleh pipeline rendering. Tanpa geometry, scene hanya berisi ruang dan kamera, tetapi belum ada objek visual yang dapat di-rasterisasi, diterangi, atau ditampilkan oleh GPU.

Three.js menyediakan beberapa **built-in geometry** agar kita tidak perlu membangun data bentuk dari nol. Beberapa contoh yang sering digunakan adalah:

- `BoxGeometry` untuk bentuk kotak atau kubus.
- `SphereGeometry` untuk bentuk bola.
- `PlaneGeometry` untuk bidang datar.
- `CylinderGeometry` untuk bentuk silinder.
- `ConeGeometry` untuk bentuk kerucut.
- `TorusGeometry` untuk bentuk cincin atau donat.

Poin pentingnya adalah geometry menjawab pertanyaan **“objek ini berbentuk apa?”**. Kelas-kelas built-in tersebut memberi kita bentuk awal yang siap digunakan, sehingga kita bisa fokus pada penempatan objek, ukuran, dan tampilan scene secara keseluruhan.

Sebelum lanjut, kita perlu memahami bahwa geometry bukan tahap rendering itu sendiri. Geometry adalah data bentuk yang kemudian dipakai oleh renderer untuk menghasilkan gambar. Pada slide berikutnya, kita akan melihat contoh konkretnya melalui `BoxGeometry` dan parameter yang menentukan ukuran bentuknya.

### Inti yang Harus Ditekankan

- **Geometry** mendefinisikan bentuk objek dalam scene.
- Built-in geometry seperti `BoxGeometry`, `SphereGeometry`, `PlaneGeometry`, `CylinderGeometry`, `ConeGeometry`, dan `TorusGeometry` menyediakan bentuk dasar yang siap digunakan.
- Geometry adalah data bentuk, bukan proses rendering; renderer yang kemudian memproses bentuk tersebut menjadi gambar.

### Transisi ke Slide Berikutnya

Sebagai contoh pertama, kita akan melihat `BoxGeometry`, yaitu bentuk kotak yang dibuat dengan parameter ukuran.

---

## Slide 025 - BoxGeometry

### Narasi

Kita mulai dari contoh paling sederhana dari **built-in geometry** di Three.js, yaitu `BoxGeometry`. Kode berikut membuat sebuah geometri kotak:

```javascript
const geometry =
  new THREE.BoxGeometry(
    1, 1, 1
  );
```

Di sini, `geometry` adalah objek yang menyimpan data bentuk. Nilai `1, 1, 1` menentukan ukuran kotak pada tiga sumbu. Three.js menyediakan parameter:

- `width`
- `height`
- `depth`

Artinya, kotak ini memiliki lebar 1, tinggi 1, dan kedalaman 1. Karena ketiga nilainya sama, bentuk yang dihasilkan adalah **cube** atau kubus satuan. Jika salah satu nilai diubah, misalnya `new THREE.BoxGeometry(2, 1, 1)`, bentuknya akan menjadi kotak yang lebih panjang pada sumbu lebar.

Penting untuk memahami bahwa `BoxGeometry` hanya mendefinisikan **bentuk**, bukan tampilan visualnya. Bentuk ini nanti akan dipadukan dengan material dan mesh agar dapat dirender. Dalam alur rendering, geometri berperan sebagai data awal yang menentukan struktur objek sebelum proses pencahayaan, rasterisasi, dan tampilan akhir.

Cara membaca kode ini cukup sederhana. `new THREE.BoxGeometry(...)` membuat objek geometri baru. Argumen di dalam kurung adalah ukuran geometri. Variabel `geometry` kemudian dapat digunakan untuk membuat objek 3D yang bisa ditempatkan di scene.

Sebelum lanjut, mahasiswa perlu paham bahwa parameter geometri menentukan **ukuran bentuk**, bukan posisi objek. Posisi, rotasi, dan skala objek biasanya diatur pada objek `Mesh`, bukan pada geometri itu sendiri.

### Inti yang Harus Ditekankan

- `BoxGeometry` adalah geometri bawaan Three.js untuk membuat bentuk kotak atau kubus.
- Parameter `width`, `height`, dan `depth` menentukan ukuran geometri pada tiga sumbu.
- `new THREE.BoxGeometry(1, 1, 1)` menghasilkan kubus satuan.
- Geometri mendefinisikan bentuk, sedangkan tampilan visual ditentukan oleh material dan mesh.

### Transisi ke Slide Berikutnya

Setelah memahami kotak sebagai bentuk dasar, kita akan melihat bentuk yang lebih melengkung, yaitu `SphereGeometry`, beserta pengaruh jumlah segment terhadap halus permukaan dan jumlah polygon.

---

## Slide 026 - SphereGeometry

### Narasi

Kita lanjut ke bentuk primitif lain yang sering dipakai dalam scene 3D: bola. Dalam Three.js, bola dibuat dengan `THREE.SphereGeometry`, yang menghasilkan objek `geometry` berisi data bentuk bola.

```javascript
const geometry =
  new THREE.SphereGeometry(
    0.7,
    32,
    16
  );
```

Pada kode di atas, `0.7` menentukan ukuran bola, sedangkan `32` dan `16` adalah parameter segment. Segment mengatur seberapa banyak permukaan bola dibagi menjadi potongan kecil. Semakin besar nilai segment, semakin halus permukaan bola yang dihasilkan.

Secara visual, bola pada komputer tidak benar-benar melengkung sempurna. Ia dibangun dari banyak segitiga kecil yang membentuk permukaan. Karena itu, ada hubungan langsung antara jumlah segment dan jumlah polygon: semakin banyak segment, permukaan lebih halus, tetapi polygon lebih banyak.

Hubungan ini penting dalam grafika komputer karena polygon adalah unit dasar yang diproses saat rendering. Jika segment terlalu sedikit, bola akan tampak bersegi dan kurang natural. Jika segment terlalu banyak, tampilan lebih halus, tetapi beban geometri untuk GPU menjadi lebih besar.

Untuk slide ini, yang perlu dipahami adalah trade-off antara kualitas visual dan jumlah segitiga. Nilai `32` dan `16` adalah contoh pilihan yang cukup halus untuk objek bola tanpa membuat geometri terlalu berat.

Sebelum lanjut, pastikan kita paham bahwa `geometry` di sini masih berupa data bentuk. Ia belum menjadi objek visual lengkap di scene sampai dipasangkan dengan material dan dimasukkan ke dalam scene.

### Inti yang Harus Ditekankan

- `THREE.SphereGeometry` digunakan untuk membuat geometri bola dalam Three.js.
- Parameter `0.7` menentukan ukuran bola, sedangkan `32` dan `16` mengatur jumlah segment.
- Semakin banyak segment, permukaan lebih halus tetapi polygon lebih banyak, sehingga ada trade-off visual dan performa.

### Transisi ke Slide Berikutnya

Setelah memahami bentuk bola, kita akan melihat permukaan datar sederhana dengan `PlaneGeometry`, yang sering digunakan untuk ground, floor, wall, atau surface.

---

## Slide 027 - PlaneGeometry

### Narasi

Setelah `SphereGeometry`, kita melihat bentuk yang jauh lebih sederhana: `PlaneGeometry`.

```javascript
const groundGeometry =
  new THREE.PlaneGeometry(
    10,
    10
  );
```

Pada potongan kode ini, `groundGeometry` adalah variabel yang menyimpan objek geometri. `new THREE.PlaneGeometry(10, 10)` membuat sebuah bidang datar dengan ukuran lebar `10` dan tinggi `10`. Nama variabel `groundGeometry` memberi petunjuk bahwa bidang ini biasanya dipakai sebagai dasar atau lantai dalam adegan.

Intuisi visualnya sederhana: `PlaneGeometry` adalah permukaan datar, bukan bentuk bulat atau solid. Karena itu, plane sering digunakan untuk **ground**, **floor**, **wall**, atau **surface**. Dalam grafika komputer, permukaan seperti ini penting karena menjadi tempat objek lain “berpijak”, membantu memberi skala, dan memudahkan penempatan kamera serta pencahayaan.

Dari sisi rendering pipeline, plane tetap melewati proses yang sama dengan geometri lain: data geometri diproses oleh GPU, kemudian dirasterisasi menjadi piksel, lalu material dan lighting menentukan warna akhirnya. Namun karena permukaannya datar dan sederhana, plane biasanya lebih ringan secara komputasi dibanding geometri kompleks seperti sphere.

Yang perlu kita pahami di sini adalah bahwa `PlaneGeometry` bukan sekadar gambar persegi. Ia adalah **geometri** yang akan dipakai bersama material dan transformasi untuk membentuk objek visual. Variabel `groundGeometry` baru menjadi elemen yang bisa ditampilkan ketika nanti dihubungkan ke mesh, material, dan posisi dalam scene.

Sebelum lanjut, cukup kita pegang bahwa `PlaneGeometry` adalah bentuk dasar untuk permukaan datar, dan parameter `10, 10` menentukan ukurannya. Detail apa saja yang tersimpan di dalam geometri ini akan kita lihat pada slide berikutnya.

### Inti yang Harus Ditekankan

- `new THREE.PlaneGeometry(10, 10)` membuat bidang datar berukuran `10 x 10`.
- Plane cocok untuk **ground**, **floor**, **wall**, atau **surface** karena bentuknya sederhana dan datar.
- Geometri ini masih perlu material dan transformasi agar menjadi objek visual yang tampil dalam scene.

### Transisi ke Slide Berikutnya

Sekarang kita sudah tahu bahwa `PlaneGeometry` adalah bentuk permukaan datar. Selanjutnya, kita akan melihat apa yang sebenarnya tersimpan di dalam objek `Geometry`, seperti `position`, `normal`, `UV`, dan `index`.

---

## Slide 028 - Geometry dan Data Vertex

### Narasi

Setelah kita membuat objek seperti `PlaneGeometry`, Three.js memang menyajikannya sebagai bentuk yang sudah siap ditampilkan. Namun, di balik abstraksi `Geometry` tersebut, sebenarnya tersimpan data yang jauh lebih mendasar: data vertex. Data inilah yang nantinya dibaca oleh GPU untuk membentuk permukaan, menghitung pencahayaan, dan memetakan tekstur.

Jadi, ketika kita menyebut sebuah objek sebagai “geometry”, kita tidak sedang berbicara hanya tentang bentuk visualnya. Kita sedang berbicara tentang kumpulan titik-titik yang memiliki informasi tertentu. Informasi utama yang biasanya ada di dalamnya adalah `position`, `normal`, `UV`, dan `index`.

`position` adalah data paling dasar. Di sinilah tersimpan koordinat setiap vertex, misalnya posisi titik-titik penyusun sebuah bidang, kubus, atau mesh. Tanpa `position`, GPU tidak tahu di mana letak bentuk tersebut dalam ruang 3D. Untuk `PlaneGeometry` yang kita lihat sebelumnya, `position` inilah yang menentukan titik-titik sudut dan grid bidang tersebut.

Selanjutnya ada `normal`. `normal` adalah arah yang tegak lurus terhadap permukaan pada suatu vertex atau face. Data ini sangat penting untuk lighting, karena pencahayaan dalam grafika komputer sangat bergantung pada orientasi permukaan terhadap sumber cahaya. Jika `normal` salah, bentuknya mungkin tetap benar, tetapi pencahayaannya akan terlihat salah, misalnya permukaan yang seharusnya terang justru tampak gelap.

Kemudian ada `UV`. `UV` adalah koordinat tekstur, biasanya berupa nilai 2D yang menentukan bagian mana dari tekstur yang dipetakan ke permukaan objek. `UV` bukan satuan panjang fisik, melainkan pemetaan dari permukaan 3D ke gambar tekstur 2D. Dengan adanya `UV`, satu geometri yang sama bisa menggunakan tekstur yang berbeda, misalnya lantai, dinding, atau permukaan karakter.

Terakhir ada `index`. `index` berisi daftar indeks vertex yang digunakan untuk membentuk segitiga. Dalam rendering, permukaan 3D umumnya dirasterisasi menjadi segitiga-segitiga kecil. `index` membantu GPU mengetahui vertex mana yang saling terhubung menjadi satu segitiga. Dengan `index`, vertex yang sama bisa digunakan berulang kali oleh beberapa segitiga, sehingga data menjadi lebih efisien.

Kita bisa merangkumnya sebagai berikut:

| Data | Isi | Peran Utama |
|---|---|---|
| `position` | Koordinat vertex | Menentukan bentuk dan posisi objek |
| `normal` | Arah permukaan | Menentukan hasil pencahayaan |
| `UV` | Koordinat tekstur | Menentukan pemetaan tekstur |
| `index` | Urutan vertex penyusun segitiga | Menentukan topologi mesh |

Penting untuk dipahami bahwa konsep ini bukan hanya milik Three.js. Konsep `position`, `normal`, `UV`, dan `index` berasal langsung dari cara kerja WebGL dan GPU. Three.js hanya menyederhanakan cara kita membuat dan mengelolanya. Namun, ketika nanti kita masuk ke shader, lighting, atau rendering pipeline, data-data inilah yang menjadi bahan utama yang diproses oleh GPU.

### Inti yang Harus Ditekankan

- `Geometry` bukan sekadar objek visual, tetapi kumpulan data vertex yang siap diproses GPU.
- `position` menentukan bentuk, `normal` menentukan pencahayaan, `UV` menentukan pemetaan tekstur, dan `index` menentukan penyusunan segitiga.
- Konsep ini merupakan dasar dari rendering pipeline dan sangat dekat dengan cara kerja WebGL.

### Transisi ke Slide Berikutnya

Setelah kita memahami data apa saja yang tersimpan di dalam geometry, langkah berikutnya adalah melihat bagaimana Three.js modern menyimpan data tersebut secara lebih efisien melalui `BufferGeometry`, yang lebih dekat dengan konsep GPU buffer pada WebGL.

---

## Slide 029 - BufferGeometry

### Narasi

Pada Three.js modern, bentuk geometri yang paling sering kita gunakan adalah `BufferGeometry`.

```text
BufferGeometry
```

Nama `Buffer` menunjukkan bahwa data geometri disimpan dalam bentuk buffer, yaitu kumpulan data yang tersusun rapi dan siap dikirim ke GPU. Ini berbeda dari abstraksi geometri yang lebih tinggi, karena `BufferGeometry` lebih dekat dengan cara WebGL menyimpan dan memproses data vertex.

Attribute utama yang biasanya ada pada `BufferGeometry` adalah:

```text
position
normal
uv
```

Secara konsep, kita dapat membacanya sebagai berikut:

- `position` menyimpan koordinat vertex, yaitu titik-titik yang membentuk bentuk objek.
- `normal` menyimpan arah permukaan pada setiap vertex, dan ini penting untuk perhitungan lighting.
- `uv` menyimpan koordinat texture, yang digunakan untuk memetakan texture ke permukaan objek.

Dalam rendering pipeline, `BufferGeometry` berada di tahap geometri. Data vertex dari buffer ini akan dibaca oleh GPU, kemudian diproses oleh shader untuk menghasilkan posisi layar, warna, dan informasi visual lainnya sebelum rasterisasi.

Yang perlu kita pahami di sini adalah bahwa `BufferGeometry` bukan sekadar kumpulan koordinat. Ia adalah struktur data yang menghubungkan geometri, lighting, dan texture dalam satu representasi yang efisien.

### Inti yang Harus Ditekankan

- `BufferGeometry` adalah representasi geometri modern di Three.js yang lebih dekat dengan GPU buffer pada WebGL.
- Attribute utama `position`, `normal`, dan `uv` masing-masing menentukan bentuk, pencahayaan, dan pemetaan texture.
- Data ini menjadi dasar bagi GPU untuk memproses vertex sebelum objek dirender ke layar.

### Transisi ke Slide Berikutnya

Setelah geometri menyediakan data vertex, langkah berikutnya adalah menentukan bagaimana permukaan objek tersebut tampak, yaitu melalui material.

---

## Slide 030 - Material

### Narasi

Setelah kita memahami `BufferGeometry`, langkah berikutnya adalah memberi “kulit” pada bentuk tersebut. `BufferGeometry` menentukan posisi titik, normal, dan koordinat tekstur, tetapi ia tidak menentukan bagaimana permukaan itu terlihat saat dirender. Di sinilah **Material** berperan.

Secara intuitif, material adalah aturan visual untuk permukaan. Ia menjawab pertanyaan: warna apa yang muncul, apakah permukaan tembus pandang, apakah ia menerima cahaya, dan apakah ada tekstur yang dipetakan ke permukaannya. Dalam pipeline rendering, setelah geometri ditransformasi dan dirasterisasi menjadi fragmen, material membantu menentukan warna akhir fragmen tersebut.

Dalam Three.js, material biasanya dipasang pada `Mesh`. `Mesh` adalah objek yang menggabungkan `BufferGeometry` dan material. Jadi, satu geometri yang sama bisa menghasilkan tampilan berbeda hanya dengan mengganti materialnya. Misalnya, bentuk kubus yang sama bisa tampak biru solid, transparan, atau memiliki tekstur berbeda tergantung material yang dipilih.

Beberapa aspek yang dikendalikan material antara lain:

- `color`: warna dasar permukaan.
- `transparency`: tingkat tembus pandang permukaan.
- `lighting response`: seberapa besar permukaan bereaksi terhadap cahaya.
- `texture`: citra atau pola yang dipetakan ke permukaan.
- parameter visual lain yang memengaruhi tampilan akhir objek.

Pada pertemuan ini kita fokus pada material dasar. Artinya, kita belum masuk ke material kompleks yang membutuhkan banyak parameter fisika. Tujuan utamanya adalah memahami bahwa material adalah lapisan antara geometri dan hasil visual akhir, serta menjadi penghubung antara data geometri dengan proses rendering pada GPU.

Hal penting yang harus dipahami sebelum lanjut: geometri memberi bentuk, material memberi tampilan. Tanpa material, geometri tidak cukup untuk menentukan bagaimana objek tampak di layar. Konsep ini akan menjadi dasar ketika kita membahas jenis material tertentu.

### Inti yang Harus Ditekankan

- **Material** menentukan tampilan permukaan, bukan bentuk objek.
- Material bekerja setelah geometri dalam pipeline rendering dan memengaruhi warna fragmen.
- `Mesh` menggabungkan `BufferGeometry` dan material.
- Material dasar dapat mengatur `color`, `transparency`, `lighting response`, `texture`, dan parameter visual lain.
- Fokus pertemuan ini adalah material dasar, bukan material kompleks.

### Transisi ke Slide Berikutnya

Setelah memahami peran material secara umum, kita akan melihat contoh material paling sederhana, yaitu `MeshBasicMaterial`, untuk melihat bagaimana material dasar diterapkan pada objek.

---

## Slide 031 - MeshBasicMaterial

### Narasi

Pada tahap material, kita menentukan bagaimana permukaan mesh diberi warna setelah geometri sudah diposisikan oleh transformasi dan kamera. `MeshBasicMaterial` adalah material paling sederhana dalam Three.js karena ia tidak melakukan perhitungan pencahayaan.

```javascript
const material =
  new THREE.MeshBasicMaterial({
    color: 0x00aaff
  });
```

Kode ini membuat objek material baru. Parameter `color: 0x00aaff` menentukan warna dasar permukaan, yaitu biru-cyan. Saat material ini dipakai pada mesh, fragment yang dihasilkan pada layar akan menggunakan warna tersebut secara langsung, tanpa dipengaruhi oleh posisi `light`, intensitas cahaya, atau arah normal.

Dalam pipeline rendering, material berperan setelah vertex transformasi dan sebelum rasterisasi. Untuk `MeshBasicMaterial`, shader fragmen tidak menghitung diffuse, specular, ambient, atau shadow. Akibatnya, objek tampak seragam dan mudah dibaca, tetapi tidak memiliki kesan volume yang realistis.

Karakter ini penting karena `MeshBasicMaterial` cocok untuk:

- objek sederhana yang tidak perlu realistis,
- elemen antarmuka 3D,
- debug bentuk geometri,
- visualisasi cepat ketika fokus masih pada transformasi atau kamera.

Hal yang perlu dipahami mahasiswa adalah bahwa material bukan sekadar warna, tetapi pilihan shader yang menentukan apakah GPU perlu menghitung cahaya. Semakin sederhana material, semakin ringan proses rendering, tetapi semakin sedikit informasi bentuk yang bisa dibaca dari permukaan.

### Inti yang Harus Ditekankan

- `MeshBasicMaterial` adalah material **unlit** atau tidak dipengaruhi cahaya.
- Warna ditentukan langsung oleh properti seperti `color`, bukan oleh `light` atau normal.
- Material ini berguna untuk visualisasi sederhana, debug, dan memahami pipeline sebelum masuk ke material yang lebih kompleks.

### Transisi ke Slide Berikutnya

Setelah memahami material yang hanya menampilkan warna tetap, kita akan melihat `MeshNormalMaterial`, yaitu material yang menggunakan arah normal untuk memberi warna permukaan sehingga bentuk geometri lebih mudah diamati.

---

## Slide 032 - MeshNormalMaterial

### Narasi

Setelah `MeshBasicMaterial` yang menampilkan warna tetap tanpa pengaruh cahaya, kita masuk ke material yang lebih diagnostik: `MeshNormalMaterial`.

```javascript
const material =
  new THREE.MeshNormalMaterial();
```

Material ini tidak dimaksudkan untuk memberi tampilan akhir yang realistis. Fungsinya adalah membantu kita melihat **arah normal** pada permukaan objek.

Dalam rendering, **normal** adalah vektor yang menunjukkan arah permukaan di setiap titik atau segitiga. Nilai normal sangat penting karena menjadi dasar perhitungan pencahayaan, shading, dan orientasi permukaan.

Pada `MeshNormalMaterial`, warna yang muncul bukan berasal dari properti `color` yang kita atur, melainkan dari **arah normal** itu sendiri. Komponen arah normal dipetakan ke channel warna, sehingga permukaan yang menghadap ke arah berbeda akan tampak dengan warna berbeda.

Secara visual, kita bisa membaca bentuk geometry dari pola warnanya:

- Permukaan yang menghadap ke arah sama cenderung memiliki warna yang seragam.
- Perubahan warna yang halus menunjukkan permukaan yang mulus atau normal yang smooth.
- Warna yang berubah tajam antar segitiga dapat menunjukkan normal per face atau permukaan yang flat.
- Warna yang tidak wajar bisa menjadi indikasi normal terbalik, normal hilang, atau geometry yang perlu diperiksa.

Karena itu, material ini sangat berguna untuk **debugging normal sederhana** sebelum kita masuk ke material yang bergantung pada cahaya. Jika normal salah, hasil lighting pada material berikutnya juga akan salah.

Dalam pipeline rendering, material ini bekerja pada tahap fragment/shading: setelah vertex diproses dan pixel dirasterisasi, shader material ini menampilkan informasi normal sebagai warna, bukan melakukan perhitungan diffuse lighting.

Sebelum lanjut, yang perlu dipahami mahasiswa adalah bahwa `MeshNormalMaterial` adalah alat inspeksi geometri, bukan material visual akhir. Ia membantu memastikan bahwa bentuk mesh dan arah normalnya sudah benar.

### Inti yang Harus Ditekankan

- `MeshNormalMaterial` menampilkan warna berdasarkan **arah normal**, bukan warna material biasa.
- Material ini berguna untuk memeriksa bentuk geometry, smoothness, dan debugging normal.
- Normal yang benar sangat penting sebelum menggunakan material yang bergantung pada lighting.
- `MeshNormalMaterial` tidak dimaksudkan sebagai material akhir untuk tampilan realistis.

### Transisi ke Slide Berikutnya

Setelah kita bisa memeriksa normal menggunakan `MeshNormalMaterial`, langkah berikutnya adalah melihat bagaimana material mulai merespons cahaya. Pada slide berikutnya, kita akan membahas `MeshLambertMaterial`, yaitu material yang menggunakan diffuse lighting dan cocok untuk scene sederhana.

---

## Slide 033 - MeshLambertMaterial

### Narasi

Setelah `MeshNormalMaterial` yang menampilkan warna berdasarkan arah normal, kita masuk ke material yang lebih dekat dengan tampilan objek yang disinari. `MeshLambertMaterial` adalah material dasar dalam Three.js yang digunakan ketika kita ingin objek memiliki warna tertentu dan tetap bereaksi terhadap cahaya.

```javascript
const material =
  new THREE.MeshLambertMaterial({
    color: 0x44aa88
  });
```

Pada kode di atas, kita membuat material baru dengan properti `color` bernilai `0x44aa88`. Nilai tersebut adalah warna dasar objek, biasanya berupa warna heksadesimal. Warna ini bukan satu-satunya penentu tampilan akhir, karena material ini juga dipengaruhi oleh pencahayaan diffuse dari scene.

Secara intuitif, bayangkan sebuah permukaan yang tidak mengkilap. Cahaya yang mengenai permukaan akan diserap dan dipantulkan secara merata, sehingga bagian yang menghadap cahaya tampak lebih terang, sedangkan bagian yang membelakangi cahaya tampak lebih gelap. `MeshLambertMaterial` bekerja pada prinsip ini: ia menghitung efek **diffuse lighting** berdasarkan orientasi permukaan terhadap sumber cahaya.

Dalam konteks rendering pipeline, material ini berperan setelah geometri sudah diproses oleh transformasi, kamera, dan rasterisasi. Saat fragmen atau piksel objek dievaluasi, material menentukan bagaimana warna dasar dan cahaya digabungkan menjadi warna akhir yang ditampilkan. Karena itu, pemilihan material sangat menentukan apakah scene terlihat datar, natural, atau hanya untuk debugging.

`MeshLambertMaterial` cocok untuk scene sederhana karena memberikan kesan pencahayaan yang cukup tanpa perlu menghitung detail highlight yang lebih kompleks. Untuk objek seperti dinding, lantai, benda matte, atau prototipe visual, material ini sering menjadi pilihan awal yang mudah dan efisien.

Sebelum lanjut, yang perlu dipahami adalah perbedaan antara warna material dan warna hasil render. `color` adalah input material, sedangkan tampilan akhir bergantung pada cahaya yang ada di scene. Jika scene tidak memiliki cahaya yang sesuai, objek mungkin terlihat gelap atau tidak sesuai ekspektasi.

### Inti yang Harus Ditekankan

- `MeshLambertMaterial` adalah material yang merespons **diffuse lighting**.
- Properti `color` menentukan warna dasar objek, tetapi warna akhir dipengaruhi oleh pencahayaan scene.
- Material ini cocok untuk scene sederhana dan objek yang tidak membutuhkan highlight specular.
- Dalam pipeline, material berperan pada tahap shading setelah geometri dan rasterisasi.

### Transisi ke Slide Berikutnya

Jika `MeshLambertMaterial` memberi kesan permukaan yang lebih matte, pada slide berikutnya kita akan melihat `MeshPhongMaterial`, yang menambahkan highlight specular-like sehingga objek tampak lebih mengkilap.

---

## Slide 034 - MeshPhongMaterial

### Narasi

Setelah material Lambert yang terutama menampilkan warna diffuse, kita lanjut ke `MeshPhongMaterial`. Material ini masih berbasis lighting, tetapi menambahkan komponen highlight yang membuat permukaan terlihat lebih mengkilap.

```javascript
const material =
  new THREE.MeshPhongMaterial({
    color: 0x4488ff,
    shininess: 60
  });
```

Pada kode di atas, `new THREE.MeshPhongMaterial` membuat objek material baru. Properti `color` menentukan warna dasar objek, yaitu warna diffuse yang terlihat ketika cahaya mengenai permukaan. Nilai `0x4488ff` menghasilkan warna biru.

Properti `shininess` mengatur karakter highlight specular pada material. Semakin besar nilai `shininess`, highlight biasanya semakin tajam dan semakin kecil. Dengan `shininess: 60`, objek akan memiliki kilau yang cukup terlihat tetapi tidak terlalu tajam.

Secara visual, jika objek diberi cahaya, kita akan melihat dua hal utama: warna diffuse dari `color`, serta titik atau area terang di sekitar area yang menghadap ke arah cahaya. Area terang inilah yang disebut **specular-like highlight**.

Dalam konteks rendering pipeline, material ini berperan pada tahap shading. Geometri sudah diproses menjadi fragmen, lalu material menentukan bagaimana fragmen tersebut diberi warna berdasarkan model pencahayaan. `MeshPhongMaterial` memberi hasil yang lebih hidup dibanding material diffuse-only, terutama untuk objek yang ingin terlihat seperti plastik, cat mengkilap, atau permukaan halus.

Sebelum lanjut, yang perlu dipahami adalah perbedaan utamanya: `MeshLambertMaterial` memberi respons diffuse, sedangkan `MeshPhongMaterial` menambahkan highlight specular-like. Parameter `shininess` adalah cara sederhana untuk mengontrol seberapa tajam kilau tersebut.

### Inti yang Harus Ditekankan

- `MeshPhongMaterial` mendukung **diffuse** dan **specular-like highlight**.
- `color` menentukan warna dasar objek, sedangkan `shininess` mengatur ketajaman highlight.
- Material ini cocok untuk objek yang ingin terlihat lebih mengkilap dibanding `MeshLambertMaterial`.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan melihat material lanjutan Three.js, yaitu `MeshStandardMaterial`, yang dikenalkan sebagai pendekatan PBR yang lebih realistis. Detail parameter PBR-nya baru dibahas pada pertemuan berikutnya.

---

## Slide 035 - Material Lanjutan

### Narasi

Setelah kita melihat material yang lebih sederhana, ada satu kelas material lain di Three.js yang perlu kita kenali, yaitu:

```text
MeshStandardMaterial
```

Material ini digunakan untuk pendekatan **PBR**, atau *physically based rendering*. Pada level pengantar, yang penting dipahami adalah `MeshStandardMaterial` adalah material yang perilakunya lebih mendekati cara permukaan fisik berinteraksi dengan cahaya.

Artinya, material ini cenderung menghasilkan tampilan yang lebih realistis dan konsisten ketika pencahayaan berubah. Dalam konteks **rendering pipeline**, material tetap menjadi bagian yang menentukan bagaimana warna dan pencahayaan dihitung oleh **shader** di GPU. Namun, pada pertemuan ini kita belum perlu masuk ke detail parameter fisiknya.

Pada **Pertemuan 6**, kita cukup mengenali `MeshStandardMaterial` sebagai material yang lebih realistis secara fisik. Detail parameter **PBR** akan dibahas pada **Pertemuan 7**, jadi untuk sekarang kita cukup memahami posisinya sebagai material lanjutan dalam Three.js.

Yang perlu diingat adalah, material hanya mendeskripsikan sifat permukaan. Untuk menampilkan objek, kita tetap membutuhkan **geometri** dan **material** yang digabungkan menjadi **mesh**.

### Inti yang Harus Ditekankan

- `MeshStandardMaterial` adalah material Three.js untuk pendekatan **PBR**.
- Pada Pertemuan 6, material ini cukup dikenali sebagai material yang lebih realistis secara fisik.
- Detail parameter PBR akan dibahas pada Pertemuan 7.
- Material berperan dalam proses lighting dan shader, tetapi belum menjadi fokus teknis pada slide ini.

### Transisi ke Slide Berikutnya

Setelah kita mengenali jenis material, langkah berikutnya adalah memahami bagaimana material dan geometri digabungkan menjadi objek yang bisa dirender, yaitu **mesh**.

---

## Slide 036 - Geometry + Material = Mesh

### Narasi

Dalam Three.js, **geometry** dan **material** adalah dua komponen yang berbeda. **Geometry** menentukan bentuk objek, misalnya struktur titik-titik vertex, permukaan, atau bentuk dasar objek 3D. **Material** menentukan bagaimana permukaan objek tampak, misalnya warna, sifat reflektif, atau tampilan fisiknya.

Ketika keduanya digabungkan, kita mendapatkan **mesh**. Mesh adalah objek yang siap dirender karena sudah memiliki bentuk dan tampilan. Dalam alur rendering, mesh menjadi objek yang akan diproses lebih lanjut oleh kamera, transformasi, lighting, dan rasterisasi.

```javascript
const mesh =
  new THREE.Mesh(
    geometry,
    material
  );
```

Pada potongan kode ini, `THREE.Mesh` dibuat dengan dua argumen utama. Argumen pertama adalah `geometry`, yaitu bentuk yang akan digunakan. Argumen kedua adalah `material`, yaitu tampilan permukaan yang akan diterapkan pada bentuk tersebut. Hasilnya disimpan ke variabel `mesh`.

Penting untuk dipahami bahwa `mesh` belum otomatis tampil hanya karena dibuat. Mesh masih perlu menjadi bagian dari scene agar dapat dirender. Dengan kata lain, `new THREE.Mesh(...)` membuat objek, tetapi penempatannya ke dunia visual masih merupakan langkah berikutnya.

### Inti yang Harus Ditekankan

- **Geometry** menentukan bentuk objek.
- **Material** menentukan tampilan permukaan objek.
- **Mesh** adalah gabungan geometry dan material yang menjadi objek yang dapat dirender.
- `new THREE.Mesh(geometry, material)` membuat objek mesh, tetapi mesh belum tampil sebelum ditambahkan ke scene.

### Transisi ke Slide Berikutnya

Setelah mesh dibuat, langkah berikutnya adalah menambahkan mesh ke scene. Pada slide berikutnya, kita akan melihat bagaimana `scene.add(mesh)` membuat mesh menjadi bagian dari scene yang dapat dirender.

---

## Slide 037 - Menambahkan Mesh ke Scene

### Narasi

Pada tahap sebelumnya, kita sudah membentuk sebuah objek 3D dengan menggabungkan `geometry` dan `material` menjadi `mesh`. Namun, `mesh` yang baru dibuat masih berada di memori program; ia belum otomatis muncul di layar.

```javascript
scene.add(
  mesh
);
```

Baris ini menambahkan `mesh` ke dalam **`scene`**. Dalam Three.js, **`scene`** dapat dipahami sebagai wadah atau struktur yang berisi objek-objek visual yang ingin ditampilkan. Dengan memanggil `scene.add(mesh)`, kita mendaftarkan **`mesh`** sebagai bagian dari dunia 3D yang akan diproses oleh renderer.

Secara intuitif, **`scene`** seperti panggung. **`mesh`** adalah objek yang sudah siap tampil, tetapi ia harus diletakkan di panggung tersebut agar bisa dilihat. Jika `mesh` tidak ditambahkan ke `scene`, objek itu tetap ada sebagai data, tetapi tidak ikut dalam proses rendering.

Dalam alur rendering, renderer akan membaca isi **`scene`** untuk menentukan objek apa saja yang perlu digambar. Setelah `mesh` menjadi bagian dari **`scene`**, ia dapat dirender selama kondisi tampilan lainnya juga terpenuhi, misalnya posisi kamera dan ukuran layar.

Inti yang perlu dipahami di sini adalah: membuat `mesh` dan menambahkan `mesh` ke `scene` adalah dua langkah yang berbeda. **`mesh`** menentukan bentuk dan penampilannya, sedangkan **`scene`** menentukan apakah objek tersebut ikut masuk ke dunia yang akan dirender.

### Inti yang Harus Ditekankan

- `scene.add(mesh)` membuat `mesh` menjadi anggota `scene`.
- `mesh` yang belum ditambahkan ke `scene` tidak ikut dirender.
- `scene` berfungsi sebagai wadah objek visual yang akan diproses oleh renderer.
- Langkah ini menghubungkan objek 3D dengan pipeline rendering.

### Transisi ke Slide Berikutnya

Setelah `mesh` masuk ke `scene`, langkah berikutnya adalah mengatur posisinya di ruang 3D melalui **transform object**, seperti `position`, `rotation`, dan `scale`.

---

## Slide 038 - Transform Object

### Narasi

Setelah mesh ditambahkan ke scene, langkah berikutnya adalah menentukan di mana objek itu berada. Dalam Three.js, setiap mesh memiliki **transform** yang menggambarkan posisi, orientasi, dan ukurannya dalam scene. Komponen transform yang paling dasar adalah:

- `position` — menentukan letak objek pada sumbu `x`, `y`, dan `z`.
- `rotation` — menentukan orientasi atau arah objek.
- `scale` — menentukan ukuran relatif objek.

Pada slide ini kita fokus pada `position`, karena ini adalah transform pertama yang biasanya kita atur setelah membuat mesh.

```javascript
mesh.position.set(
  1, 0, 0
);
```

Baris kode di atas mengubah posisi mesh menjadi koordinat `(1, 0, 0)`. Artinya, mesh dipindahkan satu satuan sepanjang sumbu `x`, sementara nilai `y` dan `z` tetap nol. Jika sebelumnya mesh berada di titik asal scene, yaitu `(0, 0, 0)`, maka setelah kode ini dijalankan mesh akan bergeser ke posisi baru sesuai nilai `x` tersebut.

Penting untuk dipahami bahwa `mesh.position` bukan sekadar angka tunggal, melainkan sebuah vektor tiga dimensi. Karena itu, metode `.set()` menerima tiga parameter: `x`, `y`, dan `z`. Dengan cara ini, kita dapat menempatkan objek secara eksplisit dalam ruang scene sebelum dirender.

Dalam konteks rendering pipeline, transform objek berperan sebelum vertex diproses lebih lanjut. Objek yang didefinisikan dalam koordinat lokalnya perlu dipindahkan ke posisi yang sesuai dalam scene agar kamera dapat melihatnya pada tempat yang benar. Three.js membantu mengelola transform ini secara otomatis, sehingga kita cukup mengatur properti `position`, `rotation`, dan `scale` pada mesh.

Sebelum lanjut, mahasiswa perlu memahami bahwa mengubah `position` akan mengubah lokasi objek, bukan mengubah bentuk geometri dasarnya. Geometri mesh tetap sama; yang berubah adalah tempat objek berada dalam scene.

### Inti yang Harus Ditekankan

- Mesh memiliki tiga komponen transform utama: `position`, `rotation`, dan `scale`.
- `mesh.position.set(1, 0, 0)` memindahkan mesh ke koordinat `x = 1`, `y = 0`, `z = 0`.
- `position` adalah vektor 3D yang menentukan lokasi objek dalam scene.
- Transform menentukan bagaimana objek ditempatkan sebelum proses rendering lebih lanjut.

### Transisi ke Slide Berikutnya

Setelah memahami cara memindahkan objek dengan `position`, langkah berikutnya adalah mengatur orientasi dan ukuran objek melalui `rotation` dan `scale`.

---

## Slide 039 - Rotation dan Scale

### Narasi

Setelah memindahkan objek dengan `position`, kita juga perlu mengatur orientasi dan ukuran objek. Dua properti penting tersebut adalah `rotation` dan `scale`.

```javascript
mesh.rotation.y =
  Math.PI / 4;

mesh.scale.set(
  1.5,
  1.0,
  0.5
);
```

Baris pertama mengatur **rotasi** pada sumbu `y`. Nilai `Math.PI / 4` setara dengan 45 derajat, sehingga objek akan berputar di sekitar sumbu vertikal. Dalam grafika komputer, rotasi penting karena menentukan bagaimana objek menghadap kamera, pencahayaan, atau objek lain.

Baris kedua mengatur **skala** objek secara tidak seragam. Nilai `1.5` memperbesar ukuran pada sumbu `x`, nilai `1.0` mempertahankan ukuran pada sumbu `y`, dan nilai `0.5` mengecilkan ukuran pada sumbu `z`. Dengan cara ini, bentuk objek dapat diregangkan atau dipipihkan tanpa mengubah geometri dasarnya.

Poin penting di sini adalah kita tidak perlu menyusun matriks transformasi secara manual. Three.js mengelola **Model Matrix** secara otomatis dari nilai `position`, `rotation`, dan `scale` yang kita atur. Model Matrix membantu mengubah objek dari ruang lokalnya ke ruang dunia sebelum proses rendering selanjutnya.

Sebelum lanjut, pastikan mahasiswa memahami bahwa `rotation` dan `scale` bukan sekadar angka bebas: keduanya mengubah tampilan objek di layar dan memengaruhi hasil akhir rendering.

### Inti yang Harus Ditekankan

- `mesh.rotation.y = Math.PI / 4` memutar objek sebesar 45 derajat pada sumbu `y`.
- `mesh.scale.set(1.5, 1.0, 0.5)` melakukan skala tidak seragam: memperbesar `x`, mempertahankan `y`, dan mengecilkan `z`.
- Three.js secara otomatis menyusun **Model Matrix** dari `position`, `rotation`, dan `scale`.
- Transformasi ini penting karena menentukan posisi, orientasi, dan ukuran objek sebelum rendering.

### Transisi ke Slide Berikutnya

Karena `Mesh` memiliki `position`, `rotation`, dan `scale`, kita akan melihat konsep dasar yang lebih umum pada slide berikutnya, yaitu `Object3D`, yang menjadi dasar bersama bagi `Mesh`, `Camera`, dan `Light`.

---

## Slide 040 - Object3D

### Narasi

Setelah kita melihat cara mengatur `rotation` dan `scale` pada sebuah `Mesh`, langkah berikutnya adalah memahami dari mana sifat-sifat transformasi itu berasal. Dalam Three.js, banyak objek di scene tidak berdiri sendiri sebagai tipe yang sepenuhnya berbeda; mereka berbagi dasar yang sama, yaitu **Object3D**.

```text
Object3D
```

`Object3D` dapat kita anggap sebagai "kerangka" umum untuk objek yang bisa ditempatkan dalam ruang 3D. Ia menyediakan properti dasar seperti `position`, `rotation`, dan `scale`. Artinya, ketika kita membuat `Mesh`, `Camera`, atau `Light`, objek tersebut tetap memiliki cara yang sama untuk diposisikan, diputar, dan diperbesar atau diperkecil.

Hal ini penting karena rendering pipeline tidak hanya membutuhkan geometri, tetapi juga informasi posisi dan orientasi objek relatif terhadap kamera dan dunia. `position` menentukan di mana objek berada, `rotation` menentukan arah menghadapnya, dan `scale` menentukan ukuran akhirnya. Dengan konsep ini, Three.js dapat mengelola transformasi secara konsisten, termasuk pembentukan matriks transformasi yang dibutuhkan untuk menampilkan objek pada layar.

Perhatikan bahwa `Mesh`, `Camera`, dan `Light` memiliki peran berbeda: `Mesh` menampilkan geometri, `Camera` menentukan sudut pandang, dan `Light` memengaruhi pencahayaan material. Namun, ketiganya tetap bisa diatur posisinya dengan pola yang sama karena semuanya berakar pada `Object3D`. Ini membuat struktur objek Three.js lebih mudah dipahami: kita tidak perlu mengingat transformasi yang berbeda untuk setiap jenis objek.

Untuk saat ini, kita cukup memahami bahwa `Object3D` adalah dasar transformasi lokal. Konsep **hierarchy parent-child**, di mana transformasi objek anak dipengaruhi oleh objek induk, akan dibahas pada Pertemuan 7. Jadi, pada slide ini kita fokus pada satu ide utama: banyak objek Three.js berbagi `position`, `rotation`, dan `scale` melalui `Object3D`.

### Inti yang Harus Ditekankan

- **Object3D** adalah konsep dasar yang dimiliki oleh `Mesh`, `Camera`, dan `Light`.
- `position`, `rotation`, dan `scale` adalah properti transformasi utama yang disediakan oleh `Object3D`.
- Konsep ini penting karena transformasi menentukan bagaimana objek ditampilkan relatif terhadap kamera, geometri, dan pencahayaan.
- Hierarchy parent-child belum dibahas di sini; cukup dipahami bahwa `Object3D` menjadi dasar sebelum transformasi hierarkis dibahas pada Pertemuan 7.

### Transisi ke Slide Berikutnya

Setelah kita memahami bahwa objek seperti `Mesh`, `Camera`, dan `Light` dapat diposisikan melalui `Object3D`, langkah berikutnya adalah melihat salah satu jenis objek yang sangat memengaruhi tampilan visual, yaitu `Light`.

---

## Slide 041 - Light

### Narasi

Setelah kita melihat bahwa `Mesh`, `Camera`, dan `Light` sama-sama berakar pada `Object3D`, kita masuk ke peran `Light` dalam adegan Three.js. `Light` bukan sekadar objek tambahan; ia menentukan bagaimana permukaan objek terlihat ketika dirender.

Dalam grafika komputer, material pada objek biasanya tidak cukup hanya memiliki warna atau tekstur. Untuk menghasilkan kesan terang dan gelap yang wajar, sistem rendering membutuhkan sumber cahaya. Karena itu, pada slide ini kita menekankan bahwa **material tertentu membutuhkan `Light`**.

Jenis `Light` yang umum dalam Three.js adalah:

- `AmbientLight`
- `DirectionalLight`
- `PointLight`
- `SpotLight`
- `HemisphereLight`

Kita tidak perlu langsung menghafal perilaku teknis masing-masing pada tahap ini. Yang penting dipahami adalah bahwa setiap jenis cahaya memiliki karakter pencahayaan yang berbeda, dan pemilihan jenis cahaya akan memengaruhi tampilan akhir adegan.

Pada pertemuan ini, fokus kita adalah **konfigurasi dasar `Light`**. Artinya, kita akan melihat bagaimana cahaya dibuat, diberi parameter awal, dan dimasukkan ke dalam adegan agar objek dapat terlihat secara wajar.

Sebelum lanjut, mahasiswa perlu memahami dua hal. Pertama, `Light` adalah bagian dari adegan 3D yang memengaruhi rendering material. Kedua, pemilihan jenis `Light` bukan detail kecil, tetapi keputusan visual yang menentukan apakah adegan terlihat terlalu gelap, terlalu datar, atau memiliki pencahayaan yang lebih seimbang.

### Inti yang Harus Ditekankan

- `Light` dibutuhkan oleh material tertentu agar objek memiliki pencahayaan yang benar.
- Jenis umum `Light` dalam Three.js meliputi `AmbientLight`, `DirectionalLight`, `PointLight`, `SpotLight`, dan `HemisphereLight`.
- Pertemuan ini berfokus pada konfigurasi dasar `Light`, bukan langsung pada detail teknis setiap jenis cahaya.

### Transisi ke Slide Berikutnya

Sebagai langkah pertama, kita akan mulai dari `AmbientLight`, yaitu jenis cahaya yang paling sederhana untuk memberi pencahayaan dasar pada adegan.

---

## Slide 042 - AmbientLight

### Narasi

Setelah kita melihat bahwa beberapa material membutuhkan **Light**, pada slide ini kita fokus pada jenis cahaya paling sederhana: **AmbientLight**.

```javascript
const ambient =
  new THREE.AmbientLight(
    0xffffff,
    0.3
  );
```

Kode ini membuat objek cahaya ambient di Three.js. Parameter pertama, `0xffffff`, adalah warna cahaya, yaitu putih. Parameter kedua, `0.3`, adalah **intensity** atau kekuatan cahaya. Nilai ini relatif kecil, sehingga cahaya ambient berfungsi sebagai pencahayaan dasar, bukan sebagai sumber cahaya utama.

Hasil dari kode tersebut adalah objek `ambient` yang siap digunakan dalam scene. Biasanya, objek light ini kemudian ditambahkan ke scene agar pencahayaannya aktif memengaruhi material yang mendukung pencahayaan.

Secara konsep, **AmbientLight** bersifat **global**. Artinya, cahaya ini tidak datang dari satu titik tertentu dan tidak memiliki arah yang perlu kita atur. Tidak seperti lampu meja atau matahari, ambient light menyinari seluruh objek secara merata. Karena itu, kita tidak perlu mengatur `position` atau arah cahaya pada objek ini.

Dalam konteks grafika komputer, ambient light penting karena membantu menyimulasikan cahaya tidak langsung yang memantul dari lingkungan. Tanpa ambient light, bagian objek yang tidak terkena cahaya langsung bisa terlihat terlalu gelap atau bahkan hitam. Dengan ambient light, objek tetap memiliki visibilitas dasar, sehingga bentuk dan warna material lebih mudah dibaca.

Dalam pipeline rendering, ambient light berperan pada tahap **lighting**: ia menambah kontribusi cahaya yang hampir konstan pada material, tanpa bergantung pada arah permukaan atau posisi sumber cahaya.

Kita bisa memahami karakternya sebagai berikut:

- **Global**: memengaruhi seluruh scene secara merata.
- **Tidak memiliki arah**: tidak ada posisi atau arah yang perlu diset.
- **Memberi pencahayaan dasar**: menjaga objek tetap terlihat pada area yang tidak terkena cahaya langsung.

Sebelum lanjut, hal penting yang perlu dipahami adalah ambient light bukan pengganti cahaya utama. Ia hanya memberikan lapisan pencahayaan minimum. Untuk menghasilkan bayangan, arah, dan kontras, kita masih membutuhkan jenis light lain yang memiliki arah atau posisi.

### Inti yang Harus Ditekankan

- `THREE.AmbientLight` digunakan untuk membuat cahaya ambient dengan warna dan `intensity`.
- Cahaya ambient bersifat global, tidak memiliki arah, dan tidak memerlukan pengaturan posisi.
- Fungsinya adalah memberi pencahayaan dasar agar objek tidak terlalu gelap.
- Ambient light biasanya dikombinasikan dengan light lain, bukan digunakan sebagai satu-satunya sumber cahaya utama.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat **DirectionalLight**, yaitu jenis cahaya yang memiliki arah dan cocok untuk mensimulasikan sumber cahaya yang berada jauh, seperti matahari.

---

## Slide 043 - DirectionalLight

### Narasi

Setelah cahaya ambient yang memberi dasar terang, kita masuk ke **DirectionalLight**. Cahaya ini mensimulasikan sumber cahaya yang sangat jauh, misalnya matahari, sehingga berkas cahayanya dianggap hampir sejajar.

```javascript
const light =
  new THREE.DirectionalLight(
    0xffffff,
    1.5
  );

light.position.set(
  3, 5, 2
);
```

Pada kode di atas, `new THREE.DirectionalLight(0xffffff, 1.5)` membuat cahaya berwarna putih dengan intensitas `1.5`. Nilai intensitas menentukan seberapa kuat cahaya tersebut memengaruhi objek yang diterangi.

Baris `light.position.set(3, 5, 2);` bukan berarti lampu berada di titik fisik dekat objek seperti lampu meja. Untuk **DirectionalLight**, posisi ini lebih berperan menentukan **arah datang cahaya**. Dalam Three.js, arah cahaya dihitung dari posisi light menuju `target`, dan secara default target berada di `(0, 0, 0)`. Jadi, posisi `(3, 5, 2)` menghasilkan arah cahaya yang menuju ke arah origin.

Secara visual, kita bisa membayangkannya seperti matahari: karena jaraknya jauh, perubahan posisi objek di scene tidak mengubah arah berkas cahaya secara signifikan. Semua permukaan yang menghadap ke arah cahaya akan lebih terang, sedangkan permukaan yang membelakangi cahaya akan lebih gelap.

Penting untuk dipahami bahwa **DirectionalLight** berbeda dari `AmbientLight`. Ambient memberi pencahayaan merata tanpa arah, sedangkan directional memberi **arah** sehingga objek mulai terlihat memiliki bentuk, kedalaman, dan perbedaan terang pada sisi-sisinya.

Dalam konteks rendering pipeline, cahaya ini digunakan pada tahap **lighting** untuk menghitung warna objek. Secara sederhana, shader akan mempertimbangkan arah cahaya dan normal permukaan untuk menentukan seberapa terang suatu fragment.

Sebelum lanjut, pastikan mahasiswa memahami bahwa `position` pada `DirectionalLight` adalah kunci untuk mengatur arah cahaya, bukan sekadar menempatkan sumber cahaya di ruang scene.

### Inti yang Harus Ditekankan

- `THREE.DirectionalLight` mensimulasikan sumber cahaya jauh dengan berkas cahaya yang hampir sejajar.
- `0xffffff` adalah warna cahaya putih, dan `1.5` adalah intensitas cahaya.
- `light.position.set(3, 5, 2)` menentukan arah cahaya relatif terhadap target, dengan default target di origin.
- Berbeda dengan `AmbientLight`, directional light memberi arah sehingga objek terlihat lebih tiga dimensi.
- Cahaya ini penting pada tahap lighting karena memengaruhi terang/gelapnya permukaan berdasarkan orientasi normal.

### Transisi ke Slide Berikutnya

Setelah kita tahu bagaimana cahaya diarahkan, langkah berikutnya adalah memastikan objek memang mampu merespons cahaya. Pada slide berikutnya, kita akan melihat peran material, seperti `MeshBasicMaterial`, `MeshLambertMaterial`, dan `MeshPhongMaterial`, dalam menentukan apakah objek menerima pencahayaan atau tidak.

---

## Slide 044 - Material dan Light

### Narasi

Dalam Three.js, tampilan sebuah objek tidak hanya ditentukan oleh bentuk geometrinya, tetapi juga oleh **material** yang diberikan. Material menentukan bagaimana permukaan objek dirender, termasuk apakah permukaan tersebut bereaksi terhadap cahaya atau tidak.

Ringkasan pada slide ini adalah:

```text
MeshBasicMaterial
→ tidak membutuhkan light

MeshLambertMaterial
→ membutuhkan light

MeshPhongMaterial
→ membutuhkan light
```

Artinya, `MeshBasicMaterial` adalah material **unlit**. Material ini menampilkan tampilan dasar tanpa perhitungan light, sehingga cocok untuk objek yang tidak perlu shading atau pencahayaan.

Sebaliknya, `MeshLambertMaterial` dan `MeshPhongMaterial` adalah material **lit**. Keduanya membutuhkan light di scene agar tampilannya terlihat sesuai. Tanpa light yang tepat, objek yang menggunakan material ini bisa tampak gelap atau tidak sesuai harapan.

Hal ini penting dalam rendering pipeline karena material menentukan bagaimana fragment objek dihitung sebelum menjadi pixel di layar. Material unlit tidak bergantung pada sumber cahaya, sedangkan material lit baru menghasilkan pencahayaan yang benar jika ada light yang tersedia.

Kaitannya dengan `DirectionalLight` yang sudah kita lihat sebelumnya, light tersebut dapat menjadi sumber cahaya untuk material lit. Jika light tidak ada, intensitasnya terlalu kecil, posisinya tidak tepat, atau material yang dipilih salah, object bisa tampak gelap.

Karena itu, ketika object gelap, kita perlu memeriksa **kombinasi material dan light**. Bukan hanya memastikan ada light, tetapi juga memastikan material yang dipakai memang membutuhkan atau tidak membutuhkan light.

### Inti yang Harus Ditekankan

- `MeshBasicMaterial` adalah material **unlit**: tidak membutuhkan light.
- `MeshLambertMaterial` dan `MeshPhongMaterial` adalah material **lit**: membutuhkan light agar tampil sesuai.
- Jika object gelap, periksa **material** dan **light** secara bersamaan, bukan hanya salah satu.

### Transisi ke Slide Berikutnya

Setelah material dan light sudah benar, objek masih bisa dibuat lebih jelas posisinya terhadap lingkungan. Selanjutnya kita akan melihat **shadow dasar**, yang membantu menunjukkan kedalaman dan hubungan objek dengan ground.

---

## Slide 045 - Shadow Dasar

### Narasi

Bayangan adalah salah satu sinyal visual yang paling cepat membuat adegan 3D terasa meyakinkan. Tanpa bayangan, objek bisa terlihat melayang, terpisah dari lantai, atau sulit dibaca posisinya. Dengan bayangan, kita bisa melihat **depth**, posisi objek terhadap **ground**, dan hubungan antarobjek dalam adegan.

Dalam konteks **rendering pipeline**, bayangan bukan sekadar gambar gelap yang ditempel di bawah objek. Ia merupakan hasil dari proses tambahan yang dilakukan renderer, biasanya melalui mekanisme **shadow map**. Karena itu, di Three.js kita perlu mengaktifkan kemampuan ini secara eksplisit.

```javascript
renderer.shadowMap.enabled =
  true;
```

Baris di atas adalah langkah pertama yang paling penting. `renderer` adalah objek renderer WebGL yang kita buat di Three.js. `shadowMap` adalah bagian konfigurasi yang mengatur apakah renderer akan menghitung dan menampilkan bayangan. Nilai `true` berarti sistem shadow diaktifkan.

Secara intuisi, baris ini seperti menyalakan saklar utama. Jika `renderer.shadowMap.enabled` masih `false`, maka meskipun kita nanti mengatur light atau objek, renderer tidak akan menjalankan proses shadow. Karena itu, mahasiswa perlu memahami bahwa ini adalah prasyarat global sebelum konfigurasi bayangan yang lebih detail.

Namun, satu baris ini belum cukup untuk membuat bayangan langsung muncul. Yang perlu diingat pada tahap ini adalah: **shadow membutuhkan beberapa pihak yang bekerja bersama**, yaitu renderer yang siap, sumber cahaya yang dapat menghasilkan bayangan, objek yang dapat melempar bayangan, dan permukaan yang dapat menerima bayangan.

### Inti yang Harus Ditekankan

- **Shadow** membantu menunjukkan **depth**, posisi objek, dan hubungan objek dengan **ground**.
- `renderer.shadowMap.enabled = true` adalah **saklar utama** untuk mengaktifkan sistem shadow pada renderer.
- Bayangan tidak muncul hanya karena renderer diaktifkan; masih diperlukan konfigurasi pada **light** dan **object** yang relevan.

### Transisi ke Slide Berikutnya

Setelah renderer siap menerima proses shadow, langkah berikutnya adalah menentukan siapa yang menghasilkan bayangan dan permukaan mana yang menerimanya.

---

## Slide 046 - Cast dan Receive Shadow

### Narasi

Setelah `renderer.shadowMap.enabled = true` pada langkah sebelumnya, shadow masih belum otomatis muncul. Renderer hanya menyiapkan kemampuan shadow; kita juga harus menentukan objek mana yang **mengirim bayangan** dan permukaan mana yang **menerima bayangan**.

```javascript
light.castShadow = true;

cube.castShadow = true;

ground.receiveShadow = true;
```

Tiga baris ini memiliki peran yang berbeda:

1. `light.castShadow = true;`  
   Baris ini membuat **light** ikut menghasilkan shadow map. Artinya, light tidak hanya menerangi scene, tetapi juga menghitung area yang terhalang oleh objek.

2. `cube.castShadow = true;`  
   Baris ini membuat **cube** menjadi sumber bayangan. Cube akan "memblok" cahaya dari light, sehingga area di belakangnya relatif terhadap light dapat menjadi gelap.

3. `ground.receiveShadow = true;`  
   Baris ini membuat **ground** menampilkan bayangan. Ground tidak cukup hanya menerangi; ia harus diberi izin untuk menerima hasil shadow map dan menggelapkan bagian yang seharusnya tertutup bayangan.

Secara visual, alurnya sederhana: **light** menghasilkan informasi bayangan, **cube** menghalangi cahaya, dan **ground** menampilkan bayangan tersebut. Jika salah satu dari tiga konfigurasi ini tidak diaktifkan, hasil yang kita lihat bisa tidak sesuai harapan.

Misalnya, jika `light.castShadow` masih `false`, light tidak akan menghitung shadow meskipun cube dan ground sudah benar. Jika `cube.castShadow` masih `false`, cube tidak akan menghalangi cahaya, sehingga tidak ada bayangan yang terbentuk dari cube. Jika `ground.receiveShadow` masih `false`, ground tidak akan menampilkan bayangan meskipun shadow map sudah tersedia.

Intinya, dalam Three.js, shadow adalah hasil kerja sama antara **light**, **objek yang memancarkan bayangan**, dan **permukaan penerima**. Mahasiswa perlu memahami bahwa `castShadow` dan `receiveShadow` bukan sekadar properti dekoratif, tetapi penanda peran objek dalam pipeline shadow rendering.

### Inti yang Harus Ditekankan

- `light.castShadow = true;` membuat light menghasilkan shadow map.
- `cube.castShadow = true;` membuat cube menghalangi cahaya dan menghasilkan bayangan.
- `ground.receiveShadow = true;` membuat ground menampilkan bayangan.
- Shadow baru muncul jika light, objek pengirim, dan permukaan penerima semuanya dikonfigurasi dengan benar.

### Transisi ke Slide Berikutnya

Setelah shadow sudah bisa muncul, langkah berikutnya adalah membuat scene hidup dengan **animation loop**, yaitu proses render yang terus berjalan setiap frame.

---

## Slide 047 - Animation Loop

### Narasi

Dalam Three.js, sebuah scene tidak cukup hanya dibuat sekali. Agar objek dapat bergerak, kamera dapat berubah, dan hasil render dapat diperbarui, kita membutuhkan **animation loop**. Loop ini menjalankan pembaruan dan rendering secara berulang selama halaman masih aktif.

```javascript
function animate() {
  requestAnimationFrame(animate);

  mesh.rotation.y += 0.01;

  renderer.render(
    scene,
    camera
  );
}

animate();
```

Pada potongan kode ini, `mesh`, `scene`, `camera`, dan `renderer` diasumsikan sudah dibuat sebelumnya. Fungsi `animate()` adalah inti dari siklus animasi. Baris pertama, `requestAnimationFrame(animate)`, meminta browser untuk memanggil kembali fungsi `animate()` sebelum frame berikutnya digambar. Dengan cara ini, fungsi tersebut akan terus dipanggil secara berulang, membentuk loop yang mengikuti siklus refresh layar.

Setelah permintaan frame berikutnya dibuat, kita memperbarui state scene. Baris `mesh.rotation.y += 0.01;` memutar objek `mesh` sedikit ke arah sumbu Y setiap frame. Nilai `0.01` dipilih kecil agar gerakan terlihat halus dan tidak melompat. Jika ada lebih banyak objek, kamera, atau parameter lain yang ingin dianimasikan, pembaruannya juga dilakukan di bagian ini sebelum scene digambar.

Baris `renderer.render(scene, camera);` adalah langkah yang benar-benar menggambar scene. Renderer mengambil informasi dari `scene`, yaitu kumpulan objek, material, dan light, lalu menggunakan `camera` untuk menentukan sudut pandang. Hasilnya dikirim ke GPU dan ditampilkan sebagai satu frame gambar.

Urutan eksekusinya penting:

1. `requestAnimationFrame(animate)` memastikan loop akan terus berjalan.
2. `mesh.rotation.y += 0.01` memperbarui transformasi objek.
3. `renderer.render(scene, camera)` menggambar scene dengan state terbaru.
4. `animate()` di akhir memulai loop pertama kali.

Tanpa `animate()`, scene hanya digambar sekali dan objek akan tampak statis. Dengan loop ini, setiap perubahan pada `scene` atau `camera` dapat terlihat secara real-time. Jika sebelumnya kita sudah mengaktifkan shadow pada light, mesh, dan ground, maka loop ini juga membuat shadow dapat mengikuti posisi objek yang bergerak.

### Inti yang Harus Ditekankan

- **Animation loop** adalah mekanisme yang membuat scene Three.js diperbarui dan digambar berulang kali.
- `requestAnimationFrame(animate)` adalah cara yang benar untuk membuat loop animasi karena mengikuti siklus refresh browser.
- Pembaruan objek, seperti `mesh.rotation.y += 0.01`, harus dilakukan sebelum `renderer.render(scene, camera)`.
- `renderer.render(scene, camera)` menampilkan scene dari sudut pandang kamera pada frame saat itu.
- Tanpa loop, scene hanya akan menampilkan satu frame statis.

### Transisi ke Slide Berikutnya

Setelah kita memahami bagaimana scene dibuat, shadow dikonfigurasi, dan animation loop dijalankan, langkah berikutnya adalah menggabungkan semua komponen tersebut dalam praktikum. Kita akan membangun mini scene 3D pertama dengan ground, cube, sphere, kamera, renderer, material, light, shadow, dan animation loop.

---

## Slide 048 - Praktikum: Mini 3D Scene

### Narasi

Praktikum ini menjadi titik di mana komponen-komponen yang sudah kita pelajari mulai dirakit menjadi satu adegan 3D yang benar-benar bisa dilihat. Tujuannya bukan membuat scene yang rumit, tetapi memastikan mahasiswa memahami bahwa sebuah scene 3D dalam Three.js dibangun dari beberapa bagian utama yang saling terhubung.

Pada praktikum ini, kita diminta membuat scene yang memuat **ground**, **cube**, dan **sphere**. Ketiga objek ini pada dasarnya adalah **mesh**, yaitu objek visual yang terbentuk dari **geometry** dan **material**. Ground bisa dianggap sebagai bidang dasar, cube sebagai objek geometris sederhana, dan sphere sebagai objek melengkung. Dengan menggunakan beberapa bentuk dasar, kita bisa melihat bagaimana objek berbeda ditempatkan dalam ruang 3D.

Selain objek, scene juga membutuhkan **PerspectiveCamera**. Kamera ini menentukan dari mana scene dilihat. Tanpa kamera, renderer tidak tahu sudut pandang apa yang harus digunakan. Dalam praktikum ini, kamera berperan seperti mata pengamat yang memotret scene dari posisi tertentu.

Bagian berikutnya adalah **WebGLRenderer**. Renderer inilah yang bertugas menggambar scene ke layar, biasanya melalui elemen `canvas`. Jadi, scene, kamera, dan objek hanya akan terlihat setelah renderer memanggil proses rendering. Di sinilah hubungan antara data 3D dan tampilan visual terjadi.

Kita juga diminta menggunakan **minimal dua material**. Material menentukan tampilan permukaan objek, misalnya warna, kekasaran, atau respons terhadap cahaya. Dengan dua material, mahasiswa bisa melihat perbedaan visual antarobjek, misalnya ground menggunakan material yang berbeda dengan cube atau sphere.

Untuk pencahayaan, praktikum ini menggunakan **AmbientLight** dan **DirectionalLight**. AmbientLight memberikan cahaya dasar yang merata, sehingga objek tidak sepenuhnya gelap. DirectionalLight meniru cahaya yang datang dari arah tertentu, misalnya cahaya matahari, dan sangat penting untuk membentuk bayangan. Karena slide ini juga meminta **shadow**, maka kita perlu memahami bahwa bayangan muncul ketika cahaya, objek, dan renderer diatur dengan benar.

Terakhir, scene ini perlu memiliki **animation loop**. Loop ini membuat scene tidak statis, misalnya dengan memutar salah satu objek atau memperbarui posisi kamera. Setelah setiap frame diperbarui, renderer memanggil `renderer.render(scene, camera)` agar perubahan ditampilkan. Dengan begitu, scene menjadi hidup dan siap dikembangkan lebih lanjut.

### Inti yang Harus Ditekankan

- **Scene** adalah wadah utama yang berisi objek, kamera, dan cahaya.
- **Mesh** terdiri dari **geometry** dan **material**; praktikum ini menggunakan ground, cube, dan sphere.
- **PerspectiveCamera** menentukan sudut pandang, sedangkan **WebGLRenderer** menggambar scene ke layar.
- **AmbientLight** memberi cahaya dasar, **DirectionalLight** memberi arah cahaya, dan **shadow** membuat tampilan lebih realistis.
- **Animation loop** diperlukan agar scene dapat diperbarui setiap frame.

### Transisi ke Slide Berikutnya

Setelah praktikum ini, kita akan merangkum seluruh komponen yang telah kita gunakan, yaitu scene, camera, mesh, material, light, shadow, animation loop, dan renderer, sebagai satu alur kerja dasar dalam membangun scene 3D.

---

## Slide 049 - Ringkasan Pertemuan

### Narasi

Setelah membangun mini scene, kita perlu melihat kembali struktur dasar Three.js. Pada diagram, **Scene** berfungsi sebagai container utama yang menampung elemen visual: **Camera**, **Mesh**, dan **Light**. Camera menentukan dari mana adegan dilihat, Mesh adalah objek yang bisa dirender, dan Light memberi informasi pencahayaan agar objek tidak tampak datar.

```text
Scene
├── Camera
├── Mesh
│   ├── Geometry
│   └── Material
└── Light
       ↓
Animation Loop
       ↓
WebGLRenderer
       ↓
Canvas
```

Bagian penting dari Mesh adalah **Geometry** dan **Material**. Geometry menyimpan bentuk dan koordinat objek, sedangkan Material menentukan bagaimana objek tampak, misalnya warna, tekstur, atau respons terhadap cahaya. Transform seperti posisi, rotasi, dan skala biasanya diterapkan pada objek di dalam Scene agar adegan dapat disusun dan dianimasikan.

Alur di bawah diagram menunjukkan proses rendering per frame. **Animation Loop** memperbarui keadaan scene, misalnya transformasi atau animasi. Setelah itu, `WebGLRenderer` membaca Scene dan Camera, lalu memproses objek melalui pipeline rendering untuk menghasilkan gambar pada **Canvas**. Dalam konteks GPU, renderer inilah yang menerjemahkan data scene menjadi piksel yang ditampilkan.

Sebelum lanjut ke aplikasi interaktif, mahasiswa perlu memahami bahwa Scene, Camera, Mesh, Light, dan Animation Loop bukan komponen terpisah yang berdiri sendiri, tetapi satu sistem yang saling bergantung. Jika salah satu tidak diatur dengan benar, hasil render bisa kosong, objek tidak terlihat, atau animasi tidak berjalan.

### Inti yang Harus Ditekankan

- **Scene** adalah container utama yang menampung **Camera**, **Mesh**, dan **Light**.
- **Mesh** terdiri dari **Geometry** sebagai bentuk objek dan **Material** sebagai tampilan visual.
- **Animation Loop** memperbarui scene, lalu `WebGLRenderer` merender hasilnya ke **Canvas**.
- **Transform**, **Light**, dan **Shadow** menentukan bagaimana objek diposisikan, disinari, dan ditampilkan.

### Transisi ke Slide Berikutnya

Dengan rangkuman ini, kita menutup pertemuan tentang Introduction to Three.js. Pada materi selanjutnya, kita akan melanjutkan ke **Three.js Interactive 3D Application**, di mana konsep scene, camera, mesh, light, dan animation loop akan dikembangkan menjadi aplikasi 3D yang lebih interaktif.

---

## Slide 050 - TERIMA KASIH

### Narasi

Kita telah sampai pada penutup pertemuan keenam untuk materi **Introduction to Three.js**. Pada pertemuan ini, kita telah membangun pemahaman dasar tentang bagaimana sebuah adegan 3D disusun dan digambar, mulai dari **Scene**, **Camera**, **Mesh**, **Geometry**, **Material**, **Light**, hingga **Animation Loop** yang kemudian diproses oleh `WebGLRenderer` dan ditampilkan pada `Canvas`.

Poin penting yang perlu dibawa adalah bahwa `Three.js` tidak hanya menyediakan API untuk membuat objek 3D, tetapi juga membantu kita memahami alur rendering: objek didefinisikan, posisi dan orientasinya diatur, cahaya memengaruhi tampilan material, lalu GPU merasterisasi hasil akhir ke layar. Pemahaman ini menjadi fondasi sebelum kita membangun aplikasi yang lebih interaktif.

Sebagai penutup, saya ucapkan terima kasih atas partisipasi dan perhatian selama pertemuan ini. Kita akan melanjutkan dengan materi **Three.js Interactive 3D Application**, di mana konsep-konsep yang telah dibahas akan diterapkan secara lebih nyata dalam bentuk aplikasi 3D yang dapat diinteraksikan.

### Inti yang Harus Ditekankan

- Pertemuan ini membangun dasar mental model `Three.js`: **Scene**, **Camera**, **Mesh**, **Geometry**, **Material**, **Light**, dan **Animation Loop**.
- Konsep penting bukan hanya penggunaan API, tetapi alur rendering dari objek 3D menuju tampilan akhir pada `Canvas`.
- Langkah berikutnya adalah menerapkan konsep tersebut dalam **Three.js Interactive 3D Application**.

### Transisi ke Slide Berikutnya

Karena slide ini merupakan penutup pertemuan, langkah berikutnya adalah menuju materi selanjutnya, yaitu **Three.js Interactive 3D Application**, di mana kita akan mulai menerapkan konsep dasar `Three.js` ke dalam aplikasi 3D yang lebih interaktif.
