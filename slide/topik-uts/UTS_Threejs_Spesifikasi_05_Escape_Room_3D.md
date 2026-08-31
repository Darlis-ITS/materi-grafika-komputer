# Spesifikasi Teknis UTS — Escape Room 3D

## Konsep Project
Player berada di ruangan 3D dan harus menemukan clue, mengaktifkan object, menyelesaikan puzzle, lalu membuka jalan keluar.

## Gameplay Loop
```text
Explore
→ Find Clue
→ Interact
→ Solve Puzzle
→ Unlock
→ Escape
```

## Fokus Grafika Komputer
- Raycasting
- Scene Graph
- Parent-child transform
- Animation
- Lighting
- Shadow
- GLB asset
- Interaction feedback

## Requirement Minimum
- Minimal 1 room utama.
- Minimal 5 object interaktif.
- Minimal 3 clue.
- Minimal 2 puzzle.
- Minimal 1 door/chest hierarchy animation.
- Minimal 1 GLB.
- PBR material.
- Shadow.
- Raycasting.
- HUD clue/objective.

## Puzzle Contoh
- urutan tombol,
- mencari key,
- memutar simbol,
- membuka drawer,
- memilih object yang benar.

## Interaction
- Hover → highlight.
- Click → inspect/action.
- Clue → update state.
- Puzzle complete → animation/unlock.

## Visual
Gunakan lighting untuk mengarahkan perhatian player ke clue atau object penting.

## Win Condition
Pintu keluar terbuka dan objective selesai.

## Challenge Opsional
- Hidden compartment.
- Animated clue.
- Time limit.
- Multiple ending.
- Camera inspect mode.

## Pembagian Tim
- Anggota 1: room, props, lighting.
- Anggota 2: puzzle, raycast, state.
- Anggota 3: animation, HUD, effects.
