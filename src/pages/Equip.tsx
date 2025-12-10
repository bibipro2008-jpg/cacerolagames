import { Layout } from "@/components/layout/Layout";
import { 
  Crown, 
  Code, 
  GraduationCap, 
  Palette,
  Calculator,
  Music,
  Star
} from "lucide-react";

const teamMembers = [
  // Directors
  {
    name: "Biel Pous",
    role: "Cofundador i Director",
    description: "Visionari i líder estratègic. Supervisa la direcció creativa i de negoci de l'estudi.",
    icon: Crown,
    category: "Direcció",
    accent: true,
  },
  {
    name: "Ian Nicolau",
    role: "Cofundador i Director",
    description: "Expert en gestió de projectes i desenvolupament. Assegura que cada projecte arribi a bon port.",
    icon: Crown,
    category: "Direcció",
    accent: true,
  },
  // Seniors
  {
    name: "Wilson.McFly",
    role: "Desenvolupador Sènior / Tutor",
    description: "Especialista en arquitectura de software. Mentoritza als estudiants mentre lidera el desenvolupament tècnic.",
    icon: Code,
    category: "Desenvolupament Sènior",
  },
  {
    name: "Guillem",
    role: "Desenvolupador Sènior / Tutor",
    description: "Expert en gameplay i mecàniques de joc. Guia als júniors i becaris en les millors pràctiques.",
    icon: Code,
    category: "Desenvolupament Sènior",
  },
  {
    name: "Lmao",
    role: "Desenvolupador Sènior",
    description: "Especialista en gràfics i optimització. Assegura que el joc funcioni perfectament en totes les plataformes.",
    icon: Code,
    category: "Desenvolupament Sènior",
  },
  // Juniors
  {
    name: "Hor",
    role: "Desenvolupador Júnior",
    description: "Programador entusiasta amb grans habilitats en C# i Unity. Treballa en sistemes de joc.",
    icon: Code,
    category: "Desenvolupament Júnior",
  },
  {
    name: "Jeffrey",
    role: "Desenvolupador Júnior",
    description: "Especialitzat en UI/UX i sistemes de menús. Crea interfícies intuïtives i atractives.",
    icon: Code,
    category: "Desenvolupament Júnior",
  },
  {
    name: "Isidoro",
    role: "Desenvolupador Júnior",
    description: "Apassionat de la programació de IA per a videojocs. Dóna vida als personatges no jugables.",
    icon: Code,
    category: "Desenvolupament Júnior",
  },
  // Becaris
  {
    name: "Becari CFGS DAM",
    role: "Estudiant en Pràctiques",
    description: "Estudiant de Cicle Formatiu de Grau Superior en Desenvolupament d'Aplicacions Multiplataforma. Aprèn i contribueix en tasques de desenvolupament.",
    icon: GraduationCap,
    category: "Becaris",
  },
  {
    name: "Becari Universitari",
    role: "Estudiant en Pràctiques",
    description: "Estudiant universitari d'Enginyeria Informàtica. Col·labora en projectes reals mentre adquireix experiència professional.",
    icon: GraduationCap,
    category: "Becaris",
  },
];

const collaborators = [
  {
    name: "Dissenyador Gràfic",
    role: "Col·laborador Extern",
    description: "Jove dissenyador amb talent i motivació per aprendre. Crea assets visuals únics per als nostres projectes.",
    icon: Palette,
    category: "Col·laboradors",
  },
  {
    name: "Gestor Extern",
    role: "Comptabilitat i Administració",
    description: "Professional que gestiona la comptabilitat i tasques administratives que queden fora de la nostra especialització.",
    icon: Calculator,
    category: "Col·laboradors",
  },
  {
    name: "Banda Musical",
    role: "Compositors de Banda Sonora",
    description: "Una banda que ens encanta! Col·laborem amb ells per crear la banda sonora original dels nostres jocs, donant-los visibilitat.",
    icon: Music,
    category: "Col·laboradors",
  },
];

const Equip = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="font-subheading text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
              El Nostre Equip
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Les Persones Darrere la <span className="text-gradient-primary">Màgia</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Un equip divers i apassionat que treballa unit per crear 
              experiències de joc extraordinàries.
            </p>
          </div>
        </div>
      </section>

      {/* Directors */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-subheading text-sm font-semibold text-accent uppercase tracking-wider mb-4 block">
              Lideratge
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Els Nostres <span className="text-gradient-accent">Directors</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.filter(m => m.category === "Direcció").map((member, index) => (
              <div
                key={member.name}
                className="glass-effect rounded-2xl p-8 hover-lift border-accent/30"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <member.icon className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-heading text-xl font-bold text-foreground">
                        {member.name}
                      </h3>
                      <Star className="w-4 h-4 text-accent fill-accent" />
                    </div>
                    <p className="text-primary font-subheading font-semibold text-sm uppercase tracking-wide mb-3">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Team */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-subheading text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
              Desenvolupament
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              L'Equip <span className="text-gradient-primary">Tècnic</span>
            </h2>
          </div>

          {/* Seniors */}
          <div className="mb-12">
            <h3 className="font-subheading text-lg font-bold text-foreground mb-6 text-center uppercase tracking-wide">
              Desenvolupadors Sèniors
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {teamMembers.filter(m => m.category === "Desenvolupament Sènior").map((member) => (
                <div
                  key={member.name}
                  className="glass-effect rounded-xl p-6 hover-lift"
                >
                  <div className="w-12 h-12 mb-4 rounded-lg bg-primary/20 flex items-center justify-center">
                    <member.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-heading text-lg font-bold text-foreground mb-1">
                    {member.name}
                  </h4>
                  <p className="text-primary font-subheading font-semibold text-xs uppercase tracking-wide mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Juniors */}
          <div className="mb-12">
            <h3 className="font-subheading text-lg font-bold text-foreground mb-6 text-center uppercase tracking-wide">
              Desenvolupadors Júniors
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {teamMembers.filter(m => m.category === "Desenvolupament Júnior").map((member) => (
                <div
                  key={member.name}
                  className="glass-effect rounded-xl p-6 hover-lift"
                >
                  <div className="w-12 h-12 mb-4 rounded-lg bg-primary/20 flex items-center justify-center">
                    <member.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-heading text-lg font-bold text-foreground mb-1">
                    {member.name}
                  </h4>
                  <p className="text-primary font-subheading font-semibold text-xs uppercase tracking-wide mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Interns */}
          <div>
            <h3 className="font-subheading text-lg font-bold text-foreground mb-6 text-center uppercase tracking-wide">
              Estudiants en Pràctiques
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {teamMembers.filter(m => m.category === "Becaris").map((member) => (
                <div
                  key={member.name}
                  className="glass-effect rounded-xl p-6 hover-lift"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <member.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-heading text-lg font-bold text-foreground mb-1">
                        {member.name}
                      </h4>
                      <p className="text-accent font-subheading font-semibold text-xs uppercase tracking-wide mb-2">
                        {member.role}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Collaborators */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-subheading text-sm font-semibold text-accent uppercase tracking-wider mb-4 block">
              Xarxa de Talent
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Els Nostres <span className="text-gradient-accent">Col·laboradors</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Treballem amb professionals i artistes externs que complementen 
              les nostres habilitats i enriqueixen els nostres projectes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {collaborators.map((collaborator) => (
              <div
                key={collaborator.name}
                className="glass-effect rounded-xl p-6 hover-lift text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-accent/20 flex items-center justify-center">
                  <collaborator.icon className="w-7 h-7 text-accent" />
                </div>
                <h4 className="font-heading text-lg font-bold text-foreground mb-1">
                  {collaborator.name}
                </h4>
                <p className="text-accent font-subheading font-semibold text-xs uppercase tracking-wide mb-3">
                  {collaborator.role}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {collaborator.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-subheading text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
              Formació i Creixement
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Mentoria i <span className="text-gradient-primary">Aprenentatge</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A Cacerola Games, creiem fermament en el poder de la mentoria. 
              Els nostres desenvolupadors sèniors actuen com a tutors per als estudiants 
              en pràctiques, guiant-los en projectes reals i ajudant-los a créixer 
              professionalment.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Oferim un ambient de treball on el nou talent pot florir, 
              adquirint experiència valuosa mentre contribueix de manera significativa 
              als nostres projectes. És la nostra manera de retornar a la comunitat 
              i assegurar el futur de la indústria.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Equip;
