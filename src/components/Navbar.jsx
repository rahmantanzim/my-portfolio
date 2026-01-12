import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); // set initial state
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div
        className={[
          "transition-all duration-300",
          scrolled
            ? "bg-zinc-950/70 backdrop-blur-md shadow-lg"
            : "bg-transparent",
        ].join(" ")}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Brand */}
          <NavLink
            to="/"
            className="text-lg font-semibold tracking-wide text-white hover:text-cyan-400 transition"
          >
            TR
          </NavLink>

          {/* Links */}
          <div className="flex items-center gap-10 text-sm font-medium">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `relative transition ${
                  isActive
                    ? "text-white after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-cyan-400"
                    : "text-zinc-400 hover:text-white"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `relative transition ${
                  isActive
                    ? "text-white after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-cyan-400"
                    : "text-zinc-400 hover:text-white"
                }`
              }
            >
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
