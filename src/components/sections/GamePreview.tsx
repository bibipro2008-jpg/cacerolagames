import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Gamepad2, Clock, Sparkles, ArrowRight } from "lucide-react";

export const GamePreview = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <span className="font-subheading text-sm font-semibold text-accent uppercase tracking-wider mb-4 block">
            En Desenvolupament
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            El Nostre Primer{" "}
            <span className="text-gradient-accent">Videojoc</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Estem creant una experiència que redefirà les teves expectatives. 
            Prepara't per un viatge increïble.
          </p>
        </div>

        {/* Game Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-2xl overflow-hidden card-shadow">
            {/* Game Image Placeholder */}
            <div className="aspect-video bg-gradient-to-br from-muted via-card to-muted relative flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-primary/20 flex items-center justify-center animate-pulse-glow">
                  <Gamepad2 className="w-12 h-12 text-primary" />
                </div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Títol per Revelar
                </h3>
                <p className="text-primary font-subheading font-semibold uppercase tracking-wider">
                  Pròximament 2025
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20">
                <Clock className="w-4 h-4 text-accent" />
                <span className="text-accent text-sm font-semibold">En Desenvolupament</span>
              </div>
            </div>

            {/* Game Info */}
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                {["Aventura", "Indie", "2025"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-subheading font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                El nostre equip està treballant intensament per crear un joc que 
                combina mecàniques innovadores amb una narrativa captivadora. 
                Mantén-te atent a les novetats!
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button variant="accent" asChild className="w-full sm:w-auto">
                  <Link to="/videojocs" className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Més Informació
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
