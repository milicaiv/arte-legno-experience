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
    title: "Namještaj po mjeri",
    description: "Stolovi, stolice i ormari izrađeni prema vašoj viziji, prostoru i načinu života.",
  },
  {
    icon: Compass,
    title: "Umjetnički drveni predmeti",
    description: "Skulpturalni komadi koji brišu granicu između funkcionalnog predmeta i umjetnosti.",
  },
  {
    icon: Hand,
    title: "Enterijerski dizajn od drveta",
    description: "Kompletna drvena rješenja za enterijer, od zidnih panela do ugradbenog namještaja.",
  },
  {
    icon: Sparkles,
    title: "Jedinstveni ručni pokloni",
    description: "Lični i značajni pokloni izrađeni s pažnjom za posebne trenutke.",
  },
  {
    icon: Shield,
    title: "Projekti po narudžbini",
    description: "Kompleksne narudžbe koje traže promišljeno rješenje i vrhunsku izvedbu.",
  },
];

const process = [
  {
    step: "01",
    title: "Odabir drveta",
    description: "Biramo drvo iz održivih izvora, pažljivo prateći njegov karakter, porijeklo i potencijal.",
  },
  {
    step: "02",
    title: "Razumijevanje materijala",
    description: "Čitamo teksturu, osluškujemo formu i zamišljamo šta drvo prirodno želi postati.",
  },
  {
    step: "03",
    title: "Dizajn u skladu s prirodom",
    description: "Oblikujemo ideju tako da poštuje strukturu drveta i prostor za koji je namijenjena.",
  },
  {
    step: "04",
    title: "Ručna izrada",
    description: "Svaki rez, spoj i krivina nastaju strpljivo, precizno i s punom pažnjom prema detalju.",
  },
  {
    step: "05",
    title: "Završna obrada",
    description: "Prirodna ulja i završni slojevi štite površinu i ističu ljepotu koja traje godinama.",
  },
];

const About = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-background">
        <div className="container-wide px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="label-text text-muted-foreground mb-4 block">
                Naša priča
              </span>
              <h1 className="heading-display text-foreground mb-6">
                Život posvećen drvetu i zanatu
              </h1>
              <p className="body-large text-muted-foreground">
                Gdje se strast susreće sa strpljenjem, a svaka tekstura nosi svoju priču.
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
                  alt="Osnivač i majstor zanatstva"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-narrow px-6 md:px-12">
          <AnimatedSection className="text-center mb-16">
            <span className="label-text text-muted-foreground mb-4 block">
              Početak
            </span>
            <h2 className="heading-section text-foreground mb-8">
              Kako je sve počelo
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={workshopImage}
                  alt="Radionica gdje je sve počelo"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <p className="body-large text-foreground leading-relaxed">
                  Sve je počelo u djedovoj radionici, uz miris hrastovih strugotina,
                  ritam ručnih blanja i strpljenje čovjeka koji je sa drvetom
                  razgovarao kao sa živim bićem.
                </p>
                <p className="body-regular text-muted-foreground leading-relaxed">
                  Te rane godine oblikovale su sve što danas radimo. Naučio sam da
                  drvo nije samo materijal, već živi arhiv vremena, klime i rasta.
                  Svaki god govori o jednoj godini života, a svaki čvor čuva svoje sjećanje.
                </p>
                <p className="body-regular text-muted-foreground leading-relaxed">
                  ATLAGIĆ - ARTE LEGNO rođen je iz jednostavnog uvjerenja: u brzom
                  svijetu i dalje postoji duboka vrijednost u stvarima nastalim polako,
                  pažljivo i s dušom. U predmetima koji nas mogu nadživjeti i prenijeti
                  toplinu ljudskog dodira.
                </p>
                <p className="body-regular text-muted-foreground leading-relaxed">
                  Danas, dvadeset godina kasnije, ta ista filozofija vodi svaki komad
                  koji napušta našu radionicu.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide px-6 md:px-12 lg:px-24">
          <AnimatedSection className="text-center mb-16">
            <span className="label-text text-muted-foreground mb-4 block">
              Šta stvaramo
            </span>
            <h2 className="heading-section text-foreground">
              Naše usluge
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <div className="h-full p-8 border border-border hover:border-wood-light hover:shadow-soft transition-all duration-500 flex flex-col">
                  <service.icon size={28} className="text-wood-medium mb-6" />
                  <h3 className="font-serif text-xl mb-3 text-foreground">{service.title}</h3>
                  <p className="body-regular text-muted-foreground flex-grow">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide px-6 md:px-12 lg:px-24">
          <AnimatedSection className="text-center mb-16">
            <span className="label-text text-primary-foreground/70 mb-4 block">
              Putovanje
            </span>
            <h2 className="heading-section">
              Od drveta do blaga
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

      <section className="py-4 bg-background overflow-hidden">
        <div className="flex gap-4 animate-[slide_30s_linear_infinite]">
          {[productTable, craftingHands, productBowl, workshopImage].map((img, index) => (
            <div key={index} className="flex-shrink-0 w-80 h-60 overflow-hidden">
              <img src={img} alt="Zanatstvo" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-narrow px-6 md:px-12 text-center">
          <AnimatedSection>
            <h2 className="heading-section text-foreground mb-6">
              Spremni da započnete svoj projekat?
            </h2>
            <p className="body-large text-muted-foreground mb-10 max-w-xl mx-auto">
              Svako remek-djelo počinje razgovorom. Podijelite svoju viziju,
              i hajde da zajedno stvorimo nešto izvanredno.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-primary text-primary-foreground text-sm font-medium tracking-widest uppercase transition-all duration-300 hover:bg-wood-medium"
            >
              Započnite svoj projekat
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default About;
