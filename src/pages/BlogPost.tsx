import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { Seo } from "@/components/seo/Seo";
import { BRAND_ICON_URL, SITE_NAME, buildAbsoluteUrl } from "@/lib/seo";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <Seo
          title={`Članak nije pronađen | ${SITE_NAME}`}
          description="Traženi blog članak nije pronađen. Vratite se na blog ATLAGIĆ - ARTE LEGNO i pregledajte dostupne priče iz radionice."
          path="/blog"
          robots="noindex, nofollow"
        />
        <Layout>
        <section className="pt-32 pb-20 bg-background min-h-screen">
          <div className="container-narrow px-6 md:px-12 text-center">
            <h1 className="heading-section text-foreground mb-4">Članak nije pronađen</h1>
            <p className="body-regular text-muted-foreground mb-8">
              Nažalost, traženi članak ne postoji.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-foreground font-medium tracking-wide link-underline"
            >
              <ArrowLeft size={16} />
              Nazad na blog
            </Link>
          </div>
        </section>
        </Layout>
      </>
    );
  }

  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, index) => {
      if (block.startsWith("## ")) {
        return (
          <h2
            key={index}
            className="font-serif text-2xl md:text-3xl text-foreground mt-12 mb-6"
          >
            {block.replace("## ", "")}
          </h2>
        );
      }
      return (
        <p key={index} className="body-regular text-muted-foreground mb-6 leading-relaxed">
          {block}
        </p>
      );
    });
  };

  return (
    <>
      <Seo
        title={`${post.title} | Blog | ${SITE_NAME}`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        image={post.image}
        imageAlt={post.title}
        type="article"
        author={post.author}
        section={post.category}
        keywords={[
          post.title,
          post.category,
          "blog ATLAGIĆ ARTE LEGNO",
          "ručna obrada drveta",
          "drvodjeljski zanat",
        ]}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            image: buildAbsoluteUrl(post.image),
            author: {
              "@type": "Person",
              name: post.author,
            },
            publisher: {
              "@type": "Organization",
              name: SITE_NAME,
              logo: {
                "@type": "ImageObject",
                url: BRAND_ICON_URL,
              },
            },
            mainEntityOfPage: buildAbsoluteUrl(`/blog/${post.slug}`),
            url: buildAbsoluteUrl(`/blog/${post.slug}`),
            articleSection: post.category,
            inLanguage: "bs-BA",
          },
        ]}
      />
      <Layout>
      <section className="pt-32 pb-4 bg-background">
        <div className="container-narrow px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm tracking-wide"
            >
              <ArrowLeft size={16} />
              Nazad na blog
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="pb-8 bg-background">
        <div className="container-narrow px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="label-text text-wood-medium mb-4 block">
              {post.category}
            </span>
            <h1 className="heading-display text-foreground mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <User size={14} />
                {post.author}
              </span>
              <span className="inline-flex items-center gap-2">
                <Calendar size={14} />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock size={14} />
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-12 bg-background">
        <div className="container-wide px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="aspect-[21/9] overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section className="pb-20 bg-background">
        <div className="container-narrow px-6 md:px-12 lg:px-24 max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="prose-custom">
              {renderContent(post.content)}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="container-narrow px-6 md:px-12 lg:px-24 max-w-3xl mx-auto">
        <div className="divider-line" />
      </div>

      <section className="section-padding bg-background">
        <div className="container-narrow px-6 md:px-12 lg:px-24 max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                <User size={24} className="text-muted-foreground" />
              </div>
              <div>
                <p className="font-serif text-lg text-foreground mb-1">{post.author}</p>
                <p className="body-regular text-muted-foreground text-sm">
                  Majstor drvodjeljstva sa višegodišnjim iskustvom u ručnoj izradi namještaja i drvenih predmeta.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      </Layout>
    </>
  );
};

export default BlogPost;
