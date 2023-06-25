'use client'
import { useEffect, useRef } from 'react'
import useLocalStorage from '../../hooks/local-storage'
import usePrefersReducedMotion from '../../hooks/prefers-reduced-motion-hook'

// TODO: Add option to disable this effect
export default function BackgroundHoverEffect() {
  const elementRef = useRef(null)

  const [disabled] = useLocalStorage('disable-hover-effect', false)
  const prefersReducedMotion = usePrefersReducedMotion()

  const updatePosition = (e: PointerEvent) => {
    const element = elementRef.current

    if (element) {
      element.animate(
        {
          clipPath: `circle(10% at ${e.clientX}px ${e.clientY}px)`,
        },
        { duration: 3000, fill: 'forwards' },
      )
    }
  }

  useEffect(() => {
    document.addEventListener('mousemove', updatePosition)

    return () => document.removeEventListener('mousemove', updatePosition)
  })

  return (
    !disabled &&
    !prefersReducedMotion && (
      <div
        ref={elementRef}
        className='absolute inset-0 overflow-hidden bg-primary-dark'
        style={{ clipPath: 'circle(0% at 50% 50%)' }}
      ></div>
    )
  )
}
