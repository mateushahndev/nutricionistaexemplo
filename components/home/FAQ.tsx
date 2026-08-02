'use client'

import { useState } from 'react'
import { Plus } from '@/components/Icons'
import RevealWrapper from './RevealWrapper'

const faqs = [
  {
    q: 'Nutricionista e dietista são a mesma coisa?',
    a: 'Não exatamente. Embora ambos trabalhem com alimentação, o nutricionista tem formação clínica mais ampla e pode atuar em diagnósticos e condições de saúde específicas, enquanto o dietista foca em planejamento alimentar prático.'
  },
  {
    q: 'Preciso de encaminhamento médico para começar?',
    a: 'Não é obrigatório. Você pode agendar sua primeira consulta diretamente, mas se você tiver uma condição médica específica, recomendamos compartilhar seu histórico.'
  },
  {
    q: 'Quanto tempo dura uma consulta?',
    a: 'A consulta inicial dura cerca de 60 minutos, enquanto os retornos de acompanhamento costumam durar entre 30 e 45 minutos.'
  },
  {
    q: 'Com que frequência devo agendar consultas de acompanhamento?',
    a: 'Isso varia conforme seu objetivo, mas em geral recomendamos retornos quinzenais nos primeiros dois meses e mensais depois disso.'
  },
  {
    q: 'E se eu tiver alergia ou sensibilidade alimentar?',
    a: 'Sem problema. Seu plano é sempre construído considerando restrições, alergias e sensibilidades alimentares que você nos informar.'
  }
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-12 md:py-20 bg-cream-light">
      <div className="max-w-[820px] mx-auto px-4">
        <RevealWrapper>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-green text-center mb-10">
            Tire suas <span className="text-sage italic">Dúvidas</span>
          </h2>
        </RevealWrapper>

        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <RevealWrapper key={index} delay={index * 0.05}>
              <div className={`border-b border-cream-dark ${open === index ? 'pb-0' : ''}`}>
                <button
                  onClick={() => setOpen(open === index ? null : index)}
                  className="w-full flex justify-between items-center py-5 text-left font-semibold text-green hover:text-sage transition-colors"
                >
                  {faq.q}
                  <span className={`w-7 h-7 rounded-full border border-sage flex items-center justify-center flex-shrink-0 transition-all ${open === index ? 'bg-sage text-white rotate-135' : ''}`}>
                    <Plus className="w-3.5 h-3.5" />
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${open === index ? 'max-h-40 pb-5' : 'max-h-0'}`}>
                  <p className="text-ink-soft text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}