'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Star, Calendar } from '@/components/Icons'
import RevealWrapper from './RevealWrapper'

export default function CTASection() {
  const [subscribed, setSubscribed] = useState(false)

  return (
    <section className="py-12 md:py-20 bg-green text-cream">
      <div className="max-w-[820px] mx-auto px-4 text-center">
        <RevealWrapper>
          <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            Comece sua jornada
          </span>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
            Pronta para transformar sua relação com a{' '}
            <span className="text-coral italic">comida</span>?
          </h2>

          <p className="text-white/70 text-base md:text-lg mb-8 max-w-2xl mx-auto">
            Agende sua primeira consulta e descubra como a nutrição personalizada pode mudar sua vida.
          </p>

          <div className="max-w-sm mx-auto mb-8">
            <div className="flex gap-2 bg-white/10 rounded-full p-1.5 backdrop-blur-sm">
              <input
                type="email"
                placeholder="Seu melhor email..."
                className="flex-1 bg-transparent border-none outline-none px-4 py-2 text-white placeholder:text-white/50"
                disabled={subscribed}
              />
              <button
                onClick={() => {
                  if (!subscribed) {
                    setSubscribed(true)
                    setTimeout(() => setSubscribed(false), 3000)
                  }
                }}
                className={`px-4 py-2 rounded-full font-semibold text-sm transition-colors ${
                  subscribed 
                    ? 'bg-green-dark text-white/80' 
                    : 'bg-white text-green hover:bg-cream'
                }`}
              >
                {subscribed ? '✓ Inscrito!' : 'Inscrever'}
              </button>
            </div>
            {subscribed && (
              <p className="text-green-light text-sm mt-2 animate-pulse">
                🎉 Você receberá nossas novidades no email!
              </p>
            )}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 max-w-md mx-auto mb-8">
            <div className="flex items-center gap-1 mb-1 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-white text-white" />
              ))}
            </div>
            <p className="text-white/80 text-sm">
              &ldquo;O plano personalizado fez toda diferença. Consegui criar hábitos que realmente mantenho.&rdquo;
            </p>
            <p className="text-white/50 text-xs mt-1">— Ana Paula</p>
            <div className="flex items-center justify-center gap-1 mt-1">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="white">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-xs text-white/50">Google</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green px-8 py-4 rounded-full hover:bg-white/90 transition-colors font-semibold inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Agendar pelo WhatsApp
            </Link>
            <Link
              href="/servicos"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-full hover:bg-white/10 transition-colors font-semibold inline-flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Ver Serviços
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60 mt-8">
            <span>Atendimento online</span>
            <span className="w-px h-4 bg-white/20" />
            <span>Presencial em São Paulo - SP</span>
            <span className="w-px h-4 bg-white/20" />
            <span>CRN 123456</span>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}