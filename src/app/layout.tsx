import Header from '@/layout/header'
import '@/styles/globals.css'
import tw from 'tailwind-styled-components'
import { east, fira, virgil } from '../assets/fonts'

export const metadata = {
  title: 'thiago ausechi | portfolio',
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
