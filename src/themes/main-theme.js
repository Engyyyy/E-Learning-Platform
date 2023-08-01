import { createTheme } from "@mui/material/styles";

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#28A19C",
    },
    secondary: {
      main: "#FFBA00",
    },
  },
  typography: {
    h1: {
      fontSize: "40px",
      fontWeight: 600,
    },
    h2: {
      fontSize: "32px",
      fontWeight: 700,
    },
    h3: {
      fontSize: "24px",
      fontWeight: 700,
    },
    h4: {
      fontSize: "16px",
      fontWeight: 700,
    },
    body1: {
      fontSize: "12px",
      fontWeight: 600,
    },
    body2: {
      fontSize: "11px",
      fontWeight: 500,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
    allVariants: {
      fontFamily: "Quicksand",
    },
  },
});
