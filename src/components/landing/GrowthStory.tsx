const specs = [
  { label: 'Type', value: 'Ready-to-Build Villa Plots' },
  { label: 'Plot Sizes', value: '167 to 500 sq yds' },
  { label: 'Location', value: 'Kandukur, Srisailam Highway' },
  { label: 'Total Area', value: '20 Acres of Gated Development' },
  { label: 'Approvals', value: 'HMDA & RERA Approved' },
  { label: 'Key Feature', value: 'Prime 100\' Highway Facing Property' },
  { label: 'Design', value: 'Unique Biophilic Layout for green living' },
  { label: 'Amenities', value: 'Exclusive R-House Clubhouse & more' },
  { label: 'Connectivity', value: 'Just 25 minutes from RGIA Airport' },
];

const GrowthStory = () => {
  return (
    <section className="py-20 md:py-28 bg-soft-gray relative overflow-hidden">
      {/* Nature SVG Background - Large Leaf Silhouette */}
      <svg
        className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-[0.05] text-primary"
        viewBox="0 0 200 200"
        fill="currentColor"
      >
        <path d="M180 180C180 180 140 160 100 100C60 40 40 0 40 0C40 0 80 20 120 80C160 140 180 180 180 180Z" />
        <path d="M160 200C160 200 130 170 100 120C70 70 50 30 50 30" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />
      </svg>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
              South Hyderabad's Growth Story Starts Here
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Let's be honest, you're not just looking for a plot. You're looking for the{' '}
              <span className="font-semibold text-primary">right plot</span>. A place that's a brilliant investment
              and a beautiful spot to live. That's why we created this community. Here on the Srisailam Highway,
              you get a strategic location in Hyderabad's growth corridor and a thoughtfully designed space to
              build the life you've always wanted.
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-lg border border-border/50 overflow-hidden">
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
              {specs.map((spec, index) => (
                <div
                  key={index}
                  className="p-6 border-b border-border/50 md:border-r last:border-r-0 md:last:border-b-0"
                >
                  <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1">
                    {spec.label}
                  </p>
                  <p className="font-semibold text-primary text-lg">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthStory;
