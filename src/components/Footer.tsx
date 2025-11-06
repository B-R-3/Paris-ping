import { Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/20 border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Gossima</h3>
            <p className="text-muted-foreground text-sm">
              Le ping-pong bar parisien qui allie sport, convivialité et culture urbaine.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Liens Rapides</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#accueil" className="text-muted-foreground hover:text-primary transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#lieu" className="text-muted-foreground hover:text-primary transition-colors">
                  Le Lieu
                </a>
              </li>
              <li>
                <a href="#tarifs" className="text-muted-foreground hover:text-primary transition-colors">
                  Tarifs
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Suivez-nous</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@gossima.paris"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Gossima. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
