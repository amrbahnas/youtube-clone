import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCart from "./VideoCart";
import ChannelCart from "./ChannelCart";
const Videos = ({ videosData, direction }) => {
  return (
    <Stack
      direction={direction || "row"}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        justifyContent: "center",
      }}
    >
      {videosData?.map((item) =>
        item.id.channelId ? (
          <ChannelCart channelDetails={item} key={item.id.channelId} />
        ) : (
          <VideoCart video={item} key={item.id.channelId} />
        )
      )}
    </Stack>
  );
};

export default Videos;
