import { useState } from 'react';
import { toast } from 'sonner';
import { isValidIndianPhone } from '@/lib/validation';
import { submitLead } from '@/lib/leadService';

interface SiteVisitFormProps {
  source?: string;
  className?: string;
  variant?: 'vertical' | 'horizontal';
  style?: 'glassmorphism' | 'solid';
}

const SiteVisitForm = ({ source = 'Site Visit Form', className = '', variant = 'vertical', style = 'solid' }: SiteVisitFormProps) => {
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

  // Horizontal variant
  if (variant === 'horizontal') {
    // Glassmorphism style (for gradient backgrounds like ExperienceNature)
    if (style === 'glassmorphism') {
      return (
        <div className={`py-10 md:py-14 ${className}`}>
          <div className="container mx-auto px-4">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-10 shadow-2xl max-w-5xl mx-auto">
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-8 text-center">
                Schedule Your Site Visit
              </h3>
              
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col md:grid md:grid-cols-4 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full bg-white/90 rounded-lg px-4 py-3.5 text-primary placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-accent border-0 transition-all"
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
                        className={`w-full bg-white/90 rounded-r-lg rounded-l-none px-4 py-3.5 text-primary placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-accent border-0 transition-all ${phoneError ? 'ring-2 ring-red-400' : ''}`}
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
                    className="w-full bg-white/90 rounded-lg px-4 py-3.5 text-primary placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-accent border-0 transition-all"
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
          </div>
        </div>
      );
    }

    // Solid green style (default for standalone sections)
    return (
      <div className={`bg-primary py-12 md:py-16 ${className}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h3 className="font-serif text-2xl md:text-3xl text-white mb-8 text-center">
              Schedule Your Site Visit
            </h3>
            
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col md:grid md:grid-cols-4 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full bg-white/90 rounded-lg px-4 py-3.5 text-primary placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-accent border-0 transition-all"
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
                      className={`w-full bg-white/90 rounded-r-lg rounded-l-none px-4 py-3.5 text-primary placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-accent border-0 transition-all ${phoneError ? 'ring-2 ring-red-400' : ''}`}
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
                  className="w-full bg-white/90 rounded-lg px-4 py-3.5 text-primary placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-accent border-0 transition-all"
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
