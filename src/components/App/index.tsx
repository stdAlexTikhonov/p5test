import * as React from "react";
import Box from "@mui/material/Box";
import { RandomWalker } from "../RandomWalker";

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
      <RandomWalker />
    </Box>
  );
}
