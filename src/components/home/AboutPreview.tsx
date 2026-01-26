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
                  alt="The craftsman in his workshop"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary flex items-center justify-center">
                <span className="font-serif text-3xl text-foreground">20+</span>
                <span className="text-xs text-muted-foreground ml-1">Years</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection direction="right" delay={0.2}>
            <span className="label-text text-muted-foreground mb-4 block">
              Our Philosophy
            </span>
            <h2 className="heading-section mb-6 text-foreground">
              The Art of Slow
              <br />
              <span className="italic">Craftsmanship</span>
            </h2>
            <div className="space-y-4 mb-8">
              <p className="body-large text-muted-foreground">
                In a world of mass production, we chose a different path. Each piece begins 
                with a conversation between the craftsman and the wood—understanding its 
                grain, its character, its story.
              </p>
              <p className="body-regular text-muted-foreground">
                Founded on the belief that true beauty takes time, ATLAGIĆ — ARTE LEGNO 
                creates handcrafted wood pieces that carry the warmth of human touch and 
                the wisdom of nature. We don't just make furniture; we create heirlooms.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center text-foreground font-medium tracking-wide link-underline"
            >
              Discover Our Story
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
