import { Button } from "@/components/ui/button";
import finalMain from "@/assets/final-main.jpg";
import finalSmall from "@/assets/final-small.jpg";

interface FinalSectionProps {
  onPreOrderClick: () => void;
}

const FinalSection = ({ onPreOrderClick }: FinalSectionProps) => {
  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-background via-primary-light to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
              Join the future of <span className="text-primary">farming</span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
              Don't miss this opportunity to own a professionally managed farm estate. Secure your spot
              today with just GHS 10,000 reservation fee.
            </p>
            <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
              Whether you choose crops or livestock, your investment is backed by expert management,
              modern infrastructure, and proven agricultural practices.
            </p>
            <Button variant="hero" size="lg" onClick={onPreOrderClick}>
              Reserve Your Farm Today
            </Button>
          </div>

          <div className="relative animate-fade-in-up">
            <div className="relative z-10">
              <img
                src={finalMain}
                alt="Successful farm owner"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 z-20">
              <img
                src={finalSmall}
                alt="Fresh farm produce"
                className="rounded-xl shadow-xl w-full h-full object-cover border-4 border-background"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalSection;
