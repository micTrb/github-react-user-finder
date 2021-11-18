import React, {useState} from "react";

import {FormControl, InputAdornment, IconButton, InputLabel, OutlinedInput} from "@mui/material";
import TextInput from "../../atoms/TextInput/TextInput.js";


const Search = () => {

  const [inputValue, setInputValue] = useState("");


  const handleChangeInput = e => {
    setInputValue(e.target.value);
  }


  return (
    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">User name</InputLabel>
      <TextInput
        value={inputValue}
        onInputChange={handleChangeInput}
      />
    </FormControl>
  )
};

export default Search;
