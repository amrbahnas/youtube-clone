import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";
import { demoThumbnailUrl, demoChannelTitle } from "../utils/constant";
const ChannelCart = ({ channelDetails }) => {
  console.log(channelDetails);
  return (
    <Card
      sx={{
        width: { xs: "100%", md: 300 },
        background: "transparent",
        color: "#fff",
        boxShadow: "none",
      }}
    >
      <Link to={"/channel/" + channelDetails?.id?.channelId}>
        <CardMedia
          component="img"
          height="200px"
          sx={{ borderRadius: "50%", width: "200px", mx: "auto", mt: 2 }}
          image={
            channelDetails?.snippet?.thumbnails
              ? channelDetails?.snippet?.thumbnails?.high?.url
              : demoThumbnailUrl
          }
          alt="green iguana"
        />
      </Link>
      <CardContent sx={{ height: "60px", textAlign: "center" }}>
        <Link to={"/channel/" + channelDetails?.id?.channelId}>
          <Typography
            variant="subtitle1"
            color="white"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {channelDetails?.snippet?.channelTitle
              ? channelDetails?.snippet?.channelTitle
              : demoChannelTitle}{" "}
            <CheckCircleIcon sx={{ fontSize: "15px", ml: 1 }} />
          </Typography>
          <Typography
            variant="subtitle2"
            color="gray"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {channelDetails?.statistics?.subscriberCount} Subscribers
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ChannelCart;
