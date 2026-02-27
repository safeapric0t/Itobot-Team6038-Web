import { useEffect, useState } from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import itobotLogo from "../../assets/images/itobot-logo.jpg?url";

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/robots", label: "Robot Museum" },
  { to: "/team", label: "Team" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },


];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-cyan-300/20 bg-slate-950/76 shadow-[0_14px_34px_rgba(3,8,20,0.44)] backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 md:px-8">
        <NavLink to="/" className="group flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-xl border border-cyan-300/40 bg-slate-900/80 text-sm font-bold tracking-[0.22em] text-cyan-200 shadow-[0_0_18px_rgba(34,211,238,0.25)]">
            <img 
              src={itobotLogo} 
              alt="Team 6038 İtobot logo" 
              className="h-full w-full object-contain rounded-lg"
            />
          </span>
          <div>
            <p className="section-title text-[11px] font-semibold uppercase text-cyan-100/80">
              FRC Robotics
            </p>
            <p className="text-sm font-semibold tracking-[0.16em] text-slate-100 transition-colors group-hover:text-cyan-200">
              Itobot Labs
            </p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV_ITEMS.map((item) => (
            <NavItem
              key={item.to}
              to={item.to}
              label={item.label}
              className="section-title text-xs font-semibold uppercase tracking-[0.18em]"
            />
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-cyan-300/30 bg-slate-900/70 text-cyan-100 transition hover:border-cyan-200 md:hidden"
        >
          <span className="space-y-[5px]">
            <span className="block h-[2px] w-5 bg-current" />
            <span className="block h-[2px] w-5 bg-current" />
            <span className="block h-[2px] w-5 bg-current" />
          </span>
        </button>
      </div>

      <div
        className={clsx(
          "overflow-hidden transition-all duration-500 md:hidden",
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="border-t border-cyan-300/10 bg-slate-950/94 px-5 py-6 backdrop-blur-xl">
          <nav className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <NavItem
                key={item.to}
                to={item.to}
                label={item.label}
                className="section-title text-sm font-semibold uppercase tracking-[0.16em]"
                onNavigate={() => setMobileOpen(false)}
              />
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

function NavItem({
  to,
  label,
  className,
  onNavigate,
}: {
  to: string;
  label: string;
  className: string;
  onNavigate?: () => void;
}) {
  return (
    <NavLink
      to={to}
      onClick={onNavigate}
      className={({ isActive }) =>
        clsx(
          className,
          "relative text-slate-200/80 transition-colors duration-300 hover:text-cyan-200",
          isActive && "text-cyan-200"
        )
      }
    >
      {({ isActive }) => (
        <span className="group relative">
          {label}
          <span
            className={clsx(
              "absolute -bottom-1 left-0 h-[2px] w-0 bg-cyan-300 transition-all duration-300 group-hover:w-full",
              isActive && "w-full"
            )}
          />
        </span>
      )}
    </NavLink>
  );
}
