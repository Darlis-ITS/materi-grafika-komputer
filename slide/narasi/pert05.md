# Narasi Grafika Komputer - Pertemuan 05

## Lighting, Shading & Texture pada WebGL

Sumber: markdown/pert05-ringkas.md

---

## Slide 000 - Cover

### Narasi

Selamat datang pada **Pertemuan 5** mata kuliah **EF234504 — Grafika Komputer**. Pada pertemuan ini, kita akan masuk ke salah satu bagian yang paling menentukan kualitas visual sebuah adegan tiga dimensi, yaitu **Lighting, Shading & Texture pada WebGL**.

Topik ini penting karena objek 3D tidak cukup hanya memiliki bentuk geometri. Agar terlihat meyakinkan, permukaan objek perlu memiliki informasi arah permukaan, respons terhadap cahaya, dan detail visual yang berasal dari tekstur. Dalam konteks **WebGL**, pemahaman ini membantu kita melihat bagaimana data permukaan, pencahayaan, dan tekstur diproses oleh GPU untuk menghasilkan gambar yang realistis atau sesuai gaya visual yang diinginkan.

Sebelum masuk ke detail teknis, kita perlu menyadari bahwa **lighting**, **shading**, dan **texture** saling terhubung. **Normal** menentukan bagaimana permukaan berinteraksi dengan cahaya, **shading** mengubah warna berdasarkan model refleksi, dan **texture** memberikan detail permukaan. Pertemuan ini akan membangun dasar tersebut secara bertahap, dari data permukaan hingga praktikum objek bertekstur dan diterangi.

### Inti yang Harus Ditekankan

- **Lighting, shading, dan texture** adalah komponen visual utama yang membuat objek 3D tampak lebih nyata atau lebih sesuai gaya visual yang diinginkan.
- Dalam **WebGL**, proses ini sangat bergantung pada data permukaan, transformasi normal, model pencahayaan, dan sampling tekstur.
- Pertemuan ini bersifat membangun pemahaman bertahap: mulai dari permukaan dan normal, kemudian pencahayaan, tekstur, dan integrasinya dalam praktikum.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat peta pembahasan pertemuan ini, mulai dari **surface data** dan **normal**, hingga **lighting**, **texture**, serta praktikum **Textured and Lit Object**.

---

## Slide 001 - Topik Pembahasan

### Narasi

Untuk pertemuan ini, kita akan melihat bagaimana objek 3D tidak hanya dibentuk oleh geometri, tetapi juga oleh cara permukaannya berinteraksi dengan cahaya dan tekstur. Dalam `WebGL`, informasi permukaan seperti **Surface Data** dan **Normal** menjadi dasar agar objek terlihat memiliki kedalaman, arah, dan material. Kita akan mulai dari **Normal**, lalu membedakan **Face Normal** dan **Vertex Normal**, serta memahami **Flat vs Smooth Shading**. Setelah itu, kita bahas **Normalization** dan **Normal Transformation** agar normal tetap benar ketika objek ditransformasi.

Selanjutnya, kita masuk ke model pencahayaan sederhana: **Ambient Lighting**, **Diffuse Lighting**, dan **Specular Lighting**. Konsep **Dot Product** akan menjadi alat utama untuk menghitung seberapa langsung permukaan menghadap ke arah cahaya. Kita juga akan melihat **View Direction**, **Reflection**, dan **Shininess** dalam **Phong Reflection Model sederhana**, yang membantu menjelaskan mengapa permukaan terlihat berkilau atau tumpul.

Bagian terakhir adalah **Texture**, yaitu cara memberi detail permukaan tanpa menambah banyak geometri. Kita akan membahas **UV Coordinate**, **Texture Sampling**, **Filtering**, dan **Wrapping**. Setelah lighting dan texture masing-masing dipahami, kita menggabungkannya menjadi **Lighting + Texture**, lalu menutup dengan praktikum membuat **Textured and Lit Object** di `WebGL`.

### Inti yang Harus Ditekankan

- **Normal** menentukan arah permukaan dan menjadi dasar shading serta lighting.
- Perbedaan **Face Normal** dan **Vertex Normal** menentukan apakah objek menggunakan **Flat Shading** atau **Smooth Shading**.
- **Ambient**, **Diffuse**, dan **Specular** adalah komponen utama model pencahayaan sederhana, dengan **Dot Product** sebagai konsep penting pada diffuse lighting.
- **Texture** menggunakan **UV Coordinate**, **Texture Sampling**, **Filtering**, dan **Wrapping** untuk memberi detail permukaan.
- **Lighting + Texture** digabungkan dalam pipeline `WebGL` agar objek terlihat lebih realistis.

### Transisi ke Slide Berikutnya

Setelah gambaran topik ini terlihat, kita lanjut ke capaian pembelajaran agar jelas kemampuan apa yang harus dikuasai mahasiswa setelah pertemuan ini.

---

## Slide 002 - Capaian Pembelajaran

### Narasi

Pada pertemuan ini, kita tidak hanya membahas bentuk objek, tetapi juga bagaimana permukaan objek terlihat setelah melewati proses rendering. Dalam grafika komputer, geometri menentukan “apa” yang ditampilkan, sedangkan **normal**, **lighting**, dan **texture** menentukan “bagaimana” permukaan objek tampak: apakah terlihat datar, halus, terang, gelap, berkilau, atau memiliki pola permukaan.

Sepuluh capaian pembelajaran pada slide ini dapat dibaca sebagai tiga kelompok kemampuan utama:

- **Normal dan shading**: mahasiswa perlu memahami fungsi **normal**, membedakan **face normal** dan **vertex normal**, serta memahami perbedaan **flat shading** dan **smooth shading**.
- **Lighting**: mahasiswa perlu menjelaskan **ambient**, **diffuse**, dan **specular**, serta memahami peran `dot product` dalam menghitung **diffuse lighting**.
- **Texture dan integrasi WebGL**: mahasiswa perlu memahami **UV coordinate**, **texture sampling**, **filtering**, **wrapping**, lalu menggabungkan **lighting** dengan **texture** untuk membuat **textured and lit object** menggunakan `WebGL`.

Dengan capaian ini, mahasiswa diharapkan tidak hanya tahu istilah-istilahnya, tetapi juga mampu menjelaskan hubungan antarbagian: bagaimana arah permukaan memengaruhi pencahayaan, bagaimana pencahayaan memengaruhi warna akhir, dan bagaimana texture memodifikasi tampilan permukaan sebelum objek dirender ke layar.

### Inti yang Harus Ditekankan

- **Normal** adalah informasi arah permukaan yang menjadi dasar perhitungan shading dan lighting.
- Perbedaan **face normal** dan **vertex normal** menentukan apakah objek tampak **flat** atau **smooth**.
- **Ambient**, **diffuse**, dan **specular** adalah komponen utama dalam model pencahayaan sederhana.
- `dot product` digunakan untuk mengukur hubungan arah antara **normal** dan arah cahaya, terutama pada **diffuse lighting**.
- **UV coordinate**, **texture sampling**, **filtering**, dan **wrapping** menentukan bagaimana texture dipetakan ke permukaan objek.
- Tujuan akhir pertemuan ini adalah mampu membuat **textured and lit object** menggunakan `WebGL`.

### Transisi ke Slide Berikutnya

Setiap capaian ini akan kita posisikan dalam alur rendering: dari geometri, transformasi model, view, kamera, proyeksi, hingga layar. Fokus kita sekarang bergeser dari “objek berada di mana” menjadi “bagaimana permukaan objek terlihat” melalui kombinasi **normal**, **lighting**, dan **texture**.

---

## Slide 003 - Posisi Materi

### Narasi

Pada pertemuan sebelumnya, kita sudah membangun alur dasar rendering: objek dimulai dari **Geometry**, lalu melewati transformasi **Model** ke **World**, kemudian **View** dari kamera, **Projection**, dan akhirnya **Screen**. Alur ini menjawab pertanyaan: “di mana objek berada dan bagaimana bentuknya diproyeksikan ke layar?”

```text
Geometry
 ↓ Model
World
 ↓ View
Camera
 ↓ Projection
Screen
```

Namun, posisi dan bentuk objek saja belum cukup. Mahasiswa perlu memahami bagaimana permukaan objek terlihat saat dirender, yaitu warna, terang-gelap, dan detail permukaan. Fokus pertemuan ini adalah **Surface Appearance**, yang dibangun dari tiga komponen utama:

- **Normal**: arah permukaan yang menentukan bagaimana cahaya berinteraksi dengan objek.
- **Lighting**: model pencahayaan seperti ambient, diffuse, dan specular yang membentuk kesan volume.
- **Texture**: pemetaan detail permukaan melalui UV coordinate dan sampling.

Dengan kata lain, pipeline sebelumnya menentukan *di mana* piksel objek muncul, sedangkan materi ini menentukan *bagaimana* piksel tersebut terlihat.

### Inti yang Harus Ditekankan

- Pipeline geometri dari `Geometry` ke `Screen` sudah menjadi fondasi, bukan fokus utama pertemuan ini.
- Fokus utama adalah **Surface Appearance**, yaitu cara permukaan objek terlihat setelah posisi dan bentuknya sudah ditentukan.
- Tiga elemen kunci yang akan digunakan adalah **Normal**, **Lighting**, dan **Texture**.
- Mahasiswa perlu melihat hubungan antara pipeline rendering dan penampakan permukaan, bukan hanya menghitung transformasi.

### Transisi ke Slide Berikutnya

Karena shader sudah dibahas pada pertemuan sebelumnya, kita tidak akan mengulang dasar GLSL, vertex shader, fragment shader, attribute, uniform, `in`/`out`, dan interpolation. Kita langsung menggunakannya untuk membangun penampakan permukaan objek.

---

## Slide 004 - Shader Tidak Dijelaskan Ulang

### Narasi

Pada pertemuan ini, kita tidak mengulang penjelasan dasar shader. Pada P2, mahasiswa sudah dikenalkan pada `GLSL`, `Vertex Shader`, `Fragment Shader`, `attribute`, `uniform`, serta mekanisme `in` / `out` dan `interpolation`. Pengetahuan itu menjadi prasyarat penting karena pada P5 kita langsung menggunakannya untuk membangun **Surface Appearance**, yaitu cara permukaan objek tampak ketika dirender.

Secara intuitif, shader adalah tahap dalam rendering pipeline yang menentukan bagaimana data geometri diubah menjadi warna yang akhirnya tampil di layar. `Vertex Shader` memproses data per vertex, sedangkan `Fragment Shader` bekerja pada setiap fragmen atau piksel yang dihasilkan setelah rasterisasi. Data seperti posisi, normal, dan koordinat tekstur dapat mengalir antar tahap melalui variabel `in` / `out`, lalu diinterpolasi sehingga setiap fragmen memiliki nilai yang sesuai.

Dengan kata lain, slide ini berfungsi sebagai pengingat bahwa fokus kita bukan lagi sintaks dasar shader, melainkan bagaimana shader dipakai untuk menghitung pencahayaan dan tekstur pada permukaan objek. Mahasiswa perlu sudah mampu membedakan peran `attribute`, `uniform`, dan variabel antar shader, karena nanti semua elemen itu akan digunakan untuk menampilkan objek yang lebih realistis.

### Inti yang Harus Ditekankan

- Shader tidak dijelaskan ulang; materi P2 menjadi dasar yang langsung digunakan.
- `Vertex Shader` dan `Fragment Shader` adalah dua tahap utama yang akan dimanfaatkan untuk **Surface Appearance**.
- `attribute`, `uniform`, `in` / `out`, dan `interpolation` adalah mekanisme aliran data yang harus dipahami sebelum masuk ke lighting dan texture.

### Transisi ke Slide Berikutnya

Untuk mulai menghitung tampilan permukaan, kita perlu mengetahui data apa saja yang dibutuhkan objek 3D. Selanjutnya kita akan membahas data permukaan, yaitu posisi, normal, dan UV per vertex, serta uniform seperti matriks transformasi, posisi cahaya, posisi kamera, dan tekstur.

---

## Slide 005 - Data Permukaan

### Narasi

Untuk membuat objek 3D tampak memiliki permukaan yang dapat disinari dan diberi tekstur, data yang dikirim ke shader tidak cukup hanya berupa titik-titik koordinat. Objek 3D untuk shading dan texture membutuhkan informasi tambahan yang menggambarkan bagaimana permukaannya berperilaku secara visual.

Pada tingkat **per vertex**, data yang dibutuhkan adalah:

- `Position`
- `Normal`
- `UV`

Ketiganya menjadi atribut geometri yang melekat pada setiap titik vertex. `Position` menyatakan letak titik tersebut dalam ruang objek, `Normal` memberi informasi arah permukaan di titik itu, dan `UV` menyimpan koordinat tekstur yang akan digunakan untuk memetakan bagian tertentu dari texture ke permukaan objek.

Selain data per vertex, shader juga menerima **uniform** yang bersifat global untuk satu kali render. Uniform ini antara lain:

- `Model Matrix`
- `View Matrix`
- `Projection Matrix`
- `Light Position`
- `Camera Position`
- `Texture`

Uniform seperti `Model Matrix`, `View Matrix`, dan `Projection Matrix` digunakan untuk mengubah posisi objek dari ruang objek menuju ruang tampilan. Dengan kata lain, data vertex yang semula hanya posisi lokal objek akan diproses melalui pipeline transformasi agar dapat diproyeksikan ke layar.

Sementara itu, `Light Position` dan `Camera Position` penting karena penampakan permukaan sangat bergantung pada hubungan antara objek, cahaya, dan pengamat. `Normal` akan membantu menentukan bagaimana cahaya berinteraksi dengan permukaan, sedangkan `Texture` menyediakan data visual yang akan dipetakan menggunakan koordinat `UV`.

Perbedaan penting yang perlu dipahami adalah bahwa `Position`, `Normal`, dan `UV` adalah data **per vertex**, sedangkan matrix, posisi cahaya, posisi kamera, dan texture adalah data **uniform**. Data per vertex dapat berbeda untuk setiap titik dan biasanya diinterpolasi selama rasterisasi, sedangkan uniform memiliki nilai yang sama untuk seluruh objek pada satu tahap rendering.

Sebelum lanjut, kita perlu memahami bahwa objek 3D tidak hanya didefinisikan oleh bentuk geometrinya saja. Untuk menghasilkan **surface appearance**, shader membutuhkan kombinasi data geometri, orientasi permukaan, koordinat tekstur, transformasi, posisi cahaya, posisi kamera, dan sumber tekstur.

### Inti yang Harus Ditekankan

- Objek 3D untuk shading dan texture membutuhkan data **per vertex**: `Position`, `Normal`, dan `UV`.
- `Position` menentukan letak vertex, `Normal` menentukan arah permukaan, dan `UV` menentukan bagian texture yang digunakan.
- Shader juga menerima **uniform** seperti `Model Matrix`, `View Matrix`, `Projection Matrix`, `Light Position`, `Camera Position`, dan `Texture`.
- Data per vertex bersifat lokal untuk setiap titik, sedangkan uniform bersifat global untuk proses rendering objek.
- Konsep ini menjadi dasar untuk membangun tampilan permukaan objek sebelum detail masing-masing data dibahas lebih lanjut.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan membedah satu per satu tiga data penting tersebut: `Position`, `Normal`, dan `UV`, serta memahami fungsi berbeda dari masing-masing dalam proses shading dan texture.

---

## Slide 006 - Position, Normal, UV

### Narasi

Tiga data yang kita lihat pada slide ini—**Position**, **Normal**, dan **UV**—adalah informasi dasar yang membuat permukaan 3D dapat dirender secara benar. Tanpa ketiganya, GPU hanya memiliki titik-titik geometri tanpa konteks visual yang cukup.

**Position** menentukan di mana sebuah vertex atau permukaan berada dalam ruang. Dalam pipeline, posisi biasanya melewati transformasi model, view, dan projection sebelum menjadi koordinat layar. Dari sinilah rasterisasi menentukan pixel mana yang mewakili permukaan tersebut.

**Normal** menunjukkan arah permukaan menghadap. Arah ini penting karena cahaya tidak hanya bergantung pada posisi, tetapi juga pada sudut antara permukaan dan sumber cahaya. Semakin tegak lurus normal terhadap arah cahaya, permukaan cenderung tampak lebih terang; semakin miring, pencahayaan lebih redup.

**UV** adalah koordinat texture yang memetakan bagian gambar texture ke permukaan objek. Jika posisi menjawab "di mana", normal menjawab "menghadap ke mana", dan UV menjawab "bagian gambar mana yang dipakai".

Ketiganya memiliki fungsi berbeda, tetapi saling melengkapi. Position membangun bentuk, normal membangun pencahayaan, dan UV membangun detail permukaan. Dalam shader, data ini biasanya dikirim per vertex lalu diinterpolasi ke pixel, sehingga setiap fragmen memiliki informasi posisi, arah permukaan, dan koordinat texture.

Sebelum lanjut, mahasiswa perlu memahami bahwa data ini bukan sekadar atribut tambahan, melainkan input utama yang menentukan bagaimana objek terlihat dalam rendering real-time.

### Inti yang Harus Ditekankan

- **Position** menentukan lokasi permukaan dalam ruang dan menjadi dasar transformasi serta rasterisasi.
- **Normal** menentukan arah permukaan dan menjadi kunci perhitungan lighting.
- **UV** memetakan texture ke permukaan sehingga objek memiliki detail visual.
- Ketiga data bekerja bersama dalam pipeline rendering: geometri, pencahayaan, dan tekstur.

### Transisi ke Slide Berikutnya

Setelah memahami peran **Normal**, kita akan masuk lebih dalam ke definisinya: apa sebenarnya normal, mengapa harus tegak lurus permukaan, dan bagaimana arah tersebut memengaruhi respons permukaan terhadap cahaya.

---

## Slide 007 - Apa Itu Normal?

### Narasi

Setelah kita memahami `Position`, `Normal`, dan `UV` sebagai tiga data penting pada permukaan, sekarang kita fokus pada `Normal`. Secara geometris, **normal** adalah vektor yang tegak lurus terhadap permukaan. Dalam diagram sederhana, panah `N` yang keluar dari permukaan menunjukkan arah normal. Arah ini bukan sekadar simbol; ia memberi tahu sistem rendering ke mana permukaan itu menghadap.

Perhatikan bahwa `Position` menjawab di mana titik permukaan berada, sedangkan `Normal` menjawab bagaimana orientasi permukaan tersebut. Dua permukaan bisa berada di posisi yang sama, tetapi jika normalnya berbeda, penampilannya terhadap cahaya dapat berbeda. Inilah alasan mengapa `Normal` menjadi data yang sangat penting dalam grafika komputer.

Hubungan utamanya ada pada lighting. Cahaya yang mengenai permukaan tidak hanya bergantung pada posisi, tetapi juga pada sudut antara arah cahaya dan arah normal. Intuisinya, permukaan yang menghadap langsung ke sumber cahaya akan tampak lebih terang, sedangkan permukaan yang miring atau membelakangi cahaya akan tampak lebih gelap. Dengan kata lain, `Normal` membantu menentukan respons permukaan terhadap cahaya.

Dalam alur rendering, setelah geometri diproses dan posisi titik-titik permukaan diketahui, `Normal` digunakan pada tahap shading untuk menghitung warna atau kecerahan yang akan ditampilkan. Tanpa normal yang benar, permukaan akan sulit dibedakan secara visual; objek bisa terlihat datar, patah cahaya tidak masuk akal, atau detail bentuk menjadi tidak jelas.

Untuk slide ini, yang perlu kita pegang adalah definisi dan fungsi `Normal`: vektor tegak lurus permukaan yang menentukan orientasi permukaan terhadap cahaya. Kita belum perlu masuk ke cara menghitung normal per face atau per vertex; cukup memahami bahwa normal adalah informasi arah yang menjadi dasar shading.

### Inti yang Harus Ditekankan

- **Normal** adalah vektor yang tegak lurus terhadap permukaan.
- `Normal` menentukan arah permukaan menghadap, berbeda dari `Position` yang menentukan lokasi permukaan.
- `Normal` penting untuk lighting karena respons permukaan terhadap cahaya bergantung pada orientasinya.
- Dalam rendering pipeline, `Normal` digunakan pada tahap shading untuk menghasilkan tampilan permukaan yang lebih realistis.

### Transisi ke Slide Berikutnya

Setelah memahami apa itu normal secara umum, langkah berikutnya adalah melihat bagaimana normal dapat diberikan pada sebuah face. Pada slide berikutnya, kita akan membahas **Face Normal**, yaitu satu arah normal untuk satu face, dan bagaimana hal itu memberi tampilan permukaan yang lebih tegas.

---

## Slide 008 - Face Normal

### Narasi

Kita baru saja melihat bahwa **normal** adalah vektor yang tegak lurus terhadap permukaan. Pada slide ini, kita membahas salah satu cara paling sederhana untuk merepresentasikan normal, yaitu **face normal**.

Intinya, **satu face dapat memiliki satu arah normal**. Artinya, seluruh permukaan face tersebut dianggap memiliki orientasi yang sama. Dalam diagram, panah `N` di atas face menunjukkan bahwa arah normal tersebut mewakili face secara keseluruhan, bukan hanya satu titik tertentu.

Cara membaca diagramnya cukup sederhana. Face digambarkan sebagai bidang datar, dan vektor `N` keluar tegak lurus dari bidang itu. Ini memberi kesan bahwa face tersebut memiliki satu “arah permukaan” yang konsisten. Dalam konteks rendering, arah ini akan dipakai untuk menentukan bagaimana cahaya mengenai face tersebut.

Dalam grafika komputer, **face normal** sangat penting karena normal menentukan respons permukaan terhadap cahaya. Jika arah `N` menghadap ke arah sumber cahaya, face akan terlihat lebih terang. Jika arah `N` menjauh dari cahaya, face akan terlihat lebih gelap. Dengan kata lain, `normal` menjadi informasi kunci dalam proses `lighting` atau pencahayaan.

Karena satu face hanya memakai satu normal, batas antara face yang satu dan face lainnya biasanya terlihat cukup tegas. Hasilnya, objek tampak lebih “keras” atau faceted. Tampilan seperti ini sering muncul pada objek low-poly, permukaan yang memang dirancang tajam, atau saat kita ingin melihat struktur face secara lebih jelas.

Sebelum lanjut, yang perlu kita pahami adalah: **face normal memberi tampilan permukaan yang tegas karena setiap face memakai satu arah normal yang sama**. Ini berbeda dengan pendekatan yang akan kita lihat berikutnya, di mana normal dapat disimpan pada setiap vertex dan diinterpolasi sehingga permukaan bisa tampak lebih halus.

### Inti yang Harus Ditekankan

- **Face normal** adalah normal yang mewakili satu face secara keseluruhan.
- Satu face memiliki **satu arah normal** yang sama untuk seluruh permukaannya.
- Arah `N` menentukan bagaimana face berinteraksi dengan cahaya dalam proses `lighting`.
- Karena normalnya seragam per face, tampilan permukaan cenderung **tegas**, tajam, atau faceted.

### Transisi ke Slide Berikutnya

Jika setiap face memakai satu normal, batas antar-face akan terlihat jelas. Selanjutnya, kita akan melihat **vertex normal**, yaitu normal yang disimpan pada setiap vertex dan kemudian diinterpolasi untuk menghasilkan permukaan yang tampak lebih halus.

---

## Slide 009 - Vertex Normal

### Narasi

Pada slide sebelumnya, kita membahas **face normal**, yaitu satu arah normal yang mewakili satu face. Pendekatan itu membuat setiap face memiliki arah pencahayaan yang sama, sehingga batas antar-face bisa terlihat tegas.

Pada **vertex normal**, cara menyimpan normalnya berbeda. Mesh dapat menyimpan nilai normal pada setiap **vertex**, bukan hanya pada satu face. Artinya, setiap titik sudut mesh memiliki arah normal yang dapat berbeda satu sama lain.

Ketika mesh dirender, nilai normal pada vertex tidak langsung dipakai utuh untuk seluruh face. Nilai normal tersebut kemudian **diinterpolasi** antar-vertex selama proses rasterisasi. Dengan kata lain, setiap **fragment** di dalam face akan mendapatkan nilai normal yang berada di antara normal-normal vertex yang membentuk face tersebut.

Alur sederhananya dapat dipahami seperti ini:

1. Setiap vertex memiliki nilai `normal`.
2. Saat rasterisasi, nilai normal diinterpolasi antar-vertex.
3. Setiap fragment mendapatkan normal hasil interpolasi.
4. Fragment shader menggunakan normal tersebut untuk menghitung pencahayaan.

Keuntungan dari pendekatan ini adalah permukaan dapat terlihat lebih halus. Karena normal tidak berubah secara tiba-tiba di batas face, transisi pencahayaan antar-fragment menjadi lebih lembut. Ini penting dalam grafika komputer karena banyak objek dunia nyata memiliki permukaan yang halus, bukan tersusun dari sisi-sisi datar yang kaku.

Perlu kita tekankan bahwa vertex normal sangat berkaitan dengan pipeline rendering. Nilai normal biasanya dikirim dari vertex ke fragment shader, lalu dipakai untuk menghitung intensitas cahaya pada setiap fragment. Jadi, kualitas pencahayaan yang kita lihat di layar sangat dipengaruhi oleh bagaimana normal disimpan dan diinterpolasi.

### Inti yang Harus Ditekankan

- **Vertex normal** disimpan pada setiap vertex, bukan hanya satu normal per face.
- Nilai normal antar-vertex **diinterpolasi** untuk setiap fragment di dalam face.
- Hasilnya, pencahayaan antar-fragment menjadi lebih halus sehingga permukaan terlihat lebih natural.
- Konsep ini menjadi dasar untuk memahami perbedaan antara tampilan halus dan tampilan tegas pada shading.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana vertex normal menghasilkan permukaan yang lebih halus, kita akan membandingkannya dengan pendekatan lain, yaitu **flat shading**, di mana satu face menggunakan satu normal sehingga sisi objek terlihat lebih tegas.

---

## Slide 010 - Flat Shading

### Narasi

Pada **flat shading**, setiap **face** atau segitiga pada mesh memakai **satu normal per face**.

```text
satu normal per face
```

Artinya, ketika sebuah segitiga dirender, seluruh fragmen di dalam segitiga tersebut menggunakan arah normal yang sama. Karena normal tidak berubah dari satu fragmen ke fragmen lain di dalam face yang sama, hasil pencahayaan pada face itu cenderung seragam.

Hal ini penting dalam grafika komputer karena normal adalah input utama untuk menghitung **lighting**. Jika normal sama untuk seluruh face, maka intensitas cahaya yang diterima face juga relatif sama. Akibatnya, batas antar-face menjadi terlihat jelas, terutama ketika sudut antar-face cukup besar.

Secara pipeline, kita bisa membayangkannya sebagai berikut:

1. Geometri mesh dikirim ke GPU.
2. Rasterizer memecah face menjadi fragmen.
3. Untuk **flat shading**, nilai normal yang dipakai pada face tersebut tetap konstan.
4. Fragment shader menghitung lighting menggunakan normal yang sama untuk semua fragmen di face itu.

Karakter visualnya adalah sisi objek tampak tegas dan tersegmentasi. Gaya ini sering dipakai untuk **low-poly style**, karena justru menonjolkan bentuk polygonal objek. Perubahan lighting antar-face menjadi tegas, sehingga bentuk geometri mudah dibaca.

Sebelum lanjut, mahasiswa perlu memahami bahwa perbedaan **flat shading** dan **smooth shading** bukan hanya soal tampilan, tetapi juga cara normal disimpan dan digunakan. Pada flat shading, normal bersifat per-face; sedangkan pada pendekatan smooth, normal biasanya terkait dengan vertex dan diinterpolasi antar-vertex.

### Inti yang Harus Ditekankan

- **Flat shading** menggunakan **satu normal per face**, bukan normal yang berubah-ubah di dalam face.
- Karena normal konstan, lighting pada satu face cenderung seragam dan batas antar-face terlihat jelas.
- Gaya ini cocok untuk **low-poly** karena menonjolkan struktur polygonal objek.
- Dalam pipeline, normal yang sama dipakai oleh seluruh fragmen pada face yang sama saat perhitungan lighting.

### Transisi ke Slide Berikutnya

Jika flat shading membuat batas face terlihat tegas, maka pada slide berikutnya kita akan melihat **smooth shading**, di mana normal dari vertex diinterpolasi sehingga pencahayaan berubah lebih halus antar-fragmen.

---

## Slide 011 - Smooth Shading

### Narasi

Setelah **flat shading**, kita melihat bahwa setiap face memakai satu normal, sehingga perubahan pencahayaan antar-face terasa tegas. **Smooth shading** muncul sebagai cara untuk membuat permukaan polygonal terlihat lebih halus tanpa harus menambah jumlah segitiga secara besar-besaran.

Pada **smooth shading**, normal tidak lagi disimpan sebagai satu nilai per face. Sebaliknya, setiap vertex memiliki `vertex normal` yang merepresentasikan arah permukaan di titik tersebut. Nilai-nilai ini kemudian dibawa ke tahap rasterisasi.

```text
vertex normal
   ↓
interpolation
   ↓
normal per fragment
```

Alur di atas menggambarkan proses utama dalam pipeline rendering:

1. `vertex normal` tersedia di setiap vertex mesh.
2. Saat segitiga di-rasterisasi, GPU melakukan `interpolation` terhadap normal dari ketiga vertex.
3. Hasilnya adalah `normal per fragment` yang dapat digunakan oleh fragment shader untuk menghitung pencahayaan pada setiap pixel.

Karena pencahayaan dihitung per fragment menggunakan normal yang berubah-ubah secara bertahap, transisi cahaya pada permukaan menjadi lebih halus. Objek yang sebenarnya masih tersusun dari polygon dapat tampak lebih smooth, terutama pada bentuk melengkung seperti bola, karakter, atau permukaan organik.

Hal penting yang perlu dipahami adalah bahwa **smooth shading** tidak mengubah geometri secara langsung; yang berubah adalah representasi normal dan cara normal tersebut diinterpolasi. Dengan kata lain, dua mesh dapat memiliki bentuk polygon yang sama, tetapi jika normalnya berbeda, hasil pencahayaannya bisa terlihat sangat berbeda.

Sebelum lanjut, mahasiswa perlu mengingat bahwa `vertex normal` adalah input, `interpolation` adalah proses di rasterisasi, dan `normal per fragment` adalah output yang dipakai pada tahap shading. Pemahaman ini akan menjadi dasar untuk membandingkan **flat shading** dan **smooth shading** secara langsung.

### Inti yang Harus Ditekankan

- `vertex normal` disimpan per vertex, bukan per face.
- `interpolation` menghasilkan `normal per fragment` selama rasterisasi.
- Pencahayaan per fragment membuat transisi lebih halus dan objek polygonal tampak lebih smooth.

### Transisi ke Slide Berikutnya

Dengan memahami alur `vertex normal` → `interpolation` → `normal per fragment`, kita siap membandingkan langsung karakteristik **flat shading** dan **smooth shading** pada slide berikutnya.

---

## Slide 012 - Flat vs Smooth

### Narasi

Perbedaan paling mendasar antara **flat shading** dan **smooth shading** bukan pada bentuk geometri, melainkan pada **normal** yang digunakan untuk menghitung pencahayaan. Pada **flat shading**, setiap segitiga atau face memiliki satu **normal per face** yang sama untuk seluruh fragmen di dalam face tersebut. Akibatnya, hasil pencahayaan pada satu face cenderung seragam, sehingga batas antar face terlihat tegas.

Pada **smooth shading**, normal disimpan pada setiap vertex, yaitu **normal per vertex**. Saat rasterisasi, nilai normal tersebut diinterpolasi ke seluruh fragmen di dalam triangle. Karena setiap fragmen dapat memiliki arah normal yang sedikit berbeda, pencahayaan berubah secara gradual. Inilah yang membuat permukaan polygonal tampak lebih halus, meskipun bentuk dasarnya masih tersusun dari segitiga.

Kita bisa melihat alurnya secara sederhana:

- **Flat shading**: `normal per face` → seluruh fragmen face memakai normal yang sama → transisi cahaya tegas.
- **Smooth shading**: `normal per vertex` → normal diinterpolasi → `normal per fragment` → transisi cahaya halus.

Poin penting yang perlu dipahami mahasiswa adalah bahwa **geometry dapat sama**, tetapi tampilan akhir bisa berbeda hanya karena cara normal ditentukan. Dua mesh dengan vertex dan face yang identik dapat menghasilkan visual yang sangat berbeda: satu tampak low-poly dan tegas, satu lagi tampak lebih smooth dan mendekati permukaan kontinu.

Dalam konteks rendering pipeline, perbedaan ini muncul terutama pada tahap vertex dan fragment. Pada flat shading, normal face dapat disimpan sebagai nilai yang sama untuk seluruh fragmen face, sehingga fragment shader menerima normal yang konstan. Pada smooth shading, normal vertex diinterpolasi oleh rasterizer, sehingga fragment shader menerima normal yang bervariasi per fragmen. Karena lighting umumnya bergantung pada arah normal, perbedaan kecil pada normal akan langsung memengaruhi hasil warna, bayangan, dan kesan bentuk objek.

Secara aplikasi, **flat shading** cocok untuk gaya **low-poly**, desain yang ingin menonjolkan struktur polygon, atau objek dengan permukaan yang memang dimaksudkan tegas. **Smooth shading** lebih cocok untuk permukaan halus seperti karakter, benda organik, atau objek yang ingin terlihat lebih natural. Pilihan ini bukan hanya soal estetika, tetapi juga cara kita mengomunikasikan bentuk 3D melalui pencahayaan.

Sebelum lanjut, mahasiswa perlu mengingat bahwa normal yang digunakan untuk lighting harus memiliki arah yang benar dan panjang yang konsisten. Pada slide berikutnya, kita akan melihat mengapa normal biasanya harus dinormalisasi agar perhitungan lighting, terutama dot product, tidak menghasilkan nilai yang salah.

### Inti yang Harus Ditekankan

- **Flat shading** memakai **normal per face**, sehingga pencahayaan per face seragam dan batas polygon terlihat tegas.
- **Smooth shading** memakai **normal per vertex** yang diinterpolasi menjadi **normal per fragment**, sehingga transisi cahaya lebih halus.
- **Geometry dapat sama**; perbedaan tampilan terutama berasal dari cara normal ditentukan dan digunakan dalam lighting.
- Pilihan flat atau smooth memengaruhi gaya visual: **low-poly** versus permukaan halus.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa normal menentukan tampilan shading, kita perlu memastikan normal yang masuk ke perhitungan lighting memiliki panjang yang benar. Selanjutnya kita akan membahas mengapa normal harus dinormalisasi, yaitu agar menjadi unit vector dan hasil dot product lighting tetap akurat.

---

## Slide 013 - Normal Harus Dinormalisasi

### Narasi

Pada tahap shading, **normal** bukan hanya menunjukkan arah permukaan, tetapi juga menjadi input utama untuk menghitung sudut antara permukaan dan arah cahaya atau arah pandang. Karena itu, normal yang dipakai dalam perhitungan lighting sebaiknya berupa **unit vector**, yaitu vektor dengan panjang satu.

Dalam banyak formula lighting, kita menggunakan `dot product` antara normal dan arah cahaya. Jika kedua vektor adalah unit vector, hasil `dot product` berkaitan langsung dengan cosinus sudut antara keduanya. Jika normal tidak memiliki panjang satu, hasil `dot product` akan ikut dipengaruhi oleh panjang normal, sehingga nilai lighting bisa menjadi terlalu besar atau terlalu kecil.

Untuk menghindari hal tersebut, normal harus dinormalisasi sebelum dipakai:

```glsl
vec3 N =
  normalize(v_normal);
```

Di sini, `v_normal` adalah normal yang tersedia di shader, sedangkan `normalize` menghasilkan vektor dengan arah yang sama tetapi panjangnya menjadi satu. Dengan kata lain, normalisasi tidak mengubah arah permukaan, hanya memastikan panjangnya konsisten.

Panjang normal yang ideal adalah:

```text
|N| = 1
```

Dalam pipeline WebGL atau GPU, normal biasanya berasal dari geometri, lalu dikirim ke shader melalui attribute atau varying. Baik pada flat shading maupun smooth shading, normal tetap perlu dinormalisasi sebelum masuk ke perhitungan lighting. Pada smooth shading, normal yang diinterpolasi antar vertex juga dapat memiliki panjang yang tidak tepat, sehingga normalisasi di shader menjadi langkah yang penting.

Secara praktis, mahasiswa perlu membiasakan diri memeriksa apakah normal sudah dinormalisasi sebelum digunakan dalam `dot product` atau perhitungan lighting lainnya. Kebiasaan ini membantu menghindari hasil rendering yang salah secara visual, meskipun geometri dan parameter cahaya sudah benar.

### Inti yang Harus Ditekankan

- Lighting umumnya membutuhkan **unit vector**, sehingga normal harus memenuhi `|N| = 1`.
- Gunakan `normalize(v_normal)` sebelum normal dipakai dalam perhitungan lighting.
- Normal yang tidak dinormalisasi dapat membuat `dot product` salah dan menghasilkan pencahayaan yang tidak akurat.

### Transisi ke Slide Berikutnya

Setelah panjang normal dipastikan benar, langkah berikutnya adalah memastikan arah normal tetap benar ketika objek mengalami transformasi. Pada slide berikutnya, kita akan melihat bagaimana normal ikut transformasi, terutama pada kasus `non-uniform scaling`.

---

## Slide 014 - Normal Ikut Transformasi

### Narasi

Setelah kita memastikan bahwa normal memiliki panjang satu, ada satu hal penting berikutnya: normal tidak boleh dibiarkan tetap diam ketika objek berubah posisi atau bentuk. Dalam rendering pipeline, posisi vertex biasanya berada pada **local space** atau **object space**, lalu ditransformasikan ke **world space** atau **view space** menggunakan model matrix. Normal juga berada pada ruang yang sama dengan geometri, sehingga ketika objek dirotasi atau diskalakan, arah normal harus ikut berubah.

Secara visual, bayangkan sebuah kubus yang permukaannya memiliki normal yang tegak lurus terhadap tiap sisi. Jika kubus itu diputar, sisi-sisinya ikut berputar, dan normalnya juga harus berputar mengikuti permukaan. Jika normal tidak ikut berputar, arah pencahayaan akan salah karena normal tidak lagi menggambarkan orientasi permukaan yang sebenarnya.

Perlu kita tekankan bahwa **normal adalah arah**, bukan titik posisi. Posisi vertex adalah koordinat titik di ruang, sedangkan normal adalah vektor arah yang menunjukkan ke mana permukaan menghadap. Karena itu, transformasi untuk normal tidak selalu sama dengan transformasi untuk `position`. Terutama, normal tidak boleh ikut mengalami translasi, karena translasi hanya memindahkan titik, bukan mengubah arah permukaan.

Untuk kasus sederhana seperti rotasi dan **uniform scaling**, arah normal biasanya masih bisa ditransformasikan menggunakan bagian linear dari model matrix, lalu dinormalisasi kembali. Namun, ketika terjadi **non-uniform scaling**, yaitu skala yang berbeda pada sumbu `x`, `y`, atau `z`, arah normal dapat berubah secara tidak proporsional. Jika kita langsung memakai model matrix biasa untuk mentransformasi normal pada kasus ini, normal bisa menjadi tidak tegak lurus lagi terhadap permukaan.

Hal ini sangat penting karena lighting sangat bergantung pada sudut antara normal dan arah cahaya atau arah pandang. Dot product antara normal dan light direction akan menghasilkan nilai yang salah jika normal tidak benar. Akibatnya, shading bisa terlihat aneh, misalnya permukaan yang seharusnya terang menjadi gelap, highlight bergeser, atau transisi warna tidak konsisten.

Jadi, sebelum masuk ke detail teknis, mahasiswa perlu memahami prinsip utamanya: **normal harus mengikuti transformasi objek**, tetapi cara transformasinya tidak selalu identik dengan transformasi posisi. Untuk rotasi dan skala seragam, masalahnya relatif sederhana. Namun untuk skala tidak seragam, kita membutuhkan cara khusus agar normal tetap valid.

### Inti yang Harus Ditekankan

- **Normal adalah arah permukaan**, bukan titik posisi, sehingga transformasinya tidak selalu sama dengan transformasi `position`.
- Ketika objek mengalami **rotate** atau **scale**, arah normal harus ikut berubah agar tetap menggambarkan orientasi permukaan.
- Pada **non-uniform scaling**, transformasi normal tidak bisa selalu menggunakan model matrix biasa.
- Setelah normal ditransformasikan, normal tetap perlu **dinormalisasi** sebelum digunakan untuk perhitungan lighting.

### Transisi ke Slide Berikutnya

Untuk menangani kasus umum, terutama ketika objek mengalami non-uniform scaling, kita akan melihat bagaimana normal ditransformasikan secara benar menggunakan **Normal Matrix**.

---

## Slide 015 - Normal Matrix

### Narasi

Pada slide sebelumnya kita sudah melihat bahwa ketika objek dirotasi atau diskala, arah **normal** juga harus berubah. Namun, normal tidak selalu bisa ditransformasikan persis seperti posisi vertex. Masalahnya paling terasa pada **non-uniform scaling**, yaitu ketika sumbu X, Y, dan Z diskala dengan faktor yang berbeda. Jika normal tetap memakai matriks model biasa, arah normal bisa menjadi miring atau tidak lagi tegak lurus permukaan, sehingga perhitungan arah permukaan menjadi tidak akurat.

Untuk kasus umum, normal ditransformasikan menggunakan matriks yang berkaitan dengan `inverse transpose` dari bagian linear `Model Matrix`. Artinya, kita tidak langsung memakai matriks transformasi objek secara mentah. Kita mengambil bagian linear dari model matrix, kemudian membentuk transformasi yang sesuai untuk vektor arah seperti normal. Intuisinya, normal adalah vektor arah permukaan, bukan titik posisi, sehingga ia harus tetap mempertahankan hubungan tegak lurus terhadap permukaan setelah objek ditransformasi.

Secara konsep, alurnya dapat dibaca dari atas ke bawah:

```text
Local Normal
   ↓
Normal Matrix
   ↓
World/View Normal
```

Pada tahap pertama, **Local Normal** adalah normal yang tersimpan bersama geometri objek dalam ruang lokal. Normal ini mendefinisikan arah permukaan sebelum objek diposisikan, dirotasi, atau diskala di dunia. Kemudian normal tersebut melewati **Normal Matrix**, yaitu transformasi khusus yang menjaga arah normal tetap konsisten dengan bentuk permukaan objek setelah transformasi. Hasil akhirnya adalah **World/View Normal**, yaitu normal yang sudah berada pada ruang yang cocok untuk digunakan dalam perhitungan pencahayaan atau shading.

Penting untuk diperhatikan bahwa normal matrix biasanya hanya berkaitan dengan bagian linear model matrix, bukan seluruh transformasi affine yang mungkin mencakup translasi. Translasi memindahkan posisi objek, tetapi tidak mengubah arah permukaan. Karena normal adalah arah, translasi tidak relevan untuk mengubah arahnya. Dengan membatasi pada bagian linear, normal matrix tetap fokus pada rotasi dan skala yang benar-benar memengaruhi orientasi permukaan.

Dalam konteks rendering pipeline, normal yang sudah ditransformasi dengan benar menjadi input penting sebelum tahap shading. Jika normal salah, permukaan akan terlihat seperti menghadap arah yang salah, sehingga pencahayaan yang seharusnya jatuh pada sisi tertentu bisa berpindah ke sisi lain. Hal ini membuat objek tampak tidak konsisten, terutama ketika objek diskala tidak merata atau ketika kamera dan objek berada pada ruang koordinat yang berbeda.

Sebelum lanjut, mahasiswa perlu memahami bahwa **normal matrix** bukan sekadar matriks tambahan yang opsional. Ia adalah mekanisme yang menjaga normal tetap valid setelah objek mengalami transformasi, khususnya pada kasus umum yang melibatkan rotasi dan non-uniform scaling. Pemahaman ini menjadi dasar penting karena normal yang benar akan menentukan bagaimana arah permukaan dibaca oleh sistem pencahayaan.

### Inti yang Harus Ditekankan

- Normal tidak selalu dapat ditransformasikan seperti posisi vertex, terutama pada **non-uniform scaling**.
- Untuk kasus umum, normal menggunakan transformasi yang berkaitan dengan `inverse transpose` dari bagian linear `Model Matrix`.
- Alur utamanya adalah **Local Normal** → **Normal Matrix** → **World/View Normal**.
- Normal matrix menjaga arah normal tetap konsisten dengan permukaan objek setelah transformasi.
- Normal yang benar penting karena menjadi dasar perhitungan arah permukaan sebelum pencahayaan dan shading.

### Transisi ke Slide Berikutnya

Setelah normal dapat ditransformasikan dengan benar, langkah berikutnya adalah memahami mengapa normal tersebut dibutuhkan dalam rendering. Pada slide berikutnya kita akan melihat bagaimana lighting membantu memberikan petunjuk bentuk, arah permukaan, kedalaman, dan karakter material sederhana pada objek.

---

## Slide 016 - Mengapa Lighting Dibutuhkan?

### Narasi

Bayangkan sebuah objek 3D yang dirender hanya dengan warna solid. Tanpa informasi cahaya, setiap sisi dapat terlihat sama rata, sehingga bentuknya sulit terbaca. Dalam grafika komputer, kondisi seperti ini sering disebut `flat`: objek memang ada, tetapi tidak memberi petunjuk arah permukaan, jarak, atau volume.

Lighting hadir untuk memecahkan masalah visual tersebut. Dengan mensimulasikan cahaya, renderer dapat membedakan bagian permukaan yang menghadap sumber cahaya, bagian yang miring, dan bagian yang lebih gelap. Dari perbedaan terang dan gelap inilah mata kita membaca bentuk, kedalaman, dan posisi objek dalam ruang.

Secara visual, lighting membantu memberikan beberapa petunjuk penting:

- **bentuk**, karena bayangan dan pencahayaan memperlihatkan kontur permukaan;
- **arah permukaan**, karena bagian yang menghadap cahaya tampak lebih terang;
- **kedalaman**, karena perbedaan terang membantu membedakan jarak antarbagian objek;
- **posisi sumber cahaya**, karena arah bayangan dan area terang memberi kesan lokasi cahaya;
- **karakter material sederhana**, karena respons visual permukaan terhadap cahaya dapat memberi kesan halus, kasar, atau reflektif.

Secara teknis, lighting tidak bekerja secara acak pada pixel. Ia membutuhkan informasi permukaan, terutama **normal**, yang menunjukkan arah permukaan pada setiap titik. Karena itu, pembahasan **Normal Matrix** sebelumnya menjadi penting: normal harus ditransformasikan dengan benar agar perhitungan cahaya tetap konsisten setelah objek diposisikan, diputar, atau diproyeksikan.

Dalam pipeline rendering, lighting biasanya menjadi bagian dari proses **shading**, yaitu tahap di mana warna akhir permukaan ditentukan sebelum atau selama rasterisasi. Pada slide ini, kita cukup memahami alasan mendasarnya: lighting membuat objek terlihat lebih realistis, lebih terbaca, dan lebih informatif secara visual.

### Inti yang Harus Ditekankan

- Tanpa lighting, objek sering terlihat `flat` dan sulit dibaca sebagai bentuk 3D.
- Lighting memberi petunjuk bentuk, arah permukaan, kedalaman, posisi sumber cahaya, dan karakter material sederhana.
- Perhitungan lighting bergantung pada normal permukaan, sehingga transformasi normal yang benar menjadi dasar visual yang konsisten.

### Transisi ke Slide Berikutnya

Setelah memahami mengapa lighting dibutuhkan, langkah berikutnya adalah melihat bagaimana cahaya disimulasikan secara sederhana. Pada slide berikutnya, kita akan membahas model lighting sederhana yang terdiri dari `Ambient`, `Diffuse`, dan `Specular`.

---

## Slide 017 - Model Lighting Sederhana

### Narasi

Setelah kita melihat bahwa tanpa lighting objek sering terlihat `flat`, kita perlu cara sederhana untuk memberi warna permukaan yang lebih meyakinkan. Pada tahap pengantar, kita memakai **model refleksi klasik sederhana** yang menggabungkan tiga komponen utama:

```text
Ambient
+
Diffuse
+
Specular
```

Ketiga komponen ini tidak saling menggantikan, melainkan saling melengkapi untuk membentuk tampilan akhir permukaan objek.

- **Ambient** memberikan pencahayaan dasar yang relatif merata. Komponen ini membantu objek tetap terlihat meskipun permukaannya tidak menghadap langsung ke sumber cahaya.
- **Diffuse** memberikan perbedaan terang dan gelap pada permukaan. Komponen ini penting karena membantu kita membaca bentuk objek dan arah permukaan.
- **Specular** memberikan efek kilau atau pantulan cahaya pada permukaan. Komponen ini membantu memberi kesan material yang lebih halus, mengkilap, atau reflektif.

Dalam konteks rendering, warna akhir pada suatu titik permukaan tidak selalu hanya berasal dari warna material saja. Warna tersebut dapat dihitung sebagai kombinasi dari beberapa komponen cahaya, yaitu `ambient`, `diffuse`, dan `specular`. Dengan cara ini, objek yang sama bisa terlihat berbeda tergantung pada pencahayaan dan orientasi permukaannya.

Model ini disebut **sederhana** karena ia tidak mencoba mensimulasikan semua fenomena cahaya secara lengkap. Namun, model ini sangat berguna sebagai dasar karena memberi intuisi visual yang kuat: objek memiliki bagian yang lebih terang, bagian yang lebih gelap, dan bagian yang mungkin tampak mengkilap.

Sebelum lanjut ke perhitungan yang lebih konkret, kita perlu memahami bahwa model ini adalah penyederhanaan. Tujuannya bukan membuat simulasi cahaya yang sangat realistis, tetapi memberi kerangka dasar untuk memahami bagaimana lighting memengaruhi tampilan objek dalam grafika komputer.

### Inti yang Harus Ditekankan

- Model lighting sederhana ini terdiri dari **Ambient**, **Diffuse**, dan **Specular**.
- **Ambient** memberi pencahayaan dasar, **Diffuse** memberi bentuk dan arah permukaan, sedangkan **Specular** memberi efek kilau.
- Warna akhir permukaan dihitung sebagai kombinasi dari beberapa komponen cahaya, bukan hanya satu warna material yang tetap.

### Transisi ke Slide Berikutnya

Untuk menghitung komponen `diffuse` dan `specular` secara lebih konkret, kita perlu mengetahui arah cahaya. Pada slide berikutnya, kita akan melihat bagaimana arah cahaya ditentukan untuk `point light`.

---

## Slide 018 - Arah Cahaya

### Narasi

Pada model lighting sederhana, salah satu hal yang menentukan apakah suatu permukaan terlihat terang atau gelap adalah **arah datang cahaya**. Untuk **point light**, arah ini tidak bisa dianggap tetap, karena point light memiliki posisi tertentu di ruang 3D. Artinya, arah cahaya yang diterima oleh satu titik permukaan bisa berbeda dengan arah cahaya yang diterima oleh titik permukaan lain.

Slide ini menunjukkan cara menghitung arah tersebut:

```text
L =
normalize(
  LightPosition -
  SurfacePosition
)
```

Di sini, `LightPosition` adalah posisi sumber cahaya, sedangkan `SurfacePosition` adalah posisi titik permukaan yang sedang diproses. Jika kita mengurangkan `SurfacePosition` dari `LightPosition`, maka hasilnya adalah vektor yang menunjuk **dari permukaan menuju sumber cahaya**.

Fungsi `normalize` sangat penting. Vektor hasil pengurangan tersebut bisa memiliki panjang yang berbeda-beda, tergantung seberapa jauh titik permukaan dari sumber cahaya. Dengan `normalize`, panjang vektor tersebut dibuat menjadi satu, sehingga yang tersisa hanya **arahnya**, bukan jaraknya. Hasilnya, `L` menjadi vektor satuan yang konsisten untuk perhitungan lighting.

Secara visual, bayangkan ada satu titik pada permukaan objek dan satu titik cahaya di dekatnya. Jika kita menarik panah dari titik permukaan ke titik cahaya, panah itulah yang diwakili oleh `L`. Jika posisi cahaya bergeser, arah `L` ikut berubah. Jika titik permukaan yang diproses bergeser, arah `L` juga berubah. Inilah mengapa arah cahaya untuk point light bersifat **lokal** terhadap titik permukaan.

Nilai `L` penting karena nanti akan digunakan untuk menilai seberapa langsung permukaan menghadap ke sumber cahaya. Intuisinya, permukaan yang menghadap langsung ke cahaya cenderung menerima lebih banyak cahaya dibandingkan permukaan yang menghadap miring. Dengan kata lain, `L` menjadi dasar untuk menghubungkan posisi cahaya dengan orientasi permukaan.

Yang perlu kita pahami pada slide ini adalah bahwa `L` bukan intensitas cahaya, bukan warna cahaya, dan bukan hasil pencahayaan akhir. `L` hanya merepresentasikan **arah dari permukaan menuju point light**. Pemahaman ini penting sebelum kita masuk ke komponen lighting yang lebih spesifik, karena arah cahaya akan memengaruhi bagaimana komponen seperti diffuse dan specular dihitung.

### Inti yang Harus Ditekankan

- `L` adalah **vektor arah** dari `SurfacePosition` menuju `LightPosition`.
- `LightPosition - SurfacePosition` menghasilkan vektor yang menunjuk ke arah sumber cahaya.
- `normalize` membuat vektor tersebut menjadi **vektor satuan**, sehingga hanya arah yang dipertahankan.
- Untuk **point light**, arah cahaya bergantung pada posisi titik permukaan yang sedang diproses.
- `L` menjadi dasar untuk menilai hubungan antara arah cahaya dan orientasi permukaan.

### Transisi ke Slide Berikutnya

Setelah kita memahami bagaimana arah cahaya ditentukan, kita mulai dari komponen lighting yang paling sederhana, yaitu **ambient lighting**, yang tidak bergantung pada arah cahaya maupun normal permukaan.

---

## Slide 019 - Ambient Lighting

### Narasi

Setelah kita membahas arah cahaya untuk `point light`, ada komponen pencahayaan yang lebih sederhana: **ambient lighting**. Ambient adalah cahaya dasar yang memberi pencahayaan minimum pada permukaan, tanpa perlu menghitung arah cahaya atau orientasi permukaan.

```text
Ambient =
AmbientStrength
× BaseColor
```

Secara intuisi, `AmbientStrength` mengatur seberapa terang cahaya dasar tersebut, sedangkan `BaseColor` adalah warna material objek. Hasil perkalian ini memberi warna dasar yang tetap ada meskipun permukaan tidak menghadap ke sumber cahaya.

Karakter penting dari ambient adalah:

- tidak bergantung **normal**,
- tidak bergantung **arah cahaya**,
- menjaga sisi gelap tetap terlihat.

Artinya, jika sebuah objek berada dalam pencahayaan langsung, sisi yang tidak terkena cahaya tidak akan menjadi hitam pekat. Ambient memberi semacam “lantai” pencahayaan agar bentuk objek masih terbaca secara visual.

Dalam konteks rendering pipeline, ambient biasanya dihitung pada tahap fragment shading sebagai bagian dari model pencahayaan. Ia dapat menjadi komponen dasar yang kemudian digabungkan dengan komponen lain, tetapi pada pembahasan ini kita fokus pada perannya sebagai pencahayaan minimum.

Yang perlu dipahami sebelum lanjut: ambient bukan pencahayaan yang realistis secara fisika, melainkan pendekatan sederhana untuk membuat objek tetap terlihat dan membantu pembacaan bentuk. Ia penting karena menjadi dasar model material sebelum kita membahas komponen pencahayaan yang lebih kompleks.

### Inti yang Harus Ditekankan

- **Ambient** adalah cahaya dasar sederhana yang tidak bergantung pada **normal** maupun **arah cahaya**.
- Rumus dasarnya adalah `Ambient = AmbientStrength × BaseColor`.
- Ambient berfungsi menjaga sisi gelap objek tetap terlihat, sehingga bentuk objek tidak hilang dalam kegelapan.

### Transisi ke Slide Berikutnya

Karena ambient hanya pendekatan sederhana, selanjutnya kita akan melihat keterbatasannya: mengapa ambient tidak sama dengan pencahayaan global yang realistis, dan bagaimana ia hanya menjadi komponen dasar sebelum model material yang lebih kompleks.

---

## Slide 020 - Keterbatasan Ambient

### Narasi

Setelah kita melihat **ambient** sebagai komponen cahaya dasar, penting untuk menyadari bahwa model ini sengaja disederhanakan. Ambient pada model ini:

- **bukan simulasi global illumination**,
- **tidak memperhitungkan pantulan dunia nyata**,
- **hanya pendekatan sederhana**.

Artinya, ambient berfungsi memberi dasar pencahayaan yang stabil agar objek tidak terlihat sepenuhnya gelap. Namun, karena ambient tidak bergantung pada orientasi permukaan atau arah cahaya, ia tidak mampu membedakan permukaan yang menghadap cahaya dan permukaan yang membelakangi cahaya.

Dalam konteks rendering, ambient biasanya menjadi kontribusi awal pada tahap **lighting** atau **shading**. Ia membantu menjaga agar warna dasar objek tetap terlihat, tetapi tidak cukup untuk menghasilkan pencahayaan yang realistis. Karena itu, ambient sebaiknya dipahami sebagai komponen dasar, bukan sebagai model pencahayaan yang lengkap.

Tujuan pembelajaran pada bagian ini adalah agar kita memahami komponen dasar terlebih dahulu sebelum masuk ke model material yang lebih kompleks. Dengan memahami keterbatasan ambient, kita akan lebih mudah melihat mengapa komponen pencahayaan lain perlu ditambahkan.

### Inti yang Harus Ditekankan

- **Ambient** adalah pendekatan sederhana, bukan simulasi **global illumination**.
- Ambient **tidak memperhitungkan pantulan dunia nyata**.
- Mahasiswa perlu memahami keterbatasan ambient sebelum lanjut ke model material yang lebih kompleks.

### Transisi ke Slide Berikutnya

Karena ambient tidak bergantung pada orientasi permukaan, model berikutnya perlu menambah komponen yang peka terhadap arah cahaya. Kita akan masuk ke **diffuse lighting**, yang bergantung pada sudut antara `Surface Normal` dan `Light Direction`.

---

## Slide 021 - Diffuse Lighting

### Narasi

Setelah komponen **ambient**, kita masuk ke komponen yang membuat permukaan tidak terlihat datar: **diffuse lighting**. Ambient memberi terang dasar yang hampir seragam, tetapi belum menjelaskan mengapa sisi objek yang menghadap cahaya tampak lebih terang daripada sisi yang miring atau membelakangi cahaya.

Diffuse bekerja dengan memperhatikan orientasi permukaan terhadap sumber cahaya. Pada slide ini, dua vektor utama yang terlibat adalah:

```text
Surface Normal
dan
Light Direction
```

**Surface Normal** adalah vektor yang menunjukkan arah permukaan, sedangkan **Light Direction** menunjukkan arah datang cahaya. Yang penting pada konsep ini bukan panjang vektornya, melainkan sudut di antara keduanya.

Secara visual, bayangkan sebuah bidang datar. Jika bidang itu menghadap langsung ke arah cahaya, permukaan tersebut menerima cahaya lebih banyak dan tampak lebih terang. Jika bidang itu miring, cahaya jatuh lebih “menyilang”, sehingga terang diffuse-nya berkurang. Jika bidang itu membelakangi cahaya, komponen diffuse langsung menjadi sangat kecil atau nol.

Itulah mengapa diffuse sangat penting dalam grafika komputer. Tanpa diffuse, objek hanya memiliki warna dasar dan pencahayaan ambient yang datar. Dengan diffuse, kita mulai melihat bentuk, kemiringan permukaan, dan kesan volume. Komponen ini juga menjadi dasar shading pada pipeline rendering, karena warna akhir permukaan biasanya merupakan kombinasi dari ambient, diffuse, dan komponen cahaya lainnya.

Pada slide ini kita belum masuk ke perhitungan matematisnya. Yang perlu dipahami dulu adalah intuisinya: **semakin dekat arah normal permukaan dengan arah cahaya, semakin terang permukaan tersebut**. Secara matematis, hubungan sudut ini nanti akan dihitung menggunakan dot product.

### Inti yang Harus Ditekankan

- **Diffuse** melengkapi **ambient** dengan memperhitungkan orientasi permukaan terhadap cahaya.
- Komponen utamanya adalah **Surface Normal** dan **Light Direction**.
- Semakin normal permukaan menghadap arah cahaya, permukaan semakin terang.
- Konsep ini penting untuk memberi kesan bentuk dan volume sebelum masuk ke perhitungan matematis.

### Transisi ke Slide Berikutnya

Untuk mengubah intuisi sudut menjadi nilai terang yang bisa dihitung, slide berikutnya memperkenalkan **dot product**, yaitu operasi yang menghubungkan **Surface Normal** dan **Light Direction** menjadi intensitas diffuse.

---

## Slide 022 - Dot Product

### Narasi

Pada diffuse lighting, kecerahan permukaan tidak ditentukan hanya oleh keberadaan cahaya, tetapi oleh **orientasi permukaan** terhadap arah cahaya. Konsep yang menjadi dasar hubungan tersebut adalah **dot product** antara `N` dan `L`.

```text
dot(N, L)
```

Di sini, `N` adalah **Surface Normal**, yaitu arah yang menunjukkan sisi permukaan. `L` adalah **Light Direction**, yaitu arah menuju sumber cahaya atau arah cahaya yang mengenai permukaan. Dengan menghitung `dot(N, L)`, kita memperoleh satu nilai skalar yang menggambarkan seberapa sejajar kedua arah tersebut.

Interpretasi visualnya dapat dibaca sebagai berikut:

```text
N dan L searah   → ≈ 1
tegak lurus      → ≈ 0
berlawanan arah  → < 0
```

Secara intuitif, nilai mendekati `1` berarti permukaan hampir menghadap cahaya secara langsung. Nilai mendekati `0` berarti permukaan hampir tegak lurus terhadap arah cahaya, sehingga cahaya datang sangat miring. Nilai `< 0` berarti permukaan membelakangi arah cahaya, sehingga secara fisika tidak seharusnya menerima diffuse dari sisi tersebut.

Dalam konteks rendering, dot product berfungsi sebagai jembatan antara **geometri permukaan** dan **pencahayaan**. Nilai hasil `dot(N, L)` dapat dipakai oleh shader untuk mengatur seberapa terang diffuse yang diberikan pada suatu titik permukaan. Semakin besar nilai positifnya, semakin kuat kontribusi diffuse dari cahaya tersebut.

Yang perlu dipahami sebelum lanjut adalah bahwa dot product bukan sekadar perkalian angka biasa, tetapi ukuran **orientasi relatif** antara normal dan arah cahaya. Nilai negatif akan menjadi masalah jika langsung dipakai sebagai intensitas cahaya, karena intensitas diffuse tidak boleh negatif.

### Inti yang Harus Ditekankan

- `dot(N, L)` mengukur seberapa searah **Surface Normal** `N` dengan **Light Direction** `L`.
- Hasil mendekati `1` jika searah, mendekati `0` jika tegak lurus, dan `< 0` jika berlawanan arah.
- Nilai ini menjadi dasar intensitas diffuse sebelum dibatasi dan dikalikan dengan `LightColor` serta `BaseColor`.

### Transisi ke Slide Berikutnya

Pada slide berikutnya, nilai `dot(N, L)` akan dibatasi agar tidak negatif, kemudian dikalikan `LightColor` dan `BaseColor` untuk membentuk rumus diffuse yang lengkap.

---

## Slide 023 - Rumus Diffuse

### Narasi

Setelah kita memahami `dot(N, L)`, langkah berikutnya adalah mengubah hasil dot product menjadi kontribusi cahaya diffuse yang masuk akal secara visual. Rumus yang kita gunakan adalah:

```text
diff =
max(
  dot(N, L),
  0
)
```

Di sini, `N` adalah **normal permukaan**, yaitu arah yang tegak lurus terhadap permukaan objek. `L` adalah **arah menuju sumber cahaya**. Nilai `dot(N, L)` memberi tahu seberapa sejajar normal dengan arah cahaya. Jika normal menghadap ke arah cahaya, nilai dot product mendekati 1. Jika normal tegak lurus arah cahaya, nilai mendekati 0. Jika normal membelakangi cahaya, nilai menjadi negatif.

Masalahnya, dalam pencahayaan diffuse, permukaan yang membelakangi cahaya tidak boleh menghasilkan cahaya negatif. Cahaya negatif tidak memiliki makna fisik yang wajar untuk warna diffuse; ia justru akan membuat warna menjadi tidak stabil atau terbalik. Karena itu, kita membungkus `dot(N, L)` dengan `max(..., 0)`. Fungsi `max` memastikan bahwa hasil akhir `diff` tidak pernah di bawah nol. Dengan kata lain, jika `dot(N, L)` negatif, `diff` menjadi 0.

Setelah nilai `diff` aman, kita menghitung warna diffuse dengan rumus:

```text
Diffuse =
diff
× LightColor
× BaseColor
```

Di sini, `LightColor` adalah warna atau intensitas cahaya yang datang, sedangkan `BaseColor` adalah warna dasar material objek. Perkalian ini bekerja seperti modulasi: `diff` menentukan seberapa banyak cahaya yang diterima, `LightColor` menentukan warna cahaya, dan `BaseColor` menentukan warna material. Hasilnya adalah warna diffuse yang akan ditambahkan ke warna objek pada titik tersebut.

Dalam konteks rendering pipeline, rumus ini berada pada tahap **shading**, setelah posisi, normal, dan parameter cahaya sudah tersedia. Pada WebGL, perhitungan seperti ini umumnya dilakukan di shader, sehingga setiap titik yang dirender dapat menerima nilai diffuse yang sesuai. Yang penting bagi kita adalah memahami bahwa `diff` adalah faktor skala antara 0 dan 1 yang mengatur kekuatan diffuse, bukan nilai cahaya mentah.

Secara intuitif, rumus ini menjawab pertanyaan sederhana: berapa banyak cahaya yang benar-benar mengenai permukaan? Jika permukaan menghadap cahaya, `diff` besar dan warna diffuse kuat. Jika permukaan miring, `diff` mengecil. Jika permukaan membelakangi cahaya, `diff` menjadi nol dan tidak ada kontribusi diffuse dari sumber cahaya tersebut.

### Inti yang Harus Ditekankan

- `dot(N, L)` mengukur seberapa sejajar **normal permukaan** dengan **arah cahaya**.
- `max(dot(N, L), 0)` mencegah nilai diffuse menjadi negatif ketika permukaan membelakangi cahaya.
- `Diffuse = diff × LightColor × BaseColor` menggabungkan intensitas pencahayaan, warna cahaya, dan warna material.
- `diff` berperan sebagai faktor skala antara 0 dan 1 yang menentukan kekuatan cahaya diffuse.
- Dalam pipeline rendering, rumus ini berada pada tahap shading dan biasanya dihitung di shader.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana rumus ini bekerja secara visual. Pada slide berikutnya, kita akan mengamati hubungan antara arah `N`, arah `L`, dan perubahan kekuatan diffuse ketika normal semakin sejajar dengan cahaya.

---

## Slide 024 - Visual Diffuse

### Narasi

Kita bisa membayangkan permukaan objek sebagai sebuah **Face** yang memiliki **normal** `N`. Normal adalah arah yang tegak lurus terhadap permukaan. Pada diagram, `Light` datang dari arah tertentu menuju permukaan.

```text
Light
  ↘

    N
    ↑
  ┌──────┐
  │ Face │
  └──────┘
```

Inti dari visualisasi ini adalah hubungan antara arah `N` dan arah cahaya `L`. Jika `N` semakin sejajar dengan `L`, artinya permukaan lebih menghadap ke arah sumber cahaya. Dalam kondisi itu, nilai `dot(N, L)` meningkat, sehingga intensitas **diffuse** menjadi lebih besar.

Sebaliknya, jika `N` hampir tegak lurus terhadap `L`, permukaan terlihat lebih miring terhadap cahaya. Nilai `dot(N, L)` mendekati nol, sehingga diffuse menjadi lemah. Jika arah normal dan cahaya berlawanan, dot product bisa negatif, tetapi pada rumus sebelumnya kita sudah membatasi nilai itu dengan `max(..., 0)` agar tidak menghasilkan cahaya negatif.

Secara visual, inilah yang membuat objek 3D tampak memiliki pencahayaan yang realistis: sisi yang menghadap cahaya lebih terang, sisi yang miring lebih redup, dan sisi yang membelakangi cahaya tidak menerima diffuse. Dalam rendering pipeline, informasi ini biasanya dihitung setelah posisi permukaan dan normal tersedia, misalnya pada tahap fragment shader dalam WebGL, lalu dikalikan dengan `LightColor` dan `BaseColor` untuk menghasilkan warna akhir.

Yang perlu kita pegang sebelum lanjut adalah bahwa diffuse bukan sekadar “warna terang”. Diffuse adalah respons permukaan terhadap arah cahaya, dan arah tersebut ditentukan oleh **normal**. Tanpa normal yang benar, pencahayaan akan terlihat datar atau tidak konsisten.

### Inti yang Harus Ditekankan

- **Normal** `N` menentukan seberapa langsung permukaan menerima cahaya.
- Semakin sejajar `N` dengan arah cahaya `L`, semakin besar `dot(N, L)` dan semakin kuat **diffuse**.
- `max(dot(N, L), 0)` menjaga intensitas diffuse tetap non-negatif.
- Visual diffuse menjelaskan mengapa sisi objek yang menghadap cahaya tampak lebih terang daripada sisi yang miring.

### Transisi ke Slide Berikutnya

Setelah diffuse memberi pencahayaan dasar pada permukaan, kita akan melihat komponen lain yang membuat permukaan tampak lebih hidup: **specular lighting**, yang menghasilkan highlight pada area yang memantulkan cahaya ke arah kamera.

---

## Slide 025 - Specular Lighting

### Narasi

Setelah diffuse memberi kesan permukaan yang diterangi, **specular lighting** menambah kesan permukaan yang memantulkan cahaya secara lokal. Dalam grafika komputer, specular penting karena membuat objek tidak terlihat seperti permukaan mati, tetapi memiliki karakter material yang lebih realistis, misalnya permukaan yang tampak mengkilap.

Secara intuitif, specular muncul sebagai `highlight`, yaitu area terang kecil pada permukaan. Highlight ini tidak muncul hanya karena permukaan menghadap cahaya, tetapi juga karena cahaya seolah dipantulkan menuju pengamat. Inilah perbedaan utama specular dengan diffuse: diffuse terutama bergantung pada sudut antara **normal** dan **arah cahaya**, sedangkan specular juga bergantung pada **arah kamera**.

Ada empat hal yang memengaruhi specular pada slide ini:

- **normal**, yaitu orientasi permukaan terhadap sumber cahaya;
- **arah cahaya**, yaitu dari mana cahaya datang;
- **arah kamera**, yaitu arah pandang pengamat terhadap permukaan;
- `shininess`, yaitu parameter yang memengaruhi karakter kilap permukaan.

Dalam rendering pipeline, specular biasanya dihitung pada tahap **shading**, setelah fragment dari objek sudah dihasilkan oleh rasterisasi. Setiap fragment memiliki informasi posisi permukaan, normal, serta hubungan dengan kamera dan cahaya. GPU kemudian dapat menghitung kontribusi specular untuk setiap fragment, sehingga highlight mengikuti bentuk objek secara halus. Dalam konteks WebGL, nilai seperti `shininess` biasanya menjadi bagian dari parameter material yang digunakan shader untuk menentukan intensitas kilap.

Yang perlu kita pahami sebelum lanjut adalah bahwa specular bukan sekadar “menambahkan putih” pada objek. Specular adalah respons permukaan terhadap cahaya dan pengamat. Jika diffuse diubah, objek cenderung terlihat lebih terang atau lebih gelap secara merata; jika specular diubah, karakter permukaan berubah, misalnya dari tampak kusam menjadi tampak mengkilap.

### Inti yang Harus Ditekankan

- Specular menghasilkan `highlight` yang memberi kesan permukaan mengkilap.
- Kekuatan specular dipengaruhi oleh **normal**, **arah cahaya**, **arah kamera**, dan `shininess`.
- Specular berbeda dari diffuse karena bergantung pada arah pengamat, bukan hanya sudut antara normal dan cahaya.

### Transisi ke Slide Berikutnya

Untuk menghitung ketergantungan specular terhadap arah pengamat, langkah berikutnya adalah menentukan arah dari permukaan menuju kamera, yaitu `V`. Arah inilah yang akan digunakan untuk menilai seberapa dekat pantulan cahaya specular dengan garis pandang pengamat.

---

## Slide 026 - View Direction

### Narasi

Setelah kita memahami bahwa **specular lighting** menghasilkan highlight pada permukaan, ada satu arah penting yang belum kita bahas secara eksplisit, yaitu arah pengamat. Arah ini disebut **View Direction**, atau arah pandang dari permukaan menuju kamera.

Secara matematis, `V` didefinisikan sebagai:

```text
V =
normalize(
  CameraPosition -
  SurfacePosition
)
```

Yang perlu kita perhatikan adalah operasi `CameraPosition - SurfacePosition`. Jika kita punya titik pada permukaan objek, misalnya `SurfacePosition`, lalu kita kurangi dengan posisi kamera, hasilnya adalah vektor yang menunjuk dari titik permukaan tersebut ke arah kamera. Dengan kata lain, `V` bukan arah dari kamera ke permukaan, melainkan arah dari permukaan menuju kamera.

Fungsi `normalize(...)` sangat penting di sini. Setelah vektor arah terbentuk, panjangnya bisa berbeda-beda tergantung jarak kamera ke permukaan. Namun, untuk perhitungan lighting, yang kita butuhkan adalah **arah**, bukan jarak. `normalize` membuat panjang vektor menjadi satu, sehingga `V` menjadi vektor satuan yang hanya merepresentasikan arah.

`V` diperlukan karena specular highlight muncul ketika cahaya yang dipantulkan oleh permukaan menuju ke arah pengamat. Semakin dekat arah pantulan cahaya dengan arah pandang, semakin kuat highlight yang terlihat. Tanpa `V`, kita tidak bisa menilai apakah permukaan tersebut sedang memantulkan cahaya ke arah kamera atau tidak.

Secara visual, bayangkan kita sedang melihat sebuah objek 3D. Di setiap titik permukaan yang terkena cahaya, kita bisa membayangkan panah kecil yang menunjuk ke kamera. Panah itulah yang direpresentasikan oleh `V`. Jika kamera bergerak, `V` pada titik permukaan yang sama akan berubah, dan ini akan memengaruhi tampilan highlight pada objek.

Dalam konteks rendering, `V` biasanya dihitung untuk setiap fragment atau titik permukaan yang sedang diproses. Posisi kamera sering diberikan sebagai parameter global, sedangkan posisi permukaan diperoleh dari data geometri objek. Yang penting untuk diingat adalah `CameraPosition` dan `SurfacePosition` harus berada dalam ruang koordinat yang sama agar hasil pengurangan vektor memiliki arti yang benar.

### Inti yang Harus Ditekankan

- **View Direction** adalah arah dari `SurfacePosition` menuju `CameraPosition`.
- `V` dihitung dengan `normalize(CameraPosition - SurfacePosition)` agar menjadi vektor satuan.
- `normalize(...)` penting karena lighting membutuhkan **arah**, bukan jarak.
- `V` digunakan untuk menilai seberapa dekat arah pantulan cahaya menuju pengamat.
- `CameraPosition` dan `SurfacePosition` harus berada dalam ruang koordinat yang sama.

### Transisi ke Slide Berikutnya

Setelah kita memiliki arah pandang `V`, langkah berikutnya adalah menentukan arah pantulan cahaya dari permukaan. Arah pantulan inilah yang kemudian akan dibandingkan dengan `V` untuk menghasilkan specular highlight.

---

## Slide 027 - Reflection Direction

### Narasi

Setelah kita memiliki **View Direction**, langkah berikutnya adalah menentukan **Reflection Direction**. Arah ini menggambarkan ke mana cahaya yang datang dipantulkan oleh permukaan. Dalam lighting, informasi ini penting karena kita tidak hanya perlu tahu dari mana cahaya datang, tetapi juga ke mana pantulannya pergi.

Salah satu pendekatan yang digunakan pada slide ini adalah fungsi `reflect()`. Fungsi ini umum dipakai dalam shader WebGL untuk menghitung arah pantulan cahaya berdasarkan arah cahaya masuk dan orientasi permukaan. Intuisinya mirip dengan pantulan pada permukaan yang relatif halus: cahaya datang, mengenai permukaan, lalu dipantulkan ke arah tertentu.

```glsl
reflect()
```

Secara visual, alur pada slide dapat dibaca dari atas ke bawah:

- **Incoming Light** adalah arah cahaya yang menuju permukaan.
- **Surface** adalah titik atau fragmen yang menerima cahaya.
- **Reflection Direction** adalah arah cahaya setelah dipantulkan dari permukaan tersebut.

Arah pantulan ini biasanya kita nyatakan sebagai vektor, misalnya `R`. Perlu diperhatikan bahwa `R` bukan arah kamera, melainkan arah cahaya yang dipantulkan. Karena itu, `R` kemudian dibandingkan dengan **View Direction**, yaitu arah dari permukaan menuju kamera.

Perbandingan antara `R` dan `V` penting karena highlight pada permukaan biasanya muncul ketika arah pantulan cahaya cukup dekat dengan arah pandang pengamat. Jika `R` hampir sejajar dengan `V`, cahaya pantulan lebih mungkin terlihat oleh kamera. Sebaliknya, jika `R` jauh dari `V`, pantulan tersebut tidak akan terlihat kuat dari posisi pengamat.

Sebelum lanjut, yang perlu dipahami mahasiswa adalah bahwa **Reflection Direction** menjadi jembatan antara arah cahaya dan arah kamera. Ia membantu menjawab pertanyaan: “ke mana cahaya dipantulkan dari titik permukaan ini?” Jawaban inilah yang kemudian akan dipakai untuk menentukan seberapa kuat highlight atau specular yang muncul.

### Inti yang Harus Ditekankan

- **Reflection Direction** adalah arah cahaya setelah dipantulkan oleh permukaan.
- Fungsi `reflect()` digunakan untuk menghitung arah pantulan dalam shader.
- Arah pantulan, misalnya `R`, harus dibandingkan dengan **View Direction**, `V`.
- Kedekatan antara `R` dan `V` menentukan apakah cahaya pantulan terlihat oleh pengamat.

### Transisi ke Slide Berikutnya

Setelah arah pantulan dan arah pandang sudah tersedia, langkah berikutnya adalah mengubah kemiripan arah tersebut menjadi nilai kekuatan highlight. Pada slide berikutnya, kita akan melihat bagaimana `dot(R, V)` digunakan bersama `shininess` untuk menghasilkan **Specular Strength**.

---

## Slide 028 - Specular Strength

### Narasi

Pada tahap ini, kita sudah memiliki arah pantulan cahaya, yaitu `R`, dan arah pandang kamera atau mata pengamat, yaitu `V`. Inti dari **specular strength** adalah mengukur seberapa dekat kedua arah tersebut. Semakin dekat `R` dengan `V`, semakin besar kemungkinan permukaan terlihat seperti kilau atau highlight.

Secara matematis, kita dapat menuliskannya sebagai:

```glsl
spec = pow(max(dot(R, V), 0.0), shininess);
```

Di sini, `dot(R, V)` menghitung hasil kali titik antara dua vektor. Jika `R` dan `V` searah, nilai `dot` mendekati `1`. Jika keduanya tegak lurus, nilai `dot` mendekati `0`. Jika arah pantulan berada di belakang permukaan relatif terhadap pengamat, `dot` bisa negatif, sehingga `max(..., 0.0)` memotong nilai negatif menjadi nol. Artinya, tidak ada highlight pada sisi yang tidak menghadap ke arah pengamat.

Setelah itu, nilai hasil `dot` yang sudah dibatasi antara `0` dan `1` dipangkatkan dengan `shininess`. Pangkat ini menentukan seberapa cepat intensitas highlight menurun ketika sudut antara `R` dan `V` membesar. Dengan kata lain, `spec` bukan sekadar ada atau tidak ada highlight, tetapi besaran intensitas kilau yang akan ditambahkan ke warna fragmen.

Dalam konteks rendering pipeline, perhitungan ini biasanya dilakukan di **fragment shader** untuk setiap fragmen yang melewati pipeline. Setelah posisi, normal, arah cahaya, dan arah pantulan tersedia, nilai `spec` dapat dikalikan dengan warna specular material, misalnya `material.specular`, lalu ditambahkan ke komponen diffuse atau ambient. Hasil akhirnya adalah warna fragmen yang lebih realistis karena permukaan tampak memiliki daerah terang yang mengikuti geometri dan posisi kamera.

Yang perlu dipahami sebelum lanjut adalah bahwa `spec` bergantung pada dua hal utama: sudut antara `R` dan `V`, serta parameter `shininess`. Pada slide ini kita fokus pada bentuk dasar specular strength, yaitu bagaimana highlight muncul dan mengapa `dot(R, V)` menjadi inti perhitungannya.

### Inti yang Harus Ditekankan

- `dot(R, V)` mengukur kedekatan antara arah pantulan dan arah pandang; semakin dekat, semakin kuat highlight.
- `max(dot(R, V), 0.0)` mencegah highlight negatif pada fragmen yang tidak menghadap ke pengamat.
- `pow(..., shininess)` mengubah nilai sudut menjadi intensitas kilau yang dapat dikontrol.
- Perhitungan specular strength biasanya dilakukan per fragmen di fragment shader sebagai bagian dari lighting model.

### Transisi ke Slide Berikutnya

Setelah memahami bentuk dasar `spec`, langkah berikutnya adalah melihat bagaimana nilai `shininess` memengaruhi bentuk highlight, yaitu apakah highlight menjadi lebar atau sempit dan tajam.

---

## Slide 029 - Shininess

### Narasi

Setelah kita melihat bahwa intensitas specular bergantung pada `max(dot(R,V), 0)`, sekarang kita fokus pada peran `shininess` di dalam rumus:

```text
spec =
pow(
  max(dot(R,V), 0),
  shininess
)
```

Di sini, `shininess` bekerja sebagai **pangkat** yang mengatur seberapa cepat nilai specular meluruh ketika arah refleksi menjauh dari arah pandang. Nilai `dot(R,V)` biasanya berada di antara 0 dan 1. Karena itu, memangkatkannya dengan nilai yang berbeda akan menghasilkan bentuk highlight yang sangat berbeda.

```text
shininess kecil  -> highlight lebar
shininess besar  -> highlight sempit dan tajam
```

Jika `shininess` kecil, banyak titik di sekitar titik paling terang masih menghasilkan nilai specular yang cukup besar. Akibatnya, highlight tampak **lebar**, lembut, dan menyebar. Jika `shininess` besar, hanya titik yang sangat dekat dengan arah refleksi yang tetap terang, sementara titik lain cepat turun mendekati nol. Hasilnya, highlight menjadi **sempit**, tajam, dan terlihat seperti kilau pada permukaan yang sangat halus.

Secara visual, parameter ini penting karena specular highlight membantu mata kita membaca bentuk, orientasi, dan karakter material objek 3D. Dengan mengatur `shininess`, kita dapat membedakan kesan material yang mengkilap, tumpul, atau lebih lembut tanpa harus mengubah geometri objek.

Perlu ditegaskan bahwa `shininess` **bukan roughness fisik**. Ia adalah parameter pada **model klasik** untuk menghasilkan tampilan specular tertentu. Artinya, nilai `shininess` dipilih lebih untuk efek visual yang diinginkan, bukan sebagai pengukuran kekasaran permukaan secara fisika.

Untuk membacanya, kita bisa mengingat dua hal: basis `max(dot(R,V), 0)` menentukan seberapa sejajar arah refleksi dengan arah pandang, sedangkan `shininess` menentukan seberapa tajam batas highlight. Semakin besar `shininess`, semakin cepat peluruhan nilai specular, dan semakin kecil area yang tampak berkilau.

### Inti yang Harus Ditekankan

- `shininess` mengatur **ukuran** dan **ketajaman** specular highlight.
- Nilai kecil menghasilkan highlight yang **lebar**; nilai besar menghasilkan highlight yang **sempit dan tajam**.
- `shininess` adalah parameter **model klasik**, bukan ukuran **roughness fisik**.

### Transisi ke Slide Berikutnya

Setelah specular highlight dipahami, langkah berikutnya adalah menggabungkannya dengan ambient dan diffuse menjadi final lighting, lalu dikombinasikan dengan warna permukaan.

---

## Slide 030 - Lighting Gabungan

### Narasi

Pada tahap ini, kita sudah melihat komponen pencahayaan secara terpisah: **ambient**, **diffuse**, dan **specular**. Slide ini menggabungkan ketiganya menjadi satu hasil akhir yang lebih realistis.

Rumus yang ditampilkan dapat dibaca sebagai:

```text
Final Lighting
=
Ambient
+
Diffuse
+
Specular
```

Artinya, warna pencahayaan akhir pada suatu permukaan tidak hanya ditentukan oleh satu jenis cahaya, melainkan oleh beberapa kontribusi yang saling melengkapi.

**Ambient** memberi dasar terang agar bagian yang tidak terkena cahaya langsung tidak menjadi hitam pekat. **Diffuse** menentukan seberapa terang permukaan ketika menghadap sumber cahaya. **Specular** memberi kilau atau highlight pada permukaan yang memantulkan cahaya ke arah kamera.

Setelah ketiga komponen tersebut dihitung, hasilnya masih perlu dikombinasikan dengan **warna permukaan**. Warna permukaan bisa berasal dari material, tekstur, atau warna dasar objek. Dengan kata lain, lighting menentukan seberapa terang dan bagaimana cahaya jatuh, sedangkan warna permukaan menentukan warna apa yang akan terlihat setelah cahaya tersebut diterapkan.

Dalam konteks rendering pipeline, langkah ini biasanya terjadi pada tahap shading atau fragment processing. Di sinilah GPU menghitung warna akhir fragmen sebelum ditampilkan ke layar. Karena itu, memahami penjumlahan **ambient**, **diffuse**, dan **specular** penting sebelum masuk ke model refleksi yang lebih lengkap.

### Inti yang Harus Ditekankan

- **Final lighting** adalah gabungan dari **ambient**, **diffuse**, dan **specular**.
- **Ambient** menjaga dasar terang, **diffuse** mengikuti orientasi permukaan terhadap cahaya, dan **specular** membentuk highlight.
- Hasil lighting masih harus dikombinasikan dengan **warna permukaan** agar menghasilkan warna akhir yang benar.
- Konsep ini menjadi dasar sebelum memahami model refleksi seperti **Phong Reflection Model**.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana **ambient**, **diffuse**, dan **specular** dirumuskan secara lebih konseptual dalam **Phong Reflection Model Sederhana**, termasuk peran normal, cahaya, kamera, dan warna permukaan.

---

## Slide 031 - Phong Reflection Model Sederhana

### Narasi

Kita akan melihat **Phong Reflection Model Sederhana** sebagai model konseptual untuk memahami warna lit pada objek. Model ini membantu kita melihat bahwa warna permukaan bukan hanya warna material, tetapi hasil interaksi antara permukaan, cahaya, dan kamera.

Secara sederhana, model ini dapat ditulis sebagai:

```text
Final Lighting
=
Ambient
+
Diffuse
+
Specular
```

Tiga komponen ini memiliki peran berbeda:

- `Ambient` mewakili cahaya lingkungan yang menyinari permukaan secara merata.
- `Diffuse` menggambarkan cahaya yang dipantulkan ke banyak arah, sehingga bagian permukaan yang menghadap sumber cahaya tampak lebih terang.
- `Specular` menghasilkan kilau atau highlight, terutama ketika arah pantulan cahaya mendekati arah kamera.

Yang perlu kita pahami adalah hubungan antara **normal**, **light**, **camera**, dan `surface color`. Normal permukaan menentukan seberapa langsung permukaan menerima cahaya. Arah atau posisi light menentukan seberapa kuat kontribusi diffuse dan specular. Posisi camera menentukan apakah highlight specular terlihat atau tidak. `Surface color` menjadi dasar warna material yang dikombinasikan dengan hasil pencahayaan.

Dalam konteks WebGL, model ini penting karena menjadi dasar untuk membuat objek terlihat lebih tiga dimensi. Dengan menghitung lighting berdasarkan normal, arah cahaya, dan arah pandang, kita dapat menghasilkan tampilan yang lebih natural dibandingkan hanya menggunakan warna statis.

Perlu ditegaskan bahwa model ini **bukan PBR**. Artinya, model ini tidak dimaksudkan untuk mensimulasikan sifat material secara fisika secara lengkap. Model ini lebih bersifat konseptual dan praktis untuk memahami bagaimana ambient, diffuse, dan specular membentuk tampilan visual.

Sebelum lanjut, mahasiswa perlu memahami bahwa lighting bukan sekadar menambah warna, tetapi proses menghitung kontribusi cahaya pada permukaan berdasarkan orientasi permukaan, arah cahaya, dan arah pandang.

### Inti yang Harus Ditekankan

- **Phong Reflection Model Sederhana** adalah model konseptual: `Ambient + Diffuse + Specular`.
- Komponen lighting dipengaruhi oleh **normal**, **light**, **camera**, dan `surface color`.
- Model ini membantu memahami tampilan lit pada WebGL, tetapi **bukan PBR** dan tidak dimaksudkan sebagai simulasi fisika material yang lengkap.

### Transisi ke Slide Berikutnya

Setelah memahami model pencahayaannya, langkah berikutnya adalah menentukan di mana perhitungan lighting dilakukan: apakah per vertex atau per fragment.

---

## Slide 032 - Per-Vertex vs Per-Fragment Lighting

### Narasi

Setelah kita memahami model refleksi sederhana, pertanyaan berikutnya adalah **di mana perhitungan lighting dilakukan** dalam pipeline rendering. Dalam WebGL, ada dua titik utama yang sering dibandingkan: **per-vertex lighting** dan **per-fragment lighting**.

Pada **per-vertex lighting**, perhitungan pencahayaan dilakukan di `vertex shader`. Artinya, nilai seperti `ambient`, `diffuse`, dan `specular` dihitung untuk setiap vertex, lalu menghasilkan warna per vertex. Setelah itu, GPU melakukan `interpolation` warna selama proses `rasterization`. Kelebihannya adalah jumlah perhitungan lebih sedikit, karena jumlah vertex biasanya jauh lebih kecil dibandingkan jumlah fragment atau pixel pada layar.

Namun, hasil visualnya dapat lebih kasar. Jika sebuah segitiga cukup besar, atau perubahan cahaya di permukaan cukup kuat, warna di bagian tengah segitiga hanya berupa perkiraan dari warna vertex di sekitarnya. Akibatnya, detail pencahayaan bisa terlihat kurang halus, terutama pada area yang seharusnya memiliki transisi cahaya atau highlight specular yang lebih rinci.

Pada **per-fragment lighting**, perhitungan pencahayaan dilakukan di `fragment shader`. Di sini, `vertex shader` biasanya mengirim data pendukung seperti `transformed normal`, `surface position`, dan `UV`. Data tersebut kemudian diinterpolasi oleh GPU, lalu setiap fragment menghitung lighting secara lebih lokal. Hasilnya lebih halus karena pencahayaan dievaluasi untuk setiap fragment, bukan hanya untuk beberapa titik vertex.

Perbandingannya dapat dilihat secara sederhana sebagai berikut:

```text
Per-vertex:   Vertex Lighting -> Interpolate Color -> Fragment
Per-fragment: Vertex Data     -> Interpolate Data  -> Fragment Lighting
```

Per-fragment lighting memang membutuhkan lebih banyak komputasi, karena fragment bisa jauh lebih banyak daripada vertex. Namun, dalam rendering modern, pendekatan ini sering dipilih karena memberikan hasil visual yang lebih baik dan lebih sesuai untuk shading, normal, serta texture mapping. Oleh karena itu, pada praktikum kita dapat berfokus pada **per-fragment lighting** sebagai cara yang lebih representatif untuk memahami bagaimana lighting bekerja di GPU.

### Inti yang Harus Ditekankan

- **Per-vertex lighting** menghitung warna di `vertex shader`, lalu warna diinterpolasi; lebih murah tetapi hasilnya bisa lebih kasar.
- **Per-fragment lighting** menghitung pencahayaan di `fragment shader`; hasilnya lebih halus tetapi membutuhkan lebih banyak komputasi.
- Dalam praktikum WebGL, fokus pada **per-fragment lighting** karena memungkinkan data seperti `transformed normal`, `surface position`, dan `UV` diinterpolasi lalu digunakan untuk perhitungan lighting yang lebih akurat.

### Transisi ke Slide Berikutnya

Setelah kita memahami di mana lighting dapat dihitung, langkah berikutnya adalah melihat data apa saja yang perlu dikirim dari `vertex shader` ke `fragment shader` agar perhitungan lighting dan texture dapat dilakukan dengan benar.

---

## Slide 033 - Data Lighting yang Dikirim ke Fragment Shader

### Narasi

Setelah kita membedakan **per-vertex lighting** dan **per-fragment lighting**, langkah berikutnya adalah memahami data apa yang harus dibawa dari tahap vertex menuju tahap fragment. Pada alur ini, **Vertex Shader** tidak langsung menghitung warna akhir objek. Tugas utamanya adalah menyiapkan atribut geometri yang relevan untuk pencahayaan dan pemetaan tekstur.

```text
Vertex Shader
├── transformed normal
├── surface position
└── UV
        ↓
Interpolation
        ↓
Fragment Shader
├── Lighting
└── Texture
```

Secara visual, alur ini dibaca dari atas ke bawah. Di bagian atas, **Vertex Shader** menghasilkan tiga jenis data penting:

1. `transformed normal` — arah permukaan yang sudah mengikuti transformasi objek, sehingga dapat digunakan untuk menghitung sudut antara cahaya dan permukaan.
2. `surface position` — posisi titik permukaan dalam ruang yang relevan untuk pencahayaan, misalnya posisi yang akan dibandingkan dengan posisi kamera atau sumber cahaya.
3. `UV` — koordinat tekstur yang akan dipakai nanti untuk memilih piksel dari image tekstur.

Data tersebut kemudian melewati tahap **Interpolation**. Artinya, nilai yang tersedia di setiap vertex akan diinterpolasi ke seluruh titik di dalam segitiga yang sedang di-render. Inilah alasan mengapa **per-fragment lighting** dapat menghasilkan pencahayaan yang lebih halus: fragment shader menerima nilai normal dan posisi yang sudah disesuaikan untuk setiap fragmen, bukan hanya nilai yang sama untuk seluruh vertex.

Di bagian bawah, **Fragment Shader** menggunakan data hasil interpolasi untuk melakukan dua hal utama:

- **Lighting**: menghitung kontribusi cahaya pada setiap fragmen berdasarkan normal, posisi permukaan, dan parameter pencahayaan.
- **Texture**: menggunakan koordinat `UV` untuk mengambil warna tekstur yang sesuai pada permukaan objek.

Poin penting yang perlu dipahami mahasiswa adalah bahwa shader di sini berfungsi sebagai **alat implementasi** dari konsep yang sudah dipelajari sebelumnya. Konsep seperti transformasi, normal, posisi, dan tekstur tidak berdiri sendiri; mereka harus dikirimkan ke tahap yang tepat dalam pipeline agar dapat dihitung secara benar. Jika data lighting tidak dikirim atau tidak diinterpolasi dengan baik, hasil render akan terlihat datar, salah arah, atau tidak sesuai dengan bentuk geometri.

Sebelum lanjut, pastikan kita memahami bahwa **Vertex Shader** menyiapkan data, **Interpolation** menyebarkan nilai ke seluruh permukaan segitiga, dan **Fragment Shader** melakukan perhitungan akhir untuk setiap fragmen. Pemahaman ini menjadi dasar untuk memahami bagaimana tekstur dan pencahayaan dapat dikombinasikan pada tahap berikutnya.

### Inti yang Harus Ditekankan

- **Vertex Shader** mengirim `transformed normal`, `surface position`, dan `UV` ke tahap berikutnya.
- **Interpolation** membuat nilai vertex tersedia untuk setiap fragmen di dalam segitiga.
- **Fragment Shader** menggunakan data tersebut untuk menghitung **lighting** dan **texture**.
- Per-fragment lighting lebih halus karena perhitungan dilakukan per fragmen, bukan hanya per vertex.
- Shader adalah implementasi dari konsep transformasi, normal, posisi, dan tekstur dalam pipeline rendering.

### Transisi ke Slide Berikutnya

Setelah data lighting dan tekstur sampai ke fragment shader, kita perlu memahami salah satu komponen penting yang digunakan di sana, yaitu tekstur. Pada slide berikutnya, kita akan membahas apa itu texture dan bagaimana image dapat dipetakan ke permukaan objek 3D.

---

## Slide 034 - Apa Itu Texture?

### Narasi

Dalam grafika komputer, **texture** adalah **image** yang dipetakan ke permukaan objek tiga dimensi. Secara sederhana, kita tidak perlu membuat setiap detail permukaan secara eksplisit pada geometri; cukup menggunakan gambar sebagai sumber informasi visual.

```text
Image
 ↓
Texture
 ↓
3D Surface
```

Diagram ini dibaca dari atas ke bawah. **Image** adalah data dua dimensi yang berisi warna, pola, atau detail permukaan. **Texture** adalah bentuk sumber daya yang siap digunakan oleh sistem rendering, biasanya diunggah ke GPU dan dapat diambil oleh shader. **3D Surface** adalah permukaan objek yang akan menampilkan detail tersebut setelah proses pemetaan.

Pentingnya texture dalam grafika komputer terletak pada kemampuannya meningkatkan realisme visual tanpa menambah kompleksitas geometri. Misalnya, permukaan batu, kayu, atau kain dapat terlihat detail meskipun mesh-nya relatif sederhana. Hal ini membuat rendering lebih efisien karena GPU tidak perlu memproses banyak vertex atau polygon hanya untuk menghasilkan detail permukaan.

Dalam konteks pipeline rendering, texture biasanya digunakan pada tahap **fragment shader**. Setiap fragmen pada permukaan objek perlu mengetahui posisi mana pada image yang harus diambil. Untuk itu, vertex shader biasanya mengirim informasi posisi permukaan dan koordinat tekstur, kemudian nilai tersebut diinterpolasi hingga sampai ke fragment shader.

Pada slide ini, kita cukup memahami bahwa texture adalah lapisan detail visual yang ditempelkan ke permukaan objek. Mekanisme koordinat yang menghubungkan permukaan 3D dengan posisi pada image akan dibahas lebih lanjut pada bagian berikutnya.

### Inti yang Harus Ditekankan

- **Texture** adalah **image** yang dipetakan ke permukaan objek 3D.
- Texture meningkatkan detail visual tanpa menambah banyak **geometry**.
- Dalam rendering, texture umumnya digunakan oleh **fragment shader** untuk menentukan warna atau detail setiap fragmen.
- Pemetaan texture memerlukan hubungan antara posisi pada permukaan objek dan posisi pada image.

### Transisi ke Slide Berikutnya

Setelah memahami apa itu texture, langkah berikutnya adalah memahami bagaimana posisi pada image tersebut ditentukan. Untuk itu, kita akan membahas **Texture Coordinate** atau **UV Coordinate** pada slide berikutnya.

---

## Slide 035 - Texture Coordinate

### Narasi

Setelah kita memahami bahwa **texture** adalah image yang dipetakan ke permukaan objek, langkah berikutnya adalah menentukan titik mana pada image yang akan dipakai untuk setiap titik pada permukaan. Di sinilah **Texture Coordinate** berperan. Istilah ini sering disebut **UV Coordinate**, karena koordinatnya memakai dua nilai, yaitu `U` dan `V`.

```text
U
V
```

Dalam konteks texture mapping, `U` biasanya menunjuk arah horizontal pada image, sedangkan `V` menunjuk arah vertikal. Berbeda dengan koordinat piksel yang bisa bernilai puluhan atau ratusan, texture coordinate umumnya dinormalisasi ke rentang:

```text
0 → 1
```

Artinya, nilai `0` berada di satu sisi image dan nilai `1` berada di sisi lawannya. Dengan rentang ini, sistem dapat memetakan posisi pada permukaan geometri ke posisi pada texture secara konsisten, tanpa bergantung pada resolusi image tertentu. Misalnya, titik di tengah image dapat direpresentasikan sekitar `0.5` pada sumbu yang relevan, sehingga tetap valid meskipun image diperbesar atau diperkecil.

Hubungannya dengan rendering pipeline cukup penting. Saat vertex diproses, selain posisi 3D, vertex juga dapat membawa atribut UV. Atribut ini kemudian diinterpolasi selama rasterisasi untuk setiap pixel di dalam primitif. Hasil interpolasi tersebut dipakai shader, misalnya fragment shader, untuk mengambil warna dari texture. Jadi, texture coordinate adalah jembatan antara geometri dan image.

Intinya, kita tidak perlu menambah banyak geometry hanya untuk menampilkan detail seperti kayu, kain, atau permukaan kasar. Dengan UV coordinate, detail visual dapat dibawa oleh texture, sementara geometri tetap relatif sederhana. Namun, kita perlu memahami bahwa UV bukan koordinat dunia atau koordinat layar; ia adalah koordinat khusus untuk memilih lokasi pada texture.

### Inti yang Harus Ditekankan

- **Texture Coordinate** disebut juga **UV Coordinate** karena menggunakan dua nilai, `U` dan `V`.
- Rentang umumnya adalah `0 → 1`, sehingga koordinat bersifat dinormalisasi.
- UV coordinate digunakan untuk memetakan titik pada geometri ke titik pada texture.
- Nilai UV diinterpolasi selama rasterisasi dan dipakai shader untuk mengambil warna texture.
- Konsep ini penting karena memungkinkan detail visual ditambahkan tanpa meningkatkan kompleksitas geometry secara signifikan.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana `U` dan `V` membentuk ruang UV, serta bagaimana setiap vertex dapat memiliki pasangan UV tertentu.

---

## Slide 036 - UV Space

### Narasi

`UV Space` adalah ruang koordinat dua dimensi yang digunakan untuk menentukan posisi suatu titik pada tekstur. Ruang ini tidak sama dengan ruang layar, ruang model, atau ruang dunia; ia adalah sistem koordinat khusus yang menghubungkan permukaan objek dengan citra tekstur.

Pada diagram, sumbu `U` berjalan horizontal dari `0` ke `1`, sedangkan sumbu `V` berjalan vertikal dari `0` ke `1`. Persegi panjang di dalamnya mewakili area tekstur. Dengan konvensi ini, titik `(0,0)` berada di kiri bawah, titik `(1,0)` di kanan bawah, dan titik `(1,1)` di kanan atas.

Pernyataan penting pada slide adalah: setiap `vertex` dapat memiliki `UV` tertentu. Artinya, setiap titik geometri 3D dapat diberi pasangan koordinat 2D yang menunjuk ke bagian tertentu pada tekstur. Misalnya, satu `vertex` dapat menunjuk ke sudut kiri bawah tekstur, sementara `vertex` lain menunjuk ke bagian tengah atau sudut lain.

Konsep ini penting karena tekstur tidak secara otomatis tahu bagian mana yang harus ditempelkan ke permukaan objek. `UV` menjadi jembatan antara geometri dan tekstur: geometri menentukan bentuk objek, sedangkan `UV` menentukan bagaimana citra tekstur dipetakan ke bentuk tersebut.

Dalam alur rendering, nilai `UV` biasanya dibawa sebagai atribut `vertex` menuju tahap shader. Saat rasterisasi, nilai `UV` di antara `vertex` akan digunakan untuk menentukan warna tekstur pada setiap `fragment`. Jadi, `UV` bukan hanya label statis pada `vertex`, tetapi informasi yang ikut terbaca selama proses pewarnaan permukaan.

Sebelum lanjut, hal yang perlu dipahami adalah bahwa `UV` bersifat relatif terhadap tekstur, bukan terhadap posisi spasial objek. Dua `vertex` yang berdekatan secara geometri dapat memiliki nilai `UV` yang jauh berbeda, tergantung bagaimana tekstur ingin dipetakan.

### Inti yang Harus Ditekankan

- `UV Space` adalah ruang koordinat 2D untuk tekstur, umumnya menggunakan rentang `0` sampai `1`.
- Sumbu `U` horizontal dan sumbu `V` vertikal; `(0,0)` berada di kiri bawah, sedangkan `(1,1)` berada di kanan atas.
- Setiap `vertex` dapat memiliki pasangan `UV` yang menentukan bagian tekstur yang dipetakan ke titik tersebut.
- `UV` menghubungkan geometri 3D dengan tekstur 2D dan menjadi dasar untuk sampling warna pada tahap rasterisasi.

### Transisi ke Slide Berikutnya

Setelah memahami ruang `UV` secara umum, langkah berikutnya adalah melihat bagaimana nilai `UV` pada tiga `vertex` sebuah segitiga menentukan nilai `UV` di dalam segitiga tersebut.

---

## Slide 037 - UV pada Triangle

### Narasi

Setelah kita melihat **UV space** sebagai bidang koordinat 2D dari `(0,0)` sampai `(1,1)`, langkah berikutnya adalah melihat bagaimana koordinat UV itu menempel pada geometri 3D. Pada slide ini, kita menggunakan satu **triangle** sebagai contoh. Triangle ini memiliki tiga vertex, yaitu `A`, `B`, dan `C`, dan masing-masing vertex membawa pasangan koordinat UV tertentu.

```text
Vertex A → UV (0,0)
Vertex B → UV (1,0)
Vertex C → UV (0,1)
```

Artinya, vertex `A` dipetakan ke sudut kiri bawah texture space, vertex `B` ke sudut kanan bawah, dan vertex `C` ke sudut kiri atas. Jika kita bayangkan UV space sebagai lembar texture, maka triangle ini akan “menempel” pada sebagian area texture tersebut.

Yang penting di sini adalah nilai UV tidak hanya ada di vertex. Saat triangle di-rasterisasi, GPU akan mengisi area di dalam triangle dengan banyak **fragment**. Untuk setiap fragment di dalam triangle, nilai UV-nya diperoleh melalui **interpolasi** dari nilai UV ketiga vertex.

```text
Nilai UV di antara vertex:
diinterpolasi
untuk setiap fragment.
```

Dengan kata lain, fragment yang dekat dengan vertex `A` akan memiliki UV yang mendekati `(0,0)`, fragment yang dekat dengan vertex `B` akan mendekati `(1,0)`, dan fragment yang dekat dengan vertex `C` akan mendekati `(0,1)`. Fragment di tengah triangle akan memiliki nilai UV yang merupakan campuran dari ketiganya.

Konsep ini sangat penting karena texture mapping pada permukaan 3D bergantung pada koordinat UV per fragment. Tanpa interpolasi, kita hanya memiliki koordinat UV di titik-titik vertex saja, dan area di dalam triangle tidak akan memiliki informasi texture yang halus. Interpolasi inilah yang memungkinkan texture tampak menempel secara kontinu pada permukaan geometri.

Sebelum lanjut ke shader, mahasiswa perlu memahami bahwa UV adalah **atribut vertex** yang kemudian diproses melalui pipeline. Vertex membawa UV, rasterisasi melakukan interpolasi, dan fragment shader nantinya akan menerima hasil interpolasi tersebut untuk mengambil warna texture.

### Inti yang Harus Ditekankan

- **UV** adalah koordinat 2D yang memetakan texture ke geometri.
- Setiap vertex dapat memiliki pasangan UV, misalnya `A → (0,0)`, `B → (1,0)`, `C → (0,1)`.
- Nilai UV di dalam triangle diperoleh melalui **interpolasi** antar vertex.
- Setiap **fragment** di dalam triangle memiliki nilai UV sendiri, bukan hanya vertex.
- Interpolasi UV penting agar texture dapat dipetakan secara halus ke permukaan 3D.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana nilai UV ini dideklarasikan sebagai **vertex attribute** di vertex shader, lalu diteruskan ke fragment shader sebagai hasil interpolasi.

---

## Slide 038 - UV sebagai Vertex Attribute

### Narasi

Pada tahap vertex shader, koordinat UV diperkenalkan sebagai **vertex attribute** dengan nama `a_texCoord`. Atribut ini berisi pasangan koordinat 2D, misalnya `(0,0)`, `(1,0)`, atau `(0,1)`, yang melekat pada setiap vertex geometri.

```glsl
in vec2 a_texCoord;
out vec2 v_texCoord;
```

Perhatikan dua peran penting di sini. `a_texCoord` adalah **input** yang dibaca vertex shader dari buffer data vertex. `v_texCoord` adalah **output** yang dikirim ke tahap rasterisasi.

```glsl
v_texCoord = a_texCoord;
```

Baris ini terlihat sederhana, tetapi maknanya penting: setiap vertex membawa nilai UV-nya ke tahap berikutnya. Setelah vertex diproses, GPU melakukan **interpolasi** nilai `v_texCoord` di dalam triangle sehingga setiap fragment memperoleh koordinat UV yang sesuai dengan posisinya.

Dengan cara ini, tekstur dapat dipetakan ke permukaan objek secara halus. Jika satu vertex memiliki UV `(0,0)` dan vertex lain `(1,0)`, fragment di antara keduanya akan menerima nilai UV yang berada di antara kedua nilai tersebut. Inilah yang membuat tekstur tidak terpotong secara kasar pada batas vertex, tetapi mengikuti permukaan geometri.

Dalam konteks rendering pipeline, slide ini menunjukkan bagaimana data UV mengalir dari **vertex data** ke **vertex shader**, lalu ke **rasterizer**, dan akhirnya tersedia untuk fragment shader. Mahasiswa perlu memahami bahwa fragment shader tidak membaca UV langsung dari vertex tertentu, melainkan menerima hasil interpolasi yang sudah dihitung GPU.

Sebelum lanjut, pastikan mahasiswa paham perbedaan antara `a_texCoord` sebagai data per vertex dan `v_texCoord` sebagai nilai yang diteruskan ke fragment. Konsep ini menjadi dasar untuk tahap berikutnya, yaitu bagaimana fragment shader menggunakan koordinat UV tersebut untuk mengambil warna dari tekstur.

### Inti yang Harus Ditekankan

- `a_texCoord` adalah **vertex attribute** yang menyimpan koordinat UV per vertex.
- `v_texCoord` adalah output vertex shader yang diteruskan ke fragment shader.
- Nilai UV diinterpolasi oleh GPU di dalam triangle, sehingga setiap fragment memiliki koordinat UV yang halus.
- Alur UV: vertex data → vertex shader → rasterisasi/interpolasi → fragment shader.

### Transisi ke Slide Berikutnya

Setelah fragment shader menerima koordinat UV yang sudah diinterpolasi, langkah berikutnya adalah menggunakan koordinat tersebut untuk mengambil warna dari tekstur. Pada slide berikutnya, kita akan membahas **texture sampler** dan bagaimana fragment shader mengakses tekstur melalui `uniform sampler2D u_texture`.

---

## Slide 039 - Texture Sampler

### Narasi

Setelah koordinat UV sampai ke fragment shader, langkah berikutnya adalah menyiapkan cara fragment shader mengakses texture. Pada GLSL, texture tidak dikirim sebagai data gambar biasa ke dalam shader, tetapi direpresentasikan melalui **sampler**.

```glsl
uniform sampler2D u_texture;
```

Baris ini menyatakan bahwa fragment shader memiliki variabel bernama `u_texture` yang bertipe **sampler2D**. Kata `uniform` berarti nilai atau referensi ini diatur dari luar shader, biasanya dari JavaScript/WebGL. Kata `sampler2D` berarti sampler untuk texture dua dimensi, yaitu texture yang memiliki koordinat horizontal dan vertikal.

Penting untuk memahami bahwa `u_texture` bukan berisi pixel texture secara langsung. Variabel ini lebih tepat dipahami sebagai **handle** atau referensi ke texture yang sedang diaktifkan pada GPU. Data texture itu sendiri, misalnya gambar atau buffer texture, tetap berada di sisi GPU dan dihubungkan ke **texture unit** tertentu.

Dari sisi JavaScript/WebGL, texture unit dan binding diatur sebelum atau saat rendering. Artinya, shader hanya tahu bahwa ia akan memakai `u_texture`, sedangkan aplikasi menentukan texture mana yang terikat pada sampler tersebut. Pemisahan ini penting karena shader yang sama dapat dipakai dengan texture yang berbeda tanpa mengubah kode shader.

Secara pipeline, posisi konsep ini berada di tahap fragment processing. Vertex shader sebelumnya meneruskan `v_texCoord` ke fragment shader. Fragment shader kemudian membutuhkan dua hal untuk mengambil warna texture: koordinat UV dan sampler texture. Pada slide ini, kita baru menyiapkan sampler-nya.

Sebelum lanjut, mahasiswa perlu memahami bahwa `uniform sampler2D u_texture;` adalah deklarasi akses texture di fragment shader, bukan proses pengambilan warna. Proses pengambilan warna akan terjadi ketika sampler dipasangkan dengan koordinat UV.

### Inti yang Harus Ditekankan

- `uniform sampler2D u_texture;` adalah deklarasi **texture sampler** di fragment shader.
- `u_texture` adalah referensi ke texture, bukan data pixel texture itu sendiri.
- Texture unit dan binding diatur dari JavaScript/WebGL, sehingga shader dapat memakai texture yang berbeda tanpa mengubah logika shader.
- Sampler ini menjadi prasyarat sebelum fragment shader melakukan sampling texture menggunakan koordinat UV.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana `u_texture` benar-benar digunakan untuk mengambil warna texture melalui fungsi `texture(u_texture, v_texCoord)`.

---

## Slide 040 - Texture Sampling

### Narasi

Setelah fragment shader memiliki **sampler** texture, langkah berikutnya adalah mengambil warna dari texture tersebut. Proses inilah yang disebut **Texture Sampling**.

```glsl
vec4 texColor =
  texture(
    u_texture,
    v_texCoord
  );
```

Pada potongan kode di atas, `u_texture` adalah **sampler** yang sudah kita deklarasi sebelumnya. Sampler ini bukan gambar mentah yang langsung dibaca, melainkan representasi texture yang sedang digunakan oleh shader. Texture yang sebenarnya diikat dari sisi JavaScript/WebGL ke texture unit tertentu.

`v_texCoord` adalah **koordinat texture** untuk fragment yang sedang diproses. Koordinat ini biasanya berasal dari vertex shader, lalu diinterpolasi menuju fragment. Dengan kata lain, setiap fragment tahu posisi mana pada texture yang harus diambil.

Fungsi `texture()` kemudian mengambil nilai warna pada posisi tersebut dan menyimpannya ke variabel `texColor`. Hasilnya bertipe `vec4`, yang umumnya berisi empat komponen warna: red, green, blue, dan alpha.

Proses ini penting karena **texture sampling** adalah jembatan antara data gambar dan rendering pipeline. Tanpa sampling, fragment shader hanya bisa menghasilkan warna solid atau hasil perhitungan sederhana. Dengan sampling, permukaan objek dapat menampilkan detail gambar, pola material, atau informasi visual lain yang lebih kaya.

Dalam alur pipeline, vertex shader menyiapkan posisi dan koordinat texture, rasterisasi menghasilkan fragment, lalu fragment shader melakukan sampling. Nilai `texColor` yang diperoleh kemudian dapat dikombinasikan dengan lighting, material, atau warna lain sebelum menjadi pixel di framebuffer.

### Inti yang Harus Ditekankan

- `texture(u_texture, v_texCoord)` adalah operasi inti untuk mengambil warna texture di fragment shader.
- `u_texture` adalah **sampler** yang terikat ke texture, sedangkan `v_texCoord` adalah **koordinat texture** per fragment.
- Hasil sampling berupa `vec4` yang merepresentasikan warna RGBA dan dapat digunakan untuk menghitung warna akhir fragment.
- **Texture Sampling** menghubungkan data gambar dengan rendering pipeline, sehingga objek tidak hanya diberi warna solid.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan melihat satuan data yang diambil dari texture, yaitu **texel**, serta bagaimana fragment berhubungan dengan elemen-elemen data pada texture image.

---

## Slide 041 - Texel

### Narasi

Setelah fragment shader meminta warna texture melalui `texture(u_texture, v_texCoord)`, ada satu istilah penting yang perlu kita pahami: **texel**.

**Texel** adalah elemen data pada texture image. Jika kita membayangkan texture sebagai gambar digital, maka setiap titik warna atau nilai channel pada gambar itu adalah satu texel. Jadi texture bukan sekadar objek visual, melainkan kumpulan data yang dapat diakses oleh GPU berdasarkan koordinat texture.

Perbedaan dengan **pixel** perlu ditegaskan:

- `Pixel` adalah elemen pada image atau framebuffer, yaitu titik yang akan ditampilkan di layar.
- `Texel` adalah elemen pada texture, yaitu data sumber yang diambil atau diproses untuk menghasilkan warna fragment.

Keduanya sama-sama berupa titik data, tetapi berada di ruang yang berbeda. Pixel berkaitan dengan hasil akhir rendering, sedangkan texel berkaitan dengan sumber data texture.

Dalam pipeline, fragment shader menerima koordinat texture yang sudah diinterpolasi, misalnya `v_texCoord`. Koordinat tersebut digunakan untuk menentukan posisi pada texture image. Dari posisi itu, GPU mengambil atau menginterpolasi nilai texel yang sesuai. Nilai inilah yang kemudian dapat digunakan sebagai warna dasar, normal map, specular map, atau data material lainnya.

Penting untuk dipahami bahwa satu fragment tidak selalu identik dengan satu texel. Peta texture ke permukaan objek dapat membuat satu fragment membutuhkan nilai dari beberapa texel, terutama ketika texture diperbesar, diperkecil, atau dipetakan pada geometri dengan sudut tertentu. Karena itu, konsep texel menjadi dasar sebelum kita membahas bagaimana GPU memilih atau memproses nilai texel tersebut.

### Inti yang Harus Ditekankan

- **Texel** adalah elemen data pada texture image, bukan elemen layar.
- `Pixel` berada pada framebuffer/image hasil rendering, sedangkan `texel` berada pada texture source.
- Fragment shader menggunakan koordinat texture untuk mengakses atau menginterpolasi nilai texel.
- Pemahaman ini penting karena menentukan bagaimana warna texture dipetakan ke permukaan objek sebelum tahap filtering.

### Transisi ke Slide Berikutnya

Nah, jika posisi fragment tidak tepat berada pada satu texel, atau ukuran texture tidak sama dengan ukuran area yang dirender, GPU perlu menentukan cara mengambil nilai texel. Di sinilah kita masuk ke **texture filtering**, seperti `NEAREST` dan `LINEAR`, yang memengaruhi tampilan akhir texture.

---

## Slide 042 - Texture Filtering

### Narasi

Setelah kita memahami bahwa **texel** adalah satuan data pada texture, langkah berikutnya adalah memahami bagaimana GPU memilih nilai texel ketika texture ditampilkan pada layar.

Dalam rendering, satu fragmen pada layar tidak selalu bersesuaian dengan tepat satu texel. Jika texture diperbesar, satu texel dapat mewakili beberapa fragmen. Sebaliknya, jika texture diperkecil, satu fragmen dapat berada di antara beberapa texel. Karena itu, GPU perlu menentukan cara membaca atau menggunakan nilai texel.

Proses ini disebut **texture filtering**. Pada tahap fragment, ketika shader meminta nilai texture, GPU tidak hanya mengambil satu titik data secara mentah; ia menerapkan aturan filtering untuk menghasilkan warna yang akan ditampilkan.

Contoh mode filtering yang umum adalah:

```text
NEAREST
LINEAR
```

`NEAREST` dan `LINEAR` mewakili dua cara berbeda dalam menentukan nilai texel. Keduanya memengaruhi tampilan akhir texture, misalnya pada ketajaman, kehalusan transisi, dan karakter visual objek.

Sebelum masuk ke perbandingan detailnya, hal penting yang perlu dipahami adalah bahwa texture filtering adalah bagian dari proses sampling texture dalam pipeline rendering. Ia menentukan bagaimana data texture diterjemahkan menjadi warna fragmen setelah rasterisasi.

### Inti yang Harus Ditekankan

- **Texture filtering** menentukan bagaimana GPU memilih atau menggunakan **texel** ketika texture diperbesar atau diperkecil.
- Satu fragmen layar tidak selalu sama dengan satu texel, sehingga diperlukan aturan sampling.
- `NEAREST` dan `LINEAR` adalah contoh mode filtering yang memengaruhi tampilan visual texture.
- Filtering terjadi pada tahap fragment sebagai bagian dari proses sampling texture dalam rendering pipeline.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan membandingkan `NEAREST` dan `LINEAR` secara lebih rinci untuk melihat bagaimana masing-masing mode menghasilkan tampilan texture yang berbeda.

---

## Slide 043 - NEAREST vs LINEAR

### Narasi

Saat sebuah fragment mengambil warna dari texture, koordinat `UV` biasanya tidak selalu jatuh tepat di pusat satu `texel`. Posisi sampling bisa berada di antara beberapa `texel`, terutama ketika texture diperbesar atau diperkecil pada layar. Di titik inilah **texture filtering** menjadi penting, karena GPU harus menentukan warna apa yang akan digunakan untuk fragment tersebut.

Pada mode **`NEAREST`**, GPU memilih satu `texel` terdekat dari posisi sampling. Tidak ada pencampuran warna dengan `texel` di sekitarnya. Akibatnya, hasil tampilan cenderung **tajam** dan mempertahankan bentuk asli `texel`. Gaya ini sering cocok untuk `pixel art`, ikon, antarmuka, atau visual retro. Namun, ketika texture diperbesar, hasilnya dapat terlihat **`pixelated`** atau kotak-kotak, karena satu `texel` mewakili area yang lebih besar di layar.

Pada mode **`LINEAR`**, GPU melakukan **interpolation** terhadap `texel` di sekitar posisi sampling. Warna yang dihasilkan bukan hanya dari satu `texel`, melainkan campuran dari beberapa `texel` tetangga. Karena ada pencampuran ini, transisi warna menjadi **lebih halus** dan perubahan antar-`texel` tidak terlalu terlihat. Mode ini biasanya lebih sesuai untuk texture foto, material realistis, atau tampilan yang ingin terlihat lembut.

Kedua mode ini berada pada tahap **sampling texture** dalam rendering pipeline, terutama ketika fragment shader mengevaluasi warna per pixel. Setelah vertex di-transformasi dan rasterisasi menghasilkan fragment, fragment shader kemudian mengambil warna texture berdasarkan koordinat `UV`. Pilihan filtering memengaruhi kualitas visual hasil render, sekaligus memengaruhi jumlah perhitungan yang dilakukan GPU. `NEAREST` lebih sederhana karena hanya memilih satu `texel`, sedangkan `LINEAR` melakukan interpolasi sehingga hasilnya lebih halus tetapi membutuhkan perhitungan tambahan.

Yang perlu kita pahami adalah bahwa `NEAREST` dan `LINEAR` bukan sekadar “yang mana lebih baik”, melainkan pilihan yang bergantung pada **gaya visual** dan kebutuhan tampilan. Jika kita ingin mempertahankan ketajaman piksel, `NEAREST` bisa menjadi pilihan yang tepat. Jika kita ingin transisi warna yang lebih natural dan halus, `LINEAR` lebih sesuai. Dengan kata lain, filtering membantu kita mengendalikan bagaimana texture terlihat ketika dipetakan ke permukaan objek.

### Inti yang Harus Ditekankan

- **`NEAREST`** memilih satu `texel` terdekat; hasilnya tajam tetapi dapat terlihat `pixelated`.
- **`LINEAR`** melakukan interpolasi antar-`texel`; hasilnya memiliki transisi warna yang lebih halus.
- Filtering memengaruhi tahap **sampling texture** pada fragment shader, bukan mengubah geometri, kamera, atau transformasi objek.
- Pemilihan `NEAREST` atau `LINEAR` berkaitan dengan gaya visual, kualitas tampilan, dan kebutuhan rendering.

### Transisi ke Slide Berikutnya

Setelah kita memahami bagaimana `texel` dipilih ketika posisi sampling berada di dalam area texture, pertanyaan berikutnya adalah apa yang terjadi jika koordinat `UV` berada di luar rentang `0` sampai `1`. Pada slide berikutnya, kita akan membahas **Texture Wrapping**, yaitu aturan yang menentukan perilaku texture ketika koordinat UV melewati batas texture.

---

## Slide 044 - Texture Wrapping

### Narasi

Saat kita memetakan tekstur ke permukaan, koordinat UV biasanya berada pada rentang:

```text
0 → 1
```

Rentang ini dapat kita pahami sebagai area “aman” dari gambar tekstur. Nilai `U` menggambarkan posisi horizontal, sedangkan `V` menggambarkan posisi vertikal. Selama nilai UV berada di dalam rentang tersebut, GPU dapat mengambil warna texel secara langsung dari gambar tekstur.

Namun, dalam praktik pemodelan, UV tidak selalu berada di dalam rentang itu. Misalnya, sebuah dinding atau lantai dapat diberi UV yang lebih besar dari 1 agar tekstur terlihat berulang. Pada kondisi ini, GPU harus menentukan perilaku sampling: apakah tekstur diulang, dipotong di tepi, atau dipantulkan. Perilaku inilah yang diatur oleh **texture wrapping**.

Mode wrapping yang umum adalah:

```text
REPEAT
CLAMP_TO_EDGE
MIRRORED_REPEAT
```

Kita dapat memahaminya sebagai aturan “apa yang terjadi ketika koordinat UV keluar dari batas tekstur”.

- **`REPEAT`** mengulang tekstur secara periodik. Jika UV melewati 1, sistem akan kembali ke bagian awal tekstur, sehingga cocok untuk pola ubin, lantai, dinding, atau material yang ingin terlihat berulang secara natural.
- **`CLAMP_TO_EDGE`** menahan sampling pada tepi tekstur. UV di luar rentang akan tetap mengambil warna dari tepi terakhir, sehingga cocok untuk satu gambar yang dipetakan ke seluruh permukaan tanpa pengulangan.
- **`MIRRORED_REPEAT`** mengulang tekstur dengan memantulkannya secara bergantian. Pola akan terlihat seperti cermin, sehingga dapat mengurangi kesan sambungan yang terlalu tajam pada beberapa material.

Penting untuk kita tekankan bahwa wrapping bukan pengganti filtering. Pada slide sebelumnya, **`NEAREST`** dan **`LINEAR`** menentukan bagaimana warna diambil di sekitar satu posisi UV. Sementara itu, **wrapping** menentukan posisi UV mana yang dianggap valid ketika koordinat berada di luar rentang `0 → 1`. Dengan kata lain, wrapping mengatur “peta” yang digunakan, sedangkan filtering mengatur cara membaca warna pada peta tersebut.

Dalam pipeline rendering, keputusan ini terjadi pada tahap sampling tekstur, biasanya ketika fragment shader meminta warna dari tekstur. GPU akan memetakan UV sesuai mode wrapping, kemudian melakukan filtering untuk mendapatkan warna akhir. Karena itu, pemilihan mode wrapping sangat memengaruhi hasil visual: salah memilih `REPEAT` pada gambar karakter dapat membuat tekstur berulang atau terpotong, sedangkan `CLAMP_TO_EDGE` pada lantai dapat membuat tepi terlihat membeku dan tidak natural.

Sebelum lanjut ke pencahayaan, mahasiswa perlu memahami bahwa UV di luar `0 → 1` bukan selalu kesalahan. Ia dapat menjadi fitur desain, terutama untuk tiling. Yang penting adalah memahami perilaku sampling yang dipilih, karena hasil rendering sangat bergantung pada kombinasi UV, wrapping, dan filtering.

### Inti yang Harus Ditekankan

- **Texture wrapping** menentukan perilaku sampling ketika UV berada di luar rentang `0 → 1`.
- **`REPEAT`** mengulang tekstur, **`CLAMP_TO_EDGE`** menahan pada tepi, dan **`MIRRORED_REPEAT`** memantulkan lalu mengulang.
- Wrapping bekerja bersama filtering: wrapping memilih area tekstur, sedangkan `NEAREST` atau `LINEAR` menentukan cara interpolasi warna.
- Pemilihan mode wrapping memengaruhi kesan visual, seperti tiling, tepi, sambungan, dan naturalitas material.

### Transisi ke Slide Berikutnya

Setelah kita memahami bagaimana warna tekstur diambil, langkah berikutnya adalah menggabungkan warna tersebut dengan pencahayaan. Pada slide berikutnya, kita akan melihat bagaimana **texture** menyediakan **Base Color**, sedangkan **lighting** memberikan **Light Contribution** yang dikalikan untuk menghasilkan warna akhir yang lebih realistis.

---

## Slide 045 - Lighting + Texture

### Narasi

Setelah membahas bagaimana texture dipetakan ke permukaan objek, kita masuk ke tahap berikutnya: bagaimana warna yang dihasilkan oleh texture berinteraksi dengan cahaya. Dalam rendering, texture biasanya tidak langsung menjadi warna akhir yang kita lihat. Texture lebih berperan sebagai sumber **Base Color**, yaitu warna material dasar pada setiap titik permukaan.

Secara intuitif, texture menjawab pertanyaan: “Jika permukaan ini disinari cahaya secara netral, warnanya apa?” Misalnya, texture kayu memberikan warna cokelat, texture batu memberikan warna abu-abu, dan texture karakter memberikan warna kulit atau pakaian. Nilai warna ini biasanya diambil dari koordinat `UV` yang sudah kita pelajari sebelumnya.

Di sisi lain, lighting menjawab pertanyaan: “Seberapa terang titik permukaan ini karena adanya sumber cahaya?” Cahaya memberikan **Light Contribution**, yaitu kontribusi pencahayaan yang bergantung pada posisi kamera, posisi cahaya, normal permukaan, dan sifat material. Tanpa lighting, objek bertekstur akan terlihat datar karena setiap pixel hanya menampilkan warna texture apa adanya.

Gabungan sederhana yang ingin kita pahami pada slide ini adalah:

```text
Textured Base Color
×
Lighting
```

Artinya, warna akhir pada sebuah fragment umumnya diperoleh dengan mengalikan warna dasar dari texture dengan hasil perhitungan lighting. Jika lighting bernilai kecil, warna texture akan tampak lebih gelap. Jika lighting bernilai besar, warna texture akan tampak lebih terang. Dalam beberapa kasus, lighting juga dapat menambah komponen tertentu, tetapi pada model sederhana ini perkalian adalah intinya.

Kita dapat melihat hubungan ini dalam pipeline rendering. Pada tahap fragment, shader biasanya melakukan beberapa hal: mengambil warna texture berdasarkan `UV`, menghitung kontribusi cahaya berdasarkan normal dan posisi cahaya, lalu menggabungkan keduanya menjadi warna akhir. Dengan cara ini, texture memberikan identitas material, sedangkan lighting memberikan kesan volume, kedalaman, dan respons terhadap lingkungan.

Hal penting yang perlu dipahami sebelum lanjut adalah bahwa texture dan lighting bukan dua hal yang terpisah sepenuhnya. Texture menentukan apa yang “ada” pada permukaan, sedangkan lighting menentukan bagaimana permukaan itu “terlihat” saat disinari. Konsep ini menjadi dasar untuk praktikum berikutnya, di mana kita akan menggabungkan `normal`, `UV`, texture, `ambient`, `diffuse`, `specular`, posisi cahaya, dan rotasi objek pada satu objek 3D.

### Inti yang Harus Ditekankan

- **Texture** menyediakan **Base Color** atau warna material dasar pada permukaan objek.
- **Lighting** menyediakan **Light Contribution** atau kontribusi cahaya yang membuat permukaan terlihat terang, gelap, atau memiliki kedalaman.
- Model sederhana yang digunakan adalah **Textured Base Color × Lighting**, sehingga warna akhir dipengaruhi oleh warna texture dan pencahayaan.
- Dalam pipeline, `fragment shader` biasanya mengambil warna texture dari `UV` lalu menggabungkannya dengan hasil perhitungan lighting.
- Konsep ini penting karena membedakan objek bertekstur yang datar dengan objek bertekstur yang memiliki respons cahaya.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan menerapkan konsep ini secara praktis pada objek cube yang sudah memiliki `normal`, `UV`, texture, `ambient`, `diffuse`, `specular`, posisi cahaya, dan rotasi animasi.

---

## Slide 046 - Praktikum: Textured and Lit Object

### Narasi

Praktikum ini meminta mahasiswa mengambil **cube** yang sudah dibangun pada **P4**, lalu memperluasnya menjadi objek yang memiliki tekstur dan pencahayaan. Tujuannya bukan membuat objek baru dari nol, tetapi menunjukkan bagaimana satu model geometri dapat diberi atribut tambahan sehingga tampil lebih realistis dalam pipeline **WebGL**.

Komponen yang diminta dapat dibaca sebagai satu rangkaian atribut dan parameter rendering:

- **`normal`** dan **`UV`** adalah atribut geometri tambahan. `normal` memberi arah permukaan untuk menghitung pencahayaan, sedangkan `UV` memberi koordinat tekstur agar setiap titik pada permukaan cube tahu bagian mana dari gambar yang harus diambil.
- **`texture`** menyediakan warna dasar atau **base color** yang kemudian diproses oleh shader.
- **`ambient`**, **`diffuse`**, dan **`specular`** adalah komponen lighting. `ambient` menjaga objek tetap terlihat pada area yang tidak langsung disinari, `diffuse` menentukan kecerahan berdasarkan orientasi permukaan terhadap cahaya, dan `specular` memberi kilau pada area yang memantulkan cahaya.
- **`light position`** menentukan posisi sumber cahaya yang digunakan dalam perhitungan lighting.
- **`camera-aware specular`** menekankan bahwa specular tidak hanya bergantung pada arah cahaya, tetapi juga pada arah pandang kamera.
- **`animated rotation`** membuat cube berputar sehingga perubahan shading dan tekstur dapat diamati secara dinamis.

Dalam pipeline rendering, atribut posisi, normal, dan UV akan dikirim ke vertex shader, lalu fragment shader mengambil warna tekstur dan menghitung kontribusi cahaya. Dengan kata lain, tekstur memberikan warna dasar, sedangkan lighting memberikan pencahayaan yang membuat objek tampak memiliki permukaan, arah cahaya, dan kilau.

Objek **P4** digunakan kembali agar progres antar-pertemuan menjadi jelas. Mahasiswa dapat membandingkan versi sebelumnya yang mungkin hanya memiliki warna atau transformasi dasar dengan versi sekarang yang sudah memiliki tekstur dan pencahayaan. Sebelum lanjut, hal penting yang harus dipahami adalah bahwa atribut geometri, tekstur, dan lighting harus terhubung dengan benar melalui buffer, shader, dan pipeline rendering.

### Inti yang Harus Ditekankan

- Cube dari **P4** digunakan kembali, bukan objek baru, agar progres praktikum terlihat jelas.
- `normal`, `UV`, `texture`, `ambient`, `diffuse`, dan `specular` harus dipahami sebagai satu sistem yang saling terhubung.
- `camera-aware specular` penting karena kilau objek bergantung pada posisi kamera, bukan hanya posisi cahaya.
- `animated rotation` membantu mahasiswa mengamati perubahan lighting dan tekstur secara langsung.

### Transisi ke Slide Berikutnya

Setelah memahami komponen yang harus dikembangkan, slide berikutnya merangkum tahapan ringkas praktikum, mulai dari penambahan data normal dan UV hingga penggabungan lighting dengan texture.

---

## Slide 047 - Rencana Praktikum

### Narasi

Sebelum masuk ke implementasi, kita perlu melihat alur kerja praktikum secara utuh. Slide ini merangkum tahapan yang akan dilakukan mahasiswa untuk mengembangkan objek menjadi objek yang memiliki **normal**, **UV**, **texture**, dan **lighting**. Urutan ini penting karena setiap tahap menyiapkan data atau perhitungan yang dibutuhkan tahap berikutnya.

```text
1. Tambahkan Normal Data
2. Tambahkan UV Data
3. Buat Buffer Normal dan UV
4. Load & Bind Texture
5. Texture Sampling
6. Hitung Ambient
7. Hitung Diffuse
8. Hitung Specular
9. Gabungkan Lighting + Texture
10. Tambahkan Light Control
```

Tahap pertama hingga ketiga berfokus pada **atribut vertex**. Selain `position`, objek membutuhkan `normal` untuk menghitung arah permukaan terhadap cahaya, serta `UV` untuk memetakan tekstur ke permukaan geometri. Setelah data tersebut tersedia, kita perlu membuat buffer untuk `normal` dan `UV` agar GPU dapat membaca atribut tersebut saat proses rendering.

Tahap keempat hingga kelima berkaitan dengan **texture**. Texture harus di-load, di-bind ke texture unit yang sesuai, lalu disampel di fragment shader. Pada tahap ini, setiap fragmen akan mengambil warna tekstur berdasarkan koordinat UV yang telah diinterpolasi dari vertex.

Tahap keenam hingga kedelapan membahas komponen **lighting**. `Ambient` memberikan pencahayaan dasar agar objek tidak sepenuhnya gelap, `diffuse` menentukan seberapa terang permukaan berdasarkan arah cahaya, dan `specular` menghasilkan kilau pada permukaan. Ketiga komponen ini kemudian digabungkan dengan hasil texture sampling untuk membentuk warna permukaan akhir.

Tahap terakhir, **light control**, memungkinkan mahasiswa mengamati perubahan hasil rendering ketika posisi atau parameter cahaya diubah. Dengan kontrol ini, hubungan antara geometri, tekstur, dan pencahayaan menjadi lebih mudah dipahami secara visual.

### Inti yang Harus Ditekankan

- `Normal` dan `UV` adalah atribut tambahan selain `position` yang dibutuhkan untuk lighting dan texture mapping.
- Buffer `normal` dan `UV` harus dibuat dan diaktifkan agar shader dapat membaca data tersebut.
- Texture sampling dilakukan pada fragment shader berdasarkan koordinat `UV`.
- `Ambient`, `diffuse`, dan `specular` adalah komponen lighting yang digabungkan dengan warna tekstur.
- Light control membantu mahasiswa mengamati pengaruh posisi cahaya terhadap hasil rendering.

### Transisi ke Slide Berikutnya

Dengan urutan tahapan ini, kita dapat melihat bagaimana data geometri, tekstur, dan cahaya bertemu dalam pipeline rendering. Selanjutnya, kita akan merangkum benang merah dari geometry hingga final surface color.

---

## Slide 048 - Ringkasan Pertemuan

### Narasi

Pada pertemuan ini, kita merangkum alur utama yang menghubungkan data geometri dengan warna akhir yang ditampilkan. Benang merahnya dapat dibaca dari atas ke bawah:

```text
Geometry
 ↓
Position + Normal + UV
 ↓
Vertex Shader
 ↓
Interpolation
 ↓
Fragment Shader
├── Texture Sampling
├── Ambient
├── Diffuse
└── Specular
 ↓
Final Surface Color
```

Alur ini penting karena menunjukkan bahwa **rendering** tidak terjadi pada satu tahap saja. **Geometry** menyediakan bentuk objek, sedangkan `Position`, `Normal`, dan `UV` adalah data pendukung yang menentukan posisi titik, arah permukaan, dan koordinat tekstur. Data tersebut kemudian diproses oleh **Vertex Shader**, dilanjutkan dengan **Interpolation** untuk memperkirakan nilai di antara titik-titik vertex, dan akhirnya **Fragment Shader** menghitung warna per piksel.

Pada tahap **Fragment Shader**, kita melihat beberapa komponen utama yang saling melengkapi: **Texture Sampling** untuk mengambil warna tekstur, **Ambient** untuk pencahayaan dasar, **Diffuse** untuk pencahayaan yang bergantung pada arah cahaya dan normal, serta **Specular** untuk efek kilau. Gabungan dari proses tersebut menghasilkan **Final Surface Color**, yaitu warna permukaan yang akhirnya ditampilkan.

Sebelum lanjut, mahasiswa perlu memahami bahwa setiap tahap memiliki peran berbeda: **Vertex Shader** berfokus pada transformasi posisi, **Interpolation** menjaga kelancaran nilai antar vertex, dan **Fragment Shader** menentukan tampilan visual akhir. Dengan memahami alur ini, praktikum yang telah direncanakan menjadi lebih mudah diikuti karena setiap langkah teknis dapat dipetakan ke posisi tertentu dalam pipeline.

### Inti yang Harus Ditekankan

- **Geometry** menjadi dasar objek, sedangkan `Position`, `Normal`, dan `UV` adalah data penting yang mendukung proses rendering.
- **Vertex Shader** memproses data vertex, **Interpolation** mengisi nilai di antara vertex, dan **Fragment Shader** menghitung warna akhir per fragmen.
- **Texture Sampling**, **Ambient**, **Diffuse**, dan **Specular** adalah komponen utama dalam pembentukan warna permukaan.
- **Final Surface Color** adalah hasil akhir dari proses lighting dan shading sebelum ditampilkan.

### Transisi ke Slide Berikutnya

Dengan rangkuman ini, kita telah menutup pertemuan tentang **Lighting, Shading & Texture pada WebGL**. Selanjutnya, kita akan berpindah ke materi **Introduction to Three.js**, yang akan menjadi dasar untuk membangun adegan grafika komputer dengan pendekatan yang lebih praktis.

---

## Slide 049 - TERIMA KASIH

### Narasi

Dengan demikian, pertemuan kali ini kita tutup. Terima kasih atas perhatian dan partisipasi mahasiswa selama pembahasan **Lighting, Shading & Texture pada WebGL**. Kita telah melihat bagaimana sebuah objek visual tidak hanya ditentukan oleh bentuk geometrinya, tetapi juga oleh cara objek tersebut diposisikan, disinari, diberi tekstur, dan akhirnya diubah menjadi warna yang terlihat pada layar.

Inti dari materi ini adalah memahami alur kerja rendering pada WebGL, yaitu bagaimana data geometri seperti **position**, **normal**, dan **UV** diproses oleh `vertex shader`, kemudian diinterpolasi menuju `fragment shader`. Di tahap `fragment shader`, informasi tersebut digunakan untuk melakukan **texture sampling** serta perhitungan warna permukaan melalui komponen **ambient**, **diffuse**, dan **specular**. Pemahaman ini penting karena menjadi dasar untuk membangun tampilan 3D yang lebih realistis dan interaktif.

Sebelum melanjutkan ke materi berikutnya, pastikan mahasiswa sudah dapat menjelaskan peran masing-masing shader, memahami arti data yang dikirim dari CPU ke GPU, serta mengetahui bagaimana hasil akhir warna permukaan terbentuk. Konsep ini akan menjadi fondasi ketika kita mulai menggunakan pustaka yang lebih tinggi tingkatannya, yaitu **Three.js**, untuk membangun adegan 3D secara lebih praktis.

### Inti yang Harus Ditekankan

- Rendering WebGL melibatkan alur dari **geometri**, **transformasi**, **shader**, hingga **warna akhir permukaan**.
- `vertex shader` dan `fragment shader` memiliki peran berbeda: `vertex shader` memproses posisi vertex, sedangkan `fragment shader` menentukan warna tiap piksel.
- **Lighting** dan **texture** sangat menentukan kualitas visual objek 3D, karena keduanya memengaruhi bagaimana permukaan objek terlihat oleh kamera.

### Transisi ke Slide Berikutnya

Pada pertemuan berikutnya, kita akan melanjutkan ke **Introduction to Three.js**, yaitu pustaka yang membantu kita membangun adegan 3D WebGL dengan cara yang lebih terstruktur, praktis, dan mudah dikembangkan.
