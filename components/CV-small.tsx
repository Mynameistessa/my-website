"use client";
import React from "react";
import { CVSmallRow } from "./Resume";
import { portfolio } from "../app/portfolio";

const CV: React.FC = () => {
  return (
    <div className="flex flex-col mt-8">
      {portfolio.map((experience, index) => {
        return (
          <CVSmallRow
            company={experience.company}
            role={experience.role}
            duration={experience.duration}
            description={experience.description}
            skills={experience.skills}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default CV;
