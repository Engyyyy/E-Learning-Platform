import { Stack, Typography } from "@mui/material";
import Chapter from "./Chapter";

function ContentSection({ sections }) {
  const renderedContent = sections.map((section, index) => {
    return (
      <Chapter
        section={section}
        index={index}
        isLast={index === sections.length - 1}
        key={section.section_id}
      />
    );
  });

  return (
    <Stack
      spacing="15px"
      padding="20px 25px"
      borderRadius="7px"
      width="800px"
      sx={{ backgroundColor: "white" }}
    >
      <Stack>
        <Typography variant="h3" color="#343434">
          Content
        </Typography>
        <Typography fontSize="15px" fontWeight={500} color="#767676">
          {sections.length} sections
        </Typography>
      </Stack>
      <Stack>{renderedContent}</Stack>
    </Stack>
  );
}

export default ContentSection;
