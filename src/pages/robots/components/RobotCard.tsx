import clsx from "clsx";
import type { MuseumRobot } from "../data/robots";

type RobotCardProps = {
  robot: MuseumRobot;
  active: boolean;
  onFocus: (id: string) => void;
};

export default function RobotCard({ robot, active, onFocus }: RobotCardProps) {
  return (
    <button
      type="button"
      onClick={() => onFocus(robot.id)}
      className={clsx(
        "glass-panel w-full rounded-2xl p-4 text-left transition duration-300",
        active
          ? "border-cyan-200/65 bg-slate-900/90 shadow-[0_0_28px_rgba(34,211,238,0.2)]"
          : "border-slate-700/70 hover:border-cyan-300/40 hover:bg-slate-900/70"
      )}
    >
      <p className="section-title text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/90">
        {robot.season}
      </p>
      <p className="mt-2 text-xl font-semibold text-slate-100">{robot.name}</p>
      <p className="mt-2 text-sm text-slate-400">{robot.tagline}</p>
    </button>
  );
}
