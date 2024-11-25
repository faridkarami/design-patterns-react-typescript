import IShape from './shape.interface';

export default class Circle implements IShape {
  constructor(private radius: number, private color: string) {}

  draw(ctx: CanvasRenderingContext2D, x: number, y: number): void {
    ctx.beginPath();
    ctx.arc(x, y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}