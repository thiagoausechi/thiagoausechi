import { east, fira, virgil } from '@/assets/fonts'
import Header from '@/layout/header'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import tw from 'tailwind-styled-components'

export const metadata: Metadata = {
  title: 'thiago ausechi | portfolio',
  description: '',
  applicationName: 'Thiago Ausechi Portfolio',
  category: 'portfolio',
  keywords: [
    'Thiago',
    'Ausechi',
    'Front End',
    'Front-end',
    'Designer',
    'Dev',
    'Developer',
    'Next.js',
    'React',
    'TypeScript',
  ],
  colorScheme: 'dark',
  themeColor: '#27272a',
  creator: 'Thiago Ausechi',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'pt-BR': '/pt-BR',
    },
  },
  icons: {
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <Body className={`${fira.variable} ${east.variable} ${virgil.variable}`}>
        <Header />
        <Main>{children}</Main>
      </Body>
    </html>
  )
}

const Body = tw.body`relative flex min-h-screen flex-col bg-background font-fira text-text`
const Main = tw.main`flex mx-auto w-full grow`
