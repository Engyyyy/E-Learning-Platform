import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  IconButton,
  Pagination,
  PaginationItem,
  Stack,
  Typography,
} from "@mui/material";
import { useGetSubjectCoursesMutation } from "../store";
import CourseCard from "../components/CourseCard";
import SliderLeft from "../assets/home/slider-left-icon.svg";
import SliderRight from "../assets/home/slider-right-icon.svg";

function MoreCoursesPage() {
  const { subject_id, subject_name } = useParams();

  const [page, setPage] = useState(1);

  const [getSubjectCourses, subjectCoursesResult] =
    useGetSubjectCoursesMutation();

  const handleChange = (event, value) => {
    setPage(value);
    getSubjectCourses({ subject_id, pageNum: value, pageSize: 8 });
  };

  useEffect(() => {
    getSubjectCourses({ subject_id, pageNum: 1, pageSize: 8 });
  }, [subject_id, getSubjectCourses]);

  const renderCourses = (start) => {
    return (
      subjectCoursesResult.data &&
      subjectCoursesResult.data.data.courses
        .slice(start, start + 4)
        .map((course) => {
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
        })
    );
  };

  return (
    <Stack spacing="80px" alignItems="center" padding="80px 0px">
      <Stack spacing="30px" alignItems="center">
        <Typography textAlign="center" fontSize="36px" fontWeight={700}>
          {subject_name} Courses
        </Typography>
        <Typography fontSize="30px" fontWeight={700} color="secondary">
          Courses to get you started
        </Typography>
        <Stack direction="row" spacing="30px" justifyContent="center">
          {renderCourses(0)}
        </Stack>
        <Stack direction="row" spacing="30px" justifyContent="center">
          {renderCourses(4)}
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
        count={10}
        color="primary"
      />
    </Stack>
  );
}

export default MoreCoursesPage;
