"use client";
import Link from "next/link";
import packageJson from '../package.json';
import { openInNewTab } from '@/utils/openInNewTab';
import ThemeButton from "./ThemeButton";
import { TwitterLogo, GithubLogo, LinkedinLogo } from 'phosphor-react';
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function HeaderFooter({
  children,
}: {
  children: React.ReactNode
}) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDarkTheme = Boolean(theme === 'dark');

  return (
    <div className="flex min-h-screen flex-col">
      <nav className='flex flex-row pb-4 pt-4 bg-gradient-to-r from-sky-600 to-sky-800 dark:from-seablue dark:to-white'>
        <Link href="/" className={`ml-8 text-3xl dark:text-almost-black text-white font-bold self-center`}>Tessa Breen</Link>
        <div className='flex ml-auto space-x-8 mr-8 items-center'>
          <LinkedinLogo
            alt="linkedin"
            width='35'
            height='35'
            color={isDarkTheme ? 'black' : 'white'}
            onClick={() => openInNewTab('https://linkedin.com/in/tessabreen')}
            className="ml-4"
          />
          <GithubLogo
            alt="github"
            size={32}
            color={isDarkTheme ? 'black' : 'white'}
            fill={isDarkTheme ? 'black' : 'white'}
            onClick={() => openInNewTab('https://github.com/Mynameistessa')}
          />
          <TwitterLogo
            alt="twitter"
            size={32}
            color={isDarkTheme ? 'black' : 'white'}
            onClick={() => openInNewTab('https://twitter.com/mynameistessa3')}
          />
          <ThemeButton />
        </div>
      </nav>
      {children}
      <footer className="text-center lg:text-left mt-auto border-t dark:border-almost-black border-almost-black border-dotted bg-gradient-to-r from-sky-600 to-sky-800 dark:from-seablue dark:to-white">
        <div className="text-white dark:text-almost-black text-center p-4" >
          Copyright © 2023 Tessa Breen | Next.js {packageJson.dependencies.next} & Tailwind Elements
        </div>
      </footer>
    </div>
  )
}