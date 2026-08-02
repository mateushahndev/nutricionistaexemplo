import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from '@/components/Icons'

export default function Post() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-cream">
      <div className="max-w-[820px] mx-auto px-4">
        <Link href="/blog" className="inline-flex items-center gap-2 text-green hover:text-sage transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Voltar para o blog
        </Link>
        
        <span className="text-xs font-bold tracking-widest text-sage uppercase">Nutrição Esportiva</span>
        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-green mt-2 mb-4">
          Dicas de nutrição pré e pós-treino para performance e recuperação ideais
        </h1>
        <div className="text-ink-soft text-sm mb-8">por Paola Rodrigues • 15 de Dezembro, 2025</div>
        
        <div className="rounded-[24px] overflow-hidden mb-8">
          <Image
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop"
            alt="Nutrição pré e pós-treino"
            width={1200}
            height={600}
            className="w-full h-auto"
          />
        </div>
        
        <div className="bg-white rounded-[24px] p-8 border border-cream-dark prose prose-lg max-w-none">
          <p className="text-ink-soft text-lg leading-relaxed">
            A nutrição adequada antes e depois do treino é fundamental para otimizar seus resultados, 
            melhorar a performance e acelerar a recuperação muscular. Neste artigo, vou compartilhar 
            dicas práticas para você alimentar seu corpo da melhor forma possível.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-green mt-8 mb-4">O que comer antes do treino</h2>
          <p className="text-ink-soft leading-relaxed">
            O objetivo da refeição pré-treino é fornecer energia suficiente para sustentar sua atividade física, 
            prevenir a fadiga e evitar desconfortos gastrointestinais. Aqui estão algumas orientações:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-ink-soft">
            <li><strong>Carboidratos de fácil digestão:</strong> Frutas, pães integrais, aveia ou batata-doce</li>
            <li><strong>Proteína moderada:</strong> Iogurte, ovos ou whey protein</li>
            <li><strong>Evite gorduras em excesso:</strong> Dificultam a digestão e podem causar desconforto</li>
            <li><strong>Hidrate-se bem:</strong> Beba água 30-60 minutos antes do treino</li>
          </ul>

          <h2 className="font-serif text-2xl font-semibold text-green mt-8 mb-4">O que comer depois do treino</h2>
          <p className="text-ink-soft leading-relaxed">
            A janela anabólica pós-treino é o momento ideal para nutrir seus músculos e iniciar o processo de recuperação:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-ink-soft">
            <li><strong>Proteína de alta qualidade:</strong> Frango, peixe, ovos ou whey protein</li>
            <li><strong>Carboidratos para repor glicogênio:</strong> Arroz integral, batata-doce ou quinoa</li>
            <li><strong>Frutas e vegetais:</strong> Para vitaminas, minerais e antioxidantes</li>
            <li><strong>Hidratação:</strong> Reponha os líquidos perdidos durante o treino</li>
          </ul>

          <h2 className="font-serif text-2xl font-semibold text-green mt-8 mb-4">Cronograma de refeições</h2>
          <div className="bg-sage-light rounded-[16px] p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-green">Pré-treino (60-90 min antes)</h4>
                <ul className="list-disc pl-6 text-sm text-ink-soft space-y-1">
                  <li>Banana com pasta de amendoim</li>
                  <li>Iogurte com granola</li>
                  <li>Pão integral com ovo</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green">Pós-treino (até 60 min depois)</h4>
                <ul className="list-disc pl-6 text-sm text-ink-soft space-y-1">
                  <li>Whey protein com frutas</li>
                  <li>Frango com arroz e vegetais</li>
                  <li>Omelete com pão integral</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="font-serif text-2xl font-semibold text-green mt-8 mb-4">Conclusão</h2>
          <p className="text-ink-soft leading-relaxed">
            Uma nutrição adequada antes e depois do treino é essencial para maximizar seus resultados 
            e garantir uma recuperação eficiente. Lembre-se de que cada pessoa é única, e o ideal é 
            trabalhar com um nutricionista para criar um plano personalizado.
          </p>
          <p className="text-ink-soft leading-relaxed mt-4">
            <strong>Quer um plano nutricional personalizado?</strong>
          </p>
          <Link
            href="/contato"
            className="inline-block mt-4 bg-green text-cream px-6 py-3 rounded-full hover:bg-sage transition-colors font-semibold"
          >
            Agende sua consulta
          </Link>
        </div>
      </div>
    </div>
  )
}