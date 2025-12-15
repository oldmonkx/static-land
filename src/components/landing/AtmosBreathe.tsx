import atmosBreatheLogo from "@/assets/atmos-breathe-logo.png";
import casaDaleLogo from "@/assets/casa-dale-logo.png";
import atmosBreatheBg from "@/assets/atmos-breathe-bg.jpg";

const AtmosBreathe = () => {
  return (
    /* Added py-20 to ensure vertical padding so content doesn't touch top/bottom on short screens */
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${atmosBreatheBg})` }}
      />

      {/* Dark overlay for better text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

      {/* Warm golden light overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-amber-500/5 to-amber-400/10" />

      {/* Content - Increased padding to px-6 (mobile) and px-12 (desktop) to keep text off edges */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        {/* From the Makers of */}
        <p className="text-xs md:text-sm uppercase tracking-[0.5em] text-white/70 mb-8 md:mb-10 font-sans">
          From the Makers of
        </p>

        {/* Atmos Breathe Logo - Glowing Light Box Effect */}
        <div className="flex justify-center mb-12 md:mb-16">
          <div className="relative">
            {/* Outer glow */}
            <div className="absolute -inset-6 md:-inset-8 bg-gradient-to-r from-amber-400/20 via-amber-300/30 to-amber-400/20 blur-2xl rounded-3xl" />
            {/* Inner warm glow */}
            <div className="absolute -inset-3 md:-inset-4 bg-white/10 backdrop-blur-sm rounded-2xl" />

            {/* Logo container - REDUCED padding slightly so logo fills it more */}
            <div className="relative bg-white/5 backdrop-blur-md border border-white/20 rounded-xl px-6 py-5 md:px-10 md:py-6 shadow-[0_0_60px_rgba(251,191,36,0.15)]">
              <img
                src={atmosBreatheLogo}
                alt="Atmos Breathe Logo"
                /* Increased Logo Size: h-28 (mobile) to h-40 (desktop) */
                className="h-28 md:h-32 lg:h-40 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              />
            </div>
          </div>
        </div>

        {/* Elegant Divider */}
        <div className="flex items-center justify-center gap-6 mb-12 md:mb-16">
          <div className="w-16 md:w-28 h-px bg-gradient-to-r from-transparent via-white/40 to-white/60" />
          <span className="text-amber-300/80 text-sm">✦</span>
          <div className="w-16 md:w-28 h-px bg-gradient-to-l from-transparent via-white/40 to-white/60" />
        </div>

        {/* Presenting */}
        <p className="text-xs md:text-sm uppercase tracking-[0.5em] text-white/70 mb-10 md:mb-12 font-sans">
          Presenting
        </p>

        {/* Casa Dale Logo - Larger Glowing Light Box Effect */}
        <div className="flex justify-centimport atmosBreatheLogo from "@/assets/atmos-breathe-logo.png";
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

      {/* Dark overlay for better text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

      {/* NEW: Vignette Overlay (Darkens edges to focus on center) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />

      {/* Warm golden light overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-amber-500/5 to-amber-400/10" />

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        {/* From the Makers of */}
        <p className="text-xs md:text-sm uppercase tracking-[0.5em] text-white/60 mb-8 md:mb-10 font-sans">
          From the Makers of
        </p>

        {/* Atmos Breathe Logo - White/Monochrome */}
        <div className="flex justify-center mb-10 md:mb-14">
          <div className="relative">
            {/* Outer glow */}
            <div className="absolute -inset-6 md:-inset-8 bg-gradient-to-r from-amber-400/10 via-amber-300/20 to-amber-400/10 blur-2xl rounded-3xl" />
            
            {/* Logo container - Softer border (white/10) */}
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-6 py-5 md:px-10 md:py-6 shadow-[0_0_60px_rgba(251,191,36,0.1)]">
              <img
                src={atmosBreatheLogo}
                alt="Atmos Breathe Logo"
                /* Added: brightness-0 invert (Make white) & opacity-90 */
                className="h-28 md:h-32 lg:h-40 drop-shadow-lg brightness-0 invert opacity-90"
              />
            </div>
          </div>
        </div>

        {/* Removed "Divider" and "Presenting" for cleaner luxury look */}

        {/* Casa Dale Logo - Main Focus */}
        <div className="flex justify-center mb-12 md:mb-16">
          <div className="relative">
            {/* Outer glow - Stronger but refined */}
            <div className="absolute -inset-8 md:-inset-12 bg-gradient-to-r from-amber-400/20 via-amber-300/30 to-amber-400/20 blur-3xl rounded-3xl" />
            
            {/* Logo container */}
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-8 py-6 md:px-12 md:py-8 shadow-[0_0_80px_rgba(251,191,36,0.15)]">
              <img
                src={casaDaleLogo}
                alt="Casa Dale Logo"
                /* Added: brightness-0 invert (Make white) & opacity-95 */
                className="h-40 md:h-52 lg:h-64 drop-shadow-xl brightness-0 invert opacity-95"
              />
            </div>
          </div>
        </div>

        {/* Tagline - Improved Spacing */}
        <p className="text-center text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto font-serif leading-loose tracking-wide">
          A biophilic boutique villa plot community crafted for{" "}
          <br className="hidden md:block" />
          <span className="text-amber-200/90 font-medium italic">
            nature-led living
          </span>
        </p>
      </div>
    </section>
  );
};

export default AtmosBreathe;er mb-10 md:mb-12">
          <div className="relative">
            {/* Outer glow - stronger */}
            <div className="absolute -inset-8 md:-inset-12 bg-gradient-to-r from-amber-400/25 via-amber-300/35 to-amber-400/25 blur-3xl rounded-3xl" />
            {/* Inner warm glow */}
            <div className="absolute -inset-4 md:-inset-6 bg-white/10 backdrop-blur-sm rounded-2xl" />

            {/* Logo container - REDUCED padding so logo fills it more */}
            <div className="relative bg-white/5 backdrop-blur-md border border-white/25 rounded-xl px-8 py-6 md:px-12 md:py-8 shadow-[0_0_80px_rgba(251,191,36,0.2)]">
              <img
                src={casaDaleLogo}
                alt="Casa Dale Logo"
                /* Increased Logo Size: h-40 (mobile) to h-64 (desktop) */
                className="h-40 md:h-52 lg:h-64 drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]"
              />
            </div>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-center text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto font-serif leading-relaxed tracking-wide">
          A biophilic boutique villa plot community crafted for{" "}
          <span className="text-amber-200 font-medium italic">nature-led living</span>
        </p>
      </div>
    </section>
  );
};

export default AtmosBreathe;
