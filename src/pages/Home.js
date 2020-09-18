import React from "react";
import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import ProductLinks from "../components/ProductLinks";

const Home = () => {
  return (
    <div>
      <Hero>
        <Link className="btn btn-hero">products</Link>
      </Hero>
      <ProductLinks />
    </div>
  );
};

export default Home;
