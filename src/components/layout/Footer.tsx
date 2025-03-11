
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary/5 pt-16 pb-8">
      <div className="container px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center mb-6">
              <div className="mr-2 h-8 w-8 rounded-md bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="text-xl font-display font-semibold text-foreground">Horizon</span>
            </div>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Providing exceptional healthcare services with cutting-edge technology and compassionate care for over 20 years.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="h-8 w-8 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white flex items-center justify-center transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white flex items-center justify-center transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white flex items-center justify-center transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white flex items-center justify-center transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Our Services', path: '/services' },
                { name: 'Meet Our Doctors', path: '/doctors' },
                { name: 'Online Appointment', path: '/appointments' },
                { name: 'Contact Us', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-muted-foreground text-sm hover:text-primary transition-colors flex items-center">
                    <ChevronRight className="h-3.5 w-3.5 mr-1.5 text-primary/70" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3 - Our Services */}
          <div>
            <h3 className="text-foreground font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                { name: 'Cardiology', path: '/services' }, 
                { name: 'Neurology', path: '/services' }, 
                { name: 'Orthopedics', path: '/services' }, 
                { name: 'Pediatrics', path: '/services' }, 
                { name: 'Radiology', path: '/services' }, 
                { name: 'Laboratory', path: '/services' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-muted-foreground text-sm hover:text-primary transition-colors flex items-center">
                    <ChevronRight className="h-3.5 w-3.5 mr-1.5 text-primary/70" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4 - Contact Info */}
          <div>
            <h3 className="text-foreground font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-sm">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">1234 Healthcare Avenue, Medical District, NY 10001</span>
              </li>
              <li className="flex items-center text-sm">
                <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-muted-foreground hover:text-primary transition-colors">+1 (555) 123-4567</a>
              </li>
              <li className="flex items-center text-sm">
                <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <a href="mailto:contact@Horizon.com" className="text-muted-foreground hover:text-primary transition-colors">contact@Horizon.com</a>
              </li>
              <li className="flex items-start text-sm">
                <Clock className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 8:00 PM</p>
                  <p className="text-muted-foreground">Saturday: 9:00 AM - 5:00 PM</p>
                  <p className="text-muted-foreground">Sunday: Emergency Only</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-t border-primary/10 my-8" />
        
        <div className="text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Horizon. All rights reserved. | Designed with precision for better healthcare.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
