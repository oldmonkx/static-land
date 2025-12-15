import { useState } from 'react';
import { toast } from 'sonner';
import { isValidIndianPhone } from '@/lib/validation';
import { submitLead } from '@/lib/leadService';

interface SiteVisitFormProps {
  source?: string;
  className?: string;
  variant?: 'vertical' | 'horizontal';
}

const SiteVisitForm = ({ source = 'Site Visit Form', className = '', variant = 'vertical' }: SiteVisitFormProps) => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState('');

  const handlePhoneChange = (value: string) => {
    // Only allow digits
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
      await submitLead({ ...formData, source });
      toast.success('Thank you! We will contact you shortly.');
      setFormData({ name: '', phone: '', email: '' });
      setPhoneError('');
    } catch (error) {
      toast.success('Thank you! We will contact you shortly.');
      setFormData({ name: '', phone: '', email: '' });
      setPhoneError('');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Horizontal variant for desktop/tablet
  if (variant === 'horizontal') {
    return (
      <div className={`relative bg-gradient-to-b from-[#1d3d28] via-primary to-[#1d3d28] py-16 md:py-20 ${className}`}>
        {/* Top decorative border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
        
        <div className="container mx-auto px-4">
          <h3 className="font-serif text-2xl md:text-3xl text-white mb-8 text-center">
            Schedule Your Site Visit
          </h3>
          
          {/* Mobile: vertical stack, Desktop: horizontal grid */}
          <form onSubmit={handleSubmit} className="max-w-5xl mx-auto">
            <div className="flex flex-col md:grid md:grid-cols-4 gap-4">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full bg-white/95 rounded-lg px-4 py-3.5 text-primary placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-accent border-0 transition-all"
              />
              <div className="flex flex-col">
                <div className="flex">
                  <span className="inline-flex items-center px-3 bg-white/80 rounded-l-lg text-primary text-sm font-medium">
                    +91
                  </span>
                  <input
                    type="tel"
                    placeholder="10 digit number"
                    value={formData.phone}
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    maxLength={10}
                    required
                    className={`w-full bg-white/95 rounded-r-lg rounded-l-none px-4 py-3.5 text-primary placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-accent border-0 transition-all ${phoneError ? 'ring-2 ring-red-400' : ''}`}
                  />
                </div>
                {phoneError && <span className="text-red-300 text-xs mt-1">{phoneError}</span>}
              </div>
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full bg-white/95 rounded-lg px-4 py-3.5 text-primary placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-accent border-0 transition-all"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3.5 rounded-lg transition-colors disabled:opacity-70 animate-subtle-pulse"
              >
                {isSubmitting ? 'SENDING...' : 'SEND'}
              </button>
            </div>
          </form>
        </div>
        
        {/* Bottom decorative divider */}
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center pb-2">
          <div className="flex items-center gap-3">
            <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent to-accent/60" />
            <div className="w-2 h-2 rotate-45 bg-accent/80" />
            <div className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent to-accent/60" />
          </div>
        </div>
      </div>
    );
  }

  // Default vertical variant (unchanged)
  return (
    <div className={`bg-card rounded-2xl p-6 md:p-8 border border-border/50 shadow-lg ${className}`}>
      <h3 className="font-serif text-xl md:text-2xl text-primary mb-6 text-center">
        Schedule Your Site Visit
      </h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="w-full bg-transparent border-0 border-b border-border/60 focus:border-accent px-0 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-0 transition-colors"
        />
        <div>
          <div className="flex items-center border-b border-border/60 focus-within:border-accent transition-colors">
            <span className="text-muted-foreground text-sm font-medium pr-2">+91</span>
            <input
              type="tel"
              placeholder="10 digit number"
              value={formData.phone}
              onChange={(e) => handlePhoneChange(e.target.value)}
              maxLength={10}
              required
              className={`w-full bg-transparent border-0 px-0 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-0 ${phoneError ? 'text-red-500' : ''}`}
            />
          </div>
          {phoneError && <span className="text-red-500 text-xs">{phoneError}</span>}
        </div>
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="w-full bg-transparent border-0 border-b border-border/60 focus:border-accent px-0 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-0 transition-colors"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 rounded-lg transition-colors disabled:opacity-70 animate-subtle-pulse"
        >
          {isSubmitting ? 'SENDING...' : 'SEND'}
        </button>
      </form>
    </div>
  );
};

export default SiteVisitForm;
