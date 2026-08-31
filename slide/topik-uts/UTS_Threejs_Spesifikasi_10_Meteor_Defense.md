# Spesifikasi Teknis UTS — Meteor Defense

## Konsep Project
Player mempertahankan planet atau space station dari beberapa wave meteor menggunakan raycasting atau weapon system.

## Gameplay Loop
```text
Start Wave
→ Meteor Spawn
→ Meteor Approaches
→ Player Targets
→ Shoot
→ Explosion
→ Score
→ Next Wave
→ Win/Lose
```

## Fokus Grafika Komputer
- Raycasting
- Particle explosion
- Emissive projectile
- HDR space environment
- Dynamic lighting
- VFX
- Animated texture
- Object spawning

## Requirement Minimum
- Minimal 3 wave.
- Meteor spawning.
- Minimal 2 meteor type.
- Raycast shooting.
- Projectile/beam visual.
- Explosion particles.
- HDR/star environment.
- Planet/station PBR.
- Health + score HUD.
- Win/lose + restart.

## Scene Graph
```text
Scene
├── Planet / Station
├── MeteorManager
├── DefenseSystem
├── VFX
├── Environment
└── Camera
```

## Interaction
- Pointer aim.
- Click shoot.
- Raycast target.
- Visual hit feedback.

## VFX Minimum
- projectile/laser,
- impact flash,
- explosion particle.

## Difficulty
Wave berikutnya dapat:
- lebih cepat,
- lebih banyak meteor,
- HP meteor lebih tinggi.

## Win Condition
Bertahan sampai wave terakhir selesai.

## Lose Condition
```text
Station HP = 0
```

## Challenge Opsional
- Shield.
- Multiple weapon.
- Slow-motion.
- Boss asteroid.
- Camera shake ringan.

## Pembagian Tim
- Anggota 1: meteor spawning, environment.
- Anggota 2: raycast shooting, game state.
- Anggota 3: PBR, projectile/explosion VFX, HUD.
