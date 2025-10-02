import React from "react";
import { Link } from "react-router-dom";

const featuredProducts = [
  { id: 1, name: "iPhone 15", price: 1200 },
  { id: 2, name: "MacBook Pro", price: 2000 },
  { id: 3, name: "AirPods Pro", price: 250 },
];

function Home() {
  const styles = {
    hero: { textAlign: "center", padding: "60px 20px", background: "linear-gradient(to right, #0077b6, #00b4d8)", color: "#fff" },
    heroTitle: { fontSize: "36px", marginBottom: "10px", animation: "fadeIn 2s" },
    heroSubtitle: { fontSize: "18px", marginBottom: "20px", opacity: 0.9 },
    heroButton: { padding: "12px 25px", fontSize: "16px", background: "linear-gradient(to right, #ff7f50, #ff4500)", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", boxShadow: "0 5px 15px rgba(0,0,0,0.3)" },
    featuredContainer: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginTop: "40px", padding: "0 20px" },
    card: { border: "1px solid #ccc", borderRadius: "12px", padding: "20px", textAlign: "center", boxShadow: "0 4px 10px rgba(0,0,0,0.1)", transition: "transform 0.2s", cursor: "pointer" },
    cardButton: { padding: "10px 20px", marginTop: "10px", border: "none", borderRadius: "5px", backgroundColor: "#0077b6", color: "#fff", cursor: "pointer" }
  };

  return (
    <div>
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Welcome to ApnaCart</h1>
        <p style={styles.heroSubtitle}>Your one-stop shop for latest gadgets and electronics</p>
        <Link to="/products"><button style={styles.heroButton}>Shop Now</button></Link>
      </div>

      <h2 style={{ textAlign: "center", marginTop: "40px" }}>Featured Products</h2>
      <div style={styles.featuredContainer}>
        {featuredProducts.map((product) => (
          <div key={product.id} style={styles.card} 
               onMouseEnter={e => e.currentTarget.style.transform="scale(1.05)"}
               onMouseLeave={e => e.currentTarget.style.transform="scale(1)"}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <Link to="/products"><button style={styles.cardButton}>View Products</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
