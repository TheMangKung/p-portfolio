import * as THREE from 'three';
import { Experience } from '../Experience';

export class Environment {
  private experience: Experience;
  public ambientLight: THREE.AmbientLight;
  public keyLight: THREE.DirectionalLight;
  public rimLight: THREE.DirectionalLight;
  public blueAccentLight: THREE.PointLight;
  public cyanAccentLight: THREE.PointLight;

  constructor() {
    this.experience = Experience.getInstance();

    // Subtle atmospheric ambient
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    this.experience.scene.add(this.ambientLight);

    // Key directional light casting sharp soft shadows
    this.keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    this.keyLight.position.set(5, 8, 7);
    this.keyLight.castShadow = true;
    this.keyLight.shadow.mapSize.width = 1024;
    this.keyLight.shadow.mapSize.height = 1024;
    this.keyLight.shadow.camera.near = 1;
    this.keyLight.shadow.camera.far = 25;
    this.keyLight.shadow.bias = -0.001;
    this.experience.scene.add(this.keyLight);

    // Rim light from behind for glass refraction edges
    this.rimLight = new THREE.DirectionalLight(0xa5f3fc, 2.5);
    this.rimLight.position.set(-6, -4, -5);
    this.experience.scene.add(this.rimLight);

    // Color accents for brutalist technical aesthetics
    this.blueAccentLight = new THREE.PointLight(0x00f0ff, 3.5, 15);
    this.blueAccentLight.position.set(-4, 3, 3);
    this.experience.scene.add(this.blueAccentLight);

    this.cyanAccentLight = new THREE.PointLight(0x10b981, 2.8, 15);
    this.cyanAccentLight.position.set(4, -2, 2);
    this.experience.scene.add(this.cyanAccentLight);

    // Subtle distance fog
    this.experience.scene.fog = new THREE.FogExp2(0x08090b, 0.05);
  }

  public update(): void {
    const elapsed = this.experience.time.elapsed;
    this.blueAccentLight.position.x = -4 + Math.sin(elapsed * 0.5) * 1.5;
    this.blueAccentLight.position.y = 3 + Math.cos(elapsed * 0.7) * 1.0;

    this.cyanAccentLight.position.x = 4 + Math.cos(elapsed * 0.6) * 1.2;
    this.cyanAccentLight.position.y = -2 + Math.sin(elapsed * 0.8) * 1.0;
  }
}
