
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

function Footer() {
  const shopCategories = [
    { name: 'Air Conditioners', path: '/air-conditioners' },
    { name: 'Refrigerators', path: '/refrigerators' },
    { name: 'Washing Machines', path: '/washing-machines' },
    { name: 'Televisions', path: '/televisions' },
    { name: 'Kitchen Appliances', path: '/kitchen-appliances' },
  ];

  const customerService = [
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Store Locator', path: '/stores' },
    { name: 'Careers', path: '/careers' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Terms & Conditions', path: '/terms' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-[#2a2a2a] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div>
            <span className="text-3xl font-bold text-primary mb-4 block">liqo</span>
            <p className="text-sm leading-relaxed">
              Your trusted destination for premium home appliances. Beat the heat with cool deals and hot savings.
            </p>
          </div>

          {/* Shop by Category */}
          <div>
            <h3 className="text-white text-base font-semibold mb-4 tracking-wide uppercase">
              Shop by Category
            </h3>
            <ul className="space-y-2">
              {shopCategories.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm hover:text-primary transition-all duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white text-base font-semibold mb-4 tracking-wide uppercase">
              Customer Service
            </h3>
            <ul className="space-y-2">
              {customerService.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm hover:text-primary transition-all duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-white text-base font-semibold mb-4 tracking-wide uppercase">
              Stay Connected
            </h3>
            <p className="text-sm mb-4">
              Subscribe to get special offers and updates
            </p>
            <div className="flex gap-2 mb-6">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="bg-primary hover:bg-primary/90 text-white transition-all duration-200 active:scale-[0.98]">
                Subscribe
              </Button>
            </div>
            
            <h4 className="text-white text-sm font-semibold mb-3 tracking-wide uppercase">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © 2026 Liqo. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-sm hover:text-primary transition-all duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm hover:text-primary transition-all duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
