import * as THREE from 'three';
import * as OBC from "@thatopen/components";
import * as ADDS from "./addition.js";
import { CSS3DObject, CSS3DRenderer } from 'three/addons/renderers/CSS3DRenderer.js';

			let camera, scene, renderer;
      let currentSession = null;
      let modeloBIM=null;
      let pose=null;
      let referenceSpace=null;
      let initialPose=null;
      let cssRenderer=null;

	export	async function initXR() {
            // *****************************************************************************************************************

        // FUNCION CARGA IFC. Está aquí porque depende del fragmentIfcLoader que acabo de cargar.

        // FIN FUNCION CARGA IFC
        // *********************************************************************************************************************



        // Configuración de escena, cámara y renderer    ***************************************************************
				const container = document.getElementById("container");
	
				scene = new THREE.Scene();
				camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 20 );
				const defaultLight = new THREE.HemisphereLight( 0xffffff, 0xbbbbff, 1 );
				defaultLight.position.set( 0.5, 1, 0.25 );
				scene.add( defaultLight );
				//

				renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				//renderer.setAnimationLoop( animate );
				renderer.xr.enabled = true;
				container.appendChild( renderer.domElement );
        // *************************************************************************************************************

        // Creación de la sesión inmersiva AR
        if ( currentSession === null ) {
					navigator.xr.requestSession( 'immersive-ar', {requiredFeatures: ["local-floor", 'hit-test']} ).then( onSessionStarted );
				} else {
					currentSession.end();
					if ( navigator.xr.offerSession !== undefined ) {
						navigator.xr.offerSession( 'immersive-ar', {requiredFeatures: ["local-floor", 'hit-test']} )
							.then( onSessionStarted )
							.catch( ( err ) => {
								console.warn( err );
							} );
					}
				}

        if ( navigator.xr.offerSession !== undefined ) {
          navigator.xr.offerSession( 'immersive-ar', {requiredFeatures: ["local-floor", 'hit-test']} )
            .then( onSessionStarted )
            .catch( ( err ) => {
              console.warn( err );
            } );
        } 
				window.addEventListener( 'resize', onWindowResize );

        const slider = document.getElementById('slider');
  
        slider.addEventListener('input', (event) => {
          modeloBIM.traverse((node) => {
            if (node.isMesh) {
              const material = node.material;
              material[0].transparent = true; // Habilitar transparencia
              material[0].opacity = parseFloat(event.target.value);; // Ajustar opacidad (0.0 a 1.0)
            }
          });
          renderer.render( scene, camera );
        });
			}


			function onWindowResize() {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
			}
      function onXRFrame(time, frame) {
        pose = frame.getViewerPose(referenceSpace);
        const session = frame.session;
        if (initialPose === null && pose) {
          initialPose = {
            position: pose.transform.position,
            orientation: pose.transform.orientation
          }
        }
        renderer.render( scene, camera );
        session.requestAnimationFrame(onXRFrame);
      }
      
     async function onSessionStarted( session ) {
				session.addEventListener( 'end', onSessionEnded );
				renderer.xr.setReferenceSpaceType( 'local-floor' );
				await renderer.xr.setSession( session );
				currentSession = session;
        referenceSpace = await session.requestReferenceSpace('local-floor');
        await loadIfc();//, horizontalQuaternion);     
        session.requestAnimationFrame(onXRFrame);
			}

      function onSessionEnded( /*event*/ ) {
				currentSession.removeEventListener( 'end', onSessionEnded );
				currentSession = null;
			}

      async function loadIfc() {
        				// geometria
        // Creación de fragments
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

        const file = await fetch(
          "https://manchadoc.github.io/bimxr/assets/dpto.ifc", //"./src/model.ifc",  // https://thatopen.github.io/engine_components/resources/small.ifc 
        );
        const data = await file.arrayBuffer();
        const buffer = new Uint8Array(data);
        const model = await fragmentIfcLoader.load(buffer);
        model.name = "example";

        modeloBIM = model;
        modeloBIM.traverse((node) => {
          if (node.isMesh) {
            const material = node.material;
            material[0].transparent = true; // Habilitar transparencia
            material[0].opacity = parseFloat(0.7);; // Ajustar opacidad (0.0 a 1.0)
          }
        });

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

        const positionVector = new THREE.Vector3();
        const initialPosition = new THREE.Vector3(0, 1.7,0);
        positionVector.setFromMatrixPosition(UTMposition);    // esta es la que queremos como posición de inicio
        const invertCoord = modeloBIM.coordinationMatrix.clone();
        invertCoord.invert();
        const posUtm = new THREE.Vector3(0,0,0).applyMatrix4(invertCoord);

        posUtm.z*=-1;
        const dif = posUtm.sub(positionVector);
        console.log(dif);
        
        modeloBIM.position.set(dif.x, dif.y, -dif.z);  // con esto ponemos el 00 del modelo en donde esté nuestra pose*/
        console.log(modeloBIM.position);
        scene.add(model); 
        
        // ******************************************
        // gestionamos propiedades
        const properties = model.getLocalProperties();
        // **********
      }
