import React from "react";


const Button = ({ children, variant }) => {


  return (
    <Button
      variant={variant}
    >
      {children}
    </Button>
  )
};

export default Button;
