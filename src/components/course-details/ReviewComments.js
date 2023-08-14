import { Rating, Stack, Typography } from "@mui/material";

function ReviewComments({ reviews }) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <Stack paddingLeft="110px" paddingTop="40px" spacing="25px">
      {reviews.map((review) => {
        const reviewDay = review.date.slice(0, 2);
        const reviewMonth = months[parseInt(review.date.slice(3, 5)) - 1];
        const reviewYear = review.date.slice(6);
        return (
          <Stack key={review.product_review_id}>
            <Rating value={review.rating} precision={0.1} readOnly />
            <Stack
              direction="row"
              alignItems="center"
              spacing="15px"
              marginBottom="5px"
            >
              <Typography fontSize="20px" fontWeight={700}>
                {review.user.name}
              </Typography>
              <Typography fontSize="16px" fontWeight={400}>
                {reviewMonth} {reviewDay}, {reviewYear}
              </Typography>
            </Stack>
            <Typography fontSize="16px" fontWeight={600}>
              {review.comment}
            </Typography>
          </Stack>
        );
      })}
    </Stack>
  );
}

export default ReviewComments;
