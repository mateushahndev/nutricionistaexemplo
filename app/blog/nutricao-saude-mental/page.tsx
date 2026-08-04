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
          A ligação entre nutrição e saúde mental: como a comida afeta seu humor
        </h1>
        <div className="text-ink-soft text-sm mb-8">por Paola Rodrigues • 15 de Dezembro, 2025</div>
        
        <div className="rounded-[24px] overflow-hidden mb-8">
          <Image
            src="https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=1200&auto=format&fit=crop"
            alt="Nutrição e saúde mental"
            width={1200}
            height={600}
            className="w-full h-auto"
          />
        </div>
        
        <div className="bg-white rounded-[24px] p-8 border border-cream-dark prose prose-lg max-w-none">
          <p className="text-ink-soft text-lg leading-relaxed">
            Você sabia que o que você come pode afetar diretamente seu humor, energia e bem-estar emocional? 
            A ciência tem mostrado cada vez mais a forte conexão entre nutrição e saúde mental.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-green mt-8 mb-4">Como a comida afeta seu cérebro</h2>
          <p className="text-ink-soft leading-relaxed">
            O cérebro é um órgão que consome muita energia e depende de nutrientes específicos para funcionar bem. 
            Uma alimentação inadequada pode levar a:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-ink-soft">
            <li><strong>Desregulação do humor:</strong> Flutuações de açúcar no sangue podem causar irritabilidade</li>
            <li><strong>Fadiga mental:</strong> Falta de nutrientes essenciais para a produção de neurotransmissores</li>
            <li><strong>Ansiedade e depressão:</strong> Inflamação e desequilíbrios nutricionais</li>
            <li><strong>Dificuldade de concentração:</strong> Neurotransmissores desregulados</li>
          </ul>

          <h2 className="font-serif text-2xl font-semibold text-green mt-8 mb-4">Alimentos que melhoram o humor</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-sage-light rounded-[16px] p-4">
              <h4 className="font-semibold text-green mb-2">Alimentos para o bem-estar</h4>
              <ul className="list-disc pl-6 text-sm text-ink-soft space-y-1">
                <li>Ômega-3 (salmão, sardinha, chia)</li>
                <li>Magnésio (espinafre, amêndoas, abacate)</li>
                <li>Vitaminas do complexo B (grãos integrais, ovos)</li>
                <li>Probióticos (iogurte, kefir, kombucha)</li>
                <li>Antioxidantes (frutas vermelhas, cacau)</li>
              </ul>
            </div>
            <div className="bg-cream-dark rounded-[16px] p-4">
              <h4 className="font-semibold text-sage mb-2">Alimentos a evitar</h4>
              <ul className="list-disc pl-6 text-sm text-ink-soft space-y-1">
                <li>Açúcar refinado (picos e quedas de energia)</li>
                <li>Gorduras trans (inflamação)</li>
                <li>Aditivos e conservantes</li>
                <li>Bebidas alcoólicas em excesso</li>
                <li>Cafeína em excesso</li>
              </ul>
            </div>
          </div>

          <h2 className="font-serif text-2xl font-semibold text-green mt-8 mb-4">Estratégias práticas</h2>
          <ul className="list-disc pl-6 space-y-2 text-ink-soft">
            <li><strong>Refeições regulares:</strong> Mantenha seus níveis de açúcar no sangue estáveis</li>
            <li><strong>Hidratação:</strong> Beba água ao longo do dia</li>
            <li><strong>Alimentos variados:</strong> Garanta todos os nutrientes necessários</li>
            <li><strong>Cozinhe em casa:</strong> Tenha mais controle sobre o que come</li>
          </ul>

          <h2 className="font-serif text-2xl font-semibold text-green mt-8 mb-4">Conclusão</h2>
          <p className="text-ink-soft leading-relaxed">
            A nutrição é uma ferramenta poderosa para a saúde mental. Pequenas mudanças na sua alimentação 
            podem trazer grandes benefícios para seu bem-estar emocional.
          </p>
          <p className="text-ink-soft leading-relaxed mt-4">
            <strong>Quer melhorar sua relação com a comida?</strong>
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