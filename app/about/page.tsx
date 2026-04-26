import Link from 'next/link'
import ScrollReveal from '../components/ScrollReveal'
import { Metadata } from 'next'
import { JSX } from 'react/jsx-dev-runtime';

// 1. Defining the Metadata type for SEO
export const metadata: Metadata = {
  title: 'About Us | BrickTech Engineering',
  description: 'Learn about BrickTech Engineering — our story, mission, and expert team delivering quality construction chemical solutions.',
}

// 2. Interface for Team Members
interface TeamMember {
  name: string;
  role: string;
  exp: string;
}

// 3. Interface for Company Stats
interface Stat {
  n: string; // number/value
  l: string; // label
}

// 4. Interface for Company Values
interface Value {
  icon: string;
  title: string;
  desc: string;
}

const team: TeamMember[] = [
  { name: 'Rakesh Verma', role: 'Founder & CEO', exp: '15+ years in construction chemicals' },
  { name: 'Sunil Yadav', role: 'Head of Operations', exp: 'Expert in epoxy & flooring systems' },
  { name: 'Meena Joshi', role: 'Project Manager', exp: 'Waterproofing & terrace specialist' },
  { name: 'Arjun Singh', role: 'Senior Technician', exp: 'Certified chemical applicator' },
]

export default function AboutPage(): JSX.Element {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-brand-dark pt-32 pb-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{ 
            backgroundImage: `repeating-linear-gradient(45deg, #E8611A 0, #E8611A 1px, transparent 0, transparent 50%)`, 
            backgroundSize: '30px 30px' 
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl">
            <span className="text-brand-orange text-xs font-bold uppercase tracking-[0.3em]">Our Story</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-3 font-heading leading-tight">
              About BrickTech<br />
              <span className="text-brand-orange">Engineering</span>
            </h1>
            <p className="text-white/60 mt-5 leading-relaxed text-lg font-light">
              Over a decade of delivering world-class construction chemical solutions across India.
            </p>
          </div>
        </div>
      </section>

      {/* Story & Mission Section */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <span className="text-brand-orange text-xs font-bold uppercase tracking-widest">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-3 font-heading">Building Trust Since 2012</h2>
              <p className="text-brand-dark/70 mt-6 leading-relaxed">
                BrickTech Engineering was founded with a simple vision: to provide builders, contractors, and homeowners with reliable, high-quality chemical construction solutions backed by professional labour services.
              </p>
              <p className="text-brand-dark/70 mt-4 leading-relaxed">
                Today, we are a trusted name across the industry — supplying premium materials for chemical flooring, epoxy systems, waterproofing, and more. Our team of trained technicians ensures every project is completed to the highest standard.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mt-12">
                {[
                  { n: '500+', l: 'Projects Done' },
                  { n: '12+', l: 'Years Active' },
                  { n: '200+', l: 'Happy Clients' },
                  { n: '50+', l: 'Team Members' },
                ].map((s: Stat) => (
                  <div key={s.l} className="border-l-4 border-brand-orange pl-4">
                    <div className="font-heading text-3xl font-bold text-brand-orange">{s.n}</div>
                    <div className="text-brand-dark/60 text-sm font-medium uppercase tracking-tight">{s.l}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-brand-dark p-10 relative">
                <div className="absolute top-0 right-0 w-20 h-20 bg-brand-orange/20"></div>
                <div className="relative">
                  <h3 className="font-heading text-2xl text-white font-bold mb-6">Our Mission</h3>
                  <p className="text-white/70 leading-relaxed mb-10">
                    To provide every client with expert consultation, premium chemical materials, and skilled installation — creating surfaces that are durable, beautiful, and built to last.
                  </p>
                  <h3 className="font-heading text-2xl text-white font-bold mb-6">Our Vision</h3>
                  <p className="text-white/70 leading-relaxed">
                    To be India's most trusted construction chemical solutions company, known for quality, integrity, and end-to-end service excellence.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-brand-orange text-xs font-bold uppercase tracking-widest">Core Values</span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-3 font-heading uppercase">What Drives Us</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '🎯', title: 'Precision', desc: 'Every application is measured and executed with technical accuracy.' },
              { icon: '🤝', title: 'Integrity', desc: 'Honest pricing, transparent communication, no shortcuts.' },
              { icon: '⚡', title: 'Efficiency', desc: 'We respect your timeline and deliver on schedule, every time.' },
              { icon: '🌟', title: 'Excellence', desc: 'Industry-grade materials and certified techniques, always.' },
            ].map((v: Value, i: number) => (
              <ScrollReveal key={v.title} delay={i * 100}>
                <div className="text-center p-8 border border-brand-tan/20 hover:border-brand-orange transition-all duration-300 group h-full bg-white">
                  <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{v.icon}</div>
                  <h4 className="font-heading font-bold text-brand-dark mb-3 group-hover:text-brand-orange transition-colors">{v.title}</h4>
                  <p className="text-brand-dark/50 text-xs leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-brand-orange text-xs font-bold uppercase tracking-widest">Our People</span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-3 font-heading uppercase">Meet the Team</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member: TeamMember, i: number) => (
              <ScrollReveal key={member.name} delay={i * 100}>
                <div className="text-center group">
                  <div className="w-24 h-24 bg-brand-dark rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-orange group-hover:rotate-12 transition-all duration-500">
                    <span className="text-white font-heading font-bold text-3xl">{member.name[0]}</span>
                  </div>
                  <h4 className="font-heading font-bold text-brand-dark text-lg">{member.name}</h4>
                  <div className="text-brand-orange text-sm font-bold uppercase tracking-tighter mt-1">{member.role}</div>
                  <p className="text-brand-dark/40 text-[10px] uppercase tracking-widest mt-2 px-4">{member.exp}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-orange text-center relative overflow-hidden">
        <div className="max-w-2xl mx-auto px-4 relative z-10">
          <h2 className="font-heading text-4xl font-bold text-white mb-6">Ready to Work Together?</h2>
          <p className="text-white/90 mb-10 text-lg">Let's discuss your project requirements and find the best construction solution for you.</p>
          <Link href="/contact" className="bg-white text-brand-orange px-12 py-5 font-bold uppercase tracking-[0.2em] text-xs hover:bg-brand-dark hover:text-white transition-all duration-500 inline-block shadow-xl">
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  )
}