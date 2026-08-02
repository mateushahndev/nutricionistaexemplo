'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Logo } from '@/components/Icons'

const navItems = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contato', href: '/contato' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen 
          ? 'bg-cream/90 backdrop-blur-md border-b border-green/10 shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1220px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="w-6 h-6 text-green" />
            <span className="font-serif text-lg md:text-xl font-semibold text-green">
              Paola <span className="text-sage">Rodrigues</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-ink/80 hover:text-sage transition-colors relative after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-3px] after:h-[2px] after:bg-sage after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contato"
              className="bg-green text-cream px-5 py-2 rounded-full hover:bg-sage transition-colors text-sm font-medium inline-flex items-center gap-1"
            >
              Contato
              <ChevronDown className="w-3 h-3" />
            </Link>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-green/10 bg-cream">
            <nav className="flex flex-col gap-3 px-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-ink/80 hover:text-sage transition-colors py-2 text-base px-4 rounded-lg hover:bg-green/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contato"
                className="bg-green text-cream px-4 py-3 rounded-lg hover:bg-sage transition-colors text-center font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contato
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}