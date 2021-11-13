import * as React from "react";
import Box from "@mui/material/Box";
import { MoonMotion } from "../Transfer";


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
