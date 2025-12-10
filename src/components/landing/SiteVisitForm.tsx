import { useState } from 'react';
import { toast } from 'sonner';

interface SiteVisitFormProps {
  source?: string;
  className?: string;
}

const SiteVisitForm = ({ source = 'Site Visit Form', className = '' }: SiteVisitFormProps) => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('YOUR_PABBLY_WEBHOOK_URL', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source,
          timestamp: new Date().toISOString(),
        }),
      });

      toast.success('Thank you! We will contact you shortly.');
      setFormData({ name: '', phone: '', email: '' });
    } catch (error) {
      toast.success('Thank you! We will contact you shortly.');
      setFormData({ name: '', phone: '', email: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <input
          type="tel"
          placeholder="Phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
          className="w-full bg-transparent border-0 border-b border-border/60 focus:border-accent px-0 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-0 transition-colors"
        />
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
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 rounded-lg transition-colors disabled:opacity-70"
        >
          {isSubmitting ? 'SENDING...' : 'SEND'}
        </button>
      </form>
    </div>
  );
};

export default SiteVisitForm;
