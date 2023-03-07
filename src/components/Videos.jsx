import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCart from "./VideoCart";
import ChannelCart from "./ChannelCart";
const Videos = ({ videosData }) => {
  console.log(videosData);
  return (
    <Stack>
      <Box  sx={{ display: "flex", flexWrap: "wrap", gap: "10px",justifyContent:"center" }}>
        {videosData?.map((item) =>
          item.id.channelId ? <ChannelCart channelDetails={item} />: <VideoCart video={item} />
        )}
      </Box>
    </Stack>
  );
};

export default Videos;
