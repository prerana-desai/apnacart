import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // firebase config

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match ❌");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup Successful ✅");
    } catch (err) {
      setError("Signup Failed. Try Again ❌");
    }
  };

  const styles = {
    container: { display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh", background: "linear-gradient(to right, #00b4d8, #0077b6)", padding: "20px" },
    card: { backgroundColor: "#fff", padding: "40px", borderRadius: "12px", width: "380px", boxShadow: "0 8px 20px rgba(0,0,0,0.2)", textAlign: "center" },
    title: { marginBottom: "20px", color: "#0077b6", fontSize: "24px" },
    input: { width: "100%", padding: "12px", margin: "10px 0", borderRadius: "6px", border: "1px solid #ccc", outline: "none", transition: "0.2s" },
    button: { width: "100%", padding: "12px", marginTop: "15px", backgroundColor: "#0077b6", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "bold", transition: "0.2s" },
    error: { color: "red", marginTop: "10px" }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create Account</h2>
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
            onFocus={(e) => e.currentTarget.style.borderColor = "#0077b6"}
            onBlur={(e) => e.currentTarget.style.borderColor = "#ccc"}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
            onFocus={(e) => e.currentTarget.style.borderColor = "#0077b6"}
            onBlur={(e) => e.currentTarget.style.borderColor = "#ccc"}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={styles.input}
            onFocus={(e) => e.currentTarget.style.borderColor = "#0077b6"}
            onBlur={(e) => e.currentTarget.style.borderColor = "#ccc"}
          />
          {error && <p style={styles.error}>{error}</p>}
          <button
            type="submit"
            style={styles.button}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#005f8a"}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#0077b6"}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
