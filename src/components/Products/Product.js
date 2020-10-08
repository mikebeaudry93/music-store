import React from "react";
import { Link } from "react-router-dom";

const Product = ({ image, title, id, price }) => {
  const [isProductHover, setIsProductHover] = React.useState(false);

  return (
    <article
      onMouseEnter={() => {
        setIsProductHover(true);
      }}
      onMouseLeave={() => {
        setIsProductHover(false);
      }}
      className="product"
    >
      <div className="image-container">
        <img
          className={`product-img ${isProductHover && "product-img-hover"}`}
          src={image}
          alt={title}
        />
        <Link
          to={`/products/${id}`}
          className={`btn btn-product ${isProductHover && "product-hover"}`}
        >
          DETAILS
        </Link>
      </div>
      <div className="product-footer">
        <p className="product-title">{title}</p>
        <p className="product-price">${price}</p>
      </div>
    </article>
  );
};

export default Product;
