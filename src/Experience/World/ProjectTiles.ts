import * as THREE from 'three';
import { Experience } from '../Experience';

export interface ProjectCardData {
  id: string;
  code: string;
  title: string;
  tagline: string;
  category: string;
  metric: string;
  status: string;
  accentColor: string;
  liveUrl: string;
}

export const PROJECT_TILES_DATA: ProjectCardData[] = [
  {
    id: 'sangjan',
    code: 'PROJ_01',
    title: 'SANGJAN LIVE SHOUTOUT',
    tagline: 'Real-time Interactive Screen Platform',
    category: 'COMMERCIAL B2B SAAS',
    metric: 'LATENCY < 200MS // 1,000+ CONCURRENT',
    status: 'ACTIVE SAAS // REVENUE READY',
    accentColor: '#00f0ff',
    liveUrl: 'https://sangjan.com/'
  },
  {
    id: 'wusab',
    code: 'PROJ_02',
    title: 'WUSAB.NET OFFICIAL PORTAL',
    tagline: 'University Enterprise Student Association Web',
    category: 'INSTITUTIONAL PLATFORM',
    metric: 'AUDIENCE 15,000+ // LIGHTHOUSE 98/100',
    status: 'FREE FOR UNIVERSITY STUDENTS',
    accentColor: '#6366f1',
    liveUrl: 'https://www.wusab.net/'
  },
  {
    id: 'openworld',
    code: 'PROJ_03',
    title: 'OPENWORLD ATTENDANCE & CHECK-IN',
    tagline: 'High-Traffic Activity Verification App',
    category: 'CAMPUS VERIFICATION SYSTEM',
    metric: 'SCAN SPEED < 1S // UPTIME 99.99%',
    status: 'HIGH-CONCURRENCY QR SCANNER',
    accentColor: '#10b981',
    liveUrl: 'https://openworld.wusab.net/'
  }
];

export class ProjectTiles {
  private experience: Experience;
  public group: THREE.Group;
  public tiles: THREE.Group[] = [];
  public interactableMeshes: THREE.Mesh[] = [];
  public activeHoverIndex: number = -1;

  constructor() {
    this.experience = Experience.getInstance();
    this.group = new THREE.Group();
    this.experience.scene.add(this.group);

    this.createTiles();
  }

  private createCardCanvasTexture(data: ProjectCardData): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1400;
    const ctx = canvas.getContext('2d')!;

    // Deep Obsidian frosted background
    ctx.fillStyle = '#0c0e14';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Subtle technical grid pattern
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Outer raw border frame
    ctx.strokeStyle = data.accentColor;
    ctx.lineWidth = 6;
    ctx.strokeRect(30, 30, canvas.width - 60, canvas.height - 60);

    // Top Header: System Tag & Status
    ctx.font = 'bold 28px "Space Mono", monospace';
    ctx.fillStyle = data.accentColor;
    ctx.fillText(`[ ${data.code} // ARCHITECTURE ]`, 70, 110);

    // Blinking status dot
    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.arc(canvas.width - 100, 100, 12, 0, Math.PI * 2);
    ctx.fill();

    ctx.font = '22px "Space Mono", monospace';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText('SYS_OK', canvas.width - 220, 108);

    // Divider Line
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(70, 160);
    ctx.lineTo(canvas.width - 70, 160);
    ctx.stroke();

    // Category Tag
    ctx.font = 'bold 24px "Space Mono", monospace';
    ctx.fillStyle = '#38bdf8';
    ctx.fillText(`CATEGORY: ${data.category}`, 70, 240);

    // Main Brutalist Title
    ctx.font = '900 68px "Space Grotesk", sans-serif';
    ctx.fillStyle = '#ffffff';
    
    // Word wrapping for title
    const words = data.title.split(' ');
    let line = '';
    let y = 350;
    for (let i = 0; i < words.length; i++) {
      const testLine = line + words[i] + ' ';
      const metrics = ctx.measureText(testLine);
      if (metrics.width > canvas.width - 160 && i > 0) {
        ctx.fillText(line, 70, y);
        line = words[i] + ' ';
        y += 85;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, 70, y);

    // Tagline description
    ctx.font = '400 32px "Space Grotesk", sans-serif';
    ctx.fillStyle = '#cbd5e1';
    ctx.fillText(data.tagline, 70, y + 90);

    // Central graphic visualization box
    const boxY = y + 160;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
    ctx.fillRect(70, boxY, canvas.width - 140, 340);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.strokeRect(70, boxY, canvas.width - 140, 340);

    // Data Telemetry inside box
    ctx.font = 'bold 24px "Space Mono", monospace';
    ctx.fillStyle = '#64748b';
    ctx.fillText('BENCHMARKS & PRODUCTION METRICS:', 110, boxY + 60);

    ctx.font = 'bold 36px "Space Mono", monospace';
    ctx.fillStyle = '#f8fafc';
    ctx.fillText(data.metric, 110, boxY + 140);

    ctx.font = '28px "Space Mono", monospace';
    ctx.fillStyle = data.accentColor;
    ctx.fillText(`STATUS: ${data.status}`, 110, boxY + 230);

    // Footer button prompt
    const footerY = canvas.height - 130;
    ctx.fillStyle = data.accentColor;
    ctx.fillRect(70, footerY, canvas.width - 140, 75);

    ctx.font = 'bold 30px "Space Mono", monospace';
    ctx.fillStyle = '#08090b';
    ctx.textAlign = 'center';
    ctx.fillText('CLICK TO INSPECT CASE STUDY ↗', canvas.width / 2, footerY + 48);

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;
    return texture;
  }

  private createTiles(): void {
    const tileWidth = 3.2;
    const tileHeight = 4.4;
    const tileDepth = 0.15;
    const spacing = 4.2;

    PROJECT_TILES_DATA.forEach((data, index) => {
      const tileGroup = new THREE.Group();
      tileGroup.userData = {
        isTileRoot: true,
        index,
        data,
        baseX: (index - 1) * spacing,
        baseY: 0,
        baseZ: 0,
        targetRotX: 0,
        targetRotY: (index - 1) * -0.12,
        targetRotZ: (index - 1) * -0.04
      };

      tileGroup.position.set(tileGroup.userData.baseX, 0, 0);
      tileGroup.rotation.y = tileGroup.userData.targetRotY;
      tileGroup.rotation.z = tileGroup.userData.targetRotZ;

      // 1. Slab Glass Mesh
      const geometry = new THREE.BoxGeometry(tileWidth, tileHeight, tileDepth);
      const texture = this.createCardCanvasTexture(data);

      const glassMaterial = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(0x181c26),
        transmission: 0.65,
        opacity: 1,
        transparent: true,
        roughness: 0.18,
        metalness: 0.15,
        ior: 1.45,
        thickness: 0.4,
        clearcoat: 0.8,
        clearcoatRoughness: 0.1
      });

      const frontFaceMaterial = new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.25,
        metalness: 0.1,
        transparent: true
      });

      // Material array: 0:right, 1:left, 2:top, 3:bottom, 4:front, 5:back
      const materials: THREE.Material[] = [
        glassMaterial,
        glassMaterial,
        glassMaterial,
        glassMaterial,
        frontFaceMaterial,
        glassMaterial
      ];

      const mesh = new THREE.Mesh(geometry, materials);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.userData = { isTileRoot: true, tileGroup, data };
      tileGroup.add(mesh);
      this.interactableMeshes.push(mesh);

      // 2. Technical Edge Wireframe Accent
      const edges = new THREE.EdgesGeometry(geometry);
      const edgeMaterial = new THREE.LineBasicMaterial({
        color: new THREE.Color(data.accentColor),
        transparent: true,
        opacity: 0.7
      });
      const edgeLine = new THREE.LineSegments(edges, edgeMaterial);
      tileGroup.add(edgeLine);

      // 3. Floating Corner Brackets
      this.addBrutalistCornerAccents(tileGroup, tileWidth, tileHeight, tileDepth, data.accentColor);

      this.group.add(tileGroup);
      this.tiles.push(tileGroup);
    });
  }

  private addBrutalistCornerAccents(
    parent: THREE.Group,
    w: number,
    h: number,
    d: number,
    accentHex: string
  ): void {
    const cornerSize = 0.35;
    const cornerMat = new THREE.LineBasicMaterial({ color: new THREE.Color(accentHex), linewidth: 2 });

    const hw = w / 2;
    const hh = h / 2;
    const hd = d / 2 + 0.01;

    const corners = [
      [-hw, hh, hd],
      [hw, hh, hd],
      [-hw, -hh, hd],
      [hw, -hh, hd]
    ];

    corners.forEach(([cx, cy, cz]) => {
      const signX = cx > 0 ? -1 : 1;
      const signY = cy > 0 ? -1 : 1;

      const points = [
        new THREE.Vector3(cx, cy + signY * cornerSize, cz),
        new THREE.Vector3(cx, cy, cz),
        new THREE.Vector3(cx + signX * cornerSize, cy, cz)
      ];

      const geom = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geom, cornerMat);
      parent.add(line);
    });
  }

  public getInteractableObjects(): THREE.Object3D[] {
    return this.interactableMeshes;
  }

  public setHover(hovered: THREE.Object3D | null): void {
    if (!hovered) {
      this.activeHoverIndex = -1;
      return;
    }

    const tileRoot = (hovered.userData?.tileGroup as THREE.Group) || hovered;
    const idx = tileRoot.userData?.index;
    this.activeHoverIndex = typeof idx === 'number' ? idx : -1;
  }

  public update(): void {
    const elapsed = this.experience.time.elapsed;
    const scroll = this.experience.camera.scrollProgress;

    // Shift whole group sideways as scroll progresses to showcase each card
    const scrollShiftX = -scroll * 6.5;
    this.group.position.x += (scrollShiftX - this.group.position.x) * 0.08;

    this.tiles.forEach((tile, index) => {
      const isHovered = this.activeHoverIndex === index;

      // Natural hovering levitation
      const idleY = Math.sin(elapsed * 1.5 + index * 1.2) * 0.12;
      const targetY = isHovered ? idleY + 0.3 : idleY;
      const targetZ = isHovered ? 0.8 : 0;
      const targetScale = isHovered ? 1.05 : 1.0;

      tile.position.y += (targetY - tile.position.y) * 0.1;
      tile.position.z += (targetZ - tile.position.z) * 0.1;

      // Tilting
      const rotY = tile.userData.targetRotY + (isHovered ? this.experience.camera.currentMouse.x * 0.3 : 0);
      const rotX = isHovered ? -this.experience.camera.currentMouse.y * 0.2 : 0;

      tile.rotation.y += (rotY - tile.rotation.y) * 0.1;
      tile.rotation.x += (rotX - tile.rotation.x) * 0.1;

      tile.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    });
  }
}
