import * as React from "react";
import Box from "@mui/material/Box";
import { RandomWalker } from "../RandomWalker";
import { RandomVectors } from "../RandomVectors";

export default function App() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "primary.dark",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <RandomVectors />
    </Box>
  );
}
