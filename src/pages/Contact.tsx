import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { toast } from "@/components/ui/sonner";
import { submitWebsiteForm } from "@/lib/form-submission";
import { motion } from "framer-motion";
import { useState } from "react";
import { Instagram, Facebook, Mail, MapPin } from "lucide-react";
import { kitchenBoard } from "@/data/portfolioImages";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      await submitWebsiteForm({
        kind: "contact",
        fields: formData,
      });

      toast.success("Poruka je uspješno poslana.", {
        description: "Javićemo vam se u najkraćem mogućem roku.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error("Slanje poruke nije uspjelo.", {
        description: error instanceof Error ? error.message : "Pokušajte ponovo za nekoliko trenutaka.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-background">
        <div className="container-wide px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="label-text text-muted-foreground mb-4 block">
              Započnite razgovor
            </span>
            <h1 className="heading-display text-foreground mb-6">
              Svaki komad počinje pričom
            </h1>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Podijelite svoju viziju, svoje potrebe i svoje snove. Zajedno ćemo stvoriti
              nešto što će biti cijenjeno generacijama.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <AnimatedSection>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group">
                    <label className="text-xs tracking-wider text-muted-foreground block mb-3 group-focus-within:text-foreground transition-colors duration-300">
                      Vaše ime
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      required
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300 text-base"
                      placeholder="Petar Petrović"
                    />
                  </div>
                  <div className="group">
                    <label className="text-xs tracking-wider text-muted-foreground block mb-3 group-focus-within:text-foreground transition-colors duration-300">
                      Email adresa
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      required
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300 text-base"
                      placeholder="petar@primjer.com"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="text-xs tracking-wider text-muted-foreground block mb-3 group-focus-within:text-foreground transition-colors duration-300">
                    Tema
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground focus:outline-none focus:border-primary transition-colors duration-300 appearance-none cursor-pointer text-base"
                  >
                    <option value="">Izaberite temu...</option>
                    <option value="custom-furniture">Namještaj po mjeri</option>
                    <option value="art-objects">Umjetnički drveni predmeti</option>
                    <option value="interior-design">Enterijerski dizajn od drveta</option>
                    <option value="gifts">Ručni pokloni</option>
                    <option value="other">Ostali upiti</option>
                  </select>
                </div>

                <div className="group">
                  <label className="text-xs tracking-wider text-muted-foreground block mb-3 group-focus-within:text-foreground transition-colors duration-300">
                    Vaša poruka
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required
                    rows={5}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300 resize-none text-base leading-relaxed"
                    placeholder="Recite nam o svom projektu, prostoru, viziji..."
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-12 py-4 bg-primary text-primary-foreground text-sm font-medium tracking-widest uppercase transition-all duration-500 hover:bg-wood-medium hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? "Šaljemo..." : "Pošaljite poruku"}
                  </button>
                </div>
              </form>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="space-y-12">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={kitchenBoard.src}
                  alt={kitchenBoard.alt}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: kitchenBoard.objectPosition }}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="space-y-6">
                <h3 className="font-serif text-2xl text-foreground">Posjetite radionicu</h3>
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-wood-medium mt-1 flex-shrink-0" />
                  <div>
                    <p className="body-regular text-foreground">ATLAGIĆ - ARTE LEGNO</p>
                    <p className="body-regular text-muted-foreground">
                      Ulica Majstora 42<br />
                      11000 Beograd, Srbija
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Posjete radionici moguće su samo uz prethodni dogovor.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-xl text-foreground">Povežite se</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="p-3 border border-border hover:border-primary transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} className="text-foreground" />
                  </a>
                  <a
                    href="#"
                    className="p-3 border border-border hover:border-primary transition-colors duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} className="text-foreground" />
                  </a>
                  <a
                    href="mailto:hello@atlagic-artelegno.com"
                    className="p-3 border border-border hover:border-primary transition-colors duration-300"
                    aria-label="Email"
                  >
                    <Mail size={20} className="text-foreground" />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container-narrow px-6 md:px-12 text-center">
          <AnimatedSection>
            <blockquote className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed">
              "Najbolje vrijeme da posadite drvo bilo je prije dvadeset godina. Drugo najbolje vrijeme je sada."
            </blockquote>
            <p className="mt-6 text-sm text-muted-foreground">- Drevna poslovica</p>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
