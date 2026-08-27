# Narasi Grafika Komputer - Pertemuan 10

## Blender Materials, UV & Texturing

Sumber: markdown/pert10-ringkas.md

---

## Slide 000 - Cover

### Narasi

Selamat datang pada **Pertemuan 10** mata kuliah `EF234504 — Grafika Komputer`, yang disampaikan oleh **Dr. Darlis Herumurti** dari **Departemen Teknik Informatika**. Pada pertemuan ini, kita akan membahas **Blender Materials, UV & Texturing**, yaitu bagian dari pipeline rendering yang menentukan bagaimana permukaan objek 3D tampak ketika disinari, dilihat, dan dirender.

Materi ini penting karena objek 3D tidak hanya ditentukan oleh bentuk geometrinya. Setelah mesh, transformasi, dan kamera sudah siap, tampilan akhir sangat dipengaruhi oleh **material**, **texture**, dan cara texture dipetakan ke permukaan. Dalam konteks Blender, kita akan melihat bagaimana material dan texture membantu objek terlihat lebih realistis, konsisten, dan siap digunakan dalam rendering real-time maupun offline.

Pada pertemuan ini, kita juga akan mulai membangun intuisi tentang **UV mapping**, yaitu proses memberi “koordinat 2D” pada permukaan mesh agar texture dapat ditempelkan dengan benar. Konsep ini menjadi dasar sebelum kita membahas lebih lanjut tentang **seam**, **unwrap**, **UV island**, **distortion**, serta parameter material seperti **Base Color**, **Roughness**, **Metallic**, **Normal Map**, dan **Emission**.

Sebelum masuk ke detail teknis, hal utama yang perlu dipahami adalah bahwa texturing bukan sekadar menempelkan gambar pada objek. Texture adalah data visual yang harus dipetakan secara spasial ke permukaan geometri, lalu diinterpretasikan oleh material dan shader untuk menghasilkan warna, kekasaran, metalik, normal, dan efek visual lainnya.

### Inti yang Harus Ditekankan

- **Blender Materials, UV & Texturing** adalah tahap penting setelah geometri dan transformasi, karena menentukan tampilan visual objek 3D.
- **Material** mengatur bagaimana permukaan bereaksi terhadap cahaya, sedangkan **texture** menyediakan detail visual seperti warna, pola, dan permukaan.
- **UV mapping** adalah proses memetakan permukaan 3D ke koordinat 2D agar texture dapat ditempatkan dengan benar.
- Pertemuan ini menjadi pengantar menuju konsep **PBR workflow**, **seam**, **unwrap**, **UV island**, dan parameter material seperti **Base Color**, **Roughness**, **Metallic**, **Normal Map**, dan **Emission**.

### Transisi ke Slide Berikutnya

Setelah pembuka ini, kita akan melihat daftar topik yang akan dibahas pada pertemuan ini, mulai dari material di Blender, texture, UV mapping, hingga praktikum UV dan PBR material.

---

## Slide 001 - Topik Pembahasan

### Narasi

Setelah membuka pertemuan, kita langsung melihat peta topik yang akan dibahas pada materi **Blender Materials, UV & Texturing**. Fokus utamanya adalah bagaimana objek 3D tidak hanya memiliki bentuk geometri, tetapi juga tampilan permukaan yang realistis melalui **material**, **texture**, dan **UV mapping**. Dalam alur rendering, material menentukan bagaimana cahaya berinteraksi dengan permukaan, sedangkan texture dan UV mapping menentukan bagaimana informasi visual seperti warna, kekasaran, metalik, normal, dan emisi dipetakan ke permukaan mesh.

Daftar istilah pada slide ini dapat dikelompokkan menjadi tiga alur utama:

- **Material PBR di Blender**: mencakup `Principled BSDF`, `Base Color`, `Roughness`, `Metallic`, `Normal Map`, `Emission`, dan `PBR Workflow`. Kelompok ini menjelaskan bagaimana material dibuat secara fisik dan bagaimana parameter material memengaruhi hasil render.
- **UV Mapping**: mencakup `Seam`, `Unwrap`, `UV Island`, `UV Distortion`, `Checker Texture`, dan `Texel Density`. Kelompok ini menjelaskan bagaimana permukaan 3D “dibentangkan” ke bidang 2D agar texture dapat ditempelkan secara konsisten dan terukur.
- **Praktikum**: `UV & PBR Material`, yaitu penerapan langsung konsep material PBR dan pemetaan UV pada asset 3D di Blender.

Alur ini penting karena mahasiswa perlu memahami bahwa texture tidak otomatis menempel rapi pada objek 3D. Diperlukan proses **UV mapping** yang baik agar texture tidak terlalu melar, tidak pecah, dan memiliki resolusi yang cukup. Dengan memahami konsep ini, kita akan lebih siap membahas capaian pembelajaran dan kemudian masuk ke penjelasan material serta praktikum.

### Inti yang Harus Ditekankan

- **Material** bukan hanya warna, tetapi parameter yang mengatur interaksi cahaya dengan permukaan objek.
- `Principled BSDF` adalah node material utama dalam alur **PBR** di Blender.
- **UV mapping** berfungsi memetakan permukaan 3D ke koordinat 2D agar texture dapat diterapkan secara konsisten.
- `Seam`, `Unwrap`, `UV Island`, `UV Distortion`, dan `Texel Density` sangat memengaruhi kualitas hasil texture.
- `Base Color`, `Roughness`, `Metallic`, `Normal Map`, dan `Emission` adalah channel material PBR yang akan dipraktikkan.

### Transisi ke Slide Berikutnya

Dengan peta topik ini, kita lanjut ke capaian pembelajaran untuk melihat kemampuan apa yang harus dimiliki mahasiswa setelah menyelesaikan materi pertemuan ini.

---

## Slide 002 - Capaian Pembelajaran

### Narasi

Sebelum masuk ke praktik, penting untuk memahami apa yang diharapkan dari pertemuan ini. Capaian pembelajaran di sini bukan sekadar daftar tugas, tetapi gambaran kemampuan yang harus dimiliki mahasiswa setelah mengerjakan materi **Blender Materials, UV & Texturing**. Intinya, mahasiswa tidak hanya diminta membuat objek terlihat berwarna, tetapi juga memahami bagaimana warna, kekasaran, metalik, normal, dan emission bekerja dalam sistem material 3D.

Dalam grafika komputer, **material** menentukan bagaimana permukaan objek berinteraksi dengan cahaya. Objek 3D pada dasarnya masih berupa geometri, tetapi material yang membuatnya tampak seperti kayu, logam, plastik, kain, atau permukaan yang memancarkan cahaya. Di Blender, salah satu node utama yang akan kita gunakan adalah **`Principled BSDF`**, karena node ini menyediakan parameter material yang mendekati model fisika-based rendering.

Agar texture dapat menempel dengan benar ke permukaan objek, kita perlu memahami **UV Mapping**. Proses ini mengubah permukaan 3D menjadi koordinat 2D, sehingga gambar texture dapat dipetakan secara konsisten. Mahasiswa perlu mampu menentukan **`seam`**, melakukan **`unwrap`**, mengatur **`UV island`**, serta mengevaluasi **`distortion`** dan **`texel density`**. Hal ini penting karena kualitas UV sangat memengaruhi hasil akhir texture, terutama saat objek dirender.

Selain UV, mahasiswa juga perlu memahami penggunaan texture map PBR, yaitu **`Base Color`**, **`Roughness`**, **`Metallic`**, **`Normal`**, dan **`Emission`**. Dalam rendering pipeline, texture map ini menjadi input shader yang membantu menentukan warna dasar, tingkat kekasaran, sifat metalik, detail permukaan, dan cahaya yang dipancarkan. Dengan demikian, mahasiswa tidak hanya memasang gambar ke objek, tetapi juga mengintegrasikannya ke dalam **material PBR** yang lebih realistis dan konsisten.

### Inti yang Harus Ditekankan

- **Material** bukan hanya warna, tetapi cara permukaan objek berinteraksi dengan cahaya.
- **`Principled BSDF`** adalah node utama untuk membangun material PBR di Blender.
- **UV Mapping** adalah jembatan antara permukaan 3D dan texture 2D.
- **`Seam`**, **`unwrap`**, dan **`UV island`** menentukan apakah texture dapat dipetakan dengan rapi.
- **`Distortion`** dan **`texel density`** memengaruhi kualitas visual texture pada render.
- Texture map seperti **`Base Color`**, **`Roughness`**, **`Metallic`**, **`Normal`**, dan **`Emission`** harus dipahami sebagai bagian dari material PBR, bukan sekadar gambar tambahan.

### Transisi ke Slide Berikutnya

Dengan capaian ini, kita dapat melihat posisi materi dalam alur pertemuan. Pertemuan sebelumnya membahas pemodelan 3D, sedangkan pertemuan ini menggunakan model tersebut sebagai input untuk UV Mapping, material, texture, dan PBR. Setelah itu, materi akan berlanjut ke lighting, kamera, dan rendering.

---

## Slide 003 - Posisi Materi

### Narasi

Pada pertemuan ke-10 ini, kita berada tepat setelah tahap pembentukan bentuk objek. Pada pertemuan sebelumnya, fokus utamanya adalah **`3D Modeling`**, yaitu membangun model 3D yang memiliki bentuk dasar. Hasil dari tahap tersebut menjadi dasar bagi pembahasan kali ini.

Posisi materi pertemuan ini dapat dilihat sebagai tahap penampakan permukaan. Kita akan membahas **`UV Mapping`**, **`Material`**, **`Texture`**, dan **`PBR`**. Keempat topik ini saling terkait karena model dari pertemuan 9 digunakan sebagai input utama. Tanpa pemetaan UV, tekstur sulit ditempatkan secara konsisten pada permukaan. Tanpa material, objek hanya memiliki bentuk tetapi belum memiliki sifat visual yang lengkap.

Secara alur, pertemuan ini berada di antara pemodelan dan tahap akhir visualisasi. Pertemuan 11 akan membahas **`Lighting`**, **`Camera`**, dan **`Rendering`**, yang membutuhkan model yang sudah memiliki penampakan permukaan. Dengan memahami posisi ini, kita dapat melihat bahwa grafika komputer tidak hanya membangun bentuk, tetapi juga menentukan bagaimana bentuk tersebut terlihat ketika dirender.

### Inti yang Harus Ditekankan

- Pertemuan 10 melanjutkan dari **`3D Modeling`** pada pertemuan 9.
- Fokus utama adalah **`UV Mapping`**, **`Material`**, **`Texture`**, dan **`PBR`** untuk memberi karakter visual pada permukaan objek.
- Model dari pertemuan 9 menjadi input, sehingga tahap ini menghubungkan geometri dengan tampilan akhir sebelum **`Lighting`**, **`Camera`**, dan **`Rendering`**.

### Transisi ke Slide Berikutnya

Setelah posisi materi jelas, kita masuk ke pertanyaan berikutnya: bagaimana model 3D yang hanya mendefinisikan **`Shape`** dapat memiliki karakter visual? Untuk itu, kita akan melihat hubungan antara **`Geometry`**, **`Material`**, dan **`Texture`** dalam membentuk **`Surface Appearance`**.

---

## Slide 004 - Dari Geometry ke Surface Appearance

### Narasi

Pada pertemuan sebelumnya, kita sudah memiliki model 3D yang terbentuk dari **`Geometry`**. Geometry menentukan **`Shape`** objek, yaitu bentuk dasar yang bisa dilihat dari struktur vertex, edge, dan face. Namun, dalam grafika komputer, bentuk saja belum cukup untuk membuat objek terasa nyata atau memiliki identitas visual.

Pada slide, `Shape` ditulis sebagai hasil dari model 3D, lalu `Geometry + Material + Texture` menunjukkan kombinasi yang dibutuhkan agar objek memiliki karakter visual. **`Material`** mengatur bagaimana permukaan objek berinteraksi dengan cahaya, sedangkan **`Texture`** membantu memberikan detail permukaan seperti pola, warna, atau variasi material. Dengan kombinasi ini, objek yang sama secara bentuk dapat terlihat seperti kayu, logam, plastik, kulit, atau kain.

Fokus pertemuan ini adalah **`Surface Appearance`**, yaitu bagaimana permukaan objek ditampilkan setelah geometri diproses. Dalam rendering pipeline, setelah objek ditransformasi dan dirasterisasi, tahap fragment atau shader akan menggunakan informasi material dan texture untuk menentukan warna serta tampilan akhir setiap piksel.

Sebelum masuk ke detail teknis, kita perlu memahami bahwa model 3D dari pertemuan sebelumnya menjadi input utama. Dari sinilah kita akan membangun tampilan permukaan, bukan hanya bentuknya.

### Inti yang Harus Ditekankan

- **`Geometry`** menentukan **`Shape`** objek, tetapi belum menentukan bagaimana objek terlihat secara visual.
- **`Material`** dan **`Texture`** berperan penting dalam membentuk **`Surface Appearance`**.
- Tampilan permukaan objek bergantung pada cara material dan texture digunakan dalam proses rendering.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan membahas apa itu material secara lebih spesifik, yaitu kumpulan parameter yang menentukan bagaimana permukaan objek bereaksi terhadap cahaya.

---

## Slide 005 - Apa Itu Material?

### Narasi

Setelah model 3D memiliki bentuk, langkah berikutnya adalah memberi karakter visual pada permukaannya. Bentuk atau **geometry** menentukan siluet dan struktur objek, tetapi tampilan akhir yang kita lihat sangat dipengaruhi oleh **material**. Material adalah kumpulan parameter yang menentukan bagaimana permukaan objek bereaksi terhadap cahaya.

Dalam rendering, material berperan pada tahap **shading** atau pencahayaan. Setelah posisi objek, kamera, dan geometri sudah diproses, renderer perlu menghitung warna setiap titik pada permukaan. Material memberikan informasi tentang sifat permukaan tersebut, misalnya apakah permukaannya gelap atau terang, halus atau kasar, memantulkan cahaya seperti logam, atau memancarkan cahaya sendiri.

Beberapa parameter utama yang dapat dikontrol oleh material antara lain:

- **warna** atau `base color`, yaitu warna dasar permukaan;
- **kekasaran** atau `roughness`, yang memengaruhi sebaran pantulan cahaya;
- **sifat metalik** atau `metallic`, yang menentukan apakah permukaan berperilaku seperti logam;
- **normal**, yaitu arah permukaan yang memengaruhi bagaimana cahaya dipantulkan;
- **emission**, yaitu kemampuan permukaan memancarkan cahaya;
- **transparency**, yaitu tingkat tembus pandang permukaan;
- **texture**, yaitu peta visual yang menambah detail seperti pola, bintik, atau variasi permukaan.

Parameter-parameter ini penting karena material memungkinkan objek yang sama secara geometri tampak berbeda. Sebuah kubus dapat terlihat seperti plastik, logam, kaca, atau kain hanya dengan mengubah materialnya. Dengan kata lain, material adalah lapisan informasi visual yang membuat model 3D terasa lebih nyata.

Pada tahap ini, kita cukup memahami material sebagai penghubung antara geometri dan hasil akhir rendering. Detail implementasinya, khususnya di Blender, akan kita bahas pada slide berikutnya.

### Inti yang Harus Ditekankan

- **Material** menentukan bagaimana permukaan objek bereaksi terhadap cahaya.
- Material memisahkan **geometry** dari tampilan visual akhir.
- Parameter seperti `base color`, `roughness`, `metallic`, `normal`, `emission`, `transparency`, dan `texture` menjadi dasar pengendalian permukaan.
- Objek dengan geometri sama dapat memiliki tampilan berbeda jika materialnya berbeda.

### Transisi ke Slide Berikutnya

Setelah memahami apa itu material, kita akan masuk ke cara material direpresentasikan di Blender, khususnya melalui sistem node dan `Principled BSDF`.

---

## Slide 006 - Material di Blender

### Narasi

Kita masuk ke representasi material di Blender. Sebelumnya, material dipahami sebagai kumpulan parameter yang memengaruhi bagaimana permukaan object bereaksi terhadap cahaya. Di Blender, parameter tersebut tidak hanya berupa daftar nilai biasa, melainkan disusun dalam **node-based material system**. Artinya, material dibangun seperti rangkaian blok kecil yang saling terhubung.

Node yang menjadi titik awal paling umum adalah:

```text
Principled BSDF
```

Node ini penting karena menyediakan **workflow PBR** yang praktis dan terintegrasi. Dalam grafika komputer, PBR membantu kita mendefinisikan material dengan cara yang lebih konsisten secara fisika, sehingga hasil render lebih stabil ketika kamera, pencahayaan, atau sudut pandang berubah.

Secara sederhana, alurnya dapat dibayangkan sebagai berikut:

1. Object memiliki material.
2. Material ditampilkan sebagai rangkaian node.
3. Node `Principled BSDF` menjadi pusat pengaturan tampilan permukaan.
4. Hasil dari node tersebut digunakan Blender untuk menampilkan permukaan object pada proses rendering.

Yang perlu kita pahami di sini bukan langsung menghafal semua parameter, tetapi memahami bahwa `Principled BSDF` adalah "gerbang" utama untuk mengatur warna, kekasaran, metalik, normal, emission, dan sifat permukaan lainnya. Dengan node ini, Blender menyediakan dasar yang rapi sebelum kita masuk ke parameter spesifik.

Sebelum lanjut, mahasiswa perlu menyadari bahwa material di Blender bersifat visual dan interaktif: kita dapat melihat hubungan antar node, memodifikasi nilai, dan langsung melihat efeknya pada permukaan object. Hal ini berguna untuk memahami bagaimana material terhubung dengan tahap shading dan pencahayaan dalam rendering pipeline.

### Inti yang Harus Ditekankan

- Blender menggunakan **node-based material system**, bukan hanya daftar parameter terpisah.
- Node utama yang paling sering digunakan adalah `Principled BSDF`.
- `Principled BSDF` menyediakan **workflow PBR** yang praktis dan terintegrasi.
- Slide ini adalah pengantar: fokusnya memahami posisi node dalam material, belum detail parameter.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan membuka node `Principled BSDF` dan melihat parameter-parameter penting seperti `Base Color`, `Roughness`, `Metallic`, `Normal`, dan `Emission` yang menjadi fokus pada pertemuan ini.

---

## Slide 007 - Principled BSDF

### Narasi

Pada slide sebelumnya, kita sudah melihat bahwa material di Blender dibangun dengan node, dan node yang paling sering menjadi pusat adalah **`Principled BSDF`**. Node ini penting karena ia menjadi representasi material dalam pipeline rendering: setelah geometri diproses dan fragment pada layar ditentukan, shader material akan menghitung bagaimana cahaya berinteraksi dengan permukaan. **`Principled BSDF`** menyediakan parameter yang sudah dekat dengan perilaku material dunia nyata, sehingga kita tidak perlu langsung membangun model refleksi dari nol.

Parameter yang sering digunakan pada **`Principled BSDF`** meliputi:

- **`Base Color`**
- **`Metallic`**
- **`Roughness`**
- **`IOR`**
- **`Alpha`**
- **`Normal`**
- **`Emission`**

Namun untuk **Fokus P10**, kita membatasi pembahasan pada lima parameter berikut:

```text
Base Color
Roughness
Metallic
Normal
Emission
```

**`Base Color`** menentukan warna dasar permukaan ketika material menerima cahaya. Secara intuitif, ini adalah warna material sebelum efek refleksi, kekasaran, atau pencahayaan tertentu mengubahnya. Dalam konteks PBR, **`Base Color`** biasanya mewakili warna albedo atau warna diffuse material.

**`Roughness`** mengatur seberapa halus atau kasar permukaan. Nilai rendah membuat permukaan tampak lebih glossy atau smooth, sehingga highlight cahaya lebih tajam. Nilai tinggi membuat permukaan tampak lebih matte atau diffuse, sehingga cahaya tersebar lebih lembut. Parameter ini penting karena menentukan karakter material seperti plastik, kayu, kulit, atau logam yang tergores.

**`Metallic`** membedakan material logam dari material non-logam. Pada material non-logam, nilai **`Metallic`** biasanya `0`, sedangkan pada material logam, nilai **`Metallic`** mendekati `1`. Perbedaan ini memengaruhi bagaimana warna, refleksi, dan energi cahaya dipantulkan. Dalam model PBR, logam tidak memiliki diffuse color yang sama dengan material non-logam; oleh karena itu parameter ini membantu shader memilih perilaku refleksi yang lebih tepat.

**`Normal`** digunakan untuk memodifikasi arah normal permukaan. Normal permukaan adalah arah yang menentukan bagaimana cahaya dipantulkan atau diterima pada titik tertentu. Dengan input **`Normal`**, kita dapat membuat permukaan tampak bergelombang, berpori, atau memiliki detail kecil tanpa harus menambah banyak geometri. Ini penting untuk efisiensi rendering karena detail visual dapat dihasilkan pada tahap shading, bukan hanya pada tahap geometri.

**`Emission`** membuat permukaan memancarkan cahaya sendiri. Parameter ini berguna untuk material seperti neon, layar, lampu, atau objek yang tampak menyala. Dalam pipeline rendering, emission menambah kontribusi cahaya dari material itu sendiri, sehingga objek tidak hanya bergantung pada cahaya lingkungan atau light source eksternal.

Perlu dicatat bahwa **`IOR`** dan **`Alpha`** juga tersedia pada **`Principled BSDF`**, tetapi bukan fokus utama pertemuan ini. **`IOR`** berkaitan dengan indeks bias material, sedangkan **`Alpha`** berkaitan dengan transparansi atau opacity. Keduanya penting untuk material tertentu, tetapi untuk membangun pemahaman dasar PBR, kita lebih dahulu menguasai **`Base Color`**, **`Roughness`**, **`Metallic`**, **`Normal`**, dan **`Emission`**.

Sebelum lanjut, yang perlu dipahami adalah bahwa **`Principled BSDF`** bukan sekadar kumpulan slider warna. Ia adalah representasi material yang menghubungkan geometri, pencahayaan, dan shader. Dengan parameter ini, kita dapat membedakan material secara visual dan fisika: warna dasar, kekasaran permukaan, sifat logam, detail normal, dan kemampuan memancarkan cahaya.

### Inti yang Harus Ditekankan

- **`Principled BSDF`** adalah node material utama dalam workflow PBR di Blender.
- **`Base Color`**, **`Roughness`**, **`Metallic`**, **`Normal`**, dan **`Emission`** adalah parameter inti yang harus dipahami pada pertemuan ini.
- Parameter tersebut menentukan bagaimana cahaya berinteraksi dengan permukaan, bukan hanya mengubah warna secara manual.
- **`Normal`** memungkinkan detail permukaan tanpa menambah geometri, sedangkan **`Emission`** membuat material dapat menyala sendiri.

### Transisi ke Slide Berikutnya

Setelah kita memahami parameter material pada **`Principled BSDF`**, langkah berikutnya adalah melihat bagaimana parameter-parameter ini dapat dikendalikan oleh texture. Texture akan memungkinkan warna, roughness, metallic, normal, dan emission bervariasi di permukaan, sehingga material menjadi lebih realistis dan fleksibel.

---

## Slide 008 - Apa Itu Texture?

### Narasi

Setelah kita melihat parameter pada **Principled BSDF**, ada satu pertanyaan penting: dari mana nilai **Base Color**, **Roughness**, **Metallic**, **Normal**, dan **Emission** itu berasal? Jawabannya sering kali adalah **texture**.

**Texture** adalah data image atau pola yang digunakan untuk memengaruhi **surface** objek. Dalam grafika komputer, texture tidak selalu berarti “gambar yang ditempelkan” ke objek. Ia bisa berupa informasi visual yang dibaca oleh material atau shader untuk menentukan bagaimana permukaan terlihat.

Secara sederhana, texture berperan sebagai sumber nilai yang dapat bervariasi di setiap titik permukaan. Tanpa texture, satu material biasanya memiliki nilai yang seragam. Dengan texture, nilai tersebut bisa berubah-ubah sesuai pola, sehingga permukaan tampak lebih detail dan realistis.

Pada bagian ini, kita perlu memahami bahwa texture dapat mengontrol beberapa properti permukaan, bukan hanya warna:

- **warna**, misalnya untuk **Base Color**;
- **roughness**, untuk mengatur kekasaran permukaan;
- **metallic**, untuk menentukan seberapa metalik suatu material;
- **normal**, untuk memengaruhi arah pencahayaan pada permukaan;
- **emission**, untuk membuat permukaan memancarkan cahaya;
- **mask**, untuk mengatur area tertentu agar suatu properti aktif atau tidak.

Dalam pipeline rendering, texture biasanya dibaca pada tahap shading atau fragment processing. Setiap titik yang akan dirender meminta nilai dari texture berdasarkan posisinya pada permukaan, lalu nilai itu digunakan untuk menghitung warna akhir, refleksi, atau efek material lainnya. Karena itu, texture menjadi jembatan antara data gambar dan perilaku visual objek.

Hal penting yang harus dipahami sebelum lanjut adalah: texture adalah **data pengendali surface**, bukan sekadar gambar dekoratif. Ia memberi variasi spasial pada material, sehingga satu objek bisa memiliki detail seperti kayu, logam, kain, atau permukaan yang rusak tanpa harus menambah geometri secara berlebihan.

### Inti yang Harus Ditekankan

- **Texture** adalah data image atau pola yang memengaruhi **surface** objek.
- Texture dapat mengontrol **warna**, **roughness**, **metallic**, **normal**, **emission**, dan **mask**.
- Dalam rendering, texture memberi nilai yang bervariasi di setiap titik permukaan, sehingga material tidak lagi seragam.
- Texture adalah bagian penting dari material PBR karena menghubungkan data gambar dengan parameter shader seperti **Principled BSDF**.

### Transisi ke Slide Berikutnya

Jika texture bisa mengontrol banyak properti, maka satu material tidak selalu cukup dengan satu gambar saja. Selanjutnya kita akan melihat bagaimana satu material PBR dapat menggunakan beberapa texture map, seperti **Base Color Map**, **Roughness Map**, **Metallic Map**, **Normal Map**, dan **Emission Map**, di mana masing-masing menyimpan informasi yang berbeda.

---

## Slide 009 - Texture Bukan Hanya Warna

### Narasi

Dalam material **PBR**, texture tidak selalu hanya berupa gambar warna. Satu material dapat menggunakan beberapa **texture map** secara bersamaan, dan masing-masing map menyimpan informasi yang berbeda tentang bagaimana permukaan berinteraksi dengan cahaya.

```text
Base Color Map
Roughness Map
Metallic Map
Normal Map
Emission Map
```

Secara sederhana, **Base Color Map** menyimpan warna dasar atau albedo permukaan, yaitu warna yang terlihat sebelum efek pencahayaan kuat. **Roughness Map** menyimpan informasi kekasaran, sehingga shader dapat menentukan apakah highlight cahaya tampak tajam atau menyebar. **Metallic Map** menyimpan nilai metalik, yang membantu membedakan permukaan logam dari permukaan non-logam. **Normal Map** menyimpan arah permukaan semu, sehingga detail kecil seperti goresan atau pola dapat terlihat tanpa menambah banyak geometri. **Emission Map** menyimpan area yang memancarkan cahaya sendiri.

Penting untuk dipahami bahwa texture map ini bukan sekadar “gambar yang ditempel”. Dalam pipeline rendering, map-map ini biasanya dibaca oleh shader pada tahap shading. Shader mengambil nilai dari setiap map pada titik yang sama di permukaan, lalu menggabungkannya untuk menghitung warna akhir, refleksi, kekasaran, dan efek cahaya. Karena itu, material PBR bisa terlihat lebih realistis karena sifat-sifat fisika permukaan dipisahkan ke dalam map yang berbeda.

Dari sisi GPU dan shader, pemisahan ini juga membuat material lebih fleksibel. Kita dapat mengganti satu map tanpa mengubah seluruh material, misalnya mengganti `Base Color Map` tetapi tetap mempertahankan `Roughness Map` dan `Normal Map`. Hal ini penting dalam grafika komputer real-time karena memungkinkan variasi visual yang lebih banyak tanpa harus membuat model atau material baru dari awal.

Intinya, ketika kita melihat satu material PBR, kita sedang melihat kumpulan informasi permukaan: warna, kekasaran, metalik, detail normal, dan emisi. Pemahaman ini menjadi dasar sebelum kita masuk ke masalah teknis berikutnya, yaitu bagaimana informasi 2D dari texture map ini dapat dipetakan ke permukaan model 3D.

### Inti yang Harus Ditekankan

- **Texture** dalam material PBR bukan hanya warna, tetapi juga informasi material seperti roughness, metallic, normal, dan emission.
- Setiap **texture map** menyimpan data berbeda yang digunakan shader untuk menghitung pencahayaan permukaan.
- Pemisahan map membuat material lebih realistis, fleksibel, dan efisien dalam rendering pipeline.

### Transisi ke Slide Berikutnya

Sekarang kita sudah tahu bahwa satu material dapat menggunakan beberapa texture map. Pertanyaan berikutnya adalah: bagaimana image 2D ini bisa ditempelkan ke permukaan model 3D? Untuk itu, kita akan masuk ke konsep **UV Mapping**.

---

## Slide 010 - Masalah 2D ke 3D

### Narasi

Setelah kita melihat bahwa satu material PBR dapat menggunakan beberapa texture map, ada satu pertanyaan mendasar yang muncul: bagaimana gambar tekstur yang datar bisa menempel pada permukaan model yang memiliki bentuk tiga dimensi?

```text
Image texture: 2D
Model: 3D
```

Secara sederhana, texture map adalah citra dua dimensi, misalnya peta warna, kekasaran, atau normal map. Citra tersebut memiliki baris dan kolom piksel, sehingga posisinya dijelaskan dengan koordinat bidang. Sebaliknya, model 3D memiliki permukaan yang melengkung, berlipat, atau memiliki sudut, dan posisinya berada dalam ruang tiga dimensi.

Masalahnya adalah GPU tidak bisa secara otomatis menebak piksel mana pada texture yang harus dipakai untuk titik mana pada model. Tanpa aturan pemetaan, tekstur bisa tergeser, tumpang tindih, terpotong, atau tidak konsisten antar vertex. Dalam rendering pipeline, hal ini terjadi sebelum fragment diproses lebih lanjut: setiap titik pada permukaan harus tahu koordinat texture mana yang harus dibaca.

Karena itu, kita membutuhkan cara untuk menghubungkan permukaan 3D dengan bidang 2D. Cara ini sering disebut **texture mapping**, dan dalam praktik grafika komputer, solusinya yang paling umum adalah **UV Mapping**.

Pada tahap ini, kita cukup memahami bahwa UV Mapping adalah jembatan antara tekstur 2D dan model 3D. Ia memberi aturan: bagian mana dari permukaan model harus mengambil bagian mana dari texture. Detail teknisnya, termasuk penamaan koordinat `U` dan `V`, akan kita bahas pada slide berikutnya.

### Inti yang Harus Ditekankan

- Texture map bersifat **2D**, sedangkan model bersifat **3D**.
- Tanpa aturan pemetaan, tekstur tidak dapat menempel secara konsisten pada permukaan model.
- **UV Mapping** adalah solusi untuk menghubungkan permukaan 3D dengan koordinat texture 2D.
- Konsep ini penting karena menentukan bagaimana material, warna, dan detail tekstur dibaca oleh rendering pipeline.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat apa sebenarnya **UV Mapping** dan mengapa koordinat texture disebut `U` dan `V`, bukan `X` dan `Y`.

---

## Slide 011 - Apa Itu UV Mapping?

### Narasi

Ketika kita sudah memiliki image texture, ada satu masalah mendasar: texture hidup di bidang 2D, sedangkan model 3D memiliki permukaan yang membentang di ruang tiga dimensi. **UV Mapping** hadir sebagai cara untuk menjembatani keduanya.

Secara sederhana, **UV Mapping** adalah proses memetakan **surface model 3D** ke **bidang 2D**. Artinya, setiap titik pada permukaan model diberi posisi pada bidang texture, sehingga shader atau renderer tahu bagian mana dari image yang harus diambil untuk warna atau material pada titik tersebut.

Pada bidang 2D ini, koordinat texture tidak disebut `X` dan `Y`, melainkan `U` dan `V`.

```text
U
V
```

Pemilihan nama ini penting. `X` dan `Y` sudah sering dipakai untuk koordinat ruang 3D, misalnya posisi vertex, kamera, atau world space. Dengan memakai `U` dan `V`, kita menegaskan bahwa koordinat ini berada di **texture space**, bukan di ruang geometri 3D.

Dalam konteks rendering pipeline, konsep ini menjadi penting karena rasterisasi dan shading membutuhkan cara yang konsisten untuk mengambil nilai texture dari permukaan. Tanpa UV mapping, renderer tidak punya aturan yang jelas untuk menentukan pixel mana pada image texture yang cocok dengan titik mana pada model 3D.

Intinya, UV mapping bukan sekadar menempelkan gambar ke model. Ia memberi **alamat 2D** pada permukaan 3D, sehingga image texture dapat dibaca secara benar oleh material, shader, dan GPU.

### Inti yang Harus Ditekankan

- **UV Mapping** adalah proses memetakan permukaan model 3D ke bidang 2D.
- Koordinat texture disebut `U` dan `V`, bukan `X` dan `Y`.
- Nama `U` dan `V` digunakan agar tidak tertukar dengan koordinat ruang 3D.
- Konsep ini penting karena memberi posisi 2D pada tiap titik permukaan, sehingga renderer tahu bagian image texture mana yang harus dipakai.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa UV mapping memberi koordinat 2D pada permukaan 3D, pada slide berikutnya kita akan melihat konsep UV secara lebih visual: bagaimana model 3D di-unwrap menjadi 2D UV layout sebelum image texture ditempelkan.

---

## Slide 012 - Konsep UV

### Narasi

Setelah kita mengenal bahwa **UV Mapping** adalah pemetaan permukaan model 3D ke bidang 2D, langkah berikutnya adalah memahami alur kerja konsep UV secara utuh. Dalam rendering, sebuah objek 3D tidak otomatis tahu bagaimana texture harus menempel pada permukaannya. Objek tersebut membutuhkan informasi posisi di bidang 2D agar setiap bagian permukaan dapat mengambil warna atau detail yang tepat dari texture.

```text
3D Model
   ↓
Unwrap
   ↓
2D UV Layout
   ↓
Image Texture
```

Alur ini dibaca dari atas ke bawah. Setiap tahap memiliki peran yang berbeda dalam proses texturing.

1. **3D Model** adalah objek geometri yang memiliki permukaan, biasanya tersusun dari vertex, edge, dan face.
2. **Unwrap** adalah proses “membentangkan” permukaan 3D tersebut menjadi layout 2D.
3. **2D UV Layout** adalah hasil bentangan tersebut, di mana setiap bagian permukaan diberi posisi pada koordinat `U` dan `V`.
4. **Image Texture** adalah gambar 2D yang kemudian dipetakan ke permukaan model berdasarkan posisi UV tersebut.

Inti dari konsep ini adalah **UV space**. Setiap titik pada permukaan model memiliki posisi tertentu di ruang UV. Posisi inilah yang digunakan saat rendering untuk menentukan bagian mana dari texture yang harus ditampilkan pada titik tersebut. Dengan kata lain, UV menjadi jembatan antara geometri 3D dan material 2D.

Konsep ini penting karena kualitas tampilan objek sangat bergantung pada bagaimana permukaan 3D dipetakan ke texture. Jika UV tidak dibuat dengan baik, texture dapat tampak terdistorsi, tumpang tindih, atau tidak berada pada posisi yang sesuai. Sebaliknya, jika UV layout rapi, texture dapat menempel dengan lebih konsisten dan mudah dikendalikan.

Sebelum lanjut ke tahap pengaturan, mahasiswa perlu memahami bahwa **UV bukan koordinat ruang 3D**, melainkan koordinat texture. Koordinat `U` dan `V` berfungsi sebagai alamat posisi pada bidang 2D, sehingga setiap bagian permukaan model dapat merujuk ke bagian tertentu dari image texture.

### Inti yang Harus Ditekankan

- **Unwrap** adalah proses mengubah permukaan 3D menjadi layout 2D.
- **UV space** adalah ruang koordinat 2D yang digunakan untuk menentukan posisi texture pada permukaan model.
- **Image Texture** dipetakan ke model berdasarkan posisi UV, bukan berdasarkan koordinat 3D secara langsung.
- Kualitas UV layout sangat memengaruhi hasil akhir texturing, seperti distorsi, tumpang tindih, dan kesesuaian posisi texture.

### Transisi ke Slide Berikutnya

Setelah memahami alur konsep UV, langkah berikutnya adalah melihat tempat kerja untuk mengatur layout tersebut. Di tahap itu, kita akan masuk ke **UV Editor**, yaitu workspace utama untuk melihat dan mengatur elemen-elemen UV seperti vertex, edge, face, dan island.

---

## Slide 013 - UV Editor

### Narasi

Setelah model 3D di-`unwrap`, langkah berikutnya adalah memeriksa hasil pemetaan tersebut secara langsung. Di Blender, area yang kita gunakan untuk itu adalah **UV Editor**.

**UV Editor** berfungsi sebagai workspace 2D untuk melihat dan mengatur bagaimana permukaan model 3D dipetakan ke ruang UV. Di sini, kita tidak lagi bekerja langsung pada bentuk 3D, tetapi pada representasi 2D dari permukaan tersebut.

Komponen utama yang dapat kita lihat di **UV Editor** adalah:

- **UV vertex**, yaitu titik-titik sudut dari permukaan mesh.
- **UV edge**, yaitu garis yang menghubungkan antar-`vertex`.
- **UV face**, yaitu permukaan 2D yang terbentuk dari kumpulan `edge`.
- **UV island**, yaitu kelompok `face` yang saling terhubung dan biasanya mewakili satu bagian permukaan model.

Area ini menjadi workspace utama saat melakukan `unwrap` karena di sinilah kita dapat memeriksa apakah hasil pemetaan sudah rapi atau belum. Misalnya, kita bisa melihat apakah ada `UV island` yang tumpang tindih, terlalu kecil, terlalu besar, atau berputar pada posisi yang tidak sesuai.

Hal ini penting karena kualitas layout UV akan memengaruhi bagaimana `texture image` dipetakan ke model 3D. Jika layout UV tidak baik, tekstur bisa tampak terdistorsi, terpotong, atau tidak sesuai dengan bagian permukaan yang seharusnya.

Sebelum lanjut, yang perlu kita pahami adalah bahwa **UV Editor** bukan sekadar tempat melihat gambar tekstur, tetapi tempat kita mengatur “peta” permukaan model agar siap digunakan untuk `texturing`.

### Inti yang Harus Ditekankan

- **UV Editor** adalah workspace 2D untuk melihat dan mengatur hasil `unwrap`.
- Komponen dasar yang diamati adalah **UV vertex**, **UV edge**, **UV face**, dan **UV island**.
- Kualitas layout UV di editor ini menentukan bagaimana `texture image` akan dipetakan ke permukaan model 3D.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana posisi-posisi UV ini direpresentasikan dalam **UV Space**, khususnya rentang koordinat `U` dan `V` yang menjadi dasar pemetaan tekstur.

---

## Slide 014 - UV Space

### Narasi

Setelah sebelumnya kita melihat **UV Editor** sebagai workspace, sekarang kita fokus pada ruang koordinat yang menjadi dasar pemetaan tekstur, yaitu **UV Space**. Konsep ini penting karena menentukan bagaimana gambar tekstur dihubungkan dengan permukaan objek.

Secara umum, koordinat UV berada dalam rentang:

```text
U: 0 → 1
V: 0 → 1
```

`U` dapat kita pahami sebagai arah horizontal pada gambar tekstur, sedangkan `V` sebagai arah vertikal. Rentang `0 → 1` ini mewakili **keseluruhan texture image**, bukan ukuran piksel, satuan dunia, atau ukuran fisik objek. Dengan kata lain, UV adalah koordinat relatif terhadap gambar tekstur.

Dalam proses rendering, koordinat UV digunakan untuk menentukan bagian mana dari texture yang harus diambil pada suatu permukaan. Jadi, ketika sebuah bagian mesh memiliki nilai UV tertentu, sistem akan memetakan nilai tersebut ke posisi tertentu pada gambar tekstur. Pemahaman ini membantu kita melihat bahwa tekstur tidak sekadar ditempelkan, tetapi dipetakan melalui koordinat yang terstruktur.

Sebelum lanjut, hal yang perlu dipahami adalah bahwa **UV Space** adalah area 2D yang menjadi “peta” untuk sampling tekstur. Posisi koordinat di area ini akan sangat menentukan bagaimana gambar muncul pada surface.

### Inti yang Harus Ditekankan

- **UV Space** adalah ruang 2D yang digunakan untuk memetakan tekstur ke permukaan objek.
- Rentang umum `U: 0 → 1` dan `V: 0 → 1` mewakili keseluruhan texture image.
- `U` dan `V` adalah koordinat relatif terhadap tekstur, bukan koordinat dunia atau ukuran fisik.
- Posisi UV menentukan bagian gambar tekstur yang muncul pada surface.

### Transisi ke Slide Berikutnya

Setelah kita memahami UV Space sebagai area 0 sampai 1 yang mewakili tekstur, selanjutnya kita akan melihat hubungan antara face pada mesh dan representasinya di UV Space, serta bagaimana posisi UV menentukan bagian texture yang muncul pada permukaan.

---

## Slide 015 - Hubungan Face dan UV

### Narasi

Setelah kita memahami bahwa `UV` adalah koordinat 2D yang biasanya berada pada rentang `0 → 1`, langkah berikutnya adalah melihat bagaimana koordinat itu terhubung dengan objek 3D.

Intinya, setiap `face` pada mesh memiliki representasi di `UV space`. Representasi ini bisa kita baca dari diagram berikut:

```text
Face 3D
   ↓
UV Face
   ↓
Bagian Texture
```

Alurnya sederhana. `Face 3D` adalah permukaan kecil pada objek, misalnya segitiga atau segiempat pada mesh. `UV Face` adalah bentuk 2D yang merepresentasikan face tersebut di peta `UV`. Lalu, `Bagian Texture` adalah area pada image yang akan diambil oleh face tersebut.

Artinya, posisi `UV face` menentukan bagian image mana yang muncul pada permukaan 3D. Jika sebuah face dipetakan ke area merah pada texture, permukaan itu akan menampilkan warna merah. Jika dipetakan ke area biru, permukaan itu akan menampilkan warna biru. Jadi, texture tidak "ditempel" secara acak, tetapi mengikuti posisi `UV` pada setiap face.

Hal ini penting dalam grafika komputer karena `UV` menjadi jembatan antara geometri dan material. Dalam rendering pipeline, setelah objek ditransformasi dan dirasterisasi, shader akan menggunakan koordinat `UV` untuk mengambil warna atau detail dari texture. Tanpa hubungan yang benar antara `face` dan `UV`, texture bisa terlihat miring, tumpang tindih, atau tidak sesuai dengan permukaan objek.

Sebelum lanjut, yang perlu kita pegang adalah bahwa `UV` bukan hanya koordinat tambahan, tetapi penentu visual dari permukaan. Bentuk dan posisi `UV face` akan sangat memengaruhi bagaimana texture terbaca pada objek 3D.

### Inti yang Harus Ditekankan

- Setiap `face` pada mesh memiliki representasi di `UV space`.
- Posisi `UV face` menentukan bagian `texture` yang muncul pada permukaan 3D.
- `UV` berperan sebagai jembatan antara geometri, rasterisasi, dan sampling texture pada shader.

### Transisi ke Slide Berikutnya

Setelah kita tahu bahwa setiap `face` terhubung dengan area tertentu pada `UV space`, muncul pertanyaan praktis berikutnya: bagaimana permukaan 3D yang tertutup bisa dibuka menjadi peta 2D? Untuk menjawabnya, kita akan masuk ke konsep `seam`, yaitu garis potong yang digunakan untuk membentangkan surface mesh.

---

## Slide 016 - Apa Itu Seam?

### Narasi

Dalam pemetaan texture, permukaan mesh 3D tidak selalu bisa langsung dibentangkan ke bidang 2D tanpa membuat batas potongan. Di sinilah konsep **seam** menjadi penting.

**Seam** adalah `edge` yang ditandai sebagai garis potong untuk membuka surface mesh. Dengan menandai beberapa edge sebagai seam, kita memberi tahu proses UV unwrapping di mana permukaan tersebut harus "dibuka".

Analoginya mirip memotong kulit objek agar dapat dibentangkan menjadi bentuk 2D. Kulit yang masih utuh biasanya melengkung dan tidak bisa rata sempurna; setelah dipotong pada garis tertentu, kulit tersebut dapat dibuka dan diletakkan di bidang datar.

Dalam konteks UV, seam menjadi batas antara bagian-bagian surface yang akan menjadi `UV island`. Setelah mesh dibuka berdasarkan seam, setiap bagian surface memperoleh koordinat UV yang bisa digunakan untuk memetakan texture ke permukaan objek.

Intinya, seam bukan sekadar garis visual pada mesh. Seam menentukan bagaimana model dibuka sebelum texture dipetakan, sehingga pilihan seam akan sangat memengaruhi hasil UV yang kita dapatkan.

### Inti yang Harus Ditekankan

- **Seam** adalah `edge` yang ditandai sebagai garis potong untuk membuka surface mesh.
- Seam memungkinkan surface 3D dibentangkan ke `UV space` sebagai bentuk 2D.
- Posisi seam memengaruhi bentuk dan kualitas `UV island` sebelum texture dipetakan.

### Transisi ke Slide Berikutnya

Dengan memahami apa itu seam, kita bisa lanjut ke slide berikutnya untuk melihat mengapa pemilihan seam yang baik penting dalam menentukan kualitas UV dan hasil texture mapping.

---

## Slide 017 - Mengapa Seam Penting?

### Narasi

Seam bukan sekadar garis pada mesh; ia adalah keputusan desain yang menentukan bagaimana permukaan 3D "dibuka" menjadi koordinat 2D. Dalam proses UV mapping, setiap permukaan perlu diproyeksikan ke ruang UV agar texture dapat ditempelkan secara konsisten. Seam menandai batas potongan, sehingga mesh yang mulus di 3D dapat dibentangkan menjadi **UV island** yang bisa diatur, diukur, dan diberi texture.

Kita bisa membayangkannya seperti memotong kulit objek agar bisa diratakan. Jika potongan dilakukan di area yang salah, permukaan yang seharusnya rata bisa menjadi miring, memanjang, atau tumpang tindih. Dampaknya langsung terlihat pada hasil render: texture tidak lagi mengikuti bentuk objek secara natural.

Tanpa seam yang baik, beberapa masalah biasanya muncul:

- **UV dapat terdistorsi**, sehingga detail texture tampak melar atau tertekan di bagian tertentu.
- **Island sulit dikontrol**, karena bentuk potongan tidak mengikuti struktur objek.
- **Texture stretched**, terutama pada area yang seharusnya memiliki resolusi texture yang cukup.
- **Layout menjadi tidak efisien**, karena UV island sulit dipacking rapi dalam ruang texture.

Hal ini penting dalam grafika komputer karena texture mapping bukan hanya soal menempelkan gambar ke model. Ia berkaitan dengan bagaimana kamera melihat permukaan, bagaimana shader membaca koordinat UV, dan bagaimana kualitas visual objek tetap konsisten dari berbagai sudut pandang. Seam yang buruk dapat membuat material terlihat kurang rapi, meskipun texture dan lighting sudah baik.

Sebelum lanjut, mahasiswa perlu memahami bahwa seam adalah tahap perencanaan, bukan sekadar langkah teknis di software. Posisi seam memengaruhi kualitas unwrap, kemudahan editing material, dan efisiensi penggunaan texture. Jadi, seam harus dipikirkan dari awal, terutama pada objek yang akan diberi detail texture.

### Inti yang Harus Ditekankan

- Seam menentukan cara permukaan 3D dibentangkan menjadi **UV island**.
- Seam yang buruk menyebabkan **distorsi**, **stretching**, dan layout UV yang tidak efisien.
- Kualitas seam memengaruhi hasil texture mapping, material, dan tampilan akhir objek.

### Transisi ke Slide Berikutnya

Setelah memahami mengapa seam penting, langkah berikutnya adalah menentukan di mana seam sebaiknya ditempatkan. Pada slide berikutnya, kita akan membahas strategi menempatkan seam agar unwrap lebih mudah dibaca, lebih efisien, dan menghasilkan island yang lebih mudah diatur.

---

## Slide 018 - Strategi Menempatkan Seam

### Narasi

Dalam proses `unwrap`, **seam** adalah garis potong yang memungkinkan permukaan model 3D dibuka menjadi bentuk 2D pada ruang `UV`. Tanpa seam, permukaan tertutup seperti bola atau silinder tidak bisa “dibentangkan” secara utuh tanpa terjadi tumpang tindih atau peregangan yang tidak terkendali.

Strategi menempatkan seam yang baik biasanya mempertimbangkan beberapa hal berikut:

- **Ditempatkan pada area kurang terlihat**, misalnya bagian belakang, sisi bawah, atau celah yang tidak menjadi fokus visual.
- **Mengikuti struktur object**, sehingga garis potong terasa alami dan tidak memotong bentuk secara sembarangan.
- **Meminimalkan distortion**, agar tekstur tidak terlalu tertarik atau terdistorsi setelah dipetakan ke permukaan.
- **Menghasilkan island yang mudah diatur**, sehingga setiap bagian `UV` dapat dipacking dengan rapi dan efisien.

Tujuan utamanya adalah membuat hasil `unwrap` **mudah dibaca dan efisien**. Artinya, mahasiswa tidak hanya perlu memilih garis potong secara acak, tetapi harus berpikir seperti sedang merancang layout tekstur: di mana potongan dibuat, bagaimana bentuk `island` yang dihasilkan, dan apakah tekstur akan tetap terlihat natural saat dirender.

Sebelum lanjut ke contoh, hal penting yang harus dipahami adalah bahwa **seam bukan hanya masalah teknis**, tetapi juga keputusan artistik. Posisi seam akan memengaruhi kualitas `texture mapping`, keterbacaan `UV layout`, dan efisiensi penggunaan ruang tekstur.

### Inti yang Harus Ditekankan

- **Seam** adalah garis potong yang menentukan bagaimana permukaan 3D dibuka ke ruang `UV`.
- Letak seam harus mempertimbangkan **keterlihatan visual**, **struktur objek**, dan **distorsi tekstur**.
- Tujuan strategi seam yang baik adalah menghasilkan `UV island` yang **rapi, mudah diatur, dan efisien**.

### Transisi ke Slide Berikutnya

Dengan prinsip ini, kita dapat melihat contoh konkret bagaimana seam ditempatkan pada bentuk sederhana seperti cylinder.

---

## Slide 019 - Contoh Seam pada Cylinder

### Narasi

Pada cylinder, kita bisa melihat contoh sederhana bagaimana **seam** memengaruhi bentuk permukaan setelah dibuka ke ruang UV. Cylinder memiliki permukaan samping yang melengkung, serta dua penutup di bagian atas dan bawah. Jika permukaan ini tidak dipotong, akan sulit dibuka menjadi bidang datar tanpa peregangan atau tumpang tindih.

Pada slide ini, strategi seam yang ditampilkan adalah:

```text
1 seam vertikal
+
seam pada top/bottom
```

Hasil yang diharapkan:

- `side` menjadi `strip`
- `top` menjadi `island`
- `bottom` menjadi `island`

`Seam` vertikal pada sisi cylinder berfungsi seperti garis potong yang membuka permukaan samping. Setelah dipotong, permukaan samping yang semula tertutup menjadi satu `strip` memanjang. Bentuk ini penting karena memudahkan penempatan tekstur pada sisi cylinder, misalnya pola garis, label, atau material yang mengikuti arah vertikal.

Sementara itu, `seam` pada `top` dan `bottom` memisahkan penutup atas dan bawah dari permukaan samping. Akibatnya, `top` menjadi `island` tersendiri, dan `bottom` juga menjadi `island` tersendiri. Dalam konteks UV, `island` adalah potongan permukaan yang terpisah di ruang UV. Pemisahan ini membantu kita mengatur setiap bagian secara lebih rapi, terutama jika `top` dan `bottom` membutuhkan tekstur yang berbeda dari sisi cylinder.

Contoh ini penting karena dalam grafika komputer, tekstur tidak langsung “ditempel” ke permukaan 3D secara sembarangan. Setiap `vertex` atau titik pada mesh biasanya memiliki koordinat UV yang menentukan posisi sampling pada `texture map`. `Seam` menentukan batas di mana permukaan 3D dipotong agar bisa dibuka ke ruang 2D. Tanpa `seam` yang tepat, proses `unwrap` bisa menghasilkan peregangan, tumpang tindih, atau bentuk `island` yang sulit dibaca.

Dari sisi rendering, hasil UV yang baik akan membantu `shader` mengambil warna, normal, roughness, atau channel tekstur lain dengan lebih konsisten. Pada cylinder, `side strip` yang rapi membuat tekstur samping tidak terlalu terdistorsi, sedangkan `top` dan `bottom` sebagai `island` memungkinkan penempatan detail penutup yang lebih natural. Jadi, contoh ini bukan hanya soal garis potong, tetapi tentang bagaimana geometri 3D disiapkan agar material dan tekstur dapat dirender dengan benar.

Yang perlu dipahami mahasiswa sebelum lanjut adalah: `seam` bukan dekorasi, melainkan keputusan pemodelan UV. Pada cylinder, satu `seam` vertikal plus `seam` pada `top/bottom` sudah cukup untuk menghasilkan struktur yang mudah dibaca: `side strip`, `top island`, dan `bottom island`. Setelah struktur ini terbentuk, langkah berikutnya adalah proses `unwrap`, yaitu membuka `surface mesh` ke UV space dengan memanfaatkan `seam` sebagai panduan.

### Inti yang Harus Ditekankan

- `Seam` vertikal membuka sisi cylinder menjadi `strip`.
- `Seam` pada `top` dan `bottom` memisahkan penutup atas dan bawah menjadi `island`.
- Struktur ini membantu `unwrap`, mengurangi `distortion`, dan memudahkan penempatan tekstur.
- UV yang rapi penting agar `shader` dapat melakukan sampling `texture map` secara konsisten.

### Transisi ke Slide Berikutnya

Setelah kita memahami bagaimana `seam` pada cylinder membentuk `side strip` dan `island` untuk `top` serta `bottom`, langkah berikutnya adalah melihat apa yang terjadi ketika mesh tersebut dibuka ke ruang UV. Pada slide berikutnya, kita akan membahas konsep `unwrap` dan bagaimana Blender menggunakan `seam` sebagai panduan proses tersebut.

---

## Slide 020 - Apa Itu Unwrap?

### Narasi

Setelah kita menandai **seam** pada mesh, langkah berikutnya adalah **unwrap**. Unwrap adalah proses membuka **surface mesh** tiga dimensi ke **UV space** dua dimensi. Intinya, kita sedang mengubah permukaan objek menjadi peta koordinat 2D yang bisa dipakai untuk menempelkan tekstur.

Dalam Blender, perintah umum yang sering digunakan adalah:

```text
U
→ Unwrap
```

Perintah ini biasanya dijalankan setelah face atau mesh dipilih, dan Blender akan menghitung posisi UV berdasarkan **seam** yang sudah dibuat.

**Seam** berperan seperti garis potong pada pola pakaian. Jika seam ditempatkan dengan baik, permukaan mesh dapat dibuka tanpa terlalu banyak tumpang tindih atau distorsi. Sebaliknya, jika seam kurang tepat, hasil unwrap bisa menghasilkan potongan yang tidak rapi atau tekstur yang tampak melar.

Dalam konteks grafika komputer, unwrap penting karena tekstur umumnya disimpan sebagai gambar 2D. Setiap vertex pada mesh perlu memiliki koordinat UV agar renderer dapat menentukan bagian mana dari tekstur yang harus diambil saat rendering. Koordinat ini kemudian digunakan pada tahap shading atau fragment shader untuk sampling texture.

Sebelum lanjut, yang perlu dipahami mahasiswa adalah: unwrap bukan sekadar membuat gambar UV, tetapi proses memetakan permukaan 3D ke ruang 2D dengan menjaga hubungan antar face. Hasilnya akan berupa kelompok face yang tetap terhubung, yang nanti kita lihat sebagai **UV islands**.

### Inti yang Harus Ditekankan

- **Unwrap** adalah proses membuka **surface mesh** 3D ke **UV space** 2D.
- Perintah umum di Blender adalah `U` lalu `Unwrap`.
- **Seam** berfungsi sebagai panduan atau garis potong agar permukaan mesh dapat dibuka dengan rapi.
- Hasil unwrap menentukan kualitas pemetaan tekstur, termasuk tingkat distorsi dan keteraturan potongan UV.

### Transisi ke Slide Berikutnya

Setelah proses unwrap dijalankan, Blender akan menghasilkan bentuk potongan UV yang disebut **UV Islands**. Pada slide berikutnya, kita akan melihat bagaimana hasil unwrap tersebut terbentuk dan mengapa kelompok face yang tetap terhubung penting dalam UV space.

---

## Slide 021 - Hasil Unwrap

### Narasi

Setelah perintah `U` dijalankan, Blender tidak hanya “memotong” mesh menjadi datar, tetapi memetakan permukaan mesh ke **UV space**. Hasil yang kita lihat biasanya berupa satu atau beberapa **UV Islands**.

```text
UV Islands
```

Istilah **UV Islands** perlu dipahami sebagai kelompok **face** yang masih terhubung satu sama lain setelah proses unwrap. Artinya, face-face dalam satu island mempertahankan hubungan topologisnya di UV space, sehingga tekstur yang dipetakan ke area tersebut tetap konsisten.

Dalam konteks rendering, hasil unwrap ini penting karena koordinat UV akan digunakan pada tahap **texturing** dan `shader`. Saat rasterisasi, setiap pixel pada layar membutuhkan koordinat UV untuk mengambil warna atau detail dari texture map. Jika hasil unwrap rapi, tekstur tidak akan terlalu terdistorsi dan transisi antar bagian mesh lebih mudah dikontrol.

Perlu diingat bahwa bentuk dan jumlah **UV Islands** sangat dipengaruhi oleh **seam** yang kita tentukan sebelumnya. Seam berfungsi sebagai garis potong, sehingga mesh yang dipotong di beberapa tempat dapat menghasilkan beberapa island. Pada slide ini, kita cukup memahami bahwa hasil unwrap adalah representasi 2D dari permukaan mesh yang siap dipetakan ke texture.

### Inti yang Harus Ditekankan

- **UV Islands** adalah kelompok **face** yang tetap terhubung di **UV space** setelah unwrap.
- Hasil unwrap menjadi dasar pemetaan texture ke permukaan objek.
- Bentuk dan jumlah island dipengaruhi oleh **seam** dan struktur mesh.
- Koordinat UV penting untuk tahap **texturing** dan `shader` dalam rendering pipeline.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan memperjelas apa yang dimaksud dengan **UV Island** secara lebih spesifik, termasuk bagaimana satu objek dapat memiliki satu island atau banyak island.

---

## Slide 022 - Apa Itu UV Island?

### Narasi

Setelah proses `unwrap`, kita melihat hasil berupa `UV island`. Pada slide sebelumnya, kita sudah memahami bahwa `UV island` adalah kelompok `face` yang tetap terhubung di `UV space`. Sekarang kita perlu memperjelas satu hal penting: satu `object` tidak selalu menghasilkan satu `island` saja.

Artinya, satu `object` dapat memiliki:

```text
1 island
atau
banyak island
```

Jika seluruh permukaan `object` terhubung tanpa `seam` yang memotongnya, `unwrap` dapat menghasilkan satu `island` besar. Namun, pada model 3D yang lebih kompleks, kita biasanya sengaja membuat `seam` agar permukaan dapat dibentangkan ke bidang 2D tanpa distorsi berlebihan. Setiap `seam` yang memotong konektivitas `face` dapat memisahkan kelompok `face` menjadi `island` yang berbeda.

Jumlah dan bentuk `island` sangat dipengaruhi oleh dua hal utama: `seam` dan struktur `mesh`. `Seam` menentukan di mana permukaan model dipotong, sedangkan struktur `mesh` menentukan bagaimana `face`, `edge`, dan `vertex` tersambung. Model dengan banyak bagian terpisah, seperti tangan, kaki, kepala, atau panel bodi, sering kali menghasilkan banyak `island`. Sebaliknya, model sederhana seperti kubus atau bola dengan `seam` minimal mungkin menghasilkan sedikit `island`.

Hal ini penting dalam grafika komputer karena `UV island` adalah jembatan antara geometri 3D dan tekstur 2D. Saat `texture sampling` dilakukan, setiap `face` pada model akan menggunakan koordinat `UV` untuk menentukan bagian `texture` yang ditampilkan. Jika `island` terbentuk tidak rapi, tekstur bisa tampak terdistorsi, tumpang tindih, atau memiliki resolusi yang tidak merata. Oleh karena itu, memahami `island` membantu kita menilai kualitas `UV mapping` sebelum masuk ke tahap `texturing`.

Secara visual, kita bisa membayangkan `UV island` seperti potongan-potongan kulit yang dibentangkan dari model 3D. Potongan yang tetap menempel pada `object` akan menjadi satu `island`, sedangkan potongan yang terpisah karena `seam` akan menjadi `island` lain. Bentuknya bisa seperti persegi, segitiga, pita, atau bentuk organik, tergantung pada topologi `mesh` dan cara `seam` ditarik.

Sebelum lanjut, hal yang perlu dipahami adalah: `island` bukan sekadar label visual, tetapi representasi dari konektivitas `face` setelah `unwrap`. Jumlah `island` tidak selalu sama dengan jumlah `object`, dan bentuk `island` tidak selalu sama dengan bentuk `face` di ruang 3D. Yang penting adalah setiap `island` tetap membawa informasi posisi `UV` untuk `face` yang diwakilinya.

### Inti yang Harus Ditekankan

- Satu `object` dapat memiliki **1 `island`** atau **banyak `island`**.
- `UV island` terbentuk dari kelompok `face` yang tetap terhubung setelah `unwrap`.
- Jumlah dan bentuk `island` dipengaruhi oleh **`seam`** dan **struktur `mesh`**.
- Kualitas `island` memengaruhi distorsi, resolusi, dan hasil `texture mapping`.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana setiap `UV island` mengambil area tertentu pada `texture`, serta bagaimana posisi, rotasi, dan skala `island` menentukan detail yang terlihat pada model.

---

## Slide 023 - UV Island dan Texture

### Narasi

Setelah kita memahami bahwa satu `object` dapat memiliki satu atau banyak `UV island`, langkah berikutnya adalah melihat bagaimana setiap island berhubungan dengan `image` texture.

```text
UV Island
   ↓
Area pada Texture
```

Diagram ini sederhana: `UV island` di atas mewakili bagian permukaan objek, sedangkan panah ke bawah menunjukkan bahwa island tersebut mengambil area tertentu pada `texture`. Dengan kata lain, texture bukan sekadar ditempelkan ke objek secara utuh, tetapi dipetakan melalui koordinat `UV` yang menentukan bagian mana dari `image` yang dipakai oleh tiap permukaan.

Setiap `UV island` memiliki **posisi**, **rotasi**, dan **scale** di ruang `UV`. Ketiga hal ini menentukan detail yang terlihat pada objek.

- **Posisi** menentukan area mana dari `image` yang diambil oleh island.
- **Rotasi** menentukan orientasi motif atau detail texture pada permukaan.
- **Scale** menentukan seberapa besar area `image` yang dipakai, sehingga memengaruhi kepadatan detail.

Jika island menggunakan area `image` yang terlalu kecil untuk permukaan yang besar, detail akan tampak kurang padat atau cenderung terbentang. Sebaliknya, jika area `image` terlalu besar untuk permukaan yang kecil, detail dapat tampak terlalu rapat. Prinsip inilah yang membuat penataan `UV island` penting sebelum texture diterapkan.

Dalam konteks rendering, hubungan ini terjadi ketika fragment pada objek perlu mengambil warna dari texture. Koordinat `UV` dari permukaan digunakan untuk memilih pixel atau texel pada `image`. Karena itu, bentuk dan penempatan `UV island` bukan hanya soal tampilan di editor, tetapi juga memengaruhi hasil akhir yang dirender.

Sebelum lanjut, kita perlu memahami bahwa `UV island` adalah jembatan antara geometri 3D dan image 2D. Jika island sudah terbentuk dari `seam` dan struktur `mesh`, maka tugas berikutnya adalah memastikan island tersebut mengambil area texture yang tepat agar detail konsisten.

### Inti yang Harus Ditekankan

- Setiap `UV island` memetakan bagian permukaan objek ke area tertentu pada `texture`.
- **Posisi**, **rotasi**, dan **scale** island menentukan orientasi dan kepadatan detail texture.
- Penataan `UV island` yang tepat penting agar texture tidak terlihat salah arah, terlalu rapat, atau terlalu terbentang.

### Transisi ke Slide Berikutnya

Jika posisi, rotasi, atau scale island tidak sesuai dengan bentuk permukaan, texture dapat mengalami penyimpangan visual. Pada slide berikutnya, kita akan melihat bagaimana penyimpangan tersebut muncul sebagai `UV distortion`.

---

## Slide 024 - UV Distortion

### Narasi

Ketika sebuah `texture` dipetakan ke permukaan objek, hasil akhirnya tidak hanya ditentukan oleh gambar yang kita pilih, tetapi juga oleh bentuk area `UV` yang mewakili permukaan tersebut. **Distorsi UV** muncul ketika bentuk area `UV` terlalu berbeda dari bentuk `surface` asli, sehingga pemetaan antara koordinat tekstur dan geometri tidak lagi proporsional.

Secara intuitif, bayangkan sebuah permukaan yang seharusnya terlihat dengan detail yang seragam. Jika area `UV` untuk permukaan itu terlalu panjang, terlalu sempit, atau terlalu miring, sampel tekstur akan ditarik ke arah yang tidak sesuai. Akibatnya, detail yang seharusnya sama besar bisa terlihat lebih rapat di satu sisi dan lebih renggang di sisi lain.

Gejala yang paling mudah dikenali adalah:

- **checker memanjang**, artinya kotak-kotak `checker` tidak lagi berbentuk persegi yang seimbang;
- **checker gepeng**, artinya area `UV` tertekan sehingga detail tampak terlalu padat;
- `texture` tampak **stretched**, yaitu gambar terlihat tertarik atau tidak natural;
- **detail tidak konsisten**, misalnya satu bagian objek tajam sementara bagian lain buram atau terlalu besar.

Dalam konteks rendering, hal ini penting karena `fragment shader` akan mengambil nilai warna dari `texture` berdasarkan koordinat `UV` yang sudah dihitung. Jika koordinat `UV` mengalami distorsi, laju pengambilan sampel tekstur menjadi tidak seragam. Dengan kata lain, masalahnya bukan selalu pada resolusi gambar, tetapi pada bagaimana area `UV` menempati ruang tekstur.

Kita juga perlu membedakan distorsi dari sekadar pemilihan tekstur yang salah. Distorsi adalah masalah **layout UV**: bentuk, proporsi, dan orientasi area `UV` tidak cocok dengan permukaan. Pada slide sebelumnya, kita sudah melihat bahwa posisi, rotasi, dan skala `UV island` memengaruhi detail yang terlihat. Di sini, kita melihat konsekuensi ketika proporsi tersebut tidak dijaga dengan baik.

Sebelum lanjut, mahasiswa perlu memahami bahwa `UV` yang baik tidak hanya harus menutupi permukaan, tetapi juga menjaga proporsi visual. Pola `checker` sering digunakan sebagai alat evaluasi karena memperlihatkan ketidakseragaman pemetaan dengan sangat jelas. Jika kotak `checker` terlihat seragam, `UV` cenderung baik; jika kotak `checker` tertarik, ada indikasi bahwa `seam` atau `layout UV` perlu diperbaiki.

### Inti yang Harus Ditekankan

- **Distorsi UV** terjadi ketika bentuk area `UV` tidak proporsional terhadap bentuk `surface`.
- Gejala utamanya adalah `checker` memanjang, `checker` gepeng, `texture` stretched, dan detail tidak konsisten.
- Masalah distorsi biasanya berasal dari **layout UV**, bukan hanya kualitas atau resolusi gambar tekstur.
- Pola `checker` membantu kita menilai apakah pemetaan `UV` sudah seragam atau masih perlu diperbaiki.

### Transisi ke Slide Berikutnya

Untuk menilai distorsi secara lebih praktis, kita akan menggunakan **checker texture** sebagai alat evaluasi `UV`.

---

## Slide 025 - Checker Texture

### Narasi

**Checker Texture** adalah pola kotak-kotak yang sering kita gunakan untuk mengevaluasi kualitas `UV` pada sebuah mesh. Pola ini biasanya tidak dipakai sebagai material akhir, melainkan sebagai alat diagnostik. Tujuannya sederhana: membantu kita melihat apakah `UV` sudah terpetakan dengan baik atau masih ada bagian yang terdistorsi.

Alasan checker sangat berguna adalah karena bentuknya yang teratur. Jika `UV` sudah baik, kotak-kotak checker akan terlihat relatif seragam di permukaan objek. Artinya, setiap area permukaan mendapatkan sampling texture yang seimbang, tanpa ada bagian yang terlalu meregang atau terlalu mampet.

```text
checker relatif seragam
```

Ketika kita mengamati checker pada mesh, yang perlu kita perhatikan adalah bentuk dan ukuran kotak-kotaknya. Jika kotak terlihat memanjang, gepeng, atau tidak konsisten dari satu area ke area lain, itu menandakan bahwa `UV` mengalami distorsi. Dalam kondisi seperti ini, biasanya kita perlu memeriksa kembali `seam` atau `layout UV` yang ada di editor `UV`.

Hal ini penting karena `UV` menentukan bagaimana texture dipetakan ke permukaan geometri. Dalam alur rendering, koordinat `UV` digunakan untuk mengambil warna atau detail texture pada setiap fragmen. Jika `UV` tidak seragam, proses sampling texture akan menghasilkan tampilan yang tidak konsisten, misalnya detail terlihat lebih besar di satu sisi dan lebih kecil di sisi lain.

Dalam praktik Blender, checker texture sangat membantu sebelum kita menerapkan material atau texture yang sebenarnya. Dengan checker, kita bisa memastikan bahwa `UV` sudah rapi terlebih dahulu. Setelah itu, texture lain seperti diffuse, normal, atau detail material akan terlihat lebih stabil dan mudah dikendalikan.

Sebelum lanjut ke tahap berikutnya, kita perlu memahami bahwa checker yang seragam adalah tanda awal bahwa `UV` siap digunakan. Jika checker masih `stretched`, sebaiknya kita perbaiki dulu `seam` atau `layout UV`, karena masalah ini akan terbawa ke texture dan material berikutnya.

### Inti yang Harus Ditekankan

- **Checker Texture** adalah alat evaluasi `UV`, bukan material akhir.
- `UV` yang baik ditunjukkan oleh kotak checker yang **relatif seragam** bentuk dan ukurannya.
- Jika checker terlihat `stretched`, maka `seam` atau `layout UV` perlu diperiksa dan diperbaiki.

### Transisi ke Slide Berikutnya

Setelah kita bisa menilai apakah `UV` sudah seragam melalui checker, langkah berikutnya adalah melihat konsistensi detail antar area `UV`, yaitu **Texel Density**.

---

## Slide 026 - Texel Density

### Narasi

Setelah checker texture membantu kita melihat apakah UV mengalami *stretch*, konsep berikutnya yang perlu dipahami adalah **texel density**. Secara sederhana, **texel density** menunjukkan seberapa konsisten jumlah **texel** atau pixel texture yang jatuh pada setiap area permukaan objek.

```text
Island kecil
→ detail rendah

Island besar
→ detail tinggi
```

Dalam konteks UV, **island** adalah potongan area texture yang dipetakan ke permukaan mesh. Jika island kecil, maka jumlah texel yang tersedia untuk permukaan tersebut relatif sedikit, sehingga detail yang terlihat menjadi lebih rendah. Sebaliknya, jika island besar, lebih banyak texel digunakan, sehingga permukaan dapat menampilkan detail yang lebih tajam.

Hal penting yang perlu ditegaskan adalah bahwa ukuran island tidak boleh dinilai secara mutlak. Yang perlu kita perhatikan adalah **skala relatif** antara area permukaan dan area UV. Permukaan yang luas seharusnya mendapat island yang cukup besar, sedangkan permukaan kecil dapat menggunakan island yang lebih kecil. Jika skala ini tidak konsisten, sebagian objek akan terlihat blur sementara sebagian lain terlihat terlalu tajam.

Dalam rendering pipeline, konsep ini berkaitan langsung dengan tahap **texture sampling** pada fragment shader. Saat rasterisasi menghasilkan fragment, GPU mengambil warna dari texture berdasarkan koordinat UV. Jika texel density tidak seragam, hasil sampling akan menghasilkan distribusi detail yang tidak merata pada layar.

Kita juga dapat menghubungkannya dengan checker texture. Checker yang relatif seragam biasanya menandakan texel density yang cukup konsisten. Jika checker terlihat stretched atau kotak-kotaknya berubah ukuran secara tidak wajar, itu menjadi indikasi bahwa layout UV perlu disesuaikan.

Sebelum lanjut, mahasiswa perlu memahami bahwa **texel density** bukan hanya soal membuat semua island besar. Tujuannya adalah mendistribusikan resolusi texture secara proporsional sesuai ukuran permukaan dan kebutuhan visual.

### Inti yang Harus Ditekankan

- **Texel density** adalah konsistensi jumlah **texel** per area permukaan objek.
- **Island kecil** cenderung menghasilkan detail rendah, sedangkan **island besar** menghasilkan detail lebih tinggi.
- Skala UV harus disesuaikan secara relatif terhadap ukuran permukaan, bukan hanya berdasarkan ukuran island secara mutlak.
- Ketidakseragaman texel density dapat menyebabkan sebagian objek terlihat blur atau detailnya tidak konsisten.

### Transisi ke Slide Berikutnya

Setelah memahami apa itu texel density, langkah berikutnya adalah bagaimana menjaga konsistensinya dalam satu asset, termasuk kapan area tertentu boleh diberi detail lebih tinggi karena penting secara visual.

---

## Slide 027 - Konsistensi Texel Density

### Narasi

Pada tahap ini, kita masuk ke prinsip praktis dari **texel density**: dalam satu asset, bagian-bagian sebaiknya memiliki detail texture yang relatif konsisten. Artinya, jika satu permukaan menerima jumlah pixel texture tertentu per satuan luas, permukaan lain yang setara sebaiknya tidak jauh berbeda.

Hal ini penting karena pada rendering, texture tidak hanya ditempelkan pada objek, tetapi disampelkan ke pixel-pixel layar. Saat rasterisasi, setiap pixel yang menutupi permukaan objek akan mengambil nilai warna atau detail dari texture. Jika satu bagian terlalu tajam sementara bagian lain terlalu buram, objek akan terlihat tidak seragam meskipun bentuk geometrinya sudah benar.

Konsistensi ini juga membantu kita membaca hasil unwrap. Island UV yang terlalu besar akan membuat area tersebut lebih detail, sedangkan island yang terlalu kecil akan membuat area tersebut kurang detail. Jadi, sebelum packing, kita perlu memeriksa apakah skala island sudah menghasilkan distribusi detail yang wajar.

Namun, konsistensi bukan berarti semua bagian harus identik. Ada pengecualian: **area penting secara visual** dapat diberi **texel density** lebih tinggi. Misalnya, wajah pada karakter, logo pada properti, atau bagian yang sering dilihat dekat kamera. Peningkatan detail pada area tersebut dapat dibenarkan selama tidak membuat keseluruhan asset terasa tidak seimbang.

Inti yang perlu dipahami adalah: **texel density** adalah alat kontrol visual. Kita tidak hanya mengejar jumlah pixel, tetapi menjaga agar detail texture terasa proporsional dan mendukung fokus visual asset.

### Inti yang Harus Ditekankan

- Dalam satu asset, detail texture sebaiknya relatif konsisten antar bagian.
- **Texel density** yang tidak konsisten dapat membuat objek terlihat buram, terlalu tajam, atau tidak seragam.
- **Area penting secara visual** boleh diberi **texel density** lebih tinggi sebagai pengecualian.
- Prinsip ini menjadi dasar sebelum proses **packing UV islands**.

### Transisi ke Slide Berikutnya

Setelah kita menentukan skala dan prioritas detail pada setiap island, langkah berikutnya adalah mengatur ulang posisi island agar area texture digunakan secara efisien. Pada slide berikutnya, kita akan membahas `Pack UV Islands`.

---

## Slide 028 - Pack UV Islands

### Narasi

Setelah proses `unwrap`, permukaan 3D sudah memiliki koordinat `UV` yang memetakan setiap titik pada model ke bidang `UV`. Pada tahap ini, kita biasanya melihat beberapa **UV island** yang tersebar di ruang `UV`. Bentuk dan posisi island tersebut belum tentu optimal, sehingga langkah berikutnya adalah **pack UV islands**.

```text
UV Islands
↓
Scale
↓
Rotate
↓
Pack
```

Alur ini dapat dibaca dari atas ke bawah. Pertama, hasil `unwrap` menghasilkan sejumlah **UV island**. Kemudian, setiap island dapat di-`scale` agar ukurannya sesuai dengan kebutuhan detail texture. Setelah itu, island dapat di-`rotate` untuk menyesuaikan orientasinya agar lebih mudah disusun. Terakhir, proses `pack` mengatur posisi island-island tersebut sehingga menempati area `UV` secara lebih rapat dan efisien.

Tujuan utama `pack` bukan hanya membuat tampilan `UV` lebih rapi, tetapi juga meningkatkan efisiensi penggunaan **texture map**. Karena resolusi texture terbatas, misalnya `1024 x 1024` atau `2048 x 2048`, setiap bagian model harus mendapat jatah area `UV` yang sepadan dengan pentingnya detail visual. Jika island terlalu tersebar atau banyak area kosong, texture resolution yang tersedia tidak dimanfaatkan secara optimal. Akibatnya, detail pada permukaan model bisa menjadi kurang tajam meskipun ukuran texture file sudah besar.

Dalam konteks rendering pipeline, koordinat `UV` berperan sebagai jembatan antara geometri 3D dan texture 2D. Saat rasterisasi, fragmen pada permukaan model akan menggunakan koordinat `UV` untuk mengambil warna atau data texture. Jika `UV` dipacking dengan baik, lebih banyak texel dapat dialokasikan ke area yang terlihat, sehingga sampling texture menghasilkan detail yang lebih konsisten. Ini juga membantu menjaga **texel density** tetap seimbang antarbagian model, sesuai dengan prinsip yang kita bahas sebelumnya.

Perlu diperhatikan bahwa `scale` dan `rotate` pada tahap `pack` sebaiknya tidak mengubah proporsi island secara berlebihan. Jika satu island diperbesar tanpa alasan visual, bagian tersebut akan mendapat lebih banyak texel dan tampak lebih detail dibandingkan bagian lain. Sebaliknya, jika island diperkecil terlalu jauh, detailnya bisa berkurang. Oleh karena itu, packing yang baik adalah keseimbangan antara efisiensi area `UV` dan konsistensi detail texture.

Sebelum lanjut, mahasiswa perlu memahami bahwa `pack UV islands` adalah tahap penataan layout `UV` setelah `unwrap`. Intinya, kita sedang mengoptimalkan bagaimana permukaan 3D memanfaatkan bidang `UV` agar texture lebih efisien, rapi, dan siap untuk tahap berikutnya.

### Inti yang Harus Ditekankan

- **Pack UV islands** dilakukan setelah `unwrap` untuk menata **UV island** secara lebih efisien di ruang `UV`.
- Alur utamanya adalah `UV Islands` → `Scale` → `Rotate` → `Pack`, di mana `scale` dan `rotate` membantu penyesuaian ukuran serta orientasi island.
- Tujuan utamanya adalah memanfaatkan area texture secara optimal agar detail visual lebih tajam dan penggunaan texel lebih efektif.
- Packing yang baik harus tetap menjaga **texel density** agar tidak ada bagian model yang tiba-tiba terlalu detail atau kurang detail.

### Transisi ke Slide Berikutnya

Setelah island-island `UV` berhasil dipacking, masih ada satu hal penting yang sering menentukan kualitas hasil akhir: jarak antar-island. Pada slide berikutnya, kita akan membahas **margin antar-island** dan mengapa ruang kecil di sekitar island diperlukan agar hasil texture tetap bersih.

---

## Slide 029 - Margin antar-Island

### Narasi

Setelah UV islands dipack, ada satu hal yang sering terlewat: jarak antar-island. Dalam texture space, setiap island menempati area tertentu pada texture map. Jika dua island terlalu berdekatan, pixel di tepi island dapat saling “menyentuh”.

Dalam rendering, GPU tidak selalu mengambil warna texture hanya dari satu titik yang tepat. Saat **filtering** atau sampling texture, nilai warna di sekitar titik sampling ikut dipertimbangkan. Karena itu, jika margin terlalu kecil, warna dari island lain bisa masuk ke tepi island yang sedang dirender. Fenomena ini disebut **texture bleeding**.

Margin antar-island berfungsi sebagai ruang pengaman. Ruang ini memberi jarak agar sampling di tepi island tidak mengambil warna dari island tetangga. Dengan margin yang cukup, hasil texture tetap bersih, terutama pada edge mesh yang terlihat jelas.

Kita bisa memahami margin seperti jarak antar-ruang pada peta. Jika dua wilayah terlalu rapat, batasnya menjadi tidak jelas. Begitu juga pada UV: margin membantu menjaga batas antar-island tetap tegas.

Dalam praktik, margin tidak boleh terlalu besar karena akan mengurangi area texture yang efektif. Namun margin yang terlalu kecil berisiko menyebabkan warna bocor. Jadi, margin adalah keseimbangan antara efisiensi penggunaan texture dan kebersihan hasil rendering.

Sebelum lanjut, kita perlu memahami bahwa packing UV bukan hanya soal mengisi area texture, tetapi juga memastikan setiap island memiliki ruang sampling yang aman.

### Inti yang Harus Ditekankan

- **Margin antar-island** diperlukan untuk mencegah **texture bleeding**.
- Margin memberi ruang saat **filtering** atau sampling texture di tepi island.
- Margin yang terlalu kecil dapat membuat warna dari island lain masuk ke edge.
- Margin harus seimbang: cukup untuk hasil bersih, tetapi tidak terlalu besar agar area texture tetap efisien.

### Transisi ke Slide Berikutnya

Setelah memahami pentingnya margin, kita perlu memperhatikan kasus lain yang sering muncul: **overlapping UV**. Overlap bisa disengaja untuk bagian yang memakai texture sama, tetapi untuk unique texture, overlap harus dihindari.

---

## Slide 030 - Overlapping UV

### Narasi

Dalam penataan **UV**, kita perlu memahami kapan **UV overlap** boleh terjadi dan kapan harus dihindari. **UV overlap** berarti beberapa bagian mesh menempati koordinat UV yang sama atau saling menutupi.

Secara konsep, overlap tidak selalu salah. Jika beberapa bagian objek menggunakan **texture yang sama**, overlap dapat menjadi strategi yang disengaja. Misalnya, beberapa panel atau detail kecil dapat berbagi area UV yang sama karena warna dan pola yang dibutuhkan identik. Dengan cara ini, kita dapat menghemat ruang pada texture map.

Namun, jika setiap bagian membutuhkan **unique texture**, overlap harus dihindari. Alasannya sederhana: saat rendering, GPU akan membaca warna texture berdasarkan koordinat UV. Jika dua bagian berbeda menempati area UV yang sama, keduanya akan menerima sampel warna yang sama, padahal seharusnya berbeda.

Masalah ini juga berkaitan dengan **margin antar-island** yang sudah kita bahas sebelumnya. Area UV yang saling tumpang tindih dapat memperbesar risiko **texture bleeding**, terutama ketika filtering atau sampling dilakukan di sekitar tepi island. Warna dari area lain dapat masuk ke tepi yang tidak seharusnya, sehingga hasil terlihat kotor atau tidak rapi.

Oleh karena itu, aturan praktisnya adalah:

- Gunakan **overlap** hanya jika beberapa bagian memang memakai **texture yang sama**.
- Untuk **unique texture**, pertahankan setiap **UV island** terpisah dan tidak saling menutupi.
- Jika overlap digunakan, pastikan itu disengaja dan tidak menimbulkan artefak visual.

```text
hindari overlap
```

Pernyataan ini bukan berarti overlap selalu dilarang, melainkan mengingatkan bahwa overlap adalah keputusan artistik dan teknis yang harus disadari. Mahasiswa perlu mengecek apakah bagian yang overlap memang boleh berbagi texture, atau justru membutuhkan area UV yang unik.

### Inti yang Harus Ditekankan

- **UV overlap** boleh digunakan jika beberapa bagian memakai **texture yang sama**.
- Untuk **unique texture**, overlap harus dihindari agar setiap bagian membaca area texture yang benar.
- Overlap yang tidak disengaja dapat menyebabkan **texture bleeding** dan hasil rendering tidak bersih.
- Keputusan overlap harus mempertimbangkan kebutuhan visual, efisiensi texture space, dan margin antar-island.

### Transisi ke Slide Berikutnya

Setelah kita memahami aturan overlap, langkah berikutnya adalah melihat cara Blender membantu proses penataan UV secara otomatis. Pada slide berikutnya, kita akan membahas `Smart UV Project`, yaitu fitur yang cepat tetapi memiliki trade-off dalam jumlah island dan kontrol penataan.

---

## Slide 031 - Smart UV Project

### Narasi

Dalam tahap texturing, setelah mesh memiliki UV map, kita perlu cara yang praktis untuk memetakan permukaan 3D ke ruang 2D. Blender menyediakan fitur:

```text
Smart UV Project
```

Fitur ini bekerja secara otomatis: sistem menganalisis permukaan mesh lalu memecahnya menjadi beberapa bagian UV yang dapat dipetakan ke bidang 2D. Hasilnya sering disebut **UV island**, yaitu potongan-potongan area pada layout UV yang mewakili bagian permukaan objek.

Kelebihan utama `Smart UV Project` adalah **cepat**. Untuk objek sederhana, prototipe, atau kebutuhan visual yang tidak menuntut presisi tinggi, fitur ini dapat mempercepat alur kerja karena kita tidak perlu mengatur setiap bagian secara manual. Dalam konteks grafika komputer, kecepatan ini penting karena UV mapping menjadi jembatan antara geometri 3D dan texture 2D yang kemudian disampel pada tahap rendering.

Namun, ada trade-off. Kekurangan `Smart UV Project` adalah **island lebih banyak**, **kontrol lebih rendah**, dan **tidak selalu efisien**. Banyak island dapat membuat layout UV lebih terpecah, sehingga pemanfaatan ruang UV mungkin tidak seoptimal unwrap yang dirancang manual. Kontrol yang lebih rendah berarti kita tidak selalu bisa menentukan bagian mana yang harus dipetakan lebih besar, mana yang boleh lebih kecil, atau bagaimana menghindari artefak pada area penting.

Hal ini penting dipahami sebelum lanjut: `Smart UV Project` bukan berarti selalu menghasilkan UV terbaik untuk asset final. Ia lebih cocok sebagai solusi otomatis yang praktis, terutama ketika kebutuhan texture masih eksploratif. Untuk asset yang akan dipamerkan, di-render, atau digunakan dalam pipeline produksi, kualitas UV biasanya perlu diperiksa dan disesuaikan.

### Inti yang Harus Ditekankan

- `Smart UV Project` adalah fitur otomatis di Blender untuk membuat UV map.
- Kelebihannya **cepat**, sehingga cocok untuk prototipe atau alur kerja awal.
- Kekurangannya **island lebih banyak**, **kontrol lebih rendah**, dan **tidak selalu efisien**.
- Banyak island dapat memengaruhi efisiensi penggunaan ruang UV dan kualitas hasil texturing.
- Untuk asset final, hasil otomatis perlu dievaluasi, bukan langsung dianggap optimal.

### Transisi ke Slide Berikutnya

Setelah memahami kelebihan dan keterbatasan `Smart UV Project`, kita akan membandingkannya dengan **Manual Unwrap** pada slide berikutnya, sehingga terlihat kapan pendekatan otomatis lebih tepat dan kapan kontrol manual lebih dibutuhkan.

---

## Slide 032 - Manual Unwrap vs Smart UV

### Narasi

Pada tahap texturing, **UV unwrap** menentukan bagaimana permukaan 3D dipetakan ke gambar 2D. Tanpa UV yang baik, texture bisa terlihat terdistorsi, terputus, atau tidak sesuai dengan bagian objek.

Kita bisa membandingkan dua pendekatan utama. **Manual unwrap** dilakukan dengan memilih edge, membuat seam, lalu mengembangkan permukaan secara sadar. Pendekatan ini memberi **kontrol tinggi** terhadap bentuk island, arah texture, dan penataan layout. Karena itu, manual unwrap biasanya lebih cocok untuk **asset final** yang akan ditampilkan dekat kamera atau menjadi bagian penting adegan.

Sebaliknya, **Smart UV** adalah proses otomatis yang cepat. Blender langsung memecah mesh menjadi beberapa island dan menyusunnya. Kelebihannya adalah **cepat** dan **hasil otomatis**, sehingga sangat berguna untuk **prototype**, testing material, atau objek sederhana. Namun, karena otomatis, jumlah **island** bisa lebih banyak dan layout tidak selalu efisien.

Secara konseptual, perbedaannya bukan hanya cepat atau lambat. Manual unwrap adalah keputusan artistik: kita menentukan bagian mana yang harus mulus, bagian mana yang boleh dipecah, dan bagaimana texture dipakai. Smart UV adalah solusi praktis: kita menerima hasil otomatis agar bisa langsung lanjut ke tahap material.

Dalam pipeline rendering, UV berperan sebagai koordinat sampling texture. Saat shader mengevaluasi material, nilai UV digunakan untuk mengambil warna atau data dari image texture. Jadi, kualitas unwrap akan langsung memengaruhi hasil visual pada **Principled BSDF** atau material node berikutnya.

### Inti yang Harus Ditekankan

- **Manual unwrap** memberi kontrol lebih besar dan cocok untuk asset final.
- **Smart UV** lebih cepat dan otomatis, cocok untuk prototype atau pengujian awal.
- Banyaknya **island** pada Smart UV dapat membuat layout kurang efisien.
- UV menentukan bagaimana texture dipetakan ke permukaan objek sebelum masuk ke material.

### Transisi ke Slide Berikutnya

Setelah memilih cara unwrap yang sesuai, langkah berikutnya adalah menghubungkan image ke material. Pada slide berikutnya, kita akan melihat bagaimana node `Image Texture` menjadi sumber data texture dan dihubungkan ke `Principled BSDF`.

---

## Slide 033 - Image Texture Node

### Narasi

Setelah kita memahami cara menyiapkan UV pada objek, langkah berikutnya adalah membuat gambar benar-benar terlihat pada permukaan. Dalam sistem material berbasis node, gambar tidak langsung “ditempel” ke objek. Gambar harus dibaca oleh material melalui node khusus, yaitu `Image Texture`.

```text
Image Texture
→ Principled BSDF
```

Pada alur di atas, `Image Texture` berperan sebagai sumber data gambar. Node ini menyimpan atau merujuk ke sebuah image, lalu mengeluarkan data warna dari gambar tersebut. Data warna ini kemudian dikirim ke node material, dalam hal ini `Principled BSDF`, yang bertugas menentukan bagaimana permukaan bereaksi terhadap cahaya.

Kita bisa membaca alur node ini dari kiri ke kanan. Di sisi kiri, `Image Texture` mengambil informasi dari gambar. Di sisi kanan, `Principled BSDF` menerima informasi tersebut sebagai bagian dari penampakan material. Panah menunjukkan arah aliran data, bukan arah cahaya. Artinya, gambar diproses sebagai data material sebelum akhirnya memengaruhi tampilan objek saat rendering.

Poin penting yang perlu dipahami adalah: sebuah image tidak akan berpengaruh pada objek hanya karena sudah dipilih di node. Image baru digunakan jika output dari `Image Texture` terhubung ke input yang tepat pada node material. Jika tidak ada koneksi, maka gambar hanya tersimpan di node, tetapi tidak ikut menentukan warna atau detail permukaan.

Dalam konteks rendering pipeline, node ini berada pada tahap material atau shading. Geometri objek sudah ada, UV sudah disiapkan, dan kamera sudah menentukan pandangan. Lalu material menentukan bagaimana setiap titik pada permukaan terlihat. `Image Texture` menjadi jembatan antara file gambar dan penampakan visual objek.

Sebelum lanjut, pastikan mahasiswa memahami bahwa `Image Texture` adalah node sumber data, sedangkan `Principled BSDF` adalah node yang memproses data tersebut menjadi sifat permukaan. Tanpa hubungan antara keduanya, texture tidak akan muncul pada objek.

### Inti yang Harus Ditekankan

- `Image Texture` adalah node yang menyediakan data gambar untuk material.
- Gambar hanya memengaruhi objek jika output `Image Texture` terhubung ke input node material, misalnya `Principled BSDF`.
- Alur node dibaca dari kiri ke kanan: sumber data gambar → node material → penampakan permukaan.
- UV yang sudah disiapkan sebelumnya menentukan bagian gambar mana yang diambil pada setiap titik permukaan.

### Transisi ke Slide Berikutnya

Setelah `Image Texture` terhubung ke `Principled BSDF`, pertanyaan berikutnya adalah ke input mana data gambar tersebut diberikan. Pada slide berikutnya, kita akan melihat salah satu input yang paling umum, yaitu `Base Color`, yang menentukan warna dasar permukaan objek.

---

## Slide 034 - Base Color

### Narasi

Dalam material, **Base Color** adalah properti yang menentukan **warna dasar permukaan** sebelum efek pencahayaan, tekstur detail, atau properti material lain memperhalus tampilan. Secara intuitif, ini adalah warna yang paling mudah kita lihat pada permukaan ketika tidak ada detail tambahan: misalnya warna kayu, batu, cat, kain, atau kulit.

Pada node material, `Base Color` biasanya menjadi input warna pada shader seperti `Principled BSDF`. Sumber nilainya dapat berupa **warna solid** atau **image texture**. Jika menggunakan warna solid, kita cukup memilih satu warna untuk seluruh permukaan. Jika menggunakan image texture, warna diambil dari citra yang dipetakan ke permukaan.

```text
warna solid
atau
image texture
```

Perbedaan ini penting karena menentukan fleksibilitas material. Warna solid cocok untuk objek sederhana atau material yang memang seragam. Image texture cocok untuk permukaan yang memiliki variasi warna, misalnya serat kayu, noda pada batu, motif kain, atau gradasi pada kulit.

```text
Image Texture
→ Base Color
```

Dalam alur rendering, `Base Color` berperan sebagai informasi warna awal yang kemudian diproses oleh pipeline shading. Ia bukan penentu akhir tampilan secara mutlak, karena pencahayaan, normal, roughness, dan properti material lain juga memengaruhi hasil akhir. Namun, `Base Color` adalah fondasi visual yang paling mudah dikenali oleh mahasiswa ketika mengamati material.

Beberapa contoh material yang sangat bergantung pada `Base Color` adalah:

- kayu,
- batu,
- cat,
- kain,
- kulit.

Pada contoh ini, `Base Color` membantu membedakan jenis material secara visual sebelum detail tekstur atau pencahayaan ditambahkan.

### Inti yang Harus Ditekankan

- **Base Color** adalah warna dasar permukaan pada material.
- Sumber `Base Color` dapat berupa **warna solid** atau **image texture**.
- `Base Color` menjadi input penting pada shader seperti `Principled BSDF`.
- `Base Color` bukan satu-satunya penentu tampilan akhir, tetapi merupakan fondasi warna material.
- Contoh material yang bergantung pada `Base Color`: kayu, batu, cat, kain, dan kulit.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa `Base Color` dapat berasal dari warna solid atau image texture, kita akan melihat bagaimana image texture tersebut digunakan secara khusus sebagai **Base Color Map** pada material.

---

## Slide 035 - Base Color Map

### Narasi

Setelah kita memahami bahwa **Base Color** adalah warna dasar permukaan, pada slide ini kita melihat bentuk yang paling umum dalam material berbasis tekstur, yaitu **Base Color Map**.

Secara sederhana, **Base Color Map** adalah image texture yang menyimpan informasi warna utama pada setiap bagian permukaan objek.

```text
Image Texture
→ Base Color
```

Diagram ini dibaca dari kiri ke kanan: node `Image Texture` membaca gambar, lalu output-nya dihubungkan ke input `Base Color` pada material. Artinya, warna yang terlihat pada objek tidak lagi ditentukan oleh satu nilai warna solid, tetapi oleh pixel pada gambar yang dipetakan ke permukaan.

Dalam **rendering pipeline**, **Base Color** berperan sebagai warna intrinsik material sebelum proses pencahayaan. Ia menentukan warna apa yang dipantulkan oleh permukaan ketika terkena cahaya. Karena itu, **Base Color Map** sering menjadi texture visual utama pada banyak material, seperti kayu, batu, cat, atau kain.

Agar gambar dapat menempel dengan benar pada objek, tekstur biasanya dipetakan melalui koordinat **UV**, sehingga setiap bagian mesh mengambil warna dari posisi tertentu pada image.

Sebelum lanjut, kita perlu memahami bahwa **Base Color Map** bukan pencahayaan, bukan kekasaran, dan bukan detail relief. Ia hanya menyimpan warna dasar permukaan. Pemahaman ini penting agar kita tidak salah menempatkan informasi tekstur pada parameter material yang lain.

### Inti yang Harus Ditekankan

- **Base Color Map** adalah image texture yang menyimpan warna utama material.
- Alur umumnya adalah `Image Texture → Base Color`, dibaca dari sumber gambar ke input material.
- **Base Color** menentukan warna intrinsik permukaan sebelum lighting dan menjadi dasar visual banyak material.

### Transisi ke Slide Berikutnya

Setelah warna dasar permukaan sudah dipahami, kita akan lanjut ke **Roughness**, yaitu parameter yang menentukan seberapa kasar permukaan dan bagaimana highlight terbentuk.

---

## Slide 036 - Roughness

### Narasi

Setelah warna dasar, ada parameter yang menentukan bagaimana cahaya memantul dari permukaan: **Roughness**. Parameter ini menggambarkan seberapa kasar permukaan secara visual, bukan kekasaran geometri yang benar-benar bergelombang. Dalam banyak material, **Roughness** adalah nilai skalar yang mengatur respons permukaan terhadap cahaya.

Secara intuitif, permukaan dengan **Roughness** rendah akan terlihat lebih halus dan lebih reflektif. Cahaya yang jatuh ke permukaan cenderung memantul dengan arah yang lebih terkendali, sehingga highlight terlihat tajam dan kecil. Sebaliknya, permukaan dengan **Roughness** tinggi akan terlihat lebih kasar dan lebih diffuse. Pantulan cahaya tersebar lebih luas, sehingga highlight menjadi lebih lembut, lebih besar, dan kurang intens.

Slide menampilkan skala sederhana:

```text
Roughness 0
→ halus / reflektif

Roughness 1
→ kasar / diffuse
```

Cara membaca skala ini adalah sebagai rentang nilai, bukan dua keadaan yang terpisah. Nilai `0` mewakili batas paling halus, sedangkan nilai `1` mewakili batas paling kasar. Nilai di antara keduanya, misalnya `0.2`, `0.5`, atau `0.8`, akan menghasilkan transisi dari permukaan glossy ke permukaan matte.

Pentingnya **Roughness** dalam grafika komputer adalah karena parameter ini mengubah karakter material tanpa mengubah warna dasarnya. Dua objek dengan `Base Color` yang sama bisa terlihat sangat berbeda jika nilai **Roughness**-nya berbeda. Yang satu bisa tampak seperti permukaan mengkilap, sementara yang lain tampak seperti permukaan matte. Inilah yang membuat material terlihat lebih realistis atau lebih sesuai dengan gaya visual yang diinginkan.

Dalam konteks rendering pipeline, **Roughness** biasanya digunakan pada tahap shading atau fragment processing. Setelah posisi, normal, dan pencahayaan dihitung, shader menggunakan nilai **Roughness** untuk menentukan seberapa banyak refleksi cahaya yang perlu disebar atau di-blur. Dengan kata lain, **Roughness** tidak hanya mengubah warna, tetapi mengubah bentuk dan kualitas highlight pada permukaan.

Sebelum lanjut, hal yang perlu dipahami mahasiswa adalah bahwa **Roughness** adalah properti material yang memengaruhi pantulan cahaya, bukan tekstur warna visual. Nilai ini menentukan seberapa tajam atau lembut highlight, sehingga sangat penting ketika kita ingin membedakan permukaan halus, glossy, atau kasar.

### Inti yang Harus Ditekankan

- **Roughness** menentukan seberapa kasar permukaan secara visual.
- `Roughness 0` menghasilkan permukaan halus/reflektif dengan highlight tajam.
- `Roughness 1` menghasilkan permukaan kasar/diffuse dengan highlight lembut dan tersebar.
- Parameter ini memengaruhi bentuk highlight, bukan hanya warna material.
- Nilai **Roughness** dibaca sebagai rentang `0` sampai `1`, bukan hanya dua pilihan ekstrem.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana nilai **Roughness** ini bisa disimpan per-pixel dalam bentuk **Roughness Map**, sehingga kekasaran permukaan tidak lagi seragam di seluruh objek.

---

## Slide 037 - Roughness Map

### Narasi

**Roughness Map** adalah tekstur **grayscale** yang menyimpan nilai **roughness** untuk setiap titik permukaan. Pada slide sebelumnya, roughness dijelaskan sebagai parameter tunggal: `0` berarti halus atau reflektif, sedangkan `1` berarti kasar atau lebih diffuse. Roughness Map memperluas parameter itu menjadi data per-pixel, sehingga satu material dapat memiliki bagian yang lebih halus dan bagian yang lebih kasar.

```text
gelap
→ lebih halus

terang
→ lebih kasar
```

Dalam pembacaan visual, area gelap pada map biasanya mewakili nilai roughness rendah. Artinya, permukaan dianggap lebih halus, sehingga highlight specular cenderung lebih tajam dan refleksi lebih terdefinisi. Sebaliknya, area terang mewakili roughness tinggi; permukaan dianggap lebih kasar, sehingga highlight menjadi lebih melebar, lebih lembut, dan refleksi tampak lebih tersebar.

Poin penting yang sering disalahpahami adalah bahwa roughness map dibaca sebagai **data**, bukan sebagai warna visual. Warna pada tekstur ini tidak dimaksudkan untuk membuat permukaan terlihat abu-abu, hitam, atau putih secara langsung. Nilai grayscale hanya menjadi input untuk perhitungan pencahayaan di shader. Jadi, jika map terlihat terlalu terang atau terlalu gelap, yang kita perbaiki adalah distribusi nilai roughness, bukan “warna” material.

Dalam konteks rendering pipeline, tekstur ini biasanya disampel pada tahap fragment shading. Setiap fragment yang dihasilkan dari rasterisasi memiliki koordinat `UV` yang digunakan untuk mengambil nilai dari roughness map. Nilai tersebut kemudian masuk ke model material, misalnya input `Roughness` pada shader material, dan memengaruhi bagaimana cahaya dihitung pada permukaan tersebut. Dengan cara ini, detail kekasaran dapat bervariasi di seluruh permukaan tanpa perlu membuat banyak material terpisah.

Untuk memahami slide ini, kita perlu melihat roughness map sebagai lapisan informasi permukaan. Ia tidak menggantikan albedo atau normal map, tetapi bekerja bersama parameter material lain untuk membentuk respons cahaya yang lebih realistis. Yang harus diingat sebelum lanjut adalah bahwa perubahan pada roughness map akan terlihat terutama pada bentuk dan sebaran highlight, bukan pada warna dasar objek.

### Inti yang Harus Ditekankan

- **Roughness Map** adalah tekstur **grayscale** yang menyimpan nilai roughness per-pixel.
- Area **gelap** berarti roughness rendah, sehingga highlight lebih tajam.
- Area **terang** berarti roughness tinggi, sehingga highlight lebih melebar dan lembut.
- Roughness map dibaca sebagai **data shading**, bukan sebagai warna visual.
- Nilai map disampel melalui `UV` pada fragment shader dan memengaruhi bentuk highlight serta refleksi.

### Transisi ke Slide Berikutnya

Setelah roughness map mengatur seberapa kasar atau halus permukaan, langkah berikutnya adalah menentukan apakah permukaan bersifat metal atau non-metal melalui **Metallic**.

---

## Slide 038 - Metallic

### Narasi

Pada material berbasis fisika, **Metallic** adalah parameter yang menentukan apakah permukaan berperilaku seperti **non-metal** atau **metal**. Nilainya biasanya berada pada rentang `0` sampai `1`.

```text
0 → non-metal
1 → metal
```

Artinya, ketika `Metallic` bernilai `0`, renderer memperlakukan permukaan sebagai material non-logam, misalnya **plastic**, **wood**, dan **stone**. Ketika nilainya mendekati `1`, permukaan diperlakukan sebagai logam, misalnya **steel**, **aluminum**, dan **copper**.

Pentingnya parameter ini terletak pada cara cahaya berinteraksi dengan permukaan. Material non-metal dan metal memiliki respons visual yang berbeda dalam pencahayaan, terutama pada refleksi dan tampilan permukaan. Dalam pipeline rendering, nilai **Metallic** dibaca oleh shader material sebagai data penentu sifat permukaan, bukan sebagai warna yang langsung ditampilkan.

Dengan memahami **Metallic**, kita dapat membedakan material secara lebih realistis tanpa harus menambah banyak tekstur. Parameter ini membantu renderer memutuskan bagaimana material bereaksi terhadap cahaya, sehingga hasil render lebih konsisten secara fisika.

Sebelum lanjut, yang perlu dipahami adalah bahwa **Metallic** bukan sekadar membuat permukaan tampak berkilau. Ia adalah penanda sifat material: apakah permukaan bersifat non-logam atau logam. Nilai `0` dan `1` adalah dua ekstrem utama, sementara nilai di antaranya dapat digunakan untuk transisi atau campuran sifat material.

### Inti yang Harus Ditekankan

- **Metallic** menentukan sifat permukaan: `0` untuk **non-metal**, `1` untuk **metal**.
- Contoh **non-metal** meliputi **plastic**, **wood**, dan **stone**.
- Contoh **metal** meliputi **steel**, **aluminum**, dan **copper**.
- Nilai ini dibaca sebagai data material oleh shader, bukan sebagai warna visual langsung.
- Parameter ini penting karena memengaruhi cara permukaan bereaksi terhadap pencahayaan dan refleksi.

### Transisi ke Slide Berikutnya

Jika **Metallic** diberikan sebagai nilai tunggal, satu material hanya memiliki satu sifat metalik. Namun, pada material yang memiliki area logam dan non-logam, kita bisa menggunakan **Metallic Map** untuk mengatur nilai tersebut secara spasial.

---

## Slide 039 - Metallic Map

### Narasi

Nilai `Metallic` yang kita bahas sebelumnya biasanya berupa satu parameter tunggal: `0` untuk **non-metal** dan `1` untuk **metal**. Parameter ini sangat berguna ketika seluruh permukaan objek memiliki sifat yang sama, misalnya seluruh bodi logam atau seluruh permukaan plastik. Namun, dalam banyak model 3D, satu material bisa memiliki bagian yang berbeda sifatnya.

**Metallic Map** hadir untuk mengatasi kebutuhan tersebut. Ia adalah tekstur **grayscale** yang menyimpan nilai `Metallic` untuk setiap pixel pada permukaan objek. Dengan kata lain, nilai metalik tidak lagi diberikan sebagai satu angka global, tetapi dapat bervariasi mengikuti detail tekstur.

```text
hitam  → non-metal
putih  → metal
```

Cara membaca **Metallic Map** cukup intuitif. Area berwarna hitam pada tekstur akan dibaca sebagai nilai `0`, sehingga permukaan tersebut berperilaku seperti **non-metal**. Area berwarna putih dibaca sebagai nilai `1`, sehingga permukaan tersebut berperilaku seperti **metal**. Jika ada area abu-abu, nilainya berada di antara keduanya dan menghasilkan transisi sifat metalik.

Peta ini sangat berguna ketika satu material memiliki area **metal** dan **non-metal** sekaligus. Misalnya, sebuah gagang alat dapat memiliki bagian logam pada pegangan dan bagian plastik pada pelindung. Daripada membuat beberapa material terpisah, kita dapat menggunakan satu material dengan **Metallic Map** yang menggambarkan area mana yang bersifat metalik dan area mana yang tidak.

Dalam konteks **rendering pipeline**, tekstur ini biasanya dibaca pada tahap shading atau fragment processing. Nilai `Metallic` dari pixel tertentu kemudian memengaruhi perhitungan pencahayaan, terutama bagaimana permukaan memantulkan cahaya. Karena itu, **Metallic Map** membantu material terlihat lebih akurat dan konsisten tanpa menambah kompleksitas material secara berlebihan.

Sebelum lanjut, hal yang perlu dipahami adalah bahwa **Metallic Map** bukan tekstur warna biasa. Ia bukan untuk menentukan warna permukaan, melainkan untuk menentukan sifat metalik permukaan. Warna permukaan tetap menjadi tanggung jawab parameter lain seperti `Base Color`.

### Inti yang Harus Ditekankan

- **Metallic Map** adalah tekstur **grayscale** yang menyimpan nilai `Metallic` per pixel.
- **Hitam** berarti **non-metal**, **putih** berarti **metal**, dan abu-abu menunjukkan nilai antara keduanya.
- Peta ini berguna untuk material campuran yang memiliki area **metal** dan **non-metal** dalam satu material.

### Transisi ke Slide Berikutnya

Setelah kita memahami cara `Metallic` disimpan sebagai map, langkah berikutnya adalah melihat bagaimana `Base Color`, `Roughness`, `Metallic`, dan `Normal` bekerja bersama dalam **PBR Workflow**.

---

## Slide 040 - PBR Workflow

### Narasi

Pada tahap ini kita masuk ke **PBR**, yaitu **Physically Based Rendering**. PBR bukan sekadar membuat material terlihat bagus, tetapi cara mendeskripsikan permukaan agar respons cahaya terhadap material memiliki dasar yang konsisten. Dalam grafika komputer, material tidak cukup hanya diberi warna; kita perlu tahu bagaimana permukaan itu memantulkan cahaya, seberapa kasar, apakah bersifat metalik, dan bagaimana detail permukaannya memengaruhi arah shading.

Slide ini menampilkan workflow sederhana:

```text
Base Color
+
Roughness
+
Metallic
+
Normal
+
Lighting
=
PBR Surface
```

Secara konsep, alur ini dibaca dari atas ke bawah sebagai kombinasi input material dan pencahayaan. **Base Color** menentukan warna dasar atau albedo permukaan. **Roughness** menggambarkan kekasaran mikro permukaan, yang memengaruhi sebaran highlight. **Metallic** menentukan apakah permukaan berperilaku seperti logam atau non-logam. **Normal** membawa informasi arah permukaan untuk detail shading. **Lighting** adalah sumber cahaya atau lingkungan yang berinteraksi dengan material tersebut.

Penting untuk dipahami bahwa PBR bekerja pada tahap shading dalam rendering pipeline. Setelah geometri diproses, kamera menentukan apa yang terlihat, dan rasterisasi mengubah objek menjadi pixel, shader kemudian menghitung warna akhir setiap pixel berdasarkan material dan cahaya. Dengan PBR, shader tidak lagi memakai parameter yang sembarang, melainkan parameter yang memiliki makna fisika: warna albedo, kekasaran, sifat metalik, dan normal permukaan.

Keuntungan utama PBR adalah konsistensi. Material yang sama dapat dipindahkan atau digunakan pada **Blender**, **Three.js**, **Unity**, dan renderer lain dengan perilaku yang relatif stabil. Artinya, jika kita membuat material dengan Base Color, Roughness, Metallic, dan Normal yang benar, material tersebut tidak akan tampak aneh hanya karena pindah platform atau berubah pencahayaan.

Dalam konteks kuliah ini, PBR menjadi jembatan antara representasi objek visual dan rendering real-time. Sebelumnya kita sudah melihat **Metallic Map** sebagai salah satu input material. Sekarang kita melihatnya sebagai bagian dari workflow yang lebih besar: material PBR adalah hasil kombinasi beberapa map dan pencahayaan, bukan satu tekstur tunggal.

Sebelum lanjut, mahasiswa perlu menangkap inti bahwa PBR adalah cara sistematis membangun material. Kita tidak hanya memilih warna, tetapi mendefinisikan sifat permukaan. Dengan pemahaman ini, pembahasan berikutnya tentang **Normal** akan lebih mudah karena normal adalah salah satu komponen penting yang membentuk PBR Surface.

### Inti yang Harus Ditekankan

- **PBR** adalah pendekatan material yang berbasis sifat fisika permukaan, bukan hanya warna visual.
- Workflow PBR menggabungkan **Base Color**, **Roughness**, **Metallic**, **Normal**, dan **Lighting** untuk membentuk **PBR Surface**.
- PBR penting karena membuat material konsisten di **Blender**, **Three.js**, **Unity**, dan renderer lain.
- Dalam rendering pipeline, PBR berperan pada tahap shading, di mana shader menghitung respons cahaya terhadap material.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa PBR Surface dibentuk dari beberapa input material, kita akan masuk ke salah satu komponen yang sangat menentukan detail visual, yaitu **Normal pada Surface**. Di slide berikutnya, kita akan melihat bagaimana normal memengaruhi diffuse response, highlight, dan detail shading.

---

## Slide 041 - Normal pada Surface

### Narasi

Setelah workflow PBR, ada satu atribut permukaan yang menentukan bagaimana material bereaksi terhadap cahaya: **normal**.

Dalam grafika komputer, **normal** adalah arah yang tegak lurus terhadap permukaan pada suatu titik. Ia memberi tahu renderer bagaimana permukaan itu menghadap ruang, bukan hanya bentuk geometri objek.

Normal sangat penting karena pencahayaan dihitung berdasarkan sudut antara cahaya, permukaan, dan arah pandang. Secara sederhana:

```text
Arah Cahaya
     \
      \  sudut terhadap normal
       \
Permukaan --- Normal
```

Dari sudut itulah renderer menentukan seberapa terang permukaan, di mana highlight muncul, dan bagaimana detail permukaan terlihat.

Normal memengaruhi beberapa hal utama:

- **diffuse response**, yaitu seberapa banyak cahaya tersebar dari permukaan.
- **highlight**, yaitu area terang yang muncul akibat refleksi atau pantulan cahaya.
- **detail shading**, yaitu variasi gelap-terang yang membuat permukaan tampak lebih hidup.

Dalam pipeline rendering, normal biasanya menjadi atribut yang digunakan shader. Setelah posisi pixel atau vertex diketahui, shader membaca normal untuk menghitung respons material terhadap cahaya. Dengan kata lain, normal adalah jembatan antara geometri dan pencahayaan.

Konsep ini juga menjadi dasar **Normal Map**. Normal Map dapat memodifikasi arah shading tanpa menambah geometry nyata. Artinya, permukaan dapat tampak lebih detail secara visual, tetapi siluet dan bentuk mesh tetap tidak berubah.

Sebelum lanjut, mahasiswa perlu memahami bahwa normal bukan sekadar “garis tegak lurus”, tetapi informasi arah yang menentukan hasil shading.

### Inti yang Harus Ditekankan

- **Normal** adalah vektor arah yang tegak lurus permukaan dan menentukan bagaimana permukaan berinteraksi dengan cahaya.
- Normal memengaruhi **diffuse response**, **highlight**, dan **detail shading**.
- **Normal Map** dapat mengubah arah shading tanpa mengubah geometry nyata.

### Transisi ke Slide Berikutnya

Dengan memahami peran normal pada permukaan, kita dapat melanjutkan ke **Normal Map**, yaitu cara memberi ilusi detail seperti goresan, panel, batu kasar, dan emboss tanpa menambah vertex atau mengubah silhouette geometry.

---

## Slide 042 - Normal Map

### Narasi

Normal map adalah teknik untuk memberi **ilusi detail permukaan** pada objek 3D. Dalam grafika komputer, detail seperti goresan, panel, batu kasar, atau emboss sering kali tidak perlu dibuat sebagai geometri tambahan. Cukup dengan memodifikasi cara permukaan merespons cahaya, objek akan terlihat lebih kaya detail.

Inti dari normal map adalah ia bekerja pada tahap **shading**, bukan pada bentuk fisik mesh. Artinya, normal map dapat membuat permukaan tampak bergelombang, berlekuk, atau bertekstur, tetapi **silhouette geometry** tetap sama. Dari sudut pandang kamera, garis tepi objek tidak berubah; yang berubah adalah arah normal yang digunakan untuk menghitung pencahayaan.

```text
mengubah shading
bukan silhouette geometry
```

Potongan ini penting karena membedakan normal map dari geometri nyata. Jika kita menambahkan detail dengan mesh, jumlah vertex, edge, dan face dapat meningkat. Dengan normal map, detail visual dapat tetap ringan karena sistem rendering hanya perlu membaca informasi normal tambahan saat menghitung warna dan pencahayaan.

Contoh yang diberikan pada slide membantu membayangkan efeknya:

- **goresan** membuat permukaan logam atau plastik tampak aus,
- **panel** memberi kesan bidang yang sedikit menonjol atau cekung,
- **batu kasar** membuat permukaan tampak tidak rata,
- **emboss** memberi efek relief atau cetakan pada material.

Yang perlu dipahami mahasiswa sebelum lanjut adalah bahwa normal map tidak mengubah posisi titik geometri. Ia hanya memengaruhi **arah normal** yang dipakai oleh shading, sehingga highlight, diffuse response, dan detail pencahayaan berubah. Pemahaman ini penting karena normal map sering digunakan untuk menambah detail visual tanpa meningkatkan biaya rendering secara signifikan.

### Inti yang Harus Ditekankan

- Normal map memberi **ilusi detail permukaan**, bukan detail geometri nyata.
- Normal map mengubah **shading**, bukan **silhouette geometry**.
- Detail seperti goresan, panel, batu kasar, dan emboss dapat dibuat lebih ringan dengan normal map.
- Normal map bekerja dengan memodifikasi arah normal yang digunakan untuk pencahayaan.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa normal map hanya memengaruhi shading, langkah berikutnya adalah melihat bagaimana normal map dimasukkan ke dalam material. Pada slide berikutnya, kita akan melihat workflow node yang menghubungkan tekstur normal dengan material shader.

---

## Slide 043 - Normal Map Node

### Narasi

Setelah kita memahami bahwa **Normal Map** memberi ilusi detail permukaan, langkah berikutnya adalah melihat bagaimana data tersebut masuk ke material. Pada slide ini, kita melihat workflow node yang umum digunakan di Blender:

```text
Image Texture
↓
Normal Map Node
↓
Principled BSDF — Normal
```

Alur ini dibaca dari atas ke bawah. `Image Texture` adalah sumber data gambar normal map. Gambar tersebut kemudian masuk ke **Normal Map Node**, yang berfungsi memproses data gambar agar sesuai untuk input normal pada material. Setelah itu, hasilnya dikirim ke `Principled BSDF` melalui input `Normal`.

Poin pentingnya adalah **Normal Map tidak boleh diperlakukan seperti texture warna biasa**. Normal map berisi informasi arah permukaan yang digunakan untuk shading, bukan warna visual yang langsung ditampilkan. Karena itu, node khusus diperlukan agar data tersebut diinterpretasikan dengan benar oleh shader.

Dalam konteks rendering pipeline, input `Normal` pada `Principled BSDF` memengaruhi bagaimana cahaya dipantulkan dari permukaan. Detail seperti goresan, panel, atau batu kasar yang dibahas sebelumnya akan terlihat melalui perubahan shading, bukan melalui perubahan siluet geometri. Dengan kata lain, normal map membantu permukaan tampak lebih detail tanpa menambah segmen mesh secara signifikan.

Sebelum lanjut, mahasiswa perlu memahami bahwa urutan koneksi node menentukan apakah normal map berfungsi sesuai tujuan. Jika data normal map tidak melewati node yang sesuai, hasil shading bisa tidak benar atau tidak sesuai dengan detail yang diinginkan.

### Inti yang Harus Ditekankan

- **Normal Map Node** adalah tahap pemrosesan antara `Image Texture` dan `Principled BSDF`.
- Normal map masuk ke input `Normal`, bukan ke input warna seperti `Base Color`.
- Node ini penting agar data normal map diinterpretasikan sebagai informasi shading, bukan sebagai warna visual.
- Hasil akhirnya memengaruhi pencahayaan permukaan tanpa mengubah siluet geometri.

### Transisi ke Slide Berikutnya

Setelah kita tahu normal map harus melewati node yang sesuai, pertanyaan berikutnya adalah bagaimana data texture ini seharusnya diinterpretasikan secara numerik. Pada slide berikutnya, kita akan membahas **Color Space Texture**, termasuk mengapa normal map tidak diperlakukan sebagai warna visual.

---

## Slide 044 - Color Space Texture

### Narasi

Pada tahap material, kita sudah melihat bagaimana texture masuk ke shader, misalnya `Image Texture` lalu `Normal Map Node` menuju `Principled BSDF`. Sekarang ada satu keputusan penting sebelum texture benar-benar dipakai: **color space** dari texture tersebut.

Color space menentukan bagaimana nilai pixel dibaca oleh sistem rendering. Untuk `Base Color`, kita biasanya memilih `sRGB` karena channel ini memang merepresentasikan warna visual yang ingin dilihat mata. `sRGB` adalah ruang warna yang umum untuk tampilan visual, sehingga warna pada material akan terasa sesuai dengan gambar texture yang kita lihat di editor.

Untuk parameter lain, seperti `Roughness`, `Metallic`, dan `Normal`, nilai pixel tidak seharusnya dibaca sebagai warna. Karena itu, texture untuk parameter ini sebaiknya diset ke `Non-Color`. `Non-Color` berarti data dibaca apa adanya, tanpa koreksi warna visual.

```text
Base Color → sRGB
Roughness  → Non-Color
Metallic   → Non-Color
Normal     → Non-Color
```

Kita bisa membacanya sebagai aturan sederhana: jika texture menentukan **warna permukaan**, gunakan `sRGB`; jika texture menentukan **data material**, gunakan `Non-Color`. `Roughness` adalah data kekasaran, `Metallic` adalah data sifat metalik, dan `Normal` adalah data arah permukaan. Ketiganya bukan warna yang perlu dikoreksi secara visual.

Jika salah memilih color space, hasil rendering bisa terlihat tidak konsisten. Misalnya, `Roughness` yang seharusnya hitam-putih sebagai data bisa berubah terang atau gelap karena interpretasi warna. `Normal` yang salah color space juga dapat membuat permukaan terlihat bergelombang tidak wajar, karena nilai arah normal tidak lagi dibaca sebagai data yang benar.

Sebelum lanjut, hal yang perlu dipahami adalah: texture tidak selalu berarti gambar berwarna. Dalam pipeline material, setiap channel memiliki peran berbeda. `Base Color` adalah warna, sedangkan `Roughness`, `Metallic`, dan `Normal` adalah data yang memengaruhi bagaimana shader menghitung penampakan material.

### Inti yang Harus Ditekankan

- `Base Color` umumnya menggunakan `sRGB` karena merepresentasikan warna visual.
- `Roughness`, `Metallic`, dan `Normal` menggunakan `Non-Color` karena berisi data material, bukan warna.
- Color space yang salah dapat mengubah nilai data dan membuat hasil rendering tidak sesuai.
- Texture harus dibaca sesuai perannya dalam material: warna visual atau data shader.

### Transisi ke Slide Berikutnya

Setelah kita memastikan texture dibaca dengan color space yang tepat, kita bisa lanjut ke efek material yang lebih ekspresif, yaitu `Emission`, yang membuat permukaan terlihat memancarkan cahaya sendiri.

---

## Slide 045 - Emission

### Narasi

Setelah kita memahami bahwa texture tidak selalu diperlakukan sebagai warna visual, kita masuk ke salah satu properti material yang paling mudah dikenali secara visual: **Emission**.

**Emission** membuat surface terlihat memancarkan cahaya sendiri. Artinya, material tersebut tidak hanya tampak karena menerima cahaya dari lingkungan, tetapi juga tampak seperti memiliki cahaya yang keluar dari permukaannya.

Ini penting dalam grafika komputer karena banyak objek digital memang secara visual bersinar atau menyala. Contohnya:

- screen,
- neon,
- LED,
- robot eye,
- sci-fi panel.

Tanpa **Emission**, objek-objek seperti ini biasanya hanya bisa dibuat terlihat terang dengan cara menambah cahaya eksternal. Padahal, secara konsep, yang kita inginkan adalah permukaan itu sendiri yang tampak menyala.

Parameter utama yang perlu kita perhatikan adalah:

```text
Emission Color
Emission Strength
```

`Emission Color` menentukan warna cahaya yang dipancarkan oleh surface. Misalnya, jika kita ingin membuat robot eye yang menyala biru, maka `Emission Color` akan diatur ke warna biru.

`Emission Strength` menentukan seberapa kuat atau seberapa terang surface tersebut tampak memancarkan cahaya. Semakin tinggi nilainya, semakin kuat kesan menyala yang dihasilkan.

Dalam konteks rendering pipeline, **Emission** berperan pada tahap shading material. Ia membantu membedakan material yang hanya memantulkan atau menerima cahaya dari material yang secara visual tampak menghasilkan cahaya sendiri.

Sebelum lanjut, yang perlu dipahami mahasiswa adalah bahwa **Emission** bukan sekadar membuat warna lebih terang. Ia adalah properti material yang memberi kesan bahwa permukaan tersebut memiliki sumber cahaya visual pada dirinya sendiri.

### Inti yang Harus Ditekankan

- **Emission** membuat surface terlihat memancarkan cahaya sendiri.
- `Emission Color` mengatur warna cahaya yang dipancarkan.
- `Emission Strength` mengatur seberapa kuat surface tampak menyala.
- Properti ini berguna untuk objek seperti screen, neon, LED, robot eye, dan sci-fi panel.
- **Emission** membantu membedakan material yang menyala dari material yang hanya menerima cahaya.

### Transisi ke Slide Berikutnya

Setelah kita memahami bahwa **Emission** memberi surface kemampuan untuk tampak menyala, langkah berikutnya adalah menentukan bagian mana dari surface yang benar-benar menyala. Untuk itu, slide berikutnya akan membahas **Emission Map**, yaitu cara mengendalikan area emission secara lebih lokal.

---

## Slide 046 - Emission Map

### Narasi

Pada tahap sebelumnya, **emission** membuat permukaan seolah memancarkan cahaya sendiri. Namun, jika seluruh permukaan diberi emission yang sama, hasilnya bisa terlalu seragam dan kurang realistis. Misalnya, pada model robot, kita tidak ingin seluruh badan menyala; yang menyala hanya bagian tertentu seperti mata, panel, atau indikator.

**Emission Map** hadir untuk memberikan kontrol lokal terhadap area emission. Secara sederhana, map ini adalah texture yang menentukan bagian mana dari permukaan yang boleh menyala dan bagian mana yang tetap gelap. Area yang diberi nilai emission akan terlihat memancarkan cahaya, sedangkan area yang tidak diberi nilai akan tetap mengikuti material dasar.

Map ini bekerja bersama parameter emission, seperti `Emission Color` dan `Emission Strength`, tetapi perannya berbeda. Parameter emission mengatur warna dan kekuatan cahaya yang dipancarkan, sedangkan **Emission Map** mengatur di mana emission itu aktif pada permukaan.

Contoh yang diberikan pada slide cukup membantu membayangkan penggunaannya:

```text
robot body
→ dark metal

robot eyes
→ emissive
```

Pada contoh ini, badan robot tetap terlihat seperti logam gelap, sementara mata robot diberi emission sehingga tampak menyala. Dengan cara ini, satu material bisa memiliki perilaku visual yang berbeda di beberapa bagian permukaan tanpa harus membuat material terpisah untuk setiap area.

Dalam konteks rendering, **Emission Map** dibaca pada tahap shading atau material evaluation. Untuk setiap titik pada permukaan yang sedang di-render, shader akan mengecek nilai map di lokasi tersebut. Jika nilainya menunjukkan emission, titik itu akan diberi kontribusi cahaya tambahan; jika tidak, titik itu tetap menggunakan warna dan material normal. Proses ini membuat efek emission terasa lebih presisi dan artistik.

Hal penting yang perlu dipahami sebelum lanjut adalah bahwa map tidak hanya "menempel" sembarangan pada model. Agar area emission berada di posisi yang benar, kita perlu mengetahui koordinat permukaan, yaitu **UV mapping**. UV membantu menentukan posisi texture pada mesh, sehingga emission map dapat mengarah ke mata robot, panel, atau detail lain secara tepat.

### Inti yang Harus Ditekankan

- **Emission Map** menentukan bagian permukaan yang menyala, bukan seluruh permukaan secara seragam.
- Map ini memberi **kontrol lokal** terhadap area emission, misalnya mata robot menyala sementara badan tetap gelap.
- Emission map bekerja dengan membaca nilai texture pada permukaan saat shading, sehingga efeknya lebih presisi.
- Untuk menempatkan map dengan benar, kita membutuhkan pemahaman **UV mapping** agar area emission berada di posisi yang tepat pada mesh.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan masuk ke praktikum UV dan PBR material. Di sana, mahasiswa akan menandai seam, melakukan unwrap, mengatur UV island, lalu menggunakan texture map untuk membuat material yang siap digunakan pada tahap lighting dan rendering.

---

## Slide 047 - Praktikum: UV & PBR Material

### Narasi

Pada slide ini, kita beralih dari penjelasan konsep ke praktik langsung. Mahasiswa akan menggunakan asset yang sudah dikerjakan pada Pertemuan 9, lalu menyiapkan asset tersebut agar siap masuk ke tahap **lighting** dan **rendering**. Inti dari praktikum ini bukan sekadar membuat model terlihat berwarna, tetapi memastikan permukaan objek memiliki koordinat tekstur yang benar dan material yang dapat bereaksi secara konsisten terhadap cahaya.

Dalam grafika komputer, tekstur tidak dapat ditempelkan secara sembarang pada permukaan 3D. Kita membutuhkan **UV mapping**, yaitu proses memetakan permukaan objek ke bidang 2D. Koordinat UV berfungsi sebagai alamat tekstur: saat objek dirender, shader akan menggunakan koordinat tersebut untuk mengambil warna atau nilai material dari `texture map`. Jika UV tidak rapi, tekstur bisa tertarik, terlipat, atau tidak sesuai dengan bagian objek yang seharusnya.

Alur kerja praktikum dapat dibaca sebagai berikut:

1. **Menandai seam** — menentukan garis potong pada permukaan mesh agar objek dapat dibuka ke bidang 2D.
2. **Melakukan unwrap** — mengubah permukaan 3D menjadi layout UV.
3. **Mengatur UV island** — merapikan potongan UV agar tidak tumpang tindih dan proporsional.
4. **Menggunakan checker** — memeriksa distorsi, peregangan, atau area yang tidak sesuai.
5. **Membuat material PBR** — menyiapkan parameter material yang berbasis fisika, seperti respons warna, kekasaran, dan kemetalikan.
6. **Menggunakan texture map** — menghubungkan tekstur ke parameter material agar permukaan memiliki detail visual yang lebih realistis.

Perlu dipahami bahwa **seam** bukan cacat pada model, melainkan batas pemotongan yang disengaja. Semakin baik kita memilih seam, semakin mudah objek di-unwrap tanpa distorsi berlebihan. **UV island** adalah potongan permukaan yang sudah dipetakan ke bidang 2D; island yang rapi membantu tekstur terlihat natural dan memudahkan penempatan detail pada area tertentu.

Penggunaan **checker** sangat penting karena memberikan umpan balik visual yang cepat. Pola kotak-kotak membantu kita melihat apakah ada area yang terlalu meregang, terlalu miring, atau tidak proporsional. Jika checker terlihat normal, kemungkinan besar tekstur lain juga akan menempel dengan lebih baik.

**PBR material** penting karena material tidak hanya menentukan warna, tetapi juga cara permukaan berinteraksi dengan cahaya. Dalam pipeline rendering, parameter material akan digunakan oleh shader untuk menghitung pencahayaan pada setiap fragmen. Dengan material PBR, hasil rendering menjadi lebih konsisten ketika kamera, cahaya, atau lingkungan berubah. Pada tahap ini, kita belum perlu membahas detail teknis setiap channel secara mendalam; yang penting adalah mahasiswa memahami bahwa `texture map` akan menjadi input bagi material, dan material akan menjadi input bagi proses lighting dan rendering.

Target akhir praktikum ini adalah asset yang sudah memiliki UV rapi dan material PBR yang siap digunakan. Dengan kata lain, objek tidak lagi sekadar geometri kosong, tetapi sudah memiliki identitas visual yang dapat diteruskan ke tahap pencahayaan dan render final.

### Inti yang Harus Ditekankan

- **UV mapping** adalah jembatan antara permukaan 3D dan tekstur 2D.
- **Seam**, **unwrap**, dan **UV island** menentukan apakah tekstur akan menempel rapi atau mengalami distorsi.
- **Checker** berfungsi sebagai alat uji visual untuk memeriksa peregangan dan proporsi UV.
- **PBR material** membuat objek bereaksi terhadap cahaya secara lebih konsisten dan realistis.
- Target praktikum adalah asset yang siap masuk ke tahap **lighting** dan **rendering**.

### Transisi ke Slide Berikutnya

Setelah memahami tujuan praktikum, slide berikutnya akan menampilkan urutan langkah kerja yang lebih rinci, mulai dari persiapan model hingga final material review.

---

## Slide 048 - Rencana Praktikum

### Narasi

Rencana praktikum ini sebaiknya dibaca sebagai **alur kerja**, bukan sekadar daftar tugas. Tujuannya adalah memastikan model 3D yang sudah dibuat benar-benar siap menerima tekstur dan material PBR. Urutan langkah di sini penting karena beberapa keputusan di awal akan memengaruhi kualitas hasil akhir, terutama pada tahap lighting dan rendering.

Kita mulai dari **Persiapan model** dan `Apply Scale`. Dalam Blender, scale yang belum diterapkan dapat membuat UV dan tekstur berperilaku tidak konsisten. Setelah model siap, langkah berikutnya adalah `Mark Seam`. Seam adalah garis pemotongan pada permukaan model yang menentukan di mana permukaan 3D akan “dibuka” agar dapat dipetakan ke ruang UV 2D.

Selanjutnya, `Unwrap` mengubah permukaan 3D menjadi **UV island**. Di tahap ini, mahasiswa perlu memperhatikan distorsi, overlap, dan ukuran island. `Checker Test` membantu melihat apakah pemetaan UV sudah wajar. Jika kotak checker terlihat terlalu memanjang, miring, atau tidak seragam, biasanya berarti UV masih perlu diperbaiki. `UV Island Adjustment` dilakukan untuk memperbaiki ukuran dan posisi island agar tekstur tidak terlihat pecah atau tidak konsisten.

Setelah UV siap, langkah berikutnya adalah mengisi material PBR. `Base Color` menentukan warna dasar permukaan, `Roughness` mengatur seberapa kasar atau halus refleksi, `Metallic` menentukan apakah permukaan berperilaku seperti logam atau non-logam, `Normal Map` memberi kesan detail permukaan tanpa menambah geometri, dan `Emission` digunakan untuk bagian yang memancarkan cahaya. `Final Material Review` memastikan semua map terpasang pada input yang benar dan tampilan material sudah konsisten.

Dari sisi rendering pipeline, urutan ini penting karena tekstur tidak bisa langsung “ditempel” ke model secara sembarangan. Model harus memiliki peta UV yang baik, lalu texture map dibaca oleh shader, khususnya **Principled BSDF**, untuk menghasilkan **surface appearance** yang masuk akal secara visual. Dengan kata lain, kualitas UV menentukan kualitas material, dan kualitas material menentukan hasil rendering.

Sebelum lanjut, mahasiswa perlu memahami bahwa detail teknis tiap langkah ada pada modul praktikum. Namun, yang harus benar-benar dipahami adalah alasan di balik urutannya: model harus bersih dan scale diterapkan, seam harus dipilih dengan baik, unwrap harus minim distorsi, checker harus digunakan sebagai validasi, dan PBR map harus sesuai dengan sifat material.

### Inti yang Harus Ditekankan

- Urutan praktikum adalah alur kerja: model → UV → texture → PBR material.
- `Apply Scale`, `Mark Seam`, dan `Unwrap` menentukan kualitas pemetaan tekstur.
- `Checker Test` dan `UV Island Adjustment` membantu memastikan UV tidak distorsi atau overlap.
- `Base Color`, `Roughness`, `Metallic`, `Normal Map`, dan `Emission` adalah parameter PBR yang membentuk tampilan permukaan.
- `Final Material Review` memastikan material siap untuk lighting dan rendering.

### Transisi ke Slide Berikutnya

Setelah alur praktikum ini dipahami, kita akan merangkum seluruh konsep pertemuan: dari material, UV mapping, texture map, hingga PBR sebagai benang merah pembentukan tampilan permukaan.

---

## Slide 049 - Ringkasan Pertemuan

### Narasi

Kita menutup pertemuan dengan merangkum alur kerja material di Blender. Intinya, model 3D tidak cukup hanya memiliki geometri; ia juga perlu memiliki permukaan yang dapat dibaca oleh renderer. Untuk itu kita menggunakan **UV Mapping** agar permukaan 3D memiliki koordinat 2D yang konsisten. **Seam** dan **Unwrap** menjadi langkah penting karena menentukan bagaimana permukaan dibuka menjadi **UV Island**, sementara **Texel Density** membantu menjaga ukuran tekstur tetap proporsional antar bagian objek.

Setelah UV siap, tekstur dapat dipetakan melalui **Texture Maps**. Dalam pendekatan **PBR**, parameter seperti `Base Color`, `Roughness`, `Metallic`, `Normal Map`, dan `Emission` digunakan untuk mendefinisikan bagaimana permukaan berinteraksi dengan cahaya. **Principled BSDF** menjadi node material yang menyatukan parameter tersebut sehingga tampilan objek lebih realistis dan konsisten.

Benang merahnya dapat dibaca sebagai pipeline sederhana: `3D Model → UV Mapping → Texture Maps → PBR Material → Surface Appearance`. Artinya, dari model 3D kita menyiapkan UV, memetakan tekstur, menyusun material PBR, dan akhirnya menghasilkan **Surface Appearance** yang siap dirender. Sebelum menutup, mahasiswa perlu memastikan bahwa konsep UV dan parameter material ini sudah dipahami, karena alur tersebut akan menjadi dasar ketika objek diuji dengan pencahayaan, kamera, dan render.

### Inti yang Harus Ditekankan

- **Material** dan **PBR** menentukan bagaimana permukaan objek berinteraksi dengan cahaya, bukan hanya warnanya saja.
- **UV Mapping**, **Seam**, **Unwrap**, dan **UV Island** adalah dasar agar tekstur dapat dipetakan secara benar ke model 3D.
- Parameter seperti `Base Color`, `Roughness`, `Metallic`, `Normal Map`, dan `Emission` membentuk tampilan permukaan melalui **Principled BSDF**.
- Alur utama yang harus diingat adalah `3D Model → UV Mapping → Texture Maps → PBR Material → Surface Appearance`.

### Transisi ke Slide Berikutnya

Dengan ringkasan ini, kita menutup pertemuan. Pada materi selanjutnya, kita akan melanjutkan ke **Blender Lighting, Camera & Rendering**, di mana material yang sudah dibuat akan diuji dengan pencahayaan, sudut kamera, dan proses render akhir.

---

## Slide 050 - TERIMA KASIH

### Narasi

Kita sampai pada bagian penutup pertemuan ke-10. Slide ini merupakan momen untuk menutup rangkaian pembahasan tentang **Blender Materials, UV & Texturing**, sekaligus memberikan apresiasi kepada mahasiswa yang telah mengikuti proses pembelajaran dari konsep material hingga penerapan tekstur pada model 3D.

Secara keseluruhan, kita telah membangun pemahaman bahwa tampilan visual objek 3D tidak hanya ditentukan oleh bentuk geometrinya, tetapi juga oleh bagaimana **material**, **texture**, dan **UV mapping** bekerja bersama. Konsep seperti **Principled BSDF**, **Base Color**, **Roughness**, **Metallic**, **Normal Map**, dan **Emission** menjadi dasar penting untuk menghasilkan permukaan yang lebih realistis atau artistik sesuai kebutuhan.

Dengan memahami alur dari **3D model** ke **UV mapping**, lalu ke **texture maps**, dan akhirnya ke **PBR material**, mahasiswa diharapkan mampu melihat bahwa tampilan akhir objek adalah hasil dari beberapa tahapan yang saling terhubung. Pemahaman ini akan menjadi fondasi penting ketika kita mulai membahas elemen visual lain yang memengaruhi hasil render.

### Inti yang Harus Ditekankan

- Pertemuan ditutup dengan penekanan bahwa **material**, **texture**, dan **UV mapping** adalah komponen penting dalam membentuk tampilan permukaan objek 3D.
- Mahasiswa perlu mengingat bahwa hasil visual akhir dipengaruhi oleh kombinasi **geometri**, **material**, **tekstur**, dan parameter **PBR**.
- Materi berikutnya akan melanjutkan proses visualisasi dengan membahas **Blender Lighting, Camera & Rendering**, yang akan menentukan bagaimana objek tampak dalam adegan 3D.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan masuk ke materi **Blender Lighting, Camera & Rendering**, di mana konsep material dan texture yang telah kita pelajari akan diuji melalui pencahayaan, sudut kamera, dan proses render akhir.
