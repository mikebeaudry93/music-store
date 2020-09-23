import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

import { BsFillPersonFill } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { BsChevronDown } from "react-icons/bs";

const Navbar = () => {
  const [dropdownClicked, setDropdownClicked] = React.useState(false);
  const [linkTo, setLinkTo] = React.useState([
    "guitars",
    "bass",
    "drums",
    "amps",
  ]);

  console.log(dropdownClicked);
  return (
    <header className="header">
      <nav>
        <img className="logo" src={logo} alt="logo" />
        <ul>
          <div>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li className="product-link-box">
              <div
                onClick={() => {
                  setDropdownClicked(!dropdownClicked);
                }}
                className="products-link"
                to="/products"
              >
                Products
                <div>
                  <BsChevronDown className="arrow-down" />
                </div>
              </div>
              {dropdownClicked ? (
                <div className="dropdown">
                  {linkTo.map((item) => {
                    return (
                      <Link
                        onClick={() => {
                          setDropdownClicked(!dropdownClicked);
                        }}
                        key={item}
                        to={`/${item}`}
                      >
                        {item}
                      </Link>
                    );
                  })}
                </div>
              ) : (
                ""
              )}
            </li>
            <li>
              <Link>Checkout</Link>
            </li>
          </div>
          <div className="login-cart-box">
            <li>
              <div className="icon-box">
                <BsFillPersonFill className="icon" size="1em" />
              </div>
              <Link>Login</Link>
            </li>
            <li>
              <div className="icon-box">
                <FiShoppingCart className="icon" size="1em" />
              </div>
              <Link to="/cart">Cart</Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
