import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItemStyle =
    "relative uppercase tracking-widest text-sm transition-all duration-300";

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        scrolled
          ? "bg-[#0b0f1a]/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/*Logo*/}
        <div className="text-white text-lg font-bold tracking-widest">
          FRC TEAM
        </div>

        {/* Masaüstü Menü ==> */}
        <nav className="hidden md:flex items-center gap-10 text-white">
          <NavItem to="/" label="Home" className={navItemStyle} />
          <NavItem to="/robots" label="Robots" className={navItemStyle} />
          <NavItem to="/team" label="Team" className={navItemStyle} />
        </nav>

        {/*Mobil butonu ==>*/}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white"
        >
          ☰
        </button>
      </div>

      {/*Mobil Menü ==> */}
      <div
        className={clsx(
          "md:hidden overflow-hidden transition-all duration-500",
          mobileOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col items-center gap-6 py-6 bg-[#0b0f1a]/95 text-white backdrop-blur-xl">
          <NavItem to="/" label="Home" />
          <NavItem to="/robots" label="Robots" />
          <NavItem to="/team" label="Team" />
        </div>
      </div>
    </header>
  );
}

function NavItem({
  to,
  label,
  className,
}: {
  to: string;
  label: string;
  className?: string;
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(
          className,
          "hover:text-blue-400",
          isActive && "text-blue-400"
        )
      }
    >
      <span className="relative group">
        {label}
        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
      </span>
    </NavLink>
  );
}