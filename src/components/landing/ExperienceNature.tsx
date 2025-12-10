import { CheckCircle2, Leaf, Home, MapPin, Wrench } from "lucide-react";

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
      className="py-20 md:py-28 bg-primary text-primary-foreground overflow-hidden relative z-10 isolate"
      style={{ backgroundImage: "none" }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
            Experience The Nature Around Casa Dale
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center p-6 rounded-xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-[15px] font-medium text-primary-foreground/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceNature;
