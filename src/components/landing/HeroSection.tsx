import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
          source: 'Hero Form',
          timestamp: new Date().toISOString(),
        }),
      });

      toast.success('Thank you! Our team will contact you shortly.');
      setFormData({ name: '', phone: '', email: '' });
    } catch (error) {
      toast.success('Thank you! Our team will contact you shortly.');
      setFormData({ name: '', phone: '', email: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-soft-gray to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231E3A5F' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-accent font-medium tracking-wide uppercase text-sm">
                Premium Villa Plots
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary leading-tight">
                Biophilic<br />
                <span className="text-accent">Villa Plots</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                in South Hyderabad's High Growth Zone
              </p>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-lg text-muted-foreground">Price starts from</span>
              <span className="text-3xl md:text-4xl font-serif font-bold text-primary">
                ₹24,999/-
              </span>
              <span className="text-lg text-muted-foreground">Sq yds*</span>
            </div>

            <div className="flex flex-wrap gap-4 text-sm md:text-base">
              <div className="flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-accent rounded-full" />
                <span className="font-medium">20 Acres</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-accent rounded-full" />
                <span className="font-medium">167 - 500 sq yds</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-accent rounded-full" />
                <span className="font-medium">R-House Clubhouse</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:pl-8">
            <div className="bg-card p-8 md:p-10 rounded-2xl shadow-xl border border-border/50">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-serif font-semibold text-primary mb-2">
                  Get Exclusive Details
                </h2>
                <p className="text-muted-foreground">
                  Register your interest today
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12 bg-soft-gray border-border/50 focus:border-accent"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="h-12 bg-soft-gray border-border/50 focus:border-accent"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12 bg-soft-gray border-border/50 focus:border-accent"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg"
                >
                  {isSubmitting ? 'Submitting...' : 'Request Callback'}
                </Button>
              </form>

              <p className="text-xs text-muted-foreground text-center mt-6">
                By submitting, you agree to our privacy policy and terms of service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
