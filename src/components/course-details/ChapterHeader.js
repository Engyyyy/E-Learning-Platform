import { Stack, Typography } from "@mui/material";
import ReadingIcon from "../../assets/course-details/reading-icon.svg";

function ChapterHeader({
  title,
  videosLength,
  readingsLength,
  toggleShowMore,
  showMore,
}) {
  const handleClick = () => {
    toggleShowMore();
  };

  return (
    <Stack flexGrow={1}>
      <Typography
        noWrap
        width="450px"
        textOverflow="ellipsis"
        overflow="hidden"
        variant="h3"
        color="#343434"
        marginBottom="15px"
      >
        {title}
      </Typography>
      <Stack
        marginBottom="25px"
        direction="row"
        alignItems="center"
        spacing="10px"
      >
        <img
          style={{ width: "42px", height: "42px" }}
          src={ReadingIcon}
          alt="reading-icon"
        />
        <Typography fontSize="15px" fontWeight={500} color="#767676">
          {videosLength > 0 && `${videosLength} videos`}
          {videosLength > 0 && readingsLength > 0 && ", "}
          {readingsLength > 0 && `${readingsLength} readings`}
        </Typography>
      </Stack>
      <Typography
        fontSize="15px"
        fontWeight={600}
        color="primary"
        onClick={handleClick}
        sx={{ cursor: "pointer" }}
      >
        {showMore ? "Show less" : "Show more"}
      </Typography>
    </Stack>
  );
}

export default ChapterHeader;
