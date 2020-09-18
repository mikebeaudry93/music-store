import React from "react";
import Product from "./Product";
import ProductHero from "../ProductHero";

const ProductList = ({ title, products }) => {
  return (
    <section className="section">
      <ProductHero title={title} />
      <div className="products-list-container">
        {products.map((item) => {
          return <Product key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default ProductList;
