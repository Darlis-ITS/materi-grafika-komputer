# Narasi Grafika Komputer - Pertemuan 07

## Three.js Interactive 3D Application

Sumber: markdown/pert07-ringkas.md

---

## Slide 000 - Cover

### Narasi

Selamat datang kembali pada mata kuliah **EF234504 — Grafika Komputer**. Pada **Pertemuan 7** ini, kita akan memasuki topik yang lebih aplikatif, yaitu membangun **aplikasi 3D interaktif** menggunakan `Three.js`.

Topik ini penting karena grafika komputer tidak hanya berhenti pada konsep transformasi, kamera, rendering, dan material, tetapi juga bagaimana konsep-konsep tersebut diimplementasikan dalam sistem real-time yang dapat dilihat, digerakkan, dan dioperasikan oleh pengguna.

Pada pertemuan ini, kita akan melihat bagaimana objek 3D disusun dalam sebuah scene, bagaimana material dan animasi dibuat lebih realistis, serta bagaimana interaksi seperti hover dan click dapat dihubungkan ke objek di dalam aplikasi 3D.

### Inti yang Harus Ditekankan

- Pertemuan 7 berfokus pada **aplikasi 3D interaktif** dengan `Three.js`.
- Konsep grafika komputer akan diimplementasikan dalam konteks **scene**, **objek 3D**, **material**, **animasi**, dan **interaksi pengguna**.
- Mahasiswa perlu siap menghubungkan teori rendering dengan praktik pengembangan aplikasi 3D yang dapat dijalankan secara real-time.

### Transisi ke Slide Berikutnya

Setelah membuka pertemuan, kita akan melihat daftar topik yang akan menjadi alur pembahasan hari ini, mulai dari **Scene Graph** hingga **Praktikum: Prototype Persiapan UTS**.

---

## Slide 001 - Topik Pembahasan

### Narasi

Pertemuan ini kita fokus pada **Three.js Interactive 3D Application**, yaitu cara membangun aplikasi 3D yang tidak hanya menampilkan objek, tetapi juga bisa dimuat dari file, dianimasikan, diberi material realistis, dan berinteraksi dengan pengguna.

Topik yang akan kita lihat dapat dikelompokkan menjadi beberapa alur utama:

- **Scene Graph dan hierarki objek**: `Scene`, `Object3D`, parent-child transform, dan `Group`. Ini menjadi dasar organisasi objek 3D sebelum masuk ke rendering.
- **Material dan pencahayaan**: **PBR Material**, `roughness`, `metalness`, dan **Environment Map** untuk membuat permukaan lebih realistis.
- **Aset dan animasi**: model **GLTF/GLB**, `GLTFLoader`, **Animation Clip**, dan `AnimationMixer` untuk memuat serta menjalankan animasi.
- **Interaksi pengguna**: **Raycasting**, hover, click, dan feedback visual agar objek 3D dapat dipilih atau dikendalikan.
- **Integrasi dan praktikum**: menggabungkan semua komponen menjadi aplikasi 3D interaktif, lalu prototype persiapan UTS.

Intinya, kita tidak hanya belajar satu fungsi Three.js, tetapi bagaimana komponen-komponen tersebut saling terhubung: hierarki menentukan posisi objek, material menentukan tampilan permukaan, loader dan mixer menyediakan aset serta gerak, raycasting menghubungkan input pengguna dengan objek, dan environment map membantu pencahayaan.

### Inti yang Harus Ditekankan

- **Scene Graph** adalah struktur organisasi objek 3D yang menentukan hubungan parent-child dan transformasi.
- **PBR Material** dengan `roughness` dan `metalness` penting untuk tampilan material yang lebih realistis.
- **GLTF/GLB** dan `GLTFLoader` adalah cara umum memuat model 3D, sedangkan `AnimationMixer` menjalankan **Animation Clip**.
- **Raycasting** menjadi jembatan antara input pengguna dan objek 3D untuk hover, click, dan feedback visual.
- Semua komponen akan diintegrasikan menjadi **aplikasi 3D interaktif** dan dipraktikkan dalam prototype persiapan UTS.

### Transisi ke Slide Berikutnya

Setelah mengetahui peta topik, kita lanjut ke capaian pembelajaran agar jelas kemampuan apa yang harus dimiliki mahasiswa setelah pertemuan ini.

---

## Slide 002 - Capaian Pembelajaran

### Narasi

Pada pertemuan ini, capaian utamanya adalah mahasiswa tidak hanya mampu menampilkan objek 3D, tetapi mampu menyusun **Scene Graph** yang rapi dan dapat dikembangkan menjadi aplikasi interaktif. Artinya, kita belajar mengatur objek melalui **hierarchy parent-child**, memahami perbedaan **local transform** dan **world transform**, serta menggunakan `Group` untuk mengelompokkan objek yang bergerak atau bertransformasi bersama.

Selain struktur scene, kita juga akan menghubungkan beberapa komponen penting: memuat model `GLTF/GLB`, menerapkan **PBR material**, menjalankan **animation clip**, serta menambahkan interaksi menggunakan `Raycaster` untuk **hover** dan **click**. Dengan **environment map**, tampilan material dapat lebih realistis karena cahaya lingkungan ikut memengaruhi refleksi dan pencahayaan objek.

Sebelum lanjut, hal yang harus dipahami adalah bahwa semua komponen ini tidak berdiri sendiri. Hierarchy menentukan posisi dan transformasi objek, asset menentukan bentuk model, material dan environment menentukan tampilan visual, animation membuat objek hidup, dan interaction memberi umpan balik kepada pengguna. Jika konsep ini sudah jelas, kita bisa mengintegrasikannya menjadi prototipe aplikasi 3D interaktif yang lebih utuh.

### Inti yang Harus Ditekankan

- **Scene Graph** dan **hierarchy parent-child** adalah dasar organisasi objek 3D.
- **Local transform** dan **world transform** harus dipahami karena memengaruhi posisi, rotasi, dan skala objek dalam hierarchy.
- `Group`, `GLTF/GLB`, **PBR material**, **animation clip**, `Raycaster`, dan **environment map** adalah komponen yang akan diintegrasikan menjadi aplikasi interaktif.
- Interaksi **hover** dan **click** perlu diberi **feedback visual** agar pengguna memahami objek yang sedang dipilih atau diaktifkan.

### Transisi ke Slide Berikutnya

Setelah capaian pembelajaran ini jelas, kita akan melihat bagaimana pertemuan sebelumnya yang masih berupa mini scene berkembang menjadi aplikasi 3D interaktif dengan tambahan hierarchy, asset, PBR, animation, interaction, dan environment.

---

## Slide 003 - Dari Mini Scene ke Interactive Application

### Narasi

Pada tahap sebelumnya, kita sudah membangun **mini scene** yang cukup untuk menampilkan objek 3D. Komponen dasarnya dapat dibaca sebagai satu alur rendering minimal:

```text
Scene
+
Camera
+
Renderer
+
Mesh
+
Light
+
Animation Loop
```

Secara konseptual, alur ini bekerja dari kiri ke kanan atau dari atas ke bawah. **`Scene`** adalah wadah objek, **`Camera`** menentukan sudut pandang, **`Renderer`** menerjemahkan scene menjadi gambar di layar, **`Mesh`** adalah objek geometri yang memiliki material, **`Light`** memberi pencahayaan, dan **`Animation Loop`** memastikan scene diperbarui setiap frame. Dengan komponen ini, kita sudah bisa melihat objek, tetapi objek tersebut masih bersifat relatif sederhana dan belum banyak berinteraksi dengan pengguna.

Pertemuan 7 memperluas mini scene menjadi **interactive application**. Penambahan yang perlu kita perhatikan adalah:

```text
Hierarchy
+
Asset
+
PBR
+
Animation
+
Interaction
+
Environment
```

Setiap tambahan ini punya peran berbeda. **`Hierarchy`** memungkinkan objek disusun sebagai parent-child, sehingga transformasi lokal dan dunia dapat dikelola secara lebih rapi. **`Asset`** membawa model 3D yang lebih realistis, misalnya GLTF/GLB. **`PBR`** membuat material bereaksi terhadap cahaya dan lingkungan secara lebih fisikal. **`Animation`** memberi gerakan yang dapat dijalankan dari clip. **`Interaction`** memungkinkan pengguna melakukan hover atau click terhadap objek. **`Environment`** menambah konteks visual, misalnya environment map, sehingga material dan pencahayaan terasa lebih natural.

Perbedaan utamanya bukan hanya menambah objek, tetapi mengubah hubungan antar komponen. Pada mini scene, fokusnya adalah **objek tampil**. Pada interactive application, fokusnya menjadi **objek saling terhubung**, dapat dimuat dari asset, dapat dianimasikan, dapat merespons input, dan dapat diberi feedback visual. Karena itu, sebelum masuk ke detail teknis, kita perlu memahami bahwa pertemuan ini adalah transisi dari “scene yang bisa dirender” menjadi “aplikasi 3D yang bisa digunakan”.

### Inti yang Harus Ditekankan

- **Mini scene** terdiri dari komponen dasar rendering: `Scene`, `Camera`, `Renderer`, `Mesh`, `Light`, dan `Animation Loop`.
- **Interactive application** menambahkan `Hierarchy`, `Asset`, `PBR`, `Animation`, `Interaction`, dan `Environment`.
- Perubahan utamanya adalah dari objek yang hanya tampil menjadi objek yang **terhubung, dapat dimuat, dianimasikan, dan merespons pengguna**.

### Transisi ke Slide Berikutnya

Setelah memahami pergeseran dari mini scene ke interactive application, kita lanjut ke target pertemuan 7, yaitu bagaimana aplikasi 3D harus mampu menampilkan objek yang saling terhubung, menerima user input, memberi feedback, dan berjalan dalam lingkungan visual yang lebih utuh.

---

## Slide 004 - Target Pertemuan 7

### Narasi

Pada pertemuan sebelumnya, kita sudah membangun **mini scene** yang menampilkan objek dasar. Komponen utamanya sudah ada: `scene`, `camera`, `renderer`, `mesh`, `light`, dan `animation loop`. Artinya, objek sudah bisa tampil dan bergerak dalam ruang 3D.

Namun, pada pertemuan ini kita menaikkan targetnya. Kita tidak hanya ingin objek tampil, tetapi kita ingin membangun **interactive application**. Perbedaannya bisa dibaca dari dua blok berikut:

```text
Mini scene:
Object tampil

Interactive application:
Object saling terhubung
+ Asset 3D
+ User Input
+ Feedback
+ Animation
+ Environment
```

Blok pertama menggambarkan kondisi dasar: ada objek yang dirender. Blok kedua menggambarkan aplikasi 3D yang lebih utuh. Di sana, objek tidak berdiri sendiri; ia **saling terhubung** dengan asset, input pengguna, umpan balik, animasi, dan lingkungan.

Secara intuitif, kita bisa membayangkannya seperti ini:

- **Object saling terhubung** berarti posisi, transformasi, atau perilaku satu objek dapat memengaruhi objek lain.
- **Asset 3D** adalah model, material, tekstur, atau sumber daya visual yang membuat objek lebih realistis.
- **User Input** adalah interaksi dari pengguna, misalnya klik, drag, hover, atau tombol.
- **Feedback** adalah respons visual atau perilaku yang muncul setelah input, misalnya objek berubah warna, bergerak, atau mengeluarkan efek.
- **Animation** membuat objek tidak statis, tetapi memiliki perilaku dinamis.
- **Environment** memberi konteks ruang, seperti latar, pencahayaan lingkungan, atau elemen pendukung.

Target akhirnya adalah **scene 3D yang dapat merespons pengguna**. Ini penting karena grafika komputer tidak hanya soal menampilkan geometri, tetapi juga membuat pengalaman visual yang hidup dan dapat dikendalikan. Sebelum lanjut, mahasiswa perlu memahami bahwa aplikasi interaktif membutuhkan organisasi objek yang rapi, karena semakin banyak komponen, semakin sulit jika semua objek dikelola secara terpisah.

### Inti yang Harus Ditekankan

- **Mini scene** fokus pada objek yang tampil; **interactive application** fokus pada objek yang saling terhubung dan dapat merespons.
- Komponen utama aplikasi interaktif meliputi `Asset 3D`, `User Input`, `Feedback`, `Animation`, dan `Environment`.
- Target akhir pertemuan ini adalah membangun **scene 3D responsif**, bukan sekadar menampilkan objek 3D.

### Transisi ke Slide Berikutnya

Untuk membuat objek saling terhubung dengan rapi, kita perlu cara mengorganisasi objek dalam struktur hierarkis. Konsep itulah yang akan kita bahas pada slide berikutnya.

---

## Slide 005 - Apa Itu Scene Graph?

### Narasi

Dalam membangun aplikasi 3D interaktif, kita tidak hanya menempatkan beberapa objek secara acak di ruang virtual. Kita perlu cara yang rapi untuk menyimpan dan mengatur objek-objek tersebut. **Scene Graph** adalah struktur hierarkis yang digunakan untuk mengorganisasi `object` dalam scene.

Bayangkan sebuah scene 3D seperti pohon. Di puncak pohon ada **Scene**, lalu di bawahnya terdapat kelompok objek seperti **Environment**, **Character**, **Vehicle**, dan **Lights**. Setiap kelompok dapat memiliki anak lagi, misalnya karakter memiliki kepala, tangan, dan kaki. Struktur ini membuat hubungan antar objek menjadi jelas.

```text
Scene
├── Environment
├── Character
├── Vehicle
└── Lights
```

Keuntungan utama scene graph adalah **grouping**. Jika kita ingin memindahkan seluruh karakter, cukup transformasi node karakter, dan anak-anaknya ikut bergerak. Ini penting dalam grafika komputer karena transformasi sering dilakukan berulang kali setiap frame, misalnya untuk animasi, kamera, atau interaksi pengguna.

Selain grouping, scene graph juga membantu **traversal**. Saat rendering, sistem perlu mengetahui objek mana yang harus digambar, transformasi apa yang dipakai, dan bagaimana objek saling berhubungan. Dengan struktur hierarkis, proses penjelajahan scene menjadi lebih sistematis: dari root, lalu ke anak, lalu ke cucu, dan seterusnya.

Kita juga perlu memahami bahwa scene graph bukan hanya soal tampilan. Ia adalah dasar dari organisasi data 3D. Tanpa struktur ini, aplikasi interaktif akan sulit dikembangkan karena setiap objek harus dikelola secara terpisah. Dengan scene graph, `object` dapat saling terhubung, diorganisasi, dan diproses lebih efisien.

### Inti yang Harus Ditekankan

- **Scene Graph** adalah struktur hierarkis untuk mengorganisasi `object` dalam scene 3D.
- Hierarki membantu **grouping**, **transform**, **traversal**, dan **organization**.
- Transformasi pada node induk dapat memengaruhi objek anak, sehingga animasi dan interaksi lebih mudah.
- Scene graph menjadi dasar agar scene 3D dapat dirender secara terstruktur.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana struktur ini dimulai dalam Three.js, yaitu dengan membuat `Scene` sebagai root dari hierarchy object yang dirender.

---

## Slide 006 - Scene sebagai Root

### Narasi

Setelah kita memahami **scene graph** sebagai struktur hierarkis untuk mengorganisasi objek, langkah pertama dalam Three.js adalah membuat **Scene** sebagai titik awal. Dalam kode:

```javascript
const scene =
  new THREE.Scene();
```

`scene` ini bukan sekadar variabel biasa, tetapi objek yang berperan sebagai **root** atau akar dari seluruh objek yang akan dirender. Semua objek 3D yang ingin tampil di layar pada akhirnya harus terhubung ke `scene` ini, baik langsung maupun melalui objek lain.

Secara visual, kita bisa membayangkannya seperti pohon:

```text
Scene
└── Children
    └── Descendants
```

`Scene` berada di puncak, `Children` adalah objek-objek yang ditambahkan langsung ke scene, dan `Descendants` adalah objek-objek yang berada di bawah children tersebut. Struktur ini penting karena rendering pipeline tidak hanya perlu tahu objek apa yang ada, tetapi juga bagaimana objek-objek itu berhubungan satu sama lain.

Dalam grafika komputer, **hierarchy** membantu kita mengelola transformasi secara lebih rapi. Misalnya, jika kita memindahkan sebuah grup objek, transformasi pada parent dapat memengaruhi children. Dengan `Scene` sebagai root, kita punya satu titik kontrol utama untuk seluruh dunia virtual yang akan dirender.

Hal yang perlu dipahami mahasiswa sebelum lanjut adalah: `scene` adalah **container utama** untuk objek yang dirender. Tanpa `scene`, renderer tidak punya struktur dunia yang harus digambar. Jadi, `scene` menjadi fondasi sebelum kita menambahkan objek, mengatur hierarki, atau memproses rendering.

### Inti yang Harus Ditekankan

- `new THREE.Scene()` membuat objek **Scene** yang menjadi **root** dari hierarki objek.
- Semua objek yang ingin dirender harus terhubung ke `scene`, baik sebagai `children` maupun `descendants`.
- Struktur hierarkis memudahkan grouping, transformasi, traversal, dan organisasi objek dalam rendering pipeline.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana hierarki ini bekerja pada level `Object3D`, yaitu bagaimana setiap objek dapat memiliki `parent` dan `children`, sehingga struktur seperti `Scene -> Car -> Body/Wheel` dapat dibangun secara lebih rinci.

---

## Slide 007 - Object3D Hierarchy

### Narasi

Dalam Three.js, hampir semua objek yang bisa diposisikan, dirotasi, atau dirender berasal dari `Object3D`. Konsep penting yang perlu kita pahami di sini adalah bahwa `Object3D` tidak selalu berdiri sendiri. Sebuah `Object3D` dapat memiliki `parent` dan `children`, sehingga objek-objek dalam scene membentuk struktur hierarki, bukan sekadar kumpulan objek yang terpisah.

Hierarki ini penting karena menentukan bagaimana transformasi objek dipahami. Jika sebuah objek menjadi child dari objek lain, posisinya tidak selalu dipandang sebagai posisi absolut terhadap scene, tetapi sebagai posisi relatif terhadap parent-nya. Dengan cara ini, struktur objek menjadi lebih rapi dan lebih mudah dikendalikan.

Contoh yang ditampilkan pada slide adalah struktur sebuah mobil:

```text
Scene
└── Car
    ├── Body
    ├── Wheel FL
    ├── Wheel FR
    ├── Wheel RL
    └── Wheel RR
```

Cara membaca diagram ini cukup sederhana. `Scene` berada di puncak sebagai root. `Car` adalah child dari `Scene`. Kemudian `Body`, `Wheel FL`, `Wheel FR`, `Wheel RL`, dan `Wheel RR` adalah child dari `Car`. Garis pada diagram menunjukkan hubungan parent-child, yaitu siapa yang berada di atas dan siapa yang menjadi bagian dari objek tersebut.

Struktur seperti ini sangat berguna dalam grafika komputer. Misalnya, ketika `Car` dipindahkan, diputar, atau diubah skalanya, seluruh child di bawahnya ikut berubah secara relatif terhadap `Car`. Roda tidak perlu diposisikan ulang satu per satu terhadap `Scene`; cukup diposisikan terhadap `Car`. Hal ini membuat animasi, kontrol objek, dan pengelolaan scene menjadi lebih efisien.

Sebelum lanjut, kita perlu memahami bahwa `parent` dan `children` bukan hanya simbol visual pada diagram, tetapi merupakan bagian dari struktur data objek. Properti ini menjadi dasar untuk menyusun scene, memindahkan objek, menghapus objek, dan menghitung transformasi secara konsisten.

### Inti yang Harus Ditekankan

- `Object3D` dapat memiliki `parent` dan `children`, sehingga membentuk **hierarchy**.
- Hierarchy menentukan hubungan transformasi: child diposisikan secara relatif terhadap parent.
- Contoh `Scene -> Car -> Body/Wheels` menunjukkan bagaimana objek kompleks disusun secara terstruktur.

### Transisi ke Slide Berikutnya

Setelah memahami struktur hierarchy, langkah berikutnya adalah bagaimana child ditambahkan ke parent melalui `parent.add(child)`, serta bagaimana transformasi child menjadi relatif terhadap parent.

---

## Slide 008 - Parent dan Child

### Narasi

Setelah kita melihat struktur **Object3D Hierarchy**, langkah praktisnya adalah bagaimana sebuah objek menjadi **child** dari objek lain. Dalam Three.js, hubungan ini dibuat dengan:

```javascript
parent.add(
  child
);
```

Perintah ini tidak hanya menambahkan objek ke dalam daftar `children`, tetapi juga membentuk hubungan spasial antara dua objek. Setelah `parent.add(child)` dijalankan, maka:

```text
child.parent
=
parent
```

Artinya, `child` sekarang berada di dalam ruang koordinat `parent`.

Kita bisa membayangkannya seperti struktur boneka dalam boneka. Jika `parent` adalah mobil, dan `child` adalah roda, maka posisi roda tidak lagi dibaca langsung terhadap scene secara mutlak, tetapi terhadap mobil. Jika mobil berpindah, roda ikut berpindah. Jika roda berputar, rotasinya adalah rotasi **lokal** terhadap posisi roda pada mobil.

Dalam konteks rendering, hal ini penting karena objek kompleks biasanya tidak dirender sebagai satu geometri tunggal. Objek seperti kendaraan, karakter, atau mesin terdiri dari banyak bagian yang saling terhubung. Hubungan **parent-child** memungkinkan setiap bagian memiliki transformasi sendiri, tetapi tetap mengikuti posisi induknya.

Perhatikan juga bahwa `parent.add(child)` adalah operasi struktural. Setelah child ditambahkan, kita biasanya tetap mengatur `position`, `rotation`, atau `scale` pada child. Nilai-nilai itu adalah nilai **lokal**. Jika parent bergerak, child otomatis mengikuti karena hubungannya sudah terbentuk.

Sebelum lanjut, hal yang harus dipahami mahasiswa adalah: **child tidak lagi berdiri sendiri secara spasial**. Ia berada di bawah parent. Konsep ini menjadi dasar untuk membangun objek kompleks yang bisa dianimasikan secara konsisten.

### Inti yang Harus Ditekankan

- `parent.add(child)` membuat `child` menjadi bagian dari hierarki **Object3D**.
- Setelah ditambahkan, `child.parent` menunjuk ke `parent`.
- Transformasi `child` bersifat **relatif terhadap parent**, bukan langsung terhadap scene.
- Konsep ini menjadi dasar **scene graph** untuk objek kompleks.

### Transisi ke Slide Berikutnya

Jika hubungan parent-child sudah terbentuk, pertanyaan berikutnya adalah mengapa hubungan ini sangat berguna. Pada slide berikutnya, kita akan melihat apa yang terjadi ketika parent bergerak dan bagaimana child tetap dapat memiliki transformasi lokalnya sendiri.

---

## Slide 009 - Mengapa Hierarchy Penting?

### Narasi

Setelah hubungan **parent** dan **child** terbentuk melalui `parent.add(child)`, transformasi child menjadi relatif terhadap parent. Pada bagian ini kita melihat mengapa struktur hierarki itu penting dalam grafika komputer.

Bayangkan sebuah mobil. Mobil dapat menjadi parent, sedangkan roda-roda menjadi child. Jika kita melakukan:

```text
Car Translation
```

maka posisi mobil berubah. Karena roda berada di bawah mobil dalam hierarki, roda ikut berpindah mengikuti mobil. Kita tidak perlu menghitung ulang posisi setiap roda secara manual.

Namun, yang perlu diperhatikan adalah roda tetap dapat memiliki **local rotation** sendiri. Artinya, meskipun roda mengikuti translasi mobil, roda masih bisa berputar pada sumbunya sendiri. Inilah kekuatan hierarki: transformasi parent memengaruhi child, tetapi child tetap mempertahankan transformasi lokalnya.

Dalam grafika komputer, hal ini sangat berguna untuk objek kompleks. Sebuah karakter, robot, kendaraan, atau mesin biasanya terdiri dari banyak bagian. Jika semua bagian disimpan sebagai objek bebas, setiap gerakan kecil akan menuntut pembaruan koordinat banyak objek secara terpisah. Dengan hierarki, hubungan spasial antarbagian tetap terjaga.

Secara konsep, hierarki membantu kita memisahkan dua hal: **posisi relatif terhadap parent** dan **posisi akhir dalam ruang dunia**. Saat rendering, transformasi objek biasanya digabungkan dari parent ke child sehingga menghasilkan posisi akhir yang benar sebelum objek diproses lebih lanjut dalam pipeline rendering.

Sebelum lanjut, mahasiswa perlu memahami bahwa child tidak selalu memiliki koordinat yang sama dengan koordinat dunia. Child memiliki transformasi lokal, dan transformasi itu akan dipengaruhi oleh transformasi parent.

### Inti yang Harus Ditekankan

- Hierarki membuat objek kompleks lebih mudah dikendalikan karena child mengikuti transformasi parent.
- `Car Translation` memindahkan mobil, dan roda sebagai child ikut berpindah.
- Roda tetap dapat memiliki **local rotation** sendiri, sehingga gerakan lokal tidak hilang.
- Transformasi child bersifat relatif terhadap parent, bukan langsung terhadap ruang dunia.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan melihat contoh nilai **local transform**, misalnya posisi mobil dan posisi roda lokal, untuk memahami mengapa nilai lokal tidak selalu sama dengan world position.

---

## Slide 010 - Local Transform

### Narasi

Dalam grafika komputer, objek 3D jarang berdiri sendiri. Kita sering menyusun objek dalam **hierarki**, di mana ada objek **parent** dan objek **child**. Pada slide ini, fokusnya adalah **local transform**, yaitu transformasi yang dimiliki child relatif terhadap parent.

Contoh yang ditampilkan adalah:

```text
Car position
= (5,0,0)

Wheel local position
= (1,-0.5,1)
```

Artinya, `Car` memiliki posisi `(5,0,0)` pada level transformnya. Sementara `Wheel` tidak didefinisikan langsung terhadap scene, melainkan terhadap `Car`. Nilai `(1,-0.5,1)` adalah posisi roda relatif terhadap pusat atau sumbu lokal mobil.

Secara intuitif, bayangkan `Car` sebagai sistem koordinat kecil yang menempel pada mobil. Jika roda berada di `(1,-0.5,1)` dalam sistem itu, artinya roda berada 1 satuan ke arah sumbu lokal X, 0,5 satuan ke bawah pada sumbu Y, dan 1 satuan ke arah sumbu Z relatif terhadap mobil.

Poin penting yang harus dipahami: **nilai local tidak sama dengan world position**. `local position` adalah koordinat dalam ruang parent, sedangkan `world position` adalah koordinat akhir objek setelah pengaruh parent, kakek, dan seterusnya diperhitungkan.

Hal ini penting karena objek kompleks seperti mobil, robot, atau karakter biasanya terdiri dari banyak bagian. Jika parent bergerak, child ikut bergerak. Namun child tetap bisa memiliki transform lokal sendiri, misalnya roda berputar relatif terhadap mobil.

Dalam pipeline rendering, transform lokal adalah tahap awal sebelum objek diproses lebih lanjut. Geometri objek biasanya didefinisikan di ruang lokalnya, lalu dipindahkan ke ruang dunia, kamera, dan layar. Memahami local transform membantu kita membaca struktur objek, mengatur animasi, dan menghindari kesalahan posisi.

Sebelum lanjut, pastikan kita dapat membedakan: posisi lokal adalah "di mana child berada relatif terhadap parent", bukan "di mana child berada di seluruh scene".

### Inti yang Harus Ditekankan

- **Local transform** adalah transformasi child relatif terhadap parent, bukan terhadap scene secara langsung.
- Contoh `Wheel local position = (1,-0.5,1)` berarti posisi roda diukur dari sistem koordinat `Car`.
- **Local position** tidak sama dengan **world position**; world position bergantung pada transform parent.
- Konsep ini penting untuk objek hierarkis dan animasi bagian objek yang kompleks.

### Transisi ke Slide Berikutnya

Setelah kita tahu bahwa child memiliki transform lokal terhadap parent, langkah berikutnya adalah melihat bagaimana transform lokal tersebut digabungkan dengan transform parent untuk menghasilkan posisi dunia child.

---

## Slide 011 - World Transform

### Narasi

Setelah kita melihat **local transform**, kita perlu memahami bagaimana posisi atau orientasi objek yang menjadi child benar-benar muncul di ruang dunia. Local transform hanya menyatakan transform relatif terhadap parent, misalnya posisi wheel terhadap car. Namun, untuk mengetahui posisi akhir objek di scene, kita perlu menghitung **world transform**.

World transform child merupakan gabungan dari transform parent dan transform lokal child. Dalam bentuk matriks, hubungannya dapat ditulis sebagai berikut:

```text
Child World Matrix
=
Parent Matrix
×
Child Local Matrix
```

Secara konsep, `Parent Matrix` di sini adalah **world transform parent**, bukan sekadar transform lokal parent. Artinya, jika parent sendiri memiliki parent, maka world transform parent sudah memuat seluruh transform dari rantai hierarki di atasnya.

Cara membaca rumus ini adalah sebagai berikut:

1. Child memiliki koordinat dan transform lokalnya sendiri.
2. Transform lokal child mengubah koordinat child dari ruang lokal child ke ruang lokal parent.
3. World transform parent kemudian mengubah hasil tersebut ke ruang dunia.
4. Hasil akhirnya adalah posisi, rotasi, dan skala child dalam **world space**.

Penting untuk diperhatikan bahwa urutan perkalian matriks tidak boleh dibalik sembarangan. Dalam notasi yang digunakan di slide, transform lokal child diterapkan terlebih dahulu, kemudian dilanjutkan dengan transform world parent. Ini menunjukkan bahwa hierarki transform bekerja secara berantai: child mengikuti parent, tetapi tetap mempertahankan transform relatifnya sendiri.

Konsep ini penting dalam grafika komputer karena banyak objek 3D dibangun sebagai hierarki. Misalnya, sebuah robot memiliki badan, lengan, dan jari. Jika badan bergerak, lengan dan jari ikut bergerak karena world transform mereka bergantung pada world transform parent. Dengan menghitung world transform secara berurutan, kita dapat memperbarui posisi objek secara konsisten tanpa harus menghitung ulang seluruh scene dari awal.

Dalam rendering pipeline, world transform berperan sebelum objek diproses lebih lanjut oleh kamera dan proyeksi. Matriks world mengubah titik-titik objek dari ruang lokal objek ke ruang dunia. Setelah itu, pipeline dapat melanjutkan ke transform view dan projection. Jadi, world transform adalah langkah penting yang menghubungkan geometri objek dengan posisi akhirnya di scene.

### Inti yang Harus Ditekankan

- **World transform** adalah transform akhir objek dalam ruang dunia.
- World transform child dihitung dari **world transform parent** dikali **local transform child**.
- Local transform hanya relatif terhadap parent, sedangkan world transform menentukan posisi akhir di scene.
- Urutan perkalian matriks penting karena transform hierarki bekerja secara berantai.
- Konsep ini menjadi dasar bagi objek yang memiliki parent-child relationship dalam aplikasi 3D.

### Transisi ke Slide Berikutnya

Dengan memahami world transform, kita dapat melihat apa yang terjadi ketika parent mengalami transformasi. Pada slide berikutnya, kita akan membahas **parent-child transform**, yaitu bagaimana child ikut menerima transform parent dan bagaimana child tetap dapat memiliki transform tambahan miliknya sendiri.

---

## Slide 012 - Parent-Child Transform

### Narasi

Dalam scene 3D, objek jarang berdiri sendiri. Banyak objek memiliki hubungan **parent-child**, misalnya kamera yang mengikuti karakter, lengan yang terhubung ke bahu, atau benda yang berada di dalam satu grup. Pada slide ini, kita melihat bagaimana transformasi pada **parent** memengaruhi **child**.

Jika parent mengalami:

```text
Translation
Rotation
Scale
```

maka child ikut menerima transform tersebut. Artinya, ketika parent digeser, child ikut bergeser. Ketika parent berputar, child ikut berputar relatif terhadap posisi parent. Ketika parent diskalakan, ukuran child ikut berubah karena child berada dalam ruang koordinat parent.

Namun, child tidak selalu pasif. Child dapat memiliki **transform tambahan sendiri**, yang disebut transform lokal. Transform lokal ini bersifat relatif terhadap parent, bukan langsung terhadap dunia. Dengan kata lain, child menentukan posisinya sendiri di dalam ruang parent.

```text
Parent: Translation, Rotation, Scale
Child: inherits parent transform + own local transform
```

Hubungan ini juga menjelaskan mengapa world transform child merupakan gabungan dari world transform parent dan local transform child. Secara sederhana:

```text
Child World Matrix
=
Parent World Matrix
×
Child Local Matrix
```

Artinya, transformasi parent yang sudah terakumulasi diterapkan terlebih dahulu, kemudian transformasi lokal child ditambahkan di atasnya.

Konsep ini penting dalam grafika komputer karena banyak animasi dan interaksi dibangun melalui hierarki. Jika kita ingin memindahkan satu grup objek, cukup mengubah parent, dan seluruh child ikut bergerak. Ini lebih efisien dan lebih mudah dikendalikan daripada mengubah setiap child satu per satu. Dalam pipeline rendering, transformasi hierarki ini biasanya diselesaikan sebelum objek masuk ke tahap rendering berikutnya, sehingga posisi akhir objek di dunia sudah benar.

Sebelum lanjut, mahasiswa perlu memahami bahwa koordinat child adalah koordinat relatif terhadap parent. Perubahan `Translation`, `Rotation`, atau `Scale` pada parent akan mengubah posisi, orientasi, dan ukuran child di dunia. Child tetap bisa memiliki offset, rotasi, atau skala lokal, tetapi efek akhirnya selalu bergantung pada transformasi parent.

### Inti yang Harus Ditekankan

- Transformasi **parent** diwariskan ke **child** melalui `Translation`, `Rotation`, dan `Scale`.
- Child tetap dapat memiliki **transform lokal** yang relatif terhadap parent.
- World transform child merupakan gabungan dari world transform parent dan local transform child.
- Hierarki parent-child memudahkan animasi grup objek karena cukup parent yang diubah.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana transformasi parent diwariskan ke child, kita akan melihat contoh hierarchy yang lebih konkret. Pada contoh tersebut, hubungan parent-child akan dipakai untuk membangun struktur orbit, sehingga objek yang lebih kecil dapat mengikuti objek induknya secara alami.

---

## Slide 013 - Contoh Hierarchy

### Narasi

Mari kita lihat contoh konkret dari **hierarchy** dalam scene 3D.

```text
Sun
└── Earth Orbit
    └── Earth
        └── Moon Orbit
            └── Moon
```

Struktur ini dibaca dari atas ke bawah. `Sun` berada di puncak sebagai objek utama. `Earth Orbit` adalah anak dari `Sun`, `Earth` adalah anak dari `Earth Orbit`, dan seterusnya.

Artinya, ketika `Earth Orbit` berputar mengelilingi `Sun`, `Earth` ikut bergerak karena berada di dalam hierarki tersebut. Namun `Earth` tetap bisa memiliki transformasi lokal sendiri, misalnya rotasi pada porosnya.

Begitu juga dengan `Moon`. `Moon Orbit` berada di bawah `Earth`, sehingga ketika `Earth` berpindah posisi, `Moon Orbit` ikut berpindah. Ketika `Moon Orbit` berputar, `Moon` mengorbit `Earth`.

Poin pentingnya adalah **parent-child transform**: transformasi parent menjadi dasar, lalu transformasi child ditambahkan di atasnya. Dalam rendering pipeline, hal ini masuk ke tahap transformasi geometri, di mana posisi lokal objek digabungkan menjadi posisi dunia sebelum diproses lebih lanjut oleh kamera dan rasterisasi.

Dengan hierarchy, kita tidak perlu menghitung koordinat `Moon` secara manual setiap frame. Kita cukup mengatur transformasi lokal pada setiap level, dan sistem scene graph akan menggabungkannya secara konsisten.

### Inti yang Harus Ditekankan

- Hierarchy dibaca dari parent ke child: objek anak mengikuti transformasi parent.
- Objek seperti `Earth Orbit` dan `Moon Orbit` berperan sebagai **pivot** atau pusat rotasi.
- Transformasi lokal child dapat ditambahkan di atas transformasi parent.
- Konsep ini penting sebelum masuk ke `THREE.Group`, karena group pada dasarnya adalah node hierarchy untuk mengelompokkan objek.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana struktur hierarchy seperti ini diimplementasikan di Three.js menggunakan `THREE.Group`, yaitu objek yang tidak memiliki geometry tetapi bisa mengelompokkan beberapa `Object3D` agar ditransformasikan bersama.

---

## Slide 014 - THREE.Group

### Narasi

Dalam Three.js, `THREE.Group` adalah cara paling sederhana untuk membangun **hierarki objek** dalam sebuah scene. Ia bukan objek visual langsung, karena `Group` tidak membawa `geometry` atau `material` sendiri. Artinya, `Group` tidak akan digambar oleh renderer sebagai bentuk 3D, melainkan berfungsi sebagai **wadah** atau **node pengelompokan**.

```javascript
const group =
  new THREE.Group();
```

Pada kode di atas, `new THREE.Group()` membuat sebuah instance `Group` baru. Variabel `group` kemudian merujuk ke objek tersebut. Secara konsep, `group` ini adalah node kosong dalam scene graph yang dapat memiliki transformasi, seperti `position`, `rotation`, dan `scale`.

Poin pentingnya adalah: `Group` memungkinkan beberapa `Object3D` menjadi anaknya. Ketika transformasi diberikan pada `Group`, transformasi itu akan memengaruhi seluruh objek yang berada di dalamnya. Dengan kata lain, jika kita memindahkan `Group`, semua anak ikut berpindah. Jika kita memutar `Group`, semua anak ikut berputar relatif terhadap `Group`.

Hal ini sangat penting dalam grafika komputer karena banyak objek kompleks tidak dibangun sebagai satu geometri tunggal, melainkan dari beberapa bagian. Misalnya, sebuah robot dapat terdiri dari badan, kepala, dan lengan. Dengan `Group`, bagian-bagian tersebut dapat dikendalikan sebagai satu unit, tetapi tetap dapat memiliki transformasi masing-masing.

Kita juga dapat melihat kaitannya dengan hierarki yang sudah dibahas sebelumnya. Pada contoh orbit, `Earth` dapat menjadi parent dari `Moon`, sehingga gerakan `Earth` memengaruhi posisi `Moon`. `THREE.Group` bekerja dengan prinsip yang sama: ia membantu menyusun hubungan parent-child antar objek 3D.

Dalam pipeline rendering, transformasi `Group` menjadi bagian dari perhitungan posisi akhir objek di dunia. Sebelum proses rasterisasi, posisi vertex dari objek anak akan dipengaruhi oleh transformasi parent, termasuk `Group`. Jadi, `Group` tidak hanya soal organisasi kode, tetapi juga memengaruhi bagaimana objek akhirnya diposisikan dan digambar.

Sebelum lanjut, mahasiswa perlu memahami bahwa `Group` bukan pengganti geometri. Ia adalah struktur hierarki. Jika kita ingin melihat objek, kita tetap membutuhkan `Mesh` atau objek visual lain di dalam `Group`.

### Inti yang Harus Ditekankan

- `THREE.Group` adalah **container**, bukan objek visual; ia tidak memiliki `geometry` sendiri.
- Transformasi pada `Group` diterapkan ke seluruh `Object3D` yang menjadi anaknya.
- `Group` memudahkan pembangunan hierarki dan pengendalian beberapa objek sebagai satu unit.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa `Group` berfungsi sebagai wadah transformasi, pada slide berikutnya kita akan melihat contoh konkretnya: beberapa bagian robot dimasukkan ke dalam satu `THREE.Group` sehingga seluruh robot dapat dikendalikan sebagai satu unit.

---

## Slide 015 - Contoh Group

### Narasi

Pada contoh ini, kita melihat bagaimana **`THREE.Group`** digunakan untuk menyusun objek 3D yang lebih kompleks. Di sini dibuat sebuah group bernama `robot`, lalu beberapa bagian robot seperti `body`, `head`, `leftArm`, dan `rightArm` ditambahkan ke dalamnya.

```javascript
const robot =
  new THREE.Group();

robot.add(body);
robot.add(head);
robot.add(leftArm);
robot.add(rightArm);

scene.add(robot);
```

Secara alur, baris pertama membuat container kosong yang tidak memiliki geometry. Baris `robot.add(...)` menyatakan bahwa `body`, `head`, `leftArm`, dan `rightArm` adalah child dari `robot`. Setelah itu, `scene.add(robot)` memasukkan group tersebut ke dalam scene, sehingga seluruh bagian robot ikut menjadi bagian dari **scene graph**.

Poin pentingnya adalah kita tidak perlu menggerakkan atau memutar setiap bagian robot secara terpisah. Karena `robot` menjadi **parent**, maka seluruh child di dalamnya dapat dikendalikan sebagai **satu unit**. Ini penting dalam grafika komputer karena banyak objek 3D terdiri dari beberapa komponen, dan struktur hierarkis membuat transformasi, animasi, dan organisasi scene menjadi lebih rapi.

Secara visual, kita bisa membayangkan `robot` sebagai “kotak” yang memuat beberapa mesh. Posisi, rotasi, dan skala `robot` akan memengaruhi posisi akhir setiap bagian di dalam scene. Dengan cara ini, hubungan antar objek menjadi lebih jelas: bagian robot tetap relatif terhadap `robot`, dan `robot` berada di dalam `scene`.

### Inti yang Harus Ditekankan

- **`THREE.Group`** adalah container untuk mengelompokkan beberapa `Object3D`.
- `robot.add(...)` membuat hubungan **parent-child** antara `robot` dan bagian-bagian robot.
- `scene.add(robot)` membuat seluruh group dan child-nya ikut masuk ke scene.
- Group memungkinkan objek kompleks dikendalikan sebagai **satu unit**.

### Transisi ke Slide Berikutnya

Setelah group terbentuk, langkah berikutnya adalah melihat bagaimana transformasi pada parent, seperti `position` dan `rotation`, memengaruhi semua child di dalamnya.

---

## Slide 016 - Transform Group

### Narasi

Setelah kita membuat `robot` sebagai `THREE.Group` dan menambahkan beberapa bagian seperti `body`, `head`, `leftArm`, dan `rightArm`, langkah berikutnya adalah memahami apa yang terjadi ketika kita mengubah transformasi grup itu sendiri. Pada slide ini, kita melihat dua baris kode sederhana:

```javascript
robot.position.x = 2;

robot.rotation.y =
  Math.PI / 4;
```

Baris pertama, `robot.position.x = 2;`, menggeser seluruh grup `robot` sejauh 2 satuan ke arah sumbu `x`. Artinya, bukan hanya satu mesh yang bergerak, tetapi semua child yang berada di dalam grup tersebut ikut bergeser. Ini penting karena dalam aplikasi 3D, kita sering ingin menggerakkan satu objek kompleks sebagai satu kesatuan, misalnya menggeser karakter, kendaraan, atau robot secara utuh.

Baris kedua, `robot.rotation.y = Math.PI / 4;`, memutar grup terhadap sumbu `y` sebesar `Math.PI / 4` radian, yaitu 45 derajat. Karena rotasi ini diberikan pada `robot`, maka seluruh bagian robot ikut berputar bersama. Secara visual, kita bisa membayangkannya seperti memutar sebuah boneka pada tubuhnya: kepala, badan, dan lengan tetap berada pada posisi relatif yang sama terhadap tubuh, tetapi seluruhnya berubah orientasi terhadap dunia.

Poin penting yang perlu dipahami adalah bahwa child tetap memiliki transformasi lokal masing-masing. Misalnya, jika sebelumnya `leftArm` sudah diputar sedikit, transformasi lokal lengan itu tidak hilang. Yang terjadi adalah transformasi grup menjadi “kerangka acuan” baru bagi semua child. Dengan kata lain, posisi dan rotasi child akan dihitung relatif terhadap grup, lalu grup itu sendiri yang diposisikan dan diputar di dalam scene.

Dalam konteks grafika komputer, konsep ini sangat penting karena hampir semua objek kompleks dibangun secara hierarkis. Sebuah robot, manusia, kendaraan, atau bangunan biasanya terdiri dari banyak bagian yang saling berhubungan. Jika setiap bagian harus dipindahkan dan diputar satu per satu, prosesnya akan sangat rumit. Dengan menggunakan grup, kita dapat mengendalikan objek kompleks secara lebih natural dan efisien.

Sebelum lanjut, mahasiswa perlu memahami bahwa transformasi pada parent tidak menghapus transformasi child, melainkan menjadi bagian dari efek akhir. Jadi, jika grup digeser dan diputar, child akan mengikuti, tetapi orientasi relatif child terhadap grup tetap terjaga. Pemahaman ini akan menjadi dasar penting ketika nanti kita membahas bagaimana transformasi lokal dan transformasi dunia digabungkan secara matematis.

### Inti yang Harus Ditekankan

- Transformasi pada `THREE.Group` memengaruhi seluruh child yang berada di dalamnya.
- `robot.position.x = 2;` menggeser grup `robot` sejauh 2 satuan ke arah sumbu `x`.
- `robot.rotation.y = Math.PI / 4;` memutar grup terhadap sumbu `y` sebesar 45 derajat.
- Child tetap mempertahankan transformasi lokalnya; efek akhir adalah gabungan transformasi parent dan child.
- Konsep ini memungkinkan objek kompleks dikendalikan sebagai satu kesatuan, bukan per bagian.

### Transisi ke Slide Berikutnya

Untuk memahami mengapa transformasi grup dan transformasi child bisa digabungkan secara konsisten, kita perlu melihat bagaimana Three.js menyimpan dan menghitung transformasi tersebut. Pada slide berikutnya, kita akan membahas `matrix` dan `matrixWorld`, serta bagaimana transformasi lokal dan transformasi parent dikomposisi menjadi transformasi dunia.

---

## Slide 017 - Scene Graph dan Matrix

### Narasi

Pada slide sebelumnya, kita melihat bahwa ketika `robot.position.x` dan `robot.rotation.y` diubah, semua child ikut berubah. Mekanisme di balik perilaku itu adalah **scene graph** dan komposisi matriks.

Three.js tidak hanya menyimpan `position`, `rotation`, dan `scale` sebagai nilai terpisah. Setiap objek juga memiliki representasi matriks, terutama:

- `matrix`: matriks transformasi lokal objek terhadap parent-nya.
- `matrixWorld`: matriks transformasi objek dalam koordinat dunia/scene.

Secara konseptual, alurnya dapat dibaca dari atas ke bawah:

```text
Local Matrix
   ↓
Parent Matrix
   ↓
World Matrix
```

Artinya, transformasi objek dimulai dari **Local Matrix**, yaitu transformasi objek terhadap parent. Kemudian dikombinasikan dengan **Parent Matrix**, yaitu transformasi parent terhadap parent-nya, dan seterusnya sampai menghasilkan **World Matrix**. Dalam Three.js, jika objek memiliki parent, `matrixWorld` pada dasarnya merupakan hasil komposisi `matrixWorld` parent dengan `matrix` objek. Jika tidak ada parent, `matrixWorld` sama dengan `matrix`.

```text
matrixWorld = parent.matrixWorld * matrix
```

Persamaan ini adalah bentuk sederhana dari **transform composition**. Ia menjelaskan mengapa satu perubahan pada parent dapat memengaruhi seluruh subtree. Misalnya, jika `robot` digeser atau diputar, child seperti tangan, kaki, atau kepala tidak perlu diubah satu per satu; `matrixWorld` mereka akan dihitung ulang berdasarkan hierarki.

Dalam rendering pipeline, `matrixWorld` berperan sebagai **model matrix** yang membawa geometri dari koordinat objek ke koordinat dunia. Setelah itu, renderer akan melanjutkan ke transformasi kamera dan proyeksi. Jadi, memahami `matrix` dan `matrixWorld` membantu kita melihat bagaimana objek 3D akhirnya diposisikan di layar.

Sebelum lanjut, hal penting yang harus dipahami adalah perbedaan antara transformasi lokal dan transformasi dunia. `matrix` menjawab pertanyaan “di mana objek ini relatif terhadap parent?”, sedangkan `matrixWorld` menjawab “di mana objek ini dalam scene?”.

### Inti yang Harus Ditekankan

- `matrix` adalah transformasi lokal objek terhadap parent.
- `matrixWorld` adalah transformasi absolut objek dalam scene/world.
- Hierarki parent-child memungkinkan transformasi parent diwariskan ke child melalui komposisi matriks.
- `matrixWorld` adalah hasil transform composition dari `Local Matrix`, `Parent Matrix`, dan ancestor lainnya.
- Perubahan pada parent memengaruhi child karena `matrixWorld` child dihitung ulang, bukan karena child diubah manual satu per satu.

### Transisi ke Slide Berikutnya

Setelah kita memahami bagaimana objek diposisikan melalui scene graph dan matriks, langkah berikutnya adalah melihat bagaimana objek tersebut diberi respons visual terhadap cahaya, yaitu dari material dasar menuju **PBR — Physically Based Rendering**.

---

## Slide 018 - Dari Material Dasar ke PBR

### Narasi

Pada pertemuan sebelumnya, kita sudah menggunakan **material dasar** dalam Three.js. Material dasar biasanya cukup untuk menampilkan warna dan bentuk objek, tetapi responsnya terhadap cahaya masih relatif sederhana. Di sini kita menaikkan fokus ke **PBR — Physically Based Rendering**, yaitu pendekatan material yang berusaha membuat objek terlihat lebih konsisten ketika pencahayaan, sudut pandang, atau lingkungan berubah.

Inti dari PBR bukan sekadar membuat objek “lebih bagus”, melainkan memberi aturan yang lebih stabil pada hubungan antara **material**, **cahaya**, dan **permukaan**. Dalam pipeline rendering, setelah geometri diproses dan rasterisasi menghasilkan fragmen, shader akan menentukan warna akhir tiap piksel. Pada material dasar, keputusan warna bisa terasa kurang terkontrol. Pada PBR, parameter material digunakan untuk menggambarkan sifat permukaan secara lebih terstruktur, sehingga hasil visual lebih dapat diprediksi.

Penting untuk dipahami bahwa PBR adalah jembatan dari tampilan objek yang hanya “berwarna” menuju tampilan objek yang memiliki karakter permukaan. Konsep ini menjadi dasar sebelum kita masuk ke material Three.js yang mendukung PBR, seperti `MeshStandardMaterial`, yang nanti akan dijelaskan melalui parameter seperti `color`, `roughness`, dan `metalness`.

### Inti yang Harus Ditekankan

- **PBR** adalah pendekatan rendering yang membuat respons material terhadap cahaya lebih konsisten secara visual.
- Material dasar berguna untuk pengenalan, tetapi PBR membantu objek terlihat lebih stabil dalam berbagai kondisi pencahayaan.
- PBR menjadi dasar untuk memahami material Three.js yang lebih realistis, terutama material yang mendukung parameter permukaan.

### Transisi ke Slide Berikutnya

Setelah memahami arah dari material dasar ke PBR, kita akan melihat implementasinya pada `MeshStandardMaterial`, termasuk parameter utama seperti `color`, `roughness`, dan `metalness`.

---

## Slide 019 - MeshStandardMaterial

### Narasi

Setelah objek memiliki bentuk geometri, langkah berikutnya adalah menentukan bagaimana permukaan objek itu terlihat. Di Three.js, salah satu material yang paling sering digunakan untuk tampilan yang lebih realistis adalah `THREE.MeshStandardMaterial`.

Material ini termasuk dalam pendekatan **PBR** atau **Physically Based Rendering**. Artinya, warna dan tampilan objek tidak hanya ditentukan oleh satu nilai warna, tetapi juga oleh sifat permukaan yang memengaruhi cara cahaya berinteraksi dengannya.

```javascript
const material =
  new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.4,
    metalness: 0.2
  });
```

Kode di atas membuat sebuah material baru dengan `THREE.MeshStandardMaterial`. Material ini kemudian dapat diberikan ke sebuah mesh, misalnya `mesh.material = material;`, sehingga objek 3D memiliki tampilan permukaan yang lebih terdefinisi.

Tiga parameter utama yang perlu kita perhatikan adalah:

- `color`
- `roughness`
- `metalness`

Parameter `color` menentukan warna dasar permukaan. Nilai `0xffffff` berarti putih. Dalam konteks PBR, warna ini sering dipahami sebagai warna material sebelum dipengaruhi oleh cahaya, refleksi, atau sifat permukaan lainnya.

Parameter `roughness` menggambarkan seberapa kasar permukaan objek. Nilai `0.4` menunjukkan permukaan yang tidak terlalu halus dan tidak terlalu kasar. Parameter ini akan sangat memengaruhi bentuk highlight atau kilau pada objek.

Parameter `metalness` menggambarkan seberapa metalik permukaan objek. Nilai `0.2` berarti objek memiliki sedikit karakter metalik, tetapi masih lebih dekat ke material non-metal. Semakin tinggi nilai `metalness`, semakin kuat objek menyerupai permukaan logam.

Dalam alur rendering, material seperti ini berperan pada tahap perhitungan warna per fragmen. Setelah objek diproyeksikan dan dirasterisasi, GPU akan menghitung warna setiap piksel berdasarkan posisi kamera, arah cahaya, normal permukaan, dan parameter material.

Karena `MeshStandardMaterial` berbasis PBR, hasil akhirnya sangat bergantung pada pencahayaan di scene. Tanpa cahaya yang sesuai, material ini tidak akan menunjukkan karakter PBR-nya secara maksimal.

### Inti yang Harus Ditekankan

- `THREE.MeshStandardMaterial` adalah material PBR yang umum digunakan untuk membuat objek 3D terlihat lebih realistis.
- Parameter `color`, `roughness`, dan `metalness` menentukan karakter visual permukaan objek.
- `color` adalah warna dasar, `roughness` memengaruhi kekasaran dan highlight, sedangkan `metalness` memengaruhi karakter metalik.
- Material PBR bekerja paling baik ketika scene memiliki pencahayaan yang sesuai.

### Transisi ke Slide Berikutnya

Setelah kita memahami peran `MeshStandardMaterial` secara umum, kita akan masuk lebih dalam ke salah satu parameter yang paling menentukan karakter permukaan, yaitu `roughness`.

---

## Slide 020 - Roughness

### Narasi

Pada `MeshStandardMaterial`, parameter `roughness` menentukan seberapa kasar permukaan objek secara visual. Nilai `roughness` berada pada rentang `0` sampai `1`, di mana `0` berarti permukaan sangat halus dan `1` berarti permukaan sangat kasar.

Secara intuitif, kita bisa membayangkan permukaan halus seperti kaca atau logam poles. Saat cahaya mengenai permukaan tersebut, pantulan atau highlight cenderung tajam, kecil, dan jelas. Sebaliknya, permukaan kasar seperti cat matte atau plastik kusam akan menyebarkan cahaya ke banyak arah, sehingga highlight menjadi lebih lebar, lembut, dan kurang tajam.

Dalam rendering, `roughness` memengaruhi cara shader menghitung **specular highlight** dan karakter **reflection**. Semakin kecil nilai `roughness`, semakin fokus pantulan cahaya; semakin besar nilai `roughness`, semakin tersebar pantulan tersebut. Karena itu, parameter ini penting untuk membedakan material seperti logam halus, plastik, kayu, atau kain meskipun warna dasarnya sama.

Pada material yang kita lihat sebelumnya, nilai `roughness: 0.4` menunjukkan permukaan yang cukup halus tetapi tidak sepenuhnya mengkilap. Jika kita mengubahnya menjadi `0`, objek akan tampak lebih glossy dan highlight lebih tajam. Jika diubah menjadi `1`, objek akan tampak lebih matte dan refleksi lebih lembut.

Sebelum lanjut, kita perlu memahami bahwa `roughness` bukan mengubah warna material, melainkan mengubah cara cahaya dipantulkan dari permukaan. Pemahaman ini penting karena dalam grafika komputer, tampilan material tidak hanya ditentukan oleh warna, tetapi juga oleh respons permukaan terhadap pencahayaan.

### Inti yang Harus Ditekankan

- `roughness = 0` menghasilkan permukaan sangat halus dengan highlight yang tajam.
- `roughness = 1` menghasilkan permukaan sangat kasar dengan highlight yang lembut dan tersebar.
- Parameter ini memengaruhi **specular highlight** dan karakter **reflection**, bukan warna dasar material.
- Nilai `roughness` membantu membedakan material dalam rendering berbasis pencahayaan.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana `roughness` mengatur kekasaran permukaan, langkah berikutnya adalah melihat parameter `metalness`, yang menentukan apakah material berperilaku seperti logam atau non-logam.

---

## Slide 021 - Metalness

### Narasi

Parameter `metalness` menentukan apakah sebuah material diperlakukan sebagai **non-metal** atau **metal**. Dalam model material, nilai ini biasanya berupa bilangan antara `0` dan `1`, di mana `metalness = 0` berarti material non-metal dan `metalness = 1` berarti material metal.

```text
metalness = 0
→ non-metal

metalness = 1
→ metal
```

Secara visual, perbedaan ini tidak hanya soal warna. Yang berubah adalah **cara material memantulkan cahaya**. Material non-metal umumnya memiliki warna permukaan yang lebih ditentukan oleh cahaya yang diserap dan dipantulkan secara diffuse. Material metal, sebaliknya, lebih banyak menampilkan cahaya yang dipantulkan langsung oleh permukaan, sehingga refleksi menjadi bagian penting dari penampilannya.

Dalam rendering pipeline, parameter ini dibaca oleh material shader saat menghitung pencahayaan. Dengan kata lain, `metalness` memberi tahu sistem rendering: “gunakan model refleksi yang sesuai untuk permukaan metal” atau “gunakan model yang lebih sesuai untuk permukaan non-metal”. Ini penting karena logam dan plastik, misalnya, akan terlihat berbeda meskipun berada di bawah pencahayaan yang sama.

Hal yang perlu dipahami mahasiswa adalah bahwa `metalness` bukan parameter bentuk objek. Mesh atau geometri tetap sama, tetapi nilai `metalness` yang berbeda akan mengubah karakter material. Misalnya, kubus dengan `metalness = 0` dapat tampak seperti plastik atau kayu, sedangkan kubus dengan `metalness = 1` dapat tampak seperti logam.

Perlu juga dibedakan dari `roughness`. `metalness` menentukan jenis material terhadap refleksi, sedangkan `roughness` menentukan seberapa halus atau kasar permukaan. Keduanya saling melengkapi, tetapi pada slide ini kita fokus pada peran `metalness` sebagai pengatur karakter metal versus non-metal.

Sebelum lanjut, pastikan kita memahami bahwa `metalness` memengaruhi **reflection** dan **lighting** pada material, bukan mengubah posisi kamera, transformasi objek, atau pipeline rasterisasi secara langsung.

### Inti yang Harus Ditekankan

- `metalness = 0` menghasilkan material **non-metal**.
- `metalness = 1` menghasilkan material **metal**.
- Material metal berperilaku berbeda terhadap **reflection** dibanding non-metal.
- `metalness` menentukan karakter material dalam lighting, bukan bentuk geometri.
- `metalness` bekerja bersama `roughness`, tetapi memiliki peran yang berbeda.

### Transisi ke Slide Berikutnya

Setelah memahami peran `metalness`, kita akan melihat bagaimana `roughness` memengaruhi ketajaman dan lebar refleksi pada slide berikutnya.

---

## Slide 022 - Roughness vs Reflection

### Narasi

Setelah **metalness** menentukan apakah material berperilaku seperti logam atau non-logam, **roughness** mengatur bagaimana refleksi pada permukaan tersebut terlihat. Parameter ini berkaitan dengan seberapa kasar atau halus permukaan objek secara visual.

```text
Low Roughness
→ reflection lebih jelas
→ highlight tajam

High Roughness
→ reflection lebih blur
→ highlight lebih lebar
```

Secara intuitif, permukaan dengan **low roughness** dapat kita bayangkan seperti permukaan yang sangat halus, misalnya kaca, air tenang, atau logam yang dipoles. Karena permukaannya relatif rata, cahaya yang dipantulkan tidak tersebar terlalu banyak. Akibatnya, refleksi lingkungan atau sumber cahaya terlihat lebih jelas, dan **highlight** yang muncul menjadi lebih sempit serta tajam.

Sebaliknya, permukaan dengan **high roughness** menyerupai permukaan yang kasar atau tidak rata, misalnya plastik kasar, kayu, atau logam yang tergores. Cahaya yang mengenai permukaan tersebut tersebar ke banyak arah karena variasi mikro pada permukaannya. Karena itu, refleksi menjadi lebih **blur**, dan highlight terlihat lebih lebar serta lebih lembut.

Perbedaan ini penting dalam grafika komputer karena **roughness** membantu kita membedakan material yang secara warna mungkin mirip, tetapi secara fisika berbeda. Misalnya, dua objek bisa memiliki warna yang sama, tetapi satu terlihat seperti logam halus dan yang lain terlihat seperti plastik kasar. Tanpa parameter roughness, material akan sulit dibedakan secara visual.

Dalam konteks rendering pipeline, roughness berperan pada tahap **shading material**, yaitu ketika sistem menentukan bagaimana cahaya berinteraksi dengan permukaan objek. Parameter ini memengaruhi bentuk dan sebaran **specular highlight**, sehingga sangat penting untuk menghasilkan tampilan material yang lebih realistis. Namun, roughness saja tidak cukup; hasil akhirnya juga sangat bergantung pada pencahayaan dan lingkungan yang digunakan.

### Inti yang Harus Ditekankan

- **Roughness** mengatur kekasaran permukaan: nilai rendah menghasilkan refleksi lebih jelas dan highlight tajam, sedangkan nilai tinggi menghasilkan refleksi lebih blur dan highlight lebih lebar.
- Parameter ini penting untuk membedakan material seperti kaca, logam halus, plastik, atau permukaan kasar dalam rendering 3D.
- Roughness memengaruhi tampilan **specular highlight** pada tahap shading material, tetapi hasil akhirnya juga bergantung pada pencahayaan dan environment.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan melihat mengapa material PBR seperti `MeshStandardMaterial` membutuhkan **light**, **environment**, dan **exposure** yang sesuai agar efek roughness dan metalness dapat tampil realistis.

---

## Slide 023 - PBR Membutuhkan Lighting yang Baik

### Narasi

Setelah kita melihat bagaimana **roughness** memengaruhi kejelasan refleksi, ada satu hal yang sering membuat hasil PBR terlihat salah: materialnya sudah benar, tetapi **lighting** dan **environment** belum mendukung.

`MeshStandardMaterial` adalah material PBR di Three.js. Material ini tidak hanya mengandalkan warna dasar, tetapi menghitung respons permukaan terhadap cahaya secara lebih realistis. Karena itu, ia membutuhkan beberapa kondisi agar tampil sesuai harapan:

- **`light`**, yaitu sumber cahaya yang menerangi objek;
- **`environment`**, yaitu informasi lingkungan yang membantu material memantulkan sekitarnya;
- **`exposure`** yang sesuai, agar terang atau gelap adegan tidak berlebihan.

Poin penting di sini adalah **`environment`**. Dalam rendering PBR, permukaan logam tidak cukup hanya diterangi oleh `light` langsung. Logam cenderung menampilkan refleksi lingkungan. Jika scene tidak memiliki environment yang memadai, material metal bisa terlihat terlalu gelap, bahkan hampir hitam, meskipun ada sumber cahaya.

Secara pipeline, hal ini terjadi karena shader material membutuhkan data cahaya dan lingkungan untuk menghitung warna akhir pixel. `light` memberi kontribusi langsung, `environment` memberi kontribusi refleksi yang lebih kaya, dan `exposure` mengatur seberapa terang hasil akhir ditampilkan. Jika salah satu komponen kurang, output rasterisasi bisa terlihat datar, gelap, atau tidak sesuai dengan sifat material.

Sebelum lanjut, kita perlu memahami bahwa PBR bukan hanya soal memilih material. PBR adalah kombinasi antara **material**, **cahaya**, **lingkungan**, dan **`exposure`**. Tanpa lingkungan yang sesuai, parameter seperti metalness atau roughness tidak akan terlihat maksimal.

### Inti yang Harus Ditekankan

- `MeshStandardMaterial` membutuhkan **`light`**, **`environment`**, dan **`exposure`** yang sesuai agar hasil PBR terlihat realistis.
- **`environment`** sangat penting untuk material metal karena logam banyak bergantung pada refleksi lingkungan.
- Tanpa environment yang memadai, material metal dapat terlihat terlalu gelap meskipun ada sumber cahaya.

### Transisi ke Slide Berikutnya

Setelah kita memahami bahwa material PBR harus didukung lighting dan environment yang tepat, langkah berikutnya adalah bagaimana asset 3D dengan material tersebut dimuat ke dalam aplikasi, yaitu melalui format `GLTF` dan `GLB`.

---

## Slide 024 - GLTF / GLB

### Narasi

Setelah kita membahas bagaimana material PBR membutuhkan pencahayaan yang tepat, langkah berikutnya adalah bagaimana objek 3D itu sendiri masuk ke dalam aplikasi **Three.js**. Dalam praktik, jarang kita membangun seluruh geometri secara manual; sebagian besar aplikasi real-time memuat asset dari file. Di sinilah format `GLTF` dan `GLB` menjadi penting.

```text
GLTF
GLB
```

`GLTF` dan `GLB` adalah format **asset 3D** yang umum digunakan pada **real-time 3D**. Format ini biasanya membawa informasi seperti geometri, material, tekstur, animasi, dan struktur scene, sehingga objek yang dimuat dapat langsung diproses oleh **rendering pipeline** Three.js. Dengan kata lain, file asset bukan hanya gambar, melainkan paket data yang siap digunakan oleh GPU untuk menampilkan objek di layar.

Dalam konteks kuliah ini, yang perlu kita pahami dulu adalah bahwa `GLTF` dan `GLB` adalah pintu masuk asset 3D ke dalam aplikasi. Mereka memungkinkan kita memisahkan pembuatan model di software 3D lain dengan proses rendering di Three.js. Untuk slide ini, kita cukup mengenali bahwa `GLTF` dan `GLB` adalah format yang didukung Three.js untuk memuat asset 3D, terutama karena kepraktisannya pada aplikasi real-time.

### Inti yang Harus Ditekankan

- `GLTF` dan `GLB` adalah format file **asset 3D** yang dapat dimuat oleh `Three.js`.
- Format ini umum pada **real-time 3D** karena membawa data objek yang siap dirender.
- Pemahaman awal: asset 3D dapat dipisahkan dari kode rendering dan dimuat dari file.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa `Three.js` dapat memuat asset dari `GLTF` dan `GLB`, kita akan membandingkan struktur keduanya: `GLTF` yang biasanya terdiri dari beberapa file, dan `GLB` yang mengemas asset dalam satu file binary.

---

## Slide 025 - GLTF vs GLB

### Narasi

Dalam praktik Three.js, kita sering menemui dua cara mengemas asset 3D yang sama: **GLTF** dan **GLB**. Keduanya dipakai untuk membawa model 3D ke aplikasi real-time, tetapi berbeda pada cara file-filenya disusun.

Untuk **GLTF**, asset biasanya tidak hanya satu berkas. Kita dapat melihat struktur seperti:

```text
.gltf
.bin
texture images
```

Berkas `.gltf` berperan sebagai berkas utama yang menjelaskan asset, `.bin` menyimpan data biner seperti geometri atau animasi, sedangkan `texture images` adalah berkas gambar tekstur yang terpisah. Artinya, satu model 3D bisa terdiri dari beberapa file yang saling merujuk.

Sementara itu, **GLB** menggunakan satu berkas:

```text
.glb
```

Di sini, GLB mengemas asset dalam satu file binary. Data yang sebelumnya mungkin tersebar pada beberapa berkas dikemas menjadi satu paket, sehingga lebih mudah dikirim, disimpan, dan dimuat oleh aplikasi.

Perbedaan utamanya bukan pada jenis model yang bisa ditampilkan, melainkan pada **penyimpanan dan distribusi**. GLTF lebih terbuka sebagai kumpulan file, sedangkan GLB lebih ringkas sebagai satu file binary. Dalam konteks web 3D, hal ini penting karena browser dan aplikasi Three.js perlu memuat asset secara cepat dan andal.

Jadi, ketika kita melihat sebuah model 3D, yang perlu dipahami adalah apakah asset tersebut datang sebagai paket multi-file atau sebagai satu file binary. Pemahaman ini membantu kita memilih cara penyimpanan, pengiriman, dan loading asset yang sesuai sebelum masuk ke alasan mengapa format ini cocok untuk web 3D.

### Inti yang Harus Ditekankan

- **GLTF** dapat berupa kumpulan file: `.gltf`, `.bin`, dan `texture images`.
- **GLB** adalah satu file binary `.glb` yang mengemas asset dalam satu paket.
- Perbedaan utama ada pada **struktur file dan kemudahan distribusi**, bukan pada kemampuan dasar menampilkan model 3D.
- Dalam Three.js, kedua format dapat dipakai untuk memuat asset 3D real-time.

### Transisi ke Slide Berikutnya

Setelah memahami bentuk file-nya, kita lanjut ke pertanyaan berikutnya: mengapa format GLTF cocok untuk web 3D, terutama karena dapat membawa komponen penting seperti mesh, material, texture, hierarchy, dan animation secara efisien.

---

## Slide 026 - Mengapa GLTF Cocok untuk Web 3D?

### Narasi

Setelah kita membedakan **GLTF** dan **GLB**, langkah berikutnya adalah memahami mengapa format ini sering menjadi pilihan utama untuk aplikasi **Web 3D**.

Intinya, **GLTF** bukan hanya format untuk menyimpan satu geometri. Ia dirancang sebagai wadah yang membawa beberapa komponen penting dari sebuah adegan 3D secara terstruktur.

Komponen yang dapat dibawa oleh **GLTF** antara lain:

- **mesh**, yaitu data geometri seperti vertex, index, dan bentuk objek;
- **material**, yaitu informasi permukaan seperti warna, kekasaran, metalik, atau parameter material lain;
- **texture**, yaitu citra 2D yang digunakan untuk memperkaya tampilan material;
- **hierarchy**, yaitu struktur hubungan antar objek, misalnya objek anak yang mengikuti transformasi objek induk;
- **animation**, yaitu data perubahan transformasi atau parameter lain terhadap waktu.

Keberadaan komponen-komponen ini penting karena dalam **rendering pipeline**, sebuah objek 3D tidak cukup hanya berupa titik-titik koordinat. Objek juga perlu memiliki material agar dapat berinteraksi dengan pencahayaan, tekstur agar tampil lebih realistis, hierarki agar transformasi dapat dilakukan secara konsisten, dan animasi agar objek dapat bergerak atau berubah pose.

Dari sisi distribusi, **GLTF** dirancang agar asset 3D dapat dikirimkan secara efisien. Artinya, data yang dibutuhkan aplikasi web dapat dikemas dengan struktur yang jelas, sehingga proses pembacaan, pemuatan, dan penggunaan asset menjadi lebih mudah. Hal ini sangat relevan untuk **Web 3D**, karena browser dan aplikasi **Three.js** membutuhkan data yang dapat diproses cepat sebelum objek ditampilkan di layar.

Jadi, ketika kita mengatakan **GLTF cocok untuk Web 3D**, yang dimaksud bukan hanya karena formatnya populer, tetapi karena format ini mendukung kebutuhan teknis aplikasi 3D modern: membawa geometri, material, tekstur, hierarki, dan animasi dalam satu sistem distribusi yang rapi.

### Inti yang Harus Ditekankan

- **GLTF** membawa lebih dari sekadar geometri: **mesh**, **material**, **texture**, **hierarchy**, dan **animation**.
- Format ini penting karena mendukung kebutuhan **rendering pipeline** dan distribusi asset 3D yang efisien.
- Untuk aplikasi **Web 3D**, **GLTF** memudahkan proses pemuatan dan penggunaan asset sebelum ditampilkan oleh **Three.js** atau **GPU**.

### Transisi ke Slide Berikutnya

Sekarang kita sudah tahu apa saja yang dapat dibawa oleh **GLTF**. Langkah berikutnya adalah melihat bagaimana **Three.js** membaca file tersebut melalui `GLTFLoader`.

---

## Slide 027 - GLTFLoader

### Narasi

Setelah kita memahami bahwa **GLTF** dapat membawa mesh, material, texture, hierarchy, dan animation, langkah berikutnya adalah menyiapkan cara Three.js membaca file tersebut. Di sini kita menggunakan **`GLTFLoader`**, yaitu komponen loader yang disediakan oleh Three.js untuk memuat aset **GLTF** maupun **GLB**.

```javascript
import {
  GLTFLoader
}
from
"three/addons/loaders/GLTFLoader.js";

const loader =
  new GLTFLoader();
```

Baris `import` membawa kelas `GLTFLoader` dari modul `three/addons/loaders/GLTFLoader.js`. Artinya, kita tidak perlu menulis parser GLTF secara manual, tetapi memakai utilitas yang sudah memahami struktur file GLTF/GLB.

Selanjutnya, `const loader = new GLTFLoader();` membuat satu instance loader. Instance ini yang nanti akan kita gunakan untuk meminta file model, membaca isi file, dan menyiapkan objek 3D yang dapat dimasukkan ke `scene`.

Penting untuk diperhatikan bahwa kode pada slide ini baru menyiapkan **loader**, belum memuat model. Jadi, setelah `loader` dibuat, tahap berikutnya adalah memanggil metode load pada loader tersebut.

### Inti yang Harus Ditekankan

- `GLTFLoader` adalah komponen Three.js untuk membaca file **GLTF/GLB**.
- `import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";` membawa kelas loader ke dalam program.
- `const loader = new GLTFLoader();` membuat instance loader yang siap digunakan.
- Slide ini baru tahap persiapan; model belum dimuat ke scene.

### Transisi ke Slide Berikutnya

Setelah `loader` tersedia, langkah berikutnya adalah memanggil `loader.load(...)` untuk mengambil file model dan menambahkan `gltf.scene` ke dalam scene.

---

## Slide 028 - Memuat Model

### Narasi

Setelah **`GLTFLoader`** dibuat, langkah berikutnya adalah meminta file model 3D dari path tertentu. Pada potongan kode berikut, loader memanggil `load` dengan argument path `/models/model.glb` dan callback yang menerima objek `gltf`.

```javascript
loader.load(
  "/models/model.glb",
  gltf => {
    scene.add(
      gltf.scene
    );
  }
);
```

Secara intuisi, **`loader.load`** berfungsi sebagai jembatan antara file asset di disk atau server dengan scene Three.js. File `model.glb` berisi geometri, material, dan mungkin animasi, tetapi sebelum bisa dirender, isinya harus diubah menjadi objek Three.js. Proses itu terjadi di dalam callback.

Objek `gltf` adalah hasil pemuatan model. Di dalamnya terdapat beberapa properti, tetapi untuk model utama kita biasanya menggunakan **`gltf.scene`**. Properti ini berisi **scene graph** dari model, misalnya node, mesh, transformasi, dan material yang sudah diparsing oleh loader.

Baris `scene.add(gltf.scene)` adalah langkah penting karena model baru benar-benar masuk ke scene aktif. Setelah ditambahkan, model dapat ikut dalam **rendering pipeline**: transformasi kamera, clipping, rasterisasi, shading, dan lighting. Tanpa `scene.add`, model sudah dimuat tetapi tidak akan tampil karena tidak menjadi bagian dari scene yang dirender.

Perhatikan juga bahwa path `/models/model.glb` harus dapat diakses oleh aplikasi. Jika file tidak ditemukan, callback utama tidak akan berjalan dengan benar. Dalam praktik, kita perlu memastikan nama file, ekstensi, dan lokasi folder sesuai dengan struktur proyek.

Inti yang harus dipahami sebelum lanjut adalah: **`loader.load`** tidak hanya membaca file, tetapi juga menyiapkan model agar bisa dimasukkan ke scene. **`gltf.scene`** adalah pintu masuk utama untuk model GLTF/GLB yang dimuat.

### Inti yang Harus Ditekankan

- `loader.load("/models/model.glb", ...)` meminta file model dan memprosesnya menjadi objek Three.js.
- `gltf.scene` berisi scene graph model utama yang siap ditambahkan ke scene.
- `scene.add(gltf.scene)` membuat model menjadi bagian dari scene aktif sehingga dapat dirender.
- Path file harus benar agar model dapat dimuat dan ditampilkan.

### Transisi ke Slide Berikutnya

Karena proses pemuatan model melibatkan permintaan file dan parsing, kita perlu memahami bahwa loading tidak terjadi secara instan. Selanjutnya kita akan melihat bagaimana loading bersifat asynchronous dan mengapa aplikasi perlu menunggu asset selesai dimuat.

---

## Slide 029 - Loading Bersifat Asynchronous

### Narasi

Saat model dimuat, Three.js tidak langsung memberikan objek 3D yang siap ditampilkan. File model harus melewati beberapa tahap sebelum bisa menjadi bagian dari scene. Tahapan ini penting karena menentukan kapan objek benar-benar tersedia untuk dirender.

```text
Request File
   ↓
Loading
   ↓
Decode / Parse
   ↓
Create Three.js Objects
   ↓
Add to Scene
```

Alur di atas dapat dibaca dari atas ke bawah sebagai proses pemuatan asset:

1. **Request File** — aplikasi meminta file model, misalnya file `.glb`, dari server atau penyimpanan lokal.
2. **Loading** — data file diterima dan dibaca oleh sistem.
3. **Decode / Parse** — isi file diurai menjadi struktur yang dapat dipahami, seperti geometri, material, dan hubungan antarbagian model.
4. **Create Three.js Objects** — hasil parsing dikonversi menjadi objek Three.js yang dapat dipakai dalam scene graph.
5. **Add to Scene** — objek yang sudah dibuat dimasukkan ke scene, biasanya melalui `gltf.scene`.

Kata **asynchronous** di sini berarti proses pemuatan tidak berjalan secara instan dan tidak memblokir alur program. Selama file sedang diminta, dibaca, atau diurai, aplikasi tetap dapat melanjutkan tugas lain, seperti menampilkan antarmuka atau memproses input pengguna. Karena itu, kode yang menambahkan model ke scene tidak boleh dijalankan sebelum asset benar-benar siap.

Dalam contoh sebelumnya, `loader.load(...)` menggunakan callback `gltf => { scene.add(gltf.scene); }`. Callback tersebut dipanggil setelah tahap pemuatan dan parsing selesai. Artinya, `gltf.scene` baru dapat digunakan ketika objek Three.js sudah berhasil dibuat. Jika kita mencoba menambahkan model sebelum callback terpanggil, scene kemungkinan masih kosong atau objek belum tersedia.

Hal yang perlu dipahami mahasiswa adalah bahwa loading model bukan sekadar membaca file, melainkan proses bertahap yang menghasilkan objek siap render. Setelah objek masuk ke scene, barulah objek tersebut dapat mengalami transformasi, lighting, rasterisasi, dan tahap rendering lainnya.

### Inti yang Harus Ditekankan

- Loading model bersifat **asynchronous**, sehingga aplikasi tidak berhenti menunggu file selesai dimuat.
- Model baru bisa ditambahkan ke scene setelah file selesai **dimuat, diurai, dan dikonversi** menjadi objek Three.js.
- `gltf.scene` merupakan hasil akhir dari proses loading yang siap dimasukkan ke scene graph.
- Menambahkan model sebelum asset siap dapat menyebabkan objek tidak tampil atau kode gagal berjalan.

### Transisi ke Slide Berikutnya

Setelah model berhasil dimuat dan masuk ke scene, langkah berikutnya adalah memahami struktur model yang diimpor. Slide berikutnya akan membahas **model hierarchy**, yaitu bagaimana bagian-bagian model tersusun di dalam `gltf.scene`.

---

## Slide 030 - Model Hierarchy

### Narasi

Ketika kita mengimpor model 3D ke dalam aplikasi Three.js, model tersebut tidak selalu berupa satu objek tunggal. Sering kali, model yang diimpor terdiri dari beberapa bagian yang tersusun dalam struktur bertingkat. Struktur ini disebut **model hierarchy**.

Contoh sederhana yang ada pada slide adalah model robot. Robot dapat memiliki bagian-bagian seperti `Body`, `Head`, `Arm`, dan `Legs`. Bagian-bagian ini tidak berdiri sendiri secara acak, melainkan tersusun dalam hubungan **parent-child**.

```text
Robot
├── Body
├── Head
├── Arm
└── Legs
```

Dalam diagram tersebut, `Robot` dapat dianggap sebagai **root** atau induk dari seluruh bagian. `Body`, `Head`, `Arm`, dan `Legs` adalah anak dari `Robot`. Artinya, posisi, rotasi, dan skala setiap bagian biasanya dihitung relatif terhadap induknya.

Dalam Three.js, hierarchy seperti ini dapat diperiksa melalui `gltf.scene`. Setelah model glTF dimuat, `gltf.scene` biasanya menjadi **root Object3D** dari model yang diimpor. Dari sana, kita dapat melihat struktur objek di dalamnya, misalnya bagian-bagian model yang menjadi anak dari scene tersebut.

Hal ini penting karena dalam grafika komputer, setiap objek 3D umumnya memiliki transformasi lokal. Transformasi lokal tersebut kemudian digabungkan dengan transformasi parent untuk menghasilkan posisi akhir objek dalam ruang dunia. Dengan kata lain, jika `Robot` diputar, maka `Head`, `Arm`, dan `Legs` juga akan ikut bergerak karena mereka berada di bawah hierarchy yang sama.

Jadi, sebelum kita melakukan transformasi terhadap model yang diimpor, kita perlu memahami bahwa model tersebut masih merupakan bagian dari **Object3D hierarchy**. Kita tidak hanya berhadapan dengan satu mesh, tetapi dengan struktur objek yang dapat memiliki hubungan antarbagian.

### Inti yang Harus Ditekankan

- Model yang diimpor dapat memiliki **hierarchy**, bukan hanya satu objek tunggal.
- Hierarchy menunjukkan hubungan **parent-child** antarbagian model.
- `gltf.scene` adalah titik awal untuk memeriksa struktur model yang diimpor.
- Transformasi pada parent akan memengaruhi child di bawahnya.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa model yang diimpor memiliki hierarchy, langkah berikutnya adalah melihat bagaimana model tersebut dapat diposisikan, diskalakan, dan diputar sebagai bagian dari `Object3D hierarchy`.

---

## Slide 031 - Transform Imported Model

### Narasi

Setelah model berhasil diimpor, langkah berikutnya adalah menempatkan model tersebut di dalam scene agar sesuai dengan posisi kamera, objek lain, dan komposisi visual yang kita inginkan. Dalam Three.js, model yang diimpor tetap diperlakukan sebagai bagian dari **Object3D hierarchy**, artinya model tersebut memiliki properti transformasi yang sama dengan objek 3D lainnya, seperti `position`, `scale`, dan `rotation`.

```javascript
model.position.set(
  0, 0, 0
);

model.scale.setScalar(
  1.5
);

model.rotation.y =
  Math.PI;
```

Pada potongan kode di atas, baris `model.position.set(0, 0, 0);` digunakan untuk mengatur posisi model pada koordinat `(0, 0, 0)`. Koordinat ini biasanya merujuk ke titik asal scene, yaitu pusat dunia. Dengan menempatkan model di titik tersebut, model menjadi acuan utama sebelum kita menambahkan objek lain seperti lantai, kamera, atau sumber cahaya.

Selanjutnya, `model.scale.setScalar(1.5);` digunakan untuk memperbesar model secara seragam. Nilai `1.5` berarti model akan menjadi 150% dari ukuran aslinya. Karena `setScalar` digunakan, nilai skala yang sama diterapkan pada sumbu `x`, `y`, dan `z`, sehingga proporsi model tetap terjaga dan tidak menjadi gepeng atau memanjang.

Baris terakhir, `model.rotation.y = Math.PI;`, digunakan untuk memutar model sebesar `Math.PI` radian pada sumbu `y`. Dalam derajat, `Math.PI` setara dengan 180 derajat. Artinya, model akan berputar setengah putaran mengelilingi sumbu vertikal. Transformasi ini sering dibutuhkan jika orientasi awal model hasil impor tidak sesuai dengan arah yang kita inginkan, misalnya model menghadap ke belakang atau ke sisi yang salah.

Perlu kita perhatikan bahwa transformasi pada `model` biasanya diterapkan pada objek root dari model yang diimpor. Karena model dapat memiliki banyak bagian anak, seperti tubuh, kepala, lengan, atau kaki, transformasi pada root akan memengaruhi seluruh hierarki di bawahnya. Dengan kata lain, jika kita memindahkan, memperbesar, atau memutar `model`, seluruh bagian model akan ikut berubah secara konsisten.

Namun, jika kita ingin mengubah hanya satu bagian tertentu, misalnya hanya memutar kepala atau mengangkat satu lengan, maka transformasi harus diberikan pada objek anak yang sesuai, bukan pada root model. Inilah mengapa memahami **hierarchy** penting sebelum melakukan transformasi. Kita perlu tahu apakah transformasi yang kita lakukan bersifat global untuk seluruh model, atau hanya untuk satu komponen tertentu.

Secara konsep, transformasi ini juga berkaitan langsung dengan **rendering pipeline**. Posisi, skala, dan rotasi model akan digunakan untuk menghitung transformasi objek ke ruang dunia, lalu ke ruang kamera, dan akhirnya ke ruang layar. Jadi, sebelum proses rasterisasi dan pencahayaan terjadi, transformasi model menentukan di mana model berada, seberapa besar model terlihat, dan ke arah mana model menghadap.

### Inti yang Harus Ditekankan

- Model yang diimpor tetap merupakan bagian dari **Object3D hierarchy**, sehingga dapat ditransformasi menggunakan `position`, `scale`, dan `rotation`.
- `model.position.set(0, 0, 0);` menempatkan model pada titik asal scene.
- `model.scale.setScalar(1.5);` memperbesar model secara seragam menjadi 150% dari ukuran aslinya.
- `model.rotation.y = Math.PI;` memutar model 180 derajat pada sumbu `y`.
- Transformasi pada root model memengaruhi seluruh bagian anak di dalam hierarki model.

### Transisi ke Slide Berikutnya

Setelah model ditempatkan, diperbesar, dan dirotasi sesuai kebutuhan, langkah berikutnya adalah membuat model tersebut berinteraksi dengan pencahayaan scene. Pada slide berikutnya, kita akan membahas bagaimana model impor dapat menghasilkan dan menerima bayangan menggunakan traversal pada hierarki objek.

---

## Slide 032 - Shadow pada Imported Model

### Narasi

Saat model GLTF sudah diimpor dan diposisikan, langkah berikutnya adalah memastikan model tersebut dapat berinteraksi dengan pencahayaan. Dalam grafika komputer, **shadow** bukan hanya efek visual, tetapi bagian dari proses rendering yang menentukan apakah suatu objek menghalangi cahaya dan apakah permukaannya menerima bayangan.

Pada Three.js, dua properti penting adalah `castShadow` dan `receiveShadow`. `castShadow = true` berarti mesh dapat menghasilkan bayangan ke objek lain, sedangkan `receiveShadow = true` berarti mesh dapat menampilkan bayangan yang jatuh di permukaannya.

```javascript
model.traverse(
  child => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  }
);
```

Kode di atas menggunakan `model.traverse()` untuk mengunjungi seluruh anak dari `model`. Karena `model` hasil impor GLTF sering kali bukan satu `Mesh` tunggal, melainkan struktur hierarki yang berisi `Group`, `Node`, dan banyak `Mesh`, kita tidak cukup hanya mengatur satu objek.

Fungsi `child => { ... }` akan dipanggil untuk setiap objek dalam hierarki. Kondisi `if (child.isMesh)` memastikan hanya objek yang benar-benar berupa mesh yang diberi properti bayangan. Objek non-mesh seperti group tidak memiliki `castShadow` atau `receiveShadow` yang relevan untuk rendering geometri.

Dengan traversal ini, setiap mesh di dalam model akan secara konsisten diberi kemampuan menghasilkan dan menerima bayangan. Ini penting karena model GLTF dapat memiliki banyak bagian, misalnya tubuh, kepala, tangan, atau detail kecil, dan masing-masing bagian perlu diatur agar tampilan bayangan tidak tidak konsisten.

Secara pipeline rendering, pengaturan ini membantu tahap pencahayaan dan shadow rendering: mesh yang `castShadow` dapat menjadi sumber bayangan, sedangkan mesh yang `receiveShadow` dapat menampilkan hasil bayangan pada permukaannya. Mahasiswa perlu memahami bahwa impor model hanya membawa geometri dan struktur objek; perilaku visual seperti bayangan masih harus diaktifkan secara eksplisit.

Sebelum lanjut, pastikan mahasiswa paham bahwa `traverse` adalah cara umum untuk memproses seluruh bagian dari objek 3D yang diimpor, terutama ketika struktur model tidak diketahui secara pasti.

### Inti yang Harus Ditekankan

- Model GLTF dapat berisi banyak `Mesh` di dalam hierarki, sehingga pengaturan shadow perlu dilakukan ke seluruh bagian.
- `model.traverse()` digunakan untuk mengunjungi semua anak dari model dan memproses objek yang relevan.
- `child.isMesh` memastikan hanya mesh yang diberi `castShadow` dan `receiveShadow`.
- `castShadow = true` membuat mesh dapat menghasilkan bayangan, sedangkan `receiveShadow = true` membuat mesh dapat menerima bayangan.

### Transisi ke Slide Berikutnya

Setelah model dapat menampilkan bayangan dengan benar, langkah berikutnya adalah melihat bahwa GLTF tidak hanya menyimpan geometri dan transformasi, tetapi juga dapat menyimpan animasi. Pada slide berikutnya, kita akan membahas bagaimana `Animation Clip` tersedia pada `gltf.animations` dan contoh jenis animasi yang dapat dimuat.

---

## Slide 033 - Animation dalam GLTF

### Narasi

Setelah model GLTF berhasil dimuat dan visualnya sudah bisa diberi bayangan, ada satu lapisan informasi penting yang sering ikut tersimpan di dalam file GLTF, yaitu **animation**. Dalam grafika komputer, animation bukan sekadar efek tambahan; ia adalah data perubahan transformasi, pose, atau parameter objek terhadap waktu.

GLTF dapat menyimpan **Animation Clip**. Satu file GLTF bisa memuat lebih dari satu clip, sehingga satu model yang sama dapat memiliki beberapa gerakan berbeda. Contoh clip yang umum adalah:

- `Idle`
- `Walk`
- `Run`
- `Rotate`
- `Open Door`

Setiap clip mewakili rangkaian data animasi yang bisa diputar oleh aplikasi.

Dari sisi program, daftar clip tersebut dapat diakses melalui properti:

```text
gltf.animations
```

Properti ini biasanya berisi kumpulan `AnimationClip`. Artinya, ketika kita memuat model, kita tidak hanya mendapatkan geometri dan material, tetapi juga potensi gerakan yang sudah disiapkan.

Secara konseptual, animasi biasanya mengubah transformasi objek dari waktu ke waktu. Perubahan transformasi tersebut akan memengaruhi posisi objek sebelum proses rendering, sehingga objek dapat tampak bergerak, berputar, atau berubah pose di layar.

Hal penting yang perlu dipahami mahasiswa adalah perbedaan antara **animasi tersimpan** dan **animasi yang sedang diputar**. File GLTF menyimpan apa yang bisa diputar, tetapi untuk mengontrol playback, kecepatan, atau pemilihan clip, kita membutuhkan komponen pemutar. Dalam Three.js, komponen tersebut adalah `AnimationMixer`, yang akan kita bahas pada langkah berikutnya.

Sebelum lanjut, mahasiswa perlu menyadari bahwa `gltf.animations` adalah **data mentah animasi**, bukan sistem playback. Ia memberi tahu kita clip apa saja yang tersedia, tetapi belum menentukan clip mana yang sedang berjalan.

### Inti yang Harus Ditekankan

- GLTF dapat menyimpan **Animation Clip** sebagai bagian dari file model.
- Satu model dapat memiliki beberapa clip, misalnya `Idle`, `Walk`, `Run`, `Rotate`, dan `Open Door`.
- Clip tersedia pada `gltf.animations`.
- `gltf.animations` berisi data animasi, bukan mekanisme playback.
- Untuk memutar animasi, kita akan membutuhkan `AnimationMixer`.

### Transisi ke Slide Berikutnya

Sekarang kita sudah tahu bahwa GLTF menyimpan clip animasi. Langkah berikutnya adalah bagaimana clip tersebut bisa diputar, dikontrol, dan dipilih secara runtime. Untuk itu, kita akan masuk ke `AnimationMixer`.

---

## Slide 034 - AnimationMixer

### Narasi

Setelah model GLTF dimuat, kita biasanya tidak langsung menampilkan animasinya. Yang kita butuhkan adalah objek yang bisa mengatur **clip animasi** pada model tersebut. Di Three.js, peran itu dipegang oleh `THREE.AnimationMixer`.

```javascript
const mixer =
  new THREE.AnimationMixer(
    model
  );
```

Pada potongan kode ini, `model` adalah objek Three.js yang akan dianimasikan. `mixer` dibuat dengan mengaitkan satu model sebagai target animasi. Dengan kata lain, `mixer` bukan clip-nya sendiri, melainkan **pengelola playback** yang tahu model mana yang harus diperbarui saat animasi berjalan.

Peran `AnimationMixer` penting karena animasi GLTF biasanya tidak langsung diputar begitu saja. Kita perlu ada objek yang dapat:

- memilih clip animasi dari `gltf.animations`,
- mengatur apakah clip sedang diputar, dijeda, atau diulang,
- memperbarui transformasi atau properti model pada setiap frame rendering.

Karena itu, `mixer` menjadi jembatan antara data animasi yang tersimpan di file GLTF dan proses rendering yang terus berjalan di aplikasi.

Secara posisi dalam pipeline, animasi biasanya diperbarui sebelum objek dirender ke layar. `mixer` membantu memastikan bahwa posisi, rotasi, skala, atau properti lain yang dianimasikan sudah siap sebelum tahap rendering berikutnya. Untuk slide ini, kita cukup memahami bahwa `mixer` adalah **objek kontrol animasi** yang terikat pada satu model.

Sebelum lanjut, hal yang perlu diingat adalah `mixer` harus dibuat terlebih dahulu. Setelah itu, barulah kita bisa membuat action dari clip animasi dan memutar clip tersebut.

### Inti yang Harus Ditekankan

- `THREE.AnimationMixer` adalah **pengelola playback** animasi untuk sebuah model.
- `mixer` dibuat dengan mengaitkan `model` sebagai target animasi.
- `mixer` bukan clip animasi; clip animasi masih perlu dibuat menjadi action sebelum diputar.
- `mixer` menjadi jembatan antara `gltf.animations` dan proses rendering.

### Transisi ke Slide Berikutnya

Setelah `mixer` tersedia, langkah berikutnya adalah mengambil satu clip dari `gltf.animations`, membuatnya menjadi action, lalu memutar action tersebut.

---

## Slide 035 - Menjalankan Animation Clip

### Narasi

Setelah `AnimationMixer` dibuat pada slide sebelumnya, langkah berikutnya adalah memilih salah satu **animation clip** yang tersedia pada model dan memerintahkan clip tersebut untuk diputar.

```javascript
const action =
  mixer.clipAction(
    gltf.animations[0]
  );

action.play();
```

Pada potongan kode ini, `gltf.animations[0]` merujuk pada **clip animasi pertama** yang terbaca dari file model, misalnya model GLTF. `mixer.clipAction(...)` bukan langsung memutar animasi, tetapi membuat objek **action** yang mewakili satu clip yang sedang dikelola oleh `mixer`.

Objek `action` penting karena menjadi “kendali” untuk satu animasi tertentu. Dengan `action`, kita dapat memulai, menghentikan, mengatur kecepatan, atau mengatur perilaku animasi. Pada contoh ini, `action.play()` digunakan untuk memulai playback clip.

Perlu diperhatikan bahwa satu model dapat memiliki beberapa clip, misalnya `idle`, `walk`, `run`, atau `attack`. Karena itu, `gltf.animations[0]` hanya mengambil clip pertama secara indeks. Jika model memiliki banyak clip, kita perlu memilih clip yang sesuai dengan kebutuhan aplikasi.

Dalam konteks grafika komputer, animation clip berisi data perubahan transformasi, pose, atau parameter objek dari waktu ke waktu. Saat animasi dijalankan, data tersebut akan memengaruhi posisi, rotasi, atau skala objek sebelum objek dirender. Dengan kata lain, animasi membantu objek 3D bergerak secara dinamis dalam scene.

Sebelum lanjut, mahasiswa perlu memahami perbedaan antara **clip** dan **action**: clip adalah data animasi yang tersimpan pada model, sedangkan action adalah representasi playback dari clip tersebut di dalam `AnimationMixer`.

### Inti yang Harus Ditekankan

- `mixer.clipAction(...)` membuat objek **action** untuk satu animation clip.
- `gltf.animations[0]` mengambil **clip pertama** dari model.
- `action.play()` memulai playback animasi.
- Satu model dapat memiliki beberapa clip, sehingga pemilihan clip harus disengaja.
- `action` adalah kendali playback, bukan data animasi mentah.

### Transisi ke Slide Berikutnya

Setelah `action.play()` dipanggil, animasi baru dimulai, tetapi agar animasi benar-benar bergerak setiap frame, `AnimationMixer` perlu di-update secara berkala. Pada slide berikutnya, kita akan melihat bagaimana `mixer.update(delta)` digunakan bersama `clock.getDelta()`.

---

## Slide 036 - Update Animation

### Narasi

Setelah `action.play()` dipanggil, clip animation memang sudah aktif, tetapi model belum otomatis bergerak. Yang membuat animasi maju adalah pemanggilan `mixer.update(delta)` pada setiap frame.

```javascript
const delta =
  clock.getDelta();

mixer.update(
  delta
);
```

`clock.getDelta()` menghasilkan selang waktu sejak frame sebelumnya, biasanya dalam satuan detik. Nilai ini penting karena animasi tidak seharusnya bergantung pada jumlah frame, melainkan pada waktu yang benar-benar berlalu. Jika frame rate 60 fps, `delta` kecil; jika 30 fps, `delta` lebih besar, sehingga `mixer` dapat menggeser progres animasi dengan laju yang tetap.

Dalam alur render loop, urutannya biasanya:

1. Ambil `delta` dari `clock`.
2. Update `mixer` dengan `delta`.
3. Render scene ke kamera.

Dengan urutan ini, posisi, rotasi, atau scale objek yang dikendalikan oleh animation clip sudah diperbarui sebelum frame baru digambar. Jika `mixer.update(delta)` tidak dipanggil, `action.play()` hanya menandai clip sebagai aktif, tetapi tidak ada interpolasi keyframe yang dijalankan.

Poin yang perlu dipahami mahasiswa adalah bahwa `AnimationMixer` bekerja seperti pengatur waktu animasi. Ia membaca keyframe, menghitung nilai properti pada waktu tertentu, lalu menerapkannya ke objek. Karena itu, update per frame adalah bagian dari pipeline rendering, bukan sekadar tambahan kode.

### Inti yang Harus Ditekankan

- `mixer.update(delta)` harus dipanggil setiap frame agar animasi bergerak.
- `delta` adalah waktu sejak frame terakhir, sehingga animasi tetap konsisten di berbagai frame rate.
- `action.play()` hanya memulai clip; `mixer.update(delta)` yang menggerakkan progres animasi.
- Update mixer biasanya dilakukan dalam render loop sebelum frame baru digambar.

### Transisi ke Slide Berikutnya

Setelah animasi dapat berjalan secara konsisten, kita akan masuk ke masalah lain: bagaimana input 2D dari mouse dapat dihubungkan dengan objek 3D di dunia. Untuk itu, mekanisme berikutnya yang perlu kita lihat adalah raycasting.

---

## Slide 037 - Dari Input 2D ke Object 3D

### Narasi

Ketika mahasiswa menggerakkan mouse atau menyentuh layar, yang kita terima adalah posisi pada **screen coordinate**, misalnya titik pada kanvas dua dimensi. Namun objek dalam Three.js berada di **3D world**, memiliki posisi, orientasi, dan skala dalam ruang tiga dimensi. Karena itu, koordinat layar tidak bisa langsung dipakai untuk menentukan objek mana yang sedang ditunjuk.

Masalahnya adalah perbedaan ruang: layar bersifat dua dimensi, sedangkan scene bersifat tiga dimensi. Kamera menentukan bagaimana dunia 3D diproyeksikan ke layar, sehingga satu titik di layar dapat bersesuaian dengan banyak titik di dunia 3D. Untuk memilih objek, kita perlu mekanisme yang menghubungkan pointer di layar dengan geometri di scene.

Solusinya adalah **Raycasting**. Secara intuitif, raycasting memperlakukan pointer sebagai arah pandang dari kamera. Kita membayangkan sebuah sinar yang berangkat dari kamera, melewati posisi pointer, lalu menembus scene. Objek yang pertama kali bersinggungan dengan sinar itulah yang dianggap sedang ditunjuk.

Pada slide ini, kita cukup memahami bahwa raycasting adalah jembatan antara **input 2D** dan **object 3D**. Detail cara menghitung sinar, menentukan persimpangan, dan memilih objek akan kita bahas lebih lanjut.

### Inti yang Harus Ditekankan

- Mouse menghasilkan **screen coordinate**, sedangkan objek berada di **3D world**.
- Kamera berperan memetakan dunia 3D ke layar, sehingga titik layar tidak langsung sama dengan titik dunia.
- **Raycasting** adalah mekanisme untuk menghubungkan pointer 2D dengan objek 3D di scene.
- Inti konsepnya: pointer di layar diinterpretasikan sebagai arah sinar dari kamera menuju scene.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana raycasting bekerja: bagaimana sinar dikirim dari kamera melalui pointer, dan bagaimana objek yang terkena sinar dapat ditentukan.

---

## Slide 038 - Raycasting

### Narasi

Dalam aplikasi 3D interaktif, kita sering ingin membuat objek bisa diklik, disorot, atau dipilih menggunakan mouse. Masalahnya, pointer mouse berada pada layar 2D, sedangkan objek berada di dalam **3D world**. Karena itu, kita membutuhkan cara untuk menghubungkan posisi pointer dengan objek di ruang tiga dimensi.

Cara yang umum digunakan adalah **raycasting**. Secara sederhana, **raycasting** mengirim sebuah `ray` dari `camera` melalui posisi `pointer` ke dalam `scene`. `Ray` ini bisa dibayangkan sebagai garis imajiner yang berangkat dari kamera, menembus titik di layar tempat pointer berada, lalu masuk ke dunia 3D.

```text
Camera
            \ Ray
             Object
```

Diagram ini dibaca sebagai alur sederhana: `camera` adalah sumber `ray`, garis `Ray` menunjukkan arah ray yang menembus scene, dan `Object` adalah target yang mungkin terkena ray. Jika ray tersebut memotong permukaan suatu objek, maka objek itulah yang dianggap berada di bawah pointer.

Konsep ini penting karena menjadi dasar banyak interaksi dalam grafika komputer, seperti memilih objek, menampilkan efek hover, memindahkan objek, atau membuat antarmuka 3D yang responsif. Tanpa mekanisme seperti raycasting, kita hanya tahu posisi kursor di layar, tetapi tidak tahu objek 3D mana yang sedang ditunjuk.

Perlu kita pahami bahwa `ray` ini bukan sekadar garis di layar, melainkan garis dalam ruang 3D. Arah ray ditentukan oleh posisi `pointer` dan parameter `camera`. Dengan kata lain, raycasting membantu kita menerjemahkan **screen coordinate** menjadi arah di **world coordinate**, sehingga sistem dapat menentukan objek mana yang berinterseksi dengan ray tersebut.

Sebelum lanjut, yang penting dipahami adalah tujuan utama raycasting: bukan sekadar menggambar garis, tetapi menentukan **object yang terkena pointer**. Detail teknis seperti bagaimana pointer dinormalisasi dan bagaimana ray dihitung akan kita lihat pada bagian implementasi.

### Inti yang Harus Ditekankan

- **Raycasting** adalah mekanisme untuk menghubungkan `pointer` 2D dengan `object` 3D.
- `Ray` dikirim dari `camera` melalui posisi `pointer` ke dalam `scene`.
- Tujuan utamanya adalah menentukan `object` yang terkena atau berinterseksi dengan ray.
- Diagram dibaca sebagai: `camera` sebagai sumber, `ray` sebagai arah, dan `object` sebagai target interaksi.

### Transisi ke Slide Berikutnya

Setelah memahami ide dasar raycasting, langkah berikutnya adalah melihat bagaimana konsep ini diimplementasikan menggunakan `THREE.Raycaster`, serta bagaimana posisi `pointer` disimpan dalam bentuk NDC.

---

## Slide 039 - THREE.Raycaster

### Narasi

Setelah kita memahami bahwa **raycasting** adalah cara menentukan objek yang berada di bawah pointer, langkah praktis di Three.js adalah menyiapkan dua objek utama: `raycaster` dan `pointer`.

```javascript
const raycaster =
  new THREE.Raycaster();

const pointer =
  new THREE.Vector2();
```

`raycaster` dibuat dengan `new THREE.Raycaster()`. Objek ini berfungsi sebagai alat yang akan membentuk **ray** dari kamera menuju scene berdasarkan posisi pointer. Dalam praktik, `raycaster` akan digunakan untuk memeriksa apakah ray tersebut mengenai objek yang ada di scene.

`pointer` dibuat dengan `new THREE.Vector2()`. Vektor dua dimensi ini digunakan untuk menyimpan posisi pointer dalam **NDC**, yaitu **Normalized Device Coordinates**. Artinya, posisi pointer tidak disimpan sebagai koordinat pixel mentah, tetapi sebagai koordinat relatif terhadap viewport.

Hal ini penting karena kamera dan scene bekerja dalam ruang 3D, sedangkan pointer berada di layar 2D. Agar posisi pointer dapat dihubungkan dengan kamera, koordinat pointer perlu diubah ke sistem yang konsisten. NDC memberikan sistem tersebut: nilai `x` dan `y` biasanya berada pada rentang `-1` sampai `+1`.

Secara visual, kita bisa membayangkannya seperti ini: kamera berada di belakang layar, pointer berada di titik tertentu pada layar, dan `raycaster` akan membuat garis tembak dari kamera melewati titik tersebut ke dalam scene. Jika garis itu mengenai objek, maka objek tersebut dapat dianggap berada di bawah pointer.

Pada tahap ini, kita baru menyiapkan wadah untuk proses tersebut. Nilai `pointer` masih kosong dan belum diisi dari event mouse. Langkah berikutnya adalah mengubah posisi mouse menjadi koordinat NDC.

### Inti yang Harus Ditekankan

- `THREE.Raycaster` adalah objek Three.js yang digunakan untuk melakukan **raycasting** pada scene.
- `pointer` adalah `THREE.Vector2` yang menyimpan posisi pointer dalam **NDC**.
- NDC penting karena posisi pointer harus dinyatakan relatif terhadap viewport, bukan sebagai koordinat pixel mentah.
- Kode pada slide ini merupakan langkah persiapan sebelum posisi mouse dikonversi dan digunakan oleh `raycaster`.

### Transisi ke Slide Berikutnya

Setelah `raycaster` dan `pointer` disiapkan, langkah berikutnya adalah mengisi nilai `pointer` dari posisi mouse. Pada slide berikutnya, kita akan melihat bagaimana `event.clientX` dan `event.clientY` diubah menjadi koordinat NDC dengan rentang `-1` sampai `+1`.

---

## Slide 040 - Mouse ke NDC

### Narasi

Setelah kita membuat `THREE.Raycaster` dan `pointer`, langkah berikutnya adalah mengisi `pointer` dengan koordinat yang benar. Di sini kita mengubah posisi mouse dari koordinat layar ke **NDC**, yaitu **Normalized Device Coordinates**.

```javascript
pointer.x =
  (event.clientX /
   window.innerWidth)
  * 2 - 1;

pointer.y =
  -(event.clientY /
    window.innerHeight)
  * 2 + 1;
```

Koordinat `event.clientX` dan `event.clientY` masih berada dalam satuan **pixel layar**. Nilai `clientX` biasanya dimulai dari sisi kiri layar, sedangkan `clientY` dimulai dari sisi atas layar. Namun, dalam ruang NDC, sumbu `x` dan `y` memiliki rentang standar:

- `x`: dari `-1` di kiri sampai `+1` di kanan.
- `y`: dari `-1` di bawah sampai `+1` di atas.

Karena arah sumbu `y` pada layar turun ke bawah, sedangkan arah sumbu `y` pada NDC naik ke atas, maka pada baris `pointer.y` kita menggunakan tanda negatif. Dengan begitu, posisi mouse di atas layar akan menghasilkan nilai `pointer.y` yang lebih besar, mendekati `+1`, sedangkan posisi di bawah layar akan mendekati `-1`.

Secara intuisi, kode ini melakukan dua tahap. Pertama, posisi mouse dinormalisasi menjadi rentang `0` sampai `1` dengan membaginya terhadap `window.innerWidth` atau `window.innerHeight`. Kedua, rentang `0` sampai `1` itu digeser dan diskala menjadi rentang `-1` sampai `+1`.

```text
Layar pixel:
x: 0 ------------------ innerWidth
y: 0 ------------------ innerHeight

NDC:
x: -1 ------------------ +1
y: +1 ------------------ -1
```

Langkah ini penting karena `THREE.Raycaster` tidak bekerja langsung dengan koordinat pixel. Ia membutuhkan titik dalam ruang NDC agar bisa dipetakan ke arah kamera dan kemudian menjadi garis ray ke dalam scene 3D.

Jadi, setelah event mouse terjadi, `pointer.x` dan `pointer.y` sudah berisi posisi mouse dalam ruang standar yang bisa digunakan oleh kamera dan raycaster.

### Inti yang Harus Ditekankan

- `pointer` harus berisi koordinat **NDC**, bukan koordinat pixel layar.
- Rentang NDC untuk `x` dan `y` adalah `-1 → +1`.
- `event.clientX` dan `event.clientY` berasal dari layar, dengan `y` turun ke bawah.
- Kode mengubah posisi layar ke NDC dengan normalisasi dan pembalikan sumbu `y`.
- Hasil `pointer` ini akan menjadi input penting untuk membentuk ray pada langkah berikutnya.

### Transisi ke Slide Berikutnya

Dengan `pointer` yang sudah berada dalam NDC, langkah berikutnya adalah membentuk ray dari kamera melalui titik tersebut menggunakan `raycaster.setFromCamera(pointer, camera)`.

---

## Slide 041 - Membentuk Ray

### Narasi

Setelah koordinat mouse dinormalisasi menjadi `pointer` dalam rentang NDC, langkah berikutnya adalah mengubah titik 2D tersebut menjadi **ray** di ruang 3D. Dalam Three.js, hal ini dilakukan dengan satu pemanggilan:

```javascript
raycaster.setFromCamera(
  pointer,
  camera
);
```

Fungsi `raycaster.setFromCamera` menerima dua input utama: `pointer` yang berisi koordinat NDC, dan `camera` yang mendefinisikan posisi serta orientasi kamera. Dari data tersebut, Three.js membentuk sebuah garis imajiner yang berawal dari kamera dan menembus titik layar yang dipilih pengguna.

Secara intuitif, `pointer.x` dan `pointer.y` menentukan arah horizontal dan vertikal ray relatif terhadap bidang pandang kamera. Nilai `-1` sampai `+1` tidak lagi mewakili piksel, melainkan posisi normal pada **normalized device coordinates**. Karena itu, ray yang terbentuk bergantung pada parameter kamera, misalnya `fov`, `aspect`, dan posisi kamera. Jika kamera bergeser atau zoom, arah ray untuk `pointer` yang sama dapat berubah.

Penting untuk dipahami bahwa pada tahap ini kita belum mengecek apakah ray mengenai objek atau tidak. `setFromCamera` hanya menyiapkan representasi ray, yaitu asal dan arah. Setelah ray terbentuk, barulah langkah berikutnya melakukan **intersection test** terhadap objek-objek dalam scene.

Dengan kata lain, alurnya adalah: koordinat mouse → NDC → ray dari kamera → tes tabrakan dengan objek. Slide ini berada tepat di tahap pembentukan ray, sehingga mahasiswa perlu memastikan `pointer` sudah benar dan `camera` yang dipakai adalah kamera aktif yang sedang dirender.

### Inti yang Harus Ditekankan

- `raycaster.setFromCamera(pointer, camera)` mengubah koordinat NDC menjadi **ray** di ruang 3D.
- Ray berawal dari kamera dan arahnya ditentukan oleh `pointer.x` serta `pointer.y`.
- Hasil pembentukan ray sangat bergantung pada posisi, orientasi, dan parameter `camera`.
- Slide ini belum melakukan deteksi tabrakan; tahap berikutnya adalah `raycaster.intersectObjects`.

### Transisi ke Slide Berikutnya

Setelah ray terbentuk, langkah selanjutnya adalah mengecek apakah ray tersebut mengenai objek di scene. Pada slide berikutnya, kita akan melihat cara melakukan **intersection test** menggunakan `raycaster.intersectObjects`.

---

## Slide 042 - Intersection Test

### Narasi

Setelah pada slide sebelumnya kita membentuk **ray** dari posisi pointer dan kamera, langkah berikutnya adalah menanyakan apakah ray tersebut mengenai objek di scene. Dalam Three.js, pertanyaan itu dijawab oleh fungsi `raycaster.intersectObjects()`.

```javascript
const hits =
  raycaster.intersectObjects(
    objects,
    true
  );
```

Fungsi ini menerima dua argumen penting. Argumen pertama, `objects`, adalah kumpulan objek yang akan diuji. Argumen kedua, `true`, berarti pengujian dilakukan secara **recursive**, sehingga objek yang berada di dalam grup atau hierarki anak juga ikut diperiksa.

Hasil dari fungsi ini disimpan pada variabel `hits`. Secara konseptual, `hits` berisi daftar titik temu antara ray dan objek. Jika `hits.length > 0`, artinya ray mengenai setidaknya satu objek. Jika `hits.length === 0`, artinya ray melewati semua objek yang diuji tanpa mengenai apa pun.

Penting untuk dipahami bahwa **intersection test** bukan tahap rendering yang menghasilkan gambar, melainkan proses **query interaksi**. Ia menggunakan kamera dan pointer yang sama dengan tampilan layar, tetapi tujuannya adalah menentukan objek mana yang berada di bawah kursor. Karena itu, proses ini sangat berguna untuk interaksi seperti memilih objek, hover, klik, atau highlight.

Sebelum lanjut, mahasiswa perlu memahami bahwa `raycaster` sudah memiliki arah dan asal ray dari `setFromCamera()`, lalu `intersectObjects()` hanya melakukan pengujian terhadap geometri objek. Nilai `true` pada parameter kedua sering menjadi sumber kesalahan jika objek berada di dalam grup, karena tanpa recursive, anak objek mungkin tidak diperiksa.

### Inti yang Harus Ditekankan

- `raycaster.intersectObjects(objects, true)` menguji apakah ray mengenai objek dalam `objects`.
- Parameter `true` berarti pengujian dilakukan secara **recursive** terhadap hierarki objek.
- `hits.length > 0` menandakan ada objek yang terkena ray.
- Intersection test adalah dasar interaksi pointer, bukan tahap rendering visual.

### Transisi ke Slide Berikutnya

Jika ray berhasil mengenai objek, langkah berikutnya adalah memberi umpan balik visual. Pada slide berikutnya, kita akan melihat bagaimana hasil hit ini digunakan untuk **hover interaction**, misalnya dengan mengubah warna, emissive, scale, atau efek outline-like.

---

## Slide 043 - Hover Interaction

### Narasi

Setelah kita memahami cara `raycaster` menemukan objek yang terkena sinar, langkah berikutnya adalah memberi respons ketika pointer berada di atas objek. Respons ini disebut **hover interaction**, yaitu umpan balik visual yang muncul sementara saat pengguna mengarahkan pointer ke suatu objek 3D.

Alurnya cukup sederhana dan dapat dibaca dari atas ke bawah:

1. **Pointer bergerak**  
   Pengguna menggerakkan mouse, sentuhan, atau pointer lain di atas kanvas.

2. **Raycast**  
   Sistem melontarkan sinar dari kamera melewati posisi pointer untuk mencari objek yang berada di jalur tersebut.

3. **Object hit**  
   Jika sinar mengenai objek, objek tersebut dianggap sedang di-hover.

4. **Highlight**  
   Objek diberi penanda visual agar pengguna tahu bahwa objek itu dapat diinteraksi.

Penting untuk dipahami bahwa hover bukan perubahan permanen. Ia hanya memberi sinyal sementara: “objek ini sedang ditunjuk”. Karena itu, efek highlight biasanya harus bisa dikembalikan ke kondisi awal ketika pointer keluar dari objek.

Dalam konteks rendering, highlight biasanya dilakukan dengan mengubah properti visual objek sebelum frame berikutnya digambar. Misalnya, kita dapat mengubah `color`, `emissive`, `scale`, atau memberi efek yang menyerupai outline. Perubahan ini membuat objek terlihat lebih menonjol tanpa harus mengubah geometri secara besar-besaran.

Beberapa pilihan feedback yang umum digunakan:

- **Color**  
  Mengubah warna material objek agar terlihat berbeda dari objek lain.

- **Emissive**  
  Membuat objek tampak “menyala” atau lebih terang, sehingga lebih mudah dikenali.

- **Scale**  
  Memperbesar objek sedikit sebagai penanda bahwa objek sedang aktif.

- **Outline-like effect**  
  Memberi kesan garis tepi atau penekanan visual, meskipun implementasinya bisa bervariasi.

Intinya, hover interaction membuat aplikasi 3D terasa lebih hidup dan responsif. Pengguna tidak perlu menebak objek mana yang bisa diklik, karena sistem sudah memberi umpan balik langsung.

### Inti yang Harus Ditekankan

- **Hover interaction** adalah feedback visual sementara saat pointer berada di atas objek.
- Alur utamanya adalah: **pointer bergerak → raycast → object hit → highlight**.
- Highlight dapat menggunakan **color**, **emissive**, **scale**, atau **outline-like effect**.
- Efek hover sebaiknya mudah dikenali, tidak berlebihan, dan bisa dikembalikan saat pointer keluar.

### Transisi ke Slide Berikutnya

Jika hover hanya memberi tahu bahwa objek sedang ditunjuk, maka langkah berikutnya adalah memberi makna ketika pengguna benar-benar memilih objek. Di slide berikutnya, kita akan membahas **click interaction**, yaitu interaksi yang mengubah state objek setelah pengguna melakukan klik.

---

## Slide 044 - Click Interaction

### Narasi

Setelah **hover** memberi umpan balik sementara saat pointer berada di atas objek, interaksi berikutnya yang lebih penting adalah **click**. Click biasanya menandakan bahwa pengguna tidak hanya “melihat” atau “menunjuk” objek, tetapi ingin memilih objek tersebut untuk tindakan tertentu.

Alur interaksi click pada slide ini dapat dibaca dari atas ke bawah sebagai sebuah pipeline sederhana:

1. **Click** terjadi pada pointer, misalnya mouse atau sentuhan layar.
2. Sistem melakukan **raycast** dari kamera melalui posisi pointer ke dalam scene 3D.
3. Objek yang terkena raycast dipilih sebagai objek terpilih.
4. State objek diubah, misalnya ditandai sebagai objek yang sedang aktif.
5. Sistem memberi **visual feedback** atau **UI feedback** kepada pengguna.

Inti dari alur ini adalah bahwa click tidak langsung “mengubah objek” secara sembarangan. Click harus diterjemahkan terlebih dahulu ke dalam ruang 3D. Karena layar bersifat 2D, sedangkan scene bersifat 3D, kita membutuhkan proses raycast untuk mengetahui objek mana yang sebenarnya berada di bawah posisi pointer.

Raycast bekerja dengan membuat garis imajiner dari kamera melewati posisi pointer, lalu memeriksa garis tersebut terhadap objek-objek di scene. Objek yang pertama kali terkena, atau objek yang memenuhi syarat tertentu, dapat dijadikan objek terpilih. Di sinilah hubungan antara input pengguna, kamera, dan geometri 3D menjadi penting.

Perbedaan utama antara hover dan click terletak pada sifat interaksinya. Hover bersifat sementara: objek hanya diberi efek selama pointer berada di atasnya. Click biasanya bersifat lebih permanen: objek terpilih dapat tetap berada dalam state terpilih sampai pengguna memilih objek lain atau membatalkan pilihan.

Karena click mengubah state, maka feedback visual menjadi sangat penting. Feedback bisa berupa perubahan warna, emissive, scale, outline-like effect, atau tampilan panel informasi di sisi layar. Tujuannya bukan hanya estetika, tetapi memberi tahu pengguna bahwa sistem telah menerima pilihan dan objek mana yang sedang aktif.

Sebelum lanjut, hal yang perlu dipahami adalah bahwa interaksi click dalam aplikasi 3D real-time selalu melibatkan beberapa lapisan: input pointer, raycast, pemilihan objek, state, dan feedback. Tanpa salah satu lapisan ini, interaksi akan terasa tidak jelas atau tidak responsif.

### Inti yang Harus Ditekankan

- **Click** menandakan keputusan pengguna untuk memilih objek, bukan sekadar menunjuk sementara seperti hover.
- Alur utamanya adalah: **click → raycast → select object → change state → visual/UI feedback**.
- **Raycast** penting karena menerjemahkan posisi pointer 2D menjadi objek 3D yang berada di bawah pointer.
- State pemilihan harus jelas agar sistem tahu objek mana yang sedang aktif.
- Feedback visual atau UI diperlukan agar pengguna memahami bahwa objek telah terpilih.

### Transisi ke Slide Berikutnya

Setelah kita memahami alur click dari input hingga feedback, langkah berikutnya adalah melihat bagaimana state pemilihan itu disimpan dan dikelola, yaitu pada **Selection State**.

---

## Slide 045 - Selection State

### Narasi

Setelah proses `Click` dan `Raycast` pada slide sebelumnya, langkah berikutnya adalah menentukan **apa yang terjadi setelah sebuah objek terpilih**. Di sinilah konsep **Selection State** menjadi penting.

```javascript
let selectedObject =
  null;
```

Variabel `selectedObject` berfungsi sebagai **penyimpan status objek terpilih**. Nilai awalnya `null` karena pada awal aplikasi belum ada objek yang dipilih. Ketika pengguna mengklik objek dan sistem berhasil menemukan objek tersebut, variabel ini dapat diisi dengan referensi objek yang terpilih.

Mengapa state ini dibutuhkan? Karena interaksi tidak cukup hanya berupa aksi sesaat. Jika kita hanya mengubah warna objek pada saat klik, tetapi tidak menyimpan objeknya, aplikasi tidak akan tahu objek mana yang sedang aktif pada frame berikutnya. Akibatnya, highlight, label nama, atau panel informasi bisa menjadi tidak konsisten.

Saat object dipilih, alurnya dapat dipahami sebagai berikut:

1. Simpan objek terpilih ke dalam `selectedObject`.
2. Tampilkan **highlight** pada objek tersebut.
3. Tampilkan **nama** objek, misalnya di panel samping atau tooltip.
4. **Update UI** agar informasi yang ditampilkan sesuai dengan objek aktif.

Secara konsep, `selectedObject` menjadi **sumber kebenaran** untuk tampilan interaktif. Jika nilainya `null`, berarti tidak ada objek terpilih. Jika nilainya merujuk ke sebuah objek, maka highlight dan UI harus mengikuti objek itu. Pola ini penting dalam aplikasi 3D interaktif karena rendering berjalan terus-menerus, dan tampilan visual harus selalu mencerminkan state terbaru.

Pada level rendering, state ini tidak mengubah geometri secara permanen, tetapi memengaruhi bagaimana objek ditampilkan pada frame berikutnya, misalnya melalui perubahan material, warna, outline, atau elemen antarmuka. Dengan kata lain, interaksi pengguna diterjemahkan menjadi state, lalu state tersebut diterjemahkan kembali menjadi visual feedback.

Sebelum lanjut, mahasiswa perlu memahami bahwa **interaction membutuhkan state**. Tanpa state, aplikasi hanya bereaksi sesaat dan tidak mampu mempertahankan informasi objek terpilih.

### Inti yang Harus Ditekankan

- `selectedObject` adalah variabel state untuk menyimpan objek yang sedang dipilih.
- Nilai awal `null` menunjukkan bahwa belum ada objek terpilih.
- Saat objek dipilih, aplikasi harus menyimpan objek, menampilkan highlight, menampilkan nama, dan memperbarui UI.
- State penting agar visual feedback dan informasi UI tetap konsisten dari frame ke frame.

### Transisi ke Slide Berikutnya

Setelah objek dapat dipilih dan statusnya ditampilkan, langkah berikutnya adalah meningkatkan kualitas visual scene. Pada slide berikutnya, kita akan membahas **Environment Map**, yaitu representasi lingkungan sekitar scene yang dapat digunakan untuk background, reflection, dan image-based lighting, terutama pada material PBR.

---

## Slide 046 - Environment Map

### Narasi

Dalam scene 3D, objek tidak pernah benar-benar berdiri sendiri; ia berada di suatu lingkungan. **Environment map** adalah cara kita merepresentasikan lingkungan sekitar scene tersebut, sehingga objek dapat bereaksi terhadap “dunia” di sekitarnya.

Secara intuitif, bayangkan sebuah bola logam atau kaca di dalam ruangan. Warna dan kilau yang kita lihat tidak hanya ditentukan oleh material objek, tetapi juga oleh apa yang ada di sekelilingnya: langit, dinding, lampu, atau pemandangan. Environment map menyediakan informasi lingkungan itu untuk proses rendering.

Environment map dapat digunakan untuk beberapa hal penting:

- **background**, yaitu tampilan visual di belakang scene;
- **reflection**, yaitu pantulan lingkungan pada permukaan material;
- **image-based lighting**, yaitu pencahayaan yang diambil dari gambar lingkungan untuk memperkirakan cahaya sekitar.

Poin terakhir sangat penting dalam grafika komputer modern, terutama untuk material **PBR**. Material PBR dirancang agar responsnya terhadap cahaya lebih realistis. Tanpa informasi lingkungan, material hanya bisa bergantung pada beberapa sumber cahaya eksplisit. Dengan environment map, material dapat “melihat” cahaya yang datang dari berbagai arah, sehingga hasil pencahayaan dan refleksi menjadi lebih natural.

Dalam konteks rendering pipeline, environment map biasanya berperan pada tahap shading material. Setelah posisi objek dan kamera diketahui, shader dapat menggunakan informasi lingkungan untuk menghitung warna akhir permukaan, misalnya seberapa banyak lingkungan dipantulkan atau bagaimana cahaya lingkungan memengaruhi material.

Yang perlu kita pahami sejak awal adalah bahwa environment map bukan sekadar gambar latar belakang. Ia dapat memengaruhi tampilan material secara langsung. Karena itu, meskipun secara visual terlihat seperti “latar”, perannya dalam rendering bisa jauh lebih besar dari sekadar estetika.

### Inti yang Harus Ditekankan

- **Environment map** merepresentasikan lingkungan sekitar scene.
- Ia digunakan untuk **background**, **reflection**, dan **image-based lighting**.
- Environment map sangat berguna untuk material **PBR** karena membantu material bereaksi terhadap cahaya lingkungan secara lebih realistis.
- Environment map bukan hanya latar visual; ia dapat memengaruhi shading dan pencahayaan objek.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan membedakan dua peran penting environment map dalam Three.js: apa yang menjadi `scene.background` dan apa yang menjadi `scene.environment`.

---

## Slide 047 - Background vs Environment

### Narasi

Setelah kita memahami bahwa environment map merepresentasikan lingkungan sekitar scene, ada satu perbedaan penting yang sering tertukar: `scene.background` dan `scene.environment`. Keduanya memang bisa diisi dengan environment texture yang sama, tetapi perannya berbeda.

`scene.background` adalah apa yang terlihat di belakang scene ketika kamera melihat ke arah yang tidak tertutup objek. Secara sederhana, ini adalah latar visual. Jika kita menyetel `scene.background` dengan texture, maka area kosong di belakang objek akan menampilkan texture tersebut.

```js
scene.background = envTexture;
```

Sementara itu, `scene.environment` tidak selalu terlihat langsung oleh mata. Ia digunakan oleh material, terutama material PBR, untuk mendapatkan informasi refleksi dan image-based lighting. Artinya, texture environment membantu permukaan objek tampak memantulkan lingkungan dan menerima pencahayaan yang lebih realistis.

```js
scene.environment = envTexture;
```

Perbedaan utamanya bisa dilihat dari posisi pengaruhnya dalam rendering. `scene.background` memengaruhi tampilan akhir di area kosong, sedangkan `scene.environment` memengaruhi shading material pada objek. Jadi, satu scene bisa memiliki background yang sederhana tetapi environment yang kaya, atau sebaliknya.

Keduanya dapat menggunakan environment texture yang sama. Jika kita memakai texture yang sama, hasil visualnya akan lebih konsisten: latar belakang dan refleksi pada material berasal dari lingkungan yang sama. Namun, secara teknis, keduanya tetap properti yang berbeda dan bisa diatur secara terpisah.

Sebelum lanjut ke praktikum, mahasiswa perlu memastikan tidak mencampuradukkan keduanya. `scene.background` menjawab pertanyaan "apa yang terlihat di belakang scene?", sedangkan `scene.environment` menjawab pertanyaan "bagaimana material objek bereaksi terhadap lingkungan untuk refleksi dan pencahayaan?".

### Inti yang Harus Ditekankan

- `scene.background` adalah latar visual yang terlihat di belakang scene.
- `scene.environment` digunakan material untuk refleksi dan image-based lighting.
- Keduanya dapat memakai environment texture yang sama, tetapi perannya berbeda.
- `scene.background` memengaruhi tampilan area kosong, sedangkan `scene.environment` memengaruhi shading material.

### Transisi ke Slide Berikutnya

Dengan memahami perbedaan ini, kita bisa menyiapkan scene yang tidak hanya terlihat bagus dari kamera, tetapi juga memiliki material yang bereaksi secara realistis terhadap lingkungan. Selanjutnya, kita akan masuk ke praktikum prototype persiapan UTS, di mana mahasiswa akan membangun interactive 3D scene dengan beberapa komponen penting, termasuk environment map.

---

## Slide 048 - Praktikum: Prototype Persiapan UTS

### Narasi

Pada tahap ini, kita tidak lagi membahas satu konsep secara terpisah, tetapi mulai merangkai beberapa komponen menjadi **interactive 3D scene** yang bisa dijalankan. Tujuannya adalah membuat **prototype awal Interactive Web 3D Project** yang sudah cukup lengkap untuk menjadi dasar penilaian UTS.

Secara sederhana, prototype ini harus menunjukkan bahwa mahasiswa mampu mengelola scene secara terstruktur, memuat aset 3D, menampilkan material yang realistis, menggerakkan objek, dan merespons interaksi pengguna. Karena itu, daftar komponen berikut menjadi acuan utama:

- **Hierarchy parent-child**: objek tidak berdiri sendiri, tetapi memiliki struktur parent-child agar transformasi dapat diwariskan.
- **Minimal satu model GLB**: aset 3D dimuat dalam format `GLB` agar geometri, material, dan animasi dapat tersedia dalam satu file.
- **PBR material**: material menggunakan pendekatan **PBR** sehingga respons cahaya dan refleksi lebih konsisten.
- **Shadow**: pencahayaan menghasilkan bayangan agar objek memiliki hubungan spasial dengan lingkungan.
- **Minimal satu animation clip**: model memiliki animasi yang dapat dijalankan, misalnya melalui `AnimationMixer`.
- **Raycasting**: sistem deteksi objek berdasarkan posisi kursor terhadap objek 3D.
- **Hover interaction**: objek memberikan umpan balik saat kursor berada di atasnya.
- **Click interaction**: objek memberikan respons ketika diklik.
- **Environment map**: lingkungan digunakan untuk membantu refleksi dan pencahayaan material.

Dalam praktik, alur pembangunannya dapat dibaca dari struktur scene menuju interaksi:

1. Siapkan scene, kamera, dan pencahayaan dasar.
2. Muat model `GLB` dan tempatkan dalam hierarchy parent-child.
3. Pastikan material **PBR**, shadow, dan environment map aktif.
4. Jalankan minimal satu animation clip.
5. Tambahkan raycasting untuk hover dan click.

Urutan ini penting karena interaksi hanya bermakna jika objek sudah berada di scene, terlihat dengan material yang benar, dan memiliki perilaku animasi yang stabil.

Yang perlu ditekankan, prototype ini bukan sekadar menampilkan model. Mahasiswa harus menunjukkan bahwa setiap komponen saling terhubung: hierarchy memengaruhi posisi objek, material memengaruhi tampilan, shadow dan environment memengaruhi pencahayaan, animation membuat objek hidup, dan raycasting membuat pengguna dapat berinteraksi. Jika salah satu komponen hilang, scene mungkin tetap tampil, tetapi belum memenuhi target prototype.

Sebelum lanjut ke ringkasan, mahasiswa perlu memastikan bahwa prototype sudah dapat dijalankan secara konsisten: model tampil, animasi berjalan, interaksi hover dan click terdeteksi, serta pencahayaan dan environment map terlihat jelas.

### Inti yang Harus Ditekankan

- Prototype UTS adalah integrasi dari **scene graph**, aset `GLB`, material **PBR**, shadow, animasi, raycasting, interaksi, dan environment map.
- **Hierarchy parent-child** penting karena transformasi objek anak mengikuti objek parent.
- **Raycasting** adalah dasar deteksi hover dan click pada objek 3D.
- **Environment map** membantu material PBR menampilkan refleksi dan pencahayaan yang lebih realistis.
- Target akhir bukan hanya model tampil, tetapi scene sudah interaktif dan siap dikembangkan menjadi **Interactive Web 3D Project**.

### Transisi ke Slide Berikutnya

Setelah prototype ini dirangkai, kita akan melihat kembali seluruh alur konsep dari scene graph hingga interactive 3D application pada ringkasan pertemuan.

---

## Slide 049 - Ringkasan Pertemuan

### Narasi

Pertemuan ini ditutup dengan satu alur utama yang menjadi benang merah prototype UTS: membangun **interactive 3D application** dari struktur scene hingga interaksi pengguna.

```text
Scene Graph
    ↓
Hierarchy
    ↓
GLTF / GLB Asset
    ↓
PBR Material
    ↓
AnimationMixer
    ↓
Raycasting
    ↓
Interaction
    ↓
Environment
    ↓
Interactive 3D Application
```

Alur tersebut dapat dibaca dari atas ke bawah sebagai tahapan pembangunan scene:

1. **Scene Graph** menjadi struktur dasar yang menyimpan objek-objek 3D dan hubungan antarobjek.
2. **Hierarchy** menjelaskan hubungan parent-child, sehingga transformasi pada parent dapat memengaruhi child secara konsisten.
3. **GLTF / GLB Asset** membawa model 3D, geometri, material, dan data animasi ke dalam aplikasi.
4. **PBR Material** menentukan bagaimana permukaan objek bereaksi terhadap cahaya, sehingga tampilan menjadi lebih realistis.
5. `AnimationMixer` digunakan untuk menjalankan animasi clip yang ada pada asset.
6. **Raycasting** menerjemahkan posisi input pengguna, misalnya kursor, ke objek 3D di dalam scene.
7. **Interaction** mengubah perilaku objek berdasarkan hasil raycasting, seperti hover atau click.
8. **Environment** memberikan konteks pencahayaan dan refleksi, terutama melalui **environment map**.
9. **Interactive 3D Application** adalah hasil akhir dari seluruh komponen tersebut yang dapat ditampilkan dan diinteraksikan.

Secara keseluruhan, rangkaian ini menunjukkan bahwa aplikasi 3D interaktif tidak hanya soal menampilkan model, tetapi juga mengatur transformasi, material, animasi, input, dan lingkungan secara konsisten sebelum objek melewati rendering pipeline menuju layar.

### Inti yang Harus Ditekankan

- **Scene Graph** dan **hierarchy** adalah dasar organisasi objek 3D, terutama untuk transformasi parent-child.
- **GLTF / GLB** adalah format asset yang membawa model, material, dan animasi ke dalam aplikasi.
- **PBR material** dan **environment map** sangat penting untuk menghasilkan pencahayaan dan refleksi yang lebih realistis.
- `AnimationMixer` menjadi komponen utama untuk menjalankan animasi dari asset.
- **Raycasting** dan **interaction** menghubungkan input pengguna dengan objek 3D, sehingga scene menjadi interaktif.

### Transisi ke Slide Berikutnya

Dengan ringkasan ini, mahasiswa dapat melihat benang merah dari seluruh komponen prototype yang akan dikerjakan. Selanjutnya kita menutup pertemuan dan mengarahkan fokus ke persiapan **UTS — Interactive Web 3D Project**.

---

## Slide 050 - TERIMA KASIH

### Narasi

Terima kasih atas partisipasi dan perhatian selama pertemuan ini. Kita telah menyusuri alur utama pembuatan **Interactive 3D Application** dengan `Three.js`, mulai dari **Scene Graph**, hierarki objek, aset **GLTF/GLB**, material **PBR**, animasi melalui `AnimationMixer`, interaksi lewat **raycasting**, hingga lingkungan visual yang mendukung pengalaman pengguna.

Penting untuk melihat bahwa semua komponen tersebut tidak berdiri sendiri. **Scene Graph** menjadi struktur organisasi objek, transformasi parent-child menjaga konsistensi posisi, **PBR Material** membantu pencahayaan menjadi lebih realistis, dan **raycasting** menjadi jembatan antara input pengguna dengan objek 3D. Dengan memahami hubungan ini, mahasiswa tidak hanya tahu cara memanggil API, tetapi juga memahami bagaimana sebuah adegan 3D dibangun, dianimasikan, dan dibuat interaktif.

Sebagai penutup, saya ingin mengingatkan bahwa materi berikutnya adalah **UTS — Interactive Web 3D Project**. Proyek ini menjadi kesempatan untuk mengintegrasikan konsep yang sudah dibahas: membangun scene, memuat aset, mengatur kamera, material, animasi, dan interaksi sederhana. Saya sarankan mahasiswa mulai merancang struktur proyek, menyiapkan aset yang ringan, dan memastikan alur `scene`, `camera`, `renderer`, `animation loop`, serta event listener sudah jelas sebelum implementasi.

### Inti yang Harus Ditekankan

- **Scene Graph** dan hierarki parent-child adalah dasar organisasi objek 3D.
- Aset **GLTF/GLB**, material **PBR**, dan **environment** membantu visualisasi yang lebih realistis dan konsisten.
- `AnimationMixer` dan **raycasting** menjadi kunci untuk membuat objek hidup dan dapat berinteraksi dengan pengguna.
- Proyek UTS menuntut integrasi konsep, bukan hanya penggunaan satu API secara terpisah.

### Transisi ke Slide Berikutnya

Karena slide ini merupakan penutup pertemuan, langkah berikutnya adalah persiapan **UTS — Interactive Web 3D Project**, di mana mahasiswa akan mengimplementasikan konsep `Three.js` yang telah dibahas menjadi aplikasi 3D interaktif yang sederhana namun utuh.
