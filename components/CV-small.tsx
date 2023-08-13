"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from 'next/image';
import { useTheme } from 'next-themes';
import styled from 'styled-components';
import { CaretDown } from 'phosphor-react';

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
    <>
      <div className="flex py-2 justify-center">
        <a href="/CV.pdf" download>
          <button
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            className="justify-self-center font-body rounded bg-brick-red px-2 pt-3 pb-2 text-xs font-medium leading-normal
               text-white transition duration-150 ease-in-out active:bg-brick-red hover:bg-darker-brick">
            Download Resume
          </button>
        </a>
      </div>

      <div className="flex flex-col mt-8">
        <div className="flex items-center border-b dark:border-platinum-grey border-wood hover:dark:bg-slate-800 hover:bg-warm-yellow">
          <div className="lg:basis-32 mr-2  whitespace-nowrap text-sm font-medium dark:text-white text-neutral-900">
            <Image
              src={isDarkTheme ? '/unity-white.png' : '/Unity.png'}
              alt="unity-technologies"
              width='70'
              height='70'
              className='max-w-none'
            />
          </div>
          <div className="text-sm basis-72 dark:text-white text-neutral-900  py-4 whitespace-nowrap font-bold">
            Front-End Software Engineer
          </div>
          <div className="text-sm dark:text-white text-neutral-900 whitespace-nowrap ">
            22-<i>Present</i>
          </div>
        </div>
        <div className={`dark:text-white text-neutral-900 px-8 py-4 lg:text-m text-sm max-w-200 break-words`}>
          <ol className="list-disc max-w-200 break-words">
            <li>
              Working on an internal continuous integration system for internal developers
            </li>
          </ol>
          <div className="xs:invisible flex dark:text-white text-neutral-900 flex-wrap items-end space-x-2 space-y-2 mb-4">
            <span className="text-white inline-block whitespace-nowrap rounded-full bg-sky-800 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">Typescript</span>
            <span className="text-white inline-block whitespace-nowrap rounded-full bg-sky-600 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">React</span>
            <span className="text-white inline-block whitespace-nowrap rounded-full bg-lavendar px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">Redux</span>
            <span className="text-white inline-block whitespace-nowrap rounded-full bg-violet-800 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">Redux Toolkit</span>
            <span className="text-white inline-block whitespace-nowrap rounded-full bg-almost-black px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">Node</span>
          </div>
        </div>


        <div className="flex items-center border-b dark:border-platinum-grey border-wood hover:dark:bg-slate-800 hover:bg-warm-yellow">
          <div className="lg:basis-32 mr-2 whitespace-nowrap text-m font-medium dark:text-white text-neutral-900">
            <Image
              src={theme === 'dark' ? '/whitebbcblocks.svg.png' : '/newBBC.png'}
              alt="bbc-logo"
              width='70'
              height='70'
              className='max-w-none'
            />
          </div>
          <div className="text-sm basis-72 dark:text-white text-neutral-900  py-4 whitespace-nowrap font-bold">
            Full-Stack Software Engineer
          </div>
          <div className="text-sm dark:text-white text-neutral-900 whitespace-nowrap ">
            20-22
          </div>
        </div>
        <div className={` dark:text-white text-neutral-900 mb-4 px-8 py-4 lg:text-m text-sm`}>
          <ol className="list-disc max-w-200 break-words">
            <li className="mt-2">Building micro-services and internal tools for journalists using Scala, React, Node, GraphQL, Redux, Typescript and AWS
            </li>
            <li className="mt-2">
              Development of the content management system and rich-text editor
              used by over 6000 journalists worldwide to discover,
              create and curate world-class BBC content for the web,
              mobile, apps and other platforms, most notably the BBC News and BBC Sport site</li>
          </ol>
          <div className="xs:invisible flex dark:text-white text-neutral-900 flex-wrap items-end space-x-2 space-y-2 mb-4">
            <span className="text-white inline-block whitespace-nowrap rounded-full bg-sky-800 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">Typescript</span>
            <span className="text-white inline-block whitespace-nowrap rounded-full bg-sky-600 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">React</span>
            <span className="text-white inline-block whitespace-nowrap rounded-full bg-lavendar px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">Redux</span>
            <span className="text-white inline-block whitespace-nowrap rounded-full bg-almost-black px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">Node</span>
            <span className="text-white inline-block whitespace-nowrap rounded-full bg-peach-orange px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">AWS</span>
            <span className="text-white inline-block whitespace-nowrap rounded-full bg-brick-red px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">Scala</span>
          </div>
        </div>


        <div className="flex items-center border-b dark:border-platinum-grey border-wood hover:dark:bg-slate-800 hover:bg-warm-yellow">
          <div className="lg:basis-32 mr-2 whitespace-nowrap text-m font-medium dark:text-white text-neutral-900">
            <Image
              src={'/dabapps.png'}
              alt="dabapps"
              width='70'
              height='70'
              className='max-w-none'
            />
          </div>
          <div className="text-sm basis-72 dark:text-white text-neutral-900  py-4 whitespace-nowrap font-bold">
            Full-Stack Software Engineer
          </div>

          <div className="text-sm dark:text-white text-neutral-900 whitespace-nowrap">
            20-21
          </div>
        </div>
        <div className={` dark:text-white text-neutral-900 px-8 py-4 lg:text-m text-sm max-w-200 break-words`}>
          <ol className="list-disc max-w-200 break-words">
            <li>
              Building web and mobile apps at an software development agency for business enterprises using Typescript, Javascript, Django and PostgreSQL
              <ol className="list-disc list-inside pl-5 mt-2 space-y-1 ">
                <li>
                  <i>Centurion:</i>A mobile app written in React Native that controls a laboratory centrifuge
                </li>
                <li>
                  <i>Xperta:</i>Building a messaging app to connect legal professionals with expert witnesses
                </li>
                <li>
                  <i>Peoplewise:</i>Award-winning assessment and development programme built to be used by employers
                </li>
              </ol>
            </li>
          </ol>
          <div className="xs:invisible flex dark:text-white text-neutral-900 flex-wrap items-end space-x-2 space-y-2 mb-4">
            <span className="text-white inline-block whitespace-nowrap rounded-full bg-sky-800 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">Typescript</span>
            <span className="text-white inline-block whitespace-nowrap rounded-full bg-sky-600 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">React</span>
            <span className="text-white inline-block whitespace-nowrap rounded-full bg-lavendar px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">Redux</span>
            <span className="text-white inline-block whitespace-nowrap rounded-full bg-almost-black px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">Node</span>
            <span className="text-white inline-block whitespace-nowrap rounded-full bg-green-700 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">Django</span>
          </div>
        </div>


        <div className="flex items-center border-b dark:border-platinum-grey border-wood hover:dark:bg-slate-800 hover:bg-warm-yellow">
          <div className="lg:basis-32 mr-2 whitespace-nowrap text-lg font-medium dark:text-white text-neutral-900">
            <Image
              src={'/ICL.png'}
              alt="imperial-college-london"
              width='80'
              height='80'
              className='max-w-none'
            />
          </div>
          <div className="basis-72 text-sm dark:text-white text-neutral-900  py-4 whitespace-nowrap font-bold">
            BSc Physics
          </div>

          <div className="text-sm dark:text-white text-neutral-900 whitespace-nowrap">
            14-18
          </div>
        </div>
        <div className={` dark:text-white text-neutral-900 px-8 py-4 lg:text-m text-sm max-w-200 break-words`}>
          <ol className="list-disc max-w-200 break-words">
            <li className="mt-2">Courses included <i>Classical Mechanics, Environmental Physics, Fluid Dynamics, Quantum Mechanics, Electricity and Magnetism, Relativity, Fourier Analysis, Light and Matter and more</i>
            </li>
            <li className="mt-2">Coursework included computing and laboratory modules where I used Python to model data and derive known relationships and summarised in reports</li>
            <li className="mt-2">Extracurricular Activities:
              <ol className="list-disc list-inside pl-5 mt-2 space-y-1 ">
                <li>Finalist in the <i>Althea-Imperial programme </i>(now named <a className="underline" href="https://www.imperialenterpriselab.com/we-innovate/">WE Innovate</a>),
                  a 6-month long programme in association
                  with Imperial Enterprise Lab in which I designed a prototype of a device to be fitted to buildings to
                  remove local air pollutants and ultimately competed pitched to judges for funding
                </li>
                {/* <li>Business Horizons course</li> */}
                <li>Enrolled in a course titled <i>Conflict, Crime and Justice</i> and achieved first-class for essays on globalisation and the problems regarding the use of genetics in the court room </li>
              </ol>
            </li>
          </ol>
          <div className="xs:invisible flex dark:text-white text-neutral-900 flex-wrap items-end space-x-2 space-y-2 mb-4">
            <span className="text-white inline-block whitespace-nowrap rounded-full bg-green-700 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">Python</span>
            <span className="text-white inline-block whitespace-nowrap rounded-full bg-byzantium px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">Philosophy Society</span>
            <span className="text-white inline-block whitespace-nowrap rounded-full bg-sky-600 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">IC Radio</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default CV;