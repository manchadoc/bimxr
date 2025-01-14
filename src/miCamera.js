import * as THREE from "three";
//import CameraControls from "camera-controls";
import { Event, BaseCamera } from "@thatopen/components";


export class miCamara extends BaseCamera {
    onBeforeUpdate = new Event(); 
    onAfterUpdate = new Event();
    onAspectUpdated = new Event();
    onDisposed = new Event();

    _allControls = new Map();
    /*get controls() {
      if (!this.currentWorld) {
        throw new Error("This camera needs a world to work!")
      }
      const controls = this._allControls.get(this.currentWorld.uuid)
      if (!controls) {
        throw new Error("Controls not found!")
      }
      return controls
    }*/
    get enabled() {
      if (this.currentWorld === null) {
        return false
      }
      return this;
      //return this.controls.enabled
    }
    set enabled(enabled) {
      if (this.currentWorld !== null) {
        //this.controls.enabled = enabled
      }
    }
    constructor(components) {
      super(components)
      this.three = this.setupCamera()
      this.setupEvents(true)
      this.onWorldChanged.add(({ action, world }) => {
        // This makes sure the DOM element of the camera
        // controls matches the one of the renderer for
        // a specific world
        if (action === "added") {
          //const controls = this.newCameraControls()
          //this._allControls.set(world.uuid, controls)
        }
        if (action === "removed") {
          //const controls = this._allControls.get(world.uuid)
          //if (controls) {
          //  controls.dispose()
          //  this._allControls.delete(world.uuid)
          //}
        }
      })
    }
    dispose() {
      this.setupEvents(false)
      this.onAspectUpdated.reset()
      this.onBeforeUpdate.reset()
      this.onAfterUpdate.reset()
      this.three.removeFromParent()
      this.onDisposed.trigger()
      this.onDisposed.reset()
      //for (const [_id, controls] of this._allControls) {
      //  controls.dispose()
      //}
    }
    update(_delta) {
      if (this.enabled) {
        this.onBeforeUpdate.trigger(this)
        //this.controls.update(_delta)
        this.onAfterUpdate.trigger(this)
      }
    }
    setupCamera() {
      const aspect = window.innerWidth / window.innerHeight
      const camera = new THREE.PerspectiveCamera(60, 1, 1, 1000);
      camera.position.set(50, 50, 50);
      camera.matrixAutoUpdate=false;
      camera.lookAt(new THREE.Vector3(0, 0, 0));
      return camera;
    }
    newCameraControls() {
      if (!this.currentWorld) {
        throw new Error("This camera needs a world to work!")
      }
      if (!this.currentWorld.renderer) {
        throw new Error("This camera needs a renderer to work!")
      }
      //CameraControls.install({ THREE: miCamara.getSubsetOfThree() })
      const { domElement } = this.currentWorld.renderer.three
      //const controls = new CameraControls(this.three, domElement)
      //controls.smoothTime = 0.2
      //controls.dollyToCursor = true
      //controls.infinityDolly = true
      //controls.minDistance = 6
     //return controls
    }
  
    setupEvents(active) {
      if (active) {
        window.addEventListener("resize", this.updateAspect)
      } else {
        window.removeEventListener("resize", this.updateAspect)
      }
    }
  
    static getSubsetOfThree() {
      return {
        MOUSE: THREE.MOUSE,
        Vector2: THREE.Vector2,
        Vector3: THREE.Vector3,
        Vector4: THREE.Vector4,
        Quaternion: THREE.Quaternion,
        Matrix4: THREE.Matrix4,
        Spherical: THREE.Spherical,
        Box3: THREE.Box3,
        Sphere: THREE.Sphere,
        Raycaster: THREE.Raycaster,
        MathUtils: THREE.MathUtils
      }
    }
  }