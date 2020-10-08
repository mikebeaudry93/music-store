import React from "react";
import { CartContext } from "../context/cart";
import { UserContext } from "../context/user";
import { useHistory } from "react-router-dom";

import EmptyCart from "../components/Cart/EmptyCart";

// react-stripe-elements
import {
  CardElement,
  StripeProvider,
  Elements,
  injectStripe,
} from "react-stripe-elements";
import submitOrder from "../strapi/submitOrder";

const Checkout = (props) => {
  const { cart, total, clearCart } = React.useContext(CartContext);
  const { user, showAlert, hideAlert, alert } = React.useContext(UserContext);
  const history = useHistory();

  // state values
  const [personalInfo, setPersonalInfo] = React.useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
  });
  const [error, setError] = React.useState("");
  const isEmpty =
    !personalInfo.address ||
    !personalInfo.firstName ||
    !personalInfo.lastName ||
    !personalInfo.city ||
    alert.show;

  const CARD_OPTIONS = {
    hidePostalCode: true,
  };

  async function handleSubmit(e) {
    showAlert({ msg: "submitting order... please wait" });
    e.preventDefault();
    const response = await props.stripe
      .createToken()
      .catch((error) => console.log(error));

    console.log(response);

    const { token } = response;
    if (token) {
      setError("");
      const { id } = token;
      let order = await submitOrder({
        firstName: personalInfo.firstName,
        lastName: personalInfo.lastName,
        address: personalInfo.address,
        city: personalInfo.city,
        total: total,
        items: cart,
        stripeTokenId: id,
        userToken: user.token,
      });
      if (order) {
        showAlert({ msg: "your order is complete" });
        clearCart();
        history.push("/");
        return;
      } else {
        showAlert({
          msg: "there was an error with your order. please try again",
          type: "danger",
        });
      }
    } else {
      hideAlert();
      setError(response.error.message);
    }
  }
  if (cart.length < 1) return <EmptyCart />;
  return (
    <section className="form-section">
      <h2 className="login-section-title">Checkout</h2>
      <form className="form checkout-form">
        <h3>
          Order Total : <span>${total}</span>
        </h3>
        {/* single input */}
        <div className="form-control">
          <label htmlFor="firstName">first name</label>
          <input
            type="text"
            id="firstName"
            value={personalInfo.firstName}
            onChange={(e) => {
              setPersonalInfo({ ...personalInfo, firstName: e.target.value });
            }}
          />
        </div>
        {/* end of single input */}
        {/* single input */}
        <div className="form-control">
          <label htmlFor="firstName">last name</label>
          <input
            type="text"
            id="lastName"
            value={personalInfo.lastName}
            onChange={(e) => {
              setPersonalInfo({ ...personalInfo, lastName: e.target.value });
            }}
          />
        </div>
        {/* end of single input */}
        {/* single input */}
        <div className="form-control">
          <label htmlFor="address">address</label>
          <input
            type="text"
            id="address"
            value={personalInfo.address}
            onChange={(e) => {
              setPersonalInfo({ ...personalInfo, address: e.target.value });
            }}
          />
        </div>
        {/* end of single input */}
        {/* single input */}
        <div className="form-control">
          <label htmlFor="city">city</label>
          <input
            type="text"
            id="city"
            value={personalInfo.city}
            onChange={(e) => {
              setPersonalInfo({ ...personalInfo, city: e.target.value });
            }}
          />
        </div>
        {/* end of single input */}
        {/* card element */}
        <div className="stripe-input">
          <label htmlFor="card-element">Credit or Debit Card</label>
          <p className="stripe-info">
            Test using this credit card: <span>4000 0012 4000 0000</span>
            <br />
            enter any 3 digits for the CVC
          </p>
        </div>
        {/* end of card element */}
        {/* STRIPE ELEMENTS */}
        <CardElement option={CARD_OPTIONS} className="card-element" />
        {/* stripe errors */}
        {error && <p className="form-empty">{error}</p>}
        {/* empty value */}
        {isEmpty ? (
          <p className="form-empty">please fill out all fields</p>
        ) : (
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-single-product btn-block"
          >
            submit
          </button>
        )}
      </form>
    </section>
  );
};

export { Checkout };

const CardForm = injectStripe(Checkout);

const StripeWrapper = () => {
  return (
    <StripeProvider apiKey="pk_test_51HZjmcAxxtSPneStRFwRp6nICnwQNLrgxtnOYUrgIWDNju2QrSiaZ9lnBpp6RFJYwgbde2QaKQGhh6vsM34T0Vya00wJtmSCSU">
      <Elements>
        <CardForm></CardForm>
      </Elements>
    </StripeProvider>
  );
};

export default StripeWrapper;
