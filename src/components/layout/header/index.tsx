import tw from 'tailwind-styled-components'

import WindowButtons from '../navbar/window-buttons'
import NavTab from '../navbar/nav-tab'

import TabsLinks from '../../../assets/pages-links'

export default function Header() {
  return (
    <Wrapper>
      <Taskbar>
        <WindowButtons />
        <Title>thiago ausechi / portfolio</Title>
      </Taskbar>
      <Tabs>
        {TabsLinks.map(({ href, label, disabled }) => (
          <NavTab key={href} href={href} title={label} disabled={disabled} />
        ))}
        <Filler />
      </Tabs>
    </Wrapper>
  )
}

const Wrapper = tw.header`hidden tablet:flex fixed left-0 top-0 z-50 w-full flex-col justify-around border-b border-b-zinc-600 bg-zinc-800/90 pb-3 text-xs drop-shadow-md backdrop-blur`
const Taskbar = tw.div`flex h-8 content-between items-center px-4`
const Title = tw.div`flex w-full items-center justify-center`

const Tabs = tw.nav`flex h-9 w-full flex-row items-center`
const Filler = tw.div`h-full grow border-y border-y-zinc-600 bg-zinc-900/90`