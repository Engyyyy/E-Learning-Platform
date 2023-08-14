import { useParams } from "react-router-dom";
import { useGetCourseDetailsQuery } from "../store";
import { Stack, Tabs, Tab, LinearProgress } from "@mui/material";
import CourseBanner from "../components/course-details/CourseBanner";
import AboutCourse from "../components/course-details/AboutCourse";
import Requirements from "../components/course-details/Requirements";
import WhatYouLearn from "../components/course-details/WhatYouLearn";
import ContentSection from "../components/course-details/ContentSection";
import Instructors from "../components/course-details/Instructors";
import ReviewsSection from "../components/course-details/ReviewsSection";
import MoreCourses from "../components/course-details/MoreCourses";

function CourseDetailsPage() {
  const { course_id } = useParams();
  const courseDetailsResult = useGetCourseDetailsQuery(course_id);
  let course = courseDetailsResult.data?.data;
  let tabs = [
    "Overview",
    "Content",
    "Instructors",
    "Reviews",
    "Quizzes",
    "Assignments",
  ];
  let content;
  if (courseDetailsResult.isLoading) {
    content = <LinearProgress color="primary" />;
  } else {
    content = (
      <Stack spacing="25px" marginBottom="25px">
        <Stack>
          <CourseBanner course={course} />
          <Tabs
            sx={{ backgroundColor: "white", paddingLeft: "40px" }}
            value={0}
          >
            {tabs.map((tab) => {
              return (
                <Tab key={tab} label={tab} sx={{ padding: "10px 20px" }} />
              );
            })}
          </Tabs>
        </Stack>
        <Stack paddingLeft="50px" spacing="25px">
          <AboutCourse />
          <Requirements />
          <WhatYouLearn />
          <ContentSection sections={course.classified_product.sections} />
        </Stack>
        <Instructors instructors={course.classified_product.instructors} />
        <ReviewsSection
          reviews={course.reviews}
          finalRating={course.final_rating_from_reviews}
          numberOfReviews={course.reviews_number}
        />
        <MoreCourses />
      </Stack>
    );
  }
  return content;
}

export default CourseDetailsPage;
