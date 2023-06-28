import './globals.css'
import { Inter } from 'next/font/google'
import ThemedLayoutComponent from '../components/themedLayoutComponent'

// not a client component 

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
        <ThemedLayoutComponent>
          {children}
        </ThemedLayoutComponent>
      </body>
    </html>
  )
}
