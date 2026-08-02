import Link from 'next/link'
import { ArrowLeft } from '@/components/Icons'

export default function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-cream">
      <div className="max-w-[820px] mx-auto px-4">
        <Link href="/" className="inline-flex items-center gap-2 text-green hover:text-sage transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Voltar para o início
        </Link>
        
        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-green mb-2">Política de Privacidade</h1>
        <p className="text-ink-soft text-sm mb-8">Última atualização: Agosto de 2026</p>
        
        <div className="bg-white rounded-[24px] p-8 border border-cream-dark space-y-6 text-ink-soft text-sm leading-relaxed">
          <p>
            A Paola Rodrigues Nutrição respeita sua privacidade e está comprometida em proteger seus dados pessoais. 
            Esta política explica como coletamos, usamos e protegemos suas informações.
          </p>
          
          <h2 className="font-serif text-xl font-semibold text-green">1. Informações que Coletamos</h2>
          <p>
            Coletamos informações que você nos fornece voluntariamente ao entrar em contato, agendar consultas 
            ou preencher formulários em nosso site, como nome, e-mail, telefone e mensagens.
          </p>
          
          <h2 className="font-serif text-xl font-semibold text-green">2. Como Usamos Suas Informações</h2>
          <p>
            Utilizamos suas informações para responder a perguntas, agendar consultas, melhorar nossos serviços 
            e enviar comunicações relacionadas ao seu atendimento.
          </p>
          
          <h2 className="font-serif text-xl font-semibold text-green">3. Compartilhamento de Dados</h2>
          <p>
            Não compartilhamos seus dados com terceiros, exceto quando necessário para cumprir obrigações legais 
            ou com seu consentimento explícito.
          </p>
          
          <h2 className="font-serif text-xl font-semibold text-green">4. Segurança</h2>
          <p>
            Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, 
            perda ou destruição.
          </p>
          
          <h2 className="font-serif text-xl font-semibold text-green">5. Seus Direitos</h2>
          <p>
            Você tem direito a acessar, corrigir ou solicitar a exclusão de seus dados a qualquer momento, 
            entrando em contato conosco.
          </p>
          
          <h2 className="font-serif text-xl font-semibold text-green">6. Contato</h2>
          <p>
            Para questões sobre esta política, entre em contato pelo e-mail: contato@exemplo.com.br
          </p>
        </div>
      </div>
    </div>
  )
}