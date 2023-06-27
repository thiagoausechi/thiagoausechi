import { East_Sea_Dokdo, Fira_Mono } from 'next/font/google'
import localFont from 'next/font/local'

export const fira = Fira_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-fira',
  display: 'swap',
})

export const east = East_Sea_Dokdo({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-east-sea',
  display: 'swap',
})

export const virgil = localFont({
  src: '../styles/Virgil.woff2',
  weight: '400',
  style: 'normal',
  variable: '--font-virgil',
})
