import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";

const $ = (selector) => document.querySelector(selector);
const container = $("#sceneContainer");
const scene = new THREE.Scene();
scene.background = new THREE.Color("#020812");

const perspectiveCamera = new THREE.PerspectiveCamera(52, 1, 0.1, 100);
perspectiveCamera.position.set(7.5, 5.2, 9.5);
const orthographicCamera = new THREE.OrthographicCamera(-6, 6, 6, -6, 0.1, 100);
orthographicCamera.position.copy(perspectiveCamera.position);
let activeCamera = perspectiveCamera;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
container.appendChild(renderer.domElement);
const renderPass = new RenderPass(scene, activeCamera);
const bloomPass = new UnrealBloomPass(new THREE.Vector2(1, 1), 0, 0.7, 0.35);
const composer = new EffectComposer(renderer);
composer.addPass(renderPass);
composer.addPass(bloomPass);

const clock = new THREE.Clock();
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
const interactiveObjects = [];
const state = {
  environment: true,
  solar: true,
  orbitSpeed: 0.45,
  roughness: 0.35,
  metalness: 0.65,
  time: 0,
  hovered: null,
  selected: null,
  gltfRoot: null,
  mixer: null,
  actions: [],
  activeAction: null,
};
const cameraTarget = new THREE.Vector3(0, 1, 0);

const environmentTexture = createEnvironmentTexture();
environmentTexture.mapping = THREE.EquirectangularReflectionMapping;
scene.environment = environmentTexture;

scene.add(new THREE.HemisphereLight("#c9edff", "#12304a", 1.7));
const keyLight = new THREE.DirectionalLight("#ffffff", 3.2);
keyLight.position.set(5, 8, 4);
keyLight.castShadow = true;
keyLight.shadow.mapSize.set(2048, 2048);
keyLight.shadow.camera.left = -10;
keyLight.shadow.camera.right = 10;
keyLight.shadow.camera.top = 10;
keyLight.shadow.camera.bottom = -10;
scene.add(keyLight);
scene.add(new THREE.PointLight("#4df3ff", 12, 14, 2).translateX(-4));

const ground = new THREE.Mesh(
  new THREE.CircleGeometry(13, 64),
  new THREE.MeshStandardMaterial({
    color: "#0b263b",
    roughness: 0.85,
    metalness: 0.1,
  }),
);
ground.rotation.x = -Math.PI / 2;
ground.receiveShadow = true;
scene.add(ground);

const hierarchyGroup = new THREE.Group();
hierarchyGroup.name = "Hierarchy Parent Group";
hierarchyGroup.position.set(-2.8, 1.4, 0);
const parentMesh = new THREE.Mesh(
  new THREE.BoxGeometry(1.4, 1.4, 1.4),
  new THREE.MeshStandardMaterial({
    color: "#4df3ff",
    roughness: 0.25,
    metalness: 0.4,
  }),
);
parentMesh.name = "Parent Mesh";
parentMesh.castShadow = true;
const childMesh = new THREE.Mesh(
  new THREE.SphereGeometry(0.42, 24, 16),
  new THREE.MeshStandardMaterial({
    color: "#ffca6a",
    roughness: 0.2,
    metalness: 0.7,
  }),
);
childMesh.name = "Child Mesh (local 1, 0.9, 0)";
childMesh.position.set(1, 0.9, 0);
childMesh.castShadow = true;
hierarchyGroup.add(parentMesh, childMesh);
scene.add(hierarchyGroup);
interactiveObjects.push(parentMesh, childMesh);

const solarSystem = new THREE.Group();
solarSystem.name = "Solar System (Hierarchy Challenge)";
solarSystem.position.set(1.8, 0, -2.4);
const sun = mesh(
  new THREE.SphereGeometry(0.7, 32, 20),
  new THREE.MeshStandardMaterial({
    color: "#ffae35",
    emissive: "#7a3000",
    emissiveIntensity: 0.7,
    roughness: 0.35,
    metalness: 0.05,
  }),
  "Sun",
);
sun.position.y = 1.1;
const earthOrbit = new THREE.Group();
earthOrbit.name = "Earth Orbit";
earthOrbit.position.y = 1.1;
const earth = mesh(
  new THREE.SphereGeometry(0.28, 24, 16),
  new THREE.MeshStandardMaterial({
    color: "#4287ff",
    roughness: 0.48,
    metalness: 0.15,
  }),
  "Earth",
);
earth.position.x = 1.45;
const moonOrbit = new THREE.Group();
moonOrbit.name = "Moon Orbit";
moonOrbit.position.x = 1.45;
const moon = mesh(
  new THREE.SphereGeometry(0.11, 16, 12),
  new THREE.MeshStandardMaterial({
    color: "#b7c4d0",
    roughness: 0.9,
    metalness: 0,
  }),
  "Moon",
);
moon.position.x = 0.55;
moonOrbit.add(moon);
earthOrbit.add(earth, moonOrbit);
solarSystem.add(sun, earthOrbit);
scene.add(solarSystem);
interactiveObjects.push(sun, earth, moon);

const gallery = new THREE.Group();
gallery.name = "PBR Material Gallery";
const roughnessValues = [0.1, 0.5, 0.9];
const metalnessValues = [0, 0.5, 1];
roughnessValues.forEach((roughness, row) =>
  metalnessValues.forEach((metalness, column) => {
    const material = new THREE.MeshStandardMaterial({
      color: column === 2 ? "#4df3ff" : "#ff6584",
      roughness,
      metalness,
    });
    const sphere = mesh(
      new THREE.SphereGeometry(0.3, 24, 16),
      material,
      `PBR r${roughness} m${metalness}`,
    );
    sphere.position.set(-1.4 + column * 0.8, 0.35 + (2 - row) * 0.8, -1.9);
    sphere.castShadow = true;
    gallery.add(sphere);
    interactiveObjects.push(sphere);
  }),
);
scene.add(gallery);

const loader = new GLTFLoader();
const modelUrl = new URL("./Duck.glb", import.meta.url).href;
loader.load(
  modelUrl,
  (gltf) => {
    const root = gltf.scene;
    root.name = "Imported Duck GLB";
    fitImportedModel(root);
    root.traverse((object) => {
      if (!object.name) object.name = object.type;
      if (object.isMesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        interactiveObjects.push(object);
      }
    });
    scene.add(root);
    state.gltfRoot = root;
    state.mixer = new THREE.AnimationMixer(root);
    const clips = gltf.animations.length
      ? gltf.animations
      : createFallbackClips();
    state.actions = clips.map((clip) => state.mixer.clipAction(clip));
    if (state.actions.length) playClip(0);
    $("#modelInfo").textContent =
      `${clips.length} clip${clips.length === 1 ? "" : "s"}`;
    $("#statusBadge").textContent = "GLB LOADED · READY";
    log(`GLB loaded: ${root.name}; ${countDescendants(root)} descendants.`);
    console.log("GLB hierarchy", {
      root: root.name,
      descendants: countDescendants(root),
      animations: clips.map((clip) => clip.name),
    });
  },
  undefined,
  (error) => {
    $("#modelInfo").textContent = "Fallback procedural";
    $("#statusBadge").textContent = "FALLBACK SCENE · READY";
    log("Duck.glb tidak dapat dimuat; scene procedural tetap aktif.");
    console.warn("GLB loading error", error);
  },
);

function createEnvironmentTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 256;
  const context = canvas.getContext("2d");
  const gradient = context.createLinearGradient(0, 0, 0, 256);
  gradient.addColorStop(0, "#031322");
  gradient.addColorStop(0.52, "#0b3b4a");
  gradient.addColorStop(1, "#01060c");
  context.fillStyle = gradient;
  context.fillRect(0, 0, 512, 256);
  for (let i = 0; i < 22; i += 1) {
    context.fillStyle = `rgba(77,243,255,${0.04 + i * 0.002})`;
    context.fillRect(i * 27, 45 + (i % 5) * 21, 3, 130);
  }
  return new THREE.CanvasTexture(canvas);
}
function mesh(geometry, material, name) {
  const object = new THREE.Mesh(geometry, material);
  object.name = name;
  object.castShadow = true;
  return object;
}
function countDescendants(root) {
  let count = 0;
  root.traverse(() => {
    count += 1;
  });
  return count;
}
function fitImportedModel(root) {
  // Ukuran GLB berbeda-beda; gunakan bounding box agar model tetap terlihat.
  root.scale.setScalar(1);
  const originalBounds = new THREE.Box3().setFromObject(root);
  const originalSize = originalBounds.getSize(new THREE.Vector3());
  const largestDimension = Math.max(
    originalSize.x,
    originalSize.y,
    originalSize.z,
  );
  const targetSize = 1.8;
  root.scale.setScalar(
    largestDimension > 0 ? targetSize / largestDimension : 1,
  );
  const fittedBounds = new THREE.Box3().setFromObject(root);
  const fittedCenter = fittedBounds.getCenter(new THREE.Vector3());
  root.position.set(
    0.5 - fittedCenter.x,
    0.05 - fittedBounds.min.y,
    0.4 - fittedCenter.z,
  );
}
function createFallbackClips() {
  const times = [0, 0.5, 1];
  return [
    new THREE.AnimationClip("Idle (fallback)", 1, [
      new THREE.NumberKeyframeTrack(".rotation[y]", times, [0, 0.03, 0]),
    ]),
    new THREE.AnimationClip("Walk (fallback)", 1, [
      new THREE.NumberKeyframeTrack(
        ".rotation[y]",
        times,
        [-0.12, 0.12, -0.12],
      ),
    ]),
    new THREE.AnimationClip("Run (fallback)", 0.5, [
      new THREE.NumberKeyframeTrack(
        ".rotation[y]",
        times,
        [-0.25, 0.25, -0.25],
      ),
    ]),
  ];
}
function playClip(index) {
  if (!state.actions.length) return;
  const next = state.actions[index % state.actions.length];
  state.actions.forEach((action) => {
    if (action !== next) action.fadeOut(0.2);
  });
  next.reset().fadeIn(0.2).play();
  state.activeAction = next;
  log(`Animation clip aktif: ${next.getClip().name || index + 1}`);
}
function log(message) {
  $("#logPanel").textContent = message;
}
function materialName(object) {
  return object.material?.type || "Group / tanpa material";
}
function setEmissive(object, enabled) {
  if (!object) return;
  object.traverse((child) => {
    if (!child.isMesh || !child.material) return;
    const materials = Array.isArray(child.material)
      ? child.material
      : [child.material];
    materials.forEach((material) => {
      if (!("emissive" in material)) return;
      if (!material.userData.originalEmissive) {
        material.userData.originalEmissive = material.emissive.clone();
        material.userData.originalEmissiveIntensity =
          material.emissiveIntensity ?? 1;
      }
      material.emissive.copy(
        enabled
          ? new THREE.Color("#d88945")
          : material.userData.originalEmissive,
      );
      material.emissiveIntensity = enabled
        ? 0.45
        : material.userData.originalEmissiveIntensity;
    });
  });
}
function setScaleFeedback(object, scale) {
  if (!object) return;
  const base = object.userData.baseScale || object.scale.clone();
  object.userData.baseScale = base;
  object.scale.copy(base).multiplyScalar(scale);
}
function objectRoot(object) {
  let current = object;
  while (
    current.parent &&
    current.parent !== scene &&
    current.parent.type !== "Scene"
  )
    current = current.parent;
  return current;
}
function updateInfo(object) {
  if (!object) {
    $("#infoTitle").textContent = "Belum ada objek dipilih";
    ["#infoPosition", "#infoRotation", "#infoScale", "#infoMaterial"].forEach(
      (id) => ($(id).textContent = "-"),
    );
    return;
  }
  const world = new THREE.Vector3();
  object.getWorldPosition(world);
  $("#infoTitle").textContent = object.name || object.type;
  $("#infoPosition").textContent =
    `local ${formatVector(object.position)} · world ${formatVector(world)}`;
  $("#infoRotation").textContent = formatVector(object.rotation);
  $("#infoScale").textContent = formatVector(object.scale);
  $("#infoMaterial").textContent = materialName(object);
}
function formatVector(vector) {
  return `${vector.x.toFixed(2)}, ${vector.y.toFixed(2)}, ${vector.z.toFixed(2)}`;
}

function raycast(event) {
  const rect = renderer.domElement.getBoundingClientRect();
  pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  raycaster.setFromCamera(pointer, activeCamera);
  const hit = raycaster.intersectObjects(interactiveObjects, true)[0];
  return hit ? objectRoot(hit.object) : null;
}
renderer.domElement.addEventListener("pointermove", (event) => {
  const next = raycast(event);
  if (next === state.hovered) return;
  if (state.hovered && state.hovered !== state.selected) {
    setEmissive(state.hovered, false);
    setScaleFeedback(state.hovered, 1);
  }
  state.hovered = next;
  $("#hoverInfo").textContent = next?.name || "-";
  bloomPass.strength = next ? 0.12 : 0;
  if (next && next !== state.selected) {
    setEmissive(next, true);
    setScaleFeedback(next, 1.06);
    log(
      `Hover: ${next.name}; NDC ${pointer.x.toFixed(2)}, ${pointer.y.toFixed(2)}`,
    );
  }
});
renderer.domElement.addEventListener("pointerleave", () => {
  if (state.hovered && state.hovered !== state.selected) {
    setEmissive(state.hovered, false);
    setScaleFeedback(state.hovered, 1);
  }
  state.hovered = null;
  $("#hoverInfo").textContent = "-";
  bloomPass.strength = 0;
});
renderer.domElement.addEventListener("click", (event) => {
  const next = raycast(event);
  if (state.selected && state.selected !== next) {
    setEmissive(state.selected, false);
    setScaleFeedback(state.selected, 1);
  }
  state.selected = next;
  $("#selectedInfo").textContent = next?.name || "-";
  updateInfo(next);
  if (next) {
    setEmissive(next, true);
    setScaleFeedback(next, 1.12);
    log(`Selected: ${next.name}; click menjalankan animasi jika tersedia.`);
    if (
      state.gltfRoot &&
      (next === state.gltfRoot || next.parent === state.gltfRoot)
    )
      playClip(0);
  }
});

$("#cameraSelect").addEventListener("change", (event) => {
  activeCamera =
    event.target.value === "orthographic"
      ? orthographicCamera
      : perspectiveCamera;
  updateCamera();
});
$("#fovControl").addEventListener("input", (event) => {
  $("#fovValue").textContent = `${event.target.value}°`;
  perspectiveCamera.fov = Number(event.target.value);
  perspectiveCamera.updateProjectionMatrix();
});
$("#roughnessControl").addEventListener("input", (event) => {
  state.roughness = Number(event.target.value);
  $("#roughnessValue").textContent = state.roughness.toFixed(2);
  updatePbrGallery();
});
$("#metalnessControl").addEventListener("input", (event) => {
  state.metalness = Number(event.target.value);
  $("#metalnessValue").textContent = state.metalness.toFixed(2);
  updatePbrGallery();
});
$("#orbitControl").addEventListener("input", (event) => {
  state.orbitSpeed = Number(event.target.value);
  $("#orbitValue").textContent = state.orbitSpeed.toFixed(2);
});
$("#environmentButton").addEventListener("click", toggleEnvironment);
$("#resetButton").addEventListener("click", resetScene);
$("#solarButton").addEventListener("click", () => {
  state.solar = !state.solar;
  log(`Solar hierarchy: ${state.solar ? "playing" : "paused"}`);
});
$("#clip1Button").addEventListener("click", () => playClip(0));
$("#clip2Button").addEventListener("click", () => playClip(1));
$("#clip3Button").addEventListener("click", () => playClip(2));
window.addEventListener("keydown", (event) => {
  if (event.target.matches("input, select")) return;
  if (event.key.toLowerCase() === "e") toggleEnvironment();
  if (event.key.toLowerCase() === "s") {
    state.solar = !state.solar;
  }
  if (event.key.toLowerCase() === "r") resetScene();
  if (["1", "2", "3"].includes(event.key)) playClip(Number(event.key) - 1);
});

function updatePbrGallery() {
  gallery.children.forEach((object) => {
    object.material.roughness = state.roughness;
    object.material.metalness = state.metalness;
  });
}
function toggleEnvironment() {
  state.environment = !state.environment;
  scene.environment = state.environment ? environmentTexture : null;
  $("#environmentInfo").textContent = state.environment ? "ON" : "OFF";
  log(
    `Environment ${state.environment ? "ON: PBR mendapat refleksi" : "OFF: hanya lighting langsung"}`,
  );
}
function resetScene() {
  state.environment = true;
  state.solar = true;
  state.selected = null;
  state.hovered = null;
  scene.environment = environmentTexture;
  $("#environmentInfo").textContent = "ON";
  $("#selectedInfo").textContent = "-";
  updateInfo(null);
  hierarchyGroup.rotation.set(0, 0, 0);
  solarSystem.rotation.set(0, 0, 0);
  log("Scene di-reset. Klik objek untuk memilih.");
}
function updateCamera() {
  activeCamera.position.set(7.5, 5.2, 9.5);
  activeCamera.lookAt(cameraTarget);
  activeCamera.updateProjectionMatrix();
  renderPass.camera = activeCamera;
}
function resize() {
  const width = container.clientWidth;
  const height = container.clientHeight;
  renderer.setSize(width, height, false);
  perspectiveCamera.aspect = width / height;
  perspectiveCamera.updateProjectionMatrix();
  const aspect = width / height;
  orthographicCamera.left = -6 * aspect;
  orthographicCamera.right = 6 * aspect;
  orthographicCamera.top = 6;
  orthographicCamera.bottom = -6;
  orthographicCamera.updateProjectionMatrix();
  composer.setSize(width, height);
}
window.addEventListener("resize", resize);
resize();
updateCamera();
$("#objectInfo").textContent = String(interactiveObjects.length);

let frameCount = 0;
let fpsTime = 0;
function animate() {
  requestAnimationFrame(animate);
  const delta = Math.min(clock.getDelta(), 0.05);
  state.time += delta;
  if (state.mixer) state.mixer.update(delta);
  hierarchyGroup.rotation.y += delta * 0.35;
  if (state.solar) {
    solarSystem.rotation.y += delta * state.orbitSpeed;
    earth.rotation.y += delta;
    moonOrbit.rotation.y += delta * 2.4;
  }
  if (state.selected) {
    state.selected.rotation.y += delta * 0.55;
  }
  keyLight.position.x = Math.cos(state.time * state.orbitSpeed) * 6;
  activeCamera.lookAt(cameraTarget);
  renderPass.camera = activeCamera;
  composer.render();
  frameCount += 1;
  fpsTime += delta;
  if (fpsTime > 0.5) {
    $("#fpsInfo").textContent = String(Math.round(frameCount / fpsTime));
    frameCount = 0;
    fpsTime = 0;
  }
}
animate();
