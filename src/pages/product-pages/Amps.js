import React from "react";
import { ProductContext } from "../../context/products";
import Loading from "../../components/Loading";
import ProductList from "../../components/Products/ProductList";

const Amps = () => {
  const { loading, ampsList } = React.useContext(ProductContext);
  if (loading) {
    return <Loading />;
  }

  return <ProductList title="Amps" products={ampsList} />;
};

export default Amps;
