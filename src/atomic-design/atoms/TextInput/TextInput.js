import React, {useState} from "react";
import {IconButton, InputAdornment, OutlinedInput, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search.js";

const TextInput = ({ onInputChange, value }) => {



  const handleChange = (e) => {
    onInputChange(e)
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
            aria-label="toggle password visibility"
            edge="end"
          >
            <SearchIcon/>
          </IconButton>
        </InputAdornment>
      }
    />
  );
};

export default TextInput;
