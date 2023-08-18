"use client"
import React, { useContext, useEffect, useState } from "react";
import { Moon } from 'phosphor-react';
import { useTheme } from "next-themes";


export interface ThemeButtonProps {
  theme: string | undefined;
  setTheme: (theme: string) => void
}

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const isDarkTheme = Boolean(theme === 'dark');

  return (
    <Moon
      className="self-center"
      size={32}
      color={!isDarkTheme ? '#000' : 'white'}
      onClick={() => {
        setTheme(isDarkTheme ? 'light' : 'dark')
      }}
    />
  )
}

export default ThemeButton;