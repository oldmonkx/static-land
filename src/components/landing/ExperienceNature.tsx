import { CheckCircle2, Leaf, Home, MapPin, Wrench } from "lucide-react";
import SiteVisitForm from "./SiteVisitForm";

const features = [
  { icon: CheckCircle2, title: "Ready To Occupy", description: "Move in whenever you're ready" },
  { icon: Leaf, title: "Biophilic Layout", description: "Nature-integrated design" },
  { icon: Home, title: "Gated Villa-Plot Community", description: "Secure & exclusive" },
  { icon: MapPin, title: "Excellent Connectivity", description: "Strategic location" },
  { icon: Wrench, title: "Future-ready Amenities", description: "Modern infrastructure" },
];

const ExperienceNature = () => {
  return (
    <section
      id="experience-nature"
      className="py-16 md:py-24 relative overflow-hidden isolate"
    >
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a3325] via-primary to-[#0d2818]" />
      
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_rgba(217,164,54,0.08)_0%,_transparent_60%)]" />
      
      <div className="relative z-10">
        {/* Site Visit Form - Glassmorphism */}
        <SiteVisitForm variant="horizontal" source="Experience Nature Section" />
        
        {/* Experience Nature Content */}
        <div className="container mx-auto px-4 pt-8 md:pt-12">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 text-white">
              Experience The Nature Around Casa Dale
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto" />
          </div>

          {/* Glassmorphism feature cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center p-5 md:p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 hover:border-white/25 transition-all duration-300"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-accent/25 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-accent/35 transition-all duration-300">
                  <feature.icon className="w-7 h-7 md:w-8 md:h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-base md:text-lg mb-2 text-white">{feature.title}</h3>
                <p className="text-sm md:text-[15px] font-medium text-white/75">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceNature;
