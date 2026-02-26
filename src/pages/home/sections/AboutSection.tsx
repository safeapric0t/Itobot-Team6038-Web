const MILESTONES = [
  {
    title: "Legacy Archive",
    detail: "Competition photos, build logs, and match records presented like a digital exhibit.",
  },
  {
    title: "Live Engineering",
    detail: "Subsystem-focused storytelling with mechanisms, software notes, and CAD snapshots.",
  },
  {
    title: "Future Concepts",
    detail: "A dedicated section for upcoming prototypes, strategy simulations, and team ambitions.",
  },
];

const NUMBERS = [
  { label: "Seasons", value: "10+" },
  { label: "Students", value: "70+" },
  { label: "Robots", value: "14" },
  { label: "Awards", value: "25+" },
];

export default function AboutSection() {
  return (
    <section id="highlights" className="relative pb-24 pt-12">
      <div className="absolute inset-x-0 top-12 h-px bg-gradient-to-r from-transparent via-cyan-200/55 to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <div className="grid gap-7 lg:grid-cols-[1.15fr_1fr]">
          <article className="glass-panel rounded-3xl p-7 md:p-10">
            <p className="section-title text-xs font-semibold uppercase tracking-[0.42em] text-cyan-200">
              Core Concept
            </p>
            <h3 className="section-title mt-4 text-3xl font-bold uppercase text-white md:text-4xl">
              Museum-Grade Team Presentation
            </h3>
            <p className="mt-5 max-w-2xl text-slate-300">
              This website is architected as an immersive experience, not a classic
              brochure site. Each section behaves like part of an exhibition hall:
              cinematic transitions, ambient lighting, and interactive robot displays.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {NUMBERS.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-700/65 bg-slate-900/55 p-4"
                >
                  <p className="text-3xl font-bold text-cyan-200">{item.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="grid gap-4">
            {MILESTONES.map((item) => (
              <div key={item.title} className="glass-panel rounded-2xl p-6">
                <p className="section-title text-lg font-semibold uppercase tracking-[0.12em] text-cyan-100">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.detail}</p>
              </div>
            ))}
          </article>
        </div>
      </div>
    </section>
  );
}
