'use client'
import { useEffect, useRef, ReactNode, JSX } from 'react'

// 1. Define the props interface
interface ScrollRevealProps {
  children: ReactNode;      // Special type for anything React can render
  className?: string;       // The '?' makes it optional
  delay?: number;          // Defaults to 0, also optional
}

export default function ScrollReveal({ 
  children, 
  className = '', 
  delay = 0 
}: ScrollRevealProps): JSX.Element {
  
  // 2. Tell useRef it will hold an HTMLDivElement
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // 3. Define the observer with the correct type
    const observer = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            // target is the element being observed
            (entry.target as HTMLElement).classList.add('visible')
          }, delay)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  )
}