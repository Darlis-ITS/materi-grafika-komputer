const canvas = document.getElementById("glCanvas"),
  gl = canvas.getContext("webgl2");
if (!gl) {
  document.getElementById("status").textContent = "WebGL2 tidak tersedia";
  throw new Error("WebGL2 unavailable");
}
const vs = `#version 300 es
in vec3 a_position;uniform mat3 u_matrix;void main(){gl_Position=vec4(u_matrix*a_position,1.0);}`,
  fs = `#version 300 es
precision mediump float;uniform vec4 u_color;out vec4 outColor;void main(){outColor=u_color;}`;
function sh(t, s) {
  const x = gl.createShader(t);
  gl.shaderSource(x, s);
  gl.compileShader(x);
  if (!gl.getShaderParameter(x, gl.COMPILE_STATUS))
    throw Error(gl.getShaderInfoLog(x));
  return x;
}
const prog = gl.createProgram();
gl.attachShader(prog, sh(gl.VERTEX_SHADER, vs));
gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, fs));
gl.linkProgram(prog);
gl.useProgram(prog);
const pos = gl.getAttribLocation(prog, "a_position"),
  mat = gl.getUniformLocation(prog, "u_matrix"),
  col = gl.getUniformLocation(prog, "u_color");
const triangle = new Float32Array([
    -0.16, -0.13, 1, 0.16, -0.13, 1, 0, 0.18, 1,
  ]),
  axis = new Float32Array([-1, 0, 1, 1, 0, 1, 0, -1, 1, 0, 1, 1]);
function vao(data) {
  const v = gl.createVertexArray(),
    b = gl.createBuffer();
  gl.bindVertexArray(v);
  gl.bindBuffer(gl.ARRAY_BUFFER, b);
  gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
  gl.enableVertexAttribArray(pos);
  gl.vertexAttribPointer(pos, 3, gl.FLOAT, false, 0, 0);
  return v;
}
const triVao = vao(triangle),
  axisVao = vao(axis);
function I() {
  return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
}
function M(a, b) {
  const r = new Float32Array(9);
  for (let c = 0; c < 3; c++)
    for (let y = 0; y < 3; y++)
      r[c * 3 + y] =
        a[y] * b[c * 3] + a[3 + y] * b[c * 3 + 1] + a[6 + y] * b[c * 3 + 2];
  return r;
}
function T(x, y) {
  return new Float32Array([1, 0, 0, 0, 1, 0, x, y, 1]);
}
function S(x, y) {
  return new Float32Array([x, 0, 0, 0, y, 0, 0, 0, 1]);
}
function R(d) {
  const a = (d * Math.PI) / 180,
    c = Math.cos(a),
    s = Math.sin(a);
  return new Float32Array([c, s, 0, -s, c, 0, 0, 0, 1]);
}
function TRS(o) {
  let m = I();
  m = M(m, T(o.x, o.y));
  m = M(m, R(o.rotation));
  m = M(m, S(o.scaleX, o.scaleY));
  return m;
}
function RT(o) {
  return M(T(o.x, o.y), R(o.rotation));
}
const A = { x: -0.38, y: 0, rotation: 0, scaleX: 1, scaleY: 1 },
  keys = {};
let paused = false,
  orderTRS = true,
  orbitOn = false,
  seconds = 0,
  last = 0;
function clamp() {
  A.x = Math.max(-0.85, Math.min(0.85, A.x));
  A.y = Math.max(-0.78, Math.min(0.78, A.y));
  A.scaleX = Math.max(0.2, Math.min(2.5, A.scaleX));
  A.scaleY = Math.max(0.2, Math.min(2.5, A.scaleY));
}
function reset() {
  Object.assign(A, { x: -0.38, y: 0, rotation: 0, scaleX: 1, scaleY: 1 });
  orderTRS = true;
  orbitOn = false;
}
function preset(n) {
  if (n === 1)
    Object.assign(A, {
      x: -0.4,
      y: 0.2,
      rotation: 0,
      scaleX: 1,
      scaleY: 1,
    });
  if (n === 2)
    Object.assign(A, {
      x: 0,
      y: 0,
      rotation: 45,
      scaleX: 1.5,
      scaleY: 1.5,
    });
  if (n === 3)
    Object.assign(A, {
      x: 0.3,
      y: -0.2,
      rotation: 90,
      scaleX: 1.8,
      scaleY: 0.6,
    });
  clamp();
}
function update(dt) {
  const ms = Number(moveSpeed.value),
    rs = Number(rotationSpeed.value),
    ss = Number(scaleSpeed.value);
  if (keys.arrowleft) A.x -= ms * dt;
  if (keys.arrowright) A.x += ms * dt;
  if (keys.arrowup) A.y += ms * dt;
  if (keys.arrowdown) A.y -= ms * dt;
  if (keys.q) A.rotation -= rs * dt;
  if (keys.e) A.rotation += rs * dt;
  if (keys["+"] || keys["="]) ((A.scaleX += ss * dt), (A.scaleY += ss * dt));
  if (keys["-"] || keys["_"]) ((A.scaleX -= ss * dt), (A.scaleY -= ss * dt));
  if (keys.z) A.scaleX -= ss * dt;
  if (keys.x) A.scaleX += ss * dt;
  if (keys.c) A.scaleY -= ss * dt;
  if (keys.v) A.scaleY += ss * dt;
  clamp();
}
function obj(m, c) {
  gl.uniformMatrix3fv(mat, false, m);
  gl.uniform4fv(col, c);
  gl.bindVertexArray(triVao);
  gl.drawArrays(gl.TRIANGLES, 0, 3);
}
function draw() {
  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.clearColor(0.02, 0.04, 0.08, 1);
  gl.clear(gl.COLOR_BUFFER_BIT);
  if (showAxes.checked) {
    gl.uniformMatrix3fv(mat, false, I());
    gl.uniform4fv(col, [0.65, 0.8, 0.9, 1]);
    gl.bindVertexArray(axisVao);
    gl.drawArrays(gl.LINES, 0, 4);
  }
  const ma = orderTRS ? TRS(A) : RT(A);
  obj(ma, [0.3, 0.95, 1, 1]);
  if (showPivot.checked) obj(M(ma, T(0, 0)), [1, 1, 1, 1]);
  if (autoB.checked) {
    const sc = 1 + Math.sin(seconds * 2) * 0.25;
    obj(
      TRS({
        x: 0.42,
        y: 0.12,
        rotation: seconds * 70,
        scaleX: sc,
        scaleY: sc,
      }),
      [1, 0.35, 0.3, 1],
    );
  }
  if (showChild.checked)
    obj(M(ma, M(T(0.28, 0), S(0.42, 0.42))), [1, 0.82, 0.28, 1]);
  if (orbitOn)
    obj(M(T(0.46, 0), M(R(seconds * 70), T(0.18, 0))), [0.5, 0.95, 0.5, 1]);
  matrixText.textContent =
    "Matrix 3Ãƒâ€”3 | [" +
    [ma[0], ma[3], ma[6]].map((v) => v.toFixed(2)).join(" ") +
    "] [" +
    [ma[1], ma[4], ma[7]].map((v) => v.toFixed(2)).join(" ") +
    "] [" +
    [ma[2], ma[5], ma[8]].map((v) => v.toFixed(2)).join(" ") +
    "]";
  positionInfo.textContent = "(" + A.x.toFixed(2) + ", " + A.y.toFixed(2) + ")";
  rotationInfo.textContent = A.rotation.toFixed(1) + "Ã‚Â°";
  scaleInfo.textContent =
    "(" + A.scaleX.toFixed(2) + ", " + A.scaleY.toFixed(2) + ")";
  orderInfo.textContent = orderTRS ? "T Ãƒâ€” R Ãƒâ€” S" : "T Ãƒâ€” R";
}
function frame(t) {
  const dt = Math.min((t - last) * 0.001, 0.05);
  last = t;
  if (!paused) {
    seconds += dt;
    update(dt);
    draw();
  }
  dtInfo.textContent = dt.toFixed(3) + " s";
  requestAnimationFrame(frame);
}
window.addEventListener("keydown", (e) => {
  const k = e.key.toLowerCase();
  if (
    ["arrowleft", "arrowright", "arrowup", "arrowdown", " ", "+", "-"].includes(
      e.key,
    )
  )
    e.preventDefault();
  keys[k] = true;
  if (e.repeat) return;
  if (k === "r") reset();
  if (k === "p") {
    paused = !paused;
    status.textContent = paused ? "PAUSED Ã‚Â· WebGL2" : "RUNNING Ã‚Â· WebGL2";
    pause.textContent = paused ? "Resume (P)" : "Pause (P)";
  }
  if (k === "t") orderTRS = !orderTRS;
  if (k === "o") orbitOn = !orbitOn;
  if (["1", "2", "3"].includes(k)) preset(Number(k));
});
window.addEventListener("keyup", (e) => (keys[e.key.toLowerCase()] = false));
canvas.addEventListener("click", (e) => {
  const r = canvas.getBoundingClientRect();
  A.x = ((e.clientX - r.left) / r.width) * 2 - 1;
  A.y = 1 - ((e.clientY - r.top) / r.height) * 2;
  clamp();
});
pause.onclick = () => {
  paused = !paused;
  status.textContent = paused ? "PAUSED Ã‚Â· WebGL2" : "RUNNING Ã‚Â· WebGL2";
  pause.textContent = paused ? "Resume (P)" : "Pause (P)";
};
reset.onclick = reset;
order.onclick = () => (orderTRS = !orderTRS);
orbit.onclick = () => (orbitOn = !orbitOn);
moveSpeed.oninput = () => (moveValue.textContent = moveSpeed.value);
rotationSpeed.oninput = () =>
  (rotationValue.textContent = rotationSpeed.value + "Ã‚Â°/s");
scaleSpeed.oninput = () =>
  (scaleValue.textContent = Number(scaleSpeed.value).toFixed(2));
requestAnimationFrame(frame);
