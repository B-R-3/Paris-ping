import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-gossima.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-navbar shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <img src={logo} alt="Gossima" className="h-16 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("accueil")}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("lieu")}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Le Lieu
            </button>
            <button
              onClick={() => scrollToSection("tarifs")}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Tarifs & Événements
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("tarifs")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
            >
              Réserver
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 space-y-4 animate-fade-in-up">
            <button
              onClick={() => scrollToSection("accueil")}
              className="block w-full text-left text-foreground/80 hover:text-primary transition-colors font-medium py-2"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("lieu")}
              className="block w-full text-left text-foreground/80 hover:text-primary transition-colors font-medium py-2"
            >
              Le Lieu
            </button>
            <button
              onClick={() => scrollToSection("tarifs")}
              className="block w-full text-left text-foreground/80 hover:text-primary transition-colors font-medium py-2"
            >
              Tarifs & Événements
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-foreground/80 hover:text-primary transition-colors font-medium py-2"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("tarifs")}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
            >
              Réserver
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
