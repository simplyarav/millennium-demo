import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, GraduationCap } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/academics", label: "Academics" },
  { to: "/admissions", label: "Admissions" },
  { to: "/erp", label: "ERP System" },
  { to: "/fees", label: "Fee Payment" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-lg">
      {/* Top bar */}
      <div className="bg-primary/90 border-b border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-4 py-1.5 flex items-center justify-between text-xs text-primary-foreground/70">
          <span>📞 +91 98765 43210 &nbsp;|&nbsp; ✉️ info@millenniumworldschool.edu</span>
          <span className="hidden sm:inline">Experience. Succeed. Lead.</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto max-w-7xl px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
            <GraduationCap className="h-6 w-6 text-secondary-foreground" />
          </div>
          <div>
            <span className="text-lg font-bold text-primary-foreground font-heading leading-tight block">Millennium World</span>
            <span className="text-[10px] text-primary-foreground/60 tracking-widest uppercase">International School</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? "bg-secondary text-secondary-foreground"
                  : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/login"
            className="ml-3 px-5 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-semibold hover:bg-accent transition-colors"
          >
            Login Portal
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-primary-foreground p-2"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10 pb-4">
          <nav className="flex flex-col px-4 gap-1 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "bg-secondary text-secondary-foreground"
                    : "text-primary-foreground/80 hover:bg-primary-foreground/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/login"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-5 py-2.5 rounded-lg bg-secondary text-secondary-foreground text-sm font-semibold text-center"
            >
              Login Portal
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
