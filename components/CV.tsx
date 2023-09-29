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
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize, false);

    () => {
      window.removeEventListener("resize", handleResize, false)
    }
  }, []);

  return (
    dimensions.width > 600 ? (
      <CVLarge />)
      : (
        <CVSmall />
      )
  )
}

export default CV;