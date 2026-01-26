import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import woodTexture from "@/assets/wood-texture-1.jpg";
import workshopInterior from "@/assets/workshop-interior.jpg";
import craftingHands from "@/assets/crafting-hands.jpg";
import productBowl from "@/assets/product-bowl.jpg";
import productTable from "@/assets/product-table.jpg";
import heroWorkshop from "@/assets/hero-workshop.jpg";

const categories = ["Sve", "Filozofija", "Iza Scene", "Održivost", "Proces Izrade"];

const posts = [
  {
    image: woodTexture,
    category: "Filozofija",
    title: "Jezik Teksture Drveta",
    excerpt: "Razumevanje priča koje svaki komad drveta priča kroz svoje jedinstvene šare i kako učimo da ih čitamo.",
    date: "Januar 2026",
    featured: true,
  },
  {
    image: workshopInterior,
    category: "Iza Scene",
    title: "Dan u Radionici",
    excerpt: "Ritam ručnog zanata—od prvog svetla zore do poslednjeg poliranja dana.",
    date: "Januar 2026",
  },
  {
    image: craftingHands,
    category: "Održivost",
    title: "Poštovanje Ritma Prirode",
    excerpt: "Zašto su sporo zanatstvo i održivost neodvojive vrednosti u našoj praksi.",
    date: "Decembar 2025",
  },
  {
    image: productBowl,
    category: "Proces Izrade",
    title: "Umetnost Struganja Drveta",
    excerpt: "Meditativna praksa koja pretvara sirovu građu u tečne, organske forme.",
    date: "Decembar 2025",
  },
  {
    image: productTable,
    category: "Filozofija",
    title: "Stolovi Koji Okupljaju",
    excerpt: "O dizajniranju nameštaja koji postaje srce porodičnog života i razgovora.",
    date: "Novembar 2025",
  },
  {
    image: heroWorkshop,
    category: "Iza Scene",
    title: "Alati Zanata",
    excerpt: "Ručni alati prenošeni kroz generacije i njihova nezamenljiva uloga.",
    date: "Novembar 2025",
  },
];

const Blog = () => {
  const featuredPost = posts.find((p) => p.featured);
  const regularPosts = posts.filter((p) => !p.featured);

  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-background">
        <div className="container-wide px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="label-text text-muted-foreground mb-4 block">
              Priče iz Radionice
            </span>
            <h1 className="heading-display text-foreground mb-6">
              <span className="italic">Razmišljanja</span> o
              <br />
              Drvetu i Zanatu
            </h1>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Misli, priče i uvidi iz života posvećenog umetnosti 
              ručno izrađenog drveta.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 border-y border-border bg-background">
        <div className="container-wide px-6 md:px-12 lg:px-24">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {categories.map((cat, index) => (
              <motion.button
                key={cat}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`text-sm tracking-wide transition-colors duration-300 ${
                  index === 0
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="section-padding bg-background">
          <div className="container-wide px-6 md:px-12 lg:px-24">
            <AnimatedSection>
              <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center cursor-pointer group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div>
                  <span className="label-text text-wood-medium mb-4 block">
                    Istaknuto • {featuredPost.category}
                  </span>
                  <h2 className="heading-subsection text-foreground mb-4 group-hover:text-wood-medium transition-colors duration-300">
                    {featuredPost.title}
                  </h2>
                  <p className="body-large text-muted-foreground mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <span className="text-sm text-muted-foreground">{featuredPost.date}</span>
                </div>
              </article>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Divider */}
      <div className="container-wide px-6 md:px-12 lg:px-24">
        <div className="divider-line" />
      </div>

      {/* Posts Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {regularPosts.map((post, index) => (
              <AnimatedSection key={post.title} delay={index * 0.1}>
                <article className="group cursor-pointer">
                  <div className="aspect-[4/3] overflow-hidden mb-6">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <span className="label-text text-muted-foreground mb-2 block">
                    {post.category}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl mb-3 text-foreground group-hover:text-wood-medium transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="body-regular text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow px-6 md:px-12 text-center">
          <AnimatedSection>
            <h2 className="heading-subsection text-foreground mb-4">
              Priče Dostavljene u <span className="italic">Vaš Inbox</span>
            </h2>
            <p className="body-regular text-muted-foreground mb-8 max-w-md mx-auto">
              Pridružite se našoj zajednici i primajte povremena razmišljanja o drvetu, 
              zanatu i umetnosti sporog stvaranja.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Vaša email adresa"
                className="flex-grow px-5 py-4 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-primary text-primary-foreground text-sm font-medium tracking-wide transition-all duration-300 hover:bg-wood-medium"
              >
                Pretplatite se
              </button>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
