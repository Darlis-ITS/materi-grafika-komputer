# Spesifikasi Teknis UTS — Ninja Clone Rush

## Konsep Project
Player mengendalikan ninja yang menghasilkan clone melalui gate, melewati obstacle, bertarung melawan enemy, lalu menghadapi boss.

## Gameplay Loop
```text
Start
→ Run
→ Choose Clone Gate
→ Multiply
→ Obstacle
→ Enemy Battle
→ Upgrade
→ Boss
→ Win/Lose
```

## Fokus Grafika Komputer
- Clone/crowd visualization
- Animated GLB character
- Emissive gate
- Slash VFX
- Shadow
- Character animation
- Trail/smoke effect
- Dynamic lighting

## Requirement Minimum
- Minimal 1 ninja GLB.
- Minimal 5 clone.
- Minimal 3 gate.
- Minimal 2 obstacle.
- Minimal 2 enemy group.
- Final boss.
- Emissive gate.
- Slash/smoke VFX.
- Character animation.
- HUD clone count / health.

## Gate Contoh
```text
+3 Clone
×2 Clone
Attack+
Speed+
```

## Clone Movement
Gunakan leader-follow/formation sederhana.

## Battle
Battle boleh menggunakan perbandingan jumlah/stat sederhana, tetapi harus mempunyai animation dan VFX.

## Win Condition
Boss dikalahkan.

## Lose Condition
Jumlah ninja habis atau HP player mencapai nol.

## Challenge Opsional
- Ninja dash.
- Shadow clone dissolve.
- Multiple attack animation.
- Boss special VFX.
- Gate risk/reward.

## Pembagian Tim
- Anggota 1: runner, clone formation, camera.
- Anggota 2: gate, battle, boss logic.
- Anggota 3: animation, emissive, slash/smoke VFX, HUD.
