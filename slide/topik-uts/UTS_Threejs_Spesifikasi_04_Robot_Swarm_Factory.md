# Spesifikasi Teknis UTS — Robot Swarm Factory

## Konsep Project
Player mengendalikan swarm robot kecil di factory, melewati multiplier gate dan obstacle sebelum menghancurkan reactor atau boss.

## Gameplay Loop
```text
Start Swarm
→ Choose Gate
→ Multiply/Upgrade
→ Avoid Obstacle
→ Mini Battle
→ Reactor/Boss
→ Win/Lose
```

## Fokus Grafika Komputer
- Metallic PBR
- Emissive robot parts
- HDR reflection
- Crowd visualization
- Particle VFX
- Shadow
- Animated machinery
- Dynamic lighting

## Requirement Minimum
- Minimal 5 robot.
- Minimal 3 gate.
- Minimal 2 obstacle factory.
- Minimal 1 animated machine.
- Minimal 1 mini battle.
- Final reactor/boss.
- Metallic PBR.
- Emissive eyes/gate.
- Spark/explosion VFX.
- HUD robot count.

## Robot Visualization
Boleh menggunakan cloned Mesh, cloned GLB, atau `InstancedMesh` jika mampu.

## Scene
Gunakan unsur visual seperti:
- pipe,
- conveyor,
- reactor,
- hazard lamp,
- industrial environment.

## Interaction
Keyboard/pointer untuk pergerakan dan gate selection.

## Win Condition
Reactor/boss berhasil dihancurkan.

## Challenge Opsional
- Robot classes.
- Shield gate.
- Conveyor animation.
- Damage sparks.
- Instanced rendering.

## Pembagian Tim
- Anggota 1: swarm dan factory.
- Anggota 2: gate, battle, boss logic.
- Anggota 3: PBR, emissive, VFX, HUD.
