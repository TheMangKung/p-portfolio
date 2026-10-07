import * as THREE from 'three';
import { Experience } from './Experience';

export class Renderer {
  private experience: Experience;
  public instance: THREE.WebGLRenderer;

  constructor() {
    this.experience = Experience.getInstance();
    
    this.instance = new THREE.WebGLRenderer({
      canvas: this.experience.canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });

    this.instance.setClearColor(0x000000, 0); // Transparent so CSS background shows
    this.instance.setSize(this.experience.sizes.width, this.experience.sizes.height);
    this.instance.setPixelRatio(this.experience.sizes.pixelRatio);
    this.instance.toneMapping = THREE.ACESFilmicToneMapping;
    this.instance.toneMappingExposure = 1.25;
    this.instance.shadowMap.enabled = true;
    this.instance.shadowMap.type = THREE.PCFSoftShadowMap;
  }

  public resize(): void {
    this.instance.setSize(this.experience.sizes.width, this.experience.sizes.height);
    this.instance.setPixelRatio(this.experience.sizes.pixelRatio);
  }

  public update(): void {
    this.instance.render(this.experience.scene, this.experience.camera.instance);
  }

  public destroy(): void {
    this.instance.dispose();
  }
}
