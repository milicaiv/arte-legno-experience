import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Link } from "react-router-dom";
import woodPattern from "@/assets/wood-pattern.jpg";

export const FinalCTA = () => {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={woodPattern}
          alt="Šara drveta"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-secondary/90" />
      </div>

      {/* Content */}
      <div className="relative container-wide px-6 md:px-12 lg:px-24 text-center">
        <AnimatedSection>
          <h2 className="heading-display text-foreground max-w-4xl mx-auto mb-8">
            Dozvolite nam da stvorimo komad koji će živjeti s vama generacijama
          </h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto mb-12">
            Svaka kreacija počinje razgovorom. Podijelite svoju viziju, i zajedno 
            ćemo je oživjeti u punom drvetu.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-5 bg-primary text-primary-foreground text-sm font-medium tracking-widest uppercase transition-all duration-300 hover:bg-wood-medium"
          >
            Započnite svoje putovanje
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};
