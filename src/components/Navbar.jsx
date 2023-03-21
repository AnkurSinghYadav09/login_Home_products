import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, ButtonGroup } from '@chakra-ui/react'
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div style={{ marginLeft: "940px" }}>
      <Button colorScheme='blue' onClick={() => navigate("/")}>
        <h2>HOME</h2>
      </Button>
      <Button colorScheme='red' onClick={() => navigate("/login")}>
        <h2>LOGIN</h2>
      </Button>
    </div>
  );
};

export default Navbar;
