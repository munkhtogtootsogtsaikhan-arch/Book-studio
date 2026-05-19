import React from "react";

export default function Navbar() {
  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  const user = localStorage.getItem("user");

  return (
    <nav
      style={{
        width: "100%",
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        background: "rgba(10,10,30,0.85)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(212,175,55,0.2)"
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div
          style={{
            width: "42px",
            height: "42px",
            border: "2px solid #d4af37",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#d4af37",
            fontSize: "22px"
          }}
        >
          ☸
        </div>

        <h2 style={{ color: "#d4af37", margin: 0 }}>
          NIRVANA
        </h2>
      </div>

      <div
        style={{
          display: "flex",
          gap: "24px",
          alignItems: "center",
          flexWrap: "wrap"
        }}
      >
        <a href="/" style={{ color: "white", textDecoration: "none" }}>
          НҮҮР
        </a>

        <a href="/audio" style={{ color: "white", textDecoration: "none" }}>
          АУДИО НОМ
        </a>

        {!user && (
          <a
            href="/register"
            style={{ color: "white", textDecoration: "none" }}
          >
            БҮРТГҮҮЛЭХ
          </a>
        )}

        {user && (
          <button
            onClick={logout}
            style={{
              padding: "10px 18px",
              border: "1px solid #d4af37",
              background: "transparent",
              color: "#d4af37",
              cursor: "pointer"
            }}
          >
            ГАРАХ
          </button>
        )}
      </div>
    </nav>
  );
}