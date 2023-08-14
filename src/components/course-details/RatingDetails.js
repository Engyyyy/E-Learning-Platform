import { Stack, Typography, Rating, LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";

function RatingDetails({ reviews, finalRating, numberOfReviews }) {
  const [eachStarRating, setEachStarRating] = useState([0, 0, 0, 0, 0]);
  useEffect(() => {
    const calculateEachStarRating = () => {
      let stars = [0, 0, 0, 0, 0];
      reviews.forEach((review) => {
        const rating = parseInt(review.rating);
        stars[5 - rating]++;
      });
      setEachStarRating(stars);
    };
    calculateEachStarRating();
  }, [reviews]);
  return (
    <Stack width="33%">
      <Stack direction="row" alignItems="center" spacing="10px">
        <Typography fontSize="54px" fontWeight={700}>
          {finalRating}
        </Typography>
        <Stack>
          <Rating readOnly value={finalRating} precision={0.1} />
          <Typography fontSize="16px" fontWeight={400} paddingLeft="5px">
            {numberOfReviews} Reviews
          </Typography>
        </Stack>
      </Stack>
      <Stack spacing="15px">
        {eachStarRating.map((starRating, index) => {
          return (
            <Stack
              direction="row"
              key={index}
              alignItems="center"
              justifyContent="space-between"
              spacing="15px"
            >
              <Typography fontSize="16px" fontWeight={500}>
                {5 - index} stars
              </Typography>
              <LinearProgress
                value={
                  numberOfReviews === 0
                    ? 0
                    : (starRating / numberOfReviews) * 100
                }
                color="secondary"
                variant="determinate"
                sx={{
                  flexGrow: 1,
                  height: "9px",
                  backgroundColor: "white",
                }}
              />
              <Typography fontSize="16px" fontWeight={500}>
                {numberOfReviews === 0
                  ? 0
                  : (starRating / numberOfReviews) * 100}
                %
              </Typography>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
}

export default RatingDetails;
