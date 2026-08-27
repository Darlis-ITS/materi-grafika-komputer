# Narasi Grafika Komputer - Pertemuan 09

## Blender Fundamental & 3D Modeling

Sumber: markdown/pert09-ringkas.md

---

## Slide 000 - Cover

### Narasi

Selamat datang kembali pada mata kuliah **Grafika Komputer** dengan kode **EF234504**, khususnya **Pertemuan 9** yang membahas **Blender Fundamental & 3D Modeling**, yang disampaikan oleh **Dr. Darlis Herumurti** dari **Departemen Teknik Informatika**. Pada pertemuan ini, kita akan memasuki bagian yang sangat praktis dari grafika komputer, yaitu bagaimana sebuah objek visual dibangun, dimodelkan, dan disiapkan untuk masuk ke dalam **rendering pipeline**.

**Blender** dipilih karena menjadi salah satu perangkat lunak yang menghubungkan konsep geometri, transformasi, kamera, material, dan lighting dalam bentuk workflow nyata. Dengan memahami dasar-dasar **3D modeling**, mahasiswa tidak hanya belajar membuat bentuk, tetapi juga memahami bagaimana objek digital direpresentasikan sebagai **mesh**, bagaimana koordinat ruang 3D bekerja, dan bagaimana proses modeling memengaruhi tahap rasterisasi, shading, dan rendering.

Pertemuan ini akan menjadi fondasi sebelum kita masuk ke operasi modeling yang lebih detail, seperti manipulasi **vertex**, **edge**, **face**, penggunaan **modifier**, serta workflow **hard-surface modeling**.

### Inti yang Harus Ditekankan

- Pertemuan ini berfokus pada **Blender Fundamental & 3D Modeling** sebagai bagian praktis dari **Grafika Komputer**.
- Mahasiswa perlu memahami bahwa modeling 3D adalah proses membangun representasi geometri objek sebelum tahap rendering.
- Konsep dasar seperti **mesh**, **transformasi**, **kamera**, dan **pipeline** akan menjadi benang merah dalam praktikum.

### Transisi ke Slide Berikutnya

Untuk memulai, kita akan melihat topik-topik yang akan dibahas pada pertemuan ini, mulai dari peran Blender dalam graphics pipeline hingga praktikum modeling asset 3D.

---

## Slide 001 - Topik Pembahasan

### Narasi

Sebelum kita membuka Blender, penting untuk melihat arah besar pertemuan ini. Kita tidak hanya belajar menekan tombol, tetapi membangun pemahaman tentang bagaimana **Blender** berperan dalam **graphics pipeline**. Secara sederhana, Blender adalah ruang kerja untuk membuat aset 3D: geometri, material, tekstur, kamera, dan pencahayaan. Hasil kerja ini kemudian dapat diproses oleh pipeline rendering menjadi gambar atau animasi yang kita lihat.

Alur pembahasan kita bergerak dari yang paling dasar menuju praktik. Kita mulai dari **interface** dan **viewport** sebagai ruang kerja utama, lalu menavigasi scene dengan shortcut keyboard dan mouse. Setelah itu, kita membedakan **`Object Mode`** dan **`Edit Mode`**, serta memahami **selection** dan **transform** sebagai cara memilih dan memindahkan objek secara presisi.

Dari mode kerja tersebut, kita masuk ke struktur geometri: **`vertex`**, **`edge`**, **`face`**, dan **`mesh`**. Kita akan berlatih operasi modeling seperti **`Extrude`**, **`Inset`**, **`Loop Cut`**, dan **`Bevel`**, lalu melihat **`Modifier`** sebagai cara kerja non-destructive. Semua ini diarahkan ke **hard-surface modeling** dan ditutup dengan praktik membuat asset 3D sederhana.

Sebelum lanjut, hal yang perlu kita pegang adalah: interface, mode kerja, dan struktur mesh adalah fondasi. Tanpa memahami fondasi ini, operasi modeling akan terasa seperti hafalan tombol.

### Inti yang Harus Ditekankan

- **Blender** adalah bagian dari alur produksi aset 3D dalam **graphics pipeline**, bukan sekadar aplikasi gambar.
- **`viewport`**, **`Object Mode`**, dan **`Edit Mode`** adalah tiga ruang kerja utama yang harus dibedakan sejak awal.
- **`vertex`**, **`edge`**, **`face`**, dan **`mesh`** adalah struktur dasar geometri 3D yang akan kita ubah selama modeling.
- Operasi seperti **`Extrude`**, **`Inset`**, **`Loop Cut`**, dan **`Bevel`** menjadi inti pembentukan bentuk, terutama untuk **hard-surface modeling**.
- **`Modifier`** membantu workflow non-destructive, sehingga proses modeling lebih rapi dan mudah dikoreksi.

### Transisi ke Slide Berikutnya

Setelah peta topik ini jelas, kita lanjut ke capaian pembelajaran, yaitu kemampuan konkret yang harus dimiliki mahasiswa setelah pertemuan ini selesai.

---

## Slide 002 - Capaian Pembelajaran

### Narasi

Pada pertemuan ini, kita menetapkan target kompetensi yang harus dicapai mahasiswa setelah mempelajari **Blender Fundamental & 3D Modeling**. Capaian ini bukan sekadar hafalan menu, tetapi kemampuan menggunakan Blender sebagai bagian dari workflow grafika komputer: dari memahami antarmuka, menavigasi **3D Viewport**, hingga menghasilkan **asset 3D sederhana** dengan alur kerja yang rapi.

Secara konseptual, mahasiswa perlu memahami bahwa Blender bekerja pada dua level utama: **Object Mode** untuk memanipulasi objek secara utuh, dan **Edit Mode** untuk mengubah geometri melalui **Vertex**, **Edge**, **Face**, dan **Mesh**. Pemahaman **topology** penting karena kualitas modeling akan memengaruhi tahap berikutnya, seperti **Materials & UV**, **Lighting & Rendering**, dan integrasi ke engine atau aplikasi interaktif.

Dari sisi keterampilan, mahasiswa diharapkan mampu melakukan transformasi cepat dan presisi, menggunakan operasi modeling seperti `Extrude`, `Inset`, `Loop Cut`, dan `Bevel`, serta memahami peran `Modifier` dalam alur **non-destructive**. Dengan capaian ini, mahasiswa tidak hanya bisa membuat bentuk, tetapi juga membangun model yang mudah direvisi, konsisten, dan siap diproses lebih lanjut.

### Inti yang Harus Ditekankan

- **Object Mode** dan **Edit Mode** memiliki fungsi berbeda: objek utuh versus geometri mesh.
- **Vertex**, **Edge**, **Face**, dan **Mesh** adalah dasar representasi geometri 3D.
- Operasi seperti `Extrude`, `Inset`, `Loop Cut`, dan `Bevel` adalah alat inti modeling dasar.
- `Modifier` mendukung alur **non-destructive**, sehingga model tetap mudah diubah.
- Tujuan akhir pertemuan ini adalah membuat **asset 3D sederhana** dengan workflow yang rapi, bukan sekadar hasil visual.

### Transisi ke Slide Berikutnya

Setelah memahami capaian yang akan kita kejar, langkah berikutnya adalah melihat posisi materi ini dalam keseluruhan semester. Pertemuan ke-9 menjadi pintu masuk workflow pembuatan asset 3D, yang kemudian akan terhubung dengan tahap material, UV, lighting, rendering, dan integrasi ke Unity.

---

## Slide 003 - Posisi Materi dalam Semester

### Narasi

Pada pertemuan ke-9, kita berada di titik peralihan dalam alur mata kuliah. Sebelum **UTS**, fokus masih berada pada sisi web dan rendering interaktif: dari `WebGL` ke `Three.js`, lalu menuju `Interactive Web 3D`. Artinya, mahasiswa diharapkan sudah memahami bagaimana objek 3D dapat ditampilkan, dikendalikan, dan diinteraksikan langsung di browser.

Setelah **UTS**, arah materi bergeser ke pembuatan aset 3D yang lebih terstruktur. Alurnya dapat dibaca sebagai **pipeline produksi**:

1. `Blender Modeling`
2. `Materials & UV`
3. `Lighting & Rendering`
4. `Unity`

Panah pada diagram menunjukkan urutan kerja, bukan sekadar daftar topik. Setiap tahap memberi input ke tahap berikutnya: geometri yang rapi memungkinkan material dan UV yang lebih mudah, material dan UV yang baik mendukung lighting dan rendering, lalu hasil yang siap digunakan dapat dibawa ke engine seperti `Unity`.

Posisi pertemuan ini penting karena `Blender Modeling` adalah **pintu masuk workflow pembuatan aset 3D**. Di sini kita belum langsung masuk ke detail teknis modeling yang rumit, tetapi kita perlu memahami bahwa modeling adalah fondasi dari seluruh pipeline visual. Jika geometri dan struktur objek tidak rapi sejak awal, tahap material, UV, lighting, rendering, dan integrasi ke engine akan menjadi lebih sulit.

Sebelum lanjut, hal yang perlu dipahami mahasiswa adalah bahwa materi setelah UTS bukan pengganti materi web, melainkan pelengkap. `Blender` berperan sebagai ruang kerja untuk membuat dan menyiapkan aset, sedangkan `Unity` atau pipeline web sebelumnya berperan sebagai tempat aset tersebut ditampilkan atau diinteraksikan.

### Inti yang Harus Ditekankan

- Pertemuan 9 menandai peralihan dari pipeline web 3D ke pipeline produksi aset 3D.
- Sebelum UTS: `WebGL` → `Three.js` → `Interactive Web 3D`.
- Setelah UTS: `Blender Modeling` → `Materials & UV` → `Lighting & Rendering` → `Unity`.
- `Blender Modeling` adalah pintu masuk workflow asset 3D; geometri rapi menjadi fondasi tahap berikutnya.
- Diagram harus dibaca sebagai urutan kerja, bukan daftar topik terpisah.

### Transisi ke Slide Berikutnya

Dengan posisi ini sudah jelas, kita lanjut ke pertanyaan berikutnya: mengapa Blender dipilih sebagai alat utama untuk tahap modeling dan pembuatan aset 3D?

---

## Slide 004 - Mengapa Blender?

### Narasi

Blender menjadi pilihan yang praktis karena ia menyediakan satu lingkungan kerja untuk **membuat, memperbaiki, dan menyiapkan asset 3D** sebelum asset tersebut digunakan oleh renderer atau engine. Dalam konteks grafika komputer, Blender berperan sebagai tahap **authoring**: di sinilah objek visual dibentuk, diberi struktur geometri, lalu disiapkan agar dapat diproses lebih lanjut oleh pipeline rendering.

Kita perlu membedakan peran Blender dengan tahap eksekusi rendering. Blender bukan pengganti engine real-time; ia lebih berfungsi sebagai ruang kerja untuk menghasilkan **geometry**, **material**, **lighting**, dan setup adegan yang valid. Hasil dari tahap ini biasanya berupa file 3D yang dapat diekspor dan dibaca oleh aplikasi lain.

Beberapa alasan Blender relevan untuk mata kuliah ini adalah:

- **3D modeling**: membentuk objek dari `vertex`, `edge`, dan `face` menjadi `mesh` yang memiliki struktur rapi.
- **asset creation**: menyiapkan objek dengan skala, orientasi, dan posisi yang konsisten agar mudah digunakan di tahap berikutnya.
- **texturing**: menyiapkan dasar `UV` dan `material` agar permukaan objek dapat diberi tampilan visual.
- **animation**: mengatur perubahan transformasi objek terhadap waktu.
- **lighting**: menempatkan sumber cahaya untuk membentuk pencahayaan adegan.
- **rendering**: menghasilkan pratinjau visual dari adegan 3D.
- **export ke engine**: menyiapkan asset agar dapat dipakai dalam aplikasi real-time atau engine lain.

Poin penting di sini adalah **kualitas geometry**. Jika `mesh` tidak rapi, misalnya skala tidak konsisten, orientasi objek tidak jelas, atau struktur `face` sulit dibaca, maka tahap `UV mapping`, `material`, `lighting`, dan `rendering` akan menjadi lebih sulit. Karena itu, sebelum masuk ke tampilan visual, kita perlu memastikan bahwa bentuk dasar objek sudah benar dan siap diproses.

Fokus pertemuan ini adalah **membuat geometry 3D yang rapi dan siap masuk tahap berikutnya**. Artinya, kita belum membahas detail `UV`, `material`, atau `lighting` secara mendalam. Yang harus dipahami mahasiswa pada tahap ini adalah bagaimana objek 3D dibentuk, bagaimana struktur `mesh` dibaca, dan mengapa geometry yang bersih menjadi fondasi bagi seluruh workflow asset 3D.

### Inti yang Harus Ditekankan

- Blender adalah lingkungan **authoring asset 3D**, bukan pengganti engine atau runtime renderer.
- Fokus pertemuan ini adalah **modeling**: membuat `geometry` 3D yang rapi, konsisten, dan siap untuk `UV`, `material`, `lighting`, `rendering`, dan `export`.
- Kualitas `mesh` memengaruhi seluruh tahap berikutnya, mulai dari `UV mapping` hingga penggunaan asset di engine.

### Transisi ke Slide Berikutnya

Setelah memahami mengapa Blender digunakan, kita akan melihat posisi **modeling** dalam pipeline: `Modeling → UV Mapping → Material & Texture → Lighting → Rendering / Export`. Pada slide berikutnya, kita akan fokus pada tahap pertama, yaitu **modeling**, sebagai fondasi sebelum asset diberi `UV` dan material.

---

## Slide 005 - Blender dalam Graphics Pipeline

### Narasi

Sebelum masuk ke Blender, kita perlu menempatkan Blender dalam alur kerja grafika komputer. Diagram di slide menunjukkan tahapan utama dari pembuatan aset 3D: `Modeling`, `UV Mapping`, `Material & Texture`, `Lighting`, lalu `Rendering / Export`. Alur ini dibaca dari atas ke bawah sebagai proses bertahap: bentuk objek dibuat terlebih dahulu, kemudian permukaan objek diberi koordinat tekstur, material diterapkan, pencahayaan diatur, dan akhirnya hasil visual dihasilkan atau diekspor ke tahap berikutnya.

Pentingnya alur ini adalah agar mahasiswa tidak melihat Blender sebagai sekadar aplikasi menggambar 3D, melainkan sebagai bagian dari **graphics pipeline** yang menyiapkan geometri, material, dan visual untuk rendering. Dalam konteks kuliah, tahap `Modeling` adalah fondasi karena kualitas mesh, topologi, dan proporsi objek akan memengaruhi tahap berikutnya. Jika geometri tidak rapi, proses UV, texturing, lighting, dan rendering akan menjadi lebih sulit.

Pada pertemuan ini, fokus utama kita adalah **Modeling**, yaitu membuat geometry 3D yang rapi dan siap masuk tahap berikutnya. Tahap `UV Mapping` serta `Material & Texture` akan dibahas lebih lanjut pada Pertemuan 10, sehingga di sini kita cukup memahami posisinya dalam pipeline tanpa mendalami teknisnya. Dengan memahami urutan ini, mahasiswa dapat melihat bahwa setiap tahap memiliki input dan output: modeling menghasilkan mesh, UV mapping menyiapkan pemetaan tekstur, material memberi sifat visual, lighting membentuk pencahayaan, dan rendering/export menghasilkan citra atau aset siap pakai.

Sebelum lanjut, hal yang perlu dipahami adalah bahwa Blender bukan satu-satunya tahap dalam pipeline, tetapi alat yang membantu kita membangun dan menyiapkan aset 3D. Setelah memahami posisi Blender dalam pipeline, langkah berikutnya adalah mengenali lingkungan kerja Blender, karena semua proses modeling akan dilakukan di dalam antarmuka tersebut.

### Inti yang Harus Ditekankan

- Blender berada dalam alur **graphics pipeline** aset 3D: `Modeling` → `UV Mapping` → `Material & Texture` → `Lighting` → `Rendering / Export`.
- Pertemuan 9 berfokus pada **Modeling**, yaitu pembuatan geometry 3D yang rapi sebagai fondasi tahap berikutnya.
- `UV Mapping` dan `Material & Texture` hanya dikenali posisinya sekarang; detailnya dibahas pada Pertemuan 10.

### Transisi ke Slide Berikutnya

Setelah memahami posisi Blender dalam pipeline, kita perlu masuk ke lingkungan kerjanya. Slide berikutnya akan membahas **Blender Interface**, yaitu bagian-bagian utama yang akan kita gunakan saat melakukan modeling.

---

## Slide 006 - Blender Interface

### Narasi

Setelah kita melihat posisi Blender dalam pipeline, langkah berikutnya adalah mengenali ruang kerja perangkat itu sendiri. Dalam grafika komputer, antarmuka bukan sekadar tampilan tombol; ia adalah peta tempat kita menemukan **object**, pengaturan material, kamera, lighting, dan alur kerja rendering.

Pada tahap ini, kita hanya perlu membangun gambaran awal: di mana kita melihat `scene`, di mana daftar `object` berada, dan di mana pengaturan penting disimpan. Dengan peta mental ini, mahasiswa tidak akan tersesat ketika nanti melakukan modeling.

Bagian utama yang perlu dikenali adalah:

- **`3D Viewport`**: area utama untuk melihat dan memanipulasi `object` secara visual.
- **`Outliner`**: daftar `object` dan hierarki `scene`.
- **`Properties Editor`**: panel pengaturan `object`, material, render, dan parameter lainnya.
- **`Timeline`**: area untuk melihat dan mengatur frame animasi.
- **`Toolbar`**: akses cepat ke tool modeling dan transformasi.
- **`Header`**: baris menu, mode, dan perintah utama di atas editor.
- **`Status Bar`**: informasi status, koordinat, dan pesan sistem.

Kita tidak perlu menghafl semua fungsi pada tahap ini. Yang penting adalah memahami bahwa setiap editor memiliki peran berbeda: viewport untuk melihat, outliner untuk memilih `object`, properties untuk mengatur, dan toolbar untuk menjalankan aksi. Pemahaman ini membantu kita membaca antarmuka sebagai satu sistem, bukan kumpulan panel terpisah.

Sebelum lanjut ke modeling, pastikan mahasiswa dapat menyebutkan bagian-bagian utama ini dan memahami bahwa sebagian besar interaksi awal akan terjadi di sekitar **`3D Viewport`** dan **`Properties Editor`**.

### Inti yang Harus Ditekankan

- Antarmuka Blender adalah ruang kerja untuk mengelola **object**, **scene**, dan parameter rendering.
- **`3D Viewport`** adalah pusat interaksi visual, tetapi pada slide ini kita hanya mengenali posisinya.
- **`Outliner`** dan **`Properties Editor`** membantu kita memilih `object` serta mengatur propertinya.
- Tujuan awal adalah membangun peta mental, bukan langsung menguasai semua tool.

### Transisi ke Slide Berikutnya

Setelah mengenali bagian-bagian utama antarmuka, kita akan masuk lebih dalam ke **`3D Viewport`**, karena di sanalah sebagian besar workflow modeling berlangsung.

---

## Slide 007 - 3D Viewport

### Narasi

Setelah kita mengenali bagian-bagian antarmuka Blender, bagian yang paling sering kita gunakan adalah **3D Viewport**. Area ini dapat dipahami sebagai ruang kerja utama tempat scene 3D ditampilkan secara visual. Di sinilah kita melihat posisi `object`, hubungan antar objek, serta bagaimana kamera, cahaya, dan geometri saling berhubungan.

Fungsi utama `3D Viewport` bukan hanya menampilkan gambar, tetapi menjadi tempat kita berinteraksi langsung dengan scene. Kita dapat **memilih object**, melakukan **transform** seperti `move`, `rotate`, dan `scale`, serta melakukan **modeling** untuk membentuk objek. Selain itu, viewport juga digunakan untuk **navigasi scene**, misalnya memutar pandangan, memperbesar atau memperkecil tampilan, dan berpindah antar sudut pandang.

Karena sebagian besar workflow modeling berlangsung di sini, mahasiswa perlu terbiasa membaca viewport secara spasial. Artinya, kita tidak hanya melihat objek sebagai bentuk di layar, tetapi memahami posisinya dalam koordinat 3D, orientasinya terhadap kamera, dan dampaknya terhadap hasil akhir. Kemampuan ini penting sebelum masuk ke tahap yang lebih teknis seperti transformasi, kamera, dan rendering.

### Inti yang Harus Ditekankan

- **3D Viewport** adalah area kerja utama untuk melihat dan berinteraksi dengan scene.
- Di viewport, kita melakukan **memilih object**, **transform**, **modeling**, dan **navigasi scene**.
- Pemahaman viewport membantu mahasiswa membangun intuisi spasial sebelum masuk ke konsep teknis yang lebih lanjut.

### Transisi ke Slide Berikutnya

Setelah kita memahami tempat kerja utama di `3D Viewport`, langkah berikutnya adalah mengenali bagaimana objek-objek dalam scene terstruktur dan dikelola, yang akan kita lihat pada bagian **Outliner**.

---

## Slide 008 - Outliner

### Narasi

Setelah kita memahami bahwa **3D Viewport** adalah area kerja utama untuk melihat dan memanipulasi objek, sekarang kita perlu cara yang lebih rapi untuk mengelola seluruh isi scene. Di sinilah **Outliner** berperan. Outliner menampilkan **struktur object** dalam bentuk hierarki, sehingga kita bisa melihat objek apa saja yang ada di scene dan bagaimana objek tersebut dikelompokkan.

Pada slide ini, struktur yang ditampilkan adalah:

```text
Scene Collection
├── Camera
├── Cube
└── Light
```

Cara membacanya cukup sederhana. **Scene Collection** adalah kelompok utama yang memuat objek-objek dalam scene. Di bawahnya terdapat **Camera**, **Cube**, dan **Light**. Artinya, scene ini memiliki kamera untuk melihat hasil render, satu objek geometri berupa cube, dan satu sumber cahaya. Hierarki seperti ini membantu kita memahami bahwa scene bukan sekadar kumpulan objek acak, tetapi struktur yang bisa dikelola.

Outliner sangat penting karena dalam scene yang lebih kompleks, jumlah objek bisa bertambah banyak. Jika semua objek hanya dilihat di viewport, kita bisa kesulitan mencari objek tertentu, membedakan objek yang saling tumpang tindih, atau mengatur kelompok objek. Dengan Outliner, kita dapat melakukan beberapa hal berikut:

- memilih object,
- mengubah nama object,
- menyembunyikan atau menampilkan object,
- mengelola collection.

Fungsi **hide/show** misalnya berguna ketika kita ingin fokus pada satu bagian scene tanpa harus menghapus objek lain. Objek yang disembunyikan tetap ada di scene, tetapi tidak ditampilkan atau tidak mengganggu proses kerja. Ini penting dalam workflow modeling karena kita sering perlu mengisolasi objek tertentu untuk diedit.

Kita juga perlu memahami bahwa Outliner berkaitan dengan konsep **scene graph** atau hierarki scene. Dalam grafika komputer, objek 3D biasanya disimpan dalam struktur pohon: ada node induk, node anak, dan hubungan antarobjek. Meskipun pada slide ini strukturnya masih sederhana, pola yang sama akan terus kita gunakan ketika scene membesar, ketika ada parent-child transform, atau ketika kita mengelompokkan objek ke dalam collection.

Sebelum lanjut, hal yang harus dipahami mahasiswa adalah bahwa Outliner bukan sekadar daftar nama objek. Outliner adalah alat organisasi scene. Dari sini kita bisa memilih objek yang akan disetel, memastikan nama objek jelas, dan mengatur visibilitas objek. Setelah objek dipilih di Outliner, langkah berikutnya biasanya adalah mengatur properti objek tersebut.

### Inti yang Harus Ditekankan

- **Outliner** menampilkan struktur scene dalam bentuk hierarki object.
- Struktur `Scene Collection` memuat objek seperti `Camera`, `Cube`, dan `Light`.
- Outliner digunakan untuk memilih, rename, hide/show, dan mengelola collection.
- Outliner membantu organisasi scene, terutama ketika jumlah objek bertambah.
- Konsep hierarki ini berkaitan dengan **scene graph** dalam grafika komputer.

### Transisi ke Slide Berikutnya

Setelah kita bisa memilih dan mengelola objek melalui Outliner, langkah berikutnya adalah mengatur properti objek tersebut. Pada slide berikutnya, kita akan masuk ke **Properties Editor**, khususnya bagian `Object` dan `Modifier`, yang akan menjadi fokus utama pertemuan ini.

---

## Slide 009 - Properties Editor

### Narasi

Setelah kita melihat struktur scene di **Outliner**, langkah berikutnya adalah memahami tempat kita mengatur objek yang sedang dipilih. **Properties Editor** berfungsi sebagai panel pengaturan utama dalam Blender. Panel ini menampilkan berbagai tab yang memuat pengaturan berbeda, tetapi semuanya berperan dalam menentukan bagaimana objek ditampilkan dan dirender.

Tab yang ditampilkan pada slide ini meliputi:

- `Object`
- `Modifier`
- `Scene`
- `Render`
- `Output`
- `Material`
- `Physics`

Untuk pertemuan ini, kita membatasi fokus pada dua tab yang paling relevan dengan modeling dasar:

```text
Object + Modifier
```

Tab `Object` berkaitan dengan properti objek secara umum, seperti posisi, orientasi, skala, dan hubungan objek dalam scene. Tab `Modifier` berkaitan dengan perubahan geometri yang diterapkan pada objek, sehingga bentuk akhir mesh dapat dimodifikasi sebelum objek masuk ke tahap rendering.

Kita bisa membaca **Properties Editor** seperti panel kontrol yang mengikuti objek terpilih. Jika kita memilih `Cube` di **Outliner** atau viewport, pengaturan yang tampil akan terkait objek tersebut. Jika konteksnya adalah scene, render, material, atau simulasi, tab lain akan menjadi lebih relevan. Karena itu, Properties Editor tidak perlu dibaca sebagai satu daftar panjang, tetapi sebagai kelompok pengaturan berdasarkan konteks.

Hubungannya dengan grafika komputer cukup langsung. Properti objek memengaruhi transformasi objek dalam ruang 3D, sedangkan modifier memengaruhi geometri akhir yang akan diproses oleh pipeline rendering. Dengan kata lain, sebelum lighting, shading, atau rasterisasi dilakukan, bentuk dan posisi objek sudah ditentukan melalui pengaturan di Properties Editor.

Sebelum lanjut, ada dua hal yang perlu dipahami:

- **Outliner** digunakan untuk melihat dan memilih struktur scene, sedangkan **Properties Editor** digunakan untuk mengatur properti dari objek atau konteks yang sedang dipilih.
- Pada pertemuan ini, tab `Scene`, `Render`, `Output`, `Material`, dan `Physics` belum menjadi fokus utama; pembahasan modeling dasar berpusat pada `Object` dan `Modifier`.

### Inti yang Harus Ditekankan

- **Properties Editor** adalah panel pengaturan utama untuk objek dan konteks scene.
- Fokus pertemuan 9 adalah `Object` dan `Modifier`.
- `Object` mengatur properti objek, sedangkan `Modifier` mengatur modifikasi geometri sebelum rendering.
- Tab lain penting untuk tahap lanjutan seperti render, material, dan simulasi.

### Transisi ke Slide Berikutnya

Setelah memahami di mana pengaturan objek berada, langkah berikutnya adalah menguasai cara bergerak di viewport. Pada slide berikutnya, kita akan membahas navigasi viewport dengan mouse, yaitu `MMB`, `Shift + MMB`, dan `Mouse Wheel`, karena navigasi ini akan dipakai terus-menerus saat modeling.

---

## Slide 010 - Navigasi Viewport dengan Mouse

### Narasi

Sebelum kita mulai memodel objek 3D, ada satu keterampilan dasar yang harus benar-benar dikuasai, yaitu **menavigasi viewport**. Viewport adalah area kerja utama di Blender tempat kita melihat, memeriksa, dan memanipulasi objek. Jika navigasi viewport belum lancar, proses modeling akan terasa lambat karena kita harus terus-menerus berhenti untuk mencari sudut pandang yang tepat.

Pada slide ini kita fokus pada tiga shortcut mouse yang paling sering digunakan:

- `MMB` → **Orbit**
- `Shift + MMB` → **Pan**
- `Mouse Wheel` → **Zoom**

`MMB` adalah **Middle Mouse Button**, yaitu tombol tengah mouse. Saat tombol ini ditekan dan digerakkan, pandangan kita akan berputar mengelilingi objek. Perlu dipahami bahwa yang bergerak adalah **sudut pandang kamera viewport**, bukan objeknya sendiri. Ini penting karena dalam grafika komputer, kita sering membedakan antara **transformasi objek** dan **transformasi view**. Orbit membantu kita melihat objek dari berbagai arah tanpa mengubah posisi objek di ruang dunia.

Selanjutnya, `Shift + MMB` digunakan untuk **Pan**. Pan berarti menggeser pandangan secara horizontal atau vertikal. Jika Orbit memutar pandangan mengelilingi objek, Pan menggeser posisi pandangan ke samping atau ke atas. Kombinasi keduanya membuat kita bisa berpindah dari satu bagian objek ke bagian lain dengan cepat, terutama ketika objeknya besar atau scene-nya kompleks.

`Mouse Wheel` digunakan untuk **Zoom**. Scroll ke depan atau ke belakang akan mendekatkan atau menjauhkan pandangan dari objek. Zoom sangat penting saat modeling karena kita sering perlu melihat detail kecil, misalnya tepi mesh, vertex, atau area yang akan dimodifikasi. Tanpa kontrol zoom yang nyaman, mahasiswa akan kesulitan memeriksa hasil modeling secara presisi.

Ketiga shortcut ini harus dikuasai karena dipakai terus-menerus selama proses modeling. Dalam Blender, kita tidak hanya bekerja pada satu sudut pandang tetap. Kita akan sering berpindah dari tampilan depan, samping, atas, hingga sudut bebas untuk memastikan bentuk objek benar. Navigasi viewport yang lancar juga membantu kita memahami hubungan antara **objek 3D**, **ruang kerja**, dan **posisi kamera**, yang nanti akan sangat berguna ketika kita membahas transformasi, kamera, dan rendering.

### Inti yang Harus Ditekankan

- `MMB` digunakan untuk **Orbit**, yaitu memutar pandangan mengelilingi objek.
- `Shift + MMB` digunakan untuk **Pan**, yaitu menggeser pandangan ke samping atau ke atas.
- `Mouse Wheel` digunakan untuk **Zoom**, yaitu mendekatkan atau menjauhkan pandangan.
- Navigasi viewport tidak mengubah objek, tetapi mengubah **sudut pandang** kita terhadap objek.
- Keterampilan ini menjadi dasar sebelum melakukan modeling, transformasi, dan pemeriksaan objek 3D.

### Transisi ke Slide Berikutnya

Setelah kita nyaman menggunakan mouse untuk berpindah sudut pandang, langkah berikutnya adalah mempercepat orientasi view menggunakan keyboard. Pada slide berikutnya, kita akan melihat bagaimana view preset membantu kita langsung berpindah ke tampilan standar dengan lebih cepat dan presisi.

---

## Slide 011 - View Preset dengan Keyboard

### Narasi

Setelah kita bisa mengorbitkan, memindahkan, dan memperbesar viewport dengan mouse, langkah berikutnya adalah memahami **view preset keyboard**. Preset ini memberi kita sudut pandang standar yang langsung tersusun terhadap sumbu objek.

```text
Numpad 1 → Front
Numpad 3 → Right
Numpad 7 → Top
Numpad 5 → Perspective / Orthographic
```

Dalam Blender, **`Numpad 1`** menampilkan tampilan **Front**, **`Numpad 3`** menampilkan tampilan **Right**, dan **`Numpad 7`** menampilkan tampilan **Top**. Tiga preset ini penting karena modeling 3D sering membutuhkan orientasi yang konsisten. Kita tidak lagi bekerja dari sudut bebas yang sulit diperkirakan, tetapi dari arah yang sudah terdefinisi terhadap sumbu objek.

**`Numpad 5`** berfungsi untuk beralih antara **Perspective** dan **Orthographic**. Dalam mode **Perspective**, objek yang lebih dekat tampak lebih besar, sehingga cocok untuk menilai bentuk secara lebih natural. Dalam mode **Orthographic**, garis sejajar tetap sejajar dan tidak ada efek mengecil karena jarak, sehingga lebih mudah memeriksa dimensi, simetri, dan kesesuaian objek terhadap sumbu.

Penting untuk dipahami bahwa view preset bukan pengganti kamera final. Ia adalah alat kerja di viewport untuk mempercepat proses modeling, membandingkan sisi objek, dan menjaga presisi sebelum masuk ke tahap detail.

### Inti yang Harus Ditekankan

- **`Numpad 1`**, **`Numpad 3`**, dan **`Numpad 7`** memberi tampilan standar **Front**, **Right**, dan **Top**.
- **`Numpad 5`** membantu beralih antara **Perspective** dan **Orthographic** untuk kebutuhan penilaian bentuk yang berbeda.
- View preset penting untuk **modeling presisi** karena memberikan orientasi yang konsisten terhadap sumbu objek.

### Transisi ke Slide Berikutnya

Setelah sudut pandang sudah diatur, langkah berikutnya adalah memastikan objek yang sedang kita kerjakan terlihat dengan ukuran yang tepat di viewport. Pada slide berikutnya, kita akan membahas **Frame dan Focus View** menggunakan `Numpad .` dan `Home`.

---

## Slide 012 - Frame dan Focus View

### Narasi

Setelah kita bisa mengatur orientasi viewport dengan view preset, langkah berikutnya adalah memastikan objek yang sedang dikerjakan benar-benar terlihat dengan ukuran yang pas. Dalam modeling 3D, viewport bisa menampilkan scene yang sangat besar, sehingga objek kecil atau detail tertentu bisa tampak terlalu kecil untuk diedit. Di sinilah fungsi **Frame** dan **Focus View** menjadi penting.

Shortcut `Numpad .` digunakan untuk **Frame Selected**. Artinya, viewport akan menyesuaikan tampilan ke objek atau elemen yang sedang terpilih. Jika kita memilih satu objek, satu vertex, satu edge, atau satu face, Blender akan memperbesar tampilan ke area tersebut. Ini sangat berguna ketika kita bekerja pada detail object tertentu, misalnya memperbaiki bentuk kecil, membersihkan topology, atau memeriksa hasil modeling secara dekat.

Shortcut `Home` digunakan untuk **Frame All**. Fungsi ini menampilkan seluruh objek yang ada di scene ke dalam viewport. Dengan kata lain, jika tampilan terlalu zoom-in atau kita kehilangan konteks keseluruhan, `Home` membantu mengembalikan pandangan ke seluruh scene. Ini penting untuk menjaga keseimbangan antara detail dan konteks.

Secara konsep, **Frame Selected** membantu kita fokus pada bagian yang sedang dikerjakan, sedangkan **Frame All** membantu kita melihat hubungan objek terhadap scene secara keseluruhan. Dalam pipeline modeling, alurnya biasanya: pilih objek atau elemen, atur orientasi view, lalu frame area kerja. Dengan cara ini, proses modeling menjadi lebih cepat dan lebih presisi.

Sebelum lanjut, mahasiswa perlu memahami bahwa perintah frame ini bekerja berdasarkan **selection** yang aktif. Jika tidak ada objek terpilih, `Numpad .` tidak akan memiliki target yang jelas. Karena itu, kemampuan memilih objek dengan cepat akan sangat menentukan efisiensi kerja.

### Inti yang Harus Ditekankan

- `Numpad .` = **Frame Selected**, memfokuskan viewport ke objek atau elemen terpilih.
- `Home` = **Frame All**, menampilkan seluruh objek di scene.
- **Frame Selected** sangat berguna untuk bekerja pada detail object tertentu.
- **Frame All** berguna untuk melihat konteks keseluruhan scene.
- Perintah frame bekerja efektif ketika ada **selection** yang jelas.

### Transisi ke Slide Berikutnya

Setelah kita bisa memfokuskan tampilan ke objek yang sedang dikerjakan, langkah berikutnya adalah memahami cara memilih objek dan elemen dengan cepat. Pada slide berikutnya, kita akan membahas **Selection Dasar** sebagai fondasi workflow modeling yang efisien.

---

## Slide 013 - Selection Dasar

### Narasi

Dalam viewport Blender, langkah pertama sebelum memodelkan adalah menentukan objek mana yang akan kita operasikan. **Selection** adalah cara kita memberi tahu aplikasi objek mana yang menjadi target perintah berikutnya, seperti memindah, memutar, menskalakan, menghapus, atau menyalin. Tanpa seleksi yang tepat, operasi modeling bisa salah sasaran.

Shortcut dasar yang perlu kita hafalkan adalah:

```text
Left Click → Select
A          → Select All
Alt + A    → Deselect
B          → Box Select
C          → Circle Select
```

`Left Click` adalah cara paling umum untuk memilih satu objek. Ketika kursor berada di atas objek, klik kiri akan menandainya sebagai objek aktif. `A` berguna ketika kita ingin memilih semua objek yang terlihat di viewport, misalnya untuk mengatur posisi awal atau melihat keseluruhan scene. `Alt + A` berfungsi sebagai kebalikannya, yaitu menghapus semua seleksi agar kita bisa mulai dari kondisi bersih.

Untuk memilih beberapa objek sekaligus, Blender menyediakan **Box Select** dan **Circle Select**. `B` membuat seleksi berbentuk kotak: kita klik dan seret kursor membentuk area persegi, lalu objek yang berada di dalam area tersebut ikut terseleksi. `C` membuat seleksi berbentuk lingkaran: kita seret kursor membentuk area melingkar, sehingga lebih cocok untuk memilih objek yang tersebar dalam pola tidak beraturan.

Poin pentingnya bukan hanya menghafal tombol, tetapi memahami bahwa **seleksi menentukan target operasi**. Dalam workflow modeling, kita biasanya memilih objek terlebih dahulu, lalu melakukan transformasi atau modifikasi. Karena itu, seleksi yang cepat dan tepat membuat alur kerja lebih efisien, terutama ketika scene sudah berisi banyak objek.

### Inti yang Harus Ditekankan

- `Left Click` memilih satu objek, sedangkan `A` dan `Alt + A` digunakan untuk memilih atau menghapus semua seleksi.
- `B` dan `C` membantu memilih banyak objek sekaligus melalui area seleksi kotak atau lingkaran.
- Seleksi adalah prasyarat penting sebelum melakukan transformasi, editing, atau operasi objek lainnya.

### Transisi ke Slide Berikutnya

Setelah kita tahu cara memilih objek dengan cepat, langkah berikutnya adalah mengoperasikannya. Pada slide berikutnya, kita akan membahas **Transform Utama**, yaitu shortcut `G`, `R`, dan `S` untuk memindah, memutar, dan menskalakan objek, serta cara membatasi transformasi ke sumbu `X`, `Y`, atau `Z`.

---

## Slide 014 - Transform Utama

### Narasi

Setelah objek terpilih, langkah berikutnya adalah mengubah posisinya, orientasinya, atau ukurannya. Dalam Blender, tiga transformasi paling dasar dilakukan dengan shortcut:

```text
G → Grab / Move
R → Rotate
S → Scale
```

Tiga tombol ini menjadi fondasi utama saat kita bekerja di ruang 3D. `G` digunakan untuk memindahkan objek, `R` untuk memutar objek, dan `S` untuk mengubah skala atau ukuran objek. Tanpa penguasaan yang baik terhadap ketiganya, proses modeling akan terasa lambat karena setiap penyesuaian bentuk harus dilakukan secara manual dan kurang presisi.

Transformasi ini penting karena dalam grafika komputer, posisi, rotasi, dan skala objek menentukan bagaimana objek tersebut berada di dalam scene. Objek yang sama bisa menghasilkan tampilan yang sangat berbeda jika dipindahkan, diputar, atau diperbesar pada sumbu yang berbeda. Misalnya, sebuah kubus yang diputar pada sumbu `Z` akan tampak berputar seperti koin di atas meja, sedangkan rotasi pada sumbu `X` atau `Y` akan menghasilkan orientasi yang berbeda.

Untuk membuat transformasi lebih terkontrol, Blender menyediakan pembatasan sumbu menggunakan:

```text
X / Y / Z
```

Artinya, setelah kita menekan `G`, `R`, atau `S`, kita bisa langsung menekan `X`, `Y`, atau `Z` agar transformasi hanya terjadi pada satu sumbu tertentu. Misalnya, `G X` berarti memindahkan objek hanya pada sumbu `X`, `R Z` berarti memutar objek hanya pada sumbu `Z`, dan `S Y` berarti mengubah skala hanya pada sumbu `Y`.

Pembatasan sumbu ini sangat berguna karena ruang 3D memiliki tiga dimensi sekaligus. Jika kita tidak membatasi transformasi, objek bisa bergerak atau berubah ukuran pada beberapa arah sekaligus, sehingga hasil akhirnya sulit diprediksi. Dengan menggunakan sumbu tertentu, kita bisa membangun objek secara lebih rapi, terutama ketika menyusun bentuk dari beberapa primitive atau menyiapkan objek untuk modeling lanjutan.

Sebelum lanjut, hal yang perlu dipahami mahasiswa adalah hubungan antara transformasi dan koordinat. Setiap objek di Blender berada dalam sistem koordinat 3D, dan transformasi pada dasarnya adalah perubahan terhadap koordinat posisi, orientasi, dan skala objek tersebut. Pemahaman ini akan sangat membantu ketika nanti kita membahas transformasi dengan nilai numerik, karena nilai yang diberikan akan merujuk pada sumbu dan satuan yang sama.

### Inti yang Harus Ditekankan

- `G`, `R`, dan `S` adalah tiga shortcut transformasi utama: **move**, **rotate**, dan **scale**.
- Transformasi menentukan **posisi**, **orientasi**, dan **ukuran** objek dalam ruang 3D.
- Pembatasan sumbu menggunakan `X`, `Y`, dan `Z` membuat transformasi lebih **presisi** dan mudah dikontrol.
- Penguasaan transformasi dasar adalah prasyarat penting sebelum masuk ke transformasi numerik dan modeling yang lebih terstruktur.

### Transisi ke Slide Berikutnya

Setelah kita memahami cara melakukan transformasi secara bebas dan terbatas pada satu sumbu, langkah berikutnya adalah membuat transformasi yang lebih presisi dengan memasukkan nilai numerik. Pada slide berikutnya, kita akan melihat contoh seperti `G X 2`, `R Z 90`, dan `S 2`, yang sangat berguna untuk asset teknis dan hard-surface modeling.

---

## Slide 015 - Transform dengan Nilai Numerik

### Narasi

Setelah mahasiswa mengenal `G`, `R`, dan `S` sebagai shortcut transformasi, langkah berikutnya adalah memahami bahwa transformasi di Blender tidak selalu harus dilakukan secara bebas dengan mouse. Kita juga bisa memberi **nilai numerik** agar objek berpindah, berputar, atau berubah ukuran secara presisi.

Contoh yang ditampilkan pada slide adalah:

```text
G X 2  → move 2 unit pada X
R Z 90 → rotate 90° pada Z
S 2    → scale 2×
```

Artinya, ketika kita menekan `G` lalu `X`, Blender akan membatasi gerakan hanya pada sumbu X. Jika setelah itu kita mengetik `2` dan menekan `Enter`, objek akan bergerak tepat **2 unit** ke arah X. Cara kerja yang sama berlaku untuk rotasi dan skala.

Untuk `R Z 90`, kita menekan `R` lalu `Z` untuk membatasi rotasi pada sumbu Z, kemudian memasukkan `90`. Hasilnya objek berputar **90 derajat** mengelilingi sumbu Z. Ini sangat berguna ketika kita ingin menyelaraskan objek dengan grid, sumbu dunia, atau objek lain tanpa perlu menebak sudutnya.

Untuk `S 2`, kita menekan `S` lalu memasukkan `2`. Artinya ukuran objek menjadi **2 kali** ukuran semula. Perlu dipahami bahwa `S 2` adalah faktor skala, bukan ukuran absolut. Jika objek semula berukuran 1 unit, setelah `S 2` menjadi 2 unit; jika semula 3 unit, menjadi 6 unit.

Pendekatan numerik ini penting terutama untuk **asset teknis** dan **hard-surface modeling**, misalnya kendaraan, mesin, perangkat elektronik, atau arsitektur. Pada objek seperti itu, dimensi sering kali harus konsisten: jarak antar komponen, orientasi panel, ukuran lubang, atau proporsi bagian harus presisi. Jika hanya mengandalkan mouse, hasilnya bisa kurang rapi dan sulit direproduksi.

Dalam konteks grafika komputer, transformasi numerik ini masih berada pada level **object transform**, yaitu transformasi objek terhadap ruang dunia atau ruang scene. Nilai `G X 2`, `R Z 90`, dan `S 2` mengubah posisi, orientasi, dan skala objek secara keseluruhan sebelum kita masuk ke detail geometri internal. Transformasi ini kemudian memengaruhi bagaimana objek dirender oleh kamera, pencahayaan, dan pipeline rendering.

Sebelum lanjut, mahasiswa perlu memahami tiga hal: shortcut transformasi, pembatasan sumbu, dan input nilai. Dengan kombinasi ini, kita bisa melakukan transformasi yang terukur, bukan hanya visual.

### Inti yang Harus Ditekankan

- `G X 2` memindahkan objek **2 unit** hanya pada sumbu X.
- `R Z 90` memutar objek **90 derajat** pada sumbu Z.
- `S 2` mengubah ukuran objek menjadi **2 kali** ukuran semula.
- Nilai numerik penting untuk presisi, terutama pada asset teknis dan hard-surface.
- Transformasi ini mengubah objek secara keseluruhan, bukan geometri internalnya.

### Transisi ke Slide Berikutnya

Setelah kita bisa melakukan transformasi dengan nilai numerik, langkah berikutnya adalah memahami di mana transformasi ini dilakukan. Pada slide berikutnya, kita akan masuk ke **Object Mode**, yaitu mode untuk memanipulasi objek secara keseluruhan, termasuk move, rotate, scale, duplicate, modifier, dan hierarchy.

---

## Slide 016 - Object Mode

### Narasi

Dalam alur kerja Blender, **Object Mode** adalah mode di mana objek diperlakukan sebagai satu unit utuh. Artinya, ketika kita melakukan transformasi, yang berubah adalah posisi, orientasi, atau ukuran objek secara keseluruhan, bukan bentuk detail geometri di dalamnya.

Pada mode ini, operasi utama yang kita lakukan adalah `move`, `rotate`, `scale`, `duplicate`, pengaturan `modifier`, dan pengelolaan `hierarchy`. Secara visual, kita bisa memindahkan objek ke posisi lain, memutar objek terhadap sumbu tertentu, memperbesar atau memperkecil objek, membuat salinan objek, atau mengatur hubungan parent-child antarobjek.

Konsep ini penting karena sebelum masuk ke pemodelan detail, kita perlu mengatur komposisi scene terlebih dahulu. Dalam grafika komputer, penempatan objek yang tepat menentukan bagaimana objek terlihat dari kamera, bagaimana skala relatif antarobjek, dan bagaimana hierarki transformasi bekerja. Misalnya, jika satu objek menjadi parent dari objek lain, transformasi parent akan ikut memengaruhi posisi child.

Dari sisi teknis, transformasi pada **Object Mode** bekerja pada transformasi objek, seperti `location`, `rotation`, dan `scale`. Transformasi ini kemudian memengaruhi seluruh geometri di bawahnya. Dalam pipeline rendering, transformasi objek biasanya menjadi bagian dari perhitungan scene graph atau world matrix, sehingga posisi akhir objek di ruang dunia dapat dikirim ke GPU untuk proses rendering.

Beberapa hal yang perlu dipahami dari mode ini adalah:

- `move`, `rotate`, dan `scale` mengubah objek sebagai satu kesatuan.
- `duplicate` membuat salinan objek tanpa mengubah objek asli.
- `modifier` dapat diterapkan pada objek untuk mengubah bentuk secara non-destruktif.
- `hierarchy` mengatur hubungan antarobjek, misalnya parent-child.

Yang perlu diperhatikan adalah **geometry internal belum diedit** pada Object Mode. Artinya, topologi mesh, seperti vertex, edge, dan face, masih tetap seperti semula. Kita hanya mengubah transformasi atau pengaturan objek, bukan mengubah bentuk dasar geometri secara langsung.

Sebelum lanjut ke mode berikutnya, kita perlu memahami perbedaan antara **object** dan **geometry**. Mengubah object tidak berarti mengubah bentuk mesh secara detail; ia hanya mengubah cara objek tersebut berada di dalam scene. Pemahaman ini penting agar kita tidak bingung kapan harus mengubah objek secara keseluruhan dan kapan harus masuk ke level geometri.

### Inti yang Harus Ditekankan

- **Object Mode** digunakan untuk memanipulasi objek secara keseluruhan.
- Operasi utama meliputi `move`, `rotate`, `scale`, `duplicate`, `modifier`, dan `hierarchy`.
- **Geometry internal belum diedit** pada mode ini.
- Transformasi objek memengaruhi seluruh mesh, tetapi tidak mengubah topologi geometri secara langsung.
- Mode ini penting untuk mengatur komposisi scene, skala, orientasi, dan hierarki objek.

### Transisi ke Slide Berikutnya

Setelah objek sudah ditempatkan dan diatur sebagai satu unit, langkah berikutnya adalah membuka bentuk objek itu sendiri. Di situlah kita akan masuk ke **Edit Mode**, tempat vertex, edge, dan face dapat dimodifikasi secara langsung.

---

## Slide 017 - Edit Mode

### Narasi

Setelah kita memahami **Object Mode** sebagai ruang untuk memanipulasi objek secara utuh, sekarang kita masuk ke **Edit Mode**. Pada mode ini, Blender tidak lagi memperlakukan objek sebagai satu entitas transformasi, melainkan membuka struktur geometri di dalamnya. Artinya, yang kita ubah bukan posisi objek di dunia, tetapi bentuk objek itu sendiri.

Dalam **Edit Mode**, unit dasar yang kita lihat dan ubah adalah **vertex**, **edge**, dan **face**. **Vertex** adalah titik koordinat, **edge** adalah garis penghubung antar vertex, dan **face** adalah permukaan yang dibentuk oleh edge-edge tersebut. Ketiganya membentuk **mesh**, yaitu representasi geometri yang akan diproses oleh pipeline rendering.

Beberapa operasi penting yang biasanya muncul di tahap modeling adalah:

- `Extrude` untuk memperluas face atau edge menjadi geometri baru.
- `Inset` untuk membuat permukaan baru di dalam face.
- `Loop Cut` untuk menambah garis edge melintasi mesh.
- `Bevel` untuk membulatkan atau memotong tepi.

Operasi-operasi ini penting karena mereka mengubah **topology** mesh, yaitu hubungan antar vertex, edge, dan face. Topology memengaruhi bagaimana objek terlihat, bagaimana shading terbentuk, dan bagaimana deformasi atau animasi dapat bekerja dengan baik.

Shortcut untuk berpindah ke **Edit Mode** adalah:

```text
Tab
```

Secara konsep, kita bisa membayangkan alurnya seperti ini: di **Object Mode**, kita memilih objek; di **Edit Mode**, kita memilih komponen geometri; lalu kita mengubah posisi atau koneksi komponen tersebut. Hasilnya, data mesh objek berubah, dan perubahan itu akan terbawa ke tahap transformasi, rasterisasi, dan rendering berikutnya.

Sebelum lanjut, yang perlu dipahami adalah perbedaan mendasar antara mengubah objek secara keseluruhan dan mengubah bagian dalam objek. **Object Mode** mengubah transformasi objek, sedangkan **Edit Mode** mengubah struktur geometri objek.

### Inti yang Harus Ditekankan

- **Edit Mode** digunakan untuk mengubah **geometry internal** objek, bukan objek secara keseluruhan.
- Komponen dasar mesh adalah **vertex**, **edge**, dan **face**.
- Operasi seperti `Extrude`, `Inset`, `Loop Cut`, dan `Bevel` mengubah **topology** mesh.
- Shortcut `Tab` digunakan untuk berpindah antara **Object Mode** dan **Edit Mode**.
- Perubahan di **Edit Mode** memengaruhi bentuk akhir objek yang akan dirender.

### Transisi ke Slide Berikutnya

Setelah kita tahu apa yang bisa dilakukan di masing-masing mode, langkah berikutnya adalah membandingkan **Object Mode** dan **Edit Mode** secara lebih jelas, terutama dari sisi transformasi, duplikasi, modifier, dan editing topology.

---

## Slide 018 - Object Mode vs Edit Mode

### Narasi

Di tahap modeling, Blender memisahkan dua hal yang sering tertukar mahasiswa: memanipulasi objek sebagai satu unit, dan mengubah bentuk geometri di dalamnya. **Object Mode** adalah mode ketika kita bekerja pada **object keseluruhan**, sedangkan **Edit Mode** adalah mode ketika kita masuk ke dalam **geometry internal** objek. Kita bisa berpindah antar mode dengan `Tab`, tetapi yang lebih penting adalah memahami kapan mode mana yang tepat digunakan.

Tabel pada slide ini bisa dibaca sebagai pemisahan tanggung jawab. Kolom kiri menggambarkan apa yang kita lakukan terhadap objek di scene, sementara kolom kanan menggambarkan apa yang kita lakukan terhadap data mesh-nya. Jadi, ketika kita menggeser, memutar, atau menskalakan sebuah cube, itu adalah **transform object** pada **Object Mode**. Ketika kita mengubah satu sisi cube menjadi lebih dalam, itu adalah **transform component** pada **Edit Mode**.

Perbedaan ini penting karena dalam grafika komputer, posisi objek di scene dan bentuk geometri objek adalah dua lapisan informasi yang berbeda. **Object Mode** lebih dekat ke transformasi objek dalam scene, misalnya untuk penempatan kamera, komposisi, atau hubungan antar objek. **Edit Mode** mengubah **mesh** itu sendiri, yaitu struktur **vertex**, **edge**, dan **face** yang nanti akan diproses oleh pipeline rendering.

Kita juga bisa melihat perbedaan operasinya. Pada **Object Mode**, operasi seperti **duplicate object** dan penggunaan `modifier` bekerja pada objek sebagai satu kesatuan. Pada **Edit Mode**, operasi seperti `extrude`, `inset`, dan `bevel` bekerja pada **topology editing**, yaitu menambah, mengubah, atau memperbaiki struktur geometri. Dengan kata lain, **Object Mode** menjaga bentuk objek tetap utuh, sedangkan **Edit Mode** memberi kita kendali untuk membentuk objek tersebut.

Sebelum lanjut, hal yang harus benar-benar dipahami adalah: jangan mengubah geometri di **Object Mode**, dan jangan memindahkan seluruh objek di **Edit Mode** kecuali memang itu yang kita inginkan. Pemisahan ini membuat alur kerja modeling lebih rapi, karena kita tahu kapan harus memindahkan objek dan kapan harus membentuk objek.

### Inti yang Harus Ditekankan

- **Object Mode** bekerja pada **object keseluruhan**, sedangkan **Edit Mode** bekerja pada **geometry internal**.
- **Transform object** berbeda dengan **transform component**: yang pertama mengubah posisi objek di scene, yang kedua mengubah bagian dari mesh.
- Operasi seperti `duplicate` dan `modifier` berada di level objek, sedangkan `extrude`, `inset`, dan `bevel` berada di level **topology editing**.
- Pemisahan kedua mode ini penting karena **mesh** dan transformasi objek adalah dua lapisan data yang berbeda dalam pipeline rendering.

### Transisi ke Slide Berikutnya

Setelah kita memahami kapan harus memakai **Object Mode** dan kapan harus masuk ke **Edit Mode**, langkah berikutnya adalah melihat apa sebenarnya yang kita ubah di dalam **Edit Mode**, yaitu **Mesh**.

---

## Slide 019 - Mesh

### Narasi

Setelah kita membedakan **Object Mode** dan **Edit Mode**, ada satu struktur yang menjadi pusat pekerjaan ketika kita masuk ke **Edit Mode**, yaitu **mesh**. Dalam grafika komputer, mesh adalah representasi geometri permukaan objek 3D. Ia bukan sekadar bentuk visual, tetapi data yang dapat diproses oleh pipeline rendering: ditransformasi, dirasterisasi, diberi material, dan di-render menjadi citra 2D.

Secara sederhana, mesh tersusun dari tiga elemen dasar:

```text
Vertex
Edge
Face
```

`Vertex` adalah titik, `Edge` adalah garis penghubung antar titik, dan `Face` adalah permukaan yang dibatasi oleh garis-garis tersebut. Jika kita membayangkan sebuah **cube**, strukturnya dapat dibaca sebagai:

```text
8 vertex
12 edge
6 face
```

Angka-angka ini penting karena menunjukkan bahwa bentuk 3D tidak langsung tersimpan sebagai “kotak”, melainkan sebagai kumpulan elemen geometri yang saling terhubung. Delapan titik menentukan posisi sudut, dua belas garis menentukan rusuk, dan enam permukaan menutupi sisi-sisinya.

Hubungan antar `Vertex`, `Edge`, dan `Face` inilah yang membentuk **topology**. Topology menentukan bagaimana mesh dapat dibengkokkan, dipotong, di-deformasi, atau diberi shading. Dalam konteks rendering, topology juga memengaruhi bagaimana normal dihitung, bagaimana tekstur dipetakan, dan bagaimana cahaya berinteraksi dengan permukaan.

Jadi, sebelum masuk ke detail elemen satu per satu, hal yang perlu kita pegang adalah: **mesh adalah struktur dasar objek 3D**, sedangkan `Vertex`, `Edge`, dan `Face` adalah penyusunnya. Pemahaman ini akan menjadi fondasi ketika kita nanti membahas bagaimana setiap elemen tersebut bekerja.

### Inti yang Harus Ditekankan

- **Mesh** adalah struktur geometri dasar objek 3D yang menjadi objek utama editing di **Edit Mode**.
- Penyusun utama mesh adalah `Vertex`, `Edge`, dan `Face`.
- **Topology** adalah hubungan antar elemen mesh yang menentukan bentuk, deformasi, dan perilaku rendering.
- Contoh `cube` menunjukkan struktur dasar: `8 vertex`, `12 edge`, dan `6 face`.

### Transisi ke Slide Berikutnya

Setelah kita melihat mesh sebagai keseluruhan, langkah berikutnya adalah memahami elemen terkecilnya: `Vertex`, yaitu titik dasar yang menentukan posisi di ruang 3D.

---

## Slide 020 - Vertex

### Narasi

Setelah kita melihat bahwa mesh dibangun dari `Vertex`, `Edge`, dan `Face`, sekarang kita mulai dari elemen yang paling kecil: **vertex**. Dalam grafika komputer, vertex bukan sekadar titik abstrak; ia adalah representasi posisi sebuah titik dalam ruang 3D. Bentuknya sederhana, tetapi perannya sangat fundamental karena seluruh geometri 3D pada akhirnya dibangun dari kumpulan titik-titik ini.

Secara matematis, sebuah vertex dapat ditulis sebagai:

```text
P = (X, Y, Z)
```

Di sini, `P` menyatakan posisi titik, sedangkan `X`, `Y`, dan `Z` adalah koordinat pada tiga sumbu ruang. Kita bisa membayangkannya seperti satu titik di dunia 3D: `X` menentukan posisi ke samping, `Y` menentukan tinggi, dan `Z` menentukan kedalaman. Nilai koordinat inilah yang kemudian dibaca oleh sistem rendering untuk menempatkan titik tersebut di layar.

Penting untuk dipahami bahwa vertex adalah **elemen paling dasar dari mesh**. Tanpa vertex, tidak ada titik yang bisa dihubungkan menjadi edge, dan tanpa edge tidak ada face yang bisa dibentuk. Dengan kata lain, vertex adalah bahan baku geometri. Dalam pipeline rendering, data posisi vertex menjadi salah satu input utama yang diproses oleh GPU sebelum objek dikonversi menjadi bentuk yang bisa ditampilkan.

Dalam konteks Blender atau modeling 3D, vertex sering kita lihat sebagai titik kecil pada mesh. Saat kita memodelkan objek, kita pada dasarnya sedang mengatur posisi vertex, menghubungkannya menjadi edge, lalu menutupnya menjadi face. Karena itu, kualitas bentuk objek sangat bergantung pada bagaimana vertex ditempatkan dan bagaimana koordinatnya membentuk struktur geometri.

Hal yang perlu ditekankan adalah bahwa pada slide ini kita fokus pada pengertian dasar vertex sebagai titik 3D. Pemahaman ini penting sebelum kita lanjut ke edge, karena edge tidak bisa dipahami tanpa memahami bahwa ia selalu menghubungkan dua vertex.

### Inti yang Harus Ditekankan

- **Vertex** adalah titik pada ruang 3D yang direpresentasikan sebagai koordinat `P = (X, Y, Z)`.
- Vertex adalah **elemen paling dasar** dari mesh; tanpa vertex, edge dan face tidak dapat terbentuk.
- Koordinat vertex menentukan posisi titik dalam ruang 3D dan menjadi dasar proses rendering.
- Dalam pipeline, data posisi vertex menjadi input penting yang diproses oleh GPU sebelum objek ditampilkan.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa vertex adalah titik dasar, langkah berikutnya adalah melihat bagaimana dua titik tersebut dihubungkan. Di slide berikutnya, kita akan membahas **edge**, yaitu elemen yang menghubungkan dua vertex dan mulai membentuk struktur geometri mesh.

---

## Slide 021 - Edge

### Narasi

Setelah **vertex** sebagai titik, **edge** adalah garis yang menghubungkan dua **vertex**. Dalam mesh 3D, **edge** bukan sekadar garis visual; ia adalah relasi topologi yang menentukan bagaimana titik-titik tersusun menjadi bentuk.

```text
V0 ---- E ---- V1
```

Secara sederhana, setiap **edge** memiliki dua endpoint, yaitu **vertex** awal dan **vertex** akhir. Jika **vertex** adalah koordinat, **edge** adalah koneksi antara koordinat tersebut. Koneksi inilah yang membuat mesh bisa punya struktur, bukan hanya kumpulan titik acak.

**Edge** penting karena membantu membentuk beberapa hal berikut:

- **contour**: garis luar atau alur bentuk objek.
- **boundary**: batas antara area mesh.
- **silhouette**: garis tepi yang terlihat dari sudut pandang kamera.
- **topology**: susunan hubungan vertex, edge, dan face.
- **edge flow**: arah dan kelanjutan edge yang memengaruhi deformasi dan modeling.

Untuk mahasiswa, hal yang perlu diperhatikan adalah **edge flow**. Edge yang mengalir rapi membuat permukaan lebih mudah dibentuk, di-deformasi, dan dirender. Sebaliknya, edge yang berantakan bisa menghasilkan bentuk yang tidak natural, terutama pada area lengkung atau transisi bentuk.

Perlu juga dipahami bahwa **edge** belum cukup untuk membentuk permukaan. Edge baru menjadi bagian dari permukaan ketika ia menyusun **face**. Jadi, pada tahap ini kita sedang membangun kerangka topologi mesh, sebelum masuk ke permukaan yang akan menerima material, lighting, dan shading.

### Inti yang Harus Ditekankan

- **Edge** menghubungkan dua **vertex** dan menjadi relasi topologi dalam mesh.
- **Edge** membantu membentuk **contour**, **boundary**, **silhouette**, **topology**, dan **edge flow**.
- **Edge flow** yang rapi penting untuk modeling, deformasi, dan kualitas bentuk sebelum **face** dibentuk.

### Transisi ke Slide Berikutnya

Setelah **edge** terbentuk, langkah berikutnya adalah melihat bagaimana kumpulan **edge** tersebut menyusun permukaan. Pada slide berikutnya kita akan membahas **face**, yaitu permukaan yang dibentuk oleh **edge**, termasuk **triangle**, **quad**, dan **n-gon**.

---

## Slide 022 - Face

### Narasi

Setelah kita memahami bahwa **edge** menghubungkan dua **vertex**, langkah berikutnya adalah melihat apa yang terjadi ketika beberapa edge bertemu dan menutup suatu area. Area tertutup itulah yang disebut **face**. Dengan kata lain, face adalah permukaan dari sebuah mesh yang dibatasi oleh edge-edge di sekelilingnya.

Face sangat penting karena ia menentukan permukaan objek yang akan kita lihat, edit, shade, atau render. Tanpa face, vertex dan edge hanya berupa kerangka atau garis, belum membentuk permukaan yang utuh. Dalam grafika komputer, face menjadi dasar bagi banyak proses visual, mulai dari modeling, shading, hingga rasterisasi.

Dalam pipeline rendering, face biasanya menjadi salah satu input utama sebelum proses rasterisasi. Secara sederhana, face akan dipecah menjadi banyak fragmen atau pixel yang kemudian diberi warna, tekstur, dan pencahayaan. Karena itu, kualitas face sangat memengaruhi hasil akhir objek 3D.

Bentuk umum face yang sering kita temui adalah:

- `triangle`, yaitu face dengan tiga sisi,
- `quad`, yaitu face dengan empat sisi,
- `n-gon`, yaitu face dengan lebih dari empat sisi.

`Triangle` sering menjadi bentuk yang sangat stabil dalam rendering karena mudah diproses oleh GPU. Banyak pipeline rasterisasi menggunakan triangle sebagai primitive dasar karena bentuknya sederhana dan konsisten secara geometris.

`Quad` sering lebih nyaman untuk modeling, terutama dalam proses `loop-based editing`. Alasannya, quad cenderung menghasilkan alur edge yang lebih teratur, sehingga lebih mudah untuk menambah loop, membentuk permukaan halus, atau melakukan deformasi. Karena itu, dalam banyak workflow modeling, quad sering menjadi pilihan utama.

`N-gon` bisa berguna untuk mempercepat modeling karena menutup area dengan lebih sedikit face, tetapi kadang perlu dihindari atau dibersihkan jika menyebabkan masalah pada shading, deformation, atau tahap lanjutan seperti UV.

Sebelum lanjut, hal penting yang perlu dipahami adalah bahwa face bukan sekadar “isi” dari edge, melainkan elemen yang menentukan permukaan objek. Kualitas face akan sangat memengaruhi kemudahan editing, hasil shading, dan kualitas rendering.

### Inti yang Harus Ditekankan

- **Face** adalah permukaan yang dibentuk oleh edge.
- Bentuk umum face adalah `triangle`, `quad`, dan `n-gon`.
- `Quad` sering lebih nyaman untuk modeling karena mendukung `loop-based editing` yang lebih teratur.
- Dalam rendering, face menjadi dasar proses rasterisasi dan penentuan permukaan objek.

### Transisi ke Slide Berikutnya

Dengan memahami **vertex**, **edge**, dan **face**, kita sudah memiliki tiga elemen dasar penyusun mesh. Selanjutnya, kita akan melihat bagaimana ketiganya saling berhubungan membentuk **topology**, yaitu struktur hubungan yang menentukan kualitas modeling, shading, dan deformasi objek 3D.

---

## Slide 023 - Topology

### Narasi

Setelah kita melihat bahwa **face** adalah permukaan yang dibentuk oleh **edge**, langkah berikutnya adalah memahami bagaimana seluruh elemen mesh saling terhubung. Dalam grafika komputer, mesh tidak hanya kumpulan titik, garis, dan permukaan yang berdiri sendiri, tetapi sebuah struktur data yang saling merujuk.

Kita bisa membacanya dari diagram sederhana:

```text
Vertex ↔ Edge ↔ Face
```

Panah dua arah ini penting. Artinya, **vertex** terhubung ke **edge**, **edge** terhubung ke **face**, dan sebaliknya. Misalnya, satu vertex dapat menjadi ujung beberapa edge, satu edge dapat membatasi dua face, dan satu face dapat dibentuk oleh beberapa edge. Hubungan inilah yang membentuk **topology**.

**Topology** adalah struktur hubungan antar elemen mesh. Ia menentukan bagaimana objek dapat diedit, bagaimana permukaan dapat di-shading, dan bagaimana objek dapat dideformasi. Dalam konteks rendering, topology yang rapi membantu proses rendering dan perhitungan permukaan menjadi lebih stabil.

Topology yang baik membantu beberapa hal penting:

- **editing**, karena perubahan pada satu bagian mesh tidak merusak struktur sekitarnya secara tidak terduga;
- **shading**, karena arah dan distribusi face memengaruhi hasil pencahayaan;
- **deformation**, karena mesh yang terorganisasi baik lebih mudah mengikuti gerakan atau perubahan bentuk;
- **tahap UV berikutnya**, karena pemetaan texture membutuhkan permukaan yang dapat dibaca secara konsisten.

Secara intuitif, kita bisa membayangkan topology seperti kerangka jalan pada peta. **Vertex** adalah simpul, **edge** adalah ruas jalan, dan **face** adalah wilayah yang dibatasi ruas-ruas tersebut. Jika struktur jalan rapi, navigasi lebih mudah. Begitu juga dalam 3D modeling: jika hubungan vertex-edge-face rapi, proses modeling dan rendering menjadi lebih terkendali.

Sebelum lanjut, yang perlu kita pegang adalah bahwa topology bukan sekadar tampilan objek, tetapi organisasi data mesh. Objek yang terlihat sama secara visual dapat memiliki topology yang berbeda, dan perbedaan itu akan memengaruhi kemudahan editing, shading, deformation, serta tahap pemetaan texture.

### Inti yang Harus Ditekankan

- **Topology** adalah struktur hubungan antara `Vertex`, `Edge`, dan `Face`.
- Hubungan ini bersifat dua arah: elemen mesh saling merujuk satu sama lain.
- Topology yang baik mendukung **editing**, **shading**, **deformation**, dan persiapan **UV mapping**.
- Topology adalah dasar organisasi mesh, bukan hanya bentuk visual objek.

### Transisi ke Slide Berikutnya

Untuk memanipulasi topology, kita perlu memilih elemen mesh yang akan diubah. Karena itu, langkah berikutnya adalah memahami **selection mode** di Edit Mode, yaitu cara memilih vertex, edge, atau face sesuai operasi yang sedang dilakukan.

---

## Slide 024 - Selection Mode di Edit Mode

### Narasi

Setelah kita memahami bahwa mesh terdiri dari **Vertex**, **Edge**, dan **Face**, langkah berikutnya adalah memilih elemen mana yang akan kita operasikan. Di Blender, saat kita berada di **Edit Mode**, kita dapat mengubah **selection mode** menggunakan tombol `1`, `2`, dan `3`.

```text
1 → Vertex
2 → Edge
3 → Face
```

Notasi ini dibaca sebagai pemetaan shortcut ke mode seleksi. Tombol `1` mengaktifkan mode **Vertex**, tombol `2` mengaktifkan mode **Edge**, dan tombol `3` mengaktifkan mode **Face**. Artinya, Blender akan memilih dan menampilkan elemen mesh pada level yang sesuai dengan tombol yang kita tekan.

Pilihan mode ini penting karena operasi editing biasanya bergantung pada level elemen yang sedang dipilih. Jika kita ingin memindahkan titik, kita menggunakan mode **Vertex**. Jika kita ingin memanipulasi garis atau struktur tepi, kita menggunakan mode **Edge**. Jika kita ingin memilih permukaan atau area tertentu, kita menggunakan mode **Face**.

Dengan memilih mode yang sesuai, kita dapat menghindari perubahan yang tidak diinginkan pada elemen lain. Misalnya, jika kita ingin menggeser satu titik, tetapi masih berada di mode **Face**, Blender akan memilih permukaan, bukan titik. Akibatnya, hasil editing bisa berbeda dari yang kita harapkan.

Dalam konteks grafika komputer, pemilihan elemen mesh yang tepat menjadi dasar dari proses modeling. Kualitas editing pada level **Vertex**, **Edge**, dan **Face** akan memengaruhi bentuk objek, shading, deformation, dan tahap UV yang akan kita temui pada materi berikutnya.

Sebelum lanjut, yang perlu kita pegang adalah: **selection mode menentukan level elemen mesh yang dapat dipilih dan diedit**. Jadi, sebelum melakukan operasi tertentu, kita perlu memastikan mode seleksi sudah sesuai dengan tujuan editing.

### Inti yang Harus Ditekankan

- `1`, `2`, dan `3` adalah shortcut untuk memilih **Vertex**, **Edge**, dan **Face** di **Edit Mode**.
- **Selection mode** menentukan level elemen mesh yang dapat dipilih dan diedit.
- Gunakan mode yang sesuai dengan operasi agar editing lebih aman, akurat, dan efisien.

### Transisi ke Slide Berikutnya

Setelah kita memahami cara memilih elemen mesh, langkah berikutnya adalah membuat objek awal yang akan kita model. Pada slide berikutnya, kita akan melihat cara menambah **primitive** seperti `Cube`, `Sphere`, `Cylinder`, `Plane`, `Cone`, dan `Torus` menggunakan `Shift + A`.

---

## Slide 025 - Menambah Primitive

### Narasi

Setelah kita memahami **selection mode** di Edit Mode, langkah berikutnya adalah menyediakan objek yang bisa diseleksi dan dimodifikasi. Dalam Blender, objek dasar biasanya ditambahkan melalui menu **Add** dengan shortcut `Shift + A`, lalu memilih kategori `Mesh`.

```text
Shift + A
→ Mesh
```

Perintah ini membuka daftar **primitive**, yaitu bentuk geometri dasar yang sudah memiliki struktur mesh. Primitive penting karena menjadi **starting point** banyak model 3D. Sebelum kita memodelkan bentuk kompleks, biasanya kita mulai dari bentuk sederhana yang kemudian diubah melalui operasi mesh seperti extrude, bevel, scale, atau modifikasi vertex, edge, dan face.

Beberapa primitive umum yang perlu dikenali adalah:

- **Cube** — cocok untuk objek kotak, bangunan, furniture, atau bentuk hard-surface.
- **Sphere** — berguna untuk objek bulat atau permukaan melengkung.
- **Cylinder** — sering dipakai untuk pipa, roda, kolom, atau bentuk silindris.
- **Plane** — biasanya menjadi dasar lantai, ground, atau permukaan datar.
- **Cone** — berguna untuk objek meruncing atau bentuk tapered.
- **Torus** — cocok untuk cincin, ring, atau bentuk melingkar dengan lubang.

Dari sudut pandang grafika komputer, primitive adalah representasi geometri awal yang akan masuk ke **rendering pipeline**. Setelah dibuat, objek ini dapat diberi transformasi, material, lighting, dan kemudian diproses oleh GPU untuk rasterisasi. Jadi, memilih primitive yang tepat membantu kita membangun model dengan struktur yang lebih rapi dan efisien.

Yang perlu diperhatikan bukan hanya cara menambah primitive, tetapi juga memahami kapan primitive tertentu lebih sesuai. Misalnya, untuk objek yang banyak sudut tajam, `Cube` biasanya lebih mudah dikontrol. Untuk objek organik atau bulat, `Sphere` atau `Cylinder` bisa menjadi titik awal yang lebih natural. Dengan begitu, proses modeling tidak dimulai dari nol, melainkan dari bentuk dasar yang sudah memiliki topologi mesh.

### Inti yang Harus Ditekankan

- `Shift + A` → `Mesh` adalah cara cepat untuk menambahkan **primitive** di Blender.
- Primitive seperti **Cube**, **Sphere**, **Cylinder**, **Plane**, **Cone**, dan **Torus** adalah titik awal modeling.
- Primitive menyediakan struktur mesh dasar yang kemudian dapat dimodifikasi menjadi objek yang lebih kompleks.
- Pemilihan primitive yang tepat membantu proses modeling menjadi lebih efisien dan sesuai bentuk akhir.

### Transisi ke Slide Berikutnya

Setelah primitive dibuat, sering kali kita membutuhkan beberapa objek serupa, misalnya roda, pilar, atau detail yang berulang. Untuk itu, langkah berikutnya adalah memahami cara **duplicate object** menggunakan `Shift + D`, serta bagaimana menata hasil duplikasi agar tetap rapi.

---

## Slide 026 - Duplicate Object

### Narasi

Setelah kita menambahkan primitive seperti cube, sphere, cylinder, plane, cone, atau torus, langkah berikutnya yang sering kita butuhkan adalah membuat salinan objek tanpa harus membuat ulang dari awal. Untuk itu, Blender menyediakan shortcut `Shift + D`.

```text
Shift + D
```

Shortcut ini digunakan untuk **Duplicate Object**, yaitu membuat duplikat dari objek yang sedang terpilih. Pada awalnya, salinan tersebut berada di posisi yang sama dengan objek asli, lalu kita bisa memindahkannya ke posisi yang diinginkan.

Prosesnya cukup sederhana:

1. Pilih objek yang ingin diduplikasi.
2. Tekan `Shift + D`.
3. Geser mouse untuk memindahkan salinan.
4. Klik kiri untuk mengunci posisi salinan.
5. Jika perlu, gunakan **axis constraint** agar gerakan hanya mengikuti satu sumbu, misalnya sumbu X, Y, atau Z.

Konsep ini penting dalam modeling karena banyak objek 3D tersusun dari elemen yang berulang. Misalnya:

- **wheel** pada kendaraan,
- **pillar** pada struktur bangunan,
- **repeated props** seperti kursi, lampu, atau panel,
- **detail berulang** yang membuat model lebih lengkap tanpa menambah banyak pekerjaan manual.

Dengan duplicate, kita bisa membangun adegan atau model secara lebih efisien. Objek salinan tetap menjadi objek 3D yang valid, sehingga nantinya bisa ditransformasi, diberi material, diterangi, dan dirender seperti objek lain dalam pipeline rendering.

Hal yang perlu dipahami mahasiswa adalah bahwa duplicate bukan sekadar “menempelkan” gambar, tetapi membuat objek baru yang dapat diposisikan ulang. Jika kita ingin penempatan yang rapi, misalnya roda yang sejajar pada sumbu tertentu, gunakan axis constraint agar hasil modeling lebih presisi dan konsisten.

### Inti yang Harus Ditekankan

- `Shift + D` adalah shortcut untuk **Duplicate Object** pada objek terpilih.
- Duplicate berguna untuk membuat elemen berulang seperti wheel, pillar, repeated props, dan detail berulang.
- Setelah duplicate, salinan dapat dipindahkan dan dibatasi gerakannya dengan **axis constraint** agar posisi lebih rapi.
- Duplicate membantu mempercepat proses modeling karena objek tidak perlu dibuat ulang dari primitive.

### Transisi ke Slide Berikutnya

Setelah kita bisa membuat dan menduplikasi objek, kita juga perlu tahu bagaimana mengelola perubahan saat modeling. Selanjutnya, kita akan membahas `X / Delete`, `Ctrl + Z`, dan `Shift + Ctrl + Z` untuk menghapus objek serta melakukan undo dan redo.

---

## Slide 027 - Delete, Undo, Redo

### Narasi

Setelah kita bisa menduplikasi objek, ada dua kebutuhan dasar yang selalu muncul dalam proses modeling: membersihkan scene dan memperbaiki kesalahan. Slide ini membahas tiga perintah yang sangat sederhana, tetapi sangat menentukan kenyamanan kerja: **Delete**, **Undo**, dan **Redo**.

```text
X / Delete        → Delete
Ctrl + Z          → Undo
Shift + Ctrl + Z  → Redo
```

Perintah `X / Delete` digunakan untuk menghapus objek yang sedang dipilih. Dalam modeling, kita sering membuat objek sementara, mencoba posisi, atau menduplikasi elemen seperti wheel, pillar, atau detail berulang. Jika objek tersebut tidak lagi dibutuhkan, menghapusnya membuat scene lebih rapi dan proses rendering atau preview menjadi lebih fokus.

`Ctrl + Z` adalah perintah **Undo**, yaitu membatalkan langkah terakhir. Perintah ini penting karena modeling 3D sering bersifat eksploratif. Kita bisa mencoba memindahkan objek, mengubah bentuk, menambah detail, atau menghapus elemen, lalu membatalkan langkah jika hasilnya tidak sesuai. Dengan **Undo**, mahasiswa tidak perlu takut mencoba karena masih ada jalan kembali.

`Shift + Ctrl + Z` adalah perintah **Redo**, yaitu mengulang langkah yang sebelumnya dibatalkan. Jadi, jika kita terlalu cepat menekan **Undo** dan ingin kembali ke kondisi sebelum pembatalan, **Redo** membantu memulihkan langkah tersebut. Kombinasi **Undo** dan **Redo** membuat proses modeling menjadi lebih fleksibel dan tidak kaku.

Dalam konteks grafika komputer, tahap modeling adalah tahap pembentukan geometri sebelum objek masuk ke proses yang lebih lanjut seperti transformasi, material, lighting, dan rendering. Jika geometri dasar sudah salah atau scene terlalu berantakan, hasil visual berikutnya juga akan sulit dikontrol. Karena itu, **Delete**, **Undo**, dan **Redo** bukan sekadar shortcut kecil, tetapi bagian penting dari alur kerja 3D modeling.

### Inti yang Harus Ditekankan

- `X / Delete` digunakan untuk menghapus objek terpilih.
- `Ctrl + Z` digunakan untuk **Undo** atau membatalkan langkah terakhir.
- `Shift + Ctrl + Z` digunakan untuk **Redo** atau mengulang langkah yang dibatalkan.
- **Undo** dan **Redo** penting untuk eksplorasi modeling karena memungkinkan mahasiswa mencoba, memperbaiki, dan kembali ke kondisi sebelumnya.
- Scene yang rapi dan riwayat kerja yang aman membantu proses modeling menjadi lebih terkontrol.

### Transisi ke Slide Berikutnya

Setelah kita bisa menghapus objek dan mengelola langkah kerja dengan **Undo** dan **Redo**, langkah berikutnya adalah memastikan transformasi objek sudah diterapkan dengan benar. Pada slide berikutnya, kita akan membahas **Apply Transform**, khususnya `Ctrl + A` untuk **Scale**, yang penting dilakukan sebelum beberapa operasi seperti **Bevel** dan **Modifier** agar hasil modeling lebih konsisten.

---

## Slide 028 - Apply Transform

### Narasi

Dalam tahap modeling, kita sering mengubah ukuran objek dengan **Scale**. Namun, perubahan skala biasanya tersimpan sebagai nilai transformasi, bukan langsung mengubah ukuran asli geometri. Shortcut yang perlu kita perhatikan adalah:

```text
Ctrl + A
→ Scale
```

Perintah ini digunakan untuk **Apply Scale**, yaitu menerapkan nilai skala objek ke geometri sehingga nilai skala kembali ke kondisi netral. Secara visual, objek tetap terlihat sama, tetapi data transformasinya menjadi lebih rapi.

Mengapa ini penting? Beberapa operasi modeling, seperti **Bevel** dan **Modifier**, dapat berperilaku berbeda jika objek masih memiliki nilai skala yang tidak netral. Misalnya, hasil bevel atau modifikasi bisa terlihat tidak seragam karena operasi tersebut membaca skala lokal objek. Dengan **Apply Scale** terlebih dahulu, kita mengurangi risiko hasil yang tidak konsisten.

Kita bisa memahami ini sebagai langkah pembersihan transformasi sebelum masuk ke operasi yang lebih sensitif terhadap ukuran objek. Jadi, setelah melakukan scaling, terutama jika akan memakai bevel, modifier, atau operasi lain yang bergantung pada dimensi objek, sebaiknya kita cek apakah skala perlu diterapkan.

Perlu diingat, **Apply Scale** tidak selalu wajib untuk setiap perubahan skala. Namun, untuk alur kerja modeling yang rapi dan hasil yang dapat diprediksi, kebiasaan ini sangat membantu. Mahasiswa perlu memahami bahwa transformasi tidak hanya mengubah tampilan, tetapi juga memengaruhi bagaimana operasi berikutnya memproses objek.

### Inti yang Harus Ditekankan

- `Ctrl + A` lalu pilih **Scale** digunakan untuk **Apply Scale**.
- **Apply Scale** membuat nilai skala objek kembali netral tanpa mengubah tampilan visualnya.
- Langkah ini penting sebelum operasi seperti **Bevel** dan **Modifier** agar hasil lebih konsisten.
- Kebiasaan menerapkan transformasi membantu alur modeling menjadi lebih rapi dan dapat diprediksi.

### Transisi ke Slide Berikutnya

Setelah transformasi objek dirapikan, langkah berikutnya adalah memastikan posisi objek presisi. Untuk itu, kita akan masuk ke **Snapping**, yaitu fitur yang membantu menyelaraskan objek ke titik, garis, bidang, atau grid.

---

## Slide 029 - Snapping

### Narasi

Dalam pemodelan 3D, kita sering perlu menempatkan elemen geometri pada posisi yang tepat. Jika hanya mengandalkan gerakan bebas, hasil mesh bisa miring, tidak rata, atau muncul celah kecil yang sulit terlihat secara visual. **Snapping** hadir sebagai bantuan presisi agar elemen yang sedang diedit dapat “terkunci” ke acuan tertentu.

```text
Shift + Tab
→ Toggle Snapping
```

Shortcut `Shift + Tab` berfungsi untuk menyalakan atau mematikan mode snapping. Saat mode ini aktif, Blender akan mencari target acuan terdekat, lalu membantu menempatkan vertex, edge, face, atau objek pada posisi yang lebih konsisten.

Target snapping yang tersedia pada slide ini adalah:

- **Vertex** — acuan ke titik sudut mesh.
- **Edge** — acuan ke garis atau sisi mesh.
- **Face** — acuan ke bidang permukaan mesh.
- **Grid** — acuan ke grid kerja di viewport.

Pilihan target ini penting karena menentukan seberapa presisi dan dalam konteks apa kita ingin melakukan alignment. Misalnya, snapping ke **Vertex** berguna untuk menyambungkan titik mesh secara akurat, snapping ke **Grid** membantu menjaga posisi tetap rapi pada satuan grid, dan snapping ke **Face** dapat membantu penempatan elemen pada bidang tertentu.

Inti yang perlu dipahami mahasiswa adalah snapping bukan sekadar fitur visual, melainkan alat untuk menjaga kualitas geometri. Mesh yang rapi dan presisi akan memudahkan tahap pemodelan berikutnya, seperti penyesuaian bentuk, penggunaan modifier, atau pembuatan detail tambahan.

### Inti yang Harus Ditekankan

- `Shift + Tab` digunakan untuk **toggle snapping**.
- Snap target dapat berupa **Vertex**, **Edge**, **Face**, atau **Grid**.
- Snapping membantu **alignment presisi** pada pemodelan 3D.
- Geometri yang presisi penting untuk menjaga mesh tetap rapi dan konsisten.

### Transisi ke Slide Berikutnya

Setelah kita memahami cara menempatkan elemen secara presisi menggunakan snapping, langkah berikutnya adalah membuat penyesuaian bentuk yang lebih halus dan natural dengan **Proportional Editing**.

---

## Slide 030 - Proportional Editing

### Narasi

Setelah kita membahas **Snapping** untuk membantu presisi posisi, sekarang kita masuk ke fitur yang membuat penyesuaian bentuk terasa lebih natural, yaitu **Proportional Editing**.

```text
O
→ Proportional Editing
```

Tombol `O` digunakan untuk mengaktifkan atau menonaktifkan **Proportional Editing**. Ketika fitur ini aktif, perubahan yang kita lakukan pada satu bagian geometri tidak hanya memengaruhi elemen yang sedang dipilih, tetapi juga elemen-elemen di sekitarnya.

Artinya, jika kita memindahkan satu **vertex**, **edge**, atau **face**, Blender akan menyesuaikan geometri di sekitar area tersebut secara bertahap. Efeknya tidak tiba-tiba atau kaku, melainkan meluruh secara halus berdasarkan jarak dari titik yang sedang kita geser.

Radius pengaruh dari penyesuaian ini dapat diatur menggunakan **Mouse Wheel**. Semakin besar radiusnya, semakin banyak geometri di sekitar yang ikut terpengaruh. Sebaliknya, jika radiusnya kecil, efek penyesuaian akan lebih lokal dan lebih terkendali.

Fitur ini sangat berguna ketika kita ingin memperbaiki bentuk objek secara halus, misalnya merapikan siluet, membuat transisi antar bagian lebih lembut, atau menyesuaikan proporsi model tanpa harus memilih banyak elemen satu per satu.

Jadi, **Proportional Editing** membantu kita berpikir seperti sedang membentuk material yang fleksibel, bukan hanya memindahkan titik geometri secara individual.

### Inti yang Harus Ditekankan

- `O` digunakan untuk toggle **Proportional Editing**.
- **Mouse Wheel** mengatur radius pengaruh penyesuaian.
- Fitur ini membuat perubahan bentuk lebih halus dan natural.
- Cocok digunakan untuk penyesuaian bentuk secara proporsional, bukan hanya pada elemen terpilih.

### Transisi ke Slide Berikutnya

Setelah kita bisa menyesuaikan bentuk secara halus, langkah berikutnya dalam modeling adalah menambah geometri baru. Pada slide berikutnya, kita akan membahas **Extrude**, yaitu operasi dasar untuk memperluas bentuk dari selection yang sudah ada.

---

## Slide 031 - Extrude

### Narasi

**Extrude** adalah salah satu operasi modeling paling dasar dalam Blender. Intinya, extrude mengambil elemen yang sedang dipilih—misalnya face, edge, atau vertex—lalu memperluasnya menjadi geometri baru. Dalam konteks slide ini, alurnya sederhana: kita memilih face, menekan `E`, lalu memindahkan hasil extrude.

```text
E
```

Perintah `E` adalah shortcut untuk memulai operasi extrude. Setelah `E` ditekan, Blender membuat geometri baru yang terhubung dengan selection awal. Pada tahap ini, gerakan mouse menentukan arah dan jarak extrude. Jika kita hanya melakukan `Move`, hasilnya bergantung pada gerakan pointer; ini berguna untuk penyesuaian bentuk yang bebas.

Alur yang ditampilkan pada slide adalah:

```text
Select Face → E → Move
```

Alur ini penting karena menunjukkan urutan kerja modeling yang berulang di Blender. Pertama, **selection** menentukan bagian objek apa yang akan diubah. Kedua, `E` memicu operasi extrude. Ketiga, `Move` menentukan posisi akhir geometri baru. Urutan ini membuat mahasiswa terbiasa berpikir dari selection, operasi, lalu transformasi.

Dari sisi grafika komputer, extrude penting karena mengubah representasi geometri objek. Objek 3D pada dasarnya dibangun dari **mesh**, yaitu kumpulan vertex, edge, dan face. Extrude menambah face dan edge baru, sehingga mesh menjadi lebih kompleks dan mampu membentuk bentuk yang lebih nyata. Dalam pipeline rendering, geometri yang dihasilkan dari modeling seperti extrude akan menjadi input untuk transformasi, rasterisasi, shading, dan lighting.

Yang perlu dipahami sebelum lanjut adalah bahwa extrude bukan sekadar menambah bentuk, tetapi mengubah **topologi mesh**. Jika selection salah, hasil extrude juga salah. Karena itu, kebiasaan memilih face, edge, atau vertex dengan tepat sangat menentukan kualitas modeling. Pada slide berikutnya, kita akan melihat bagaimana extrude dapat dibatasi pada sumbu tertentu agar hasilnya lebih presisi.

### Inti yang Harus Ditekankan

- **Extrude** menambah geometri baru dari selection.
- Shortcut `E` digunakan untuk memulai operasi extrude.
- Alur `Select Face → E → Move` menunjukkan urutan selection, operasi, lalu transformasi.
- Extrude mengubah mesh dan topologi objek, sehingga menjadi dasar pembentukan bentuk 3D.

### Transisi ke Slide Berikutnya

Setelah memahami extrude bebas, langkah berikutnya adalah mengendalikan arah extrude dengan axis constraint, misalnya `E Z`, agar geometri baru mengikuti sumbu Z secara lebih presisi.

---

## Slide 032 - Extrude dengan Axis

### Narasi

Setelah perintah dasar **extrude**, kita perlu memperhatikan arah pergerakan geometri yang ditambahkan. Pada operasi sebelumnya, extrude dilakukan dengan `E`, lalu posisi baru dapat dipindahkan secara bebas. Namun, dalam modeling 3D, sering kali kita membutuhkan hasil yang lebih rapi dan terukur.

Contoh yang ditampilkan adalah:

```text
E Z
```

Artinya, setelah memilih face atau elemen yang akan diekstrude, kita menekan `E` lalu `Z`. Dengan urutan ini, Blender membatasi gerakan extrude hanya mengikuti **sumbu Z**.

Secara visual, tanpa constraint, extrude bisa bergerak bebas ke arah mana pun. Dengan `Z`, gerakan menjadi terkunci pada satu sumbu. Hal ini membuat hasil modeling lebih rapi, konsisten, dan mudah diprediksi.

Dalam grafika komputer, presisi seperti ini penting karena mesh yang kita buat akan menjadi dasar untuk transformasi, lighting, shading, dan rendering. Jika geometri dibuat miring atau tidak konsisten, masalah bisa muncul pada tahap berikutnya, misalnya bentuk objek tidak simetris atau detail permukaan tidak rapi.

Jadi, yang perlu kita pahami di sini adalah: **axis constraint** bukan sekadar pintasan, tetapi cara untuk menjaga bentuk tetap presisi. `E Z` adalah contoh sederhana dari prinsip yang sama: extrude tetap dilakukan, tetapi arahnya dikendalikan oleh sumbu.

### Inti yang Harus Ditekankan

- `E Z` berarti extrude dibatasi mengikuti **sumbu Z**.
- **Axis constraint** membuat hasil modeling lebih presisi dan konsisten.
- Presisi geometri penting karena mesh akan digunakan pada tahap transformasi, lighting, shading, dan rendering.

### Transisi ke Slide Berikutnya

Setelah kita bisa mengekstrude dengan arah yang terkendali, langkah berikutnya adalah membuat face baru di dalam face yang sudah ada. Pada slide berikutnya, kita akan membahas **Inset**, yaitu operasi yang berguna untuk membuat panel, border, window, indentation, dan detail permukaan.

---

## Slide 033 - Inset

### Narasi

Setelah kita sudah terbiasa memilih face dan melakukan extrude, ada satu operasi yang sangat sering dipakai untuk memberi detail permukaan: **Inset**.

Di Blender, perintah ini biasanya dilakukan dengan menekan:

```text
I
```

Artinya, setelah kita memilih sebuah face, kita menekan `I` untuk membuat face baru di dalam face tersebut.

Secara visual, **Inset** tidak menghapus face asli. Face asli berubah menjadi **border** atau **rim** di sekeliling face baru. Jadi, satu face yang tadinya datar berubah menjadi dua bagian: area dalam dan area tepi.

Operasi ini penting dalam 3D modeling karena banyak detail objek tidak muncul dari bentuk besar, tetapi dari garis tepi yang rapi. Dengan Inset, kita bisa membuat garis tepi yang paralel dan konsisten di permukaan objek.

Beberapa penggunaan umum Inset adalah:

- **panel**, yaitu area permukaan yang terlihat seperti bagian terpisah;
- **border**, yaitu bingkai atau tepi di sekeliling area tertentu;
- **window**, yaitu lubang atau area yang nanti bisa diberi material kaca;
- **indentation**, yaitu permukaan yang masuk ke dalam;
- **detail permukaan**, yaitu garis atau area kecil yang membuat objek terlihat lebih realistis.

Perlu kita perhatikan bahwa Inset bekerja pada **face terpilih**. Jika face tidak dipilih, perintah `I` tidak akan menghasilkan face baru. Selain itu, jarak inset menentukan seberapa besar face baru yang terbentuk di dalam face asli.

Sebelum lanjut, hal penting yang harus dipahami adalah: Inset bukan sekadar membuat lubang. Inset membuat **topologi baru** yang bisa kita gunakan untuk extrude, bevel, memberi material berbeda, atau membentuk detail hard-surface.

### Inti yang Harus Ditekankan

- **Inset** membuat face baru di dalam face terpilih.
- Shortcut yang digunakan adalah `I` setelah face dipilih.
- Face asli berubah menjadi **border** atau **rim** di sekeliling face baru.
- Inset berguna untuk membuat **panel**, **border**, **window**, **indentation**, dan **detail permukaan**.
- Hasil Inset memengaruhi kualitas garis tepi dan kesiapan objek untuk detail berikutnya.

### Transisi ke Slide Berikutnya

Setelah kita memahami cara membuat face baru di dalam face, langkah berikutnya adalah menggabungkannya dengan extrude. Pada slide berikutnya, kita akan melihat alur umum **Select Face → `I` → Inset → `E` → Extrude Inward/Outward** untuk membuat detail hard-surface yang lebih nyata.

---

## Slide 034 - Inset + Extrude

### Narasi

Setelah kita memahami `Inset` sebagai cara membuat face baru di dalam face terpilih, langkah berikutnya adalah menggabungkannya dengan `Extrude`. Kombinasi ini sering dipakai karena satu alur kerja sederhana sudah cukup untuk membuat detail permukaan yang lebih realistis.

Alur pada slide dibaca dari atas ke bawah:

```text
Select Face
↓
I
↓
Inset
↓
E
↓
Extrude Inward / Outward
```

Artinya, kita mulai dengan memilih satu face. Tekan `I` untuk membuat face baru di bagian dalam face tersebut. Setelah face dalam terbentuk, tekan `E` untuk mengekstrude face itu ke arah keluar atau masuk. Dengan kata lain, `Inset` menyiapkan area detail, sedangkan `Extrude` memberi kedalaman pada area tersebut.

Kombinasi ini penting dalam **hard-surface modeling** karena banyak objek teknis memiliki detail seperti panel, tombol, ventilasi, border, atau lekukan mekanis. Jika hanya menggunakan `Inset`, detail masih datar. Jika langsung `Extrude` tanpa `Inset`, kita bisa kehilangan kontrol atas area yang ingin dinaikkan atau diturunkan. Dengan menggabungkannya, bentuk detail menjadi lebih rapi dan topologi mesh tetap mudah dikendalikan.

Dalam konteks grafika komputer, langkah ini masih berada pada tahap **geometri** sebelum objek masuk ke pipeline rendering. Mesh yang dihasilkan dari `Inset + Extrude` akan menentukan bagaimana permukaan objek dihitung, diterangi, dan akhirnya di-rasterisasi ke layar. Karena itu, kualitas detail tidak hanya soal tampilan akhir, tetapi juga struktur vertex, edge, dan face yang mendukung shading serta modeling lanjutan.

Sebelum lanjut, mahasiswa perlu memahami bahwa urutan `I` lalu `E` bukan sekadar shortcut, melainkan alur kerja: pilih face, buat area dalam, lalu beri kedalaman. Pahami juga arah extrude: **outward** untuk menonjolkan detail, **inward** untuk membuat lekukan atau recess.

### Inti yang Harus Ditekankan

- `Inset` membuat face baru di dalam face terpilih.
- `Extrude` memberi kedalaman pada face hasil inset.
- Urutan `I` lalu `E` adalah alur kerja umum untuk detail hard-surface.
- Arah extrude menentukan detail menonjol atau masuk.
- Hasilnya memengaruhi topologi mesh sebelum shading dan rendering.

### Transisi ke Slide Berikutnya

Setelah kita bisa membuat detail permukaan dengan `Inset + Extrude`, sering kali kita masih perlu menambah garis edge untuk mengatur bentuk. Pada slide berikutnya, kita akan membahas `Loop Cut` dengan `Ctrl + R` sebagai cara menambahkan edge loop, terutama pada quad topology.

---

## Slide 035 - Loop Cut

### Narasi

**Loop Cut** adalah operasi dasar untuk menambah **edge loop** pada mesh 3D. Perintah utamanya adalah:

```text
Ctrl + R
```

Secara intuitif, edge loop dapat dibayangkan sebagai garis kontrol yang melintasi permukaan mesh. Ketika kita menambahkan loop cut, kita sedang menambah jalur edge baru yang membantu mengatur bentuk permukaan, bukan sekadar memotong mesh secara acak.

Operasi ini penting dalam grafika komputer karena kualitas pemodelan sangat bergantung pada **alur edge**. Mesh yang memiliki edge loop yang baik lebih mudah dibentuk, lebih konsisten saat bentuknya dikembangkan, dan lebih siap untuk detail lanjutan. Dalam konteks materi sebelumnya tentang `Inset` dan `Extrude`, loop cut sering menjadi langkah pendukung untuk menyiapkan area mesh sebelum detail ditambahkan.

Cara membacanya cukup sederhana:

1. Tekan `Ctrl + R` untuk memulai loop cut.
2. Garis cut akan muncul mengikuti arah loop pada mesh.
3. `Mouse Wheel` dapat digunakan untuk menambah jumlah cut.
4. Hasil akhirnya adalah tambahan edge loop pada geometri.

Poin penting berikutnya adalah bahwa Loop Cut **paling efektif pada quad topology**. Quad topology berarti mesh didominasi face berbentuk empat sisi, sehingga edge loop cenderung teratur, mudah dibaca, dan tidak mudah menimbulkan masalah saat mesh dikembangkan lebih lanjut. Dengan topology yang rapi, loop cut menghasilkan garis pemotong yang konsisten dan mendukung pemodelan yang lebih bersih.

Sebelum lanjut, mahasiswa perlu memahami bahwa loop cut bukan hanya menambah garis, tetapi menambah **struktur kontrol geometri**. Pemahaman ini akan membantu saat kita mulai menambahkan detail permukaan, memperbaiki bentuk, atau menyiapkan mesh untuk tahap berikutnya.

### Inti yang Harus Ditekankan

- `Ctrl + R` adalah perintah **Loop Cut** untuk menambahkan **edge loop**.
- `Mouse Wheel` digunakan untuk menambah jumlah cut.
- Loop Cut paling efektif pada **quad topology** karena menghasilkan alur edge yang lebih teratur dan mudah dikontrol.
- Edge loop berfungsi sebagai struktur kontrol yang membantu membentuk mesh secara konsisten.

### Transisi ke Slide Berikutnya

Setelah kita memahami cara menambah edge loop, langkah berikutnya adalah merapikan edge yang masih tajam. Pada slide berikutnya, kita akan melihat **Bevel** melalui `Ctrl + B`, yang mengubah edge menjadi permukaan tambahan.

---

## Slide 036 - Bevel

### Narasi

Ketika sebuah objek 3D memiliki tepi yang benar-benar tajam, secara visual tepi itu sering terlihat terlalu keras, terutama saat terkena cahaya. Dalam Blender, operasi **Bevel** digunakan untuk mengubah edge tajam menjadi permukaan tambahan yang sedikit melengkung atau membulat.

```text
Ctrl + B
```

Secara sederhana, **Bevel** tidak hanya membuat garis tepi menjadi lebih halus, tetapi juga menambahkan geometri baru di sekitar edge. Jika kita memilih satu atau beberapa edge lalu menekan `Ctrl + B`, Blender akan membuat strip permukaan kecil di sepanjang tepi tersebut. Dengan `Mouse Wheel`, kita dapat menambah **segments**, artinya jumlah potongan kecil pada bevel bertambah sehingga transisi dari permukaan utama ke tepi menjadi lebih halus.

```text
Mouse Wheel: menambah segments
```

Hal ini penting dalam grafika komputer karena pencahayaan pada permukaan 3D sangat bergantung pada **normal** dan bentuk geometri. Edge yang benar-benar tajam hanya memiliki sedikit atau tidak ada area permukaan untuk memantulkan cahaya secara gradual. Akibatnya, highlight bisa terlihat terlalu tajam, pecah, atau tidak realistis. Dengan bevel, ada area permukaan tambahan yang dapat menangkap **highlight** secara lebih natural, sehingga objek terlihat lebih solid dan lebih sesuai dengan perilaku material di dunia nyata.

Dalam konteks rendering pipeline, bevel bekerja pada tahap **geometri** sebelum rasterisasi dan shading. Ia mengubah mesh dengan menambah vertex, edge, dan face baru di sekitar tepi. Semakin banyak segments, semakin halus permukaan bevel, tetapi juga semakin tinggi jumlah poligon. Karena itu, mahasiswa perlu memahami bahwa bevel bukan sekadar efek visual instan, melainkan perubahan topologi mesh yang memengaruhi kualitas tampilan dan performa rendering.

Sebelum melanjutkan, hal penting yang harus dipahami adalah: bevel paling berguna untuk memperhalus tepi yang akan terlihat oleh kamera, terutama pada objek dengan material glossy atau metalik. Namun, bevel juga harus digunakan secara sadar karena dapat menambah kompleksitas mesh. Jika terlalu banyak segments pada objek besar, jumlah poligon bisa meningkat tanpa perlu.

### Inti yang Harus Ditekankan

- `Ctrl + B` adalah shortcut **Bevel** untuk mengubah edge tajam menjadi permukaan tambahan.
- `Mouse Wheel` digunakan untuk menambah **segments**, sehingga bevel menjadi lebih halus.
- Bevel membantu edge menangkap **highlight** dengan menyediakan area permukaan yang lebih natural untuk pencahayaan.
- Bevel menambah geometri mesh, jadi perlu diperhatikan dampaknya terhadap jumlah poligon dan topologi.

### Transisi ke Slide Berikutnya

Setelah kita memahami cara memperhalus tepi dengan Bevel, langkah berikutnya adalah membersihkan mesh dari vertex yang tidak perlu. Pada slide berikutnya, kita akan membahas **Merge**, yaitu operasi untuk menggabungkan vertex yang berdekatan atau tumpang tindih.

---

## Slide 037 - Merge

### Narasi

Setelah kita membahas **bevel**, ada satu operasi kecil yang sering menentukan kualitas mesh berikutnya: **merge**. Dalam Blender, merge digunakan untuk menggabungkan beberapa **vertex** yang terpilih menjadi satu posisi. Shortcut-nya cukup singkat, yaitu:

```text
M
```

Intuisinya sederhana. Jika dua atau lebih vertex berada di posisi yang sama atau sangat dekat, mereka sebenarnya bisa dianggap satu titik. Merge membantu kita menyatukan titik-titik tersebut agar mesh tidak memiliki **double vertex**, **overlapping vertex**, atau struktur geometri yang tidak rapi.

Pilihan umum yang muncul setelah menekan `M` adalah:

- `At Center`: menggabungkan vertex terpilih ke titik pusat rata-rata dari posisi mereka.
- `At Cursor`: menggabungkan vertex terpilih ke posisi **3D Cursor**.
- `By Distance`: menggabungkan vertex yang jaraknya berada di bawah nilai ambang tertentu.

Dari ketiganya, `Merge by Distance` paling sering dipakai untuk **cleanup**. Misalnya setelah modeling, sering muncul vertex yang nyaris tumpang tindih. Dengan `Merge by Distance`, kita bisa membersihkan mesh tanpa harus memilih satu per satu.

Hal yang perlu kita pahami sebelum lanjut adalah bahwa merge bukan sekadar “menyatukan titik”. Ia memengaruhi **topology** mesh. Vertex yang tidak digabung bisa membuat edge dan face menjadi tidak konsisten, sehingga operasi berikutnya, misalnya fill, bisa menghasilkan bentuk yang tidak diharapkan.

### Inti yang Harus Ditekankan

- `M` adalah shortcut untuk **merge vertex** dalam Blender.
- `At Center` dan `At Cursor` berguna untuk menyatukan vertex terpilih ke posisi tertentu.
- `Merge by Distance` sangat penting untuk **cleanup** mesh dan menjaga topology tetap rapi.

### Transisi ke Slide Berikutnya

Setelah vertex yang seharusnya sama sudah digabung, langkah berikutnya adalah membuat permukaan dari struktur yang sudah rapi. Di slide berikutnya, kita akan melihat **Fill**, yaitu cara membuat face dari vertex atau edge yang terpilih.

---

## Slide 038 - Fill

### Narasi

Setelah kita membersihkan vertex dengan **Merge**, langkah berikutnya yang sering muncul adalah menutup area yang masih terbuka. Dalam Blender, perintah **Fill** biasanya dipanggil dengan tombol `F`.

Perintah ini digunakan untuk membuat **face** dari vertex atau edge yang sedang terpilih. Intinya, jika ada sekelompok vertex yang membentuk batas area kosong, `F` akan mencoba menutup area tersebut menjadi permukaan.

```text
F
```

Cara membacanya cukup sederhana: kita memilih vertex atau edge yang menjadi batas, lalu menekan `F`. Blender akan membuat face baru di area yang dipilih. Jika yang dipilih adalah sekeliling lubang, hasilnya adalah penutupan lubang tersebut.

Pada slide juga tertulis:

```text
Boundary → F → New Face
```

Alurnya bisa dibaca sebagai tiga langkah:

1. Pilih **Boundary**, yaitu batas area yang ingin ditutup.
2. Tekan `F` untuk menjalankan **Fill**.
3. Blender membuat **New Face** pada area yang dipilih.

Pola ini penting karena dalam modeling 3D, mesh yang baik biasanya harus memiliki permukaan yang tertutup agar pencahayaan, shading, dan rendering dapat bekerja dengan konsisten.

Kita perlu menekankan bahwa `F` bukan sekadar membuat bidang, tetapi juga memperbaiki struktur topology. Jika vertex sudah dirapikan dengan `Merge by Distance`, maka `Fill` menjadi langkah alami berikutnya untuk menutup celah kecil atau lubang pada mesh.

### Inti yang Harus Ditekankan

- `F` adalah perintah **Fill** untuk membuat face dari vertex atau edge terpilih.
- Pola `Boundary → F → New Face` berarti pilih batas area, tekan `F`, lalu Blender membuat face baru.
- Fill penting untuk menutup lubang dan menjaga mesh tetap rapi sebelum tahap modeling lanjutan.

### Transisi ke Slide Berikutnya

Jika area yang ingin dibuat tidak cukup hanya dengan menutup batas, atau kita perlu memotong topology secara manual, maka langkah berikutnya adalah menggunakan **Knife Tool** dengan tombol `K`.

---

## Slide 039 - Knife Tool

### Narasi

Pada tahap editing mesh, kita sering perlu menambah garis tepi baru di posisi yang tidak bisa dibuat oleh operasi standar. **Knife Tool** adalah alat untuk melakukan itu secara manual. Shortcut-nya adalah `K`.

```text
K
```

Intinya, Knife membuat **potongan topology** pada mesh. Artinya, alat ini tidak hanya mengubah tampilan visual, tetapi menambah **edge** dan **vertex** baru pada struktur geometri.

Hal ini penting karena dalam grafika komputer, mesh bukan sekadar bentuk yang terlihat. Mesh tersusun dari **vertex**, **edge**, dan **face**, dan hubungan antar elemen inilah yang menentukan bagaimana objek bisa di-deformasi, di-subdivide, di-UV, atau di-render.

Knife Tool sangat berguna ketika **Loop Cut** tidak dapat menghasilkan edge yang kita inginkan. Loop Cut biasanya membuat potongan yang sejajar dan melintasi area terpilih secara seragam. Namun, kadang kita butuh potongan diagonal, potongan miring, atau potongan yang mengikuti bentuk tertentu secara lebih bebas.

Secara visual, kita bisa membayangkannya seperti memotong sebuah face menjadi beberapa face yang lebih kecil. Saat kita menarik garis potongan, Blender akan membuat **edge baru** yang menghubungkan dua titik pada boundary face. Titik-titik potong tersebut menjadi **vertex baru**, dan face lama terbagi menjadi beberapa face baru.

Dalam konteks rendering pipeline, perubahan topology seperti ini terjadi di tahap **geometry processing**. Mesh yang lebih baik akan menghasilkan triangulasi yang lebih rapi, shading yang lebih konsisten, dan deformasi yang lebih terkontrol. Jadi, Knife Tool bukan sekadar alat memotong, tetapi alat untuk mengatur kualitas struktur mesh.

### Inti yang Harus Ditekankan

- **Knife Tool** digunakan untuk membuat potongan topology secara manual.
- Shortcut-nya adalah `K`.
- Alat ini menambah **edge** dan **vertex** baru pada mesh.
- Knife cocok digunakan ketika **Loop Cut** tidak menghasilkan edge yang diinginkan.
- Potongan Knife mengubah struktur mesh, bukan hanya tampilan visual.

### Transisi ke Slide Berikutnya

Setelah kita memotong mesh secara manual, kadang orientasi face bisa menjadi tidak konsisten. Untuk itu, pada slide berikutnya kita akan membahas **Recalculate Normal** dengan shortcut `Shift + N`.

---

## Slide 040 - Recalculate Normal

### Narasi

Setelah kita memotong topology dengan Knife Tool, ada satu hal yang sering tidak terlihat tetapi sangat menentukan hasil render: arah **normal** face. Normal adalah vektor yang tegak lurus terhadap permukaan face. Dalam mesh 3D, setiap face memiliki normal yang menentukan sisi mana yang dianggap depan dan sisi mana yang dianggap belakang.

Shortcut yang digunakan adalah:

```text
Shift + N
```

Perintah ini melakukan **Recalculate Normal**, yaitu menghitung ulang orientasi normal face pada mesh aktif. Secara praktis, Blender akan menyamakan arah normal agar keluar dari permukaan objek. Kita tidak perlu memutar normal satu per satu; cukup pastikan mesh terpilih, lalu jalankan shortcut tersebut.

Yang perlu kita tekankan adalah normal pada slide ini adalah **geometry normal**, yaitu orientasi geometri mesh itu sendiri. Ini berbeda dengan **Normal Map** yang akan dibahas pada Pertemuan 10. Normal Map bekerja pada tahap shading dengan tekstur untuk menipu pencahayaan seolah permukaan memiliki detail lebih halus, sedangkan geometry normal menentukan arah permukaan asli dari data mesh.

Dalam rendering pipeline, normal berperan penting pada tahap shading dan lighting. Saat cahaya dihitung, arah normal menentukan seberapa kuat permukaan menerima cahaya. Jika normal salah, hasil pencahayaan tidak akan sesuai meskipun material dan tekstur sudah benar. Karena itu, sebelum lanjut ke material, lighting, atau modifier, kondisi normal yang konsisten membantu kita membaca bentuk objek dengan benar.

Saat memeriksa mesh, kita bisa membayangkan panah kecil pada setiap face. Panah yang keluar dari permukaan menandakan normal yang benar untuk objek padat. Jika ada panah yang masuk ke dalam, itu adalah indikasi normal terbalik. Recalculate Normal membantu memperbaiki kondisi ini secara global, terutama setelah operasi modeling yang mengubah topology.

### Inti yang Harus Ditekankan

- `Shift + N` digunakan untuk **Recalculate Normal**, yaitu menghitung ulang orientasi normal face.
- Normal menentukan sisi depan dan belakang face, sehingga memengaruhi shading, lighting, dan tampilan objek.
- Slide ini membahas **geometry normal**, bukan **Normal Map** yang akan dibahas pada Pertemuan 10.
- Normal yang konsisten penting sebelum lanjut ke material, lighting, atau modifier.

### Transisi ke Slide Berikutnya

Setelah normal mesh sudah konsisten, kita bisa lanjut ke **Modifier**, yaitu operasi non-destructive seperti Bevel, Mirror, Array, Solidify, dan Subdivision Surface yang memodifikasi bentuk tanpa langsung merusak base geometry.

---

## Slide 041 - Modifier

### Narasi

Dalam pemodelan 3D, **Modifier** adalah cara untuk mengubah bentuk objek tanpa langsung merusak geometri dasar. Artinya, mesh awal tetap ada dan masih bisa dikembalikan ke kondisi semula selama modifier belum di-`Apply`.

Ini penting karena proses modeling sering kali bersifat iteratif. Mahasiswa mungkin ingin mencoba bevel, cermin, pengulangan, penebalan, atau subdivisi, lalu mengubah parameter setelah melihat hasilnya. Dengan modifier, perubahan bersifat **non-destructive**, sehingga keputusan desain tidak langsung terkunci.

Beberapa contoh modifier yang sering muncul adalah:

- `Bevel` untuk membulatkan atau memotong tepi,
- `Mirror` untuk membuat simetri,
- `Array` untuk mengulang objek secara teratur,
- `Solidify` untuk memberi ketebalan pada permukaan,
- `Subdivision Surface` untuk memperhalus permukaan.

Secara konsep, modifier bekerja seperti tahap tambahan pada mesh sebelum objek dirender atau diekspor. Base geometry menjadi input, modifier memproses bentuknya, dan hasil akhirnya yang terlihat di viewport atau render. Selama modifier masih aktif tanpa di-`Apply`, struktur asli mesh tetap dapat diperiksa dan diubah.

Hal yang perlu dipahami sebelum lanjut adalah perbedaan antara **mengubah parameter modifier** dan **Apply modifier**. Parameter dapat disesuaikan kapan saja, tetapi `Apply` akan menjadikan hasil modifier sebagai bagian dari mesh dasar. Karena itu, dalam workflow Blender, kita sebaiknya menahan diri untuk tidak langsung `Apply` kecuali memang sudah yakin dengan bentuk final.

### Inti yang Harus Ditekankan

- **Modifier** adalah operasi **non-destructive** pada mesh.
- Base geometry tetap dapat dipertahankan selama modifier belum di-`Apply`.
- Modifier memungkinkan perubahan parameter secara iteratif dan konsisten.
- Contoh dasar yang perlu dikenali: `Bevel`, `Mirror`, `Array`, `Solidify`, dan `Subdivision Surface`.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa modifier bekerja tanpa merusak mesh dasar, kita akan masuk ke salah satu contoh konkretnya, yaitu `Bevel Modifier`, yang sering digunakan untuk memberi tepi lebih rapi pada objek hard-surface.

---

## Slide 042 - Bevel Modifier

### Narasi

Pada slide sebelumnya kita sudah melihat bahwa **Modifier** adalah operasi **non-destructive**, artinya base geometry masih bisa dipertahankan selama modifier belum di-`Apply`. Sekarang kita fokus pada salah satu contohnya, yaitu **Bevel Modifier**.

**Bevel Modifier** memberikan bevel secara non-destructive. Artinya, perubahan pada tepi atau sudut objek tidak langsung mengubah base mesh secara permanen. Kita bisa melihat hasil bevel secara langsung, lalu menyesuaikannya kembali jika desain masih berubah.

Kelebihan utama **Bevel Modifier** adalah:

- parameter mudah diubah,
- hasil lebih konsisten,
- cocok untuk **hard-surface**,
- mudah dikombinasikan dengan modifier lain.

Dalam grafika komputer, bevel penting karena membantu objek terlihat lebih rapi dan konsisten, terutama pada model **hard-surface**. Tepi yang diberi bevel juga memberi transisi bentuk yang lebih natural, sehingga objek tidak terlihat terlalu tajam atau kaku.

Hal yang harus dipahami sebelum lanjut adalah: selama **Bevel Modifier** belum di-`Apply`, base geometry tetap bisa diubah dan parameter bevel masih bisa disesuaikan. Ini membuat alur kerja modeling lebih fleksibel, terutama ketika kita masih dalam tahap eksplorasi bentuk.

### Inti yang Harus Ditekankan

- **Bevel Modifier** memberikan bevel secara **non-destructive**.
- Parameter bevel mudah diubah tanpa mengubah base mesh secara permanen.
- Bevel membantu hasil modeling lebih konsisten dan cocok untuk **hard-surface**.
- Modifier ini mudah dikombinasikan dengan modifier lain dalam pipeline modeling.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana bevel membantu memperbaiki tepi objek, kita lanjut ke **Mirror Modifier**, yang berguna untuk membuat model simetris dari setengah model.

---

## Slide 043 - Mirror Modifier

### Narasi

Setelah bevel, kita masuk ke cara mempercepat pemodelan objek simetris. `Mirror Modifier` bekerja dengan prinsip sederhana: kita cukup memodelkan setengah objek, lalu sistem menggandakan bagian tersebut ke sisi lain sehingga terbentuk model lengkap.

Diagram pada slide menunjukkan alurnya dari atas ke bawah. Tahap pertama adalah **Half Model**, yaitu geometri yang hanya dibuat pada satu sisi. Tahap kedua adalah proses **Mirror**, yang merefleksikan geometri tersebut terhadap bidang simetri. Tahap ketiga menghasilkan **Complete Symmetric Model**, yaitu objek utuh yang simetris.

Cara membaca diagramnya cukup intuitif: panah ke bawah menunjukkan bahwa model setengah tidak langsung menjadi objek final secara manual, tetapi diproses oleh modifier. Artinya, jika kita mengubah setengah model, hasil cerminan ikut menyesuaikan. Ini penting karena kita tidak perlu menduplikasi dan menyelaraskan dua sisi secara manual.

Dalam grafika komputer, simetri sering muncul pada objek seperti **robot**, **vehicle**, **character**, dan **symmetric props**. Dengan `Mirror Modifier`, jumlah vertex, edge, dan face yang harus dikerjakan lebih sedikit, sehingga proses modeling lebih efisien. Selain itu, hasil kiri dan kanan cenderung konsisten, mengurangi risiko bentuk tidak seimbang.

Hal yang perlu dipahami sebelum lanjut adalah bahwa modifier ini bekerja pada level geometri, bukan sekadar tampilan visual. Hasilnya tetap menjadi bagian dari mesh yang dapat diproses lebih lanjut oleh pipeline modeling, misalnya transformasi, material, lighting, atau rendering. Namun, pada slide ini kita cukup memahami konsepnya: setengah model, proses mirror, dan model simetris lengkap.

### Inti yang Harus Ditekankan

- `Mirror Modifier` memungkinkan kita memodelkan **Half Model** lalu menghasilkan **Complete Symmetric Model**.
- Alur diagram menunjukkan proses: **Half Model** → **Mirror** → **Complete Symmetric Model**.
- Modifier ini cocok untuk objek simetris seperti robot, vehicle, character, dan symmetric props.
- Keuntungannya adalah efisiensi modeling dan konsistensi bentuk di kedua sisi.

### Transisi ke Slide Berikutnya

Setelah objek simetris terbentuk, kadang kita perlu menggandakan bagian secara berulang atau memberi ketebalan pada permukaan. Untuk itu, kita lanjut ke **Array dan Solidify Modifier**.

---

## Slide 044 - Array dan Solidify Modifier

### Narasi

Setelah kita melihat **Mirror Modifier** untuk membuat simetri, sekarang kita masuk ke dua modifier yang sangat berguna untuk membangun geometri berulang dan memberi volume pada permukaan: **Array** dan **Solidify**.

**Array** bekerja dengan cara menggandakan objek secara berulang. Alih-alih membuat banyak objek satu per satu, kita cukup membuat satu objek dasar, lalu modifier ini menghasilkan rangkaian salinan. Ini penting karena dalam grafika komputer, banyak elemen visual memiliki pola berulang, misalnya pagar, anak tangga, panel, atau elemen struktur. Dengan **Array**, jumlah objek yang dihasilkan dapat dikendalikan, sehingga model tetap rapi dan konsisten.

Secara intuitif, alurnya dapat dibaca seperti ini:

```text
Objek dasar
↓
Array
↓
Rangkaian objek berulang
```

Yang perlu dipahami mahasiswa adalah bahwa **Array** bukan sekadar menyalin objek, tetapi membantu membangun geometri secara sistematis. Hal ini sangat berguna sebelum tahap rendering, karena geometri yang konsisten akan memudahkan pencahayaan, tekstur, dan optimasi.

**Solidify** memiliki peran yang berbeda. Modifier ini menambahkan ketebalan pada `surface`. Dalam pemodelan 3D, banyak objek awalnya dibuat sebagai permukaan tipis, misalnya dinding, panel, atau cangkang. Tanpa ketebalan, objek tersebut hanya berupa lembaran tipis yang tidak memiliki volume. **Solidify** mengubah `surface` tersebut menjadi bentuk yang lebih solid, sehingga terlihat lebih realistis ketika diterangi dan dirender.

Alur konsepnya dapat dipahami sebagai berikut:

```text
Surface tipis
↓
Solidify
↓
Surface bertebal / shell
```

Contoh penggunaannya sangat dekat dengan kebutuhan modeling: `fence`, `stairs`, `panel`, `wall`, dan `shell`. Untuk `fence`, **Array** dapat membantu membuat pengulangan tiang atau papan. Untuk `wall` atau `panel`, **Solidify** dapat memberi ketebalan agar objek tidak tampak seperti kertas. Untuk `stairs`, kombinasi konsep pengulangan dan volume dapat membantu membangun bentuk yang lebih utuh.

Intinya, **Array** membantu kita membangun pengulangan, sedangkan **Solidify** membantu kita memberi ketebalan. Kedua modifier ini penting karena mempercepat proses modeling, mengurangi duplikasi manual, dan menghasilkan geometri yang lebih siap untuk tahap berikutnya.

### Inti yang Harus Ditekankan

- **Array** digunakan untuk menggandakan objek secara berulang, cocok untuk elemen seperti `fence`, `stairs`, dan `panel`.
- **Solidify** digunakan untuk menambahkan ketebalan pada `surface`, sehingga objek seperti `wall` atau `shell` memiliki volume.
- Kedua modifier membantu membangun geometri secara lebih efisien, konsisten, dan siap untuk tahap rendering.

### Transisi ke Slide Berikutnya

Setelah geometri berulang dan permukaan bertebal sudah terbentuk, langkah berikutnya adalah membuat bentuk yang lebih halus. Pada slide berikutnya, kita akan membahas **Subdivision Surface**, yang berguna untuk menghasilkan permukaan lebih halus pada objek curved atau organic.

---

## Slide 045 - Subdivision Surface

### Narasi

Setelah kita melihat modifier yang menggandakan objek atau memberi ketebalan pada permukaan, sekarang kita masuk ke **Subdivision Surface**. Modifier ini bekerja dengan cara menambah **geometry** secara otomatis pada mesh yang sudah ada. Artinya, bentuk awal tidak langsung diubah secara manual, tetapi diproses untuk menghasilkan permukaan yang lebih halus.

Secara visual, bayangkan sebuah objek dasar yang masih terlihat kasar, misalnya kubus atau bentuk sederhana yang masih memiliki sedikit sisi. Ketika **Subdivision Surface** diterapkan, sisi-sisi objek akan bertambah banyak seginya. Garis tepi yang tadinya terlihat kaku atau berundak menjadi lebih melengkung, sehingga permukaan objek tampak lebih mulus.

Konsep ini penting dalam grafika komputer karena banyak objek visual tidak cukup direpresentasikan dengan mesh yang terlalu kasar. Permukaan yang halus memengaruhi bagaimana objek terlihat saat dirender, bagaimana cahaya jatuh pada permukaannya, dan bagaimana bentuk objek terbaca secara visual. Dengan kata lain, **Subdivision Surface** membantu menjembatani antara bentuk dasar yang sederhana dan bentuk akhir yang lebih natural.

Modifier ini paling cocok digunakan untuk:

- **curved object**,
- **organic shape**,
- **smooth form**.

Contohnya, bentuk benda melengkung, objek organik, atau permukaan yang tidak banyak sudut tajam. Untuk objek seperti ini, **Subdivision Surface** bisa mempercepat proses modeling karena kita tidak perlu membuat setiap detail halus secara manual.

Namun, ada hal yang perlu diperhatikan. Kualitas hasil subdivisi sangat bergantung pada bentuk awal mesh. Jika base mesh sudah memiliki proporsi dan struktur yang baik, hasil subdivisi akan lebih rapi. Sebaliknya, jika base mesh terlalu berantakan, subdivisi bisa menghasilkan bentuk yang tidak diinginkan. Jadi, sebelum memperhalus, kita perlu memastikan bentuk dasarnya sudah cukup benar.

Pada slide ini, kita cukup memahami bahwa **Subdivision Surface** adalah modifier untuk memperhalus permukaan dengan menambah **geometry** secara otomatis. Detail teknis tentang bagaimana modifier ini berinteraksi dengan modifier lain akan kita bahas lebih lanjut.

### Inti yang Harus Ditekankan

- **Subdivision Surface** menambah **geometry** secara otomatis untuk menghasilkan permukaan yang lebih halus.
- Modifier ini paling cocok untuk **curved object**, **organic shape**, dan **smooth form**.
- Hasil subdivisi sangat dipengaruhi oleh kualitas base mesh, sehingga bentuk awal harus sudah cukup benar.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana beberapa modifier dapat disusun dalam satu alur, karena urutan modifier dapat memengaruhi hasil akhir.

---

## Slide 046 - Modifier Stack dan Urutan

### Narasi

Setelah kita melihat bagaimana **Subdivision Surface** dapat menghaluskan bentuk, langkah berikutnya adalah memahami bagaimana beberapa modifier bekerja bersama. Dalam Blender, modifier tidak selalu berdiri sendiri; mereka dapat disusun dalam **modifier stack**, yaitu daftar operasi yang diproses secara berurutan pada satu objek.

```text
Base Mesh
↓
Modifier A
↓
Modifier B
↓
Modifier C
```

Diagram ini dibaca dari atas ke bawah. **Base Mesh** adalah geometri awal objek. Setiap modifier menerima hasil dari tahap sebelumnya, memprosesnya, lalu mengirimkannya ke modifier berikutnya. Jadi, `Modifier A` bekerja pada output dari `Base Mesh`, `Modifier B` bekerja pada output `Modifier A`, dan seterusnya.

Poin penting yang sering tidak disadari mahasiswa adalah **urutan modifier dapat mengubah hasil**. Dua modifier yang sama bisa menghasilkan bentuk berbeda jika posisinya dalam stack ditukar. Misalnya, modifier yang menambah detail sebelum smoothing dapat menghasilkan permukaan yang lebih halus, sedangkan smoothing sebelum detail dapat membuat detail tersebut tidak terbentuk dengan cara yang sama. Karena itu, modifier stack bukan sekadar daftar efek, tetapi urutan proses pemodelan.

Kita juga perlu memahami perbedaan antara modifier yang masih aktif dan modifier yang sudah **`Apply`**. Modifier yang belum di-apply bersifat **non-destructive**, artinya parameter masih bisa diubah, dihapus, atau dipindah posisinya. Jika kita terlalu cepat melakukan `Apply`, perubahan tersebut menjadi permanen pada mesh dan ruang revisi menjadi lebih terbatas. Untuk workflow modeling yang fleksibel, sebaiknya modifier dibiarkan dalam stack selama masih ada kemungkinan desain berubah.

Sebelum lanjut, hal yang harus dipahami adalah: modifier stack adalah alur kerja, bukan hanya efek visual. Kita harus membayangkan objek sebagai data geometri yang melewati beberapa tahap transformasi, seperti pipeline sederhana di level modeling. Memahami urutan ini akan membantu kita mengontrol hasil modeling, menghindari hasil yang tidak terduga, dan menjaga file tetap mudah direvisi.

### Inti yang Harus Ditekankan

- **Modifier stack** adalah urutan modifier yang diproses dari atas ke bawah pada satu objek.
- **Urutan modifier dapat mengubah hasil**, karena setiap modifier bekerja pada output tahap sebelumnya.
- Modifier yang belum di-`Apply` bersifat **non-destructive** dan masih bisa direvisi.
- Jangan terlalu cepat `Apply` jika desain masih mungkin berubah; simpan fleksibilitas modeling.

### Transisi ke Slide Berikutnya

Setelah kita memahami bagaimana modifier disusun dan mengapa urutannya penting, berikutnya kita akan melihat cara mempercepat workflow modeling dengan shortcut, agar proses memodelkan objek menjadi lebih lancar dan efisien.

---

## Slide 047 - Shortcut Workflow Modeling

### Narasi

Dalam modeling Blender, **shortcut** bukan sekadar tombol yang perlu dihafal, melainkan bagian dari alur kerja. Setelah kita memahami bahwa **modifier stack** memiliki urutan yang memengaruhi hasil, langkah berikutnya adalah membangun geometri dengan cara yang lebih cepat dan konsisten.

```text
Shift+A → Primitive
G/R/S   → Transform
Tab     → Edit Mode
1/2/3   → Vertex/Edge/Face
E       → Extrude
I       → Inset
Ctrl+R  → Loop Cut
Ctrl+B  → Bevel
```

Cara membaca daftar ini adalah dari kiri ke kanan: tombol di sebelah kiri adalah input, sedangkan teks di sebelah kanan adalah fungsi yang dihasilkan. Kita bisa mengelompokkannya menjadi beberapa tahap:

- `Shift+A` untuk menambahkan **primitive**, yaitu bentuk dasar seperti kubus, silinder, atau bola.
- `G`, `R`, dan `S` untuk **transform** objek, yaitu `Move`, `Rotate`, dan `Scale`.
- `Tab` untuk berpindah ke **Edit Mode**, di mana kita mulai mengubah mesh.
- `1`, `2`, dan `3` untuk memilih elemen mesh: **Vertex**, **Edge**, dan **Face**.
- `E`, `I`, `Ctrl+R`, dan `Ctrl+B` untuk operasi inti modeling seperti **Extrude**, **Inset**, **Loop Cut**, dan **Bevel**.

Pada tahap awal, `Shift+A` biasanya menjadi pintu masuk. Kita membuat bentuk sederhana, lalu menata posisinya menggunakan `G`, `R`, dan `S`. Setelah objek berada pada posisi yang tepat, baru kita masuk ke `Edit Mode` dengan `Tab`. Di sinilah proses pembentukan bentuk dimulai.

Pemilihan elemen mesh sangat penting karena menentukan apa yang akan kita ubah. Jika kita memilih **Vertex**, perubahan terjadi pada titik-titik mesh. Jika memilih **Edge**, kita bekerja pada garis penghubung. Jika memilih **Face**, kita bekerja pada bidang. Ketiga elemen ini menjadi dasar dari seluruh proses modeling.

Operasi seperti `E` untuk **Extrude** digunakan untuk memperpanjang bentuk dari face atau edge. `I` untuk **Inset** membuat bidang baru di dalam face, sehingga sangat berguna untuk membuat detail seperti lubang, panel, atau tepi. `Ctrl+R` untuk **Loop Cut** menambah edge loop agar mesh memiliki lebih banyak kontrol. `Ctrl+B` untuk **Bevel** membulatkan atau memotong tepi, sehingga objek terlihat lebih natural dan siap untuk shading.

Shortcut menjadi penting karena modeling 3D adalah proses yang berulang. Jika setiap langkah harus dicari melalui menu, alur kerja akan terputus dan mahasiswa mudah kehilangan fokus. Dengan shortcut, kita bisa mempertahankan ritme: membuat bentuk, menata posisi, masuk ke edit mode, memilih elemen, lalu membentuk geometri.

Dari sisi grafika komputer, hasil modeling adalah **mesh** yang akan melewati tahap transformasi, pencahayaan, rasterisasi, dan rendering. Mesh yang dibuat dengan alur kerja rapi biasanya memiliki struktur edge yang lebih mudah dikontrol, sehingga lebih siap untuk tahap material, texture, atau lighting selanjutnya.

Sebelum lanjut ke praktik, hal yang harus dipahami adalah konteks mode dan elemen mesh. Shortcut hanya benar-benar berguna jika kita tahu kapan berada di **Object Mode** atau **Edit Mode**, serta apa yang sedang dipilih: vertex, edge, atau face.

### Inti yang Harus Ditekankan

- **Shortcut** adalah bagian dari workflow modeling, bukan sekadar hafalan tombol.
- Pahami perbedaan **Object Mode** dan **Edit Mode**, karena fungsi shortcut bergantung pada mode yang aktif.
- Kuasai operasi inti: `G/R/S` untuk transform, `E` untuk extrude, `I` untuk inset, `Ctrl+R` untuk loop cut, dan `Ctrl+B` untuk bevel.
- Struktur mesh yang rapi akan mendukung tahap rendering, shading, dan detail visual selanjutnya.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan menerapkan shortcut ini dalam praktikum modeling asset 3D sederhana, di mana mahasiswa diharapkan menggunakan shortcut utama selama proses pembuatan objek.

---

## Slide 048 - Praktikum: Modeling Asset 3D

### Narasi

Pada praktikum ini, kita beralih dari latihan shortcut ke pembuatan **satu asset 3D sederhana hingga menengah**. Tujuannya bukan sekadar menghasilkan bentuk yang terlihat, tetapi melatih alur kerja modeling yang rapi: memilih primitive, membentuk blok utama, lalu memperbaiki detail dengan operasi dasar.

Asset yang dibuat bisa berupa:

- **sci-fi crate**,
- **toolbox**,
- **control panel**,
- **robot head**,
- **lamp**,
- **mechanical prop**.

Pilihan objek ini sengaja berada pada rentang yang realistis untuk latihan: cukup sederhana agar bisa diselesaikan, tetapi cukup kompleks agar mahasiswa terbiasa mengatur **vertex**, **edge**, dan **face** secara sadar.

Yang wajib dilakukan adalah menggunakan **shortcut utama** selama modeling. Artinya, `Shift+A` untuk membuat primitive, `G`, `R`, `S` untuk transformasi, `Tab` untuk masuk **Edit Mode**, `E` untuk `Extrude`, `I` untuk `Inset`, `Ctrl+R` untuk `Loop Cut`, dan `Ctrl+B` untuk `Bevel` menjadi bagian dari alur kerja, bukan hanya tombol yang dihafal.

Hal ini penting karena dalam grafika komputer, kualitas **mesh** sangat memengaruhi tahap berikutnya. Asset yang topologinya rapi lebih mudah diberi material, texture, lighting, dan shading. Sebaliknya, mesh yang berantakan akan membuat normal, shadow, dan detail permukaan sulit dikontrol.

Sebelum lanjut, mahasiswa perlu memahami bahwa praktikum ini adalah tahap **blok modeling**: bentuk dasar dan proporsi lebih dulu, detail halus menyusul. Jadi, jangan langsung mengejar estetika akhir; pastikan struktur geometri sudah masuk akal dan alur modelingnya efisien.

### Inti yang Harus Ditekankan

- Praktikum ini bertujuan membuat **satu asset 3D** yang sederhana–menengah, bukan banyak objek dangkal.
- Objek harus dipilih dari contoh yang diberikan agar tingkat kesulitan tetap terukur.
- **Shortcut utama** wajib digunakan sebagai workflow modeling, bukan sekadar perintah tambahan.
- Hasil modeling harus menghasilkan **mesh** yang rapi dan siap untuk tahap lanjutan.

### Transisi ke Slide Berikutnya

Setelah memahami tujuan dan batasan praktikum, kita akan melihat rencana kerja yang lebih terstruktur, mulai dari setup, blockout, transform, edit mode, hingga final inspection.

---

## Slide 049 - Rencana Praktikum & Ringkasan

### Narasi

Sebelum menutup praktikum modeling, kita perlu melihat alur kerja yang harus diikuti mahasiswa agar hasil asset tidak hanya “terlihat selesai”, tetapi juga rapi secara geometri dan siap untuk tahap berikutnya. Alur ini penting karena dalam grafika komputer, kualitas sebuah objek 3D tidak hanya ditentukan oleh bentuk akhirnya, tetapi juga oleh cara objek tersebut dibangun: apakah topologinya bersih, apakah transformasinya terkontrol, dan apakah operasi modeling dilakukan secara sistematis.

Tahapan praktikum yang kita gunakan adalah sebagai berikut:

```text
1. Setup dan navigasi
2. Blockout primitive
3. Transform
4. Edit Mode
5. Extrude + Inset
6. Loop Cut + Bevel
7. Minimal 2 Modifier
8. Cleanup
9. Final inspection
```

Tahap pertama, **Setup dan navigasi**, memastikan mahasiswa memahami cara bergerak di viewport Blender, memilih objek, dan mengatur kamera kerja. Tanpa navigasi yang baik, proses modeling akan menjadi lambat dan mudah salah arah. Tahap kedua, **Blockout primitive**, mengajak mahasiswa membangun bentuk dasar dari primitive seperti `Cube`, `Cylinder`, atau `Plane` sebelum masuk ke detail. Ini adalah kebiasaan penting dalam produksi 3D: bentuk besar dan proporsi harus benar terlebih dahulu.

Selanjutnya, **Transform** digunakan untuk mengatur posisi, rotasi, dan skala objek secara sadar. Di sini mahasiswa perlu memahami perbedaan antara `Object Mode` dan `Edit Mode`, serta mengapa transformasi yang tidak rapi dapat menyulitkan proses modeling berikutnya. Setelah itu, mahasiswa masuk ke **Edit Mode** untuk melakukan operasi geometri seperti `Extrude` dan `Inset`. `Extrude` membantu memperluas permukaan menjadi bentuk baru, sedangkan `Inset` berguna untuk membuat detail seperti panel, lubang, atau area yang akan diberi bevel.

Tahap **Loop Cut + Bevel** menjadi penting karena keduanya membantu membentuk detail dan memperhalus sudut objek. `Loop Cut` memungkinkan penambahan edge loop untuk kontrol bentuk yang lebih halus, sementara `Bevel` membuat sudut tidak terlalu tajam dan membantu pencahayaan terlihat lebih natural. Setelah modeling manual, mahasiswa diminta menggunakan minimal dua **Modifier**, misalnya `Bevel`, `Subdivision Surface`, `Mirror`, atau `Array`, sesuai kebutuhan asset. Modifier penting karena menunjukkan bahwa mahasiswa tidak hanya bekerja manual, tetapi juga memahami alur kerja non-destruktif dalam Blender.

Benang merah dari seluruh tahapan ini adalah:

```text
Primitive → Modeling Operations → Modifier → 3D Asset
```

Artinya, asset 3D tidak langsung dibuat dari detail kecil, melainkan dibangun bertahap: mulai dari bentuk dasar, lalu diolah dengan operasi modeling, kemudian ditingkatkan dengan modifier, dan akhirnya menjadi **3D Asset** yang rapi. Tahap **Cleanup** dan **Final inspection** memastikan tidak ada edge yang menggantung, normal yang salah, objek ganda, atau transformasi yang belum diterapkan. Hal ini penting karena asset yang belum bersih akan menimbulkan masalah saat masuk ke tahap material, UV, texturing, lighting, atau rendering.

### Inti yang Harus Ditekankan

- Praktikum modeling harus dilakukan secara **sistematis**, bukan sekadar membentuk objek sampai terlihat mirip.
- Alur utama adalah: **primitive → modeling operations → modifier → 3D asset**.
- `Extrude`, `Inset`, `Loop Cut`, dan `Bevel` adalah operasi inti untuk membangun detail geometri.
- Minimal dua **Modifier** digunakan agar mahasiswa memahami alur kerja non-destruktif.
- **Cleanup** dan **Final inspection** penting agar asset siap untuk tahap material, UV, dan texturing.

### Transisi ke Slide Berikutnya

Dengan alur praktikum ini, mahasiswa sudah memiliki dasar yang jelas untuk membuat asset 3D yang rapi dan siap dikembangkan lebih lanjut. Pertemuan ini kita tutup di sini, dan pada materi selanjutnya kita akan melanjutkan ke **Blender Materials, UV & Texturing**, di mana asset 3D yang sudah dimodel akan diberi permukaan, tekstur, dan material visual.

---

## Slide 050 - TERIMA KASIH

### Narasi

Baik, kita sampai pada penutup pertemuan ke-9 untuk materi **Blender Fundamental & 3D Modeling**. Terima kasih atas perhatian dan partisipasi mahasiswa selama sesi ini. Pada pertemuan ini, kita sudah membahas dasar-dasar alur kerja pemodelan 3D di Blender, mulai dari memahami viewport, memilih primitive, melakukan transformasi, hingga masuk ke **Edit Mode** untuk membentuk geometri secara lebih detail.

Hal yang perlu kita pegang adalah bahwa pemodelan 3D bukan sekadar membuat bentuk yang terlihat menarik, tetapi juga membangun **topologi** yang rapi, mudah diedit, dan siap untuk tahap berikutnya. Karena itu, alur yang kita tekankan tadi tetap menjadi benang merah utama:

1. **Primitive** sebagai dasar bentuk.
2. **Modeling operations** seperti `Extrude`, `Inset`, `Loop Cut`, dan `Bevel`.
3. **Modifier** untuk membantu proses non-destruktif.
4. Hasil akhir berupa **3D asset** yang lebih siap digunakan.

Sebelum lanjut ke materi berikutnya, saya ingin mengingatkan kembali bahwa tahap modeling ini adalah fondasi. Jika geometri dasar sudah rapi, maka proses material, pencahayaan, tekstur, dan rendering akan jauh lebih mudah. Sebaliknya, jika topologi awal berantakan, masalah akan muncul di tahap berikutnya, misalnya tekstur tidak menempel dengan baik atau hasil render terlihat tidak konsisten.

Untuk pertemuan selanjutnya, kita akan masuk ke topik **Blender Materials, UV & Texturing**. Di sana, kita akan melihat bagaimana objek 3D yang sudah kita model mulai diberi identitas visual, seperti warna, material, dan tekstur. Jadi, objek tidak lagi hanya berupa bentuk geometri, tetapi mulai mendekati tampilan visual yang lebih realistis atau artistik.

### Inti yang Harus Ditekankan

- Pemodelan 3D di Blender bertujuan menghasilkan **3D asset** yang rapi dan siap diproses lebih lanjut.
- Alur utama yang harus diingat adalah **Primitive → Modeling Operations → Modifier → 3D Asset**.
- Kualitas **topologi** sangat penting karena memengaruhi tahap material, tekstur, dan rendering.
- Tahap modeling adalah fondasi sebelum masuk ke **Materials, UV, dan Texturing**.

### Transisi ke Slide Berikutnya

Setelah kita memahami cara membentuk objek 3D, langkah berikutnya adalah memberi “kulit” visual pada objek tersebut. Pada materi selanjutnya, kita akan membahas **Blender Materials, UV & Texturing**, yaitu proses membuat objek 3D memiliki warna, material, dan tekstur yang lebih nyata.
