import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelTitle,
} from "../utils/constant";
const ChannelCart = ({
  channelDetails: {
    id: { channelId },
    snippet,
  },
}) => {
console.log(snippet);
  return (
    <Card
      sx={{
        width: { xs: "100%", md: 345 },
        background: "transparent",
        color: "#fff",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200px"
          sx={{borderRadius:"50%",width:"200px",mx:"auto",mt:2}}
          image={
            snippet?.thumbnails
              ? snippet?.thumbnails?.high?.url
              : demoThumbnailUrl
          }
          alt="green iguana"
        />
        <CardContent sx={{ height: "60px",textAlign:"center" }}>
         
          <Typography
            variant="subtitle1"
            sx={{ display: "flex", alignItems: "center",justifyContent: "center"}}
          >
            {snippet?.channelTitle ? snippet?.channelTitle : demoChannelTitle}{" "}
            <CheckCircleIcon sx={{ fontSize: "15px", ml: 1 }} />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ChannelCart;
