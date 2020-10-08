import React from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { CartContext } from "../context/cart";
import { ProductContext } from "../context/products";

const ProductDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const { products } = React.useContext(ProductContext);
  const { addToCart } = React.useContext(CartContext);

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
        <h2>${price}</h2>
        <p>{description}</p>
        <button
          className="btn btn-single-product"
          onClick={() => {
            addToCart(product);
            history.push("/cart");
          }}
        >
          ADD TO CART
        </button>
      </article>
    </section>
  );
};

export default ProductDetails;
