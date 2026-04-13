import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const previewPosts = blogPosts.slice(0, 3);

export const BlogPreview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <AnimatedSection className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span className="label-text text-muted-foreground mb-4 block">
              Priče iz radionice
            </span>
            <h2 className="heading-section text-foreground">
              Najnovija razmišljanja
            </h2>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-foreground font-medium tracking-wide link-underline"
          >
            Pogledajte sve priče
            <ArrowRight size={16} />
          </Link>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewPosts.map((post, index) => (
            <AnimatedSection key={post.slug} delay={index * 0.1}>
              <Link to={`/blog/${post.slug}`}>
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
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
