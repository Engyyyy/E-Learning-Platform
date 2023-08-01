import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { mainTheme } from "./themes/main-theme";
import "./index.css";
import App from "./App";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <ThemeProvider theme={mainTheme}>
    <App />
  </ThemeProvider>
);
