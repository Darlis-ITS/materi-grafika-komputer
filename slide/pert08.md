# Slide 00 — Cover

# EF234504 — Grafika Komputer

## UTS — Three.js Interactive 3D Project

**Laboratorium GIGA**

**Departemen Teknik Informatika - ITS**

---

# Slide 01 — Topik Pembahasan

- Tujuan dan bentuk UTS
- Ketentuan kelompok
- Orisinalitas project
- Requirement Three.js
- Requirement grafika komputer
- Gameplay, interaction, VFX, dan UI
- Asset 3D
- Struktur project
- Deliverable
- 10 pilihan topik
- Kriteria penilaian
- Milestone pengerjaan

---

# Slide 02 — Tema UTS

# Three.js Interactive 3D Project

Mahasiswa membuat **project 3D interaktif berbasis browser menggunakan Three.js**.

Project dapat berbentuk:

```text
A. Mini Game 3D
atau
B. Interactive 3D Application / Experience
```

Keduanya harus:
- dibuat sendiri oleh kelompok,
- memiliki tujuan atau pengalaman interaktif yang jelas,
- menggunakan visual 3D yang menarik,
- menunjukkan integrasi materi Pertemuan 1–7.

---

# Slide 03 — Integrasi Materi Pertemuan 1–7

```text
Computer Graphics Fundamentals
        ↓
WebGL
        ↓
Transformation
        ↓
Camera & Projection
        ↓
Shader, Lighting & Texture
        ↓
Three.js
        ↓
Interactive 3D Application
        ↓
UTS INTERACTIVE 3D PROJECT
```

---

# Slide 04 — Kompetensi yang Dinilai

Project harus memperlihatkan pemahaman terhadap:
- Scene dan Camera
- Geometry, Material, Mesh
- Scene Graph
- Parent-Child Transform
- PBR Material
- Lighting dan Shadow
- GLTF / GLB
- Animation
- Raycasting
- Interaction
- Environment Map / HDR
- VFX

---

# Slide 05 — Dua Bentuk Project UTS

Project UTS dibagi menjadi dua kategori.

## A. Mini Game 3D

Memiliki:
```text
Gameplay
Objective
Challenge
Progress
Win / Lose atau Failure State
Restart
```

## B. Interactive 3D Application / Experience

Memiliki:
```text
Interaction Flow
User Objective
Visual Feedback
Exploration / Configuration / Activation
Completion State atau Task Completion
```

**Interactive application tidak wajib memiliki menang–kalah.**

---

# Slide 06 — Ketentuan Kelompok

Jumlah anggota:

```text
Maksimal 3 mahasiswa
```

Semua anggota wajib:
- memahami struktur project,
- memahami rendering dan scene,
- memahami gameplay/interaction utama,
- berkontribusi pada implementasi teknis.

---

# Slide 07 — Pembagian Kerja yang Disarankan

| Anggota | Fokus |
|---|---|
| 1 | Scene, Camera, Asset, PBR, Lighting |
| 2 | Gameplay, Raycasting, Interaction, Game State |
| 3 | Animation, VFX, UI/HUD, Integrasi |

Pembagian ini hanya contoh; semua anggota tetap harus memahami keseluruhan project.

---

# Slide 08 — Ketentuan Orisinalitas

**Project wajib dibuat sendiri oleh kelompok.**

Wajib dibuat sendiri:
- source code,
- struktur scene,
- gameplay logic,
- interaction logic,
- animation logic,
- scene composition,
- UI/HUD,
- integration,
- VFX integration.

---

# Slide 09 — Yang Tidak Diperbolehkan

Tidak diperbolehkan:
- mengunduh project Three.js yang sudah jadi,
- fork game lengkap lalu mengganti asset,
- membeli template game dan memodifikasi,
- menyalin tutorial project secara utuh,
- menggunakan source code project lain sebagai basis utama.

Tutorial boleh digunakan untuk **belajar konsep**, bukan sebagai project final.

---

# Slide 10 — Asset Eksternal yang Diperbolehkan

Boleh menggunakan:
- model 3D,
- texture,
- HDRI,
- sound,
- icon,
- font.

Syarat:
1. lisensi memungkinkan,
2. sumber dicantumkan,
3. integrasi dilakukan sendiri,
4. asset bukan project game jadi.

---

# Slide 11 — Credit Asset

README wajib memiliki bagian:

```text
Asset Credits
```

Cantumkan:
- nama asset,
- pembuat,
- sumber,
- lisensi.

---

# Slide 12 — Teknologi Utama

Wajib:
```text
JavaScript
Three.js
HTML
CSS
```

Disarankan:
```text
Vite
npm
Git
```

Boleh memakai helper resmi Three.js seperti `GLTFLoader`, `RGBELoader`, `AnimationMixer`, dan kontrol camera bila relevan.

---

# Slide 13 — Struktur Project Berdasarkan Jenis

## Mini Game 3D

```text
START
  ↓
PLAY
  ↓
INTERACTION
  ↓
OBJECTIVE / CHALLENGE
  ↓
WIN / LOSE
  ↓
RESTART
```

## Interactive 3D Application

```text
START
  ↓
EXPLORE / INSPECT
  ↓
INTERACTION
  ↓
TASK / CONFIGURATION
  ↓
FEEDBACK
  ↓
COMPLETION
```

---

# Slide 14 — Requirement Scene

Wajib memiliki:
- 1 scene 3D utama,
- camera,
- renderer,
- ground/arena/environment,
- minimal 3 jenis object/asset,
- komposisi scene yang layak.

---

# Slide 15 — Requirement Scene Graph

Minimal satu hierarchy:

```text
Parent
├── Child A
└── Child B
```

Contoh:
- robot + weapon,
- spaceship + engine VFX,
- door + handle,
- army leader + formation group.

---

# Slide 16 — Requirement GLTF / GLB

Minimal:

```text
1 asset GLTF / GLB
```

Dapat berupa:
- player,
- enemy,
- vehicle,
- prop,
- robot,
- environment,
- artifact.

---

# Slide 17 — Requirement PBR Material

Minimal menggunakan `MeshStandardMaterial` atau material PBR setara.

Tunjukkan penggunaan:
- color / texture,
- roughness,
- metalness,
- lighting response.

---

# Slide 18 — Requirement Lighting

Minimal:
```text
1 Ambient/Hemisphere Light
+
1 Directional/Point/Spot Light
```

Lighting harus mendukung tema, bukan sekadar membuat object terlihat.

---

# Slide 19 — Requirement Shadow

Minimal:
- satu object `castShadow = true`,
- satu surface `receiveShadow = true`.

Gunakan shadow secara efektif dan tetap mempertimbangkan performa.

---

# Slide 20 — Requirement Environment

Wajib memiliki lingkungan yang sesuai:
- HDR environment,
- skybox,
- procedural stars,
- indoor scene,
- fog,
- background environment.

Environment harus memperkuat suasana game.

---

# Slide 21 — Requirement Animation

Minimal:

```text
2 jenis animation
```

Contoh:
- GLB animation,
- object movement,
- gate animation,
- enemy animation,
- procedural animation,
- VFX animation.

---

# Slide 22 — Requirement Interaction

Semua project wajib memiliki minimal:

```text
3 interaction
```

Contoh untuk **game**:
- move,
- attack,
- collect,
- choose gate,
- activate skill.

Contoh untuk **interactive application**:
- hover,
- select,
- inspect,
- configure material,
- activate panel,
- camera focus,
- open information.

---

# Slide 23 — Raycasting

Minimal satu interaction wajib memakai:

```text
THREE.Raycaster
```

Contoh:
- menembak meteor,
- memilih artifact,
- menekan panel,
- memilih object,
- mengaktifkan switch.

---

# Slide 24 — Feedback Visual

Interaction utama harus mempunyai feedback.

Contoh:
```text
Hover → highlight
Attack → flash/particle
Gate → emissive glow
Damage → color flash
Win → celebration VFX
```

---

# Slide 25 — Requirement VFX

Minimal:

```text
2 VFX
```

Contoh:
- particle,
- explosion,
- laser,
- glow,
- emissive pulse,
- hologram,
- smoke,
- spark,
- trail,
- portal.

---

# Slide 26 — Cara Membuat VFX

VFX dapat dibuat dengan:
- `THREE.Points`,
- Sprite,
- transparent plane,
- additive blending,
- animated texture,
- emissive material,
- custom `ShaderMaterial`,
- procedural animation.

---

# Slide 27 — Requirement Camera

Gunakan camera yang mendukung gameplay:
- follow camera,
- top-down,
- fixed strategic,
- first-person sederhana,
- orbit/focus,
- third-person style.

Camera harus menjadi bagian dari desain pengalaman game.

---

# Slide 28 — UI / HUD Minimum

Informasi UI disesuaikan dengan jenis project.

## Mini Game
Contoh:
- score,
- health,
- timer,
- progress,
- unit count,
- objective,
- game state.

## Interactive Application
Contoh:
- selected object,
- interaction instruction,
- configuration state,
- progress eksplorasi,
- information panel,
- task/completion status.

---

# Slide 29 — Objective dan Completion

Setiap project wajib memiliki **tujuan yang jelas**, tetapi bentuknya berbeda.

## Mini Game
Contoh:
```text
Boss defeated
Reach finish
Survive all waves
Escape successfully
```

## Interactive Application
Contoh:
```text
Aktifkan seluruh sistem
Periksa seluruh artifact
Selesaikan konfigurasi produk
Temukan seluruh informasi penting
```

Project tidak boleh hanya menjadi scene 3D yang dapat dilihat tanpa tujuan interaction.

---

# Slide 30 — Win/Lose atau Completion State

## Untuk Mini Game

Wajib memiliki:
```text
Win Condition
dan
Lose / Failure Condition
```

Contoh:
- HP = 0,
- timer habis,
- boss defeated,
- semua wave selesai.

## Untuk Interactive Application

Tidak wajib memiliki menang–kalah.

Wajib memiliki:
```text
Completion State
atau
Task Completion
```

Contoh:
- seluruh panel berhasil diaktifkan,
- seluruh artifact utama telah diperiksa,
- konfigurasi produk telah selesai.

---

# Slide 31 — Restart atau Reset

## Mini Game

Setelah:
```text
WIN / LOSE
```

harus tersedia:
```text
Restart
```

## Interactive Application

Sediakan reset bila relevan, misalnya:
- reset konfigurasi,
- reset interaction state,
- kembali ke initial view,
- mulai ulang exploration flow.

Tidak semua interactive application membutuhkan tombol restart game.

---

# Slide 32 — Performance Awareness

Perhatikan:
- polygon count,
- texture resolution,
- jumlah light,
- shadow map,
- particle count,
- jumlah object,
- raycast target.

Visual bagus tetap harus berjalan dengan lancar.

---

# Slide 33 — Struktur Project yang Disarankan

```text
src/
├── main.js
├── scene.js
├── game.js
├── player.js
├── interaction.js
├── animation.js
├── effects.js
└── ui.js

public/
├── models/
├── textures/
├── environments/
└── audio/
```

---

# Slide 34 — Topik 1 — Sci-Fi Control Room

Ruangan futuristik dengan panel, hologram, mesin, lampu, dan object interaktif.

**Jenis project:**
```text
Interactive 3D Application / Experience
```

**Tujuan interaction:** mengaktifkan sistem/terminal tertentu hingga control room mencapai **completion state**.

**Fokus grafika:**
```text
Emissive
PBR
Dynamic Lighting
Shadow
Raycasting
Animation
HDR / Environment Map
```

---

# Slide 35 — Topik 2 — Elemental Army Run

Pasukan Fire, Water, dan Electric melewati gate dan bertempur.

**Jenis project:**
```text
Mini Game 3D
```

**Tujuan gameplay:** membangun pasukan yang cukup kuat dan menyelesaikan final battle.

**Fokus grafika:**
```text
Elemental VFX
Particles
Emissive Gate
Animated Texture
Dynamic Lighting
PBR
Crowd Visualization
```

---

# Slide 36 — Topik 3 — Interactive Museum

Museum virtual dengan artifact yang dapat di-hover, dipilih, di-inspect, dan ditampilkan informasinya.

**Jenis project:**
```text
Interactive 3D Application / Experience
```

**Tujuan interaction:** mengeksplorasi dan membuka informasi seluruh artifact utama hingga **exhibition completion**.

**Fokus grafika:**
```text
GLTF/GLB
PBR
HDR
Raycasting
Camera Interaction
Shadow
Material Presentation
```

---

# Slide 37 — Topik 4 — Robot Swarm Factory

Swarm robot melewati multiplier gate, obstacle, upgrade, dan final battle.

**Jenis project:**
```text
Mini Game 3D
```

**Tujuan gameplay:** mempertahankan swarm dan menghancurkan reactor/boss.

**Fokus grafika:**
```text
Metallic PBR
Emissive Robot
HDR Reflection
Crowd Visualization
Particles
Animated Machinery
```

---

# Slide 38 — Topik 5 — Escape Room 3D

Player mencari clue dan menyelesaikan puzzle untuk keluar.

**Jenis project:**
```text
Mini Game / Interactive Puzzle Game
```

**Tujuan gameplay:** menyelesaikan puzzle dan membuka jalan keluar.

**Fokus grafika:**
```text
Raycasting
Scene Graph
Parent-Child Transform
Animation
Lighting
Shadow
GLB
```

---

# Slide 39 — Topik 6 — Space Fleet Multiplier

Armada spaceship melewati gate, asteroid, turret, lalu melawan mothership.

**Jenis project:**
```text
Mini Game 3D
```

**Tujuan gameplay:** mempertahankan fleet dan mengalahkan mothership.

**Fokus grafika:**
```text
HDR Space
Metallic PBR
Emissive Engine
Laser VFX
Explosion
Animated Effects
```

---

# Slide 40 — Topik 7 — Product Configurator 3D

Pengguna memilih bagian produk dan mengganti warna, material, atau komponen.

**Jenis project:**
```text
Interactive 3D Application / Experience
```

**Tujuan interaction:** menghasilkan konfigurasi produk yang dipilih pengguna dan menyelesaikan **configuration flow**.

**Fokus grafika:**
```text
PBR
Roughness
Metalness
HDR
Reflection
Raycasting
Camera Control
```

---

# Slide 41 — Topik 8 — Ninja Clone Rush

Ninja menghasilkan clone melalui gate lalu menghadapi enemy dan boss.

**Jenis project:**
```text
Mini Game 3D
```

**Tujuan gameplay:** membangun clone yang cukup kuat dan mengalahkan boss.

**Fokus grafika:**
```text
Clone Visualization
Animated GLB
Emissive Gate
Slash VFX
Shadow
Character Animation
Trail Effect
```

---

# Slide 42 — Topik 9 — Interactive Haunted House

Rumah gelap dengan pintu, object, lighting, dan horror event interaktif.

**Jenis project:**
```text
Interactive Experience
atau
Mini Game Exploration
```

Project dapat dipilih menjadi:
- experience eksplorasi tanpa lose state, atau
- game dengan objective escape/survival.

**Fokus grafika:**
```text
Atmospheric Lighting
Shadow
Fog
Emissive
Animated Light
GLB
Horror VFX
```

---

# Slide 43 — Topik 10 — Meteor Defense

Player mempertahankan planet atau station dari meteor.

**Jenis project:**
```text
Mini Game 3D
```

**Tujuan gameplay:** bertahan sampai seluruh wave selesai sebelum station hancur.

**Fokus grafika:**
```text
Raycasting
Explosion Particles
Emissive Projectile
HDR Space
Dynamic Lighting
VFX
```

---

# Slide 44 — Pemilihan Topik

Setiap kelompok:

```text
Pilih 1 dari 10 topik
```

Boleh mengubah:
- nama game,
- theme,
- asset,
- visual direction,
- detail mechanic.

Tetapi karakter utama topik dan fokus grafika harus tetap terlihat.

---

# Slide 45 — Interaction / Gameplay Flow

Setiap kelompok wajib membuat diagram alur sesuai jenis project.

## Mini Game

```text
START
 ↓
PLAYER ACTION
 ↓
CHALLENGE
 ↓
VISUAL FEEDBACK
 ↓
PROGRESS
 ↓
WIN / LOSE
```

## Interactive Application

```text
START
 ↓
EXPLORE / SELECT
 ↓
INTERACTION
 ↓
VISUAL FEEDBACK
 ↓
TASK / CONFIGURATION
 ↓
COMPLETION
```

---

# Slide 46 — Milestone 1 — Core Scene

Selesaikan:
- camera,
- renderer,
- environment,
- arena/level,
- scene graph,
- asset utama.

Target:
> scene sudah dapat dilihat dengan baik.

---

# Slide 47 — Milestone 2 — Core Interaction / Gameplay

Selesaikan komponen inti sesuai project.

## Mini Game
- input,
- gameplay mechanic,
- challenge,
- game state,
- win/lose.

## Interactive Application
- selection,
- raycasting,
- interaction flow,
- task/configuration state,
- completion state.

Target:
> project sudah dapat digunakan sesuai tujuan utamanya.

---

# Slide 48 — Milestone 3 — Visual Integration

Tambahkan:
- PBR,
- lighting,
- HDR/environment,
- shadow,
- animation,
- VFX.

Target:
> game memiliki kualitas visual yang layak.

---

# Slide 49 — Milestone 4 — Polish

Tambahkan:
- HUD / information UI,
- start state,
- completion atau win/lose state,
- reset/restart bila relevan,
- visual feedback,
- asset credit,
- performance check.

---

# Slide 50 — Deliverable

Setiap kelompok mengumpulkan:
1. Source code.
2. README.
3. Video demo.
4. Screenshot utama.
5. Daftar asset eksternal.
6. Repository link bila digunakan.
7. Build/deployment bila diminta.

---

# Slide 51 — Video Demo

Video harus menunjukkan:

```text
Opening
→ Scene
→ Interaction / Gameplay
→ Graphics Features
→ Objective
→ Completion atau Win/Lose
```

Semua anggota harus berkontribusi dalam penjelasan.

---

# Slide 52 — README

README minimal berisi:
- nama game,
- anggota,
- deskripsi,
- gameplay,
- control,
- graphics features,
- asset credits,
- struktur project,
- cara menjalankan,
- challenge,
- pembagian kontribusi.

---

# Slide 53 — Fitur Grafika yang Harus Ditunjukkan Saat Demo

Kelompok harus dapat menunjukkan dan menjelaskan:
```text
PBR
Lighting
Shadow
Animation
Raycasting
Environment
VFX
Scene Graph
```

---

# Slide 54 — Kriteria Penilaian

| Komponen | Bobot |
|---|---:|
| Implementasi Grafika Komputer | 30% |
| Interaction / Gameplay / Experience | 20% |
| Visual Quality & VFX | 20% |
| Technical Implementation | 15% |
| Originality & Integration | 10% |
| Demo & Pemahaman Tim | 5% |
| **Total** | **100%** |

---

# Slide 55 — Implementasi Grafika Komputer — 30%

Dinilai dari:
- scene graph,
- transform,
- PBR,
- lighting,
- shadow,
- GLB,
- animation,
- raycasting,
- environment.

---

# Slide 56 — Interaction / Gameplay / Experience — 20%

Dinilai sesuai jenis project.

## Mini Game
- gameplay loop,
- control,
- challenge,
- feedback,
- progression,
- win/lose,
- playability.

## Interactive Application
- interaction flow,
- usability,
- response/feedback,
- exploration/configuration,
- objective,
- completion state.

---

# Slide 57 — Visual Quality & VFX — 20%

Dinilai dari:
- scene composition,
- material,
- lighting,
- environment,
- VFX,
- konsistensi visual.

---

# Slide 58 — Technical Implementation — 15%

Dinilai dari:
- modularity,
- code clarity,
- asset loading,
- state management,
- debugging,
- performance awareness.

---

# Slide 59 — Originality & Integration — 10%

Dinilai dari:
- project dibuat sendiri,
- bukan hasil modifikasi project jadi,
- integrasi original,
- interpretasi topik,
- kreativitas implementasi.

---

# Slide 60 — Demo & Pemahaman Tim — 5%

Setiap anggota harus mampu menjelaskan:
- bagian yang dikerjakan,
- alur fitur utama,
- konsep grafika yang digunakan,
- kendala teknis dan solusinya.

---

# Slide 61 — Checklist Akhir

Pastikan:

```text
Project berjalan
Asset tidak missing
Console tidak penuh error
Interaction bekerja
Objective jelas
Completion atau Win/Lose bekerja
Shadow terlihat
VFX bekerja
README lengkap
Credits lengkap
```

---

# Slide 62 — Target Hasil Akhir

Project yang baik bukan harus game yang paling kompleks.

Project yang baik adalah:

```text
Interactive
+
Purposeful
+
Original
+
Well Integrated
+
Visually Strong
+
Technically Clear
```

Untuk game: **playable**.  
Untuk interactive application: **usable dan memiliki completion flow yang jelas**.

---

# Slide 63 — TERIMA KASIH

# TERIMA KASIH

**Grafika Komputer — UTS**

Three.js Interactive 3D Project

## Materi Selanjutnya

### Blender Fundamental & 3D Modeling
