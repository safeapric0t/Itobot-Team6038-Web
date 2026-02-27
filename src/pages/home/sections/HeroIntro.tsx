import clsx from "clsx";
import { useEffect, useState } from "react";
import introVideo from "../../../assets/videos/intro.mp4";

const INTRO_STORAGE_KEY = "itobot_intro_seen_v1";

function hasSeenIntro() {
  try {
    return sessionStorage.getItem(INTRO_STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

export default function HeroIntro() {
  const [visible, setVisible] = useState<boolean>(() => !hasSeenIntro());
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const handleReplayIntro = () => {
      setVisible(true);
      setClosing(false);
    };

    window.addEventListener("replay-intro", handleReplayIntro);
    return () => {
      window.removeEventListener("replay-intro", handleReplayIntro);
    };
  }, []);

  useEffect(() => {
    if (!visible) {
      return;
    }

    const closeTimer = window.setTimeout(() => setClosing(true), 3400);

    return () => {
      window.clearTimeout(closeTimer);
    };
  }, [visible]);

  useEffect(() => {
    if (!visible || !closing) {
      return;
    }

    const hideTimer = window.setTimeout(() => setVisible(false), 650);

    return () => {
      window.clearTimeout(hideTimer);
    };
  }, [visible, closing]);

  useEffect(() => {
    if (visible) {
      return;
    }

    try {
      sessionStorage.setItem(INTRO_STORAGE_KEY, "1");
    } catch {
      // Ignore private-mode storage exceptions.
    }
  }, [visible]);

  if (!visible) {
    return null;
  }

  return (
    <div
      className={clsx(
        "fixed inset-0 z-[70] overflow-hidden transition-opacity duration-700",
        closing ? "pointer-events-none opacity-0" : "opacity-100"
      )}
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        playsInline
      >
        <source src={introVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(3,15,34,0.34),rgba(2,6,23,0.94))]" />
      <div className="absolute inset-x-0 top-0 h-px bg-cyan-200/70 shadow-[0_0_22px_rgba(34,211,238,0.8)]" />

      <div className="relative mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center">
        <p className="section-title text-xs font-semibold uppercase tracking-[0.6em] text-cyan-200/90">
          FRC TEAM 6038
        </p>
        <h1 className="section-title mt-6 text-4xl font-bold uppercase tracking-[0.08em] text-white md:text-6xl">
          Enter The Museum
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-slate-200/85 md:text-base">
          10 years of engineering, autonomous systems, and competition memories.
          This experience is crafted as a living robotics exhibition.
        </p>

        <button
          type="button"
          onClick={() => setClosing(true)}
          className="mt-10 rounded-full border border-cyan-200/70 px-7 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100 transition hover:border-cyan-100 hover:bg-cyan-300/15"
        >
          Skip Intro
        </button>

        <div className="absolute bottom-12 left-1/2 w-[min(560px,86vw)] -translate-x-1/2">
          <div className="h-[2px] w-full overflow-hidden rounded-full bg-cyan-100/25">
            <div className="h-full origin-left animate-[intro-progress_4s_linear_forwards] bg-gradient-to-r from-cyan-300 to-blue-300" />
          </div>
        </div>
      </div>
    </div>
  );
}
