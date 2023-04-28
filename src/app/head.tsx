import FaviconMeta from '../components/atoms/favicon-meta'

export default function Head() {
  return (
    <>
      <title>thiago ausechi | portfolio</title>
      <FaviconMeta />
      <meta content='width=device-width, initial-scale=1' name='viewport' />
      <link rel='icon' href='/favicon.ico' />
    </>
  )
}
