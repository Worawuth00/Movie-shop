import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";
import "./App.scss";
import CartScreen from "./screens/CartScreen";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/cart" component={CartScreen} />
    </BrowserRouter>
  );
}

export default App;
