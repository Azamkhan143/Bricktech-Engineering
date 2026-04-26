import Link from 'next/link'
import ScrollReveal from '../components/ScrollReveal'

// 1. Define Interfaces for our data structures
interface Service {
  icon: string;
  title: string;
  desc: string;
  href: string;
  color: string;
}

interface Stat {
  number: string;
  label: string;
}

interface WhyUsItem {
  icon: string;
  title: string;
  desc: string;
}

interface Testimonial {
  name: string;
  role: string;
  text: string;
}

interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

// 2. Apply the types to your constants
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

const processSteps: ProcessStep[] = [
  { step: '01', title: 'Consultation', desc: 'Share your project requirements and get expert advice.' },
  { step: '02', title: 'Site Survey', desc: 'Our team visits your site for assessment and measurement.' },
  { step: '03', title: 'Quotation', desc: 'Receive a detailed, transparent cost estimate.' },
  { step: '04', title: 'Execution', desc: 'We complete the work with quality materials and skilled labour.' },
]

const testimonials: Testimonial[] = [
  { name: 'Rajesh Sharma', role: 'Factory Owner, Pune', text: 'BrickTech did an exceptional job with our chemical flooring. The team was professional and completed the project on time. Highly recommended!' },
  { name: 'Priya Mehta', role: 'Homeowner, Mumbai', text: 'The waterproofing solution they provided has been flawless for 2 years now. Zero leakage, great finish, fair pricing.' },
  { name: 'Anil Gupta', role: 'Contractor, Delhi', text: 'I use BrickTech for all my epoxy flooring projects. Their material quality and labour team is top notch. Best in the business.' },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen bg-brand-dark flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #E8611A 0, #E8611A 1px, transparent 0, transparent 50%)`,
            backgroundSize: '30px 30px'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-transparent"></div>

        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark to-brand-brown/40"></div>
          <div className="h-full w-full"
            style={{
              background: 'linear-gradient(135deg, #3D2B1F 0%, #1A1208 50%, #E8611A22 100%)'
            }}
          ></div>
          <div className="absolute top-1/4 right-20 w-64 h-64 border border-brand-orange/20 rotate-45"></div>
          <div className="absolute top-1/3 right-32 w-40 h-40 border border-brand-orange/10 rotate-45"></div>
          <div className="absolute bottom-1/4 right-16 w-32 h-32 bg-brand-orange/5 rotate-12"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-brand-orange"></div>
              <span className="section-subtitle">Building Tomorrow's Foundation</span>
            </div>

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

            <div className="flex flex-wrap items-center gap-6 mt-12 pt-12 border-t border-white/10">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-brand-orange font-heading font-bold text-2xl">{s.number}</div>
                  <div className="text-white/50 text-xs uppercase tracking-widest">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/30 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent animate-pulse"></div>
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <div className="bg-brand-orange py-3 overflow-hidden">
        <div className="flex gap-12 animate-[marquee_20s_linear_infinite] whitespace-nowrap">
          {['Chemical Flooring', 'Epoxy Flooring', 'Waterproofing', 'Terrace Garden', 'Swimming Pool', 'Tiles & Labour', 'Chemical Flooring', 'Epoxy Flooring', 'Waterproofing', 'Terrace Garden', 'Swimming Pool', 'Tiles & Labour'].map((item, i) => (
            <span key={i} className="text-white text-sm font-semibold uppercase tracking-widest flex items-center gap-12">
              {item} <span className="text-white/40">◆</span>
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      {/* SERVICES */}
      <section className="py-24 bg-brand-cream relative texture-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="section-subtitle">What We Do</span>
              <h2 className="section-title mt-3">Our Core Services</h2>
              <p className="text-brand-dark/60 mt-4 max-w-xl mx-auto">
                From chemical treatments to complete construction — we bring expertise, quality materials, and skilled labour to every project.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 100}>
                <Link href={service.href} className="group block bg-white border border-brand-tan/30 p-8 card-hover h-full">
                  <div className={`w-14 h-14 rounded-sm bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl mb-5 bg-brand-cream border border-brand-tan/40`}>
                    {service.icon}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-orange transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-brand-dark/60 text-sm leading-relaxed mb-5">{service.desc}</p>
                  <span className="text-brand-orange text-sm font-semibold uppercase tracking-wide flex items-center gap-2">
                    Learn More
                    <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <span className="section-subtitle">Why Choose Us</span>
              <h2 className="section-title text-white mt-3">
                We Don't Just Build —<br />
                <span className="text-brand-orange">We Engineer</span>
              </h2>
              <p className="text-white/60 mt-5 leading-relaxed">
                BrickTech Engineering brings together certified chemical products, expert application techniques, and a professional workforce. We're your one-stop solution for any construction chemical requirement.
              </p>
              <Link href="/about" className="btn-outline mt-8 border-white/30 text-white hover:border-brand-orange hover:bg-brand-orange hover:text-white">
                Know More About Us
              </Link>
            </ScrollReveal>

            <div className="grid grid-cols-2 gap-5">
              {whyUs.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 100}>
                  <div className="bg-white/5 border border-white/10 p-6 hover:border-brand-orange/40 hover:bg-white/10 transition-all group">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h4 className="text-white font-semibold mb-2 group-hover:text-brand-orange transition-colors">{item.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="section-subtitle">How We Work</span>
              <h2 className="section-title mt-3">Our Simple Process</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-brand-orange/30"></div>

            {processSteps.map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 150}>
                <div className="text-center relative">
                  <div className="w-20 h-20 border-2 border-brand-orange bg-white rounded-full flex items-center justify-center mx-auto mb-5 relative z-10">
                    <span className="font-heading font-bold text-brand-orange text-xl">{item.step}</span>
                  </div>
                  <h4 className="font-heading font-bold text-brand-dark text-lg mb-2">{item.title}</h4>
                  <p className="text-brand-dark/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="section-subtitle">Client Feedback</span>
              <h2 className="section-title mt-3">What Our Clients Say</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 100}>
                <div className="bg-brand-cream border border-brand-tan/30 p-8 relative">
                  <div className="text-brand-orange text-5xl font-heading leading-none mb-4">"</div>
                  <p className="text-brand-dark/70 text-sm leading-relaxed mb-6">{t.text}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-orange/20 rounded-full flex items-center justify-center">
                      <span className="text-brand-orange font-bold">{t.name[0]}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-brand-dark text-sm">{t.name}</div>
                      <div className="text-brand-dark/50 text-xs">{t.role}</div>
                    </div>
                  </div>
                  <div className="absolute top-8 right-8 text-brand-orange text-sm">★★★★★</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 bg-brand-orange relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)`,
            backgroundSize: '20px 20px'
          }}
        ></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-5">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/80 text-lg mb-10">
              Contact us today for a free site consultation and detailed quotation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-white text-brand-orange px-10 py-4 font-bold uppercase tracking-wide text-sm hover:bg-brand-cream transition-colors">
                Get Free Quote
              </Link>
              <a href="tel:+919876543210" className="border-2 border-white text-white px-10 py-4 font-bold uppercase tracking-wide text-sm hover:bg-white hover:text-brand-orange transition-colors">
                Call Now
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}