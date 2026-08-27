# Narasi Grafika Komputer - Pertemuan 13

## Unity Lighting, Material & Post Processing

Sumber: markdown/pert13.md

---

## Slide 000 - Cover

### Narasi

Selamat datang pada **Pertemuan 13** mata kuliah `EF234504 — Grafika Komputer`. Pada sesi ini, kita akan membahas **Unity Lighting, Material & Post Processing**, yaitu tiga lapisan penting yang menentukan bagaimana objek 3D akhirnya terlihat oleh pengguna.

Dalam rendering, geometri dan transformasi menentukan *di mana* objek berada, tetapi pencahayaan, material, dan efek akhir menentukan *bagaimana* objek itu tampak: terang atau gelap, kasar atau halus, realistis atau stylized. Dengan kata lain, bagian ini menghubungkan hasil pipeline rendering dengan persepsi visual yang kita lihat di layar.

Pada pertemuan ini, kita akan bekerja dalam konteks `Unity` dan `URP`, karena pipeline modern membantu kita memahami bagaimana cahaya, permukaan, dan koreksi gambar akhir diproses secara real-time. Sebelum masuk ke detail teknis, penting untuk melihat gambaran besar: apa saja komponen yang akan kita pelajari dan bagaimana mereka saling berhubungan.

### Inti yang Harus Ditekankan

- **Lighting**, **Material**, dan **Post Processing** adalah tiga tahap penting setelah geometri dirender.
- Pencahayaan memberi bentuk dan suasana, material menentukan respons permukaan terhadap cahaya, dan post-processing membentuk tampilan akhir gambar.
- Pertemuan ini berfokus pada pemahaman konsep dan praktik dalam `Unity`, khususnya pada `URP`.

### Transisi ke Slide Berikutnya

Setelah pembuka ini, kita akan melihat daftar topik yang akan dibahas, mulai dari jenis cahaya, mode lighting, material, environment lighting, hingga post-processing dan praktikum scene terang versus gelap.

---

## Slide 001 - Topik Pembahasan

### Narasi

Pertemuan ini berfokus pada tiga hal yang menentukan tampilan akhir sebuah scene Unity: **lighting**, **material**, dan **post-processing**. Ketiganya penting karena dalam **real-time rendering**, gambar tidak hanya dibentuk oleh geometri, tetapi juga oleh cara cahaya berinteraksi dengan permukaan dan bagaimana hasil akhir disesuaikan sebelum ditampilkan.

Kita akan membahas topik berikut:

1. **Lighting pada real-time rendering**
2. **Directional Light, Point Light, dan Spot Light**
3. **Real-Time, Baked, dan Mixed Lighting**
4. **Shadow dan Lightmap**
5. **Material pada Unity URP**
6. **Environment Lighting**
7. **Post Processing pada URP**
8. **Bloom, Color Adjustments, Tonemapping, Depth of Field, dan Ambient Occlusion**
9. **Praktikum Bright/Day vs Dark/Night Scene**

Perhatikan bahwa urutan ini mengikuti alur kerja visual: cahaya menentukan pencahayaan, material menentukan respons permukaan terhadap cahaya, dan post-processing menyempurnakan tampilan akhir. Untuk itu, kita perlu memahami peran `Directional Light`, `Point Light`, dan `Spot Light`, perbedaan **Real-Time**, **Baked**, dan **Mixed Lighting**, serta fungsi **shadow** dan **lightmap** sebelum masuk ke material `URP` dan efek seperti `Bloom`, `Tonemapping`, `Depth of Field`, dan `Ambient Occlusion`.

### Inti yang Harus Ditekankan

- **Lighting**, **material**, dan **post-processing** adalah tiga lapisan penting yang membentuk tampilan visual akhir.
- Jenis cahaya dan mode lighting memengaruhi kualitas visual sekaligus performa rendering.
- Material `URP` harus dipahami agar objek bereaksi secara benar terhadap cahaya dan lingkungan.
- Post-processing digunakan secara terarah untuk memperkuat suasana, bukan sekadar menambah efek.

### Transisi ke Slide Berikutnya

Setelah mengetahui peta pembahasan, kita lanjut ke capaian pembelajaran pertemuan agar jelas kemampuan apa yang harus dimiliki setelah sesi ini.

---

## Slide 002 - Capaian Pembelajaran Pertemuan

### Narasi

Capaian pembelajaran pada pertemuan ini bukan sekadar hafalan istilah, tetapi kemampuan menjelaskan dan menerapkan **lighting**, **material**, dan **post-processing** dalam **real-time rendering**. Dalam konteks grafika komputer, lighting menentukan bagaimana objek terlihat setelah melewati tahap transformasi, rasterisasi, dan shading. Tanpa pencahayaan yang tepat, scene hanya berupa bentuk geometri; dengan lighting, kita bisa membentuk kedalaman, fokus, dan suasana visual.

Setelah pertemuan ini, mahasiswa diharapkan mampu membedakan jenis cahaya seperti `Directional Light`, `Point Light`, dan `Spot Light`, serta memahami kapan masing-masing cocok digunakan. Kita juga perlu memahami perbedaan `real-time`, `baked`, dan `mixed lighting`, karena pilihan ini memengaruhi apakah pencahayaan dihitung setiap frame, disimpan sebelumnya, atau dikombinasikan. Pemahaman ini penting untuk menilai trade-off antara kualitas visual dan performa.

Selain cahaya, mahasiswa diharapkan mampu menjelaskan fungsi `shadow` dan `lightmap`. `Shadow` membantu menunjukkan hubungan spasial antarobjek, sedangkan `lightmap` menyimpan hasil pencahayaan tidak langsung agar scene tetap terlihat kaya tanpa membebani GPU terlalu besar. Pada sisi material, kemampuan yang diharapkan adalah menyesuaikan material `URP` agar bereaksi terhadap lighting dengan benar, bukan hanya mengubah warna, tetapi juga memahami bagaimana material memantulkan atau menyerap cahaya.

Capaian terakhir mengarah pada praktik: menggunakan `post-processing` secara terarah, membangun dua suasana visual berbeda dari scene yang sama, dan mengevaluasi trade-off antara kualitas visual dan performa. Dengan kata lain, mahasiswa tidak hanya membuat scene terlihat lebih terang atau lebih gelap, tetapi mampu memilih pencahayaan, material, dan efek akhir secara sadar untuk mendukung tujuan visual.

### Inti yang Harus Ditekankan

- **Lighting** adalah bagian penting dari rendering pipeline karena menentukan bagaimana objek terlihat setelah shading.
- Mahasiswa harus mampu membedakan `Directional Light`, `Point Light`, dan `Spot Light` berdasarkan bentuk dan penggunaan cahayanya.
- `Real-time`, `baked`, dan `mixed lighting` memiliki trade-off berbeda antara fleksibilitas, kualitas, dan performa.
- `Shadow` dan `lightmap` membantu membentuk kedalaman serta efisiensi pencahayaan dalam scene.
- Material `URP` harus disesuaikan agar bereaksi terhadap lighting secara benar, bukan hanya secara visual permukaan.
- `Post-processing` digunakan secara terarah untuk memperkuat suasana, bukan sekadar menambah efek.
- Tujuan akhir adalah membangun dua suasana berbeda dari scene yang sama sambil tetap memperhatikan performa.

### Transisi ke Slide Berikutnya

Setelah memahami capaian yang diharapkan, kita lanjut ke posisi pertemuan 13 dalam alur mata kuliah, yaitu bagaimana pertemuan ini mengubah scene dari Pertemuan 12 menjadi scene real-time yang memiliki suasana visual dan pencahayaan yang lebih terarah.

---

## Slide 003 - Posisi Pertemuan 13

### Narasi

Kita sedang berada di titik penting dalam alur praktikum. Dari **P9** sampai **P16**, mahasiswa bergerak dari pembuatan objek 3D menuju scene real-time yang siap dievaluasi. Pertemuan 13 berada tepat setelah scene dipindahkan ke Unity, tetapi sebelum masuk ke kontrol visual yang lebih kompleks melalui **Shader Graph**.

```text
P9
Blender Modeling
   ↓
P10
UV + Texturing
   ↓
P11
Blender Lighting + Rendering
   ↓
P12
Unity + URP + Asset Import
   ↓
P13
LIGHTING + MATERIAL + POST FX
   ↓
P14
Shader Graph
   ↓
P15
VFX + Optimization
   ↓
P16
UAS
```

Bacanya dari atas ke bawah: di **P9** kita membangun **geometry**, di **P10** kita menyiapkan **UV** dan **texture**, lalu di **P11** kita sudah mencoba **lighting** dan **rendering** di Blender. Setelah itu, di **P12**, scene dipindahkan ke **Unity** dengan **URP** dan aset diimpor. Pertemuan 13 inilah titik di mana scene yang sudah masuk Unity tidak hanya “terlihat”, tetapi mulai diberi **suasana visual** yang terarah.

Inti pertemuan ini adalah mengubah scene hasil P12 menjadi **scene real-time yang memiliki suasana visual dan pencahayaan yang terarah**. Artinya, kita tidak lagi fokus membuat objek baru, melainkan mengatur bagaimana **light**, **material**, dan **post-processing** bekerja bersama dalam **rendering pipeline**. Di tahap ini, mahasiswa perlu memahami bahwa tampilan akhir bukan hanya hasil dari model 3D, tetapi juga hasil dari interaksi antara **kamera**, **pencahayaan**, **material**, dan efek akhir.

Sebelum lanjut, hal penting yang harus dipahami adalah: pertemuan 13 berada tepat setelah **asset import** dan sebelum **Shader Graph**. Jadi, kita masih menggunakan pendekatan lighting dan material yang lebih langsung, lalu nanti di P14 kita akan masuk ke kontrol visual yang lebih prosedural melalui **Shader Graph**.

### Inti yang Harus Ditekankan

- Pertemuan 13 berada di tengah alur: setelah **Blender** dan **Unity import**, sebelum **Shader Graph** dan **optimization**.
- Fokusnya bukan membuat geometri baru, tetapi membentuk **suasana visual** scene real-time.
- **Lighting**, **material**, dan **post-processing** adalah tiga pengendali utama tampilan akhir di tahap ini.
- Scene hasil P12 harus sudah siap: aset masuk Unity, **URP** aktif, dan objek sudah memiliki material dasar.

### Transisi ke Slide Berikutnya

Setelah posisi pertemuan ini jelas, kita lanjut ke pertanyaan mendasar: mengapa **lighting** sangat penting? Karena tanpa pencahayaan yang baik, bentuk 3D, material, dan kedalaman scene akan sulit dibaca.

---

## Slide 004 - Mengapa Lighting Penting?

### Narasi

Ketika kita sudah memiliki model 3D, langkah berikutnya bukan hanya menempatkan objek ke dalam scene, tetapi membuat objek itu benar-benar terbaca sebagai bentuk yang memiliki ruang. Tanpa **lighting** yang baik, permukaan 3D bisa terlihat datar, karena mata kita sangat bergantung pada kontras terang dan gelap untuk memahami bentuk.

Di sinilah peran lighting menjadi penting. Lighting membantu menunjukkan beberapa hal yang menentukan kualitas visual scene:

- **volume**, sehingga objek terasa memiliki isi dan tidak seperti lembaran datar;
- **kedalaman**, sehingga objek terlihat berada pada posisi ruang tertentu;
- **arah permukaan**, sehingga kita bisa menebak kemiringan atau orientasi permukaan;
- **material**, karena cara material merespons cahaya membantu membedakan permukaan;
- **posisi object**, karena terang dan gelap membantu memisahkan objek satu sama lain;
- **mood**, karena pencahayaan memengaruhi suasana scene;
- **fokus visual**, karena area yang lebih terang biasanya lebih mudah menarik perhatian.

Secara sederhana, kita bisa membaca rumus pada slide sebagai alur pembentukan tampilan akhir:

```text
Geometry
+
Material
+
Light
+
Camera
=
Rendered Appearance
```

Artinya, `Geometry` menyediakan bentuk dasar objek. `Material` menentukan bagaimana permukaan objek merespons warna dan cahaya. `Light` memberi kontras, arah, dan penekanan visual. Sementara `Camera` menentukan sudut pandang yang akhirnya kita lihat. Keempat komponen ini tidak bekerja sendiri-sendiri; hasil akhirnya adalah `Rendered Appearance`, yaitu tampilan visual yang sampai ke layar.

Dalam konteks `real-time rendering`, proses ini terjadi secara terus-menerus setiap frame. Jadi lighting bukan hanya soal estetika, tetapi juga bagian penting dari pipeline rendering. Jika geometri sudah benar tetapi pencahayaannya salah, objek bisa terlihat aneh, hilang, atau tidak fokus. Sebaliknya, lighting yang terarah dapat membuat scene terasa lebih hidup meskipun geometrinya sederhana.

Hal yang harus kita pegang sebelum lanjut adalah: lighting membantu **pembacaan bentuk**. Ia bukan sekadar membuat scene menjadi terang. Cahaya memberi informasi visual tentang arah permukaan, posisi objek, dan hubungan antarobjek. Karena itu, dalam scene 3D, pencahayaan yang baik harus mendukung pemahaman ruang, bukan hanya membuat semua objek terlihat sama terang.

### Inti yang Harus Ditekankan

- **Lighting membuat bentuk 3D terbaca**, terutama untuk **volume**, **kedalaman**, dan **arah permukaan**.
- `Geometry`, `Material`, `Light`, dan `Camera` bersama menentukan `Rendered Appearance`.
- Lighting juga mendukung **mood** dan **fokus visual**, bukan hanya kecerahan scene.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan memperjaskan bahwa lighting bukan sekadar membuat scene terang, tetapi memiliki fungsi visual yang lebih terarah.

---

## Slide 005 - Lighting Bukan Sekadar Membuat Scene Terang

### Narasi

Pada slide sebelumnya, kita sudah melihat bahwa tampilan akhir objek 3D bukan hanya soal bentuk geometri. Ada hubungan antara `Geometry`, `Material`, `Light`, dan `Camera`. Sekarang kita perlu memperjelas satu hal penting: **lighting** bukan sekadar membuat scene menjadi terang.

```text
Visibility
+
Shape
+
Depth
+
Focus
+
Mood
+
Story
```

Rumus sederhana ini menunjukkan bahwa cahaya bekerja sebagai alat komunikasi visual. Cahaya membantu penonton atau pengguna melihat objek, memahami bentuknya, merasakan jarak, mengetahui bagian mana yang penting, serta menangkap suasana cerita.

Secara visual, kita bisa membayangkannya seperti berikut:

- **Visibility** membuat objek terlihat dan tidak hilang dalam gelap.
- **Shape** membantu permukaan terlihat memiliki volume, bukan sekadar siluet datar.
- **Depth** memberi kesan depan-belakang dan jarak antarobjek.
- **Focus** mengarahkan perhatian ke objek atau area tertentu.
- **Mood** membangun suasana, misalnya hangat, dingin, misterius, atau dramatis.
- **Story** mendukung narasi visual dari scene.

Karena itu, scene yang terlalu terang belum tentu baik. Jika semua area sama terangnya, mata tidak tahu harus fokus ke mana. Sebaliknya, scene yang gelap juga belum tentu dramatis. Gelap yang tidak terkontrol bisa membuat informasi visual hilang, objek sulit dibaca, dan bentuk 3D menjadi tidak jelas.

Tujuan lighting yang baik adalah **membuat informasi visual mudah dibaca dan mendukung suasana scene**. Dalam grafika komputer, ini berarti cahaya harus bekerja bersama material, geometri, dan kamera. Cahaya yang tepat akan memperkuat normal, kontras, bayangan, dan perbedaan material, sehingga objek terlihat lebih nyata dan scene lebih mudah dipahami.

Sebelum masuk ke detail teknis, mahasiswa perlu memahami bahwa lighting bukan parameter “terang” saja. Ia adalah keputusan artistik dan teknis yang memengaruhi bagaimana scene dibaca oleh mata.

### Inti yang Harus Ditekankan

- **Lighting** bukan hanya meningkatkan kecerahan scene, tetapi membantu membaca **bentuk, kedalaman, fokus, dan suasana**.
- Scene yang terlalu terang atau terlalu gelap sama-sama bisa gagal jika informasi visual tidak terbaca.
- Tujuan utama lighting adalah membuat scene **mudah dibaca secara visual** dan mendukung **mood** atau **story**.

### Transisi ke Slide Berikutnya

Setelah memahami fungsi visual lighting, langkah berikutnya adalah melihat bagaimana lighting diproses dalam real-time pipeline. Di sana kita akan melihat urutan dari scene geometry, material, light information, shadow, shading, hingga final frame.

---

## Slide 006 - Lighting dalam Real-Time Pipeline

### Narasi

Dalam **pipeline real-time**, `lighting` tidak berdiri sendiri sebagai satu tahap yang terpisah. Ia muncul sebagai hasil dari rangkaian proses yang saling terhubung, mulai dari bentuk objek hingga gambar akhir yang ditampilkan. Alur yang ditampilkan pada slide dapat dibaca dari atas ke bawah:

```text
Scene Geometry
      ↓
Material Properties
      ↓
Light Information
      ↓
Shadow
      ↓
Shading
      ↓
Post Processing
      ↓
Final Frame
```

Pada tahap pertama, **`Scene Geometry`** menyediakan bentuk permukaan yang akan dirender. Geometri ini menentukan di mana objek berada, bagaimana permukaannya dibentuk, dan bagaimana arah **normal** membantu sistem memahami orientasi permukaan terhadap cahaya. Tanpa geometri dan normal yang tepat, informasi cahaya tidak memiliki konteks visual yang jelas.

Selanjutnya, **`Material Properties`** menentukan bagaimana permukaan bereaksi terhadap cahaya. Material memberi karakter pada objek, misalnya apakah permukaannya tampak gelap, terang, halus, atau kasar. Setelah itu, **`Light Information`** masuk sebagai sumber pengaruh visual: cahaya memberikan kontribusi pada pencahayaan, kontras, dan pembacaan bentuk.

Tahap **`Shadow`** kemudian menentukan bagian mana yang terhalang oleh objek lain. Bayangan penting karena membantu memperkuat kesan volume, kedalaman, dan posisi objek dalam scene. Setelah bayangan terbentuk, proses **`Shading`** menggabungkan informasi geometri, material, cahaya, dan bayangan menjadi warna atau intensitas visual pada permukaan.

Setelah shading, **`Post Processing`** dapat memodifikasi tampilan akhir sebelum frame ditampilkan. Tahap ini bisa memengaruhi kesan visual keseluruhan, meskipun pada slide ini kita cukup memahaminya sebagai tahap akhir sebelum **`Final Frame`**. Dengan demikian, hasil akhir bukan hanya “cahaya yang ditambahkan”, melainkan keluaran dari seluruh pipeline.

Hal penting yang perlu dipahami adalah bahwa `lighting` selalu dipengaruhi oleh banyak komponen:

- **geometry**
- **normal**
- **material**
- **camera**
- **environment**
- **render pipeline**

Jika salah satu komponen berubah, hasil pencahayaan dapat berubah juga. Misalnya, cahaya yang sama dapat terlihat berbeda pada objek dengan bentuk berbeda, material berbeda, atau sudut kamera yang berbeda.

### Inti yang Harus Ditekankan

- `Lighting` adalah bagian dari **pipeline real-time**, bukan tahap yang berdiri sendiri.
- Alur utamanya: `Scene Geometry` → `Material Properties` → `Light Information` → `Shadow` → `Shading` → `Post Processing` → `Final Frame`.
- Hasil akhir dipengaruhi oleh **geometry**, **normal**, **material**, **camera**, **environment**, dan **render pipeline**.
- Perubahan pada salah satu komponen dapat mengubah hasil visual secara signifikan.

### Transisi ke Slide Berikutnya

Setelah memahami posisi `lighting` dalam pipeline, kita akan masuk ke jenis cahaya yang akan dipelajari dalam pertemuan ini: **Directional Light**, **Point Light**, dan **Spot Light**. Ketiganya memiliki karakter berbeda dalam hal arah, jangkauan, bentuk pengaruh, penggunaan, dan biaya rendering.

---

## Slide 007 - Tiga Light Utama yang Dipelajari

### Narasi

Setelah kita melihat lighting sebagai salah satu tahap dalam real-time pipeline, sekarang kita masuk ke bagian yang paling sering dipakai langsung di editor: jenis-jenis cahaya. Pada pertemuan ini, fokusnya adalah tiga light utama, yaitu `Directional Light`, `Point Light`, dan `Spot Light`.

Ketiganya sama-sama memengaruhi warna, bayangan, dan tampilan material, tetapi cara kerja visualnya berbeda. Perbedaan itu tidak hanya soal “cahaya dari mana”, tetapi juga bagaimana cahaya menyebar di scene.

Kita bisa membandingkannya dari beberapa sisi penting:

- **arah**: apakah cahaya datang dari satu arah tertentu atau dari titik tertentu;
- **jangkauan**: seberapa jauh pengaruh cahaya terasa;
- **bentuk pengaruh**: apakah cahayanya menyebar luas, melingkar, atau berbentuk kerucut;
- **penggunaan**: untuk apa cahaya itu paling cocok, misalnya pencahayaan utama, lampu ruangan, atau sorot;
- **biaya rendering**: seberapa besar pengaruhnya terhadap performa, terutama dalam real-time rendering.

Dalam konteks Unity dan rendering pipeline, pemilihan jenis light menentukan bagaimana shader menghitung pencahayaan pada permukaan objek. Geometry dan normal menentukan bagaimana cahaya dipantulkan, material menentukan respons permukaan terhadap cahaya, dan light menentukan sumber energi yang masuk ke perhitungan shading.

Karena itu, sebelum masuk ke detail teknis masing-masing light, kita perlu memahami bahwa `Directional Light`, `Point Light`, dan `Spot Light` bukan sekadar label di inspector. Mereka mewakili model cahaya yang berbeda, dan model itu akan memengaruhi tampilan visual, kualitas bayangan, serta performa scene.

### Inti yang Harus Ditekankan

- Tiga light utama yang dibahas adalah `Directional Light`, `Point Light`, dan `Spot Light`.
- Perbedaan utama ada pada **arah**, **jangkauan**, **bentuk pengaruh**, **penggunaan**, dan **biaya rendering**.
- Pemilihan light memengaruhi hasil shading, bayangan, material, dan performa real-time rendering.

### Transisi ke Slide Berikutnya

Selanjutnya kita mulai dari `Directional Light`, yaitu jenis cahaya yang paling sering digunakan untuk mensimulasikan sumber cahaya yang sangat jauh, seperti matahari.

---

## Slide 008 - Directional Light

### Narasi

Kita mulai dari jenis cahaya yang paling umum digunakan untuk scene luar ruangan, yaitu **`Directional Light`**. Cahaya ini mensimulasikan sumber cahaya yang berada sangat jauh dari objek, misalnya **matahari**. Karena jaraknya sangat jauh, berkas cahaya yang sampai ke scene dapat dianggap hampir sejajar. Oleh karena itu, yang paling menentukan adalah **arah** cahaya, bukan posisi sumber cahaya.

Dalam grafika komputer, hal ini penting karena **`Directional Light`** memberi pencahayaan yang konsisten ke seluruh area scene. Karena cahayanya dianggap datang dari arah yang hampir sejajar, pencahayaan tidak bergantung pada satu titik sumber yang dekat dengan objek. Akibatnya, ia cocok digunakan sebagai **main outdoor light**, terutama untuk scene terbuka, lingkungan alam, atau dunia game yang membutuhkan pencahayaan global yang stabil.

Secara praktis, karakter utama **`Directional Light`** dapat dipahami sebagai berikut:

- **Arah** menentukan sisi objek yang menghadap cahaya dan sisi yang berada dalam bayangan.
- **Posisi relatif** tidak menjadi faktor utama selama arah cahayanya tetap.
- **Cakupan pencahayaan** bersifat luas, sehingga dapat menerangi banyak objek dalam scene.
- **Penggunaan** paling alami adalah sebagai matahari, cahaya siang hari, atau sumber cahaya utama di luar ruangan.

Dari sisi rendering, arah cahaya ini akan digunakan pada tahap pencahayaan untuk menghitung tampilan permukaan. Permukaan yang menghadap ke arah cahaya akan tampak lebih terang, sedangkan permukaan yang membelakangi cahaya akan lebih gelap. Di sinilah mahasiswa perlu memahami bahwa **`Directional Light`** bukan sekadar “lampu” yang diletakkan di scene, melainkan representasi arah pencahayaan yang memengaruhi shading, kontras, dan kesan ruang.

Sebelum lanjut, hal yang perlu dipahami adalah bahwa **`Directional Light`** lebih ditentukan oleh orientasi atau arah cahayanya. Posisi sumber cahaya tidak selalu menjadi hal utama, karena yang kita simulasikan adalah cahaya dari sumber yang sangat jauh. Pemahaman ini akan menjadi dasar ketika nanti kita membahas bagaimana perubahan arah atau sudut cahaya mengubah suasana scene.

### Inti yang Harus Ditekankan

- **`Directional Light`** mensimulasikan sumber cahaya jauh, seperti matahari.
- **Arah cahaya** lebih penting daripada posisi sumber cahaya.
- Cahaya ini menerangi scene secara luas dan cocok sebagai **main outdoor light**.
- Arah cahaya memengaruhi shading, kontras, dan pembentukan bayangan pada objek.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa **`Directional Light`** ditentukan terutama oleh arahnya, kita akan melihat bagaimana perubahan sudut cahaya, khususnya sudut matahari, memengaruhi suasana scene, panjang bayangan, dan kesan waktu dalam lingkungan luar ruangan.

---

## Slide 009 - Sudut Matahari

### Narasi

Pada **`Directional Light`**, yang paling menentukan suasana bukan posisi sumber cahaya, melainkan **arah datangnya cahaya**. Karena `Directional Light` mensimulasikan sumber yang sangat jauh, seperti matahari, maka kita tidak perlu memikirkan jaraknya; yang penting adalah sudut arahnya terhadap scene.

Bayangkan matahari berada di posisi tinggi. Cahaya datang hampir dari atas, sehingga **bayangan menjadi lebih pendek**. Kondisi ini memberi kesan siang hari, karena pencahayaan relatif merata dan objek mudah dibaca. Dalam rendering, permukaan menerima cahaya dengan kontras yang lebih lembut, sehingga scene terasa terang, stabil, dan lebih mudah dikenali.

Sebaliknya, ketika matahari berada di posisi rendah, cahaya datang lebih mendatar. Akibatnya, **bayangan memanjang** dan bentuk bayangan menjadi lebih dramatis. Sudut seperti ini sering digunakan untuk menggambarkan pagi atau sore, karena arah cahaya yang rendah memperkuat siluet, kedalaman, dan suasana visual.

Dalam praktik, kita dapat mengubah sudut matahari dengan mengatur orientasi atau rotasi **`Directional Light`** di Unity. Perubahan ini tidak hanya mengubah panjang bayangan, tetapi juga mengubah cara objek terlihat dari sudut pandang kamera. Objek yang sama bisa terasa netral pada siang hari, namun lebih dramatis ketika cahaya datang dari sudut rendah.

Poin penting yang perlu dipahami mahasiswa adalah bahwa **sudut cahaya** memengaruhi dua hal sekaligus: **panjang bayangan** dan **suasana scene**. Sebelum lanjut ke parameter lain, kita perlu menyadari bahwa arah cahaya adalah alat utama untuk membangun kesan waktu, mood, dan keterbacaan visual dalam grafika komputer.

### Inti yang Harus Ditekankan

- **Sudut `Directional Light`** menentukan arah datangnya cahaya, bukan posisinya.
- **Matahari tinggi** menghasilkan bayangan pendek, pencahayaan merata, dan kesan siang.
- **Matahari rendah** menghasilkan bayangan panjang, bentuk lebih dramatis, dan cocok untuk pagi/sore.
- Sudut cahaya memengaruhi **mood**, **kedalaman**, dan **keterbacaan visual** scene.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana sudut cahaya membentuk suasana, langkah berikutnya adalah mengatur seberapa terang dan bagaimana warna cahaya tersebut. Pada slide berikutnya, kita akan membahas **Intensity** dan **Color** pada `Directional Light`.

---

## Slide 010 - Intensitas dan Warna Directional Light

### Narasi

Setelah kita melihat bagaimana sudut matahari memengaruhi panjang bayangan dan suasana scene, ada dua parameter visual lain yang sangat menentukan tampilan **Directional Light**, yaitu **`Intensity`** dan **`Color`**. Kedua parameter ini tidak mengubah arah cahaya secara langsung, tetapi memengaruhi seberapa terang dan bagaimana warna cahaya tersebut terlihat pada objek.

**`Intensity`** adalah nilai yang mengatur kekuatan atau kecerahan cahaya. Dalam proses rendering, nilai ini berperan untuk memperbesar atau memperkecil kontribusi cahaya terhadap permukaan objek. Semakin tinggi `Intensity`, objek yang terkena cahaya akan terlihat lebih terang. Sebaliknya, semakin rendah `Intensity`, scene akan terasa lebih redup, gelap, atau lebih dramatis.

**`Color`** adalah warna cahaya yang digunakan oleh directional light. Dalam banyak model lighting, warna cahaya akan berinteraksi dengan warna material objek. Misalnya, jika material berwarna abu-abu dan cahaya berwarna putih, hasilnya akan mendekati warna asli material. Namun, jika cahaya berwarna hangat, material akan tampak lebih kuning atau oranye. Jika cahaya berwarna dingin, material akan tampak lebih biru atau kebiruan.

Kita bisa melihat contoh sederhana seperti berikut:

```text
Day
→ warna relatif netral

Late Afternoon
→ lebih hangat

Night / Moon-like
→ lebih dingin dan lemah
```

Pada contoh **Day**, warna cahaya relatif netral karena matahari siang hari biasanya mendekati putih atau sedikit hangat. Pada **Late Afternoon**, cahaya dibuat lebih hangat untuk memberi kesan sore hari. Sementara pada **Night / Moon-like**, warna dibuat lebih dingin dan `Intensity` dibuat lebih lemah agar terasa seperti cahaya bulan, bukan matahari.

Penting untuk diingat bahwa warna cahaya harus digunakan secara terkendali. Warna yang terlalu kuat atau terlalu jenuh dapat membuat scene terlihat tidak natural, bahkan dapat menutupi detail material. Dalam grafika komputer, warna cahaya sering digunakan untuk membangun suasana, misalnya siang, sore, malam, atau suasana tertentu dalam level.

Sebelum lanjut ke jenis cahaya berikutnya, hal yang perlu dipahami adalah bahwa **Directional Light** bersifat global dan memengaruhi scene secara keseluruhan. Artinya, perubahan `Intensity` dan `Color` pada directional light akan terasa pada banyak objek sekaligus, bukan hanya pada satu area kecil.

### Inti yang Harus Ditekankan

- **`Intensity`** mengatur seberapa terang atau kuat cahaya directional light.
- **`Color`** menentukan warna cahaya dan akan memengaruhi hasil akhir warna objek melalui proses lighting.
- Warna cahaya sebaiknya digunakan secara terkendali, misalnya netral untuk siang, hangat untuk sore, dan dingin untuk malam.
- Parameter ini penting untuk membangun suasana, keterbacaan visual, dan konsistensi tampilan scene.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana cahaya arah global memengaruhi seluruh scene melalui intensitas dan warna, kita akan lanjut ke jenis cahaya yang lebih lokal, yaitu **Point Light**, yang memancarkan cahaya dari satu titik ke berbagai arah.

---

## Slide 011 - Point Light

### Narasi

Setelah kita melihat **Directional Light** yang datang dari satu arah, sekarang kita masuk ke jenis cahaya yang lebih lokal, yaitu **`Point Light`**.

**`Point Light`** memancarkan cahaya dari satu titik ke berbagai arah. Dalam diagram, titik **LIGHT** berada di tengah, dan panah menunjukkan cahaya menyebar ke atas, bawah, kiri, kanan, serta arah diagonal.

```text
       ↑
    ↖  |  ↗
← --- LIGHT --- →
    ↙  |  ↘
       ↓
```

Artinya, berbeda dengan cahaya yang datang dari satu arah, **`Point Light`** memiliki posisi di dalam scene. Objek yang berada di sekitar titik cahaya akan menerima kontribusi cahaya sesuai posisinya terhadap sumber tersebut.

Jenis cahaya ini cocok untuk sumber cahaya lokal, misalnya:

- lampu,
- bulb,
- lampu meja,
- sumber cahaya lokal.

Dalam konteks rendering, **`Point Light`** membantu kita membuat pencahayaan yang lebih realistis karena cahaya tidak lagi datang dari satu arah global, tetapi berasal dari objek tertentu di dalam scene.

Sebelum lanjut, yang perlu dipahami adalah **`Point Light`** bukan sekadar menambah terang, tetapi memperkenalkan ide **sumber cahaya lokal** yang posisinya memengaruhi hasil shading objek di sekitarnya.

### Inti yang Harus Ditekankan

- **`Point Light`** memancarkan cahaya dari satu titik ke berbagai arah.
- Posisi cahaya menentukan objek mana yang menerima kontribusi cahaya lokal.
- Cocok untuk lampu, bulb, lampu meja, dan sumber cahaya lokal.
- Konsep ini penting untuk memahami pencahayaan lokal sebelum masuk ke parameter seperti range.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bahwa **`Point Light`** tidak memengaruhi seluruh scene tanpa batas, tetapi memiliki **range** atau area pengaruh yang perlu dikontrol.

---

## Slide 012 - Range pada Point Light

### Narasi

Setelah kita melihat bahwa **Point Light** memancarkan cahaya dari satu titik ke berbagai arah, ada satu batasan penting yang menentukan seberapa jauh cahaya itu bekerja: **Range**.

Secara visual, bayangkan **Point Light** berada di posisi tertentu, lalu ada batas pengaruh berbentuk bola di sekitarnya. Jari-jari bola tersebut adalah `Range`. Objek yang berada di dalam batas itu dapat menerima kontribusi cahaya dari lampu tersebut, sedangkan objek di luar batas tidak menerima kontribusi dari **Point Light** itu.

Diagram pada slide dibaca dari atas ke bawah:

1. **Light Position** menunjukkan posisi sumber cahaya.
2. **Range** menunjukkan batas jarak pengaruh cahaya.
3. **Affected Objects** menunjukkan objek yang masih berada di dalam area pengaruh tersebut.

Dalam konteks rendering, `Range` membantu kita membatasi perhitungan pencahayaan lokal. Saat GPU atau shader menghitung pencahayaan pada suatu fragmen, sistem dapat mengecek jarak fragmen terhadap posisi **Point Light**. Jika jaraknya melebihi `Range`, kontribusi cahaya lokal tersebut dapat diabaikan atau dibuat nol. Dengan cara ini, cahaya tetap terasa lokal, realistis, dan lebih mudah dikontrol.

Penting untuk dipahami bahwa `Range` bukan menentukan seberapa terang cahaya, melainkan seberapa jauh pengaruhnya. Cahaya dengan `Range` kecil hanya menerangi area dekat, sedangkan `Range` besar dapat memengaruhi banyak objek sekaligus. Jika `Range` terlalu besar, scene bisa menjadi sulit dikontrol karena terlalu banyak objek menerima cahaya yang sama, sehingga pencahayaan kurang fokus dan biaya perhitungan pencahayaan dapat meningkat.

Sebelum lanjut, mahasiswa perlu memahami bahwa **Point Light** tidak otomatis menerangi seluruh scene. Pengaruhnya dibatasi oleh `Range`, dan nilai ini harus dipilih sesuai kebutuhan artistik dan teknis, misalnya untuk lampu meja, lampu gantung, atau sumber cahaya lokal lainnya.

### Inti yang Harus Ditekankan

- **Range** adalah batas jarak pengaruh **Point Light**, bukan ukuran kecerahan cahaya.
- Objek di luar `Range` tidak mendapat kontribusi dari **Point Light** tersebut.
- `Range` membantu mengontrol realisme, fokus pencahayaan, dan efisiensi rendering.
- Nilai `Range` yang terlalu besar dapat membuat scene sulit dikontrol dan pencahayaan kurang terarah.

### Transisi ke Slide Berikutnya

Setelah kita tahu seberapa jauh **Point Light** dapat memengaruhi objek, langkah berikutnya adalah menentukan seberapa kuat cahaya tersebut bekerja. Pada slide berikutnya, kita akan membahas **Intensity** pada **Point Light**, yaitu parameter yang mengatur kecerahan atau kekuatan cahaya.

---

## Slide 013 - Intensity pada Point Light

### Narasi

Setelah kita memahami bahwa `point light` hanya memengaruhi objek dalam `range`, langkah berikutnya adalah mengatur **seberapa kuat** cahaya itu masuk ke permukaan. Nilai ini disebut **`intensity`**. Secara intuitif, `intensity` adalah kekuatan sumber cahaya: semakin tinggi nilainya, semakin besar kontribusi cahaya yang diterima material.

Kita bisa membayangkannya seperti lampu di ruangan. Posisi lampu menentukan asal cahaya, `range` menentukan seberapa jauh pengaruhnya, dan `intensity` menentukan seberapa terang lampu itu menyala. Jika `intensity` terlalu rendah, objek di dalam `range` tetap menerima cahaya, tetapi kontribusinya terlalu kecil untuk terbaca. Akibatnya, bentuk objek, warna material, dan detail permukaan bisa tampak datar atau tenggelam ke dalam gelap.

Sebaliknya, jika `intensity` terlalu tinggi, permukaan dapat menjadi **`overbright`**. Dalam pipeline rendering, shader menghitung kontribusi cahaya dari sumber dan menjumlahkannya dengan pencahayaan lingkungan. Jika nilai cahaya terlalu besar, hasil akhir bisa jenuh, putih berlebihan, atau kehilangan detail material. Pada scene dengan efek seperti `bloom`, cahaya yang terlalu terang juga bisa memicu glow yang tidak terkendali.

Karena itu, `intensity` tidak sebaiknya dipandang sebagai satu nilai tunggal yang berdiri sendiri. Ia harus dibaca bersama:

- `range`, yang membatasi area pengaruh cahaya;
- material, yang menentukan bagaimana permukaan merespons cahaya;
- `environment lighting`, yang memberi dasar terang atau gelap pada scene.

Dengan kombinasi ini, kita bisa membuat cahaya lokal terasa natural tanpa membuat seluruh scene menjadi terlalu terang atau terlalu gelap.

Untuk praktik, perhatikan tiga hal berikut:

1. Naikkan `intensity` secara bertahap, bukan langsung ke nilai maksimum.
2. Amati apakah detail material masih terbaca, terutama pada area yang terkena cahaya langsung.
3. Cek keseimbangan dengan pencahayaan lain di scene, karena `point light` biasanya hanya menambah kontribusi lokal.

Intinya, `intensity` adalah pengatur kekuatan cahaya pada `point light`. Nilainya menentukan seberapa jelas objek terbaca, seberapa realistis material terlihat, dan seberapa terkendali efek visual seperti `bloom`. Memahami `intensity` membantu kita membangun pencahayaan yang terbaca secara visual sebelum masuk ke jenis cahaya lain yang memiliki bentuk penyebaran berbeda.

### Inti yang Harus Ditekankan

- **`intensity`** menentukan kuat cahaya `point light` yang sampai ke permukaan.
- Nilai terlalu rendah membuat objek sulit terbaca; nilai terlalu tinggi dapat menyebabkan `overbright`, hilangnya detail material, dan `bloom` berlebihan.
- `intensity` harus diatur bersama `range`, material, dan `environment lighting` agar pencahayaan seimbang.

### Transisi ke Slide Berikutnya

Setelah kita memahami kekuatan cahaya pada `point light`, selanjutnya kita akan melihat `spot light`, yaitu cahaya yang tidak menyebar ke segala arah tetapi dibatasi dalam bentuk cone, sehingga cocok untuk lampu sorot, flashlight, atau headlamp.

---

## Slide 014 - Spot Light

### Narasi

Pada slide ini kita membahas **Spot Light**, yaitu sumber cahaya yang memancarkan cahaya ke arah tertentu dalam bentuk **cone**. Berbeda dengan cahaya yang menyebar ke segala arah, spot light memiliki arah utama, sehingga cahayanya lebih terkontrol. Dalam grafika komputer, ini penting karena banyak objek nyata menghasilkan cahaya yang tidak merata, melainkan terarah pada area tertentu.

Secara visual, kita bisa membayangkan posisi sumber cahaya berada di ujung kerucut. Dari titik itu, cahaya menyebar membentuk kerucut yang semakin melebar. Area di dalam cone menerima pencahayaan, sedangkan area di luar cone tidak menerima cahaya secara langsung.

```text
Light
  \
   \
    \   cone
     \________
```

Pada diagram sederhana ini, titik `Light` menunjukkan posisi sumber cahaya. Garis miring menunjukkan batas arah pancaran, dan bagian bawah yang melebar menunjukkan area yang disinari. Dengan membaca diagram seperti ini, kita bisa memahami bahwa spot light bukan hanya soal terang atau redup, tetapi juga soal **arah** dan **bentuk area cahaya**.

Spot light cocok digunakan untuk objek yang cahayanya memang terarah, misalnya:

- `flashlight`,
- lampu panggung,
- `headlamp`,
- `security light`,
- spotlight dekoratif.

Dalam konteks rendering pipeline, spot light akan memengaruhi perhitungan pencahayaan pada permukaan objek. Saat sebuah fragmen atau piksel dievaluasi, sistem perlu mengetahui apakah posisi fragmen berada di dalam kerucut cahaya, serta seberapa kuat cahaya yang diterima. Karena itu, spot light sering menjadi bagian penting dalam shader lighting untuk menghasilkan pencahayaan yang lebih realistis dan terarah.

Sebelum lanjut ke parameter sudut, hal penting yang perlu dipahami adalah bahwa spot light memiliki identitas cahaya yang berbeda dari point light. Ia tidak hanya ditentukan oleh `intensity`, tetapi juga oleh arah pancaran dan bentuk cone. Dengan memahami konsep ini, kita akan lebih mudah memahami parameter berikutnya yang mengatur seberapa lebar atau fokus cahaya tersebut.

### Inti yang Harus Ditekankan

- **Spot Light** memancarkan cahaya ke arah tertentu dalam bentuk **cone**.
- Area di dalam cone menerima cahaya, area di luar cone tidak menerima cahaya langsung.
- Spot light cocok untuk cahaya terarah seperti `flashlight`, lampu panggung, `headlamp`, dan `security light`.
- Dalam rendering, spot light memengaruhi perhitungan pencahayaan pada permukaan objek berdasarkan posisi dan arah fragmen.
- Spot light tidak hanya bergantung pada `intensity`, tetapi juga pada arah dan bentuk cone.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa spot light memiliki bentuk cone, langkah berikutnya adalah memahami seberapa besar atau kecil kerucut tersebut. Pada slide berikutnya, kita akan membahas **Spot Angle**, yaitu parameter yang menentukan fokus dan luas area cahaya dari spot light.

---

## Slide 015 - Spot Angle

### Narasi

Setelah kita melihat bahwa **Spot Light** memancarkan cahaya dalam bentuk cone, hal penting berikutnya adalah memahami **sudut cone** tersebut. Sudut ini menentukan seberapa lebar cahaya menyebar dari sumber cahaya.

- **Sudut kecil** menghasilkan cahaya yang lebih fokus, sehingga area yang disinari sempit dan efeknya terasa seperti sorotan.
- **Sudut besar** menghasilkan area yang lebih luas, sehingga cahaya tampak lebih menyebar dan kurang tajam.

Dalam konteks lighting, parameter ini penting karena memengaruhi bagaimana objek terlihat disinari. Cone yang sempit cocok untuk sumber cahaya yang memang harus mengarahkan perhatian, misalnya lampu sorot atau headlamp. Cone yang lebar lebih cocok untuk pencahayaan area yang ingin terasa lebih terbuka.

Saat membaca properti Spot Light, kita bisa melihat `angle` sebagai nilai yang mengatur pembukaan cone. Nilai kecil membuat cone menyempit, sedangkan nilai besar membuat cone melebar. Intinya, kita memilih angle sesuai fungsi sumber cahaya, bukan sekadar membuat cahaya terlihat terang.

### Inti yang Harus Ditekankan

- **Spot Angle** menentukan lebar cone cahaya dari Spot Light.
- Sudut kecil membuat cahaya lebih fokus; sudut besar membuat area cahaya lebih luas.
- Pemilihan angle harus sesuai fungsi visual sumber cahaya.

### Transisi ke Slide Berikutnya

Setelah memahami angle, kita akan melanjutkan ke faktor lain yang menentukan perilaku Spot Light, yaitu `range` dan `direction`, karena arah rotasi Spot Light sangat memengaruhi area yang disinari.

---

## Slide 016 - Range dan Direction Spot Light

### Narasi

Untuk **Spot Light**, cahaya tidak menyebar ke semua arah seperti **Point Light**. Cahaya ini keluar dalam bentuk **cone**, sehingga arah dan jangkauannya perlu dikendalikan secara eksplisit.

Parameter utama yang memengaruhi tampilan **Spot Light** adalah:

- `position`: menentukan asal cahaya di ruang scene.
- `rotation`: menentukan arah cone, biasanya mengikuti arah depan objek light.
- `range`: menentukan jarak maksimum cahaya sebelum efeknya berhenti atau sangat lemah.
- `angle`: menentukan lebar cone, yang sudah kita lihat pada slide sebelumnya.
- `intensity`: menentukan kekuatan cahaya.
- `color`: menentukan warna cahaya yang dipancarkan.

Yang perlu kita tekankan di sini adalah **arah rotasi**. Pada **Point Light**, cahaya menyebar ke segala arah, sehingga orientasi objek light tidak terlalu menentukan bentuk pencahayaan. Namun pada **Spot Light**, jika `rotation` berubah, arah cone ikut berubah. Artinya, objek yang tadinya berada di dalam cone bisa keluar dari area cahaya hanya karena light dirotasi.

Dari sisi rendering, parameter ini menjadi input penting pada tahap **lighting**. Sistem perlu tahu dari mana cahaya datang, ke mana cone mengarah, seberapa jauh cahaya masih berpengaruh, dan seberapa lebar area yang disinari. Informasi tersebut kemudian digunakan untuk menghitung kontribusi cahaya pada setiap fragmen atau permukaan objek.

Secara intuitif, kita bisa membayangkan **Spot Light** seperti senter. `position` adalah posisi tangan yang memegang senter, `rotation` adalah arah kepala senter, `range` adalah jarak maksimum cahaya yang masih terlihat, `angle` adalah lebar pancaran, `intensity` adalah terang senter, dan `color` adalah warna cahaya.

Sebelum lanjut, mahasiswa perlu memahami bahwa **Spot Light** bukan sekadar cahaya dengan warna dan intensitas. Ia memiliki **arah**, **jangkauan**, dan **bentuk cone** yang menentukan objek mana yang terkena cahaya.

### Inti yang Harus Ditekankan

- **Spot Light** memancarkan cahaya dalam bentuk **cone**, bukan ke semua arah.
- `rotation` sangat penting karena menentukan **arah cone** cahaya.
- `range` menentukan **jarak maksimum** pengaruh cahaya.
- `position`, `angle`, `intensity`, dan `color` bersama-sama membentuk karakter pencahayaan.
- Dalam pipeline rendering, parameter ini menjadi input perhitungan **lighting** pada permukaan objek.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana **Spot Light** dikendalikan oleh posisi, arah, range, angle, intensity, dan color, kita bisa membandingkannya dengan **Directional Light** dan **Point Light** untuk memilih jenis cahaya yang paling sesuai dengan sumber cahaya yang ingin disimulasikan.

---

## Slide 017 - Perbandingan Light

### Narasi

Setelah kita melihat bahwa `Spot Light` sangat dipengaruhi oleh arah rotasi, langkah berikutnya adalah menempatkan jenis light ini dalam perbandingan yang lebih luas. Dalam pencahayaan, jenis light bukan sekadar pilihan visual, tetapi menentukan bagaimana cahaya diperlakukan dalam pipeline rendering, terutama pada tahap shading dan evaluasi material.

Tabel pada slide ini sebaiknya dibaca sebagai pemetaan karakter cahaya, bukan sebagai daftar fitur yang harus dihafal. Kolom **Arah** menunjukkan apakah cahaya memiliki orientasi tertentu. Kolom **Posisi Penting** menunjukkan apakah koordinat light di scene menentukan hasil pencahayaan. Kolom **Range Lokal** menunjukkan apakah cahaya hanya memengaruhi area di sekitarnya atau berlaku lebih global.

Secara konseptual, kita dapat membedakan tiga light sebagai berikut:

- **`Directional Light`** memiliki arah yang jelas, tetapi posisinya tidak dominan. Cahaya ini datang seperti dari sumber yang sangat jauh, sehingga cocok untuk mensimulasikan matahari.
- **`Point Light`** menyinari ke semua arah dari suatu titik. Posisinya penting, dan cahayanya memiliki range lokal, sehingga cocok untuk sumber seperti lampu bohlam.
- **`Spot Light`** menyinari dalam bentuk cone. Posisinya penting, cahayanya memiliki range lokal, dan arahnya menentukan area yang disinari, sehingga cocok untuk senter atau lampu sorot.

Perbedaan ini penting karena dalam rendering, light global dan light lokal memberi hasil yang berbeda. `Directional Light` cenderung memberi pencahayaan yang seragam ke seluruh scene, sedangkan `Point Light` dan `Spot Light` memengaruhi objek di sekitarnya secara lebih terbatas. Dengan memahami karakter ini, kita bisa memilih light yang sesuai dengan bentuk sumber cahaya yang ingin disimulasikan.

Inti dari slide ini adalah: **pilih light berdasarkan bentuk sumber cahaya yang ingin disimulasikan**, bukan berdasarkan kebiasaan menambah light agar scene terlihat lebih terang.

### Inti yang Harus Ditekankan

- `Directional Light` adalah light berarah yang cocok untuk cahaya global seperti matahari; posisinya tidak dominan.
- `Point Light` menyinari ke semua arah dari suatu titik, sehingga posisinya penting dan memiliki range lokal.
- `Spot Light` menyinari dalam bentuk cone, sehingga posisinya penting, memiliki range lokal, dan arahnya menentukan area pencahayaan.
- Pemilihan light harus didasarkan pada bentuk sumber cahaya yang ingin disimulasikan.

### Transisi ke Slide Berikutnya

Setelah kita memahami karakter masing-masing light, langkah berikutnya adalah menggunakan pemahaman itu secara disiplin: jangan menambah light hanya karena scene terasa kurang terang, tetapi tentukan dulu tujuan pencahayaan.

---

## Slide 018 - Jangan Menambah Light Tanpa Tujuan

### Narasi

Dalam `Unity`, masalah yang sering muncul di awal pembelajaran lighting adalah scene yang terlihat gelap, lalu kita langsung menambahkan lampu baru. Langkah ini memang bisa membuat scene terlihat lebih terang, tetapi sering kali hasilnya tidak menjadi lebih baik. Justru, scene bisa menjadi kurang natural, kurang dramatis, atau terasa “datar” karena cahaya datang dari terlalu banyak arah.

Pola yang sering terjadi biasanya seperti ini:

```text
Scene gelap
→ tambah lampu
→ masih aneh
→ tambah lampu lagi
→ scene menjadi datar
```

Masalahnya bukan pada jumlah cahaya semata, tetapi pada **tujuan pencahayaan**. Jika setiap lampu ditambahkan hanya untuk memperbaiki kegelapan, kita kehilangan kontrol atas arah cahaya utama, kontras, bayangan, dan karakter material. Akibatnya, objek sulit dibaca, bentuk 3D menjadi kurang jelas, dan scene kehilangan hierarki visual.

Pendekatan yang lebih baik adalah membangun lighting secara sadar, bukan secara reaktif. Kita bisa mengikuti alur berikut:

1. tentukan **key/main light**,
2. tentukan area yang perlu dibaca,
3. tambahkan `local light` bila diperlukan,
4. evaluasi `shadow`,
5. evaluasi `material`.

**Key/main light** adalah cahaya utama yang menentukan arah pencahayaan utama scene. Cahaya ini biasanya menjadi acuan untuk bayangan, kontras, dan mood visual. Jika key light sudah jelas, scene akan memiliki arah cahaya yang konsisten. Tanpa key light yang kuat, beberapa lampu kecil bisa saling menyaingi dan membuat bayangan menjadi lemah atau tidak jelas.

`Local light` baru ditambahkan jika ada area tertentu yang memang perlu dibantu, misalnya jalur pemain, objek penting, atau area transisi yang terlalu gelap. Artinya, lampu lokal bukan pengganti desain lighting, melainkan **alat bantu** untuk memperbaiki keterbacaan pada bagian tertentu.

Setiap light tambahan juga memengaruhi performa rendering. Dalam pipeline rendering, semakin banyak light yang aktif, semakin banyak perhitungan pencahayaan yang harus diproses oleh `shader` dan `GPU`. Karena itu, menambah light harus selalu dipertimbangkan dari dua sisi: **visual** dan **performa**.

Sebelum lanjut, hal penting yang harus dipahami adalah: lighting bukan sekadar membuat scene terang. Lighting adalah cara kita mengarahkan perhatian, membentuk kedalaman, dan membuat material serta bayangan terlihat lebih natural.

### Inti yang Harus Ditekankan

- Jangan menambah light hanya karena scene terlihat gelap.
- Tentukan **key/main light** terlebih dahulu sebagai acuan arah cahaya utama.
- Gunakan `local light` hanya untuk area yang benar-benar perlu dibantu.
- Evaluasi `shadow` dan `material` setelah pencahayaan disusun.
- Setiap light tambahan memengaruhi **readability** dan **performa rendering**.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa light harus ditambahkan secara sadar dan bertahap, kita akan lanjut ke konsep **Real-Time Lighting**, yaitu cara pencahayaan dihitung saat aplikasi berjalan dan dampaknya terhadap scene dinamis.

---

## Slide 019 - Real-Time Lighting

### Narasi

Pada tahap ini kita masuk ke **Real-Time Lighting**. Istilah **real-time** di sini berarti pencahayaan dihitung **saat aplikasi berjalan**, bukan hanya disiapkan sekali di awal. Artinya, ketika scene sedang dirender, sistem masih mengevaluasi bagaimana cahaya berinteraksi dengan objek yang ada.

Dalam konteks rendering pipeline, perhitungan ini biasanya terjadi setelah geometri objek sudah diproses dan fragment atau piksel kandidat sudah tersedia. Pada tahap itu, `shader` dapat menghitung intensitas cahaya, arah, dan warna yang diterima oleh permukaan. Karena itu, perubahan posisi objek, perubahan material, atau perubahan kondisi cahaya dapat langsung terlihat pada frame berikutnya.

Keuntungan utama dari **real-time lighting** adalah fleksibilitasnya. Pendekatan ini:

- cocok untuk `object` yang bergerak,
- memungkinkan `lighting` berubah selama aplikasi berjalan,
- mendukung scene yang bersifat dinamis.

Namun, fleksibilitas ini membawa konsekuensi. Karena perhitungan dilakukan saat `runtime`, sistem harus melakukan kerja tambahan setiap kali kondisi pencahayaan atau objek berubah. Konsekuensinya:

- membutuhkan perhitungan saat `runtime`,
- harus memperhatikan performa.

Setiap tambahan cahaya atau perubahan kondisi pencahayaan dapat menambah beban komputasi, terutama jika harus dihitung untuk banyak objek dan banyak piksel. Karena itu, **real-time lighting** bukan hanya soal membuat scene terlihat lebih terang atau lebih hidup, tetapi juga menjaga agar `frame rate` tetap stabil.

Sebelum lanjut, mahasiswa perlu memahami bahwa **real-time lighting** adalah trade-off antara fleksibilitas visual dan biaya performa. Konsep ini penting karena dalam aplikasi interaktif, keputusan pencahayaan harus dibuat cepat, biasanya setiap frame, tanpa membuat pengguna menunggu.

### Inti yang Harus Ditekankan

- **Real-time lighting** dihitung saat aplikasi berjalan, bukan hanya sekali saat setup.
- Cocok untuk objek bergerak, cahaya yang berubah, dan scene dinamis.
- Konsekuensinya adalah biaya komputasi `runtime`, sehingga performa harus diperhatikan.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan melihat kapan **real-time lighting** benar-benar cocok digunakan, misalnya untuk `flashlight`, `moving lamp`, transisi siang-malam, atau lampu alarm yang berubah sesuai kondisi scene.

---

## Slide 020 - Kapan Real-Time Lighting Cocok?

### Narasi

Kita sudah melihat bahwa **real-time lighting** dihitung saat aplikasi berjalan. Artinya, informasi cahaya tidak hanya dibuat sekali di awal, tetapi dapat berubah selama program berjalan.

Pendekatan ini penting ketika kondisi pencahayaan tidak bisa ditentukan sepenuhnya di awal. Jika posisi cahaya, intensitas cahaya, warna cahaya, atau objek yang diterangi berubah, maka hasil lighting yang sudah dihitung sebelumnya tidak lagi cukup.

Dalam konteks rendering pipeline, real-time lighting berarti perhitungan lighting harus dilakukan lagi setiap frame untuk fragment atau pixel yang terlihat. Karena itu, pendekatan ini sangat berguna untuk scene dinamis, tetapi juga menuntut perhatian terhadap performa.

Real-time lighting biasanya digunakan ketika:

- light bergerak,
- light dapat menyala atau mati,
- object utama bergerak,
- scene membutuhkan perubahan waktu,
- gameplay mengubah lighting.

Beberapa contoh yang mudah dibayangkan adalah:

```text
flashlight
moving lamp
day/night transition
alarm light
```

Pada contoh `flashlight`, cahaya mengikuti posisi pemain, sehingga arah dan jangkauan pencahayaan berubah setiap frame. Pada `moving lamp`, posisi sumber cahaya berubah dan dapat memengaruhi bayangan. Pada `day/night transition`, intensitas atau warna cahaya global berubah seiring waktu. Sementara itu, `alarm light` menunjukkan kasus di mana cahaya dapat menyala dan mati secara dinamis.

Intinya, real-time lighting cocok ketika perubahan lighting adalah bagian dari pengalaman visual atau gameplay. Namun, karena perhitungan dilakukan saat runtime, kita perlu memperhatikan jumlah light, kompleksitas scene, dan biaya rendering yang dihasilkan.

Sebelum lanjut, mahasiswa perlu memahami bahwa real-time lighting adalah pilihan untuk elemen yang berubah. Jika sebagian besar scene tidak berubah, maka ada pendekatan lain yang lebih hemat karena sebagian hasil lighting dapat disimpan terlebih dahulu.

### Inti yang Harus Ditekankan

- **Real-time lighting** cocok untuk light, object, atau kondisi scene yang berubah selama `runtime`.
- Perhitungan lighting dilakukan setiap frame, sehingga performa harus diperhatikan.
- Jika scene bersifat statis, pendekatan lain seperti **baked lighting** dapat menjadi lebih efisien.

### Transisi ke Slide Berikutnya

Jika lighting tidak perlu berubah setiap frame, kita tidak harus menghitung seluruhnya setiap saat. Untuk kasus seperti itu, slide berikutnya memperkenalkan **baked lighting**, yaitu cara menyimpan sebagian informasi lighting sebelumnya, terutama untuk **geometry statis**.

---

## Slide 021 - Baked Lighting

### Narasi

Kita masuk ke **`baked lighting`**, yaitu pendekatan lighting di mana sebagian informasi pencahayaan dihitung lebih dulu, sebelum scene dirender setiap `frame`.

Istilah *baked* di sini dapat dipahami sebagai proses menyiapkan hasil lighting di awal. Artinya, tidak seluruh perhitungan lighting harus dilakukan ulang setiap kali frame baru muncul. Hasil perhitungan tersebut disimpan, lalu digunakan kembali saat `runtime`.

Pendekatan ini penting dalam grafika komputer karena lighting sering menjadi bagian yang cukup berat dalam pipeline rendering. Jika sebagian informasi lighting sudah disiapkan sebelumnya, beban perhitungan saat rendering dapat berkurang. Dengan kata lain, **`baked lighting`** membantu scene tampil lebih efisien tanpa harus menghitung ulang semua aspek lighting setiap frame.

Yang juga perlu diperhatikan adalah bahwa **`baked lighting`** cocok terutama untuk **`geometry statis`**. Artinya, objek yang posisinya tidak berubah atau tidak bergerak secara signifikan adalah kandidat utama. Jika geometri berubah-ubah, hasil lighting yang sudah disimpan bisa menjadi tidak lagi sesuai, sehingga pendekatan ini tidak selalu ideal.

Sebelum lanjut, mahasiswa perlu memahami bahwa **`baked lighting`** bukan berarti seluruh lighting selesai dihitung. Yang utama adalah sebagian informasi lighting disimpan terlebih dahulu, sehingga proses rendering dapat memanfaatkan hasil yang sudah tersedia.

### Inti yang Harus Ditekankan

- **`Baked lighting`** menghitung sebagian informasi lighting sebelumnya, bukan seluruhnya setiap `frame`.
- Hasil perhitungan disimpan sehingga beban lighting saat rendering dapat berkurang.
- Pendekatan ini paling cocok untuk **`geometry statis`**, yaitu objek yang tidak berubah posisi atau bentuk secara signifikan.
- Poin penting: **`baked lighting`** adalah strategi efisiensi, bukan pengganti seluruh sistem lighting.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat ide dasar baking: bagaimana **`static geometry`**, **`lights`**, dan **`bake process`** menghasilkan **`precomputed lighting data`** yang kemudian dipakai saat **`runtime`**.

---

## Slide 022 - Ide Dasar Baking

### Narasi

Baking dapat dipahami sebagai strategi untuk **memindahkan sebagian perhitungan lighting** dari tahap `runtime` ke tahap persiapan. Dalam grafika komputer, menghitung pencahayaan yang realistis dapat cukup mahal, terutama jika dilakukan setiap `frame`. Karena itu, untuk objek yang tidak berubah posisi atau bentuknya, sebagian hasil lighting dapat disiapkan lebih dulu.

Diagram pada slide menunjukkan alur dasar dari proses ini:

```text
Static Geometry
+
Lights
+
Bake Process
      ↓
Precomputed Lighting Data
      ↓
Runtime
```

Alur ini dibaca dari atas ke bawah. Pertama, kita memiliki **Static Geometry**, yaitu geometri yang dianggap tetap selama adegan berjalan. Kedua, ada **Lights**, yaitu sumber cahaya yang menentukan bagaimana permukaan tersebut akan disinari. Ketiga, **Bake Process** menggabungkan informasi geometri dan cahaya untuk menghasilkan data lighting yang sudah dihitung sebelumnya.

Hasil dari proses tersebut adalah **Precomputed Lighting Data**. Data ini bukan cahaya yang benar-benar bergerak di scene, melainkan informasi pencahayaan yang sudah tersimpan dan siap dipakai. Pada tahap **Runtime**, sistem render tidak perlu menghitung ulang seluruh lighting dari awal. Sebagian informasi lighting sudah tersedia sebelum `frame` dirender.

Keuntungan utama dari ide ini adalah **efisiensi**. Karena sebagian lighting sudah disiapkan, beban perhitungan saat render dapat berkurang. Ini penting dalam rendering pipeline, terutama untuk adegan dengan banyak objek statis yang tetap terlihat selama waktu berjalan. Mahasiswa perlu memahami bahwa baking bukan berarti semua lighting dihitung sekali untuk selamanya, tetapi sebagian lighting yang cocok untuk kondisi statis dipindahkan ke tahap persiapan.

Intuisi visualnya sederhana: bayangkan sebuah ruangan dengan dinding, lantai, dan langit-langit yang tidak bergerak. Cahaya dari lampu tetap, bayangan tetap, dan pencahayaan sudut tetap. Informasi tersebut dapat disimpan, sehingga saat kamera bergerak, render tetap bisa berjalan lebih ringan.

### Inti yang Harus Ditekankan

- **Baking** adalah proses menyiapkan sebagian informasi lighting sebelum `runtime`.
- Input utamanya adalah **Static Geometry**, **Lights**, dan **Bake Process**.
- Outputnya adalah **Precomputed Lighting Data** yang dapat digunakan saat render.
- Keuntungan utamanya adalah mengurangi perhitungan lighting yang dilakukan setiap `frame`.
- Konsep ini paling relevan untuk geometri statis, karena informasi lightingnya tidak berubah-ubah.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bentuk konkret dari **Precomputed Lighting Data** tersebut, yaitu **Lightmap**, yang menyimpan informasi lighting untuk permukaan tertentu.

---

## Slide 023 - Lightmap

### Narasi

Setelah kita melihat ide dasar **baking**, langkah berikutnya adalah memahami bentuk data yang dihasilkan oleh proses tersebut. Bentuk itulah yang disebut **lightmap**.

**Lightmap** adalah `texture` yang menyimpan informasi lighting untuk permukaan tertentu. Artinya, lightmap bukan sumber cahaya, bukan material dasar, dan bukan geometri. Lightmap adalah hasil perhitungan pencahayaan yang sudah disimpan sebagai data gambar.

Konsep alurnya dapat dibaca dari atas ke bawah:

```text
Surface
  ↓
Lightmap UV
  ↓
Precomputed Lighting
  ↓
Texture Data
```

Pada tahap pertama, kita memiliki `Surface`, yaitu permukaan objek yang akan menerima pencahayaan. Selanjutnya, permukaan tersebut dipetakan melalui **Lightmap UV** ke area tertentu pada texture. Setelah itu, proses baking menghasilkan **Precomputed Lighting**, yaitu informasi cahaya yang sudah dihitung sebelumnya. Hasil akhirnya adalah **Texture Data**, yaitu lightmap yang bisa dibaca kembali saat rendering.

Dalam konteks **baked lighting**, lightmap menjadi penting karena sebagian informasi lighting sudah tersedia sebelum frame dirender. Saat `runtime`, renderer tidak perlu menghitung ulang seluruh pencahayaan statis untuk setiap pixel pada permukaan tersebut. Secara pipeline, lightmap dibaca pada tahap `shader` setelah `rasterization`, ketika fragmen pada permukaan membutuhkan nilai pencahayaan yang sudah disimpan.

Intuisi visualnya sederhana: bayangkan sebuah texture yang setiap pixel-nya menyimpan seberapa terang atau gelap suatu titik permukaan akibat cahaya statis. Texture ini kemudian ditempelkan ke permukaan objek melalui pemetaan UV. Karena itu, lightmap sangat cocok untuk `static geometry`, karena data yang sudah dibake tidak perlu berubah setiap frame selama pencahayaan statis tidak berubah.

Sebelum lanjut, yang perlu dipahami mahasiswa adalah bahwa lightmap adalah **data hasil lighting**, bukan proses lighting itu sendiri. Lightmap juga bergantung pada pemetaan UV yang benar, karena posisi data pada texture harus sesuai dengan posisi titik pada permukaan objek.

### Inti yang Harus Ditekankan

- **Lightmap** adalah `texture` yang menyimpan informasi lighting yang sudah dihitung sebelumnya.
- Alur utamanya adalah: `Surface` → **Lightmap UV** → **Precomputed Lighting** → **Texture Data**.
- Lightmap menjadi bagian penting dari **baked lighting** karena sebagian lighting dapat dibaca kembali saat `runtime` tanpa dihitung ulang.
- Lightmap bergantung pada pemetaan UV yang benar agar data pencahayaan menempel pada posisi permukaan yang tepat.

### Transisi ke Slide Berikutnya

Agar lightmap dapat menyimpan dan membaca data pencahayaan dengan benar, object membutuhkan pemetaan UV yang sesuai. Pada slide berikutnya kita akan membahas **Lightmap UV**, yaitu bagaimana permukaan objek dipetakan ke texture lightmap, termasuk pentingnya island yang cukup dan ruang antar-island.

---

## Slide 024 - Lightmap UV

### Narasi

Setelah kita memahami bahwa **lightmap** adalah texture yang menyimpan hasil lighting yang sudah dihitung, langkah berikutnya adalah memastikan permukaan objek memiliki **UV** yang cocok untuk lightmap. Tanpa UV yang baik, data cahaya tidak bisa dipetakan secara konsisten ke permukaan mesh.

**Lightmap UV** adalah koordinat 2D yang digunakan khusus untuk menempatkan data lightmap pada permukaan objek. Koordinat ini berbeda dari **UV texture** biasa yang biasanya dipakai untuk memetakan material, albedo, normal map, atau detail permukaan. Jadi, satu objek dapat memiliki lebih dari satu set UV: satu untuk texture visual, dan satu lagi untuk lightmap.

Dalam praktik, lightmap UV idealnya memiliki beberapa sifat:

- **tidak overlap secara tidak diinginkan**, karena overlap akan membuat dua bagian permukaan bersaing untuk area lightmap yang sama dan hasil lighting bisa salah atau pecah;
- **memiliki island yang cukup**, yaitu area UV yang terpisah untuk tiap bagian permukaan, sehingga detail cahaya dapat disimpan dengan resolusi memadai;
- **memberi ruang antar-island**, agar sampling lightmap tidak mengambil nilai dari island tetangga dan menimbulkan artefak seperti cahaya bocor antar area.

Kita bisa membayangkannya seperti memotong permukaan 3D menjadi beberapa lembar datar, lalu menyusun lembar-lembar itu ke dalam kanvas 2D. Kanvas tersebut adalah ruang lightmap. Jika lembaran terlalu rapat atau tumpang tindih, data cahaya yang disimpan di kanvas tidak lagi mewakili permukaan dengan benar.

Hal ini penting dalam **rendering pipeline** karena lightmap dibaca pada tahap shading atau material evaluation setelah geometri diproses. Saat fragment pada layar dihitung, sistem perlu tahu koordinat lightmap UV untuk mengambil warna cahaya yang sudah dibake. Jika UV lightmap buruk, objek mungkin terlihat gelap, terang tidak merata, atau memiliki transisi cahaya yang tidak masuk akal meskipun lighting scene sudah benar.

Sebelum lanjut ke teknik lighting yang lebih kompleks, mahasiswa perlu memahami bahwa **baked lighting** tidak hanya bergantung pada pencahayaan scene, tetapi juga pada kualitas UV lightmap. UV yang rapi membuat hasil bake lebih stabil, lebih mudah di-debug, dan lebih konsisten antar perangkat.

### Inti yang Harus Ditekankan

- **Lightmap UV** adalah koordinat khusus untuk memetakan data lightmap ke permukaan objek.
- UV lightmap berbeda tujuan dari **UV texture** biasa; yang satu untuk lighting, yang lain untuk material/visual.
- Lightmap UV yang baik harus **tidak overlap**, memiliki **island yang cukup**, dan memberi **ruang antar-island**.
- Kualitas UV lightmap memengaruhi hasil **baked lighting** dan dapat menyebabkan artefak jika salah.

### Transisi ke Slide Berikutnya

Jika lightmap sepenuhnya mengandalkan hasil bake, ada situasi di mana kita juga membutuhkan pencahayaan yang bisa berubah saat runtime. Karena itu, langkah berikutnya kita akan membahas **Mixed Lighting**, yaitu pendekatan yang menggabungkan **baked** dan **real-time** lighting.

---

## Slide 025 - Mixed Lighting

### Narasi

Setelah kita membahas bahwa lightmap membutuhkan UV yang rapi, kita masuk ke pertanyaan berikutnya: bagaimana jika scene tidak sepenuhnya statis? Di sinilah **Mixed Lighting** menjadi penting.

```text
Baked
+
Real-Time
```

Secara konsep, **Mixed Lighting** tidak memilih salah satu pendekatan secara mutlak. Ia menggabungkan **Baked lighting** dan **Real-Time lighting** dalam satu scene. **Baked lighting** adalah cahaya yang sudah dihitung sebelumnya, biasanya disimpan sebagai data seperti lightmap, sehingga sangat efisien untuk bagian scene yang tidak berubah. **Real-Time lighting** adalah cahaya yang dihitung saat rendering berlangsung, sehingga mampu mengikuti objek, kamera, atau sumber cahaya yang bergerak.

Pentingnya pendekatan ini dalam grafika komputer terletak pada keseimbangan antara **kualitas visual** dan **biaya komputasi**. Jika seluruh scene menggunakan real-time lighting, kualitas bisa baik tetapi beban rendering dapat meningkat, terutama untuk bayangan dan pencahayaan kompleks. Sebaliknya, jika seluruh scene hanya dibake, scene menjadi sangat efisien tetapi kurang fleksibel ketika ada objek dinamis. **Mixed Lighting** memberi jalan tengah: bagian statis mendapat pencahayaan yang kaya dan murah, sementara bagian dinamis tetap mendapat respons cahaya yang wajar.

Cara membaca rumus `Baked + Real-Time` adalah sebagai dua kontribusi pencahayaan yang digabungkan pada hasil akhir. Pada pipeline rendering, data **baked** biasanya sudah tersedia sebagai tekstur atau data pencahayaan yang siap dipakai, sedangkan **real-time** dihitung per frame untuk elemen yang membutuhkan. Jadi, yang kita lihat pada layar bukan hanya satu jenis cahaya, melainkan hasil kombinasi dari sumber pencahayaan yang berbeda.

Sebelum lanjut, hal yang perlu dipahami mahasiswa adalah bahwa **Mixed Lighting** bukan sekadar “menyalakan semua light”. Ia menuntut keputusan: bagian mana yang statis, bagian mana yang dinamis, dan jenis pencahayaan apa yang masih perlu dihitung real-time. Keputusan ini akan sangat memengaruhi performa, kualitas bayangan, dan konsistensi visual scene.

### Inti yang Harus Ditekankan

- **Mixed Lighting** menggabungkan **Baked** dan **Real-Time lighting** dalam satu scene.
- **Baked lighting** efisien untuk bagian statis karena sudah dihitung sebelumnya.
- **Real-Time lighting** dibutuhkan untuk objek atau cahaya yang bergerak dan harus dihitung saat rendering.
- Pendekatan ini adalah kompromi antara **kualitas visual**, **fleksibilitas**, dan **efisiensi performa**.
- Keputusan mixed lighting berkaitan langsung dengan pembagian elemen statis dan dinamis dalam scene.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan melihat kapan pendekatan ini benar-benar berguna, terutama pada scene yang sebagian besar statis tetapi tetap memiliki objek atau pencahayaan yang bergerak.

---

## Slide 026 - Kapan Mixed Lighting Berguna?

### Narasi

Dalam scene grafika komputer, jarang sekali seluruh objek benar-benar statis atau seluruhnya bergerak. Karena itu, **Mixed Lighting** biasanya muncul ketika kita menghadapi kondisi campuran: sebagian besar environment sudah tetap, tetapi ada player, beberapa object, atau elemen lighting yang masih berubah selama scene berjalan.

Pada contoh slide, kita bisa membayangkan scene seperti berikut:

- environment sebagian besar statis,
- player bergerak,
- beberapa object bergerak,
- sebagian lighting tetap,
- shadow tertentu masih diperlukan secara dinamis.

Kondisi ini penting karena jika seluruh scene memakai lighting real-time, biaya perhitungan cahaya dan bayangan setiap frame bisa menjadi tinggi. Sebaliknya, jika semuanya dibake, objek yang bergerak akan kehilangan respons terhadap perubahan cahaya secara langsung. **Mixed Lighting** hadir sebagai jalan tengah: bagian yang statis dapat memanfaatkan hasil precomputed, sementara bagian yang dinamis tetap dihitung secara real-time.

Dari sisi rendering pipeline, kita bisa memahaminya sebagai pembagian beban kerja. Objek dan area yang tidak berubah dapat memakai data lighting yang sudah disiapkan sebelumnya, sehingga GPU tidak perlu menghitung ulang seluruhnya setiap frame. Objek yang bergerak, seperti player atau object tertentu, tetap membutuhkan evaluasi lighting dan shadow yang lebih segar agar interaksi visualnya tetap benar. Dengan cara ini, scene tetap terasa hidup tanpa membebani performa secara berlebihan.

Inti yang perlu kita pegang adalah: **Mixed Lighting** bukan sekadar "campuran" secara teknis, melainkan keputusan desain berdasarkan kebutuhan scene. Kita memilihnya ketika fleksibilitas lighting dinamis masih diperlukan, tetapi efisiensi dari lighting precomputed juga ingin dijaga. Jadi, **Mixed Lighting** adalah kompromi antara fleksibilitas dan efisiensi.

### Inti yang Harus Ditekankan

- **Mixed Lighting** berguna ketika scene memiliki campuran objek statis dan dinamis.
- Lingkungan statis dapat memanfaatkan lighting precomputed, sementara player atau object bergerak tetap membutuhkan lighting dan shadow dinamis.
- Tujuannya menjaga keseimbangan antara kualitas visual, responsifitas, dan efisiensi performa.

### Transisi ke Slide Berikutnya

Setelah kita memahami kapan **Mixed Lighting** mulai berguna, langkah berikutnya adalah membandingkan `Real-Time`, `Baked`, dan `Mixed` secara lebih sistematis, terutama dari sisi tingkat dinamisme, precomputed lighting, dan kesesuaian dengan jenis scene.

---

## Slide 027 - Real-Time vs Baked vs Mixed

### Narasi

Kita sedang membandingkan tiga strategi pencahayaan: **Real-Time**, **Baked**, dan **Mixed**. Perbandingan ini penting karena menentukan seberapa banyak perhitungan cahaya dilakukan saat aplikasi berjalan, dan seberapa banyak hasil pencahayaan sudah disiapkan sebelumnya.

Pada tabel, kolom **Dinamis** menunjukkan seberapa besar cahaya dihitung langsung saat runtime. Semakin tinggi nilai dinamis, semakin responsif scene terhadap perubahan posisi objek atau cahaya, tetapi beban komputasi juga meningkat.

Kolom **Precomputed** menunjukkan seberapa banyak pencahayaan sudah dihitung lebih awal. Semakin tinggi precomputed, semakin ringan perhitungan saat runtime, tetapi scene menjadi kurang fleksibel jika ada banyak perubahan.

Tiga mode ini dapat dibaca sebagai berikut:

- **Real-Time**: pencahayaan dihitung terus-menerus saat scene berjalan, sehingga cocok untuk scene dinamis.
- **Baked**: pencahayaan sudah disiapkan sebelumnya, sehingga cocok untuk environment statis.
- **Mixed**: menggabungkan sebagian perhitungan real-time dan sebagian hasil precomputed, sehingga cocok untuk kombinasi kebutuhan.

Tidak ada satu pilihan yang selalu terbaik. Kita perlu memilih mode berdasarkan seberapa dinamis scene, target performa, dan bagian mana dari lighting yang benar-benar perlu berubah saat runtime.

### Inti yang Harus Ditekankan

- **Real-Time** memberi fleksibilitas tinggi untuk scene dinamis, tetapi lebih berat karena dihitung saat runtime.
- **Baked** lebih efisien untuk environment statis karena pencahayaan sudah disiapkan sebelumnya.
- **Mixed** adalah kompromi antara fleksibilitas dan efisiensi, cocok untuk kombinasi objek statis dan dinamis.
- Tidak ada satu pilihan yang selalu terbaik; keputusan harus mempertimbangkan kebutuhan visual dan performa.

### Transisi ke Slide Berikutnya

Setelah kita memahami bagaimana memilih mode pencahayaan, langkah berikutnya adalah memperhatikan **shadow**, karena bayangan membantu objek terlihat memiliki posisi, jarak, dan kontak yang benar dengan environment.

---

## Slide 028 - Shadow

### Narasi

Dalam grafika komputer, **shadow** bukan hanya efek gelap yang muncul di bawah objek. Ia adalah informasi visual yang membantu mata kita memahami hubungan spasial antara objek, cahaya, dan lingkungan.

Bayangkan sebuah objek 3D yang dirender tanpa bayangan. Meskipun posisi koordinatnya sudah benar, objek tersebut bisa terasa **melayang** karena tidak ada petunjuk bahwa ia sedang berada di atas permukaan tertentu. **Shadow** memberi sinyal visual bahwa objek memiliki **kontak dengan ground**.

Selain kontak, shadow juga membantu menunjukkan **posisi** dan **jarak**. Semakin dekat objek ke permukaan, bayangannya biasanya semakin jelas dan tajam. Semakin jauh, bayangan bisa menjadi lebih lembut atau tersebar, tergantung pada sumber cahaya dan pengaturan rendering.

Arah cahaya juga dapat terbaca dari shadow. Jika cahaya datang dari kiri atas, bayangan akan jatuh ke arah kanan bawah. Dengan membaca arah dan bentuk bayangan, kita dapat menilai apakah pencahayaan dalam scene terasa konsisten dengan posisi kamera dan lingkungan.

Bentuk shadow juga penting karena membantu memperkuat persepsi **bentuk objek**. Bayangan yang mengikuti siluet objek dapat membuat geometri terlihat lebih meyakinkan, terutama ketika objek memiliki bentuk yang kompleks. Dalam konteks **rendering pipeline**, shadow muncul dari interaksi antara geometri, sumber cahaya, dan proses shading yang umumnya diproses oleh **GPU**, tetapi pada tahap ini kita cukup memahami perannya sebagai penanda spasial.

Tanpa shadow yang tepat, objek dapat terlihat tidak menyatu dengan **environment**. Ia bisa tampak menempel, melayang, atau terpisah dari scene. Karena itu, shadow menjadi bagian penting dari **lighting** dan **material**, bukan sekadar tambahan estetika.

### Inti yang Harus Ditekankan

- **Shadow** membantu pembacaan spasial: posisi, jarak, kontak dengan `ground`, arah cahaya, dan bentuk objek.
- Tanpa shadow yang tepat, objek dapat terlihat **melayang** atau tidak menyatu dengan `environment`.
- Shadow adalah bagian dari **lighting** dan **shading** yang memperkuat realisme serta keterbacaan scene.

### Transisi ke Slide Berikutnya

Setelah kita memahami mengapa shadow penting, langkah berikutnya adalah membedakan dua peran dasar dalam bayangan: objek yang menghasilkan bayangan dan permukaan yang menerimanya. Konsep ini akan kita lihat pada **Cast dan Receive Shadow**.

---

## Slide 029 - Cast dan Receive Shadow

### Narasi

Setelah slide sebelumnya menekankan bahwa **shadow** membantu menunjukkan posisi, jarak, kontak dengan ground, dan arah cahaya, kita sekarang memisahkan peran shadow menjadi dua konsep sederhana: **Cast Shadow** dan **Receive Shadow**.

**Cast Shadow** berarti objek menghasilkan bayangan. Dalam contoh sederhana, karakter yang berada di atas ground dapat menghalangi cahaya sehingga terbentuk bayangan di bawahnya. Dalam konteks Unity, peran ini biasanya dikaitkan dengan pengaturan `Cast Shadows` pada renderer objek.

**Receive Shadow** berarti permukaan menerima bayangan. Ground, lantai, dinding, atau permukaan lain dapat menampilkan bayangan yang dihasilkan oleh objek lain. Jika permukaan tidak diizinkan menerima bayangan, maka bayangan tidak akan terlihat di permukaan tersebut meskipun objek di atasnya menghasilkan bayangan. Dalam Unity, peran ini biasanya dikaitkan dengan pengaturan `Receive Shadows`.

Kita bisa membaca contoh pada slide sebagai hubungan sederhana:

```text
Character
→ Cast

Ground
→ Receive
```

Artinya, `Character` berperan sebagai objek yang menghasilkan bayangan, sedangkan `Ground` berperan sebagai permukaan yang menampilkan bayangan tersebut. Hubungan ini penting karena shadow yang terlihat membutuhkan dua sisi: ada objek yang menghalangi cahaya, dan ada permukaan yang siap menerima bayangan.

Konsep ini penting dalam grafika komputer karena shadow membantu objek terlihat **menempel pada environment**. Jika hanya ada `Cast` tanpa `Receive`, bayangan tidak akan muncul di permukaan. Jika hanya ada `Receive` tanpa `Cast`, permukaan memang siap menerima bayangan, tetapi tidak ada objek yang menghasilkan bayangan.

Sebelum lanjut, kita perlu memahami bahwa **Cast** dan **Receive** bukan satu hal yang sama. `Cast` adalah kontribusi objek terhadap pembentukan bayangan, sedangkan `Receive` adalah kemampuan permukaan untuk menampilkan bayangan. Pemahaman ini menjadi dasar untuk pengaturan shadow yang lebih lanjut, termasuk seberapa jauh bayangan perlu dirender.

### Inti yang Harus Ditekankan

- **Cast Shadow**: objek menghasilkan bayangan, misalnya `Character`.
- **Receive Shadow**: permukaan menerima atau menampilkan bayangan, misalnya `Ground`.
- Shadow yang terlihat membutuhkan kombinasi: objek yang `Cast` dan permukaan yang `Receive`.
- Peran ini membantu objek terlihat menempel pada environment dan tidak tampak melayang.

### Transisi ke Slide Berikutnya

Jika `Cast` dan `Receive` menentukan apakah bayangan muncul, pertanyaan berikutnya adalah sampai seberapa jauh bayangan perlu dirender. Pada slide berikutnya, kita akan membahas **Shadow Distance**, yaitu batas jarak shadow dari camera untuk menjaga kualitas visual tanpa biaya rendering yang berlebihan.

---

## Slide 030 - Shadow Distance

### Narasi

Dalam rendering real-time, bayangan tidak selalu perlu dihitung sampai ujung scene. Jika kamera berada di lingkungan yang besar, objek yang sangat jauh dari pandangan biasanya tidak lagi memberikan kontribusi visual yang signifikan terhadap bayangan. Oleh karena itu, kita perlu membatasi sejauh mana shadow dipertahankan.

**Shadow Distance** adalah parameter yang menentukan batas jarak dari `camera` di mana shadow masih dirender. Secara intuitif, parameter ini bekerja seperti zona pengaruh: objek atau permukaan yang berada di dalam zona tersebut masih dapat menampilkan bayangan, sedangkan objek yang berada di luar zona tersebut tidak lagi memikul biaya rendering shadow.

Pentingnya konsep ini terletak pada keseimbangan antara kualitas visual dan performa. Shadow membutuhkan proses tambahan dalam pipeline rendering, misalnya perhitungan visibilitas terhadap sumber cahaya dan penentuan area yang berada dalam bayangan. Jika kita membiarkan shadow dihitung tanpa batas, GPU dapat melakukan pekerjaan yang tidak terlihat atau tidak diperlukan oleh mata pengguna.

Dengan mengatur `Shadow Distance`, kita bisa menjaga tampilan tetap natural di area yang dekat dengan kamera, sambil mengurangi beban komputasi di area yang jauh. Ini sangat relevan dalam grafika komputer real-time karena sumber daya GPU terbatas, dan setiap efek visual harus dipilih berdasarkan dampaknya terhadap pengalaman pengguna.

Yang perlu dipahami mahasiswa sebelum lanjut adalah bahwa `Shadow Distance` bukan sekadar “mematikan shadow”, melainkan strategi pengelolaan kualitas. Parameter ini membantu kita menentukan prioritas: shadow yang dekat biasanya lebih penting secara visual, sedangkan shadow yang jauh dapat dikurangi atau diabaikan tanpa merusak kesan utama scene.

### Inti yang Harus Ditekankan

- **Shadow Distance** menentukan seberapa jauh shadow dipertahankan dari `camera`.
- Tujuannya menjaga kualitas visual tanpa biaya rendering yang tidak perlu.
- Konsep ini penting untuk efisiensi performa dalam rendering real-time.
- Shadow yang dekat biasanya lebih relevan secara visual dibanding shadow yang jauh.

### Transisi ke Slide Berikutnya

Setelah kita membatasi sejauh mana shadow dirender, langkah berikutnya adalah menentukan seberapa tajam shadow itu sendiri. Di slide berikutnya, kita akan membahas **Shadow Resolution**, yaitu pengaruh resolusi terhadap ketajaman dan biaya rendering shadow.

---

## Slide 031 - Shadow Resolution

### Narasi

Setelah kita memahami `Shadow Distance`, langkah berikutnya adalah memahami seberapa tajam bayangan yang kita hasilkan. Di sini kita bicara tentang **Shadow Resolution**, yaitu resolusi data yang digunakan untuk merepresentasikan bayangan, biasanya dalam bentuk `shadow map` yang dibaca oleh GPU saat shading.

Secara intuitif, bayangan bukan sekadar area gelap di bawah objek. Bayangan terbentuk dari informasi cahaya yang terhalang oleh geometri. Semakin banyak detail informasi tersebut yang disimpan, semakin halus transisi antara area terang dan gelap. Sebaliknya, jika informasi terlalu sedikit, tepi bayangan akan terlihat kasar, berundak, atau tidak presisi.

Kita bisa membandingkan dua kondisi:

- **Resolusi rendah**
  - lebih ringan untuk diproses,
  - membutuhkan memori dan bandwidth lebih kecil,
  - tepi bayangan lebih kasar,
  - cocok untuk objek kecil, jarak jauh, atau target performa rendah.

- **Resolusi tinggi**
  - lebih detail dan tajam,
  - transisi bayangan lebih halus,
  - membutuhkan resource lebih banyak,
  - lebih cocok untuk objek utama, kamera dekat, atau target visual berkualitas tinggi.

Dalam pipeline rendering, `Shadow Resolution` memengaruhi tahap sebelum pixel akhirnya digambar. GPU perlu menyimpan dan membaca data bayangan yang lebih besar atau lebih padat ketika resolusi dinaikkan. Artinya, peningkatan ketajaman tidak gratis: ada biaya pada memori, bandwidth, dan waktu komputasi. Karena itu, penyesuaian resolusi shadow harus dilakukan dengan sadar, bukan sekadar menaikkan sampai maksimum.

Prinsip pentingnya adalah **sesuaikan dengan target visual**. Bayangan untuk karakter utama di dekat kamera bisa diberi resolusi lebih tinggi, sementara bayangan objek latar atau objek kecil bisa menggunakan resolusi lebih rendah. Dengan cara ini, kita menjaga kualitas di area yang paling terlihat oleh mata, tanpa membebani seluruh scene.

Sebelum lanjut, mahasiswa perlu memahami bahwa `Shadow Resolution` bukan hanya soal “tajam atau tidak tajam”. Ia adalah trade-off antara kualitas visual dan biaya rendering. Memahami trade-off ini penting karena dalam grafika komputer, hampir semua keputusan visual selalu berkaitan dengan performa.

### Inti yang Harus Ditekankan

- **Shadow Resolution** menentukan ketajaman dan halus tidaknya tepi bayangan.
- Resolusi rendah lebih ringan tetapi menghasilkan bayangan yang lebih kasar.
- Resolusi tinggi lebih detail tetapi membutuhkan resource lebih banyak.
- Pengaturan yang baik dilakukan berdasarkan target visual, jarak kamera, dan kebutuhan performa.

### Transisi ke Slide Berikutnya

Setelah memahami seberapa tajam bayangan yang kita hasilkan, langkah berikutnya adalah memastikan bayangan benar-benar “menempel” pada permukaan. Di slide berikutnya, kita akan membahas **Contact dan Grounding**, yaitu bagaimana shadow membantu objek terlihat benar-benar berada dalam scene.

---

## Slide 032 - Contact dan Grounding

### Narasi

Setelah kita melihat resolusi shadow, ada satu hal penting yang sering luput: shadow bukan sekadar efek gelap di bawah objek. Dalam scene 3D, bayangan membantu mata menilai apakah objek benar-benar menempel pada permukaan atau hanya melayang.

Alur yang ditampilkan di sini sederhana:

```text
Object
   ↓
Contact
   ↓
Ground
```

Baca alur ini dari atas ke bawah. **Object** adalah objek yang kita render. **Contact** adalah area di mana objek bertemu atau hampir menyentuh permukaan. **Ground** adalah permukaan tempat objek berada. Bayangan yang terbentuk di sekitar area kontak inilah yang membuat objek tampak “duduk” di atas ground, bukan menempel secara sembarangan.

Istilah yang ingin kita tekankan di sini adalah **visual grounding**. Grounding adalah kesan bahwa objek memiliki hubungan spasial yang benar dengan lingkungan sekitarnya. Tanpa contact shadow yang cukup, objek bisa terlihat seperti menempel di udara, terutama ketika pencahayaan dan tekstur ground tidak cukup membantu.

Dalam konteks rendering, konsep ini berkaitan langsung dengan tahap **shadowing**. Tahap ini menentukan area mana yang terhalang oleh objek terhadap cahaya. Semakin jelas area gelap di sekitar kontak objek dan ground, semakin kuat sinyal visual bahwa objek berada di posisi yang benar. Di sini kita belum masuk ke detail teknis perhitungan shadow; yang penting dipahami dulu adalah fungsi visualnya: shadow membantu meyakinkan mata bahwa objek dan ground berada dalam satu ruang.

Hal ini juga penting untuk evaluasi visual pada materi Unity. Ketika kita menilai scene, jangan hanya bertanya apakah ada shadow, tetapi apakah shadow cukup mendukung grounding. Jika objek terlihat melayang, penyebabnya bisa posisi objek, intensitas shadow, resolusi shadow, atau kurangnya penekanan pada area kontak.

### Inti yang Harus Ditekankan

- **Shadow** bukan hanya dekorasi, tetapi alat visual untuk menunjukkan posisi objek dalam scene.
- **Contact** adalah area pertemuan antara **Object** dan **Ground**, dan bayangan di area ini membantu objek tampak menempel.
- **Visual grounding** membuat objek terasa benar-benar berada dalam scene, bukan melayang.
- Dalam evaluasi rendering, kualitas grounding dipengaruhi oleh keberadaan, intensitas, dan kejelasan shadow di sekitar kontak objek.

### Transisi ke Slide Berikutnya

Setelah objek terasa benar-benar berada di dalam scene, langkah berikutnya adalah melihat bagaimana material objek merespons cahaya, lingkungan, shadow, emission, dan post-processing.

---

## Slide 033 - Material Response pada P13

### Narasi

Pada pertemuan ini, kita tidak mengulang definisi **Physically Based Rendering** dari awal. Konsep PBR sudah menjadi dasar pada Pertemuan 10, sehingga fokusnya bergeser ke evaluasi: bagaimana material dalam **Unity URP** benar-benar merespons cahaya, lingkungan, dan efek visual lainnya.

Dari slide sebelumnya, kita sudah melihat bahwa **shadow** membantu object terasa **grounded**, yaitu benar-benar berada dalam scene. Sekarang kita melangkah ke material yang menerima shadow tersebut. Yang ingin kita perhatikan adalah respons material terhadap beberapa sumber visual utama:

- `Directional Light`, `Point Light`, dan `Spot Light` yang menentukan arah, jangkauan, dan intensitas pencahayaan.
- `environment` yang memengaruhi refleksi, ambient contribution, dan kesan material berada dalam ruang.
- `shadow` yang membantu object terlihat menempel pada ground, bukan melayang.
- `emission` yang membuat material memancarkan cahaya sendiri.
- `post-processing` yang mengubah tampilan akhir setelah shading, misalnya tone mapping, bloom, atau color grading.

Dalam **pipeline rendering**, material bukan sekadar warna. Material adalah respons permukaan terhadap **light**, **view direction**, dan **scene context**. Ketika kita menguji material URP, kita sedang memeriksa apakah permukaan terlihat konsisten secara visual: apakah metalik terlihat seperti metalik, apakah diffuse terlihat lembut, apakah shadow memperkuat kontak dengan ground, dan apakah emission tidak merusak keseimbangan cahaya.

Sebelum lanjut ke shader atau material URP, penting untuk memahami bahwa evaluasi material selalu dilakukan dalam konteks pipeline: light masuk, material dihitung, shadow dan environment membentuk hasil, lalu post-processing memfinalkan tampilan. Jadi, slide ini menjadi jembatan dari konsep PBR ke praktik material di Unity.

### Inti yang Harus Ditekankan

- P13 bukan mengulang PBR, tetapi mengevaluasi respons material **Unity URP** terhadap cahaya dan lingkungan.
- Material harus diuji terhadap `Directional Light`, `Point Light`, `Spot Light`, `environment`, `shadow`, `emission`, dan `post-processing`.
- Evaluasi material bertujuan memastikan object terlihat **grounded**, konsisten, dan sesuai alur **pipeline rendering**.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat material URP yang bereaksi terhadap lighting, yaitu **URP Lit Material**, dengan konsep dasar bahwa **surface properties**, **light**, dan **view direction** menghasilkan **shaded result**.

---

## Slide 034 - URP Lit Material

### Narasi

Ketika kita ingin objek terlihat **bereaksi terhadap lighting** di Unity URP, langkah pertama yang penting adalah memastikan material menggunakan **shader yang sesuai dengan URP**. Dalam konteks materi ini, kita tidak membahas ulang PBR secara penuh, tetapi fokus pada bagaimana material URP merespons elemen lighting yang sudah ada. Jika material atau shader tidak sesuai, objek bisa terlihat tidak menerima cahaya, tidak menampilkan shadow dengan benar, atau tidak menunjukkan respons visual yang diharapkan.

Slide ini merangkum konsep dasarnya dalam bentuk yang sangat sederhana:

```text
Surface Properties
+
Light
+
View Direction
=
Shaded Result
```

Rumus ini bisa dibaca sebagai inti dari proses **shading**. Artinya, warna akhir yang kita lihat pada objek bukan hanya warna material yang kita set, tetapi hasil perhitungan dari beberapa informasi yang digabungkan oleh shader.

Kita bisa memahami komponen-komponennya sebagai berikut:

- **Surface Properties** adalah sifat permukaan material, misalnya warna atau karakteristik visual material itu sendiri.
- **Light** adalah cahaya yang datang ke objek, baik dari directional light, point light, spot light, maupun sumber cahaya lain yang tersedia di scene.
- **View Direction** adalah arah pandang dari kamera atau penonton, yang memengaruhi bagaimana material terlihat dari sudut tertentu.
- **Shaded Result** adalah warna akhir objek setelah semua informasi tersebut diproses oleh shader.

Dalam rendering pipeline, konsep ini berada pada tahap **shading**, yaitu tahap di mana GPU menghitung tampilan visual objek berdasarkan material, cahaya, dan posisi kamera. Jadi, material URP Lit bukan sekadar “warna objek”, melainkan material yang siap menerima perhitungan lighting sehingga objek dapat terlihat lebih realistis dan responsif terhadap scene.

Sebelum lanjut, hal yang perlu kita pegang adalah: **material yang bereaksi terhadap lighting harus menggunakan shader yang kompatibel dengan URP**, dan hasil akhirnya selalu bergantung pada kombinasi **surface properties**, **light**, dan **view direction**.

### Inti yang Harus Ditekankan

- Gunakan **material/shader yang sesuai dengan URP** agar objek dapat bereaksi terhadap lighting.
- Konsep dasarnya adalah **Surface Properties + Light + View Direction = Shaded Result**.
- **Shaded Result** bukan warna statis, tetapi hasil perhitungan shading oleh shader.
- Material URP Lit penting karena memungkinkan objek menerima respons visual dari cahaya dan arah pandang.

### Transisi ke Slide Berikutnya

Setelah kita memahami bahwa material URP Lit membutuhkan **surface properties**, **light**, dan **view direction** untuk menghasilkan tampilan yang benar, kita perlu melangkah ke sumber cahaya lain yang sering kali tidak terlihat langsung. Pada slide berikutnya, kita akan membahas **environment lighting**, yaitu kontribusi cahaya ambient atau environment yang membantu area yang tidak terkena cahaya langsung agar tidak selalu terlihat hitam.

---

## Slide 035 - Environment Lighting

### Narasi

Saat kita men-render objek 3D, permukaan objek tidak hanya menerima cahaya dari sumber yang kita atur secara langsung. Cahaya langsung ini sering disebut **direct light**, karena arahnya dan intensitasnya dapat kita kendalikan secara eksplisit. Namun, dalam scene yang natural, area yang tidak terkena direct light tidak selalu menjadi hitam total. Ada kontribusi cahaya lain yang datang dari lingkungan sekitar, dan inilah yang dimaksud dengan **environment lighting**.

Kita bisa menghubungkannya dengan konsep shading sebelumnya. Hasil shading dapat dipandang sebagai kombinasi `Surface Properties`, `Light`, dan `View Direction`. Pada slide ini, komponen `Light` diperluas: selain direct light, ada **ambient/environment contribution** yang berasal dari lingkungan. Kontribusi ini membantu mengisi area yang tidak disinari langsung, sehingga objek tetap terbaca meskipun berada di bayangan.

Pentingnya environment lighting dalam grafika komputer adalah ia menjaga scene agar tidak terlalu kontras. Tanpa kontribusi lingkungan, bagian objek yang tidak terkena direct light bisa tampak gelap pekat. Padahal, dalam dunia nyata selalu ada cahaya dari langit, pantulan lingkungan, atau energi cahaya sekitar yang masuk ke permukaan objek. Dengan environment lighting, detail pada area gelap tetap terlihat dan material tidak hilang.

Secara visual, kita bisa membayangkan objek yang berada di bawah cahaya matahari. Sisi yang menghadap sumber cahaya langsung akan lebih terang. Sisi yang membelakangi sumber cahaya tidak langsung menjadi hitam, karena masih menerima kontribusi dari lingkungan. Environment lighting berperan sebagai **fill lighting**, yaitu cahaya pengisi yang memperkecil perbedaan antara area terang dan area gelap.

Selain fungsi teknis, environment lighting juga memengaruhi **warna suasana** scene. Lingkungan yang hangat, dingin, atau netral akan memberi kesan berbeda pada objek yang sama. Karena itu, environment lighting tidak hanya membuat objek terlihat, tetapi juga membantu membangun mood visual.

Terakhir, environment lighting mendukung **integrasi scene**. Objek dengan material, posisi, dan pencahayaan langsung yang berbeda akan terasa lebih menyatu ketika ada kontribusi lingkungan yang konsisten. Dalam pipeline rendering, kontribusi ini menjadi bagian dari perhitungan warna akhir sebelum ditampilkan, sehingga hasil render lebih koheren.

Sebelum lanjut, hal yang perlu dipahami mahasiswa adalah: direct light dan environment lighting bukan hal yang saling menggantikan, melainkan saling melengkapi. Direct light memberi arah, bentuk, dan bayangan, sedangkan environment lighting menjaga agar area yang tidak disinari langsung tetap terbaca dan scene tidak pecah secara visual.

### Inti yang Harus Ditekankan

- **Direct light** memberi pencahayaan langsung yang membentuk area terang, bayangan, dan arah cahaya.
- **Environment lighting** memberikan **ambient/environment contribution** agar area yang tidak terkena cahaya langsung tidak selalu hitam.
- Environment lighting berfungsi sebagai **fill lighting**, membantu **warna suasana**, dan memperkuat **integrasi scene**.
- Dalam shading, lingkungan menjadi bagian dari komponen cahaya yang memengaruhi hasil akhir objek.

### Transisi ke Slide Berikutnya

Setelah memahami peran environment lighting secara umum, kita akan melihat bagaimana konsep ini diterapkan pada scene siang hari, yaitu **Day Environment**, di mana direct light biasanya lebih dominan dan lingkungan relatif terang.

---

## Slide 036 - Day Environment

### Narasi

Pada lingkungan siang, cahaya utama biasanya berasal dari matahari yang dalam Unity sering direpresentasikan sebagai `Directional Light`. Karena matahari berada sangat jauh, arah cahayanya dianggap paralel, sehingga satu `Directional Light` sudah cukup memberi kesan pencahayaan global yang konsisten pada seluruh scene.

Selain cahaya langsung, scene siang tetap membutuhkan **environment contribution** yang relatif terang. Ambient atau environment contribution membantu area yang tidak terkena cahaya langsung agar tidak menjadi hitam pekat. Dengan lingkungan yang terang, objek tetap terbaca meskipun berada di bayangan, dan scene terasa lebih terbuka.

**Shadow** pada siang hari biasanya lebih jelas karena sumber cahaya kuat dan arahnya dominan. Bayangan membantu kita memahami bentuk objek, kedalaman, serta posisi objek terhadap lantai atau objek lain. Namun, shadow tidak boleh terlalu gelap atau terlalu tajam sampai membuat detail objek hilang.

Warna pada **day environment** cenderung natural, artinya warna material dan pencahayaan tidak berlebihan. **Kontras terkontrol** juga penting: area terang dan gelap tetap ada, tetapi jaraknya tidak ekstrem. Tujuannya agar scene mudah dibaca, nyaman dilihat, dan tidak membingungkan secara visual.

Dalam konteks rendering pipeline, pengaturan ini memengaruhi bagaimana warna akhir pixel dihitung. Intensitas cahaya, warna ambient, dan shadow bersama-sama menentukan tampilan objek di layar. Jadi, day environment bukan sekadar membuat scene terang, tetapi menyeimbangkan direct light, environment, shadow, dan warna agar hasil render tetap terbaca.

### Inti yang Harus Ditekankan

- `Directional Light` berperan sebagai matahari dan menjadi cahaya dominan pada scene siang.
- Environment yang relatif terang membantu area tanpa cahaya langsung tetap terbaca.
- Shadow harus jelas, tetapi tidak menghilangkan detail objek.
- Warna natural dan kontras terkontrol membuat scene mudah dibaca dengan kesan terang dan terbuka.

### Transisi ke Slide Berikutnya

Setelah memahami karakter siang yang terang dan terbuka, kita akan melihat bahwa night environment tidak cukup dibuat hanya dengan menurunkan brightness. Pada slide berikutnya, kita akan membahas keputusan visual yang dibutuhkan untuk scene malam.

---

## Slide 037 - Night Environment

### Narasi

Dalam lingkungan malam, kesalahan yang paling sering muncul adalah menganggap cukup menurunkan intensitas cahaya siang. Jika kita hanya melakukan:

```text
Day Scene
×
Brightness 0.1
```

maka hasilnya memang akan terlihat lebih gelap. Namun, scene tersebut belum tentu terbaca sebagai malam yang benar. Yang terjadi sering kali hanya scene yang kurang cahaya, bukan scene yang memiliki suasana malam.

Night scene membutuhkan keputusan visual yang lebih sadar. Kita tidak hanya mengurangi cahaya, tetapi juga mengatur ulang peran cahaya dalam scene. Beberapa keputusan penting yang perlu diperhatikan adalah:

- **Key light** lebih lemah, sehingga pencahayaan utama tidak lagi mendominasi seperti pada siang hari.
- **Local lights** menjadi lebih penting, karena mereka membantu membentuk area yang tetap bisa dibaca oleh mata.
- **Area gelap** tetap perlu terbaca, bukan benar-benar hilang menjadi hitam pekat.
- **Highlight** menjadi **focal point**, yaitu bagian yang paling menarik perhatian dalam scene.
- **Warna** dapat lebih dingin, sehingga memperkuat kesan malam dan membedakan suasana dari scene siang.

Dalam grafika komputer, hal ini penting karena pencahayaan bukan hanya soal membuat objek terlihat. Pencahayaan menentukan bagaimana material merespons cahaya, bagaimana kontras terbentuk, dan bagaimana mata penonton membaca ruang. Pada scene malam, cahaya yang lemah membuat perbedaan antara area terang dan area gelap menjadi lebih krusial. Jika semua area sama-sama gelap, scene akan terasa datar dan sulit dibaca.

Kita juga perlu memahami bahwa night scene bukan hanya masalah intensitas global. Pencahayaan malam biasanya lebih bergantung pada sumber cahaya lokal, kontras, dan penekanan pada area tertentu. Dengan kata lain, malam bukan sekadar scene yang digelapkan, melainkan scene yang disusun ulang agar tetap memiliki fokus visual.

Sebelum lanjut, mahasiswa perlu memahami satu hal penting: dalam night environment, keputusan visual lebih penting daripada sekadar menurunkan brightness. Kita harus memikirkan apa yang ingin dilihat penonton, area mana yang harus tetap terbaca, dan bagian mana yang boleh menjadi gelap.

### Inti yang Harus Ditekankan

- Night scene bukan hanya `Day Scene × Brightness 0.1`.
- Pencahayaan malam membutuhkan keputusan visual, bukan hanya pengurangan intensitas global.
- **Local lights**, **highlight**, dan **area gelap yang tetap terbaca** menjadi kunci keterbacaan scene.
- Warna yang lebih dingin dapat membantu memperkuat suasana malam.
- Tujuan utama night scene adalah menjaga fokus visual, bukan hanya membuat scene terlihat gelap.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa night scene bukan sekadar scene yang digelapkan, langkah berikutnya adalah menyusun prioritas cahaya. Di slide berikutnya, kita akan melihat bagaimana lighting dapat dipikirkan sebagai hierarchy, sehingga setiap cahaya memiliki peran yang jelas dalam membentuk fokus visual.

---

## Slide 038 - Lighting Hierarchy

### Narasi

Dalam lighting, kita bisa membaca diagram ini sebagai **urutan prioritas visual**, bukan urutan teknis eksekusi:

```text
Primary Light
     ↓
Secondary / Local Lights
     ↓
Environment Fill
     ↓
Accent
```

Artinya, cahaya tidak perlu diperlakukan sama. Ada cahaya yang bertugas membentuk scene, ada yang membantu detail, ada yang menjaga area gelap tetap terbaca, dan ada yang hanya menjadi titik fokus.

**`Primary Light`** biasanya menjadi cahaya utama. Cahaya ini menentukan arah utama, siluet objek, dan kesan bentuk dasar scene. Jika `Primary Light` terlalu lemah atau terlalu banyak cahaya yang bersaing dengannya, scene bisa kehilangan arah.

**`Secondary / Local Lights`** bekerja pada area tertentu. Misalnya lampu lokal, cahaya dari jendela, atau sumber cahaya kecil yang memperkuat detail. Cahaya ini penting terutama ketika `Primary Light` tidak cukup untuk menjelaskan semua bagian scene.

**`Environment Fill`** menjaga agar bagian yang tidak terkena cahaya langsung tidak menjadi hitam pekat. Fill ini membantu scene tetap terbaca, tetapi biasanya tidak boleh terlalu kuat sehingga tidak menutupi cahaya utama.

**`Accent`** adalah cahaya atau highlight kecil yang sengaja dibuat menonjol. Accent bisa menjadi focal point, misalnya neon, rim light, atau highlight pada objek penting. Perannya bukan menerangi seluruh scene, melainkan memandu mata penonton.

Dalam konteks rendering pipeline, hierarchy ini memengaruhi tahap **shading** dan **lighting**, yaitu saat warna dan intensitas cahaya dihitung pada permukaan objek setelah geometri diproses. Keputusan hierarchy membantu kita mengatur intensitas, warna, bayangan, dan keseimbangan cahaya sebelum image final dihasilkan.

Intinya, **lighting hierarchy** adalah alat desain visual. Tujuannya agar scene tidak datar, tidak berisik, dan tetap memiliki fokus yang jelas.

### Inti yang Harus Ditekankan

- **Lighting hierarchy** adalah prioritas visual: `Primary Light`, `Secondary / Local Lights`, `Environment Fill`, lalu `Accent`.
- Tidak semua lampu harus sama kuat; kekuatan cahaya harus mendukung **fokus visual**.
- Hierarchy membantu scene tetap terbaca, terutama pada area gelap dan highlight penting.
- Dalam pipeline, hierarchy memengaruhi tahap **shading** dan **lighting** sebelum final image.

### Transisi ke Slide Berikutnya

Setelah hierarchy lighting menentukan struktur cahaya scene, kita akan melihat tahap berikutnya: apa yang terjadi setelah scene utama sudah dirender, yaitu **Post Processing**.

---

## Slide 039 - Post Processing

### Narasi

Setelah scene utama dirender, masih ada tahap penting sebelum gambar sampai ke layar. Tahap ini disebut **Post Processing**. Secara sederhana, ia bekerja pada hasil render, bukan pada pembentukan scene itu sendiri.

Kita bisa membacanya sebagai alur pipeline:

```text
Rendered Scene
     ↓
Post Processing
     ↓
Final Image
```

Pada tahap pertama, `Rendered Scene` adalah gambar yang sudah dihasilkan dari proses rendering utama. Gambar ini sudah memuat objek, warna, pencahayaan, dan hasil visual yang terbentuk dari scene.

Selanjutnya, `Post Processing` melakukan penyesuaian terhadap gambar tersebut. Proses ini bekerja pada hasil render, sehingga pengaruhnya terlihat pada tampilan keseluruhan frame sebelum ditampilkan sebagai gambar akhir.

Beberapa hal yang dapat diubah oleh post-processing antara lain:

- **tone**, yaitu terang-gelap atau kontras keseluruhan gambar;
- **warna**, termasuk nuansa visual yang ingin ditampilkan;
- **highlight**, yaitu bagian-bagian terang yang bisa dibuat lebih menonjol atau lebih lembut;
- **depth cue**, yaitu petunjuk kedalaman yang membantu objek terasa lebih dekat atau jauh;
- **mood**, yaitu suasana visual yang ingin disampaikan.

Penting untuk dipahami bahwa post-processing bukan pengganti lighting atau material. Ia berada setelah scene dirender, sehingga perannya lebih ke penyempurnaan tampilan akhir. Dalam pipeline grafika komputer, tahap ini membantu mengubah `Rendered Scene` menjadi `Final Image` yang lebih sesuai dengan tujuan visual.

### Inti yang Harus Ditekankan

- **Post Processing** adalah tahap setelah `Rendered Scene` dan sebelum `Final Image`.
- Ia mengubah tampilan visual seperti **tone**, **warna**, **highlight**, **depth cue**, dan **mood**.
- Fokusnya adalah penyempurnaan gambar akhir, bukan mengubah geometri atau logika scene secara langsung.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana efek post-processing ini biasanya dikonfigurasi dalam Unity, khususnya melalui sistem **Volume** pada URP.

---

## Slide 040 - Volume pada URP

### Narasi

Pada tahap post-processing, kita sudah melihat bahwa scene yang dirender masih dapat diubah sebelum menjadi final image. Di URP, pengaturan efek-efek tersebut biasanya tidak dilakukan secara lepas, tetapi diorganisasi melalui sistem **Volume**.

Volume dapat dipahami sebagai wadah konfigurasi untuk post-processing. Secara sederhana, alurnya adalah:

```text
Volume
  ↓
Profile
  ↓
Overrides
  ↓
Bloom
Color Adjustments
Tonemapping
Depth of Field
...
```

Kita bisa membaca diagram ini dari atas ke bawah. **Volume** adalah titik masuk pengaturan. Di dalamnya terdapat **Profile**, yaitu kumpulan parameter yang mengatur bagaimana efek diterapkan. Selanjutnya, **Overrides** menentukan efek mana yang aktif dan bagaimana nilainya disesuaikan. Setelah itu, efek seperti `Bloom`, `Color Adjustments`, `Tonemapping`, dan `Depth of Field` menjadi bagian yang dapat dikonfigurasi.

Penting untuk membedakan antara **Volume**, **Profile**, dan **Overrides**. Volume bukan efek visual itu sendiri, melainkan struktur yang menampung pengaturan. Profile berisi konfigurasi, sedangkan Overrides adalah lapisan yang memungkinkan kita menyalakan atau mengubah parameter efek tertentu. Dengan pemisahan ini, pengaturan post-processing menjadi lebih rapi dan mudah dikendalikan.

Dalam konteks rendering pipeline, Volume berada setelah scene utama dirender. Artinya, objek, kamera, transformasi, lighting, dan material sudah menghasilkan citra awal. Volume lalu membantu mengatur bagaimana citra tersebut diubah sebelum ditampilkan, misalnya melalui penyesuaian warna, tone, atau efek tertentu. Hal ini penting karena post-processing memengaruhi tampilan akhir tanpa mengubah geometri scene secara langsung.

Sebelum lanjut ke efek tertentu, mahasiswa perlu memahami bahwa **Volume** adalah mekanisme konfigurasi, bukan satu efek spesifik. Efek seperti Bloom, Color Adjustments, Tonemapping, dan Depth of Field adalah contoh parameter yang dapat diatur melalui Overrides. Dengan memahami struktur ini, kita dapat melihat bahwa URP memisahkan “di mana efek diatur” dari “efek apa yang dijalankan”.

### Inti yang Harus Ditekankan

- **Volume** adalah sistem konfigurasi untuk efek post-processing pada URP.
- Alur utamanya adalah **Volume → Profile → Overrides → efek tertentu**.
- **Overrides** menentukan efek mana yang aktif dan bagaimana parameternya diubah.
- Volume bukan efek visual, melainkan wadah pengaturan yang membuat post-processing lebih terstruktur.

### Transisi ke Slide Berikutnya

Salah satu efek yang dapat diatur melalui Overrides adalah **Bloom**. Pada slide berikutnya, kita akan melihat bagaimana Bloom bekerja untuk memberikan glow pada area yang sangat terang.

---

## Slide 041 - Bloom

### Narasi

**Bloom** adalah efek post-processing yang memberi kesan cahaya menyala atau `glow` pada bagian layar yang sangat terang. Dalam alur rendering, efek ini biasanya bekerja setelah gambar adegan sudah terbentuk: area dengan kecerahan tinggi diambil, lalu ditambahkan cahaya lembut yang menyebar ke sekitarnya. Hasilnya, objek tidak hanya terlihat terang, tetapi seolah memancarkan energi cahaya.

Dalam Unity URP, Bloom umumnya diatur sebagai salah satu override di dalam **Volume Profile**. Artinya, kita tidak perlu mengubah seluruh scene secara global; cukup menentukan di mana dan seberapa kuat efek bloom diterapkan. Ini penting karena bloom sangat bergantung pada konteks visual: terlalu kuat bisa membuat gambar kehilangan detail, terlalu lemah bisa membuat adegan terasa datar.

Bloom paling cocok digunakan untuk elemen yang memang seharusnya terlihat menyala, misalnya:

- lampu,
- neon,
- material emissive,
- highlight tertentu.

Pada kasus ini, bloom membantu memperkuat kesan bahwa objek tersebut adalah sumber cahaya atau memiliki intensitas tinggi. Ia tidak dimaksudkan untuk memperbaiki pencahayaan yang salah, tetapi untuk menambah karakter visual pada area yang memang sudah terang.

Secara intuisi visual, kita bisa membayangkan bloom sebagai "halo" tipis di sekitar objek terang. Jika sebuah lampu berada di ruangan gelap, bloom membuat cahaya lampu terasa lebih hidup dan lebih mudah dibaca oleh mata. Dalam grafika komputer, hal ini penting karena membantu menekankan **brightness energy**, yaitu kesan energi kecerahan yang membuat adegan lebih dramatis dan lebih natural.

Sebelum lanjut, yang perlu dipahami adalah bahwa bloom bekerja pada hasil render, bukan pada geometri atau material secara langsung. Ia membaca kecerahan pada gambar, lalu menambahkan efek glow. Karena itu, pengaturan bloom harus selalu dilihat bersama pencahayaan, material, dan tampilan akhir adegan.

### Inti yang Harus Ditekankan

- **Bloom** menghasilkan `glow` pada area yang sangat terang.
- Efek ini cocok untuk lampu, neon, material emissive, dan highlight tertentu.
- Bloom membantu menekankan **brightness energy**, bukan memperbaiki lighting yang salah total.
- Dalam URP, Bloom biasanya diatur melalui **Volume Profile** sebagai salah satu override post-processing.

### Transisi ke Slide Berikutnya

Setelah kita memahami bagaimana bloom memperkuat area terang, langkah berikutnya adalah mengatur karakter warna keseluruhan adegan. Di slide berikutnya, kita akan membahas **Color Adjustments**, yang digunakan untuk menyeimbangkan exposure, contrast, color filter, dan hue/saturation sebagai tahap final balancing.

---

## Slide 042 - Color Adjustments

### Narasi

Setelah **Bloom** memberi penekanan pada area yang sangat terang, kita masuk ke tahap yang lebih menyeluruh: **Color Adjustments**. Efek ini digunakan untuk mengatur **karakter warna keseluruhan** dari sebuah frame, bukan hanya menambah glow pada bagian tertentu.

Dalam alur rendering, Color Adjustments dapat dipahami sebagai tahap **post-processing** yang bekerja setelah gambar sudah dibentuk oleh geometri, rasterisasi, shading, dan lighting. Artinya, yang diubah di sini adalah nilai warna pada piksel hasil render, sehingga kita bisa menyesuaikan mood, kontras, dan keseimbangan visual tanpa mengubah model atau pencahayaan secara langsung.

Parameter yang umum digunakan antara lain:

- `exposure`, untuk mengatur tingkat terang keseluruhan, mirip pengaturan exposure pada kamera.
- `contrast`, untuk memperjauh atau mendekatkan jarak antara area gelap dan terang.
- `color filter`, untuk memberi tint atau grade warna pada seluruh gambar.
- `hue/saturation`, untuk menggeser warna dasar dan mengatur seberapa kuat warna tersebut tampil.

Penting untuk menekankan bahwa Color Adjustments paling tepat digunakan untuk **final balancing**. Jika pencahayaan sudah salah secara fundamental, misalnya sumber cahaya terlalu redup, arah bayangan tidak masuk akal, atau material tidak sesuai, maka masalahnya sebaiknya diperbaiki pada lighting, material, atau setup scene terlebih dahulu. Color Adjustments bisa membantu menyamarkan masalah, tetapi tidak seharusnya menjadi pengganti pencahayaan yang benar.

Secara praktis, kita bisa memperlakukan efek ini seperti proses color grading: mulai dari nilai yang netral, ubah satu parameter pada satu waktu, lalu amati dampaknya pada highlight, shadow, dan warna objek. Tujuannya adalah membuat gambar terasa lebih seimbang, terbaca, dan sesuai dengan suasana yang diinginkan, bukan sekadar membuat warna menjadi lebih mencolok.

### Inti yang Harus Ditekankan

- **Color Adjustments** mengatur karakter warna keseluruhan frame, bukan hanya efek lokal seperti glow.
- Parameter utamanya meliputi `exposure`, `contrast`, `color filter`, dan `hue/saturation`.
- Gunakan untuk **final balancing** visual, bukan untuk memperbaiki lighting yang salah secara total.

### Transisi ke Slide Berikutnya

Setelah warna dan keseimbangan gambar sudah diatur, langkah berikutnya adalah memastikan nilai terang yang sangat lebar tetap bisa ditampilkan dengan baik pada layar. Untuk itu, kita lanjut ke **Tonemapping**, yaitu proses yang mengubah rentang nilai terang menjadi output yang dapat ditampilkan.

---

## Slide 043 - Tonemapping

### Narasi

Setelah scene dirender, nilai warna yang dihasilkan oleh lighting dan shading tidak selalu berada dalam rentang yang bisa langsung ditampilkan oleh layar. Nilai terang bisa sangat kecil, bisa juga jauh lebih besar dari batas normal tampilan. Kondisi ini sering muncul pada adegan yang memiliki cahaya sangat terang, misalnya matahari, lampu kuat, atau highlight pada material.

Di sinilah **Tonemapping** berperan. Secara sederhana, tonemapping adalah proses mengubah **High Dynamic Range** menjadi **Display Range**. Artinya, nilai terang yang awalnya berada pada rentang luas dikompresi atau dipetakan ke rentang yang bisa ditampilkan oleh monitor, kamera, atau perangkat output.

Kita bisa membacanya dari diagram berikut:

```text
High Dynamic Range
       ↓
Tonemapping
       ↓
Display Range
```

Alurnya bergerak dari atas ke bawah. Pada tahap pertama, hasil rendering masih memiliki nilai terang yang sangat lebar. Pada tahap kedua, **Tonemapping** melakukan pemetaan nilai tersebut. Pada tahap ketiga, hasilnya menjadi **Display Range**, yaitu rentang warna yang siap ditampilkan secara visual.

Tujuan utamanya bukan sekadar membuat gambar lebih terang atau lebih gelap. Tonemapping membantu **menjaga highlight dan contrast** agar tampil lebih terkontrol. Tanpa tonemapping, area terang bisa menjadi putih polos tanpa detail, sementara area gelap bisa kehilangan tekstur. Dengan tonemapping, transisi antara terang dan gelap menjadi lebih natural dan lebih mudah dibaca oleh mata.

Dalam konteks rendering pipeline, tonemapping biasanya berada di tahap akhir, setelah lighting dan shading sudah menghasilkan nilai warna. Ia bekerja pada hasil visual yang sudah terbentuk, lalu membentuk karakter akhir gambar sebelum ditampilkan. Karena itu, tonemapping sangat penting untuk menghasilkan tampilan yang lebih seimbang, terutama pada scene dengan perbedaan terang yang besar.

Sebelum lanjut, hal penting yang perlu dipahami adalah bahwa tonemapping bukan alat untuk memperbaiki lighting yang salah secara total. Ia lebih berfungsi sebagai tahap penyesuaian akhir agar nilai terang yang sudah ada dapat ditampilkan dengan lebih baik dan lebih konsisten.

### Inti yang Harus Ditekankan

- **Tonemapping** mengubah rentang nilai terang yang luas menjadi rentang yang dapat ditampilkan.
- Proses ini penting untuk menjaga **highlight**, **contrast**, dan keseimbangan visual akhir.
- Tonemapping bekerja pada hasil rendering, biasanya di tahap akhir sebelum output ditampilkan.
- Tujuannya bukan memperbaiki lighting yang salah, tetapi membentuk tampilan akhir agar lebih terkontrol.

### Transisi ke Slide Berikutnya

Setelah nilai terang dikompresi ke rentang tampilan, kita akan melihat efek visual lain yang memengaruhi persepsi kedalaman, yaitu **Depth of Field**.

---

## Slide 044 - Depth of Field

### Narasi

**Depth of Field** adalah efek visual yang membuat satu bagian adegan tampak tajam, sementara bagian lain menjadi blur. Dalam konteks grafika komputer, efek ini meniru perilaku kamera optik: lensa hanya bisa memfokuskan cahaya dari jarak tertentu dengan paling tajam. Area yang berada tepat pada jarak fokus akan terlihat jelas, sedangkan area yang lebih dekat atau lebih jauh dari bidang fokus akan kehilangan ketajaman.

Pada slide, komponen visualnya ditampilkan sebagai `Near`, `Focus`, dan `Far`. Kita bisa membacanya sebagai tiga zona relatif terhadap kamera. `Near` adalah area dekat kamera, `Focus` adalah bidang atau jarak yang dipilih untuk tetap tajam, dan `Far` adalah area jauh dari kamera. Semakin jauh suatu titik dari zona `Focus`, semakin besar blur yang diharapkan. Dengan kata lain, fokus bukan sekadar “objek yang dipilih”, melainkan hubungan jarak antara kamera, objek, dan bidang fokus.

Efek ini penting dalam rendering karena membantu mengarahkan perhatian penonton. Tanpa Depth of Field, semua objek pada layar bisa terlihat sama tajam, sehingga komposisi menjadi datar dan kurang hierarkis. Dengan membuat objek utama fokus dan latar atau depan blur, kita bisa menekankan subjek, memberi kesan kedalaman, dan membuat adegan terasa lebih sinematik. Inilah alasan efek ini cocok untuk `cinematic shot`, `product-like composition`, dan `focal emphasis`.

Dalam pipeline rendering, Depth of Field biasanya berada pada tahap `post-processing`. Setelah scene dirender dan informasi visual seperti warna serta kedalaman tersedia, efek ini dapat menentukan seberapa blur setiap piksel berdasarkan jaraknya terhadap fokus. Intuisinya sederhana: piksel yang dekat dengan bidang fokus tetap tajam, sedangkan piksel yang berada di zona `Near` atau `Far` diberi blur yang lebih kuat. Jadi, yang perlu dipahami mahasiswa bukan hanya “bagian mana yang blur”, tetapi mengapa blur itu muncul dari hubungan jarak dan fokus.

Sebelum lanjut, hal penting yang harus dipahami adalah bahwa Depth of Field bukan sekadar filter blur acak. Ia adalah alat komposisi visual yang bergantung pada kamera, jarak fokus, dan distribusi kedalaman objek. Memahami hal ini akan membantu kita menilai kapan efek ini memperkuat cerita atau presentasi visual, dan kapan efek ini justru berlebihan jika digunakan tanpa tujuan.

### Inti yang Harus Ditekankan

- **Depth of Field** membuat area pada jarak fokus tetap tajam, sementara area `Near` dan `Far` menjadi blur.
- Efek ini berfungsi sebagai alat **focal emphasis** untuk mengarahkan perhatian dan memperkuat kesan kedalaman.
- Dalam pipeline, efek ini umumnya dipahami sebagai bagian dari **post-processing** yang memanfaatkan informasi kedalaman scene.

### Transisi ke Slide Berikutnya

Setelah kita membahas bagaimana Depth of Field mengatur fokus visual, langkah berikutnya adalah memperkuat kesan kontak antarobjek. Pada slide berikutnya, kita akan melihat **Ambient Occlusion**, yaitu efek yang menambah kegelapan pada area pertemuan atau cekungan tertentu agar objek terasa lebih menempel pada lingkungannya.

---

## Slide 045 - Ambient Occlusion

### Narasi

**Ambient Occlusion** adalah efek pencahayaan yang membuat area tertentu tampak lebih gelap karena cahaya ambient-nya seolah-olah terhalang oleh geometri di sekitarnya. Intuisinya sederhana: sudut, celah, dan permukaan yang saling berdekatan biasanya menerima cahaya lingkungan lebih sedikit dibandingkan permukaan terbuka.

Dalam adegan 3D, efek ini membantu kita membedakan mana bagian yang “menyatu” dengan lingkungan dan mana yang hanya berdiri sendiri. Misalnya, ketika objek menyentuh lantai, garis kontak di bawah objek menjadi lebih jelas. Begitu pula pada sudut dinding, celah sempit, atau area antar-prop, bayangan halus di area tersebut membuat bentuknya lebih mudah dibaca.

Kita bisa melihat Ambient Occlusion sebagai penguat **depth** dan **contact**. Tanpa efek ini, beberapa permukaan yang seharusnya berada di celah atau dekat objek lain bisa terlihat terlalu terang dan kurang memiliki rasa menempel. Dengan AO, mata lebih cepat menangkap kedalaman, posisi objek, dan hubungan antar-geometri.

Dalam konteks rendering, AO bukan cahaya utama yang datang dari arah tertentu, melainkan penyempurnaan pencahayaan ambient. Ia bekerja pada area pertemuan geometri, sehingga membantu material dan lighting terlihat lebih natural tanpa harus menambah banyak light tambahan.

Yang perlu dipahami sebelum lanjut adalah bahwa AO bukan sekadar membuat gambar lebih gelap. Tujuannya adalah memberi informasi visual tentang bentuk, kedalaman, dan kontak antar-objek. Jika area yang seharusnya terang menjadi gelap, atau area celah tidak cukup gelap, pembacaan adegan bisa menjadi kurang jelas.

### Inti yang Harus Ditekankan

- **Ambient Occlusion** membuat area pertemuan, cekungan, dan celah tampak lebih gelap karena cahaya ambient terhalang geometri sekitar.
- Efek ini penting untuk memperkuat **depth**, **contact**, dan pembacaan posisi objek dalam adegan 3D.
- Contoh yang paling mudah dikenali adalah sudut dinding, objek menyentuh lantai, celah sempit, dan area antar-prop.
- AO bukan pengganti main light, melainkan penyempurnaan pencahayaan ambient agar bentuk dan kontak antar-objek lebih natural.

### Transisi ke Slide Berikutnya

Setelah kita memahami bagaimana AO membantu memperkuat kedalaman dan kontak, langkah berikutnya adalah melihat bagaimana semua elemen visual ini disusun secara berurutan. Kita akan masuk ke workflow membangun look yang lebih aman, mulai dari material, light, environment, hingga post-processing.

---

## Slide 046 - Urutan Membangun Look

### Narasi

Sebelum masuk ke efek visual yang mencolok, kita perlu membangun **look** scene dari dasar yang benar. Dalam grafika komputer, tampilan akhir bukan hanya hasil dari satu parameter, tetapi hasil berurutan dari **material**, **pencahayaan**, **lingkungan**, **bayangan**, **eksposur**, dan **post-processing**. Urutan ini penting karena setiap tahap memberi dasar bagi tahap berikutnya.

Workflow yang lebih aman dapat dibaca sebagai berikut:

```text
1. Pastikan Material Benar
2. Atur Main Light
3. Atur Environment
4. Atur Local Lights
5. Periksa Shadow
6. Periksa Exposure
7. Tambahkan Post FX
8. Fine Tuning
```

Angka-angka ini sebaiknya dipahami sebagai **alur kerja**, bukan sekadar daftar. Tahap pertama adalah memastikan **material** sudah benar. Jika material salah, misalnya warna terlalu terang, terlalu gelap, atau tidak sesuai fungsi objek, maka pencahayaan yang kita atur nanti juga akan terlihat salah.

Setelah material benar, kita lanjut ke **main light**. Main light biasanya menjadi sumber cahaya utama yang menentukan arah, suasana, dan struktur visual scene. Setelah itu, kita atur **environment**, misalnya warna langit, intensitas ambient, atau kontribusi cahaya lingkungan, agar scene tidak terasa kosong atau terlalu datar.

Selanjutnya, kita atur **local lights** untuk menambah detail pencahayaan pada area tertentu. Setelah cahaya utama dan lingkungan sudah masuk, kita periksa **shadow** karena bayangan membantu memperkuat hubungan antarobjek dan rasa kedalaman. Setelah itu, kita periksa **exposure**, yaitu seberapa terang atau gelap hasil akhir yang masuk ke kamera.

Baru setelah semua dasar itu stabil, kita tambahkan **post FX** seperti bloom, color grading, atau efek visual lainnya. Post-processing memang bisa membuat scene lebih menarik, tetapi ia bukan fondasi. Jika kita mulai dari **Bloom** atau **Color Filter**, kita berisiko menutupi masalah dasar, misalnya material yang salah, cahaya yang tidak masuk akal, atau eksposur yang tidak seimbang.

Intinya, urutan ini membantu kita membangun look secara **terkendali** dan **mudah didiagnosis**. Jika tampilan scene belum benar, kita bisa kembali ke tahap yang paling mendasar sebelum menambah efek akhir.

### Inti yang Harus Ditekankan

- Bangun look dari **material**, **main light**, dan **environment** sebelum masuk ke efek akhir.
- **Post FX** seperti Bloom dan Color Filter adalah tahap akhir, bukan fondasi visual.
- Urutan kerja membantu kita mengisolasi masalah: jika tampilan salah, cek material, cahaya, bayangan, dan eksposur terlebih dahulu.
- Look yang baik dibangun secara bertahap, bukan dengan efek yang menutupi kesalahan dasar.

### Transisi ke Slide Berikutnya

Dengan urutan ini, kita siap masuk ke praktikum **Day/Night Scene**. Di slide berikutnya, kita akan membuat dua versi scene dengan **geometry**, **material dasar**, dan **komposisi kamera** yang sama, lalu membandingkan perbedaan yang muncul dari **lighting**, **environment**, **material tuning**, dan **post-processing**.

---

## Slide 047 - Praktikum: Day/Night Scene

### Narasi

Pada praktikum ini, kita akan membangun dua versi scene dari hasil Pertemuan 12, yaitu:

```text
P13_Day
P13_Night
```

Tujuannya bukan membuat dua dunia yang berbeda secara struktur, tetapi membuat dua kondisi visual yang bisa dibandingkan secara adil. Karena itu, **geometry** yang dipakai harus sama, **material dasar** harus konsisten, dan **camera composition** harus sebanding.

Dengan kata lain, kita sedang melakukan eksperimen visual yang terkontrol. Jika bentuk objek, posisi kamera, atau material dasar berubah, kita tidak akan tahu apakah perbedaan hasil berasal dari **lighting**, **material tuning**, **environment**, atau **post-processing**. Inilah alasan mengapa dua scene harus berangkat dari basis yang sama.

Perbedaan utama yang kita harapkan muncul dari pengaturan cahaya dan respons material terhadap cahaya. Pada `P13_Day`, scene biasanya lebih terang, kontras lebih jelas, dan detail geometri lebih mudah terbaca. Pada `P13_Night`, scene akan lebih gelap, tetapi bukan berarti hanya menurunkan brightness; kita juga perlu memperhatikan **shadow**, **environment**, dan bagaimana material bereaksi pada pencahayaan rendah.

Di sini, **post-processing** berperan sebagai tahap akhir yang membentuk mood visual. Namun, post-processing sebaiknya tidak dijadikan alat utama untuk menutupi masalah material atau lighting. Jika dasar scene sudah benar, efek seperti penyesuaian warna atau tone akan terasa lebih natural.

Sebelum lanjut, hal yang harus dipahami mahasiswa adalah: jangan mengubah elemen yang seharusnya tetap. Kita membandingkan dua look, bukan dua scene yang berbeda. Jika ada perubahan pada geometry, kamera, atau material dasar, perbandingan menjadi tidak valid.

### Inti yang Harus Ditekankan

- Gunakan scene hasil Pertemuan 12 sebagai basis bersama.
- Buat dua versi: `P13_Day` dan `P13_Night`.
- Pertahankan **geometry**, **material dasar**, dan **camera composition** yang konsisten.
- Perbedaan utama harus berasal dari **lighting**, **material tuning**, **environment**, dan **post-processing**.
- Tujuannya adalah perbandingan visual yang adil dan mudah dianalisis.

### Transisi ke Slide Berikutnya

Setelah kita memahami prinsip dasar perbandingan dua versi scene ini, langkah berikutnya adalah merinci urutan kerja praktikum. Slide berikutnya akan menunjukkan rencana praktis mulai dari menyiapkan scene P12, membangun day look, night look, hingga membandingkan hasilnya.

---

## Slide 048 - Rencana Praktikum

### Narasi

Rencana praktikum ini disusun agar mahasiswa membangun dua tampilan yang bisa dibandingkan secara adil, bukan sekadar menambahkan efek secara acak. Kita mulai dari `scene P12` sebagai baseline, lalu menghasilkan `Day Look` dan `Night Look` dengan geometri, komposisi kamera, dan material dasar yang konsisten. Dengan cara ini, perbedaan visual yang muncul dapat ditelusuri ke **lighting**, **environment**, **material tuning**, dan **post-processing**.

Alur kerja berikut mengikuti urutan rendering yang sederhana:

1. Gunakan `scene P12` sebagai dasar.
2. Buat `Day Look` untuk kondisi terang.
3. Buat `Night Look` untuk kondisi gelap.
4. Atur `shadow` agar bentuk objek dan ruang tetap terbaca.
5. Periksa `material response` untuk melihat bagaimana material bereaksi terhadap cahaya.
6. Buat `Global Volume` sebagai wadah efek post-processing.
7. Tambahkan `Bloom` untuk memperkuat highlight atau sumber cahaya.
8. Gunakan `Color Adjustments` + `Tonemapping` untuk menyeimbangkan warna, kontras, dan exposure.
9. Gunakan `DOF`/`AO` seperlunya untuk menambah kedalaman dan kontak bayangan.
10. Bandingkan hasil akhir dari kedua tampilan.

Pada langkah post-processing, `Global Volume` menjadi penting karena efek seperti `Bloom`, `Color Adjustments`, dan `Tonemapping` biasanya diterapkan setelah frame dirender. `Bloom` membantu membuat area terang terasa lebih hidup, terutama pada `Night Look`. `Color Adjustments` dan `Tonemapping` membantu menyatukan tampilan agar tidak terlalu gelap, terlalu terang, atau warnanya tidak konsisten. Sementara itu, `DOF` dan `AO` sebaiknya digunakan seperlunya agar tidak mengganggu kejelasan objek.

Sebelum lanjut, mahasiswa perlu memahami bahwa praktikum ini bukan hanya soal membuat scene terlihat indah, tetapi juga memahami bagaimana setiap tahap memengaruhi tampilan akhir. Detail teknis parameter tersedia pada modul praktikum, sehingga fokus utama di sini adalah alur kerja dan perbandingan hasil.

### Inti yang Harus Ditekankan

- `scene P12` menjadi baseline; geometri, kamera, dan material dasar harus konsisten.
- Perbedaan `Day Look` dan `Night Look` sebaiknya berasal dari **lighting**, **environment**, **material response**, dan **post-processing**.
- `Global Volume` adalah tempat efek seperti `Bloom`, `Color Adjustments`, `Tonemapping`, `DOF`, dan `AO` diterapkan.
- Perbandingan hasil akhir penting untuk memahami pengaruh setiap tahap dalam rendering pipeline.

### Transisi ke Slide Berikutnya

Setelah alur kerja praktikum ini dipahami, slide berikutnya akan merangkum benang merah dari `scene P12` hingga terbentuknya `Day Look` dan `Night Look`.

---

## Slide 049 - Ringkasan Pertemuan

### Narasi

Pada pertemuan ini, kita merangkum alur kerja visual di Unity melalui `Scene P12`. Benang merahnya adalah bagaimana sebuah scene dibangun dari pengaturan cahaya, bayangan, lingkungan, material, hingga purnaproses. Alurnya dapat dibaca sebagai berikut:

```text
Scene P12
↓
Lighting Mode
↓
Shadow + Environment
↓
Material Response
↓
Post Processing
↓
Day / Night Look
```

Artinya, sebelum membandingkan **Day Look** dan **Night Look**, kita perlu memastikan **Lighting Mode** yang digunakan sudah sesuai, misalnya real-time, baked, atau mixed. Setelah itu, **Shadow** dan **Environment** menentukan bagaimana cahaya berinteraksi dengan geometri dan atmosfer scene. **Material Response** kemudian menunjukkan bagaimana permukaan objek merespons cahaya, warna, dan tekstur.

Tahap terakhir adalah **Post Processing**, yang membantu membentuk mood visual akhir. Komponen seperti **Volume**, **Bloom**, **Color Adjustments**, **Tonemapping**, **Depth of Field**, dan **Ambient Occlusion** tidak menggantikan pencahayaan dasar, tetapi memperkuat kesan realistis atau artistik. Dengan alur ini, kita dapat melihat bahwa tampilan akhir scene bukan hanya hasil satu pengaturan, melainkan kombinasi dari pipeline visual yang saling memengaruhi.

### Inti yang Harus Ditekankan

- `Scene P12` menjadi dasar praktikum untuk membangun tampilan visual yang konsisten.
- **Lighting Mode** menentukan strategi pencahayaan: real-time, baked, atau mixed, termasuk penggunaan **lightmap**.
- **Shadow**, **environment**, dan **material response** membentuk interaksi cahaya dengan objek sebelum purnaproses.
- **Post Processing** seperti **Volume**, **Bloom**, **Color Adjustments**, **Tonemapping**, **DOF**, dan **AO** digunakan untuk memperkuat mood `Day / Night Look`.

### Transisi ke Slide Berikutnya

Dengan ringkasan ini, kita menutup pertemuan P13 dan siap melanjutkan ke materi berikutnya, yaitu **Unity Shader Graph**, yang akan membahas cara membuat material dan efek visual secara lebih langsung melalui shader.

---

## Slide 050 - TERIMA KASIH

### Narasi

Dengan ini kita menutup pertemuan ke-13 pada mata kuliah Grafika Komputer. Terima kasih atas partisipasi dan diskusi selama sesi ini. Pertemuan hari ini kita gunakan untuk melihat bagaimana elemen visual dalam Unity dapat dibentuk secara lebih sadar, bukan hanya sekadar menempatkan objek, tetapi juga mengatur cara cahaya, material, dan efek akhir saling bekerja.

Benang merah yang sudah kita susun sebelumnya cukup penting untuk diingat. Kita mulai dari **Lighting Mode**, kemudian melihat pengaruh **shadow** dan **environment**, bagaimana **material** merespons cahaya, dan bagaimana **post processing** mengubah tampilan akhir menjadi lebih dekat dengan suasana yang diinginkan, misalnya tampilan siang atau malam. Alur ini menunjukkan bahwa rendering bukan hanya soal geometri, tetapi juga tentang bagaimana cahaya dan efek visual membentuk persepsi pengguna terhadap scene.

Sebelum lanjut, ada beberapa hal yang sebaiknya benar-benar dipahami mahasiswa. Pertama, pahami bahwa **real-time lighting**, **baked lighting**, dan **mixed lighting** memiliki karakter dan konsekuensi performa yang berbeda. Kedua, perhatikan bahwa parameter seperti **lightmap**, **shadow**, **Volume**, **Bloom**, **tonemapping**, **DOF**, dan **AO** tidak berdiri sendiri; semuanya saling memengaruhi hasil akhir. Ketiga, biasakan membaca scene Unity sebagai satu pipeline visual, bukan sebagai kumpulan setting yang terpisah.

Sebagai penutup, saya ingin mengajak kita untuk melihat kembali scene yang sudah dibuat. Coba amati bagaimana perubahan satu parameter dapat mengubah keseluruhan mood visual. Pemahaman ini akan menjadi dasar yang sangat berguna ketika kita masuk ke materi berikutnya, yaitu `Unity Shader Graph`, di mana kita akan mulai melihat proses visual yang lebih dekat dengan sisi shader dan pipeline rendering.

### Inti yang Harus Ditekankan

- **Lighting mode**, **shadow**, **environment**, **material**, dan **post processing** adalah bagian dari satu alur visual yang saling terkait.
- Pilihan lighting seperti **real-time**, **baked**, dan **mixed** memengaruhi kualitas visual sekaligus performa.
- Parameter post processing seperti **Bloom**, **tonemapping**, **DOF**, dan **AO** berperan penting dalam membentuk tampilan akhir scene.
- Mahasiswa perlu membiasakan diri membaca scene Unity sebagai **pipeline rendering**, bukan sekadar kumpulan setting terpisah.

### Transisi ke Slide Berikutnya

Pada pertemuan berikutnya, kita akan melanjutkan ke `Unity Shader Graph`, di mana kita akan mulai melihat bagaimana efek visual dapat dikendalikan lebih dalam melalui shader dan pipeline rendering.
