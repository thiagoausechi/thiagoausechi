'use client'
import tw from 'tailwind-styled-components'

import Link from 'next/link'
import { useSelectedLayoutSegments } from 'next/navigation'

type Props = {
  href: string
  title: string
  disabled: boolean
}

export default function NavTab({ href, title, disabled }: Props) {
  const segment = useSelectedLayoutSegments()
  const active = href === `/${segment}`

  return !disabled ? (
    <Tab href={href} active={active.toString()}>
      {active ? `<${title}/>` : `_${title}`}
    </Tab>
  ) : (
    <DisabledTab>{`--${title}`}</DisabledTab>
  )
}

type TabProps = {
  children: React.ReactNode
  href: string
  active: string
}

const Tab = tw(Link)<TabProps>`
  flex h-full content-center items-center justify-center border border-l-0 border-border px-10 text-center transition duration-300 hover:bg-neutral-700/70 hover:text-heading
  ${(p) =>
    p.active === 'true'
      ? 'italic border-b-0 bg-inherit border-t-accent text-heading shadow-[0_-3px_4px_-2px_rgba(255,96,89,0.4)]'
      : 'bg-background-dark/90'}
`

const DisabledTab = tw.div`flex h-full cursor-not-allowed content-center items-center justify-center border border-l-0 border-border bg-background-dark/90 px-10 text-center text-disabled`
