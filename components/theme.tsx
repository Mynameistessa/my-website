import React, { useEffect, useState } from "react";
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { Moon } from 'phosphor-react';

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
    <Moon
      className="self-center"
      size={32}
      color={theme === 'dark' ? 'black' : 'white'}
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
      }}
    />
  )
}

export default ThemeButton;