import * as THREE from 'three';
import { Experience } from '../Experience';

export class Raycaster {
  private experience: Experience;
  public raycaster: THREE.Raycaster;
  public mouse: THREE.Vector2;
  public hoveredObject: THREE.Object3D | null = null;
  public onHover?: (obj: THREE.Object3D | null) => void;
  public onClick?: (obj: THREE.Object3D) => void;

  constructor() {
    this.experience = Experience.getInstance();
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2(-9999, -9999);

    window.addEventListener('mousemove', (event) => {
      this.mouse.x = (event.clientX / this.experience.sizes.width) * 2 - 1;
      this.mouse.y = -(event.clientY / this.experience.sizes.height) * 2 + 1;
    });

    window.addEventListener('click', () => {
      if (this.hoveredObject && this.onClick) {
        this.onClick(this.hoveredObject);
      }
    });
  }

  public update(): void {
    if (!this.experience.world?.projectTiles) return;

    this.raycaster.setFromCamera(this.mouse, this.experience.camera.instance);
    const interactables = this.experience.world.projectTiles.getInteractableObjects();
    const intersects = this.raycaster.intersectObjects(interactables, true);

    if (intersects.length > 0) {
      // Find top-level tile group or mesh
      let target: THREE.Object3D | null = intersects[0].object;
      while (target && target.parent && !target.userData?.isTileRoot) {
        target = target.parent;
      }

      if (target && this.hoveredObject !== target) {
        this.hoveredObject = target;
        document.body.style.cursor = 'pointer';
        if (this.onHover) this.onHover(target);
      }
    } else {
      if (this.hoveredObject !== null) {
        this.hoveredObject = null;
        document.body.style.cursor = 'default';
        if (this.onHover) this.onHover(null);
      }
    }
  }
}
