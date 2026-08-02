'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowLeft, Plus } from '@/components/Icons'

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
  },
  {
    q: 'Atende online?',
    a: 'Sim! Atendo online para todo o Brasil, com a mesma qualidade e atenção do atendimento presencial.'
  }
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="min-h-screen pt-24 pb-16 bg-cream">
      <div className="max-w-[820px] mx-auto px-4">
        <Link href="/" className="inline-flex items-center gap-2 text-green hover:text-sage transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Voltar para o início
        </Link>
        
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-green mt-2 mb-4">
          Tire suas <span className="text-sage italic">Dúvidas</span>
        </h1>
        <p className="text-ink-soft text-lg mb-10 max-w-2xl">
          Perguntas frequentes sobre nutrição, consultas e o processo de acompanhamento.
        </p>

        <div className="bg-white rounded-[24px] p-6 border border-cream-dark">
          {faqs.map((faq, index) => (
            <div key={index} className={`border-b border-cream-dark last:border-0 ${open === index ? 'pb-0' : ''}`}>
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex justify-between items-center py-4 text-left font-semibold text-green hover:text-sage transition-colors"
              >
                {faq.q}
                <span className={`w-7 h-7 rounded-full border border-sage flex items-center justify-center flex-shrink-0 transition-all ${open === index ? 'bg-sage text-white rotate-135' : ''}`}>
                  <Plus className="w-3.5 h-3.5" />
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${open === index ? 'max-h-40 pb-4' : 'max-h-0'}`}>
                <p className="text-ink-soft text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/contato"
            className="bg-green text-cream px-8 py-4 rounded-full hover:bg-sage transition-colors font-semibold inline-flex items-center gap-2"
          >
            Ainda tem dúvidas? Fale comigo
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  )
}