import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Phone, Gift, BadgeCheck } from "lucide-react";
import heroImage from "@/assets/hero-aerial.jpg";
const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Webhook integration - replace with your Pabbly Connect URL
      const webhookUrl = "YOUR_PABBLY_WEBHOOK_URL";
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          source: "Hero Form",
          timestamp: new Date().toISOString(),
        }),
      });
      toast.success("Thank you! Our team will contact you shortly.");
      setFormData({
        name: "",
        phone: "",
        email: "",
      });
    } catch (error) {
      toast.success("Thank you! Our team will contact you shortly.");
      setFormData({
        name: "",
        phone: "",
        email: "",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="relative min-h-screen flex items-center pt-32 md:pt-24 lg:pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left Content - 3 columns */}
          <div className="lg:col-span-3 space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-primary leading-tight">
                Biophilic
                <br />
                <span className="text-accent">Villa Plots</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                in South Hyderabad's
                <br className="md:hidden" /> High Growth Zone
              </p>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-lg text-muted-foreground">Price starts from</span>
              <span className="text-3xl md:text-4xl font-serif font-bold text-primary">₹24,999/-</span>
              <span className="text-lg text-muted-foreground">Sq yds*</span>
            </div>

            <div className="flex flex-wrap gap-4 text-sm md:text-base">
              <div className="flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full backdrop-blur-sm">
                <span className="w-2 h-2 bg-accent rounded-full" />
                <span className="font-medium">20 Acres</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full backdrop-blur-sm">
                <span className="w-2 h-2 bg-accent rounded-full" />
                <span className="font-medium">167 - 390 sq yds</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full backdrop-blur-sm">
                <span className="w-2 h-2 bg-accent rounded-full" />
                <span className="font-medium">R-House Clubhouse</span>
              </div>
            </div>
          </div>

          {/* Right Form - 2 columns */}
          <div className="lg:col-span-2 lg:justify-self-end w-full max-w-md">
            <div className="bg-white/90 backdrop-blur-xl p-8 md:p-10 rounded-2xl shadow-2xl border border-white/20">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-serif font-semibold text-primary mb-1">Get Price Sheet & Layout</h2>
                <div className="w-12 h-0.5 bg-accent mx-auto mt-2" />
                <p className="text-muted-foreground mt-3">Discover Your Dream Home on Srisailam Highway!</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    required
                    className="h-12 bg-gray-50 border-border/50 focus:border-accent shadow-inner placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phone: e.target.value,
                      })
                    }
                    required
                    className="h-12 bg-gray-50 border-border/50 focus:border-accent shadow-inner placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    required
                    className="h-12 bg-gray-50 border-border/50 focus:border-accent shadow-inner placeholder:text-gray-400"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 text-white font-semibold text-lg hover:opacity-90 transition-opacity animate-subtle-pulse"
                  style={{
                    backgroundColor: "#D4AF37",
                  }}
                >
                  {isSubmitting ? "Submitting..." : "Enquire Now"}
                </Button>
              </form>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-2 mt-6 pt-5 border-t border-border/30">
                <div className="flex flex-col items-center text-center">
                  <Phone
                    className="w-4 h-4 mb-1"
                    style={{
                      color: "#D4AF37",
                    }}
                  />
                  <span className="text-[10px] font-medium text-slate-700 leading-tight">Instant Call Back</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Gift
                    className="w-4 h-4 mb-1"
                    style={{
                      color: "#D4AF37",
                    }}
                  />
                  <span className="text-[10px] font-medium text-slate-700 leading-tight">Attractive Offers</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <BadgeCheck
                    className="w-4 h-4 mb-1"
                    style={{
                      color: "#D4AF37",
                    }}
                  />
                  <span className="text-[10px] font-medium text-slate-700 leading-tight">Best Price Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
