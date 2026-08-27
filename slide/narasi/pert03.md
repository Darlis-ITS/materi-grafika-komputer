# Narasi Grafika Komputer - Pertemuan 03

## Transformation & Coordinate System

Sumber: markdown/pert03-ringkas.md

---

## Slide 000 - Cover

### Narasi

Selamat datang kembali pada mata kuliah **Grafika Komputer** dengan kode **EF234504**. Pertemuan ketiga ini akan membawa kita ke topik yang menjadi fondasi hampir semua proses rendering, yaitu **Transformation & Coordinate System**.

Topik ini penting karena setiap objek dalam dunia virtual harus memiliki posisi, orientasi, dan ukuran yang dapat dihitung secara konsisten oleh komputer. Tanpa sistem koordinat dan transformasi, kita tidak bisa memindahkan objek, memutar kamera, atau menampilkan model 3D pada layar dengan benar.

Pada pertemuan ini, kita akan mulai dari konsep dasar koordinat, kemudian menuju transformasi seperti **translation**, **scaling**, dan **rotation**, serta bagaimana representasi matriks membantu kita menggabungkan beberapa transformasi menjadi satu operasi yang efisien.

Materi ini disampaikan oleh **Dr. Darlis Herumurti** dari **Departemen Teknik Informatika**. Kita akan bergerak dari pemahaman konseptual menuju penerapan pada pipeline rendering dan praktikum interaktif.

### Inti yang Harus Ditekankan

- **Transformation & Coordinate System** adalah dasar untuk menempatkan dan memanipulasi objek dalam ruang 2D/3D.
- Setiap objek, kamera, dan layar memerlukan sistem koordinat yang jelas agar posisi dan orientasi dapat dihitung.
- Transformasi seperti **translation**, **scaling**, dan **rotation** akan menjadi alat utama dalam membangun adegan visual.
- Representasi matriks penting karena memungkinkan beberapa transformasi digabungkan secara efisien.

### Transisi ke Slide Berikutnya

Setelah memahami posisi kita dalam silabus, langkah berikutnya adalah melihat peta materi pertemuan ini. Kita akan menelusuri topik-topik utama yang akan dibahas, mulai dari sistem koordinat, transformasi dasar, matriks, hingga praktikum interaktif.

---

## Slide 001 - Topik Pembahasan

### Narasi

Pada pertemuan ini, kita akan membangun peta besar dari **transformasi** dan **sistem koordinat** dalam grafika komputer. Intinya, setiap objek 3D tidak langsung muncul di layar; ia melewati beberapa ruang koordinat, mulai dari **Local Coordinate** yang mendefinisikan bentuk objek di sekitar pusatnya sendiri, lalu **World Coordinate** yang menempatkan objek di dalam adegan, kemudian ruang kamera dan proyeksi seperti **View**, **Clip**, **NDC**, dan **Screen**. Memahami ruang-ruang ini penting karena kesalahan kecil pada koordinat atau urutan transformasi sering membuat objek berpindah, terbalik, atau tidak terlihat.

Topik yang akan kita ikuti bergerak dari konsep geometris menuju representasi matematis. Kita akan membahas **Translation**, **Scaling**, dan **Rotation**, termasuk perbedaan **degree** dan **radian** saat menentukan sudut rotasi. Setelah itu, kita masuk ke alat utamanya: **Matrix**, **Homogeneous Coordinate**, **Translation Matrix**, **Rotation Matrix**, dan **Scaling Matrix**. Di sinilah mahasiswa perlu melihat bahwa transformasi bukan hanya rumus terpisah, tetapi operasi yang dapat digabungkan menjadi satu matriks.

Bagian penting berikutnya adalah **Matrix Multiplication**, **Transform Composition**, dan **Transform Order**. Urutan transformasi sangat menentukan hasil akhir; misalnya, memutar lalu menggeser objek tidak selalu sama dengan menggeser lalu memutar. Kita juga akan melihat bagaimana hasil akhir tersebut menjadi **Model Matrix** dan dikirim ke shader melalui **Uniform Matrix pada WebGL**, sehingga GPU dapat memproses posisi vertex secara konsisten. Sebagai penutup, ada **Praktikum: Interactive Transformation** untuk melihat langsung bagaimana parameter transformasi mengubah objek di layar.

### Inti yang Harus Ditekankan

- **Coordinate space** adalah dasar rendering pipeline: **local**, **world**, **view**, **clip**, **NDC**, dan **screen** memiliki peran berbeda.
- **Translation**, **scaling**, dan **rotation** adalah operasi geometri dasar yang mengubah posisi, ukuran, dan orientasi objek.
- **Matrix** dan **homogeneous coordinate** memungkinkan transformasi digabungkan secara konsisten, terutama melalui **matrix multiplication**.
- **Transform order** sangat penting karena urutan transformasi memengaruhi hasil akhir.
- **Model Matrix** adalah representasi transformasi objek yang dikirim ke shader, misalnya melalui **uniform** pada `WebGL`.

### Transisi ke Slide Berikutnya

Setelah peta topik ini jelas, kita lanjut ke capaian pembelajaran agar mahasiswa tahu kemampuan apa yang harus dimiliki setelah pertemuan ini selesai.

---

## Slide 002 - Capaian Pembelajaran

### Narasi

Pada pertemuan ini, capaian utamanya adalah memahami transformasi sebagai bagian dari **graphics pipeline**, bukan sekadar rumus geometri. Kita perlu bisa menjelaskan **coordinate space** yang dilalui sebuah objek: dari ruang objek sendiri menuju ruang adegan, lalu menuju ruang tampilan. Pemahaman ini penting karena GPU tidak menginterpretasikan koordinat secara intuitif; setiap posisi vertex harus dinyatakan dalam ruang yang jelas agar bisa diproses oleh **vertex shader** dan tahap rendering berikutnya.

Selanjutnya, kita harus mampu membedakan **local coordinate** dan **world coordinate**, serta menerapkan **translation**, **rotation**, dan **scaling** pada objek. Dalam grafika komputer, operasi-operasi ini biasanya direpresentasikan sebagai **matrix**, sehingga transformasi dapat digabungkan secara konsisten. Konsep **homogeneous coordinate** menjadi penting karena memungkinkan translation, rotation, dan scaling ditulis dalam satu representasi matriks, biasanya matriks 4x4, yang dapat dikalikan melalui **matrix multiplication**. Dari sinilah **Model Matrix** terbentuk sebagai transformasi total yang menggambarkan posisi, orientasi, dan ukuran objek dalam adegan.

Terakhir, capaian ini juga menuntut kita memahami bahwa urutan transformasi memengaruhi hasil akhir karena perkalian matriks tidak bersifat komutatif. Dalam implementasi **WebGL**, transform matrix dikirim ke shader melalui **uniform**, sehingga objek dapat ditransformasikan secara interaktif tanpa mengubah data geometri asli di buffer. Dengan capaian ini, mahasiswa diharapkan tidak hanya mampu menghitung transformasi, tetapi juga menghubungkannya dengan pipeline rendering dan implementasi GPU.

### Inti yang Harus Ditekankan

- **Coordinate space** adalah konteks posisi vertex dalam pipeline; tanpa ruang yang jelas, transformasi tidak dapat diinterpretasikan dengan benar.
- **Local coordinate** milik objek, sedangkan **world coordinate** adalah ruang adegan bersama.
- **Translation**, **rotation**, dan **scaling** dapat direpresentasikan sebagai **matrix** dan digabungkan melalui **matrix multiplication**.
- **Homogeneous coordinate** memungkinkan transformasi seperti translation, rotation, dan scaling ditulis dalam satu matriks yang kompatibel dengan pipeline GPU.
- **Model Matrix** adalah hasil komposisi transformasi objek dan dikirim ke shader melalui **uniform** pada **WebGL**.
- Urutan transformasi penting karena hasil **matrix multiplication** bergantung pada urutan.

### Transisi ke Slide Berikutnya

Dengan capaian pembelajaran ini, kita lanjut ke posisi materi: bagaimana transformasi masuk ke pipeline setelah vertex data dan sebelum vertex menjadi transformed vertex, tanpa mengubah geometry asli di buffer.

---

## Slide 003 - Posisi Materi

### Narasi

Pada pertemuan 2, kita sudah melihat alur dasar rendering pipeline:

```text
Vertex Data
   ↓
Vertex Shader
   ↓
Primitive
   ↓
Fragment Shader
```

Alur ini menunjukkan bahwa **`Vertex Data`** diproses oleh **`Vertex Shader`**, kemudian menjadi **`Primitive`**, lalu diproses oleh **`Fragment Shader`**. Pada pertemuan 3, posisi materi kita berada tepat di bagian awal alur tersebut, yaitu pada tahap di mana **`Vertex`** masih perlu diberi posisi, orientasi, dan ukuran yang benar sebelum masuk ke proses rendering berikutnya.

Pertemuan 3 menambahkan konsep:

```text
Vertex
   ↓
Transformation Matrix
   ↓
Transformed Vertex
```

Artinya, sebelum sebuah **`Vertex`** digunakan untuk membentuk objek di layar, vertex tersebut dapat dikalikan dengan **`Transformation Matrix`**. Hasilnya adalah **`Transformed Vertex`**, yaitu vertex yang sudah memiliki posisi baru sesuai transformasi yang kita inginkan.

Poin penting yang perlu dipahami adalah: kita tidak mengubah **`geometry`** asli di **`buffer`**. Data geometri awal tetap dipertahankan, sedangkan transformasi diterapkan sebagai operasi tambahan pada vertex. Dengan cara ini, satu objek yang sama dapat dipindahkan, diputar, atau diskalakan tanpa harus menyimpan ulang bentuk aslinya.

Secara pipeline, transformasi berada di sisi awal proses: ia mengubah koordinat vertex sebelum vertex tersebut diteruskan ke tahap berikutnya. Jadi, materi pertemuan 3 ini menjadi dasar untuk memahami bagaimana objek grafika dapat diposisikan dalam scene, dan bagaimana transformasi tersebut nanti dapat dikaitkan dengan shader dan rendering pipeline.

### Inti yang Harus Ditekankan

- Transformasi berada di awal pipeline, sebelum vertex diproses lebih lanjut.
- **`Transformation Matrix`** mengubah **`Vertex`** menjadi **`Transformed Vertex`**.
- **`geometry`** asli di **`buffer`** tidak diubah; transformasi diterapkan sebagai operasi pada vertex.
- Konsep ini menjadi dasar untuk memahami posisi, orientasi, dan ukuran objek dalam scene.

### Transisi ke Slide Berikutnya

Setelah kita tahu di mana transformasi berada dalam pipeline, langkah berikutnya adalah memahami mengapa transformasi ini dibutuhkan dalam grafika komputer.

---

## Slide 004 - Mengapa Transformation Dibutuhkan?

### Narasi

Dalam grafika komputer, sebuah objek tidak cukup hanya didefinisikan sebagai kumpulan vertex. Vertex itu baru menjadi bentuk yang bermakna ketika posisinya relatif terhadap kamera, objek lain, dan scene dapat diatur. Karena itu kita membutuhkan **transformasi** sebagai cara untuk memindahkan, memutar, memperbesar, memperkecil, dan menempatkan objek dalam scene tanpa harus menulis ulang geometri aslinya.

Intuisi visualnya sederhana. Bayangkan sebuah model karakter yang sudah dibuat dengan vertex dan face. Jika karakter itu harus berjalan melintasi layar, kita tidak perlu mengubah setiap koordinat vertex secara manual. Kita cukup menerapkan **translation** pada objek tersebut. Prinsip yang sama berlaku untuk mobil yang berbelok, yaitu **rotation**, atau objek yang membesar dan mengecil, yaitu **scaling**.

```text
Character berjalan → Translation
Mobil berbelok    → Rotation
Object membesar   → Scaling
```

Dalam pipeline rendering, transformasi biasanya bekerja pada tahap vertex, sebelum objek dirasterisasi menjadi fragment atau piksel. Vertex asli tetap tersimpan di buffer, sedangkan hasil transformasi menghasilkan posisi vertex yang baru untuk satu frame tertentu. Pendekatan ini penting karena objek yang sama dapat dipakai berulang kali dengan posisi, orientasi, dan ukuran yang berbeda.

Dari sisi GPU, transformasi sangat efisien karena dapat dilakukan secara paralel untuk banyak vertex. Konsep ini juga menjadi dasar untuk menempatkan objek dalam scene, mengatur kamera, dan membangun hubungan antar objek. Tanpa transformasi, kita hanya memiliki geometri statis yang sulit digunakan untuk animasi, interaksi, atau simulasi.

Sebelum lanjut, mahasiswa perlu memahami bahwa transformasi bukan sekadar mengubah angka koordinat secara acak. Transformasi adalah operasi yang mengubah posisi dan orientasi objek dalam ruang, dan hasilnya bergantung pada sistem koordinat yang digunakan.

### Inti yang Harus Ditekankan

- **Transformasi** dibutuhkan agar objek dapat dipindahkan, diputar, diperbesar, diperkecil, dan ditempatkan dalam scene.
- Transformasi memungkinkan geometri asli tetap dipertahankan, sementara posisi objek dapat diubah setiap frame.
- Contoh utama: **translation** untuk perpindahan, **rotation** untuk perubahan orientasi, dan **scaling** untuk perubahan ukuran.
- Dalam rendering pipeline, transformasi berperan pada tahap vertex sebelum rasterisasi.

### Transisi ke Slide Berikutnya

Setelah kita memahami mengapa transformasi dibutuhkan, langkah berikutnya adalah memahami di mana posisi objek dinyatakan. Untuk itu, kita akan masuk ke konsep **coordinate system**, yaitu sistem referensi yang menentukan bagaimana koordinat titik diartikan dalam ruang 2D atau 3D.

---

## Slide 005 - Coordinate System

### Narasi

Sebelum kita memindahkan, memutar, atau memperbesar objek, kita perlu tahu di mana objek itu berada. Dalam grafika komputer, posisi tidak cukup dinyatakan hanya sebagai angka; angka itu harus dibaca dalam sebuah **coordinate system**, yaitu sistem referensi yang memberi makna pada koordinat.

Untuk objek dua dimensi, posisi titik biasanya ditulis sebagai:

```text
P = (x, y)
```

Sedangkan untuk objek tiga dimensi, posisi titik dinyatakan dengan tiga komponen:

```text
P = (x, y, z)
```

Nilai `x`, `y`, dan `z` menunjukkan posisi titik relatif terhadap sistem referensi yang sedang digunakan.

Poin penting yang perlu dipahami adalah: **nilai koordinat sebuah titik bergantung pada coordinate space**. Artinya, titik yang sama dapat memiliki koordinat berbeda jika diukur dari sistem referensi yang berbeda.

Sebagai intuisi sederhana, bayangkan sebuah karakter dalam scene. Posisi kakinya mungkin `(0, 0, 0)` jika diukur dari pusat karakter itu sendiri, tetapi bisa menjadi `(10, 0, 5)` jika diukur dari pusat dunia atau scene. Kedua nilai tersebut bisa benar, asalkan **coordinate space**-nya jelas.

Dalam rendering pipeline, hal ini sangat penting karena objek biasanya tidak langsung digambar pada posisi akhirnya. Objek memiliki posisi lokal, kemudian ditempatkan ke dalam scene, lalu diproses lebih lanjut menuju tampilan layar. Tanpa coordinate system yang jelas, transformasi seperti `translation`, `rotation`, dan `scaling` tidak akan memiliki acuan yang konsisten.

Jadi, sebelum lanjut ke transformasi yang lebih detail, kita perlu membiasakan diri dengan satu kebiasaan: setiap kali melihat koordinat, tanyakan **koordinat dalam ruang apa?**

### Inti yang Harus Ditekankan

- **Coordinate system** adalah sistem referensi untuk menyatakan posisi titik atau objek.
- Dalam 2D, posisi ditulis `P = (x, y)`; dalam 3D, posisi ditulis `P = (x, y, z)`.
- Nilai koordinat tidak bersifat mutlak; nilainya bergantung pada **coordinate space** yang digunakan.
- Memahami coordinate space penting agar transformasi dan penempatan objek dalam scene dapat dilakukan secara konsisten.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bahwa satu vertex dapat memiliki koordinat berbeda-beda karena melewati beberapa coordinate space, mulai dari `Local` menuju `World`, dan kemudian menuju ruang-ruang lain dalam pipeline rendering.

---

## Slide 006 - Satu Vertex, Banyak Coordinate Space

### Narasi

Sebuah **vertex** tidak selalu memiliki satu koordinat tunggal. Nilai `x`, `y`, dan `z` dari vertex yang sama dapat berubah tergantung pada **coordinate space** yang sedang digunakan. Dalam grafika komputer, posisi titik harus selalu dipahami relatif terhadap suatu sistem referensi.

Kita dapat membayangkan alur koordinat sebuah vertex dalam rendering pipeline seperti berikut:

```text
Local
 ↓
World
 ↓
View
 ↓
Clip
 ↓
NDC
 ↓
Screen
```

Pada tahap **Local**, posisi vertex dinyatakan relatif terhadap objek itu sendiri. Misalnya, titik pada model kursi didefinisikan relatif terhadap pusat atau origin kursi, bukan terhadap posisi kursi di dalam ruangan.

Pada tahap **World**, posisi vertex dinyatakan dalam ruang global scene. Di sini objek sudah ditempatkan di lingkungan 3D, misalnya kursi diposisikan di sudut ruangan, dirotasi, atau diskala sesuai kebutuhan scene.

Tahap **View** mengubah koordinat dunia menjadi koordinat relatif terhadap kamera. Setelah itu, koordinat masuk ke ruang **Clip** dan **NDC** untuk persiapan proyeksi serta pemotongan objek yang berada di luar area yang dapat dirender. Terakhir, koordinat diubah ke ruang **Screen**, yaitu posisi 2D pada viewport atau layar.

Untuk pertemuan ini, kita tidak langsung membahas semua tahap secara detail. Fokus utama kita adalah **Local → World**, karena ini adalah langkah pertama yang menentukan bagaimana objek ditempatkan di dalam scene. Pemahaman ini penting sebelum kita masuk ke kamera, proyeksi, dan proses rasterisasi.

Sebelum lanjut, hal yang perlu dipahami mahasiswa adalah: **satu vertex dapat memiliki banyak representasi koordinat**, dan setiap perpindahan antar coordinate space dilakukan melalui transformasi yang jelas.

### Inti yang Harus Ditekankan

- **Satu vertex** dapat memiliki koordinat berbeda di **Local**, **World**, **View**, **Clip**, **NDC**, dan **Screen**.
- Alur koordinat dalam pipeline bersifat berurutan: `Local → World → View → Clip → NDC → Screen`.
- Pertemuan 3 fokus pada transformasi **Local → World**, yaitu menempatkan objek dalam ruang scene.
- Pertemuan 4 akan melanjutkan ke **View** dan **Projection**, yaitu hubungan kamera dan proyeksi ke layar.

### Transisi ke Slide Berikutnya

Sekarang kita mulai dari titik paling dasar: bagaimana sebuah vertex didefinisikan sebelum objek dipindahkan ke dunia. Kita akan melihat **Local Coordinate**, yaitu posisi relatif terhadap origin objek.

---

## Slide 007 - Local Coordinate

### Narasi

Dalam grafika komputer, setiap objek biasanya tidak langsung didefinisikan berdasarkan posisi akhirnya di layar. Objek pertama kali didefinisikan dalam **local coordinate**, yaitu sistem koordinat yang relatif terhadap **origin object** itu sendiri. Artinya, koordinat vertex pada tahap ini bukan koordinat dunia, bukan koordinat kamera, dan bukan koordinat layar. Koordinat ini hanya menggambarkan bentuk objek terhadap titik acuan objeknya.

```text
       (0, 0.5)
          ●
         / \
        /   \
       ●─────●
(-0.5,-0.5) (0.5,-0.5)
```

Pada diagram ini, kita melihat sebuah segitiga sederhana yang didefinisikan dalam `local space`. Titik atas berada pada koordinat `(0, 0.5)`, titik kiri bawah pada `(-0.5, -0.5)`, dan titik kanan bawah pada `(0.5, -0.5)`. Nilai-nilai ini menunjukkan posisi relatif vertex terhadap origin object, bukan posisi absolut objek di dalam scene. Jadi, jika objek ini nanti dipindahkan, diputar, atau diskala, koordinat lokalnya tetap sama; yang berubah adalah transformasi yang diterapkan pada objek.

Penting untuk memahami bahwa **geometry dasar** seperti mesh, segitiga, kubus, atau model karakter umumnya didefinisikan di `local space`. Dengan cara ini, objek dapat dibuat sekali dan kemudian digunakan di berbagai posisi di dalam scene. Misalnya, model karakter dapat dibuat dengan origin di pusat tubuh atau di kaki, lalu diposisikan di dunia melalui transformasi. Pemisahan antara bentuk objek dan posisinya di scene inilah yang membuat rendering pipeline menjadi lebih rapi dan fleksibel.

Dalam pipeline rendering, `local space` adalah tahap awal sebelum objek masuk ke `world space`. Vertex yang masih berada di local coordinate akan ditransformasikan menggunakan matriks objek atau model matrix agar posisinya sesuai dengan dunia. Setelah itu, barulah objek mengalami transformasi view, projection, dan rasterisasi. Karena itu, memahami local coordinate menjadi dasar penting sebelum membahas transformasi, kamera, dan rendering.

Sebelum lanjut, kita perlu memastikan bahwa mahasiswa tidak mencampuradukkan **local coordinate** dengan koordinat dunia. Local coordinate adalah milik objek, sedangkan world coordinate adalah posisi objek di dalam scene. Selain itu, kita juga perlu menyadari bahwa origin object menjadi titik acuan penting untuk transformasi, terutama untuk rotasi dan scaling.

### Inti yang Harus Ditekankan

- `Local coordinate` adalah koordinat relatif terhadap `origin object`, bukan terhadap layar, kamera, atau dunia.
- Geometri dasar seperti mesh atau segitiga didefinisikan di `local space` agar objek dapat ditransformasikan dan digunakan ulang di berbagai posisi.
- Koordinat pada diagram menunjukkan bentuk objek terhadap origin object; posisi akhir objek di scene akan ditentukan oleh transformasi ke `world space`.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa setiap objek memiliki koordinat lokal, langkah berikutnya adalah melihat apa yang menjadi pusat transformasi objek, yaitu `object origin` atau `pivot`, karena rotasi, scaling, dan posisi objek sangat bergantung pada titik acuan tersebut.

---

## Slide 008 - Object Origin / Pivot

### Narasi

Setelah kita mendefinisikan geometry dalam **local coordinate**, langkah berikutnya adalah menentukan titik acuan objek. Titik acuan ini disebut **object origin** atau **pivot**. Pada diagram, titik `O` berada di persimpangan sumbu `X` dan `Y`, dan menjadi referensi utama untuk membaca posisi titik-titik objek.

```text
        Y
        ↑
        |
        O ─────→ X
      Origin
```

Dalam grafika komputer, pivot bukan sekadar titik geometris. Ia menentukan bagaimana objek mengalami transformasi. Misalnya:

- **rotation** dilakukan terhadap pivot, sehingga objek berputar mengelilingi titik tersebut;
- **scaling** dilakukan terhadap pivot, sehingga bagian objek yang berimpit dengan pivot cenderung tetap pada posisinya;
- **posisi object** ditentukan oleh transform-nya, bukan hanya oleh koordinat lokal geometry-nya.

Intuisinya, geometry lokal bisa tetap sama, tetapi jika pivot atau transform objek berubah, hasil akhirnya di layar bisa berbeda. Jika pivot berada di pusat objek, rotasi terasa seperti objek berputar di tempat. Jika pivot berada di sudut atau ujung objek, rotasi akan membuat objek berayun mengelilingi titik tersebut.

Hal ini penting karena dalam rendering pipeline, koordinat lokal objek biasanya diubah melalui transformasi model sebelum masuk ke ruang yang lebih global. Dengan kata lain, pivot membantu kita memahami hubungan antara bentuk objek dan transformasi yang diterapkan padanya.

Sebelum lanjut, mahasiswa perlu memahami bahwa **local space** mendefinisikan bentuk objek, sedangkan **pivot/origin** menjadi acuan transformasi. Memahami ini akan memudahkan kita membaca posisi, rotasi, dan skala objek tanpa harus mengubah geometry-nya secara langsung.

### Inti yang Harus Ditekankan

- **Object origin / pivot** adalah titik acuan objek dalam local space.
- **Rotation** dan **scaling** bergantung pada posisi pivot.
- Posisi akhir objek ditentukan oleh transformasi, bukan hanya koordinat geometry lokal.
- Pivot membantu membedakan antara bentuk objek dan penempatannya dalam scene.

### Transisi ke Slide Berikutnya

Jika pivot adalah acuan lokal untuk satu objek, maka selanjutnya kita perlu melihat bagaimana banyak objek diletakkan bersama dalam satu ruang global. Pada slide berikutnya, kita akan membahas **world coordinate**, yaitu coordinate system global yang menjadi tempat semua objek dalam scene berbagi ruang.

---

## Slide 009 - World Coordinate

### Narasi

Setelah kita memahami bahwa setiap objek memiliki **origin** atau **pivot**, langkah berikutnya adalah menempatkan objek-objek tersebut di dalam sebuah scene. Di sinilah konsep **world coordinate** menjadi penting. **World coordinate** adalah sistem koordinat global yang menjadi acuan bersama untuk seluruh objek dalam scene.

Bayangkan sebuah scene sebagai ruang bersama. Di dalamnya terdapat mobil, pohon, bangunan, dan kamera. Semua objek tersebut tidak hanya memiliki posisi lokal masing-masing, tetapi juga harus memiliki posisi yang dapat dibandingkan satu sama lain. Posisi itulah yang dinyatakan dalam **world space**.

```text
World
├── Car      ( 4, 1)
├── Tree     (-3, 2)
├── Building ( 0, 5)
└── Camera
```

Pada diagram ini, **World** adalah akar dari sistem koordinat global. Objek seperti `Car`, `Tree`, dan `Building` memiliki koordinat posisi dalam world space. Misalnya, `Car` berada di `(4, 1)`, `Tree` di `(-3, 2)`, dan `Building` di `(0, 5)`. Koordinat ini menunjukkan posisi relatif terhadap origin world, bukan terhadap origin objek lain.

Hal penting yang perlu dipahami adalah bahwa **semua objek berbagi world space yang sama**. Artinya, jika kita ingin mengetahui jarak antara mobil dan pohon, atau posisi kamera terhadap bangunan, kita bisa membandingkannya menggunakan koordinat yang sama. Tanpa world coordinate, setiap objek hanya akan memiliki posisi lokal yang tidak mudah dihubungkan satu sama lain.

Dalam rendering pipeline, world coordinate berperan sebagai tahap penting setelah objek didefinisikan secara lokal. Objek biasanya memiliki bentuk dan transformasi internal, misalnya posisi relatif terhadap pivot-nya. Namun, untuk ditampilkan di scene, objek tersebut harus dipetakan ke world space. Kamera juga ditempatkan dalam world space, karena posisi dan orientasi kamera menentukan apa yang terlihat oleh penonton.

Jadi, inti dari slide ini adalah: **world coordinate adalah ruang global yang membuat semua objek dalam scene dapat berada, bergerak, dan dibandingkan dalam satu sistem acuan yang sama**.

### Inti yang Harus Ditekankan

- **World coordinate** adalah sistem koordinat global untuk seluruh scene.
- Semua objek berbagi **world space** yang sama, sehingga posisinya dapat dibandingkan.
- Koordinat seperti `(4, 1)` menunjukkan posisi objek terhadap origin world, bukan terhadap objek lain.
- Kamera juga berada dalam world space, karena kamera menentukan tampilan scene.
- Konsep ini menjadi dasar untuk memahami transformasi dari **local coordinate** ke **world coordinate**.

### Transisi ke Slide Berikutnya

Jika setiap objek memiliki posisi lokal dan scene memiliki world coordinate, maka pertanyaan berikutnya adalah bagaimana objek berpindah dari koordinat lokalnya ke koordinat world. Pada slide berikutnya, kita akan membahas **Local ke World**, yaitu proses **model transformation** yang dibentuk dari `Translation + Rotation + Scaling`.

---

## Slide 010 - Local ke World

### Narasi

Setelah kita memahami **world coordinate** sebagai ruang global sebuah scene, langkah berikutnya adalah memahami bagaimana sebuah objek yang awalnya didefinisikan dalam ruang pribadinya dapat ditempatkan ke dalam scene tersebut.

Setiap objek 3D biasanya tidak langsung didefinisikan langsung dalam world coordinate. Objek umumnya memiliki **local coordinate**, yaitu sistem koordinat milik objek itu sendiri. Misalnya, model mobil dapat dibuat dengan pusatnya berada di `(0, 0, 0)` pada local coordinate. Artinya, posisi vertex mobil diukur relatif terhadap pusat mobil, bukan relatif terhadap seluruh scene.

```text
Local Coordinate
      ↓
Model Transformation
      ↓
World Coordinate
```

Diagram ini menunjukkan alur utama: vertex objek yang berada di **Local Coordinate** akan diproses oleh **Model Transformation**, lalu hasilnya menjadi posisi vertex dalam **World Coordinate**. Dengan kata lain, model transformation adalah proses yang memetakan objek dari ruang lokalnya ke ruang dunia.

Dalam rendering pipeline, langkah ini sangat penting karena objek biasanya disimpan sebagai geometri yang dapat digunakan ulang. Satu model mobil, misalnya, dapat diletakkan di beberapa posisi berbeda dalam scene tanpa harus membuat ulang geometrinya. Yang berubah adalah transformasinya, bukan bentuk dasar objeknya.

**Model Transformation** umumnya dibentuk dari tiga transformasi dasar:

- `Translation`
- `Rotation`
- `Scaling`

Ketiganya bekerja pada vertex objek. `Translation` menentukan di mana objek berada dalam world coordinate, `Rotation` menentukan bagaimana objek berorientasi, dan `Scaling` menentukan seberapa besar atau kecil objek tersebut. Dalam implementasi, ketiganya sering digabungkan menjadi satu matriks transformasi, yang biasanya disebut **model matrix**.

Hal penting yang perlu kita pahami sebelum lanjut adalah bahwa local coordinate dan world coordinate adalah dua ruang yang berbeda. Local coordinate bersifat relatif terhadap objek, sedangkan world coordinate bersifat relatif terhadap scene. Model transformation adalah jembatan antara keduanya.

### Inti yang Harus Ditekankan

- **Local coordinate** adalah sistem koordinat milik objek, biasanya berpusat pada objek itu sendiri.
- **World coordinate** adalah sistem koordinat global scene tempat semua objek berada.
- **Model Transformation** memetakan objek dari local coordinate ke world coordinate.
- Model transformation dibentuk dari `Translation`, `Rotation`, dan `Scaling`.
- Konsep ini penting karena memungkinkan satu objek digunakan berulang kali dengan posisi, orientasi, dan ukuran yang berbeda.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan membedah ketiga transformasi dasar tersebut satu per satu: bagaimana `Translation`, `Rotation`, dan `Scaling` masing-masing mengubah vertex objek.

---

## Slide 011 - Transformasi Dasar

### Narasi

Dalam grafika komputer, objek 3D biasanya didefinisikan dalam koordinat lokalnya sendiri. Sebelum objek bisa ditampilkan di layar, koordinat tersebut perlu diubah ke ruang dunia. Pada tahap inilah **transformasi dasar** berperan.

Tiga transformasi utama yang kita kenal adalah **translation**, **rotation**, dan **scaling**. Masing-masing mengubah aspek yang berbeda dari objek:

- **Translation** mengubah **posisi** objek.
- **Rotation** mengubah **orientasi** objek.
- **Scaling** mengubah **ukuran** objek.

Poin penting yang perlu dipahami adalah transformasi ini tidak bekerja pada “objek” secara abstrak, tetapi diterapkan pada **vertex** penyusun objek. Setiap titik koordinat pada mesh akan diproses, lalu hasil akhirnya membentuk posisi, arah, dan ukuran objek yang baru.

Dalam konteks rendering pipeline, transformasi dasar ini sering menjadi bagian dari **model transformation**. Artinya, objek yang semula berada di `local coordinate` akan dipindahkan, diputar, atau diskala agar sesuai dengan `world coordinate`. Setelah itu, baris koordinat vertex yang sudah ditransformasikan akan diteruskan ke tahap berikutnya, seperti view transformation, projection, dan rasterization.

Kita juga perlu menyadari bahwa urutan transformasi dapat memengaruhi hasil akhir. Misalnya, memutar objek lalu memindahkannya bisa menghasilkan posisi yang berbeda dibandingkan memindahkan objek lalu memutar. Karena itu, mahasiswa perlu membayangkan transformasi sebagai operasi geometri yang bekerja pada koordinat, bukan sekadar “menggeser gambar” di layar.

Untuk slide ini, cukup pahami dulu tiga jenis transformasi dan apa yang diubah oleh masing-masing. Detail rumus, contoh numerik, dan cara implementasinya akan kita bahas satu per satu mulai dari **translation**.

### Inti yang Harus Ditekankan

- **Translation**, **rotation**, dan **scaling** adalah transformasi dasar dalam grafika komputer.
- Translation mengubah **posisi**, rotation mengubah **orientasi**, scaling mengubah **ukuran**.
- Transformasi diterapkan pada **vertex** objek, bukan hanya pada objek secara keseluruhan.
- Transformasi dasar menjadi bagian penting dari **model transformation** dalam rendering pipeline.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan masuk ke **translation**, yaitu transformasi yang paling sederhana karena hanya menggeser posisi objek tanpa mengubah bentuk atau orientasinya.

---

## Slide 012 - Translation

### Narasi

**Translation** adalah operasi pemindahan posisi sebuah titik atau objek pada bidang 2D. Intinya, setiap koordinat titik awal ditambah dengan nilai offset tertentu. Jika titik awal adalah `P = (x, y)` dan vektor translasi adalah `T = (tx, ty)`, maka titik baru menjadi:

```text
x' = x + tx
y' = y + ty
```

Pada rumus ini, `tx` menggeser titik sepanjang sumbu `x`, sedangkan `ty` menggeser titik sepanjang sumbu `y`. Nilai positif pada `tx` biasanya memindahkan objek ke kanan, nilai negatif ke kiri; nilai positif pada `ty` ke atas, nilai negatif ke bawah, selama kita memakai konvensi sumbu yang umum. Yang penting, operasi ini tidak mengubah jarak antar titik, sudut, atau bentuk objek; yang berubah hanya posisi.

Kita bisa melihatnya pada contoh sederhana:

```text
P = (1, 2)
T = (3,-1)

P' = (4,1)
```

Titik `P` yang semula berada di `(1, 2)` digeser `3` satuan ke kanan dan `1` satuan ke bawah, sehingga menjadi `(4,1)`. Cara membaca contoh ini adalah: koordinat awal ditambah komponen translasi satu per satu. Untuk sumbu `x`, `1 + 3 = 4`. Untuk sumbu `y`, `2 + (-1) = 1`.

Dalam grafika komputer, **translation** penting karena hampir semua objek perlu diposisikan di dalam scene. Objek mungkin didefinisikan di sekitar origin, lalu dipindahkan ke posisi yang diinginkan di dunia atau relatif terhadap kamera. Karena translation hanya mengubah posisi, ia menjadi dasar untuk menyusun adegan: memindahkan karakter, kendaraan, kamera, atau elemen visual lain tanpa mengubah geometri aslinya.

Pada rendering pipeline, transformasi seperti translation biasanya diterapkan pada vertex sebelum tahap berikutnya seperti clipping, proyeksi, dan rasterisasi. Artinya, posisi titik-titik objek diupdate terlebih dahulu, lalu pipeline menggunakan posisi baru tersebut untuk menentukan bagaimana objek muncul di layar. Dengan memahami translation, kita bisa melacak bagaimana perubahan koordinat awal memengaruhi hasil akhir rendering.

### Inti yang Harus Ditekankan

- **Translation** menggeser titik atau objek dengan menambahkan offset `(tx, ty)` ke koordinat awal.
- Bentuk, ukuran, dan orientasi objek tidak berubah; yang berubah hanya posisi.
- Contoh `P = (1, 2)` dengan `T = (3,-1)` menghasilkan `P' = (4,1)` karena setiap komponen koordinat ditambahkan satu per satu.
- Dalam pipeline, translation membantu memposisikan objek sebelum tahap proyeksi dan rasterisasi.

### Transisi ke Slide Berikutnya

Jika satu titik dapat dipindahkan dengan offset, maka untuk objek yang terdiri dari banyak titik, kita perlu menerapkan offset yang sama ke semua vertex. Pada slide berikutnya, kita akan melihat bagaimana translation diterapkan pada object dengan vertex `V0, V1, V2`.

---

## Slide 013 - Translation pada Object

### Narasi

Pada slide sebelumnya, **translation** dibahas untuk satu titik koordinat. Sekarang kita naikkan pembahasannya ke level **objek**. Dalam grafika komputer, sebuah objek biasanya tidak hanya terdiri dari satu titik, melainkan dari sekumpulan **vertex** yang membentuk geometri, misalnya segitiga, quad, atau mesh.

Jika sebuah objek memiliki vertex:

```text
V0, V1, V2
```

maka translation dilakukan dengan menambahkan vektor perpindahan `T` ke setiap vertex:

```text
V0' = V0 + T
V1' = V1 + T
V2' = V2 + T
```

Cara membaca rumus ini cukup sederhana. `V0`, `V1`, dan `V2` adalah posisi awal vertex. `T` adalah vektor offset yang menyatakan ke mana objek akan digeser. Sedangkan `V0'`, `V1'`, dan `V2'` adalah posisi baru vertex setelah translation.

Jika `T` berupa vektor 2D, misalnya `T = (tx, ty)`, maka setiap vertex akan bertambah `tx` pada sumbu X dan `ty` pada sumbu Y. Artinya, semua titik berpindah dengan arah dan jarak yang sama.

Hal penting yang harus kita pahami adalah: **translation tidak mengubah bentuk objek**. Jarak antar vertex tetap sama, ukuran objek tetap sama, dan orientasi objek tetap sama. Yang berubah hanya **posisi** objek dalam ruang koordinat.

Dalam konteks rendering pipeline, translation biasanya menjadi bagian dari **transformasi objek** sebelum vertex diproses lebih lanjut. Objek umumnya didefinisikan dalam ruang lokal atau **object space**. Untuk memindahkannya ke posisi yang diinginkan dalam scene, kita terapkan translation pada seluruh vertex. Setelah itu, vertex dapat dilanjutkan ke tahap transformasi berikutnya, seperti transformasi dunia, kamera, proyeksi, dan akhirnya **rasterisasi**.

Secara visual, bayangkan sebuah segitiga dengan tiga vertex. Jika kita menerapkan translation ke kanan dan ke atas, seluruh segitiga akan bergeser sebagai satu kesatuan. Tidak ada vertex yang terpisah, tidak ada sisi yang memanjang, dan tidak ada sudut yang berubah. Inilah ciri utama translation: **pergeseran rigid** atau perpindahan kaku.

### Inti yang Harus Ditekankan

- Translation pada objek dilakukan dengan menambahkan vektor `T` yang sama ke setiap vertex.
- Bentuk, ukuran, dan orientasi objek tetap; yang berubah hanya posisinya.
- Dalam rendering pipeline, translation adalah bagian dari transformasi objek sebelum vertex dirasterisasi.

### Transisi ke Slide Berikutnya

Setelah kita memahami bahwa translation hanya menggeser seluruh objek tanpa mengubah bentuknya, langkah berikutnya adalah **scaling**. Pada slide berikutnya, kita akan melihat bagaimana koordinat vertex dikalikan faktor skala, sehingga ukuran objek dapat diperbesar atau diperkecil relatif terhadap origin atau pivot.

---

## Slide 014 - Scaling

### Narasi

Setelah kita membahas **translation**, langkah berikutnya adalah **scaling**, yaitu transformasi yang mengubah ukuran objek. Dalam ruang 2D, scaling bekerja dengan mengalikan koordinat setiap vertex terhadap faktor skala.

```text
x' = sx × x
y' = sy × y
```

Di sini, `sx` adalah **scale X** dan `sy` adalah **scale Y**. Jika sebuah vertex memiliki koordinat `(x, y)`, maka koordinat barunya menjadi `(x', y')`. Artinya, setiap titik pada objek diproses secara individual, tetapi dengan aturan yang sama.

Intuisi visualnya penting: scaling terjadi **relatif terhadap origin atau pivot**. Titik yang berada tepat di origin tidak berpindah, sedangkan titik yang lebih jauh dari origin akan menjauh atau mendekat tergantung nilai skala. Karena itu, posisi objek terhadap origin sangat memengaruhi hasil scaling.

Dalam grafika komputer, scaling termasuk transformasi geometri dasar yang sering muncul di **rendering pipeline**. Biasanya, scaling dilakukan pada tahap transformasi objek sebelum objek dipindahkan ke ruang kamera atau diproyeksikan ke layar. Dengan scaling, kita dapat mengatur ukuran model, memperbesar objek untuk detail, atau mengecilkan objek agar sesuai dengan scene.

Hal yang perlu dipahami mahasiswa sebelum lanjut adalah bahwa scaling tidak hanya sekadar “membesarkan gambar”. Scaling mengubah koordinat numerik, sehingga memengaruhi posisi, ukuran, dan hubungan spasial antar vertex. Jika `sx` dan `sy` berbeda, bentuk objek dapat berubah proporsinya; jika sama, ukuran berubah secara proporsional. Pembedaan detail ini akan kita bahas lebih lanjut pada slide berikutnya.

### Inti yang Harus Ditekankan

- Scaling 2D menggunakan rumus `x' = sx × x` dan `y' = sy × y`.
- `sx` dan `sy` adalah faktor skala pada sumbu X dan sumbu Y.
- Scaling terjadi relatif terhadap **origin** atau **pivot**, sehingga posisi objek terhadap titik acuan memengaruhi hasil transformasi.
- Scaling adalah transformasi dasar dalam pipeline grafika komputer, biasanya dilakukan pada tahap transformasi objek.

### Transisi ke Slide Berikutnya

Sekarang kita sudah memahami bagaimana scaling bekerja pada koordinat. Selanjutnya, kita akan membedakan **uniform scaling** dan **non-uniform scaling**, yaitu kasus ketika `sx = sy` dan ketika `sx ≠ sy`.

---

## Slide 015 - Uniform vs Non-Uniform Scaling

### Narasi

Setelah kita memahami bahwa scaling mengubah koordinat objek melalui faktor `sx` dan `sy`, langkah berikutnya adalah membedakan dua perilaku utama scaling. Pada **uniform scaling**, faktor skala pada sumbu X dan Y sama, yaitu `sx = sy`. Artinya, setiap titik pada objek diperbesar atau diperkecil dengan rasio yang sama, sehingga bentuk dan proporsi objek tetap terjaga. Jika sebuah objek diskalakan dengan `sx = sy = 2.0`, hasilnya akan menjadi dua kali lebih besar, tetapi bentuk aslinya tidak berubah.

Sebaliknya, pada **non-uniform scaling**, faktor skala pada tiap sumbu berbeda, yaitu `sx ≠ sy`. Kondisi ini menyebabkan objek teregang atau tertekuk secara tidak proporsional. Sebagai contoh, jika `sx = 2.0` dan `sy = 0.5`, koordinat X menjadi dua kali lebih besar, sedangkan koordinat Y menjadi setengah dari nilai semula. Akibatnya, objek yang awalnya seimbang dapat berubah menjadi lebih lebar dan lebih pendek.

Secara matematis, kedua kasus ini tetap menggunakan persamaan scaling yang sama:

```text
x' = sx × x
y' = sy × y
```

Perbedaannya terletak pada nilai `sx` dan `sy`. Dalam grafika komputer, pilihan antara uniform dan non-uniform scaling memengaruhi bagaimana objek ditampilkan pada layar. Uniform scaling sering digunakan ketika kita ingin mempertahankan bentuk asli objek, misalnya saat memperbesar model atau menyesuaikan ukuran objek secara konsisten. Non-uniform scaling berguna ketika kita ingin mengubah proporsi objek secara sengaja, misalnya membuat objek tampak lebih lebar, lebih tinggi, atau lebih pipih.

Perlu diingat bahwa scaling tetap terjadi relatif terhadap origin atau pivot. Jika pivot berada di pusat objek, hasil scaling akan tampak simetris terhadap pusat tersebut. Namun, jika pivot berada di titik lain, objek dapat tampak bergeser atau teregang dari posisi tertentu. Karena itu, memahami nilai `sx` dan `sy` saja belum cukup; kita juga perlu memperhatikan posisi pivot agar hasil transformasi sesuai dengan yang diinginkan.

Untuk membaca contoh pada slide, kita cukup membandingkan nilai `sx` dan `sy`. Jika keduanya sama, objek berubah ukuran secara proporsional. Jika keduanya berbeda, proporsi objek berubah. Mahasiswa perlu memahami bahwa scaling bukan hanya mengubah ukuran objek, tetapi juga dapat mengubah bentuk visual objek jika faktor skala antar sumbu tidak sama.

### Inti yang Harus Ditekankan

- **Uniform scaling** terjadi ketika `sx = sy`, sehingga objek berubah ukuran secara proporsional dan bentuk aslinya tetap terjaga.
- **Non-uniform scaling** terjadi ketika `sx ≠ sy`, sehingga objek teregang atau tertekuk berbeda arah dan proporsinya berubah.
- Contoh `sx = 2.0` dan `sy = 0.5` membuat objek menjadi dua kali lebih lebar, tetapi setengah dari tinggi semula.
- Scaling tetap relatif terhadap origin atau pivot, sehingga posisi pivot memengaruhi hasil visual transformasi.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana scaling mengubah ukuran dan proporsi objek, kita lanjut ke transformasi yang mengubah orientasi objek, yaitu rotation. Pada slide berikutnya, kita akan melihat bagaimana sudut `θ` digunakan untuk memutar objek terhadap pivot.

---

## Slide 016 - Rotation

### Narasi

**Rotasi** adalah transformasi yang mengubah **orientasi** suatu objek terhadap **pivot**. Artinya, objek tidak hanya dipindahkan ke posisi lain, tetapi diputar sehingga arah hadap atau kemiringannya berubah. Dalam grafika komputer, hal ini penting karena objek 2D maupun 3D sering perlu diarahkan agar sesuai dengan kamera, lingkungan, atau gerakan animasi.

Untuk melakukan rotasi, parameter utama yang diperlukan adalah sudut `θ`. Sudut ini menentukan seberapa jauh objek diputar dari orientasi awalnya. Semakin besar nilai `θ`, semakin besar perubahan orientasi yang terjadi. Pada tahap ini, kita cukup memahami bahwa `θ` adalah input penting dari operasi rotasi.

Dalam kasus 2D, rotasi biasanya terjadi pada bidang `XY`. Dengan kata lain, koordinat `x` dan `y` titik-titik objek akan berubah relatif terhadap pivot, sementara sumbu `z` tidak menjadi fokus utama. Intuisi visualnya sederhana: sebuah objek pada layar diputar di tempatnya, seolah-olah berputar mengelilingi titik acuan.

Dalam konteks rendering pipeline, rotasi termasuk bagian dari transformasi geometri. Sebelum objek diproyeksikan ke layar dan dirasterisasi, bentuknya dapat diubah posisinya, skalanya, dan orientasinya. Rotasi memungkinkan objek tampak menghadap kamera, berputar dalam animasi, atau tersusun dalam scene dengan arah yang benar.

Sebelum melanjutkan, hal penting yang perlu dipahami adalah bahwa rotasi bukan sekadar mengubah koordinat, tetapi mengubah **orientasi** objek terhadap **pivot** menggunakan sudut `θ`. Pemahaman ini menjadi dasar untuk membahas satuan sudut yang akan digunakan dalam perhitungan rotasi.

### Inti yang Harus Ditekankan

- **Rotasi** mengubah **orientasi** objek terhadap **pivot**, bukan hanya posisinya.
- Parameter utama rotasi adalah sudut `θ`.
- Pada 2D, rotasi umumnya terjadi pada bidang `XY`.
- Rotasi penting dalam transformasi geometri, kamera, animasi, dan penyusunan scene.

### Transisi ke Slide Berikutnya

Setelah kita memahami bahwa rotasi ditentukan oleh sudut `θ`, langkah berikutnya adalah melihat satuan sudut yang umum digunakan, yaitu **degree** dan **radian**, serta mengapa perhitungan trigonometri dalam pemrograman sering memakai radian.

---

## Slide 017 - Degree dan Radian

### Narasi

Sudut adalah parameter penting ketika kita ingin memutar suatu objek. Pada slide sebelumnya, kita sudah melihat bahwa **rotation** membutuhkan `angle θ`. Namun, sebelum `θ` digunakan dalam perhitungan, kita perlu memastikan bahwa satuan sudutnya konsisten.

Dalam grafika komputer, sudut dapat dinyatakan dalam dua bentuk utama:

- `degree`
- `radian`

`Degree` adalah satuan yang lebih intuitif bagi banyak orang karena satu putaran penuh dinyatakan sebagai `360°`. Sementara itu, `radian` adalah satuan yang lebih umum digunakan dalam perhitungan matematis dan pemrograman karena satu putaran penuh dinyatakan sebagai `2π` radian.

Konversi antara keduanya dapat ditulis sebagai berikut:

```text
radian = degree × π / 180
```

Artinya, jika kita memiliki sudut `90°`, maka dalam radian nilainya adalah:

```text
90 × π / 180 = π / 2
```

Begitu juga, `180°` setara dengan `π` radian, dan `360°` setara dengan `2π` radian.

Hal yang perlu kita tekankan adalah bahwa banyak fungsi trigonometri pada pemrograman, seperti `sin`, `cos`, atau `tan`, umumnya mengharapkan sudut dalam **radian**. Jika kita memasukkan sudut dalam derajat tanpa dikonversi terlebih dahulu, hasil perhitungan rotasi dapat menjadi salah.

Karena itu, sebelum kita menggunakan `cos θ` atau `sin θ` dalam rumus rotasi, sudut yang diberikan dalam `degree` sebaiknya dikonversi terlebih dahulu ke `radian`. Langkah ini penting agar transformasi rotasi menghasilkan posisi objek yang benar.

Untuk slide ini, kita cukup memahami bahwa `degree` dan `radian` adalah dua cara menyatakan sudut yang sama, dan konversi ini menjadi langkah persiapan sebelum masuk ke rumus rotasi 2D.

### Inti yang Harus Ditekankan

- Sudut dapat dinyatakan dalam `degree` atau `radian`.
- Konversi dari derajat ke radian adalah `radian = degree × π / 180`.
- Fungsi trigonometri pada pemrograman umumnya menggunakan radian, sehingga sudut dalam derajat harus dikonversi terlebih dahulu.

### Transisi ke Slide Berikutnya

Dengan memahami satuan sudut, kita dapat melanjutkan ke rumus rotasi 2D, di mana `cos θ` dan `sin θ` digunakan untuk menghitung koordinat baru objek setelah diputar.

---

## Slide 018 - Rumus Rotation 2D

### Narasi

Rumus **rotasi 2D** memberi cara menghitung posisi baru sebuah titik setelah diputar sebesar sudut `θ` terhadap titik asal. Jika titik awal adalah `P = (x, y)`, maka titik hasil rotasi adalah `P' = (x', y')`.

```text
x' = x cosθ - y sinθ
y' = x sinθ + y cosθ
```

Secara intuitif, rotasi tidak mengubah panjang vektor dari titik asal ke titik tersebut, tetapi mengubah arah vektor. Nilai `cosθ` dan `sinθ` berfungsi sebagai pembobot komponen `x` dan `y` lama untuk membentuk komponen `x'` dan `y'` baru.

Dalam pemrograman, `θ` biasanya diberikan dalam **radian**, bukan derajat. Karena itu, jika sudut diberikan sebagai 90°, kita perlu mengonversinya terlebih dahulu menjadi `π/2` sebelum dimasukkan ke fungsi `cos` dan `sin`. Hal ini penting karena hasil numerik bisa berbeda jika satuan sudut tidak konsisten.

Contoh pada slide menunjukkan titik `P = (1, 0)` yang diputar sebesar 90°. Karena `cos 90° = 0` dan `sin 90° = 1`, maka:

```text
x' = 1 × 0 - 0 × 1 = 0
y' = 1 × 1 + 0 × 0 = 1
```

Jadi titik awal yang berada di sumbu `x` positif berpindah ke sumbu `y` positif, yaitu `P' ≈ (0, 1)`. Tanda `≈` biasanya muncul karena perhitungan trigonometri pada komputer menggunakan bilangan **floating point**, sehingga hasil seperti `sin(π/2)` dapat menghasilkan nilai yang sangat dekat dengan 1, misalnya `0.9999999999999999`.

Rumus ini penting dalam grafika komputer karena rotasi adalah operasi dasar untuk memutar objek, orientasi kamera, animasi, dan penempatan elemen pada layar. Pada tahap awal, kita bisa menghitung rotasi titik per titik menggunakan rumus ini. Namun ketika sebuah objek memiliki banyak titik, atau ketika rotasi digabung dengan transformasi lain, perhitungan langsung menjadi kurang praktis.

Sebelum lanjut, mahasiswa perlu memahami tiga hal: rumus ini berpusat pada **titik asal**, sudut harus konsisten satuannya, dan hasil rotasi tetap mempertahankan jarak titik terhadap titik asal. Pemahaman ini akan menjadi dasar ketika nanti transformasi dinyatakan dalam bentuk yang lebih ringkas dan efisien.

### Inti yang Harus Ditekankan

- Rumus rotasi 2D mengubah koordinat titik `(x, y)` menjadi `(x', y')` berdasarkan sudut `θ`.
- Rotasi pada rumus ini dilakukan terhadap **titik asal** `(0, 0)`.
- Sudut `θ` pada fungsi trigonometri pemrograman umumnya harus dalam **radian**.
- Contoh `P = (1, 0)` yang diputar 90° menghasilkan `P' ≈ (0, 1)`.
- Rotasi mempertahankan panjang vektor titik terhadap titik asal, tetapi mengubah arah vektor.

### Transisi ke Slide Berikutnya

Jika rotasi, translasi, dan scaling masih dihitung satu per satu, rumusnya bisa menjadi sulit dikelola, terutama ketika banyak transformasi dilakukan berurutan. Karena itu, pada slide berikutnya kita akan melihat mengapa representasi **matriks** menjadi solusi yang lebih rapi dan lebih sesuai untuk dikirim ke GPU.

---

## Slide 019 - Masalah Jika Tanpa Matrix

### Narasi

Setelah kita melihat rumus rotasi 2D, secara matematis memang kita bisa menghitung setiap transformasi satu per satu. Translation cukup menambahkan offset, scaling cukup mengalikan koordinat, dan rotation cukup memakai rumus `x'` dan `y'`. Untuk satu titik atau satu objek sederhana, cara itu masih bisa dilakukan.

Namun dalam grafika komputer, kita jarang hanya melakukan satu transformasi. Sebuah objek biasanya perlu dipindahkan, diubah skalanya, diputar, lalu diposisikan relatif terhadap kamera, dan akhirnya diproyeksikan ke layar. Jika semua langkah itu ditulis sebagai rumus terpisah, kode akan cepat menjadi sulit dikelola.

Masalahnya bukan hanya panjang rumus. Urutan transformasi sangat menentukan hasil akhir. Misalnya, memutar objek lalu menerjemahkannya bisa menghasilkan posisi yang berbeda dengan menerjemahkan lalu memutar. Jika transformasi disimpan sebagai operasi terpisah, kita harus selalu melacak urutan eksekusi secara manual.

Masalah lain muncul saat data dikirim ke GPU. GPU lebih efisien bekerja dengan data yang kompak dan seragam. Transformasi yang sudah dikemas ke dalam **matrix** dapat dikirim sebagai satu blok nilai, lalu dipakai berulang kali oleh shader untuk mengubah banyak titik vertex.

Karena itu, solusi yang kita gunakan dalam grafika komputer adalah **Matrix**. Matrix memungkinkan kita menggabungkan translation, scaling, dan rotation ke dalam representasi yang konsisten, mudah dikomposisikan, dan mudah dikirim ke pipeline rendering.

### Inti yang Harus Ditekankan

- Tanpa matrix, transformasi masih bisa dihitung satu per satu, tetapi sulit dikelola saat jumlahnya banyak.
- Urutan transformasi memengaruhi hasil akhir, sehingga perlu representasi yang menjaga komposisi secara konsisten.
- Matrix penting karena memudahkan pengiriman transformasi ke GPU dan penggunaan berulang di rendering pipeline.
- Matrix bukan sekadar rumus tambahan, tetapi struktur data utama untuk transformasi koordinat.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan melihat apa sebenarnya matrix itu, bagaimana bentuknya, dan mengapa notasi `P' = M × P` menjadi cara dasar untuk mentransformasi vector dalam grafika komputer.

---

## Slide 020 - Apa Itu Matrix?

### Narasi

Setelah kita melihat bahwa transformasi satu per satu menjadi sulit ketika jumlahnya banyak, langkah berikutnya adalah memahami alat yang menyatukan operasi tersebut: **matrix**.

Secara sederhana, **matrix** adalah susunan angka yang tersusun dalam **baris** dan **kolom**. Pada slide ini kita melihat contoh paling dasar, yaitu matrix `2×2`:

```text
[a b]
[c d]
```

Angka-angka di dalamnya bukan sekadar nilai acak. Dalam grafika komputer, matrix berfungsi sebagai **representasi ringkas dari sebuah transformasi**. Artinya, aturan untuk mengubah posisi titik atau objek dapat dikodekan ke dalam susunan angka tersebut.

Dalam konteks grafika, hubungan utamanya ditulis sebagai:

```text
P' = M × P
```

Di sini, `P` adalah titik atau vektor posisi awal, `M` adalah matrix transformasi, dan `P'` adalah hasil transformasi. Cara membacanya adalah: matrix `M` bekerja pada vektor `P` untuk menghasilkan koordinat baru `P'`. Jadi, matrix bukan hanya kumpulan angka, melainkan **aturan transformasi** yang mengubah posisi objek.

Pentingnya konsep ini dalam grafika komputer terletak pada kemampuannya menyederhanakan proses rendering. GPU sangat efisien dalam melakukan operasi matrix terhadap banyak titik sekaligus. Karena itu, ketika kita ingin memproses banyak objek atau banyak vertex, matrix menjadi bahasa bersama antara CPU, shader, dan pipeline rendering.

Sebelum lanjut, yang perlu dipahami adalah bahwa matrix adalah **wadah transformasi**, bukan sekadar tabel angka. Kita belum perlu menghitung detail perkalian matrix di sini; yang utama adalah memahami bahwa `M × P` adalah cara ringkas untuk menyatakan bahwa sebuah titik telah ditransformasikan.

### Inti yang Harus Ditekankan

- **Matrix** adalah susunan angka dalam **baris** dan **kolom**, misalnya matrix `2×2`:

```text
[a b]
[c d]
```

- Dalam grafika komputer, matrix digunakan untuk merepresentasikan transformasi:

```text
P' = M × P
```

- Matrix penting karena membuat transformasi menjadi **ringkas**, **konsisten**, dan **efisien** untuk diproses oleh GPU dalam pipeline rendering.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana titik 2D ditulis sebagai `vector` dan bagaimana matrix `2×2` dapat merepresentasikan transformasi seperti `scaling` dan `rotation` secara langsung.

---

## Slide 021 - Vector dan Matrix

### Narasi

Dalam grafika komputer, objek visual pada akhirnya sering diwakili oleh titik-titik koordinat. Untuk titik 2D, kita menuliskannya sebagai **vector** kolom:

```text
P =
[x]
[y]
```

Penulisan ini penting karena `x` dan `y` bukan sekadar dua angka terpisah, melainkan satu kesatuan posisi titik dalam ruang 2D. Dalam konteks grafika, titik seperti ini biasanya mewakili **vertex** dari bentuk geometri, misalnya sudut segitiga, poligon, atau mesh sederhana.

Selanjutnya, kita hubungkan vector ini dengan konsep matrix yang sudah kita lihat sebelumnya. Jika matrix adalah susunan angka yang dapat berfungsi sebagai operator, maka transformasi linear dapat ditulis sebagai:

```text
P' = M × P
```

Artinya, matrix `M` bekerja pada vector `P` dan menghasilkan vector baru `P'`. Secara intuitif, matrix mengubah posisi titik: ia dapat mengubah panjang koordinat, mengubah arah koordinat, atau melakukan kombinasi keduanya. Yang perlu kita perhatikan adalah urutan penulisan: matrix berada di sebelah kiri, vector berada di sebelah kanan, karena kita menggunakan representasi **column vector**.

Cara penulisan ini sangat berguna dalam grafika komputer karena transformasi menjadi lebih ringkas dan konsisten. Daripada menulis rumus terpisah untuk setiap titik, kita cukup mendefinisikan satu matrix transformasi dan menerapkannya ke banyak titik. Dalam **rendering pipeline**, langkah seperti ini terjadi pada tahap pemrosesan geometri, di mana posisi vertex diubah sebelum objek dirasterisasi ke layar.

Pada slide ini, kita cukup memahami bahwa **scaling** dan **rotation** pada 2D dapat direpresentasikan langsung menggunakan matrix `2×2`. Intuisinya, scaling mengubah ukuran koordinat, sedangkan rotation mengubah orientasi titik terhadap sumbu. Detail bentuk matrix scaling-nya akan kita bahas lebih lanjut pada slide berikutnya.

### Inti yang Harus Ditekankan

- Titik 2D direpresentasikan sebagai **vector** kolom:

```text
P =
[x]
[y]
```

- Transformasi linear ditulis sebagai:

```text
P' = M × P
```

- Matrix `M` berfungsi sebagai operator yang mengubah posisi vector `P` menjadi vector baru `P'`.
- Untuk transformasi linear 2D seperti **scaling** dan **rotation**, matrix `2×2` sudah cukup untuk merepresentasikan operasinya.

### Transisi ke Slide Berikutnya

Setelah kita memahami bahwa titik adalah vector dan matrix adalah operator transformasi, langkah berikutnya adalah melihat bentuk matrix secara eksplisit. Kita akan mulai dari **scaling matrix 2×2**, yaitu matrix yang mengubah ukuran titik atau objek pada sumbu `x` dan `y`.

---

## Slide 022 - Scaling Matrix 2×2

### Narasi

Setelah pada slide sebelumnya kita menyatakan titik 2D sebagai vektor kolom dan transformasi linear sebagai perkalian matrix, sekarang kita melihat kasus paling dasar: **scaling** atau penskalaan.

```text
S =
[sx  0 ]
[ 0 sy ]
```

Matrix ini disebut **scaling matrix 2×2** karena dua elemen diagonal, `sx` dan `sy`, menentukan seberapa besar sumbu `x` dan sumbu `y` diperbesar atau diperkecil. Elemen di luar diagonal bernilai nol, artinya koordinat `x` tidak dicampur dengan `y` dan sebaliknya. Dengan kata lain, matrix ini tidak melakukan rotasi, shear, atau pencampuran sumbu.

Jika titik `P = [x; y]` dikalikan dengan `S`, hasilnya adalah `P' = S × P`. Secara koordinat, operasi ini menjadi `P' = [sx × x; sy × y]`. Jadi, nilai `sx` hanya memengaruhi sumbu `x`, sedangkan `sy` hanya memengaruhi sumbu `y`.

Kita bisa membaca efeknya secara visual: jika `sx` dan `sy` sama, objek mengalami **uniform scaling** sehingga bentuknya tetap proporsional. Jika keduanya berbeda, objek mengalami **non-uniform scaling**, sehingga bisa memanjang di satu arah dan menyusut di arah lain. Nilai lebih dari 1 memperbesar, nilai antara 0 dan 1 memperkecil, dan nilai negatif akan membalik objek terhadap sumbu terkait.

Dalam grafika komputer, scaling penting karena hampir semua objek visual perlu disesuaikan ukurannya sebelum dirender: model 3D yang dibuat dalam satuan tertentu, sprite 2D, tekstur, atau elemen antarmuka. Representasi matrix membuat operasi ini konsisten, mudah digabungkan dengan transformasi lain, dan ramah untuk diproses oleh GPU dalam **rendering pipeline**.

Perlu diperhatikan bahwa pada bentuk linear ini, scaling terjadi terhadap **titik asal** atau origin. Artinya, titik `(0,0)` tetap berada di tempat yang sama. Jika suatu saat kita ingin menskalakan objek terhadap titik lain, kita akan membutuhkan tambahan transformasi, tetapi itu bukan fokus pada slide ini.

### Inti yang Harus Ditekankan

- **Scaling matrix 2×2** memiliki bentuk diagonal: `sx` pada sumbu `x` dan `sy` pada sumbu `y`.
- Elemen di luar diagonal bernilai nol, sehingga tidak terjadi pencampuran koordinat.
- Hasil `P' = S × P` adalah `x' = sx × x` dan `y' = sy × y`.
- Jika `sx = sy`, scaling bersifat **uniform**; jika berbeda, scaling bersifat **non-uniform**.
- Pada transformasi linear 2×2, scaling terjadi terhadap **origin** atau titik `(0,0)`.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat matrix 2×2 lain yang juga fundamental, yaitu **rotation matrix**. Jika scaling mengubah ukuran objek, rotasi akan mengubah orientasi objek terhadap sudut `θ`.

---

## Slide 023 - Rotation Matrix 2×2

### Narasi

Setelah kita melihat **scaling matrix** yang memperbesar atau memperkecil objek, langkah berikutnya adalah **rotasi**. Dalam grafika komputer, rotasi sangat sering muncul karena kita perlu memutar objek, kamera, arah cahaya, atau normal permukaan sebelum objek digambar ke layar.

Untuk rotasi 2D, kita menggunakan matriks rotasi 2×2 berikut:

```text
R =
[ cosθ  -sinθ ]
[ sinθ   cosθ ]
```

Maka titik atau vektor posisi `P` yang semula berada pada koordinat tertentu akan menjadi `P'` setelah dirotasi:

```text
P' = R × P
```

Secara matematis, jika `P` adalah vektor kolom `(x, y)`, hasil perkalian matriks ini menghasilkan:

```text
x' = x cosθ - y sinθ
y' = x sinθ + y cosθ
```

Artinya, koordinat baru tidak hanya bergantung pada nilai `x`, tetapi juga pada nilai `y`. Inilah yang membuat titik bergerak melingkar di sekitar titik asal, bukan sekadar digeser atau diperbesar.

Secara visual, kita bisa membayangkan sebuah titik pada sumbu `x` yang diputar sebesar `θ`. Nilai `cosθ` menentukan seberapa besar komponen sumbu `x` yang tetap tersisa, sedangkan `sinθ` menentukan seberapa banyak titik tersebut berpindah ke arah sumbu `y`. Tanda negatif pada `-sinθ` penting agar arah rotasi konsisten dan bentuk objek tidak terdistorsi.

Hal penting yang perlu dipahami adalah **rotasi dengan matriks 2×2 ini berpusat di titik asal**, yaitu `(0, 0)`. Matriks ini juga menjaga panjang vektor dan sudut antar vektor, sehingga objek yang dirotasi tidak berubah bentuk. Ini berbeda dengan scaling, yang mengubah ukuran.

Dalam konteks rendering pipeline, rotasi biasanya terjadi pada tahap transformasi geometri, misalnya saat vertex shader memproses koordinat vertex sebelum rasterisasi. Di sistem seperti WebGL atau GPU, matriks rotasi sering menjadi bagian dari **model matrix** atau **model-view matrix**, yang mengubah objek dari koordinat lokal ke koordinat dunia atau koordinat kamera.

Sebelum lanjut, pastikan kita memahami bahwa `θ` adalah sudut rotasi, `R` adalah matriks rotasi, dan `P'` adalah hasil transformasi. Karena matriks 2×2 bersifat linear, ia sangat cocok untuk operasi seperti rotasi dan scaling di sekitar titik asal. Namun, untuk memindahkan objek ke posisi lain, kita akan membutuhkan operasi yang sedikit berbeda.

### Inti yang Harus Ditekankan

- **Rotation matrix 2×2** adalah:

  ```text
  R =
  [ cosθ  -sinθ ]
  [ sinθ   cosθ ]
  ```

- Transformasi ditulis sebagai `P' = R × P`, dengan `P` sebagai vektor posisi awal.
- Rotasi ini **berpusat di titik asal** `(0, 0)` dalam koordinat 2D.
- Matriks rotasi **menjaga panjang dan bentuk objek**, sehingga tidak terjadi distorsi seperti pada scaling.
- Nilai `cosθ` dan `sinθ` menentukan bagaimana koordinat `x` dan `y` berubah setelah rotasi.
- Dalam grafika komputer, rotasi penting untuk memutar objek, kamera, cahaya, atau normal sebelum proses rendering.

### Transisi ke Slide Berikutnya

Kita sudah melihat bahwa rotasi dapat dilakukan dengan matriks linear 2×2. Namun, ada satu operasi transformasi yang tidak bisa langsung dimasukkan ke dalam matriks 2×2 dengan cara yang sama, yaitu **translation**. Di slide berikutnya, kita akan membahas mengapa translation berbeda dan bagaimana **homogeneous coordinate** menjadi solusinya.

---

## Slide 024 - Mengapa Translation Berbeda?

### Narasi

Pada slide sebelumnya, kita sudah melihat rotasi 2D yang dapat ditulis sebagai perkalian matrix:

```text
P' = R × P
```

Artinya, titik `P` diproses dengan matrix `R` yang berisi `cosθ` dan `sinθ`. Pola yang sama juga berlaku untuk skala dan shear: semuanya dapat dinyatakan sebagai kombinasi linear dari koordinat awal.

Translation berbeda. Pergerakannya bukan sekadar mengubah arah atau ukuran, tetapi menggeser seluruh titik ke posisi baru:

```text
x' = x + tx
y' = y + ty
```

Di sini muncul penjumlahan `tx` dan `ty`. Nilai ini bersifat konstan terhadap titik yang digeser, bukan hasil perkalian dengan `x` atau `y`. Karena itu, translation tidak dapat ditulis langsung sebagai matrix linear `2×2`.

Jika kita mencoba memakai matrix `2×2`, bentuk umumnya hanya menghasilkan:

```text
x' = a x + b y
y' = c x + d y
```

Tidak ada tempat untuk `+ tx` dan `+ ty`. Dengan kata lain, matrix `2×2` dapat melakukan transformasi linear, tetapi translation adalah transformasi afine.

Secara geometris, transformasi linear memetakan titik asal ke titik asal. Translation justru menggeser titik asal ke posisi lain. Inilah perbedaan mendasar yang membuat translation tidak bisa langsung dimasukkan ke dalam matrix `2×2`.

Masalahnya menjadi lebih nyata ketika kita ingin menyusun transformasi. Misalnya, kita ingin melakukan rotasi lalu translation, atau translation lalu rotasi. Jika translation tidak bisa dimasukkan ke dalam matrix yang sama, prosesnya menjadi tidak seragam dan lebih sulit dioptimalkan oleh GPU.

Karena itulah kita membutuhkan cara untuk "menyembunyikan" penjumlahan translation ke dalam bentuk perkalian matrix. Solusinya adalah **Homogeneous Coordinate**. Dengan representasi ini, titik 2D dapat diperluas sehingga translation dapat ditangani oleh matrix yang lebih besar, dan seluruh transformasi geometri dapat digabungkan dengan cara yang konsisten.

Sebelum masuk ke bentuk matrix-nya, hal yang harus dipahami adalah: **translation berbeda karena bersifat afine, bukan linear**, dan itulah alasan kita perlu memperluas representasi koordinat.

### Inti yang Harus Ditekankan

- Translation 2D menggunakan **penjumlahan** `x + tx` dan `y + ty`, bukan hanya perkalian linear.
- Matrix `2×2` hanya dapat merepresentasikan transformasi linear seperti rotasi, skala, dan shear.
- Translation adalah transformasi **afine**, sehingga tidak dapat langsung ditulis dengan matrix `2×2`.
- **Homogeneous Coordinate** diperkenalkan agar translation dapat digabungkan dengan transformasi lain dalam bentuk matrix.

### Transisi ke Slide Berikutnya

Untuk melihat bagaimana penjumlahan `tx` dan `ty` bisa dimasukkan ke dalam matrix, kita lanjut ke **Homogeneous Coordinate**, yaitu cara memperluas titik 2D menjadi bentuk yang dapat diproses dengan matrix `3×3`.

---

## Slide 025 - Homogeneous Coordinate

### Narasi

Masalah yang kita hadapi sebelumnya adalah **translation** tidak bisa langsung direpresentasikan oleh matriks linear `2×2`. Translation menggunakan penjumlahan, sedangkan matriks linear `2×2` pada dasarnya hanya melakukan operasi perkalian terhadap koordinat titik. Agar translation dapat diperlakukan seperti transformasi lain, kita perlu cara representasi yang lebih umum.

Cara yang digunakan dalam grafika komputer adalah **homogeneous coordinate**. Intinya, kita menambahkan satu komponen tambahan pada koordinat titik. Untuk titik 2D, koordinat biasa:

```text
(x, y)
```

dinyatakan ulang menjadi:

```text
(x, y, 1)
```

Komponen terakhir ini biasanya disebut `w`, dan untuk titik biasa kita set `w = 1`. Dengan penulisan ini, titik 2D tidak lagi dianggap sebagai vektor dua dimensi, melainkan sebagai vektor tiga dimensi dalam representasi homogeneous.

Perlu diperhatikan bahwa `(x, y, 1)` bukan berarti titik tersebut menjadi titik 3D di ruang. Ia tetap merepresentasikan titik 2D, tetapi dengan bentuk yang memungkinkan transformasi affine, termasuk translation, dinyatakan sebagai perkalian matriks.

Keuntungan utama dari representasi ini adalah kita dapat menggunakan matriks `3×3` untuk transformasi 2D. Matriks `3×3` memiliki ruang tambahan yang memungkinkan komponen translation dimasukkan ke dalam matriks. Dengan begitu, translation tidak lagi terpisah dari transformasi lain seperti rotasi, scaling, atau shearing.

Prinsip yang sama berlaku untuk 3D. Titik 3D:

```text
(x, y, z)
```

dinyatakan menjadi:

```text
(x, y, z, 1)
```

sehingga transformasi 3D dapat direpresentasikan dengan matriks `4×4`. Dalam rendering pipeline, matriks `4×4` sangat umum digunakan karena model, view, dan projection matrix biasanya bekerja dalam ruang homogeneous.

Dengan homogeneous coordinate, transformasi geometri menjadi lebih seragam. Kita dapat menggabungkan beberapa transformasi melalui perkalian matriks, misalnya model transform, view transform, dan projection transform. Hal ini penting karena GPU dan pipeline rendering modern sangat bergantung pada representasi matriks yang konsisten.

Sebelum lanjut, hal penting yang harus dipahami adalah: **homogeneous coordinate bukan mengubah posisi titik secara geometris**, tetapi mengubah cara representasinya agar transformasi affine dapat ditangani dengan matriks.

### Inti yang Harus Ditekankan

- **Translation** tidak dapat direpresentasikan langsung oleh matriks linear `2×2` karena menggunakan penjumlahan.
- **Homogeneous coordinate** menambahkan komponen `1` pada koordinat titik:
  - 2D: `(x, y)` menjadi `(x, y, 1)`
  - 3D: `(x, y, z)` menjadi `(x, y, z, 1)`
- Representasi ini memungkinkan transformasi 2D menggunakan matriks `3×3` dan transformasi 3D menggunakan matriks `4×4`.
- Homogeneous coordinate membuat transformasi affine, termasuk translation, dapat digabung dengan transformasi lain melalui perkalian matriks.

### Transisi ke Slide Berikutnya

Setelah titik dinyatakan dalam bentuk homogeneous, langkah berikutnya adalah melihat bagaimana matriks translation 2D dibentuk. Pada slide berikutnya, kita akan melihat bentuk matriks `T` dan bagaimana `P' = T × P` memungkinkan translation digabungkan dengan transformasi lain.

---

## Slide 026 - Translation Matrix 2D

### Narasi

Pada slide sebelumnya, kita sudah menyatakan titik 2D dalam **homogeneous coordinate** sebagai `(x, y, 1)`. Dengan representasi itu, operasi **translation** yang pada awalnya hanya penjumlahan koordinat dapat ditulis sebagai perkalian matriks.

Matriks translation 2D adalah:

```text
T =
[1 0 tx]
[0 1 ty]
[0 0  1]
```

Di sini, `tx` dan `ty` adalah jarak geser pada sumbu `x` dan `y`. Bagian kiri atas berupa matriks identitas, sedangkan kolom ketiga menyimpan nilai translasi.

Jika titik `P` ditulis sebagai vektor kolom:

```text
P =
[x]
[y]
[1]
```

maka hasil transformasinya adalah:

```text
P' = T × P
```

Secara eksplisit, perkalian tersebut menghasilkan:

```text
x' = x + tx
y' = y + ty
w' = 1
```

Artinya, titik hanya bergeser tanpa mengubah bentuk, ukuran, atau orientasi objek.

Poin penting di sini adalah translation kini menjadi operasi matriks 3×3. Dalam grafika komputer, hal ini sangat berguna karena transformasi geometri sering perlu digabung: misalnya menggeser objek, lalu membesarkan, lalu memutar. Jika translation masih berupa penjumlahan terpisah, proses komposisi menjadi tidak seragam. Dengan homogeneous coordinate, semua transformasi affine 2D dapat direpresentasikan sebagai matriks dan dikalikan secara berurutan.

Dalam konteks rendering pipeline, matriks seperti `T` biasanya berperan sebagai bagian dari **model transform** atau **world transform**, yaitu transformasi yang memindahkan geometri dari ruang lokal objek ke ruang dunia sebelum proses rasterisasi. GPU juga lebih mudah memproses transformasi berbasis matriks karena operasi tersebut dapat dieksekusi secara konsisten pada pipeline transformasi atau vertex shader.

Yang perlu dipahami mahasiswa sebelum lanjut adalah: translation 2D bukan sekadar "menambah `tx` dan `ty`", tetapi juga cara menuliskannya sebagai matriks agar kompatibel dengan transformasi lain. Perhatikan juga bahwa urutan perkalian matriks akan memengaruhi hasil akhir, meskipun pada slide ini kita baru fokus pada satu operasi translation.

### Inti yang Harus Ditekankan

- **Translation 2D** adalah pergeseran titik sebesar `tx` pada sumbu `x` dan `ty` pada sumbu `y`.
- Dengan **homogeneous coordinate**, translation dapat ditulis sebagai matriks 3×3: `T = [1 0 tx; 0 1 ty; 0 0 1]`.
- Hasil transformasi adalah `P' = T × P`, yang secara koordinat menghasilkan `x' = x + tx` dan `y' = y + ty`.
- Representasi matriks membuat translation dapat **dikomposisikan** dengan transformasi lain seperti scaling dan rotation.
- Dalam pipeline grafika, matriks translation berperan dalam memindahkan objek pada ruang geometri sebelum rendering.

### Transisi ke Slide Berikutnya

Setelah translation dapat dinyatakan sebagai matriks 3×3, langkah berikutnya adalah melihat transformasi lain yang juga dapat dimasukkan ke format yang sama. Pada slide berikutnya, kita akan membahas **Scaling Matrix 3×3**, yaitu matriks yang digunakan untuk memperbesar atau memperkecil objek 2D.

---

## Slide 027 - Scaling Matrix 3×3

### Narasi

Kita lanjut dari bentuk matriks 3×3 yang sudah dipakai untuk translation. Pada scaling 2D, matriksnya ditulis sebagai:

```text
S =
[sx  0  0]
[ 0 sy  0]
[ 0  0  1]
```

Matriks ini bekerja pada titik dalam **homogeneous coordinate**. Jika titik awal adalah `P = [x, y, 1]^T`, maka hasil transformasi adalah:

```text
P' = S × P
   = [sx·x, sy·y, 1]^T
```

Artinya, koordinat `x` dikalikan `sx`, koordinat `y` dikalikan `sy`, sedangkan komponen homogen tetap `1`. Nilai `sx` dan `sy` adalah faktor skala pada sumbu `x` dan sumbu `y`.

Yang perlu diperhatikan adalah posisi elemen matriks. Elemen diagonal `sx` dan `sy` menentukan skala, sementara elemen nol di luar diagonal menunjukkan bahwa sumbu `x` dan sumbu `y` tidak saling tercampur. Dengan kata lain, scaling murni hanya mengubah ukuran objek, bukan memiringkan atau memutar objek.

Bentuk 3×3 penting karena scaling menjadi kompatibel dengan translation 2D yang juga menggunakan matriks 3×3. Dalam pipeline rendering, transformasi seperti ini biasanya berada pada tahap **model transform**, yaitu tahap di mana geometri objek dalam object space diubah sebelum dikirim ke tahap rasterisasi. Karena bentuknya seragam, scaling dapat digabung dengan translation atau transformasi lain melalui perkalian matriks.

Sebagai pemahaman awal, scaling pada bentuk ini dilakukan terhadap **origin** atau titik `(0, 0)`. Jika `sx = sy`, objek mengalami **uniform scaling**; jika `sx ≠ sy`, objek mengalami **non-uniform scaling** dan proporsi bentuknya dapat berubah.

### Inti yang Harus Ditekankan

- Matriks scaling 2D dalam homogeneous coordinate berbentuk 3×3 dengan faktor skala `sx` dan `sy` pada elemen diagonal.
- `sx` dan `sy` mengalikan koordinat `x` dan `y`; elemen `1` pada baris ketiga menjaga koordinat homogen tetap konsisten.
- Bentuk 3×3 membuat scaling dapat dikomposisikan dengan translation 2D, sehingga cocok untuk pipeline transformasi objek.
- Scaling pada matriks ini berpusat pada origin; `sx = sy` menghasilkan uniform scaling, sedangkan `sx ≠ sy` menghasilkan non-uniform scaling.

### Transisi ke Slide Berikutnya

Setelah translation dan scaling, bentuk matriks 3×3 juga akan kita gunakan untuk rotation. Dengan demikian, transformasi dasar 2D mulai memiliki representasi yang seragam dan mudah digabungkan dalam pipeline rendering.

---

## Slide 028 - Rotation Matrix 3×3

### Narasi

Kita lanjut ke **rotasi** dalam bentuk matrix 3×3. Pada slide ini, rotasi direpresentasikan sebagai:

```text
R =
[ cosθ  -sinθ  0]
[ sinθ   cosθ  0]
[   0      0   1]
```

Matrix `R` ini bekerja pada koordinat 3D, tetapi bagian yang aktif adalah bidang `x-y`. Elemen pada baris dan kolom ketiga menunjukkan bahwa nilai `z` tidak berubah: titik yang diputar tetap berada pada bidang yang sama. Dengan kata lain, matrix ini melakukan rotasi pada bidang `x-y` sambil mempertahankan koordinat `z`. Kita dapat memahaminya sebagai rotasi terhadap sumbu `z`.

Cara membaca matrix ini paling mudah dilakukan dengan melihat efeknya pada sumbu. Titik `(1, 0, 0)` akan berubah menjadi `(cosθ, sinθ, 0)`, sedangkan titik `(0, 1, 0)` akan berubah menjadi `(-sinθ, cosθ, 0)`. Artinya, sumbu `x` dan sumbu `y` ikut berotasi sebesar `θ`. Nilai `cosθ` dan `sinθ` menentukan seberapa besar komponen koordinat lama yang dipindahkan ke koordinat baru.

Hal penting yang perlu dipahami adalah rotasi tidak mengubah panjang objek. Jika sebuah titik berjarak `r` dari pusat rotasi, jaraknya tetap `r` setelah rotasi. Matrix rotasi hanya mengubah orientasi, bukan ukuran. Ini berbeda dengan scaling, yang mengubah panjang sumbu. Karena itu, rotasi sangat penting untuk memutar objek, orientasi kamera, atau arah model dalam scene tanpa mengubah bentuk aslinya.

Dalam konteks grafika komputer, matrix rotasi seperti ini menjadi bagian dari **transformasi vertex**. Sebelum rasterisasi, posisi titik-titik objek biasanya diubah dari koordinat lokal ke koordinat dunia atau koordinat kamera. Matrix rotasi membantu menentukan orientasi objek di ruang 3D. Karena bentuknya berupa matrix, proses ini mudah diotomasi dan dapat diterapkan secara massal pada banyak vertex, termasuk oleh GPU.

Keuntungan utama dari representasi matrix adalah keseragaman. Setelah scaling dan rotasi, kita mulai melihat bahwa transformasi dasar dapat ditulis dalam bentuk matrix yang konsisten. Keseragaman ini penting karena nanti transformasi dapat digabungkan, disimpan, dan diproses dalam pipeline rendering yang lebih rapi.

### Inti yang Harus Ditekankan

- `R` adalah matrix rotasi 3×3 yang memutar titik pada bidang `x-y` dan mempertahankan koordinat `z`.
- `cosθ` dan `sinθ` menentukan orientasi baru; rotasi tidak mengubah panjang atau ukuran objek.
- Bentuk matrix yang seragam membuat rotasi dapat diproses bersama transformasi lain dalam pipeline rendering.

### Transisi ke Slide Berikutnya

Setelah kita punya matrix scaling dan rotasi, langkah berikutnya adalah bagaimana matrix-matrix ini dikalikan dan digabungkan menjadi satu transformasi.

---

## Slide 029 - Matrix Multiplication

### Narasi

Setelah kita memiliki matriks untuk transformasi dasar, langkah berikutnya adalah memahami bagaimana beberapa transformasi dapat digabungkan menjadi satu operasi. Dalam grafika komputer, transformasi seperti **translasi**, **rotasi**, dan **skala** biasanya direpresentasikan sebagai matriks. Karena bentuknya seragam, transformasi yang berbeda dapat dikomposisi melalui **perkalian matriks**.

```text
M = A × B × C
```

Pada persamaan ini, `A`, `B`, dan `C` adalah matriks transformasi. Hasil perkaliannya adalah matriks baru `M`, yang berisi efek gabungan dari seluruh transformasi tersebut. Dengan kata lain, `M` bukan sekadar hasil perhitungan matematis, tetapi matriks yang tetap dapat digunakan untuk mengubah koordinat objek.

Setelah matriks gabungan terbentuk, kita tidak perlu lagi menerapkan setiap transformasi satu per satu ke setiap titik. Cukup gunakan satu matriks untuk seluruh vertex:

```text
P' = M × P
```

Di sini, `P` adalah koordinat awal sebuah vertex, sedangkan `P'` adalah koordinat vertex setelah seluruh transformasi diterapkan. Cara membaca persamaan ini penting: kita tidak sedang mengalikan angka biasa, tetapi menerapkan transformasi geometri terhadap posisi titik dalam ruang.

Pendekatan ini sangat penting dalam grafika komputer karena objek 3D biasanya terdiri dari banyak vertex. Jika setiap transformasi dilakukan secara terpisah, maka setiap vertex harus melewati beberapa operasi transformasi. Dengan matriks gabungan, kita menghitung kombinasi transformasi sekali, lalu menerapkan satu matriks ke semua vertex.

```text
M = A × B × C
P' = M × P
```

Secara pipeline rendering, langkah ini berada pada tahap transformasi vertex. Matriks gabungan digunakan untuk memetakan koordinat objek ke koordinat yang lebih sesuai untuk proses berikutnya, seperti proyeksi dan rasterisasi. Dalam implementasi GPU, matriks seperti ini sering dikirim ke vertex shader, sehingga semua vertex dapat diproses secara paralel dengan matriks yang sama.

Efisiensi utamanya terletak pada pengurangan jumlah operasi per vertex. Misalkan sebuah objek memiliki banyak titik dan kita ingin menerapkan tiga transformasi. Jika dilakukan terpisah, setiap vertex harus diproses tiga kali. Jika digabungkan, kita cukup membentuk `M` sekali, lalu melakukan satu kali transformasi untuk setiap vertex. Untuk model dengan ribuan atau bahkan jutaan vertex, penghematan komputasi ini menjadi sangat signifikan.

Yang perlu dipahami sebelum lanjut adalah bahwa matriks transformasi dapat digabungkan, tetapi urutan penulisan `A × B × C` tidak bisa dianggap bebas. Urutan transformasi akan memengaruhi hasil akhir, dan hal ini akan kita bahas lebih lanjut pada slide berikutnya.

### Inti yang Harus Ditekankan

- Transformasi dapat digabungkan menjadi satu matriks gabungan: `M = A × B × C`.
- Setelah `M` terbentuk, setiap vertex cukup dihitung sekali: `P' = M × P`.
- Pendekatan ini lebih efisien karena mengurangi jumlah operasi transformasi per vertex.
- Matriks gabungan sangat relevan dalam rendering pipeline, terutama pada tahap transformasi vertex.
- Urutan perkalian matriks penting dan akan dibahas pada slide berikutnya.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat mengapa urutan transformasi tidak bisa ditukar begitu saja, karena perkalian matriks tidak bersifat komutatif.

---

## Slide 030 - Urutan Transformasi Penting

### Narasi

Setelah kita menggabungkan beberapa transformasi menjadi satu matrix, ada satu hal yang sering membuat mahasiswa salah: **perkalian matrix tidak komutatif**. Artinya, secara umum:

```text
A × B ≠ B × A
```

Dalam grafika komputer, ini bukan sekadar sifat aljabar. Ini berarti urutan operasi transformasi menentukan hasil akhir posisi, orientasi, dan bentuk objek.

Intuisi visualnya begini. Jika kita melakukan **Scale → Rotate**, objek terlebih dahulu diubah ukurannya, lalu hasil yang sudah diskalakan itu diputar. Sebaliknya, jika kita melakukan **Rotate → Scale**, objek diputar dulu, lalu penskalaan dilakukan terhadap objek yang orientasinya sudah berubah. Untuk skala non-uniform, perbedaannya bisa sangat terlihat: objek bisa tampak memanjang ke arah yang salah.

Hal ini penting karena dalam rendering pipeline, transformasi model biasanya digabung menjadi satu matrix, misalnya `M`, lalu diterapkan ke seluruh vertex:

```text
P' = M × P
```

Jika urutan penyusunan `M` salah, vertex akan masuk ke tahap clipping, projection, dan rasterization dengan koordinat yang sudah keliru. Akibatnya, objek bisa bergeser, berputar tidak sesuai, atau terdistorsi meskipun parameter scale, rotate, dan translate yang kita masukkan tampak benar.

Cara membaca slide ini adalah memperhatikan panah urutan. `Scale → Rotate` berarti operasi scale terjadi lebih dulu pada vertex, kemudian rotate. Dalam notasi matrix untuk column vector, jika kita menulis `M = R × S`, maka `S` yang berada di kanan adalah transformasi yang diterapkan lebih dulu. Jadi, urutan visual dan urutan perkalian matrix harus kita pahami bersama.

Sebelum lanjut, yang perlu kita pegang adalah: **jangan menganggap transformasi bisa ditukar sesuka hati**. Setiap kali kita membangun matrix transformasi, kita harus memutuskan urutan yang sesuai dengan efek yang diinginkan.

### Inti yang Harus Ditekankan

- **Matrix multiplication tidak komutatif**: `A × B ≠ B × A` secara umum.
- Urutan transformasi menentukan hasil akhir: `Scale → Rotate` dapat berbeda dari `Rotate → Scale`.
- Kesalahan urutan dapat menyebabkan objek terdistorsi, bergeser, atau berorientasi salah sebelum masuk ke tahap rendering berikutnya.
- Dalam `P' = M × P`, matrix yang lebih kanan biasanya diterapkan lebih dulu pada vertex untuk konvensi column vector.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat contoh konkret dua urutan transformasi yang berbeda, yaitu `Scale → Rotate → Translate` dan `Translate → Rotate → Scale`, serta bagaimana hasilnya dapat sangat berbeda pada posisi dan orientasi objek.

---

## Slide 031 - Contoh Transform Order

### Narasi

Pada contoh ini, kita melihat dua urutan transformasi yang menggunakan komponen yang sama: `Scale`, `Rotate`, dan `Translate`. Yang membedakan adalah urutan penerapannya.

```text
Kasus A: Scale → Rotate → Translate
Kasus B: Translate → Rotate → Scale
```

Secara visual, urutan ini menentukan bagaimana objek diproses dari koordinat lokalnya menuju posisi akhir di dunia. Pada **Kasus A**, objek terlebih dahulu diubah ukurannya, kemudian diputar, dan akhirnya dipindahkan. Artinya, rotasi dan translasi bekerja pada objek yang sudah memiliki ukuran tertentu, tetapi posisi akhirnya terutama ditentukan oleh vektor translasi.

Pada **Kasus B**, objek dipindahkan lebih dulu, lalu diputar, dan terakhir diubah ukurannya. Karena translasi terjadi sebelum rotasi dan skala, posisi objek tidak lagi hanya mengikuti vektor translasi asli. Posisi tersebut ikut diputar dan ikut diskalakan relatif terhadap origin. Akibatnya, objek dapat berakhir di tempat yang jauh berbeda dari Kasus A.

Perbedaan ini penting karena dalam rendering pipeline, transformasi model biasanya diterapkan pada vertex sebelum objek dikirim ke tahap clipping, rasterization, dan fragment shading. Jika urutan salah, objek bisa berada di posisi yang salah, berorientasi tidak sesuai, atau ukurannya tidak konsisten. Untuk skala non-uniform, efeknya bisa lebih terlihat karena bentuk objek dapat terdistorsi tergantung pada orientasi saat `Scale` diterapkan.

Intuisi yang perlu kita pegang adalah: transformasi bukan sekadar daftar operasi, melainkan urutan yang menentukan hasil akhir. `Scale`, `Rotate`, dan `Translate` masing-masing memiliki pusat atau efek yang berbeda; `Translate` menggeser posisi, `Rotate` mengubah orientasi, dan `Scale` mengubah ukuran relatif terhadap titik acuan.

Sebelum lanjut, mahasiswa perlu memahami bahwa memilih urutan transformasi adalah keputusan desain. Dalam praktik, kita biasanya menggunakan satu konvensi yang konsisten, misalnya model matrix yang menggabungkan translation, rotation, dan scaling dengan urutan tertentu.

### Inti yang Harus Ditekankan

- `Scale`, `Rotate`, dan `Translate` tidak dapat dipertukarkan sembarangan karena matrix multiplication tidak komutatif.
- Urutan transformasi menentukan **posisi akhir**, **orientasi akhir**, dan **ukuran akhir** objek.
- `Translate` yang dilakukan lebih awal dapat ikut dipengaruhi oleh `Rotate` dan `Scale` yang datang setelahnya.
- Dalam pipeline, urutan ini memengaruhi hasil vertex sebelum tahap rendering berikutnya.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana transformasi-transformasi ini digabungkan menjadi satu **Model Matrix**, serta mengapa konvensi penulisan dan penerapannya harus digunakan secara konsisten.

---

## Slide 032 - Transform Composition

### Narasi

Setelah kita melihat bahwa urutan transformasi dapat menghasilkan posisi dan orientasi objek yang berbeda, langkah berikutnya adalah memahami bagaimana transformasi tersebut digabungkan menjadi satu matriks. Dalam banyak sistem grafika komputer, objek tidak langsung dirender dari koordinat awalnya. Koordinat objek biasanya berada di **local space**, lalu diubah ke **world space** menggunakan **Model Matrix**.

Secara umum, **Model Matrix** dibentuk dari kombinasi transformasi dasar:

```text
Model Matrix
=
Translation
× Rotation
× Scaling
```

Kita bisa membaca formula ini sebagai satu matriks gabungan yang menyimpan informasi posisi, orientasi, dan skala objek. Artinya, alih-alih menerapkan `Translation`, `Rotation`, dan `Scaling` secara terpisah pada setiap titik geometri, kita dapat menggabungkannya terlebih dahulu menjadi satu matriks transformasi.

Hal penting yang perlu dipahami adalah bahwa perkalian matriks umumnya tidak komutatif. Dengan kata lain, `Translation × Rotation × Scaling` tidak selalu menghasilkan matriks yang sama dengan urutan lain. Karena itu, urutan penulisan dan urutan penerapan transformasi bergantung pada **convention** matrix atau library yang digunakan. Ada library yang menggunakan representasi column-major, ada yang row-major, dan ada pula yang menerapkan transformasi dengan aturan perkalian yang berbeda.

Dalam konteks rendering pipeline, **Model Matrix** berperan sebelum tahap view dan projection. Ia memastikan objek berada pada posisi dan orientasi yang benar di dunia sebelum kamera melihat adegan. Jika Model Matrix salah, objek bisa muncul di posisi yang tidak sesuai, berputar ke arah yang salah, atau memiliki skala yang tidak diharapkan.

Oleh karena itu, hal yang paling penting bagi kita adalah menggunakan satu **convention** secara konsisten. Jika dalam satu program kita sudah menentukan bahwa Model Matrix dibangun dengan urutan tertentu, maka semua objek, perhitungan posisi, dan kode rendering harus mengikuti aturan yang sama. Konsistensi ini sangat menentukan agar transformasi geometri, kamera, dan pipeline GPU bekerja secara benar.

### Inti yang Harus Ditekankan

- **Model Matrix** biasanya merupakan komposisi dari `Translation × Rotation × Scaling`.
- Urutan transformasi penting karena perkalian matriks tidak komutatif; urutan yang berbeda dapat menghasilkan posisi, orientasi, atau skala objek yang berbeda.
- Gunakan satu **convention** matrix/library secara konsisten agar transformasi objek tetap benar dalam pipeline rendering.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana transformasi dikomposisikan menjadi satu matriks, kita akan melihat peran **Model Matrix** secara lebih eksplisit: bagaimana ia memetakan **Local Space** ke **World Space** melalui hubungan `worldPosition = ModelMatrix × localPosition`.

---

## Slide 033 - Model Matrix

### Narasi

**Model Matrix** adalah matriks yang bertugas memindahkan objek dari **Local Space** ke **World Space**. Dalam grafika komputer, setiap objek biasanya didefinisikan terlebih dahulu dalam koordinat lokalnya sendiri, misalnya pusat objek berada di `(0, 0, 0)` dan sumbu lokalnya mengikuti bentuk objek.

```text
Local Space
    ↓
World Space
```

Alur ini penting karena objek tidak selalu berada di posisi yang sama di dunia. Sebuah karakter, kendaraan, atau model 3D dapat diposisikan, diputar, dan diskalakan di tempat yang berbeda, tetapi geometri aslinya tetap disimpan dalam ruang lokal.

Secara konseptual, hubungan antara posisi lokal dan posisi dunia dapat ditulis sebagai:

```text
worldPosition =
ModelMatrix × localPosition
```

Di sini, `localPosition` adalah koordinat titik pada objek sebelum dipindahkan ke dunia, sedangkan `worldPosition` adalah koordinat titik yang sama setelah objek ditempatkan di ruang dunia. `ModelMatrix` memuat transformasi model, seperti translasi, rotasi, dan penskalaan, yang telah dibahas pada slide sebelumnya. Penulisan `ModelMatrix × localPosition` mengikuti konvensi vektor kolom; yang penting adalah kita menggunakan konvensi yang sama secara konsisten.

Dalam pipeline rendering, Model Matrix berada di tahap awal transformasi geometri. Setelah titik objek diubah ke World Space, posisi tersebut dapat diteruskan ke tahap kamera dan proyeksi. Dengan kata lain, Model Matrix membantu GPU memahami di mana objek berada sebelum proses clipping, rasterisasi, dan penentuan piksel dilakukan.

Yang perlu dipahami mahasiswa adalah bahwa Model Matrix tidak mengubah bentuk objek secara permanen dalam data aslinya. Ia hanya memberikan representasi posisi objek di dunia pada frame tertentu. Selama objek bergerak, Model Matrix dapat diperbarui setiap frame tanpa mengubah geometri lokal objek.

### Inti yang Harus Ditekankan

- **Model Matrix** mengubah objek dari **Local Space** ke **World Space**.
- Rumus konseptualnya adalah `worldPosition = ModelMatrix × localPosition`.
- Model Matrix biasanya memuat kombinasi transformasi seperti translasi, rotasi, dan penskalaan.
- Dalam rendering pipeline, Model Matrix adalah tahap awal sebelum transformasi kamera dan proyeksi.

### Transisi ke Slide Berikutnya

Setelah memahami peran Model Matrix secara konseptual, kita lanjut ke bentuk representasinya dalam 3D, yaitu matrix 4×4 yang digunakan untuk memuat transformasi secara lengkap.

---

## Slide 034 - Transformasi 3D Menggunakan Matrix 4×4

### Narasi

Setelah kita melihat **Model Matrix** sebagai pemetaan dari `Local Space` ke `World Space`, langkah berikutnya adalah memahami bentuk representasi yang dipakai untuk transformasi 3D. Dalam grafika komputer, transformasi 3D umumnya direpresentasikan menggunakan **matrix 4×4**, bukan matrix 3×3. Pilihan ini bukan sekadar konvensi, tetapi karena matrix 4×4 memberi ruang yang cukup untuk menampung **translation**, **rotation**, dan **scaling** dalam satu struktur aljabar yang konsisten.

Representasi umum posisi titik 3D dalam bentuk ini adalah:

```text
[x]
[y]
[z]
[w]
```

Vektor ini sering disebut vektor dalam **koordinat homogen**. Komponen `x`, `y`, dan `z` adalah posisi spasial yang kita kenal, sedangkan `w` adalah komponen tambahan yang memungkinkan transformasi seperti **translation** tetap dapat dilakukan melalui perkalian matrix. Dengan kata lain, `w` membuat operasi geometri 3D dapat direpresentasikan secara seragam, baik untuk rotasi, penskalaan, maupun pergeseran posisi.

Jika pada slide sebelumnya kita menulis:

```text
worldPosition = ModelMatrix × localPosition
```

maka pada slide ini `localPosition` dipahami sebagai vektor 4 komponen. Artinya, **Model Matrix 4×4** tidak hanya memutar atau memperbesar objek, tetapi juga dapat memindahkannya ke posisi tertentu di `World Space`. Inilah alasan mengapa matrix 4×4 menjadi format yang sangat umum dalam pipeline rendering, terutama ketika posisi vertex diproses oleh GPU atau dikirim ke shader.

Secara konseptual, **Model Matrix 4×4** dapat memuat kombinasi transformasi berikut:

- **translation**, yaitu perpindahan objek pada sumbu `x`, `y`, dan `z`;
- **rotation**, yaitu pemutaran objek di sekitar sumbu tertentu;
- **scaling**, yaitu perubahan ukuran objek secara seragam atau per sumbu.

Yang perlu kita tekankan di sini adalah bahwa matrix 4×4 adalah **wadah representasi** untuk transformasi model. Kita belum perlu membahas bentuk spesifik setiap matrix transformasi pada slide ini; yang penting dipahami dulu adalah mengapa 3D membutuhkan representasi 4×4 dan bagaimana vektor posisi 3D diperluas menjadi 4 komponen agar dapat diproses secara konsisten.

### Inti yang Harus Ditekankan

- Transformasi 3D umumnya direpresentasikan dengan **matrix 4×4** karena mampu menampung **translation**, **rotation**, dan **scaling** dalam satu representasi.
- Posisi titik 3D ditulis sebagai vektor `[x, y, z, w]`, di mana `w` adalah komponen homogen yang memungkinkan transformasi seperti translation.
- **Model Matrix 4×4** melanjutkan konsep dari slide sebelumnya: memetakan `Local Space` ke `World Space`.
- Matrix 4×4 menjadi format dasar yang penting dalam rendering pipeline, terutama untuk pemrosesan vertex dan shader.

### Transisi ke Slide Berikutnya

Setelah memahami bentuk umum matrix 4×4, kita akan masuk ke komponen transformasi yang paling dasar, yaitu **Translation Matrix 3D**, yang menentukan bagaimana objek berpindah di `World Space`.

---

## Slide 035 - Translation Matrix 3D

### Narasi

**Translation 3D** adalah operasi transformasi yang memindahkan objek dari satu posisi ke posisi lain tanpa mengubah bentuk, ukuran, atau orientasinya. Dalam grafika komputer, operasi ini sangat penting karena setiap objek pada awalnya biasanya didefinisikan dalam **local space** atau koordinat objek, lalu harus diposisikan ke **world space** agar terlihat pada tempat yang benar dalam adegan.

Secara konseptual, matriks translasi 3D ditulis sebagai berikut:

```text
T =
[1 0 0 tx]
[0 1 0 ty]
[0 0 1 tz]
[0 0 0  1]
```

Kita bisa membaca matriks ini dengan cukup intuitif. Nilai **1** pada diagonal utama menunjukkan bahwa sumbu X, Y, dan Z tidak diskalakan. Nilai **0** di luar diagonal menunjukkan bahwa tidak ada pencampuran sumbu, sehingga tidak terjadi rotasi atau skew. Sementara itu, nilai `tx`, `ty`, dan `tz` pada kolom terakhir menentukan seberapa jauh objek dipindahkan pada masing-masing sumbu.

Jika sebuah titik direpresentasikan dalam koordinat homogen sebagai:

```text
[x]
[y]
[z]
[1]
```

maka hasil perkalian dengan matriks translasi adalah:

```text
[x + tx]
[y + ty]
[z + tz]
[   1  ]
```

Artinya, setiap koordinat titik hanya ditambah dengan nilai offset translasi. Jika `tx` bernilai positif, objek bergeser ke arah sumbu X positif. Jika `tx` bernilai negatif, objek bergeser ke arah sumbu X negatif. Hal yang sama berlaku untuk `ty` dan `tz` pada sumbu Y dan Z.

Penting untuk diperhatikan bahwa translasi tidak dapat direpresentasikan secara alami hanya dengan matriks 3×3 biasa. Matriks 3×3 umumnya digunakan untuk operasi linear seperti rotasi dan scaling, tetapi sulit menambahkan offset posisi secara langsung. Dengan menggunakan **koordinat homogen** dan matriks 4×4, translasi dapat dimasukkan ke dalam bentuk perkalian matriks yang sama dengan transformasi lainnya. Inilah alasan utama mengapa dalam grafika komputer 3D kita sering bekerja dengan matriks 4×4.

Dalam konteks **rendering pipeline**, matriks translasi biasanya menjadi bagian dari **model matrix**. Model matrix bertugas memetakan geometri objek dari local space ke world space. Setelah objek dipindahkan ke posisi yang diinginkan, transformasi lain seperti rotasi atau scaling dapat diterapkan, tergantung urutan transformasi yang kita inginkan. Namun pada slide ini, kita cukup memahami bahwa `tx`, `ty`, dan `tz` adalah komponen yang menentukan posisi akhir objek di world space.

Sebelum lanjut ke transformasi berikutnya, hal yang perlu benar-benar dipahami adalah bahwa translasi adalah operasi **pergeseran**, bukan perubahan ukuran. Matriks translasi tidak mengubah panjang sumbu, tidak mengubah orientasi objek, dan tidak mengubah bentuk geometri. Ia hanya menggeser seluruh titik objek secara seragam.

### Inti yang Harus Ditekankan

- **Translation 3D** memindahkan objek tanpa mengubah bentuk, ukuran, atau orientasinya.
- Matriks translasi 3D memiliki bentuk:

```text
[1 0 0 tx]
[0 1 0 ty]
[0 0 1 tz]
[0 0 0  1]
```

- Nilai `tx`, `ty`, dan `tz` menentukan perpindahan objek pada sumbu X, Y, dan Z.
- Untuk titik dengan `w = 1`, hasil transformasi adalah:

```text
x' = x + tx
y' = y + ty
z' = z + tz
w' = 1
```

- Translasi membutuhkan **matriks 4×4** dan **koordinat homogen** karena operasi pergeseran tidak dapat direpresentasikan hanya dengan matriks linear 3×3.
- Dalam pipeline, translasi sering menjadi bagian dari **model matrix** untuk memposisikan objek di **world space**.

### Transisi ke Slide Berikutnya

Setelah kita memahami bagaimana objek dipindahkan ke posisi yang diinginkan, langkah berikutnya adalah memahami bagaimana objek dapat diperbesar atau diperkecil. Untuk itu, pada slide berikutnya kita akan membahas **Scaling Matrix 3D**, yang memungkinkan perubahan ukuran objek secara terpisah pada sumbu X, Y, dan Z.

---

## Slide 036 - Scaling Matrix 3D

### Narasi

Kita lanjut dari **translation matrix 3D** ke bentuk transformasi lain yang sangat dasar, yaitu **scaling matrix 3D**. Jika translation mengubah posisi objek, maka scaling mengubah **ukuran objek** terhadap sumbu koordinat. Dalam grafika komputer, scaling sering digunakan untuk memperbesar atau memperkecil model, menyesuaikan proporsi objek, atau membuat variasi ukuran dari satu geometri yang sama.

Bentuk umum scaling matrix 3D adalah sebagai berikut:

```text
S =
[sx  0  0  0]
[ 0 sy  0  0]
[ 0  0 sz  0]
[ 0  0  0  1]
```

Matriks ini bekerja pada koordinat homogen. Jika kita punya titik objek dalam bentuk `[x, y, z, 1]`, hasil perkalian dengan matriks `S` akan menghasilkan titik baru:

```text
[x'  y'  z'  1]
```

dengan nilai:

```text
x' = sx * x
y' = sy * y
z' = sz * z
```

Artinya, setiap koordinat titik dikalikan dengan faktor skala pada sumbunya masing-masing. Nilai `sx` mengontrol skala pada sumbu X, `sy` pada sumbu Y, dan `sz` pada sumbu Z. Karena elemen diagonal inilah yang menentukan skala, maka scaling matrix memiliki struktur yang relatif sederhana dibandingkan transformasi lain.

Hal penting yang perlu kita perhatikan adalah bahwa scaling **dapat berbeda untuk setiap sumbu**. Jika `sx = sy = sz`, maka objek mengalami **uniform scaling**, yaitu diperbesar atau diperkecil secara proporsional. Namun, jika nilainya berbeda, misalnya `sx = 2`, `sy = 1`, `sz = 1`, maka objek akan memanjang hanya pada sumbu X. Kondisi ini disebut **non-uniform scaling**. Non-uniform scaling berguna untuk membuat objek yang lebih lebar, lebih tinggi, atau lebih dalam, tetapi juga dapat mengubah bentuk asli objek jika tidak digunakan dengan hati-hati.

Dalam konteks rendering pipeline, scaling biasanya menjadi bagian dari **model transformation**. Sebelum objek diproses lebih lanjut oleh view matrix, projection matrix, rasterization, atau vertex shader, geometri objek sering kali sudah melalui transformasi model yang berisi kombinasi scaling, rotation, dan translation. Pada GPU, transformasi ini umumnya diterapkan pada vertex data di **vertex shader**, sehingga posisi titik-titik mesh berubah sebelum dipetakan ke layar.

Perlu juga kita sadari bahwa urutan transformasi sangat penting. Jika kita melakukan scaling lalu translation, hasilnya bisa berbeda dengan translation lalu scaling. Misalnya, scaling terhadap origin akan mengubah jarak objek terhadap titik pusat, sedangkan jika objek sudah digeser terlebih dahulu, scaling dapat memengaruhi posisi akhirnya. Karena itu, dalam praktik grafika komputer, kita biasanya menyusun transformasi model dengan hati-hati agar objek berada pada posisi, orientasi, dan ukuran yang diinginkan.

Sebelum lanjut ke rotation, mahasiswa perlu memahami bahwa scaling matrix tidak hanya mengubah ukuran, tetapi juga dapat memengaruhi normal, bounding box, dan perilaku rendering jika digunakan pada model kompleks. Namun untuk slide ini, kita cukup fokus pada intinya: scaling 3D adalah transformasi linear yang memperbesar atau memperkecil objek berdasarkan faktor skala pada sumbu X, Y, dan Z.

### Inti yang Harus Ditekankan

- **Scaling matrix 3D** mengubah ukuran objek melalui faktor `sx`, `sy`, dan `sz` pada elemen diagonal matriks.
- Jika `sx = sy = sz`, objek mengalami **uniform scaling**; jika berbeda, objek mengalami **non-uniform scaling**.
- Scaling bekerja pada koordinat homogen dan menghasilkan titik baru `[sx*x, sy*y, sz*z, 1]`.
- Dalam rendering pipeline, scaling biasanya menjadi bagian dari **model transformation** sebelum objek diproses oleh view, projection, rasterization, atau shader.
- Urutan transformasi penting karena hasil scaling dan translation dapat berbeda tergantung urutan penerapannya.

### Transisi ke Slide Berikutnya

Setelah kita memahami bagaimana objek dapat dipindahkan dan diubah ukurannya, langkah berikutnya adalah mengubah orientasi objek. Pada slide berikutnya, kita akan masuk ke **rotation dalam 3D**, di mana objek dapat diputar terhadap sumbu X, Y, atau Z menggunakan rotation matrix yang masing-masing memiliki bentuk dan efek berbeda.

---

## Slide 037 - Rotation dalam 3D

### Narasi

Setelah membahas **scaling matrix 3D**, kita lanjut ke transformasi yang sangat penting dalam grafika komputer, yaitu **rotasi**. Rotasi mengubah orientasi objek, tetapi tidak mengubah bentuk atau ukurannya. Dalam ruang 2D, rotasi biasanya cukup dijelaskan dengan satu sudut. Namun dalam ruang 3D, kita juga harus menentukan **sumbu rotasi**.

Rotation 3D dapat terjadi terhadap:

- `X-axis`
- `Y-axis`
- `Z-axis`

Setiap sumbu memiliki **rotation matrix** sendiri. Artinya, memutar objek terhadap sumbu X, Y, atau Z akan menghasilkan gerakan yang berbeda meskipun sudut rotasinya sama.

Secara intuitif, bayangkan sebuah objek 3D sederhana seperti kubus atau model kecil. Jika kita memutar terhadap `Z-axis`, objek tampak berputar di bidang layar, mirip dengan rotasi 2D. Jika kita memutar terhadap `Y-axis`, objek tampak berputar seperti benda yang diputar di atas meja. Jika kita memutar terhadap `X-axis`, objek tampak miring ke depan atau ke belakang.

Pada praktikum, fokus dapat dimulai dari:

- `Rotation Z` untuk memahami rotasi pada tampilan 2D
- `Rotation Y` untuk melihat efek rotasi pada objek 3D sederhana

Pemilihan dua rotasi ini membantu mahasiswa membangun intuisi visual terlebih dahulu, sebelum masuk ke bentuk matrix rotasi yang lebih lengkap.

Dalam konteks rendering pipeline, rotasi biasanya menjadi bagian dari **transformasi model**. Objek didefinisikan dalam koordinat lokal, kemudian diputar, digeser, atau diskalakan sebelum dikirim ke tahap kamera dan proyeksi. Karena itu, memahami rotasi sangat penting sebelum kita membahas bagaimana matrix transformasi dikirim ke GPU.

Sebelum lanjut, yang perlu dipahami adalah: rotasi 3D selalu bergantung pada **sumbu rotasi**, dan setiap sumbu memiliki aturan transformasi yang berbeda. Kita belum perlu membahas detail elemen matrix pada slide ini; yang penting adalah konsep orientasi dan sumbu rotasi.

### Inti yang Harus Ditekankan

- **Rotation 3D** ditentukan oleh **sumbu rotasi**: `X-axis`, `Y-axis`, atau `Z-axis`.
- Setiap sumbu memiliki **rotation matrix** sendiri, sehingga hasil rotasi berbeda meskipun sudutnya sama.
- Untuk praktikum awal, fokus pada `Rotation Z` dan `Rotation Y` agar mahasiswa membangun intuisi visual.
- Rotasi merupakan bagian penting dari transformasi model sebelum objek diproses lebih lanjut dalam rendering pipeline.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa rotasi membutuhkan matrix, langkah berikutnya adalah melihat bagaimana matrix tersebut dikirim ke GPU. Pada slide berikutnya, kita akan membahas `uniform mat4 u_model;` pada WebGL sebagai cara untuk mengirim matrix transformasi ke shader.

---

## Slide 038 - Uniform Matrix pada WebGL

### Narasi

Setelah kita membahas rotasi 3D terhadap sumbu `X`, `Y`, dan `Z`, langkah berikutnya adalah bagaimana matriks rotasi itu sampai ke GPU. Dalam WebGL, matriks transformasi tidak dikirim sebagai data per-vertex, melainkan sebagai **uniform**.

Dari Pertemuan 2 kita sudah mengenal `uniform`. Sekarang kita menggunakannya untuk mengirim matriks:

```glsl
uniform mat4 u_model;
```

Penulisan `uniform mat4 u_model;` menyatakan bahwa shader memiliki variabel bernama `u_model` dengan tipe `mat4`, yaitu matriks 4x4. Matriks 4x4 penting karena dapat merepresentasikan transformasi pada koordinat homogen, sehingga posisi vertex dapat diproses dalam pipeline rendering.

Sifat `uniform` yang perlu kita tekankan adalah:

- nilainya **sama untuk semua vertex**
- berlaku dalam **satu draw call**

Artinya, jika kita menggambar sebuah objek dengan banyak vertex, seluruh vertex akan memakai matriks yang sama. Ini sesuai dengan kebutuhan transformasi objek: matriks transformasi diterapkan ke seluruh objek, bukan ke setiap vertex secara berbeda.

Perbedaan ini penting untuk dipahami. Data seperti posisi vertex biasanya dikirim sebagai attribute karena nilainya berbeda untuk setiap vertex. Sebaliknya, matriks transformasi bersifat global untuk objek pada draw call tersebut, sehingga lebih tepat dikirim sebagai `uniform`. Dengan cara ini, GPU dapat memakai satu nilai matriks untuk memproses banyak vertex secara efisien.

Secara pipeline, `u_model` biasanya mewakili transformasi model, yaitu transformasi dari koordinat objek ke tahap transformasi berikutnya. Pada tahap ini, kita belum perlu membahas detail matriks lain secara lengkap. Yang penting adalah bahwa matriks sudah tersedia di shader dan siap digunakan untuk mengubah posisi vertex.

Sebelum lanjut, mahasiswa perlu memahami tiga hal utama: `uniform` adalah variabel shader yang diset dari sisi JavaScript/WebGL, `mat4` adalah matriks 4x4, dan nilai uniform berlaku untuk seluruh vertex dalam satu draw call. Dengan pemahaman ini, kita siap melihat bagaimana matriks tersebut dipakai di vertex shader.

### Inti yang Harus Ditekankan

- `uniform mat4 u_model;` digunakan untuk mengirim matriks 4x4 ke shader.
- Nilai `uniform` **sama untuk semua vertex** dalam satu draw call.
- Matriks transformasi bersifat global untuk objek, berbeda dari data vertex yang bersifat per-vertex.
- `u_model` menjadi dasar transformasi vertex sebelum tahap berikutnya dalam pipeline.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana `u_model` dipakai di vertex shader untuk mengalikan posisi vertex, sehingga transformasi objek benar-benar terjadi dalam pipeline rendering.

---

## Slide 039 - Transformation di Vertex Shader

### Narasi

Kita sudah mengenal `uniform` sebagai cara mengirim nilai yang sama untuk semua vertex dalam satu draw call. Pada tahap ini, nilai yang dikirim adalah **matrix transformasi**, yaitu `u_model`. Matrix ini akan digunakan langsung di dalam **vertex shader** untuk mengubah posisi vertex dari koordinat lokal objek menuju posisi yang siap diproses lebih lanjut oleh rendering pipeline.

```glsl
in vec3 a_position;
uniform mat4 u_model;

void main() {
  gl_Position =
    u_model *
    vec4(a_position, 1.0);
}
```

Pada kode di atas, `a_position` adalah atribut vertex yang berisi koordinat 3D objek, biasanya dalam **model space** atau **object space**. Nilai ini dibaca oleh vertex shader untuk setiap vertex yang diproses. Sementara itu, `u_model` adalah **uniform matrix** berukuran 4x4 yang dikirim dari JavaScript atau host program. Karena bersifat uniform, nilai matrix ini sama untuk seluruh vertex dalam satu draw call.

Perhatikan baris `vec4(a_position, 1.0)`. `a_position` bertipe `vec3`, sedangkan `u_model` adalah `mat4`, sehingga perkalian matrix-vector membutuhkan vector 4 komponen. Kita menambahkan komponen keempat, yaitu `1.0`, agar posisi titik dapat diperlakukan sebagai posisi Cartesian biasa. Dalam transformasi 3D, komponen `w` ini penting karena menentukan bagaimana titik, vektor, atau posisi ditransformasikan oleh matrix.

Selanjutnya, `u_model * vec4(a_position, 1.0)` melakukan transformasi terhadap posisi vertex. Hasilnya disimpan ke `gl_Position`, yaitu output bawaan vertex shader yang akan digunakan oleh pipeline untuk melanjutkan proses ke tahap berikutnya. Pada tahap ini, matrix lain dapat dibuat **identity**, artinya matrix tersebut tidak mengubah posisi. Dengan kata lain, kita baru menerapkan transformasi model, sementara transformasi lain seperti view atau projection masih dianggap netral.

Cara membaca kode ini adalah sebagai berikut:

- `in vec3 a_position;` menyatakan input posisi vertex.
- `uniform mat4 u_model;` menyatakan matrix transformasi yang dikirim dari luar shader.
- `void main()` adalah fungsi utama vertex shader.
- `gl_Position` adalah output posisi vertex yang akan diproses oleh pipeline.
- `vec4(a_position, 1.0)` mengubah posisi 3D menjadi posisi 4D agar dapat dikalikan dengan `mat4`.

Poin penting yang harus dipahami adalah bahwa vertex shader bekerja **per vertex**, tetapi matrix `u_model` bekerja sebagai transformasi global untuk objek pada draw call tersebut. Dengan cara ini, geometri objek tetap tersimpan di vertex buffer, sedangkan posisi atau orientasi objek dapat diubah hanya dengan mengganti nilai matrix. Ini adalah dasar dari banyak aplikasi grafika real-time, karena kita tidak perlu menulis ulang seluruh data vertex hanya untuk memindahkan atau memutar objek.

Sebelum lanjut, pastikan kita memahami bahwa `gl_Position` bukan sekadar variabel biasa, melainkan output yang menentukan posisi vertex setelah transformasi awal. Pada tahap ini, karena matrix lain dibuat identity, hasil transformasi model langsung menjadi posisi yang dikirim ke tahap berikutnya.

### Inti yang Harus Ditekankan

- `a_position` adalah posisi vertex dalam koordinat lokal objek.
- `u_model` adalah **uniform matrix** yang sama untuk semua vertex dalam satu draw call.
- `vec4(a_position, 1.0)` diperlukan karena `mat4` membutuhkan vector 4 komponen.
- `gl_Position` adalah output vertex shader yang akan diproses oleh rendering pipeline.
- Pada tahap ini, matrix lain dapat dibuat **identity** agar fokus hanya pada transformasi model.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat mengapa cara ini sangat berguna: geometri objek dapat tetap sama, sementara transformasinya berubah setiap frame.

---

## Slide 040 - Geometry Tetap, Transform Berubah

### Narasi

Kita sudah melihat vertex shader menerima `a_position` dan mengalikan dengan `u_model`. Pada tahap ini, hal penting yang perlu dipahami adalah **apa yang tetap** dan **apa yang berubah** dalam pipeline. Geometri objek disimpan di **Vertex Buffer**, dan selama bentuk objek tidak berubah, data vertex di dalamnya tetap. Yang berubah adalah **Model Matrix**, yaitu matriks transformasi yang menggambarkan posisi, rotasi, atau skala objek pada frame tertentu.

Alurnya dapat dibaca dari atas ke bawah. `Vertex Buffer` menyediakan data geometri seperti posisi vertex. `Model Matrix` dikirim sebagai state yang diperbarui setiap frame. Di `Vertex Shader`, kedua hal ini digabungkan, misalnya melalui `u_model * vec4(a_position, 1.0)`, sehingga menghasilkan **Transformed Vertex**. Dengan kata lain, vertex shader tidak hanya membaca koordinat mentah, tetapi koordinat yang sudah ditransformasikan oleh matriks model.

Keuntungan utamanya sangat praktis. Jika kita hanya ingin memindahkan objek, memutar objek, atau mengubah skala, kita tidak perlu menulis ulang seluruh vertex buffer. Cukup update `u_model` dengan matriks baru. Ini penting dalam grafika komputer real-time karena mengubah matriks jauh lebih murah daripada mengirim ulang ribuan koordinat vertex ke GPU.

Pemisahan ini juga membuat pipeline rendering lebih efisien. Geometri menjadi data yang relatif stabil, sedangkan transformasi menjadi state yang cepat berubah. Objek yang sama dapat digunakan berulang kali dengan model matrix berbeda, atau satu objek dapat dianimasikan hanya dengan memperbarui transformasinya setiap frame.

Sebelum lanjut, pastikan kita membedakan dua hal ini: **vertex buffer menyimpan bentuk objek**, sedangkan **model matrix menyimpan bagaimana objek diletakkan atau diorientasikan**. Jika bentuk objek berubah, data geometri perlu diubah; jika hanya posisi atau orientasinya yang berubah, cukup transformasi yang diperbarui.

### Inti yang Harus Ditekankan

- **Vertex Buffer** menyimpan geometri objek dan bersifat tetap selama bentuk objek tidak berubah.
- **Model Matrix** adalah state transformasi yang dapat berubah setiap frame.
- `Vertex Shader` menggabungkan keduanya, misalnya `u_model * vec4(a_position, 1.0)`, untuk menghasilkan **Transformed Vertex**.
- Menggerakkan objek cukup dengan memperbarui matriks, bukan menulis ulang seluruh vertex buffer.
- Pemisahan ini penting untuk efisiensi rendering real-time dan menjadi dasar animasi transformasi.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana `Model Matrix` ini diperbarui setiap frame dari waktu animasi, sehingga objek dapat bergerak atau berputar secara real-time.

---

## Slide 041 - Animasi dengan Transform Matrix

### Narasi

Setelah kita memahami bahwa **geometry tetap** dan hanya **transform matrix** yang berubah per frame, langkah berikutnya adalah melihat bagaimana hal itu dipakai untuk membuat animasi. Intinya, objek tidak perlu digambar ulang dari vertex-nya setiap kali posisinya berubah. Yang berubah adalah matriks transformasi yang dikirim ke GPU.

Alur dasar animasi transformasi real-time dapat dibaca sebagai berikut:

```text
Time
 ↓
Update Angle
 ↓
Build Rotation Matrix
 ↓
Send Uniform
 ↓
Draw
```

Alur ini menunjukkan bahwa animasi digerakkan oleh **waktu**. Setiap frame, program membaca nilai waktu, lalu memperbarui parameter transformasi, misalnya sudut rotasi. Dari sudut tersebut, kita membangun **rotation matrix** yang baru. Matriks ini kemudian dikirim sebagai `uniform` ke shader, biasanya ke vertex shader, dan akhirnya objek digambar dengan transformasi terbaru.

Kita bisa memahaminya sebagai lima tahap:

1. **`Time`**  
   Sumber waktu digunakan untuk mengetahui berapa lama animasi sudah berjalan. Nilai waktu inilah yang membuat perubahan terjadi secara kontinu.

2. **`Update Angle`**  
   Dari waktu tersebut, kita memperbarui parameter animasi. Untuk rotasi, parameter yang umum digunakan adalah **angle** atau sudut.

3. **`Build Rotation Matrix`**  
   Sudut yang sudah diperbarui digunakan untuk membentuk **rotation matrix**. Matriks ini menentukan bagaimana vertex objek akan diputar di ruang dunia atau ruang model.

4. **`Send Uniform`**  
   Matriks transformasi dikirim ke GPU sebagai `uniform`. Dalam konteks WebGL atau pipeline rendering, `uniform` adalah data yang dapat diubah dari CPU dan dibaca oleh shader.

5. **`Draw`**  
   Setelah matriks tersedia di shader, objek digambar. Vertex shader akan memakai matriks tersebut untuk mentransformasi vertex sebelum proses rendering berikutnya.

Poin penting yang harus dipahami adalah: **animasi real-time tidak berarti mengubah geometri objek setiap frame**. Vertex buffer tetap sama. Yang berubah adalah matriks transformasi. Dengan cara ini, objek dapat diputar, dipindahkan, atau diskalakan tanpa menulis ulang data vertex secara keseluruhan.

Hal ini sangat penting dalam grafika komputer karena GPU sangat efisien dalam memproses banyak vertex, tetapi transfer data geometri dari CPU ke GPU relatif lebih mahal. Jika kita hanya mengubah matriks transformasi, beban CPU dan GPU menjadi lebih ringan, sehingga animasi dapat berjalan mulus pada frame rate yang stabil.

Sebelum lanjut, pastikan kita memahami bahwa **transform matrix adalah penggerak utama perubahan tampilan objek**. Baik animasi yang digerakkan oleh waktu maupun interaksi pengguna, pada akhirnya akan memengaruhi parameter transformasi, lalu parameter tersebut diubah menjadi matriks yang dikirim ke shader.

### Inti yang Harus Ditekankan

- Animasi real-time dapat dilakukan dengan **mengubah transform matrix setiap frame**, bukan mengubah vertex buffer.
- Alur utamanya adalah: **waktu → update parameter → bangun matrix → kirim uniform → draw**.
- `uniform` berperan sebagai cara CPU mengirim matriks transformasi terbaru ke shader.
- Pendekatan ini efisien karena geometri tetap sama, hanya transformasi yang berubah.
- Konsep ini menjadi dasar untuk animasi rotasi, translasi, dan scaling pada rendering real-time.

### Transisi ke Slide Berikutnya

Jika animasi dapat digerakkan oleh waktu, maka transformasi juga dapat digerakkan oleh input pengguna. Pada slide berikutnya, kita akan melihat bagaimana interaksi user mengubah **translation**, **rotation**, dan **scaling** melalui matriks transformasi.

---

## Slide 042 - Interaksi User

### Narasi

Setelah animasi yang digerakkan oleh waktu, kita masuk ke sumber perubahan transformasi yang lain, yaitu **input pengguna**. Dalam grafika komputer real-time, objek tidak hanya bergerak karena program menghitung sudut atau posisi secara otomatis; pengguna juga dapat mengubahnya melalui keyboard, mouse, atau kontrol lain.

Pada slide ini, input dapat mengubah tiga jenis transformasi dasar:

- **translation**, yaitu menggeser objek,
- **rotation**, yaitu memutar objek,
- **scaling**, yaitu memperbesar atau memperkecil objek.

Contoh pemetaan input yang ditampilkan adalah:

```text
Arrow Key → Translate
A / D     → Rotate
+ / -     → Scale
```

Cara membacanya sederhana: setiap tombol mewakili satu aksi transformasi. Tombol panah mengubah posisi objek, tombol `A` dan `D` mengubah orientasi, sedangkan `+` dan `-` mengubah ukuran. Yang penting, input tersebut tidak langsung menggeser piksel di layar; input tersebut mengubah **parameter transformasi** objek.

Setelah parameter berubah, transformasi diproses melalui **matrix**. Dalam praktik, nilai hasil input biasanya disimpan ke state model, lalu disusun menjadi **model matrix** atau matriks transformasi. Matriks inilah yang dikirim ke GPU, misalnya melalui uniform vertex shader, sehingga posisi vertex lokal objek berubah menjadi posisi dunia yang baru.

Dengan cara ini, interaksi pengguna menjadi bagian dari loop rendering: baca input, perbarui transformasi, bangun matrix, kirim ke shader, lalu gambar frame berikutnya. Ini melanjutkan ide dari slide sebelumnya, di mana animasi juga memperbarui matrix setiap frame; bedanya, sumber perubahannya kini berasal dari pengguna.

### Inti yang Harus Ditekankan

- Input pengguna mengubah **translation**, **rotation**, atau **scaling** objek.
- Tombol pada contoh hanya pemetaan aksi; yang benar-benar memengaruhi rendering adalah perubahan **transform matrix**.
- Interaksi user dan animasi waktu sama-sama masuk ke alur yang sama: update transformasi → bangun matrix → kirim ke shader → draw.
- Mahasiswa perlu memahami bahwa objek tidak diubah secara langsung di layar, tetapi melalui parameter geometri dan matriks transformasi.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan melihat posisi **model matrix** dalam pipeline Pertemuan 3, yaitu bagaimana vertex lokal objek diubah menjadi world position sebelum masuk ke rasterization dan fragment shader.

---

## Slide 043 - Pipeline Pertemuan 3

### Narasi

Kita mulai dari gambaran besar pipeline yang akan kita gunakan dalam beberapa pertemuan. Alurnya dapat dibaca dari atas ke bawah:

```text
Local Vertex
    ↓
Model Matrix
    ↓
World Position
    ↓
Vertex Shader Output
    ↓
Rasterization
    ↓
Fragment Shader
```

Untuk memahami alur ini, kita bisa mengikuti tahapan berikut:

1. **Local Vertex** adalah koordinat awal sebuah objek dalam sistem koordinatnya sendiri.  
   Misalnya, titik-titik sebuah kubus didefinisikan relatif terhadap pusat kubus, bukan relatif terhadap kamera atau dunia.

2. **Model Matrix** mengubah koordinat lokal tersebut menjadi posisi di ruang dunia.  
   Matriks ini biasanya menggabungkan `translation`, `rotation`, dan `scaling`, yang sebelumnya dapat dipengaruhi oleh interaksi user.

3. **World Position** adalah hasil transformasi objek ke ruang dunia.  
   Pada tahap ini, objek sudah memiliki posisi global, misalnya berada di sebelah kiri kamera, di depan kamera, atau di atas lantai virtual.

4. **Vertex Shader Output** menandai hasil pemrosesan vertex setelah posisi world.  
   Pada pertemuan ini, kita tidak perlu masuk ke detail shader secara penuh; yang penting adalah posisi vertex sudah siap untuk tahap berikutnya.

5. **Rasterization** mengubah geometri yang sudah diproses menjadi kumpulan fragmen atau piksel.  
   Tahap ini menentukan bagian layar mana yang akan diisi oleh objek.

6. **Fragment Shader** menghitung warna atau properti visual untuk setiap fragmen.  
   Tahap ini akan menentukan bagaimana objek tampak secara visual, misalnya warna, shading, atau efek tertentu.

Namun, fokus utama Pertemuan 3 adalah bagian pertama: **Local → World**.

Artinya, sebelum kita membahas kamera, proyeksi, atau tampilan akhir di layar, objek harus terlebih dahulu diletakkan di ruang dunia. Tanpa transformasi ini, vertex hanya berupa bentuk lokal yang belum memiliki posisi global.

### Inti yang Harus Ditekankan

- **Local Vertex** adalah koordinat objek relatif terhadap dirinya sendiri.
- **Model Matrix** mengubah koordinat lokal menjadi **World Position** melalui `translation`, `rotation`, dan `scaling`.
- Fokus Pertemuan 3 adalah memahami alur **Local → World**, bukan seluruh pipeline sampai fragment shader.
- Tahap seperti **Rasterization** dan **Fragment Shader** perlu dipahami sebagai konteks, tetapi detail teknisnya bukan pusat slide ini.

### Transisi ke Slide Berikutnya

Setelah objek berada di **World Space**, langkah berikutnya adalah membawanya ke ruang pandang dan layar. Pada slide berikutnya, kita akan melihat preview Pertemuan 4: dari **World** ke **View Matrix**, **View Space**, **Projection Matrix**, dan **Clip Space**.

---

## Slide 044 - Preview Pertemuan 4

### Narasi

Setelah objek berhasil dipindahkan dari `Local Vertex` ke `World Position`, kita sudah berada di titik penting: objek kini memiliki posisi dalam scene. Namun, posisi dalam `World Space` saja belum cukup untuk ditampilkan ke layar. GPU masih perlu tahu dari sudut pandang mana objek dilihat dan bagaimana bentuk 3D itu diproyeksikan ke bidang 2D.

Diagram pada slide ini menunjukkan lanjutan pipeline setelah `World Space`:

```text
World
 ↓
View Matrix
 ↓
View Space
 ↓
Projection Matrix
 ↓
Clip Space
```

Alurnya dibaca dari atas ke bawah. `World` adalah input, yaitu koordinat objek dalam ruang scene. `View Matrix` mengubah koordinat tersebut menjadi `View Space`, yaitu ruang relatif terhadap kamera. Dengan kata lain, `View Space` menjawab pertanyaan: “bagaimana objek terlihat dari posisi dan orientasi kamera?”.

Selanjutnya, `Projection Matrix` memetakan `View Space` ke `Clip Space`. `Clip Space` adalah tahap penting sebelum objek yang berada di luar volume pandang dipotong dan sebelum koordinat dipetakan ke layar. Pada tingkat pengantar, yang perlu kita pegang dulu adalah bahwa `Projection Matrix` menentukan bagaimana kedalaman dan perspektif objek diterjemahkan ke ruang yang siap diproses oleh pipeline.

Bagian ini menjadi fokus Pertemuan 4 karena `View Matrix` dan `Projection Matrix` adalah dua transformasi utama yang menghubungkan dunia 3D dengan tampilan visual. Tanpa pemahaman ini, mahasiswa bisa saja membuat objek yang bergerak, tetapi belum tentu memahami mengapa kamera, sudut pandang, dan proyeksi menentukan hasil akhir rendering.

### Inti yang Harus Ditekankan

- `World Space` adalah posisi objek dalam scene, sedangkan `View Space` adalah posisi objek relatif terhadap kamera.
- `View Matrix` berfungsi mengubah koordinat dari `World Space` ke `View Space`.
- `Projection Matrix` mengubah koordinat dari `View Space` ke `Clip Space`, yaitu tahap sebelum clipping dan pemetaan ke layar.
- Alur `World → View Matrix → View Space → Projection Matrix → Clip Space` adalah lanjutan dari pipeline setelah objek berada di world space.
- Pertemuan 4 akan fokus pada tahap kamera dan proyeksi, bukan lagi transformasi lokal objek.

### Transisi ke Slide Berikutnya

Sebelum masuk ke detail `View Matrix` dan `Projection Matrix`, kita akan memperkuat dasar transformasi melalui praktikum interaktif. Di sana, mahasiswa akan menerapkan `translation`, `rotation`, `scaling`, dan kombinasi transformasi berbasis matriks pada objek WebGL yang dapat dikendalikan oleh input pengguna dan dianimasasi dengan `requestAnimationFrame()`.

---

## Slide 045 - Praktikum: Interactive Transformation

### Narasi

Pada praktikum ini, kita tidak hanya mempelajari transformasi sebagai rumus, tetapi membangunnya menjadi **objek WebGL** yang dapat dikendalikan secara interaktif. Tujuan utamanya adalah mahasiswa mampu membuat objek geometri mengalami **translation**, **rotation**, dan **scaling**, lalu menggabungkan ketiganya menjadi satu transformasi yang dapat berubah setiap frame.

Dalam grafika komputer, transformasi seperti ini penting karena objek geometri harus dapat diposisikan, diputar, dan diubah skalanya di dalam adegan. Pendekatan **matrix-based transformation** digunakan karena matriks memungkinkan berbagai transformasi digabungkan secara konsisten, mudah dihitung ulang, dan sesuai dengan cara kerja rendering pipeline modern.

Secara posisi dalam pipeline, praktikum ini berada pada tahap transformasi model, yaitu tahap di mana objek diubah sebelum masuk ke **View Space** dan **Clip Space**. Dari konteks sebelumnya, setelah objek berada di **World Space**, barulah transformasi kamera dan proyeksi akan dibahas lebih lanjut. Karena itu, pada slide ini kita fokus pada bagaimana objek itu sendiri dapat bergerak, berputar, dan berubah ukuran.

Kemampuan yang harus dibangun dalam program WebGL antara lain:

- **Translation** untuk memindahkan objek pada sumbu `x`, `y`, atau `z`.
- **Rotation** untuk memutar objek sekitar sumbu tertentu.
- **Scaling** untuk memperbesar atau memperkecil objek.
- **Penggabungan transformasi** menjadi satu **Model Matrix** yang utuh.
- **Input pengguna** untuk mengubah parameter transformasi secara interaktif.
- **Animasi** menggunakan `requestAnimationFrame()` agar perubahan terjadi berulang setiap frame.

Perlu dipahami bahwa urutan penggabungan matriks sangat menentukan hasil visual. Misalnya, memutar objek lalu memindahkannya akan menghasilkan perilaku yang berbeda dibandingkan memindahkan objek lalu memutarinya. Karena itu, praktikum ini melatih mahasiswa berpikir dalam urutan transformasi, bukan hanya membuat satu matriks secara terpisah.

Fokus utama praktikum ini adalah **matrix-based transformation**, bukan sekadar menggeser koordinat vertex secara manual. Dengan pendekatan matriks, transformasi menjadi lebih rapi, mudah digabungkan, dan sesuai dengan cara kerja program WebGL. Mahasiswa diharapkan mampu melihat hubungan antara input, pembaruan matriks, dan hasil render yang berubah secara real-time.

### Inti yang Harus Ditekankan

- Praktikum ini membangun objek WebGL yang dapat mengalami **translation**, **rotation**, dan **scaling**.
- Transformasi digabungkan menjadi **Model Matrix** yang dipakai oleh program WebGL.
- Perubahan transformasi harus dapat dikendalikan oleh **input pengguna** dan dianimasikan dengan `requestAnimationFrame()`.
- Urutan penggabungan matriks menentukan hasil akhir transformasi.
- Fokus slide ini adalah transformasi model berbasis matriks, sebelum masuk ke detail View Matrix dan Projection Matrix.

### Transisi ke Slide Berikutnya

Setelah memahami tujuan praktikum, kita lanjut ke rencana tahapan kerja yang akan memandu mahasiswa membangun program secara bertahap.

---

## Slide 046 - Rencana Praktikum

### Narasi

Pada tahap ini, kita merancang alur kerja praktikum agar mahasiswa tidak hanya membuat objek WebGL yang diam, tetapi membangun sistem transformasi yang dapat dikendalikan. Fokusnya adalah **matrix-based transformation**, yaitu representasi transformasi geometri menggunakan matriks yang kemudian dikirim ke GPU melalui shader.

Tahapan yang perlu diikuti adalah:

1. Gunakan `geometry P2` sebagai objek dasar yang akan ditransformasikan.
2. Tambahkan `matrix utility` untuk operasi matriks seperti pembuatan dan perkalian matriks.
3. Buat **Translation Matrix** untuk menggeser objek pada ruang model.
4. Buat **Rotation Matrix** untuk memutar objek terhadap sumbu tertentu.
5. Buat **Scaling Matrix** untuk memperbesar atau memperkecil objek.
6. Gabungkan ketiga matriks tersebut menjadi **Model Matrix**.
7. Kirim `Model Matrix` ke shader melalui `uniform`.
8. Tambahkan `animation` agar objek dapat bergerak atau berputar secara otomatis.
9. Tambahkan `keyboard/mouse control` agar transformasi dapat dikendalikan secara interaktif.

Dalam pipeline rendering, `Model Matrix` berperan mengubah koordinat objek dari ruang model ke ruang yang lebih siap diproses oleh kamera dan proyeksi. Urutan penggabungan matriks sangat penting karena transformasi pada grafika komputer umumnya tidak komutatif; misalnya, rotasi lalu translasi dapat menghasilkan posisi akhir yang berbeda dari translasi lalu rotasi. Karena itu, mahasiswa perlu memperhatikan urutan perkalian matriks dan bagaimana nilai transformasi diperbarui setiap frame.

Detail teknis implementasi tersedia pada modul praktikum. Pada tahap ini, yang utama adalah memastikan mahasiswa memahami alur: objek geometri, matriks transformasi, pengiriman ke GPU, animasi, dan kontrol pengguna.

### Inti yang Harus Ditekankan

- Praktikum ini membangun **Model Matrix** dari `Translation Matrix`, `Rotation Matrix`, dan `Scaling Matrix`.
- `Model Matrix` dikirim ke shader melalui `uniform`, sehingga transformasi diproses pada GPU.
- Urutan transformasi memengaruhi hasil akhir karena operasi matriks tidak selalu komutatif.
- Interaktivitas dan animasi menunjukkan bahwa transformasi dapat diperbarui setiap frame menggunakan input pengguna dan `requestAnimationFrame()`.

### Transisi ke Slide Berikutnya

Setelah alur kerja ini dipahami, kita akan melihat bentuk output minimal yang diharapkan dari praktikum, yaitu objek WebGL yang dapat ditranslate, dirotasi, diskalakan, dianimasikan, dan menampilkan parameter transformasinya.

---

## Slide 047 - Output Praktikum

### Narasi

Pada tahap ini, kita menilai apakah praktikum sudah mencapai bentuk akhir yang minimal namun bermakna secara grafika komputer. Output yang diharapkan bukan sekadar objek yang bergerak di layar, tetapi objek yang benar-benar dikendalikan oleh **Model Matrix** sehingga setiap perubahan transformasi dapat dijelaskan secara matematis dan visual.

Aplikasi minimal yang dimaksud memiliki beberapa komponen utama:

- **satu object dengan `Model Matrix`**, artinya geometri objek berada pada ruang lokal dan dipetakan ke ruang dunia melalui matriks model;
- **translation interaktif**, yaitu posisi objek dapat diubah oleh pengguna, misalnya melalui keyboard atau mouse;
- **rotation interaktif**, yaitu orientasi objek dapat diputar pada sumbu tertentu;
- **scaling interaktif**, yaitu ukuran objek dapat diperbesar atau diperkecil;
- **kombinasi transform**, yaitu beberapa transformasi digabungkan menjadi satu matriks model yang utuh;
- **satu animasi otomatis**, misalnya rotasi atau gerakan berulang yang berjalan berdasarkan waktu;
- **tampilan parameter transform**, sehingga mahasiswa dapat melihat nilai `translation`, `rotation`, dan `scaling` secara langsung;
- **demonstrasi bahwa urutan transformasi menghasilkan hasil berbeda**, karena komposisi matriks tidak bersifat komutatif.

Poin penting yang perlu dipahami adalah bahwa `Model Matrix` bukan hanya kumpulan angka, tetapi representasi dari bagaimana objek ditempatkan, diorientasikan, dan diukur dalam scene. Dalam pipeline rendering, matriks ini biasanya dikirim ke GPU sebagai `uniform` dan digunakan pada tahap vertex processing untuk mengubah koordinat vertex dari ruang lokal menuju ruang dunia.

Dengan adanya parameter yang ditampilkan, mahasiswa tidak hanya melihat objek bergerak, tetapi juga dapat mengaitkan perubahan visual dengan nilai transformasi. Misalnya, ketika nilai translasi bertambah, objek bergeser; ketika sudut rotasi berubah, orientasi objek berubah; dan ketika faktor skala berubah, ukuran objek berubah. Hubungan antara input, matriks, dan hasil visual inilah yang menjadi inti praktikum.

Demonstrasi urutan transformasi menjadi bagian yang sangat penting. Jika kita melakukan translasi lalu rotasi, hasilnya dapat berbeda dengan rotasi lalu translasi. Hal ini menunjukkan bahwa komposisi transformasi harus direncanakan dengan benar, karena urutan perkalian matriks menentukan posisi akhir objek.

Sebelum melanjutkan, mahasiswa perlu memastikan bahwa aplikasi sudah mampu menunjukkan bahwa transformasi bukan sekadar efek visual, melainkan proses matematis yang terstruktur dan dapat dikomposisikan.

### Inti yang Harus Ditekankan

- Output praktikum harus menunjukkan **satu objek** yang dikendalikan oleh **`Model Matrix`**, bukan hanya animasi visual tanpa dasar transformasi.
- `translation`, `rotation`, dan `scaling` harus dapat dikontrol secara interaktif, ditampilkan parameternya, dan digabungkan menjadi satu transformasi model.
- Urutan transformasi harus didemonstrasikan karena komposisi matriks **tidak komutatif**, sehingga `T × R × S` dapat menghasilkan hasil yang berbeda dari urutan lain.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan merangkum alur utama dari geometri lokal menuju ruang dunia, serta mengingat kembali mengapa matriks, koordinat homogen, dan urutan transformasi menjadi fondasi penting dalam grafika komputer.

---

## Slide 048 - Ringkasan Pertemuan

### Narasi

Kita menutup pertemuan ini dengan melihat alur utama dari geometri lokal menuju **World Space**.

```text
Local Geometry
     ↓
Translation
Rotation
Scaling
     ↓
Matrix
     ↓
Model Matrix
     ↓
World Space
```

Alur ini penting karena dalam rendering, objek tidak langsung digambar pada posisi akhirnya. Objek dimulai sebagai **Local Geometry**, yaitu bentuk dasar objek dalam koordinatnya sendiri. Setelah itu, objek mengalami **Translation**, **Rotation**, dan **Scaling** untuk dipindahkan, diputar, dan diubah ukurannya. Operasi-operasi tersebut biasanya direpresentasikan sebagai **matrix**, lalu digabungkan menjadi **Model Matrix** yang membawa objek dari ruang lokal ke **World Space**.

Dalam praktik, **matrix** memudahkan **transform composition** karena beberapa transformasi dapat digabungkan menjadi satu operasi. **Homogeneous coordinate** memungkinkan **translation** direpresentasikan dalam bentuk matrix, sehingga `translation`, `rotation`, dan `scaling` dapat ditangani secara seragam. Namun, urutan penggabungan matrix sangat menentukan hasil akhir, karena transformasi geometri umumnya tidak komutatif.

Sebelum lanjut ke tahap berikutnya, mahasiswa perlu memahami bahwa **Model Matrix** adalah jembatan antara objek dan dunia. Tanpa pemahaman ini, sulit memahami bagaimana kamera, proyeksi, dan pipeline rendering mengubah objek menjadi gambar di layar.

### Inti yang Harus Ditekankan

- **Model Matrix** menggabungkan transformasi objek dari **Local Geometry** ke **World Space**.
- **Matrix** dan **homogeneous coordinate** membuat transformasi seperti `translation`, `rotation`, dan `scaling` dapat digabungkan secara efisien.
- **Urutan matrix** menentukan hasil akhir transformasi, sehingga urutan operasi tidak boleh dianggap sepele.

### Transisi ke Slide Berikutnya

Dengan dasar transformasi dan koordinat ini, pertemuan berikutnya akan melanjutkan ke **Camera, Projection & 3D**, yaitu bagaimana objek di dunia kemudian dilihat, diproyeksikan, dan ditampilkan ke layar.

---

## Slide 049 - TERIMA KASIH

### Narasi

Dengan ini kita menutup pertemuan ketiga pada materi **Transformation & Coordinate System**. Pada pertemuan ini, kita telah membahas bagaimana objek geometri diposisikan, diputar, dan diubah ukurannya menggunakan **transformasi** serta **matrix**. Poin pentingnya adalah bahwa transformasi tidak berdiri sendiri, tetapi menjadi bagian dari alur rendering yang lebih besar: dari geometri lokal, melalui **model matrix**, menuju **world space**.

Pemahaman ini penting karena sebelum sebuah objek dapat ditampilkan oleh kamera, objek tersebut harus memiliki posisi yang jelas dalam ruang dunia. Tanpa transformasi yang benar, objek bisa berada di posisi yang salah, berputar tidak sesuai, atau bahkan tidak terlihat oleh kamera. Jadi, konsep yang kita bahas hari ini menjadi dasar bagi tahap berikutnya dalam pipeline rendering.

Untuk pertemuan berikutnya, kita akan melanjutkan ke topik **Camera, Projection & 3D**. Di sana, kita akan melihat bagaimana objek yang sudah berada di **world space** kemudian dilihat oleh kamera, diproyeksikan ke layar, dan akhirnya menjadi gambar 2D yang dapat dirender. Dengan kata lain, transformasi yang kita pelajari hari ini akan menjadi jembatan menuju pemahaman kamera dan proyeksi.

### Inti yang Harus Ditekankan

- **Transformasi** dan **matrix** adalah dasar untuk memposisikan objek dalam ruang 3D.
- **World space** menjadi titik penting sebelum objek diproses oleh kamera.
- Pertemuan berikutnya akan membahas **Camera, Projection & 3D** sebagai lanjutan dari alur rendering.

### Transisi ke Slide Berikutnya

Terima kasih atas partisipasinya. Pada pertemuan berikutnya, kita akan melanjutkan dari **world space** menuju **camera space**, lalu melihat bagaimana objek 3D diproyeksikan ke layar melalui konsep **camera** dan **projection**.
