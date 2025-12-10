import { CheckCircle } from 'lucide-react';

const TrustStrip = () => {
  const badges = [
    'HMDA Approved',
    'RERA Registered',
    '100% Clear Title',
  ];

  return (
    <section className="bg-primary py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" style={{ color: '#D4AF37' }} />
              <span className="text-primary-foreground font-medium text-sm md:text-base">
                {badge}
              </span>
              {index < badges.length - 1 && (
                <span className="hidden md:inline-block text-primary-foreground/30 ml-6">|</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
