const canvas = document.getElementById("graphicsCanvas"),
  ctx = canvas.getContext("2d");
const W = canvas.width,
  H = canvas.height;
const player = {
    x: 600,
    y: 360,
    w: 52,
    h: 52,
    speed: 5,
    color: "#f97316",
  },
  ball = { x: 420, y: 270, r: 25, vx: 3, vy: 2.5, color: "#9b59b6" },
  mouse = { x: 0, y: 0 },
  keys = {},
  circles = [],
  moving = [
    { x: 100, y: 530, vx: 1.7, c: "#ff6b6b" },
    { x: 250, y: 545, vx: 2.4, c: "#ffd166" },
    { x: 400, y: 520, vx: 1.2, c: "#06d6a0" },
  ],
  colors = ["#9b59b6", "#e74c3c", "#2ecc71", "#f1c40f", "#3498db"];
let colorIndex = 0,
  paused = false,
  trail = false,
  frames = 0;
const $ = (id) => document.getElementById(id),
  clamp = (v, a, b) => Math.max(a, Math.min(b, v));
function clear() {
  if (!trail) ctx.clearRect(0, 0, W, H);
  else {
    ctx.fillStyle = "rgba(7,17,31,.13)";
    ctx.fillRect(0, 0, W, H);
  }
}
function draw() {
  ctx.lineWidth = 3;
  ctx.fillStyle = "#10283b";
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = "#3498db";
  ctx.fillRect(80, 90, 170, 105);
  ctx.beginPath();
  ctx.moveTo(310, 110);
  ctx.lineTo(500, 185);
  ctx.strokeStyle = "#e74c3c";
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(700, 135, 58, 0, Math.PI * 2);
  ctx.fillStyle = "#2ecc71";
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(130, 360);
  ctx.lineTo(65, 490);
  ctx.lineTo(195, 490);
  ctx.closePath();
  ctx.fillStyle = "#f39c12";
  ctx.fill();
  ctx.strokeStyle = "#ffd166";
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
  ctx.fillStyle = ball.color;
  ctx.fill();
  ctx.beginPath();
  ctx.arc(mouse.x, mouse.y, 18, 0, Math.PI * 2);
  ctx.strokeStyle = "#4df3ff";
  ctx.stroke();
  ctx.fillStyle = "#4df3ff";
  ctx.fillText("MOUSE", mouse.x + 23, mouse.y + 4);
  circles.forEach((c) => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fillStyle = c.color;
    ctx.fill();
  });
  moving.forEach((o) => {
    ctx.beginPath();
    ctx.arc(o.x, o.y, 10, 0, Math.PI * 2);
    ctx.fillStyle = o.c;
    ctx.fill();
  });
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.w, player.h);
  ctx.fillStyle = "#dcecff";
  ctx.font = "16px ui-monospace";
  ctx.fillText("Canvas 960 Ã— 600 Â· State-based translation", 18, 28);
  ctx.fillText(
    "Mouse: (" + Math.round(mouse.x) + ", " + Math.round(mouse.y) + ")",
    18,
    575,
  );
}
function updatePlayer() {
  const s = Number($("speed").value);
  if (keys.ArrowLeft || keys.a) player.x -= s;
  if (keys.ArrowRight || keys.d) player.x += s;
  if (keys.ArrowUp || keys.w) player.y -= s;
  if (keys.ArrowDown || keys.s) player.y += s;
  player.x = clamp(player.x, 0, W - player.w);
  player.y = clamp(player.y, 0, H - player.h);
}
function update() {
  updatePlayer();
  ball.x += ball.vx;
  ball.y += ball.vy;
  if (ball.x < ball.r || ball.x > W - ball.r) ball.vx *= -1;
  if (ball.y < ball.r || ball.y > H - ball.r) ball.vy *= -1;
  moving.forEach((o) => {
    o.x += o.vx;
    if (o.x < 20 || o.x > W - 20) o.vx *= -1;
  });
}
function frame() {
  if (!paused) {
    clear();
    update();
    draw();
    frames++;
    $("frameText").textContent = frames;
  }
  requestAnimationFrame(frame);
}
canvas.addEventListener("mousemove", (e) => {
  const r = canvas.getBoundingClientRect();
  mouse.x = ((e.clientX - r.left) * W) / r.width;
  mouse.y = ((e.clientY - r.top) * H) / r.height;
  $("mouseText").textContent =
    "(" + Math.round(mouse.x) + ", " + Math.round(mouse.y) + ")";
});
canvas.addEventListener("click", () => {
  colorIndex = (colorIndex + 1) % colors.length;
  ball.color = colors[colorIndex];
  circles.push({
    x: mouse.x,
    y: mouse.y,
    r: 14,
    color: colors[(colorIndex + 2) % colors.length],
  });
});
window.addEventListener("keydown", (e) => {
  const k = e.key.toLowerCase();
  if (["arrowleft", "arrowright", "arrowup", "arrowdown", " "].includes(k))
    e.preventDefault();
  keys[e.key] = true;
  keys[k] = true;
  $("keysText").textContent =
    Object.keys(keys)
      .filter((k) => keys[k])
      .join(" + ") || "none";
  if (!e.repeat) {
    if (k === "p") togglePause();
    if (k === "r") reset();
    if (k === "c") {
      colorIndex = (colorIndex + 1) % colors.length;
      ball.color = colors[colorIndex];
    }
  }
});
window.addEventListener("keyup", (e) => {
  keys[e.key] = false;
  keys[e.key.toLowerCase()] = false;
  $("keysText").textContent =
    Object.keys(keys)
      .filter((k) => keys[k])
      .join(" + ") || "none";
});
function togglePause() {
  paused = !paused;
  $("pauseText").textContent = paused ? "Paused" : "Playing";
  $("mode").textContent = paused ? "PAUSED" : "RUNNING";
  $("pause").textContent = paused ? "Resume (P)" : "Pause (P)";
}
function reset() {
  player.x = 600;
  player.y = 360;
  ball.x = 420;
  ball.y = 270;
  ball.vx = 3;
  ball.vy = 2.5;
  circles.length = 0;
  paused = false;
  $("pauseText").textContent = "Playing";
  $("mode").textContent = "RUNNING";
  $("pause").textContent = "Pause (P)";
}
$("pause").onclick = togglePause;
$("reset").onclick = reset;
$("clear").onclick = () => (circles.length = 0);
$("speed").oninput = (e) => ($("speedText").textContent = e.target.value);
$("trail").onchange = (e) => (trail = e.target.checked);
setInterval(
  () =>
    ($("playerText").textContent =
      "(" + Math.round(player.x) + ", " + Math.round(player.y) + ")"),
  80,
);
draw();
requestAnimationFrame(frame);
