import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  MapPin, 
  Clock,
  Send,
  Gamepad2,
  Globe
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Correu Electrònic",
    content: "hola@cacerolagames.com",
    description: "Escriu-nos per a qualsevol consulta",
  },
  {
    icon: MapPin,
    title: "Ubicació",
    content: "L'Escala, Costa Brava",
    description: "Catalunya, Espanya",
  },
  {
    icon: Clock,
    title: "Horari",
    content: "Dilluns - Divendres",
    description: "9:00 - 18:00",
  },
];

const interests = [
  { value: "joc", label: "Informació sobre el nostre joc", icon: Gamepad2 },
  { value: "web", label: "Serveis de disseny web", icon: Globe },
  { value: "colaboracio", label: "Col·laboració", icon: Mail },
  { value: "altres", label: "Altres consultes", icon: Mail },
];

const Contacte = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Missatge enviat!",
      description: "Gràcies per contactar-nos. Et respondrem el més aviat possible.",
    });

    setFormData({ name: "", email: "", interest: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
              Contacte
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Parlem del Teu <span className="text-gradient-primary">Projecte</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Tens una idea, una pregunta o simplement vols saludar? 
              Estarem encantats d'escoltar-te.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                Envia'ns un <span className="text-gradient-accent">Missatge</span>
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="font-subheading text-sm font-semibold text-foreground uppercase tracking-wide">
                      Nom *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="El teu nom"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-muted/50 border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="font-subheading text-sm font-semibold text-foreground uppercase tracking-wide">
                      Correu Electrònic *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="hola@exemple.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-muted/50 border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="interest" className="font-subheading text-sm font-semibold text-foreground uppercase tracking-wide">
                    M'interessa *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    className="w-full h-10 px-3 rounded-lg bg-muted/50 border border-border text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Selecciona una opció</option>
                    {interests.map((interest) => (
                      <option key={interest.value} value={interest.value}>
                        {interest.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="font-subheading text-sm font-semibold text-foreground uppercase tracking-wide">
                    Missatge *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Explica'ns la teva idea o consulta..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-muted/50 border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full md:w-auto"
                >
                  {isSubmitting ? (
                    "Enviant..."
                  ) : (
                    <>
                      Enviar Missatge
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                Informació de <span className="text-gradient-primary">Contacte</span>
              </h2>
              
              <div className="space-y-6 mb-10">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className="glass-effect rounded-xl p-6 hover-lift"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-subheading text-lg font-bold text-foreground mb-1">
                          {info.title}
                        </h4>
                        <p className="text-foreground font-medium">{info.content}</p>
                        <p className="text-muted-foreground text-sm">{info.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Web Services Note */}
              <div className="p-6 rounded-xl bg-accent/10 border border-accent/30">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-subheading text-base font-bold text-foreground mb-2">
                      Serveis Web
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Recordeu que oferim serveis de disseny web per a clients externs 
                      durant la primera i tercera setmana de cada mes (dijous i divendres). 
                      Contacteu-nos per sol·licitar pressupost!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              On Ens <span className="text-gradient-primary">Trobaràs</span>
            </h2>
          </div>
          
          <div className="glass-effect rounded-2xl overflow-hidden aspect-[16/9] md:aspect-[21/9] flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                L'Escala, Costa Brava
              </h3>
              <p className="text-muted-foreground">
                Catalunya, Espanya
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacte;
