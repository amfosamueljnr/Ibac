import { useState, useEffect } from "react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const heroImages = [hero1, hero2, hero3];

const HeroSection = () => {
  const calculateTimeLeft = () => {
  const targetDate = new Date("2026-03-25T00:00:00"); // Countdown ends December 3, 2025
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime(); // ✅ Fix: use .getTime()

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return { days, hours, minutes, seconds };
};


  const [currentImage, setCurrentImage] = useState(0);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Farm estate ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
        </div>
      ))}

      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 drop-shadow-lg">
            The Future of Farming
            <br />
            <span className="text-accent">Begins Here</span>
          </h1>
          <p className="text-base md:text-xl text-white/90 mb-8 md:mb-12 drop-shadow-md">
            Modern farm estates for crops and livestock management
          </p>

          <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-xl md:rounded-2xl p-4 md:p-6">
            <p className="text-white text-base md:text-lg mb-3 md:mb-4 font-medium">
              Coming Soon
            </p>
            <div className="grid grid-cols-4 gap-2 md:gap-4">
              {[
                { value: timeLeft.days, label: "Days" },
                { value: timeLeft.hours, label: "Hours" },
                { value: timeLeft.minutes, label: "Minutes" },
                { value: timeLeft.seconds, label: "Seconds" },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 md:p-3 mb-1 md:mb-2">
                    <span className="text-xl md:text-3xl font-bold text-white">
                      {item.value.toString().padStart(2, "0")}
                    </span>
                  </div>
                  <span className="text-xs text-white/80">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
