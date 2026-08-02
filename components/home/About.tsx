'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from '@/components/Icons'
import RevealWrapper from './RevealWrapper'

export default function About() {
  return (
    <section className="py-12 md:py-20 bg-cream">
      <div className="max-w-[1220px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <RevealWrapper className="order-2 lg:order-1">
            <div className="relative">
              <div className="grid grid-cols-[1fr_1.3fr] gap-4">
                <div className="rounded-[24px_24px_24px_90px] overflow-hidden aspect-[1/1.25] self-end">
                  <Image
                    src="/home/nutricionista2.webp"
                    alt="Paola Rodrigues"
                    width={400}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-[90px_24px_24px_24px] overflow-hidden aspect-[1/1.55]">
                  <Image
                    src="/home/prato1.webp"
                    alt="Comida saudável"
                    width={500}
                    height={650}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-4 left-4 md:left-6 w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex flex-col items-center justify-center shadow-lg">
                <span className="font-serif text-2xl font-semibold text-sage">12</span>
                <span className="text-[0.5rem] font-bold text-ink-soft text-center leading-tight">ANOS DE<br />EXPERIÊNCIA</span>
              </div>
              <span className="absolute -top-2 right-[10%] text-2xl text-coral-dark">✦</span>
            </div>
          </RevealWrapper>

          <RevealWrapper delay={0.2} className="order-1 lg:order-2">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-green mb-4">
              Paixão por ajudar pessoas a viverem mais saudáveis através da <span className="text-sage italic">Nutrição</span> Ideal
            </h2>
            <p className="text-ink-soft text-sm md:text-base leading-relaxed mb-4">
              Sou nutricionista clínica e acredito que orientação nutricional de verdade vai muito além de contar calorias. Trabalho com você para entender seu corpo, seu histórico e sua rotina, criando um plano que realmente cabe na sua vida.
            </p>
            <p className="text-ink-soft text-sm md:text-base leading-relaxed mb-6">
              Nos últimos 12 anos, ajudei dezenas de clientes a recuperar energia, equilíbrio e confiança na relação com a comida — um passo de cada vez.
            </p>
            <Link
              href="/sobre"
              className="bg-green text-cream px-6 py-3 rounded-full hover:bg-sage transition-colors font-semibold inline-flex items-center gap-2 text-sm"
            >
              Saber Mais
              <ArrowRight className="w-4 h-4" />
            </Link>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}