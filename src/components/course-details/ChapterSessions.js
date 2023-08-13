import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import PlayIcon from "../../assets/course-details/play.svg";

function ChapterSessions({ videos, readings }) {
  const renderedVideos = videos.map((video) => {
    return (
      <ListItem key={video.course_session_id} disablePadding>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          width="1"
        >
          <Typography
            fontSize="15px"
            fontWeight={400}
            color="#343434"
            width="225px"
            textOverflow="ellipsis"
            overflow="hidden"
            noWrap
          >
            {video.title}
          </Typography>
          <Typography fontSize="15px" fontWeight={400} color="#343434">
            {video.expected_time < 10
              ? "0" + String(video.expected_time)
              : video.expected_time}
            :00
          </Typography>
          <Button variant="text">Preview</Button>
        </Stack>
      </ListItem>
    );
  });

  return (
    <Stack>
      {videos.length > 0 && (
        <Stack>
          <Divider />
          <List sx={{ paddingTop: "30px", paddingBottom: "30px" }}>
            <ListItem disablePadding>
              <ListItemIcon sx={{ minWidth: "30px", paddingTop: "4px" }}>
                <img
                  style={{ width: "24px", height: "24px" }}
                  src={PlayIcon}
                  alt="play-icon"
                />
              </ListItemIcon>
              <Typography
                sx={{ fontSize: "20px", fontWeight: 700, color: "#343434" }}
              >
                {videos.length} Videos
              </Typography>
            </ListItem>
            {renderedVideos}
          </List>
        </Stack>
      )}

      {readings.length > 0 && (
        <Stack paddingTop="25px" paddingBottom="25px">
          <Divider />
          <List>
            <ListItem disablePadding>
              <ListItemIcon sx={{ minWidth: "30px", paddingTop: "4px" }}>
                <img
                  style={{ width: "24px", height: "24px" }}
                  src={PlayIcon}
                  alt="play-icon"
                />
              </ListItemIcon>
              <ListItemText
                sx={{ fontSize: "20px", fontWeight: 700, color: "#343434" }}
              >
                {readings.length} Readings
              </ListItemText>
            </ListItem>
          </List>
        </Stack>
      )}
    </Stack>
  );
}

export default ChapterSessions;
