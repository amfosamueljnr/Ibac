import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ComingSoonSection from "@/components/ComingSoonSection";
import WhatToExpectSection from "@/components/WhatToExpectSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ProjectsSection from "@/components/ProjectsSection";
import HypeBanner from "@/components/HypeBanner";
import FinalSection from "@/components/FinalSection";
import Footer from "@/components/Footer";
import BackgroundPattern from "@/components/BackgroundPattern";

const Index = () => {

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <div className="relative">
        <BackgroundPattern />
        <AboutSection />
      </div>
      <ComingSoonSection />
      <div className="relative">
        <BackgroundPattern />
        <WhatToExpectSection />
      </div>
      <div className="relative">
        <BackgroundPattern />
        <WhyChooseSection />
      </div>
      <ProjectsSection />
      <HypeBanner />
      <div className="relative">
        <BackgroundPattern />
        <FinalSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
