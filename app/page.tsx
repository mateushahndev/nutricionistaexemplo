'use client'

import { Suspense } from 'react'
import Hero from '@/components/home/Hero'
import About from '@/components/home/About'
import Services from '@/components/home/Services'
import Quote from '@/components/home/Quote'
import Testimonials from '@/components/home/Testimonials'
import Personalized from '@/components/home/Personalized'
import Blog from '@/components/home/Blog'
import Pricing from '@/components/home/Pricing'
import FAQ from '@/components/home/FAQ'
import CTASection from '@/components/home/CTASection'
import WhatsAppButton from '@/components/home/WhatsAppButton'

function HomeContent() {
  return (
    <>
      <Hero />
      <Quote />
      <About />
      <Services />
      <Testimonials />
      <Personalized />
      <Blog />
      <Pricing />
      <FAQ />
      <CTASection />
      <WhatsAppButton />
    </>
  )
}

export default function Home() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-green font-serif text-xl">Carregando...</div>
      </div>
    }>
      <HomeContent />
    </Suspense>
  )
}