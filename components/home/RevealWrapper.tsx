'use client'

import { ReactNode, useEffect, useRef } from 'react'

interface RevealWrapperProps {
  children: ReactNode
  delay?: number
  className?: string
  isScreenshot?: boolean
}

export default function RevealWrapper({ children, delay = 0, className = '', isScreenshot = false }: RevealWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isScreenshot) return

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)

    return () => observer.disconnect()
  }, [isScreenshot])

  if (isScreenshot) {
    return <div className={className}>{children}</div>
  }

  return (
    <div 
      ref={ref}
      className={className}
      style={{ 
        opacity: 0,
        transform: 'translateY(28px)',
        transition: `opacity 0.8s ease, transform 0.8s ease`,
        transitionDelay: `${delay}s`,
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  )
}