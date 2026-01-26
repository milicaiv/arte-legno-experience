import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutPreview } from "@/components/home/AboutPreview";
import { CraftsmanshipSection } from "@/components/home/CraftsmanshipSection";
import { GallerySection } from "@/components/home/GallerySection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { BlogPreview } from "@/components/home/BlogPreview";
import { FinalCTA } from "@/components/home/FinalCTA";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutPreview />
      <CraftsmanshipSection />
      <GallerySection />
      <TestimonialsSection />
      <BlogPreview />
      <FinalCTA />
    </Layout>
  );
};

export default Index;
