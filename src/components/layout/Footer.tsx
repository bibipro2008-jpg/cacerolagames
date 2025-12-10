import { Link } from "react-router-dom";
import { Gamepad2, Mail, MapPin, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Gamepad2 className="w-6 h-6 text-primary" />
              </div>
              <span className="font-heading text-xl font-bold text-foreground">
                CACEROLA<span className="text-primary"> GAMES</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Un estudi jove i ambiciós dedicat a crear experiències de videojocs 
              memorables des de L'Escala.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-subheading text-lg font-bold text-foreground mb-4 uppercase tracking-wide">
              Navegació
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Inici" },
                { href: "/sobre-nosaltres", label: "Sobre Nosaltres" },
                { href: "/videojocs", label: "Videojocs" },
                { href: "/equip", label: "Equip" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-subheading text-lg font-bold text-foreground mb-4 uppercase tracking-wide">
              Serveis
            </h4>
            <ul className="space-y-2">
              {[
                "Desenvolupament de Videojocs",
                "Art 2D i 3D",
                "Disseny de So",
                "Disseny Web",
              ].map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-subheading text-lg font-bold text-foreground mb-4 uppercase tracking-wide">
              Contacte
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span>hola@cacerolagames.com</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>L'Escala, Costa Brava, Catalunya</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Cacerola Games. Tots els drets reservats.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Fet amb <Heart className="w-4 h-4 text-accent fill-accent" /> a L'Escala
          </p>
        </div>
      </div>
    </footer>
  );
};
