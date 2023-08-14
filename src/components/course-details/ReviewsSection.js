import { Button, Stack, Typography } from "@mui/material";
import RatingDetails from "./RatingDetails";
import ReviewComments from "./ReviewComments";

function ReviewsSection({ reviews, finalRating, numberOfReviews }) {
  return (
    <Stack padding="20px 75px">
      <Typography variant="h3" color="#343434">
        Reviews
      </Typography>
      <Stack direction="row" spacing="30px">
        <RatingDetails
          reviews={reviews}
          finalRating={finalRating}
          numberOfReviews={numberOfReviews}
        />
        {reviews.length > 0 && (
          <Stack flexGrow={1} spacing="60px">
            <ReviewComments reviews={reviews} />
            <Button sx={{ width: "350px" }} variant="outlined">
              View All Reviews
            </Button>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
}

export default ReviewsSection;
