import { Avatar, Stack, Typography } from "@mui/material";
import Review from "../home/Review";
import InfoIcon from "../../assets/course-details/info.svg";
import LanguageIcon from "../../assets/course-details/language.svg";

function CourseBanner({ course }) {
  let renederedInstructors = course.classified_product.instructors.map(
    (instructor) => {
      return (
        <Stack direction="row" spacing="5px" key={instructor.instructor_id}>
          {instructor.profile_picture_url && (
            <Avatar
              src={instructor.profile_picture_url}
              alt="instructor-profile-avatar"
            />
          )}
          <Typography fontSize="16px" fontWeight={600} color="white">
            {instructor.name}
          </Typography>
        </Stack>
      );
    }
  );
  return (
    <Stack
      sx={{
        backgroundColor: "#28A19C",
        padding: "30px 40px",
      }}
    >
      <Stack direction="row" spacing="20px" paddingBottom="30px">
        <Typography fontSize="17px" fontWeight={700} color="white">
          {course.classified_product.subject}
        </Typography>
        <Typography fontSize="17px" fontWeight={700} color="white">
          {">"}
        </Typography>
        <Typography fontSize="17px" fontWeight={700} color="white">
          {course.classified_product.title}
        </Typography>
      </Stack>
      <Stack spacing="15px">
        <Typography color="white" component="span" variant="h2">
          {course.classified_product.title}
        </Typography>
        <Typography color="white" fontSize="16px" fontWeight={500}>
          {course.classified_product.description}
        </Typography>
        <Stack direction="row" spacing="60px">
          <Review
            rate={course.final_rating_from_reviews}
            votes={course.reviews_number}
            rateColor="white"
            rateFontSize="19px"
            votesColor="white"
            votesFontSize="14px"
          />
          <Stack direction="row" alignItems="center" spacing="5px">
            <img width="20px" height="20px" src={InfoIcon} alt="info-icon" />
            <Typography fontSize="16px" fontWeight={500} color="white">
              Last Updated 2/3/2019
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing="5px">
            <img
              width="20px"
              height="20px"
              src={LanguageIcon}
              alt="language-icon"
            />
            <Typography fontSize="16px" fontWeight={500} color="white">
              English
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack direction="row" paddingTop="20px">
        {renederedInstructors}
      </Stack>
    </Stack>
  );
}

export default CourseBanner;
