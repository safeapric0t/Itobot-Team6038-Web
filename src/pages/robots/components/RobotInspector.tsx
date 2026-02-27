import type { MuseumRobot } from "../data/robots";

type RobotInspectorProps = {
  robot: MuseumRobot;
};

export default function RobotInspector({ robot }: RobotInspectorProps) {
  return (
    <article className="glass-panel rounded-3xl p-6">
      <p className="section-title text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200/90">
        Focused Exhibit
      </p>
      <h2 className="section-title mt-3 text-3xl font-bold uppercase text-white">
        {robot.name}
      </h2>
      <p className="mt-1 text-sm text-slate-400">{robot.season}</p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">{robot.summary}</p>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {robot.stats.map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-slate-700/60 bg-slate-900/55 p-3"
          >
            <p className="text-sm font-semibold text-cyan-100">{item.value}</p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-slate-400">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-7">
        <p className="section-title text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100">
          Part Explorer
        </p>
        <div className="mt-3 space-y-2">
          {robot.parts.map((part) => (
            <div
              key={part.id}
              className="rounded-xl border border-slate-700/60 bg-slate-900/45 p-3"
            >
              <p className="text-sm font-semibold text-slate-100">{part.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-400">{part.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
