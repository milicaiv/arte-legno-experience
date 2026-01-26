import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-workshop.jpg";

export const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img
          src={heroImage}
          alt="Artisan craftsman working with wood"
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
            Handcrafted Wood Art
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="heading-display text-cream mb-6"
          >
            Where Wood
            <br />
            <span className="italic">Becomes Art</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="body-large text-cream/80 max-w-xl mb-10"
          >
            Timeless craft. Living material. Authentic design.
            <br />
            Each piece tells a story of patience, texture, and respect for nature.
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
              Request Custom Piece
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-8 py-4 border border-cream/50 text-cream text-sm font-medium tracking-wide transition-all duration-300 hover:bg-cream/10"
            >
              Our Story
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-cream/60 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-cream/60 to-transparent"
        />
      </motion.div>
    </section>
  );
};
