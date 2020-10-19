import React from "react";
import { ProductContext } from "../../context/products";

import "react-multi-carousel/lib/styles.css";

// import Product from "./Product";
import ProductList from "./ProductList";

const FeaturedProducts = () => {
  const { featured } = React.useContext(ProductContext);
  return (
    <div>
      <ProductList title="Featured" products={featured} />;
    </div>
  );
};

export default FeaturedProducts;

