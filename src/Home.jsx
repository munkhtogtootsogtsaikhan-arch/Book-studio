import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #1b103d 0%, #090014 60%, #05000d 100%)",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px"
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "72px",
            color: "#d4af37",
            marginBottom: "20px",
            letterSpacing: "4px"
          }}
        >
          NIRVANA
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "rgba(255,255,255,0.75)",
            marginBottom: "50px",
            lineHeight: "1.8"
          }}
        >
          Оюун ухаанаа тэлж,
          дотоод амар амгаланг мэдэр.
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
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
              borderRadius: "10px",
              fontWeight: "bold"
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