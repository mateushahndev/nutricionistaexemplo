'use client'

import { useSearchParams } from 'next/navigation'
import { ReactNode, useEffect, useState } from 'react'

interface RevealWrapperProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function RevealWrapper({ children, delay = 0, className = '' }: RevealWrapperProps) {
  const searchParams = useSearchParams()
  const isScreenshot = searchParams?.get('screenshot') === 'true'
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isScreenshot) {
      setIsVisible(true)
      return
    }

    const el = document.current
    // Não precisa de observer se for screenshot
  }, [isScreenshot])

  if (isScreenshot) {
    return <div className={className}>{children}</div>
  }

  return (
    <div 
      className={`${className}`}
      style={{ 
        opacity: 0,
        transform: 'translateY(28px)',
        transition: `opacity 0.8s ease, transform 0.8s ease`,
        transitionDelay: `${delay}s`,
        willChange: 'opacity, transform'
      }}
      ref={(el) => {
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
      }}
    >
      {children}
    </div>
  )
}