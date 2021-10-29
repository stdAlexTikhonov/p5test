import React from "react";
import Sketch from "react-p5";
import p5Types from "p5"; //Import this for typechecking and intellisense

interface ComponentProps {
    //Your component props
}

export const RandomVectors: React.FC<ComponentProps> = (
    props: ComponentProps
) => {
    //See annotations in JS for more information

    const setup = (p5: p5Types, canvasParentRef: Element) => {
        p5.createCanvas(400, 400).parent(
            canvasParentRef
        );

    };

    const draw = (p5: p5Types) => {

        p5.background(0);
        let pos = p5.createVector(200, 200);
        // let v = p5.createVector(p5.random(-100, 100), p5.random(-100, 100));
        let mouse = p5.createVector(p5.mouseX, p5.mouseY);

        let v = p5Types.Vector.sub(mouse, pos);
        // v.normalize();
        // v.mult(50);
        v.setMag(50);
        p5.translate(p5.width / 2, p5.height / 2);
        p5.strokeWeight(2);
        p5.stroke(255);
        p5.line(0, 0, v.x, v.y);
    };

    return <Sketch setup={setup} draw={draw} />;
};