import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  console.log(useTheme());

  return (
    <Box>
      <Header />
      <Footer />
    </Box>
  );
}

export default App;
