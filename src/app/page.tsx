import HomePageContainer from '@/containers/home-page'
import LinktreeContainer from '@/containers/linktree-page'
import { headers } from 'next/headers'
import { getSelectorsByUserAgent } from 'react-device-detect'

export default function HomePage() {
  const userAgent = headers().get('user-agent')
  let isMobile = false
  if (userAgent) isMobile = getSelectorsByUserAgent(userAgent).isMobile

  return (
    <>
      <LinktreeContainer />
      {!isMobile && <HomePageContainer />}
    </>
  )
}
