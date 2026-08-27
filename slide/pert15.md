# Grafika Komputer — Pertemuan 15
## VFX, Particle & Graphics Optimization

---

# Slide 00 — Cover

EF234504 — Grafika Komputer

## Pertemuan 15

# VFX, Particle & Graphics Optimization

**Laboratorium GIGA**

**Departemen Teknik Informatika - ITS**

---

# Slide 01 — Topik Pembahasan

Pada pertemuan ini kita membahas:

1. **Visual Effects pada Real-Time Graphics**
2. **Particle System**
3. **Emitter, Lifetime, Velocity, Size, dan Color**
4. **Noise, Collision, dan Trail**
5. **VFX Graph sebagai pengantar**
6. **Profiling dan Frame Budget**
7. **Triangle Count dan Draw Call**
8. **Batching, LOD, dan Occlusion**
9. **Texture Resolution dan Shader Complexity**
10. **Praktikum: VFX + Profiling + Optimization**

---

# Slide 02 — Capaian Pembelajaran Pertemuan

Setelah mengikuti pertemuan ini, mahasiswa diharapkan mampu:

- menjelaskan fungsi visual effect dalam real-time graphics,
- membuat particle effect sederhana,
- mengatur emitter, lifetime, velocity, size, dan color,
- menggunakan noise, collision, dan trail,
- memahami konsep dasar VFX Graph,
- membaca statistik rendering dasar,
- memahami frame budget,
- menjelaskan pengaruh triangle count dan draw call,
- memahami batching, LOD, occlusion, texture resolution, dan shader complexity,
- melakukan proses optimization secara terukur.

---

# Slide 03 — Posisi Pertemuan 15

```text
P12
Unity + URP
   ↓
P13
Lighting + Material + Post FX
   ↓
P14
Shader Graph
   ↓
P15
VFX + PARTICLE + OPTIMIZATION
   ↓
P16
UAS
```

Pertemuan 15 mempunyai dua tujuan:

```text
Enhance Visual
+
Control Performance
```

---

# Slide 04 — Mengapa VFX Penting?

VFX membantu menyampaikan:

- aksi,
- impact,
- status,
- energi,
- lingkungan,
- feedback visual,
- suasana.

Contoh:

- api,
- asap,
- debu,
- spark,
- magic,
- explosion,
- rain,
- energy burst.

---

# Slide 05 — VFX Bukan Sekadar Dekorasi

VFX yang baik membantu pengguna memahami:

```text
Apa yang terjadi?
Di mana terjadi?
Seberapa kuat?
Berapa lama?
Apa hasilnya?
```

Visual effect sebaiknya mempunyai:

> **fungsi visual atau gameplay yang jelas.**

---

# Slide 06 — Tiga Sumber Visual Effect

Dalam Unity, visual effect dapat berasal dari:

1. **Particle System**
2. **Shader / Shader Graph**
3. **VFX Graph**

Sering kali satu effect menggunakan kombinasi beberapa sistem.

---

# Slide 07 — Particle System

Particle System menghasilkan banyak elemen visual kecil secara dinamis.

Setiap particle dapat memiliki:

- position,
- velocity,
- lifetime,
- size,
- color,
- rotation.

---

# Slide 08 — Konsep Particle

```text
Emitter
   ↓
Spawn Particle
   ↓
Update Particle
   ↓
Move / Change
   ↓
Render
   ↓
Lifetime End
```

Setiap particle mempunyai siklus hidup.

---

# Slide 09 — Emitter

Emitter adalah sumber particle.

Emitter menentukan:

- dari mana particle muncul,
- bagaimana arah awal,
- berapa banyak particle,
- bentuk area spawn.

---

# Slide 10 — Emission Rate

Emission Rate menentukan jumlah particle yang dibuat.

Contoh:

```text
10 particles/sec
50 particles/sec
100 particles/sec
```

Semakin banyak particle:

> visual bisa lebih padat, tetapi cost juga meningkat.

---

# Slide 11 — Burst

Burst menghasilkan sejumlah particle pada satu waktu.

Cocok untuk:

- impact,
- explosion,
- hit effect,
- magic cast,
- muzzle flash.

Konsep:

```text
Event
→ Burst
→ Many Particles
```

---

# Slide 12 — Lifetime

Lifetime menentukan berapa lama particle hidup.

```text
Spawn
 ↓
Age
 ↓
Lifetime End
 ↓
Disappear
```

Lifetime panjang berarti:

> lebih banyak particle dapat aktif bersamaan.

---

# Slide 13 — Velocity

Velocity menentukan arah dan kecepatan gerak particle.

Secara konseptual:

```text
Position(t+1)
=
Position(t)
+
Velocity × dt
```

---

# Slide 14 — Size over Lifetime

Particle dapat berubah ukuran selama hidup.

Contoh:

```text
0
 ↓
grow
 ↓
peak
 ↓
shrink
 ↓
0
```

Cocok untuk:

- smoke,
- fire,
- energy pulse.

---

# Slide 15 — Color over Lifetime

Color dapat berubah selama particle hidup.

Contoh api:

```text
Yellow
 ↓
Orange
 ↓
Red
 ↓
Transparent
```

---

# Slide 16 — Shape Module

Shape menentukan distribusi spawn.

Contoh:

- Sphere,
- Cone,
- Box,
- Circle,
- Edge,
- Mesh.

Pilih berdasarkan sumber effect.

---

# Slide 17 — Noise

Noise membuat pergerakan particle menjadi tidak terlalu linear.

Cocok untuk:

- smoke,
- magic,
- fog,
- dust,
- flame.

Noise menambahkan:

> variasi dan turbulensi.

---

# Slide 18 — Collision

Particle dapat berinteraksi dengan collider atau environment tertentu.

Contoh:

- rain mengenai ground,
- spark memantul,
- debris berhenti.

Collision dapat meningkatkan:

> realism sekaligus cost.

---

# Slide 19 — Trail

Trail menghasilkan jejak di belakang particle.

Cocok untuk:

- projectile,
- magic,
- sparks,
- fast-moving energy.

Trail yang terlalu panjang dapat meningkatkan:

> visual clutter dan overdraw.

---

# Slide 20 — Additive vs Alpha Blend

## Additive

Cocok untuk:

- glow,
- spark,
- energy,
- fire-like bright effect.

## Alpha Blend

Cocok untuk:

- smoke,
- fog,
- dust.

Pemilihan blending memengaruhi:

- visual,
- overdraw,
- sorting.

---

# Slide 21 — Overdraw

Overdraw terjadi ketika banyak transparent layer menimpa pixel yang sama.

Contoh:

```text
Particle A
+
Particle B
+
Particle C
+
Particle D
```

semuanya dirender pada area layar yang sama.

---

# Slide 22 — VFX Graph

VFX Graph adalah sistem node-based untuk membuat efek visual dalam skala lebih besar.

Konsep:

```text
Spawn
 ↓
Initialize
 ↓
Update
 ↓
Output
```

---

# Slide 23 — Particle System vs VFX Graph

## Particle System

Cocok untuk:

- effect sederhana,
- workflow cepat,
- skala kecil-menengah.

## VFX Graph

Cocok untuk:

- effect lebih kompleks,
- jumlah particle besar,
- workflow GPU-oriented.

Pada pertemuan ini VFX Graph hanya dikenalkan sebagai konsep.

---

# Slide 24 — VFX dan Shader Graph

VFX dapat menggunakan material/shader custom.

Contoh:

```text
Particle
+
Shader Graph
=
Custom Visual Effect
```

Ini menghubungkan materi:

> Pertemuan 14 dan Pertemuan 15.

---

# Slide 25 — Prinsip VFX yang Baik

VFX sebaiknya:

- mudah dibaca,
- tidak menutupi gameplay,
- konsisten dengan style,
- memiliki timing jelas,
- tidak terlalu banyak,
- sesuai performance budget.

---

# Slide 26 — Timing

Timing effect menentukan kesan impact.

Contoh sederhana:

```text
Anticipation
 ↓
Burst
 ↓
Peak
 ↓
Decay
```

Effect yang terlalu lama dapat terasa:

- lambat,
- mengganggu,
- tidak responsif.

---

# Slide 27 — Layering

Effect kompleks dapat terdiri dari beberapa layer.

Contoh explosion:

```text
Flash
+
Core Burst
+
Smoke
+
Sparks
+
Debris
```

Jangan menambah layer tanpa tujuan.

---

# Slide 28 — Visual Hierarchy

Tidak semua particle harus sama terang.

Gunakan hierarchy:

```text
Primary Effect
   ↓
Secondary Detail
   ↓
Ambient Detail
```

Tujuan:

> menjaga focal point.

---

# Slide 29 — Optimization

Optimization adalah proses membuat aplikasi:

- tetap terlihat baik,
- berjalan efisien,
- memenuhi target hardware.

Optimization bukan:

> membuat semua setting serendah mungkin.

---

# Slide 30 — Frame Time

Hubungan:

```text
Frame Time
=
1000 ms / FPS
```

Contoh:

```text
30 FPS ≈ 33.3 ms
60 FPS ≈ 16.7 ms
120 FPS ≈ 8.3 ms
```

---

# Slide 31 — Frame Budget

Pada 60 FPS:

```text
Total frame budget
≈ 16.7 ms
```

Dalam waktu itu sistem harus menangani:

- CPU logic,
- physics,
- animation,
- rendering,
- UI,
- audio,
- dan proses lain.

---

# Slide 32 — CPU vs GPU

Masalah performa dapat berasal dari:

## CPU

- terlalu banyak object,
- scripting,
- draw submission,
- physics.

## GPU

- shader kompleks,
- overdraw,
- resolusi tinggi,
- shadow,
- post-processing.

---

# Slide 33 — Profiler

Profiler digunakan untuk menganalisis performa lebih detail.

Kategori dapat mencakup:

- CPU,
- rendering,
- memory,
- physics,
- scripts,
- dan subsistem lain.

---

# Slide 34 — Profiling Workflow

```text
Create Baseline
      ↓
Run Representative Scene
      ↓
Record Metrics
      ↓
Change One Variable
      ↓
Measure Again
      ↓
Compare
```

---

# Slide 35 — Triangle Count

Mesh 3D terdiri dari triangle.

Triangle count yang terlalu tinggi dapat meningkatkan cost.

Namun:

> triangle count bukan satu-satunya faktor performa.

---

# Slide 36 — Draw Call

Draw call adalah perintah untuk menggambar geometry dengan state tertentu.

Banyak object + banyak material dapat meningkatkan:

> draw call / batches.

---

# Slide 37 — Batching

Batching bertujuan mengurangi overhead pengiriman draw command.

Konsep:

```text
Many Similar Objects
      ↓
More Efficient Submission
```

Unity mempunyai beberapa mekanisme batching.

---

# Slide 38 — GPU Instancing

Instancing cocok untuk:

> banyak object dengan mesh/material yang sama.

Contoh:

- grass,
- rocks,
- props,
- repeated environment objects.

---

# Slide 39 — LOD

LOD = Level of Detail.

Object jauh tidak selalu membutuhkan geometry sedetail object dekat.

```text
Near
→ High Detail

Medium
→ Medium Detail

Far
→ Low Detail
```

---

# Slide 40 — Occlusion Culling

Occlusion Culling menghindari rendering object yang tertutup object lain.

Contoh:

```text
Camera
 ↓
Wall
 ↓
Hidden Object
```

Hidden object tidak perlu selalu dirender.

---

# Slide 41 — Texture Resolution

Texture besar menggunakan:

- memory lebih banyak,
- bandwidth lebih besar,
- loading lebih berat.

Tidak semua object membutuhkan texture:

```text
4K
```

---

# Slide 42 — Mipmaps

Mipmaps menyimpan versi texture beresolusi lebih kecil.

Object jauh menggunakan mip level lebih kecil.

Keuntungan:

- filtering lebih baik,
- dapat mengurangi aliasing,
- akses texture lebih efisien.

---

# Slide 43 — Shader Complexity

Shader kompleks dapat menggunakan banyak:

- texture sample,
- math operation,
- branch,
- transparency,
- lighting calculation.

Fragment shader yang berat:

> sangat terasa pada area layar besar.

---

# Slide 44 — Shadow Cost

Shadow dapat membutuhkan render tambahan.

Cost dipengaruhi:

- jumlah light,
- shadow resolution,
- shadow distance,
- jumlah caster,
- cascades/settings.

Shadow harus digunakan:

> sesuai kebutuhan visual.

---

# Slide 45 — Optimization Priority

Prioritas umum:

```text
1. Fix major bottleneck
2. Reduce unnecessary work
3. Optimize expensive features
4. Re-measure
5. Preserve visual quality
```

---

# Slide 46 — Jangan Optimize Terlalu Dini

Sebelum melakukan optimization besar:

- pastikan scene representative,
- fitur utama sudah ada,
- masalah dapat diukur.

Tetapi:

> kebiasaan membuat asset efisien harus dimulai sejak awal.

---

# Slide 47 — Praktikum: VFX + Optimization

Mahasiswa akan:

- membuat minimal 2 particle effect,
- mengintegrasikan satu shader dari Pertemuan 14,
- membuat effect berbasis emission,
- mengukur baseline,
- melakukan beberapa perubahan optimization,
- membandingkan hasil sebelum dan sesudah.

Detail lengkap ada pada modul praktikum.

---

# Slide 48 — Rencana Praktikum

```text
1. Build Burst VFX
2. Build Ambient VFX
3. Integrate Shader P14
4. Capture Baseline
5. Check Particles / Overdraw
6. Check Draw Calls
7. Evaluate LOD / Occlusion
8. Evaluate Texture / Shader / Shadow
9. Apply Optimization
10. Measure Again
11. Compare Before / After
```

Detail teknis tersedia pada modul praktikum.

---

# Slide 49 — Ringkasan Pertemuan

Benang merah:

```text
VFX Design
↓
Particle System
↓
Profiling
↓
Identify Bottleneck
↓
Optimization
↓
Measure Again
```

Fokus P15: particle, VFX Graph, overdraw, frame budget, profiling, draw call, batching, LOD, occlusion, texture/shader/shadow cost.

---

# Slide 50 — TERIMA KASIH

# TERIMA KASIH

### Materi Selanjutnya

## UAS — Real-Time Interactive 3D Experience
