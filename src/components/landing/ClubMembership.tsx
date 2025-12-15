import { useState } from 'react';
import { ChevronLeft, ChevronRight, Waves, Dumbbell, UtensilsCrossed, Users } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { isValidIndianPhone } from '@/lib/validation';
import { submitLead } from '@/lib/leadService';

import clubhouse1 from '@/assets/clubhouse-1.jpg';
import clubhouse2 from '@/assets/clubhouse-2.jpg';
import clubhouse3 from '@/assets/clubhouse-3.jpg';
import clubhouse4 from '@/assets/clubhouse-4.jpg';
import clubhouse5 from '@/assets/clubhouse-5.jpg';
import clubhouse6 from '@/assets/clubhouse-6.jpg';

const clubhouseImages = [
  { src: clubhouse1, alt: 'R House Clubhouse swimming pool with modern glass building' },
  { src: clubhouse2, alt: 'Pool and outdoor seating area' },
  { src: clubhouse3, alt: 'Modern clubhouse architecture with infinity pool' },
  { src: clubhouse4, alt: 'Elegant lounge interior' },
  { src: clubhouse5, alt: 'Outdoor dining area' },
  { src: clubhouse6, alt: 'Aerial view of R House clubhouse' },
];

const amenities = [
  { icon: Waves, label: 'Swimming Pool' },
  { icon: Dumbbell, label: 'Fitness Centre' },
  { icon: UtensilsCrossed, label: 'Fine Dining' },
  { icon: Users, label: 'Banquet Hall' },
];

const ClubMembership = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const { toast } = useToast();

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % clubhouseImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + clubhouseImages.length) % clubhouseImages.length);
  };

  const handlePhoneChange = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 10);
    setFormData(prev => ({ ...prev, phone: digits }));
    
    if (digits.length === 10) {
      if (!isValidIndianPhone(digits)) {
        setPhoneError('Please enter a valid Indian mobile number');
      } else {
        setPhoneError('');
      }
    } else {
      setPhoneError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isValidIndianPhone(formData.phone)) {
      setPhoneError('Please enter a valid 10-digit Indian mobile number');
      return;
    }

    setIsSubmitting(true);
    try {
      await submitLead({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        source: 'Club Membership View',
      });
      
      toast({
        title: "Thank you for your interest!",
        description: "Our team will contact you shortly.",
      });
      
      setIsModalOpen(false);
      setFormData({ name: '', phone: '', email: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleImageClick = () => {
    setIsModalOpen(true);
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
            <div className="aspect-video relative cursor-pointer" onClick={handleImageClick}>
              <img 
                src={clubhouseImages[currentImage].src} 
                alt={clubhouseImages[currentImage].alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              
              {/* Click to view overlay */}
              <div className="absolute inset-0 bg-primary/0 hover:bg-primary/20 transition-colors flex items-center justify-center opacity-0 hover:opacity-100">
                <span className="text-background font-sans text-lg bg-primary/80 px-4 py-2 rounded-full">
                  Click to view details
                </span>
              </div>

              {/* Navigation arrows */}
              <button 
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-background transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
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
                  onClick={(e) => { e.stopPropagation(); setCurrentImage(index); }}
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

      {/* Lead Capture Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-serif text-primary">View R House Clubhouse</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Enter your details to explore our exclusive amenities
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              required
              className="border-primary/20 focus:border-primary"
            />
            <div>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-primary/20 bg-muted text-muted-foreground text-sm">
                  +91
                </span>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  required
                  className="rounded-l-none border-primary/20 focus:border-primary"
                />
              </div>
              {phoneError && (
                <p className="text-destructive text-sm mt-1">{phoneError}</p>
              )}
            </div>
            <Input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              required
              className="border-primary/20 focus:border-primary"
            />
            <Button 
              type="submit" 
              className="w-full bg-accent hover:bg-accent/90 text-primary font-semibold"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Explore Clubhouse'}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ClubMembership;
