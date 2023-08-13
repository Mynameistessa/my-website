"use client";
import React, { useContext, useEffect, useState } from "react";
import styled from 'styled-components';
import CVLarge from "./CV-large";
import CVSmall from "./CV-small";

const StyledGrid = styled.div`
  display: grid;

  // @media only screen and (min-width: 1000px) {
  //   grid-template-columns: 400px 475px 1fr 1fr;
  // }

  // @media only screen and (max-width: 850px) {
  //   grid-template-columns: 200px 275px 1fr 1fr;
  // }
`;

enum Sections {
  Unity = "unity",
  BBC = "bbc",
  DabApps = "dabapps",
  Physics = "physics",
}

const CV: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null;
  }

  let width = window.innerWidth;

  console.log(width, 'width?')
  return (
    <>

      {width > 700 ? (
        <CVLarge />
      ) : (
        <CVSmall />
      )}
    </>
  )
}

export default CV;