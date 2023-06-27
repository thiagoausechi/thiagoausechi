'use client'
import useLocalStorage from '@/hooks/local-storage'
import usePrefersReducedMotion from '@/hooks/prefers-reduced-motion'
import { useEffect, useRef } from 'react'

// TODO: Add option to disable this effect
export default function BackgroundHoverEffect() {
  const elementRef = useRef<HTMLDivElement>(null)

  const [disabled] = useLocalStorage('disable-hover-effect', false)
  const prefersReducedMotion = usePrefersReducedMotion()

  const updatePosition = (x: number, y: number) => {
    const element = elementRef.current

    if (element) {
      element.animate(
        {
          clipPath: `circle(10% at ${x}px ${y}px)`,
        },
        { duration: 3000, fill: 'forwards' },
      )

      /**
       * Safari has a weird interaction between the
       * inline style and the animate function
       * (animated property collision)
       * This is a workaround solution.
       */
      if (element.style.clipPath !== '') {
        // set the clip-path to the position without any delay
        // resulting in a "pop" animation
        element.animate(
          { clipPath: `circle(10% at ${x}px ${y}px)` },
          { fill: 'forwards' },
        )

        // clear the inline style so Safari won't conflict
        element.style.clipPath = ''
      }
    }
  }

  const handleMouseMove = ({ clientX, clientY }: MouseEvent) =>
    updatePosition(clientX, clientY)

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)

    return () => document.removeEventListener('mousemove', handleMouseMove)
  })

  return (
    !disabled &&
    !prefersReducedMotion && (
      <div
        ref={elementRef}
        className='absolute inset-0 overflow-hidden bg-primary-dark'
        style={{ clipPath: 'circle(0% at 50% 50%)' }}
      />
    )
  )
}
