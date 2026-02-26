import { useEffect, useRef, useState, type FormEvent } from "react";

// ─── Hook: Intersection Observer ─────────────────────────────────────────────
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const SOCIAL_LINKS = [
  {
    label: "Instagram",
    handle: "@itobot6038",
    href: "https://instagram.com/itobot6038",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    color: "from-purple-500 to-pink-500",
    textColor: "text-pink-400",
  },
  {
    label: "YouTube",
    handle: "ItoBot 6038",
    href: "https://www.youtube.com/@ITOBOT",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    color: "from-red-600 to-red-500",
    textColor: "text-red-400",
  },
  {
    label: "GitHub",
    handle: "itobot6038",
    href: "https://github.com/frc6038",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    color: "from-slate-600 to-slate-500",
    textColor: "text-slate-300",
  },
  {
    label: "Chief Delphi",
    handle: "Team 6038",
    href: "https://www.chiefdelphi.com/u/frc-itobot/summary",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
      </svg>
    ),
    color: "from-cyan-600 to-blue-500",
    textColor: "text-cyan-400",
  },
];

const INFO_CARDS = [
  {
    icon: "📍",
    label: "Konum",
    value: "İstanbul, Türkiye",
    sub: "İstanbul Teknik Üniversitesi",
  },
  {
    icon: "✉️",
    label: "E-Posta",
    value: "itobot6038@gmail.com",
    sub: "Genellikle 24 saat içinde yanıt",
  },
  {
    icon: "🏆",
    label: "FRC Takım Numarası",
    value: "#6038",
    sub: "FIRST Robotics Competition",
  },
];

// ─── Contact Form ─────────────────────────────────────────────────────────────
function ContactForm() {
  const { ref, visible } = useInView(0.15);
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`[ItoBot 6038] - ${form.name}`);
    const body = encodeURIComponent(
      `Gönderen: ${form.name}\nE-Posta: ${form.email}\n\n${form.message}`,
    );
    window.location.href = `mailto:itobot6038@gmail.com?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="glass-panel glow-border rounded-2xl p-8 md:p-10">
        <p className="section-title mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
          Mesaj Gönder
        </p>
        <h2 className="section-title mb-6 text-3xl font-bold uppercase text-white md:text-4xl">
          Bize Ulaş
        </h2>

        {status === "sent" ? (
          <div className="flex flex-col items-center gap-4 py-12 text-center">
            <span className="text-5xl">🚀</span>
            <p className="text-lg font-semibold text-cyan-400">
              Mesajın hazır!
            </p>
            <p className="text-sm text-slate-400">
              E-posta uygulamanız açıldı. Gönder'e tıklayarak mesajını
              iletebilirsin.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-2 rounded-lg border border-cyan-400/30 px-5 py-2 text-sm text-cyan-300 transition-colors hover:bg-cyan-400/10"
            >
              Yeni Mesaj
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Adın
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Ali Yılmaz"
                  className="rounded-xl border border-slate-700/60 bg-slate-800/50 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/30"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  E-Posta
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="ali@ornek.com"
                  className="rounded-xl border border-slate-700/60 bg-slate-800/50 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/30"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Mesajın
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Merhaba ItoBot ekibi, ..."
                className="resize-none rounded-xl border border-slate-700/60 bg-slate-800/50 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/30"
              />
            </div>
            <button
              type="submit"
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02] hover:shadow-cyan-500/40 active:scale-[0.98]"
            >
              <span className="relative z-10">Gönder →</span>
              <span className="absolute inset-0 translate-x-full bg-white/10 transition-transform duration-300 group-hover:translate-x-0" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

// ─── Social Links ─────────────────────────────────────────────────────────────
function SocialSection() {
  const { ref, visible } = useInView(0.2);
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 delay-100 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="glass-panel rounded-2xl p-8 md:p-10">
        <p className="section-title mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-blue-300">
          Sosyal Medya
        </p>
        <h2 className="section-title mb-6 text-3xl font-bold uppercase text-white md:text-4xl">
          Bizi Takip Et
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {SOCIAL_LINKS.map((s, i) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-4 rounded-xl border border-slate-700/60 bg-slate-800/30 p-4 transition-all duration-300 hover:scale-[1.02] hover:border-slate-600`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div
                className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${s.color} ${s.textColor} shadow-lg transition-transform duration-300 group-hover:scale-110`}
              >
                {s.icon}
              </div>
              <div>
                <p className="text-sm font-bold text-white">{s.label}</p>
                <p className={`text-xs ${s.textColor}`}>{s.handle}</p>
              </div>
              <span className="ml-auto text-slate-600 transition-colors group-hover:text-slate-300">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Info Cards ───────────────────────────────────────────────────────────────
function InfoCards() {
  const { ref, visible } = useInView(0.2);
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 delay-150 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="grid gap-4 md:grid-cols-3">
        {INFO_CARDS.map((c, i) => (
          <div
            key={c.label}
            className="glass-panel flex flex-col items-center gap-3 rounded-2xl p-6 text-center transition-all duration-300 hover:scale-[1.03] hover:border-cyan-400/30"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <span className="text-3xl">{c.icon}</span>
            <p className="section-title text-xs font-semibold uppercase tracking-widest text-slate-400">
              {c.label}
            </p>
            <p className="font-bold text-white">{c.value}</p>
            <p className="text-xs text-slate-500">{c.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function HeroSection() {
  const { ref, visible } = useInView(0.1);
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <p className="section-title mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-cyan-400">
        İletişim · Contact Wing
      </p>
      <h1 className="section-title text-5xl font-bold uppercase leading-tight text-white md:text-6xl lg:text-7xl">
        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Bize
        </span>{" "}
        Ulaş
      </h1>
      <p className="mt-4 max-w-xl text-base text-slate-400 md:text-lg">
        Sorularınız, iş birliği teklifleriniz veya FRC hakkındaki merakınız için
        — kapımız her zaman açık.
      </p>
      <div className="mt-6 flex items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/60 to-transparent" />
        <span className="text-xs uppercase tracking-widest text-slate-500">
          Team 6038
        </span>
        <div className="h-px flex-1 bg-gradient-to-l from-blue-500/40 to-transparent" />
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ContactPage() {
  return (
    <section className="relative overflow-hidden pb-28 pt-28">
      {/* Background effects */}
      <div className="museum-grid absolute inset-0 opacity-20" />
      <div className="absolute right-1/4 top-24 h-96 w-96 translate-x-1/2 rounded-full bg-blue-500/10 blur-[160px]" />
      <div className="absolute left-1/4 top-64 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[130px]" />

      <div className="relative mx-auto w-full max-w-6xl space-y-16 px-5 md:px-10">
        <HeroSection />
        <InfoCards />
        <div className="grid gap-10 lg:grid-cols-2">
          <ContactForm />
          <SocialSection />
        </div>
      </div>
    </section>
  );
}
