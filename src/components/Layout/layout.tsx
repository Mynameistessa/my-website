import Image from 'next/image'
import React, { useState } from 'react';
import { useEffect } from 'react'
import { useTheme } from 'next-themes';

import Tabs from '../tabs';
import styled from 'styled-components';
import ThemeButton from '../theme'
import styles from '../../../styles/Home.module.css'
import Head from 'next/head';
import { openInNewTab } from '../../utils/newtab';

const StyledHeading = styled.h1`
  flex-grow: 2;
`;

type LayoutProps = {
  children: React.ReactNode,
};

const Layout = ({ children }: LayoutProps): JSX.Element | null => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true)
    const use = async () => {
      (await import('tw-elements')).default;
    };
    use();
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Tessa Breen</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/close-clover.png" />
      </Head>
      <div className={styles.main}>
        <div className='flex flex-row items-center border-b-4 justify-between dark:border-soft-blue border-pesto pb-2 pt-4 bg-sky-800'>
          <Tabs />
          <StyledHeading className={`text-3xl dark:text-dolphin-blue text-white text-center font-bold justify-self-center`}>Tessa Breen</StyledHeading>
          <div className='flex flex-none space-x-2'>
            <Image
              src={theme === 'dark' ? '/youtube-soft-blue.svg' : '/youtube-white.svg'}
              alt="youtube"
              width='50'
              height='50'
              className='cursor-pointer '
              onClick={() => openInNewTab('https://www.youtube.com/channel/UCb3YyYMUP9ViwoAnhZStVkA')}
            />
            <Image
              src={theme === 'dark' ? '/instagram-soft-blue.svg' : '/instagram-white.svg'}
              alt="instagram"
              width='40'
              height='40'
              className='cursor-pointer'
              onClick={() => openInNewTab('https://www.instagram.com/tessabreen1994/')}
            />
            <Image
              src={theme === 'dark' ? '/twitter-soft-blue.svg' : '/twitter-white.svg'}
              alt="twitter"
              width='40'
              height='40'
              className='cursor-pointer'
              onClick={() => openInNewTab('https://twitter.com/mynameistessa3')}
            />
            <ThemeButton />
          </div>
        </div>
        {children}
        <footer className="text-center font-light lg:text-left mt-auto border-t dark:border-soft-blue border-neutral-900 border-dotted">
          <div className="dark:text-white text-neutral-900 text-center p-4" >
            Copyright © 2023 Tessa Breen | Next.js v13.1.1 & Tailwind Elements v1.0.0-alpha13
          </div>
        </footer>
      </div>
    </>
  )
}

export default Layout;