import Link from 'next/link'
import React from 'react'

// Defining a simple type for our Nav links
interface NavLink {
  name: string;
  href: string;
}

export default function Footer(): React.JSX.Element {
  // TypeScript correctly infers these as strings
  const socialPlatforms: string[] = ['facebook', 'instagram', 'linkedin', 'whatsapp'];

  const serviceLinks: NavLink[] = [
    { name: 'Chemical Flooring', href: '/services/chemical-flooring' },
    { name: 'Epoxy Flooring', href: '/services/epoxy-flooring' },
    { name: 'Waterproofing', href: '/services/waterproofing' },
    { name: 'Terrace Garden', href: '/services/terrace-garden' },
    { name: 'Swimming Pool', href: '/services/swimming-pool' },
    { name: 'Tiles & Materials', href: '/services' },
  ];

  const companyLinks: NavLink[] = [
    { name: 'About Us', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Get a Quote', href: '/contact' },
  ];

  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-brand-orange flex items-center justify-center">
                <span className="text-white font-heading font-bold text-lg">B</span>
              </div>
              <div>
                <div className="text-white font-heading font-bold text-xl leading-none uppercase tracking-tight">BRICKTECH</div>
                <div className="text-brand-tan text-xs tracking-[0.15em] uppercase">Engineering</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Your trusted partner for all construction chemical solutions. Quality materials, skilled labour, exceptional results.
            </p>
            <div className="flex gap-4 mt-6">
              {socialPlatforms.map((s) => (
                <a 
                  key={s} 
                  href="#" 
                  className="w-9 h-9 border border-white/20 flex items-center justify-center hover:border-brand-orange hover:bg-brand-orange/10 transition-all text-white/60 hover:text-white text-xs uppercase"
                  aria-label={s}
                >
                  {s[0].toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-widest text-xs mb-5 text-brand-tan">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-brand-orange text-sm transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-brand-orange rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-widest text-xs mb-5 text-brand-tan">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/60 hover:text-brand-orange text-sm transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-brand-orange rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-widest text-xs mb-5 text-brand-tan">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-brand-orange mt-0.5" aria-hidden="true">📍</span>
                <span className="text-white/60 text-sm">123, Construction Hub, Industrial Area, India</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-orange" aria-hidden="true">📞</span>
                <a href="tel:+917668815564" className="text-white/60 hover:text-brand-orange text-sm transition-colors">+91 7668815564</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-orange" aria-hidden="true">✉️</span>
                <a href="mailto:info@bricktechengineering.com" className="text-white/60 hover:text-brand-orange text-sm transition-colors">info@bricktechengineering.com</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-orange" aria-hidden="true">🕒</span>
                <span className="text-white/60 text-sm">Mon – Sat: 9:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} BrickTech Engineering. All rights reserved.</p>
          <p className="text-white/30 text-xs uppercase tracking-widest">Built for excellence in construction</p>
        </div>
      </div>
    </footer>
  )
}