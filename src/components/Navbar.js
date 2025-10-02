import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"10px 20px", backgroundColor:"#0077b6", color:"#fff", position:"sticky", top:0 }}>
      <Link to="/" style={{ color:"#fff", fontWeight:"bold", fontSize:"24px", textDecoration:"none" }}>ApnaCart</Link>
      {!isMobile ? (
        <div style={{ display:"flex", gap:"20px" }}>
          <Link to="/" style={{ color:"#fff" }}>Home</Link>
          <Link to="/products" style={{ color:"#fff" }}>Products</Link>
          <Link to="/cart" style={{ color:"#fff" }}>Cart</Link>
          <Link to="/login" style={{ color:"#fff" }}>Login</Link>
          <Link to="/signup" style={{ color:"#fff" }}>Signup</Link>
        </div>
      ) : (
        <div>
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ fontSize:"24px", background:"none", border:"none", color:"#fff" }}>☰</button>
          {menuOpen && (
            <div style={{ display:"flex", flexDirection:"column", gap:"10px", marginTop:"10px", backgroundColor:"#0077b6", padding:"10px" }}>
              <Link to="/" style={{ color:"#fff" }} onClick={()=>setMenuOpen(false)}>Home</Link>
              <Link to="/products" style={{ color:"#fff" }} onClick={()=>setMenuOpen(false)}>Products</Link>
              <Link to="/cart" style={{ color:"#fff" }} onClick={()=>setMenuOpen(false)}>Cart</Link>
              <Link to="/login" style={{ color:"#fff" }} onClick={()=>setMenuOpen(false)}>Login</Link>
              <Link to="/signup" style={{ color:"#fff" }} onClick={()=>setMenuOpen(false)}>Signup</Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
