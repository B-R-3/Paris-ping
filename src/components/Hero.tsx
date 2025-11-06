import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ping-pong.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Ping Pong Bar Gossima"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
            Le Ping-Pong,
            <br />
            <span className="text-primary">Réinventé à Paris</span>
          </h1>
          <p className="text-xl sm:text-2xl text-foreground/80 max-w-2xl mx-auto text-balance">
            Sport, convivialité et ambiance urbaine au cœur de la capitale
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              onClick={() => scrollToSection("tarifs")}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg px-8 py-6 shadow-[var(--accent-glow)]"
            >
              Réserver une table
            </Button>
            <Button
              onClick={() => scrollToSection("lieu")}
              size="lg"
              variant="outline"
              className="border-foreground/20 text-foreground hover:bg-foreground/10 font-semibold text-lg px-8 py-6"
            >
              Découvrir
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
