import { Avatar, Stack, Typography } from "@mui/material";
import StarIcon from "../../assets/course-details/star-icon.svg";
import CoursePlayIcon from "../../assets/course-details/course-video-play.svg";
import GroupIcon from "../../assets/course-details/group-icon.svg";

function Instructors({ instructors }) {
  const renderedInctructors = instructors.map((instructor) => {
    return (
      <Stack
        direction="row"
        key={instructor.instructor_id}
        spacing="20px"
        paddingRight="60px"
        paddingBottom="20px"
      >
        <Avatar
          sx={{ width: "100px", height: "100px" }}
          src={instructor.profile_picture_url}
          alt="instructor-profile"
        />
        <Stack spacing="5px">
          <Typography
            width="200px"
            noWrap
            textOverflow="ellipsis"
            overflow="hidden"
            fontSize="20px"
            fontWeight={700}
            color="#343434"
          >
            {instructor.name}
          </Typography>
          <Typography
            width="200px"
            noWrap
            textOverflow="ellipsis"
            overflow="hidden"
            fontSize="15px"
            fontWeight={400}
            color="#343434"
          >
            {instructor.bio}
          </Typography>
          <Stack spacing="2px">
            <Stack direction="row" spacing="15px">
              <img src={StarIcon} alt="star-icon" />
              <Typography fontSize="14px" fontWeight={400} color="#343434">
                4.5 Instructor Rating
              </Typography>
            </Stack>
            <Stack direction="row" spacing="15px">
              <img src={GroupIcon} alt="group-icon" />
              <Typography fontSize="14px" fontWeight={400} color="#343434">
                452,272 Learner
              </Typography>
            </Stack>
            <Stack direction="row" spacing="15px">
              <img src={CoursePlayIcon} alt="play-icon" />
              <Typography fontSize="14px" fontWeight={400} color="#343434">
                30 Courses
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    );
  });
  return (
    <Stack
      padding="20px 80px"
      sx={{ backgroundColor: "#F8F8F8" }}
      spacing="30px"
    >
      <Typography variant="h3" color="#343434">
        Instructors
      </Typography>
      <Stack direction="row" flexWrap="wrap">
        {renderedInctructors}
      </Stack>
    </Stack>
  );
}

export default Instructors;
