import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Skeleton from "@mui/material/Skeleton";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { demoVideoTitle, demoChannelTitle } from "../utils/constant";
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
        borderRadius: 2,
      }}
      component={motion.div}
      initial={{ opacity: 0.5 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <CardActionArea>
        <Link to={"/video/" + videoId}>
          {snippet?.thumbnails ? (
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
              loading="lazy"
              image={snippet?.thumbnails?.high?.url}
              alt="green iguana"
            />
          ) : (
            <Skeleton
              variant="rounded"
              sx={{
                width: {
                  xs: "100%",
                  sm: "358px",
                  md: "320px",
                },
                height: 180,
              }}
            />
          )}
        </Link>
        <CardContent height="106px">
          {snippet?.title ? (
            <>
              <Link to={"/video/" + videoId}>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  color="white"
                  fontWeight="bold"
                  noWrap
                >
                  {snippet?.title
                    ? snippet?.title?.slice(0, 50)
                    : demoVideoTitle}
                </Typography>
              </Link>
              <Typography
                variant="body2"
                color="gray"
                sx={{ display: "flex", alignItems: "center" }}
              >
                {snippet?.channelTitle
                  ? snippet?.channelTitle
                  : demoChannelTitle}{" "}
                <CheckCircleIcon sx={{ fontSize: "15px", ml: 1 }} />
              </Typography>
            </>
          ) : (
            <>
              <Skeleton />
              <Skeleton width="60%" />
            </>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default VideoCart;
