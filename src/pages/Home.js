import React from "react";
import { Link } from "react-router-dom";
import { Element, scroller } from "react-scroll";

import Hero from "../components/Hero";
import ProductLinks from "../components/ProductLinks";

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
        <Link
          className="btn btn-hero"
          onClick={() => scrollToElement("product-links")}
        >
          products
        </Link>
      </Hero>
      <Element name="product-links">
        <ProductLinks />
      </Element>
    </div>
  );
};

export default Home;
