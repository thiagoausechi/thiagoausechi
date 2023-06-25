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
const Close    = tw.div`h-2 w-2 rounded transition bg-[#f87171] hover:bg-[#ef4444]`
const Backfull = tw.div`h-2 w-2 rounded transition bg-[#facc15] hover:bg-[#eab308]`
const Full     = tw.div`h-2 w-2 rounded transition bg-[#4ade80] hover:bg-[#22c55e]`
