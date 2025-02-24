import * as THREE from 'https://cdn.skypack.dev/three@0.128.0';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/loaders/GLTFLoader.js';
import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";
import * as CUI from "@thatopen/ui-obc";
import * as OBF from "@thatopen/components-front";
import * as WEBIFC from "web-ifc";

import proj4 from 'proj4';
import * as ADDS from './addition.js'


initXR();

function initXR() {

  let pose=null;
  let hitPose=null;
  let hits = 0;
  let origen=null;
  let model=null;
  let hitTestSource = null;
  let hitTestSourceRequested = false;

  // lo primero, comprobar que el navegador es compatible.
  if (navigator.xr) {

    const startButton = document.getElementById('fetchButton');
    startButton.addEventListener('click', async () => {
    // Solicitar una sesión de realidad aumentada
      const session = await navigator.xr.requestSession('immersive-ar', {
        requiredFeatures: ['local-floor','hit-test']
      });
       
        const container = document.getElementById('container');
        //const canvas = document.createElement("canvas");
        //container.appendChild(canvas);
        //const gl = canvas.getContext("webgl", {xrCompatible: true});
            // Crear una escena y una cámara
        const scene = new THREE.Scene();
        // creo luces
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(10, 15, 10);
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3); 
        scene.add(ambientLight);
        scene.add(directionalLight);
        scene.add( new THREE.HemisphereLight( 0xa5a5a5, 0x898989, 3 ) );

        const renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: true,
          preserveDrawingBuffer: true,
          //canvas: canvas,
          //context: gl
        });
        //renderer.autoClear = false;
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        //renderer.setAnimationLoop(onXRFrame);
        // Crear un renderizador de WebXR
        renderer.xr.enabled = true;
        renderer.xr.setReferenceSpaceType('local-floor');
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);
        camera.matrixAutoUpdate=false;  
        container.appendChild(renderer.domElement);

        
        // cargamos thatpoen components para poder cargar el IFC
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
        // *************************************************************************************************
        async function loadIfc(UTMPosition,miPose) {//UTMPosition, miPose, orientation) {
          const file = await fetch(
            "https://manchadoc.github.io/bimxr/assets/dpto.ifc", //"./src/model.ifc",  // https://thatopen.github.io/engine_components/resources/small.ifc 
          );
          const data = await file.arrayBuffer();
          const buffer = new Uint8Array(data);
          model = await fragmentIfcLoader.load(buffer);
          //  yo se que el 0 0 0 del modelo corresponde a las coordenadas que están en la coordinationMatrix
          // guardo mi posición actual en currentUTM
          model.name = "Dpto";
          scene.add(model);
          //model.quaternion.copy(orientation);
          //model.quaternion.set(orientation.x, orientation.y, orientation.z, orientation.w);

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
          model.position.set(dif.x, -miPose.y, -dif.z);  // con esto ponemos el 00 del modelo en donde esté nuestra pose*/
          // ******************************************
          // gestionamos propiedades
          const properties = model.getLocalProperties();
          console.log(properties);
        }
        // FIN FUNCION CARGA IFC
        // *********************************************************************************************************************

        const referenceSpace = await session.requestReferenceSpace('local-floor');
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
          const origen = new DOMPointReadOnly(0,0,0);
          const modeloBIM = loadIfc(UTMposition, origen);//UTMposition,origen, horizontalQuaternion);
          // ************************************************************************************************************************             
          
        // Crear un canvas para dibujar la realidad aumentada
        //const canvas = document.createElement('canvas');
        //document.body.appendChild(canvas);
        //const gl = canvas.getContext('webgl2', { xrCompatible: true });
        
        // Configurar el renderizador para la sesión de AR
       // session.updateRenderState({
        //  baseLayer: new XRWebGLLayer(session, gl)
        //});

        // Configurar la referencia de espacio
        
        function onWindowResize() {

          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize( window.innerWidth, window.innerHeight );
  
        }
        // Bucle de animación
  // Create a render loop that allows us to draw on the AR view.
        const gl = renderer.domElement.getContext('webgl2', { xrCompatible: true });
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
        //}
        session.requestAnimationFrame(onXRFrame);

        // Finalizar la sesión
        session.onend = () => {
            renderer.setAnimationLoop(null);
            canvas.remove();
        };
    });
  } else {
    console.log('WebXR no es compatible con este navegador.');
  }
}