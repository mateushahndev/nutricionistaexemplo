import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from '@/components/Icons'

const posts = [
  {
    slug: 'nutricao-pre-pos-treino',
    title: 'Dicas de nutrição pré e pós-treino para performance e recuperação ideais',
    date: '15 de Dezembro, 2025',
    excerpt: 'Descubra como alimentar seu corpo antes e depois dos treinos para melhorar sua performance, acelerar a recuperação e alcançar resultados incríveis.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop',
    category: 'Nutrição Esportiva'
  },
  {
    slug: 'nutricao-saude-mental',
    title: 'A ligação entre nutrição e saúde mental: como a comida afeta seu humor',
    date: '15 de Dezembro, 2025',
    excerpt: 'Explore a conexão entre o que você come e como você se sente. Entenda como a alimentação pode influenciar seu humor, energia e bem-estar emocional.',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop',
    category: 'Saúde Mental'
  },
  {
    slug: 'verdade-sobre-dietas',
    title: 'A verdade sobre dietas da moda e seus efeitos de longo prazo na saúde',
    date: '15 de Dezembro, 2025',
    excerpt: 'Uma análise crítica das dietas populares. Descubra quais funcionam de verdade, quais são perigosas e como fazer escolhas alimentares sustentáveis.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop',
    category: 'Nutrição'
  }
]

export default function Blog() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-cream">
      <div className="max-w-[820px] mx-auto px-4">
        <Link href="/" className="inline-flex items-center gap-2 text-ink-soft hover:text-sage transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Voltar para o início
        </Link>
        
        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-green mt-2 mb-4">
          Últimos <span className="text-sage italic">Artigos</span>
        </h1>
        <p className="text-ink-soft text-base md:text-lg mb-8 max-w-2xl">
          Dicas, receitas e orientações para uma vida mais saudável, escritos por Paola Rodrigues.
        </p>

        <div className="flex flex-col gap-6 md:gap-8">
          {posts.map((post, index) => (
            <Link key={index} href={`/blog/${post.slug}`}>
              <article className="bg-white rounded-[20px] md:rounded-[24px] overflow-hidden border border-cream-dark hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                  <div className="md:col-span-1 aspect-[4/3] md:aspect-auto overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="md:col-span-2 p-4 md:p-6 flex flex-col justify-center">
                    <span className="text-xs font-bold tracking-wider text-sage uppercase mb-2">{post.category}</span>
                    <h2 className="font-serif text-lg md:text-xl font-semibold text-green mb-2 group-hover:text-sage transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-ink-soft text-sm leading-relaxed mb-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-ink-soft/60">por Paola Rodrigues • {post.date}</span>
                      <span className="text-green group-hover:text-sage transition-colors font-semibold text-sm">
                        Leia mais →
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}