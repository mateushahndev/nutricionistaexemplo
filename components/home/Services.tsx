'use client'

import Link from 'next/link'
import { Calendar, House, Clock, Heart, ArrowRight } from '@/components/Icons'
import RevealWrapper from './RevealWrapper'

const services = [
  { icon: Calendar, title: 'Planos de Nutrição', subtitle: 'Personalizados' },
  { icon: House, title: 'Planejamento e', subtitle: 'Preparo de Refeições' },
  { icon: Clock, title: 'Gestão de', subtitle: 'Peso' },
  { icon: Heart, title: 'Gestão de Condições', subtitle: 'de Saúde' },
]

export default function Services() {
  return (
    <section className="py-8 md:py-16 bg-cream-light">
      <div className="max-w-[1220px] mx-auto px-4 md:px-8 text-center">
        <RevealWrapper>
          <span className="text-xs font-bold tracking-widest text-sage uppercase">O QUE OFERECEMOS</span>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-green mt-3 mb-4">
            Orientação e Coaching em <span className="text-sage italic">Nutrição</span> Especializada
          </h2>
          <p className="text-ink-soft max-w-lg mx-auto text-sm md:text-base">
            Programas construídos sob medida, combinando ciência da nutrição com acompanhamento próximo em cada etapa da sua jornada.
          </p>
        </RevealWrapper>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-10">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <RevealWrapper key={index} delay={index * 0.08} className="bg-white rounded-[20px] p-6 border border-cream-dark hover:-translate-y-2 hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-[16px] bg-sage-light flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-sage" />
                </div>
                <h3 className="font-sans font-bold text-green text-sm md:text-base">
                  {service.title}<br />
                  <span className="font-normal">{service.subtitle}</span>
                </h3>
              </RevealWrapper>
            )
          })}
        </div>

        <RevealWrapper delay={0.3} className="mt-10">
          <Link
            href="/servicos"
            className="inline-block bg-green text-cream px-8 py-4 rounded-full hover:bg-sage transition-colors font-semibold text-sm"
          >
            Conhecer Serviços
          </Link>
        </RevealWrapper>
      </div>
    </section>
  )
}