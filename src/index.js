import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import "./index.css";
import App from "./App";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

const theme = createTheme({
  palette: {
    primary: {
      main: "#28A19C",
    },
    secondary: {
      main: "#FFBA00",
    },
  },
  typography: {
    fontFamily: "Quicksand",
    button: {
      textTransform: "none",
    },
  },
});

root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
