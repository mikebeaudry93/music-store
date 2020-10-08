import React from "react";

// react router dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Guitars from "./pages/product-pages/Guitars";
import Bass from "./pages/product-pages/Bass";
import Drums from "./pages/product-pages/Drums";
import Amps from "./pages/product-pages/Amps";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";

// components
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <Navbar />
      <Alert />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/guitars">
          <Guitars />
        </Route>
        <Route path="/bass">
          <Bass />
        </Route>
        <Route path="/drums">
          <Drums />
        </Route>
        <Route path="/amps">
          <Amps />
        </Route>
        <Route path="/products/:id" children={<ProductDetails />} />
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/checkout" name="mike">
          <Checkout />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
