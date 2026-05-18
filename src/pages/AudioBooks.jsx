import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

export default function AudioBooks() {
  const [showPayment, setShowPayment] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setHasAccess(false);
        setLoading(false);
        return;
      }

      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists() && userSnap.data().premiumAccess === true) {
        setHasAccess(true);
      } else {
        setHasAccess(false);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div style={{ color: "white", padding: "150px" }}>
        Уншиж байна...
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top right, #2b0b5f, #080816 55%, #03030a)",
        color: "white",
        padding: "130px 60px",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          color: "#d4af37",
          marginBottom: "40px",
        }}
      >
        Аудио ном
      </h1>

      <div
        style={{
          padding: "28px",
          border: "1px solid rgba(212,175,55,0.45)",
          borderRadius: "20px",
          background: "rgba(255,255,255,0.04)",
          maxWidth: "420px",
          backdropFilter: "blur(10px)",
        }}
      >
        <div
          style={{
            fontSize: "48px",
            marginBottom: "18px",
          }}
        >
          🎧
        </div>

        <h2
          style={{
            color: "#f5d76e",
            marginBottom: "12px",
          }}
        >
          Ошо Очир огтлогч судрын тайлбар
        </h2>

        {hasAccess ? (
          <>
            <p>Таны premium эрх идэвхтэй байна.</p>

            <audio
              controls
              controlsList="nodownload"
              style={{
                width: "100%",
                marginTop: "20px",
              }}
            >
              <source
                src="/audio/Ошо Очир огтлогч судрын тайлбар.mp3"
                type="audio/mpeg"
              />
            </audio>
          </>
        ) : (
          <>
            <p>
              Төлбөр баталгаажсаны дараа аудио тоглуулагч
              нээгдэнэ.
            </p>

            <button
              onClick={() => setShowPayment(true)}
              style={{
                width: "100%",
                marginTop: "18px",
                padding: "13px",
                border: "none",
                borderRadius: "10px",
                background:
                  "linear-gradient(90deg, #d4af37, #f7df72)",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Сонсох эрх авах
            </button>
          </>
        )}
      </div>

      {showPayment && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              width: "430px",
              padding: "35px",
              borderRadius: "20px",
              background: "#111128",
              border: "1px solid #d4af37",
              textAlign: "center",
              boxShadow: "0 0 30px rgba(212,175,55,0.25)",
            }}
          >
            <h2
              style={{
                color: "#d4af37",
                marginBottom: "20px",
              }}
            >
              Төлбөрийн мэдээлэл
            </h2>

            <p>
              Үнэ: <b>15,000₮</b>
            </p>

            <p>
              Банк: <b>Хаан Банк</b>
            </p>

            <p>
              Данс: <b>930005005090520696</b>
            </p>

            <p>
              Нэр: <b>Ц. Мөнхтогтоо</b>
            </p>

            <a
              href="https://t.me/NIRVANAREADING"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
              }}
            >
              <button
                style={{
                  width: "100%",
                  marginTop: "20px",
                  padding: "13px",
                  border: "none",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(90deg, #d4af37, #f7df72)",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Төлбөрийн баримт илгээх
              </button>
            </a>

            <button
              onClick={() => setShowPayment(false)}
              style={{
                marginTop: "18px",
                padding: "10px 18px",
                background: "transparent",
                color: "#d4af37",
                border: "1px solid #d4af37",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              Хаах
            </button>
          </div>
        </div>
      )}
    </div>
  );
}