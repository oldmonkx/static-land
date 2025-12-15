import { useState } from 'react';
import { ChevronLeft, ChevronRight, Waves, Dumbbell, UtensilsCrossed, Users } from 'lucide-react';

// Placeholder images - replace with actual R House clubhouse images
const clubhouseImages = [
  '/placeholder.svg',
  '/placeholder.svg',
  '/placeholder.svg',
];

const amenities = [
  { icon: Waves, label: 'Swimming Pool' },
  { icon: Dumbbell, label: 'Fitness Centre' },
  { icon: UtensilsCrossed, label: 'Fine Dining' },
  { icon: Users, label: 'Banquet Hall' },
];

const ClubMembership = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % clubhouseImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + clubhouseImages.length) % clubhouseImages.length);
  };

  return (
    <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="club-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill="currentColor" className="text-background" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#club-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-accent mb-3 font-sans">
            Exclusive Lifestyle
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-background font-medium mb-4">
            Club Membership in R House
          </h2>
          <p className="text-lg text-background/80 max-w-2xl mx-auto font-sans">
            Your gateway to world-class amenities and an exclusive community experience
          </p>
          <div className="w-24 h-0.5 bg-accent mx-auto mt-6" />
        </div>

        {/* Image Carousel */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative rounded-lg overflow-hidden shadow-2xl bg-background/10">
            <div className="aspect-video relative">
              <img 
                src={clubhouseImages[currentImage]} 
                alt={`R House Clubhouse ${currentImage + 1}`}
                className="w-full h-full object-cover"
              />
              
              {/* Placeholder overlay - remove when real images are added */}
              <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
                <p className="text-foreground/60 text-lg font-sans">Clubhouse Image {currentImage + 1}</p>
              </div>

              {/* Navigation arrows */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-background transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-background transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Dots indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {clubhouseImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImage ? 'bg-accent' : 'bg-background/50'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
          {amenities.map((amenity, index) => (
            <div 
              key={index}
              className="bg-background/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-background/20 transition-colors"
            >
              <amenity.icon className="w-8 h-8 text-accent mx-auto mb-3" />
              <p className="text-background font-sans text-sm md:text-base">{amenity.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClubMembership;
