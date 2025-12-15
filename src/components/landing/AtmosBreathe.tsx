import atmosBreatheLogo from '@/assets/atmos-breathe-logo.png';
import casaDaleLogo from '@/assets/casa-dale-logo.png';

const AtmosBreathe = () => {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-primary relative overflow-hidden">
      {/* Subtle radial gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.03)_0%,_transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* From the Makers of */}
        <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-primary-foreground/60 text-center mb-8 font-sans">
          From the Makers of
        </p>
        
        {/* Atmos Breathe Logo - floating freely */}
        <div className="flex justify-center mb-12 md:mb-16">
          <img 
            src={atmosBreatheLogo} 
            alt="Atmos Breathe Logo" 
            className="h-14 md:h-18 lg:h-20 drop-shadow-[0_4px_20px_rgba(255,255,255,0.15)]"
          />
        </div>

        {/* Elegant divider */}
        <div className="flex items-center justify-center gap-4 mb-12 md:mb-16">
          <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent to-accent/50" />
          <span className="text-accent text-lg">◆</span>
          <div className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent to-accent/50" />
        </div>

        {/* Presenting */}
        <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-primary-foreground/60 text-center mb-10 font-sans">
          Presenting
        </p>

        {/* Casa Dale Logo - prominent */}
        <div className="flex justify-center mb-8 md:mb-10">
          <img 
            src={casaDaleLogo} 
            alt="Casa Dale Logo" 
            className="h-28 md:h-36 lg:h-44 drop-shadow-[0_4px_30px_rgba(255,255,255,0.2)]"
          />
        </div>

        {/* Tagline */}
        <p className="text-center text-base md:text-lg lg:text-xl text-primary-foreground/80 max-w-2xl mx-auto font-sans leading-relaxed tracking-wide">
          A biophilic boutique villa plot community crafted for{' '}
          <span className="text-accent font-medium">nature-led living</span>
        </p>
      </div>
    </section>
  );
};

export default AtmosBreathe;
