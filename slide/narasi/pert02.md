# Narasi Grafika Komputer - Pertemuan 02

## WebGL Fundamental & GLSL Basics

Sumber: markdown/pert02.md

---

## Slide 000 - Cover

### Narasi

Selamat datang kembali pada mata kuliah **Grafika Komputer** dengan kode **EF234504**, khususnya **Pertemuan 2** yang membahas **WebGL Fundamental & GLSL Basics**. Pada pertemuan ini, kita akan mulai memasuki bagian praktis dari grafika komputer modern, yaitu bagaimana sebuah aplikasi dapat menggambar geometri langsung ke layar dengan bantuan **GPU** melalui **WebGL**.

Topik ini penting karena **WebGL** menjadi jembatan antara konsep grafika komputer dan implementasi web modern. Kita akan melihat bagaimana **canvas**, **context**, **shader**, **buffer**, dan **draw call** bekerja bersama dalam **rendering pipeline**. Pemahaman ini menjadi dasar untuk memahami objek 3D, transformasi, kamera, lighting, dan rendering real-time pada pertemuan-pertemuan berikutnya.

Materi ini disampaikan oleh **Dr. Darlis Herumurti** dari **Departemen Teknik Informatika**. Sebelum masuk ke detail teknis, kita perlu memahami gambaran umum topik yang akan dibahas, sehingga alur belajar dari konsep dasar **WebGL** menuju praktikum menjadi lebih jelas.

### Inti yang Harus Ditekankan

- Pertemuan ini berfokus pada **WebGL Fundamental** dan **GLSL Basics**.
- **WebGL** adalah antarmuka untuk menggambar geometri berbasis **GPU** di lingkungan web.
- **GLSL** adalah bahasa shader yang digunakan untuk mendefinisikan proses **vertex shader** dan **fragment shader**.
- Topik ini menjadi fondasi untuk memahami **rendering pipeline**, **buffer**, **attribute**, **uniform**, dan **draw call**.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat daftar topik yang akan dibahas pada pertemuan ini, mulai dari posisi **WebGL** dalam aplikasi grafika hingga praktikum **WebGL Primitive Playground**.

---

## Slide 001 - Topik Pembahasan

### Narasi

Pertemuan ini kita susun sebagai alur kerja dari aplikasi web menuju GPU. Poin-poin yang terlihat bukan daftar acak, melainkan urutan yang mengikuti **rendering pipeline** modern: mulai dari menyiapkan lingkungan, menyiapkan geometri, memproses data di shader, lalu memerintahkan GPU untuk menggambar.

Kita akan melihat posisi **WebGL** sebagai graphics API berbasis browser, lalu bagaimana `Canvas` dan `WebGL2 Context` menjadi pintu masuk. Setelah itu, kita masuk ke representasi geometri: **Normalized Device Coordinate**, **vertex**, **primitive**, `Typed Array`, **GPU Buffer**, dan **attribute**. Bagian ini penting karena sebelum shader berjalan, GPU harus tahu bentuk objek dan di mana posisinya berada.

Selanjutnya kita membahas **GLSL dasar**, yaitu bahasa shader yang memproses data per vertex dan per fragment. Kita akan membedakan **Vertex Shader** dan **Fragment Shader**, serta peran `uniform`, data `in` / `out`, **shader program**, **draw call**, dan **rendering loop**. Peta ini menjadi dasar sebelum praktikum **WebGL Primitive Playground**, di mana mahasiswa akan melihat bagaimana konsep-konsep tersebut dirangkai menjadi gambar yang bergerak di layar.

### Inti yang Harus Ditekankan

- Topik pertemuan mengikuti alur pipeline: `context` → `geometry` → `buffer/attribute` → `shader` → `draw call` → `rendering loop`.
- **WebGL2 Context** adalah lingkungan yang memungkinkan browser berkomunikasi dengan GPU.
- **NDC**, **vertex**, **primitive**, **buffer**, dan **attribute** adalah fondasi representasi geometri sebelum rendering.
- **Vertex Shader** dan **Fragment Shader** adalah dua tahap utama pemrosesan data di GPU.
- **Draw call** dan **rendering loop** menentukan kapan dan bagaimana objek digambar berulang kali.

### Transisi ke Slide Berikutnya

Dengan peta topik ini, kita lanjut ke capaian pembelajaran agar mahasiswa tahu kemampuan apa yang harus dikuasai setelah pertemuan ini.

---

## Slide 002 - Capaian Pembelajaran

### Narasi

Bagian ini menetapkan **Capaian Pembelajaran** untuk pertemuan kedua. Tujuannya bukan sekadar memberi daftar topik, tetapi memberi peta kompetensi yang akan kita bangun bersama. Setelah pertemuan ini, mahasiswa diharapkan tidak hanya tahu istilah, tetapi mampu menjelaskan dan mempraktikkan alur dasar WebGL dari JavaScript menuju GPU.

Secara garis besar, capaian ini mencakup empat kelompok kemampuan:

- **Lingkungan WebGL**: memahami peran WebGL sebagai `graphics API` berbasis browser dan membuat `WebGL2` context pada `canvas`.
- **Data geometri**: menggunakan **Normalized Device Coordinate** untuk menentukan posisi, serta menjelaskan `vertex`, `primitive`, `buffer`, dan `attribute`.
- **Shader dan GLSL**: membaca struktur dasar **GLSL**, menjelaskan fungsi `Vertex Shader` dan `Fragment Shader`, serta membedakan `attribute`, `uniform`, dan data `interpolated`.
- **Eksekusi rendering**: melakukan `compile` dan `link` shader, melakukan `draw call`, lalu menyusun program WebGL sederhana yang interaktif.

Penting untuk dipahami bahwa capaian ini menjadi acuan selama praktikum. Mahasiswa tidak perlu langsung menguasai semua detail teknis secara mendalam, tetapi harus mampu mengikuti alur: data geometri disiapkan di sisi CPU, dikirim ke GPU melalui buffer, diproses oleh shader, lalu hasil akhirnya ditampilkan pada `canvas`.

### Inti yang Harus Ditekankan

- Capaian pembelajaran adalah **target kompetensi**, bukan sekadar daftar materi.
- Mahasiswa harus mampu menghubungkan `WebGL2 Context`, `NDC`, `vertex`, `buffer`, `attribute`, shader, dan `draw call` sebagai satu alur rendering.
- Penguasaan dasar GLSL dan shader program menjadi prasyarat untuk membuat program WebGL sederhana dan interaktif.

### Transisi ke Slide Berikutnya

Setelah target pembelajaran jelas, kita mulai dari perbandingan dengan Canvas 2D yang sudah kita kenal, lalu melihat bagaimana JavaScript, WebGL, GPU, dan canvas bekerja bersama.

---

## Slide 003 - Dari Canvas 2D ke WebGL

### Narasi

Pada pertemuan pertama, kita menggunakan `HTML Canvas 2D` untuk membangun intuisi dasar grafika: bagaimana **coordinate** menentukan posisi, bagaimana **primitive** membentuk objek, bagaimana **color** memberi tampilan, serta bagaimana **animation** dan **interaction** membuat gambar hidup.

Pendekatan itu sangat berguna karena kita bisa fokus pada konsep visual tanpa perlu memikirkan bagaimana GPU bekerja. Namun, ketika kita ingin membuat grafika yang lebih kompleks, kita perlu melihat lapisan yang lebih dalam.

Perhatikan alur berikut:

```text
JavaScript
   ↓
WebGL
   ↓
GPU
   ↓
Canvas
```

Dalam alur ini, `JavaScript` tidak lagi hanya menggambar bentuk di kanvas. `JavaScript` menyiapkan data dan perintah, lalu `WebGL` menerjemahkannya ke proses yang dieksekusi oleh **GPU**. Hasil pemrosesan GPU kemudian ditampilkan kembali pada `Canvas`.

Artinya, kita mulai bergeser dari “menggambar di kanvas” menjadi “menyiapkan data grafika untuk diproses GPU”. Pergeseran ini penting karena pembahasan selanjutnya akan berangkat dari cara kerja GPU, bukan dari perintah gambar 2D biasa.

### Inti yang Harus Ditekankan

- `HTML Canvas 2D` membantu membangun dasar grafika: **coordinate**, **primitive**, **color**, **animation**, dan **interaction**.
- `WebGL` menjadi lapisan antara `JavaScript` dan **GPU**.
- Alur `JavaScript → WebGL → GPU → Canvas` menunjukkan bahwa data grafika diproses oleh GPU.
- Fokus kita bergeser dari menggambar bentuk 2D ke menyiapkan data untuk rendering GPU.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan mendefinisikan WebGL secara lebih jelas: apa itu WebGL, mengapa ia disebut API grafika pada browser, dan untuk aplikasi apa saja ia digunakan.

---

## Slide 004 - Apa Itu WebGL?

### Narasi

Setelah kita melihat pergeseran dari `HTML Canvas 2D` ke `WebGL`, langkah berikutnya adalah memahami posisi `WebGL` dalam ekosistem grafika web. `WebGL` adalah **Web Graphics Library**, yaitu API grafika yang berjalan di browser dan memberi `JavaScript` akses ke kemampuan `GPU`. Dengan kata lain, `WebGL` menjadi jembatan antara kode aplikasi dan perangkat keras yang mempercepat proses rendering.

Dalam konteks grafika komputer, hal ini penting karena banyak operasi visual—seperti transformasi, rasterisasi, dan perhitungan warna—dapat dipindahkan ke `GPU` agar lebih cepat dan paralel. `WebGL` memungkinkan kita menyiapkan data geometri, menjalankan shader, dan meminta `GPU` menggambar hasil ke `Canvas`. Jadi, alurnya bukan sekadar menggambar bentuk 2D, tetapi menyiapkan data, memprosesnya di `GPU`, lalu menampilkan hasilnya.

Secara penggunaan, `WebGL` dapat dimanfaatkan untuk:

- grafika 2D/3D,
- game web,
- simulasi,
- scientific visualization,
- aplikasi interaktif.

Namun, perlu kita tekankan bahwa `WebGL` bersifat **relatif low-level**. Artinya, `WebGL` tidak langsung menyediakan objek siap pakai seperti scene, kamera, mesh, atau material. Ia lebih memberikan mekanisme dasar untuk mengontrol proses rendering. Karena itu, mahasiswa perlu membiasakan diri berpikir dalam istilah data, pipeline, dan GPU, bukan hanya fungsi gambar 2D.

Sebelum lanjut, penting untuk memahami bahwa `WebGL` adalah fondasi, bukan framework lengkap. Ia memberi akses ke `GPU`, tetapi masih menuntut kita memahami bagaimana data grafika disiapkan dan diproses. Pemahaman ini akan menjadi dasar ketika nanti kita melihat bagaimana framework seperti `Three.js` menyederhanakan proses tersebut.

### Inti yang Harus Ditekankan

- `WebGL` adalah **API grafika browser** yang memungkinkan `JavaScript` menggunakan `GPU`.
- `WebGL` penting karena memindahkan proses rendering visual ke perangkat keras yang lebih cepat dan paralel.
- `WebGL` bersifat **relatif low-level**, sehingga ia menyediakan mekanisme dasar rendering, bukan objek scene siap pakai.

### Transisi ke Slide Berikutnya

Karena `WebGL` bersifat low-level, kita perlu meluruskan satu hal penting: `WebGL` tidak otomatis menyediakan scene, kamera, mesh, light, atau material. Pada slide berikutnya, kita akan melihat apa yang sebenarnya disediakan `WebGL` dan bagaimana framework seperti `Three.js` membantu membungkus proses tersebut.

---

## Slide 005 - WebGL Bukan Scene Framework

### Narasi

Salah satu hal yang perlu kita luruskan sejak awal adalah posisi `WebGL` dalam pengembangan grafika web. `WebGL` bukan **scene framework**, artinya ia tidak datang dengan objek siap pakai yang sudah membentuk dunia 3D. Jika kita hanya menggunakan `WebGL` secara langsung, kita tidak otomatis mendapatkan struktur seperti:

- `Scene`,
- `Camera`,
- `Mesh`,
- `Light`,
- `Material`.

Artinya, `WebGL` tidak menyediakan “dunia” yang sudah tersusun. Ia menyediakan mekanisme dasar agar kita bisa memproses data grafika dan mengirimkannya ke GPU.

Secara sederhana, alur dasar yang disediakan `WebGL` adalah:

```text
Prepare Data
   ↓
Upload to GPU
   ↓
Run Shader
   ↓
Draw
```

Kita bisa membaca alur ini sebagai inti dari **rendering pipeline** pada tingkat dasar. Pada tahap **Prepare Data**, kita menyiapkan data yang akan dirender, misalnya data geometri dan parameter yang dibutuhkan oleh program rendering. Pada tahap **Upload to GPU**, data tersebut dikirim ke GPU agar dapat diproses dengan cepat. Pada tahap **Run Shader**, GPU menjalankan program shader yang menentukan bagaimana data tersebut diproses menjadi gambar. Terakhir, pada tahap **Draw**, hasil proses rendering ditampilkan.

Perbedaan penting yang perlu kita pahami adalah posisi `WebGL` dibandingkan framework seperti `Three.js`. `WebGL` berada pada lapisan yang lebih rendah dan memberikan kontrol langsung terhadap mekanisme rendering. Sementara itu, framework seperti `Three.js` membungkus mekanisme tersebut dengan abstraksi yang lebih tinggi, misalnya menyediakan `Scene`, `Camera`, `Mesh`, `Light`, dan `Material` secara lebih praktis.

Dengan kata lain, `Three.js` membuat pengembangan grafika web menjadi lebih mudah karena banyak hal sudah dibungkus. Namun, di balik kemudahan tersebut, proses dasarnya tetap melibatkan mekanisme `WebGL`: menyiapkan data, mengirim data ke GPU, menjalankan shader, dan melakukan draw.

Untuk memahami materi ini, kita perlu menangkap bahwa `WebGL` memberi kontrol, tetapi juga memberi tanggung jawab. Kita tidak cukup hanya membuat objek lalu mengharapkan tampilan muncul otomatis. Kita perlu memastikan bahwa data tersedia, shader berjalan, dan proses draw dilakukan dengan benar. Pemahaman ini penting sebelum kita masuk ke detail teknis pipeline dan posisi `WebGL` dalam stack aplikasi.

### Inti yang Harus Ditekankan

- `WebGL` adalah API grafika yang relatif **low-level**, bukan scene framework.
- `WebGL` tidak otomatis menyediakan `Scene`, `Camera`, `Mesh`, `Light`, atau `Material`.
- `WebGL` menyediakan alur dasar rendering: **Prepare Data**, **Upload to GPU**, **Run Shader**, dan **Draw**.
- Framework seperti `Three.js` membungkus mekanisme `WebGL` dengan abstraksi yang lebih tinggi agar lebih mudah digunakan.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa `WebGL` bukan scene framework, langkah berikutnya adalah melihat di mana `WebGL` berada dalam stack aplikasi, mulai dari JavaScript, GPU, hingga hasil akhir yang ditampilkan pada canvas.

---

## Slide 006 - Posisi WebGL dalam Stack

### Narasi

Dalam stack rendering web, posisi `WebGL` menentukan di mana aplikasi kita mulai memberi perintah ke perangkat keras. Diagram ini dibaca dari atas ke bawah sebagai alur kontrol dan data:

1. `Application` adalah program yang ingin menampilkan grafik.
2. `JavaScript` menjalankan logika aplikasi dan memanggil API.
3. `WebGL API` menerjemahkan permintaan aplikasi menjadi perintah graphics.
4. `Graphics Driver` menerjemahkan perintah tersebut untuk GPU yang tersedia.
5. `GPU` memproses geometri, shader, dan operasi rendering.
6. `Framebuffer` menyimpan hasil rendering sebagai buffer gambar.
7. `Canvas` menampilkan framebuffer tersebut ke halaman web.

Peran utama `WebGL` adalah sebagai **jembatan** antara aplikasi JavaScript dan GPU. Di lapisan atas, kita menulis logika aplikasi: menyiapkan data, memilih shader, dan memberi perintah gambar. Di lapisan bawah, perangkat keras melakukan pekerjaan berat, seperti memproses vertex, menjalankan shader, dan menghasilkan pixel yang akan ditampilkan.

Lapisan `Graphics Driver` sering tidak terlihat, tetapi sangat penting. Driver menerjemahkan perintah API menjadi instruksi yang sesuai dengan GPU tertentu. Karena itu, kode WebGL yang sama dapat berjalan di berbagai perangkat, tetapi performanya bisa dipengaruhi oleh driver dan hardware yang tersedia.

`Framebuffer` adalah tempat hasil rendering disimpan sebelum ditampilkan. Secara sederhana, ia seperti buffer gambar yang berisi warna-warna hasil proses GPU. Setelah itu, `Canvas` menampilkan framebuffer tersebut ke halaman web. Jadi, alur lengkapnya bukan sekadar JavaScript ke layar, melainkan JavaScript → `WebGL` → driver → GPU → framebuffer → canvas.

Yang perlu kita pegang sebelum lanjut adalah: `WebGL` berada di lapisan API, bukan di lapisan scene framework. Ia memberi mekanisme dasar untuk mengakses GPU, tetapi tidak menyediakan scene, kamera, mesh, atau lighting secara otomatis. Pemahaman ini membantu kita membaca kode WebGL nanti sebagai rangkaian perintah yang membangun pipeline rendering, bukan sebagai pustaka yang langsung menampilkan objek 3D.

### Inti yang Harus Ditekankan

- `WebGL` adalah lapisan API yang menghubungkan aplikasi JavaScript dengan GPU.
- Alur stack: `Application` → `JavaScript` → `WebGL API` → `Graphics Driver` → `GPU` → `Framebuffer` → `Canvas`.
- `WebGL` tidak menyediakan scene, camera, mesh, atau light secara otomatis; ia memberi mekanisme dasar untuk mengontrol GPU.
- `Framebuffer` menyimpan hasil rendering sebelum ditampilkan di `Canvas`.

### Transisi ke Slide Berikutnya

Setelah posisi `WebGL` dalam stack dipahami, langkah berikutnya adalah melihat struktur program WebGL yang akan kita gunakan berulang kali.

---

## Slide 007 - Struktur Program WebGL

### Narasi

Sebelum sebuah objek bisa muncul di layar, program WebGL harus menyiapkan beberapa komponen secara berurutan. Alur pada diagram ini sebaiknya dibaca dari atas ke bawah karena setiap langkah menjadi prasyarat langkah berikutnya.

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

Langkah pertama adalah **Create Canvas**. Di sini kita menyediakan area gambar, biasanya elemen `canvas` di halaman web. Tanpa area ini, hasil rendering tidak memiliki tempat untuk ditampilkan.

Selanjutnya, kita meminta **WebGL2 Context**. Context inilah yang menjadi pintu masuk JavaScript ke GPU. Setelah context tersedia, program baru dapat membuat resource GPU seperti buffer dan shader.

Setelah context siap, kita menyiapkan **vertex data**. Data ini berisi informasi geometri, misalnya koordinat titik-titik yang akan digambar. Data tersebut kemudian dipindahkan ke GPU melalui **buffer**, sehingga GPU dapat mengaksesnya secara efisien saat proses rendering.

Selanjutnya, program membuat dan mengompilasi **shader**. Shader adalah program kecil yang berjalan di GPU dan menentukan bagaimana data yang dikirim ke GPU diproses. Setelah shader siap, langkah berikutnya adalah **link shader program**, yaitu menggabungkan shader yang diperlukan menjadi satu program rendering yang dapat dijalankan.

Setelah program shader terbentuk, kita melakukan **connect attribute**. Langkah ini menghubungkan data vertex di buffer dengan variabel yang dibutuhkan shader. Dengan koneksi ini, GPU tahu data mana yang harus dibaca untuk setiap vertex.

Terakhir, kita menjalankan **draw**. Pada tahap inilah GPU memproses data dan shader, lalu menghasilkan gambar pada canvas. Urutan ini penting karena jika salah satu langkah belum selesai, langkah berikutnya tidak dapat berjalan dengan benar.

### Inti yang Harus Ditekankan

- Alur WebGL bersifat **berurutan**: canvas, context, data, buffer, shader, program, attribute, draw.
- **WebGL2 Context** adalah jembatan antara JavaScript dan GPU.
- **Buffer** menyimpan data vertex agar dapat diakses GPU.
- **Shader** dan **program** menentukan bagaimana data geometri diproses.
- **Draw** adalah tahap eksekusi rendering setelah semua resource siap.

### Transisi ke Slide Berikutnya

Setelah kita memahami urutan besar struktur program WebGL, langkah pertama yang perlu kita lihat secara lebih detail adalah **HTML Canvas**, yaitu area tempat hasil rendering akan ditampilkan.

---

## Slide 008 - HTML Canvas

### Narasi

Sebelum masuk ke operasi WebGL, kita perlu menyiapkan tempat di mana hasil rendering akan muncul. Di HTML, tempat itu adalah elemen `<canvas>`.

```html
<canvas
  id="glCanvas"
  width="800"
  height="600">
</canvas>
```

Elemen ini pada dasarnya adalah **area tampilan** berbentuk persegi panjang. Atribut `width` dan `height` menentukan ukuran area gambar dalam piksel, sedangkan `id="glCanvas"` memberi identitas agar JavaScript dapat menemukan elemen tersebut.

Penting untuk dipahami bahwa `<canvas>` sendiri **belum menjalankan WebGL**. Ia hanya menyediakan permukaan. WebGL baru aktif ketika JavaScript meminta **WebGL Context** dari elemen canvas tersebut.

Dalam konteks workflow yang baru kita lihat, langkah pertama adalah membuat canvas. Setelah itu, barulah kita meminta context, menyiapkan data vertex, buffer, shader, dan akhirnya melakukan draw. Jadi, canvas dapat dipandang sebagai **target tampilan** sebelum pipeline rendering dimulai.

### Inti yang Harus Ditekankan

- `<canvas>` adalah elemen HTML yang menyediakan area gambar.
- `width` dan `height` menentukan ukuran area gambar, bukan sekadar tampilan CSS.
- Canvas belum menjadi WebGL sampai JavaScript meminta `WebGL Context`.
- `id="glCanvas"` digunakan agar elemen canvas dapat diakses dari script.

### Transisi ke Slide Berikutnya

Setelah canvas tersedia, langkah berikutnya adalah meminta `webgl2` context dari elemen tersebut. Context inilah yang menjadi interface utama untuk memanggil operasi WebGL.

---

## Slide 009 - WebGL2 Context

### Narasi

Setelah elemen `<canvas>` tersedia, langkah berikutnya adalah meminta browser menyiapkan lingkungan rendering WebGL2. Pada kode berikut, kita mengambil elemen canvas dari dokumen, lalu meminta context WebGL2 dari elemen tersebut.

```javascript
const canvas =
  document.getElementById("glCanvas");

const gl =
  canvas.getContext("webgl2");
```

Variabel `canvas` menunjuk ke elemen `<canvas>` yang sudah dibuat sebelumnya. Elemen ini masih berupa area gambar biasa; ia belum otomatis menjalankan pipeline WebGL. Panggilan `canvas.getContext("webgl2")` adalah titik penting karena browser akan mencoba membuat **WebGL2 context** untuk canvas tersebut.

Jika berhasil, nilai yang dikembalikan disimpan ke variabel `gl`. Objek `gl` inilah yang menjadi **interface utama** untuk memanggil operasi WebGL, seperti mengatur state rendering, membuat buffer geometri, mengunggah shader, dan memicu perintah gambar. Dengan kata lain, `gl` adalah pintu masuk ke GPU rendering pipeline yang akan kita gunakan dalam grafika komputer.

Perlu dipahami bahwa `gl` bukan sekadar objek gambar 2D. Ia mewakili konteks rendering yang terhubung dengan kemampuan GPU dan driver. Karena itu, sebelum lanjut ke shader, transformasi, atau rasterisasi, kita harus memastikan context ini benar-benar tersedia.

### Inti yang Harus Ditekankan

- `document.getElementById("glCanvas")` mengambil elemen canvas yang akan digunakan untuk rendering.
- `canvas.getContext("webgl2")` meminta browser membuat **WebGL2 context**.
- Jika berhasil, `gl` adalah handle utama untuk operasi WebGL.
- Tanpa `gl`, kita belum dapat mengakses pipeline rendering WebGL2.

### Transisi ke Slide Berikutnya

Karena permintaan context bisa gagal, langkah berikutnya adalah memeriksa apakah `gl` tersedia atau tidak.

---

## Slide 010 - Memeriksa Context

### Narasi

Setelah `canvas.getContext("webgl2")` dipanggil, nilai yang dikembalikan disimpan pada `gl`. Namun, pemanggilan ini tidak selalu berhasil. Karena itu, langkah berikutnya adalah memeriksa apakah `gl` benar-benar tersedia.

```javascript
if (!gl) {
  alert("WebGL2 tidak tersedia");
}
```

Pada potongan kode ini, `!gl` berarti `gl` bernilai `null` atau tidak valid. Jika kondisi itu terpenuhi, browser menampilkan pesan bahwa WebGL2 tidak tersedia. Dalam praktik, setelah peringatan ini, inisialisasi WebGL sebaiknya dihentikan agar program tidak mencoba memanggil operasi rendering pada context yang tidak ada.

Pemeriksaan ini penting karena `gl` adalah interface utama ke GPU. Jika context gagal dibuat, seluruh tahap rendering pipeline tidak dapat berjalan: geometri tidak dapat diproses, shader tidak dapat dikompilasi, dan framebuffer tidak dapat di-clear atau digambar.

Context WebGL2 dapat gagal karena beberapa kondisi:

- browser tidak mendukung WebGL2,
- hardware acceleration tidak aktif,
- GPU atau driver bermasalah.

Dengan kata lain, kegagalan ini biasanya bukan karena logika matematika rendering, tetapi karena lingkungan perangkat lunak atau perangkat keras tidak siap. Mahasiswa perlu memahami bahwa sebelum membahas transformasi, kamera, atau shader, kita harus memastikan bahwa context WebGL2 sudah valid.

### Inti yang Harus Ditekankan

- `gl` harus diperiksa setelah `getContext("webgl2")` karena context dapat gagal dibuat.
- `!gl` menandakan context tidak tersedia, sehingga operasi WebGL tidak boleh dilanjutkan.
- Penyebab umum kegagalan meliputi dukungan browser, hardware acceleration, dan kondisi GPU/driver.

### Transisi ke Slide Berikutnya

Jika context sudah valid, langkah berikutnya adalah menyiapkan tampilan awal canvas dengan membersihkan framebuffer.

---

## Slide 011 - Membersihkan Canvas

### Narasi

Setelah context `gl` berhasil dibuat, langkah awal yang sering dilakukan sebelum menggambar adalah membersihkan area gambar. Dalam WebGL, area gambar yang kita lihat pada `<canvas>` pada dasarnya berasal dari **framebuffer**, dan salah satu buffer yang paling penting adalah **color buffer**.

```javascript
gl.clearColor(
  0.05, 0.08, 0.15, 1.0
);

gl.clear(
  gl.COLOR_BUFFER_BIT
);
```

Perintah `gl.clearColor()` tidak langsung menghapus layar. Perintah ini hanya menentukan warna apa yang akan dipakai saat buffer dibersihkan. Nilai `0.05, 0.08, 0.15, 1.0` adalah komponen **RGBA**: red, green, blue, alpha. Karena nilainya berada di rentang `0.0` sampai `1.0`, warna ini menghasilkan latar belakang gelap kebiruan yang cocok untuk tampilan grafika komputer modern.

Setelah warna clear diset, `gl.clear(gl.COLOR_BUFFER_BIT)` melakukan pembersihan. Parameter `gl.COLOR_BUFFER_BIT` menyatakan bahwa yang dibersihkan adalah **color buffer**. Dengan kata lain, seluruh area gambar akan diisi ulang dengan warna yang telah ditentukan oleh `clearColor()`.

Dalam alur rendering, langkah ini penting karena pada aplikasi animasi atau interaktif, gambar biasanya digambar ulang setiap frame. Jika kita tidak membersihkan canvas, objek dari frame sebelumnya dapat tetap terlihat dan bercampur dengan objek baru. Akibatnya, layar akan tampak “berantakan” atau muncul artefak visual.

Jadi, urutan yang perlu dipahami adalah:

1. Pastikan context `gl` sudah tersedia.
2. Set warna latar dengan `gl.clearColor()`.
3. Bersihkan color buffer dengan `gl.clear(gl.COLOR_BUFFER_BIT)`.
4. Setelah itu, baru kita bisa menggambar objek, transformasi, atau shader berikutnya.

Secara pipeline, `clear` adalah operasi awal yang menyiapkan framebuffer dalam keadaan bersih, sehingga proses rasterisasi dan drawing berikutnya dapat dimulai dari kondisi yang konsisten.

### Inti yang Harus Ditekankan

- `gl.clearColor()` hanya **menentukan warna** yang akan dipakai saat membersihkan framebuffer.
- `gl.clear(gl.COLOR_BUFFER_BIT)` adalah perintah yang **benar-benar membersihkan** color buffer.
- Nilai warna WebGL umumnya menggunakan format **RGBA** dengan rentang `0.0` sampai `1.0`.
- Membersihkan canvas penting agar objek dari frame sebelumnya tidak tertinggal saat animasi atau rendering ulang.

### Transisi ke Slide Berikutnya

Warna yang kita gunakan pada `clearColor()` sebenarnya mengikuti aturan warna WebGL yang lebih umum. Selanjutnya, kita akan membahas bagaimana nilai warna direpresentasikan dalam format `RGBA` dan mengapa rentang `0.0` sampai `1.0` menjadi dasar dalam WebGL.

---

## Slide 012 - Warna pada WebGL

### Narasi

Setelah canvas dibersihkan, kita perlu memahami bagaimana warna disimpan oleh WebGL. WebGL umumnya memakai nilai warna dalam rentang `0.0 – 1.0`. Nilai ini bersifat relatif: `0.0` adalah intensitas minimum, sedangkan `1.0` adalah intensitas maksimum untuk satu komponen warna.

```text
0.0 – 1.0
```

Dengan rentang ini, warna dasar dapat ditulis sebagai triplet **RGB**. Misalnya:

```text
Red   = (1, 0, 0)
Green = (0, 1, 0)
Blue  = (0, 0, 1)
White = (1, 1, 1)
```

Pada contoh tersebut, urutan nilai biasanya adalah **Red**, **Green**, **Blue**. Warna merah berarti komponen merah maksimum dan komponen hijau serta biru minimum. Warna putih berarti ketiga komponen berada pada nilai maksimum. Cara membaca ini penting karena warna bukan satu angka tunggal, melainkan kombinasi intensitas beberapa saluran cahaya.

Format lengkap yang sering digunakan adalah **RGBA**. Komponen keempat, **Alpha**, menyatakan tingkat transparansi. Nilai alpha `1.0` biasanya berarti penuh, sedangkan nilai lebih kecil berarti semakin transparan. Karena itu, pemanggilan `gl.clearColor(0.05, 0.08, 0.15, 1.0)` pada slide sebelumnya menggunakan konvensi yang sama: background dibuat gelap kebiruan dengan alpha penuh.

Pemahaman ini penting karena warna adalah salah satu data utama yang masuk ke **framebuffer** dalam rendering pipeline. Saat kita membersihkan layar, mengatur warna objek, atau nanti menghitung warna pada shader, nilai yang kita berikan harus sesuai dengan konvensi WebGL. Jika mahasiswa salah memahami rentang nilai, hasil visual bisa terlihat terlalu terang, terlalu gelap, atau tidak sesuai ekspektasi.

### Inti yang Harus Ditekankan

- WebGL umumnya memakai nilai warna dalam rentang `0.0 – 1.0`.
- Warna dasar direpresentasikan sebagai **RGB**, sedangkan format lengkap biasanya **RGBA**.
- Komponen **Alpha** menentukan tingkat transparansi.
- Nilai warna yang salah akan memengaruhi hasil render, termasuk background dan warna objek.

### Transisi ke Slide Berikutnya

Setelah warna dipahami sebagai data bernilai normalisasi, langkah berikutnya adalah memahami posisi di mana warna tersebut akan ditampilkan. Pada slide berikutnya, kita akan membandingkan koordinat canvas 2D dengan **NDC** dalam WebGL.

---

## Slide 013 - Canvas Coordinate vs NDC

### Narasi

Setelah kita membahas warna pada WebGL, sekarang kita masuk ke hal yang sama pentingnya: bagaimana posisi objek dinyatakan di layar.

Pada **Canvas 2D**, posisi biasanya dinyatakan dalam **koordinat pixel**. Artinya, titik atau objek diletakkan berdasarkan ukuran kanvas dalam satuan pixel. Semakin besar ukuran kanvas, semakin besar pula ruang koordinat pixel yang tersedia.

WebGL berbeda. WebGL menggunakan **Normalized Device Coordinate** atau `NDC`. Dalam `NDC`, posisi tidak lagi diikat langsung ke ukuran pixel kanvas, melainkan dinormalisasi ke rentang standar.

Untuk sumbu `X` dan `Y`, rentang umumnya adalah:

- `X : -1 → +1`
- `Y : -1 → +1`

Artinya, **pusat layar** berada di `(0, 0)`. Titik di sebelah kanan pusat memiliki nilai `X` positif, sedangkan titik di sebelah kiri memiliki nilai `X` negatif. Untuk sumbu `Y`, nilai positif berada di atas pusat, dan nilai negatif berada di bawah pusat.

Konsep ini penting karena proses rendering membutuhkan sistem koordinat yang konsisten. Dengan `NDC`, posisi objek dapat diproses dan dipetakan ke layar tanpa bergantung pada ukuran pixel kanvas yang bisa berubah-ubah.

Jadi, sebelum lanjut, kita perlu memahami bahwa pada WebGL, pusat layar bukan lagi sudut kanvas, melainkan titik `(0, 0)` di tengah area tampilan.

### Inti yang Harus Ditekankan

- **Canvas 2D** menggunakan **koordinat pixel** yang bergantung pada ukuran kanvas.
- **WebGL** menggunakan **Normalized Device Coordinate** atau `NDC`.
- Rentang umum `NDC` adalah `X : -1 → +1` dan `Y : -1 → +1`.
- Pusat layar pada `NDC` berada di `(0, 0)`.
- `NDC` membantu posisi objek diproses secara konsisten dalam rendering.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa WebGL memakai `NDC` dengan pusat di `(0, 0)`, pada slide berikutnya kita akan melihat diagram sistem koordinat `NDC` dan posisi penting seperti kiri bawah, kanan atas, serta tengah layar.

---

## Slide 014 - Sistem Koordinat NDC

### Narasi

Dalam WebGL, **NDC** menjadi acuan posisi titik setelah geometri diproyeksikan. NDC menggunakan sistem koordinat yang **dinormalisasi**, artinya posisi tidak lagi diukur langsung dalam pixel, tetapi dalam rentang standar.

```text
              Y +1
               ↑
               |
X -1 ───────── O ───────── X +1
               |
               ↓
              Y -1
```

Dari diagram, kita bisa membaca arah sumbu dengan intuisi visual: sumbu `X` bergerak ke kanan menuju nilai positif, sumbu `Y` bergerak ke atas menuju nilai positif, dan titik `O` berada di tengah layar. Posisi tengah ini penting karena berbeda dari Canvas 2D, di mana titik awal biasanya berada di sudut kiri atas.

Posisi penting pada NDC dapat kita ingat sebagai berikut:

- Kiri bawah = `(-1, -1)`
- Kanan atas = `(1, 1)`
- Tengah = `(0, 0)`

Dengan cara ini, satu objek dapat diletakkan relatif terhadap pusat layar tanpa harus menghitung ulang ukuran pixel setiap kali resolusi Canvas berubah. Misalnya, titik `(0, 0)` selalu berada di tengah, titik `(1, 0)` berada di tengah sisi kanan, dan titik `(0, 1)` berada di tengah sisi atas.

Hal yang perlu dipahami mahasiswa sebelum lanjut adalah bahwa NDC bukan koordinat pixel, melainkan **ruang antara** sebelum posisi akhir di layar. Setelah titik berada dalam rentang NDC, tahap berikutnya akan memetakannya ke posisi pixel melalui **viewport transform**.

### Inti yang Harus Ditekankan

- NDC menggunakan rentang standar `X : -1 → +1` dan `Y : -1 → +1`.
- Pusat layar berada di `(0, 0)`, bukan di sudut kiri atas.
- Posisi penting: kiri bawah `(-1, -1)`, kanan atas `(1, 1)`, tengah `(0, 0)`.
- NDC membuat posisi geometri lebih stabil sebelum dipetakan ke ukuran pixel Canvas.

### Transisi ke Slide Berikutnya

Setelah kita memahami bentuk ruang NDC, langkah berikutnya adalah memahami mengapa sistem koordinat ini penting dan bagaimana NDC kemudian diubah menjadi posisi pixel melalui viewport transform.

---

## Slide 015 - Mengapa NDC?

### Narasi

Setelah kita melihat bahwa **NDC** berada pada rentang standar, misalnya dari `-1` sampai `1`, pertanyaan berikutnya adalah mengapa kita tidak langsung menggunakan koordinat pixel. Jawabannya ada pada sifat **NDC** yang membuat posisi objek tidak bergantung langsung pada ukuran pixel `Canvas`. Dengan kata lain, geometri yang sama dapat direpresentasikan secara konsisten meskipun layar, jendela, atau resolusi `Canvas` berbeda.

```text
NDC
 ↓
Viewport Transform
 ↓
Pixel Position
```

Diagram ini menunjukkan alur sederhana dalam rendering pipeline. Pada tahap pertama, posisi dinyatakan dalam **NDC**, yaitu ruang koordinat yang sudah dinormalisasi. Kemudian **Viewport Transform** mengubah posisi tersebut menjadi koordinat layar. Output akhirnya adalah **Pixel Position**, yaitu posisi yang benar-benar dapat digambar pada `Canvas`.

Penting untuk memahami bahwa **NDC** bukan koordinat layar. Koordinat layar biasanya bergantung pada ukuran pixel, misalnya lebar dan tinggi `Canvas`. Jika kita langsung bekerja pada pixel, setiap perubahan resolusi akan memaksa kita menghitung ulang posisi objek. Dengan **NDC**, posisi objek tetap berada pada ruang yang stabil, sementara pemetaan ke layar ditangani oleh tahap berikutnya.

Dalam konteks WebGL dan GPU, pemisahan ini sangat berguna. Geometri dapat diproses dalam ruang yang konsisten, baru kemudian disesuaikan dengan ukuran tampilan. Hal ini membuat rendering lebih fleksibel, terutama ketika aplikasi grafika komputer harus berjalan pada berbagai perangkat atau ukuran jendela.

Sebelum lanjut, kita perlu mengingat bahwa **NDC** adalah posisi yang sudah dinormalisasi dan tidak terikat pada ukuran pixel. **Viewport Transform** adalah jembatan antara **NDC** dan **Pixel Position**. Pemahaman ini akan membantu ketika nanti kita melihat bagaimana titik-titik geometri diproses oleh pipeline.

### Inti yang Harus Ditekankan

- **NDC** membuat posisi objek tidak bergantung langsung pada ukuran pixel `Canvas`.
- **Viewport Transform** mengubah **NDC** menjadi **Pixel Position** yang dapat digambar pada layar.
- Pemisahan antara **NDC** dan koordinat layar membuat rendering lebih fleksibel terhadap perubahan resolusi atau ukuran tampilan.

### Transisi ke Slide Berikutnya

Setelah memahami mengapa posisi perlu dinormalisasi, kita akan melihat unit data yang diproses oleh graphics pipeline, yaitu **Vertex**, beserta contoh koordinatnya.

---

## Slide 016 - Vertex

### Narasi

Mari kita mulai dari unit paling dasar yang akan diproses oleh **graphics pipeline**, yaitu **vertex**. Dalam grafika komputer, vertex bukan sekadar titik geometri, melainkan unit data yang akan dibaca dan diproses oleh GPU. Dalam konteks WebGL, vertex menjadi salah satu input utama yang akan melewati berbagai tahap pemrosesan sebelum akhirnya berkontribusi pada gambar yang muncul di layar.

Vertex penting karena hampir seluruh objek visual, baik 2D maupun 3D, pada akhirnya direpresentasikan sebagai kumpulan vertex. GPU tidak langsung menggambar bentuk kompleks secara utuh; bentuk tersebut biasanya dipecah menjadi primitif seperti titik, garis, atau segitiga. Segitiga menjadi primitif yang sangat umum karena mudah diproses dan mampu membentuk permukaan objek dengan cukup efisien.

Sebagai contoh sederhana, sebuah **triangle** dapat didefinisikan oleh tiga vertex berikut:

```text
V0 = (-0.5, -0.5)
V1 = ( 0.5, -0.5)
V2 = ( 0.0,  0.5)
```

Tiga vertex ini membentuk satu segitiga. Jika kita membacanya secara visual, `V0` berada di kiri bawah, `V1` berada di kanan bawah, dan `V2` berada di tengah atas. Koordinat seperti ini sering ditemui pada ruang yang sudah dinormalisasi, sehingga posisi objek tidak bergantung langsung pada ukuran pixel canvas.

Tujuan dari contoh ini adalah menunjukkan bahwa vertex paling dasar membawa informasi **posisi**. Posisi inilah yang menentukan di mana segitiga akan berada setelah melewati proses transformasi dan proyeksi. Setelah posisi vertex diproses, GPU akan melakukan **rasterisasi**, yaitu proses menentukan piksel-piksel mana yang tertutup oleh segitiga tersebut. Hasil yang diharapkan dari contoh ini adalah satu triangle yang dapat dirender ke layar.

Pada tahap ini, kita cukup memahami bahwa **vertex** adalah unit data yang diproses oleh graphics pipeline. Setiap vertex dapat membawa data tambahan, tetapi detail jenis data tersebut akan kita lihat pada pembahasan berikutnya.

### Inti yang Harus Ditekankan

- **Vertex** adalah unit data dasar yang diproses oleh **graphics pipeline**.
- Contoh triangle menggunakan tiga vertex: `V0`, `V1`, dan `V2` dengan koordinat posisi.
- Posisi vertex menentukan bentuk dan lokasi objek sebelum proses rasterisasi.
- Setiap vertex dapat membawa data tambahan, tetapi pada tahap ini fokus utamanya adalah **posisi**.

### Transisi ke Slide Berikutnya

Setelah kita memahami vertex sebagai unit data, langkah berikutnya adalah melihat apa saja data yang dapat dibawa oleh vertex, terutama `position` dan `color` yang akan menjadi fokus pada pertemuan ini.

---

## Slide 017 - Data pada Vertex

### Narasi

Setelah kita melihat **vertex** sebagai titik koordinat, ada satu hal penting yang perlu diperjelas: satu vertex tidak selalu hanya berisi posisi. Dalam grafika komputer, vertex adalah unit data yang dapat membawa beberapa atribut sekaligus.

Diagram pada slide dibaca dari atas ke bawah. Di puncak ada `Vertex`, lalu cabang-cabangnya menunjukkan jenis data yang dapat melekat pada setiap vertex:

```text
Vertex
├── Position
├── Color
├── Normal
├── Texture Coordinate
└── Other Attributes
```

Secara konsep, setiap baris itu adalah jenis atribut. Atribut yang berbeda akan digunakan untuk tujuan yang berbeda dalam rendering pipeline.

- **Position** adalah koordinat vertex, misalnya `(-0.5, -0.5)`. Atribut ini paling dasar karena menentukan bentuk geometri dan menjadi input utama transformasi serta proyeksi.
- **Color** adalah warna yang melekat pada vertex. Atribut ini memungkinkan objek diberi warna per titik, dan nilai warna tersebut dapat digunakan pada proses rasterisasi untuk menghasilkan warna pada permukaan.
- **Normal** adalah arah permukaan pada titik vertex. Atribut ini penting untuk pencahayaan, tetapi belum menjadi fokus utama pada pertemuan ini.
- **Texture Coordinate** adalah koordinat untuk memetakan tekstur ke permukaan objek. Atribut ini juga baru akan kita gunakan secara lebih lanjut pada Pertemuan 5.
- **Other Attributes** adalah atribut tambahan yang dapat didefinisikan sesuai kebutuhan, misalnya data animasi, material, atau parameter khusus.

Pada pertemuan ini, kita membatasi pembahasan pada **Position** dan **Color**. Pembatasan ini sengaja dilakukan agar kita bisa memahami alur dasar: data vertex disimpan, dikirim ke GPU, diproses oleh pipeline, lalu menghasilkan bentuk dan warna yang terlihat di layar.

Hal yang perlu dipahami sebelum lanjut adalah bahwa vertex bukan sekadar titik, melainkan sekumpulan data terstruktur. Dalam konteks WebGL, atribut vertex harus sesuai dengan data yang dibaca oleh shader dan disimpan dalam format yang mudah diproses oleh GPU.

### Inti yang Harus Ditekankan

- **Vertex** dapat membawa beberapa atribut, bukan hanya posisi.
- Fokus pertemuan ini adalah **Position** dan **Color**.
- **Normal** dan **Texture Coordinate** penting, tetapi baru dibahas lebih lanjut pada Pertemuan 5.
- Atribut vertex menentukan data apa yang akan diproses oleh rendering pipeline dan GPU.

### Transisi ke Slide Berikutnya

Setelah kita tahu atribut apa saja yang dapat dibawa oleh vertex, langkah berikutnya adalah melihat bagaimana data numerik tersebut disimpan secara rapi dan efisien, yaitu menggunakan `Typed Array` seperti `Float32Array`.

---

## Slide 018 - Typed Array

### Narasi

Setelah pada slide sebelumnya kita melihat bahwa **vertex** memiliki atribut seperti **position** dan **color**, langkah berikutnya adalah memahami bagaimana data tersebut disimpan di memori. Dalam WebGL, data vertex biasanya tidak disimpan sebagai banyak objek JavaScript terpisah, melainkan sebagai rangkaian angka yang rapi. Contoh pada slide menunjukkan sebuah segitiga yang didefinisikan oleh tiga vertex.

```javascript
const vertices = new Float32Array([
  -0.5, -0.5,
   0.5, -0.5,
   0.0,  0.5
]);
```

Perhatikan bahwa `vertices` berisi enam angka, bukan tiga objek vertex. Enam angka itu dibaca berpasangan:

- `vertices[0]` dan `vertices[1]` → `-0.5, -0.5`
- `vertices[2]` dan `vertices[3]` → `0.5, -0.5`
- `vertices[4]` dan `vertices[5]` → `0.0, 0.5`

Setiap pasangan merepresentasikan **position** 2D dari satu vertex. Karena fokus pertemuan ini adalah **position + color**, contoh ini baru menunjukkan position. Jika nanti ada color, setiap vertex akan memiliki tambahan komponen warna.

Alasan kita menggunakan `Float32Array` adalah karena data vertex bersifat numerik dan berulang. `Float32Array` menyimpan setiap nilai sebagai floating point 32-bit, sehingga ukuran setiap elemen konsisten. Konsistensi ini penting karena GPU memproses data dalam jumlah besar dan membutuhkan layout memori yang mudah diprediksi.

Dengan ukuran elemen yang tetap, sistem dapat menghitung posisi data secara cepat. Untuk position 2D, setiap vertex memiliki dua komponen, yaitu `x` dan `y`. Jadi, vertex ke-1 berada pada indeks `0` dan `1`, vertex ke-2 pada indeks `2` dan `3`, serta vertex ke-3 pada indeks `4` dan `5`.

Secara pipeline, data ini adalah bahan mentah sebelum vertex dirakit menjadi **primitive**. GPU tidak cukup hanya menerima angka acak; angka tersebut harus memiliki struktur yang jelas agar dapat diinterpretasikan sebagai posisi vertex. `Float32Array` membantu menjaga struktur itu tetap rapi dan efisien.

Yang perlu dipahami sebelum lanjut: **vertex data** adalah kumpulan angka, bukan objek visual. Visual muncul setelah angka-angka itu diinterpretasikan oleh pipeline sebagai posisi, primitive, dan kemudian digambar ke layar.

### Inti yang Harus Ditekankan

- `Float32Array` menyimpan data numerik dengan ukuran elemen konsisten, sehingga cocok untuk data GPU.
- Contoh array berisi enam angka yang merepresentasikan tiga vertex position 2D, dibaca berpasangan.
- Struktur data yang rapi penting agar vertex dapat diinterpretasikan dan dirakit menjadi primitive.

### Transisi ke Slide Berikutnya

Setelah data vertex tersimpan rapi dalam typed array, langkah berikutnya adalah memahami bagaimana vertex-vertex tersebut dirakit menjadi primitive, yaitu point, line, dan triangle.

---

## Slide 019 - Primitive

### Narasi

Setelah kita menyiapkan vertex sebagai data numerik, langkah berikutnya adalah merakit vertex tersebut menjadi bentuk yang dapat dirender. Bentuk dasar ini disebut **primitive**.

Primitive adalah unit geometri minimal yang dipahami oleh pipeline rendering. Dalam WebGL, vertex yang tersimpan dalam buffer tidak otomatis menjadi gambar; ia harus ditafsirkan sebagai primitive tertentu sebelum masuk ke tahap rasterisasi.

Ada tiga primitive utama yang perlu dipahami:

- **Point**, yaitu vertex yang dirender sebagai titik.
- **Line**, yaitu dua vertex yang dihubungkan menjadi garis.
- **Triangle**, yaitu tiga vertex yang membentuk segitiga.

Perhatikan bahwa primitive bukan sekadar bentuk visual, tetapi cara vertex dirakit menjadi unit geometri. Artinya, data vertex yang sama dapat menghasilkan bentuk yang berbeda tergantung primitive yang dipilih.

**Triangle** adalah primitive terpenting untuk grafika 3D modern karena GPU dirancang sangat efisien untuk memproses triangle. Permukaan objek 3D biasanya diaproksimasi sebagai kumpulan triangle, sehingga triangle menjadi dasar untuk rasterisasi, shading, dan rendering real-time.

Secara pipeline, alurnya dapat dipahami sebagai:

1. Vertex data disiapkan.
2. Vertex dirakit menjadi primitive.
3. Primitive diproses oleh GPU menuju rasterisasi.

Sebelum lanjut, pastikan kita memahami bahwa primitive adalah cara vertex dirakit, bukan jenis objek akhir. Konsep ini penting karena menentukan bagaimana geometri dibaca oleh GPU dan bagaimana objek visual terbentuk di layar.

### Inti yang Harus Ditekankan

- **Primitive** adalah unit dasar rendering yang dibentuk dari vertex.
- Tiga primitive utama adalah **Point**, **Line**, dan **Triangle**.
- **Triangle** paling penting dalam grafika 3D modern karena sangat dioptimalkan oleh GPU.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana WebGL menentukan mode penggambaran primitive, sehingga urutan vertex dapat ditafsirkan secara eksplisit.

---

## Slide 020 - Draw Mode Primitive

### Narasi

Setelah kita memahami bahwa vertex dapat dirakit menjadi primitive, langkah berikutnya adalah menentukan bagaimana GPU membaca urutan vertex tersebut. Dalam WebGL, hal ini dikendalikan oleh **draw mode**.

```javascript
gl.POINTS
gl.LINES
gl.LINE_STRIP
gl.LINE_LOOP
gl.TRIANGLES
```

Draw mode bukan sekadar nama primitive. Ia menentukan **cara vertex diinterpretasikan** dari data vertex yang tersedia. Dengan kata lain, vertex yang sama bisa menghasilkan tampilan berbeda tergantung mode yang dipilih.

Beberapa intuisi penting:

- `gl.POINTS`: setiap vertex digambar sebagai satu point.
- `gl.LINES`: vertex dibaca berpasangan, sehingga dua vertex membentuk satu line.
- `gl.LINE_STRIP`: vertex dibaca berurutan, dan setiap vertex baru membentuk line dengan vertex sebelumnya.
- `gl.LINE_LOOP`: mirip `gl.LINE_STRIP`, tetapi garis terakhir menutup kembali ke vertex pertama.
- `gl.TRIANGLES`: setiap tiga vertex membentuk satu triangle.

Dalam konteks rendering pipeline, draw mode berada di tahap awal setelah vertex data tersedia. Ia memberi tahu GPU bagaimana **primitive assembly** dilakukan sebelum proses rasterisasi. Karena itu, memilih draw mode yang salah dapat membuat objek terlihat terpotong, tidak tertutup, atau tidak sesuai bentuk yang diinginkan.

Untuk materi ini, hal yang perlu dipahami adalah bahwa **urutan vertex** dan **draw mode** saling terkait. Jika urutan vertex tidak sesuai dengan mode yang dipilih, hasil visual bisa salah meskipun data vertex sudah benar.

### Inti yang Harus Ditekankan

- Draw mode menentukan bagaimana urutan vertex ditafsirkan oleh GPU.
- `gl.POINTS`, `gl.LINES`, `gl.LINE_STRIP`, `gl.LINE_LOOP`, dan `gl.TRIANGLES` memiliki aturan pembacaan vertex yang berbeda.
- `gl.TRIANGLES` penting karena triangle menjadi primitive utama dalam grafika 3D modern.
- Kesesuaian antara urutan vertex dan draw mode menentukan apakah objek digambar dengan benar.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana proses pembacaan vertex ini terjadi secara lebih sistematis melalui **primitive assembly**, khususnya bagaimana `gl.TRIANGLES` merakit setiap tiga vertex menjadi satu triangle.

---

## Slide 021 - Primitive Assembly

### Narasi

Pada tahap **Primitive Assembly**, data vertex tidak lagi diperlakukan hanya sebagai daftar angka terpisah, tetapi sebagai rangkaian yang akan dikelompokkan menjadi bentuk visual. Diagram pada slide menunjukkan alur yang sederhana: **Vertex Stream** masuk ke **Primitive Assembly**, lalu keluar sebagai **Point**, **Line**, atau **Triangle**.

**Vertex Stream** dapat dipahami sebagai urutan vertex yang siap diproses. Setiap vertex biasanya membawa informasi posisi, dan mungkin atribut lain, tetapi pada slide ini kita fokus pada bagaimana urutan tersebut dibaca dan dikelompokkan.

Peran **Primitive Assembly** adalah menafsirkan urutan vertex berdasarkan draw mode yang dipilih. Jika draw mode adalah `gl.POINTS`, setiap vertex dapat menjadi satu point. Jika draw mode adalah `gl.LINES`, vertex dibaca berpasangan. Jika draw mode adalah `gl.TRIANGLES`, vertex dibaca dalam kelompok tiga.

Untuk `gl.TRIANGLES`, aturan pembentukannya sangat penting: setiap tiga vertex membentuk satu triangle. Misalnya, vertex ke-1, ke-2, dan ke-3 membentuk triangle pertama; vertex ke-4, ke-5, dan ke-6 membentuk triangle kedua; dan seterusnya. Pola ini memungkinkan kita membangun objek yang lebih kompleks dari banyak triangle.

Cara membaca diagramnya adalah dari atas ke bawah. Di bagian atas ada **Vertex Stream**, yaitu input berupa urutan vertex. Di tengah ada **Primitive Assembly**, yaitu proses pengelompokan vertex menjadi primitive. Di bagian bawah ada **Point / Line / Triangle**, yaitu output berupa primitive yang siap digunakan dalam tahap rendering berikutnya.

Poin yang harus dipahami sebelum lanjut adalah: draw mode menentukan arti dari urutan vertex. Data vertex yang sama bisa menghasilkan bentuk berbeda jika draw mode berbeda. Selain itu, **Primitive Assembly** adalah jembatan antara data vertex dan bentuk geometri yang benar-benar dapat dirender.

### Inti yang Harus Ditekankan

- **Vertex Stream** adalah urutan vertex yang menjadi input untuk tahap pengelompokan.
- **Primitive Assembly** mengelompokkan vertex menjadi primitive sesuai draw mode.
- Untuk `gl.TRIANGLES`, setiap tiga vertex membentuk satu triangle.
- Output tahap ini adalah **Point**, **Line**, atau **Triangle** yang siap diproses lebih lanjut.

### Transisi ke Slide Berikutnya

Setelah kita memahami bagaimana vertex dikelompokkan menjadi primitive, langkah berikutnya adalah memahami mengapa data vertex tidak bisa langsung dibaca GPU dari memori JavaScript, tetapi harus dimasukkan ke buffer.

---

## Slide 022 - Mengapa Data Harus Masuk Buffer?

### Narasi

Sebelum GPU dapat membentuk titik, garis, atau segitiga, data vertex harus berada di tempat yang dapat dibaca oleh GPU. Pada tahap awal, data vertex biasanya masih berada di memori JavaScript, misalnya koordinat posisi vertex yang kita simpan sebagai array atau objek di sisi CPU.

Masalahnya, GPU tidak dapat langsung membaca data dari struktur JavaScript yang tersebar di memori CPU. Karena itu, data perlu diubah menjadi bentuk yang lebih rapat, terstruktur, dan mudah dipindahkan ke GPU. Bentuk yang umum digunakan adalah **`Typed Array`**, misalnya `Float32Array` untuk koordinat vertex.

Kita dapat membaca diagram pada slide sebagai alur transfer data:

```text
JavaScript Data
     ↓
Typed Array
     ↓
GPU Buffer
```

Di bagian atas, **`JavaScript Data`** adalah data mentah yang dibuat oleh program. Di bagian tengah, **`Typed Array`** adalah representasi data yang lebih kompak dan sesuai untuk diproses oleh WebGL. Di bagian bawah, **`GPU Buffer`** adalah area memori GPU yang menyimpan data tersebut agar siap digunakan oleh pipeline rendering.

Buffer penting karena GPU bekerja dengan data yang tersimpan di memori GPU, bukan langsung dari memori JavaScript. Dengan buffer, data vertex dapat dibaca oleh shader, khususnya vertex shader, pada tahap awal pipeline. Setelah data tersedia di buffer, vertex dapat dikirim ke **`Vertex Stream`**, lalu diproses oleh **`Primitive Assembly`** menjadi `Point`, `Line`, atau `Triangle`.

Jadi, inti yang harus dipahami adalah: **buffer bukan sekadar tempat menyimpan data**, melainkan jembatan antara data aplikasi di CPU dan data rendering di GPU. Tanpa buffer, GPU tidak memiliki sumber data yang valid untuk membentuk geometri.

### Inti yang Harus Ditekankan

- Data vertex awalnya berada di **memori JavaScript**, bukan di memori GPU.
- Agar dapat dibaca GPU, data perlu diubah menjadi **`Typed Array`** yang lebih terstruktur.
- **`GPU Buffer`** adalah area memori GPU yang menyimpan data rendering.
- Buffer menjadi prasyarat agar data vertex dapat masuk ke pipeline rendering.
- Setelah data berada di buffer, baris vertex dapat diproses menjadi primitive seperti `gl.TRIANGLES`.

### Transisi ke Slide Berikutnya

Setelah memahami mengapa data harus masuk buffer, langkah berikutnya adalah melihat bagaimana buffer dibuat dan diisi menggunakan API WebGL.

---

## Slide 023 - Membuat dan Mengisi Buffer

### Narasi

Setelah data vertex berada di sisi JavaScript, langkah berikutnya adalah memindahkannya ke memori GPU. Dalam WebGL, data yang akan dipakai oleh pipeline rendering tidak cukup hanya disimpan di variabel JavaScript; ia harus berada dalam **buffer** yang dapat diakses oleh GPU. Buffer ini menjadi sumber data untuk atribut vertex, misalnya posisi, normal, atau koordinat tekstur, tergantung program shader yang kita gunakan.

Kode berikut menunjukkan tiga langkah dasar untuk membuat dan mengisi buffer posisi:

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

Urutan eksekusinya penting. Pertama, `gl.createBuffer()` membuat objek buffer di sisi GPU dan mengembalikan handle yang bisa kita simpan di JavaScript. Kedua, `gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)` mengaktifkan buffer tersebut sebagai buffer yang sedang bekerja untuk target `gl.ARRAY_BUFFER`. Ketiga, `gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)` menyalin data dari `vertices` ke dalam buffer yang sedang terikat.

Kita perlu memperhatikan bahwa `gl.ARRAY_BUFFER` adalah target buffer yang biasanya digunakan untuk data atribut vertex. Artinya, buffer ini bukan buffer sembarang, melainkan buffer yang akan dibaca oleh vertex shader melalui atribut seperti `position`. Jika kita memiliki lebih dari satu buffer, misalnya untuk posisi, warna, atau normal, kita akan membuat dan mengikat buffer yang berbeda sesuai target yang dibutuhkan.

Parameter `vertices` pada `gl.bufferData` adalah data yang sudah disiapkan di JavaScript, biasanya berupa typed array. Data ini akan dialokasikan dan disalin ke memori GPU. Setelah proses ini selesai, GPU memiliki salinan data yang dapat digunakan saat rendering, sehingga tidak perlu membaca langsung dari memori JavaScript setiap frame.

Perhatikan juga bahwa `gl.STATIC_DRAW` pada potongan kode ini adalah **usage hint**, yaitu petunjuk penggunaan data. Pada slide ini kita cukup memahami bahwa parameter tersebut memberi tahu WebGL bagaimana data kemungkinan akan digunakan. Detail makna dan implikasinya akan kita bahas lebih lanjut pada slide berikutnya.

### Inti yang Harus Ditekankan

- `gl.createBuffer()` membuat objek buffer di GPU, bukan hanya variabel di JavaScript.
- `gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)` menentukan buffer mana yang akan diisi atau dibaca untuk atribut vertex.
- `gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)` menyalin data `vertices` ke memori GPU.
- `gl.ARRAY_BUFFER` adalah target buffer untuk data atribut vertex yang dipakai oleh vertex shader.
- `gl.STATIC_DRAW` adalah usage hint; detailnya akan dibahas pada slide berikutnya.

### Transisi ke Slide Berikutnya

Setelah buffer dibuat dan data `vertices` berhasil dimuat, ada satu hal penting yang perlu kita pahami dari parameter `gl.STATIC_DRAW`. Pada slide berikutnya, kita akan membahas apa yang dimaksud dengan usage hint dan mengapa WebGL perlu mengetahui pola penggunaan data tersebut.

---

## Slide 024 - STATIC_DRAW

### Narasi

Setelah buffer dibuat dan di-bind, parameter ketiga pada `gl.bufferData` menentukan bagaimana data tersebut diharapkan digunakan. Pada contoh sebelumnya, nilai yang dipakai adalah:

```javascript
gl.STATIC_DRAW
```

Nilai ini disebut **usage hint**. Artinya, kita memberi tahu WebGL bahwa data di buffer ini relatif jarang diubah, tetapi akan dibaca berulang kali saat proses rendering berlangsung.

Secara konseptual, `gl.STATIC_DRAW` cocok untuk data geometri yang sudah disiapkan sekali dan kemudian dipakai banyak kali. Misalnya posisi vertex sebuah segitiga, kubus, atau model 3D yang tidak berubah setiap frame. Karena data dianggap stabil, driver WebGL dapat memilih strategi penyimpanan atau penjadwalan yang lebih efisien untuk akses GPU.

Penting untuk dipahami bahwa `gl.STATIC_DRAW` bukan berarti data tidak boleh diubah sama sekali. Ia hanya memberikan petunjuk kepada sistem. Jika data buffer sering diperbarui setiap frame, hint ini tidak lagi sesuai karena dapat mengurangi efisiensi.

Dalam konteks pipeline rendering, data yang disimpan di buffer ini nantinya akan dibaca oleh shader, khususnya vertex shader, untuk memproses setiap vertex. Namun, sebelum shader dapat memaknainya, kita perlu menentukan data mana yang menjadi **attribute** per-vertex.

### Inti yang Harus Ditekankan

- `gl.STATIC_DRAW` adalah **usage hint**, bukan mode yang mengunci data secara mutlak.
- Nilai ini menunjukkan bahwa data buffer **jarang berubah** dan **dipakai berulang kali** saat rendering.
- Hint ini membantu driver WebGL mengoptimalkan penyimpanan atau akses data di GPU.
- Untuk geometri statis, seperti posisi vertex yang tetap, `gl.STATIC_DRAW` adalah pilihan yang wajar.

### Transisi ke Slide Berikutnya

Setelah data buffer disiapkan dengan hint penggunaan yang tepat, langkah berikutnya adalah menentukan data mana yang menjadi **attribute** per-vertex, misalnya `a_position`, sehingga shader dapat membaca posisi, warna, normal, atau texture coordinate untuk setiap vertex.

---

## Slide 025 - Attribute

### Narasi

Dalam pipeline WebGL, vertex shader tidak hanya menerima geometri secara abstrak. Ia perlu tahu nilai apa yang melekat pada setiap titik vertex. Nilai itulah yang disebut **attribute**.

Secara sederhana, **attribute** adalah data yang berbeda untuk setiap vertex. Satu vertex bisa memiliki posisi tertentu, warna tertentu, normal tertentu, atau koordinat texture tertentu. Karena nilainya berbeda antar vertex, data ini perlu diberikan secara per vertex, bukan sebagai satu nilai tunggal.

Contoh yang ditampilkan adalah:

```glsl
in vec2 a_position;
```

Baris ini menyatakan bahwa vertex shader memiliki input bernama `a_position` dengan tipe `vec2`. Kata `in` menandakan data ini berasal dari luar shader, yaitu dari data vertex yang disiapkan oleh aplikasi. Nama `a_position` biasanya digunakan untuk posisi vertex, dan `vec2` menunjukkan bahwa nilai tersebut memiliki dua komponen, misalnya koordinat x dan y.

Selain posisi, attribute lain yang umum digunakan adalah:

- `color`, untuk warna per vertex,
- `normal`, untuk arah permukaan yang dipakai dalam pencahayaan,
- `texture coordinate`, untuk memetakan texture ke permukaan objek.

Poin penting yang perlu dipahami adalah: **attribute** adalah jembatan antara data geometri yang disimpan di GPU buffer dan shader yang memprosesnya. Buffer menyimpan data mentah, sedangkan attribute menentukan bagaimana data itu dibaca oleh vertex shader.

### Inti yang Harus Ditekankan

- **Attribute** adalah data per vertex, bukan data global.
- Contoh `in vec2 a_position;` menyatakan input vertex shader untuk posisi 2D.
- Attribute dapat berupa posisi, warna, normal, atau koordinat texture.
- Data attribute berasal dari GPU buffer dan akan diproses oleh vertex shader.

### Transisi ke Slide Berikutnya

Sekarang kita sudah tahu apa itu attribute. Langkah berikutnya adalah menghubungkan buffer yang menyimpan data tersebut ke attribute di shader, sehingga GPU tahu data mana yang harus dibaca untuk setiap vertex.

---

## Slide 026 - Menghubungkan Buffer ke Attribute

### Narasi

Setelah kita memahami bahwa **attribute** adalah data yang berbeda untuk setiap vertex, langkah berikutnya adalah membuat GPU tahu data mana yang harus dibaca untuk variabel attribute di shader. Dalam WebGL, data vertex tidak otomatis “menempel” ke shader; kita perlu melakukan konfigurasi di sisi CPU sebelum objek digambar.

Pada slide ini, fokusnya adalah menghubungkan buffer posisi ke attribute `a_position`. Kode yang ditampilkan adalah:

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

Baris pertama meminta WebGL mencari **lokasi** attribute bernama `a_position` di dalam `program` shader. Nilai yang dikembalikan disimpan ke `positionLocation`. Nilai ini penting karena WebGL menggunakan lokasi atau indeks attribute untuk membaca data, bukan langsung menggunakan nama GLSL. Nama `a_position` di sini harus sama dengan deklarasi attribute di shader, misalnya `in vec2 a_position;`.

Selanjutnya, `gl.enableVertexAttribArray(positionLocation)` mengaktifkan attribute tersebut. Artinya, GPU diberi tahu bahwa attribute ini akan diisi dari data per vertex yang tersimpan di buffer. Tanpa aktivasi ini, attribute tidak akan dibaca dari buffer dengan benar.

Secara pipeline, konfigurasi ini berada sebelum proses vertex shader dijalankan. Vertex shader membutuhkan nilai `a_position` untuk setiap vertex, misalnya untuk menentukan posisi titik yang akan diproses lebih lanjut. Karena itu, hubungan antara buffer dan attribute harus sudah siap sebelum objek digambar.

Langkah berikutnya, yang baru disebut pada slide ini, adalah menentukan **layout** data dengan `vertexAttribPointer()`. Fungsi ini akan menjelaskan bagaimana data di buffer dibaca, misalnya berapa komponen per vertex, tipe datanya, dan jarak antar vertex. Detail parameter tersebut akan kita bahas pada slide berikutnya.

### Inti yang Harus Ditekankan

- `gl.getAttribLocation()` memetakan nama attribute GLSL, seperti `a_position`, ke lokasi yang digunakan WebGL.
- `gl.enableVertexAttribArray()` mengaktifkan attribute agar data per vertex dibaca dari buffer.
- `positionLocation` adalah nilai penting yang akan digunakan kembali saat mengatur `vertexAttribPointer()`.
- Buffer tidak otomatis terhubung ke attribute; harus ada lokasi, aktivasi, dan layout.

### Transisi ke Slide Berikutnya

Setelah attribute diaktifkan, pertanyaan berikutnya adalah bagaimana GPU membaca data di buffer: berapa komponen per vertex, tipe datanya, dan apakah ada stride. Itu akan dijelaskan pada slide **Vertex Attribute Pointer**.

---

## Slide 027 - Vertex Attribute Pointer

### Narasi

Setelah `positionLocation` diperoleh dan `gl.enableVertexAttribArray()` dipanggil, langkah berikutnya adalah memberi tahu WebGL **bagaimana data di buffer dibaca**. Fungsi `gl.vertexAttribPointer()` inilah yang mendefinisikan **layout** dari vertex attribute.

Parameter pertama, `positionLocation`, menunjuk ke attribute `a_position` di vertex shader. Nilai ini bukan nama string, melainkan **index** yang dikembalikan oleh `gl.getAttribLocation()`. Dengan kata lain, WebGL menggunakan index ini untuk tahu attribute mana yang sedang dikonfigurasi.

Parameter kedua, `2`, adalah **jumlah komponen per vertex**. Karena slide ini menyebut `X` dan `Y`, artinya setiap vertex direpresentasikan oleh **dua nilai float**: koordinat horizontal dan koordinat vertikal. GPU akan membaca dua float berturut-turut dari buffer untuk membentuk satu vertex.

Parameter ketiga, `gl.FLOAT`, menyatakan **tipe data** dari setiap komponen. Artinya data koordinat di buffer berupa float 32-bit. Parameter keempat, `false`, adalah nilai `normalized`. Untuk data koordinat seperti ini, nilai dibaca **apa adanya** dan tidak diubah menjadi rentang normalisasi.

Dua parameter terakhir, `0` dan `0`, masing-masing adalah `stride` dan `offset`. Nilai `stride = 0` berarti data attribute tersusun **rapat** tanpa jeda antar vertex. Nilai `offset = 0` berarti pembacaan dimulai dari **awal buffer**. Untuk data 2D sederhana, konfigurasi seperti ini sangat umum.

Yang perlu kita pahami adalah: `gl.vertexAttribPointer()` tidak langsung mengirim data ke shader. Fungsi ini hanya mengatur **cara GPU membaca buffer** yang sudah terikat. Setelah layout ini benar, nilai dari buffer akan masuk ke `a_position` pada vertex shader ketika proses rendering dijalankan.

### Inti yang Harus Ditekankan

- `gl.vertexAttribPointer()` mendefinisikan **layout data** untuk vertex attribute.
- Nilai `2` berarti **dua komponen per vertex**, yaitu `X` dan `Y`.
- `gl.FLOAT`, `false`, `0`, dan `0` menentukan **tipe data**, **normalisasi**, **jarak antar vertex**, dan **posisi awal baca**.
- Fungsi ini menjadi penghubung penting antara **buffer** dan attribute `a_position` di vertex shader.

### Transisi ke Slide Berikutnya

Dengan layout ini, kita sudah tahu bagaimana data koordinat dibaca dari buffer. Selanjutnya, kita akan melihat alur lengkapnya: dari `Float32Array`, ke GPU buffer, melalui `vertexAttribPointer()`, ke `a_position`, lalu ke vertex shader.

---

## Slide 028 - Alur Buffer ke Shader

### Narasi

Sebelum sebuah bentuk geometri bisa digambar, data koordinat vertex harus sampai ke tempat yang tepat di GPU. Alur yang ditampilkan pada slide ini menunjukkan jalur data dari sisi CPU menuju **Vertex Shader**.

Di bagian atas, kita melihat `Float32Array`. Ini adalah array angka yang biasanya berisi koordinat vertex, misalnya pasangan `X` dan `Y` untuk setiap titik. Pada tahap ini, data masih berada di memori aplikasi atau CPU.

Selanjutnya, data tersebut dipindahkan ke **GPU Buffer**. Buffer ini penting karena GPU tidak bekerja langsung dari array JavaScript. Data perlu tersedia di memori GPU agar dapat diakses cepat saat proses rendering.

Setelah buffer tersedia, kita menggunakan `vertexAttribPointer()` untuk menjelaskan cara membaca data di dalam buffer. Fungsi ini memberi tahu GPU berapa banyak komponen per vertex, tipe datanya, serta bagaimana nilai-nilai tersebut disusun. Pada slide sebelumnya, nilai `2` menunjukkan bahwa setiap vertex memiliki dua komponen, yaitu `X` dan `Y`.

Hasil dari pengaturan ini adalah data yang dapat diterima oleh variabel atribut `a_position`. Variabel ini biasanya dideklarasikan di dalam **Vertex Shader** dan berfungsi sebagai “pintu masuk” untuk data posisi setiap vertex.

Dengan kata lain, alur ini menghubungkan data geometri dengan program shader. Tanpa buffer yang benar dan penunjuk atribut yang tepat, `a_position` tidak akan menerima nilai yang sesuai, sehingga vertex shader tidak dapat memproses posisi vertex secara benar.

Hal yang perlu kita pegang sebelum lanjut adalah bahwa alur ini terjadi sebelum vertex shader benar-benar mengeksekusi transformasi. Ini adalah jalur data: dari array, ke buffer, ke atribut, lalu ke shader.

### Inti yang Harus Ditekankan

- `Float32Array` adalah sumber data koordinat vertex di sisi CPU.
- **GPU Buffer** membuat data tersebut dapat diakses oleh GPU.
- `vertexAttribPointer()` menjelaskan cara buffer dibaca sebagai atribut vertex.
- `a_position` adalah variabel atribut di **Vertex Shader** yang menerima data posisi.
- Alur buffer ke shader adalah fondasi agar geometri dapat diproses oleh GPU.

### Transisi ke Slide Berikutnya

Setelah data posisi berhasil sampai ke `a_position`, langkah berikutnya adalah memahami bahasa yang digunakan untuk memproses data tersebut di GPU, yaitu GLSL.

---

## Slide 029 - Apa Itu GLSL?

### Narasi

Setelah kita melihat alur data dari `Float32Array` ke `GPU Buffer`, lalu ke `a_position`, ada satu pertanyaan penting: siapa yang memproses data tersebut di GPU? Jawabannya adalah program shader, dan program ini ditulis dalam **GLSL**.

**GLSL** adalah singkatan dari **OpenGL Shading Language**. Dalam konteks WebGL, GLSL adalah bahasa yang digunakan untuk menulis kode yang dieksekusi langsung oleh GPU, bukan oleh CPU. Artinya, logika seperti transformasi posisi, perhitungan warna, atau operasi vektor dan matriks dapat dijalankan secara paralel pada banyak elemen geometri.

Pada WebGL2, shader yang kita tulis umumnya menggunakan versi GLSL yang ditandai dengan:

```glsl
#version 300 es
```

Baris ini penting karena memberi tahu sistem bahwa program shader menggunakan aturan dan fitur dari GLSL versi 300 es. Dalam praktik, baris ini biasanya diletakkan di bagian paling awal program shader.

Kita perlu memahami bahwa GLSL dirancang khusus untuk operasi grafika. Karena itu, bahasa ini sangat akrab dengan tipe data seperti vektor dan matriks, yang sering kita gunakan untuk representasi posisi, arah, warna, dan transformasi. Dengan kata lain, GLSL bukan sekadar bahasa pemrograman umum, melainkan bahasa yang disesuaikan dengan kebutuhan rendering pipeline.

Hubungannya dengan slide sebelumnya cukup jelas: `a_position` yang datang dari buffer akan dibaca oleh vertex shader, dan vertex shader tersebut adalah program GLSL. Jadi, alur buffer ke shader baru benar-benar bermakna ketika kita memahami bahwa di ujung alur itu ada kode GLSL yang memproses data.

Sebelum masuk ke struktur lengkap program, cukup tekankan dulu bahwa GLSL adalah bahasa shader untuk GPU, dan WebGL2 menggunakan penanda versi `#version 300 es`.

### Inti yang Harus Ditekankan

- **GLSL** adalah **OpenGL Shading Language**, yaitu bahasa untuk menulis program shader yang berjalan pada GPU.
- WebGL2 menggunakan penanda versi `#version 300 es` untuk menunjukkan aturan GLSL yang dipakai.
- GLSL dirancang untuk operasi grafika, terutama manipulasi **vektor** dan **matriks** dalam rendering.

### Transisi ke Slide Berikutnya

Sekarang kita sudah tahu apa itu GLSL dan versi yang digunakan pada WebGL2. Langkah berikutnya adalah melihat bagaimana program GLSL disusun secara minimal, mulai dari `main()` hingga deklarasi precision yang sering dibutuhkan pada fragment shader.

---

## Slide 030 - Struktur Dasar GLSL

### Narasi

Setelah kita mengenali **GLSL** sebagai bahasa untuk menulis program yang berjalan pada GPU, langkah berikutnya adalah melihat kerangka minimal yang membuat sebuah shader dapat dibaca oleh **WebGL2**.

```glsl
#version 300 es

void main() {
  // shader code
}
```

Baris pertama, `#version 300 es`, adalah deklarasi versi bahasa. Baris ini penting karena memberitahu compiler bahwa shader ditulis menggunakan **GLSL ES 3.0**, yaitu versi yang digunakan oleh **WebGL2**. Dengan deklarasi ini, compiler tahu aturan sintaks dan fitur apa yang boleh digunakan.

Selanjutnya, kita melihat fungsi `void main()`. Fungsi ini adalah **entry point** shader, artinya titik masuk yang akan dieksekusi oleh GPU. Tidak seperti program CPU biasa yang memiliki `main` sebagai awal seluruh aplikasi, `main()` pada shader dipanggil oleh GPU untuk setiap unit yang diproses, misalnya setiap vertex atau setiap fragment. Karena itu, semua logika shader akan kita tulis di dalam blok `main()`.

Untuk **fragment shader**, biasanya kita juga menambahkan deklarasi precision:

```glsl
precision highp float;
```

Deklarasi ini menentukan tingkat presisi numerik untuk tipe `float`. Kata `highp` meminta presisi tinggi, sehingga perhitungan yang sensitif, seperti perhitungan warna atau intensitas cahaya, dapat dilakukan dengan perilaku yang lebih konsisten.

Struktur dasar ini penting karena menjadi fondasi untuk membaca shader apa pun. Mahasiswa perlu memahami bahwa shader bukan program biasa yang berjalan dari awal sampai akhir seperti program CPU, melainkan program kecil yang dipanggil oleh GPU pada tahap tertentu dalam rendering pipeline. Dengan mengenali `#version`, `precision`, dan `void main()`, kita sudah bisa mengenali bagian awal dari hampir semua shader.

Sebelum melanjutkan, hal yang perlu dipahami adalah bahwa di dalam `main()` nanti kita akan menggunakan berbagai tipe data grafika, seperti `float`, `vec3`, `mat4`, dan `sampler2D`. Untuk saat ini, cukup pahami bahwa struktur dasar shader biasanya dimulai dari deklarasi versi, deklarasi precision bila diperlukan, dan blok `main()` yang berisi logika shader.

### Inti yang Harus Ditekankan

- `#version 300 es` menyatakan bahwa shader menggunakan **GLSL ES 3.0** untuk **WebGL2**.
- `void main()` adalah **entry point** shader yang dieksekusi oleh GPU.
- `precision highp float;` sering diperlukan pada **fragment shader** untuk menentukan presisi perhitungan `float`.
- Struktur dasar shader terdiri dari deklarasi versi, deklarasi precision bila diperlukan, dan blok `main()` yang berisi logika shader.

### Transisi ke Slide Berikutnya

Setelah struktur kerangka shader dikenali, langkah berikutnya adalah memahami tipe data apa yang bisa digunakan di dalam `main()`, mulai dari scalar, vector, matrix, hingga sampler.

---

## Slide 031 - Tipe Data Dasar GLSL

### Narasi

Dalam GLSL, **tipe data** menentukan bagaimana nilai disimpan, dikirim ke GPU, dan diproses oleh shader. Sebelum menulis logika rendering, kita perlu mengenali tipe dasar yang akan sering muncul pada vertex shader maupun fragment shader.

Tipe **scalar** adalah tipe yang menyimpan satu nilai tunggal:

```glsl
float
int
bool
```

`float` paling sering digunakan karena banyak besaran grafika bersifat kontinu, seperti koordinat, intensitas cahaya, atau nilai interpolasi. `int` biasanya digunakan untuk jumlah diskrit, misalnya indeks atau jumlah iterasi. `bool` digunakan untuk kondisi, misalnya menentukan apakah suatu fragmen berada di dalam area tertentu. Karena banyak nilai grafika menggunakan `float`, deklarasi precision yang sudah kita lihat sebelumnya menjadi relevan di sini.

Tipe **vector** menyimpan beberapa nilai scalar dalam satu kesatuan:

```glsl
vec2
vec3
vec4
```

Secara intuitif, vector adalah cara GLSL merepresentasikan data spasial atau warna. `vec2` cocok untuk koordinat 2D atau texture coordinate, `vec3` sering digunakan untuk posisi 3D atau warna RGB, sedangkan `vec4` umum dipakai untuk koordinat homogen atau warna RGBA. Penggunaan vector membuat operasi transformasi dan interpolasi menjadi lebih alami dan efisien.

Tipe **matrix** digunakan untuk menyimpan transformasi linear:

```glsl
mat2
mat3
mat4
```

Matrix memungkinkan kita mengubah posisi, orientasi, atau skala objek. Dalam pipeline rendering, `mat4` sangat penting karena sering digunakan untuk transformasi model, view, dan projection. Dengan matrix, shader dapat memetakan koordinat dari ruang objek ke ruang layar.

Tipe **sampler** memiliki peran berbeda karena tidak menyimpan angka biasa, melainkan referensi ke data tekstur:

```glsl
sampler2D
```

`sampler2D` biasanya digunakan pada fragment shader untuk mengambil warna dari texture. Ia menjadi jembatan antara geometri yang sudah diproyeksikan dan material visual yang ditampilkan.

Jadi, pada slide ini kita cukup mengenali empat kelompok tipe dasar: scalar, vector, matrix, dan sampler. Pemahaman ini penting karena setiap tahap rendering membutuhkan tipe data yang sesuai: vertex shader banyak menggunakan vector dan matrix, sedangkan fragment shader banyak menggunakan vector warna dan sampler tekstur.

### Inti yang Harus Ditekankan

- **Scalar** seperti `float`, `int`, dan `bool` menyimpan satu nilai, dengan `float` paling umum dalam grafika komputer.
- **Vector** seperti `vec2`, `vec3`, dan `vec4` digunakan untuk koordinat, warna, arah, atau texture coordinate.
- **Matrix** seperti `mat2`, `mat3`, dan `mat4` digunakan untuk transformasi, terutama `mat4` dalam pipeline rendering.
- **Sampler** seperti `sampler2D` digunakan untuk mengakses tekstur pada fragment shader.

### Transisi ke Slide Berikutnya

Setelah kita mengenali tipe data dasarnya, langkah berikutnya adalah melihat bagaimana vector dan matrix dideklarasikan serta digunakan untuk posisi, warna, dan transformasi pada GLSL.

---

## Slide 032 - Vector dan Matrix pada GLSL

### Narasi

Kita sudah melihat tipe data dasar GLSL seperti `float`, `int`, `bool`, `vec2`, `vec3`, `vec4`, `mat2`, `mat3`, `mat4`, dan `sampler2D`. Sekarang kita fokus pada dua tipe yang paling sering muncul dalam grafika komputer, yaitu **vector** dan **matrix**.

Vector adalah kumpulan komponen numerik yang biasanya merepresentasikan sesuatu yang memiliki arah atau posisi. Dalam GLSL, kita mengenal `vec2`, `vec3`, dan `vec4`. Masing-masing menyimpan dua, tiga, atau empat komponen.

```glsl
vec2 position2D;
vec3 position3D;
vec4 color;
```

Pada contoh di atas, `vec2 position2D;` menyatakan variabel vektor dua komponen. Variabel ini cocok untuk data seperti koordinat 2D atau koordinat tekstur, yang sering disebut **UV coordinate**.

`vec3 position3D;` menyatakan vektor tiga komponen. Variabel ini sangat umum digunakan untuk posisi titik dalam ruang 3D, arah permukaan, atau normal. Dalam grafika komputer, posisi objek hampir selalu membutuhkan tiga dimensi, yaitu sumbu `x`, `y`, dan `z`.

`vec4 color;` menyatakan vektor empat komponen. Warna sering disimpan sebagai empat nilai, misalnya `R`, `G`, `B`, dan `A`. Komponen `A` biasanya mewakili **alpha**, yaitu tingkat transparansi. Jadi, meskipun warna dasar bisa dipikirkan sebagai tiga nilai, GLSL sering memakai `vec4` karena lebih fleksibel.

Selain vector, kita juga memiliki matrix. Contoh yang paling umum adalah:

```glsl
mat4 transform;
```

`mat4 transform;` menyatakan matriks berukuran 4x4. Matriks ini biasanya digunakan untuk menyimpan **transformasi**, seperti pergeseran, rotasi, penskalaan, proyeksi, atau transformasi kamera.

Intuisi pentingnya adalah sebagai berikut. Vector menyimpan “data apa yang kita punya”, misalnya posisi, arah, warna, atau UV. Matrix menyimpan “bagaimana data itu diubah”, misalnya memindahkan objek, memutar objek, memperbesar objek, atau memproyeksikannya ke layar.

Dalam rendering pipeline, data seperti posisi vertex biasanya masuk sebagai vector. Kemudian, posisi tersebut diproses menggunakan matrix transformasi. Hasil akhirnya adalah posisi yang siap digunakan oleh tahap rendering berikutnya.

Jadi, ketika kita membaca kode GLSL, kita tidak hanya melihat nama variabel. Kita juga perlu memahami tipe datanya. `vec3` biasanya membawa tiga nilai, `vec4` membawa empat nilai, dan `mat4` membawa struktur 4x4 yang siap digunakan untuk transformasi.

Sebelum lanjut ke tahap shader, kita perlu memahami bahwa vector dan matrix adalah bahasa utama dalam grafika komputer. Tanpa pemahaman ini, kita akan kesulitan membaca transformasi, kamera, lighting, atau kode WebGL.

### Inti yang Harus Ditekankan

- **Vector** dalam GLSL adalah kumpulan komponen numerik, seperti `vec2`, `vec3`, dan `vec4`.
- `vec3` sering digunakan untuk posisi 3D, arah, atau normal, sedangkan `vec4` sering digunakan untuk warna RGBA atau koordinat homogen.
- **Matrix**, terutama `mat4`, digunakan untuk menyimpan transformasi seperti translate, rotate, scale, view, dan projection.
- Nama variabel seperti `position3D`, `color`, dan `transform` membantu kita memahami peran data dalam shader.

### Transisi ke Slide Berikutnya

Setelah kita memahami bentuk data vector dan matrix, langkah berikutnya adalah melihat bagaimana data ini diproses di tahap awal pipeline, yaitu **vertex shader**.

---

## Slide 033 - Vertex Shader

### Narasi

Setelah kita memahami bahwa `vec` dan `mat` adalah bahan dasar GLSL, langkah berikutnya adalah melihat di mana bahan itu digunakan. **Vertex Shader** adalah tahap awal dalam pipeline rendering GPU yang bekerja pada level titik geometri. Artinya, shader ini tidak memproses seluruh layar sekaligus, tetapi memproses setiap **vertex** secara terpisah.

Kalimat penting pada slide adalah: *satu kali untuk setiap vertex*. Jika sebuah mesh memiliki 100 vertex, maka vertex shader akan dieksekusi sebanyak 100 kali. Jika mesh memiliki 10.000 vertex, eksekusinya terjadi 10.000 kali. Pola ini penting karena GPU dirancang untuk memproses banyak vertex secara paralel, sehingga transformasi geometri dapat dilakukan dengan cepat.

Tugas dasar vertex shader dapat kita ringkas sebagai berikut:

- menerima **attribute**, yaitu data per-vertex seperti posisi, normal, warna, atau koordinat texture;
- memproses posisi vertex, misalnya dengan transformasi model, view, atau projection;
- menghasilkan `gl_Position`, yaitu output posisi vertex dalam koordinat yang siap diproses oleh pipeline;
- mengirim data lain ke tahap berikutnya, misalnya data yang akan diinterpolasi ke pixel.

Peran `gl_Position` sangat penting. Tanpa output ini, pipeline tidak tahu di mana posisi vertex tersebut dalam ruang clip. Dari sinilah vertex kemudian diteruskan ke tahap rasterisasi, di mana bentuk geometri akan diubah menjadi pixel yang bisa ditampilkan.

Intuisi visualnya sederhana: vertex shader adalah “gerbang” yang mengubah data titik geometri menjadi posisi yang dapat dirender. Mahasiswa perlu memahami bahwa transformasi yang selama ini dibahas secara matematis, seperti matrix dan vector, pada akhirnya banyak diterapkan di tahap ini.

### Inti yang Harus Ditekankan

- **Vertex Shader** berjalan **satu kali untuk setiap vertex**, bukan satu kali untuk seluruh objek.
- Input utamanya adalah **attribute** per-vertex, dan output pentingnya adalah `gl_Position`.
- `gl_Position` menentukan posisi vertex dalam pipeline sebelum tahap rasterisasi.
- Vertex shader adalah tempat transformasi geometri mulai diterapkan dalam rendering real-time.

### Transisi ke Slide Berikutnya

Setelah memahami tugas dasarnya, kita akan melihat contoh vertex shader sederhana yang mengubah attribute posisi menjadi `gl_Position`.

---

## Slide 034 - Vertex Shader Sederhana

### Narasi

Mari kita lihat bentuk paling sederhana dari **vertex shader** dalam GLSL ES 3.00.

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

Pada baris pertama, `#version 300 es` menyatakan bahwa shader ini menggunakan versi GLSL ES 3.00. Ini penting karena menentukan aturan sintaks yang dipakai, termasuk penggunaan `in` untuk input vertex.

`in vec2 a_position;` adalah **attribute** yang diterima oleh vertex shader. `vec2` berarti setiap vertex membawa dua komponen koordinat, yaitu `x` dan `y`. Nama `a_position` menunjukkan bahwa data ini berisi posisi vertex.

Fungsi `main()` adalah titik masuk shader. Sesuai dengan konsep sebelumnya, vertex shader dijalankan **satu kali untuk setiap vertex**. Di dalam `main()`, kita mengisi `gl_Position` dengan nilai `vec4(a_position, 0.0, 1.0)`.

`gl_Position` adalah **output posisi vertex**. Komponen `x` dan `y` diambil dari `a_position`, komponen `z` diisi `0.0`, dan komponen `w` diisi `1.0`. Dengan `w = 1.0`, koordinat `x` dan `y` tidak berubah setelah proses pembagian perspektif oleh GPU.

Artinya, contoh ini menempatkan vertex secara langsung pada bidang 2D. Tidak ada matriks transformasi, kamera, atau lighting yang terlibat pada tahap ini.

Inti yang perlu kita pegang adalah: vertex shader sederhana ini hanya meneruskan posisi vertex ke `gl_Position`. Selama `gl_Position` terisi dengan benar, GPU dapat melanjutkan proses ke tahap rasterisasi.

### Inti yang Harus Ditekankan

- `#version 300 es` menandai shader sebagai GLSL ES 3.00.
- `a_position` adalah input vertex yang berisi koordinat 2D.
- `gl_Position` adalah output posisi vertex yang dihasilkan vertex shader.
- `vec4(a_position, 0.0, 1.0)` mengubah koordinat 2D menjadi posisi dengan `z = 0.0` dan `w = 1.0`.
- Contoh ini menunjukkan vertex shader paling dasar sebelum transformasi, lighting, atau fragment shader.

### Transisi ke Slide Berikutnya

Setelah posisi vertex dihasilkan oleh vertex shader, GPU akan melanjutkan ke tahap rasterisasi. Pada slide berikutnya, kita akan melihat bagaimana **fragment shader** bertugas menentukan warna dari fragment yang dihasilkan.

---

## Slide 035 - Fragment Shader

### Narasi

Setelah **Vertex Shader** menentukan posisi vertex, pipeline rendering tidak langsung menampilkan gambar ke layar. Posisi vertex tersebut masih perlu diproses lebih lanjut oleh tahap **rasterization**. Rasterization bertugas memecah primitive geometri, misalnya segitiga, menjadi kumpulan **fragment**. Setiap fragment mewakili area kecil pada layar yang akan diberi warna.

**Fragment Shader** berjalan untuk setiap fragment yang dihasilkan oleh rasterization. Artinya, jika sebuah segitiga menutupi banyak area di layar, fragment shader dapat dipanggil berkali-kali, satu kali untuk setiap fragment yang perlu diwarnai. Inilah alasan mengapa fragment shader sangat penting dalam grafika komputer real-time: ia menentukan tampilan visual akhir objek yang kita lihat.

Tugas dasar fragment shader pada slide ini adalah:

- **menentukan warna** fragment,
- **menerima interpolated data** dari vertex,
- dan nantinya dapat menggunakan **texture** serta **lighting**.

Poin yang perlu kita pahami adalah bahwa fragment shader tidak mengubah bentuk geometri. Ia tidak memindahkan vertex atau mengubah posisi objek. Peran utamanya adalah menghitung warna atau informasi visual untuk setiap fragment. Dengan kata lain, vertex shader lebih berkaitan dengan “di mana objek berada”, sedangkan fragment shader berkaitan dengan “bagaimana objek terlihat”.

Salah satu konsep penting di sini adalah **interpolated data**. Data yang diberikan pada vertex, misalnya posisi, warna, atau koordinat texture, dapat diinterpolasi oleh GPU selama rasterization. Fragment shader kemudian menerima nilai-nilai yang sudah diinterpolasi tersebut. Misalnya, jika dua vertex memiliki warna berbeda, fragment di antara keduanya dapat menerima warna yang berada di antara kedua warna tersebut. Mekanisme ini memungkinkan tampilan gradasi yang halus pada objek.

Sebelum lanjut ke contoh kode, kita perlu mengingat tiga hal utama: fragment shader berjalan setelah rasterization, ia dipanggil per fragment, dan output dasarnya adalah warna. Konsep ini akan menjadi dasar untuk pembahasan texture dan lighting, karena keduanya pada akhirnya akan digunakan untuk menghitung warna fragment yang lebih realistis.

### Inti yang Harus Ditekankan

- **Fragment Shader** berjalan untuk fragment yang dihasilkan oleh **rasterization**, bukan untuk vertex.
- Tugas utamanya adalah **menentukan warna** fragment, bukan mengubah geometri.
- Fragment shader dapat menerima **interpolated data** dari vertex, seperti warna atau koordinat texture.
- Konsep ini menjadi dasar untuk penggunaan **texture** dan **lighting** pada tahap selanjutnya.

### Transisi ke Slide Berikutnya

Setelah memahami perannya secara konseptual, kita akan melihat contoh **Fragment Shader** sederhana yang hanya menetapkan warna output secara langsung.

---

## Slide 036 - Fragment Shader Sederhana

### Narasi

Pada slide ini kita melihat bentuk paling sederhana dari **fragment shader**. Setelah proses rasterisasi menghasilkan **fragment**, GPU akan menjalankan fragment shader ini untuk setiap fragment yang terlihat di layar. Tugas dasarnya sangat sederhana: menentukan warna final yang akan ditampilkan.

```glsl
#version 300 es
precision highp float;

out vec4 outColor;

void main() {
  outColor =
    vec4(0.0, 0.7, 1.0, 1.0);
}
```

Baris `#version 300 es` menyatakan bahwa kode ini menggunakan **GLSL ES 3.00**, yaitu versi bahasa shader yang umum digunakan dalam WebGL modern. Baris `precision highp float;` menentukan tingkat presisi untuk tipe data `float`, sehingga perhitungan warna menggunakan presisi tinggi.

Variabel `out vec4 outColor;` adalah variabel output dari fragment shader. Artinya, shader ini akan menghasilkan satu nilai warna berupa `vec4`. Dalam konteks rendering, `vec4` biasanya merepresentasikan komponen **RGBA**, yaitu red, green, blue, dan alpha.

Fungsi `main()` adalah titik masuk shader. Di dalamnya, kita menuliskan:

```glsl
outColor = vec4(0.0, 0.7, 1.0, 1.0);
```

Nilai ini berarti red = `0.0`, green = `0.7`, blue = `1.0`, dan alpha = `1.0`. Secara visual, warna tersebut menghasilkan biru muda atau cyan yang cukup terang. Karena nilai ini sama untuk semua fragment, objek akan tampak berwarna solid tanpa gradasi, tekstur, atau pencahayaan.

Dalam pipeline rendering, fragment shader berada setelah vertex shader dan rasterisasi. Vertex shader bertugas mengolah posisi vertex, rasterisasi mengubah geometri menjadi fragment, lalu fragment shader menentukan warna akhir dari fragment tersebut. Pada contoh ini, fragment shader belum menerima input apa pun, sehingga ia hanya menghasilkan warna konstan.

Meskipun sederhana, contoh ini penting karena menunjukkan bahwa fragment shader adalah tahap di mana warna final objek ditentukan. Dari titik ini, kita bisa menambahkan input seperti posisi, normal, warna vertex, tekstur, atau parameter lighting untuk menghasilkan tampilan yang lebih kompleks.

### Inti yang Harus Ditekankan

- **Fragment shader** berjalan untuk setiap fragment yang dihasilkan rasterisasi.
- Variabel `out vec4 outColor;` adalah output warna final dari fragment shader.
- `vec4(0.0, 0.7, 1.0, 1.0)` menghasilkan warna solid cyan dengan alpha penuh.
- Contoh ini belum menggunakan tekstur, lighting, atau input interpolated.
- Fragment shader menentukan warna akhir yang akan ditampilkan pada layar.

### Transisi ke Slide Berikutnya

Setelah kita melihat contoh fragment shader yang sangat sederhana, langkah berikutnya adalah membandingkannya dengan vertex shader. Dengan begitu, kita bisa memahami perbedaan peran keduanya dalam pipeline rendering: vertex shader mengolah posisi, sedangkan fragment shader mengolah warna akhir.

---

## Slide 037 - Vertex Shader vs Fragment Shader

### Narasi

Setelah kita melihat fragment shader sederhana yang menghasilkan warna tetap, sekarang kita perlu membedakan dua tahap shader utama dalam pipeline WebGL: **Vertex Shader** dan **Fragment Shader**. Keduanya sama-sama program GLSL, tetapi bekerja pada objek yang berbeda dan memiliki tanggung jawab yang berbeda.

Secara sederhana, **Vertex Shader** dijalankan **per vertex**. Tugas utamanya adalah mengolah posisi titik geometri, misalnya mengubah koordinat objek menjadi posisi yang siap diproyeksikan ke layar. Output penting dari tahap ini adalah `gl_Position`, yang menentukan di mana vertex tersebut akan muncul setelah tahap rasterisasi.

Sebaliknya, **Fragment Shader** dijalankan **per fragment**. Fragment dapat dipahami sebagai bagian kecil dari area layar yang sedang diproses untuk menghasilkan warna akhir. Tugas utamanya adalah menentukan warna atau properti visual pada titik tersebut. Outputnya adalah **final fragment color**, yaitu warna yang akan ditampilkan pada layar.

Kita bisa membaca tabel pada slide sebagai pembanding dua peran tersebut:

| Aspek | Vertex Shader | Fragment Shader |
|---|---|---|
| Frekuensi eksekusi | per vertex | per fragment |
| Fokus utama | mengolah posisi | mengolah warna |
| Input | vertex input | interpolated input |
| Output | `gl_Position` | final fragment color |

Perbaris ini penting karena menunjukkan alur data dalam pipeline. Vertex shader menerima data vertex, seperti posisi atau atribut geometri, lalu menghasilkan posisi layar. Setelah rasterizer memproses geometri, fragment shader menerima nilai yang sudah **diinterpolasi** dari vertex-vertex di sekitarnya, bukan hanya satu vertex tunggal. Karena itu, fragment shader dapat menghasilkan warna yang berubah secara halus di permukaan objek.

Poin yang perlu kita pegang sebelum lanjut adalah: **Vertex Shader menentukan di mana objek berada, sedangkan Fragment Shader menentukan bagaimana objek terlihat.** Dalam konteks WebGL, pemisahan ini penting karena GPU dapat memproses posisi geometri dan warna permukaan secara paralel dan bertahap. Kita tidak perlu menjelaskan ulang perbedaan ini secara detail pada pertemuan berikutnya; konsep ini akan langsung digunakan ketika kita menghubungkan atribut, variabel, dan interpolasi antar shader.

### Inti yang Harus Ditekankan

- **Vertex Shader** bekerja **per vertex** dan fokus pada pengolahan posisi, dengan output utama `gl_Position`.
- **Fragment Shader** bekerja **per fragment** dan fokus pada pengolahan warna, dengan output utama final fragment color.
- Input fragment shader biasanya berupa nilai **interpolated input** dari vertex-vertex di sekitarnya, sehingga warna dapat berubah halus di permukaan.
- Perbedaan ini mencerminkan alur pipeline: vertex shader menyiapkan posisi geometri, rasterizer memproses area layar, lalu fragment shader menghasilkan warna akhir.

### Transisi ke Slide Berikutnya

Untuk memahami bagaimana data berpindah dari vertex shader ke fragment shader, kita akan melihat peran `in`, `out`, dan interpolasi yang dilakukan rasterizer.

---

## Slide 038 - in, out, dan Interpolasi

### Narasi

Setelah kita membedakan **vertex shader** dan **fragment shader**, langkah berikutnya adalah memahami bagaimana data berpindah antar tahap shader. Pada slide ini kita fokus pada mekanisme `out` dan `in`, serta apa yang terjadi pada nilai yang dihasilkan vertex shader sebelum sampai ke fragment shader.

Di vertex shader, kita dapat mendeklarasikan variabel keluaran dengan `out`. Contoh pada slide:

```glsl
out vec3 v_color;
```

Artinya, vertex shader akan menghasilkan nilai `v_color` untuk setiap vertex. Nilai ini biasanya diisi berdasarkan data vertex, misalnya warna yang diberikan pada titik geometri.

Di fragment shader, variabel yang sama dideklarasikan sebagai `in`:

```glsl
in vec3 v_color;
```

Dengan nama dan tipe yang sama, fragment shader dapat membaca nilai `v_color` yang dikirim dari vertex shader. Jadi, `out` pada vertex shader dan `in` pada fragment shader berfungsi sebagai **jembatan antar tahap shader**.

Yang penting untuk dipahami adalah nilai ini tidak langsung dipakai apa adanya untuk seluruh segitiga. Rasterizer akan mengisi nilai di antara vertex secara otomatis.

```text
diinterpolasi otomatis
```

oleh **rasterizer**.

Secara visual, bayangkan sebuah segitiga dengan tiga vertex. Setiap vertex memiliki nilai `v_color`. Saat rasterizer mengubah segitiga menjadi kumpulan fragment, ia menghitung nilai `v_color` untuk setiap fragment berdasarkan posisi fragment di dalam segitiga. Fragment yang dekat dengan satu vertex akan menerima nilai warna yang dekat dengan warna vertex tersebut, dan seterusnya.

Mekanisme ini penting karena fragment shader bekerja **per fragment**, bukan per vertex. Dengan **interpolasi**, kita bisa mendapatkan variasi warna yang halus di permukaan objek, bukan hanya warna yang sama untuk seluruh segitiga. Konsep yang sama juga dapat diterapkan untuk data lain yang perlu dibawa dari vertex ke fragment, selama dideklarasikan dengan `out` dan `in` yang sesuai.

Alur dasarnya dapat diringkas sebagai berikut:

1. Vertex shader mengisi `v_color` untuk setiap vertex.
2. Rasterizer menginterpolasi nilai `v_color` untuk setiap fragment di dalam segitiga.
3. Fragment shader membaca `v_color` yang sudah diinterpolasi untuk setiap fragment.

Sebelum lanjut, hal yang perlu dipastikan mahasiswa pahami adalah: `out` dan `in` menghubungkan shader stage, rasterizer melakukan interpolasi, dan fragment shader menerima nilai yang sudah diinterpolasi untuk setiap fragment.

### Inti yang Harus Ditekankan

- `out` pada vertex shader menandai data yang dikirim ke tahap berikutnya.
- `in` pada fragment shader menandai data yang diterima dari tahap sebelumnya.
- Nama dan tipe variabel harus sesuai agar data dapat dibaca dengan benar.
- Rasterizer menginterpolasi nilai di antara vertex secara otomatis.
- Fragment shader menerima nilai per fragment, bukan nilai vertex secara langsung.

### Transisi ke Slide Berikutnya

Setelah kita memahami data yang berasal dari vertex dan diinterpolasi ke fragment, kita akan melihat jenis data lain yang tidak berubah per vertex atau per fragment, yaitu `uniform`, yang berlaku untuk satu draw call.

---

## Slide 039 - Uniform

### Narasi

Dalam shader, tidak semua data berubah untuk setiap vertex. Ada data yang nilainya sama untuk seluruh objek yang sedang dirender dalam satu perintah gambar, dan data inilah yang disebut **uniform**.

Contoh deklarasinya di GLSL adalah seperti ini:

```glsl
uniform float u_time;
uniform vec4 u_color;
uniform mat4 u_matrix;
```

Di sini, `u_time` bisa digunakan untuk animasi berbasis waktu, `u_color` untuk warna global, dan `u_matrix` untuk transformasi seperti model, view, atau projection. Nilai-nilai ini dibaca oleh shader, tetapi tidak disimpan per vertex.

Yang perlu kita pahami adalah sifat **uniform** yang berlaku **per draw call**. Artinya, selama satu `draw call` berlangsung, semua vertex dan fragment yang diproses akan menggunakan nilai uniform yang sama. Jika kita ingin mengubah nilai uniform, biasanya kita harus mengatur ulang nilainya sebelum `draw call` berikutnya.

Perbandingannya dengan data shader lain cukup penting:

- **Attribute** adalah data yang berbeda untuk setiap vertex, misalnya posisi, normal, atau UV coordinate.
- **Uniform** adalah data yang sama untuk seluruh `draw call`.
- **out/in** adalah data yang diteruskan antar stage shader, misalnya dari vertex shader ke fragment shader.

Secara pipeline, uniform biasanya disiapkan oleh aplikasi sebelum rendering dimulai, lalu dibaca oleh vertex shader atau fragment shader. Ia tidak ikut diinterpolasi oleh rasterizer seperti nilai `out` dari vertex shader. Karena itu, uniform sangat cocok untuk parameter global seperti waktu, warna latar, parameter kamera, atau matriks transformasi yang sama untuk banyak vertex.

Sebelum lanjut, mahasiswa perlu memahami bahwa uniform bukan pengganti attribute. Jika setiap vertex membutuhkan nilai yang berbeda, data tersebut harus menjadi attribute. Uniform lebih tepat untuk nilai yang bersifat global atau sama untuk satu batch geometri yang dirender.

### Inti yang Harus Ditekankan

- **Uniform** adalah parameter shader yang nilainya sama untuk seluruh vertex/fragment dalam satu `draw call`.
- Uniform berbeda dengan **attribute** yang bersifat per vertex, dan berbeda dengan **out/in** yang menghubungkan antar stage shader.
- Uniform cocok untuk data global seperti `u_time`, `u_color`, atau `u_matrix` yang tidak berubah per vertex.

### Transisi ke Slide Berikutnya

Setelah kita memahami jenis data yang dibaca shader, langkah berikutnya adalah melihat apa yang terjadi setelah vertex diproses, yaitu bagaimana vertex membentuk primitive dan kemudian menjadi fragment dalam tahap rasterization.

---

## Slide 040 - Rasterization

### Narasi

Setelah vertex diproses dan disusun menjadi primitive geometri, tahap penting berikutnya adalah **rasterization**. Pada tahap ini, GPU mengubah bentuk geometri seperti `triangle` menjadi titik-titik layar yang akan dihitung warnanya. Dengan kata lain, rasterization adalah jembatan antara dunia geometri dan dunia piksel.

Kita bisa membaca alur pada slide sebagai berikut:

```text
Triangle
   ↓
Rasterization
   ↓
Fragments
   ↓
Fragment Shader
```

Alurnya bergerak dari atas ke bawah. Input awalnya adalah `triangle` yang sudah terbentuk dari vertex. Proses **rasterization** kemudian menentukan area layar mana saja yang tertutup oleh triangle tersebut. Output dari proses ini adalah `fragments`, yaitu kandidat nilai piksel yang akan diproses lebih lanjut. Setelah itu, `fragments` dikirim ke **fragment shader** untuk menghitung warna atau properti visualnya.

Poin penting yang perlu kita pahami adalah: satu `triangle` dapat menghasilkan banyak `fragment`. Hal ini terjadi karena satu triangle biasanya menutupi lebih dari satu area layar. Semakin besar triangle tersebut di layar, semakin banyak fragment yang dihasilkan. Jadi, jumlah fragment tidak selalu sama dengan jumlah vertex.

Tahap rasterization penting karena menentukan apa yang akan dihitung oleh fragment shader. Fragment shader tidak bekerja langsung pada vertex, melainkan bekerja pada fragment yang dihasilkan rasterization. Karena itu, sebelum masuk ke perhitungan warna, kita perlu memahami bahwa geometri harus terlebih dahulu diubah menjadi representasi layar melalui rasterization.

### Inti yang Harus Ditekankan

- **Rasterization** mengubah primitive geometri seperti `triangle` menjadi `fragments` di layar.
- Satu `triangle` dapat menghasilkan banyak `fragment` karena menutupi banyak area layar.
- `Fragment` adalah input utama untuk **fragment shader**, bukan vertex.
- Tahap ini menentukan area layar mana yang akan dihitung warnanya pada pipeline rendering.

### Transisi ke Slide Berikutnya

Setelah kita memahami bahwa fragment dihasilkan dari proses rasterization, langkah berikutnya adalah melihat bagaimana shader program itu sendiri dibuat, yaitu melalui proses compile dan link shader.

---

## Slide 041 - Compile dan Link Shader

### Narasi

Sebelum shader dapat dijalankan oleh GPU, sumber **GLSL** tidak langsung dipakai apa adanya. Sumber shader masih berupa teks program yang harus melewati proses persiapan terlebih dahulu. Proses ini penting karena GPU tidak mengeksekusi kode GLSL mentah, melainkan shader yang sudah dikompilasi dan kemudian dihubungkan menjadi satu program yang siap digunakan.

Alur pada slide ini dapat dibaca dari atas ke bawah:

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

Langkah pertama adalah **compile vertex shader**. Pada tahap ini, sumber GLSL untuk vertex shader diperiksa dan diubah menjadi bentuk yang dapat diproses oleh GPU. Biasanya, tahap ini juga digunakan untuk menemukan kesalahan syntax atau masalah lain yang dilaporkan melalui **shader info log**.

Setelah vertex shader berhasil dikompilasi, proses yang sama dilakukan untuk **fragment shader**. Fragment shader juga dikompilasi secara terpisah karena shader ini bekerja pada tahap yang berbeda dalam rendering pipeline. Vertex shader berperan sebelum rasterisasi, sedangkan fragment shader berperan setelah rasterisasi, ketika setiap fragment perlu diberi warna atau nilai visual.

Setelah kedua shader berhasil dikompilasi, langkah berikutnya adalah **link**. Pada tahap ini, vertex shader dan fragment shader dihubungkan menjadi satu **shader program**. Program inilah yang kemudian dapat digunakan oleh WebGL untuk melakukan rendering. Jika proses link gagal, kita dapat memeriksa **program info log** untuk mengetahui masalah yang terjadi.

Inti yang perlu dipahami adalah bahwa compile dan link adalah dua tahap yang berbeda. **Compile** dilakukan untuk setiap shader secara terpisah, sedangkan **link** dilakukan untuk menggabungkan shader yang sudah siap menjadi satu program. Tanpa proses ini, WebGL tidak memiliki program shader yang valid untuk dijalankan.

### Inti yang Harus Ditekankan

- **GLSL Source** harus dikompilasi terlebih dahulu sebelum dapat digunakan oleh GPU.
- **Vertex shader** dan **fragment shader** dikompilasi secara terpisah.
- **Link** menggabungkan shader yang sudah dikompilasi menjadi satu **shader program**.
- **Shader info log** dan **program info log** membantu memeriksa kesalahan saat compile atau link.
- **Shader program** adalah bentuk shader yang siap digunakan dalam rendering.

### Transisi ke Slide Berikutnya

Setelah shader berhasil dikompilasi dan dihubungkan menjadi program, langkah berikutnya adalah menggunakan program tersebut dalam WebGL. Pada slide berikutnya, kita akan melihat bagaimana **shader program** dipilih dan diterapkan, misalnya dengan `gl.useProgram(program)`.

---

## Slide 042 - Shader Program

### Narasi

Setelah **Vertex Shader** dan **Fragment Shader** berhasil dikompilasi, keduanya belum bisa langsung digunakan secara terpisah oleh GPU. Dalam WebGL, kedua shader tersebut perlu **dihubungkan** menjadi satu entitas yang disebut **shader program**.

Pada diagram, **Vertex Shader** dan **Fragment Shader** masuk ke proses **Link**, lalu menghasilkan **Program**. Artinya, program ini adalah paket shader yang sudah siap dieksekusi. **Vertex Shader** bertugas memproses posisi vertex, sedangkan **Fragment Shader** bertugas menentukan warna atau tampilan pixel setelah rasterisasi.

```text
Vertex Shader ───┐
                  ├→ Link → Program
Fragment Shader ─┘
```

Secara praktis, setelah program terbentuk, kita memilih program tersebut dengan:

```javascript
gl.useProgram(program);
```

Panggilan `gl.useProgram(program)` berfungsi mengaktifkan shader program untuk draw call berikutnya. Selama program ini aktif, GPU akan menggunakan **Vertex Shader** dan **Fragment Shader** yang sudah di-link tersebut saat proses rendering.

Penting untuk dipahami bahwa `program` di sini adalah objek atau handle yang mewakili shader gabungan, bukan sekadar teks GLSL. Jika program tidak diaktifkan, GPU tidak akan memakai shader program tersebut untuk perintah gambar yang berikutnya.

### Inti yang Harus Ditekankan

- **Vertex Shader** dan **Fragment Shader** harus di-link menjadi satu **shader program**.
- `gl.useProgram(program)` digunakan untuk mengaktifkan program shader sebelum proses gambar.
- **Shader program** adalah unit yang dieksekusi GPU saat rendering.

### Transisi ke Slide Berikutnya

Setelah shader program aktif, langkah berikutnya adalah memberi tahu WebGL objek apa yang harus digambar. Pada slide berikutnya, kita akan melihat **draw call** seperti `gl.drawArrays(...)` yang memicu pipeline rendering.

---

## Slide 043 - Draw Call

### Narasi

Setelah shader program sudah dibuat, di-link, dan diaktifkan dengan `gl.useProgram(program)`, langkah berikutnya adalah memberi tahu WebGL untuk mulai menggambar. Perintah ini disebut **draw call**.

```javascript
gl.drawArrays(
  gl.TRIANGLES,
  0,
  3
);
```

Pada contoh ini, `gl.drawArrays` meminta WebGL menggambar primitif geometri berdasarkan data vertex yang sudah tersedia. Tiga argumen utamanya dapat dibaca sebagai berikut:

- `gl.TRIANGLES` adalah **mode** primitif. Artinya, setiap tiga vertex akan membentuk satu segitiga.
- `0` adalah **first**, yaitu indeks vertex pertama yang digunakan.
- `3` adalah **count**, yaitu jumlah vertex yang akan dibaca.

Karena mode-nya `TRIANGLES` dan `count` bernilai 3, maka WebGL akan membentuk **satu segitiga** dari tiga vertex pertama. Jika `count` bernilai 6, misalnya, maka akan terbentuk dua segitiga.

Poin penting yang perlu dipahami adalah: draw call bukan sekadar memanggil fungsi JavaScript biasa. Perintah ini menjadi pemicu agar data vertex diproses oleh GPU melalui **rendering pipeline**. Data vertex akan dibaca, diproses oleh vertex shader, kemudian diteruskan ke tahap rasterisasi dan fragment shader.

Namun, pada slide ini kita cukup menekankan bahwa `gl.drawArrays` adalah titik awal proses gambar. Detail alur lengkap dari vertex data hingga canvas akan kita bahas lebih sistematis pada slide berikutnya.

### Inti yang Harus Ditekankan

- **Draw call** adalah perintah yang memicu WebGL untuk menggambar geometri.
- `gl.drawArrays(gl.TRIANGLES, 0, 3)` berarti gambar satu segitiga dari vertex indeks 0 sampai 2.
- `count` menyatakan jumlah **vertex**, bukan jumlah segitiga.
- Draw call menghubungkan data vertex, shader program, dan pipeline rendering.

### Transisi ke Slide Berikutnya

Sekarang kita sudah tahu bahwa `gl.drawArrays` adalah pemicu gambar. Selanjutnya, kita akan melihat secara lebih lengkap bagaimana data vertex mengalir melalui pipeline WebGL hingga akhirnya menjadi piksel pada canvas.

---

## Slide 044 - Pipeline WebGL Fundamental

### Narasi

Setelah pada slide sebelumnya kita melihat `gl.drawArrays(gl.TRIANGLES, 0, 3)` sebagai **draw call**, langkah berikutnya adalah memahami apa yang terjadi setelah perintah itu dipanggil. Draw call bukan sekadar “menggambar”; ia memicu sebuah alur pemrosesan yang disebut **pipeline WebGL**.

Diagram pada slide ini dibaca dari atas ke bawah:

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

Alur ini menunjukkan bagaimana data geometri berubah menjadi piksel yang akhirnya tampil di layar.

- **JavaScript** adalah lapisan aplikasi. Di sini kita menyiapkan data, memanggil API WebGL, dan memberi tahu GPU apa yang harus digambar.
- **Vertex Data** berisi titik-titik geometri, misalnya koordinat vertex segitiga.
- **Buffer** adalah tempat data tersebut disimpan agar dapat diakses oleh GPU.
- **Attribute** adalah pemetaan data vertex ke variabel yang digunakan shader.
- **Vertex Shader** memproses setiap vertex, misalnya mengubah posisi dari koordinat objek ke koordinat layar.
- **Primitive** adalah bentuk geometri yang sudah siap dirasterisasi, seperti segitiga yang dihasilkan dari vertex.
- **Rasterization** mengubah primitive menjadi kumpulan fragmen atau area piksel yang perlu diberi warna.
- **Fragment Shader** menentukan warna setiap fragmen, misalnya warna dasar atau hasil perhitungan visual sederhana.
- **Framebuffer** menyimpan hasil warna fragmen sebagai gambar yang siap ditampilkan.
- **Canvas** adalah elemen HTML tempat framebuffer akhirnya tampil.

Inti dari pipeline ini adalah pemisahan tugas: data geometri disiapkan terlebih dahulu, lalu diproses oleh shader, kemudian diubah menjadi piksel, dan terakhir disimpan ke framebuffer. Mahasiswa perlu memahami bahwa `gl.drawArrays` hanya menjadi pemicu; proses sebenarnya terjadi melalui tahapan di atas.

Sebelum lanjut, hal penting yang harus dipahami adalah bahwa **Vertex Shader** bekerja pada tingkat vertex, sedangkan **Fragment Shader** bekerja pada tingkat fragmen atau piksel. Jika posisi vertex salah, bentuk objek akan salah. Jika fragment shader salah, warna atau tampilan objek akan salah.

### Inti yang Harus Ditekankan

- **Pipeline WebGL** adalah alur data dari geometri menuju piksel yang tampil di `Canvas`.
- **Draw call** seperti `gl.drawArrays` memicu pipeline, tetapi pipeline menjelaskan tahapan pemrosesan yang terjadi.
- **Vertex Shader** memproses vertex, **Rasterization** mengubah primitive menjadi fragmen, dan **Fragment Shader** menentukan warna fragmen.
- **Framebuffer** adalah hasil akhir sebelum gambar ditampilkan ke layar.

### Transisi ke Slide Berikutnya

Setelah kita tahu pipeline berjalan dari vertex hingga canvas, pertanyaan berikutnya adalah bagaimana pipeline ini dijalankan berulang untuk animasi. Slide berikutnya akan membahas **Rendering Loop**, yaitu pola `Update → Draw → Next Frame` yang membuat adegan terus diperbarui setiap frame.

---

## Slide 045 - Rendering Loop

### Narasi

Setelah pipeline WebGL sudah kita pahami sebagai alur dari data vertex hingga canvas, langkah berikutnya adalah memahami bagaimana gambar yang bergerak dibuat. Dalam grafika real-time, satu frame saja tidak cukup; kita perlu mengulang proses rendering secara terus-menerus. Slide ini memperkenalkan **rendering loop**, yaitu pola dasar untuk animasi WebGL.

```javascript
function render() {
  update();
  draw();

  requestAnimationFrame(render);
}

render();
```

Kode di atas sangat singkat, tetapi isinya menentukan ritme aplikasi. Fungsi `render()` memanggil `update()` dan `draw()`, lalu meminta browser menjalankan `render()` kembali pada frame berikutnya melalui `requestAnimationFrame(render)`. Pemanggilan `render()` di akhir kode memulai loop pertama kali.

Secara konsep, `update()` adalah tempat kita mengubah state animasi, misalnya waktu, posisi objek, rotasi, atau parameter yang berubah setiap frame. `draw()` adalah tempat kita memberi instruksi WebGL untuk menggambar, seperti memilih buffer, shader, dan memanggil draw call. Dengan pemisahan ini, logika perubahan dan proses gambar tidak bercampur.

Pola **Update → Draw → Next Frame** penting karena menggambarkan urutan kerja per frame. Pada setiap frame, state diperbarui, scene digambar, lalu frame berikutnya dijadwalkan. Ini membuat animasi terasa kontinu, bukan hanya gambar statis. Dalam konteks pipeline sebelumnya, setiap frame pada dasarnya menjalankan ulang alur vertex data, shader, rasterization, fragment shader, hingga framebuffer/canvas, tetapi dengan state yang mungkin sudah berubah.

Yang perlu diperhatikan adalah `requestAnimationFrame` bukan `setTimeout` atau `setInterval` biasa. Browser menjadwalkan callback selaras dengan refresh rate display, sehingga lebih hemat dan lebih natural untuk animasi. Mahasiswa cukup memahami bahwa loop ini membuat aplikasi tetap hidup dan siap menerima perubahan waktu atau interaksi, tanpa memblokir thread utama.

### Inti yang Harus Ditekankan

- **Rendering loop** adalah pola dasar animasi WebGL: update state, draw scene, lalu schedule next frame.
- `requestAnimationFrame(render)` membuat fungsi `render()` dipanggil berulang oleh browser, bukan manual terus-menerus.
- Pemisahan `update()` dan `draw()` membantu menjaga logika animasi dan perintah gambar tetap rapi.
- Setiap frame menjalankan pipeline rendering, sehingga gambar yang berubah dihasilkan secara kontinu.

### Transisi ke Slide Berikutnya

Setelah pola loop ini dipahami, kita akan menerapkannya pada praktikum WebGL Primitive Playground, di mana mahasiswa membuat triangle, primitive, vertex color, draw mode, animasi sederhana, dan interaksi mouse atau keyboard.

---

## Slide 046 - Praktikum: WebGL Primitive Playground

### Narasi

Praktikum ini dirancang sebagai titik temu antara konsep yang sudah kita pelajari dan kode yang benar-benar berjalan. Fokusnya bukan membuat adegan 3D yang rumit, tetapi memastikan mahasiswa mampu melihat bagaimana **data vertex**, **buffer**, **attribute**, **shader program**, dan **draw call** bekerja sebagai satu rantai.

Dalam pipeline WebGL, alurnya dapat dibaca sebagai berikut:

```text
Vertex data → Buffer → Attribute → Shader Program → Draw Call → Fragment
```

Data vertex adalah titik awal. Kita menyimpan koordinat, dan pada praktikum ini juga warna, ke dalam buffer. Buffer adalah tempat CPU menaruh data agar bisa dibaca GPU. Setelah itu, shader program menentukan bagaimana setiap vertex diproses. **Attribute** menjadi jembatan antara data di buffer dan variabel yang dibaca oleh vertex shader.

Mahasiswa diminta membuat aplikasi yang menampilkan:

- triangle,
- beberapa primitive,
- vertex color,
- minimal dua draw mode,
- animasi sederhana,
- interaksi mouse atau keyboard.

Salah satu tujuan penting praktikum ini adalah menampilkan **vertex color**. Artinya, warna tidak diberikan sebagai tekstur, tetapi disimpan per vertex. GPU kemudian melakukan interpolasi warna di antara vertex, sehingga permukaan primitive tampak memiliki gradasi warna. Ini membantu mahasiswa memahami bahwa atribut vertex tidak hanya berupa posisi, tetapi juga bisa berupa warna, normal, atau koordinat tekstur.

Praktikum juga meminta minimal **dua draw mode**. Ini penting karena satu set data vertex dapat dirender dengan cara berbeda, misalnya sebagai `gl.POINTS`, `gl.LINES`, atau `gl.TRIANGLES`. Dengan membandingkan dua mode, mahasiswa dapat melihat bahwa `draw call` tidak hanya menentukan “apa yang digambar”, tetapi juga “bagaimana vertex diinterpretasikan”.

Animasi sederhana dan interaksi mouse atau keyboard menjadi penghubung ke konsep **rendering loop**. Tanpa loop, gambar hanya muncul sekali. Dengan loop, aplikasi dapat memperbarui transformasi, posisi, atau parameter shader setiap frame. Interaksi input kemudian mengubah state aplikasi, misalnya memutar objek, mengubah warna, atau memilih primitive.

Sebelum lanjut, hal yang perlu dipahami adalah: praktikum ini bukan sekadar membuat bentuk muncul di layar. Mahasiswa harus mampu menjelaskan mengapa buffer perlu dibuat, mengapa attribute harus terhubung, mengapa shader perlu dikompilasi dan di-link, serta mengapa `draw call` menentukan jumlah dan mode vertex yang dirender.

### Inti yang Harus Ditekankan

- Praktikum ini menghubungkan **buffer**, **GLSL shader**, **attribute**, **shader program**, dan **draw call** dalam satu alur rendering.
- **Vertex color** menunjukkan bahwa atribut vertex dapat berupa warna, dan warna akan diinterpolasi oleh GPU.
- Minimal **dua draw mode** membantu memahami bahwa interpretasi vertex dapat berbeda, misalnya point, line, atau triangle.
- Animasi dan interaksi menunjukkan bahwa rendering adalah proses berulang, bukan satu gambar statis.

### Transisi ke Slide Berikutnya

Setelah cakupan praktikum dipahami, langkah berikutnya adalah merangkum tahapan ringkas dan output minimum yang harus dipenuhi mahasiswa.

---

## Slide 047 - Rencana dan Output Praktikum

### Narasi

Sebelum mahasiswa mulai menulis kode, penting untuk melihat praktikum ini sebagai satu alur kerja yang runtut. Tahapan berikut bukan sekadar daftar tugas, melainkan urutan yang mengikuti cara GPU menerima data, memprosesnya, lalu menghasilkan gambar.

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

Tahap pertama hingga ketujuh adalah fondasi. Kita mulai dengan `WebGL2 Context` sebagai lingkungan rendering, lalu menyiapkan **vertex data** yang berisi koordinat objek. Data tersebut dikirim ke GPU melalui **buffer**, kemudian diproses oleh **GLSL shader**. Setelah shader dikompilasi dan di-link, **attribute** menghubungkan data vertex dengan input shader, sehingga `draw call` dapat menghasilkan primitive di layar.

Tahap delapan hingga sepuluh adalah lapisan peningkatan. **Vertex color** membuat objek tidak hanya berbentuk, tetapi juga memiliki warna. **Animasi** menunjukkan bahwa rendering bukan sekali gambar, melainkan proses yang terus diperbarui. **Interaksi** menghubungkan input pengguna dengan perubahan visual, misalnya posisi, rotasi, warna, atau mode gambar.

Output minimum yang diharapkan adalah:

- ≥ 3 primitive,
- ≥ 2 draw mode,
- `vertex color`,
- 1 objek bergerak,
- 1 interaksi.

Output ini penting karena memastikan mahasiswa tidak hanya berhasil menampilkan satu bentuk, tetapi juga memahami variasi primitive, perbedaan draw mode, pewarnaan, pembaruan frame, dan respons terhadap input.

### Inti yang Harus Ditekankan

- Urutan tahapan penting: context, data, buffer, shader, compile & link, attribute, draw call.
- Tahap dasar rendering harus berhasil sebelum menambah warna, animasi, dan interaksi.
- Output minimum menjadi bukti bahwa pipeline WebGL2 sudah berjalan: data masuk, shader memproses, primitive digambar, lalu visual diperbarui.

### Transisi ke Slide Berikutnya

Dengan rencana dan output minimum ini, kita dapat merangkum seluruh pertemuan sebagai satu benang merah: data, GPU, shader, primitive, fragment, dan gambar akhir.

---

## Slide 048 - Ringkasan Pertemuan

### Narasi

Sebagai penutup pertemuan, kita kembali ke gambaran besar dari apa yang telah kita pelajari. Hari ini kita membangun dasar kerja **WebGL2** mulai dari pembuatan **WebGL2 Context**, memahami **NDC**, menyiapkan **vertex** dan **primitive**, serta menyimpan data geometri menggunakan **Typed Array** dan **buffer**. Kita juga melihat bagaimana data tersebut dihubungkan ke shader melalui **attribute**, sehingga GPU tahu informasi apa yang harus diproses untuk setiap titik geometri.

Selanjutnya, kita masuk ke sisi pemrosesan visual menggunakan **GLSL dasar**. Di sini kita mengenal **Vertex Shader** yang bertugas memproses posisi vertex, serta **Fragment Shader** yang menentukan warna atau tampilan setiap fragment. Parameter global seperti **uniform** memungkinkan kita mengirim nilai dari JavaScript ke shader, sedangkan `in` / `out` menjadi mekanisme untuk meneruskan data antar tahap shader. Setelah shader dikompilasi dan dihubungkan melalui **compile & link**, kita dapat memicu proses gambar dengan **draw call** dan menjalankannya secara berulang dalam **rendering loop**.

Benang merah dari semua materi ini adalah alur pipeline rendering:

```text
DATA → GPU → SHADER → PRIMITIVE → FRAGMENT → IMAGE
```

Kita bisa membacanya dari kiri ke kanan. **DATA** berupa vertex, warna, atau parameter disimpan di sisi CPU, lalu dikirim ke **GPU** melalui buffer. **SHADER** memproses data tersebut, terutama pada tahap vertex dan fragment. Hasilnya membentuk **PRIMITIVE** seperti titik, garis, atau segitiga, yang kemudian dipecah menjadi **FRAGMENT** sebelum akhirnya menjadi **IMAGE** yang tampil di layar.

Sebelum lanjut, hal penting yang harus kita pegang adalah posisi setiap komponen dalam alur ini. Mahasiswa perlu mampu melacak dari mana data vertex berasal, bagaimana data itu dibaca oleh shader, apa peran **draw call**, dan mengapa **rendering loop** diperlukan agar gambar dapat diperbarui setiap frame. Pemahaman ini akan menjadi dasar yang sangat penting ketika kita mulai membahas transformasi dan sistem koordinat.

### Inti yang Harus Ditekankan

- **WebGL2 Context** adalah lingkungan utama untuk menjalankan rendering WebGL2.
- **NDC** menjadi ruang koordinat normalisasi yang penting untuk memahami posisi vertex sebelum ditampilkan.
- **Typed Array**, **buffer**, dan **attribute** adalah jalur utama data geometri menuju GPU.
- **Vertex Shader** dan **Fragment Shader** adalah dua tahap shader dasar yang menentukan posisi dan tampilan objek.
- **compile & link**, **draw call**, dan **rendering loop** menunjukkan bagaimana program shader dijalankan dan gambar dihasilkan.
- Pipeline `DATA → GPU → SHADER → PRIMITIVE → FRAGMENT → IMAGE` adalah model mental utama untuk memahami alur rendering.

### Transisi ke Slide Berikutnya

Dengan alur dasar WebGL2 dan GLSL ini sudah terbentuk, pertemuan berikutnya kita akan memperdalam **Transformation & Coordinate System**, yaitu bagaimana objek diposisikan, diputar, diskalakan, dan diproyeksikan ke layar.

---

## Slide 049 - TERIMA KASIH

### Narasi

Terima kasih atas perhatian dan partisipasi mahasiswa pada pertemuan kedua **Grafika Komputer**. Pada pertemuan ini kita telah membangun fondasi awal untuk memahami bagaimana objek visual diproses oleh GPU, mulai dari `WebGL2 Context`, data geometri, `Typed Array`, buffer, `attribute`, hingga shader dan `draw call`. Intinya, rendering real-time bukan sekadar menampilkan gambar, tetapi alur data yang terstruktur: data geometri masuk ke GPU, diproses oleh shader, menjadi primitive, lalu menghasilkan fragment dan citra akhir.

Sebelum lanjut ke topik berikutnya, pastikan mahasiswa memahami bahwa `Vertex Shader` dan `Fragment Shader` memiliki peran berbeda. `Vertex Shader` memproses posisi dan atribut titik, sedangkan `Fragment Shader` menentukan warna atau tampilan per pixel. Pemahaman ini penting karena hampir semua materi selanjutnya, termasuk transformasi, kamera, dan lighting, akan dibangun di atas pipeline yang sama.

Untuk pertemuan berikutnya, kita akan masuk ke **Transformation & Coordinate System**. Di sana kita akan melihat bagaimana objek diposisikan, diputar, dan diskalakan dalam ruang, serta bagaimana koordinat objek diubah menjadi koordinat yang dapat diproyeksikan ke layar. Jadi, fondasi shader dan buffer yang sudah kita pelajari hari ini akan menjadi dasar untuk memahami transformasi secara lebih visual dan matematis.

### Inti yang Harus Ditekankan

- Fondasi WebGL & GLSL: `WebGL2 Context`, buffer, `attribute`, shader, dan `draw call`.
- Rendering pipeline: `DATA → GPU → SHADER → PRIMITIVE → FRAGMENT → IMAGE`.
- Perbedaan peran `Vertex Shader` dan `Fragment Shader` dalam pipeline.
- Transformasi dan sistem koordinat akan menjadi lanjutan dari pemahaman pipeline rendering.

### Transisi ke Slide Berikutnya

Setelah menutup pertemuan ini, langkah berikutnya adalah memasuki **Transformation & Coordinate System**, di mana kita akan membahas bagaimana objek 3D diposisikan dan diubah dari koordinat lokal menuju koordinat layar.
