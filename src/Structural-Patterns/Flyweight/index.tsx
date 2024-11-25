import { useEffect, useRef } from "react";
import ShapeFlyweightFactory from "./pattern/shape-flyweight-factory";

const FlyweightDesignPattern = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const circle1 = ShapeFlyweightFactory.getCircle(50, "red");
    circle1.draw(ctx, 100, 100);

    const circle2 = ShapeFlyweightFactory.getCircle(30, "blue");
    circle2.draw(ctx, 200, 100);

    const circle3 = ShapeFlyweightFactory.getCircle(50, "red");
    circle3.draw(ctx, 300, 100);
  }, []);

  return (
    <canvas ref={canvasRef} width={400} height={200} style={{ border: "1px solid black" }} />
  );
};

export default FlyweightDesignPattern;
