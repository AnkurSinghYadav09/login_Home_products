import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from "../redux/auth/action";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "@chakra-ui/react";
import { Text } from '@chakra-ui/react'
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const [Buttondata, setButtonData] = useState(null);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    setButtonData(loginData);
    dispatch(LoginAction(Buttondata));
  };
  // console.log(loginData)
  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  return (
    <div style={{margin:"119px",marginLeft:"420px"}}>
      <Text fontSize='3xl' color='tomato'>Login</Text>
      <form>
        <Input
          htmlSize={29}
          width="auto"
          name="email"
          onChange={(e) =>
            setLoginData({ ...loginData, [e.target.name]: e.target.value })
          }
          type="email"
          placeholder="email"
        />
        <Input
          htmlSize={29}
          width="auto"
          name="password"
          onChange={(e) =>
            setLoginData({ ...loginData, [e.target.name]: e.target.value })
          }
          type="password"
          placeholder="password"
        />
        <Button colorScheme={"green"} onClick={handleLogin}>Login</Button>
      </form>
    </div>
  );
};

export default Login;
