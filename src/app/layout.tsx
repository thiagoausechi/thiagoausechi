import '../styles/globals.css'
import tw from 'tailwind-styled-components'

import { east, fira } from '../assets/fonts'
import Header from '../components/layout/header'

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
          <Main>{children}</Main>
        </Wrapper>
      </body>
    </html>
  )
}

const Wrapper = tw.div`relative flex min-h-screen flex-col bg-zinc-800 font-fira text-zinc-400`
const Main = tw.main`flex mx-auto w-full grow text-zinc-100`
