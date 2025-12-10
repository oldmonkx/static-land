import { CheckCircle } from 'lucide-react';

const TrustStrip = () => {
  const badges = [
    'HMDA Approved',
    'RERA Registered',
    '100% Clear Title',
  ];

  return (
    <section className="bg-gradient-to-r from-primary via-primary/95 to-primary py-4 md:py-5">
      <div className="container mx-auto px-4">
        {/* Desktop: centered flex layout */}
        <div className="hidden md:flex justify-center items-center gap-6">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2.5 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full border border-accent/30"
            >
              <CheckCircle className="w-4 h-4 text-accent" />
              <span className="text-primary-foreground font-medium text-sm tracking-wide">
                {badge}
              </span>
            </div>
          ))}
        </div>
        
        {/* Mobile: horizontal scroll with glass-morphism pills */}
        <div className="md:hidden flex overflow-x-auto gap-3 pb-1 -mx-2 px-2 scrollbar-hide">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 bg-white/10 backdrop-blur-sm rounded-full border border-accent/40 shadow-lg shadow-accent/10"
            >
              <CheckCircle className="w-4 h-4 text-accent" />
              <span className="text-primary-foreground font-medium text-sm whitespace-nowrap">
                {badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
