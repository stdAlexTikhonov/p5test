import React from "react";
import Sketch from "react-p5";
import p5Types, { Vector } from "p5"; //Import this for typechecking and intellisense
import { Gravity } from "./Gravity";

interface ComponentProps {
  //Your component props
}

export const GravityComponent: React.FC<ComponentProps> = (
  props: ComponentProps
) => {
  //See annotations in JS for more information
  let moverA: Gravity;
  let moverB: Gravity;
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(window.innerWidth / 2, window.innerHeight - 100).parent(
      canvasParentRef
    );
    moverA = new Gravity(p5.width / 2, p5.height / 2, 2, p5);
    moverB = new Gravity(100, p5.height / 2, 4, p5);
    p5.background(0);
  };

  const draw = (p5: p5Types) => {
    p5.background(0);
    let gravity = p5.createVector(0, 0.5);
    let wind = p5.createVector(0.2, 0)
    if (moverA) {
      let weightA = Vector.mult(gravity, moverA.mass);
      moverA.applyForce(weightA);
      if (p5.mouseIsPressed) moverA.applyForce(wind);
      moverA.update(p5);
      moverA.edges(p5);
      moverA.show(p5);
    }

    if (moverB) {
      let weightB = Vector.mult(gravity, moverB.mass);
      moverB.applyForce(weightB);
      if (p5.mouseIsPressed) moverB.applyForce(wind);
      moverB.update(p5);
      moverB.edges(p5);
      moverB.show(p5);
    }
  };

  return <Sketch setup={setup} draw={draw} />;
};
