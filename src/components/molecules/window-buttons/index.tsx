import tw from 'tailwind-styled-components'

/**
 * Purely aesthetical component
 * Are the three dots (upper left corner) that simulate the system window
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
const Close    = tw.div`h-2 w-2 rounded bg-red-400`
const Backfull = tw.div`h-2 w-2 rounded bg-yellow-400`
const Full     = tw.div`h-2 w-2 rounded bg-green-400`
