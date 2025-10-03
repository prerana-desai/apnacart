// src/pages/Checkout.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(items);
  }, []);

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert("Order placed successfully ✅");
    localStorage.removeItem("cartItems");
    setCartItems([]);
    navigate("/"); // Redirect to Home page
  };

  const handleRemove = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div style={{ padding: "40px", minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Checkout</h1>
      {cartItems.length === 0 ? (
        <p style={{ textAlign: "center", fontSize: "18px" }}>Your cart is empty.</p>
      ) : (
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                gap: "20px",
                background: "#fff",
                padding: "20px",
                borderRadius: "10px",
                alignItems: "center",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "150px", height: "150px", objectFit: "contain", borderRadius: "8px" }}
              />
              <div style={{ flex: 1 }}>
                <h2 style={{ margin: 0, fontSize: "22px" }}>{item.name}</h2>
                <p style={{ margin: "5px 0", fontSize: "18px" }}>Price: ₹{item.price}</p>
                <p style={{ margin: "5px 0", fontSize: "16px" }}>Quantity: {item.quantity}</p>
              </div>
              <button
                onClick={() => handleRemove(item.id)}
                style={{
                  padding: "10px 15px",
                  background: "#ff4444",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total & Place Order */}
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "10px",
              textAlign: "right",
              fontSize: "20px",
              fontWeight: "bold",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            Total: ₹{totalPrice}
            <br />
            <button
              onClick={handlePlaceOrder}
              style={{
                marginTop: "15px",
                padding: "12px 25px",
                background: "#fb641b",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;
