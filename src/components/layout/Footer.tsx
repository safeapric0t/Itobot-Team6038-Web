import { NavLink } from "react-router-dom";
import { useState } from "react";
import itobotLogo from "../../assets/images/itobot-logo.jpg?url";

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/robots", label: "Robot Museum" },
  { to: "/team", label: "Team" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const HIGHLIGHTS = [
  {
    label: "Design Philosophy",
    value: "Cinematic, museum-grade storytelling.",
  },
  {
    label: "Core Focus",
    value: "3D robots, light-driven exhibits, precision motion.",
  },
  { label: "Technology", value: "React, Three.js, TailwindCSS v4." },
];

export default function Footer() {
  const [logoClicks, setLogoClicks] = useState(0);

  const handleLogoClick = () => {
    const newClicks = logoClicks + 1;
    setLogoClicks(newClicks);

    if (newClicks === 5) {
      // Easter egg: Reset intro and trigger replay
      try {
        sessionStorage.removeItem("itobot_intro_seen_v1");
        window.dispatchEvent(new Event("replay-intro"));
      } catch {
        // Ignore private-mode storage exceptions
      }
      setLogoClicks(0);
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-cyan-300/15 bg-slate-950/70">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(34,211,238,0.08),transparent_55%)]" />
      <div className="absolute -right-20 top-8 h-40 w-40 rounded-full bg-blue-500/20 blur-[90px]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-12 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl border border-cyan-300/40 bg-slate-900/80 text-sm font-bold tracking-[0.22em] text-cyan-200 shadow-[0_0_18px_rgba(34,211,238,0.25)]">
                <img
                  onClick={handleLogoClick}
                  src={itobotLogo}
                  alt="Team 6038 İtobot logo"
                  className="h-full w-full object-contain rounded-lg cursor-pointer transition-transform hover:scale-110"
                  title={logoClicks > 0 ? `${5 - logoClicks} more clicks for easter egg!` : ""}
                />
              </span>
              <div>
                <p className="section-title text-[11px] font-semibold uppercase text-cyan-100/80">
                  FRC Robotics
                </p>
                <p className="text-sm font-semibold tracking-[0.16em] text-slate-100">
                  Itobot Labs
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm text-slate-400">
              A living robotics museum for Team 6038. Built to celebrate
              competition history and the future we are engineering together.
            </p>
          </div>

          <div>
            <p className="section-title text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
              Navigation
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className="transition-colors hover:text-cyan-200"
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div>
            <p className="section-title text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
              Exhibit Notes
            </p>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              {HIGHLIGHTS.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-slate-700/60 bg-slate-900/60 p-3"
                >
                  <p className="text-[11px] uppercase tracking-[0.16em] text-cyan-100/80">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm text-slate-300">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-800/70 pt-6 text-xs uppercase tracking-[0.2em] text-slate-500 md:flex-row md:items-center md:justify-between">
          <span>Team 6038 Museum Experience</span>
          <span>Built in 2026</span>
        </div>
      </div>
    </footer>
  );
}
