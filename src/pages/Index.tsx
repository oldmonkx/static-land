import { Helmet } from 'react-helmet-async';
import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import HighwayFacing from '@/components/landing/HighwayFacing';
import ExperienceNature from '@/components/landing/ExperienceNature';
import LivingHarmony from '@/components/landing/LivingHarmony';
import GrowthStory from '@/components/landing/GrowthStory';
import MasterPlan from '@/components/landing/MasterPlan';
import PlotSizes from '@/components/landing/PlotSizes';
import Gallery from '@/components/landing/Gallery';
import LocationSection from '@/components/landing/LocationSection';
import Certifications from '@/components/landing/Certifications';
import FinalCTA from '@/components/landing/FinalCTA';
import Footer from '@/components/landing/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Casa Dale | Premium Biophilic Villa Plots in South Hyderabad</title>
        <meta
          name="description"
          content="Discover Casa Dale - Premium villa plots starting from ₹24,999/sq yd in South Hyderabad's high growth zone. HMDA & RERA approved. 20 acres of biophilic gated community near RGIA."
        />
        <meta name="keywords" content="villa plots hyderabad, casa dale, biophilic plots, srisailam highway plots, hmda approved plots, rera approved plots, south hyderabad real estate" />
        <link rel="canonical" href="https://casadale.in" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <HighwayFacing />
          <ExperienceNature />
          <LivingHarmony />
          <GrowthStory />
          <MasterPlan />
          <PlotSizes />
          <Gallery />
          <LocationSection />
          <Certifications />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
