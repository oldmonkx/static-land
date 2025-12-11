import { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { isValidIndianPhone } from '@/lib/validation';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';

const galleryImages = [
  { src: gallery1, alt: 'Aerial view of Casa Dale villa plots with boundary markers' },
  { src: gallery2, alt: 'Casa Dale main road entrance and development' },
  { src: gallery3, alt: 'Aerial view of Casa Dale plots with water tank' },
];

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const { toast } = useToast();

  const handlePhoneChange = (value: string) => {
    const digitsOnly = value.replace(/\D/g, '').slice(0, 10);
    setFormData({ ...formData, phone: digitsOnly });
    
    if (digitsOnly.length === 10 && !isValidIndianPhone(digitsOnly)) {
      setPhoneError('Must start with 6, 7, 8, or 9');
    } else {
      setPhoneError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isValidIndianPhone(formData.phone)) {
      setPhoneError('Enter valid 10-digit Indian number');
      toast({
        title: 'Invalid Phone',
        description: 'Please enter a valid 10-digit Indian phone number',
        variant: 'destructive'
      });
      return;
    }
    
    setIsSubmitting(true);
    try {
      await fetch('YOUR_PABBLY_WEBHOOK_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          source: 'Gallery View',
          timestamp: new Date().toISOString()
        })
      });
      toast({
        title: 'Success!',
        description: 'You can now browse the full gallery.'
      });
      setIsModalOpen(false);
      setFormData({ name: '', phone: '', email: '' });
      setPhoneError('');
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
            Project Gallery
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {galleryImages.map((image, index) => <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-2">
                    <div className="rounded-xl overflow-hidden cursor-pointer" onClick={() => setIsModalOpen(true)}>
                      <img src={image.src} alt={image.alt} className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                  </div>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-accent text-accent-foreground hover:bg-accent/90" />
            <CarouselNext className="right-4 bg-accent text-accent-foreground hover:bg-accent/90" />
          </Carousel>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif text-primary text-center">
              View Full Gallery
            </DialogTitle>
            <p className="text-center text-muted-foreground">
              Enter your details to access all project images
            </p>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <Input placeholder="Your Name" value={formData.name} onChange={e => setFormData({
            ...formData,
            name: e.target.value
          })} required />
            <div>
              <Input placeholder="Phone (10 digits)" type="tel" value={formData.phone} onChange={e => handlePhoneChange(e.target.value)} maxLength={10} required className={phoneError ? 'border-red-400' : ''} />
              {phoneError && <span className="text-red-500 text-xs">{phoneError}</span>}
            </div>
            <Input placeholder="Email Address" type="email" value={formData.email} onChange={e => setFormData({
            ...formData,
            email: e.target.value
          })} required />
            <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'View Gallery'}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </section>;
};
export default Gallery;