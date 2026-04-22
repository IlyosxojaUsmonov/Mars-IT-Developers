import React, { useEffect } from "react";
import "./App.css";

function App() {
  // Sidebar funksiyalarini useEffect ichida aniqlash va global scope'dan qochish
  useEffect(() => {
    // ── Navigation ────────────────────────────────────────
    const btns = document.querySelectorAll(".nav-btn");
    const pages = document.querySelectorAll(".page");

    function closeSidebar() {
      const sidebar = document.getElementById("sidebar");
      const overlay = document.getElementById("overlay");
      if (sidebar) sidebar.classList.remove("open");
      if (overlay) overlay.classList.remove("open");
    }

    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = btn.dataset.page;

        btns.forEach((b) => b.classList.remove("active"));
        pages.forEach((p) => {
          p.classList.remove("active");
          p.style.display = "none";
        });

        btn.classList.add("active");
        const activePage = document.getElementById("page-" + target);
        if (activePage) {
          activePage.style.display = "block";
          void activePage.offsetWidth;
          activePage.classList.add("active");
        }

        if (window.innerWidth < 768) closeSidebar();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });

    // init: show first page
    pages.forEach((p, i) => {
      if (i !== 0) p.style.display = "none";
    });

    // ── Mobile sidebar ────────────────────────────────────
    const hamburger = document.getElementById("hamburger");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    function openSidebar() {
      if (sidebar) sidebar.classList.add("open");
      if (overlay) overlay.classList.add("open");
    }

    const handleHamburgerClick = () => {
      if (sidebar && sidebar.classList.contains("open")) {
        closeSidebar();
      } else {
        openSidebar();
      }
    };

    const handleOverlayClick = () => closeSidebar();

    if (hamburger) hamburger.addEventListener("click", handleHamburgerClick);
    if (overlay) overlay.addEventListener("click", handleOverlayClick);

    // Cleanup
    return () => {
      btns.forEach((btn) => {
        btn.removeEventListener("click", () => {});
      });
      if (hamburger)
        hamburger.removeEventListener("click", handleHamburgerClick);
      if (overlay) overlay.removeEventListener("click", handleOverlayClick);
    };
  }, []);

  // Video player click handler
  const handlePlayClick = (e) => {
    e.currentTarget.style.transform = "scale(0.95)";
    setTimeout(() => {
      e.currentTarget.style.transform = "";
    }, 150);
  };

  return (
    <div>
      {/* Hamburger */}
      <button className="hamburger" id="hamburger" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Overlay */}
      <div className="overlay" id="overlay"></div>

      {/* SIDEBAR */}
      <aside className="sidebar" id="sidebar">
        <div className="sidebar-logo">
          <div className="logo-mark">A</div>
          <div className="logo-text">
            ad<span>bloger</span>
            <span className="dot">.uz</span>
          </div>
          <div className="logo-sub">Pitch Presentation</div>
        </div>

        <nav className="sidebar-nav">
          <button className="nav-btn active" data-page="problem">
            <div className="nav-icon">01</div>
            Muammo va Yechim
          </button>
          <button className="nav-btn" data-page="team">
            <div className="nav-icon">02</div>
            Jamoa
          </button>
          <button className="nav-btn" data-page="roadmap">
            <div className="nav-icon">03</div>
            Yo'l xaritasi
          </button>
          <button className="nav-btn" data-page="tech">
            <div className="nav-icon">04</div>
            Texnologiyalar
          </button>
          <button className="nav-btn" data-page="demo">
            <div className="nav-icon">05</div>
            Demo
          </button>
        </nav>

        <div className="sidebar-footer">
          &copy; 2024 AdBloger.uz
          <br />
          <b>Pitch Deck</b>
        </div>
      </aside>

      {/* MAIN */}
      <main className="main">
        {/* ── PAGE 1: MUAMMO ──────────────────────────────── */}
        <div className="page active" id="page-problem">
          <div className="inner">
            <span className="badge">Muammo va Yechim</span>
            <h1 className="page-title">
              O'zbekistondagi reklama
              <br />
              <span className="hi">aloqasi singan.</span>
            </h1>
            <p className="page-lead">
              Minglab blogerlar va minglab bizneslar — lekin ular bir-birini
              topa olmayapti.
            </p>

            <div className="grid-3">
              <div className="card problem-cards">
                <div className="card-title">Bloger topish qiyin</div>
                <div className="card-text">
                  Bizneslar blogerlarni Instagram'da qo'lda qidirib, soatlab
                  vaqt sarflaydi. Ko'pincha noto'g'ri auditoriyaga yetib boradi.
                </div>
              </div>
              <div className="card problem-cards">
                <div className="card-title">Narxlar noaniq</div>
                <div className="card-text">
                  Har safar DM orqali muzokaralar. Narxlar ochiq emas, jarayon
                  shaffof emas.
                </div>
              </div>
              <div className="card problem-cards">
                <div className="card-title">Natija o'lchanmaydi</div>
                <div className="card-text">
                  Reklama ishladi yoki yo'qmi — aniq ma'lumot yo'q. Faqat
                  taxminlar bilan ish ko'riladi.
                </div>
              </div>
            </div>

            <div className="divider-arrow">
              <div className="line"></div>
              <div className="arrow">↓</div>
              <div
                className="line"
                style={{
                  background:
                    "linear-gradient(to bottom, var(--accent), #16a34a)",
                }}
              ></div>
            </div>

            <div className="solution-box">
              <span className="solution-badge">Yechim</span>
              <div className="solution-title">
                <span>AdBloger.uz</span> — O'zbekistonning
                <br />
                birinchi bloger marketplace'i
              </div>
              <div className="solution-desc">
                Bizneslar o'z sohasiga, budjetiga va maqsadli auditoriyasiga mos
                blogerlarni <strong>30 soniyada</strong> topsin. Shaffof
                narxlar, real analitika.
              </div>
              <div className="grid-3" style={{ marginBottom: 0 }}>
                <div className="card" style={{ padding: "16px" }}>
                  <div className="card-title">Tez qidiruv</div>
                  <div className="card-text">
                    Toifa, auditoriya va narx bo'yicha filter
                  </div>
                </div>
                <div className="card" style={{ padding: "16px" }}>
                  <div className="card-title">Shaffof narxlar</div>
                  <div className="card-text">
                    Har bir blogerning narxi ochiq ko'rsatilgan
                  </div>
                </div>
                <div className="card" style={{ padding: "16px" }}>
                  <div className="card-title">Analitika</div>
                  <div className="card-text">
                    Kampaniya natijalari real vaqtda
                  </div>
                </div>
              </div>
            </div>

            <div className="stats-row">
              <div className="stat-card">
                <div className="stat-val">12,000+</div>
                <div className="stat-label">Potentsial blogerlar</div>
              </div>
              <div className="stat-card">
                <div className="stat-val">50,000+</div>
                <div className="stat-label">Faol bizneslar</div>
              </div>
              <div className="stat-card">
                <div className="stat-val">$2.4M</div>
                <div className="stat-label">Bozor hajmi / yillik</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── PAGE 2: JAMOA ───────────────────────────────── */}
        <div className="page" id="page-team">
          <div className="inner">
            <span className="badge">Jamoa</span>
            <h1 className="page-title">
              Muammoni hal qila
              <br />
              <span className="hi">oladigan jamoa.</span>
            </h1>
            <p className="page-lead">
              Marketing, texnologiya va ma'lumot — birgalikda ishlaydi.
            </p>

            <div className="grid-2">
              <div className="member-card">
                <div className="member-head">
                  <div className="avatar" style={{ background: "#E8500A" }}>
                    UI
                  </div>
                  <div>
                    <div className="member-name">Usmonov Ilyosxoja</div>
                    <div className="member-role" style={{ color: "#E8500A" }}>
                      Founder &amp; CEO
                    </div>
                  </div>
                </div>
                <div className="tag-label">Ko'nikmalar</div>
                <div className="tags">
                  <span className="tag">Biznes strategiya</span>
                  <span className="tag">Marketing</span>
                  <span className="tag">Influencer relations</span>
                </div>
                <div className="tag-label">Texnologiyalar</div>
                <div className="tags">
                  <span
                    className="tag-colored"
                    style={{ background: "#fff0e9", color: "#E8500A" }}
                  >
                    HTML
                  </span>
                  <span
                    className="tag-colored"
                    style={{ background: "#fff0e9", color: "#E8500A" }}
                  >
                    CSS
                  </span>
                  <span
                    className="tag-colored"
                    style={{ background: "#fff0e9", color: "#E8500A" }}
                  >
                    JavaScript
                  </span>
                  <span
                    className="tag-colored"
                    style={{ background: "#fff0e9", color: "#E8500A" }}
                  >
                    Backend
                  </span>
                </div>
                <div className="member-links">
                  <a href="#">LinkedIn</a>
                  <a href="#" className="tg">
                    Telegram
                  </a>
                </div>
              </div>

              <div className="member-card">
                <div className="member-head">
                  <div className="avatar" style={{ background: "#2563EB" }}>
                    MR
                  </div>
                  <div>
                    <div className="member-name">Muxtorov Rustam</div>
                    <div className="member-role" style={{ color: "#2563EB" }}>
                      Lead Developer
                    </div>
                  </div>
                </div>
                <div className="tag-label">Ko'nikmalar</div>
                <div className="tags">
                  <span className="tag">Full-stack dev</span>
                  <span className="tag">API integratsiya</span>
                  <span className="tag">UI/UX</span>
                </div>
                <div className="tag-label">Texnologiyalar</div>
                <div className="tags">
                  <span
                    className="tag-colored"
                    style={{ background: "#eff6ff", color: "#2563EB" }}
                  >
                    HTML
                  </span>
                  <span
                    className="tag-colored"
                    style={{ background: "#eff6ff", color: "#2563EB" }}
                  >
                    CSS
                  </span>
                  <span
                    className="tag-colored"
                    style={{ background: "#eff6ff", color: "#2563EB" }}
                  >
                    JavaScript
                  </span>
                  <span
                    className="tag-colored"
                    style={{ background: "#eff6ff", color: "#2563EB" }}
                  >
                    Backend
                  </span>
                </div>
                <div className="member-links">
                  <a href="#">LinkedIn</a>
                  <a href="#" className="tg">
                    Telegram
                  </a>
                </div>
              </div>

              <div className="member-card">
                <div className="member-head">
                  <div className="avatar" style={{ background: "#059669" }}>
                    KS
                  </div>
                  <div>
                    <div className="member-name">Karimov Sarvar</div>
                    <div className="member-role" style={{ color: "#059669" }}>
                      Backend Engineer
                    </div>
                  </div>
                </div>
                <div className="tag-label">Ko'nikmalar</div>
                <div className="tags">
                  <span className="tag">Server arxitektura</span>
                  <span className="tag">Database</span>
                  <span className="tag">API dizayn</span>
                </div>
                <div className="tag-label">Texnologiyalar</div>
                <div className="tags">
                  <span
                    className="tag-colored"
                    style={{ background: "#ecfdf5", color: "#059669" }}
                  >
                    HTML
                  </span>
                  <span
                    className="tag-colored"
                    style={{ background: "#ecfdf5", color: "#059669" }}
                  >
                    CSS
                  </span>
                  <span
                    className="tag-colored"
                    style={{ background: "#ecfdf5", color: "#059669" }}
                  >
                    JavaScript
                  </span>
                  <span
                    className="tag-colored"
                    style={{ background: "#ecfdf5", color: "#059669" }}
                  >
                    Backend
                  </span>
                </div>
                <div className="member-links">
                  <a href="#">LinkedIn</a>
                  <a href="#" className="tg">
                    Telegram
                  </a>
                </div>
              </div>

              <div className="member-card">
                <div className="member-head">
                  <div className="avatar" style={{ background: "#7C3AED" }}>
                    MJ
                  </div>
                  <div>
                    <div className="member-name">Meliqoziyev Jorabek</div>
                    <div className="member-role" style={{ color: "#7C3AED" }}>
                      Frontend Developer
                    </div>
                  </div>
                </div>
                <div className="tag-label">Ko'nikmalar</div>
                <div className="tags">
                  <span className="tag">UI komponentlar</span>
                  <span className="tag">Responsive dizayn</span>
                  <span className="tag">Animatsiyalar</span>
                </div>
                <div className="tag-label">Texnologiyalar</div>
                <div className="tags">
                  <span
                    className="tag-colored"
                    style={{ background: "#f5f3ff", color: "#7C3AED" }}
                  >
                    HTML
                  </span>
                  <span
                    className="tag-colored"
                    style={{ background: "#f5f3ff", color: "#7C3AED" }}
                  >
                    CSS
                  </span>
                  <span
                    className="tag-colored"
                    style={{ background: "#f5f3ff", color: "#7C3AED" }}
                  >
                    JavaScript
                  </span>
                  <span
                    className="tag-colored"
                    style={{ background: "#f5f3ff", color: "#7C3AED" }}
                  >
                    Backend
                  </span>
                </div>
                <div className="member-links">
                  <a href="#">LinkedIn</a>
                  <a href="#" className="tg">
                    Telegram
                  </a>
                </div>
              </div>
            </div>

            <div className="why-box">
              <div className="why-title">
                Nima uchun <span>bizning jamoa</span> bu muammoni hal qila
                oladi?
              </div>
              <div className="why-grid">
                <div className="why-item">
                  <span className="why-icon">—</span>
                  <span>
                    Jamoamiz a'zolari O'zbekiston reklama bozorida 5+ yil
                    tajribaga ega
                  </span>
                </div>
                <div className="why-item">
                  <span className="why-icon">—</span>
                  <span>
                    200+ bloger bilan shaxsiy munosabatlar va ishonch
                    o'rnatilgan
                  </span>
                </div>
                <div className="why-item">
                  <span className="why-icon">—</span>
                  <span>
                    Mahalliy texnologiya muammolarini yechishda tajribali
                    dasturchilar
                  </span>
                </div>
                <div className="why-item">
                  <span className="why-icon">—</span>
                  <span>
                    Ma'lumotga asoslangan qarorlar — gut feeling emas, raqamlar
                    asosi
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── PAGE 3: YO'L XARITASI ───────────────────────── */}
        <div className="page" id="page-roadmap">
          <div className="inner">
            <span className="badge">Yo'l xaritasi</span>
            <h1 className="page-title">
              G'oyadan
              <br />
              <span className="hi">ishga tushirishgacha.</span>
            </h1>
            <p className="page-lead">
              To'rtta bosqichda rejalashtirilgan rivojlanish yo'li.
            </p>

            <div className="timeline">
              <div className="timeline-line"></div>

              <div className="timeline-item">
                <div
                  className="timeline-dot"
                  style={{ background: "#dcfce7", color: "#16a34a" }}
                >
                  01
                </div>
                <div className="timeline-body done">
                  <div className="phase-row">
                    <div>
                      <div className="phase-name">Idea</div>
                      <div className="phase-date">Q1 2024</div>
                    </div>
                    <span
                      className="phase-status"
                      style={{ background: "#dcfce7", color: "#16a34a" }}
                    >
                      Bajarildi
                    </span>
                  </div>
                  <div className="phase-desc">
                    Bozor tadqiqoti, muammo identifikatsiyasi va konsepsiyani
                    shakllantirish.
                  </div>
                  <ul className="phase-points">
                    <li>100+ tadbirkor bilan intervyu</li>
                    <li>Raqobatchi tahlili</li>
                    <li>Biznes model kanvas</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div
                  className="timeline-dot"
                  style={{ background: "#dcfce7", color: "#16a34a" }}
                >
                  02
                </div>
                <div className="timeline-body done">
                  <div className="phase-row">
                    <div>
                      <div className="phase-name">Prototype</div>
                      <div className="phase-date">Q2 2024</div>
                    </div>
                    <span
                      className="phase-status"
                      style={{ background: "#dcfce7", color: "#16a34a" }}
                    >
                      Bajarildi
                    </span>
                  </div>
                  <div className="phase-desc">
                    Prototip va dastlabki foydalanuvchi testlari.
                  </div>
                  <ul className="phase-points">
                    <li>50 ta bloger profili qo'lda to'ldirildi</li>
                    <li>UX testlar o'tkazildi</li>
                    <li>Feedback asosida qayta dizayn</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div
                  className="timeline-dot"
                  style={{
                    background: "var(--accent-light)",
                    color: "var(--accent)",
                  }}
                >
                  03
                </div>
                <div className="timeline-body active">
                  <div className="phase-row">
                    <div>
                      <div className="phase-name">MVP</div>
                      <div className="phase-date">Q3–Q4 2024</div>
                    </div>
                    <span
                      className="phase-status"
                      style={{
                        background: "var(--accent-light)",
                        color: "var(--accent)",
                      }}
                    >
                      Davom etmoqda
                    </span>
                  </div>
                  <div className="phase-desc">
                    Ishlaydigan platforma: qidiruv, filtrlash, bog'lanish
                    moduli.
                  </div>
                  <ul className="phase-points">
                    <li>500+ bloger bazasi</li>
                    <li>Toifalar bo'yicha filtrlash</li>
                    <li>Reklama so'rovi tizimi</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div
                  className="timeline-dot"
                  style={{ background: "#f3f4f6", color: "#9ca3af" }}
                >
                  04
                </div>
                <div className="timeline-body upcoming">
                  <div className="phase-row">
                    <div>
                      <div className="phase-name">Launched</div>
                      <div className="phase-date">Q1 2025</div>
                    </div>
                    <span
                      className="phase-status"
                      style={{ background: "#f3f4f6", color: "#9ca3af" }}
                    >
                      Rejalashtirilgan
                    </span>
                  </div>
                  <div className="phase-desc">
                    To'liq ishga tushirish, PR kampaniya va kengayish.
                  </div>
                  <ul className="phase-points">
                    <li>5000+ bloger maqsad</li>
                    <li>Mobil ilova</li>
                    <li>AI tavsiya tizimi</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── PAGE 4: TEXNOLOGIYALAR ──────────────────────── */}
        <div className="page" id="page-tech">
          <div className="inner">
            <span className="badge">Texnologiyalar</span>
            <h1 className="page-title">
              Zamonaviy stack,
              <br />
              <span className="hi">kuchli asoslar.</span>
            </h1>
            <p className="page-lead">
              Yechimni qanday amalga oshiramiz — bosqichlar va vositalar.
            </p>

            <div className="tech-grid">
              <div
                className="tech-cat"
                style={{ background: "#eff6ff", borderColor: "#bfdbfe" }}
              >
                <div className="tech-cat-title" style={{ color: "#2563EB" }}>
                  Frontend
                </div>
                <div className="tech-item">
                  <span className="tech-name">HTML5</span>
                  <span className="tech-desc">Semantik razmetka</span>
                </div>
                <div className="tech-item">
                  <span className="tech-name">CSS3</span>
                  <span className="tech-desc">Zamonaviy stillar</span>
                </div>
                <div className="tech-item">
                  <span className="tech-name">JavaScript</span>
                  <span className="tech-desc">Interaktivlik</span>
                </div>
                <div className="tech-item">
                  <span className="tech-name">React</span>
                  <span className="tech-desc">Komponent UI</span>
                </div>
              </div>
              <div
                className="tech-cat"
                style={{ background: "#ecfdf5", borderColor: "#bbf7d0" }}
              >
                <div className="tech-cat-title" style={{ color: "#059669" }}>
                  Backend
                </div>
                <div className="tech-item">
                  <span className="tech-name">Node.js</span>
                  <span className="tech-desc">Server muhiti</span>
                </div>
                <div className="tech-item">
                  <span className="tech-name">Express</span>
                  <span className="tech-desc">REST API</span>
                </div>
                <div className="tech-item">
                  <span className="tech-name">PostgreSQL</span>
                  <span className="tech-desc">Ma'lumotlar bazasi</span>
                </div>
                <div className="tech-item">
                  <span className="tech-name">Redis</span>
                  <span className="tech-desc">Kesh tizimi</span>
                </div>
              </div>
              <div
                className="tech-cat"
                style={{ background: "#f5f3ff", borderColor: "#ddd6fe" }}
              >
                <div className="tech-cat-title" style={{ color: "#7C3AED" }}>
                  AI / Data
                </div>
                <div className="tech-item">
                  <span className="tech-name">Python</span>
                  <span className="tech-desc">ML va skript</span>
                </div>
                <div className="tech-item">
                  <span className="tech-name">FastAPI</span>
                  <span className="tech-desc">ML microservice</span>
                </div>
                <div className="tech-item">
                  <span className="tech-name">OpenAI API</span>
                  <span className="tech-desc">Aqlli tavsiyalar</span>
                </div>
                <div className="tech-item">
                  <span className="tech-name">Scrapy</span>
                  <span className="tech-desc">Ma'lumot yig'ish</span>
                </div>
              </div>
              <div
                className="tech-cat"
                style={{ background: "#fff7ed", borderColor: "#fed7aa" }}
              >
                <div className="tech-cat-title" style={{ color: "#EA580C" }}>
                  DevOps
                </div>
                <div className="tech-item">
                  <span className="tech-name">Docker</span>
                  <span className="tech-desc">Konteynerizatsiya</span>
                </div>
                <div className="tech-item">
                  <span className="tech-name">GitHub Actions</span>
                  <span className="tech-desc">CI/CD</span>
                </div>
                <div className="tech-item">
                  <span className="tech-name">Vercel</span>
                  <span className="tech-desc">Frontend hosting</span>
                </div>
                <div className="tech-item">
                  <span className="tech-name">Cloudflare</span>
                  <span className="tech-desc">CDN va xavfsizlik</span>
                </div>
              </div>
            </div>

            <div className="ai-box">
              <div className="ai-title">AI vositalari</div>
              <div className="ai-sub">
                Platformani aqlli qiluvchi sun'iy intellekt yechimlari.
              </div>
              <div className="ai-cards">
                <div className="ai-card">
                  <div className="ai-card-title">AI Tavsiyalar</div>
                  <div className="ai-card-desc">
                    Biznes sohasiga va budjetga qarab optimal blogerlarni
                    avtomatik taklif qiladi.
                  </div>
                </div>
                <div className="ai-card">
                  <div className="ai-card-title">Narx Tahlili</div>
                  <div className="ai-card-desc">
                    Bozor ma'lumotlari asosida adolatli narxni aniqlash modeli.
                  </div>
                </div>
                <div className="ai-card">
                  <div className="ai-card-title">Auditoriya Tahlili</div>
                  <div className="ai-card-desc">
                    Bloger followers'larining demografiyasi va qiziqishlarini AI
                    bilan tahlil qilish.
                  </div>
                </div>
              </div>
            </div>

            <div className="steps-box">
              <div className="steps-title">Amalga oshirish bosqichlari</div>
              <div className="step-row">
                <div className="step-num">01</div>
                <div>
                  <div className="step-title">Ma'lumot yig'ish</div>
                  <div className="step-desc">
                    O'zbekistondagi barcha platformalardagi blogerlarni skaner
                    qilish va bazaga kiritish
                  </div>
                </div>
              </div>
              <div className="step-row">
                <div className="step-num">02</div>
                <div>
                  <div className="step-title">Platforma qurish</div>
                  <div className="step-desc">
                    HTML/CSS/JS frontend + Node.js backend + PostgreSQL baza — 3
                    oyda MVP
                  </div>
                </div>
              </div>
              <div className="step-row">
                <div className="step-num">03</div>
                <div>
                  <div className="step-title">AI modeli</div>
                  <div className="step-desc">
                    Tavsiya algoritmi va auditoriya tahlilini Python ML
                    yordamida qurish
                  </div>
                </div>
              </div>
              <div className="step-row">
                <div className="step-num">04</div>
                <div>
                  <div className="step-title">Test va ishga tushirish</div>
                  <div className="step-desc">
                    50 ta pilot biznes bilan beta test, feedback asosida
                    optimallashtirish
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── PAGE 5: DEMO ────────────────────────────────── */}
        <div className="page" id="page-demo">
          <div className="inner">
            <span className="badge">Demo</span>
            <h1 className="page-title">
              Platforma
              <br />
              <span className="hi">amalda.</span>
            </h1>
            <p className="page-lead">Demo video va prototip orqali ko'ring.</p>

            <div className="video-wrap">
              <div className="video-player">
                <div className="video-bg"></div>
                <div className="play-btn" onClick={handlePlayClick}>
                  <div className="play-icon"></div>
                </div>
                <div className="video-title">AdBloger.uz — Demo Video</div>
                <div className="video-dur">3:45 daqiqa</div>
              </div>
            </div>

            <div className="demo-desc">
              <div className="demo-desc-title">Demo tavsifi</div>
              <div className="demo-desc-text">
                Ushbu demo videoda <strong>AdBloger.uz</strong> platformasining
                asosiy funksiyalarini ko'rsatamiz: biznes egasi qanday qilib o'z
                sohasiga mos blogerlarni tez topishi va ular bilan bog'lanishi
                mumkinligi.
              </div>
              <div className="timestamps">
                <div className="ts-item">
                  <span className="ts-time">0:00 – 0:30</span>
                  <div>
                    <div className="ts-title">Kirish va muammo</div>
                    <div className="ts-desc">
                      Platformaning maqsadi haqida qisqa taqdimot.
                    </div>
                  </div>
                </div>
                <div className="ts-item">
                  <span className="ts-time">0:30 – 1:30</span>
                  <div>
                    <div className="ts-title">Bloger qidiruv</div>
                    <div className="ts-desc">
                      Toifa va auditoriya bo'yicha filtrlash demo.
                    </div>
                  </div>
                </div>
                <div className="ts-item">
                  <span className="ts-time">1:30 – 2:30</span>
                  <div>
                    <div className="ts-title">Bloger profili</div>
                    <div className="ts-desc">
                      Statistika, narx va bog'lanish tugmasi.
                    </div>
                  </div>
                </div>
                <div className="ts-item">
                  <span className="ts-time">2:30 – 3:45</span>
                  <div>
                    <div className="ts-title">Kampaniya yaratish</div>
                    <div className="ts-desc">
                      Reklama so'rovi va natijalar paneli.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="proto-box">
              <div>
                <div className="proto-title">Ishlaydigan prototip</div>
                <div className="proto-desc">
                  Interaktiv prototipni sinab ko'ring — haqiqiy klik-through
                  tajriba.
                </div>
              </div>
              <div className="btn-row">
                <a href="#" className="btn-primary">
                  Prototipni ochish
                </a>
                <a href="#" className="btn-secondary">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
