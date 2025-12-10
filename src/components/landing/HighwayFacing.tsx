import { Route, MapPin, Plane } from 'lucide-react';

const HighwayFacing = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-accent/10 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full mb-6">
              <Route className="w-5 h-5 text-accent" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wide">
                Premium Location
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
              Prime 100' Highway Facing Property
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience the luxury of seamless connectivity. Casa Dale's prime location on the 100-foot Srisailam Highway means zero detours and instant access to the city's lifelines. You are just minutes away from the Outer Ring Road and Rajiv Gandhi International Airport, ensuring your daily commute is effortless while you enjoy the prestige of a main-road address.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/50 transition-all duration-300 text-center hover:shadow-lg">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Route className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-serif font-semibold text-lg text-primary mb-2">
                100' Wide Highway
              </h3>
              <p className="text-muted-foreground text-sm">
                Direct access to Srisailam Highway
              </p>
            </div>

            <div className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/50 transition-all duration-300 text-center hover:shadow-lg">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-serif font-semibold text-lg text-primary mb-2">
                ORR Proximity
              </h3>
              <p className="text-muted-foreground text-sm">
                Minutes away from Outer Ring Road
              </p>
            </div>

            <div className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/50 transition-all duration-300 text-center hover:shadow-lg">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Plane className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-serif font-semibold text-lg text-primary mb-2">
                RGIA Access
              </h3>
              <p className="text-muted-foreground text-sm">
                Quick connectivity to the airport
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighwayFacing;
