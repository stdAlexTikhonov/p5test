import React, { useState } from "react";
import Sketch from "react-p5";
import p5Types from "p5"; //Import this for typechecking and intellisense
import { Earth } from "./Earth";
import { Moon } from "./Moon";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

interface ComponentProps {
  //Your component props
}

export const MoonMotion: React.FC<ComponentProps> = (
  props: ComponentProps
) => {
  //See annotations in JS for more information
  // const [showPath, togglePath] = useState(false);
  // const [focus, setFocus] = useState({
  //   x: 0,
  //   y: 0
  // });

  let earth: Earth;
  let moon: Moon;
  let canvas: HTMLCanvasElement;
  let focus: p5Types.Vector;
  let magnitute: number = 0;
  let moonFocus: boolean = false;
  let showPath: boolean = false;
  let scale: number = 0.7;
  let zoom: boolean = false;



  const setup = (p5: p5Types, canvasParentRef: Element) => {
    focus = p5.createVector(0, 0);

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

    canvas.onclick = () => {

      if (moonFocus) {
        alert('moon clicked');
      }
      else {
        alert('earth clicked');
      }
    }

  };

  const draw = (p5: p5Types) => {
    focus.x = moon.pos.x;
    focus.y = moon.pos.y;

    if (moonFocus) {
      if (magnitute < moon.pos.mag()) {
        zoom = false;
        showPath = false;
        magnitute += 2;
        focus.setMag(magnitute);
      } else {
        focus.x = moon.pos.x;
        focus.y = moon.pos.y;
      }

    } else {

      if (magnitute > 0) {
        zoom = false;
        showPath = false;
        magnitute -= 2;
        focus.setMag(magnitute);
      } else { focus.setMag(0); }
    }



    if (zoom) scale = scale > 0.7 ? scale - 0.1 : 0.7;
    else scale = scale < 30 ? scale + 0.01 : scale;

    const transformed_x = p5.width / 2 - focus.x * scale;
    const transformed_y = p5.height / 2 - focus.y * scale;
    p5.translate(transformed_x, transformed_y);


    p5.scale(scale);

    if (showPath) p5.background(0, 5);
    else p5.background(0);

    if (earth) {
      // earth.attract(moon, p5);
      earth.show(p5);
    }

    if (moon && earth) {
      moon.update(p5, earth);
      moon.show(p5);

    }


  };

  const handleMoonClick = (e: any) => { e.stopPropagation(); moonFocus = true; zoom = true; }

  const handleEarthClick = (e: any) => { e.stopPropagation(); moonFocus = false; zoom = true; }

  const handleShowPath = () => { showPath = !showPath; }



  const toggleZoom = () => { zoom = true; }

  return <>
    <Sketch setup={setup} draw={draw} />
    <Box sx={{ position: 'absolute', top: 0, left: 0 }}>
      <Button onClick={handleMoonClick}>to the moon</Button>
      <Button onClick={handleEarthClick}>Back to Earth</Button>
      <Button onClick={handleShowPath}>Toggle path</Button>
      <Button onClick={toggleZoom}>Zoom out</Button>
    </Box>

  </>;
};
