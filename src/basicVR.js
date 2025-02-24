import * as THREE from 'three';
import * as OBC from "@thatopen/components";
//import * as CUI from "@thatopen/ui-obc";
//import * as ADDS from "./addition.js";
import { XRControllerModelFactory } from 'three/examples/jsm/webxr/XRControllerModelFactory.js';
import Stats from "stats.js";
import InfoPanel from "./infoPanel.js";

let camera, scene, renderer, raycaster, floor;
let currentSession = null;
let currentPose = null;
let modeloBIM = null;
let indexer = null;  // para procesar las propiedades
let modBIMProps = null;
let referenceSpace = null;
let pose = null;
let inputSources;
let infoPanel;
let INTERSECTION;
const tempMatrix = new THREE.Matrix4();
let marker;
let controles1, controles2;

export async function initVR() {
    // Configuración de escena, cámara y renderer   // ***************************************************************
    const container = document.getElementById("container");

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 300);

    const defaultLight = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
    defaultLight.position.set(0.5, 1, 0.25);
    scene.add(defaultLight);
    //
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    //renderer.setAnimationLoop( animate );
    renderer.xr.enabled = true;
    container.appendChild(renderer.domElement);

    // ***********************
    // vamos a crear un cubo de cielo
    // Añadir el skybox
    const loader = new THREE.CubeTextureLoader();
    const skyboxTexture = loader.load([
        '../bimxr/assets/textures/posx.png', // derecha
        '../bimxr/assets/textures/negx.png', // izquierda
        '../bimxr/assets/textures/posy.png', // arriba
        '../bimxr/assets/textures/negy.png', // abajo
        '../bimxr/assets/textures/posz.png', // frontal
        '../bimxr/assets/textures/negz.png'  // trasera
    ], function () {
        console.log('Texturas cargadas correctamente');
    }, undefined, function (error) {
        console.error('Error al cargar las texturas', error);
    });
    scene.background = skyboxTexture;
    console.log(scene.background);
    // *************************************************************************************************************

    // Creación de la sesión inmersiva AR
    if (currentSession === null) {
        if (!isMobileDevice()) {
            navigator.xr.requestSession('immersive-vr', { requiredFeatures: ["local-floor"] }).then(onSessionStarted);
            console.log("metaquest");
        } else {
            navigator.xr.requestSession('inline', { requiredFeatures: ["local-floor"] }).then(onSessionStarted);
        }

    } else {
        currentSession.end();
    }
    let controller1;
    let controller2;
    if (isMobileDevice()) {
        document.addEventListener('touchstart', onTouchStart);
    } else {
        controller1 = renderer.xr.getController(0);
        controller1.addEventListener('selectstart', onSelectStart);
        controller1.addEventListener('selectend', onSelectEnd);
        controller1.addEventListener('connected', function (event) {
            this.add(buildController(event.data));
        });
        scene.add(controller1);

        // Obtener el segundo controller
        controller2 = renderer.xr.getController(1);
        controller2.addEventListener('selectstart', onSelectStart);
        controller2.addEventListener('selectend', onSelectEnd);
        controller2.addEventListener('connected', function (event) {
            this.add(buildController(event.data));
        });
        scene.add(controller2);

        const controllerModelFactory = new XRControllerModelFactory();
        const controllerGrip1 = renderer.xr.getControllerGrip(0);
        controllerGrip1.add(controllerModelFactory.createControllerModel(controllerGrip1));
        controllerGrip1.addEventListener("connected", onButtons1)
        scene.add(controllerGrip1);

        const controllerGrip2 = renderer.xr.getControllerGrip(1);
        controllerGrip2.add(controllerModelFactory.createControllerModel(controllerGrip2));
        controllerGrip2.addEventListener("connected", onButtons2)
        scene.add(controllerGrip2);

        raycaster = new THREE.Raycaster();

        marker = new THREE.Mesh(
            new THREE.CircleGeometry(0.25, 32).rotateX(- Math.PI / 2),
            new THREE.MeshBasicMaterial({ color: 0xbcbcbc })
        );
        scene.add(marker);
    }
    // *********************************************************
    // Pillamos los controllers en caso de estar con metaquest
    // *********************************************************
    // Obtener el primer controller

    // *********************************************************
    window.addEventListener('resize', onWindowResize);

    const stats = new Stats();
    stats.showPanel(1);
    document.body.append(stats.dom);
    stats.dom.style.left = "0px";
    stats.dom.style.zIndex = "unset";

    // ***************************************************************************
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
    fragments.onFragmentsLoaded.add((model) => {
        // console.log(model);
        const group = Array.from(fragments.groups.values())[0];
        const properties = group.getLocalProperties();
        if (properties) {
            // en properties tenemos toda la estructura IFC
        }
    });
    // ****************************************************************************
    function onXRFrame(time, frame) {
        stats.begin();
        pose = frame.getViewerPose(referenceSpace);
        currentPose = pose;
        const session = frame.session;
        if (!isMobileDevice()) {
            if (controles1) {
                for (let i = 0; i < controles1.gamepad.buttons.length; ++i) {
                    if (controles1.gamepad.buttons[i].pressed == true) {
                        //console.log(controles1.gamepad.buttons[i].value);
                    }
                }
            }
            if (controles2) {
                for (let i = 0; i < controles1.gamepad.buttons.length; ++i) {
                    if (controles2.gamepad.buttons[5].pressed == true) {
                        modeloBIM.traverse((node) => {
                            if (node.isMesh) {
                                const material = node.material;
                                material[0].transparent = true; // Habilitar transparencia
                                if (material[0].opacity < 1 && material[0].opacity >= 0) {
                                    material[0].opacity = 1; // Ajustar opacidad (0.0 a 1.0)
                                }
                            }
                        });
                    } else if (controles2.gamepad.buttons[4].pressed == true) {
                        modeloBIM.traverse((node) => {
                            if (node.isMesh) {
                                const material = node.material;
                                if (material[0].opacity >= 0 && material[0].opacity <= 1) {
                                    material[0].transparent = true; // Habilitar transparencia
                                    material[0].opacity = 0.5; // Ajustar opacidad (0.0 a 1.0)
                                }
                            }
                        });
                    }
                }
                renderer.render(scene, camera);
            }
        }

        /*for (let source of session.inputSources) {
            if (source.gamepad) {
                let poseController = frame.getPose(source.gripSpace, referenceSpace);
                ProcessGamepad(source.gamepad, source.handedness, pose);
            }
        }*/

        //
        renderer.render(scene, camera);
        stats.end();
        session.requestAnimationFrame(onXRFrame);
    }
    async function getPsets(psets) {
        const overlay = document.getElementById("overlayText");
        let textoPanel = ""
        overlay.textContent = "";
        for (const expressID of psets) {
            // You can get the pset attributes like this
            const pset = await modeloBIM.getProperties(expressID);
            await OBC.IfcPropertiesUtils.getPsetProps(
                modeloBIM,
                expressID,
                async (propExpressID) => {
                    const prop = await modeloBIM.getProperties(propExpressID);
                    if (isMobileDevice) {
                        overlayText.textContent = overlayText.textContent + '\n' + prop.Name.value + ': ' + prop.NominalValue.value;
                        textoPanel = textoPanel + '\n' + prop.Name.value + ': ' + prop.NominalValue.value;

                    } else {


                    }
                },
            );
        }
        let panelPosition = { x: currentPose.transform.position.x, y: currentPose.transform.position.y, z: currentPose.transform.position.z - 3 };
        console.log(panelPosition);
        infoPanel = new InfoPanel(scene, panelPosition);
        infoPanel.hidePanel();
        console.log("updating panel");
        infoPanel.updatePanelText(textoPanel);
        infoPanel.showPanel();
        //return await modeloBIM.getProperties(ident);
    }
    function onTouchStart(event) {
        const overlay = document.getElementById("overlayText");
        overlay.textContent = "";
        if (event.touches.length > 0) {
            let touch = event.touches[0];
            let touchX = touch.clientX;
            let touchY = touch.clientY;

            let normalizedX = (touchX / window.innerWidth) * 2 - 1;
            let normalizedY = -(touchY / window.innerHeight) * 2 + 1;

            // Crear un rayo desde la cámara
            let raycaster = new THREE.Raycaster();
            raycaster.setFromCamera({ x: normalizedX, y: normalizedY }, camera);

            // Definir las mallas con las que queremos detectar intersecciones
            let intersects = raycaster.intersectObjects(scene.children, true);

            if (intersects.length > 0) {
                // Encontrar la primera intersección
                let iterator = intersects[0].object.fragment.ids.values();
                const psets = indexer.getEntityRelations(modeloBIM, iterator.next().value, "IsDefinedBy");
                getPsets(psets);

                // Aquí puedes añadir la lógica para interactuar con el objeto intersectado
            }

            // Aquí puedes añadir la lógica específica para WebXR
            // por ejemplo, interactuar con un objeto en la escena XR.
        }
    }
    function onButtons1(event) {
        controles1 = event.data;
    }
    function onButtons2(event) {
        controles2 = event.data;
    }
    function buildController(data) {
        let geometry, material;
        switch (data.targetRayMode) {
            case 'tracked-pointer':
                geometry = new THREE.BufferGeometry();
                geometry.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, 0, 0, - 1], 3));
                geometry.setAttribute('color', new THREE.Float32BufferAttribute([0.5, 0.5, 0.5, 0, 0, 0], 3));
                material = new THREE.LineBasicMaterial({ vertexColors: true, blending: THREE.AdditiveBlending });
                return new THREE.Line(geometry, material);
            case 'gaze':
                geometry = new THREE.RingGeometry(0.02, 0.04, 32).translate(0, 0, - 1);
                material = new THREE.MeshBasicMaterial({ opacity: 0.5, transparent: true });
                return new THREE.Mesh(geometry, material);

        }
    }
    function onSelectStart(event) {
        //('Controller select started:', event);
        this.userData.isSelecting = true;
        INTERSECTION = undefined;
        if (controller1.userData.isSelecting === true) {        // vamos a utilizar un mando para desplazarnos
            tempMatrix.identity().extractRotation(controller1.matrixWorld);
            raycaster.ray.origin.setFromMatrixPosition(controller1.matrixWorld);
            raycaster.ray.direction.set(0, 0, - 1).applyMatrix4(tempMatrix);
            const intersects = raycaster.intersectObjects([modeloBIM]);
            if (intersects.length > 0) {
                INTERSECTION = intersects[0].point;
            }
        } else if (controller2.userData.isSelecting === true) { // segundo mando para obtener datos.
            tempMatrix.identity().extractRotation(controller1.matrixWorld);
            raycaster.ray.origin.setFromMatrixPosition(controller1.matrixWorld);
            raycaster.ray.direction.set(0, 0, - 1).applyMatrix4(tempMatrix);
            const intersects = raycaster.intersectObjects([modeloBIM]);
            if (intersects.length > 0) {
                let iterator = intersects[0].object.fragment.ids.values();
                const psets = indexer.getEntityRelations(modeloBIM, iterator.next().value, "IsDefinedBy");
                getPsets(psets);
            }
        }
        if (INTERSECTION) marker.position.copy(INTERSECTION);
        marker.visible = INTERSECTION !== undefined;
        renderer.render(scene, camera);
    }
    function onSelectEnd(event) {
        //console.log('Controller select ended:', event);
        this.userData.isSelecting = false;
        if (INTERSECTION) {
            const offsetPosition = { x: - INTERSECTION.x, y: - INTERSECTION.y, z: - INTERSECTION.z, w: 1 };
            const offsetRotation = new THREE.Quaternion();
            const transform = new XRRigidTransform(offsetPosition, offsetRotation);
            const teleportSpaceOffset = referenceSpace.getOffsetReferenceSpace(transform);
            renderer.xr.setReferenceSpace(teleportSpaceOffset);
        }
    }
    async function onSessionStarted(session) {
        inputSources = session.inputSources;
        session.addEventListener('end', onSessionEnded);
        //session.addEventListener('inputsourceschange', onControls);
        renderer.xr.setReferenceSpaceType('local-floor');
        await renderer.xr.setSession(session);
        currentSession = session;
        referenceSpace = await session.requestReferenceSpace('local-floor');
        await loadIfc();//, horizontalQuaternion);  
        indexer = components.get(OBC.IfcRelationsIndexer);
        modBIMProps = await indexer.process(modeloBIM);   // así tengo todos los IDs relacionados   
        console.log(modBIMProps);
        session.requestAnimationFrame(onXRFrame);
    }
    function onSessionEnded( /*event*/) {
        currentSession.removeEventListener('end', onSessionEnded);
        currentSession = null;
    }
    async function loadIfc() {
        const file = await fetch(
            "https://manchadoc.github.io/bimxr/assets/P350.ifc", //"./src/model.ifc",  // https://thatopen.github.io/engine_components/resources/small.ifc 
        );
        const data = await file.arrayBuffer();
        const buffer = new Uint8Array(data);
        const model = await fragmentIfcLoader.load(buffer);
        model.name = "";

        //model.position.y=model.coordinationMatrix.elements[13]+6.5;
        modeloBIM = model;
        modeloBIM.traverse((node) => {
            if (node.isMesh) {
                const material = node.material;
                material[0].transparent = true; // Habilitar transparencia
                material[0].opacity = parseFloat(1);; // Ajustar opacidad (0.0 a 1.0)
            }
        });
        scene.add(model);
    }
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
    function isMobileDevice() {
        return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
}



/*let xrInputSources;
function onControls(event) {
    xrInputSources = event.session.inputSources;
    console.log(xrInputSources);
    event.added.forEach((xrInputSource) => {
        if (xrInputSource.targetRayMode === 'tracked-pointer') {
            xrInputSource.gamepad.axes.forEach((axis, index) => {
                const speed = 100;
                if (index === 0 || index === 2) {
                    // Mover en el eje X
                    camera.position.x += axis * speed;
                } else if (index === 1 || index === 3) {
                    // Mover en el eje Z
                    camera.position.z += axis * speed;
                }
            });
        }
    });

}
    
    function ProcessGamepad(gamepad, hand, pose) {
    if (pose) {
        for (let i = 0; i < gamepad.buttons.length; ++i) {
            if (gamepad.buttons[i].pressed == true) {
                console.log(gamepad.buttons[i].value);
            }
        }
        const dx = gamepad.axes[2];
        const dy = gamepad.axes[3];
        a += dx;
    }
}
 

    function checkControllerInputs() {
        const session = renderer.xr.getSession();
        let posvar = [0, 0];
        if (session) {
            const inputSources = session.inputSources;
            for (const inputSource of inputSources) {
                if (inputSource.gamepad) {
                    const gamepad = inputSource.gamepad;
                    if (gamepad.axes.length > 0) {
                        const [touchX, touchY, thumbX, thumbY] = gamepad.axes;  // touchpad los dos primeros. Joystick el segundo. 
                        //console.log(`Joystick axes: (${rightX.toFixed(2)}, ${rightY.toFixed(2)})`);
                        moveCamera(thumbX, thumbY); // Mueve la cámara basado en los valores del joystick
                        posvar = [thumbX, thumbY];
                    }
                    for (let i = 0; i < gamepad.buttons.length; i++) {  // trigger, squeeze, touchpad, thumbstick
                        const button = gamepad.buttons[i];
                        if (button.pressed) {
                            console.log(`Button ${i} pressed`);
                        }
                    }

                }
            }
        }
        return posvar;
    }


        function moveCamera(x, y) {
        const speed = 100; // Velocidad de movimiento de la cámara

        camera.position.x += x * speed;
        camera.position.z += y * speed;
    }
*/





