import '../styles/globals.css';

import { fira } from '../assets/fonts';
import Header from '../components/organism/header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={fira.className}>
      <head />
      <body>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}