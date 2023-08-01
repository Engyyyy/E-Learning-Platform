import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Box } from "@mui/material";

function CustomCard({ media, content, actions }) {
  return (
    <Card
      sx={{
        width: "272px",
        borderRadius: "15px",
        boxShadow: "1px 2px 15px rgba(0, 0, 0, 0.16)",
      }}
    >
      <CardMedia>
        <img src={media} alt="card-media" />
      </CardMedia>
      <Box padding="4px 10px 15px">
        <CardContent>{content}</CardContent>
        <CardActions>{actions}</CardActions>
      </Box>
    </Card>
  );
}

export default CustomCard;
