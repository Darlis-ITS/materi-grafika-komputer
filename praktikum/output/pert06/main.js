import * as THREE from "three";

const container = document.querySelector("#sceneContainer");
const scene = new THREE.Scene();
scene.background = new THREE.Color("#07111f");

const cameraPerspective = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
cameraPerspective.position.set(4.8, 3.6, 6.5);
const cameraOrthographic = new THREE.OrthographicCamera(-5, 5, 5, -5, 0.1, 100);
cameraOrthographic.position.copy(cameraPerspective.position);
let activeCamera = cameraPerspective;

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
container.appendChild(renderer.domElement);

const clock = new THREE.Clock();
const keys = {};
const state = {
  animation: true,
  lightOrbit: false,
  gallery: true,
  segment: 24,
  lightIntensity: 1.2,
  time: 0,
};

const cameraTarget = new THREE.Vector3(0, 0.8, 0);
const mainCube = new THREE.Mesh(
  new THREE.BoxGeometry(1.25, 1.25, 1.25),
  new THREE.MeshStandardMaterial({
    color: "#4df3ff",
    roughness: 0.28,
    metalness: 0.25,
  }),
);
mainCube.position.set(-1.4, 1, 0);
mainCube.castShadow = true;
scene.add(mainCube);

const ground = new THREE.Mesh(
  new THREE.PlaneGeometry(14, 14),
  new THREE.MeshLambertMaterial({ color: "#102a40" }),
);
ground.rotation.x = -Math.PI / 2;
ground.receiveShadow = true;
scene.add(ground);

const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(0.72, state.segment, state.segment),
  new THREE.MeshPhongMaterial({ color: "#ff6584", shininess: 70 }),
);
sphere.position.set(0.5, 0.85, 0);
sphere.castShadow = true;
scene.add(sphere);

const cone = new THREE.Mesh(
  new THREE.ConeGeometry(0.65, 1.5, state.segment),
  new THREE.MeshStandardMaterial({
    color: "#ffd166",
    roughness: 0.42,
    metalness: 0.08,
  }),
);
cone.position.set(1.9, 0.75, -0.2);
cone.castShadow = true;
scene.add(cone);

const torus = new THREE.Mesh(
  new THREE.TorusKnotGeometry(0.55, 0.18, 64, 12),
  new THREE.MeshNormalMaterial(),
);
torus.position.set(2.1, 1.1, -2);
torus.castShadow = true;
scene.add(torus);

const gallery = new THREE.Group();
const galleryMaterials = [
  new THREE.MeshBasicMaterial({ color: "#74b9ff" }),
  new THREE.MeshLambertMaterial({ color: "#55efc4" }),
  new THREE.MeshPhongMaterial({ color: "#a78bfa", shininess: 90 }),
];
galleryMaterials.forEach((material, index) => {
  const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(0.65, 0.65, 0.65),
    material,
  );
  mesh.position.set(-2.6 + index * 0.8, 0.35, -2.4);
  mesh.castShadow = true;
  gallery.add(mesh);
});
scene.add(gallery);

const ambientLight = new THREE.AmbientLight("#9ecbff", 0.35);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(
  "#ffffff",
  state.lightIntensity,
);
directionalLight.position.set(3, 6, 4);
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.set(1024, 1024);
directionalLight.shadow.camera.left = -7;
directionalLight.shadow.camera.right = 7;
directionalLight.shadow.camera.top = 7;
directionalLight.shadow.camera.bottom = -7;
directionalLight.shadow.camera.near = 0.1;
directionalLight.shadow.camera.far = 20;
scene.add(directionalLight);
const pointLight = new THREE.PointLight("#4df3ff", 1.1, 12);
pointLight.position.set(-2, 3, 2);
pointLight.castShadow = true;
scene.add(pointLight);
const lightMarker = new THREE.Mesh(
  new THREE.SphereGeometry(0.1, 12, 8),
  new THREE.MeshBasicMaterial({ color: "#fff1a8" }),
);
scene.add(lightMarker);

function updateCameraProjection() {
  const aspect = container.clientWidth / Math.max(container.clientHeight, 1);
  cameraPerspective.aspect = aspect;
  cameraPerspective.updateProjectionMatrix();
  const size = 4.8;
  cameraOrthographic.left = -size * aspect;
  cameraOrthographic.right = size * aspect;
  cameraOrthographic.top = size;
  cameraOrthographic.bottom = -size;
  cameraOrthographic.updateProjectionMatrix();
}

function resize() {
  const width = Math.max(container.clientWidth, 1);
  const height = Math.max(container.clientHeight, 1);
  renderer.setSize(width, height, false);
  updateCameraProjection();
}

function updateHud() {
  document.querySelector("#cameraInfo").textContent =
    activeCamera === cameraPerspective ? "Perspective" : "Orthographic";
  document.querySelector("#objectInfo").textContent = String(
    scene.children.length,
  );
  document.querySelector("#rendererInfo").textContent =
    `${renderer.info.render.triangles} tris`;
  document.querySelector("#lightInfo").textContent =
    directionalLight.intensity.toFixed(2);
  document.querySelector("#animationInfo").textContent = state.animation
    ? "Playing"
    : "Paused";
  document.querySelector("#statusBadge").textContent = state.animation
    ? "RUNNING · THREE.JS"
    : "PAUSED · THREE.JS";
}

function updateObject(deltaTime) {
  const movement = 2.2 * deltaTime;
  if (keys.ArrowLeft || keys.a) mainCube.position.x -= movement;
  if (keys.ArrowRight || keys.d) mainCube.position.x += movement;
  if (keys.ArrowUp || keys.w) mainCube.position.z -= movement;
  if (keys.ArrowDown || keys.s) mainCube.position.z += movement;
  if (keys.q) mainCube.rotation.y -= 1.8 * deltaTime;
  if (keys.e) mainCube.rotation.y += 1.8 * deltaTime;
  mainCube.position.x = THREE.MathUtils.clamp(mainCube.position.x, -3.6, 3.6);
  mainCube.position.z = THREE.MathUtils.clamp(mainCube.position.z, -3.2, 2.4);
}

function updateScene(deltaTime) {
  updateObject(deltaTime);
  if (state.lightOrbit) {
    directionalLight.position.x = Math.sin(state.time) * 4;
    directionalLight.position.z = Math.cos(state.time) * 4;
  }
  lightMarker.position.copy(directionalLight.position);
  sphere.rotation.y += deltaTime * 0.8;
  sphere.position.y = 0.85 + Math.sin(state.time * 1.8) * 0.18;
  cone.rotation.y -= deltaTime * 0.65;
  torus.rotation.x += deltaTime * 0.8;
  torus.rotation.y += deltaTime * 1.1;
  gallery.children.forEach((mesh, index) => {
    mesh.rotation.y += deltaTime * (0.35 + index * 0.15);
  });
  activeCamera.lookAt(cameraTarget);
}

function render() {
  renderer.render(scene, activeCamera);
  updateHud();
}

function animate() {
  requestAnimationFrame(animate);
  const deltaTime = Math.min(clock.getDelta(), 0.05);
  if (state.animation) {
    state.time += deltaTime;
    updateScene(deltaTime);
  }
  render();
}

function toggleCamera() {
  activeCamera =
    activeCamera === cameraPerspective ? cameraOrthographic : cameraPerspective;
  activeCamera.position.copy(cameraPerspective.position);
  updateCameraProjection();
}

function toggleGallery() {
  state.gallery = !state.gallery;
  gallery.visible = state.gallery;
}
function toggleAnimation() {
  state.animation = !state.animation;
  document.querySelector("#animationButton").textContent = state.animation
    ? "Pause (G)"
    : "Resume (G)";
}

function reset() {
  mainCube.position.set(-1.4, 1, 0);
  mainCube.rotation.set(0, 0, 0);
  directionalLight.position.set(3, 6, 4);
  directionalLight.intensity = 1.2;
  state.lightOrbit = false;
  state.animation = true;
  document.querySelector("#lightControl").value = 1.2;
  document.querySelector("#lightValue").textContent = "1.20";
  document.querySelector("#animationButton").textContent = "Pause (G)";
}

function updateSegments(value) {
  const segment = Number(value);
  const oldSphereGeometry = sphere.geometry;
  const oldConeGeometry = cone.geometry;
  sphere.geometry = new THREE.SphereGeometry(0.72, segment, segment);
  cone.geometry = new THREE.ConeGeometry(0.65, 1.5, segment);
  oldSphereGeometry.dispose();
  oldConeGeometry.dispose();
  document.querySelector("#segmentValue").textContent = String(segment);
}

document.querySelector("#cameraSelect").addEventListener("change", (event) => {
  if (
    (event.target.value === "perspective") !==
    (activeCamera === cameraPerspective)
  )
    toggleCamera();
});
document.querySelector("#cameraButton").addEventListener("click", toggleCamera);
document.querySelector("#lightOrbitButton").addEventListener("click", () => {
  state.lightOrbit = !state.lightOrbit;
});
document
  .querySelector("#galleryButton")
  .addEventListener("click", toggleGallery);
document
  .querySelector("#animationButton")
  .addEventListener("click", toggleAnimation);
document.querySelector("#resetButton").addEventListener("click", reset);
document.querySelector("#fovControl").addEventListener("input", (event) => {
  cameraPerspective.fov = Number(event.target.value);
  cameraPerspective.updateProjectionMatrix();
  document.querySelector("#fovValue").textContent = `${event.target.value}°`;
});
document.querySelector("#lightControl").addEventListener("input", (event) => {
  directionalLight.intensity = Number(event.target.value);
  document.querySelector("#lightValue").textContent = Number(
    event.target.value,
  ).toFixed(2);
});
document
  .querySelector("#segmentControl")
  .addEventListener("input", (event) => updateSegments(event.target.value));
document.querySelector("#shadowSelect").addEventListener("change", (event) => {
  const size = Number(event.target.value);
  directionalLight.shadow.mapSize.set(size, size);
  directionalLight.shadow.map?.dispose();
  directionalLight.shadow.map = null;
});

window.addEventListener("keydown", (event) => {
  const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
  if (
    ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", " "].includes(event.key)
  )
    event.preventDefault();
  keys[key] = true;
  if (event.repeat) return;
  if (key === "c") toggleCamera();
  if (key === "l") state.lightOrbit = !state.lightOrbit;
  if (key === "h") toggleGallery();
  if (key === "g") toggleAnimation();
  if (key === "r") reset();
});
window.addEventListener("keyup", (event) => {
  const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
  keys[key] = false;
});
window.addEventListener("resize", resize);

resize();
render();
animate();
