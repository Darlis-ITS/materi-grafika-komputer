# Spesifikasi Teknis UTS — Space Fleet Multiplier

## Konsep Project
Player mengendalikan armada spaceship kecil yang melewati multiplier gate, asteroid, dan turret sebelum menghadapi mothership.

## Gameplay Loop
```text
Launch
→ Gate
→ Fleet Multiplies
→ Asteroid Field
→ Turret Battle
→ Upgrade
→ Mothership
→ Win/Lose
```

## Fokus Grafika Komputer
- HDR space environment
- Metallic PBR
- Emissive engine
- Laser VFX
- Explosion particles
- Animated material/shader
- Glow/bloom-style visual
- Formation visualization

## Requirement Minimum
- Minimal 5 spaceship.
- Minimal 3 gate.
- Minimal 1 asteroid field.
- Minimal 2 turret/enemy.
- Final mothership.
- Emissive engine.
- Laser/projectile visual.
- Explosion VFX.
- HDR/star environment.
- HUD fleet count + health.

## Fleet Movement
Gunakan leader + formation offset. Tidak membutuhkan flocking kompleks.

## Gate Contoh
```text
×2 Fleet
+3 Fighter
Shield+
Laser+
```

## VFX Minimum
- Engine trail.
- Laser/projectile.
- Explosion.

## Win Condition
Mothership berhasil dihancurkan.

## Lose Condition
Fleet habis atau player/base HP mencapai nol.

## Challenge Opsional
- Multiple ship type.
- Shield effect.
- Warp effect.
- Asteroid debris.
- Camera shake ringan.

## Pembagian Tim
- Anggota 1: fleet, camera, environment.
- Anggota 2: gate, battle, boss.
- Anggota 3: PBR, emissive, laser/explosion VFX, HUD.
