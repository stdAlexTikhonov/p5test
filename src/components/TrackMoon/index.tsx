import React from "react";
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

  let earth: Earth;
  let moon: Moon;
  let canvas: HTMLCanvasElement;

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


    canvas = canvasParentRef.getElementsByTagName('canvas')[0] as HTMLCanvasElement;
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';

  };

  const draw = (p5: p5Types) => {

    const transformed_x = p5.width / 2 - moon.pos.x * 0.7 - p5.width / 2;
    const transformed_y = p5.height / 2 - moon.pos.y * 0.7 - p5.height / 2;
    canvas.style.left = transformed_x + 'px';
    canvas.style.top = transformed_y + 'px';

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


  };

  return <Sketch setup={setup} draw={draw} />;
};