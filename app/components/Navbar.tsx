'use client'
import { useState, useEffect, JSX } from 'react'
import Link from 'next/link'

// 1. Define the shape of a Service object
interface ServiceItem {
  name: string;
  href: string;
}

const services: ServiceItem[] = [
  { name: 'Chemical Flooring', href: '/services/chemical-flooring' },
  { name: 'Epoxy Flooring', href: '/services/epoxy-flooring' },
  { name: 'Waterproofing', href: '/services/waterproofing' },
  { name: 'Terrace Garden', href: '/services/terrace-garden' },
  { name: 'Swimming Pool', href: '/services/swimming-pool' },
]

export default function Navbar(): JSX.Element {
  // TypeScript automatically infers 'boolean' for these states
  const [scrolled, setScrolled] = useState<boolean>(false)
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const [servicesOpen, setServicesOpen] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = (): void => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-dark shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-orange flex items-center justify-center">
              <span className="text-white font-heading font-bold text-lg">B</span>
            </div>
            <div>
              <div className="text-white font-heading font-bold text-xl leading-none">BRICKTECH</div>
              <div className="text-brand-tan text-xs tracking-[0.15em] uppercase">Engineering</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-white/80 hover:text-brand-orange transition-colors text-sm uppercase tracking-wide font-medium">Home</Link>
            <Link href="/about" className="text-white/80 hover:text-brand-orange transition-colors text-sm uppercase tracking-wide font-medium">About</Link>

            {/* Services Dropdown */}
            <div 
              className="relative" 
              onMouseEnter={() => setServicesOpen(true)} 
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button 
                className="text-white/80 hover:text-brand-orange transition-colors text-sm uppercase tracking-wide font-medium flex items-center gap-1"
                aria-expanded={servicesOpen}
              >
                Services
                <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-brand-dark border border-white/10 shadow-xl">
                  {services.map((s: ServiceItem) => (
                    <Link 
                      key={s.href} 
                      href={s.href} 
                      className="block px-5 py-3 text-white/80 hover:text-brand-orange hover:bg-white/5 text-sm transition-colors border-b border-white/5 last:border-0"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/gallery" className="text-white/80 hover:text-brand-orange transition-colors text-sm uppercase tracking-wide font-medium">Gallery</Link>
            <Link href="/contact" className="btn-primary py-2 px-6 text-xs text-white">Get Quote</Link>
          </nav>

          {/* Mobile hamburger */}
          <button 
            className="lg:hidden text-white p-2" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <div className={`w-6 h-0.5 bg-white transition-all mb-1.5 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white transition-all mb-1.5 ${menuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10">
            <div className="flex flex-col gap-1 mt-4">
              <Link href="/" onClick={() => setMenuOpen(false)} className="text-white/80 py-2 text-sm uppercase tracking-wide">Home</Link>
              <Link href="/about" onClick={() => setMenuOpen(false)} className="text-white/80 py-2 text-sm uppercase tracking-wide">About</Link>
              <div className="text-brand-tan text-xs tracking-widest uppercase py-2 mt-2 font-bold">Services</div>
              
              {services.map((s: ServiceItem) => (
                <Link 
                  key={s.href} 
                  href={s.href} 
                  onClick={() => setMenuOpen(false)} 
                  className="text-white/70 py-2 pl-3 text-sm border-l border-brand-orange/40 hover:text-brand-orange transition-colors"
                >
                  {s.name}
                </Link>
              ))}
              
              <Link href="/gallery" onClick={() => setMenuOpen(false)} className="text-white/80 py-2 text-sm uppercase tracking-wide mt-2">Gallery</Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)} className="btn-primary text-center mt-4 text-white py-3 font-bold">Get Quote</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}