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

enum Sections {
  Unity = "unity",
  BBC = "bbc",
  DabApps = "dabapps",
  Physics = "physics",
}

const CV: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [showExpandAll, setShowExpandAll] = useState(false);
  const [expandedList, setExpandedList] = useState<Array<string>>([Sections.Unity]);
  const totalSections = 4

  const areAllExpandedAndSetAllExpandedOrCollapsed = () => {
    if (expandedList.length === totalSections) {
      setExpandedList([])
      return setShowExpandAll(false)
    }
    if (expandedList.length === 0) {
      setExpandedList(['unity', 'physics', 'bbc', 'dabapps'])
      return setShowExpandAll(true);
    }
    if (expandedList.length !== 0) {
      setExpandedList([])
      return setShowExpandAll(false)
    }
  }

  const updateListOnExpandCollapse = (itemToAddRemove: string) => {
    if (expandedList.includes(itemToAddRemove)) {
      return setExpandedList(expandedList.filter(item => item !== itemToAddRemove, itemToAddRemove))
    } else {
      setExpandedList(expandedList.concat(itemToAddRemove));
    }
  }

  const isDarkTheme = theme === 'dark';

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col cursor-pointer mb-36">
      <div className="flex flex-row-reverse space-x-2 py-2 float-right gap-1">
        <a href="/CV.pdf" download>
          <button
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            className="font-body rounded bg-brick-red px-6 pt-3 pb-2 text-xs font-medium leading-normal
               text-white transition duration-150 ease-in-out active:bg-brick-red hover:bg-darker-brick">
            Download Resume
          </button>
        </a>
        <button className="font-body inline-block text-white btn rounded bg-sky-600 hover:bg-sky-800 px-6 text-xs leading-normal"
          onClick={() => {
            areAllExpandedAndSetAllExpandedOrCollapsed()

          }}>
          {expandedList.length === 0 ? 'Expand' : 'Collapse'} All
        </button>
      </div>

      <div className="min-w-full grid">
        <StyledGrid className="items-center border-b dark:border-platinum-grey border-wood hover:dark:bg-slate-800 hover:bg-warm-yellow">
          <div className="px-6 py-4 whitespace-nowrap text-sm font-medium dark:text-white text-neutral-900">
            <Image
              src={isDarkTheme ? '/unity-white.png' : '/Unity.png'}
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
            <CaretDown size={32} color={isDarkTheme ? 'white' : 'black'}
              onClick={() => {
                updateListOnExpandCollapse(Sections.Unity);
              }
              }
            />
          </div>
        </StyledGrid>
        <div className={`${expandedList.includes(Sections.Unity) ? '' : 'hidden'} `}>
          <div className="dark:text-white text-neutral-900 px-2 py-4 whitespace-nowrap text-m">Working on an internal continuous integration system for internal developers</div>
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
            <CaretDown size={32} color={isDarkTheme ? 'white' : 'black'}
              onClick={() => {
                updateListOnExpandCollapse(Sections.BBC);
              }
              }
            />
          </div>
        </StyledGrid>
        <div className={`${expandedList.includes(Sections.BBC) ? '' : 'hidden'} dark:text-white text-neutral-900`}>
          <div className="text-m whitespace-nowrap px-2 py-4">Building micro-services and internal tools for journalists using Scala, React, Node, GraphQL, Redux, Typescript and AWS</div>
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
            <CaretDown size={32} color={isDarkTheme ? 'white' : 'black'}
              onClick={() => {
                updateListOnExpandCollapse(Sections.DabApps);
              }
              } />
          </div>
        </StyledGrid>
        <div className={`${expandedList.includes(Sections.DabApps) ? '' : 'hidden'} dark:text-white text-neutral-900 px-2 py-4 whitespace-nowrap text-m`}>
          I worked in an agile team to build webapps for brands such as Centurion, Xperta & Peoplewise
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
            <CaretDown size={32} color={isDarkTheme ? 'white' : 'black'}
              onClick={() => {
                updateListOnExpandCollapse(Sections.Physics);
              }
              }
            />
          </div>
        </StyledGrid>
        <div className={`${expandedList.includes(Sections.Physics) ? '' : 'hidden'} dark:text-white text-neutral-900 px-8 py-4 text-m max-w-200 break-words`}>
          <ol className="list-disc max-w-200 break-words">
            <li className="mt-2">Courses included: <i>Classical Mechanics, Environmental Physics, Fluid Dynamics, Quantum Mechanics, Electricity and magnetism, Relativity, Fourier Analysis, Light and Matter and more</i>
            </li>
            <li className="mt-2">Coursework included computing and laboratory modules where I used Python to model data and derive known relationships and summarised in reports</li>
            <li className="mt-2">Extracurricular Activities:
              <ol className="list-disc list-inside pl-5 mt-2 space-y-1 ">
                <li>Finalist in the <i>Althea-Imperial programme </i>(now named <a className="underline" href="https://www.imperialenterpriselab.com/we-innovate/">WE Innovate</a>), a 6-month long programme in which I designed a prototype of a device to be fitted to buildings to
                  remove local air pollutants and ultimately competed pitched to judges for funding
                </li>
                {/* <li>Business Horizons course</li> */}
                <li>Enrolled in a course titled <i>Conflict, Crime and Justice</i> and achieved first-class for essays on globalisation and the problems regarding the use of genetics in the court room </li>
              </ol>
            </li>
          </ol>
        </div>
      </div>
    </div >
  )
}

export default CV;