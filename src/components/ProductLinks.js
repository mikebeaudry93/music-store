import React from "react";
import { Link } from "react-router-dom";

const ProductLinks = () => {
  const [bassHover, setBassHover] = React.useState(false);
  const [drumHover, setDrumHover] = React.useState(false);
  const [ampHover, setAmpHover] = React.useState(false);
  const [guitarHover, setGuitarHover] = React.useState(false);

  return (
    <section className="product-links">
      <Link
        to="/bass"
        className="bass vertical-box product-box"
        onMouseEnter={() => setBassHover(true)}
        onMouseLeave={() => {
          setBassHover(false);
        }}
      >
        <div className={`content ${bassHover && "content-hover"}`}>bass</div>
      </Link>
      <div className="middle-section vertical-box">
        <Link
          to="/drums"
          className="drums middle-box product-box"
          onMouseEnter={() => setDrumHover(true)}
          onMouseLeave={() => {
            setDrumHover(false);
          }}
        >
          <div className={`content ${drumHover && "content-hover"}`}>drums</div>
        </Link>
        <Link
          to="/amps"
          className="amps middle-box product-box"
          onMouseEnter={() => setAmpHover(true)}
          onMouseLeave={() => {
            setAmpHover(false);
          }}
        >
          <div className={`content ${ampHover && "content-hover"}`}>amps</div>
        </Link>
      </div>
      <Link
        to="/guitars"
        className="guitars vertical-box product-box"
        onMouseEnter={() => setGuitarHover(true)}
        onMouseLeave={() => {
          setGuitarHover(false);
        }}
      >
        <div className={`content ${guitarHover && "content-hover"}`}>
          guitars
        </div>
      </Link>
    </section>
  );
};

export default ProductLinks;
