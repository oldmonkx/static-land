import { Shield, CheckCircle } from 'lucide-react';

const certifications = [
  { name: 'HMDA Approved', description: 'Hyderabad Metropolitan Development Authority' },
  { name: 'RERA Registered', description: 'Real Estate Regulatory Authority' },
  { name: 'Clear Title', description: 'Legally Verified Documentation' },
  { name: 'Bank Approved', description: 'Easy Loan Assistance Available' },
];

const Certifications = () => {
  return (
    <section className="py-16 md:py-20 bg-background relative overflow-hidden">
      {/* Nature SVG Background - Eucalyptus Branch */}
      <svg
        className="absolute top-0 left-0 w-72 h-72 opacity-[0.05] text-accent"
        viewBox="0 0 200 200"
        fill="currentColor"
      >
        <ellipse cx="30" cy="50" rx="15" ry="25" transform="rotate(-30 30 50)" />
        <ellipse cx="50" cy="80" rx="12" ry="20" transform="rotate(-45 50 80)" />
        <ellipse cx="70" cy="110" rx="15" ry="25" transform="rotate(-30 70 110)" />
        <ellipse cx="90" cy="140" rx="12" ry="20" transform="rotate(-50 90 140)" />
        <path d="M20 30 Q60 90, 100 160" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.6" />
      </svg>
      <svg
        className="absolute bottom-0 right-0 w-64 h-64 opacity-[0.04] text-primary rotate-180"
        viewBox="0 0 200 200"
        fill="currentColor"
      >
        <ellipse cx="30" cy="50" rx="15" ry="25" transform="rotate(-30 30 50)" />
        <ellipse cx="50" cy="80" rx="12" ry="20" transform="rotate(-45 50 80)" />
        <ellipse cx="70" cy="110" rx="15" ry="25" transform="rotate(-30 70 110)" />
      </svg>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-6 h-6 text-accent" />
            <p className="text-accent font-medium tracking-wide uppercase text-sm">
              Trust & Transparency
            </p>
          </div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary">
            Certifications & Approvals
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-3 bg-soft-gray px-4 py-6 rounded-xl border border-border/50"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="font-semibold text-primary">{cert.name}</p>
                <p className="text-xs text-muted-foreground">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
