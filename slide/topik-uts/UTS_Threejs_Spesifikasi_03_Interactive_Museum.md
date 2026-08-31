# Spesifikasi Teknis UTS — Interactive Museum / Virtual Exhibition

## Konsep Project
Museum virtual dengan artifact/karya 3D yang dapat di-hover, dipilih, diputar, difokuskan camera, dan ditampilkan informasinya.

## Experience Loop
```text
Explore
→ Hover Artifact
→ Select
→ Camera Focus
→ Inspect
→ Read Information
→ Continue
→ Exhibition Complete
```

## Fokus Grafika Komputer
- GLTF / GLB
- PBR material
- HDR environment
- Raycasting
- Camera interaction
- Shadow
- Material presentation
- Scene composition

## Requirement Minimum
- Minimal 5 artifact.
- Minimal 2 GLB asset.
- Minimal 3 karakter material berbeda.
- HDR/environment map.
- Raycast selection.
- Hover highlight.
- Camera focus/inspect.
- Information panel.
- Shadow.
- Completion progress.

## Scene Graph
```text
Scene
├── Gallery
│   ├── Zone A
│   ├── Zone B
│   └── Zone C
├── Artifacts
├── Lights
└── Camera
```

## Interaction
- Hover → highlight.
- Click → select.
- Selected → camera focus.
- Drag/orbit → inspect.
- HUD → nama dan informasi.

## PBR Showcase
Tampilkan minimal tiga karakter:
- rough stone,
- glossy ceramic,
- metallic artifact.

## Completion
Selesai ketika seluruh artifact utama telah diperiksa.

## Challenge Opsional
- Guided tour.
- Multiple rooms.
- Animated artifact.
- Audio narration.
- Day/night gallery.

## Pembagian Tim
- Anggota 1: gallery, asset, PBR.
- Anggota 2: raycast, camera, selection.
- Anggota 3: lighting, HDR, HUD, animation.
