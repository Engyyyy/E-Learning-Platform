import { Box, Container } from "@mui/material";
import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import MoreCoursesPage from "./pages/MoreCoursesPage";
import CourseDetailsPage from "./pages/CourseDetailsPage";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const openLoginPage = () => setIsLoginOpen(true);
  const closeLoginPage = () => setIsLoginOpen(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Box>
          <Header openLogin={openLoginPage} />
          <HomePage />
          <Footer />
          <LoginPage isOpen={isLoginOpen} closeLogin={closeLoginPage} />
        </Box>
      ),
    },
    {
      path: "more-courses",
      element: (
        <Box>
          <Header openLogin={openLoginPage} />
          <MoreCoursesPage />
          <Footer />
          <LoginPage isOpen={isLoginOpen} closeLogin={closeLoginPage} />
        </Box>
      ),
    },
    {
      path: "course-details/:course_id",
      element: (
        <Box>
          <Header openLogin={openLoginPage} />
          <CourseDetailsPage />
          <Footer />
          <LoginPage isOpen={isLoginOpen} closeLogin={closeLoginPage} />
        </Box>
      ),
    },
  ]);

  return (
    <Container maxWidth="xl" disableGutters>
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;
