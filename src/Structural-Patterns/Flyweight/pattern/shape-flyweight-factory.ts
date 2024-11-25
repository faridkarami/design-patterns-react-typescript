import Circle from "./circle.concrete";
import IShape from "./shape.interface";

type CircleKey = string;

export default class ShapeFlyweightFactory {
  private static circleMap: Record<CircleKey, Circle> = {};

  static getCircle(radius: number, color: string): IShape {
    const key = `${radius}-${color}`;
    if (!this.circleMap[key]) {
      console.log("Create a new circle: ", key);
      this.circleMap[key] = new Circle(radius, color);
    } else {
      console.log("Return of existing circle: ", key);
    }
    return this.circleMap[key];
  }
}