import { AnimatedSection } from "@/components/ui/AnimatedSection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
  executiveWorkspace,
  kitchenShelving,
  brandSignature,
  kitchenBoard,
  mediaConsole,
  livingRoomInterior,
  gardenBench,
  houseBed,
  carvedIcon,
];

export const GallerySection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <AnimatedSection className="mb-12 max-w-2xl">
            <span className="label-text mb-4 block text-muted-foreground">
              Vizuelno putovanje
            </span>
            <h2 className="heading-section mb-4 text-foreground">
              Kolekcija koja nosi potpis brenda
            </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.12} direction="right" className="px-10 sm:px-14">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent>
              {galleryImages.map((image) => (
                <CarouselItem
                  key={image.title}
                  className="basis-[88%] sm:basis-[72%] lg:basis-[54%] xl:basis-[48%]"
                >
                  <div className="group h-[300px] cursor-pointer overflow-hidden sm:h-[360px] lg:h-[440px]">
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
                        <p className="label-text mb-2 text-primary-foreground/70">
                          {image.category}
                        </p>
                        <p className="font-serif text-xl leading-tight">{image.title}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 h-11 w-11 border-border bg-background/92 shadow-md sm:left-3" />
            <CarouselNext className="right-2 h-11 w-11 border-border bg-background/92 shadow-md sm:right-3" />
          </Carousel>
        </AnimatedSection>
      </div>
    </section>
  );
};
