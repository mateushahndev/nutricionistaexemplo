'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Check, ArrowRight } from '@/components/Icons'
import RevealWrapper from './RevealWrapper'

const plans = {
  monthly: [
    {
      name: 'Plano Jumpstart',
      price: '39',
      desc: 'Ideal para começar sua jornada nutricional',
      features: ['Acompanhamento online', 'Registro diário de refeições', 'Check-in semanal'],
      popular: false
    },
    {
      name: 'Plano Transform',
      price: '79',
      desc: 'Ideal para alcançar objetivos de saúde e bem-estar',
      features: ['Consulta individual', 'Registro diário de refeições', 'Estratégia para mais energia', 'Gestão de peso'],
      popular: true
    }
  ],
  yearly: [
    {
      name: 'Plano Jumpstart',
      price: '31',
      desc: 'Ideal para começar sua jornada nutricional',
      features: ['Acompanhamento online', 'Registro diário de refeições', 'Check-in semanal'],
      popular: false
    },
    {
      name: 'Plano Transform',
      price: '63',
      desc: 'Ideal para alcançar objetivos de saúde e bem-estar',
      features: ['Consulta individual', 'Registro diário de refeições', 'Estratégia para mais energia', 'Gestão de peso'],
      popular: true
    }
  ]
}

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)
  const currentPlans = isYearly ? plans.yearly : plans.monthly

  return (
    <section className="py-12 md:py-20 bg-cream text-center">
      <div className="max-w-[820px] mx-auto px-4">
        <RevealWrapper>
          <span className="text-xs font-bold tracking-widest text-sage uppercase">Planos Simples e Transparentes</span>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-green mt-3 mb-4">
            Planos de Nutrição que <span className="text-sage italic">Funcionam</span> para Você
          </h2>
        </RevealWrapper>

        <RevealWrapper delay={0.1}>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-ink-soft font-semibold mb-6">
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-sage" /> Troque de plano quando quiser</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-sage" /> Sem cartão de crédito</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-sage" /> Cancele quando quiser</span>
          </div>

          <div className="inline-flex bg-white p-1.5 rounded-full shadow-sm mb-10">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-colors ${!isYearly ? 'bg-green text-cream' : 'text-ink-soft hover:text-green'}`}
            >
              Mensal
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-colors ${isYearly ? 'bg-green text-cream' : 'text-ink-soft hover:text-green'}`}
            >
              Anual
            </button>
          </div>
        </RevealWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentPlans.map((plan, index) => (
            <RevealWrapper key={index} delay={0.2 + index * 0.1}>
              <div className={`bg-white rounded-[24px] p-8 text-left border relative ${plan.popular ? 'border-green shadow-lg' : 'border-cream-dark'}`}>
                {plan.popular && (
                  <span className="absolute -top-3 right-6 bg-coral text-green-dark text-xs font-extrabold px-4 py-1.5 rounded-full">
                    Mais Popular
                  </span>
                )}
                <div className="text-sm font-bold text-ink-soft uppercase tracking-wide">{plan.name}</div>
                <div className="font-serif text-4xl font-semibold text-green mt-2">
                  R${plan.price}
                  <span className="text-sm font-normal text-ink-soft">/mês</span>
                </div>
                <p className="text-ink-soft text-sm mt-1">{plan.desc}</p>
                <ul className="space-y-2 mt-4 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-ink-soft">
                      <Check className="w-4 h-4 text-sage" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contato"
                  className={`w-full inline-block text-center px-6 py-3 rounded-full font-semibold text-sm transition-colors ${plan.popular ? 'bg-green text-cream hover:bg-sage' : 'border border-green text-green hover:bg-green hover:text-cream'}`}
                >
                  Escolher Plano
                </Link>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}