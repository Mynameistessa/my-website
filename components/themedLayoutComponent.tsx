"use client"
import '../app/globals.css'
import { Inter } from 'next/font/google'
import HeaderFooter from './HeaderFooter'
import { ThemeProvider } from 'next-themes'

const inter = Inter({ subsets: ['latin'] })

export default function ThemedLayoutComponent({
  children,
}: {
  children: any
}) {
  return (
    <ThemeProvider attribute="class">
      <HeaderFooter>
        {children}
      </HeaderFooter>
    </ThemeProvider>
  )
}
