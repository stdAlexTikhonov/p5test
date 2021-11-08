import * as React from "react";
import Box from "@mui/material/Box";
import { RandomWalker } from "../RandomWalker";
import { RandomVectors } from "../RandomVectors";
import { MoverComponent } from "../Mover";
import { GravityComponent } from "../Friction";
import { Drag } from "../Drag";
import { GravitationalAttraction } from "../GravitationalAttraction";
import { MoonMotion } from "../MoonFocus";


export default function App() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <MoonMotion />

    </Box>
  );
}
