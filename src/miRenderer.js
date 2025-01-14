import * as THREE from "three";
import { BaseRenderer, Event } from "@thatopen/components";
import { getXRSession } from "./main";
let session = null;
let referenceSpace=null;
let context=null;
/**
 * A basic renderer capable of rendering [Objec3Ds](https://threejs.org/docs/#api/en/core/Object3D).
 */
export class miRenderer extends BaseRenderer {
  /**
   * Indicates whether the renderer is enabled. If it's not, it won't be updated.
   * Default is `true`.
   */
  enabled = true
  _resizeObserver = null
  onContainerUpdated = new Event()
  _resizing = false

  /**
   * Constructor para miRenderer
   *
   * @param components - The components instance.
   * @param container - The HTML container where the THREE.js canvas will be rendered.
   * @param parameters - Optional parameters for the THREE.js WebGLRenderer.
   */
  constructor(components, container, parameters) {
    super(components)
    this.container = container
    this._parameters = parameters
    this.three = new THREE.WebGLRenderer({
        antialias: true,
        preserveDrawingBuffer: true,
        alpha: true,
        xrCompatible: true,
      })
    
    //this._canvas = this.three.domElement
    context = this.three.getContext("webgl", {xrCompatible: true})
    context.makeXRCompatible();
    const { canvas } = context
    canvas.addEventListener("webglcontextlost", this.onContextLost, false)
    canvas.addEventListener("webglcontextrestored", this.onContextBack, false)
    //this.three.xr.enabled=true
    this.three.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.setupRenderer()
    this.setupEvents(true)
    this.resize()
  }

  // Función para contar elementos en una escena de three.js
countElementsInScene(scene) {
  let count = 0;
  // Función recursiva para contar objetos
  function countObjects(object) {
      count++;
      // Recorrer los hijos del objeto
      object.children.forEach(child => {
          countObjects(child);
      });
  }
  // Iniciar el conteo desde la escena principal
  countObjects(scene);
  return count;
}


  /** {@link Updateable.update} */
  update() {
    if (!this.enabled || !this.currentWorld) return
    this.onBeforeUpdate.trigger(this)
    const scene = this.currentWorld.scene.three
    const camera = this.currentWorld.camera.three  
    const xrSession = getXRSession();
    const refSpace = xrSession.requestReferenceSpace('local');

    const onXRFrame = (time, frame) => {
      console.log (refSpace);
      xrSession.requestAnimationFrame(onXRFrame);
      context.bindFramebuffer(context.FRAMEBUFFER, xrSession.renderState.baseLayer.framebuffer);
      // Retrieve the pose of the device.
      // XRFrame.getViewerPose can return null while the session attempts to establish tracking.
      try {
        let pose = frame.getViewerPose(refSpace);
        if (pose) {
          // In mobile AR, we only have one view.
          const view = pose.views[0];
          const viewport = session.renderState.baseLayer.getViewport(view);
          
          //this.resize(viewport.width, viewport.height);
          //console.log(world.camera.three);
          // Use the view's transform matrix and projection matrix to configure the THREE.camera.
          world.camera.three.matrix.fromArray(view.transform.matrix);
          world.camera.three.projectionMatrix.fromArray(view.projectionMatrix);
          world.camera.three.updateMatrixWorld(true);
          //world.renderer.three.render(world.scene.three, world.camera.three);
          this.three.render(scene, camera)  
        }
      } catch (error){
          console.log(error)
      }
    }
    requestAnimationFrame(onXRFrame);

    this.onAfterUpdate.trigger(this)
    this.three.render(scene, camera)          /// ESTA LA HE COMENTADO YO
     //if (scene instanceof THREE.Scene) {
       //this._renderer2D.render(scene, camera);
     //}
  }



  /** {@link Disposable.dispose} */
  dispose() {
    this.enabled = false
    this.setupEvents(false)
    this.three.domElement.remove()
    this.three.forceContextLoss()
    this.three.dispose()
    // this._renderer2D.domElement.remove();
    this.onResize.reset()
    this.onAfterUpdate.reset()
    this.onBeforeUpdate.reset()
    this.onDisposed.trigger()
    this.onDisposed.reset()
  }

  /** {@link Resizeable.getSize}. */
  getSize() {
    return new THREE.Vector2(
      this.three.domElement.clientWidth,
      this.three.domElement.clientHeight
    )
  }

  /** {@link Resizeable.resize} */
  resize = size => {
    if (this._resizing) return
    this._resizing = true
    this.onContainerUpdated.trigger()
    const width = size ? size.x : this.container.clientWidth
    const height = size ? size.y : this.container.clientHeight
    this.three.setSize(width, height)
    // this._renderer2D.setSize(width, height);
    this.onResize.trigger(new THREE.Vector2(width, height))
    this._resizing = false
  }

  /**
   * Sets up and manages the event listeners for the renderer.
   *
   * @param active - A boolean indicating whether to activate or deactivate the event listeners.
   *
   * @throws Will throw an error if the renderer does not have an HTML container.
   */
  setupEvents(active) {
    const dom = this.three.domElement.parentElement
    if (!dom) {
      throw new Error("This renderer needs to have an HTML container!")
    }

    if (this._resizeObserver) {
      this._resizeObserver.disconnect()
      this._resizeObserver = null
    }

    window.removeEventListener("resize", this.resizeEvent)

    if (active) {
      this._resizeObserver = new ResizeObserver(this.resizeEvent)
      this._resizeObserver.observe(dom)
      window.addEventListener("resize", this.resizeEvent)
    }
  }

  resizeEvent = () => {
    this.resize()
  }

  setupRenderer() {
    this.three.localClippingEnabled = true
    if (this.container) {
      this.container.appendChild(this.three.domElement)
    }
    this.onContainerUpdated.trigger()
  }

  onContextLost = event => {
    event.preventDefault()
    this.enabled = false
  }

  onContextBack = () => {
    this.three.setRenderTarget(null)
    this.three.dispose()
    this.three = new THREE.WebGLRenderer({
      canvas: this._canvas,
      antialias: true,
      alpha: true,
      ...this._parameters
    })
    this.enabled = true
  }
}
