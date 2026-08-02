import Link from 'next/link'
import { ArrowLeft, Check, Calendar, House, Clock, Heart } from '@/components/Icons'

const services = [
  {
    icon: Calendar,
    title: 'Planos de Nutrição Personalizados',
    description: 'Cardápios desenvolvidos exclusivamente para você, considerando suas preferências, restrições e objetivos.',
    features: ['Avaliação completa do perfil nutricional', 'Cardápio semanal personalizado', 'Acompanhamento contínuo']
  },
  {
    icon: House,
    title: 'Planejamento e Preparo de Refeições',
    description: 'Estratégias práticas para organizar sua rotina alimentar, economizar tempo e evitar desperdícios.',
    features: ['Lista de compras otimizada', 'Receitas práticas e saborosas', 'Dicas de armazenamento e conservação']
  },
  {
    icon: Clock,
    title: 'Gestão de Peso',
    description: 'Abordagem saudável e sustentável para alcançar e manter seu peso ideal sem sofrimento.',
    features: ['Estratégias de emagrecimento saudável', 'Reeducação alimentar', 'Acompanhamento mensal']
  },
  {
    icon: Heart,
    title: 'Gestão de Condições de Saúde',
    description: 'Acompanhamento nutricional para condições específicas como diabetes, hipertensão, colesterol alto e mais.',
    features: ['Plano alimentar terapêutico', 'Monitoramento de exames', 'Orientação para prevenção']
  }
]

export default function Servicos() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-cream">
      <div className="max-w-[820px] mx-auto px-4">
        <Link href="/" className="inline-flex items-center gap-2 text-green hover:text-sage transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Voltar para o início
        </Link>
        
        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-green mt-2 mb-4">
          Orientação e Coaching em <span className="text-sage italic">Nutrição</span> Especializada
        </h1>
        <p className="text-ink-soft text-base md:text-lg mb-8 max-w-2xl">
          Programas construídos sob medida, combinando ciência da nutrição com acompanhamento próximo em cada etapa da sua jornada.
        </p>

        <div className="grid grid-cols-1 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="bg-white rounded-[20px] p-6 border border-cream-dark hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-[14px] bg-sage-light flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-sage" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-lg font-semibold text-green mb-1">{service.title}</h3>
                    <p className="text-ink-soft text-sm leading-relaxed mb-3">{service.description}</p>
                    <ul className="space-y-1">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-ink-soft">
                          <Check className="w-4 h-4 text-sage flex-shrink-0" />
                          <span className="break-words">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/contato"
            className="bg-green text-cream px-6 py-3 rounded-full hover:bg-sage transition-colors font-semibold inline-flex items-center gap-2 text-sm"
          >
            Agendar Consulta
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  )
}