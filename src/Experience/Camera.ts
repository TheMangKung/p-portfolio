import * as THREE from 'three';
import { Experience } from './Experience';

export class Camera {
  private experience: Experience;
  public instance: THREE.PerspectiveCamera;
  public container: THREE.Group;
  public mouseTarget: THREE.Vector2 = new THREE.Vector2(0, 0);
  public currentMouse: THREE.Vector2 = new THREE.Vector2(0, 0);
  public scrollProgress: number = 0;

  constructor() {
    this.experience = Experience.getInstance();
    this.container = new THREE.Group();
    this.experience.scene.add(this.container);

    this.instance = new THREE.PerspectiveCamera(
      45,
      this.experience.sizes.width / this.experience.sizes.height,
      0.1,
      100
    );
    this.instance.position.set(0, 0, 9);
    this.container.add(this.instance);

    window.addEventListener('mousemove', (event) => {
      this.mouseTarget.x = (event.clientX / window.innerWidth - 0.5) * 2;
      this.mouseTarget.y = (event.clientY / window.innerHeight - 0.5) * 2;
    });

    window.addEventListener('scroll', () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      this.scrollProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    }, { passive: true });
  }

  public resize(): void {
    this.instance.aspect = this.experience.sizes.width / this.experience.sizes.height;
    this.instance.updateProjectionMatrix();
  }

  public update(): void {
    // Smooth lerp for mouse parallax
    this.currentMouse.x += (this.mouseTarget.x - this.currentMouse.x) * 0.05;
    this.currentMouse.y += (this.mouseTarget.y - this.currentMouse.y) * 0.05;

    this.container.rotation.y = this.currentMouse.x * 0.08;
    this.container.rotation.x = -this.currentMouse.y * 0.05;

    // Scroll glide: track positions based on scroll
    const targetZ = 9 - this.scrollProgress * 4.5;
    const targetY = -this.scrollProgress * 2.2;
    this.instance.position.z += (targetZ - this.instance.position.z) * 0.08;
    this.instance.position.y += (targetY - this.instance.position.y) * 0.08;
  }
}
