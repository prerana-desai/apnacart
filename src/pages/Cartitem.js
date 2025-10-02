import React from "react";
import { useNavigate } from "react-router-dom";

function CartItem({ item }) {
  const navigate = useNavigate();

  const handleRemove = () => {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems = cartItems.filter(cartItem => cartItem.id !== item.id);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    // Remove नंतर product details page वर redirect
    navigate("/product-details", { state: item });
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
      <span>{item.name}</span>
      <button
        onClick={handleRemove}
        style={{
          background: "red",
          color: "#fff",
          border: "none",
          padding: "5px 10px",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;
