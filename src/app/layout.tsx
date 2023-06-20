import tw from 'tailwind-styled-components'
import '../styles/globals.css'

import { east, fira, virgil } from '../assets/fonts'
import Header from '../components/layout/header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='en'
      className={`${fira.variable} ${east.variable} ${virgil.variable}`}
    >
      <head />
      <Body>
        <Header />
        <Main>{children}</Main>
      </Body>
    </html>
  )
}

const Body = tw.body`relative flex min-h-screen flex-col bg-background font-fira text-text`
const Main = tw.main`flex mx-auto w-full grow`
