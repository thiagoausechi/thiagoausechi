'use client';
import tw from "tailwind-styled-components";

import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

export default function NavTab({ href, title }: any) {
  const segment = useSelectedLayoutSegments();
  const active = href === `/${segment}`;

  return (
    <Tab href={href} active={active}>
      {active ? `<${title}/>` : `_${title}`}
    </Tab>
  );
}

const Tab = tw(Link) <{ children: React.ReactNode, href: string, active: boolean }>`
flex h-full content-center items-center justify-center border border-l-0 border-zinc-600 px-10 text-center transition duration-300 hover:bg-neutral-700 hover:text-zinc-300
  ${(p) => (p.active ? "italic border-b-0 border-t-red-400 bg-zinc-800 text-zinc-200 shadow-[0_-3px_4px_-2px_rgba(255,96,89,0.4)]" : "")}
`