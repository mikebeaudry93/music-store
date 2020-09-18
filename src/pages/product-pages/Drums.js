import React from "react";
import { ProductContext } from "../../context/products";
import Loading from "../../components/Loading";
import ProductList from "../../components/Products/ProductList";

const Drums = () => {
  const { loading, drumsList } = React.useContext(ProductContext);
  if (loading) {
    return <Loading />;
  }

  return <ProductList title="Drums" products={drumsList} />;
};

export default Drums;
