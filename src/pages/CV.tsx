
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { useTheme } from 'next-themes';
import styled from 'styled-components';

// make more responsive later
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr auto;

  // lg:grid-cols-5 sm:grid-cols-2
`

const CV: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [showSection, setShowSection] = useState({ 'unity': true, 'bbc': false, 'physics': false, 'dabapps': false });
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null;
  }

  return (
    // <Layout>
    <div className="m-8">
      {/* <div className="flex flex-row-reverse m-4 cursor-pointer">
        <Image
          src={theme === 'dark' ? '/linkedin-white.svg' : '/linkedin.svg'}
          alt="linkedin"
          width='45'
          height='45'
          onClick={() => openInNewTab('https://linkedin.com/in/tessabreen')}
          className="ml-4 cursor-pointer"
        />
        <Image
          src={theme === 'dark' ? '/github-white.svg' : '/github.svg'}
          alt="linkedin"
          width='45'
          height='45'
          onClick={() => openInNewTab('https://github.com/Mynameistessa')}
          className="cursor-pointer"
        />
      </div> */}
      <div className="flex flex-col cursor-pointer mb-36">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <div className="min-w-full grid">
                {/* <div onClick={() => setShowSection({ ...showSection, 'unity': !showSection.unity })} className="grid lg:grid-cols-5 sm:grid-cols-2 items-center border-b dark:border-platinum-grey border-wood hover:dark:bg-almost-black hover:bg-warm-yellow"> */}
                <StyledGrid onClick={() => setShowSection({ ...showSection, 'unity': !showSection.unity })} className="items-center border-b dark:border-platinum-grey border-wood hover:dark:bg-almost-black hover:bg-warm-yellow">
                  <div className="px-6 py-4 whitespace-nowrap text-sm font-medium dark:text-white text-neutral-900">
                    <Image
                      src={theme === 'dark' ? '/unity-white.png' : '/Unity.png'}
                      alt="unity-technologies"
                      width='80'
                      height='80'
                      className="mr-2"
                    />
                  </div>
                  <div>
                    <div className="flex dark:text-white text-neutral-900 flex-wrap items-end space-x-2 space-y-2">
                      <span className="text-white inline-block whitespace-nowrap rounded-full bg-sky-800 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">Typescript</span>
                      <span className="text-white inline-block whitespace-nowrap rounded-full bg-sky-600 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">React</span>
                      <span className="text-white inline-block whitespace-nowrap rounded-full bg-lavendar px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">Redux</span>
                    </div>
                  </div>
                  <div className="text-m  dark:text-white text-neutral-900 px-6 py-4 whitespace-nowrap font-bold">
                    Front-End Software Engineer
                  </div>
                  <div className="text-m dark:text-white text-neutral-900 px-6 py-4 sm:py-2 whitespace-nowrap">
                    2022 - Present
                  </div>
                  <div className="float-right mr-4">
                    <Image src={theme === 'dark' ? '/down-chevron-white.svg' : '/down-chevron.svg'} alt='expand section' width='20' height='20' />
                  </div>
                </StyledGrid>
                <div className={`${showSection.unity === true ? '' : 'hidden'} `}>
                  <div className="dark:text-white text-neutral-900 px-2 py-4 whitespace-nowrap text-m">Working on an internal continuous integration system.</div>
                </div>
                <StyledGrid onClick={() => setShowSection({ ...showSection, 'bbc': !showSection.bbc })} className="items-center border-b dark:border-platinum-grey border-wood hover:dark:bg-almost-black hover:bg-warm-yellow">
                  <div className="px-6 py-4 whitespace-nowrap text-m font-medium dark:text-white text-neutral-900">
                    <Image
                      src={'/BBC.svg'}
                      alt="bbc-logo"
                      width='80'
                      height='80'
                      className="mr-2"
                    />
                  </div>
                  <div>
                    <div className="flex dark:text-white text-neutral-900 flex-wrap items-end space-x-2 space-y-2 mb-2">
                      <span className="text-white inline-block whitespace-nowrap rounded-full bg-sky-800 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">Typescript</span>
                      <span className="text-white inline-block whitespace-nowrap rounded-full bg-sky-600 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">React</span>
                      <span className="text-white inline-block whitespace-nowrap rounded-full bg-lavendar px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">Redux</span>
                      <span className="text-white inline-block whitespace-nowrap rounded-full bg-almost-black px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">Node</span>
                      <span className="text-white inline-block whitespace-nowrap rounded-full bg-warm-yellow px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">AWS</span>
                      <span className="text-white inline-block whitespace-nowrap rounded-full bg-brick-red px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">Scala</span>
                    </div>
                  </div>
                  <div className="text-m dark:text-white text-neutral-900 px-6 py-4 whitespace-nowrap font-bold">
                    Full-Stack Software Engineer
                  </div>
                  <div className="text-m dark:text-white text-neutral-900 px-6 py-4 sm:py-2 whitespace-nowrap">
                    2020 - 2022
                  </div>
                  <div className="float-right mr-4">
                    <Image src={theme === 'dark' ? '/down-chevron-white.svg' : '/down-chevron.svg'} alt='expand section' width='20' height='20' />
                  </div>
                </StyledGrid>
                <div className={`${showSection.bbc === true ? '' : 'hidden'} dark:text-white text-neutral-900`}>
                  <div className="text-m whitespace-nowrap px-2 py-4">Building micro-services and internal tools for journalists using Scala, React, Node, GraphQL, Redux, Typescript and AWS.</div>
                </div>
                <StyledGrid onClick={() => setShowSection({ ...showSection, 'dabapps': !showSection.dabapps })} className="items-center border-b dark:border-platinum-grey border-wood hover:dark:bg-almost-black hover:bg-warm-yellow">
                  <div className="px-6 py-4 whitespace-nowrap text-lg font-medium dark:text-white text-neutral-900">
                    <Image
                      src={'/dabapps-logo.png'}
                      alt="dabapps"
                      width='110'
                      height='110'
                    />
                  </div>
                  <div>
                    <div className="flex dark:text-white text-neutral-900 flex-wrap items-end space-x-2 space-y-2">
                      <span className="text-white inline-block whitespace-nowrap rounded-full bg-sky-800 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">Typescript</span>
                      <span className="text-white inline-block whitespace-nowrap rounded-full bg-sky-600 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">React</span>
                      <span className="text-white inline-block whitespace-nowrap rounded-full bg-lavendar px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">Redux</span>
                      <span className="text-white inline-block whitespace-nowrap rounded-full bg-almost-black px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">Node</span>
                      <span className="text-white inline-block whitespace-nowrap rounded-full bg-green-700 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">Django</span>
                    </div>
                  </div>
                  <div className="text-m dark:text-white text-neutral-900 px-6 py-4 whitespace-nowrap font-bold">
                    Full-Stack Software Engineer
                  </div>
                  <div className="text-m dark:text-white text-neutral-900 px-6 py-4 sm:py-2 whitespace-nowrap">
                    2020-2021
                  </div>
                  <div className="float-right mr-4">
                    <Image src={theme === 'dark' ? '/down-chevron-white.svg' : '/down-chevron.svg'} alt='expand section' width='20' height='20' />
                  </div>
                </StyledGrid>
                <div className={`${showSection.dabapps === true ? '' : 'hidden'} dark:text-white text-neutral-900 `}>
                  <td className="dark:text-white text-neutral-900 px-2 py-4 whitespace-nowrap text-m">I worked in an agile team to build webapps for brands such as Centurion, Xperta & Peoplewise.</td>
                </div>
                <StyledGrid onClick={() => setShowSection({ ...showSection, 'physics': !showSection.physics })} className="items-center border-b dark:border-platinum-grey border-wood hover:dark:bg-almost-black hover:bg-warm-yellow">
                  <div className="px-6 py-4 whitespace-nowrap text-lg font-medium dark:text-white text-neutral-900">
                    <Image
                      src={'/ICL.png'}
                      alt="imperial-college-london"
                      width='120'
                      height='120'
                    />
                  </div>
                  <div>
                    <div className="flex dark:text-white text-neutral-900 flex-wrap items-end space-x-2 space-y-2">
                      <span className="text-white inline-block whitespace-nowrap rounded-full bg-sky-800 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">Philosophy Society</span>
                      <span className="text-white inline-block whitespace-nowrap rounded-full bg-sky-600 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">IC Radio</span>
                    </div>
                  </div>
                  <div className="text-m dark:text-white text-neutral-900 px-6 py-4 whitespace-nowrap font-bold">
                    BSc Physics
                  </div>
                  <div className="text-m dark:text-white text-neutral-900 px-6 py-4 sm:py-2 whitespace-nowrap">
                    2014 - 2018
                  </div>
                  <div className="float-right mr-4">
                    <Image src={theme === 'dark' ? '/down-chevron-white.svg' : '/down-chevron.svg'} alt='expand section' width='20' height='20' />
                  </div>
                </StyledGrid>
                <div className={`${showSection.physics === true ? '' : 'hidden'} dark:text-white text-neutral-900 `}>
                  <td className="dark:text-white text-neutral-900 px-2 py-4 whitespace-nowrap text-m">I started studying physics with theoretical physics before switching to physics.</td>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="/CV.pdf" download>
          <div className="flex space-x-2 float-right">
            <button
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              className="inline-block rounded bg-brick-red px-6 pt-3 pb-2 text-xs font-medium leading-normal
               text-white shadow-[0_4px_9px_-4px_#AA4A44] transition duration-150 ease-in-out hover:bg-primary-600
                hover:shadow-[0_8px_9px_-4px_rgba(170,74,68,0.3),0_4px_18px_0_rgba(170,74,68,0.2)] focus:bg-primary-600 
                focus:shadow-[0_8px_9px_-4px_rgba(170,74,68,0.3),0_4px_18px_0_rgba(170,74,68,0.2)] focus:outline-none
                focus:ring-0 active:bg-brick-red active:shadow-[0_8px_9px_-4px_rgba(170,74,68,0.3),0_4px_18px_0_rgba(170,74,68,0.2)]">
              Download Resume
            </button>
          </div>
        </a>
      </div >
      {/* <div className="dark:text-white text-neutral-900 ml-4 mt-8">What I am passionate about: solving problems creatively. Effective communication.</div> */}
      {/* <div className="dark:text-white text-neutral-900 ml-4 mt-8">Photos from work</div> */}
      {/* // </Layout > */}
    </div>
  )
}

export default CV;