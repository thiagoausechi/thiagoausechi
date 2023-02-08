import '../styles/globals.css';
import tw from "tailwind-styled-components"

import { east, fira } from '../assets/fonts';
import Header from '../components/organism/header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={`${fira.variable} ${east.variable}`}>
      <head />
      <body>
        <Wrapper>
          <Header />
          <Content>
            {children}
          </Content>
        </Wrapper>
      </body>
    </html>
  );
}

const Wrapper = tw.div`font-fira relative min-h-screen overflow-hidden bg-zinc-800 text-zinc-400`;
const Content = tw.main`p-4 text-white`;