"use client"
import React, { useContext, useEffect, useState } from "react";
import { Moon } from 'phosphor-react';
import { useTheme } from "next-themes";


export interface ThemeButtonProps {
  theme: string | undefined;
  setTheme: (theme: string) => void
}

const ThemeButton = ({ setTheme, theme }: ThemeButtonProps) => {

  return (
    <Moon
      className="self-center"
      size={32}
      color={theme === 'dark' ? 'black' : 'white'}
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light')
      }}
    />
  )
}

export default ThemeButton;