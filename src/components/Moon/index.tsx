import React from "react";
import Sketch from "react-p5";
import p5Types from "p5"; //Import this for typechecking and intellisense
import { useNavigate } from "react-router-dom";

interface ComponentProps {
    //Your component props
}

export const Moon: React.FC<ComponentProps> = (
    props: ComponentProps
) => {
    //See annotations in JS for more information
    const navigate = useNavigate();
    const setup = (p5: p5Types, canvasParentRef: Element) => {
        p5.createCanvas(window.innerWidth / 2, window.innerHeight - 100).parent(
            canvasParentRef
        );

        p5.background(0);

        const canvas = canvasParentRef.getElementsByTagName('canvas')[0] as HTMLCanvasElement;

        canvas.onclick = () => {
            navigate('/')
        }

    };

    const draw = (p5: p5Types) => {
        p5.translate(p5.width / 2, p5.height / 2);
        p5.ellipse(0, 0, 30);
    };

    return <Sketch setup={setup} draw={draw} />;
};
