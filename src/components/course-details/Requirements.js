import { ListItem, Stack, Typography } from "@mui/material";

function Requirements() {
  return (
    <Stack
      spacing="15px"
      padding="20px 25px"
      borderRadius="7px"
      width="800px"
      sx={{ backgroundColor: "white" }}
    >
      <Typography variant="h3" color="#343434">
        Requirements
      </Typography>
      <Typography fontSize="15px" fontWeight={500} color="#343434">
        <ListItem sx={{ display: "list-item" }}>
          You will need a copy of Adobe XD 2019 or above. A free trial can be
          downloaded from Adobe
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          No previous design experience is needed.
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          No previous Adobe XD skills are needed.
        </ListItem>
      </Typography>
    </Stack>
  );
}

export default Requirements;
