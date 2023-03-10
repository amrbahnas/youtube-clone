import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";
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
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        background: "#1e1e1e",
        color: "#fff",
      }}
    >
      <CardActionArea>
        <Link to={"/video/" + videoId}>
          <CardMedia
            sx={{
              width: {
                xs: "100%",
                sm: "358px",
                md: "320px",
              },
              height: 180,
            }}
            component="img"
            image={
              snippet?.thumbnails
                ? snippet?.thumbnails?.high?.url
                : demoThumbnailUrl
            }
            alt="green iguana"
          />
        </Link>
        <CardContent height="106px">
          <Link to={"/video/" + videoId}>
            <Typography
              gutterBottom
              variant="subtitle1"
              color="white"
              fontWeight="bold"
              noWrap
            >
              {snippet?.title ? snippet?.title?.slice(0, 50) : demoVideoTitle}
            </Typography>
          </Link>
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
