import React, {useState} from "react";

import {FormControl, InputAdornment, IconButton, InputLabel, OutlinedInput} from "@mui/material";
import TextSearchInput from "../../atoms/TextSearchInput/TextSearchInput.js";


const Search = () => {

  const [inputValue, setInputValue] = useState("");


  const handleChangeInput = e => {
    setInputValue(e.target.value);
  }

  const handleSearch = (e) => {
    // action set search string+
    e.preventDefault();
    console.log(inputValue);
  }


  return (
    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
      <TextSearchInput
        value={inputValue}
        onInputChange={handleChangeInput}
        onClickSearch={handleSearch}
      />
    </FormControl>
  )
};

export default Search;
