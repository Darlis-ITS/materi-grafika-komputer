# Narasi Grafika Komputer - Pertemuan 14

## Unity Shader Graph

Sumber: markdown/pert14.md

---

## Slide 000 - Cover

### Narasi

Selamat datang pada pertemuan ke-14 mata kuliah **Grafika Komputer** dengan kode `EF234504`. Pada pertemuan ini, kita akan masuk ke topik yang sangat aplikatif dalam pengembangan visual real-time, yaitu **Unity Shader Graph**. Topik ini penting karena shader merupakan salah satu komponen utama yang menentukan bagaimana objek 3D terlihat di layar, mulai dari warna, pencahayaan, tekstur, hingga efek visual yang lebih kompleks.

**Unity Shader Graph** adalah lingkungan kerja berbasis node yang memungkinkan kita membuat **shader** secara visual, tanpa harus langsung menulis kode shader dari awal. Dalam konteks **real-time graphics**, shader berperan sebagai program yang dijalankan oleh **GPU** untuk memproses geometri dan piksel secara cepat. Dengan pendekatan **node-based**, kita dapat melihat alur perhitungan secara lebih intuitif, misalnya bagaimana data posisi, warna, tekstur, atau waktu diproses sebelum akhirnya menghasilkan tampilan akhir pada material objek.

Sebelum masuk ke praktik, kita perlu memahami bahwa shader bukan sekadar efek visual, melainkan bagian dari **rendering pipeline** yang menghubungkan data geometri, material, kamera, dan pencahayaan. Pada pertemuan ini, kita akan membangun pemahaman dari konsep shader, struktur node, hingga penerapan beberapa custom shader sederhana. Dengan fondasi ini, mahasiswa diharapkan dapat membaca, memodifikasi, dan membuat shader dasar untuk kebutuhan visualisasi 3D.

### Inti yang Harus Ditekankan

- **Unity Shader Graph** adalah alat visual untuk membuat shader secara **node-based**.
- Shader berperan penting dalam **rendering pipeline** karena diproses oleh **GPU** untuk menghasilkan tampilan objek.
- Pertemuan ini akan menghubungkan konsep shader dengan praktik pembuatan efek visual sederhana.

### Transisi ke Slide Berikutnya

Setelah pembuka ini, kita akan melihat peta topik pertemuan, yaitu dari konsep shader pada real-time graphics hingga praktik membuat beberapa custom shader.

---

## Slide 001 - Topik Pembahasan

### Narasi

Pertemuan ini memfokuskan pada **shader** dalam konteks **real-time graphics**, khususnya penggunaan **Unity Shader Graph** pada **URP**. Fokusnya bukan hanya membuat efek visual, tetapi memahami bagaimana shader bekerja sebagai program yang dijalankan GPU untuk menghitung tampilan objek secara real-time.

Agenda pertemuan dapat dibaca sebagai alur dari konsep ke praktik:

- **Konsep shader** dan **node-based shader** sebagai dasar visualisasi alur perhitungan.
- **Vertex processing** dan **fragment processing** sebagai dua tahap penting dalam rendering pipeline.
- Sumber data shader seperti `UV`, `Normal`, `Texture`, `Color`, dan `Time`.
- **Math Node** untuk membangun operasi sederhana sebelum membentuk efek.
- Tiga shader praktik: **Emission Shader**, **Dissolve Shader**, dan **Animated Surface Shader**.
- Integrasi shader ke **scene URP** dan praktikum minimal tiga custom shader.

Sebelum masuk ke detail, kita perlu memahami bahwa setiap node pada Shader Graph mewakili bagian dari alur data: input, perhitungan, dan output ke material. Pemahaman ini penting karena shader yang benar secara visual harus tetap masuk akal secara teknis, terutama dari sisi keterbacaan pipeline dan dampak terhadap performa rendering.

### Inti yang Harus Ditekankan

- **Shader** adalah program yang memengaruhi bagaimana objek dirender, bukan sekadar pengaturan warna material.
- **Shader Graph** membantu kita membangun shader secara visual melalui node-node yang terhubung.
- **Vertex processing** dan **fragment processing** memiliki peran berbeda dalam pipeline rendering.
- Data seperti `UV`, `Normal`, `Texture`, `Color`, dan `Time` menjadi bahan utama dalam membangun efek shader.
- Praktikum diarahkan pada pembuatan minimal tiga custom shader dan integrasinya ke **URP**.

### Transisi ke Slide Berikutnya

Setelah topik pertemuan terlihat jelas, kita lanjut ke capaian pembelajaran untuk mengetahui kemampuan yang harus dimiliki mahasiswa setelah mengikuti pertemuan ini.

---

## Slide 002 - Capaian Pembelajaran Pertemuan

### Narasi

Pada pertemuan ini, capaian utamanya adalah mahasiswa tidak hanya tahu bahwa **shader** ada, tetapi mampu menjelaskan perannya dalam **real-time rendering**. Dalam pipeline grafika komputer, shader adalah tahap yang menentukan bagaimana data geometri dan material diubah menjadi warna yang akhirnya ditampilkan. Dengan kata lain, shader membantu menjawab pertanyaan: “bagaimana permukaan objek terlihat oleh kamera?”

Kita juga perlu membedakan dua proses penting, yaitu **vertex processing** dan **fragment processing**. Vertex processing bekerja pada titik-titik geometri, misalnya posisi vertex, normal, atau koordinat UV. Fragment processing bekerja pada area permukaan yang akan diwarnai, biasanya per fragment. Pemahaman ini penting karena banyak efek visual seperti emission, dissolve, dan animated surface bergantung pada kombinasi data vertex dan fragment.

Selain konsep pipeline, pertemuan ini memperkenalkan **node-based shader** melalui Shader Graph. Mahasiswa diharapkan mampu membaca alur node, memahami input dan output, serta menggunakan data seperti `UV`, `normal`, `texture`, `color`, dan `time`. Data-data ini menjadi bahan dasar untuk membuat permukaan yang lebih hidup, misalnya animasi sederhana, pola dissolve, atau efek emissive.

Capaian praktisnya adalah mahasiswa mampu membuat beberapa custom shader, yaitu **emission shader**, **dissolve shader**, dan **animated surface shader**, lalu mengintegrasikannya ke material `URP`. Yang tidak kalah penting adalah kemampuan mengevaluasi dampak shader terhadap visual dan performa. Dalam rendering real-time, setiap tambahan node, texture lookup, atau perhitungan matematika dapat memengaruhi beban GPU, sehingga mahasiswa perlu terbiasa menimbang antara hasil visual dan efisiensi.

### Inti yang Harus Ditekankan

- **Shader** menentukan bagaimana objek dirender secara visual dalam real-time graphics.
- **Vertex processing** dan **fragment processing** memiliki peran berbeda: vertex memproses titik geometri, fragment memproses warna permukaan.
- **Node-based shader** membantu membangun logika shader secara visual melalui input, proses, dan output.
- Data seperti `UV`, `normal`, `texture`, `color`, dan `time` menjadi bahan utama untuk membuat efek permukaan.
- Custom shader seperti **emission**, **dissolve**, dan **animated surface** harus bisa diintegrasikan ke material `URP`.
- Setiap shader perlu dievaluasi dari sisi **visual** dan **performa**, karena shader memengaruhi beban GPU.

### Transisi ke Slide Berikutnya

Setelah capaian pertemuan ini jelas, kita akan melihat posisi pertemuan 14 dalam alur mata kuliah, yaitu bagaimana **Shader Graph** menjadi tahap untuk menambahkan **custom visual behavior pada surface** setelah modeling, texturing, lighting, dan integrasi Unity `URP`.

---

## Slide 003 - Posisi Pertemuan 14

### Narasi

Peta pertemuan menunjukkan posisi materi hari ini dalam alur mata kuliah. Dari `P9` hingga `P16`, kita bergerak dari pembuatan aset visual menuju penerapan perilaku visual yang lebih dinamis di Unity. Alurnya dapat dibaca dari atas ke bawah: `Blender Modeling` menghasilkan bentuk objek, `UV + Texturing` memberi identitas permukaan, `Lighting + Rendering` membentuk pencahayaan dan citra akhir, lalu `Unity + URP` membawa aset tersebut ke pipeline real-time. Setelah itu, `Lighting + Material + Post FX` memperkaya tampilan material dan efek akhir sebelum kita masuk ke `Shader Graph`.

Posisi `P14` penting karena di sinilah kita mulai menambahkan **custom visual behavior pada surface**. Artinya, permukaan objek tidak hanya bergantung pada material bawaan atau parameter statis, tetapi dapat diberi logika visual yang lebih spesifik, misalnya perubahan warna, respons terhadap waktu, atau perilaku permukaan yang dikendalikan oleh shader. Konsep ini tetap berada pada konteks `URP` dan rendering real-time, sehingga mahasiswa perlu melihatnya sebagai lanjutan dari material, lighting, dan pipeline yang sudah dibahas, bukan sebagai topik yang berdiri sendiri.

Sebelum lanjut, hal yang perlu dipahami adalah bahwa `Shader Graph` akan membantu kita membangun perilaku visual tersebut secara node-based. Kita tidak perlu mengulang seluruh dasar shader dari nol, tetapi kita perlu memahami bahwa setiap node dan koneksi pada akhirnya akan menjadi bagian dari shader yang dieksekusi oleh GPU. Dengan posisi ini, pertemuan ke-14 menjadi jembatan antara material visual yang sudah ada dan kontrol visual yang lebih kreatif serta terukur.

### Inti yang Harus Ditekankan

- `P14` berada setelah modeling, texturing, lighting, Unity URP, dan material/post FX.
- Fokus pertemuan ini adalah **custom visual behavior pada surface**.
- `Shader Graph` adalah lanjutan dari konsep material dan rendering, bukan pengganti pipeline dasar.
- Mahasiswa perlu memahami bahwa perilaku visual pada permukaan akan dikendalikan melalui shader yang terintegrasi dengan `URP`.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana konsep shader yang sudah dikenal sebelumnya diterjemahkan ke dalam `Shader Graph`, yaitu dari logika shader menjadi node visual, koneksi, dan shader yang siap dikompilasi.

---

## Slide 004 - Dari Shader ke Shader Graph

### Narasi

Pada pertemuan sebelumnya, kita sudah melihat bahwa shader adalah bagian penting dari rendering pipeline karena menentukan bagaimana permukaan objek akhirnya terlihat. Dalam konteks WebGL, konsep shader biasanya diperkenalkan melalui kode `GLSL`, yaitu program kecil yang dijalankan GPU untuk menghitung warna, pencahayaan, atau efek visual pada permukaan objek.

Pada pertemuan ini, kita tidak mengulang penulisan `GLSL` secara manual. Fokusnya adalah bagaimana logika shader yang sama dapat dibangun dengan cara yang lebih visual menggunakan **Unity Shader Graph**.

Secara skema, alurnya dapat dibaca sebagai berikut:

```text
Shader Logic
↓
Visual Nodes
↓
Connections
↓
Compiled Shader
```

Artinya, prosesnya bergerak dari ide perilaku visual menuju representasi node, lalu dihubungkan menjadi alur data, dan akhirnya dikompilasi menjadi shader yang dapat dijalankan.

Beberapa bagian penting dari alur tersebut adalah:

1. **Shader Logic** — aturan atau perilaku visual yang ingin dibuat, misalnya warna berubah berdasarkan normal, posisi, atau waktu.
2. **Visual Nodes** — blok-blok visual yang mewakili operasi tertentu, seperti `Multiply`, `Add`, `Normal`, atau `Time`.
3. **Connections** — hubungan antar node yang menunjukkan alur data dari input ke output.
4. **Compiled Shader** — hasil akhir yang dibuat oleh editor dan dapat dijalankan oleh GPU dalam pipeline rendering.

Hal penting yang perlu dipahami sebelum lanjut adalah bahwa Shader Graph bukan sekadar “gambar kotak-kotak”. Ia adalah representasi visual dari pipeline perhitungan visual. Jika kita salah menghubungkan node, atau memilih input yang tidak sesuai, hasil rendering bisa berubah, error, atau tidak sesuai ekspektasi.

Dengan cara ini, pertemuan 14 menambahkan kemampuan **custom visual behavior pada surface**, yaitu membuat perilaku material yang lebih dinamis dan spesifik, tanpa harus kembali ke penulisan shader manual secara penuh.

### Inti yang Harus Ditekankan

- Shader Graph adalah cara **node-based** untuk membangun shader secara visual.
- Alur utamanya adalah dari **Shader Logic** ke **Visual Nodes**, lalu **Connections**, dan akhirnya **Compiled Shader**.
- Fokus pertemuan ini bukan mengulang `GLSL`, tetapi memahami cara kerja authoring shader berbasis node.
- Setiap node dan koneksi tetap mewakili logika komputasi yang akan dijalankan oleh GPU.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat mengapa pendekatan Shader Graph ini berguna, terutama untuk eksplorasi visual, pembelajaran, dan integrasi dengan URP.

---

## Slide 005 - Mengapa Shader Graph?

### Narasi

Setelah kita melihat alur dari shader ke **Shader Graph**, langkah berikutnya adalah memahami mengapa pendekatan ini penting dalam grafika komputer.

Dalam rendering, shader menentukan bagaimana objek tampak: warna, material, pencahayaan, dan efek visual. Menulis shader secara manual memberi kontrol penuh, tetapi juga menuntut pemahaman sintaks, pipeline, dan alur data yang cukup detail. **Shader Graph** hadir untuk membantu proses authoring shader dengan cara yang lebih visual.

Intinya, **Shader Graph** memungkinkan kita membuat shader tanpa harus menulis seluruh kode shader secara manual. Logika shader yang biasanya berupa baris kode dapat direpresentasikan sebagai node dan koneksi. Dengan representasi ini, mahasiswa dapat melihat secara langsung bagaimana data mengalir dari satu operasi ke operasi lain.

Beberapa keuntungan utama yang perlu kita perhatikan adalah:

- **Visual**: logika shader ditampilkan sebagai diagram, sehingga lebih mudah dipahami secara intuitif.
- **Interaktif**: kita dapat mengubah node atau koneksi dan melihat dampaknya.
- **Preview langsung**: perubahan pada shader dapat diamati secara cepat pada objek atau material.
- **Mudah bereksperimen**: mahasiswa dapat mencoba kombinasi parameter, warna, texture, atau operasi sederhana tanpa langsung terjebak pada detail kode.
- **Cocok untuk pembelajaran**: pendekatan ini membantu membangun intuisi tentang rendering sebelum masuk ke shader code yang lebih kompleks.
- **Terintegrasi dengan `URP`**: Shader Graph dapat digunakan dalam workflow Unity Universal Render Pipeline, sehingga relevan untuk pengembangan real-time.

Dari sisi pembelajaran, keuntungan ini penting karena grafika komputer sering kali bersifat visual. Mahasiswa dapat melihat hubungan antara konsep seperti warna, material, dan pipeline rendering dengan hasil akhir yang muncul di layar. Dengan preview langsung, proses belajar menjadi lebih cepat: kita tidak hanya membaca teori, tetapi juga dapat mengamati bagaimana perubahan kecil pada shader memengaruhi tampilan objek.

Namun, penting untuk dipahami bahwa **Shader Graph** bukan berarti shader tidak lagi ada. Di balik node dan koneksi tersebut, sistem tetap menghasilkan shader yang dapat dieksekusi oleh `GPU`. Jadi, yang kita gunakan adalah cara authoring yang lebih ramah, bukan penghapusan konsep shader itu sendiri.

### Inti yang Harus Ditekankan

- **Shader Graph** membantu membuat shader secara visual tanpa harus menulis seluruh kode shader secara manual.
- Keuntungannya terletak pada sifatnya yang **visual**, **interaktif**, dan memiliki **preview langsung**, sehingga cocok untuk pembelajaran dan eksperimen.
- **Shader Graph** tetap menghasilkan shader yang dapat dieksekusi, dan integrasinya dengan `URP` membuatnya relevan untuk workflow rendering real-time di Unity.

### Transisi ke Slide Berikutnya

Setelah memahami mengapa **Shader Graph** berguna, langkah berikutnya adalah melihat bagaimana ia bekerja: setiap operasi shader direpresentasikan sebagai node, dan data mengalir melalui koneksi antar node.

---

## Slide 006 - Node-Based Programming

### Narasi

Pada Shader Graph, kita tidak lagi membayangkan shader sebagai satu blok kode panjang. Kita membayangkannya sebagai **graf komputasi** yang dibangun dari **node**. Setiap node mewakili satu operasi kecil, misalnya mengambil data tekstur, mengalikan nilai, atau menyiapkan warna dasar.

Contoh alur pada slide dapat dibaca sebagai berikut:

```text
Texture
   ↓
Multiply
   ↓
Color
   ↓
Base Color
```

Secara visual, panah menunjukkan arah aliran data. Node `Texture` menghasilkan data tekstur, lalu data tersebut masuk ke node `Multiply`. Hasil perkalian kemudian diteruskan ke node `Color`, dan akhirnya masuk ke `Base Color` sebagai warna dasar yang akan digunakan oleh sistem rendering.

Yang perlu diperhatikan adalah **edge** atau garis penghubung. Edge bukan sekadar garis visual; ia membawa **data** dari output satu node ke input node lain. Dengan kata lain, node adalah "apa yang dilakukan", sedangkan edge adalah "data apa yang mengalir".

Cara membaca diagram seperti ini penting karena shader pada dasarnya adalah rangkaian operasi per-piksel. Dalam pipeline rendering, hasil dari graf ini biasanya menjadi informasi permukaan, misalnya **Base Color**, yang kemudian diproses lebih lanjut oleh tahap pencahayaan atau shading. Jadi, meskipun kita membangunnya secara visual, pada akhirnya Shader Graph akan diterjemahkan menjadi kode shader yang dijalankan oleh GPU.

Keuntungan pendekatan node-based adalah kita dapat melihat hubungan antar operasi secara langsung. Jika warna hasil terlalu gelap, kita bisa menelusuri dari `Base Color` mundur ke `Color`, `Multiply`, lalu `Texture`. Ini membuat proses belajar dan eksperimen lebih intuitif dibanding hanya membaca kode shader.

Sebelum lanjut, hal penting yang harus dipahami adalah bahwa setiap node memiliki **input** dan **output**, dan setiap edge membawa data dengan tipe tertentu. Konsep ini akan menjadi dasar untuk memahami mengapa dua node tertentu bisa atau tidak bisa dihubungkan.

### Inti yang Harus Ditekankan

- **Node** adalah unit operasi dalam Shader Graph, seperti `Texture`, `Multiply`, `Color`, dan `Base Color`.
- **Edge** adalah jalur data yang menghubungkan output satu node ke input node lain.
- Graf node menggambarkan alur komputasi shader secara visual, dan pada akhirnya akan dieksekusi oleh GPU sebagai bagian dari rendering pipeline.
- Membaca diagram dari atas ke bawah atau dari input ke output membantu memahami bagaimana data warna atau tekstur diproses.

### Transisi ke Slide Berikutnya

Setelah kita memahami bahwa node adalah operasi dan edge adalah aliran data, langkah berikutnya adalah memahami **tipe data** yang mengalir di dalamnya. Pada slide berikutnya, kita akan melihat tipe data umum pada Shader Graph dan mengapa pemilihan tipe data menentukan apakah koneksi antar node valid atau tidak.

---

## Slide 007 - Tipe Data pada Shader Graph

### Narasi

Setelah kita melihat bahwa node adalah unit operasi, hal penting berikutnya adalah memahami data yang mengalir melalui edge. Dalam Shader Graph, edge tidak hanya menghubungkan dua node secara visual; edge juga membawa nilai dengan tipe tertentu. Karena itu, **tipe data** menjadi dasar agar graph dapat dibaca, divalidasi, dan dieksekusi oleh GPU dengan benar.

Kita dapat memandang tipe data sebagai bentuk data yang menentukan makna nilai. Nilai yang sama secara angka bisa berarti berbeda tergantung tipenya. Misalnya, angka 0 sampai 1 bisa menjadi intensitas, bobot blending, atau komponen warna. Dengan tipe yang jelas, node tahu apakah nilai tersebut diperlakukan sebagai skalar, koordinat, warna, atau referensi tekstur.

Beberapa tipe data umum yang perlu kita kenali adalah:

- `Float`: nilai skalar tunggal, sering dipakai untuk intensitas, kecepatan, threshold, atau parameter numerik sederhana.
- `Vector2`: dua komponen, lazim digunakan untuk koordinat UV, offset, atau nilai dua dimensi.
- `Vector3`: tiga komponen, sering mewakili posisi, normal, arah, atau warna RGB.
- `Vector4`: empat komponen, dapat mewakili warna RGBA atau data empat dimensi.
- `Color`: data warna yang biasanya memiliki komponen merah, hijau, biru, dan alpha.
- `Texture2D`: referensi ke tekstur dua dimensi yang dapat dibaca untuk mendapatkan nilai piksel.
- `Boolean-like control`: nilai kontrol yang berguna untuk memilih jalur, mengaktifkan kondisi, atau mengatur perilaku node.
- `Matrix`: tipe data untuk transformasi atau operasi matriks pada kebutuhan tertentu.

Pemilihan tipe data penting agar koneksi node valid. Jika output sebuah node menghasilkan `Vector3`, tetapi input node lain mengharapkan `Vector2`, koneksi tersebut tidak akan dianggap valid. Hal ini bukan hanya aturan antarmuka; ia menjaga agar operasi matematika, sampling tekstur, dan transformasi tetap masuk akal secara grafis.

Dalam konteks rendering, tipe data membantu kita melacak alur informasi dari geometri, material, tekstur, hingga hasil visual. Posisi vertex, koordinat UV, warna material, dan tekstur biasanya memiliki tipe yang berbeda. Ketika kita membaca Shader Graph, kita tidak hanya melihat node, tetapi juga membaca tipe data pada setiap port untuk memahami apa yang masuk, apa yang diproses, dan apa yang keluar.

Sebelum lanjut, kita perlu memastikan bahwa mahasiswa tidak hanya menghubungkan node karena bentuknya cocok, tetapi juga memahami makna tipenya. Pemahaman ini akan menjadi dasar ketika kita mendefinisikan property shader dan mengekspos parameter ke Material Inspector.

### Inti yang Harus Ditekankan

- **Tipe data** menentukan apakah koneksi antar node valid dan bagaimana nilai diinterpretasikan.
- `Float`, `Vector2`, `Vector3`, `Vector4`, `Color`, `Texture2D`, `Boolean-like control`, dan `Matrix` memiliki peran berbeda dalam Shader Graph.
- Memahami tipe data membantu membaca alur data, menghindari error koneksi, dan membangun graph yang benar secara grafis.

### Transisi ke Slide Berikutnya

Setelah kita memahami tipe data yang mengalir di antara node, langkah berikutnya adalah mendefinisikan property shader yang akan dikendalikan dari luar. Selanjutnya kita akan melihat Blackboard, tempat property shader didefinisikan dan dapat diekspos ke Material Inspector.

---

## Slide 008 - Blackboard

### Narasi

Dalam Unity Shader Graph, **Blackboard** berfungsi sebagai tempat kita mendefinisikan **property shader**. Property ini adalah parameter yang akan digunakan oleh node-node di dalam graph, misalnya warna dasar, tekstur, kecepatan animasi, atau kekuatan emissive.

Kita bisa melihat contoh property yang umum:

```text
BaseColor
Texture
Speed
DissolveAmount
EmissionStrength
Tiling
```

Setiap nama property ini bukan sekadar label. Ia menjadi **input parameter** yang dapat dibaca oleh node shader. Misalnya, nilai `BaseColor` dapat digunakan untuk menentukan warna dasar objek, `Texture` untuk memuat tekstur, `Speed` untuk mengontrol kecepatan animasi, dan `Tiling` untuk mengatur pengulangan tekstur.

Penting untuk dipahami bahwa Blackboard membantu memisahkan **parameter material** dari **logika rendering**. Dengan cara ini, shader tidak perlu menuliskan nilai tetap di dalam graph. Nilai seperti `DissolveAmount` atau `EmissionStrength` dapat disiapkan di Blackboard, lalu digunakan oleh node yang relevan.

Dari sisi rendering pipeline, property shader berperan sebagai data yang dikirim dari material ke shader saat objek dirender. GPU kemudian mengeksekusi shader dengan nilai-nilai tersebut, sehingga tampilan objek dapat berubah tanpa mengubah struktur shader secara keseluruhan.

Selanjutnya, property yang sudah didefinisikan di Blackboard dapat diekspos ke **Material Inspector**. Artinya, nilai property dapat diubah langsung dari material, bukan hanya dari dalam Shader Graph.

### Inti yang Harus Ditekankan

- **Blackboard** adalah tempat mendefinisikan property shader di Unity Shader Graph.
- Property seperti `BaseColor`, `Texture`, `Speed`, `DissolveAmount`, `EmissionStrength`, dan `Tiling` menjadi parameter yang dapat digunakan node.
- Blackboard memisahkan parameter material dari logika shader, sehingga shader lebih fleksibel dan mudah divariasikan.
- Property dapat diekspos ke Material Inspector agar nilainya dapat diubah dari material.

### Transisi ke Slide Berikutnya

Setelah property didefinisikan di Blackboard, langkah berikutnya adalah memahami bagaimana property tersebut dapat diekspos dan diubah dari Material Inspector.

---

## Slide 009 - Exposed Property

### Narasi

Setelah kita mendefinisikan property pada **Blackboard**, langkah berikutnya adalah menentukan property mana yang akan **di-expose**. **Exposed property** adalah property yang nilainya dapat diubah dari material, bukan hanya nilai tetap yang terkunci di dalam **Shader Graph**.

Dalam **Unity Shader Graph**, property seperti `Speed` dapat dibuat di **Blackboard**. Jika property tersebut di-expose, maka property itu akan muncul di `Material Inspector`. Artinya, ketika kita memilih material tertentu, kita bisa mengatur nilai `Speed` langsung dari panel material.

```text
Shader Graph
Speed Property
    ↓
Material Inspector
    ↓
Speed = 0.5 / 1 / 2
```

Contoh alur di atas menunjukkan bahwa `Speed Property` yang ada di **Shader Graph** dapat diakses melalui `Material Inspector`. Setelah itu, nilai `Speed` bisa diset menjadi `0.5`, `1`, atau `2`. Nilai tersebut kemudian dibaca oleh node shader yang menggunakan property `Speed`.

Keuntungan utamanya adalah **satu shader dapat digunakan dengan banyak variasi material**. Misalnya, shader animasi tekstur yang sama dapat berjalan lambat, normal, atau cepat hanya dengan mengganti nilai `Speed` pada material yang berbeda. Dengan cara ini, kita tidak perlu membuat shader baru untuk setiap variasi visual.

Dalam konteks rendering pipeline, material berperan sebagai sumber parameter untuk shader. Nilai **exposed property** menjadi data yang dikirim ke shader saat objek dirender. Jadi, perubahan di `Material Inspector` dapat memengaruhi tampilan objek tanpa mengubah logika shader itu sendiri.

Yang perlu kita pahami sebelum lanjut adalah bahwa **exposing property** tidak mengubah struktur **Shader Graph**. Yang berubah adalah akses terhadap nilai property tersebut. Property yang di-expose dapat dikontrol per material, sedangkan property yang tidak di-expose biasanya tetap berada di dalam graph dan tidak bisa diubah langsung dari material.

### Inti yang Harus Ditekankan

- **Exposed property** memungkinkan nilai property shader diubah dari **Material Inspector**.
- Contoh property `Speed` dapat diset menjadi `0.5`, `1`, atau `2` untuk material yang berbeda.
- Satu shader dapat menghasilkan banyak variasi material tanpa perlu membuat shader baru.
- Material menyediakan parameter yang dibaca shader saat proses rendering berlangsung.

### Transisi ke Slide Berikutnya

Setelah property dapat di-expose dan diatur dari material, langkah berikutnya adalah melihat bagaimana nilai-nilai tersebut akhirnya masuk ke output shader. Pada slide berikutnya, kita akan membahas **Master Stack / Output**, yaitu bagian yang menentukan hasil akhir rendering surface.

---

## Slide 010 - Master Stack / Output

### Narasi

Setelah nilai-nilai material disiapkan, tahap berikutnya adalah menentukan nilai apa yang benar-benar dikirim ke proses rendering. Pada Shader Graph, **Master Stack / Output** berfungsi sebagai titik akhir dari perhitungan shader. Semua input yang masuk ke node output ini akan menjadi deskripsi permukaan yang digunakan GPU saat menampilkan objek.

Kita bisa membayangkan output shader seperti “lembar hasil akhir” dari seluruh rangkaian node sebelumnya. Node sebelumnya mungkin menghitung warna, tekstur, animasi, atau efek tertentu, tetapi hasil tersebut baru menjadi tampilan visual ketika dihubungkan ke output.

Input penting yang biasanya diperhatikan antara lain:

- `Base Color`: warna dasar permukaan.
- `Normal`: arah permukaan yang memengaruhi pencahayaan.
- `Metallic`: tingkat kemetalikan material.
- `Smoothness`: tingkat kehalusan atau reflektivitas permukaan.
- `Emission`: cahaya yang dipancarkan oleh material.
- `Alpha`: tingkat transparansi.
- `Alpha Clip Threshold`: ambang batas untuk memotong area yang dianggap transparan.

Penting untuk dipahami bahwa output tidak hanya menentukan “warna akhir” saja, tetapi juga bagaimana permukaan berinteraksi dengan cahaya, kamera, dan pipeline rendering. Misalnya, `Normal` yang salah akan membuat pencahayaan tampak tidak sesuai bentuk geometri, sedangkan `Alpha` dan `Alpha Clip Threshold` memengaruhi apakah bagian tertentu dari objek ditampilkan atau dibuang.

Dari sisi alur kerja, hubungan dengan slide sebelumnya cukup jelas. Property yang di-expose dari material dapat memengaruhi nilai yang akhirnya masuk ke output. Dengan kata lain, material memberikan parameter, node shader memproses parameter tersebut, dan **Output Shader Graph** menentukan hasil akhir yang dirender.

Sebelum lanjut, mahasiswa perlu memastikan bahwa setiap input output yang relevan sudah terhubung dengan benar. Jika satu input penting tidak terhubung atau nilainya tidak sesuai, tampilan akhir bisa terlihat datar, terlalu gelap, terlalu terang, transparan tidak wajar, atau tidak sesuai dengan material yang diinginkan.

### Inti yang Harus Ditekankan

- **Master Stack / Output** adalah titik akhir Shader Graph yang menentukan hasil akhir rendering.
- Input seperti `Base Color`, `Normal`, `Metallic`, `Smoothness`, `Emission`, `Alpha`, dan `Alpha Clip Threshold` memengaruhi tampilan permukaan.
- Output menghubungkan hasil perhitungan shader dengan cara permukaan dirender oleh GPU.
- Kesalahan koneksi atau nilai output dapat menyebabkan tampilan material tidak sesuai, meskipun node sebelumnya sudah benar.

### Transisi ke Slide Berikutnya

Setelah memahami nilai apa yang keluar dari Shader Graph, langkah berikutnya adalah memahami sifat permukaan yang dihasilkan. Pada slide berikutnya, kita akan melihat **Surface Shader pada URP**, termasuk mode seperti `Lit`, `Unlit`, `Opaque`, dan `Transparent`.

---

## Slide 011 - Surface Shader pada URP

### Narasi

Setelah output Master Stack menentukan nilai akhir material, tahap berikutnya adalah memilih **mode surface** pada `URP`. Mode ini menentukan bagaimana permukaan objek diproses oleh **rendering pipeline** sebelum akhirnya menjadi piksel di layar.

Secara garis besar, surface pada `URP` dapat memiliki sifat berikut:

- `Lit`: permukaan yang diperhitungkan pencahayaan.
- `Unlit`: permukaan yang tidak bergantung pada pencahayaan utama.
- `Opaque`: permukaan pekat dan tidak transparan.
- `Transparent`: permukaan yang menggunakan transparansi atau blending.

Perlu kita pahami bahwa pilihan ini bukan sekadar label material. Mode surface memengaruhi perilaku rendering, misalnya apakah material perlu melewati proses lighting, apakah objek akan di-blend dengan objek di belakangnya, dan bagaimana urutan render diproses oleh GPU.

Kita bisa membacanya sebagai dua pilihan utama: respons terhadap cahaya, yaitu `Lit` dan `Unlit`, serta perilaku alpha, yaitu `Opaque` dan `Transparent`. Untuk `Opaque`, objek umumnya dirender sebagai permukaan solid. Untuk `Transparent`, objek dapat menampilkan efek transparan, tetapi biasanya memerlukan penanganan khusus karena blending dan urutan render.

Karena itu, pemilihan mode harus disesuaikan dengan kebutuhan efek visual. Mode yang salah dapat membuat material tampak tidak sesuai, misalnya objek yang seharusnya pekat menjadi transparan, atau material yang seharusnya bereaksi terhadap cahaya justru tidak bereaksi. Pada slide berikutnya, kita akan membandingkan perilaku `Lit` dan `Unlit` secara lebih spesifik.

### Inti yang Harus Ditekankan

- `URP` menyediakan mode surface seperti `Lit`, `Unlit`, `Opaque`, dan `Transparent`.
- Mode surface menentukan perilaku rendering material, bukan hanya tampilan akhir.
- `Lit` dan `Unlit` berkaitan dengan respons terhadap lighting, sedangkan `Opaque` dan `Transparent` berkaitan dengan pekat atau transparansi.
- Pemilihan mode harus sesuai kebutuhan efek visual dan pipeline rendering.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat perbedaan utama antara `Lit` dan `Unlit`, serta kapan masing-masing mode lebih tepat digunakan.

---

## Slide 012 - Lit vs Unlit

### Narasi

Setelah kita melihat bahwa surface pada **URP** dapat memiliki sifat seperti `Lit`, `Unlit`, `Opaque`, dan `Transparent`, sekarang kita fokus pada dua sifat yang paling menentukan bagaimana material berinteraksi dengan cahaya, yaitu **Lit** dan **Unlit**.

**Lit** berarti material tersebut **bereaksi terhadap lighting**. Artinya, tampilan akhir objek tidak hanya ditentukan oleh warna atau texture yang kita pasang, tetapi juga oleh cahaya di sekitarnya. Dalam konteks grafika komputer, ini penting karena objek di dunia virtual biasanya perlu terlihat seperti berada di lingkungan yang sama: terkena cahaya, memiliki bayangan, dan berubah terang atau gelap sesuai kondisi pencahayaan.

Karena sifatnya itu, mode `Lit` cocok digunakan untuk material yang ingin terlihat natural dan konsisten dengan lingkungan. Contohnya adalah **material umum**, **environment**, dan **props**. Objek-objek seperti dinding, lantai, batu, furnitur, kendaraan, atau karakter biasanya lebih tepat dibuat `Lit` karena mereka seharusnya ikut bereaksi terhadap pencahayaan adegan.

Sebaliknya, **Unlit** berarti material **tidak bergantung pada lighting utama**. Pada mode ini, warna atau texture cenderung ditampilkan apa adanya, atau mengikuti aturan khusus yang kita buat, tanpa terlalu dipengaruhi oleh cahaya lingkungan. Ini membuat tampilan objek lebih stabil dan mudah dikontrol.

Mode `Unlit` biasanya dipilih ketika kita ingin objek terlihat menonjol, konsisten, atau memiliki efek visual tertentu. Slide ini menyebutkan beberapa contohnya, yaitu **UI-like surface**, **stylized glow**, dan **special visual**. Misalnya, panel antarmuka, elemen neon, aura, atau objek yang sengaja dibuat menyala tanpa mengikuti pencahayaan dunia.

Cara membaca slide ini cukup sederhana. Kita bisa memahaminya sebagai dua pilihan utama:

- **`Lit`** digunakan ketika objek harus **terlihat terkena cahaya**.
- **`Unlit`** digunakan ketika objek harus **tampil sesuai warna atau efek yang kita inginkan**, tanpa bergantung pada lighting utama.

Pilihan ini penting karena memengaruhi dua hal sekaligus: **tampilan visual** dan **biaya rendering**. Material `Lit` umumnya memerlukan perhitungan pencahayaan, sedangkan material `Unlit` biasanya lebih sederhana karena tidak perlu mengikuti lighting utama. Jadi, dalam praktik grafika komputer, kita tidak selalu memilih mode yang paling realistis, tetapi mode yang paling sesuai dengan kebutuhan visual dan performa.

Sebelum lanjut, hal yang perlu kita pegang adalah: **Lit** untuk objek dunia yang perlu bereaksi terhadap cahaya, sedangkan **Unlit** untuk objek yang perlu tampil stabil, menonjol, atau memiliki efek khusus.

### Inti yang Harus Ditekankan

- **`Lit`** adalah mode material yang **bereaksi terhadap lighting**, sehingga cocok untuk material umum, environment, dan props.
- **`Unlit`** adalah mode material yang **tidak bergantung pada lighting utama**, sehingga cocok untuk UI-like surface, stylized glow, dan special visual.
- Pemilihan antara `Lit` dan `Unlit` memengaruhi **tampilan objek**, **konsistensi visual**, dan **biaya rendering**.

### Transisi ke Slide Berikutnya

Setelah kita memahami apakah sebuah surface perlu bereaksi terhadap cahaya atau tidak, langkah berikutnya adalah menentukan apakah permukaan tersebut bersifat solid atau memungkinkan background terlihat. Di slide berikutnya, kita akan membahas perbedaan antara **Opaque** dan **Transparent**.

---

## Slide 013 - Opaque vs Transparent

### Narasi

Dalam pipeline rendering, **opaque** dan **transparent** adalah dua kategori permukaan yang sangat menentukan cara GPU memproses objek. **Opaque** berarti permukaan solid: warna akhir objek tidak perlu melihat apa yang berada di belakangnya. Karena itu, rendering objek opaque relatif lebih sederhana dan lebih stabil secara performa.

Sebaliknya, **transparent** memungkinkan background terlihat melalui permukaan. Artinya, warna akhir piksel tidak hanya ditentukan oleh objek itu sendiri, tetapi juga oleh objek atau background di belakangnya. Inilah yang membuat transparansi menjadi lebih kompleks: GPU harus menggabungkan warna objek depan dengan warna yang sudah ada di frame buffer.

Perbedaan ini penting karena transparansi biasanya **lebih mahal** dibanding opaque. Objek opaque dapat diproses dengan alur yang lebih langsung, sedangkan objek transparent sering memerlukan **sorting** agar hasil visualnya benar. Intuisinya, objek yang lebih jauh sebaiknya digambar lebih dulu, lalu objek yang lebih dekat digambar di atasnya. Tanpa urutan yang tepat, hasil blending bisa terlihat salah, terutama ketika beberapa objek transparan saling tumpang tindih.

Dalam konteks rendering pipeline, kita bisa membayangkannya seperti ini:

1. Geometri objek diproses dan diubah menjadi piksel.
2. Untuk objek **opaque**, hasil warna biasanya langsung ditulis ke frame buffer dengan bantuan depth test.
3. Untuk objek **transparent**, hasil warna digabungkan dengan warna yang sudah ada, sehingga urutan gambar sangat berpengaruh.

Karena itu, aturan praktisnya sederhana: gunakan **transparent** hanya bila memang diperlukan secara visual. Untuk material umum, environment, atau props yang tampak solid, **opaque** biasanya lebih aman, lebih cepat, dan lebih mudah dikelola.

Sebelum lanjut, mahasiswa perlu memahami bahwa pilihan opaque atau transparent bukan hanya soal “apakah objek bisa tembus pandang”. Pilihan ini juga memengaruhi **performa**, **urutan rendering**, dan **kebenaran visual** hasil akhir.

### Inti yang Harus Ditekankan

- **Opaque** adalah permukaan solid dan umumnya lebih sederhana serta lebih hemat.
- **Transparent** memungkinkan background terlihat, tetapi biasanya lebih kompleks dan lebih mahal.
- Transparansi memerlukan perhatian pada **sorting**, terutama ketika beberapa objek transparan saling tumpang tindih.
- Gunakan transparansi hanya bila diperlukan, bukan sebagai pilihan default.

### Transisi ke Slide Berikutnya

Setelah kita memahami bagaimana jenis permukaan memengaruhi rendering, langkah berikutnya adalah melihat tahap awal pemrosesan geometri, yaitu **Vertex Stage**, di mana data seperti `position`, `normal`, `tangent`, dan `UV` diproses untuk setiap vertex.

---

## Slide 014 - Vertex Stage

### Narasi

Pada tahap **vertex stage**, kita masuk ke bagian awal dari proses rendering yang bekerja langsung pada **geometri objek**. Di sini, shader tidak sedang menentukan warna untuk setiap pixel, melainkan memproses data yang dimiliki oleh setiap **vertex**.

Setiap vertex biasanya membawa beberapa atribut penting, misalnya `position`, `normal`, `tangent`, dan `UV`. Atribut `position` menentukan letak titik tersebut dalam ruang, `normal` memberi informasi arah permukaan, `tangent` membantu perhitungan arah tekstur atau efek tertentu, dan `UV` menyimpan koordinat untuk pemetaan tekstur.

Dalam konteks **Unity Shader Graph**, vertex stage adalah tempat kita bisa memodifikasi data geometri sebelum objek dilanjutkan ke tahap berikutnya. Artinya, kita tidak hanya menerima bentuk objek apa adanya, tetapi juga bisa mengubahnya secara dinamis.

Beberapa contoh penggunaan vertex stage adalah `displacement`, `waving`, `deformation`, dan `animation ringan`. Misalnya, kita bisa menggeser posisi vertex agar permukaan terlihat bergelombang, atau mengubah bentuk geometri secara sederhana tanpa harus memproses seluruh pixel.

Hal ini penting karena vertex stage memengaruhi **bentuk akhir objek** dan juga data yang akan digunakan oleh tahap berikutnya. Jika posisi vertex berubah, siluet objek ikut berubah. Jika normal atau UV diubah, informasi tersebut juga dapat memengaruhi tampilan tekstur atau pencahayaan pada tahap selanjutnya.

Yang perlu kita pahami sebelum lanjut adalah batasannya: vertex stage bekerja **per vertex**, bukan per fragment atau per pixel. Jadi, jika tujuan kita hanya mengubah warna, alpha, atau sampling tekstur, itu bukan tugas utama vertex stage. Tugas utama vertex stage adalah menyiapkan dan memodifikasi data geometri serta atribut vertex.

### Inti yang Harus Ditekankan

- **Vertex stage** memproses data setiap **vertex**, bukan setiap pixel.
- Atribut seperti `position`, `normal`, `tangent`, dan `UV` dapat dibaca atau diubah pada tahap ini.
- Vertex stage cocok untuk efek seperti `displacement`, `waving`, `deformation`, dan `animation ringan`.
- Perubahan di vertex stage memengaruhi bentuk geometri dan data yang akan digunakan oleh tahap berikutnya.

### Transisi ke Slide Berikutnya

Setelah vertex stage menyiapkan bentuk dan atribut geometri, tahap berikutnya adalah **fragment stage**, di mana kita menentukan hasil warna untuk setiap fragment atau pixel, termasuk sampling tekstur, penyesuaian warna, emission, alpha, dan dissolve mask.

---

## Slide 015 - Fragment Stage

### Narasi

Setelah **vertex stage** menentukan posisi dan data awal setiap titik mesh, pipeline rendering melanjutkan proses ke tahap rasterisasi. Pada tahap ini, permukaan polygon dipecah menjadi banyak **fragment**, yang dapat kita pahami sebagai kandidat piksel yang akan ditampilkan di layar. **Fragment stage** adalah tahap di mana GPU menentukan warna akhir untuk setiap fragment tersebut.

Intinya, vertex stage bekerja pada level **vertex**, sedangkan fragment stage bekerja pada level **fragment** atau **piksel**. Artinya, jika vertex shader mengubah posisi titik, fragment shader mengubah tampilan permukaan titik-titik tersebut. Karena jumlah fragment biasanya jauh lebih banyak daripada vertex, fragment stage sering menjadi tahap yang sangat berpengaruh pada performa rendering.

Tugas utama fragment stage adalah menghitung warna yang akan ditampilkan. Dalam konteks Unity Shader Graph, tahap ini biasanya digunakan untuk:

- **sampling texture**, yaitu mengambil warna dari tekstur berdasarkan koordinat tertentu,
- **color adjustment**, yaitu mengubah kecerahan, saturasi, atau tone warna,
- **emission**, yaitu menambahkan cahaya buatan pada material,
- **alpha**, yaitu mengatur transparansi atau opacity,
- **dissolve mask**, yaitu membuat efek objek tampak hancur atau hilang secara bertahap.

Secara visual, kita bisa membayangkan fragment stage sebagai tahap “pewarnaan” setelah bentuk objek sudah diproyeksikan ke layar. Vertex stage memastikan objek berada di posisi yang benar, sementara fragment stage memastikan setiap piksel pada objek memiliki warna, tekstur, dan efek yang sesuai.

Dalam rendering pipeline, fragment stage berada setelah transformasi dan rasterisasi, tetapi sebelum hasil akhir ditampilkan ke framebuffer. Di sinilah material, tekstur, dan efek visual mulai terasa nyata. Misalnya, sebuah objek tidak hanya memiliki bentuk geometri, tetapi juga bisa tampak bercahaya, transparan, bertekstur, atau mengalami efek dissolve.

Hal penting yang perlu dipahami mahasiswa adalah bahwa fragment stage bekerja **per fragment**, bukan per vertex. Karena itu, efek seperti tekstur, noise, alpha, atau dissolve dapat terlihat halus dan detail di permukaan objek. Namun, karena diproses untuk banyak piksel, fragment stage juga perlu dirancang efisien agar tidak membebani GPU.

Sebelum masuk ke detail teknis berikutnya, kita perlu mengingat bahwa banyak efek pada fragment stage bergantung pada cara kita mengambil data dari permukaan objek. Salah satu kunci utama untuk `sampling texture` dan membuat pola procedural adalah koordinat yang menempel pada permukaan mesh.

### Inti yang Harus Ditekankan

- **Fragment stage** menentukan warna akhir untuk setiap fragment atau piksel setelah rasterisasi.
- Fragment stage bekerja pada level **per fragment**, berbeda dengan vertex stage yang bekerja pada level **per vertex**.
- Tugas umum fragment stage meliputi `sampling texture`, `color adjustment`, `emission`, `alpha`, dan `dissolve mask`.
- Fragment stage sangat penting karena tahap inilah yang membuat material, tekstur, dan efek visual terlihat pada objek.
- Karena diproses untuk banyak piksel, fragment stage juga berkaitan langsung dengan performa rendering di GPU.

### Transisi ke Slide Berikutnya

Untuk memahami bagaimana fragment stage dapat mengambil warna dari tekstur atau membuat pola pada permukaan objek, kita perlu melihat koordinat yang digunakan untuk memetakan data ke mesh. Selanjutnya, kita akan membahas **UV Coordinate**, yaitu koordinat 2D pada permukaan mesh yang menjadi dasar `texture sampling`, `procedural pattern`, `scrolling texture`, dan `dissolve mask`.

---

## Slide 016 - UV Coordinate

### Narasi

Setelah fragment stage menentukan warna untuk setiap fragment, ada satu pertanyaan penting: dari mana fragment itu mengambil warna? Jawabannya sering kali adalah **UV coordinate**. UV adalah koordinat 2D pada surface mesh, yaitu pasangan nilai yang memberi tahu posisi suatu titik pada permukaan objek terhadap ruang tekstur.

```text
U
→ horizontal

V
→ vertical
```

Secara sederhana, `U` bergerak horizontal dan `V` bergerak vertikal. Kita bisa membayangkannya seperti label posisi pada kain yang dibentangkan di atas permukaan 3D. Jika tekstur adalah gambar 2D, maka UV adalah cara memetakan gambar tersebut ke mesh.

Nilai UV biasanya dipakai di fragment stage untuk **texture sampling**. Artinya, ketika sebuah fragment diproses, shader dapat menggunakan nilai `U` dan `V` untuk mengambil warna pada posisi tertentu di tekstur. Dengan cara ini, tekstur tidak hanya “ditempel” secara acak, tetapi mengikuti permukaan objek.

Selain texture sampling, UV juga berguna untuk beberapa kebutuhan visual lainnya, yaitu:

- **procedural pattern**, karena pola dapat dibuat berdasarkan nilai `U` dan `V`;
- **scrolling texture**, karena nilai UV dapat digeser untuk membuat tekstur tampak bergerak;
- **dissolve mask**, karena nilai UV dapat digunakan sebagai area yang menentukan bagian objek yang muncul atau hilang.

Yang perlu dipahami sebelum lanjut adalah bahwa UV bukan koordinat layar, bukan koordinat dunia, dan bukan koordinat kamera. UV adalah koordinat permukaan yang menghubungkan geometri dengan material atau tekstur. Jika nilai UV tidak sesuai, tekstur bisa miring, terpotong, atau tidak menempel dengan benar pada permukaan objek.

### Inti yang Harus Ditekankan

- **UV coordinate** adalah koordinat 2D pada surface mesh.
- `U` menyatakan arah horizontal, sedangkan `V` menyatakan arah vertikal.
- UV menjadi dasar untuk **texture sampling**, **procedural pattern**, **scrolling texture**, dan **dissolve mask**.
- Nilai UV menentukan bagaimana tekstur atau pola menempel pada permukaan objek.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana nilai UV dapat dikalikan untuk mengatur seberapa sering tekstur diulang pada permukaan, yaitu konsep **tiling**.

---

## Slide 017 - Tiling

### Narasi

**Tiling** adalah cara kita mengatur seberapa banyak sebuah **texture** diulang pada permukaan objek. Konsep ini sangat bergantung pada **UV coordinate** yang sudah kita bahas sebelumnya, karena UV menentukan titik mana pada texture yang akan diambil untuk setiap titik pada mesh.

```text
UV × 1
→ normal

UV × 2
→ 2x repetition

UV × 4
→ lebih rapat
```

Cara membaca contoh di atas adalah sebagai berikut. Jika nilai `UV × 1`, texture digunakan dengan skala normal. Jika kita mengalikan UV dengan `2`, koordinat texture menjadi lebih cepat berubah, sehingga texture tampak berulang dua kali pada permukaan yang sama. Jika dikalikan `4`, pengulangan menjadi lebih rapat lagi.

Dalam konteks rendering, tiling biasanya dilakukan sebelum **texture sampling**. Artinya, UV dari objek tidak langsung digunakan untuk mengambil warna texture, tetapi terlebih dahulu dikalikan dengan nilai tiling. Setelah itu, nilai UV yang sudah diskalakan inilah yang digunakan untuk mencari warna pada texture.

Secara visual, kita bisa membayangkannya seperti pola ubin pada dinding. Jika satu ubin menutupi seluruh permukaan, itu seperti `UV × 1`. Jika kita ingin dua ubin muat pada permukaan yang sama, ukurannya menjadi lebih kecil, dan inilah efek dari `UV × 2`.

Hal penting yang perlu dipahami adalah tiling tidak mengubah resolusi asli texture. Tiling hanya mengubah cara texture dipetakan ke permukaan. Karena itu, nilai tiling yang terlalu besar dapat membuat detail texture terlihat lebih kecil dan kurang jelas, terutama pada jarak dekat.

### Inti yang Harus Ditekankan

- **Tiling** mengatur pengulangan texture dengan menskalakan **UV** sebelum texture sampling.
- `UV × 2` membuat texture berulang dua kali pada permukaan yang sama.
- Tiling memengaruhi **kepadatan pattern**, bukan resolusi asli texture.
- Nilai tiling yang terlalu besar dapat membuat detail texture terlihat lebih kecil dan kurang jelas.

### Transisi ke Slide Berikutnya

Setelah kita memahami bagaimana texture dapat diulang menggunakan tiling, langkah berikutnya adalah membuat texture tersebut bergerak. Untuk itu, kita akan masuk ke **Time Node**, yaitu sumber nilai waktu yang dapat dikombinasikan dengan UV untuk menghasilkan animasi texture.

---

## Slide 018 - Time Node

### Narasi

Setelah kita membahas **Tiling**, kita masuk ke komponen yang membuat texture tidak lagi statis: **Time Node**. Dalam Shader Graph, node ini menyediakan nilai waktu yang terus berubah selama aplikasi berjalan. Nilai waktu ini dapat digunakan sebagai input untuk membuat animasi sederhana pada texture.

Intuisi visualnya cukup sederhana. Bayangkan texture sebagai gambar yang ditempel pada permukaan objek. Jika koordinat `UV` yang kita gunakan untuk mengambil warna texture bergeser sedikit setiap frame, maka texture akan tampak bergerak, bergulir, atau beranimasi. **Time Node** adalah sumber pergeseran itu.

Alur pada slide dapat dibaca dari atas ke bawah:

1. `Time` menghasilkan nilai waktu yang berubah.
2. Nilai tersebut di-multiply dengan `Speed` untuk mengatur seberapa cepat animasi berjalan.
3. Hasilnya di-add ke `UV`, sehingga koordinat texture bergeser.
4. Texture yang disampel dengan `UV` baru menghasilkan **Animated Texture**.

```text
Time
   ↓
Multiply Speed
   ↓
Add to UV
   ↓
Animated Texture
```

Dalam konteks rendering pipeline, proses ini terjadi pada tahap shading, ketika shader menghitung warna untuk setiap titik pada surface. Karena `Time` berubah setiap frame, hasil sampling texture juga berubah, sehingga GPU menghasilkan tampilan yang bergerak tanpa mengubah geometri objek.

Yang perlu dipahami mahasiswa sebelum lanjut adalah bahwa `Time` sendiri hanya nilai. Yang membuatnya menjadi animasi adalah bagaimana nilai itu dikombinasikan dengan `UV`. `Speed` menentukan laju animasi, sedangkan penjumlahan ke `UV` menentukan efek pergeseran texture.

### Inti yang Harus Ditekankan

- **Time Node** menyediakan nilai waktu yang berubah selama aplikasi berjalan.
- `Time` biasanya dikalikan `Speed` untuk mengatur kecepatan animasi.
- Hasilnya ditambahkan ke `UV` sehingga texture tampak bergerak.
- Animasi ini terjadi karena koordinat sampling texture berubah setiap frame, bukan karena objek bergerak secara geometris.

### Transisi ke Slide Berikutnya

Dengan alur `Time → Multiply Speed → Add to UV`, kita sudah melihat pola dasar animasi texture. Selanjutnya, pola ini dapat dirumuskan secara lebih ringkas sebagai `UV' = UV + Time × Speed`, yang menjelaskan bagaimana texture tampak bergerak di atas surface.

---

## Slide 019 - Animated UV

### Narasi

**Animated UV** adalah cara sederhana untuk membuat **texture** tampak bergerak di atas permukaan objek, tanpa mengubah geometri mesh. Intinya, kita tidak menggeser objek di ruang dunia, melainkan menggeser **koordinat texture** yang dipakai untuk mengambil warna dari texture.

Formula konsepnya dapat ditulis sebagai berikut:

```text
UV'
=
UV
+
Time × Speed
```

Pada formula tersebut, `UV` adalah koordinat texture awal pada suatu titik di permukaan. `Time` adalah nilai waktu yang terus bertambah saat aplikasi berjalan. `Speed` menentukan seberapa cepat koordinat texture bergeser. Hasilnya, `UV'` adalah koordinat texture baru yang digunakan untuk sampling texture.

Dalam alur Shader Graph, kita dapat membacanya dari kiri ke kanan: node `Time` menghasilkan nilai waktu, nilai tersebut dikalikan dengan `Speed`, lalu hasil perkalian ditambahkan ke `UV`. Hasil penjumlahan, yaitu `UV'`, kemudian masuk ke node sampling texture. Dengan kata lain, inputnya adalah waktu dan koordinat texture, prosesnya adalah pergeseran koordinat, dan outputnya adalah warna texture yang tampak bergeser.

Dalam rendering pipeline, pergeseran ini biasanya terjadi pada tahap **fragment shader** atau **pixel shader**. Setelah rasterisasi menghasilkan piksel-piksel pada surface, shader menghitung `UV'` untuk setiap piksel, lalu mengambil warna texture pada koordinat tersebut. Karena `Time` terus berubah, warna yang diambil pada posisi yang sama akan berbeda dari waktu ke waktu, sehingga texture terlihat bergerak.

Konsep ini penting karena animasi texture dapat dilakukan dengan biaya komputasi yang relatif murah. Kita tidak perlu memindahkan vertex, mengubah mesh, atau menambah objek baru. Cukup mengubah koordinat sampling, kita sudah bisa membuat efek seperti pola berjalan, permukaan air yang bergeser, atau material yang tampak hidup.

Sebelum lanjut, hal yang perlu dipahami adalah `UV` bukan koordinat layar dan bukan koordinat dunia. `UV` adalah koordinat pada texture. Nilai `Speed` memengaruhi kecepatan dan arah pergeseran; jika nilainya negatif, arah gerakan dapat berlawanan. Jika texture di-set untuk berulang, pergeseran akan terlihat seperti scroll yang terus-menerus; jika tidak, hasil sampling dapat terpotong atau clamp pada batas texture.

### Inti yang Harus Ditekankan

- **Animated UV** membuat texture tampak bergerak dengan menggeser `UV`, bukan menggeser objek.
- Formula `UV' = UV + Time × Speed` menunjukkan bahwa waktu dikalikan kecepatan lalu ditambahkan ke koordinat texture.
- Dalam pipeline, pergeseran ini terjadi saat sampling texture, biasanya pada fragment shader.
- `UV` adalah koordinat texture, bukan koordinat layar atau koordinat dunia.

### Transisi ke Slide Berikutnya

Jika pergeseran linear seperti ini sudah dipahami, langkah berikutnya adalah membuat gerakan yang lebih periodik. Pada slide berikutnya, kita akan melihat node `Sine`, yang mengubah waktu menjadi gelombang berulang sehingga cocok untuk efek pulsing, blinking, wave, atau oscillation.

---

## Slide 020 - Sine Wave

### Narasi

Node `Sine` dalam Shader Graph adalah node matematika yang mengubah nilai input menjadi **gelombang periodik**. Pada slide ini, input yang digunakan adalah `Time`, sehingga nilai yang masuk terus berubah seiring waktu berjalan.

Alur konsepnya dapat dibaca seperti ini:

```text
Time
  ↓
Sine
  ↓
-1 ... +1
```

Artinya, `Time` masuk ke node `Sine`, lalu node tersebut menghasilkan nilai yang bergerak naik-turun secara berulang. Outputnya tidak naik terus seperti nilai linear, tetapi berada di rentang `-1` sampai `+1`.

Pola naik-turun inilah yang membuat `Sine` sangat berguna dalam shader. Kita bisa membuat animasi material yang berulang tanpa perlu membuat keyframe manual. Cukup nilai waktu yang diumpankan ke `Sine`, lalu outputnya dapat memengaruhi parameter tertentu pada material.

Karena sifatnya berulang dan halus, node ini cocok untuk efek seperti:

- `pulsing`,
- `blinking`,
- `wave`,
- `oscillation`.

Yang perlu kita pahami di sini adalah bahwa `Sine` bukan sekadar membuat nilai berubah, tetapi membuat perubahan yang **periodik** dan **halus**. Dalam konteks grafika komputer, pola seperti ini sering dipakai untuk membuat material terasa hidup, misalnya intensitas yang berdenyut atau gerakan yang berayun.

### Inti yang Harus Ditekankan

- Node `Sine` mengubah input, misalnya `Time`, menjadi nilai periodik antara `-1` dan `+1`.
- Outputnya naik-turun secara halus dan berulang, sehingga cocok untuk `pulsing`, `blinking`, `wave`, dan `oscillation`.
- Dalam shader, node ini penting untuk membuat animasi material yang berulang tanpa keyframe manual.

### Transisi ke Slide Berikutnya

Karena output `Sine` berada di antara `-1` dan `+1`, kadang kita perlu mengubah rentang tersebut menjadi `0` sampai `1` agar bisa dipakai sebagai brightness, mask, atau parameter shader lain. Pada slide berikutnya kita akan membahas cara remap nilai tersebut.

---

## Slide 021 - Remap Nilai

### Narasi

Setelah kita melihat node `Sine`, ada satu hal yang sering muncul: keluarannya tidak selalu berada pada rentang yang kita butuhkan. Node `Sine` menghasilkan nilai periodik dari `-1` sampai `+1`. Nilai itu sangat berguna untuk osilasi, tetapi banyak parameter shader justru bekerja paling alami pada rentang `0` sampai `1`. Karena itu, kita perlu melakukan **remap nilai**.

Intuisi visualnya sederhana. Bayangkan gelombang `sin(x)` berada di tengah nol, dengan puncak `+1` dan lembah `-1`. Jika kita ingin mengubahnya menjadi nilai yang bisa dikontrol untuk `brightness` atau `mask`, kita ingin menggeser rentang itu ke `0` sampai `1`.

Contoh konsepnya adalah:

```text
sin(x) × 0.5 + 0.5
```

Di sini terjadi dua langkah penting:

- `sin(x) × 0.5` memperkecil amplitudo dari `-1 ... +1` menjadi `-0.5 ... +0.5`.
- `+ 0.5` menggeser seluruh rentang ke atas, sehingga hasil akhirnya berada pada `0 ... +1`.

Langkah ini penting karena banyak parameter dalam shader mengharapkan input dalam rentang `0` sampai `1`. Jika kita langsung memakai `Sine` untuk `brightness` atau `mask`, nilai negatif bisa membuat hasil visual tidak sesuai. Dengan remap, nilai osilasi menjadi lebih aman, lebih stabil, dan lebih mudah dikontrol.

Secara konsep, **remap nilai** adalah cara mengubah skala dan posisi sebuah sinyal. Kita tidak mengubah bentuk gelombang, tetapi mengubah rentang nilainya agar cocok dengan tujuan visual. Pola ini akan sering kita temui ketika bekerja dengan `Time`, `Sine`, `Noise`, atau parameter animasi lainnya.

### Inti yang Harus Ditekankan

- Node `Sine` menghasilkan nilai dari `-1` sampai `+1`.
- Rumus `sin(x) × 0.5 + 0.5` mengubah rentang tersebut menjadi `0` sampai `1`.
- Remap nilai penting untuk mengontrol `brightness`, `mask`, atau parameter lain yang membutuhkan rentang `0-1`.
- Remap tidak mengubah bentuk gelombang, hanya mengubah skala dan offset nilainya.

### Transisi ke Slide Berikutnya

Setelah nilai osilasi sudah berada pada rentang yang lebih aman, langkah berikutnya adalah menggabungkannya dengan parameter lain. Di slide berikutnya kita akan melihat node `Multiply`, yang sering dipakai untuk mengatur kekuatan seperti `Texture × Color`, `Emission × Strength`, atau `Noise × Mask`.

---

## Slide 022 - Multiply

### Narasi

Node `Multiply` pada Unity Shader Graph melakukan operasi perkalian antara dua nilai, vektor, atau warna. Dalam konteks shader, operasi ini biasanya dievaluasi per pixel oleh GPU, sehingga hasilnya langsung memengaruhi warna atau parameter yang akan dikirim ke tahap rendering berikutnya.

Intuisi visualnya cukup sederhana: jika salah satu input bernilai `0`, hasil akhirnya menjadi `0`. Jika salah satu input bernilai `1`, nilai lainnya tetap dipertahankan. Jika nilainya berada di antara `0` dan `1`, maka nilai lainnya akan diredupkan atau diskalakan. Karena itu, `Multiply` sering digunakan untuk mengontrol intensitas, bukan sekadar menambah warna.

Contoh penggunaan yang ditampilkan pada slide adalah:

```text
Texture × Color
Emission × Strength
Noise × Mask
Time × Speed
```

Pola-pola ini menunjukkan bahwa `Multiply` sangat berguna untuk memodifikasi nilai berdasarkan parameter lain:

- `Texture × Color` digunakan untuk mewarnai atau memberi tint pada tekstur.
- `Emission × Strength` digunakan untuk mengatur seberapa terang efek emissive.
- `Noise × Mask` digunakan agar noise hanya muncul pada area yang diizinkan oleh mask.
- `Time × Speed` digunakan untuk mengatur kecepatan animasi berbasis waktu.

Dalam pipeline rendering, node ini biasanya berada di tahap fragment atau pixel shader, setelah tekstur diambil dan sebelum warna akhir dikirim ke framebuffer. Jika kita menghubungkannya dengan slide sebelumnya, hasil `Remap Nilai` yang sudah dinormalisasi ke rentang `0` sampai `1` dapat langsung dikalikan dengan nilai `Strength` atau `Mask` untuk mendapatkan kontrol yang lebih stabil.

Sebelum lanjut, mahasiswa perlu memahami bahwa `Multiply` bekerja sebagai operasi penskalaan. Artinya, ia tidak menambah nilai secara langsung, melainkan memperbesar atau mengecilkan nilai berdasarkan input lain. Hal ini penting karena nilai yang terlalu besar dapat menyebabkan warna terlalu terang atau clipping, terutama jika output shader berada di luar rentang yang diharapkan.

### Inti yang Harus Ditekankan

- `Multiply` adalah operasi perkalian per komponen, bukan penjumlahan.
- Nilai `0` mematikan hasil, nilai `1` mempertahankan nilai lain, dan nilai `0` sampai `1` berfungsi sebagai skala atau redup.
- Node ini penting untuk mengontrol warna, intensitas emissive, visibilitas noise, dan kecepatan animasi.
- Rentang nilai input harus diperhatikan, terutama untuk `Mask` dan `Strength`, agar hasil rendering tidak berlebihan atau tidak sesuai ekspektasi.

### Transisi ke Slide Berikutnya

Setelah kita memahami bagaimana `Multiply` dapat menskalakan nilai, langkah berikutnya adalah memilih atau mencampur dua nilai berdasarkan parameter tertentu. Untuk kebutuhan itu, kita akan lanjut ke node `Lerp`, yang memungkinkan interpolasi antara nilai `A` dan `B` berdasarkan parameter `T`.

---

## Slide 023 - Lerp

### Narasi

Setelah kita melihat node `Multiply` yang menggabungkan dua nilai secara langsung, sekarang kita masuk ke node `Lerp`. `Lerp` adalah operasi **interpolasi linear** antara dua nilai, biasanya disebut `A` dan `B`, dengan parameter `T` yang menentukan seberapa jauh hasil bergerak dari `A` menuju `B`.

```text
A
B
T

T = 0
→ A

T = 1
→ B
```

Artinya, jika `T` bernilai `0`, hasil yang keluar adalah nilai awal, yaitu `A`. Jika `T` bernilai `1`, hasil yang keluar adalah nilai akhir, yaitu `B`. Nilai di antaranya, misalnya `0.5`, akan menghasilkan titik tengah antara `A` dan `B`.

Dalam konteks shader, `Lerp` sangat berguna karena banyak properti visual tidak berubah secara tiba-tiba. Warna material, intensitas cahaya, posisi vertex, opacity, atau campuran dua texture biasanya bergerak secara halus. Dengan `Lerp`, kita bisa membuat transisi yang natural tanpa perlu menulis rumus interpolasi manual.

Secara matematis, `Lerp` dapat dipahami sebagai:

```text
Result = A + (B - A) * T
```

Rumus ini penting karena menunjukkan bahwa `T` berfungsi sebagai bobot. Jika `T` kecil, hasil lebih dekat ke `A`. Jika `T` besar, hasil lebih dekat ke `B`. Dalam shader graph, `T` sering berasal dari `Time`, `Mouse`, `Distance`, `Mask`, atau parameter material yang bisa dikontrol.

Beberapa contoh penggunaan `Lerp` yang umum:

- `Color A` dan `Color B` untuk transisi warna material.
- `Texture A` dan `Texture B` untuk pencampuran dua texture.
- `Position A` dan `Position B` untuk animasi sederhana.
- `0` dan `1` untuk membuat fade in, fade out, atau dissolve.
- `Strength` sebagai `T` untuk mengontrol seberapa kuat efek diterapkan.

Yang perlu dipahami sebelum lanjut adalah bahwa `Lerp` menghasilkan perubahan **halus dan kontinu**. Ia cocok ketika kita ingin sesuatu berubah secara bertahap. Jika nanti kita membutuhkan perubahan yang tegas, misalnya langsung menjadi `0` atau `1` setelah melewati batas tertentu, kita akan menggunakan node lain yang bekerja berdasarkan threshold.

### Inti yang Harus Ditekankan

- `Lerp` melakukan **interpolasi linear** antara dua nilai `A` dan `B`.
- Parameter `T` menentukan posisi hasil: `T = 0` menghasilkan `A`, `T = 1` menghasilkan `B`.
- `Lerp` penting untuk transisi halus pada warna, texture, posisi, opacity, atau efek shader.
- `T` biasanya berasal dari input seperti `Time`, `Mask`, `Distance`, atau parameter material.

### Transisi ke Slide Berikutnya

Jika `Lerp` memberi perubahan yang halus, node berikutnya, `Step`, memberi perubahan yang tegas. `Step` akan menghasilkan nilai `0` atau `1` berdasarkan threshold, sehingga cocok untuk efek seperti binary mask atau hard dissolve edge.

---

## Slide 024 - Step

### Narasi

Setelah `Lerp` yang melakukan percampuran gradual, `Step` adalah operator yang menghasilkan keputusan biner. Ia membandingkan satu nilai dengan `Threshold`, lalu langsung memilih salah satu dari dua hasil: `0` atau `1`.

```text
Value < Threshold  -> 0
Value >= Threshold -> 1
```

Dalam Shader Graph, node `Step` biasanya menerima `Value` dan `Threshold`. Jika `Value` masih di bawah ambang batas, outputnya `0`. Begitu `Value` mencapai atau melewati ambang batas, output berubah menjadi `1`. Tidak ada nilai antara keduanya, sehingga transisinya terasa keras dan tegas.

Secara visual, `Step` sering dipakai untuk membuat **mask biner**. Misalnya, area dengan nilai di bawah threshold bisa dianggap tertutup, sedangkan area di atas threshold dianggap terbuka. Dalam efek dissolve, nilai noise atau progress bisa dibandingkan dengan threshold; pixel yang lolos threshold langsung tampil, sementara pixel yang belum lolos langsung hilang.

Karena hasilnya diskrit, `Step` cocok untuk:

- **binary mask**, yaitu pemisahan dua keadaan: aktif/nonaktif, terlihat/tersembunyi;
- **hard dissolve edge**, yaitu batas transisi yang tajam tanpa gradasi.

Yang perlu dipahami mahasiswa adalah `Step` bukan interpolasi. Ia tidak “menghaluskan” perubahan, tetapi memotong perubahan menjadi dua kondisi. Dalam pipeline rendering, nilai `0` atau `1` ini bisa dipakai sebagai alpha, mask, atau kondisi material sebelum fragment diproses lebih lanjut.

### Inti yang Harus Ditekankan

- `Step` menghasilkan output biner: `0` atau `1`.
- Keputusan ditentukan oleh perbandingan `Value` dan `Threshold`.
- Transisi bersifat keras, tidak gradual.
- Cocok untuk mask biner dan batas dissolve yang tajam.

### Transisi ke Slide Berikutnya

Jika `Step` memberi batas yang terlalu tegas, `Smoothstep` akan menunjukkan cara membuat transisi yang lebih halus antara dua nilai atau dua kondisi.

---

## Slide 025 - Smoothstep

### Narasi

Setelah **Step** yang memotong nilai menjadi **0** atau **1**, kita masuk ke **Smoothstep**. Intinya, **Smoothstep** memberi transisi yang lebih halus antara dua nilai, sehingga perubahan tidak terasa mendadak.

Dalam shader, hal ini penting karena banyak efek visual tidak selalu butuh batas yang tajam. Misalnya, ketika kita membuat **soft mask**, **smooth border**, atau **gradient transition**, nilai yang berubah secara bertahap akan menghasilkan tampilan yang lebih natural di layar.

Secara intuitif, kita bisa membayangkan **Step** sebagai saklar: di bawah threshold mati, di atas threshold menyala. **Smoothstep** lebih seperti peredam: nilai bergerak perlahan dari satu sisi ke sisi lain, sehingga ada area transisi di antara keduanya.

Karena itu, **Smoothstep** sering dipakai untuk membuat efek yang tidak terlihat "patah". Misalnya, batas objek yang melembut, fade-in/fade-out, atau transisi warna yang lebih mulus. Dalam konteks rendering, ini membantu mengurangi kesan kasar pada edge atau mask.

Sebelum lanjut, mahasiswa perlu memahami bahwa **Smoothstep** bukan sekadar mengganti angka, tetapi mengubah cara nilai berubah. Jika **Step** menghasilkan keputusan biner, **Smoothstep** menghasilkan gradasi. Pemahaman ini penting karena banyak efek shader dibangun dari kontrol nilai yang halus.

### Inti yang Harus Ditekankan

- **Smoothstep** menghasilkan transisi yang lebih halus dibanding **Step**.
- Cocok untuk **soft mask**, **smooth border**, dan **gradient transition**.
- Intinya: dari perubahan biner menjadi perubahan bertahap.

### Transisi ke Slide Berikutnya

Setelah kita punya nilai yang berubah secara halus, langkah berikutnya adalah memastikan nilai tersebut tetap berada pada rentang yang aman. Di slide berikutnya, kita akan membahas **Clamp / Saturate** untuk membatasi nilai, misalnya ke rentang `0` sampai `1`.

---

## Slide 026 - Clamp / Saturate

### Narasi

Dalam shader, banyak operasi menghasilkan nilai yang tidak selalu berada pada rentang yang diharapkan. Misalnya, hasil penjumlahan warna, hasil kalkulasi UV, atau output dari node sebelumnya bisa kurang dari `0` atau lebih dari `1`. Di sinilah **Clamp** dan **Saturate** berperan.

**Clamp** adalah operasi pembatasan nilai. Secara umum, `clamp(value, min, max)` memastikan hasil selalu berada di antara `min` dan `max`. Jika `value` lebih kecil dari `min`, hasilnya menjadi `min`. Jika `value` lebih besar dari `max`, hasilnya menjadi `max`. Jika `value` sudah berada di dalam rentang, nilainya tetap.

Contoh pada slide:

```text
0 ≤ value ≤ 1
```

Artinya nilai dibatasi agar tidak kurang dari `0` dan tidak lebih dari `1`. Rentang ini sangat umum dalam rendering karena banyak besaran visual bekerja pada skala `0` sampai `1`.

**Saturate** dapat dipahami sebagai bentuk khusus dari clamp yang membatasi nilai ke rentang `0` sampai `1`. Dalam banyak shader, `saturate(value)` setara dengan `clamp(value, 0, 1)`. Operasi ini sangat berguna ketika kita ingin memastikan output tetap valid untuk warna, opacity, atau mask.

Hal ini penting karena nilai yang tidak dibatasi bisa menyebabkan masalah visual. Warna yang melebihi `1` bisa membuat highlight tidak terkendali, alpha negatif bisa membuat blending tidak sesuai, dan mask yang keluar dari rentang bisa menghasilkan area yang tidak diharapkan. Dengan **Clamp** atau **Saturate**, output shader menjadi lebih stabil dan mudah diprediksi.

Penggunaan yang umum antara lain:

- **mask**: memastikan area aktif atau nonaktif tetap dalam rentang valid.
- **color**: menjaga komponen warna tidak keluar dari rentang `0` sampai `1`.
- **alpha**: menjaga nilai transparansi tetap valid.
- **normalized control**: membatasi parameter atau nilai hasil kalkulasi agar tetap terkontrol.

### Inti yang Harus Ditekankan

- **Clamp** membatasi nilai ke rentang `min` dan `max`.
- **Saturate** adalah pembatasan khusus ke rentang `0` sampai `1`.
- Operasi ini penting untuk menjaga **mask**, **color**, **alpha**, dan nilai kontrol tetap valid.
- Dalam shader graph, clamp/saturate biasanya dipakai setelah operasi yang bisa menghasilkan nilai di luar rentang yang diharapkan.

### Transisi ke Slide Berikutnya

Setelah nilai shader sudah dibatasi dan terkendali, langkah berikutnya adalah bagaimana shader membaca tekstur. Pada slide berikutnya, kita akan melihat bagaimana `Texture2D` dibaca melalui **Sample Texture 2D** menggunakan input `Texture` dan `UV`.

---

## Slide 027 - Texture Sampling

### Narasi

Pada tahap ini, kita masuk ke salah satu operasi paling penting dalam material visual: **Texture Sampling**. Dalam Unity Shader Graph, tekstur 2D tidak langsung “menempel” ke objek secara otomatis. Tekstur dibaca oleh shader pada setiap fragmen yang sedang diproses, dan node yang kita gunakan untuk itu adalah **Sample Texture 2D**.

Intinya, node ini menjawab pertanyaan: “warna atau nilai apa yang harus diambil dari tekstur pada posisi tertentu?” Posisi tertentu itu ditentukan oleh **UV**. **UV** adalah koordinat 2D yang biasanya berada pada rentang `0` sampai `1`, di mana `0,0` menunjuk sudut tekstur dan `1,1` menunjuk sudut berlawanan. Jadi, ketika sebuah fragmen memiliki nilai UV tertentu, shader akan mengambil sampel warna dari titik yang sesuai pada tekstur.

Input utama dari **Sample Texture 2D** adalah:

- **Texture**, yaitu tekstur 2D yang akan dibaca.
- **UV**, yaitu koordinat 2D yang menentukan lokasi pengambilan sampel pada tekstur.

Output yang dihasilkan dapat berupa **RGBA**, yaitu empat channel warna sekaligus: `R`, `G`, `B`, dan `A`. Dalam banyak kasus, output ini langsung digunakan sebagai warna dasar objek. Namun, output juga dapat digunakan per channel, misalnya channel `R` sebagai mask, channel `A` sebagai alpha, atau channel tertentu sebagai nilai kontrol.

Hal yang perlu kita tekankan adalah bahwa **UV** bukan koordinat 3D pada objek. **UV** adalah koordinat pada ruang tekstur, sehingga ia menentukan “bagian mana dari gambar” yang akan ditampilkan, bukan “di mana fragmen berada dalam ruang dunia”. Pemahaman ini penting karena kesalahan memahami UV sering membuat mahasiswa mengira tekstur bergerak karena transformasi objek, padahal yang terjadi adalah perubahan nilai UV yang masuk ke node sampling.

Dalam konteks rendering pipeline, **Texture Sampling** terjadi setelah fragmen diproses pada tahap fragment shader. Pada tahap ini, GPU sudah mengetahui fragmen mana yang terlihat, dan shader menentukan warna fragmen tersebut dengan cara membaca tekstur. Hasil sampling kemudian dapat diteruskan ke node lain, misalnya untuk pencahayaan, blending, atau output warna akhir.

Sebelum lanjut, mahasiswa perlu memahami tiga hal: **Texture** adalah sumber data gambar, **UV** adalah alamat koordinat pada gambar tersebut, dan **Sample Texture 2D** adalah proses pengambilan nilai dari alamat itu. Dengan konsep ini, kita bisa menjelaskan mengapa material dapat menampilkan pola, detail, mask, atau variasi warna tanpa harus menghitung semuanya secara manual.

### Inti yang Harus Ditekankan

- **Sample Texture 2D** adalah node untuk membaca tekstur 2D pada fragmen.
- Input utamanya adalah **Texture** dan **UV**, sedangkan output dapat berupa **RGBA** atau channel individual.
- **UV** adalah koordinat 2D pada ruang tekstur, bukan koordinat 3D pada objek atau dunia.
- Hasil sampling dapat digunakan sebagai warna, mask, alpha, atau nilai kontrol dalam shader.

### Transisi ke Slide Berikutnya

Setelah kita memahami bagaimana tekstur dibaca melalui **UV**, langkah berikutnya adalah memperhatikan ruang koordinat tempat nilai-nilai tersebut berasal. Karena shader sering bekerja dengan **Object Space**, **World Space**, **View Space**, dan **Tangent Space**, kita perlu memahami perbedaan ruang koordinat agar arah, gerakan, dan hasil visual tidak salah.

---

## Slide 028 - Object Space dan World Space

### Narasi

Saat shader mulai menghitung warna, posisi, normal, atau arah cahaya, kita tidak cukup hanya tahu nilai koordinatnya. Kita juga harus tahu **ruang koordinat** apa yang sedang dipakai. Titik yang sama pada objek bisa memiliki koordinat berbeda tergantung apakah kita mengukurnya dari objek itu sendiri, dari dunia, dari kamera, atau dari permukaan objek.

Dalam shader, koordinat sering muncul dalam beberapa ruang utama:

- **Object Space** adalah ruang lokal objek. Koordinatnya relatif terhadap objek itu sendiri, misalnya pusat objek atau pivot-nya. Jika objek diputar, digeser, atau diskala, koordinat dalam object space biasanya tetap relatif terhadap bentuk objek.
- **World Space** adalah ruang global adegan. Koordinatnya tidak bergantung pada transformasi objek tertentu, sehingga cocok untuk membandingkan posisi beberapa objek dalam satu dunia.
- **View Space** adalah ruang relatif terhadap kamera. Koordinat di sini berguna ketika efek visual bergantung pada posisi kamera, misalnya efek kedalaman, paralaks, atau tampilan yang berubah saat kamera bergerak.
- **Tangent Space** adalah ruang yang menempel pada permukaan objek. Ruang ini biasanya mengikuti arah normal, tangent, dan bitangent pada permukaan. Ruang ini penting untuk detail permukaan seperti normal map.

Perbedaan ini penting karena shader sering menerima data seperti posisi, normal, atau arah cahaya. Jika kita menggunakan normal dalam **Object Space** tetapi arah cahaya dalam **World Space**, hasil pencahayaan bisa salah. Begitu juga jika posisi objek dalam **World Space** diproses seolah-olah masih dalam **Object Space**, gerakan atau arah visual bisa menjadi tidak konsisten.

Kesalahan ruang koordinat sering tidak langsung terlihat sebagai error program. Biasanya hasilnya tetap ter-render, tetapi arah cahaya tampak salah, tekstur detail bergerak tidak wajar, atau efek permukaan tampak “melompat” saat objek atau kamera bergerak. Karena itu, memahami ruang koordinat adalah dasar sebelum kita membangun shader yang lebih kompleks.

Sebelum lanjut, kita perlu membiasakan diri membaca setiap variabel shader dengan pertanyaan: koordinat ini berada di ruang apa? Jika dua variabel berasal dari ruang berbeda, kita perlu memastikan apakah keduanya sudah berada dalam ruang yang sama atau perlu ditransformasi terlebih dahulu.

### Inti yang Harus Ditekankan

- **Object Space** relatif terhadap objek, sedangkan **World Space** relatif terhadap adegan global.
- **View Space** relatif terhadap kamera, dan **Tangent Space** relatif terhadap permukaan objek.
- Kesalahan mencampur ruang koordinat dapat menyebabkan arah cahaya, normal, atau gerakan visual menjadi salah.
- Sebelum menghitung efek shader, kita perlu memastikan variabel posisi, normal, dan arah cahaya berada dalam ruang koordinat yang konsisten.

### Transisi ke Slide Berikutnya

Setelah kita memahami ruang koordinat, kita bisa mulai membangun efek shader yang lebih sederhana. Selanjutnya, kita akan membahas **Emission Shader**, yaitu shader yang membuat permukaan tampak memancarkan cahaya secara visual tanpa harus bergantung pada arah pencahayaan dari luar.

---

## Slide 029 - Emission Shader

### Narasi

Dalam shader, **emission** adalah cara membuat permukaan terlihat seperti memancarkan cahaya secara visual. Intinya, material tidak hanya menampilkan warna biasa, tetapi juga memberi kesan bahwa permukaan itu sendiri menyala.

Konsep dasarnya sederhana:

```text
Color
×
Emission Strength
→
Emission
```

Di sini, `Color` menentukan warna dasar yang dipancarkan, misalnya merah, biru, atau hijau. `Emission Strength` mengatur seberapa kuat warna tersebut terlihat menyala. Hasilnya adalah `Emission`, yaitu kontribusi cahaya visual yang ditambahkan pada tampilan permukaan.

Secara intuitif, emission membuat objek tampak memiliki cahaya internal. Karena itu, efek ini sangat cocok untuk objek yang secara desain memang terlihat menyala, seperti:

- lampu,
- monitor,
- neon,
- hologram,
- `sci-fi panel`.

Dalam konteks rendering, emission menjadi bagian dari output material atau shader, di mana warna akhir permukaan dapat dikombinasikan dengan efek cahaya yang dipancarkan. Mahasiswa perlu memahami bahwa emission bukan sekadar membuat warna lebih terang, tetapi menambahkan kesan bahwa permukaan itu sendiri menjadi sumber cahaya visual.

Sebelum lanjut, hal penting yang harus dipahami adalah peran `Emission Strength`. Nilai kecil membuat efek menyala halus, sedangkan nilai besar membuat permukaan tampak lebih terang dan lebih menonjol. Jika `Color` gelap atau hitam, emission tidak akan menghasilkan cahaya visual yang berarti.

### Inti yang Harus Ditekankan

- **Emission** membuat permukaan terlihat memancarkan cahaya secara visual.
- Konsep utamanya adalah `Color × Emission Strength → Emission`.
- `Emission Strength` mengontrol seberapa kuat efek menyala pada material.
- Emission cocok untuk objek seperti lampu, monitor, neon, hologram, dan `sci-fi panel`.
- Emission memberi kesan sumber cahaya pada permukaan, bukan hanya warna biasa.

### Transisi ke Slide Berikutnya

Setelah kita membuat permukaan tampak menyala dengan emission, langkah berikutnya adalah membuat permukaan bisa menghilang sebagian. Pada slide berikutnya, kita akan membahas **Dissolve Shader**, yaitu efek di mana bagian surface hilang berdasarkan mask.

---

## Slide 030 - Dissolve Shader

### Narasi

Berbeda dengan **Emission Shader** yang membuat permukaan terlihat memancarkan cahaya, **Dissolve Shader** membuat sebagian permukaan menghilang. Intinya, kita tidak hanya mengubah warna, tetapi menentukan area mana yang masih ditampilkan dan area mana yang dibuang.

Konsep utamanya dapat dibaca sebagai alur sederhana:

```text
Noise
  ↓
Compare with Threshold
  ↓
Alpha Clip
```

Alur ini dibaca dari atas ke bawah:

1. **Noise** menghasilkan nilai atau pola yang tidak seragam pada permukaan. Nilai ini berperan sebagai **mask**, yaitu informasi yang menentukan bagian mana yang berpotensi hilang.
2. **Compare with Threshold** membandingkan nilai mask dengan `threshold`. Threshold menjadi batas keputusan: hasil perbandingan menentukan apakah fragment tetap ditampilkan atau dihilangkan.
3. **Alpha Clip** membuang fragment yang dianggap hilang, sehingga fragment tersebut tidak ikut menghasilkan warna akhir.

Dalam pipeline rendering, tahap ini berada pada sisi fragment: setelah fragment diketahui berada pada permukaan, keputusan clip menentukan apakah fragment masih ikut dalam hasil akhir. Dengan mengubah `threshold`, area yang hilang dapat berubah secara bertahap, sehingga permukaan tampak menghilang perlahan.

Yang perlu kita pahami sebelum lanjut adalah bahwa dissolve bukan sekadar efek transparan biasa. Ia bergantung pada **mask**, **threshold**, dan keputusan **clip** pada fragment.

### Inti yang Harus Ditekankan

- **Dissolve** membuat bagian surface menghilang berdasarkan mask.
- Alur utamanya adalah `Noise` → `Compare with Threshold` → `Alpha Clip`.
- **Threshold** menentukan seberapa banyak area yang hilang, sedangkan **Alpha Clip** memutuskan fragment ditampilkan atau dibuang.

### Transisi ke Slide Berikutnya

Setelah memahami alur dissolve, kita akan melihat bagaimana **Noise** menghasilkan mask yang tidak beraturan, sehingga pola menghilang terlihat lebih alami.

---

## Slide 031 - Noise sebagai Mask

### Narasi

Pada efek **dissolve**, langkah pertama yang perlu kita pahami adalah bagaimana **mask** terbentuk. Mask pada dasarnya adalah peta nilai yang menentukan bagian mana dari permukaan yang masih boleh terlihat dan bagian mana yang harus dihilangkan. Nilai ini biasanya berada dalam rentang `0 ... 1`, di mana nilai rendah dan tinggi dapat diartikan sebagai wilayah yang berbeda.

**Noise** adalah sumber nilai yang menghasilkan pola tidak beraturan. Pola ini penting karena membuat batas hilangnya objek tidak rapi seperti garis lurus atau bentuk geometris sederhana. Dengan noise, efek dissolve terasa lebih organik, seolah-olah permukaan terbakar, menguap, atau hancur secara alami.

Dalam konteks rendering, noise biasanya dievaluasi per pixel pada tahap fragment shader. Setiap pixel mendapatkan satu nilai noise, lalu nilai tersebut dapat dibandingkan dengan threshold. Jika nilai noise berada di sisi tertentu, pixel tetap ditampilkan; jika tidak, pixel dapat di-clip atau dibuat transparan.

Noise cocok digunakan untuk beberapa kebutuhan visual:

- **dissolve**, yaitu membuat objek menghilang secara bertahap;
- **smoke-like mask**, yaitu pola yang menyerupai asap atau kabut;
- **procedural variation**, yaitu variasi acak yang dihasilkan tanpa perlu texture eksternal.

Hal yang perlu dipahami mahasiswa sebelum lanjut adalah bahwa noise sendiri belum menentukan objek hilang atau terlihat. Noise hanya menyediakan pola nilai. Keputusan akhir biasanya datang dari perbandingan nilai noise dengan threshold, yang akan kita bahas pada slide berikutnya.

### Inti yang Harus Ditekankan

- **Noise** menghasilkan pola tidak beraturan dengan nilai `0 ... 1`.
- Noise berfungsi sebagai **mask** yang menentukan variasi area yang akan diproses lebih lanjut.
- Noise penting untuk efek **dissolve**, **smoke-like mask**, dan **procedural variation**.
- Noise belum langsung menghapus objek; ia hanya menyediakan nilai yang kemudian dibandingkan dengan threshold.

### Transisi ke Slide Berikutnya

Setelah kita memahami bahwa noise menyediakan pola nilai `0 ... 1`, langkah berikutnya adalah menentukan nilai mana yang dianggap “terlihat” dan nilai mana yang dianggap “hilang”. Untuk itu, kita akan membahas **Dissolve Threshold** dan peran `DissolveAmount` dalam mengatur proses hilangnya objek.

---

## Slide 032 - Dissolve Threshold

### Narasi

Pada tahap ini, kita masuk ke bagian yang membuat efek dissolve benar-benar bisa dikendalikan. Sebelumnya kita sudah melihat bahwa **noise** menghasilkan pola acak bernilai antara `0` dan `1`. Pola ini bisa dipakai sebagai **mask** karena setiap fragmen memiliki nilai yang berbeda-beda.

```text
DissolveAmount
0 → terlihat penuh
1 → hilang
```

`DissolveAmount` adalah parameter utama yang mengatur seberapa jauh objek akan hilang. Nilai `0` berarti objek masih terlihat penuh, sedangkan nilai `1` berarti objek sudah hilang. Dalam praktik, nilai di antara keduanya menentukan seberapa besar bagian objek yang mulai terdampak efek dissolve.

Secara konsep, prosesnya bisa dibaca sebagai perbandingan antara **noise** dan **threshold**:

```text
Noise
vs
Threshold
```

Setiap fragmen memiliki nilai noise. Nilai tersebut kemudian dibandingkan dengan threshold yang dipengaruhi oleh `DissolveAmount`. Fragmen yang lolos perbandingan akan tetap dirender, sedangkan fragmen yang tidak lolos akan dibuang atau tidak ditampilkan.

Penting untuk memahami bahwa keputusan ini terjadi pada tingkat **fragmen**, bukan pada tingkat objek secara keseluruhan. Artinya, objek tidak hilang secara tiba-tiba sebagai satu kesatuan, melainkan hilang secara bertahap mengikuti pola noise. Inilah yang membuat efek dissolve terlihat lebih natural dan prosedural.

Dalam konteks **rendering pipeline**, konsep ini berada setelah tahap rasterisasi. GPU sudah memecah geometri menjadi fragmen, lalu shader fragment menghitung nilai noise dan membandingkannya dengan threshold. Hasilnya menentukan fragmen mana yang masih berkontribusi pada warna akhir layar.

Sebelum lanjut, hal yang perlu dipahami mahasiswa adalah bahwa `DissolveAmount` bukan sekadar nilai animasi biasa. Nilai ini berfungsi sebagai **kontrol threshold** yang mengatur batas antara fragmen yang terlihat dan fragmen yang dibuang.

### Inti yang Harus Ditekankan

- `DissolveAmount` adalah parameter `0` sampai `1` yang mengatur tingkat hilangnya objek.
- **Noise** menyediakan variasi per fragmen, sedangkan **threshold** menentukan batas keputusan.
- Keputusan terlihat atau tidak terjadi per fragmen, sehingga efek dissolve bersifat bertahap dan prosedural.
- Konsep ini berada pada tahap fragment shader dalam rendering pipeline, setelah rasterisasi.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana keputusan “terlihat atau dibuang” ini diimplementasikan secara lebih eksplisit melalui **alpha clipping**, yaitu mekanisme membuang fragmen berdasarkan threshold.

---

## Slide 033 - Alpha Clipping

### Narasi

Pada tahap ini, kita masuk ke mekanisme yang membuat efek seperti dissolve atau daun-daun terlihat “terpotong” secara tegas. **Alpha Clipping** adalah proses di mana sebuah **fragment** dibuang berdasarkan nilai **alpha** yang dibandingkan dengan **threshold**.

Konsepnya sederhana:

```text
Alpha < Clip Threshold
→ discard

Alpha >= Clip Threshold
→ render
```

Artinya, jika nilai alpha pada suatu fragment lebih kecil dari batas yang ditentukan, fragment tersebut tidak akan ditulis ke layar. Sebaliknya, jika alpha sama dengan atau lebih besar dari threshold, fragment tetap dirender.

Dalam konteks rendering pipeline, keputusan ini terjadi pada tahap fragment. Setelah fragment diproses, sistem memeriksa nilai alpha-nya. Jika fragment di-discard, ia tidak ikut menulis warna, depth, atau hasil akhir ke framebuffer. Inilah yang membedakan alpha clipping dari transparansi biasa: hasilnya bukan campuran warna, tetapi potongan yang tegas.

Pentingnya konsep ini dalam grafika komputer adalah ia memberi cara untuk membuat objek tampak hilang sebagian, terpotong, atau memiliki lubang tanpa harus mengubah geometri. Dengan hanya mengatur threshold, kita bisa mengontrol seberapa banyak bagian objek yang terlihat.

Alpha clipping cocok digunakan untuk beberapa kebutuhan visual, antara lain:

- **dissolve**, yaitu efek objek yang perlahan hilang atau muncul;
- **foliage**, yaitu daun atau tanaman yang memiliki lubang-lubang kecil agar cahaya tampak menembus;
- **cutout**, yaitu bentuk objek yang dipotong seperti stiker atau siluet.

Sebelum lanjut, yang perlu dipahami mahasiswa adalah bahwa alpha clipping bekerja pada level fragment, bukan pada level objek. Jadi yang dibuang adalah bagian-bagian kecil dari permukaan yang sudah diproses, bukan seluruh objek.

### Inti yang Harus Ditekankan

- **Alpha Clipping** membuang fragment jika `Alpha < Clip Threshold`.
- Fragment dengan `Alpha >= Clip Threshold` tetap dirender.
- Hasilnya adalah potongan visual yang tegas, berbeda dari blending transparan.
- Konsep ini penting untuk efek **dissolve**, **foliage**, dan **cutout**.

### Transisi ke Slide Berikutnya

Setelah kita memahami bagaimana fragment bisa dibuang berdasarkan threshold, langkah berikutnya adalah membuat batas potongan itu lebih menarik. Pada slide berikutnya, kita akan melihat **Dissolve Edge**, di mana area sekitar threshold diberi **edge mask** dan **emission color** sehingga tepi dissolve tampak bercahaya.

---

## Slide 034 - Dissolve Edge

### Narasi

Setelah kita memahami **alpha clipping** yang membuang fragment berdasarkan threshold, pada slide ini kita menambahkan satu elemen penting agar efek dissolve tidak terasa datar: **edge**. Dissolve yang menarik biasanya tidak hanya membuat objek hilang, tetapi juga menampilkan batas terang di area yang sedang berubah.

Intuisi visualnya sederhana. Bayangkan objek perlahan menghilang. Di bagian yang masih ada dan bagian yang sudah dibuang, terdapat zona sempit yang bisa kita beri warna terang. Zona inilah yang disebut **dissolve edge**.

Konsep pada slide dapat dibaca sebagai alur berikut:

```text
Noise
Threshold
Edge Width
   ↓
Edge Mask
   ↓
Emission Color
```

Alur ini dibaca dari atas ke bawah. **Noise** memberikan pola acak pada setiap fragment, sehingga batas dissolve tidak lurus atau seragam. **Threshold** menentukan seberapa banyak bagian objek yang masih ditampilkan atau dibuang. **Edge Width** menentukan lebar zona transisi di sekitar threshold. Ketiga nilai ini kemudian menghasilkan **Edge Mask**, yaitu area fragment yang dianggap berada di tepi dissolve.

**Edge Mask** penting karena ia membedakan fragment yang hanya perlu dirender normal, fragment yang perlu dibuang, dan fragment yang perlu diberi efek tepi. Dalam pipeline rendering, perhitungan ini terjadi pada tahap fragment shader: fragment yang berada di luar threshold dapat di-`discard`, sedangkan fragment yang masuk ke edge mask dapat diberi warna tambahan.

Bagian terakhir adalah **Emission Color**. Warna ini membuat edge tampak bercahaya, seolah-olah objek sedang terbakar, memancarkan energi, atau hancur secara dramatis. Emission berbeda dari warna biasa karena ia menambah kecerahan pada fragment, sehingga tepi dissolve lebih mudah terlihat dan memberi kesan visual yang kuat.

Yang perlu kita pahami sebelum lanjut adalah bahwa dissolve edge bukan sekadar menambah warna. Ia adalah kombinasi antara **pola noise**, **threshold**, **lebar edge**, **masking**, dan **emission**. Jika salah satu komponen tidak dipahami, hasil visual akan sulit dikontrol: edge bisa terlalu tipis, terlalu tebal, tidak rata, atau tidak terlihat.

### Inti yang Harus Ditekankan

- **Dissolve edge** membuat batas dissolve terlihat lebih menarik dengan zona terang di sekitar area yang sedang hilang.
- Alur utamanya adalah `Noise` + `Threshold` + `Edge Width` → `Edge Mask` → `Emission Color`.
- **Edge Mask** menentukan fragment mana yang diberi efek tepi, biasanya dihitung di fragment shader.
- **Emission Color** membuat edge bercahaya dan memperkuat kesan visual dissolve.
- Parameter seperti `threshold` dan `edge width` harus dipahami karena menentukan seberapa banyak objek yang hilang dan seberapa lebar tepinya.

### Transisi ke Slide Berikutnya

Jika pola noise atau threshold ini kemudian dibuat berubah seiring waktu, dissolve edge dapat menjadi lebih hidup. Pada slide berikutnya, kita akan melihat bagaimana konsep serupa diterapkan pada **animated surface shader**, yaitu shader yang membuat pattern atau texture bergerak di permukaan objek.

---

## Slide 035 - Animated Surface Shader

### Narasi

Dalam grafika komputer, tidak semua animasi harus dilakukan dengan menggerakkan bentuk objek. Kadang, cukup permukaannya saja yang terlihat bergerak. **Animated surface shader** adalah teknik di mana pola atau `texture` pada permukaan berubah dari waktu ke waktu, sehingga objek tampak lebih hidup.

Intuisi visualnya sederhana: geometri objek tetap diam, tetapi tampilan permukaannya bergeser. Ini penting karena banyak efek visual dalam game atau aplikasi real-time membutuhkan kesan energi, material, atau interaksi, tanpa harus menambah kompleksitas bentuk objek.

Dalam konteks rendering pipeline, efek ini umumnya muncul di tahap **surface shader** atau **fragment shader**. Setelah posisi `pixel` pada permukaan dihitung, shader menentukan warna `pixel` tersebut berdasarkan informasi seperti posisi, normal, dan koordinat tekstur. Jika informasi tersebut dipengaruhi waktu, pola akan tampak bergerak.

Beberapa contoh yang sering digunakan adalah:

- `flowing energy`, yaitu pola energi yang mengalir di permukaan,
- `conveyor texture`, yaitu tekstur yang bergeser seperti permukaan bergerak,
- `hologram lines`, yaitu garis-garis hologram yang bergerak halus,
- `water-like motion`, yaitu gerakan yang menyerupai air atau permukaan cair,
- `scanning effect`, yaitu efek pemindaian yang bergerak melintasi permukaan.

Yang perlu kita pahami adalah bahwa **animated surface** bukan animasi bentuk objek. `Mesh` tidak berubah; yang berubah adalah tampilan permukaan. Karena itu, efek ini relatif ringan dan cocok untuk rendering real-time. Dalam Unity Shader Graph, gerakan seperti ini biasanya dibuat dengan menghubungkan informasi waktu ke koordinat tekstur, tetapi detail teknisnya akan kita lihat pada slide berikutnya.

### Inti yang Harus Ditekankan

- **Animated surface shader** menggerakkan tampilan permukaan, bukan geometri objek.
- Efek ini penting untuk real-time karena memberi kesan hidup dengan biaya rendering relatif rendah.
- Pola bergerak biasanya dihasilkan dari perubahan sampling `pattern` atau `texture` terhadap waktu.
- Contoh umum meliputi `flowing energy`, `conveyor texture`, `hologram lines`, `water-like motion`, dan `scanning effect`.

### Transisi ke Slide Berikutnya

Setelah memahami ide dasarnya, kita akan masuk ke cara paling umum untuk membuat permukaan bergerak: **scrolling texture**, yaitu menggeser koordinat `UV` menggunakan waktu.

---

## Slide 036 - Scrolling Texture

### Narasi

Pada slide ini kita melihat pola dasar untuk membuat **tekstur yang bergerak** dalam shader. Inti dari **scrolling texture** bukan menggerakkan objek 3D, melainkan menggeser **koordinat tekstur** yang digunakan untuk mengambil warna dari tekstur. Dalam shader, setiap fragmen biasanya memiliki koordinat `UV` yang menentukan titik mana pada tekstur yang akan di-*sample*.

Konsep utamanya dapat diringkas sebagai berikut:

```text
UV
+
Time × Speed
=
Animated UV
```

Kemudian:

```text
Animated UV
→ Sample Texture
```

Artinya, koordinat `UV` awal tidak langsung digunakan untuk mengambil warna tekstur. Kita menambahkan nilai offset yang berasal dari `Time` dikali `Speed`. Hasilnya adalah `Animated UV`, yaitu koordinat tekstur yang berubah setiap frame.

Nilai `Time` biasanya berasal dari node waktu dalam shader, misalnya `Time` di Unity Shader Graph. Nilai ini terus bertambah seiring waktu. Ketika dikalikan dengan `Speed`, kita dapat mengatur seberapa cepat tekstur bergeser. Jika `Speed` kecil, gerakan terlihat lambat. Jika `Speed` besar, tekstur bergerak lebih cepat.

Secara visual, bayangkan tekstur seperti wallpaper yang menempel pada permukaan. Pada scrolling texture, wallpaper-nya tidak benar-benar dipindahkan. Yang berubah adalah “jendela” atau koordinat yang kita gunakan untuk melihat wallpaper tersebut. Karena koordinat sampling bergeser, mata kita menangkap kesan bahwa motif pada permukaan bergerak.

Dalam konteks rendering pipeline, konsep ini biasanya terjadi pada tahap fragment shading. Setelah objek di-*rasterize* menjadi fragmen, shader menghitung warna untuk setiap fragmen. Pada tahap ini, shader dapat mengambil `UV`, menambahkan offset waktu, lalu melakukan `Sample Texture` untuk mendapatkan warna tekstur. Karena yang berubah hanya koordinat sampling, proses ini relatif murah dan cocok untuk animasi real-time.

Hal penting yang harus dipahami sebelum lanjut adalah bahwa `UV` adalah koordinat tekstur, bukan koordinat dunia atau koordinat layar. `Time` memberikan perubahan terhadap waktu, `Speed` mengontrol laju perubahan, dan `Animated UV` adalah hasil akhir yang digunakan untuk mengambil warna dari tekstur. Dengan memahami alur ini, kita bisa membangun berbagai efek animasi sederhana seperti tekstur berjalan, garis hologram, atau permukaan yang tampak hidup.

### Inti yang Harus Ditekankan

- `UV` adalah **koordinat tekstur** yang menentukan titik mana pada tekstur yang diambil.
- `Time × Speed` menghasilkan **offset animasi** yang berubah setiap frame.
- `Animated UV` adalah hasil pergeseran `UV` yang kemudian digunakan untuk `Sample Texture`.
- Scrolling texture membuat tekstur tampak bergerak **tanpa mengubah isi tekstur**, sehingga efisien untuk rendering real-time.

### Transisi ke Slide Berikutnya

Setelah kita memahami cara membuat scrolling texture dengan menggeser `UV` berdasarkan waktu, langkah berikutnya adalah menggabungkan hasil tekstur yang bergerak ini dengan emission, sehingga permukaan dapat tampak memancarkan cahaya seperti energy panel atau animated display.

---

## Slide 037 - Animated Surface + Emission

### Narasi

Setelah slide sebelumnya kita membuat tekstur bergerak melalui `UV + Time × Speed`, pada slide ini kita lanjutkan dengan membuat permukaan tersebut tidak hanya bergerak, tetapi juga tampak menyala. Inti dari slide ini adalah menggabungkan hasil **Scrolling Texture** dengan **Multiply Color**, **Multiply Strength**, dan **Emission**.

```text
Scrolling Texture
      ↓
Multiply Color
      ↓
Multiply Strength
      ↓
Emission
```

Jika kita membaca alur ini dari atas ke bawah, artinya:

1. `Scrolling Texture` menghasilkan warna tekstur yang bergerak karena koordinat `UV` digeser berdasarkan `Time` dan `Speed`.
2. `Multiply Color` mengatur warna akhir dari tekstur yang bergerak, misalnya memberi nuansa tertentu sesuai kebutuhan visual.
3. `Multiply Strength` mengatur seberapa kuat warna tersebut dipancarkan, sehingga permukaan bisa terlihat redup atau lebih terang.
4. `Emission` mengirim nilai akhir ke output emission material, sehingga permukaan tampak memiliki cahaya sendiri.

Dalam konteks rendering, **emission** penting karena membuat objek terlihat menyala tanpa harus bergantung sepenuhnya pada pencahayaan scene. Dengan emission, permukaan dapat terlihat terang dari dalam, sehingga lebih mudah dibaca sebagai objek yang memiliki energi, sinyal, atau efek khusus.

Karena itu, hasil dari kombinasi ini sangat cocok untuk:

- **energy panel**,
- **magic surface**,
- **animated display**.

Pada objek-objek tersebut, gerakan tekstur memberi kesan data, energi, atau pola yang hidup, sementara emission membuat permukaan terlihat bercahaya. Sebelum lanjut ke animasi bentuk objek, kita perlu memahami bahwa animasi pada slide ini masih terjadi pada level warna dan tekstur, bukan pada posisi geometri.

### Inti yang Harus Ditekankan

- `Scrolling Texture` menghasilkan warna tekstur yang bergerak.
- `Multiply Color` dan `Multiply Strength` mengatur warna serta intensitas sebelum dikirim ke `Emission`.
- `Emission` membuat permukaan tampak menyala sendiri, sehingga cocok untuk panel energi, permukaan sihir, atau tampilan animasi.
- Animasi pada slide ini masih berupa animasi warna/tekstur, belum animasi posisi vertex.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bahwa shader tidak hanya bisa menganimasikan warna atau tekstur, tetapi juga bisa menggeser posisi vertex. Pada slide berikutnya, kita akan masuk ke **Vertex Animation**, di mana bentuk permukaan dapat berubah langsung dari posisi geometri.

---

## Slide 038 - Vertex Animation

### Narasi

Setelah warna dan emission bergerak, langkah berikutnya adalah memindahkan geometri itu sendiri. Dalam shader, kita tidak hanya mengubah warna permukaan, tetapi juga dapat mengubah posisi **vertex** sebelum objek dirasterisasi.

Dalam rendering pipeline, perubahan posisi vertex biasanya terjadi pada tahap `vertex shader`. Alurnya sederhana:

1. `vertex shader` membaca posisi awal vertex.
2. Posisi tersebut dimodifikasi dengan rumus animasi.
3. Vertex yang sudah bergeser diteruskan ke tahap clipping dan rasterization.
4. `fragment shader` kemudian mengisi warna pada permukaan yang sudah berubah bentuk.

Artinya, bentuk objek dapat berubah setiap frame tanpa mengubah data mesh di CPU. Karena proses ini dilakukan di GPU, banyak vertex dapat diproses secara paralel. Ini penting untuk efek real-time seperti permukaan yang berdenyut, gelombang, atau deformasi sederhana.

Slide ini memberi dua contoh rumus.

```text
Position + Normal × Offset
```

Pada rumus pertama, `Position` adalah koordinat vertex, `Normal` adalah arah permukaan, dan `Offset` adalah nilai geser. Jika `Offset` bernilai positif, vertex bergerak keluar mengikuti normal. Jika negatif, vertex bergerak masuk. Pola ini cocok untuk efek permukaan yang mengembang, berdenyut, atau sedikit bergelombang.

```text
Position Y + Sine(Time + Position X)
```

Rumus kedua memodifikasi koordinat `Position Y` vertex. Nilai `Sine(Time + Position X)` menghasilkan gelombang yang berubah terhadap waktu. Karena `Position X` ikut masuk ke dalam fase gelombang, vertex yang berbeda posisi `X` akan bergerak dengan fase berbeda. Hasilnya, permukaan tampak bergerak seperti gelombang yang merambat dari kiri ke kanan atau sebaliknya.

Yang perlu diperhatikan, kedua rumus ini menunjukkan ide dasar: **posisi vertex ditambah nilai animasi**. Nilai animasi dapat berasal dari waktu, posisi, normal, atau parameter lain. Pada slide ini kita baru melihat bentuk sederhana; detail amplitudo, frekuensi, dan kontrol parameter akan dibahas lebih lanjut.

### Inti yang Harus Ditekankan

- **Vertex animation** mengubah posisi vertex, bukan hanya warna atau texture.
- Perubahan posisi vertex terjadi sebelum rasterization, biasanya pada `vertex shader`.
- `Position + Normal × Offset` memindahkan vertex mengikuti arah normal.
- `Position Y + Sine(Time + Position X)` membuat gelombang sederhana yang bergerak terhadap waktu dan posisi `X`.
- Ide dasarnya adalah menambahkan nilai animasi ke posisi awal vertex.

### Transisi ke Slide Berikutnya

Jika pola sine ini diberi amplitudo dan fase yang lebih terkontrol, kita bisa membentuk efek gelombang yang lebih jelas. Pada slide berikutnya, kita akan melihat bagaimana konsep ini dikembangkan menjadi **Wave Effect** untuk flag, water plane sederhana, grass, dan energy surface.

---

## Slide 039 - Wave Effect

### Narasi

**Wave effect** adalah bentuk **vertex animation** yang menggunakan fungsi periodik untuk menggeser posisi vertex secara berulang. Intinya, kita tidak mengubah mesh secara permanen, tetapi menambahkan **displacement** pada posisi vertex setiap frame. Pada shader, proses ini biasanya terjadi di tahap **vertex**, sebelum vertex diproyeksikan dan dirasterisasi.

Rumus pada slide dapat dibaca sebagai berikut:

```text
Position
+
Sine(Time + Position)
×
Amplitude
```

Secara matematis, bagian `Sine(Time + Position) × Amplitude` adalah nilai geser yang akan ditambahkan ke `Position`. `Time` membuat nilai sinus berubah terhadap waktu, sehingga vertex bergerak maju-mundur secara halus. `Position` membuat setiap vertex memiliki fase yang berbeda, sehingga gelombang tidak bergerak seragam seperti seluruh mesh bergeser bersama.

Nilai sinus berada pada rentang `-1` sampai `1`, sehingga `Amplitude` menentukan seberapa besar puncak dan lembah gelombang. Jika `Amplitude` kecil, permukaan hanya bergetar halus; jika besar, deformasi menjadi lebih dramatis. Karena perhitungan dilakukan per vertex di **GPU**, efek ini relatif ringan untuk permukaan sederhana, terutama jika jumlah vertex cukup dan tidak ada perhitungan kompleks di tahap fragment.

Dalam **rendering pipeline**, vertex yang sudah digeser ini kemudian melewati tahap berikutnya: clipping, projection, rasterization, dan shading. Artinya, wave effect mengubah bentuk geometri yang akan di-render, bukan sekadar mengubah warna. Inilah mengapa efek ini cocok untuk objek yang permukaannya perlu bergerak secara organik atau periodik.

Beberapa contoh yang cocok untuk wave effect adalah:

- flag,
- water plane sederhana,
- grass,
- energy surface.

Pada flag, gelombang memberi kesan kain tertiup angin. Pada water plane sederhana, gelombang memberi kesan permukaan air bergerak. Pada grass, vertex di puncak bilah rumput dapat bergeser lebih besar dari basis. Pada energy surface, gelombang dapat memberi kesan permukaan energi yang berdenyut.

Yang perlu dipahami sebelum lanjut adalah bahwa wave effect bukan efek cahaya atau tekstur, melainkan deformasi posisi vertex. Mahasiswa perlu melihat hubungan antara `Time`, `Position`, dan `Amplitude` sebagai penggerak animasi: waktu menggerakkan fase, posisi membedakan fase antar vertex, dan amplitudo mengatur skala gerak. Detail parameter seperti seberapa rapat gelombang dan seberapa cepat animasi akan dibahas lebih lanjut.

### Inti yang Harus Ditekankan

- **Wave effect** adalah vertex animation periodik: `Position + Sine(Time + Position) × Amplitude`.
- `Time` membuat animasi bergerak, `Position` membuat fase berbeda per vertex, dan `Amplitude` mengatur besar displacement.
- Efek ini mengubah posisi vertex sebelum rasterisasi, sehingga cocok untuk flag, water plane sederhana, grass, dan energy surface.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan membedah parameter yang mengontrol bentuk dan kecepatan gelombang, yaitu **amplitude**, **frequency**, dan **speed**.

---

## Slide 040 - Amplitude dan Frequency

### Narasi

Setelah bentuk dasar wave mulai terlihat, ada tiga parameter yang paling menentukan bagaimana gelombang itu berperilaku.

- **Amplitude** menentukan seberapa besar **displacement** yang diberikan ke vertex. Semakin besar nilai amplitude, semakin tinggi atau dalam gerakan gelombang.
- **Frequency** menentukan seberapa rapat gelombang terbentuk di sepanjang permukaan. Semakin tinggi frequency, semakin banyak puncak dan lembah yang muncul dalam jarak yang sama.
- **Speed** menentukan seberapa cepat animasi bergerak seiring waktu. Parameter ini membuat wave terasa hidup, bukan hanya bentuk statis.

Dalam konteks shader, ketiga parameter ini biasanya menjadi nilai yang mengatur hasil fungsi gelombang. Intuisinya, **amplitude** memengaruhi skala hasil `Sine`, **frequency** memengaruhi kerapatan pola terhadap posisi, dan **speed** memengaruhi seberapa cepat nilai `Time` berubah.

Kita bisa membayangkannya pada permukaan plane. Jika amplitude kecil, permukaan hanya bergelombang tipis. Jika frequency tinggi, gelombang menjadi rapat seperti tekstur air halus. Jika speed tinggi, permukaan tampak bergerak cepat. Kombinasi ketiganya menentukan karakter visual objek, misalnya flag yang lembut, water plane yang dinamis, atau grass yang bergoyang.

Yang perlu kita perhatikan adalah parameter ini mengatur **bentuk dan gerak** wave, tetapi belum menentukan seberapa halus deformasinya. Hal itu akan bergantung pada struktur mesh, khususnya jumlah vertex yang tersedia untuk bergerak.

### Inti yang Harus Ditekankan

- **Amplitude** menentukan ukuran displacement.
- **Frequency** menentukan kerapatan pola gelombang.
- **Speed** menentukan kecepatan animasi terhadap waktu.
- Parameter ini penting untuk mengontrol karakter visual wave dalam shader.
- Hasil deformasi yang halus masih bergantung pada jumlah vertex pada mesh.

### Transisi ke Slide Berikutnya

Dengan parameter amplitude, frequency, dan speed, kita sudah bisa mengatur bentuk serta gerak wave. Namun, agar deformasi terlihat halus, kita perlu memahami peran vertex density, yang akan kita bahas pada slide berikutnya.

---

## Slide 041 - Vertex Density

### Narasi

Pada animasi vertex, hal yang sering menentukan hasil akhir bukan hanya parameter shader, tetapi juga **vertex density** mesh. Vertex shader pada dasarnya hanya memindahkan atau mengubah posisi **vertex yang sudah ada** pada geometri. Jika mesh memiliki sedikit vertex, setiap vertex hanya mewakili area yang cukup besar, sehingga gelombang yang dihasilkan akan terlihat **kaku** dan kurang halus.

Bayangkan sebuah plane dengan grid yang jarang. Saat shader menambahkan displacement, hanya sedikit titik yang bergerak. Antara titik-titik tersebut, permukaan diisi oleh segitiga besar, sehingga perubahan posisi tidak cukup rapat untuk membentuk lengkung gelombang yang halus. Sebaliknya, plane dengan **subdivision** yang cukup memiliki lebih banyak vertex, sehingga displacement dapat tersebar lebih rapat dan deformasi terlihat lebih natural.

Di sini kita perlu memahami batasannya: dalam workflow dasar, **shader tidak dapat membuat vertex baru secara otomatis**. Artinya, jika mesh awal terlalu kasar, shader hanya bisa menganimasikan vertex yang tersedia. Parameter animasi bisa mengubah perilaku gelombang, tetapi tidak otomatis meningkatkan jumlah titik geometri.

Karena itu, ketika hasil vertex animation terlihat pecah, kaku, atau kurang detail, langkah pertama yang perlu diperiksa adalah **resolusi mesh**. Dalam konteks rendering pipeline, vertex shader menerima vertex dari mesh, mengubah posisinya, lalu hasil tersebut dirasterisasi menjadi pixel. Jika input vertex terlalu sedikit, detail yang bisa dihasilkan pada tahap vertex transformation juga terbatas.

Sebelum lanjut ke desain property shader, mahasiswa perlu memahami bahwa kualitas visual vertex animation adalah kombinasi antara **logika shader** dan **geometri sumber**. Shader yang benar belum tentu menghasilkan bentuk halus jika mesh tidak memiliki cukup vertex.

### Inti yang Harus Ditekankan

- **Vertex density** menentukan seberapa halus deformasi pada vertex animation.
- Mesh dengan sedikit vertex menghasilkan gelombang yang **kaku**, sedangkan mesh dengan subdivision lebih halus.
- Shader dasar hanya menganimasikan **vertex yang sudah ada**, bukan membuat vertex baru secara otomatis.
- Jika hasil terlihat kurang halus, periksa **jumlah vertex/subdivision mesh** sebelum hanya mengubah parameter shader.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa kualitas animasi vertex juga bergantung pada mesh, kita akan masuk ke desain property shader yang baik, yaitu bagaimana memberi nama dan mengatur parameter agar shader lebih mudah digunakan dan dipahami.

---

## Slide 042 - Shader Property Design

### Narasi

Dalam shader, **property** adalah parameter yang kita buka untuk mengatur tampilan atau perilaku visual objek. Property ini menjadi antarmuka antara shader dan material, sehingga seniman atau developer dapat mengubah warna, tekstur, kecepatan animasi, atau efek tertentu tanpa harus menulis ulang logika shader.

Contoh property yang baik biasanya sudah menunjukkan fungsinya secara langsung:

```text
BaseColor
MainTexture
Speed
Strength
DissolveAmount
EdgeColor
EdgeWidth
```

Nama seperti `BaseColor` memberi tahu kita bahwa property tersebut berkaitan dengan warna dasar material. `MainTexture` menunjukkan bahwa property tersebut digunakan untuk tekstur utama. Sementara itu, `Speed` dan `Strength` biasanya mengontrol animasi atau deformasi, misalnya kecepatan gelombang dan kekuatan deformasi pada vertex.

Property yang jelas penting karena shader tidak hanya berisi perhitungan visual, tetapi juga nilai yang dikirim ke GPU saat rendering. Nilai-nilai ini akan memengaruhi node-node dalam shader graph, seperti warna, tekstur, pergeseran vertex, atau efek dissolve. Jika nama property sudah jelas, kita lebih mudah memahami bagian mana dari shader yang sedang diubah.

Sebaliknya, property dengan nama seperti `Value1`, `Value2`, `Temp`, atau `Test` sulit dipahami. Nama semacam itu tidak memberi informasi tentang fungsi sebenarnya. Ketika kita melihat material di editor, kita tidak bisa langsung tahu apakah `Value1` mengatur opacity, kecepatan animasi, threshold dissolve, atau parameter lain.

Oleh karena itu, desain property yang baik berarti memilih nama yang bermakna, konsisten, dan mudah dibaca. Property yang jelas membuat shader lebih mudah diuji, diperbaiki, dan digunakan bersama oleh tim. Sebelum lanjut ke tahap berikutnya, kita perlu memastikan bahwa setiap property dalam shader sudah bisa dijelaskan fungsinya secara singkat.

### Inti yang Harus Ditekankan

- **Property** adalah parameter shader yang mengatur tampilan atau perilaku visual material.
- Nama property harus menggambarkan fungsi, seperti `BaseColor`, `Speed`, `Strength`, `DissolveAmount`, `EdgeColor`, dan `EdgeWidth`.
- Nama seperti `Value1`, `Value2`, `Temp`, atau `Test` sebaiknya dihindari karena tidak informatif.
- Property yang jelas membantu debugging, kolaborasi, dan penggunaan shader yang lebih rapi.

### Transisi ke Slide Berikutnya

Setelah property shader dirancang dengan nama yang jelas, langkah berikutnya adalah memikirkan bagaimana shader tersebut dapat digunakan kembali pada banyak material tanpa harus membuat shader baru setiap kali.

---

## Slide 043 - Reusability

### Narasi

Dalam Shader Graph, ada pembedaan penting antara **shader** dan **material**. Shader adalah program visual yang menentukan bagaimana permukaan dihitung, misalnya bagaimana warna, emissive, atau animasi pulse dihasilkan. Material adalah instance yang memakai shader tersebut dan menyimpan nilai parameter tertentu. Karena itu, satu shader tidak harus dikunci untuk satu tampilan akhir.

```text
Shader: SG_EmissionPulse

Material A
Blue Neon

Material B
Red Alarm

Material C
Green Terminal
```

Pada contoh ini, `SG_EmissionPulse` adalah shader yang sama. Yang berbeda adalah material yang memakainya. `Material A` bisa menghasilkan nuansa **Blue Neon**, `Material B` menghasilkan **Red Alarm**, dan `Material C` menghasilkan **Green Terminal**. Perbedaan tersebut biasanya berasal dari nilai property seperti warna, intensitas, kecepatan, atau parameter lain yang sudah dirancang sebelumnya.

Hal ini penting dalam grafika komputer karena rendering pipeline membutuhkan pemisahan antara **logika visual** dan **data tampilan**. Logika visual berada di shader: bagaimana koordinat, UV, warna, dan nilai emissive diproses. Data tampilan berada di material: nilai apa yang dimasukkan ke shader. Dengan pemisahan ini, satu shader dapat melayani banyak objek atau banyak material tanpa membuat shader baru untuk setiap variasi warna.

Dari sisi pengembangan, reusability membuat shader lebih mudah dirawat. Jika ada perbaikan pada `SG_EmissionPulse`, misalnya perhitungan pulse yang lebih halus atau penggunaan property yang lebih jelas, semua material yang memakai shader tersebut dapat memperoleh perbaikan yang sama. Sebaliknya, jika kita membuat banyak shader terpisah untuk setiap warna, perubahan kecil bisa harus diulang berkali-kali.

Kita juga perlu melihat kaitannya dengan desain property. Property yang jelas seperti `BaseColor`, `MainTexture`, `Speed`, `Strength`, atau `DissolveAmount` membuat shader lebih mudah dipakai ulang. Nama property yang bermakna membantu developer memahami parameter apa yang perlu diubah untuk menghasilkan material baru. Nama seperti `Value1`, `Value2`, `Temp`, atau `Test` justru membuat shader sulit dipakai ulang karena tidak jelas fungsinya.

Intinya, shader yang baik bukan shader yang hanya menghasilkan satu tampilan, tetapi shader yang menyediakan ruang variasi yang terkontrol. Dalam Unity Shader Graph, ini berarti kita membangun satu graph yang fleksibel, lalu membuat beberapa material di atasnya. Setiap material dapat memiliki identitas visual berbeda, tetapi tetap memakai alur perhitungan yang sama.

Sebelum lanjut, mahasiswa perlu memahami bahwa **satu shader dapat memiliki banyak material**, tetapi **satu material biasanya memakai satu shader**. Jika hasil salah pada salah satu material, kita perlu memastikan apakah masalahnya ada di nilai material atau di logika shader itu sendiri. Pemahaman ini akan sangat membantu saat kita mulai memeriksa shader yang tidak menampilkan hasil seperti yang diharapkan.

### Inti yang Harus Ditekankan

- **Shader** adalah program visual yang menentukan perhitungan tampilan, sedangkan **material** adalah instance yang menyimpan nilai parameter untuk shader tersebut.
- Satu shader seperti `SG_EmissionPulse` dapat dipakai oleh banyak material, misalnya **Blue Neon**, **Red Alarm**, dan **Green Terminal**, tanpa membuat shader baru.
- Reusability membuat shader lebih mudah dirawat, lebih konsisten, dan lebih efisien dalam pipeline rendering.
- Property yang jelas dan bermakna adalah kunci agar shader dapat dipakai ulang secara efektif.

### Transisi ke Slide Berikutnya

Setelah kita memahami bahwa shader yang baik harus dapat dipakai ulang, langkah berikutnya adalah mengetahui cara memeriksa shader ketika hasilnya tidak sesuai. Kita akan masuk ke **Debugging Shader Graph**, yaitu proses sistematis untuk menemukan masalah pada preview, property, tipe data, UV, nilai parameter, surface type, alpha clipping, dan material.

---

## Slide 044 - Debugging Shader Graph

### Narasi

Ketika hasil render dari **Shader Graph** tidak sesuai harapan, langkah pertama yang perlu kita biasakan adalah berhenti menebak dan mulai menelusuri alur data. Dalam grafika komputer, shader menentukan bagaimana warna, tekstur, pencahayaan, dan transparansi dihitung sebelum fragmen akhir ditampilkan. Karena itu, kesalahan biasanya tidak muncul tiba-tiba, melainkan berasal dari satu node, satu nilai, atau satu pengaturan material yang salah.

Kita dapat menggunakan urutan pemeriksaan berikut:

1. **Periksa Preview** untuk melihat apakah nilai di node tertentu sudah masuk akal.
2. **Periksa property** pada material, karena nilai seperti intensitas, warna, atau toggle sering menjadi penyebab utama.
3. **Periksa tipe data** agar input dan output node tidak salah dikonversi, misalnya antara `float`, `vector`, `color`, atau tekstur.
4. **Periksa UV** karena koordinat tekstur menentukan bagaimana pola dipetakan ke permukaan objek.
5. **Periksa nilai terlalu besar/kecil**, terutama pada parameter waktu, skala noise, intensitas, atau offset.
6. **Periksa Surface Type** karena pengaturan permukaan memengaruhi cara material dirender, termasuk pencahayaan dan blending.
7. **Periksa Alpha Clipping** jika ada bagian objek yang hilang atau muncul lubang yang tidak diinginkan.
8. **Periksa material** untuk memastikan material yang benar digunakan dan tekstur atau parameter sudah terpasang.

Pada tahap awal, **Preview** sangat membantu karena memungkinkan kita melihat nilai di tengah pipeline, bukan hanya hasil akhir. Misalnya, jika warna akhir terlalu terang, kita bisa mengecek apakah node `Color` sudah benar, apakah `Noise` menghasilkan pola yang diharapkan, atau apakah nilai `Intensity` terlalu besar. Dengan cara ini, masalah dapat diisolasi pada satu bagian tertentu.

Selanjutnya, kita perlu memperhatikan **property** dan **tipe data**. Nilai yang tampak kecil di inspector bisa berubah menjadi efek visual yang sangat besar setelah melewati beberapa node. Sebaliknya, tipe data yang tidak cocok dapat membuat hasil menjadi hitam, putih, berkedip, atau tidak sesuai ekspektasi. Untuk **UV**, kesalahan biasanya terlihat sebagai tekstur yang terbalik, tiling yang salah, atau pola yang tidak menempel pada permukaan.

Hal yang sering terlewat adalah **Surface Type** dan **Alpha Clipping**. **Surface Type** menentukan apakah material dirender sebagai opaque, transparent, atau cutout, sehingga memengaruhi urutan render, depth, dan blending. **Alpha Clipping** menentukan ambang batas alpha yang dianggap terlihat atau dibuang; jika threshold salah, objek bisa tampak bolong atau hilang sebagian. Terakhir, **material** harus dicek karena kadang masalah bukan pada graph, tetapi pada material yang salah dipakai atau parameter yang belum tersimpan.

Sebelum melanjutkan, mahasiswa perlu memahami bahwa debugging shader graph adalah proses menelusuri data dari input ke output. Kita harus bisa membaca alur node, mengenali nilai yang tidak wajar, dan memastikan setiap tahap menghasilkan nilai yang masuk akal. Dengan kebiasaan ini, kita tidak hanya memperbaiki satu shader, tetapi juga membangun cara berpikir yang sama untuk masalah rendering lain.

### Inti yang Harus Ditekankan

- Debugging **Shader Graph** dilakukan dengan menelusuri alur data secara sistematis, bukan hanya melihat output akhir.
- Periksa **Preview**, **property**, **tipe data**, **UV**, skala nilai, **Surface Type**, **Alpha Clipping**, dan **material** untuk mengisolasi masalah.
- Kesalahan sering muncul dari nilai yang terlalu besar/kecil, koordinat UV yang salah, atau pengaturan permukaan yang tidak cocok.

### Transisi ke Slide Berikutnya

Setelah memahami urutan pemeriksaan ini, kita akan melihat bagaimana **Preview Node** membantu mengisolasi masalah pada satu bagian tertentu, sehingga kita bisa memastikan apakah kesalahan berasal dari node awal, tengah, atau output akhir.

---

## Slide 045 - Preview Node

### Narasi

Ketika hasil rendering tidak sesuai, masalah sering tidak terlihat hanya dari output akhir. **Preview node** membantu kita mengisolasi masalah dengan menampilkan nilai di titik tertentu dalam Shader Graph. Dengan cara ini, kita bisa melihat apakah masalah berasal dari sumber data, proses tengah, atau tahap akhir.

Contoh alurnya bisa dibaca seperti ini:

```text
Noise
→ preview

Mask
→ preview

Final Color
→ preview
```

Artinya, kita bisa meletakkan **Preview** setelah `Noise` untuk memeriksa apakah pola noise sudah benar. Lalu kita bisa meletakkan **Preview** setelah `Mask` untuk memastikan area yang seharusnya aktif atau tertutup sudah sesuai. Terakhir, **Preview** pada `Final Color` membantu kita membandingkan nilai akhir dengan hasil yang diharapkan.

Cara membaca diagramnya cukup sederhana: setiap panah menunjukkan aliran data. Jika preview di awal sudah benar tetapi preview di akhir salah, kemungkinan masalah ada di node di antaranya. Sebaliknya, jika preview di awal sudah salah, kita perlu memeriksa input seperti `UV`, property, atau nilai parameter sebelum melanjutkan ke tahap berikutnya.

Poin pentingnya adalah jangan hanya menyalahkan output akhir. Dalam grafika komputer, warna akhir biasanya merupakan hasil dari banyak tahap: sampling texture, masking, blending, transformasi nilai, dan penyesuaian material. **Preview node** memberi kita cara untuk memeriksa setiap tahap secara visual, sehingga debugging lebih terarah.

Sebelum lanjut, mahasiswa perlu memahami bahwa Preview bukan pengganti pemahaman alur data. Ia adalah alat diagnostik. Kita harus tahu apa yang seharusnya muncul di setiap titik, baru bisa menilai apakah hasil preview benar atau salah.

### Inti yang Harus Ditekankan

- **Preview node** digunakan untuk mengisolasi masalah dengan menampilkan nilai di titik tertentu dalam Shader Graph.
- Jangan hanya melihat `Final Color`; periksa juga nilai antara seperti `Noise` dan `Mask`.
- Jika preview awal benar tetapi akhir salah, masalah kemungkinan ada di node di antara keduanya.
- Preview membantu menghubungkan gejala visual dengan penyebab teknis seperti `UV`, property, atau logika masking.

### Transisi ke Slide Berikutnya

Setelah kita bisa mendiagnosis masalah secara visual, langkah berikutnya adalah memahami bahwa shader yang benar secara visual belum tentu efisien. Kita akan melihat bagaimana shader yang menarik dapat menambah cost rendering.

---

## Slide 046 - Shader dan Performance

### Narasi

Setelah kita melihat cara mengisolasi masalah dengan preview, langkah berikutnya adalah menilai apakah efek visual yang kita buat masih efisien. Dalam grafika komputer, shader yang tampak menarik sering kali tidak hanya mengubah warna, tetapi juga menambah **biaya rendering** yang harus dipikul GPU.

Biaya ini biasanya muncul pada tahap **fragment processing**, yaitu tahap setelah rasterisasi ketika GPU menghitung warna untuk setiap pixel atau fragment yang dihasilkan. Semakin banyak pixel yang harus diproses, dan semakin berat perhitungan di setiap pixel, semakin besar beban yang muncul.

Salah satu faktor utama adalah **banyaknya `texture sample`**. Setiap kali shader mengambil sampel dari texture, GPU perlu membaca data dari memori. Jika satu fragment harus mengambil beberapa texture, misalnya albedo, normal map, roughness, dan emission, biaya memori dan bandwidth dapat meningkat secara signifikan.

Faktor berikutnya adalah **banyaknya operasi math**. Operasi seperti normalisasi, dot product, cross product, blending warna, atau perhitungan noise dapat menambah beban unit aritmetika GPU. Jika operasi ini dilakukan untuk setiap fragment, efeknya akan terasa pada frame rate, terutama ketika objek menutupi area layar yang besar.

Kita juga perlu memperhatikan **`transparency`** dan **`overdraw`**. Objek transparan sering membutuhkan blending, sorting, dan penulisan warna yang lebih hati-hati. Sementara itu, `overdraw` terjadi ketika banyak fragment saling menutupi pixel yang sama, sehingga GPU melakukan kerja yang tidak selalu menghasilkan pixel final yang berbeda.

Akhirnya, **`complex fragment processing`** dapat muncul ketika shader menggabungkan banyak efek sekaligus, misalnya texture sampling, pencahayaan tambahan, mask, noise, dan blending. Secara visual mungkin hasilnya bagus, tetapi secara teknis setiap tambahan efek harus dibayar dengan waktu eksekusi dan sumber daya GPU.

Poin pentingnya adalah shader sederhana tetap dapat terlihat baik jika **desain visualnya tepat**. Artinya, kita tidak selalu perlu efek yang rumit; pemilihan warna, bentuk, animasi, dan penempatan objek bisa menghasilkan tampilan yang kuat dengan biaya yang lebih rendah. Sebelum lanjut ke praktikum, mahasiswa perlu terbiasa bertanya: efek ini menambah nilai visual, atau hanya menambah biaya?

### Inti yang Harus Ditekankan

- **Shader visual yang menarik dapat menambah cost** karena GPU harus melakukan lebih banyak kerja per pixel.
- Faktor utama meliputi **banyak `texture sample`**, **banyak operasi math**, **`transparency`**, **`overdraw`**, dan **`complex fragment processing`**.
- **Shader sederhana tetap dapat terlihat baik** jika desain visualnya tepat dan biaya rendering tetap terkendali.

### Transisi ke Slide Berikutnya

Dengan memahami bahwa setiap node dan aliran data dalam shader dapat memengaruhi performa, kita akan masuk ke praktikum membuat custom shader. Fokusnya bukan hanya menghasilkan efek, tetapi memahami bagaimana data mengalir dan bagaimana efek tersebut diterapkan pada scene.

---

## Slide 047 - Praktikum: Custom Shader

### Narasi

Pada praktikum ini, mahasiswa diminta membangun **custom shader** sederhana, bukan sekadar memakai material bawaan. Tujuannya adalah memahami bagaimana tampilan visual objek dikendalikan oleh **node** dan **aliran data** dalam `Shader Graph`.

Tugas minimal yang harus dibuat adalah:

```text
1. Emission Pulse Shader
2. Dissolve Shader
3. Animated Surface Shader
```

Ketiga shader ini harus diterapkan pada **scene hasil Pertemuan 13**. Dengan menggunakan scene yang sudah ada, mahasiswa dapat langsung melihat pengaruh shader terhadap objek, material, dan tampilan akhir rendering.

Dalam `Shader Graph`, setiap node mewakili satu bagian kecil dari proses rendering. Ada node untuk **property**, node untuk **waktu**, node untuk **operasi matematika**, node untuk **warna**, dan node output yang menentukan nilai apa yang dikirim ke material. Mahasiswa perlu membaca graph seperti membaca pipeline mini: input masuk, diproses oleh node, lalu keluar sebagai nilai yang memengaruhi tampilan objek.

Untuk **Emission Pulse Shader**, intinya adalah membuat efek cahaya yang berubah-ubah atau berdenyut. Mahasiswa perlu memahami bagaimana parameter waktu atau property dikombinasikan dengan operasi sederhana untuk menghasilkan perubahan intensitas emission. Efek ini membantu memahami bahwa shader dapat mengubah tampilan objek per frame tanpa mengubah geometri.

Untuk **Dissolve Shader**, intinya adalah mengontrol bagian objek yang terlihat atau hilang berdasarkan parameter tertentu. Mahasiswa perlu memperhatikan bagaimana nilai parameter memengaruhi hasil fragment, sehingga objek dapat tampak memudar atau menghilang secara bertahap.

Untuk **Animated Surface Shader**, intinya adalah membuat permukaan objek yang berubah secara animasi. Perubahan ini dapat berasal dari parameter animasi, waktu, atau nilai yang diproses oleh node, sehingga tampilan permukaan tidak statis.

Yang harus dipahami sebelum lanjut adalah bahwa shader bukan hanya kumpulan node yang disambungkan secara acak. Setiap sambungan menentukan **alur data**: property masuk, diproses, lalu keluar ke output material. Jika alur data salah, efek visual akan salah meskipun graph terlihat rapi.

### Inti yang Harus Ditekankan

- Fokus praktikum adalah **pemahaman node dan aliran data**, bukan hanya menyalin graph.
- Mahasiswa harus membuat minimal **Emission Pulse Shader**, **Dissolve Shader**, dan **Animated Surface Shader**.
- Ketiga shader harus diterapkan pada **scene hasil Pertemuan 13** agar efeknya dapat diamati langsung.
- Pahami hubungan antara **property**, **operasi node**, dan **output material** dalam rendering pipeline.

### Transisi ke Slide Berikutnya

Setelah tujuan praktikum dipahami, langkah berikutnya adalah menyusun rencana kerja pembuatan shader graph secara bertahap, mulai dari pembuatan graph, definisi property, pembangunan efek, hingga pengujian parameter.

---

## Slide 048 - Rencana Praktikum

### Narasi

Setelah mahasiswa memahami bahwa custom shader dibangun dari node dan aliran data, langkah berikutnya adalah menata praktikum menjadi urutan kerja yang jelas. Rencana ini penting karena `Shader Graph` tidak cukup dibuat asal; ia harus memiliki properti, efek, material, dan pengujian yang terstruktur.

Alur praktikum dapat dibaca sebagai tahapan dari aset shader hingga hasil visual di scene:

1. **Create Shader Graph** — membuat aset shader graph sebagai tempat membangun node.
2. **Define Blackboard Properties** — menyiapkan parameter yang akan dikendalikan dari material.
3. **Build Emission Pulse** — membuat efek emissive yang dapat berdenyut atau berubah sesuai parameter.
4. **Build Dissolve** — membangun logika dissolve pada shader.
5. **Add Dissolve Edge** — menambahkan efek tepi pada area yang sedang dissolve.
6. **Build Animated Surface** — membuat permukaan yang bergerak atau berubah secara visual.
7. **Optional Vertex Wave** — menambahkan animasi vertex sebagai opsi pengembangan.
8. **Create Material Instances** — membuat material yang dapat dipakai ulang dan dikonfigurasi.
9. **Apply to P13 Scene** — menerapkan material pada scene hasil Pertemuan 13.
10. **Test Parameters** — menguji perubahan parameter untuk memastikan shader berperilaku sesuai harapan.

Poin yang perlu dipahami mahasiswa adalah bahwa `Blackboard Properties` menjadi jembatan antara shader graph dan material. Tanpa properti yang jelas, node tidak memiliki input yang bisa diatur dari luar. Sebaliknya, `Material Instances` membuat shader tidak hanya sekali pakai, tetapi dapat diterapkan ke beberapa objek dengan konfigurasi berbeda.

Bagian `Dissolve` dan `Dissolve Edge` menunjukkan bahwa shader tidak hanya menentukan warna akhir, tetapi juga perilaku visual seperti objek yang menghilang dengan batas yang terlihat. `Animated Surface` dan `Optional Vertex Wave` kemudian memperluas pemahaman dari perilaku permukaan ke animasi vertex, meskipun vertex wave bersifat opsional.

Detail teknis tersedia pada modul praktikum. Pada tahap ini, yang utama adalah mahasiswa melihat urutan kerja: dari pembuatan graph, definisi properti, pembangunan efek, pembuatan material, penerapan ke scene, hingga pengujian parameter.

### Inti yang Harus Ditekankan

- Rencana praktikum adalah alur kerja yang terstruktur, bukan daftar efek yang dikerjakan secara acak.
- `Blackboard Properties` dan `Material Instances` membuat shader dapat dikonfigurasi, dipakai ulang, dan diuji.
- `Dissolve Edge` dan `Animated Surface` menunjukkan bahwa shader memengaruhi perilaku visual, bukan hanya warna.
- `Test Parameters` memastikan shader benar-benar berfungsi pada `P13 Scene`.

### Transisi ke Slide Berikutnya

Dengan urutan ini, mahasiswa dapat melihat benang merah dari input data, node operations, vertex/fragment stage, custom surface behavior, hingga reusable material. Kita lanjut ke ringkasan pertemuan.

---

## Slide 049 - Ringkasan Pertemuan

### Narasi

Pada bagian akhir pertemuan ini, kita kembali ke **benang merah** dari praktikum Shader Graph. Alurnya dapat dibaca sebagai berikut:

```text
Input Data
↓
Node Operations
↓
Vertex / Fragment Stage
↓
Custom Surface Behavior
↓
Reusable Material
```

Artinya, material tidak dibangun hanya dengan memilih warna atau texture secara manual. Kita menyiapkan **input data** seperti `Blackboard`, `UV`, dan `Time`, lalu mengolahnya melalui **node operations** seperti `math node`. Hasil pengolahan tersebut masuk ke **vertex stage** atau **fragment stage**, tergantung apakah yang diubah adalah posisi geometri atau tampilan permukaan. Dari situ terbentuk **custom surface behavior**, misalnya `emission`, `dissolve`, `animated surface`, dan `vertex animation`.

Poin pentingnya adalah Shader Graph membantu kita melihat hubungan sebab-akibat antara data, operasi, dan hasil visual. `Blackboard` berfungsi sebagai tempat parameter yang dapat diatur, `Master Stack` menjadi titik utama yang menentukan tampilan material, sementara `UV` dan `Time` memberi informasi spasial dan temporal. Dengan memahami alur ini, mahasiswa tidak hanya tahu cara menghubungkan node, tetapi juga memahami mengapa material bisa berubah, bergerak, atau dapat dipakai ulang.

Sebelum lanjut, hal yang perlu dipastikan adalah mahasiswa mampu membaca arah data dari input ke output, membedakan peran vertex dan fragment, serta mengenali bahwa `emission`, `dissolve`, dan `animated surface` adalah contoh perilaku material yang dibangun dari kombinasi node.

### Inti yang Harus Ditekankan

- Alur utama Shader Graph: **input data** → **node operations** → **vertex/fragment stage** → **custom surface behavior** → **reusable material**.
- `Blackboard`, `Master Stack`, `UV`, dan `Time` adalah komponen penting untuk mengatur parameter, tampilan material, dan animasi.
- `emission`, `dissolve`, `animated surface`, dan `vertex animation` menunjukkan bagaimana node mengubah perilaku permukaan atau geometri.

### Transisi ke Slide Berikutnya

Dengan ringkasan ini, kita menutup pertemuan ke-14. Selanjutnya, materi akan berlanjut ke topik **VFX, Particle & Graphics Optimization**, yang akan memperluas cara kita membangun efek visual dan memperhatikan performa rendering.

---

## Slide 050 - TERIMA KASIH

### Narasi

Terima kasih atas partisipasi dan perhatian mahasiswa selama pertemuan ke-14 ini. Pada pertemuan ini, kita telah membahas **Unity Shader Graph** sebagai salah satu pendekatan visual untuk membangun perilaku material dan efek permukaan dalam grafika komputer.

Secara konseptual, shader graph membantu kita melihat rendering pipeline bukan sebagai satu blok hitam, tetapi sebagai rangkaian proses yang dapat dibaca: **input data**, **node operations**, **vertex / fragment stage**, **custom surface behavior**, hingga **reusable material**. Dengan cara pandang ini, mahasiswa diharapkan tidak hanya tahu cara menghubungkan node, tetapi juga memahami peran elemen seperti `UV`, `Time`, `math node`, `emission`, `dissolve`, `animated surface`, dan `vertex animation` dalam membentuk tampilan akhir objek.

Sebagai penutup, penting untuk diingat bahwa kemampuan membuat efek visual yang menarik harus selalu dibarengi dengan kesadaran terhadap performa. Oleh karena itu, materi selanjutnya akan melangkah ke **VFX, Particle & Graphics Optimization**, di mana fokusnya tidak hanya pada efek yang terlihat, tetapi juga pada cara menjaga rendering tetap efisien dan stabil.

### Inti yang Harus Ditekankan

- **Unity Shader Graph** adalah cara visual untuk membangun logika shader melalui node, bukan sekadar alat membuat efek.
- Pemahaman utama pada pertemuan ini adalah alur dari **input data** menuju **vertex / fragment stage** dan akhirnya membentuk **custom surface behavior**.
- Mahasiswa perlu mampu membaca peran node seperti `UV`, `Time`, `math node`, `emission`, `dissolve`, `animated surface`, dan `vertex animation` dalam konteks rendering.
- Kemampuan visual harus diikuti kesadaran performa, sehingga transisi ke **VFX, Particle & Graphics Optimization** menjadi relevan.

### Transisi ke Slide Berikutnya

Dengan penutupan pertemuan ini, kita akan melanjutkan ke materi berikutnya, yaitu **VFX, Particle & Graphics Optimization**, untuk membahas bagaimana efek visual dan partikel dapat dibuat secara menarik sekaligus tetap efisien dalam rendering real-time.
