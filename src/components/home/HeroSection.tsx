import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { brandSignature, executiveWorkspace, kitchenBoard } from "@/data/portfolioImages";

const headlineWords = ["Gdje", "drvo", "postaje", "umjetnost"];

const wordVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      delay: 0.5 + i * 0.15,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_hsl(var(--secondary))_0%,_hsl(var(--background))_55%,_hsl(var(--background))_100%)]">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(94,64,43,0.08),transparent_45%,rgba(94,64,43,0.04))]" />

      <div className="relative z-10 container-wide min-h-screen grid grid-cols-1 items-center gap-14 px-6 pb-20 pt-32 md:px-12 md:pb-24 md:pt-40 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-16 lg:px-24">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="label-text mb-6 block normal-case text-muted-foreground"
          >
            Ručno izrađena umjetnost u drvetu
          </motion.span>

          <h1 className="heading-display mb-6 text-foreground" style={{ perspective: "1000px" }}>
            {headlineWords.map((word, i) => (
              <motion.span
                key={word}
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                className="mr-[0.3em] inline-block"
                style={{ transformOrigin: "center bottom" }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="body-large mb-10 max-w-2xl text-muted-foreground"
          >
            Bezvremenski zanat. Živi materijal. Autentičan dizajn.
            <br />
            Svaki komad priča priču o strpljenju, teksturi i poštovanju prema prirodi.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-primary px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground transition-all duration-300 hover:bg-wood-medium hover:shadow-medium"
            >
              Naručite jedinstveni komad
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center border border-border px-8 py-4 text-sm font-medium tracking-wide text-foreground transition-all duration-300 hover:border-primary hover:bg-secondary/50"
            >
              Naša priča
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="relative"
        >
          <div className="relative ml-auto max-w-[640px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.45 }}
              className="overflow-hidden border border-border/60 bg-background shadow-[0_24px_80px_-36px_rgba(43,30,22,0.4)]"
            >
              <img
                src={executiveWorkspace.src}
                alt={executiveWorkspace.alt}
                className="h-[480px] w-full object-cover md:h-[640px]"
                style={{ objectPosition: executiveWorkspace.objectPosition }}
                loading="eager"
                fetchPriority="high"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -16, y: 16 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute -left-4 bottom-6 hidden w-40 overflow-hidden border-4 border-background shadow-large md:block lg:-left-10 lg:w-48"
            >
              <img
                src={brandSignature.src}
                alt={brandSignature.alt}
                className="h-52 w-full object-cover lg:h-60"
                style={{ objectPosition: brandSignature.objectPosition }}
                loading="eager"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16, y: -16 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -right-4 top-6 hidden w-44 overflow-hidden border-4 border-background shadow-large md:block lg:-right-8 lg:w-56"
            >
              <img
                src={kitchenBoard.src}
                alt={kitchenBoard.alt}
                className="h-56 w-full object-cover lg:h-72"
                style={{ objectPosition: kitchenBoard.objectPosition }}
                loading="eager"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="absolute bottom-0 right-0 max-w-xs translate-y-1/2 border border-border/70 bg-background/95 px-6 py-5 shadow-medium backdrop-blur"
            >
              <p className="label-text mb-2 text-muted-foreground">Arte Legno kolekcija</p>
              <p className="font-serif text-2xl leading-tight text-foreground">
                Namještaj, detalji i prostori koji izgledaju mirno, toplo i trajno.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
