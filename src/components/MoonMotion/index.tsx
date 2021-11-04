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

    const earth_position = {
      x: p5.width / 2,
      y: p5.height / 2,
    };

    earth = new Earth(earth_position.x, earth_position.y, 50, 6.371, p5);

    const moon_position = {
      x: earth_position.x - 385,
      y: earth_position.y - 385
    };

    moon = new Moon(moon_position.x, moon_position.y, 5, 1.737, p5);

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
