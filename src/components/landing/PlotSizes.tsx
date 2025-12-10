import { useState } from 'react';
import { Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const plotSizes = [
  { size: 167, label: '167 Sq Yds', description: 'Compact & Smart' },
  { size: 200, label: '200 Sq Yds', description: 'Ideal Starter' },
  { size: 258, label: '258 Sq Yds', description: 'Popular Choice' },
  { size: 326, label: '326 Sq Yds', description: 'Family Favorite' },
  { size: 390, label: '390 Sq Yds', description: 'Premium & Spacious' },
];

const PlotSizes = () => {
  const [selectedPlot, setSelectedPlot] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleUnlockPrice = (size: number) => {
    setSelectedPlot(size);
    setIsOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Webhook integration - replace with your Pabbly Connect URL
      const webhookUrl = 'YOUR_PABBLY_WEBHOOK_URL';
      
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: `Unlock Price - ${selectedPlot} Sq Yds`,
          plotSize: selectedPlot,
          timestamp: new Date().toISOString(),
        }),
      });

      toast.success('Price details will be shared with you shortly!');
      setFormData({ name: '', phone: '', email: '' });
      setIsOpen(false);
    } catch (error) {
      toast.success('Price details will be shared with you shortly!');
      setFormData({ name: '', phone: '', email: '' });
      setIsOpen(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="plot-sizes" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent font-medium tracking-wide uppercase text-sm mb-4">
            Choose Your Perfect Size
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">
            Plot Sizes Available
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
          {plotSizes.map((plot) => (
            <div
              key={plot.size}
              className="group p-6 md:p-8 rounded-2xl bg-soft-gray hover:bg-champagne-light border border-border/50 hover:border-accent/50 transition-all duration-300 text-center"
            >
              <div className="mb-4">
                <span className="text-3xl md:text-4xl font-serif font-bold text-primary">
                  {plot.size}
                </span>
                <span className="text-sm md:text-base text-muted-foreground ml-1">Sq Yds</span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">{plot.description}</p>
              <Button
                onClick={() => handleUnlockPrice(plot.size)}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm"
                size="sm"
              >
                <Lock className="w-3 h-3 mr-1" />
                Unlock Price
              </Button>
            </div>
          ))}
        </div>

        {/* Unlock Price Modal */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl text-center">
                Unlock Price for {selectedPlot} Sq Yds
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <Input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="h-12"
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="h-12"
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="h-12"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                {isSubmitting ? 'Submitting...' : 'Get Price Details'}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default PlotSizes;
