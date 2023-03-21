const initialValue = {
  loading: false,
  token: "",
  isAuth: false,
  error: false,
};

const authReducer = (state={...initialValue}, action) => {
    console.log('payload', action.payload)
    switch (action.type) {
        case "loginsuccess":
            return {
                ...state,
                token: action.payload,
                loading: true,
                isAuth: true,
            };
    default:
      return state;
  }

};


export default authReducer;
