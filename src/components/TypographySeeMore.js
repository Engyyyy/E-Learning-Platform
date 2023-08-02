import { useRef, useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";

function TypographySeeMore({ children, width, ...rest }) {
  return (
    <Box position="relative" width="225px">
      <Typography
        position="fixed"
        lineHeight="16px"
        height="32px"
        overflow="hidden"
        {...rest}
      >
        {children}
      </Typography>
      {
        <Typography position="absolute" bottom={0} right={0} display="block">
          ...See More
        </Typography>
      }
    </Box>
  );
}

export default TypographySeeMore;
