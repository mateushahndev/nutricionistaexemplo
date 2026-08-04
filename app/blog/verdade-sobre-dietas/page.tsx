import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from '@/components/Icons'

export default function Post() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-cream">
      <div className="max-w-[820px] mx-auto px-4">
        <Link href="/blog" className="inline-flex items-center gap-2 text-ink-soft hover:text-sage transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Voltar para o blog
        </Link>
        
        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-green mt-2 mb-4">
          A verdade sobre dietas da moda e seus efeitos de longo prazo na saúde
        </h1>
        <div className="text-ink-soft text-sm mb-8">por Paola Rodrigues • 15 de Dezembro, 2025</div>
        
        <div className="rounded-[24px] overflow-hidden mb-8">
          <Image
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop"
            alt="Verdade sobre dietas"
            width={1200}
            height={600}
            className="w-full h-auto"
          />
        </div>
        
        <div className="bg-white rounded-[24px] p-8 border border-cream-dark prose prose-lg max-w-none">
          <p className="text-ink-soft text-lg leading-relaxed">
            As dietas da moda prometem resultados rápidos, mas será que elas realmente funcionam a longo prazo? 
            Neste artigo, vou analisar algumas das dietas mais populares e seus efeitos na saúde.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-green mt-8 mb-4">O que são dietas da moda?</h2>
          <p className="text-ink-soft leading-relaxed">
            Dietas da moda são planos alimentares que ganham popularidade rapidamente, muitas vezes prometendo 
            perda de peso acelerada. Elas geralmente eliminam grupos alimentares inteiros ou restringem severamente 
            as calorias.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-green mt-8 mb-4">Análise crítica das dietas populares</h2>
          
          <div className="space-y-6">
            <div className="bg-sage-light rounded-[16px] p-4">
              <h3 className="font-serif text-xl font-semibold text-green">Dieta Low-Carb</h3>
              <p className="text-ink-soft text-sm leading-relaxed">
                <strong>Prós:</strong> Pode ajudar na perda de peso inicial e controlar a glicemia.<br />
                <strong>Contras:</strong> Restrição severa de carboidratos pode levar a fadiga e deficiências nutricionais.
              </p>
            </div>
            
            <div className="bg-cream-dark rounded-[16px] p-4">
              <h3 className="font-serif text-xl font-semibold text-green">Dieta Cetogênica</h3>
              <p className="text-ink-soft text-sm leading-relaxed">
                <strong>Prós:</strong> Pode ser eficaz para epilepsia e perda de peso rápida.<br />
                <strong>Contras:</strong> Difícil de manter a longo prazo, pode causar desequilíbrios nutricionais.
              </p>
            </div>
            
            <div className="bg-sage-light rounded-[16px] p-4">
              <h3 className="font-serif text-xl font-semibold text-green">Dieta da Sopa</h3>
              <p className="text-ink-soft text-sm leading-relaxed">
                <strong>Prós:</strong> Fácil de seguir por curtos períodos.<br />
                <strong>Contras:</strong> Baixa em proteínas e gorduras essenciais, não sustentável.
              </p>
            </div>
          </div>

          <h2 className="font-serif text-2xl font-semibold text-green mt-8 mb-4">Efeitos colaterais das dietas restritivas</h2>
          <ul className="list-disc pl-6 space-y-2 text-ink-soft">
            <li><strong>Efeito sanfona:</strong> Perda de peso seguida de ganho rápido</li>
            <li><strong>Deficiências nutricionais:</strong> Falta de vitaminas e minerais essenciais</li>
            <li><strong>Problemas metabólicos:</strong> Desaceleração do metabolismo</li>
            <li><strong>Distúrbios alimentares:</strong> Relação prejudicada com a comida</li>
            <li><strong>Perda de massa muscular:</strong> Prejuízo à composição corporal</li>
          </ul>

          <h2 className="font-serif text-2xl font-semibold text-green mt-8 mb-4">O que funciona de verdade</h2>
          <p className="text-ink-soft leading-relaxed">
            Em vez de dietas da moda, o caminho mais eficaz e sustentável é:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-ink-soft">
            <li><strong>Reeducação alimentar:</strong> Aprender a fazer escolhas saudáveis</li>
            <li><strong>Plano personalizado:</strong> Criado por um nutricionista para suas necessidades</li>
            <li><strong>Mudanças graduais:</strong> Pequenas alterações que se tornam hábitos</li>
            <li><strong>Variedade:</strong> Comer todos os grupos alimentares com moderação</li>
          </ul>

          <h2 className="font-serif text-2xl font-semibold text-green mt-8 mb-4">Conclusão</h2>
          <p className="text-ink-soft leading-relaxed">
            Dietas da moda podem prometer resultados rápidos, mas raramente são sustentáveis ou saudáveis a longo prazo. 
            O caminho para uma vida mais saudável passa por uma alimentação equilibrada e personalizada.
          </p>
          <p className="text-ink-soft leading-relaxed mt-4">
            <strong>Quer um plano nutricional que realmente funciona?</strong>
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