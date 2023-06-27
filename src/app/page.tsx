import HomePageContainer from '@/containers/home-page'
import LinktreeContainer from '@/containers/linktree-page'

// TODO: Add a Dynamic loadin\g for Desktop Version
export default function HomePage() {
  return (
    <>
      <LinktreeContainer />
      <HomePageContainer />
    </>
  )
}
