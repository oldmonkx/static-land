const MasterPlan = () => {
  return (
    <section className="py-20 md:py-28 bg-soft-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent font-medium tracking-wide uppercase text-sm mb-4">
            Thoughtfully Designed
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">
            Master Plan / Layout
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden bg-card border border-border/50 shadow-lg p-4">
            {/* Placeholder for master plan image */}
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop"
              alt="Casa Dale Master Plan"
              className="w-full h-auto rounded-xl"
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            *Master plan is for representational purposes. Actual layout may vary.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MasterPlan;
