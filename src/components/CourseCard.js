import { Typography, Button, Box } from "@mui/material";
import Pattern from "../assets/Pattern.jpg";
import CustomCard from "./CustomCard";
import Review from "./Review";

function CourseCard() {
  let content = (
    <Box style={{ display: "block", width: "272px" }}>
      <Typography marginBottom="15px" variant="h4">
        Digital Marketing
      </Typography>

      <Review rate={4.7} votes={1988} />

      <Typography
        marginTop="10px"
        marginBottom="10px"
        variant="body1"
        textOverflow="ellipsis"
        noWrap
        width="225px"
        overflow="hidden"
        display="block"
      >
        Melvin Owens, Roberts Andrei, Jose Partila, bla bla bla
      </Typography>

      <Typography
        variant="body2"
        textOverflow="ellipsis"
        lineHeight="16px"
        height="32px"
        width="225px"
        overflow="hidden"
        display="block"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Typography>
    </Box>
  );
  let actions = (
    <Button sx={{ width: 1 }} variant="outlined">
      Enroll now!
    </Button>
  );

  return <CustomCard media={Pattern} content={content} actions={actions} />;
}

export default CourseCard;
