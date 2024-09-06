import Container from "@/components/container/Container";
import SingleProductBottom from "@/components/productview/SingleProductBottom";
import SingleProductView from "@/components/productview/SingleProductView";
import React from "react";

const ProductView = () => {
  return (
    <Container>
      <SingleProductView />
      <SingleProductBottom />
    </Container>
  );
};

export default ProductView;
