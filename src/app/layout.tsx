import '../styles/globals.css'
import tw from 'tailwind-styled-components'

import { east, fira } from '../assets/fonts'
import Header from '../components/organism/header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={`${fira.variable} ${east.variable}`}>
      <head />
      <body>
        <Wrapper>
          <Header />
          <Container>{children}</Container>
        </Wrapper>
      </body>
    </html>
  )
}

const Wrapper = tw.div`relative flex min-h-screen flex-col bg-zinc-800 font-fira text-zinc-400`
const Container = tw.main`flex mx-auto w-full grow text-zinc-100`
