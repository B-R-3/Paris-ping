import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const offers = [
    {
      name: "Séance Libre",
      price: "15€",
      duration: "par heure",
      features: [
        "Accès à une table",
        "Raquettes et balles fournies",
        "Casier sécurisé",
        "Ambiance musicale",
      ],
      popular: false,
    },
    {
      name: "Soirée Groupe",
      price: "120€",
      duration: "jusqu'à 8 personnes",
      features: [
        "Réservation de 3h",
        "2 tables dédiées",
        "Matériel fourni",
        "Cocktails & snacks inclus",
        "Playlist personnalisée",
      ],
      popular: true,
    },
    {
      name: "Privatisation",
      price: "Sur devis",
      duration: "événement sur mesure",
      features: [
        "Tout l'espace privatisé",
        "Animation et coaching",
        "Formule bar & restauration",
        "Tournoi organisé",
        "Service dédié",
      ],
      popular: false,
    },
  ];

  return (
    <section id="tarifs" className="py-24 sm:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
            Tarifs & Événements
          </h2>
          <p className="text-xl text-muted-foreground text-balance">
            Des formules adaptées à toutes vos envies, du match improvisé à l'événement sur mesure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {offers.map((offer, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 ${
                offer.popular
                  ? "bg-primary/10 border-2 border-primary shadow-[var(--accent-glow)] scale-105"
                  : "bg-card border border-border"
              } transition-all duration-300 hover:scale-105`}
            >
              {offer.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Populaire
                  </span>
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{offer.name}</h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl font-bold text-primary">{offer.price}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{offer.duration}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {offer.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  offer.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
                size="lg"
              >
                Réserver
              </Button>
            </div>
          ))}
        </div>

        <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-border max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-6 text-center">Événements Spéciaux</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="text-xl font-semibold text-primary">Tournois Mensuels</h4>
              <p className="text-muted-foreground">
                Participez à nos tournois amicaux chaque premier samedi du mois
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xl font-semibold text-primary">Soirées à Thème</h4>
              <p className="text-muted-foreground">
                DJ sets, soirées 80's, championnats... suivez-nous sur Instagram
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xl font-semibold text-primary">Team Building</h4>
              <p className="text-muted-foreground">
                Organisez votre événement d'entreprise dans un cadre original
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xl font-semibold text-primary">Anniversaires</h4>
              <p className="text-muted-foreground">
                Fêtez votre anniversaire avec une formule tout compris
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
