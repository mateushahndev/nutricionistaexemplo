'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star } from '@/components/Icons'
import RevealWrapper from './RevealWrapper'

export default function Hero() {
  return (
    <section className="pt-8 md:pt-16 pb-8 md:pb-16 overflow-hidden bg-cream">
      <div className="max-w-[1220px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr_1fr] gap-8 items-center">
          <RevealWrapper>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-green leading-[1.1] mb-6">
              Nutrir o Corpo<br />
              Viver Saudável{' '}
              <span className="inline-flex items-center gap-2 text-sage italic">
                Hoje
                <ArrowRight className="w-6 h-6 text-coral-dark" />
              </span>
            </h1>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 mb-6 border border-cream-dark max-w-sm">
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-sage text-sage" />
                ))}
              </div>
              <p className="text-ink-soft text-sm leading-relaxed">
                &ldquo;O plano personalizado fez toda diferença. Consegui criar hábitos que realmente mantenho.&rdquo;
              </p>
              <p className="text-xs text-ink-soft/60 mt-1">— Ana Paula</p>
              <div className="flex items-center gap-1 mt-1">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="#4285F4">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="text-xs text-ink-soft/60">Google</span>
              </div>
            </div>

            <div className="flex gap-2 bg-white rounded-full p-1.5 max-w-sm shadow-lg">
              <input
                type="email"
                placeholder="Seu Email..."
                className="flex-1 bg-transparent border-none outline-none px-4 py-2 text-ink placeholder:text-ink-soft/60"
              />
              <button 
                className="bg-green text-cream px-5 py-2 rounded-full font-semibold text-sm hover:bg-sage transition-colors"
                onClick={() => alert('🎉 Inscrição realizada com sucesso! Você receberá novidades no seu email.')}
              >
                Começar
              </button>
            </div>
            <div className="mt-8">
              <span className="text-xs font-bold tracking-wider text-ink-soft uppercase">DESTAQUE EM:</span>
              <div className="flex gap-6 mt-3">
                <span className="font-serif font-semibold italic text-ink-soft/70">🌿 Greenish</span>
                <span className="font-serif font-semibold italic text-ink-soft/70">🌸 Blossom</span>
              </div>
            </div>
          </RevealWrapper>

          <RevealWrapper delay={0.2}>
            <div className="relative">
              <div className="relative rounded-[200px_200px_40px_40px] overflow-hidden shadow-lg aspect-[3/4.1]">
                <img
                  src="/home/nutricionista1.webp"
                  alt="Paola Rodrigues - Nutricionista"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-[8%] -right-[8%] w-[90px] h-[90px] md:w-[110px] md:h-[110px] rounded-full bg-lavender flex items-center justify-center shadow-xl animate-float">
                <Star className="w-10 h-10 text-white" />
              </div>
            </div>
          </RevealWrapper>

          <RevealWrapper delay={0.3}>
            <div className="flex flex-col gap-4">
              <p className="text-ink-soft text-sm md:text-base">
                Cada corpo é único — por isso oferecemos planos alimentares construídos em torno da sua rotina, seus objetivos e das suas preferências reais de comida, sem dietas genéricas.
              </p>
              <div className="flex items-center gap-3 bg-coral rounded-full px-3 py-2 w-fit">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-coral overflow-hidden">
                    <img src="/home/cliente1.webp" alt="Cliente" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-coral overflow-hidden">
                    <img src="/home/cliente2.webp" alt="Cliente" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-coral overflow-hidden">
                    <img src="/home/cliente3.webp" alt="Cliente" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div>
                  <span className="font-bold text-green-dark text-sm">+72</span>
                  <span className="text-xs text-green-dark/70 block">clientes felizes</span>
                </div>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}