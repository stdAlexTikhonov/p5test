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

  const setup = (p5: p5Types, canvasParentRef: Element) => {

    p5.createCanvas(window.innerWidth / 2, window.innerHeight - 100).parent(
      canvasParentRef
    );

    const earth_props = {
      x: p5.width / 2,
      y: p5.height / 2,
      mass: 597.42,
      radius: 6.371
    };

    earth = new Earth(earth_props.x, earth_props.y, earth_props.mass, earth_props.radius, p5);

    const moon_props = {
      x: earth_props.x - 385,
      y: earth_props.y - 385
    };

    moon = new Moon(moon_props.x, moon_props.y, 5, 1.737, p5);

  };

  const draw = (p5: p5Types) => {
    p5.background(0);
    if (earth) {
      earth.show(p5);
    }

    if (moon) {
      moon.show(p5);
    }
  };

  return <Sketch setup={setup} draw={draw} />;
};
