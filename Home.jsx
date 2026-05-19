import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/nirvana.css";

const TELEGRAM_URL = "https://t.me/NIRVANAREADING";

const categories = [
  {
    id: "meditation",
    title: "Бясалгал",
    sub: "Дотоод нам гүм",
    desc: "Сэтгэлийн чимээг намжаах, өөртэйгөө уулзах гүн бясалгалын аяллууд.",
    icon: "✧",
  },
  {
    id: "growth",
    title: "Дотоод хөгжил",
    sub: "Ухамсрын тэлэлт",
    desc: "Сэтгэхүйн загвар, дадал, итгэл үнэмшлээ шинэчлэх ухаалаг хичээлүүд.",
    icon: "❋",
  },
  {
    id: "spiritual",
    title: "Сүнслэг контент",
    sub: "Гүн ухааны өвөрмөц аялал",
    desc: "Эртний болон орчин үеийн мэргэн ухаан, сүнслэг тэжээл агуулсан түүврүүд.",
    icon: "✺",
  },
  {
    id: "audiobook",
    title: "Аудио номын сан",
    sub: "Чанартай дуу хураалт",
    desc: "Хэлэхтэй хэлсэн, чанартай орчуулга бүхий сонгомол аудио номын цуглуулга.",
    icon: "❖",
  },
];

const pillars = [
  {
    no: "01",
    title: "Анхаарал ба амьсгал",
    body: "Өдөр тутмын завгүй амьдралын дунд анхаарлаа эргэн төвлөрүүлэх, амьсгалын ритмээр дамжуулан өөрийн биеэ дахин олох дадлууд.",
  },
  {
    no: "02",
    title: "Сэтгэлийн тунгалаг",
    body: "Бодлыг ангилж, шаардлагагүй чимээг шүүж, сэтгэлийн тунгалаг байдлыг сэргээх нарийн чиглүүлгүүд.",
  },
  {
    no: "03",
    title: "Ухамсрын тэлэлт",
    body: "Өөрийн дотоод ертөнцийг гүнзгийрүүлэн судалж, амьдралын утга учрыг шинэ өнцгөөс олж харах урт хугацааны хөтөч.",
  },
];

export default function Home() {
  const navigate = useNavigate();
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("is-in");
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".nv-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const goAudio = () => navigate("/audiobooks");
  const goTelegram = () => window.open(TELEGRAM_URL, "_blank", "noopener,noreferrer");

  return (
    <main className="nv-home">
      <style>{`
        .nv-home { padding-top: 6rem; }

        /* === HERO === */
        .nv-hero {
          position: relative;
          min-height: calc(100vh - 6rem);
          display: flex;
          align-items: center;
          padding: 3rem 0 5rem;
          overflow: hidden;
        }
        .nv-hero-orb {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: min(700px, 90vw);
          aspect-ratio: 1;
          background:
            radial-gradient(circle at 35% 35%, rgba(232, 200, 105, 0.18), transparent 55%),
            radial-gradient(circle at 65% 60%, rgba(168, 134, 42, 0.14), transparent 60%);
          filter: blur(40px);
          pointer-events: none;
          opacity: 0.9;
          animation: nv-float 12s ease-in-out infinite;
        }
        .nv-hero-inner {
          position: relative;
          display: grid;
          gap: 3rem;
          grid-template-columns: 1fr;
          align-items: center;
        }
        @media (min-width: 980px) {
          .nv-hero-inner { grid-template-columns: 1.15fr 1fr; gap: 4rem; }
        }
        .nv-hero h1 {
          font-size: clamp(2.6rem, 7vw, 5.5rem);
          margin-bottom: 1.5rem;
        }
        .nv-hero h1 .line {
          display: block;
          opacity: 0;
          animation: nv-fade-up 1s var(--nv-ease-out) both;
        }
        .nv-hero h1 .line:nth-child(1) { animation-delay: 0.15s; }
        .nv-hero h1 .line:nth-child(2) { animation-delay: 0.3s; }
        .nv-hero h1 .line:nth-child(3) { animation-delay: 0.45s; }
        .nv-hero-lead {
          font-size: clamp(0.95rem, 1.5vw, 1.1rem);
          color: var(--nv-text-1);
          max-width: 540px;
          margin-bottom: 2.5rem;
          line-height: 1.75;
        }
        .nv-hero-cta {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
        }
        @media (max-width: 480px) {
          .nv-hero-cta { flex-direction: column; align-items: stretch; }
          .nv-hero-cta .nv-btn { width: 100%; }
        }

        /* Hero visual card */
        .nv-hero-visual {
          position: relative;
          aspect-ratio: 4 / 5;
          max-width: 460px;
          margin: 0 auto;
          width: 100%;
        }
        .nv-disc {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background:
            conic-gradient(from 45deg, var(--nv-gold-deep), var(--nv-gold-light), var(--nv-gold-deep), #1a1408, var(--nv-gold-deep));
          box-shadow:
            0 30px 80px -10px rgba(0, 0, 0, 0.8),
            0 0 80px -20px var(--nv-gold-glow),
            inset 0 0 60px rgba(0, 0, 0, 0.5);
          animation: nv-spin 40s linear infinite;
        }
        .nv-disc::before {
          content: '';
          position: absolute;
          inset: 18%;
          border-radius: 50%;
          background: radial-gradient(circle, var(--nv-bg-1), var(--nv-bg-0));
          box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.8);
        }
        .nv-disc::after {
          content: '';
          position: absolute;
          inset: 45%;
          border-radius: 50%;
          background: radial-gradient(circle, var(--nv-gold-light), var(--nv-gold-deep));
          box-shadow: 0 0 20px var(--nv-gold-glow);
        }
        @keyframes nv-spin {
          to { transform: rotate(360deg); }
        }
        .nv-hero-tag {
          position: absolute;
          background: rgba(10, 10, 13, 0.7);
          backdrop-filter: var(--nv-blur);
          -webkit-backdrop-filter: var(--nv-blur);
          border: 1px solid var(--nv-border-strong);
          border-radius: 16px;
          padding: 0.9rem 1.1rem;
          display: flex;
          align-items: center;
          gap: 0.7rem;
          box-shadow: var(--nv-shadow-lift);
        }
        .nv-hero-tag.tag-1 { top: 8%; left: -8%; animation: nv-float 6s ease-in-out infinite; }
        .nv-hero-tag.tag-2 { bottom: 12%; right: -6%; animation: nv-float 7s ease-in-out infinite 1s; }
        @media (max-width: 600px) {
          .nv-hero-tag.tag-1 { left: 0; }
          .nv-hero-tag.tag-2 { right: 0; }
        }
        .nv-hero-tag-icon {
          width: 36px; height: 36px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--nv-gold), var(--nv-gold-deep));
          display: flex; align-items: center; justify-content: center;
          color: #1a1408;
          font-size: 1rem;
        }
        .nv-hero-tag-text { display: flex; flex-direction: column; line-height: 1.2; }
        .nv-hero-tag-text .t { font-size: 0.85rem; color: var(--nv-text-0); }
        .nv-hero-tag-text .s { font-size: 0.65rem; color: var(--nv-text-2); letter-spacing: 0.15em; text-transform: uppercase; }

        /* === SECTION BASE === */
        section { position: relative; padding: 5rem 0; }
        @media (min-width: 768px) { section { padding: 7rem 0; } }
        .nv-section-head {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 4rem;
        }
        .nv-section-head .nv-eyebrow { justify-content: center; }
        .nv-section-head h2 {
          font-size: clamp(2rem, 4.5vw, 3.5rem);
          margin-bottom: 1.2rem;
        }
        .nv-section-head p {
          color: var(--nv-text-1);
          font-size: 1rem;
          line-height: 1.75;
        }

        /* === CATEGORIES === */
        .nv-cats {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) { .nv-cats { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .nv-cats { grid-template-columns: repeat(4, 1fr); } }
        .nv-cat {
          padding: 2rem 1.6rem 1.8rem;
          cursor: pointer;
        }
        .nv-cat-icon {
          width: 58px; height: 58px;
          border-radius: 18px;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.18), rgba(212, 175, 55, 0.04));
          border: 1px solid var(--nv-border-strong);
          display: flex; align-items: center; justify-content: center;
          font-size: 1.5rem;
          color: var(--nv-gold);
          margin-bottom: 1.5rem;
          transition: transform 0.5s var(--nv-ease-out);
        }
        .nv-cat:hover .nv-cat-icon {
          transform: rotate(8deg) scale(1.06);
          box-shadow: 0 0 30px -5px var(--nv-gold-glow);
        }
        .nv-cat-sub {
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--nv-gold);
          margin-bottom: 0.4rem;
        }
        .nv-cat h3 {
          font-family: var(--nv-font-display);
          font-size: 1.45rem;
          font-weight: 500;
          color: var(--nv-text-0);
          margin-bottom: 0.7rem;
        }
        .nv-cat p {
          font-size: 0.9rem;
          color: var(--nv-text-1);
          line-height: 1.65;
        }

        /* === PILLARS (asymmetric) === */
        .nv-pillars { display: flex; flex-direction: column; gap: 1.5rem; }
        .nv-pillar {
          display: grid;
          gap: 1.5rem;
          align-items: center;
          padding: 2.2rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 760px) { .nv-pillar { grid-template-columns: 100px 1fr; gap: 3rem; padding: 2.5rem 3rem; } }
        .nv-pillar-no {
          font-family: var(--nv-font-display);
          font-size: 3.5rem;
          font-style: italic;
          font-weight: 300;
          background: linear-gradient(135deg, var(--nv-gold-light), var(--nv-gold-deep));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1;
        }
        .nv-pillar h3 {
          font-family: var(--nv-font-display);
          font-size: clamp(1.4rem, 2.3vw, 1.9rem);
          font-weight: 500;
          color: var(--nv-text-0);
          margin-bottom: 0.6rem;
        }
        .nv-pillar p {
          color: var(--nv-text-1);
          line-height: 1.75;
          max-width: 680px;
        }

        /* === CTA BANNER === */
        .nv-cta {
          position: relative;
          padding: 4rem 2rem;
          text-align: center;
          border-radius: 32px;
          background:
            radial-gradient(ellipse at top, rgba(212, 175, 55, 0.1), transparent 60%),
            linear-gradient(180deg, rgba(28, 28, 37, 0.6), rgba(17, 17, 22, 0.6));
          border: 1px solid var(--nv-border);
          backdrop-filter: var(--nv-blur);
          overflow: hidden;
        }
        @media (min-width: 768px) { .nv-cta { padding: 6rem 3rem; } }
        .nv-cta::before {
          content: '';
          position: absolute;
          top: -50%; left: -50%;
          width: 200%; height: 200%;
          background:
            radial-gradient(circle, rgba(212, 175, 55, 0.06), transparent 30%);
          animation: nv-spin 60s linear infinite;
        }
        .nv-cta-inner { position: relative; z-index: 2; }
        .nv-cta h2 {
          font-family: var(--nv-font-display);
          font-size: clamp(2rem, 5vw, 3.6rem);
          font-weight: 400;
          line-height: 1.1;
          margin-bottom: 1.3rem;
          max-width: 800px;
          margin-left: auto; margin-right: auto;
        }
        .nv-cta h2 em {
          font-style: italic;
          background: linear-gradient(135deg, var(--nv-gold-light), var(--nv-gold));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .nv-cta p {
          color: var(--nv-text-1);
          max-width: 580px;
          margin: 0 auto 2.5rem;
          line-height: 1.75;
        }
        .nv-cta-actions {
          display: flex; flex-wrap: wrap; gap: 0.8rem; justify-content: center;
        }
        @media (max-width: 480px) {
          .nv-cta-actions { flex-direction: column; }
          .nv-cta-actions .nv-btn { width: 100%; }
        }

        /* === FOOTER === */
        .nv-footer {
          padding: 4rem 0 2rem;
          border-top: 1px solid var(--nv-border);
          margin-top: 4rem;
        }
        .nv-footer-grid {
          display: grid;
          gap: 2.5rem;
          grid-template-columns: 1fr;
          margin-bottom: 3rem;
        }
        @media (min-width: 768px) { .nv-footer-grid { grid-template-columns: 1.4fr 1fr 1fr; } }
        .nv-footer h4 {
          font-family: var(--nv-font-body);
          font-size: 0.72rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--nv-gold);
          margin-bottom: 1.3rem;
          font-weight: 500;
        }
        .nv-footer-text {
          font-family: var(--nv-font-display);
          font-size: 1.3rem;
          color: var(--nv-text-1);
          line-height: 1.5;
          max-width: 380px;
        }
        .nv-footer ul { list-style: none; display: flex; flex-direction: column; gap: 0.7rem; }
        .nv-footer a {
          color: var(--nv-text-1);
          font-size: 0.9rem;
          transition: color 0.3s var(--nv-ease);
        }
        .nv-footer a:hover { color: var(--nv-gold-light); }
        .nv-footer-bottom {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 1rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(212, 175, 55, 0.08);
          font-size: 0.78rem;
          color: var(--nv-text-2);
          letter-spacing: 0.1em;
        }

        /* Reveal */
        .nv-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1s var(--nv-ease-out), transform 1s var(--nv-ease-out);
        }
        .nv-reveal.is-in { opacity: 1; transform: translateY(0); }
      `}</style>

      {/* ========== HERO ========== */}
      <section className="nv-hero" ref={heroRef}>
        <div className="nv-hero-orb" />
        <div className="nv-container">
          <div className="nv-hero-inner">
            <div>
              <div className="nv-eyebrow nv-anim-fade-in">NIRVANA Mind Studio</div>
              <h1 className="nv-heading">
                <span className="line">Чимээгүйд</span>
                <span className="line"><em>агуулга</em> бий,</span>
                <span className="line">бясалгалд хариулт.</span>
              </h1>
              <p className="nv-hero-lead nv-anim-fade-up nv-delay-3">
                Сонгомол аудио ном, гүн бясалгал, дотоод хөгжлийн агуулгуудыг
                нэг газар. Чихэндээ зориулсан тансаг сонголт, сэтгэлдээ
                зориулсан жинхэнэ тэжээл.
              </p>
              <div className="nv-hero-cta nv-anim-fade-up nv-delay-4">
                <button className="nv-btn nv-btn-primary" onClick={goAudio}>
                  Аудио ном үзэх <span className="nv-btn-arrow">→</span>
                </button>
                <button className="nv-btn nv-btn-ghost" onClick={goTelegram}>
                  Холбоо барих
                </button>
              </div>
            </div>

            <div className="nv-hero-visual nv-anim-fade-in nv-delay-3">
              <div className="nv-disc" />
              <div className="nv-hero-tag tag-1">
                <div className="nv-hero-tag-icon">♪</div>
                <div className="nv-hero-tag-text">
                  <span className="t">Тансаг аудио</span>
                  <span className="s">Чанартай уншлага</span>
                </div>
              </div>
              <div className="nv-hero-tag tag-2">
                <div className="nv-hero-tag-icon">☾</div>
                <div className="nv-hero-tag-text">
                  <span className="t">Гүн бясалгал</span>
                  <span className="s">Дотоод нам гүм</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CATEGORIES ========== */}
      <section>
        <div className="nv-container">
          <div className="nv-section-head nv-reveal">
            <div className="nv-eyebrow">Бидний ертөнц</div>
            <h2 className="nv-heading">
              Сэтгэлийн гүн рүү чиглэсэн <em>тансаг</em> агуулгууд
            </h2>
            <p>
              Дөрвөн чиглэлийн дагуу сэтгэгдэн боловсруулагдсан, чанартай
              орчуулгатай, чимэглэлгүй цэвэр сонголтууд.
            </p>
          </div>

          <div className="nv-cats">
            {categories.map((c, i) => (
              <article key={c.id} className="nv-card nv-cat nv-reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="nv-cat-icon">{c.icon}</div>
                <div className="nv-cat-sub">{c.sub}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PILLARS ========== */}
      <section style={{ paddingTop: 0 }}>
        <div className="nv-container">
          <div className="nv-section-head nv-reveal">
            <div className="nv-eyebrow">Гурван багана</div>
            <h2 className="nv-heading">
              Тогтвортой <em>өөрчлөлтийн</em> үндэс
            </h2>
            <p>
              Богино трендийн оронд урт хугацааны дотоод өөрчлөлтөд хүргэх
              гурван үндсэн чиглэл.
            </p>
          </div>

          <div className="nv-pillars">
            {pillars.map((p, i) => (
              <div key={p.no} className="nv-card nv-pillar nv-reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="nv-pillar-no">{p.no}</div>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section>
        <div className="nv-container">
          <div className="nv-cta nv-reveal">
            <div className="nv-cta-inner">
              <div className="nv-eyebrow" style={{ justifyContent: "center" }}>Аяллаа эхлүүлээрэй</div>
              <h2>
                Чихэндээ <em>чимээгүйг</em>, сэтгэлдээ <em>хариултыг</em>
              </h2>
              <p>
                Тансаг аудио номын санд нэвтэрч, өөрийн дотоод аяллыг өнөөдөр
                эхлүүлээрэй. Эсвэл бидэнтэй шууд холбогдоорой.
              </p>
              <div className="nv-cta-actions">
                <button className="nv-btn nv-btn-primary" onClick={goAudio}>
                  Аудио ном үзэх <span className="nv-btn-arrow">→</span>
                </button>
                <button className="nv-btn nv-btn-ghost" onClick={goTelegram}>
                  Холбоо барих
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="nv-footer">
        <div className="nv-container">
          <div className="nv-footer-grid">
            <div>
              <h4>NIRVANA · Mind Studio</h4>
              <p className="nv-footer-text">
                Чимээгүй дунд төрсөн контент. Тансаг чанар, гүн утга, цэвэр аялгуу.
              </p>
            </div>
            <div>
              <h4>Хөтөч</h4>
              <ul>
                <li><a href="/">Нүүр</a></li>
                <li><a href="/audiobooks">Аудио ном</a></li>
                <li><a href="/about">Бидний тухай</a></li>
              </ul>
            </div>
            <div>
              <h4>Холбогдох</h4>
              <ul>
                <li><a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">Telegram суваг</a></li>
                <li><a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">Шууд мессеж</a></li>
              </ul>
            </div>
          </div>
          <div className="nv-footer-bottom">
            <span>© {new Date().getFullYear()} NIRVANA Mind Studio</span>
            <span>Чимээгүйд бүтээгдсэн</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
