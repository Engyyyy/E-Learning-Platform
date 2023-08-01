import { Stack, Typography, Rating } from "@mui/material";

function Review({ rate, votes }) {
  return (
    <Stack component="span" direction="row" spacing="4px" alignItems="center">
      <Typography color="#F7B52E" fontSize="14px" fontWeight={600}>
        {rate}
      </Typography>
      <Rating defaultValue={rate} precision={0.1} readOnly size="small" />
      <Typography fontSize="11px" fontWeight={400} color="#938F8C">
        {`(${votes})`}
      </Typography>
    </Stack>
  );
}

export default Review;
