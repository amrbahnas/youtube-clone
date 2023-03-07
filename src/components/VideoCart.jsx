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
const VideoCart = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card sx={{ width: { xs: "100%", md: 345 },background:"#1e1e1e" , color:"#fff" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={
            snippet?.thumbnails
              ? snippet?.thumbnails?.high?.url
              : demoThumbnailUrl
          }
          alt="green iguana"
        />
        <CardContent  sx={{height:"80px"}} >
          <Typography gutterBottom variant="subtitle1" fontWeight="bold">
            {snippet?.title ? snippet?.title?.slice(0, 50) : demoVideoTitle}
          </Typography>
          <Typography
            variant="body2"
            color="gray"
            sx={{ display: "flex", alignItems: "center" }}
          >
            {snippet?.channelTitle ? snippet?.channelTitle : demoChannelTitle}{" "}
            <CheckCircleIcon sx={{ fontSize: "15px", ml: 1 }} />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default VideoCart;
