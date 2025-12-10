import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    alt: 'Modern Villa Exterior',
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
    alt: 'Luxury Home Design',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    alt: 'Premium Villa Plot',
  },
  {
    src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
    alt: 'Elegant Home Architecture',
  },
  {
    src: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
    alt: 'Contemporary Villa',
  },
];

const Gallery = () => {
  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent font-medium tracking-wide uppercase text-sm mb-4">
            Visual Journey
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
            Project Gallery
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-2">
                    <div className="rounded-xl overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-accent text-accent-foreground hover:bg-accent/90" />
            <CarouselNext className="right-4 bg-accent text-accent-foreground hover:bg-accent/90" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
