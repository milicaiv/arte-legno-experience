import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import woodTexture from "@/assets/wood-texture-1.jpg";
import workshopInterior from "@/assets/workshop-interior.jpg";
import craftingHands from "@/assets/crafting-hands.jpg";
import productBowl from "@/assets/product-bowl.jpg";
import productTable from "@/assets/product-table.jpg";
import heroWorkshop from "@/assets/hero-workshop.jpg";

const categories = ["All", "Philosophy", "Behind the Scenes", "Sustainability", "Craft Process"];

const posts = [
  {
    image: woodTexture,
    category: "Philosophy",
    title: "The Language of Wood Grain",
    excerpt: "Understanding the stories that every piece of wood tells through its unique patterns and how we learn to read them.",
    date: "January 2026",
    featured: true,
  },
  {
    image: workshopInterior,
    category: "Behind the Scenes",
    title: "A Day in the Workshop",
    excerpt: "The rhythm of handcraft—from dawn's first light to the final polish of the day.",
    date: "January 2026",
  },
  {
    image: craftingHands,
    category: "Sustainability",
    title: "Respecting Nature's Timeline",
    excerpt: "Why slow craftsmanship and sustainability are inseparable values in our practice.",
    date: "December 2025",
  },
  {
    image: productBowl,
    category: "Craft Process",
    title: "The Art of Wood Turning",
    excerpt: "A meditative practice that transforms raw timber into flowing, organic forms.",
    date: "December 2025",
  },
  {
    image: productTable,
    category: "Philosophy",
    title: "Tables That Gather",
    excerpt: "On designing furniture that becomes the heart of family life and conversation.",
    date: "November 2025",
  },
  {
    image: heroWorkshop,
    category: "Behind the Scenes",
    title: "Tools of the Trade",
    excerpt: "The hand tools passed down through generations and their irreplaceable role.",
    date: "November 2025",
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
              Stories from the Workshop
            </span>
            <h1 className="heading-display text-foreground mb-6">
              <span className="italic">Reflections</span> on
              <br />
              Wood & Craft
            </h1>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Thoughts, stories, and insights from a life dedicated to the art 
              of handcrafted wood.
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
                    Featured • {featuredPost.category}
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
              Stories Delivered to <span className="italic">Your Inbox</span>
            </h2>
            <p className="body-regular text-muted-foreground mb-8 max-w-md mx-auto">
              Join our community and receive occasional reflections on wood, 
              craft, and the art of slow making.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-5 py-4 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-primary text-primary-foreground text-sm font-medium tracking-wide transition-all duration-300 hover:bg-wood-medium"
              >
                Subscribe
              </button>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
