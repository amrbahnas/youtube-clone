import React, { useState, useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { SideBar, Videos } from "../components/index";
import { fetchFromAPI } from "../utils/fetchFromURL.JS";
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videosData, setvideosData] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setvideosData(data.items) 
    );
  }, [selectedCategory]);
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "90vh" },
          borderRight: "1px solid #3d3d3d",
          px: { xs: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          @copy right 2023
        </Typography>
      </Box>
      <Box
        p={2}
        sx={{
          overflowY: "auto",
          height: "90vh",
          flex: 2,
        }}
      >
        <Typography color="#fff" variant="h4" mb={3}>
          {selectedCategory}{" "}
          <span style={{ color: "#FC1503", fontWeight: "bold" }}>videos</span>
        </Typography>
        <Videos videosData={videosData} />
      </Box>
    </Stack>
  );
};

export default Feed;
