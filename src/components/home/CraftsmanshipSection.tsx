import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Leaf, Clock, Heart, Shield } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Sustainable",
    description: "Ethically sourced wood from managed forests, respecting nature's rhythm and regeneration.",
  },
  {
    icon: Clock,
    title: "Slow Craft",
    description: "Each piece takes its natural time. No rushing, no shortcuts—just patient dedication.",
  },
  {
    icon: Heart,
    title: "Soul & Passion",
    description: "Every creation carries the essence of human touch, emotion, and artistic vision.",
  },
  {
    icon: Shield,
    title: "Built to Last",
    description: "Designed for generations. Timeless aesthetics that transcend trends and time.",
  },
];

export const CraftsmanshipSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide">
        <AnimatedSection className="text-center mb-16">
          <span className="label-text text-muted-foreground mb-4 block">
            Our Values
          </span>
          <h2 className="heading-section text-foreground max-w-2xl mx-auto">
            Craftsmanship That
            <br />
            <span className="italic">Speaks to the Soul</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <AnimatedSection key={value.title} delay={index * 0.1}>
              <div className="text-center p-8 bg-background hover:shadow-medium transition-all duration-500">
                <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center border border-border">
                  <value.icon size={24} className="text-wood-medium" />
                </div>
                <h3 className="font-serif text-xl mb-3 text-foreground">{value.title}</h3>
                <p className="body-regular text-muted-foreground">{value.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
