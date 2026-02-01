import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Svaki komad djeluje živo. Možete osjetiti dušu drveta i strast majstora.",
    author: "Elena M.",
    location: "Milano, Italija",
  },
  {
    quote: "Pravo zanatstvo koje donosi toplinu u naš dom. To nije namještaj—to je živo prisustvo.",
    author: "Marko K.",
    location: "Beč, Austrija",
  },
  {
    quote: "Pažnja posvećena detaljima je izvanredna. Naš sto je postao srce porodičnih okupljanja.",
    author: "Sofija R.",
    location: "Barselona, Španija",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-wide">
        <AnimatedSection className="text-center mb-16">
          <span className="label-text text-primary-foreground/70 mb-4 block">
            Reči Naših Klijenata
          </span>
          <h2 className="heading-section">
            Priče o
            <br />
            <span className="italic">Povezanosti</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 0.15}>
              <div className="flex flex-col h-full">
                <Quote size={32} className="text-primary-foreground/30 mb-6" />
                <blockquote className="body-large text-primary-foreground/90 mb-8 flex-grow italic">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-medium text-primary-foreground">{testimonial.author}</p>
                  <p className="text-sm text-primary-foreground/60">{testimonial.location}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
