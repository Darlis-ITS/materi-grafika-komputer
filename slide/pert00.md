# Grafika Komputer — Pertemuan 0
## Rencana Pembelajaran Mata Kuliah

---

# Slide 00 — Cover

EF234504 — Grafika Komputer

**Pertemuan 0**

# Rencana Pembelajaran

**Laboratorium GIGA**

**Departemen Teknik Informatika - ITS**

---


# Slide 01 — Tentang Mata Kuliah

**Grafika Komputer** mempelajari bagaimana komputer:

- merepresentasikan objek visual,
- membentuk gambar,
- melakukan transformasi,
- mengatur kamera dan proyeksi,
- menerapkan material dan texture,
- menghitung lighting,
- menjalankan shader,
- melakukan rendering,
- menghasilkan visual interaktif secara real-time.

Mata kuliah ini dirancang sebagai kombinasi:

```text
Konsep
+
Pemrograman
+
3D Content Creation
+
Real-Time Rendering
+
Praktikum
```

---

# Slide 02 — Tujuan Utama Mata Kuliah

Setelah menyelesaikan mata kuliah ini, mahasiswa diharapkan tidak hanya mampu menggunakan software grafika.

Mahasiswa harus memahami:

> bagaimana data 2D/3D diproses menjadi gambar yang ditampilkan pada layar.

Target pembelajaran:

```text
Understand
    ↓
Implement
    ↓
Create
    ↓
Integrate
    ↓
Optimize
```

---

# Slide 03 — Teknologi yang Digunakan

## Web Graphics

- HTML5 Canvas
- JavaScript
- WebGL
- GLSL
- Three.js

## 3D Content Creation

- Blender

## Real-Time Graphics

- Unity 3D
- Universal Render Pipeline
- Shader Graph
- VFX

---

# Slide 04 — Filosofi Pembelajaran

```text
Konsep Grafika Komputer
        ↓
Matematika & Transformasi
        ↓
WebGL
        ↓
Graphics Pipeline
        ↓
Shader
        ↓
Three.js
        ↓
Interactive Web 3D
        ↓
UTS
        ↓
Blender
        ↓
3D Asset Creation
        ↓
Material + Texture + Lighting
        ↓
Unity
        ↓
Real-Time Rendering
        ↓
Shader Graph + VFX
        ↓
UAS
```

---

# Slide 05 — Struktur Semester

| Fase | Pertemuan | Fokus |
|---|---:|---|
| A | 1 | Introduction to Computer Graphics |
| B | 2–5 | WebGL & Graphics Pipeline |
| C | 6–7 | Three.js |
| D | 8 | UTS |
| E | 9–11 | Blender |
| F | 12–15 | Unity Real-Time Graphics |
| G | 16 | UAS |

---

# Slide 06 — Topik Pertemuan 1–16

| Pertemuan | Topik Utama | Fokus Praktikum / Implementasi |
|---:|---|---|
| 1 | **Pengenalan Grafika Komputer** | Graphics Playground dengan HTML Canvas |
| 2 | **WebGL Fundamental** | WebGL Context, Vertex, Buffer, Shader, Draw Call |
| 3 | **Transformation & Coordinate System** | Translation, Rotation, Scaling, Matrix Transformation |
| 4 | **Camera, Projection & 3D** | Camera, Perspective, Orthographic, 3D Cube |
| 5 | **Shader, Lighting & Texture pada WebGL** | Textured and Lit Object |
| 6 | **Introduction to Three.js** | Mini 3D Scene dengan Geometry, Material, Light, Camera |
| 7 | **Three.js Interactive 3D Application** | Interactive Scene dan UTS Prototype |
| 8 | **UTS — Interactive Web 3D Project** | Project WebGL / Three.js |
| 9 | **Blender Fundamental & 3D Modeling** | Modeling Game-Ready Props |
| 10 | **Blender Materials, UV & Texturing** | UV Unwrap, Texture, PBR Material |
| 11 | **Blender Lighting, Camera & Rendering** | Mini Environment Rendering |
| 12 | **Unity 3D & Real-Time Rendering Pipeline** | Import Blender Asset dan Unity URP Scene |
| 13 | **Unity Lighting, Material & Post Processing** | Day/Night Scene, Lighting, Post FX |
| 14 | **Unity Shader Graph** | Emission, Dissolve, Animated Shader |
| 15 | **VFX, Particle & Graphics Optimization** | VFX, Particle, Profiling, Optimization |
| 16 | **UAS — Real-Time Interactive 3D Experience** | Final Project Blender + Unity |

---

# Slide 07 — CPMK Mata Kuliah

Mahasiswa diharapkan mampu:

1. Menjelaskan konsep dasar grafika komputer.
2. Menerapkan transformasi geometrik 2D/3D.
3. Mengembangkan program grafika dengan WebGL dan GLSL.
4. Membuat aplikasi 3D berbasis Three.js.
5. Membuat aset 3D menggunakan Blender.
6. Memahami real-time rendering menggunakan Unity.
7. Membuat shader dan visual effects.
8. Mengintegrasikan aset, material, lighting, shader, VFX, kamera, dan interaksi.

---

# Slide 08 — Kompetensi Akhir

```text
Geometry
    ↓
Vertices
    ↓
Transformation
    ↓
Camera
    ↓
Projection
    ↓
Shader
    ↓
Rasterization
    ↓
Fragment
    ↓
Lighting
    ↓
Framebuffer
    ↓
Final Image
```

---

# Slide 09 — Tiga Tingkat Abstraksi

```text
LOW LEVEL
WebGL + GLSL

      ↓

FRAMEWORK
Three.js

      ↓

ENGINE
Unity
```

Dengan Blender sebagai tool utama untuk **3D Content Creation**.

---

# Slide 10 — Pertemuan 1

# Pengenalan Grafika Komputer

Materi:

- pengertian grafika komputer,
- aplikasi grafika komputer,
- raster, vector, dan 3D graphics,
- pixel dan resolution,
- vertex, edge, triangle,
- mesh, object, scene,
- CPU dan GPU,
- graphics pipeline.

## Praktikum

**Graphics Playground menggunakan HTML Canvas**

---

# Slide 11 — Pertemuan 2

# WebGL Fundamental

Materi:

- Canvas dan WebGL Context,
- Normalized Device Coordinate,
- vertex,
- primitive,
- buffer,
- attribute,
- rendering loop,
- draw call,
- vertex shader,
- fragment shader.

## Praktikum

**Hello Triangle WebGL**

---

# Slide 12 — Pertemuan 3

# Transformation & Coordinate System

Materi:

- local coordinate,
- world coordinate,
- view coordinate,
- clip coordinate,
- screen coordinate,
- translation,
- rotation,
- scaling,
- matrix,
- homogeneous coordinate,
- transform composition.

## Praktikum

Membuat objek WebGL yang dapat digeser, diputar, diperbesar, dan diperkecil.

---

# Slide 13 — Pertemuan 4

# Camera, Projection & 3D

Materi:

- camera position,
- target,
- up vector,
- view transformation,
- orthographic projection,
- perspective projection,
- field of view,
- aspect ratio,
- near plane,
- far plane,
- depth test.

## Praktikum

**Rotating 3D Cube WebGL**

---

# Slide 14 — Pertemuan 5

# Shader, Lighting & Texture pada WebGL

Materi:

- Vertex Shader,
- Fragment Shader,
- GLSL,
- normal,
- ambient,
- diffuse,
- specular,
- texture coordinate,
- texture sampling.

## Praktikum

**Textured and Lit Cube**

---

# Slide 15 — Pertemuan 6

# Introduction to Three.js

Materi:

- Scene,
- Camera,
- WebGLRenderer,
- Geometry,
- Material,
- Mesh,
- Light,
- shadow,
- animation loop.

## Praktikum

Membangun mini 3D scene:

```text
Ground
+
Cube
+
Sphere
+
Light
+
Camera
```

---

# Slide 16 — Pertemuan 7

# Three.js Interactive 3D Application

Materi:

- Scene Graph,
- Object3D hierarchy,
- parent-child transform,
- PBR material,
- shadow,
- GLTF / GLB,
- animation,
- raycasting,
- interaction,
- environment map.

## Praktikum

**Mini Project Persiapan UTS**

---

# Slide 17 — Pertemuan 8

# UTS — Interactive Web 3D Project

Mahasiswa membuat aplikasi grafika 3D berbasis browser.

Minimum requirement:

- Scene
- Camera
- Geometry
- Transformation
- Material
- Texture
- Lighting
- Animation
- Interaction

Teknologi utama:

```text
WebGL
dan/atau
Three.js
```

---

# Slide 18 — Pertemuan 9

# Blender Fundamental & 3D Modeling

Materi:

- Blender interface,
- Object Mode,
- Edit Mode,
- vertex,
- edge,
- face,
- extrude,
- inset,
- loop cut,
- bevel,
- modifier.

## Praktikum

Membuat beberapa **simple game-ready props**.

---

# Slide 19 — Pertemuan 10

# Blender Materials, UV & Texturing

Materi:

- UV Mapping,
- seam,
- unwrap,
- UV island,
- texture,
- material,
- PBR,
- Base Color,
- Roughness,
- Metallic,
- Normal,
- Emission.

## Praktikum

```text
3D Model
   ↓
UV Unwrap
   ↓
Texture
   ↓
PBR Material
```

---

# Slide 20 — Pertemuan 11

# Blender Lighting, Camera & Rendering

Materi:

- Point Light,
- Sun,
- Spot Light,
- Area Light,
- three-point lighting,
- camera composition,
- focal length,
- depth of field,
- HDRI,
- EEVEE,
- Cycles.

## Praktikum

**Mini Environment Rendering**

---

# Slide 21 — Pertemuan 12

# Unity 3D & Real-Time Rendering Pipeline

Materi:

- Unity interface,
- GameObject,
- Component,
- Transform,
- Blender asset import,
- rendering pipeline,
- URP.

## Praktikum

```text
Blender
  ↓
Export Asset
  ↓
Unity URP
  ↓
Real-Time Scene
```

---

# Slide 22 — Pertemuan 13

# Unity Lighting, Material & Post Processing

Materi:

- Directional Light,
- Point Light,
- Spot Light,
- real-time lighting,
- baked lighting,
- mixed lighting,
- shadow,
- lightmap,
- Bloom,
- Color Adjustment,
- Tonemapping,
- Depth of Field,
- Ambient Occlusion.

## Praktikum

Membuat dua versi scene:

```text
Bright / Day
vs
Dark / Night
```

---

# Slide 23 — Pertemuan 14

# Unity Shader Graph

Materi:

- shader,
- node graph,
- vertex,
- fragment,
- UV,
- normal,
- time,
- texture,
- color,
- math node.

Contoh shader:

- emission,
- dissolve,
- hologram,
- animated surface,
- water,
- force field.

## Praktikum

Membuat minimal tiga custom shader.

---

# Slide 24 — Pertemuan 15

# VFX, Particle & Graphics Optimization

Materi VFX:

- particle,
- emitter,
- lifetime,
- velocity,
- color over lifetime,
- noise,
- collision,
- VFX Graph.

Materi optimasi:

- triangle count,
- draw call,
- batching,
- LOD,
- occlusion,
- texture resolution,
- shader complexity.

## Praktikum

**Final Project Preparation**

---

# Slide 25 — Pertemuan 16

# UAS — Real-Time Interactive 3D Experience

Mahasiswa membuat aplikasi 3D menggunakan Unity.

Project memperlihatkan integrasi:

- modeling,
- texturing,
- lighting,
- shader,
- VFX,
- camera,
- interaction,
- rendering.

---

# Slide 26 — Requirement UAS

Minimum requirement:

1. 3D Environment
2. Original 3D Asset
3. PBR Material & Texture
4. Lighting
5. Minimal 2 Custom Shader
6. Minimal 1 VFX
7. Post Processing
8. User Interaction

---

# Slide 27 — Pola Praktikum Semester

| Pertemuan | Praktikum | Hasil |
|---:|---|---|
| 1 | Canvas Graphics | Primitive 2D |
| 2 | WebGL Triangle | GPU Rendering |
| 3 | Transformation | Interactive Transform |
| 4 | Camera & Projection | 3D Cube |
| 5 | Shader & Texture | Lit Textured Object |
| 6 | Three.js Scene | Mini 3D Scene |
| 7 | Interactive Three.js | UTS Prototype |
| 8 | UTS | Web 3D Application |
| 9 | Blender Modeling | 3D Assets |
| 10 | UV & Texturing | Textured Asset |
| 11 | Lighting & Rendering | Rendered Environment |
| 12 | Blender → Unity | Unity URP Scene |
| 13 | Lighting & Post FX | Cinematic Scene |
| 14 | Shader Graph | Custom Shaders |
| 15 | VFX & Optimization | Final Prototype |
| 16 | UAS | Real-Time 3D Project |

---

# Slide 28 — Progressive Project

Praktikum semester kedua dibuat sebagai satu project progresif.

```text
P9
Model Asset
   ↓
P10
Texture Asset
   ↓
P11
Lighting + Render
   ↓
P12
Import ke Unity
   ↓
P13
Lighting + Post FX
   ↓
P14
Shader Graph
   ↓
P15
VFX + Optimization
   ↓
P16
FINAL PROJECT
```

---

# Slide 29 — Pola Pembelajaran

Pendekatan setiap pertemuan:

```text
Concept
   ↓
Demonstration
   ↓
Implementation
   ↓
Experiment
   ↓
Reflection
```

Contoh sesi 150 menit:

```text
20 menit — Concept / Theory
30 menit — Visual Demonstration
30 menit — Live Coding / Demo
55 menit — Hands-on Practice
15 menit — Challenge + Discussion
```

---

# Slide 30 — Komposisi Penilaian

| Komponen | Bobot |
|---|---:|
| Praktikum Mingguan | 20% |
| Tugas / Mini Challenge | 10% |
| UTS — Web 3D Project | 25% |
| Progress UAS | 10% |
| UAS — Unity 3D Project | 30% |
| Keaktifan / Demo / Presentasi | 5% |
| **Total** | **100%** |

---

# Slide 31 — Penilaian Praktikum

Aspek yang diperhatikan:

```text
Technical Correctness
        30%

Visual Result
        25%

Understanding
        25%

Implementation Quality
        20%
```

Mahasiswa tidak hanya dinilai dari apakah program dapat berjalan.

---

# Slide 32 — Software Semester Pertama

- Google Chrome / Chromium
- Visual Studio Code
- Node.js
- JavaScript
- WebGL
- Three.js
- Vite
- Git

Fokus:

```text
Web Graphics
+
Programming
+
GPU Rendering
```

---

# Slide 33 — Software Semester Kedua

- Blender
- Unity 6
- Unity Hub
- Universal Render Pipeline
- Shader Graph
- VFX
- Git / Git LFS

Fokus:

```text
3D Content Creation
+
Real-Time Rendering
```

---

# Slide 34 — UTS vs UAS

## UTS

**Interactive Web Graphics**

Teknologi:

- WebGL
- Three.js

Fokus:

- graphics programming,
- transformation,
- shader,
- interaction.

## UAS

**Real-Time 3D Graphics**

Teknologi:

- Blender
- Unity

Fokus:

- asset creation,
- rendering,
- shader,
- VFX,
- integration.

---

# Slide 35 — Benang Merah Satu Semester

```text
DATA
 ↓
GEOMETRY
 ↓
TRANSFORMATION
 ↓
CAMERA
 ↓
PROJECTION
 ↓
SHADER
 ↓
RASTERIZATION
 ↓
LIGHTING
 ↓
IMAGE
```

Semua tools yang digunakan sepanjang semester menerapkan konsep grafika yang sama pada tingkat abstraksi berbeda.

---

# Slide 36 — Roadmap Semester

```text
Introduction
     ↓
WebGL
     ↓
Transformation
     ↓
Camera
     ↓
Shader
     ↓
Three.js
     ↓
UTS
     ↓
Blender Modeling
     ↓
UV & Texturing
     ↓
Lighting
     ↓
Unity URP
     ↓
Shader Graph
     ↓
VFX
     ↓
Optimization
     ↓
UAS
```

---

# Slide 37 — Target Akhir Mahasiswa

Pada akhir semester mahasiswa diharapkan mampu:

> Memahami bagaimana gambar 3D dibuat oleh komputer serta mampu mengintegrasikan geometry, transformation, camera, material, texture, lighting, shader, VFX, dan rendering menjadi aplikasi 3D interaktif.

---

# Slide 38 — Pertemuan Berikutnya

# Pertemuan 1 — Pengenalan Grafika Komputer

Topik:

- Apa itu grafika komputer?
- Bagaimana komputer membentuk gambar?
- Raster, vector, dan 3D graphics
- Vertex, edge, triangle, mesh, object, scene
- CPU dan GPU
- Graphics pipeline
- Praktikum Graphics Playground

---

# Slide 39 — TERIMA KASIH

# TERIMA KASIH

**Grafika Komputer — Pertemuan 0**

Rencana Pembelajaran

## Materi Selanjutnya

**Pertemuan 1 — Pengenalan Grafika Komputer**

> Dari data menuju gambar, dari pixel menuju dunia virtual.
