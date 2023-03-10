import React, { useState, useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { SideBar, Videos } from "../components/index";
import { fetchFromAPI } from "../utils/fetchFromURL.JS";
import { useParams } from "react-router-dom";
const SearchFeed = () => {
const { searchTerm } = useParams();
    const [videosData, setvideosData] = useState([]);
    useEffect(() => {
      fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
        setvideosData(data.items)
      );
    }, [searchTerm]);
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        p={2}
        sx={{
          overflowY: "auto",
          height: "90vh",
          flex: 2,
        }}
      >
        <Typography color="#fff" variant="h4" mb={3}>
          {searchTerm}{" "}
          <span style={{ color: "#FC1503", fontWeight: "bold" }}>videos</span>
        </Typography>
        <Videos videosData={videosData} />
      </Box>
    </Stack>
  );
};

export default SearchFeed;
