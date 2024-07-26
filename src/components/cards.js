import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
export default function Cards({retreat}) {
    // console.log(retreat);
    let date=new Date(retreat.date*1000);
    date=date.toLocaleString();
  
  return (
    <div>
      <Card className="card" sx={{ backgroundColor: "#e0d9cf",margin:0,borderRadius:"5px" }}>
        <CardMedia
          sx={{ height: 140, marginLeft:2,marginTop:2, borderRadius: "10px",width:190 }}
          image={retreat.image}
          title="green iguana"
          className="cardimg"
        />
        <CardContent>
          <Typography gutterBottom  style={{fontWeight:600}} variant="h6" component="div">
            {retreat.title}
          </Typography>
          <Typography className="bio" variant="body2" color="black">
            {retreat.description}
          </Typography>
          <Typography className="bio" variant="body2" color="black">
            Date: {date||''}
          </Typography>
          <Typography className="bio" variant="body2" color="black">
            Location: {retreat.location}
          </Typography>
          <Typography className="bio" variant="body2" color="black">
            Price: <span style={{fontWeight:600}}>${retreat.price}</span>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
