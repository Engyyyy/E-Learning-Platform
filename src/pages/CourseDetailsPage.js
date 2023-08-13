import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useGetCourseDetailsQuery } from "../store";
import { CircularProgress, Stack, Tabs, Tab } from "@mui/material";
import CourseBanner from "../components/course-details/CourseBanner";
import AboutCourse from "../components/course-details/AboutCourse";
import Requirements from "../components/course-details/Requirements";
import WhatYouLearn from "../components/course-details/WhatYouLearn";
import ContentSection from "../components/course-details/ContentSection";

function CourseDetailsPage() {
  const { course_id } = useParams();
  const courseDetailsResult = useGetCourseDetailsQuery(course_id);
  let course = courseDetailsResult.data?.data;
  useEffect(() => console.log(courseDetailsResult));
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
    content = <CircularProgress color="primary" />;
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
      </Stack>
    );
  }
  return content;
}

export default CourseDetailsPage;
