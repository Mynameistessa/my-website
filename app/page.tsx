import CV from '@/components/CV'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 dark:bg-emerald-950 bg-slate-400">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="grid m-8 lg:mb-24">
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
                  <i>Cornwall '22.</i>
                </figcaption>
              </div>
            </div>
            <div className='dark:text-white text-almost-black max-w-s text-left leading-loose '>
              <p className='text-lg mb-4 '>Hello, I'm Tessa!</p>
              I'm a Front-End Software Engineer at {' '}
              <a className='group transition-all duration-300 ease-in-out' target="_blank" rel="noreferrer" href="https://unity.com">
                <span className='bg-left-bottom bg-gradient-to-r dark:from-white dark:to-white from-warm-yellow to-warm-yellow bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                  Unity Technologies
                </span>
              </a>
              {' '} building an in-house continuous integration system for internal developers.
              <br />
              <p className=''>I enjoy solving problems and working with great people along the way.</p>
              <p>In my spare time I draw portraits, make music and like to get out and see nature.</p>
              <p>Check out my blog for my latest posts where I talk about recent topics I've studied in software development and whatever I find interesting.</p>
              <a target="_blank" rel="noreferrer" href="https://www.goodreads.com/tessabreen" className="group transition-all duration-300 ease-in-out">
                <span className='bg-left-bottom bg-gradient-to-r dark:from-white dark:to-white from-warm-yellow to-warm-yellow bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                  Currently reading
                </span>
              </a>: A Life in Parts by Bryan Cranston
            </div>
          </div></div>
      </div>
      <CV />
    </main>
  )
}
