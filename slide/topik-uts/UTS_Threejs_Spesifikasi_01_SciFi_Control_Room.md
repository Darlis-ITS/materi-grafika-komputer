# Spesifikasi Teknis UTS — Sci-Fi Control Room

## Konsep Project
Membuat ruang kontrol futuristik 3D dengan panel, hologram, mesin, pintu, dan sistem yang dapat diaktifkan. Player harus menyelesaikan urutan interaksi untuk membuka akses akhir.

## Gameplay Loop
```text
Explore
→ Inspect Panel
→ Activate System
→ Trigger Animation/VFX
→ Complete Sequence
→ Mission Complete
```

## Fokus Grafika Komputer
- Emissive material
- PBR metallic surface
- Dynamic lighting
- Shadow
- HDR / environment map
- Hologram VFX
- Raycasting
- Parent-child animation

## Scene Graph Minimum
```text
Scene
├── ControlRoom
│   ├── Floor
│   ├── Walls
│   ├── ConsoleGroup
│   ├── DoorGroup
│   └── HologramGroup
├── Lights
└── Camera
```

## Requirement Minimum
- Minimal 3 panel interaktif.
- Minimal 1 pintu/mesin dengan hierarchy.
- Minimal 1 GLB asset.
- Minimal 2 PBR material.
- Minimal 2 emissive object.
- Minimal 1 hologram/energy VFX.
- Shadow aktif.
- Raycasting untuk panel.
- HUD objective.
- Mission completion state.

## Interaction
- Hover panel → glow.
- Click panel → activate.
- Click hologram → rotate/focus model.
- Sequence beberapa panel → buka pintu.

## VFX Minimum
Pilih minimal dua:
- hologram,
- emissive pulse,
- energy beam,
- spark,
- animated warning light.

## Win Condition
Semua sistem aktif dan pintu/terminal akhir berhasil dibuka.

## Challenge Opsional
- Alarm mode.
- Animated shader.
- Cinematic camera focus.
- Day/night lighting variant.

## Pembagian Tim
- Anggota 1: room, asset, PBR, lighting.
- Anggota 2: interaction, raycast, game state.
- Anggota 3: animation, hologram/VFX, HUD.
