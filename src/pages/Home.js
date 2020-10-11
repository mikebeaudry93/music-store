import React from "react";
import { Element, scroller } from "react-scroll";

import Hero from "../components/Hero";
import ProductLinks from "../components/ProductLinks";
import FeaturedProducts from "../components/Products/FeaturedProducts";

const Home = () => {
  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -100,
    });
  };

  return (
    <div>
      <Hero>
        <button
          className="btn btn-hero"
          onClick={() => scrollToElement("product-links")}
        >
          products
        </button>
      </Hero>
      <Element name="product-links">
        <ProductLinks />
      </Element>
      <FeaturedProducts />
    </div>
  );
};

export default Home;
