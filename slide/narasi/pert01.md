# Narasi Grafika Komputer - Pertemuan 01

## Pengenalan Grafika Komputer

Sumber: markdown/pert01.md

---

## Slide 000 - Cover

### Narasi

Selamat datang pada mata kuliah **Grafika Komputer** dengan kode **EF234504** untuk Semester Gasal 2026/2027. Pada **Pertemuan 1** ini, kita akan memulai dengan **Pengenalan Grafika Komputer**, yaitu fondasi untuk memahami bagaimana objek visual direpresentasikan, diproses, dan ditampilkan oleh komputer.

Materi ini akan menjadi pintu masuk ke berbagai konsep yang akan kita kembangkan secara bertahap, mulai dari representasi gambar, transformasi, kamera, pencahayaan, hingga proses rendering. Pada pertemuan pertama, tujuan utamanya adalah membangun gambaran umum yang jelas, sehingga mahasiswa dapat mengikuti alur materi berikutnya dengan lebih percaya diri.

Mata kuliah ini disampaikan oleh **Dr. Darlis Herumuti** dari **Departemen Teknik Informatika**. Sebagai pengantar, kita akan menekankan bahwa grafika komputer bukan hanya tentang membuat gambar, tetapi juga tentang memahami pipeline, koordinat, geometri, dan interaksi antara perangkat keras serta perangkat lunak.

### Inti yang Harus Ditekankan

- **Grafika Komputer** adalah bidang yang mempelajari representasi, pemrosesan, dan tampilan objek visual pada komputer.
- Pertemuan pertama bersifat pengantar, sehingga fokusnya adalah membangun pemahaman umum sebelum masuk ke konsep teknis.
- Konsep-konsep seperti koordinat, geometri, kamera, lighting, dan rendering akan menjadi benang merah sepanjang mata kuliah.

### Transisi ke Slide Berikutnya

Setelah memahami posisi pertemuan ini dalam keseluruhan mata kuliah, kita lanjutkan dengan melihat topik-topik utama yang akan dibahas pada pertemuan pertama.

---

## Slide 001 - Topik Pembahasan

### Narasi

Sebelum masuk ke definisi, kita perlu melihat peta besar pertemuan ini. Topik yang akan kita susun bergerak dari konsep dasar **grafika komputer** menuju elemen yang membentuk sebuah adegan visual, lalu ke perangkat dan alur kerja yang membuat gambar tersebut dapat ditampilkan. Dengan urutan ini, kita tidak hanya menghafal istilah, tetapi mulai melihat hubungan antarbagian: objek direpresentasikan, diletakkan dalam **scene**, dilihat oleh **camera**, diberi **material** dan **light**, lalu diproses oleh `CPU` dan `GPU` melalui `graphics pipeline`.

Ruang lingkupnya mencakup pengertian dan aplikasi grafika komputer, perbedaan **raster**, **vector**, dan **3D graphics**, serta istilah dasar seperti **pixel**, **resolusi**, **frame**, dan **real-time graphics**. Kita juga akan membahas representasi geometri melalui `vertex`, `edge`, `face`, `triangle`, dan `mesh`, kemudian komponen scene seperti `object`, `camera`, `light`, `material`, dan `texture`. Bagian ini penting karena menjadi fondasi untuk memahami bagaimana gambar 2D maupun 3D dibangun dan ditampilkan.

Setelah konsep representasi dan scene, kita akan melihat sisi sistem: peran `CPU` dan `GPU`, `graphics API`, serta `graphics pipeline`. Pipeline adalah cara kerja utama dalam rendering, dari data geometri hingga piksel yang muncul di layar. Sebagai penutup, ada pengantar praktikum **Graphics Playground** dengan `HTML Canvas`, sehingga kita dapat menghubungkan konsep yang dibahas dengan program sederhana yang dapat dijalankan.

### Inti yang Harus Ditekankan

- Peta topik pertemuan bergerak dari konsep dasar, representasi objek, komponen scene, perangkat dan API, pipeline, hingga praktikum.
- Istilah seperti **raster**, **vector**, **3D graphics**, `pixel`, `resolusi`, `frame`, `vertex`, `mesh`, `camera`, `light`, `material`, dan `texture` adalah fondasi utama grafika komputer.
- `CPU`, `GPU`, `graphics API`, dan `graphics pipeline` penting untuk memahami bagaimana gambar dirender dan ditampilkan.
- `HTML Canvas` menjadi jembatan awal untuk mempraktikkan konsep grafika secara sederhana.

### Transisi ke Slide Berikutnya

Setelah peta topik ini dipahami, kita lanjut ke capaian pembelajaran untuk mengetahui kemampuan yang diharapkan setelah pertemuan ini.

---

## Slide 002 - Capaian Pembelajaran

### Narasi

Sebelum kita masuk ke definisi, ada baiknya kita melihat dulu kemampuan apa yang akan dibangun pada pertemuan ini. Daftar capaian pembelajaran ini bukan sekadar daftar hafalan, melainkan peta kemampuan yang ingin kita capai bersama. Setiap poin menunjukkan bahwa kita tidak hanya akan mengenal istilah, tetapi juga mulai mampu menjelaskan hubungan antar-konsep dalam **grafika komputer**.

Secara garis besar, capaian ini bisa dikelompokkan menjadi beberapa bagian. Pertama, kita perlu memahami pengertian dan aplikasi **grafika komputer**, serta mampu membedakan **raster**, **vector**, dan **3D graphics**. Kedua, kita akan mulai mengenal representasi objek visual, terutama bagaimana objek 3D dibangun dari `vertex`, `edge`, `face`, `triangle`, dan `mesh`. Ketiga, kita perlu memahami komponen dasar sebuah **scene**, peran `CPU` dan `GPU` dalam rendering, serta tahapan dasar `graphics pipeline`. Terakhir, kita juga akan mencoba membuat program grafika sederhana menggunakan `HTML Canvas`.

Penting untuk dipahami bahwa pertemuan ini masih berada pada tingkat pengantar. Kita belum langsung masuk ke perhitungan matematis yang rumit atau detail implementasi shader. Namun, kita sudah perlu memiliki gambaran utuh: bagaimana data visual direpresentasikan, bagaimana objek disusun, bagaimana kamera dan elemen scene berperan, serta bagaimana proses rendering terjadi secara umum. Dengan fondasi ini, pembahasan berikutnya akan terasa lebih terarah.

### Inti yang Harus Ditekankan

- Capaian pembelajaran ini menjadi panduan kemampuan yang harus dimiliki setelah pertemuan, bukan hanya daftar topik.
- Mahasiswa perlu mulai memahami hubungan antara representasi objek, komponen scene, peran `CPU`/`GPU`, dan `graphics pipeline`.
- Poin terakhir menunjukkan bahwa pemahaman konsep akan langsung diuji melalui praktik sederhana menggunakan `HTML Canvas`.

### Transisi ke Slide Berikutnya

Dengan peta capaian ini, langkah pertama yang perlu kita jawab adalah pertanyaan paling dasar: apa sebenarnya yang dimaksud dengan **grafika komputer**?

---

## Slide 003 - Apa Itu Grafika Komputer?

### Narasi

Grafika komputer dapat kita pahami sebagai bidang ilmu yang mempelajari bagaimana komputer mengubah data menjadi gambar yang dapat dilihat manusia. Dalam slide ini, kita melihat definisi intinya: komputer tidak hanya menampilkan gambar, tetapi juga merepresentasikan objek visual, membentuk gambar, memanipulasi objek dan gambar, melakukan `rendering`, menghasilkan animasi, serta menyediakan interaksi visual.

Kata **Computer Graphics** sering terdengar seperti sekadar membuat gambar, tetapi cakupannya lebih luas. Objek visual bisa berupa garis, bentuk 2D, permukaan 3D, karakter, lingkungan virtual, atau antarmuka. Komputer menyimpannya sebagai data numerik: koordinat, warna, ukuran, material, dan atribut lain. Dari data itulah proses grafika membangun tampilan yang bermakna bagi manusia.

Alur sederhana pada slide adalah **Data → Proses Grafika → Gambar**. Kita bisa membacanya sebagai pipeline paling dasar. Data adalah input, misalnya titik, garis, bentuk, atau parameter objek. Proses grafika adalah tahap pengolahan, seperti transformasi, proyeksi, rasterisasi, pencahayaan, atau pemetaan warna. Gambar adalah output akhir yang muncul di layar. Dalam konteks yang lebih luas, alur ini menjadi cikal bakal **graphics pipeline** yang akan kita pelajari lebih jauh.

Konsep ini penting karena grafika komputer menjadi dasar banyak aplikasi: visualisasi data, game, film, desain, simulasi, augmented reality, dan antarmuka pengguna. Tanpa representasi objek dan `rendering` yang tepat, komputer hanya memiliki angka, bukan pemandangan yang dapat dipahami. Karena itu, memahami definisi ini membantu kita melihat bahwa setiap gambar di layar sebenarnya hasil dari serangkaian keputusan matematis dan komputasi.

Sebelum lanjut, yang perlu kita pegang adalah: grafika komputer bukan hanya tentang gambar, tetapi tentang bagaimana data numerik diubah menjadi representasi visual. Kita akan mulai dari level yang sederhana, yaitu data menjadi gambar, lalu nanti memperdalam bagaimana objek 3D, kamera, cahaya, dan GPU berperan dalam proses tersebut.

### Inti yang Harus Ditekankan

- **Computer Graphics** adalah bidang ilmu yang mempelajari bagaimana komputer mengubah data numerik menjadi gambar atau visual yang dapat dilihat manusia.
- Cakupannya meliputi representasi objek visual, pembentukan gambar, manipulasi objek, `rendering`, animasi, dan interaksi visual.
- Alur dasarnya adalah **Data → Proses Grafika → Gambar**, yang menjadi fondasi awal untuk memahami **graphics pipeline**.

### Transisi ke Slide Berikutnya

Setelah memahami pengertian dasarnya, kita perlu melihat apa yang sebenarnya dimengerti komputer sebelum gambar terbentuk. Pada slide berikutnya, kita akan membahas bagaimana objek tidak dipahami sebagai “mobil” atau “pohon”, melainkan sebagai data seperti posisi, koordinat, bentuk, warna, texture, material, dan arah cahaya.

---

## Slide 004 - Dari Data Menjadi Gambar

### Narasi

Dalam grafika komputer, kita perlu membiasakan diri dengan satu cara pandang: komputer tidak memahami objek secara semantik. Ketika kita menyebut **mobil**, **pohon**, atau **karakter**, komputer tidak langsung “melihat” objek itu seperti manusia. Yang ia pahami adalah representasi numerik dan struktural dari objek tersebut.

Data yang dimaksud bisa berupa **posisi**, **koordinat**, **ukuran**, **bentuk**, **warna**, `texture`, `material`, hingga **arah cahaya**. Misalnya, sebuah objek tiga dimensi dapat disimpan sebagai kumpulan titik koordinat, permukaan, dan nilai warna. Dengan data inilah komputer dapat membangun, memindahkan, mengubah, atau menampilkan objek di layar.

Alur dasarnya dapat dibaca sebagai berikut:

```text
DATA
 ↓
GEOMETRY & ATTRIBUTES
 ↓
RENDERING
 ↓
IMAGE
```

Pada tahap **DATA**, informasi mentah tentang objek masih berupa nilai-nilai yang dapat diproses. Nilai-nilai ini belum tentu langsung terlihat sebagai gambar, tetapi sudah cukup untuk menggambarkan apa yang ingin ditampilkan.

Tahap **GEOMETRY & ATTRIBUTES** mengubah data tersebut menjadi bentuk visual yang dapat dirender. `Geometry` berkaitan dengan struktur bentuk, seperti titik, garis, segitiga, atau permukaan. `Attributes` berkaitan dengan sifat visual, seperti warna, `texture`, `material`, dan informasi pencahayaan. Di sinilah objek mulai memiliki “wajah” yang dapat diproses oleh sistem rendering.

Tahap **RENDERING** adalah proses mengubah geometri dan atribut menjadi gambar. Secara sederhana, rendering menentukan bagaimana objek tampak dari sudut pandang tertentu, termasuk posisi kamera, transformasi, pencahayaan, dan konversi bentuk menjadi piksel pada layar. Pada tingkat pengantar, kita cukup memahami bahwa rendering adalah jembatan antara data dan gambar.

Hasil akhirnya adalah **IMAGE**, yaitu kumpulan piksel yang dapat dilihat manusia. Gambar ini bukan sekadar “objek” dalam arti semantik, melainkan hasil dari proses komputasi atas data geometri dan atribut.

Memahami alur ini penting karena hampir semua topik dalam grafika komputer—transformasi, kamera, rasterisasi, lighting, dan shader—berawal dari gagasan yang sama: data numerik diproses menjadi gambar yang dapat dilihat.

### Inti yang Harus Ditekankan

- Komputer tidak memahami objek secara langsung, tetapi memahami **data** seperti koordinat, bentuk, warna, `texture`, `material`, dan arah cahaya.
- Alur utama adalah **DATA → GEOMETRY & ATTRIBUTES → RENDERING → IMAGE**.
- `Geometry` menentukan struktur bentuk, sedangkan `attributes` menentukan sifat visual objek.
- **Rendering** adalah proses yang mengubah data visual menjadi gambar yang dapat ditampilkan.

### Transisi ke Slide Berikutnya

Setelah kita memahami bahwa gambar dalam grafika komputer lahir dari data, langkah berikutnya adalah membedakan **Computer Graphics** dengan bidang yang juga berhubungan dengan gambar, yaitu **Image Processing** dan **Computer Vision**.

---

## Slide 005 - Computer Graphics, Image Processing, dan Computer Vision

### Narasi

Setelah kita melihat bahwa komputer tidak memahami objek secara langsung, tetapi bekerja dari data, geometri, dan atribut visual, ada satu hal penting yang perlu dibedakan: **Computer Graphics**, **Image Processing**, dan **Computer Vision** adalah tiga bidang yang saling berhubungan, tetapi tidak sama.

Pada **Computer Graphics**, arah alurnya adalah dari data atau model menuju gambar. Dalam konteks grafika komputer, data tersebut dapat berupa koordinat, bentuk, ukuran, warna, material, atau arah cahaya. Prosesnya kemudian melewati tahap rendering hingga menghasilkan citra yang dapat ditampilkan. Karena itu, Computer Graphics berfokus pada **pembuatan gambar dari data**.

Sementara itu, **Image Processing** bekerja pada gambar yang sudah ada. Inputnya adalah image, dan outputnya adalah image yang telah dimodifikasi. Contohnya adalah `blur`, `sharpening`, atau `noise reduction`. Bidang ini tidak selalu bertujuan memahami isi gambar, tetapi lebih pada mengubah, memperbaiki, atau menekankan aspek visual tertentu pada citra.

**Computer Vision** berada pada arah yang berbeda. Inputnya tetap gambar, tetapi outputnya bukan gambar lain, melainkan **informasi**. Tujuannya adalah memahami apa yang ada dalam gambar, misalnya `object detection` atau `face recognition`. Dengan kata lain, Computer Vision berusaha mengekstrak makna atau pengetahuan dari citra.

Kita dapat membaca ketiga diagram pada slide ini sebagai alur informasi. Arah panah menunjukkan apa yang masuk, apa yang diproses, dan apa yang keluar:

```text
Computer Graphics:   Data / Model → Image
Image Processing:    Image → Modified Image
Computer Vision:     Image → Information
```

Pembedaan ini penting karena membantu kita memahami posisi setiap proses dalam sistem visual. Computer Graphics menghasilkan representasi visual, Image Processing dapat digunakan untuk memperbaiki atau memodifikasi citra, dan Computer Vision dapat membaca atau menafsirkan citra tersebut.

### Inti yang Harus Ditekankan

- **Computer Graphics** mengubah **data/model** menjadi **image**, sesuai alur `Data / Model → Image`.
- **Image Processing** mengubah **image** menjadi **modified image**, misalnya `blur`, `sharpening`, `noise reduction`.
- **Computer Vision** mengubah **image** menjadi **information**, misalnya `object detection` dan `face recognition`.
- Arah panah pada diagram menunjukkan alur input, proses, dan output dari masing-masing bidang.

### Transisi ke Slide Berikutnya

Setelah batas ketiga bidang ini jelas, kita lanjut ke slide berikutnya untuk melihat mengapa kemampuan mengubah data menjadi bentuk visual menjadi penting dalam banyak aplikasi dan sistem modern.

---

## Slide 006 - Mengapa Grafika Komputer Penting?

### Narasi

Setelah kita membedakan **computer graphics**, **image processing**, dan **computer vision**, langkah berikutnya adalah memahami mengapa **grafika komputer** menjadi bidang yang sangat relevan. Intinya, grafika komputer memberi kita cara untuk mengubah **data**, **model**, atau **parameter** menjadi citra yang dapat dilihat, dipahami, dan diinteraksikan.

Dalam banyak sistem modern, data tidak selalu hadir dalam bentuk yang langsung dapat dibaca manusia. Data bisa berupa koordinat geometri, parameter fisika, hasil simulasi, statistik, atau struktur informasi. Tanpa representasi visual, data tersebut sulit dikomunikasikan. Grafika komputer menyediakan mekanisme untuk menerjemahkan data tersebut menjadi bentuk visual, misalnya objek 3D, grafik, animasi, atau tampilan interaktif.

Daftar penggunaan pada slide ini menunjukkan bahwa grafika komputer tidak hanya berkaitan dengan hiburan. **Komunikasi visual**, **simulasi**, **desain**, **visualisasi data**, **pendidikan**, **penelitian**, dan **human-computer interaction** semuanya membutuhkan kemampuan menampilkan informasi secara intuitif. Misalnya, dalam simulasi, kita perlu melihat perilaku sistem; dalam visualisasi data, kita perlu mengenali pola; dalam HCI, pengguna perlu berinteraksi dengan antarmuka yang jelas.

Dari sudut pandang teknis, hal ini juga menjadi pintu masuk ke `rendering pipeline`. Data mentah seperti geometri, tekstur, dan parameter material harus diproses melalui `transformasi`, `kamera`, `rasterization`, dan `shading` sebelum menjadi gambar di layar. Slide ini belum masuk ke detail teknisnya, tetapi penting untuk memahami bahwa setiap aplikasi grafika komputer pada dasarnya bergantung pada kemampuan sistem untuk menghasilkan citra secara konsisten dan efisien.

Karena itu, poin utama yang perlu kita pegang adalah: grafika komputer penting karena menjembatani **data** dan **persepsi manusia**. Ia memungkinkan kita tidak hanya menyimpan atau menghitung data, tetapi juga melihat, membandingkan, mensimulasikan, dan berinteraksi dengan data tersebut. Pemahaman ini akan menjadi dasar ketika kita nanti melihat contoh aplikasi yang lebih spesifik.

### Inti yang Harus Ditekankan

- Grafika komputer mengubah **data** atau **model** menjadi **representasi visual** yang mudah dipahami.
- Bidang ini penting untuk **komunikasi visual**, **simulasi**, **desain**, **visualisasi data**, **pendidikan**, **penelitian**, dan **human-computer interaction**.
- Grafika komputer menjadi dasar banyak sistem modern yang membutuhkan tampilan informasi secara intuitif dan interaktif.

### Transisi ke Slide Berikutnya

Dengan memahami alasan pentingnya grafika komputer, kita dapat melanjutkan ke contoh aplikasi yang menunjukkan bagaimana konsep ini digunakan dalam video game, CAD, visualisasi ilmiah, AR/VR, dan bidang lain.

---

## Slide 007 - Aplikasi Grafika Komputer

### Narasi

Setelah kita memahami mengapa grafika komputer penting, langkah berikutnya adalah melihat ke mana konsep itu benar-benar bekerja. Daftar pada slide ini bukan sekadar kumpulan bidang, melainkan contoh nyata bahwa hampir semua sistem visual modern membutuhkan kemampuan untuk membangun, memproses, dan menampilkan objek 2D atau 3D.

Kita bisa membaca contoh-contoh ini dalam beberapa kelompok. Pertama, **video game**, **film dan animasi**, **Augmented Reality**, **Virtual Reality**, dan **Digital Twin** menunjukkan grafika komputer yang sangat bergantung pada **geometri**, **material**, **lighting**, **kamera**, dan **rendering real-time**. Di sini, GPU dan pipeline rendering berperan besar karena objek harus dihitung, diproses, dan ditampilkan dengan cepat, sering kali berinteraksi langsung dengan pengguna.

Kelompok kedua adalah **Computer-Aided Design**, **arsitektur**, dan **Geographic Information System**. Pada aplikasi ini, grafika komputer membantu representasi objek teknis, bangunan, atau data spasial agar dapat dianalisis dan dikomunikasikan. Intinya bukan hanya tampilan yang indah, tetapi akurasi bentuk, proporsi, skala, dan hubungan antarobjek.

Kelompok ketiga adalah **scientific visualization** dan **medical visualization**. Di sini data yang kompleks, misalnya hasil simulasi, citra medis, atau model biologis, diubah menjadi bentuk visual agar lebih mudah dipahami. Konsep seperti **koordinat**, **transformasi**, **proyeksi**, dan **pemetaan warna** menjadi penting karena data mentah harus diterjemahkan menjadi informasi visual yang bermakna.

Terakhir, **web graphics** dan **UI/UX** menunjukkan bahwa grafika komputer juga hadir di antarmuka digital sehari-hari. Meskipun skalanya lebih ringan, prinsip yang sama tetap ada: bagaimana elemen visual disusun, dirender, dan ditampilkan agar jelas, responsif, dan mudah digunakan.

Jadi, yang perlu kita pegang adalah: aplikasi grafika komputer berbeda dalam konteksnya, tetapi banyak di antaranya kembali ke persoalan yang sama, yaitu bagaimana merepresentasikan objek, memposisikannya relatif terhadap kamera, memberi penampakan material dan cahaya, lalu mengubahnya menjadi gambar yang dapat dilihat pengguna.

### Inti yang Harus Ditekankan

- Aplikasi grafika komputer sangat luas, mulai dari hiburan, desain, visualisasi data, hingga interaksi digital.
- Banyak aplikasi bergantung pada konsep inti seperti **geometri**, **transformasi**, **kamera**, **material**, **lighting**, dan **rendering**.
- Perbedaan utama antaraplikasi terletak pada tujuan: real-time, akurasi teknis, interpretasi data, atau pengalaman pengguna.

### Transisi ke Slide Berikutnya

Untuk melihat bagaimana konsep-konsep itu bekerja secara lebih konkret, kita akan mulai dari dua bidang yang paling sering menjadi pintu masuk grafika komputer, yaitu game, film, dan visual effects.

---

## Slide 008 - Game, Film, dan Visual Effects

### Narasi

Pada dua bidang ini, kita melihat grafika komputer bukan lagi sebagai teori, tetapi sebagai sistem visual yang membentuk pengalaman pengguna. Di video game, elemen seperti **character**, **environment**, **lighting**, **shadow**, **particle**, **animation**, dan **user interface** bekerja bersama. Character dan environment dibangun dari bentuk geometri, lalu diberi material, pencahayaan, dan animasi agar terasa hidup. Shadow dan particle membantu memperkuat kesan kedalaman, gerak, dan atmosfer. User interface menunjukkan bahwa grafika komputer tidak hanya menampilkan dunia 3D, tetapi juga membantu komunikasi antara sistem dan pengguna.

Pada film, fokusnya bergeser ke produksi visual yang lebih kompleks. **CGI**, **3D animation**, **creature**, **digital environment**, **simulation**, **compositing**, dan **visual effects** menunjukkan bahwa grafika komputer dipakai untuk membuat objek yang tidak ada di dunia nyata, mensimulasikan fenomena, dan menggabungkan banyak elemen visual menjadi satu adegan yang koheren. Di sini, kualitas visual dan konsistensi antar elemen menjadi sangat penting.

Meskipun konteksnya berbeda, keduanya berdiri di atas konsep yang sama: **geometry**, **material**, **lighting**, **camera**, dan **rendering**. `Geometry` menentukan bentuk objek, `material` menentukan bagaimana permukaan bereaksi terhadap cahaya, `lighting` membentuk pencahayaan dan suasana, `camera` menentukan sudut pandang dan framing, sedangkan `rendering` mengubah semua informasi tersebut menjadi gambar yang dapat dilihat.

Cara membaca slide ini adalah dengan melihat setiap daftar bukan sebagai fitur terpisah, tetapi sebagai bagian dari alur visual yang saling terhubung. Misalnya, sebuah karakter tidak cukup hanya memiliki bentuk; ia perlu material yang tepat, pencahayaan yang mendukung, kamera yang membingkainya, dan rendering yang menghasilkan tampilan akhir. Dalam game, alur ini harus mendukung interaksi dan antarmuka. Dalam film, alur ini harus mendukung narasi, efek, dan komposisi visual.

Penting untuk dipahami bahwa perbedaan antara game dan film bukan pada ada atau tidaknya konsep dasar, melainkan pada cara konsep tersebut digunakan. Game cenderung menekankan elemen yang mendukung pengalaman langsung, seperti animation, particle, dan user interface. Film menekankan elemen produksi visual, seperti simulation, compositing, dan visual effects. Namun, keduanya tetap membutuhkan pemahaman yang sama tentang bagaimana objek visual direpresentasikan, diterangi, dilihat, dan dirender.

Sebelum lanjut, mahasiswa perlu menangkap bahwa grafika komputer adalah disiplin yang menyatukan representasi visual, kamera, pencahayaan, dan rendering. Konsep ini akan terus muncul pada aplikasi lain, termasuk CAD dan scientific visualization, di mana tujuan visualnya mungkin berbeda tetapi dasar teknisnya tetap sama.

### Inti yang Harus Ditekankan

- Video game dan film adalah dua aplikasi utama grafika komputer yang sangat terlihat dalam kehidupan sehari-hari.
- Elemen seperti **character**, **environment**, **lighting**, **shadow**, **particle**, **animation**, dan **user interface** menunjukkan bahwa game membangun pengalaman visual yang interaktif dan dinamis.
- Elemen seperti **CGI**, **3D animation**, **creature**, **digital environment**, **simulation**, **compositing**, dan **visual effects** menunjukkan bahwa film menggunakan grafika komputer untuk produksi visual yang kompleks.
- Kedua bidang sama-sama bergantung pada konsep inti: **geometry**, **material**, **lighting**, **camera**, dan **rendering**.
- Mahasiswa harus memahami bahwa daftar pada slide bukan sekadar fitur, tetapi bagian dari alur visual yang saling terhubung.

### Transisi ke Slide Berikutnya

Setelah melihat dua aplikasi yang sangat visual dan populer, kita lanjut ke bidang lain yang juga memakai konsep serupa, tetapi dengan tujuan yang lebih teknis dan analitis: **CAD** dan **scientific visualization**.

---

## Slide 009 - CAD dan Scientific Visualization

### Narasi

Setelah melihat grafika komputer pada game dan film, kita lanjut ke dua bidang yang sangat dekat dengan desain teknik dan analisis data, yaitu **Computer-Aided Design** atau **CAD** dan **scientific visualization**.

Dalam **CAD**, grafika komputer membantu manusia merancang objek secara digital sebelum dibuat secara fisik. Contoh penerapannya ada pada **desain produk**, **teknik mesin**, **arsitektur**, **otomotif**, dan **konstruksi**. Di sini, objek yang divisualisasikan biasanya berupa bentuk geometri yang harus dapat diperiksa secara visual, misalnya komponen mesin, struktur bangunan, atau bodi kendaraan. Mahasiswa perlu melihat bahwa visualisasi di CAD bukan hanya soal tampilan, tetapi juga membantu memahami bentuk, ukuran, dan hubungan antarbagian dalam suatu rancangan.

Sementara itu, **scientific visualization** memiliki tujuan yang sedikit berbeda. Bidang ini mengubah **data kompleks** menjadi bentuk visual yang lebih mudah dianalisis. Data yang dimaksud bisa berasal dari **simulasi cuaca**, **computational fluid dynamics**, **molekul**, **astronomi**, atau **data geospasial**. Intinya, data yang awalnya berupa angka, hasil simulasi, atau informasi spasial diubah menjadi gambar, warna, bentuk, atau animasi agar pola dan hubungan antarvariabel lebih mudah dipahami.

Kaitannya dengan grafika komputer, kedua bidang ini tetap melibatkan representasi visual, geometri, kamera, dan rendering. Namun penekanannya sering berbeda dari game atau film: pada CAD, visualisasi membantu proses perancangan dan pemeriksaan bentuk; pada scientific visualization, visualisasi membantu interpretasi data. Karena itu, mahasiswa perlu memahami bahwa rendering pipeline tidak hanya dipakai untuk membuat adegan yang menarik, tetapi juga untuk menampilkan model teknis atau data ilmiah secara bermakna.

Sebelum lanjut, hal penting yang harus dipahami adalah bahwa CAD dan scientific visualization menunjukkan bahwa grafika komputer adalah alat bantu pengambilan keputusan. Visual yang dihasilkan membantu perancang, insinyur, ilmuwan, atau analis melihat sesuatu yang sulit dibayangkan hanya dari tabel, angka, atau rumus.

### Inti yang Harus Ditekankan

- **CAD** digunakan untuk merancang objek secara digital pada bidang seperti **desain produk**, **teknik mesin**, **arsitektur**, **otomotif**, dan **konstruksi**.
- **Scientific visualization** mengubah **data kompleks** menjadi visual yang lebih mudah dianalisis, misalnya dari **simulasi cuaca**, **computational fluid dynamics**, **molekul**, **astronomi**, dan **data geospasial**.
- Kedua bidang menunjukkan bahwa grafika komputer tidak hanya untuk hiburan, tetapi juga untuk **desain teknik**, **analisis data**, dan **interpretasi visual** yang mendukung keputusan.

### Transisi ke Slide Berikutnya

Setelah CAD dan scientific visualization, kita akan melihat bidang yang lebih dekat dengan tubuh manusia dan pengalaman imersif, yaitu **medical visualization**, **augmented reality**, dan **virtual reality**.

---

## Slide 010 - Medical Visualization, AR, dan VR

### Narasi

Setelah melihat CAD dan scientific visualization, kita masuk ke tiga bidang yang sangat dekat dengan pengalaman pengguna: **Medical Visualization**, **Augmented Reality**, dan **Virtual Reality**. Ketiganya menunjukkan bahwa grafika komputer bukan hanya untuk membuat gambar yang menarik, tetapi juga untuk membantu manusia memahami data, berinteraksi dengan objek, dan merasakan lingkungan digital.

**Medical Visualization** digunakan untuk menampilkan data medis agar lebih mudah dibaca dan dianalisis. Contoh yang disebutkan pada slide adalah `CT Scan`, `MRI`, `ultrasound`, `3D anatomy`, dan `surgical simulation`. Dalam konteks grafika komputer, data medis ini dapat berupa citra 2D, volume data, atau model geometri 3D yang kemudian diproses melalui **pipeline rendering**. Prosesnya melibatkan transformasi koordinat, pemodelan geometri, rasterisasi, pencahayaan, dan shader, sehingga struktur tubuh atau simulasi operasi dapat ditampilkan dengan lebih jelas.

Pada **Augmented Reality**, slide menampilkan rumus sederhana:

```text
Real World + Virtual Object
```

Artinya, sistem tidak menggantikan dunia nyata, tetapi menambahkan objek virtual ke dalamnya. Agar objek virtual tampak menempel pada dunia nyata, kita perlu memahami posisi **kamera**, **transformasi koordinat**, dan cara objek 3D diproyeksikan ke layar. Di sinilah grafika komputer berperan penting: objek virtual harus dirender dengan skala, sudut pandang, dan pencahayaan yang konsisten dengan lingkungan nyata.

**Virtual Reality** berbeda karena pengguna masuk ke lingkungan digital yang imersif. Lingkungan ini dibangun dari geometri, tekstur, lighting, dan shader, lalu dirender agar pengguna dapat melihat sekeliling dan berinteraksi. Karena pandangan pengguna dapat berubah cepat, sistem harus menghasilkan gambar yang stabil dan konsisten. Di tingkat konsep, VR tetap menggunakan prinsip yang sama: kamera virtual, transformasi, rasterisasi, dan pipeline rendering.

Poin pentingnya adalah ketiga bidang ini tidak berdiri sendiri. Medical visualization, AR, dan VR membutuhkan representasi visual yang benar secara spasial, cepat, dan dapat diinteraksikan. Tanpa pemahaman transformasi, kamera, koordinat, dan rendering, objek akan tampak mengambang, salah posisi, atau tidak meyakinkan. Karena itu, slide ini menjadi jembatan menuju pembahasan real-time graphics.

### Inti yang Harus Ditekankan

- **Medical Visualization** mengubah data medis seperti `CT Scan`, `MRI`, `ultrasound`, `3D anatomy`, dan `surgical simulation` menjadi representasi visual yang dapat dipahami.
- **Augmented Reality** menggabungkan dunia nyata dan objek virtual, sehingga memerlukan pemahaman kamera, transformasi koordinat, dan rendering yang konsisten.
- **Virtual Reality** membangun lingkungan digital imersif menggunakan geometri, lighting, shader, dan rendering.
- Ketiganya bergantung pada teknik grafika komputer: transformasi, kamera, rasterisasi, lighting, dan pipeline rendering.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana aplikasi seperti VR, simulator, dan aplikasi 3D interaktif dapat berjalan secara langsung, yaitu dengan memahami konsep **real-time graphics**, **frame**, dan **FPS**.

---

## Slide 011 - Real-Time Graphics, Frame, dan FPS

### Narasi

Dalam grafika komputer, **real-time graphics** adalah kemampuan sistem untuk menghasilkan gambar dengan cepat sehingga pengguna dapat berinteraksi secara langsung. Artinya, ketika pengguna memutar kamera, menggerakkan objek, atau mengubah tampilan, sistem harus segera memproses perubahan tersebut dan menampilkan hasilnya tanpa jeda yang terasa mengganggu.

Contoh penerapannya sangat dekat dengan kehidupan kita, misalnya pada **game**, **simulator**, **VR**, dan aplikasi 3D interaktif. Pada aplikasi seperti ini, gambar tidak cukup hanya benar secara visual, tetapi juga harus muncul cukup cepat agar interaksi terasa natural. Jika gambar terlambat muncul, pengguna akan merasakan lag atau keterlambatan respons.

Satu gambar lengkap yang dihasilkan oleh sistem disebut **frame**. Frame ini adalah hasil akhir dari proses grafika komputer, misalnya setelah objek 3D diproses, diproyeksikan, dan ditampilkan ke layar. Dalam konteks rendering, frame dapat kita bayangkan sebagai satu “potret” dari adegan pada waktu tertentu.

Ketika banyak frame ditampilkan secara berurutan dengan cepat, mata kita akan menangkapnya sebagai gerakan. Inilah prinsip dasar animasi dan video. Dalam grafika real-time, gerakan bukan berasal dari satu gambar statis, melainkan dari rangkaian frame yang terus diperbarui.

Untuk mengukur seberapa cepat frame ditampilkan, kita menggunakan istilah **FPS**, yaitu **Frames Per Second**. FPS menunjukkan jumlah frame yang ditampilkan dalam satu detik.

```text
30 FPS
60 FPS
90 FPS
120 FPS
```

Semakin tinggi nilai FPS, semakin banyak frame yang ditampilkan dalam satu detik, sehingga gerakan umumnya terasa lebih halus. Namun, hal penting yang perlu kita pahami adalah bahwa real-time graphics bukan hanya soal “banyak frame”, tetapi juga soal setiap frame harus selesai diproses dalam waktu yang sangat terbatas.

### Inti yang Harus Ditekankan

- **Real-time graphics** menuntut sistem menghasilkan gambar cukup cepat agar pengguna dapat berinteraksi secara langsung.
- Satu gambar lengkap disebut **frame**, dan rangkaian frame yang ditampilkan berurutan menghasilkan ilusi gerakan.
- **FPS** atau **Frames Per Second** adalah ukuran jumlah frame yang ditampilkan dalam satu detik.
- Nilai FPS seperti `30 FPS`, `60 FPS`, `90 FPS`, dan `120 FPS` menunjukkan tingkat kelancaran tampilan yang berbeda.
- Dalam real-time graphics, kecepatan tampilan sangat penting karena keterlambatan akan langsung terasa oleh pengguna.

### Transisi ke Slide Berikutnya

Setelah kita memahami FPS sebagai ukuran jumlah frame per detik, langkah berikutnya adalah melihat cara lain untuk mengukur performa real-time graphics, yaitu **frame time**, yang menunjukkan berapa lama waktu yang dibutuhkan untuk menghasilkan satu frame.

---

## Slide 012 - Frame Time

### Narasi

Setelah kita memahami **FPS** sebagai jumlah frame per detik, ada cara lain yang sering lebih praktis untuk menilai performa: **frame time**. Frame time adalah durasi waktu yang dibutuhkan untuk menghasilkan satu frame.

Rumus dasarnya sederhana:

```text
Frame Time = 1000 / FPS
```

Angka `1000` muncul karena satu detik sama dengan `1000 ms`. Jadi, jika sebuah aplikasi berjalan pada `60 FPS`, frame time-nya adalah `1000 / 60`, yaitu sekitar `16.67 ms/frame`. Pada `30 FPS`, frame time-nya menjadi `33.33 ms/frame`.

Secara intuisi, semakin kecil frame time, semakin cepat satu frame selesai diproses. Dalam konteks **real-time graphics**, hal ini penting karena pengguna mengharapkan respons yang langsung. Jika frame time terlalu panjang, gambar berikutnya datang terlambat, sehingga interaksi terasa lambat atau gerakan menjadi tidak mulus.

Kita juga perlu memahami bahwa frame time bukan hanya soal kecepatan akhir. Pada rendering pipeline, banyak tahap harus diselesaikan dalam satu frame: transformasi objek, pemrosesan geometri, rasterisasi, pencahayaan atau shading, hingga hasil akhir ditampilkan. Semua tahap tersebut harus muat dalam budget waktu yang sangat terbatas.

Karena itu, ketika kita nanti membahas kamera, shader, atau pipeline, frame time menjadi tolok ukur praktis: apakah proses rendering cukup cepat untuk mempertahankan target FPS? Jika targetnya `60 FPS`, kita punya sekitar `16.67 ms` untuk menyelesaikan satu frame. Jika proses melebihi waktu itu, FPS akan turun dan pengalaman visual menjadi kurang responsif.

### Inti yang Harus Ditekankan

- **Frame time** adalah waktu yang dibutuhkan untuk menghasilkan satu frame, biasanya dalam milidetik.
- Rumus `Frame Time = 1000 / FPS` menunjukkan hubungan terbalik antara FPS dan frame time.
- Semakin kecil frame time, semakin cepat frame selesai diproses dan semakin baik responsivitas real-time.
- Dalam rendering pipeline, semua tahap harus selesai dalam budget frame time agar FPS tetap stabil.

### Transisi ke Slide Berikutnya

Setelah kita memahami bagaimana performa diukur melalui FPS dan frame time, langkah berikutnya adalah melihat dari mana gambar tersebut berasal: bagaimana grafika merepresentasikan objek visual. Kita akan masuk ke tiga bentuk representasi grafika, yaitu raster, vector, dan 3D.

---

## Slide 013 - Tiga Bentuk Representasi Grafika

### Narasi

Sebelum masuk ke detail teknis, kita perlu memahami bahwa grafika komputer tidak hanya soal “menggambar gambar”. Intinya adalah bagaimana sebuah objek visual **direpresentasikan** di dalam sistem. Representasi menentukan bagaimana objek disimpan, diproses, di-render, dan akhirnya ditampilkan.

Kita dapat melihat tiga cabang utama:

```text
Graphics
├── Raster Graphics
├── Vector Graphics
└── 3D Graphics
```

Cara membaca diagramnya sederhana: dari akar `Graphics`, ada tiga bentuk representasi yang berbeda. Perbedaannya bukan pada jenis gambarnya saja, tetapi pada **cara objek didefinisikan** dan **cara objek itu digambar**.

`Raster Graphics` merepresentasikan gambar sebagai kumpulan **pixel**. Artinya, informasi visual disimpan dalam grid titik-titik diskrit. Bentuk ini sangat umum untuk foto, screenshot, texture, dan gambar yang sudah raster. Dalam pipeline rendering, raster graphics berkaitan erat dengan framebuffer dan proses rasterisasi, yaitu mengubah elemen visual menjadi pixel yang dapat ditampilkan.

`Vector Graphics` merepresentasikan objek sebagai **bentuk matematis**, misalnya garis, kurva, poligon, atau path. Objek tidak disimpan sebagai titik warna satu per satu, melainkan sebagai persamaan atau parameter geometri. Karena itu, vector graphics biasanya lebih mudah diskalakan tanpa kehilangan ketajaman bentuk. Dalam konteks grafika komputer, representasi ini penting untuk memahami bagaimana bentuk 2D didefinisikan sebelum diproses lebih lanjut.

`3D Graphics` merepresentasikan objek sebagai **geometry dalam ruang tiga dimensi**. Di sini, objek tidak hanya memiliki posisi pada bidang layar, tetapi juga memiliki struktur spasial seperti vertex, edge, face, atau mesh. Representasi ini menjadi dasar bagi transformasi, kamera, proyeksi, lighting, dan shading. Tanpa representasi 3D, konsep seperti model-view-projection atau rendering objek tiga dimensi tidak dapat dipahami secara utuh.

Tiga bentuk ini penting karena menentukan alur kerja dan struktur data yang digunakan. Raster berfokus pada pixel, vector berfokus pada bentuk matematis, dan 3D berfokus pada geometri spasial. Dalam praktik grafika komputer, ketiganya sering bertemu: model 3D dapat di-render menjadi gambar raster, bentuk vector dapat digunakan untuk UI atau path, dan pixel dapat menjadi texture pada objek 3D.

Sebelum lanjut, yang perlu dipahami adalah bahwa **representasi** adalah keputusan awal: apakah objek disimpan sebagai grid pixel, sebagai bentuk matematis, atau sebagai geometri 3D. Keputusan ini memengaruhi cara objek diproses, cara objek ditampilkan, dan bagian pipeline mana yang akan terlibat.

### Inti yang Harus Ditekankan

- Grafika komputer memiliki tiga bentuk representasi utama: **raster**, **vector**, dan **3D**.
- `Raster Graphics` berbasis **pixel**, sedangkan `Vector Graphics` berbasis **bentuk matematis**.
- `3D Graphics` berbasis **geometry dalam ruang tiga dimensi** dan menjadi dasar transformasi, kamera, proyeksi, dan rendering 3D.
- Perbedaan utama terletak pada cara objek direpresentasikan dan digambar, bukan hanya pada tampilan akhirnya.

### Transisi ke Slide Berikutnya

Setelah memahami tiga bentuk representasi ini, kita akan masuk ke bentuk yang paling dasar dalam tampilan layar, yaitu raster graphics dan pixel. Di sana kita akan melihat bagaimana pixel menyimpan informasi warna dan mengapa raster graphics cocok untuk foto, screenshot, texture, dan digital painting.

---

## Slide 014 - Raster Graphics dan Pixel

### Narasi

Setelah kita melihat bahwa grafika dapat direpresentasikan dalam beberapa bentuk, sekarang kita masuk ke salah satu bentuk yang paling sering kita temui, yaitu **raster graphics**. Raster graphics adalah representasi gambar yang tersusun dari kumpulan **pixel**. Pixel adalah elemen terkecil pada raster image, artinya gambar raster pada dasarnya dibangun dari titik-titik kecil yang tersusun dalam grid.

Setiap pixel biasanya menyimpan informasi warna. Dalam bentuk paling umum, pixel menyimpan tiga komponen warna:

```text
R, G, B
```

di mana `R` adalah red, `G` adalah green, dan `B` adalah blue. Kombinasi ketiga komponen ini menentukan warna yang ditampilkan pada pixel tersebut.

Pada banyak kasus, pixel juga menyimpan satu komponen tambahan:

```text
R, G, B, A
```

Komponen `A` adalah **alpha**, yang digunakan untuk mengatur **transparansi**. Dengan alpha, sebuah pixel tidak hanya memiliki warna, tetapi juga dapat dibuat lebih tembus pandang atau lebih pekat.

Secara visual, kita bisa membayangkan raster image seperti kanvas yang terbagi menjadi kotak-kotak kecil. Setiap kotak adalah satu pixel, dan setiap pixel memiliki nilai warna tertentu. Ketika kotak-kotak ini sangat banyak dan sangat kecil, mata kita melihatnya sebagai gambar yang utuh. Inilah mengapa raster graphics sangat cocok untuk konten visual yang detail dan bervariasi, seperti **foto**, **screenshot**, **texture**, dan **digital painting**.

Dalam grafika komputer, raster graphics penting karena banyak hasil akhir dari proses rendering ditampilkan sebagai gambar raster di layar. Selain itu, texture yang digunakan pada objek 3D juga sering kali berupa raster image. Jadi, meskipun kita nanti akan membahas geometri 3D, shader, dan lighting, banyak elemen visual yang akhirnya direpresentasikan atau ditampilkan dalam bentuk pixel.

Yang perlu kita pahami sejak awal adalah bahwa raster graphics bekerja berdasarkan **data per pixel**, bukan berdasarkan bentuk matematis seperti garis atau kurva. Karena sifatnya yang berbasis pixel, kualitas tampilan raster sangat berkaitan dengan jumlah pixel yang digunakan. Hal ini akan kita lihat lebih lanjut ketika membahas resolusi dan efek pixelation.

### Inti yang Harus Ditekankan

- **Raster graphics** tersusun dari kumpulan **pixel**, yang merupakan elemen terkecil pada raster image.
- Pixel biasanya menyimpan warna dalam bentuk `R, G, B` atau `R, G, B, A`, dengan `A` sebagai nilai **alpha** untuk transparansi.
- Raster graphics cocok untuk **foto**, **screenshot**, **texture**, dan **digital painting** karena mampu merepresentasikan detail warna yang kompleks.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa raster graphics adalah kumpulan pixel, langkah berikutnya adalah melihat bagaimana jumlah pixel menentukan **resolusi**, serta mengapa pembesaran gambar raster yang berlebihan dapat menimbulkan **pixelation**.

---

## Slide 015 - Resolusi dan Pixelation

### Narasi

Setelah kita memahami bahwa raster graphics dibangun dari kumpulan **pixel**, langkah berikutnya adalah melihat bagaimana ukuran gambar raster ditentukan. Ukuran tersebut biasanya dinyatakan sebagai **resolusi**, yaitu jumlah pixel yang menyusun gambar secara horizontal dan vertikal.

Contoh yang sering kita temui adalah:

```text
1920 × 1080
```

Artinya, gambar tersebut memiliki **1920 pixel horizontal** dan **1080 pixel vertikal**. Jika kita kalikan kedua nilai tersebut, maka total pixelnya adalah:

```text
1920 × 1080 = 2,073,600 pixel
```

Angka ini penting karena dalam rendering, setiap pixel pada grid tersebut pada akhirnya harus diberi nilai warna. Dalam konteks pipeline grafika komputer, tahap rasterisasi pada dasarnya menentukan warna untuk setiap posisi pixel pada framebuffer atau layar. Semakin tinggi resolusi, semakin banyak pixel yang harus dihitung, dan semakin besar pula beban komputasi yang dibutuhkan.

Namun, raster graphics memiliki sifat penting: resolusinya **tetap**. Artinya, gambar raster sudah memiliki jumlah pixel yang tetap sejak awal. Jika gambar tersebut diperbesar melebihi ukuran aslinya, sistem tidak memiliki pixel tambahan yang cukup untuk mengisi area yang membesar. Akibatnya, pixel-pixel yang ada akan terlihat membesar dan membentuk kotak-kotak yang jelas.

Fenomena inilah yang disebut **pixelation**. Pixelation biasanya muncul ketika gambar raster diperbesar terlalu jauh, ditampilkan pada layar dengan resolusi lebih tinggi tanpa interpolasi yang baik, atau digunakan pada ukuran yang jauh melebihi resolusi aslinya.

Hal yang perlu kita pahami di sini adalah bahwa pixelation bukan sekadar masalah visual, tetapi konsekuensi langsung dari representasi raster yang berbasis grid pixel tetap. Dalam aplikasi grafika komputer, hal ini memengaruhi pemilihan resolusi tekstur, ukuran framebuffer, kualitas tampilan, serta strategi rendering agar gambar tetap tajam dan efisien.

### Inti yang Harus Ditekankan

- **Resolusi** pada raster graphics menunjukkan jumlah pixel horizontal dan vertikal.
- Contoh `1920 × 1080` berarti gambar memiliki **2,073,600 pixel**.
- Raster graphics memiliki **resolusi tetap**, sehingga jumlah pixel tidak bertambah saat gambar diperbesar.
- **Pixelation** terjadi ketika gambar raster diperbesar melebihi resolusi aslinya, sehingga pixel terlihat membesar dan membentuk kotak-kotak.
- Dalam rendering, resolusi menentukan jumlah pixel yang harus dihitung pada framebuffer atau layar.

### Transisi ke Slide Berikutnya

Karena raster graphics bergantung pada grid pixel yang tetap, ada keterbatasan ketika gambar perlu ditampilkan pada berbagai ukuran. Untuk mengatasi keterbatasan tersebut, kita akan melihat representasi lain yang tidak bergantung pada susunan pixel, yaitu **vector graphics**.

---

## Slide 016 - Vector Graphics

### Narasi

Kita baru saja melihat bahwa gambar raster ditentukan oleh jumlah pixel, sehingga ketika diperbesar terlalu jauh dapat muncul **pixelation**. Pada slide ini, kita beralih ke representasi yang berbeda, yaitu **vector graphics**.

**Vector graphics** menggunakan bentuk matematis untuk menggambarkan objek visual. Bentuk-bentuk tersebut dapat berupa `point`, `line`, `curve`, `circle`, dan `polygon`. Artinya, objek tidak disimpan sebagai kumpulan pixel, melainkan sebagai deskripsi geometris yang dapat dihitung ulang.

Misalnya, sebuah lingkaran dapat digambarkan melalui informasi geometris seperti pusat dan radius, sedangkan polygon dapat digambarkan melalui titik-titik sudutnya. Dengan cara ini, sistem tidak perlu menyimpan setiap pixel secara eksplisit, tetapi cukup menyimpan aturan atau bentuk matematis yang membentuk objek.

Konsekuensi penting dari representasi ini adalah sifat **resolution independent**. Karena bentuk vektor berbasis deskripsi matematis, objek dapat dirender ulang pada ukuran atau resolusi yang berbeda tanpa kehilangan ketajaman bentuknya. Inilah yang membuat vector graphics tetap tajam saat diperbesar atau diperkecil.

Sifat tersebut sangat berguna untuk elemen visual yang membutuhkan presisi bentuk dan skalabilitas, seperti **logo**, **icon**, **diagram**, dan **ilustrasi**. Pada elemen-elemen ini, garis tepi, proporsi, dan struktur bentuk biasanya lebih penting daripada detail warna pixel yang sangat kompleks.

Beberapa format umum yang menggunakan representasi vektor adalah `SVG`, `AI`, `EPS`, dan `PDF`. Format-format ini dapat menyimpan deskripsi bentuk matematis sehingga objek visual dapat ditampilkan atau dicetak pada berbagai ukuran tanpa bergantung pada satu grid pixel tertentu.

Dalam konteks grafika komputer, vector graphics dapat dipandang sebagai representasi geometri. Bentuk-bentuk vektor ini kemudian dapat diproses lebih lanjut, misalnya melalui transformasi, clipping, atau rasterisasi, sebelum akhirnya ditampilkan sebagai pixel pada layar.

### Inti yang Harus Ditekankan

- **Vector graphics** merepresentasikan objek sebagai bentuk matematis seperti `point`, `line`, `curve`, `circle`, dan `polygon`.
- Karena tidak bergantung pada susunan pixel tetap, vector graphics bersifat **resolution independent**.
- Representasi ini cocok untuk **logo**, **icon**, **diagram**, dan **ilustrasi** karena tetap tajam saat diperbesar.
- Format umum vector graphics antara lain `SVG`, `AI`, `EPS`, dan `PDF`.
- Dalam rendering pipeline, bentuk vektor dapat menjadi input geometri yang kemudian diproses dan dirasterisasi sesuai target resolusi.

### Transisi ke Slide Berikutnya

Setelah memahami sifat dasar vector graphics, kita akan membandingkannya secara langsung dengan raster graphics untuk melihat kapan masing-masing representasi lebih sesuai digunakan.

---

## Slide 017 - Raster vs Vector

### Narasi

Dalam grafika komputer, kita perlu memahami bahwa gambar tidak hanya “terlihat” di layar, tetapi juga harus disimpan, diproses, dan dirender oleh sistem. Di sini ada dua pendekatan utama yang sering kita temui: **raster** dan **vector**. Keduanya sama-sama merepresentasikan objek visual, tetapi cara berpikirnya berbeda.

**Raster** adalah representasi gambar yang berbasis `pixel`. Artinya, sebuah gambar raster terdiri dari grid titik-titik warna yang tersusun dalam baris dan kolom. Karena grid ini memiliki ukuran tertentu, maka gambar raster memiliki **resolusi tetap**. Jika gambar diperbesar, ukuran `pixel` ikut terlihat, sehingga muncul efek **pixelation**. Karakter ini membuat raster sangat cocok untuk foto, karena foto biasanya memiliki detail warna yang tinggi dan bergantung pada sampling warna di setiap `pixel`.

Sebaliknya, **vector** adalah representasi gambar yang berbasis **bentuk matematis**. Bentuk-bentuk seperti `point`, `line`, `curve`, `circle`, dan `polygon` didefinisikan menggunakan persamaan atau parameter geometris. Karena tidak bergantung pada susunan `pixel` yang tetap, vector bersifat **resolution independent**. Artinya, ketika gambar diperbesar, bentuknya dapat dihitung ulang sehingga tetap tajam. Inilah mengapa vector sering digunakan untuk logo, diagram, dan ilustrasi yang membutuhkan presisi bentuk.

Tabel pada slide ini sebaiknya tidak dibaca sebagai daftar keunggulan satu sama lain, tetapi sebagai **perbandingan trade-off**. Kolom kiri menggambarkan karakter **raster**, sedangkan kolom kanan menggambarkan karakter **vector**. Baris-barisnya menunjukkan perbedaan pada representasi dasar, perilaku terhadap resolusi, penggunaan yang paling sesuai, jenis detail yang ditonjolkan, serta hasil visual saat gambar diperbesar. Intinya, raster kuat pada **detail warna**, sedangkan vector kuat pada **struktur bentuk**.

Perbedaan ini juga penting dalam konteks **rendering pipeline**. Pada akhirnya, apa yang ditampilkan ke layar hampir selalu berupa `pixel` di `framebuffer`. Gambar raster sudah berada dalam bentuk yang dekat dengan tahap akhir rendering. Sementara itu, gambar vector biasanya perlu melewati proses **rasterization**, yaitu mengubah bentuk matematis menjadi kumpulan `pixel` yang dapat ditampilkan. Dengan kata lain, vector adalah representasi geometris, tetapi untuk tampil di layar, ia harus diterjemahkan ke domain raster.

Poin penting yang harus kita pegang adalah: **tidak ada representasi yang selalu lebih baik**. Pilihan antara raster dan vector bergantung pada kebutuhan aplikasi. Jika kita ingin menampilkan foto, tekstur, atau gambar dengan variasi warna yang kaya, raster biasanya lebih sesuai. Jika kita ingin membuat logo, diagram, atau bentuk yang harus tetap tajam pada berbagai ukuran, vector lebih tepat. Dalam banyak sistem grafika modern, keduanya sering digunakan bersama, bukan sebagai pengganti satu sama lain.

### Inti yang Harus Ditekankan

- **Raster** berbasis `pixel`, memiliki **resolusi tetap**, cocok untuk foto, tetapi dapat mengalami **pixelation** saat diperbesar.
- **Vector** berbasis **bentuk matematis**, bersifat **resolution independent**, dan tetap tajam saat diperbesar.
- Dalam rendering, bentuk vector pada akhirnya perlu melalui **rasterization** agar menjadi `pixel` yang dapat ditampilkan di layar.
- Tidak ada representasi yang selalu lebih baik; pemilihan raster atau vector bergantung pada kebutuhan visual dan teknis.

### Transisi ke Slide Berikutnya

Setelah kita memahami dua cara merepresentasikan gambar pada bidang dua dimensi, yaitu raster dan vector, kita akan melangkah ke representasi yang lebih umum dalam grafika komputer modern, yaitu **3D graphics**. Di sana, objek tidak lagi hanya didefinisikan pada bidang `x` dan `y`, tetapi juga memiliki dimensi kedalaman, sehingga sistem koordinat menjadi dasar untuk menentukan posisi dan orientasi objek di ruang virtual.

---

## Slide 018 - Apa Itu 3D Graphics?

### Narasi

Setelah representasi 2D, kita masuk ke **3D graphics**. Intinya, objek tidak lagi digambarkan hanya pada bidang layar, tetapi direpresentasikan dalam **tiga dimensi**. Dalam ruang virtual, setiap titik memiliki posisi yang dapat dijelaskan oleh tiga nilai: `x`, `y`, dan `z`.

```text
X → Width
Y → Height
Z → Depth
```

Sumbu `X` biasanya menggambarkan lebar, sumbu `Y` menggambarkan tinggi, dan sumbu `Z` menggambarkan kedalaman. Penambahan sumbu `Z` inilah yang membedakan representasi 2D dari representasi 3D. Tanpa `Z`, kita hanya bisa mendeskripsikan posisi pada bidang; dengan `Z`, kita bisa mendeskripsikan posisi di ruang.

Pada representasi 2D, sebuah titik ditulis sebagai:

```text
P = (x, y)
```

Sementara pada representasi 3D, titik yang sama diperluas menjadi:

```text
P = (x, y, z)
```

Perluasan ini sederhana secara notasi, tetapi dampaknya besar. Setiap vertex mesh, posisi kamera, arah pencahayaan, atau transformasi objek pada akhirnya bergantung pada sistem koordinat 3D.

**Sistem koordinat** berfungsi sebagai bahasa bersama untuk menentukan **posisi** dan **orientasi** objek di ruang virtual. Misalnya, sebuah kubus tidak cukup hanya digambar sebagai bentuk; posisinya harus diketahui relatif terhadap sumbu `X`, `Y`, dan `Z`. Dari sinilah proses seperti transformasi, penempatan kamera, dan proyeksi ke layar nanti dapat dilakukan.

Sebelum lanjut, mahasiswa perlu memahami bahwa **koordinat 3D** bukan sekadar tambahan angka ketiga. Koordinat ini menjadi dasar bagi seluruh pipeline grafika komputer: geometri didefinisikan dalam ruang 3D, kemudian diproses melalui transformasi, kamera, proyeksi, dan akhirnya rasterisasi menjadi gambar 2D di layar.

### Inti yang Harus Ditekankan

- **3D graphics** merepresentasikan objek dalam tiga dimensi, bukan hanya bidang 2D.
- Koordinat 3D ditulis sebagai `P = (x, y, z)`, dengan `z` menyatakan kedalaman.
- Sumbu `X`, `Y`, dan `Z` digunakan untuk menentukan **posisi** dan **orientasi** objek di ruang virtual.
- Sistem koordinat 3D adalah dasar bagi transformasi, kamera, proyeksi, dan rendering pipeline.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana koordinat 3D ini disusun secara formal dalam **Cartesian Coordinate System**, termasuk peran sumbu dalam mendeskripsikan posisi, arah, rotasi, dan transformasi.

---

## Slide 019 - Cartesian Coordinate System

### Narasi

Dalam grafika komputer, setiap titik di ruang virtual harus memiliki “alamat” yang konsisten. **Sistem koordinat Kartesius** memberikan alamat tersebut melalui tiga sumbu utama: `X`, `Y`, dan `Z`. Tanpa sistem ini, kita tidak punya acuan yang jelas untuk menempatkan objek, memutar objek, atau membandingkan posisi satu titik dengan titik lain.

```text
        Y
        ↑
        |
        O────→ X
       /
      /
     Z
```

Pada diagram ini, titik `O` adalah **origin**, yaitu titik acuan dengan koordinat `0, 0, 0`. Sumbu `X` biasanya menunjukkan arah horizontal, sumbu `Y` menunjukkan arah vertikal, dan sumbu `Z` digambarkan secara diagonal untuk merepresentasikan dimensi kedalaman. Posisi sebuah titik 3D kemudian ditulis sebagai `P = (x, y, z)`, yang artinya titik tersebut berada pada pergeseran tertentu dari origin sepanjang masing-masing sumbu.

Sumbu koordinat bukan hanya gambar bantu. Sumbu ini menjadi dasar untuk mendeskripsikan **posisi**, **arah**, **rotasi**, dan **transformasi** objek. Misalnya, ketika kita menggeser objek, kita mengubah nilai koordinatnya. Ketika kita memutar objek, kita mengubah orientasi titik-titiknya relatif terhadap sumbu. Ketika kita memperbesar atau memperkecil objek, kita mengubah jarak titik-titik tersebut dari origin atau dari pusat transformasi.

Dalam konteks rendering pipeline, sistem koordinat ini menjadi fondasi awal. Setiap **vertex** yang nanti membentuk objek 3D akan disimpan sebagai koordinat dalam sistem ini. Koordinat tersebut kemudian diproses melalui transformasi model, transformasi kamera, proyeksi, dan akhirnya rasterisasi menjadi piksel di layar. Jadi, sebelum kamera “melihat” objek, objek itu harus sudah memiliki posisi yang terdefinisi dalam ruang koordinat.

Hal penting yang perlu diperhatikan adalah orientasi sumbu tidak selalu sama di semua software atau graphics API. Ada sistem yang menggunakan konvensi `right-handed`, ada yang menggunakan `left-handed`, dan ada pula perbedaan apakah sumbu `Y` atau sumbu `Z` yang dianggap sebagai arah “atas”. Karena itu, ketika kita membaca dokumentasi, contoh kode, atau spesifikasi API, kita perlu tahu konvensi koordinat yang sedang digunakan agar tidak salah menafsirkan posisi atau arah objek.

Sebelum lanjut ke pembahasan objek 3D, mahasiswa perlu memahami bahwa koordinat adalah representasi titik, bukan objek utuh. Objek 3D yang kompleks akan dibangun dari banyak titik koordinat yang saling terhubung. Pemahaman tentang sumbu, origin, dan orientasi koordinat akan sangat membantu ketika kita nanti membahas bagaimana titik-titik tersebut disusun menjadi struktur geometri.

### Inti yang Harus Ditekankan

- **Sistem koordinat Kartesius** memberi acuan posisi titik 3D melalui sumbu `X`, `Y`, dan `Z` dengan titik acuan **origin** `O`.
- Sumbu koordinat menjadi dasar untuk mendeskripsikan **posisi**, **arah**, **rotasi**, dan **transformasi** objek dalam ruang virtual.
- Orientasi sumbu dapat berbeda antar software dan graphics API, misalnya perbedaan konvensi `right-handed` dan `left-handed`, sehingga penting untuk memahami konvensi yang digunakan.

### Transisi ke Slide Berikutnya

Setelah kita memahami bagaimana titik diberi posisi dalam ruang 3D, langkah berikutnya adalah melihat bagaimana titik-titik tersebut disusun menjadi objek. Pada slide berikutnya, kita akan membahas bagaimana `vertex` menjadi `edge`, `face`, `triangle`, dan akhirnya membentuk `mesh`.

---

## Slide 020 - Dari Vertex Menjadi Mesh

### Narasi

Setelah kita memahami **Cartesian Coordinate System**, langkah berikutnya adalah memahami bagaimana objek 3D direpresentasikan dalam grafika komputer. Objek 3D tidak langsung muncul sebagai gambar utuh di layar, melainkan dibangun dari struktur **geometry** yang lebih kecil dan lebih terstruktur.

```text
Vertex
 ↓
Edge
 ↓
Face
 ↓
Triangle
 ↓
Mesh
```

Diagram ini menunjukkan alur pembentukan objek 3D dari elemen paling dasar menuju bentuk yang lebih kompleks. Kita bisa membacanya dari atas ke bawah.

**Vertex** adalah titik dasar dalam ruang. Dari titik-titik tersebut, terbentuk **edge**, yaitu garis penghubung antar vertex. Edge-edge tersebut kemudian membentuk **face**, yaitu permukaan. Dalam banyak sistem grafika, face sering dipecah menjadi **triangle** karena triangle merupakan bentuk geometri yang sederhana, stabil, dan mudah diproses oleh GPU.

Kumpulan triangle atau face inilah yang membentuk **mesh**. Jadi, mesh bukan sekadar “bentuk objek”, tetapi struktur data yang berisi informasi geometri objek 3D. Mesh inilah yang kemudian dapat ditransformasikan, diproyeksikan, diberi material, diterangi, dan akhirnya dirender.

Konsep ini sangat penting karena menjadi dasar hampir semua sistem grafika modern. Dalam `WebGL`, `Three.js`, `Blender`, maupun `Unity`, objek 3D pada akhirnya tetap direpresentasikan melalui elemen-elemen geometry seperti vertex, edge, face, triangle, dan mesh.

Sebelum lanjut ke detail teknis, yang perlu kita pegang adalah: objek 3D dalam grafika komputer dibangun secara hierarkis dari elemen geometry. Memahami alur dari **vertex** menuju **mesh** akan membantu kita memahami bagaimana objek diproses dalam rendering pipeline.

### Inti yang Harus Ditekankan

- Objek 3D direpresentasikan sebagai **mesh**, yaitu kumpulan elemen geometry.
- Alur dasar pembentukan objek 3D adalah: `Vertex` → `Edge` → `Face` → `Triangle` → `Mesh`.
- Konsep ini menjadi fondasi dalam `WebGL`, `Three.js`, `Blender`, `Unity`, dan pipeline rendering.

### Transisi ke Slide Berikutnya

Setelah kita melihat gambaran besarnya, pada slide berikutnya kita akan membedah satu per satu elemen geometry tersebut: apa itu **vertex**, **edge**, dan **face**, serta bagaimana vertex dapat membawa atribut tambahan.

---

## Slide 021 - Vertex, Edge, dan Face

### Narasi

Kita mulai dari elemen paling dasar yang membentuk objek 3D, yaitu **Vertex**, **Edge**, dan **Face**. Dalam grafika komputer, objek tidak langsung direpresentasikan sebagai bentuk utuh, melainkan sebagai kumpulan titik, garis, dan permukaan yang dapat diproses oleh komputer.

**Vertex** adalah titik dalam ruang. Pada slide ini diberikan contoh:

```text
V0 = (0, 0, 0)
V1 = (1, 0, 0)
V2 = (0, 1, 0)
```

Koordinat tersebut menunjukkan posisi titik pada sumbu `x`, `y`, dan `z`. `V0` berada di origin, `V1` bergeser satu satuan ke arah sumbu `x`, dan `V2` bergeser satu satuan ke arah sumbu `y`. Dalam implementasi nyata, vertex tidak hanya menyimpan posisi. Vertex juga dapat memiliki atribut tambahan seperti `color`, `normal`, dan `texture coordinate`. Atribut inilah yang kemudian membantu proses pewarnaan, pencahayaan, dan pemetaan tekstur.

**Edge** adalah garis penghubung antara dua vertex. Edge memberi struktur hubungan antar titik, sehingga posisi vertex tidak lagi berdiri sendiri. Dari beberapa edge, kita dapat membentuk batas suatu permukaan.

**Face** adalah permukaan yang dibentuk oleh beberapa vertex. Face menjadi penting karena ia menentukan area objek yang akan terlihat oleh kamera dan kemudian diproses menuju layar. Dalam grafika 3D, face menjadi salah satu cara untuk merepresentasikan bentuk objek secara visual.

Dalam konteks rendering pipeline, vertex adalah salah satu input utama yang diproses oleh GPU. Posisi vertex akan melewati tahap transformasi, kemudian digunakan untuk membentuk primitive seperti garis atau permukaan. Setelah itu, proses rasterisasi mengubah primitive tersebut menjadi pixel pada layar. Jadi, memahami vertex, edge, dan face berarti memahami titik awal dari representasi geometri sebelum objek dirender.

Sebelum lanjut, hal penting yang perlu dipahami adalah bahwa vertex bukan sekadar koordinat, melainkan data geometri yang dapat membawa informasi visual. Edge menunjukkan hubungan antar vertex, dan face menunjukkan permukaan yang membentuk objek. Ketiganya menjadi dasar untuk membangun mesh yang lebih kompleks.

### Inti yang Harus Ditekankan

- **Vertex** adalah titik dalam ruang, biasanya direpresentasikan sebagai koordinat seperti `V0 = (0, 0, 0)`.
- Vertex dapat memiliki atribut tambahan seperti `color`, `normal`, dan `texture coordinate` untuk mendukung rendering.
- **Edge** menghubungkan dua vertex dan membentuk struktur geometri.
- **Face** adalah permukaan yang dibentuk oleh beberapa vertex, dan menjadi dasar representasi objek 3D.
- Vertex, edge, dan face merupakan input awal dalam rendering pipeline sebelum diproses oleh GPU.

### Transisi ke Slide Berikutnya

Jika vertex, edge, dan face adalah bahan dasar geometri, maka pertanyaan berikutnya adalah mengapa bentuk tertentu, yaitu triangle, menjadi pilihan utama dalam grafika 3D.

---

## Slide 022 - Mengapa Triangle Sangat Penting?

### Narasi

Setelah kita mengenal `vertex`, `edge`, dan `face`, pertanyaan berikutnya adalah mengapa bentuk yang paling sering digunakan dalam grafika 3D adalah **triangle**. Dalam banyak sistem grafika, **triangle** menjadi **primitive utama** karena ia adalah bentuk poligon paling sederhana yang masih dapat membentuk permukaan tertutup. Dengan tiga titik, yaitu `V0`, `V1`, dan `V2`, kita sudah dapat membuat satu permukaan kecil yang siap diproses lebih lanjut oleh pipeline rendering.

Alasan pertama yang penting adalah **triangle selalu planar**. Selama ketiga vertex tidak berada pada satu garis lurus, tiga titik tersebut pasti berada pada satu bidang datar. Sifat ini sangat berguna karena permukaan triangle tidak mengalami ambiguitas bentuk. Bandingkan dengan poligon yang memiliki empat vertex atau lebih: bentuknya bisa menjadi tidak planar, sehingga perhitungan permukaan dan interpolasi atribut menjadi lebih rumit. Karena triangle selalu planar, proses seperti interpolasi `color`, `normal`, dan `texture coordinate` di dalam permukaan menjadi lebih stabil dan mudah diprediksi.

Alasan kedua adalah triangle **sederhana** dan **mudah dihitung**. Karena hanya melibatkan tiga vertex, banyak operasi geometri menjadi lebih ringan. Misalnya, menentukan posisi titik di dalam triangle, menghitung normal permukaan, atau melakukan interpolasi nilai atribut dari vertex ke fragment lebih mudah dilakukan pada triangle daripada pada poligon yang lebih kompleks. Sifat sederhana ini membuat triangle menjadi unit kerja yang sangat cocok untuk pemrosesan massal pada perangkat keras.

Alasan ketiga berkaitan dengan efisiensi **GPU**. Pipeline grafika modern sangat dioptimalkan untuk memproses triangle. Dari tahap geometri hingga **rasterisasi**, triangle menjadi bentuk yang sangat familiar bagi perangkat keras. GPU dapat memproses banyak triangle secara paralel, sehingga bentuk kompleks dapat dirender dengan cepat. Jika kita menggunakan poligon besar yang tidak beraturan, perangkat keras biasanya harus memecahnya menjadi triangle terlebih dahulu. Oleh karena itu, menggunakan triangle sejak awal membuat alur rendering lebih langsung dan efisien.

Meskipun triangle terlihat sederhana, bentuk ini sangat kuat untuk menyusun objek yang kompleks. Hampir semua objek 3D pada akhirnya dapat direpresentasikan sebagai kumpulan triangle. Permukaan lengkung, karakter, bangunan, atau objek game dapat didekati dengan banyak triangle yang saling terhubung. Semakin banyak triangle yang digunakan, semakin halus bentuk yang dihasilkan, tetapi juga semakin besar biaya pemrosesan geometri.

```text
       V2
       ●
      / \
     /   \
    ●─────●
   V0     V1
```

Diagram pada slide menunjukkan satu triangle yang dibentuk oleh tiga vertex: `V0`, `V1`, dan `V2`. Tiga vertex tersebut dihubungkan oleh edge, dan area di dalamnya membentuk satu **face**. Dalam konteks grafika komputer, satu triangle seperti ini adalah unit dasar yang kemudian dapat digabungkan menjadi geometri yang lebih besar.

### Inti yang Harus Ditekankan

- **Triangle** adalah primitive utama dalam grafika 3D karena sederhana, planar, dan mudah diproses.
- Sifat **planar** membuat perhitungan permukaan dan interpolasi atribut menjadi lebih stabil.
- **GPU** sangat dioptimalkan untuk memproses triangle, sehingga triangle penting untuk rendering yang efisien.
- Objek 3D kompleks dapat dibentuk dari kumpulan triangle, tetapi jumlah triangle memengaruhi biaya pemrosesan.

### Transisi ke Slide Berikutnya

Setelah kita memahami mengapa triangle menjadi unit dasar, langkah berikutnya adalah melihat bagaimana banyak triangle dikumpulkan menjadi **mesh**, serta bagaimana **polygon count** memengaruhi kompleksitas dan biaya pemrosesan geometri.

---

## Slide 023 - Mesh dan Polygon Count

### Narasi

Setelah kita memahami bahwa **triangle** adalah primitive utama dalam grafika 3D, langkah berikutnya adalah melihat bagaimana banyak triangle tersebut disusun menjadi bentuk yang lebih besar. Bentuk yang lebih besar ini disebut **mesh**.

Secara sederhana, **mesh** adalah kumpulan `vertex`, `edge`, dan `face`. `Vertex` adalah titik koordinat, `edge` adalah garis yang menghubungkan vertex, dan `face` adalah permukaan yang dibentuk oleh beberapa vertex, biasanya berupa triangle. Jadi, mesh bukan hanya sekumpulan titik, melainkan struktur geometri yang memiliki hubungan antar titik dan permukaan.

Dalam grafika komputer, mesh menggambarkan bentuk geometris objek. Misalnya, sebuah **cube** dapat direpresentasikan dengan sedikit triangle, karena bentuknya sederhana. **Simple prop** seperti meja, kotak, atau batu mungkin membutuhkan ratusan hingga ribuan triangle agar bentuknya cukup detail. Sementara itu, **character** seperti manusia atau hewan dapat membutuhkan puluhan ribu triangle karena harus merepresentasikan wajah, pakaian, rambut, dan bentuk tubuh yang kompleks.

Perlu kita tekankan bahwa `polygon count` atau `triangle count` bukan sekadar angka. Angka ini berkaitan langsung dengan biaya pemrosesan geometry. Semakin tinggi triangle count, semakin banyak data yang harus dibaca, ditransformasikan, dan diproses oleh GPU. Dalam pipeline rendering, tahap geometry processing biasanya melibatkan transformasi vertex, clipping, rasterisasi, dan perhitungan warna atau shading. Semakin banyak triangle, semakin banyak operasi yang harus dilakukan sebelum gambar akhir terbentuk.

Namun, triangle count yang tinggi tidak selalu berarti lebih baik. Yang penting adalah memilih tingkat detail yang sesuai dengan kebutuhan visual dan performa. Objek yang jauh dari kamera biasanya tidak perlu detail tinggi, sedangkan objek dekat kamera dapat menggunakan mesh yang lebih halus. Prinsip ini penting agar aplikasi grafika tetap berjalan real-time, terutama pada game atau visualisasi interaktif.

Sebelum lanjut, mahasiswa perlu memahami bahwa mesh adalah representasi geometri, sedangkan polygon count adalah ukuran kompleksitas geometri. Konsep ini menjadi dasar untuk memahami bagaimana objek 3D diproses, di-render, dan dioptimalkan.

### Inti yang Harus Ditekankan

- **Mesh** adalah struktur geometri yang terdiri dari `vertex`, `edge`, dan `face`.
- `Polygon count` atau `triangle count` menunjukkan kompleksitas mesh dan memengaruhi biaya pemrosesan geometry.
- Semakin tinggi triangle count, semakin besar beban GPU, terutama pada tahap transformasi, rasterisasi, dan rendering.
- Detail mesh harus seimbang antara kualitas visual dan performa real-time.

### Transisi ke Slide Berikutnya

Setelah kita memahami bahwa mesh adalah bentuk geometri objek, langkah berikutnya adalah melihat bagaimana mesh tersebut menjadi bagian dari sebuah **object** yang lebih lengkap, lengkap dengan transform, material, dan properti lain.

---

## Slide 024 - Object dan Transform

### Narasi

Setelah kita memahami bahwa **mesh** adalah representasi geometris berupa kumpulan vertex, edge, dan face, kita perlu melangkah ke level yang lebih praktis: **Object**. Dalam grafika komputer, sebuah object biasanya tidak hanya berupa bentuk geometri saja, tetapi juga berisi informasi tambahan yang membuatnya dapat diposisikan, ditampilkan, dan diproses dalam sebuah dunia virtual.

Kita bisa membayangkan object sebagai “paket” yang memuat beberapa komponen penting. Pada slide ini, struktur object ditampilkan sebagai pohon:

```text
Object
├── Mesh
├── Transform
├── Material
├── Texture
└── Other Properties
```

Artinya, **Mesh** menentukan bentuk objek, **Transform** menentukan posisi dan orientasinya, **Material** dan **Texture** memengaruhi penampilannya, sedangkan **Other Properties** dapat berisi informasi tambahan seperti tag, collider, animasi, atau parameter khusus lainnya.

Bagian yang sangat penting di sini adalah **Transform**. Transform adalah komponen yang menentukan bagaimana object berada dalam ruang. Ia biasanya terdiri dari tiga properti utama:

```text
Transform
├── Position (x, y, z)
├── Rotation (x, y, z)
└── Scale    (x, y, z)
```

**Position** menentukan di mana object berada pada sumbu `x`, `y`, dan `z`. **Rotation** menentukan orientasi object, misalnya berputar mengelilingi sumbu tertentu. **Scale** menentukan ukuran object, apakah diperkecil, diperbesar, atau distretch pada satu atau beberapa sumbu.

Intuisi pentingnya adalah ini: mesh biasanya didefinisikan dalam koordinat lokal, misalnya sebuah kubus yang pusatnya berada di titik asal. Namun, untuk menampilkan kubus itu di lokasi tertentu, kita tidak perlu mengubah bentuk mesh-nya. Kita cukup mengubah **Transform** object tersebut. Dengan cara ini, satu mesh yang sama dapat digunakan berkali-kali dengan posisi, rotasi, dan skala yang berbeda.

Dalam rendering pipeline, transform menjadi sangat penting karena vertex-vertex dari mesh akan diproses berdasarkan transform object ini. Secara sederhana, posisi vertex lokal akan diubah ke posisi dunia, kemudian diproses lebih lanjut oleh kamera, proyeksi, dan rasterisasi. Dalam implementasi modern, transform seperti position, rotation, dan scale sering dikombinasikan menjadi matriks transformasi yang kemudian digunakan oleh GPU, misalnya pada vertex shader.

Jadi, yang harus kita pahami sebelum lanjut adalah: **object bukan hanya bentuk geometri**. Object adalah entitas yang menggabungkan geometri, transformasi, dan properti visual lainnya. Pemahaman ini menjadi dasar untuk memahami bagaimana sebuah scene dibangun, karena scene pada dasarnya adalah kumpulan object yang saling berada dalam ruang yang sama.

### Inti yang Harus Ditekankan

- **Object** adalah entitas yang memuat **Mesh**, **Transform**, **Material**, **Texture**, dan properti lain.
- **Mesh** menentukan bentuk geometris, sedangkan **Transform** menentukan posisi, rotasi, dan skala object.
- **Position**, **Rotation**, dan **Scale** masing-masing memiliki komponen `x`, `y`, dan `z`.
- Transform memungkinkan satu mesh digunakan berulang kali dengan penempatan dan orientasi yang berbeda.
- Transform menjadi jembatan antara geometri objek dan proses rendering seperti transformasi dunia, kamera, dan rasterisasi.

### Transisi ke Slide Berikutnya

Setelah kita memahami bahwa object adalah unit dasar yang memiliki bentuk, transformasi, dan properti visual, langkah berikutnya adalah melihat bagaimana beberapa object dikumpulkan menjadi satu dunia virtual. Pada slide berikutnya, kita akan membahas **Scene**, yaitu kumpulan object, kamera, dan elemen lain yang akan diproses dan dirender menjadi gambar.

---

## Slide 025 - Scene

### Narasi

Setelah kita memahami **Object** sebagai gabungan mesh, transform, material, dan properti lain, langkah berikutnya adalah menempatkan object-object tersebut ke dalam satu struktur yang lebih besar, yaitu **Scene**.

```text
Scene
├── Camera
├── Light
├── Character
├── Ground
├── Building
├── Tree
└── Other Objects
```

Secara intuitif, **Scene** adalah dunia virtual yang sedang kita bangun. Di dalamnya tidak hanya ada objek geometri seperti karakter, tanah, bangunan, atau pohon, tetapi juga komponen pendukung seperti **Camera** dan **Light**. Camera menentukan dari mana dunia itu dilihat, sedangkan light membantu menentukan bagaimana objek terlihat.

Dalam grafika komputer, **Scene** penting karena menjadi input utama proses rendering. Renderer tidak cukup hanya memiliki satu objek; ia perlu tahu objek apa saja yang ada, posisi dan orientasinya, bagaimana objek tersebut berhubungan satu sama lain, serta bagaimana kamera dan pencahayaan memengaruhi tampilan akhir. Dengan kata lain, **Scene** adalah representasi dari seluruh elemen visual yang akan diproses menjadi gambar.

Kita perlu memahami bahwa **Scene** bukan sekadar daftar objek, melainkan struktur yang menyatukan geometri, transformasi, material, pencahayaan, dan pandangan kamera. Pemahaman ini menjadi dasar sebelum kita masuk ke komponen yang menentukan tampilan scene secara lebih spesifik.

### Inti yang Harus Ditekankan

- **Scene** adalah kumpulan komponen yang membentuk dunia virtual.
- Komponen scene dapat mencakup objek geometri, **Camera**, dan **Light**.
- **Scene** menjadi input utama rendering pipeline karena menentukan apa yang akan diproses dan dirender.
- Pemahaman scene membantu mahasiswa melihat hubungan antara objek, transformasi, kamera, dan pencahayaan.

### Transisi ke Slide Berikutnya

Setelah scene terbentuk, dua komponen yang sangat menentukan tampilan akhir adalah **Camera** dan **Light**. Selanjutnya kita akan membahas bagaimana kamera memilih bagian scene yang terlihat dan bagaimana light memengaruhi penampakan objek.

---

## Slide 026 - Camera dan Light

### Narasi

Setelah kita memahami **Scene** sebagai kumpulan objek yang membentuk dunia virtual, langkah berikutnya adalah memahami dua komponen yang menentukan bagaimana dunia itu terlihat: **Camera** dan **Light**. Tanpa kamera, scene hanya berupa data geometri dan transformasi yang belum memiliki sudut pandang. Tanpa cahaya, objek akan tampak datar dan sulit dibedakan satu sama lain.

**Camera** berfungsi menentukan bagian scene yang akan ditampilkan. Parameter utamanya adalah `position`, `orientation`, `field of view`, dan `projection`. `position` menentukan di mana kamera berada, `orientation` menentukan arah kamera menghadap, `field of view` menentukan seberapa luas area yang terlihat, dan `projection` menentukan bagaimana ruang 3D dipetakan ke tampilan 2D. Dalam pipeline rendering, kamera berperan mengubah koordinat dunia menjadi koordinat pandangan, lalu menyiapkan objek untuk diproyeksikan ke layar.

Secara intuitif, kamera seperti mata pengamat. Jika kamera bergerak, objek yang sama bisa terlihat dari sudut berbeda. Jika `field of view` diperbesar, tampilan menjadi lebih lebar tetapi bisa terasa lebih “zoom out”. Jika `projection` berubah, perspektif ruang juga berubah. Karena itu, kamera bukan sekadar penampil, tetapi bagian penting dari pembentukan citra akhir.

**Light** berperan membantu menentukan bagaimana objek terlihat. Parameter umumnya adalah `position`, `direction`, `intensity`, dan `color`. `position` menentukan asal cahaya, `direction` menentukan arah datang cahaya, `intensity` menentukan seberapa terang pencahayaan, dan `color` menentukan warna cahaya yang jatuh ke objek. Cahaya sangat penting karena ia memengaruhi bayangan, kontras, dan kesan kedalaman pada objek.

Jenis cahaya yang umum adalah `directional`, `point`, dan `spot`. Cahaya `directional` datang dari arah tertentu, seperti matahari, sehingga biasanya digunakan untuk pencahayaan global yang seragam. Cahaya `point` berasal dari satu titik dan menyebar ke sekeliling, seperti lampu titik. Cahaya `spot` memiliki arah dan kerucut tertentu, seperti sorot lampu panggung. Perbedaan jenis cahaya ini menentukan bagaimana pencahayaan diterapkan pada permukaan objek.

Dalam konteks rendering, kamera dan cahaya bekerja pada tahap yang berbeda tetapi saling melengkapi. Kamera menentukan apa yang masuk ke layar, sedangkan cahaya membantu menghitung warna dan pencahayaan pada permukaan objek yang terlihat. Mahasiswa perlu memahami bahwa sebelum masuk ke detail material dan tekstur, kita sudah harus tahu bahwa tampilan objek tidak hanya ditentukan oleh bentuk geometri, tetapi juga oleh posisi kamera dan sumber cahaya.

### Inti yang Harus Ditekankan

- **Camera** menentukan sudut pandang dan bagian scene yang terlihat melalui `position`, `orientation`, `field of view`, dan `projection`.
- **Light** menentukan pencahayaan objek melalui `position`, `direction`, `intensity`, dan `color`.
- Jenis `directional`, `point`, dan `spot` memiliki perilaku pencahayaan yang berbeda.
- Kamera dan cahaya adalah komponen penting dalam pipeline rendering sebelum objek diberi material dan tekstur.

### Transisi ke Slide Berikutnya

Setelah kita tahu bagaimana kamera memilih tampilan dan cahaya memengaruhi pencahayaan, langkah berikutnya adalah memahami bagaimana permukaan objek merespons cahaya. Pada slide berikutnya, kita akan membahas **Material** dan **Texture**, yaitu properti yang menentukan warna, kekasaran, metalik, transparansi, dan detail permukaan objek.

---

## Slide 027 - Material dan Texture

### Narasi

Setelah kita memahami **camera** dan **light**, langkah berikutnya adalah memahami bagaimana objek tampak memiliki permukaan yang berbeda-beda. Di sinilah peran **Material** dan **Texture** menjadi penting.

**Material** menentukan bagaimana permukaan berinteraksi dengan cahaya. Secara sederhana, material adalah kumpulan properti yang memberi tahu sistem rendering: apakah permukaan itu tampak kasar atau halus, seperti logam atau bukan, tembus pandang atau tidak, serta apakah memancarkan cahaya sendiri.

Properti yang sering muncul antara lain `color`, `roughness`, `metallic`, `transparency`, dan `emission`. `color` memengaruhi warna dasar permukaan, `roughness` memengaruhi sebaran highlight, `metallic` memengaruhi karakter refleksi seperti logam, `transparency` memengaruhi kemampuan cahaya menembus permukaan, dan `emission` memberi kesan permukaan yang menyala atau memancarkan cahaya.

**Texture** adalah gambar atau data visual yang dipetakan ke permukaan objek. Alurnya dapat dibaca dari atas ke bawah sebagai berikut:

```text
Image Texture
     ↓
Mapped to Surface
     ↓
Detailed Object
```

Artinya, sebuah gambar tekstur tidak langsung menjadi objek, tetapi dipetakan ke permukaan geometri sehingga objek tampak memiliki detail seperti kayu, batu, kain, atau pola tertentu.

Keunggulan utama texture adalah ia dapat menambah detail visual tanpa menambah banyak **geometry**. Sebagai contoh, permukaan batu yang tampak tidak rata dapat dibuat lebih realistis hanya dengan texture, tanpa harus membuat banyak segitiga tambahan pada mesh.

Dalam pipeline rendering, material dan texture biasanya digunakan pada tahap shading atau fragment processing. Setelah posisi objek diproyeksikan dan permukaan di-rasterisasi, `shader` akan membaca parameter material dan nilai texture untuk menghitung warna akhir yang ditampilkan.

### Inti yang Harus Ditekankan

- **Material** menentukan respons permukaan terhadap cahaya melalui properti seperti `color`, `roughness`, `metallic`, `transparency`, dan `emission`.
- **Texture** adalah gambar yang dipetakan ke permukaan objek untuk menambah detail visual.
- Texture dapat membuat objek tampak lebih realistis tanpa meningkatkan kompleksitas geometry secara signifikan.
- Material dan texture menjadi input penting sebelum proses rendering menghasilkan gambar akhir.

### Transisi ke Slide Berikutnya

Dengan kamera, cahaya, material, dan texture, kita sudah memiliki elemen-elemen penting dalam scene. Selanjutnya, kita akan melihat bagaimana semua elemen tersebut diproses menjadi gambar melalui konsep **rendering**.

---

## Slide 028 - Apa Itu Rendering?

### Narasi

Setelah kita membahas **material** dan **texture**, langkah berikutnya adalah memahami bagaimana semua elemen tersebut akhirnya menjadi gambar yang bisa kita lihat. Proses inilah yang disebut **rendering**. Secara sederhana, **rendering** adalah proses menghasilkan gambar dari data scene. Artinya, rendering bukan hanya “menampilkan objek”, tetapi mengubah kumpulan data 3D menjadi citra 2D yang memiliki warna, bentuk, pencahayaan, dan kedalaman.

Kita bisa membayangkan rendering sebagai tahap akhir dari alur grafika komputer. Di tahap ini, berbagai komponen yang sudah kita pelajari sebelumnya mulai bekerja bersama. Ada `geometry` yang menentukan bentuk objek, `transform` yang menentukan posisi dan orientasi objek, `camera` yang menentukan sudut pandang, `material` yang menentukan sifat permukaan, `texture` yang menambah detail permukaan, dan `lighting` yang menentukan bagaimana cahaya berinteraksi dengan objek.

```text
geometry + transform + camera + material + texture + lighting
                         ↓
                      RENDERING
                         ↓
                      FINAL IMAGE
```

Dari input-input tersebut, rendering menghasilkan `FINAL IMAGE`. Gambar akhir ini adalah hasil keputusan banyak proses: objek mana yang terlihat, objek mana yang tertutup, bagaimana warna permukaan, bagaimana bayangan terbentuk, dan bagaimana detail tekstur muncul pada permukaan. Dengan kata lain, rendering adalah proses yang menjembatani data scene dan tampilan visual yang akhirnya dilihat oleh pengguna.

Pentingnya rendering dalam grafika komputer sangat besar karena di sinilah semua konsep sebelumnya bertemu. Transformasi menentukan posisi objek, kamera menentukan apa yang masuk ke bidang pandang, rasterisasi mengubah bentuk 3D menjadi piksel, lighting menentukan terang dan gelap, shader menghitung warna per piksel, dan material serta texture memberikan karakter visual pada permukaan. Tanpa rendering, data scene hanya berupa informasi yang belum menjadi gambar.

Namun, rendering tidak selalu dilakukan dengan cara yang sama. Ada dua kategori umum yang perlu kita pahami, yaitu **offline rendering** dan **real-time rendering**. **Offline rendering** biasanya digunakan untuk produksi film atau animasi. Pada kategori ini, kualitas gambar sangat penting, sehingga proses rendering bisa berlangsung lama. Satu frame mungkin membutuhkan waktu hitungan menit, jam, bahkan lebih, tergantung kompleksitas scene, pencahayaan, dan efek yang digunakan.

Berbeda dengan offline rendering, **real-time rendering** harus menghasilkan gambar sangat cepat, biasanya dalam milidetik. Kategori ini umum digunakan pada game, simulator, dan aplikasi interaktif. Karena pengguna bisa bergerak, berputar, atau mengubah scene secara langsung, sistem harus terus menghasilkan frame baru secara cepat agar interaksi terasa halus. Di sinilah batasan waktu menjadi sangat penting, sehingga kualitas gambar harus seimbang dengan kecepatan komputasi.

Sebelum lanjut, hal yang perlu dipahami adalah bahwa rendering bukan satu fungsi tunggal, melainkan proses yang bergantung pada input scene dan batasan sistem. Jika batasan waktunya longgar, kita bisa memilih metode yang lebih kompleks untuk hasil yang lebih realistis. Jika batasan waktunya ketat, kita harus memilih pendekatan yang lebih efisien. Pemahaman ini akan membantu kita memahami mengapa perangkat komputasi seperti CPU dan GPU memiliki peran yang berbeda dalam proses rendering.

### Inti yang Harus Ditekankan

- **Rendering** adalah proses mengubah data scene menjadi gambar akhir.
- Input utama rendering meliputi `geometry`, `transform`, `camera`, `material`, `texture`, dan `lighting`.
- **Offline rendering** mengutamakan kualitas tinggi dan waktu rendering yang panjang.
- **Real-time rendering** mengutamakan kecepatan, biasanya harus selesai dalam milidetik.
- Rendering menjadi titik temu antara geometri, transformasi, kamera, rasterisasi, lighting, shader, dan material.

### Transisi ke Slide Berikutnya

Setelah kita memahami apa itu rendering dan apa yang dihasilkannya, pertanyaan berikutnya adalah: perangkat apa yang mengerjakan proses ini? Untuk itu, kita akan lanjut ke peran **CPU** dan **GPU** dalam grafika komputer.

---

## Slide 029 - CPU dan GPU

### Narasi

Setelah kita memahami bahwa **rendering** adalah proses mengubah data scene menjadi gambar akhir, langkah berikutnya adalah memahami perangkat apa yang mengerjakan proses tersebut. Dalam sistem grafika komputer modern, ada dua komponen utama yang saling melengkapi, yaitu **CPU** dan **GPU**.

**CPU**, atau **Central Processing Unit**, adalah pemroses umum. CPU dirancang untuk mengerjakan berbagai jenis tugas yang berbeda, terutama tugas yang membutuhkan logika, percabangan, dan urutan eksekusi yang jelas. Karena itu, CPU sangat cocok untuk **general-purpose computing**, **logic**, **branching**, **sequential processing**, dan **application logic**. Dalam aplikasi grafika, CPU biasanya berperan mengatur jalannya program: membaca input, memperbarui state scene, menghitung transformasi, menyiapkan data, lalu memanggil proses rendering.

**GPU**, atau **Graphics Processing Unit**, memiliki karakter yang berbeda. GPU dirancang untuk mengerjakan banyak operasi serupa secara bersamaan. Karena itu, GPU sangat cocok untuk **vertex processing**, **pixel/fragment processing**, **matrix operations**, **image processing**, dan **rendering**. Dalam konteks rendering pipeline, GPU berperan besar ketika kita harus memproses banyak titik geometri, banyak fragmen gambar, atau banyak operasi matriks yang sifatnya berulang.

Kita bisa memahami perbedaannya dengan konsep sederhana:

```text
CPU → Few Powerful Workers
GPU → Many Parallel Workers
```

Artinya, CPU ibarat beberapa pekerja yang sangat kuat dan mampu menangani tugas kompleks dengan banyak keputusan. GPU ibarat banyak pekerja yang bekerja secara paralel, masing-masing mengerjakan operasi yang mirip. Dalam grafika komputer, banyak pekerjaan memang berbentuk operasi berulang, misalnya menghitung posisi vertex atau menghitung warna pixel, sehingga GPU sangat efektif.

Perbedaan ini penting karena menentukan bagaimana aplikasi grafika dirancang. CPU tidak selalu “lemah” dalam konteks ini; justru CPU sangat dibutuhkan untuk logika aplikasi. Namun, jika semua perhitungan pixel dan vertex harus dilakukan secara sekuensial oleh CPU, proses rendering akan menjadi sangat lambat, terutama untuk gambar real-time. Di sinilah GPU menjadi penting: ia memungkinkan banyak perhitungan dilakukan secara paralel sehingga gambar dapat dihasilkan dalam waktu yang sangat singkat.

Jadi, ketika kita melihat slide ini, kita tidak perlu memahaminya sebagai “CPU untuk logika, GPU untuk gambar” secara kaku. Yang lebih tepat adalah: **CPU mengoordinasikan dan menjalankan logika aplikasi**, sedangkan **GPU mempercepat proses yang melibatkan banyak operasi paralel**, terutama proses yang berkaitan dengan geometri, matriks, dan gambar.

Sebelum lanjut, hal yang perlu kita pegang adalah bahwa **vertex processing** dan **pixel/fragment processing** adalah dua bagian penting dalam rendering yang sangat bergantung pada kemampuan paralel GPU. Pemahaman ini akan menjadi dasar untuk menjelaskan mengapa rendering, terutama rendering real-time, sangat cocok dijalankan pada GPU.

### Inti yang Harus Ditekankan

- **CPU** cocok untuk tugas umum, logika, percabangan, dan pemrosesan sekuensial.
- **GPU** cocok untuk tugas paralel seperti `vertex processing`, `pixel/fragment processing`, `matrix operations`, dan `rendering`.
- Konsep sederhana: **CPU** seperti beberapa pekerja kuat, sedangkan **GPU** seperti banyak pekerja paralel.
- CPU dan GPU bekerja sama: CPU mengatur aplikasi, GPU mempercepat proses rendering.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat mengapa sifat paralel GPU sangat cocok untuk rendering, terutama karena layar modern memiliki jutaan pixel dan banyak perhitungan yang dapat dilakukan secara independen.

---

## Slide 030 - Mengapa Rendering Cocok untuk GPU?

### Narasi

Bayangkan sebuah layar dengan resolusi `1920 × 1080`. Layar tersebut memiliki lebih dari 2 juta `pixel`. Artinya, dalam satu frame saja, sistem rendering harus menentukan warna, kecerahan, tekstur, kedalaman, atau efek visual untuk jutaan titik gambar. Jumlah pekerjaan ini sangat besar jika dibandingkan dengan proses komputasi biasa.

Dalam rendering pipeline, setelah objek geometri diproses pada tahap `vertex`, bentuk-bentuk seperti segitiga akan dirasterisasi menjadi banyak `pixel` atau `fragment`. Untuk setiap `pixel`, GPU mungkin perlu melakukan perhitungan yang mirip: mengambil nilai tekstur, menghitung pencahayaan, membandingkan kedalaman, lalu menentukan warna akhir. Banyak dari perhitungan ini bersifat berulang dan serupa.

Hal penting yang perlu kita pahami adalah bahwa banyak perhitungan tersebut dapat dilakukan secara independen. Warna `pixel` di satu sisi layar tidak harus menunggu `pixel` di sisi lain selesai dihitung. Demikian pula, banyak `vertex` dapat diproses secara bersamaan. Inilah alasan mengapa rendering sangat cocok untuk **massively parallel processing**.

GPU dirancang untuk menangani banyak operasi serupa secara paralel. Jika CPU lebih cocok untuk alur logika yang berurutan dan banyak percabangan, GPU lebih unggul ketika ada banyak unit kerja kecil yang bisa dijalankan bersamaan. Dalam konteks grafika komputer, inilah keunggulan utama GPU: ia tidak hanya “menggambar”, tetapi mengeksekusi jutaan perhitungan visual secara paralel.

Karena itu, kecepatan rendering real-time tidak hanya bergantung pada satu prosesor yang sangat cepat, tetapi juga pada kemampuan sistem untuk mendistribusikan pekerjaan ke banyak unit komputasi. Konsep ini membantu kita memahami mengapa `vertex processing`, `fragment processing`, dan operasi matriks pada gambar sangat sesuai dijalankan oleh GPU.

Sebelum melanjutkan, mahasiswa perlu memahami bahwa rendering adalah masalah paralel. Kita tidak hanya melihat rendering sebagai proses menggambar objek, tetapi sebagai pipeline yang memiliki banyak tahap yang bisa diparalelkan, terutama pada pemrosesan `vertex` dan `pixel`. Pemahaman ini menjadi dasar untuk memahami kerja sama perangkat keras pada slide berikutnya.

### Inti yang Harus Ditekankan

- Layar `1920 × 1080` memiliki lebih dari 2 juta `pixel`, sehingga rendering melibatkan banyak perhitungan per frame.
- Banyak perhitungan `pixel` dan `vertex` bersifat independen dan dapat dilakukan secara paralel.
- Rendering sangat cocok untuk **massively parallel processing** karena GPU mampu menjalankan banyak operasi serupa secara bersamaan.

### Transisi ke Slide Berikutnya

Setelah memahami mengapa GPU sangat cocok untuk rendering, langkah berikutnya adalah melihat bagaimana CPU, GPU, dan VRAM bekerja sama dalam proses rendering.

---

## Slide 031 - Kerja Sama CPU, GPU, dan VRAM

### Narasi

Setelah kita memahami bahwa rendering sangat cocok diproses secara paralel oleh GPU, sekarang kita perlu melihat bagaimana sistem grafika komputer bekerja secara keseluruhan. Dalam praktik, **CPU** dan **GPU** tidak bekerja secara terpisah, melainkan saling melengkapi. CPU berperan sebagai pengatur utama, sedangkan GPU berperan sebagai mesin paralel yang melakukan perhitungan visual dalam jumlah besar.

Alur kerja dasarnya dapat dibaca dari atas ke bawah:

```text
CPU
 ↓
Prepare Scene
 ↓
Send Commands
 ↓
GPU
 ↓
Render
 ↓
Framebuffer
 ↓
Display
```

Pada tahap **Prepare Scene**, CPU menyiapkan data adegan. Data ini bisa berupa posisi objek, transformasi, parameter kamera, material, tekstur, hingga perintah apa yang harus dirender. CPU juga menentukan urutan objek, memilih objek mana yang perlu ditampilkan, dan menyiapkan perintah rendering yang akan dikirim ke GPU.

Setelah adegan siap, CPU mengirim perintah ke GPU melalui mekanisme yang disediakan sistem atau API grafika. Di sinilah peran GPU mulai dominan. GPU mengambil data yang diperlukan, lalu melakukan proses **render** secara paralel. Proses ini mencakup transformasi vertex, rasterisasi, evaluasi shader, penulisan warna ke framebuffer, dan berbagai operasi visual lainnya.

Salah satu komponen penting yang sering terlupakan adalah **VRAM**, yaitu memori khusus yang digunakan GPU. VRAM menyimpan data yang harus diakses cepat oleh GPU, misalnya:

- `vertex buffer`,
- `index buffer`,
- `texture`,
- `framebuffer`,
- `shader data`.

Keberadaan VRAM sangat penting karena GPU membutuhkan akses data dengan kecepatan tinggi. Jika data harus diambil dari memori utama CPU, proses rendering bisa menjadi lebih lambat. Dengan VRAM, GPU dapat membaca vertex, tekstur, dan data framebuffer secara lebih efisien.

Jadi, secara konseptual, CPU menyiapkan “apa yang harus dirender”, GPU melakukan “proses rendering secara paralel”, dan VRAM menyediakan “ruang penyimpanan cepat” agar GPU dapat bekerja optimal. Hasil akhir dari proses ini adalah framebuffer yang kemudian ditampilkan ke layar.

### Inti yang Harus Ditekankan

- **CPU** menyiapkan adegan dan mengirim perintah rendering.
- **GPU** melakukan proses rendering secara paralel.
- **VRAM** menyimpan data penting seperti `vertex buffer`, `index buffer`, `texture`, `framebuffer`, dan `shader data`.
- Kerja sama CPU, GPU, dan VRAM menentukan efisiensi pipeline rendering.

### Transisi ke Slide Berikutnya

Setelah memahami peran CPU, GPU, dan VRAM, langkah berikutnya adalah melihat bagaimana aplikasi sebenarnya berkomunikasi dengan GPU. Dalam praktik, aplikasi biasanya tidak berbicara langsung dengan GPU, melainkan melalui **Graphics API** seperti OpenGL, WebGL, Direct3D, Vulkan, atau Metal.

---

## Slide 032 - Graphics API dan WebGL

### Narasi

Setelah kita melihat peran CPU, GPU, dan VRAM, pertanyaan berikutnya adalah bagaimana aplikasi dapat meminta GPU untuk bekerja. Pada umumnya, aplikasi tidak berkomunikasi langsung dengan GPU karena perangkat keras GPU memiliki banyak jenis, driver, dan cara kerja yang berbeda. Oleh karena itu, diperlukan lapisan antarmuka yang menyederhanakan perintah rendering agar aplikasi dapat berjalan lebih stabil dan portabel.

Lapisan antarmuka tersebut disebut **Graphics API**. Graphics API menyediakan cara standar untuk membuat objek, mengatur data geometri, memanggil proses rendering, dan menampilkan hasil ke layar. Beberapa contoh Graphics API yang umum dikenal antara lain:

- `OpenGL`
- `WebGL`
- `Direct3D`
- `Vulkan`
- `Metal`

Pada slide ini, kita perlu memahami bahwa nama-nama API tersebut bukan sekadar daftar teknologi, melainkan contoh cara aplikasi berbicara dengan GPU melalui aturan dan perintah yang telah distandarkan.

Salah satu API yang sangat relevan untuk grafika komputer berbasis web adalah `WebGL`. `WebGL` memungkinkan program `JavaScript` menggunakan kemampuan GPU melalui browser. Dengan kata lain, `WebGL` menjadi jembatan antara kode aplikasi web dan perangkat keras GPU.

Alur kerja `WebGL` dapat dibaca dari atas ke bawah sebagai berikut:

```text
JavaScript
   ↓
WebGL API
   ↓
Browser
   ↓
GPU
   ↓
Canvas
```

Pada alur ini, `JavaScript` adalah kode aplikasi yang kita tulis. Kode tersebut memanggil `WebGL API` untuk memberikan perintah rendering. Browser kemudian meneruskan perintah tersebut ke GPU melalui driver dan sistem yang tersedia. GPU memproses data geometri, shader, dan perintah rendering, lalu hasilnya ditampilkan pada elemen `Canvas` di halaman web.

Penting untuk dipahami bahwa `WebGL` bukan pengganti seluruh proses rendering, melainkan antarmuka yang memungkinkan aplikasi web mengakses GPU. Konsep ini penting karena grafika komputer modern tidak hanya berjalan pada aplikasi desktop, tetapi juga pada browser. Dengan Graphics API, mahasiswa dapat memahami bahwa sebelum masuk ke detail pipeline, shader, atau transformasi, aplikasi harus memiliki cara yang benar untuk mengakses GPU.

Untuk pertemuan ini, cukup dipahami bahwa `WebGL` adalah salah satu Graphics API yang memungkinkan `JavaScript` memanfaatkan GPU melalui browser. Detail teknis `WebGL` akan mulai dibahas pada Pertemuan 2, sehingga pada tahap ini kita masih berada pada level pengantar tentang peran API dalam grafika komputer.

### Inti yang Harus Ditekankan

- Aplikasi biasanya tidak berkomunikasi langsung dengan GPU, melainkan melalui **Graphics API**.
- `WebGL` memungkinkan `JavaScript` menggunakan kemampuan GPU melalui browser dan menampilkan hasil pada `Canvas`.
- `OpenGL`, `WebGL`, `Direct3D`, `Vulkan`, dan `Metal` adalah contoh Graphics API yang menjadi antarmuka antara aplikasi dan GPU.
- Slide ini masih bersifat pengantar; pembahasan teknis `WebGL` akan dilanjutkan pada Pertemuan 2.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana aplikasi mengakses GPU melalui Graphics API, langkah berikutnya adalah melihat apa yang terjadi setelah perintah rendering diberikan. Pada slide berikutnya, kita akan masuk ke konsep **Graphics Pipeline**, yaitu rangkaian proses yang mengubah data geometri menjadi gambar di layar.

---

## Slide 033 - Graphics Pipeline

### Narasi

Setelah kita melihat bahwa aplikasi tidak berbicara langsung dengan GPU, langkah berikutnya adalah memahami **Graphics Pipeline**. Pipeline ini adalah jalur kerja utama dalam grafika komputer modern: dari data objek 3D, melalui serangkaian pemrosesan, sampai menjadi gambar yang tampil di layar.

Intuisi visualnya sederhana. Bayangkan sebuah objek 3D, misalnya kubus atau model karakter, belum bisa langsung digambar oleh layar. Layar hanya menampilkan piksel berwarna. Karena itu, sistem harus mengubah bentuk geometri menjadi informasi warna per piksel. Proses itulah yang disebut pipeline.

Kita bisa membaca diagram dari atas ke bawah. Tahap pertama adalah **3D Object**, yaitu objek geometri yang ingin ditampilkan. Objek ini kemudian direpresentasikan sebagai **Vertex Data**, yaitu kumpulan titik koordinat beserta atribut seperti posisi, normal, atau koordinat tekstur. Dari titik-titik tersebut, sistem melakukan **Vertex Processing**, misalnya transformasi posisi dan penyesuaian koordinat agar sesuai dengan kamera dan layar.

Setelah vertex diproses, tahap berikutnya adalah **Primitive Assembly**. Di sini vertex digabungkan menjadi bentuk dasar yang bisa digambar, seperti titik, garis, atau segitiga. Segitiga sangat penting karena banyak objek 3D dibangun dari kumpulan segitiga. Setelah primitive terbentuk, sistem masuk ke **Rasterization**, yaitu proses menentukan piksel mana yang dipengaruhi oleh primitive tersebut.

Setiap piksel yang terpilih kemudian diproses pada tahap **Fragment Processing**. Pada tahap ini, sistem menghitung warna atau properti visual untuk setiap fragment, misalnya berdasarkan material, pencahayaan, atau shader. Hasilnya ditulis ke **Framebuffer**, yaitu area memori yang menyimpan gambar akhir. Dari framebuffer, gambar akhirnya ditampilkan ke **Screen**.

```text
3D Object
   ↓
Vertex Data
   ↓
Vertex Processing
   ↓
Primitive Assembly
   ↓
Rasterization
   ↓
Fragment Processing
   ↓
Framebuffer
   ↓
Screen
```

Pipeline penting karena menjadi kerangka berpikir untuk seluruh materi grafika komputer. Ketika kita nanti membahas transformasi, kamera, rasterisasi, lighting, shader, atau WebGL, hampir semua topik akan kembali ke pertanyaan: data berada di tahap pipeline mana, dan apa yang terjadi pada tahap itu? Dengan memahami pipeline, mahasiswa tidak hanya menghafal istilah, tetapi bisa melihat alur kerja GPU secara utuh.

Sebelum lanjut, hal yang perlu dipahami adalah bahwa pipeline bukan sekadar daftar tahap, melainkan urutan pemrosesan yang menentukan bagaimana objek 3D menjadi gambar 2D. Setiap tahap memiliki peran berbeda: tahap awal lebih berfokus pada geometri dan koordinat, sedangkan tahap akhir lebih berfokus pada warna dan piksel.

### Inti yang Harus Ditekankan

- **Graphics pipeline** adalah alur utama yang mengubah data geometri 3D menjadi gambar di layar.
- Pipeline dibaca dari objek 3D menuju layar: **Vertex Data**, **Vertex Processing**, **Primitive Assembly**, **Rasterization**, **Fragment Processing**, **Framebuffer**, lalu **Screen**.
- Tahap awal berfokus pada **geometri** dan **koordinat**, sedangkan tahap akhir berfokus pada **piksel** dan **warna**.
- Konsep pipeline menjadi dasar untuk memahami transformasi, kamera, rasterisasi, lighting, shader, dan penggunaan GPU melalui API seperti WebGL.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan masuk lebih dalam ke tahap awal pipeline, yaitu tahap geometry, untuk memahami bagaimana vertex diproses dan bagaimana vertex digabungkan menjadi primitive seperti point, line, dan triangle.

---

## Slide 034 - Memahami Tahap Geometry pada Pipeline

### Narasi

Pada tahap **geometry**, pipeline mulai memproses bentuk objek sebelum menjadi gambar. Geometry direpresentasikan sebagai **vertex**, yaitu titik-titik yang menyimpan informasi posisi dan atribut geometri. Penting untuk dipahami bahwa vertex bukan pixel; ia adalah elemen dasar objek 3D yang akan diproses lebih lanjut oleh pipeline.

Setelah vertex tersedia, setiap vertex dapat melewati tahap **vertex processing**. Tahap ini mencakup `transformation`, `position calculation`, dan `normal transformation`. Secara intuitif, `transformation` mengubah keadaan vertex, `position calculation` menghitung posisi vertex yang akan digunakan oleh tahap berikutnya, dan `normal transformation` menyesuaikan arah normal vertex. Normal sangat penting karena akan dipakai pada tahap lighting untuk menentukan bagaimana cahaya berinteraksi dengan permukaan.

Hasil dari vertex processing adalah vertex yang sudah siap dirakit. Tahap berikutnya adalah **primitive assembly**, yaitu proses menggabungkan vertex menjadi primitive. Primitive yang umum adalah `point`, `line`, dan `triangle`. Di antara ketiganya, `triangle` paling sering digunakan karena mampu membentuk permukaan objek 3D secara efisien dan menjadi unit dasar yang mudah diproses oleh tahap rasterization.

Diagram sederhana pada slide dapat dibaca sebagai berikut:

```text
Vertices → Triangle
```

Artinya, kumpulan vertex menjadi input, primitive assembly menentukan bagaimana vertex tersebut dihubungkan, dan outputnya adalah primitive, dalam hal ini triangle. Triangle inilah yang kemudian akan menjadi bahan utama untuk tahap rasterization.

Tahap geometry penting karena menentukan apa yang akan di-rasterisasi. Jika posisi vertex salah, transformasi tidak konsisten, atau primitive dirakit dengan urutan yang salah, maka fragment yang dihasilkan nanti juga akan salah. Karena itu, sebelum masuk ke fragment processing, lighting, atau framebuffer, kita perlu memastikan bahwa bentuk dan posisi objek sudah benar pada tahap geometry.

Dalam implementasi modern, tahap ini sering diproses secara paralel oleh GPU, terutama karena jumlah vertex dapat sangat besar. Namun pada level konsep, yang perlu kita pegang adalah alurnya: vertex data diproses, lalu dirakit menjadi primitive, dan primitive tersebut menjadi jembatan menuju rasterization.

### Inti yang Harus Ditekankan

- **Vertex** adalah representasi dasar geometry, bukan pixel.
- **Vertex processing** mencakup `transformation`, `position calculation`, dan `normal transformation`.
- **Primitive assembly** menggabungkan vertex menjadi `point`, `line`, atau `triangle`.
- `triangle` adalah primitive utama yang akan masuk ke tahap rasterization.

### Transisi ke Slide Berikutnya

Setelah primitive terbentuk, pipeline tidak langsung menampilkan warna. Tahap berikutnya adalah mengubah primitive menjadi kandidat pixel atau **fragment**. Pada slide berikutnya, kita akan membahas **rasterization**, **fragment processing**, dan **framebuffer** sebagai lanjutan dari tahap geometry.

---

## Slide 035 - Rasterization, Fragment, dan Framebuffer

### Narasi

Setelah vertex diproses dan primitive seperti titik, garis, atau segitiga terbentuk, tahap berikutnya adalah mengubah bentuk geometris tersebut menjadi sesuatu yang bisa ditampilkan sebagai piksel di layar. Tahap inilah yang disebut **rasterization**.

```text
Triangle
   ↓
Rasterization
   ↓
Fragments
```

Dalam diagram di atas, alurnya cukup jelas. Inputnya adalah primitive, misalnya **triangle**. Prosesnya adalah **rasterization**, yaitu menghitung bagian dari layar yang tertutup oleh primitive tersebut. Outputnya adalah **fragments**, yaitu kandidat piksel yang akan diproses lebih lanjut.

Perlu kita tekankan bahwa **fragment** belum tentu sama dengan piksel final. Fragment adalah wilayah kecil pada layar yang dihasilkan dari rasterisasi primitive. Satu fragment kemudian akan melewati **fragment processing** untuk menentukan warna akhirnya.

Pada tahap **fragment processing**, sistem menentukan warna fragment berdasarkan beberapa informasi, antara lain:

- `color`,
- `texture`,
- `lighting`,
- `shadow`,
- `transparency`.

Artinya, fragment tidak hanya diberi warna datar. Warna akhirnya bisa dipengaruhi oleh tekstur, pencahayaan, bayangan, atau tingkat transparansi. Inilah tahap yang sangat penting untuk membuat objek terlihat realistis atau sesuai gaya visual yang diinginkan.

Setelah fragment diproses, hasilnya disimpan ke **framebuffer**. Framebuffer adalah area memori yang menyimpan hasil rendering sebelum ditampilkan ke layar. Jadi, framebuffer berperan sebagai “kanvas” sementara tempat semua warna fragment ditulis.

Hal yang harus dipahami sebelum lanjut adalah bahwa pipeline grafika komputer bergerak dari bentuk geometris menuju tampilan visual. **Rasterization** mengubah geometri menjadi kandidat piksel, **fragment processing** menentukan warna, dan **framebuffer** menyimpan hasil akhir sebelum ditampilkan.

### Inti yang Harus Ditekankan

- **Rasterization** adalah proses mengubah primitive, misalnya triangle, menjadi **fragments**.
- **Fragment** adalah kandidat piksel yang belum tentu menjadi warna final di layar.
- **Fragment processing** menentukan warna akhir menggunakan `color`, `texture`, `lighting`, `shadow`, dan `transparency`.
- **Framebuffer** menyimpan hasil rendering sebelum ditampilkan ke layar.

### Transisi ke Slide Berikutnya

Setelah memahami tahap rasterization, fragment, dan framebuffer secara terpisah, kita akan melihat ketiga tahap ini sebagai bagian dari satu benang merah graphics pipeline yang utuh.

---

## Slide 036 - Benang Merah Graphics Pipeline

### Narasi

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

Diagram ini sebaiknya dibaca dari atas ke bawah sebagai alur data, bukan sebagai daftar komponen yang terpisah. Di bagian atas, **model data** adalah representasi objek yang akan dirender, misalnya kumpulan titik, garis, atau segitiga. Data tersebut kemudian masuk ke tahap **vertex**, di mana setiap titik memiliki koordinat dan atribut seperti normal, warna, atau texture coordinate.

Tahap **vertex processing** adalah tempat transformasi dan kamera bekerja. Koordinat objek dapat dipindahkan, diputar, diskala, lalu diproyeksikan ke ruang layar. Hasilnya adalah **triangle** yang siap diproses lebih lanjut. Pada tahap ini, GPU biasanya sudah mulai mengambil peran karena banyak vertex dapat diproses secara paralel.

Setelah triangle terbentuk, **rasterization** mengubah area triangle menjadi kandidat pixel atau **fragment**. Fragment bukan pixel final; ia masih berupa kandidat yang perlu diberi warna. Tahap **fragment processing** kemudian menentukan warna akhir menggunakan informasi seperti color, texture, lighting, shadow, atau transparency. Di sinilah shader fragment bekerja.

Hasil fragment kemudian ditulis ke **framebuffer**, yaitu buffer yang menyimpan frame yang sedang dirender. Setelah frame selesai, framebuffer dikirim ke **screen** untuk ditampilkan. Dengan kata lain, pipeline ini menjelaskan bagaimana objek geometri berubah menjadi gambar yang kita lihat.

Poin penting berikutnya adalah bahwa alur ini tidak terikat pada satu tool tertentu. Konsep yang sama akan muncul kembali saat kita menggunakan:

```text
WebGL → Three.js → Blender → Unity
```

Yang berubah adalah API, editor, atau cara kerja tool, tetapi ide dasarnya tetap: data geometri diproses per vertex, dirasterisasi menjadi fragment, diberi warna, lalu disimpan ke framebuffer sebelum tampil di layar.

### Inti yang Harus Ditekankan

- **Graphics pipeline** adalah alur utama dari model data hingga gambar tampil di layar.
- **Vertex processing** berkaitan dengan transformasi, koordinat, dan kamera, sedangkan **fragment processing** berkaitan dengan warna, texture, lighting, dan shader.
- **Rasterization** menghasilkan fragment, bukan pixel final; fragment masih perlu diproses sebelum masuk ke framebuffer.
- Konsep pipeline yang sama dapat dikenali di `WebGL`, `Three.js`, `Blender`, dan `Unity`, meskipun bentuk tool-nya berbeda.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan mereview **Praktikum 1: Graphics Playground**, di mana konsep dasar seperti coordinate, primitive, color, frame, dan interaction akan kita lihat dalam bentuk sederhana menggunakan `HTML`, `JavaScript`, dan `HTML Canvas 2D` sebelum masuk ke `WebGL`.

---

## Slide 037 - Review Praktikum 1: Graphics Playground

### Narasi

Pada praktikum pertama, kita mulai dari hal yang paling dekat dengan pengalaman visual mahasiswa: gambar yang muncul di layar. Tujuannya bukan sekadar membuat beberapa bentuk, tetapi memahami bahwa setiap gambar digital dibentuk dari elemen dasar yang bisa dikendalikan secara program.

Elemen-elemen itu adalah `coordinate`, `primitive`, `color`, `frame`, dan `interaction`. `coordinate` menentukan posisi dan ukuran bentuk di layar. `primitive` adalah bentuk dasar seperti garis, persegi, lingkaran, atau segitiga. `color` memberi identitas visual pada bentuk. `frame` menunjukkan bahwa gambar dapat berubah dari waktu ke waktu, misalnya melalui animasi. `interaction` membuat pengguna dapat memengaruhi tampilan, misalnya lewat mouse atau keyboard.

Teknologi yang digunakan pada praktikum ini adalah:

```text
HTML
+
JavaScript
+
HTML Canvas 2D
```

`HTML` menyediakan area halaman, `JavaScript` menjalankan logika gambar, dan `HTML Canvas 2D` menjadi permukaan tempat primitive digambar. Dengan kombinasi ini, kita bisa membuat mini aplikasi grafika interaktif yang menampilkan beberapa primitive 2D.

Penting untuk melihat bahwa Canvas 2D adalah pengantar. Di balik layar, proses menggambar bentuk ke piksel tetap berkaitan dengan konsep rasterisasi dan framebuffer, tetapi Canvas menyembunyikan detail teknisnya. Karena itu, praktikum ini membantu membangun intuisi sebelum kita masuk ke WebGL, di mana kontrol terhadap pipeline grafika menjadi lebih eksplisit.

Sebelum lanjut, mahasiswa perlu memahami bahwa tujuan praktikum ini bukan hanya “bentuk muncul”, tetapi memahami hubungan antara data, perintah gambar, warna, waktu, dan interaksi pengguna.

### Inti yang Harus Ditekankan

- Gambar di layar dibentuk dari `coordinate`, `primitive`, `color`, `frame`, dan `interaction`.
- `HTML Canvas 2D` dipakai sebagai pengantar visual sebelum masuk ke WebGL.
- Praktikum ini melatih intuisi dasar rendering: bentuk digambar, diberi warna, dianimasikan, dan dapat berinteraksi.

### Transisi ke Slide Berikutnya

Setelah tujuan dan teknologi praktikum dipahami, kita akan meninjau aktivitas dan output minimum dari Graphics Playground, yaitu jenis primitive, warna, animasi, dan interaksi yang harus ada.

---

## Slide 038 - Review Aktivitas dan Output Praktikum

### Narasi

Pada aktivitas ini, mahasiswa tidak hanya menggambar bentuk statis, tetapi membangun **Graphics Playground** sebagai mini aplikasi grafika interaktif. Objek yang dibuat berupa **rectangle**, **line**, **circle**, dan **triangle**, masing-masing diberi **warna berbeda** agar perbedaan primitive mudah dikenali secara visual.

Poin pentingnya adalah mahasiswa mulai melihat bahwa gambar di layar bukan satu kesatuan utuh, melainkan hasil dari beberapa keputusan dasar: koordinat posisi, bentuk primitive, warna, ukuran, dan urutan gambar. Dalam konteks grafika komputer, ini adalah fondasi sebelum masuk ke objek 3D, kamera, dan pipeline rendering yang lebih kompleks.

Alur kerja pada slide dapat dibaca dari atas ke bawah sebagai tahapan sederhana:

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

Tahap `Create Canvas` menyiapkan area gambar. Tahap `Draw Primitive` membuat bentuk dasar seperti garis, segitiga, lingkaran, atau persegi. Tahap `Set Color & Position` menentukan bagaimana bentuk tersebut terlihat dan di mana ia berada. Tahap `Animate` mengubah posisi atau properti objek dari waktu ke waktu, sehingga gambar menjadi dinamis. Tahap `Add Interaction` membuat pengguna dapat memengaruhi tampilan, misalnya melalui mouse atau keyboard.

Dari sisi output minimum, mahasiswa diharapkan menunjukkan minimal **3 jenis primitive**, penggunaan **warna**, satu objek yang **bergerak**, dan satu bentuk **interaksi pengguna**. Syarat ini penting karena memastikan mahasiswa tidak berhenti pada gambar diam, tetapi sudah memahami hubungan antara data, geometri, warna, waktu, dan input pengguna.

Sebelum lanjut, hal yang perlu dipahami adalah bahwa setiap primitive pada Canvas 2D pada dasarnya masih berupa instruksi menggambar ke layar. Konsep ini akan menjadi dasar ketika nanti kita membahas bagaimana objek 3D diubah menjadi titik, segitiga, dan pixel pada layar.

### Inti yang Harus Ditekankan

- **Graphics Playground** adalah latihan dasar untuk memahami gambar sebagai kombinasi **primitive**, **warna**, **posisi**, **animasi**, dan **interaksi**.
- Alur `Create Canvas → Draw Primitive → Set Color & Position → Animate → Add Interaction` menunjukkan tahapan sederhana dari menyiapkan area gambar hingga membuat aplikasi interaktif.
- Output minimum bukan sekadar menggambar bentuk, tetapi membuktikan bahwa mahasiswa dapat mengontrol **geometri**, **warna**, **pergerakan**, dan **input pengguna**.

### Transisi ke Slide Berikutnya

Setelah aktivitas dan output minimum ini dipahami, kita akan masuk ke bagian challenge, ringkasan konsep, dan arah pertemuan berikutnya.

---

## Slide 039 - Review Challenge, Ringkasan, dan Pertemuan Berikutnya

### Narasi

Kita akan menutup bagian praktikum dengan dua hal penting: **challenge** yang bisa dipilih mahasiswa, dan **ringkasan alur grafika komputer** yang harus tetap melekat di kepala. Challenge ini bukan sekadar tugas tambahan, melainkan cara untuk memastikan mahasiswa tidak hanya bisa menggambar bentuk statis, tetapi juga memahami bahwa objek visual dapat berubah karena **state**, **event**, dan **koordinat**.

Pilih minimal satu dari opsi berikut:

- objek memantul di batas canvas,
- objek mengikuti mouse,
- warna berubah ketika diklik,
- objek digerakkan dengan keyboard,
- menampilkan koordinat mouse.

Secara konsep, pilihan-pilihan ini melatih hal yang sama: membaca input, mengubah data objek, lalu menggambar ulang hasil perubahan. Misalnya, objek memantul membutuhkan pembaruan posisi dan arah gerak; objek mengikuti mouse membutuhkan pemetaan koordinat layar ke koordinat canvas; menampilkan koordinat mouse membutuhkan pembacaan posisi pointer dan konversi ke sistem koordinat yang dipakai program.

Untuk kembali ke gambaran besar, kita dapat melihat alur sederhana berikut:

```text
DATA
 ↓
GEOMETRY
 ↓
VERTEX / TRIANGLE
 ↓
RASTERIZATION
 ↓
FRAGMENT / PIXEL
 ↓
IMAGE
```

Alur ini dibaca dari atas ke bawah. **DATA** adalah informasi mentah yang kita miliki, misalnya posisi, ukuran, warna, atau bentuk. Data tersebut diorganisasi menjadi **GEOMETRY**, yaitu representasi bentuk yang bisa diproses oleh sistem grafika. Geometri kemudian dinyatakan dalam **VERTEX / TRIANGLE**, karena banyak sistem rendering membangun objek dari titik-titik dan segitiga. Tahap **RASTERIZATION** mengubah bentuk vektor menjadi elemen layar, yaitu **FRAGMENT / PIXEL**. Setelah itu, hasil akhir yang kita lihat adalah **IMAGE**.

Penting untuk diingat bahwa praktikum sebelumnya berada di sisi awal alur ini: kita membuat data primitif, mengatur posisi dan warna, lalu menggambar ulang pada canvas. Sementara itu, konsep yang lebih luas dalam grafika komputer menunjukkan bahwa gambar bukan sekadar “digambar”, tetapi hasil dari proses bertahap dari data ke geometri, lalu ke piksel.

### Inti yang Harus Ditekankan

- Challenge praktikum melatih hubungan antara **input pengguna**, **state objek**, dan **redraw**.
- Koordinat mouse, posisi objek, dan batas canvas harus dipahami sebagai data yang dapat diubah dan divisualisasikan.
- Alur `DATA → GEOMETRY → VERTEX / TRIANGLE → RASTERIZATION → FRAGMENT / PIXEL → IMAGE` adalah gambaran dasar rendering pipeline.
- Mahasiswa harus mampu membedakan antara objek sebagai data, objek sebagai geometri, dan objek sebagai piksel di layar.

### Transisi ke Slide Berikutnya

Setelah challenge dan ringkasan alur ini ditegaskan, kita akan masuk ke penutup pertemuan. Materi berikutnya adalah **WebGL Fundamental**, sehingga pemahaman tentang data, geometri, dan rasterisasi ini akan menjadi dasar untuk melihat bagaimana GPU membantu proses rendering.

---

## Slide 040 - Penutup

### Narasi

Kita sampai pada bagian penutup. Terima kasih kepada mahasiswa yang telah mengikuti rangkaian materi **WebGL Fundamental** pada **Materi Pertemuan 3** ini. Pada sesi ini, kita telah membangun pemahaman dasar tentang bagaimana grafika komputer bekerja, mulai dari representasi objek visual, transformasi, kamera, hingga proses rendering yang menghasilkan gambar di layar.

Sebagai penutup, penting untuk kembali mengingat bahwa inti dari grafika komputer adalah alur kerja yang runtut: **data** diolah menjadi **geometri**, kemudian menjadi **vertex** dan **triangle**, lalu diproses melalui **rasterization** menjadi **fragment** atau **pixel**, dan akhirnya ditampilkan sebagai **image**. Alur inilah yang menjadi dasar ketika kita bekerja dengan `WebGL`, pipeline rendering, transformasi, kamera, lighting, dan shader.

Sebelum sesi berakhir, saya mengajak mahasiswa untuk meninjau kembali challenge praktikum yang telah diberikan. Tidak perlu semua challenge diselesaikan sekaligus, tetapi minimal satu challenge yang dikerjakan akan membantu memastikan bahwa konsep dasar sudah benar-benar dipahami. Jika ada bagian yang masih kurang jelas, silakan dicatat untuk dibahas lebih lanjut pada pertemuan berikutnya.

### Inti yang Harus Ditekankan

- Penutup ini menutup **Materi Pertemuan 3** dengan fokus pada **WebGL Fundamental**.
- Mahasiswa perlu memahami alur dasar rendering: **data** → **geometri** → **vertex/triangle** → **rasterization** → **fragment/pixel** → **image**.
- Challenge praktikum menjadi cara untuk menguji pemahaman konsep dasar, terutama hubungan antara objek, transformasi, input, dan tampilan visual.

### Transisi ke Slide Berikutnya

Karena ini adalah slide penutup, tidak ada materi lanjutan pada slide berikutnya. Sesi dapat diakhiri dengan pengumuman, penugasan, atau pertanyaan terakhir dari mahasiswa.
