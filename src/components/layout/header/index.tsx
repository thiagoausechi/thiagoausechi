import tw from 'tailwind-styled-components'

import WindowButtons from '../navbar/window-buttons'

import Navbar from '../navbar'

export default function Header() {
  return (
    <Wrapper>
      <Taskbar>
        <WindowButtons />
        <Title>thiago ausechi / portfolio</Title>
      </Taskbar>
      <Navbar />
    </Wrapper>
  )
}

const Wrapper = tw.header`hidden tablet:flex fixed left-0 top-0 z-50 w-full flex-col justify-around border-b border-b-border bg-background/90 pb-3 text-xs drop-shadow-md backdrop-blur`
const Taskbar = tw.div`flex h-8 content-between items-center px-4`
const Title = tw.div`flex w-full items-center justify-center`
