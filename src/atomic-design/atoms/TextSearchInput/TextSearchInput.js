import React, {useState} from "react";
import {IconButton, InputAdornment, OutlinedInput, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search.js";

const TextSearchInput = ({ onInputChange, onClickSearch, value }) => {

  const handleChange = (e) => {
    onInputChange(e)
  }

  const handleClick = (e) => {
    onClickSearch(e);
  }


  return (
    <OutlinedInput
      placeholder={"Type a user name here..."}
      onChange={handleChange}
      type="text"
      value={value}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            onClick={handleClick}
          >
            <SearchIcon/>
          </IconButton>
        </InputAdornment>
      }
    />
  );
};


export default TextSearchInput;
