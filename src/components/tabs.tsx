
import React from "react";
import CV from "../pages/CV";
import styled from 'styled-components';
import styles from '../../styles/Home.module.css'
import Home from "./home";

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
      <div className="flex items-center justify-center">
        <div className="inline-flex " role="group">
          <a
            href="/home"
            aria-current="page"
            className="
              px-6
              py-2.5
              bg-blue-800
              rounded
              font-bold
              text-m
              leading-tight
              focus:bg-sky-800 focus:outline-none focus:ring-0
              transition
              duration-150
              ease-in-out
              text-seablue
              dark:text-navy
              bg-sky-600
              hover:text-white
              hover:dark:text-white
              hover:bg-sky-900
              active:text-white
              dark:bg-soft-blue
              mr-2
            "
          >
            Home
          </a>
          <a
            href="/CV"
            className="
              px-6
              py-2.5
              bg-blue-600
              text-seablue
              font-bold
              rounded
              text-m
              leading-tight
              focus:bg-sky-800 focus:outline-none focus:ring-0
              transition
              duration-150
              ease-in-out
              dark:text-navy
              bg-sky-600
              hover:text-white
              hover:dark:text-white
              hover:bg-sky-900
              active:text-white
              active:bg-sky-800
              dark:bg-soft-blue
              mr-2
            "
          >
            CV
          </a>
          <a
            href="/music"
            className="
              px-6
              py-2.5
              bg-blue-600
              rounded
              dark:text-navy text-seablue
              font-bold
              text-m
              leading-tight
              focus:bg-sky-800 focus:outline-none focus:ring-0
              transition
              duration-150
              ease-in-out
              bg-sky-600
              hover:text-white
              hover:bg-sky-900
              hover:dark:text-white
              active:text-white
              active:bg-sky-800
              dark:bg-soft-blue
            "
          >
            Interests
          </a>
        </div>
      </div>
    </>
  )
}

export default Tabs;