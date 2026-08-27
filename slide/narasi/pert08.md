# Narasi Grafika Komputer - Pertemuan 08

## UTS — Three.js Interactive 3D Project

Sumber: markdown/pert08.md

---

## Slide 000 - Cover

### Narasi

Pertemuan ini menandai titik penting dalam mata kuliah **EF234504 — Grafika Komputer**, yaitu pelaksanaan **UTS** dalam bentuk **Three.js Interactive 3D Project**. Pada tahap ini, mahasiswa tidak lagi hanya mempelajari konsep secara terpisah, tetapi mulai mengintegrasikan pemahaman tentang **scene**, **camera**, **geometry**, **material**, **lighting**, dan **rendering pipeline** ke dalam satu aplikasi 3D yang dapat dijalankan.

Proyek ini dipilih karena `Three.js` memberikan cara yang praktis untuk membangun representasi visual 3D di lingkungan web, sekaligus menuntut mahasiswa memahami bagaimana objek visual dibentuk, diposisikan, diterangi, dan ditampilkan. Dengan kata lain, UTS ini menjadi jembatan antara teori grafika komputer dan implementasi nyata, di mana setiap keputusan visual harus didukung oleh pemahaman teknis yang jelas.

Sebelum masuk ke ketentuan dan pilihan topik, penting untuk memahami bahwa bentuk penilaian kali ini menekankan **orisinalitas**, **interaktivitas**, dan **penerapan konsep grafika komputer**, bukan sekadar menampilkan aset 3D yang sudah jadi. Mahasiswa diharapkan dapat merancang project yang menunjukkan penguasaan dasar rendering, transformasi, kamera, dan interaksi, sesuai dengan cakupan materi yang telah dipelajari.

### Inti yang Harus Ditekankan

- UTS berupa **Three.js Interactive 3D Project**, bukan ujian tertulis biasa.
- Project harus mengintegrasikan konsep grafika komputer seperti **scene**, **camera**, **geometry**, **material**, **lighting**, dan **rendering**.
- Penekanan utama adalah **orisinalitas**, **interaktivitas**, dan pemahaman teknis di balik visual yang ditampilkan.

### Transisi ke Slide Berikutnya

Dengan memahami posisi UTS ini, kita lanjut ke **Topik Pembahasan** untuk melihat tujuan, ketentuan kelompok, requirement, pilihan topik, kriteria penilaian, dan milestone pengerjaan.

---

## Slide 001 - Topik Pembahasan

### Narasi

Untuk UTS kali ini, kita akan bergerak dari konsep ke praktik: mahasiswa diminta membangun **project 3D interaktif berbasis browser** menggunakan `Three.js`. Karena itu, slide ini berfungsi sebagai peta pembahasan sebelum kita masuk ke tema dan detail teknis.

Poin-poin yang akan kita singgung meliputi:

- **Tujuan dan bentuk UTS**, agar mahasiswa memahami output yang diharapkan.
- **Ketentuan kelompok** dan **orisinalitas project**, karena kerja sama dan integritas akademik menjadi bagian penilaian.
- **Requirement `Three.js`** dan **requirement grafika komputer**, untuk memastikan project tidak hanya visual, tetapi juga menunjukkan pemahaman materi.
- **Gameplay, interaction, VFX, dan UI**, sebagai elemen pengalaman interaktif.
- **Asset 3D**, **struktur project**, dan **deliverable**, agar pengerjaan dapat dievaluasi secara konsisten.
- **10 pilihan topik**, **kriteria penilaian**, dan **milestone pengerjaan**, sebagai panduan perencanaan.

Dengan peta ini, mahasiswa dapat melihat bahwa UTS bukan sekadar membuat objek 3D, tetapi merancang pengalaman interaktif yang mengintegrasikan konsep grafika komputer. Sebelum lanjut, kita perlu memastikan bahwa setiap kelompok memahami bahwa project harus orisinal, terstruktur, dan memiliki tujuan interaktif yang jelas.

### Inti yang Harus Ditekankan

- UTS berupa **project 3D interaktif berbasis browser** menggunakan `Three.js`, bukan sekadar laporan teori.
- Agenda slide ini menjadi **peta kerja** untuk memahami ketentuan, requirement, struktur, deliverable, topik, penilaian, dan milestone.
- Project harus menunjukkan **integrasi materi grafika komputer**, bukan hanya tampilan visual.
- **Orisinalitas**, **struktur project**, dan **tujuan interaktif** adalah hal penting yang harus dipahami sebelum memilih topik.

### Transisi ke Slide Berikutnya

Setelah peta pembahasan ini jelas, kita lanjut ke bentuk project yang diharapkan: **mini game 3D** atau **interactive 3D application / experience**.

---

## Slide 002 - Tema UTS

### Narasi

Untuk UTS ini, kita akan mengerjakan sebuah **project 3D interaktif berbasis browser** menggunakan `Three.js`. Artinya, hasil akhir yang diharapkan bukan hanya penjelasan teori, tetapi sebuah aplikasi 3D yang bisa dijalankan, ditampilkan, dan diinteraksikan langsung oleh pengguna.

Project ini dapat berbentuk **Mini Game 3D** atau **Interactive 3D Application / Experience**. Keduanya sama-sama boleh, tetapi yang perlu kita pahami adalah bahwa bentuknya boleh berbeda, sementara prinsip dasarnya tetap sama: harus ada objek 3D, ada interaksi, dan ada pengalaman visual yang jelas.

Yang penting, project ini harus **dibuat sendiri oleh kelompok** dan memiliki **tujuan atau pengalaman interaktif yang jelas**. Jadi, mahasiswa tidak cukup hanya menampilkan model 3D di layar, tetapi harus ada alasan mengapa objek itu ada, mengapa kamera bisa bergerak, atau mengapa pengguna bisa melakukan sesuatu di dalam adegan tersebut.

Selain itu, project juga harus menggunakan **visual 3D yang menarik**. Dalam konteks grafika komputer, hal ini berkaitan dengan bagaimana kita menampilkan geometri, mengatur pencahayaan, memilih material, dan menyusun adegan agar hasilnya mudah dipahami dan enak dilihat.

Pada tingkat pengantar, yang harus dipahami dulu adalah bahwa project ini menjadi wadah untuk menguji pemahaman materi yang sudah kita pelajari sebelumnya. Jadi, sebelum masuk ke detail teknis, kelompok perlu menentukan dulu arah project: apakah lebih ke **Mini Game 3D** atau **Interactive 3D Application**. Setelah arah itu jelas, barulah kita bisa menentukan elemen apa yang akan ditampilkan dan bagaimana interaksi utamanya akan dibangun.

### Inti yang Harus Ditekankan

- UTS berupa **project 3D interaktif berbasis browser** menggunakan `Three.js`.
- Project dapat berupa **Mini Game 3D** atau **Interactive 3D Application / Experience**.
- Project harus **dibuat sendiri oleh kelompok** dan memiliki **tujuan interaktif yang jelas**.
- Visual 3D harus menarik dan menunjukkan pemahaman terhadap materi grafika komputer yang sudah dipelajari.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana materi dari Pertemuan 1 sampai 7 diintegrasikan ke dalam project UTS ini.

---

## Slide 003 - Integrasi Materi Pertemuan 1–7

### Narasi

Diagram ini menunjukkan bahwa UTS bukan hanya soal membuat objek 3D yang terlihat menarik, tetapi bagaimana mahasiswa merangkai kembali fondasi grafika komputer menjadi satu aplikasi interaktif yang utuh.

```text
Computer Graphics Fundamentals
        ↓
WebGL
        ↓
Transformation
        ↓
Camera & Projection
        ↓
Shader, Lighting & Texture
        ↓
Three.js
        ↓
Interactive 3D Application
        ↓
UTS INTERACTIVE 3D PROJECT
```

Kita membaca diagram ini dari atas ke bawah sebagai alur pembangunan project. Di bagian paling atas, **Computer Graphics Fundamentals** menjadi dasar: bagaimana objek visual direpresentasikan, bagaimana koordinat bekerja, dan bagaimana gambar 3D akhirnya ditampilkan ke layar.

Lalu, **`WebGL`** menjadi lapisan teknis yang memungkinkan browser melakukan rendering 3D dengan bantuan GPU. Dalam konteks ini, `WebGL` adalah mesin di balik tampilan 3D, sedangkan **`Three.js`** adalah library yang membantu kita membangun scene, kamera, objek, material, dan interaksi dengan lebih terstruktur.

Setelah itu, **Transformation** menentukan bagaimana objek diposisikan, dirotasikan, dan diskalakan di ruang 3D. Tanpa transformasi yang benar, objek bisa berada di posisi yang salah, menghadap arah yang salah, atau tidak sesuai dengan kamera.

Selanjutnya, **Camera & Projection** menentukan bagaimana dunia 3D dilihat. Kamera mengatur sudut pandang, sedangkan proyeksi mengubah koordinat 3D menjadi tampilan yang dapat dirender. Di sinilah hubungan antara objek, ruang, dan layar menjadi jelas.

Bagian **Shader, Lighting & Texture** menentukan tampilan visual objek: bagaimana material bereaksi terhadap cahaya, bagaimana tekstur diterapkan, dan bagaimana pencahayaan membentuk kedalaman serta realisme. Tiga hal ini sangat penting agar project tidak hanya memiliki bentuk, tetapi juga memiliki kualitas visual.

Ketika semua elemen tersebut dirangkai dalam **`Three.js`**, hasilnya adalah **Interactive 3D Application**. Artinya, project tidak hanya diam, tetapi dapat merespons interaksi pengguna. Pada tahap inilah seluruh materi Pertemuan 1–7 bertemu dan menjadi satu pengalaman 3D yang dapat dijalankan di browser.

Sebelum lanjut, hal penting yang harus dipahami adalah: project UTS harus menunjukkan alur yang jelas dari representasi objek, transformasi, kamera, pencahayaan, hingga interaksi. Jika hanya ada visual tanpa pemahaman alur ini, project belum menunjukkan integrasi materi secara utuh.

### Inti yang Harus Ditekankan

- UTS project harus menjadi **integrasi materi**, bukan sekadar kumpulan objek 3D.
- Alur utama: **fundamentals → `WebGL` → transformation → camera & projection → shader, lighting & texture → `Three.js` → interactive application**.
- **Transformation** dan **Camera & Projection** menentukan apakah objek terlihat pada posisi dan sudut pandang yang benar.
- **Shader, Lighting & Texture** menentukan kualitas visual dan kedalaman tampilan 3D.
- **`Three.js`** adalah alat untuk merangkai seluruh elemen tersebut menjadi aplikasi 3D interaktif berbasis browser.

### Transisi ke Slide Berikutnya

Setelah alur integrasi ini jelas, kita akan masuk ke slide berikutnya yang merinci kompetensi-kompetensi spesifik yang akan dinilai dalam project UTS.

---

## Slide 004 - Kompetensi yang Dinilai

### Narasi

Pada slide ini, kita melihat kompetensi yang dinilai dalam project UTS Three.js. Poin utamanya bukan sekadar “objek 3D muncul di layar”, tetapi bahwa project harus memperlihatkan pemahaman mahasiswa terhadap beberapa konsep inti grafika komputer yang saling terhubung.

Daftar kompetensi ini bisa dibaca sebagai alur pembangunan aplikasi 3D yang utuh:

- **Scene dan Camera** menjadi fondasi dunia 3D. `Scene` adalah tempat objek-objek 3D berada, sedangkan `Camera` menentukan dari sudut mana dunia tersebut dilihat.
- **Geometry, Material, Mesh** menunjukkan kemampuan mahasiswa merepresentasikan objek visual. `Geometry` menentukan bentuk, `Material` menentukan tampilan permukaan, dan `Mesh` adalah gabungan keduanya yang bisa dirender.
- **Scene Graph** dan **Parent-Child Transform** penting untuk mengatur hierarki objek. Konsep ini memungkinkan transformasi pada satu objek memengaruhi objek anak secara konsisten, misalnya lengan robot yang bergerak bersama tangannya.
- **PBR Material**, **Lighting**, dan **Shadow** menentukan kualitas visual. Di sini mahasiswa diharapkan tidak hanya membuat objek terlihat, tetapi juga menampilkan pencahayaan yang masuk akal dan bayangan yang membantu persepsi ruang.
- **GLTF / GLB** dan **Animation** menunjukkan kemampuan menggunakan aset 3D serta membuat objek bergerak atau beranimasi, bukan hanya statis.
- **Raycasting** dan **Interaction** menjadi inti dari aplikasi interaktif. `Raycasting` memungkinkan sistem mendeteksi objek yang disentuh atau diklik, sehingga aplikasi dapat merespons input pengguna.
- **Environment Map / HDR** dan **VFX** memperkaya pengalaman visual, misalnya melalui refleksi lingkungan, pencahayaan ambient yang lebih realistis, atau efek visual tambahan.

Yang perlu dipahami mahasiswa sebelum lanjut adalah bahwa project ini menilai **integrasi kompetensi**, bukan hanya satu fitur saja. Sebuah project yang baik harus memperlihatkan bahwa scene, objek, transformasi, material, pencahayaan, animasi, dan interaksi bekerja bersama dalam satu aplikasi Three.js yang koheren.

### Inti yang Harus Ditekankan

- Project UTS dinilai dari kemampuan mengintegrasikan konsep grafika komputer ke dalam aplikasi Three.js, bukan hanya menampilkan objek 3D.
- **Scene Graph** dan **Parent-Child Transform** penting untuk memahami bagaimana objek 3D diatur secara hierarkis dan ditransformasikan.
- **PBR Material**, **Lighting**, **Shadow**, dan **Environment Map / HDR** menentukan kualitas visual dan realisme tampilan.
- **Raycasting** dan **Interaction** menunjukkan bahwa aplikasi benar-benar interaktif, bukan hanya presentasi visual statis.

### Transisi ke Slide Berikutnya

Setelah kita memahami kompetensi yang dinilai, langkah berikutnya adalah melihat dua bentuk project UTS yang bisa dipilih, yaitu **Mini Game 3D** dan **Interactive 3D Application / Experience**.

---

## Slide 005 - Dua Bentuk Project UTS

### Narasi

Setelah kita melihat kompetensi yang dinilai, kita perlu memahami bahwa project UTS tidak harus selalu berupa game. Ada dua bentuk yang dapat dipilih, yaitu **Mini Game 3D** dan **Interactive 3D Application / Experience**.

Keduanya tetap harus dibangun di atas scene 3D yang sama: ada kamera, objek, material, lighting, dan interaksi. Perbedaannya ada pada struktur pengalaman yang ingin dibangun.

Untuk **Mini Game 3D**, project harus terasa seperti permainan. Artinya, kita perlu mendefinisikan aturan main yang jelas. Komponen utamanya adalah:

```text
Gameplay
Objective
Challenge
Progress
Win / Lose atau Failure State
Restart
```

Secara lisan, kita bisa membacanya sebagai: ada **gameplay** yang bisa dimainkan, ada **objective** yang ingin dicapai, ada **challenge** yang membuat pemain perlu berpikir atau bereaksi, ada **progress** yang menunjukkan perkembangan, ada kondisi **Win / Lose atau Failure State**, dan ada mekanisme **Restart** untuk mencoba kembali.

Struktur ini penting karena game 3D biasanya memiliki state sederhana: mulai, bermain, menang/kalah, dan ulang. Dalam konteks Three.js, state ini biasanya dikaitkan dengan perubahan scene, input pengguna, posisi objek, atau logika interaksi seperti `raycasting`.

Untuk **Interactive 3D Application / Experience**, fokusnya bukan menang atau kalah, melainkan alur interaksi. Komponen utamanya adalah:

```text
Interaction Flow
User Objective
Visual Feedback
Exploration / Configuration / Activation
Completion State atau Task Completion
```

Artinya, pengguna memiliki tujuan tertentu, misalnya menjelajah model, mengatur konfigurasi, mengaktifkan objek, atau menyelesaikan tugas visual. Sistem harus memberikan **visual feedback** yang jelas, misalnya highlight, perubahan warna, animasi, perubahan kamera, atau respons objek terhadap input.

Perbedaan konseptual yang paling penting adalah: **mini game** menuntut loop permainan dan kondisi menang/kalah, sedangkan **interactive application** menuntut alur tugas dan umpan balik. Interactive application tidak wajib memiliki menang–kalah.

Sebelum lanjut, mahasiswa perlu memastikan bentuk project sudah dipilih dan komponen intinya sudah dapat dijelaskan. Jika memilih mini game, tanyakan: apa objective-nya, bagaimana challenge-nya, kapan menang/kalah, dan bagaimana restart? Jika memilih interactive application, tanyakan: apa user objective-nya, bagaimana interaction flow-nya, apa visual feedback-nya, dan bagaimana completion state-nya?

### Inti yang Harus Ditekankan

- Project UTS dapat berupa **Mini Game 3D** atau **Interactive 3D Application / Experience**.
- **Mini Game 3D** harus memiliki `Gameplay`, `Objective`, `Challenge`, `Progress`, `Win / Lose atau Failure State`, dan `Restart`.
- **Interactive 3D Application / Experience** harus memiliki `Interaction Flow`, `User Objective`, `Visual Feedback`, `Exploration / Configuration / Activation`, dan `Completion State atau Task Completion`.
- **Interactive application tidak wajib memiliki menang–kalah**; yang penting adalah alur interaksi dan umpan balik visual.
- Kedua bentuk tetap harus menunjukkan penguasaan scene 3D, kamera, objek, material, lighting, dan interaksi.

### Transisi ke Slide Berikutnya

Setelah bentuk project dipahami, langkah berikutnya adalah mengatur kerja kelompok. Kita akan membahas ketentuan kelompok, termasuk batas jumlah anggota dan tanggung jawab setiap mahasiswa terhadap struktur project, rendering, scene, interaksi utama, dan implementasi teknis.

---

## Slide 006 - Ketentuan Kelompok

### Narasi

Untuk project UTS berbasis `Three.js`, kita mulai dari aturan kelompok yang cukup sederhana tetapi penting. Jumlah anggota kelompok adalah:

```text
Maksimal 3 mahasiswa
```

Batasan ini dipilih agar project tetap bisa dikerjakan secara kolaboratif, tetapi tidak terlalu besar sehingga tanggung jawab menjadi kabur. Dalam grafika komputer, satu project 3D biasanya sudah melibatkan beberapa bagian yang saling terkait, misalnya `scene`, `camera`, `renderer`, lighting, material, interaksi, dan state aplikasi. Jika kelompok terlalu besar, justru sulit memastikan setiap anggota benar-benar memahami sistem secara keseluruhan.

Selain jumlah anggota, ada empat hal yang wajib dipenuhi oleh semua anggota kelompok. Pertama, setiap mahasiswa harus **memahami struktur project**. Artinya, kita tidak hanya tahu file mana yang ada, tetapi juga bagaimana file tersebut saling terhubung, bagaimana asset dimuat, bagaimana scene dirakit, dan bagaimana program dijalankan.

Kedua, semua anggota wajib **memahami rendering dan scene**. Dalam konteks `Three.js`, ini mencakup pemahaman dasar tentang bagaimana objek 3D ditampilkan, bagaimana `scene` disusun, bagaimana `camera` memposisikan pandangan, bagaimana `renderer` menghasilkan gambar, serta bagaimana lighting dan material memengaruhi tampilan visual. Mahasiswa tidak perlu menguasai semua detail teknis secara sama dalam, tetapi harus bisa menjelaskan alur rendering secara umum.

Ketiga, semua anggota harus **memahami gameplay atau interaction utama**. Jika project berbentuk mini game, maka kita perlu memahami objective, challenge, progress, dan kondisi menang atau kalah. Jika project berbentuk interactive 3D application, maka kita perlu memahami interaction flow, user objective, visual feedback, dan completion state. Poin pentingnya adalah setiap anggota harus tahu apa yang dilakukan pengguna dan bagaimana sistem meresponsnya.

Keempat, semua anggota harus **berkontribusi pada implementasi teknis**. Artinya, tidak ada anggota yang hanya berperan sebagai presenter, pengumpul file, atau hanya membantu desain tanpa menyentuh implementasi. Setiap anggota harus terlibat dalam proses membangun project, misalnya menulis kode, mengatur scene, mengintegrasikan asset, memperbaiki bug, atau menghubungkan interaksi dengan state aplikasi.

Inti dari ketentuan ini adalah **akuntabilitas belajar**. Project UTS bukan hanya dinilai dari hasil visual atau kelancaran demo, tetapi juga dari kemampuan mahasiswa menjelaskan sistem yang mereka buat. Oleh karena itu, setiap anggota harus siap menjelaskan bagian inti project, bukan hanya bagian yang menjadi tanggung jawabnya sendiri.

### Inti yang Harus Ditekankan

- Kelompok UTS terdiri dari **maksimal 3 mahasiswa**.
- Semua anggota wajib memahami **struktur project**, **rendering dan scene**, serta **gameplay/interaction utama**.
- Setiap anggota harus **berkontribusi pada implementasi teknis**, bukan hanya membantu secara administratif atau presentasi.
- Setiap anggota harus mampu menjelaskan project secara keseluruhan saat presentasi atau tanya jawab.

### Transisi ke Slide Berikutnya

Setelah aturan kelompok dan tanggung jawab umum sudah jelas, langkah berikutnya adalah melihat contoh pembagian kerja yang disarankan agar setiap anggota bisa fokus pada bagian tertentu tanpa mengabaikan pemahaman terhadap keseluruhan project.

---

## Slide 007 - Pembagian Kerja yang Disarankan

### Narasi

Untuk project `Three.js Interactive 3D Project` pada UTS, kita perlu memikirkan bagaimana tanggung jawab kelompok dibagi. Pembagian ini bukan aturan kaku, tetapi panduan agar setiap bagian penting dari project interaktif 3D memiliki penanggung jawab yang jelas. Karena kelompok maksimal tiga mahasiswa, fokus kerja dapat disesuaikan dengan tiga area besar: penyajian visual, logika interaksi, dan penyempurnaan pengalaman pengguna.

Tabel pada slide memberikan contoh pembagian sebagai berikut:

| Anggota | Fokus |
|---|---|
| 1 | Scene, Camera, Asset, PBR, Lighting |
| 2 | Gameplay, Raycasting, Interaction, Game State |
| 3 | Animation, VFX, UI/HUD, Integrasi |

Secara konseptual, fokus pertama berkaitan dengan **fondasi visual** project. Anggota yang mengambil bagian ini perlu memahami bagaimana **scene** dibangun, bagaimana **camera** menentukan sudut pandang, bagaimana **asset** dimuat dan ditempatkan, serta bagaimana material **PBR** dan **lighting** memengaruhi tampilan akhir objek. Bagian ini penting karena menentukan apakah dunia 3D terlihat koheren dan sesuai desain yang diinginkan.

Fokus kedua berkaitan dengan **logika permainan dan interaksi**. Di sinilah mahasiswa perlu memahami bagaimana input pengguna diterjemahkan menjadi perubahan di dalam scene. Istilah `raycasting` penting karena menjadi cara umum untuk menghubungkan input dengan objek 3D. Sementara itu, `game state` membantu menjaga konsistensi kondisi permainan, misalnya status objek, kondisi interaksi, atau aturan yang sedang berlaku.

Fokus ketiga berkaitan dengan **feedback, animasi, dan integrasi**. `Animation` membuat elemen scene bergerak secara hidup, `VFX` memberikan efek visual yang memperkuat respons terhadap interaksi, dan `UI/HUD` menampilkan informasi penting bagi pengguna. **Integrasi** memastikan semua bagian tersebut bekerja bersama dalam satu project yang utuh, bukan sekadar kumpulan file atau fungsi yang terpisah.

Yang perlu kita tekankan adalah: pembagian ini hanya contoh. Semua anggota tetap harus memahami keseluruhan project, bukan hanya bagian yang menjadi tanggung jawabnya. Dalam konteks grafika komputer, hal ini penting karena project interaktif 3D tidak bisa dipisahkan menjadi bagian yang berdiri sendiri; scene, kamera, lighting, interaksi, animasi, dan UI saling memengaruhi hasil akhir.

### Inti yang Harus Ditekankan

- Pembagian kerja membantu memastikan seluruh komponen project `Three.js` tercover: **scene**, **camera**, **asset**, **PBR**, **lighting**, `gameplay`, `raycasting`, `interaction`, `game state`, `animation`, `VFX`, `UI/HUD`, dan **integrasi**.
- Fokus anggota bersifat fleksibel, tetapi setiap anggota tetap wajib memahami struktur project, rendering/scene, gameplay/interaction, dan kontribusi teknis secara keseluruhan.
- Pembagian kerja yang baik bukan berarti kerja dipotong menjadi silo; yang penting adalah tanggung jawab jelas, komunikasi lancar, dan tidak ada komponen utama yang ditinggalkan.

### Transisi ke Slide Berikutnya

Setelah kita memahami bagaimana kerja kelompok dapat dibagi, langkah berikutnya adalah memastikan bahwa project benar-benar dibuat oleh kelompok itu sendiri. Pada slide berikutnya, kita akan membahas ketentuan orisinalitas, yaitu kewajiban membuat sendiri `source code`, struktur scene, `gameplay logic`, `interaction logic`, `animation logic`, `scene composition`, `UI/HUD`, `integration`, dan `VFX integration`.

---

## Slide 008 - Ketentuan Orisinalitas

### Narasi

Ketika kita masuk ke ketentuan orisinalitas, poin utamanya sederhana: **project Three.js Interactive 3D Project ini wajib dibuat sendiri oleh kelompok**. Artinya, bukan hanya hasil akhir yang penting, tetapi proses pembuatannya juga harus berasal dari kerja kelompok. Dalam grafika komputer, nilai pembelajaran justru terletak pada bagaimana kita menyusun scene, mengatur objek, menghubungkan input pengguna, dan membuat elemen visual maupun logika permainan bekerja secara konsisten.

Slide ini menyebutkan beberapa bagian yang wajib dibuat sendiri: `source code`, struktur scene, `gameplay logic`, `interaction logic`, `animation logic`, scene composition, UI/HUD, integration, dan VFX integration. Kita bisa membacanya sebagai daftar tanggung jawab teknis yang harus dipahami kelompok. `Source code` adalah implementasi program; struktur scene menentukan hubungan antar objek; `gameplay logic` mengatur aturan permainan; `interaction logic` menangani input; `animation logic` menggerakkan objek; scene composition mengatur komposisi visual; UI/HUD menampilkan informasi; integration menyatukan semua bagian; dan VFX integration menambahkan efek visual agar pengalaman lebih hidup.

Ketentuan ini penting karena project bukan hanya soal menghasilkan tampilan 3D yang menarik, tetapi juga memahami bagaimana setiap elemen saling terhubung. Misalnya, ketika kita membuat interaksi, mahasiswa perlu memahami bagaimana objek dipilih, bagaimana transformasi diperbarui, bagaimana kamera melihat scene, dan bagaimana material atau efek visual ditampilkan. Jika semua bagian hanya diambil dari project lain, proses belajar tersebut tidak terjadi secara utuh.

Namun, dibuat sendiri tidak berarti setiap kelompok harus memulai dari nol secara absolut. Kita tetap boleh menggunakan library, contoh kecil, dokumentasi, atau referensi untuk memahami cara kerja Three.js. Yang menjadi kunci adalah kelompok memahami apa yang dilakukan, mampu menjelaskan alasan desain, dan dapat menunjukkan bahwa `source code` serta struktur project merupakan hasil kerja bersama. Dengan cara ini, project menjadi bukti kompetensi, bukan sekadar kumpulan file yang dijalankan.

### Inti yang Harus Ditekankan

- **Project wajib dibuat sendiri oleh kelompok**, bukan hasil unduhan atau salinan project lain.
- Bagian inti seperti `source code`, struktur scene, `gameplay logic`, `interaction logic`, `animation logic`, UI/HUD, integration, dan VFX integration harus menjadi tanggung jawab kelompok.
- Orisinalitas penting agar mahasiswa benar-benar memahami scene composition, integrasi komponen, dan cara kerja project Three.js secara utuh.

### Transisi ke Slide Berikutnya

Setelah memahami apa yang wajib dibuat sendiri, kita perlu melihat batasannya: bentuk-bentuk penggunaan project atau template yang tidak diperbolehkan akan dibahas pada slide berikutnya.

---

## Slide 009 - Yang Tidak Diperbolehkan

### Narasi

Setelah kita menegaskan bahwa project wajib dibuat sendiri, batasannya perlu dibuat lebih konkret. Yang tidak boleh dilakukan adalah mengambil project Three.js yang sudah jadi, lalu menjadikannya sebagai dasar tugas. Bentuknya bisa berupa mengunduh project lengkap, `fork` game yang sudah ada lalu hanya mengganti asset, membeli template game dan memodifikasi, menyalin tutorial project secara utuh, atau memakai `source code` project lain sebagai basis utama.

Yang ingin saya tekankan adalah perbedaan antara **belajar** dan **mengambil hasil akhir**. Tutorial boleh dipakai untuk memahami konsep, misalnya cara membuat `scene`, `camera`, `mesh`, `light`, atau interaksi sederhana. Namun, project final tidak boleh berupa salinan tutorial yang hanya diubah sedikit. Mahasiswa harus menunjukkan bahwa kelompok mampu merancang, mengimplementasikan, dan mengintegrasikan komponen sendiri.

Dalam konteks UTS, penilaian tidak hanya melihat apakah adegan 3D berjalan, tetapi juga apakah logika di belakangnya benar-benar dibangun oleh kelompok. Jika struktur scene, `gameplay logic`, `interaction logic`, `animation logic`, UI/HUD, integrasi, dan VFX berasal dari project lain, maka itu tidak sesuai dengan ketentuan orisinalitas.

Jadi, sebelum lanjut, pastikan kelompok memahami garis batasnya: **boleh belajar dari referensi**, tetapi **tidak boleh menjadikan project orang lain sebagai basis utama**. Jika ada bagian yang dipelajari dari tutorial, gunakan sebagai bahan pemahaman, lalu bangun kembali dengan struktur dan keputusan desain milik kelompok.

### Inti yang Harus Ditekankan

- Project final tidak boleh berasal dari project Three.js yang sudah jadi, template, atau tutorial yang disalin utuh.
- `fork` game lalu mengganti asset tidak dianggap sebagai pembuatan project sendiri.
- Tutorial boleh digunakan untuk **belajar konsep**, bukan sebagai pengganti project final.
- Kontribusi kelompok harus terlihat pada struktur scene, logika, interaksi, animasi, UI/HUD, integrasi, dan VFX.

### Transisi ke Slide Berikutnya

Setelah kita batasi apa yang tidak diperbolehkan, berikutnya kita akan membahas bagian mana saja yang boleh menggunakan asset eksternal, seperti model 3D, texture, HDRI, sound, icon, dan font, beserta syarat penggunaannya.

---

## Slide 010 - Asset Eksternal yang Diperbolehkan

### Narasi

Pada tahap project Three.js, mahasiswa sering bertanya apakah boleh memakai asset dari luar. Jawabannya: boleh, selama yang dipakai adalah **asset**, bukan **project game yang sudah jadi**. Yang dimaksud asset di sini adalah komponen visual atau pendukung yang dapat dimasukkan ke dalam scene, seperti **model 3D**, **texture**, **HDRI**, **sound**, **icon**, dan **font**.

Dari sisi grafika komputer, setiap asset memiliki peran berbeda dalam pipeline rendering. **Model 3D** menyediakan geometri objek, **texture** menentukan tampilan permukaan material, **HDRI** dapat digunakan sebagai sumber pencahayaan lingkungan, sedangkan **sound**, **icon**, dan **font** lebih berperan pada pengalaman pengguna dan antarmuka. Dengan memahami peran ini, mahasiswa tidak hanya menempelkan file, tetapi tahu asset tersebut masuk ke bagian mana dalam scene.

Syarat pertama adalah **lisensi memungkinkan**. Artinya, asset boleh digunakan untuk tugas kuliah sesuai ketentuan pembuatnya. Syarat kedua, **sumber dicantumkan**, karena penggunaan asset eksternal tetap memerlukan pengakuan terhadap pembuatnya. Syarat ketiga, **integrasi dilakukan sendiri**, yaitu mahasiswa harus memproses, menempatkan, dan menghubungkan asset ke dalam project Three.js sendiri, misalnya memuat model, mengatur material, pencahayaan, atau menempatkan elemen antarmuka.

Syarat terakhir penting untuk menjaga batas akademik: asset yang dipakai **bukan project game jadi**. Jadi, mengambil satu model, texture, atau HDRI dari sumber yang sah adalah hal yang wajar. Namun, mengambil project lengkap yang sudah memiliki struktur scene, kontrol, logika, dan asset terintegrasi tetap tidak diperbolehkan.

Sebelum lanjut, hal yang harus dipahami adalah perbedaan antara **memakai asset** dan **mengambil project**. Asset adalah bahan pendukung yang diintegrasikan ke dalam karya sendiri, sedangkan project selesai adalah hasil kerja utuh yang tidak boleh dijadikan basis utama. Pemahaman ini akan menentukan apakah project Three.js yang dibuat benar-benar merupakan karya mahasiswa.

### Inti yang Harus Ditekankan

- Asset eksternal seperti **model 3D**, **texture**, **HDRI**, **sound**, **icon**, dan **font** boleh digunakan.
- Syarat utamanya: **lisensi memungkinkan**, **sumber dicantumkan**, **integrasi dilakukan sendiri**, dan asset **bukan project game jadi**.
- Asset harus dipahami sebagai bagian dari scene atau pipeline, bukan sekadar file yang ditempelkan.
- Batas penting: boleh memakai bahan, tetapi tidak boleh memakai project Three.js atau game yang sudah selesai sebagai basis utama.

### Transisi ke Slide Berikutnya

Setelah kita tahu asset apa yang boleh digunakan, langkah berikutnya adalah bagaimana mendokumentasikan asset tersebut secara rapi. Pada slide berikutnya, kita akan membahas bagian `Asset Credits` di `README` yang wajib mencantumkan nama asset, pembuat, sumber, dan lisensi.

---

## Slide 011 - Credit Asset

### Narasi

Setelah kita membahas asset eksternal yang boleh digunakan, ada satu hal yang sering dianggap sepele tetapi sangat menentukan kualitas proyek: **credit asset**. Dalam proyek grafika komputer berbasis Three.js, mahasiswa mungkin memakai model 3D, texture, HDRI, sound, icon, atau font dari sumber lain. Karena itu, `README` wajib memiliki bagian bernama:

```text
Asset Credits
```

Bagian ini bukan sekadar formalitas. Ia berfungsi sebagai dokumentasi asal-usul asset, sehingga pembaca atau penguji dapat memahami mana bagian yang dibuat sendiri dan mana yang berasal dari pihak lain. Dalam konteks akademik, hal ini penting untuk menjaga **integritas karya**, **kepatuhan lisensi**, dan **kejelasan proyek**.

Secara praktis, setiap asset yang dicantumkan sebaiknya memuat informasi berikut:

- **nama asset**, agar jelas asset mana yang dimaksud;
- **pembuat**, yaitu individu atau organisasi yang membuat asset;
- **sumber**, misalnya URL, platform, atau repositori tempat asset diperoleh;
- **lisensi**, yang menunjukkan hak penggunaan dan batasan modifikasi.

Jika ada beberapa asset, kita bisa menuliskannya dalam daftar yang rapi. Misalnya, untuk satu model 3D, kita cukup mencatat nama model, siapa pembuatnya, dari mana file tersebut diunduh, dan lisensi apa yang berlaku. Dengan cara ini, proyek tidak hanya terlihat lebih profesional, tetapi juga lebih mudah diaudit.

Intinya, sebelum lanjut ke implementasi teknis, mahasiswa perlu memastikan bahwa setiap asset eksternal sudah terdokumentasi dengan benar. Bagian `Asset Credits` menjadi bukti bahwa penggunaan asset dilakukan secara bertanggung jawab dan sesuai aturan.

### Inti yang Harus Ditekankan

- `README` wajib memuat bagian **Asset Credits**.
- Setiap asset eksternal harus dicantumkan **nama asset**, **pembuat**, **sumber**, dan **lisensi**.
- Dokumentasi ini penting untuk **kepatuhan lisensi**, **integritas akademik**, dan **kejelasan proyek**.

### Transisi ke Slide Berikutnya

Setelah aspek dokumentasi asset sudah jelas, langkah berikutnya adalah memastikan proyek dibangun dengan teknologi yang tepat. Kita akan masuk ke **Teknologi Utama** yang wajib dan disarankan digunakan dalam proyek Three.js ini.

---

## Slide 012 - Teknologi Utama

### Narasi

Untuk proyek UTS ini, fondasi teknisnya cukup jelas: mahasiswa harus membangun aplikasi 3D interaktif berbasis web. Intinya, kita tidak membuat renderer dari nol, tetapi menggunakan **Three.js** sebagai lapisan di atas **WebGL** agar bisa memuat geometri, material, kamera, lighting, dan menjalankan render loop.

Teknologi wajib yang harus ada adalah:

```text
JavaScript
Three.js
HTML
CSS
```

Secara peran, **HTML** menjadi wadah halaman aplikasi, **CSS** mengatur tampilan antarmuka, overlay, tombol, atau panel konfigurasi, sedangkan **JavaScript** menjadi tempat logika utama: inisialisasi scene, kamera, renderer, animasi, interaksi, dan pemanggilan render loop. **Three.js** berperan sebagai pustaka yang menyederhanakan akses ke GPU dan pipeline rendering, mulai dari transformasi objek, material, lighting, hingga rasterisasi ke layar.

Teknologi yang disarankan adalah:

```text
Vite
npm
Git
```

**Vite** membantu pengembangan yang cepat, **npm** mengelola dependensi seperti `three` dan helper resmi, sedangkan **Git** menjaga riwayat kerja, kolaborasi, dan kemudahan pengujian. Untuk tugas proyek, penggunaan Git sangat penting karena dosen bisa melihat proses pengembangan, bukan hanya hasil akhir.

Selain stack dasar, mahasiswa boleh memakai helper resmi Three.js bila memang relevan dengan kebutuhan proyek. Misalnya, `GLTFLoader` untuk memuat model 3D, `RGBELoader` untuk memuat environment map atau HDR, `AnimationMixer` untuk menjalankan animasi model, serta kontrol kamera seperti `OrbitControls` untuk eksplorasi objek. Yang perlu dipahami, helper ini bukan pengganti pemahaman konsep; ia hanya mempercepat akses ke data, animasi, dan interaksi.

Sebelum lanjut ke struktur proyek, hal penting yang harus dipastikan mahasiswa adalah: aplikasi harus berjalan di browser, memiliki scene 3D yang benar-benar dirender, ada interaksi yang memengaruhi objek atau kamera, dan seluruh teknologi yang dipakai dapat dijelaskan fungsinya. Dengan fondasi ini, kita bisa masuk ke bagaimana alur proyek dibangun, baik sebagai mini game 3D maupun aplikasi interaktif 3D.

### Inti yang Harus Ditekankan

- **JavaScript**, **Three.js**, **HTML**, dan **CSS** adalah komponen wajib; masing-masing memiliki peran berbeda dalam aplikasi 3D berbasis web.
- **Three.js** membantu mengakses pipeline rendering WebGL, tetapi mahasiswa tetap perlu memahami scene, kamera, objek, material, lighting, dan render loop.
- **Vite**, **npm**, dan **Git** disarankan untuk alur kerja pengembangan yang rapi, terkelola, dan dapat ditelusuri.
- Helper resmi seperti `GLTFLoader`, `RGBELoader`, `AnimationMixer`, dan kontrol kamera boleh dipakai bila relevan, bukan sebagai jalan pintas tanpa pemahaman.

### Transisi ke Slide Berikutnya

Setelah teknologi dasar ini dipahami, langkah berikutnya adalah melihat bagaimana struktur proyek disusun berdasarkan jenisnya, apakah mini game 3D atau interactive 3D application.

---

## Slide 013 - Struktur Project Berdasarkan Jenis

### Narasi

Setelah teknologi utama dipilih, langkah berikutnya adalah menentukan **struktur alur project**. Dalam konteks Three.js, struktur ini tidak hanya menyangkut folder atau file, tetapi juga urutan **state** yang akan dialami pengguna. Ada dua jenis yang perlu dibedakan: **Mini Game 3D** dan **Interactive 3D Application**. Keduanya tetap menggunakan `scene`, `camera`, `renderer`, dan `object`, tetapi tujuan interaksinya berbeda.

Untuk **Mini Game 3D**, alurnya dibaca dari atas ke bawah sebagai siklus permainan:

1. `START` — kondisi awal sebelum permainan aktif.
2. `PLAY` — fase permainan berjalan; scene, kamera, dan objek mulai hidup.
3. `INTERACTION` — input pengguna memengaruhi scene, misalnya klik, drag, tombol, atau gerakan.
4. `OBJECTIVE / CHALLENGE` — tujuan atau tantangan yang harus diselesaikan.
5. `WIN / LOSE` — hasil evaluasi kondisi permainan.
6. `RESTART` — pengembalian ke kondisi awal agar siklus dapat diulang.

Struktur ini penting karena membantu kita memisahkan logika awal, logika main, logika menang/kalah, dan reset state. Dalam implementasi Three.js, bagian ini biasanya memengaruhi variabel kondisi, render loop, event listener, dan perubahan posisi kamera atau objek.

Untuk **Interactive 3D Application**, alurnya lebih condong ke eksplorasi dan konfigurasi:

1. `START` — titik masuk aplikasi.
2. `EXPLORE / INSPECT` — pengguna mengamati objek 3D, memutar kamera, atau melihat detail.
3. `INTERACTION` — pengguna memilih objek, mengubah parameter, atau memanipulasi transformasi.
4. `TASK / CONFIGURATION` — pengguna menyelesaikan tugas atau mengatur sesuatu.
5. `FEEDBACK` — sistem memberi respons visual, misalnya highlight, perubahan warna, label, atau animasi.
6. `COMPLETION` — proses selesai dan pengguna memahami hasil interaksinya.

Perbedaan konseptual utamanya terletak pada **tujuan akhir**. Mini game menuntut adanya tantangan dan hasil yang jelas, yaitu menang atau kalah. Interactive 3D application lebih menekankan eksplorasi, konfigurasi, dan umpan balik, tanpa harus memiliki kondisi menang/kalah yang tegas.

Sebelum lanjut, mahasiswa perlu memahami bahwa struktur alur ini menjadi kerangka desain project. Kita harus bisa menjawab: project ini berbentuk mini game atau aplikasi interaktif? State apa saja yang ada? Input apa yang memicu transisi? Objek apa yang berubah? Dan bagaimana scene dikembalikan ke kondisi awal jika diperlukan? Pemahaman ini penting agar coding tidak hanya membuat objek muncul, tetapi membentuk pengalaman 3D yang koheren.

### Inti yang Harus Ditekankan

- Struktur project ditentukan oleh **jenis project**: **Mini Game 3D** atau **Interactive 3D Application**.
- Alur **Mini Game 3D** adalah `START` → `PLAY` → `INTERACTION` → `OBJECTIVE / CHALLENGE` → `WIN / LOSE` → `RESTART`.
- Alur **Interactive 3D Application** adalah `START` → `EXPLORE / INSPECT` → `INTERACTION` → `TASK / CONFIGURATION` → `FEEDBACK` → `COMPLETION`.
- Mini game berorientasi pada **tantangan** dan **hasil menang/kalah**, sedangkan interactive application berorientasi pada **eksplorasi**, **konfigurasi**, dan **umpan balik**.
- Struktur alur membantu merancang **state**, **input**, **update loop**, dan perubahan `scene`, `camera`, serta `object` dalam Three.js.

### Transisi ke Slide Berikutnya

Setelah jenis dan alur project dipilih, langkah berikutnya adalah memastikan scene 3D memiliki komponen dasar yang wajib ada, yaitu `scene`, `camera`, `renderer`, environment, dan object. Itu akan dibahas pada slide **Requirement Scene**.

---

## Slide 014 - Requirement Scene

### Narasi

Sebelum kita masuk ke struktur hierarki objek, ada satu hal yang harus sudah jelas: **scene** yang akan kita bangun harus sudah memiliki elemen dasar yang membuat dunia 3D bisa dilihat, dipahami, dan dikembangkan lebih lanjut. Dalam konteks project Three.js, scene bukan sekadar kumpulan objek yang ditempelkan ke layar, melainkan ruang utama tempat objek, kamera, dan elemen lingkungan disusun menjadi satu tampilan yang koheren.

Kita bisa membaca daftar requirement ini sebagai ceklis minimum yang harus dipenuhi:

- **1 scene 3D utama** adalah container utama tempat seluruh elemen visual diletakkan.
- **camera** menentukan sudut pandang, posisi, dan arah pandang terhadap scene.
- **renderer** bertugas mengubah scene dan camera menjadi gambar yang ditampilkan di layar.
- **ground/arena/environment** memberikan referensi ruang, skala, dan batas area visual.
- **minimal 3 jenis object/asset** memastikan scene tidak kosong dan memiliki variasi konten.
- **komposisi scene yang layak** berarti objek tersusun secara proporsional, jelas, dan mudah dibaca secara visual.

Penting untuk dipahami bahwa ketiga komponen pertama, yaitu `scene`, `camera`, dan `renderer`, merupakan fondasi minimum agar sebuah visual 3D dapat dirender. Tanpa `scene`, tidak ada ruang untuk menampung objek. Tanpa `camera`, tidak ada sudut pandang yang menentukan apa yang terlihat. Tanpa `renderer`, tidak ada proses yang mengubah data scene menjadi frame visual di layar.

Dengan adanya **ground/arena/environment**, mahasiswa juga memiliki acuan spasial yang penting. Objek yang melayang tanpa dasar sering kali sulit dinilai skalanya. Ground atau environment membantu kita memahami posisi objek, ukuran relatif, serta batas area interaksi. Hal ini juga membuat scene terasa lebih “hidup” dan tidak seperti objek yang berdiri sendiri di ruang kosong.

Syarat **minimal 3 jenis object/asset** bukan sekadar menambah jumlah objek, tetapi menunjukkan bahwa scene memiliki variasi konten. Tiga jenis objek yang berbeda akan membantu kita melihat bagaimana scene dapat dikembangkan menjadi lebih interaktif, misalnya dengan objek utama, objek pendukung, dan objek lingkungan. Selain itu, variasi objek ini juga menjadi dasar yang baik sebelum kita membahas hubungan antarobjek melalui scene graph.

### Inti yang Harus Ditekankan

- `scene`, `camera`, dan `renderer` adalah tiga komponen minimum agar visual 3D dapat dirender.
- `ground/arena/environment` memberikan referensi skala, posisi, dan batas ruang visual.
- Minimal 3 jenis object/asset menunjukkan variasi konten dan kesiapan scene untuk dikembangkan.
- Komposisi scene yang layak berarti objek tersusun jelas, proporsional, dan tidak membingungkan secara visual.

### Transisi ke Slide Berikutnya

Setelah scene dasar sudah memenuhi requirement, langkah berikutnya adalah mengatur objek-objek tersebut ke dalam **scene graph**, yaitu struktur hierarki parent-child yang akan menentukan bagaimana objek saling berhubungan dan bergerak bersama.

---

## Slide 015 - Requirement Scene Graph

### Narasi

Setelah scene utama, `camera`, `renderer`, dan environment sudah tersedia, langkah berikutnya adalah memastikan objek-objek dalam scene tidak hanya tersebar secara acak, tetapi memiliki **struktur hierarki** yang bermakna. Dalam grafika komputer, struktur ini biasanya disebut **scene graph** atau **hierarchy**. Tujuannya bukan hanya agar scene terlihat rapi, tetapi juga agar hubungan antarobjek dapat dikendalikan secara konsisten.

Slide ini menampilkan bentuk minimal yang harus ada:

```text
Parent
├── Child A
└── Child B
```

Diagram ini dibaca dari atas ke bawah. **Parent** adalah node induk, sedangkan **Child A** dan **Child B** adalah objek anak yang berada di bawahnya. Artinya, kedua anak tersebut memiliki hubungan transformasi dengan induknya. Jika `Parent` dipindahkan, diputar, atau diskalakan, maka `Child A` dan `Child B` akan mengikuti sesuai hubungan hierarkinya.

Ini penting karena dalam scene 3D, banyak objek tidak berdiri sendiri secara logis. Misalnya, senjata tidak seharusnya hanya diletakkan di dekat robot, tetapi menjadi bagian dari robot. Jika robot bergerak, senjata harus ikut bergerak. Jika robot berputar, orientasi senjata juga harus menyesuaikan. Dengan hierarchy, hubungan seperti ini menjadi lebih natural dan tidak perlu disinkronkan secara manual satu per satu.

Beberapa contoh yang diberikan pada slide adalah:

- robot + weapon,
- spaceship + engine VFX,
- door + handle,
- army leader + formation group.

Pada contoh **robot + weapon**, robot dapat menjadi `Parent`, sedangkan weapon menjadi `Child`. Pada **spaceship + engine VFX**, spaceship menjadi induk dan efek mesin menjadi anak. Pada **door + handle**, pintu menjadi induk dan gagang menjadi anak. Pada **army leader + formation group**, pemimpin pasukan dapat menjadi induk dari kelompok formasi. Intinya, pilih `Parent` yang secara semantik memang “mengendalikan” atau “memiliki” objek anak.

Dalam konteks rendering pipeline, scene graph berperan sebelum objek akhirnya digambar ke layar. Hierarki membantu sistem menentukan **transformasi akhir** setiap objek, misalnya posisi, rotasi, dan skala dalam ruang dunia. Setelah transformasi tersebut dihitung, barulah geometri objek diproses lebih lanjut menuju rasterisasi dan rendering. Jadi, scene graph bukan hanya soal tampilan struktur, tetapi juga bagian dari cara objek diposisikan secara benar dalam scene.

Sebelum lanjut, mahasiswa perlu memahami bahwa requirement ini meminta **minimal satu hierarchy** yang jelas. Artinya, tidak cukup hanya menempatkan beberapa objek langsung di bawah scene tanpa hubungan induk-anak. Harus ada minimal satu objek induk yang memiliki dua atau lebih anak, atau minimal satu struktur parent-child yang dapat dijelaskan secara logis. Pemahaman ini akan membantu project Three.js menjadi lebih terstruktur, mudah dikendalikan, dan lebih realistis secara interaksi.

### Inti yang Harus Ditekankan

- **Scene graph** adalah struktur hierarki yang menghubungkan objek induk dan objek anak dalam scene 3D.
- Transformasi `Parent` akan memengaruhi `Child`, sehingga gerakan, rotasi, dan skala menjadi lebih konsisten.
- Hierarchy harus dipilih berdasarkan **makna semantik**, bukan hanya posisi visual.
- Requirement minimalnya adalah memiliki **satu struktur parent-child** yang jelas, bukan sekadar banyak objek di scene.
- Scene graph membantu proses transformasi sebelum objek dirender, sehingga penting dalam pipeline grafika komputer.

### Transisi ke Slide Berikutnya

Setelah struktur hierarki dalam scene dipahami, langkah berikutnya adalah memastikan project juga memiliki aset 3D yang sesuai. Pada slide berikutnya, kita akan membahas requirement penggunaan **GLTF / GLB** sebagai format asset 3D yang dapat dimasukkan ke dalam scene.

---

## Slide 016 - Requirement GLTF / GLB

### Narasi

Untuk proyek UTS, ada satu syarat aset yang cukup mendasar tetapi penting: minimal satu **asset** `GLTF` / `GLB`.

```text
1 asset GLTF / GLB
```

Artinya, mahasiswa tidak cukup hanya membangun geometri sederhana dari primitive Three.js; perlu menyiapkan atau memilih satu objek 3D yang sudah memiliki struktur aset modern. `GLTF` dan `GLB` adalah format distribusi 3D yang umum dipakai karena dapat membawa geometri, material, transformasi, animasi, dan hierarki scene dalam satu paket. Dalam konteks **rendering pipeline**, aset ini menjadi sumber data yang kemudian dibaca oleh aplikasi, dikonversi menjadi mesh, material, dan transformasi, lalu diproses oleh GPU untuk menghasilkan gambar.

Pentingnya requirement ini adalah agar proyek tidak berhenti pada bentuk dasar, tetapi sudah mendekati alur produksi 3D. Satu aset `GLTF` / `GLB` bisa menjadi pusat interaksi: player yang bisa bergerak, enemy yang bereaksi, vehicle yang berputar, prop yang bisa dipick, robot yang beranimasi, environment yang memberi konteks, atau artifact yang menjadi fokus visual. Karena slide sebelumnya sudah meminta **scene graph**, aset ini juga sebaiknya memiliki atau mendukung hierarki parent-child. Misalnya, robot memiliki lengan sebagai child, atau environment memiliki pintu dan handle yang bisa ditransformasi terpisah.

Dalam presentasi, mahasiswa perlu menunjukkan bahwa aset tersebut benar-benar masuk ke scene, bukan sekadar file di folder. Yang perlu dipahami sebelum lanjut: aset sudah dimuat, terlihat di viewport, memiliki transformasi yang benar, dan dapat menjadi bagian dari interaksi. Jika aset memiliki beberapa bagian, mahasiswa perlu menjelaskan bagaimana bagian itu terhubung dalam scene graph. Jika aset memiliki material, mahasiswa perlu memperhatikan bahwa material tersebut akan menentukan respons terhadap cahaya.

Batasan pada slide ini masih pada level requirement minimal: satu aset. Mahasiswa tidak perlu langsung membuat banyak asset atau pipeline produksi lengkap. Namun, pilihan aset sebaiknya cukup bermakna untuk menunjukkan kemampuan 3D interaktif. Contoh yang bisa dipilih:

- `player` sebagai karakter utama,
- `enemy` sebagai objek yang berinteraksi,
- `vehicle` sebagai objek dengan transformasi kompleks,
- `prop` sebagai objek kecil yang bisa dipick atau dirotasi,
- `robot` sebagai contoh hierarki dan animasi,
- `environment` sebagai konteks ruang,
- `artifact` sebagai fokus visual.

Intinya, requirement ini memastikan proyek memiliki objek 3D yang representatif, dapat dimuat, dan siap dikembangkan dengan material, lighting, dan interaksi.

### Inti yang Harus Ditekankan

- Minimal satu aset `GLTF` / `GLB` harus ada dalam proyek.
- Aset tersebut harus benar-benar dimuat dan terlihat di scene, bukan hanya file.
- Aset sebaiknya mendukung **scene graph** dan dapat menjadi pusat interaksi.
- Pilihan aset bebas, tetapi harus relevan dengan proyek 3D interaktif.

### Transisi ke Slide Berikutnya

Setelah aset 3D tersedia, kualitas visualnya sangat ditentukan oleh material. Selanjutnya kita masuk ke requirement **PBR material**, khususnya penggunaan `MeshStandardMaterial` atau material PBR setara untuk menunjukkan `color / texture`, `roughness`, `metalness`, dan respons terhadap lighting.

---

## Slide 017 - Requirement PBR Material

### Narasi

Pada tahap ini, kita membahas salah satu requirement penting dari proyek Three.js: material objek harus menggunakan pendekatan **PBR**, atau *physically based rendering*. Dalam konteks tugas, minimal kita menggunakan `MeshStandardMaterial` atau material PBR setara. Artinya, objek tidak cukup hanya diberi warna datar; material harus memiliki parameter yang menjelaskan bagaimana permukaan bereaksi terhadap cahaya.

PBR penting karena ia membuat tampilan objek lebih konsisten dan realistis di berbagai kondisi pencahayaan. Parameter material menjadi input untuk perhitungan warna per-pixel pada tahap fragment shading, setelah geometri diproyeksikan dan dirasterisasi. Dengan kata lain, GPU tidak hanya menggambar bentuk objek, tetapi juga menghitung bagaimana cahaya berinteraksi dengan permukaan.

Untuk memenuhi requirement ini, mahasiswa perlu menunjukkan penggunaan beberapa properti material berikut:

- **`color` / `texture`**: warna dasar atau tekstur permukaan. Ini menentukan warna albedo objek, yaitu warna yang terlihat ketika cahaya mengenai permukaan.
- **`roughness`**: kekasaran permukaan. Nilai rendah memberi highlight yang lebih tajam dan reflektif, sedangkan nilai tinggi membuat permukaan tampak lebih kusam dan menyebar.
- **`metalness`**: sifat logam. Nilai tinggi membuat material berperilaku seperti logam yang memantulkan lingkungan, sedangkan nilai rendah cocok untuk material non-logam seperti plastik, kayu, atau kain.
- **`lighting response`**: respons visual material terhadap cahaya. Objek harus terlihat berubah pencahayaan, highlight, atau shading ketika posisi, intensitas, atau jenis cahaya berubah.

Dalam proyek, requirement ini biasanya diterapkan pada asset GLTF/GLB yang sudah dibahas sebelumnya. Jika asset sudah membawa material PBR, kita cukup memastikan parameter tersebut terlihat dan dapat dikontrol. Jika belum, kita dapat mengganti atau menambahkan material PBR pada mesh agar objek tetap memenuhi standar tampilan yang diharapkan.

Yang perlu dipahami sebelum lanjut adalah bahwa material PBR tidak bekerja sendirian. Ia membutuhkan sumber cahaya agar parameter seperti `roughness` dan `metalness` dapat terlihat jelas. Karena itu, setelah material, kita akan masuk ke requirement lighting yang menentukan minimal cahaya apa saja yang harus ada dalam scene.

### Inti yang Harus Ditekankan

- Requirement minimal adalah menggunakan `MeshStandardMaterial` atau material PBR setara.
- Mahasiswa harus menunjukkan `color`/`texture`, `roughness`, `metalness`, dan `lighting response`.
- PBR membuat objek bereaksi terhadap cahaya secara lebih konsisten, bukan hanya menampilkan warna datar.
- Parameter material akan terlihat jelas ketika scene sudah memiliki pencahayaan yang memadai.

### Transisi ke Slide Berikutnya

Setelah material PBR dipahami, langkah berikutnya adalah menyiapkan lighting. Pada slide berikutnya, kita akan membahas requirement minimal pencahayaan: satu Ambient/Hemisphere Light ditambah satu Directional/Point/Spot Light, dengan tujuan mendukung tema visual proyek.

---

## Slide 018 - Requirement Lighting

### Narasi

Setelah kita membahas requirement material PBR pada slide sebelumnya, langkah berikutnya adalah memastikan scene memiliki **lighting** yang cukup. Material PBR seperti `MeshStandardMaterial` memang menentukan bagaimana permukaan bereaksi terhadap cahaya, tetapi reaksi itu baru terlihat jelas jika scene benar-benar disinari. Tanpa lighting yang tepat, material bisa terlihat datar, terlalu gelap, atau tidak menunjukkan karakter yang diinginkan.

Requirement pada slide ini cukup sederhana, tetapi penting:

```text
1 Ambient/Hemisphere Light
+
1 Directional/Point/Spot Light
```

Artinya, scene minimal harus memiliki **dua peran cahaya**: satu cahaya dasar dan satu cahaya utama. Cahaya dasar biasanya berupa `AmbientLight` atau `HemisphereLight`. Fungsinya adalah memberikan pencahayaan umum agar tidak ada bagian scene yang benar-benar hitam. Sementara itu, `DirectionalLight`, `PointLight`, atau `SpotLight` berperan sebagai cahaya utama yang memberi arah, highlight, dan variasi terang-gelap pada objek.

Kita bisa membacanya sebagai kombinasi **base light** dan **key light**. `AmbientLight` memberikan pencahayaan seragam dari semua arah, sedangkan `HemisphereLight` memberi nuansa lingkungan dengan warna langit dan warna tanah. Untuk cahaya utama, `DirectionalLight` cocok untuk cahaya matahari karena arahnya paralel, `PointLight` cocok untuk sumber cahaya seperti lampu atau bola cahaya, dan `SpotLight` cocok untuk cahaya terarah seperti sorot atau lampu sorot.

Pilihan lighting ini juga harus mendukung **tema** scene, bukan sekadar membuat objek terlihat. Misalnya, untuk tema siang hari, kita bisa menggunakan `DirectionalLight` yang kuat dengan `HemisphereLight` yang lembut. Untuk tema malam, intensitas ambient bisa diturunkan, lalu `PointLight` atau `SpotLight` digunakan untuk menciptakan suasana dramatis. Dengan cara ini, lighting tidak hanya berfungsi teknis, tetapi juga membantu membangun mood visual.

Dalam rendering pipeline, lighting biasanya dihitung pada tahap fragment atau pixel shader. Setelah posisi objek dan material sudah tersedia, GPU menghitung kontribusi cahaya terhadap setiap titik permukaan. Di sinilah parameter material seperti `color`, `roughness`, dan `metalness` bertemu dengan arah, warna, dan intensitas cahaya. Karena itu, lighting yang baik akan membuat material PBR terlihat lebih realistis dan konsisten.

Sebelum lanjut, mahasiswa perlu memahami bahwa lighting bukan sekadar “menambahkan cahaya sampai objek terlihat”. Yang lebih penting adalah bagaimana cahaya membentuk **bentuk**, **kedalaman**, dan **suasana** scene. Minimal dua jenis cahaya ini menjadi dasar sebelum kita membahas efek lanjutan seperti shadow.

### Inti yang Harus Ditekankan

- Minimal scene harus memiliki **1 `AmbientLight`/`HemisphereLight`** dan **1 `DirectionalLight`/`PointLight`/`SpotLight`**.
- Cahaya dasar berfungsi mencegah scene terlalu gelap, sedangkan cahaya utama memberi arah, highlight, dan kedalaman visual.
- Lighting harus mendukung **tema scene** dan memperkuat tampilan material PBR, bukan hanya membuat objek terlihat.
- Pilihan jenis cahaya memengaruhi mood visual: `DirectionalLight` untuk cahaya matahari, `PointLight` untuk sumber cahaya lokal, dan `SpotLight` untuk cahaya terarah.

### Transisi ke Slide Berikutnya

Setelah lighting dasar sudah terbentuk, langkah berikutnya adalah membuat scene terasa lebih nyata dengan bayangan. Pada slide berikutnya, kita akan membahas requirement shadow, yaitu penggunaan `castShadow = true` pada objek dan `receiveShadow = true` pada permukaan.

---

## Slide 019 - Requirement Shadow

### Narasi

Setelah pencahayaan dasar sudah ada, kita masuk ke requirement berikutnya, yaitu **shadow**. Bayangan bukan sekadar efek visual tambahan, tetapi bagian penting agar objek terasa benar-benar berada dalam ruang tiga dimensi.

Pada slide ini, requirement minimalnya adalah:

- satu object dengan `castShadow = true`,
- satu surface dengan `receiveShadow = true`.

Secara sederhana, kita bisa menuliskannya seperti ini:

```js
object.castShadow = true;
surface.receiveShadow = true;
```

`castShadow = true` menandakan bahwa objek tersebut **memancarkan bayangan** ke permukaan lain. Sementara itu, `receiveShadow = true` menandakan bahwa permukaan tersebut **mampu menerima bayangan**. Jadi, bayangan yang terlihat biasanya muncul karena ada hubungan antara objek yang memancarkan bayangan dan permukaan yang menerimanya.

Hal ini penting dalam grafika komputer karena bayangan membantu mahasiswa memahami hubungan spasial antara objek, cahaya, dan lingkungan. Tanpa bayangan, objek bisa terlihat seperti melayang atau tidak memiliki posisi yang jelas di dalam scene. Dengan bayangan, objek terasa lebih “tertanam” di dunia virtual, sehingga pengalaman visual menjadi lebih meyakinkan.

Namun, shadow juga harus digunakan secara **efektif** dan tetap mempertimbangkan **performa**. Tidak semua objek harus selalu memancarkan atau menerima bayangan. Untuk project UTS ini, cukup satu objek dan satu permukaan yang sudah memenuhi requirement, tetapi bayangan tersebut harus terasa mendukung tema dan suasana scene, bukan hanya ada secara teknis.

### Inti yang Harus Ditekankan

- Requirement shadow minimal adalah **satu object** dengan `castShadow = true` dan **satu surface** dengan `receiveShadow = true`.
- `castShadow` menentukan objek yang **memancarkan bayangan**, sedangkan `receiveShadow` menentukan permukaan yang **menerima bayangan**.
- Shadow penting untuk memberikan kesan **kedalaman, posisi, dan grounding** pada objek di scene.
- Penggunaan shadow harus **efektif secara visual** dan tetap memperhatikan **performa rendering**.

### Transisi ke Slide Berikutnya

Setelah objek memiliki pencahayaan dan bayangan yang mendukung, langkah berikutnya adalah memperkuat suasana scene melalui environment.

---

## Slide 020 - Requirement Environment

### Narasi

Setelah bayangan membantu objek terasa menempel di dunia, langkah berikutnya adalah membangun **environment** atau lingkungan scene. Dalam proyek Three.js, environment bukan sekadar gambar latar belakang. Ia menentukan bagaimana scene terasa: apakah seperti luar angkasa, malam hari, ruangan dalam, atau dunia game yang memiliki atmosfer tertentu.

Secara visual, environment memberi konteks pada kamera dan objek. Tanpa lingkungan yang jelas, objek bisa terlihat melayang, skala ruang menjadi tidak jelas, dan suasana game terasa datar. Lingkungan yang tepat membantu mahasiswa menunjukkan bahwa scene sudah menjadi satu dunia yang koheren, bukan hanya kumpulan objek 3D yang terpisah.

Pada slide ini, beberapa pilihan environment yang dapat digunakan adalah:

- **`HDR environment`**, yaitu lingkungan berbasis citra berdinamis tinggi yang dapat memberi kesan pencahayaan dan refleksi yang lebih realistis.
- **`skybox`**, yaitu latar langit atau ruang sekitar yang membungkus scene.
- **`procedural stars`**, yaitu bintang-bintang yang dihasilkan secara prosedural, cocok untuk tema luar angkasa atau malam hari.
- **`indoor scene`**, yaitu lingkungan dalam ruangan seperti koridor, ruangan, atau struktur bangunan.
- **`fog`**, yaitu efek kabut yang membantu memperdalam persepsi jarak dan atmosfer.
- **`background environment`**, yaitu latar belakang umum yang mendukung tema scene.

Mahasiswa tidak perlu memakai semua opsi sekaligus. Yang penting adalah memilih environment yang sesuai dengan tema dan memperkuat suasana game. Misalnya, scene luar angkasa bisa memakai `procedural stars` dan `skybox`, scene dalam ruangan bisa memakai `indoor scene` dengan `fog` tipis, atau scene realistis bisa memakai `HDR environment` agar pencahayaan terasa lebih natural.

Sebelum lanjut, hal yang perlu dipahami adalah bahwa environment berhubungan langsung dengan kesan akhir rendering. Ia memengaruhi apa yang terlihat di belakang objek, bagaimana jarak terasa, dan bagaimana keseluruhan scene terbaca oleh mata. Jadi, environment bukan dekorasi tambahan, melainkan bagian penting dari kualitas visual proyek.

### Inti yang Harus Ditekankan

- **Environment wajib ada** dan harus sesuai dengan tema scene, bukan sekadar background tambahan.
- Pilihan seperti `HDR environment`, `skybox`, `procedural stars`, `indoor scene`, `fog`, dan `background environment` dapat dipilih sesuai kebutuhan visual.
- Environment harus **memperkuat suasana game** dan membantu objek, kamera, serta pencahayaan terasa berada dalam satu dunia yang koheren.

### Transisi ke Slide Berikutnya

Setelah lingkungan scene sudah terbentuk, objek di dalamnya perlu memiliki gerakan agar terasa hidup. Slide berikutnya akan membahas **Requirement Animation**, yaitu minimal dua jenis animation yang harus ada dalam proyek.

---

## Slide 021 - Requirement Animation

### Narasi

Pada bagian ini, kita masuk ke requirement animation. Untuk project UTS, minimal harus ada:

```text
2 jenis animation
```

Artinya, scene tidak boleh hanya berisi objek statis. Kita perlu membuat setidaknya dua bentuk gerakan atau perubahan visual yang dapat diamati selama scene berjalan.

Dalam grafika komputer, animasi biasanya berkaitan dengan pembaruan transformasi objek dari waktu ke waktu. Misalnya, posisi, rotasi, atau skala objek berubah pada setiap frame. Perubahan ini kemudian masuk ke rendering pipeline: objek yang sudah diperbarui diproses oleh GPU, lalu dirasterisasi menjadi piksel di layar.

Beberapa contoh animasi yang dapat digunakan antara lain:

- `GLB animation`, yaitu animasi yang sudah tersimpan di dalam model 3D, seperti karakter berjalan atau musuh bergerak.
- `object movement`, yaitu gerakan objek yang dikendalikan oleh logika program, misalnya koin berputar atau platform bergeser.
- `gate animation`, yaitu animasi gerbang yang membuka atau menutup.
- `enemy animation`, yaitu animasi musuh, seperti idle, berjalan, atau menyerang.
- `procedural animation`, yaitu animasi yang dibuat langsung lewat kode, misalnya partikel bergerak mengikuti fungsi sinus.
- `VFX animation`, yaitu efek visual seperti ledakan, aura, trail, atau partikel.

Tidak semua contoh harus digunakan. Yang penting adalah memilih dua animasi yang paling sesuai dengan tema project dan lingkungan yang sudah dibuat. Jika project menggunakan model `GLB`, pastikan animasi dari file tersebut benar-benar dipanggil dan dijalankan. Jika animasi dibuat secara `procedural`, pastikan pembaruannya terjadi secara konsisten pada setiap frame.

Sebelum lanjut, kita perlu memahami bahwa animasi bukan hanya hiasan. Animasi membantu scene terasa hidup, memberi feedback visual, dan memperkuat hubungan antara lingkungan, objek, dan interaksi yang akan dibuat.

### Inti yang Harus Ditekankan

- Minimal `2 jenis animation` wajib ada dalam project.
- Animasi dapat berasal dari asset `GLB` atau dibuat secara `procedural`.
- Pilih animasi yang memperkuat suasana scene dan memberi feedback visual yang jelas.

### Transisi ke Slide Berikutnya

Setelah environment dan animation sudah tersedia, langkah berikutnya adalah membuat interaksi. Pada slide berikutnya, kita akan membahas requirement interaction, yaitu minimal tiga interaksi yang harus ada agar project benar-benar terasa interaktif.

---

## Slide 022 - Requirement Interaction

### Narasi

Kita masuk ke **Requirement Interaction**. Pada slide ini, ada aturan minimal yang harus dipenuhi oleh semua project:

```text
3 interaction
```

Yang dimaksud **interaction** di sini bukan sekadar elemen antarmuka yang muncul di layar, tetapi perilaku yang memungkinkan pengguna memengaruhi scene 3D. Artinya, ketika pengguna melakukan sesuatu, harus ada perubahan yang terlihat atau terasa pada objek, kamera, material, animasi, atau state aplikasi.

Dalam konteks **Three.js**, interaksi biasanya menghubungkan input pengguna dengan objek di scene. Input tersebut bisa berupa klik, hover, sentuhan, tombol keyboard, atau kontrol antarmuka. Outputnya bisa berupa objek bergerak, material berubah, panel terbuka, kamera fokus, atau animasi diaktifkan. Dengan kata lain, interaksi adalah jembatan antara event pengguna dan dunia 3D yang sedang dirender.

Untuk project **game**, contoh interaksi yang umum adalah:

- `move`,
- `attack`,
- `collect`,
- `choose gate`,
- `activate skill`.

Untuk **interactive application**, contohnya bisa berupa:

- `hover`,
- `select`,
- `inspect`,
- `configure material`,
- `activate panel`,
- `camera focus`,
- `open information`.

Yang perlu dipahami mahasiswa adalah tiga interaksi tersebut harus **berbeda fungsi** dan benar-benar memengaruhi scene. Misalnya, satu interaksi untuk memilih objek, satu untuk mengubah material, dan satu untuk memfokuskan kamera. Jangan hanya membuat tiga tombol yang semuanya melakukan hal yang sama, karena requirement ini bertujuan memastikan project bersifat interaktif, bukan hanya animasi pasif.

Jika project sudah memiliki animasi dari requirement sebelumnya, interaksi juga bisa menjadi pemicu atau pengendali animasi tersebut. Misalnya, pengguna memilih gate lalu animasi gate terbuka, atau pengguna mengaktifkan skill lalu objek bergerak. Dengan cara ini, interaksi, animasi, dan rendering pipeline saling terhubung dalam satu pengalaman visual.

### Inti yang Harus Ditekankan

- Semua project wajib memiliki minimal **3 interaction**.
- Interaksi harus memengaruhi scene 3D, bukan hanya tampilan UI.
- Tiga interaksi sebaiknya memiliki fungsi yang berbeda dan jelas.
- Interaksi dapat berupa input pengguna yang mengubah objek, kamera, material, animasi, atau state aplikasi.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan melihat bagaimana salah satu interaksi dapat diimplementasikan dengan `THREE.Raycaster`, yaitu cara Three.js menentukan objek mana yang sedang ditunjuk atau diklik oleh pengguna.

---

## Slide 023 - Raycasting

### Narasi

Pada slide sebelumnya kita sudah melihat bahwa project wajib memiliki minimal tiga interaksi. Di sini kita masuk ke salah satu interaksi yang paling penting dalam aplikasi 3D interaktif, yaitu **raycasting**.

```text
THREE.Raycaster
```

`THREE.Raycaster` adalah alat untuk menentukan objek apa yang berada di posisi tertentu pada layar. Intuisinya sederhana: dari kamera, kita bayangkan sebuah sinar atau ray yang menembus titik kursor. Sinar itu kemudian dicek apakah mengenai objek 3D di scene.

Alur kerjanya bisa dibaca sebagai berikut:

1. Posisi kursor atau input pengguna dibaca.
2. Posisi tersebut diubah menjadi arah sinar dari kamera.
3. Sinar diuji terhadap objek-objek yang bisa dipick.
4. Jika ada objek yang tertembus, objek tersebut menjadi target interaksi.

Dalam konteks project, raycasting bukan sekadar teknik tambahan. Ia adalah jembatan antara input 2D pada layar dan objek 3D di dunia virtual. Tanpa raycasting, interaksi seperti memilih objek akan terasa tidak natural karena pengguna tidak bisa menunjuk objek secara langsung.

Contoh yang diberikan pada slide sangat relevan dengan kebutuhan project. Misalnya:

- **menembak meteor** menggunakan raycast dari kamera atau senjata ke arah objek meteor,
- **memilih artifact** dengan klik pada objek artifact,
- **menekan panel** dengan raycast ke elemen UI 3D,
- **memilih object** untuk inspeksi atau seleksi,
- **mengaktifkan switch** dengan klik pada objek switch.

Yang perlu dipahami mahasiswa adalah bahwa raycasting biasanya bergantung pada posisi **kamera**, **koordinat layar**, dan **objek 3D** yang berada di scene. Jadi sebelum interaksi bekerja dengan benar, kita perlu memastikan kamera sudah benar, objek memiliki transformasi yang valid, dan objek yang ingin dipick memang bisa dideteksi.

Untuk project Three.js, cukup satu interaksi utama yang memakai `THREE.Raycaster` sudah memenuhi salah satu requirement. Namun, interaksi ini sebaiknya dipilih sebagai interaksi inti, misalnya memilih objek, menembak target, atau mengaktifkan panel, karena raycasting memberi kesan bahwa pengguna benar-benar berinteraksi dengan dunia 3D.

Setelah raycasting berhasil mendeteksi objek, langkah berikutnya adalah memberi respons yang jelas. Objek yang tertembus tidak boleh hanya berubah status secara internal, tetapi juga harus terlihat oleh pengguna.

### Inti yang Harus Ditekankan

- Minimal satu interaksi project wajib memakai `THREE.Raycaster`.
- Raycasting mengubah posisi kursor menjadi sinar dari kamera untuk mendeteksi objek 3D.
- Contoh interaksi yang cocok: menembak meteor, memilih artifact, menekan panel, memilih object, mengaktifkan switch.
- Raycasting menghubungkan input 2D pada layar dengan objek 3D di scene.
- Objek yang terdeteksi harus diberi feedback visual agar interaksi terasa nyata.

### Transisi ke Slide Berikutnya

Setelah kita tahu cara mendeteksi objek dengan raycasting, langkah berikutnya adalah membuat objek tersebut memberi respons yang terlihat. Di slide berikutnya kita akan membahas **feedback visual**, seperti highlight saat hover, flash saat attack, atau glow saat gate diaktifkan.

---

## Slide 024 - Feedback Visual

### Narasi

Setelah interaksi dapat dideteksi, misalnya dengan `THREE.Raycaster`, langkah berikutnya adalah memberi **feedback visual**. Feedback ini penting karena pengguna harus segera tahu bahwa aksi yang dilakukan sudah dikenali sistem. Tanpa feedback, interaksi akan terasa mati, ambigu, atau tidak responsif.

Dalam grafika komputer, feedback visual biasanya muncul sebagai perubahan cepat pada objek yang sedang di-render. Perubahan ini dapat berupa warna, kecerahan, **emissive glow**, partikel, atau efek lain yang terlihat oleh mata. Karena rendering real-time berjalan setiap frame, feedback harus cukup cepat dan jelas agar pengguna merasakan hubungan sebab-akibat.

Contoh pada slide dapat dibaca sebagai pasangan aksi dan respons visual:

- **Hover** → **highlight**
- **Attack** → **flash/particle**
- **Gate** → **emissive glow**
- **Damage** → **color flash**
- **Win** → **celebration VFX**

Makna dari pasangan ini adalah setiap interaksi utama perlu memiliki respons yang berbeda. **Hover** memberi isyarat bahwa objek dapat dipilih atau diarahkan. **Attack** memberi isyarat bahwa aksi ofensif terjadi. **Gate** memberi isyarat bahwa objek penting sedang aktif atau dapat digunakan. **Damage** memberi isyarat bahwa objek menerima konsekuensi. **Win** memberi isyarat bahwa kondisi akhir tercapai.

Dari sisi rendering, feedback visual biasanya mengubah state objek sebelum frame berikutnya digambar. Alur sederhananya adalah: input → deteksi objek → perubahan state visual → render frame berikutnya. Misalnya, material objek bisa dibuat lebih terang, warnanya berubah, atau partikel ditambahkan di sekitar objek. Perubahan tersebut kemudian diproses oleh pipeline rendering dan ditampilkan oleh GPU.

Untuk proyek UTS, mahasiswa perlu memastikan bahwa interaksi utama tidak hanya “bekerja di logika”, tetapi juga terlihat. Jika raycast mengenai objek, objek harus menunjukkan sesuatu: highlight, flash, glow, partikel, atau efek lain. Hal ini membuat proyek terasa interaktif, komunikatif, dan lebih mudah dinilai.

### Inti yang Harus Ditekankan

- Interaksi utama wajib memiliki **feedback visual** agar pengguna tahu bahwa aksi sudah dikenali.
- Feedback harus **cepat, jelas, dan berbeda** untuk setiap jenis interaksi.
- Contoh feedback yang valid meliputi **highlight**, **flash**, **particle**, **emissive glow**, **color flash**, dan **celebration VFX**.
- Feedback visual adalah bagian dari pengalaman interaktif, bukan sekadar dekorasi tambahan.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa interaksi perlu diberi feedback, slide berikutnya akan membatasi kebutuhan visual efek khusus, yaitu minimal dua VFX yang harus ada dalam proyek.

---

## Slide 025 - Requirement VFX

### Narasi

Pada tahap ini, kita masuk ke salah satu syarat visual yang cukup menentukan kualitas interaksi: **Requirement VFX**.

```text
2 VFX
```

Artinya, proyek Three.js interaktif 3D ini minimal harus memiliki **dua efek visual** yang dapat dilihat dan dirasakan oleh pengguna. Dua efek ini tidak perlu sama, dan sebaiknya dipilih agar mendukung aksi utama dalam adegan.

VFX penting karena ia menjadi **feedback visual** dari interaksi. Tanpa efek, pengguna mungkin tahu bahwa objek berubah, tetapi tidak merasakan bahwa aksi yang dilakukannya benar-benar terjadi. Misalnya, ketika karakter menyerang, ada ledakan kecil; ketika portal aktif, ada cahaya berdenyut; ketika objek bergerak cepat, ada jejak partikel.

Contoh VFX yang bisa digunakan antara lain:

- `particle`,
- `explosion`,
- `laser`,
- `glow`,
- `emissive pulse`,
- `hologram`,
- `smoke`,
- `spark`,
- `trail`,
- `portal`.

Dalam konteks grafika komputer, VFX biasanya berkaitan dengan **material**, **lighting**, **transparansi**, **animasi**, dan kadang **shader**. Efek seperti `glow` atau `emissive pulse` dapat memanfaatkan material yang memancarkan cahaya, sedangkan `particle` atau `spark` sering melibatkan banyak titik kecil yang dianimasikan. `trail` dan `portal` dapat menggunakan tekstur transparan atau geometri sederhana yang diperbarui setiap frame.

Yang perlu dipahami mahasiswa pada slide ini adalah bahwa VFX bukan sekadar hiasan. Ia harus **relevan dengan interaksi**, **terlihat jelas**, dan **tidak membebani performa** secara berlebihan. Karena ini masih tahap requirement, kita belum membahas cara teknis pembuatannya secara detail.

### Inti yang Harus Ditekankan

- Proyek minimal harus memiliki **2 VFX**.
- VFX berfungsi sebagai **feedback visual** dari interaksi pengguna.
- Contoh VFX dapat berupa `particle`, `explosion`, `laser`, `glow`, `emissive pulse`, `hologram`, `smoke`, `spark`, `trail`, atau `portal`.
- VFX harus mendukung aksi utama dan tetap memperhatikan performa.

### Transisi ke Slide Berikutnya

Setelah kita tahu bahwa minimal ada dua efek visual yang harus ada, langkah berikutnya adalah memahami bagaimana efek-efek tersebut dapat dibuat dalam Three.js.

---

## Slide 026 - Cara Membuat VFX

### Narasi

Setelah kita mengetahui bahwa proyek ini membutuhkan minimal **2 VFX**, langkah berikutnya adalah memahami bagaimana efek visual itu dibuat. Dalam grafika komputer, VFX bukan sekadar objek 3D yang diam; ia adalah elemen visual yang membantu pemain memahami aksi, mendapatkan feedback, dan merasakan atmosfer game. Karena itu, cara pembuatannya harus dipilih berdasarkan bentuk efek, biaya rendering, dan kemudahan animasi.

Dalam Three.js, VFX dapat dibuat dengan beberapa pendekatan. Kita bisa memilih representasi visual yang paling sesuai:

- `THREE.Points` untuk partikel seperti spark, smoke, atau debris.
- `Sprite` untuk efek yang selalu menghadap kamera, misalnya glow atau aura.
- transparent plane untuk laser, portal, hologram, atau bidang cahaya.
- additive blending untuk membuat efek terlihat terang dan menyala.
- animated texture untuk memunculkan perubahan pola pada smoke, portal, atau hologram.
- emissive material untuk efek emissive pulse atau objek yang tampak memancarkan cahaya.
- custom `ShaderMaterial` untuk kontrol warna, bentuk, dan animasi yang lebih spesifik.
- procedural animation untuk mengubah posisi, skala, opacity, warna, atau parameter shader dari waktu ke waktu.

Secara alur, kita bisa membayangkan prosesnya seperti pipeline sederhana:

1. Tentukan bentuk VFX yang ingin dibuat.
2. Pilih representasi visual, misalnya points, sprite, atau plane.
3. Atur material dan blending agar efek terlihat sesuai karakter.
4. Tambahkan animasi agar efek hidup dan tidak statis.
5. Render bersama scene, kamera, dan objek lain.

Poin penting yang perlu dipahami mahasiswa adalah bahwa VFX biasanya bukan satu teknik tunggal. Misalnya, explosion bisa memakai `THREE.Points` untuk partikel, additive blending agar terlihat menyala, dan procedural animation untuk memperbesar serta memudar partikel. Smoke bisa memakai transparent plane atau `Sprite` dengan animated texture. Hologram bisa memakai plane transparan, emissive material, dan animasi opacity atau shader. Jadi, mahasiswa tidak perlu menghafal satu cara baku, tetapi harus mampu memilih kombinasi yang tepat.

Dari sisi rendering pipeline, VFX sangat bergantung pada material dan blending. Additive blending membuat warna efek ditambahkan ke warna frame sebelumnya, sehingga cocok untuk cahaya, laser, glow, dan spark. Emissive material membuat permukaan tampak memancarkan cahaya sendiri, bukan hanya memantulkan cahaya. Sementara itu, custom `ShaderMaterial` memberi ruang untuk mengatur tampilan secara lebih presisi, tetapi tetap harus dipahami bahwa shader adalah bagian dari pipeline yang mengubah data geometri menjadi warna akhir pada layar.

Sebelum lanjut, mahasiswa perlu memastikan bahwa VFX yang dibuat tidak hanya terlihat menarik, tetapi juga terbaca dalam konteks game. Efek harus mendukung gameplay, tidak menutupi objek penting, dan tetap konsisten dengan desain visual. Setelah VFX dipahami, langkah berikutnya adalah memikirkan bagaimana kamera membantu pemain melihat efek dan objek tersebut.

### Inti yang Harus Ditekankan

- VFX dibuat melalui kombinasi representasi visual, material, blending, dan animasi.
- `THREE.Points`, `Sprite`, dan transparent plane adalah pilihan representasi yang umum.
- Additive blending dan emissive material penting untuk efek yang terlihat menyala.
- Custom `ShaderMaterial` dan procedural animation memberi kontrol lebih besar terhadap tampilan dan gerak efek.
- VFX harus mendukung gameplay, bukan sekadar hiasan visual.

### Transisi ke Slide Berikutnya

Setelah efek visual dibuat, kita perlu memastikan pemain dapat melihatnya dengan cara yang tepat. Untuk itu, slide berikutnya membahas requirement kamera yang mendukung gameplay dan pengalaman bermain.

---

## Slide 027 - Requirement Camera

### Narasi

Dalam project Three.js, **kamera** bukan sekadar objek yang membuat scene terlihat. Kamera adalah **pengamat virtual** yang menentukan bagian mana dari scene 3D yang masuk ke layar, bagaimana objek terlihat, dan seberapa jelas informasi spasial yang diterima pengguna. Dalam rendering pipeline, kamera berperan pada tahap **view transformation** dan **projection**: posisi dan orientasi kamera menentukan bagaimana koordinat dunia diubah menjadi koordinat kamera, lalu diproyeksikan ke layar 2D.

Karena itu, requirement kamera pada project ini berarti kita harus memilih perilaku kamera yang mendukung **gameplay** atau **interaksi**, bukan hanya memilih kamera yang “keren” secara visual. Kamera yang tepat akan membantu pengguna memahami posisi objek, arah gerak, jarak, tujuan, dan hubungan antarobjek. Sebaliknya, kamera yang salah bisa membuat scene terlihat bagus tetapi sulit dimainkan atau sulit dieksplorasi.

Beberapa mode kamera yang disebutkan pada slide adalah:

- **follow camera**: kamera mengikuti objek atau pemain, cocok untuk game aksi, runner, atau project yang subjek utamanya bergerak.
- **top-down**: kamera melihat dari atas, baik untuk memberikan gambaran luas, navigasi, atau desain berbasis grid.
- **fixed strategic**: kamera tetap pada sudut tertentu, cocok untuk strategi atau taktik karena memberikan pandangan stabil.
- **first-person sederhana**: kamera berada pada sudut pandang pengguna, memberikan rasa imersif, tetapi membutuhkan kontrol dan UI yang hati-hati.
- **orbit/focus**: kamera berputar atau fokus pada objek tertentu, cocok untuk aplikasi interaktif, inspeksi objek, atau viewer 3D.
- **third-person style**: kamera berada di belakang atau di samping karakter, menyeimbangkan imersi dan konteks lingkungan.

Poin penting yang perlu dipahami adalah: daftar tersebut bukan berarti semua mode harus digunakan. Kita memilih satu atau beberapa mode kamera yang paling sesuai dengan jenis project. Jika project bersifat mini game, kamera harus membuat **objektif**, **hambatan**, dan **interaksi** mudah dibaca. Jika project bersifat interactive application, kamera harus membantu pengguna **memilih objek**, **mengamati detail**, atau **menjelajahi scene** dengan nyaman.

Dalam implementasi Three.js, kamera biasanya berupa objek seperti `THREE.PerspectiveCamera` atau `THREE.OrthographicCamera`. Namun, yang lebih penting dari jenis kamera adalah **perilaku** kamera: apakah posisinya diperbarui setiap frame, apakah kameranya mengikuti target, apakah kameranya mengorbit, atau apakah kameranya tetap. Perilaku ini harus konsisten dengan kontrol pengguna, skala objek, dan tujuan interaksi.

Sebelum lanjut ke UI/HUD, kita perlu menyadari bahwa kamera menentukan **apa yang terlihat**, sedangkan UI/HUD menentukan **apa yang dikomunikasikan** kepada pengguna. Kamera yang baik dapat mengurangi kebutuhan informasi berlebih di layar, tetapi kamera yang buruk akan membuat UI/HUD menjadi membingungkan karena pengguna tidak tahu apa yang sedang terjadi di scene.

### Inti yang Harus Ditekankan

- **Kamera adalah bagian dari desain pengalaman**, bukan hanya komponen teknis untuk menampilkan scene.
- Mode kamera seperti **follow**, **top-down**, **fixed strategic**, **first-person**, **orbit/focus**, dan **third-person** harus dipilih sesuai kebutuhan gameplay atau interaksi.
- Kamera menentukan **kejelasan informasi spasial**, sehingga harus konsisten dengan kontrol, skala objek, dan tujuan project.

### Transisi ke Slide Berikutnya

Setelah kamera menentukan sudut pandang dan informasi apa yang terlihat oleh pengguna, langkah berikutnya adalah merancang **UI/HUD minimum** yang membantu pengguna memahami status, tujuan, dan hasil interaksinya.

---

## Slide 028 - UI / HUD Minimum

### Narasi

Dalam project `Three.js`, **UI/HUD** bukan sekadar teks tambahan di atas layar, tetapi lapisan informasi yang membantu pengguna memahami apa yang sedang terjadi di dalam scene 3D. Scene 3D memang menampilkan objek, kamera, pencahayaan, dan interaksi visual, tetapi tanpa informasi pendukung, pengguna bisa bingung: apa yang harus dilakukan, apa statusnya saat ini, dan apakah interaksinya berhasil atau belum.

Karena itu, UI/HUD penting karena menjadi jembatan antara **rendering 3D** dan **pengalaman pengguna**. Rendering pipeline menghasilkan gambar yang menarik, tetapi UI/HUD memberi konteks. Misalnya, pada game, pengguna perlu tahu apakah nyawanya masih ada, berapa skornya, atau berapa lama waktu yang tersisa. Pada aplikasi interaktif, pengguna perlu tahu objek apa yang sedang dipilih, instruksi apa yang tersedia, atau konfigurasi apa yang sedang aktif.

Pada slide ini, kita membedakan dua jenis project: **mini game** dan **interactive application**. Pembedaan ini penting karena informasi UI yang dibutuhkan tidak selalu sama. Kita tidak perlu menampilkan semua elemen sekaligus. Yang perlu kita lakukan adalah memilih informasi yang paling relevan dengan jenis project dan tujuan interaksinya.

Untuk **mini game**, UI/HUD biasanya menampilkan status permainan yang memengaruhi gameplay. Informasi seperti `score`, `health`, `timer`, `progress`, `unit count`, `objective`, dan `game state` membantu pemain memahami kondisi permainan secara cepat. Elemen-elemen ini penting karena memberi umpan balik langsung terhadap tindakan pemain, misalnya apakah pemain berhasil mengumpulkan poin, masih bertahan, atau sudah mencapai tujuan tertentu.

Untuk **interactive application**, fokusnya berbeda. Di sini, UI/HUD lebih banyak membantu eksplorasi, konfigurasi, atau pemahaman informasi. Contoh informasinya adalah `selected object`, `interaction instruction`, `configuration state`, `progress eksplorasi`, `information panel`, dan `task/completion status`. Informasi ini penting karena pengguna tidak selalu bermain untuk menang, tetapi mungkin sedang memeriksa objek, mengatur parameter, atau menyelesaikan tugas tertentu di dalam scene 3D.

Prinsip utamanya adalah **minimum**. UI/HUD tidak harus ramai atau menampilkan semua data yang tersedia. Yang perlu kita tekankan adalah informasi yang benar-benar membantu pengguna memahami tujuan, status, dan hasil interaksinya. UI yang baik harus jelas, tidak menutupi scene 3D secara berlebihan, dan konsisten dengan jenis project yang sedang dibuat.

Sebelum lanjut, hal yang perlu dipahami mahasiswa adalah bahwa UI/HUD harus disesuaikan dengan kebutuhan project. Untuk mini game, kita cenderung menampilkan status gameplay. Untuk interactive application, kita cenderung menampilkan informasi eksplorasi atau konfigurasi. Dengan memilih informasi yang tepat, scene 3D tidak hanya terlihat menarik, tetapi juga benar-benar dapat digunakan dan dipahami oleh pengguna.

### Inti yang Harus Ditekankan

- **UI/HUD** adalah lapisan informasi yang membantu pengguna memahami status, tujuan, dan hasil interaksi di dalam scene 3D.
- Untuk **mini game**, fokus UI/HUD biasanya pada status gameplay seperti `score`, `health`, `timer`, `progress`, `unit count`, `objective`, dan `game state`.
- Untuk **interactive application**, fokus UI/HUD biasanya pada informasi eksplorasi atau konfigurasi seperti `selected object`, `interaction instruction`, `configuration state`, `progress eksplorasi`, `information panel`, dan `task/completion status`.
- Prinsip **minimum** berarti hanya menampilkan informasi yang benar-benar relevan, jelas, dan tidak mengganggu pengalaman visual 3D.

### Transisi ke Slide Berikutnya

Setelah kita menentukan informasi apa yang perlu ditampilkan di UI/HUD, langkah berikutnya adalah memastikan project memiliki tujuan yang jelas dan kondisi selesai yang dapat dicapai. Di slide berikutnya, kita akan membahas **objective dan completion** untuk **mini game** serta **interactive application**.

---

## Slide 029 - Objective dan Completion

### Narasi

Sebelum project UTS dinilai sebagai karya grafika komputer, kita perlu memastikan bahwa scene 3D yang dibangun memiliki **tujuan interaksi** yang bisa dipahami pengguna. Tujuan ini bukan sekadar judul atau deskripsi, melainkan kondisi yang membuat pengguna tahu apa yang harus dilakukan di dalam dunia virtual. Tanpa tujuan yang jelas, project hanya menjadi objek 3D yang dapat diputar atau dilihat, tetapi tidak memiliki arah pengalaman.

Untuk **Mini Game**, tujuan biasanya bersifat tantangan atau progresi permainan. Contoh yang dapat digunakan antara lain:

```text
Boss defeated
Reach finish
Survive all waves
Escape successfully
```

Artinya, pemain harus mencapai kondisi tertentu agar permainan dianggap selesai. Tujuan ini penting karena memberi arah pada mekanik, kontrol, feedback, dan kondisi akhir permainan.

Untuk **Interactive Application**, bentuk tujuan tidak selalu berupa menang atau kalah. Tujuannya lebih berupa penyelesaian tugas eksplorasi, konfigurasi, atau pemeriksaan informasi. Contohnya:

```text
Aktifkan seluruh sistem
Periksa seluruh artifact
Selesaikan konfigurasi produk
Temukan seluruh informasi penting
```

Di sini, pengguna dianggap berhasil ketika seluruh elemen penting dalam aplikasi telah diakses atau diselesaikan. Jadi, interaksi tetap menjadi inti, tetapi bentuknya lebih dekat dengan aplikasi daripada permainan.

Perbedaan utama antara keduanya terletak pada **sifat tujuan**. Mini Game biasanya memiliki tekanan, tantangan, atau konsekuensi, sedangkan Interactive Application lebih menekankan pada penyelesaian tugas, eksplorasi, atau pemahaman. Namun, keduanya harus memiliki **completion** yang dapat dikenali oleh pengguna. Jika pengguna tidak tahu kapan project dianggap selesai, maka interaksi menjadi tidak terarah.

Hal yang harus dipahami sebelum lanjut adalah: project tidak boleh berhenti pada visual 3D yang menarik. Visual, kamera, lighting, dan objek tetap penting, tetapi semuanya harus melayani tujuan interaksi. Objective yang jelas akan membantu kita menentukan apa yang perlu ditampilkan di UI/HUD, apa yang perlu dihitung oleh program, dan bagaimana pengguna tahu bahwa ia telah mencapai tujuan.

### Inti yang Harus Ditekankan

- Setiap project wajib memiliki **objective** yang jelas dan dapat dikenali pengguna.
- **Mini Game** biasanya memiliki tujuan berupa tantangan, progresi, atau penyelesaian misi.
- **Interactive Application** biasanya memiliki tujuan berupa eksplorasi, konfigurasi, atau penyelesaian tugas.
- Project tidak boleh hanya menjadi scene 3D yang dapat dilihat tanpa tujuan interaksi.
- Objective menjadi dasar untuk menentukan feedback, UI/HUD, dan kondisi completion.

### Transisi ke Slide Berikutnya

Setelah tujuan project ditentukan, langkah berikutnya adalah menentukan bagaimana tujuan itu dinyatakan sebagai kondisi akhir. Untuk Mini Game, kita akan melihat win/lose condition, sedangkan untuk Interactive Application kita akan fokus pada completion state atau task completion.

---

## Slide 030 - Win/Lose atau Completion State

### Narasi

Setelah project memiliki tujuan interaksi, kita perlu memastikan bahwa interaksi itu memiliki **akhir yang dapat dikenali oleh sistem**. Dalam konteks project Three.js, akhir ini bukan hanya pesan di layar, melainkan **state** yang menentukan apakah scene masih berjalan, apakah interaksi masih diterima, atau apakah feedback visual sudah cukup untuk menunjukkan hasil.

Untuk **mini game**, slide menegaskan bahwa project wajib memiliki `Win Condition` dan `Lose / Failure Condition`. Artinya, mahasiswa harus mendefinisikan kapan pemain dianggap berhasil dan kapan pemain dianggap gagal. Contoh yang diberikan adalah `HP = 0`, `timer habis`, `boss defeated`, dan `semua wave selesai`. Secara teknis, kondisi-kondisi ini biasanya menjadi pemicu untuk mengubah state game, menghentikan update tertentu, menampilkan pesan, atau memblokir interaksi yang sudah tidak relevan.

```text
Win Condition
dan
Lose / Failure Condition
```

Penting untuk dipahami bahwa **win** dan **lose** bukan sekadar label naratif. Keduanya harus terdeteksi secara eksplisit oleh program. Jika tidak ada kondisi yang jelas, scene 3D bisa terus berjalan tanpa arah, dan mahasiswa tidak dapat membuktikan bahwa interaksi yang dibuat benar-benar memengaruhi hasil.

Untuk **interactive application**, slide membedakan bahwa project tidak wajib memiliki menang–kalah. Yang wajib ada adalah `Completion State` atau `Task Completion`. Contoh yang diberikan adalah seluruh panel berhasil diaktifkan, seluruh artifact utama telah diperiksa, dan konfigurasi produk telah selesai. Di sini, fokusnya bukan pada kompetisi atau kegagalan, melainkan pada apakah pengguna telah menyelesaikan rangkaian tugas yang disediakan.

```text
Completion State
atau
Task Completion
```

Perbedaan ini penting karena banyak mahasiswa cenderung membuat scene 3D yang hanya bisa dijelajahi, tetapi tidak ada kondisi yang menyatakan bahwa pengguna sudah selesai. Dalam grafika komputer interaktif, **completion state** membantu sistem mengetahui kapan interaksi utama telah tuntas, kapan feedback visual perlu ditampilkan, dan kapan scene dapat memasuki kondisi akhir yang stabil.

Sebelum lanjut, mahasiswa perlu memastikan bahwa projectnya memiliki minimal satu kondisi akhir yang dapat dipantau: apakah itu `Win Condition`, `Lose / Failure Condition`, atau `Completion State`. Kondisi ini menjadi dasar untuk menentukan perilaku scene setelah interaksi selesai, termasuk bagaimana pengguna kembali memulai proses jika diperlukan.

### Inti yang Harus Ditekankan

- **Mini game** wajib memiliki `Win Condition` dan `Lose / Failure Condition`.
- **Interactive application** tidak wajib menang–kalah, tetapi wajib memiliki `Completion State` atau `Task Completion`.
- Kondisi akhir harus dapat dideteksi oleh program, bukan hanya ditulis sebagai teks di slide.
- Contoh kondisi yang valid termasuk `HP = 0`, `timer habis`, `boss defeated`, `semua wave selesai`, seluruh panel aktif, seluruh artifact diperiksa, atau konfigurasi produk selesai.

### Transisi ke Slide Berikutnya

Setelah kondisi akhir seperti win, lose, atau completion tercapai, project juga perlu memiliki cara untuk memulai ulang atau mengembalikan state. Pada slide berikutnya, kita akan membahas **Restart atau Reset** dan bagaimana mekanisme itu diterapkan untuk mini game maupun interactive application.

---

## Slide 031 - Restart atau Reset

### Narasi

Setelah mini game memiliki kondisi akhir, langkah berikutnya adalah memberi pengguna jalan untuk memulai ulang. Dalam mini game, setelah `WIN / LOSE` muncul, aplikasi tidak boleh berhenti permanen. Harus tersedia **Restart** agar pemain bisa mencoba lagi tanpa harus menutup dan membuka ulang aplikasi.

Secara teknis, **Restart** bukan hanya menampilkan tombol di layar. Ia berarti mengembalikan **state** aplikasi ke kondisi awal yang konsisten. Untuk proyek Three.js, ini bisa mencakup posisi kamera, transformasi objek, kondisi objek yang sudah berubah, timer, skor, health, atau flag state game. Yang penting adalah seluruh state yang memengaruhi hasil permainan harus dikembalikan dengan benar.

Untuk **interactive application**, konsepnya lebih fleksibel. Tidak semua aplikasi interaktif memiliki menang-kalah, sehingga tidak semua membutuhkan tombol restart game. Yang perlu dipertimbangkan adalah apakah pengguna perlu kembali ke kondisi awal. Jika relevan, sediakan `reset` untuk konfigurasi, interaction state, `initial view`, atau `exploration flow`.

Perbedaan utamanya terletak pada tujuan. Mini game membutuhkan **Restart** sebagai bagian dari gameplay loop: main, selesai, lalu ulangi. Interactive application membutuhkan reset sebagai bagian dari usability: pengguna bisa kembali ke titik awal tanpa bingung atau kehilangan kontrol. Jadi, desainnya harus mengikuti jenis aplikasi yang sedang dibuat.

Sebelum lanjut, mahasiswa perlu memastikan bahwa restart atau reset tidak hanya mengubah tampilan, tetapi juga state internal. Jika state lama tidak dibersihkan, bisa muncul bug seperti objek tetap tersimpan, timer masih berjalan, atau interaksi lama masih aktif.

### Inti yang Harus Ditekankan

- Mini game wajib menyediakan `Restart` setelah `WIN / LOSE`.
- **Restart** harus mengembalikan state game ke kondisi awal yang konsisten, bukan hanya tampilan UI.
- **Interactive application** cukup menyediakan reset bila relevan, misalnya reset konfigurasi, interaction state, `initial view`, atau `exploration flow`.
- Tidak semua interactive application membutuhkan tombol restart game.

### Transisi ke Slide Berikutnya

Setelah alur selesai dan reset sudah dirancang, kita perlu memastikan aplikasi tetap berjalan lancar. Selanjutnya kita akan membahas **Performance Awareness**, yaitu faktor-faktor seperti polygon count, texture resolution, jumlah light, shadow map, particle count, jumlah object, dan raycast target yang memengaruhi performa rendering.

---

## Slide 032 - Performance Awareness

### Narasi

Pada tahap ini, kita perlu beralih dari “aplikasi sudah bisa berjalan” ke “aplikasi berjalan dengan baik”. Dalam grafika komputer, **performance awareness** adalah kesadaran bahwa setiap elemen visual memiliki biaya komputasi. Sebuah scene Three.js yang terlihat menarik bisa menjadi berat jika terlalu banyak geometri, tekstur, cahaya, atau interaksi yang diproses setiap frame oleh GPU.

Kita bisa melihat beberapa sumber biaya utama dari daftar pada slide:

- `polygon count`: jumlah segitiga pada mesh. Semakin tinggi, semakin banyak data geometri yang harus diproses, terutama pada tahap vertex processing dan rasterization.
- `texture resolution`: ukuran resolusi tekstur. Tekstur yang terlalu besar dapat membebani memori dan bandwidth, terutama jika banyak objek memakai tekstur resolusi tinggi.
- `jumlah light`: setiap light tambahan meningkatkan perhitungan lighting pada shader, sehingga biaya fragment processing dapat naik.
- `shadow map`: bayangan real-time biasanya membutuhkan render tambahan dari sudut pandang light, sehingga menambah beban pipeline.
- `particle count`: partikel sering berupa banyak objek kecil atau banyak vertex; jika jumlahnya besar, biaya rendering bisa meningkat cepat.
- `jumlah object`: banyak object di scene dapat menambah kompleksitas scene graph, transformasi, dan proses rendering.
- `raycast target`: objek yang bisa diuji oleh raycast, misalnya untuk interaksi mouse atau touch. Semakin banyak target yang diperiksa setiap frame, semakin besar biaya interaksi.

Poin pentingnya bukan membuat semua nilai tersebut serendah mungkin, tetapi memahami trade-off. Untuk objek yang dekat dengan kamera atau menjadi fokus visual, detail tinggi mungkin wajar. Untuk objek latar belakang atau objek yang tidak penting, detail dapat dikurangi. Dengan cara ini, visual tetap bagus tetapi aplikasi tetap responsif.

Dalam konteks proyek UTS, mahasiswa perlu mengecek apakah scene masih lancar ketika interaksi aktif, kamera bergerak, animasi berjalan, atau efek visual menyala. Jika frame rate turun, kita bisa mulai menelusuri faktor mana yang paling berpengaruh: apakah karena geometri terlalu berat, tekstur terlalu besar, terlalu banyak light, `shadow map` aktif, partikel berlebihan, atau raycast memeriksa terlalu banyak objek.

Sebelum lanjut, hal yang perlu dipahami adalah bahwa performa bukan masalah “tambahan” setelah visual selesai. Performa adalah bagian dari desain aplikasi 3D. Keputusan tentang jumlah objek, resolusi tekstur, dan cara interaksi harus dipikirkan sejak awal agar aplikasi tidak hanya terlihat baik, tetapi juga nyaman dijalankan.

### Inti yang Harus Ditekankan

- **Performance awareness** berarti memahami bahwa setiap elemen visual memiliki biaya rendering.
- Faktor utama yang perlu diperhatikan: `polygon count`, `texture resolution`, `jumlah light`, `shadow map`, `particle count`, `jumlah object`, dan `raycast target`.
- Visual yang bagus harus tetap berjalan lancar; performa perlu dievaluasi bersama interaksi, animasi, dan kondisi perangkat target.

### Transisi ke Slide Berikutnya

Setelah kita menyadari sumber-sumber biaya performa, langkah berikutnya adalah menata project agar lebih mudah dikembangkan, diuji, dan dipelihara. Kita akan melihat struktur project yang disarankan.

---

## Slide 033 - Struktur Project yang Disarankan

### Narasi

Sebelum kita memilih tema project, ada satu hal yang sering menentukan kelancaran kerja: **struktur project** yang rapi. Dalam project Three.js, satu file besar bisa terasa cepat, tetapi akan sulit dikembangkan ketika kita sudah menambah kamera, interaksi, animasi, efek, dan aset. Struktur yang disarankan membantu kita memisahkan tanggung jawab setiap bagian, sehingga kode lebih mudah dibaca, diuji, dan diperbaiki.

```text
src/
├── main.js
├── scene.js
├── game.js
├── player.js
├── interaction.js
├── animation.js
├── effects.js
└── ui.js

public/
├── models/
├── textures/
├── environments/
└── audio/
```

Secara besar, folder `src/` adalah tempat logika aplikasi, sedangkan folder `public/` adalah tempat aset yang akan dimuat oleh browser. Beberapa peran file yang perlu kita pahami:

- `main.js`: titik awal aplikasi; biasanya digunakan untuk inisialisasi `renderer`, `scene`, `camera`, dan memulai render loop.
- `scene.js`: membangun dunia 3D, misalnya menempatkan mesh, material, lighting, dan environment.
- `game.js`: mengatur state dan alur utama, misalnya update, reset, atau kondisi selesai.
- `player.js`: menangani representasi pengguna atau kontrol kamera bila ada.
- `interaction.js`: deteksi objek interaktif, misalnya dengan `raycasting` atau `Raycaster`.
- `animation.js`: mengatur animasi objek, timeline, atau perubahan parameter visual.
- `effects.js`: memuat efek visual seperti partikel, glow, atau post-processing.
- `ui.js`: mengelola elemen antarmuka di luar canvas, seperti tombol, instruksi, atau status.

Untuk aset, folder `public/` membantu kita mengelompokkan file secara konsisten. Folder `models/` dapat berisi geometri 3D, `textures/` berisi material dan permukaan, `environments/` berisi environment map atau HDR, dan `audio/` berisi suara yang memperkuat pengalaman interaktif.

Struktur ini juga mendukung **performance awareness**. Ketika aset dan logika terpisah, kita lebih mudah mengecek bagian mana yang membebani GPU atau CPU: apakah terlalu banyak model, texture resolusi tinggi, light, shadow, particle, atau raycast target. Dengan modularitas, kita bisa mengoptimasi satu bagian tanpa harus membongkar seluruh project.

### Inti yang Harus Ditekankan

- Gunakan **struktur modular** agar `scene`, interaksi, animasi, efek, dan UI tidak bercampur dalam satu file.
- Folder `src/` untuk logika Three.js, sedangkan `public/` untuk aset seperti model, texture, environment, dan audio.
- Pemisahan file memudahkan debugging, kolaborasi, dan optimasi performa.
- Struktur yang rapi membantu project interaktif 3D tetap terbaca meskipun scene, lighting, dan interaksi semakin kompleks.

### Transisi ke Slide Berikutnya

Setelah struktur project kita siapkan, langkah berikutnya adalah memilih tema dan mendefinisikan interaksi. Kita akan mulai dari **Topik 1 — Sci-Fi Control Room**, di mana struktur ini akan dipakai untuk membangun ruangan futuristik yang memiliki object interaktif, lighting, animasi, dan completion state.

---

## Slide 034 - Topik 1 — Sci-Fi Control Room

### Narasi

Kita mulai dari topik yang paling cocok untuk membangun **Interactive 3D Application / Experience**: **Sci-Fi Control Room**. Bayangkan sebuah ruangan futuristik yang berisi panel kontrol, hologram, mesin, lampu, dan beberapa objek yang bisa diaktifkan. Ruang ini bukan sekadar model 3D yang diam, tetapi lingkungan yang memberi respons terhadap interaksi pengguna.

Jenis project pada slide ini ditulis sebagai:

```text
Interactive 3D Application / Experience
```

Artinya, mahasiswa tidak hanya menampilkan scene, tetapi juga membuat alur interaksi. Tujuannya cukup jelas: pengguna mengaktifkan sistem atau terminal tertentu, lalu control room mencapai **completion state**. Dari sini kita bisa merancang objek interaktif, kondisi keberhasilan, dan perubahan visual yang menandakan progres.

Topik ini penting karena menggabungkan banyak konsep grafika komputer dalam satu scene yang relatif terkontrol. Kita akan bekerja dengan geometri ruangan dan objek, transformasi posisi, kamera, material, pencahayaan, dan pipeline rendering. Karena ada interaksi, kita juga perlu memahami bagaimana input pengguna diterjemahkan menjadi perubahan state scene.

Fokus grafika yang disarankan adalah:

```text
Emissive
PBR
Dynamic Lighting
Shadow
Raycasting
Animation
HDR / Environment Map
```

Secara sederhana, fokus ini membentuk tampilan sci-fi yang meyakinkan. **Emissive** membuat panel, terminal, atau hologram tampak menyala. **PBR** membantu material seperti logam, plastik, dan kaca bereaksi secara realistis terhadap cahaya. **Dynamic Lighting** dan **Shadow** memberi kedalaman serta umpan balik visual ketika sistem diaktifkan. **Raycasting** digunakan untuk mendeteksi objek yang diklik atau disentuh. **Animation** membuat perubahan state terasa hidup, misalnya panel terbuka, hologram muncul, atau lampu berubah warna. Sementara **HDR / Environment Map** memperkuat refleksi dan pencahayaan ambient agar ruangan terlihat lebih sinematik.

Sebelum lanjut, hal yang harus dipahami adalah bahwa project ini bukan hanya soal “membuat ruangan bagus”. Yang lebih penting adalah hubungan antara interaksi, state, dan rendering: ketika pengguna mengaktifkan terminal, scene harus memberi respons yang terlihat, misalnya cahaya berubah, objek beranimasi, atau status completion tercapai.

### Inti yang Harus Ditekankan

- **Sci-Fi Control Room** adalah topik **Interactive 3D Application / Experience**, bukan sekadar scene statis.
- Tujuan interaksi adalah mengaktifkan sistem/terminal tertentu hingga control room mencapai **completion state**.
- Fokus grafika utama meliputi **Emissive**, **PBR**, **Dynamic Lighting**, **Shadow**, **Raycasting**, **Animation**, dan **HDR / Environment Map**.
- Mahasiswa perlu memahami hubungan antara input pengguna, perubahan state scene, dan feedback visual melalui lighting, material, dan animasi.

### Transisi ke Slide Berikutnya

Setelah memahami topik control room yang lebih menekankan eksplorasi dan interaksi, kita lanjut ke **Topik 2 — Elemental Army Run**, yang bergeser ke **Mini Game 3D** dengan pasukan Fire, Water, dan Electric serta tujuan final battle.

---

## Slide 035 - Topik 2 — Elemental Army Run

### Narasi

Topik kedua ini mengarah pada **Mini Game 3D** dalam proyek `Three.js` dengan narasi sederhana: pasukan `Fire`, `Water`, dan `Electric` bergerak melewati `gate`, lalu terlibat dalam `final battle`. Dari sisi grafika komputer, slide ini bukan hanya menjelaskan tema permainan, tetapi juga menunjukkan bagaimana sebuah adegan real-time dibangun dari objek 3D, material, pencahayaan, efek partikel, dan interaksi gameplay.

Secara visual, kita bisa membayangkan alurnya sebagai berikut:

1. Objek pasukan `Fire`, `Water`, dan `Electric` direpresentasikan sebagai geometri 3D yang dapat diposisikan, dirotasi, dan diskalakan dalam dunia.
2. `Gate` menjadi elemen penting karena dapat diberi material `emissive` agar tampak menyala dan menjadi penanda transisi area.
3. Saat pasukan bergerak atau bertempur, efek seperti `Elemental VFX` dan `Particles` digunakan untuk memperkuat identitas elemen: api, air, dan listrik.
4. Pencahayaan `Dynamic Lighting` membuat adegan lebih hidup karena cahaya dapat berubah mengikuti posisi objek, status pertempuran, atau efek elemen.
5. Material `PBR` membantu permukaan objek terlihat lebih realistis dengan respons yang konsisten terhadap cahaya dan lingkungan.

Dalam konteks `rendering pipeline`, komponen-komponen ini saling terhubung. Geometri pasukan dan `gate` melewati proses transformasi dari koordinat lokal ke koordinat dunia, kemudian diproyeksikan oleh kamera ke layar. Setelah itu, material dan pencahayaan menentukan warna akhir setiap pixel yang akan di-rasterisasi. Untuk efek seperti partikel dan `Crowd Visualization`, `GPU` menjadi sangat penting karena jumlah objek atau titik visual yang perlu diperbarui setiap frame bisa cukup besar.

Yang perlu kita pahami dari topik ini adalah bahwa **gameplay** dan **grafika** berjalan bersama. Tujuan gameplay, yaitu membangun pasukan yang cukup kuat dan menyelesaikan `final battle`, harus didukung oleh presentasi visual yang jelas: pemain perlu mengenali elemen pasukan, memahami fungsi `gate`, dan merasakan intensitas pertempuran. Di sisi lain, fokus grafika seperti `Animated Texture`, `Emissive Gate`, dan `Crowd Visualization` membantu adegan menjadi lebih komunikatif tanpa harus membuat model detail yang sangat berat.

Sebelum lanjut, hal penting yang perlu diperhatikan adalah keseimbangan antara kualitas visual dan performa. Partikel, pencahayaan dinamis, dan visualisasi kerumunan dapat membuat adegan menarik, tetapi juga memengaruhi beban rendering. Karena itu, mahasiswa perlu mulai berpikir bagaimana memilih material, mengatur jumlah partikel, dan menyusun adegan agar tetap mudah dibaca secara visual serta tetap dapat berjalan secara real-time.

### Inti yang Harus Ditekankan

- Topik ini adalah **Mini Game 3D** dengan alur utama: pasukan `Fire`, `Water`, dan `Electric` melewati `gate` menuju `final battle`.
- Fokus grafika utama meliputi `Elemental VFX`, `Particles`, `Emissive Gate`, `Animated Texture`, `Dynamic Lighting`, `PBR`, dan `Crowd Visualization`.
- Adegan ini menunjukkan hubungan antara geometri, material, pencahayaan, kamera, dan `rendering pipeline` dalam satu skenario permainan.
- Kualitas visual harus tetap seimbang dengan performa, terutama karena partikel, `Dynamic Lighting`, dan `Crowd Visualization` dapat meningkatkan beban `GPU`.

### Transisi ke Slide Berikutnya

Setelah membahas adegan yang lebih dinamis dan berbasis pertempuran, topik berikutnya akan beralih ke pengalaman eksplorasi: **Interactive Museum**, di mana fokusnya adalah menampilkan artifact, interaksi kamera, material presentasi, dan informasi objek secara lebih tenang dan terstruktur.

---

## Slide 036 - Topik 3 — Interactive Museum

### Narasi

Pada topik ini, kita beralih dari bentuk mini game ke **Interactive 3D Application / Experience**. Bentuknya adalah museum virtual, di mana pengguna tidak hanya melihat objek 3D, tetapi juga dapat berinteraksi dengan **artifact** yang ada di dalamnya. Interaksi yang dimaksud cukup sederhana secara konsep, tetapi penting secara teknis: pengguna dapat melakukan **hover**, memilih artifact, melakukan **inspect**, lalu menampilkan informasi terkait artifact tersebut.

Pentingnya topik ini dalam grafika komputer terletak pada perpaduan antara representasi visual dan interaksi. Museum virtual menuntut kita untuk membangun ruang 3D yang dapat dijelajahi, menampilkan objek dengan material yang meyakinkan, dan memastikan pengguna dapat “menunjuk” objek tertentu dari layar. Dengan kata lain, slide ini bukan hanya soal membuat objek terlihat bagus, tetapi juga soal bagaimana objek tersebut dapat dikenali, dipilih, dan dihubungkan dengan informasi.

Tujuan interaksi pada project ini adalah mengeksplorasi dan membuka informasi seluruh **artifact utama** hingga mencapai **exhibition completion**. Artinya, ada kondisi penyelesaian yang dapat diukur: pengguna tidak cukup hanya masuk ke museum, tetapi harus menemukan dan membuka informasi dari artifact-artifact penting. Konsep ini mirip dengan progresi dalam aplikasi 3D, di mana interaksi pengguna mengubah state aplikasi, misalnya dari belum dilihat menjadi sudah dilihat.

Fokus grafika pada topik ini cukup representatif untuk aplikasi 3D interaktif. Kita dapat melihat beberapa komponen utama sebagai berikut:

- **GLTF/GLB**: format aset 3D untuk membawa geometri, material, dan animasi ke dalam aplikasi.
- **PBR**: material berbasis fisika agar objek terlihat lebih realistis.
- **HDR**: lingkungan pencahayaan yang membantu material dan refleksi terlihat lebih natural.
- **Raycasting**: mekanisme untuk mendeteksi objek yang ditunjuk oleh pengguna.
- **Camera Interaction**: kontrol kamera agar pengguna dapat menjelajahi museum.
- **Shadow**: bayangan untuk memperkuat kesan objek berada di ruang 3D.
- **Material Presentation**: penyajian material agar artifact terlihat jelas dan menarik.

Jika kita bayangkan alurnya secara sederhana, prosesnya bergerak dari aset ke interaksi. Pertama, aset museum dan artifact dimuat, misalnya melalui file **GLTF/GLB**. Kedua, objek ditempatkan dalam scene dengan material **PBR** dan pencahayaan **HDR**. Ketiga, pengguna menggerakkan kamera untuk menjelajahi ruang. Keempat, ketika pengguna mengarahkan kursor ke artifact, sistem melakukan **raycasting** untuk menentukan objek mana yang tertunjuk. Kelima, jika artifact dipilih, aplikasi menampilkan informasi dan memperbarui status eksplorasi.

Sebelum lanjut, hal yang perlu dipahami mahasiswa adalah bahwa interaksi 3D pada dasarnya adalah gabungan antara **kamera**, **raycast**, dan **state object**. Kamera menentukan sudut pandang pengguna, raycast menentukan objek mana yang sedang ditunjuk, dan state object menentukan apakah artifact sedang di-hover, dipilih, atau sudah di-inspect. Pemahaman ini penting karena tanpa ketiganya, museum virtual hanya akan menjadi scene 3D statis tanpa pengalaman interaksi yang berarti.

### Inti yang Harus Ditekankan

- **Interactive Museum** adalah bentuk project 3D yang menekankan eksplorasi dan interaksi, bukan hanya visualisasi statis.
- **Raycasting** menjadi konsep penting untuk menghubungkan input pengguna dengan objek 3D yang dapat dipilih.
- **GLTF/GLB**, **PBR**, **HDR**, dan **shadow** digunakan bersama agar artifact dan ruang museum terlihat realistis serta mudah dipresentasikan.
- **Exhibition completion** menunjukkan bahwa interaksi memiliki tujuan dan progres yang dapat diukur.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana aplikasi 3D dapat dibangun sebagai pengalaman interaktif berbasis museum, kita akan masuk ke bentuk project yang lebih dinamis, yaitu **Robot Swarm Factory**, di mana fokusnya bergeser ke swarm robot, material metalik, dan visualisasi crowd dalam konteks mini game 3D.

---

## Slide 037 - Topik 4 — Robot Swarm Factory

### Narasi

Pada topik keempat, kita masuk ke studi kasus yang lebih dinamis: **Robot Swarm Factory**. Premis utamanya adalah sebuah **swarm robot** yang bergerak melewati **multiplier gate**, **obstacle**, **upgrade**, dan akhirnya mencapai **final battle**. Jadi, berbeda dari museum virtual yang lebih menekankan eksplorasi objek, topik ini menuntut kita membangun pengalaman 3D yang terasa hidup, bergerak, dan memiliki tujuan gameplay.

Dari sisi grafika komputer, topik ini penting karena menguji beberapa kemampuan sekaligus. Kita tidak hanya menampilkan satu objek 3D, tetapi harus mengelola banyak robot yang bergerak dalam satu scene. Kita juga perlu memikirkan bagaimana material, pencahayaan, efek partikel, dan animasi mesin saling mendukung agar scene terlihat meyakinkan. Dengan kata lain, slide ini mengarahkan kita pada integrasi antara **geometri**, **transformasi**, **kamera**, **lighting**, **shader**, dan **rasterisasi** dalam satu aplikasi 3D yang interaktif.

Tujuan gameplaynya adalah **mempertahankan swarm** dan **menghancurkan reactor/boss**. Tujuan ini sangat menentukan kebutuhan visualnya. Swarm harus tetap terbaca meskipun jumlahnya banyak. Gate, obstacle, dan upgrade harus mudah dikenali sebagai elemen gameplay. Sementara itu, reactor atau boss harus terasa menjadi fokus akhir, sehingga secara visual perlu dibuat lebih menonjol, lebih dramatis, atau lebih berbeda dari objek lain di scene.

Fokus grafika pada slide ini dapat kita lihat sebagai beberapa lapisan visual.

- **Metallic PBR**: material robot dibuat seperti logam dengan parameter PBR, sehingga penampilannya bergantung pada pencahayaan dan lingkungan.
- **Emissive Robot**: robot dapat memiliki cahaya sendiri, misalnya pada bagian mata, panel, atau core, agar tetap terlihat jelas di area gelap.
- **HDR Reflection**: lingkungan reflektif membantu material metalik terlihat lebih realistis karena pantulan cahaya dari lingkungan ikut memengaruhi tampilan objek.
- **Crowd Visualization**: banyak robot harus ditampilkan sedemikian rupa agar scene tidak kacau dan pemain tetap bisa memahami posisi swarm.
- **Particles**: efek partikel dapat digunakan untuk percikan, asap, energi, atau efek serangan, sehingga scene terasa lebih hidup.
- **Animated Machinery**: mesin pabrik yang bergerak membantu membangun suasana factory dan menunjukkan bahwa scene tidak statis.

Kita bisa membaca fokus tersebut sebagai alur visual yang bertahap. Pertama, kita menyiapkan material dasar robot dengan **Metallic PBR**. Kedua, kita menambahkan karakter visual melalui **emissive** dan **HDR reflection**. Ketiga, kita menangani masalah visualisasi banyak objek melalui **crowd visualization**. Keempat, kita memperkuat kesan dinamis dengan **particles** dan **animated machinery**. Dengan cara ini, mahasiswa tidak perlu langsung memikirkan seluruh detail teknis, tetapi cukup memahami bahwa setiap elemen visual memiliki peran dalam membangun pengalaman game 3D.

Hal yang perlu dipahami sebelum lanjut adalah bahwa elemen-elemen ini tidak berdiri sendiri. Material metalik akan terlihat berbeda tergantung pencahayaan. Emissive membantu objek tetap terbaca, tetapi tidak menggantikan pencahayaan utama. Partikel dan animasi mesin harus tetap mendukung gameplay, bukan hanya menambah efek tanpa arah. Jadi, inti dari topik ini adalah membangun scene 3D yang dinamis, terbaca, dan memiliki tujuan visual yang jelas.

### Inti yang Harus Ditekankan

- **Robot Swarm Factory** adalah **Mini Game 3D** yang menekankan visualisasi banyak robot, material metalik, dan efek dinamis.
- Fokus grafika utamanya adalah **Metallic PBR**, **Emissive Robot**, **HDR Reflection**, **Crowd Visualization**, **Particles`, dan **Animated Machinery**.
- Tujuan gameplay, yaitu mempertahankan swarm dan menghancurkan reactor/boss, menentukan kebutuhan visual scene.
- Material, pencahayaan, partikel, dan animasi harus dipahami sebagai bagian dari satu sistem rendering, bukan sekadar efek terpisah.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana scene factory dan swarm robot dapat dibangun secara visual, topik berikutnya akan bergeser ke **Escape Room 3D**, di mana fokusnya lebih pada interaksi puzzle, raycasting, dan hubungan transformasi parent-child dalam scene graph.

---

## Slide 038 - Topik 5 — Escape Room 3D

### Narasi

Pada topik ini, kita melihat **Escape Room 3D** sebagai project interaktif yang menempatkan pemain dalam ruang tertutup. Pemain tidak hanya bergerak, tetapi juga **mencari clue** dan **menyelesaikan puzzle** untuk membuka jalan keluar.

Slide ini menampilkan **jenis project** sebagai `Mini Game / Interactive Puzzle Game`. Artinya, tujuan utamanya bukan sekadar menampilkan objek 3D, tetapi membuat objek dapat **dipilih**, **dipakai**, atau **mengubah state adegan**. **Tujuan gameplay** yang tertulis adalah **menyelesaikan puzzle** dan **membuka jalan keluar**.

Bagian **fokus grafika** pada slide dapat dibaca sebagai komponen teknis yang mendukung pengalaman tersebut:

- **Raycasting**: teknik untuk memeriksa apakah garis pandang dari kamera atau pointer berpotongan dengan objek. Komponen ini penting untuk interaksi seperti memilih clue, menunjuk pintu, atau memicu aksi.
- **Scene Graph**: struktur hierarki yang menyimpan hubungan antarobjek dalam adegan. Dengan scene graph, kita bisa mengatur ruang, kamera, objek puzzle, dan elemen lingkungan secara konsisten.
- **Parent-Child Transform**: hubungan transformasi antarobjek, misalnya pintu sebagai child dari frame pintu. Jika parent berputar atau bergerak, child ikut menyesuaikan posisi dan orientasinya.
- **Animation**: perubahan transformasi atau properti objek seiring waktu, seperti pintu yang terbuka, clue yang muncul, atau objek puzzle yang berpindah.
- **Lighting** dan **Shadow**: pencahayaan dan bayangan untuk membentuk kedalaman ruang, mengarahkan perhatian pemain, dan membuat adegan terasa lebih nyata.
- **GLB**: format file 3D yang dapat membawa geometri, material, tekstur, dan animasi ke dalam aplikasi, sehingga asset lebih mudah dipindahkan dan digunakan.

Secara pipeline, alurnya dapat dipahami sebagai berikut: asset `GLB` dimuat ke dalam **scene graph**, setiap objek memiliki transformasi lokal dan global, kamera menentukan apa yang terlihat, **raycasting** membantu interaksi, lalu **lighting** dan **shadow** membentuk tampilan akhir sebelum hasil rasterisasi ditampilkan.

Yang perlu dipahami mahasiswa sebelum lanjut adalah bahwa **Escape Room 3D** bukan sekadar menampilkan ruangan 3D. Mahasiswa perlu memahami bagaimana objek saling berhubungan, bagaimana transformasi parent-child bekerja, dan bagaimana interaksi berbasis raycast mengubah state adegan.

### Inti yang Harus Ditekankan

- **Escape Room 3D** adalah project interaktif yang menekankan **puzzle**, **clue**, dan **interaksi objek**.
- **Raycasting** penting untuk memilih atau memicu objek dari sudut pandang kamera/pointer.
- **Scene Graph** dan **Parent-Child Transform** menentukan hubungan spasial antarobjek, seperti pintu, engsel, lemari, atau clue.
- **Lighting**, **Shadow**, dan **Animation** membuat adegan terasa hidup dan membantu pemain memahami ruang.
- **GLB** adalah format asset 3D yang mendukung pemindahan geometri, material, dan animasi ke aplikasi.

### Transisi ke Slide Berikutnya

Setelah memahami project berbasis puzzle dan interaksi objek, kita lanjut ke **Topik 6 — Space Fleet Multiplier**, yang akan lebih menekankan visual ruang angkasa, armada, efek laser, dan pertempuran melawan mothership.

---

## Slide 039 - Topik 6 — Space Fleet Multiplier

### Narasi

Topik 6 ini membawa kita ke proyek mini game 3D yang lebih menekankan visual atmosfer dan efek real-time. Dalam **Space Fleet Multiplier**, pemain tidak hanya bergerak di ruang kosong, tetapi mengelola armada spaceship yang melewati gate, asteroid, turret, lalu melawan mothership. Dari sisi gameplay, tujuannya adalah mempertahankan fleet dan mengalahkan mothership. Namun dari sisi grafika komputer, proyek ini penting karena menuntut kita menggabungkan beberapa elemen visual yang biasanya muncul dalam rendering real-time: latar ruang angkasa, material metalik, cahaya dari mesin, efek laser, ledakan, dan animasi.

Proyek ini diklasifikasikan sebagai:

```text
Mini Game 3D
```

Fokus grafika yang perlu kita perhatikan adalah:

```text
HDR Space
Metallic PBR
Emissive Engine
Laser VFX
Explosion
Animated Effects
```

Kita bisa membayangkan alur visualnya seperti ini: scene dimulai dengan latar **HDR Space** yang memberi pencahayaan lingkungan dan refleksi realistis. Spaceship menggunakan material **Metallic PBR** sehingga permukaannya tampak seperti logam yang memantulkan cahaya sesuai sifat materialnya. Bagian mesin dapat diberi **Emissive Engine** agar terlihat menyala tanpa bergantung sepenuhnya pada lampu scene. Saat gameplay berlangsung, **Laser VFX** dan **Explosion** menjadi elemen dinamis yang harus dirender cepat, sementara **Animated Effects** menjaga pergerakan gate, asteroid, turret, atau mothership tetap hidup.

Dalam konteks rendering pipeline, fokus proyek ini berada pada tahap material, lighting, dan efek visual. Kita tidak hanya memodelkan geometri, tetapi juga menentukan bagaimana objek terlihat: apakah metalik, bercahaya, transparan, atau menghasilkan partikel. Karena targetnya mini game 3D, mahasiswa perlu memperhatikan keseimbangan antara kualitas visual dan performa. Artinya, efek seperti laser dan ledakan harus cukup meyakinkan, tetapi tetap dapat berjalan real-time pada perangkat target.

Sebelum lanjut, hal penting yang perlu dipahami adalah bahwa proyek ini bukan sekadar membuat objek bergerak. Ia menuntut kita berpikir seperti pipeline: scene graph untuk mengatur armada dan objek, material PBR untuk tampilan permukaan, HDR untuk pencahayaan lingkungan, emissive untuk sumber cahaya buatan, dan efek animasi untuk dinamika gameplay. Dengan memahami hal ini, mahasiswa dapat menilai mana bagian yang lebih ke geometri, mana yang lebih ke shading, dan mana yang lebih ke animasi atau VFX.

### Inti yang Harus Ditekankan

- Proyek ini menekankan **visual real-time** melalui kombinasi **HDR Space**, **Metallic PBR**, **Emissive Engine**, **Laser VFX**, **Explosion**, dan **Animated Effects**.
- Tujuan gameplay adalah mempertahankan fleet dan mengalahkan mothership, tetapi fokus utama grafika komputer ada pada **material**, **lighting**, dan **efek visual**.
- Mahasiswa perlu memahami bahwa proyek ini melibatkan beberapa tahap rendering pipeline, terutama **scene graph**, **material shading**, **environment lighting**, dan **animation/VFX**, dengan tetap memperhatikan performa real-time.

### Transisi ke Slide Berikutnya

Setelah melihat proyek yang lebih banyak menuntut efek, material, dan atmosfer visual, topik berikutnya akan bergeser ke aplikasi interaktif yang lebih terstruktur: **Product Configurator 3D**, di mana pengguna memilih komponen produk dan mengganti warna, material, atau bagian tertentu.

---

## Slide 040 - Topik 7 — Product Configurator 3D

### Narasi

Topik ketujuh ini mengarahkan project UTS ke bentuk **Product Configurator 3D**. Berbeda dari mini game, fokusnya bukan skor atau musuh, melainkan interaksi pengguna dengan objek produk. Pengguna dapat memilih bagian produk, mengganti warna, material, atau komponen, lalu melihat perubahan secara langsung pada model 3D.

Dalam konteks grafika komputer, project ini penting karena memperlihatkan bagaimana **material**, **pencahayaan**, dan **interaksi** bekerja bersama dalam satu pengalaman visual. Model produk tidak hanya ditampilkan, tetapi harus terasa realistis dan dapat dieksplorasi. Mahasiswa perlu memahami bahwa perubahan warna atau material bukan sekadar mengganti properti visual, tetapi memengaruhi cara cahaya dipantulkan oleh permukaan objek.

Fokus utama pada slide ini adalah **PBR**, yaitu **Physically Based Rendering**. Dalam PBR, permukaan objek didefinisikan dengan parameter seperti **Roughness** dan **Metalness**. `Roughness` menentukan seberapa kasar atau halus permukaan, sehingga memengaruhi sebaran pantulan cahaya. `Metalness` menentukan seberapa kuat permukaan berperilaku seperti logam. Kedua parameter ini penting agar produk terlihat meyakinkan, misalnya bodi halus, plastik, logam, atau cat glossy.

Selain material, slide juga menyoroti **HDR** dan **Reflection**. Lingkungan HDR memberi sumber pencahayaan yang lebih kaya, sehingga refleksi pada permukaan produk lebih natural. Refleksi membantu pengguna menilai bentuk, material, dan kualitas visual produk. Dalam pipeline rendering, komponen ini berada pada tahap shading dan material evaluation, di mana cahaya, kamera, dan properti material digabungkan untuk menghasilkan warna akhir piksel.

Interaksi pada project ini didukung oleh **Raycasting** dan **Camera Control**. `Raycasting` digunakan untuk mendeteksi bagian produk yang diklik atau diarahkan kursor, sehingga pengguna dapat memilih komponen tertentu. `Camera Control` memungkinkan pengguna memutar, memperbesar, atau menggeser pandangan untuk memeriksa produk dari berbagai sudut. Dengan kombinasi keduanya, konfigurasi produk menjadi lebih intuitif.

Tujuan interaction pada slide ini adalah menghasilkan **konfigurasi produk** yang dipilih pengguna dan menyelesaikan **configuration flow**. Artinya, project tidak cukup hanya menampilkan model 3D, tetapi harus memiliki alur interaksi yang jelas: pengguna memilih bagian, mengubah opsi, melihat hasil, lalu menyelesaikan konfigurasi. Mahasiswa perlu memastikan bahwa setiap perubahan visual dapat dipicu oleh interaksi dan menghasilkan state konfigurasi yang konsisten.

Sebelum lanjut, hal penting yang harus dipahami adalah hubungan antara **material PBR**, **lingkungan HDR**, **deteksi interaksi**, dan **kontrol kamera**. Keempat hal ini menentukan apakah product configurator terasa seperti aplikasi 3D yang fungsional, bukan sekadar model yang berputar.

### Inti yang Harus Ditekankan

- **Product Configurator 3D** adalah interactive 3D application/experience, bukan mini game; fokusnya adalah pemilihan bagian produk dan perubahan visual.
- **PBR** dengan `Roughness` dan `Metalness` menjadi inti untuk membuat material produk terlihat realistis dan konsisten secara visual.
- **HDR** dan **Reflection** penting untuk pencahayaan serta pantulan yang natural pada permukaan produk.
- **Raycasting** digunakan untuk memilih bagian produk, sedangkan **Camera Control** digunakan untuk mengeksplorasi model dari berbagai sudut.
- Tujuan akhir adalah menghasilkan **konfigurasi produk** yang dipilih pengguna dan menyelesaikan **configuration flow** secara jelas.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana produk dapat dikonfigurasi secara interaktif, topik berikutnya akan kembali ke bentuk mini game 3D dengan fokus pada visualisasi clone, animasi karakter, dan efek gameplay.

---

## Slide 041 - Topik 8 — Ninja Clone Rush

### Narasi

Ninja Clone Rush adalah contoh **Mini Game 3D** yang menempatkan mekanisme visual di pusat gameplay. Alur utamanya sederhana: ninja melewati **gate**, menghasilkan **clone**, lalu clone tersebut menghadapi **enemy** dan **boss**. Secara visual, alur ini dapat dibaca sebagai:

`Ninja → Gate → Clone → Enemy/Boss`

Poin pentingnya bukan hanya ada model 3D, tetapi setiap elemen visual harus memberi informasi. Gate harus terlihat sebagai titik interaksi, clone harus terbaca sebagai entitas yang baru muncul, slash harus terasa sebagai aksi, dan shadow harus membantu pemain memahami posisi karakter di ruang.

Dari sisi grafika komputer, project ini menyentuh beberapa bagian pipeline rendering secara praktis. Model **Animated GLB** dimuat sebagai aset geometri dan animasi. Saat animasi diputar, transformasi karakter berubah setiap `frame`, kemudian pipeline GPU mengubah koordinat model ke ruang kamera, melakukan rasterisasi, dan menghitung warna pada `fragment`. Untuk gate, material **Emissive** membuat objek tampak menyala tanpa harus bergantung penuh pada cahaya lingkungan.

Fokus grafika pada slide ini bisa dibaca sebagai beberapa kelompok:

- **Clone Visualization** dan **Character Animation**: menampilkan keberadaan clone serta perilaku karakter sesuai `state` gameplay, misalnya idle, bergerak, menyerang, atau kalah.
- **Animated GLB**: menyediakan model karakter yang sudah memiliki animasi, sehingga visual tidak hanya berupa mesh statis.
- **Emissive Gate**, **Slash VFX**, dan **Trail Effect**: memberi sinyal interaksi dan feedback aksi, seperti gate yang menyala, efek serangan, dan jejak gerakan.
- **Shadow**: membantu grounding karakter, memperkuat kedalaman ruang, dan membuat posisi clone, enemy, atau boss lebih mudah dibaca.

Hal yang perlu dipahami sebelum lanjut adalah bahwa visual dalam mini game 3D harus melayani dua tujuan sekaligus: estetika dan komunikasi gameplay. Jika clone terlalu samar, pemain tidak tahu berapa banyak clone yang aktif. Jika gate tidak cukup menonjol, pemain mungkin tidak memahami cara memulai mekanisme. Jika slash dan trail terlalu berlebihan, layar bisa menjadi bising dan sulit dibaca.

Karena itu, dalam project ini kita tidak hanya bertanya “apakah objeknya muncul?”, tetapi juga “apakah pemain dapat membaca keadaan game dari visual?”. Kekuatan clone, posisi gate, momen serangan, dan kehadiran boss harus bisa terbaca secara cepat.

### Inti yang Harus Ditekankan

- **Ninja Clone Rush** adalah **Mini Game 3D** dengan tujuan gameplay: membangun clone yang cukup kuat dan mengalahkan **boss**.
- **Clone Visualization** penting karena clone adalah representasi visual dari kekuatan pemain.
- **Emissive Gate**, **Slash VFX**, dan **Trail Effect** berfungsi sebagai feedback visual untuk interaksi dan aksi.
- **Animated GLB** dan **Character Animation** memastikan karakter bergerak sesuai `state` gameplay.
- **Shadow** membantu kedalaman dan keterbacaan posisi, tetapi juga memengaruhi performa rendering.

### Transisi ke Slide Berikutnya

Setelah melihat project yang menekankan aksi, clone, dan feedback serangan, topik berikutnya akan bergeser ke suasana yang lebih atmosferik. Pada **Interactive Haunted House**, fokusnya bukan lagi membangun kekuatan clone, tetapi menciptakan ruang gelap, eksplorasi, dan event interaktif yang mengandalkan lighting, shadow, fog, dan emissive.

---

## Slide 042 - Topik 9 — Interactive Haunted House

### Narasi

Dalam rangkaian UTS Three.js Interactive 3D Project, topik kesembilan adalah **Interactive Haunted House**. Project ini menempatkan mahasiswa pada sebuah rumah gelap yang memiliki pintu, objek, pencahayaan, dan event horror yang dapat dipicu melalui interaksi. Berbeda dari project sebelumnya yang lebih menekankan aksi dan karakter, project ini menuntut mahasiswa untuk membangun suasana melalui **Atmospheric Lighting**, **Shadow**, **Fog**, dan material **Emissive**.

Inti dari project ini bukan sekadar menampilkan rumah 3D, tetapi membuat pemain merasakan ruang yang tidak aman. Dalam grafika komputer, hal ini dicapai dengan mengatur kamera, pencahayaan, material, dan event interaktif secara konsisten. **Atmospheric Lighting** menentukan bagaimana cahaya jatuh pada dinding, lantai, dan objek. **Shadow** membantu memperjelas bentuk dan kedalaman, terutama ketika cahaya terbatas. **Fog** mengurangi visibilitas jarak jauh sehingga ruang terasa lebih sempit, misterius, dan menekan.

Kita juga perlu memperhatikan **Emissive** dan **Animated Light**. Material `emissive` membuat objek tampak memancarkan cahaya sendiri, misalnya jendela, lampu, atau artefak horror. `Animated Light` dapat bergerak, berkedip, atau berubah intensitas untuk memicu ketegangan. Kedua elemen ini penting karena dalam scene gelap, cahaya menjadi bahasa utama yang mengarahkan perhatian pemain.

Project ini dapat dipilih menjadi **experience eksplorasi tanpa lose state** atau **game dengan objective escape/survival**. Jika dipilih sebagai experience, fokusnya adalah atmosfer, eksplorasi, dan interaksi objek. Jika dipilih sebagai mini game, mahasiswa perlu menambahkan tujuan, kondisi menang/kalah, atau timer, tetapi tetap menjaga agar grafika dan suasana menjadi bagian utama gameplay.

Untuk implementasi, mahasiswa dapat menggunakan model **GLB** untuk rumah, furnitur, pintu, atau objek horror. `GLB` membantu membawa geometri, material, dan animasi ke dalam scene Three.js. Setelah itu, mahasiswa perlu menyusun pipeline rendering: memuat scene, menempatkan kamera, menambahkan light, mengaktifkan shadow, mengatur fog, lalu menghubungkan interaksi pengguna dengan event seperti membuka pintu, menyalakan lampu, atau memicu **Horror VFX**.

Sebelum lanjut, hal yang harus dipahami adalah bahwa project ini menguji kemampuan mahasiswa dalam membangun mood, bukan hanya menempatkan objek 3D. Mahasiswa perlu memahami bagaimana cahaya, bayangan, kabut, material, dan animasi bekerja bersama dalam satu scene interaktif.

### Inti yang Harus Ditekankan

- **Interactive Haunted House** adalah project berbasis suasana, di mana **Atmospheric Lighting**, **Shadow**, **Fog**, dan **Emissive** menjadi elemen utama.
- Project dapat dikembangkan sebagai **experience eksplorasi** atau **mini game exploration** dengan objective escape/survival.
- Model **GLB**, **Animated Light**, dan **Horror VFX** digunakan untuk memperkuat interaksi, animasi, dan efek visual.
- Mahasiswa perlu memahami hubungan antara kamera, pencahayaan, material, dan event interaktif dalam rendering pipeline.

### Transisi ke Slide Berikutnya

Setelah membangun suasana gelap yang imersif, topik berikutnya akan beralih ke **Meteor Defense**, di mana fokus grafika bergeser ke **Raycasting**, **Explosion Particles**, **Emissive Projectile**, dan **Dynamic Lighting** dalam scene luar angkasa.

---

## Slide 043 - Topik 10 — Meteor Defense

### Narasi

Topik ke-10 membawa kita ke skenario **Meteor Defense**, yaitu mini game 3D di mana pemain mempertahankan **planet** atau **station** dari meteor yang datang. Posisi pemain di sini bukan sekadar pengamat, tetapi pengendali pertahanan: ia harus membaca arah ancaman, memilih waktu menembak, dan menjaga agar station tidak hancur sebelum seluruh wave selesai.

Topik ini diklasifikasikan sebagai:

```text
Mini Game 3D
```

Artinya, fokus utamanya adalah interaksi real-time dalam ruang 3D. Pemain tidak hanya melihat scene, tetapi harus bereaksi terhadap objek yang bergerak, memilih target, dan menerima umpan balik visual dari setiap aksi.

Tujuan gameplay yang diberikan cukup jelas: **bertahan sampai seluruh wave selesai sebelum station hancur**. Dari sini, kita bisa memahami bahwa desain visual harus mendukung keterbacaan keadaan permainan. Pemain perlu mudah melihat meteor yang mendekat, proyektil yang ditembakkan, hasil ledakan, serta kondisi station yang masih bertahan atau mulai rusak.

Fokus grafika yang diminta adalah:

```text
Raycasting
Explosion Particles
Emissive Projectile
HDR Space
Dynamic Lighting
VFX
```

Dari daftar tersebut, konsep yang paling menentukan interaksi adalah **`raycasting`**. Dalam konteks mini game 3D, `raycasting` biasanya digunakan untuk melacak garis tembak atau deteksi tabrakan antara proyektil dan meteor. Secara intuitif, kita bisa membayangkannya sebagai garis lurus yang dilepaskan dari sumber tembakan menuju arah tertentu. Jika garis itu memotong objek meteor, maka sistem dapat menentukan bahwa tembakan berhasil. Konsep ini penting karena menghubungkan input pemain dengan respons dunia 3D secara real-time.

Selain `raycasting`, topik ini juga menekankan **`Explosion Particles`** dan **`VFX`**. Ketika meteor hancur, visual tidak cukup hanya menghapus objek dari scene. Partikel ledakan memberi kesan energi, panas, dan dampak. Dalam pipeline rendering, partikel biasanya dirender sebagai banyak objek kecil atau sprite yang memiliki posisi, kecepatan, umur, dan ukuran. Tujuannya adalah memperkuat feedback: pemain melihat bahwa tembakan benar-benar menghasilkan konsekuensi.

Fokus berikutnya adalah **`Emissive Projectile`** dan **`Dynamic Lighting`**. Proyektil yang **emissive** berarti objek tersebut memancarkan cahaya sendiri, sehingga terlihat menyala meskipun lingkungan sekitar gelap. Ini sangat cocok untuk tema luar angkasa. Sementara itu, **`dynamic lighting`** memungkinkan cahaya berubah dari frame ke frame, misalnya ketika ledakan terjadi atau proyektil bergerak. Kombinasi keduanya membuat scene terasa hidup dan membantu pemain membaca posisi objek penting di tengah ruang 3D.

Terakhir, **`HDR Space`** menjadi latar visual yang mendukung atmosfer. HDR memberi rentang cahaya yang lebih luas, sehingga area terang dan gelap dapat terlihat lebih natural. Dalam tema pertahanan planet atau station, latar luar angkasa yang kontras membantu meteor dan proyektil menonjol. Secara keseluruhan, topik ini menuntut mahasiswa memahami bagaimana interaksi, lighting, partikel, dan efek visual bekerja bersama dalam satu scene real-time.

### Inti yang Harus Ditekankan

- **Meteor Defense** adalah **Mini Game 3D** dengan tujuan bertahan sampai seluruh wave selesai sebelum station hancur.
- **`Raycasting`** menjadi inti interaksi untuk deteksi tembakan atau tabrakan antara proyektil dan meteor.
- **`Explosion Particles`**, **`Emissive Projectile`**, **`Dynamic Lighting`**, **`HDR Space`**, dan **`VFX`** digunakan untuk memperkuat feedback visual dan atmosfer.
- Mahasiswa perlu memahami hubungan antara input pemain, deteksi 3D, lighting, dan efek partikel dalam satu scene real-time.

### Transisi ke Slide Berikutnya

Setelah kita melihat contoh topik ke-10, langkah berikutnya adalah memilih salah satu dari sepuluh topik. Pada slide berikutnya, kita akan membahas aturan pemilihan topik, termasuk bagian mana yang boleh dimodifikasi dan bagian mana yang harus tetap mempertahankan karakter serta fokus grafika masing-masing topik.

---

## Slide 044 - Pemilihan Topik

### Narasi

Kita sudah melihat salah satu contoh topik, yaitu **Meteor Defense**. Pada tahap ini, setiap kelompok perlu mengambil keputusan awal yang menentukan arah proyek UTS:

```text
Pilih 1 dari 10 topik
```

Artinya, kelompok tidak perlu membuat topik baru dari nol. Kesepuluh topik yang sudah diberikan sudah memuat **jenis project**, **gameplay atau interaksi**, dan **fokus grafika** yang ingin dilatih. Tugas kelompok adalah memilih satu topik yang paling sesuai dengan minat, kemampuan, dan rencana kerja tim.

Setelah topik dipilih, kelompok tetap diberi ruang kreatif. Beberapa hal boleh diubah, antara lain:

- nama game,
- theme,
- asset,
- visual direction,
- detail mechanic.

Misalnya, jika kelompok memilih topik yang berfokus pada efek visual tertentu, nama game dan latar ceritanya boleh disesuaikan. Namun, fokus grafika yang menjadi ciri topik tersebut tetap harus terlihat jelas dalam hasil akhir.

Yang perlu diperhatikan adalah batas kreatifnya. Kita boleh mengubah tampilan dan detail mekanik, tetapi **karakter utama topik** dan **fokus grafika** harus tetap terlihat. Dengan kata lain, jika topik menuntut penggunaan elemen tertentu seperti partikel, lighting, efek visual, atau interaksi 3D, maka aspek tersebut tidak boleh hilang hanya karena tema diganti.

Keputusan ini penting karena akan memengaruhi seluruh tahap berikutnya: pemilihan asset, desain interaksi, implementasi visual, hingga evaluasi hasil rendering. Jadi, sebelum lanjut ke alur gameplay, pastikan kelompok sudah sepakat pada satu topik dan memahami fokus grafika yang harus dipertahankan.

### Inti yang Harus Ditekankan

- Setiap kelompok wajib memilih **1 dari 10 topik** yang tersedia.
- Kelompok boleh mengubah **nama game**, **theme**, **asset**, **visual direction**, dan **detail mechanic**.
- **Karakter utama topik** dan **fokus grafika** harus tetap terlihat pada hasil akhir.
- Pilihan topik akan menentukan arah desain, implementasi, dan evaluasi proyek UTS.

### Transisi ke Slide Berikutnya

Setelah topik dipilih, langkah berikutnya adalah merancang alur interaksi atau gameplay. Pada slide berikutnya, kita akan melihat bentuk diagram alur yang wajib dibuat sesuai jenis project, baik **Mini Game** maupun **Interactive Application**.

---

## Slide 045 - Interaction / Gameplay Flow

### Narasi

Setelah kelompok memilih topik, langkah berikutnya adalah menentukan **Interaction / Gameplay Flow**. Diagram alur ini berfungsi sebagai peta kerja: sebelum masuk ke detail kode, kita perlu tahu bagaimana pengguna memulai, berinteraksi, menerima umpan balik, dan mencapai kondisi akhir.

Untuk **Mini Game**, alurnya dibaca dari atas ke bawah:

```text
START
 ↓
PLAYER ACTION
 ↓
CHALLENGE
 ↓
VISUAL FEEDBACK
 ↓
PROGRESS
 ↓
WIN / LOSE
```

Artinya:

1. `START`: scene awal sudah siap ditampilkan.
2. `PLAYER ACTION`: pengguna memberikan input, misalnya gerak, klik, atau perintah.
3. `CHALLENGE`: aturan permainan menentukan apa yang harus dilakukan pemain.
4. `VISUAL FEEDBACK`: scene memberikan respons yang terlihat, misalnya perubahan posisi, warna, animasi, atau tampilan skor.
5. `PROGRESS`: kondisi permainan bergerak menuju tahap berikutnya.
6. `WIN / LOSE`: permainan berakhir berdasarkan kondisi yang sudah ditentukan.

Untuk **Interactive Application**, alurnya sedikit berbeda:

```text
START
 ↓
EXPLORE / SELECT
 ↓
INTERACTION
 ↓
VISUAL FEEDBACK
 ↓
TASK / CONFIGURATION
 ↓
COMPLETION
```

Di sini fokusnya bukan menang atau kalah, melainkan pengguna dapat **menjelajah**, **memilih**, **menginteraksi**, dan menyelesaikan **tugas** atau **konfigurasi** tertentu.

Perbedaan utama antara kedua jenis project adalah tujuan akhir alurnya. **Mini Game** diarahkan pada tantangan dan hasil menang/kalah, sedangkan **Interactive Application** diarahkan pada eksplorasi, pengaturan, atau penyelesaian tugas. Namun keduanya tetap membutuhkan **visual feedback** yang jelas, karena pengguna harus bisa memahami bahwa interaksinya sudah diterima oleh scene.

Dalam konteks grafika komputer, alur ini menjadi penghubung antara **input pengguna** dan **state scene**. Setiap aksi pengguna pada akhirnya harus tercermin pada elemen visual, misalnya perubahan posisi objek, perubahan kamera, pencahayaan, material, atau tampilan antarmuka. Dengan diagram alur, mahasiswa dapat memastikan bahwa project tidak hanya memiliki objek 3D, tetapi juga memiliki perilaku yang bisa dipahami dan diuji.

### Inti yang Harus Ditekankan

- Setiap kelompok wajib membuat **diagram alur** sesuai jenis project: **Mini Game** atau **Interactive Application**.
- Alur **Mini Game** berfokus pada `PLAYER ACTION`, `CHALLENGE`, `PROGRESS`, dan kondisi `WIN / LOSE`.
- Alur **Interactive Application** berfokus pada `EXPLORE / SELECT`, `INTERACTION`, `TASK / CONFIGURATION`, dan `COMPLETION`.
- **Visual feedback** adalah bagian penting karena interaksi pengguna harus terlihat pada scene.
- Diagram alur membantu kelompok merancang perilaku project sebelum masuk ke implementasi teknis.

### Transisi ke Slide Berikutnya

Setelah alur interaksi jelas, langkah berikutnya adalah membangun fondasi visual pada **Milestone 1 — Core Scene**, yaitu menyiapkan `camera`, `renderer`, `environment`, `arena/level`, `scene graph`, dan `asset utama` agar scene sudah dapat dilihat dengan baik.

---

## Slide 046 - Milestone 1 — Core Scene

### Narasi

Setelah alur interaksi atau gameplay dipahami, kita masuk ke **Milestone 1 — Core Scene**. Pada tahap ini, fokus utama bukan membuat interaksi, tetapi memastikan bahwa scene 3D sudah berdiri secara visual. Artinya, komponen dasar rendering harus sudah tersedia dan dapat dilihat dengan benar.

Komponen yang perlu diselesaikan pada milestone ini adalah:

- **`camera`** — menentukan sudut pandang, posisi, dan orientasi scene.
- **`renderer`** — menampilkan scene ke layar melalui proses rendering.
- **`environment`** — menyediakan konteks visual seperti latar, pencahayaan, atau suasana.
- **`arena/level`** — menjadi ruang utama tempat project berlangsung.
- **`scene graph`** — mengatur hierarki dan relasi antarobjek dalam scene.
- **`asset utama`** — objek inti yang menjadi fokus project.

Dalam grafika komputer, scene bukan hanya kumpulan objek yang ditampilkan. Scene adalah hasil dari transformasi, koordinat, material, dan struktur hierarki yang diproses oleh rendering pipeline. Karena itu, sebelum kita membahas input, raycasting, atau state permainan, kita perlu memastikan bahwa **`camera`** dan **`renderer`** sudah bekerja dengan baik. Jika kamera salah posisi atau renderer tidak menampilkan scene dengan benar, interaksi yang dibangun nanti akan sulit diuji.

**`scene graph`** memiliki peran penting karena ia menjaga konsistensi spasial antarobjek. Dengan struktur hierarkis, kita dapat memindahkan, memutar, atau menskalakan sebuah grup objek tanpa harus mengatur setiap objek secara terpisah. Ini membuat scene lebih rapi, lebih mudah dikembangkan, dan lebih sesuai dengan cara kerja aplikasi 3D seperti Three.js.

Untuk **`arena/level`** dan **`environment`**, mahasiswa perlu memahami bahwa keduanya membentuk batas visual project. Arena adalah ruang utama yang akan digunakan, sedangkan environment adalah elemen pendukung yang membuat scene terasa utuh. Pada mini game, arena bisa menjadi area tantangan. Pada interactive application, arena bisa menjadi ruang eksplorasi atau area konfigurasi.

Target dari **Milestone 1** adalah: **scene sudah dapat dilihat dengan baik**. Artinya, ketika project dijalankan, kita dapat melihat kamera yang tepat, renderer yang aktif, environment yang mendukung, arena yang jelas, scene graph yang terorganisasi, dan asset utama yang terlihat. Jika target ini tercapai, kita sudah memiliki dasar visual yang kuat untuk melanjutkan ke interaksi dan gameplay.

### Inti yang Harus Ditekankan

- **Milestone 1** berfokus pada fondasi visual: `camera`, `renderer`, `environment`, `arena/level`, `scene graph`, dan `asset utama`.
- Scene harus dapat dirender dan dilihat dengan benar sebelum interaksi, input, atau gameplay dikembangkan.
- **`scene graph`** penting untuk mengatur hierarki dan transformasi objek secara konsisten.
- **`asset utama`** harus sudah terlihat jelas sebagai fokus project, meskipun interaksinya belum selesai.
- Target utama: scene memiliki tampilan yang stabil, rapi, dan siap menjadi dasar untuk **Milestone 2**.

### Transisi ke Slide Berikutnya

Setelah scene inti sudah dapat dilihat dengan baik, langkah berikutnya adalah membangun interaksi atau gameplay utama. Pada **Milestone 2**, kita akan menyelesaikan komponen inti sesuai jenis project, seperti input, mekanik permainan, state, atau alur interaksi.

---

## Slide 047 - Milestone 2 — Core Interaction / Gameplay

### Narasi

Setelah Milestone 1, scene sudah dapat dilihat dengan baik. Pada tahap ini, fokusnya bergeser dari sekadar menampilkan objek menjadi membuat objek tersebut **bisa digunakan**. Artinya, mahasiswa perlu membangun logika inti yang menghubungkan **input pengguna** dengan **perubahan state** dan **perubahan scene**.

Dalam konteks Three.js, alur interaksi biasanya mengikuti pola sederhana: input ditangkap, state diperbarui, lalu objek, kamera, atau parameter scene disesuaikan sebelum frame berikutnya dirender. Pola ini penting karena interaksi yang baik tidak hanya soal objek terlihat, tetapi juga responsif terhadap pengguna.

Untuk **Mini Game**, komponen inti yang harus diselesaikan adalah:

- **input**: cara pengguna memberikan perintah, misalnya melalui pointer, keyboard, atau kontrol lain yang relevan dengan project.
- **gameplay mechanic**: aturan dasar yang membuat permainan bisa dimainkan, misalnya bergerak, mengumpulkan, menghindari, atau menyelesaikan tantangan.
- **challenge**: kondisi yang membuat permainan memiliki tujuan, bukan hanya objek yang bergerak tanpa arah.
- **`game state`**: kondisi permainan saat ini, misalnya sedang berjalan, jeda, menang, atau kalah.
- **`win/lose`**: kondisi akhir yang memberi tahu bahwa permainan telah mencapai hasil yang jelas.

Untuk **Interactive Application**, fokusnya lebih ke alur tugas daripada loop permainan. Komponen intinya adalah:

- **selection**: pengguna dapat memilih objek atau elemen tertentu di scene.
- **`raycasting`**: teknik untuk memetakan posisi input, misalnya pointer, ke objek 3D yang tepat.
- **interaction flow**: alur interaksi yang jelas, mulai dari memilih, mengatur, hingga menyelesaikan tugas.
- **`task/configuration state`**: kondisi tugas atau konfigurasi yang sedang berjalan, misalnya objek sedang dipilih, parameter sedang diubah, atau proses sedang berlangsung.
- **`completion state`**: kondisi ketika tugas atau konfigurasi telah selesai dan hasilnya dapat dilihat.

Perbedaan konseptual antara keduanya cukup penting. **Mini Game** cenderung memiliki loop permainan yang terus berjalan, sedangkan **Interactive Application** cenderung memiliki alur tugas yang lebih terarah. Namun, keduanya harus memiliki state yang jelas agar perilaku aplikasi tidak ambigu.

Sebelum lanjut, mahasiswa perlu memahami bahwa target milestone ini bukan visual yang sempurna, tetapi **project sudah dapat digunakan sesuai tujuan utamanya**. Jika interaksi inti belum stabil, penambahan visual akan menyulitkan pengujian dan debugging.

### Inti yang Harus Ditekankan

- Milestone 2 berfokus pada **interaksi inti**, bukan kualitas visual akhir.
- **Mini Game** harus memiliki input, gameplay mechanic, challenge, `game state`, dan kondisi `win/lose`.
- **Interactive Application** harus memiliki selection, `raycasting`, interaction flow, `task/configuration state`, dan `completion state`.
- State yang jelas sangat penting agar perilaku project dapat diuji dan dipahami.
- Target utama: project sudah dapat digunakan sesuai tujuan utamanya.

### Transisi ke Slide Berikutnya

Setelah interaksi inti sudah berjalan dan dapat diuji, kita masuk ke Milestone 3 — Visual Integration, di mana scene yang sudah berfungsi akan ditingkatkan dengan PBR, lighting, HDR/environment, shadow, animation, dan VFX.

---

## Slide 048 - Milestone 3 — Visual Integration

### Narasi

Setelah **Milestone 2** selesai, project sudah memiliki interaksi inti: input, mekanik, state, dan alur penggunaan utama. Pada tahap ini, kita tidak lagi hanya memastikan bahwa project “bisa jalan”, tetapi juga memastikan bahwa project terlihat seperti produk visual yang utuh. Dalam grafika komputer, kualitas visual bukan sekadar hiasan; ia membantu mahasiswa pengguna memahami kedalaman, material, fokus, dan umpan balik dari interaksi yang sedang terjadi.

Pada **Milestone 3 — Visual Integration**, kita menambahkan beberapa lapisan visual yang saling melengkapi:

- **PBR** — material dibuat lebih realistis karena responsnya terhadap cahaya mengikuti model fisika sederhana, misalnya melalui `MeshStandardMaterial` atau `MeshPhysicalMaterial`. Parameter seperti `roughness`, `metalness`, `map`, `normalMap`, dan `aoMap` membantu permukaan terlihat lebih meyakinkan.
- **Lighting** — pencahayaan menentukan suasana, kedalaman, dan keterbacaan objek. Kita bisa menggunakan `DirectionalLight`, `PointLight`, atau `SpotLight` sesuai kebutuhan scene. Cahaya yang baik membuat objek tidak terlihat datar dan membantu pengguna membedakan elemen penting.
- **HDR/environment** — lingkungan visual memberi kontribusi pada refleksi dan pencahayaan ambient. Dalam Three.js, ini biasanya terhubung dengan `scene.environment` dan tekstur HDR yang diproses menjadi environment map. Hasilnya, material metalik atau glossy terlihat lebih konsisten dan tidak “terang sendiri” tanpa konteks lingkungan.
- **Shadow** — bayangan membantu objek terasa menempel pada dunia. Kita dapat mengaktifkan `castShadow` pada objek, `receiveShadow` pada permukaan, dan `shadowMap` pada renderer. Bayangan juga memperkuat kesan jarak dan posisi spasial.
- **Animation** — animasi membuat scene terasa hidup. Entah itu gerakan kamera, objek yang berputar, karakter yang bergerak, atau transisi kecil antar state, animasi membantu pengguna memahami bahwa sistem sedang merespons.
- **VFX** — efek visual seperti partikel, glow, trail, atau efek sederhana lainnya dapat memperkuat momen penting, misalnya saat interaksi berhasil, objek dipilih, atau state berubah.

Dari sisi rendering pipeline, komponen-komponen ini bekerja pada tahap yang berbeda tetapi saling terhubung. Geometri dan transformasi menentukan posisi objek, material menentukan bagaimana permukaan bereaksi terhadap cahaya, lighting dan environment menentukan warna yang masuk ke fragment shader, sedangkan shadow dan VFX menambah lapisan informasi visual di atasnya. Karena itu, visual integration bukan hanya “menambah efek”, tetapi menyelaraskan material, cahaya, lingkungan, dan animasi agar scene terasa koheren.

Target milestone ini adalah **game memiliki kualitas visual yang layak**. Artinya, visual harus cukup jelas untuk mendukung gameplay atau interaksi, cukup konsisten secara pencahayaan, dan tidak membuat scene terlihat kosong, datar, atau tidak meyakinkan. Mahasiswa perlu memastikan bahwa setiap elemen visual yang ditambahkan benar-benar mendukung tujuan project, bukan hanya menambah kompleksitas tanpa manfaat.

### Inti yang Harus Ditekankan

- **Visual integration** adalah tahap di mana project mulai terlihat seperti produk grafika komputer yang utuh, bukan sekadar objek 3D yang bisa dikontrol.
- **PBR, lighting, HDR/environment, dan shadow** bekerja bersama untuk membuat material, kedalaman, dan suasana scene lebih realistis serta mudah dibaca.
- **Animation dan VFX** penting untuk memberikan umpan balik visual dan membuat interaksi terasa hidup.
- Target utama milestone ini adalah **kualitas visual yang layak**, yaitu visual yang mendukung gameplay, konsisten, dan tetap dapat dipresentasikan.

### Transisi ke Slide Berikutnya

Setelah kualitas visual dasar sudah terintegrasi, langkah berikutnya adalah **polish**. Di tahap itu, kita akan melengkapi project dengan elemen-elemen yang membuatnya lebih rapi dan siap digunakan, seperti HUD, state awal, state selesai, reset, feedback visual, kredit aset, dan pemeriksaan performa.

---

## Slide 049 - Milestone 4 — Polish

### Narasi

Setelah milestone visual integration, scene Three.js kita sudah memiliki kualitas visual yang lebih matang: material PBR, lighting, environment, shadow, animation, dan VFX sudah masuk. Namun pada tahap ini fokusnya bergeser. Kita tidak lagi hanya bertanya, “bagaimana objek terlihat?”, tetapi “bagaimana pengguna mengalami aplikasi ini dari awal sampai akhir?”.

Polish adalah tahap di mana scene yang sudah terlihat baik diubah menjadi produk interaktif yang utuh. Dalam grafika komputer, ini penting karena rendering pipeline tidak cukup hanya menghasilkan frame yang benar secara visual. Frame tersebut juga harus mendukung alur interaksi: kapan pengguna mulai, kapan input diterima, kapan hasil muncul, dan kapan scene kembali ke kondisi awal.

Daftar item pada slide ini dapat dibaca sebagai checklist pengalaman pengguna:

- **HUD / information UI** adalah lapisan informasi yang membantu pengguna memahami status aplikasi, misalnya skor, instruksi, atau status permainan.
- **start state** adalah kondisi awal sebelum interaksi utama dimulai, misalnya layar awal, instruksi singkat, atau tombol mulai.
- **completion atau win/lose state** adalah kondisi akhir yang memberi tahu pengguna bahwa proses sudah selesai, misalnya menang, kalah, atau tugas berhasil.
- **reset/restart** memungkinkan pengguna mengulang scene tanpa harus memuat ulang aplikasi secara penuh.
- **visual feedback** memberi respons visual saat pengguna berinteraksi, misalnya objek berubah warna, muncul highlight, atau ada animasi kecil saat input diterima.
- **asset credit** adalah pencantuman sumber asset eksternal agar penggunaan material, model, texture, atau library tetap transparan.
- **performance check** adalah pengecekan apakah aplikasi tetap berjalan stabil, misalnya frame rate tidak turun drastis, scene tidak berat, dan interaksi tetap responsif.

Secara teknis, tahap ini biasanya melibatkan pengelolaan state aplikasi. Misalnya, scene dapat memiliki state `start`, `playing`, dan `finished`. Pada setiap state, kita bisa menentukan objek mana yang terlihat, input mana yang diterima, dan informasi apa yang ditampilkan di HUD. Dengan cara ini, `renderer`, `scene`, dan `camera` tetap bekerja, tetapi perilaku aplikasi menjadi lebih terstruktur.

Hal yang perlu dipahami mahasiswa sebelum lanjut adalah bahwa polish bukan sekadar menambah efek visual. Polish adalah tahap di mana kualitas visual, interaksi, dan stabilitas aplikasi disatukan. Jika visual sudah bagus tetapi pengguna bingung harus melakukan apa, atau aplikasi terasa lambat setelah banyak efek ditambahkan, maka project belum benar-benar selesai.

### Inti yang Harus Ditekankan

- **Polish** mengubah scene yang sudah layak secara visual menjadi alur interaktif yang utuh.
- State awal, proses, dan akhir harus jelas agar pengguna tahu apa yang harus dilakukan.
- **Visual feedback** dan **performance check** penting agar aplikasi terasa responsif, stabil, dan profesional.

### Transisi ke Slide Berikutnya

Setelah polish selesai, langkah berikutnya adalah menyiapkan deliverable. Di situ kita akan membahas apa saja yang harus dikumpulkan oleh setiap kelompok, mulai dari source code, README, video demo, screenshot, daftar asset, hingga repository atau build bila diminta.

---

## Slide 050 - Deliverable

### Narasi

Setelah kelompok menyelesaikan tahap **Polish**, langkah berikutnya adalah menyiapkan **deliverable** proyek. Deliverable ini penting karena menjadi bukti bahwa proyek **Three.js Interactive 3D** tidak hanya sudah dibuat, tetapi juga dapat dijalankan, didokumentasikan, dan dievaluasi secara jelas. Dengan kata lain, dosen tidak hanya menilai hasil visual atau interaksi, tetapi juga kesiapan teknis dan keterbacaan pekerjaan kelompok.

Setiap kelompok perlu mengumpulkan komponen berikut:

1. **Source code** — kode proyek yang dapat dijalankan, termasuk file utama, konfigurasi, dan dependensi yang diperlukan.
2. **README** — dokumen penjelasan singkat tentang cara menjalankan proyek, fitur utama, kontrol interaksi, dan catatan penting lainnya.
3. **Video demo** — rekaman yang menunjukkan alur penggunaan proyek dari awal hingga akhir.
4. **Screenshot utama** — gambar penting yang mewakili scene, interaksi, fitur grafis, atau state permainan.
5. **Daftar asset eksternal** — daftar model, texture, audio, library, atau sumber lain yang digunakan, beserta kredit atau lisensinya bila relevan.
6. **Repository link** — tautan ke repository jika kelompok menggunakan platform seperti GitHub, GitLab, atau Bitbucket.
7. **Build/deployment** — hasil build atau tautan deployment jika diminta, misalnya halaman web yang dapat diakses langsung.

Hal yang perlu diperhatikan adalah konsistensi antar deliverable. Jika `README` menyebutkan fitur tertentu, fitur tersebut sebaiknya juga terlihat pada video demo atau screenshot. Jika repository digunakan, pastikan link tersebut dapat diakses dan sesuai dengan versi proyek yang dikumpulkan. Untuk proyek berbasis `Three.js`, hal ini membantu evaluator memahami bagaimana scene, kamera, interaksi, dan rendering pipeline yang dibuat oleh kelompok bekerja secara utuh.

Sebelum lanjut, pastikan semua file sudah rapi, nama file jelas, dan tidak ada dependensi yang hilang. Deliverable yang baik membuat proses penilaian lebih cepat dan menunjukkan bahwa kelompok telah menyelesaikan proyek secara profesional.

### Inti yang Harus Ditekankan

- **Deliverable adalah bukti kelengkapan proyek**, bukan sekadar lampiran tambahan.
- **Source code, README, video demo, dan screenshot harus konsisten** satu sama lain.
- **Asset eksternal dan repository** perlu didokumentasikan agar sumber, lisensi, dan versi proyek dapat dilacak.
- **Build/deployment** penting jika diminta karena menunjukkan bahwa proyek dapat diakses atau dijalankan di luar lingkungan lokal.

### Transisi ke Slide Berikutnya

Setelah semua deliverable disiapkan, kita akan masuk ke bagian yang sangat menentukan: bagaimana video demo harus disusun agar alur proyek, interaksi, dan fitur grafis dapat dipahami dengan jelas oleh evaluator.

---

## Slide 051 - Video Demo

### Narasi

Video demo adalah bagian penting dari deliverable karena menjadi bukti bahwa project Three.js yang dibuat kelompok benar-benar dapat dijalankan, bukan hanya berupa source code yang belum teruji. Melalui video, kita bisa melihat bagaimana scene dibangun, bagaimana interaksi bekerja, dan apakah fitur grafika yang diklaim benar-benar muncul di layar.

Alur yang diminta adalah:

```text
Opening
→ Scene
→ Interaction / Gameplay
→ Graphics Features
→ Objective
→ Completion atau Win/Lose
```

Urutan ini penting karena memberi struktur yang mudah diikuti. Secara sederhana, alur tersebut bisa dibaca sebagai berikut:

1. **Opening** menjadi pembuka, misalnya menampilkan judul atau identitas project.
2. **Scene** menunjukkan dunia 3D yang sudah dibangun, termasuk objek, kamera, dan penataan visual.
3. **Interaction / Gameplay** memperlihatkan bahwa pengguna dapat berinteraksi dengan objek atau menjalankan mekanisme permainan.
4. **Graphics Features** menampilkan fitur grafika yang relevan, seperti transformasi, lighting, material, texture, atau efek visual lain yang memang ada di project.
5. **Objective** menjelaskan tujuan yang ingin dicapai pemain atau pengguna.
6. **Completion atau Win/Lose** menunjukkan akhir dari alur permainan atau demonstrasi, sehingga evaluator dapat menilai apakah project memiliki tujuan yang jelas.

Yang perlu diperhatikan adalah video tidak cukup hanya menampilkan satu frame atau beberapa objek diam. Video harus memperlihatkan proses, interaksi, dan hasil akhir. Dengan begitu, reviewer dapat menilai kualitas visual, kelancaran interaksi, dan konsistensi antara apa yang dijelaskan dengan apa yang benar-benar berjalan.

Selain itu, semua anggota harus berkontribusi dalam penjelasan. Artinya, video tidak boleh hanya diisi oleh satu orang yang menjelaskan seluruh project. Setiap anggota sebaiknya memiliki bagian yang dijelaskan, misalnya bagian scene, interaksi, fitur grafika, atau alur permainan. Hal ini penting untuk memastikan bahwa seluruh anggota memahami project yang dibangun, bukan hanya menyerahkan hasil akhir.

### Inti yang Harus Ditekankan

- Video demo adalah bukti bahwa project dapat dijalankan dan fitur grafika benar-benar terlihat.
- Alur video harus runtut: **Opening**, **Scene**, **Interaction / Gameplay**, **Graphics Features**, **Objective**, lalu **Completion atau Win/Lose**.
- Video harus menunjukkan interaksi dan hasil akhir, bukan hanya tampilan statis.
- Semua anggota harus berkontribusi dalam penjelasan agar tanggung jawab dan pemahaman kelompok terlihat jelas.

### Transisi ke Slide Berikutnya

Setelah alur video demo dipahami, langkah berikutnya adalah menyusun **README** yang menjelaskan project secara tertulis, mulai dari nama game, anggota, deskripsi, gameplay, control, hingga cara menjalankan project.

---

## Slide 052 - README

### Narasi

Pada tahap ini, **README** bukan sekadar file teks di repository, tetapi dokumen utama yang menjelaskan proyek Three.js kita secara utuh. Setelah video demo menunjukkan hasil visual, README menjadi rujukan tertulis untuk memahami apa yang dibuat, bagaimana cara menjalankannya, dan siapa saja yang terlibat.

Kita bisa membaca isi minimal README sebagai empat kelompok yang saling melengkapi.

- **Identitas proyek**: `nama game`, `anggota`, dan `deskripsi` membantu pembaca memahami judul, tim, serta konsep dasar permainan.
- **Penggunaan**: `gameplay`, `control`, dan `cara menjalankan` menjelaskan bagaimana game dimainkan dan bagaimana evaluator dapat membuka atau menjalankan proyek.
- **Dokumentasi teknis dan grafis**: `graphics features`, `asset credits`, dan `struktur project` membantu pembaca memahami fitur visual, sumber aset, serta organisasi file atau modul dalam proyek.
- **Akuntabilitas akademik**: `challenge` dan `pembagian kontribusi` menunjukkan hambatan yang dihadapi serta peran masing-masing anggota.

Dalam konteks grafika komputer, README penting karena proyek Three.js tidak hanya dinilai dari tampilan akhir, tetapi juga dari kejelasan proses dan struktur teknisnya. Penilai perlu dapat melihat bahwa proyek memiliki alur yang rapi: dari aset, scene, interaksi, hingga fitur grafis yang digunakan.

README yang baik juga harus konsisten dengan video demo. Jika video menampilkan interaksi, efek visual, atau fitur tertentu, README sebaiknya menyebutkan fitur tersebut secara singkat dan jelas. Dengan begitu, pembaca tidak perlu menebak-nebak apa yang sebenarnya ada dalam proyek.

Sebelum lanjut, hal yang perlu dipahami mahasiswa adalah bahwa README bukan dokumen tambahan yang dibuat di akhir. README sebaiknya ditulis seiring pengembangan proyek, sehingga setiap fitur, aset, dan keputusan teknis dapat didokumentasikan dengan lebih rapi.

### Inti yang Harus Ditekankan

- **README** adalah dokumen utama yang membuat proyek dapat dipahami, dijalankan, dan dinilai.
- Isi minimal harus mencakup identitas proyek, cara menjalankan, fitur grafis, kredit aset, struktur proyek, tantangan, dan pembagian kontribusi.
- README harus konsisten dengan video demo dan menunjukkan bahwa proyek Three.js dikembangkan secara terstruktur.

### Transisi ke Slide Berikutnya

Setelah README menjelaskan apa yang ada dalam proyek, langkah berikutnya adalah memastikan fitur grafika apa yang harus ditunjukkan dan dijelaskan saat demo.

---

## Slide 053 - Fitur Grafika yang Harus Ditunjukkan Saat Demo

### Narasi

Saat demo, kelompok tidak cukup hanya menjalankan aplikasi. Yang perlu ditunjukkan adalah bahwa fitur grafika komputer benar-benar bekerja, dan tim mampu menjelaskan peran masing-masing fitur dalam hasil visual.

Fitur yang harus bisa ditunjukkan adalah:

```text
PBR
Lighting
Shadow
Animation
Raycasting
Environment
VFX
Scene Graph
```

Kita bisa memahaminya sebagai beberapa lapisan dari pipeline rendering. **Scene Graph** adalah struktur organisasi objek dalam scene, misalnya hubungan parent-child yang memengaruhi posisi dan transformasi. **Animation** mengubah transformasi objek dari waktu ke waktu, sehingga scene tidak statis. **Lighting** dan **PBR** menentukan bagaimana permukaan objek berinteraksi dengan cahaya; PBR membuat material tampak lebih realistis karena respons material terhadap cahaya lebih terkontrol. **Shadow** menunjukkan hubungan spasial antara objek, cahaya, dan permukaan, sehingga objek terlihat menempel pada lingkungan.

Untuk interaksi, **Raycasting** menghubungkan input pengguna, misalnya kursor atau sentuhan, dengan objek 3D. Ini penting karena demo tidak hanya visual, tetapi juga menunjukkan bahwa scene dapat dibaca dan dikendalikan. **Environment** memberi konteks ruang, misalnya latar atau lingkungan sekitar objek. **VFX** memperkuat kesan visual, misalnya efek yang membuat aksi atau perubahan scene lebih mudah dibaca.

Yang harus dipahami mahasiswa sebelum lanjut adalah: demo bukan sekadar menampilkan hasil akhir. Kelompok perlu bisa menunjuk bagian tertentu, menjelaskan mengapa fitur itu ada, dan menunjukkan efeknya secara langsung. Misalnya, mengubah cahaya lalu melihat perubahan shadow, atau mengaktifkan raycast lalu menunjuk objek yang terpilih.

### Inti yang Harus Ditekankan

- Demo harus menunjukkan **fitur grafika yang bekerja**, bukan hanya tampilan akhir.
- Setiap fitur perlu dijelaskan perannya: **PBR**, **Lighting**, **Shadow**, **Animation**, **Raycasting**, **Environment**, **VFX**, dan **Scene Graph**.
- Tim harus mampu menghubungkan fitur dengan pipeline rendering: organisasi scene, transformasi, pencahayaan, interaksi, dan hasil visual.

### Transisi ke Slide Berikutnya

Setelah fitur yang harus ditunjukkan jelas, langkah berikutnya adalah memahami bagaimana komponen-komponen itu dinilai. Kita lanjut ke kriteria penilaian, di mana bobot diberikan untuk implementasi grafika, interaksi, kualitas visual, teknis, orisinalitas, dan kemampuan demo tim.

---

## Slide 054 - Kriteria Penilaian

### Narasi

Kita akan melihat bagaimana nilai proyek UTS **Three.js Interactive 3D Project** dihitung. Tabel pada slide ini menunjukkan bahwa penilaian tidak hanya melihat apakah aplikasi berjalan, tetapi juga seberapa baik konsep grafika komputer diimplementasikan, seberapa menarik pengalaman interaktifnya, dan seberapa rapi tim menjelaskan hasilnya.

Komponen dengan bobot terbesar adalah **Implementasi Grafika Komputer**, yaitu **30%**. Artinya, aspek ini menjadi fondasi utama penilaian. Mahasiswa perlu memastikan bahwa elemen inti seperti `scene graph`, transformasi, material **PBR**, `lighting`, `shadow`, model `GLB`, `animation`, `raycasting`, dan `environment` benar-benar hadir dan dapat dijelaskan kaitannya dengan rendering pipeline.

Selanjutnya, **Interaction / Gameplay / Experience** dan **Visual Quality & VFX** masing-masing bernilai **20%**. Keduanya penting karena proyek ini bersifat interaktif dan visual. Interaksi yang baik membuat pengguna merasa terlibat, misalnya melalui `raycasting`, kontrol kamera, atau feedback dari objek. Sementara itu, kualitas visual menentukan apakah hasil rendering terlihat konsisten, enak dipandang, dan mendukung tema proyek.

**Technical Implementation** diberi bobot **15%**. Komponen ini menilai cara kerja di balik layar: struktur kode, penggunaan API `Three.js`, pengelolaan asset, performa, dan kestabilan aplikasi. Proyek yang menarik tetapi sulit dipelihara atau berjalan tidak optimal akan kehilangan nilai pada aspek ini.

**Originality & Integration** bernilai **10%**, sedangkan **Demo & Pemahaman Tim** bernilai **5%**. Bobot terakhir memang kecil, tetapi tetap penting karena menunjukkan apakah tim benar-benar memahami apa yang mereka bangun. Saat demo, mahasiswa tidak hanya menampilkan fitur, tetapi juga menjelaskan alasan teknis di balik pilihan implementasi.

Secara keseluruhan, tabel ini memberi pesan yang jelas: mahasiswa harus membangun fondasi grafika yang kuat terlebih dahulu, lalu memperkuat interaksi, visual, dan kualitas teknis, serta menutupnya dengan demo yang komunikatif.

### Inti yang Harus Ditekankan

- **Implementasi Grafika Komputer** adalah komponen terbesar, yaitu **30%**, sehingga penguasaan `scene graph`, transformasi, material, lighting, shadow, dan interaksi 3D menjadi prioritas utama.
- **Interaction / Gameplay / Experience** dan **Visual Quality & VFX** sama-sama penting, masing-masing **20%**, karena proyek harus terasa interaktif dan memiliki kualitas visual yang baik.
- **Technical Implementation** bernilai **15%**, artinya kode, struktur, performa, dan penggunaan `Three.js` juga dinilai, bukan hanya hasil akhir.
- **Demo & Pemahaman Tim** bernilai **5%**, tetapi menjadi bukti bahwa tim mampu menjelaskan konsep grafika yang diimplementasikan.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan masuk ke komponen terbesar, yaitu **Implementasi Grafika Komputer — 30%**, dan melihat aspek apa saja yang akan dinilai pada bagian tersebut.

---

## Slide 055 - Implementasi Grafika Komputer — 30%

### Narasi

Bobot **30%** pada komponen ini menunjukkan bahwa penilaian UTS sangat memperhatikan apakah tim mampu membangun **adegan 3D** yang benar-benar berjalan secara teknis. Poin-poin yang disebutkan bukan sekadar daftar fitur, melainkan representasi dari lapisan-lapisan penting dalam **rendering pipeline**: bagaimana objek disusun, bagaimana posisinya berubah, bagaimana material dan cahaya menghasilkan tampilan, serta bagaimana objek 3D dapat dihubungkan dengan interaksi pengguna.

Dalam konteks proyek Three.js, kita dapat membaca daftar penilaian ini sebagai berikut:

- **`scene graph`** menilai apakah objek 3D diorganisasi secara hierarkis dan mudah dikendalikan, misalnya hubungan parent-child untuk kamera, model, atau bagian objek.
- **`transform`** menilai penggunaan posisi, rotasi, dan skala secara konsisten, termasuk transformasi lokal dan global yang memengaruhi penempatan objek di dunia.
- **`PBR`** menilai penerapan material berbasis fisika, sehingga permukaan objek memiliki respons cahaya yang lebih meyakinkan dibandingkan material sederhana.
- **`lighting`** menilai jenis, intensitas, warna, dan penempatan cahaya yang membentuk suasana serta kejelasan bentuk objek.
- **`shadow`** menilai apakah bayangan digunakan secara tepat untuk memperkuat kesan kedalaman dan kontak objek dengan lingkungan.
- **`GLB`** menilai penggunaan model 3D dalam format yang umum, termasuk kualitas geometri, material, dan integrasi model ke dalam adegan.
- **`animation`** menilai apakah objek memiliki gerak atau perubahan keadaan yang relevan, baik dari model, timeline, maupun logika aplikasi.
- **`raycasting`** menilai kemampuan menghubungkan input pengguna dengan objek 3D, misalnya memilih, menyorot, atau memicu aksi pada objek tertentu.
- **`environment`** menilai bagaimana latar, pencahayaan lingkungan, atau konteks visual membuat adegan terasa utuh dan tidak berdiri sendiri.

Penting untuk dipahami bahwa komponen ini menilai **kualitas implementasi teknis**, bukan hanya keberadaan satu fitur saja. Misalnya, `shadow` yang ada tetapi tidak sesuai dengan arah cahaya akan mengurangi kesan realistis; `raycasting` yang berfungsi tetapi tidak terhubung dengan logika interaksi juga belum menunjukkan nilai penuh. Dengan kata lain, mahasiswa perlu menunjukkan bahwa setiap elemen grafika tersebut saling mendukung dan menghasilkan adegan 3D yang koheren.

Sebelum lanjut ke aspek interaksi dan pengalaman, mahasiswa sebaiknya memastikan bahwa fondasi teknis ini sudah kuat: struktur adegan jelas, transformasi objek konsisten, material dan pencahayaan mendukung visual, serta mekanisme teknis seperti `raycasting` dapat diandalkan sebagai dasar interaksi.

### Inti yang Harus Ditekankan

- **Implementasi Grafika Komputer** bernilai **30%** dan menilai kualitas teknis adegan 3D, bukan hanya daftar fitur yang ada.
- Komponen seperti `scene graph`, `transform`, `PBR`, `lighting`, `shadow`, `GLB`, `animation`, `raycasting`, dan `environment` harus saling terhubung dalam satu adegan yang koheren.
- Kualitas visual dan teknis menjadi dasar sebelum menilai interaksi, gameplay, atau pengalaman pengguna.

### Transisi ke Slide Berikutnya

Setelah fondasi teknis grafika ini dijelaskan, slide berikutnya akan menilai bagaimana interaksi, gameplay, atau pengalaman pengguna dibangun di atas adegan 3D tersebut.

---

## Slide 056 - Interaction / Gameplay / Experience — 20%

### Narasi

Setelah aspek implementasi teknis seperti `scene graph`, transformasi, `PBR`, lighting, shadow, `GLB`, animasi, `raycasting`, dan environment, penilaian berikutnya beralih ke **pengalaman pengguna**. Bobot **20%** ini menilai apakah project Three.js dapat dioperasikan, dipahami, dan dirasakan sebagai sistem interaktif yang utuh, bukan sekadar objek 3D yang tampil di layar.

Intinya, interaksi adalah jembatan antara **input pengguna** dan **perubahan state scene**. Dalam konteks Three.js, interaksi dapat berupa pointer, keyboard, kontrol kamera, atau pemilihan objek melalui `raycaster`. Yang dinilai bukan hanya apakah objek bisa diklik atau digerakkan, tetapi apakah aksi tersebut menghasilkan **umpan balik** yang jelas, konsisten, dan sesuai tujuan project.

Untuk **Mini Game**, kriteria penilaian membentuk **gameplay loop** yang harus bisa dijelaskan secara runtut:

- **control**: pengguna dapat menggerakkan, memilih, atau memicu aksi dengan cara yang mudah dipahami.
- **challenge**: ada hambatan, target, atau kondisi yang membuat interaksi tidak sekadar demonstrasi.
- **feedback**: setiap aksi pengguna menghasilkan respons yang dapat diamati, misalnya perubahan visual, perubahan parameter, atau perubahan state.
- **progression**: ada perkembangan kondisi yang dapat diikuti selama permainan berlangsung.
- **win/lose**: ada kondisi akhir yang jelas, baik menang, kalah, selesai, atau gagal.
- **playability**: game dapat dimainkan dari awal hingga akhir tanpa alur yang membingungkan atau terputus.

Untuk **Interactive Application**, fokusnya bergeser dari tantangan permainan ke **usability** dan penyelesaian tugas. Kriteria yang dinilai meliputi:

- **interaction flow**: alur penggunaan aplikasi dapat diikuti secara logis.
- **usability**: pengguna dapat memahami fungsi antarmuka tanpa penjelasan yang berlebihan.
- **response/feedback**: setiap interaksi menghasilkan respons yang jelas dan dapat diamati.
- **exploration/configuration**: pengguna dapat mengeksplorasi atau mengatur objek, material, kamera, atau parameter scene.
- **objective**: aplikasi memiliki tujuan penggunaan yang jelas.
- **completion state**: ada kondisi akhir yang menunjukkan tugas telah selesai.

Perbedaan utamanya terletak pada **tujuan pengalaman**. Mini Game dinilai dari adanya **loop permainan** yang dapat dimainkan, sedangkan Interactive Application dinilai dari **alur penggunaan** yang membantu pengguna mencapai tujuan tertentu. Karena itu, mahasiswa tidak perlu memaksakan mekanisme game pada aplikasi interaktif, atau sebaliknya. Yang penting adalah kriteria penilaian sesuai dengan jenis project yang dibangun.

Sebelum lanjut ke aspek visual, kita perlu memastikan bahwa interaksi dapat **diuji secara langsung**. Artinya, dosen atau penguji harus bisa melihat apa yang dilakukan pengguna, apa yang berubah di scene, apa umpan balik yang muncul, dan bagaimana kondisi akhir tercapai. Interaksi yang baik tidak hanya ada di kode, tetapi juga terasa jelas saat project dijalankan.

### Inti yang Harus Ditekankan

- Dinilai **sesuai jenis project**: **Mini Game** dan **Interactive Application** memiliki kriteria yang berbeda.
- **Mini Game** harus memiliki **gameplay loop** yang jelas: **control**, **challenge**, **feedback**, **progression**, **win/lose**, dan **playability**.
- **Interactive Application** harus memiliki **interaction flow**, **usability**, **response/feedback**, **exploration/configuration**, **objective**, dan **completion state**.
- Interaksi harus menghasilkan **perubahan state scene** dan **umpan balik** yang dapat diamati, bukan hanya fitur yang tersedia di kode.
- Bobot **20%** menilai pengalaman pengguna secara keseluruhan, sehingga project harus bisa dijalankan dan dipahami oleh pengguna baru.

### Transisi ke Slide Berikutnya

Setelah interaksi dan alur pengalaman sudah jelas, penilaian berikutnya akan bergeser ke kualitas visual. Slide berikutnya membahas **Visual Quality & VFX — 20%**, yaitu bagaimana scene, material, lighting, environment, dan efek visual mendukung pengalaman yang sudah dibangun.

---

## Slide 057 - Visual Quality & VFX — 20%

### Narasi

Pada kriteria ini, kita menilai seberapa baik project Three.js membangun **kualitas visual** dan **efek visual** yang mendukung pengalaman pengguna. Bobot 20% menunjukkan bahwa visual bukan sekadar tambahan estetika, tetapi bagian penting dari rendering pipeline: bagaimana geometri, material, cahaya, lingkungan, dan efek ditampilkan secara koheren di layar.

Yang perlu diperhatikan adalah bahwa visual quality tidak hanya ditentukan oleh aset 3D yang bagus. Ia juga ditentukan oleh cara aset tersebut disusun dan dirender. Dalam konteks Three.js, kita bisa melihatnya sebagai hasil dari `scene`, kamera, material, light, environment, dan efek yang saling terkait.

Kriteria penilaian dapat dibaca sebagai berikut:

- **Scene composition**: penataan objek, skala, jarak, framing kamera, dan kedalaman ruang. Komposisi yang baik membuat objek penting mudah dibaca dan tidak terasa semrawut.
- **Material**: cara permukaan objek bereaksi terhadap cahaya. Material yang tepat membantu membedakan objek, memberi kesan materialitas, dan memperkuat gaya visual project.
- **Lighting**: pencahayaan yang menentukan mood, kontras, bayangan, dan keterbacaan scene. Lighting yang konsisten membuat objek terlihat berada dalam satu dunia yang sama.
- **Environment**: konteks ruang sekitar, seperti background, ground, fog, skybox, atau elemen lingkungan lain. Environment membantu memperkuat skala dan atmosfer.
- **VFX**: efek visual seperti partikel, glow, trail, atau transisi. VFX harus mendukung interaksi dan gameplay, bukan hanya menambah efek tanpa tujuan.
- **Konsistensi visual**: keselarasan antara warna, skala, material, lighting, dan VFX. Konsistensi membuat project terasa utuh dan profesional.

Dari sisi grafika komputer, kriteria ini mengingatkan bahwa kualitas visual adalah hasil keputusan rendering, bukan hanya kualitas model. Misalnya, material yang sama bisa terlihat berbeda jika lighting atau environment berubah. Sebaliknya, VFX yang berlebihan dapat mengganggu readability dan performance, terutama pada rendering real-time.

Sebelum lanjut, mahasiswa perlu memastikan bahwa setiap elemen visual memiliki alasan: mendukung interaksi, memperjelas tujuan, atau memperkuat pengalaman. Visual yang bagus akan dinilai lebih kuat jika konsisten dan tidak bertentangan dengan gameplay atau interaksi yang sudah dibangun.

### Inti yang Harus Ditekankan

- **Visual quality** dinilai dari koherensi scene composition, material, lighting, environment, dan VFX.
- **VFX** harus mendukung interaksi, keterbacaan, dan pengalaman, bukan sekadar efek tambahan.
- **Konsistensi visual** penting agar project terasa seperti satu dunia yang utuh, bukan kumpulan aset yang terpisah.

### Transisi ke Slide Berikutnya

Setelah kualitas visual dan VFX dinilai, langkah berikutnya adalah melihat bagaimana project dibangun secara teknis: struktur kode, pengelolaan state, pemuatan aset, dan kesadaran terhadap performance.

---

## Slide 058 - Technical Implementation — 15%

### Narasi

Setelah kualitas visual, ada aspek yang sama pentingnya: bagaimana project dibangun secara teknis. Dalam project Three.js interaktif, scene yang menarik tidak cukup hanya terlihat bagus; ia harus berjalan stabil, mudah dikembangkan, dan tidak membebani perangkat. Karena itu, komponen **Technical Implementation** diberi bobot 15%.

Kita bisa menilai aspek ini dari beberapa bagian utama:

- **Modularity** — kode sebaiknya tidak menjadi satu blok panjang. Setup scene, kamera, kontrol, animasi, input, dan UI sebaiknya dipisahkan menjadi fungsi atau modul yang jelas.
- **Code clarity** — nama variabel, fungsi, dan alur program harus mudah dipahami. Variabel seperti `scene`, `camera`, `renderer`, `clock`, dan `controls` sebaiknya memiliki peran yang konsisten.
- **Asset loading** — tekstur, model 3D, audio, atau font sebaiknya dimuat secara asinkron agar aplikasi tidak macet. Proses loading juga perlu menangani progress dan error.
- **State management** — keadaan interaktif seperti objek terpilih, mode kamera, animasi berjalan, atau parameter material berubah harus dikelola secara rapi.
- **Debugging** — mahasiswa perlu mampu melacak masalah dari log, console, dan gejala visual, misalnya objek tidak muncul, material salah, atau animasi patah.
- **Performance awareness** — implementasi harus sadar terhadap frame rate, kompleksitas geometri, ukuran tekstur, jumlah light, shadow, dan penggunaan ulang `geometry` atau `material`.

Dari aspek tersebut, hal yang paling penting adalah mahasiswa tidak hanya mengejar hasil akhir, tetapi juga menunjukkan cara berpikir teknis yang sehat. Project yang baik dalam grafika komputer biasanya memiliki struktur yang jelas, alur rendering yang mudah diikuti, dan keputusan teknis yang dapat dijelaskan. Misalnya, mengapa sebuah asset dimuat secara asinkron, mengapa state disimpan pada satu tempat, atau mengapa material tertentu dipakai ulang.

Dengan pemahaman ini, mahasiswa dapat membangun project Three.js yang tidak hanya “berjalan”, tetapi juga terstruktur, mudah di-debug, dan lebih mungkin berjalan lancar pada perangkat berbeda.

### Inti yang Harus Ditekankan

- **Modularity** dan **code clarity** menentukan apakah project mudah dirawat dan dikembangkan.
- **Asset loading** yang baik harus asinkron, tidak memblokir aplikasi, dan menangani kegagalan.
- **State management** penting agar interaksi, kamera, animasi, dan perubahan scene tetap konsisten.
- **Debugging** harus berbasis logika program dan gejala visual, bukan hanya membaca error.
- **Performance awareness** berarti memahami dampak geometri, tekstur, material, light, dan shadow terhadap frame rate dan beban GPU.

### Transisi ke Slide Berikutnya

Setelah aspek teknis seperti struktur kode, loading asset, dan performa sudah kita bahas, langkah berikutnya adalah menilai apakah project tersebut benar-benar orisinal dan terintegrasi dengan baik. Kita akan masuk ke komponen **Originality & Integration**, yang menekankan bahwa project harus dibuat sendiri, bukan sekadar modifikasi project jadi.

---

## Slide 059 - Originality & Integration — 10%

### Narasi

Setelah aspek teknis implementasi, kita beralih ke aspek **originality** dan **integrasi**. Pada bagian ini, yang dinilai adalah sejauh mana project `Three.js Interactive 3D Project` benar-benar menjadi karya tim, bukan sekadar hasil salin atau modifikasi project yang sudah jadi.

**Originality** di sini tidak selalu berarti semua ide harus baru secara mutlak. Yang lebih penting adalah mahasiswa menunjukkan **kepemilikan** atas keputusan desain, struktur project, dan cara fitur dibangun. Jika ada referensi atau contoh yang digunakan, hal itu masih wajar, asalkan tim mampu menjelaskan bagian mana yang diadaptasi dan bagian mana yang dikembangkan sendiri.

Kriteria **bukan hasil modifikasi project jadi** menekankan bahwa project tidak cukup hanya mengganti nama variabel, mengganti asset, atau menyesuaikan tampilan dari project lain. Yang dinilai adalah proses: apakah tim memahami alur scene, objek, interaksi, dan tampilan visual yang mereka bangun? Apakah keputusan implementasi muncul dari kebutuhan project, bukan dari meniru struktur project yang sudah ada?

**Integrasi original** berarti komponen-komponen project tidak hanya berdiri sendiri, tetapi tersusun menjadi satu pengalaman interaktif yang koheren. Misalnya, objek, transformasi, input pengguna, dan tampilan visual harus saling terhubung secara bermakna. Nilai tidak hanya diberikan pada adanya fitur, tetapi pada bagaimana fitur-fitur tersebut dipilih, dikombinasikan, dan disesuaikan dengan topik project.

Kriteria **interpretasi topik** dan **kreativitas implementasi** mendorong mahasiswa untuk menunjukkan sudut pandang sendiri. Dua tim boleh menggunakan tema yang mirip, tetapi cara mereka memodelkan masalah, memilih interaksi, dan menyusun alur visual dapat berbeda. Yang penting adalah project tersebut mencerminkan pemahaman mahasiswa terhadap grafika komputer, bukan sekadar kumpulan kode yang berjalan.

### Inti yang Harus Ditekankan

- **Originality** berarti project memiliki kepemilikan dan keputusan desain dari tim, bukan sekadar salinan.
- Project tidak boleh hanya berupa **modifikasi project jadi**; harus ada pengembangan dan pemahaman yang jelas.
- **Integrasi original** menekankan bahwa semua komponen project tersusun menjadi satu sistem interaktif yang koheren.
- **Interpretasi topik** dan **kreativitas implementasi** menunjukkan bahwa project mencerminkan sudut pandang dan pemahaman mahasiswa.

### Transisi ke Slide Berikutnya

Setelah aspek originalitas dan integrasi project dipahami, langkah berikutnya adalah menunjukkan bahwa tim benar-benar menguasai project melalui demo dan penjelasan.

---

## Slide 060 - Demo & Pemahaman Tim — 5%

### Narasi

Setelah aspek **originality & integration**, penilaian berikutnya adalah **demo & pemahaman tim**. Bobot ini memang hanya 5%, tetapi posisinya penting karena menunjukkan bahwa project tidak hanya dikumpulkan, melainkan benar-benar dipahami oleh seluruh anggota. Dalam konteks **Three.js Interactive 3D Project**, demo bukan sekadar menampilkan scene yang berjalan atau objek yang bergerak. Mahasiswa perlu menunjukkan bagaimana project dibangun, bagaimana fitur utama bekerja, dan bagaimana konsep grafika komputer hadir di dalamnya.

Yang perlu ditekankan adalah **setiap anggota harus mampu menjelaskan**, bukan hanya satu orang yang menguasai seluruh project. Dosen dapat bertanya ke anggota yang berbeda untuk memastikan pemahaman tersebar. Misalnya, satu anggota menjelaskan bagian geometri dan transformasi, satu lagi menjelaskan kamera dan interaksi, satu lagi menjelaskan lighting atau material, dan satu lagi menjelaskan alur gameplay atau tujuan project. Dengan cara ini, tim menunjukkan bahwa kerja sama benar-benar terjadi.

Dalam demo, alur penjelasan sebaiknya runtut. Pertama, project dijalankan. Kedua, fitur utama ditunjukkan. Ketiga, mahasiswa menjelaskan peran masing-masing anggota. Keempat, mahasiswa menjelaskan konsep grafika yang digunakan, misalnya bagaimana `scene`, `camera`, `mesh`, `material`, `light`, atau interaksi pengguna membentuk tampilan 3D. Penjelasan tidak harus terlalu teknis, tetapi harus menunjukkan bahwa mahasiswa memahami apa yang sedang ditampilkan, bukan hanya tahu bahwa program berjalan.

Aspek lain yang dinilai adalah **kendala teknis dan solusinya**. Mahasiswa perlu mampu menceritakan masalah yang muncul selama pengembangan, misalnya asset tidak muncul, interaksi tidak responsif, tampilan 3D tidak sesuai harapan, atau performa project menurun. Yang penting bukan hanya menyebutkan masalah, tetapi juga menjelaskan bagaimana tim menganalisis dan memperbaikinya. Penjelasan ini menunjukkan proses belajar, debugging, dan penguasaan project.

Sebelum demo, tim sebaiknya menyiapkan pembagian penjelasan secara singkat. Setiap anggota perlu tahu bagian apa yang akan dijelaskan, fitur apa yang harus ditunjukkan, dan jawaban apa yang mungkin muncul saat ditanya. Dengan persiapan seperti ini, demo menjadi bukti pemahaman kolektif, bukan sekadar presentasi dari satu orang.

### Inti yang Harus Ditekankan

- **Demo menilai pemahaman tim**, bukan hanya apakah project berjalan.
- **Setiap anggota** harus bisa menjelaskan bagian yang dikerjakan, alur fitur utama, konsep grafika, serta kendala dan solusinya.
- Penjelasan harus terhubung dengan elemen project 3D, seperti `scene`, `camera`, `mesh`, `material`, `light`, atau interaksi pengguna.
- Tim perlu menyiapkan pembagian penjelasan agar tidak bergantung pada satu orang saja.

### Transisi ke Slide Berikutnya

Setelah memahami apa yang akan ditanyakan saat demo, kita lanjut ke **checklist akhir** untuk memastikan project benar-benar siap: berjalan dengan baik, asset lengkap, interaksi berfungsi, dan dokumentasi sudah memadai.

---

## Slide 061 - Checklist Akhir

### Narasi

Sebelum demo, kita gunakan checklist ini sebagai **pemeriksaan terakhir** agar project benar-benar siap dinilai. Checklist ini bukan sekadar daftar formalitas, tetapi cara memastikan bahwa project Three.js tidak hanya “ada”, tetapi juga **berjalan, dapat dimainkan/digunakan, dan mudah dipahami** oleh penguji.

```text
Project berjalan
Asset tidak missing
Console tidak penuh error
Interaction bekerja
Objective jelas
Completion atau Win/Lose bekerja
Shadow terlihat
VFX bekerja
README lengkap
Credits lengkap
```

Kita bisa membaca checklist ini sebagai **kondisi akhir yang harus terpenuhi**, bukan sebagai urutan eksekusi program. Artinya, setiap poin harus dicek secara langsung pada hasil akhir project.

Secara konseptual, checklist ini dapat dikelompokkan menjadi empat bagian:

- **Kesiapan teknis:** `Project berjalan`, `Asset tidak missing`, dan `Console tidak penuh error`.  
  Jika project tidak berjalan, penguji tidak bisa menilai fitur apa pun. Jika asset hilang, scene bisa terlihat kosong, material tidak muncul, atau objek tidak ter-render. Jika `console` penuh error, biasanya ada masalah pada loading asset, penggunaan API, material, shader, atau render loop.

- **Alur interaksi:** `Interaction bekerja`, `Objective jelas`, dan `Completion atau Win/Lose bekerja`.  
  Dalam project interaktif, mahasiswa harus menunjukkan bahwa input pengguna benar-benar memengaruhi scene. Objective harus mudah dipahami, misalnya “kumpulkan objek”, “selesaikan level”, atau “jajaki lingkungan 3D”. Jika project berbentuk game, kondisi menang/kalah harus berfungsi; jika berbentuk aplikasi interaktif, harus ada alur penyelesaian yang jelas.

- **Kualitas visual:** `Shadow terlihat` dan `VFX bekerja`.  
  Shadow yang terlihat menandakan bahwa pencahayaan, objek, material, dan konfigurasi shadow bekerja dengan baik. VFX yang berfungsi menunjukkan bahwa efek visual seperti partikel, glow, animasi, atau efek lainnya sudah terintegrasi dengan render pipeline, bukan sekadar ditambahkan tanpa hasil yang terlihat.

- **Dokumentasi:** `README lengkap` dan `Credits lengkap`.  
  README membantu penguji memahami cara menjalankan project, fitur utama, kontrol, dan konsep grafika yang digunakan. Credits penting untuk menunjukkan sumber asset, library, referensi, atau kontribusi tim secara akademik.

Dalam konteks grafika komputer, checklist ini membantu memastikan bahwa **scene graph, kamera, lighting, material, interaction, dan render loop** bekerja secara konsisten. Project yang baik tidak cukup hanya memiliki banyak objek atau efek; ia harus **stabil, jelas tujuannya, dan bisa dijelaskan secara teknis**.

Sebelum lanjut, mahasiswa perlu memastikan bahwa project tidak hanya terlihat bagus saat demo, tetapi juga **reproducible**, artinya bisa dijalankan kembali dengan hasil yang sama dan mudah dipahami oleh orang lain.

### Inti yang Harus Ditekankan

- Checklist ini adalah **gate terakhir** sebelum demo atau penilaian.
- Project harus **berjalan tanpa masalah teknis yang mengganggu**, termasuk asset dan `console`.
- Interaksi, objective, dan kondisi selesai harus **jelas dan berfungsi**.
- Shadow dan VFX menunjukkan bahwa **visual rendering dan efek sudah terintegrasi dengan baik**.
- README dan credits penting untuk **kejelasan akademik dan kemudahan evaluasi**.

### Transisi ke Slide Berikutnya

Setelah checklist akhir terpenuhi, kita lanjut ke **target hasil akhir** project, yaitu bagaimana project yang baik dinilai bukan dari kompleksitasnya saja, tetapi dari kualitas interaksi, tujuan, orisinalitas, integrasi teknis, dan kekuatan visualnya.

---

## Slide 062 - Target Hasil Akhir

### Narasi

Setelah checklist teknis, kita perlu menyepakati apa yang membuat project Three.js UTS layak dinilai sebagai hasil akhir yang baik. Kuncinya bukan membuat game paling kompleks, tetapi membangun scene 3D yang bisa dioperasikan, punya tujuan, dan terlihat rapi secara visual maupun teknis.

Slide ini merumuskan target sebagai kombinasi enam hal:

```text
Interactive
+
Purposeful
+
Original
+
Well Integrated
+
Visually Strong
+
Technically Clear
```

**Interactive** berarti project tidak hanya menampilkan objek 3D secara pasif, tetapi pengguna bisa memengaruhi scene, misalnya melalui input, kamera, objek, atau state aplikasi. **Purposeful** berarti project memiliki tujuan yang jelas, bukan sekadar kumpulan objek tanpa arah. **Original** berarti project tidak hanya meniru template, tetapi ada pilihan desain, interaksi, atau konsep yang menunjukkan keputusan mahasiswa.

**Well Integrated** berarti semua bagian saling mendukung: kode, asset, interaksi, visual, dan alur penggunaan tidak terasa terpisah. **Visually Strong** berarti scene terlihat kuat secara komposisi, pencahayaan, material, kamera, dan presentasi visual. **Technically Clear** berarti project berjalan dengan baik, mudah dipahami, dan tidak penuh masalah teknis yang mengganggu pengalaman pengguna.

Untuk game, target minimumnya adalah **playable**: kontrol bekerja, objective bisa dipahami, dan alur permainan atau kondisi selesai dapat dijalankan. Untuk interactive application, targetnya adalah **usable dan memiliki completion flow yang jelas**: pengguna bisa melakukan tindakan yang dimaksud dan mencapai akhir yang jelas.

Sebelum lanjut, pahami bahwa penilaian tidak hanya melihat jumlah fitur. Yang lebih penting adalah konsistensi: apakah project berjalan, apakah interaksinya bermakna, apakah visualnya mendukung tujuan, dan apakah teknisnya bisa dipertanggungjawabkan.

### Inti yang Harus Ditekankan

- Project yang baik tidak harus paling kompleks; yang penting memenuhi target kualitas yang jelas.
- Enam kriteria utama adalah **Interactive**, **Purposeful**, **Original**, **Well Integrated**, **Visually Strong**, dan **Technically Clear**.
- Untuk game, target minimum adalah **playable**.
- Untuk interactive application, target minimum adalah **usable** dan memiliki **completion flow yang jelas**.
- Penilaian menekankan konsistensi antara fungsi, visual, dan teknis, bukan sekadar banyak fitur.

### Transisi ke Slide Berikutnya

Dengan target ini, kita menutup penjelasan UTS Three.js Interactive 3D Project. Selanjutnya, kita akan mulai materi berikutnya, yaitu Blender Fundamental & 3D Modeling.

---

## Slide 063 - TERIMA KASIH

### Narasi

Kita sudah sampai di bagian penutup untuk pertemuan UTS ini. Terima kasih atas partisipasi dan kerja keras mahasiswa dalam menyiapkan **Three.js Interactive 3D Project**. Pada tahap ini, yang ingin kita tekankan bukan hanya apakah program berjalan, tetapi apakah project tersebut menunjukkan pemahaman grafika komputer secara utuh.

Project yang baik harus terasa **interactive**, **purposeful**, **original**, **well integrated**, **visually strong**, dan **technically clear**. Jika project berbentuk game, mahasiswa perlu memastikan bahwa game tersebut **playable**: ada kontrol, tujuan, umpan balik, dan alur yang bisa dimainkan. Jika project berbentuk interactive application, maka aplikasi harus **usable** dan memiliki **completion flow** yang jelas, sehingga pengguna tahu apa yang dilakukan dan kapan proses dianggap selesai.

Sebelum melanjutkan, pastikan mahasiswa sudah memeriksa beberapa hal penting: apakah scene `Three.js` sudah ter-render dengan benar, apakah kamera dan transformasi objek sudah konsisten, apakah material dan lighting mendukung kejelasan visual, apakah interaksi pengguna sudah terhubung dengan logika aplikasi, dan apakah kode sudah cukup rapi untuk dijelaskan. Hal-hal ini akan menjadi dasar penilaian dan juga fondasi untuk pengembangan project berikutnya.

Dengan demikian, UTS ini bukan hanya ujian teknis, tetapi juga titik awal untuk melihat bagaimana konsep grafika komputer dapat diterapkan dalam karya visual yang interaktif dan bermakna.

### Inti yang Harus Ditekankan

- Project `Three.js` harus dinilai dari interaksi, tujuan, orisinalitas, integrasi, kekuatan visual, dan kejelasan teknis.
- Game harus **playable**; interactive application harus **usable** dan memiliki **completion flow** yang jelas.
- Mahasiswa perlu memastikan scene, kamera, transformasi, material, lighting, interaksi, dan kode dapat dijelaskan secara konsisten.

### Transisi ke Slide Berikutnya

Setelah penutup UTS ini, arah materi selanjutnya adalah **Blender Fundamental & 3D Modeling**, di mana kita akan mulai membangun pemahaman dasar tentang pemodelan objek 3D sebelum objek tersebut digunakan dalam pipeline rendering.
