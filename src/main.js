import * as THREE from 'https://cdn.skypack.dev/three@0.128.0';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/loaders/GLTFLoader.js';

export async function activateXR() {

  const loader = new GLTFLoader();
  let reticle;
  loader.load("https://immersive-web.github.io/webxr-samples/media/gltf/reticle/reticle.gltf", function(gltf) {
    reticle = gltf.scene;
    reticle.visible = false;
    scene.add(reticle);
  })
      //
  let flower;
  loader.load("./src/model.glb", function(gltf) {  //https://immersive-web.github.io/webxr-samples/media/gltf/sunflower/sunflower.gltf"
    flower = gltf.scene;
    flower.scale.set(0.1,0.1,0.1);
    
  });

    // Add a canvas element and initialize a WebGL context that is compatible with WebXR.
  const canvas = document.createElement("canvas");
  document.body.appendChild(canvas);
  const gl = canvas.getContext("webgl", {xrCompatible: true});
  const scene = new THREE.Scene();
  // creo luces
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.3);
  directionalLight.position.set(10, 15, 10);
  scene.add(directionalLight);
    
  // Set up the WebGLRenderer, which handles rendering to the session's base layer.
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    preserveDrawingBuffer: true,
    canvas: canvas,
    context: gl
    });
  renderer.autoClear = false;
    
  // The API directly updates the camera matrices.
  // Disable matrix auto updates so three.js doesn't attempt
  // to handle the matrices independently.
  const camera = new THREE.PerspectiveCamera();
  camera.matrixAutoUpdate = false;
  // Initialize a WebXR session using "immersive-ar".
  const session = await navigator.xr.requestSession("immersive-ar", {requiredFeatures: ['hit-test']});    // para que reconozca el hit
  session.updateRenderState({
    baseLayer: new XRWebGLLayer(session, gl)
  });
const referenceSpace = await session.requestReferenceSpace('local');
  // Create another XRReferenceSpace that has the viewer as the origin.
const viewerSpace = await session.requestReferenceSpace('viewer');
// Perform hit testing using the viewer as origin.
const hitTestSource = await session.requestHitTestSource({ space: viewerSpace });

const material = new THREE.MeshBasicMaterial({ color: "#ecff33" });
const geometry = new THREE.BoxGeometry();
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

  session.addEventListener("select", (event) => {
    if (flower) {
      console.log(flower.position);
      const clone = flower.clone();
      clone.position.copy(reticle.position);
      scene.add(clone);
    }
  });
// Create a render loop that allows us to draw on the AR view.
const onXRFrame = (time, frame) => {
  // Queue up the next draw request.
  session.requestAnimationFrame(onXRFrame);
  // Bind the graphics framebuffer to the baseLayer's framebuffer
  gl.bindFramebuffer(gl.FRAMEBUFFER, session.renderState.baseLayer.framebuffer)
  // Retrieve the pose of the device.
  // XRFrame.getViewerPose can return null while the session attempts to establish tracking.
  const pose = frame.getViewerPose(referenceSpace);
  if (pose) {
    // In mobile AR, we only have one view.
    const view = pose.views[0];

    const viewport = session.renderState.baseLayer.getViewport(view);
    renderer.setSize(viewport.width, viewport.height)

    // Use the view's transform matrix and projection matrix to configure the THREE.camera.
    camera.matrix.fromArray(view.transform.matrix)
    camera.projectionMatrix.fromArray(view.projectionMatrix);
    camera.updateMatrixWorld(true);

    const hitTestResults = frame.getHitTestResults(hitTestSource);
if (hitTestResults.length > 0 && reticle) {
  const hitPose = hitTestResults[0].getPose(referenceSpace);
  reticle.visible = true;
  reticle.position.set(hitPose.transform.position.x, hitPose.transform.position.y, hitPose.transform.position.z)
  reticle.updateMatrixWorld(true);
}
    // Render the scene with THREE.WebGLRenderer.
    renderer.render(scene, camera)
  }
}
session.requestAnimationFrame(onXRFrame);
}