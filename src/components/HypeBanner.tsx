import farmerIpad from "@/assets/farmer-ipad.png";

const HypeBanner = () => {
  return (
    <section className="relative px-4 bg-gradient-to-r from-primary via-accent to-primary overflow-visible mt-12 md:mt-20">
      <div className="container mx-auto max-w-6xl py-4 md:py-6">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="text-white animate-slide-fade">
            <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">
              Get hyped for the future of farming
            </h2>
            <p className="text-sm md:text-base text-white/90 mb-3 md:mb-4">
              Join thousands of smart investors who are building wealth through modern agriculture.
              Track your farm in real-time, watch your investment grow, and make an impact on food
              security in Ghana.
            </p>
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full animate-pulse"></div>
              <span className="text-white font-medium text-sm md:text-base">Pre-orders now open</span>
            </div>
          </div>

          <div className="hidden md:flex justify-center md:justify-end animate-scale-in">
            <div className="relative -mt-12 md:-mt-24">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl"></div>
              <img
                src={farmerIpad}
                alt="Farmer using digital farm management"
                className="relative z-10 w-32 md:w-80 h-auto drop-shadow-2xl"
                style={{
                  filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HypeBanner;
