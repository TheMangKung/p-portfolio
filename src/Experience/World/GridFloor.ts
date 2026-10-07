import * as THREE from 'three';
import { Experience } from '../Experience';

export class GridFloor {
  private experience: Experience;
  public gridHelper: THREE.GridHelper;
  public particles: THREE.Points;

  constructor() {
    this.experience = Experience.getInstance();

    // Subtle Wireframe Ground Grid for white aesthetic
    const size = 40;
    const divisions = 40;
    this.gridHelper = new THREE.GridHelper(size, divisions, 0xbfdbfe, 0xe2e8f0);
    this.gridHelper.position.y = -3.2;
    (this.gridHelper.material as THREE.Material).transparent = true;
    (this.gridHelper.material as THREE.Material).opacity = 0.35;
    this.experience.scene.add(this.gridHelper);

    // Subtle background dust / floating technical nodes
    const particleCount = 200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 24;
      positions[i + 1] = (Math.random() - 0.5) * 16;
      positions[i + 2] = (Math.random() - 0.5) * 16;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0x94a3b8,
      size: 0.04,
      transparent: true,
      opacity: 0.4
    });

    this.particles = new THREE.Points(geometry, material);
    this.experience.scene.add(this.particles);
  }

  public update(): void {
    const elapsed = this.experience.time.elapsed;
    this.particles.rotation.y = elapsed * 0.015;
    this.particles.rotation.x = elapsed * 0.008;

    // Subtle breathing on grid
    this.gridHelper.position.z = (elapsed * 0.2) % 1.0 - 0.5;
  }
}
