import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Each piece feels alive. You can feel the soul of the wood and the passion of the craftsman.",
    author: "Elena M.",
    location: "Milan, Italy",
  },
  {
    quote: "True craftsmanship that brings warmth into our home. It's not furniture—it's a living presence.",
    author: "Marcus K.",
    location: "Vienna, Austria",
  },
  {
    quote: "The attention to detail is extraordinary. Our table has become the heart of family gatherings.",
    author: "Sofia R.",
    location: "Barcelona, Spain",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-wide">
        <AnimatedSection className="text-center mb-16">
          <span className="label-text text-primary-foreground/70 mb-4 block">
            Words from Our Clients
          </span>
          <h2 className="heading-section">
            Stories of
            <br />
            <span className="italic">Connection</span>
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
