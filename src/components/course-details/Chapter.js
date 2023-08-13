import { useState } from "react";
import { Stack, Typography, Button, Divider } from "@mui/material";
import ReadingIcon from "../../assets/course-details/reading-icon.svg";
import ChapterSessions from "./ChapterSessions";

function Chapter({ section, index, isLast }) {
  const [showMore, setShowMore] = useState(false);
  const handleClick = () => {
    setShowMore(!showMore);
  };

  const videos = section.sessions.filter((session) => {
    if (session.content_type === "book") return false;
    else return true;
  });

  const readings = section.sessions.filter((session) => {
    if (session.content_type === "book") return true;
    else return false;
  });

  return (
    <Stack spacing="50px" direction="row">
      <Stack alignItems="center" paddingTop="45px">
        <Typography fontSize="14px" fontWeight={600} color="#343434">
          Chapter
        </Typography>
        <Typography fontSize="48px" fontWeight={500} color="#343434">
          {index + 1}
        </Typography>
      </Stack>
      <Stack flexGrow={1}>
        <Stack
          direction="row"
          justifyContent="space-between"
          paddingTop="30px"
          paddingBottom="30px"
        >
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
              {section.title}
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
                {videos.length > 0 && `${videos.length} videos`}
                {videos.length > 0 && readings.length > 0 && ", "}
                {readings.length > 0 && `${readings.length} readings`}
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
          <Button
            sx={{ height: "48px", maxWidth: "165px", minWidth: "165px" }}
            variant="contained"
          >
            Enroll Chapter
          </Button>
        </Stack>
        {showMore && <ChapterSessions videos={videos} readings={readings} />}
        {isLast || <Divider />}
      </Stack>
    </Stack>
  );
}

export default Chapter;
