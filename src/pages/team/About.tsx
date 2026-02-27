import { useEffect, useRef, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  highlight?: boolean;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const TIMELINE: TimelineEvent[] = [
  {
    year: "2015",
    title: "Kuruluş — The Spark",
    description:
      "Itobot, FRC'ye katılım tutkusuyla bir araya gelen küçük bir öğrenci ve mentor grubunca kuruldu. Bilim, teknoloji ve takım çalışması temel taşlarımız oldu.",
    highlight: false,
  },
  {
    year: "2016",
    title: "İlk Bölgesel Başarı",
    description:
      "FRC Türkiye'ye ilk kez geldiğinde tüm organizasyonlar off-season olarak düzenlendi. Takımımız bu yarışmada büyük başarı göstererek yurt dışında da rekabet etti.",
    highlight: true,
  },
  {
    year: "2017–2019",
    title: "Büyüme & Topluluk Etkisi",
    description:
      "STEM outreach programları, genç öğrencilere mentorluk ve topluluk atölyeleriyle erimizi genişlettik. Her sezon yeni üyeler, yeni fikirler.",
    highlight: false,
  },
  {
    year: "2020",
    title: "Pandemi — Adaptasyon",
    description:
      "COVID-19'un gölgesinde uzaktan çalışma ve sanal etkinliklerle takımımızın uyum gücünü kanıtladık. Zorluklar bizi daha da güçlendirdi.",
    highlight: false,
  },
  {
    year: "2021–2022",
    title: "Yeniden Toparlanma",
    description:
      "Tasarım, yazılım ve outreach birimlerimizi yeniden yapılandırdık. Bölgesel turnuvalarda güçlü performanslarla sahneye döndük.",
    highlight: false,
  },
  {
    year: "Tarihi Sezon",
    title: "1 Sezonda 4 Ödül",
    description:
      "En parlak sezonumuzu yaşadık: Bölgesel 1. Lik, Quality Award, Woodie Flowers ve Best Alumni ödüllerini tek sezonda kazandık.",
    highlight: true,
  },
  {
    year: "Günümüz",
    title: "10 Sezon & Ötesi",
    description:
      "18 aktif üye, onlarca mentor ve mezundan oluşan ailemizle her geçen yıl daha güçlü büyüyoruz. Küresel robotik haritasındaki yerimizi sağlamlaştırıyoruz.",
    highlight: true,
  },
];

const FRC_VALUES = [
  {
    emoji: "🏆",
    title: "Gracious Professionalism",
    desc: "Encouraging high-quality work, emphasizing the value of others, and respecting individuals and the community.",
    color: "from-yellow-500/20 to-yellow-400/5",
    border: "border-yellow-400/25",
    text: "text-yellow-300",
  },
  {
    emoji: "🤝",
    title: "Coopertition",
    desc: "Displaying unqualified kindness and respect in the face of fierce competition.",
    color: "from-blue-500/20 to-blue-400/5",
    border: "border-blue-400/25",
    text: "text-blue-300",
  },
  {
    emoji: "👥",
    title: "Teamwork",
    desc: "Learning to work together effectively to achieve common goals and overcome challenges.",
    color: "from-cyan-500/20 to-cyan-400/5",
    border: "border-cyan-400/25",
    text: "text-cyan-300",
  },
  {
    emoji: "💡",
    title: "Innovation",
    desc: "Encouraging creative thinking and problem-solving to develop unique solutions.",
    color: "from-purple-500/20 to-purple-400/5",
    border: "border-purple-400/25",
    text: "text-purple-300",
  },
];

const ACHIEVEMENTS = [
  {
    emoji: "🥇",
    title: "4 Awards in 1 Season",
    desc: "Regional 1st place, Quality Award, Woodie Flowers & Best Alumni — all in a single season.",
  },
  {
    emoji: "📅",
    title: "10 Seasons",
    desc: "Of continuous growth, learning, and improvement on the field and beyond.",
  },
  {
    emoji: "👨‍🔬",
    title: "23 Members",
    desc: "Active students, plus dozens of mentors and alumni growing stronger each year.",
  },
];

const IMPACT_STATS = [
  { value: "87%", label: "More interested in STEM education" },
  { value: "92%", label: "Better problem-solving skills" },
  { value: "95%", label: "Improved teamwork abilities" },
];

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

// ─── Animated number counter ─────────────────────────────────────────────────
function AnimatedStat({ value, label }: { value: string; label: string }) {
  const { ref, visible } = useInView(0.3);
  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ease-out ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
    >
      <p className="section-title text-4xl font-bold text-cyan-400 md:text-5xl">
        {value}
      </p>
      <p className="mt-2 text-sm text-slate-400">{label}</p>
    </div>
  );
}

// ─── Sections ─────────────────────────────────────────────────────────────────
function HeroSection() {
  const { ref, visible } = useInView(0.1);
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <p className="section-title mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-cyan-400">
        Hakkımızda · About Wing
      </p>
      <h1 className="section-title text-5xl font-bold uppercase leading-tight text-white md:text-6xl lg:text-7xl">
        <span className="text-cyan-400">İtoBot</span>{" "}
        <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
          6038
        </span>
      </h1>
      <p className="mt-4 text-lg font-medium text-blue-300 md:text-xl">
        FIRST Robotics Competition &nbsp;·&nbsp; İstanbul, Türkiye
      </p>
      <div className="mt-6 flex items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/60 to-transparent" />
        <span className="text-xs uppercase tracking-widest text-slate-500">
          Est. 2015
        </span>
        <div className="h-px flex-1 bg-gradient-to-l from-blue-500/40 to-transparent" />
      </div>
    </div>
  );
}

function MissionVisionSection() {
  const { ref, visible } = useInView(0.15);
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 delay-100 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {/* Mission */}
        <div className="glass-panel glow-border rounded-2xl p-8">
          <p className="section-title mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Misyon
          </p>
          <h2 className="section-title mb-4 text-2xl font-bold uppercase text-white">
            Our Mission
          </h2>
          <p className="text-sm leading-relaxed text-slate-300 md:text-base">
            At Itobot, our mission is to grow together as a team through{" "}
            <span className="text-cyan-300">
              science, technology, and teamwork
            </span>
            . As a school-based FRC team, we are dedicated to continuous
            learning, innovation, and pushing our limits — both as individuals
            and as a team — to build creative solutions and inspire others in
            our community.
          </p>
        </div>

        {/* Vision */}
        <div className="glass-panel rounded-2xl p-8">
          <p className="section-title mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-blue-300">
            Vizyon
          </p>
          <h2 className="section-title mb-4 text-2xl font-bold uppercase text-white">
            Our Vision
          </h2>
          <p className="text-sm leading-relaxed text-slate-300 md:text-base">
            Our vision is to become a team that not only competes at the highest
            levels of robotics but also{" "}
            <span className="text-blue-300">shapes future leaders</span> who are
            passionate, curious, and driven to make a positive impact through
            technology. We aim to be a symbol of growth, unity, and inspiration
            within the FRC community and beyond.
          </p>
        </div>
      </div>
    </div>
  );
}

function FRCSection() {
  const { ref, visible } = useInView(0.15);
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 delay-100 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="glass-panel rounded-2xl p-8 md:p-10">
        <p className="section-title mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
          FRC Nedir?
        </p>
        <h2 className="section-title mb-5 text-3xl font-bold uppercase text-white md:text-4xl">
          What is FRC?
        </h2>
        <p className="mb-8 text-sm leading-relaxed text-slate-300 md:text-base">
          FIRST Robotics Competition (FRC) combines the excitement of sport with
          the rigors of science and technology. Under strict rules, limited time
          and resources, teams of students are challenged to raise funds, design
          a team "brand," hone teamwork skills, and build and program{" "}
          <strong className="text-white">industrial-size robots</strong> to play
          a difficult field game against like-minded competitors.
        </p>

        {/* Core Values */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FRC_VALUES.map((v, i) => (
            <div
              key={v.title}
              className={`rounded-xl border bg-gradient-to-b p-5 transition-all duration-300 hover:scale-[1.03] ${v.color} ${v.border}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="mb-3 block text-3xl">{v.emoji}</span>
              <h3 className={`section-title mb-2 text-sm font-bold ${v.text}`}>
                {v.title}
              </h3>
              <p className="text-xs leading-relaxed text-slate-400">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ImpactSection() {
  const { ref, visible } = useInView(0.2);
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="glass-panel rounded-2xl p-8 md:p-10">
        <p className="section-title mb-2 text-center text-xs font-semibold uppercase tracking-[0.35em] text-blue-300">
          FRC'nin Gençlere Etkisi
        </p>
        <h2 className="section-title mb-8 text-center text-3xl font-bold uppercase text-white md:text-4xl">
          Impact on Students
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {IMPACT_STATS.map((s) => (
            <AnimatedStat key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </div>
    </div>
  );
}

function AchievementsSection() {
  const { ref, visible } = useInView(0.15);
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="mb-8 text-center">
        <p className="section-title mb-2 text-xs font-semibold uppercase tracking-[0.4em] text-cyan-400">
          Başarılarımız
        </p>
        <h2 className="section-title text-3xl font-bold uppercase text-white md:text-4xl">
          Our Achievements
        </h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {ACHIEVEMENTS.map((a, i) => (
          <div
            key={a.title}
            className="glass-panel flex flex-col items-center gap-3 rounded-2xl p-7 text-center transition-all duration-300 hover:scale-[1.03] hover:border-cyan-400/30"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <span className="text-4xl">{a.emoji}</span>
            <h3 className="section-title font-bold text-white">{a.title}</h3>
            <p className="text-xs leading-relaxed text-slate-400">{a.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Timeline ─────────────────────────────────────────────────────────────────
function TimelineItem({
  event,
  index,
  isLeft,
}: {
  event: TimelineEvent;
  index: number;
  isLeft: boolean;
}) {
  const { ref, visible } = useInView(0.3);

  return (
    <div
      ref={ref}
      className={`relative flex w-full items-start gap-0 md:items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      {/* Card */}
      <div
        className={`w-full transition-all duration-700 ease-out md:w-[calc(50%-2rem)] ${
          visible
            ? "opacity-100 translate-x-0"
            : isLeft
              ? "opacity-0 -translate-x-12"
              : "opacity-0 translate-x-12"
        }`}
        style={{ transitionDelay: `${index * 110}ms` }}
      >
        <div
          className={`glass-panel rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] ${
            event.highlight
              ? "border-cyan-400/40 shadow-md shadow-cyan-400/10"
              : ""
          }`}
        >
          <div className="mb-3 flex items-center gap-3">
            <span
              className={`section-title inline-block rounded-lg px-3 py-1 text-sm font-bold ${
                event.highlight
                  ? "bg-cyan-400/20 text-cyan-300"
                  : "bg-slate-700/60 text-slate-300"
              }`}
            >
              {event.year}
            </span>
            {event.highlight && (
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                ★ Önemli
              </span>
            )}
          </div>
          <h3 className="section-title mb-2 text-lg font-bold text-white md:text-xl">
            {event.title}
          </h3>
          <p className="text-sm leading-relaxed text-slate-400">
            {event.description}
          </p>
        </div>
      </div>

      {/* Center dot (desktop) */}
      <div className="relative z-10 hidden flex-shrink-0 md:flex md:w-16 md:flex-col md:items-center">
        <div
          className={`h-4 w-4 rounded-full border-2 transition-all duration-500 ${
            visible ? "scale-100 opacity-100" : "scale-0 opacity-0"
          } ${
            event.highlight
              ? "border-cyan-400 bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.6)]"
              : "border-slate-500 bg-slate-700"
          }`}
          style={{ transitionDelay: `${index * 110 + 55}ms` }}
        />
      </div>

      {/* Mobile left dot */}
      <div className="absolute -left-[1.625rem] top-6 z-10 flex md:hidden">
        <div
          className={`h-3 w-3 rounded-full border-2 transition-all duration-500 ${
            visible ? "scale-100 opacity-100" : "scale-0 opacity-0"
          } ${
            event.highlight
              ? "border-cyan-400 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]"
              : "border-slate-500 bg-slate-700"
          }`}
          style={{ transitionDelay: `${index * 110 + 55}ms` }}
        />
      </div>

      <div className="hidden md:block md:w-[calc(50%-2rem)]" />
    </div>
  );
}

function TimelineSection() {
  const { ref, visible } = useInView(0.05);
  return (
    <div ref={ref}>
      <div
        className={`mb-14 text-center transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <p className="section-title mb-2 text-xs font-semibold uppercase tracking-[0.4em] text-cyan-400">
          Yolculuğumuz
        </p>
        <h2 className="section-title text-4xl font-bold uppercase text-white md:text-5xl">
          Our{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Journey
          </span>
        </h2>
        <p className="mt-3 text-sm text-slate-400 md:text-base">
          Kuruluştan bugüne, her adımın hikâyesi.
        </p>
      </div>

      <div className="relative">
        {/* Desktop center line */}
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-slate-600/50 to-transparent md:block" />
        {/* Mobile left line */}
        <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-slate-600/50 to-transparent md:hidden" />

        <div className="flex flex-col gap-10 pl-8 md:gap-12 md:pl-0">
          {TIMELINE.map((event, i) => (
            <TimelineItem
              key={event.year}
              event={event}
              index={i}
              isLeft={i % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <section className="relative overflow-hidden pb-28 pt-28">
      <div className="museum-grid absolute inset-0 opacity-20" />
      <div className="absolute left-1/4 top-24 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[160px]" />
      <div className="absolute right-1/4 top-64 h-72 w-72 translate-x-1/2 rounded-full bg-blue-500/10 blur-[130px]" />

      <div className="relative mx-auto w-full max-w-6xl space-y-20 px-5 md:px-10">
        <HeroSection />
        <MissionVisionSection />
        <FRCSection />
        <ImpactSection />
        <AchievementsSection />
        <TimelineSection />
      </div>
    </section>
  );
}
