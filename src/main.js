import * as THREE from 'https://cdn.skypack.dev/three@0.128.0';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/loaders/GLTFLoader.js';
import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";
import * as CUI from "@thatopen/ui-obc";
import * as OBF from "@thatopen/components-front";
import * as WEBIFC from "web-ifc";
import proj4 from 'proj4';
import * as ADDS from "./addition.js";

let pose =null;
let hitPose=null;
let hits = 0;
let origen=null;
let model=null;
// Función para transformar coordenadas a UTM
// Función para obtener las UTM 


// FUNCION PRINCIPAL QUE SE ACTIVA AL PULSAR EL BOTÓN DE LA WEB
export async function activateXR() { 
  const components = new OBC.Components();
  components.init();
  const fragments = components.get(OBC.FragmentsManager);
  const fragmentIfcLoader = components.get(OBC.IfcLoader);
  await fragmentIfcLoader.setup();
  const excludedCats = [
      //WEBIFC.IFCTENDONANCHOR,
      //WEBIFC.IFCREINFORCINGBAR,
      //WEBIFC.IFCREINFORCINGELEMENT,
  ];
  for (const cat of excludedCats) {
      fragmentIfcLoader.settings.excludedCategories.add(cat);
  }
  fragmentIfcLoader.settings.webIfc.COORDINATE_TO_ORIGIN = true;
  // Hasta aquí hemos inicializado el generador de fragments para cargar el IFC. 

// FUNCION CARGA IFC. Está aquí porque depende del fragmentIfcLoader que acabo de cargar.
async function loadIfc(UTMPosition, miPose, orientation) {

  const file = await fetch(
    "https://manchadoc.github.io/bimxr/assets/dpto.ifc", //"./src/model.ifc",  // https://thatopen.github.io/engine_components/resources/small.ifc 
  );
  const data = await file.arrayBuffer();
  const buffer = new Uint8Array(data);
  model = await fragmentIfcLoader.load(buffer);
  //  yo se que el 0 0 0 del modelo corresponde a las coordenadas que están en la coordinationMatrix
  // guardo mi posición actual en currentUTM
  model.name = "example";

  //model.quaternion.copy(orientation);
  //model.quaternion.set(orientation.x, orientation.y, orientation.z, orientation.w);
  scene.add(model);
  //model.position.set(position.x, -position.z, position.y);


  // el punto almacenado en coordinationMatrix coincide con el 000
  // las coordenadas UTM del punto que quiero lo tengo en UTMPosition

  // matriz para poder obtener la coordenada absoluta de cualquier punto
  //const transformBinvert = model.coordinationMatrix.clone();
  //transformBinvert.invert();

  const positionVector = new THREE.Vector3();
  positionVector.setFromMatrixPosition(UTMPosition);    // esta es la que queremos como posición de inicio

  const invertCoord = model.coordinationMatrix.clone();
  invertCoord.invert();

  const posUtm = new THREE.Vector3(miPose.x, miPose.y, miPose.z).applyMatrix4(invertCoord);
  posUtm.z*=-1;
  const dif = posUtm.sub(positionVector)

  model.position.set(dif.x, -miPose.y, -dif.z);  // con esto ponemos el 00 del modelo en donde esté nuestra pose
  // ******************************************

  // gestionamos propiedades
  const properties = model.getLocalProperties();
  console.log(properties);


  // **********
}
// FIN FUNCION CARGA IFC
// *********************************************************************************************************************
  
  // Add a canvas element and initialize a WebGL context that is compatible with WebXR.
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const gl = canvas.getContext("webgl", {xrCompatible: true});
const scene = new THREE.Scene();
// creo luces
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(10, 15, 10);
const ambientLight = new THREE.AmbientLight(0xffffff, 0.3); 
scene.add(ambientLight);
scene.add(directionalLight);
// *************************************************************************************************************
const loader = new GLTFLoader();
let reticle;
loader.load("https://immersive-web.github.io/webxr-samples/media/gltf/reticle/reticle.gltf", function(gltf) {
    reticle = gltf.scene;
    reticle.visible = false;
    scene.add(reticle);
})
// ************************************************************************************************************
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
const width = window.innerWidth;
const height = window.innerHeight;
// Dimensiones de la ventana


// Parámetros de la cámara ortográfica
const aspect = width / height;
const frustumSize = 10;
const camera = new THREE.PerspectiveCamera(50,aspect, 0.1, 1000);
/*const camera = new THREE.OrthographicCamera(
  -frustumSize * aspect / 2,   // left
  frustumSize * aspect / 2,    // right
  frustumSize / 2,                  // top
  -frustumSize / 2,                 // bottom
  1,                                // near
  1000                              // far
);*/
camera.matrixAutoUpdate = false;


  // comrpobramos primero si el navegador soporta XR

if (navigator.xr) {
  // pedimos la sesión inmersiva con hit-test
  const session = await navigator.xr.requestSession("immersive-ar", {requiredFeatures: ["local-floor", 'hit-test']});   
  session.updateRenderState({
    baseLayer: new XRWebGLLayer(session, gl)
  });
  const overlayText = document.getElementById('overlayText');
  overlayText.textContent = "Seleccione el origen de ubicación del modelo";
  const referenceSpace = await session.requestReferenceSpace('local-floor');  //espacio de referencia medido desde el suelo. 0,0,0 en los "pies"
  // Create another XRReferenceSpace that has the viewer as the origin.
  const viewerSpace = await session.requestReferenceSpace('viewer');  // espacio de referencia medido desde el observador. 0,0,0 en la cabeza del usuario
// Perform hit testing using the viewer as origin.
  const hitTestSource = await session.requestHitTestSource({ space: viewerSpace });

  const handleSelect = (event) => {
    //console.log(pose.transform.position);     //( esta es la posición del dispositivo (0,0 en planimetria, y la altura a la que se encuentra respecto al suelo))
    //console.log(hitPose.transform.position);  // en este punto se supone que queremos poner el modelo
    hits+=1;
    let initialOrientation=null;
    let finalOrientatation=null;
    if (hits==1) {
      origen = pose.transform.position;   // posición del viewer respecto al floor con la configuración actual
      initialOrientation = hitPose.transform.orientation;
      overlayText.textContent = "Seleccione la dirección del eje X";
    } 
    else if (hits==2) {
      // recoger los valores introducidos en la web
      const valores = ADDS.getValues();
      const check = valores[0];
      let coordenadasUTM;
      let UTMposition = new THREE.Matrix4().makeTranslation(0,0,0);
      if (valores[0]) {
        UTMposition.makeTranslation(parseFloat(valores[1]),parseFloat(valores[3]), parseFloat(valores[2]));
      } else {
        getCurrentUTM(utmCoords => {
          coordenadasUTM = utmCoords;
          UTMposition.makeTranslation(coordenadasUTM[0],valores[3], coordenadasUTM[1]);
        });
      }

      finalOrientatation = hitPose.transform.orientation;
      let orientation = hitPose.transform.orientation;
      let euler = new THREE.Euler().setFromQuaternion(
        new THREE.Quaternion(orientation.x, orientation.y, orientation.z, orientation.w)
      );
      let horizontalOrientation = new THREE.Euler(0, euler.y, 0);
      let horizontalQuaternion = new THREE.Quaternion().setFromEuler(horizontalOrientation);
      const modeloBIM = loadIfc(UTMposition,origen, horizontalQuaternion);
    }
  }
 session.addEventListener("select", handleSelect);

  // Create a render loop that allows us to draw on the AR view.
  const onXRFrame = (time, frame) => {
    session.requestAnimationFrame(onXRFrame);
    // Bind the graphics framebuffer to the baseLayer's framebuffer
    gl.bindFramebuffer(gl.FRAMEBUFFER, session.renderState.baseLayer.framebuffer)
    // Retrieve the pose of the device.
    // XRFrame.getViewerPose can return null while the session attempts to establish tracking.
    pose = frame.getViewerPose(referenceSpace);
    if (pose) {
      for (let view of pose.views) {
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
          hitPose = hitTestResults[0].getPose(referenceSpace);  
          reticle.visible = true;
          reticle.position.set(hitPose.transform.position.x, hitPose.transform.position.y, hitPose.transform.position.z)
          reticle.updateMatrixWorld(true);
        }
        if (model) {
          const miPos = pose.views[0].transform.position;
          const modelPos = model.position;

          const invertCoord = model.coordinationMatrix.clone();
          invertCoord.invert();
          const posUtm = new THREE.Vector3(miPos.x-modelPos.x, miPos.y, miPos.z-modelPos.z).applyMatrix4(invertCoord);
          posUtm.z*=-1;
          overlayText.textContent =miPos.x + ", " + miPos.y + ", "+ miPos.z + " ||| " + posUtm.x.toFixed(2) + " | " + posUtm.z.toFixed(2);
        } 
      }
      
      
      // Render the scene with THREE.WebGLRenderer.
      renderer.render(scene, camera)
    }
  }
  session.requestAnimationFrame(onXRFrame);
  }
}