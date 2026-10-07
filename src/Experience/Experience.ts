import * as THREE from 'three';
import { Sizes } from './Utils/Sizes';
import { Time } from './Utils/Time';
import { Raycaster } from './Utils/Raycaster';
import { Camera } from './Camera';
import { Renderer } from './Renderer';
import { World } from './World/World';
import { ProjectCardData } from './World/ProjectTiles';

export class Experience {
  private static instance: Experience | null = null;

  public canvas!: HTMLCanvasElement;
  public sizes!: Sizes;
  public time!: Time;
  public scene!: THREE.Scene;
  public camera!: Camera;
  public renderer!: Renderer;
  public raycaster!: Raycaster;
  public world!: World;

  public onProjectSelect?: (project: ProjectCardData) => void;

  constructor(canvas?: HTMLCanvasElement) {
    if (Experience.instance) {
      return Experience.instance;
    }
    Experience.instance = this;

    if (!canvas) {
      throw new Error('Canvas element required to initialize Experience');
    }
    this.canvas = canvas;

    // Core Setup
    this.sizes = new Sizes();
    this.time = new Time();
    this.scene = new THREE.Scene();
    this.camera = new Camera();
    this.renderer = new Renderer();
    this.world = new World();
    this.raycaster = new Raycaster();

    // Hook up raycaster hover and click
    this.raycaster.onHover = (obj) => {
      this.world.projectTiles.setHover(obj);
    };

    this.raycaster.onClick = (obj) => {
      const data = obj.userData?.data as ProjectCardData | undefined;
      if (data && this.onProjectSelect) {
        this.onProjectSelect(data);
      }
    };

    // Events
    this.sizes.on(() => {
      this.resize();
    });

    this.time.on(() => {
      this.update();
    });
  }

  public static getInstance(): Experience {
    if (!Experience.instance) {
      throw new Error('Experience is not initialized yet');
    }
    return Experience.instance;
  }

  private resize(): void {
    this.camera.resize();
    this.renderer.resize();
  }

  private update(): void {
    this.camera.update();
    this.world.update();
    this.raycaster.update();
    this.renderer.update();
  }

  public destroy(): void {
    this.renderer.destroy();
    Experience.instance = null;
  }
}
