"use client";
import React from "react";
import { ExpandedCVRow } from "./Resume";
import { portfolio } from "./portfolio";

export const CVLarge: React.FC = () => {
  return (
    <>
      <div className="flex flex-col cursor-pointer ml-auto mb-2">
        <div className="flex flex-row-reverse space-x-2 py-2 float-right gap-1">
          <a href="/CV.pdf" download>
            <button
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              className="rounded bg-brick-red px-2 py-4 text-xs font-bold leading-normal
               text-white transition duration-150 ease-in-out active:bg-brick-red hover:bg-darker-brick">
              Download Resume
            </button>
          </a>
        </div>
      </div>

      {portfolio.map((experience, index) => {
        return (
          <ExpandedCVRow key={experience.duration} company={experience.company}
            role={experience.role} duration={experience.duration}
            description={experience.description} skills={experience.skills} index={index.toString()} />
        )
      })}
    </>
  )
}

export default CVLarge;