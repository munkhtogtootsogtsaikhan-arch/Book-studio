import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #1a103d 0%, #090014 60%, #05000d 100%)",
        color: "white",
        paddingTop: "120px",
        textAlign: "center"
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "40px 20px"
        }}
      >
        <h1
          style={{
            fontSize: "72px",
            marginBottom: "20px",
            color: "#d4af37",
            letterSpacing: "4px"
          }}
        >
          NIRVANA
        </h1>

        <p
          style={{
            fontSize: "22px",
            lineHeight: "1.8",
            color: "rgba(255,255,255,0.8)",
            marginBottom: "50px"
          }}
        >
          Оюун ухаанаа тэлж,
          дотоод амар амгаланг мэдэр.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap"
          }}
        >
          <Link
            to="/audio"
            style={{
              padding: "18px 40px",
              background: "#d4af37",
              color: "#000",
              textDecoration: "none",
              fontWeight: "bold",
              borderRadius: "10px"
            }}
          >
            АУДИО НОМ
          </Link>

          <Link
            to="/contact"
            style={{
              padding: "18px 40px",
              border: "1px solid #d4af37",
              color: "#d4af37",
              textDecoration: "none",
              borderRadius: "10px"
            }}
          >
            ХОЛБОО БАРИХ
          </Link>
        </div>
      </div>
    </div>
  );
}