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
  // cant use context provider here as it needs a client component to work with
  return (
    // <MyThemeContextProvider> before sam
    <ThemeProvider attribute="class">
      <HeaderFooter>
        {children}
      </HeaderFooter>
    </ThemeProvider>
    // </MyThemeContextProvider>
  )
}
