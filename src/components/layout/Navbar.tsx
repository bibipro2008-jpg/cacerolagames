import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Inici" },
  { href: "/sobre-nosaltres", label: "Sobre Nosaltres" },
  { href: "/videojocs", label: "Videojocs" },
  { href: "/equip", label: "Equip" },
  { href: "/serveis", label: "Serveis" },
  { href: "/contacte", label: "Contacte" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass-effect py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:glow-primary transition-all duration-300">
              <Gamepad2 className="w-6 h-6 text-primary" />
            </div>
            <span className="font-heading text-xl font-bold text-foreground">
              CACEROLA<span className="text-primary"> GAMES</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "nav-link font-subheading text-sm font-semibold uppercase tracking-wider",
                  location.pathname === link.href && "text-primary active"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button variant="accent" size="sm" asChild>
              <Link to="/contacte">Contacta'ns</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-96 mt-4" : "max-h-0"
          )}
        >
          <div className="glass-effect rounded-lg p-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block py-3 px-4 rounded-lg font-subheading font-semibold uppercase tracking-wider transition-colors",
                  location.pathname === link.href
                    ? "bg-primary/20 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="accent" className="w-full mt-4" asChild>
              <Link to="/contacte" onClick={() => setIsOpen(false)}>
                Contacta'ns
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
