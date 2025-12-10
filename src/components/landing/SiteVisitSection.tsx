import SiteVisitForm from './SiteVisitForm';

const SiteVisitSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-2">
            Book Your Free Site Visit
          </h2>
          <p className="text-muted-foreground mb-8">
            See the plots in person. Our team will guide you through.
          </p>
          <SiteVisitForm source="Site Visit Section" />
        </div>
      </div>
    </section>
  );
};

export default SiteVisitSection;
