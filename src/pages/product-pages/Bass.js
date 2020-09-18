import React from "react";
import { ProductContext } from "../../context/products";
import Loading from "../../components/Loading";
import ProductList from "../../components/Products/ProductList";

const Bass = () => {
  const { loading, bassList } = React.useContext(ProductContext);
  if (loading) {
    return <Loading />;
  }

  return <ProductList title="Bass Guitars" products={bassList} />;
};

export default Bass;
