import React from "react";

// react router dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages

// components
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
