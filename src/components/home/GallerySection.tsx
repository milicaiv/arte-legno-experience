import { AnimatedSection } from "@/components/ui/AnimatedSection";
import woodTexture from "@/assets/wood-texture-1.jpg";
import productBowl from "@/assets/product-bowl.jpg";
import workshopInterior from "@/assets/workshop-interior.jpg";
import productTable from "@/assets/product-table.jpg";
import craftingHands from "@/assets/crafting-hands.jpg";

const galleryImages = [
  { src: woodTexture, alt: "Detalj teksture drveta", span: "col-span-1 row-span-1" },
  { src: productBowl, alt: "Ručno izrađena drvena činija", span: "col-span-1 row-span-2" },
  { src: workshopInterior, alt: "Enterijer stolarke radionice", span: "col-span-1 row-span-1" },
  { src: productTable, alt: "Trpezarijski sto od punog drveta", span: "col-span-2 row-span-1" },
  { src: craftingHands, alt: "Ruke majstora na poslu", span: "col-span-1 row-span-1" },
];

export const GallerySection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <AnimatedSection className="text-center mb-16">
          <span className="label-text text-muted-foreground mb-4 block">
            Vizuelno Putovanje
          </span>
          <h2 className="heading-section text-foreground">
            Teksture, Trenuci,
            <br />
            <span className="italic">Živa Umetnost</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.1}
              className={`${image.span} overflow-hidden group cursor-pointer`}
            >
              <div className="relative w-full h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-all duration-500" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
