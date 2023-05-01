import tw from 'tailwind-styled-components'

/**
 * Purely aesthetical component
 * Are the three dots (upper left corner) that simulate the MacOS system window
 */
export default function WindowButtons() {
  return (
    <Actions>
      <Close />
      <Backfull />
      <Full />
    </Actions>
  )
}

const Actions  = tw.div`absolute flex items-center gap-1.5`
const Close    = tw.div`h-2 w-2 rounded transition bg-red-400 hover:bg-red-500`
const Backfull = tw.div`h-2 w-2 rounded transition bg-yellow-400 hover:bg-yellow-500`
const Full     = tw.div`h-2 w-2 rounded transition bg-green-400 hover:bg-green-500`
