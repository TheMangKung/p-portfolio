export type TimeCallback = () => void;

export class Time {
  public start: number;
  public current: number;
  public elapsed: number;
  public delta: number;
  private callbacks: TimeCallback[] = [];

  constructor() {
    this.start = Date.now();
    this.current = this.start;
    this.elapsed = 0;
    this.delta = 16;

    window.requestAnimationFrame(() => {
      this.tick();
    });
  }

  public on(callback: TimeCallback): void {
    this.callbacks.push(callback);
  }

  private tick(): void {
    const currentTime = Date.now();
    this.delta = currentTime - this.current;
    this.current = currentTime;
    this.elapsed = (this.current - this.start) * 0.001;

    for (const cb of this.callbacks) {
      cb();
    }

    window.requestAnimationFrame(() => {
      this.tick();
    });
  }
}
