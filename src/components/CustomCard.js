import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Box } from "@mui/material";

function CustomCard({ media, content, actions, cardHeight }) {
  return (
    <Card
      style={{
        width: "272px",
        height: cardHeight,
        borderRadius: "15px",
        boxShadow: "1px 2px 15px rgba(0, 0, 0, 0.16)",
        position: "relative",
      }}
    >
      {media && <CardMedia>{media}</CardMedia>}
      <Box sx={{ padding: "0px 5px 5px 5px" }}>
        <CardContent>{content}</CardContent>
        <CardActions
          sx={{
            position: "absolute",
            bottom: "10px",
            left: "10px",
            width: "92%",
            textAlign: "center",
          }}
        >
          {actions}
        </CardActions>
      </Box>
    </Card>
  );
}

export default CustomCard;
