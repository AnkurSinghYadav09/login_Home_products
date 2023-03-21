import axios from "axios";

const productAction = (sort, filter) => {
  let url =
    "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products?";
  if (sort) {
    console.log(sort);
    url += `&sort=price&order=${sort}`;
  }
  if (filter) {
    url += `&filter=${filter}`;
  }

  console.log(url);
  return (dispatch) => {
    axios.get(url).then((res) => {
      dispatch({
        type: "productSuccess",
        payload: { products: res.data.data },
      });
      // console.log(res.data.data);
    });
  };
};

export { productAction };
