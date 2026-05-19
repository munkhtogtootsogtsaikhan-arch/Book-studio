import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { auth } from "../firebase";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      await signOut(auth);
      localStorage.removeItem("user");

      alert("Амжилттай бүртгэгдлээ! Одоо нэвтэрнэ үү.");
      window.location.href = "/login";
    } catch (error) {
      alert("Алдаа: " + error.message);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0b0b1f",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          width: "400px",
          padding: "40px",
          border: "1px solid #d4af37",
          borderRadius: "12px",
          background: "rgba(255,255,255,0.03)"
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>
          Бүртгүүлэх
        </h1>

        <input
          type="email"
          placeholder="Имэйл"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px"
          }}
        />

        <input
          type="password"
          placeholder="Нууц үг"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px"
          }}
        />

        <button
          onClick={handleRegister}
          style={{
            width: "100%",
            padding: "12px",
            background: "#d4af37",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Бүртгүүлэх
        </button>
      </div>
    </div>
  );
}