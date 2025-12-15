import atmosBreatheImg from '@/assets/atmos-breathe.png';
import casaDaleLogo from '@/assets/casa-dale-logo.png';

const AtmosBreathe = () => {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Subtle decorative element */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      <div className="container mx-auto px-4">
        {/* From the Makers of */}
        <div className="text-center mb-12">
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-muted-foreground mb-3 font-sans">
            From the Makers of
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary font-medium">
            Atmos Breathe
          </h2>
          <div className="w-24 h-0.5 bg-accent mx-auto mt-6" />
        </div>

        {/* Atmos Breathe Image */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <img 
              src={atmosBreatheImg} 
              alt="Atmos Breathe - Premium Villa Community" 
              className="w-full h-auto object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
          </div>
        </div>

        {/* Presenting Casa Dale */}
        <div className="text-center">
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-muted-foreground mb-3 font-sans">
            Presenting
          </p>
          <img 
            src={casaDaleLogo} 
            alt="Casa Dale Logo" 
            className="h-16 md:h-20 mx-auto mb-6"
          />
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto font-sans leading-relaxed">
            A biophilic boutique villa plot community crafted for{' '}
            <span className="text-accent font-medium">nature-led living</span>
          </p>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </section>
  );
};

export default AtmosBreathe;
