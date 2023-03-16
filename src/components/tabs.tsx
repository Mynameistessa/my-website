
import React from "react";
import CV from "../pages/CV";
import styled from 'styled-components';
import styles from '../../styles/Home.module.css'
import Link from "next/link";

const StyledHeader = styled.div`
  display:flex;

`;

const StyledHeading = styled.h1`
  flex-grow: 2;
`;

interface TabsProps {
}

const Tabs: React.FC<TabsProps> = () => {
  return (
    <>
      <div className="flex items-center justify-center ml-4">
        <div className="inline-flex " role="group">
          <Link
            href="/"
            aria-current="page"
            className="
              px-6
              py-2.5
              bg-ivory
              rounded
              font-bold
              text-m
              leading-tight
              // focus:bg-sky-800 focus:outline-none focus:ring-0
              // transition
              // duration-150
              // ease-in-out
              text-sky-800
              dark:bg-ivory
              // active:text-white
              mr-2
            "
          >
            Home
          </Link>
          <Link
            href="/CV"
            className="
              px-6
              py-2.5
              bg-ivory
              text-sky-800
              font-bold
              rounded
              text-m
              leading-tight
              // focus:bg-sky-800 focus:outline-none focus:ring-0
              // transition
              // duration-150
              // ease-in-out
              // active:text-white
              // active:bg-sky-800
              dark:bg-ivory
              mr-2
            "
          >
            CV
          </Link>
          <Link
            href="/music"
            className="
              px-6
              py-2.5
              rounded
            text-sky-800
              font-bold
              text-m
              leading-tight
              // focus:bg-sky-800 focus:outline-none focus:ring-0
              // transition
              // duration-150
              // ease-in-out
              // active:text-white
              // active:bg-sky-800
              bg-ivory
            "
          >
            Interests
          </Link>
        </div>
      </div>
    </>
  )
}

export default Tabs;