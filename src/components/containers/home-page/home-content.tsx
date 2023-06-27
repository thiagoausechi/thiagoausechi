import HtmlTag from '@/layout/html-tag'
import {
  FigmaIcon,
  FirebaseIcon,
  NextIcon,
  ReactIcon,
  TypeScriptIcon,
} from '@/layout/icons'
import CommentLine from '@/layout/single-comment-paragraph'
import Variable from '@/layout/variable-paragraph'
import tw from 'tailwind-styled-components'

export default function HomeContent() {
  return (
    <Wrapper>
      <Cluster className='leading-6'>
        <HtmlTag className='-ml-3'>html/</HtmlTag>
        <HtmlTag>body</HtmlTag>
      </Cluster>

      <Cluster>
        <HtmlTag>h1</HtmlTag>
        <p className='font-virgil text-2xl pl-3 text-heading'>Hello! I am</p>
      </Cluster>

      <Cluster>
        <div className='flex items-end mb-3 text-heading'>
          <h1
            style={{
              filter:
                'drop-shadow(rgba(0, 168, 215, 1) 0px 0px 8px) drop-shadow(rgba(0, 168, 215, 1.8) 0px 0px 30px)',
            }}
            className='text-7xl font-bold pl-3 leading-[85%]'
          >
            Thiago
            <br />
            Ausechi
          </h1>

          <HtmlTag className='ml-4 leading-none'>h1/</HtmlTag>
        </div>

        <div>
          <HtmlTag>p</HtmlTag>
          <p className='text-heading pl-3'>
            &gt; Front-end developer
            <span className='animate-flash'>_</span>
          </p>
          <HtmlTag>p/</HtmlTag>
        </div>
      </Cluster>

      <Cluster className='my-4 flex flex-col gap-3'>
        <CommentLine>Main techs</CommentLine>
        <TechsIconsGrid>
          <ReactIcon styledAs='link' />
          <NextIcon styledAs='link' />
          <TypeScriptIcon styledAs='link' />
          <FirebaseIcon styledAs='link' />
          <FigmaIcon styledAs='link' />
        </TechsIconsGrid>
      </Cluster>

      <Cluster>
        <Variable variable='github' value={'github.com/thiagoausechi'} />
        <Variable variable='linkedin' value={'linkedin.com/in/thiagoausechi'} />
      </Cluster>
    </Wrapper>
  )
}

const Wrapper = tw.div`z-20 gap-6 mt-20 h-full justify-center flex flex-col`
const Cluster = tw.div``

const TechsIconsGrid = tw.div`flex items-center gap-2.5`
