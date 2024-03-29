import TabsLinks from '@/assets/pages-links'
import tw from 'tailwind-styled-components'
import NavTab from './nav-tab'

export default function Navbar() {
  return (
    <Wrapper>
      {TabsLinks.map(({ href, label, disabled }) => (
        <NavTab key={href} href={href} title={label} disabled={disabled} />
      ))}
      <Filler />
    </Wrapper>
  )
}

const Wrapper = tw.nav`flex h-9 w-full flex-row items-center`
const Filler = tw.div`h-full grow border-y border-y-border bg-background-dark/90`
