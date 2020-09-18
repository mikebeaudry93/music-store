import React from "react";
import { ProductContext } from "../../context/products";
import Loading from "../../components/Loading";
import ProductList from "../../components/Products/ProductList";

const Guitars = () => {
  const { loading, guitarlist } = React.useContext(ProductContext);
  if (loading) {
    return <Loading />;
  }

  return <ProductList title="Guitars" products={guitarlist} />;
};

export default Guitars;
