import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import founderImage from "@/assets/founder-portrait.jpg";
import workshopImage from "@/assets/workshop-interior.jpg";
import craftingHands from "@/assets/crafting-hands.jpg";
import productTable from "@/assets/product-table.jpg";
import productBowl from "@/assets/product-bowl.jpg";
import { TreeDeciduous, Compass, Hand, Sparkles, Shield } from "lucide-react";

const services = [
  {
    icon: TreeDeciduous,
    title: "Custom Wood Furniture",
    description: "Bespoke tables, chairs, and cabinets crafted to your exact vision and space.",
  },
  {
    icon: Compass,
    title: "Art Wood Objects",
    description: "Sculptural pieces that blur the line between furniture and fine art.",
  },
  {
    icon: Hand,
    title: "Interior Wood Design",
    description: "Complete wood interior solutions—from wall panels to custom built-ins.",
  },
  {
    icon: Sparkles,
    title: "Unique Handmade Gifts",
    description: "Personal, meaningful gifts crafted with intention for special moments.",
  },
  {
    icon: Shield,
    title: "Bespoke Projects",
    description: "Complex commissions that push the boundaries of wood craftsmanship.",
  },
];

const process = [
  { step: "01", title: "Selecting the Wood", description: "We source ethically from sustainable forests, choosing each piece for its unique character." },
  { step: "02", title: "Understanding Its Story", description: "Reading the grain, sensing the potential, imagining what it wants to become." },
  { step: "03", title: "Designing with Nature", description: "Collaborating with the wood's natural form to create harmonious designs." },
  { step: "04", title: "Hand Crafting", description: "Patient, precise work—each cut, joint, and curve shaped by experienced hands." },
  { step: "05", title: "Finishing & Protection", description: "Natural oils and finishes that enhance beauty while preserving for generations." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-background">
        <div className="container-wide px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="label-text text-muted-foreground mb-4 block">
                Our Story
              </span>
              <h1 className="heading-display text-foreground mb-6">
                A Life Dedicated to
                <br />
                <span className="italic">Wood & Craft</span>
              </h1>
              <p className="body-large text-muted-foreground">
                Where passion meets patience, and every grain tells a story.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={founderImage}
                  alt="The founder and master craftsman"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow px-6 md:px-12">
          <AnimatedSection className="text-center mb-16">
            <span className="label-text text-muted-foreground mb-4 block">
              The Beginning
            </span>
            <h2 className="heading-section text-foreground mb-8">
              How It All <span className="italic">Started</span>
            </h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={workshopImage}
                  alt="The workshop where it all began"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <p className="body-large text-foreground leading-relaxed">
                  It began in my grandfather's workshop—the smell of oak shavings, 
                  the rhythm of hand planes, the patience of a man who spoke to 
                  wood as if it were alive.
                </p>
                <p className="body-regular text-muted-foreground leading-relaxed">
                  Those early years shaped everything. I learned that wood isn't just 
                  material—it's a living archive of time, weather, and growth. Each 
                  ring tells of a year lived. Each knot holds a memory.
                </p>
                <p className="body-regular text-muted-foreground leading-relaxed">
                  ATLAGIĆ — ARTE LEGNO was born from a simple belief: in our fast world, 
                  there's profound value in things made slowly, with care, with soul. 
                  Things that will outlive us and carry forward the warmth of human touch.
                </p>
                <p className="body-regular text-muted-foreground leading-relaxed italic">
                  Today, twenty years later, that same philosophy guides every piece 
                  that leaves our workshop.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="container-wide px-6 md:px-12 lg:px-24">
          <AnimatedSection className="text-center mb-16">
            <span className="label-text text-muted-foreground mb-4 block">
              What We Create
            </span>
            <h2 className="heading-section text-foreground">
              Our <span className="italic">Services</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <div className="p-8 border border-border hover:border-wood-light hover:shadow-soft transition-all duration-500">
                  <service.icon size={28} className="text-wood-medium mb-6" />
                  <h3 className="font-serif text-xl mb-3 text-foreground">{service.title}</h3>
                  <p className="body-regular text-muted-foreground">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide px-6 md:px-12 lg:px-24">
          <AnimatedSection className="text-center mb-16">
            <span className="label-text text-primary-foreground/70 mb-4 block">
              The Journey
            </span>
            <h2 className="heading-section">
              From Tree to <span className="italic">Treasure</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {process.map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 0.1}>
                <div className="text-center md:text-left">
                  <span className="font-serif text-4xl text-primary-foreground/30 block mb-4">
                    {item.step}
                  </span>
                  <h3 className="font-serif text-lg mb-2 text-primary-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="py-4 bg-background overflow-hidden">
        <div className="flex gap-4 animate-[slide_30s_linear_infinite]">
          {[productTable, craftingHands, productBowl, workshopImage].map((img, index) => (
            <div key={index} className="flex-shrink-0 w-80 h-60 overflow-hidden">
              <img src={img} alt="Craftsmanship" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow px-6 md:px-12 text-center">
          <AnimatedSection>
            <h2 className="heading-section text-foreground mb-6">
              Ready to Begin
              <br />
              <span className="italic">Your Project?</span>
            </h2>
            <p className="body-large text-muted-foreground mb-10 max-w-xl mx-auto">
              Every masterpiece starts with a conversation. Share your vision, 
              and let's create something extraordinary together.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-primary text-primary-foreground text-sm font-medium tracking-widest uppercase transition-all duration-300 hover:bg-wood-medium"
            >
              Start Your Custom Project
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default About;
