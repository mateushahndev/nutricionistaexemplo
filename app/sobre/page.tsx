import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Check } from '@/components/Icons'

export default function Sobre() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-cream">
      <div className="max-w-[820px] mx-auto px-4">
        <Link href="/" className="inline-flex items-center gap-2 text-green hover:text-sage transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Voltar para o início
        </Link>
        
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-green mt-2 mb-6">
          Paixão por ajudar pessoas a viverem mais saudáveis
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="rounded-[24px] overflow-hidden shadow-lg">
            <Image
              src="/home/nutricionista2.webp"
              alt="Paola Rodrigues"
              width={600}
              height={750}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-ink-soft text-base leading-relaxed mb-4">
              Sou Paola Rodrigues, nutricionista clínica com 12 anos de experiência 
              em alimentação saudável, emagrecimento e bem-estar.
            </p>
            <p className="text-ink-soft text-base leading-relaxed mb-4">
              Minha missão é ajudar pessoas a transformarem sua relação com a comida, 
              criando hábitos sustentáveis que realmente fazem sentido para cada estilo de vida.
            </p>
            <p className="text-ink-soft text-base leading-relaxed mb-6">
              Acredito que orientação nutricional de verdade vai muito além de contar calorias. 
              Trabalho com você para entender seu corpo, seu histórico e sua rotina.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 bg-sage rounded-full p-1 text-white" />
                <span className="text-sm font-medium text-green">12 anos de experiência</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 bg-sage rounded-full p-1 text-white" />
                <span className="text-sm font-medium text-green">Especialista em nutrição clínica</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 bg-sage rounded-full p-1 text-white" />
                <span className="text-sm font-medium text-green">Planos 100% personalizados</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[24px] p-8 border border-cream-dark">
          <h2 className="font-serif text-2xl font-semibold text-green mb-4">Formação e Especializações</h2>
          <ul className="space-y-3 text-ink-soft">
            <li>• Graduação em Nutrição — Universidade de São Paulo (USP)</li>
            <li>• Especialização em Nutrição Clínica</li>
            <li>• Pós-graduada em Nutrição Esportiva e Funcional</li>
            <li>• Membro da Associação Brasileira de Nutrição</li>
            <li>• 12 anos de experiência clínica</li>
          </ul>
        </div>
      </div>
    </div>
  )
}