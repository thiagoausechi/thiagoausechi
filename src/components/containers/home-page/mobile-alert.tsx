import Link from 'next/link'
import tw from 'tailwind-styled-components'
import { GithubIcon, LinkedInIcon } from '../../layout/icons'

export default function MobileAlert() {
  return (
    <Wrapper>
      <p>Mobile not supported yet. :(</p>
      <IconsGrid>
        <Link href='http://www.github.com/thiagoausechi' target='_blank'>
          <GithubIcon styledAs='link' />
        </Link>
        <Link href='http://www.linkedin.com/in/thiagoausechi' target='_blank'>
          <LinkedInIcon styledAs='link' />
        </Link>
      </IconsGrid>
    </Wrapper>
  )
}

const Wrapper = tw.section`desktop:hidden flex grow flex-col items-center justify-center`
const IconsGrid = tw.div`mt-4 flex items-center justify-center gap-3`
