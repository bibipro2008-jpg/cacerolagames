import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Gamepad2, 
  Palette, 
  Music, 
  Globe, 
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Gamepad2,
    title: "Desenvolupament de Videojocs",
    description: "Creem experiències de joc completes, des del concepte fins al llançament.",
  },
  {
    icon: Palette,
    title: "Art 2D i 3D",
    description: "Disseny de personatges, escenaris i animacions amb estil únic.",
  },
  {
    icon: Music,
    title: "Disseny de So",
    description: "Bandes sonores originals i efectes de so immersiu en col·laboració amb artistes.",
  },
  {
    icon: Globe,
    title: "Disseny Web",
    description: "Creem webs professionals per a clients externs.",
  },
];

export const ServicesPreview = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="font-subheading text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
            Els Nostres Serveis
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Què <span className="text-gradient-primary">Oferim</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Del concepte a la realitat, oferim un ventall complet de serveis 
            per donar vida als projectes més ambiciosos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-effect rounded-xl p-6 hover-lift text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/20 flex items-center justify-center">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-subheading text-lg font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" asChild>
            <Link to="/serveis" className="flex items-center gap-2">
              Veure Tots els Serveis
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
