# Output Praktikum 1 — Interactive Graphics Playground

Output ini menyelesaikan seluruh syarat wajib Praktikum 1 dan seluruh challenge utama serta challenge tambahan.

## Demo

- `event-based.html`: translasi player terjadi langsung pada setiap `keydown`. Tahan ArrowRight untuk mengamati efek keyboard repeat dan delay awal browser.
- `state-based.html`: `keydown`/`keyup` hanya mengubah state tombol. Translasi dilakukan pada setiap frame melalui `requestAnimationFrame()`.

Kedua demo memiliki canvas logis 960 × 600 (memenuhi minimum 800 × 500), tetapi tampil responsif mengikuti ukuran container.

## Parameter dan kontrol

| Kontrol | Fungsi |
|---|---|
| Arrow keys / WASD | Menggerakkan player oranye; state-based pada demo state-based, event-based pada demo event-based |
| P | Pause/resume animasi |
| R | Reset posisi player, bola, dan lingkaran |
| C | Mengganti warna bola secara event-based |
| Mouse move | Menampilkan posisi mouse dalam koordinat canvas dan menggerakkan circle cyan |
| Klik canvas | Mengganti warna bola dan membuat circle baru di posisi mouse |
| Speed | Mengubah kecepatan player |
| Trail | Menonaktifkan clear per frame untuk melihat jejak gerak |
| Clear circles | Menghapus seluruh circle hasil klik |
| Reset | Mengembalikan semua parameter ke kondisi awal |

## Objek yang ditampilkan

- rectangle biru;
- line merah;
- circle hijau;
- triangle oranye yang dibentuk dari tiga vertex;
- bouncing ball ungu dengan velocity dan boundary check;
- circle cyan yang mengikuti posisi mouse;
- player oranye untuk translasi keyboard;
- circle tambahan hasil klik;
- beberapa moving object kecil di bagian bawah canvas;
- koordinat mouse, status pause, dan state tombol keyboard.

## Perbedaan teknis

### Event-based

`keydown` langsung mengubah `player.x` atau `player.y`. Ketika tombol ditahan, browser menentukan kapan event `keydown` berikutnya dikirim melalui mekanisme keyboard repeat. Akibatnya gerakan dapat mempunyai delay awal dan rate yang bergantung pada sistem operasi.

### State-based

`keydown` mengisi `keys[event.key] = true`, sedangkan `keyup` mengisinya menjadi `false`. Fungsi `updatePlayer()` membaca state tersebut pada setiap frame. Gerakan mengikuti animation loop, sehingga lebih stabil, mendukung diagonal/multi-key input, dan tidak bergantung pada keyboard repeat.

## Hubungan Data → Proses Grafika → Gambar

Posisi, ukuran, warna, velocity, state keyboard, dan koordinat mouse disimpan sebagai data. Fungsi update mengubah data setiap frame. Fungsi draw mengirim data tersebut ke Canvas 2D API, lalu browser menghasilkan gambar pada canvas.

## Checklist hasil

- [x] Canvas minimal 800 × 500
- [x] Minimal tiga primitive
- [x] Minimal empat warna
- [x] Triangle dari tiga vertex
- [x] Objek bergerak dan bouncing
- [x] Translasi keyboard
- [x] Koordinat mouse
- [x] Pause, reset, dan parameter speed
- [x] Challenge A–E
- [x] Challenge tambahan: click to create circle, trail mode, multiple moving objects
