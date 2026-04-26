'use client'

import Link from 'next/link'
import ScrollReveal from './components/ScrollReveal'
import { JSX } from 'react/jsx-dev-runtime'

type Service = {
  icon: string
  title: string
  desc: string
  href: string
  color: string
}

type Stat = {
  number: string
  label: string
}

type WhyUsItem = {
  icon: string
  title: string
  desc: string
}

type Testimonial = {
  name: string
  role: string
  text: string
}

const services: Service[] = [
  {
    icon: '🏗️',
    title: 'Chemical Flooring',
    desc: 'Industrial-grade chemical resistant flooring for factories, labs, and commercial spaces.',
    href: '/services/chemical-flooring',
    color: 'from-orange-900/30 to-transparent',
  },
  {
    icon: '✨',
    title: 'Epoxy Flooring',
    desc: 'Seamless, durable, and aesthetically superior epoxy floors for any environment.',
    href: '/services/epoxy-flooring',
    color: 'from-amber-900/30 to-transparent',
  },
  {
    icon: '💧',
    title: 'Waterproofing',
    desc: 'Comprehensive waterproofing solutions for roofs, basements, walls and wet areas.',
    href: '/services/waterproofing',
    color: 'from-blue-900/30 to-transparent',
  },
  {
    icon: '🌿',
    title: 'Terrace Garden',
    desc: 'Transform your terrace into a beautiful green space with proper waterproofing & drainage.',
    href: '/services/terrace-garden',
    color: 'from-green-900/30 to-transparent',
  },
  {
    icon: '🏊',
    title: 'Swimming Pool',
    desc: 'End-to-end swimming pool construction with chemical treatments and tiling.',
    href: '/services/swimming-pool',
    color: 'from-cyan-900/30 to-transparent',
  },
  {
    icon: '🧱',
    title: 'Tiles & Materials',
    desc: 'Supply of premium tiles, building materials with professional installation labour.',
    href: '/contact',
    color: 'from-stone-900/30 to-transparent',
  },
]

const stats: Stat[] = [
  { number: '500+', label: 'Projects Completed' },
  { number: '12+', label: 'Years Experience' },
  { number: '200+', label: 'Happy Clients' },
  { number: '50+', label: 'Expert Workers' },
]

const whyUs: WhyUsItem[] = [
  { icon: '🏆', title: 'Premium Quality', desc: 'We use only certified, industry-grade chemical products from trusted manufacturers.' },
  { icon: '👷', title: 'Skilled Labour', desc: 'Our trained workforce ensures precise application and long-lasting results.' },
  { icon: '📋', title: 'End-to-End Service', desc: 'From material sourcing to final installation — we handle everything for you.' },
  { icon: '💰', title: 'Competitive Pricing', desc: 'Best value for your investment with transparent quotations and no hidden costs.' },
]

const testimonials: Testimonial[] = [
  { name: 'Rajesh Sharma', role: 'Factory Owner, Pune', text: 'BrickTech did an exceptional job with our chemical flooring. The team was professional and completed the project on time. Highly recommended!' },
  { name: 'Priya Mehta', role: 'Homeowner, Mumbai', text: 'The waterproofing solution they provided has been flawless for 2 years now. Zero leakage, great finish, fair pricing.' },
  { name: 'Anil Gupta', role: 'Contractor, Delhi', text: 'I use BrickTech for all my epoxy flooring projects. Their material quality and labour team is top notch. Best in the business.' },
]

export default function HomePage(): JSX.Element {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen bg-brand-dark flex items-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #E8611A 0, #E8611A 1px, transparent 0, transparent 50%)`,
            backgroundSize: '30px 30px',
          }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="max-w-2xl">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
              Chemical &<br />
              <span className="text-brand-orange">Construction</span><br />
              Solutions
            </h1>

            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-lg">
              BrickTech Engineering delivers expert chemical flooring, waterproofing, epoxy treatments, and complete construction services with skilled labour across India.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Get Free Quote
              </Link>
              <Link href="/services/chemical-flooring" className="btn-outline">
                Explore Services
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-6 mt-12 pt-12 border-t border-white/10">
              {stats.map((s: Stat) => (
                <div key={s.label}>
                  <div className="text-brand-orange font-heading font-bold text-2xl">{s.number}</div>
                  <div className="text-white/50 text-xs uppercase tracking-widest">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service: Service, i: number) => (
              <ScrollReveal key={service.title} delay={i * 100}>
                <Link href={service.href} className="group block bg-white p-8 h-full">
                  <div className="text-2xl mb-5">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-sm mb-5">{service.desc}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t: Testimonial, i: number) => (
              <ScrollReveal key={t.name} delay={i * 100}>
                <div className="p-8 border">
                  <p className="mb-6">{t.text}</p>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm">{t.role}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}