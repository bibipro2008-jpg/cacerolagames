import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Gamepad2, 
  Palette, 
  Music, 
  Megaphone,
  Globe,
  ArrowRight,
  Check,
  Calendar
} from "lucide-react";

const mainServices = [
  {
    icon: Gamepad2,
    title: "Desenvolupament de Videojocs",
    description: "Creem experiències de joc completes, des del concepte inicial fins al llançament final. El nostre equip domina múltiples motors de joc i tecnologies.",
    features: [
      "Disseny de joc i mecàniques",
      "Programació i arquitectura de software",
      "Integració de sistemes",
      "Testing i optimització",
      "Publicació i distribució",
    ],
  },
  {
    icon: Palette,
    title: "Art 2D i 3D",
    description: "Donem vida visual als projectes amb art original i distintiu. Des de conceptes fins a assets finals, creem mons visuals únics.",
    features: [
      "Concept art i direcció artística",
      "Disseny de personatges",
      "Modelatge i texturitzat 3D",
      "Animació 2D i 3D",
      "Efectes visuals",
    ],
  },
  {
    icon: Music,
    title: "Disseny de So i Música",
    description: "Creem paisatges sonors immersiu en col·laboració amb artistes musicals. La música i el so són essencials per a l'experiència de joc.",
    features: [
      "Bandes sonores originals",
      "Efectes de so",
      "Disseny de so ambiental",
      "Integració d'àudio",
      "Col·laboració amb músics",
    ],
  },
  {
    icon: Megaphone,
    title: "Màrqueting i Distribució",
    description: "Ajudem a portar els jocs al mercat amb estratègies de màrqueting efectives i gestió de la distribució a múltiples plataformes.",
    features: [
      "Estratègia de llançament",
      "Materials promocionals",
      "Gestió de xarxes socials",
      "Relacions amb la premsa",
      "Publicació a plataformes",
    ],
  },
];

const webService = {
  icon: Globe,
  title: "Disseny Web per a Clients Externs",
  description: "A més del desenvolupament de videojocs, oferim serveis de disseny i desenvolupament web per a clients externs. Aquesta activitat ens ajuda a generar ingressos addicionals mentre mantenim el focus en el nostre joc principal.",
  schedule: "Dediquem 2 dies a la setmana (dijous i divendres), només durant la primera i tercera setmana de cada mes, per concentrar-nos en el nostre videojoc la resta del temps.",
  features: [
    "Disseny web responsiu",
    "Desenvolupament frontend i backend",
    "Llocs web corporatius",
    "Botigues online",
    "Manteniment i suport",
  ],
};

const Serveis = () => {
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
              Els Nostres Serveis
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Què <span className="text-gradient-primary">Oferim</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Des del desenvolupament complet de videojocs fins a serveis 
              especialitzats, oferim solucions creatives de qualitat.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-subheading text-sm font-semibold text-accent uppercase tracking-wider mb-4 block">
              Serveis Principals
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Desenvolupament de <span className="text-gradient-accent">Videojocs</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <div
                key={service.title}
                className="glass-effect rounded-2xl p-8 hover-lift"
              >
                <div className="w-14 h-14 mb-6 rounded-xl bg-primary/20 flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Web Service */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="glass-effect rounded-2xl p-8 md:p-10 border-accent/30">
              <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                <div className="w-16 h-16 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <webService.icon className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                    {webService.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {webService.description}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-muted/50 border border-border mb-8 flex items-start gap-3">
                <Calendar className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground text-sm">
                  <strong className="text-foreground">Disponibilitat:</strong> {webService.schedule}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-subheading text-lg font-bold text-foreground mb-4 uppercase tracking-wide">
                    Què Oferim
                  </h4>
                  <ul className="space-y-2">
                    {webService.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm">
                        <Check className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    Interessat en contractar els nostres serveis web? 
                    Contacta amb nosaltres per discutir el teu projecte.
                  </p>
                  <Button variant="accent" asChild>
                    <Link to="/contacte" className="flex items-center gap-2">
                      Sol·licitar Pressupost
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-subheading text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
              Com Treballem
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              El Nostre <span className="text-gradient-primary">Procés</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Descobriment", desc: "Entenem les teves necessitats i objectius" },
              { num: "02", title: "Planificació", desc: "Definim l'abast i el calendari del projecte" },
              { num: "03", title: "Desenvolupament", desc: "Creem amb iteracions constants i feedback" },
              { num: "04", title: "Lliurament", desc: "Entrega final amb suport continuat" },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="font-heading text-4xl font-bold text-primary/30 mb-3">
                  {step.num}
                </div>
                <h4 className="font-subheading text-lg font-bold text-foreground mb-2">
                  {step.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Preparat per <span className="text-gradient-accent">Començar</span>?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Sigui quin sigui el teu projecte, estem preparats per ajudar-te. 
              Contacta amb nosaltres per parlar de les teves idees.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="accent" size="lg" asChild>
                <Link to="/contacte" className="flex items-center gap-2">
                  Contacta amb Nosaltres
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/sobre-nosaltres">Coneix l'Equip</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Serveis;
