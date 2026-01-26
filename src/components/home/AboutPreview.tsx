import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Link } from "react-router-dom";
import founderImage from "@/assets/founder-portrait.jpg";

export const AboutPreview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={founderImage}
                  alt="Majstor u svojoj radionici"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary flex items-center justify-center">
                <span className="font-serif text-3xl text-foreground">20+</span>
                <span className="text-xs text-muted-foreground ml-1">Godina</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection direction="right" delay={0.2}>
            <span className="label-text text-muted-foreground mb-4 block">
              Naša Filozofija
            </span>
            <h2 className="heading-section mb-6 text-foreground">
              Umetnost Sporog
              <br />
              <span className="italic">Zanatstva</span>
            </h2>
            <div className="space-y-4 mb-8">
              <p className="body-large text-muted-foreground">
                U svetu masovne proizvodnje, mi smo izabrali drugačiji put. Svaki komad 
                počinje razgovorom između majstora i drveta—razumevanjem njegove 
                teksture, karaktera, priče.
              </p>
              <p className="body-regular text-muted-foreground">
                Osnovan na uverenju da prava lepota zahteva vreme, ATLAGIĆ — ARTE LEGNO 
                stvara ručno izrađene drvene komade koji nose toplinu ljudskog dodira i 
                mudrost prirode. Mi ne pravimo samo nameštaj; stvaramo nasleđe.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center text-foreground font-medium tracking-wide link-underline"
            >
              Otkrijte Našu Priču
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
