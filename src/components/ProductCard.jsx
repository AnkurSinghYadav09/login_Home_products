import { Button } from "@chakra-ui/react";
import React from "react";
import  "./ProductCard.css"

const ProductCard = (item) => {
  const data = item.item;
  // console.log(item.item);
  return (
    <div className="mainDiv">
        <img className="image" src={data.img} alt="" />
        <h6>{data.id}</h6>
      <h3>{data.brand}</h3>
      <h5>{data.category}</h5>
      <h1>₹{data.price}</h1>
      <Button colorScheme={"facebook"}>ADD to CART</Button>
    </div>
  );
};

export default ProductCard;
