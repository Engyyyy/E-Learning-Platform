import { useState } from "react";
import {
  LinearProgress,
  Pagination,
  PaginationItem,
  Stack,
  Typography,
  Container,
} from "@mui/material";
import { useGetCoursesQuery } from "../store";
import CourseCard from "../components/home/CourseCard";
import SliderLeft from "../assets/home/slider-left-icon.svg";
import SliderRight from "../assets/home/slider-right-icon.svg";

function MoreCoursesPage() {
  const [page, setPage] = useState(1);

  const result = useGetCoursesQuery();

  const allCourses =
    result.data &&
    Object.keys(result.data.data.courses).reduce((accCourses, subject) => {
      return [...accCourses, ...result.data.data.courses[subject]];
    }, []);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const renderCourses = (start) => {
    return (
      allCourses &&
      allCourses.slice(start, start + 4).map((course) => {
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
            backgroundColor="white"
            buttonVariant="outlined"
          />
        );
      })
    );
  };

  let content;
  if (result.isLoading) content = <LinearProgress color="primary" />;
  else
    content = (
      <Stack spacing="80px" alignItems="center" padding="80px 80px">
        <Stack spacing="30px" alignItems="center">
          <Typography textAlign="center" fontSize="36px" fontWeight={700}>
            More Courses
          </Typography>
          <Typography fontSize="30px" fontWeight={700} color="secondary">
            Courses to get you started
          </Typography>
          <Stack direction="row" spacing="30px" justifyContent="center">
            {renderCourses((page - 1) * 8)}
          </Stack>
          <Stack direction="row" spacing="30px" justifyContent="center">
            {renderCourses((page - 1) * 8 + 4)}
          </Stack>
        </Stack>
        <Pagination
          sx={{
            ".MuiPaginationItem-root": {
              color: "#707070",
              opacity: "80%",
              fontSize: "28px",
              fontWeight: 400,
            },
            ".Mui-selected": {
              backgroundColor: "#f0efed",
              color: "#343434",
              opacity: "100%",
            },
          }}
          renderItem={(item) => (
            <PaginationItem
              slots={{
                next: () => <img src={SliderRight} alt="slider-right-icon" />,
                previous: () => <img src={SliderLeft} alt="slider-left-icon" />,
              }}
              {...item}
            />
          )}
          size="large"
          page={page}
          onChange={handleChange}
          count={Math.ceil(allCourses.length / 8)}
          color="primary"
        />
      </Stack>
    );

  return <Container disableGutters>{content}</Container>;
}

export default MoreCoursesPage;
