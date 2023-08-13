import { useState } from "react";
import { Stack, Typography, Button, Divider } from "@mui/material";
import ChapterSessions from "./ChapterSessions";
import ChapterHeader from "./ChapterHeader";

function Chapter({ section, index, isLast }) {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
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
          <ChapterHeader
            title={section.title}
            videosLength={videos.length}
            readingsLength={readings.length}
            toggleShowMore={toggleShowMore}
            showMore={showMore}
          />
          <Button
            sx={{ height: "48px", maxWidth: "165px", minWidth: "165px" }}
            variant="contained"
          >
            Enroll Chapter
          </Button>
        </Stack>
        {showMore && <ChapterSessions videos={videos} readings={readings} />}
        <>{isLast || <Divider />}</>
      </Stack>
    </Stack>
  );
}

export default Chapter;
