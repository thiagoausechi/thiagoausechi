'use client'
import tw from 'tailwind-styled-components'

import Link from 'next/link'
import { useSelectedLayoutSegments } from 'next/navigation'

export default function NavTab({ href, title, disabled }: any) {
  const segment = useSelectedLayoutSegments()
  const active = href === `/${segment}`

  return !disabled ? (
    <Tab href={href} active={active.toString()}>
      {active ? `<${title}/>` : `_${title}`}
    </Tab>
  ) : (
    <DisabledTab>{`_${title}`}</DisabledTab>
  )
}

const Tab = tw(Link)<{
  children: React.ReactNode
  href: string
  active: string
}>`
  flex h-full content-center items-center justify-center border border-l-0 border-zinc-600/70 px-10 text-center transition duration-300 hover:bg-neutral-700/70 hover:text-zinc-300
  ${(p) =>
    p.active === 'true'
      ? 'italic border-b-0 bg-inherit border-t-red-400 text-zinc-200 shadow-[0_-3px_4px_-2px_rgba(255,96,89,0.4)]'
      : 'bg-zinc-900/90'}
`

const DisabledTab = tw.div`flex h-full content-center items-center justify-center border border-l-0 border-zinc-600/70 px-10 text-center cursor-not-allowed`
