import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
            <div className="bg-accent text-accent-foreground p-2 rounded-lg">
              <span className="text-lg font-bold">WS</span>
            </div>
            <div>
              <h3 className="text-xl font-bold">Wellbred Systems</h3>
              <p className="text-sm opacity-80">Construction Co.</p>
            </div>
            </div>
            <p className="text-sm opacity-80">
              Building with precision and excellence for over 20 years. Your trusted partner for all construction needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Residential Construction</li>
              <li>Commercial Building</li>
              <li>Industrial Projects</li>
              <li>Renovation & Remodeling</li>
              <li>Project Management</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 opacity-80" />
                <span className="text-sm opacity-80">KU Plaza Nairobi Kenya</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 opacity-80" />
                <span className="text-sm opacity-80">+254722478519</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 opacity-80" />
                <span className="text-sm opacity-80">wellbredsystems@gmail.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                {[
                  { icon: Facebook, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Linkedin, href: "#" },
                  { icon: Instagram, href: "#" },
                ].map(({ icon: Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2025 Wellbred Systems Construction Company. All rights reserved.
          </p>
          <p className="text-xs opacity-60 mt-2">
            Designed by El'series Systems
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;