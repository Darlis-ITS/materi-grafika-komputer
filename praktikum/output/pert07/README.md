# Praktikum 7 — Three.js Interactive 3D Application

Output ini mengerjakan milestone, eksperimen wajib, tugas utama, dan challenge A–H dari modul Praktikum 7. Buka `index.html` melalui tab **Output** pada aplikasi pembelajaran.

## Cara menjalankan

```bash
npm install
npm run dev -- --port 3400
```

Output ini menggunakan Three.js dan `GLTFLoader`. HTML, JavaScript, dan CSS dipisahkan agar mudah dibaca dan dimodifikasi.

## Parameter control

| Kontrol                      | Fungsi                                                                                                                                 |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Active camera                | Memilih Perspective Camera atau Orthographic Camera.                                                                                   |
| Camera FOV                   | Mengatur field of view kamera perspektif, 25–100 derajat.                                                                              |
| Roughness                    | Mengubah kekasaran material PBR pada gallery sphere. Nilai kecil menghasilkan highlight tajam; nilai besar lebih diffuse.              |
| Metalness                    | Mengubah karakter non-metal hingga metal. Material metal sangat bergantung pada environment untuk memperoleh refleksi yang masuk akal. |
| Orbit speed                  | Mengatur kecepatan rotasi hierarchy tata surya dan orbit lampu.                                                                        |
| Environment (E)              | Membandingkan `scene.environment` aktif dan nonaktif.                                                                                  |
| Reset (R)                    | Mengembalikan environment, selection, hierarchy, dan solar animation.                                                                  |
| Clip 1/2/3 atau tombol 1/2/3 | Mengganti `AnimationAction` jika GLB menyediakan beberapa clip.                                                                        |
| Solar (S)                    | Pause/resume parent-child hierarchy Sun–Earth–Moon.                                                                                    |

Interaksi mouse menggunakan `pointermove` untuk hover dan `click` untuk selection. Hover memberi emissive dan scale 1.06. Selection disimpan terpisah, memberi scale 1.12, rotasi berkelanjutan, dan mengisi panel informasi.

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

Prototype membuat environment equirectangular sederhana menggunakan CanvasTexture sehingga tidak membutuhkan file HDR eksternal. Texture dipakai pada `scene.environment`, bukan hanya sebagai background. Challenge H dapat diuji dengan tombol **Environment (E)**. Saat OFF, material PBR kehilangan kontribusi refleksi environment sehingga perbedaan material metal lebih mudah diamati.

Rendering menggunakan `EffectComposer`, `RenderPass`, dan `UnrealBloomPass`. Saat hover, material diberi emissive hijau tosca dengan intensitas tinggi sehingga cahaya menyebar ke area sekitarnya. Background dan environment dibuat lebih gelap agar bloom dan feedback hover lebih kontras.

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
