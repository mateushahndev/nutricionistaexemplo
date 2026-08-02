'use client'

import RevealWrapper from './RevealWrapper'

export default function Quote() {
  return (
    <section className="py-12 md:py-20 text-center bg-cream-light">
      <div className="max-w-[820px] mx-auto px-4">
        <RevealWrapper>
          <span className="font-serif text-5xl text-sage/50 block mb-4">“</span>
          <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-green leading-tight">
            Nós acreditamos que se alimentar bem não precisa ser{' '}
            <span className="text-sage italic">difícil ou confuso,</span>
            <br />
            e você não deveria se sentir restrito nas suas escolhas
          </blockquote>
        </RevealWrapper>
      </div>
    </section>
  )
}