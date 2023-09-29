"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { CVRow, ExpandedCVRow } from "./Resume";
import { portfolio } from "./portfolio";

export const CVLarge: React.FC = () => {
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
          // <CVRow key={experience.duration} company={experience.company} role={experience.role} duration={experience.duration}
          <ExpandedCVRow key={experience.duration} company={experience.company} role={experience.role} duration={experience.duration} description={experience.description} skills={experience.skills} />
        )
      })}
    </>
  )
}

export default CVLarge;