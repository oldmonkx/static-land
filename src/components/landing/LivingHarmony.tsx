import { MapPin, Crown, Sparkles, Building2, TrendingUp, TreePine } from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: 'Location. Location. Location.',
    description: 'Perfectly positioned on the Srisailam Highway, just a 45-min drive from the Financial District and 25 mins from RGIA. Your gateway to seamless connectivity and the heart of Hyderabad\'s future.',
  },
  {
    icon: Crown,
    title: 'Unparalleled Exclusivity',
    description: 'Build your dream home now in a premium, ready-to-occupy gated community. Choose from exclusive villa plots set within a thoughtfully designed 20-acre biophilic layout.',
  },
  {
    icon: Sparkles,
    title: 'Resort-Style Living',
    description: '20+ world-class amenities, from a grand clubhouse to wellness zones.',
  },
  {
    icon: Building2,
    title: 'More Than Just Land',
    description: 'Experience a life of convenience and luxury. Featuring a 100\' highway-facing property with a state-of-the-art R-House Clubhouse, future-ready amenities, and lush, open spaces.',
  },
  {
    icon: TrendingUp,
    title: 'Epicenter of Opportunity',
    description: 'Capitalize on a location poised for exponential growth. Situated just minutes from the Amazon Data Centre, upcoming Skill University, and the World Trade Centre, ensuring high appreciation potential.',
  },
  {
    icon: TreePine,
    title: 'Where Life Breathes',
    description: 'Our Biophilic layout integrates nature into your everyday life. Enjoy serene green spaces, fresh air, and a tranquil environment to call home.',
  },
];

const LivingHarmony = () => {
  return (
    <section id="living-harmony" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-wide uppercase text-sm mb-4">
            Discover The Difference
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">
            Living in Harmony With Nature's Design
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-soft-gray hover:bg-champagne-light border border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-14 h-14 mb-6 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
              </div>
              <h3 className="font-serif font-semibold text-xl text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-[15px] font-medium text-slate-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LivingHarmony;
