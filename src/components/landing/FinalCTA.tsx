import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { ArrowRight } from 'lucide-react';
import { isValidIndianPhone } from '@/lib/validation';

const FinalCTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState('');

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
      toast.error('Please enter a valid 10-digit Indian phone number');
      return;
    }
    
    setIsSubmitting(true);
    try {
      const webhookUrl = 'YOUR_PABBLY_WEBHOOK_URL';
      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          source: 'Final CTA Form',
          timestamp: new Date().toISOString()
        })
      });
      toast.success('Thank you! Our team will contact you shortly.');
      setFormData({ name: '', phone: '', email: '' });
      setPhoneError('');
    } catch (error) {
      toast.success('Thank you! Our team will contact you shortly.');
      setFormData({ name: '', phone: '', email: '' });
      setPhoneError('');
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section id="contact" className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            Invest In land. 
Invest In Your Future.     
  
 
     
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Don't miss this opportunity to own a piece of South Hyderabad's most promising location. Get price sheet and availablity.       
          </p>

          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <Input type="text" placeholder="Your Name" value={formData.name} onChange={e => setFormData({
              ...formData,
              name: e.target.value
            })} required className="h-12 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent" />
              <div className="flex-1">
                <Input type="tel" placeholder="Phone (10 digits)" value={formData.phone} onChange={e => handlePhoneChange(e.target.value)} maxLength={10} required className={`h-12 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent ${phoneError ? 'border-red-400' : ''}`} />
                {phoneError && <span className="text-red-300 text-xs mt-1">{phoneError}</span>}
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <Input type="email" placeholder="Email Address" value={formData.email} onChange={e => setFormData({
              ...formData,
              email: e.target.value
            })} required className="h-12 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent flex-1" />
              <Button type="submit" disabled={isSubmitting} className="h-12 px-8 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold animate-subtle-pulse">
                {isSubmitting ? 'Submitting...' : <>
                    Get Details <ArrowRight className="w-4 h-4 ml-2" />
                  </>}
              </Button>
            </div>
          </form>

          <p className="text-sm text-primary-foreground/60 mt-6">
            Limited plots available. Prices subject to change without notice.
          </p>
        </div>
      </div>
    </section>;
};
export default FinalCTA;