import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import { useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

function App() {
  console.log(useTheme());
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const openLoginPage = () => setIsLoginOpen(true);
  const closeLoginPage = () => setIsLoginOpen(false);
  return (
    <Box>
      <Header openLogin={openLoginPage} />
      <HomePage />
      <Footer />
      <LoginPage isOpen={isLoginOpen} closeLogin={closeLoginPage} />
    </Box>
  );
}

export default App;
