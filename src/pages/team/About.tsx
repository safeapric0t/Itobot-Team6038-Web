export default function AboutPage() {
  return (
    <section className="relative overflow-hidden pb-20 pt-28">
      <div className="museum-grid absolute inset-0 opacity-30" />
      <div className="absolute left-1/2 top-36 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/16 blur-[140px]" />

      <div className="relative mx-auto w-full max-w-5xl px-5 md:px-8">
        <article className="glass-panel rounded-3xl p-8 md:p-12">
          <p className="section-title text-xs font-semibold uppercase tracking-[0.4em] text-cyan-200">
            About Wing
          </p>
          <h1 className="section-title mt-4 text-4xl font-bold uppercase text-white md:text-5xl">
            About Page Skeleton Ready
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
            Team promotion contuniue........
          </p>
        </article>
      </div>
    </section>
  );
}
