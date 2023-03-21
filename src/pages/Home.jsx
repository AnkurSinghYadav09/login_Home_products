import { Box, Button, Grid, GridItem, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { productAction } from "../redux/products/action";
import "./Home.css";

const Home = () => {
  const productsData = useSelector(
    (state) => state.productReducer.products.products
  );
  const token = useSelector((state) => state.authReducer.token);
  const dispatch = useDispatch();
  const [sort, setSort] = useState(null);
  const [filter, setFilter] = useState(null);
  console.log(sort);
  useEffect(() => {
    dispatch(productAction(sort, filter));
  }, [sort, filter]);

  return (
    <>
      <Button>
        <h1>Token</h1>:{token}
      </Button>
      <div>
        <br />
        <Button colorScheme={"teal"} onClick={() => setSort("asc")}>
          asc
        </Button>

        <Button colorScheme={"pink"} onClick={() => setSort("desc")}>
          DES
        </Button>
      </div>
      <br />
      <div>
        <Button colorScheme={"yellow"} onClick={() => setFilter("Laptop")}>
          Laptop
        </Button>
        <Button colorScheme={"green"} onClick={() => setFilter("Mobile")}>
          Mobile
        </Button>
        <Button colorScheme={"orange"} onClick={() => setFilter("Head_Phones")}>
          Head_Phones
        </Button>
        <Button colorScheme={"blue"} onClick={() => setFilter("Speakers")}>
          Speakers
        </Button>
        <Button colorScheme={"purple"} onClick={() => setFilter("Smart_TV")}>
          Smart_TV
        </Button>
      </div>
      <br />

      <h2>Home</h2>
      <div>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          gap={6}
          w={"100%"}
        >
          {productsData?.map((item, i) => {
            return (
              <GridItem key={i}>
                <ProductCard item={item} />
              </GridItem>
            );
          })}
        </Grid>
      </div>
    </>
  );
};

export default Home;
