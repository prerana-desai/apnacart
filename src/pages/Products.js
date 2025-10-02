import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const sampleProducts = [
  { id: 1, name: "iPhone 15", price: 1200, description: "Latest iPhone", image: "/pimages/iphone15.jpg" },
  { id: 2, name: "Samsung Galaxy S23", price: 1000, description: "Flagship Samsung phone", image: "/pimages/S23.jpg" },
  { id: 3, name: "MacBook Pro", price: 2000, description: "Powerful laptop", image: "/pimages/Mb.jpeg" },
  { id: 4, name: "Dell Laptop", price: 1500, description: "High performance Dell laptop", image: "/pimages/Dell1.jpg"},
  { id: 5, name: "AirPods Pro", price: 250, description: "Wireless earbuds", image: "/pimages/Pods.jpeg"}, 
];

function Products() {
  const [products] = useState(sampleProducts);
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Our Products</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "10px", width: "240px", textAlign: "center" }}>
            <img src={product.image} alt={product.name} style={{ width: "200px", height: "150px", objectFit: "cover", borderRadius: "8px" }} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button
              style={{ padding: "8px 15px", marginTop: "10px", border: "none", borderRadius: "5px", backgroundColor: "#0077b6", color: "#fff", cursor: "pointer" }}
              onClick={() => navigate(`/products/${product.id}`, { state: product })}
            >
              View Product
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
