import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Leaf, Clock, Heart, Shield } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Održivo",
    description: "Etički nabavljeno drvo iz kontrolisanih šuma, poštujući ritam i regeneraciju prirode.",
  },
  {
    icon: Clock,
    title: "Spori Zanat",
    description: "Svaki komad ima svoje prirodno vrijeme. Bez žurbe, bez prečica—samo strpljiva posvećenost.",
  },
  {
    icon: Heart,
    title: "Duša i Strast",
    description: "Svaka kreacija nosi suštinu ljudskog dodira, emocije i umjetničke vizije.",
  },
  {
    icon: Shield,
    title: "Stvoreno da Traje",
    description: "Dizajnirano za generacije. Bezvremena estetika koja prevazilazi trendove i vrijeme.",
  },
];

export const CraftsmanshipSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide">
        <AnimatedSection className="text-center mb-16">
          <span className="label-text text-muted-foreground mb-4 block">
            Naše Vrijednosti
          </span>
          <h2 className="heading-section text-foreground max-w-2xl mx-auto">
            Zanatstvo Koje Govori Duši
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <AnimatedSection key={value.title} delay={index * 0.1} className="h-full">
              <div className="h-full flex flex-col text-center p-8 bg-background hover:shadow-medium transition-all duration-500">
                <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center border border-border">
                  <value.icon size={24} className="text-wood-medium" />
                </div>
                <h3 className="font-serif text-xl mb-3 text-foreground">{value.title}</h3>
                <p className="body-regular text-muted-foreground flex-grow">{value.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
