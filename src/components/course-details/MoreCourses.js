import { Stack, Typography } from "@mui/material";
import AllCourses from "../home/AllCourses";

function MoreCourses() {
  return (
    <Stack
      paddingTop="30px"
      paddingBottom="30px"
      spacing="25px"
      sx={{ backgroundColor: "white" }}
    >
      <Typography paddingLeft="75px" variant="h3">
        More Courses
      </Typography>
      <AllCourses backgroundColor="#F3F3F3" buttonVariant="contained" />
    </Stack>
  );
}

export default MoreCourses;
