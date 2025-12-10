import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="font-subheading text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Uneix-te a l'Aventura
            </span>
          </div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tens un Projecte en{" "}
            <span className="text-gradient-accent">Ment?</span>
          </h2>

          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Ja sigui una idea de videojoc, una web o una col·laboració, 
            ens encantaria escoltar-te. Fem-ho realitat junts!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="accent" size="xl" asChild>
              <Link to="/contacte" className="flex items-center gap-2">
                Contacta amb Nosaltres
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/serveis">Explora Serveis</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
