"use client";
import React, { useEffect } from "react";
import CVLarge from "./CV-large";
import CVSmall from "./CV-small";

const CV: React.FC = () => {
  const [dimensions, setDimensions] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize, false);

    () => {
      window.removeEventListener("resize", handleResize, false);
    };
  }, []);

  return (
    <div>
      {dimensions.width > 600 ? <CVLarge /> : <CVSmall />}
      <div className="text-center space-x-2 py-2 mb-16">
        <a href="/CV.pdf" download>
          <button className="btn border-primary bg-primary hover:bg-amber-400 hover:border-amber-400 text-almost-black">
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default CV;
