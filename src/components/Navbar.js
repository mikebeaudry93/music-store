import React from "react";
import { Link } from "react-router-dom";
import CartLink from "./Cart/CartLink";
import { UserContext } from "../context/user";
import LoginLink from "./LoginLink";

import logo from "../assets/logo.png";

import { BsFillPersonFill } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";

const Navbar = () => {
  const { user } = React.useContext(UserContext);
  const [dropdownClicked, setDropdownClicked] = React.useState(false);
  const [linkTo] = React.useState(["guitars", "bass", "drums", "amps"]);


  return (
    <header className="header">
      <nav>
        <img className="logo" src={logo} alt="logo" />
        <ul>
          <div>
            <li>
              <Link className="home-about-products" to="/">Home</Link>
            </li>
            <li>
              <Link className="home-about-products" to="/about">About</Link>
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
              <div className="dropdown">
                {linkTo.map((item) => {
                  return (
                    <Link key={item} to={`/${item}`}>
                      {item}
                    </Link>
                  );
                })}
              </div>
            </li>
            {user.token && (
              <li>
                <Link className="checkout" to="/checkout">Checkout</Link>
              </li>
            )}
          </div>
          <div className="login-cart-box">
            <li>
              <div className="icon-box">
                <BsFillPersonFill className="icon" size="1em" />
              </div>
              <LoginLink />
            </li>
            <CartLink />
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

// {dropdownClicked ? (
//   <div className="dropdown">
//     {linkTo.map((item) => {
//       return (
//         <Link
//           onClick={() => {
//             setDropdownClicked(!dropdownClicked);
//           }}
//           key={item}
//           to={`/${item}`}
//         >
//           {item}
//         </Link>
//       );
//     })}
//   </div>
// ) : (
//   ""
// )}
