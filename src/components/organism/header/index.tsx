import tw from "tailwind-styled-components";

import WindowButtons from '../../molecules/window-buttons';
import NavTab from '../../atoms/nav-tab';

const links = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/about", label: "about" },
  { href: "/blog", label: "blog" }
];

export default function Header() {
  return (
    <Navbar>
      <Taskbar>
        <WindowButtons />
        <Title>thiago ausechi / portfolio</Title>
      </Taskbar>
      <Tabs>
        {links.map(({ href, label }) => <NavTab key={href} href={href} title={label} />)}
        <Filler />
      </Tabs>
    </Navbar>
  );
}

const Navbar = tw.nav`flex-col justify-around border-b border-b-zinc-600 bg-zinc-800 pb-3 text-xs drop-shadow-md`;
const Taskbar = tw.div`flex h-8 content-between items-center px-4`;
const Title = tw.div`flex w-full items-center justify-center`;

const Tabs = tw.div`flex h-9 w-full flex-row items-center bg-zinc-900`;
const Filler = tw.div`h-full grow border-y border-y-zinc-600`;