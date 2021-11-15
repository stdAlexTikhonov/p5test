import * as React from "react";
import Box from "@mui/material/Box";
import { MoonMotion } from "../Transfer";
import { Routes, Route, Link } from "react-router-dom";
import { Moon } from "../Moon";
import { Earth } from "../Earth";


export default function App() {
  return (
    <Box
      style={{
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
      <Routes>
        <Route path="/" element={<MoonMotion />} />
        <Route path="/earth" element={<Earth />} />
        <Route path="/moon" element={<Moon />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>

    </Box>
  );
}
