import React from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { ProductContext } from "../context/products";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = React.useContext(ProductContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });
  const { image, title, price, description } = product;
  return (
    <section className="single-product">
      <div className="single-product-img-box">
        <img className="single-product-image" src={image} alt={title} />
      </div>

      <article className="single-product-text-box">
        <h1>{title}</h1>
        <h2>${price}.00</h2>
        <p>{description}</p>
        <button className="btn btn-single-product">ADD TO CART</button>
      </article>
    </section>
  );
};

export default ProductDetails;

// if (products.length === 0) {
//     return <Loading />;
//   } else {
//     const { image, title, price, description } = product;
