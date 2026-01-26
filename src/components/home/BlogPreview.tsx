import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import woodTexture from "@/assets/wood-texture-1.jpg";
import workshopInterior from "@/assets/workshop-interior.jpg";
import craftingHands from "@/assets/crafting-hands.jpg";

const posts = [
  {
    image: woodTexture,
    category: "Philosophy",
    title: "The Language of Wood Grain",
    excerpt: "Understanding the stories that every piece of wood tells through its unique patterns.",
    slug: "language-of-wood-grain",
  },
  {
    image: workshopInterior,
    category: "Behind the Scenes",
    title: "A Day in the Workshop",
    excerpt: "The rhythm of handcraft—from dawn's first light to the final polish.",
    slug: "day-in-workshop",
  },
  {
    image: craftingHands,
    category: "Sustainability",
    title: "Respecting Nature's Timeline",
    excerpt: "Why slow craftsmanship and sustainability are inseparable values.",
    slug: "respecting-nature-timeline",
  },
];

export const BlogPreview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <AnimatedSection className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span className="label-text text-muted-foreground mb-4 block">
              Stories from the Workshop
            </span>
            <h2 className="heading-section text-foreground">
              Latest <span className="italic">Reflections</span>
            </h2>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-foreground font-medium tracking-wide link-underline"
          >
            View All Stories
            <ArrowRight size={16} />
          </Link>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <AnimatedSection key={post.slug} delay={index * 0.1}>
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
                <p className="body-regular text-muted-foreground">{post.excerpt}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
