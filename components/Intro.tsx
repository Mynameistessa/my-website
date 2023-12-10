"use client";
import Image from 'next/image';
import { ArrowSquareOut } from 'phosphor-react';

const Intro = () => {
  return (
    <div className="md:flex md:flex-cols justify-center text-sm pt-2 border-black rounded mb-16">
      <div className="overflow-hidden px-4 shrink-0 items-center flex flex-col self-center">
        <Image
          src="/me2.jpg"
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
      <p>
        I&apos;m a Software Engineer currently working at{' '}
        <a className='group transition-all duration-300 ease-in-out' target="_blank" rel="noreferrer" href="https://unity.com">
          <u className='bg-left-bottom bg-gradient-to-r dark:from-white dark:to-white 
              from-warm-yellow to-warm-yellow bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] 
              transition-all duration-500 ease-out'>
            Unity Technologies
          </u>
        </a>
        {' '} where I&apos;m focused on building the UI for a scalable continuous integration system and improving user workflows across services.
        In my free time, I engage in Hackathons and pursue various creative interests, including drawing portraits, making music, and immersing myself in nature.
        Check out my blogposts at the bottom of this page where I talk about recent topics I&apos;ve studied in software development and whatever I find interesting.
        For a comprehensive look at my professional journey and past experiences, feel free to download my CV to discover more about my skills and achievements.
      </p>
        {/* <a target="_blank" rel="noreferrer" href="https://www.goodreads.com/tessabreen" className="w-fit group transition-all duration-300 ease-in-out flex items-center">
          <u className='bg-left-bottom bg-gradient-to-r dark:from-white dark:to-white from-warm-yellow to-warm-yellow bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
            Follow me on Goodreads!
          </u>
          <ArrowSquareOut size={20} color={'#FDA769'} className='ml-2' />
        </a> */}
      </div>
    </div>
  )
}

export default Intro