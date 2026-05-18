import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

/* ── Feature strip data ── */
const features = [
  { icon: '☮', title: 'ДОТООД АМАР АМГАЛАН',  sub: 'Хөтөч аудио, бясалгал' },
  { icon: '✦', title: 'ЭНЭРГИ, ХӨГЖИЛ',        sub: 'Мэдлэг, дадал, өөрчлөлт' },
  { icon: '📚', title: 'МЭДЛЭГИЙН НОМЫН САН',  sub: 'Аудио болон e-ном' },
  { icon: '♾', title: 'ОНЦГОЙ ХАНДАЛТ',        sub: 'Гишүүдэд зориулсан' },
]

/* ── Cards data ── */
const cards = [
  {
    icon: '🎧',
    tag:  'АУДИО НОМ',
    title:'АУДИО НОМ',
    desc: 'Сэтгэлгээ, амьдралын чанарыг дээшлүүлэх хүчирхэг аудио номууд.',
    btn:  'СОНСОХ',
    to:   '/audio',
    accent: 'magenta',
  },
  {
    icon: '📖',
    tag:  'E-НОМ',
    title:'E-НОМ',
    desc: 'Хувь хүний хөгжил, оюун ухаан, сэтгэл зүй, нууц мэдлэгийн номууд.',
    btn:  'УНШИХ',
    to:   '/ebook',
    accent: 'blue',
  },
  {
    icon: '👑',
    tag:  'ГИШҮҮНЧЛЭЛ',
    title:'ГИШҮҮНЧЛЭЛ',
    desc: 'Онцгой контент, хязгааргүй хандалт, гишүүдэд зориулсан давуу талууд.',
    btn:  'ДЭЛГЭРЭНГҮЙ',
    to:   '/membership',
    accent: 'gold',
  },
  {
    icon: '✉',
    tag:  'ХОЛБОО БАРИХ',
    title:'ХОЛБОО БАРИХ',
    desc: 'Асуулт, санал, хамтын ажиллагаа — бидэнтэй холбогдоорой.',
    btn:  'ХОЛБОГДОХ',
    to:   '/contact',
    accent: 'purple',
  },
]

export default function Home() {
  const heroRef   = useRef(null)
  const cardsRef  = useRef([])

  /* Parallax on hero orbs */
  useEffect(() => {
    const handleMouse = (e) => {
      if (!heroRef.current) return
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const xPct = (clientX / innerWidth  - 0.5) * 30
      const yPct = (clientY / innerHeight - 0.5) * 20
      heroRef.current.style.setProperty('--mx', `${xPct}px`)
      heroRef.current.style.setProperty('--my', `${yPct}px`)
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  /* Intersection observer for card reveal */
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('card--visible')
      }),
      { threshold: 0.15 }
    )
    cardsRef.current.forEach(el => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <main className="home">

      {/* ════════════════════════ HERO ════════════════════════ */}
      <section className="hero" ref={heroRef}>
        {/* Background layers */}
        <div className="hero__bg">
          <div className="hero__orb hero__orb--1" />
          <div className="hero__orb hero__orb--2" />
          <div className="hero__orb hero__orb--3" />
          <div className="hero__grid" />
        </div>

        <div className="hero__inner">
          {/* Left — text */}
          <div className="hero__content">
            <p className="hero__eyebrow">ОЮУН · ЭНЭРГИ · ЭРХ ЧӨЛӨӨ</p>

            <h1 className="hero__title">
              <span className="hero__title-brand">NIRVANA</span>
              <span className="hero__title-brand hero__title-brand--light">MIND</span>
              <span className="hero__title-brand hero__title-brand--accent">STUDIO</span>
            </h1>

            <p className="hero__subtitle">
              Оюун ухаанаа тэлж, дотоод ертөнцөө өөрчил.<br />
              Аудио ном, электрон ном, гишүүнчлэлээр<br />
              амьдралаа шинэ түвшинд аваач.
            </p>

            <div className="hero__actions">
              <Link to="/audio" className="btn btn--primary">
                <span className="btn__icon">🎧</span>
                АУДИО НОМ ҮЗЭХ
              </Link>
              <Link to="/ebook" className="btn btn--outline">
                <span className="btn__icon">📖</span>
                E-НОМ ҮЗЭХ
              </Link>
            </div>

            <div className="hero__stats">
              <div className="hero__stat">
                <span className="hero__stat-num">200+</span>
                <span className="hero__stat-lbl">Аудио ном</span>
              </div>
              <div className="hero__stat-divider" />
              <div className="hero__stat">
                <span className="hero__stat-num">150+</span>
                <span className="hero__stat-lbl">E-ном</span>
              </div>
              <div className="hero__stat-divider" />
              <div className="hero__stat">
                <span className="hero__stat-num">5K+</span>
                <span className="hero__stat-lbl">Гишүүд</span>
              </div>
            </div>
          </div>

          {/* Right — Buddha / visual */}
          <div className="hero__visual">
            <div className="hero__halo" />
            <div className="hero__buddha-wrap">
              <div className="hero__buddha-ring hero__buddha-ring--outer" />
              <div className="hero__buddha-ring hero__buddha-ring--inner" />
              <div className="hero__buddha-core">
                <span className="hero__buddha-symbol">☸</span>
                <span className="hero__buddha-om">ॐ</span>
              </div>
              <div className="hero__buddha-petals">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="hero__petal" style={{ '--i': i }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ FEATURE STRIP ════════════════ */}
      <section className="strip">
        <div className="strip__inner">
          {features.map((f, i) => (
            <div key={i} className="strip__item">
              <span className="strip__icon">{f.icon}</span>
              <div>
                <p className="strip__title">{f.title}</p>
                <p className="strip__sub">{f.sub}</p>
              </div>
              {i < features.length - 1 && <span className="strip__sep">—</span>}
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════ CARDS ════════════════════════ */}
      <section className="cards-section">
        <div className="cards-section__inner">
          <p className="cards-section__label">БИДНИЙ САНАЛ БОЛГОХ</p>
          <h2 className="cards-section__heading">Таны Оюун Ухааныг Тэлэх</h2>

          <div className="cards-grid">
            {cards.map((card, i) => (
              <div
                key={i}
                ref={el => (cardsRef.current[i] = el)}
                className={`card card--${card.accent}`}
              >
                <div className="card__shine" />
                <div className="card__top">
                  <span className="card__icon">{card.icon}</span>
                  <span className="card__tag">{card.tag}</span>
                </div>
                <h3 className="card__title">{card.title}</h3>
                <p className="card__desc">{card.desc}</p>
                <Link to={card.to} className="card__btn">
                  {card.btn}
                  <span className="card__btn-arrow">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════ FOOTER ════════════════════════ */}
      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__logo">
            <span className="footer__logo-symbol">☸</span>
            <span className="footer__logo-text">NIRVANA MIND STUDIO</span>
          </div>
          <p className="footer__copy">© 2025 Nirvana Mind Studio. Бүх эрх хуулиар хамгаалагдсан.</p>
          <div className="footer__links">
            <Link to="/contact">Холбоо барих</Link>
            <span>·</span>
            <Link to="/membership">Гишүүнчлэл</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
