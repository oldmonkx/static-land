import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const MasterPlan = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('YOUR_PABBLY_WEBHOOK_URL', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'Master Plan View',
          timestamp: new Date().toISOString(),
        }),
      });

      toast({
        title: 'Success!',
        description: 'You can now view the master plan.',
      });
      setIsModalOpen(false);
      setFormData({ name: '', phone: '', email: '' });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="master-plan" className="py-20 md:py-28 bg-soft-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent font-medium tracking-wide uppercase text-sm mb-4">
            Thoughtfully Designed
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">
            Master Plan / Layout
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        <div className="max-w-5xl mx-auto">
          <div
            className="rounded-2xl overflow-hidden bg-card border border-border/50 shadow-lg p-4 cursor-pointer group"
            onClick={() => setIsModalOpen(true)}
          >
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop"
              alt="Casa Dale Master Plan"
              className="w-full h-auto rounded-xl group-hover:scale-[1.02] transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 rounded-xl" />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            *Click to view full master plan. Master plan is for representational purposes.
          </p>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif text-primary text-center">
              View Master Plan
            </DialogTitle>
            <p className="text-center text-muted-foreground">
              Enter your details to access the full master plan
            </p>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <Input
              placeholder="Phone Number"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
            <Input
              placeholder="Email Address"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <Button
              type="submit"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'View Master Plan'}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default MasterPlan;
