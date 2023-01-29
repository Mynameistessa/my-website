import React, { useEffect, useState } from "react";
import { useTheme } from 'next-themes';
import Image from 'next/image';
import styled from 'styled-components';
import Contents from "./dropdown";

const StyledButton = styled.button`
  // margin-right: 0;
  // margin-left: auto;
  flex-direction: row-reverse;
`;

const StyledContainer = styled.div`
  // display: block;

  // if we want them in the same row
  display: flex;
  justify-content: flex-end;
`;

const ThemeButton: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null;
  }

  return (
    <>
      <StyledContainer className="flex space-x-2">
        <StyledButton onClick={() => {
          setTheme(theme === 'dark' ? 'light' : 'dark')
        }} type="button" className="mr-4 items-center px-6 pt-2.5 pb-2 dark:bg-soft-blue dark:hover:bg-sky-600 bg-sky-600 text-white font-medium text-xs leading-normal rounded shadow-md hover:bg-sky-600 hover:shadow-lg focus:bg-sky-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-600 active:shadow-lg transition duration-150 ease-in-out flex align-center">
          <Image src={theme === 'dark' ? '/sun.svg' : '/moon-white.svg'} alt='moon' width='20'
            height='20' />
        </StyledButton>
      </StyledContainer>
    </>
  )
}

export default ThemeButton;


