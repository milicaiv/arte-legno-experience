import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-workshop.jpg";

const headlineWords = ["Gdje", "Drvo", "Postaje", "Umjetnost"];

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
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img
          src={heroImage}
          alt="Majstor zanatstva radi sa drvetom"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="label-text text-cream/80 mb-6 block"
          >
            Ručno izrađena umjetnost od drveta
          </motion.span>

          <h1 className="heading-display text-cream mb-6" style={{ perspective: "1000px" }}>
            {headlineWords.map((word, i) => (
              <motion.span
                key={word}
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                className="inline-block mr-[0.3em]"
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
            className="body-large text-cream/80 max-w-xl mb-10"
          >
            Bezvremeni zanat. Živi materijal. Autentičan dizajn.
            <br />
            Svaki komad priča priču o strpljenju, teksturi i poštovanju prema prirodi.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-cream text-charcoal text-sm font-medium tracking-wide transition-all duration-300 hover:bg-cream-dark"
            >
              Naručite jedinstveni komad
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-8 py-4 border border-cream/50 text-cream text-sm font-medium tracking-wide transition-all duration-300 hover:bg-cream/10"
            >
              Naša priča
            </Link>
          </motion.div>
        </div>
      </div>

    </section>
  );
};
