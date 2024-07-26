import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Banner() {
  return (
    <Card sx={{ backgroundColor: "#e0d9cf", margin: 3 }}>
      <CardMedia
        sx={{ height: 400, margin: 2, borderRadius: "10px" }}
        image="https://m.media-amazon.com/images/I/71GaNbjybXL.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Discover your inner peace
        </Typography>
        <Typography variant="body2" color="black">
          Join us for a series of wellness retrets designed to help you find
          tranquility and rejuvenation.
        </Typography>
      </CardContent>
    </Card>
  );
}
