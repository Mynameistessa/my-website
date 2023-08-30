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

const CVLarge: React.FC = () => {
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
    console.log(itemToAddRemove, 'item to add remove')
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
      <div className="flex flex-col cursor-pointer ml-auto">
        <div className="flex flex-row-reverse space-x-2 py-2 float-right gap-1">
          <a href="/CV.pdf" download>
            <button
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              className="rounded bg-brick-red px-6 p-2 text-xs font-medium leading-normal
               text-white transition duration-150 ease-in-out active:bg-brick-red hover:bg-darker-brick">
              Download Resume
            </button>
          </a>
          <button className="inline-block text-white btn rounded bg-sky-600 hover:bg-sky-800 px-6 text-xs leading-normal"
            onClick={() => {
              areAllExpandedAndSetAllExpandedOrCollapsed()
            }}>
            {expandedList.length === 0 ? 'Expand' : 'Collapse'} All
          </button>
        </div>
      </div>

      <div className="flex flex-col mt-8">
        <div onClick={() => updateListOnExpandCollapse(Sections.Unity)} className="flex items-center border-b dark:border-platinum-grey border-wood hover:dark:bg-slate-800 hover:bg-warm-yellow">
          <div className="basis-32 sm:px-6 py-2 whitespace-nowrap sm:text-m font-medium dark:text-white text-neutral-900">
            <Image
              src={isDarkTheme ? '/unity-white.png' : '/unity-black.png'}
              alt="unity-technologies"
              width='80'
              height='80'
              className='max-w-none'
            />
          </div>
          <div className="sm:text-m basis-72 dark:text-brick-red text-neutral-900 sm:px-6 sm:py-4 whitespace-nowrap font-bold">
            Front-End Software Engineer
          </div>
          <div className="sm:visible text-m dark:text-platinum-grey text-neutral-900 whitespace-nowrap basis-5 ml-auto lg:mr-8">
            2022 - <i>Present</i>
          </div>
        </div>
        <div className={`${expandedList.includes(Sections.Unity) ? '' : 'hidden'} dark:text-white text-neutral-900 px-8 py-4 text-m max-w-200 break-words`}>
          <ol className="list-disc max-w-200 break-words">
            <li>
              Helping build a world-class, scalable infrastructure for continuous integration used by Unity developers
            </li>
          </ol>
          <div className="xs:invisible flex dark:text-white text-neutral-900 flex-wrap items-end space-x-2 space-y-2 mb-4">
            <span className="text-white inline-block whitespace-nowrap rounded-full bg-sky-800 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">Typescript</span>
            <span className="text-white inline-block whitespace-nowrap rounded-full bg-sky-600 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">React</span>
            <span className="text-white inline-block whitespace-nowrap rounded-full bg-lavendar px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">Redux</span>
            <span className="text-white inline-block whitespace-nowrap rounded-full bg-violet-800 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">Redux Toolkit</span>
            <span className="text-white inline-block whitespace-nowrap rounded-full bg-ash-green px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">Github Actions</span>
            <span className="text-white inline-block whitespace-nowrap rounded-full bg-platinum-grey px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">Node</span>
          </div>
        </div>


        <div onClick={() => {
          updateListOnExpandCollapse(Sections.BBC);
        }} className="flex items-center border-b dark:border-platinum-grey border-wood hover:dark:bg-slate-800 hover:bg-warm-yellow">
          <div className="basis-32 sm:px-6 py-2 whitespace-nowrap sm:text-m font-medium dark:text-white text-neutral-900">
            <Image
              src={theme === 'dark' ? '/whitebbcblocks.svg.png' : '/newBBC.png'}
              alt="bbc-logo"
              width='80'
              height='80'
              className='max-w-none'
            />
          </div>
          <div className="sm:text-m basis-72 dark:text-brick-red text-neutral-900 sm:px-6 sm:py-4 whitespace-nowrap font-bold">
            Full-Stack Software Engineer
          </div>
          <div className="sm:visible text-m dark:text-platinum-grey text-neutral-900 whitespace-nowrap basis-5 ml-auto lg:mr-8">
            2020 - 2022
          </div>
        </div>
        <div className={`${expandedList.includes(Sections.BBC) ? '' : 'hidden'} dark:text-white text-neutral-900 mb-4 px-8 py-4`}>
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
            <span className="text-white inline-block whitespace-nowrap rounded-full bg-platinum-grey px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">Node</span>
            <span className="text-white inline-block whitespace-nowrap rounded-full bg-peach-orange px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">AWS</span>
            <span className="text-white inline-block whitespace-nowrap rounded-full bg-brick-red px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">Scala</span>
          </div>
        </div>


        <div onClick={() => {
          updateListOnExpandCollapse(Sections.DabApps);
        }} className="flex items-center border-b dark:border-platinum-grey border-wood hover:dark:bg-slate-800 hover:bg-warm-yellow">
          <div className="basis-32 sm:px-6 whitespace-nowrap text-m font-medium dark:text-white text-neutral-900">
            <Image
              src={'/dabapps.png'}
              alt="dabapps"
              width='75'
              height='75'
              className='max-w-none'
            />
          </div>
          <div className="sm:text-m basis-72 dark:text-brick-red text-neutral-900 sm:px-6 sm:py-4 whitespace-nowrap font-bold">
            Full-Stack Software Engineer
          </div>

          <div className="sm:visible sm:text-m dark:text-platinum-grey text-neutral-900 whitespace-nowrap sm:basis-5 ml-auto lg:mr-8">
            2020 - 2021
          </div>
        </div>
        <div className={`${expandedList.includes(Sections.DabApps) ? '' : 'hidden'} dark:text-white text-neutral-900 px-8 py-4 text-m max-w-200 break-words`}>
          <ol className="list-disc max-w-200 break-words">
            <li>
              Building web and mobile apps at an software development agency for business enterprises using Typescript, Javascript, Django and PostgreSQL
              <ol className="list-disc list-inside pl-5 mt-2 space-y-1 ">
                <li>
                  <i>Centurion: </i>A mobile app written in React Native that controls a laboratory centrifuge
                </li>
                <li>
                  <i>Xperta: </i>Building a messaging app to connect legal professionals with expert witnesses
                </li>
                <li>
                  <i>Peoplewise: </i>Award-winning assessment and development programme built used by employers
                </li>
              </ol>
            </li>
          </ol>
          <div className="xs:invisible flex dark:text-white text-neutral-900 flex-wrap items-end space-x-2 space-y-2 mb-4">
            <span className="text-white inline-block whitespace-nowrap rounded-full bg-sky-800 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">Typescript</span>
            <span className="text-white inline-block whitespace-nowrap rounded-full bg-sky-600 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">React</span>
            <span className="text-white inline-block whitespace-nowrap rounded-full bg-lavendar px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">Redux</span>
            <span className="text-white inline-block whitespace-nowrap rounded-full bg-platinum-grey px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">Node</span>
            <span className="text-white inline-block whitespace-nowrap rounded-full bg-green-700 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">Django</span>
          </div>
        </div>


        <div onClick={() => {
          updateListOnExpandCollapse(Sections.Physics);
        }} className="flex items-center border-b dark:border-platinum-grey border-wood hover:dark:bg-slate-800 hover:bg-warm-yellow">
          <div className="basis-32 sm:px-6 py-2 whitespace-nowrap sm:text-lg font-medium dark:text-white text-neutral-900">
            <Image
              src={'/ICL.png'}
              alt="imperial-college-london"
              width='85'
              height='85'
              className='max-w-none'
            />
          </div>
          <div className="basis-72 text-m dark:text-brick-red text-neutral-900 sm:px-6 sm:py-4 whitespace-nowrap font-bold">
            BSc Physics
          </div>
          <div className="sm:visible text-m dark:text-platinum-grey text-neutral-900 whitespace-nowrap basis-5 ml-auto lg:mr-8">
            2014 - 2018
          </div>
        </div>
        <div className={`${expandedList.includes(Sections.Physics) ? '' : 'hidden'} dark:text-white text-neutral-900 sm:px-8 sm:py-4 sm:text-m max-w-200 break-words`}>
          <ol className="list-disc max-w-200 break-words">
            <li className="mt-2">Courses included <i>Classical Mechanics, Environmental Physics, Fluid Dynamics, Quantum Mechanics, Electricity and Magnetism, Relativity, Fourier Analysis and Light and Matter</i>
            </li>
            <li className="mt-2">Coursework included computing and laboratory modules where I used Python to model data and derive known relationships before writing a report summarising my findings</li>
            <li className="mt-2">Extracurricular Activities:
              <ol className="list-disc list-inside pl-5 mt-2 space-y-1 ">
                <li>Finalist in the <i>Althea-Imperial programme </i>(now named <a className="underline" href="https://www.imperialenterpriselab.com/we-innovate/">WE Innovate</a>),
                  a 6-month long programme in association
                  with Imperial Enterprise Lab in which I designed a prototype that removes air pollutants and pitched to judges for funding
                </li>
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

export default CVLarge;