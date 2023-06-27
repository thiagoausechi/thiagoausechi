import Navbar from '@/layout/navbar'
import tw from 'tailwind-styled-components'

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

/**
 * Purely aesthetical component
 * Are the three dots (upper left corner) that simulate the MacOS system window
 */
const WindowButtons = () => (
  <Actions>
    <Close />
    <Backfull />
    <Full />
  </Actions>
)

const Wrapper  = tw.header`hidden tablet:flex fixed left-0 top-0 z-50 w-full flex-col justify-around border-b border-b-border bg-background/90 pb-3 text-xs drop-shadow-md backdrop-blur`
const Taskbar  = tw.div`flex h-8 content-between items-center px-4`
const Title    = tw.div`flex w-full items-center justify-center`

const Actions  = tw.div`absolute flex items-center gap-1.5`
const Close    = tw.div`h-2 w-2 rounded transition bg-[#f87171] hover:bg-[#ef4444]`
const Backfull = tw.div`h-2 w-2 rounded transition bg-[#facc15] hover:bg-[#eab308]`
const Full     = tw.div`h-2 w-2 rounded transition bg-[#4ade80] hover:bg-[#22c55e]`
