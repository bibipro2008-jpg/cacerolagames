import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Missió",
    description: "Crear videojocs innovadors i memorables que connectin amb jugadors de tot el món.",
  },
  {
    icon: Eye,
    title: "Visió",
    description: "Convertir-nos en un referent d'estudi indie català, reconegut per la qualitat i originalitat.",
  },
  {
    icon: Heart,
    title: "Valors",
    description: "Passió, creativitat, aprenentatge continu i suport al nou talent del sector.",
  },
];

export const AboutPreview = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="font-subheading text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
              Sobre Nosaltres
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Des de L'Escala al{" "}
              <span className="text-gradient-primary">Món</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Cacerola Games neix de la passió d'un grup de creadors que somien en gran. 
              Des del nostre estudi a L'Escala, Costa Brava, treballem cada dia per donar 
              vida a experiències de joc úniques que emocionen i sorprenen.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              El nostre equip combina experiència i entusiasme, amb mentors dedicats a 
              formar la propera generació de desenvolupadors, creant un ambient de treball 
              col·laboratiu i inspirador.
            </p>
            <Button variant="outline" asChild>
              <Link to="/sobre-nosaltres" className="flex items-center gap-2">
                Descobreix la Nostra Història
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Values Cards */}
          <div className="space-y-4">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="glass-effect rounded-xl p-6 hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-subheading text-xl font-bold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
