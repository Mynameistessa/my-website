import './globals.css'
import { Inter } from 'next/font/google'
import HeaderFooter from '../components/HeaderFooter'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tessa Breen',
  description: 'My personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderFooter>
          {children}
        </HeaderFooter>
      </body>
    </html>
  )
}
