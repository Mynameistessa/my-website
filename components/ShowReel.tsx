"use client";
import Image from "next/image";
import { experiences } from "./portfolio";
import { useState } from "react";

const ShowReel = () => {
  // Set a fixed height for all images
  const fixedHeight = 200;
  const [photoDescription, setPhotoDescription] = useState<string | null>(null);

  return (
    <>
      <div className="flex gap-4 justify-center">
        {experiences.map((experience, index) => {
          // Calculate the width based on the fixed height and the aspect ratio
          const width = fixedHeight * experience.aspectRatio;

          return (
            <div
              key={index}
              className=" items-center"
              onClick={() => setPhotoDescription(experience.description)}
            >
              <Image
                src={`/${experience.pathToImage}`}
                alt={`${experience.title}`}
                width={width}
                height={fixedHeight}
                className="object-contain inset-0 bg-cover bg-center z-0 hover:drop-shadow-lg" // This will ensure the image fits within the dimensions without stretching or cropping
              />
            </div>
          );
        })}
      </div>
      <div className="hidden md:flex justify-center w-full mb-16 mt-2">
        <caption className={`italic text-xs w-1/2 break-words text-stone-500`}>
          {photoDescription}
        </caption>
      </div>
    </>
  );
};

export default ShowReel;
