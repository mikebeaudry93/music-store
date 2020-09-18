import React from "react";

const Hero = ({ children }) => {
  return (
    <div className="hero">
      <div className="banner">
        <h1>Bring music to life</h1>
        <p>one string at a time</p>
        <br />
        {children}
      </div>
    </div>
  );
};

export default Hero;
