# Narasi Grafika Komputer - Pertemuan 11

## Blender Lighting, Camera & Rendering

Sumber: markdown/pert11-ringkas.md

---

## Slide 000 - Cover

### Narasi

Selamat datang kembali pada pertemuan ke-11 mata kuliah **EF234504 — Grafika Komputer**. Pada sesi ini, kita akan masuk ke tahap yang sangat menentukan dalam proses produksi visual, yaitu bagaimana sebuah adegan tiga dimensi akhirnya terlihat meyakinkan di layar. Fokusnya adalah **Blender Lighting, Camera & Rendering**, karena kualitas gambar akhir tidak hanya ditentukan oleh geometri, tetapi juga oleh pencahayaan, sudut pandang kamera, dan cara adegan di-render.

Secara konseptual, bagian ini menghubungkan beberapa elemen yang sudah kita pelajari sebelumnya dengan hasil visual yang siap ditampilkan. **Lighting** membentuk volume, material, dan suasana; **camera** menentukan komposisi, perspektif, dan apa yang terlihat; sedangkan **rendering** mengubah data adegan menjadi citra dua dimensi. Dalam konteks grafika komputer, ketiganya berada pada bagian akhir pipeline visual, di mana keputusan artistik dan teknis bertemu.

Untuk pertemuan ini, kita akan menggunakan **Blender** sebagai lingkungan praktik. Mahasiswa diharapkan tidak hanya tahu cara mengaktifkan fitur, tetapi juga memahami alasan di balik setiap pilihan: mengapa cahaya tertentu digunakan, mengapa sudut kamera berpengaruh, dan mengapa hasil render bisa berbeda tergantung engine, sampling, dan pengaturan pencahayaan. Dengan dasar ini, kita dapat membangun adegan yang lebih komunikatif dan realistis.

### Inti yang Harus Ditekankan

- Pertemuan 11 fokus pada **Blender Lighting, Camera & Rendering** sebagai tahap akhir visualisasi adegan 3D.
- **Lighting**, **camera**, dan **rendering** saling menentukan kualitas gambar akhir.
- Mahasiswa perlu memahami alasan teknis dan artistik, bukan hanya langkah operasional di Blender.

### Transisi ke Slide Berikutnya

Setelah memahami posisi pertemuan ini dalam alur materi, kita lanjut ke daftar topik yang akan dibahas, mulai dari jenis cahaya, komposisi kamera, hingga engine rendering dan praktikum.

---

## Slide 001 - Topik Pembahasan

### Narasi

Pada pertemuan ini, kita bergerak dari tahap membangun objek menuju tahap menentukan bagaimana objek tersebut terlihat. Dalam grafika komputer, model 3D saja belum cukup; hasil akhir sangat ditentukan oleh **lighting**, **kamera**, dan **rendering**. Ketiga hal ini menentukan apakah objek terlihat jelas, memiliki dimensi, terasa realistis, atau sesuai dengan tujuan visual yang ingin dicapai.

Kita akan mulai dari jenis-jenis cahaya utama, yaitu **Point Light**, **Sun Light**, **Spot Light**, dan **Area Light**. Masing-masing memiliki karakter arah, sebaran, dan kualitas bayangan yang berbeda. Setelah itu, kita akan melihat **Three-Point Lighting** sebagai pola dasar pencahayaan yang membantu membentuk volume objek secara konsisten dan mudah dibaca.

Selanjutnya, pembahasan beralih ke kamera: **Camera Composition**, **Camera Angle**, **Focal Length**, dan **Depth of Field**. Konsep-konsep ini penting karena kamera tidak hanya merekam objek, tetapi juga mengarahkan perhatian penonton, mengatur proporsi, dan menciptakan kedalaman visual. Kita juga akan membahas **HDRI** sebagai sumber pencahayaan lingkungan yang dapat membuat hasil render lebih natural.

Bagian terakhir membahas sisi teknis rendering, yaitu perbandingan `EEVEE` dan `Cycles`, serta konsep **sampling** dan **denoising**. Di sini mahasiswa perlu memahami trade-off antara kecepatan render dan kualitas gambar. Sebagai penutup, ada praktikum **Product-Style Lighting & Rendering** untuk mengaplikasikan seluruh konsep dalam satu alur kerja yang utuh.

### Inti yang Harus Ditekankan

- **Lighting**, **kamera**, dan **rendering** adalah tiga penentu utama hasil visual akhir.
- Jenis light, **Three-Point Lighting**, dan **HDRI** membantu membentuk volume, arah cahaya, dan suasana gambar.
- **Camera Composition**, **Camera Angle**, **Focal Length**, dan **Depth of Field** menentukan cara objek dilihat dan dirasakan.
- `EEVEE` dan `Cycles` memiliki karakter berbeda dalam kualitas, kecepatan, dan penggunaan **sampling** serta **denoising**.
- Praktikum **Product-Style Lighting & Rendering** menjadi aplikasi integratif dari seluruh konsep.

### Transisi ke Slide Berikutnya

Dengan peta topik ini, kita lanjut ke capaian pembelajaran agar mahasiswa tahu kemampuan apa yang harus dikuasai setelah pertemuan ini selesai.

---

## Slide 002 - Capaian Pembelajaran

### Narasi

Pada pertemuan ini, kita tidak hanya belajar menekan tombol render di Blender. Kita akan membangun alur kerja visual yang utuh: mulai dari memahami karakter **Light**, mengatur **kamera**, lalu memilih **render engine** yang sesuai. Capaian pembelajaran ini menjadi peta kerja mahasiswa, karena setiap poin mengarah pada satu keputusan produksi: bagaimana cahaya membentuk objek, bagaimana kamera membingkai objek, dan bagaimana hasil akhir terlihat bersih serta konsisten.

Secara praktis, mahasiswa diharapkan mampu membedakan **Point**, **Sun**, **Spot**, dan **Area Light**, lalu mengatur **intensitas**, **arah**, **warna**, dan **softness** agar pencahayaan tidak sekadar terang, tetapi juga membentuk volume dan mood. Selanjutnya, mahasiswa perlu menyusun **three-point lighting**, membuat **camera composition** yang baik, memilih **camera angle** dan `focal length`, serta menggunakan `depth of field` untuk mengarahkan perhatian penonton.

Di sisi rendering, mahasiswa juga perlu memahami peran `HDRI`, membandingkan `EEVEE` dan `Cycles`, serta memahami `sampling`, `noise`, dan `denoising`. Poin-poin ini penting karena menentukan apakah render cepat dan cukup untuk preview, atau lebih realistis tetapi membutuhkan waktu lebih lama. Pada akhirnya, semua keputusan tersebut bermuara pada satu capaian: menghasilkan **final render** yang baik secara visual, teknis, dan komunikatif.

### Inti yang Harus Ditekankan

- Capaian ini bersifat **end-to-end**: dari **lighting**, **camera**, sampai **rendering**.
- Mahasiswa harus memahami bahwa cahaya, kamera, dan render engine adalah **keputusan artistik sekaligus teknis**.
- `EEVEE` dan `Cycles` tidak diposisikan sebagai “yang lebih baik”, tetapi sebagai pilihan sesuai kebutuhan **kecepatan**, **realisme**, dan **waktu render**.
- `sampling`, `noise`, dan `denoising` adalah bagian penting dari kualitas hasil render, bukan sekadar pengaturan tambahan.
- **Final render** yang baik harus menunjukkan objek dengan jelas, pencahayaan yang terkontrol, komposisi kamera yang kuat, dan kualitas visual yang konsisten.

### Transisi ke Slide Berikutnya

Setelah kita memahami capaian yang diharapkan, langkah berikutnya adalah menempatkan materi ini dalam alur pertemuan: dari **3D Modeling**, lalu **UV + Material + Texture**, menuju **Lighting + Camera + Rendering** yang akan kita kerjakan pada pertemuan ini.

---

## Slide 003 - Posisi Materi

### Narasi

Sebelum masuk ke praktik, kita perlu menempatkan posisi pertemuan ini dalam alur mata kuliah. Secara sederhana, alurnya bisa dibaca sebagai:

```text
3D Modeling
UV + Material + Texture
Lighting + Camera + Rendering
```

Pada **Pertemuan 9**, fokus utama adalah **3D Modeling**, yaitu membangun bentuk objek. Pada **Pertemuan 10**, fokus bergeser ke **UV + Material + Texture**, yaitu memberi identitas visual pada permukaan objek. Pertemuan 11 ini berada tepat setelah dua tahap tersebut, dengan fokus **Lighting + Camera + Rendering**.

Artinya, materi hari ini tidak menjelaskan ulang cara membuat model atau cara memetakan tekstur. Material dari P10 dianggap sudah tersedia sebagai input. Yang kita tanyakan sekarang adalah bagaimana objek yang sudah memiliki bentuk dan material tersebut bisa dipresentasikan secara visual: bagaimana cahaya membentuk volume, bagaimana kamera menentukan sudut pandang, dan bagaimana render engine mengubah seluruh informasi menjadi gambar akhir.

Posisi ini penting karena dalam grafika komputer, model dan material saja belum cukup untuk menghasilkan tampilan yang komunikatif. Tanpa pencahayaan, objek sulit dibaca secara spasial. Tanpa kamera, kita tidak punya framing dan perspektif. Tanpa rendering, informasi 3D tidak menjadi citra 2D yang bisa dilihat. Jadi pertemuan ini adalah tahap penyajian visual dari asset yang sudah disiapkan.

### Inti yang Harus Ditekankan

- **Pertemuan 11** melanjutkan alur dari **3D Modeling** dan **UV + Material + Texture**.
- Material dari P10 digunakan sebagai **input**, bukan dibahas ulang.
- Fokus utama pertemuan ini adalah **Lighting**, **Camera**, dan **Rendering**.
- Tahap ini mengubah asset 3D yang sudah ada menjadi tampilan visual yang bisa dibaca dan dipresentasikan.

### Transisi ke Slide Berikutnya

Dengan posisi materi ini sudah jelas, langkah berikutnya adalah melihat bagaimana seluruh komponen tersebut bergabung menjadi satu alur: dari **3D asset**, **material**, **lighting**, **camera**, hingga **render engine** menghasilkan **final image**.

---

## Slide 004 - Dari Asset ke Final Image

### Narasi

Setelah pertemuan sebelumnya kita sudah memiliki `3D Asset` yang sudah dimodeling, diberi `Material`, dan `Texture`, maka fokus pertemuan ini adalah bagaimana asset tersebut menjadi gambar akhir yang dapat dilihat. Dalam grafika komputer, sebuah model 3D saja belum cukup; ia harus melewati proses presentasi visual sebelum menjadi `Final Image`.

Kita dapat membaca rumus pada slide sebagai alur kerja:

```text
3D Asset
+
Material
+
Lighting
+
Camera
+
Render Engine
=
Final Image
```

Secara konseptual, `3D Asset` adalah bentuk geometri objek. `Material` menentukan bagaimana permukaan bereaksi terhadap cahaya. `Lighting` memberi informasi kedalaman, bentuk, dan suasana. `Camera` menentukan sudut pandang, framing, dan apa yang terlihat. `Render Engine` kemudian menghitung semua komponen tersebut menjadi piksel pada layar.

Penting untuk dipahami bahwa setiap komponen memengaruhi hasil akhir. Jika `Lighting` terlalu datar, model yang detail bisa tampak kurang jelas. Jika `Camera` salah posisi, komposisi bisa tidak efektif. Jika `Render Engine` tidak sesuai, kualitas dan performa rendering bisa berubah. Karena itu, pertemuan ini tidak membahas ulang modeling atau material, tetapi bagaimana semua input tersebut dipresentasikan secara visual.

### Inti yang Harus Ditekankan

- `Final Image` bukan hanya hasil dari geometri, tetapi hasil gabungan dari `Material`, `Lighting`, `Camera`, dan `Render Engine`.
- Fokus P11 adalah **presentasi visual** asset yang sudah jadi, bukan pembuatan asset dari nol.
- Setiap elemen dalam rumus berperan sebagai input yang menentukan kualitas tampilan akhir.

### Transisi ke Slide Berikutnya

Karena `Lighting` adalah salah satu komponen yang paling menentukan bagaimana bentuk, kedalaman, dan suasana objek terlihat, kita akan mulai dari peran lighting sebelum masuk ke pengaturan kamera dan rendering.

---

## Slide 005 - Peran Lighting

### Narasi

Setelah asset, material, dan render engine sudah tersedia, **lighting** menjadi salah satu faktor yang menentukan apakah objek 3D terasa “hidup” atau hanya tampak seperti bentuk geometri yang datar. Dalam grafika komputer, lighting bukan sekadar menambah terang pada layar, melainkan proses yang membantu mata dan otak kita membaca struktur ruang.

Secara sederhana, lighting bekerja dengan memengaruhi bagaimana permukaan objek berinteraksi dengan sumber cahaya. Saat sebuah `pixel` di-render, nilai akhirnya tidak hanya berasal dari warna material, tetapi juga dari arah `normal` permukaan, posisi kamera, dan kontribusi cahaya. Karena itu, lighting sangat berkaitan dengan shading, rasterisasi, dan pipeline rendering.

Kita dapat melihat peran lighting dari beberapa aspek berikut:

- **Bentuk**: cahaya dan bayangan membantu membedakan permukaan yang cekung, cembung, atau miring.
- **Depth**: gradasi terang-gelap memberi kesan jarak antarobjek.
- **Silhouette**: kontras antara objek dan latar belakang membuat bentuk objek lebih mudah dikenali.
- **Surface response**: material tampak lebih keras, halus, basah, atau lembut tergantung bagaimana cahaya dipantulkan.
- **Focal point**: area yang lebih terang atau lebih kontras menarik perhatian penonton.
- **Mood**: warna dan arah cahaya dapat menciptakan suasana dramatis, tenang, dingin, atau hangat.

Poin penting yang perlu dipahami mahasiswa adalah bahwa model yang baik belum tentu terlihat baik jika lighting tidak dirancang dengan baik. Geometri yang akurat dan material yang tepat masih bisa tampak datar, ambigu, atau kurang komunikatif jika tidak ada pencahayaan yang membantu membaca bentuk dan ruang.

Sebaliknya, lighting yang tepat dapat memperkuat presentasi visual tanpa mengubah model secara signifikan. Dalam konteks Blender atau rendering real-time, lighting menjadi bagian dari keputusan artistik sekaligus teknis, karena ia memengaruhi hasil akhir yang dilihat pengguna.

### Inti yang Harus Ditekankan

- Lighting membantu menampilkan **bentuk**, **depth**, **silhouette**, **surface response**, **focal point**, dan **mood**.
- Lighting memengaruhi hasil rendering melalui interaksi antara **cahaya**, **material**, **normal permukaan**, dan **kamera**.
- Model yang baik dapat terlihat datar jika lighting tidak dirancang dengan baik.

### Transisi ke Slide Berikutnya

Setelah lighting membantu membentuk persepsi ruang dan perhatian visual, langkah berikutnya adalah menentukan bagaimana ruang itu dilihat. Di slide berikutnya, kita akan membahas peran **camera** sebagai alat komunikasi visual yang menentukan sudut pandang, framing, perspektif, dan hierarki visual.

---

## Slide 006 - Peran Camera

### Narasi

Setelah lighting membantu objek terlihat memiliki bentuk, kedalaman, dan mood, **camera** menentukan bagaimana semua elemen itu dilihat oleh penonton. Dalam grafika komputer, camera bukan sekadar titik pengamat, tetapi bagian penting dari proses rendering yang mengubah scene 3D menjadi gambar 2D di layar.

Pada slide ini, peran camera diringkas menjadi beberapa aspek utama:

- **Sudut pandang**: posisi dan arah camera menentukan apa yang terlihat dan bagaimana objek dibaca.
- **Framing**: batas area yang masuk ke layar, sehingga memengaruhi komposisi visual.
- **Perspektif**: cara kedalaman dan ukuran relatif objek muncul, misalnya objek dekat tampak lebih besar.
- `focal length`: lebar atau sempitnya bidang pandang, yang memengaruhi kesan zoom, wide, atau tele.
- `depth of field`: area yang tampak tajam dan area yang blur, sehingga membantu mengarahkan fokus.
- **Visual hierarchy**: urutan perhatian penonton, dari objek utama ke objek pendukung.

Secara intuitif, camera adalah “mata” yang kita letakkan di dalam scene. Ia tidak hanya menentukan apa yang terlihat, tetapi juga bagaimana penonton memahami hubungan antarobjek, jarak, dan pentingnya suatu elemen.

Dalam proses rendering, camera membantu mengubah scene 3D menjadi gambar 2D yang komunikatif. Perubahan posisi, orientasi, atau parameter camera dapat mengubah hasil render secara signifikan meskipun geometri dan lighting tetap sama.

Oleh karena itu, **camera adalah alat komunikasi visual**. Ia membantu kita memilih pesan visual: objek mana yang menjadi pusat perhatian, objek mana yang terasa dekat atau jauh, dan bagaimana mood adegan terbaca oleh penonton.

### Inti yang Harus Ditekankan

- Camera menentukan **sudut pandang**, **framing**, **perspektif**, `focal length`, `depth of field`, dan **visual hierarchy**.
- Camera memengaruhi komposisi dan persepsi penonton, bukan hanya posisi pengamat.
- Dalam rendering, camera membantu mengubah scene 3D menjadi gambar 2D yang komunikatif.

### Transisi ke Slide Berikutnya

Setelah memahami peran camera sebagai pengatur sudut pandang dan komposisi, kita kembali ke elemen lighting. Selanjutnya kita akan melihat jenis-jenis light di Blender dan bagaimana masing-masing memengaruhi tampilan scene.

---

## Slide 007 - Jenis Light di Blender

### Narasi

Setelah kamera menentukan bagaimana adegan dilihat, langkah berikutnya adalah menentukan bagaimana adegan itu diterangi. Dalam grafika komputer, **light** bukan sekadar membuat objek terlihat lebih terang. Light memengaruhi **shading**, **kontras**, **kedalaman**, dan **mood** visual. Karena itu, pemilihan jenis light sangat penting untuk hasil render yang komunikatif dan mudah dibaca oleh mata.

Di Blender, ada empat light utama yang sering menjadi dasar pembuatan adegan:

- `Point`
- `Sun`
- `Spot`
- `Area`

Keempatnya bukan hanya label yang berbeda. Masing-masing mewakili cara sumber cahaya didistribusikan ke dalam scene, dan karena itu menghasilkan karakter **shadow** yang berbeda pula. Pada tahap ini, kita cukup memahami bahwa **light type** menentukan perilaku cahaya secara global, bukan hanya tingkat kecerahannya.

Hal yang harus dipahami sebelum lanjut adalah: jangan memilih light hanya karena hasilnya terlihat terang. Perhatikan bagaimana cahaya jatuh pada geometri, bagaimana bayangan terbentuk, dan bagaimana cahaya membantu menonjolkan objek utama. Dengan memahami empat jenis ini, kita akan lebih mudah memilih light yang sesuai sebelum masuk ke pengaturan detail.

### Inti yang Harus Ditekankan

- **Light** memengaruhi shading, kontras, kedalaman, dan mood render.
- Empat light utama di Blender adalah `Point`, `Sun`, `Spot`, dan `Area`.
- Setiap jenis light memiliki karakter **distribusi cahaya** dan **shadow** yang berbeda.
- Pemilihan light type harus dipandang sebagai keputusan visual, bukan sekadar menambah kecerahan.

### Transisi ke Slide Berikutnya

Sekarang kita mulai dari yang paling dasar, yaitu `Point` Light, yang memancarkan cahaya dari satu posisi ke segala arah.

---

## Slide 008 - Point Light

### Narasi

`Point Light` adalah sumber cahaya yang paling sederhana untuk kita bayangkan: cahayanya keluar **ke segala arah** dari **satu posisi** tertentu.

Secara visual, kita bisa membayangkannya seperti titik kecil di ruang 3D yang memancarkan cahaya ke depan, belakang, atas, bawah, dan samping secara seragam. Karena sumbernya dianggap berada pada satu titik, arah cahaya ke permukaan objek ditentukan oleh posisi titik tersebut terhadap titik permukaan yang sedang dihitung.

Analogi yang paling dekat adalah **lampu bohlam**, **lampu meja**, atau **lampu kecil** yang menyala di ruangan. Dalam konteks grafika komputer, `Point Light` berguna untuk membuat pencahayaan lokal yang terasa natural, terutama ketika kita ingin menyorot area kecil atau menambah kedalaman pada adegan.

Yang perlu kita pegang dulu adalah karakter utamanya: **cahaya menyebar ke segala arah dari satu titik**. Detail seperti seberapa terang, warna apa, atau seberapa lembut bayangannya akan kita bahas pada parameter `Point Light` berikutnya.

### Inti yang Harus Ditekankan

- `Point Light` memancarkan cahaya **ke segala arah** dari **satu posisi**.
- Sumber cahayanya dapat dibayangkan sebagai titik kecil, seperti lampu bohlam atau lampu meja.
- Konsep ini penting sebagai dasar pencahayaan lokal sebelum membahas parameter seperti `Position`, `Power`, `Color`, dan `Radius`.

### Transisi ke Slide Berikutnya

Setelah memahami arah sebaran cahayanya, langkah berikutnya adalah mengatur sifat cahaya tersebut. Kita akan melihat parameter `Point Light`, yaitu `Position`, `Power`, `Color`, dan `Radius`, serta pengaruhnya terhadap pencahayaan dan bayangan.

---

## Slide 009 - Parameter Point Light

### Narasi

Setelah kita memahami bahwa **Point Light** memancarkan cahaya ke segala arah dari satu posisi, langkah berikutnya adalah mengatur parameter yang menentukan bagaimana cahaya itu berperilaku di scene.

Parameter utama yang perlu kita perhatikan adalah:

- `Position`: menentukan lokasi sumber cahaya dalam ruang 3D.
- `Power`: menentukan seberapa kuat cahaya yang dipancarkan.
- `Color`: menentukan warna cahaya yang jatuh ke objek.
- `Radius`: menentukan ukuran efektif sumber cahaya, yang memengaruhi bentuk bayangan.

Dalam pipeline rendering, parameter ini berperan pada tahap **lighting** dan **shadow calculation**. `Position` memengaruhi jarak antara cahaya dan objek, sehingga menentukan seberapa terang atau gelap permukaan setelah proses shading. `Power` memengaruhi intensitas kontribusi cahaya pada pixel yang terkena. `Color` memengaruhi hasil akhir warna objek karena cahaya yang diterima akan berinteraksi dengan material atau warna permukaan.

Bagian yang sering membingungkan adalah `Radius`. Secara visual, `Radius` tidak selalu berarti ukuran fisik bola cahaya, tetapi lebih ke ukuran sumber cahaya yang digunakan untuk menghitung bayangan. Kita bisa membacanya seperti ini:

```text
Radius kecil → shadow lebih tajam
Radius besar → shadow lebih lembut
```

Artinya, jika `Radius` kecil, sumber cahaya dianggap lebih kecil dan bayangan cenderung memiliki tepi yang lebih tegas. Jika `Radius` besar, sumber cahaya dianggap lebih luas sehingga bayangan memiliki transisi yang lebih halus, mirip pencahayaan dari sumber yang lebih besar.

Poin penting yang harus dipahami mahasiswa sebelum lanjut adalah: **Point Light** paling cocok untuk **pencahayaan lokal**, yaitu cahaya yang berasal dari titik tertentu dan memengaruhi area sekitar secara terbatas. Parameter ini membantu kita membangun suasana, menyorot objek, atau membuat bayangan yang sesuai dengan kebutuhan visual, tanpa harus mengubah geometri atau kamera.

### Inti yang Harus Ditekankan

- `Position`, `Power`, `Color`, dan `Radius` adalah parameter utama yang mengatur perilaku **Point Light**.
- `Power` dan `Color` memengaruhi kecerahan serta warna hasil pencahayaan pada objek.
- `Radius` memengaruhi ketajaman bayangan: kecil menghasilkan shadow tajam, besar menghasilkan shadow lembut.
- **Point Light** cocok untuk pencahayaan lokal karena cahayanya berasal dari satu posisi dan memancar ke segala arah.

### Transisi ke Slide Berikutnya

Setelah kita melihat cahaya lokal dari satu titik, selanjutnya kita akan membahas **Sun Light**, yaitu sumber cahaya yang dianggap berada sangat jauh sehingga cahayanya datang sebagai `parallel rays`. Di situ, parameter yang paling menentukan arah pencahayaan adalah `rotation`.

---

## Slide 010 - Sun Light

### Narasi

Dalam grafika komputer, **Sun Light** digunakan untuk mensimulasikan sumber cahaya yang berada sangat jauh dari objek, seperti matahari. Karena jaraknya yang sangat jauh, cahaya yang sampai ke adegan dapat dianggap datang dalam arah yang hampir sama ke seluruh objek. Inilah yang disebut **parallel rays**, yaitu sinar-sinar cahaya yang bergerak sejajar satu sama lain.

Kita bisa membandingkannya dengan **Point Light** yang sudah kita lihat sebelumnya. Point Light memancarkan cahaya dari satu titik posisi tertentu, sehingga intensitas dan arah cahayanya bergantung pada posisi sumber cahaya. Sebaliknya, `Sun` lebih bersifat **arah**. Posisi sumber cahaya tidak lagi menjadi fokus utama, karena yang paling menentukan adalah dari mana arah cahaya datang.

Bagian terpenting dari `Sun` adalah **rotation**. Parameter `rotation` menentukan orientasi sumber cahaya, sehingga menentukan arah jatuhnya cahaya pada objek. Jika kita memutar `Sun`, maka arah pencahayaan pada permukaan objek akan berubah, dan arah bayangan juga akan berubah mengikuti arah sinar tersebut.

Secara visual, kita bisa membayangkannya seperti ini:

```text
Sun rotation  →  arah sinar sejajar  →  pencahayaan dan shadow searah
```

Artinya, semua objek dalam adegan akan menerima cahaya dari arah yang sama. Akibatnya, bayangan yang terbentuk cenderung konsisten arahnya, berbeda dengan pencahayaan lokal yang bisa datang dari berbagai titik.

Dalam **rendering pipeline**, arah cahaya dari `Sun` akan digunakan saat proses shading untuk menghitung bagaimana permukaan objek menerima cahaya, misalnya untuk warna diffuse, highlight, dan pembentukan shadow. Karena sinarnya sejajar, perhitungan arah cahaya menjadi lebih sederhana dan cocok untuk adegan yang membutuhkan pencahayaan global yang seragam.

Sebelum lanjut, hal penting yang harus dipahami adalah bahwa `Sun` bukan sekadar “lampu terang”, melainkan representasi cahaya jarak jauh yang arahnya dikendalikan oleh `rotation`. Konsep ini penting karena menentukan bagaimana adegan terlihat realistis, terutama untuk lingkungan luar ruangan.

### Inti yang Harus Ditekankan

- **Sun Light** merepresentasikan sumber cahaya yang sangat jauh, seperti matahari.
- Karakter utamanya adalah **parallel rays**, yaitu sinar cahaya yang datang sejajar.
- Parameter terpenting adalah `rotation`, karena menentukan **arah cahaya** dan arah bayangan.
- `Sun` cocok untuk pencahayaan yang seragam, terutama pada adegan luar ruangan.

### Transisi ke Slide Berikutnya

Setelah kita memahami bahwa arah cahaya `Sun` ditentukan oleh `rotation`, langkah berikutnya adalah melihat bagaimana parameter `Angle` memengaruhi ketajaman bayangan, serta kapan `Sun` paling tepat digunakan untuk adegan seperti outdoor, daylight, landscape, dan architectural visualization.

---

## Slide 011 - Sun Angle dan Penggunaan

### Narasi

Pada slide sebelumnya kita sudah melihat bahwa **Sun Light** berperilaku seperti sumber cahaya yang sangat jauh, sehingga sinar yang masuk ke scene dapat dianggap **parallel rays**. Pada slide ini kita memperdalam satu parameter penting, yaitu **Sun Angle**. Parameter ini menentukan seberapa besar "sudut" sumber cahaya matahari yang kita gunakan dalam rendering.

Secara intuitif, bayangkan matahari sebagai piringan cahaya, bukan sekadar titik. Jika **angle kecil**, piringan cahaya itu terasa sangat kecil dan arahnya sangat konsisten. Akibatnya, bayangan yang terbentuk cenderung **tajam**, dengan batas yang jelas antara area terang dan area gelap. Kondisi ini cocok untuk representasi matahari yang relatif kecil dan terang, misalnya pada siang hari yang cerah.

Sebaliknya, jika **angle besar**, sumber cahaya terasa lebih lebar dan arah sinar tidak lagi se-terkonsentrasi sebelumnya. Bayangan yang dihasilkan menjadi lebih **lembut**, karena transisi dari terang ke gelap lebih gradual. Efek ini sering kita lihat ketika cahaya matahari terhalang atmosfer, awan tipis, atau ketika kita ingin membuat pencahayaan yang lebih natural dan tidak terlalu keras.

Dalam konteks **Blender**, `Angle` pada `Sun Light` dapat dibaca sebagai kontrol untuk mengatur **softness shadow** tanpa harus mengubah jenis cahaya. Artinya, kita tidak perlu langsung beralih ke jenis light lain hanya untuk mendapatkan bayangan lembut; cukup menyesuaikan angle. Hal ini penting karena dalam rendering, kualitas bayangan sangat memengaruhi kesan realistis, dramatis, atau datar pada sebuah scene.

Penggunaan **Sun Light** paling tepat untuk scene yang membutuhkan pencahayaan luas dan seragam, seperti:

- **outdoor**,
- **daylight**,
- **landscape**,
- **architectural visualization**.

Pada scene seperti ini, cahaya matahari biasanya menjadi sumber utama yang membentuk siluet, kedalaman, dan suasana ruang. Karena sifatnya yang jauh dan paralel, `Sun Light` juga relatif mudah diatur: kita cukup memperhatikan **rotation** untuk menentukan arah, lalu **angle** untuk menentukan ketajaman bayangan.

Sebelum lanjut, mahasiswa perlu memahami bahwa **angle bukan sekadar angka**, tetapi alat artistik untuk mengatur karakter bayangan. Angle kecil memberi kesan tegas dan jelas, sedangkan angle besar memberi kesan lembut dan natural. Pemahaman ini akan membantu kita memilih pencahayaan yang sesuai dengan tujuan visual, bukan hanya sekadar menyalakan light.

### Inti yang Harus Ditekankan

- **Sun Angle** mengatur seberapa besar sumber cahaya matahari dipersepsikan, dan memengaruhi **softness shadow**.
- **Angle kecil** menghasilkan bayangan **tajam**, sedangkan **angle besar** menghasilkan bayangan **lembut**.
- **Sun Light** paling cocok untuk **outdoor**, **daylight**, **landscape**, dan **architectural visualization** karena cahayanya luas, seragam, dan menyerupai matahari.
- Dalam alur rendering, `Sun Light` membantu membentuk **shadow**, **contrast**, dan **spatial depth** pada scene.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana `Sun Light` bekerja sebagai sumber cahaya jauh dengan arah paralel dan angle yang dapat diatur, kita akan beralih ke jenis light yang lebih terarah. Pada slide berikutnya, kita akan membahas **Spot Light**, yaitu sumber cahaya yang memancarkan bentuk **cone** dan sering digunakan untuk spotlight, lampu sorot, senter, stage lighting, atau dramatic focus.

---

## Slide 012 - Spot Light

### Narasi

Setelah cahaya matahari yang menyebar luas, kita masuk ke sumber cahaya yang lebih terkendali: **Spot Light**. Dalam Blender, spot light memancarkan cahaya dalam bentuk **cone**, yaitu kerucut yang berasal dari posisi lampu dan menyebar ke arah tertentu. Bentuk ini penting karena cahaya tidak menyinari seluruh scene secara merata, tetapi hanya area yang berada di dalam kerucut tersebut.

Secara visual, bayangkan lampu sorot di panggung atau senter yang diarahkan ke satu objek. Bagian yang terkena cahaya akan terlihat lebih terang, sementara area di luar cone tetap lebih gelap. Perilaku ini membuat spot light sangat berguna untuk menciptakan **dramatic focus**, yaitu menarik perhatian mata penonton ke satu titik tertentu.

Dalam konteks grafika komputer, spot light membantu kita mengontrol distribusi cahaya secara spasial. Karena hanya area tertentu yang disinari, kita dapat membentuk bayangan, menonjolkan material, dan memperkuat kesan kedalaman pada scene. Konsep ini juga relevan dengan rendering pipeline, karena pencahayaan pada setiap titik permukaan akan bergantung pada apakah titik tersebut berada di dalam arah dan jangkauan cone dari lampu.

Spot light cocok digunakan untuk beberapa situasi, antara lain:

- **spotlight** pada objek utama,
- **lampu sorot** untuk penekanan visual,
- **senter** yang memancarkan berkas cahaya terarah,
- **stage lighting** untuk panggung atau pertunjukan,
- **dramatic focus** pada karakter atau properti tertentu.

Yang perlu dipahami sebelum lanjut adalah bahwa spot light bukan sekadar "cahaya kecil", melainkan sumber cahaya dengan arah dan bentuk yang dapat dikendalikan. Pada slide berikutnya, kita akan melihat dua parameter penting yang menentukan bentuk cone tersebut, yaitu `Spot Size` dan `Spot Blend`.

### Inti yang Harus Ditekankan

- **Spot Light** memancarkan cahaya berbentuk **cone**, bukan menyebar ke segala arah.
- Cahaya hanya memengaruhi area di dalam kerucut, sehingga cocok untuk fokus visual.
- Spot light berguna untuk **spotlight**, **lampu sorot**, **senter**, **stage lighting**, dan **dramatic focus**.
- Parameter bentuk cone akan dibahas pada slide berikutnya melalui `Spot Size` dan `Spot Blend`.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa spot light bekerja melalui cone, langkah berikutnya adalah mengatur bentuk cone itu sendiri. Kita akan melihat bagaimana `Spot Size` menentukan lebar kerucut dan `Spot Blend` menentukan kelembutan tepi cahaya.

---

## Slide 013 - Spot Size dan Spot Blend

### Narasi

Setelah kita mengenali **Spot Light** sebagai sumber cahaya berbentuk cone, langkah berikutnya adalah memahami dua parameter yang paling memengaruhi bentuk cahayanya, yaitu `Spot Size` dan `Spot Blend`.

`Spot Size` menentukan **lebar cone** cahaya. Semakin besar nilai `Spot Size`, semakin luas area yang terkena cahaya. Sebaliknya, semakin kecil nilai `Spot Size`, semakin sempit dan fokus area terang yang dihasilkan. Parameter ini penting karena menentukan seberapa besar objek atau area yang ingin kita sorot.

`Spot Blend` menentukan **softness edge cone**, yaitu kelembutan transisi cahaya di tepi cone. Jika nilai `Spot Blend` tinggi, batas antara area terang dan area gelap menjadi lebih halus. Jika nilainya rendah, tepi cahaya tampak lebih tegas dan jelas.

Secara visual, kita bisa membayangkannya seperti berikut:

```text
        /\
       /  \      Spot Size: lebar cone
      /    \
     /      \
    /________\
     soft edge  Spot Blend: kelembutan tepi
```

Dalam konteks rendering, kedua parameter ini memengaruhi bagaimana cahaya dihitung pada permukaan objek. `Spot Size` mengatur seberapa luas kontribusi cahaya, sedangkan `Spot Blend` mengatur bagaimana transisi intensitas cahaya terjadi di batas cone. Pemahaman ini penting sebelum kita lanjut ke jenis light lain, karena bentuk dan kualitas cahaya akan memengaruhi shading, kontras, dan kesan dramatis pada adegan.

### Inti yang Harus Ditekankan

- `Spot Size` adalah **lebar cone** cahaya dari Spot Light.
- `Spot Blend` adalah **softness edge cone**, yaitu kelembutan transisi di tepi cahaya.
- Nilai `Spot Blend` yang tinggi menghasilkan transisi cahaya yang lebih lembut.
- Kombinasi `Spot Size` dan `Spot Blend` menentukan apakah cahaya terlihat fokus, dramatis, atau halus.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana bentuk cone dan tepi cahaya pada Spot Light dikendalikan, kita akan lanjut ke **Area Light**, yaitu sumber cahaya yang memancarkan cahaya dari suatu permukaan dan cenderung menghasilkan pencahayaan serta bayangan yang lebih lembut.

---

## Slide 014 - Area Light

### Narasi

Setelah membahas spot light yang memancarkan cahaya dalam bentuk cone, kita masuk ke jenis cahaya yang berbeda, yaitu **Area Light**. Area Light memancarkan cahaya dari suatu permukaan, bukan dari satu titik kecil. Dalam Blender, bentuk permukaan cahaya ini bisa dipilih, misalnya:

- `Square`
- `Rectangle`
- `Disk`
- `Ellipse`

Intuisi visualnya cukup penting: Area Light dianggap sebagai sumber cahaya yang memiliki ukuran fisik. Karena cahayanya datang dari bidang, bukan titik, maka pencahayaan yang dihasilkan biasanya lebih lembut dan lebih mendekati sumber cahaya di dunia nyata, seperti panel studio, jendela, atau lampu plafon.

Karakter utama Area Light adalah:

```text
soft lighting + soft shadow
```

Artinya, Area Light cenderung menghasilkan **pencahayaan lembut** dan **bayangan lembut**. Tepi bayangan tidak se-tajam bayangan dari point light atau spot light. Hal ini terjadi karena objek menerima cahaya dari banyak arah yang berasal dari permukaan light, sehingga transisi antara area terang dan area gelap menjadi lebih gradual.

Dalam grafika komputer, Area Light sangat berguna untuk membuat adegan yang lebih natural. Jika kita menggunakan point light, cahaya bisa terlihat terlalu tajam atau artifisial, terutama pada permukaan halus seperti produk, karakter, atau material studio. Area Light membantu mengurangi kesan itu karena highlight dan shadow lebih halus.

Bentuk Area Light juga memengaruhi karakter cahaya. `Square` dan `Rectangle` sering cocok untuk simulasi panel studio atau lampu area berbentuk bidang. Sementara `Disk` dan `Ellipse` bisa memberi kesan sumber cahaya yang lebih bulat atau oval. Jadi, pilihan bentuk bukan hanya soal estetika, tetapi juga memengaruhi arah dan distribusi cahaya pada objek.

Yang perlu dipahami mahasiswa sebelum lanjut adalah Area Light bukan sekadar “cahaya lembut”. Bentuk dan ukuran permukaannya akan menentukan bagaimana cahaya jatuh, bagaimana highlight terbentuk, dan seberapa lembut bayangan yang dihasilkan. Pada slide berikutnya, kita akan melihat pengaruh ukuran Area Light terhadap ketajaman highlight dan shadow.

### Inti yang Harus Ditekankan

- **Area Light** memancarkan cahaya dari permukaan, bukan dari satu titik.
- Bentuk umum Area Light adalah `Square`, `Rectangle`, `Disk`, dan `Ellipse`.
- Karakter utamanya adalah **soft lighting** dan **soft shadow**.
- Area Light cocok untuk pencahayaan yang lebih natural, terutama untuk studio, produk, atau adegan yang membutuhkan bayangan lembut.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa Area Light menghasilkan cahaya dan bayangan yang lebih lembut, langkah berikutnya adalah melihat bagaimana **ukuran Area Light** memengaruhi hasil render. Area kecil dan area besar akan memberikan karakter highlight dan shadow yang berbeda.

---

## Slide 015 - Area Light Size

### Narasi

Setelah kita melihat bahwa **Area Light** memancarkan cahaya dari suatu permukaan, hal penting berikutnya adalah **ukuran area** tersebut. Dalam slide ini, kita melihat hubungan sederhana antara ukuran sumber cahaya dan karakter visual yang dihasilkan.

```text
Area kecil
→ highlight/shadow lebih tajam

Area besar
→ lighting lebih lembut
```

Secara intuitif, area kecil berperilaku lebih mirip sumber cahaya yang terpusat. Cahaya datang dari wilayah yang sempit, sehingga batas bayangan dan pantulan specular cenderung lebih tegas. Sebaliknya, area besar membuat cahaya datang dari banyak arah yang sedikit berbeda pada permukaan objek. Akibatnya, transisi antara terang dan gelap menjadi lebih gradual, highlight melebar, dan shadow menjadi lebih lembut.

Dalam konteks rendering, ukuran area light memengaruhi cara pencahayaan dihitung pada permukaan. Semakin besar area, semakin banyak kontribusi cahaya dari berbagai titik pada permukaan sumber yang perlu dipertimbangkan. Ini menghasilkan **soft shadow** dan **soft highlight** yang sering diinginkan untuk visual yang natural. Semakin kecil area, kontribusi cahaya lebih terlokalisasi, sehingga hasil shading lebih kontras dan tajam.

Karakter inilah yang membuat **Area Light** sangat cocok untuk **studio render** dan **product render**. Pada studio, kita sering ingin cahaya yang lembut, bayangan yang tidak terlalu keras, dan detail permukaan produk yang terlihat jelas tanpa cahaya yang terlalu tajam. Area light yang besar dapat mensimulasikan sumber cahaya luas seperti softbox atau jendela besar, sehingga objek tampak lebih bersih dan profesional.

Namun, kita perlu memperhatikan keseimbangan. Area terlalu kecil dapat membuat shadow terlalu tajam dan highlight terlalu sempit, sehingga objek terlihat keras. Area terlalu besar dapat membuat pencahayaan terlalu datar, mengurangi kedalaman dan kontras. Karena itu, ukuran area light bukan hanya parameter teknis, tetapi juga pilihan artistik untuk membentuk mood visual.

Sebelum lanjut, mahasiswa perlu memahami bahwa **size** pada area light bukan sekadar mengubah intensitas, tetapi mengubah **geometri sumber cahaya** dan konsekuensinya pada shading, shadow, serta highlight.

### Inti yang Harus Ditekankan

- **Area kecil** menghasilkan **highlight** dan **shadow** yang lebih tajam karena sumber cahaya lebih terpusat.
- **Area besar** menghasilkan pencahayaan lebih lembut karena cahaya datang dari wilayah yang lebih luas dan banyak arah.
- **Area Light** sangat cocok untuk **studio render** dan **product render** karena mampu menghasilkan cahaya lembut yang natural.
- Ukuran area light memengaruhi karakter visual, bukan hanya kecerahan cahaya.

### Transisi ke Slide Berikutnya

Setelah memahami pengaruh ukuran pada Area Light, kita akan membandingkannya dengan jenis light lain: Point, Sun, Spot, dan Area. Perbandingan ini membantu kita memilih sumber cahaya yang paling sesuai dengan tujuan visual.

---

## Slide 016 - Perbandingan Empat Light

### Narasi

Pada tahap ini kita membandingkan empat jenis light yang sering digunakan dalam scene: `Point`, `Sun`, `Spot`, dan `Area`. Perbandingan ini penting karena jenis light menentukan bagaimana cahaya masuk ke scene, bagaimana bayangan terbentuk, dan bagaimana objek terlihat memiliki volume.

Tabel pada slide ini dibaca sebagai pasangan: jenis light di sisi kiri, karakter cahaya di sisi kanan. Kita tidak perlu menghafal definisi teknisnya, tetapi menangkap perilaku visualnya.

- `Point`: **menyebar dari satu titik**, sehingga cahayanya terasa berasal dari posisi tertentu, seperti bohlam.
- `Sun`: **sinar sejajar**, sehingga cahayanya terasa datang dari arah yang sama ke seluruh scene, seperti matahari.
- `Spot`: **cone terarah**, sehingga cahayanya dibatasi pada area tertentu, seperti sorot.
- `Area`: **sumber luas dan lembut**, sehingga cahayanya lebih halus dan transisinya lebih natural, seperti panel cahaya.

Perbedaan ini penting dalam rendering karena cahaya bukan hanya membuat scene menjadi terang. Cahaya juga membentuk highlight, shadow, kedalaman, dan fokus visual. `Point` bisa memberi kesan sumber cahaya nyata, `Sun` memberi kesan pencahayaan luar ruang, `Spot` memberi penekanan pada objek tertentu, dan `Area` memberi kesan studio yang lembut.

Prinsip utamanya adalah memilih light berdasarkan tujuan visual. Jika kita ingin cahaya menyebar dari satu posisi, `Point` lebih sesuai. Jika kita ingin cahaya seragam dari arah jauh, `Sun` lebih sesuai. Jika kita ingin sorot, `Spot` lebih sesuai. Jika kita ingin cahaya lembut untuk studio atau product render, `Area` lebih sesuai.

### Inti yang Harus Ditekankan

- `Point`, `Sun`, `Spot`, dan `Area` dibedakan oleh bentuk sumber cahaya dan arah sebarannya.
- `Point` menyebar dari satu titik, `Sun` memiliki sinar sejajar, `Spot` membentuk cone terarah, dan `Area` bersifat luas serta lembut.
- Pilihan jenis light memengaruhi karakter highlight, shadow, dan mood scene.
- Light harus dipilih berdasarkan tujuan visual, bukan hanya untuk membuat scene terlihat terang.

### Transisi ke Slide Berikutnya

Setelah kita memahami karakter dasar keempat jenis light, langkah berikutnya adalah menilai kualitas lighting secara lebih menyeluruh melalui `direction`, `intensity`, `color`, `softness`, dan `contrast`.

---

## Slide 017 - Kualitas Lighting

### Narasi

Setelah kita membandingkan jenis-jenis light seperti `point`, `sun`, `spot`, dan `area`, langkah berikutnya adalah menilai apakah pencahayaan pada scene sudah benar-benar membentuk objek. Dalam grafika komputer, lighting bukan hanya soal membuat scene menjadi terang. Lighting adalah alat untuk membentuk **bentuk**, **kedalaman**, **material**, dan **mood** visual.

Slide ini merangkum kualitas lighting yang baik dalam bentuk sederhana:

```text
Direction
+
Intensity
+
Color
+
Softness
+
Contrast
```

Rumus ini sebaiknya dibaca sebagai kombinasi, bukan urutan yang harus dikerjakan satu per satu. Artinya, kualitas pencahayaan muncul ketika kelima hal ini bekerja bersama.

**Direction** adalah arah datangnya cahaya. Arah cahaya menentukan di mana highlight muncul, di mana bayangan terbentuk, dan bagaimana siluet objek terlihat. Dua objek dengan bentuk sama bisa terlihat sangat berbeda hanya karena arah cahayanya berbeda.

**Intensity** berkaitan dengan kekuatan cahaya. Parameter ini memengaruhi seberapa terang atau gelap suatu area. Intensity yang terlalu tinggi dapat membuat detail hilang karena overexposure, sedangkan intensity yang terlalu rendah dapat membuat scene sulit dibaca.

**Color** menentukan warna atau suhu cahaya. Cahaya yang lebih hangat, netral, atau dingin akan memberi kesan berbeda pada material dan suasana scene. Dalam rendering, warna cahaya juga memengaruhi bagaimana material bereaksi terhadap pencahayaan.

**Softness** menggambarkan kelembutan transisi antara area terang dan bayangan. Cahaya yang lembut biasanya menghasilkan bayangan dengan tepi yang halus, sedangkan cahaya yang keras menghasilkan bayangan yang tegas. Softness sangat penting untuk menentukan apakah scene terasa natural, dramatis, atau terlalu datar.

**Contrast** adalah perbedaan antara area terang dan area gelap. Contrast membantu membentuk kedalaman dan fokus visual. Jika contrast terlalu rendah, scene bisa terlihat datar. Jika contrast terlalu tinggi, detail pada area gelap atau terang dapat hilang.

Dalam konteks rendering pipeline, parameter-parameter ini memengaruhi tahap shading, di mana warna final pixel ditentukan berdasarkan interaksi antara cahaya, material, normal permukaan, dan posisi kamera. Jadi, lighting yang baik tidak hanya membuat objek terlihat, tetapi juga membuat objek terlihat memiliki volume dan karakter.

Sebelum lanjut ke teknik pencahayaan yang lebih spesifik, kita perlu memahami bahwa menambah jumlah light tidak otomatis menghasilkan lighting yang baik. Yang lebih penting adalah bagaimana arah, intensitas, warna, kelembutan, dan contrast dikendalikan secara sadar.

### Inti yang Harus Ditekankan

- **Lighting yang baik bukan hanya membuat scene terang**, tetapi membentuk bentuk, kedalaman, dan mood objek.
- Kualitas lighting ditentukan oleh kombinasi **direction**, **intensity**, **color**, **softness**, dan **contrast**.
- Parameter-parameter ini memengaruhi hasil shading dan rendering, sehingga perlu dikendalikan secara sadar, bukan hanya mengandalkan jumlah light.

### Transisi ke Slide Berikutnya

Dengan memahami parameter dasar kualitas lighting, kita bisa mulai menyusun pencahayaan yang lebih terstruktur. Selanjutnya, kita akan melihat salah satu teknik paling umum dalam pencahayaan, yaitu **three-point lighting**, yang menggunakan `key light`, `fill light`, dan `rim / back light` untuk membentuk subject serta memisahkan subject dari background.

---

## Slide 018 - Three-Point Lighting

### Narasi

Setelah kita melihat bahwa kualitas lighting ditentukan oleh `direction`, `intensity`, `color`, `softness`, dan `contrast`, langkah berikutnya adalah memahami bagaimana parameter tersebut diatur secara praktis. Dalam banyak kasus, kita tidak langsung memilih cahaya secara acak, tetapi menggunakan pola pencahayaan yang sudah terstruktur. Salah satu pola paling dasar dan paling sering digunakan adalah **Three-Point Lighting**.

**Three-Point Lighting** menggunakan tiga sumber cahaya dengan peran yang berbeda:

```text
Key Light
Fill Light
Rim / Back Light
```

Ketiga cahaya ini tidak selalu memiliki kekuatan yang sama. Perbedaannya justru menentukan bagaimana objek terlihat di layar.

**Key Light** adalah cahaya utama. Cahaya ini biasanya paling kuat dan menentukan arah pencahayaan utama pada objek. Dengan adanya **Key Light**, bentuk objek mulai terbaca karena muncul highlight dan bayangan utama.

**Fill Light** berfungsi untuk mengisi area yang tidak terkena cahaya utama. Cahaya ini biasanya lebih lembut dan lebih redup. Tujuannya bukan membuat seluruh scene terang, tetapi mengurangi `contrast` yang terlalu tajam sehingga detail di area bayangan masih bisa terlihat.

**Rim / Back Light** ditempatkan di belakang atau di sisi belakang objek. Cahaya ini biasanya membentuk garis terang di tepi objek. Peran penting dari cahaya ini adalah memisahkan **subject** dari **background**, sehingga objek tidak terlihat “menempel” pada latar belakang.

Dalam grafika komputer, pola ini penting karena lighting bukan hanya soal estetika. Lighting membantu kamera dan renderer membentuk persepsi bentuk, kedalaman, material, dan fokus visual. Tanpa pengaturan cahaya yang jelas, objek 3D bisa terlihat datar, kurang informatif, atau sulit dibedakan dari latar belakangnya.

Jadi, yang harus kita pahami pada slide ini adalah bahwa **Three-Point Lighting** adalah struktur peran cahaya, bukan sekadar tiga lampu yang dinyalakan. Kita mengatur cahaya berdasarkan fungsinya: membentuk objek, mengontrol `contrast`, dan memisahkan objek dari background.

### Inti yang Harus Ditekankan

- **Three-Point Lighting** terdiri dari **Key Light**, **Fill Light**, dan **Rim / Back Light**.
- Setiap cahaya memiliki peran berbeda: membentuk objek, mengisi bayangan, dan memisahkan objek dari background.
- Lighting yang baik bukan hanya membuat scene terang, tetapi mengontrol `contrast`, bentuk, dan kedalaman visual.

### Transisi ke Slide Berikutnya

Setelah memahami peran ketiga cahaya secara umum, kita akan mulai dari komponen yang paling menentukan arah dan mood pencahayaan, yaitu **Key Light**.

---

## Slide 019 - Key Light

### Narasi

Dalam **three-point lighting**, **Key Light** adalah cahaya utama yang menjadi sumber pencahayaan paling dominan pada subject. Cahaya ini berperan sebagai “pemandu” visual karena ia menentukan dari arah mana cahaya utama datang dan bagaimana subject tampak diterangi.

Secara intuitif, kita bisa membayangkan **Key Light** sebagai matahari utama dalam adegan sederhana. Jika cahaya ini datang dari kiri atas, maka sisi kiri atas subject akan lebih terang, sementara sisi lain akan masuk ke bayangan. Dari arah inilah bentuk, volume, dan kedalaman subject mulai terbaca.

Fungsi utama **Key Light** adalah:

- menentukan arah lighting,
- membentuk **highlight** utama,
- menghasilkan **shadow** utama,
- menentukan mood dasar adegan.

Dalam konteks rendering, **Key Light** sangat penting karena ia memengaruhi bagaimana material dan permukaan objek terlihat. Arah cahaya utama akan menentukan bagian mana yang menerima cahaya langsung, bagian mana yang menjadi bayangan, dan seberapa kuat kontras antara area terang dan gelap. Dengan kata lain, **Key Light** membantu membentuk kesan tiga dimensi pada objek.

Sebelum lanjut ke pengaturan cahaya lain, kita perlu memahami bahwa **Key Light** bukan sekadar “cahaya paling terang”. Ia adalah keputusan artistik dan teknis yang menentukan karakter visual adegan. Arah, intensitas, dan sifat cahaya utama akan memengaruhi apakah subject terlihat dramatis, lembut, bersih, atau sinematik.

### Inti yang Harus Ditekankan

- **Key Light** adalah cahaya utama dalam **three-point lighting**.
- Arah **Key Light** menentukan **highlight** utama dan **shadow** utama.
- **Key Light** membentuk mood dasar dan kesan volume pada subject.
- Pemahaman **Key Light** menjadi dasar sebelum mengatur **Fill Light** dan **Rim / Back Light**.

### Transisi ke Slide Berikutnya

Setelah **Key Light** menentukan arah cahaya utama dan mood dasar, langkah berikutnya adalah mengatur **Fill Light**, yaitu cahaya yang membantu mengurangi bayangan yang terlalu gelap tanpa menghilangkan kedalaman visual.

---

## Slide 020 - Fill Light

### Narasi

Setelah **Key Light** menentukan arah cahaya utama dan membentuk bayangan, kita masih punya satu masalah visual: area bayangan bisa menjadi terlalu gelap. Di sinilah **Fill Light** berperan.

**Fill Light** adalah cahaya sekunder yang digunakan untuk mengurangi shadow yang terlalu gelap. Ia biasanya ditempatkan di sisi berlawanan dari key light, atau di posisi yang membantu menerangi bagian objek yang sebelumnya kurang mendapat cahaya.

```text
Fill < Key
```

Secara umum, intensitas **Fill Light** dibuat lebih kecil daripada **Key Light**. Artinya, fill tidak boleh menyamai atau melebihi cahaya utama. Jika fill terlalu kuat, kontras antara sisi terang dan sisi gelap akan hilang, sehingga objek bisa terlihat datar dan kurang memiliki kedalaman.

Dalam konteks rendering, fill light membantu mempertahankan detail pada area gelap. Tanpa fill, bagian objek yang berada dalam shadow bisa kehilangan tekstur, bentuk, atau informasi visual. Dengan fill yang tepat, mahasiswa bisa melihat bahwa objek tetap memiliki volume, tetapi bayangan tidak menjadi hitam pekat.

Inti yang perlu dipahami adalah keseimbangan: **Key Light** memberi arah dan bentuk, sedangkan **Fill Light** menjaga agar detail tetap terbaca. Fill light bukan untuk menghilangkan shadow sepenuhnya, melainkan untuk membuat shadow tetap ada sebagai penanda depth.

### Inti yang Harus Ditekankan

- **Fill Light** berfungsi mengurangi shadow yang terlalu gelap.
- Intensitasnya umumnya lebih kecil dari key light: `Fill < Key`.
- Tujuannya adalah mempertahankan detail area gelap tanpa menghilangkan **depth** dan kontras.
- Jika fill terlalu kuat, objek bisa terlihat datar; jika terlalu lemah, detail shadow bisa hilang.

### Transisi ke Slide Berikutnya

Setelah **Key Light** dan **Fill Light** membentuk keseimbangan antara area terang dan area gelap, kita akan lanjut ke cahaya yang berfungsi memberi penekanan pada tepi objek, yaitu **Rim / Back Light**.

---

## Slide 021 - Rim / Back Light

### Narasi

Rim light atau back light adalah cahaya yang ditempatkan dari belakang atau samping belakang objek. Posisi ini berbeda dari key light yang biasanya datang dari depan-samping, dan juga berbeda dari fill light yang bertugas memperlembay shadow. Karena datang dari arah belakang, rim light tidak dimaksudkan untuk menerangi seluruh permukaan objek secara merata, melainkan untuk menangkap bagian tepi objek.

Dalam rendering, bagian tepi inilah yang sering menentukan apakah objek terlihat menempel pada background atau terlihat terpisah. Rim light membantu memperjelas **silhouette** objek, sehingga bentuknya lebih mudah dibaca oleh mata. Hal ini penting terutama ketika objek dan background memiliki warna atau brightness yang mirip.

Fungsi utamanya dapat kita pahami sebagai berikut:

- memperjelas **silhouette** objek,
- memisahkan **subject** dari **background**,
- menambah **edge highlight** pada bagian tepi.

Secara visual, rim light biasanya muncul sebagai garis cahaya tipis di sepanjang tepi objek, misalnya di bagian kepala, bahu, atau kontur produk. Garis cahaya ini tidak harus kuat; cukup cukup untuk membuat batas objek terlihat. Jika terlalu kuat, rim light dapat mengubah karakter pencahayaan dan membuat objek terlihat seperti disinari dari belakang secara dramatis.

Dalam konteks grafika komputer, rim light berkaitan dengan cara material dan shading pipeline menghitung respons cahaya pada permukaan. Cahaya dari belakang akan menghasilkan highlight pada area yang menghadap ke arah sumber cahaya, terutama di tepi objek. Dengan demikian, meskipun bagian depan objek mungkin lebih gelap, tepi objek tetap memiliki informasi visual yang membantu kedalaman dan bentuk.

Sebelum lanjut, yang perlu dipahami adalah bahwa rim light bukan pengganti key light atau fill light. Ia bekerja sebagai aksen pencahayaan yang memperkuat pemisahan visual. Dalam setup pencahayaan, kita biasanya mengatur key light untuk membentuk bentuk utama, fill light untuk menjaga detail shadow, dan rim light untuk memberi batas atau outline pada objek.

### Inti yang Harus Ditekankan

- **Rim / back light** ditempatkan dari belakang atau samping belakang objek.
- Fungsinya memperjelas **silhouette**, memisahkan **subject** dari **background**, dan menambah **edge highlight**.
- Rim light bekerja sebagai aksen pencahayaan, bukan pengganti **key light** atau **fill light**.

### Transisi ke Slide Berikutnya

Setelah kita memahami peran key, fill, dan rim light, langkah berikutnya adalah melihat bagaimana ketiganya disusun bersama dalam setup pencahayaan tiga titik.

---

## Slide 022 - Setup Three-Point Lighting

### Narasi

Setelah kita memahami peran **Rim Light** pada slide sebelumnya, langkah berikutnya adalah menyusun tiga sumber cahaya secara bersama-sama. **Three-point lighting** adalah pola dasar pencahayaan yang menggunakan **Key Light**, **Fill Light**, dan **Rim Light** untuk membentuk volume, kedalaman, dan keterbacaan objek.

Pada diagram, **Object** berada di tengah. **Key Light** datang dari sisi kanan, **Fill Light** dari sisi kiri, **Rim Light** dari atas atau belakang atas, dan **Camera** berada di depan bawah. Arah panah menunjukkan posisi relatif cahaya terhadap objek dan kamera, bukan ukuran intensitas cahaya.

**Key Light** adalah cahaya utama yang menentukan arah bayangan dan karakter pencahayaan. **Fill Light** berfungsi mengurangi bayangan gelap di sisi berlawanan, sehingga detail objek tetap terbaca tanpa menghilangkan rasa volume. **Rim Light** membantu memisahkan objek dari latar belakang dengan memberikan garis terang di tepi atau siluet objek.

Untuk **product render**, `Area Light` sering efektif sebagai **Key** dan **Fill** karena cahayanya lebih lembut dan tersebar, menyerupai sumber cahaya fisik seperti panel studio. Cahaya area membantu menghasilkan highlight yang halus pada permukaan produk, terutama untuk material yang reflektif atau semi-reflective.

Yang perlu dipahami sebelum lanjut adalah bahwa pencahayaan bukan hanya membuat objek terlihat terang, tetapi membentuk **shading**, **contrast**, dan **silhouette**. Posisi cahaya menentukan bagaimana `shader` menghitung warna, bayangan, dan highlight pada permukaan objek. Setelah pencahayaan tersusun, tahap berikutnya adalah menentukan bagaimana objek tersebut dibingkai oleh kamera.

### Inti yang Harus Ditekankan

- **Three-point lighting** terdiri dari **Key Light**, **Fill Light**, dan **Rim Light**.
- **Key Light** menentukan arah cahaya utama dan bayangan, **Fill Light** memperlembut bayangan, **Rim Light** memperjelas siluet.
- Untuk **product render**, `Area Light` sering dipilih sebagai **Key** dan **Fill** karena menghasilkan cahaya lembut dan highlight yang natural.
- Posisi cahaya memengaruhi **shading**, **contrast**, dan keterbacaan objek sebelum kamera digunakan.

### Transisi ke Slide Berikutnya

Setelah cahaya tersusun, objek sudah memiliki volume dan keterbacaan. Langkah berikutnya adalah mengatur **camera composition**, yaitu bagaimana objek ditempatkan di dalam frame agar komposisi visual seimbang dan fokusnya jelas.

---

## Slide 023 - Camera Composition

### Narasi

Setelah pencahayaan diatur, langkah berikutnya adalah menentukan bagaimana kamera melihat scene. **Composition** adalah cara kita menempatkan `subject` di dalam `frame` kamera. Dalam grafika komputer, `frame` bukan hanya batas gambar, tetapi hasil dari posisi kamera, sudut pandang, dan batas area yang akan dirender.

Komposisi penting karena pencahayaan yang bagus belum tentu menghasilkan gambar yang enak dilihat. Composition menentukan apa yang pertama kali dilihat, bagaimana mata bergerak di dalam gambar, dan apakah objek utama terasa cukup kuat. Dalam pipeline rendering, setelah geometri, material, lighting, dan shading diproses, hasil akhirnya tetap berupa citra 2D; composition adalah cara kita mengatur citra tersebut agar komunikatif.

Tujuan composition dapat dilihat sebagai berikut:

- **menarik perhatian** ke `subject` utama,
- **menjaga keseimbangan** visual agar `frame` tidak terasa berat di satu sisi,
- **mengatur `negative space`** sebagai ruang kosong yang memberi napas dan konteks,
- **membentuk `visual hierarchy`** sehingga elemen penting lebih dominan daripada elemen pendukung.

Dalam Blender, kita bisa memahami konsep ini lewat kamera: geser kamera, ubah sudut, atau sesuaikan batas `frame`, lalu perhatikan bagaimana objek berubah dari pusat, sisi kiri, sisi kanan, dekat, atau jauh. Yang perlu dipahami sebelum lanjut adalah bahwa composition bukan aturan mati, melainkan alat untuk mengarahkan perhatian. Detail teknis seperti `framing`, `crop`, `foreground/background`, dan ruang pandang akan kita bahas lebih lanjut.

### Inti yang Harus Ditekankan

- **Composition** adalah penempatan `subject` di dalam `frame` kamera, bukan sekadar memilih objek.
- `Frame` menentukan **perhatian**, **keseimbangan**, `negative space`, dan `visual hierarchy`.
- Dalam rendering, composition memengaruhi hasil akhir citra setelah pipeline geometri, material, lighting, dan shading.
- Kamera adalah alat komposisi: posisi, sudut, dan batas `frame` mengubah makna visual.

### Transisi ke Slide Berikutnya

Setelah memahami tujuan composition, kita akan masuk ke **Framing**, yaitu cara memilih batas `frame`, menempatkan objek, mengatur ruang kosong, serta menjaga object utama tetap menjadi fokus yang jelas.

---

## Slide 024 - Framing

### Narasi

Setelah kita memahami bahwa **composition** mengatur subject di dalam frame, langkah berikutnya adalah **framing**. Framing adalah keputusan tentang apa yang masuk ke dalam batas kamera dan apa yang sengaja dibiarkan di luar. Dalam grafika komputer, ini bukan hanya soal estetika; framing menentukan bagian scene yang akan ditampilkan oleh kamera, dilihat di viewport, dan akhirnya dirender.

Kita perlu memperhatikan beberapa hal secara bersamaan:

- **object placement**: posisi objek utama relatif terhadap tepi frame,
- **negative space**: area kosong yang memberi ruang napas dan membantu mata bergerak,
- **foreground/background**: lapisan depan dan belakang yang membangun kedalaman,
- **crop**: pemotongan visual yang menentukan seberapa banyak konteks ikut terbawa,
- **ruang pandang**: arah dan ruang yang tersedia bagi objek, terutama jika objek bergerak atau memiliki orientasi.

Intinya, frame harus terasa seimbang, tetapi tidak harus simetris. Yang lebih penting adalah **objek utama tetap menjadi fokus yang jelas**. Jika terlalu banyak elemen bersaing, mata penonton akan bingung. Jika terlalu sempit, konteks bisa hilang. Jika terlalu longgar, subject bisa tenggelam.

Dalam konteks rendering, framing juga berhubungan langsung dengan kamera. Posisi kamera, orientasi kamera, dan batas frame bersama-sama menentukan apa yang terlihat. Sebelum render, kita biasanya memeriksa hasil di viewport atau preview render: apakah subject terbaca, apakah ada objek yang terpotong tidak sengaja, dan apakah foreground/background membantu atau justru mengganggu.

Hal yang harus dipahami mahasiswa sebelum lanjut adalah bahwa framing adalah tahap evaluasi visual. Kita tidak hanya menempatkan objek, tetapi juga membaca ulang frame: apa yang pertama kali dilihat, apa yang mendukung, dan apa yang perlu dihilangkan atau digeser.

### Inti yang Harus Ditekankan

- **Framing** menentukan apa yang masuk ke frame dan bagaimana perhatian penonton diarahkan.
- Perhatikan **object placement**, **negative space**, **foreground/background**, **crop**, dan **ruang pandang** secara bersamaan.
- Objek utama harus tetap menjadi **fokus visual** yang jelas, bukan sekadar ada di tengah frame.
- Dalam grafika komputer, framing berkaitan langsung dengan pengaturan kamera dan hasil akhir render.

### Transisi ke Slide Berikutnya

Setelah kita tahu elemen apa saja yang perlu diperhatikan dalam framing, langkah berikutnya adalah mencari panduan praktis untuk menempatkan subject. Di slide berikutnya, kita akan membahas **Rule of Thirds**, yaitu cara membagi frame menjadi grid `3 × 3` untuk membantu penempatan objek yang lebih natural.

---

## Slide 025 - Rule of Thirds

### Narasi

Setelah kita memperhatikan object placement, negative space, foreground/background, crop, dan ruang pandang, langkah berikutnya adalah memilih posisi subject yang membuat frame terasa seimbang. **Rule of thirds** adalah panduan komposisi yang membagi frame menjadi **3 × 3** bagian, baik secara horizontal maupun vertikal.

```text
3 × 3
```

Secara visual, bayangkan frame kamera memiliki dua garis vertikal dan dua garis horizontal yang membagi area menjadi sembilan kotak.

```text
+---+---+
|   |   |
+---+---+
|   |   |
+---+---+
|   |   |
+---+---+
```

Subject dapat ditempatkan dekat **garis** atau **titik perpotongan** pada grid tersebut. Dalam konteks grafika komputer, ini membantu kita mengatur kamera, objek 3D, dan elemen scene agar mata penonton tidak langsung jatuh ke titik tengah yang terlalu datar. Penempatan di sepertiga sering membuat komposisi terasa lebih dinamis, natural, dan mudah dibaca.

Dalam Blender, panduan ini bisa digunakan saat mengatur `camera`, memposisikan objek utama, atau menilai hasil `render` dari viewport. Kita tidak perlu menghitung koordinat secara presisi; yang penting adalah membaca keseimbangan visual antara subject, ruang kosong, dan elemen pendukung. Jika subject terlalu dekat tengah, frame bisa terasa kaku. Jika terlalu ke tepi, subject bisa kehilangan fokus.

Penting untuk ditegaskan bahwa **rule of thirds** adalah **panduan**, bukan aturan mutlak. Dalam beberapa kasus, komposisi simetris, product render, atau visualisasi teknis justru lebih cocok menggunakan penempatan tengah. Jadi, mahasiswa perlu memahami bahwa pilihan komposisi selalu mengikuti tujuan visual: apakah ingin kesan dinamis, formal, stabil, atau jelas.

Sebelum lanjut, hal yang perlu dipahami adalah cara membaca grid 3 × 3 sebagai alat bantu framing, bukan sebagai template kaku. Kita gunakan grid untuk menilai apakah subject berada pada posisi yang mendukung cerita visual, lalu kita sesuaikan dengan jenis objek dan tujuan render.

### Inti yang Harus Ditekankan

- **Rule of thirds** membagi frame menjadi **3 × 3** bagian untuk membantu menempatkan subject.
- Subject sebaiknya dekat **garis** atau **titik perpotongan** grid, bukan selalu di tengah.
- Panduan ini penting dalam grafika komputer karena memengaruhi keseimbangan visual, fokus kamera, dan kualitas komunikasi render.
- **Rule of thirds** bersifat fleksibel; untuk objek simetris atau visualisasi teknis, komposisi tengah bisa lebih tepat.

### Transisi ke Slide Berikutnya

Setelah memahami panduan sepertiga, kita akan melihat alternatif komposisi yang lebih formal dan stabil, yaitu **center composition**, yang cocok untuk product render, objek simetris, dan technical visualization.

---

## Slide 026 - Center Composition

### Narasi

Setelah kita melihat **Rule of Thirds** sebagai panduan komposisi yang lebih dinamis, **Center Composition** adalah pendekatan yang lebih langsung: objek utama diletakkan di tengah frame. Dalam grafika komputer, pendekatan ini sering dipilih ketika tujuan visual bukan membangun ketegangan dramatis, tetapi menampilkan bentuk dengan jelas dan konsisten. Untuk `product render`, `object simetris`, atau `technical visualization`, posisi tengah membantu mata pembaca langsung memahami objek tanpa harus mencari titik fokus.

Secara teknis, **Center Composition** berkaitan erat dengan penempatan kamera dan sumbu pandang. Jika kamera diarahkan ke pusat objek, biasanya sumbu kamera akan sejajar dengan sumbu simetri objek. Ini membuat hasil render terasa stabil, formal, dan mudah dibaca. Dalam pipeline rendering, pilihan komposisi ini tidak mengubah geometri atau lighting secara langsung, tetapi memengaruhi framing, `field of view`, dan persepsi proporsi objek setelah proyeksi.

Kita perlu memahami bahwa **Center Composition** bukan berarti kamera selalu tepat di depan objek. Ia bisa tetap menggunakan jarak, tinggi, atau sudut tertentu, selama pusat visual objek berada di tengah frame. Untuk objek simetris, pendekatan ini sangat kuat karena mengurangi ambiguitas visual. Namun untuk adegan yang membutuhkan dinamika, komposisi asimetris atau **Rule of Thirds** mungkin lebih sesuai.

### Inti yang Harus Ditekankan

- **Center Composition** menempatkan objek utama di tengah frame, cocok untuk `product render`, `object simetris`, dan `technical visualization`.
- Karakter visualnya **stabil**, **formal**, dan **jelas**, sehingga membantu pembaca memahami bentuk objek dengan cepat.
- Konsep ini terkait **framing kamera**, **sumbu pandang**, dan **proyeksi**, bukan mengubah geometri atau lighting secara langsung.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana posisi objek di tengah frame membentuk kesan stabil dan formal, kita akan lanjut ke **Camera Angle**, yaitu bagaimana sudut kamera memengaruhi persepsi objek.

---

## Slide 027 - Camera Angle

### Narasi

Posisi kamera menentukan bagaimana objek dibaca oleh penonton. Dalam grafika komputer, kamera bukan sekadar alat untuk menangkap gambar, tetapi juga penentu utama bagaimana sebuah adegan terlihat di layar.

Sudut kamera memengaruhi persepsi karena mengubah hubungan visual antara kamera, objek, dan ruang. Kita bisa membandingkan empat sudut utama:

- `Eye Level`: kamera sejajar dengan objek, memberikan kesan netral, seimbang, dan mudah diterima.
- `Low Angle`: kamera berada di bawah objek dan mengarah ke atas, sehingga objek tampak lebih tinggi, kuat, atau dominan.
- `High Angle`: kamera berada di atas objek dan mengarah ke bawah, sehingga bentuk atas, tata letak, atau hubungan spasial lebih mudah dibaca.
- `Top View`: kamera melihat dari tepat atas, sering dipakai untuk visualisasi teknis, denah, atau penekanan simetri.

Dalam konteks render, sudut kamera memengaruhi **siluet**, **occlusion**, dan bagian objek yang terlihat. Objek yang sama bisa terlihat formal pada `Eye Level`, dramatis pada `Low Angle`, atau lebih informatif pada `High Angle`.

Hal ini penting karena sudut kamera menentukan **hierarki visual** sebelum kita mengatur detail teknis seperti lensa atau lighting. Jika sudut salah, objek bisa terlihat terlalu kecil, terlalu dominan, atau bentuknya tidak terbaca dengan jelas.

Sebelum lanjut, mahasiswa perlu memahami bahwa `Low Angle` dan `High Angle` bukan hanya soal estetika. Keduanya mengubah makna visual: `Low Angle` cenderung membuat objek terasa berkuasa, sedangkan `High Angle` cenderung membuat objek lebih mudah dianalisis dari sisi atas.

### Inti yang Harus Ditekankan

- **Sudut kamera** memengaruhi persepsi, bukan hanya posisi objek di layar.
- `Low Angle` membuat objek terasa **dominan** atau lebih tinggi.
- `High Angle` lebih baik untuk membaca **bentuk atas** dan hubungan spasial.
- `Top View` berguna untuk visualisasi teknis atau penekanan simetri.
- Sudut kamera bekerja bersama komposisi, kamera, dan proses rendering.

### Transisi ke Slide Berikutnya

Setelah sudut kamera menentukan bagaimana objek dipersepsikan, langkah berikutnya adalah memahami **focal length**, karena panjang fokus memengaruhi **field of view**, distorsi perspektif, dan kompresi ruang.

---

## Slide 028 - Focal Length

### Narasi

Dalam kamera Blender, **focal length** adalah parameter yang menentukan seberapa luas atau sempit pandangan yang ditangkap kamera. Nilai ini biasanya dinyatakan dalam `millimeter`, sama seperti spesifikasi lensa pada kamera fotografi.

Focal length memengaruhi tiga hal penting:

- **field of view**, yaitu seberapa banyak area scene yang masuk ke frame;
- **perspective distortion**, yaitu bagaimana ukuran relatif objek dekat dan jauh tampak;
- **compression**, yaitu bagaimana jarak antar objek tampak lebih rapat atau lebih terbuka.

Secara intuitif, focal length yang lebih kecil cenderung memberi pandangan yang lebih luas, sehingga lebih banyak lingkungan yang terlihat. Sebaliknya, focal length yang lebih besar cenderung mempersempit pandangan dan membuat objek tampak lebih "terpotong" atau lebih dekat secara komposisi.

Dalam konteks grafika komputer, parameter ini penting karena kamera bukan hanya alat untuk melihat scene, tetapi juga alat untuk membentuk persepsi penonton. Jika focal length tidak sesuai, scene bisa terasa terlalu sempit, terlalu datar, atau justru membuat proporsi objek tidak nyaman dilihat.

Saat membaca properti kamera di Blender, kita perlu memperhatikan nilai `millimeter` karena nilai tersebut langsung mengubah framing dan karakter visual. Perubahan focal length sering kali lebih terasa pada komposisi keseluruhan daripada pada satu objek saja.

Sebelum lanjut, yang perlu dipahami adalah focal length bukan sekadar angka teknis. Ia menentukan bagaimana ruang, kedalaman, dan hubungan antar objek direpresentasikan dalam render.

### Inti yang Harus Ditekankan

- **Focal length** di Blender umumnya dinyatakan dalam `millimeter`.
- Parameter ini memengaruhi **field of view**, **perspective distortion**, dan **compression**.
- Nilai focal length membantu menentukan karakter komposisi: lebih luas, lebih sempit, atau lebih menekan ruang.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan melihat contoh focal length yang lebih luas, yaitu rentang `18–24 mm`, dan bagaimana karakternya cocok untuk menampilkan environment.

---

## Slide 029 - Wide Focal Length

### Narasi

Setelah memahami bahwa **focal length** memengaruhi **field of view**, **perspektif**, dan **compression**, kita masuk ke kasus pertama: **wide focal length**.

Dalam Blender, rentang yang sering dipakai untuk lensa lebar adalah:

```text
18–24 mm
```

Angka ini menunjukkan panjang fokus kamera dalam satuan `mm`. Semakin kecil nilai focal length, semakin luas area adegan yang dapat masuk ke frame.

Secara visual, lensa lebar membuat **FOV luas**. Artinya, kamera dapat menangkap lebih banyak bagian scene, misalnya langit, lantai, dinding, atau objek di sekitar kamera. Ini penting dalam grafika komputer karena sering kali kita ingin menampilkan konteks lingkungan, bukan hanya satu objek kecil.

Karakter berikutnya adalah **perspektif kuat**. Pada focal length pendek, perbedaan ukuran antara objek dekat dan objek jauh menjadi lebih terasa. Objek di **foreground** tampak lebih besar, sementara objek di belakang cepat mengecil. Efek ini membantu memberi kesan kedalaman, tetapi juga bisa membuat bentuk dekat kamera terlihat teregang jika kamera terlalu dekat.

Karena sifat tersebut, wide focal length cocok untuk **environment**, seperti establishing shot, interior, landscape, atau scene game yang perlu menunjukkan ruang. Dalam pipeline rendering, nilai ini memengaruhi bagaimana kamera memproyeksikan koordinat 3D ke gambar 2D: semakin lebar FOV, semakin banyak titik scene yang dipetakan ke viewport.

Sebelum lanjut, yang perlu dipahami mahasiswa adalah bahwa wide lens bukan sekadar “memperbesar gambar”, melainkan mengubah hubungan spasial antara kamera, objek dekat, dan objek jauh.

### Inti yang Harus Ditekankan

- **Wide focal length** biasanya berada di rentang `18–24 mm` dalam Blender.
- Lensa lebar menghasilkan **FOV luas**, sehingga lebih banyak bagian scene terlihat.
- **Perspektif kuat** membuat foreground tampak lebih besar dan kedalaman lebih terasa.
- Karakter ini cocok untuk **environment** dan shot yang membutuhkan konteks ruang.

### Transisi ke Slide Berikutnya

Jika lensa lebar memberi kesan ruang yang luas dan perspektif yang kuat, focal length menengah dan panjang akan memberi efek yang lebih berbeda: perspektif lebih natural hingga kompresi yang membuat objek tampak lebih rapat.

---

## Slide 030 - Focal Length Menengah dan Panjang

### Narasi

Setelah kita melihat **wide focal length** pada `18–24 mm`, sekarang kita masuk ke rentang **focal length menengah dan panjang**. Pada slide ini, dua kelompok penting ditampilkan:

```text
35–50 mm
→ perspektif relatif natural

85 mm atau lebih
→ FOV sempit
→ perspective compression
```

Rentang `35–50 mm` biasanya menghasilkan **perspektif yang relatif natural** bagi mata manusia. Artinya, ukuran objek di depan dan belakang tidak terlalu dibesar-besarkan, sehingga komposisi terasa lebih seimbang. Dalam grafika komputer, rentang ini sering dipakai ketika kita ingin menampilkan objek, karakter, atau lingkungan dengan proporsi yang mudah dibaca dan tidak terlalu dramatis.

Sementara itu, `85 mm` atau lebih menghasilkan **FOV sempit** dan efek **perspective compression**. Objek yang lebih jauh tampak lebih dekat ke objek di depan, sehingga jarak antar elemen terlihat lebih “ditekan”. Efek ini berguna untuk membuat subjek terlihat lebih menonjol, latar belakang lebih rapat, atau komposisi lebih terkendali.

Dalam konteks **rendering**, pilihan focal length bukan hanya soal membuat objek lebih besar atau lebih kecil di layar. Ia memengaruhi **perspektif visual**, kedalaman, dan cara penonton membaca ruang. Untuk **product-style render**, rentang menengah sampai panjang sering cocok karena bentuk produk dapat ditampilkan dengan proporsi yang stabil, detail lebih jelas, dan distorsi perspektif tidak berlebihan.

Sebelum lanjut, hal penting yang perlu dipahami adalah: **focal length menentukan karakter perspektif kamera**, bukan sekadar ukuran objek dalam frame. Jika kita hanya mengubah focal length tanpa memperhatikan posisi kamera, objek mungkin tampak lebih besar, tetapi karakter perspektifnya bisa berubah.

### Inti yang Harus Ditekankan

- `35–50 mm` menghasilkan **perspektif relatif natural** dan cocok untuk tampilan yang seimbang.
- `85 mm` atau lebih menghasilkan **FOV sempit** dan **perspective compression**, sehingga jarak antar objek tampak lebih rapat.
- Rentang menengah–panjang sering dipakai untuk **product-style render** karena proporsi objek lebih stabil dan distorsi lebih kecil.
- Focal length memengaruhi **karakter perspektif**, bukan hanya ukuran objek di dalam frame.

### Transisi ke Slide Berikutnya

Nah, setelah kita memahami karakter focal length menengah dan panjang, langkah berikutnya adalah melihat hubungan antara **focal length** dan **camera position**. Karena mengubah focal length sering kali mengharuskan kita menyesuaikan posisi kamera, agar yang dibandingkan benar-benar karakter perspektifnya, bukan hanya ukuran objek dalam frame.

---

## Slide 031 - Focal Length dan Camera Position

### Narasi

Setelah kita melihat bahwa `focal length` menengah dan panjang memberi karakter perspektif yang berbeda, ada satu hal praktis yang sering muncul saat setup kamera: mengubah `focal length` biasanya tidak berdiri sendiri.

```text
camera position
```

Artinya, ketika kita memperpendek atau memperpanjang `focal length`, posisi kamera sering perlu digeser agar objek tetap berada dalam komposisi yang wajar. Jika tidak, perubahan lensa hanya membuat objek tampak lebih besar atau lebih kecil di `frame`, padahal karakter perspektif yang ingin kita bandingkan belum terlihat jelas.

Dalam grafika komputer, `focal length` memengaruhi sudut pandang dan bagaimana kedalaman ruang diterjemahkan ke citra. Lensa pendek cenderung memperlihatkan lebih banyak ruang dan memperkuat kesan kedekatan, sedangkan lensa panjang menyempitkan `FOV` dan membuat jarak antar objek tampak lebih rapat. Karena itu, perbandingan yang bermakna bukan sekadar “objeknya jadi besar”, tetapi bagaimana bentuk, proporsi, dan hubungan antar objek berubah.

Untuk membaca slide ini, kita bisa memahaminya sebagai aturan kerja: `focal length` menentukan karakter proyeksi, sedangkan `camera position` menentukan framing. Keduanya saling terkait. Jika tujuan kita adalah membandingkan karakter perspektif, maka kita perlu menjaga framing objek tetap relatif konsisten, misalnya dengan menggeser kamera maju atau mundur setelah mengubah `focal length`.

Hal yang perlu dipahami sebelum lanjut adalah bahwa kamera dalam rendering bukan hanya “perekam” gambar, tetapi alat kontrol visual. Pemilihan `focal length` dan `camera position` akan menentukan apakah adegan terasa natural, dramatis, product-like, atau terlalu distorsi.

### Inti yang Harus Ditekankan

- Perubahan `focal length` sering mengharuskan penyesuaian `camera position`.
- Tujuan perbandingan adalah karakter perspektif, bukan hanya ukuran objek di `frame`.
- `focal length` memengaruhi `FOV` dan persepsi kedalaman, sedangkan `camera position` memengaruhi framing.
- Untuk analisis yang adil, komposisi objek perlu dijaga relatif konsisten saat mengganti lensa.

### Transisi ke Slide Berikutnya

Setelah memahami hubungan antara `focal length` dan posisi kamera, kita akan masuk ke aspek fokus: `Depth of Field`, yang menentukan area mana yang tajam dan area mana yang blur.

---

## Slide 032 - Depth of Field

### Narasi

Dalam rendering, tidak semua bagian gambar harus sama tajam. **Depth of Field**, atau **DOF**, adalah efek yang menentukan seberapa luas area yang terlihat fokus. Dengan kata lain, DOF membantu kita memilih bagian mana dari adegan yang ingin terlihat jelas dan bagian mana yang boleh mulai buram.

Secara visual, kita dapat membayangkan sebuah **Focus Plane**, yaitu bidang fokus yang berada di depan kamera. Objek yang berada tepat pada bidang ini akan dirender dengan detail yang paling tajam. Sementara itu, objek yang berada di depan atau di belakang bidang fokus akan mengalami **blur**.

```text
Focus Plane
↓
Area tajam

Di depan / belakang
↓
Blur
```

Diagram sederhana ini menunjukkan alur utama DOF. Pertama, ada **Focus Plane** sebagai acuan fokus. Kedua, area pada bidang tersebut menjadi **area tajam**. Ketiga, area di depan atau di belakang bidang fokus menjadi semakin **blur**. Semakin jauh objek dari bidang fokus, biasanya semakin kuat efek blur yang muncul.

Penting untuk dipahami bahwa DOF bukan sekadar membuat gambar “lebih artistik”. Dalam grafika komputer, DOF berperan untuk mengarahkan perhatian penonton ke subjek utama. Misalnya, jika kita ingin menonjolkan karakter atau objek tertentu, kita dapat membuat objek tersebut berada pada area fokus, sementara latar belakang atau latar depan dibuat blur.

Efek ini juga membantu memperkuat kesan kedalaman. Gambar yang seluruhnya tajam kadang terasa datar, sedangkan DOF memberi sinyal visual bahwa ada perbedaan jarak antara objek, kamera, dan latar. Dengan cara ini, adegan menjadi lebih mudah dibaca secara spasial.

Sebelum lanjut, hal yang harus benar-benar dipahami adalah hubungan antara **Focus Plane**, **area tajam**, dan **area blur**. Kita perlu tahu bahwa fokus tidak ditentukan oleh seluruh gambar, tetapi oleh bidang fokus tertentu. Setelah konsep ini jelas, kita dapat masuk ke parameter yang mengontrol seberapa dalam atau dangkal area fokus tersebut.

### Inti yang Harus Ditekankan

- **Depth of Field** menentukan seberapa luas area yang terlihat fokus.
- **Focus Plane** adalah bidang fokus; objek pada bidang ini tampak tajam.
- Objek di depan atau di belakang **Focus Plane** mengalami **blur**.
- DOF penting untuk mengarahkan perhatian dan memperkuat kesan kedalaman dalam rendering.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa DOF bergantung pada bidang fokus dan area blur, langkah berikutnya adalah mengetahui bagaimana fokus itu diatur. Slide berikutnya akan membahas **Focus Distance** dan **F-Stop**, yaitu parameter yang menentukan seberapa dalam area fokus dan seberapa kuat efek blur yang dihasilkan.

---

## Slide 033 - Focus Distance dan F-Stop

### Narasi

Setelah kita memahami bahwa **Depth of Field** mengatur seberapa luas area yang terlihat tajam, pada slide ini kita masuk ke dua kontrol utama yang menentukan area tajam tersebut: `focus distance` dan `F-stop`.

Secara intuisi, kamera memiliki titik atau bidang fokus. Jika kita mengatur `focus distance`, kita menentukan jarak dari kamera ke objek yang harus terlihat paling tajam. Dalam Blender, fokus juga bisa ditentukan dengan `focus object`, sehingga titik fokus mengikuti objek tertentu, bukan hanya angka jarak yang tetap.

Perhatikan diagram pada slide:

```text
F-stop kecil
→ DOF dangkal
→ blur kuat

F-stop besar
→ area fokus lebih luas
```

Artinya, `F-stop` kecil menghasilkan `DOF` yang dangkal. Area tajam menjadi sempit, sehingga objek di depan atau di belakang bidang fokus lebih cepat blur. Efek ini kuat dan berguna untuk memisahkan subjek dari latar belakang.

`F-stop` besar menghasilkan area fokus yang lebih luas. Lebih banyak bagian adegan yang tetap tajam, sehingga cocok ketika detail lingkungan atau beberapa objek penting harus terbaca dengan jelas.

Dalam konteks grafika komputer, kontrol ini penting karena rendering tidak hanya soal geometri dan pencahayaan, tetapi juga komposisi visual. `DOF` membantu mengarahkan perhatian penonton ke subjek utama, memperkuat kesan kedalaman, dan membuat hasil render terasa lebih seperti foto atau sinematik. Namun, kita perlu berhati-hati: jika `F-stop` terlalu kecil, detail penting bisa ikut blur dan pesan visual menjadi tidak terbaca.

Sebelum lanjut, yang perlu dipahami adalah hubungan antara fokus, jarak, dan bukaan lensa: fokus menentukan area tajam, `F-stop` menentukan seberapa lebar area tajam itu, dan tujuan artistik menentukan nilai yang dipilih.

### Inti yang Harus Ditekankan

- `focus distance` menentukan jarak bidang fokus dari kamera; `focus object` membuat fokus mengikuti objek tertentu.
- `F-stop` kecil menghasilkan `DOF` dangkal dan blur yang kuat.
- `F-stop` besar menghasilkan area fokus yang lebih luas.
- Gunakan `DOF` untuk mengarahkan perhatian, tetapi jangan membuat detail penting terlalu blur.

### Transisi ke Slide Berikutnya

Setelah fokus dan bukaan lensa diatur, langkah berikutnya adalah memberi cahaya dan lingkungan yang lebih realistis. Pada slide berikutnya kita akan membahas `HDRI`, yaitu gambar berdinamis tinggi yang dapat dipakai sebagai environment, background, dan sumber pencahayaan.

---

## Slide 034 - HDRI

### Narasi

Dalam grafika komputer, **HDRI** adalah singkatan dari `High Dynamic Range Image`.

Istilah *dynamic range* merujuk pada rentang terang dan gelap yang dapat direpresentasikan oleh sebuah gambar. Gambar biasa biasanya memiliki rentang terbatas, sehingga area sangat terang bisa menjadi putih pekat dan area sangat gelap bisa menjadi hitam pekat. HDRI menyimpan informasi cahaya yang lebih luas, sehingga detail di bagian terang dan gelap tetap dapat terbaca.

Dalam konteks rendering, HDRI penting karena lingkungan sekitar objek tidak hanya berfungsi sebagai latar belakang visual. Lingkungan juga memengaruhi bagaimana objek terlihat: warna pantulan, bayangan lembut, dan pencahayaan ambient semuanya bergantung pada cahaya yang datang dari sekeliling. Dengan HDRI, kita dapat memberikan lingkungan yang lebih realistis tanpa harus menempatkan banyak lampu secara manual.

Pada slide ini, HDRI dapat digunakan sebagai tiga hal:

- **environment**, yaitu lingkungan visual di sekitar scene;
- **background**, yaitu gambar latar yang terlihat oleh kamera;
- **sumber pencahayaan**, yaitu data cahaya yang memengaruhi objek di scene.

Perlu dipahami bahwa ketika HDRI digunakan sebagai environment, ia tidak hanya “menempel” di belakang objek. Ia menjadi bagian dari kondisi pencahayaan scene. Karena itu, perubahan HDRI dapat mengubah mood, warna, dan kontras rendering secara signifikan.

### Inti yang Harus Ditekankan

- **HDRI** adalah `High Dynamic Range Image`, yaitu gambar dengan rentang cahaya yang lebih luas.
- HDRI dapat berperan sebagai **environment**, **background**, dan **sumber pencahayaan**.
- Dalam rendering, HDRI penting karena lingkungan memengaruhi pencahayaan, refleksi, dan realisme visual.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana environment image seperti HDRI dapat dimanfaatkan secara lebih spesifik sebagai sumber pencahayaan dalam konsep **Image-Based Lighting**.

---

## Slide 035 - Image-Based Lighting

### Narasi

Setelah kita melihat `HDRI` sebagai citra beresolusi dinamis tinggi, langkah berikutnya adalah memahami bagaimana citra itu tidak hanya menjadi latar, tetapi juga menjadi sumber cahaya. Dalam grafika komputer, sebuah environment image dapat memuat informasi intensitas cahaya dari berbagai arah. Informasi inilah yang memungkinkan renderer menghitung pencahayaan pada objek seolah-olah objek berada di dalam lingkungan nyata.

Slide ini merangkum tiga peran utama `HDRI`: **Environment**, **Reflection**, dan **Lighting**. **Environment** berarti citra panorama digunakan sebagai latar atau konteks visual. **Reflection** berarti permukaan glossy atau metalik dapat memantulkan citra lingkungan. **Lighting** berarti intensitas warna dan arah cahaya dari citra digunakan untuk menerangi objek.

Ketiga peran ini sering muncul bersamaan. Misalnya, sebuah bola logam di dalam scene virtual dapat menampilkan latar studio, pantulan jendela, dan bayangan lembut dari cahaya sekitar. Inilah yang disebut **Image-Based Lighting**, yaitu penggunaan citra lingkungan sebagai sumber pencahayaan. Istilah ini penting karena membedakan `HDRI` yang hanya dipakai sebagai background dengan `HDRI` yang benar-benar memengaruhi shading dan pencahayaan objek.

Dalam konteks rendering pipeline, image-based lighting biasanya masuk pada tahap pencahayaan dan shading. Renderer tidak hanya menghitung cahaya dari lampu titik atau area buatan, tetapi juga mengambil sampel warna dan intensitas dari `environment map` berdasarkan arah normal permukaan atau arah pantulan. Hasilnya, pencahayaan terasa lebih natural karena mengikuti distribusi cahaya dunia nyata.

Yang perlu dipahami mahasiswa sebelum lanjut adalah: `HDRI` bukan sekadar tekstur latar. Jika `HDRI` hanya menjadi background, objek tetap bisa gelap atau diterangi lampu terpisah. Namun jika `HDRI` dijadikan sumber lighting, maka objek akan menerima cahaya dari lingkungan tersebut. Inilah dasar untuk membuat scene yang lebih realistis tanpa harus menambah banyak lampu manual.

### Inti yang Harus Ditekankan

- `HDRI` dapat berperan sebagai **Environment**, **Reflection**, dan **Lighting**.
- **Image-Based Lighting** adalah penggunaan environment image sebagai sumber pencahayaan.
- Konsep ini membuat pencahayaan lebih natural karena objek menerima cahaya dari lingkungan, bukan hanya dari lampu buatan.
- Dalam pipeline, `environment map` digunakan pada tahap lighting dan shading untuk membantu menghitung warna, intensitas, dan pantulan pada permukaan objek.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana posisi `HDRI` dapat diubah melalui rotasi. Rotasi ini penting karena arah datangnya lighting dan posisi highlight dapat disesuaikan tanpa mengganti file `HDRI`.

---

## Slide 036 - Rotasi HDRI

### Narasi

Setelah kita memahami bahwa **HDRI** dapat berperan sebagai **environment**, **reflection**, dan **lighting**, langkah berikutnya adalah mengatur arah pencahayaan yang diberikan oleh HDRI tersebut. Pada slide ini, kita fokus pada satu operasi sederhana tetapi sangat berguna: **rotasi HDRI**.

Secara intuitif, bayangkan HDRI sebagai gambar lingkungan 360 derajat yang membungkus scene kita. Jika gambar lingkungan itu diputar, maka posisi matahari, jendela, atau sumber terang di dalam gambar juga ikut berpindah. Akibatnya, arah datangnya **lighting** ke objek berubah, meskipun file HDRI yang dipakai tetap sama.

```text
HDRI diputar
→ arah datangnya lighting berubah
→ posisi highlight pada objek berubah
```

Dalam konteks rendering, rotasi ini bekerja pada tahap sampling environment map. Saat shader menghitung pencahayaan atau refleksi, ia mengambil warna dari arah tertentu pada gambar lingkungan. Jika gambar lingkungan dirotasi, arah sampling relatif terhadap objek dan kamera menjadi berbeda, sehingga hasil pencahayaan tampak bergeser.

Operasi ini penting karena kita dapat mencari **posisi highlight terbaik** tanpa harus mengganti file HDRI. Misalnya, jika highlight pada permukaan metalik atau glossy terlalu ke kiri, kita bisa memutar HDRI hingga highlight jatuh pada area yang lebih sesuai dengan komposisi visual.

Hal yang perlu dipahami mahasiswa sebelum lanjut adalah: rotasi HDRI bukan mengubah intensitas cahaya secara langsung, melainkan mengubah **arah** dan **distribusi visual** pencahayaan dari lingkungan. Ini berbeda dengan menambah lampu, yang akan dibahas pada slide berikutnya.

### Inti yang Harus Ditekankan

- **Rotasi HDRI** mengubah arah datangnya lighting tanpa mengganti file HDRI.
- Perubahan rotasi memengaruhi posisi **highlight**, refleksi, dan kesan arah cahaya pada objek.
- HDRI tetap berperan sebagai **environment**, tetapi rotasi membantu penyesuaian artistik pada scene.

### Transisi ke Slide Berikutnya

Setelah kita dapat mengatur arah pencahayaan dari HDRI, langkah berikutnya adalah menggabungkan HDRI dengan lampu tambahan untuk kontrol artistik yang lebih kuat.

---

## Slide 037 - HDRI + Additional Light

### Narasi

Setelah kita memahami bahwa HDRI dapat diputar untuk mengatur arah pencahayaan, langkah berikutnya adalah melihat bagaimana HDRI biasanya tidak berdiri sendiri dalam workflow pencahayaan. Dalam praktik, kita sering menggabungkan **HDRI** dengan lampu tambahan. Pola umumnya dapat ditulis sebagai:

```text
HDRI
+
Key Light
+
Rim Light
```

Secara konsep, **HDRI** berperan sebagai sumber pencahayaan lingkungan. Ia memberikan refleksi, ambient light, dan kesan ruang yang realistis karena memuat informasi cahaya dari lingkungan sekitar. Namun, HDRI biasanya bersifat global: ia menerangi seluruh adegan sekaligus. Karena itu, untuk menekankan objek tertentu, kita perlu lampu tambahan.

**Key Light** adalah lampu utama yang menentukan arah cahaya dominan pada objek. Lampu ini membantu membentuk bayangan, highlight, dan volume objek. Sementara itu, **Rim Light** ditempatkan di belakang atau sisi objek untuk memberi garis cahaya di tepi, sehingga objek lebih mudah terpisah dari latar belakang.

Penting untuk dipahami bahwa kombinasi ini bukan berarti HDRI menjadi tidak penting. Justru HDRI memberi dasar pencahayaan yang natural, sedangkan lampu tambahan memberi **kontrol artistik**. Kita bisa mengatur intensitas, warna, posisi, dan arah lampu agar objek terlihat lebih dramatis, lebih jelas, atau sesuai mood yang diinginkan.

Dalam konteks rendering pipeline, tahap ini berada pada bagian **lighting** sebelum pixel akhirnya dihitung oleh shader dan ditampilkan oleh kamera. HDRI dan lampu tambahan sama-sama memengaruhi nilai cahaya yang diterima permukaan, tetapi perannya berbeda: HDRI lebih ke lingkungan, sedangkan `Key Light` dan `Rim Light` lebih ke penekanan bentuk.

Sebelum lanjut, mahasiswa perlu menangkap bahwa pencahayaan dalam grafika komputer bukan hanya soal membuat adegan terang. Pencahayaan adalah alat untuk membentuk persepsi bentuk, kedalaman, material, dan fokus visual.

### Inti yang Harus Ditekankan

- **HDRI** berfungsi sebagai pencahayaan lingkungan yang realistis.
- **Key Light** memberi cahaya utama dan membantu membentuk bentuk objek.
- **Rim Light** memberi garis tepi agar objek lebih terpisah dari latar.
- Lampu tambahan memberi **kontrol artistik** di atas dasar pencahayaan HDRI.
- Kombinasi ini memengaruhi tahap **lighting** dalam rendering pipeline.

### Transisi ke Slide Berikutnya

Setelah pencahayaan diatur, langkah berikutnya adalah memilih engine yang akan menghitung semua informasi cahaya, material, dan geometri menjadi gambar akhir. Pada slide berikutnya, kita akan melihat dua render engine yang sering digunakan, yaitu `EEVEE` dan `Cycles`.

---

## Slide 038 - Render Engine

### Narasi

Setelah scene, kamera, dan pencahayaan sudah disiapkan, keputusan berikutnya adalah memilih **render engine**. Pada materi ini kita fokus pada dua engine utama di Blender:

```text
EEVEE
dan
Cycles
```

Keduanya sama-sama menghasilkan image, tetapi cara mereka memproses scene berbeda.

Secara sederhana, **render engine** adalah komponen dalam rendering pipeline yang mengambil data scene—geometri, material, lampu, kamera, dan environment—lalu mengubahnya menjadi pixel yang bisa ditampilkan. Posisi ini penting karena engine menentukan seberapa cepat hasil render muncul, seberapa interaktif prosesnya, dan seberapa dekat hasil akhirnya dengan perilaku cahaya yang diinginkan.

Perbedaan pendekatan ini memengaruhi workflow. Jika kita sedang mengatur kamera, material, atau pencahayaan, engine yang memberi umpan balik cepat sangat membantu untuk iterasi. Sebaliknya, untuk kebutuhan gambar akhir dengan perilaku cahaya yang lebih kompleks, kita mungkin memilih engine dengan pendekatan yang berbeda. Intinya, **EEVEE** dan **Cycles** bukan sekadar pilihan menu, tetapi strategi rendering yang berbeda.

Pada slide ini, yang perlu kita pahami dulu adalah bahwa memilih render engine berarti memilih cara scene diubah menjadi image. Setelah itu, kita akan melihat salah satu engine secara lebih dekat.

### Inti yang Harus Ditekankan

- **EEVEE** dan **Cycles** adalah dua **render engine** yang dibahas pada materi ini.
- Keduanya menghasilkan image, tetapi menggunakan pendekatan rendering yang berbeda.
- Pilihan engine memengaruhi kecepatan, interaktivitas, dan kesesuaian workflow untuk preview atau hasil akhir.

### Transisi ke Slide Berikutnya

Selanjutnya kita masuk ke **EEVEE**, yaitu render engine yang berorientasi pada real-time dan rasterization, sehingga cocok untuk preview dan iterasi cepat.

---

## Slide 039 - EEVEE

### Narasi

`EEVEE` dapat kita posisikan sebagai render engine yang mengutamakan **real-time** dan pendekatan **rasterization-oriented**. Artinya, tujuan utamanya bukan menghitung cahaya dengan cara paling fisikal, tetapi menghasilkan gambar dengan cepat sehingga pengguna masih bisa bergerak, memutar kamera, mengubah material, atau menata cahaya sambil melihat hasil secara langsung.

Dalam konteks rendering pipeline, pendekatan rasterisasi berarti objek 3D diproses menjadi representasi layar: geometri diproyeksikan, lalu setiap `fragment` atau pixel diberi warna berdasarkan material, pencahayaan, dan efek visual yang dihitung secara efisien. Di sinilah `EEVEE` berbeda dari renderer yang menghitung cahaya dengan simulasi lebih berat. Kecepatan ini membuat `viewport` terasa responsif, terutama saat mahasiswa masih dalam tahap eksplorasi.

Kelebihan utama `EEVEE` perlu dipahami bukan hanya sebagai daftar fitur, tetapi sebagai konsekuensi dari desainnya:

- **cepat**, sehingga proses preview tidak menunggu lama;
- **viewport responsif**, sehingga interaksi kamera dan transformasi terasa langsung;
- **cocok untuk preview**, terutama saat memeriksa komposisi, material, dan pencahayaan awal;
- **iterasi cepat**, sehingga mahasiswa dapat mencoba beberapa variasi lighting atau material dalam waktu singkat;
- **workflow interaktif**, karena hasil render dapat mengikuti gerakan pengguna secara real-time.

Kemampuan ini penting dalam grafika komputer karena banyak tahap produksi tidak selalu membutuhkan hasil akhir yang paling akurat. Saat menentukan posisi kamera, mengecek proporsi objek, mengatur warna material, atau merancang pencahayaan awal, umpan balik cepat sering lebih bernilai daripada render yang sangat detail tetapi lambat. Dengan `EEVEE`, mahasiswa dapat memahami hubungan antara transformasi, kamera, material, dan lighting secara lebih intuitif.

Tetapi kita juga perlu menyadari batasannya. Karena mengejar kecepatan, beberapa efek cahaya dan refleksi dapat bersifat pendekatan, bukan simulasi fisika cahaya yang penuh. Oleh karena itu, `EEVEE` sangat berguna untuk tahap eksplorasi dan preview, sementara kebutuhan akan realism yang lebih tinggi biasanya menuntut pendekatan rendering yang berbeda.

### Inti yang Harus Ditekankan

- `EEVEE` adalah render engine **real-time** dan **rasterization-oriented**.
- Kelebihannya terletak pada kecepatan, viewport responsif, preview, iterasi cepat, dan workflow interaktif.
- `EEVEE` sangat berguna untuk tahap eksplorasi, penataan kamera, material, dan lighting awal.
- Kecepatannya berasal dari pendekatan rendering yang efisien, sehingga beberapa efek cahaya bersifat pendekatan.

### Transisi ke Slide Berikutnya

Dengan memahami posisi `EEVEE` sebagai engine real-time yang cepat dan interaktif, kita dapat melanjutkan ke `Cycles`, yaitu renderer path-tracing yang menekankan lighting fisikal dan realism lebih tinggi, dengan konsekuensi render yang lebih berat.

---

## Slide 040 - Cycles

### Narasi

Setelah EEVEE yang menekankan kecepatan dan viewport responsif, kita masuk ke **Cycles**. **Cycles** adalah `path-tracing renderer`, artinya proses rendering tidak hanya mengandalkan rasterisasi cepat, tetapi juga menghitung perjalanan cahaya dalam adegan. Dalam konteks grafika komputer, pendekatan ini penting karena cahaya pada dunia nyata tidak hanya datang langsung dari sumber cahaya, tetapi juga memantul, terpantul, dan menyebarkan energi ke permukaan lain.

Kelebihan utama **Cycles** adalah **lighting** yang lebih fisikal. Artinya, hasil pencahayaan lebih dekat dengan perilaku cahaya yang sebenarnya, sehingga bayangan, pantulan, dan pencahayaan tidak langsung terlihat lebih natural. Hal ini membuat **Cycles** sangat berguna ketika kita membutuhkan hasil visual yang realistis, misalnya untuk studi material, pencahayaan interior, atau presentasi objek 3D yang menuntut akurasi visual.

Salah satu poin penting pada slide adalah **reflection** yang lebih akurat. Pada renderer berbasis `path-tracing`, cahaya yang memantul dari satu permukaan dapat terus diproses ke permukaan lain. Karena itu, refleksi pada material seperti kaca, logam, atau permukaan mengkilap dapat terlihat lebih konsisten dengan perilaku fisika cahaya, bukan sekadar efek visual yang dihitung secara cepat.

Konsep **indirect lighting** juga menjadi pembeda penting. `Indirect lighting` adalah cahaya yang sampai ke suatu permukaan setelah memantul atau tersebar dari permukaan lain. Dalam adegan 3D, cahaya tidak selalu langsung mengenai objek; sebagian cahaya dapat dipantulkan oleh dinding, lantai, atau objek lain. **Cycles** mampu menangkap fenomena ini, sehingga pencahayaan adegan terasa lebih penuh dan realistis.

Namun, semua kelebihan tersebut memiliki konsekuensi. Karena **Cycles** menghitung jalur cahaya secara lebih mendalam, proses rendering menjadi lebih berat dibandingkan renderer real-time. Waktu render dapat meningkat, terutama pada adegan dengan banyak material reflektif, pencahayaan kompleks, atau resolusi tinggi. Oleh karena itu, **Cycles** biasanya dipilih ketika kualitas visual menjadi prioritas utama, bukan ketika kecepatan iterasi menjadi kebutuhan utama.

Sebelum lanjut, yang perlu kita pahami adalah posisi **Cycles** dalam pipeline rendering. **Cycles** tetap bekerja pada adegan 3D yang sama, tetapi strategi perhitungan cahayanya berbeda. Jika **EEVEE** lebih berorientasi pada kecepatan dan umpan balik interaktif, **Cycles** lebih berorientasi pada akurasi fisika cahaya. Pemahaman ini penting agar kita dapat memilih engine rendering sesuai tujuan: preview cepat, iterasi desain, atau hasil akhir yang realistis.

### Inti yang Harus Ditekankan

- **Cycles** adalah `path-tracing renderer` yang menghitung perjalanan cahaya, bukan hanya rasterisasi cepat.
- Kelebihannya adalah **lighting** lebih fisikal, **reflection** lebih akurat, adanya **indirect lighting**, dan **realism** yang lebih tinggi.
- Konsekuensinya, proses render menjadi lebih berat dan waktu render dapat lebih lama.
- Pemilihan engine rendering bergantung pada trade-off antara **kualitas visual** dan **kecepatan render**.

### Transisi ke Slide Berikutnya

Karena **Cycles** menghitung cahaya melalui proses yang lebih mendalam, kualitas hasil akhirnya sangat dipengaruhi oleh cara cahaya disampel. Pada slide berikutnya, kita akan melihat bagaimana jumlah sample memengaruhi noise dan waktu render pada **Cycles**.

---

## Slide 041 - Sampling

### Narasi

Dalam konteks **Cycles**, istilah **sampling** menentukan seberapa banyak estimasi cahaya yang dikumpulkan untuk setiap piksel. Karena Cycles bekerja sebagai **path-tracing renderer**, hasil gambar tidak dihitung sekali secara pasti, melainkan didekati melalui banyak sampel. Semakin banyak sampel, semakin dekat estimasi cahaya terhadap nilai sebenarnya.

Kita bisa membaca hubungan pada slide sebagai berikut:

```text
Samples ↑
→ Noise ↓
→ Render Time ↑
```

Artinya, ketika jumlah **samples** dinaikkan, **noise** pada gambar cenderung berkurang. Namun, setiap tambahan sampel juga membuat **render time** meningkat. Jadi ada trade-off antara kualitas visual dan efisiensi waktu.

Secara intuitif, sample rendah membuat estimasi cahaya masih “kasar”. Piksel-piksel tertentu bisa terlihat berbintik atau berbutir, terutama pada area yang sulit dihitung seperti bayangan lembut, refleksi, atau pencahayaan tidak langsung. Sebaliknya, sample tinggi memberi hasil lebih halus dan stabil, tetapi proses rendering menjadi lebih lama karena perangkat render harus memproses lebih banyak perhitungan.

Dalam praktik, kita tidak selalu memilih sample tertinggi. Jumlah sample perlu disesuaikan dengan **target kualitas** dan **waktu render**. Untuk preview, sample bisa lebih rendah agar cepat. Untuk final render, sample dinaikkan sampai noise tidak lagi mengganggu, tanpa membuat waktu render tidak realistis.

Sebelum lanjut, mahasiswa perlu memahami bahwa sampling bukan sekadar angka di panel render. Ia adalah mekanisme utama yang menentukan keseimbangan antara **realisme**, **kebersihan gambar**, dan **biaya komputasi** dalam rendering berbasis path tracing.

### Inti yang Harus Ditekankan

- **Samples** adalah jumlah estimasi cahaya yang digunakan Cycles untuk menghitung piksel.
- Semakin tinggi **samples**, **noise** semakin berkurang, tetapi **render time** semakin lama.
- Penentuan jumlah sample harus mempertimbangkan **target kualitas** dan **waktu render** yang tersedia.
- Sampling adalah dasar dari trade-off antara hasil yang bersih dan proses rendering yang efisien.

### Transisi ke Slide Berikutnya

Meskipun meningkatkan sample dapat mengurangi noise, pada kondisi tertentu noise tetap bisa terlihat, terutama jika sample rendah, scene gelap, atau lighting sulit. Karena itu, langkah berikutnya kita akan membahas **noise dan denoising** sebagai cara untuk mempercepat workflow final render.

---

## Slide 042 - Noise dan Denoising

### Narasi

Setelah kita menaikkan jumlah `sample`, masalah yang sering muncul berikutnya adalah **noise**. Dalam render berbasis sampling seperti `Cycles`, noise muncul karena setiap pixel hanya diestimasi dari sejumlah sampel cahaya yang terbatas. Semakin sedikit sampel, semakin besar variasi acak yang terlihat pada hasil akhir.

Noise biasanya lebih terlihat ketika:

- `sample` rendah,
- scene gelap,
- lighting sulit.

Pada scene gelap, kontras antara area terang dan gelap membuat variasi kecil pada pixel lebih mudah terlihat. Pada lighting sulit, misalnya bayangan lembut, refleksi kompleks, atau cahaya yang tersebar tidak merata, proses sampling membutuhkan lebih banyak data untuk menghasilkan warna yang stabil.

Di sinilah **denoising** berperan. Denoising membantu mengurangi noise pada hasil render tanpa harus menaikkan `sample` secara ekstrem. Dengan kata lain, kita bisa menjaga kualitas visual tetap bersih sambil tetap memperhatikan `render time` dan `workflow final render`.

Dalam alur kerja, denoising dapat dipahami sebagai tahap pembersihan hasil sampling. Tahap sampling menentukan seberapa banyak informasi cahaya yang dikumpulkan, sedangkan denoising membantu merapikan informasi tersebut agar tidak tampak berbintik atau berpasir.

Hal penting yang perlu dipahami mahasiswa adalah bahwa denoising bukan pengganti sampling yang cukup, tetapi alat bantu untuk menyeimbangkan kualitas dan waktu. Jika `sample` terlalu rendah, denoising mungkin masih meninggalkan artefak. Jika `sample` sudah cukup, denoising membuat hasil akhir lebih rapi dan lebih siap untuk presentasi atau produksi.

### Inti yang Harus Ditekankan

- **Noise** paling terlihat pada kondisi `sample` rendah, scene gelap, dan lighting sulit.
- **Denoising** membantu mengurangi noise dan mempercepat `workflow final render`.
- Denoising sebaiknya dipandang sebagai pelengkap sampling, bukan pengganti jumlah `sample` yang memadai.
- Dalam `Cycles`, keseimbangan antara kualitas visual dan `render time` sering ditentukan oleh kombinasi `sample` dan denoising.

### Transisi ke Slide Berikutnya

Setelah kita memahami bagaimana noise muncul dan bagaimana denoising membantu membersihkannya, langkah berikutnya adalah membandingkan dua pendekatan render di Blender, yaitu `EEVEE` dan `Cycles`.

---

## Slide 043 - EEVEE vs Cycles

### Narasi

Dalam alur kerja Blender, kita sering harus memilih antara `EEVEE` dan `Cycles`. Keduanya sama-sama menghasilkan gambar, tetapi filosofi dan konsekuensinya berbeda. `EEVEE` dirancang untuk kecepatan dan alur **real-time oriented**, sedangkan `Cycles` menggunakan **path tracing** untuk mendekati perilaku cahaya yang lebih fisikal.

Cara membaca tabel pada slide ini adalah sebagai perbandingan karakter, bukan daftar keunggulan absolut. Kolom kiri menggambarkan `EEVEE` sebagai engine yang cepat, cocok untuk preview, dan banyak menggunakan **approximation**. Kolom kanan menggambarkan `Cycles` sebagai engine yang lebih berat, lebih realistis, dan lighting-nya lebih mendekati fisika cahaya.

Dari sisi rendering pipeline, perbedaan ini penting. `EEVEE` mengutamakan hasil yang bisa dilihat hampir seketika, sehingga banyak efek visual dihitung dengan pendekatan yang lebih praktis. `Cycles`, sebaliknya, menghitung jalur cahaya melalui **path tracing**, sehingga perilaku cahaya dan shading bisa lebih mendekati fisika.

Implikasinya terhadap workflow juga jelas. Saat kita masih mengatur komposisi, kamera, material, atau pencahayaan, `EEVEE` membantu iterasi cepat karena waktu tunggu lebih pendek. Namun, ketika tujuan akhir adalah kualitas visual yang realistis, `Cycles` biasanya lebih sesuai meskipun proses rendernya lebih lama dan lebih menuntut sumber daya.

Poin penting yang perlu dipahami mahasiswa adalah bahwa “lebih cepat” tidak selalu berarti “kurang baik”, dan “lebih realistis” tidak selalu berarti “selalu harus dipakai”. Pilihan engine bergantung pada tahap produksi, target kualitas, dan waktu yang tersedia. Dalam konteks noise dan denoising yang sudah kita bahas sebelumnya, engine yang dipilih juga memengaruhi seberapa banyak noise yang muncul dan seberapa penting proses pembersihan sinyal pada hasil akhir.

Sebelum lanjut, kita perlu memegang satu prinsip: `EEVEE` dan `Cycles` adalah dua strategi rendering dengan trade-off yang berbeda. `EEVEE` mengoptimalkan kecepatan dan kemudahan preview, sedangkan `Cycles` mengoptimalkan akurasi cahaya dan realism. Pemahaman ini akan menjadi dasar ketika kita menentukan engine mana yang paling tepat untuk sebuah scene.

### Inti yang Harus Ditekankan

- `EEVEE` adalah engine **real-time oriented** yang cepat, cocok untuk preview dan iterasi.
- `Cycles` menggunakan **path tracing** sehingga lighting lebih fisikal dan hasil lebih realistis.
- Perbedaan utama bukan “lebih baik” secara mutlak, melainkan trade-off antara kecepatan, akurasi, dan biaya render.
- Pilihan engine memengaruhi workflow, kualitas cahaya, dan kebutuhan denoising.

### Transisi ke Slide Berikutnya

Dengan memahami karakter `EEVEE` dan `Cycles`, langkah berikutnya adalah menentukan kapan masing-masing engine paling tepat digunakan.

---

## Slide 044 - Memilih Render Engine

### Narasi

Setelah kita melihat sifat dasar `EEVEE` dan `Cycles`, langkah berikutnya adalah menentukan engine mana yang paling sesuai dengan tujuan render. Dalam grafika komputer, **render engine** menentukan bagaimana cahaya, material, dan geometri diproses menjadi citra akhir. Pilihan ini memengaruhi **kecepatan**, **kualitas visual**, dan alur kerja produksi.

Kita membaca dua kelompok keputusan utama. Kelompok pertama adalah situasi di mana **kecepatan** lebih penting daripada detail fisika cahaya. Dalam kondisi itu, `EEVEE` menjadi pilihan yang wajar karena orientasinya **real-time** dan banyak menggunakan **approximation**. Engine ini cocok untuk **iterasi cepat**, **preview**, dan pekerjaan dengan **waktu terbatas**.

Kelompok kedua adalah situasi di mana **kualitas visual** menjadi prioritas utama. Jika **realism** penting, **reflection** perlu terlihat akurat, atau **indirect lighting** menentukan suasana adegan, maka `Cycles` lebih tepat. `Cycles` menggunakan pendekatan **path tracing**, sehingga pencahayaan lebih fisikal, tetapi prosesnya lebih berat dan membutuhkan waktu render yang lebih lama.

Poin pentingnya bukan menentukan engine mana yang “lebih baik”, melainkan memilih engine yang sesuai dengan **kendala** proyek. Kita bisa membandingkannya secara sederhana:

| Kebutuhan | Pilihan yang lebih tepat |
|---|---|
| Iterasi cepat, preview, waktu terbatas | `EEVEE` |
| Realism, reflection, indirect lighting, waktu render tersedia | `Cycles` |

Dalam praktik, mahasiswa perlu memahami bahwa pemilihan engine terjadi sebelum tahap **test render** dan **final render**. Jika engine tidak sesuai, hasil preview mungkin cepat tetapi kurang akurat, atau hasil akhir sangat bagus tetapi prosesnya terlalu lambat. Karena itu, keputusan ini harus mempertimbangkan waktu, deadline, dan tujuan visual.

### Inti yang Harus Ditekankan

- `EEVEE` dipilih ketika **iterasi cepat**, **preview**, dan **waktu terbatas** menjadi prioritas.
- `Cycles` dipilih ketika **realism**, **reflection**, dan **indirect lighting** penting serta waktu render tersedia.
- Pemilihan render engine adalah keputusan teknis berdasarkan **kecepatan**, **kualitas visual**, dan **kendala** proyek, bukan sekadar preferensi.

### Transisi ke Slide Berikutnya

Setelah kita memilih engine yang sesuai, langkah berikutnya adalah melihat bagaimana seluruh proses rendering berjalan secara bertahap dan iteratif, mulai dari asset, lighting, camera, hingga final render.

---

## Slide 045 - Rendering Workflow

### Narasi

Dalam praktik rendering, alur kerja biasanya tidak dilakukan sekali jadi. Diagram pada slide menunjukkan urutan kerja yang bersifat **iteratif**:

```text
Asset
↓
Lighting
↓
Camera
↓
HDRI
↓
Render Engine
↓
Test Render
↓
Adjust
↓
Final Render
```

Cara membaca diagram ini adalah dari atas ke bawah. Setiap panah menunjukkan bahwa tahap sebelumnya menjadi dasar bagi tahap berikutnya. **Asset** adalah materi dasar yang akan dirender. **Lighting** menentukan bagaimana objek terlihat, termasuk bayangan, terang-gelap, dan kontras. **Camera** menentukan sudut pandang, framing, dan apa yang masuk ke frame. **HDRI** ditempatkan sebelum **Render Engine**, artinya ia menjadi bagian dari setup visual yang perlu disiapkan sebelum memilih engine render.

Setelah elemen visual dan kamera disiapkan, kita memilih **Render Engine**. Pada slide sebelumnya, kita sudah melihat bahwa `EEVEE` cocok untuk iterasi cepat, sementara `Cycles` lebih tepat ketika realism, reflection, atau indirect lighting menjadi prioritas. Pilihan engine ini memengaruhi hasil visual, kualitas cahaya, dan waktu render.

Setelah engine dipilih, tahap berikutnya adalah **Test Render**. Di sini kita tidak langsung mengejar hasil akhir, tetapi memeriksa apakah pencahayaan, framing, kamera, dan kualitas gambar sudah mendekati tujuan. **Test Render** menjadi umpan balik penting sebelum melakukan **Adjust**.

**Adjust** adalah tahap koreksi: kita dapat mengubah intensitas cahaya, posisi kamera, parameter render, atau elemen visual lain agar hasil lebih sesuai. Karena rendering bersifat iteratif, satu kali render belum tentu menjadi final. Kita mungkin kembali ke tahap lighting, camera, atau render engine jika hasil test render belum memuaskan.

Tahap terakhir adalah **Final Render**, yaitu render yang dianggap sudah memenuhi kualitas dan tujuan visual. Penting untuk dipahami bahwa **Final Render** bukan sekadar tombol terakhir, melainkan hasil dari serangkaian keputusan dan perbaikan bertahap.

### Inti yang Harus Ditekankan

- Rendering adalah **proses iteratif**, bukan satu langkah langsung ke hasil akhir.
- Alur kerja dimulai dari **Asset**, lalu **Lighting**, **Camera**, **HDRI**, **Render Engine**, **Test Render**, **Adjust**, dan **Final Render**.
- **Test Render** berfungsi sebagai evaluasi sebelum melakukan **Adjust**.
- Pilihan **Render Engine** memengaruhi kualitas visual dan waktu render.
- **Final Render** baru dilakukan setelah hasil test render dan penyesuaian dianggap cukup.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan membahas bagaimana `test render` digunakan untuk evaluasi dan penyesuaian bertahap sebelum menuju hasil akhir.

---

## Slide 046 - Test Render dan Iterasi

### Narasi

Dalam alur rendering, setelah **asset**, **lighting**, **camera**, **HDRI**, dan **render engine** sudah disiapkan, langkah berikutnya bukan langsung menuju **final render**. Langkah yang lebih penting adalah melakukan **test render**.

**Test render** adalah render percobaan yang digunakan untuk mengevaluasi apakah setup visual sudah masuk akal. Tujuannya bukan menghasilkan gambar final, melainkan memberi umpan balik agar kita bisa memperbaiki **lighting**, **kamera**, atau parameter render sebelum masuk ke tahap akhir.

Hal ini penting karena **final render** biasanya membutuhkan waktu dan sumber daya yang lebih besar. Jika arah cahaya, framing, atau fokus masih salah, maka final render hanya akan menghasilkan gambar yang salah dengan kualitas lebih tinggi. Dengan **test render**, kita bisa menemukan masalah lebih awal dan memperbaikinya secara bertahap.

Dalam slide ini, kita diminta mengevaluasi beberapa aspek penting:

- **Arah light**: apakah cahaya membantu objek terbaca dengan jelas.
- **Contrast**: apakah gambar terlalu datar, terlalu gelap, atau terlalu keras.
- **Framing**: apakah komposisi kamera sudah sesuai dengan tujuan visual.
- **Focal length**: apakah sudut pandang kamera sudah memberikan karakter yang diinginkan.
- **DOF**: apakah efek kedalaman fokus sudah mendukung subjek utama.
- **Noise**: apakah kualitas render sudah cukup bersih atau masih terlalu bising.
- **Waktu render**: apakah biaya komputasi masih masuk akal untuk tahap berikutnya.

Kita tidak perlu menilai semua aspek sekaligus. Yang penting adalah membaca hasil **test render** secara bertahap. Misalnya, jika cahaya terlalu keras, kita bisa menyesuaikan intensitas atau arah light. Jika framing kurang pas, kita bisa menggeser kamera atau mengubah `focal length`. Jika `DOF` membuat subjek tidak fokus, kita bisa mengatur fokus kamera atau parameter depth of field.

Prinsip utamanya adalah **adjustment bertahap**. Artinya, kita mengubah satu aspek, melakukan **test render** lagi, lalu membandingkan hasilnya. Dengan cara ini, setiap perubahan lebih mudah dilacak dan tidak membuat setup visual menjadi semakin membingungkan.

Dalam konteks rendering pipeline, **test render** berada setelah **render engine** dan sebelum **adjust** serta **final render**. Ia berfungsi sebagai titik evaluasi: output render dibandingkan dengan tujuan visual, lalu parameter lighting, kamera, atau render engine disesuaikan.

### Inti yang Harus Ditekankan

- Jangan langsung mengejar **final render**; gunakan **test render** sebagai tahap evaluasi.
- **Test render** membantu menilai **arah light**, **contrast**, **framing**, `focal length`, `DOF`, `noise`, dan **waktu render**.
- Lakukan **adjustment bertahap**: ubah satu aspek, render ulang, lalu bandingkan hasilnya.

### Transisi ke Slide Berikutnya

Setelah memahami cara mengevaluasi **test render**, kita akan masuk ke praktikum **product-style lighting & rendering**, di mana konsep ini akan diterapkan langsung pada setup lighting, kamera, `focal length`, `DOF`, HDRI, serta perbandingan render menggunakan **EEVEE** dan **Cycles**.

---

## Slide 047 - Praktikum: Product-Style Lighting & Rendering

### Narasi

Pada tahap ini, kita mengambil **asset** hasil `P9–P10` sebagai objek utama. Kita tidak perlu membuat ulang model atau material; fokusnya adalah memperlakukan objek tersebut seperti produk yang akan difoto atau dirender. Dengan cara ini, mahasiswa dapat melihat bagaimana **cahaya**, **kamera**, dan **setting render** memengaruhi hasil akhir tanpa terdistraksi oleh pembuatan geometri baru.

Praktikum ini bertujuan membangun **product-style lighting** yang rapi dan konsisten. Dalam grafika komputer, pencahayaan yang baik membantu bentuk objek terbaca, material terlihat wajar, dan komposisi menjadi lebih profesional. Kita juga belajar bahwa kualitas gambar tidak hanya ditentukan oleh model, tetapi juga oleh bagaimana scene diterangi dan bagaimana kamera membingkai objek.

Secara praktis, kita akan menyiapkan beberapa elemen berikut:

- `three-point lighting` untuk membentuk bayangan, highlight, dan separasi objek dari latar;
- `camera composition` untuk mengatur framing, sudut, dan posisi objek dalam frame;
- eksperimen `focal length` untuk memahami perubahan perspektif dan proporsi objek;
- `depth of field` untuk menambah kesan kedalaman dengan fokus pada bagian tertentu;
- `HDRI` sebagai sumber cahaya lingkungan yang lebih natural;
- `EEVEE render` untuk iterasi cepat;
- `Cycles render` untuk hasil yang lebih detail dan realistis.

Poin penting yang perlu dipahami adalah bahwa setiap elemen ini saling memengaruhi. Mengubah `focal length` dapat mengubah framing; menambah `HDRI` dapat mengubah keseimbangan cahaya; mengaktifkan `depth of field` dapat membuat latar blur; dan memilih `EEVEE` atau `Cycles` akan memengaruhi kecepatan serta kualitas render. Karena itu, praktikum ini sebaiknya dilakukan secara bertahap: atur dasar pencahayaan, cek komposisi kamera, lakukan `test render` kecil, lalu baru meningkatkan kualitas render.

Dengan pendekatan ini, kita belajar alur kerja yang umum dalam produksi visual: asset sudah siap, lalu kita menyempurnakan pencahayaan, kamera, dan render. Hal ini penting karena dalam pipeline rendering, tahap lighting dan camera sering menentukan apakah sebuah scene terlihat meyakinkan atau hanya sekadar objek 3D yang berdiri di ruang kosong.

### Inti yang Harus Ditekankan

- Gunakan asset `P9–P10` sebagai dasar; jangan membuat ulang model atau material.
- Fokus praktikum adalah **product-style lighting**, komposisi kamera, dan eksperimen render.
- `three-point lighting`, `focal length`, `depth of field`, dan `HDRI` adalah alat untuk mengontrol tampilan visual.
- `EEVEE` dan `Cycles` digunakan untuk membandingkan kecepatan iterasi dengan kualitas render.
- Lakukan `test render` bertahap sebelum mengejar final render.

### Transisi ke Slide Berikutnya

Setelah memahami tujuan praktikum, kita akan menyusun urutan kerja yang lebih terstruktur, mulai dari load asset, pencahayaan, kamera, hingga perbandingan render dan final hero render.

---

## Slide 048 - Rencana Praktikum

### Narasi

Rencana praktikum ini disusun sebagai alur produksi, bukan sekadar daftar tugas. Poin pentingnya adalah mahasiswa bergerak dari aset yang sudah ada menuju gambar akhir yang siap dipresentasikan. Detail teknisnya ada pada modul praktikum, tetapi alur besarnya tetap sama: menyiapkan adegan, menerangi, membingkai, merender, lalu mengevaluasi hasil.

Secara garis besar, urutan kerja dapat dibaca sebagai lima tahap:

1. **Siapkan aset dan adegan** — load asset `P9–P10`, lalu tambahkan **ground** atau **background** agar objek memiliki konteks spasial.
2. **Susun pencahayaan** — bangun **three-point lighting** untuk membentuk volume, kontras, dan pemisahan objek dari latar.
3. **Atur kamera** — lakukan **camera composition**, eksperimen **focal length**, dan **depth of field** untuk mengendalikan perspektif serta fokus visual.
4. **Tambahkan lingkungan dan render** — gunakan **HDRI** sebagai cahaya lingkungan, lalu render dengan **EEVEE** dan **Cycles**.
5. **Evaluasi dan pilih hasil akhir** — bandingkan kedua render, lalu tentukan **final hero render** sebagai gambar utama.

Tahap pertama dan kedua penting karena menentukan apakah objek terlihat meyakinkan di ruang. **Ground** atau **background** membantu objek tidak melayang, sementara **three-point lighting** memberi arah cahaya utama, pengisi bayangan, dan aksen belakang. Tanpa dasar ini, render bisa terlihat datar atau kurang dramatis meskipun model dan material sudah bagus.

Tahap kamera dan lingkungan menentukan karakter visual. **Focal length** memengaruhi seberapa dekat atau jauh objek terasa, sedangkan **depth of field** membantu memandu mata penonton ke bagian yang paling penting. **HDRI** kemudian membuat pencahayaan lebih natural dan konsisten, terutama untuk refleksi material. Setelah itu, perbandingan **EEVEE** dan **Cycles** melatih mahasiswa memahami trade-off antara kecepatan iterasi dan akurasi pencahayaan berbasis fisika.

Rencana ini penting karena melatih alur berpikir **rendering pipeline**: dari aset, pencahayaan, kamera, lingkungan, engine render, evaluasi, hingga gambar akhir. Mahasiswa tidak perlu membuat ulang model atau material; yang harus dikuasai adalah bagaimana keputusan visual pada setiap tahap memengaruhi kualitas **final render**.

### Inti yang Harus Ditekankan

- Rencana praktikum mengikuti alur produksi: aset → adegan → lighting → camera → HDRI → render → evaluasi → **final hero render**.
- Fokus praktikum bukan membuat model atau material baru, tetapi menyusun adegan, pencahayaan, kamera, dan membandingkan hasil render.
- **Three-point lighting**, **camera composition**, **focal length**, **depth of field**, **HDRI**, **EEVEE**, dan **Cycles** adalah elemen utama yang menentukan kualitas gambar akhir.

### Transisi ke Slide Berikutnya

Dengan urutan kerja ini, kita sudah tahu bagaimana praktikum akan berjalan. Selanjutnya, kita akan merangkum benang merah pertemuan: bagaimana asset, lighting, camera, HDRI, dan render engine terhubung menjadi satu alur menuju final image.

---

## Slide 049 - Ringkasan Pertemuan

### Narasi

Sebelum menutup pertemuan, kita kembalikan semua konsep ke satu alur kerja yang sama: dari **asset** yang sudah dimuat, lalu diberi **lighting**, diatur **kamera**, dilengkapi **HDRI**, kemudian diproses oleh **render engine**, hingga menghasilkan **final image**.

Beberapa istilah yang perlu kita pegang dari pertemuan ini adalah:

- **Jenis cahaya**: `Point`, `Sun`, `Spot`, dan `Area`, yang masing-masing memberi karakter pencahayaan berbeda pada objek.
- **Three-Point Lighting**: pola dasar pencahayaan untuk membentuk volume, detail, dan mood objek.
- **Camera Composition**: cara mengatur posisi, sudut, dan framing kamera agar objek terlihat seimbang dan komunikatif.
- **Focal Length**: panjang fokus kamera yang memengaruhi sudut pandang dan proporsi objek.
- **Depth of Field**: efek fokus selektif yang membantu menonjolkan subjek utama.
- **HDRI**: lingkungan cahaya dan tekstur visual yang membuat render terasa lebih natural.
- **EEVEE** dan **Cycles**: dua render engine dengan pendekatan dan hasil yang berbeda.
- **Sampling** dan **Denoising**: parameter yang memengaruhi kualitas gambar, terutama pada bagian noise dan detail halus.

Benang merahnya bisa kita lihat pada alur berikut:

```text
Asset → Lighting → Camera → HDRI → Render Engine → Final Image
```

Yang penting bukan hanya hafal nama fiturnya, tetapi memahami peran masing-masing bagian dalam pipeline. **Lighting** menentukan bagaimana objek terlihat, **kamera** menentukan bagaimana objek dibingkai, **HDRI** memberi konteks lingkungan, dan **render engine** menentukan bagaimana semua informasi tersebut diproses menjadi gambar akhir.

### Inti yang Harus Ditekankan

- **Lighting** bukan sekadar membuat objek terang, tetapi membentuk bentuk, kedalaman, dan suasana visual.
- **Kamera** menentukan komposisi, sudut pandang, dan fokus perhatian penonton.
- **HDRI** membantu render menjadi lebih realistis karena menyumbang cahaya dan refleksi lingkungan.
- **EEVEE** dan **Cycles** adalah pilihan render engine yang memengaruhi hasil akhir dan proses rendering.
- **Sampling** dan **denoising** penting untuk mengendalikan kualitas gambar dan mengurangi noise.

### Transisi ke Slide Berikutnya

Dengan ringkasan ini, pertemuan ditutup. Pada materi selanjutnya, kita akan beralih ke **Unity 3D & Real-Time Rendering Pipeline**, di mana konsep rendering akan kita lihat dalam konteks aplikasi real-time.

---

## Slide 050 - TERIMA KASIH

### Narasi

Dengan ini kita menutup pertemuan ke-11 untuk materi **Blender Lighting, Camera & Rendering**. Pada pertemuan ini, kita telah membahas bagaimana sebuah adegan tiga dimensi dibentuk menjadi gambar final melalui kombinasi **lighting**, **kamera**, **HDRI**, dan **render engine**.

Poin penting yang perlu kita pegang adalah bahwa hasil render yang baik tidak hanya ditentukan oleh objek geometri, tetapi juga oleh cara cahaya disusun, sudut pandang kamera dipilih, serta parameter rendering yang digunakan. Dalam Blender, perbedaan antara **EEVEE** dan **Cycles** menunjukkan bahwa kualitas visual dan performa rendering dapat disesuaikan sesuai kebutuhan, mulai dari preview cepat hingga hasil final yang lebih realistis.

Sebelum lanjut ke materi berikutnya, pastikan kita sudah memahami alur dasar: **Asset → Lighting → Camera → HDRI → Render Engine → Final Image**. Alur ini akan menjadi dasar penting ketika nanti kita membahas sistem rendering real-time yang lebih kompleks.

### Inti yang Harus Ditekankan

- Pahami peran **lighting**, **camera**, dan **render engine** dalam membentuk hasil akhir sebuah adegan 3D.
- Ingat bahwa **HDRI**, **focal length**, **depth of field**, **sampling**, dan **denoising** memengaruhi kualitas visual serta performa rendering.
- Kuasai alur kerja dasar: **Asset → Lighting → Camera → HDRI → Render Engine → Final Image**.

### Transisi ke Slide Berikutnya

Setelah memahami dasar-dasar lighting, kamera, dan rendering di Blender, materi selanjutnya akan membawa kita ke **Unity 3D & Real-Time Rendering Pipeline**, di mana konsep rendering akan dibahas dalam konteks aplikasi real-time yang lebih interaktif.
