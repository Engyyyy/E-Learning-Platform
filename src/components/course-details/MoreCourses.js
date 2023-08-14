import { Stack, Typography } from "@mui/material";
import AllCourses from "../home/AllCourses";

function MoreCourses() {
  return (
    <Stack spacing="25px" padding="20px 75px" sx={{ backgroundColor: "white" }}>
      <Typography variant="h3">More Courses</Typography>
      <AllCourses backgroundColor="#F3F3F3" buttonVariant="contained" />
    </Stack>
  );
}

export default MoreCourses;
