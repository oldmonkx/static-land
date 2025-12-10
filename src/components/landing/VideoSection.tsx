import { Play } from 'lucide-react';

const VideoSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Take a Virtual Tour
          </h2>
          <p className="text-muted-foreground">
            Experience Casa Dale from the comfort of your home
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-primary/5 border border-border/50 shadow-lg">
            {/* Placeholder for video - replace src with actual video URL */}
            <img
              src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=675&fit=crop"
              alt="Casa Dale Villa Plots"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/30 flex items-center justify-center">
              <button className="w-20 h-20 rounded-full bg-accent hover:bg-accent/90 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl">
                <Play className="w-8 h-8 text-accent-foreground ml-1" fill="currentColor" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
