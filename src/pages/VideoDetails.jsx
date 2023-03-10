import { useState, useEffect } from "react";
import { fetchFromAPI } from "../utils/fetchFromURL.JS";
import { useParams } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import ReactPlayer from "react-player/youtube";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";
import { Videos } from "../components/index";
const VideoDetails = () => {
  const { id } = useParams();
  const [videoInfo, setvideoInfo] = useState({});
  const [relatedVideos, setrelatedVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet&statistic&id=${id}`).then((res) => {
      setvideoInfo(res.items[0]);
    });
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (res) => {
        setrelatedVideos(res.items);
      }
    );
  }, [id]);

  if (!videoInfo?.snippet) return "loading..";
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount, commentCount },
  } = videoInfo;

  return (
    <Box min-height="95vh" p={3} mt={1}>
      <Stack direction={{ xm: "column", md: "row" }} gap={2}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "static", top: "86px" }}>
            <ReactPlayer
              className="react-player"
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
            />
            <Typography variant="h5" color="#fff" p={2} fontWeight="bold">
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              px={2}
              py={1}
              alignItems="center"
              color="#fff"
            >
              <Link to={"/channel/" + channelId}>
                <Typography
                  color="#fff"
                  variant={{ sm: "subtitle1", md: "h6" }}
                >
                  {channelTitle}
                  <CheckCircleIcon
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography sx={{ opacity: 0.7 }} variant="body1">
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography sx={{ opacity: 0.7 }} variant="body1">
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box height="95vh" overflow="auto" sx={{ml:{xs:"0",md:2}}} >
          <Videos videosData={relatedVideos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetails;
