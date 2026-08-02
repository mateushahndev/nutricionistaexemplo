import type { Metadata } from 'next'
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-fraunces',
  display: 'swap',
  style: ['normal', 'italic'],
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Paola Rodrigues | Nutricionista Clínica',
  description: 'Nutricionista especialista em alimentação saudável, emagrecimento e bem-estar. Atendimento personalizado com planos alimentares adaptados à sua rotina.',
  keywords: 'nutricionista, alimentação saudável, emagrecimento, bem-estar, nutrição clínica',
  authors: [{ name: 'Paola Rodrigues' }],
  openGraph: {
    title: 'Paola Rodrigues | Nutricionista Clínica',
    description: 'Nutricionista especialista em alimentação saudável, emagrecimento e bem-estar.',
    url: 'https://paolarodrigues.com.br',
    siteName: 'Paola Rodrigues',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${jakarta.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}