import React from 'react'
import Link from 'next/link'
import ScrollReveal from '@/app/components/ScrollReveal'

export default function ServicePage() {
  return (
    <main className="bg-brand-dark min-h-screen text-white">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-orange/5 -skew-x-12 translate-x-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <span className="text-brand-orange font-bold uppercase tracking-[0.3em] text-xs">Premium Solutions</span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mt-4">
              Terrace <br />
              <span className="text-brand-orange">Garden</span>
            </h1>
            <p className="text-white/60 mt-6 max-w-2xl text-lg leading-relaxed">
              Industrial-grade chemical resistant flooring solutions designed for factories, laboratories, 
              and commercial spaces requiring maximum durability and safety.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-24 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <h2 className="text-3xl font-heading font-bold mb-6">Why Choose Our <br/>Terrace Garden Solutions?</h2>
            <ul className="space-y-4">
              {[
                "Terrace solutions",
                "Basement solutions",
                "Bathroom solutions",
                "10+ years warranty"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full"></span>
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="aspect-video bg-brand-dark border border-brand-orange/20 relative group overflow-hidden">
              <div className="absolute inset-0 bg-brand-orange/10 group-hover:bg-transparent transition-colors"></div>
              <div className="absolute inset-0 flex items-center justify-center text-brand-orange/20 font-heading font-bold text-4xl">
                PROJECT IMAGE
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <ScrollReveal>
          <h3 className="text-3xl font-bold mb-8 font-heading">Ready for a Technical Consultation?</h3>
          <Link 
            href="/contact" 
            className="inline-block bg-brand-orange text-white px-12 py-5 font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-brand-dark transition-all duration-500"
          >
            Get a Quote Now
          </Link>
        </ScrollReveal>
      </section>
    </main>
  )
}

export const metadata = {
  title: "Bricktech Engineering",
  description: "Construction services",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
}