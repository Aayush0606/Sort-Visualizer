import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper } from "@mui/material";
import Navbar from "./components/Navbar";
import CenterDiv from "./components/CenterDiv";

export default function App() {
  const [defTheme, setDefTheme] = useState("light");
  const changeTheme = () => {
    setDefTheme(defTheme === "light" ? "dark" : "light");
  };
  const theme = createTheme({
    palette: {
      mode: defTheme,
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Paper style={{ minHeight: "100vh" }}>
          <Navbar defTheme={defTheme} changeTheme={changeTheme} />
          <CenterDiv defTheme={defTheme} />
        </Paper>
      </ThemeProvider>
    </>
  );
}
