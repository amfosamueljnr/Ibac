import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import Logo from "@/assets/logoremoved.png"; // ✅ your logo image

const GOOGLE_FORM_URL = "https://forms.gle/5dj4p7nrW4VxCRfn9";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img
            src={Logo}
            alt="Ibac Farm Estates Logo"
            className="w-36 h-36 object-contain"
          />
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button variant="hero" size="lg" onClick={() => window.open(GOOGLE_FORM_URL, "_blank")}>
            Pre-Order Now
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 hover:bg-muted rounded-md"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6 text-foreground" />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border p-4">
          <Button
            variant="hero"
            size="lg"
            className="w-full"
            onClick={() => window.open(GOOGLE_FORM_URL, "_blank")}
          >
            Pre-Order Now
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
