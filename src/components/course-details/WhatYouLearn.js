import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import CheckIcon from "../../assets/course-details/check.svg";

function WhatYouLearn() {
  const learnedList1 = [
    "Lorem ipsum dolor sit amet, consetetur",
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy",
    "Lorem ipsum dolor sit",
    "Lorem ipsum dolor sit amet, consetetur",
  ];
  const learnedList2 = [
    "Lorem ipsum dolor sit amet, consetetur",
    "Lorem ipsum dolor sit amet, consetetur",
    "Lorem ipsum dolor sit amet, consetetur sadipscing",
    "Lorem ipsum dolor amet",
  ];
  return (
    <Stack
      spacing="15px"
      padding="20px 25px"
      borderRadius="7px"
      width="800px"
      sx={{ backgroundColor: "white" }}
    >
      <Typography variant="h3" color="#343434">
        What you will learn
      </Typography>
      <Stack direction="row">
        <List disablePadding sx={{ width: "0.5" }}>
          {learnedList1.map((item, index) => {
            return (
              <ListItem key={index} disablePadding sx={{ padding: "4px" }}>
                <ListItemIcon sx={{ minWidth: "35px" }}>
                  <img src={CheckIcon} alt="check-icon" />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: "15px",
                    fontWeight: 500,
                    color: "#343434",
                  }}
                >
                  {item}
                </ListItemText>
              </ListItem>
            );
          })}
        </List>
        <List disablePadding>
          {learnedList2.map((item, index) => {
            return (
              <ListItem key={index} disablePadding sx={{ padding: "4px" }}>
                <ListItemIcon sx={{ minWidth: "35px" }}>
                  <img src={CheckIcon} alt="check-icon" />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: "15px",
                    fontWeight: 500,
                    color: "#343434",
                  }}
                >
                  {item}
                </ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Stack>
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

export default WhatYouLearn;
