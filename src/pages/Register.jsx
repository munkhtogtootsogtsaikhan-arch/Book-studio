
import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { auth } from "../firebase";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const enterSite = async () => {
    try {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (err) {
        if (err.code === "auth/email-already-in-use") {
          await signInWithEmailAndPassword(auth, email, password);
        } else {
          throw err;
        }
      }

      localStorage.setItem("user", email);
      window.location.href = "/audio";
    } catch (error) {
      alert("Алдаа: " + error.message);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0b0b1f",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "120px 20px"
    }}>
      <div style={{
        width: "100%",
        maxWidth: "420px",
        padding: "36px",
        border: "1px solid #d4af37",
        borderRadius: "14px",
        background: "rgba(255,255,255,0.03)"
      }}>
        <h1 style={{ marginBottom: "24px" }}>Орох / Бүртгүүлэх</h1>

        <input
          type="email"
          placeholder="Имэйл"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: "14px", marginBottom: "16px", boxSizing: "border-box" }}
        />

        <input
          type="password"
          placeholder="Нууц үг"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: "14px", marginBottom: "22px", boxSizing: "border-box" }}
        />

        <button
          onClick={enterSite}
          style={{
            width: "100%",
            padding: "14px",
            background: "#d4af37",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Үргэлжлүүлэх
        </button>
      </div>
    </div>
  );
}