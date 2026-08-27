# Narasi Grafika Komputer - Pertemuan 04

## Camera, Projection & 3D

Sumber: markdown/pert04-ringkas.md

---

## Slide 000 - Cover

### Narasi

Selamat datang kembali pada mata kuliah **Grafika Komputer** dengan kode **EF234504**. Pada pertemuan ke-4 ini, kita akan memasuki bagian yang sangat menentukan dalam rendering pipeline, yaitu bagaimana sebuah dunia 3D dapat dilihat melalui **kamera virtual**, diproyeksikan ke layar, dan kemudian dirender menjadi gambar 2D yang kita lihat.

Topik **Camera, Projection & 3D** penting karena hampir semua aplikasi grafika komputer, mulai dari game, simulasi, visualisasi data, hingga WebGL, bergantung pada cara kita menempatkan kamera, menentukan arah pandang, dan mengubah koordinat 3D menjadi koordinat layar. Tanpa pemahaman ini, objek 3D tidak akan memiliki posisi, orientasi, dan kedalaman yang benar.

Pada pertemuan ini, kita akan membangun intuisi visual terlebih dahulu sebelum masuk ke matriks dan perhitungan teknis. Saya, **Dr. Darlis Herumurti**, dari **Departemen Teknik Informatika**, akan memandu pembahasan ini agar konsep kamera, proyeksi, dan transformasi 3D dapat dipahami secara bertahap.

### Inti yang Harus Ditekankan

- Pertemuan ini berfokus pada **Camera, Projection & 3D** dalam mata kuliah **Grafika Komputer**.
- Kamera virtual dan proyeksi adalah jembatan antara objek 3D dan tampilan 2D di layar.
- Mahasiswa perlu menyiapkan pemahaman tentang koordinat, orientasi kamera, dan alur rendering sebelum masuk ke detail matriks.

### Transisi ke Slide Berikutnya

Sekarang kita akan melihat daftar topik yang akan dibahas pada pertemuan ini, mulai dari kamera virtual, transformasi view, proyeksi, hingga praktikum rotating 3D cube.

---

## Slide 001 - Topik Pembahasan

### Narasi

Kita mulai pertemuan ini dengan memetakan alur yang akan kita ikuti. Dalam grafika komputer, objek 3D tidak cukup hanya memiliki bentuk; ia juga harus dilihat dari suatu sudut pandang dan diubah menjadi gambar 2D di layar. Karena itu, topik pertemuan ini berpusat pada **Camera Virtual**, **View Transformation**, **Projection**, dan mekanisme kedalaman yang menentukan apa yang terlihat di depan.

Secara garis besar, pembahasan akan bergerak dari kamera ke layar:

- **Kamera virtual**: kita akan memahami `camera position`, `target`, dan `up vector`, lalu membentuk basis `forward`, `right`, dan `up` yang menjadi acuan arah kamera.
- **View transformation**: kita akan melihat bagaimana `view matrix` memindahkan dan memutar ruang dunia ke ruang kamera.
- **Projection**: kita akan membedakan `orthographic projection` dan `perspective projection`, serta peran `field of view`, `aspect ratio`, `near plane`, dan `far plane` dalam membentuk tampilan akhir.
- **MVP dan depth**: kita akan membahas `projection matrix`, gabungan `MVP`, `depth buffer`, `depth test`, dan masalah `z-fighting`.
- **Praktikum**: semua konsep ini akan diterapkan pada `rotating 3D cube`, sehingga mahasiswa dapat melihat efek kamera dan transformasi secara langsung.

Alur ini penting karena rendering pipeline modern tidak hanya menggambar geometri, tetapi juga menentukan koordinat objek relatif terhadap kamera, memproyeksikannya ke layar, dan memilih permukaan mana yang terlihat berdasarkan kedalaman. Sebelum masuk ke detail, mahasiswa perlu memahami bahwa setiap tahap memiliki ruang koordinat dan matriks transformasi masing-masing.

### Inti yang Harus Ditekankan

- **Camera Virtual** adalah representasi matematis kamera, bukan perangkat fisik; ia ditentukan oleh posisi, target, dan arah up.
- `camera position`, `target`, dan `up vector` digunakan untuk membangun basis kamera `forward`, `right`, dan `up`.
- `view matrix` mengubah koordinat dari ruang dunia ke ruang kamera, sedangkan `projection matrix` mengubah ruang kamera ke representasi layar.
- `orthographic projection` dan `perspective projection` menghasilkan tampilan yang berbeda; parameter seperti `field of view`, `aspect ratio`, `near plane`, dan `far plane` memengaruhi bidang pandang dan batas kedalaman.
- `MVP` adalah gabungan transformasi model, view, dan projection yang menjadi tahap kunci sebelum rasterisasi.
- `depth buffer` dan `depth test` menentukan objek mana yang terlihat di depan, sementara `z-fighting` adalah artefak yang muncul ketika perbedaan kedalaman terlalu kecil.

### Transisi ke Slide Berikutnya

Setelah peta topik ini jelas, kita lanjut ke capaian pembelajaran untuk melihat kemampuan apa yang harus dimiliki mahasiswa setelah pertemuan ini.

---

## Slide 002 - Capaian Pembelajaran

### Narasi

Pada pertemuan ini, fokus kita bergeser dari representasi objek ke cara objek dilihat oleh sistem rendering. Setelah objek memiliki posisi di `world space`, masih ada pertanyaan penting: dari mana kamera melihat, bagaimana arah kamera ditentukan, dan bagaimana koordinat 3D diubah menjadi gambar 2D di layar. Capaian pembelajaran ini menjadi peta kemampuan yang harus dimiliki mahasiswa sebelum masuk ke implementasi `WebGL`.

Secara garis besar, capaian ini dapat dikelompokkan menjadi empat kemampuan utama:

1. **Memahami kamera virtual**: mahasiswa dapat menjelaskan `camera virtual`, menggunakan `position`, `target`, dan `up vector`, serta memahami bagaimana ketiganya membentuk basis `forward`, `right`, dan `up`.
2. **Memahami transformasi view dan proyeksi**: mahasiswa dapat menjelaskan `View Matrix`, membedakan `orthographic projection` dan `perspective projection`, serta memahami peran `FOV`, `aspect ratio`, `near plane`, dan `far plane`.
3. **Memahami pipeline rendering**: mahasiswa dapat menjelaskan `Model–View–Projection` dan mengapa urutan transformasi penting sebelum objek digambar.
4. **Menerapkan pada praktik**: mahasiswa dapat menggunakan `depth buffer` dan `depth test`, membuat kamera dan proyeksi pada `WebGL`, serta membuat `rotating 3D cube`.

Penting untuk dipahami bahwa capaian ini bukan sekadar hafalan istilah. Setiap konsep memiliki fungsi dalam pipeline: kamera menentukan koordinat `view space`, proyeksi menentukan bagaimana `view space` dipetakan ke `clip space` dan kemudian ke layar, sedangkan `depth test` membantu sistem memutuskan permukaan mana yang terlihat. Dengan memahami hubungan ini, mahasiswa tidak hanya tahu cara memanggil fungsi, tetapi juga tahu mengapa parameter kamera dan proyeksi memengaruhi hasil rendering.

Sebelum lanjut, mahasiswa perlu memastikan bahwa konsep `position`, `target`, dan `up vector` sudah jelas, karena ketiganya menjadi dasar pembentukan `View Matrix`. Jika arah kamera salah, objek bisa terlihat terbalik, miring, atau tidak berada pada posisi yang diharapkan.

### Inti yang Harus Ditekankan

- `position`, `target`, dan `up vector` menentukan orientasi kamera virtual.
- `View Matrix` mengubah koordinat `world space` menjadi `view space`.
- `orthographic projection` dan `perspective projection` menghasilkan tampilan yang berbeda karena cara memetakan kedalaman ke layar.
- `FOV`, `aspect ratio`, `near plane`, dan `far plane` memengaruhi bidang pandang dan rentang kedalaman yang dirender.
- `Model–View–Projection` adalah urutan transformasi utama sebelum objek digambar.
- `depth buffer` dan `depth test` penting agar objek yang lebih dekat menutup objek yang lebih jauh.
- Implementasi `WebGL` dan `rotating 3D cube` menjadi bukti bahwa konsep kamera, proyeksi, dan depth dapat diterapkan secara nyata.

### Transisi ke Slide Berikutnya

Setelah capaian pembelajaran ini jelas, kita akan melihat posisi materi dalam alur pipeline. Pertemuan sebelumnya sudah membahas transformasi dari `local` ke `world`, sedangkan pertemuan ini melanjutkan dari `world` ke `view`, `clip`, `NDC`, dan akhirnya `screen`.

---

## Slide 003 - Posisi Materi

### Narasi

Pada pertemuan sebelumnya, kita sudah melihat bagaimana objek berpindah dari koordinat **Local** ke koordinat **World** melalui `Model Matrix`. Tahap itu penting karena setiap objek biasanya didefinisikan di ruang lokalnya sendiri, lalu ditempatkan ke dalam scene.

Pertemuan 4 ini melanjutkan alur yang sama, tetapi dari **World** menuju layar. Secara garis besar, koordinat **World** diubah ke **View** oleh `View Matrix`, kemudian ke **Clip** oleh `Projection Matrix`. Setelah itu dilakukan `Perspective Divide` untuk menghasilkan **NDC**, dan akhirnya `Viewport` memetakan **NDC** ke koordinat **Screen**.

```text
World
 ↓ View Matrix
View
 ↓ Projection Matrix
Clip
 ↓ Perspective Divide
NDC
 ↓ Viewport
Screen
```

Kita perlu memahami posisi materi ini karena kamera dan proyeksi bukan tahap terpisah, melainkan bagian dari pipeline rendering yang meneruskan hasil transformasi model ke tampilan akhir.

### Inti yang Harus Ditekankan

- Pertemuan 3 membahas **Local → World** melalui `Model Matrix`.
- Pertemuan 4 melanjutkan **World → View → Clip → NDC → Screen** melalui kamera dan proyeksi.
- Urutan pipeline penting untuk memahami di mana `View Matrix` dan `Projection Matrix` bekerja.

### Transisi ke Slide Berikutnya

Setelah posisi materi jelas, kita masuk ke pertanyaan mendasar: mengapa kamera dibutuhkan dalam scene 3D?

---

## Slide 004 - Mengapa Camera Dibutuhkan?

### Narasi

Dalam scene 3D, kita dapat memiliki banyak objek yang tersebar di ruang dunia. Namun, layar atau output rendering hanya menampilkan sebagian kecil dari scene tersebut. Karena itu, kita perlu menentukan dari mana scene itu dilihat dan bagian mana yang akan masuk ke layar.

Tanpa **camera**, objek-objek hanya memiliki posisi di **world space**, tetapi belum ada hubungan yang jelas dengan pengamat. Camera hadir untuk menjawab pertanyaan mendasar: di mana mata pengamat berada, ke mana ia melihat, dan bagaimana scene diproyeksikan ke gambar 2D.

Beberapa hal yang ditentukan oleh camera adalah:

- **posisi pengamat**, yaitu titik asal pandangan;
- **arah pandang**, yaitu ke mana pengamat melihat;
- **orientasi**, yaitu bagaimana sumbu atas atau sisi pengamat diletakkan;
- `projection`, yaitu cara scene dipetakan dari ruang 3D ke representasi yang siap diproses;
- **area scene yang terlihat**, yaitu batas bagian scene yang akan dirender.

Dalam konteks rendering pipeline, camera menjadi jembatan antara **world space** dan tahap selanjutnya. Setelah objek berada di dunia, pandangan camera membantu membentuk **view space**, lalu dilanjutkan ke `projection`, `perspective divide`, dan `viewport`. Pada tahap ini kita cukup memahami perannya secara konseptual; detail transformasi matematisnya akan dibahas kemudian.

Secara intuitif, camera dapat dibayangkan sebagai mata pengamat yang bisa dipindahkan, diputar, dan diubah jarak pandangnya. Mengubah camera tidak selalu mengubah geometri objek, tetapi mengubah bagian scene yang terlihat oleh pengguna.

### Inti yang Harus Ditekankan

- **Camera** dibutuhkan karena scene 3D biasanya lebih besar dan kompleks daripada area yang dapat ditampilkan di layar.
- Camera menentukan **posisi pengamat**, **arah pandang**, **orientasi**, `projection`, dan area scene yang terlihat.
- Dalam pipeline, camera berperan menghubungkan **world space** dengan tahap `view`, `projection`, dan tampilan akhir di layar.

### Transisi ke Slide Berikutnya

Setelah memahami mengapa camera dibutuhkan, kita akan melihat bagaimana camera direpresentasikan secara matematis sebagai **camera virtual** dan bagaimana proses **View Transformation** mengubah pandangan dari world space menjadi view space.

---

## Slide 005 - Camera Virtual

### Narasi

Dalam grafika komputer, **camera** tidak selalu berarti perangkat fisik. Camera adalah **representasi matematis** dari pengamat dalam scene. Artinya, kita mendefinisikan "dari mana" dan "ke mana" scene akan dilihat, lalu mengubah representasi objek agar sesuai dengan sudut pandang tersebut.

Intinya, scene 3D berada dalam ruang **World**. Namun gambar yang dihasilkan tidak menampilkan seluruh scene secara langsung. Scene tersebut harus dilihat dari suatu **posisi** dan **arah** tertentu, kemudian menjadi **Image**. Alurnya dapat dibaca sebagai berikut:

```text
World
 ↓
Dilihat dari suatu posisi dan arah
 ↓
Image
```

Pada tahap ini, proses utamanya adalah **`View Transformation`**. Transformasi ini memindahkan atau mengubah koordinat objek dari ruang dunia ke ruang pengamat. Dengan kata lain, camera menjadi acuan baru: objek yang awalnya didefinisikan relatif terhadap dunia kini diposisikan relatif terhadap camera.

Hal ini penting karena rendering pipeline tidak langsung mengubah objek 3D menjadi piksel. Sebelum proyeksi dan rasterisasi, sistem perlu mengetahui bagaimana scene tampak dari sudut pandang camera. `View Transformation` menjadi jembatan antara **geometri scene** dan **sudut pandang pengguna**.

Perlu dipahami bahwa camera virtual menentukan apa yang terlihat, tetapi belum menentukan detail teknis seperti parameter posisi, target, dan orientasi. Pada slide ini, kita cukup menangkap gagasan utamanya: camera adalah pengamat matematis, dan `View Transformation` adalah proses yang membuat scene dapat dilihat dari pengamat tersebut.

### Inti yang Harus Ditekankan

- **Camera virtual** adalah representasi matematis pengamat, bukan perangkat fisik.
- Scene dalam **World** harus diubah menjadi tampilan yang sesuai dengan posisi dan arah camera.
- Proses utamanya adalah **`View Transformation`**, yaitu mengubah koordinat dari ruang dunia ke ruang pengamat.
- Tahap ini penting sebelum proses lanjutan seperti proyeksi dan rasterisasi.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa camera adalah representasi matematis, langkah berikutnya adalah melihat bagaimana camera sederhana didefinisikan secara konkret melalui parameter dasar seperti posisi, target, dan orientasi.

---

## Slide 006 - Parameter Dasar Camera

### Narasi

Dalam grafika komputer, camera tidak selalu berupa perangkat fisik. Ia adalah representasi matematis yang menentukan bagaimana scene dilihat. Kita mulai dari parameter dasar yang paling sering digunakan untuk mendefinisikan camera sederhana.

Secara sederhana, camera dapat didefinisikan dengan tiga elemen:

```text
Camera Position
Target
Up Vector
```

Ketiganya bekerja bersama untuk membentuk pandangan kamera terhadap objek di `world space`.

- **`Camera Position`** menentukan di mana kamera berada. Parameter ini penting karena setiap objek di scene memiliki koordinat di `world space`, dan kamera juga harus memiliki posisi yang jelas agar sistem tahu dari titik mana scene akan diamati.
- **`Target`** menentukan arah kamera melihat. Arah ini biasanya dipahami sebagai garis pandang dari `Camera Position` menuju `Target`. Dengan target, kita tidak hanya tahu posisi kamera, tetapi juga ke mana lensa kamera diarahkan.
- **`Up Vector`** menentukan orientasi "atas" pada gambar. Tanpa parameter ini, kamera bisa memiliki banyak kemungkinan rotasi vertikal yang ambigu. `Up Vector` membantu sistem menentukan sumbu vertikal kamera, sehingga objek tidak tampak miring atau terbalik secara tidak diinginkan.

Ketiga parameter ini menjadi dasar `view transformation`. Dalam rendering pipeline, sebelum objek diproyeksikan ke layar, koordinat world umumnya ditransformasikan ke koordinat kamera. Posisi, target, dan up vector membantu membangun sistem koordinat kamera tersebut. Dengan kata lain, parameter ini menentukan bagaimana `world space` "dilihat" menjadi image.

Sebelum lanjut, hal penting yang perlu dipahami adalah bahwa `Camera Position`, `Target`, dan `Up Vector` bukan hanya tiga nilai terpisah. Mereka membentuk satu kesatuan: lokasi, arah pandang, dan orientasi kamera. Pemahaman ini akan memudahkan kita ketika nanti melihat contoh koordinat dan bagaimana posisi kamera memengaruhi tampilan scene.

### Inti yang Harus Ditekankan

- `Camera Position`, `Target`, dan `Up Vector` adalah tiga parameter dasar untuk mendefinisikan camera sederhana.
- `Camera Position` menentukan **lokasi** kamera di `world space`.
- `Target` menentukan **arah** kamera melihat, yaitu garis pandang dari posisi kamera ke titik target.
- `Up Vector` menentukan **orientasi "atas"** kamera dan membantu menghindari rotasi gambar yang ambigu.
- Ketiga parameter ini menjadi dasar `view transformation` sebelum objek diproyeksikan ke layar.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat salah satu parameter tersebut secara lebih konkret, yaitu `Camera Position`, melalui contoh koordinat `(0, 2, 5)`.

---

## Slide 007 - Camera Position

### Narasi

Kita fokus pada salah satu parameter dasar kamera, yaitu **Camera Position**. Contoh yang diberikan adalah:

```text
Camera Position = (0, 2, 5)
```

Artinya, kamera diletakkan pada koordinat dunia dengan nilai `X = 0`, `Y = 2`, dan `Z = 5`.

Dalam **World Space**, koordinat ini menunjukkan lokasi kamera di dalam adegan 3D. Nilai `X = 0` berarti kamera berada tepat di tengah sumbu horizontal. Nilai `Y = 2` berarti kamera berada sedikit di atas titik acuan, misalnya di atas permukaan atau objek. Nilai `Z = 5` berarti kamera berada pada kedalaman tertentu dari titik acuan, sehingga objek di depan kamera dapat terlihat dengan jarak tertentu.

Penting untuk dipahami bahwa **Camera Position** hanya menentukan *di mana* kamera berada. Ia belum menentukan *ke mana* kamera melihat. Arah pandang baru akan ditentukan ketika kita memiliki **Target**, yaitu titik yang dilihat kamera.

Namun, posisi kamera sudah sangat menentukan hasil rendering. Perubahan kecil pada `X`, `Y`, atau `Z` dapat mengubah sudut pandang, jarak, dan kesan kedalaman objek. Dalam pipeline grafika komputer, posisi kamera menjadi bagian dari informasi kamera yang kemudian digunakan untuk membangun transformasi pandangan, yaitu proses mengubah koordinat dunia menjadi koordinat relatif terhadap kamera.

Sebelum lanjut, mahasiswa perlu membiasakan diri membaca koordinat kamera sebagai titik di ruang 3D, bukan sebagai arah atau orientasi. Dengan memahami **Camera Position**, kita memiliki dasar untuk memahami bagaimana kamera “berdiri” di dalam adegan sebelum kita menentukan ke mana ia memandang.

### Inti yang Harus Ditekankan

- **Camera Position** adalah koordinat lokasi kamera dalam **World Space**.
- Contoh `(0, 2, 5)` berarti `X = 0`, `Y = 2`, `Z = 5`.
- Posisi kamera menentukan sudut pandang dan jarak kamera terhadap objek.
- Posisi kamera belum menentukan arah pandang; arah pandang membutuhkan **Target**.
- Dalam rendering, posisi kamera menjadi bagian penting dari transformasi pandangan.

### Transisi ke Slide Berikutnya

Setelah kita tahu di mana kamera berada, langkah berikutnya adalah menentukan ke mana kamera melihat. Pada slide berikutnya, kita akan membahas **Target**, yaitu titik yang dilihat kamera, serta bagaimana arah pandang dapat dipahami dari hubungan antara target dan posisi kamera.

---

## Slide 008 - Target

### Narasi

Dalam setup kamera, **Target** adalah titik di world space yang menjadi fokus pandangan kamera. Jika kamera berada di `Camera = (0,2,5)`, informasi itu hanya menentukan posisi kamera, tetapi belum menentukan ke mana kamera melihat. Dengan `Target = (0,0,0)`, kita menyatakan bahwa kamera diarahkan ke titik asal koordinat.

Secara geometris, arah pandang kamera dapat diperoleh dari selisih posisi target dan posisi kamera:

```text
Arah pandang = Target - Camera Position
```

Untuk contoh di slide:

```text
Target - Camera = (0,0,0) - (0,2,5) = (0,-2,-5)
```

Vektor ini menunjukkan bahwa kamera di `(0,2,5)` melihat ke arah bawah dan ke depan menuju titik `(0,0,0)`. Pada tahap ini, vektor tersebut masih berupa arah mentah; panjangnya belum dinormalisasi.

Hal penting yang perlu dipahami mahasiswa adalah bahwa **posisi kamera** dan **target kamera** adalah dua informasi yang berbeda. Posisi menentukan di mana kamera berada, sedangkan target menentukan ke mana kamera menghadap. Dalam rendering pipeline, informasi ini biasanya digunakan untuk membangun **view matrix** atau transformasi kamera, sehingga objek-objek di world space dapat dipindahkan ke koordinat kamera sebelum diproyeksikan ke layar.

Kita juga perlu menyadari bahwa target tidak harus selalu berada di pusat objek. Target bisa dipilih sesuai kebutuhan visual, misalnya titik tertentu pada model, titik tengah adegan, atau titik yang membuat komposisi kamera lebih baik. Selama target dan posisi kamera konsisten, arah pandang kamera akan tetap terdefinisi dengan jelas.

### Inti yang Harus Ditekankan

- **Target** adalah titik yang dilihat kamera, bukan posisi kamera itu sendiri.
- Arah pandang dasar dihitung dari `Target - Camera Position`.
- Contoh `Camera = (0,2,5)` dan `Target = (0,0,0)` menghasilkan arah `(0,-2,-5)`.
- Posisi kamera menentukan lokasi kamera, sedangkan target menentukan orientasi pandangan.
- Konsep ini menjadi dasar pembentukan view transform sebelum kamera diproses lebih lanjut.

### Transisi ke Slide Berikutnya

Setelah kita mengetahui arah pandang dari selisih target dan posisi kamera, langkah berikutnya adalah mengubah arah tersebut menjadi vektor satuan. Di slide berikutnya, kita akan membahas **Forward Vector** sebagai arah kamera yang sudah dinormalisasi.

---

## Slide 009 - Forward Vector

### Narasi

Pada slide sebelumnya, kita sudah mengenal posisi kamera dan target. Sekarang kita formalisasi arah pandangnya sebagai **Forward Vector**.

Secara konsep, forward vector didefinisikan sebagai:

```text
Forward =
normalize(
  Target - Position
)
```

Artinya, kita mengambil vektor dari posisi kamera menuju target, lalu menormalkannya. Hasilnya adalah **unit vector** yang hanya menyatakan arah, bukan jarak.

Contoh pada slide:

```text
Position = (0,0,5)
Target   = (0,0,0)
```

Vektor dari kamera ke target adalah `(0,0,0) - (0,0,5) = (0,0,-5)`. Setelah dinormalisasi, hasilnya menjadi `Forward ≈ (0,0,-1)`. Ini berarti kamera berada di sumbu `Z` positif dan melihat ke arah sumbu `Z` negatif.

Dalam grafika komputer, forward vector penting karena kamera tidak cukup hanya tahu “di mana” dan “ke mana”. Kamera juga harus tahu **arah pandang** secara eksplisit. Arah ini akan digunakan untuk membangun orientasi kamera, misalnya dalam fungsi `lookAt`, view matrix, atau transformasi dari world space ke camera space.

Intuisi visualnya sederhana: bayangkan kamera sebagai panah kecil. Posisi adalah pangkal panah, target adalah ujung yang dituju, dan forward vector adalah arah panah tersebut. Karena sudah dinormalisasi, panjang panah tidak lagi penting; yang penting adalah arahnya.

Sebelum lanjut, hal yang perlu dipahami mahasiswa adalah bahwa **Forward bukan posisi target**, melainkan arah dari kamera ke target. Jika target bergeser, forward berubah. Jika posisi kamera bergeser tetapi target tetap, forward juga bisa berubah.

### Inti yang Harus Ditekankan

- **Forward Vector** adalah arah pandang kamera, bukan posisi kamera atau posisi target.
- Forward dihitung dari `Target - Position`, lalu `normalize` agar menjadi unit vector.
- Contoh `Position = (0,0,5)` dan `Target = (0,0,0)` menghasilkan `Forward ≈ (0,0,-1)`.
- Forward penting untuk orientasi kamera, `lookAt`, view matrix, dan transformasi ke camera space.

### Transisi ke Slide Berikutnya

Sekarang kita sudah tahu kamera melihat ke mana. Namun, agar orientasi kamera benar-benar tidak ambigu, kita juga perlu menentukan mana yang dianggap “atas”. Untuk itu, slide berikutnya akan membahas **Up Vector**.

---

## Slide 010 - Up Vector

### Narasi

Setelah **Forward Vector** menentukan ke mana kamera melihat, masih ada satu pertanyaan penting: bagian mana dari kamera yang dianggap “atas”? Tanpa informasi ini, kamera bisa berputar mengelilingi sumbu pandangan dan menghasilkan tampilan yang berbeda meskipun `Position` dan `Target` sama.

`Up Vector` menjawab pertanyaan itu. Ia adalah vektor yang menunjukkan arah atas pada ruang kamera atau ruang dunia, tergantung konvensi yang digunakan.

```text
Up = (0,1,0)
```

Pada contoh ini, vektor `Up` menunjuk ke arah `+Y`. Artinya, sumbu `Y` positif dipilih sebagai arah atas.

```text
+Y dianggap sebagai arah atas
```

Pilihan ini penting karena **orientasi kamera tidak boleh ambigu**. `Forward` hanya memberi arah pandang, tetapi tidak menentukan apakah kamera tegak, miring, atau terbalik. Dengan `Up`, kita memiliki acuan visual yang konsisten: objek yang berada di atas pada dunia akan tetap tampak di atas pada layar selama kamera tidak sengaja dirotasi.

Dalam konteks rendering pipeline, `Up` menjadi salah satu komponen dasar untuk membangun **basis kamera**. Basis ini nantinya membantu mengubah koordinat dunia ke koordinat kamera, sehingga proses proyeksi dan rasterisasi dapat dilakukan dengan orientasi yang benar.

Yang perlu dipahami sebelum lanjut: `Up` bukan sekadar angka `(0,1,0)`. Ia adalah penentu “ke atas mana” kamera menghadap. Jika `Up` tidak konsisten, hasil render bisa tampak miring atau terbalik meskipun posisi dan arah kamera sama.

### Inti yang Harus Ditekankan

- `Up = (0,1,0)` berarti `+Y` dipilih sebagai arah atas.
- `Up Vector` menghilangkan ambiguitas orientasi kamera setelah `Forward` diketahui.
- `Up` menjadi bagian penting dari basis kamera yang akan digunakan untuk transformasi kamera.

### Transisi ke Slide Berikutnya

Dengan `Forward` dan `Up` sudah tersedia, langkah berikutnya adalah menentukan arah kanan kamera. Arah kanan ini biasanya dihitung dari hubungan antara `Forward` dan `Up`, sehingga ketiga vektor tersebut membentuk basis kamera yang lengkap.

---

## Slide 011 - Right Vector

### Narasi

Setelah kita memiliki **Up Vector**, langkah berikutnya adalah menentukan **Right Vector**. Dalam grafika komputer, kamera tidak cukup hanya tahu posisi dan arah melihat; kamera juga perlu sistem koordinat lokal yang konsisten. Sistem ini biasanya dibentuk dari tiga vektor basis:

- `Forward`: arah kamera melihat.
- `Right`: arah kanan kamera.
- `Up`: arah atas kamera.

Tiga vektor ini membantu kita mengubah objek dari ruang dunia ke ruang kamera sebelum diproyeksikan ke layar.

Secara matematis, `Right` dapat diperoleh dari **cross product** antara `Forward` dan `Up`:

```text
Right =
normalize(
  Forward × Up
)
```

Yang perlu kita perhatikan adalah arti simbol `×` di sini. Cross product menghasilkan vektor baru yang **tegak lurus** terhadap kedua vektor input. Karena `Forward` dan `Up` umumnya tidak persis tegak lurus, hasil cross product tetap tegak lurus terhadap keduanya, tetapi panjangnya tidak selalu satu. Karena itu kita gunakan `normalize` agar `Right` menjadi vektor satuan.

Urutan cross product sangat penting. `Forward × Up` dan `Up × Forward` menghasilkan arah yang berlawanan. Karena itu slide menekankan bahwa urutan harus mengikuti **convention** yang digunakan. Misalnya, pada konvensi umum di mana kamera melihat ke arah `-Z` dan `Up = (0,1,0)`, maka `Forward × Up` dapat menghasilkan arah `+X`, yang sesuai dengan sumbu kanan kamera.

Intuisi visualnya sederhana: jika `Forward` adalah arah pandang dan `Up` adalah arah atas, maka `Right` adalah arah yang "menyamping" dari bidang pandang. Vektor ini penting karena nanti akan menjadi bagian dari orientasi kamera, sehingga sumbu layar akan konsisten: kanan tetap kanan, atas tetap atas, dan arah kamera tidak berputar secara ambigu.

Hal yang perlu dipahami sebelum lanjut adalah bahwa `Right` bukan sekadar vektor sembarang yang tegak lurus `Forward`. Ia harus konsisten dengan `Up` dan dengan convention koordinat yang dipakai. Jika `Forward` dan `Up` hampir sejajar, hasil cross product akan sangat kecil atau bahkan nol, sehingga basis kamera tidak dapat dibentuk dengan baik.

### Inti yang Harus Ditekankan

- **Right Vector** adalah salah satu vektor basis kamera yang menunjukkan arah kanan kamera.
- `Right` dihitung dengan `normalize(Forward × Up)` agar hasilnya tegak lurus dan berpanjang satu.
- Urutan cross product menentukan arah hasil; `Forward × Up` dan `Up × Forward` bisa menghasilkan arah berlawanan.
- `Right` penting untuk membangun orientasi kamera yang konsisten dalam rendering pipeline, terutama sebelum transformasi view dan proyeksi.

### Transisi ke Slide Berikutnya

Setelah `Right` diperoleh, `Up` yang semula mungkin tidak lagi tegak lurus terhadap `Forward` perlu dikoreksi. Pada slide berikutnya, kita akan melihat bagaimana **Corrected Up** dihitung dari `Right × Forward` sehingga ketiga vektor membentuk basis kamera yang saling tegak lurus.

---

## Slide 012 - Corrected Up

### Narasi

Setelah kita memperoleh vektor **Right**, langkah berikutnya adalah memperbaiki vektor **Up** yang akan digunakan sebagai sumbu kamera.

```text
Corrected Up =
Right × Forward
```

Secara intuitif, vektor **Up** awal sering kali hanya merupakan arah up dunia, misalnya `(0, 1, 0)`. Vektor itu belum tentu tegak lurus terhadap **Forward**, terutama ketika kamera miring atau melihat ke arah yang tidak sejajar dengan sumbu dunia. Karena basis kamera harus saling tegak lurus, kita perlu menghitung ulang **Up** dari dua vektor yang sudah lebih konsisten, yaitu **Right** dan **Forward**.

Hasil cross product `Right × Forward` menghasilkan vektor yang tegak lurus terhadap kedua vektor tersebut. Dengan demikian, **Corrected Up** menjadi sumbu atas kamera yang benar-benar sesuai dengan orientasi kamera, bukan sekadar arah up dunia.

Perhatikan urutan cross product. `Right × Forward` menghasilkan arah up yang sesuai dengan convention basis kamera. Jika dibalik menjadi `Forward × Right`, hasilnya akan berlawanan arah. Dalam grafika komputer, tanda vektor sangat penting karena menentukan orientasi sumbu kamera.

Ketiga vektor ini kemudian membentuk **basis camera**:

- **Forward**: arah pandang kamera.
- **Right**: arah kanan kamera.
- **Corrected Up**: arah atas kamera yang sudah dikoreksi.

Basis ini penting karena menjadi dasar untuk mengubah koordinat dunia ke koordinat kamera, yang nanti akan digunakan dalam pembentukan **View Matrix**.

### Inti yang Harus Ditekankan

- **Corrected Up** dihitung setelah **Right** tersedia.
- Rumusnya adalah `Corrected Up = Right × Forward`.
- Tujuannya memastikan **Up** benar-benar tegak lurus terhadap **Forward** dan **Right**.
- Urutan cross product menentukan arah sumbu kamera.
- Basis kamera yang saling tegak lurus menjadi dasar pembentukan **View Matrix**.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana ketiga vektor ini disusun sebagai **Basis Camera** dan mengapa basis tersebut menjadi dasar pembentukan **View Matrix**.

---

## Slide 013 - Basis Camera

### Narasi

Setelah kita memperoleh **Right**, **Forward**, dan **Corrected Up**, langkah berikutnya adalah melihat ketiganya sebagai satu kesatuan: **basis camera**.

Pada diagram, titik **Camera** adalah titik asal sistem koordinat kamera. Dari titik tersebut, tiga arah utama ditampilkan: **Up** ke atas, **Right** ke samping, dan **Forward** ke depan. Secara geometris, ketiganya saling tegak lurus, sehingga membentuk sumbu-sumbu koordinat lokal yang menempel pada kamera.

Intuisi pentingnya adalah: kamera tidak cukup didefinisikan hanya oleh posisinya. Kita juga perlu tahu ke mana kamera menghadap, mana arah kanan, dan mana arah atas. Tanpa informasi ini, posisi kamera saja tidak cukup untuk menentukan bagaimana scene terlihat.

Basis camera inilah yang menjadi dasar pembentukan **View Matrix**. Matrix tersebut nantinya akan menggunakan vektor-vektor basis ini untuk mengubah koordinat scene dari sistem dunia ke sistem koordinat kamera. Dengan kata lain, basis camera memberi “kerangka acuan” bagi kamera.

Saat membaca diagram, kita dapat memahaminya sebagai berikut:

- **Camera** adalah origin atau titik pusat pandangan.
- **Forward** menunjukkan arah pandang kamera.
- **Right** menunjukkan arah kanan relatif terhadap kamera.
- **Up** menunjukkan arah atas yang sudah dikoreksi agar tetap tegak lurus terhadap **Right** dan **Forward**.

Hal yang perlu dipahami sebelum lanjut adalah bahwa basis ini bukan sekadar gambar panah. Ia adalah representasi matematis dari orientasi kamera. Jika salah satu vektor tidak konsisten, misalnya **Up** tidak tegak lurus, maka sistem koordinat kamera menjadi tidak stabil dan hasil transformasi view dapat tampak miring atau tidak sesuai harapan.

### Inti yang Harus Ditekankan

- **Basis camera** terdiri dari tiga vektor: **Right**, **Forward**, dan **Up**.
- Ketiga vektor tersebut saling tegak lurus dan membentuk sistem koordinat lokal kamera.
- Basis camera menjadi dasar pembentukan **View Matrix**.
- Kamera didefinisikan tidak hanya oleh posisi, tetapi juga oleh orientasi sumbu **Right**, **Forward**, dan **Up**.

### Transisi ke Slide Berikutnya

Dengan basis kamera yang sudah terbentuk, langkah berikutnya adalah menggunakan basis tersebut untuk melakukan **View Transformation**, yaitu mengubah koordinat scene dari **World Coordinate** ke **View / Camera Coordinate**.

---

## Slide 014 - View Transformation

### Narasi

Setelah kita memiliki **basis kamera** yang terdiri dari arah `Right`, `Up`, dan `Forward`, langkah berikutnya adalah menggunakan basis tersebut untuk mengubah cara kita memandang scene.

```text
World Coordinate
       ↓
View / Camera Coordinate
```

Diagram di atas menunjukkan perubahan **sistem koordinat**, bukan perpindahan objek secara fisik. Objek tetap memiliki posisi di dunia, tetapi koordinatnya akan dinyatakan ulang relatif terhadap kamera.

Dalam **World Coordinate**, posisi objek biasanya dinyatakan terhadap titik acuan global scene. Misalnya, sebuah kubus berada pada koordinat tertentu di dunia. Namun, saat rendering, yang kita butuhkan bukan hanya posisi absolut, melainkan posisi objek terhadap kamera: objek berada di depan, di belakang, di kanan, di kiri, atau di atas kamera.

**View Transformation** menjawab kebutuhan itu. Transformasi ini menyatakan seluruh scene relatif terhadap kamera, sehingga kamera menjadi acuan utama. Dengan kata lain, kita “memindahkan” sistem acuan dari dunia ke kamera.

Hal ini penting dalam **rendering pipeline** karena tahap berikutnya, seperti proyeksi dan rasterisasi, jauh lebih mudah dilakukan jika kamera berada pada posisi acuan yang konsisten. Basis kamera yang sudah kita bahas sebelumnya menjadi dasar pembentukan `View Matrix`, yaitu matriks yang merepresentasikan transformasi dari world ke view.

Sebelum lanjut, mahasiswa perlu memahami bahwa **View Transformation** tidak mengubah bentuk atau ukuran objek. Yang berubah adalah representasi koordinatnya. Objek yang sama dapat memiliki koordinat berbeda tergantung posisi dan orientasi kamera.

### Inti yang Harus Ditekankan

- **View Transformation** mengubah `World Coordinate` menjadi `View / Camera Coordinate`.
- Tujuannya adalah menyatakan seluruh scene relatif terhadap kamera.
- Basis kamera dari slide sebelumnya menjadi dasar pembentukan `View Matrix`.
- Yang berubah adalah sistem acuan koordinat, bukan geometri objek secara intrinsik.

### Transisi ke Slide Berikutnya

Dengan memahami transformasi ini, kita bisa masuk ke **View Space**, yaitu ruang di mana kamera secara konseptual dianggap berada pada `origin` dengan orientasi standar, sehingga world ditransformasikan relatif terhadap kamera.

---

## Slide 015 - View Space

### Narasi

Setelah scene dinyatakan dalam **World Coordinate**, langkah berikutnya adalah memahaminya dari sudut pandang kamera. Dalam **View Space**, kamera secara konseptual diletakkan di `origin` dengan orientasi standar. Artinya, sistem koordinat yang kita gunakan sekarang bukan lagi koordinat dunia global, melainkan koordinat yang “mengikuti” posisi dan arah pandang kamera.

```text
World Coordinate
       ↓
View / Camera Coordinate
```

Dengan representasi ini, seluruh objek di dunia seolah-olah diposisikan ulang relatif terhadap kamera. Kamera sendiri tidak perlu dipindahkan secara eksplisit; yang berubah adalah posisi dan orientasi world terhadap kamera. Cara berpikir ini penting karena banyak tahap rendering berikutnya, seperti **projection** dan **clipping**, jauh lebih mudah dilakukan ketika kamera berada di titik acuan yang tetap.

Secara pipeline, **View Space** berada setelah representasi objek dalam world dan sebelum objek diproyeksikan ke layar. Di tahap ini, kita sudah tahu apa yang berada di depan kamera, apa yang berada di belakang kamera, dan bagaimana posisi objek relatif terhadap arah pandang. Pemahaman ini menjadi dasar penting sebelum kita masuk ke proses proyeksi dan transformasi ke layar.

### Inti yang Harus Ditekankan

- **View Space** adalah sistem koordinat di mana kamera dianggap berada di `origin`.
- World ditransformasikan menjadi relatif terhadap kamera, bukan kamera yang dipindahkan secara eksplisit.
- Konsep ini menyederhanakan tahap berikutnya seperti **projection**, **clipping**, dan penentuan apa yang terlihat di layar.
- Mahasiswa perlu memahami bahwa yang berubah adalah perspektif: objek tetap ada di world, tetapi posisinya dinyatakan ulang relatif terhadap kamera.

### Transisi ke Slide Berikutnya

Jika kamera bergerak, efeknya bisa dipahami sebagai world yang bergerak ke arah berlawanan. Pada slide berikutnya, kita akan melihat analogi sederhana dari hubungan ini.

---

## Slide 016 - Analogi View Transformation

### Narasi

Intuisi paling penting dari **view transformation** adalah bahwa yang kita butuhkan dalam rendering bukan “di mana kamera berada secara mutlak”, melainkan **bagaimana dunia tampak relatif terhadap kamera**. Dalam grafika komputer, kita biasanya ingin kamera berada pada posisi yang mudah diproses, yaitu di `origin` dengan orientasi standar. Karena itu, jika kamera bergerak, kita tidak selalu memindahkan kamera secara langsung; sebaliknya, kita memindahkan seluruh dunia ke dalam koordinat kamera.

Bayangkan situasi sederhana. Jika `Camera` bergerak ke kanan, maka dari sudut pandang kamera, objek-objek di dunia akan tampak bergeser ke kiri. Jadi, secara matematis:

```text
Camera → kanan
```

setara dengan:

```text
World → kiri
```

Ini bukan berarti dunia fisik benar-benar bergerak. Yang terjadi adalah perubahan **sistem acuan koordinat**. Kita sedang mengubah representasi posisi objek dari `World Space` ke `View Space`.

Analoginya bisa kita lihat dari pengalaman sehari-hari. Jika kita berdiri di jalan dan sebuah mobil berada di depan kita, lalu kita melangkah ke kanan, mobil itu tidak berpindah ke kiri secara mutlak. Namun, relatif terhadap posisi kita, mobil itu tampak bergeser ke kiri. Dalam rendering, kamera berperan seperti “posisi pengamat” tersebut.

Hal ini penting karena pipeline rendering membutuhkan posisi objek dalam koordinat yang konsisten. Setelah objek direpresentasikan dalam `View Space`, proses berikutnya seperti **projection**, **clipping**, dan **rasterization** menjadi lebih mudah. Dengan kata lain, **view transformation** adalah langkah yang menjembatani dunia 3D dan cara kamera melihat dunia tersebut.

Perhatikan bahwa pada slide sebelumnya kita sudah menyatakan bahwa dalam `View Space`, kamera dianggap berada di `origin`. Slide ini memperjelas konsekuensi dari asumsi itu: jika kamera berpindah, maka dunia akan ditransformasikan ke arah yang berlawanan agar posisi relatifnya tetap benar.

### Inti yang Harus Ditekankan

- **View transformation** mengubah `World Space` menjadi `View Space` dengan menjadikan kamera sebagai acuan.
- Jika `Camera` bergerak ke kanan, `World` tampak bergerak ke kiri karena yang dihitung adalah **posisi relatif**.
- Kamera dianggap berada di `origin` dengan orientasi standar, sehingga seluruh objek direpresentasikan relatif terhadap kamera.
- Intuisi ini menjadi dasar sebelum memahami bagaimana **view matrix** diformalkan secara matematis.

### Transisi ke Slide Berikutnya

Setelah kita memahami intuisi bahwa gerakan kamera dan gerakan dunia tampak berlawanan, langkah berikutnya adalah melihat bagaimana hubungan relatif tersebut dituangkan secara formal. Pada slide berikutnya, kita akan membahas **View Matrix**, yaitu transformasi yang memetakan `worldPosition` menjadi `viewPosition`.

---

## Slide 017 - View Matrix

### Narasi

Kita sudah melihat bahwa ketika kamera bergerak, efeknya bisa dipahami sebagai pergeseran dunia ke arah berlawanan. Pada tahap ini, hubungan itu dirangkum menjadi satu operasi matriks: **View Matrix**.

Secara visual, **View Matrix** mengubah titik dari **World Space** ke **View Space**:

```text
World Space
   ↓
View Space
```

Artinya, posisi objek tidak lagi hanya dinyatakan sebagai koordinat mutlak di dunia, tetapi sebagai posisi relatif terhadap kamera.

Secara matematis, konsepnya dapat ditulis sebagai:

```text
viewPosition =
ViewMatrix × worldPosition
```

Di sini, `worldPosition` adalah posisi titik atau objek pada ruang dunia. `ViewMatrix` adalah matriks yang merepresentasikan perubahan sistem koordinat tersebut. Hasilnya, `viewPosition`, adalah posisi titik yang sama setelah dilihat dari sudut pandang kamera.

Poin pentingnya adalah: **View Matrix** tidak mengubah objek secara fisik. Yang berubah adalah kerangka acuan koordinat. Objek tetap berada di tempat yang sama di dunia, tetapi koordinatnya ditulis ulang agar sesuai dengan posisi dan orientasi kamera.

Hal ini penting dalam grafika komputer karena tahap berikutnya dalam rendering pipeline, seperti clipping dan proyeksi, bekerja lebih mudah ketika koordinat sudah berada dalam ruang yang relatif terhadap kamera. Dengan kata lain, **View Matrix** menjadi jembatan antara dunia 3D dan pandangan kamera.

### Inti yang Harus Ditekankan

- **View Matrix** mengubah koordinat dari **World Space** ke **View Space**.
- Konsepnya: `viewPosition = ViewMatrix × worldPosition`.
- Yang berubah adalah kerangka acuan koordinat, bukan objek secara fisik.
- Hasilnya adalah posisi objek relatif terhadap kamera, sehingga siap untuk tahap berikutnya.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat hubungan **View Matrix** dengan transformasi kamera itu sendiri, khususnya mengapa ia berkaitan dengan `inverse` dari transformasi kamera.

---

## Slide 018 - View Matrix dan Camera Transform

### Narasi

Kita sudah melihat bahwa `View Matrix` mengubah posisi dari `World Space` ke `View Space`. Pada slide ini, kita melangkah satu tingkat lebih dalam: `View Matrix` tidak muncul dari ruang kosong, tetapi berkaitan erat dengan transformasi kamera itu sendiri.

Kamera dalam scene 3D memiliki posisi dan orientasi di `World Space`. Misalnya kamera bisa berada di titik tertentu, menghadap ke arah tertentu, dan memiliki sumbu `up` tertentu. Transformasi kamera ini sering kita sebut `Camera Transform`. Ia mendeskripsikan bagaimana kamera diletakkan dan diarahkan di dalam dunia virtual.

Yang penting untuk dipahami adalah hubungan antara `Camera Transform` dan `View Matrix`. `View Matrix` berkaitan dengan `inverse` dari transformasi kamera. Secara sederhana:

```text
View Matrix
≈ Inverse(Camera Transform)
```

Artinya, jika kamera bergerak atau berputar di `World Space`, `View Matrix` melakukan transformasi yang berlawanan terhadap objek-objek di dunia. Intuisinya: untuk melihat dunia dari sudut pandang kamera, kita seolah-olah memindahkan seluruh dunia ke posisi relatif terhadap kamera.

Hal ini penting dalam rendering pipeline karena sebelum objek diproyeksikan ke layar, koordinat objek biasanya perlu diubah ke `View Space`. Di ruang ini, kamera berada pada posisi yang lebih sederhana, misalnya di titik asal, dan sumbu pandangan mengarah ke arah tertentu. Dengan cara ini, tahap proyeksi berikutnya menjadi lebih konsisten.

Kita perlu berhati-hati dengan istilah `inverse`. `Camera Transform` menggambarkan transformasi kamera terhadap dunia, sedangkan `View Matrix` adalah transformasi yang membalik efek tersebut agar dunia tampak dari perspektif kamera. Jadi, `View Matrix` bukan sekadar "posisi kamera", melainkan transformasi ruang yang memungkinkan koordinat dunia dibaca dari sudut pandang kamera.

Sebelum lanjut, mahasiswa perlu menangkap inti berikut: kamera memiliki transformasi di `World Space`, dan `View Matrix` pada dasarnya adalah invers dari transformasi tersebut. Pemahaman ini menjadi dasar untuk membentuk kamera secara praktis, misalnya dengan menentukan posisi, target, dan arah `up`.

### Inti yang Harus Ditekankan

- `Camera Transform` mendeskripsikan posisi dan orientasi kamera di `World Space`.
- `View Matrix` berkaitan dengan `inverse` dari `Camera Transform`.
- Secara sederhana, `View Matrix ≈ Inverse(Camera Transform)`.
- Tujuannya adalah mengubah koordinat dunia ke `View Space`, yaitu ruang relatif terhadap kamera.
- Konsep ini penting sebelum masuk ke pembentukan kamera praktis seperti `lookAt`.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa `View Matrix` adalah invers dari transformasi kamera, langkah berikutnya adalah melihat bagaimana kamera itu dibentuk secara praktis. Pada slide berikutnya, kita akan membahas konsep `lookAt`, yaitu cara menentukan orientasi kamera berdasarkan posisi, target, dan arah `up`.

---

## Slide 019 - Look-At Concept

### Narasi

Dalam membangun kamera 3D, kita jarang langsung menulis matriks orientasi secara manual. Cara yang lebih alami adalah menentukan **di mana kamera berada**, **ke mana kamera melihat**, dan **mana arah yang dianggap atas**. Konsep inilah yang biasanya direpresentasikan oleh fungsi:

```text
lookAt(
  position,
  target,
  up
)
```

Parameter `position` menyatakan lokasi kamera pada **World Space**. Parameter `target` menyatakan titik yang ingin dilihat oleh kamera. Dari dua titik ini, arah pandang kamera dapat dipahami sebagai arah dari `position` menuju `target`. Dengan kata lain, kamera tidak lagi ditentukan oleh sudut rotasi yang abstrak, tetapi oleh hubungan spasial antara posisi kamera dan objek yang diamati.

Parameter `up` berperan menjaga orientasi kamera tetap stabil secara visual. Tanpa informasi arah atas, kamera bisa memiliki banyak kemungkinan orientasi yang sama-sama menghadap ke `target`, misalnya miring atau berputar di sekitar sumbu pandangnya. Dengan `up`, kita memberi batasan bahwa sumbu vertikal kamera harus sejajar atau mendekati arah tertentu, biasanya arah `y` positif.

Konsep `lookAt` sangat penting karena ia membantu kita membentuk **camera transform** secara intuitif. Camera transform menggambarkan posisi dan orientasi kamera di dunia. Setelah transformasi kamera terbentuk, **View Matrix** dapat diperoleh sebagai kebalikan dari transformasi tersebut, sesuai dengan ide yang sudah kita bahas sebelumnya:

```text
View Matrix
≈ Inverse(Camera Transform)
```

Jadi, `lookAt` bukan pengganti View Matrix, melainkan cara praktis untuk menentukan orientasi kamera yang kemudian akan digunakan dalam pembentukan View Matrix. Dalam pipeline, hal ini membantu mengubah koordinat dunia menjadi koordinat yang relatif terhadap kamera, yaitu **View Coordinate**.

Sebelum lanjut, mahasiswa perlu memahami bahwa `lookAt` menjawab pertanyaan sederhana: kamera berada di mana, melihat apa, dan bagaimana orientasi atasnya. Pemahaman ini penting karena banyak sistem grafika menyediakan fungsi serupa untuk menempatkan kamera secara cepat dan konsisten.

### Inti yang Harus Ditekankan

- `lookAt(position, target, up)` digunakan untuk membentuk orientasi kamera berdasarkan posisi, titik pandang, dan arah atas.
- `position` adalah lokasi kamera, `target` adalah titik yang dilihat, dan `up` menjaga kamera tidak miring secara tidak diinginkan.
- Konsep ini membantu membangun **camera transform**, yang kemudian berkaitan dengan **View Matrix** sebagai inverse dari transformasi kamera.
- `lookAt` adalah cara intuitif menempatkan kamera sebelum masuk ke pipeline transformasi menuju **View Coordinate**.

### Transisi ke Slide Berikutnya

Setelah kamera berhasil diorientasikan dengan konsep `lookAt`, langkah berikutnya adalah melihat bagaimana vertex bergerak dari koordinat lokal ke koordinat dunia, lalu ke koordinat kamera melalui View Matrix.

---

## Slide 020 - Pipeline Sampai View Space

### Narasi

Setelah konsep `lookAt` membantu membentuk orientasi kamera, kita perlu melihat bagaimana posisi vertex bergerak melalui tahap awal pipeline rendering. Diagram pada slide dibaca dari atas ke bawah sebagai rangkaian transformasi koordinat:

```text
Local Vertex
     ↓
Model Matrix
     ↓
World Coordinate
     ↓
View Matrix
     ↓
View Coordinate
```

Setiap panah menunjukkan perubahan sistem koordinat, bukan sekadar perpindahan data.

1. **Local Vertex** adalah posisi titik dalam sistem koordinat objek itu sendiri.
2. **Model Matrix** mengubah posisi tersebut ke **World Coordinate**, yaitu sistem koordinat bersama seluruh objek dalam dunia.
3. **World Coordinate** menjadi titik temu antara objek dan kamera, karena semua objek sudah berada dalam ruang yang sama.
4. **View Matrix** kemudian mengubah **World Coordinate** menjadi **View Coordinate**, yaitu koordinat relatif terhadap kamera.
5. **View Coordinate** adalah posisi vertex setelah kamera dijadikan acuan, sehingga vertex siap untuk tahap proyeksi.

Inti dari tahap ini adalah pemisahan antara transformasi objek dan transformasi kamera. `Model Matrix` menjawab pertanyaan "di mana objek berada dalam dunia?", sedangkan `View Matrix` menjawab pertanyaan "bagaimana objek terlihat dari posisi kamera?". Karena `lookAt` sebelumnya menentukan `position`, `target`, dan `up`, informasi tersebut dapat digunakan untuk membentuk orientasi kamera yang dipakai oleh `View Matrix`.

Perlu diperhatikan bahwa vertex yang sudah berada di **View Coordinate** belum menjadi titik di layar. Ia sudah berada dalam kerangka kamera, tetapi masih berada dalam ruang 3D. Karena itu, slide ini menegaskan bahwa setelah tahap ini vertex **siap diproyeksikan**, bukan berarti sudah selesai menjadi gambar 2D.

### Inti yang Harus Ditekankan

- Pipeline sampai view space mengubah vertex dari koordinat objek ke koordinat kamera.
- `Model Matrix` membawa vertex dari **Local Vertex** ke **World Coordinate**.
- `View Matrix` membawa vertex dari **World Coordinate** ke **View Coordinate**.
- **View Coordinate** adalah acuan kamera sebelum tahap proyeksi.
- Setelah berada di view space, vertex siap diproyeksikan, tetapi belum menjadi koordinat layar 2D.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan melihat masalah utama setelah vertex berada dalam ruang 3D: bagaimana mengubah koordinat 3D menjadi koordinat 2D pada layar melalui proses **Projection**.

---

## Slide 021 - Masalah 3D ke Layar 2D

### Narasi

Setelah vertex berada di **view coordinate**, kita sudah menyelesaikan masalah posisi objek relatif terhadap kamera. Namun masih ada satu masalah mendasar yang belum selesai: dunia virtual yang kita bangun tetap tiga dimensi, sedangkan layar monitor, kanvas, atau framebuffer pada akhirnya hanya dua dimensi.

Secara sederhana, ruang 3D memiliki tiga sumbu:

```text
X
Y
Z
```

Sementara layar hanya memiliki dua sumbu:

```text
X
Y
```

Artinya, setiap titik 3D harus diubah menjadi titik 2D agar bisa digambar. Proses inilah yang disebut **Projection**.

Dalam pipeline rendering, posisi **projection** sangat penting karena ia menjadi jembatan antara ruang 3D dan permukaan 2D. Tanpa projection, kita tidak bisa menentukan di mana sebuah objek muncul di layar, seberapa besar objek terlihat, dan bagaimana kedalaman `Z` memengaruhi tampilan akhir.

Kita perlu memahami bahwa projection bukan sekadar membuang sumbu `Z`. Sumbu `Z` tetap penting untuk informasi kedalaman, penentuan objek mana yang lebih dekat atau lebih jauh, serta proses lanjutan seperti clipping dan rasterisasi. Yang terjadi adalah posisi 3D ditransformasikan ke representasi yang dapat dipetakan ke layar 2D.

Pada tahap ini, cukup pahami bahwa setelah **view space**, vertex masih berada dalam ruang 3D. Langkah berikutnya adalah mengubah ruang 3D tersebut menjadi bentuk yang sesuai dengan layar.

### Inti yang Harus Ditekankan

- Dunia 3D memiliki koordinat `X`, `Y`, `Z`, sedangkan layar 2D hanya memiliki `X`, `Y`.
- **Projection** adalah proses yang memungkinkan titik 3D dipetakan ke permukaan 2D.
- Projection bukan sekadar menghapus `Z`; `Z` tetap berperan untuk kedalaman dan penentuan tampilan.
- Setelah **view coordinate**, vertex masih perlu diproyeksikan sebelum dapat dirasterisasi ke layar.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan melihat apa sebenarnya **projection** itu, serta bagaimana proses ini mengubah posisi 3D menjadi bentuk yang dapat dipetakan ke layar.

---

## Slide 022 - Apa Itu Projection?

### Narasi

Setelah kita melihat bahwa dunia 3D memiliki koordinat `X`, `Y`, dan `Z`, sedangkan layar hanya memiliki `X` dan `Y`, muncul kebutuhan untuk memetakan ruang 3D ke bidang 2D. Proses inilah yang disebut **Projection**.

Dalam pipeline rendering, **projection** biasanya berada setelah transformasi kamera atau transformasi dunia, dan sebelum tahap **rasterisasi**. Pada tahap ini, posisi titik 3D tidak lagi diperlakukan sebagai titik bebas di ruang, tetapi diubah menjadi bentuk yang siap dipetakan ke layar.

Secara intuitif, projection menentukan bagaimana kamera “melihat” objek. Ia mengatur bagaimana kedalaman, jarak, dan posisi relatif objek diterjemahkan menjadi koordinat layar. Karena itu, projection sangat memengaruhi tampilan akhir gambar, misalnya apakah objek yang lebih jauh tampak lebih kecil atau tetap berukuran sama.

Dua jenis utama projection adalah:

```text
Orthographic Projection
Perspective Projection
```

Keduanya sama-sama memetakan ruang 3D ke layar 2D, tetapi menggunakan aturan yang berbeda dalam menangani jarak terhadap kamera. Pada pertemuan berikutnya, kita akan mulai dari `Orthographic Projection` untuk memahami salah satu aturan pemetaan tersebut secara lebih spesifik.

### Inti yang Harus Ditekankan

- **Projection** mengubah posisi 3D menjadi bentuk yang dapat dipetakan ke layar 2D.
- Projection penting dalam rendering pipeline karena menghubungkan representasi ruang 3D dengan tampilan layar 2D.
- Dua jenis utama projection adalah `Orthographic Projection` dan `Perspective Projection`.
- Memahami projection membantu mahasiswa memahami bagaimana kamera, jarak, dan layar saling berhubungan sebelum masuk ke rasterisasi.

### Transisi ke Slide Berikutnya

Setelah memahami apa itu projection secara umum, kita akan masuk ke jenis pertamanya, yaitu `Orthographic Projection`, yang memiliki ciri utama bahwa ukuran objek tidak berubah karena jarak terhadap kamera.

---

## Slide 023 - Orthographic Projection

### Narasi

Setelah kita memahami bahwa **projection** adalah tahap untuk mengubah posisi 3D menjadi bentuk yang dapat dipetakan ke layar 2D, kita masuk ke salah satu jenis projection yang paling stabil secara ukuran, yaitu **Orthographic Projection**.

Intuisi visualnya sederhana. Pada **orthographic projection**, kita dapat membayangkan sinar proyeksi yang bergerak sejajar satu sama lain, bukan menyempit seperti pada pandangan perspektif. Karena itu, sebuah `object` yang berada jauh dari `camera` tidak akan tampak lebih kecil dibandingkan `object` yang berada dekat. Ukuran relatif objek tetap terjaga.

Ciri utama yang harus kita pegang adalah:

> **ukuran object tidak berubah karena jarak terhadap camera.**

Artinya, tidak ada efek *foreshortening* yang kuat seperti pada pandangan manusia biasa. Garis-garis yang sejajar dalam ruang 3D cenderung tetap tampak sejajar setelah diproyeksikan ke layar.

Dalam konteks grafika komputer, konsep ini penting karena banyak aplikasi membutuhkan tampilan yang tetap dapat diukur dan dibaca secara teknis. Orthographic projection cocok digunakan untuk:

- `CAD`,
- `engineering drawing`,
- `map`,
- `visualisasi teknis`,
- `editor 3D tertentu`.

Pada aplikasi seperti `CAD` atau gambar teknik, misalnya, kita tidak ingin ukuran komponen berubah hanya karena posisinya lebih dekat atau lebih jauh dari kamera. Yang kita butuhkan adalah representasi yang konsisten, proporsional, dan mudah digunakan untuk pengukuran atau dokumentasi teknis.

Sebelum lanjut, hal yang perlu dipahami mahasiswa adalah bahwa **orthographic projection** bukan sekadar “kamera tanpa efek jarak”. Ia adalah cara memetakan geometri 3D ke layar dengan aturan proyeksi yang menjaga ukuran relatif objek. Konsep ini menjadi dasar penting ketika nanti kita mendefinisikan batas area proyeksi, karena tidak semua geometri 3D akan ikut ditampilkan.

### Inti yang Harus Ditekankan

- **Orthographic projection** menjaga ukuran `object` tetap meskipun jaraknya terhadap `camera` berubah.
- Proyeksi ini menggunakan arah proyeksi yang sejajar, sehingga cocok untuk tampilan teknis yang membutuhkan skala dan ukuran yang konsisten.
- Konsep ini penting dalam `CAD`, `engineering drawing`, `map`, `visualisasi teknis`, dan beberapa `editor 3D`.
- Mahasiswa perlu memahami bahwa orthographic projection berbeda dari pandangan perspektif karena tidak ada penyusutan ukuran akibat jarak.

### Transisi ke Slide Berikutnya

Jika orthographic projection menjaga ukuran objek tetap, pertanyaan berikutnya adalah: batas mana yang menentukan geometri 3D mana yang ikut diproyeksikan ke layar? Pada slide berikutnya, kita akan melihat **Orthographic Volume**, yaitu volume berbentuk box yang menjadi area proyeksi untuk orthographic projection.

---

## Slide 024 - Orthographic Volume

### Narasi

Setelah kita melihat bahwa **orthographic projection** membuat ukuran objek tidak berubah karena jarak, langkah berikutnya adalah memahami **di mana** objek boleh diproyeksikan. Dalam orthographic, wilayah yang diproyeksikan dibatasi oleh sebuah **volume berbentuk box**. Volume ini berfungsi seperti “kotak pandang” kamera: geometri yang berada di dalam box dapat diproyeksikan, sedangkan geometri di luar box umumnya tidak menjadi bagian dari hasil proyeksi.

Parameter yang menentukan box tersebut adalah:

```text
left
right
bottom
top
near
far
```

Secara intuitif, `left` dan `right` menentukan batas horizontal, `bottom` dan `top` menentukan batas vertikal, sedangkan `near` dan `far` menentukan kedalaman volume dari kamera. Dengan kata lain, volume ini bukan sekadar bentuk visual, melainkan ruang kerja kamera orthographic yang membatasi apa yang akan masuk ke tahap proyeksi.

Dalam konteks rendering pipeline, volume ini penting karena ia menentukan **apa yang terlihat** sebelum objek diubah menjadi citra 2D. Setelah objek berada dalam ruang kamera, tahap proyeksi orthographic akan memetakan titik-titik di dalam volume tersebut ke ruang yang lebih seragam, misalnya ruang normalisasi, sehingga proses rasterisasi dapat dilakukan secara konsisten. Karena proyeksi orthographic tidak memperkecil objek berdasarkan jarak, parameter `near` dan `far` lebih berperan sebagai batas kedalaman, bukan sebagai faktor skala visual.

Hal yang perlu dipahami mahasiswa adalah bahwa orthographic volume berbeda dari volume kamera perspektif. Pada orthographic, sisi-sisi box relatif sejajar, sehingga objek tetap mempertahankan ukuran relatifnya. Sifat inilah yang membuat orthographic cocok untuk CAD, engineering drawing, peta, dan visualisasi teknis, di mana presisi ukuran dan bentuk lebih penting daripada kesan kedalaman natural.

Ketika membaca parameter `left`, `right`, `bottom`, `top`, `near`, dan `far`, kita dapat membayangkan box yang menghadap ke arah kamera. Jika sebuah objek berada di antara `near` dan `far`, serta berada di antara batas horizontal dan vertikal, objek tersebut dapat diproyeksikan. Jika objek berada di luar batas tersebut, ia akan terpotong atau tidak ditampilkan, tergantung pada mekanisme clipping yang digunakan.

Sebelum lanjut, pastikan mahasiswa memahami bahwa **orthographic volume adalah batasan ruang proyeksi**, bukan sekadar kotak dekoratif. Parameter-parameter ini menentukan cakupan pandangan kamera orthographic dan menjadi dasar bagi tahap proyeksi berikutnya.

### Inti yang Harus Ditekankan

- Orthographic menggunakan **volume berbentuk box** sebagai wilayah proyeksi.
- Parameter `left`, `right`, `bottom`, `top`, `near`, dan `far` menentukan batas horizontal, vertikal, dan kedalaman volume.
- Geometri di dalam volume dapat diproyeksikan; geometri di luar volume umumnya tidak menjadi bagian dari hasil proyeksi.
- Volume ini penting dalam rendering pipeline karena menentukan apa yang terlihat sebelum objek dipetakan ke ruang 2D.
- Sifat box yang sejajar mendukung karakteristik orthographic: ukuran objek tidak berubah karena jarak.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa orthographic membatasi pandangan dengan box, kita akan beralih ke **perspective projection**, di mana volume pandangan tidak lagi berbentuk box sejajar, melainkan meniru cara kamera nyata melihat: objek dekat tampak lebih besar dan objek jauh tampak lebih kecil.

---

## Slide 025 - Perspective Projection

### Narasi

Dalam grafika komputer, **perspective projection** adalah cara memetakan objek 3D ke layar sedemikian rupa sehingga hasilnya terasa seperti dilihat oleh mata manusia atau kamera nyata. Intinya, objek yang lebih dekat ke kamera akan tampak lebih besar, sedangkan objek yang lebih jauh akan tampak lebih kecil.

```text
Object dekat
→ tampak lebih besar

Object jauh
→ tampak lebih kecil
```

Perilaku ini berbeda dengan **orthographic projection** yang kita lihat sebelumnya. Pada orthographic, garis pandang bersifat sejajar dan ukuran objek relatif tidak berubah hanya karena jarak. Pada perspective, garis pandang seolah-olah menyempit ke arah depan, sehingga muncul kesan kedalaman.

Kesan kedalaman inilah yang membuat perspective projection sangat penting. Dalam game, simulator, dan VR, pengguna mengharapkan dunia virtual terasa “masuk” dan memiliki skala yang wajar. Tanpa efek ini, objek akan terlihat seperti gambar teknik datar, padahal sebenarnya berada di ruang 3D.

Dalam konteks rendering pipeline, perspective projection berada pada tahap `projection`, yaitu tahap setelah posisi objek sudah dinyatakan relatif terhadap kamera. Di tahap ini, sistem menentukan bagaimana koordinat 3D kamera diterjemahkan menjadi tampilan 2D di layar, dengan memperhitungkan jarak objek terhadap kamera.

Yang perlu dipahami mahasiswa adalah bahwa perspective projection bukan sekadar membuat objek kecil atau besar. Ia adalah dasar dari cara kamera virtual “melihat” dunia. Parameter batas dekat dan jauh, serta bentuk volume pandang, akan menentukan objek mana yang masih terlihat dan bagaimana skala kedalaman terbentuk.

### Inti yang Harus Ditekankan

- **Perspective projection** meniru cara pandang manusia/kamera nyata: dekat lebih besar, jauh lebih kecil.
- Konsep ini penting untuk menghasilkan kesan **kedalaman** yang natural pada game, simulator, dan VR.
- Berbeda dengan orthographic, perspective memberi perubahan ukuran berdasarkan jarak, sehingga objek terasa berada di ruang 3D.
- Dalam pipeline, projection mengubah tampilan kamera 3D menjadi tampilan layar 2D dengan efek perspektif.

### Transisi ke Slide Berikutnya

Jika orthographic menggunakan volume berbentuk box, maka perspective camera menggunakan volume yang menyempit ke arah depan. Bentuk volume itulah yang disebut **view frustum**, dan akan kita bahas pada slide berikutnya.

---

## Slide 026 - View Frustum

### Narasi

Setelah kita memahami **perspective projection**, langkah berikutnya adalah memahami **volume pandang** kamera. Pada kamera perspektif, ruang yang dianggap “terlihat” tidak berbentuk kotak sederhana, melainkan **view frustum**: volume berbentuk piramida terpotong yang membentang dari kamera ke arah depan.

```text
        Far Plane
      ┌──────────┐
       \        /
        \      /
       Near Plane
          Camera
```

Cara membaca diagramnya cukup sederhana. Titik **Camera** berada di sisi dekat, lalu pandangan kamera membentang ke depan membentuk volume yang melebar. Batas dekat disebut **Near Plane**, sedangkan batas jauh disebut **Far Plane**. Semakin jauh dari kamera, bidang pandang semakin lebar, sehingga membentuk bentuk frustum.

**Near Plane** adalah batas kedalaman terdekat yang masih dianggap terlihat oleh kamera. Objek yang berada di depan near plane biasanya tidak akan dirender karena berada terlalu dekat dengan kamera. **Far Plane** adalah batas kedalaman terjauh yang masih dipertimbangkan. Objek yang berada di belakang far plane juga dianggap terlalu jauh dan dapat diabaikan.

Poin penting dari slide ini adalah kalimat: **geometry di luar frustum dapat di-clip**. Artinya, jika sebuah objek, vertex, atau bagian dari objek berada di luar volume frustum, sistem rendering dapat memangkas bagian tersebut. Dengan kata lain, tidak semua geometri dalam scene harus diproses sampai tahap akhir; hanya bagian yang berada di dalam area pandang kamera yang benar-benar relevan untuk ditampilkan.

Dalam konteks rendering pipeline, view frustum berperan sebagai batas keputusan. Setelah kamera dan proyeksi perspektif ditentukan, sistem perlu mengetahui objek mana yang berada di dalam area pandang. Geometri yang berada di luar frustum dapat dihilangkan atau dipangkas melalui proses clipping. Hal ini penting karena membantu efisiensi rendering dan memastikan hanya objek yang benar-benar terlihat yang melanjutkan proses ke tahap rasterisasi.

Jadi, yang perlu kita pahami di sini adalah bahwa **view frustum bukan sekadar bentuk geometris**, melainkan batas ruang pandang kamera. Ia menentukan apa yang masuk ke dalam layar dan apa yang tidak perlu diproses lebih lanjut. Konsep ini menjadi dasar penting sebelum kita membahas parameter yang mengatur lebar sudut pandang kamera.

### Inti yang Harus Ditekankan

- **View frustum** adalah volume pandang kamera perspektif yang berbentuk frustum, yaitu piramida terpotong.
- **Near Plane** dan **Far Plane** menentukan batas kedalaman objek yang masih dianggap terlihat.
- Geometri di luar frustum dapat di-clip, sehingga tidak semua objek dalam scene perlu dirender.
- Konsep ini penting untuk efisiensi rendering dan menjadi dasar proses clipping sebelum rasterisasi.

### Transisi ke Slide Berikutnya

Setelah kita memahami bentuk volume pandang kamera, pertanyaan berikutnya adalah: seberapa lebar sudut pandang tersebut? Slide berikutnya akan membahas **Field of View** atau **FOV**, yaitu parameter yang menentukan luas sudut pandang kamera, misalnya `45°`, `60°`, atau `90°`.

---

## Slide 027 - Field of View

### Narasi

Dalam kamera perspektif, **Field of View** atau `FOV` adalah parameter sudut yang menentukan seberapa lebar pandangan kamera. Jika kita kaitkan dengan frustum pada slide sebelumnya, `FOV` dapat dipahami sebagai ukuran bukaan sudut frustum: semakin besar sudutnya, semakin lebar volume pandang yang ditangkap kamera.

`FOV` penting karena ia memengaruhi bagaimana scene diproyeksikan ke layar. Nilai `FOV` menentukan seberapa banyak objek di sekitar kamera yang terlihat, serta seberapa besar atau kecil objek tampak pada layar. Dalam pipeline rendering, parameter ini berperan pada tahap **projection**, yaitu tahap ketika koordinat dunia diubah menjadi tampilan yang sesuai dengan sudut pandang kamera.

Contoh nilai yang umum ditampilkan adalah:

- `45°`
- `60°`
- `90°`

Semakin besar nilai derajat, semakin luas sudut pandang kamera. Sebaliknya, nilai yang lebih kecil menghasilkan pandangan yang lebih sempit.

Secara intuitif, `FOV` kecil membuat pandangan terasa seperti **zoom**: area yang terlihat lebih terbatas, tetapi objek di depan kamera tampak lebih besar. `FOV` besar membuat pandangan lebih luas, sehingga lebih banyak bagian scene terlihat dan objek relatif tampak lebih kecil.

Yang perlu dipahami sebelum lanjut adalah bahwa `FOV` bukan sekadar “ukuran layar”, melainkan sifat sudut pandang kamera. Perubahan `FOV` mengubah bentuk frustum dan hasil proyeksi, bukan hanya memperbesar atau memperkecil gambar akhir.

### Inti yang Harus Ditekankan

- `FOV` menentukan **luas sudut pandang** kamera perspektif.
- `FOV` kecil menghasilkan pandangan sempit dan kesan **zoom**.
- `FOV` besar menghasilkan pandangan lebih luas dan lebih banyak scene terlihat.
- Nilai seperti `45°`, `60°`, dan `90°` menunjukkan sudut yang semakin lebar.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan membandingkan secara lebih jelas bagaimana `FOV` kecil dan `FOV` besar memengaruhi tampilan objek, area pandang, serta efek visual pada tepi layar.

---

## Slide 028 - FOV Kecil vs Besar

### Narasi

Dalam rendering 3D, `FOV` menentukan seberapa besar sudut pandang yang ditangkap kamera. Semakin kecil sudut itu, semakin sempit frustum pandangan yang terbentuk. Akibatnya, objek di depan kamera menempati lebih banyak ruang di layar, sehingga tampak lebih besar.

Secara sederhana, perbedaannya bisa kita lihat seperti ini:

- **FOV kecil**
  - area yang terlihat sempit,
  - objek tampak lebih besar,
  - memberi kesan zoom,
  - distorsi di tepi layar biasanya lebih kecil.

- **FOV besar**
  - area yang terlihat luas,
  - lebih banyak lingkungan masuk ke frame,
  - adegan terasa lebih dinamis,
  - distorsi di tepi layar lebih terlihat.

Kondisi `FOV` kecil sering kita rasakan seperti kamera dengan lensa telephoto. Area yang terlihat terbatas, tetapi objek utama lebih menonjol. Karena sudut pandang tidak terlalu lebar, perubahan bentuk di tepi layar biasanya tidak terlalu ekstrem.

Sebaliknya, `FOV` besar membuka sudut pandang yang lebih luas. Lebih banyak lingkungan yang masuk ke dalam frame, sehingga adegan terasa lebih dinamis dan cocok untuk menampilkan ruang, gerakan, atau konteks sekitar.

Namun, `FOV` besar juga membuat efek perspektif lebih kuat. Objek yang berada di tepi layar dapat tampak lebih memanjang atau lebih terdistorsi dibandingkan objek di tengah. Inilah yang sering kita lihat pada kamera wide-angle: luasnya pandangan, tetapi proporsi tepi tidak selalu terasa natural.

Intinya, pemilihan `FOV` memengaruhi bukan hanya seberapa banyak yang terlihat, tetapi juga bagaimana objek dirasakan oleh penonton. Dalam grafika komputer, keputusan ini berkaitan langsung dengan kamera, proyeksi perspektif, dan pengalaman visual akhir yang dihasilkan pipeline rendering.

### Inti yang Harus Ditekankan

- **FOV kecil** membuat pandangan sempit, objek tampak lebih besar, memberi kesan zoom, dan distorsi tepi lebih kecil.
- **FOV besar** membuat pandangan luas, adegan lebih dinamis, tetapi distorsi di tepi layar lebih terlihat.
- Pemilihan `FOV` memengaruhi persepsi kamera dan proporsi visual dalam rendering 3D.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana `FOV` mengubah sudut pandang kamera, langkah berikutnya adalah menjaga agar tampilan tersebut tidak terdistorsi secara horizontal dan vertikal. Untuk itu, kita akan masuk ke konsep `Aspect Ratio`.

---

## Slide 029 - Aspect Ratio

### Narasi

Setelah kita melihat bagaimana **FOV** memengaruhi luas pandangan dan tingkat distorsi, ada satu parameter kamera yang juga menentukan bentuk tampilan akhir: **aspect ratio**. Secara sederhana, aspect ratio adalah perbandingan antara lebar dan tinggi area tampilan.

```text
aspect = width / height
```

Nilai ini bukan ukuran fisik layar, melainkan faktor proporsi antara arah horizontal dan vertikal. Dengan kata lain, aspect ratio membantu kita memahami apakah tampilan lebih memanjang ke samping atau lebih memanjang ke atas.

Contoh yang umum adalah layar dengan resolusi `1920 x 1080`:

```text
1920 / 1080
≈ 1.7778
= 16 : 9
```

Artinya, layar tersebut memiliki rasio **16:9**. Angka `1.7778` menunjukkan bahwa lebar tampilan sekitar 1,78 kali lebih besar daripada tingginya. Rasio ini sering kita temui pada monitor, laptop, dan tampilan video modern.

Dalam konteks grafika komputer, aspect ratio penting karena rendering tidak hanya menentukan apa yang terlihat, tetapi juga bagaimana objek dipetakan ke layar. Kamera dan **projection** menentukan ruang pandang, sedangkan **viewport** memetakan hasil rendering ke ukuran piksel yang sebenarnya. Jika proporsi horizontal dan vertikal tidak dijaga dengan benar, objek bisa tampak tidak natural.

Intinya, **aspect ratio menjaga proporsi horizontal dan vertikal** agar objek tidak terdistorsi hanya karena ukuran tampilan berubah. Misalnya, jika sebuah objek seharusnya berbentuk lingkaran, tetapi proporsi tampilan tidak sesuai, objek tersebut dapat terlihat seperti elips.

Sebelum lanjut, penting untuk membedakan **aspect ratio** dengan **FOV**. FOV mengatur seberapa luas sudut pandang kamera, sedangkan aspect ratio mengatur bagaimana lebar dan tinggi tampilan diproporsikan. Keduanya memengaruhi tampilan akhir, tetapi bekerja pada aspek yang berbeda.

### Inti yang Harus Ditekankan

- **Aspect ratio** adalah perbandingan `width / height` dari area tampilan.
- Nilai seperti `1920 / 1080 ≈ 1.7778` setara dengan rasio **16:9**.
- Aspect ratio menjaga proporsi horizontal dan vertikal agar objek tidak terlihat terdistorsi.
- Aspect ratio berbeda dengan **FOV**: FOV mengatur sudut pandang, sedangkan aspect ratio mengatur proporsi tampilan.

### Transisi ke Slide Berikutnya

Jika nilai aspect pada projection tidak sesuai dengan ukuran viewport, proporsi horizontal dan vertikal bisa menjadi tidak konsisten. Pada slide berikutnya, kita akan melihat apa yang terjadi ketika **aspect ratio salah**, termasuk bagaimana objek yang seharusnya bulat dapat berubah menjadi elips.

---

## Slide 030 - Aspect Ratio yang Salah

### Narasi

Masalah ini muncul ketika **aspect ratio** pada projection tidak sama dengan **aspect ratio** viewport. Pada slide sebelumnya kita sudah melihat bahwa `aspect = width / height` menjaga proporsi horizontal dan vertikal. Jika nilai yang dipakai dalam projection tidak sesuai dengan bentuk layar, skala sumbu `x` dan sumbu `y` menjadi tidak seimbang.

Akibatnya, objek yang seharusnya berbentuk lingkaran dapat berubah menjadi elips. Ini bukan karena geometri objek rusak, tetapi karena proses proyeksi memperluas atau memampatkan salah satu arah lebih besar daripada arah lainnya.

```text
Circle
   ↓
Ellipse
```

Dalam pipeline rendering, hal ini terjadi pada tahap **projection**, yaitu tahap yang mengubah koordinat kamera menjadi koordinat clip. Parameter `aspect` menentukan seberapa lebar pandangan horizontal dibandingkan pandangan vertikal. Jika `aspect` terlalu besar, gambar cenderung melebar; jika terlalu kecil, gambar cenderung memanjang.

Pada WebGL, nilai ini biasanya dihitung langsung dari ukuran canvas:

```javascript
const aspect =
  canvas.width / canvas.height;
```

Variabel `canvas.width` dan `canvas.height` menyatakan ukuran canvas yang dipakai WebGL. Nilai `aspect` ini kemudian dipakai saat membuat projection matrix. Jika ukuran canvas berubah, nilai `aspect` perlu dihitung ulang agar proporsi tetap benar.

Yang perlu dipahami mahasiswa sebelum lanjut adalah: **aspect ratio bukan hanya soal tampilan layar**, tetapi bagian dari transformasi proyeksi. Kesalahan kecil pada nilai `aspect` dapat menyebabkan seluruh scene terlihat terdistorsi, meskipun posisi kamera, geometri, dan lighting sudah benar.

### Inti yang Harus Ditekankan

- **Aspect projection** harus sesuai dengan **aspect viewport**.
- Jika tidak sesuai, skala horizontal dan vertikal menjadi tidak seimbang sehingga lingkaran dapat berubah menjadi elips.
- Pada WebGL, `aspect` dihitung dari `canvas.width / canvas.height`.
- Nilai `aspect` perlu diperbarui ketika ukuran canvas berubah.
- Kesalahan `aspect` menyebabkan distorsi visual pada hasil rendering.

### Transisi ke Slide Berikutnya

Setelah proporsi horizontal dan vertikal sudah benar, kita perlu menentukan batas kedalaman kamera. Pada slide berikutnya kita akan membahas **Near Plane**, yaitu batas terdekat objek yang masih dirender.

---

## Slide 031 - Near Plane

### Narasi

Dalam kamera 3D, tidak semua objek di sekitar kamera akan dirender. Ada batas-batas tertentu yang menentukan wilayah mana saja yang masih dianggap terlihat oleh kamera. Salah satu batas penting itu adalah **near plane**, yaitu bidang imajiner yang berada di depan kamera dan menandai jarak terdekat yang masih dirender.

Kita bisa membayangkan kamera sedang melihat ke depan. Di depan kamera, ada sebuah bidang datar yang tegak lurus terhadap arah pandang kamera. Bidang inilah yang disebut **near plane**. Objek yang berada lebih dekat dari bidang ini tidak akan masuk ke dalam wilayah rendering yang valid.

Dari slide, kita bisa melihat konsekuensinya secara sederhana:

- Objek yang lebih dekat dari **near plane** akan `di-clip`.
- Objek yang berada di belakang **near plane** masih memiliki kemungkinan untuk dirender, asalkan memenuhi batas-batas lainnya.

Istilah `di-clip` di sini penting. Artinya, bagian geometri yang berada di luar batas dekat kamera akan dipotong atau dibuang oleh pipeline rendering. Dalam alur rendering, setelah objek ditransformasikan dan diproyeksikan, sistem akan melakukan **clipping** untuk memastikan hanya bagian yang berada di dalam volume kamera yang melanjutkan proses ke tahap berikutnya.

**Near plane** penting karena ia membantu menentukan batas depan dari volume pandang kamera. Tanpa batas ini, objek yang terlalu dekat dengan kamera bisa menghasilkan tampilan yang tidak stabil, menutupi seluruh layar, atau menyebabkan perhitungan proyeksi menjadi tidak wajar. Dengan kata lain, **near plane** membantu menjaga agar kamera hanya merender wilayah yang masuk akal secara visual dan matematis.

Satu hal yang perlu diperhatikan adalah nilai **near plane** tidak sebaiknya terlalu dekat ke nol tanpa alasan. Dalam proyeksi perspektif, perhitungan kedalaman sangat sensitif terhadap jarak kamera. Jika nilai `near` terlalu kecil, presisi kedalaman dapat menurun dan bisa menimbulkan masalah seperti objek yang seharusnya terpisah tampak saling tumpang tindih. Karena itu, nilai `near` biasanya dipilih berdasarkan skala adegan, bukan sekadar dibuat sedekat mungkin ke kamera.

Sebelum lanjut, mahasiswa perlu memahami bahwa **near plane** bukan sekadar angka pada parameter kamera, melainkan bagian dari batas volume pandang yang menentukan objek mana yang masih dianggap terlihat oleh kamera.

### Inti yang Harus Ditekankan

- **Near plane** adalah batas terdekat kamera yang masih dirender.
- Objek yang lebih dekat dari **near plane** akan `di-clip`.
- Nilai `near` tidak sebaiknya terlalu dekat ke nol tanpa alasan karena memengaruhi presisi dan stabilitas rendering.

### Transisi ke Slide Berikutnya

Setelah memahami batas terdekat kamera, langkah berikutnya adalah memahami batas terjauhnya, yaitu **far plane**, yang menentukan objek mana yang masih terlihat pada jarak jauh.

---

## Slide 032 - Far Plane

### Narasi

Setelah kita membahas **near plane** sebagai batas terdekat kamera, sekarang kita masuk ke **far plane**. **Far plane** adalah batas terjauh dari kamera yang masih dirender. Dengan kata lain, kamera memiliki volume pandang yang dibatasi oleh dua bidang: **near plane** di depan dan **far plane** di belakang.

Jika objek berada lebih jauh dari **far plane**, maka objek tersebut tidak terlihat. Pada slide ini tertulis:

```text
tidak terlihat
```

Artinya, objek yang berada di luar batas terjauh itu tidak muncul di hasil rendering. Ia berada di luar volume pandang kamera, sehingga tidak menjadi bagian dari scene yang ditampilkan.

Pentingnya **far plane** bukan hanya menentukan apa yang terlihat, tetapi juga membantu membatasi apa yang perlu diproses oleh sistem rendering. Dengan adanya batas terjauh, objek yang terlalu jauh dapat diabaikan sebelum masuk ke tahap rendering berikutnya. Ini penting dalam grafika komputer karena memengaruhi beban kerja GPU dan efisiensi pipeline rendering.

Kita juga perlu memahami **far plane** bersama **near plane**. **Visible scene** berada antara **near** dan **far**. Artinya, hanya objek yang berada di dalam rentang jarak tersebut yang dianggap berada dalam ruang pandang kamera dan berpotensi muncul di layar.

Secara intuitif, bayangkan kamera memiliki “kotak pandang” yang memanjang dari **near plane** hingga **far plane**. Objek di dalam kotak itu dapat dirender, sedangkan objek yang berada di belakang **far plane** tidak muncul.

Pada tahap ini, kita cukup memahami bahwa **far plane** adalah batas jarak maksimum yang dirender. Detail tentang bagaimana pemilihan nilai **near** dan **far** memengaruhi presisi depth akan kita bahas pada slide berikutnya.

### Inti yang Harus Ditekankan

- **Far plane** adalah batas terjauh kamera yang masih dirender.
- Objek yang berada lebih jauh dari **far plane** tidak terlihat.
- **Visible scene** berada antara **near plane** dan **far plane**.
- **Far plane** membantu membatasi geometri yang diproses oleh pipeline rendering.

### Transisi ke Slide Berikutnya

Setelah kita memahami bahwa **far plane** menentukan batas terjauh yang dirender, langkah berikutnya adalah melihat konsekuensi pemilihan nilai **near** dan **far**, terutama terhadap presisi depth. Kita akan membahas bagaimana rentang jarak yang terlalu ekstrem dapat memengaruhi kualitas kedalaman pada slide berikutnya.

---

## Slide 033 - Near/Far dan Depth Precision

### Narasi

Setelah kita memahami `far plane` sebagai batas terjauh yang masih dirender, langkah berikutnya adalah memperhatikan bagaimana pasangan `near` dan `far` memengaruhi kualitas render, terutama **depth precision**.

Dalam banyak kasus, rentang kamera yang sangat lebar dapat ditulis seperti:

```text
near = 0.001
far  = 1,000,000
```

Rentang ini berarti kamera harus membedakan jarak dari sangat dekat hingga sangat jauh. Masalahnya, nilai kedalaman yang digunakan untuk membandingkan posisi objek biasanya memiliki presisi terbatas. Semakin besar jarak antara `near` dan `far`, semakin banyak ruang kedalaman yang harus dibagikan ke dalam nilai yang tersedia. Akibatnya, perbedaan jarak antara dua permukaan yang relatif dekat bisa menjadi terlalu kecil untuk dibedakan dengan baik.

Implikasinya, objek yang seharusnya berada di depan atau di belakang satu sama lain dapat terlihat tidak stabil, saling menutupi secara tidak konsisten, atau mengalami artefak kedalaman. Dalam konteks rendering pipeline, hal ini berkaitan dengan tahap ketika posisi objek sudah diproyeksikan dan nilai kedalaman digunakan untuk menentukan piksel mana yang terlihat.

Prinsip praktisnya sederhana:

- `near` jangan terlalu kecil kecuali memang ada objek yang benar-benar sangat dekat dengan kamera.
- `far` jangan terlalu jauh bila objek di luar jarak itu tidak perlu dirender.

Dengan memperkecil rentang `near` dan `far` sesuai kebutuhan adegan, presisi depth menjadi lebih baik karena nilai kedalaman tidak perlu merepresentasikan jarak yang tidak relevan.

Sebelum lanjut, kita perlu memahami bahwa `near` dan `far` bukan hanya batas visibilitas, tetapi juga parameter yang memengaruhi kualitas pemisahan kedalaman.

### Inti yang Harus Ditekankan

- `near` dan `far` menentukan batas kedalaman yang dirender.
- Rentang ekstrem seperti `near = 0.001` dan `far = 1,000,000` dapat menurunkan **depth precision**.
- Pilih `near` dan `far` sedekat mungkin dengan kebutuhan adegan agar perbedaan kedalaman lebih akurat.

### Transisi ke Slide Berikutnya

Setelah batas `near` dan `far` dipahami, langkah berikutnya adalah melihat bagaimana koordinat view diubah menjadi koordinat clip melalui **Projection Matrix**, termasuk jenis orthographic dan perspective.

---

## Slide 034 - Projection Matrix

### Narasi

Pada tahap ini, kita sudah melewati transformasi model dan view, sehingga objek berada dalam **View Coordinate**. Selanjutnya, **Projection Matrix** bertugas mengubah koordinat tersebut menjadi **Clip Coordinate**. Artinya, matrix ini tidak lagi sekadar memindahkan atau memutar objek, tetapi menentukan bagaimana ruang 3D di sekitar kamera dipetakan ke representasi yang siap diproses oleh pipeline rendering.

Dalam pipeline, posisi ini penting karena projection matrix menjadi jembatan antara dunia kamera dan tahap clipping. Koordinat hasil projection masih berada dalam ruang homogen, sehingga belum bisa langsung dianggap sebagai posisi layar. Ia masih memerlukan langkah lanjutan, yaitu pembagian perspektif, untuk menjadi koordinat yang lebih siap digunakan.

```text
View Coordinate
       ↓
Clip Coordinate
```

Ada dua jenis utama yang perlu dipahami:

- **Orthographic Matrix**: memetakan ruang 3D tanpa efek perspektif. Garis-garis yang sejajar tetap sejajar, dan ukuran objek tidak menyusut hanya karena jaraknya lebih jauh dari kamera.
- **Perspective Matrix**: memetakan ruang 3D dengan efek perspektif, sehingga objek yang lebih dekat tampak lebih besar dan objek yang lebih jauh tampak lebih kecil, menyerupai perilaku kamera atau mata manusia.

Perbedaan keduanya bukan hanya soal tampilan, tetapi juga cara koordinat kedalaman ditangani. Orthographic projection cocok untuk representasi teknis seperti blueprint atau tampilan samping yang ingin menjaga proporsi ukuran. Perspective projection lebih umum digunakan untuk visualisasi 3D yang ingin terasa natural dan memiliki kedalaman.

Dalam konteks materi sebelumnya tentang **near/far**, projection matrix juga berkaitan dengan batas kedalaman yang dipilih. Nilai `near` dan `far` membantu menentukan volume mana yang dianggap relevan untuk dirender, sehingga presisi depth dapat tetap terjaga. Namun, pada slide ini kita cukup memahami bahwa projection matrix menghasilkan **Clip Coordinate**, bukan langsung menghasilkan posisi layar akhir.

### Inti yang Harus Ditekankan

- **Projection Matrix** mengubah `View Coordinate` menjadi `Clip Coordinate`.
- Ada dua jenis utama: `Orthographic Matrix` dan `Perspective Matrix`.
- **Orthographic** tidak memiliki efek perspektif, sehingga ukuran objek relatif tetap terhadap jarak.
- **Perspective** memiliki efek perspektif, sehingga objek yang lebih jauh tampak lebih kecil.
- Hasil projection masih berupa koordinat clip, belum menjadi NDC atau posisi layar.

### Transisi ke Slide Berikutnya

Setelah projection matrix menghasilkan `Clip Coordinate`, langkah berikutnya adalah memahami bagaimana koordinat tersebut diproses melalui **Perspective Divide** menjadi NDC.

---

## Slide 035 - Clip Space dan Perspective Divide

### Narasi

Setelah matriks proyeksi diterapkan, koordinat objek tidak langsung menjadi koordinat layar. Pada tahap ini, kita berada di **clip space**, yaitu ruang koordinat homogen yang dinyatakan sebagai `Clip Position (x, y, z, w)`. Komponen `w` bukan sekadar nilai tambahan; ia membawa informasi skala dan perspektif yang dihasilkan oleh matriks proyeksi.

Alur pada slide dapat dibaca dari atas ke bawah:

```text
Clip Position (x,y,z,w)
        ↓
Perspective Divide
        ↓
(x/w, y/w, z/w)
        ↓
NDC
```

Artinya, setiap komponen koordinat clip dibagi dengan `w`. Hasil dari pembagian ini adalah koordinat yang sudah dinormalisasi, yaitu **NDC** atau *Normalized Device Coordinates*. NDC sendiri sudah kita perkenalkan pada Pertemuan 2, sehingga di sini kita hanya melanjutkan alur pipeline: dari koordinat clip menuju ruang normalisasi.

Langkah **perspective divide** penting karena ia menjadi jembatan antara hasil proyeksi dan pemetaan ke layar. Tanpa pembagian terhadap `w`, koordinat masih berada dalam representasi homogen dan belum siap untuk diproses lebih lanjut. Pada proyeksi perspektif, nilai `w` biasanya berubah sesuai kedalaman, sehingga pembagian ini menghasilkan efek visual yang kita kenal sebagai perspektif: objek yang lebih jauh tampak lebih kecil relatif terhadap objek yang dekat.

Perlu kita tekankan bahwa **clip space** dan **NDC** adalah dua ruang yang berbeda. Clip space masih menggunakan koordinat homogen `(x, y, z, w)`, sedangkan NDC menggunakan koordinat hasil bagi `(x/w, y/w, z/w)`. Perbedaan ini penting karena banyak mahasiswa sering menganggap hasil matriks proyeksi sudah langsung bisa ditampilkan ke layar, padahal masih ada tahap normalisasi terlebih dahulu.

Sebelum lanjut, hal yang harus dipahami adalah posisi langkah ini dalam pipeline rendering. Matriks proyeksi mengubah koordinat view menjadi koordinat clip, lalu **perspective divide** mengubah koordinat clip menjadi NDC. Setelah itu, barulah koordinat NDC dapat dipetakan ke ukuran layar. Jadi, slide ini menegaskan satu titik penting: hasil proyeksi belum menjadi layar, melainkan masih perlu dinormalisasi terlebih dahulu.

### Inti yang Harus Ditekankan

- **Clip space** menggunakan koordinat homogen `Clip Position (x, y, z, w)`, bukan koordinat layar.
- **Perspective divide** dilakukan dengan membagi `x`, `y`, dan `z` terhadap `w`, sehingga menghasilkan `(x/w, y/w, z/w)`.
- Hasil dari perspective divide adalah **NDC**, yaitu ruang koordinat yang sudah dinormalisasi dan siap untuk tahap viewport transform.
- Langkah ini penting karena memisahkan proses proyeksi dari proses pemetaan ke layar, sekaligus menjadi dasar efek perspektif dalam rendering.

### Transisi ke Slide Berikutnya

Setelah koordinat berada dalam bentuk NDC, langkah berikutnya adalah memetakannya ke ukuran layar yang sebenarnya. Pada slide berikutnya, kita akan membahas **Viewport Transform**, yaitu proses mengubah NDC menjadi **screen coordinate** dalam satuan pixel sesuai ukuran canvas.

---

## Slide 036 - Viewport Transform

### Narasi

Setelah posisi clip melewati **Perspective Divide**, hasil yang kita peroleh adalah **NDC**. Pada tahap ini koordinat sudah berada dalam ruang yang dinormalisasi, tetapi belum tentu langsung bisa digambar pada layar.

```text
NDC
 ↓
Viewport Transform
 ↓
Screen Coordinate
```

Alur di atas dibaca dari atas ke bawah. **Input**-nya adalah koordinat **NDC**, lalu diproses oleh **Viewport Transform**, dan **output**-nya adalah **Screen Coordinate**.

**Viewport Transform** penting karena ia menerjemahkan koordinat yang sudah dinormalisasi menjadi koordinat pixel pada `Canvas`. Dengan kata lain, tahap ini menentukan di mana objek akan muncul pada area gambar yang sebenarnya.

Hal yang perlu kita pahami adalah bahwa ukuran `Canvas` memengaruhi hasil transformasi ini. Jika `Canvas` lebih besar atau lebih kecil, pemetaan dari **NDC** ke **Screen Coordinate** juga akan menyesuaikan, sehingga objek tetap berada pada posisi yang sesuai dengan area tampilan.

Sebelum lanjut, kita perlu mengingat bahwa **Screen Coordinate** bukan lagi koordinat abstrak dalam pipeline, melainkan koordinat yang siap digunakan untuk menggambar piksel pada layar.

### Inti yang Harus Ditekankan

- **Viewport Transform** adalah tahap setelah **NDC** dan sebelum koordinat layar digunakan.
- Tahap ini mengubah koordinat dinormalisasi menjadi **Screen Coordinate** dalam satuan pixel.
- Ukuran `Canvas` memengaruhi hasil pemetaan, sehingga posisi objek pada tampilan akhir bergantung pada tahap ini.

### Transisi ke Slide Berikutnya

Setelah kita memahami tahap akhir dari pipeline, yaitu pemetaan ke koordinat layar, langkah berikutnya adalah melihat bagaimana **Model Matrix**, **View Matrix**, dan **Projection Matrix** dirangkai dalam **Model View Projection**.

---

## Slide 037 - Model View Projection

### Narasi

Setelah kita melihat bahwa `Screen Coordinate` muncul setelah `NDC`, ada satu tahap penting yang perlu kita pahami terlebih dahulu: bagaimana sebuah objek berpindah dari koordinat lokalnya menuju ruang yang siap diproyeksikan. Pada tahap inilah tiga matriks utama bekerja, yaitu `Model Matrix`, `View Matrix`, dan `Projection Matrix`.

Kita dapat menuliskan ketiganya sebagai berikut:

```text
M = Model Matrix
V = View Matrix
P = Projection Matrix
```

Masing-masing matriks memiliki tanggung jawab yang berbeda dalam pipeline rendering.

`Model Matrix`, atau `M`, bertugas membawa objek dari **local space** ke **world space**. Local space adalah koordinat relatif terhadap objek itu sendiri, misalnya pusat objek berada di `(0, 0, 0)`. Dengan `M`, kita dapat memposisikan, memutar, dan menskalakan objek di dalam dunia. Tanpa matriks ini, objek hanya berada di koordinat internalnya dan belum memiliki tempat yang jelas dalam scene.

`View Matrix`, atau `V`, membawa objek dari **world space** ke **view space**. View space adalah ruang yang relatif terhadap kamera. Matriks ini menjawab pertanyaan: dari mana kamera melihat, ke arah mana kamera menghadap, dan bagaimana orientasi kamera terhadap dunia. Dalam banyak kasus, `V` berkaitan dengan posisi dan orientasi kamera, sehingga objek yang sama di world space akan tampak berbeda tergantung bagaimana `V` diset.

`Projection Matrix`, atau `P`, membawa objek dari **view space** ke **clip space**. Di sinilah efek kamera seperti sudut pandang, rasio aspek, jarak dekat, dan jarak jauh mulai menentukan bentuk tampilan akhir. `P` mengubah ruang 3D yang relatif terhadap kamera menjadi koordinat yang siap diproses lebih lanjut menuju `NDC` dan kemudian `Screen Coordinate`.

Alur lengkapnya dapat dibaca dari atas ke bawah sebagai berikut:

```text
Local
 ↓ M
World
 ↓ V
View
 ↓ P
Clip
```

Artinya, sebuah titik yang awalnya berada di `Local` terlebih dahulu ditransformasi oleh `M` menjadi `World`, kemudian oleh `V` menjadi `View`, dan akhirnya oleh `P` menjadi `Clip`. Urutan ini penting karena setiap tahap mengubah sistem koordinat, bukan sekadar mengubah tampilan objek.

Inti yang perlu kita pegang adalah: `M`, `V`, dan `P` bukan tiga matriks yang berdiri sendiri, melainkan tiga tahap perpindahan koordinat dalam pipeline. Memahami alur ini membantu kita membaca masalah rendering secara lebih sistematis, misalnya ketika objek tidak muncul di tempat yang benar, kita dapat mengecek apakah masalahnya ada pada posisi objek, orientasi kamera, atau parameter proyeksi.

### Inti yang Harus Ditekankan

- `M` memetakan `Local` ke `World`, `V` memetakan `World` ke `View`, dan `P` memetakan `View` ke `Clip`.
- Pipeline `MVP` adalah urutan perpindahan koordinat, bukan sekadar tiga matriks terpisah.
- Output tahap ini adalah `Clip`, yang kemudian akan diproses menuju `NDC` dan `Viewport Transform`.
- Memahami peran tiap matriks penting untuk men-debug posisi objek, orientasi kamera, dan tampilan proyeksi.

### Transisi ke Slide Berikutnya

Setelah memahami peran masing-masing matriks, langkah berikutnya adalah melihat bagaimana `M`, `V`, dan `P` dapat digabungkan menjadi satu transformasi gabungan yang sering disebut `MVP Matrix`.

---

## Slide 038 - MVP Matrix

### Narasi

Setelah kita mengenal tiga matrix utama, yaitu `M`, `V`, dan `P`, langkah berikutnya adalah melihat bagaimana ketiganya bekerja bersama dalam satu ekspresi. Dalam bentuk konseptual, posisi clip dapat ditulis sebagai:

```text
clipPosition =
P × V × M × localPosition
```

Ekspresi ini bukan sekadar perkalian matrix secara acak. Ia menggambarkan alur transformasi yang sama dengan pipeline sebelumnya: titik yang awalnya berada pada **local space** diubah ke **world space** oleh `M`, kemudian ke **view space** oleh `V`, dan akhirnya ke **clip space** oleh `P`.

Yang perlu kita tekankan adalah urutan penulisan. Dalam notasi matrix, posisi biasanya ditulis sebagai vektor kolom, sehingga transformasi yang paling dekat dengan titik adalah yang paling kanan. Karena itu, `M` bekerja terlebih dahulu pada `localPosition`, lalu hasilnya diteruskan ke `V`, dan terakhir ke `P`. Namun, urutan ini mengikuti **convention matrix** yang digunakan; jika konvensi yang dipakai berbeda, penulisan dapat berubah.

Secara intuitif, `MVP` adalah cara ringkas untuk menyatakan bahwa sebuah objek tidak cukup hanya diposisikan di dunia. Objek juga harus dilihat dari kamera, lalu diproyeksikan ke layar. Tanpa `M`, objek tidak memiliki posisi dan orientasi di dunia. Tanpa `V`, kamera tidak “melihat” objek dari sudut yang benar. Tanpa `P`, hasil transformasi belum siap masuk ke tahap rasterisasi.

Slide ini juga menyatakan bahwa konsep `MVP` menggabungkan hasil **P3** dan **P4**. Artinya, kita sedang menyatukan pemahaman tentang transformasi model dan view dengan pemahaman tentang proyeksi, sehingga mahasiswa dapat melihat satu alur utuh dari objek 3D menuju representasi yang dapat dirender.

Sebelum lanjut, hal penting yang harus dipahami adalah: `MVP` bukan satu matrix tunggal yang harus dihafal sebagai rumus, melainkan **komposisi transformasi** yang menjelaskan bagaimana koordinat berpindah antar ruang. Jika urutan dan makna tiap matrix sudah jelas, implementasinya pada vertex shader akan jauh lebih mudah dipahami.

### Inti yang Harus Ditekankan

- `MVP` adalah komposisi dari **Model**, **View**, dan **Projection** matrix.
- Bentuk konseptualnya adalah `clipPosition = P × V × M × localPosition`.
- Urutan transformasi mengikuti alur: `localPosition` → `M` → `V` → `P`.
- Penulisan urutan bergantung pada **convention matrix** yang digunakan.
- `MVP` menghubungkan transformasi objek, posisi kamera, dan proyeksi ke ruang clip.

### Transisi ke Slide Berikutnya

Setelah konsep `MVP` dipahami, langkah berikutnya adalah melihat bagaimana ekspresi ini ditulis secara eksplisit pada vertex shader, khususnya melalui `gl_Position`.

---

## Slide 039 - MVP pada Vertex Shader

### Narasi

Kita sudah pernah menulis vertex shader sederhana pada pertemuan 2. Di sini, kita kembali ke satu bagian penting dari vertex shader, yaitu cara mengubah posisi vertex menjadi posisi yang siap diproses oleh GPU. Fokusnya bukan menulis shader dari nol, tetapi memahami hubungan **Model**, **View**, dan **Projection** dalam satu ekspresi transformasi.

Kode yang perlu kita perhatikan adalah:

```glsl
gl_Position =
  u_projection *
  u_view *
  u_model *
  vec4(a_position, 1.0);
```

Baris ini menentukan `gl_Position`, yaitu output wajib dari vertex shader. Nilai `gl_Position` menyatakan posisi vertex dalam **clip space**, bukan langsung posisi pixel di layar. Nilai inilah yang kemudian dipakai oleh tahap berikutnya dalam rendering pipeline, seperti clipping dan rasterisasi.

`a_position` adalah atribut vertex yang datang dari geometri. Pada pertemuan 2, `a_position` mungkin masih berupa `vec2`. Nanti, ketika kita masuk ke objek 3D, atribut ini akan menjadi `vec3`. Di sini, kita membungkusnya menjadi `vec4(a_position, 1.0)` karena transformasi model, view, dan projection bekerja pada vektor homogen. Komponen `1.0` pada `w` menandai bahwa vektor ini adalah **posisi titik**, bukan arah atau vektor bebas.

Tiga matrix yang digunakan memiliki peran berbeda:

- `u_model` mengubah koordinat **lokal objek** ke koordinat **dunia**.
- `u_view` mengubah koordinat dunia ke koordinat **kamera** atau **view space**.
- `u_projection` mengubah view space ke **clip space**, biasanya sesuai dengan jenis proyeksi, misalnya perspektif atau ortografis.

Urutan perkalian matrix sangat penting. Karena vektor posisi berada di paling kanan, maka `u_model` bekerja lebih dulu, lalu `u_view`, lalu `u_projection`. Dengan kata lain, alurnya adalah:

1. posisi lokal objek,
2. posisi dalam dunia,
3. posisi relatif terhadap kamera,
4. posisi dalam clip space.

Kita tidak boleh membalik urutan ini sembarangan, karena hasil transformasinya akan berbeda. Urutan ini mengikuti convention matrix yang digunakan, yaitu `Projection × View × Model × localPosition`.

Penting untuk dipahami bahwa `u_projection`, `u_view`, dan `u_model` adalah **uniform**, artinya nilainya dikirim dari CPU ke shader dan biasanya sama untuk seluruh vertex pada satu frame. Sementara `a_position` adalah **atribut vertex**, artinya nilainya berbeda untuk setiap vertex. Inilah yang membedakan data global scene dari data geometri objek.

MVP penting karena tanpa transformasi ini, vertex shader hanya memindahkan titik tanpa konteks kamera dan layar. `Model` memberi tahu di mana objek berada, `View` memberi tahu dari mana kamera melihat, dan `Projection` memberi tahu bagaimana dunia 3D dipetakan ke tampilan 2D. Ketiga hal inilah yang menjadi fondasi sebelum kita membahas objek 3D, lighting, texture, atau shader yang lebih kompleks.

### Inti yang Harus Ditekankan

- `gl_Position` adalah output vertex shader yang berisi posisi vertex dalam **clip space**.
- `u_model`, `u_view`, dan `u_projection` adalah matrix uniform yang mengubah posisi vertex melalui tiga tahap transformasi.
- Urutan transformasi adalah **Model → View → Projection**, sesuai ekspresi `u_projection * u_view * u_model * vec4(a_position, 1.0)`.
- `vec4(a_position, 1.0)` digunakan karena transformasi grafika komputer bekerja pada vektor homogen.
- `gl_Position` bukan posisi pixel akhir di layar, melainkan posisi yang masih akan diproses oleh pipeline rendering.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa `gl_Position` dihasilkan dari kombinasi `u_projection`, `u_view`, dan `u_model`, langkah berikutnya adalah memperluas atribut posisi dari 2D ke 3D. Pada slide berikutnya, kita akan melihat perubahan `in vec2 a_position;` menjadi `in vec3 a_position;`, serta apa artinya setiap vertex kini memiliki koordinat `X`, `Y`, dan `Z`.

---

## Slide 040 - Dari 2D ke 3D

### Narasi

Pada P2, atribut posisi vertex dideklarasikan sebagai `in vec2 a_position;`. Artinya, setiap vertex hanya membawa dua koordinat, yaitu `X` dan `Y`.

```glsl
in vec2 a_position;
```

Untuk berpindah ke objek 3D, deklarasi tersebut menjadi `in vec3 a_position;`. Perubahan ini terlihat sederhana, tetapi maknanya penting: setiap vertex sekarang memiliki tiga koordinat, yaitu `X`, `Y`, dan `Z`.

```glsl
in vec3 a_position;
```

Secara intuisi, `X` dan `Y` menentukan posisi pada bidang, sedangkan `Z` menentukan kedalaman. Tanpa koordinat `Z`, kita tidak bisa membedakan mana objek yang lebih dekat atau lebih jauh dari kamera. Karena itu, `Z` menjadi dasar bagi rendering 3D, kedalaman, dan penempatan objek dalam ruang.

Dalam pipeline rendering, koordinat 3D ini menjadi input penting untuk transformasi. Matriks `u_model` mengubah koordinat lokal objek ke koordinat dunia, `u_view` mengubahnya ke koordinat kamera, dan `u_projection` memetakannya ke ruang clip untuk proses proyeksi. Dengan `a_position` berbentuk `vec3`, vertex shader dapat melanjutkan transformasi menggunakan ekspresi seperti berikut.

```glsl
gl_Position =
  u_projection *
  u_view *
  u_model *
  vec4(a_position, 1.0);
```

Yang perlu dipahami mahasiswa sebelum lanjut adalah: perubahan dari `vec2` ke `vec3` bukan sekadar menambah satu angka, tetapi membuka kemampuan untuk merepresentasikan ruang 3D, kedalaman, kamera, dan objek seperti cube.

### Inti yang Harus Ditekankan

- `in vec2 a_position;` hanya menyimpan koordinat `X` dan `Y` untuk objek 2D.
- `in vec3 a_position;` menyimpan koordinat `X`, `Y`, dan `Z` untuk objek 3D.
- Koordinat `Z` penting untuk kedalaman, posisi relatif terhadap kamera, dan rendering 3D.
- Atribut posisi 3D menjadi input transformasi `u_model`, `u_view`, dan `u_projection` dalam vertex shader.

### Transisi ke Slide Berikutnya

Dengan posisi vertex sudah memiliki tiga sumbu, langkah berikutnya adalah memilih objek 3D sederhana untuk dipraktikkan. Pada slide berikutnya, kita akan melihat cube sebagai objek 3D, termasuk posisi sudut, face, triangle, dan alasan cube cocok untuk latihan transform, kamera, proyeksi, dan depth.

---

## Slide 041 - Cube sebagai Object 3D

### Narasi

Setelah vertex 3D memiliki koordinat `X, Y, Z`, kita bisa memilih objek paling sederhana untuk mulai memahami dunia 3D: **cube**. Secara geometris, cube memiliki **8 posisi sudut**, **6 faces**, dan **12 triangles**. Angka 12 muncul karena setiap face datar biasanya dipecah menjadi dua triangle, sehingga 6 face dikali 2 triangle menghasilkan 12 triangle. Dalam rendering pipeline, triangle adalah primitive dasar yang akan diproses oleh GPU, jadi representasi cube sebagai kumpulan triangle inilah yang nanti masuk ke tahap rasterisasi.

Kita perlu membedakan antara **posisi geometris** dan **vertex yang dikirim ke GPU**. Secara matematis, cube hanya punya 8 sudut unik. Namun, jika kita ingin setiap face memiliki atribut yang berbeda—misalnya normal face, warna face, atau `UV coordinate` yang berbeda—maka vertex pada sudut yang sama dapat diduplikasi. Dengan duplikasi ini, satu titik sudut dapat memiliki beberapa versi vertex, masing-masing terhubung ke face yang berbeda. Ini penting karena `per-face attribute` tidak selalu bisa disimpan hanya pada satu vertex bersama.

Cube menjadi objek latihan yang sangat baik karena bentuknya sederhana tetapi sudah cukup untuk memperlihatkan hampir semua tahap penting dalam grafika komputer 3D. Kita bisa mencoba **transform** untuk memindahkan, memutar, atau menskalakan cube; **camera** untuk menentukan dari mana scene dilihat; **projection** untuk memetakan dunia 3D ke layar 2D; dan **depth** untuk menangani tumpang tindih objek dalam scene. Dengan cube, kita dapat melihat bagaimana koordinat 3D berubah melalui pipeline sebelum akhirnya menjadi pixel di layar.

Secara visual, bayangkan cube sebagai kotak kecil yang terdiri dari beberapa sisi datar. Setiap sisi adalah face, dan setiap face dipecah menjadi dua triangle. Saat rendering, GPU tidak menggambar “kotak” secara langsung, melainkan menggambar kumpulan triangle tersebut. Triangle kemudian dirasterisasi menjadi fragment, dan fragment inilah yang akan diberi warna, diletakkan di layar, serta dibandingkan berdasarkan kedalaman jika diperlukan.

Inti yang harus dipahami sebelum lanjut adalah: cube bukan sekadar bentuk 3D, tetapi contoh minimal untuk memahami hubungan antara **geometri**, **atribut vertex**, dan **rendering pipeline**. Jika vertex diduplikasi, jumlah vertex yang dikirim ke GPU bisa lebih dari 8, meskipun posisi uniknya tetap 8. Hal ini wajar dan sering terjadi dalam graphics programming karena atribut seperti normal atau texture coordinate sering bergantung pada face, bukan hanya pada posisi titik.

### Inti yang Harus Ditekankan

- Cube memiliki **8 posisi sudut**, **6 faces**, dan **12 triangles**; triangle adalah primitive dasar yang dirender oleh GPU.
- Vertex dapat diduplikasi untuk mendukung `per-face attribute`, sehingga satu posisi geometris dapat memiliki beberapa vertex dengan atribut berbeda.
- Cube ideal untuk latihan **transform**, **camera**, **projection**, dan **depth** karena sederhana tetapi mewakili alur utama rendering 3D.

### Transisi ke Slide Berikutnya

Setelah cube dapat direpresentasikan dan digambar sebagai kumpulan triangle, muncul pertanyaan berikutnya: jika beberapa fragment dari scene 3D jatuh ke pixel yang sama, bagaimana kita menentukan fragment mana yang terlihat? Untuk itu, kita akan masuk ke konsep **depth**.

---

## Slide 042 - Mengapa Depth Dibutuhkan?

### Narasi

Bayangkan sebuah scene 3D yang berisi beberapa objek. Dalam proses rendering, posisi 3D dari objek-objek tersebut akan dipetakan ke layar. Di titik tertentu, dua atau lebih `fragment` dapat jatuh pada `pixel` yang sama. Artinya, secara visual mereka bersaing untuk menentukan warna apa yang harus ditampilkan pada pixel tersebut.

Masalahnya bukan hanya warna, tetapi kedalaman. Karena kamera melihat dari arah tertentu, `fragment` yang lebih dekat ke `camera` harus menutupi `fragment` yang lebih jauh. Tanpa mekanisme ini, objek yang seharusnya tersembunyi bisa muncul di depan, atau hasil gambar menjadi tidak konsisten.

Di sinilah kita membutuhkan konsep **depth**. Depth memberi informasi seberapa jauh suatu `fragment` berada dari kamera. Informasi ini memungkinkan sistem rendering memilih `fragment` yang paling dekat untuk setiap `pixel`.

Solusinya adalah **Depth Buffer**. Depth buffer adalah struktur yang menyimpan nilai kedalaman untuk setiap `pixel`, sehingga saat `fragment` baru diproses, sistem dapat membandingkan kedalaman `fragment` tersebut dengan kedalaman yang sudah tersimpan.

Untuk slide ini, yang penting dipahami adalah alasan mengapa depth dibutuhkan: karena satu `pixel` dapat mewakili banyak `fragment` 3D, dan kita harus memilih `fragment` yang paling dekat dengan `camera`. Detail cara penyimpanan dan perbandingannya akan kita lihat pada slide berikutnya.

### Inti yang Harus Ditekankan

- Dalam scene 3D, beberapa `fragment` dapat dipetakan ke `pixel` layar yang sama.
- Rendering harus menentukan `fragment` mana yang paling dekat dengan `camera`.
- **Depth Buffer** adalah solusi untuk menyimpan dan membandingkan informasi kedalaman.

### Transisi ke Slide Berikutnya

Setelah memahami mengapa kedalaman diperlukan, kita lanjut ke slide berikutnya untuk melihat bagaimana **Depth Buffer** menyimpan nilai kedalaman dan melakukan proses `Compare` serta `Keep / Reject` untuk setiap `fragment`.

---

## Slide 043 - Depth Buffer

### Narasi

Setelah kita memahami bahwa beberapa fragment dapat jatuh pada pixel yang sama, langkah berikutnya adalah menyimpan informasi kedalaman. **Depth buffer** adalah memori per-pixel yang menyimpan nilai kedalaman dari fragment yang saat ini dianggap paling dekat dengan kamera. Tanpa informasi ini, renderer tidak punya dasar yang konsisten untuk memilih fragment mana yang seharusnya terlihat.

Dalam pipeline rendering, depth buffer bekerja setelah fragment dihasilkan oleh proses rasterisasi. Setiap fragment membawa nilai kedalaman, yang pada slide ini disebut `New Depth`. Nilai ini kemudian dibandingkan dengan nilai kedalaman yang sudah tersimpan di depth buffer untuk pixel yang sama. Prosesnya dapat dibaca sebagai alur sederhana:

```text
New Depth
   ↓
Compare
   ↓
Keep / Reject
```

Pada tahap `Compare`, renderer memeriksa apakah fragment baru lebih dekat atau lebih jauh dibandingkan fragment yang sudah tersimpan. Jika fragment baru lebih dekat, keputusan yang diambil adalah `Keep`; fragment diterima dan nilai kedalaman di depth buffer diperbarui. Jika fragment baru lebih jauh, keputusan yang diambil adalah `Reject`; fragment tidak diterima, sehingga warna dari fragment tersebut tidak menggantikan warna yang sudah ada.

Penting untuk melihat bahwa **depth buffer** tidak bekerja sendiri. Ia bekerja bersama **color buffer**. Color buffer menyimpan warna akhir yang akan ditampilkan pada layar, sedangkan depth buffer menyimpan informasi kedalaman yang menentukan apakah warna tersebut boleh ditulis atau tidak. Dengan kata lain, color buffer menjawab pertanyaan “warna apa yang terlihat?”, sedangkan depth buffer membantu menjawab “apakah fragment ini cukup dekat untuk menjadi warna yang terlihat?”.

Dari sisi visual, mekanisme ini sangat penting karena scene 3D sering memiliki banyak objek yang saling menutupi. Tanpa depth buffer, objek yang digambar lebih akhir dapat menutupi objek yang seharusnya berada di depan, atau sebaliknya. Dengan depth buffer, urutan penggambaran tidak lagi menjadi satu-satunya penentu tampilan; yang lebih menentukan adalah kedalaman fragment terhadap kamera.

Sebelum lanjut, mahasiswa perlu memahami tiga hal utama: depth buffer menyimpan nilai kedalaman per pixel, setiap fragment melewati proses `Compare` lalu `Keep` atau `Reject`, dan keputusan ini bekerja berpasangan dengan color buffer. Pemahaman ini menjadi dasar untuk memahami bagaimana depth test diaktifkan dan bagaimana buffer dibersihkan sebelum frame baru dirender.

### Inti yang Harus Ditekankan

- **Depth buffer** menyimpan informasi kedalaman untuk setiap pixel/fragment.
- Alur utamanya: `New Depth` → `Compare` → `Keep / Reject`.
- Fragment yang lebih dekat diterima; fragment yang lebih jauh ditolak.
- Depth buffer bekerja bersama **color buffer** untuk menentukan warna akhir yang ditampilkan.
- Mekanisme ini penting agar objek 3D yang saling menutupi dirender secara konsisten.

### Transisi ke Slide Berikutnya

Setelah memahami apa yang disimpan dan bagaimana keputusan `Keep` atau `Reject` diambil, langkah berikutnya adalah melihat bagaimana depth test diaktifkan dan bagaimana buffer disiapkan sebelum frame baru dirender.

---

## Slide 044 - Depth Test

### Narasi

Setelah kita memahami bahwa **depth buffer** menyimpan informasi kedalaman, langkah praktis berikutnya adalah memastikan mekanisme kedalaman itu benar-benar aktif. Dalam WebGL, kita mengaktifkannya dengan:

```javascript
gl.enable(gl.DEPTH_TEST);
```

Panggilan ini penting karena **depth test** membuat GPU membandingkan kedalaman fragment yang sedang diproses dengan nilai kedalaman yang sudah tersimpan di **depth buffer**. Dengan kata lain, keputusan apakah sebuah fragment boleh menutupi warna yang sudah ada tidak lagi bergantung pada urutan gambar, melainkan pada posisi relatifnya terhadap kamera.

Selanjutnya, sebelum render frame, kita perlu membersihkan buffer:

```javascript
gl.clear(
  gl.COLOR_BUFFER_BIT |
  gl.DEPTH_BUFFER_BIT
);
```

Di sini, `gl.COLOR_BUFFER_BIT` membersihkan buffer warna, sedangkan `gl.DEPTH_BUFFER_BIT` membersihkan buffer kedalaman. Operasi `|` menggabungkan kedua flag tersebut, artinya kedua buffer dibersihkan sekaligus. Pembersihan ini penting dilakukan setiap frame karena nilai kedalaman dari frame sebelumnya tidak boleh memengaruhi frame baru.

Jika **depth buffer** tidak dibersihkan, fragment pada frame berikutnya bisa dibandingkan dengan nilai kedalaman yang sudah usang. Akibatnya, objek yang seharusnya terlihat bisa ditolak, atau objek yang seharusnya tertutup justru muncul. Ini bisa membuat visual 3D menjadi tidak konsisten dari satu frame ke frame berikutnya.

Tanpa **depth test**, hasil render sangat bergantung pada urutan draw. Misalnya, jika objek dekat digambar terlebih dahulu, lalu objek jauh digambar kemudian, objek jauh bisa menutupi objek dekat. Sebaliknya, jika urutan dibalik, hasilnya bisa terlihat benar secara kebetulan. Karena itu, untuk scene 3D yang benar, kedalaman harus menjadi dasar keputusan, bukan urutan pemanggilan draw.

Dalam konteks pipeline rendering, **depth test** berada setelah fragment dihasilkan dan sebelum fragment ditulis ke **color buffer**. Jika fragment lebih dekat, nilai kedalaman diperbarui dan warna boleh ditulis. Jika fragment lebih jauh, fragment ditolak. Pada slide ini, kita menekankan dua hal praktis: mengaktifkan **depth test** dan memastikan **depth buffer** bersih setiap frame.

### Inti yang Harus Ditekankan

- `gl.enable(gl.DEPTH_TEST)` mengaktifkan mekanisme perbandingan kedalaman.
- `gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)` membersihkan buffer warna dan buffer kedalaman setiap frame.
- Tanpa **depth test**, urutan draw dapat menghasilkan visual 3D yang salah.
- **Depth test** membuat keputusan berdasarkan kedalaman, bukan berdasarkan objek mana yang digambar lebih dulu.

### Transisi ke Slide Berikutnya

Dengan **depth test** yang aktif, rendering 3D menjadi lebih benar secara kedalaman. Namun, ketika dua permukaan memiliki nilai kedalaman yang sangat dekat, bisa muncul masalah visual yang dikenal sebagai **z-fighting**, dan itulah yang akan kita bahas pada slide berikutnya.

---

## Slide 045 - Z-Fighting

### Narasi

Setelah kita mengaktifkan `gl.DEPTH_TEST`, GPU akan membandingkan nilai kedalaman setiap pixel yang akan digambar. Tujuannya sederhana: pixel dari permukaan yang lebih dekat ke kamera seharusnya menutupi pixel dari permukaan yang lebih jauh.

Namun, ada kasus ketika dua permukaan memiliki nilai depth yang sangat dekat, bahkan hampir sama. Pada kondisi inilah **Z-fighting** bisa muncul.

Secara visual, Z-fighting biasanya terlihat sebagai:

- **flickering**, yaitu pixel bergantian menampilkan permukaan A atau permukaan B dari satu frame ke frame berikutnya,
- **pola saling menimpa**, yaitu muncul bercak-bercak atau noise di area dua permukaan yang berdekatan.

Gejala ini sering muncul ketika dua permukaan hampir **coplanar**, misalnya dua dinding yang menempel, lantai dan tekstur yang berada di kedalaman yang sama, atau dua objek yang posisinya terlalu berdekatan.

Faktor lain yang memperbesar kemungkinan Z-fighting adalah pengaturan kamera dan proyeksi. Jika **near plane terlalu dekat** atau **far plane terlalu jauh**, rentang kedalaman yang harus direpresentasikan menjadi lebih sulit dibagi secara presisi. Akibatnya, dua permukaan yang seharusnya berbeda kedalaman bisa menghasilkan nilai depth yang terlalu mirip.

Faktor terakhir adalah **depth precision terbatas**. Depth buffer tidak memiliki presisi tak terbatas. Ia menyimpan nilai kedalaman dalam jumlah bit tertentu, sehingga ada batas seberapa halus perbedaan kedalaman yang bisa dibedakan. Ketika dua permukaan berada di sekitar batas presisi tersebut, hasil depth test bisa berubah-ubah.

Dalam rendering pipeline, masalah ini biasanya muncul setelah tahap transformasi kamera dan proyeksi. Vertex sudah dipetakan ke ruang yang sesuai dengan kamera, kemudian rasterisasi menghasilkan fragment, lalu depth test memutuskan fragment mana yang boleh tampil. Jika nilai depth dua fragment terlalu dekat, keputusan tersebut bisa tidak stabil.

Sebelum lanjut, hal penting yang perlu dipahami adalah: Z-fighting bukan berarti objek tidak memiliki depth test. Justru depth test sudah berjalan, tetapi presisi kedalaman tidak cukup untuk membedakan dua permukaan yang terlalu dekat.

### Inti yang Harus Ditekankan

- **Z-fighting** terjadi ketika dua surface memiliki **depth yang hampir sama**.
- Gejalanya berupa **flickering** dan **pola saling menimpa** pada pixel.
- Penyebab umum meliputi surface **hampir coplanar**, **near terlalu dekat**, **far terlalu jauh**, dan **depth precision terbatas**.
- Masalah ini muncul karena depth buffer memiliki presisi terbatas dalam membedakan nilai kedalaman.

### Transisi ke Slide Berikutnya

Pada praktikum berikutnya, kita akan membangun cube 3D yang berputar dengan kamera, view matrix, projection, dan depth test. Di situ, kita bisa melihat langsung bagaimana pengaturan kamera dan depth test memengaruhi tampilan objek 3D.

---

## Slide 046 - Praktikum: Rotating 3D Cube

### Narasi

Pada praktikum ini, kita mulai menggeser pemahaman dari konsep ke implementasi. Objek yang akan dibangun bukan sekadar gambar dua dimensi, melainkan **cube 3D** yang dapat diposisikan, diputar, dan dilihat dari kamera yang berbeda.

Cube 3D dibangun dari geometri yang memiliki koordinat `x`, `y`, dan `z`. Koordinat ini masih berada pada ruang lokal objek. Agar cube dapat berada di posisi tertentu dalam dunia, kita menggunakan **Model Matrix**. Matriks ini biasanya memuat transformasi seperti translasi, rotasi, dan skala. Dalam praktikum, rotasi cube akan membuat **Model Matrix** berubah setiap frame, sehingga cube tampak berputar.

Selanjutnya, kita menentukan bagaimana kamera melihat scene. Kamera didefinisikan oleh `camera position`, `target`, dan `up vector`. `camera position` adalah titik kamera, `target` adalah titik yang dilihat, dan `up vector` menentukan arah atas pada layar. Dari informasi ini, kita membentuk **View Matrix** yang mengubah koordinat dunia menjadi koordinat ruang kamera.

Setelah objek dan kamera siap, kita memilih cara proyeksi. **Perspective Projection** menghasilkan efek jauh-berkumpul, sehingga objek yang lebih jauh tampak lebih kecil. **Orthographic Projection** mempertahankan ukuran relatif objek tanpa efek perspektif. Kedua jenis proyeksi ini mengubah koordinat kamera menjadi koordinat yang siap diproses menuju layar.

Alur utamanya dapat dibaca sebagai pipeline sederhana:

```text
Cube geometry
  -> Model Matrix
  -> View Matrix
  -> Projection Matrix
  -> rasterization
  -> depth test
```

Pada tahap `depth test`, GPU membandingkan kedalaman fragmen yang akan digambar dengan fragmen yang sudah ada. Ini penting agar sisi cube yang lebih dekat tidak tertutup oleh sisi yang lebih jauh. Konsep ini juga berkaitan dengan masalah **Z-fighting** yang telah kita bahas sebelumnya, terutama ketika permukaan memiliki kedalaman yang sangat dekat.

Sebelum lanjut ke tahapan teknis, mahasiswa perlu memahami bahwa setiap matriks memiliki ruang koordinat sendiri. Kesalahan umum biasanya terjadi ketika urutan transformasi salah, kamera tidak menatap objek, atau `depth test` tidak diaktifkan sehingga hasil render tampak tidak konsisten.

### Inti yang Harus Ditekankan

- **Cube 3D** adalah objek geometri dengan koordinat `x`, `y`, dan `z` yang akan ditransformasi melalui pipeline rendering.
- **Model Matrix** menentukan posisi, rotasi, dan skala objek dalam dunia.
- **View Matrix** dibentuk dari `camera position`, `target`, dan `up vector` untuk mengubah dunia menjadi ruang kamera.
- **Perspective Projection** dan **Orthographic Projection** adalah dua cara berbeda mengubah ruang kamera menjadi tampilan layar.
- **Depth test** penting agar objek 3D memiliki kedalaman yang benar dan menghindari tumpang tindih yang salah.
- **Rotation animation** memperbarui transformasi objek setiap frame sehingga cube tampak bergerak.

### Transisi ke Slide Berikutnya

Setelah memahami komponen utama yang harus ada pada praktikum, kita akan melihat urutan pengerjaannya secara lebih terstruktur.

---

## Slide 047 - Rencana Praktikum

### Narasi

Pada tahap ini, kita tidak langsung masuk ke implementasi detail, tetapi menyusun **Rencana Praktikum** sebagai peta kerja. Tujuannya agar mahasiswa tahu urutan membangun objek 3D yang benar: mulai dari geometri, transformasi, kamera, proyeksi, hingga interaksi.

```text
1. Buat Cube Geometry
2. Gunakan vec3 Position
3. Gunakan Model Matrix P3
4. Buat View Matrix
5. Buat Perspective Matrix
6. Buat Orthographic Matrix
7. Gabungkan MVP
8. Aktifkan Depth Test
9. Tambahkan Rotation
10. Tambahkan Camera Control
```

Secara visual, alur ini mengikuti pipeline rendering: **cube** adalah objek lokal, **Model Matrix** memindahkannya ke dunia, **View Matrix** mengubah koordinat dunia menjadi koordinat kamera, lalu **Projection Matrix** mengubahnya ke ruang clip. Setelah itu, **MVP** menggabungkan ketiga transformasi utama, dan **depth test** memastikan permukaan yang lebih dekat menutupi permukaan yang lebih jauh.

Tahap pertama dan kedua menekankan bahwa objek 3D harus direpresentasikan dengan **geometri** yang valid. `vec3 Position` adalah atribut vertex yang menyimpan koordinat `x`, `y`, `z` setiap titik sudut cube. Tanpa posisi yang benar, transformasi dan rasterisasi tidak akan menghasilkan bentuk yang diharapkan.

Tahap ketiga sampai keenam adalah inti transformasi kamera dan proyeksi. **Model Matrix P3** digunakan untuk memposisikan cube di dunia. **View Matrix** dibangun dari `camera position`, `target`, dan `up vector` untuk menentukan bagaimana kamera melihat scene. **Perspective Matrix** dan **Orthographic Matrix** adalah dua pilihan proyeksi: perspektif memberi kesan kedalaman, sedangkan ortografis mempertahankan ukuran objek relatif terhadap jarak.

Tahap ketujuh, **Gabungkan MVP**, penting karena dalam praktikum WebGL/GPU, transformasi sering dikirim ke shader sebagai satu matriks gabungan. Mahasiswa perlu memahami bahwa `MVP = Projection × View × Model`, bukan sekadar urutan penulisan, tetapi urutan transformasi yang menentukan hasil akhir.

Tahap kedelapan, **Aktifkan Depth Test**, membuat rendering 3D benar secara visual. Tanpa depth test, objek yang lebih jauh bisa menutupi objek yang lebih dekat, terutama saat cube berputar atau kamera bergerak. Tahap kesembilan dan kesepuluh, **Rotation** dan **Camera Control**, menambahkan dinamika: objek dapat berputar, dan kamera dapat diposisikan ulang untuk mengamati scene dari sudut berbeda.

Sebelum lanjut, mahasiswa perlu memahami bahwa praktikum ini bukan hanya membuat cube berputar, tetapi membangun pemahaman tentang **koordinat lokal**, **koordinat dunia**, **koordinat kamera**, **proyeksi**, dan **pipeline rendering**. Detail teknis implementasi ada di modul praktikum, tetapi alur di slide ini harus menjadi acuan utama.

### Inti yang Harus Ditekankan

- Urutan praktikum mengikuti alur rendering: geometri → model → view → projection → MVP → depth → animasi/kamera.
- `vec3 Position` adalah dasar geometri 3D; tanpa atribut posisi yang benar, transformasi tidak akan menghasilkan cube yang valid.
- **Model Matrix**, **View Matrix**, dan **Projection Matrix** masing-masing mengubah ruang koordinat: lokal ke dunia, dunia ke kamera, kamera ke clip.
- **MVP** menggabungkan transformasi utama agar shader dapat memproses vertex dengan satu matriks.
- **Depth test** penting agar objek 3D terlihat benar secara kedalaman, terutama saat ada rotasi atau pergerakan kamera.

### Transisi ke Slide Berikutnya

Setelah rencana praktikum dipahami, kita akan merangkum benang merah pertemuan: bagaimana koordinat bergerak dari `LOCAL` ke `WORLD`, `VIEW`, `CLIP`, `NDC`, hingga `SCREEN`, serta peran kamera, proyeksi, dan depth test dalam pipeline rendering.

---

## Slide 048 - Ringkasan Pertemuan

### Narasi

Sebelum menutup pertemuan, kita kembalikan seluruh materi ke satu alur utama: bagaimana sebuah objek 3D sampai menjadi gambar di layar. Alur ini penting karena hampir semua rendering real-time, termasuk WebGL, bekerja melalui rangkaian transformasi koordinat yang sama.

Diagram pada slide dibaca dari atas ke bawah sebagai perpindahan ruang koordinat:

```text
LOCAL → Model → WORLD → View → VIEW → Projection → CLIP → Perspective Divide → NDC → Viewport → SCREEN
```

Secara sederhana, tahapannya adalah:

1. `LOCAL` adalah ruang objek itu sendiri, misalnya posisi vertex pada cube.
2. `Model` membawa objek dari ruang lokal ke `WORLD`, sehingga objek punya posisi di dunia.
3. `View` memindahkan dunia ke ruang kamera; di sinilah **camera basis** dan `View Matrix` berperan.
4. `Projection` mengubah ruang pandangan ke ruang clip, dengan parameter seperti `FOV`, `near`, dan `far`.
5. `Perspective Divide` menormalisasi hasil proyeksi ke `NDC`.
6. `Viewport` memetakan `NDC` ke koordinat piksel pada `SCREEN`.

Inti dari alur ini adalah `MVP`, yaitu gabungan `Model`, `View`, dan `Projection`. Dalam praktikum, `MVP` menjadi kunci untuk menampilkan objek dengan posisi, orientasi, dan perspektif yang benar. Selain itu, `depth test` memastikan objek yang lebih dekat menutupi objek yang lebih jauh, sehingga tampilan 3D tidak salah secara kedalaman.

Dengan memahami benang merah ini, mahasiswa tidak perlu menghafal setiap matriks secara terpisah. Yang lebih penting adalah memahami ruang mana yang sedang diubah, oleh matriks apa, dan untuk tujuan apa.

### Inti yang Harus Ditekankan

- **Pipeline koordinat** utama adalah `LOCAL → WORLD → VIEW → CLIP → NDC → SCREEN`.
- `MVP` menggabungkan `Model`, `View`, dan `Projection` untuk menampilkan objek dari sudut pandang kamera.
- `depth test` penting agar objek yang lebih dekat menutupi objek yang lebih jauh secara benar.

### Transisi ke Slide Berikutnya

Dengan ringkasan ini, kita sudah menutup bagian kamera, proyeksi, dan 3D. Pertemuan berikutnya kita lanjut ke **Lighting, Shading & Texture pada WebGL**, di mana objek yang sudah diposisikan dengan benar akan mulai diberi pencahayaan, material, dan tekstur.

---

## Slide 049 - TERIMA KASIH

### Narasi

Kita telah sampai di akhir pertemuan keempat **Grafika Komputer**. Pada pertemuan ini, kita telah membahas bagaimana objek 3D diproses dari ruang model menuju layar, mulai dari **camera basis**, **View Matrix**, **projection**, **FOV**, **near/far**, **MVP**, hingga **depth test**.

Poin penting yang perlu kita pegang adalah bahwa seluruh proses tersebut membentuk alur kerja **rendering pipeline** yang konsisten. Tanpa pemahaman yang benar tentang transformasi kamera dan proyeksi, objek yang kita render akan sulit ditempatkan secara benar dalam ruang layar, dan hasil akhirnya bisa tampak tidak sesuai dengan posisi kamera yang kita inginkan.

Sebagai penutup, saya ingin menekankan bahwa materi **Camera, Projection & 3D** ini menjadi fondasi penting sebelum kita masuk ke aspek visual yang lebih kompleks. Pada pertemuan berikutnya, kita akan melanjutkan pembahasan ke **Lighting, Shading & Texture pada WebGL**, di mana objek 3D yang telah diproyeksikan ke layar akan diberi pencahayaan, material, dan tekstur agar tampil lebih realistis.

### Inti yang Harus Ditekankan

- **Camera, projection, dan MVP** adalah fondasi utama agar objek 3D dapat ditampilkan dengan benar di layar.
- **View Matrix** dan **projection** menentukan bagaimana kamera “melihat” dan bagaimana ruang 3D dipetakan ke ruang layar.
- **Depth test** penting agar objek yang lebih dekat dapat menutupi objek yang lebih jauh secara benar.
- Pemahaman pipeline ini menjadi dasar sebelum masuk ke **lighting**, **shading**, dan **texture** pada **WebGL**.

### Transisi ke Slide Berikutnya

Dengan fondasi kamera dan proyeksi yang telah kita bahas, pertemuan berikutnya kita akan melanjutkan ke **Lighting, Shading & Texture pada WebGL**, yaitu tahap di mana objek 3D mulai diberi pencahayaan, material, dan tekstur agar tampil lebih hidup dan realistis.
