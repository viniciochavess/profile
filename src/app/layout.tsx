import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ParticlesBackground } from '../../components/ParticlesBackground'
import  './global.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VINICIO CHAVESS',
  description: 'PORTFOLIO CRIADO POR VINICIO CHAVESS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
      <ParticlesBackground/>
        {children}</body>
    </html>
  )
}
