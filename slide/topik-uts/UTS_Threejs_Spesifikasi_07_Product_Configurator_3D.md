# Spesifikasi Teknis UTS — Product Configurator 3D

## Konsep Project
Interactive 3D experience untuk mengkonfigurasi sebuah produk seperti mobil, sepeda, kursi gaming, robot, atau gadget.

## Interaction Loop
```text
View Product
→ Select Part
→ Change Material/Color
→ Compare
→ Inspect
→ Finish Configuration
```

## Fokus Grafika Komputer
- PBR material
- Roughness
- Metalness
- HDR environment
- Reflection
- Material switching
- Raycasting
- Camera control

## Requirement Minimum
- Minimal 1 GLB produk.
- Minimal 3 selectable part.
- Minimal 3 pilihan warna/material.
- Minimal 2 profil roughness/metalness.
- HDR environment.
- Raycast selection.
- Camera orbit/focus.
- Shadow.
- HUD configurator.
- Completion state.

## Scene Graph
```text
Product
├── Body
├── Part A
├── Part B
└── Part C
```

## Interaction
- Hover part.
- Click select.
- Change material/color.
- Toggle component.
- Camera focus.

## PBR Showcase
Minimal menunjukkan:
- matte,
- glossy,
- metallic.

## Completion
Tombol `Finish Configuration` menampilkan ringkasan konfigurasi.

## Challenge Opsional
- Environment switch.
- Exploded view.
- Auto turntable.
- LocalStorage.
- Animated component.

## Pembagian Tim
- Anggota 1: asset, scene graph, PBR.
- Anggota 2: raycast, configurator logic.
- Anggota 3: HDR, camera, UI, animation.
