import tw from 'tailwind-styled-components'

type Props = {
  variable: string
  value: string
}

// I'll bring futher customization to this component
export default function Variable({ variable, value }: Props) {
  return (
    <Wrapper>
      <Const>const</Const>
      &nbsp;
      <span>{variable}</span>
      &nbsp;=&nbsp;
      <Link href={'http://www.' + value} target='_blank'>
        "{value}"
      </Link>
    </Wrapper>
  )
}

const Wrapper = tw.p`text-heading`
const Const = tw.span`text-accent drop-shadow-[0_0_5px_rgba(255,96,89,0.5)]`
const Link = tw.a`text-primary hover:underline cursor-pointer`
