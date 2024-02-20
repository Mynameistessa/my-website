"use client";
import Image from "next/image";
import { experiences } from "../app/portfolio";
import { useEffect, useState } from "react";
import { useAnimate, stagger, motion } from "framer-motion";

const ShowReel = () => {
  const fixedHeight = 200;
  const [photoDescription, setPhotoDescription] = useState<string | null>(null);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate("div", { opacity: 1 }, { delay: stagger(0.3) });
  }, []);

  return (
    <>
      <div className="flex gap-4 justify-center" ref={scope}>
        {experiences.map((experience, index) => {
          const width = fixedHeight * experience.aspectRatio;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              className="items-center showreel"
              onClick={() => setPhotoDescription(experience.description)}
            >
              <Image
                src={`/${experience.pathToImage}`}
                alt={`${experience.title}`}
                width={width}
                height={fixedHeight}
                className="object-contain inset-0 bg-cover bg-center z-0 hover:drop-shadow-lg"
              />
            </motion.div>
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
