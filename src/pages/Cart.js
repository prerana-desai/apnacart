import React, { useState, useEffect } from "react";
import CartItem from "./Cartitem";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(items);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map(item => <CartItem key={item.id} item={item} />)
      )}
    </div>
  );
}

export default Cart;
