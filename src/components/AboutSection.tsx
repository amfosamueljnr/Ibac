import aboutMain from "@/assets/about-main.jpg";
import aboutSmall from "@/assets/about-small.jpg";

const AboutSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
              Farm Life Simplified at <span className="text-primary">Ibac Farm Estates</span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              We are beyond stoked to announce the launch of our game-changing project, Ibac Farm Estates the
first of its kind anywhere!
              
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-3 md:mt-4">
              We're revolutionizing agriculture in Ghana by creating modern, fully-serviced farm estates
              where you can own and grow your investment while our expert team manages everything from
              cultivation to harvest.
            </p>
          </div>

          <div className="relative animate-fade-in-up">
            <div className="relative z-10">
              <img
                src={aboutMain}
                alt="Modern farm estate"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 z-20">
              <img
                src={aboutSmall}
                alt="Farmers working together"
                className="rounded-xl shadow-xl w-full h-full object-cover border-4 border-background"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
