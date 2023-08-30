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
    <div className="flex min-h-screen flex-col bg-white dark:bg-sky-900">
      <nav className='sticky top-0 backdrop-blur-md flex flex-row pb-4 pt-4 bg-transparent border-almost-black border-b-2 dark:border-warm-yellow'>
        <Link href="/" className={`ml-8 text-3xl text-almost-black dark:text-white font-bold self-center`}>Tessa Breen</Link>
        <div className='flex ml-auto lg:space-x-8 space-x-2 mr-2 lg:mr-8 items-center'>
          <LinkedinLogo
            alt="linkedin"
            width='35'
            height='35'
            color={!isDarkTheme ? 'black' : 'white'}
            onClick={() => openInNewTab('https://linkedin.com/in/tessabreen')}
          />
          <GithubLogo
            alt="github"
            size={32}
            color={!isDarkTheme ? 'black' : 'white'}
            fill={!isDarkTheme ? 'black' : 'white'}
            onClick={() => openInNewTab('https://github.com/Mynameistessa')}
          />
          <TwitterLogo
            alt="twitter"
            size={32}
            color={!isDarkTheme ? 'black' : 'white'}
            onClick={() => openInNewTab('https://twitter.com/tessabreendev')}
          />
          <ThemeButton />
        </div>
      </nav>
      {children}
      <footer className="text-center lg:text-left mt-auto border-t dark:border-almost-black border-almost-black border-dotted bg-gradient-to-r bg-sky-900">
        <div className="text-white text-center p-4" >
          Copyright © 2023 Tessa Breen | Next.js {packageJson.dependencies.next} & Tailwind Elements
        </div>
      </footer>
    </div>
  )
}