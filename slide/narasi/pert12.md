# Narasi Grafika Komputer - Pertemuan 12

## Unity 3D & Real-Time Rendering Pipeline

Sumber: markdown/pert12.md

---

## Slide 000 - Cover

### Narasi

Selamat datang pada pertemuan ke-12 mata kuliah `EF234504` **Grafika Komputer**. Pada sesi ini, kita akan membahas **Unity 3D & Real-Time Rendering Pipeline**, yaitu pertemuan antara konsep grafika komputer dan implementasinya dalam game engine modern.

Materi ini disampaikan oleh **Dr. Darlis Herumurti** dari **Departemen Teknik Informatika**. Fokus utamanya adalah melihat bagaimana objek visual, kamera, material, dan shader diproses secara real-time sehingga dapat ditampilkan secara interaktif di layar.

Sebelum masuk ke detail teknis, penting bagi kita untuk memahami bahwa Unity bukan sekadar perangkat lunak visualisasi, tetapi juga lingkungan kerja yang memuat pipeline rendering, struktur scene, dan komponen yang saling terhubung.

### Inti yang Harus Ditekankan

- Pertemuan ini mengaitkan teori **grafika komputer** dengan praktik **real-time rendering** di **Unity 3D**.
- Konsep **rendering pipeline** menjadi benang merah untuk memahami bagaimana scene, kamera, mesh, material, dan shader bekerja bersama.
- **Universal Render Pipeline (URP)** akan menjadi konteks praktis untuk melihat pengelolaan rendering dalam Unity.

### Transisi ke Slide Berikutnya

Dengan posisi topik ini sudah jelas, kita lanjut ke daftar topik pembahasan yang akan menjadi alur pertemuan hari ini.

---

## Slide 001 - Topik Pembahasan

### Narasi

Pada pertemuan ke-12, kita akan melihat bagaimana konsep grafika komputer diterapkan dalam lingkungan kerja nyata, yaitu `Unity` sebagai **real-time 3D engine**. Fokusnya bukan sekadar membuat objek 3D, tetapi memahami bagaimana objek, kamera, material, dan shader bekerja bersama dalam satu **rendering pipeline** yang berjalan setiap frame.

Agenda pertemuan ini disusun sebagai alur kerja: dari memahami engine, struktur project, objek, scene, hingga pipeline rendering. Secara ringkas, kita akan membahas:

1. **Unity 3D dan konsep Game Engine**
2. **Unity Interface dan struktur project**
3. `GameObject`, `Component`, dan `Transform`
4. `Scene`, `Camera`, `Mesh`, `Material`, dan `Shader`
5. Pipeline `Blender` → `Unity`
6. **Real-Time Rendering Pipeline**
7. **Universal Render Pipeline** (`URP`)
8. Praktikum: import asset `Blender` dan membangun scene `URP`

Alur ini penting karena mahasiswa perlu melihat hubungan antara representasi geometri, transformasi, kamera, material, dan rendering. `GameObject` dan `Component` menjadi cara `Unity` menyusun objek, sementara `Scene`, `Camera`, `Mesh`, `Material`, dan `Shader` menentukan apa yang dilihat dan bagaimana objek dirender. Pada tahap akhir, kita kaitkan semua itu dengan `URP` sebagai arsitektur rendering modern di `Unity`.

### Inti yang Harus Ditekankan

- `Unity` adalah **real-time 3D engine** yang mengintegrasikan scene, objek, kamera, material, shader, dan rendering pipeline.
- Struktur objek di `Unity` dibangun dari `GameObject`, `Component`, dan `Transform`, sehingga setiap objek dapat diposisikan, dirotasi, diskalakan, dan diberi perilaku.
- Alur kerja utama pertemuan ini adalah dari asset `Blender` ke scene `Unity`, lalu diproses melalui **Real-Time Rendering Pipeline** dan `URP`.
- Mahasiswa perlu memahami hubungan antarbagian sebelum masuk ke praktikum, karena scene 3D yang benar bergantung pada transformasi, kamera, material, dan pipeline rendering.

### Transisi ke Slide Berikutnya

Setelah peta pembahasan ini jelas, kita lanjut ke capaian pembelajaran pertemuan, yaitu kemampuan konkret yang diharapkan mahasiswa setelah mengikuti materi dan praktikum ini.

---

## Slide 002 - Capaian Pembelajaran Pertemuan

### Narasi

Pada slide ini, kita melihat capaian pembelajaran yang diharapkan setelah pertemuan ini selesai. Tujuannya bukan hanya agar mahasiswa bisa membuka Unity dan mengklik beberapa menu, tetapi agar mahasiswa benar-benar memahami bagaimana sebuah objek 3D yang sebelumnya dibuat di **Blender** dapat masuk ke dalam **Unity** dan kemudian dirender secara **real-time**. Dengan kata lain, pertemuan ini menjadi jembatan antara pembuatan konten 3D dan penggunaan konten tersebut dalam lingkungan interaktif.

Capaian pertama yang perlu diperhatikan adalah kemampuan menjelaskan fungsi **Unity** sebagai **real-time 3D engine**. Unity bukan sekadar program animasi atau pemodelan 3D, melainkan sistem yang mengelola **scene**, **kamera**, **objek**, **material**, **lighting**, dan **rendering pipeline** secara langsung. Karena itu, mahasiswa juga perlu memahami struktur dasar objek di Unity, yaitu **GameObject**, **Component**, dan **Transform**. **GameObject** adalah wadah objek, **Component** adalah bagian yang memberi perilaku atau properti, sedangkan **Transform** mengatur posisi, rotasi, dan skala objek dalam ruang 3D.

Selain itu, mahasiswa diharapkan mampu mengatur **hierarchy** dengan benar, mengimpor asset dari **Blender** tanpa masalah skala atau orientasi, serta menjelaskan tahapan **real-time rendering** pada Unity. Di sini, posisi **Universal Render Pipeline** atau **URP** menjadi penting karena URP menentukan bagaimana scene diproses dan ditampilkan ke layar. Capaian akhirnya adalah mahasiswa mampu membangun **scene 3D sederhana** menggunakan Unity URP, sehingga mereka tidak hanya paham konsepnya, tetapi juga bisa melihat hasil visual dari asset yang sudah diimpor.

### Inti yang Harus Ditekankan

- **Unity** berperan sebagai **real-time 3D engine**, bukan sekadar software modeling.
- Struktur dasar objek di Unity terdiri dari **GameObject**, **Component**, dan **Transform**.
- **Hierarchy** penting untuk mengatur hubungan antarobjek dalam scene.
- Asset dari **Blender** harus diimpor dengan memperhatikan skala, orientasi, dan material.
- **URP** adalah arsitektur rendering yang menentukan bagaimana scene dirender secara real-time.
- Capaian akhir pertemuan ini adalah membangun **scene 3D sederhana** menggunakan **Unity URP**.

### Transisi ke Slide Berikutnya

Untuk memahami mengapa pertemuan ini penting, kita perlu melihat posisi pertemuan ke-12 dalam keseluruhan semester. Pertemuan ini menjadi titik perpindahan dari tahap pembuatan konten 3D di Blender menuju tahap penggunaan konten tersebut dalam lingkungan **real-time 3D graphics** di Unity.

---

## Slide 003 - Posisi Pertemuan 12 dalam Semester

### Narasi

Pada pertemuan ini, kita berada di titik penting dalam alur semester. Diagram di slide menunjukkan urutan dari **P9** hingga **P16**, dan posisi **P12** berada tepat setelah tahap pembuatan konten 3D di `Blender`. Artinya, sebelum masuk ke `Unity`, mahasiswa sudah melewati **Blender Modeling**, **UV + Texturing**, serta **Lighting + Camera + Rendering**.

Secara konseptual, **P12** adalah perpindahan dari **3D Content Creation** menuju **Real-Time 3D Graphics**. Di tahap sebelumnya, fokus utamanya adalah membuat aset: geometri, tekstur, pencahayaan, dan hasil render yang bisa diproses secara offline. Mulai dari **`UNITY 3D + URP`**, fokus bergeser ke bagaimana aset tersebut dimuat, ditampilkan, dan diinteraksikan secara real-time di dalam engine.

Kita dapat membaca diagram ini sebagai pipeline pembelajaran:

1. **P9–P11**: menyiapkan konten 3D di `Blender`.
2. **P12**: memindahkan konten ke `Unity` dan memahami posisi **`URP`** dalam arsitektur rendering.
3. **P13–P15**: memperdalam lighting, material, post-processing, shader graph, VFX, dan optimasi.
4. **P16**: UAS sebagai evaluasi akhir.

Penting untuk dipahami bahwa `Unity` bukan sekadar tempat menampilkan model `Blender`. `Unity` adalah lingkungan real-time di mana transformasi, kamera, material, lighting, dan rendering pipeline bekerja bersama secara interaktif.

### Inti yang Harus Ditekankan

- **P12** adalah transisi dari pembuatan aset 3D ke penggunaan aset dalam real-time engine.
- Tahap `Blender` sebelumnya menghasilkan konten, sedangkan tahap `Unity` menghasilkan pengalaman interaktif.
- **`URP`** menjadi dasar arsitektur rendering yang akan dipakai untuk lighting, material, post-processing, dan shader.

### Transisi ke Slide Berikutnya

Setelah memahami posisi pertemuan ini dalam semester, langkah berikutnya adalah melihat perbedaan peran `Blender` dan `Unity` secara lebih jelas, khususnya bagaimana aset dari `Blender` dipindahkan dan dimanfaatkan di `Unity`.

---

## Slide 004 - Dari Blender ke Unity

### Narasi

Setelah pertemuan sebelumnya kita melihat posisi pertemuan ini dalam semester, sekarang kita perlu membedakan dua lingkungan kerja yang sering dianggap sama: **Blender** dan **Unity**. Keduanya sama-sama bekerja dengan objek 3D, tetapi posisinya dalam alur kerja grafika komputer berbeda. **Blender** lebih berperan sebagai ruang produksi aset, sedangkan **Unity** berperan sebagai ruang eksekusi aplikasi 3D yang berjalan terus-menerus.

Cara membaca slide ini cukup sederhana. Bagian **Blender** dibaca sebagai tahap *content creation*, yaitu tahap di mana kita menyiapkan geometri, tampilan visual, dan animasi. Bagian **Unity** dibaca sebagai tahap *runtime*, yaitu tahap di mana aset-aset tersebut dimuat, ditampilkan, dan dikendalikan oleh program.

Di **Blender**, fokus utamanya adalah membuat aset 3D yang berkualitas. Beberapa aktivitas yang biasanya kita lakukan di sana antara lain:

- `modeling`, yaitu membentuk geometri objek;
- `UV mapping`, yaitu menyiapkan koordinat tekstur pada permukaan mesh;
- `texturing`, yaitu memberi tampilan permukaan;
- `material authoring`, yaitu mengatur sifat material seperti warna, kekasaran, atau reflektivitas;
- `animation`, yaitu membuat pergerakan objek atau karakter;
- `offline rendering`, yaitu menghasilkan gambar atau video dengan proses render yang dapat berlangsung lama demi kualitas visual.

Sementara itu, di **Unity**, fokusnya bergeser dari membuat aset menjadi menjalankan aset tersebut dalam aplikasi. Unity digunakan untuk:

- `real-time rendering`, yaitu menampilkan frame secara terus-menerus;
- `interaction`, yaitu memungkinkan pengguna berinteraksi dengan objek;
- `camera control`, yaitu mengendalikan posisi dan perilaku kamera;
- `physics`, yaitu mensimulasikan perilaku fisik objek;
- `scripting`, yaitu menulis logika aplikasi;
- `lighting real-time`, yaitu pencahayaan yang dihitung saat aplikasi berjalan;
- `shader`, yaitu program yang menentukan cara objek dirender;
- `VFX`, yaitu efek visual seperti partikel atau fenomena visual;
- `aplikasi interaktif`, yaitu produk akhir yang dapat dijalankan oleh pengguna.

Perbedaan ini penting karena menentukan cara kita berpikir tentang kualitas dan waktu. Di **Blender**, satu frame boleh dihitung lama jika tujuannya adalah kualitas visual maksimum. Di **Unity**, frame harus dihasilkan terus-menerus, sehingga setiap keputusan visual, geometri, material, dan pencahayaan harus tetap memungkinkan aplikasi berjalan mulus. Karena itu, aset yang sudah dibuat di Blender biasanya diimpor ke Unity, lalu diproses kembali oleh pipeline rendering real-time yang melibatkan kamera, transformasi, rasterisasi, pencahayaan, dan `shader`.

Sebelum lanjut, hal yang harus kita pegang adalah: **Blender** bukan pengganti **Unity**, dan **Unity** bukan pengganti **Blender**. Mereka adalah dua tahap yang saling melengkapi. **Blender** menyiapkan apa yang akan ditampilkan, sedangkan **Unity** menentukan bagaimana objek tersebut ditampilkan, bergerak, berinteraksi, dan dirender dalam waktu nyata.

### Inti yang Harus Ditekankan

- **Blender** berperan sebagai lingkungan produksi aset 3D: `modeling`, `UV mapping`, `texturing`, `material authoring`, `animation`, dan `offline rendering`.
- **Unity** berperan sebagai lingkungan eksekusi real-time: `real-time rendering`, `interaction`, `camera control`, `physics`, `scripting`, `lighting real-time`, `shader`, `VFX`, dan `aplikasi interaktif`.
- Aset 3D yang dibuat di Blender biasanya diimpor ke Unity, lalu dirender ulang oleh pipeline real-time.
- Perbedaan utama terletak pada tujuan: **Blender** berfokus pada pembuatan aset dan kualitas visual, sedangkan **Unity** berfokus pada aplikasi yang berjalan terus-menerus.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa Blender dan Unity memiliki peran berbeda, langkah berikutnya adalah melihat alasan teknis di balik perbedaan itu: bagaimana `offline rendering` dan `real-time rendering` bekerja dengan batasan waktu yang sangat berbeda.

---

## Slide 005 - Offline Rendering vs Real-Time Rendering

### Narasi

Setelah melihat peran Blender dan Unity, kita perlu memahami perbedaan mendasar antara **offline rendering** dan **real-time rendering**, yaitu **budget waktu** yang tersedia untuk menghasilkan satu frame.

Pada **offline rendering**, satu frame dapat dihitung selama:

```text
detik
menit
bahkan jam
```

Karena tidak ada tekanan interaksi langsung, sistem dapat melakukan perhitungan yang lebih berat, misalnya sampling cahaya yang lebih banyak, efek pencahayaan yang lebih kompleks, atau resolusi internal yang lebih tinggi. Tujuan utamanya adalah **kualitas visual maksimum**, bukan kecepatan respons.

Sebaliknya, **real-time rendering** harus menghasilkan frame secara terus-menerus agar aplikasi terasa hidup dan dapat diinteraksikan. Di sini, setiap frame memiliki batas waktu yang ketat. Contoh target yang umum adalah:

```text
30 FPS → ~33.3 ms/frame
60 FPS → ~16.7 ms/frame
120 FPS → ~8.3 ms/frame
```

Artinya, pada target `60 FPS`, seluruh proses rendering untuk satu frame sebaiknya selesai dalam sekitar `16.7 ms`. Jika proses melebihi batas tersebut, frame berikutnya tertunda, dan pengguna akan merasakan lag atau stutter.

Kita dapat melihatnya dari sisi **rendering pipeline**. Pada setiap frame, sistem tetap harus memproses scene: membaca objek, melakukan transformasi, mengirim data ke GPU, melakukan rasterisasi, mengevaluasi shader, dan menghasilkan gambar. Semua langkah itu harus selesai sebelum frame berikutnya harus ditampilkan.

Karena itu, real-time rendering tidak hanya soal “membuat gambar”, tetapi juga soal **mengelola biaya komputasi**. Kita sering harus memilih antara kualitas visual dan performa: menyederhanakan shader, mengurangi jumlah objek yang dirender, memakai tekstur yang lebih ringan, atau menggunakan pendekatan pencahayaan yang lebih cepat.

Inti yang perlu dipahami sebelum lanjut adalah: **offline rendering mengutamakan hasil akhir, sedangkan real-time rendering mengutamakan konsistensi waktu frame**. Konsep ini menjadi dasar untuk memahami mengapa Unity dan engine real-time lain harus menyeimbangkan kualitas visual dengan batas waktu eksekusi.

### Inti yang Harus Ditekankan

- **Offline rendering** dapat menghabiskan waktu lama per frame demi **kualitas visual maksimum**.
- **Real-time rendering** harus menghasilkan frame secara terus-menerus dalam batas waktu tertentu, misalnya `30 FPS`, `60 FPS`, atau `120 FPS`.
- Setiap frame memiliki **frame budget**, misalnya `~16.7 ms/frame` untuk `60 FPS`; jika terlampaui, aplikasi terasa tidak mulus.
- Real-time rendering menuntut keseimbangan antara **kualitas visual**, **kompleksitas scene**, **shader**, dan **performa GPU**.

### Transisi ke Slide Berikutnya

Setelah memahami perbedaan offline dan real-time rendering, langkah berikutnya adalah melihat platform yang dirancang khusus untuk real-time rendering, yaitu Unity.

---

## Slide 006 - Apa Itu Unity?

### Narasi

Setelah kita melihat bahwa **real-time rendering** menuntut frame dihasilkan dalam waktu sangat terbatas, kita perlu memahami di mana proses itu biasanya dibangun. **Unity** adalah **real-time 3D engine** yang menyediakan sistem terintegrasi untuk membangun aplikasi visual interaktif.

Artinya, Unity bukan hanya alat menggambar 3D. Ia menyediakan lingkungan kerja yang menghubungkan beberapa subsistem penting:

- `scene management` untuk mengatur objek, hierarki, transformasi, dan kamera dalam satu scene;
- `rendering` untuk mengubah scene menjadi gambar yang tampil di layar;
- `material` dan `shader` untuk menentukan warna, tekstur, pencahayaan, dan tampilan permukaan objek;
- `animation` untuk mengubah posisi, rotasi, skala, atau parameter visual dari waktu ke waktu;
- `physics` untuk simulasi gerak, tumbukan, dan interaksi objek;
- `input` untuk membaca aksi pengguna;
- `audio` untuk memutar suara dan efek;
- `UI` untuk menampilkan antarmuka;
- `scripting` untuk menulis logika aplikasi;
- `deployment` untuk membangun aplikasi ke berbagai platform.

Dalam konteks grafika komputer, poin penting adalah Unity menyatukan subsistem yang biasanya harus kita bangun sendiri jika membuat graphics engine dari nol. Misalnya, kita tidak perlu langsung menulis seluruh alur dari transformasi objek, clipping, rasterisasi, hingga pencahayaan, karena Unity menyediakan abstraksi dan pipeline yang sudah terintegrasi.

Namun, kita tetap perlu memahami apa yang terjadi di balik abstraksi tersebut. Ketika sebuah scene dijalankan, Unity membaca objek dan transformasinya, menyiapkan data untuk GPU, menerapkan material dan shader, lalu menghasilkan frame secara real-time. Dengan kata lain, Unity membantu kita mengelola kompleksitas, tetapi konsep dasar rendering pipeline tetap menjadi fondasi yang harus dipahami mahasiswa.

Pada tahap ini, yang perlu kita pegang adalah: Unity adalah **platform real-time 3D** yang menggabungkan scene, rendering, material, shader, animasi, fisika, input, audio, UI, scripting, dan deployment dalam satu ekosistem. Pemahaman ini penting sebelum kita masuk ke struktur internal Unity, karena banyak fitur yang tampak sederhana sebenarnya bergantung pada kerja sama beberapa subsistem tersebut.

### Inti yang Harus Ditekankan

- **Unity** adalah **real-time 3D engine**, bukan sekadar aplikasi visualisasi 3D.
- Unity menyediakan subsistem terintegrasi seperti `scene management`, `rendering`, `material`, `shader`, `animation`, `physics`, `input`, `audio`, `UI`, `scripting`, dan `deployment`.
- Unity memungkinkan developer membangun aplikasi interaktif tanpa harus membuat graphics engine dari nol, tetapi konsep rendering pipeline tetap perlu dipahami.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bahwa Unity tidak bisa disamakan hanya dengan editor. Ada bagian editor untuk menyusun project, dan ada runtime engine yang menjalankan scene serta logika saat aplikasi berjalan.

---

## Slide 007 - Unity Bukan Sekadar Editor

### Narasi

Setelah kita menyebut Unity sebagai **real-time 3D engine**, ada satu hal yang perlu ditegaskan: Unity tidak hanya berfungsi sebagai editor untuk menyusun scene. Dalam praktik pengembangan grafika komputer, Unity lebih tepat dipahami sebagai sistem yang menggabungkan beberapa subsistem sekaligus.

Kita dapat membayangkan Unity sebagai kombinasi berikut:

```text
EDITOR
+
RUNTIME ENGINE
+
RENDERING SYSTEM
+
PHYSICS
+
SCRIPTING
+
ASSET PIPELINE
+
BUILD SYSTEM
```

Secara sederhana, **Editor** adalah lingkungan kerja tempat kita menyusun project: menempatkan objek, mengatur transformasi, memilih material, mengatur kamera, dan menuliskan script. Sementara itu, **Runtime Engine** adalah bagian yang menjalankan scene dan logika aplikasi ketika program benar-benar dijalankan.

Perbedaan ini penting karena banyak masalah dalam grafika komputer muncul dari kekeliruan membedakan antara “apa yang kita lihat saat editing” dan “apa yang terjadi saat aplikasi berjalan”. Beberapa komponen utama dapat kita pahami sebagai berikut:

- **Editor**: ruang kerja untuk membangun scene, mengatur hierarki objek, dan menyiapkan asset.
- **Runtime Engine**: mesin yang mengeksekusi scene, memperbarui objek, dan menjalankan logika setiap frame.
- **Rendering System**: bagian yang mengubah scene menjadi gambar, melibatkan kamera, transformasi, material, shader, dan proses rasterisasi.
- **Physics**: sistem yang menangani gerak, tumbukan, dan perilaku fisika objek.
- **Scripting**: lapisan logika yang memungkinkan kita mengontrol objek, input, animasi, dan perilaku aplikasi.
- **Asset Pipeline**: proses menyiapkan dan memuat asset seperti model 3D, texture, material, dan audio agar dapat digunakan oleh engine.
- **Build System**: mekanisme untuk menghasilkan aplikasi yang dapat dijalankan di platform tertentu.

Dalam konteks grafika komputer, poin yang paling relevan adalah **Rendering System**. Ketika kita berbicara tentang kamera, transformasi, material, atau shader, kita sedang berbicara tentang bagaimana scene diproses menjadi citra pada layar. Namun proses ini tidak berdiri sendiri; ia bergantung pada scene yang disusun di editor, logika yang dijalankan runtime, dan asset yang telah disiapkan oleh asset pipeline.

Sebelum masuk ke antarmuka Unity, mahasiswa perlu memahami bahwa setiap panel yang nanti kita lihat pada dasarnya adalah bagian dari **Editor**. Panel tersebut membantu kita menyiapkan scene, tetapi hasil akhirnya baru benar-benar teruji ketika scene dijalankan oleh **Runtime Engine** dan digambar oleh **Rendering System**.

### Inti yang Harus Ditekankan

- Unity bukan hanya editor, melainkan gabungan **Editor**, **Runtime Engine**, **Rendering System**, **Physics**, **Scripting**, **Asset Pipeline**, dan **Build System**.
- **Editor** digunakan untuk menyusun project, sedangkan **Runtime Engine** menjalankan scene dan logika saat aplikasi dijalankan.
- Untuk grafika komputer, **Rendering System** adalah bagian yang menghubungkan scene, kamera, transformasi, material, shader, dan rasterisasi menjadi gambar yang ditampilkan.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa Unity terdiri dari beberapa subsistem, langkah berikutnya adalah melihat bagaimana **Editor** tersebut disusun dalam antarmuka kerja. Kita akan membahas panel-panel utama Unity dan fungsi masing-masing dalam workflow pengembangan.

---

## Slide 008 - Unity Interface

### Narasi

Setelah memahami bahwa Unity bukan hanya editor, tetapi juga runtime engine, rendering system, dan asset pipeline, langkah berikutnya adalah mengenali ruang kerja dasarnya. Interface Unity dirancang agar kita bisa memisahkan proses **menyusun scene**, **menyunting objek**, **menjalankan aplikasi**, dan **memantau hasil rendering** dalam satu alur kerja yang jelas.

Panel-panel utama yang perlu dikenali adalah:

- **Scene View**: ruang kerja editor untuk melihat dan mengatur objek, kamera, dan elemen scene secara langsung.
- **Game View**: tampilan yang mendekati hasil akhir yang dilihat player, biasanya melalui `Camera` aktif.
- **Hierarchy**: daftar `GameObject` dalam scene, membantu memahami struktur objek dan hubungan antarobjek.
- **Inspector**: panel untuk melihat dan mengubah `Component` pada objek terpilih, seperti transform, material, collider, atau script.
- **Project**: area penyimpanan dan organisasi asset, scene, material, texture, script, dan resource lain.
- **Console**: tempat membaca log, warning, dan error saat editor atau runtime berjalan.
- **Toolbar**: kontrol utama untuk mengoperasikan editor dan scene.

Dalam konteks grafika komputer, panel-panel ini penting karena mereka memisahkan tahap **authoring** dan **runtime**. Saat kita memindahkan objek di Scene View, kita sedang mengubah data transformasi objek. Saat kita melihat Game View, kita mengamati bagaimana kamera, transformasi, dan rendering pipeline menghasilkan gambar yang akhirnya ditampilkan. Dengan kata lain, interface Unity membantu kita memahami bahwa objek 3D tidak langsung menjadi gambar; ia melewati proses penyusunan scene, transformasi, kamera, dan rendering.

Yang perlu dipahami sebelum lanjut adalah perbedaan fungsi antar panel. `Hierarchy` dan `Inspector` bekerja berpasangan: Hierarchy memilih objek, Inspector menampilkan propertinya. `Scene View` dan `Game View` juga berbeda: Scene View adalah ruang kerja editor, sedangkan Game View adalah hasil yang mendekati tampilan player. `Project` menyimpan asset, sementara `Console` membantu debugging ketika scene atau script tidak berjalan seperti yang diharapkan.

Dengan memahami layout ini, kita tidak perlu bingung harus membuka panel mana ketika ingin mengubah objek, mencari asset, menjalankan scene, atau memeriksa error.

### Inti yang Harus Ditekankan

- Interface Unity memisahkan workflow: menyusun scene, menginspeksi objek, mengelola asset, menjalankan aplikasi, dan membaca log.
- **Scene View** adalah ruang kerja editor, sedangkan **Game View** mendekati hasil akhir yang dilihat player.
- `Hierarchy` dan `Inspector` membantu memahami struktur `GameObject` dan `Component` yang memengaruhi transformasi, material, kamera, dan rendering.

### Transisi ke Slide Berikutnya

Setelah mengenali panel utama, kita akan masuk lebih dalam ke **Scene View**, yaitu ruang kerja utama untuk menyusun dan mengatur objek sebelum hasil rendering dilihat di Game View.

---

## Slide 009 - Scene View

### Narasi

Setelah kita melihat panel-panel utama Unity, mari kita fokus pada **Scene View** karena panel ini menjadi ruang kerja utama saat membangun dunia 3D. Di sini, kita tidak sedang melihat hasil akhir aplikasi, melainkan melihat **scene** dari sudut pandang editor. Artinya, semua object yang kita susun, atur posisinya, dan kaitkan satu sama lain terjadi di ruang ini.

Fungsi utama **Scene View** adalah membantu kita mengatur **object** dalam scene. Kita bisa memindahkan object, memutar object, dan mengubah `scale`-nya. Dalam istilah transformasi, ketiga operasi ini berkaitan dengan `position`, `rotation`, dan `scale` yang menentukan bagaimana object berada di ruang 3D. Karena itu, Scene View sangat penting untuk membangun komposisi visual sebelum proses rendering dijalankan.

Selain object, kita juga bisa menempatkan **camera** dan mengatur **environment**. Penempatan camera di Scene View menentukan dari mana scene akan dilihat, tetapi tampilan yang benar-benar dihasilkan oleh camera aktif biasanya baru terlihat pada Game View. Jadi, Scene View memberi kita kontrol atas “apa yang ada di dunia”, sedangkan Game View akan menunjukkan “apa yang terlihat oleh pengguna”.

Perbedaan ini penting untuk dipahami. Jika kita hanya melihat Scene View, kita bisa salah mengira bahwa tampilan editor adalah tampilan final. Padahal, Scene View menampilkan elemen editor yang membantu proses pembuatan scene, dan tidak selalu sama dengan tampilan yang akan dilihat player. Oleh karena itu, sebelum lanjut ke tahap berikutnya, kita perlu membiasakan diri membedakan antara ruang kerja editor dan output rendering.

### Inti yang Harus Ditekankan

- **Scene View** adalah ruang kerja editor untuk menyusun dan mengatur object dalam scene.
- Operasi utama di Scene View berkaitan dengan transformasi object: memindahkan, memutar, dan mengubah `scale`.
- Penempatan **camera** dan pengaturan **environment** dilakukan di Scene View, tetapi tampilan final pengguna tidak sama dengan tampilan Scene View.
- Scene View **bukan** hasil akhir yang dilihat player; ia membantu membangun scene sebelum rendering.

### Transisi ke Slide Berikutnya

Setelah kita memahami bahwa Scene View adalah tempat kita membangun dan mengatur scene, langkah berikutnya adalah melihat bagaimana scene tersebut tampil dari sudut pandang pengguna. Untuk itu, kita akan masuk ke **Game View**, yaitu panel yang menunjukkan output dari camera aktif.

---

## Slide 010 - Game View

### Narasi

`Game View` adalah jendela yang menunjukkan **output visual** dari **camera aktif** dalam scene. Jika `Scene View` adalah ruang kerja editor tempat kita menyusun objek, `Game View` adalah pendekatan yang lebih dekat dengan apa yang akan dilihat pengguna ketika aplikasi dijalankan.

Perbedaan ini penting karena tampilan di `Game View` tidak ditentukan hanya oleh keberadaan objek di scene. Objek bisa ada, tetapi tidak muncul jika berada di luar area yang dilihat kamera, disaring oleh proses rendering, atau tidak memiliki material yang sesuai.

Yang tampil pada `Game View` bergantung pada beberapa faktor utama:

- **`Camera`**: menentukan posisi, orientasi, dan objek mana yang terlihat.
- **`aspect ratio`**: memengaruhi bentuk layar, misalnya 16:9 atau 4:3.
- **`field of view`**: menentukan seberapa lebar sudut pandang kamera.
- **`culling`**: proses menyaring objek yang tidak perlu dirender.
- **`lighting`**: memengaruhi terang, bayangan, dan mood visual.
- **`material`**: menentukan warna, tekstur, dan respons permukaan terhadap cahaya.
- **`render pipeline`**: mengatur urutan proses dari scene ke tampilan akhir.

Dari sisi rendering pipeline, `Game View` dapat dibaca sebagai hasil akhir dari serangkaian tahap: kamera menentukan apa yang terlihat, pipeline memilih objek yang relevan, lighting dan material menentukan tampilan permukaan, lalu hasil rendering ditampilkan sebagai tampilan akhir.

Karena itu, ketika kita melihat sesuatu yang aneh di `Game View`, langkah pertama biasanya bukan langsung mengubah objek, tetapi memeriksa kamera, pengaturan tampilan, material, dan pipeline.

Sebelum lanjut, mahasiswa perlu memahami bahwa `Game View` adalah **hasil rendering**, bukan sekadar daftar objek. Pemahaman ini akan membantu kita membaca masalah visual secara lebih sistematis.

### Inti yang Harus Ditekankan

- `Game View` menampilkan **output dari camera aktif**, bukan seluruh scene secara mentah.
- Tampilan dipengaruhi oleh **`camera`, `aspect ratio`, `field of view`, `culling`, `lighting`, `material`, dan `render pipeline`**.
- `Game View` adalah pendekatan paling dekat dengan **pengalaman visual pengguna** saat aplikasi dijalankan.

### Transisi ke Slide Berikutnya

Setelah kita memahami apa yang ditampilkan oleh `Game View`, langkah berikutnya adalah melihat bagaimana objek-objek tersebut tersusun di dalam scene. Untuk itu, kita akan masuk ke `Hierarchy`.

---

## Slide 011 - Hierarchy

### Narasi

Setelah kita melihat **Game View** sebagai hasil akhir yang ditampilkan oleh kamera, sekarang kita perlu memahami bagaimana objek-objek dalam scene tersusun. Panel **Hierarchy** menunjukkan semua `GameObject` yang ada dalam `Scene`. Artinya, Hierarchy bukan sekadar daftar nama objek, tetapi representasi struktur scene itu sendiri.

Kita bisa membayangkan Hierarchy seperti pohon struktur. Objek yang berada di atas dapat menjadi **parent**, sedangkan objek yang berada di bawahnya menjadi **child**. Indentasi atau pergeseran ke kanan pada daftar menunjukkan bahwa suatu objek berada di dalam kelompok tertentu.

Contoh struktur Hierarchy dapat dibaca seperti ini:

```text
Scene
├── Main Camera
├── Directional Light
├── Environment
│   ├── Ground
│   ├── Building
│   └── Props
└── PlayerPreview
```

Dari struktur tersebut, `Main Camera`, `Directional Light`, `Environment`, dan `PlayerPreview` berada pada level yang sama di bawah `Scene`. Sementara itu, `Ground`, `Building`, dan `Props` berada di dalam `Environment`. Dengan kata lain, `Environment` adalah **parent**, sedangkan `Ground`, `Building`, dan `Props` adalah **child**.

Hubungan **parent → child** ini penting karena membantu kita mengatur objek secara hierarkis. Misalnya, jika sebuah objek parent dipindahkan atau dirotasi, objek child di dalamnya akan mengikuti sesuai posisi relatifnya. Pola ini sangat berguna dalam grafika komputer karena banyak objek visual tidak berdiri sendiri, melainkan tersusun dari bagian-bagian yang saling terkait.

Dalam konteks rendering, Hierarchy juga membantu kita memahami apa saja yang ada di scene dan bagaimana objek-objek tersebut terorganisasi. Objek yang ada di Hierarchy merupakan kandidat untuk diproses lebih lanjut oleh pipeline, misalnya melalui transformasi, pencahayaan, material, dan akhirnya ditampilkan oleh kamera. Jadi, sebelum masuk ke pengaturan detail objek, kita perlu terlebih dahulu memahami struktur scene-nya.

### Inti yang Harus Ditekankan

- **Hierarchy** menampilkan semua `GameObject` dalam `Scene`.
- Struktur Hierarchy berbentuk pohon yang menunjukkan hubungan **parent → child**.
- Indentasi menunjukkan bahwa suatu objek berada di bawah objek parent tertentu.
- Memahami Hierarchy penting untuk mengatur scene, memahami transformasi relatif, dan mengetahui objek apa saja yang akan diproses oleh rendering pipeline.

### Transisi ke Slide Berikutnya

Setelah kita memahami objek apa saja yang ada dalam scene dan bagaimana hubungannya melalui Hierarchy, langkah berikutnya adalah melihat detail dari satu objek terpilih. Di situlah peran **Inspector** menjadi penting, karena panel ini menampilkan property, component, transform, material, renderer, collider, script, dan setting lain dari `GameObject` yang sedang dipilih.

---

## Slide 012 - Inspector

### Narasi

Setelah kita melihat **Hierarchy** sebagai daftar **GameObject**, langkah berikutnya adalah memilih salah satu objek tersebut. Begitu objek dipilih, **Inspector** akan menampilkan seluruh informasi yang bisa kita amati dan ubah. Jadi, **Hierarchy** memberi tahu *apa saja objek yang ada*, sedangkan **Inspector** memberi tahu *bagaimana objek itu dikonfigurasi*.

**Inspector** bekerja seperti panel detail. Di dalamnya kita tidak hanya melihat satu nilai, tetapi kumpulan **Component** yang membentuk perilaku dan tampilan **GameObject**. Setiap component biasanya ditampilkan sebagai blok terpisah, sehingga kita bisa mengaktifkan, menonaktifkan, atau mengubah parameternya.

Secara sederhana, **Inspector** menampilkan:

- property **GameObject**,
- semua **Component**,
- nilai `Transform`,
- `Material`,
- `Renderer`,
- `Collider`,
- `Script`,
- dan setting lain.

Beberapa bagian yang paling penting adalah `Transform`, `Material`, `Renderer`, `Collider`, dan `Script`. `Transform` menentukan posisi, rotasi, dan skala objek dalam scene. `Material` dan `Renderer` menentukan bagaimana objek digambar, termasuk warna, tekstur, atau shader yang digunakan. `Collider` menentukan apakah objek dapat berinteraksi secara fisik, sedangkan `Script` memungkinkan kita menambahkan logika khusus.

Dalam konteks **rendering pipeline**, **Inspector** sangat penting karena banyak keputusan visual dimulai dari sini. Nilai `Transform` memengaruhi di mana geometri berada sebelum diproses oleh kamera dan proyeksi. `Material` dan `Renderer` memengaruhi bagaimana permukaan objek di-shade oleh GPU. Dengan kata lain, **Inspector** adalah tempat kita mengatur input yang kemudian melewati pipeline rendering.

Hal yang perlu dipahami mahasiswa adalah **Inspector** bukan sekadar daftar angka. Setiap nilai yang diubah dapat langsung mengubah tampilan atau perilaku objek di scene. Karena itu, saat belajar Unity, kita harus terbiasa membaca **Inspector** sebagai cara memahami konfigurasi objek, bukan hanya sebagai tempat menggeser slider.

### Inti yang Harus Ditekankan

- **Inspector** menampilkan property **GameObject** dan semua **Component** yang terpasang pada objek tersebut.
- Component seperti `Transform`, `Material`, `Renderer`, `Collider`, dan `Script` menentukan posisi, tampilan, interaksi, dan perilaku objek.
- **Inspector** penting karena menghubungkan konfigurasi objek dengan **rendering pipeline** dan perilaku scene secara keseluruhan.

### Transisi ke Slide Berikutnya

Setelah kita memahami bagaimana **Inspector** mengatur objek yang sudah ada di scene, selanjutnya kita perlu melihat dari mana asset-asset seperti model, material, tekstur, dan script disimpan. Itu akan kita bahas di **Project Window**.

---

## Slide 013 - Project Window

### Narasi

**Project Window** adalah area utama tempat kita mengelola **asset** dalam project Unity. Di sini, kita tidak hanya melihat file biasa, tetapi juga sumber daya yang akan digunakan oleh scene, seperti model 3D, material, texture, prefab, scene, script, dan setting project.

Kita dapat membaca struktur folder pada Project Window sebagai cara Unity mengorganisasi asset. Pada contoh berikut, root folder adalah `Assets/`, lalu di dalamnya terdapat subfolder seperti `Models/`, `Materials/`, `Textures/`, `Prefabs/`, `Scenes/`, `Scripts/`, dan `Settings/`.

```text
Assets/
├── Models/
├── Materials/
├── Textures/
├── Prefabs/
├── Scenes/
├── Scripts/
└── Settings/
```

Struktur seperti ini penting karena project grafika komputer biasanya berkembang menjadi cukup kompleks. Jika asset tidak dikelompokkan dengan jelas, kita akan kesulitan menemukan file, memisahkan asset yang sudah selesai dengan yang masih dikerjakan, atau menghindari duplikasi. Untuk project jangka panjang, organisasi folder yang rapi membantu alur kerja menjadi lebih efisien.

Dalam konteks rendering, asset di Project Window dapat dipandang sebagai **input** yang kemudian dimasukkan ke dalam scene. Misalnya, `Models/` menyimpan geometri objek, `Materials/` dan `Textures/` memengaruhi tampilan visual objek, `Prefabs/` menyimpan objek siap pakai beserta komponen-komponennya, `Scenes/` menyimpan susunan objek dalam ruang, `Scripts/` mengatur perilaku objek, dan `Settings/` menyimpan konfigurasi project. Dengan kata lain, Project Window adalah tempat kita menyiapkan bahan-bahan sebelum scene dirender.

Sebelum lanjut, yang perlu kita pahami adalah bahwa Project Window bukan sekadar tempat menyimpan file. Ia adalah bagian dari alur kerja pengembangan scene: asset yang terorganisasi dengan baik akan memudahkan kita membangun scene, mengatur material, menghubungkan script, dan akhirnya menghasilkan tampilan visual yang konsisten.

### Inti yang Harus Ditekankan

- **Project Window** berisi **asset project** yang digunakan untuk membangun scene.
- Struktur folder yang rapi membantu pengelolaan project jangka panjang, pencarian asset, dan penghindaran duplikasi.
- Asset seperti model, material, texture, prefab, script, dan setting menjadi bagian dari alur kerja scene dan rendering.

### Transisi ke Slide Berikutnya

Setelah kita memahami bagaimana asset disimpan dan diorganisasi di Project Window, langkah berikutnya adalah mengetahui bagaimana Unity memberi tahu kita ketika ada masalah saat scene dijalankan. Untuk itu, kita lanjut ke **Console**.

---

## Slide 014 - Console

### Narasi

Setelah asset tersimpan rapi di **Project Window**, langkah berikutnya adalah memastikan scene berjalan seperti yang kita harapkan. Di Unity, **Console** adalah jendela diagnostik yang menampilkan pesan dari editor dan runtime. Pesan ini sangat penting karena banyak masalah visual atau logika tidak selalu terlihat langsung di **Scene View** atau **Game View**.

Console biasanya menampilkan tiga jenis pesan utama:

```text
Log
→ informasi normal

Warning
→ ada potensi masalah

Error
→ ada masalah yang harus diperbaiki
```

Kita bisa membacanya seperti laporan status sistem. **Log** adalah pesan normal, misalnya objek dibuat, nilai berubah, atau proses berjalan. **Warning** memberi tahu bahwa ada potensi masalah, misalnya asset tidak ditemukan, parameter tidak ideal, atau kondisi yang perlu diperhatikan. **Error** menandakan masalah yang harus diperbaiki, misalnya script gagal dieksekusi, referensi kosong, atau proses runtime terganggu.

Jika hasil scene tidak sesuai harapan, misalnya objek tidak muncul, material terlihat salah, atau animasi tidak berjalan, langkah pertama yang baik adalah membuka **Console**. Dari pesan yang muncul, kita bisa mengetahui apakah masalahnya berasal dari script, asset, konfigurasi scene, atau proses runtime.

Penting untuk tidak mengabaikan **Warning**, karena meskipun program masih berjalan, warning sering menjadi petunjuk awal sebelum menjadi **Error**. Kebiasaan memeriksa Console membantu kita memahami alur kerja Unity dan mempercepat proses debugging, terutama saat membangun scene 3D yang melibatkan banyak komponen.

### Inti yang Harus Ditekankan

- **Console** adalah jendela diagnostik Unity untuk membaca **Log**, **Warning**, dan **Error**.
- **Log** memberi informasi normal, **Warning** memberi peringatan potensi masalah, dan **Error** menandakan masalah yang harus diperbaiki.
- Biasakan memeriksa Console ketika hasil scene tidak sesuai harapan, karena pesan di Console membantu melacak sumber masalah.

### Transisi ke Slide Berikutnya

Setelah kita tahu cara membaca pesan di Console, langkah berikutnya adalah mempercepat kerja di Scene View. Kita akan melihat shortcut navigasi mouse yang sering digunakan untuk orbit, pan, zoom, dan dolly.

---

## Slide 015 - Shortcut Navigasi Scene View

### Narasi

Saat kita bekerja di **Scene View** Unity, navigasi mouse menjadi alat utama untuk mengamati scene 3D. Scene View bukan tampilan final seperti **Game View**, melainkan ruang kerja editor tempat kita memeriksa posisi objek, transformasi, kamera, pencahayaan, dan hubungan antar GameObject. Karena itu, kemampuan berpindah sudut pandang dengan cepat sangat menentukan efisiensi kerja.

Slide ini menampilkan shortcut mouse yang paling sering digunakan:

```text
Alt + Left Mouse Drag
→ Orbit

Middle Mouse Drag
→ Pan

Mouse Wheel
→ Zoom

Alt + Right Mouse Drag
→ Dolly / Zoom
```

Kita dapat membaca shortcut ini sebagai kombinasi antara **tombol modifier**, **tombol mouse**, dan **aksi navigasi**. Berikut makna praktisnya:

- `Alt + Left Mouse Drag` digunakan untuk **Orbit**, yaitu memutar pandangan kamera mengelilingi titik fokus. Ini berguna saat kita ingin melihat objek dari berbagai sudut tanpa mengubah posisinya.
- `Middle Mouse Drag` digunakan untuk **Pan**, yaitu menggeser pandangan secara horizontal atau vertikal. Ini membantu kita berpindah ke area scene yang lebih jauh tanpa memutari objek.
- `Mouse Wheel` digunakan untuk **Zoom**, yaitu memperbesar atau memperkecil tampilan. Ini penting untuk memeriksa detail kecil maupun melihat keseluruhan layout scene.
- `Alt + Right Mouse Drag` digunakan untuk **Dolly / Zoom**, yaitu mengubah jarak pandang secara lebih halus atau terarah. Dalam konteks scene 3D, gerakan ini membantu kita mendekati atau menjauh dari objek sambil mempertahankan orientasi pandangan.

Penting untuk membedakan **Orbit**, **Pan**, dan **Zoom** karena ketiganya memengaruhi cara kita membaca ruang 3D. **Orbit** mengubah sudut pandang, **Pan** menggeser posisi pandangan, sedangkan **Zoom** atau **Dolly** mengubah jarak. Jika ketiganya digunakan secara konsisten, mahasiswa akan lebih mudah memahami transformasi kamera, komposisi scene, dan hubungan antar objek sebelum masuk ke proses rendering.

Shortcut navigasi ini juga menjadi dasar untuk memahami shortcut berikutnya, yaitu cara memfokuskan pandangan pada objek terpilih. Dengan navigasi yang lancar, kita tidak hanya “melihat” scene, tetapi juga mulai membangun intuisi spasial yang dibutuhkan dalam grafika komputer.

### Inti yang Harus Ditekankan

- **Scene View** adalah ruang kerja editor untuk mengamati dan menyusun scene 3D, bukan tampilan final seperti Game View.
- `Alt + Left Mouse Drag` untuk **Orbit**, `Middle Mouse Drag` untuk **Pan**, `Mouse Wheel` untuk **Zoom**, dan `Alt + Right Mouse Drag` untuk **Dolly / Zoom**.
- Pahami perbedaan sudut pandang, pergeseran pandangan, dan perubahan jarak karena ketiganya membantu membaca ruang 3D.
- Navigasi cepat penting untuk memeriksa transformasi, kamera, pencahayaan, dan komposisi scene sebelum rendering.

### Transisi ke Slide Berikutnya

Setelah kita bisa berpindah sudut pandang dengan lancar, langkah berikutnya adalah mempercepat fokus pada objek tertentu. Pada slide berikutnya, kita akan melihat shortcut `F` untuk memfokuskan Scene View pada GameObject terpilih dan `Q` untuk memilih mode tampilan.

---

## Slide 016 - Shortcut Focus dan View

### Narasi

Dalam Scene View Unity, setelah kita bisa mengorbit, memindahkan, dan memperbesar tampilan, ada dua shortcut tambahan yang membuat alur kerja lebih cepat: `F` dan `Q`.

```text
F
→ Frame / Focus Selected

Q
→ Hand / View Tool
```

Shortcut `F` berfungsi untuk **Frame / Focus Selected**. Artinya, jika kita memilih sebuah `GameObject` di Hierarchy atau langsung di Scene View, lalu menekan `F`, Scene View akan otomatis memusatkan pandangan pada objek tersebut. Ini sangat berguna ketika scene sudah membesar, objek berada jauh dari pandangan, atau kita baru saja memilih objek dan ingin melihat posisinya dalam ruang 3D.

Perlu dipahami bahwa `F` tidak mengubah posisi objek. Yang berubah adalah **tampilan Scene View**, yaitu viewport kerja kita. Objek tetap berada pada koordinatnya, tetapi pandangan Scene View menyesuaikan agar objek terlihat di tengah dan dalam ukuran yang mudah diamati.

Shortcut `Q` memilih **Hand / View Tool**. Tool ini membantu kita memindahkan tampilan Scene View secara manual, sehingga kita bisa menggeser pandangan tanpa harus bergantung pada drag mouse tertentu. Dalam konteks grafika komputer, kemampuan fokus dan memindahkan view ini penting karena Scene View adalah ruang kerja untuk memahami posisi objek, orientasi kamera, dan hubungan antar-objek sebelum proses rendering ditampilkan.

Sebelum lanjut ke shortcut transform, pastikan kita sudah terbiasa memilih `GameObject` terlebih dahulu, lalu menggunakan `F` untuk memusatkan pandangan. Dengan kebiasaan ini, kita tidak akan kesulitan mencari objek ketika scene menjadi lebih kompleks.

### Inti yang Harus Ditekankan

- `F` = **Frame / Focus Selected**: memusatkan Scene View pada `GameObject` yang sedang dipilih.
- `Q` = **Hand / View Tool**: memilih tool untuk memindahkan tampilan Scene View secara manual.
- Shortcut ini mengubah **pandangan viewport**, bukan mengubah posisi, rotasi, atau skala objek.
- Fokus pada objek membantu memahami lokasi objek dalam ruang 3D dan mempercepat alur kerja di Unity.

### Transisi ke Slide Berikutnya

Setelah kita bisa memusatkan pandangan pada objek, langkah berikutnya adalah mengubah objek itu sendiri. Pada slide berikutnya, kita akan membahas shortcut transform utama seperti `W`, `E`, `R`, `T`, dan `Y`, serta cara menggunakan handle sumbu untuk membatasi transformasi.

---

## Slide 017 - Shortcut Transform

### Narasi

Setelah kita bisa memfokuskan Scene View dengan `F` dan berpindah mode view dengan `Q`, langkah berikutnya adalah memahami shortcut untuk mengubah objek 3D secara langsung. Dalam grafika komputer, transformasi adalah operasi dasar yang menentukan bagaimana sebuah objek berada di ruang: di mana posisinya, bagaimana orientasinya, dan seberapa besar skalanya. Shortcut ini membantu kita memanipulasi objek tanpa harus membuka menu atau inspector setiap kali.

```text
W → Move
E → Rotate
R → Scale
T → Rect Tool
Y → Transform Tool
```

`W` mengaktifkan **Move Tool**, yaitu mode untuk menggeser objek pada sumbu X, Y, atau Z. `E` mengaktifkan **Rotate Tool** untuk mengubah orientasi objek. `R` mengaktifkan **Scale Tool** untuk memperbesar atau memperkecil objek. `T` adalah **Rect Tool**, yang biasanya digunakan untuk memilih area atau mengatur rectangle di Scene View. `Y` adalah **Transform Tool**, yang menggabungkan kontrol transformasi dalam satu mode.

Yang perlu diperhatikan adalah handle transformasi. Saat kita memilih objek, Unity menampilkan handle berwarna pada sumbu X, Y, dan Z. Jika kita menarik handle pada satu sumbu, transformasi dibatasi pada sumbu tersebut. Misalnya, menarik handle X hanya mengubah posisi atau orientasi pada sumbu X, bukan seluruh ruang bebas. Ini penting karena dalam scene 3D, kontrol per sumbu membuat penempatan objek lebih presisi dan konsisten.

Dari sisi konsep grafika komputer, transformasi ini pada akhirnya akan memengaruhi representasi geometri objek sebelum diproses lebih lanjut oleh pipeline rendering. Posisi, rotasi, dan skala objek menentukan bagaimana koordinat lokal objek dipetakan ke ruang dunia, lalu kemudian ke ruang kamera dan layar. Jadi, meskipun slide ini masih pada level shortcut, kita sedang berlatih mengendalikan elemen dasar yang nanti menjadi input bagi proses rendering.

Sebelum lanjut, mahasiswa perlu terbiasa dengan tiga transformasi utama: **Move**, **Rotate**, dan **Scale**, serta memahami bahwa handle X, Y, dan Z adalah cara untuk membatasi perubahan pada satu axis tertentu.

### Inti yang Harus Ditekankan

- `W`, `E`, dan `R` adalah shortcut utama untuk **Move**, **Rotate**, dan **Scale**.
- `T` dan `Y` membantu memilih mode **Rect Tool** dan **Transform Tool** sesuai kebutuhan.
- Handle X, Y, dan Z digunakan untuk membatasi transformasi pada satu axis tertentu.
- Transformasi objek adalah dasar manipulasi geometri sebelum objek masuk ke proses rendering.

### Transisi ke Slide Berikutnya

Setelah kita bisa mengubah posisi, orientasi, dan skala objek, langkah berikutnya adalah mempercepat penyusunan scene dengan shortcut object editing seperti duplicate, delete, rename, undo, redo, dan save.

---

## Slide 018 - Shortcut Object Editing

### Narasi

Setelah kita sudah terbiasa memindahkan, memutar, dan menskalakan objek dengan `W`, `E`, dan `R`, langkah berikutnya adalah mempercepat proses penyusunan scene. Pada tahap ini, kita tidak hanya mengubah satu transformasi, tetapi mengelola banyak objek: menggandakan, menghapus, memberi nama, serta membatalkan atau mengulang perubahan.

Shortcut object editing yang perlu kita perhatikan adalah sebagai berikut:

```text
Ctrl + D → Duplicate
Delete   → Delete
F2       → Rename
Ctrl + Z → Undo
Ctrl + Y → Redo
Ctrl + S → Save
```

Secara konsep, shortcut ini bekerja pada level **editing scene**, bukan pada level rendering. Artinya, kita sedang menyiapkan **objek**, **transform**, dan **hierarki** yang nanti akan diproses oleh pipeline rendering. Misalnya, `Ctrl + D` membuat salinan objek dengan transformasi awal yang sama, sehingga kita bisa membuat formasi props tanpa harus membuat objek dari nol. `Delete` membersihkan objek yang tidak diperlukan, sementara `F2` membantu memberi nama yang konsisten agar Hierarchy mudah dibaca.

Bagian yang sangat penting adalah `Ctrl + Z` dan `Ctrl + Y`. Dalam praktik, mahasiswa sering melakukan banyak perubahan kecil: memindah objek, mengganti material, mengubah scale, atau menambah komponen. Tanpa undo dan redo, kesalahan kecil bisa membuat scene sulit dikembalikan. Karena itu, kedua shortcut ini menjadi bagian dari alur kerja yang aman. `Ctrl + S` juga penting karena menyimpan scene secara berkala, terutama sebelum mencoba perubahan yang lebih besar.

Inti yang perlu dipahami: shortcut ini tidak mengubah cara kerja rendering secara langsung, tetapi mempercepat proses **scene setup**. Semakin rapi dan cepat penyusunan objek, semakin efisien kita dalam menguji transformasi, pencahayaan, kamera, dan perilaku runtime.

### Inti yang Harus Ditekankan

- `Ctrl + D`, `Delete`, dan `F2` mempercepat pengelolaan objek di Hierarchy.
- `Ctrl + Z` dan `Ctrl + Y` menjaga alur kerja tetap aman saat banyak perubahan dilakukan.
- `Ctrl + S` penting untuk menyimpan scene secara berkala.
- Shortcut ini mendukung penyusunan **environment** dan **props** sebelum pengujian runtime.

### Transisi ke Slide Berikutnya

Setelah objek-objek dalam scene tersusun rapi, langkah berikutnya adalah menguji apakah scene tersebut berjalan dengan benar saat aplikasi dijalankan. Untuk itu, kita akan masuk ke shortcut Play Mode, yaitu `Ctrl + P`, yang digunakan untuk memulai atau menghentikan runtime.

---

## Slide 019 - Shortcut Play Mode

### Narasi

Setelah kita mempercepat penyusunan objek di scene, langkah berikutnya adalah menguji apakah scene tersebut benar-benar berjalan sesuai harapan. Di Unity, kita dapat menggunakan shortcut berikut:

```text
Ctrl + P
→ Play / Stop
```

Shortcut ini memungkinkan kita masuk ke **Play Mode** atau keluar dari Play Mode dengan cepat.

Play Mode penting karena ia mengubah scene dari kondisi penyusunan menjadi kondisi **runtime**. Saat Play Mode aktif, scene tidak lagi hanya ditampilkan secara statis, tetapi dijalankan. Dengan begitu, kita dapat menguji bagaimana objek, kamera, dan perilaku visual lainnya bekerja ketika aplikasi sedang berjalan.

Hal yang perlu diperhatikan adalah perubahan tertentu selama Play Mode dapat kembali ke nilai sebelumnya setelah kita menekan Stop. Artinya, state yang muncul saat runtime tidak selalu sama dengan state awal scene di mode edit. Karena itu, sebelum menguji runtime, sebaiknya kita memastikan scene sudah tersimpan dan perubahan yang diinginkan sudah diterapkan di mode edit.

Untuk mahasiswa, poin utamanya adalah `Ctrl + P` bukan sekadar tombol play, tetapi cara cepat untuk memvalidasi perilaku scene. Kita gunakan Play Mode untuk melihat apakah scene berjalan sesuai desain, sekaligus memahami bahwa state runtime dapat berbeda dari state edit.

### Inti yang Harus Ditekankan

- `Ctrl + P` digunakan untuk **Play / Stop** di Unity.
- Play Mode adalah cara menguji **runtime** scene, bukan hanya tampilan statis.
- Perubahan tertentu selama Play Mode dapat kembali ke nilai sebelumnya setelah Stop.
- Gunakan Play Mode untuk memvalidasi perilaku scene sebelum lanjut ke struktur objek.

### Transisi ke Slide Berikutnya

Setelah kita tahu cara menjalankan dan menghentikan scene, langkah berikutnya adalah memahami unit dasar yang membentuk scene itu sendiri, yaitu **GameObject**.

---

## Slide 020 - GameObject

### Narasi

Dalam Unity, **GameObject** adalah **container dasar** untuk setiap objek dalam scene. Artinya, ketika kita melihat kamera, cahaya, kubus, model 3D, karakter, atau properti lingkungan, semuanya direpresentasikan sebagai GameObject.

Beberapa contoh GameObject yang sering kita temui:

- **Camera**, sebagai representasi titik pandang.
- **Light**, sebagai sumber pencahayaan.
- **Cube**, sebagai objek geometri sederhana.
- **imported 3D model**, sebagai aset model yang dimuat ke scene.
- **empty object**, sebagai objek tanpa bentuk visual.
- **character**, sebagai entitas yang dapat bergerak atau berinteraksi.
- **environment prop**, sebagai elemen dekoratif atau fungsional di lingkungan.

Poin penting yang perlu dipahami: **GameObject sendiri belum menjelaskan perilaku visualnya**. Sebuah GameObject hanya menjadi wadah atau identitas objek di scene. Ia belum menentukan bagaimana objek itu dirender, bagaimana posisinya, bagaimana cahayanya, atau bagaimana ia berinteraksi.

Kemampuan GameObject datang dari **Component**. Dengan kata lain, GameObject adalah "tubuh" objek, sedangkan Component adalah bagian yang memberikan fungsi, data, atau perilaku.

Dalam konteks grafika komputer, pemisahan ini penting karena scene tidak dibangun dari satu objek monolitik, tetapi dari kumpulan GameObject yang dapat memiliki berbagai kemampuan. Ini memudahkan kita mengelola kamera, pencahayaan, geometri, dan elemen lingkungan secara modular dalam pipeline rendering real-time.

Sebelum lanjut, mahasiswa perlu mengingat bahwa GameObject adalah unit dasar organisasi scene, bukan unit visual yang sudah lengkap. Visual, transformasi, pencahayaan, dan perilaku akan dijelaskan melalui komponen yang melekat padanya.

### Inti yang Harus Ditekankan

- **GameObject** adalah **container dasar** objek di Unity.
- GameObject dapat berupa objek visual seperti **Cube** dan **imported 3D model**, maupun objek non-visual seperti **empty object**.
- **GameObject sendiri belum menjelaskan perilaku visualnya**; kemampuan datang dari **Component**.
- Konsep ini penting untuk memahami organisasi scene dan modularitas dalam real-time rendering.

### Transisi ke Slide Berikutnya

Setelah memahami GameObject sebagai wadah objek, langkah berikutnya adalah melihat bagaimana kemampuan tersebut diberikan. Pada slide berikutnya, kita akan membahas **Component** sebagai bagian yang menambah fungsi pada GameObject.

---

## Slide 021 - Component

### Narasi

Setelah kita memahami **GameObject** sebagai container dasar, langkah berikutnya adalah memahami apa yang membuat container itu bisa terlihat, bergerak, berinteraksi, atau memengaruhi scene. Di Unity, **GameObject** tidak otomatis memiliki kemampuan visual atau perilaku. Kemampuan itu diberikan oleh **Component**.

**Component** adalah unit fungsional yang menempel pada **GameObject** dan menentukan peran objek dalam scene. Dengan kata lain, **GameObject** adalah wadah, sedangkan **Component** adalah isi yang memberi fungsi.

Kita bisa membaca struktur pada slide sebagai pohon komponen:

```text
GameObject
   │
   ├── Transform
   ├── Mesh Filter
   ├── Mesh Renderer
   ├── Collider
   ├── Light
   ├── Camera
   └── Script
```

Artinya, satu **GameObject** dapat memiliki satu atau lebih komponen. Misalnya, objek visual 3D biasanya memiliki `Transform`, `Mesh Filter`, dan `Mesh Renderer`. Jika objek tersebut bisa berinteraksi secara fisika, kita bisa menambahkan `Collider`. Jika objek menjadi sumber cahaya, kita tambahkan `Light`. Jika objek menjadi mata kamera, kita tambahkan `Camera`. Jika objek perlu logika kustom, kita tambahkan `Script`.

Konsep penting yang harus ditangkap di sini adalah **composition over monolithic object**. Artinya, alih-alih membuat satu kelas raksasa yang memuat semua kemampuan, Unity membangun objek dari beberapa komponen kecil yang bisa dikombinasikan. Pendekatan ini membuat sistem lebih modular, lebih mudah diubah, dan lebih fleksibel untuk kebutuhan rendering real-time.

Dalam konteks grafika komputer, komponen-komponen ini juga berperan sebagai penyedia data untuk **rendering pipeline**. `Mesh Filter` menyimpan referensi geometri mesh, `Mesh Renderer` menyiapkan objek untuk tahap rendering, `Camera` menentukan viewpoint, `Light` memengaruhi shading, dan `Script` dapat mengubah parameter objek secara runtime. Dengan demikian, **Component** bukan sekadar tambahan fitur, tetapi bagian penting yang menghubungkan objek scene dengan proses rendering.

Sebelum lanjut, hal yang harus dipahami mahasiswa adalah bahwa tidak semua **GameObject** harus memiliki semua komponen. Komponen menentukan fungsi objek, bukan **GameObject** secara otomatis. Sebuah **GameObject** bisa menjadi kamera, prop visual, sumber cahaya, atau objek kosong, tergantung komponen yang dipasang.

### Inti yang Harus Ditekankan

- **Component** adalah unit fungsional yang menambah kemampuan pada **GameObject**.
- Satu **GameObject** dapat dikombinasikan dari beberapa komponen, seperti `Transform`, `Mesh Filter`, `Mesh Renderer`, `Collider`, `Light`, `Camera`, dan `Script`.
- Unity menggunakan prinsip **composition over monolithic object**, yaitu membangun objek dari komponen-komponen kecil yang modular dan fleksibel.
- Komponen berperan sebagai sumber data dan perilaku yang kemudian diproses oleh **rendering pipeline** Unity.

### Transisi ke Slide Berikutnya

Setelah kita memahami bahwa kemampuan **GameObject** datang dari **Component**, kita mulai dari komponen paling dasar: **Transform**. Komponen ini menentukan bagaimana objek berada dalam ruang, dan menjadi dasar dari transformasi geometrik yang akan kita bahas lebih lanjut.

---

## Slide 022 - Transform

### Narasi

Dalam Unity, setiap `GameObject` selalu memiliki komponen **`Transform`**. Komponen ini bukan sekadar data tambahan, melainkan bagian dasar yang menentukan bagaimana objek hadir dalam dunia virtual. Tanpa **`Transform`**, objek tidak memiliki posisi, orientasi, atau ukuran yang dapat ditampilkan dalam scene.

**`Transform`** menyimpan tiga informasi utama:

- **`Position`**, yaitu letak objek pada sumbu `x`, `y`, dan `z`.
- **`Rotation`**, yaitu orientasi atau arah objek.
- **`Scale`**, yaitu ukuran relatif objek pada tiap sumbu.

Secara konseptual, kita dapat membacanya sebagai alur berikut:

```text
Model Space
    ↓
Transform
    ↓
World Space
```

**`Model Space`** adalah ruang lokal objek, misalnya ruang koordinat dari bentuk atau mesh objek. **`Transform`** kemudian memetakan objek tersebut ke **`World Space`**, yaitu ruang bersama tempat seluruh objek dalam scene berada. Dalam pipeline rendering, langkah ini penting karena geometri objek tidak langsung dikirim ke kamera; ia harus diletakkan terlebih dahulu di dunia.

Penting untuk dipahami bahwa **`Transform`** adalah implementasi praktis dari transformasi geometrik yang sudah kita pelajari. Translasi, rotasi, dan penskalaan bukan hanya rumus matematis, tetapi menjadi data yang dapat diubah langsung pada objek. Ketika kita memindahkan **`Position`**, objek bergeser. Ketika kita mengubah **`Rotation`**, objek berputar. Ketika kita mengubah **`Scale`**, objek membesar atau mengecil.

Dalam konteks grafika komputer, konsep ini menjadi dasar untuk menempatkan kamera, cahaya, mesh, dan objek lain secara konsisten. Tanpa transformasi yang benar, objek dapat berada di luar pandangan kamera, berorientasi salah, atau berukuran tidak sesuai. Karena itu, **`Transform`** adalah jembatan antara definisi objek dan penampilannya di scene.

Sebelum lanjut, mahasiswa perlu memahami bahwa **`Transform`** bukan hanya komponen Unity, tetapi representasi dari transformasi model ke dunia. Nilai **`Position`**, **`Rotation`**, dan **`Scale`** adalah cara praktis untuk mengendalikan objek. Detail tentang bagaimana transformasi objek induk memengaruhi objek anak akan kita bahas pada slide berikutnya.

### Inti yang Harus Ditekankan

- Setiap `GameObject` memiliki **`Transform`** sebagai komponen dasar penempatan objek.
- **`Transform`** menyimpan **`Position`**, **`Rotation`**, dan **`Scale`**.
- Secara konseptual, **`Transform`** memetakan objek dari **`Model Space`** ke **`World Space`**.
- **`Transform`** adalah implementasi praktis dari transformasi geometrik dalam rendering.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa **`Transform`** menentukan posisi, rotasi, dan skala objek, kita akan melihat apa yang terjadi ketika beberapa objek memiliki hubungan induk dan anak. Pada slide berikutnya, kita akan membahas bagaimana transformasi parent memengaruhi child, yang merupakan dasar dari **hierarchical transformation** atau **scene graph**.

---

## Slide 023 - Parent dan Child Transform

### Narasi

Dalam Unity, sebuah `GameObject` tidak selalu berdiri sendiri. Kita bisa menyusun objek menjadi struktur **parent** dan **child**, di mana transformasi parent memengaruhi posisi akhir child.

```text
Car
├── Body
├── Wheel_FL
├── Wheel_FR
├── Wheel_RL
└── Wheel_RR
```

Pada contoh ini, `Car` adalah parent, sedangkan `Body` dan keempat roda adalah child. Jika `Car` berpindah, berputar, atau diskala, semua child ikut berubah posisi relatif terhadap dunia.

Intuisi visualnya sederhana: roda tidak diletakkan sebagai objek bebas di dunia, tetapi “terpasang” pada mobil. Jadi ketika mobil bergerak, roda ikut bergerak tanpa kita harus memindahkan setiap roda satu per satu.

Konsep ini disebut **hierarchical transformation** atau **scene graph**. Hierarki ini penting karena memungkinkan kita membangun objek kompleks dari bagian-bagian kecil yang tetap konsisten posisinya terhadap induknya.

Dalam rendering pipeline, GPU pada akhirnya membutuhkan posisi akhir objek dalam ruang dunia. Hierarki membantu kita menghitung posisi akhir tersebut secara rapi: transformasi child tidak berdiri sendiri, tetapi dipengaruhi oleh transformasi parent.

Hal yang perlu dipahami sebelum lanjut adalah bahwa transform child biasanya disimpan sebagai transform relatif terhadap parent, bukan sebagai posisi absolut di dunia. Perbedaan inilah yang akan kita bedah pada konsep **local transform** dan **world transform**.

### Inti yang Harus Ditekankan

- **Parent** memengaruhi posisi akhir **child**.
- Struktur hierarki seperti `Car` → `Body` → `Wheel_*` membuat objek kompleks lebih mudah dikendalikan.
- Konsep ini adalah dasar **hierarchical transformation** dan **scene graph**.
- Transform child bersifat relatif terhadap parent, sehingga posisi akhirnya bergantung pada parent.

### Transisi ke Slide Berikutnya

Setelah kita memahami bahwa child dipengaruhi parent, langkah berikutnya adalah membedakan transform yang disimpan relatif terhadap parent dengan transform akhir yang terlihat di dunia.

---

## Slide 024 - Local vs World Transform

### Narasi

Setelah kita melihat bahwa transformasi child dipengaruhi oleh parent, kita perlu membedakan dua cara membaca posisi, rotasi, dan skala objek dalam scene.

**Local transform** adalah transformasi objek yang relatif terhadap parent-nya. Artinya, nilai transformasi yang kita lihat pada sebuah child biasanya tidak langsung menunjukkan posisinya di dunia, melainkan posisinya terhadap parent. Misalnya, roda mobil memiliki local transform relatif terhadap body mobil. Jika body mobil berpindah, roda ikut berpindah karena local transform roda terhadap body tetap, tetapi posisi parent berubah.

**World transform** adalah transformasi akhir objek dalam **world space**. World transform adalah posisi, rotasi, dan skala yang benar-benar digunakan oleh scene, kamera, dan rendering pipeline. Dengan kata lain, world transform adalah hasil akhir setelah seluruh transformasi hierarkis digabungkan.

```text
Parent Transform
      ×
Child Local Transform
      ↓
Child World Transform
```

Diagram ini menunjukkan alur sederhana: transformasi parent dikombinasikan dengan transformasi local child, lalu menghasilkan transformasi child dalam ruang dunia. Secara matematis, hubungan ini dapat dibaca sebagai:

`childWorldTransform = parentTransform × childLocalTransform`

Artinya, posisi akhir child tidak hanya ditentukan oleh nilai transformasinya sendiri, tetapi juga oleh transformasi parent yang memengaruhinya. Jika parent berpindah, berputar, atau diskala, maka world transform child akan ikut berubah meskipun local transform child tidak diubah.

Hal ini sangat penting ketika kita bekerja dengan asset Blender yang memiliki hierarchy. Asset 3D seperti mobil, karakter, bangunan, atau props lingkungan sering terdiri dari banyak bagian yang saling berhubungan. Jika kita hanya membaca local transform, kita bisa salah memahami posisi akhir objek. Sebaliknya, jika kita memahami world transform, kita bisa memastikan objek berada di posisi yang benar di scene dan terlihat konsisten oleh kamera.

Dalam konteks rendering, sistem koordinat yang konsisten sangat dibutuhkan. Kamera, lighting, clipping, dan rasterisasi bekerja pada koordinat yang sudah berada dalam ruang yang sama. Karena itu, transformasi hierarkis pada akhirnya harus menghasilkan world transform yang valid sebelum objek diproses lebih lanjut oleh rendering pipeline.

### Inti yang Harus Ditekankan

- **Local transform** relatif terhadap parent, sedangkan **world transform** adalah transformasi akhir dalam world space.
- World transform child diperoleh dari kombinasi transformasi parent dan local transform child.
- Pemahaman ini penting untuk asset hierarkis dari Blender, karena posisi akhir objek tidak selalu sama dengan nilai local transform yang terlihat di editor.
- Rendering pipeline membutuhkan koordinat yang konsisten, sehingga world transform menjadi dasar sebelum objek diproses lebih lanjut.

### Transisi ke Slide Berikutnya

Setelah kita memahami bagaimana transformasi hierarkis menghasilkan posisi akhir objek, langkah berikutnya adalah membuat objek yang bisa dipakai ulang secara konsisten. Di slide berikutnya, kita akan membahas **Prefab**, yaitu template reusable GameObject yang membantu memperbanyak objek dengan struktur dan transformasi yang lebih mudah dikelola.

---

## Slide 025 - Prefab

### Narasi

Dalam Unity, **Prefab** dapat dipahami sebagai **template reusable** untuk sebuah `GameObject`. Artinya, kita tidak perlu membangun ulang objek yang sama dari nol setiap kali ingin menampilkannya di scene. Cukup buat satu `GameObject` lengkap dengan komponen, transform, material, atau setting awal, lalu simpan sebagai `Prefab`.

Misalnya, kita memiliki `LampPost Prefab`. Dari satu template tersebut, kita dapat membuat beberapa instance:

```text
LampPost Prefab
      ↓
Instance 1
Instance 2
Instance 3
Instance 4
```

Setiap instance tetap berada di scene sebagai objek yang dapat diposisikan, diputar, atau diskalakan. Namun, karena berasal dari template yang sama, objek-objek tersebut memiliki dasar struktur yang konsisten.

Keuntungan utama dari `Prefab` adalah **konsistensi** dan **efisiensi**. Kita tidak perlu menyalin-paste banyak objek lalu mengatur ulang satu per satu. Jika ada perubahan pada template, misalnya penyesuaian material, posisi lampu, atau parameter komponen, perubahan tersebut dapat dikelola lebih rapi.

Dalam konteks grafika komputer, `Prefab` penting karena membantu organisasi scene sebelum objek masuk ke tahap rendering. Scene real-time sering berisi banyak objek berulang, seperti prop lingkungan, furnitur, tanaman, atau lampu. Dengan `Prefab`, kita dapat menyiapkan aset secara terstruktur, lalu membiarkan pipeline rendering memproses setiap instance sesuai posisinya di world space.

Sebelum lanjut, mahasiswa perlu memahami bahwa `Prefab` bukan sekadar duplikat objek biasa. Ia adalah **template** yang dapat menghasilkan banyak instance. Pemahaman ini penting agar kita tidak bingung ketika mengubah satu instance dan mengubah template.

### Inti yang Harus Ditekankan

- `Prefab` adalah **template reusable** untuk `GameObject` dalam Unity.
- Satu `Prefab` dapat menghasilkan banyak **instance** yang konsisten dan mudah diperbanyak.
- Perubahan pada `Prefab` dapat dikelola lebih rapi, terutama untuk prop lingkungan yang berulang.
- `Prefab` membantu organisasi scene sebelum objek diproses oleh rendering pipeline.

### Transisi ke Slide Berikutnya

Setelah kita memahami cara mengorganisasi objek berulang melalui `Prefab`, langkah berikutnya adalah melihat apa yang sebenarnya dirender oleh objek tersebut. Pada slide berikutnya, kita akan membahas **Mesh**, yaitu representasi geometri dari objek 3D.

---

## Slide 026 - Mesh

### Narasi

Dalam grafika komputer, **mesh** adalah representasi geometri sebuah objek yang akan dirender. Secara sederhana, mesh adalah kumpulan titik, garis, dan permukaan yang membentuk bentuk visual. Tanpa mesh, kamera tidak memiliki geometri untuk diproyeksikan ke layar, dan pipeline rendering tidak memiliki data bentuk yang bisa diproses.

Mesh biasanya dibangun dari elemen-elemen berikut:

- **vertex**: titik koordinat yang menentukan posisi sudut atau permukaan objek,
- **edge**: garis penghubung antar vertex,
- **triangle**: permukaan dasar yang dibentuk dari tiga vertex,
- **normal**: arah permukaan yang penting untuk perhitungan pencahayaan,
- **UV coordinate**: koordinat tekstur yang memetakan gambar 2D ke permukaan 3D.

Dari sisi rendering, elemen yang paling sering dipakai GPU adalah **triangle**. Setelah transformasi posisi, orientasi, dan skala objek dilakukan, triangle akan diproyeksikan ke ruang layar, lalu dirasterisasi menjadi pixel. Jadi mesh bukan hanya bentuk statis, tetapi data geometri yang masuk ke pipeline rendering.

Dalam Unity, mesh umumnya tidak berdiri sendiri sebagai komponen visual. Mesh biasanya dipakai oleh kombinasi:

```text
Mesh Filter
+
Mesh Renderer
```

`Mesh Filter` berperan sebagai pemegang referensi geometri mesh, sedangkan `Mesh Renderer` bertugas menampilkan mesh tersebut ke layar. Dengan pola ini, satu objek 3D dapat memiliki data bentuk dan komponen render yang terpisah, sehingga lebih mudah dikelola.

Hal penting yang perlu dipahami sebelum lanjut adalah bahwa mesh menentukan **apa bentuk objeknya**, sedangkan komponen render menentukan **bagaimana bentuk itu ditampilkan**. Normal dan UV coordinate juga menjadi dasar untuk lighting dan texture mapping, sehingga mesh bukan hanya soal siluet, tetapi juga informasi permukaan yang dibutuhkan shader.

### Inti yang Harus Ditekankan

- **Mesh** adalah representasi geometri objek dalam grafika komputer.
- Mesh tersusun dari **vertex**, **edge**, **triangle**, **normal**, dan **UV coordinate**.
- **Triangle** adalah unit permukaan utama yang diproses oleh pipeline rendering.
- Dalam Unity, mesh biasanya digunakan melalui `Mesh Filter` dan `Mesh Renderer`.
- Mesh menyediakan data bentuk dan permukaan yang dibutuhkan untuk transformasi, rasterisasi, lighting, dan texture.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa mesh adalah data geometri objek, langkah berikutnya adalah melihat bagaimana Unity menyimpan referensi mesh tersebut. Pada slide berikutnya, kita akan membahas **Mesh Filter**, yaitu komponen yang menentukan geometry apa yang digunakan oleh sebuah GameObject.

---

## Slide 027 - Mesh Filter

### Narasi

Dalam Unity, sebuah `GameObject` tidak otomatis memiliki bentuk. Bentuknya datang dari komponen yang menempel pada `GameObject`. Pada pembahasan ini kita fokus pada **Mesh Filter**, yaitu komponen yang menyimpan referensi ke **mesh geometry**.

Secara sederhana, `Mesh Filter` adalah "penunjuk" ke data geometri. Ia tidak menggambar bentuk, tidak menentukan warna, dan tidak mengirim piksel ke layar. Perannya lebih ke data: ia menjawab pertanyaan, *geometry apa yang digunakan object ini?*

Contoh alurnya bisa dibaca dari atas ke bawah:

```text
GameObject
   ↓
Mesh Filter
   ↓
Chair_Mesh
```

`GameObject` adalah objek dalam scene. `Mesh Filter` adalah komponen yang menempel pada `GameObject`. `Chair_Mesh` adalah aset mesh yang berisi geometri kursi. Jadi, ketika kita melihat `GameObject` yang memiliki `Mesh Filter`, kita tahu bahwa objek tersebut merujuk pada geometri `Chair_Mesh`.

Hubungannya dengan materi sebelumnya: **mesh** adalah representasi geometri objek, biasanya tersusun dari `vertex`, `edge`, `triangle`, `normal`, dan `UV coordinate`. `Mesh Filter` tidak menyimpan seluruh proses rendering, tetapi menyimpan referensi ke data geometri tersebut. Dengan kata lain, `Mesh Filter` memberi tahu sistem, "objek ini memakai bentuk ini."

Dalam konteks rendering pipeline, posisi `Mesh Filter` berada di tahap awal: menyediakan **geometri** yang nanti akan dipakai oleh komponen lain. Setelah geometri tersedia, baris komponen lain akan menentukan bagaimana geometri itu dikirim dan ditampilkan. Jadi, `Mesh Filter` adalah fondasi data bentuk, bukan komponen yang membuat objek terlihat secara visual.

Sebelum lanjut, yang perlu kita pegang adalah: **Mesh Filter = referensi geometri**. Jika `Mesh Filter` menunjuk ke `Chair_Mesh`, maka `GameObject` tersebut memakai geometri kursi. Jika kita mengganti referensi mesh, bentuk objek yang dirujuk juga berubah, selama komponen lain mendukung proses tampilan.

### Inti yang Harus Ditekankan

- **Mesh Filter** menyimpan referensi ke **mesh geometry**, bukan proses rendering.
- `Mesh Filter` menjawab pertanyaan: *geometry apa yang digunakan object ini?*
- Alur `GameObject → Mesh Filter → Chair_Mesh` menunjukkan bahwa `GameObject` memakai komponen `Mesh Filter` untuk merujuk aset `Chair_Mesh`.
- `Mesh Filter` menyediakan data bentuk, sedangkan tampilan visual melibatkan komponen lain.

### Transisi ke Slide Berikutnya

Jika `Mesh Filter` menentukan geometri apa yang dipakai, maka langkah berikutnya adalah bagaimana geometri itu dikirim untuk dirender. Di slide berikutnya kita akan membahas **Mesh Renderer**, yaitu komponen yang bertugas mengirim mesh ke proses rendering bersama material, shader, lighting, camera, dan render pipeline.

---

## Slide 028 - Mesh Renderer

### Narasi

Setelah kita memahami bahwa **Mesh Filter** menyimpan referensi ke geometri, misalnya `Chair_Mesh`, langkah berikutnya adalah memahami bagaimana geometri itu bisa muncul di layar. Di sinilah peran **Mesh Renderer**. Secara sederhana, **Mesh Renderer** bertugas mengirim mesh untuk dirender oleh sistem grafika.

Perbedaan utamanya dengan **Mesh Filter** adalah fungsi. **Mesh Filter** menjawab pertanyaan: *geometry apa yang digunakan object ini?* Sementara **Mesh Renderer** menjawab pertanyaan: *bagaimana geometry itu dikirim ke proses rendering agar bisa terlihat?* Jadi, **Mesh Filter** menyediakan data bentuk, sedangkan **Mesh Renderer** menjadi penghubung antara bentuk tersebut dan pipeline rendering.

Dalam Unity, sebuah object 3D biasanya tidak cukup hanya memiliki mesh. Agar object dapat terlihat, mesh perlu diproses bersama beberapa komponen lain. Komponen-komponen itu antara lain:

- **Material**, yang menentukan tampilan permukaan,
- **Shader**, yang mengatur cara permukaan dihitung dan digambar,
- **lighting**, yang memengaruhi terang dan gelap pada object,
- **Camera**, yang menentukan dari sudut mana object dilihat,
- **Render Pipeline**, yang mengatur urutan proses dari data scene menuju gambar akhir.

Kita bisa membaca diagram sederhana pada slide sebagai berikut:

```text
Mesh
+
Material
+
Renderer
=
Object dapat terlihat
```

Diagram ini bukan berarti mesh, material, dan renderer adalah tiga benda terpisah yang berdiri sendiri. Lebih tepatnya, diagram ini menunjukkan hubungan fungsional: mesh menyediakan bentuk, material memberi tampilan, dan renderer memastikan data tersebut masuk ke proses rendering. Tanpa **Mesh Renderer**, mesh yang tersimpan di **Mesh Filter** belum tentu muncul di layar.

Penting untuk dipahami bahwa **Mesh Renderer** bukan pengganti geometri. Ia tidak menyimpan bentuk object secara langsung. Ia bekerja bersama komponen lain untuk membuat object dapat dirender. Dalam konteks rendering pipeline, **Mesh Renderer** dapat dipandang sebagai komponen yang menyiapkan atau mengirim data mesh ke tahap berikutnya, yaitu proses perhitungan tampilan berdasarkan material, shader, kamera, dan pencahayaan.

Sebelum lanjut, mahasiswa perlu menangkap satu ide utama: dalam grafika komputer, ada pemisahan antara **data geometri** dan **proses rendering**. **Mesh Filter** memegang referensi geometri, sedangkan **Mesh Renderer** memastikan geometri tersebut dapat dikirim untuk digambar. Pemahaman ini penting karena nanti kita akan melihat bahwa tampilan object tidak hanya ditentukan oleh bentuknya, tetapi juga oleh material, shader, tekstur, kamera, dan pipeline rendering.

### Inti yang Harus Ditekankan

- **Mesh Renderer** bertugas mengirim mesh untuk dirender, bukan menyimpan geometri.
- **Mesh Filter** menyediakan referensi mesh, sedangkan **Mesh Renderer** menghubungkan mesh ke proses rendering.
- Object dapat terlihat karena kerja sama **Mesh**, **Material**, **Shader**, **lighting**, **Camera**, dan **Render Pipeline**.
- Diagram `Mesh + Material + Renderer = Object dapat terlihat` menunjukkan hubungan fungsional, bukan struktur penyimpanan.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan memperluas hubungan ini dengan melihat peran **Material**, **Shader**, dan **Texture** dalam Pertemuan 12, sehingga mahasiswa dapat memahami bagaimana mesh yang dikirim oleh **Mesh Renderer** akhirnya menjadi object yang terlihat di layar.

---

## Slide 029 - Material, Shader, dan Texture dalam P12

### Narasi

Setelah kita membahas **Mesh Renderer**, langkah berikutnya adalah melihat komponen apa saja yang membuat objek tidak hanya memiliki bentuk, tetapi juga memiliki tampilan. Pada Pertemuan 12, kita cukup memahami hubungan antar komponen, bukan langsung masuk ke detail teknis yang lebih dalam.

Secara sederhana, objek yang terlihat dalam scene real-time biasanya berasal dari gabungan beberapa bagian:

```text
Mesh
+
Material
+
Shader
+
Texture
+
Renderer
→
Visible Object
```

Kita bisa membaca diagram ini dari kiri ke kanan. **Mesh** menyediakan geometri objek, misalnya posisi vertex, bentuk permukaan, dan data pendukung seperti normal atau UV coordinate. **Material** berperan sebagai pengatur sifat visual permukaan, misalnya warna dasar atau parameter tampilan. **Shader** adalah program yang menghitung bagaimana permukaan tersebut berubah menjadi warna yang akhirnya ditampilkan. **Texture** adalah data gambar yang dapat dipetakan ke permukaan mesh, sehingga objek tidak hanya memiliki warna datar, tetapi juga detail visual. **Renderer** kemudian menghubungkan semua komponen ini ke rendering pipeline, bersama kamera dan lighting, sehingga objek dapat diproses dan ditampilkan.

Penting untuk ditegaskan bahwa pada slide ini kita tidak perlu langsung memahami seluruh perhitungan lighting atau penulisan shader. Yang harus tertanam adalah hubungan fungsionalnya: tanpa renderer, mesh tidak masuk ke proses rendering; tanpa material dan shader, tampilan objek tidak dapat ditentukan dengan benar; tanpa texture, objek mungkin tetap terlihat tetapi kehilangan detail permukaan. Dengan kata lain, **visible object** bukan hanya hasil dari geometri, melainkan hasil dari kerja sama geometri, material, shader, texture, dan renderer.

Untuk Pertemuan 12, cukup sampai pada pemahaman bahwa komponen-komponen ini saling melengkapi dalam real-time rendering. Detail material dan lighting akan dibahas lebih lanjut pada Pertemuan 13, sedangkan custom shader akan dibahas pada Pertemuan 14.

### Inti yang Harus Ditekankan

- Pada P12, fokus utama adalah **hubungan komponen**, bukan detail lighting atau penulisan shader.
- **Mesh** memberi bentuk, **Material** mengatur sifat visual, **Shader** menghitung tampilan akhir, **Texture** memberi detail permukaan, dan **Renderer** menghubungkan semuanya ke rendering pipeline.
- Objek terlihat bukan hanya karena ada geometri, tetapi karena geometri, material, shader, texture, dan renderer bekerja bersama.
- Detail **lighting/material** dibahas pada P13, dan **custom shader** dibahas pada P14.

### Transisi ke Slide Berikutnya

Setelah kita memahami komponen apa saja yang membentuk tampilan objek, langkah berikutnya adalah melihat bagaimana objek tersebut masuk ke Unity dari sumber modeling. Pada slide berikutnya, kita akan membahas pipeline asset dari Blender ke Unity, mulai dari modeling, pemeriksaan transformasi, UV mapping, material/texture, hingga import dan scene assembly.

---

## Slide 030 - Pipeline Asset Blender → Unity

### Narasi

Sebelum model 3D bisa tampil benar di **Unity**, ia perlu melewati **pipeline asset** yang rapi. Alur di slide ini menunjukkan bagaimana aset yang dibuat di **Blender** disiapakan, diekspor, lalu diintegrasikan ke engine.

```text
Modeling di Blender
       ↓
Apply Transform
       ↓
Periksa Scale
       ↓
Periksa Origin
       ↓
Periksa Normal
       ↓
UV Mapping
       ↓
Material / Texture
       ↓
Export
       ↓
Import ke Unity
       ↓
Material Setup
       ↓
Scene Assembly
```

Kita bisa membaca alur ini dari atas ke bawah sebagai dua fase besar: **persiapan aset di Blender** dan **integrasi aset di Unity**. Fase pertama memastikan geometri, transformasi, permukaan, dan texture sudah benar. Fase kedua memastikan aset masuk ke scene dengan material dan penempatan yang sesuai.

Urutan tahapannya penting karena setiap tahap memperbaiki satu aspek aset:

1. **Modeling di Blender**: membangun bentuk dasar objek.
2. `Apply Transform`: mengunci transformasi objek agar nilai posisi, rotasi, dan skala tersimpan dengan konsisten.
3. `Periksa Scale`: memastikan ukuran objek tidak terlalu kecil atau terlalu besar saat masuk ke engine.
4. `Periksa Origin`: memastikan titik pusat objek berada di posisi yang logis untuk rotasi dan animasi.
5. `Periksa Normal`: memastikan arah permukaan objek benar agar pencahayaan tidak terlihat salah.
6. `UV Mapping`: menyiapkan koordinat texture agar texture menempel pada permukaan dengan benar.
7. `Material / Texture`: memberi sifat visual objek, seperti warna, kekasaran, atau pola permukaan.
8. `Export`: menyimpan aset dalam format yang dapat dibaca oleh engine.
9. `Import ke Unity`: membawa mesh, material, dan metadata ke project Unity.
10. `Material Setup`: menyesuaikan material di Unity agar sesuai dengan pipeline rendering engine.
11. `Scene Assembly`: menempatkan objek dalam scene bersama kamera, lighting, dan objek lain.

Pipeline ini penting karena **Unity** tidak hanya menampilkan file model apa adanya. Setelah diimpor, mesh akan melewati proses rendering seperti transformasi, rasterisasi, dan shading. Jika `Scale`, `Origin`, `Normal`, atau `UV Mapping` sudah salah sejak awal, masalahnya akan muncul pada posisi objek, rotasi, pencahayaan, atau tampilan texture.

Karena itu, mahasiswa perlu memahami bahwa **export** bukan tahap akhir. Kualitas tampilan akhir sangat ditentukan oleh persiapan aset sebelum export dan penyesuaian material setelah import.

### Inti yang Harus Ditekankan

- **Pipeline asset** adalah urutan kerja dari **Blender** ke **Unity**, bukan sekadar memindahkan file.
- Tahap `Apply Transform`, `Periksa Scale`, `Periksa Origin`, `Periksa Normal`, dan `UV Mapping` mencegah masalah posisi, rotasi, pencahayaan, dan texture.
- `Material Setup` dan `Scene Assembly` menentukan bagaimana aset akhirnya terlihat di dalam scene **Unity**.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan masuk ke persiapan aset di **Blender**, yaitu pengecekan yang perlu dilakukan sebelum aset diekspor ke **Unity**.

---

## Slide 031 - Persiapan Asset di Blender

### Narasi

Setelah kita melihat alur umum dari `Blender` ke `Unity`, ada satu tahap yang sering dianggap sepele tetapi sangat menentukan: **persiapan asset** sebelum `export`. Tahap ini bukan hanya soal membuat model terlihat rapi di `Blender`, tetapi juga memastikan bahwa asset tersebut siap masuk ke pipeline `Unity` tanpa menimbulkan masalah yang tidak perlu.

Intinya, sebelum asset diekspor, kita perlu melakukan semacam **audit kecil** terhadap objek 3D yang akan digunakan. Audit ini membantu kita menemukan masalah sejak awal, bukan setelah asset sudah berada di `Unity` dan mulai membingungkan saat setup material, penempatan scene, atau rendering.

Salah satu langkah pertama adalah **menghapus object yang tidak diperlukan**. Dalam proses modeling, sering kali muncul objek bantu, objek duplikat, objek tersembunyi, atau objek yang sudah tidak dipakai lagi. Jika dibiarkan, objek-objek ini bisa ikut terbawa saat `export`, membuat scene di `Unity` lebih berantakan, dan menyulitkan proses debugging.

Selanjutnya, kita perlu menggunakan **nama object yang jelas**. Nama seperti `Cube.001` atau `Mesh.002` memang sering muncul secara default, tetapi nama tersebut tidak membantu ketika kita sudah berada di `Unity`. Nama yang jelas, misalnya `chair_01`, `wall_north`, atau `door_main`, membuat scene assembly, penelusuran masalah, dan kerja tim menjadi jauh lebih mudah.

Setelah itu, kita perlu **cek geometry**. Geometry yang bersih berarti mesh tidak memiliki masalah yang mengganggu, seperti permukaan yang tidak konsisten, titik-titik longgar, atau bentuk yang tidak rapi. Geometry yang baik penting karena menjadi dasar bagi proses rendering, pencahayaan, dan pemetaan tekstur.

Kita juga perlu **cek normal**. Dalam grafika komputer, **normal** adalah arah permukaan objek yang digunakan oleh `shader` untuk menghitung `lighting`. Jika normal terbalik atau tidak konsisten, objek bisa terlihat aneh, misalnya bagian yang seharusnya terang menjadi gelap, atau material tampak salah. Masalah normal sering kali baru terlihat jelas setelah asset masuk ke engine rendering seperti `Unity`.

Langkah berikutnya adalah **cek UV**. `UV mapping` menentukan bagaimana tekstur ditempelkan ke permukaan objek. Jika `UV` tumpang tindih, terpotong, atau tidak rapi, tekstur bisa muncul salah posisi, peregangan, atau tidak sesuai dengan desain material. Karena itu, memeriksa `UV` sebelum `export` dapat mencegah masalah visual yang cukup merepotkan.

Kita juga perlu **cek material slot**. Objek 3D bisa memiliki beberapa material, misalnya satu objek kursi memiliki material kayu dan material kain. Jika ada material slot kosong, material yang tidak terpakai, atau penamaan material yang membingungkan, setup material di `Unity` akan menjadi lebih sulit. Material slot yang rapi membantu kita mengetahui material mana yang harus dikonfigurasi dan material mana yang bisa diabaikan.

Selain itu, kita perlu **cek ukuran object** dan **cek pivot/origin**. Ukuran objek yang konsisten membuat penempatan objek di scene menjadi lebih mudah. Sementara itu, `pivot` atau `origin` menentukan titik acuan transformasi objek, seperti rotasi, skala, dan animasi. Jika `origin` berada di posisi yang tidak masuk akal, objek bisa berputar atau bergerak tidak sesuai harapan ketika dipindahkan di `Unity`.

Tujuan utama dari semua pemeriksaan ini adalah **mengurangi masalah setelah asset masuk ke `Unity`**. Asset yang sudah disiapkan dengan baik akan lebih mudah diimpor, lebih mudah diatur, dan lebih stabil ketika digunakan dalam `rendering pipeline`. Dengan kata lain, persiapan di `Blender` adalah tahap kontrol kualitas sebelum asset benar-benar digunakan dalam pipeline real-time.

### Inti yang Harus Ditekankan

- **Persiapan asset** adalah tahap kontrol kualitas sebelum `export` dari `Blender` ke `Unity`.
- Objek yang tidak perlu, nama objek yang membingungkan, geometry buruk, normal salah, `UV` tidak rapi, material slot tidak jelas, ukuran tidak konsisten, dan `pivot/origin` yang salah dapat menimbulkan masalah di `Unity`.
- Asset yang rapi membuat proses `import`, `material setup`, `scene assembly`, dan `rendering` menjadi lebih mudah dan lebih stabil.

### Transisi ke Slide Berikutnya

Setelah asset sudah rapi dan siap diekspor, langkah berikutnya adalah memastikan bahwa ukuran dan unit objek sudah konsisten. Hal ini penting karena salah satu masalah paling umum setelah `import` adalah objek yang tiba-tiba terlalu besar atau terlalu kecil di `Unity`.

---

## Slide 032 - Scale dan Unit

### Narasi

Dalam pipeline 3D, salah satu masalah yang paling sering muncul adalah **object terlalu besar atau terlalu kecil setelah import**. Masalah ini biasanya tidak terlihat jelas saat asset masih berada di Blender, tetapi menjadi sangat jelas ketika asset masuk ke Unity dan diletakkan bersama objek lain.

Karena itu, kita perlu menggunakan **ukuran yang konsisten sejak Blender**. Artinya, ukuran object tidak boleh dibiarkan sembarangan. Jika satu object dibuat dengan skala yang berbeda dari object lain, hasil akhirnya bisa terlihat tidak proporsional, sulit diatur, dan tidak konsisten dalam scene.

Dalam Unity, ada aturan praktis yang umum digunakan:

```text
1 Unity unit
≈
1 meter
```

Artinya, ketika kita memodelkan asset di Blender, kita sebaiknya membayangkan ukuran dunia dalam skala meter. Misalnya, karakter, furnitur, atau elemen environment dibuat dengan ukuran yang masuk akal terhadap skala manusia dan ruang. Dengan cara ini, setelah masuk ke Unity, posisi, kamera, pencahayaan, dan interaksi antar objek lebih mudah dikendalikan.

Untuk asset environment, konsistensi ukuran sangat penting. Lingkungan 3D biasanya terdiri dari banyak object yang harus saling berhubungan secara spasial. Jika satu object terlalu besar atau terlalu kecil, seluruh scene bisa terasa tidak seimbang, dan proses penataan menjadi lebih sulit.

Sebelum lanjut, mahasiswa perlu memahami bahwa **scale dan unit bukan sekadar angka transformasi**, tetapi bagian dari konsistensi dunia 3D. Skala yang konsisten membantu asset tetap stabil ketika dipindahkan antar aplikasi, ditampilkan dalam rendering, dan digunakan bersama komponen lain di Unity.

### Inti yang Harus Ditekankan

- Masalah umum setelah import adalah **object terlalu besar atau terlalu kecil**.
- Gunakan **ukuran yang konsisten sejak Blender** agar asset lebih mudah dikelola di Unity.
- Aturan praktis umum: `1 Unity unit` ≈ `1 meter`.
- Untuk asset environment, konsistensi ukuran sangat penting agar scene tetap proporsional dan mudah diatur.

### Transisi ke Slide Berikutnya

Setelah memahami pentingnya skala dan unit, langkah berikutnya adalah memastikan transformasi object sudah rapi sebelum export. Pada slide berikutnya, kita akan membahas cara memeriksa `Location`, `Rotation`, dan `Scale` di Blender, serta mengapa target umum sebelum export adalah `Scale ≈ (1,1,1)`.

---

## Slide 033 - Apply Transform di Blender

### Narasi

Setelah kita memahami pentingnya konsistensi ukuran dan unit, langkah praktis berikutnya adalah memastikan transformasi objek sudah diterapkan sebelum export. Dalam Blender, objek memiliki nilai **Location**, **Rotation**, dan **Scale** yang bisa tersimpan sebagai transformasi objek. Nilai-nilai ini perlu diperiksa sebelum asset dibawa ke Unity, karena transformasi yang belum diterapkan dapat membuat objek berperilaku tidak konsisten setelah import.

Masalah yang paling sering muncul biasanya berkaitan dengan **Scale**. Jika skala objek tidak diterapkan, objek mungkin masih terlihat wajar di Blender, tetapi setelah masuk ke Unity bisa menimbulkan beberapa gejala:

- ukuran objek tampak aneh,
- collider tidak sesuai dengan bentuk objek,
- hierarchy menjadi membingungkan,
- transformasi sulit dikelola.

Target umum sebelum export adalah:

```text
Scale ≈ (1,1,1)
```

Artinya, skala objek sebaiknya mendekati satu pada sumbu X, Y, dan Z. Dengan kondisi ini, ukuran objek lebih mudah dikendalikan dan lebih konsisten dengan asset lain. Mahasiswa perlu memahami bahwa tujuan ini bukan hanya membuat angka terlihat rapi, tetapi agar pipeline rendering dan simulasi di Unity lebih stabil.

Perlu diingat, memeriksa transformasi bukan hanya soal tampilan objek. Dalam grafika komputer, transformasi menentukan bagaimana objek diposisikan, dirotasi, dan diskalakan dalam ruang dunia. Nilai transform yang tidak konsisten dapat memengaruhi penempatan asset, perilaku collider, dan hubungan antarobjek dalam scene. Oleh karena itu, sebelum export, kita biasakan memeriksa **Location**, **Rotation**, dan **Scale** sebagai bagian dari persiapan asset yang baik.

### Inti yang Harus Ditekankan

- Periksa **Location**, **Rotation**, dan **Scale** sebelum export dari Blender ke Unity.
- **Scale** yang tidak diterapkan dapat menyebabkan ukuran aneh, collider tidak sesuai, dan hierarchy membingungkan.
- Target umum sebelum export adalah `Scale ≈ (1,1,1)` agar transformasi lebih mudah dikelola.
- Kebiasaan ini membantu menjaga konsistensi ukuran, penempatan, dan perilaku objek di pipeline real-time.

### Transisi ke Slide Berikutnya

Setelah transformasi objek sudah rapi, langkah berikutnya adalah memperhatikan **origin** dan **pivot**. Titik ini menentukan dari mana objek diputar atau diposisikan setelah import, sehingga sangat penting untuk perilaku rotasi dan penempatan yang natural.

---

## Slide 034 - Origin dan Pivot

### Narasi

Ketika sebuah objek masuk dari Blender ke engine real-time, yang ikut terbawa bukan hanya bentuk mesh, tetapi juga **origin** atau **pivot** objek. Titik ini menjadi acuan utama ketika objek dipindahkan, diputar, atau di-scale. Jadi, meskipun model terlihat benar secara visual, jika origin berada di tempat yang tidak logis, perilaku objek setelah import bisa menjadi tidak wajar.

Dalam konteks transformasi, origin dapat kita bayangkan sebagai pusat koordinat lokal objek. Ketika objek dirotasi, rotasi itu terjadi mengelilingi titik origin. Ketika objek diposisikan, posisi tersebut juga merujuk pada titik acuan yang sama. Karena itu, origin bukan hanya titik kecil di viewport, tetapi bagian penting dari **object transform** yang akan digunakan oleh rendering pipeline untuk menghitung posisi akhir objek di ruang dunia.

Pivot yang buruk biasanya baru terasa saat objek digunakan. Misalnya, sebuah pintu yang origin-nya berada di tengah daun pintu akan berputar seperti papan yang berputar di pusatnya, bukan seperti pintu yang berputar di engsel. Akibatnya, animasi menjadi tidak natural, penempatan di scene menjadi sulit, dan objek bisa tampak “melompat” atau berputar dari titik yang salah.

Contoh yang sering muncul adalah:

```text
Door
→ pivot di sisi engsel

Wheel
→ pivot di pusat roda
```

Untuk pintu, pivot yang paling masuk akal berada di sisi engsel karena itulah sumbu rotasi yang sebenarnya. Untuk roda, pivot harus berada di pusat roda agar rotasi menghasilkan gerakan berputar yang benar. Jika pivot tidak sesuai fungsi objek, maka transformasi yang kita berikan tidak akan menghasilkan perilaku yang diharapkan.

Hal ini juga penting sebelum export. Setelah kita memeriksa `Location`, `Rotation`, dan `Scale` pada slide sebelumnya, langkah berikutnya adalah memastikan origin berada di titik yang benar. Origin yang tepat membuat objek lebih mudah diatur, lebih konsisten dalam hierarchy, dan lebih siap digunakan untuk animasi, collider, atau interaksi dalam aplikasi real-time.

### Inti yang Harus Ditekankan

- **Origin** atau **pivot** adalah titik acuan transformasi objek, bukan sekadar penanda visual.
- Pivot yang salah menyebabkan rotasi, penempatan, dan animasi menjadi tidak natural.
- Pilih pivot sesuai fungsi objek, misalnya engsel untuk pintu dan pusat untuk roda.
- Origin yang benar membantu objek berperilaku konsisten setelah import ke engine real-time.

### Transisi ke Slide Berikutnya

Setelah titik acuan objek sudah benar, kita perlu memeriksa aspek permukaan yang memengaruhi pencahayaan, yaitu **normal**.

---

## Slide 035 - Normal

### Narasi

Dalam grafika komputer, **normal** adalah vektor yang menunjukkan arah permukaan suatu objek. Secara intuitif, normal membantu kita memahami ke mana suatu permukaan menghadap. Informasi ini penting karena bentuk objek saja tidak cukup untuk menentukan bagaimana objek terlihat saat disinari.

Normal berperan besar dalam proses pencahayaan. Dalam rendering pipeline, nilai normal digunakan oleh shader untuk menghitung bagaimana cahaya berinteraksi dengan permukaan. Dengan kata lain, normal membantu menentukan apakah suatu bagian objek terlihat terang, gelap, atau memiliki shading yang wajar.

Masalah normal sering muncul saat asset dibuat, diedit, atau dipindahkan antar perangkat lunak. Beberapa gejalanya antara lain:

- permukaan terlihat **gelap** karena arah normal tidak sesuai,
- **lighting tidak benar** karena shader menggunakan arah permukaan yang salah,
- beberapa `face` tampak hilang atau tidak terlihat karena orientasi permukaan dianggap tidak menghadap ke arah yang benar.

Karena itu, sebelum export, kita perlu memeriksa apakah normal menghadap arah yang benar. Pemeriksaan ini penting karena normal yang salah kadang tidak terlihat jelas pada tampilan tertentu, tetapi akan berdampak besar saat objek dirender dengan pencahayaan atau digunakan dalam pipeline real-time.

Pada tahap ini, hal utama yang perlu dipahami mahasiswa adalah bahwa normal merupakan bagian penting dari data geometri. Jika normal salah, objek bisa terlihat rusak secara visual meskipun bentuk geometrinya sudah benar.

### Inti yang Harus Ditekankan

- **Normal** menentukan arah permukaan dan memengaruhi hasil pencahayaan.
- Normal yang salah dapat menyebabkan objek terlihat gelap, lighting tidak benar, atau beberapa `face` tampak hilang.
- Sebelum export, pastikan normal menghadap arah yang benar agar asset siap digunakan dalam rendering pipeline.

### Transisi ke Slide Berikutnya

Setelah memastikan geometri dan normal sudah benar, langkah berikutnya adalah memilih format asset yang akan digunakan untuk membawa model ke engine atau pipeline rendering.

---

## Slide 036 - Pilihan Format Asset

### Narasi

Setelah normal diperiksa, langkah berikutnya adalah memilih **format asset** yang akan dibawa ke pipeline rendering. Format ini menentukan bagaimana geometri, material, dan texture dibaca oleh engine seperti Unity.

Beberapa format yang umum adalah:

- `.fbx`
- `.obj`
- `.blend` melalui workflow tertentu
- `.gltf / .glb` pada pipeline tertentu

Kita tidak memilih format hanya karena file bisa dibuka. Yang lebih penting adalah **stabilitas workflow**, kemudahan kontrol, dan kemudahan verifikasi di engine.

Untuk praktikum dasar ini, pilihan yang paling aman adalah **FBX + texture files**. Artinya, model 3D diekspor sebagai `.fbx`, sedangkan texture disimpan sebagai file gambar terpisah yang kemudian diimpor ke Unity.

Pilihan ini memudahkan kita memeriksa apakah geometri, normal, material, dan texture masuk dengan benar. Jika ada masalah, kita bisa melacaknya ke bagian yang tepat: file `.fbx` untuk geometri dan transformasi, file texture untuk tampilan material.

Dalam konteks rendering pipeline, format asset adalah gerbang masuknya data ke tahap berikutnya. Asset yang salah format atau salah workflow dapat menyebabkan material hilang, texture tidak muncul, atau transformasi tidak konsisten sebelum proses rendering.

Sebelum lanjut, hal yang perlu dipahami adalah: **format bukan sekadar ekstensi file**, melainkan bagian dari pipeline produksi asset. Untuk praktikum ini, kita tetap pada workflow yang paling stabil dan mudah dikontrol.

### Inti yang Harus Ditekankan

- Gunakan **FBX + texture files** sebagai workflow dasar yang stabil.
- Format asset menentukan bagaimana geometri, material, dan texture masuk ke Unity.
- Jangan hanya memilih format berdasarkan ekstensi; perhatikan kontrol, kompatibilitas, dan kemudahan verifikasi.

### Transisi ke Slide Berikutnya

Setelah kita menetapkan pilihan **FBX + texture files**, langkah berikutnya adalah melakukan export FBX dari Blender dengan memperhatikan object, transform, naming, axis orientation, dan texture yang disertakan.

---

## Slide 037 - Export FBX dari Blender

### Narasi

Setelah kita menetapkan **FBX + texture files** sebagai workflow yang paling stabil untuk praktikum dasar, langkah berikutnya adalah melakukan **export FBX dari Blender**. Pada tahap ini, kita tidak hanya “menyimpan file”, tetapi juga menyiapkan data 3D agar bisa dibaca dengan benar oleh **Unity**.

**FBX** bukan sekadar file gambar atau file mesh biasa. Di dalamnya dapat terkandung informasi seperti **geometry**, **transform**, **hierarchy object**, dan referensi **material**. Karena itu, cara kita melakukan export akan sangat memengaruhi bagaimana asset tersebut muncul di **Unity**.

Hal pertama yang perlu diperhatikan adalah **hanya export object yang diperlukan**. Dalam file **Blender**, sering kali ada banyak object yang tidak kita butuhkan, misalnya object bantuan, kamera, lamp, empty, atau object tersembunyi. Jika semua object ikut diekspor, scene di **Unity** bisa menjadi tidak rapi dan sulit dikontrol.

Hal berikutnya adalah memastikan **transform** sudah benar. Transform mencakup **posisi**, **rotasi**, dan **scale**. Jika object di **Blender** sudah bergeser, miring, atau memiliki scale yang tidak konsisten, hasil di **Unity** bisa ikut meleset. Karena itu, sebelum export, kita perlu memeriksa apakah object berada pada posisi yang masuk akal dan scale-nya wajar.

Kita juga perlu mempertahankan **naming** yang jelas. Nama object dan material akan terbaca di **Unity**, sehingga memudahkan kita saat memilih object, mengecek material, atau mencari masalah. Nama yang acak atau tidak konsisten akan membuat proses kerja menjadi lebih lambat, terutama jika jumlah object bertambah.

Perhatikan juga **axis orientation**. **Blender** dan **Unity** dapat memiliki perbedaan cara orientasi sumbu. Jika orientasi sumbu tidak sesuai, object bisa tampak miring, menghadap ke arah yang salah, atau posisinya tidak seperti yang diharapkan. Masalah ini sering baru terlihat setelah asset masuk ke **Unity**, sehingga perlu diantisipasi sejak tahap export.

Selain itu, pastikan **geometry** yang dibutuhkan sudah benar-benar ikut ter-export. Artinya, mesh yang ingin ditampilkan di **Unity** harus ada, bukan hanya object kosong atau object yang tidak memiliki data mesh. Jika asset menggunakan texture, texture sebaiknya disimpan secara terpisah jika diperlukan, karena **Unity** biasanya akan mengelola texture sebagai file asset tersendiri.

Terakhir, setelah export selesai, jangan langsung menganggap asset pasti benar. Selalu lakukan **verifikasi di Unity**. Kita perlu memeriksa apakah object muncul dengan bentuk yang benar, scale-nya wajar, materialnya terbaca, dan orientasinya sesuai. Verifikasi ini penting karena proses export bisa menghasilkan file yang secara teknis berhasil, tetapi secara visual masih bermasalah.

### Inti yang Harus Ditekankan

- **Export FBX** adalah tahap penting untuk memindahkan data 3D dari **Blender** ke **Unity**.
- Kita harus memastikan hanya **object yang diperlukan** yang ikut ter-export.
- **Transform**, **naming**, **axis orientation**, dan **geometry** harus diperiksa sebelum export.
- Texture dapat disimpan secara terpisah jika diperlukan.
- Setelah export, asset harus selalu diverifikasi di **Unity** sebelum digunakan lebih lanjut.

### Transisi ke Slide Berikutnya

Setelah file **FBX** siap dan hasil export sudah diperiksa, langkah berikutnya adalah memasukkan asset tersebut ke **Unity** melalui folder `Assets/Models/`, lalu memeriksa hasil importnya.

---

## Slide 038 - Import Asset ke Unity

### Narasi

Setelah file FBX siap dari Blender, langkah berikutnya adalah membawa asset tersebut ke Unity. Kita biasanya meletakkan file ke folder:

```text
Assets/Models/
```

Penempatan folder ini penting karena Unity membaca asset dari struktur project. Folder yang rapi memudahkan kita menemukan model, material, dan file pendukung lain saat alur kerja berlanjut.

**Import** di Unity bukan sekadar menyalin file ke dalam project. Unity akan membaca file FBX dan membuat representasi internal yang bisa dipakai di **Scene**, seperti bentuk model, preview, dan informasi material. Karena proses ini otomatis, hasilnya tetap perlu diperiksa; file yang berhasil masuk belum tentu langsung sesuai kebutuhan rendering.

Setelah import selesai, kita lakukan pemeriksaan awal dengan urutan berikut:

1. Pilih model di project.
2. Lihat `Inspector` untuk melihat informasi asset.
3. Periksa **preview** apakah bentuk model sesuai.
4. Periksa **scale** agar ukuran model wajar.
5. Periksa **material** agar tampilan permukaan tidak hilang atau salah.
6. Drag model ke **Scene** untuk melihatnya dalam konteks adegan.

Pemeriksaan ini penting karena masalah kecil pada tahap import sering terlihat kemudian sebagai model yang terlalu besar, terlalu kecil, posisi salah, atau material yang tidak muncul. Dengan memeriksa **preview**, **scale**, dan **material** lebih awal, kita bisa memastikan asset siap digunakan sebelum masuk ke pengaturan yang lebih detail.

Langkah drag model ke **Scene** juga menandai bahwa asset sudah menjadi bagian dari adegan yang akan dirender. Pada tahap ini, kita belum perlu mengatur semua detail teknis model; yang utama adalah memastikan asset sudah terbaca dengan benar oleh Unity dan terlihat wajar di lingkungan real-time.

### Inti yang Harus Ditekankan

- Asset diletakkan di `Assets/Models/` agar mudah dikelola dalam project Unity.
- **Import** membuat Unity membaca file dan menyiapkan representasi internal untuk dipakai di **Scene**.
- Pemeriksaan awal meliputi **preview**, **scale**, **material**, dan penempatan model ke **Scene**.
- Verifikasi setelah import penting sebelum lanjut ke pengaturan import yang lebih detail.

### Transisi ke Slide Berikutnya

Setelah asset masuk dan terlihat wajar, langkah berikutnya adalah mengatur **Model Import Settings**, seperti `Scale Factor`, opsi mesh, normals, dan material, agar model benar-benar siap digunakan.

---

## Slide 039 - Model Import Settings

### Narasi

Setelah model masuk ke `Assets/Models/`, langkah berikutnya adalah mengatur cara Unity membaca dan menyiapkan model tersebut. Proses ini terjadi di **Model Import Settings**, yaitu bagian yang menentukan bagaimana file 3D dari luar dikonversi menjadi aset yang siap digunakan di scene.

Pengaturan ini penting karena model yang diimpor sering kali memiliki satuan, skala, orientasi, atau struktur material yang berbeda dari standar proyek. Jika pengaturan import salah, masalahnya tidak hanya terlihat pada tampilan objek, tetapi juga dapat memengaruhi pencahayaan, posisi kamera, dan hasil rendering secara keseluruhan.

Beberapa pengaturan utama yang perlu kita perhatikan adalah:

- **Scale Factor**, untuk menyesuaikan ukuran model agar sesuai dengan satuan scene.
- **mesh options**, untuk mengatur bagaimana geometri mesh diimpor.
- **normals**, yaitu arah permukaan objek yang sangat penting untuk perhitungan pencahayaan.
- **tangents**, yang biasanya digunakan untuk teknik pemetaan normal atau detail permukaan tertentu.
- **materials**, untuk memastikan material dan shader yang terhubung ke model sudah benar.
- **rig**, untuk model yang memiliki tulang atau struktur animasi.
- **animation**, untuk data animasi yang ikut diimpor bersama model.

Untuk asset prop statis, seperti meja, kursi, batu, atau dekorasi lingkungan, kita tidak perlu memproses semua pengaturan secara mendalam. Fokus utamanya adalah **geometry**, **scale**, **normals**, dan **material**. Geometri menentukan bentuk objek, skala menentukan ukuran objek di scene, normals menentukan bagaimana cahaya jatuh pada permukaan, dan material menentukan tampilan visual objek saat dirender.

Hal ini penting karena prop statis akan masuk ke rendering pipeline sebagai geometri yang relatif tetap. Verteks dan normal dari model akan digunakan oleh GPU untuk transformasi, rasterisasi, dan pencahayaan. Jika skala terlalu besar atau terlalu kecil, objek bisa tidak proporsional. Jika normals salah, pencahayaan bisa terlihat aneh, misalnya permukaan yang seharusnya terang menjadi gelap atau sebaliknya.

Sebelum lanjut ke tahap verifikasi, mahasiswa perlu memahami bahwa import settings bukan sekadar “memasukkan file”, tetapi tahap persiapan data 3D agar model dapat dirender dengan benar. Untuk prop statis, kita cukup memastikan bahwa bentuk, ukuran, arah permukaan, dan material sudah masuk akal.

### Inti yang Harus Ditekankan

- **Model Import Settings** menentukan bagaimana Unity menginterpretasi model 3D yang diimpor.
- Untuk prop statis, fokus utama adalah **geometry**, **scale**, **normals**, dan **material**.
- **Scale Factor** penting agar ukuran objek sesuai dengan satuan dan skala scene.
- **Normals** memengaruhi pencahayaan; jika salah, tampilan objek bisa terlihat tidak wajar.
- Pengaturan seperti **rig** dan **animation** lebih relevan untuk karakter atau model yang dianimasikan, bukan prop statis.

### Transisi ke Slide Berikutnya

Setelah pengaturan import disesuaikan, langkah berikutnya adalah memverifikasi apakah model sudah benar-benar siap digunakan. Pada slide berikutnya, kita akan melihat checklist sederhana untuk memeriksa ukuran, orientasi, pivot, normal, texture, material, dan struktur hierarchy sebelum scene dibangun lebih lanjut.

---

## Slide 040 - Verifikasi Setelah Import

### Narasi

Setelah model masuk ke proyek, langkah berikutnya bukan langsung menyusun scene, tetapi memastikan asset tersebut benar-benar siap dipakai. Pada tahap ini kita melakukan **verifikasi setelah import**, yaitu memeriksa apakah geometri, transformasi, material, dan struktur objek sudah sesuai dengan kebutuhan scene.

Checklist sederhana yang perlu kita lihat adalah:

```text
[ ] Ukuran benar
[ ] Orientasi benar
[ ] Pivot benar
[ ] Normal benar
[ ] Texture benar
[ ] Material benar
[ ] Tidak ada object tidak perlu
[ ] Hierarchy mudah dipahami
```

Poin pertama biasanya paling mudah terlewat: **ukuran**. Jika `Scale Factor` salah, objek bisa terlalu kecil, terlalu besar, atau tidak cocok dengan satuan scene. Akibatnya, kamera, collision, pencahayaan, dan proporsi objek lain bisa terasa tidak natural.

Selanjutnya kita periksa **orientasi** dan `pivot`. Orientasi menentukan apakah sumbu objek menghadap ke arah yang benar, misalnya sumbu `Y` sebagai up axis atau sumbu `Z` sebagai forward axis. `Pivot` penting karena menjadi titik acuan untuk `transform`, rotasi, animasi, dan penempatan objek. Jika pivot berada di posisi yang aneh, objek bisa berputar atau bergerak tidak sesuai ekspektasi.

Untuk tampilan visual, kita perlu memeriksa `normal`, `texture`, dan `material`. `Normal` memengaruhi bagaimana permukaan objek berinteraksi dengan `lighting`; jika normal salah, objek bisa terlihat gelap, terbalik, atau memiliki shading yang aneh. `Texture` harus menempel pada `UV` yang benar, tidak terbalik, tidak stretch, dan tidak salah tiling. `Material` juga perlu diperiksa, misalnya `albedo`, `roughness`, `metallic`, transparansi, atau `double-sided`, karena material menentukan bagaimana `shader` memproses tampilan akhir objek.

Selain itu, kita perlu memastikan tidak ada **object tidak perlu** yang ikut terimport, seperti helper, duplicate, rig, animasi, atau mesh cadangan yang tidak digunakan. Object berlebih dapat membingungkan, menambah beban scene, dan kadang memicu masalah pada `hierarchy`. Struktur `hierarchy` yang rapi juga penting karena memudahkan kita memahami parent-child, memilih objek, membuat `prefab`, dan menjaga scene tetap terbaca.

Intinya, verifikasi ini bukan sekadar formalitas. Masalah kecil pada asset dapat membesar saat masuk ke `rendering pipeline`: geometri yang salah memengaruhi `geometry processing`, material yang salah memengaruhi `shader`, normal yang salah memengaruhi `lighting`, dan hasil akhirnya akan terlihat pada `framebuffer` yang ditampilkan ke layar. Karena itu, kita tidak disarankan untuk lanjut membangun scene sebelum masalah utama asset selesai.

### Inti yang Harus Ditekankan

- **Verifikasi setelah import** adalah langkah kontrol kualitas sebelum asset dipakai di scene.
- Masalah pada `scale`, `pivot`, `normal`, `texture`, `material`, atau `hierarchy` dapat memengaruhi tampilan, transformasi, lighting, dan performa scene.
- Asset yang bersih dan terstruktur membuat proses rendering, debugging, dan pengembangan scene menjadi lebih stabil.

### Transisi ke Slide Berikutnya

Setelah asset terverifikasi dan siap dipakai, kita akan melihat bagaimana scene diproses secara berulang menjadi gambar yang tampil di layar, yaitu melalui **real-time rendering pipeline**.

---

## Slide 041 - Real-Time Rendering Pipeline

### Narasi

Setelah asset sudah masuk dan diverifikasi, kita perlu memahami proses yang mengubah scene menjadi gambar yang tampil di layar. Dalam grafika komputer, **real-time rendering** adalah proses menghasilkan **frame** dari scene secara berulang, biasanya puluhan kali per detik, sehingga aplikasi atau game terasa interaktif.

Secara konseptual, alurnya dapat dibaca dari atas ke bawah:

```text
Scene Data
   ↓
Visibility
   ↓
Geometry Processing
   ↓
Material + Shader
   ↓
Rasterization
   ↓
Lighting
   ↓
Post Processing
   ↓
Framebuffer
   ↓
Display
```

Setiap baris pada diagram itu mewakili tahap yang mengubah data scene menjadi citra akhir. Tahap-tahap tersebut dapat dipahami sebagai berikut:

1. **Scene Data** adalah informasi awal yang tersedia di scene, misalnya objek, mesh, transformasi, material, kamera, dan parameter lingkungan.
2. **Visibility** menentukan objek mana yang perlu diproses lebih lanjut, misalnya objek yang berada di luar kamera atau tidak terlihat dapat dikurangi beban prosesnya.
3. **Geometry Processing** memproses bentuk objek, termasuk transformasi koordinat dari ruang objek menuju ruang kamera atau ruang layar.
4. **Material + Shader** menentukan bagaimana permukaan objek akan terlihat, misalnya warna, tekstur, kekasaran, atau perilaku visual lainnya.
5. **Rasterization** mengubah bentuk geometris menjadi elemen-elemen piksel atau fragmen yang dapat diwarnai.
6. **Lighting** memberikan perhitungan pencahayaan sehingga objek memiliki terang, gelap, dan kesan volume.
7. **Post Processing** menambahkan efek akhir pada gambar, misalnya penyesuaian warna atau efek visual lain.
8. **Framebuffer** adalah buffer gambar yang menyimpan hasil akhir sebelum ditampilkan.
9. **Display** menampilkan frame ke layar pengguna.

Penting untuk dipahami bahwa pipeline ini bukan hanya urutan nama tahap, tetapi alur data. Setiap tahap menerima input dari tahap sebelumnya dan menghasilkan output yang lebih siap untuk tahap berikutnya. Dalam konteks GPU, banyak tahap ini diproses secara paralel dan sangat memengaruhi performa, karena setiap frame harus dihasilkan dalam waktu yang sangat singkat.

Pemahaman pipeline juga membantu kita membaca masalah rendering secara lebih sistematis. Jika objek tidak muncul, kita bisa mengecek apakah masalahnya ada pada scene data, visibility, transformasi, material, atau framebuffer. Jika gambar terlihat salah warna, kita bisa mengarahkan pemeriksaan ke shader, lighting, atau post processing. Dengan kata lain, pipeline memberi kita peta mental untuk memahami bagaimana scene menjadi gambar.

Sebelum masuk ke detail teknis Unity, yang perlu kita pegang adalah bahwa real-time rendering adalah proses berulang yang mengubah scene menjadi frame melalui serangkaian tahap. Kita belum perlu membahas implementasi lengkapnya, tetapi kita harus bisa membaca alur dari **Scene Data** sampai **Display** sebagai dasar untuk memahami render pipeline.

### Inti yang Harus Ditekankan

- **Real-time rendering** menghasilkan frame secara berulang dari scene, bukan hanya sekali.
- Diagram pipeline dibaca sebagai alur data: dari **Scene Data** menuju **Display**.
- Setiap tahap memiliki peran: menentukan objek yang terlihat, memproses geometri, menerapkan material dan shader, merasterisasi, memberi pencahayaan, lalu menampilkan hasil.
- Pemahaman pipeline membantu debugging dan analisis performa rendering.
- Konsep ini menjadi dasar untuk memahami keputusan teknis dalam render pipeline.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan memperjelas apa yang dimaksud dengan **Render Pipeline** dan bagaimana pipeline mengatur keputusan penting dalam proses rendering.

---

## Slide 042 - Apa Itu Render Pipeline?

### Narasi

**Render pipeline** dapat kita pahami sebagai alur kerja yang mengatur bagaimana sebuah **Scene** diubah menjadi gambar akhir yang tampil di layar. Ia bukan sekadar satu proses tunggal, melainkan rangkaian keputusan dan tahapan yang menentukan apa yang diproses, bagaimana diproses, dan kapan diproses.

Dalam grafika komputer, konsep ini penting karena gambar 3D tidak muncul secara langsung dari data objek. Ada banyak informasi yang harus ditangani, seperti posisi kamera, geometri objek, material, cahaya, objek transparan, dan target tampilan akhir. Render pipeline membantu mengorganisasi informasi tersebut agar proses rendering tetap konsisten, dapat dikontrol, dan efisien.

Kita bisa membayangkannya seperti lini produksi: data scene masuk, lalu sistem menentukan objek mana yang perlu dirender, `shader` apa yang digunakan, bagaimana `lighting` diproses, bagaimana `shadow` dihitung, kapan objek transparan digambar, dan bagaimana hasil akhir dikirim ke layar.

Poin pentingnya adalah pipeline menentukan **urutan keputusan**. Urutan ini penting karena beberapa proses saling bergantung. Misalnya, objek yang tidak terlihat tidak perlu diproses lebih jauh. Objek transparan biasanya perlu digambar setelah objek yang tidak transparan agar hasil blending terlihat benar. Dan proses `lighting` serta `shadow` memengaruhi warna akhir objek sebelum hasil dikirim ke layar.

Beberapa keputusan utama yang diatur oleh render pipeline antara lain:

- objek mana yang dirender,
- `shader` apa yang digunakan,
- bagaimana `lighting` diproses,
- bagaimana `shadow` dihitung,
- kapan transparansi dirender,
- bagaimana hasil dikirim ke layar.

Dalam konteks Unity 3D, render pipeline menjadi lapisan yang mengatur cara engine mengubah scene menjadi frame. Mahasiswa perlu memahami bahwa ketika kita mengubah material, `shader`, pencahayaan, atau pengaturan render, yang kita ubah sebenarnya adalah perilaku pipeline, bukan hanya tampilan objek secara langsung.

Sebelum lanjut, hal yang harus dipahami adalah: render pipeline bukan hanya “cara gambar dibuat”, tetapi juga aturan keputusan rendering. Ia menentukan apa yang dirender, bagaimana objek diberi material dan cahaya, dan bagaimana hasil akhir sampai ke layar.

### Inti yang Harus Ditekankan

- **Render pipeline** adalah rangkaian proses dan keputusan yang mengubah **Scene** menjadi gambar akhir.
- Pipeline mengatur urutan rendering, termasuk pemilihan objek, `shader`, `lighting`, `shadow`, transparansi, dan output ke layar.
- Memahami pipeline penting untuk mengontrol kualitas visual, performa, dan perilaku rendering dalam Unity 3D.

### Transisi ke Slide Berikutnya

Setelah kita memahami apa yang diatur oleh render pipeline, langkah berikutnya adalah melihat mengapa dalam praktik kita memilih **URP** sebagai pipeline yang digunakan.

---

## Slide 043 - Mengapa Menggunakan URP?

### Narasi

Setelah kita memahami bahwa **render pipeline** adalah rangkaian proses yang mengubah scene menjadi gambar akhir, langkah berikutnya adalah memilih pipeline yang sesuai untuk praktik. **URP** menjadi pilihan yang relevan karena ia menyediakan lingkungan yang praktis untuk mempelajari grafika komputer real-time di Unity.

Alasan utamanya bukan hanya karena URP “mudah dipakai”, tetapi karena ia menghubungkan konsep-konsep inti yang akan kita pelajari: scene, kamera, material, shader, lighting, dan output ke layar. Dengan URP, mahasiswa dapat melihat bagaimana keputusan rendering memengaruhi hasil visual dan performa.

Beberapa alasan URP cocok untuk pembelajaran adalah:

- **Mendukung banyak platform** — scene yang sama dapat diuji pada perangkat dengan kemampuan berbeda, sehingga mahasiswa memahami bahwa rendering selalu berkaitan dengan batas hardware.
- **Workflow modern** — alur kerja di Unity menjadi lebih rapi dan sesuai dengan praktik pengembangan real-time graphics saat ini.
- **Terintegrasi dengan `Shader Graph`** — mahasiswa dapat membangun shader secara visual, sehingga lebih mudah memahami peran shader dalam pipeline sebelum masuk ke kode shader yang lebih kompleks.
- **Mendukung `lighting` real-time** — pencahayaan dapat dihitung secara langsung saat aplikasi berjalan, yang penting untuk objek 3D interaktif.
- **Mendukung `post-processing`** — hasil rendering dapat diproses lebih lanjut sebelum ditampilkan, sehingga mahasiswa dapat mengamati tahap akhir pipeline.
- **Cocok untuk project 3D interaktif** — URP membantu membangun adegan yang tetap responsif, bukan hanya menghasilkan gambar statis.
- **Menyediakan keseimbangan kualitas dan performa** — dalam rendering real-time, kualitas visual tidak boleh mengorbankan kecepatan frame secara berlebihan.

Poin terakhir sangat penting. Dalam grafika komputer, kita tidak hanya mengejar gambar yang indah, tetapi juga gambar yang dapat dihasilkan dalam waktu yang sangat singkat setiap frame. URP membantu kita memahami trade-off ini: semakin banyak efek, lighting, atau detail visual, semakin besar beban pada GPU dan pipeline.

Sebelum masuk ke arsitektur teknisnya, yang perlu dipahami mahasiswa adalah bahwa URP bukan sekadar fitur tambahan, melainkan sistem yang mengatur bagaimana rendering dijalankan di Unity.

### Inti yang Harus Ditekankan

- **URP** dipilih karena cocok untuk pembelajaran real-time rendering di Unity.
- URP menghubungkan konsep **scene**, **kamera**, **shader**, **lighting**, dan **post-processing** dalam satu pipeline yang praktis.
- URP menekankan keseimbangan antara **kualitas visual** dan **performa**, yang menjadi inti dari rendering real-time.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana URP berada dalam arsitektur Unity dan bagaimana alur rendering dari scene hingga tampilan akhir di `Game View`.

---

## Slide 044 - URP dalam Arsitektur Unity

### Narasi

Kita bisa membaca diagram ini sebagai alur kerja dari data scene hingga gambar yang muncul di layar.

```text
Scene
  ↓
Camera
  ↓
URP Pipeline
  ↓
Renderer
  ↓
Shader + Material
  ↓
GPU
  ↓
Framebuffer
  ↓
Game View
```

Tujuan diagram ini adalah menunjukkan urutan proses rendering dalam Unity ketika menggunakan **URP**. Alurnya dibaca dari atas ke bawah: data scene diolah, diatur, dirender, disimpan, lalu ditampilkan.

Pada tahap paling atas, `Scene` berisi objek 3D, transformasi, material, dan kamera. Ini adalah “dunia” yang akan dirender.

`Camera` menentukan sudut pandang dan batas area yang terlihat. Tanpa kamera, objek di scene belum tentu menjadi gambar yang bisa dilihat.

`URP Pipeline` adalah lapisan pengatur. Ia mengatur bagaimana proses rendering dijalankan, apa yang perlu diproses, dan bagaimana tahap-tahapnya terhubung.

`Renderer` dapat dipahami sebagai tahap yang menyiapkan dan meneruskan objek untuk digambar. Di sinilah data scene mulai diterjemahkan menjadi perintah visual yang lebih konkret.

`Shader + Material` menentukan bagaimana permukaan objek tampak: warna, tekstur, respons terhadap cahaya, dan efek visual lainnya.

`GPU` kemudian mengeksekusi proses rendering secara paralel. Di sinilah perhitungan posisi, warna, dan tampilan objek dilakukan dengan cepat.

Hasilnya disimpan ke `Framebuffer`, yaitu area yang menyimpan piksel yang sudah dirender. Setelah itu, `Game View` menampilkan gambar akhir yang bisa dilihat pengguna.

Inti pentingnya adalah: **URP** tidak hanya “menampilkan objek”, tetapi mengatur alur kerja rendering secara keseluruhan. Pemahaman ini membantu kita membaca masalah visual, misalnya objek tidak muncul, kamera salah, material tidak benar, atau hasil render tidak sesuai.

### Inti yang Harus Ditekankan

- `URP` berperan sebagai **pengatur pipeline rendering**, bukan sekadar komponen tampilan.
- Alur dari `Scene` ke `Game View` menunjukkan bagaimana data 3D diubah menjadi gambar 2D di layar.
- `Shader + Material` menentukan tampilan permukaan, sedangkan `GPU` dan `Framebuffer` menentukan eksekusi dan penyimpanan hasil render.
- Memahami alur ini penting sebelum membahas performa, karena setiap tahap memengaruhi kecepatan dan kualitas rendering.

### Transisi ke Slide Berikutnya

Setelah kita melihat alur besar URP, langkah berikutnya adalah memahami sisi performa real-time: bagaimana `Draw Call`, `Culling`, dan `Frame Budget` memengaruhi kecepatan rendering.

---

## Slide 045 - Draw Call, Culling, dan Frame Budget

### Narasi

Setelah URP mengatur alur rendering, ada tiga istilah yang sering muncul saat kita menilai apakah scene berjalan mulus: **culling**, **draw call**, dan **frame budget**. Ketiganya menjadi pengantar untuk memahami performa real-time, bukan detail optimasi yang langsung kita dalami pada pertemuan ini.

Secara sederhana, slide ini merangkumnya sebagai berikut:

```text
Culling
→ mengurangi object yang perlu dirender

Draw Call
→ perintah render CPU ke GPU

Frame Budget
→ waktu maksimum satu frame
```

Secara konseptual, ketiganya dapat dibaca sebagai berikut:

- **Culling** adalah proses mengurangi `object` yang perlu dirender. Dalam pipeline, ini membantu menyaring objek sebelum masuk ke `Renderer` dan `Shader`, sehingga tidak semua objek dalam scene diproses lebih jauh.
- **Draw Call** adalah perintah render dari `CPU` ke `GPU`. Setiap draw call dapat dipahami sebagai permintaan untuk menggambar objek; semakin banyak draw call, semakin banyak perintah yang harus dikirim dan diproses.
- **Frame Budget** adalah waktu maksimum untuk satu frame. Rendering real-time harus selesai dalam batas waktu ini agar frame berikutnya tidak tertunda dan tampilan tetap stabil.

Ketiganya saling berkaitan: **culling** mengurangi jumlah objek yang perlu diproses, **draw call** menentukan seberapa banyak perintah rendering yang dikirim ke `GPU`, dan **frame budget** menjadi batas waktu yang harus dipenuhi oleh seluruh proses. Pada slide ini kita cukup memahami peran ketiganya sebagai pengantar performa; analisis dan optimization mendalam dilakukan pada **Pertemuan 15**.

### Inti yang Harus Ditekankan

- **Culling** mengurangi `object` yang perlu dirender, sehingga beban pipeline lebih ringan.
- **Draw Call** adalah perintah render dari `CPU` ke `GPU`, bukan sekadar gambar objek di layar.
- **Frame Budget** adalah batas waktu maksimum untuk satu frame; jika dilewati, performa real-time bisa menurun.
- Ketiga konsep ini menjadi dasar untuk menilai performa scene sebelum masuk ke optimasi lebih lanjut.

### Transisi ke Slide Berikutnya

Setelah memahami istilah performa dasar ini, langkah berikutnya adalah membangun scene Unity secara terstruktur. Kita akan melihat workflow dari `Create URP Project` hingga `Inspect Performance`, sehingga kita bisa menghubungkan konsep performa dengan praktik pembuatan scene.

---

## Slide 046 - Workflow Membangun Scene Unity

### Narasi

Dalam membangun scene Unity, alur kerja yang rapi membantu kita memastikan setiap elemen visual sudah benar sebelum masuk ke tahap rendering. Alur ini ditampilkan sebagai pipeline sederhana dari persiapan project hingga pengecekan hasil akhir:

```text
Create URP Project
      ↓
Organize Folder
      ↓
Import Blender Asset
      ↓
Verify Scale + Pivot
      ↓
Create Material
      ↓
Assign Texture
      ↓
Assemble Environment
      ↓
Place Camera
      ↓
Basic Lighting
      ↓
Run Game View
      ↓
Inspect Performance
```

Kita membaca alur ini dari atas ke bawah sebagai urutan validasi. Tahap awal memastikan lingkungan kerja dan asset sudah siap, tahap tengah memastikan objek memiliki tampilan yang benar, dan tahap akhir memastikan scene dapat dilihat serta dievaluasi performanya.

- `Create URP Project` : menyiapkan project dengan **Universal Render Pipeline** agar rendering berjalan sesuai pipeline real-time yang kita gunakan.
- `Organize Folder` : menata asset agar mudah ditemukan, terutama ketika scene bertambah kompleks.
- `Import Blender Asset` : membawa geometri atau model yang dibuat di `Blender` ke Unity.
- `Verify Scale + Pivot` : memeriksa ukuran dan titik asal objek agar transformasi, penempatan, dan orientasinya tidak salah.
- `Create Material` : membuat material yang menentukan bagaimana permukaan objek berinteraksi dengan cahaya.
- `Assign Texture` : memberikan detail visual pada material, seperti warna, pola, atau permukaan.
- `Assemble Environment` : menyusun objek-objek menjadi satu lingkungan scene.
- `Place Camera` : menempatkan kamera sebagai mata penonton yang menentukan apa yang terlihat dan bagaimana proyeksi scene ditampilkan.
- `Basic Lighting` : menambahkan pencahayaan dasar agar objek memiliki shading dan kedalaman visual.
- `Run Game View` : menjalankan scene untuk melihat hasil rendering dari perspektif kamera.
- `Inspect Performance` : memeriksa apakah scene masih berjalan lancar, misalnya dari sisi frame rate dan beban rendering.

Poin penting yang perlu dipahami mahasiswa adalah bahwa workflow ini bukan sekadar daftar langkah teknis, melainkan cara membangun scene secara terkontrol. Jika **scale** atau **pivot** salah, objek bisa terlihat terlalu besar, terlalu kecil, atau berputar tidak sesuai meskipun geometrinya benar. Jika material atau texture belum benar, scene bisa terlihat kosong atau tidak sesuai desain. Jika kamera dan lighting belum diatur, kita belum bisa menilai hasil visual secara adil.

Tahap `Inspect Performance` juga penting karena scene yang secara visual menarik belum tentu efisien. Dalam konteks grafika komputer, hasil akhir harus dinilai dari dua sisi: apakah objek terlihat benar, dan apakah rendering masih dapat berjalan dalam batas waktu frame yang wajar.

### Inti yang Harus Ditekankan

- Workflow membangun scene Unity adalah **alur validasi**: project, asset, transformasi, material, scene, kamera, lighting, hasil visual, dan performa.
- `Verify Scale + Pivot` menentukan apakah objek memiliki transformasi yang benar sebelum ditampilkan.
- `Place Camera` dan `Basic Lighting` adalah tahap penting sebelum menilai hasil rendering secara visual.
- `Inspect Performance` menghubungkan proses membangun scene dengan konsep performa real-time seperti frame budget dan beban rendering.

### Transisi ke Slide Berikutnya

Setelah alur kerja ini dipahami, kita akan menerapkannya secara langsung pada praktikum. Pada slide berikutnya, mahasiswa akan melakukan import asset `Blender`, membangun scene `URP`, mengatur kamera dan lighting, lalu memeriksa hasil melalui `Game View`.

---

## Slide 047 - Praktikum: Import Asset & Build Scene URP

### Narasi

Pada praktikum ini, kita akan menguji alur kerja yang baru saja kita lihat: membawa objek dari **Blender** ke **Unity** dan menjadikannya bagian dari scene **URP** yang dapat dijalankan. Fokusnya bukan membuat aset yang rumit, tetapi memastikan pipeline dasar berjalan: geometri masuk, material terbentuk, kamera melihat, dan lighting membuat objek terlihat.

Mahasiswa akan menyiapkan minimal beberapa asset Blender, lalu mengekspor dan mengimpor asset tersebut ke Unity. Setelah asset masuk, langkah penting berikutnya adalah memeriksa **scale** dan **orientation**. Jika ukuran atau arah objek salah, scene akan terlihat tidak konsisten meskipun geometri sebenarnya sudah benar.

Selanjutnya, kita membuat **material URP** dan menyusun **mini environment**. Material menentukan bagaimana permukaan objek berinteraksi dengan cahaya dan tekstur, sedangkan environment memberi konteks spasial bagi kamera. Setelah itu, kita mengatur `Camera`, menambahkan **basic lighting**, dan memeriksa hasil melalui `Game View`.

Dalam konteks rendering pipeline, praktikum ini memperlihatkan tahap sebelum rendering penuh: aset dan material sudah tersedia, kamera menentukan apa yang terlihat, dan lighting memberi informasi pencahayaan yang akan diproses oleh shader URP. Dengan kata lain, kita sedang menyiapkan input visual agar pipeline real-time dapat menghasilkan gambar yang benar.

Sebelum lanjut, mahasiswa perlu memahami bahwa masalah umum pada tahap ini biasanya bukan pada algoritma rendering, tetapi pada data aset: skala tidak sesuai, pivot salah, orientasi terbalik, atau material belum di-`assign` dengan benar. Detail langkah teknis dapat diikuti pada **Modul Praktikum Pertemuan 12**.

### Inti yang Harus Ditekankan

- Asset Blender harus diekspor dan diimpor ke Unity sebagai bagian dari scene URP.
- **Scale** dan **orientation** harus diverifikasi agar objek konsisten dalam scene.
- **Material URP**, `Camera`, dan **basic lighting** adalah komponen minimal untuk melihat hasil rendering.
- `Game View` digunakan untuk memeriksa apakah scene sudah terbentuk secara visual.

### Transisi ke Slide Berikutnya

Setelah memahami tujuan praktikum, kita akan melihat urutan rencana kerja yang lebih rinci pada slide berikutnya.

---

## Slide 048 - Rencana Praktikum

### Narasi

Rencana praktikum ini menunjukkan alur kerja yang harus diikuti mahasiswa ketika membawa asset Blender ke Unity 6 dengan `URP`. Alur ini penting karena asset 3D tidak cukup hanya “masuk” ke editor; ia harus melalui tahap validasi, penataan struktur scene, dan verifikasi visual sebelum bisa menjadi objek yang dirender secara konsisten.

Kita dapat membaca daftar ini sebagai pipeline mini: dari pembuatan project, impor asset, pemeriksaan geometri dan material, hingga penempatan kamera dan pengujian hasil. Setiap tahap membantu mengurangi masalah yang sering muncul dalam rendering real-time, seperti objek terlalu kecil, orientasi salah, shading tidak wajar, atau scene yang sulit dikelola.

```text
1. Create Unity 6 URP Project
2. Organize Project Folder
3. Import Blender Asset
4. Verify Scale / Orientation
5. Check Normal / UV
6. Build Hierarchy
7. Create Prefab
8. Arrange Scene
9. Setup Camera
10. Test Game View
```

Makna tiap langkah dapat dipahami sebagai berikut:

1. **Create Unity 6 URP Project** — menyiapkan environment rendering yang benar sejak awal.
2. **Organize Project Folder** — menjaga asset mudah ditemukan dan tidak tumpang tindih.
3. **Import Blender Asset** — memasukkan model hasil Blender ke Unity.
4. **Verify Scale / Orientation** — memastikan satuan, ukuran, dan arah sumbu sesuai.
5. **Check Normal / UV** — memeriksa arah pencahayaan permukaan dan pemetaan texture.
6. **Build Hierarchy** — menyusun parent-child agar scene terstruktur.
7. **Create Prefab** — membuat objek yang dapat dipakai ulang.
8. **Arrange Scene** — menempatkan objek secara spasial.
9. **Setup Camera** — menentukan sudut pandang dan frustum kamera.
10. **Test Game View** — melihat hasil rendering dalam mode runtime.

Yang perlu ditekankan sebelum lanjut adalah bahwa tahap **Verify Scale / Orientation** dan **Check Normal / UV** sering menjadi penentu kualitas visual. Jika transformasi atau data permukaan salah, objek bisa tampak salah posisi, salah ukuran, atau salah shading meskipun modelnya sudah benar.

### Inti yang Harus Ditekankan

- Alur praktikum bersifat **berurutan**: setup project, impor, validasi, struktur scene, kamera, dan pengujian.
- **Scale**, **orientation**, **Normal**, dan **UV** adalah titik kritis karena memengaruhi transformasi, shading, dan texture mapping.
- **Hierarchy** dan **Prefab** penting untuk organisasi scene serta penggunaan ulang objek.
- **Game View** berfungsi sebagai verifikasi awal apakah scene sudah dirender sesuai harapan.

### Transisi ke Slide Berikutnya

Setelah alur praktikum ini dipahami, kita akan merangkum benang merah pertemuan: bagaimana asset Blender berubah menjadi objek Unity yang dapat dirender oleh `URP` dalam frame real-time.

---

## Slide 049 - Ringkasan Pertemuan

### Narasi

Sebagai penutup pertemuan ke-12, kita dapat melihat benang merah alur kerja yang sudah kita bahas: aset 3D tidak langsung menjadi gambar di layar, melainkan melewati beberapa tahap transformasi dan integrasi ke dalam sistem rendering real-time.

```text
Blender Asset
↓
Unity Import
↓
GameObject + Component
↓
Transform + Hierarchy
↓
Mesh + Renderer
↓
URP
↓
Real-Time Frame
```

Alur ini penting karena menunjukkan bagaimana objek dari **Blender Asset** masuk ke **Unity Import**, lalu menjadi struktur scene berupa `GameObject + Component`. Di tahap berikutnya, `Transform + Hierarchy` menentukan posisi, rotasi, skala, dan relasi antarobjek, sedangkan `Mesh + Renderer` menyediakan geometri dan cara objek digambar. Setelah itu, `URP` mengatur bagaimana scene diproses menjadi **Real-Time Frame** yang dapat ditampilkan setiap frame.

Dengan memahami alur ini, kita tidak hanya tahu cara mengimpor aset, tetapi juga memahami mengapa struktur objek, kamera, material, dan pipeline rendering saling terhubung. Hal ini menjadi dasar sebelum kita masuk ke topik yang lebih visual seperti lighting, material, dan post-processing.

### Inti yang Harus Ditekankan

- **Benang merah P12** adalah alur dari aset 3D ke frame real-time, bukan sekadar langkah mengimpor file.
- `GameObject + Component` adalah struktur utama scene di Unity, sementara `Transform + Hierarchy` mengatur posisi dan relasi antarobjek.
- `Mesh + Renderer` menghubungkan geometri dengan proses gambar, dan `URP` menjadi pipeline yang mengatur rendering real-time.
- Pahami bahwa setiap tahap memengaruhi hasil akhir: aset, transformasi, hierarki, material, kamera, dan pipeline harus konsisten.

### Transisi ke Slide Berikutnya

Dengan ringkasan ini, kita menutup pertemuan ke-12. Pada materi selanjutnya, kita akan melanjutkan ke **Unity Lighting, Material & Post Processing**, di mana hasil pipeline real-time akan dibuat lebih hidup melalui pencahayaan, material, dan efek visual.

---

## Slide 050 - TERIMA KASIH

### Narasi

Kita menutup pertemuan ke-12 dengan satu pesan utama: **Grafika Komputer** bukan hanya soal membuat objek 3D, tetapi bagaimana objek tersebut diproses oleh sistem rendering hingga menjadi frame yang terlihat di layar. Pada pertemuan ini, kita telah melihat bagaimana alur kerja di **Unity** menghubungkan aset, struktur objek, transformasi, dan **URP** menjadi hasil **real-time frame**.

Dengan memahami benang merah tersebut, mahasiswa diharapkan tidak lagi melihat editor Unity sebagai kumpulan tombol dan panel, tetapi sebagai representasi dari pipeline rendering: dari **asset import**, **GameObject + Component**, **Mesh + Renderer**, hingga output visual yang dapat dianalisis secara teknis.

Terima kasih atas partisipasi dan diskusi selama pertemuan. Untuk pertemuan berikutnya, kita akan melanjutkan ke topik yang lebih visual dan aplikatif, yaitu **Unity Lighting, Material & Post Processing**, di mana konsep pipeline yang sudah kita bangun akan mulai terlihat pada kualitas cahaya, permukaan, dan efek akhir gambar.

### Inti yang Harus Ditekankan

- Pertemuan 12 menekankan alur kerja **Unity** sebagai bagian dari **real-time rendering pipeline**, bukan sekadar penggunaan editor.
- Mahasiswa perlu memahami hubungan antara **asset**, **GameObject**, **Transform**, **Mesh**, **Renderer**, dan **URP** dalam menghasilkan frame.
- Topik berikutnya akan memperdalam aspek visual seperti **lighting**, **material**, dan **post processing** sebagai lanjutan dari pipeline rendering.

### Transisi ke Slide Berikutnya

Pada materi selanjutnya, kita akan masuk ke **Unity Lighting, Material & Post Processing** untuk melihat bagaimana cahaya, permukaan, dan efek akhir memengaruhi tampilan objek 3D secara real-time.
