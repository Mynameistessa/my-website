"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from 'next/image';
import { useTheme } from 'next-themes';
import styled from 'styled-components';
import { CaretDown } from 'phosphor-react';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr 1fr 1fr auto;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`;

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
    <div className="flex flex-col cursor-pointer mb-36">

      <div className="min-w-full grid">
        <StyledGrid className="items-center border-b dark:border-platinum-grey border-wood hover:dark:bg-slate-800 hover:bg-warm-yellow">
          <div className="px-6 py-4 whitespace-nowrap text-sm font-medium dark:text-white text-neutral-900">
            <Image
              src={theme === 'dark' ? '/unity-white.png' : '/Unity.png'}
              alt="unity-technologies"
              width='80'
              height='80'
              className="mr-2"
            />
          </div>
          <div className="text-m  dark:text-white text-neutral-900 px-6 py-4 whitespace-nowrap font-bold">
            Front-End Software Engineer
          </div>
          <div>
            <div className="xs:invisible flex dark:text-white text-neutral-900 flex-wrap items-end space-x-2 space-y-2">
              <span className="text-white inline-block whitespace-nowrap rounded-full bg-sky-800 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">Typescript</span>
              <span className="text-white inline-block whitespace-nowrap rounded-full bg-sky-600 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">React</span>
              <span className="text-white inline-block whitespace-nowrap rounded-full bg-lavendar px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">Redux</span>
              <span className="text-white inline-block whitespace-nowrap rounded-full bg-violet-800 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">Redux Toolkit</span>
              <span className="text-white inline-block whitespace-nowrap rounded-full bg-almost-black px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">Node</span>
            </div>
          </div>

          <div className="text-m dark:text-white text-neutral-900 px-6 py-4 sm:py-2 whitespace-nowrap">
            2022 - Present
          </div>
          <div className="float-right mr-4">
            <CaretDown size={32} color={theme === 'dark' ? 'white' : 'black'} onClick={() => setShowSection({ ...showSection, 'unity': !showSection.unity })} />
          </div>
        </StyledGrid>
        <div className={`${showSection.unity === true ? '' : 'hidden'} `}>
          <div className="dark:text-white text-neutral-900 px-2 py-4 whitespace-nowrap text-m">Working on an internal continuous integration system for internal developers.</div>
        </div>
        <StyledGrid className="items-center border-b dark:border-platinum-grey border-wood hover:dark:bg-slate-800 hover:bg-warm-yellow">
          <div className="px-6 py-4 whitespace-nowrap text-m font-medium dark:text-white text-neutral-900">
            <Image
              src={'/newBBC.png'}
              alt="bbc-logo"
              width='80'
              height='80'
              className="mr-2"
            />
          </div>
          <div className="text-m dark:text-white text-neutral-900 px-6 py-4 whitespace-nowrap font-bold">
            Full-Stack Software Engineer
          </div>
          <div>
            <div className="flex dark:text-white text-neutral-900 flex-wrap items-end space-x-2 space-y-2 mb-2">
              <span className="text-white inline-block whitespace-nowrap rounded-full bg-sky-800 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">Typescript</span>
              <span className="text-white inline-block whitespace-nowrap rounded-full bg-sky-600 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">React</span>
              <span className="text-white inline-block whitespace-nowrap rounded-full bg-lavendar px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">Redux</span>
              <span className="text-white inline-block whitespace-nowrap rounded-full bg-almost-black px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">Node</span>
              <span className="text-white inline-block whitespace-nowrap rounded-full bg-peach-orange px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">AWS</span>
              <span className="text-white inline-block whitespace-nowrap rounded-full bg-brick-red px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">Scala</span>
            </div>
          </div>
          <div className="text-m dark:text-white text-neutral-900 px-6 py-4 sm:py-2 whitespace-nowrap">
            2020 - 2022
          </div>
          <div className="float-right mr-4">
            <CaretDown size={32} color={theme === 'dark' ? 'white' : 'black'} onClick={() => setShowSection({ ...showSection, 'bbc': !showSection.bbc })} />
          </div>
        </StyledGrid>
        <div className={`${showSection.bbc === true ? '' : 'hidden'} dark:text-white text-neutral-900`}>
          <div className="text-m whitespace-nowrap px-2 py-4">Building micro-services and internal tools for journalists using Scala, React, Node, GraphQL, Redux, Typescript and AWS.</div>
        </div>
        <StyledGrid className="items-center border-b dark:border-platinum-grey border-wood hover:dark:bg-slate-800 hover:bg-warm-yellow">
          <div className="px-6 py-4 whitespace-nowrap text-m font-medium dark:text-white text-neutral-900">
            <Image
              src={'/dabapps-logo.png'}
              alt="dabapps"
              width='90'
              height='90'
            />
          </div>
          <div className="text-m dark:text-white text-neutral-900 px-6 py-4 whitespace-nowrap font-bold">
            Full-Stack Software Engineer
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
          <div className="text-m dark:text-white text-neutral-900 px-6 py-4 sm:py-2 whitespace-nowrap">
            2020-2021
          </div>
          <div className="float-right mr-4">
            <CaretDown size={32} color={theme === 'dark' ? 'white' : 'black'} onClick={() => setShowSection({ ...showSection, 'dabapps': !showSection.dabapps })} />
          </div>
        </StyledGrid>
        <div className={`${showSection.dabapps === true ? '' : 'hidden'} dark:text-white text-neutral-900 px-2 py-4 whitespace-nowrap text-m`}>
          I worked in an agile team to build webapps for brands such as Centurion, Xperta & Peoplewise.
        </div>
        <StyledGrid className="items-center border-b dark:border-platinum-grey border-wood hover:dark:bg-slate-800 hover:bg-warm-yellow">
          <div className="px-6 py-4 whitespace-nowrap text-lg font-medium dark:text-white text-neutral-900">
            <Image
              src={'/ICL.png'}
              alt="imperial-college-london"
              width='120'
              height='120'
            />
          </div>
          <div className="text-m dark:text-white text-neutral-900 px-6 py-4 whitespace-nowrap font-bold">
            BSc Physics
          </div>
          <div>
            <div className="flex dark:text-white text-neutral-900 flex-wrap items-end space-x-2 space-y-2">
              <span className="text-white inline-block whitespace-nowrap rounded-full bg-green-700 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">Python</span>
              <span className="text-white inline-block whitespace-nowrap rounded-full bg-sky-800 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">Philosophy Society</span>
              <span className="text-white inline-block whitespace-nowrap rounded-full bg-sky-600 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">IC Radio</span>
            </div>
          </div>
          <div className="text-m dark:text-white text-neutral-900 px-6 py-4 sm:py-2 whitespace-nowrap">
            2014 - 2018
          </div>
          <div className="float-right mr-4">
            <CaretDown size={32} color={theme === 'dark' ? 'white' : 'black'} onClick={() => setShowSection({ ...showSection, 'physics': !showSection.physics })} />
          </div>
        </StyledGrid>
        <div className={`${showSection.physics === true ? '' : 'hidden'} dark:text-white text-neutral-900 px-8 py-4 text-m max-w-200 break-words`}>
          <ol className="list-disc max-w-200 break-words">
            <li className="mt-2">Courses included: Classical Mechanics, Environmental Physics, Fluid Dynamics, Quantum Mechanics, Electricity and magnetism, Relativity, Fourier Analysis, Light and Matter and more
            </li>
            <li className="mt-2">Coursework included computing and laboratory modules where I used Python and pandas to derive relationships and transformed data to graph data</li>
            <li className="mt-2">Extracurricular Activities:
              <ol className="list-disc list-inside pl-5 mt-2 space-y-1 ">
                <li>Finalist in the <i>Althea-Imperial programme </i>(now named <a className="underline" href="https://www.imperialenterpriselab.com/we-innovate/">WE Innovate</a>), a 6-month long programme in which I designed a prototype of a device to be fitted to buildings to
                  remove local air pollutants and ultimately competed pitched to judges for £30k funding prize
                </li>
                {/* <li>Business Horizons course</li> */}
                <li>Enrolled in a course titled <i>Conflict, Crime and Justice</i>. This is a highly interdisciplinary course. Achieved first-class for essays on globalisation and the problems regarding the use of genetics in the court room </li>
              </ol>
            </li>
          </ol>
        </div>
      </div>
      <div className="flex space-x-2 py-2 float-right">
        <a href="/CV.pdf" download>
          <button
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            className="font-body inline-block rounded bg-brick-red px-6 pt-3 pb-2 text-xs font-medium leading-normal
               text-white shadow-[0_4px_9px_-4px_#AA4A44] transition duration-150 ease-in-out hover:bg-primary-600
                hover:shadow-[0_8px_9px_-4px_rgba(170,74,68,0.3),0_4px_18px_0_rgba(170,74,68,0.2)] focus:bg-primary-600 
                focus:shadow-[0_8px_9px_-4px_rgba(170,74,68,0.3),0_4px_18px_0_rgba(170,74,68,0.2)] focus:outline-none
                focus:ring-0 active:bg-brick-red active:shadow-[0_8px_9px_-4px_rgba(170,74,68,0.3),0_4px_18px_0_rgba(170,74,68,0.2)]">
            Download Resume
          </button>
        </a>
      </div>
    </div >
  )
}

export default CV;