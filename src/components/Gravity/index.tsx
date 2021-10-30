import React from "react";
import Sketch from "react-p5";
import p5Types from "p5"; //Import this for typechecking and intellisense
import { Gravity } from "./Gravity";

interface ComponentProps {
  //Your component props
}

export const GravityComponent: React.FC<ComponentProps> = (
  props: ComponentProps
) => {
  //See annotations in JS for more information
  let mover: Gravity;
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(400, 400).parent(
      canvasParentRef
    );
    mover = new Gravity(p5.width / 2, p5.height / 2, p5);
    p5.background(0);
  };

  const draw = (p5: p5Types) => {
    let gravity = p5.createVector(0, 0.5);
    let wind = p5.createVector(0.2, 0)
    if (mover) {
      mover.applyForce(gravity);
      if (p5.mouseIsPressed) mover.applyForce(wind);
      mover.update(p5);
      mover.edges(p5);
      mover.show(p5);
    }
  };

  return <Sketch setup={setup} draw={draw} />;
};
