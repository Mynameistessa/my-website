"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CVRow } from "./CV-Card";

const portfolio = [
  {
    company: "Unity Technologies", role: 'Front-End Software Engineer', duration: '2022-Present',
    description: 'Helping build a world-class, scalable infrastructure for continuous integration used by Unity developers',
    skill: ['Typescript', 'React', 'Redux', 'Redux Toolkit', 'Github Actions', 'Node']
  },
  {
    company: "BBC", role: 'Full-Stack Software Engineer', duration: '2020-2022',
    description: `Building micro-services and internal tools for journalists using Scala, React, Node, GraphQL, Redux, Typescript and AWS.
    Development of the content management system and rich-text editor
    used by over 6000 journalists worldwide to discover,
    create and curate world-class BBC content for the web,
    mobile, apps and other platforms, most notably the BBC News and BBC Sport site`,
    skills: ['Typescript', 'React', 'Redux', 'Node', 'AWS', 'Scala']
  },
  {
    company: "Dabapps", role: 'Full-stack Software Engineer', duration: '2018-2020',
    description: `Building web and mobile apps at an software development agency for business enterprises using Typescript, Javascript, Django and PostgreSQL.
    Centurion: A mobile app written in React Native that controls a laboratory centrifuge
    Xperta: Building a messaging app to connect legal professionals with expert witnesses
    Peoplewise: Award-winning assessment and development programme built used by employers
    `,
    skills: ['Typescript', 'React', 'Redux', 'Node', 'Django']
  },
  {
    company: "Imperial College London", role: 'Bsc Physics', duration: '2014-2018',
    description: `Courses included Classical Mechanics, Environmental Physics,
    Fluid Dynamics, Quantum Mechanics, Electricity and Magnetism, Relativity,
    Fourier Analysis and Light and Matter. Coursework included computing and laboratory modules
    where I used Python to model data and derive known relationships before writing a report summarising my findings.
    Finalist in the <i>Althea-Imperial programme (now named WE Innovate),
    a 6-month long programme in association with Imperial Enterprise Lab in which I designed a prototype that removes air pollutants and pitched to judges for funding
    Enrolled in a course titled Conflict, Crime and Justice and achieved first-class for essays on globalisation and the problems regarding the use of genetics in the court room
    `,
    skills: ['Python', 'IC Radio', 'Philosophy Society']
  },
]

const CVLarge: React.FC = () => {
  const [mounted, setMounted] = useState(false);

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
          {/* <button className="inline-block text-white btn rounded bg-sky-600 hover:bg-sky-800 px-6 text-xs leading-normal"
            onClick={() => {
            }}>
            Expand/Collapse All
          </button> */}
        </div>
      </div>

      {portfolio.map((experience) => {
        return (
          <CVRow company={experience.company} role={experience.role} duration={experience.duration}
          />
        )
      })}
    </>
  )
}

export default CVLarge;