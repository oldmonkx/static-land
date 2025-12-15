import atmosBreatheLogo from "@/assets/atmos-breathe-logo.png";
import casaDaleLogo from "@/assets/casa-dale-logo.png";
import atmosBreatheBg from "@/assets/atmos-breathe-bg.jpg";

const AtmosBreathe = () => {
  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${atmosBreatheBg})` }}
      />

      {/* Dark overlay: Increased opacity slightly for better contrast with gold */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

      {/* Vignette Overlay: Keeps focus on center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.7)_100%)]" />

      {/* Warm golden ambient light */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-amber-900/10 to-amber-600/10 mix-blend-overlay" />

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        {/* "From the Makers of" - Small, tracked out sans-serif */}
        <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-amber-100/60 mb-8 md:mb-10 font-sans">
          From the Makers of
        </p>

        {/* ATMOS BREATHE - Top Logo */}
        <div className="flex justify-center mb-6 md:mb-8">
          <div className="relative group">
            {/* LUXURY FIX: Gold Border Gradient & Crystal Effect */}
            <div className="relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-amber-100/20 rounded-lg px-8 py-6 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
              {/* Subtle inner gold shine */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-amber-200/5 to-transparent opacity-50" />

              <img
                src={atmosBreatheLogo}
                alt="Atmos Breathe Logo"
                /* Keeping white for contrast, but lowered opacity slightly for elegance */
                className="h-20 md:h-24 object-contain brightness-0 invert opacity-90 drop-shadow-md"
              />
            </div>
          </div>
        </div>

        {/* NEW: "Introducing" - Serif Italic for Editorial Luxury feel */}
        <div className="flex flex-col items-center justify-center gap-3 mb-6 md:mb-8">
          {/* Tiny vertical line to connect elements */}
          <div className="h-8 w-px bg-gradient-to-b from-transparent via-amber-200/30 to-transparent" />
          <p className="font-serif italic text-xl md:text-2xl text-amber-100/90 tracking-wide">Introducing</p>
          <div className="h-8 w-px bg-gradient-to-b from-transparent via-amber-200/30 to-transparent" />
        </div>

        {/* CASA DALE - Main Logo (Hero) */}
        <div className="flex justify-center mb-12 md:mb-14">
          <div className="relative">
            {/* Outer Gold Glow - Subtle */}
            <div className="absolute -inset-10 bg-amber-500/10 blur-3xl rounded-full" />

            {/* Crystal Glass Container */}
            <div className="relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl border border-amber-100/30 rounded-xl px-10 py-10 md:px-14 md:py-12 shadow-[0_10px_40px_rgba(0,0,0,0.2)]">
              {/* Shine effect on top edge */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-50" />

              <img
                src={casaDaleLogo}
                alt="Casa Dale Logo"
                /* Larger, White, crisp shadow */
                className="h-32 md:h-44 lg:h-52 object-contain brightness-0 invert drop-shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Footer Tagline */}
        <p className="text-center text-base md:text-lg text-white/80 max-w-xl mx-auto font-serif leading-relaxed">
          A biophilic boutique villa plot community crafted for{" "}
          <span className="text-amber-200 italic font-medium">nature-led living</span>
        </p>
      </div>
    </section>
  );
};

export default AtmosBreathe;
