import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Gamepad2, 
  Clock, 
  Sparkles, 
  Star,
  Cpu,
  Palette,
  Music,
  Users,
  ArrowRight
} from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Tecnologia Avançada",
    description: "Motor de joc modern amb gràfics impressionants i rendiment optimitzat.",
  },
  {
    icon: Palette,
    title: "Art Únic",
    description: "Estil visual distintiu creat pel nostre equip artístic.",
  },
  {
    icon: Music,
    title: "Banda Sonora Original",
    description: "Música creada en col·laboració amb artistes que ens apassionen.",
  },
  {
    icon: Users,
    title: "Experiència Immersiva",
    description: "Mecàniques dissenyades per mantenir-te enganxat del principi al final.",
  },
];

const Videojocs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
        
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="font-subheading text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                En Desenvolupament · 2025
              </span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Els Nostres <span className="text-gradient-primary">Videojocs</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Estem treballant intensament en el nostre primer títol. 
              Una experiència que esperem que us marqui tant com ens marca a nosaltres.
            </p>
          </div>
        </div>
      </section>

      {/* Main Game Card */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="glass-effect rounded-2xl overflow-hidden card-shadow">
              {/* Game Banner */}
              <div className="aspect-video bg-gradient-to-br from-muted via-card to-muted relative flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.1)_0%,transparent_70%)]" />
                
                <div className="text-center relative z-10">
                  <div className="w-32 h-32 mx-auto mb-8 rounded-3xl bg-primary/20 flex items-center justify-center animate-pulse-glow">
                    <Gamepad2 className="w-16 h-16 text-primary" />
                  </div>
                  <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
                    Títol per Revelar
                  </h2>
                  <p className="text-primary font-subheading text-xl font-semibold uppercase tracking-wider mb-4">
                    Pròximament
                  </p>
                  <div className="flex items-center justify-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-accent fill-accent" />
                    ))}
                  </div>
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30">
                  <Clock className="w-4 h-4 text-accent" />
                  <span className="text-accent text-sm font-bold uppercase">En Desenvolupament</span>
                </div>
              </div>

              {/* Game Details */}
              <div className="p-8 md:p-10">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  {["Aventura", "Indie", "Narratiu", "Single Player", "2025"].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-subheading font-semibold uppercase tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Sobre el Projecte
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  El nostre primer videojoc és un projecte ambiciós que ha estat en 
                  desenvolupament des de principis del 2025. Estem creant una experiència 
                  que combina una narrativa captivadora amb mecàniques de joc innovadores.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Tot l'equip de Cacerola Games està volcant el seu talent i passió en 
                  aquest projecte. Des dels nostres directors fins als estudiants en pràctiques, 
                  tothom aporta alguna cosa única a aquesta aventura. Col·laborem amb artistes 
                  externs per a la banda sonora i el disseny gràfic, assegurant que cada 
                  aspecte del joc sigui de la màxima qualitat.
                </p>

                <div className="p-6 rounded-xl bg-muted/50 border border-border mb-8">
                  <p className="text-center text-muted-foreground italic">
                    "Volem crear un joc que no només sigui divertit, sinó que deixi una 
                    empremta emocional en qui el jugui. És el nostre somni fet realitat."
                  </p>
                  <p className="text-center text-primary font-subheading font-semibold mt-2">
                    — Directors de Cacerola Games
                  </p>
                </div>

                <div className="text-center">
                  <Button variant="accent" size="lg" asChild>
                    <Link to="/contacte" className="flex items-center gap-2">
                      Mantén-me Informat
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-subheading text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
              Què Estem Creant
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Característiques <span className="text-gradient-primary">Clau</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="glass-effect rounded-xl p-6 text-center hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/20 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-subheading text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-subheading text-sm font-semibold text-accent uppercase tracking-wider mb-4 block">
              Prepara't
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Molt <span className="text-gradient-accent">Aviat</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Estem treballant dur per poder revelar més detalls pròximament. 
              Segueix-nos i sigues el primer en conèixer les novetats del nostre 
              primer llançament!
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contacte" className="flex items-center gap-2">
                Contacta per Més Info
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Videojocs;
