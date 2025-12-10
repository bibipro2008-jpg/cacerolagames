import { Layout } from "@/components/layout/Layout";
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Lightbulb, 
  Award,
  MapPin,
  Calendar
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passió",
    description: "Estimem el que fem. Cada línia de codi, cada píxel i cada nota musical reflecteix el nostre amor pels videojocs.",
  },
  {
    icon: Lightbulb,
    title: "Creativitat",
    description: "Busquem constantment maneres innovadores de sorprendre i emocionar els jugadors.",
  },
  {
    icon: Users,
    title: "Treball en Equip",
    description: "Creiem en el poder de la col·laboració. Junts som més forts i creem millors experiències.",
  },
  {
    icon: Award,
    title: "Excel·lència",
    description: "Aspirem a la qualitat AAA. Cada detall compta quan es tracta de crear experiències memorables.",
  },
];

const SobreNosaltres = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="font-subheading text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
              Sobre Nosaltres
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              La Nostra <span className="text-gradient-primary">Història</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Des de L'Escala, un petit poble de la Costa Brava, 
              neix un somni gegant: crear videojocs que arribin a tot el món.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Com Tot Va <span className="text-gradient-accent">Començar</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Cacerola Games va néixer de la passió compartida de dos fundadors 
                  que van decidir convertir el seu somni en realitat. Amb seu a L'Escala, 
                  un encantador poble de la Costa Brava catalana, hem construït un espai 
                  on la creativitat i la innovació floreixen.
                </p>
                <p>
                  El nostre nom, "Cacerola", simbolitza la barreja d'ingredients que és 
                  el desenvolupament de videojocs: art, tecnologia, narrativa i passió, 
                  tot cuit a foc lent per crear experiències úniques.
                </p>
                <p>
                  Avui, el nostre equip ha crescut fins a tenir 11 membres, incloent 
                  desenvolupadors sèniors i júniors, dissenyadors i estudiants en pràctiques. 
                  Creiem fermament en formar la propera generació de talents.
                </p>
              </div>
            </div>
            
            <div className="glass-effect rounded-2xl p-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-subheading text-lg font-bold text-foreground">Ubicació</h4>
                  <p className="text-muted-foreground">L'Escala, Costa Brava, Catalunya</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-subheading text-lg font-bold text-foreground">Fundat</h4>
                  <p className="text-muted-foreground">2025</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-subheading text-lg font-bold text-foreground">Equip</h4>
                  <p className="text-muted-foreground">11 membres apassionats</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-effect rounded-2xl p-8 hover-lift">
              <div className="w-14 h-14 mb-6 rounded-xl bg-primary/20 flex items-center justify-center">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                La Nostra Missió
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Crear videojocs innovadors i experiències interactives que connectin 
                amb jugadors de tot el món, mentre formem i donem suport a nous talents 
                del sector. Volem demostrar que des de Catalunya podem crear productes 
                de qualitat internacional.
              </p>
            </div>
            
            <div className="glass-effect rounded-2xl p-8 hover-lift">
              <div className="w-14 h-14 mb-6 rounded-xl bg-accent/20 flex items-center justify-center">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                La Nostra Visió
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Convertir-nos en un referent del sector indie català i ser reconeguts 
                a nivell internacional per la qualitat, originalitat i impacte emocional 
                dels nostres jocs. Aspirem a crear títols que siguin recordats i que 
                inspirin futures generacions de desenvolupadors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-subheading text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
              El Que Ens Defineix
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Els Nostres <span className="text-gradient-primary">Valors</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="glass-effect rounded-xl p-6 text-center hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/20 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-subheading text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-subheading text-sm font-semibold text-accent uppercase tracking-wider mb-4 block">
              El Nostre Ambient
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Una Cultura de <span className="text-gradient-accent">Suport</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              A Cacerola Games, creiem que el millor treball sorgeix en un ambient de 
              suport i col·laboració. Els nostres desenvolupadors sèniors actuen com a 
              mentors per als estudiants en pràctiques, creant un cicle d'aprenentatge 
              i creixement continu.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Acollim estudiants de CFGS DAM i universitaris, oferint-los l'oportunitat 
              de treballar en projectes reals mentre desenvolupen les seves habilitats 
              en un entorn professional i amigable.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SobreNosaltres;
