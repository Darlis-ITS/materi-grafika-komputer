# Praktikum 7 — Three.js Interactive 3D Application

Output ini mengerjakan milestone, eksperimen wajib, tugas utama, dan challenge A–H dari modul Praktikum 7. Buka `index.html` melalui tab **Output** pada aplikasi pembelajaran.

## Cara menjalankan

```bash
npm install
npm run dev -- --port 3400
```

Output ini menggunakan Three.js dan `GLTFLoader`. HTML, JavaScript, dan CSS dipisahkan agar mudah dibaca dan dimodifikasi.

Output juga dapat dibuka melalui **Live Server** di VS Code. Gunakan server HTTP,
bukan membuka `index.html` langsung melalui `file://`, agar ES module dan `Duck.glb`
dapat dimuat. Import map di HTML memetakan `"three"` dan `"three/addons/"` ke
Three.js versi `0.185.1` di jsDelivr; koneksi internet diperlukan saat menggunakan
server statis.

## Panorama, kaca, silver, dan bloom

- **Panorama (P)** menyalakan/mematikan latar 360?. **Refleksi (E)** mengatur `scene.environment` secara terpisah, sehingga silver tetap reflektif ketika latar dimatikan.
- **Bloom** menyalakan/mematikan halo cahaya. Sphere kuning pada hierarchy dan Sun memakai emissive kuning dengan intensitas 5 serta point light. Hover/selection tidak mengganti emisi keduanya.
- Kubus parent menggunakan `MeshPhysicalMaterial`, `transmission: 0.95`, `thickness: 1.4`, `ior: 1.45`, dan `roughness: 0.08` untuk kaca transparan/refraktif. `opacity: 1` disengaja karena transparansi kaca diatur melalui transmission. Shadow kubus dimatikan karena shadow map biasa tidak memodelkan transmisi kaca.
- Sphere besar di kanan depan menggunakan warna silver, `metalness: 1`, `roughness: 0.08`, dan refleksi HDR yang diproses dengan PMREM. Slider gallery tidak mengubah material silver/kaca.
- Refleksi ini berbasis panorama studio statis: objek lokal yang bergerak tidak ikut terpantul. Ini bukan ray tracing atau refleksi dinamis menggunakan CubeCamera.
- Reset (R) mengaktifkan kembali panorama, refleksi, dan bloom, serta membersihkan highlight/scale interaksi.

### Rekomendasi format panorama

| Format | Kapan digunakan |
| --- | --- |
| **Equirectangular / spherical HDR (dipakai)** | Satu gambar 2:1 untuk latar 360? dan pencahayaan/refleksi PBR; mudah dimuat dan diganti. HDR menyimpan rentang intensitas cahaya untuk refleksi metal yang lebih realistis. |
| Cubemap / skybox enam sisi | Cocok jika aset sudah tersedia sebagai enam gambar `px, nx, py, ny, pz, nz`; perlu memastikan orientasi dan sambungan antar-sisi. Dapat dimuat dengan `CubeTextureLoader`. |

Skybox adalah cara menampilkan lingkungan, sedangkan cubemap dan equirectangular adalah format pemetaannya. Equirectangular juga dapat menjadi latar skybox di Three.js.

Aset lokal: `assets/studio_small_09_1k.hdr` (sekitar 1.54 MiB), **Studio Small 09** oleh **Sergej Majboroda**, dari [Poly Haven](https://polyhaven.com/a/studio_small_09), lisensi **CC0**. Pilihan studio memberi pola softbox yang jelas pada silver dan kaca. Resolusi 1K ringan untuk praktikum; gunakan 2K/4K jika detail latar lebih penting. Lihat `assets/README.md` untuk sumber unduhan.

`HDRLoader` memuat aset lokal; `PMREMGenerator` menyiapkan refleksi sesuai roughness. Jika HDR gagal dimuat, panorama procedural tetap tersedia dan panel menampilkan status fallback. Rangkaian postprocessing: `RenderPass -> UnrealBloomPass -> OutputPass`, dengan ACES tone mapping. Bloom memakai threshold 3 untuk terutama menangkap emisi HDR; highlight HDR lain yang sangat terang juga dapat berpendar.

Referensi: [HDRLoader](https://threejs.org/docs/pages/HDRLoader.html), [PMREMGenerator](https://threejs.org/docs/pages/PMREMGenerator.html), [OutputPass](https://threejs.org/docs/pages/OutputPass.html).

## Parameter control

| Parameter OrbitControls | Fungsi / nilai awal |
| --- | --- |
| Aktifkan kontrol kamera | Mengaktifkan input orbit, zoom, dan pan; awal aktif |
| Izinkan pan | Mengizinkan drag kanan menggeser kamera dan target; awal aktif |
| Damping | Memperhalus gerakan setelah input berhenti; awal aktif |
| Damping factor | 0.01–0.25; awal 0.05. Nilai lebih besar membuat gerakan berhenti lebih cepat |
| Camera rotate speed | 0.1–3; awal 1.00. Mengatur sensitivitas drag orbit kamera |
| Camera zoom speed | 0.1–3; awal 1.00. Mengatur sensitivitas scroll zoom |

Pengaturan langsung diterapkan dan dipertahankan ketika berganti kamera.
Damping factor hanya dapat diubah saat Damping aktif. Reset (R) mengembalikan
semua parameter OrbitControls ke nilai awal.

| Kontrol                      | Fungsi                                                                                                                                 |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Drag tombol kiri | Orbit kamera mengelilingi target. |
| Scroll mouse | Zoom mendekat atau menjauh. |
| Drag tombol kanan | Pan kamera beserta target. |
| Active camera                | Memilih Perspective Camera atau Orthographic Camera.                                                                                   |
| Camera FOV                   | Mengatur field of view kamera perspektif, 25–100 derajat.                                                                              |
| Roughness                    | Mengubah kekasaran material PBR pada gallery sphere. Nilai kecil menghasilkan highlight tajam; nilai besar lebih diffuse.              |
| Metalness                    | Mengubah karakter non-metal hingga metal. Material metal sangat bergantung pada environment untuk memperoleh refleksi yang masuk akal. |
| Orbit speed                  | Mengatur kecepatan rotasi hierarchy tata surya dan orbit lampu.                                                                        |
| Environment (E)              | Membandingkan `scene.environment` aktif dan nonaktif.                                                                                  |
| Reset (R)                    | Mengembalikan kamera, environment, selection, hierarchy, dan solar animation.                                                                  |
| Clip 1/2/3 atau tombol 1/2/3 | Mengganti `AnimationAction` jika GLB menyediakan beberapa clip.                                                                        |
| Solar (S)                    | Pause/resume parent-child hierarchy Sun–Earth–Moon.                                                                                    |

Interaksi mouse menggunakan `pointermove` untuk hover dan `click` untuk selection. Hover memberi emissive dan scale 1.06. Selection disimpan terpisah, memberi scale 1.12, rotasi berkelanjutan, dan mengisi panel informasi.

## OrbitControls — navigasi dan selection

OrbitControls dipakai untuk menjelajahi scene dan model GLB. Drag kiri melakukan
orbit kamera, scroll mengatur zoom, dan drag kanan melakukan pan. Klik kiri tanpa
drag memilih objek dan memperbarui panel informasi. Slider Orbit speed mengatur
animasi hierarchy tata surya dan lampu; navigasi kamera memakai mouse.

Kontrol diimpor dari `three/addons/controls/OrbitControls.js`, menggunakan kamera
aktif dan `renderer.domElement`, dengan target awal `(0, 1, 0)`.
`enableDamping = true` memperhalus gerakan; `controls.update()` dipanggil sebelum
`composer.render()` pada setiap frame.

| Pengaturan | Nilai dan fungsi |
| --- | --- |
| `minDistance / maxDistance` | 3 / 25, batas jarak PerspectiveCamera dari target |
| `minZoom / maxZoom` | 0.5 / 3, batas zoom OrthographicCamera |
| `maxPolarAngle` | `Math.PI / 2 - 0.05`, batas orbit mendekati 90 derajat |

Batas polar berlaku terhadap target; pan masih dapat menggeser target sehingga
pengaturan ini tidak menjamin posisi kamera selalu di atas ground.

Pergantian kamera mempertahankan posisi dan target, membuat ulang OrbitControls,
dan memperbarui `renderPass.camera`. Reset (R) mengembalikan PerspectiveCamera ke
`(7.5, 5.2, 9.5)`, target awal, FOV 52, dan zoom 1.

Untuk mencegah selection setelah orbit/pan, posisi pointer dicatat sejak
`pointerdown`. Gerakan lebih dari 5 piksel dianggap drag, termasuk ketika pointer
kembali ke titik awal. Event `click` setelah drag diabaikan; hover ditangguhkan
selama pointer ditekan. `pointercancel` membatalkan gesture dan klik berikutnya
dapat digunakan kembali untuk selection.

**Coba:** klik objek untuk memilih, drag melewati objek lain, lalu pastikan
selection tetap sama. Uji zoom pada kedua mode kamera dan tekan R untuk
mengembalikan tampilan awal.

## Komponen teknis yang diimplementasikan

### Scene dan renderer

Scene, `PerspectiveCamera`, `OrthographicCamera`, `WebGLRenderer`, resize responsif, `HemisphereLight`, `DirectionalLight`, `PointLight`, ground, shadow map, dan animation loop tersedia pada `main.js`. Frame time berasal dari `THREE.Clock.getDelta()` sehingga rotasi tidak bergantung pada jumlah frame.

### Scene graph dan local/world transform

`hierarchyGroup` berisi `parentMesh` dan `childMesh`. Child memakai posisi lokal `(1, 0.9, 0)` dan mengikuti rotasi parent. Panel selection menampilkan posisi lokal dan hasil `getWorldPosition()`. Karena:

```text
childWorldMatrix = parentWorldMatrix × childLocalMatrix
```

posisi lokal child tidak berubah ketika parent dirotasi, tetapi posisi world child berubah.

Challenge D memakai hierarchy lain:

```text
Solar System
└── Earth Orbit
    └── Earth
        └── Moon Orbit
            └── Moon
```

Orbit dihitung oleh transform parent, bukan dengan menghitung semua world position secara manual.

### PBR material dan gallery

Prototype menggunakan `MeshStandardMaterial` dengan `roughness` dan `metalness`. Gallery berisi kombinasi tiga tingkat roughness dan tiga tingkat metalness. Slider memungkinkan mahasiswa menguji parameter secara langsung. Challenge E terpenuhi melalui gallery ini.

### GLB, hierarchy, texture, dan animation

`GLTFLoader` memuat `Duck.glb` secara asynchronous. Setelah berhasil dimuat, `gltf.scene` diberi transform, setiap descendant diperiksa dengan `traverse()`, dan seluruh mesh diberi `castShadow` serta `receiveShadow`. Panel HUD menampilkan jumlah clip. Jika tersedia clip, `AnimationMixer`, `clipAction()`, `fadeIn()`, `fadeOut()`, `play()`, dan `mixer.update(delta)` digunakan. Jika asset tidak menyediakan clip, prototype membuat tiga clip demonstrasi (`Idle`, `Walk`, `Run`) pada root model agar pergantian action tetap dapat dipelajari tanpa mengubah file GLB.

Challenge A dan B tersedia melalui tombol/keyboard pemilih clip dan click pada model. Clip fallback hanya memutar root untuk demonstrasi konsep `AnimationMixer`; asset karakter dengan animasi tulang tetap disarankan untuk hasil produksi.

### Raycasting, pointer NDC, hover, dan click

Koordinat pointer dikonversi ke NDC:

```javascript
pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;
raycaster.setFromCamera(pointer, activeCamera);
raycaster.intersectObjects(interactiveObjects, true);
```

Argumen `true` penting karena mesh GLB sering berada sebagai descendant dari root model. `objectRoot()` mengembalikan root interaktif agar child mesh tidak menghasilkan selection terpisah. Hover state bersifat sementara, sedangkan selected state bersifat persisten. Ini memenuhi eksperimen recursive raycast, hover vs click, pointer coordinate, dan feedback visual.

Challenge F menyimpan warna emissive asli pada `material.userData.originalEmissive`, lalu memberi highlight warm amber (`#d88945`) saat hover, sehingga material tidak diubah secara destruktif. Challenge G memutar object terpilih berbasis delta time. Challenge C menampilkan name, local/world position, rotation, scale, dan material type pada selection information panel.

### Environment dan Bloom

Prototype memuat panorama HDR lokal untuk background dan environment; CanvasTexture menjadi fallback jika pemuatan gagal. Challenge H dapat diuji dengan tombol **Environment (E)**. Saat OFF, material PBR kehilangan kontribusi refleksi environment sehingga perbedaan material metal lebih mudah diamati.

Rendering menggunakan `EffectComposer`, `RenderPass`, `UnrealBloomPass`, dan `OutputPass`. Bloom aktif secara permanen pada emisi sphere kuning dan dapat di-toggle melalui panel. Hover memberi highlight pada material lain tanpa memadamkan emisi sphere kuning.

## GLB bertekstur yang digunakan

File `Duck.glb` disertakan langsung di folder output. Sumbernya adalah sample asset resmi Khronos:

```text
https://github.com/KhronosGroup/glTF-Sample-Assets/tree/main/Models/Duck
```

URL unduhan yang dipakai:

```text
https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/Duck/glTF-Binary/Duck.glb
```

GLB cocok untuk distribusi offline karena mesh, buffer, dan texture yang dibutuhkan dapat dikemas ke dalam satu binary container. Tetap sertakan atribusi/license dari direktori asset ketika output dipublikasikan. Jika dosen memberikan model lain, ganti `Duck.glb` dengan file GLB tersebut dan pertahankan nama file atau ubah `modelUrl` pada `main.js`.

## Checklist tugas dan challenge

- [x] Scene, camera, renderer, lighting, ground, shadow, dan resize responsif.
- [x] `THREE.Group`, parent-child, local transform, world transform, dan solar hierarchy.
- [x] PBR StandardMaterial, roughness, metalness, dan material gallery.
- [x] GLB asynchronous loading, `GLTFLoader`, `traverse()`, shadow, HUD status, dan fallback.
- [x] AnimationMixer, action switching 1/2/3, click animation, dan delta-time update jika clip tersedia.
- [x] Raycaster, pointer NDC, recursive intersection, hover, click, selection state, dan feedback.
- [x] Environment toggle serta perbandingan material dengan/tanpa environment.
- [x] Challenge A: multiple animation clips.
- [x] Challenge B: click menjalankan animation.
- [x] Challenge C: information panel.
- [x] Challenge D: hierarchical solar system.
- [x] Challenge E: PBR material gallery.
- [x] Challenge F: hover emissive dengan penyimpanan state material.
- [x] Challenge G: selection rotation berbasis delta time.
- [x] Challenge H: environment toggle.

## Catatan offline

Selama `Duck.glb` tetap berada di folder yang sama dengan `index.html` dan dijalankan melalui Vite, output dapat digunakan tanpa database. Browser tetap membutuhkan origin HTTP untuk module JavaScript dan loader asset; membuka HTML dengan `file://` secara langsung dapat diblokir oleh kebijakan keamanan browser. Aplikasi utama sudah menjalankan output ini melalui Vite pada port 3400.
