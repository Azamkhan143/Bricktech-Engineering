

import NextImage from 'next/image'
import React, { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import { JSX } from 'react/jsx-dev-runtime';
import { Metadata } from 'next'
import { Viewport } from 'next'

export const metadata: Metadata = {
  title: 'BrickTech Engineering',
  description: 'Construction services',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

// 1. Define the categories as a literal type for better type safety
type Category = 'All' | 'Flooring' | 'Waterproofing' | 'Swimming Pool';

const categories: Category[] = ['All', 'Flooring', 'Waterproofing', 'Swimming Pool'];

// 2. Define the Project interface
interface Project {
  id: number;
  category: Exclude<Category, 'All'>; // Projects must have a specific category, not 'All'
  title: string;
  location: string;
  image: string;
}

const projects: Project[] = [
  { id: 1, category: 'Flooring', title: 'Industrial Chemical Floor', location: 'Pune', image: 'https://images.unsplash.com/photo-1590674000550-93043813358a?q=80&w=800' },
  { id: 2, category: 'Waterproofing', title: 'Basement Sealing', location: 'Mumbai', image: 'https://images.unsplash.com/photo-1621905235277-227092928574?q=80&w=800' },
  { id: 3, category: 'Swimming Pool', title: 'Luxury Tile Work', location: 'Delhi', image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=800' },
  { id: 4, category: 'Flooring', title: 'High-Gloss Epoxy', location: 'Bangalore', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800' },
  { id: 5, category: 'Waterproofing', title: 'Terrace Garden Prep', location: 'Dehradun', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800' },
  { id: 6, category: 'Flooring', title: 'Chemical Resistant Lab', location: 'Hyderabad', image: 'https://images.unsplash.com/photo-1532187875605-2fe358a3d46a?q=80&w=800' },
]

export default function GalleryPage(): JSX.Element {
  // 3. Typed state for the filter
  const [filter, setFilter] = useState<Category>('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter((p: Project) => p.category === filter);

  return (
    <main className="pt-32 pb-20 bg-brand-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Section */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-brand-orange text-xs font-bold uppercase tracking-[0.4em]">Our Work</span>
            <h1 className="text-4xl md:text-6xl font-bold text-brand-dark mt-4 font-heading uppercase tracking-tight">
              Project Showcase
            </h1>
            <div className="h-1 w-20 bg-brand-orange mx-auto mt-6"></div>
          </div>
        </ScrollReveal>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat: Category) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                filter === cat 
                  ? 'bg-brand-orange border-brand-orange text-white' 
                  : 'bg-white border-brand-tan/20 text-brand-dark hover:border-brand-orange shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project: Project, i: number) => (
            <ScrollReveal key={project.id} delay={i * 50}>
              <div className="group relative bg-brand-dark aspect-[4/3] overflow-hidden cursor-pointer shadow-lg border border-brand-tan/10">
                
                {/* Optimized NextImage Component */}
                <NextImage 
                  src={project.image} 
                  alt={project.title}
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-30"
                  priority={i < 3} 
                />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100 z-10">
                  <span className="text-brand-orange text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-white text-2xl font-bold font-heading mb-1">{project.title}</h3>
                  <p className="text-white/60 text-xs italic tracking-wide">Location: {project.location}</p>
                  
                  {/* Decorative Line */}
                  <div className="w-10 h-0.5 bg-brand-orange mt-4 transition-all duration-500 delay-100 group-hover:w-full"></div>
                </div>

                {/* Always visible category tag */}
                <div className="absolute top-4 right-4 bg-brand-orange text-white text-[9px] font-bold uppercase px-3 py-1 tracking-widest z-20">
                  {project.category}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-24 text-brand-dark/30 uppercase tracking-widest text-sm italic">
            Expanding our portfolio... check back soon
          </div>
        )}
      </div>
    </main>
  )
}
