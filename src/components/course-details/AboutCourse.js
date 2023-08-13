import { Stack, Typography } from "@mui/material";

function AboutCourse() {
  return (
    <Stack
      spacing="15px"
      padding="20px 25px"
      borderRadius="7px"
      width="800px"
      sx={{ backgroundColor: "white" }}
    >
      <Typography variant="h3" color="#343434">
        About This Course
      </Typography>
      <Typography fontSize="15px" fontWeight={500} color="#343434">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, At vero
        eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
        gubergren, Lorem ipsum dolor sit amet, consetetur sadipscing
      </Typography>
      <Typography
        fontSize="18px"
        fontWeight={600}
        color="primary"
        sx={{ cursor: "pointer" }}
      >
        Show more
      </Typography>
    </Stack>
  );
}

export default AboutCourse;
