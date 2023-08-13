import { Link } from "react-router-dom";
import { Typography, Button, Box, Stack } from "@mui/material";
import CustomCard from "./CustomCard";
import Review from "./Review";

function CourseCard({
  id,
  imageUrl,
  title,
  description,
  priceBeforeDiscount,
  priceAfterDiscount,
  currency,
  rate,
  reviewsNumber,
}) {
  let media = imageUrl && (
    <img height="170px" width="272px" src={imageUrl} alt="course-media" />
  );

  let content = (
    <Stack
      spacing="15px"
      style={{ display: "block", width: "272px", padding: "5px 0px 5px 0px" }}
    >
      <Link
        style={{ textDecoration: "none", color: "#343434" }}
        to={`/course-details/${id}`}
      >
        <Typography
          variant="h4"
          textOverflow="ellipsis"
          noWrap
          width="225px"
          overflow="hidden"
          display="block"
        >
          {title}
        </Typography>
      </Link>

      <Stack spacing="10px">
        <Review
          rate={rate}
          votes={reviewsNumber}
          rateColor="#F7B52E"
          rateFontSize="14px"
          votesColor="#938F8C"
          votesFontSize="11px"
        />

        <Typography
          variant="body1"
          textOverflow="ellipsis"
          noWrap
          width="225px"
          overflow="hidden"
          display="block"
        >
          {description}
        </Typography>
      </Stack>

      <Typography
        variant="body2"
        textOverflow="ellipsis"
        lineHeight="16px"
        height="32px"
        width="225px"
        overflow="hidden"
        display="block"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Typography>
      {priceBeforeDiscount && currency && (
        <Stack direction="row" spacing="10px" alignItems="center">
          <Box>
            <Typography
              color="#343434"
              fontSize="16px"
              fontWeight={700}
              component="span"
            >
              {currency + " "}
            </Typography>
            <Typography
              color="#343434"
              fontSize="16px"
              fontWeight={700}
              component="span"
            >
              {priceAfterDiscount}
            </Typography>
          </Box>
          {priceAfterDiscount < priceBeforeDiscount && (
            <Box sx={{ textDecoration: "line-through" }}>
              <Typography
                color="#343434"
                fontSize="16px"
                fontWeight={500}
                component="span"
              >
                {currency + " "}
              </Typography>
              <Typography
                color="#343434"
                fontSize="16px"
                fontWeight={500}
                component="span"
              >
                {priceBeforeDiscount}
              </Typography>
            </Box>
          )}
        </Stack>
      )}
    </Stack>
  );
  let actions = (
    <Button sx={{ width: 1 }} variant="outlined">
      Enroll now!
    </Button>
  );

  return (
    <CustomCard
      media={media}
      content={content}
      actions={actions}
      cardHeight="460px"
    />
  );
}

export default CourseCard;