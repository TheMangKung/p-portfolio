export type SizesCallback = () => void;

export class Sizes {
  public width: number;
  public height: number;
  public pixelRatio: number;
  private callbacks: SizesCallback[] = [];

  constructor() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);

    window.addEventListener('resize', () => {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.pixelRatio = Math.min(window.devicePixelRatio, 2);
      this.trigger();
    });
  }

  public on(callback: SizesCallback): void {
    this.callbacks.push(callback);
  }

  private trigger(): void {
    for (const cb of this.callbacks) {
      cb();
    }
  }
}
