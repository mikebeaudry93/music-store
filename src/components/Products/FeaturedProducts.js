import React from "react";
import { ProductContext } from "../../context/products";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Product from "./Product";

const FeaturedProducts = () => {
  const responsive = {
    largeDesktop: {
      breakpoint: { max: 3000, min: 1439 },
      items: 3,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 1438, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  const { featured } = React.useContext(ProductContext);
  return (
    <div>
      <h2 className="cart-section-title featured-title">featured products</h2>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
      >
        {featured.map((item) => {
          return <Product key={item.id} {...item} />;
        })}
      </Carousel>
    </div>
  );
};

export default FeaturedProducts;

// <ProductList title="featured products" products={featured} />
