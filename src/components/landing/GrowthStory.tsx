import { Home, Ruler, MapPin, LandPlot, Shield, Route, Leaf, Building2, Plane } from 'lucide-react';

const specs = [
  { icon: Home, label: 'Type', value: 'Ready-to-Build Villa Plots' },
  { icon: Ruler, label: 'Plot Sizes', value: '167 to 500 sq yds' },
  { icon: MapPin, label: 'Location', value: 'Kandukur, Srisailam Highway' },
  { icon: LandPlot, label: 'Total Area', value: '20 Acres Gated Development' },
  { icon: Shield, label: 'Approvals', value: 'HMDA & RERA Approved' },
  { icon: Route, label: 'Key Feature', value: "Prime 100' Highway Facing" },
  { icon: Leaf, label: 'Design', value: 'Unique Biophilic Layout' },
  { icon: Building2, label: 'Amenities', value: 'Exclusive R-House Clubhouse' },
  { icon: Plane, label: 'Connectivity', value: '25 mins from RGIA Airport' },
];

const GrowthStory = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-soft-gray to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
              South Hyderabad's Growth Story Starts Here
            </h2>
            
            {/* Golden Divider */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent" />
              <span className="text-accent font-display text-sm uppercase tracking-[0.2em]">Project Highlights</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent" />
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Let's be honest, you're not just looking for a plot. You're looking for the{' '}
              <span className="font-semibold text-primary">right plot</span>. A place that's a brilliant investment
              and a beautiful spot to live. That's why we created this community.
            </p>
          </div>

          {/* Spec Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {specs.map((spec, index) => {
              const Icon = spec.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-card rounded-xl p-6 shadow-md border border-border/50 
                             hover:shadow-xl hover:shadow-accent/10 hover:border-accent/30
                             hover:scale-[1.02] transition-all duration-300 ease-out
                             overflow-hidden"
                >
                  {/* Gold Accent Bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent/70 to-accent/30 
                                  group-hover:w-1.5 transition-all duration-300" />
                  
                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative flex items-start gap-4">
                    {/* Icon Container */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center
                                    group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300" />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1 font-medium">
                        {spec.label}
                      </p>
                      <p className="font-semibold text-primary text-base leading-tight group-hover:text-accent/90 transition-colors duration-300">
                        {spec.value}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthStory;
