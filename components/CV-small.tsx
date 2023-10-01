"use client";
import React from "react";
import { CVSmallRow } from "./Resume";
import { portfolio } from "./portfolio";

const CV: React.FC = () => {
  return (
    <>
      <div className="flex py-2 justify-center">
        <a href="/CV.pdf" download>
          <button
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            className="justify-self-center rounded bg-brick-red px-2 pt-3 pb-2 text-xs font-medium leading-normal
               text-white transition duration-150 ease-in-out active:bg-brick-red hover:bg-darker-brick">
            Download Resume
          </button>
        </a>
      </div>
      <div className="flex flex-col mt-8">
        {portfolio.map((experience, index) => {
          return (
            <CVSmallRow company={experience.company} role={experience.role} duration={experience.duration}
              description={experience.description} skills={experience.skills} key={index} />
          )
        })}
      </div>
    </>
  )
}

export default CV;