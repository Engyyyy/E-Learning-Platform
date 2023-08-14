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
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Box>
          <HomePage />
          <Footer />
        </Box>
      ),
    },
    {
      path: "more-courses/:subject_id/:subject_name",
      element: (
        <Box>
          <MoreCoursesPage />
          <Footer />
        </Box>
      ),
    },
    {
      path: "course-details/:course_id",
      element: (
        <Box>
          <CourseDetailsPage />
          <Footer />
        </Box>
      ),
    },
  ]);

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const openLoginPage = () => setIsLoginOpen(true);
  const closeLoginPage = () => setIsLoginOpen(false);
  return (
    <Container maxWidth="xl" disableGutters>
      <Header openLogin={openLoginPage} />
      <RouterProvider router={router} />
      <LoginPage isOpen={isLoginOpen} closeLogin={closeLoginPage} />
    </Container>
  );
}

export default App;
