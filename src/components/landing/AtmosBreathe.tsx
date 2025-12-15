import atmosBreatheLogo from '@/assets/atmos-breathe-logo.png';
import casaDaleLogo from '@/assets/casa-dale-logo.png';

const AtmosBreathe = () => {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Subtle decorative element */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      <div className="container mx-auto px-4">
        {/* From the Makers of - Atmos Breathe Logo */}
        <div className="text-center mb-12">
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-muted-foreground mb-4 font-sans">
            From the Makers of
          </p>
          <div className="bg-primary rounded-2xl py-6 px-8 md:py-8 md:px-12 max-w-xl mx-auto">
            <img 
              src={atmosBreatheLogo} 
              alt="Atmos Breathe Logo" 
              className="h-16 md:h-20 lg:h-24 mx-auto"
            />
          </div>
          <div className="w-24 h-0.5 bg-accent mx-auto mt-8" />
        </div>

        {/* Presenting Casa Dale - on dark background */}
        <div className="text-center">
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-muted-foreground mb-6 font-sans">
            Presenting
          </p>
          <div className="bg-primary rounded-2xl py-10 px-6 md:py-14 md:px-12 max-w-3xl mx-auto">
            <img 
              src={casaDaleLogo} 
              alt="Casa Dale Logo" 
              className="h-24 md:h-32 lg:h-40 mx-auto mb-6"
            />
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto font-sans leading-relaxed">
              A biophilic boutique villa plot community crafted for{' '}
              <span className="text-accent font-medium">nature-led living</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </section>
  );
};

export default AtmosBreathe;
