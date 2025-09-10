import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-3xl font-playfair font-bold text-primary mb-4">
              Lumière
            </h3>
            <div className="w-16 h-1 bg-gradient-primary mb-6"></div>
            <p className="text-foreground-muted font-inter leading-relaxed">
              Where culinary artistry meets timeless elegance. Creating unforgettable dining experiences since 1987.
            </p>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-1">
            <h4 className="text-xl font-playfair font-semibold text-foreground mb-6">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-foreground-muted font-inter">
                  <p>123 Culinary Boulevard</p>
                  <p>Downtown District</p>
                  <p>New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-foreground-muted font-inter">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-foreground-muted font-inter">reservations@lumiere.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="md:col-span-1">
            <h4 className="text-xl font-playfair font-semibold text-foreground mb-6">
              Hours
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-1" />
                <div className="text-foreground-muted font-inter">
                  <div className="space-y-2">
                    <div>
                      <p className="font-medium text-foreground">Dinner Service</p>
                      <p>Tuesday - Sunday</p>
                      <p>5:00 PM - 10:00 PM</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Closed</p>
                      <p>Mondays</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social & Newsletter */}
          <div className="md:col-span-1">
            <h4 className="text-xl font-playfair font-semibold text-foreground mb-6">
              Follow Us
            </h4>
            <div className="flex gap-4 mb-8">
              <a 
                href="#" 
                className="w-10 h-10 bg-muted hover:bg-primary/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-muted hover:bg-primary/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-muted hover:bg-primary/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5 text-primary" />
              </a>
            </div>
            
            <div>
              <p className="text-foreground-muted font-inter mb-4">
                Subscribe to our newsletter for exclusive dining experiences and seasonal menu updates.
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-glow transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground-muted font-inter text-sm">
              © 2024 Lumière Restaurant. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-foreground-muted hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-foreground-muted hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-foreground-muted hover:text-primary transition-colors duration-300">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;