// WebGL2 Fundamental & GLSL Basics (best practice)
// Fokus: shader source via <script>, attribute, uniform, varying,
// multiple draw calls, primitive assembly, animasi sederhana, dan interaksi tanpa MVP.

const canvas = document.getElementById("glCanvas");
const errorBox = document.getElementById("webglError");
const gl = canvas.getContext("webgl2");

if (!gl) {
  errorBox.hidden = false;
  throw new Error("WebGL2 tidak tersedia pada browser ini.");
}

const ui = {
  brightnessSlider: document.getElementById("brightnessSlider"),
  brightnessValue: document.getElementById("brightnessValue"),
  pointSizeSlider: document.getElementById("pointSizeSlider"),
  pointSizeValue: document.getElementById("pointSizeValue"),
  speedSlider: document.getElementById("speedSlider"),
  speedValue: document.getElementById("speedValue"),
  primitiveSelect: document.getElementById("primitiveSelect"),
  pauseButton: document.getElementById("pauseButton"),
  resetButton: document.getElementById("resetButton"),
  mouseNdc: document.getElementById("mouseNdc"),
  offsetStatus: document.getElementById("offsetStatus"),
  drawModeStatus: document.getElementById("drawModeStatus"),
};

const state = {
  keys: {},
  offsetX: 0.0,
  offsetY: 0.0,
  moveSpeed: 0.015,
  globalBrightness: Number(ui.brightnessSlider.value),
  pointSize: Number(ui.pointSizeSlider.value),
  animationSpeed: Number(ui.speedSlider.value),
  primitiveFocus: ui.primitiveSelect.value,
  paused: false,
  startTime: performance.now(),
};

function getShaderSource(id) {
  const shaderScript = document.getElementById(id);

  if (!shaderScript) {
    throw new Error(`Shader dengan id '${id}' tidak ditemukan.`);
  }

  return shaderScript.textContent.trim();
}

function createShader(glContext, type, source) {
  const shader = glContext.createShader(type);

  glContext.shaderSource(shader, source);
  glContext.compileShader(shader);

  const success = glContext.getShaderParameter(shader, glContext.COMPILE_STATUS);

  if (!success) {
    const info = glContext.getShaderInfoLog(shader);
    glContext.deleteShader(shader);
    throw new Error(`Shader gagal dikompilasi:\n${info}`);
  }

  return shader;
}

function createProgram(glContext, vertexShader, fragmentShader) {
  const program = glContext.createProgram();

  glContext.attachShader(program, vertexShader);
  glContext.attachShader(program, fragmentShader);
  glContext.linkProgram(program);

  const success = glContext.getProgramParameter(program, glContext.LINK_STATUS);

  if (!success) {
    const info = glContext.getProgramInfoLog(program);
    glContext.deleteProgram(program);
    throw new Error(`Program gagal di-link:\n${info}`);
  }

  return program;
}

function createSceneVertices() {
  // Format setiap vertex: x, y, r, g, b
  return new Float32Array([
    // =========================================================
    // TRIANGLES: tiga segitiga, masing-masing 3 vertex
    // Vertex 0 - 8
    // =========================================================
    -0.92, -0.74, 1.00, 0.25, 0.20,
    -0.62, -0.74, 1.00, 0.25, 0.20,
    -0.77, -0.34, 1.00, 0.60, 0.25,

    -0.17, -0.74, 0.15, 1.00, 0.45,
     0.17, -0.74, 0.15, 1.00, 0.45,
     0.00, -0.30, 0.35, 1.00, 0.90,

     0.62, -0.74, 0.20, 0.50, 1.00,
     0.92, -0.74, 0.20, 0.50, 1.00,
     0.77, -0.34, 0.70, 0.30, 1.00,

    // =========================================================
    // POINTS: tiga titik
    // Vertex 9 - 11
    // =========================================================
    -0.64, 0.04, 1.00, 0.80, 0.20,
     0.00, 0.04, 0.20, 1.00, 1.00,
     0.64, 0.04, 1.00, 0.35, 1.00,

    // =========================================================
    // LINES: dua garis terpisah
    // Vertex 12 - 15
    // =========================================================
    -0.90, 0.36, 1.00, 1.00, 0.20,
    -0.42, 0.36, 1.00, 1.00, 0.20,

     0.42, 0.36, 0.20, 1.00, 1.00,
     0.90, 0.36, 0.20, 1.00, 1.00,

    // =========================================================
    // LINE_STRIP: garis bersambung
    // Vertex 16 - 20
    // =========================================================
    -0.90, 0.68, 0.90, 0.50, 1.00,
    -0.72, 0.80, 0.90, 0.50, 1.00,
    -0.54, 0.66, 0.90, 0.50, 1.00,
    -0.36, 0.78, 0.90, 0.50, 1.00,
    -0.18, 0.64, 0.90, 0.50, 1.00,

    // =========================================================
    // LINE_LOOP: bentuk tertutup berbasis garis
    // Vertex 21 - 24
    // =========================================================
     0.18, 0.62, 1.00, 0.55, 0.25,
     0.38, 0.80, 1.00, 0.55, 0.25,
     0.58, 0.62, 1.00, 0.55, 0.25,
     0.38, 0.46, 1.00, 0.55, 0.25,

    // =========================================================
    // TRIANGLE_STRIP: rectangle sederhana dari 4 vertex
    // Vertex 25 - 28
    // =========================================================
    -0.18, 0.18, 0.15, 0.65, 1.00,
     0.12, 0.18, 0.15, 0.65, 1.00,
    -0.18, 0.44, 0.30, 0.95, 1.00,
     0.12, 0.44, 0.30, 0.95, 1.00,

    // =========================================================
    // TRIANGLE_FAN: bentuk kipas sederhana
    // Vertex 29 - 33
    // =========================================================
     0.66, 0.22, 1.00, 0.35, 0.35,
     0.52, 0.08, 1.00, 0.50, 0.20,
     0.82, 0.08, 1.00, 0.70, 0.20,
     0.86, 0.34, 1.00, 0.85, 0.30,
     0.50, 0.36, 1.00, 0.25, 0.55,
  ]);
}

const vertexShaderSource = getShaderSource("vertex-shader");
const fragmentShaderSource = getShaderSource("fragment-shader");

const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
const program = createProgram(gl, vertexShader, fragmentShader);

const vertices = createSceneVertices();

const vao = gl.createVertexArray();
gl.bindVertexArray(vao);

const vertexBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

const aPositionLocation = gl.getAttribLocation(program, "a_position");
const aColorLocation = gl.getAttribLocation(program, "a_color");

const uTimeLocation = gl.getUniformLocation(program, "u_time");
const uOffsetLocation = gl.getUniformLocation(program, "u_offset");
const uBrightnessLocation = gl.getUniformLocation(program, "u_brightness");
const uPointSizeLocation = gl.getUniformLocation(program, "u_pointSize");
const uWaveAmountLocation = gl.getUniformLocation(program, "u_waveAmount");

const floatsPerVertex = 5;
const stride = floatsPerVertex * Float32Array.BYTES_PER_ELEMENT;
const positionOffset = 0;
const colorOffset = 2 * Float32Array.BYTES_PER_ELEMENT;

gl.enableVertexAttribArray(aPositionLocation);
gl.vertexAttribPointer(
  aPositionLocation,
  2,
  gl.FLOAT,
  false,
  stride,
  positionOffset
);

gl.enableVertexAttribArray(aColorLocation);
gl.vertexAttribPointer(
  aColorLocation,
  3,
  gl.FLOAT,
  false,
  stride,
  colorOffset
);

function resizeCanvasToDisplaySize() {
  const displayWidth = Math.round(canvas.clientWidth * window.devicePixelRatio);
  const displayHeight = Math.round(canvas.clientHeight * window.devicePixelRatio);

  if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
    canvas.width = displayWidth;
    canvas.height = displayHeight;
  }
}

function shouldDraw(groupName) {
  if (state.primitiveFocus === "all") {
    return true;
  }

  return state.primitiveFocus === groupName;
}

function setCommonUniforms(time, brightnessScale, pointSize, waveAmount) {
  gl.uniform1f(uTimeLocation, time);
  gl.uniform2f(uOffsetLocation, state.offsetX, state.offsetY);
  gl.uniform1f(uBrightnessLocation, state.globalBrightness * brightnessScale);
  gl.uniform1f(uPointSizeLocation, pointSize);
  gl.uniform1f(uWaveAmountLocation, waveAmount);
}

function drawScene(time) {
  gl.useProgram(program);
  gl.bindVertexArray(vao);

  // ===========================================================
  // Primitive 1: TRIANGLES
  // Tiga segitiga digambar dengan brightness berbeda.
  // ===========================================================
  if (shouldDraw("triangles")) {
    setCommonUniforms(time, 0.55, 1.0, 0.008);
    gl.drawArrays(gl.TRIANGLES, 0, 3);

    setCommonUniforms(time, 1.0, 1.0, 0.012);
    gl.drawArrays(gl.TRIANGLES, 3, 3);

    setCommonUniforms(time, 1.45, 1.0, 0.010);
    gl.drawArrays(gl.TRIANGLES, 6, 3);
  }

  // ===========================================================
  // Primitive 2: POINTS
  // u_pointSize hanya terlihat saat mode draw adalah POINTS.
  // ===========================================================
  if (shouldDraw("points")) {
    setCommonUniforms(time, 1.0, state.pointSize * 0.55, 0.016);
    gl.drawArrays(gl.POINTS, 9, 1);

    setCommonUniforms(time, 1.0, state.pointSize, 0.016);
    gl.drawArrays(gl.POINTS, 10, 1);

    setCommonUniforms(time, 1.0, state.pointSize * 1.45, 0.016);
    gl.drawArrays(gl.POINTS, 11, 1);
  }

  // ===========================================================
  // Primitive 3: LINES
  // Setiap dua vertex menjadi satu garis.
  // ===========================================================
  if (shouldDraw("lines")) {
    setCommonUniforms(time, 0.8, 1.0, 0.004);
    gl.drawArrays(gl.LINES, 12, 2);

    setCommonUniforms(time, 1.25, 1.0, 0.004);
    gl.drawArrays(gl.LINES, 14, 2);
  }

  // ===========================================================
  // Primitive 4: LINE_STRIP dan LINE_LOOP
  // LINE_STRIP menyambungkan vertex berurutan.
  // LINE_LOOP menyambungkan vertex terakhir kembali ke vertex pertama.
  // ===========================================================
  if (shouldDraw("stripLoop")) {
    setCommonUniforms(time, 1.1, 1.0, 0.006);
    gl.drawArrays(gl.LINE_STRIP, 16, 5);

    setCommonUniforms(time, 1.0, 1.0, 0.006);
    gl.drawArrays(gl.LINE_LOOP, 21, 4);
  }

  // ===========================================================
  // Primitive 5: TRIANGLE_STRIP dan TRIANGLE_FAN
  // ===========================================================
  if (shouldDraw("triangleStripFan")) {
    setCommonUniforms(time, 0.95, 1.0, 0.010);
    gl.drawArrays(gl.TRIANGLE_STRIP, 25, 4);

    setCommonUniforms(time, 1.1, 1.0, 0.010);
    gl.drawArrays(gl.TRIANGLE_FAN, 29, 5);
  }
}

function updateKeyboard() {
  if (state.keys.ArrowLeft || state.keys.a || state.keys.A) {
    state.offsetX -= state.moveSpeed;
  }

  if (state.keys.ArrowRight || state.keys.d || state.keys.D) {
    state.offsetX += state.moveSpeed;
  }

  if (state.keys.ArrowUp || state.keys.w || state.keys.W) {
    state.offsetY += state.moveSpeed;
  }

  if (state.keys.ArrowDown || state.keys.s || state.keys.S) {
    state.offsetY -= state.moveSpeed;
  }

  state.offsetX = Math.max(-0.22, Math.min(0.22, state.offsetX));
  state.offsetY = Math.max(-0.16, Math.min(0.16, state.offsetY));
}

function updateUiStatus() {
  ui.offsetStatus.textContent = `(${state.offsetX.toFixed(2)}, ${state.offsetY.toFixed(2)})`;
  ui.drawModeStatus.textContent = ui.primitiveSelect.options[ui.primitiveSelect.selectedIndex].textContent;
}

function render(now) {
  if (!state.paused) {
    updateKeyboard();
  }

  resizeCanvasToDisplaySize();
  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.clearColor(0.02, 0.04, 0.09, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  const elapsedSeconds = ((now - state.startTime) / 1000) * state.animationSpeed;
  drawScene(elapsedSeconds);
  updateUiStatus();

  requestAnimationFrame(render);
}

function resetPosition() {
  state.offsetX = 0.0;
  state.offsetY = 0.0;
}

function togglePause() {
  state.paused = !state.paused;
  ui.pauseButton.textContent = state.paused ? "Resume" : "Pause";
}

window.addEventListener("keydown", (event) => {
  const movementKeys = [
    "ArrowLeft",
    "ArrowRight",
    "ArrowUp",
    "ArrowDown",
    "w",
    "a",
    "s",
    "d",
    "W",
    "A",
    "S",
    "D",
    " ",
  ];

  if (movementKeys.includes(event.key)) {
    event.preventDefault();
  }

  state.keys[event.key] = true;

  if (event.key.toLowerCase() === "r" && !event.repeat) {
    resetPosition();
  }

  if (event.key === " " && !event.repeat) {
    togglePause();
  }
});

window.addEventListener("keyup", (event) => {
  state.keys[event.key] = false;
});

canvas.addEventListener("mousemove", (event) => {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  const ndcX = (x / rect.width) * 2 - 1;
  const ndcY = 1 - (y / rect.height) * 2;

  ui.mouseNdc.textContent = `(${ndcX.toFixed(2)}, ${ndcY.toFixed(2)})`;
});

ui.brightnessSlider.addEventListener("input", () => {
  state.globalBrightness = Number(ui.brightnessSlider.value);
  ui.brightnessValue.textContent = state.globalBrightness.toFixed(2);
});

ui.pointSizeSlider.addEventListener("input", () => {
  state.pointSize = Number(ui.pointSizeSlider.value);
  ui.pointSizeValue.textContent = String(state.pointSize);
});

ui.speedSlider.addEventListener("input", () => {
  state.animationSpeed = Number(ui.speedSlider.value);
  ui.speedValue.textContent = state.animationSpeed.toFixed(1);
});

ui.primitiveSelect.addEventListener("change", () => {
  state.primitiveFocus = ui.primitiveSelect.value;
});

ui.pauseButton.addEventListener("click", togglePause);
ui.resetButton.addEventListener("click", resetPosition);

requestAnimationFrame(render);
