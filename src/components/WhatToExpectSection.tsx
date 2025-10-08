import { CheckCircle2 } from "lucide-react";
import expectMain from "@/assets/expect-main.jpg";
import expectSmall from "@/assets/expect-small.jpg";

const features = [
  "Irrigation systems",
  "Warehouses",
  "Land development & preparation",
  "Transport",
  "Solar-powered cold storage",
  "Street lights",
  "Silo storage",
  "Farm management services",
  "Manned security / CCTV",
  "Secured accommodation",
];

const WhatToExpectSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
              Premium <span className="text-primary">Serviced Lands</span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
              Every Ibac Farm Estate comes fully equipped with world-class infrastructure and services
              designed for maximum productivity and convenience.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 md:gap-3">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                  <span className="text-sm md:text-base text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2 relative animate-fade-in-up">
            <div className="relative z-10">
              <img
                src={expectMain}
                alt="Farm infrastructure"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 z-20">
              <img
                src={expectSmall}
                alt="Fresh harvest"
                className="rounded-xl shadow-xl w-full h-full object-cover border-4 border-background"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatToExpectSection;
