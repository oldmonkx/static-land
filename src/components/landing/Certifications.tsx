import { Shield, CheckCircle } from 'lucide-react';

const certifications = [
  { name: 'HMDA Approved', description: 'Hyderabad Metropolitan Development Authority' },
  { name: 'RERA Registered', description: 'Real Estate Regulatory Authority' },
  { name: 'Clear Title', description: 'Legally Verified Documentation' },
  { name: 'Bank Approved', description: 'Easy Loan Assistance Available' },
];

const Certifications = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
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
