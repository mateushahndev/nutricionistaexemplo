import Link from 'next/link'
import { ArrowLeft } from '@/components/Icons'

export default function TermosUso() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-cream">
      <div className="max-w-[820px] mx-auto px-4">
        <Link href="/" className="inline-flex items-center gap-2 text-green hover:text-sage transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Voltar para o início
        </Link>
        
        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-green mb-2">Termos de Uso</h1>
        <p className="text-ink-soft text-sm mb-8">Última atualização: Agosto de 2026</p>
        
        <div className="bg-white rounded-[24px] p-8 border border-cream-dark space-y-6 text-ink-soft text-sm leading-relaxed">
          <p>
            Ao utilizar este site, você concorda com os seguintes termos e condições. Leia-os atentamente.
          </p>
          
          <h2 className="font-serif text-xl font-semibold text-green">1. Aceitação dos Termos</h2>
          <p>
            Ao acessar e usar este site, você concorda em cumprir estes termos de uso e todas as leis e regulamentos 
            aplicáveis. Se você não concordar com algum destes termos, não use este site.
          </p>
          
          <h2 className="font-serif text-xl font-semibold text-green">2. Uso do Conteúdo</h2>
          <p>
            Todo o conteúdo deste site é de propriedade da Paola Rodrigues Nutrição e está protegido por direitos autorais. 
            Você não pode reproduzir, distribuir ou modificar o conteúdo sem autorização prévia.
          </p>
          
          <h2 className="font-serif text-xl font-semibold text-green">3. Informações e Serviços</h2>
          <p>
            As informações fornecidas neste site têm caráter informativo e não substituem a consulta profissional. 
            O agendamento de consultas está sujeito à disponibilidade.
          </p>
          
          <h2 className="font-serif text-xl font-semibold text-green">4. Responsabilidade</h2>
          <p>
            Não nos responsabilizamos por danos decorrentes do uso inadequado das informações contidas neste site.
          </p>
          
          <h2 className="font-serif text-xl font-semibold text-green">5. Modificações</h2>
          <p>
            Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entram em vigor 
            imediatamente após a publicação.
          </p>
          
          <h2 className="font-serif text-xl font-semibold text-green">6. Contato</h2>
          <p>
            Para questões sobre estes termos, entre em contato pelo e-mail: contato@exemplo.com.br
          </p>
        </div>
      </div>
    </div>
  )
}