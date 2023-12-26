import Image from "next/image";
import { experiences } from "./portfolio";

const ShowReel = () => {
  // Set a fixed height for all images
  const fixedHeight = 200;

  return (
    <div className="flex mb-16 gap-4 justify-center">
      {experiences.map((experience, index) => {
        // Calculate the width based on the fixed height and the aspect ratio
        const width = fixedHeight * experience.aspectRatio;

        return (
          <div key={index} className="flex items-center">
            <Image
              src={`/${experience.pathToImage}`}
              alt={`${experience.title}`}
              width={width}
              height={fixedHeight}
              className="contain" // This will ensure the image fits within the dimensions without stretching or cropping
            />
          </div>
        );
      })}
    </div>
  );
};

export default ShowReel;
