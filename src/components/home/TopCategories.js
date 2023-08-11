import { useCallback, useEffect, useState } from "react";
import { useGetSubjectsQuery, useGetSubjectCoursesMutation } from "../../store";
import { Button, Container, Stack } from "@mui/material";
import HomeSection from "./HomeSection";
import Dropdowns from "./Dropdowns";
import CustomTabs from "./CustomTabs";
import CourseCard from "../CourseCard";

function TopCategories() {
  const [selected, setSelected] = useState(11);
  const subjectsResult = useGetSubjectsQuery();
  const [getSubjectCourses, subCoursesResult] = useGetSubjectCoursesMutation();

  const handleSelect = useCallback(
    (tabId) => {
      setSelected(tabId);
      getSubjectCourses({ subject_id: tabId, pageNum: 1, pageSize: 4 });
    },
    [getSubjectCourses]
  );

  useEffect(() => {
    if (subjectsResult.data) {
      handleSelect(subjectsResult.data.data.subjects[0].id);
    }
  }, [subjectsResult.data, handleSelect]);

  let topCategoryCourses =
    subCoursesResult.data &&
    subCoursesResult.data.data.courses.map((course) => {
      return (
        <CourseCard
          key={course.classified_product.course_id}
          imageUrl={course.classified_product.image_url}
          title={course.classified_product.title}
          description={course.classified_product.description}
          priceBeforeDiscount={course.original_price}
          priceAfterDiscount={course.price_after_discount}
          currency={course.original_price_currency}
          rate={course.final_rating_from_reviews}
          reviewsNumber={course.reviews_number}
        />
      );
    });

  let title = "Top Categories";
  let subtitle = (
    <>
      Learn the latest skills to reach your <br /> professional goals
    </>
  );
  let content = (
    <Stack marginLeft="80px" marginRight="80px" spacing="50px">
      <Stack spacing="35px">
        <Dropdowns />
        {subjectsResult.data && (
          <CustomTabs
            value={selected}
            onChange={handleSelect}
            tabs={subjectsResult.data.data.subjects}
          />
        )}
        <Stack direction="row" spacing="30px">
          {topCategoryCourses}
        </Stack>
      </Stack>
      <Stack alignItems="center">
        <Button
          variant="contained"
          sx={{
            width: "314px",
            height: "52px",
            fontSize: "20px",
          }}
        >
          View More Courses
        </Button>
      </Stack>
    </Stack>
  );
  return <HomeSection title={title} subtitle={subtitle} content={content} />;
}

export default TopCategories;
