'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Check, ArrowRight } from '@/components/Icons'
import RevealWrapper from './RevealWrapper'

export default function Personalized() {
  return (
    <section className="py-12 md:py-20 bg-cream">
      <div className="max-w-[1220px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <RevealWrapper className="order-2 lg:order-1">
            <div className="relative">
              <span className="absolute -top-2 left-[-6%] text-4xl">🍋</span>
              <span className="absolute bottom-0 left-[-8%] text-3xl text-sage/50">〜</span>
              <div className="rounded-[24px] overflow-hidden aspect-[16/10]">
                <Image
                  src="/home/prato2.webp"
                  alt="Preparo de alimentos"
                  width={600}
                  height={375}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-[24px] overflow-hidden aspect-[16/10] mt-5 ml-[14%] w-[86%]">
                <Image
                  src="/home/prato3.webp"
                  alt="Frutas e vegetais"
                  width={600}
                  height={375}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </RevealWrapper>

          <RevealWrapper delay={0.2} className="order-1 lg:order-2">
            <span className="text-xs font-bold tracking-widest text-sage uppercase">Nutrição Individual</span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-green mt-3 mb-4">
              Nutrição Personalizada para <span className="text-sage italic">Saúde e Bem-estar Ideais</span>
            </h2>
            <p className="text-ink-soft text-sm md:text-base leading-relaxed mb-6">
              Plano personalizado baseado nas suas necessidades específicas, considerando rotina, preferências alimentares e objetivos de longo prazo.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 font-semibold text-green">
                <Check className="w-5 h-5 bg-sage rounded-full p-1 text-white" />
                Considerando todos os aspectos da sua saúde
              </li>
              <li className="flex items-center gap-3 font-semibold text-green">
                <Check className="w-5 h-5 bg-sage rounded-full p-1 text-white" />
                Oferecendo incentivo e motivação constantes
              </li>
              <li className="flex items-center gap-3 font-semibold text-green">
                <Check className="w-5 h-5 bg-sage rounded-full p-1 text-white" />
                Ajudando a alcançar resultados mensuráveis
              </li>
            </ul>
            <Link
              href="/contato"
              className="bg-green text-cream px-6 py-3 rounded-full hover:bg-sage transition-colors font-semibold inline-flex items-center gap-2 text-sm"
            >
              Agendar Consulta
              <ArrowRight className="w-4 h-4" />
            </Link>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}