import { useEffect, useState } from 'react'

const getStoragedValue = (key: string) =>
  typeof window !== 'undefined' && window.localStorage
    ? JSON.parse(window.localStorage.getItem(key) || 'null')
    : 'null'

export default function useLocalStorage<T>(key: string, defaultValue: T) {
  const [value, setValue] = useState<T>(getStoragedValue(key) || defaultValue)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage)
      window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue] as const
}
