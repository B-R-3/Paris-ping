import { Sparkles, Users, Trophy } from "lucide-react";

const Venue = () => {
  const features = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Ambiance Unique",
      description: "Un espace urbain et moderne qui mélange sport et convivialité",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Pour Tous",
      description: "Débutants ou confirmés, venez jouer entre amis ou en famille",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Événements",
      description: "Tournois, soirées à thème et privatisations sur mesure",
    },
  ];

  return (
    <section id="lieu" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
            Le Lieu
          </h2>
          <p className="text-xl text-muted-foreground text-balance">
            Bienvenue chez Gossima, votre nouveau terrain de jeu au cœur de Paris.
            Un bar à ping-pong où l'esprit sportif rencontre la culture urbaine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--accent-glow)]"
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-border">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Notre Espace</h3>
              <p className="text-muted-foreground leading-relaxed">
                Situé dans un cadre industriel raffiné, Gossima propose plusieurs
                tables de ping-pong professionnelles, un bar cosy et une ambiance
                musicale soigneusement sélectionnée.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Que vous veniez pour une partie rapide après le travail, organiser
                un événement d'entreprise ou simplement profiter d'un verre entre
                amis, notre équipe vous accueille dans une atmosphère décontractée
                et chaleureuse.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-secondary/50 rounded-xl p-6 text-center border border-border">
                <div className="text-4xl font-bold text-primary mb-2">8</div>
                <div className="text-sm text-muted-foreground">Tables Pro</div>
              </div>
              <div className="bg-secondary/50 rounded-xl p-6 text-center border border-border">
                <div className="text-4xl font-bold text-primary mb-2">200m²</div>
                <div className="text-sm text-muted-foreground">D'espace</div>
              </div>
              <div className="bg-secondary/50 rounded-xl p-6 text-center border border-border">
                <div className="text-4xl font-bold text-primary mb-2">7/7</div>
                <div className="text-sm text-muted-foreground">Ouvert</div>
              </div>
              <div className="bg-secondary/50 rounded-xl p-6 text-center border border-border">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Fun</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
