import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const SearchBar = () => {
  const navigate = useNavigate();
  const [searchTerm, setsearchTerm] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("search/" + searchTerm);
  };
  return (
    <Paper
      component="form"
      onSubmit={submitHandler}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
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
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
