import React from "react";
import Sketch from "react-p5";
import p5Types from "p5"; //Import this for typechecking and intellisense
import { Mover } from "./Mover";
import { Attractor } from "./Attractor";

interface ComponentProps {
  //Your component props
}

export const GravitationalAttraction: React.FC<ComponentProps> = (
  props: ComponentProps
) => {
  //See annotations in JS for more information
  let mover: Mover;
  let attractor: Attractor;
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(window.innerWidth / 2, window.innerHeight - 100).parent(
      canvasParentRef
    );
    mover = new Mover(200, 200, 50, p5);
    attractor = new Attractor(p5.width / 2, p5.height / 2, 50, p5);
    p5.background(0);
  };

  const draw = (p5: p5Types) => {
    p5.background(0, 5);
    if (mover) {
      mover.update(p5);
      mover.show(p5);

      attractor.attract(mover, p5);
      attractor.show(p5);
    }
  };

  return <Sketch setup={setup} draw={draw} />;
};
