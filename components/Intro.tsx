"use client";
import Image from 'next/image';
import { ArrowSquareOut } from 'phosphor-react';

const Intro = () => {
  return <div className="flex z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
    <div className="grid mb-2">
      <div className='lg:flex'>
        <div className="overflow-hidden bg-no-repeat bg-cover px-4 mb-4 shrink-0 ">
          <Image
            src="/me.jpg"
            className="rounded-lg"
            alt="Avatar"
            width="360"
            height="300"
            priority
          />
          <figcaption className="text-sm text-neutral-600 dark:text-neutral-400">
            <i>Cornwall &apos;22.</i>
          </figcaption>
        </div>
        <div className='dark:text-white text-almost-black max-w-s lg:text-left leading-loose text-lg text-justify'>
          <h2 className='text-2xl mb-4 font-bold'>Hello!</h2>
          <div className='text-base'>
            I&apos;m a Front-End Software Engineer at {' '}
            <a className='group transition-all duration-300 ease-in-out' target="_blank" rel="noreferrer" href="https://unity.com">
              <u className='bg-left-bottom bg-gradient-to-r dark:from-white dark:to-white from-warm-yellow to-warm-yellow bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                Unity Technologies
              </u>
            </a>
            {' '} building an in-house continuous integration system for internal developers.
            <div className='mt-4'>
              <p>In my spare time I take part in Hackathons. I also like to draw portraits, make music and get out amongst nature.</p>
            </div>
            <a target="_blank" rel="noreferrer" href="https://www.goodreads.com/tessabreen" className="w-fit group transition-all duration-300 ease-in-out flex items-center">
              <u className='bg-left-bottom bg-gradient-to-r dark:from-white dark:to-white from-warm-yellow to-warm-yellow bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                Follow me on Goodreads!
              </u>
              <ArrowSquareOut size={20} color={'#FDA769'} className='ml-2' />
            </a>
            <div className='mt-4'>
              <p>Check out my blogposts at the bottom of this page where I talk about recent topics I&apos;ve studied in software development and whatever I find interesting.</p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default Intro