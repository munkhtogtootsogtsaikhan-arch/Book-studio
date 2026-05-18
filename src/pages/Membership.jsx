import React from "react";

export default function Membership() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top right, #2b0b5f, #080816 55%, #03030a)",
        color: "white",
        padding: "130px 60px"
      }}
    >
      <h1 style={{ fontSize: "48px", color: "#d4af37" }}>Гишүүнчлэл</h1>

      <p style={{ maxWidth: "650px", opacity: 0.85, marginBottom: "40px" }}>
        Premium гишүүнчлэлээр аудио ном, бясалгал, дотоод хөгжлийн контентуудыг сонсоно.
      </p>

      <div
        style={{
          maxWidth: "430px",
          padding: "30px",
          border: "1px solid rgba(212,175,55,0.45)",
          borderRadius: "20px",
          background: "rgba(255,255,255,0.04)"
        }}
      >
        <h2 style={{ color: "#f5d76e" }}>Premium Access</h2>
        <h3 style={{ fontSize: "34px" }}>25,000₮</h3>

        <p>✅ Premium аудио ном</p>
        <p>✅ Гүн төвлөрлийн audio lessons</p>
        <p>✅ Гишүүдийн тусгай контент</p>

        <button
          style={{
            width: "100%",
            marginTop: "20px",
            padding: "13px",
            border: "none",
            borderRadius: "10px",
            background: "linear-gradient(90deg, #d4af37, #f7df72)",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Гишүүн болох
        </button>
      </div>
    </div>
  );
}