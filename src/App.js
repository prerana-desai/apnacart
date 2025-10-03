// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />              {/* Home Page */}
        <Route path="/products" element={<Products />} /> {/* Products List */}
        <Route path="/products/:id" element={<ProductDetails />} /> {/* Product Details */}
        <Route path="/cart" element={<Cart />} />         {/* Cart Page */}
        <Route path="/checkout" element={<Checkout />} /> {/* Checkout Page */}
        <Route path="/login" element={<Login />} />       {/* Login Page */}
        <Route path="/signup" element={<Signup />} />     {/* Signup Page */}
      </Routes>
    </Router>
  );
}

export default App;
