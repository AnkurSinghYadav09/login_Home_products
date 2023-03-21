const initial = {
  loading: false,
  products: [],
  error: false,
};

const productReducer = (state = { ...initial }, action) => {
  switch (action.type) {
    case "productSuccess":
      return { ...state, loading: false, products: action.payload };
    default:
      return state;
  }
};

export { productReducer };
