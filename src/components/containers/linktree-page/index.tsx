import Link from 'next/link'

// TODO: Make the Linktree Page
export default function LinktreeContainer() {
  return (
    <div className='desktop:hidden flex flex-col items-center justify-center grow overflow-hidden'>
      <h1>Under construction.</h1>
      <p>
        Please, visit&nbsp;
        <Link
          className='underline'
          target='_blank'
          href='https://linktr.ee/thiagoausechi'
        >
          here
        </Link>
        .
      </p>
    </div>
  )
}
