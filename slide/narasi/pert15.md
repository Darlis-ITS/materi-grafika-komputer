# Narasi Grafika Komputer - Pertemuan 15

## VFX, Particle & Graphics Optimization

Sumber: markdown/pert15.md

---

## Slide 000 - Cover

### Narasi

Selamat datang pada pertemuan ke-15 mata kuliah `EF234504` — **Grafika Komputer**, yang disampaikan oleh **Dr. Darlis Herumurti** dari **Departemen Teknik Informatika**. Pada pertemuan ini, kita masuk ke topik yang sangat dekat dengan praktik produksi: **VFX, Particle & Graphics Optimization**.

Topik ini penting karena dalam grafika komputer, tampilan visual yang menarik tidak hanya ditentukan oleh geometri, kamera, dan pencahayaan, tetapi juga oleh efek dinamis seperti asap, api, percikan, debu, atau partikel yang bergerak. Di sisi lain, semua efek tersebut harus tetap dapat dirender secara real-time, sehingga kita perlu memahami cara menjaga performa aplikasi.

Dengan kata lain, pertemuan ini menggabungkan dua sisi utama: bagaimana membuat efek visual yang hidup, dan bagaimana memastikan efek tersebut tidak membuat frame rate turun. Kita akan melihat konsep **particle system**, parameter seperti emitter, lifetime, velocity, size, dan color, serta dasar-dasar optimasi seperti profiling, frame budget, draw call, batching, LOD, dan occlusion.

### Inti yang Harus Ditekankan

- **VFX** dan **particle system** adalah bagian penting dari real-time graphics untuk membuat efek visual yang dinamis.
- **Graphics optimization** diperlukan agar efek visual tetap menarik tanpa mengorbankan performa.
- Pertemuan ini menjadi pengantar sebelum masuk ke topik pembahasan yang lebih rinci.

### Transisi ke Slide Berikutnya

Setelah memahami posisi topik ini dalam mata kuliah, kita lanjut ke daftar topik pembahasan untuk melihat urutan materi yang akan kita pelajari pada pertemuan ini.

---

## Slide 001 - Topik Pembahasan

### Narasi

Pada pertemuan ini, kita bergerak dari efek visual yang membuat adegan terasa hidup menuju cara menjaga efek tersebut tetap efisien. Fokusnya adalah **real-time graphics**, yaitu rendering yang harus berjalan cepat dan stabil pada perangkat target. Karena itu, setiap efek visual tidak hanya dinilai dari penampilannya, tetapi juga dari biayanya terhadap performa.

Alur pembahasan dapat dilihat sebagai tiga tahap utama:

1. **Membangun visual effect**  
   Kita mulai dari peran **VFX** dalam real-time graphics, lalu masuk ke **particle system** sebagai salah satu cara umum untuk membuat efek seperti asap, api, percikan, hujan, atau debu.

2. **Mengatur perilaku partikel**  
   Setelah itu, kita melihat parameter penting seperti **emitter**, **lifetime**, **velocity**, **size**, dan **color**. Kita juga membahas fitur tambahan seperti **noise**, **collision**, dan **trail**, serta **VFX Graph** sebagai pengantar untuk menyusun efek secara lebih terstruktur.

3. **Mengukur dan mengoptimasi rendering**  
   Tahap terakhir berfokus pada performa. Kita akan memahami **profiling**, **frame budget**, **triangle count**, dan **draw call**, lalu melihat strategi seperti **batching**, **LOD**, **occlusion**, **texture resolution**, dan **shader complexity**.

Praktikum di akhir pertemuan menjadi penghubung antara konsep dan penerapan. Di sana, kita tidak hanya membuat efek, tetapi juga mengamati dampaknya terhadap statistik rendering dan melakukan perbaikan secara terukur.

### Inti yang Harus Ditekankan

- **Particle system** adalah cara penting untuk membuat efek dinamis dalam real-time graphics.
- Parameter seperti **emitter**, **lifetime**, **velocity**, **size**, dan **color** menentukan karakter visual efek.
- **Profiling** dan **frame budget** menjadi dasar untuk mengetahui apakah efek masih aman secara performa.
- **Triangle count**, **draw call**, **batching**, **LOD**, **occlusion**, **texture resolution**, dan **shader complexity** adalah faktor utama yang memengaruhi efisiensi rendering.
- Optimasi harus dilakukan secara terukur, bukan hanya berdasarkan tebakan.

### Transisi ke Slide Berikutnya

Setelah mengetahui topik yang akan dibahas, kita lanjut ke capaian pembelajaran pertemuan ini, yaitu kemampuan apa yang diharapkan mahasiswa setelah mengikuti materi VFX, particle, dan graphics optimization.

---

## Slide 002 - Capaian Pembelajaran Pertemuan

### Narasi

Pada pertemuan ini, capaian utamanya bukan sekadar membuat efek yang terlihat menarik, tetapi memahami bagaimana efek visual bekerja di dalam **real-time graphics**. Mahasiswa diharapkan mampu menjelaskan fungsi **visual effect** sebagai elemen yang memperkuat komunikasi visual, sekaligus menyadari bahwa setiap efek memiliki biaya komputasi. Dalam konteks grafika komputer, VFX bukan hanya soal estetika, tetapi juga bagian dari **rendering pipeline** yang memengaruhi performa aplikasi.

Capaian berikutnya berfokus pada **particle system**. Mahasiswa perlu mampu membuat efek sederhana dan mengatur parameter seperti `emitter`, `lifetime`, `velocity`, `size`, dan `color`. Parameter ini menentukan bagaimana partikel muncul, bergerak, berubah, dan menghilang. Selain itu, mahasiswa juga diharapkan memahami penggunaan `noise`, `collision`, dan `trail` untuk membuat perilaku partikel lebih natural. Konsep dasar `VFX Graph` menjadi penting karena membantu kita melihat hubungan antara parameter, node, dan hasil visual secara lebih sistematis.

Selain kemampuan visual, pertemuan ini juga menuntut kemampuan analisis performa. Mahasiswa harus mampu membaca statistik rendering dasar, memahami `frame budget`, serta menjelaskan pengaruh `triangle count` dan `draw call` terhadap performa. Dari situ, mahasiswa diharapkan memahami strategi seperti `batching`, `LOD`, `occlusion`, `texture resolution`, dan `shader complexity`. Poin akhirnya adalah melakukan `optimization` secara terukur, artinya keputusan teknis harus didukung data profiling, bukan hanya perkiraan.

Dengan capaian ini, mahasiswa tidak hanya belajar menambah efek, tetapi juga belajar menjaga keseimbangan antara kualitas visual dan stabilitas frame rate. Ini menjadi dasar penting sebelum masuk ke praktikum VFX, profiling, dan optimization.

### Inti yang Harus Ditekankan

- **Visual effect** adalah bagian dari real-time rendering, bukan hanya efek visual tambahan.
- **Particle system** dipahami melalui parameter `emitter`, `lifetime`, `velocity`, `size`, `color`, `noise`, `collision`, dan `trail`.
- `VFX Graph` membantu memahami struktur dan hubungan parameter secara lebih visual dan sistematis.
- Performa rendering dipantau melalui statistik dasar, `frame budget`, `triangle count`, dan `draw call`.
- `Optimization` dilakukan secara terukur dengan mempertimbangkan `batching`, `LOD`, `occlusion`, `texture resolution`, dan `shader complexity`.

### Transisi ke Slide Berikutnya

Dengan capaian ini, kita dapat melihat posisi pertemuan 15 dalam alur mata kuliah: setelah Unity + URP, lighting, material, post FX, dan Shader Graph, pertemuan ini menggabungkan penguatan visual dengan pengendalian performa.

---

## Slide 003 - Posisi Pertemuan 15

### Narasi

Kita berada di pertemuan ke-15, yaitu titik di mana materi mulai menyatu menjadi satu alur produksi visual real-time. Sebelum ini, kita sudah membangun fondasi dengan `Unity + URP`, lalu memperdalam `Lighting`, `Material`, dan `Post FX`, kemudian masuk ke `Shader Graph`. Pertemuan ini berada tepat setelah fondasi tersebut, sehingga posisinya bukan sekadar menambah efek, tetapi mengintegrasikan kemampuan visual yang sudah ada dengan kebutuhan performa.

Posisi pertemuan ini dapat dilihat dari alur berikut:

```text
P12
Unity + URP
   ↓
P13
Lighting + Material + Post FX
   ↓
P14
Shader Graph
   ↓
P15
VFX + PARTICLE + OPTIMIZATION
   ↓
P16
UAS
```

Dari atas ke bawah, alurnya menunjukkan bahwa `Unity + URP` menjadi dasar pipeline rendering. Setelah itu, `Lighting + Material + Post FX` membentuk tampilan permukaan, suasana, dan kualitas visual. `Shader Graph` memberi cara untuk membuat material dan efek shader secara lebih terstruktur. Pada pertemuan 15, kita menambah elemen dinamis melalui **VFX** dan **particle**, sekaligus mengontrol biaya rendering melalui **optimization**. Pertemuan 16 kemudian menjadi evaluasi akhir.

Inti pertemuan ini adalah dua hal yang harus berjalan bersamaan: **Enhance Visual** dan **Control Performance**. Visual effect dan particle membuat adegan terasa lebih hidup, tetapi setiap partikel, trail, texture, shader, atau geometry tambahan dapat memengaruhi `frame budget`, `draw call`, `triangle count`, dan kompleksitas rendering. Karena itu, mahasiswa perlu memahami bahwa membuat efek yang bagus tidak cukup; efek tersebut juga harus tetap berada dalam batas performa yang sehat.

### Inti yang Harus Ditekankan

- Pertemuan 15 berada setelah `Unity + URP`, `Lighting + Material + Post FX`, dan `Shader Graph`, serta sebelum UAS.
- Fokus utamanya adalah menggabungkan **Enhance Visual** dan **Control Performance**.
- **VFX** dan **particle** meningkatkan kualitas visual, tetapi dapat menambah beban rendering.
- **Optimization** bukan tahap akhir saja, melainkan bagian dari proses desain visual yang bertanggung jawab terhadap `frame budget`.

### Transisi ke Slide Berikutnya

Setelah posisi pertemuan ini jelas, kita masuk ke pertanyaan mendasar: mengapa VFX penting dalam real-time graphics, dan apa yang ingin dikomunikasikan oleh efek visual.

---

## Slide 004 - Mengapa VFX Penting?

### Narasi

Setelah kita membahas shader graph, ada satu pertanyaan penting yang perlu kita jawab: mengapa **VFX** perlu dibahas secara khusus dalam grafika komputer? Dalam banyak kasus, visual effect sering dianggap sebagai tambahan estetika. Padahal, dalam sistem visual real-time, VFX berfungsi sebagai cara sistem menyampaikan informasi kepada pengguna.

VFX membantu menyampaikan beberapa hal penting, yaitu **aksi**, **impact**, **status**, **energi**, **lingkungan**, **feedback visual**, dan **suasana**. Misalnya, ketika karakter melakukan serangan, pengguna perlu melihat ada gerakan atau efek yang menunjukkan bahwa serangan itu terjadi. Ketika objek terkena benturan, efek seperti percikan atau asap membantu pengguna merasakan adanya **impact**. Ketika lingkungan sedang hujan atau terbakar, VFX membantu membangun konteks dan suasana.

Beberapa contoh VFX yang umum adalah:

- **api**
- **asap**
- **debu**
- **spark**
- **magic**
- **explosion**
- **rain**
- **energy burst**

Contoh-contoh ini bukan sekadar objek visual. Setiap efek bisa membawa makna. Api bisa menunjukkan bahaya atau sumber energi. Asap bisa menunjukkan sisa ledakan atau kerusakan. Spark bisa memberi feedback bahwa serangan mengenai target. Rain bisa mengubah suasana lingkungan. Dengan kata lain, VFX membantu pengguna membaca situasi tanpa harus membaca teks atau penjelasan tambahan.

Dalam konteks grafika komputer, VFX juga penting karena ia berkaitan langsung dengan **rendering real-time**. Banyak efek visual menggunakan partikel, shader, lighting, dan post-processing. Artinya, VFX tidak hanya menambah keindahan visual, tetapi juga memengaruhi beban komputasi. Inilah sebabnya pertemuan ini membahas **VFX**, **particle**, dan **graphics optimization** secara bersama-sama.

Sebelum lanjut, hal yang perlu kita pahami adalah bahwa VFX bukan hanya soal “menambah efek”. VFX adalah alat komunikasi visual. Jika efek tidak membantu pengguna memahami apa yang sedang terjadi, efek tersebut bisa menjadi gangguan visual. Namun, bagaimana cara memastikan VFX benar-benar berfungsi bagi pengguna? Itu akan kita lihat pada slide berikutnya.

### Inti yang Harus Ditekankan

- **VFX** adalah alat komunikasi visual, bukan sekadar hiasan.
- VFX membantu menyampaikan **aksi**, **impact**, **status**, **energi**, **lingkungan**, **feedback visual**, dan **suasana**.
- Contoh seperti **api**, **asap**, **explosion**, **rain**, dan **energy burst** membantu pengguna membaca situasi secara cepat.
- Dalam grafika komputer, VFX berkaitan dengan **rendering real-time**, **partikel**, **shader**, dan **performa sistem**.

### Transisi ke Slide Berikutnya

Jika VFX sudah membantu menyampaikan informasi visual, pertanyaan berikutnya adalah bagaimana memastikan efek itu benar-benar berguna bagi pengguna. Di slide berikutnya, kita akan melihat bahwa VFX yang baik harus memiliki fungsi visual atau gameplay yang jelas.

---

## Slide 005 - VFX Bukan Sekadar Dekorasi

### Narasi

Setelah kita melihat bahwa VFX membantu menyampaikan aksi, dampak, status, energi, lingkungan, feedback visual, dan suasana, langkah berikutnya adalah memastikan setiap efek memiliki alasan yang jelas. Dalam grafika komputer, visual effect bukan hanya kumpulan partikel, warna, atau animasi yang menarik secara visual. Ia juga berfungsi sebagai **sistem komunikasi** antara objek, kamera, pengguna, dan lingkungan virtual.

VFX yang baik membantu pengguna memahami peristiwa yang sedang terjadi dalam scene. Kita bisa membacanya melalui beberapa pertanyaan sederhana:

```text
Apa yang terjadi?
Di mana terjadi?
Seberapa kuat?
Berapa lama?
Apa hasilnya?
```

Pertanyaan pertama menentukan apakah efek sudah cukup merepresentasikan peristiwa. Misalnya, ledakan, hujan, asap, atau energy burst harus langsung terbaca sebagai kejadian tertentu. Pertanyaan kedua berkaitan dengan **posisi** dan **ruang**: efek harus muncul di lokasi yang benar, dekat sumber aksi, dan terbaca dari sudut pandang kamera.

Pertanyaan ketiga dan keempat menyangkut **intensitas** dan **durasi**. Efek yang terlalu lemah mungkin tidak terasa penting, sedangkan efek yang terlalu kuat dapat mengganggu pembacaan scene. Durasi juga penting: efek yang terlalu singkat tidak sempat dipahami, sedangkan efek yang terlalu panjang dapat terasa berlebihan atau menutupi informasi lain.

Pertanyaan terakhir, “apa hasilnya?”, mengarah pada konsekuensi visual dari peristiwa tersebut. Dalam konteks game atau aplikasi interaktif, hasil ini sering berkaitan dengan **feedback** bagi pengguna: apakah serangan berhasil, apakah status berubah, apakah lingkungan terpengaruh, atau apakah ada peringatan yang perlu diperhatikan. Di sinilah VFX mulai berhubungan dengan gameplay, bukan hanya estetika.

Karena itu, prinsip utamanya adalah: visual effect sebaiknya mempunyai **fungsi visual atau gameplay yang jelas**. Artinya, sebelum memilih partikel, warna, shader, atau animasi, kita perlu tahu apa yang ingin dikomunikasikan. Dalam pipeline rendering, VFX biasanya bekerja bersama geometri, material, lighting, kamera, dan shader untuk membentuk persepsi pengguna terhadap dunia virtual.

### Inti yang Harus Ditekankan

- VFX bukan sekadar dekorasi, melainkan **komunikasi visual** tentang apa yang terjadi dalam scene.
- Setiap efek sebaiknya menjawab pertanyaan: apa, di mana, seberapa kuat, berapa lama, dan apa hasilnya.
- Fungsi visual atau gameplay yang jelas harus ditentukan sebelum memilih teknik rendering, partikel, shader, atau animasi.

### Transisi ke Slide Berikutnya

Jika VFX harus memiliki fungsi yang jelas, pertanyaan berikutnya adalah dari mana efek-efek itu dibuat. Pada slide berikutnya, kita akan melihat tiga sumber utama visual effect dalam Unity: `Particle System`, `Shader / Shader Graph`, dan `VFX Graph`.

---

## Slide 006 - Tiga Sumber Visual Effect

### Narasi

Setelah kita memahami bahwa visual effect harus punya fungsi yang jelas, langkah berikutnya adalah mengenali dari mana efek tersebut dibuat. Dalam Unity, ada tiga sumber utama yang sering dipakai: **Particle System**, **Shader / Shader Graph**, dan **VFX Graph**.

Ketiganya tidak saling menggantikan, tetapi punya peran yang berbeda. **Particle System** biasanya digunakan untuk membuat banyak elemen kecil yang bergerak, seperti asap, api, percikan, hujan, atau debris. **Shader / Shader Graph** lebih berperan dalam menentukan bagaimana suatu objek, material, atau tampilan visual diproses dan ditampilkan, misalnya warna, transparansi, glow, distorsi, atau pola visual. **VFX Graph** adalah pendekatan lain untuk membangun efek visual yang lebih kompleks, biasanya dengan alur node yang mengatur perilaku partikel, geometri, atau tampilan akhir.

Yang perlu kita perhatikan adalah bahwa satu efek visual sering kali tidak hanya berasal dari satu sistem. Misalnya, efek ledakan dapat memakai **Particle System** untuk asap dan percikan, **Shader / Shader Graph** untuk membuat cahaya atau material yang menyala, serta **VFX Graph** untuk mengatur perilaku yang lebih terstruktur. Karena itu, ketika kita melihat sebuah VFX, jangan langsung menganggapnya sebagai satu komponen tunggal. Kita perlu membaca efeknya sebagai kombinasi dari beberapa sumber visual.

Dalam konteks grafika komputer, pembagian ini penting karena setiap sumber memengaruhi tahap yang berbeda dalam proses rendering. **Particle System** berkaitan dengan pembuatan dan pembaruan banyak elemen visual. **Shader / Shader Graph** berkaitan dengan perhitungan tampilan pada GPU, terutama bagaimana warna, tekstur, dan efek visual dihasilkan. **VFX Graph** membantu merancang alur efek secara lebih sistematis. Dengan memahami tiga sumber ini, kita bisa lebih mudah memilih tools yang tepat dan tidak terjebak pada satu cara saja.

Sebelum lanjut, hal yang harus kita pegang adalah: **Particle System**, **Shader / Shader Graph**, dan **VFX Graph** adalah tiga jalur utama pembuatan visual effect dalam Unity, dan dalam praktik sering dikombinasikan.

### Inti yang Harus Ditekankan

- Dalam Unity, visual effect dapat berasal dari **Particle System**, **Shader / Shader Graph**, dan **VFX Graph**.
- **Particle System** cocok untuk banyak elemen kecil yang bergerak secara dinamis.
- **Shader / Shader Graph** berperan dalam menentukan tampilan visual, seperti warna, material, atau efek permukaan.
- **VFX Graph** digunakan untuk membangun efek visual dengan alur yang lebih terstruktur.
- Satu effect sering kali merupakan kombinasi dari beberapa sumber, bukan hanya satu sistem.

### Transisi ke Slide Berikutnya

Untuk melihat salah satu sumber secara lebih konkret, kita akan mulai dari **Particle System**, yaitu sistem yang menghasilkan banyak elemen visual kecil secara dinamis.

---

## Slide 007 - Particle System

### Narasi

Dalam Unity, **Particle System** adalah mekanisme untuk menghasilkan banyak elemen visual kecil secara dinamis, seperti titik cahaya, asap, api, hujan, debu, atau pecahan ledakan. Dalam grafika komputer, sistem ini penting karena memungkinkan kita membuat efek yang tampak hidup tanpa harus memodelkan setiap elemen secara manual.

Istilah *particle* di sini merujuk pada unit visual yang relatif sederhana. Setiap particle biasanya direpresentasikan sebagai kumpulan data, bukan sebagai objek 3D yang rumit. Karena datanya ringan, sistem dapat membuat dan menghapus banyak particle dalam satu frame, sehingga cocok untuk **rendering real-time**.

Pada slide ini, kita melihat enam atribut utama yang dapat dimiliki particle. Atribut ini sebaiknya dibaca sebagai **state** atau kondisi particle pada suatu waktu, bukan sebagai daftar fitur yang terpisah.

- `position`: menentukan di mana particle berada dalam ruang.
- `velocity`: menentukan arah dan kecepatan gerak particle.
- `lifetime`: menentukan berapa lama particle tetap aktif sebelum dihapus.
- `size`: menentukan skala atau ukuran visual particle.
- `color`: menentukan warna, dan dalam banyak kasus juga intensitas atau transparansi.
- `rotation`: menentukan orientasi atau putaran particle, terutama jika particle dirender sebagai sprite atau quad.

Dari sudut pandang rendering pipeline, atribut-atribut ini menjadi input untuk tahap transformasi dan rasterisasi. `position` dan `rotation` memengaruhi bagaimana particle ditempatkan dan diorientasikan, sedangkan `size` dan `color` memengaruhi tampilan akhir setelah melewati proses material atau shader. Karena particle biasanya hidup singkat dan jumlahnya banyak, sistem partikel dirancang agar update dan render dapat berjalan efisien.

Inti yang perlu dipahami sebelum lanjut adalah bahwa Particle System bukan sekadar kumpulan gambar kecil yang muncul. Ia adalah sistem simulasi sederhana: particle dibuat, diberi kondisi awal, diperbarui setiap frame, dirender, lalu dihapus ketika umurnya berakhir.

### Inti yang Harus Ditekankan

- **Particle System** menghasilkan banyak elemen visual kecil secara dinamis untuk efek real-time.
- Setiap particle memiliki state seperti `position`, `velocity`, `lifetime`, `size`, `color`, dan `rotation`.
- Atribut tersebut menjadi dasar simulasi dan rendering, bukan sekadar properti visual statis.

### Transisi ke Slide Berikutnya

Setelah kita tahu apa saja yang dimiliki sebuah particle, langkah berikutnya adalah melihat bagaimana particle itu lahir, diperbarui, dirender, dan berakhir dalam satu siklus hidup.

---

## Slide 008 - Konsep Particle

### Narasi

Pada konsep particle, hal yang paling penting adalah memahami bahwa setiap partikel memiliki **siklus hidup**. Partikel tidak hanya “muncul” lalu diam; ia melewati serangkaian tahap mulai dari dibuat, diperbarui, ditampilkan, hingga dihapus.

Diagram pada slide membaca dari atas ke bawah sebagai alur utama:

```text
Emitter
   ↓
Spawn Particle
   ↓
Update Particle
   ↓
Move / Change
   ↓
Render
   ↓
Lifetime End
```

Alur ini menunjukkan bahwa particle system bekerja seperti pipeline kecil di dalam sistem rendering. Tahapannya dapat kita pahami sebagai berikut:

1. **Emitter** menjadi titik awal atau sumber partikel.
2. **Spawn Particle** menciptakan partikel baru beserta state awalnya, seperti `position`, `velocity`, `lifetime`, `size`, `color`, dan `rotation`.
3. **Update Particle** memperbarui kondisi partikel pada setiap frame, misalnya umur partikel berkurang atau parameter visual berubah.
4. **Move / Change** mengubah posisi dan sifat partikel berdasarkan `velocity`, gaya, atau aturan animasi yang berlaku.
5. **Render** menampilkan partikel ke layar sebagai bagian dari proses rendering, di mana data partikel diproses menjadi piksel yang terlihat.
6. **Lifetime End** menandai berakhirnya partikel, sehingga partikel tersebut dapat dihapus atau disiapkan untuk siklus berikutnya.

Penting untuk kita tekankan bahwa konsep ini bukan hanya soal efek visual seperti asap, api, hujan, atau percikan. Konsep ini juga menentukan bagaimana sistem mengelola banyak objek kecil secara efisien. Jika siklus hidup tidak dipahami, partikel dapat terus bertambah tanpa batas, posisi tidak konsisten, atau efek terlihat “patah” karena partikel tidak diperbarui dengan benar.

Sebelum masuk ke detail teknis, mahasiswa perlu memahami bahwa setiap partikel adalah objek dinamis yang memiliki state dan umur. Dengan memahami siklus hidup ini, kita dapat membaca perilaku particle system secara lebih sistematis: dari sumber, pembuatan, pembaruan, tampilan, hingga penghapusan.

### Inti yang Harus Ditekankan

- Setiap particle memiliki **siklus hidup**: muncul, diperbarui, bergerak/berubah, dirender, lalu berakhir.
- Alur particle system dapat dibaca sebagai pipeline: `Emitter → Spawn → Update → Move/Change → Render → Lifetime End`.
- State partikel seperti `position`, `velocity`, `lifetime`, `size`, `color`, dan `rotation` menentukan perilaku dan tampilan partikel.
- Pemahaman siklus hidup penting agar particle system dapat berjalan dinamis, konsisten, dan efisien.

### Transisi ke Slide Berikutnya

Setelah memahami siklus hidup partikel, langkah berikutnya adalah melihat bagian paling awal dari alur tersebut, yaitu **Emitter**. Pada slide berikutnya, kita akan membahas bagaimana emitter menentukan asal, arah awal, jumlah, dan bentuk area spawn partikel.

---

## Slide 009 - Emitter

### Narasi

Setelah kita melihat siklus hidup particle, langkah berikutnya adalah memahami dari mana particle itu berasal.

Pada bagian ini kita fokus pada **Emitter**. **Emitter** adalah **sumber particle** dalam sistem partikel. Ia berperan sebagai titik awal sebelum particle mengalami `spawn`, `update`, `move/change`, dan `render`.

Secara intuitif, emitter bisa dibayangkan sebagai “pintu keluar” atau “area asal” bagi partikel. Dari sinilah partikel pertama kali diberi kondisi awal.

Emitter menentukan beberapa hal penting:

- **posisi asal**, yaitu dari mana particle muncul;
- **arah awal**, yaitu ke mana particle bergerak pada awal hidupnya;
- **jumlah particle**, yaitu seberapa banyak particle yang dihasilkan;
- **bentuk area spawn**, yaitu wilayah atau bentuk yang membatasi titik-titik munculnya particle.

Hal ini penting karena visual partikel tidak hanya ditentukan oleh bentuk partikelnya, tetapi juga oleh **di mana** dan **bagaimana** partikel itu lahir. Dua sistem partikel dengan partikel yang sama bisa terlihat sangat berbeda jika emitter-nya berbeda.

Dalam alur rendering, emitter berada di tahap awal pipeline partikel. Ia menyiapkan kondisi awal particle sebelum particle di-update dan dirender. Dengan kata lain, emitter memengaruhi distribusi spasial dan perilaku awal partikel, sehingga hasil visual partikel dapat dikendalikan dari sumbernya.

Sebelum lanjut, mahasiswa perlu memahami bahwa emitter bukan sekadar “posisi titik”. Ia adalah pengatur kondisi awal: posisi, arah, jumlah, dan area spawn. Konsep ini menjadi dasar untuk memahami parameter lain seperti emission rate, lifetime, dan kecepatan partikel.

### Inti yang Harus Ditekankan

- **Emitter** adalah sumber atau asal particle dalam sistem partikel.
- Emitter menentukan **posisi asal**, **arah awal**, **jumlah particle**, dan **bentuk area spawn**.
- Emitter memengaruhi distribusi awal partikel sebelum tahap `update` dan `render`.
- Memahami emitter penting karena visual partikel sangat bergantung pada kondisi awal yang diberikan.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan melihat salah satu parameter penting dari emitter, yaitu **Emission Rate**, yang menentukan jumlah particle yang dibuat per satuan waktu.

---

## Slide 010 - Emission Rate

### Narasi

Setelah kita memahami **Emitter** sebagai sumber particle, langkah berikutnya adalah mengatur **Emission Rate**. Emission Rate adalah laju pembuatan particle per satuan waktu. Dalam sistem particle, nilai ini menentukan seberapa cepat emitter menghasilkan particle baru.

Contoh nilainya bisa ditulis sederhana seperti:

```text
10 particles/sec
50 particles/sec
100 particles/sec
```

Artinya, pada `10 particles/sec`, sistem membuat sekitar 10 particle setiap detik. Pada `100 particles/sec`, jumlah particle yang muncul jauh lebih banyak dalam waktu yang sama. Semakin tinggi nilai emission rate, semakin cepat scene terisi particle.

Secara visual, emission rate yang lebih tinggi biasanya membuat efek terlihat lebih padat, lebih hidup, dan lebih intens. Misalnya, hujan ringan bisa menggunakan rate rendah, sedangkan hujan deras atau asap tebal membutuhkan rate lebih tinggi. Namun, kita perlu memahami bahwa kepadatan visual ini tidak datang tanpa konsekuensi.

> Semakin banyak particle: visual bisa lebih padat, tetapi cost juga meningkat.

Cost yang dimaksud bisa berupa beban pemrosesan posisi, umur, kecepatan, ukuran, warna, atau rotasi particle. Dalam konteks rendering, jumlah particle yang lebih besar juga dapat memengaruhi jumlah vertex yang diproses, beban GPU, dan kebutuhan memori. Karena itu, emission rate bukan hanya parameter estetika, tetapi juga parameter performa.

Dalam praktik, kita biasanya memilih emission rate berdasarkan dua hal: kebutuhan visual dan budget performa. Nilai yang terlalu rendah membuat efek terasa tipis atau kurang meyakinkan. Nilai yang terlalu tinggi dapat membuat efek terlalu ramai dan memperlambat aplikasi. Jadi, mahasiswa perlu memahami bahwa emission rate adalah titik keseimbangan antara **density** dan **cost**.

### Inti yang Harus Ditekankan

- **Emission Rate** menentukan jumlah particle yang dibuat per satuan waktu.
- Nilai seperti `10 particles/sec`, `50 particles/sec`, dan `100 particles/sec` menunjukkan perbedaan laju produksi particle.
- Semakin tinggi emission rate, visual biasanya lebih padat, tetapi cost komputasi dan rendering juga meningkat.
- Pemilihan emission rate harus mempertimbangkan keseimbangan antara kualitas visual dan performa.

### Transisi ke Slide Berikutnya

Emission Rate bekerja secara kontinu, yaitu particle dibuat terus-menerus selama emitter aktif. Selanjutnya, kita akan melihat **Burst**, yaitu cara menghasilkan banyak particle sekaligus pada satu waktu tertentu, misalnya untuk efek impact, explosion, hit effect, magic cast, atau muzzle flash.

---

## Slide 011 - Burst

### Narasi

**Burst** adalah cara sistem partikel mengeluarkan sejumlah partikel secara sekaligus pada satu momen tertentu. Berbeda dengan `Emission Rate` yang bekerja seperti aliran kontinu, `Burst` lebih mirip ledakan instan: ada pemicu, lalu banyak partikel muncul dalam waktu yang sama.

Dalam konteks grafika komputer, mekanisme ini penting karena banyak efek visual tidak terjadi secara merata, melainkan dipicu oleh peristiwa. Misalnya saat karakter terkena serangan, peluru mengenai target, atau sihir dilempar. Jika kita hanya menggunakan `Emission Rate`, efeknya bisa terasa lambat atau kurang dramatis. Dengan `Burst`, respons visual langsung terasa kuat.

Kita bisa membaca konsepnya dari alur sederhana berikut:

```text
Event
→ Burst
→ Many Particles
```

Alur ini dibaca dari kiri ke kanan. **Event** adalah pemicu, misalnya `impact`, `explosion`, `hit effect`, `magic cast`, atau `muzzle flash`. **Burst** adalah aksi sistem partikel yang mengeluarkan partikel dalam jumlah tertentu pada satu waktu. **Many Particles** adalah hasil yang terlihat di layar, yaitu sekelompok partikel yang muncul bersamaan.

Beberapa contoh penggunaan `Burst` adalah:

- `impact` untuk efek benturan,
- `explosion` untuk ledakan,
- `hit effect` untuk serangan yang mengenai objek,
- `magic cast` untuk pelepasan sihir,
- `muzzle flash` untuk kilatan saat senjata ditembakkan.

Poin penting yang perlu dipahami mahasiswa adalah bahwa `Burst` bukan pengganti `Emission Rate`, melainkan pelengkap. `Emission Rate` menjaga efek tetap ada secara kontinu, sedangkan `Burst` memberi penekanan pada momen tertentu. Dalam rendering real-time, kombinasi keduanya sering digunakan agar efek tetap hidup tetapi tetap terasa responsif.

Dari sisi performa, `Burst` juga perlu diperhatikan karena banyak partikel yang muncul sekaligus dapat meningkatkan beban simulasi dan rendering. Mahasiswa tidak perlu langsung masuk ke optimasi detail, tetapi harus menyadari bahwa jumlah partikel yang diburstkan berhubungan dengan biaya komputasi dan tampilan akhir.

### Inti yang Harus Ditekankan

- **Burst** mengeluarkan partikel secara sekaligus pada satu waktu, berbeda dengan `Emission Rate` yang kontinu.
- `Burst` cocok untuk efek yang dipicu peristiwa seperti `impact`, `explosion`, `hit effect`, `magic cast`, dan `muzzle flash`.
- Alurnya adalah `Event → Burst → Many Particles`, dan meskipun penting untuk efek responsif, jumlah partikel yang diburstkan perlu diperhatikan dari sisi biaya rendering.

### Transisi ke Slide Berikutnya

Setelah partikel muncul melalui `Burst`, pertanyaan berikutnya adalah berapa lama partikel-partikel itu akan tetap ada. Di slide berikutnya, kita akan membahas `Lifetime`, yaitu durasi hidup partikel dari `Spawn` sampai `Disappear`.

---

## Slide 012 - Lifetime

### Narasi

Setelah kita memahami **Burst** sebagai cara menghasilkan banyak particle pada satu waktu, langkah berikutnya adalah menentukan berapa lama particle tersebut tetap ada. Konsep ini disebut **Lifetime**, yaitu durasi hidup sebuah particle sejak muncul hingga akhirnya dihapus dari sistem.

Dalam diagram sederhana, alurnya dapat dibaca dari atas ke bawah:

```text
Spawn
 ↓
Age
 ↓
Lifetime End
 ↓
Disappear
```

`Spawn` adalah titik awal ketika particle dibuat. Setelah itu, particle mengalami `Age`, yaitu proses penuaan atau bertambahnya umur particle dari waktu ke waktu. Ketika umur particle mencapai batas `Lifetime End`, particle tersebut masuk ke tahap `Disappear`, artinya tidak lagi aktif dan tidak lagi dirender.

Penting untuk dipahami bahwa **Lifetime** bukan hanya soal efek visual, tetapi juga berkaitan langsung dengan jumlah particle yang aktif. Semakin panjang lifetime, semakin lama particle bertahan di layar. Akibatnya, pada sistem yang terus menghasilkan particle, jumlah particle yang masih hidup dapat meningkat.

Dalam konteks rendering, setiap particle yang aktif biasanya perlu diperbarui posisinya, dihitung umurnya, dan dikirim ke pipeline rendering untuk digambar. Karena itu, lifetime yang terlalu panjang dapat meningkatkan beban sistem, terutama jika particle system digunakan untuk efek yang intens seperti ledakan, asap, atau hujan.

Sebelum lanjut ke gerak particle, mahasiswa perlu memahami bahwa lifetime menentukan **kapan particle ada** dan **kapan particle hilang**. Konsep ini menjadi dasar untuk mengatur kepadatan efek, performa, dan perilaku visual particle system.

### Inti yang Harus Ditekankan

- **Lifetime** menentukan durasi hidup particle dari `Spawn` sampai `Disappear`.
- Alur utama: `Spawn` → `Age` → `Lifetime End` → `Disappear`.
- Lifetime yang lebih panjang dapat membuat lebih banyak particle aktif bersamaan.
- Jumlah particle aktif memengaruhi performa rendering karena setiap particle perlu diupdate dan digambar.
- Lifetime mengatur keberadaan particle, sedangkan gerak akan dibahas pada konsep berikutnya.

### Transisi ke Slide Berikutnya

Setelah kita tahu berapa lama particle hidup, langkah berikutnya adalah menentukan bagaimana particle itu bergerak. Di slide berikutnya, kita akan membahas **Velocity**, yaitu arah dan kecepatan gerak particle dari waktu ke waktu.

---

## Slide 013 - Velocity

### Narasi

Setelah **lifetime** menentukan kapan particle muncul dan hilang, **velocity** menentukan bagaimana particle bergerak selama hidupnya. Dalam sistem partikel, velocity biasanya dipahami sebagai **vektor** yang memiliki **arah** dan **besar**. Arah menentukan ke mana particle bergerak, sedangkan besar menentukan seberapa cepat posisi particle berubah.

Secara matematis, pergerakan particle dapat dilihat dari hubungan posisi dan waktu:

```text
Position(t+1)
=
Position(t)
+
Velocity × dt
```

Pada persamaan ini, `Position(t)` adalah posisi particle pada langkah waktu sebelumnya. `Velocity` adalah vektor gerak yang membawa informasi arah dan kecepatan. `dt` adalah selang waktu antara dua langkah simulasi, misalnya satu frame. Hasil perkalian `Velocity × dt` menunjukkan seberapa jauh particle berpindah selama selang waktu tersebut.

Cara membaca rumus ini cukup intuitif: **posisi baru** diperoleh dengan menambahkan **perpindahan kecil** ke **posisi lama**. Jika `Velocity` bernilai nol, particle tidak berpindah. Jika `Velocity` mengarah ke atas, particle bergerak naik. Jika komponen `x`, `y`, atau `z` berubah dari waktu ke waktu, lintasan particle dapat melengkung atau berubah arah.

Dalam konteks grafika komputer, velocity penting karena partikel sering digunakan untuk efek visual seperti **asap**, **api**, **hujan**, **percikan**, atau **energi**. Tanpa velocity yang jelas, particle hanya muncul dan hilang tanpa perilaku gerak yang meyakinkan. Velocity juga menjadi dasar untuk menghubungkan simulasi partikel dengan waktu animasi, sehingga gerak tetap konsisten meskipun frame rate berubah.

Sebelum lanjut, mahasiswa perlu memahami bahwa velocity bukan sekadar angka kecepatan, melainkan **vektor yang menentukan arah dan laju perpindahan**. Pemahaman ini penting karena perubahan posisi particle pada setiap langkah simulasi bergantung langsung pada nilai `Velocity` dan `dt`.

### Inti yang Harus Ditekankan

- **Velocity** adalah vektor yang menentukan **arah** dan **kecepatan** gerak particle.
- Posisi particle diperbarui dengan rumus: `Position(t+1) = Position(t) + Velocity × dt`.
- `dt` adalah selang waktu simulasi; jika `Velocity` nol, particle tidak berpindah.
- Velocity penting agar efek partikel memiliki gerak yang alami dan konsisten dalam rendering.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana **velocity** menggerakkan particle, slide berikutnya akan membahas **Size over Lifetime**, yaitu perubahan ukuran particle selama hidupnya, misalnya membesar lalu mengecil untuk efek seperti smoke, fire, atau energy pulse.

---

## Slide 014 - Size over Lifetime

### Narasi

Dalam sistem partikel, **size over lifetime** adalah properti yang mengatur perubahan ukuran partikel selama siklus hidupnya. Artinya, ukuran partikel tidak harus konstan sejak muncul hingga hilang, tetapi dapat mengikuti pola tertentu berdasarkan usia partikel.

Slide menampilkan alur sederhana:

```text
0
 ↓
grow
 ↓
peak
 ↓
shrink
 ↓
0
```

Alur ini dibaca dari atas ke bawah sebagai tahapan perubahan ukuran. Pada awal hidup, ukuran partikel dapat dimulai dari `0`, kemudian membesar pada tahap `grow`, mencapai nilai maksimum pada `peak`, lalu mengecil pada `shrink`, dan kembali ke `0` sebelum partikel dihapus.

Pola seperti ini penting karena banyak fenomena visual tidak memiliki ukuran tetap. Asap, misalnya, cenderung membesar saat menyebar ke udara. Api dapat memiliki inti yang membesar lalu mengecil saat energi panasnya berkurang. Energy pulse juga sering terlihat membesar lalu mengecil untuk memberi kesan ledakan atau gelombang energi.

Dalam konteks rendering, nilai ukuran partikel memengaruhi seberapa besar representasi visual partikel digambar di layar. Semakin besar nilai ukuran, semakin besar area yang ditempati partikel pada tahap rasterisasi. Dengan mengatur ukuran terhadap waktu, kita dapat membuat partikel terasa lebih hidup, lebih natural, dan lebih sesuai dengan fenomena yang ingin disimulasikan.

Yang perlu dipahami sebelum lanjut adalah bahwa **size over lifetime** bukan sekadar mengubah skala secara acak, melainkan mengikuti kurva atau aturan perubahan terhadap usia partikel. Konsep ini menjadi dasar untuk properti partikel lain yang juga berubah seiring waktu, seperti warna partikel.

### Inti yang Harus Ditekankan

- **Size over lifetime** mengatur perubahan ukuran partikel selama siklus hidupnya.
- Pola umum dapat berupa `0 → grow → peak → shrink → 0`.
- Properti ini cocok untuk efek seperti **smoke**, **fire**, dan **energy pulse**.
- Ukuran partikel memengaruhi tampilan visual partikel saat digambar di layar.

### Transisi ke Slide Berikutnya

Setelah ukuran partikel dapat berubah seiring waktu, kita akan melanjutkan ke properti lain yang juga berubah selama hidup partikel, yaitu **color over lifetime**, di mana warna partikel dapat berubah dari satu fase ke fase lain.

---

## Slide 015 - Color over Lifetime

### Narasi

Kita sudah melihat bahwa ukuran partikel dapat berubah selama hidupnya. Sekarang kita fokus pada **warna**. Dalam sistem partikel, **`Color over Lifetime`** adalah properti yang mengatur perubahan warna partikel dari awal hingga akhir hidupnya. Artinya, setiap partikel tidak harus selalu memiliki warna tetap; warna dapat berubah seiring waktu.

Untuk membacanya, kita bisa melihat contoh api:

```text
Yellow
 ↓
Orange
 ↓
Red
 ↓
Transparent
```

Urutan ini menunjukkan fase hidup partikel. Saat baru lahir, partikel bisa berwarna `Yellow`. Seiring waktu, warnanya berubah menjadi `Orange`, lalu `Red`, dan akhirnya menjadi `Transparent`. Perubahan terakhir penting karena partikel tidak hanya hilang secara mendadak, tetapi **memudar** secara halus.

Dalam grafika komputer, properti ini penting karena banyak efek visual seperti api, asap, ledakan, atau energi memiliki perubahan warna yang alami. Warna yang berubah membantu kita membaca usia dan intensitas efek. Misalnya, api sering terlihat lebih terang di awal hidup, lalu meredup dan memudar.

Dari sisi rendering, perubahan warna ini akan memengaruhi warna fragmen partikel yang digambar ke layar. Saat partikel di-rasterisasi, warna yang sudah dihitung untuk setiap partikel digunakan sebagai input gambar, sehingga hasil akhir efek menjadi lebih halus dan konsisten.

Yang perlu dipahami mahasiswa adalah bahwa **`Color over Lifetime`** bekerja berdasarkan waktu hidup partikel, bukan berdasarkan posisi atau kamera. Dengan kata lain, setiap partikel mengikuti perubahan warna yang konsisten selama hidupnya.

Sebelum lanjut, pastikan kita paham bahwa perubahan warna bisa mencakup warna dan tingkat **transparansi**. Ini yang membuat partikel tampak memudar, bukan sekadar berubah warna.

### Inti yang Harus Ditekankan

- **`Color over Lifetime`** mengatur perubahan warna partikel selama hidupnya.
- Contoh api menunjukkan transisi `Yellow` → `Orange` → `Red` → `Transparent`.
- Perubahan warna dan transparansi membuat efek partikel terlihat lebih halus dan realistis.
- Warna partikel memengaruhi hasil rendering akhir karena menjadi input warna yang digambar.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana warna partikel berubah selama hidupnya, langkah berikutnya adalah menentukan dari mana partikel tersebut muncul. Pada slide berikutnya, kita akan membahas **`Shape Module`**, yaitu pengaturan distribusi spawn partikel.

---

## Slide 016 - Shape Module

### Narasi

Setelah warna dapat berubah selama umur partikel, kita masuk ke aspek yang menentukan dari mana partikel itu lahir. Pada `Shape Module`, bentuk emitter menentukan **distribusi spawn** partikel. Artinya, shape bukan sekadar visualisasi emitter, tetapi aturan spasial yang dipakai sistem partikel untuk memilih posisi awal setiap partikel.

Secara intuitif, bayangkan emitter sebagai sumber efek. Jika sumbernya adalah titik kecil, partikel bisa muncul dari satu area sempit. Jika sumbernya permukaan, partikel muncul di sepanjang permukaan. Jika sumbernya volume, partikel muncul di dalam ruang tertentu. Inilah yang membedakan efek seperti percikan, kabut, hujan, atau ledakan.

Beberapa bentuk umum yang sering muncul adalah:

- `Sphere`: partikel muncul di dalam atau pada permukaan bola, cocok untuk ledakan, aura, atau efek yang menyebar ke segala arah.
- `Cone`: partikel muncul dalam kerucut, cocok untuk api, semburan, atau jet.
- `Box`: partikel muncul dalam volume kotak, cocok untuk hujan, salju, atau area tertutup.
- `Circle`: partikel muncul pada bidang lingkaran, cocok untuk permukaan lantai, portal, atau efek planar.
- `Edge`: partikel muncul di tepi atau garis, cocok untuk percikan pada batas objek.
- `Mesh`: partikel muncul mengikuti permukaan atau geometri mesh, cocok untuk efek yang menempel pada model.

Yang perlu dipahami adalah bahwa shape bekerja pada tahap **spawn**, bukan pada tahap pergerakan setelah partikel lahir. Posisi awal yang dihasilkan oleh shape kemudian dapat dipengaruhi oleh kecepatan, rotasi, gaya, dan variasi lain. Jadi, jika partikel terlihat tidak keluar dari sumber yang diinginkan, hal pertama yang perlu diperiksa biasanya adalah bentuk dan orientasi shape.

Dalam konteks rendering pipeline, shape membantu menentukan koordinat awal partikel sebelum partikel di-update, di-render, dan di-blend ke frame. Semakin tepat shape dengan sumber efek, semakin realistis hubungan antara objek sumber dan partikel yang dihasilkan.

Sebelum lanjut, pastikan kita memahami bahwa pemilihan shape harus mengikuti **sumber effect**. Tidak ada shape yang selalu paling baik; yang penting adalah apakah partikel harus lahir dari titik, garis, permukaan, atau volume.

### Inti yang Harus Ditekankan

- `Shape Module` menentukan **distribusi spawn** partikel, bukan hanya tampilan emitter.
- Bentuk seperti `Sphere`, `Cone`, `Box`, `Circle`, `Edge`, dan `Mesh` mewakili sumber partikel yang berbeda.
- Pilih shape berdasarkan geometri sumber efek: titik, garis, permukaan, atau volume.
- Shape memengaruhi posisi awal partikel sebelum pergerakan, kecepatan, dan rendering dilakukan.

### Transisi ke Slide Berikutnya

Setelah posisi awal partikel ditentukan oleh shape, langkah berikutnya adalah membuat gerakannya tidak terlalu kaku. Untuk itu, kita akan melihat `Noise`, yang memberi variasi dan turbulensi pada pergerakan partikel.

---

## Slide 017 - Noise

### Inti yang Harus Ditekankan

- **Noise** membuat pergerakan partikel menjadi tidak terlalu linear.
- Noise cocok untuk efek seperti **smoke**, **magic**, **fog**, **dust**, dan **flame**.
- Noise menambahkan **variasi** dan **turbulensi** sehingga efek partikel terasa lebih natural.

### Transisi ke Slide Berikutnya

Setelah partikel memiliki gerak yang lebih natural berkat noise, langkah berikutnya adalah membuat partikel dapat berinteraksi dengan lingkungan, misalnya ketika menabrak atau memantul dari objek tertentu. Interaksi inilah yang akan dibahas pada konsep **collision**.

---

## Slide 018 - Collision

### Narasi

Setelah kita melihat bagaimana `noise` membuat gerak partikel menjadi lebih tidak linear dan lebih alami, langkah berikutnya adalah mempertimbangkan apa yang terjadi ketika partikel bertemu dengan sesuatu. Dalam sistem partikel, **collision** adalah mekanisme yang memungkinkan partikel berinteraksi dengan **collider** atau lingkungan tertentu. Dengan kata lain, partikel tidak hanya bergerak bebas di ruang, tetapi dapat dipengaruhi oleh permukaan, objek, atau batas yang ada di scene.

Secara intuitif, collision mengubah perilaku partikel dari sekadar “terbang” menjadi “menyentuh dunia”. Partikel hujan, misalnya, tidak terus jatuh menembus lantai, tetapi dapat berhenti atau menyebar ketika mengenai **ground**. Partikel `spark` dapat memantul dari permukaan, sedangkan `debris` dapat melambat dan berhenti setelah jatuh. Contoh-contoh ini penting karena membuat efek partikel terasa lebih meyakinkan secara visual.

Dalam konteks grafika komputer, collision biasanya melibatkan pemeriksaan posisi partikel terhadap geometri atau volume tertentu. Pada tingkat konsep, kita dapat membayangkan setiap partikel memiliki posisi, kecepatan, dan umur. Ketika posisi partikel mendekati atau menembus collider, sistem dapat melakukan respons tertentu, seperti:

- menghentikan partikel,
- memantulkan partikel,
- mengubah arah partikel,
- mengurangi kecepatan partikel,
- atau menghapus partikel setelah berinteraksi.

Respons inilah yang menentukan apakah efek partikel terlihat natural atau justru tidak masuk akal. Misalnya, hujan yang menembus tanah akan terasa kurang realistis, sementara spark yang memantul dari dinding dapat memberi kesan bahwa partikel benar-benar berada dalam ruang tiga dimensi.

Penting untuk dipahami bahwa collision bukan hanya soal “menabrak”, tetapi juga soal **biaya komputasi**. Semakin banyak partikel dan semakin kompleks bentuk collider, semakin banyak pemeriksaan yang harus dilakukan setiap frame. Dalam rendering real-time, hal ini dapat memengaruhi performa karena sistem harus memproses interaksi partikel dengan lingkungan sebelum partikel tersebut di-render. Jadi, collision meningkatkan **realism**, tetapi juga meningkatkan **cost**.

Untuk slide ini, kita cukup memahami dua hal utama. Pertama, collision membuat partikel dapat berinteraksi dengan lingkungan. Kedua, interaksi tersebut memberi efek visual yang lebih realistis, tetapi harus dikelola agar tidak membuat sistem partikel menjadi terlalu berat. Contoh sederhana seperti hujan, spark, dan debris sudah cukup untuk menangkap intinya: partikel yang berinteraksi dengan dunia terasa lebih hidup daripada partikel yang hanya bergerak bebas.

### Inti yang Harus Ditekankan

- **Collision** memungkinkan partikel berinteraksi dengan **collider** atau lingkungan.
- Contoh sederhana: `rain` mengenai `ground`, `spark` memantul, dan `debris` berhenti.
- Collision membuat efek partikel lebih **realistis** karena partikel tampak berada dalam ruang yang memiliki batas.
- Collision juga meningkatkan **cost** komputasi, terutama jika jumlah partikel dan kompleksitas collider besar.
- Dalam sistem partikel, ada keseimbangan antara **visual quality** dan **performa**.

### Transisi ke Slide Berikutnya

Setelah partikel dapat berinteraksi dengan lingkungan, kita juga bisa memberi jejak visual di belakang partikel yang bergerak. Pada slide berikutnya, kita akan membahas **trail**, yaitu jejak yang dihasilkan oleh partikel, terutama untuk efek seperti projectile, magic, sparks, dan fast-moving energy.

---

## Slide 019 - Trail

### Narasi

**Trail** adalah jejak visual yang muncul di belakang partikel saat bergerak. Dalam sistem partikel, trail membantu mata penonton membaca arah, kecepatan, dan energi objek, terutama untuk objek yang bergerak cepat. Tanpa trail, partikel kecil seperti `spark` atau `projectile` bisa terasa terputus-putus dan sulit dilacak.

Slide ini menyebut beberapa kasus yang cocok: **projectile**, **magic**, **sparks**, dan **fast-moving energy**. Intinya, trail paling berguna ketika partikel memiliki kecepatan tinggi atau efeknya bersifat sementara. Jejak yang ditinggalkan membuat gerakan terasa lebih halus, lebih jelas, dan lebih dramatis.

Namun trail bukan hanya masalah estetika. Setiap jejak yang dirender menambah jumlah fragmen yang diproses oleh GPU. Jika trail terlalu panjang, terlalu banyak, atau terlalu tumpang tindih, akan muncul dua masalah utama: **visual clutter** dan **overdraw**.

**Visual clutter** terjadi ketika layar terlalu penuh oleh jejak sehingga objek utama sulit dibaca. **Overdraw** terjadi ketika banyak fragmen dari trail menutupi fragmen lain pada pixel yang sama, sehingga GPU melakukan kerja render berulang pada area yang sama. Dalam pipeline rendering, hal ini dapat menurunkan performa, terutama pada efek partikel yang sudah padat.

Karena itu, trail harus diatur secara seimbang. Panjang trail, ukuran, opacity, dan jumlah partikel perlu disesuaikan dengan kebutuhan visual. Trail yang tepat membuat gerakan lebih jelas, tetapi trail yang berlebihan justru membuat adegan ramai dan mahal untuk dirender.

### Inti yang Harus Ditekankan

- **Trail** membantu membaca arah, kecepatan, dan energi partikel, terutama untuk **projectile**, **magic**, **sparks**, dan **fast-moving energy**.
- Trail yang terlalu panjang meningkatkan **visual clutter** dan **overdraw**.
- **Overdraw** menambah beban GPU karena banyak fragmen tumpang tindih pada pixel yang sama.

### Transisi ke Slide Berikutnya

Setelah memahami trail sebagai jejak partikel, langkah berikutnya adalah memilih cara efek tersebut digabungkan dengan warna latar, yaitu **Additive vs Alpha Blend**.

---

## Slide 020 - Additive vs Alpha Blend

### Narasi

Setelah membahas trail, kita masuk ke cara partikel digabungkan dengan warna latar belakang. Dalam rendering, partikel transparan tidak cukup hanya digambar; warna partikel harus dicampur dengan warna pixel yang sudah ada. Proses ini disebut **blending**, dan dua mode yang paling umum adalah **Additive** dan **Alpha Blend**.

**Additive** cocok untuk efek yang terasa terang dan menyala, seperti **glow**, **spark**, **energy**, dan **fire-like bright effect**. Intuisinya sederhana: semakin banyak partikel terang bertumpuk, semakin terang area tersebut. Karena itu, additive sering memberi kesan energi, cahaya, atau ledakan kecil yang tidak terlalu terpengaruh oleh urutan partikel.

**Alpha Blend** lebih cocok untuk efek yang menutupi atau menyamarkan, seperti **smoke**, **fog**, dan **dust**. Pada mode ini, partikel memiliki tingkat transparansi, sehingga warna latar belakang tetap terlihat melalui partikel. Efeknya lebih lembut dan lebih mirip objek fisik yang menyebarkan cahaya, bukan menambah cahaya.

Pemilihan blending bukan hanya soal estetika. Mode blending memengaruhi **visual**, **overdraw**, dan **sorting**. Visual menentukan apakah efek terlihat menyala, kabur, atau realistis. Overdraw berkaitan dengan beban rendering ketika banyak partikel transparan menimpa pixel yang sama. Sorting menentukan apakah urutan partikel perlu diatur agar hasil pencampuran benar.

Dalam konteks pipeline, blending terjadi setelah fragment partikel dihitung dan sebelum warna akhir disimpan ke layar. GPU akan menggabungkan warna fragment dengan warna `framebuffer` yang sudah ada. Untuk additive, urutan sering kali lebih toleran karena operasi penjumlahan bersifat simetris. Untuk alpha blend, urutan bisa lebih penting karena partikel di depan dan di belakang dapat menghasilkan hasil yang berbeda.

Namun, kita tidak perlu langsung masuk ke detail teknis sorting atau optimasi. Yang perlu dipahami sekarang adalah: **Additive** untuk efek terang dan menyala, **Alpha Blend** untuk efek lembut dan menutupi, serta pemilihan mode blending akan memengaruhi tampilan, biaya rendering, dan kebutuhan pengurutan partikel.

### Inti yang Harus Ditekankan

- **Additive** digunakan untuk **glow**, **spark**, **energy**, dan **fire-like bright effect** karena menghasilkan kesan terang yang bertambah.
- **Alpha Blend** digunakan untuk **smoke**, **fog**, dan **dust** karena mempertahankan transparansi dan penampakan yang lebih lembut.
- Pemilihan blending memengaruhi **visual**, **overdraw**, dan **sorting**, sehingga bukan hanya pilihan artistik tetapi juga keputusan rendering.

### Transisi ke Slide Berikutnya

Karena blending transparan sering membuat banyak partikel menimpa pixel yang sama, kita akan lanjut ke **Overdraw**, yaitu kondisi ketika banyak layer transparan dirender pada area layar yang sama dan dapat memengaruhi performa.

---

## Slide 021 - Overdraw

### Narasi

Setelah kita membedakan **additive** dan **alpha blend**, ada konsekuensi teknis yang sering muncul ketika banyak partikel transparan dirender bersamaan: **overdraw**.

**Overdraw** terjadi ketika banyak **transparent layer** menimpa **pixel** yang sama. Dalam contoh sederhana:

```text
Particle A
+
Particle B
+
Particle C
+
Particle D
```

`Particle A`, `Particle B`, `Particle C`, dan `Particle D` semuanya dirender pada area layar yang sama.

Secara visual, yang kita lihat mungkin hanya satu titik cahaya, asap, atau partikel yang tumpang tindih. Namun secara rendering, GPU tidak hanya memproses satu layer. Setiap partikel yang menutupi pixel tersebut tetap melewati tahap rasterisasi dan fragment processing.

Artinya, satu pixel bisa diproses beberapa kali. Jika empat partikel menimpa pixel yang sama, pixel itu dapat melewati `fragment shader` dan operasi blending hingga empat kali. Inilah mengapa efek partikel yang tampak sederhana bisa menjadi mahal secara performa.

Dalam rendering pipeline, masalah ini muncul setelah vertex dari partikel diubah menjadi primitive, lalu dirasterisasi menjadi fragment atau pixel. Karena partikel transparan biasanya membutuhkan blending, setiap layer tambahan tetap harus dihitung sebelum hasil akhirnya ditulis ke `framebuffer`.

Hal ini penting dalam grafika komputer real-time karena GPU memiliki keterbatasan **fill rate**, bandwidth, dan jumlah fragment yang dapat diproses per frame. Semakin banyak partikel yang saling menimpa, semakin besar beban GPU, meskipun ukuran partikel di layar terlihat kecil.

Kita juga perlu menghubungkan konsep ini dengan **sorting**. Pada blending transparan, urutan render sering memengaruhi hasil visual. Semakin banyak layer yang menimpa area yang sama, semakin kompleks keputusan urutan dan biaya render yang harus dikelola.

Intinya, **overdraw** bukan hanya masalah tampilan. Ia adalah masalah efisiensi rendering. Mahasiswa perlu memahami bahwa desain VFX tidak hanya ditentukan oleh warna dan bentuk partikel, tetapi juga oleh jumlah partikel, ukuran sprite, tingkat tumpang tindih, dan jenis blending yang digunakan.

### Inti yang Harus Ditekankan

- **Overdraw** terjadi ketika banyak **transparent layer** menimpa **pixel** yang sama.
- Setiap layer tambahan dapat menambah beban `fragment shader`, blending, dan penulisan ke `framebuffer`.
- Overdraw memengaruhi performa GPU, terutama pada efek partikel yang banyak dan saling tumpang tindih.
- Konsep ini berkaitan erat dengan pemilihan blending dan **sorting**, tetapi fokus utamanya adalah biaya rendering.

### Transisi ke Slide Berikutnya

Setelah kita memahami mengapa banyak partikel yang menimpa area layar yang sama bisa mahal, langkah berikutnya adalah melihat cara membangun sistem partikel yang lebih besar secara terstruktur melalui **VFX Graph**.

---

## Slide 022 - VFX Graph

### Narasi

Masalah **overdraw** yang kita lihat sebelumnya menunjukkan bahwa efek partikel tidak hanya soal membuat partikel muncul, tetapi juga bagaimana partikel itu dikelola saat jumlahnya bertambah. Banyak partikel transparan yang menimpa area layar yang sama dapat meningkatkan beban rendering. Untuk efek yang lebih besar, kita membutuhkan struktur kerja yang lebih rapi. Di sinilah **VFX Graph** diperkenalkan.

**VFX Graph** adalah sistem **node-based** untuk membangun efek visual. Artinya, alur efek tidak ditulis sebagai satu blok logika yang panjang, tetapi dipecah menjadi beberapa node. Setiap node mewakili satu tahap atau operasi, dan node-node tersebut dihubungkan menjadi sebuah graph. Cara ini membantu kita melihat alur data secara visual: dari mana partikel dibuat, bagaimana propertinya disiapkan, bagaimana perubahannya setiap frame, dan bagaimana hasilnya dikirim ke tahap rendering.

Diagram pada slide dapat dibaca dari atas ke bawah:

```text
Spawn
 ↓
Initialize
 ↓
Update
 ↓
Output
```

Urutan tahapnya adalah:

1. **`Spawn`**: tahap awal untuk membuat partikel.
2. **`Initialize`**: tahap menyiapkan kondisi awal partikel, misalnya posisi, kecepatan, umur, atau properti lain yang dibutuhkan efek.
3. **`Update`**: tahap memperbarui keadaan partikel setiap frame, sehingga partikel dapat bergerak, berubah ukuran, memudar, atau bereaksi sesuai aturan efek.
4. **`Output`**: tahap mengirimkan data partikel yang sudah siap ke tahap rendering.

Penting untuk dipahami bahwa **`Output`** bukan berarti gambar akhir sudah selesai. Tahap ini lebih berperan sebagai penghubung antara sistem efek dan **rendering pipeline**. Data partikel yang keluar dari VFX Graph kemudian akan diproses lebih lanjut oleh renderer, misalnya menjadi geometri atau sprite yang dirasterisasi ke layar.

Konsep ini penting dalam grafika komputer karena efek partikel sering kali melibatkan jumlah objek yang besar dan perubahan yang terjadi setiap frame. Dengan struktur node-based, efek dapat disusun secara modular, lebih mudah dikembangkan, dan lebih mudah dikontrol saat skalanya bertambah. Pada pertemuan ini, kita cukup memahami VFX Graph sebagai konsep alur kerja, bukan sebagai detail implementasi teknis yang lengkap.

### Inti yang Harus Ditekankan

- **VFX Graph** adalah sistem **node-based** untuk membangun efek visual secara lebih terstruktur.
- Alur dasarnya adalah **`Spawn` → `Initialize` → `Update` → `Output`**.
- **`Output`** menghasilkan data partikel untuk tahap rendering, bukan gambar akhir.
- Konsep ini membantu mengelola efek partikel dalam skala yang lebih besar.

### Transisi ke Slide Berikutnya

Setelah kita memahami alur dasar VFX Graph, langkah berikutnya adalah membandingkannya dengan **Particle System** untuk melihat kapan masing-masing pendekatan lebih cocok digunakan.

---

## Slide 023 - Particle System vs VFX Graph

### Narasi

Setelah kita melihat `VFX Graph` sebagai alur node `Spawn → Initialize → Update → Output`, langkah berikutnya adalah memposisikannya dengan `Particle System` yang lebih umum. Keduanya sama-sama dipakai untuk membuat efek partikel, tetapi titik beratnya berbeda.

`Particle System` biasanya lebih langsung digunakan untuk efek sederhana: asap, percikan, hujan, atau partikel dekoratif. Keunggulannya ada pada **workflow cepat**: parameter bisa diatur, preview terlihat cepat, dan implementasi tidak perlu membangun graph node secara manual. Karena itu, untuk **skala kecil-menengah**, `Particle System` sering menjadi pilihan yang efisien.

`VFX Graph` hadir untuk kebutuhan yang lebih kompleks. Dengan pendekatan **node-based**, kita bisa menyusun alur simulasi secara lebih eksplisit: partikel di-spawn, diinisialisasi, diupdate, lalu dioutput. Struktur ini memberi ruang untuk kontrol lebih besar, terutama ketika **jumlah partikel besar** atau perilaku efek tidak lagi cukup dijelaskan oleh parameter bawaan.

Perbedaan utamanya bukan hanya “mana yang lebih baik”, tetapi **konteks penggunaan**. `Particle System` lebih cocok jika tujuan adalah kecepatan produksi dan efek yang relatif terbatas. `VFX Graph` lebih cocok jika efek membutuhkan struktur simulasi yang lebih fleksibel, jumlah partikel besar, dan workflow yang lebih `GPU-oriented`. Dalam konteks grafika komputer, hal ini penting karena partikel yang banyak biasanya menuntut update posisi, umur, kecepatan, atau properti lain secara efisien.

Secara sederhana, kita bisa membacanya sebagai berikut:

| Aspek | `Particle System` | `VFX Graph` |
|---|---|---|
| Kompleksitas efek | Sederhana | Lebih kompleks |
| Workflow | Cepat | Node-based |
| Skala partikel | Kecil-menengah | Besar |
| Orientasi | Produksi cepat | Kontrol simulasi lebih luas |

Pada pertemuan ini, `VFX Graph` hanya dikenalkan sebagai konsep. Jadi, yang perlu dipahami mahasiswa adalah **kapan memilih pendekatan sederhana** dan **kapan beralih ke sistem node-based**, bukan langsung masuk ke detail teknis implementasinya.

### Inti yang Harus Ditekankan

- `Particle System` cocok untuk **efek sederhana**, **workflow cepat**, dan **skala kecil-menengah**.
- `VFX Graph` cocok untuk **efek lebih kompleks**, **jumlah partikel besar**, dan **workflow GPU-oriented**.
- Pilihan antara keduanya ditentukan oleh **kompleksitas efek**, **jumlah partikel**, dan **alur kerja produksi**, bukan sebagai pengganti satu sama lain.
- Pada pertemuan ini, `VFX Graph` masih berada pada tingkat **pengenalan konsep**.

### Transisi ke Slide Berikutnya

Setelah memahami kapan menggunakan `Particle System` atau `VFX Graph`, slide berikutnya akan menunjukkan bagaimana VFX dapat dihubungkan dengan `Shader Graph` untuk menghasilkan **custom visual effect**.

---

## Slide 024 - VFX dan Shader Graph

### Narasi

Setelah kita membandingkan **Particle System** dan **VFX Graph**, langkah berikutnya adalah memahami bagaimana efek visual tersebut diberi tampilan. Poin utamanya adalah **VFX dapat menggunakan material/shader custom**. Artinya, partikel tidak hanya hadir sebagai objek yang bergerak, tetapi juga bisa memiliki tampilan yang dikendalikan oleh shader.

```text
Particle
+
Shader Graph
=
Custom Visual Effect
```

Rumus sederhana ini bisa dibaca sebagai hubungan antara **data partikel** dan **penampakan visual**. Partikel menyediakan data dasar efek, sedangkan **Shader Graph** membantu kita mendefinisikan bagaimana data itu diubah menjadi tampilan material yang terlihat di layar.

Dalam konteks rendering, hubungan ini penting karena shader menentukan bagaimana objek atau partikel di-render. Dengan shader custom, VFX tidak terbatas pada tampilan bawaan; kita bisa menyesuaikan material agar sesuai dengan kebutuhan visual aplikasi.

Poin ini juga menjadi jembatan antara materi shader/material dengan materi VFX. Slide ini menghubungkan **Pertemuan 14** dan **Pertemuan 15**, yaitu dari konsep tampilan material menuju penerapan visual effect yang menggunakan partikel.

Sebelum lanjut, yang perlu dipahami mahasiswa adalah bahwa **VFX bukan hanya sistem partikel**, tetapi juga hasil interaksi antara partikel, material, dan shader. Pemahaman ini penting agar kita bisa menilai VFX dari kualitas tampilannya, bukan hanya dari keberadaan efeknya.

### Inti yang Harus Ditekankan

- **VFX dapat menggunakan material/shader custom** untuk mengatur tampilan partikel.
- **Shader Graph** membantu mendefinisikan shader secara visual atau terstruktur.
- `Particle + Shader Graph = Custom Visual Effect` menunjukkan bahwa efek visual lahir dari kombinasi data partikel dan material/shader.
- Konsep ini menghubungkan materi **shader/material** dengan materi **VFX/particle** dalam pipeline rendering.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa VFX dapat dikendalikan melalui shader, kita lanjut ke pertanyaan praktis: bagaimana VFX yang baik seharusnya dirancang agar tetap jelas, konsisten, dan sesuai kebutuhan visual.

---

## Slide 025 - Prinsip VFX yang Baik

### Narasi

Setelah kita melihat bahwa VFX dapat dibangun dari `particle` dan `Shader Graph`, langkah berikutnya adalah menilai apakah efek tersebut benar-benar membantu pengalaman visual. VFX yang baik bukan sekadar efek yang terlihat ramai, tetapi efek yang **mudah dibaca** oleh mata pemain pada waktu yang tepat.

Dalam grafika komputer, VFX sering menjadi elemen yang sangat memengaruhi persepsi aksi, feedback, dan gaya visual. Karena itu, desain VFX tidak hanya soal estetika, tetapi juga soal kejelasan informasi dan efisiensi rendering.

Kita dapat menilai VFX yang baik melalui beberapa prinsip berikut:

- **Mudah dibaca**: efek harus menyampaikan maksudnya dengan cepat, misalnya ledakan, serangan, atau perubahan status, tanpa membuat pemain menebak-nebak.
- **Tidak menutupi gameplay**: VFX boleh kuat, tetapi tidak boleh menghalangi objek penting, jalur gerak, atau informasi yang dibutuhkan pemain.
- **Konsisten dengan style**: efek harus sesuai dengan dunia visual game, baik dari warna, bentuk, intensitas, maupun karakter artistiknya.
- **Memiliki timing jelas**: efek harus muncul, memuncak, dan menghilang pada waktu yang terasa tepat, sehingga memberi kesan responsif.
- **Tidak terlalu banyak**: penambahan efek harus selektif, karena efek yang berlebihan dapat membuat layar terasa bising dan membingungkan.
- **Sesuai performance budget**: VFX harus tetap berada dalam batas sumber daya yang tersedia, sehingga tidak menurunkan performa rendering.

Dari sisi teknis, prinsip-prinsip ini berkaitan langsung dengan `rendering pipeline`. Semakin banyak partikel, layer efek, atau material shader yang aktif, semakin besar beban yang harus diproses oleh GPU. Karena itu, VFX yang baik adalah hasil keseimbangan antara **kejelasan visual**, **rasa gameplay**, dan **biaya komputasi**.

Sebelum lanjut, mahasiswa perlu memahami bahwa VFX bukan hanya “menambahkan efek”. VFX adalah keputusan desain dan teknis yang harus mendukung komunikasi visual, menjaga kenyamanan pemain, dan tetap efisien dalam proses rendering.

### Inti yang Harus Ditekankan

- VFX yang baik harus **mudah dibaca** dan tidak mengganggu gameplay.
- VFX harus **konsisten dengan style** dan memiliki **timing yang jelas**.
- Jumlah dan intensitas VFX harus tetap **sesuai performance budget** agar rendering tetap efisien.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana **timing** effect menentukan kesan impact, dari awal muncul hingga efek memudar.

---

## Slide 026 - Timing

### Narasi

Dalam VFX, **timing** bukan hanya soal durasi efek, tetapi menentukan seberapa kuat efek itu terasa. Efek yang muncul dengan timing yang tepat akan terasa **impactful**, mudah dibaca, dan mendukung aksi permainan. Sebaliknya, jika timing tidak pas, efek bisa terasa datar, lambat, atau justru mengganggu alur.

Slide ini menunjukkan contoh sederhana alur timing sebuah efek:

```text
Anticipation
 ↓
Burst
 ↓
Peak
 ↓
Decay
```

Kita bisa membaca diagram ini dari atas ke bawah sebagai urutan temporal. Artinya, efek tidak selalu harus langsung meledak di awal. Ada fase persiapan, fase ledakan, fase puncak, lalu fase pelemahan.

- **Anticipation** adalah isyarat awal bahwa sesuatu akan terjadi. Fase ini memberi “siap” kepada mata pemain sebelum efek utama muncul.
- **Burst** adalah momen awal ledakan atau perubahan visual yang cepat.
- **Peak** adalah titik intensitas tertinggi, di mana efek paling kuat dan paling mudah dikenali.
- **Decay** adalah fase pelemahan, di mana efek perlahan menghilang agar tidak terus memenuhi layar.

Timing yang terlalu lama dapat membuat efek terasa **lambat**, **mengganggu**, dan **tidak responsif**. Dalam konteks grafika komputer real-time, hal ini penting karena VFX harus tetap mendukung gameplay, bukan memperlambat pengalaman pengguna. Efek yang terlalu panjang juga dapat membebani **performance budget** jika partikel, glow, atau animasinya terus aktif lebih lama dari yang dibutuhkan.

Intinya, timing adalah dasar dari kesan visual. Sebelum menambah banyak elemen efek, kita perlu memastikan kapan efek mulai, kapan mencapai puncak, dan kapan harus selesai.

### Inti yang Harus Ditekankan

- **Timing** menentukan seberapa kuat kesan **impact** dari sebuah efek.
- Alur sederhana yang perlu dipahami adalah **Anticipation → Burst → Peak → Decay**.
- Efek yang terlalu lama dapat terasa **lambat**, **mengganggu**, dan **tidak responsif**.
- Timing harus tetap sesuai dengan kebutuhan gameplay dan **performance budget**.

### Transisi ke Slide Berikutnya

Setelah timing dipahami, langkah berikutnya adalah melihat bagaimana satu efek kompleks dapat dibangun dari beberapa lapisan. Di slide berikutnya, kita akan masuk ke **layering**, yaitu cara menggabungkan beberapa komponen efek agar hasilnya lebih kaya tanpa menjadi berlebihan.

---

## Slide 027 - Layering

### Narasi

Dalam efek visual yang lebih kompleks, kita jarang membangun satu efek sebagai satu objek tunggal. Biasanya efek tersebut disusun dari beberapa **layer** yang saling melengkapi. Pada slide ini, contoh yang diberikan adalah **explosion**, yaitu ledakan, yang dapat dipandang sebagai gabungan dari beberapa lapisan visual.

Kita dapat membaca diagramnya sebagai berikut:

```text
Flash
+
Core Burst
+
Smoke
+
Sparks
+
Debris
```

Tanda `+` di sini bukan berarti semua layer harus muncul bersamaan secara identik, melainkan menunjukkan bahwa efek akhir dibangun dari beberapa komponen visual yang berbeda. `Flash` biasanya memberikan kesan cahaya awal yang kuat. `Core Burst` menjadi inti ledakan. `Smoke` memberi volume dan sisa efek. `Sparks` menambah detail kecil yang bergerak cepat. `Debris` memberikan kesan pecahan atau objek fisik yang terlempar.

Penting untuk dipahami bahwa setiap layer memiliki peran visual yang berbeda. Jika semua layer hanya ditambahkan tanpa pembedaan peran, efek bisa menjadi ramai, sulit dibaca, dan tidak fokus. Dalam grafika komputer, hal ini berkaitan langsung dengan cara kita menyusun partikel, sprite, atau elemen visual dalam pipeline rendering: semakin banyak layer yang digambar, semakin besar beban visual dan potensi beban komputasi yang harus dikelola.

Oleh karena itu, prinsip utamanya adalah **jangan menambah layer tanpa tujuan**. Setiap layer harus menjawab pertanyaan sederhana: layer ini menambah apa? Apakah ia memperkuat inti efek, memberi detail, menambah volume, atau memberi kesan fisika? Jika jawabannya tidak jelas, layer tersebut sebaiknya tidak ditambahkan.

Sebelum lanjut, mahasiswa perlu memahami bahwa layering adalah cara membangun kompleksitas secara terkendali. Kita tidak langsung membuat satu efek yang sangat rumit, tetapi menyusun beberapa lapisan yang masing-masing memiliki fungsi. Setelah layer-layer ini ada, langkah berikutnya adalah menentukan layer mana yang paling dominan dan mana yang hanya menjadi pendukung.

### Inti yang Harus Ditekankan

- **Layering** adalah cara menyusun efek kompleks dari beberapa lapisan visual yang saling melengkapi.
- Contoh explosion terdiri dari `Flash`, `Core Burst`, `Smoke`, `Sparks`, dan `Debris`, di mana masing-masing memiliki peran visual yang berbeda.
- Setiap layer harus memiliki tujuan jelas agar efek tidak menjadi ramai, sulit dibaca, atau tidak fokus.
- Dalam konteks rendering, penambahan layer berarti menambah elemen visual yang harus digambar dan dikomposisikan, sehingga perlu dikelola secara sadar.

### Transisi ke Slide Berikutnya

Setelah kita memahami bahwa efek kompleks dapat dibangun dari beberapa layer, langkah berikutnya adalah menentukan layer mana yang harus paling terlihat dan mana yang hanya menjadi pendukung. Pada slide berikutnya, kita akan membahas **Visual Hierarchy**, yaitu cara menjaga focal point agar efek tetap mudah dibaca.

---

## Slide 028 - Visual Hierarchy

### Narasi

Dalam sistem partikel, jumlah partikel yang banyak tidak otomatis menghasilkan efek yang baik. Masalah yang sering muncul justru sebaliknya: semua partikel terlihat sama kuat, sehingga mata penonton tidak tahu harus melihat ke mana. Di sinilah **visual hierarchy** berperan.

Intinya, tidak semua partikel harus sama terang. Kita perlu menyusun partikel berdasarkan tingkat kepentingannya, misalnya:

```text
Primary Effect
   ↓
Secondary Detail
   ↓
Ambient Detail
```

Bagian atas diagram menunjukkan elemen yang paling dominan. **Primary Effect** adalah pusat perhatian, misalnya kilatan awal atau inti ledakan. Elemen ini biasanya paling terang, paling besar, atau paling cepat berubah, sehingga langsung dibaca oleh mata.

**Secondary Detail** berada di bawahnya. Bagian ini mendukung efek utama, tetapi tidak boleh menyaingi primary. Contoh yang wajar adalah asap, percikan, atau partikel yang memperkaya bentuk efek tanpa mengambil alih fokus.

**Ambient Detail** adalah lapisan terendah. Partikel di sini bersifat halus, redup, atau kecil, dan berfungsi mengisi ruang atau memberi kesan lingkungan. Jika ambient terlalu terang, ia akan bersaing dengan primary dan membuat efek kehilangan arah.

Tujuan utama hierarchy adalah menjaga **focal point**. Dalam grafika komputer, focal point bukan hanya soal estetika; ia menentukan bagaimana penonton memahami kejadian visual. Pada rendering pipeline, perbedaan hierarchy biasanya diterjemahkan menjadi atribut partikel seperti `brightness`, `size`, `color`, atau `alpha`, yang kemudian memengaruhi hasil rasterisasi dan tampilan akhir.

Sebelum lanjut, hal penting yang harus dipahami adalah: hierarchy adalah keputusan desain, bukan sekadar pengaturan teknis. Kita harus memutuskan dulu bagian mana yang harus terlihat paling kuat, baru kemudian mengatur partikel agar mendukung keputusan tersebut.

### Inti yang Harus Ditekankan

- **Visual hierarchy** mengatur kekuatan visual partikel melalui `Primary Effect`, `Secondary Detail`, dan `Ambient Detail`.
- Tujuannya menjaga **focal point** agar penonton langsung memahami bagian mana yang paling penting.
- Hierarchy memengaruhi cara partikel dirender, misalnya melalui `brightness`, `size`, `color`, atau `alpha`.

### Transisi ke Slide Berikutnya

Setelah kita memahami partikel mana yang harus menonjol dan mana yang hanya mendukung, langkah berikutnya adalah memastikan efek tersebut tetap efisien. Di slide berikutnya kita akan masuk ke **Optimization**, yaitu cara menjaga kualitas visual tanpa membebani hardware.

---

## Slide 029 - Optimization

### Narasi

Setelah kita membahas **visual hierarchy**, ada pertanyaan praktis yang muncul: bagaimana efek partikel tetap menarik tanpa membuat aplikasi menjadi berat? Di sinilah **optimization** masuk. Dalam grafika komputer, optimization adalah proses menyeimbangkan kualitas visual, biaya komputasi, dan kemampuan perangkat target. Tujuannya bukan hanya membuat aplikasi “cepat”, tetapi memastikan pengalaman visual tetap baik pada hardware yang tersedia.

Kita perlu memahami bahwa optimization **bukan** berarti membuat semua setting serendah mungkin. Jika semua parameter direndahkan, aplikasi memang mungkin lebih ringan, tetapi hasil akhirnya bisa kehilangan kejelasan, detail, atau focal point. Yang kita cari adalah titik keseimbangan: elemen penting tetap terbaca, sementara biaya rendering yang tidak terlalu berdampak visual dapat dikurangi.

Dalam konteks **rendering pipeline**, optimization biasanya berarti mengurangi beban kerja pada tahap yang mahal, misalnya jumlah partikel, kompleksitas geometri, jumlah draw call, resolusi efek, atau frekuensi update. Namun keputusan ini harus tetap mempertimbangkan target hardware. Perangkat dengan GPU lebih kuat dapat menanggung lebih banyak efek, sedangkan perangkat terbatas membutuhkan prioritas yang lebih ketat.

Karena itu, kita perlu membiasakan diri berpikir dalam dua sisi sekaligus: **apa yang ingin ditampilkan** dan **berapa biaya untuk menampilkannya**. Optimization adalah cara mengambil keputusan teknis agar aplikasi tetap terlihat baik, berjalan efisien, dan sesuai target hardware.

### Inti yang Harus Ditekankan

- **Optimization** adalah proses menyeimbangkan kualitas visual, efisiensi, dan target hardware.
- Optimization **bukan** menurunkan semua setting serendah mungkin.
- Keputusan optimasi harus mempertimbangkan prioritas visual dan biaya rendering.
- Dalam grafika komputer, optimasi sering berkaitan dengan beban kerja pada **rendering pipeline** dan kemampuan perangkat.

### Transisi ke Slide Berikutnya

Untuk menilai apakah aplikasi sudah efisien, kita perlu mengukur kinerja secara kuantitatif. Selanjutnya kita akan melihat **frame time** dan hubungannya dengan FPS, sehingga target performa dapat dipahami dalam satuan waktu.

---

## Slide 030 - Frame Time

### Narasi

Setelah kita bicara tentang **optimization**, ada satu ukuran yang sangat praktis untuk melihat apakah aplikasi grafika berjalan sesuai target: **frame time**.

**Frame time** adalah durasi waktu yang dibutuhkan untuk menampilkan satu frame. Jika aplikasi berjalan pada `FPS` tertentu, kita bisa menghitung frame time dengan rumus:

```text
Frame Time
=
1000 ms / FPS
```

Rumus ini penting karena `FPS` biasanya kita lihat sebagai jumlah frame per detik, sedangkan `frame time` memberi tahu kita berapa milidetik yang tersedia untuk satu frame.

Sebagai contoh:

```text
30 FPS ≈ 33.3 ms
60 FPS ≈ 16.7 ms
120 FPS ≈ 8.3 ms
```

Artinya, jika target aplikasi adalah `60 FPS`, maka setiap frame harus selesai dalam sekitar `16.7 ms`. Jika prosesnya lebih lama dari itu, frame rate akan turun.

Dalam konteks grafika komputer, waktu itu bukan hanya untuk menampilkan gambar. Dalam satu frame, sistem harus menyelesaikan banyak pekerjaan: memperbarui state, transformasi, rasterisasi, shading, dan menyiapkan output ke layar. Jadi **frame time** menjadi batas waktu praktis bagi seluruh proses rendering dan update.

Yang perlu kita pahami sebelum lanjut adalah: **frame time** bukan sekadar angka teknis, melainkan ukuran keterbatasan waktu. Semakin tinggi target `FPS`, semakin kecil waktu yang tersedia per frame.

### Inti yang Harus Ditekankan

- **Frame time** adalah durasi satu frame, bukan jumlah frame per detik.
- Hubungannya dengan `FPS` adalah `Frame Time = 1000 ms / FPS`.
- Untuk `60 FPS`, target frame time sekitar `16.7 ms`.
- Jika frame time melebihi target, `FPS` akan turun dan aplikasi terasa kurang mulus.
- Frame time menjadi dasar untuk memahami batas waktu proses rendering dan update.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan melihat apa saja yang harus selesai dalam waktu sekitar `16.7 ms` tersebut. Di situlah kita masuk ke konsep **frame budget**, yaitu pembagian waktu yang tersedia untuk berbagai proses dalam satu frame.

---

## Slide 031 - Frame Budget

### Narasi

Setelah kita melihat bahwa 60 FPS berarti frame time sekitar 16.7 ms, langkah berikutnya adalah memahami apa yang terjadi di dalam 16.7 ms itu. Dalam konteks real-time rendering, kita menyebutnya **frame budget**.

```text
Total frame budget
≈ 16.7 ms
```

Frame budget bukan hanya waktu untuk menggambar gambar. Ia adalah total waktu yang tersedia bagi seluruh sistem untuk menyelesaikan satu frame sebelum frame berikutnya harus ditampilkan.

Artinya, dalam 16.7 ms tersebut, sistem harus menyelesaikan banyak pekerjaan, antara lain:

- `CPU logic` untuk menjalankan aturan aplikasi,
- `physics` untuk menghitung gerak atau simulasi,
- `animation` untuk memperbarui pose karakter atau objek,
- `rendering` untuk mengubah scene menjadi piksel,
- `UI` untuk memperbarui antarmuka,
- `audio` untuk pemrosesan suara,
- dan proses lain yang berjalan di frame yang sama.

Poin pentingnya adalah **rendering** hanyalah salah satu bagian dari budget. Jika salah satu proses memakan waktu terlalu lama, sisa proses lain menjadi sempit. Akibatnya, total waktu frame melampaui 16.7 ms, frame time naik, dan FPS dapat turun.

Dalam grafika komputer, konsep ini penting karena performa real-time tidak hanya ditentukan oleh kualitas visual, tetapi juga oleh kemampuan sistem menyelesaikan seluruh pipeline dalam batas waktu yang ketat. Mahasiswa perlu membiasakan diri berpikir dalam satuan waktu per frame, bukan hanya jumlah objek atau efek visual.

Sebelum masuk ke detail teknis, yang perlu dipahami adalah: setiap komponen dalam aplikasi grafika bersaing untuk mendapatkan waktu yang sama. Jika kita ingin menjaga 60 FPS, kita harus memastikan total kerja seluruh komponen tetap berada di dalam **frame budget**.

### Inti yang Harus Ditekankan

- **Frame budget** adalah total waktu yang tersedia untuk menyelesaikan satu frame, misalnya sekitar **16.7 ms** pada 60 FPS.
- Waktu itu digunakan bersama oleh `CPU logic`, `physics`, `animation`, `rendering`, `UI`, `audio`, dan proses lain.
- Jika total pekerjaan melebihi frame budget, frame time meningkat dan FPS dapat turun.
- Rendering penting, tetapi bukan satu-satunya sumber beban dalam aplikasi real-time.

### Transisi ke Slide Berikutnya

Setelah kita memahami bahwa seluruh sistem harus berbagi waktu yang sama, langkah berikutnya adalah melihat ke mana waktu itu sebenarnya habis. Pada slide berikutnya, kita akan membedakan beban yang biasanya muncul di **CPU** dan beban yang muncul di **GPU**.

---

## Slide 032 - CPU vs GPU

### Narasi

Setelah kita memahami bahwa pada 60 FPS total waktu yang tersedia hanya sekitar `16.7 ms`, langkah berikutnya adalah memahami dari mana tekanan waktu itu berasal. Dalam sistem grafika komputer, beban kerja umumnya terbagi ke dua perangkat utama: **CPU** dan **GPU**. Keduanya tidak bekerja sama, tetapi berurutan dan saling menunggu. Jika salah satu terlalu lama, frame berikutnya bisa terlambat.

Pada sisi **CPU**, masalah biasanya muncul sebelum gambar benar-benar digambar. CPU bertugas menyiapkan data scene, menjalankan logika, animasi, fisika, dan menyiapkan perintah render. Jika ada terlalu banyak object, scripting berat, `draw submission` yang terlalu banyak, atau simulasi fisika yang kompleks, CPU bisa menjadi bottleneck. Akibatnya, GPU mungkin sudah siap, tetapi perintah render tidak datang cukup cepat.

Pada sisi **GPU**, masalah muncul saat proses render dan rasterisasi sedang berjalan. GPU bertanggung jawab mengubah geometri menjadi piksel, mengevaluasi `shader`, menghitung pencahayaan, dan menghasilkan frame. Beban GPU bisa meningkat karena `shader kompleks`, `overdraw`, resolusi tinggi, `shadow`, atau `post-processing`. Semakin banyak piksel yang diproses berulang kali, semakin besar biaya render yang harus dibayar.

Cara membaca slide ini adalah dengan melihat dua kelompok penyebab performa. Kelompok pertama adalah masalah **CPU-side**: terlalu banyak object, scripting, `draw submission`, dan physics. Kelompok kedua adalah masalah **GPU-side**: shader kompleks, overdraw, resolusi tinggi, shadow, dan post-processing. Poin pentingnya bukan memilih salah satu, tetapi mengenali bahwa gejala yang sama, misalnya frame rate turun, bisa disebabkan oleh sisi yang berbeda.

Dalam konteks rendering pipeline, kita bisa membayangkan alurnya sebagai berikut:

1. CPU menjalankan game logic, physics, animation, dan script.
2. CPU menyiapkan scene data dan mengirim `draw call` atau `draw submission` ke GPU.
3. GPU melakukan transformasi, rasterisasi, shading, shadow, dan post-processing.
4. Frame hasil render dikirim kembali untuk ditampilkan.

Jika tahap 1 atau 2 terlalu lama, masalahnya cenderung CPU. Jika tahap 3 terlalu lama, masalahnya cenderung GPU. Pemahaman ini penting karena strategi optimasinya berbeda: CPU biasanya dioptimasi dengan mengurangi object, batching, script, atau physics; GPU biasanya dioptimasi dengan mengurangi shader cost, overdraw, resolusi, shadow, atau post-processing.

Sebelum lanjut, mahasiswa perlu memahami bahwa performa grafika komputer bukan hanya soal "GPU lemah" atau "CPU lemah". Yang lebih penting adalah mengidentifikasi bottleneck pada tahap pipeline mana. Tanpa identifikasi yang benar, optimasi bisa salah sasaran.

### Inti yang Harus Ditekankan

- Masalah performa dapat berasal dari **CPU** atau **GPU**, dan keduanya memiliki penyebab yang berbeda.
- **CPU** biasanya terkait object, scripting, `draw submission`, dan physics.
- **GPU** biasanya terkait `shader kompleks`, `overdraw`, resolusi tinggi, `shadow`, dan `post-processing`.
- Frame rate turun tidak selalu berarti GPU bermasalah; perlu dilihat tahap pipeline mana yang terlambat.
- Strategi optimasi CPU dan GPU berbeda, sehingga identifikasi bottleneck menjadi langkah penting.

### Transisi ke Slide Berikutnya

Untuk mengetahui secara pasti apakah masalahnya ada di CPU, GPU, memory, physics, script, atau subsistem lain, kita perlu alat analisis yang lebih detail. Alat itulah yang akan kita bahas pada slide berikutnya, yaitu **Profiler**.

---

## Slide 033 - Profiler

### Narasi

Setelah kita memetakan sumber masalah performa ke **CPU** dan **GPU**, langkah berikutnya adalah mengukur masalah tersebut secara lebih objektif. Di sinilah **Profiler** berperan. Profiler membantu kita melihat di mana waktu eksekusi, memori, atau beban sistem paling banyak terpakai, sehingga kita tidak hanya menebak-nebak bagian mana yang menjadi penyebab frame rate turun atau aplikasi terasa berat.

Dalam konteks grafika komputer, profiler biasanya menyajikan data berdasarkan kategori tertentu. Kategori ini penting karena masalah performa jarang muncul sebagai satu penyebab tunggal. Misalnya, sebuah scene bisa terlihat lambat karena **CPU** terlalu sibuk memproses banyak objek, atau karena **rendering** membebani GPU dengan shader dan efek visual yang kompleks.

Beberapa kategori umum yang dapat dianalisis oleh profiler antara lain:

- `CPU`
- `rendering`
- `memory`
- `physics`
- `scripts`
- subsistem lain yang relevan

Kategori `CPU` biasanya membantu kita melihat beban dari logika aplikasi, scripting, pemrosesan objek, atau proses yang terjadi sebelum data dikirim ke GPU. Kategori `rendering` berkaitan dengan tahap visual pipeline, seperti proses menggambar objek, penggunaan shader, atau beban GPU saat menampilkan scene. Kategori `memory` penting untuk mengetahui apakah aplikasi menggunakan memori secara efisien atau ada potensi kebocoran memori. Sementara itu, kategori `physics` dan `scripts` membantu kita memahami apakah simulasi fisika atau logika program juga ikut memengaruhi performa.

Hal yang perlu kita tekankan adalah bahwa profiler bukan sekadar alat untuk melihat angka. Profiler adalah dasar pengambilan keputusan optimasi. Jika data menunjukkan bahwa beban terbesar ada di `scripts`, maka mengoptimasi shader mungkin tidak akan memberikan hasil yang signifikan. Sebaliknya, jika beban terbesar ada di `rendering`, maka kita perlu memeriksa pipeline visual, kompleksitas material, atau efek yang digunakan. Dengan cara ini, optimasi menjadi lebih terarah dan berbasis data.

### Inti yang Harus Ditekankan

- **Profiler** digunakan untuk menganalisis performa secara lebih detail dan berbasis data.
- Kategori seperti `CPU`, `rendering`, `memory`, `physics`, dan `scripts` membantu kita memetakan sumber masalah.
- Optimasi yang efektif harus dimulai dari identifikasi bottleneck, bukan dari tebakan.

### Transisi ke Slide Berikutnya

Agar hasil profiling benar-benar dapat diandalkan, kita perlu mengikuti alur kerja yang sistematis. Selanjutnya, kita akan membahas **Profiling Workflow**, yaitu langkah-langkah untuk membuat baseline, menjalankan scene representatif, mencatat metrik, mengubah satu variabel, mengukur kembali, lalu membandingkan hasilnya.

---

## Slide 034 - Profiling Workflow

### Narasi

Dalam profiling, langkah yang paling penting adalah membangun alur kerja yang bisa dibandingkan secara adil. Tanpa alur seperti ini, perubahan performa yang kita lihat bisa saja berasal dari banyak hal sekaligus, sehingga sulit menentukan penyebab sebenarnya.

Diagram pada slide menunjukkan urutan kerja profiling yang sederhana namun disiplin:

```text
Create Baseline
      ↓
Run Representative Scene
      ↓
Record Metrics
      ↓
Change One Variable
      ↓
Measure Again
      ↓
Compare
```

Secara visual, alur ini dibaca dari atas ke bawah sebagai satu siklus pengukuran. Tahapannya dapat dipahami sebagai berikut:

1. **Create Baseline** — kita menetapkan kondisi awal aplikasi atau scene yang akan dijadikan acuan. Baseline ini penting karena menjadi patokan untuk menilai apakah perubahan yang dilakukan membuat performa membaik atau memburuk.
2. **Run Representative Scene** — kita menjalankan scene yang mewakili beban kerja nyata, bukan scene kosong atau kondisi yang terlalu sederhana. Dengan begitu, hasil profiling lebih mendekati situasi yang akan dialami pengguna.
3. **Record Metrics** — kita mencatat metrik performa yang relevan, misalnya metrik yang berkaitan dengan CPU, rendering, memory, atau subsistem lain yang sedang dianalisis.
4. **Change One Variable** — kita mengubah hanya satu hal pada satu waktu, misalnya satu parameter rendering, satu objek, atau satu bagian pipeline. Prinsip ini membantu kita mengisolasi penyebab perubahan performa.
5. **Measure Again** — setelah perubahan dilakukan, kita mengukur kembali dengan cara yang sama seperti saat baseline. Konsistensi cara pengukuran sangat penting agar perbandingan tetap valid.
6. **Compare** — terakhir, kita membandingkan hasil pengukuran baru dengan baseline. Dari perbandingan inilah kita bisa mengambil keputusan yang lebih rasional, bukan berdasarkan tebakan.

Inti dari workflow ini adalah **kontrol eksperimen**. Dalam grafika komputer, performa sering dipengaruhi oleh banyak faktor sekaligus: geometri, shader, lighting, kamera, memory, dan beban CPU. Jika kita mengubah banyak hal sekaligus, kita tidak akan tahu faktor mana yang sebenarnya memberi dampak.

Oleh karena itu, sebelum masuk ke faktor teknis tertentu, mahasiswa perlu memahami bahwa profiling yang baik selalu dimulai dari baseline yang jelas, pengukuran yang konsisten, dan perubahan yang terkontrol. Dengan cara ini, hasil profiling tidak hanya menjadi angka, tetapi menjadi dasar keputusan optimasi yang dapat dijelaskan.

### Inti yang Harus Ditekankan

- **Baseline** adalah acuan awal yang wajib ada sebelum menilai dampak perubahan.
- **Representative scene** membuat hasil profiling lebih realistis dan dapat dipercaya.
- **Change one variable** membantu mengisolasi penyebab performa, bukan sekadar melihat perubahan secara umum.
- **Compare** harus dilakukan dengan metrik dan kondisi pengukuran yang konsisten.

### Transisi ke Slide Berikutnya

Setelah kita memahami alur profiling yang terkontrol, langkah berikutnya adalah melihat salah satu faktor yang sering memengaruhi performa rendering, yaitu **triangle count**.

---

## Slide 035 - Triangle Count

### Narasi

Ketika kita melihat objek 3D di layar, bentuknya pada akhirnya banyak direpresentasikan sebagai kumpulan **triangle**. Dalam grafika komputer, **triangle** menjadi primitive geometri yang sangat penting karena mudah diproses oleh GPU dan cocok untuk tahap **rasterisasi**. Jadi, ketika kita menyebut sebuah **mesh 3D**, yang kita maksud adalah struktur geometri yang tersusun dari banyak triangle, vertex, dan edge.

**`triangle count`** adalah jumlah triangle yang membentuk sebuah mesh atau scene. Semakin tinggi `triangle count`, semakin banyak geometri yang harus diproses oleh sistem rendering. Artinya, GPU perlu menangani lebih banyak data geometri, lebih banyak perhitungan posisi, dan lebih banyak area yang harus di-rasterisasi menjadi pixel. Inilah mengapa `triangle count` yang terlalu tinggi dapat meningkatkan **cost** rendering.

Namun, kita perlu berhati-hati. `triangle count` tinggi tidak selalu otomatis berarti aplikasi atau game akan lambat. Dalam **rendering pipeline**, performa dipengaruhi oleh banyak hal. Ada tahap pemrosesan vertex, tahap rasterisasi, tahap fragment atau shader, penggunaan material, tekstur, overdraw, dan juga cara objek digambar oleh GPU. Jadi, `triangle count` adalah salah satu indikator penting, tetapi bukan satu-satunya faktor performa.

Cara yang tepat untuk memahaminya adalah sebagai berikut: `triangle count` memberi tahu kita seberapa kompleks geometri dari sisi jumlah primitive. Jika sebuah model memiliki ratusan ribu atau jutaan triangle, itu bisa menjadi beban yang signifikan, terutama jika banyak objek seperti itu dirender bersamaan. Tetapi jika jumlah triangle sedang dan scene tetap lambat, kemungkinan ada faktor lain yang perlu diperiksa.

Karena itu, dalam praktik optimasi, kita tidak cukup hanya melihat angka `triangle count`. Kita perlu menghubungkannya dengan hasil **profiling**, seperti yang sudah kita lihat sebelumnya. Dengan profiling, kita bisa tahu apakah masalahnya berasal dari geometri, shader, material, atau cara objek digambar. Pendekatan ini penting agar optimasi tidak dilakukan secara asal, misalnya mengurangi detail model padahal masalah sebenarnya ada di tempat lain.

Sebelum lanjut, hal yang perlu dipahami adalah bahwa `triangle count` adalah ukuran beban geometri, bukan ukuran total performa. Ia membantu kita menilai kompleksitas mesh, tetapi keputusan optimasi yang baik harus mempertimbangkan seluruh pipeline rendering.

### Inti yang Harus Ditekankan

- **Mesh 3D** tersusun dari **triangle**, dan `triangle count` mengukur jumlah primitive geometri tersebut.
- `triangle count` yang terlalu tinggi dapat meningkatkan **cost** rendering karena lebih banyak geometri yang diproses dan di-rasterisasi.
- `triangle count` bukan satu-satunya faktor performa; performa juga dipengaruhi oleh tahap lain dalam **rendering pipeline**.

### Transisi ke Slide Berikutnya

Setelah memahami `triangle count` sebagai salah satu indikator beban geometri, kita perlu melihat faktor lain yang sering sangat menentukan performa, yaitu **draw call**.

---

## Slide 036 - Draw Call

### Narasi

Dalam pipeline rendering, GPU tidak cukup hanya menerima geometri; ia juga perlu tahu **bagaimana** geometri itu digambar. Informasi ini sering disebut **state rendering**, misalnya material, shader, atau kondisi gambar yang sedang aktif.

**Draw call** adalah perintah dari CPU ke GPU untuk menggambar satu set geometry dengan state tertentu. Secara sederhana, satu draw call bisa dipahami sebagai satu instruksi: “gambar objek ini dengan material ini, shader ini, dan kondisi rendering ini.”

Hal penting yang perlu kita pahami adalah draw call tidak selalu sama dengan jumlah objek. Satu objek dengan satu material bisa menghasilkan satu draw call. Namun, jika satu objek memiliki beberapa material atau beberapa bagian yang digambar dengan state berbeda, jumlah draw call bisa meningkat.

Begitu pula dengan banyak objek. Jika ada banyak object dan banyak material, CPU perlu mengirim lebih banyak perintah gambar ke GPU. Akibatnya, overhead pengiriman draw command dapat meningkat, meskipun triangle count masing-masing objek tidak terlalu besar.

> draw call / batches.

Dalam konteks performa real-time, draw call menjadi faktor penting karena GPU sering menunggu perintah dari CPU. Semakin banyak draw call yang harus dikirim dan diproses, semakin besar beban CPU dan potensi bottleneck dalam pipeline rendering.

Oleh karena itu, ketika mengevaluasi performa scene, kita tidak hanya melihat triangle count. Kita juga perlu memperhatikan berapa banyak draw call yang dihasilkan oleh kombinasi object, material, dan state rendering.

### Inti yang Harus Ditekankan

- **Draw call** adalah perintah untuk menggambar geometry dengan state tertentu.
- Banyak object dan banyak material dapat meningkatkan jumlah **draw call / batches**.
- Performa rendering tidak hanya ditentukan oleh triangle count, tetapi juga oleh overhead pengiriman perintah gambar ke GPU.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa draw call dapat menjadi sumber overhead, langkah berikutnya adalah melihat bagaimana sistem rendering mengurangi jumlah perintah yang dikirim. Pada slide berikutnya, kita akan membahas **batching**, yaitu cara pengelompokan objek agar pengiriman draw command menjadi lebih efisien.

---

## Slide 037 - Batching

### Narasi

Pada tahap sebelumnya, kita sudah melihat bahwa banyak objek dengan material berbeda dapat meningkatkan jumlah `draw call`. Di sinilah **batching** masuk sebagai strategi untuk menekan biaya pengiriman perintah ke GPU.

Inti dari batching adalah mengelompokkan beberapa objek yang memiliki kemiripan tertentu agar tidak perlu dikirim sebagai banyak perintah gambar terpisah. Dengan kata lain, alur awalnya dapat dibaca seperti ini:

```text
Many Similar Objects
      ↓
More Efficient Submission
```

Artinya, banyak objek serupa dapat diubah menjadi pengiriman yang lebih efisien. Yang dihemat terutama adalah **overhead** dari CPU saat menyiapkan dan mengirim banyak `draw command` ke GPU.

Dalam konteks rendering pipeline, GPU sebenarnya bisa memproses geometri dengan cepat. Namun, jika CPU harus mengirim ratusan atau ribuan perintah kecil satu per satu, waktu CPU dan komunikasi CPU-GPU bisa menjadi bottleneck. Batching membantu mengurangi jumlah perintah yang harus dikirim, sehingga pipeline lebih ringan dan frame time lebih stabil.

Perlu diperhatikan bahwa batching tidak berarti semua objek bisa digabung secara bebas. Objek yang di-batch biasanya memiliki kesamaan tertentu, misalnya bentuk mesh yang sama, material yang kompatibel, atau state rendering yang serupa. Semakin mirip objeknya, semakin mudah dan efektif pengelompokannya.

Di Unity, terdapat beberapa mekanisme batching yang bisa digunakan. Mekanisme ini membantu developer memilih cara pengelompokan yang sesuai dengan kebutuhan adegan. Untuk kasus banyak objek berulang dengan mesh dan material yang sama, kita akan melihat salah satu mekanisme penting berikutnya, yaitu **GPU Instancing**.

### Inti yang Harus Ditekankan

- **Batching** bertujuan mengurangi overhead pengiriman `draw command`, bukan hanya mengurangi jumlah objek.
- Banyak objek serupa dapat dikirim dengan cara yang lebih efisien daripada banyak `draw call` terpisah.
- Efektivitas batching bergantung pada kemiripan objek, seperti mesh, material, atau state rendering.
- Dalam pipeline, batching membantu meringankan beban CPU dan komunikasi CPU-GPU.

### Transisi ke Slide Berikutnya

Setelah memahami ide umum batching, kita akan masuk ke mekanisme yang sangat berguna untuk banyak objek berulang, yaitu **GPU Instancing**, yang cocok untuk objek seperti rumput, batu, props, dan elemen lingkungan yang diulang.

---

## Slide 038 - GPU Instancing

### Narasi

Setelah kita membahas **batching** sebagai cara mengurangi overhead pengiriman `draw command`, **GPU instancing** adalah salah satu bentuk optimasi yang sangat relevan ketika adegan berisi banyak objek yang mirip.

Inti dari **GPU instancing** adalah: jika banyak objek menggunakan `mesh` dan `material` yang sama, GPU dapat memproses banyak objek tersebut dalam satu pengiriman yang lebih efisien, alih-alih memproses setiap objek sebagai `draw call` terpisah.

Dengan kata lain, alur kerja yang biasanya berulang:

- kirim geometri objek pertama,
- kirim `material` dan parameter objek pertama,
- render,
- ulangi untuk objek kedua, ketiga, dan seterusnya,

dapat dikompres menjadi satu pengiriman yang membawa banyak instans dari objek yang sama.

Contoh yang paling mudah dibayangkan adalah lingkungan 3D:

- **grass**,
- **rocks**,
- **props**,
- **repeated environment objects**.

Objek-objek ini sering memiliki bentuk dan tampilan yang sama, tetapi posisinya berbeda. Dalam konteks `rendering pipeline`, instancing membantu mengurangi beban CPU dalam menyiapkan dan mengirim banyak perintah render, sehingga GPU dapat lebih fokus pada proses rasterisasi dan shading.

Yang perlu kita tekankan, **GPU instancing** bukan berarti semua objek dalam adegan otomatis lebih cepat. Ia paling efektif ketika ada kesamaan `mesh` dan kesamaan `material`. Jika setiap objek memiliki geometri atau material yang sangat berbeda, manfaat instancing akan berkurang.

Sebelum lanjut, mahasiswa perlu memahami bahwa instancing adalah strategi optimasi pengiriman data render, bukan strategi mengubah detail geometri. Ini penting karena nanti kita akan membahas pendekatan lain yang bekerja pada sisi detail objek berdasarkan jarak kamera.

### Inti yang Harus Ditekankan

- **GPU instancing** cocok untuk banyak objek dengan `mesh` dan `material` yang sama.
- Tujuannya adalah mengurangi overhead `draw command` atau pengiriman render yang berulang.
- Contoh penerapannya ada pada **grass**, **rocks**, **props**, dan objek lingkungan yang berulang.
- Instancing mengoptimalkan cara objek dikirim ke GPU, bukan mengubah detail geometri objek.

### Transisi ke Slide Berikutnya

Jika **instancing** membantu mengurangi beban pengiriman banyak objek yang mirip, maka **LOD** membantu mengurangi beban geometri dengan menyesuaikan tingkat detail objek berdasarkan jaraknya dari kamera.

---

## Slide 039 - LOD

### Narasi

Setelah kita melihat `GPU Instancing` untuk banyak objek dengan bentuk yang sama, ada satu pertanyaan penting berikutnya: apakah setiap objek harus selalu dirender dengan detail penuh? Jawabannya tidak selalu. Di sinilah konsep **LOD** atau **Level of Detail** menjadi penting.

`LOD` adalah strategi optimasi geometri di mana objek yang berada pada jarak berbeda dari kamera dapat menggunakan tingkat detail yang berbeda. Intuisinya sederhana: objek yang dekat dengan kamera terlihat besar dan detailnya mudah dikenali, sedangkan objek yang jauh terlihat kecil sehingga detail geometri yang sangat halus tidak lagi memberikan manfaat visual yang berarti.

Slide ini menyajikan pola dasar:

```text
Near
→ High Detail

Medium
→ Medium Detail

Far
→ Low Detail
```

Cara membaca pola ini adalah dari atas ke bawah sebagai perubahan jarak kamera terhadap objek. Pada posisi `Near`, objek memakai `High Detail`, yaitu geometri dengan jumlah vertex dan face yang lebih banyak. Pada posisi `Medium`, objek dapat memakai `Medium Detail`. Pada posisi `Far`, objek cukup memakai `Low Detail`, yaitu geometri yang lebih sederhana.

Dalam konteks rendering pipeline, LOD bekerja terutama pada tahap pemrosesan geometri. Semakin banyak vertex dan face yang dikirim ke GPU, semakin besar beban pada vertex processing dan rasterization. Dengan memilih mesh yang lebih sederhana untuk objek jauh, kita dapat mengurangi beban tersebut tanpa membuat perubahan visual yang terlalu mencolok.

Poin penting yang perlu dipahami mahasiswa adalah bahwa LOD bukan berarti objek jauh “hilang” atau tidak dirender. Objek tetap dirender, tetapi menggunakan representasi geometri yang lebih ringan. Tujuannya adalah menjaga kualitas visual pada bagian yang penting, yaitu objek dekat, sekaligus menjaga performa keseluruhan scene.

### Inti yang Harus Ditekankan

- **LOD** adalah **Level of Detail**, yaitu penggunaan geometri berbeda berdasarkan jarak objek terhadap kamera.
- Objek dekat biasanya memakai **high detail**, objek sedang memakai **medium detail**, dan objek jauh memakai **low detail**.
- LOD penting karena mengurangi beban geometri pada GPU tanpa menurunkan kualitas visual secara signifikan.
- LOD berbeda dari instancing: instancing mengoptimalkan banyak objek serupa, sedangkan LOD mengoptimalkan tingkat detail objek berdasarkan jarak.

### Transisi ke Slide Berikutnya

Setelah kita mengurangi detail geometri berdasarkan jarak, masih ada objek yang sebenarnya tidak perlu dirender karena tertutup oleh objek lain. Pada slide berikutnya, kita akan membahas **Occlusion Culling**, yaitu cara menghindari rendering objek yang terhalang oleh objek di depannya.

---

## Slide 040 - Occlusion Culling

### Narasi

**Occlusion Culling** adalah teknik optimasi yang bertujuan menghindari rendering objek yang tidak terlihat karena tertutup objek lain. Dalam grafika komputer, GPU tidak perlu memproses objek yang pada akhirnya tidak akan muncul di layar, karena itu hanya menambah beban tanpa kontribusi visual.

Intuisi visualnya sederhana. Bayangkan kamera berada di depan sebuah dinding. Di belakang dinding ada objek lain. Dari sudut pandang kamera, objek di belakang dinding terhalang oleh dinding, sehingga disebut **hidden object**.

```text
Camera
 ↓
Wall
 ↓
Hidden Object
```

Dalam diagram ini, alur visibilitas bergerak dari kamera menuju objek. Kamera melihat **wall** terlebih dahulu. Karena **wall** menghalangi garis pandang, **hidden object** di belakangnya tidak perlu selalu dirender.

Pentingnya konsep ini terletak pada efisiensi pipeline rendering. Sistem dapat memutuskan objek mana yang layak diproses GPU. Dengan **occlusion culling**, objek yang tertutup dapat di-skip, sehingga mengurangi beban rendering.

Teknik ini melengkapi optimasi seperti **LOD**. LOD mengurangi detail geometri objek yang masih terlihat, sedangkan **occlusion culling** memutuskan apakah objek perlu dirender sama sekali. Keduanya membantu menjaga performa rendering real-time, terutama pada scene dengan banyak objek.

Sebelum lanjut, mahasiswa perlu memahami bahwa **occlusion culling** bukan tentang mengubah bentuk objek, melainkan tentang memfilter objek berdasarkan visibilitas dari kamera.

### Inti yang Harus Ditekankan

- **Occlusion culling** menghindari rendering objek yang tertutup objek lain.
- Objek yang tidak terlihat dari kamera tidak perlu selalu dikirim ke GPU.
- Teknik ini mengurangi beban rendering dengan memfilter objek berdasarkan visibilitas.
- Konsep ini melengkapi optimasi seperti **LOD** dalam pipeline rendering.

### Transisi ke Slide Berikutnya

Setelah kita membahas cara mengurangi objek yang perlu dirender, langkah berikutnya adalah memperhatikan biaya visual dari objek yang tetap dirender, terutama penggunaan **texture resolution**.

---

## Slide 041 - Texture Resolution

### Narasi

Dalam rendering, **texture** adalah data citra dua dimensi yang ditempelkan ke permukaan objek. Resolusi texture menentukan seberapa banyak detail visual yang dapat ditampilkan pada objek tersebut. Semakin tinggi resolusi texture, semakin tajam detail yang terlihat, tetapi biayanya tidak kecil.

Slide ini menekankan **trade-off** antara kualitas visual dan biaya performa. Texture besar, misalnya `4K`, menyimpan lebih banyak pixel. Akibatnya, **memory** yang dibutuhkan menjadi lebih besar, **bandwidth** yang harus dilewati GPU menjadi lebih besar, dan proses **loading** menjadi lebih berat.

Kita bisa membayangkannya dari sisi rendering pipeline. Saat objek dirender, GPU perlu membaca data texture untuk mengisi warna atau detail permukaan. Jika texture beresolusi tinggi, jumlah data yang harus dibaca lebih besar. Hal ini memengaruhi penggunaan memori GPU dan kecepatan rendering, terutama jika banyak objek menggunakan texture besar secara bersamaan.

Namun, tidak semua objek membutuhkan texture `4K`. Objek yang jauh dari kamera, kecil di layar, atau tertutup objek lain tidak akan menampilkan detail setajam objek yang dekat. Dalam kaitannya dengan **occlusion culling** sebelumnya, objek yang tidak terlihat memang tidak perlu dirender; tetapi bahkan objek yang terlihat pun perlu dipilih resolusinya secara bijak.

Intinya, resolusi texture bukan sekadar ukuran file atau kualitas gambar. Ia berkaitan langsung dengan **kualitas visual**, **penggunaan memori**, **bandwidth**, dan **performa rendering real-time**. Mahasiswa perlu memahami bahwa memilih resolusi texture adalah keputusan optimasi, bukan hanya memilih gambar dengan resolusi tertinggi.

### Inti yang Harus Ditekankan

- Texture resolusi tinggi meningkatkan detail visual, tetapi meningkatkan kebutuhan **memory**, **bandwidth**, dan **loading**.
- GPU harus membaca lebih banyak data saat menggunakan texture besar, sehingga memengaruhi performa rendering.
- Tidak semua objek membutuhkan texture `4K`; resolusi harus dipilih sesuai kebutuhan visual, ukuran objek di layar, dan jarak kamera.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa resolusi texture memengaruhi biaya rendering, langkah berikutnya adalah melihat bagaimana sistem menyediakan versi texture yang lebih kecil agar objek jauh tetap efisien. Itu akan dibahas pada **Mipmaps**.

---

## Slide 042 - Mipmaps

### Narasi

Pada slide sebelumnya, kita melihat bahwa texture resolusi tinggi membutuhkan memory, bandwidth, dan loading yang lebih besar. Namun, masalahnya bukan hanya ukuran file texture, tetapi juga bagaimana texture itu ditampilkan pada layar. Jika texture yang sama digunakan untuk objek yang sangat jauh, pixel texture akan dipadatkan ke area layar yang kecil. Akibatnya, pola texture dapat terlihat bergetar, berkedip, atau tidak stabil.

**Mipmaps** adalah teknik untuk menyimpan beberapa versi texture dalam ukuran yang lebih kecil. Versi-versi ini disusun dari resolusi penuh hingga resolusi yang jauh lebih rendah. Dalam praktik, kita menyebutnya `mip level`.

Intuisi visualnya sederhana: ketika objek berada dekat kamera, kita ingin detail texture terlihat jelas, sehingga GPU dapat menggunakan `mip level` yang lebih besar. Ketika objek menjauh, detail texture tidak lagi terlihat jelas oleh mata, sehingga cukup menggunakan `mip level` yang lebih kecil. Dengan cara ini, ukuran texture yang diproses lebih sesuai dengan ukuran objek pada layar.

Dalam rendering pipeline, pemilihan `mip level` terjadi saat tahap sampling texture, biasanya di `fragment shader` atau tahap rasterization. GPU memilih level yang paling sesuai berdasarkan seberapa besar texture dipetakan ke layar. Proses ini membantu menjaga tampilan objek tetap stabil meskipun kamera bergerak atau objek berubah jarak.

Keuntungan utama mipmaps dapat kita rangkum sebagai berikut:

- **Filtering lebih baik**, karena sampling dilakukan pada ukuran yang lebih sesuai dengan ukuran layar.
- **Dapat mengurangi aliasing**, terutama pada objek kecil atau jauh yang sebelumnya terlihat berkedip.
- **Akses texture lebih efisien**, karena GPU tidak perlu membaca area texture yang terlalu besar untuk objek yang hanya menempati sedikit pixel.

Perlu kita tekankan bahwa mipmaps bukan pengganti texture resolusi tinggi, melainkan cara mengelola penggunaan texture agar lebih stabil dan hemat. Texture tetap perlu dirancang dengan ukuran yang wajar, tetapi mipmaps membantu GPU memilih versi yang paling tepat pada setiap frame.

Sebelum lanjut, mahasiswa perlu memahami bahwa kualitas visual real-time tidak hanya ditentukan oleh resolusi texture, tetapi juga oleh cara texture diambil dan ditampilkan pada berbagai jarak. Pemahaman ini penting karena masalah aliasing dan biaya texture sering muncul bersamaan dengan masalah shader dan fragment processing.

### Inti yang Harus Ditekankan

- **Mipmaps** menyimpan beberapa versi texture dengan resolusi lebih kecil.
- Objek jauh menggunakan `mip level` yang lebih kecil agar sesuai dengan ukuran layar.
- Teknik ini membantu **filtering lebih baik**, **mengurangi aliasing**, dan membuat **akses texture lebih efisien**.
- Mipmaps bekerja pada tahap sampling texture dalam rendering pipeline, bukan hanya sebagai file texture tambahan.

### Transisi ke Slide Berikutnya

Setelah kita memahami bagaimana texture dapat dibuat lebih efisien melalui mipmaps, kita akan masuk ke sumber biaya rendering lain yang sangat penting, yaitu shader complexity. Di sana kita akan melihat bagaimana `fragment shader` yang berat dapat memengaruhi performa, terutama ketika area layar yang besar harus diproses.

---

## Slide 043 - Shader Complexity

### Narasi

Setelah mipmaps membantu texture diakses lebih efisien, kita perlu melihat sisi lain performa rendering: **shader complexity**. Dalam pipeline, setelah geometri dirasterisasi menjadi fragment, GPU menjalankan **fragment shader** untuk setiap fragment yang menutupi layar.

Artinya, biaya shader tidak hanya ditentukan oleh jumlah objek, tetapi juga oleh **berapa banyak area layar** yang harus dihitung. Objek kecil mungkin hanya menghasilkan sedikit fragment, sedangkan objek besar atau dekat kamera dapat menutupi ribuan hingga jutaan fragment.

Faktor yang membuat shader menjadi kompleks antara lain:

- `texture sample`: mengambil nilai dari texture lebih dari sekali.
- `math operation`: perhitungan vektor, normalisasi, transformasi, atau interpolasi.
- `branch`: percabangan logika yang dapat membuat eksekusi tidak seragam.
- `transparency`: fragment yang perlu dicampur dengan warna di belakangnya.
- `lighting calculation`: perhitungan pencahayaan untuk setiap fragment.

Ketika fragment shader berat, dampaknya sangat terasa pada area layar besar. Misalnya, objek yang menutupi separuh layar akan menjalankan shader tersebut untuk hampir separuh fragment layar, sehingga beban GPU meningkat jauh lebih cepat dibandingkan objek kecil.

Hal penting yang perlu dipahami mahasiswa adalah: **kompleksitas shader bersifat per fragment**. Semakin banyak fragment yang diproses, semakin besar total biaya, meskipun shader yang sama mungkin terlihat sederhana.

### Inti yang Harus Ditekankan

- **Shader complexity** menentukan beban kerja GPU pada tahap fragment processing.
- Biaya fragment shader meningkat seiring **area layar** yang tertutup objek.
- Faktor utama: `texture sample`, `math operation`, `branch`, `transparency`, dan `lighting calculation`.
- Objek besar atau dekat kamera lebih mahal karena menghasilkan lebih banyak fragment.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa fragment shader dapat menjadi mahal, kita akan melihat salah satu fitur visual yang sering menambah biaya rendering secara khusus: **shadow cost**.

---

## Slide 044 - Shadow Cost

### Narasi

Setelah kita melihat bahwa fragment shader yang berat bisa membebani GPU, ada satu sumber biaya rendering lain yang sering muncul di scene real-time: **shadow**. Bayangan membuat objek terasa lebih menempel di dunia, tetapi untuk menghitungnya, renderer biasanya tidak cukup hanya menggambar scene dari kamera sekali.

Dalam banyak pipeline, **shadow** membutuhkan **render tambahan**. Artinya, sebelum atau selama frame digambar, sistem perlu menentukan bagian mana yang terkena cahaya dan bagian mana yang tertutup objek. Proses ini menambah pekerjaan GPU, terutama jika scene memiliki banyak sumber cahaya atau banyak objek yang bisa menghalangi cahaya.

Biaya shadow tidak ditentukan oleh satu hal saja. Kita bisa melihat beberapa faktor utama:

- **jumlah light**: semakin banyak cahaya yang menghasilkan bayangan, semakin banyak pass atau data bayangan yang perlu diproses.
- **shadow resolution**: resolusi data bayangan yang lebih tinggi membuat bayangan lebih halus, tetapi juga lebih mahal.
- **shadow distance**: semakin jauh bayangan perlu terlihat, semakin banyak area scene yang harus dihitung.
- **jumlah caster**: semakin banyak objek yang bisa menghalangi cahaya, semakin banyak geometri yang perlu dipertimbangkan.
- **cascades/settings**: pengaturan seperti `cascades` atau parameter shadow lainnya dapat mengubah kualitas dan biaya, terutama untuk bayangan jarak dekat dan jauh.

Intinya, shadow bukan sekadar efek visual yang “dinyalakan” lalu selesai. Ia adalah fitur yang bisa menambah beberapa tahap kerja di rendering pipeline. Jika terlalu banyak light, resolusi terlalu tinggi, jarak terlalu jauh, atau terlalu banyak `caster`, biaya bisa naik cepat, bahkan pada scene yang secara geometri tidak terlalu berat.

Karena itu, shadow harus digunakan **sesuai kebutuhan visual**. Dalam proyek grafika komputer, kita perlu bertanya: apakah bayangan ini benar-benar penting untuk kesan kedalaman? Apakah cukup satu atau dua light utama yang menghasilkan shadow? Apakah resolusi dan jaraknya sudah cukup untuk kebutuhan visual tanpa membuat frame rate turun? Dengan cara ini, kita menjaga kualitas visual tetap baik tanpa membebani GPU secara tidak perlu.

### Inti yang Harus Ditekankan

- **Shadow** dapat menambah **render tambahan** di pipeline, sehingga meningkatkan beban GPU.
- Biaya shadow dipengaruhi oleh **jumlah light**, **shadow resolution**, **shadow distance**, **jumlah caster**, dan **cascades/settings**.
- Shadow harus digunakan secara selektif: cukup untuk kebutuhan visual, bukan untuk semua objek atau semua cahaya secara otomatis.

### Transisi ke Slide Berikutnya

Jika shadow dan shader kompleks sudah kita pahami sebagai sumber biaya, langkah berikutnya adalah menentukan prioritas optimasi: bagian mana yang harus diperbaiki dulu agar performa membaik tanpa merusak kualitas visual.

---

## Slide 045 - Optimization Priority

### Narasi

Dalam grafika komputer, optimasi tidak selalu berarti membuat semua bagian lebih cepat secara serentak. Yang lebih penting adalah memahami **di mana** sistem sedang membuang waktu atau daya GPU. Karena itu, urutan prioritas di bawah ini membantu kita bekerja secara terarah, bukan menebak-nebak.

```text
1. Fix major bottleneck
2. Reduce unnecessary work
3. Optimize expensive features
4. Re-measure
5. Preserve visual quality
```

Tahap pertama adalah **fix major bottleneck**. Artinya, kita cari bagian yang paling membatasi performa, misalnya bagian pipeline rendering yang terlalu berat, shader yang mahal, atau fitur seperti shadow yang memaksa GPU melakukan pekerjaan tambahan. Bottleneck yang besar biasanya memberi dampak lebih nyata daripada banyak perbaikan kecil yang tersebar.

Tahap kedua adalah **reduce unnecessary work**. Dalam pipeline rendering, banyak pekerjaan bisa dihindari jika objek tidak perlu diproses penuh, parameter visual tidak benar-benar dibutuhkan, atau fitur tertentu tidak memberikan manfaat yang sepadan. Mengurangi pekerjaan yang tidak perlu sering kali lebih murah daripada mencoba mempercepat proses yang memang sudah mahal.

Tahap ketiga adalah **optimize expensive features**. Fitur seperti lighting, shadow, particle, atau efek visual lain bisa sangat memengaruhi kualitas gambar, tetapi juga bisa menjadi sumber biaya render yang tinggi. Di tahap ini kita tidak langsung menghapus fitur, melainkan mencari cara agar fitur tersebut tetap memberikan nilai visual dengan biaya yang lebih terkendali.

Tahap keempat adalah **re-measure**. Optimasi grafika komputer harus berbasis pengukuran, bukan asumsi. Setelah melakukan perubahan, kita perlu melihat kembali profil performa, beban GPU, atau metrik lain yang relevan. Tanpa pengukuran ulang, kita tidak tahu apakah perubahan benar-benar membantu atau justru memindahkan masalah ke bagian lain.

Tahap terakhir adalah **preserve visual quality**. Dalam konteks VFX, particle, dan rendering real-time, performa yang baik tidak boleh mengorbankan kualitas visual secara berlebihan. Optimasi yang ideal adalah menemukan keseimbangan: sistem tetap cepat, tetapi hasil render masih sesuai kebutuhan visual.

Sebelum lanjut, hal penting yang perlu dipahami adalah bahwa prioritas ini bersifat umum. Artinya, urutan ini menjadi kerangka kerja, bukan aturan kaku untuk semua kasus. Kita tetap perlu melihat kondisi scene, fitur yang aktif, dan sumber biaya render yang sebenarnya.

### Inti yang Harus Ditekankan

- Optimasi dimulai dari **bottleneck utama**, bukan dari semua bagian sekaligus.
- **Reduce unnecessary work** sering lebih efektif daripada mempercepat proses yang sudah mahal.
- Fitur visual yang mahal perlu dioptimasi agar tetap berguna tanpa membebani render pipeline.
- Setiap perubahan harus diikuti **re-measure** agar hasil optimasi dapat dibuktikan.
- **Preserve visual quality** menjadi batas penting agar performa tidak mengorbankan kualitas gambar.

### Transisi ke Slide Berikutnya

Setelah memahami urutan prioritas optimasi, langkah berikutnya adalah memastikan kita tidak melakukan optimasi terlalu dini. Kita perlu tahu kapan scene sudah cukup representatif, fitur utama sudah ada, dan masalah performa benar-benar dapat diukur.

---

## Slide 046 - Jangan Optimize Terlalu Dini

### Narasi

Dalam optimization, ada jebakan yang sering muncul: kita mulai mengurangi detail, menurunkan resolusi, atau mengganti teknik rendering sebelum tahu bagian mana yang benar-benar membebani aplikasi. Dalam grafika komputer, biaya performa bisa datang dari banyak tempat, misalnya jumlah `draw call`, kompleksitas `shader`, ukuran tekstur, jumlah partikel, atau overdraw pada layar. Jika kita langsung mengoptimasi bagian yang ternyata tidak menjadi bottleneck, waktu bisa terbuang dan kualitas visual justru menurun tanpa peningkatan performa yang berarti.

Sebelum melakukan optimization besar, ada tiga kondisi yang perlu kita pastikan:

- scene yang diuji sudah **representative**, artinya mendekati kondisi kerja nyata, bukan scene kosong atau scene yang terlalu ringan;
- **fitur utama** sudah ada, sehingga kita tidak mengoptimasi prototipe yang nanti berubah total;
- masalah performa dapat **diukur**, misalnya melalui `baseline` frame time, FPS, jumlah `draw call`, atau beban GPU/CPU.

Kata **representative** penting. Scene uji harus cukup menggambarkan beban yang akan dihadapi aplikasi: jumlah objek, material, lighting, efek partikel, dan resolusi target. Jika scene terlalu sederhana, hasil pengukuran tidak bisa dipakai untuk keputusan besar. Sebaliknya, jika scene sudah penuh dengan fitur yang belum stabil, hasil pengukuran bisa berubah-ubah dan sulit diinterpretasi.

Kondisi **dapat diukur** juga menentukan apakah optimization itu benar-benar perlu. Tanpa baseline, kita hanya menebak. Dengan baseline, kita bisa membandingkan kondisi sebelum dan sesudah perubahan. Ini penting karena dalam rendering pipeline, perubahan kecil pada satu tahap kadang tidak terlihat pada frame rate akhir, tetapi bisa memengaruhi konsistensi frame time atau beban GPU.

Namun, slide ini tidak berarti kita boleh membuat asset atau kode secara boros sejak awal. Kebiasaan membuat asset efisien harus dimulai sejak awal: mesh tidak terlalu berat, tekstur sesuai kebutuhan, material tidak berlebihan, dan jumlah partikel dikendalikan dengan sadar. Ini bukan optimization dini; ini adalah praktik desain yang baik. Bedanya, efisiensi awal dilakukan sebagai bagian dari pembuatan asset, bukan sebagai tebakan untuk memperbaiki performa yang belum terukur.

Sebelum lanjut ke praktikum, yang perlu dipahami mahasiswa adalah urutan kerja yang sehat: buat fitur, ukur baseline, identifikasi masalah, lakukan perubahan yang terarah, lalu ukur kembali. Dengan cara ini, keputusan optimization tidak hanya berdasarkan intuisi, tetapi berdasarkan data dan konteks scene yang jelas.

### Inti yang Harus Ditekankan

- **Jangan optimize terlalu dini**: jangan mengubah banyak hal sebelum masalah performa teridentifikasi dan terukur.
- Optimization besar sebaiknya dilakukan setelah scene **representative**, fitur utama ada, dan masalah memiliki **baseline** yang jelas.
- Efisiensi asset tetap penting sejak awal, tetapi ini berbeda dengan optimization dini karena dilakukan sebagai bagian dari desain, bukan tebakan performa.
- Keputusan optimization yang baik harus bisa dibandingkan: sebelum dan sesudah perubahan.

### Transisi ke Slide Berikutnya

Pada slide berikutnya, kita akan masuk ke praktikum VFX dan optimization. Di sana, mahasiswa akan membuat efek partikel, mengintegrasikan satu shader dari Pertemuan 14, mengukur baseline, lalu membandingkan hasil sebelum dan sesudah beberapa perubahan optimization.

---

## Slide 047 - Praktikum: VFX + Optimization

### Narasi

Pada praktikum ini, kita akan menggabungkan dua hal yang sering berjalan beriringan dalam grafika komputer real-time: **VFX** dan **optimization**. Mahasiswa diminta membuat minimal 2 `particle effect`, mengintegrasikan satu `shader` dari Pertemuan 14, serta membuat effect berbasis `emission`. Tujuannya bukan hanya menghasilkan efek yang terlihat menarik, tetapi juga memahami bagaimana efek tersebut memengaruhi beban rendering.

`Particle effect` biasanya terdiri dari banyak elemen kecil yang di-render setiap frame. Secara visual, partikel bisa digunakan untuk asap, percikan, cahaya, atau ambient effect. Namun dari sisi GPU, partikel dapat meningkatkan jumlah objek yang diproses, menambah `overdraw`, dan memengaruhi `fill rate`. Karena itu, ketika kita membuat VFX, kita perlu melihat bukan hanya estetika, tetapi juga bagaimana efek itu melewati `rendering pipeline`: dari geometri partikel, transformasi, shader, hingga rasterisasi ke layar.

Pada tahap ini, mahasiswa juga akan membuat **`baseline`**. Baseline adalah kondisi awal sebelum optimization, misalnya performa sebelum mengubah parameter partikel, sebelum menyederhanakan shader, atau sebelum mengatur cara efek di-render. Dengan baseline, perubahan yang kita lakukan nanti bisa dibandingkan secara objektif: apakah `frame time` turun, apakah beban rendering berkurang, atau apakah visual tetap cukup baik setelah optimization.

Praktikum ini juga meminta mahasiswa melakukan beberapa perubahan `optimization` dan membandingkan hasil sebelum dan sesudah. Perubahan ini tidak harus langsung kompleks; yang penting adalah prosesnya: ukur, ubah, ukur lagi, lalu evaluasi. Ini melatih kebiasaan yang sama dengan slide sebelumnya, yaitu jangan optimize terlalu dini, tetapi tetap mulai dengan asset yang efisien dan masalah yang dapat diukur.

Detail teknis lengkap ada pada modul praktikum. Pada slide berikutnya, kita akan melihat rencana kerja praktikum secara lebih runtut, mulai dari membangun VFX, mengintegrasikan shader, menangkap baseline, memeriksa partikel dan overdraw, hingga membandingkan hasil sebelum dan sesudah optimization.

### Inti yang Harus Ditekankan

- Praktikum ini menggabungkan **VFX** dan **optimization**, bukan hanya membuat efek yang indah.
- `Particle effect` dapat memengaruhi performa karena jumlah elemen, `overdraw`, dan beban shader.
- **`Baseline`** penting agar perubahan optimization bisa diukur dan dibandingkan secara objektif.
- Alur kerja yang harus dibiasakan: buat efek, ukur baseline, lakukan perubahan, ukur ulang, lalu evaluasi.

### Transisi ke Slide Berikutnya

Setelah memahami tujuan praktikum, kita lanjut ke slide berikutnya untuk melihat **Rencana Praktikum** secara langkah demi langkah, dari membangun VFX hingga membandingkan hasil sebelum dan sesudah optimization.

---

## Slide 048 - Rencana Praktikum

### Narasi

Rencana praktikum ini memberi urutan kerja yang jelas agar mahasiswa tidak hanya membuat efek visual yang menarik, tetapi juga memahami biaya rendering di baliknya. Alur ini penting karena VFX dan particle system sering kali terlihat murah saat dikembangkan, tetapi bisa menjadi sumber beban GPU yang signifikan ketika jumlah partikel, efek cahaya, atau kompleksitas shader meningkat.

```text
1. Build Burst VFX
2. Build Ambient VFX
3. Integrate Shader P14
4. Capture Baseline
5. Check Particles / Overdraw
6. Check Draw Calls
7. Evaluate LOD / Occlusion
8. Evaluate Texture / Shader / Shadow
9. Apply Optimization
10. Measure Again
11. Compare Before / After
```

Kita bisa membaca daftar ini sebagai empat fase utama.

- **Membangun VFX**: membuat efek partikel dan mengintegrasikan shader.
- **Mengukur kondisi awal**: menangkap baseline sebelum optimasi.
- **Mencari bottleneck**: memeriksa partikel, overdraw, draw call, LOD, occlusion, texture, shader, dan shadow.
- **Mengoptimasi dan membandingkan**: menerapkan perbaikan, mengukur ulang, lalu membandingkan hasil sebelum dan sesudah.

Pada tahap `Build Burst VFX` dan `Build Ambient VFX`, kita membuat dua jenis efek partikel yang berbeda karakter. `Burst VFX` biasanya berupa efek singkat dan intens, misalnya ledakan, percikan, atau efek serangan. `Ambient VFX` biasanya berupa partikel yang terus-menerus muncul, misalnya debu, asap, cahaya melayang, atau efek lingkungan. Kedua jenis efek ini penting karena memberikan beban yang berbeda pada sistem partikel dan pipeline rendering.

Langkah `Integrate Shader P14` menghubungkan efek partikel dengan material atau shader yang sudah dipelajari sebelumnya. Tujuannya bukan hanya membuat efek terlihat lebih baik, tetapi juga melihat bagaimana shader memengaruhi biaya rendering. Semakin kompleks fragment shader, semakin besar beban yang mungkin diberikan ke GPU, terutama jika shader tersebut diterapkan pada banyak partikel.

Langkah `Capture Baseline` sangat penting karena menjadi acuan sebelum melakukan optimasi. Tanpa baseline, kita tidak bisa memastikan apakah perubahan yang dilakukan benar-benar memberikan perbaikan. Baseline bisa berupa frame time, FPS, jumlah draw call, atau indikator profiling lain yang tersedia pada engine atau profiler yang digunakan.

Setelah baseline diperoleh, kita masuk ke tahap pemeriksaan bottleneck. `Check Particles / Overdraw` membantu kita melihat apakah terlalu banyak partikel aktif atau terlalu banyak fragment yang ditulis ke pixel yang sama. `Check Draw Calls` membantu kita melihat apakah terlalu banyak perintah render dikirim ke GPU. `Evaluate LOD / Occlusion` mengarah pada strategi mengurangi objek atau detail yang tidak perlu dirender. Sementara itu, `Evaluate Texture / Shader / Shadow` membantu kita mengidentifikasi apakah biaya berasal dari sampling texture, kompleksitas shader, atau penggunaan shadow.

Tahap terakhir adalah `Apply Optimization`, `Measure Again`, dan `Compare Before / After`. Optimasi yang baik tidak dilakukan berdasarkan tebakan, tetapi berdasarkan data profiling. Setelah perubahan diterapkan, kita mengukur ulang dan membandingkannya dengan baseline. Hasil yang diharapkan adalah efek VFX tetap terlihat baik secara visual, tetapi biaya renderingnya lebih terkendali.

### Inti yang Harus Ditekankan

- Rencana praktikum ini adalah alur kerja: **build VFX**, **capture baseline**, **profil bottleneck**, **optimasi**, lalu **ukur ulang**.
- `baseline` dan `measure again` penting agar perbaikan optimasi dapat dibuktikan secara objektif.
- Bottleneck VFX bisa berasal dari partikel, `overdraw`, `draw calls`, `LOD`, `occlusion`, `texture`, `shader`, atau `shadow`.
- Optimasi tidak hanya mengejar FPS, tetapi juga memahami sumber biaya rendering di pipeline.

### Transisi ke Slide Berikutnya

Dengan rencana kerja ini, kita sudah memiliki gambaran bagaimana praktikum akan berjalan dari desain VFX sampai evaluasi kinerja. Selanjutnya, kita akan merangkum benang merah pertemuan ini, yaitu hubungan antara VFX design, particle system, profiling, identifikasi bottleneck, optimasi, dan pengukuran ulang.

---

## Slide 049 - Ringkasan Pertemuan

### Narasi

Pada pertemuan ke-15, kita kembali ke benang merah utama: VFX tidak hanya soal tampilan, tetapi juga soal performa. Alur yang perlu diingat adalah:

```text
VFX Design
↓
Particle System
↓
Profiling
↓
Identify Bottleneck
↓
Optimization
↓
Measure Again
```

Artinya, desain VFX dimulai dari tujuan visual, lalu diwujudkan melalui `Particle System` atau `VFX Graph`. Namun, sebelum dianggap selesai, sistem tersebut harus diukur dengan `profiling` untuk menemukan **bottleneck**. Setelah bottleneck teridentifikasi, baru kita melakukan `optimization`, lalu mengukur ulang agar perbaikan benar-benar terbukti.

Fokus P15 adalah memahami biaya rendering pada efek partikel dan VFX. Istilah seperti `overdraw`, `frame budget`, `draw call`, `batching`, `LOD`, `occlusion`, serta `texture/shader/shadow cost` bukan sekadar istilah teknis, tetapi alat untuk menilai apakah sebuah efek masih masuk dalam anggaran frame. Dalam konteks rendering pipeline, partikel yang terlalu banyak atau terlalu kompleks dapat membebani rasterisasi, meningkatkan overdraw, atau menambah jumlah draw call, sehingga frame time melampaui target.

Sebelum lanjut, yang harus tertanam adalah: **optimasi VFX bukan dilakukan sekali**, tetapi sebagai siklus. Kita desain, ukur, perbaiki, lalu ukur lagi. Dengan cara ini, mahasiswa tidak hanya membuat efek yang indah, tetapi juga efek yang stabil dan dapat dipertanggungjawabkan secara performa.

### Inti yang Harus Ditekankan

- Benang merah P15 adalah **VFX Design → Particle System → Profiling → Identify Bottleneck → Optimization → Measure Again**.
- `Particle System` dan `VFX Graph` harus dievaluasi dari sisi visual sekaligus biaya rendering, termasuk `overdraw`, `frame budget`, `draw call`, `batching`, `LOD`, `occlusion`, dan `texture/shader/shadow cost`.
- Optimasi bersifat siklik: setelah perbaikan dilakukan, hasil harus diukur ulang agar peningkatan performa benar-benar terlihat.

### Transisi ke Slide Berikutnya

Dengan ringkasan ini, kita menutup pertemuan ke-15. Selanjutnya, kita masuk ke slide penutup sebagai ucapan terima kasih, sekaligus mengingatkan bahwa materi berikutnya akan menuju UAS dengan tema **Real-Time Interactive 3D Experience**.

---

## Slide 050 - TERIMA KASIH

### Narasi

Sebagai penutup pertemuan ke-15, saya ingin mengajak kita kembali melihat benang merah yang telah kita bangun sejak awal materi **VFX, Particle & Graphics Optimization**. Kita mulai dari desain efek visual, kemudian masuk ke **particle system**, lalu berlanjut ke **profiling**, identifikasi **bottleneck**, dan akhirnya proses **optimasi** yang harus selalu diukur kembali. Alur ini penting karena dalam grafika komputer, sebuah efek yang terlihat menarik belum tentu layak digunakan jika membuat performa aplikasi menurun.

Poin yang perlu benar-benar kita pegang adalah bahwa kualitas visual dan performa adalah dua sisi yang tidak bisa dipisahkan. Mahasiswa perlu memahami bahwa keputusan seperti jumlah partikel, kompleksitas **shader**, biaya **texture**, **shadow cost**, **draw call**, **batching**, **LOD**, dan **occlusion** bukan sekadar istilah teknis, tetapi alat untuk menjaga agar pengalaman 3D tetap berada dalam **frame budget** yang sehat. Dengan kata lain, optimasi bukan berarti mengurangi kualitas secara membabi buta, melainkan membuat setiap sumber daya GPU dan CPU digunakan secara lebih cerdas.

Sebelum kita lanjut ke tahap penilaian akhir, saya ingin menekankan bahwa UAS nanti akan menuntut kemampuan yang lebih utuh: merancang, membangun, dan mengoptimalkan sebuah **Real-Time Interactive 3D Experience**. Jadi, materi hari ini bukan hanya penutup teori, tetapi juga pengingat bahwa kemampuan utama mahasiswa grafika komputer adalah menyeimbangkan kreativitas visual dengan disiplin teknis. Terima kasih atas perhatian dan partisipasi selama pertemuan ini.

### Inti yang Harus Ditekankan

- **VFX dan particle system** harus dirancang dengan kesadaran performa, bukan hanya tampilan akhir.
- **Profiling** adalah langkah penting untuk menemukan **bottleneck** sebelum melakukan optimasi.
- Optimasi grafika komputer melibatkan banyak faktor: **frame budget**, **draw call**, **batching**, **LOD**, **occlusion**, **shader**, **texture**, dan **shadow cost**.
- UAS akan menuntut penerapan konsep secara utuh dalam **Real-Time Interactive 3D Experience**.

### Transisi ke Slide Berikutnya

Karena slide ini merupakan penutup pertemuan, langkah selanjutnya adalah mempersiapkan diri menuju **UAS — Real-Time Interactive 3D Experience**, di mana seluruh konsep yang telah kita pelajari akan diuji dalam bentuk proyek interaktif yang nyata.
