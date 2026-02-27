import { useMemo, useState } from "react";
import MuseumScene from "./components/MuseumScene";
import RobotCard from "./components/RobotCard";
import RobotInspector from "./components/RobotInspector";
import { museumRobots } from "./data/robots";

export default function RobotsPage() {
  const [focusedRobotId, setFocusedRobotId] = useState(museumRobots[0]?.id ?? "");

  const focusedRobot = useMemo(
    () => museumRobots.find((robot) => robot.id === focusedRobotId) ?? museumRobots[0],
    [focusedRobotId]
  );

  if (!focusedRobot) {
    return null;
  }

  return (
    <section className="relative overflow-hidden pb-16 pt-28">
      <div className="museum-grid absolute inset-0 opacity-35" />
      <div className="absolute -left-32 top-36 h-72 w-72 rounded-full bg-cyan-500/16 blur-[130px]" />
      <div className="absolute -right-28 top-10 h-96 w-96 rounded-full bg-blue-500/16 blur-[150px]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 md:px-8">
        <header className="max-w-3xl">
          <p className="section-title text-xs font-semibold uppercase tracking-[0.5em] text-cyan-200">
            Robot Museum
          </p>
          <h1 className="section-title mt-4 text-4xl font-bold uppercase leading-tight text-white md:text-5xl">
            Interactive Exhibit Hall
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base">
            Select a robot to pull focus. The gallery lighting, camera position,
            and technical panel respond instantly to the active exhibit.
          </p>
        </header>

        <div className="mt-8 grid gap-7 lg:grid-cols-[1.25fr_1fr]">
          <MuseumScene
            robots={museumRobots}
            focusedRobotId={focusedRobotId}
            onFocusRobot={setFocusedRobotId}
          />

          <div className="space-y-5">
            <RobotInspector robot={focusedRobot} />

            <div className="grid gap-3 sm:grid-cols-2">
              {museumRobots.map((robot) => (
                <RobotCard
                  key={robot.id}
                  robot={robot}
                  active={robot.id === focusedRobot.id}
                  onFocus={setFocusedRobotId}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
