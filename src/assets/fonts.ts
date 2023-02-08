import { Fira_Mono, East_Sea_Dokdo } from "@next/font/google";

export const fira = Fira_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-fira',
  display: 'swap'
});

export const east = East_Sea_Dokdo({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-east-sea',
  display: 'swap'
});