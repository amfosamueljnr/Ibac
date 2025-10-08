import { Smartphone, Shield, Users, TrendingUp, Sprout } from "lucide-react";

const reasons = [
  {
    icon: Smartphone,
    title: "Digital Convenience",
    description: "Track your farm anytime via web & mobile app",
  },
  {
    icon: Shield,
    title: "Insured Farms",
    description: "Your investment is protected from Day 1",
  },
  {
    icon: Users,
    title: "Expert Management",
    description: "Agronomists & veterinarians handle operations",
  },
  {
    icon: TrendingUp,
    title: "Proven ROI",
    description: "Steady returns from crops and livestock",
  },
  {
    icon: Sprout,
    title: "Sustainable & Impactful",
    description: "Supporting food security & job creation",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 md:mb-16 animate-fade-in">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Why own a farm with <span className="text-primary">Ibac Farm Estates?</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            We combine modern technology with agricultural expertise to deliver exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-5 md:p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-3 md:mb-4">
                <reason.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-foreground mb-2">{reason.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
