import React, {useState} from "react";
import {IconButton, InputAdornment, OutlinedInput, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search.js";
import Button from "../Button/Button.js"

const TextInput = ({ onInputChange, value }) => {



  const handleChange = (e) => {
    onInputChange(e)
  }


  return (
    <OutlinedInput
      id="outlined-adornment-password"
      placeholder={"Type a user name here..."}
      onChange={handleChange}
      type="text"
      value={value}
      endAdornment={
        <InputAdornment position="end">
          <Button variant="contained">
            <SearchIcon/>
          </Button>
        </InputAdornment>
      }
      label="Password"
    />
  );
};

export default TextInput;
