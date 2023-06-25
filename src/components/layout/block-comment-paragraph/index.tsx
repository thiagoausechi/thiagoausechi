import tw from 'tailwind-styled-components'

export default function CommentBlock({
  children,
}: React.PropsWithChildren<{}>) {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = tw.div`flex flex-col text-comment before:content-['/**'] after:pl-5 after:content-['*/']`
const Line = tw.span`pl-5 before:mr-2 before:content-['*']`

CommentBlock.Line = Line
