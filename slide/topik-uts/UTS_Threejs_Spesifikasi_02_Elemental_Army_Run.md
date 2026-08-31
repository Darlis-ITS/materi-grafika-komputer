# Spesifikasi Teknis UTS — Elemental Army Run

## Konsep Project
Player memimpin pasukan Fire, Water, dan Electric melalui jalur. Gate dapat menambah jumlah unit atau mengubah elemen sebelum battle.

## Gameplay Loop
```text
Start
→ Move Army
→ Choose Gate
→ Element/Count Changes
→ Obstacle
→ Battle
→ Final Enemy
→ Win/Lose
```

## Fokus Grafika Komputer
- Elemental VFX
- Particle system
- Emissive gate
- Animated texture
- PBR character surface
- Dynamic lighting
- Crowd visualization
- Shadow

## Requirement Minimum
- Minimal 5 unit aktif.
- Minimal 3 gate.
- Minimal 2 obstacle.
- 3 tampilan elemental berbeda.
- Minimal 1 battle area.
- Minimal 1 boss/final enemy.
- Emissive gate.
- Minimal 2 elemental VFX.
- HUD jumlah unit + tipe elemen.
- Win/lose state.

## Visual Elemental
**Fire:** orange emissive + flame particles.  
**Water:** blue transparent/animated material + splash/bubble.  
**Electric:** cyan emissive + spark/line effect.

## Gate Contoh
```text
+5 Fire
×2 Unit
Convert to Water
Electric Power+
```

## Crowd Movement
Gunakan leader + formation offset. Tidak diwajibkan membuat flocking atau AI kompleks.

## Battle
Battle boleh berbasis perbandingan jumlah/stat sederhana, tetapi harus mempunyai animation dan visual feedback.

## Win Condition
Pasukan tersisa cukup untuk mengalahkan final enemy.

## Challenge Opsional
- Element weakness.
- Gate risk/reward.
- Element switching VFX.
- Boss phase.

## Pembagian Tim
- Anggota 1: crowd, scene, gate.
- Anggota 2: gameplay, battle, game state.
- Anggota 3: elemental PBR/VFX, lighting, HUD.
