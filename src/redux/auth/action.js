import axios from "axios";

const LoginAction = (buttondata ) => {
  
  return (dispatch) => {
    try {
      axios
        .post("https://reqres.in/api/login", {
          email: buttondata.email,
          password: buttondata.password,
        })
        .then((res) => {
          console.log("action se aya");
          dispatch({ type: "loginsuccess", payload: res.data.token });
        });
    } catch (err) {
      console.log(err);
    }
  };
};

export { LoginAction };
