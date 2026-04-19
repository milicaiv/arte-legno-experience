import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Link } from "react-router-dom";
import { livingRoomInterior } from "@/data/portfolioImages";

export const FinalCTA = () => {
  return (
    <section className="relative overflow-hidden py-32 md:py-40">
      <div className="absolute inset-0">
        <img
          src={livingRoomInterior.src}
          alt={livingRoomInterior.alt}
          className="h-full w-full object-cover"
          style={{ objectPosition: livingRoomInterior.objectPosition }}
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,244,239,0.74),rgba(248,244,239,0.9))]" />
      </div>

      <div className="relative container-wide px-6 text-center md:px-12 lg:px-24">
        <AnimatedSection>
          <div className="mx-auto max-w-4xl border border-border/70 bg-background/80 px-8 py-12 shadow-large backdrop-blur md:px-14 md:py-16">
            <h2 className="heading-display mx-auto mb-8 max-w-4xl text-foreground">
              Dozvolite nam da stvorimo komad koji će živjeti s vama generacijama
            </h2>
            <p className="body-large mx-auto mb-12 max-w-2xl text-muted-foreground">
              Svaka kreacija počinje razgovorom. Podijelite svoju viziju, a zajedno
              ćemo je oživjeti u punom drvetu.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-primary px-10 py-5 text-sm font-medium tracking-widest text-primary-foreground transition-all duration-300 hover:bg-wood-medium"
            >
              Započnite svoje putovanje
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
