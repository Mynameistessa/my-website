"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState, useEffect } from "react";
import packageJson from '../package.json';
import Image from 'next/image';
import { openInNewTab } from '@/utils/openInNewTab';
import { ThemeProvider } from "next-themes"
import ThemeButton from "./theme";
import { TwitterLogo, GithubLogo, LinkedinLogo } from 'phosphor-react';

export default function HeaderFooter({
  children,
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true)
    // const use = async () => {
    //   (await import('tw-elements')).default;
    // };
    // use();
  }, []);

  if (!mounted) {
    return null;
  }

  console.log(theme, 'theme') // undefined

  return (
    <ThemeProvider attribute="class">
      <div className="flex min-h-screen flex-col">
        <div className='flex flex-row pb-4 pt-4 bg-gradient-to-r from-sky-600 to-sky-800 dark:from-seablue dark:to-white'>
          <Link href="/" className={`ml-8 text-3xl dark:text-almost-black text-white font-bold self-center`}>Tessa Breen</Link>
          <div className='flex ml-auto space-x-8 mr-8 items-center'>
            <Link
              data-te-ripple-init
              href="/blog"
              data-te-ripple-color="light"
              className="dark:text-neutral-900 text-white rounded pb-2 pt-2.5 text-lg font-medium leading-normal text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-700">
              Blog
            </Link>
            <LinkedinLogo
              alt="linkedin"
              width='35'
              height='35'
              color={theme === 'dark' ? 'black' : 'white'}
              onClick={() => openInNewTab('https://linkedin.com/in/tessabreen')}
              className="ml-4 "
            />
            <GithubLogo
              alt="github"
              size={32}
              color={theme === 'dark' ? 'black' : 'white'}
              onClick={() => openInNewTab('https://github.com/Mynameistessa')}
            />
            <TwitterLogo
              alt="twitter"
              size={32}
              color={theme === 'dark' ? 'black' : 'white'}
              onClick={() => openInNewTab('https://twitter.com/mynameistessa3')}
            />
            <ThemeButton />
          </div>
        </div>
        {children}
        <footer className="text-center lg:text-left mt-auto border-t dark:border-white border-almost-black border-dotted bg-gradient-to-r from-sky-600 to-sky-800 dark:from-seablue dark:to-white">
          <div className="dark:text-white text-neutral-900 text-center p-4" >
            Copyright © 2023 Tessa Breen | Next.js {packageJson.dependencies.next} & Tailwind Elements
            {/* Copyright © 2023 Tessa Breen | Next.js {packageJson.dependencies.next} & Tailwind Elements{packageJson.dependencies['tw-elements']} */}
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )

}