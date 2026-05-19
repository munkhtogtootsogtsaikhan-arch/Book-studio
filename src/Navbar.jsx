import React from "react";

export default function Navbar() {
  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  const user = localStorage.getItem("user");

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <div className="circle">☸</div>
          <h2>NIRVANA</h2>
        </div>

        <div className="links">
          <a href="/">НҮҮР</a>
          <a href="/audio">АУДИО НОМ</a>

          {!user && (
            <>
              <a href="/login">НЭВТРЭХ</a>
              <a href="/register">БҮРТГҮҮЛЭХ</a>
            </>
          )}

          {user && (
            <button onClick={logout}>
              ГАРАХ
            </button>
          )}
        </div>
      </nav>

      <style>{`
        .navbar{
          width:100%;
          padding:16px 20px;
          display:flex;
          justify-content:space-between;
          align-items:center;
          position:fixed;
          top:0;
          left:0;
          z-index:1000;
          background:rgba(10,10,30,0.9);
          backdrop-filter:blur(10px);
          border-bottom:1px solid rgba(212,175,55,0.2);
          box-sizing:border-box;
        }

        .logo{
          display:flex;
          align-items:center;
          gap:10px;
        }

        .circle{
          width:40px;
          height:40px;
          border:2px solid #d4af37;
          border-radius:50%;
          display:flex;
          align-items:center;
          justify-content:center;
          color:#d4af37;
          font-size:20px;
        }

        .logo h2{
          color:#d4af37;
          margin:0;
          font-size:32px;
          letter-spacing:2px;
        }

        .links{
          display:flex;
          gap:20px;
          align-items:center;
          flex-wrap:wrap;
        }

        .links a{
          color:white;
          text-decoration:none;
          font-size:16px;
        }

        .links button{
          padding:8px 14px;
          border:1px solid #d4af37;
          background:transparent;
          color:#d4af37;
          cursor:pointer;
        }

        @media(max-width:768px){

          .navbar{
            flex-direction:column;
            gap:12px;
            padding:14px;
          }

          .logo h2{
            font-size:22px;
          }

          .links{
            width:100%;
            justify-content:center;
            gap:14px;
          }

          .links a{
            font-size:14px;
          }

        }
      `}</style>
    </>
  );
}