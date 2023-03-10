import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const SearchBar = () => {
  const navigate = useNavigate();
  const [searchTerm, setsearchTerm] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (searchTerm) navigate("search/" + searchTerm);
  };
  return (
    <Paper
      component="form"
      onSubmit={submitHandler}
      sx={{
        borderRadius: 20,
        border: "1px solid #303030",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
        backgroundColor: "transparent",
        cursor: "pointer"
      }}
    >
      <input
        type="text"
        name=""
        id=""
        value={searchTerm}
        placeholder="search..."
        className="search-bar"
        onChange={(e) => setsearchTerm(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "#fff" }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
