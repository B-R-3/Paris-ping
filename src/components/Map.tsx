const Map = () => {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
            Nous Trouver
          </h2>
          <p className="text-xl text-muted-foreground text-balance">
            Au cœur de Paris, facilement accessible en métro
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Adresse</h3>
              <p className="text-muted-foreground text-lg">
                42 Rue du Ping-Pong
                <br />
                75011 Paris
                <br />
                France
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Horaires</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex justify-between max-w-xs">
                  <span className="font-medium">Lundi - Jeudi</span>
                  <span>16h - 00h</span>
                </p>
                <p className="flex justify-between max-w-xs">
                  <span className="font-medium">Vendredi</span>
                  <span>16h - 02h</span>
                </p>
                <p className="flex justify-between max-w-xs">
                  <span className="font-medium">Samedi</span>
                  <span>14h - 02h</span>
                </p>
                <p className="flex justify-between max-w-xs">
                  <span className="font-medium">Dimanche</span>
                  <span>14h - 00h</span>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Contact</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <span className="font-medium">Téléphone:</span>{" "}
                  <a href="tel:+33123456789" className="hover:text-primary transition-colors">
                    01 23 45 67 89
                  </a>
                </p>
                <p>
                  <span className="font-medium">Email:</span>{" "}
                  <a href="mailto:hello@gossima.paris" className="hover:text-primary transition-colors">
                    hello@gossima.paris
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-border shadow-lg h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937604!2d2.3470599!3d48.8588897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b005%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gossima Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
