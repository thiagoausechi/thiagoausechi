import tw from 'tailwind-styled-components'

import BackgroundHoverEffect from './background-hover-effect'

import HomeContent from './home-content'
import ProfilePicture from './profile-picture'

export default function HomePageContainer() {
  return (
    <Wrapper>
      <BackgroundHoverEffect />
      <BlurLayer />

      <HomeContent />
      <ProfilePicture />
    </Wrapper>
  )
}

const Wrapper = tw.section`desktop:flex mx-auto hidden grow content-between items-center justify-center overflow-hidden`
const BlurLayer = tw.div`absolute inset-0 backdrop-blur-3xl z-10`
