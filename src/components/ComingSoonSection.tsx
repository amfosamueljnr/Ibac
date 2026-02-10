import { Button } from "@/components/ui/button";

const ComingSoonSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-primary-light via-secondary to-background">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="animate-fade-in-up">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
            Own a Farm. Grow Wealth. Build Legacy.
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            At Ibac Farm Estates, we're redefining farming with ready-to-go farm estates for both crops
            and animals. You invest, and our professional management team handles the day-to-day—from
            cultivation to harvest, from feeding to sales.
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="mt-6 md:mt-8 bg-primary/10 border-2 border-primary/30 hover:bg-primary/20 hover:border-primary/50"
          >
            <a href="/IBAC-FARM.pdf" target="_blank" rel="noopener noreferrer">
              <span className="text-primary font-semibold text-sm md:text-base">
                🌱 Learn more about our farm estates.
              </span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;
