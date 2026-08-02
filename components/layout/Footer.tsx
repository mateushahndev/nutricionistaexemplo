'use client'

import Link from 'next/link'
import { Logo } from '@/components/Icons'

export default function Footer() {
  return (
    <footer className="bg-green-dark text-white pt-12 md:pt-16 pb-8">
      <div className="max-w-[1220px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-white/10 mb-10">
          <div>
            <h4 className="text-white/60 text-sm uppercase tracking-wider font-semibold mb-4">Página</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-white/70 hover:text-white transition-colors text-sm">Início</Link></li>
              <li><Link href="/sobre" className="text-white/70 hover:text-white transition-colors text-sm">Sobre</Link></li>
              <li><Link href="/blog" className="text-white/70 hover:text-white transition-colors text-sm">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white/60 text-sm uppercase tracking-wider font-semibold mb-4">Suporte</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-white/70 hover:text-white transition-colors text-sm">Imprensa e Mídia</Link></li>
              <li><Link href="/contato" className="text-white/70 hover:text-white transition-colors text-sm">Contato</Link></li>
              <li><Link href="/faq" className="text-white/70 hover:text-white transition-colors text-sm">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white/60 text-sm uppercase tracking-wider font-semibold mb-4">Social</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-white/70 hover:text-white transition-colors text-sm">Instagram</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-white transition-colors text-sm">Facebook</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <Link href="/" className="flex items-center gap-2 text-white">
            <Logo className="w-5 h-5" />
            <span className="font-serif font-semibold">Paola Rodrigues</span>
          </Link>
          <span>Copyright © 2026 Paola Rodrigues. Todos os direitos reservados.</span>
          <div className="flex gap-4">
            <Link href="/politica-privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link>
            <Link href="/termos-uso" className="hover:text-white transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}