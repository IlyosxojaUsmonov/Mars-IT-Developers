import { useState, useEffect } from "react";
import "./App.css";
import video from "./assets/tushuntirish.mp4";

const PAGES = [
  { id: "home", label: "Bosh sahifa", icon: HomeIcon },
  { id: "problem", label: "Muammo & Yechim", icon: ProblemIcon },
  { id: "team", label: "Jamoa", icon: TeamIcon },
  { id: "why", label: "Nega biz?", icon: WhyIcon },
  { id: "roadmap", label: "Yo'l xaritasi", icon: RoadIcon },
  { id: "plan", label: "Amalga oshirish", icon: PlanIcon },
  { id: "demo", label: "Demo", icon: DemoIcon },
];

const TEAM = [
  {
    name: "Karimov Sarvar",
    role: "Frontend Developer",
    skills: ["React", "Node.js", "System Architecture"],
    stack: ["Html", "Css", "JavaScript", "react"],
    accent: "#2563eb",
    light: "#eff6ff",
    initials: "KS",
    desc: "Loyihaning asosiy arxitektori. Full-stack rivojlantirish va jamoani boshqarishda 4+ yil tajriba. Tizim dizayni va texnik strategiya uchun mas'ul.",
  },
  {
    name: "Meliqoziyev Jo'rabek",
    role: "Frontend Developer",
    skills: ["React", "UI/UX Design", "Animation"],
    stack: ["Html", "Css", "JavaScript", "react"],
    accent: "#059669",
    light: "#ecfdf5",
    initials: "MJ",
    desc: "Foydalanuvchi interfeysi va tajribasini loyihalashda ixtisoslashgan. Zamonaviy responsive dizayn va murakkab animatsiyalarni amalga oshiradi.",
  },
  {
    name: "Usmonov Ilyosxoja",
    role: "Backend Engineer",
    skills: ["Python", "API Design", "AI/ML"],
    stack: ["Html", "Css", "JavaScript", "react"],
    accent: "#7c3aed",
    light: "#f5f3ff",
    initials: "UI",
    desc: "Backend infratuzilmasi va AI integratsiyasi bo'yicha mutaxassis. Ma'lumotlar bazasi optimizatsiyasi va mashinaviy o'rganish modellarini quradi.",
  },
  {
    name: "Muxtorov Rustambek",
    role: "Design Lead",
    skills: ["React Native", "CI/CD", "Cloud"],
    stack: ["Html", "Css", "JavaScript", "react"],
    accent: "#d97706",
    light: "#fffbeb",
    initials: "MR",
    desc: "Mobil ilovalar va bulut infratuzilmasini boshqarish bo'yicha tajribali muhandis. Deploy pipeline va monitoring tizimlarini sozlaydi.",
  },
];

const ROADMAP = [
  {
    phase: "IDEA",
    date: "Q1 2024",
    title: "G'oya va tadqiqot",
    status: "done",
    items: [
      "Bozor tahlili o'tkazildi",
      "Muammolar aniqlashtildi",
      "Maqsadli auditoriya belgilandi",
      "Raqobatchilar tahlil qilindi",
    ],
  },
  {
    phase: "PROTOTYPE",
    date: "Q2 2024",
    title: "Prototip bosqichi",
    status: "done",
    items: [
      "UI/UX dizayn yaratildi",
      "MVP arxitekturasi loyihalandi",
      "Texnik stack tanlandi",
      "Dastlabki demo ko'rsatildi",
    ],
  },
  {
    phase: "MVP",
    date: "Q3–Q4 2024",
    title: "MVP ishlab chiqish",
    status: "active",
    items: [
      "Asosiy funksiyalar qurilmoqda",
      "Beta foydalanuvchilar jalb qilinmoqda",
      "AI model o'qitilmoqda",
      "Foydalanuvchi fikri yig'ilmoqda",
    ],
  },
  {
    phase: "LAUNCHED",
    date: "Q1 2025",
    title: "Rasmiy ishga tushirish",
    status: "upcoming",
    items: [
      "App Store & Play Store",
      "Marketing kampaniya",
      "Muassasalar bilan shartnoma",
      "Kengaytirish rejasi",
    ],
  },
];

const TECH = [
  {
    step: "01",
    title: "Frontend",
    tech: ["React / Next.js", "TypeScript", "TailwindCSS"],
    ai: "Vercel v0 — UI generatsiya",
    accent: "#2563eb",
  },
  {
    step: "02",
    title: "Backend & API",
    tech: ["FastAPI (Python)", "Node.js", "GraphQL"],
    ai: "GitHub Copilot — kod yozish",
    accent: "#059669",
  },
  {
    step: "03",
    title: "AI / ML yadro",
    tech: ["OpenAI GPT-4o", "LangChain", "Pinecone"],
    ai: "Claude API — aqlli tahlil",
    accent: "#7c3aed",
  },
  {
    step: "04",
    title: "Ma'lumotlar bazasi",
    tech: ["PostgreSQL", "Redis (kesh)", "Supabase"],
    ai: "AI-powered semantic qidirish",
    accent: "#d97706",
  },
  {
    step: "05",
    title: "DevOps & Deploy",
    tech: ["Docker", "AWS / Vercel", "GitHub Actions"],
    ai: "Auto monitoring va scale",
    accent: "#dc2626",
  },
  {
    step: "06",
    title: "Mobil ilova",
    tech: ["React Native", "Expo", "Push notifications"],
    ai: "AI chatbot integratsiya",
    accent: "#0891b2",
  },
];

function HomeIcon({ s = 16, a }) {
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={a ? 2.2 : 1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1z" />
      <path d="M9 21V12h6v9" />
    </svg>
  );
}
function ProblemIcon({ s = 16, a }) {
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={a ? 2.2 : 1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v4M12 16h.01" />
    </svg>
  );
}
function TeamIcon({ s = 16, a }) {
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={a ? 2.2 : 1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="7" r="3" />
      <circle cx="17" cy="8" r="2.5" />
      <path d="M3 19c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M17 11c1.7 0 4 1.2 4 4" />
    </svg>
  );
}
function WhyIcon({ s = 16, a }) {
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={a ? 2.2 : 1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
function RoadIcon({ s = 16, a }) {
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={a ? 2.2 : 1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 17l6-6 4 4 8-8" />
      <circle cx="19" cy="7" r="2" />
      <circle cx="9" cy="11" r="2" />
      <circle cx="13" cy="15" r="2" />
      <circle cx="3" cy="17" r="2" />
    </svg>
  );
}
function PlanIcon({ s = 16, a }) {
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={a ? 2.2 : 1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  );
}
function DemoIcon({ s = 16, a }) {
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={a ? 2.2 : 1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

function Fade({ children }) {
  const [v, setV] = useState(false);
  useEffect(() => {
    const t = requestAnimationFrame(() => setV(true));
    return () => cancelAnimationFrame(t);
  }, []);
  return (
    <div
      style={{
        opacity: v ? 1 : 0,
        transform: v ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.3s ease, transform 0.3s ease",
      }}
    >
      {children}
    </div>
  );
}

function PH({ tag, title, sub }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <div
        style={{
          display: "inline-block",
          background: "#eff6ff",
          color: "#2563eb",
          borderRadius: 6,
          padding: "4px 12px",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "1px",
          marginBottom: 10,
        }}
      >
        {tag}
      </div>
      <h2
        style={{
          fontSize: 28,
          fontWeight: 800,
          color: "#0f172a",
          marginBottom: 8,
          lineHeight: 1.2,
        }}
      >
        {title}
      </h2>
      <p
        style={{
          fontSize: 14,
          color: "#64748b",
          maxWidth: 520,
          lineHeight: 1.7,
        }}
      >
        {sub}
      </p>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState("home");
  const [collapsed, setCollapsed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="app-container">
        {/* SIDEBAR */}
        <aside
          className={`sidebar ${collapsed ? "collapsed" : ""} ${menuOpen ? "mobile-open" : ""}`}
        >
          {/* Sidebar Header */}
          <div className="sidebar-header">
            <div className="sidebar-logo">
              <div className="logo-icon">M</div>
              <div className="logo-text">
                <h3>Mars IT</h3>
                <p>DEVELOPERS</p>
              </div>
            </div>
            <div className="sidebar-logo-only">M</div>
            {!collapsed && (
              <button
                className="sidebar-toggle"
                onClick={() => setCollapsed(true)}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
            )}
          </div>

          {/* Navigation */}
          <nav className="sidebar-nav">
            <div className="nav-label">MENYU</div>
            {PAGES.map((p) => {
              const isA = page === p.id;
              const Icon = p.icon;
              return (
                <button
                  key={p.id}
                  className={`nav-btn ${isA ? "active" : ""}`}
                  onClick={() => {
                    setPage(p.id);
                    closeMobileMenu();
                  }}
                  title={collapsed ? p.label : undefined}
                >
                  <span className="nav-btn-icon">
                    <Icon s={16} a={isA} />
                  </span>
                  <span className="nav-btn-text">{p.label}</span>
                  {isA && <span className="nav-indicator" />}
                </button>
              );
            })}
          </nav>

          {/* Expand Button */}
          {collapsed && (
            <button
              className="sidebar-expand-btn"
              onClick={() => setCollapsed(false)}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          )}

          {/* Footer */}
          {!collapsed && (
            <div className="sidebar-footer">
              Mars IT Developers
              <br />
              <span>Toshkent, 2024</span>
            </div>
          )}
        </aside>

        {/* SIDEBAR OVERLAY (Mobile) */}
        <div
          className={`sidebar-overlay ${menuOpen ? "active" : ""}`}
          onClick={closeMobileMenu}
        />

        {/* MAIN CONTENT */}
        <div className="main-wrapper">
          {/* Header */}
          <header className="header">
            <button
              className="hamburger-menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
            <span className="header-title">
              {PAGES.find((p) => p.id === page)?.label}
            </span>
            <div className="header-right">
              <div className="status-badge">
                <span className="pulse-dot" />
                Beta bosqichi
              </div>
              <div className="user-avatar">M</div>
            </div>
          </header>

          {/* Page Content */}
          <main className="page-content">
            {page === "home" && <HomePage nav={setPage} />}
            {page === "problem" && <ProblemPage />}
            {page === "team" && <TeamPage />}
            {page === "why" && <WhyPage />}
            {page === "roadmap" && <RoadmapPage />}
            {page === "plan" && <PlanPage />}
            {page === "demo" && <DemoPage nav={setPage} />}
          </main>
        </div>
      </div>
      {/* Sidebar overlay click handler */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1,
            background: "rgba(0,0,0,0.5)",
          }}
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
}

/* ── HOME ── */
function HomePage({ nav }) {
  return (
    <Fade>
      <div className="page-wrapper">
        <div
          style={{
            background:
              "linear-gradient(140deg,#0f172a 0%,#1e1b4b 55%,#0c2a4a 100%)",
            borderRadius: 20,
            padding: "52px 48px",
            color: "white",
            position: "relative",
            overflow: "hidden",
            marginBottom: 28,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.04,
              backgroundImage:
                "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              background: "rgba(59,130,246,.18)",
              border: "1px solid rgba(59,130,246,.3)",
              borderRadius: 20,
              padding: "5px 14px",
              marginBottom: 22,
              fontSize: 11,
              color: "#93c5fd",
              letterSpacing: ".5px",
              fontWeight: 500,
            }}
          >
            O'ZBEKISTON — TA'LIM TEXNOLOGIYALARI
          </div>
          <h1
            style={{
              fontSize: 42,
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: 16,
              maxWidth: 580,
            }}
          >
            Ta'lim sohasida{" "}
            <span style={{ color: "#60a5fa" }}>sun'iy intellekt</span> inqilobi
          </h1>
          <p
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,.6)",
              maxWidth: 500,
              lineHeight: 1.8,
              marginBottom: 32,
            }}
          >
            EduMars — O'zbekistondagi maktablar va o'quv markazlari uchun AI
            asosida ishlaydigan aqlli boshqaruv platformasi.
          </p>
          <div style={{ display: "flex", gap: 12 }}></div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 40,
              marginTop: 40,
              paddingTop: 32,
              borderTop: "1px solid rgba(255,255,255,.1)",
            }}
          >
            {[
              ["9,900+", "O'zbekiston maktablari"],
              ["~6 million", "O'quvchilar"],
              ["4 kishi", "Jamoa a'zolari"],
            ].map(([n, l]) => (
              <div key={l}>
                <div
                  style={{ fontSize: 20, fontWeight: 800, color: "#60a5fa" }}
                >
                  {n}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "rgba(255,255,255,.4)",
                    marginTop: 3,
                  }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid-3" style={{ gap: 14, marginBottom: 28 }}>
          {[
            {
              id: "problem",
              title: "Muammo & Yechim",
              desc: "Nima uchun bu platforma kerak",
              c: "#dc2626",
              bg: "#fef2f2",
              bd: "#fecaca",
            },
            {
              id: "team",
              title: "Jamoa",
              desc: "4 nafar ixtisoslashgan dasturchi",
              c: "#7c3aed",
              bg: "#faf5ff",
              bd: "#ddd6fe",
            },
            {
              id: "roadmap",
              title: "Yo'l xaritasi",
              desc: "Idea dan Launch gacha bosqichlar",
              c: "#0891b2",
              bg: "#ecfeff",
              bd: "#a5f3fc",
            },
            {
              id: "why",
              title: "Nega biz?",
              desc: "Raqobat afzalliklari va kuchimiz",
              c: "#059669",
              bg: "#f0fdf4",
              bd: "#bbf7d0",
            },
            {
              id: "plan",
              title: "Texnologiyalar",
              desc: "Stack, AI vositalari va rejalar",
              c: "#d97706",
              bg: "#fffbeb",
              bd: "#fde68a",
            },
            {
              id: "demo",
              title: "Demo",
              desc: "Video namoyish va prototip",
              c: "#2563eb",
              bg: "#eff6ff",
              bd: "#bfdbfe",
            },
          ].map((c) => (
            <button
              key={c.id}
              onClick={() => nav(c.id)}
              style={{
                background: c.bg,
                border: `1.5px solid ${c.bd}`,
                borderRadius: 14,
                padding: "18px 20px",
                cursor: "pointer",
                textAlign: "left",
                transition: "all .18s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: c.c,
                  marginBottom: 5,
                }}
              >
                {c.title}
              </div>
              <div style={{ fontSize: 12, color: "#64748b", lineHeight: 1.5 }}>
                {c.desc}
              </div>
              <div
                style={{
                  marginTop: 10,
                  fontSize: 11,
                  color: c.c,
                  fontWeight: 500,
                }}
              >
                Ko'rish →
              </div>
            </button>
          ))}
        </div>
      </div>
    </Fade>
  );
}

/* ── PROBLEM ── */
function ProblemPage() {
  return (
    <Fade>
      <div className="page-wrapper">
        <PH
          tag="01 — Muammo & Yechim"
          title="Qanday muammoni hal qilayapmiz?"
          sub="O'zbekistondagi ta'lim muassasalari boshqaruvida mavjud bo'shliqlar"
        />
        <div className="grid-2" style={{ gap: 22, marginBottom: 28 }}>
          <div
            style={{
              background: "#fff",
              border: "1.5px solid #fecaca",
              borderRadius: 16,
              padding: 28,
            }}
          >
            <div
              style={{
                display: "inline-block",
                background: "#fef2f2",
                color: "#dc2626",
                borderRadius: 6,
                padding: "3px 10px",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "1px",
                marginBottom: 16,
              }}
            >
              MUAMMO
            </div>
            <h3
              style={{
                fontSize: 17,
                fontWeight: 700,
                color: "#7f1d1d",
                marginBottom: 16,
                lineHeight: 1.4,
              }}
            >
              Ta'lim muassasalari hali ham qog'oz va excel'da
            </h3>
            {[
              "Davomat va baholarni qo'lda yuritish — xato va vaqt yo'qotish",
              "O'qituvchilar admin ishlar bilan haddan tashqari band",
              "Ota-onalar bolalari haqida real-time ma'lumot ololmaydi",
              "Tahliliy hisobotlar yo'q — ko'r-ko'rona qaror qabul qilish",
              "Turli tizimlar: Excel, Telegram, qog'oz — hamohanglik yo'q",
            ].map((p, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 9,
                  marginBottom: 9,
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: 15,
                    height: 15,
                    borderRadius: "50%",
                    background: "#fecaca",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  <svg width="7" height="7" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 2l8 8M10 2l-8 8"
                      stroke="#dc2626"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <span
                  style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6 }}
                >
                  {p}
                </span>
              </div>
            ))}
          </div>
          <div
            style={{
              background: "#fff",
              border: "1.5px solid #bbf7d0",
              borderRadius: 16,
              padding: 28,
            }}
          >
            <div
              style={{
                display: "inline-block",
                background: "#f0fdf4",
                color: "#15803d",
                borderRadius: 6,
                padding: "3px 10px",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "1px",
                marginBottom: 16,
              }}
            >
              YECHIM
            </div>
            <h3
              style={{
                fontSize: 17,
                fontWeight: 700,
                color: "#14532d",
                marginBottom: 16,
                lineHeight: 1.4,
              }}
            >
              EduMars — AI asosidagi yagona boshqaruv platformasi
            </h3>
            {[
              "AI avtomatik davomat, baho va reyting tizimi sozlanadi",
              "O'qituvchilar faqat o'qitishga e'tibor beradi — AI boshqaradi",
              "Ota-onalar ilovada real-time bildirishnomalar oladi",
              "AI tahlil: yillik ma'lumotlar asosida bashorat va tavsiyalar",
              "Yagona platforma: davomat, baholar, to'lovlar, aloqa",
            ].map((p, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 9,
                  marginBottom: 9,
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: 15,
                    height: 15,
                    borderRadius: "50%",
                    background: "#bbf7d0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  <svg width="7" height="7" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6l3 3 5-5"
                      stroke="#15803d"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span
                  style={{ fontSize: 13, color: "#475569", lineHeight: 1.6 }}
                >
                  {p}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid-4" style={{ gap: 14, marginBottom: 28 }}>
          {[
            { n: "9,900+", l: "Maktablar", c: "#2563eb", bg: "#eff6ff" },
            { n: "~6M", l: "O'quvchilar", c: "#7c3aed", bg: "#faf5ff" },
            { n: "72%", l: "Raqamlanmagan", c: "#dc2626", bg: "#fef2f2" },
            {
              n: "$2.4B",
              l: "EdTech bozori 2026",
              c: "#059669",
              bg: "#f0fdf4",
            },
          ].map(({ n, l, c, bg }) => (
            <div
              key={l}
              style={{
                background: bg,
                borderRadius: 12,
                padding: "20px 16px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 26, fontWeight: 800, color: c }}>{n}</div>
              <div style={{ fontSize: 11, color: "#64748b", marginTop: 4 }}>
                {l}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            background: "#0f172a",
            borderRadius: 14,
            padding: "26px 28px",
            marginTop: 22,
            color: "white",
          }}
        >
          <h3
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: "#60a5fa",
              marginBottom: 10,
            }}
          >
            Nima uchun aynan hozir?
          </h3>
          <p
            style={{
              fontSize: 13,
              color: "rgba(255,255,255,.6)",
              lineHeight: 1.8,
              maxWidth: 660,
            }}
          >
            O'zbekistonda raqamlashtirish strategiyasi 2030 dasturi doirasida
            ta'lim sektori prioritet hisoblanadi. Hukumat ta'lim IT
            startaplarini qo'llab-quvvatlaydi. Bozorga birinchi katta platforma
            sifatida kirib, erta foydalanuvchi bazasini shakllantirish imkonimiz
            bor.
          </p>
        </div>
      </div>
    </Fade>
  );
}

/* ── TEAM ── */
function TeamPage() {
  const [open, setOpen] = useState(null);
  return (
    <Fade>
      <div className="page-wrapper">
        <PH
          tag="02 — Jamoa"
          title="Mars IT Developers"
          sub="To'rt nafar ixtisoslashgan muhandis birgalikda ishlayapti"
        />
        <div className="grid-2" style={{ gap: 18, marginBottom: 28 }}>
          {TEAM.map((m, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                borderRadius: 16,
                overflow: "hidden",
                border: `1.5px solid ${open === i ? m.accent + "44" : "#e2e8f0"}`,
                transition: "all .22s",
                boxShadow: open === i ? `0 8px 28px ${m.accent}14` : "none",
              }}
            >
              <div style={{ padding: "22px 22px 18px" }}>
                <div
                  style={{
                    display: "flex",
                    gap: 13,
                    alignItems: "center",
                    marginBottom: 14,
                  }}
                >
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 13,
                      background: m.light,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 15,
                      fontWeight: 800,
                      color: m.accent,
                      border: `2px solid ${m.accent}22`,
                      flexShrink: 0,
                    }}
                  >
                    {m.initials}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: 14,
                        color: "#0f172a",
                      }}
                    >
                      {m.name}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: m.accent,
                        fontWeight: 500,
                        marginTop: 2,
                      }}
                    >
                      {m.role}
                    </div>
                  </div>
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 8,
                      background: m.light,
                      border: "none",
                      cursor: "pointer",
                      color: m.accent,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      style={{
                        transform: open === i ? "rotate(180deg)" : "rotate(0)",
                        transition: "transform .22s",
                      }}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: "#64748b",
                    lineHeight: 1.7,
                    marginBottom: 12,
                  }}
                >
                  {m.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                  {m.skills.map((s) => (
                    <span
                      key={s}
                      style={{
                        background: m.light,
                        color: m.accent,
                        borderRadius: 5,
                        padding: "3px 9px",
                        fontSize: 11,
                        fontWeight: 600,
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              {open === i && (
                <div
                  style={{
                    borderTop: `1px solid ${m.accent}22`,
                    padding: "16px 22px",
                    background: m.light,
                  }}
                >
                  <div
                    style={{
                      fontSize: 10,
                      color: m.accent,
                      letterSpacing: "1.5px",
                      fontWeight: 700,
                      marginBottom: 9,
                    }}
                  >
                    TEXNOLOGIYALAR STAKI
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 5,
                      marginBottom: 14,
                    }}
                  >
                    {m.stack.map((t) => (
                      <span
                        key={t}
                        style={{
                          background: "white",
                          color: "#475569",
                          borderRadius: 5,
                          padding: "3px 10px",
                          fontSize: 11,
                          border: "1px solid #e2e8f0",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div
          style={{
            background: "linear-gradient(135deg,#0f172a,#1e1b4b)",
            borderRadius: 16,
            padding: "26px 30px",
            color: "white",
            display: "flex",
            alignItems: "center",
            gap: 32,
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: 1, minWidth: 200 }}>
            <div
              style={{
                fontSize: 10,
                color: "#60a5fa",
                letterSpacing: "1.5px",
                fontWeight: 700,
                marginBottom: 8,
              }}
            >
              JAMOA HAQIDA
            </div>
            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,.6)",
                lineHeight: 1.75,
              }}
            >
              2025-yilda Mars IT School bitiruvchilari — Usmonov Ilyosxoja,
              Muxtorov Rustam, Karimov Sarvar va Jorabek Meliqoziyev tomonidan
              tashkil topgan Mars IT Developers jamoasi EduMars loyihasi orqali
              O'zbekistondagi ta'lim muassasalarini raqamlashtirish va AI
              yordamida samaradorlikni oshirishni maqsad qilgan.
            </p>
          </div>
          <div style={{ display: "flex", gap: 28 }}>
            {[
              ["4", "Jamoa a'zosi"],
              ["2025", "Tashkil yili"],
              ["MVP", "Hozirgi bosqich"],
            ].map(([n, l]) => (
              <div key={l} style={{ textAlign: "center" }}>
                <div
                  style={{ fontSize: 24, fontWeight: 800, color: "#60a5fa" }}
                >
                  {n}
                </div>
                <div
                  style={{
                    fontSize: 10,
                    color: "rgba(255,255,255,.35)",
                    marginTop: 3,
                  }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}

/* ── WHY ── */
function WhyPage() {
  return (
    <Fade>
      <div className="page-wrapper">
        <PH
          tag="03 — Nega biz?"
          title="Jamoamizning afzalliklari"
          sub="Bu muammoni aynan biz hal qila olishimizning sabablari"
        />
        <div className="grid-3" style={{ gap: 16, marginBottom: 28 }}>
          {[
            {
              title: "Mahalliy kontekst",
              text: "Jamoa a'zolari O'zbekiston ta'lim tizimini ichidan biladi. Muammolarni shaxsan boshdan kechirganmiz.",
              accent: "#2563eb",
              bg: "#eff6ff",
              bd: "#bfdbfe",
            },
            {
              title: "Tez harakat",
              text: "Kichik agile jamoa sifatida biz katta korporatsiyalardan ancha tez harakat qilish va yangilash imkoniga egamiz.",
              accent: "#7c3aed",
              bg: "#faf5ff",
              bd: "#ddd6fe",
            },
            {
              title: "AI ixtisoslashuvi",
              text: "OpenAI, LangChain, Claude API va mahalliy modellar bilan ishlash tajribasi. GPT-4o va o'zbek tili uchun fine-tuning.",
              accent: "#059669",
              bg: "#f0fdf4",
              bd: "#bbf7d0",
            },
            {
              title: "Full-stack qobiliyat",
              text: "Frontend, backend, mobile va devops — jamoa ichida barcha texnik kompetensiyalar mavjud.",
              accent: "#d97706",
              bg: "#fffbeb",
              bd: "#fde68a",
            },
            {
              title: "Chuqur tushunish",
              text: "Faqat texnologiya emas — ta'lim metodikasi, qonunchilik va maktab ichki jarayonlarini bilamiz.",
              accent: "#dc2626",
              bg: "#fef2f2",
              bd: "#fecaca",
            },
            {
              title: "Kengayish rejasi",
              text: "O'zbekistondan boshlagan holda, Markaziy Osiyo mamlakatlarini egallash aniq strategiyasi bor.",
              accent: "#0891b2",
              bg: "#ecfeff",
              bd: "#a5f3fc",
            },
          ].map((c, i) => (
            <div
              key={i}
              style={{
                background: c.bg,
                border: `1.5px solid ${c.bd}`,
                borderRadius: 14,
                padding: "20px 18px",
                transition: "all .18s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = `0 10px 24px ${c.accent}16`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: c.accent,
                  marginBottom: 12,
                }}
              />
              <h4
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: c.accent,
                  marginBottom: 7,
                }}
              >
                {c.title}
              </h4>
              <p style={{ fontSize: 12, color: "#475569", lineHeight: 1.7 }}>
                {c.text}
              </p>
            </div>
          ))}
        </div>
        <div
          style={{
            background: "#fff",
            borderRadius: 14,
            border: "1px solid #e2e8f0",
            overflow: "hidden",
          }}
        >
          <div
            style={{ padding: "18px 22px", borderBottom: "1px solid #f1f5f9" }}
          >
            <h3 style={{ fontSize: 14, fontWeight: 700, color: "#0f172a" }}>
              Raqobatchilar bilan taqqoslash
            </h3>
          </div>
          <table
            style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}
          >
            <thead>
              <tr style={{ background: "#f8fafc" }}>
                {["Xususiyat", "EduMars", "Raqobatchi A", "Raqobatchi B"].map(
                  (h, i) => (
                    <th
                      key={i}
                      style={{
                        padding: "10px 20px",
                        textAlign: i === 0 ? "left" : "center",
                        fontWeight: 600,
                        color: i === 1 ? "#2563eb" : "#64748b",
                        borderBottom: "1px solid #e2e8f0",
                        fontSize: 11,
                      }}
                    >
                      {h}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {[
                ["O'zbek tili", "To'liq", "Qisman", "Yo'q"],
                ["AI tahlil", "Mavjud", "Yo'q", "Yo'q"],
                ["Mobil ilova", "iOS & Android", "Faqat web", "iOS"],
                ["Narxi", "Arzon", "O'rta", "Qimmat"],
                ["Mahalliy qo'llab-quvvatlash", "7/24", "Yo'q", "Cheklangan"],
              ].map((row, ri) => (
                <tr key={ri} style={{ borderBottom: "1px solid #f1f5f9" }}>
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      style={{
                        padding: "10px 20px",
                        textAlign: ci === 0 ? "left" : "center",
                        color:
                          ci === 1
                            ? "#059669"
                            : ci === 0
                              ? "#374151"
                              : "#94a3b8",
                        fontWeight: ci === 1 ? 600 : 400,
                      }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Fade>
  );
}

/* ── PLAN ── */
function PlanPage() {
  return (
    <Fade>
      <div className="page-wrapper">
        <PH
          tag="05 — Amalga oshirish"
          title="Texnologiyalar va rejalar"
          sub="Bosqichlar, texnologiyalar staki va AI vositalari"
        />
        <div className="grid-3" style={{ gap: 14, marginBottom: 26 }}>
          {TECH.map((s, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                border: "1.5px solid #e2e8f0",
                borderRadius: 14,
                padding: "20px 18px",
                transition: "all .18s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = s.accent + "55";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = `0 8px 20px ${s.accent}12`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#e2e8f0";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 9,
                  marginBottom: 12,
                }}
              >
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 8,
                    background: s.accent + "14",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 11,
                    fontWeight: 800,
                    color: s.accent,
                  }}
                >
                  {s.step}
                </div>
                <h4 style={{ fontSize: 13, fontWeight: 700, color: "#0f172a" }}>
                  {s.title}
                </h4>
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 4,
                  marginBottom: 12,
                }}
              >
                {s.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      background: "#f8fafc",
                      color: "#475569",
                      borderRadius: 5,
                      padding: "3px 8px",
                      fontSize: 11,
                      border: "1px solid #e2e8f0",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div
                style={{
                  background: s.accent + "0e",
                  borderRadius: 7,
                  padding: "7px 10px",
                  fontSize: 11,
                  color: s.accent,
                  fontWeight: 500,
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <div
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: s.accent,
                    animation: "pulse 2s infinite",
                  }}
                />
                {s.ai}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            background: "#0f172a",
            borderRadius: 14,
            padding: "24px 28px",
            marginBottom: 18,
          }}
        >
          <h3
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: "#60a5fa",
              marginBottom: 18,
            }}
          >
            Tizim arxitekturasi
          </h3>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              flexWrap: "wrap",
            }}
          >
            {[
              { label: "Mobil / Web", c: "#60a5fa" },
              null,
              { label: "API Gateway", c: "#a78bfa" },
              null,
              { label: "AI Engine", c: "#f472b6" },
              null,
              { label: "Database", c: "#34d399" },
            ].map((item, i) =>
              item === null ? (
                <svg
                  key={i}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#334155"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M5 12h14M14 6l6 6-6 6" />
                </svg>
              ) : (
                <div
                  key={i}
                  style={{
                    background: "rgba(255,255,255,.05)",
                    borderRadius: 9,
                    padding: "10px 18px",
                    border: `1px solid ${item.c}33`,
                    flex: 1,
                    minWidth: 90,
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: 11, color: item.c, fontWeight: 600 }}>
                    {item.label}
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
        <div
          style={{
            background: "#fff",
            borderRadius: 12,
            border: "1px solid #e2e8f0",
            overflow: "hidden",
          }}
        >
          <div
            style={{ padding: "16px 22px", borderBottom: "1px solid #f1f5f9" }}
          >
            <h3 style={{ fontSize: 13, fontWeight: 700, color: "#0f172a" }}>
              Ishlab chiqish jadvali
            </h3>
          </div>
          <div style={{ padding: "16px 22px" }}>
            {[
              {
                period: "1–2 oy",
                task: "Asosiy backend va auth tizimi",
                pct: 80,
                c: "#2563eb",
              },
              {
                period: "2–3 oy",
                task: "Frontend dashboard va mobil ilova",
                pct: 60,
                c: "#7c3aed",
              },
              {
                period: "3–4 oy",
                task: "AI tahlil moduli integratsiya",
                pct: 40,
                c: "#059669",
              },
              {
                period: "4–5 oy",
                task: "Beta test va optimallashtirish",
                pct: 20,
                c: "#d97706",
              },
              {
                period: "6+ oy",
                task: "Rasmiy launch va marketing",
                pct: 5,
                c: "#dc2626",
              },
            ].map((item, i) => (
              <div key={i} style={{ marginBottom: 13 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 4,
                    fontSize: 12,
                  }}
                >
                  <span style={{ color: "#475569" }}>
                    <b style={{ color: "#0f172a" }}>{item.period}:</b>{" "}
                    {item.task}
                  </span>
                  <span style={{ color: item.c, fontWeight: 600 }}>
                    {item.pct}%
                  </span>
                </div>
                <div
                  style={{
                    height: 5,
                    background: "#f1f5f9",
                    borderRadius: 3,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${item.pct}%`,
                      background: item.c,
                      borderRadius: 3,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}

/* ── DEMO ── */
function DemoPage({ nav }) {
  return (
    <Fade>
      <div className="page-wrapper">
        <PH
          tag="06 — Demo"
          title="Loyiha namoyishi"
          sub="Demo-video, tavsif va ishlaydigan prototip havolasi"
        />
       
        <div className="demo-video-frame">
          <video controls className="demo-video" preload="metadata">
            <source src={video} type="video/mp4" />
            Browseringiz video tegi qo'llab-quvvatlamaydi.
          </video>
        </div>
        <div className="grid-2 demo-grid">
          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              border: "1px solid #e2e8f0",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "18px 22px",
                borderBottom: "1px solid #f1f5f9",
              }}
            >
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "#0f172a" }}>
                Sayt tavsifi
              </h3>
            </div>
            <div style={{ padding: "18px 22px" }}>
              <p
                style={{
                  fontSize: 13,
                  color: "#64748b",
                  lineHeight: 1.75,
                  marginBottom: 16,
                }}
              >
                Bu sayt Mars IT Developers jamoasining EduMars loyihasini taqdim
                etish uchun yaratilgan musobaqa demo-platformasi. Saytda
                muammoning kelib chiqishi va uning yechimi, jamoa tarkibi va har
                bir a'zoning roli, loyihaning yo'l xaritasi, texnologiyalar
                staki hamda demo-video batafsil ko'rsatilgan. Loyiha 2025-yilda
                Mars IT School bitiruvchilari — Usmonov Ilyosxoja, Muxtorov
                Rustambek, Karimov Sarvar va Meliqoziyev Jo'rabek tomonidan
                tashkil topgan. Jamoaning maqsadi — zamonaviy AI texnologiyalar
                yordamida ta'lim muassasalarini raqamlashtirish va boshqaruvni
                soddalashtirish.
              </p>

              {/* Jamoa kartochkalari */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {[
                  {
                    name: "Usmonov Ilyosxoja",
                    initials: "UI",
                    color: "#2563eb",
                  },
                  { name: "Muxtorov Rustam", initials: "MR", color: "#7c3aed" },
                  { name: "Karimov Sarvar", initials: "KS", color: "#059669" },
                  {
                    name: "Jorabek Meliqoziyev",
                    initials: "JM",
                    color: "#d97706",
                  },
                ].map((member) => (
                  <div
                    key={member.name}
                    onClick={() => nav("team")}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      background: member.color + "10",
                      border: `1.5px solid ${member.color}30`,
                      borderRadius: 10,
                      padding: "8px 12px",
                      cursor: "pointer",
                      transition: "all .18s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = `0 4px 12px ${member.color}25`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        background: member.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 10,
                        fontWeight: 700,
                        color: "#fff",
                        flexShrink: 0,
                      }}
                    >
                      {member.initials}
                    </div>
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#0f172a",
                      }}
                    >
                      {member.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <p
                style={{
                  fontSize: 13,
                  color: "#64748b",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                Biznesingizga mos blogerlarni topish imkonini beruvchi platforma
                — Adbloger.uz orqali o'z mahsulot yoki xizmatingizni to'g'ri
                auditoriyaga yetkazishingiz mumkin.
              </p>

              <div
                onClick={() =>
                  window.open("https://www.adbloger.uz/", "_blank")
                }
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  background: "#eff6ff",
                  border: "1.5px solid #bfdbfe",
                  borderRadius: 11,
                  padding: "14px 16px",
                  transition: "all .18s",
                  color: "inherit",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateX(3px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateX(0)")
                }
              >
                <div
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "#2563eb",
                    flexShrink: 0,
                  }}
                />
                <div style={{ flex: 1 }}>
                  <div
                    style={{ fontSize: 13, fontWeight: 600, color: "#2563eb" }}
                  >
                    Adbloger.uz
                  </div>
                  <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 2 }}>
                    adbloger.uz
                  </div>
                </div>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#94a3b8"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M5 12h14M14 6l6 6-6 6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
