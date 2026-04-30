import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutPreview } from "@/components/home/AboutPreview";
import { CraftsmanshipSection } from "@/components/home/CraftsmanshipSection";
import { GallerySection } from "@/components/home/GallerySection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { BlogPreview } from "@/components/home/BlogPreview";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Seo } from "@/components/seo/Seo";
import { buildOrganizationSchema, buildWebsiteSchema } from "@/lib/seo";

const Index = () => {
  return (
    <>
      <Seo
        title="ATLAGIĆ - ARTE LEGNO | Ručno izrađen drveni namještaj i umjetnost"
        description="Ručna izrada drvenog namještaja, umjetničkih predmeta i enterijerskih rješenja u Banjoj Luci. Unikatni komadi po mjeri, izrađeni da traju generacijama."
        path="/"
        keywords={[
          "ručno izrađen namještaj",
          "drveni namještaj po mjeri",
          "umjetnički drveni predmeti",
          "Banja Luka",
          "ATLAGIĆ ARTE LEGNO",
          "enterijerski dizajn od drveta",
        ]}
        schema={[
          buildOrganizationSchema({
            "@type": "LocalBusiness",
            description:
              "Studio za ručnu izradu drvenog namještaja i umjetničkih predmeta iz Banje Luke.",
            areaServed: "Bosna i Hercegovina",
          }),
          buildWebsiteSchema({
            description:
              "Zvanična web stranica ATLAGIĆ - ARTE LEGNO sa pregledom radova, priča iz radionice i kontakt informacijama.",
          }),
        ]}
      />
      <Layout>
        <HeroSection />
        <AboutPreview />
        <CraftsmanshipSection />
        <GallerySection />
        <TestimonialsSection />
        <BlogPreview />
        <FinalCTA />
      </Layout>
    </>
  );
};

export default Index;
