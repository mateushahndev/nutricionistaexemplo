'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from '@/components/Icons'
import RevealWrapper from './RevealWrapper'

const posts = [
  {
    title: 'Dicas de nutrição pré e pós-treino para performance e recuperação ideais',
    date: '15 de Dezembro, 2025',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'A ligação entre nutrição e saúde mental: como a comida afeta seu humor',
    date: '15 de Dezembro, 2025',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'A verdade sobre dietas da moda e seus efeitos de longo prazo na saúde',
    date: '15 de Dezembro, 2025',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=600&auto=format&fit=crop'
  },
]

export default function Blog() {
  return (
    <section className="py-12 md:py-20 bg-cream-dark">
      <div className="max-w-[1220px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10">
          <RevealWrapper>
            <span className="text-xs font-bold tracking-widest text-sage uppercase">Blog</span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-green mt-2">
              Últimos <span className="text-sage italic">Artigos</span>
            </h2>
          </RevealWrapper>
          <Link href="/blog" className="border border-green text-green px-5 py-2 rounded-full hover:bg-green hover:text-cream transition-colors text-sm font-semibold">Ver Mais</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <RevealWrapper key={index} delay={index * 0.1}>
              <div className="bg-white rounded-[20px] overflow-hidden border border-cream-dark hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg font-medium text-green mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <div className="text-sm text-ink-soft">por Paola Rodrigues • {post.date}</div>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}