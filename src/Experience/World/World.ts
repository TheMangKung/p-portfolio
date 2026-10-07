import { Experience } from '../Experience';
import { Environment } from './Environment';
import { GridFloor } from './GridFloor';
import { ProjectTiles } from './ProjectTiles';

export class World {
  private experience: Experience;
  public environment: Environment;
  public gridFloor: GridFloor;
  public projectTiles: ProjectTiles;

  constructor() {
    this.experience = Experience.getInstance();

    this.environment = new THREE_Environment();
    this.gridFloor = new GridFloor();
    this.projectTiles = new ProjectTiles();
  }

  public update(): void {
    if (this.environment) this.environment.update();
    if (this.gridFloor) this.gridFloor.update();
    if (this.projectTiles) this.projectTiles.update();
  }
}

// Wrapper alias
const THREE_Environment = Environment;
