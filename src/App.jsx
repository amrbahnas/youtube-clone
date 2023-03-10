import { useState } from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/system";
import {
  VideoDetails,
  ChannelDetails,
  SearchFeed,
  Feed,
} from "./pages/index.jsx";
import { NavBar } from "./components/index.jsx";
function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Feed />,
  //   },
  //   {
  //     path: "/video/:id",
  //     element: <VideoDetails />,
  //   },
  //   {
  //     path: "/channel/:id",
  //     element: <ChannelDetails />,
  //   },
  //   {
  //     path: "/search/:searchTerm",
  //     element: <SearchFeed />,
  //   },
  // ]);

  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <NavBar />
        {/* <RouterProvider router={router} /> */}
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetails />} />
          <Route path="/channel/:id" element={<ChannelDetails />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
