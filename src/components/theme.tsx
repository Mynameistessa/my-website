import React, { useEffect, useState } from "react";
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Contents from "./dropdown";

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
    <Image
      className="self-center"
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
      }}
      src={theme === 'dark' ? '/moon.svg' : '/ivory-sun.svg'} alt='moon' width='40' height='40'
    />
  )
}

export default ThemeButton;


