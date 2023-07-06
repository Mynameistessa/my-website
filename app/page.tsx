"use client";
import CV from '@/components/CV';
import Image from 'next/image';
import { ArrowSquareOut } from 'phosphor-react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 dark:bg-slate-600 bg-white">
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <div className="grid lg:mb-16">
          <div className='sm:grid lg:flex'>
            <div>
              <div className="overflow-hidden bg-no-repeat bg-cover px-4 sm:mb-4">
                <Image
                  src="/me.jpg"
                  className="rounded-lg"
                  alt="Avatar"
                  width="360"
                  height="300"
                />
                <figcaption className="text-sm text-neutral-600 dark:text-neutral-400">
                  <i>Cornwall &apos;22.</i>
                </figcaption>
              </div>
            </div>
            <div className='dark:text-white text-almost-black max-w-s text-left leading-loose font-body text-lg '>
              <p className='text-xl mb-4 font-body'>Hello!</p>
              <div className='text-base'>
                I&apos;m a Front-End Software Engineer at {' '}
                <a className='group transition-all duration-300 ease-in-out' target="_blank" rel="noreferrer" href="https://unity.com">
                  <span className='bg-left-bottom bg-gradient-to-r dark:from-white dark:to-white from-warm-yellow to-warm-yellow bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                    Unity Technologies
                  </span>
                </a>
                {' '} building an in-house continuous integration system for internal developers.
                <p className='font-body'>I enjoy solving problems and working with great people along the way.</p>
                <div className='mt-4'>
                  <p>In my spare time I take part in hackathons. I also like to draw portraits, make music and get out amongst nature.</p>
                </div>
                <div className='mt-4'>
                  <p>Check out my blog for my latest posts where I talk about recent topics I&apos;ve studied in software development and whatever I find interesting.</p>
                  <br />
                  <a target="_blank" rel="noreferrer" href="https://www.goodreads.com/tessabreen" className="group transition-all duration-300 ease-in-out flex items-center">
                    <span className=' bg-left-bottom bg-gradient-to-r dark:from-white dark:to-white from-warm-yellow to-warm-yellow bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                      Currently reading: <i>A Life in Parts by Bryan Cranston</i>
                    </span>
                    <ArrowSquareOut size={20} color={'#FDA769'} className='ml-2' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CV />
    </main>
  )
}