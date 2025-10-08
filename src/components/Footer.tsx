import { Mail, Phone, Globe, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Logo from "@/assets/logoremoved.png";

const Footer = () => {
  return (
    <footer className="bg-emerald-50 text-emerald-800 py-8 md:py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Logo + Intro */}
          <div>
            <img
              src={Logo}
              alt="Ibac Farm Estates Logo"
              className="w-36 h-36 object-contain mb-4"
            />
            {/* <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-emerald-900">
              Ibac Farm Estates
            </h3>
            <p className="text-sm md:text-base text-emerald-800/90 mb-3 md:mb-4">
              Modern, managed farm estates for the future of Ghanaian agriculture.
            </p> */}
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-emerald-900">
              Contact Us
            </h4>
            <div className="space-y-2 md:space-y-3">
              <a
                href="tel:+233202822169"
                className="flex items-center gap-2 md:gap-3 text-sm md:text-base text-emerald-800/90 hover:text-emerald-900 transition-colors"
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                <span>+233 20 282 2169</span>
              </a>
              <a
                href="mailto:info@ibacfarms.com"
                className="flex items-center gap-2 md:gap-3 text-sm md:text-base text-emerald-800/90 hover:text-emerald-900 transition-colors"
              >
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
                <span>info@ibacfarms.com</span>
              </a>
              <a
                href="https://www.ibacfarms.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 md:gap-3 text-sm md:text-base text-emerald-800/90 hover:text-emerald-900 transition-colors"
              >
                <Globe className="w-4 h-4 md:w-5 md:h-5" />
                <span>www.ibacfarms.com</span>
              </a>
            </div>
          </div>

          {/* Social Section */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-emerald-900">
              Follow Us
            </h4>
            <p className="text-sm md:text-base text-emerald-800/90 mb-3">
              @ibacfarmestates
            </p>
            <div className="flex gap-3 md:gap-4">
              <a
                href="#"
                className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-emerald-100/60 hover:bg-emerald-100/80 flex items-center justify-center transition-all hover:scale-110"
              >
                <Facebook className="w-4 h-4 md:w-5 md:h-5 text-emerald-900" />
              </a>
              <a
                href="#"
                className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-emerald-100/60 hover:bg-emerald-100/80 flex items-center justify-center transition-all hover:scale-110"
              >
                <Twitter className="w-4 h-4 md:w-5 md:h-5 text-emerald-900" />
              </a>
              <a
                href="#"
                className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-emerald-100/60 hover:bg-emerald-100/80 flex items-center justify-center transition-all hover:scale-110"
              >
                <Instagram className="w-4 h-4 md:w-5 md:h-5 text-emerald-900" />
              </a>
              <a
                href="#"
                className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-emerald-100/60 hover:bg-emerald-100/80 flex items-center justify-center transition-all hover:scale-110"
              >
                <Linkedin className="w-4 h-4 md:w-5 md:h-5 text-emerald-900" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-emerald-200/60 pt-4 md:pt-6 text-center text-xs md:text-sm text-emerald-800/70">
          <p>&copy; {new Date().getFullYear()} Ibac Farm Estates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
