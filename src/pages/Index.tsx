import { useState } from "react";
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
import PreOrderModal from "@/components/PreOrderModal";
import BackgroundPattern from "@/components/BackgroundPattern";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onPreOrderClick={() => setIsModalOpen(true)} />
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
      <ProjectsSection onPreOrderClick={() => setIsModalOpen(true)} />
      <HypeBanner />
      <div className="relative">
        <BackgroundPattern />
        <FinalSection onPreOrderClick={() => setIsModalOpen(true)} />
      </div>
      <Footer />
      <PreOrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Index;
