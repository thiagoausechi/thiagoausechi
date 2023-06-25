import HomePageContainer from '../components/containers/home-page'
import LinktreeContainer from '../components/containers/linktree-page'

// TODO: Add a Dynamic loading for Desktop Version
export default function HomePage() {
  return (
    <>
      <LinktreeContainer />
      <HomePageContainer />
    </>
  )
}
