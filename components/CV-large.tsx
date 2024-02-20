"use client";
import React from "react";
import { ExpandedCVRow } from "./Resume";
import { portfolio } from "../app/portfolio";

export const CVLarge: React.FC = () => {
  return (
    <div>
      {portfolio.map((experience, index) => {
        return (
          <ExpandedCVRow
            key={experience.duration}
            company={experience.company}
            role={experience.role}
            duration={experience.duration}
            description={experience.description}
            skills={experience.skills}
            index={index.toString()}
          />
        );
      })}
    </div>
  );
};

export default CVLarge;
