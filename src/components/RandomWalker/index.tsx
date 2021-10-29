import React from "react";
import Sketch from "react-p5";
import p5Types from "p5"; //Import this for typechecking and intellisense
import { Walker } from "./Walker";

interface ComponentProps {
  //Your component props
}

export const RandomWalker: React.FC<ComponentProps> = (
  props: ComponentProps
) => {
  //See annotations in JS for more information
  let walker: Walker;
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(window.innerWidth / 2, window.innerHeight - 100).parent(
      canvasParentRef
    );
    walker = new Walker(200, 200, p5);
    p5.background(0);
  };

  const draw = (p5: p5Types) => {
    if (walker) {
      walker.update(p5);
      walker.show(p5);
    }
  };

  return <Sketch setup={setup} draw={draw} />;
};
