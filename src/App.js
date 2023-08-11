import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import MoreCoursesPage from "./pages/MoreCoursesPage";

function App() {
  console.log(useTheme());

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "more-courses/:subject_id/:subject_name",
      element: <MoreCoursesPage />,
    },
  ]);

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const openLoginPage = () => setIsLoginOpen(true);
  const closeLoginPage = () => setIsLoginOpen(false);
  return (
    <Box>
      <Header openLogin={openLoginPage} />
      <RouterProvider router={router} />
      <Footer />
      <LoginPage isOpen={isLoginOpen} closeLogin={closeLoginPage} />
    </Box>
  );
}

export default App;
