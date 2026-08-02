'use client'

import Image from 'next/image'
import { Star } from '@/components/Icons'
import RevealWrapper from './RevealWrapper'

const testimonials = [
  {
    text: '"Eu estava lutando para controlar meu peso e não sabia por onde começar. Decidi dar uma chance e foi uma das melhores decisões que já tomei."',
    name: 'Marina Silva',
    role: 'cliente',
    image: '/home/cliente4.webp'
  },
  {
    text: '"Depois de anos tentando dietas restritivas que não funcionavam, encontrei um acompanhamento que respeita meu corpo e minha rotina."',
    name: 'Carlos Souza',
    role: 'cliente',
    image: '/home/cliente5.webp'
  },
  {
    text: '"O plano personalizado fez toda diferença. Consegui entender minha relação com a comida e criar hábitos que realmente mantenho."',
    name: 'Ana Paula',
    role: 'cliente',
    image: '/home/cliente6.webp'
  },
  {
    text: '"Acompanhamento acolhedor do início ao fim. Recomendo para quem busca resultados reais sem sofrimento."',
    name: 'João Pedro',
    role: 'cliente',
    image: '/home/cliente7.webp'
  },
]

export default function Testimonials() {
  return (
    <section className="py-12 md:py-20 bg-cream-dark">
      <div className="max-w-[820px] mx-auto px-4">
        <RevealWrapper>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-green text-center mb-10">
            Histórias de Clientes que <span className="text-sage italic">Inspiram Resultados</span>
          </h2>
        </RevealWrapper>

        <div className="space-y-6">
          {testimonials.map((t, index) => (
            <RevealWrapper key={index} delay={index * 0.08}>
              <div className="bg-white rounded-xl p-6 border border-cream-dark hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-sage text-sage" />
                      ))}
                    </div>
                    <p className="text-ink-soft text-sm md:text-base leading-relaxed">{t.text}</p>
                    <div className="flex items-center justify-between mt-3">
                      <div>
                        <span className="font-bold text-green">{t.name}</span>
                        <span className="text-sm text-ink-soft/60 ml-2">• {t.role}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#4285F4">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                        <span className="text-xs text-ink-soft/60">Google</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}