import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ProductDetails() {
  const { state: product } = useLocation();
  const navigate = useNavigate();

  if (!product)
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Product not found
      </h2>
    );

  const handleAddToCart = () => {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const index = cartItems.findIndex((item) => item.id === product.id);
    if (index !== -1) cartItems[index].quantity += 1;
    else cartItems.push({ ...product, quantity: 1 });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    navigate("/cart");
  };

  const handleBuyNow = () =>
    alert(`Proceed to buy: ${product.name} - ₹${product.price}`);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "50px",
        marginTop: "50px",
        padding: "20px",
        flexWrap: "wrap",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div
          style={{
            width: "450px",
            height: "550px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              transition: "transform 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.3)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>
        <div style={{ marginTop: "25px", display: "flex", gap: "15px" }}>
          <button
            style={{
              padding: "12px 30px",
              background: "#ff9f00",
              color: "#fff",
              fontSize: "16px",
              fontWeight: "bold",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          <button
            style={{
              padding: "12px 30px",
              background: "#fb641b",
              color: "#fff",
              fontSize: "16px",
              fontWeight: "bold",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={handleBuyNow}
          >
            Buy Now
          </button>
        </div>
      </div>
      <div
        style={{
          flex: "1",
          textAlign: "left",
          maxWidth: "500px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>{product.name}</h1>
        <h2 style={{ color: "#388e3c", fontSize: "26px", marginBottom: "15px" }}>
          Special Price: ₹{product.price}
        </h2>
        <div style={{ marginBottom: "20px" }}>
          <span style={{ color: "#ffbf00", fontSize: "20px" }}>⭐ ⭐ ⭐ ⭐ ☆</span>
          <span style={{ marginLeft: "10px", fontSize: "16px", color: "#555" }}>
            4.0 | 200 ratings
          </span>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>Offers</h3>
          <ul style={{ fontSize: "16px", lineHeight: "1.6", paddingLeft: "20px" }}>
            <li>10% Instant Discount on XYZ Bank Cards</li>
            <li>Buy 2 Get 1 Free on Accessories</li>
            <li>Free Delivery within 3-5 days</li>
          </ul>
        </div>
        <div>
          <h3 style={{ fontSize: "22px", marginBottom: "10px" }}>Product Description</h3>
          <p style={{ fontSize: "18px", lineHeight: "1.8" }}>{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
