'use client'

import React, { useState, ChangeEvent, FormEvent, JSX } from 'react'
import ScrollReveal from '../components/ScrollReveal'

// 1. Define the shape of our form data
interface FormData {
  fullName: string;
  phone: string;
  service: string;
  message: string;
}

export default function ContactPage(): JSX.Element {
  // 2. Initialize state with our interface
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    service: 'Chemical Flooring',
    message: ''
  })

  const [status, setStatus] = useState<string>('')

  // 3. Typed change handler for inputs, selects, and textareas
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // 4. Typed submit handler
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    
    // Logic for sending the form goes here
    console.log('Form Data Submitted:', formData)
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      setFormData({ fullName: '', phone: '', service: 'Chemical Flooring', message: '' })
    }, 2000)
  }

  return (
    <main className="pt-32 pb-20 bg-brand-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <ScrollReveal>
          <div className="max-w-3xl mb-16">
            <span className="text-brand-orange text-xs font-bold uppercase tracking-[0.3em]">Contact Us</span>
            <h1 className="text-4xl md:text-6xl font-bold text-brand-dark mt-4 font-heading">
              Let's Discuss Your <span className="text-brand-orange">Project</span>
            </h1>
            <p className="text-gray-600 mt-6 text-lg font-light">
              Get a free technical consultation and a detailed quotation for your construction chemical needs.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            <ScrollReveal delay={100}>
              <div className="bg-brand-dark p-8 text-white group hover:bg-brand-brown transition-all duration-300">
                <div className="text-brand-orange text-2xl mb-4 font-bold font-heading uppercase tracking-tighter">Location</div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Graphic Era University Area,<br />
                  Dehradun, Uttarakhand, India
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-white border border-brand-tan/20 p-8 group transition-all duration-300 hover:border-brand-orange">
                <div className="text-brand-orange text-2xl mb-4 font-bold font-heading uppercase tracking-tighter">Call Us</div>
                <p className="text-brand-dark font-bold text-lg">+91 98765 43210</p>
                <p className="text-gray-500 text-[10px] mt-2 uppercase tracking-[0.2em] font-bold">Mon - Sat: 9am - 7pm</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="bg-white border border-brand-tan/20 p-8 transition-all duration-300 hover:border-brand-orange">
                <div className="text-brand-orange text-2xl mb-4 font-bold font-heading uppercase tracking-tighter">Email</div>
                <p className="text-brand-dark font-bold text-lg">info@bricktech.com</p>
                <p className="text-gray-500 text-[10px] mt-2 uppercase tracking-[0.2em] font-bold">Response within 24 hours</p>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ScrollReveal delay={400}>
              <div className="bg-white p-8 md:p-12 shadow-2xl border border-brand-tan/10 relative overflow-hidden">
                {/* Decorative Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 -mr-16 -mt-16 rotate-45"></div>
                
                <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-dark/60">Full Name</label>
                      <input 
                        type="text" 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="Anujkumar Yadav"
                        className="w-full bg-brand-cream border border-brand-tan/20 p-4 outline-none focus:border-brand-orange transition-colors text-brand-dark text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-dark/60">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 00000 00000"
                        className="w-full bg-brand-cream border border-brand-tan/20 p-4 outline-none focus:border-brand-orange transition-colors text-brand-dark text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-dark/60">Service Required</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-brand-cream border border-brand-tan/20 p-4 outline-none focus:border-brand-orange transition-colors text-brand-dark text-sm appearance-none cursor-pointer"
                    >
                      <option>Chemical Flooring</option>
                      <option>Epoxy Flooring</option>
                      <option>Waterproofing</option>
                      <option>Swimming Pool Construction</option>
                      <option>Other / Consultation</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-dark/60">Message / Site Details</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your project area, square footage, and requirements..."
                      className="w-full bg-brand-cream border border-brand-tan/20 p-4 outline-none focus:border-brand-orange transition-colors text-brand-dark resize-none text-sm leading-relaxed"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-brand-orange text-white py-5 font-bold uppercase tracking-[0.2em] text-xs hover:bg-brand-dark transition-all duration-500 shadow-lg shadow-brand-orange/20 disabled:bg-gray-400"
                  >
                    {status === 'sending' ? 'Processing...' : status === 'success' ? 'Inquiry Sent!' : 'Send Inquiry'}
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>

      {/* Map Placeholder */}
      <section className="mt-24 h-[450px] bg-brand-dark/5 grayscale group relative overflow-hidden">
         <div className="w-full h-full flex items-center justify-center text-brand-dark/10 uppercase tracking-[0.8em] font-bold text-center px-4">
            Interactive Project Map Integration
         </div>
         {/* Decorative grid overlay for the map area */}
         <div className="absolute inset-0 opacity-20 pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(#c4a882 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </section>
    </main>
  )
}