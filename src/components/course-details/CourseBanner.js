import { Avatar, Stack, Typography } from "@mui/material";
import Review from "../home/Review";
import InfoIcon from "../../assets/course-details/info.svg";
import LanguageIcon from "../../assets/course-details/language.svg";

function CourseBanner({ course }) {
  let renederedInstructors = course.classified_product.instructors.map(
    (instructor) => {
      return (
        <Stack
          direction="row"
          alignItems="center"
          spacing="8px"
          paddingBottom="10px"
          paddingRight="40px"
          key={instructor.instructor_id}
        >
          <Avatar
            sx={{ width: "32px", height: "32px" }}
            src={instructor.profile_picture_url}
            alt="instructor-profile-avatar"
          />
          <Typography
            width="300px"
            noWrap
            textOverflow="ellipsis"
            overflow="hidden"
            fontSize="16px"
            fontWeight={600}
            color="white"
          >
            {instructor.name}
          </Typography>
        </Stack>
      );
    }
  );
  return (
    <Stack
      sx={{ backgroundColor: "#28A19C" }}
      direction="row"
      justifyContent="space-between"
    >
      <Stack
        sx={{
          padding: "30px 40px",
        }}
      >
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
        <Stack flexWrap="wrap" direction="row" paddingTop="20px">
          {renederedInstructors}
        </Stack>
      </Stack>
      <>
        {course.classified_product.image_url && (
          <img
            style={{ width: "25%" }}
            src={course.classified_product.image_url}
            alt="course"
          />
        )}
      </>
    </Stack>
  );
}

export default CourseBanner;
