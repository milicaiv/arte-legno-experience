import { AnimatedSection } from "@/components/ui/AnimatedSection";
import {
  brandSignature,
  carvedIcon,
  executiveWorkspace,
  gardenBench,
  houseBed,
  kitchenBoard,
  kitchenShelving,
  livingRoomInterior,
  mediaConsole,
} from "@/data/portfolioImages";

const galleryImages = [
  { ...executiveWorkspace, span: "md:col-span-5 md:row-span-4" },
  { ...kitchenShelving, span: "md:col-span-4 md:row-span-3" },
  { ...brandSignature, span: "md:col-span-3 md:row-span-2" },
  { ...kitchenBoard, span: "md:col-span-3 md:row-span-3" },
  { ...mediaConsole, span: "md:col-span-4 md:row-span-2" },
  { ...livingRoomInterior, span: "md:col-span-5 md:row-span-3" },
  { ...gardenBench, span: "md:col-span-4 md:row-span-2" },
  { ...houseBed, span: "md:col-span-4 md:row-span-3" },
  { ...carvedIcon, span: "md:col-span-4 md:row-span-3" },
];

export const GallerySection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <AnimatedSection className="max-w-2xl">
            <span className="label-text mb-4 block text-muted-foreground">
              Vizuelno putovanje
            </span>
            <h2 className="heading-section mb-4 text-foreground">
              Kolekcija koja sada nosi pravi potpis brenda
            </h2>
            <p className="body-regular text-muted-foreground">
              Tvoje fotografije su sada glavna galerija sajta: toplije, konkretnije i
              uvjerljivije kao dokaz zanata, ambijenta i raspona rada.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="max-w-md border border-border bg-secondary/35 p-6">
            <p className="label-text mb-3 text-muted-foreground">Kurirani pregled</p>
            <p className="font-serif text-2xl text-foreground">
              Devet komada. Jedna čista, premium prezentacija.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid auto-rows-[240px] grid-cols-1 gap-4 md:grid-cols-12 md:auto-rows-[86px] md:gap-6">
          {galleryImages.map((image, index) => (
            <AnimatedSection
              key={image.title}
              delay={index * 0.08}
              className={`${image.span} group cursor-pointer overflow-hidden`}
            >
              <div className="relative h-full w-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: image.objectPosition }}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-primary-foreground">
                  <p className="label-text mb-2 text-primary-foreground/70">{image.category}</p>
                  <p className="font-serif text-xl leading-tight">{image.title}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
