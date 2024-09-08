import { useEffect, useRef } from "react";
import p5 from "p5";

const P5Background = () => {
  const reference = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sketch = (p: p5) => {
      let circles: Circle[] = [];
      let colors: string[] = ["red", "green", "blue"];
      class Circle {
        x: number;
        y: number;
        diameter: number;
        speedX: number;
        speedY: number;
        color: string;

        constructor() {
          this.x = p.random(p.width);
          this.y = p.random(p.height);
          this.diameter = p.random(20, 50);
          this.speedX = p.random(-2, 2);
          this.speedY = p.random(-2, 2);
          this.color = p.random(colors);
        }

        move() {
          this.x += this.speedX;
          this.y += this.speedY;

          if (this.x > p.width || this.x < 0) {
            this.speedX *= -1;
          }
          if (this.y > p.height || this.y < 0) {
            this.speedY *= -1;
          }
        }

        display() {
          p.noStroke();

          if (this.color == "red") {
            p.fill(255, 113, 141, 225);
          } else if (this.color == "blue") {
            p.fill(168, 100, 253, 150);
          } else {
            p.fill(120, 255, 68, 150);
          }

          p.ellipse(this.x, this.y, this.diameter);
        }
      }

      p.setup = () => {
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.parent(reference.current!);
        for (let i = 0; i < 100; i++) {
          circles.push(new Circle());
        }
      };

      p.draw = () => {
        p.background(500, 500, 500);
        for (let circle of circles) {
          circle.move();
          circle.display();
        }
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };

    const myP5 = new p5(sketch);

    return () => {
      myP5.remove();
    };
  }, []);

  return (
    <div
      ref={reference}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
};

export default P5Background;
