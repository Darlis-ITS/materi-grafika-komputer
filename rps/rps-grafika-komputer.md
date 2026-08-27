# Rencana Pembelajaran Semester (RPS)

## Mata Kuliah Grafika Komputer

| Komponen            | Informasi                                              |
| ------------------- | ------------------------------------------------------ |
| Kode mata kuliah    | EF234504                                               |
| Nama mata kuliah    | Grafika Komputer                                       |
| Program studi       | Teknik Informatika                                     |
| Semester            | Gasal 2026/2027                                        |
| Dosen               | Dosen Lab. GIGA                                   |
| Bentuk pembelajaran | Kuliah, diskusi, demonstrasi, dan praktikum            |
| Media utama         | HTML Canvas, WebGL, GLSL, Three.js, Blender, dan Unity |

## Deskripsi Mata Kuliah

Grafika Komputer membahas prinsip, algoritma, pipeline, pemrograman, dan produksi aset visual komputer. Pembelajaran bergerak dari konsep dasar dan transformasi geometrik menuju WebGL, shader, Three.js, pemodelan Blender, serta real-time rendering menggunakan Unity.

Mahasiswa tidak hanya menggunakan software grafika, tetapi memahami bagaimana data 2D/3D diproses menjadi gambar pada layar, kemudian mengintegrasikan geometry, material, texture, lighting, kamera, shader, animasi, interaksi, dan optimasi.

## Capaian Pembelajaran Lulusan (CPL) Terkait

1. Mampu menerapkan pengetahuan matematika dan komputasi untuk menyelesaikan masalah teknik informatika.
2. Mampu merancang dan mengimplementasikan solusi perangkat lunak yang interaktif dan dapat diuji.
3. Mampu bekerja secara mandiri, mendokumentasikan proses, serta mengomunikasikan hasil teknis.
4. Mampu menggunakan perangkat dan teknologi digital secara bertanggung jawab.

## Capaian Pembelajaran Mata Kuliah (CPMK)

Setelah menyelesaikan mata kuliah ini, mahasiswa mampu:

1. Menjelaskan konsep dasar grafika komputer dan graphics pipeline.
2. Menerapkan transformasi geometrik 2D/3D, matriks, kamera, dan proyeksi.
3. Mengembangkan program grafika menggunakan HTML Canvas, WebGL, dan GLSL.
4. Membuat aplikasi 3D interaktif berbasis Three.js.
5. Membuat dan menyiapkan aset 3D menggunakan Blender.
6. Menjelaskan material, UV, texture, lighting, shadow, dan PBR.
7. Menerapkan real-time rendering, Shader Graph, VFX, dan profiling pada Unity.
8. Mengintegrasikan aset, rendering, animasi, shader, VFX, kamera, dan interaksi menjadi prototype atau final project.

## Peta Pembelajaran Semester

| Minggu | Topik / Sub-CPMK                           | Aktivitas dan Produk                                                           |
| -----: | ------------------------------------------ | ------------------------------------------------------------------------------ |
|      1 | Pengenalan Grafika Komputer                | Graphics Playground dengan HTML Canvas; event-based dan state-based input      |
|      2 | WebGL Fundamental & GLSL                   | Context, vertex, buffer, shader, draw call, dan primitive                      |
|      3 | Transformasi & Sistem Koordinat            | Translation, rotation, scaling, matrix transformation, dan hierarchy transform |
|      4 | Kamera, Proyeksi, dan 3D                   | Perspective, orthographic, depth buffer, dan cube 3D                           |
|      5 | Shader, Lighting, dan Texture WebGL        | Normal, ambient/diffuse/specular, texture UV, filtering, dan wrapping          |
|      6 | Introduction to Three.js                   | Scene, camera, renderer, geometry, material, light, shadow, dan animation loop |
|      7 | Three.js Interactive 3D Application        | Scene graph, PBR, GLB, animation mixer, raycasting, hover, dan selection       |
|      8 | UTS — Interactive Web 3D Project           | Evaluasi konsep dan prototype WebGL/Three.js                                   |
|      9 | Blender Fundamental & 3D Modeling          | Modeling prop game-ready, topology, modifier, dan organisasi scene             |
|     10 | Blender Materials, UV & Texturing          | UV unwrap, checker texture, image texture, dan PBR material                    |
|     11 | Blender Lighting, Camera & Rendering       | Lighting setup, camera composition, render, dan mini environment               |
|     12 | Unity 3D & Universal Render Pipeline       | Import asset Blender, scene URP, camera, material, dan pipeline                |
|     13 | Unity Lighting, Material & Post-Processing | Day/night scene, lighting, PBR, tone mapping, dan post-processing              |
|     14 | Unity Shader Graph                         | Emission, dissolve, animated shader, parameter, dan material instance          |
|     15 | VFX, Particle & Graphics Optimization      | Particle, VFX, profiling, batching, LOD, dan optimasi performa                 |
|     16 | UAS — Real-Time Interactive 3D Experience  | Final project integratif Blender + Unity atau Web 3D interaktif                |

## Strategi dan Metode Pembelajaran

- Penjelasan konsep dengan slide dan demonstrasi visual.
- Live coding bertahap dari primitive menuju scene interaktif.
- Praktikum mandiri berbasis modul setiap pertemuan.
- Eksperimen parameter untuk membandingkan hasil rendering.
- Diskusi debugging dan code review sederhana.
- Project-based learning untuk UTS dan UAS.

## Komponen Penilaian

| Komponen                         | Bobot indikatif | Bukti penilaian                                    |
| -------------------------------- | --------------: | -------------------------------------------------- |
| Kehadiran, diskusi, dan latihan  |             10% | Partisipasi dan jawaban refleksi                   |
| Praktikum 1–7                    |             30% | Source code, hasil eksperimen, dan dokumentasi     |
| UTS / Interactive Web 3D Project |             25% | Prototype, presentasi, dan penjelasan teknis       |
| Praktikum 9–15                   |             15% | Asset, scene, material, shader, VFX, dan profiling |
| UAS / Final Project              |             20% | Produk integratif, repository, laporan, dan demo   |

Bobot dapat disesuaikan dengan kebijakan akademik dan kontrak kuliah. Rubrik utama menilai ketepatan konsep, kualitas implementasi, interaksi, visual, performa, dokumentasi, dan kemampuan menjelaskan keputusan teknis.

## Kriteria Evaluasi Project

1. **Konsep dan pipeline:** hubungan input, data, transform, rendering, dan output dapat dijelaskan.
2. **Implementasi:** source code terstruktur, dapat dijalankan, dan tidak memiliki error penggunaan normal.
3. **Visual:** geometry, material, lighting, kamera, texture, dan komposisi mendukung tujuan project.
4. **Interaksi:** kontrol pengguna jelas, responsif, dan memiliki feedback yang tepat.
5. **Performa:** penggunaan resource, resolusi, draw call, dan frame rate dipertimbangkan.
6. **Dokumentasi:** instruksi menjalankan, parameter kontrol, screenshot/demo, dan penjelasan teknis tersedia.

## Perangkat dan Sumber Belajar

- Browser modern dengan dukungan WebGL/WebGL2.
- Node.js dan Vite untuk project web.
- Three.js dan `GLTFLoader` untuk aplikasi 3D interaktif.
- Blender untuk modeling, UV, material, lighting, dan rendering.
- Unity dengan Universal Render Pipeline untuk real-time rendering.
- Modul praktikum, slide materi, dokumentasi resmi teknologi, dan sample asset berlisensi sesuai ketentuan.

## Aturan Pengumpulan

- Setiap output menyertakan source code yang tidak diminifikasi.
- Asset eksternal disimpan pada folder project atau dicantumkan sumber dan lisensinya.
- README menjelaskan cara menjalankan, kontrol, hasil yang diharapkan, serta kendala yang diketahui.
- Perubahan signifikan pada source code dijelaskan dalam laporan singkat.

## Referensi Utama

1. Dokumentasi resmi WebGL, GLSL, Three.js, Blender, dan Unity.
2. Edward Angel dan Dave Shreiner, _Interactive Computer Graphics_.
3. Tomas Akenine-Möller, Eric Haines, Naty Hoffman, _Real-Time Rendering_.
4. Khronos glTF 2.0 Specification dan glTF Sample Assets.

## Catatan Penyimpanan

RPS ini disimpan sebagai Markdown di `rps/rps-grafika-komputer.md`, sehingga dapat dibaca offline, dilacak versinya, dan diedit tanpa database. Jika nantinya diperlukan editor RPS atau penyimpanan per pengguna, isi Markdown dapat di-cache ke IndexedDB; database server baru diperlukan jika RPS harus diedit dan disinkronkan oleh banyak pengguna.
