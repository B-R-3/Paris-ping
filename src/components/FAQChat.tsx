import { useState } from "react";
import { MessageCircle, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const FAQChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const faqs = [
    {
      question: "Dois-je réserver à l'avance ?",
      answer: "La réservation est recommandée, surtout en soirée et le week-end. Mais vous pouvez aussi venir sans réservation si des tables sont disponibles.",
    },
    {
      question: "Le matériel est-il fourni ?",
      answer: "Oui, nous fournissons raquettes et balles de qualité professionnelle. Vous pouvez aussi apporter votre propre matériel.",
    },
    {
      question: "Y a-t-il un bar et de la restauration ?",
      answer: "Absolument ! Notre bar propose boissons, cocktails et snacks. Des formules restauration sont disponibles pour les groupes et événements.",
    },
    {
      question: "Puis-je privatiser l'espace ?",
      answer: "Oui, nous proposons des privatisations pour anniversaires, événements d'entreprise, ou toute occasion spéciale. Contactez-nous pour un devis personnalisé.",
    },
    {
      question: "Quel est le niveau requis ?",
      answer: "Tous les niveaux sont les bienvenus ! Que vous soyez débutant ou joueur confirmé, notre espace est fait pour vous amuser.",
    },
  ];

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg transition-all duration-300 ${
          isOpen ? "bg-secondary hover:bg-secondary/80" : "bg-primary hover:bg-primary/90 shadow-[var(--accent-glow)]"
        }`}
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* FAQ Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-full max-w-md animate-fade-in-up">
          <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-primary text-primary-foreground p-6">
              <h3 className="text-xl font-bold">Questions Fréquentes</h3>
              <p className="text-sm opacity-90 mt-1">Trouvez rapidement vos réponses</p>
            </div>
            <div className="p-4 max-h-96 overflow-y-auto space-y-2">
              {faqs.map((faq, index) => (
                <Collapsible key={index}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-secondary/50 hover:bg-secondary/70 rounded-xl transition-colors group">
                    <span className="font-medium pr-4">{faq.question}</span>
                    <ChevronDown className="h-5 w-5 text-muted-foreground group-data-[state=open]:rotate-180 transition-transform flex-shrink-0" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-4 py-3 text-muted-foreground text-sm">
                    {faq.answer}
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
            <div className="p-4 bg-secondary/30 border-t border-border">
              <p className="text-sm text-muted-foreground text-center">
                Besoin de plus d'infos ?{" "}
                <a href="mailto:hello@gossima.paris" className="text-primary hover:underline font-medium">
                  Contactez-nous
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FAQChat;
