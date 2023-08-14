import { useState } from "react";
import { CircularProgress, IconButton, Stack } from "@mui/material";
import { useGetCoursesQuery } from "../../store";
import CourseCard from "./CourseCard";
import SliderLeft from "../../assets/home/slider-left-icon.svg";
import SliderRight from "../../assets/home/slider-right-icon.svg";

function AllCourses({ backgroundColor, buttonVariant }) {
  const result = useGetCoursesQuery();
  const [startIndex, setStartIndex] = useState(0);
  const numberOfShownCourses = 3;
  const allCourses =
    result.data &&
    Object.keys(result.data.data.courses).reduce((accCourses, subject) => {
      return [...accCourses, ...result.data.data.courses[subject]];
    }, []);
  const renderedCourses =
    allCourses &&
    allCourses
      .slice(startIndex, startIndex + numberOfShownCourses)
      .map((course) => {
        return (
          <CourseCard
            key={course.classified_product.course_id}
            id={course.classified_product.course_id}
            imageUrl={course.classified_product.image_url}
            title={course.classified_product.title}
            description={course.classified_product.description}
            priceBeforeDiscount={course.original_price}
            priceAfterDiscount={course.price_after_discount}
            currency={course.original_price_currency}
            rate={course.final_rating_from_reviews}
            reviewsNumber={course.reviews_number}
            backgroundColor={backgroundColor}
            buttonVariant={buttonVariant}
          />
        );
      });

  const handleSlideLeft = () => {
    setStartIndex(startIndex - numberOfShownCourses);
  };

  const handleSlideRight = () => {
    setStartIndex(startIndex + numberOfShownCourses);
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      padding="0px 80px"
    >
      <IconButton
        sx={{ height: "40px", width: "40px" }}
        disabled={!result.data || startIndex === 0}
        onClick={handleSlideLeft}
      >
        <img src={SliderLeft} alt="left-slider" />
      </IconButton>
      {result.isLoading ? (
        <CircularProgress color="primary" />
      ) : (
        <Stack direction="row" justifyContent="center" spacing="45px">
          {renderedCourses}
        </Stack>
      )}
      <IconButton
        sx={{ height: "40px", width: "40px" }}
        onClick={handleSlideRight}
        disabled={
          !result.data || startIndex >= allCourses.length - numberOfShownCourses
        }
      >
        <img src={SliderRight} alt="right-slider" />
      </IconButton>
    </Stack>
  );
}

export default AllCourses;
