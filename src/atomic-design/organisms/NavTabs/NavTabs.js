import React, { useState } from "react";
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const NavTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange}>
      <LinkTab label="Landing" href="/" />
      <LinkTab label="Users" href="/users" />
      <LinkTab label="Companies" href="/companies" />
    </Tabs>
  );
}

export default NavTabs;