"use client";
import Image from 'next/image';
import { ArrowSquareOut } from 'phosphor-react';

const Intro = () => {
  return (
    <div className="md:flex md:flex-cols justify-center text-sm pt-2 border-black rounded mb-16">
      <div className="overflow-hidden px-4 shrink-0 items-center flex flex-col">
        <Image
          src="/me.jpg"
          className="rounded-lg"
          alt="Avatar"
          width="200"
          height="400"
          priority
        />
        <figcaption className="text-sm text-neutral-600 dark:text-neutral-400">
          <i>Cornwall &apos;22.</i>
        </figcaption>
      </div>
      <div className='md:w-2/4 text-base dark:text-white text-almost-black lg:text-left md:leading-loose text-justify h-full'>
        <h2 className='md:text-2xl font-bold'>Hello!</h2>
        I&apos;m a Software Engineer currently working at {' '}
        <a className='group transition-all duration-300 ease-in-out' target="_blank" rel="noreferrer" href="https://unity.com">
          <u className='bg-left-bottom bg-gradient-to-r dark:from-white dark:to-white 
              from-warm-yellow to-warm-yellow bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] 
              transition-all duration-500 ease-out'>
            Unity Technologies
          </u>
        </a>
        {' '} where I&apos;m building the UI for an in-house continuous integration system for Unity developers.
        <p>In my spare time I take part in Hackathons. I also like to draw portraits, make music and get out amongst nature.</p>
        <a target="_blank" rel="noreferrer" href="https://www.goodreads.com/tessabreen" className="w-fit group transition-all duration-300 ease-in-out flex items-center">
          <u className='bg-left-bottom bg-gradient-to-r dark:from-white dark:to-white from-warm-yellow to-warm-yellow bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
            Follow me on Goodreads!
          </u>
          <ArrowSquareOut size={20} color={'#FDA769'} className='ml-2' />
        </a>
        <p>Check out my blogposts at the bottom of this page where I talk about recent topics I&apos;ve studied in software development and whatever I find interesting.</p>
      </div>
    </div>
  )
}

export default Intro