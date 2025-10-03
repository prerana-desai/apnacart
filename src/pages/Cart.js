// src/pages/Cart.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedItems);
  }, []);

  const handleRemove = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  const handleQuantityChange = (id, delta) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    });
    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  if (!cartItems.length) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Your Cart is Empty</h2>;
  }

  return (
    <div style={{ padding: "30px", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ color: "#0077b6", textAlign: "center", marginBottom: "30px" }}>Your Cart</h1>
      {cartItems.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "15px",
            marginBottom: "15px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
          }}
        >
          {/* Left: Image */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <img src={item.image} alt={item.name} style={{ width: "120px", height: "100px", objectFit: "cover", borderRadius: "8px" }} />
            <div>
              <h3 style={{ margin: "0 0 10px 0" }}>{item.name}</h3>
              <p style={{ margin: "0", fontWeight: "bold" }}>₹{item.price}</p>
            </div>
          </div>

          {/* Quantity Controls */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button
              style={{ padding: "5px 10px", border: "none", background: "#0077b6", color: "#fff", borderRadius: "5px", cursor: "pointer" }}
              onClick={() => handleQuantityChange(item.id, -1)}
            >
              -
            </button>
            <span style={{ minWidth: "20px", textAlign: "center" }}>{item.quantity}</span>
            <button
              style={{ padding: "5px 10px", border: "none", background: "#0077b6", color: "#fff", borderRadius: "5px", cursor: "pointer" }}
              onClick={() => handleQuantityChange(item.id, 1)}
            >
              +
            </button>
          </div>

          {/* Remove & Buy Now */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <button
              style={{ padding: "8px 15px", border: "none", borderRadius: "5px", background: "#ff4d4d", color: "#fff", cursor: "pointer" }}
              onClick={() => handleRemove(item.id)}
            >
              Remove
            </button>
            <button
              style={{ padding: "8px 15px", border: "none", borderRadius: "5px", background: "#fb641b", color: "#fff", cursor: "pointer" }}
              onClick={handleCheckout}
            >
              Buy Now
            </button>
          </div>
        </div>
      ))}

      {/* Total Price */}
      <h2 style={{ textAlign: "right", marginTop: "30px", fontSize: "24px" }}>
        Total: ₹{cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)}
      </h2>
    </div>
  );
}

export default Cart;
