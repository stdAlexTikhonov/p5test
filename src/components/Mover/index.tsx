import React from "react";
import Sketch from "react-p5";
import p5Types from "p5"; //Import this for typechecking and intellisense
import { Mover } from "./Mover";

interface ComponentProps {
  //Your component props
}

export const MoverComponent: React.FC<ComponentProps> = (
  props: ComponentProps
) => {
  //See annotations in JS for more information
  let mover: Mover;
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(window.innerWidth / 2, window.innerHeight - 100).parent(
      canvasParentRef
    );
    mover = new Mover(p5.width / 2, p5.height / 2, p5);
    p5.background(0);
  };

  const draw = (p5: p5Types) => {
    if (mover) {
      mover.update(p5);
      mover.show(p5);
    }
  };

  return <Sketch setup={setup} draw={draw} />;
};
