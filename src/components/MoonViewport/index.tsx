import React, { useRef } from "react";
import Sketch from "react-p5";
import p5Types from "p5"; //Import this for typechecking and intellisense
import { Earth } from "./Earth";
import { Moon } from "./Moon";

interface ComponentProps {
  //Your component props
}

export const MoonMotion: React.FC<ComponentProps> = (
  props: ComponentProps
) => {
  //See annotations in JS for more information
  const viewport = useRef(null);
  let earth: Earth;
  let moon: Moon;
  let canvas: HTMLCanvasElement | null = null;
  let canvas2: HTMLCanvasElement | null = null;
  let context: CanvasRenderingContext2D | null = null;
  let context2: CanvasRenderingContext2D | null = null;

  const setup = (p5: p5Types, canvasParentRef: Element) => {

    p5.createCanvas(window.innerWidth, window.innerHeight).parent(
      canvasParentRef
    );

    const earth_props = {
      x: 0,
      y: 0,
      mass: 597.42,
      radius: 6.371
    };

    earth = new Earth(earth_props.x, earth_props.y, earth_props.mass, earth_props.radius, p5);

    const moon_props = {
      x: earth_props.x - 385,
      y: earth_props.y - 385,
      mass: earth_props.mass * 0.012,
      radius: earth_props.radius / 3.7
    };

    moon = new Moon(moon_props.x, moon_props.y, moon_props.mass, moon_props.radius, p5);

    canvas = document.getElementById('defaultCanvas0') as HTMLCanvasElement;
    context = canvas.getContext('2d');

    canvas2 = document.getElementById('viewport') as HTMLCanvasElement;
    context2 = canvas2.getContext('2d');


  };

  const draw = (p5: p5Types) => {
    if (!p5.mouseIsPressed) {
      p5.translate(p5.width / 2, p5.height / 2);

      p5.scale(0.7);
      p5.background(0, 5);
      if (earth) {
        // earth.attract(moon, p5);
        earth.show(p5);
      }

      if (moon && earth) {

        moon.update(p5, earth);
        moon.show(p5);
      }
      if (context && canvas && context2) {
        const transformed_x = moon.pos.x * 0.7 + p5.width / 2
        const transformed_y = moon.pos.y * 0.7 + p5.height / 2;
        const startX = transformed_x - 150;
        const startY = transformed_y - 150;
        const endX = transformed_x + 150;
        const endY = transformed_y + 150;

        const x = startX > 0 ? startX : 0;
        const y = startY > 0 ? startY : 0;
        const ex = endX < p5.width ? endX : p5.width;
        const ey = endY < p5.height ? endY : p5.height;

        const cutted = context.getImageData(x, y, ex, ey);

        context2.putImageData(cutted, 0, 0);

      }
    }




  };

  return <>
    <Sketch setup={setup} draw={draw} />
    <canvas id="viewport" width={300} height={300} style={{ position: 'absolute', bottom: 0, left: 0, border: '1px dashed white' }}></canvas>
  </>;
};
