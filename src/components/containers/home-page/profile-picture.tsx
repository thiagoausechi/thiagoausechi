import Image from 'next/image'
import tw from 'tailwind-styled-components'

export default function ProfilePicture() {
  return (
    <Wrapper>
      <RedLight>
        <Image
          src='/images/profile-red-light.svg'
          alt='Red profile light'
          fill
        />
      </RedLight>
      <BlueLight>
        <Image
          src='/images/profile-blue-light.svg'
          alt='Blue profile light'
          fill
        />
      </BlueLight>
      <Image
        className='z-20'
        src='/images/profile.png'
        alt='Profile picture'
        fill
      />
    </Wrapper>
  )
}

const Wrapper = tw.div`relative aspect-square h-full`
const RedLight = tw.div`absolute aspect-square w-2/3`
const BlueLight = tw.div`absolute left-1/3 top-1/3 aspect-square w-full`
